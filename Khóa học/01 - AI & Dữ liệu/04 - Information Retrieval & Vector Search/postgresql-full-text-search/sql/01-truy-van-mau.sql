-- Tập truy vấn thao tác từng khối trong DBeaver / psql.

-- 1. So sánh LIKE và ILIKE
SELECT id, content FROM quotes WHERE content LIKE 'Life%';
SELECT id, content FROM quotes WHERE content ILIKE '%life%';

-- 2. Chuyển thành tsvector, xem lexeme
SELECT to_tsvector('english', 'Darkness and light can be surprising');
SELECT to_tsvector('simple', 'The Who');
SELECT * FROM ts_debug('english', 'Darkness and light can be surprising');

-- 3. Các cách tạo tsquery
SELECT to_tsquery('english', 'dark & light');
SELECT plainto_tsquery('english', 'dark light');
SELECT phraseto_tsquery('english', 'beautiful day');
SELECT websearch_to_tsquery('english', 'Albert life -Einstein');

-- 4. Truy vấn FTS trên hai loại nguồn
WITH input AS (
   SELECT websearch_to_tsquery('english','Albert life -Einstein') AS tsq
)
SELECT d.source_type,d.source_id,d.title,d.body,
       ts_rank(d.search_doc,input.tsq) AS score
FROM search_documents d CROSS JOIN input
WHERE d.search_doc @@ input.tsq
ORDER BY score DESC,d.source_type,d.source_id
LIMIT 10;

-- 5. Highlight chỉ cho 10 kết quả đầu
WITH input AS (
  SELECT plainto_tsquery('english','beautiful day') AS tsq
), top_docs AS (
  SELECT d.*, i.tsq, ts_rank(d.search_doc, i.tsq) AS score
  FROM search_documents d CROSS JOIN input i
  WHERE d.search_doc @@ i.tsq
  ORDER BY score DESC, d.source_type, d.source_id
  LIMIT 10
)
SELECT source_type, source_id, title, score,
       ts_headline('english', body, tsq,
          'StartSel=<mark>,StopSel=</mark>,MaxWords=30,MinWords=5') AS snippet
FROM top_docs ORDER BY score DESC, source_type, source_id;

-- 6. Trigram similarity và gợi ý
SELECT show_trgm('something');
SELECT similarity('something','somthing');
SELECT word,similarity(word,'somthing') AS score
FROM search_terms WHERE word % 'somthing'
ORDER BY score DESC,word ASC LIMIT 5;

-- 7. Index & execution plan (dataset nhỏ vẫn có thể Seq Scan)
EXPLAIN (ANALYZE, BUFFERS)
SELECT source_type, source_id, title
FROM search_documents
WHERE search_doc @@ plainto_tsquery('english', 'life');

-- 8. Làm mới khi cập nhật dữ liệu. Unique indexes cần tồn tại.
-- REFRESH MATERIALIZED VIEW CONCURRENTLY search_documents;
-- REFRESH MATERIALIZED VIEW CONCURRENTLY search_terms;
