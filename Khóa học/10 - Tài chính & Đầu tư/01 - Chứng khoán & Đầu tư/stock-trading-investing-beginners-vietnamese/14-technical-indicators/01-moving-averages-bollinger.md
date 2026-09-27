# Moving Averages và Bollinger Bands

## Bài gốc được gộp / phạm vi

Moving Averages; Weighted MA; Exponential MA; Using MAs; Bollinger Bands.

## Mục tiêu học tập

Sau bài này, bạn nên có thể giải thích khái niệm bằng lời của mình, đọc được ví dụ cơ bản và biết giới hạn của công cụ trước khi áp dụng.

## Nội dung cốt lõi

SMA:

`SMA_n = (P1 + P2 + ... + Pn) / n`

EMA dùng trọng số lớn hơn cho dữ liệu mới:

`EMA_t = αP_t + (1-α)EMA_(t-1)`, với `α = 2/(n+1)`.

Bollinger Bands thường là:

`Middle = SMA_n`

`Upper/Lower = SMA_n ± kσ`

Moving average làm mượt dữ liệu nên luôn có độ trễ. Crossovers có thể hoạt động trong xu hướng nhưng dễ whipsaw khi sideway. Bollinger Bands mô tả giá tương đối với độ biến động gần đây; chạm band không đồng nghĩa phải đảo chiều.

## Tự kiểm tra

- Tóm tắt bài bằng 3–5 câu theo cách hiểu của bạn.
- Tự tạo một ví dụ số đơn giản để kiểm tra lại khái niệm.
- Ghi lại một điều có thể gây hiểu nhầm khi áp dụng ngoài thực tế.
