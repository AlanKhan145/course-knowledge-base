# Bài 13 — Tuning để cá bớt “máy móc”

## 1. Mục tiêu học tập

Biết chỉnh tham số theo vai trò thay vì thử số ngẫu nhiên.

## 2. Bộ tham số nên expose

| Tham số | Chức năng |
|---|---|
| Speed | Tốc độ chạy qua trường noise |
| Path Scale | Độ lớn vùng bơi |
| Seed | Pattern quỹ đạo |
| Look Ahead | Độ mượt hướng quay |
| Body Frequency | Nhịp quẫy |
| Body Strength | Biên độ uốn |
| Tail Phase | Độ trễ đầu → đuôi |
| Turn Strength | Mức nghiêng khi đổi hướng |

## 3. Nguyên tắc phối hợp

Khi tốc độ tăng, thường cần tăng nhẹ frequency/amplitude của đuôi. Khi hover hoặc bơi chậm, thân ít uốn và vây ngực có thể đảm nhận phần lớn chuyển động.

## 4. Noise vs sine

- Noise: phù hợp cho quỹ đạo, drift, variation.
- Sine: phù hợp cho nhịp propulsion có chu kỳ.
- Noise nhẹ có thể modulate sine để tránh tuyệt đối đều.

## 5. Bài tập

Tạo ba preset: `Idle`, `Cruise`, `Fast Swim`.
