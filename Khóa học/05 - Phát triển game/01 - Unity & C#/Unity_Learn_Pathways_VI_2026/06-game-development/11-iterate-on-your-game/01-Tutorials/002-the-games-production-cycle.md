---
title: 'The games production cycle'
pathway: 'Game Development'
module: 'Iterate on your game'
lesson_number: 2
unity_version: '6.3'
content_type: 'Tài liệu tiếng Việt tự biên soạn theo đề mục Unity Learn'
coverage: 'outline_based_not_official_transcript'
---

# Bài 02 — The games production cycle

> **Chủ đề:** Chu trình thiết kế, prototype, kiểm thử và lặp. **Nguồn tham khảo:** [Unity Learn – Iterate on your game](https://learn.unity.com/pathway/game-development/unit/iterate-on-your-game?version=6.3). Nội dung này không phải toàn văn hoặc bản dịch chính thức.

## 1. Mục tiêu học tập

- Hiểu vấn đề cần giải quyết và mô tả kết quả mong đợi.
- Thực hành trong Unity Editor thông qua một ví dụ nhỏ.
- Chạy kiểm thử, xác định lỗi và ghi lại cải tiến.

## 2. Kiến thức nền tảng

Nên bắt đầu từ một mục tiêu cụ thể, thử với scene nhỏ, sử dụng các thành phần GameObject, Component, Inspector và Play mode để đánh giá kết quả. Chỉ thay đổi một yếu tố mỗi lần để dễ xác định ảnh hưởng.

## 3. Bài thực hành

1. Mở project và scene thử nghiệm trong Unity.
2. Chọn một nhiệm vụ liên quan đến **Chu trình thiết kế, prototype, kiểm thử và lặp** và xác định tiêu chí đạt.
3. Thực hiện một thay đổi nhỏ, lưu scene, chạy Play mode và đọc Console.
4. Ghi lại kết quả trước/sau, các lỗi xuất hiện và cách khắc phục.

## 4. Ghi chép kiểm thử

| Mong đợi | Thực tế | Minh chứng | Điều chỉnh tiếp theo |
|---|---|---|---|
| Điền trước khi chạy | Điền sau kiểm thử | Ảnh/Console | Quyết định giữ hay sửa |

## 5. Checklist

- [ ] Hoàn thành một tình huống thực hành.
- [ ] Có kết quả quan sát và minh chứng.
- [ ] Giải thích được ít nhất một vấn đề.
- [ ] Đối chiếu lại nội dung chính thức trên Unity Learn.

---

## Sơ đồ: Chu trình sản xuất và cải tiến game

```mermaid
flowchart TD
    A[Ý tưởng / yêu cầu] --> B[Thiết kế gameplay và core loop]
    B --> C[Prototype với placeholder]
    C --> D[Playtest với người chơi]
    D --> E[Phân tích phản hồi]
    E --> F[Ưu tiên backlog]
    F --> C
    E --> G{Đã đáp ứng tiêu chí?}
    G -->|Có| H[Hoàn thiện và phát hành]
```

### Mẫu nhật ký lặp (bổ sung)

| Phiên bản | Giả thuyết | Thay đổi | Chỉ dấu quan sát | Quyết định |
|---|---|---|---|---|
| v0.1 | Điều khiển quá nhanh | Giảm `speed` | Người thử vượt chướng ngại ít hơn | Giữ hoặc thử lại |

Nên phân biệt **lỗi kỹ thuật** (game chạy sai) và **vấn đề trải nghiệm** (game chạy đúng nhưng khó điều khiển).

---

*Ghi chú phiên bản:* Cần kiểm tra UI và tài liệu tương ứng với phiên bản Unity đang sử dụng.
