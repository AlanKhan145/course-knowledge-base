# Khóa học tiếng Anh theo chủ đề với Oxford Picture Dictionary (Anh–Việt)

> Bộ bài học cá nhân phục vụ tự học, được tổ chức từ bản PDF nằm trong Google Drive của người dùng.

## Tổng quan

- **Nguồn:** *The Oxford Picture Dictionary – English/Vietnamese* (bản sách quét).
- **Số trang PDF:** 238; **số trang minh họa chính:** 171 (trang in 2–172).
- **Cấu trúc:** 12 chủ đề, 129 bài học Markdown, mỗi bài là **một file `.md` đặt ngay trong thư mục chủ đề**, cùng **một ảnh ghép duy nhất** cùng thư mục với file `.md` (giữ nguyên nội dung các trang sách của bài).
- **Ngôn ngữ:** Hướng dẫn tiếng Việt; tiêu đề và từ vựng Anh–Việt; mẫu câu thực hành tiếng Anh.
- **Ánh xạ trang:** Trang in `n` (từ 2 đến 172) tương ứng trang PDF `n + 10`.
- **Ghi chú bản quét:** PDF gốc là ảnh scan, không có text layer; các bảng từ vựng mẫu được biên soạn bổ sung để học, không phải bản chép/nhận dạng đầy đủ từ ảnh.
- **Phụ lục:** Các trang đầu sách, chỉ mục Anh/Việt và bìa sau được lưu tại [`tai-lieu-tham-khao/`](tai-lieu-tham-khao/README.md).

## Bắt đầu học

Mở một file bài học, ví dụ `bai-hoc/01_everyday-language/01_a-classroom.md`, bằng VS Code (Markdown Preview), Obsidian hay trình đọc Markdown hỗ trợ ảnh. Ảnh ghép xuất hiện trực tiếp trong bài và có thể zoom/phóng to.

| Chủ đề | Tên tiếng Anh | Số bài | Mở chủ đề |
|---:|---|---:|---|
| 01. Ngôn ngữ hằng ngày | Everyday Language | 15 | [Danh sách bài](bai-hoc/01_everyday-language/README.md) |
| 02. Con người | People | 7 | [Danh sách bài](bai-hoc/02_people/README.md) |
| 03. Nhà cửa | Housing | 14 | [Danh sách bài](bai-hoc/03_housing/README.md) |
| 04. Thực phẩm và ăn uống | Food | 12 | [Danh sách bài](bai-hoc/04_food/README.md) |
| 05. Trang phục | Clothing | 7 | [Danh sách bài](bai-hoc/05_clothing/README.md) |
| 06. Sức khỏe | Health | 10 | [Danh sách bài](bai-hoc/06_health/README.md) |
| 07. Cộng đồng | Community | 11 | [Danh sách bài](bai-hoc/07_community/README.md) |
| 08. Giao thông | Transportation | 7 | [Danh sách bài](bai-hoc/08_transportation/README.md) |
| 09. Các lĩnh vực học tập | Areas of Study | 13 | [Danh sách bài](bai-hoc/09_areas-of-study/README.md) |
| 10. Thực vật và động vật | Plants and Animals | 6 | [Danh sách bài](bai-hoc/10_plants-and-animals/README.md) |
| 11. Công việc và nghề nghiệp | Work | 12 | [Danh sách bài](bai-hoc/11_work/README.md) |
| 12. Giải trí và thể thao | Recreation | 15 | [Danh sách bài](bai-hoc/12_recreation/README.md) |

## Lộ trình 8 tuần gợi ý

1. **Tuần 1:** Ngôn ngữ hằng ngày và con người.
2. **Tuần 2:** Nhà cửa.
3. **Tuần 3:** Thực phẩm và trang phục.
4. **Tuần 4:** Sức khỏe.
5. **Tuần 5:** Cộng đồng và giao thông.
6. **Tuần 6:** Học tập, thực vật và động vật.
7. **Tuần 7:** Công việc và nghề nghiệp.
8. **Tuần 8:** Giải trí, thể thao và ôn tập toàn khóa.

## Phương pháp học mỗi bài (20–30 phút)

1. **Quan sát (3 phút):** Xem **ảnh ghép toàn bộ trang sách** nhúng ở ngay trong file Markdown và nhận biết các chi tiết.
2. **Từ vựng (7 phút):** Đọc, phát âm, kiểm tra nghĩa Anh–Việt.
3. **Giao tiếp (5 phút):** Thực hành các câu hỏi/mẫu câu mẫu.
4. **Áp dụng (5–10 phút):** Hoàn thành bài tập dịch, nói và viết.
5. **Ôn cách quãng:** Ôn lại sau 1 ngày, 3 ngày và 7 ngày.

## Cấu trúc thư mục

```text
Oxford Picture Dictionary - Anh-Việt/
├── README.md
├── COURSE_MANIFEST.json
├── TIEN_DO_HOC_TAP.md
├── bai-hoc/
│   ├── 01_everyday-language/
│   │   ├── README.md
│   │   ├── 01_a-classroom.md
│   │   ├── 01_a-classroom-trang-ghep.jpg  # ảnh ghép cạnh file Markdown
│   │   ├── 02_personal-information.md
│   │   ├── 02_personal-information-trang-ghep.jpg
│   │   └── ...
│   └── ...
└── tai-lieu-tham-khao/
    ├── README.md
    ├── bia_muc_luc_pdf_001-004.jpg
    └── ...
```

## Nguồn và sử dụng

Bản PDF nguồn: [Google Drive – Oxford Picture Dictionary](https://drive.google.com/file/d/17GAaxTaGOjWcru6K1hbiStsBNB-wZkLa/view).
Ảnh các trang sách được giữ nguyên từ PDF nguồn để phục vụ việc học cá nhân. Các ảnh này được giữ cục bộ nhưng không được Git theo dõi để giảm dung lượng repository; khi clone, cần bổ sung riêng từ PDF nguồn. Hãy tôn trọng bản quyền và quyền phân phối của nhà xuất bản.

## Kiểm tra tiến độ

Dùng `TIEN_DO_HOC_TAP.md` để đánh dấu các bài đã hoàn thành.


## Quy ước ảnh ghép (phiên bản mới)

- Mỗi bài học có **một** ảnh ghép nằm ngay cạnh file `.md` và được nhúng trực tiếp trong bài.
- Bài có 2 trang: 2 trang đặt **cạnh nhau theo hàng ngang**, đúng thứ tự. Bài 3 trang: ghép cả 3 theo hàng ngang.
- Ảnh ghép giữ nguyên kích thước trang nguồn, không thu nhỏ trước khi ghép, có nhãn số trang sách/PDF.
- Bài chỉ có 1 trang: giữ nguyên 1 trang trong 1 file ảnh, không tạo thêm ảnh lẻ.
- Bìa, chỉ mục và phụ lục được gom thành các ảnh ghép nhiều trang trong `tai-lieu-tham-khao`.
