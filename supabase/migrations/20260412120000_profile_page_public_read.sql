-- Profile card (single row) + ordered social links for the product home page.
-- RLS: public read for anon + authenticated (no login required for this page).

create table public.profile_card (
  id smallint primary key default 1,
  constraint profile_card_singleton check (id = 1),
  name text not null,
  info text not null,
  avatar_url text,
  avatar_alt text not null default ''
);

alter table public.profile_card enable row level security;

create policy "Allow public read profile_card"
  on public.profile_card
  for select
  to anon, authenticated
  using (true);

create table public.social_links (
  id uuid primary key default gen_random_uuid(),
  icon text not null,
  label text not null,
  href text not null,
  sort_order int not null default 0
);

alter table public.social_links enable row level security;

create policy "Allow public read social_links"
  on public.social_links
  for select
  to anon, authenticated
  using (true);

-- Realtime (optional; home page subscribes to changes)
alter publication supabase_realtime add table public.profile_card;
alter publication supabase_realtime add table public.social_links;

insert into public.profile_card (id, name, info, avatar_url, avatar_alt)
values (1, 'Harry', 'Hi I''m Harry!', '/avatar.png', '')
on conflict (id) do nothing;

insert into public.social_links (icon, label, href, sort_order)
select v.icon, v.label, v.href, v.sort_order
from (
  values
    ('Instagram', 'Instagram', 'https://www.instagram.com/', 0),
    ('Medium', 'Medium', 'https://medium.com/', 1),
    ('LinkedIn', 'Linkedin', 'https://www.linkedin.com/', 2)
) as v(icon, label, href, sort_order)
where not exists (select 1 from public.social_links limit 1);
