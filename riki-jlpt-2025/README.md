# JLPT Japanese Curriculum — RIKI 2025

Tài liệu cấu trúc khóa học tiếng Nhật RIKI 2025 từ N5 đến N1. Nội dung được tổ chức lại từ cấu trúc thư mục, tên bài học, tên video và tài liệu trên Drive.

> Các tiêu đề mà nguồn chưa ghi rõ được giữ ở trạng thái **chưa xác định**, không tự suy đoán thêm.

## Bản dựng khóa học trong workspace

Phần curriculum map bên dưới là bản ghi nguồn. Bản dựng có thể điều hướng và nhập LMS nằm ở các file sau:

- [COURSE_INDEX.md](./COURSE_INDEX.md) — mục lục khóa học và trạng thái biên soạn.
- [curriculum.json](./curriculum.json) — manifest phân cấp theo `Course → Track → Lesson → Module → Asset`.
- [n5-riki/README.md](./n5-riki/README.md), [n4-riki/README.md](./n4-riki/README.md), [n3-riki/README.md](./n3-riki/README.md), [n2-riki/README.md](./n2-riki/README.md), [n1-riki/README.md](./n1-riki/README.md) — các track học theo từng trình độ.
- [resource-library/README.md](./resource-library/README.md) — kho tài liệu dùng chung.

### Quy ước biên soạn

- `confirmed`: tên/nhánh được nhận diện trực tiếp từ dữ liệu Drive đã cung cấp.
- `partial`: đã xác định module nhưng chưa có đủ tên bài hoặc asset.
- `unknown_title`: nguồn có bài/file nhưng chưa có tiêu đề rõ.
- `scaffold`: đã tạo khung lesson Markdown để bổ sung transcript, video và PDF sau.

Hai lesson mẫu có nội dung biên soạn sâu: [N5 Bài 1](./n5-riki/02-core-lessons/bai-01-gioi-thieu-ban-than.md) và [N4 Bài 26](./n4-riki/01-core-lessons/bai-26-cach-dung-n-desu.md). Những bài còn lại giữ tên nguồn và checklist để không biến metadata thành transcript giả định.

## 1. Cấu trúc tổng

| # | Khóa chính | Cấu trúc nổi bật |
|---:|---|---|
| 1 | N5 RIKI 2025 | Bảng chữ cái → Bài 1–25 → Zoom → tài liệu |
| 2 | N4 RIKI 2025 | Bài 26–50 → Zoom → bài tập → luyện đề |
| 3 | N3 RIKI 2025 | JUNBI → TAISAKU → giải đề → Zoom |
| 4 | N2 RIKI 2025 | Chặng 1 JUNBI → Chặng 2 TAISAKU → Zoom → luyện đề |
| 5 | N1 RIKI 2025 | JUNBI → TAISAKU → luyện đề |
| 6 | 1. Tài liệu RIKI | Tài liệu N5/N4/N3/N2/N1 và đề thi các năm |

## 2. N5 RIKI 2025

### 2.1. Các module chính

```text
N5 RIKI 2025
└── N5 RIKI
    ├── 1. N5 - KHÓA ZOOM
    ├── 2. Bảng chữ cái
    ├── Bài 1 → Bài 25
    ├── RIKI N5 TÀI LIỆU
    └── LỘ TRÌNH N5.png
```

### 2.2. Module nền tảng: Bảng chữ cái

| # | Nhóm nội dung |
|---:|---|
| 1 | Giới thiệu về tiếng Nhật |
| 2 | Bảng chữ cái Hiragana |
| 3 | Bảng chữ cái Katakana |
| 4 | Học số đếm tiếng Nhật |
| 5 | Bộ thủ trong Kanji_Mới |

### 2.3. Danh sách 25 bài N5

| Bài | Nội dung |
|---:|---|
| 1 | Giới thiệu bản thân |
| 2 | Đây là cái gì ấy nhỉ |
| 3 | Đây là đâu? |
| 4 | Ngày nào tớ cũng học từ thứ 2 đến thứ 6 |
| 5 | Sang năm tớ sẽ đi Nhật với người yêu |
| 6 | Hôm nay tớ đã gặp anh ấy ở công viên |
| 7 | Tháng nào tớ cũng được nhận tiền |
| 8 | Chú chó dễ thương quá |
| 9 | Tớ thích anime nên tớ học tiếng Nhật |
| 10 | Trong nhà vệ sinh có ai thế? |
| 11 | Tớ có 2 người yêu |
| 12 | So sánh |
| 13 | Tớ muốn có người yêu |
| 14 | Lấy chồng đi |
| 15 | Chàng tu sĩ đã yêu tôi |
| 16 | Nhật ký hàng ngày |
| 17 | Còn trẻ mà, chưa cần lấy chồng cũng được |
| 18 | Trước khi hôn là phải đánh răng đấy |
| 19 | Tớ muốn giỏi tiếng Nhật |
| 20 | Giao tiếp thông thường |
| 21 | Tớ thấy Shin đẹp trai dã man ý |
| 22 | Tớ thích người biết tiếng Nhật |
| 23 | Khi băng qua đường là phải chú ý nhé |
| 24 | Cho và nhận |
| 25 | Dù có khó khăn đến mấy tớ cũng sẽ cố gắng |

### 2.4. Cấu trúc bên trong một bài N5

```text
Bài học
├── Từ Vựng Cải Thiện
├── Ngữ Pháp Cải Thiện
├── Kanji_Mới
├── Nghe Hiểu
├── Đọc Hiểu
├── Ebook Từ vựng
├── Ebook Ngữ pháp
├── Ebook Nghe hiểu
└── Ebook Đọc hiểu
```

Về mặt dữ liệu, một bài N5 có thể được mô hình hóa như sau:

```text
Lesson
├── Vocabulary
├── Grammar
├── Kanji
├── Reading
├── Listening
└── Ebook
```

Ví dụ: **Bài 1 — Giới thiệu bản thân**

- Từ vựng: Bài 1 — Phần 1, Phần 2, Phần 3
- Ngữ pháp:
  - Phần 1 — `N1 は N2 です`: Tôi là Sơn Tùng
  - Phần 2 — `N1 は N2 じゃありません`: Tôi không phải là...
  - Phần 3 — `N1 は A ですか`: ... có phải không?
  - Phần 4 — `N1 も A です`: Tôi cũng là người Việt Nam
- Kanji mới
- Nghe hiểu
- Đọc hiểu
- Ebook từ vựng, ngữ pháp, nghe hiểu và đọc hiểu

### 2.5. N5 — Khóa Zoom

Lộ trình Zoom bắt đầu từ nền tảng rồi chuyển sang ngữ pháp, Kanji, Kaiwa và ôn tập.

| Buổi | Nội dung |
|---:|---|
| 1 | Hiragana hàng A → Sa |
| 2 | Hiragana |
| 3 | Âm đặc biệt Hiragana và số đếm |
| 4 | Katakana (1) |
| 5 | Katakana (2) |
| 6 | Ngữ pháp Bài 1 |
| 7 | Kaiwa 1 |
| 8 trở đi | Ngữ pháp, Kanji, Kaiwa và ôn tập |
| 57 | Từ vựng 20.1, Ngữ pháp 20.1, Kanji 17 |
| 58 | Ngữ pháp 20.2, Từ vựng 21, Kanji 18 |
| 59 | Ngữ pháp 21 |
| 60 | Từ vựng 21.2 và 22.1, Ngữ pháp 22 |
| 61 | Từ vựng 23, Ngữ pháp 23 |
| 62 | Từ vựng 24, Ngữ pháp 24, Kanji 21 |
| 63 | Từ vựng 25, Ngữ pháp 25.1 |
| 64 | Bổ sung Ngữ pháp 23.2, Kanji 20 |
| 65 | Kanji 25–26, Kaiwa chủ đề 11 |
| 66 | Bổ sung Kaiwa chủ đề 14–16 |

## 3. N4 RIKI 2025

N4 nối tiếp trực tiếp N5, gồm các bài từ **Bài 26 đến Bài 50**.

### 3.1. Danh sách bài học

| Bài | Nội dung |
|---:|---|
| 26 | Cách dùng `んです` |
| 27 | Động từ thể khả năng |
| 28 | Hành động cùng lúc, thói quen, lý do |
| 29 | Hoàn tất, đáng tiếc, tìm thấy, ở đâu đó |
| 30 | Chuẩn bị trước, có sẵn, giữ nguyên |
| 31 | Động từ ý chí, kế hoạch, vẫn chưa, hồi chỉ |
| 32 | Lời khuyên, suy đoán, có thể, không rõ, trong vòng |
| 33 | Mệnh lệnh, cấm đoán, truyền đạt, giải thích nghĩa |
| 34 | Theo như, tuần tự hành động |
| 35 | Thể điều kiện, càng… càng… |
| 36 | Trở nên, cố gắng, liệt kê |
| 37 | Thể bị động |
| 38 | Danh hóa bằng の, vừa mới |
| 39 | Nguyên nhân, hệ quả, giữa chừng |
| 40 | Mệnh đề nghi vấn, thử làm, danh hóa tính từ |
| 41 | Khiêm nhường, tôn kính, nhờ vả |
| 42 | Mục đích, tiện cho, số lượng |
| 43 | Chưa có tiêu đề trong nguồn |
| 44 | Chưa có tiêu đề trong nguồn |
| 45 | Dự định, kế hoạch |
| 46 | Dễ có thể, chuẩn bị trước, chỉ dẫn |
| 47 | Nghe nói, hình như |
| 48 | Làm đúng như, sau khi |
| 49 | Kính ngữ, nhờ vả lịch sự |
| 50 | Khiêm nhường ngữ, tổng kết |

### 3.2. Cấu trúc một bài N4

Ví dụ: **Bài 26 — Cách dùng `んです`**

```text
Bài 26
├── 01. Từ vựng cải thiện
├── 02. Kanji_Mới
├── 03. Ngữ pháp cải thiện
├── 04. Đọc hiểu
├── 05. Nghe hiểu
├── 06. Kaiwa - Nói cùng giáo viên Nhật
├── Ebook-N4-Tuvung-Bai-26.pdf
├── Ebook-N4-Kanji-Bai-26.pdf
├── Ebook-N4-NP-Kaizen-bai26.pdf
└── Ebook-N4-Dochieu-Bai-26.pdf
```

So với N5, N4 bổ sung rõ module **Kaiwa — Nói cùng giáo viên Nhật**.

### 3.3. Các module khác của N4

```text
N4 RIKI 2025
├── Bài 26–50
├── 2. N4 - ZOOM
├── N4-Luyện Đề
│   ├── TỪ VỰNG
│   ├── NGỮ PHÁP
│   └── Đề thi N4-N5 các năm
├── BÀI TẬP N4
├── RIKI N4 TÀI LIỆU
└── N4 LỘ TRÌNH.png
```

Zoom N4 có hơn 50 buổi, đi từ Bài 26 đến Bài 50 và xen kẽ:

```text
Từ vựng → Ngữ pháp → Hán tự → Đọc → Nghe → Kaiwa
→ Ôn tập → Test giữa khóa → Test cuối khóa
```

## 4. N3 RIKI 2025

N3 thay đổi cách tổ chức. Nội dung không còn chia đơn thuần theo Bài 51, Bài 52..., mà đi theo ba giai đoạn: **JUNBI → TAISAKU → giải đề**.

### 4.1. Cấu trúc N3 NEW

```text
N3 NEW
├── 01. Junbi - Từ vựng
├── 02. Junbi - Kanji
├── 03. Junbi - Ngữ pháp
├── 04. Junbi - Đọc hiểu
├── 05. Junbi - Nghe hiểu
├── 06. Junbi - Ngữ pháp Mimikara Oboeru
├── 07. Taisaku - Từ vựng và Kanji
├── 08. Taisaku - Ngữ pháp
├── 09. Taisaku - Đọc hiểu
├── 10. Taisaku - Nghe hiểu
├── 11. Taisaku - Tài liệu tham khảo - Tip luyện thi
├── 12. Giải đề thi tháng 12-2019
├── 13. Giải đề thi tháng 12-2020
├── 14. Giải đề thi tháng 7-2021
├── 15. Giải đề thi tháng 12-2021
├── 16. Giải đề thi tháng 7-2022
├── 17. Giải đề thi tháng 12-2022
├── 18. Giải đề thi tháng 7-2023
├── 19. Giải đề thi tháng 12-2023
└── 20. Giải đề thi tháng 7-2024
```

### 4.2. JUNBI — Từ vựng N3

| # | Module |
|---:|---|
| 1 | Danh từ 1 |
| 2 | Động từ 1 |
| 3 | Tính từ 1 |
| 4 | Danh từ 2 |
| 5 | Động từ 2 |
| 6 | Katakana 1 |
| 7 | Tính từ 2 |
| 8 | Phó từ 1 |
| 9 | Danh từ 3 |
| 10 | Katakana 2 |
| 11 | Phó từ 2 |

### 4.3. JUNBI — Kanji N3

Có ít nhất 35 bài Kanji. Các ví dụ được nhận diện từ nguồn:

| Bài | Nội dung |
|---:|---|
| 1 | `仕任信偽代 - 付件位俗保図` |
| 2 | `仲借供偃候 - 値停偶個` |
| 3 | `係倍停 - 役投設段 - 直値植置` |
| 4 | `拾抱押据 - 接打折払坦授` |
| 5 | `恋恵恐惑 - 息悪惨怒愛` |
| 31 | `予預例残拾 - 各格答路` |
| 32 | `祝福礼神単常 - 示祭禁票表` |
| 33 | `由申留番理面 - 可包経商富` |
| 34 | `答命令冷 - 要煙伝標莊` |
| 35 | `最環果共期 - 岩張飛芸題` |

> Danh sách chi tiết các bài 6–30 chưa được ghi đầy đủ trong dữ liệu nguồn hiện tại.

### 4.4. JUNBI — Ngữ pháp N3

| Giai đoạn | Phạm vi |
|---|---|
| Nhiệm vụ 1–3 | Ôn lại ngữ pháp N4 |
| Nhiệm vụ 4–6 | Ngữ pháp N3.5 |
| Nhiệm vụ 7–12 | Ngữ pháp sử dụng nhiều trong Kaiwa |
| Nhiệm vụ 13–18 | Ngữ pháp xuất hiện nhiều trong JLPT N3 |
| Nhiệm vụ 19–23 | Ngữ pháp có thể xuất hiện trong JLPT N3 |

Progression curriculum:

```text
Prerequisite
    ↓
N4 Review
    ↓
N3.5 Bridge
    ↓
Conversational Grammar
    ↓
High-frequency JLPT Grammar
    ↓
Possible JLPT Grammar
```

### 4.5. N3 — Taisaku và giải đề

| Nhánh | Nội dung |
|---|---|
| Taisaku 1 | Từ vựng và Kanji |
| Taisaku 2 | Ngữ pháp |
| Taisaku 3 | Đọc hiểu |
| Taisaku 4 | Nghe hiểu |
| Taisaku 5 | Tài liệu tham khảo và tip luyện thi |
| Giải đề | Đề thi tháng 12-2019 đến tháng 7-2024 theo danh sách ở mục 4.1 |

### 4.6. N3 — Khóa Zoom

Nguồn hiện có 4 video Zoom:

1. Kanji 6, 7, 8.1 và Đọc 4
2. Ngữ pháp B3 và Đọc 5
3. Kanji 8.2, 9, 10 và Đọc 5 (2)
4. Ngữ pháp 4 và Đọc 6 — Đoản văn 1

## 5. N2 RIKI 2025

```text
N2 RIKI 2025
├── 1. Chặng 1 N2 JUNBI
├── 2. Chặng 2 N2 TAISAKU
├── ZOOM N2
├── N2 - LUYỆN ĐỀ
├── ZOOM - LUYỆN ĐỀ N2
└── LỘ TRÌNH N2.png
```

### 5.1. Chặng 1 — JUNBI

| Module | Nội dung |
|---|---|
| Từ vựng | Tổng hợp từ vựng 1–700, chia thành nhiều video/part |
| Kanji | Học và ôn Kanji theo chặng JUNBI |
| Ngữ pháp | Kiến thức nền tảng N2 |
| Đọc hiểu | Các dạng đọc cần thiết cho N2 |
| Nghe | Luyện kỹ năng nghe N2 |

Từ vựng có các part lên tới khoảng 90+, nhưng số thứ tự trong nguồn có một số chỗ thiếu hoặc trùng.

Tài liệu liên quan:

- `N2-Junbi-Tuvung-Tonghop-27122022.pdf`

### 5.2. Chặng 2 — TAISAKU

| Module | Mục tiêu |
|---|---|
| Taisaku Từ vựng | Củng cố và áp dụng từ vựng khi làm đề |
| Taisaku Ngữ pháp | Nhận diện và xử lý dạng bài ngữ pháp |
| Taisaku Đọc hiểu | Áp dụng chiến thuật đọc JLPT |
| Taisaku Nghe hiểu | Áp dụng chiến thuật nghe JLPT |

Lộ trình logic:

```text
JUNBI
Học và khôi phục kiến thức
       ↓
TAISAKU
Chiến thuật làm JLPT
       ↓
ZOOM
Luyện phối hợp kỹ năng
       ↓
LUYỆN ĐỀ
Thi thử và chữa đề thật
```

### 5.3. Zoom N2

| Bài | Nội dung |
|---:|---|
| 1 | Khai giảng đầu khóa |
| 2 | Đọc hiểu 1 TKTT, xuất hiện ở shortcut Zoom-Luyện đề |
| 3 | Nghe 1 |
| 4 | Đọc hiểu buổi 2 — So sánh AB |
| 5 | Ngữ pháp buổi 1 |
| 6 | Nghe buổi 2 |
| 7 | Từ vựng/Mondai |
| 8 | Nghe Mondai 2, 3 |
| 9 | Đọc hiểu buổi 3 |
| 10 | Ngữ pháp bài 4 và 5 |
| 11 | Nghe Mondai 3 và 4 |
| 12 | Từ vựng buổi 3, Mondai 2 |
| 13 | Ngữ pháp bài 5 |
| 14 | Nghe Mondai 4 |
| 15 | Từ vựng buổi 4, Mondai 3 |
| 16 | Ngữ pháp bài 6 |
| 17 | Từ vựng buổi 5, Mondai 4 |
| 18 | Chữa đề giữa khóa |
| 19 | Đọc hiểu: ý kiến tác giả |
| 20 | Ngữ pháp bài 9 |
| 21 | Nghe Mondai 5.1 và chữa bài tập về nhà |
| 22 | Đọc hiểu trung văn 1 |
| 23 | Từ vựng Mondai 5 |
| 24 | Nghe Mondai 5 phần 2–3 |
| 25 | Đọc hiểu trường văn 1 |
| 26 | Ngữ pháp 6 |
| 27 | Thử sức nghe Mondai 4 và chữa Ngữ pháp 6 |
| 28 | Thử sức nghe Mondai 4 và Ngữ pháp 6 |
| 29 | Đọc hiểu trường văn 2 |
| 30 | Goi/Mondai 6 |
| 31 | Nghe 9 |
| 32 | Nghe 9 và Ngữ pháp 7 |
| 33 | Thử sức nghe Mondai 3, 1, 2 |
| 34 | Đọc hiểu tổng ôn |
| 35 | Chữa đề cuối khóa, ở nhánh shortcut |
| 36 | Đọc hiểu: chỉ thị từ, lý do, định nghĩa |

### 5.4. N2 — Luyện đề

```text
N2 - LUYỆN ĐỀ
├── Nên Xem Trước Khi Thi
├── Giải đề tháng 12-2020
├── Giải đề tháng 7-2021
├── Giải đề tháng 12-2021
├── Giải đề tháng 7-2022
├── Giải đề tháng 12-2022
└── Giải đề tháng 7-2023
```

## 6. N1 RIKI 2025

```text
N1 RIKI 2025
├── 1. N1 JUNBI
│   ├── Từ vựng
│   ├── Ngữ pháp
│   ├── Kanji
│   ├── Đọc hiểu
│   └── Nghe hiểu
├── 2. N1 TAISAKU
└── N1-Luyện Đề
```

### 6.1. JUNBI — Từ vựng

Có 17 bài, bao phủ khoảng 1.000 từ.

| Bài | Phạm vi |
|---:|---:|
| 1 | 1–60 |
| 2 | 61–120 |
| 3 | 121–180 |
| 4 | 181–240 |
| 5 | 241–300 |
| 6 | 301–360 |
| 7 | 361–420 |
| 8 | 421–480 |
| 9 | 481–540 |
| 10 | 541–600 |
| 11 | 601–660 |
| 12 | 661–717 |
| 13 | 718–780 |
| 14 | 781–840 |
| 15 | 841–900 |
| 16 | 901–961 |
| 17 | 962–1000 |

Nhóm nội dung gồm: danh từ, động từ, tính từ, động từ ghép, phó từ, cụm từ, tiền tố/hậu tố và Katakana.

### 6.2. JUNBI — Ngữ pháp

| Step | Bài | Trọng tâm |
|---|---|---|
| STEP 1 | Bài 1–3 | Ngữ pháp quan trọng nhất |
| STEP 2 | Bài 4–7 | `重要な文法` |
| STEP 3 | Bài 8–19 | `よく使う文法` |
| STEP 4 | Bài 20 | `過去問` — câu hỏi/đề thi cũ |

Tài liệu tổng:

- `Nguphap-N1-JB-Full.pdf`
- `Giai-thich-BTVN-N1-JUNBI-NGUPHAP-tonghop.pdf`

### 6.3. JUNBI — Kanji

- Video hướng dẫn học
- Ôn tập Kanji N2
- Bài 1 → Bài 19
- Kanji N1 đã xuất hiện
- PDF chữ Hán N1
- PDF ôn lại Kanji N2

### 6.4. JUNBI — Đọc hiểu

Progression của module đọc đi từ liên kết câu và đại từ chỉ thị đến các thể loại văn bản dài.

| # | Chủ đề |
|---:|---|
| 1 | 中に入るのはどれ |
| 2 | 意見を言いたい時の疑問文 |
| 3 | 否定「ない」に注意! |
| 4 | 長文によく使われる表現 |
| 5 | つながり① |
| 6 | 电影詞② — tên nguồn |
| 7 | それは誰のこと |
| 8 | それはいつのこと |
| 9 | Chưa thấy trong listing hiện tại |
| 10 | 「これ」「それ」① |
| 11 | 「これ」「それ」② |
| 12 | 「これ」「それ」③ |
| 13 | 答えは書いてある! |
| 14 | 結論を探せ! |
| 15 | 何を言いたいの① |
| 16 | 何を言いたいの② |
| 17 | 省略 |
| 18 | 相談とアドバイス |
| 19 | 評価コメント |
| 20 | 歌情文, 感想 — tên nguồn |
| 21 | 長文の読み方 |
| 22 | 小説 |
| 23 | エッセイ |
| 24 | 新聞記事 |
| 25 | お知らせ・案内 |

### 6.5. JUNBI — Nghe hiểu

| # | Nội dung |
|---:|---|
| 1 | Phân biệt âm giống nhau và cách nói tắt |
| 2 | Văn phong hội thoại |
| 3 | Cấu trúc ngữ pháp thường dùng |
| 4 | Kính ngữ |
| 5 | Hán ngữ thường gặp |
| 6 | Từ ngoại lai |
| 7 | Từ tượng hình và từ tượng thanh |
| 8 | Từ đồng nghĩa |
| 9 | Phó từ và cách nói đặc biệt |
| 10 | Dự đoán về sau |

### 6.6. N1 TAISAKU

```text
N1 TAISAKU
├── 1. TÀI LIỆU
├── 言語知識 (65%)
├── 言語知識 (70%)
├── 言語知識 (75%)
├── 言語知識 (80%)
├── ĐỌC HIỂU
└── Nghe Hiểu
```

Các module `言語知識` 65% → 80% được hiểu là các giai đoạn nâng dần độ chính xác ở phần Language Knowledge.

### 6.7. N1 — Luyện đề

```text
N1-Luyện Đề
├── Những video nên xem trước khi thi 1 tháng
├── N1 12/2023
├── N1 07/2023
├── N1 12/2022
├── N1 07/2022
├── N1 12/2021
├── N1 12/2019
├── N1 07/2019
├── N1 12/2018
├── N1 07/2018
├── N1 12/2017
├── N1 07/2017
└── Đề thi N1 các năm Yuuki Bùi
```

Nguồn đánh số trực tiếp bị thiếu một số thứ tự; danh sách trên giữ nguyên theo Drive.

## 7. Kho tài liệu RIKI

Kho tài liệu tách khỏi curriculum chính và đóng vai trò **Resource Library**.

```text
1. Tài liệu RIKI
├── Tài Liệu N5
├── Tài Liệu N4
├── Tài Liệu N3
├── Tài Liệu N2
├── Tài Liệu N1
├── Đề thi N4-N5 các năm
├── Đề thi N3 các năm
├── Đề thi N2 các năm
└── Đề thi N1 các năm
```

Kho này nên được liên kết dùng chung cho các khóa N5–N1 thay vì sao chép vào từng bài học.

## 8. Lộ trình học đề xuất

| Trình độ | Lộ trình |
|---|---|
| N5 | Bảng chữ cái → Bài 1–25 → Zoom → tài liệu và ôn tập |
| N4 | Bài 26–50 → Zoom → bài tập N4 → luyện đề |
| N3 | JUNBI → TAISAKU → Zoom bổ trợ → giải đề theo năm |
| N2 | JUNBI → TAISAKU → Zoom → luyện đề |
| N1 | JUNBI → TAISAKU → luyện đề |

Nguyên tắc chung:

1. Học kiến thức nền trong JUNBI hoặc Core Lessons.
2. Luyện phối hợp kỹ năng qua Zoom, Kaiwa và bài tập.
3. Chuyển sang TAISAKU để học chiến thuật theo dạng bài.
4. Làm đề theo năm, ghi lại lỗi sai và quay lại module kiến thức tương ứng.

## 9. Schema chuẩn cho LMS/database

Không nên lưu toàn bộ Drive thành một danh sách file phẳng. Cấu trúc phù hợp hơn là:

```text
JLPT Japanese Curriculum
├── Course: N5
│   ├── Track: Foundation
│   ├── Track: Core Lessons
│   │   ├── Lesson 01
│   │   │   ├── Vocabulary
│   │   │   ├── Kanji
│   │   │   ├── Grammar
│   │   │   ├── Reading
│   │   │   ├── Listening
│   │   │   └── Kaiwa
│   │   └── ...
│   └── Track: Zoom
├── Course: N4
├── Course: N3
│   ├── Track: JUNBI
│   ├── Track: TAISAKU
│   └── Track: Practice Exams
├── Course: N2
│   ├── Track: JUNBI
│   ├── Track: TAISAKU
│   ├── Track: Zoom
│   └── Track: Practice Exams
└── Course: N1
    ├── Track: JUNBI
    ├── Track: TAISAKU
    └── Track: Practice Exams
```

### 9.1. Record lesson mẫu

```json
{
  "level": "N4",
  "course": "RIKI 2025",
  "stage": "Core",
  "lesson_no": 26,
  "title": "Cách dùng んです",
  "modules": [
    "Từ vựng",
    "Kanji",
    "Ngữ pháp",
    "Đọc hiểu",
    "Nghe hiểu",
    "Kaiwa"
  ],
  "assets": [
    "video",
    "ebook_pdf"
  ]
}
```

### 9.2. Các loại record nên có

| Record | Trường chính |
|---|---|
| Course | `level`, `course`, `title`, `year` |
| Track | `course_id`, `stage`, `title`, `sort_order` |
| Lesson | `track_id`, `lesson_no`, `title`, `modules`, `status` |
| Module | `lesson_id`, `type`, `title`, `sort_order` |
| Asset | `module_id`, `asset_type`, `file_name`, `file_url` |
| Practice Exam | `level`, `exam_date`, `section`, `solution_asset` |
| Resource | `level`, `resource_type`, `file_name`, `file_url` |

### 9.3. Quy ước trạng thái dữ liệu

- `confirmed`: tên và nội dung đã được nhận diện từ nguồn.
- `partial`: mới xác định được một phần thông tin.
- `unknown_title`: nguồn có bài/file nhưng chưa có tiêu đề rõ.
- `source_name_preserved`: giữ nguyên tên gốc vì có thể là tên riêng hoặc tên file.

## 10. Ghi chú biên soạn

- Giữ nguyên các tên bài, tên nhánh và tên tài liệu có tính nhận diện từ Drive.
- Chuẩn hóa cách viết `JUNBI`, `TAISAKU`, `Zoom`, `Kanji`, `Ngữ pháp`, `Đọc hiểu`, `Nghe hiểu` trong phần mô tả.
- Không tự đặt tiêu đề cho N4 Bài 43–44 hoặc các bài N3 Kanji chưa có đủ tên.
- Các số thứ tự bị thiếu hoặc trùng trong nguồn được ghi chú thay vì tự đánh lại.
- File này là curriculum map, không phải transcript hay lesson note chi tiết.
