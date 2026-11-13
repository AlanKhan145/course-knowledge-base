# Hệ thiết kế giao diện

Phong cách "giấy & mực": nền ấm, chữ đậm như mực, một màu nhấn xanh rêu và màu hổ phách cho tiến độ. Không dùng gradient tím, ảnh stock hay số liệu giả. Token nằm trong `src/app/globals.css` (biến CSS + `@theme` của Tailwind v4). Dark mode dùng class `.dark` (next-themes), có tuỳ chọn theo hệ thống.

| Vai trò | Sáng | Tối | Dùng cho |
|---|---|---|---|
| `bg` / `surface` | #f6f5f1 / #fff | #121311 / #1b1c1a | nền trang / thẻ |
| `text` / `muted` | #1d1c19 / #6c685e | #ecebe5 / #a09d93 | chữ chính / phụ |
| `accent` | #1e6b58 | #5ec2a1 | hành động chính, link, trạng thái đang chọn |
| `amber` | #c98a14 | #f0b74c | chuỗi ngày, cảnh báo nhẹ, đúng một phần |
| `success` / `danger` / `info` / `violet` | — | — | đúng · sai · ghi chú · kiểm tra / quan trọng |

## Chữ

- Giao diện và nội dung: **Be Vietnam Pro** (hỗ trợ đầy đủ tiếng Việt). Có thể chuyển sang **Literata** (có chân) khi đọc dài.
- Code: **JetBrains Mono**.
- Bài đọc: cỡ mặc định 17 px, chỉnh được 14–24 px; dòng cao 1,78; độ rộng vùng đọc 40 / 46 / 58 rem.

## Thành phần

- Thẻ bo `rounded-2xl`, viền mảnh `border-border`, bóng nhẹ `shadow-card`; khi hover viền đậm lên và thẻ nhấc lên 2 px.
- **Bìa khóa học**: lưới 4×2 ô hình học kiểu Bauhaus (¼ tròn, nửa tròn, tam giác, hình tròn), dùng màu đậm của lĩnh vực + hổ phách + kem. Bìa sinh cố định theo id khóa nên mỗi khóa có một bìa riêng. Ý tưởng lấy từ mockup `design/mockups/dashboard.webp`.
- Callout: 7 loại (Lưu ý, Mẹo, Quan trọng, Cảnh báo, Cẩn thận, Ví dụ, Tóm tắt), mỗi loại một icon và một màu.
- Quiz: mỗi câu một thẻ; phương án là ô chọn lớn; ba nút mức tự tin; sau khi nộp bài, viền thẻ chuyển xanh / đỏ / hổ phách, và có vòng điểm số.
- Trạng thái bài học: ✓ xanh = đã học, ◉ hổ phách = đang học, ○ = chưa học. Chấm nhỏ biên tập: xanh dương = đã đọc qua, đỏ = cần sửa, xanh lá = đã sửa.

## Bố cục

- Đọc bài trên desktop có 3 cột: danh sách bài 20 rem, bài đọc, mục lục 16 rem. Màn hình < lg chuyển danh sách bài thành drawer; < xl chuyển mục lục thành bottom sheet.
- Lề 16 px trên điện thoại, không cuộn ngang (kiểm bằng E2E). Bảng và code cuộn ngang bên trong khung riêng.
- Tôn trọng `prefers-reduced-motion`. Focus ring dùng màu nhấn. Có link "Bỏ qua tới nội dung". Mọi nút chỉ có icon đều có `aria-label`.

Mockup và quy trình sinh ý tưởng giao diện: `design/DESIGN_TEMPLATE.md`, `design/README.md`.
