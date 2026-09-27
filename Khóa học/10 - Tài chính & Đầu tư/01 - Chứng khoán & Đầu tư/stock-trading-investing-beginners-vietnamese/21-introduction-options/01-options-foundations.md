# Options foundations: Call, Put, Strike, Expiry

## Bài gốc được gộp / phạm vi

Introduction to Options; Formally Defining Options; Options Terminology.

## Mục tiêu học tập

Sau bài này, bạn nên có thể giải thích khái niệm bằng lời của mình, đọc được ví dụ cơ bản và biết giới hạn của công cụ trước khi áp dụng.

## Nội dung cốt lõi

**Call** cho người mua quyền mua tài sản theo strike; **Put** cho quyền bán. Người mua trả premium; người bán nhận premium nhưng gánh nghĩa vụ theo hợp đồng.

Tại expiry:
- Intrinsic value của call: `max(S_T - K, 0)`
- Intrinsic value của put: `max(K - S_T, 0)`

Các thuật ngữ: underlying, strike, expiry, premium, ITM/ATM/OTM, contract multiplier, implied volatility.

Giá option trước expiry còn có time value. Vì vậy đúng hướng tài sản cơ sở vẫn có thể lỗ nếu thời gian hoặc volatility di chuyển bất lợi.

## Tự kiểm tra

- Tóm tắt bài bằng 3–5 câu theo cách hiểu của bạn.
- Tự tạo một ví dụ số đơn giản để kiểm tra lại khái niệm.
- Ghi lại một điều có thể gây hiểu nhầm khi áp dụng ngoài thực tế.
