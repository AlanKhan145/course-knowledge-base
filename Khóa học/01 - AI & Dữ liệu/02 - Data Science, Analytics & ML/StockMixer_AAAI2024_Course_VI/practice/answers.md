# Đáp án gợi ý

## Bài 01

1. `[500,16,10]`.
2. Một stock: `[16,10]` → transpose `[10,16]` → trở lại `[16,10]`.
3. `{16,8,4}`.
4. `d = 16 + 8 + 4 = 28` theo cách paper mô tả.
5. `H = [500,28]` nếu dùng đúng `d=28` ở ví dụ này.
6. `M1 = [12,500]`, `M2 = [500,12]`.
7. `H_hat = [500,28]`.

## Bài 02A

Ground truth difference là `0.04`.

- Trường hợp 1: predicted difference `0.02`; tích cùng dấu → biểu thức bên trong max âm → penalty 0.
- Trường hợp 2: predicted difference `-0.03`; tích trái dấu → sau dấu âm thành dương → có penalty.

## Bài 03 - gợi ý chính

- NYSE: StockMixer không đứng đầu IC và Precision@N; IC bằng STHAN-SR và dưới ESTIMATE, Precision@N dưới STHAN-SR.
- Bỏ Time Mixing trên NASDAQ làm RIC `0.501 → 0.164`, giảm khoảng 67.3% so với StockMixer đầy đủ.
- `LSTM + Stock Mixing` cải thiện rõ so với LSTM trên cả NASDAQ và NYSE, cho thấy stock module mang contribution riêng.
