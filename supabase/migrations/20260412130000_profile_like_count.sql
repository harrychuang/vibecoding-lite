-- Atomic like counter on the singleton profile row.
-- Anonymous clients cannot UPDATE the table directly; they may only call increment_profile_like(),
-- which performs a single guarded increment (SECURITY DEFINER, table owner bypasses RLS on update).

alter table public.profile_card
  add column if not exists like_count bigint not null default 0;

create or replace function public.increment_profile_like()
returns bigint
language sql
security definer
set search_path = public
as $$
  update public.profile_card
  set like_count = like_count + 1
  where id = 1
  returning like_count;
$$;

comment on function public.increment_profile_like() is
  'Increments profile_card.like_count for id=1; intended for anon/authenticated callers via RPC.';

revoke all on function public.increment_profile_like() from public;
grant execute on function public.increment_profile_like() to anon, authenticated;
