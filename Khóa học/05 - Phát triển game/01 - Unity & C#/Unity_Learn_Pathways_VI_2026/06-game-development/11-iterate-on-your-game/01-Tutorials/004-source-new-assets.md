---
title: 'Source new assets'
pathway: 'Game Development'
module: 'Iterate on your game'
lesson_number: 4
unity_version: '6.3'
content_type: 'Tài liệu tiếng Việt tự biên soạn theo đề mục Unity Learn'
coverage: 'outline_based_not_official_transcript'
---

# Bài 04 — Source new assets

> **Chủ đề:** Tìm, đánh giá và nhập asset. **Nguồn tham khảo:** [Unity Learn – Iterate on your game](https://learn.unity.com/pathway/game-development/unit/iterate-on-your-game?version=6.3). Nội dung này không phải toàn văn hoặc bản dịch chính thức.

## 1. Mục tiêu học tập

- Hiểu vấn đề cần giải quyết và mô tả kết quả mong đợi.
- Thực hành trong Unity Editor thông qua một ví dụ nhỏ.
- Chạy kiểm thử, xác định lỗi và ghi lại cải tiến.

## 2. Kiến thức nền tảng

Nên bắt đầu từ một mục tiêu cụ thể, thử với scene nhỏ, sử dụng các thành phần GameObject, Component, Inspector và Play mode để đánh giá kết quả. Chỉ thay đổi một yếu tố mỗi lần để dễ xác định ảnh hưởng.

## 3. Bài thực hành

1. Mở project và scene thử nghiệm trong Unity.
2. Chọn một nhiệm vụ liên quan đến **Tìm, đánh giá và nhập asset** và xác định tiêu chí đạt.
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

## Bổ sung: Quy trình chọn và nhập asset

```mermaid
flowchart TD
    A[Xác định asset còn thiếu] --> B[Tìm asset phù hợp]
    B --> C{Kiểm tra giấy phép và nguồn}
    C -->|Hợp lệ| D[Tải và nhập vào Unity]
    C -->|Không phù hợp| B
    D --> E[Kiểm tra scale / material / texture]
    E --> F[Thử trong scene]
    F --> G[Ghi nguồn và đánh giá hiệu năng]
```

| Tiêu chí | Câu hỏi trước khi dùng |
|---|---|
| Bản quyền | Giấy phép cho phép sử dụng trong dự án không? |
| Thẩm mỹ | Phong cách có thống nhất với game không? |
| Kỹ thuật | Định dạng, rig, texture, shader có tương thích không? |
| Hiệu năng | Polycount và dung lượng texture có phù hợp nền tảng không? |

**Phân biệt:** File nguồn nói chung về prototype và greyboxing; hướng dẫn kiểm tra giấy phép, nhập và tối ưu asset ở đây là phần mở rộng nhằm bám sát tên bài “Source new assets”.

---

*Ghi chú phiên bản:* Cần kiểm tra UI và tài liệu tương ứng với phiên bản Unity đang sử dụng.
