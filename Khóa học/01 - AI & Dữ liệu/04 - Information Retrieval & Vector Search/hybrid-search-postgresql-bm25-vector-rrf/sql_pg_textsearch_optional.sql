-- Chỉ chạy khi PostgreSQL cung cấp pg_textsearch tương thích.
-- Chạy sql_postgres_baseline.sql trước trong database thử nghiệm.
-- Kiểm tra version trước khi dùng.
SELECT name, default_version, installed_version
FROM pg_available_extensions
WHERE name = 'pg_textsearch';

CREATE EXTENSION IF NOT EXISTS pg_textsearch;

CREATE INDEX demo_articles_bm25_idx
ON demo_articles USING bm25 (body)
WITH (text_config='english');

-- pg_textsearch: score âm, càng âm càng liên quan -> ORDER BY ASC.
SELECT id, title,
       body <@> to_bm25query('jazz trumpet New Orleans',
                             'demo_articles_bm25_idx') AS score
FROM demo_articles
ORDER BY score ASC LIMIT 5;

EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title
FROM demo_articles
ORDER BY body <@> to_bm25query('jazz trumpet New Orleans',
                               'demo_articles_bm25_idx')
LIMIT 5;
