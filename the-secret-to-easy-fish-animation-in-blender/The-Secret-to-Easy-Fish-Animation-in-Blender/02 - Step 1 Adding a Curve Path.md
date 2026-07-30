# 02 — Bước 1: Thêm một Curve làm đường bơi

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Step one |
| **Thời điểm** | 00:52–01:10 |
| **Chủ đề chính** | Tạo Curve object làm đường dẫn chuyển động cho cá |

## 1. Mục tiêu bài học

- Hiểu vai trò của Curve trong kỹ thuật này: vừa là đường bơi, vừa (ở bước sau) là "công cụ" trực tiếp làm biến dạng thân cá.
- Biết dùng công cụ Draw để vẽ chính xác hình dạng đường đi mong muốn.
- Quyết định giữ đường Curve đơn giản ở bước này, để dành phần tinh chỉnh hình dạng phục vụ animation cho bước sau.

## 2. Nội dung chính

Bước đầu tiên là thêm một **Curve object** — đây sẽ là con đường mà con cá đi theo trong suốt animation. Trong **Edit Mode** của Curve, có thể dùng **công cụ Draw** để vẽ tự do chính xác hình dạng đường đi mong muốn (thay vì chỉ đặt từng điểm điều khiển Bezier thủ công), tiện lợi khi cần một quỹ đạo uốn lượn tự nhiên ngay từ đầu.

Tuy nhiên, tác giả chủ động vẽ một đường **đơn giản** ở bước này, vì sau đó trong video sẽ giới thiệu một **kỹ thuật dựa trên nguyên tắc vận động thực tế của cá** (chương 06–07) giúp cho animation "cảm thấy chân thực hơn rất nhiều" — kỹ thuật đó sẽ can thiệp trực tiếp vào hình dạng/độ cong của Curve (thêm góc lượn, chỉnh handle) để tạo hiệu ứng bơi tự nhiên, nên không cần đầu tư quá nhiều công sức vào hình dạng Curve ngay từ bước này.

Điểm quan trọng cần nắm: trong kỹ thuật này, Curve không chỉ đóng vai trò "đường dẫn" trừu tượng như trong nhiều kỹ thuật animation khác (ví dụ Follow Path constraint) — ở bước 4 (chương 05), chính hình dạng vật lý của Curve sẽ được dùng để **làm cong thân cá qua Curve Modifier**, nên độ cong và độ mượt của đường vẽ ở đây ảnh hưởng trực tiếp đến cả quỹ đạo di chuyển lẫn hình dáng uốn của thân cá cùng lúc.

## 3. Quy trình thực hành gợi ý

1. Thêm một Curve object (Bezier là lựa chọn phổ biến, phù hợp cho công cụ Draw và Curve Modifier).
2. Vào Edit Mode, thử công cụ Draw để vẽ nhanh một đường đi tự do nếu muốn kiểm soát chính xác hình dạng.
3. Với mục đích luyện tập ban đầu, có thể chỉ cần một đường thẳng hoặc uốn nhẹ đơn giản — sẽ quay lại tinh chỉnh chi tiết hình dạng ở bước animation (chương 06–07).
4. Ghi nhớ rằng Curve này sẽ được dùng lại ở bước 4 (Curve Modifier) — không xóa hoặc đổi cấu trúc cơ bản của nó sau khi đã bắt đầu gắn modifier.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Thêm Curve object | `Shift + A > Curve` |
| Vào/thoát Edit Mode | `Tab` |
| Công cụ Draw (vẽ tự do trong Edit Mode của Curve) | Toolbar bên trái viewport, chọn công cụ Draw |

## 5. Lưu ý & lỗi thường gặp

- Đừng dành quá nhiều thời gian hoàn thiện hình dạng Curve ngay ở bước này — phần lớn việc tinh chỉnh hình dạng phục vụ chuyển động bơi tự nhiên sẽ diễn ra ở chương 06–07, làm trước có thể phải chỉnh lại.
- Vì Curve sẽ vừa quyết định quỹ đạo di chuyển vừa (qua Curve Modifier) quyết định độ uốn thân cá, một đường Curve có góc quá gấp có thể khiến thân cá bị biến dạng bất thường ở bước sau — nên ưu tiên đường cong mượt mà ngay cả ở bản nháp đầu tiên.

## 6. Checklist thực hành

- [ ] Đã thêm được một Curve object trong scene.
- [ ] Đã thử qua công cụ Draw trong Edit Mode của Curve.
- [ ] Đã có một đường đi đơn giản, đủ dùng để tiếp tục các bước sau.

## 7. Tóm tắt

Curve trong kỹ thuật này đóng vai trò kép — vừa là đường bơi, vừa sẽ là công cụ uốn thân cá ở bước 4 — nên chỉ cần vẽ đơn giản ở bước này, để dành phần tinh chỉnh hình dạng phục vụ chuyển động bơi tự nhiên cho các bước animation phía sau.
