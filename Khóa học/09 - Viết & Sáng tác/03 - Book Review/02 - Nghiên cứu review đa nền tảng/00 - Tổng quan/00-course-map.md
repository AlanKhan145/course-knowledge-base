# 00 — Bản đồ khóa học và bản đồ paper

## 1. Paper đang giải quyết bài toán gì?

Nghiên cứu xem xét cách người dùng trên hai nền tảng — **Goodreads** và **Douban** — lựa chọn, gắn nhãn, đánh giá và review các tác phẩm được họ xem là “classics”. Tác giả xây dựng một dataset song song gồm **144 Goodreads classics** và **141 Douban classics**, rồi so sánh dữ liệu giữa hai nền tảng.

## 2. Ba đóng góp chính

Paper tự xác định ba đóng góp:

1. So sánh **sở thích và quan điểm của người đọc** về classics giữa hai nền tảng.
2. Chỉ ra các khó khăn phương pháp khi căn chỉnh dữ liệu đa nền tảng: **rating system**, **data quality**, **platform context / data organization**, cùng các vấn đề đa ngôn ngữ.
3. Công bố một **parallel dataset** để phục vụ nghiên cứu tiếp theo.

## 3. Bản đồ từ paper sang lesson

| Paper | Khóa học |
|---|---|
| Abstract + Introduction | Lesson 01–02 |
| §2.1 Data sources | Lesson 03 |
| §2.2 Workflow and challenges | Lesson 04–05 |
| §3.1 Features of Douban classics | Lesson 06 |
| §3.2 Douban vs Goodreads vs school syllabi | Lesson 06 |
| §3.3 Reception across platforms | Lesson 07–08 |
| §4 Discussions and conclusions | Lesson 09 |
| Table 2 | Lesson 10 + CSV |

## 4. Các con số phải nhớ

- Goodreads classics: **144**.
- Douban classics: **141**.
- Shared classics: **23**.
- Douban classics first published in Chinese + Japanese: **73/141 = 52%**.
- Douban classics là fiction: **121/141 = 86%**.
- Douban classics xuất hiện trong ít nhất một danh sách syllabus được nghiên cứu: **38/141 = 27%**.
- Mean rating của 23 shared classics: khoảng **4.37 trên Douban** và **4.08 trên Goodreads**.

## 5. Nguồn

Hu, Y., Underwood, T., Layne-Worthey, G., & Downie, J. S. (2026). *Comparative analysis of classics book review data created by users across Douban and Goodreads*. Digital Scholarship in the Humanities, 41, i89–i106. https://doi.org/10.1093/llc/fqaf084 (advance access: 13-09-2025).
