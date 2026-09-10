# Bài 04 — Center noise và điều khiển biên độ

## 1. Mục tiêu học tập

Biến output noise thành offset cân đối quanh vị trí gốc.

## 2. Vấn đề

Noise thường nằm trong miền dương. Nếu đưa thẳng vào Offset, cá có xu hướng bị đẩy về một phía.

## 3. Centering

Nếu noise nằm xấp xỉ `[0, 1]`, ta đưa nó về quanh 0:

```text
centered = noise - 0.5
```

Sau đó:

```text
offset = centered × amplitude
```

Ví dụ `amplitude = 10` cho phạm vi chuyển động lớn hơn.

## 4. Node graph khái niệm

```text
Noise Color/Fac
→ Subtract 0.5
→ Vector/Math Scale
→ Set Position : Offset
```

## 5. Vì sao nên expose `Amplitude`?

Không nên chôn giá trị 10, 15 hay 20 trong graph. Hãy đưa chúng thành Group Input để tái sử dụng.

## 6. Bài tập

Tạo ba preset: `Small Tank`, `Medium Tank`, `Open Water`.
