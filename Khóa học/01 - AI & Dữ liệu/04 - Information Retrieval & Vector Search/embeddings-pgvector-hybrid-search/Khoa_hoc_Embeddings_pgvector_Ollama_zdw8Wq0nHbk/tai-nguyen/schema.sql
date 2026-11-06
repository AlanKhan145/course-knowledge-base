-- PostgreSQL / Supabase local, demonstration schema.
-- Apply in a Supabase migration. Requires pgvector bundled by the stack.
create schema if not exists extensions;
create extension if not exists vector with schema extensions;
set search_path to public, extensions;

create table if not exists public.chunks (
    id bigint generated always as identity primary key,
    content text not null check (length(trim(content)) > 0),
    metadata jsonb not null default '{}'::jsonb,
    embedding extensions.vector(1024) not null,
    fts tsvector generated always as (to_tsvector('english', content)) stored
);

create index if not exists chunks_embedding_hnsw_idx
    on public.chunks using hnsw (embedding vector_cosine_ops);
create index if not exists chunks_fts_gin_idx
    on public.chunks using gin (fts);
create index if not exists chunks_metadata_gin_idx
    on public.chunks using gin (metadata);

-- Keep client/browser roles from reading vector content without policies.
-- Server-side service-role/secret key bypasses RLS; never expose that key.
alter table public.chunks enable row level security;

create or replace function public.match_chunks(
    query_embedding extensions.vector(1024),
    match_count integer default 5
)
returns table (
    id bigint,
    content text,
    metadata jsonb,
    similarity double precision
)
language sql stable
set search_path = public, extensions
as $$
    select c.id, c.content, c.metadata,
           1 - (c.embedding <=> query_embedding) as similarity
    from public.chunks c
    order by c.embedding <=> query_embedding
    limit least(greatest(match_count, 1), 50);
$$;
