-- LAB độc lập: PostgreSQL built-in FTS (không cần pg_textsearch).
-- CẢNH BÁO: chỉ chạy trên database thử nghiệm: reset bảng demo_articles.
DROP TABLE IF EXISTS demo_articles;
CREATE TABLE demo_articles (
  id BIGINT PRIMARY KEY,
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL
);
INSERT INTO demo_articles(id,url,title,body) VALUES
(1,'https://example.org/volcano','Volcano ash and flights','Volcanic eruption creates ash clouds that can disrupt aviation and flights.'),
(2,'https://example.org/jazz','Jazz trumpet in New Orleans','New Orleans is known for jazz and trumpet music.'),
(3,'https://example.org/apollo13','Apollo 13 mission','Apollo 13 was a NASA mission. This article describes the crew and mission.'),
(4,'https://example.org/light','Bioluminescence','Bioluminescence is the production of light by living organisms including animals.'),
(5,'https://example.org/plant','Carnivorous plants','Some plants eat insects by trapping prey.'),
(6,'https://example.org/rock','Jazz and rock','This article compares jazz and rock music.');
CREATE INDEX demo_articles_fts_idx
ON demo_articles USING GIN (to_tsvector('english', body));
ANALYZE demo_articles;

-- AND: yêu cầu tất cả lexeme của query.
SELECT id, title,
       ts_rank(to_tsvector('english', body),
               plainto_tsquery('english', 'volcano ash aviation')) AS rank
FROM demo_articles
WHERE to_tsvector('english', body) @@ plainto_tsquery('english','volcano ash aviation')
ORDER BY rank DESC LIMIT 10;

-- OR: nới tập kết quả.
SELECT id,title FROM demo_articles
WHERE to_tsvector('english',body) @@ to_tsquery('english', 'volcano | jazz | light')
ORDER BY id;

-- AND NOT: có jazz nhưng không có rock.
SELECT id,title FROM demo_articles
WHERE to_tsvector('english',body) @@ to_tsquery('english', 'jazz & !rock');

-- Phrase search (FTS phụ thuộc lexeme processing).
SELECT id,title FROM demo_articles
WHERE to_tsvector('english',body) @@ phraseto_tsquery('english','New Orleans');

-- Snippet marker là DỮ LIỆU; không đưa trực tiếp vào innerHTML.
SELECT title, ts_headline('english',body,
    plainto_tsquery('english','New Orleans'),
    'StartSel=@@H_START@@,StopSel=@@H_END@@,MaxFragments=2') AS snippet
FROM demo_articles WHERE id=2;

-- Giải thích kế hoạch thay vì dự đoán runtime.
EXPLAIN (ANALYZE, BUFFERS)
SELECT id,title FROM demo_articles
WHERE to_tsvector('english',body) @@ plainto_tsquery('english','jazz trumpet')
ORDER BY ts_rank(to_tsvector('english',body), plainto_tsquery('english','jazz trumpet')) DESC
LIMIT 10;
