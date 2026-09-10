# Bài 08 — Phase delay: đầu đi trước, đuôi theo sau

## 1. Mục tiêu học tập

Biến gradient dọc thân thành độ trễ thời gian.

## 2. Hai cách tư duy

### 2.1 Delay trực tiếp

```text
local_time = time - body_factor × delay
```

### 2.2 Phase offset cho sóng

```text
phase = time × frequency - body_factor × phase_delay
```

## 3. Ý nghĩa

- đầu: `body_factor ≈ 0` → phản ứng sớm;
- thân giữa: trễ vừa;
- đuôi/vây sau: trễ lớn.

## 4. Tuning

Giá trị âm/dương phụ thuộc trục và hướng mesh. Không nên học thuộc “-50”; hãy kiểm tra bằng nguyên lý: **đầu phải thay đổi trước, đuôi phải theo sau**.

## 5. Bài tập

Tạo một viewer/debug color từ `body_factor` để chắc chắn gradient chạy đúng chiều.
