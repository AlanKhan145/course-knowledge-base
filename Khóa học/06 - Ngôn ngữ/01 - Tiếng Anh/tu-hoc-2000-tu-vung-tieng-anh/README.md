# Tự học 2.000 từ vựng tiếng Anh

Khóa học tự học theo 39 chủ đề, dành cho người học trình độ A1–B1. Mục tiêu là nhận diện, phát âm, nhớ và sử dụng 2.000 từ vựng thông dụng trong giao tiếp hằng ngày.

## Cách học

- Học 25 từ mới mỗi ngày, 6 ngày/tuần; ngày thứ 7 dành cho ôn tập.
- Với mỗi từ: nghe phát âm, đọc to 3 lần, ghi nghĩa, đặt một câu ngắn và tự kiểm tra sau 10 phút.
- Ôn theo lịch lặp lại: ngày 1 → ngày 2 → ngày 4 → ngày 7 → ngày 14 → ngày 30.
- Không học riêng danh từ: luôn học kèm từ loại, cụm từ và một câu ví dụ.

## Lộ trình 12 tuần

| Tuần | Nội dung |
|---|---|
| 1 | Character; Words of People; Parts of the Body; Face and Hair |
| 2 | Appearance; Body Movement; Feelings and Emotions; Health and Diseases |
| 3 | Marriage; Family; Jobs |
| 4 | Education; Subjects and School Objects; Clothes |
| 5 | Office Equipment; Travel and Holidays; House |
| 6 | Bedroom; Living Room; Kitchen; Bathroom |
| 7 | Food; Vietnamese Food; Drinks |
| 8 | Vegetables; Fruits; Trees and Plants |
| 9 | Birds; Underwater Animals; Animals |
| 10 | Sports; Music; Transportation |
| 11 | Hotel and Accommodation; Restaurant; Weather |
| 12 | Business; Computer; The Earth; tổng ôn và kiểm tra cuối khóa |

## Mục lục 39 bài

| Bài | Chủ đề | Trang tham chiếu |
|---:|---|---:|
| 1 | Character | 7 |
| 2 | Words of People | 14 |
| 3 | Parts of the Body | 20 |
| 4 | Face and Hair | 27 |
| 5 | Appearance | 30 |
| 6 | Body Movement | 34 |
| 7 | Feelings and Emotions | 39 |
| 8 | Health and Diseases | 44 |
| 9 | Marriage | 52 |
| 10 | Family | 57 |
| 11 | Jobs | 63 |
| 12 | Education | 72 |
| 13 | Subjects and School Objects | 81 |
| 14 | Clothes | 87 |
| 15 | Office Equipment | 93 |
| 16 | Travel and Holidays | 98 |
| 17 | House | 105 |
| 18 | Bedroom | 110 |
| 19 | Living Room | 113 |
| 20 | Kitchen | 117 |
| 21 | Bathroom | 122 |
| 22 | Food | 128 |
| 23 | Vietnamese Food | 134 |
| 24 | Drinks | 139 |
| 25 | Vegetables | 142 |
| 26 | Fruits | 147 |
| 27 | Trees and Plants | 152 |
| 28 | Birds | 157 |
| 29 | Underwater Animals | 162 |
| 30 | Animals | 166 |
| 31 | Sports | 171 |
| 32 | Music | 178 |
| 33 | Transportation | 184 |
| 34 | Hotel and Accommodation | 197 |
| 35 | Restaurant | 201 |
| 36 | Weather | 206 |
| 37 | Business | 211 |
| 38 | Computer | 219 |
| 39 | The Earth | 226 |

## Bài kiểm tra

Mỗi 100 từ: 20 câu chọn nghĩa, 10 câu điền từ, 5 câu dịch ngắn và 2 phút nói theo chủ đề. Cuối khóa: chọn ngẫu nhiên 100 từ, đạt từ 80% trở lên và sử dụng đúng ít nhất 20 từ trong một đoạn nói 3 phút.

## Dữ liệu học tập

`vocabulary.csv` là file nhập vào Anki/Quizlet với các cột: `id,topic,word,part_of_speech,meaning,example,review_day`. Chạy `python generate_vocab.py` để tạo lại bộ dữ liệu 2.000 mục từ từ danh mục chủ đề.

## Bộ khung bài học

Các bài học đã được tách thành 6 module, tổng cộng 39 file Markdown. Mỗi file có sẵn mục tiêu, bảng 50 dòng để tự điền từ vựng, cụm từ, câu mẫu, bài tập nói/viết và lịch ôn. Chạy `python generate_lessons.py` nếu muốn tạo lại các file khung.
