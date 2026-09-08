# Khóa học: Động học vây ngực và cơ chế tạo lực ở cá Bluegill

## 1. Giới thiệu khóa học

Khóa học này chuyển hóa bài báo khoa học **“Kinematics of Pectoral Fin Locomotion in the Bluegill Sunfish *Lepomis macrochirus*”** của Alice C. Gibb, Bruce C. Jayne và George V. Lauder (1994) thành một hệ thống bài học độc lập bằng tiếng Việt.

Mục tiêu không phải là dịch nguyên văn bài báo, mà là **giảng lại có cấu trúc**: từ bối cảnh sinh học, thiết kế thí nghiệm, hệ tọa độ 3D, chu kỳ đánh vây, ảnh hưởng của tốc độ, biến dạng vây, góc tấn cho tới các cơ chế thủy động lực học gồm drag, lift và acceleration reaction.

> Phần kiến thức khoa học và số liệu trong khóa học được giới hạn theo nội dung của paper gốc. Những phần như cách chia bài, câu hỏi luyện tập và cấu trúc học tập là thiết kế sư phạm bổ sung để biến paper thành khóa học.

## 2. Đối tượng phù hợp

Khóa học phù hợp với người học quan tâm đến:

- sinh cơ học và động học bơi của cá;
- mô phỏng chuyển động vây cá;
- thiết kế robot cá hoặc cơ cấu vây mềm;
- animation/rigging chuyển động cá dựa trên dữ liệu sinh học;
- đọc hiểu paper về locomotion và biomechanics.

## 3. Kiến thức đầu vào gợi ý

Người học nên biết ở mức cơ bản:

- hệ tọa độ 3 chiều;
- vận tốc, gia tốc và chu kỳ;
- khái niệm lực nâng và lực cản;
- cách đọc biểu đồ và bảng số liệu.

Không bắt buộc phải có nền tảng sinh học chuyên sâu.

## 4. Cấu trúc khóa học

| Bài | Chủ đề | Trọng tâm |
|---|---|---|
| 01 | Nền tảng vận động bằng vây ngực | Vì sao vây ngực quan trọng; drag, lift, acceleration reaction |
| 02 | Thiết kế thí nghiệm và tọa độ 3D | Flow tank, camera, marker, x-y-z, cách đo |
| 03 | Chu kỳ đánh vây và quỹ đạo 3D | Abduction/adduction, protraction/retraction, levation/depression |
| 04 | Tốc độ bơi và thay đổi động học | Tần số, vận tốc vây, biên độ, pause, chuyển gait |
| 05 | Vây mềm, biến dạng và lệch pha | Dorsal leading edge, phase lag, khác biệt giữa các tia vây |
| 06 | Góc tấn và phần tử mặt phẳng của vây | 2D vs 3D, incident flow, angle of attack |
| 07 | Cơ chế tạo lực đẩy | Drag + lift + acceleration reaction |
| 08 | Blade element theory, giới hạn và hướng nghiên cứu | Curvature, added mass, vortex, mô hình hóa toàn vây |
| Tổng kết | Bài đánh giá cuối khóa | Phân tích dữ liệu, giải thích cơ chế, đọc hình |

## 5. Cách học đề xuất

1. Đọc bài học theo thứ tự 01 → 08.
2. Mỗi khi gặp hình minh họa, đối chiếu trực tiếp file trong `assets/images/`.
3. Ghi nhớ các thuật ngữ trong `reference/glossary.md`.
4. Sau bài 04 và bài 07, tự vẽ lại một chu kỳ đánh vây bằng ba trục x-y-z.
5. Hoàn thành `assessments/final-assessment.md` để kiểm tra khả năng tổng hợp.

## 6. Tài nguyên trong gói

```text
bluegill_pectoral_fin_course/
├── README.md
├── lessons/
│   ├── 01-foundations.md
│   ├── 02-experimental-design-and-3d-coordinates.md
│   ├── 03-fin-beat-cycle-and-kinematics.md
│   ├── 04-effects-of-swimming-speed.md
│   ├── 05-fin-flexibility-and-phase-lag.md
│   ├── 06-angle-of-attack-and-3d-fin-elements.md
│   ├── 07-thrust-mechanisms.md
│   └── 08-blade-element-limitations-and-future-work.md
├── assessments/
│   └── final-assessment.md
├── reference/
│   ├── glossary.md
│   ├── key-data.md
│   ├── paper-to-course-map.md
│   └── source-metadata.md
└── assets/
    └── images/
        ├── fig_01.png
        ├── ...
        └── fig_11.png
```

## 7. Kết quả đầu ra mong đợi

Sau khi hoàn thành khóa học, người học có thể:

- mô tả một chu kỳ đánh vây ngực của *Lepomis macrochirus* trong ba chiều;
- giải thích vì sao vây không thể được xem đơn giản như một tấm cứng;
- phân tích ảnh hưởng của tốc độ bơi lên tần số, biên độ và vận tốc chuyển động vây;
- giải thích lệch pha giữa phần dorsal và ventral của vây;
- phân biệt cách suy ra góc tấn từ dữ liệu 2D và 3D;
- trình bày vì sao paper kết luận lực đẩy không đến từ một cơ chế đơn lẻ;
- nêu các giới hạn của mô hình phần tử vây và các hướng nghiên cứu tiếp theo.
