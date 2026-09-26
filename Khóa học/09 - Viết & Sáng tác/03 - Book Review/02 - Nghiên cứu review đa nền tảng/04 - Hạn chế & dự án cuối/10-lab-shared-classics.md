# 10 — Lab: Phân tích 23 shared classics

## Dữ liệu

Dùng file:

`../data/shared_classics_23.csv`

Dữ liệu được chép lại từ **Table 2** của paper: 23 tác phẩm được xem là classics trên cả Douban và Goodreads.

## Nhiệm vụ A — Kiểm tra mean rating

1. Tính mean `douban_rating`.
2. Tính mean `goodreads_rating`.
3. Tạo cột `rating_diff = douban_rating - goodreads_rating`.
4. Tính mean `rating_diff`.

Kết quả kỳ vọng gần:

- Douban ≈ **4.37**
- Goodreads ≈ **4.08**
- mean difference ≈ **+0.30**

## Nhiệm vụ B — Tìm ngoại lệ

1. Lọc sách có `rating_diff < 0`.
2. Xác định tác phẩm có Goodreads rating cao hơn Douban.
3. Đối chiếu với nhận xét của paper.

## Nhiệm vụ C — Nhóm theo language

1. Đếm số shared classics theo `language_first_publication`.
2. Giải thích vì sao kết quả này **không đại diện cho toàn bộ classics của thế giới**.

## Nhiệm vụ D — Viết insight đúng chuẩn

Viết 5 insight, mỗi insight phải có:

- **fact**: con số trong dữ liệu;
- **scope**: chỉ 23 shared classics;
- **interpretation**: không vượt quá dữ liệu;
- **limitation**: edition/platform structure.

## Mẫu insight tốt

> Trong 23 shared classics ở Table 2, Douban rating trung bình cao hơn Goodreads khoảng 0.30 điểm trên thang 5. Kết quả mô tả nhóm tác phẩm được cả hai cộng đồng xem là classics; nó không chứng minh Douban users “dễ tính hơn”, vì hai nền tảng tổ chức dữ liệu edition và có user base khác nhau.

## Thử thách nâng cao

Nếu dùng Python/pandas, tạo:

- histogram của `rating_diff`;
- bảng sort theo chênh lệch;
- summary theo language.

Phần code là bài tập thực hành do khóa học biên soạn; paper không cung cấp notebook tái hiện trong tài liệu nguồn này.
