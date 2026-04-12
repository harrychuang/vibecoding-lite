"use client";

import type { ButtonHTMLAttributes } from "react";
import { useCallback, useEffect, useState } from "react";
/**
 * Figma profile-card（node 103:285）。
 * 文案暫寫於此（workshop 豁免 i18n；正式產品應改由 i18n 來源提供）。
 */
import styles from "./page.module.scss";
import { Profile, Button, BUTTON_SOCIAL_PLATFORMS } from "storybook";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

/** storybook Button 會把其餘 props 轉給原生 button，但套件型別未包含原生事件；僅供此頁傳入 onClick 等。 */
type ButtonNativeExtras = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "disabled" | "aria-busy"
>;

type ProfileRow = {
  name: string;
  info: string;
  avatar_url: string | null;
  avatar_alt: string;
  like_count: number;
};

type SocialLinkRow = {
  icon: string;
  label: string;
  href: string;
};

function resolveSocialIcon(
  raw: string,
): (typeof BUTTON_SOCIAL_PLATFORMS)[number] {
  const n = raw.trim();
  if ((BUTTON_SOCIAL_PLATFORMS as readonly string[]).includes(n)) {
    return n as (typeof BUTTON_SOCIAL_PLATFORMS)[number];
  }
  return "Instagram";
}

export default function Home() {
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLinkRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [likeBusy, setLikeBusy] = useState(false);
  const [likeActionError, setLikeActionError] = useState<string | null>(null);

  const loadFromSupabase = useCallback(async (signal?: AbortSignal) => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error(
        "缺少環境變數：請在 .env.local 設定 NEXT_PUBLIC_SUPABASE_URL 與 NEXT_PUBLIC_SUPABASE_ANON_KEY",
      );
    }

    const supabase = createBrowserSupabaseClient();

    const profileQuery = supabase
      .from("profile_card")
      .select("name, info, avatar_url, avatar_alt, like_count")
      .eq("id", 1)
      .maybeSingle();

    const linksQuery = supabase
      .from("social_links")
      .select("icon, label, href, sort_order")
      .order("sort_order", { ascending: true });

    const [{ data: profileData, error: profileError }, { data: linksData, error: linksError }] =
      await Promise.all([profileQuery, linksQuery]);

    if (signal?.aborted) return;

    if (profileError) throw profileError;
    if (linksError) throw linksError;

    if (!profileData) {
      throw new Error(
        "資料庫中找不到 profile_card（id=1）。請套用專案內 migration 或手動插入一筆資料。",
      );
    }

    setProfile({
      name: profileData.name,
      info: profileData.info,
      avatar_url: profileData.avatar_url,
      avatar_alt: profileData.avatar_alt ?? "",
      like_count: Number(profileData.like_count ?? 0),
    });
    setSocialLinks(
      (linksData ?? []).map(({ icon, label, href }) => ({ icon, label, href })),
    );
  }, []);

  const recordLike = useCallback(async () => {
    if (likeBusy) return;
    setLikeBusy(true);
    setLikeActionError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data, error: rpcError } = await supabase.rpc("increment_profile_like");
      if (rpcError) throw rpcError;
      const next =
        data === null || data === undefined
          ? undefined
          : typeof data === "number"
            ? data
            : Number(data);
      if (next !== undefined && !Number.isNaN(next)) {
        setProfile((prev) => (prev ? { ...prev, like_count: next } : prev));
      }
    } catch (e) {
      console.error("[like] increment_profile_like failed", e);
      setLikeActionError("無法送出，請稍後再試");
    } finally {
      setLikeBusy(false);
    }
  }, [likeBusy]);

  useEffect(() => {
    const ac = new AbortController();
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        await loadFromSupabase(ac.signal);
      } catch (e) {
        if (cancelled || ac.signal.aborted) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setProfile(null);
        setSocialLinks([]);
      } finally {
        if (!cancelled && !ac.signal.aborted) setLoading(false);
      }
    })();

    let supabase: ReturnType<typeof createBrowserSupabaseClient> | null = null;
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        supabase = createBrowserSupabaseClient();
      }
    } catch {
      supabase = null;
    }

    if (!supabase) {
      return () => {
        cancelled = true;
        ac.abort();
      };
    }

    const channel = supabase
      .channel("home-profile-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "profile_card" },
        () => {
          void (async () => {
            try {
              await loadFromSupabase();
            } catch {
              /* 即時更新失敗時保留既有畫面；必要時可改為 setError */
            }
          })();
        },
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "social_links" },
        () => {
          void (async () => {
            try {
              await loadFromSupabase();
            } catch {
              /* 同上 */
            }
          })();
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      ac.abort();
      void supabase.removeChannel(channel);
    };
  }, [loadFromSupabase]);

  if (loading) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p className={styles.status} role="status">
            載入中…
          </p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p className={styles.error} role="alert">
            {error.message}
          </p>
        </main>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Profile
          name={profile.name}
          info={profile.info}
          avatarSrc={profile.avatar_url ?? undefined}
          avatarAlt={profile.avatar_alt}
        />
        <div className={styles.links}>
          {socialLinks.map(({ icon, label, href }) => (
            <Button
              key={`${label}-${href}`}
              variant="default"
              icon={resolveSocialIcon(icon)}
              label={label}
              {...({
                onClick: () =>
                  window.open(href, "_blank", "noopener,noreferrer"),
              } satisfies ButtonNativeExtras)}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <Button
            variant="like"
            icon="Heart"
            label={`Like · ${profile.like_count}`}
            {...({
              onClick: () => {
                void recordLike();
              },
              disabled: likeBusy,
              "aria-busy": likeBusy,
            } satisfies ButtonNativeExtras)}
          />
          {likeActionError ? (
            <p className={styles.likeActionError} role="status">
              {likeActionError}
            </p>
          ) : null}
        </div>
      </main>
    </div>
  );
}
