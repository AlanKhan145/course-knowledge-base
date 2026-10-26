-- Thực hành tự chọn: tìm món ăn bằng PostgreSQL FTS tiếng Việt ở mức tối giản.
CREATE TABLE IF NOT EXISTS food_dishes (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  ingredients text NOT NULL,
  search_doc tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('simple'::regconfig, coalesce(name,'')), 'A') ||
    setweight(to_tsvector('simple'::regconfig, coalesce(ingredients,'')), 'B')
  ) STORED
);

CREATE INDEX IF NOT EXISTS food_dishes_search_gin
ON food_dishes USING GIN (search_doc);

INSERT INTO food_dishes(name,ingredients) VALUES
('Mì xào trứng','mì, trứng, hành lá, rau cải'),
('Mì nước rau củ','mì, cà rốt, nấm, rau xanh'),
('Phở gà','bánh phở, thịt gà, hành, gừng'),
('Cơm rang trứng','cơm, trứng, hành, dầu ăn'),
('Bún cá','bún, cá, rau thơm');

SELECT id,name,ingredients,
       ts_rank(search_doc, plainto_tsquery('simple','mì')) AS score
FROM food_dishes
WHERE search_doc @@ plainto_tsquery('simple','mì')
ORDER BY score DESC,id;

-- Thử tiếp tìm `trứng` và so sánh thứ tự ưu tiên tên món / nguyên liệu.
-- Cấu hình simple không tự động ghép "my" với "mì" và không phân đoạn từ ghép tiếng Việt.
