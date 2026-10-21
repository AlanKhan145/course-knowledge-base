---
title: "Creating Collectibles"
pathway: "Game Development"
module: "Create a basic 3D game"
lesson_number: 6
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/create-a-basic-3d-game?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai"
coverage: "outline_based_not_official_transcript"
checked_at: "2026-10-21"
---

# Bài 06 — Creating Collectibles

> **Pathway:** Game Development · **Mission:** Create a basic 3D game · **Loại:** tutorial · **Phiên bản mục lục:** Unity 6.3

> **Nguồn đối chiếu:** [Create a basic 3D game trên Unity Learn](https://learn.unity.com/pathway/game-development/unit/create-a-basic-3d-game?version=6.3). Nội dung dưới đây là hướng dẫn **tự biên soạn**, không phải toàn văn, bản dịch chính thức hay bản ghi video của Unity. Liên kết dẫn tới Mission chứa bài gốc.

## 1. Tổng quan

**Chủ đề:** Prefab, đối tượng sinh ra và tương tác. Trong ngữ cảnh *Create a basic 3D game*, bài **Creating Collectibles** cần được học bằng cách xác định một kết quả quan sát được, thử trong Unity Editor và ghi lại cách kiểm chứng. Khi dự án thực hành của Unity khác dự án hiện tại, có thể dùng một scene nhỏ để luyện đúng kỹ năng cốt lõi.

## 2. Mục tiêu học tập

- Trình bày được mục đích của **prefab, đối tượng sinh ra và tương tác** trong dự án Unity.
- Tự thực hiện một thử nghiệm nhỏ liên quan đến **Creating Collectibles** và mô tả kết quả.
- Phát hiện ít nhất một lỗi thường gặp và nêu cách kiểm chứng hoặc sửa lỗi.

## 3. Kiến thức trọng tâm

- Prefab là mẫu GameObject tái sử dụng với Component và thuộc tính đã cấu hình.
- Instantiate tạo bản sao runtime; Destroy xóa đối tượng, nhưng cần cân nhắc pooling khi tạo hủy thường xuyên.
- Sự kiện nhặt vật thường kết hợp Collider dạng trigger và quản lý trạng thái điểm hoặc vật phẩm.

### Thuật ngữ và mối quan hệ

| Khái niệm | Vai trò trong bài |
|---|---|
| Scene | Không gian chứa các GameObject để thiết kế và chạy thử |
| GameObject | Đối tượng trong scene, được mở rộng bằng Component |
| Component | Đơn vị chứa dữ liệu/hành vi, điều chỉnh được trong Inspector |
| Play mode | Chạy thử hành vi và xác minh kết quả tương tác |

## 4. Thực hành từng bước

1. **Bước 1:** Tạo một GameObject mẫu có Collider và kéo vào Project để thành Prefab.
2. **Bước 2:** Đặt ít nhất hai instance trong scene và thử đổi thuộc tính instance.
3. **Bước 3:** Tạo sự kiện sinh đối tượng hoặc nhặt vật, theo dõi số lượng trong Hierarchy khi chạy.
4. **Bước 4:** Kiểm tra quy tắc dọn đối tượng và tác động lên hiệu năng nếu tạo liên tục.

**Ghi chép bắt buộc:** kết quả mong đợi → kết quả thực tế → ảnh màn hình/Console → nhận xét ngắn về nguyên nhân.

## 5. Mã ví dụ tự biên soạn

```csharp
using UnityEngine;

public class SpawnOne : MonoBehaviour
{
    [SerializeField] private GameObject prefab;

    public void Spawn()
    {
        if (prefab == null) return;
        Instantiate(prefab, transform.position + Vector3.forward * 2f, Quaternion.identity);
    }
}
```

*Giải thích:* kéo prefab vào Inspector; chỉ sinh khi `Spawn()` được gọi bởi sự kiện thích hợp, không tự gọi lặp mỗi frame.

## 6. Bài tập củng cố

- **Cơ bản:** Lặp lại ví dụ và giải thích kết quả bằng lời của mình.
- **Vận dụng:** Tăng độ khó hoặc thay đổi một tham số quan trọng, sau đó dự đoán hệ quả trước khi chạy.
- **Mở rộng:** Tích hợp kỹ năng này với nội dung đã học ở Mission **Create a basic 3D game** để tạo một tương tác nhỏ.

**Câu hỏi tự kiểm tra:** Khi thay đổi một giá trị trong Inspector, vì sao Game view có thể khác dự đoán? Cần quan sát những đối tượng và Component nào?

## 7. Lỗi thường gặp và cách kiểm tra

**Hiện tượng nên đề phòng:** Lỗi phổ biến: tham chiếu Prefab chưa được gán, spawn sai vị trí hoặc Instantiate lặp vô hạn.

**Quy trình debug nhanh:** (1) tái hiện lỗi; (2) đọc Console; (3) kiểm tra tham chiếu Component, trạng thái GameObject, asset/package và thiết lập scene; (4) chỉ sửa một nguyên nhân giả định; (5) chạy lại và ghi kết quả.

## 8. Checklist hoàn thành

- [ ] Hiểu vai trò của khái niệm trong bài.
- [ ] Chạy được một ví dụ tự tạo trong Unity.
- [ ] Ghi được tối thiểu một ảnh hoặc đoạn video minh chứng.
- [ ] Giải thích được một lỗi và cách phát hiện lỗi.
- [ ] Đọc bài gốc tại [Unity Learn — Create a basic 3D game](https://learn.unity.com/pathway/game-development/unit/create-a-basic-3d-game?version=6.3) để đối chiếu bước chính thức và tài nguyên đính kèm.

---

*Ghi chú phiên bản:* Unity thường cập nhật giao diện, menu và package. Các bước ở trên là nội dung học độc lập, cần kiểm tra lại khi áp dụng vào Unity 6.3 hoặc phiên bản mới hơn.
