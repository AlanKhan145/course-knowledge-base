---
title: "Configure one color button"
pathway: "Mobile AR Development"
module: "Create an interactive face filter"
lesson_number: 6
lesson_type: tutorial
unity_version: "2022.3"
source_mission: "https://learn.unity.com/pathway/mobile-ar-development/unit/interactive-face-filter?version=2022.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 06 — Configure one color button

> **Pathway:** Mobile AR Development · **Mission:** Create an interactive face filter · **Loại:** tutorial · **Phiên bản mục lục:** Unity 2022.3

> **Nguồn đối chiếu:** [Create an interactive face filter trên Unity Learn](https://learn.unity.com/pathway/mobile-ar-development/unit/interactive-face-filter?version=2022.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Giao diện người dùng và tương tác. Trong ngữ cảnh *Create an interactive face filter*, bài **Configure one color button** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **giao diện người dùng và tương tác** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **Configure one color button** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- Canvas chứa phần tử UI; RectTransform quyết định cách bố cục tương ứng kích thước màn hình.
- Anchors và Canvas Scaler cần được kiểm tra ở nhiều tỉ lệ khung hình.
- Button/Toggle/Slider phát sự kiện tương tác; hệ thống điểm số nên cập nhật hiển thị từ trạng thái dữ liệu.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo Canvas chứa một tiêu đề và Button, đặt hierarchy rõ ràng.
2. **Bước 2:** Thử thay độ phân giải Game view để kiểm tra anchor, layout và cỡ chữ.
3. **Bước 3:** Gắn sự kiện Button vào phương thức điều khiển trong Inspector hoặc qua mã.
4. **Bước 4:** Tạo trạng thái khởi đầu, đang chơi và kết thúc; thử điều hướng bằng chuột/bàn phím.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Mã ví dụ tự biên soạn

```csharp
using TMPro;
using UnityEngine;

public class ScoreDisplay : MonoBehaviour
{
    [SerializeField] private TMP_Text scoreLabel;
    private int score;

    public void AddPoint()
    {
        score++;
        if (scoreLabel != null) scoreLabel.text = $"Điểm: {score}";
    }
}
```

*Giải thích:* gán TextMeshPro Text trong Inspector, gọi `AddPoint` khi có sự kiện; tránh cập nhật UI mỗi frame nếu dữ liệu không thay đổi.

## 6. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **Create an interactive face filter** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 7. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: quên EventSystem, sai raycast target, anchor đặt sai hoặc văn bản tràn khỏi màn hình.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 8. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Create an interactive face filter](https://learn.unity.com/pathway/mobile-ar-development/unit/interactive-face-filter?version=2022.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 2022.3 hoặc phiên bản mới hơn.
