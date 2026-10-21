---
title: "Set up a 2D room"
pathway: "Unity Essentials"
module: "2D Essentials"
lesson_number: 1
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 01 — Set up a 2D room

> **Pathway:** Unity Essentials · **Mission:** 2D Essentials · **Loại:** tutorial · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [2D Essentials trên Unity Learn](https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Xây dựng trò chơi và hình ảnh 2D. Trong ngữ cảnh *2D Essentials*, bài **Set up a 2D room** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **xây dựng trò chơi và hình ảnh 2d** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **Set up a 2D room** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- SpriteRenderer vẽ ảnh 2D; Sprite Editor có thể tách sprite sheet thành nhiều sprite nhỏ.
- Rigidbody2D và Collider2D khác với hệ 3D; callbacks vật lý 2D dùng hậu tố 2D.
- Sorting Layer và Order in Layer quyết định thứ tự hiển thị sprite.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo scene 2D dùng camera Orthographic, đặt một Sprite làm nhân vật.
2. **Bước 2:** Thiết lập Pixels Per Unit, sorting layer và kiểm tra kích thước hiển thị.
3. **Bước 3:** Thêm Rigidbody2D/Collider2D nếu cần tương tác và kiểm tra vật thể ở Play mode.
4. **Bước 4:** Tạo một hoạt động nhặt vật hoặc né chướng ngại rồi ghi nhận sự kiện hoàn thành.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Mã ví dụ tự biên soạn

```csharp
using UnityEngine;

public class Pickup2D : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!other.CompareTag("Player")) return;
        Debug.Log("Đã nhặt vật phẩm 2D");
        Destroy(gameObject);
    }
}
```

*Lưu ý:* phải có thiết lập Collider2D/ Rigidbody2D thích hợp, bật `Is Trigger`, và đối tượng người chơi có tag `Player`.

## 6. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **2D Essentials** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 7. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: trộn Collider 3D với Rigidbody2D hoặc sprite bị che do sorting layer.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 8. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — 2D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/2d-essentials?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
