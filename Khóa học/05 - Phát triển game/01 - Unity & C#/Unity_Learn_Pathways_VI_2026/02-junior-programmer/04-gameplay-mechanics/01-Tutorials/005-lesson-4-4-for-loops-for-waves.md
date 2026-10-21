---
title: "Lesson 4.4 - For-Loops For Waves"
pathway: "Junior Programmer"
module: "Gameplay Mechanics"
lesson_number: 5
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/junior-programmer/unit/gameplay-mechanics?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 05 — Lesson 4.4 - For-Loops For Waves

> **Pathway:** Junior Programmer · **Mission:** Gameplay Mechanics · **Loại:** tutorial · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Gameplay Mechanics trên Unity Learn](https://learn.unity.com/pathway/junior-programmer/unit/gameplay-mechanics?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Lập trình C# và hành vi game. Trong ngữ cảnh *Gameplay Mechanics*, bài **Lesson 4.4 - For-Loops For Waves** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **lập trình c# và hành vi game** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **Lesson 4.4 - For-Loops For Waves** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- MonoBehaviour là lớp thường dùng cho Component tự viết trong Unity; phương thức vòng đời được gọi theo quy tắc engine.
- Biến, điều kiện, vòng lặp và phương thức giúp tách logic; tránh làm quá nhiều việc trong Update.
- Tham chiếu Component phải tồn tại trước khi sử dụng; dùng Inspector hoặc GetComponent theo ngữ cảnh.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo script C# với tên lớp trùng tên file và gắn vào GameObject thử nghiệm.
2. **Bước 2:** Khai báo một biến có thể thay đổi trong Inspector và ghi log trong Start.
3. **Bước 3:** Viết một điều kiện/ phương thức đơn giản rồi thử trường hợp đúng, sai.
4. **Bước 4:** Kiểm tra Console, xử lý warning và chạy lại sau khi thay giá trị Inspector.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Mã ví dụ tự biên soạn

```csharp
using UnityEngine;

public class SimpleCounter : MonoBehaviour
{
    [SerializeField] private int target = 3;
    private int count = 0;

    public void CountOne()
    {
        count++;
        if (count >= target) Debug.Log("Đã hoàn thành mục tiêu!");
    }
}
```

*Giải thích:* hàm tách khỏi `Update` giúp dễ kết nối với sự kiện và dễ kiểm thử.

## 6. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **Gameplay Mechanics** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 7. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: tên file và class không trùng, NullReferenceException hoặc code dùng Component chưa được gán.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 8. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Gameplay Mechanics](https://learn.unity.com/pathway/junior-programmer/unit/gameplay-mechanics?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
