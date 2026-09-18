# Bản đồ toàn khóa học

## Ý tưởng trung tâm

Khóa học không bắt đầu bằng câu hỏi “tập mấy ngày là tốt nhất?”, mà bắt đầu bằng câu hỏi:

> **Ở cấp độ hiện tại, cơ thể và kỹ năng của người tập đang bị giới hạn bởi điều gì, và họ đã có khả năng gì để khai thác?**

Từ đó mới suy ra cách chọn bài, số hiệp, số buổi, khoảng lặp, mức độ gắng sức và tốc độ tăng tải.

```mermaid
flowchart TD
    A[Xác định giai đoạn hiện tại] --> B{Ràng buộc chính là gì?}
    B --> B1[Kỹ thuật]
    B --> B2[Khả năng hồi phục]
    B --> B3[Độ chính xác RIR]
    B --> B4[Nguy cơ chấn thương]
    A --> C{Khả năng hiện có là gì?}
    C --> C1[Học động tác nhanh]
    C --> C2[Chịu được volume/tần suất cao hơn]
    C --> C3[Biết bài tập nào hợp cơ thể]
    C --> C4[Tự điều chỉnh tốt]
    B1 --> D[Thiết kế chương trình phù hợp]
    B2 --> D
    B3 --> D
    B4 --> D
    C1 --> D
    C2 --> D
    C3 --> D
    C4 --> D
    D --> E[Theo dõi kỹ thuật + kích thích + mệt mỏi + tiến bộ]
    E --> A
```

## Bản đồ chuyển giai đoạn

| Giai đoạn | Trọng tâm chính | Điều không nên vội làm |
|---|---|---|
| Người mới | Học kỹ thuật, xây nền động tác, tiến bộ đơn giản | Chương trình quá nhiều ngày, quá nhiều biến thể, tải quá nặng |
| Trung cấp | Thử nghiệm có hệ thống để hiểu phản ứng cá nhân | Chốt quá sớm rằng một bài/rep range “hợp cơ địa” |
| Nâng cao | Chuyên môn hóa, tối ưu stimulus-to-fatigue, quản lý hồi phục | Cố tập mọi nhóm cơ ở volume tối đa cùng lúc |

## Quy tắc xuyên suốt

- **Kỹ thuật tốt đi trước cường độ cao.**
- **Không cần dùng phương pháp phức tạp hơn nếu phương pháp đơn giản vẫn còn tạo tiến bộ.**
- **Cấp độ càng cao, tiến bộ càng chậm và yêu cầu cá nhân hóa càng lớn.**
- **Mục tiêu là tăng cơ lâu dài, không phải chứng minh mình “tập nâng cao”.**
