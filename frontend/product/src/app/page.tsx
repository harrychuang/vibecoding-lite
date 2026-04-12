"use client";

import type { ButtonHTMLAttributes } from "react";
/**
 * Figma profile-card（node 103:285）。
 * 文案暫寫於此（workshop 豁免 i18n；正式產品應改由 i18n 來源提供）。
 */
import styles from "./page.module.scss";
import { Profile, Button } from "storybook";

/** storybook Button 會把其餘 props 轉給原生 button，但套件型別未包含原生事件；僅供此頁傳入 onClick 等。 */
type ButtonNativeExtras = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

const SOCIAL_LINKS = [
  {
    icon: "Instagram" as const,
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    icon: "Medium" as const,
    label: "Medium",
    href: "https://medium.com/",
  },
  {
    icon: "LinkedIn" as const,
    label: "Linkedin",
    href: "https://www.linkedin.com/",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Profile
          name="Harry"
          info="Hi I'm Harry!"
          avatarSrc="/avatar.png"
          avatarAlt=""
        />
        <div className={styles.links}>
          {SOCIAL_LINKS.map(({ icon, label, href }) => (
            <Button
              key={label}
              variant="default"
              icon={icon}
              label={label}
              {...({
                onClick: () =>
                  window.open(href, "_blank", "noopener,noreferrer"),
              } satisfies ButtonNativeExtras)}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <Button variant="like" icon="Heart" label="Like" />
        </div>
      </main>
    </div>
  );
}
