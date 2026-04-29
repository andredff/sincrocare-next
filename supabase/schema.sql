-- SincroCare — Schema inicial
-- Execute no Supabase SQL Editor

-- Perfis de usuário (cuidadores)
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Usuário vê apenas seu perfil"
  on profiles for select
  using (auth.uid() = id);

create policy "Usuário atualiza apenas seu perfil"
  on profiles for update
  using (auth.uid() = id);

-- Crianças cadastradas
create table if not exists children (
  id uuid primary key default gen_random_uuid(),
  guardian_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  birth_date date,
  diagnosis text,
  support_level int check (support_level between 1 and 3),
  school text,
  photo_url text,
  created_at timestamptz default now()
);

alter table children enable row level security;

create policy "Cuidador acessa apenas seus filhos"
  on children for all
  using (auth.uid() = guardian_id);

-- Profissionais de saúde
create table if not exists professionals (
  id uuid primary key default gen_random_uuid(),
  child_id uuid references children(id) on delete cascade not null,
  guardian_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  role text not null,
  status text default 'Ativo',
  last_contact timestamptz,
  color text default '#8DA398',
  initials text,
  created_at timestamptz default now()
);

alter table professionals enable row level security;

create policy "Cuidador acessa profissionais de seus filhos"
  on professionals for all
  using (auth.uid() = guardian_id);

-- Eventos de rotina
create table if not exists routine_events (
  id uuid primary key default gen_random_uuid(),
  child_id uuid references children(id) on delete cascade not null,
  guardian_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  subtitle text,
  time_of_day time not null,
  status text default 'later' check (status in ('done', 'soon', 'later')),
  date date default current_date,
  created_at timestamptz default now()
);

alter table routine_events enable row level security;

create policy "Cuidador acessa rotinas de seus filhos"
  on routine_events for all
  using (auth.uid() = guardian_id);

-- Itens de saúde (medicações e alergias)
create table if not exists health_items (
  id uuid primary key default gen_random_uuid(),
  child_id uuid references children(id) on delete cascade not null,
  guardian_id uuid references profiles(id) on delete cascade not null,
  type text not null check (type in ('medication', 'allergy')),
  title text not null,
  description text,
  active boolean default true,
  created_at timestamptz default now()
);

alter table health_items enable row level security;

create policy "Cuidador acessa itens de saúde de seus filhos"
  on health_items for all
  using (auth.uid() = guardian_id);

-- Feed de atividades (medicações dadas, relatórios, marcos)
create table if not exists feed_items (
  id uuid primary key default gen_random_uuid(),
  child_id uuid references children(id) on delete cascade not null,
  guardian_id uuid references profiles(id) on delete cascade not null,
  type text not null check (type in ('medication', 'report', 'milestone')),
  title text not null,
  subtitle text,
  occurred_at timestamptz default now(),
  created_at timestamptz default now()
);

alter table feed_items enable row level security;

create policy "Cuidador acessa feed de seus filhos"
  on feed_items for all
  using (auth.uid() = guardian_id);

-- Trigger: cria perfil automaticamente no signup
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
