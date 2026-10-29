---
title: "Bài 04 — Quản lý Material trong dự án"
source_title: "Manage materials in a project"
course: "Unity Creative Core — Shaders and Materials"
unity_version: "6.3 (hướng dẫn ưu tiên URP)"
lesson_number: 4
lesson_type: "tutorial"
status: "Tài liệu tự biên soạn, mở rộng và đối chiếu tài liệu công khai"
updated_at: "2026-10-29"
---

# Bài 04 — Quản lý Material trong dự án

> **Phần học:** Creative Core / Shaders and Materials  
> **Tên bài gốc:** Manage materials in a project  
> **Môi trường thực hành:** Unity 6.3, khuyến nghị project Universal Render Pipeline (URP)  
> **Nguồn gốc nội dung:** Dựa trên tệp đề cương do người học cung cấp; phần giải thích, ví dụ, bài tập, sơ đồ là nội dung bổ sung do biên soạn, không phải transcript hoặc bản dịch chính thức của Unity Learn.

## Mục tiêu học tập
- Tạo cấu trúc thư mục, quy tắc đặt tên và tái sử dụng material.
- Hiểu tác động của shared material, material variant và material chỉnh khi chạy.
- Chẩn đoán tình huống sửa một material làm thay đổi nhiều object.

## 1. Vấn đề quản lý tài sản
Trong dự án lớn, vấn đề không chỉ là làm đẹp một vật thể, mà còn là **giữ các phiên bản nhất quán, không chỉnh nhầm hàng loạt** và dễ xác định tham số đã thay đổi. Unity lưu material dưới dạng asset; những GameObject cùng trỏ tới asset đó có thể hiển thị khác khi asset bị chỉnh.

## 2. Một cấu trúc dự án có thể bảo trì
```text
Assets/
  Art/
    Materials/
      Base/
      Characters/
      Environment/
      Props/
    Textures/
      Props/
      Environment/
    Shaders/
    Models/
  Scenes/
  Scripts/
```

Quy ước minh họa: `MAT_Metal_Steel_Brushed`, `MAT_Wood_Oak_Dark`, `TEX_Oak_BaseColor`, `TEX_Oak_Normal`, `SG_Hologram`. Tiền tố không bắt buộc bởi Unity, nhưng giúp tìm kiếm nhanh.

## 3. Ba cách chia sẻ/thay đổi material
| Cách làm | Hành vi | Dùng khi |
|---|---|---|
| Nhiều object cùng tham chiếu một `.mat` | Chỉnh asset ảnh hưởng tất cả object tham chiếu | Vật liệu dùng chung như gạch, bê tông |
| Tạo nhiều `.mat` độc lập | Mỗi asset có thể chỉnh riêng | Các chất liệu khác nhau rõ rệt |
| **Material Variant** | Material con kế thừa từ material cha và ghi đè giá trị được phép | Cùng chất liệu có nhiều bảng màu/biến thể |

Material Variant giúp **quản lý** hiệu quả; không mặc nhiên là kỹ thuật tăng FPS. Việc tác động vào một material lúc runtime cũng không giống sửa file material trong Inspector.

### Lưu ý khi dùng C# ở runtime
```csharp
using UnityEngine;

public class ChangeTint : MonoBehaviour
{
    [SerializeField] private Renderer targetRenderer;
    [SerializeField] private Color targetColor = Color.cyan;

    private void Start()
    {
        if (targetRenderer == null) return;
        // .material trả về material instance cho renderer khi cần.
        // Đừng dùng bừa trên hàng nghìn object mỗi frame.
        Material instance = targetRenderer.material;
        if (instance.HasProperty("_BaseColor"))
            instance.SetColor("_BaseColor", targetColor);
    }
}
```
Ví dụ dành cho URP/Lit. `Renderer.sharedMaterial` tham chiếu material dùng chung: thay đổi giá trị trên đó có thể tác động đến những Renderer khác. `Renderer.material` có thể tạo instance, nên kiểm soát vòng đời/bộ nhớ khi thao tác runtime. Không xem mã ví dụ là phương án hiệu năng tối ưu cho mọi dự án.

## 4. Thực hành theo kịch bản
1. Tạo `MAT_Pottery_Parent` và gán cho ba vật thể.
2. Đổi Base Color trong asset; xác nhận ba vật thể đổi đồng thời.
3. Duplicate material thành bản riêng và gán cho một vật thể; kiểm tra nó có độc lập không.
4. Nếu phiên bản Unity hỗ trợ quy trình này, tạo Material Variant của material cha, chỉ override Base Color. Sửa Smoothness ở material cha và quan sát thuộc tính nào được kế thừa.
5. Thử script trên một object riêng; so sánh lúc Play Mode và sau khi thoát Play Mode.

## 5. Kiểm soát thay đổi bằng version control
Đưa các `.mat`, `.shadergraph`, texture nguồn, `.meta` liên quan vào Git. Không lưu toàn bộ thư mục `Library/`. Khi xem thay đổi (diff), chú ý việc sửa shader/pipeline có thể làm đổi hàng loạt material asset.

## 6. Kiểm tra lỗi và bài tập
- **Sửa một, tất cả đổi:** object dùng chung một `.mat`.
- **Không hiện texture:** thiếu asset hoặc texture bị mất tham chiếu; kiểm tra `.meta` và import.
- **Material nhiều slot:** kiểm tra thứ tự submesh và `Materials > Element 0..n`.

**Bài tập:** tổ chức tối thiểu 8 material theo thư mục, tạo 2 variant; nộp ảnh Project + Inspector và giải thích khác biệt giữa material chung và material độc lập.

## Tự kiểm chứng khi hoàn thành
- [ ] Nêu được khái niệm chính của bài bằng ví dụ trong Unity.
- [ ] Thực hiện được phép thử trước–sau và lưu scene/bằng chứng.
- [ ] Phân biệt kết quả quan sát thực tế với kết luận suy đoán.
- [ ] Kiểm tra phiên bản Render Pipeline/Shader khi áp dụng trên dự án khác.

## Tài liệu tham khảo và đối chiếu
- **1.** [Unity Manual 6.3 — Materials](https://docs.unity.com/en-us/engine/6000.3/manual/materials-and-shaders/materials)
- **2.** [Unity Manual 6.3 — Material Inspector](https://docs.unity.com/en-us/engine/6000.3/manual/materials-and-shaders/materials/class-material)
- **3.** [Unity Manual 6.3 — Material Variants](https://docs.unity.com/en-us/engine/6000.3/manual/materials-and-shaders/materials/materialvariant-landingpage)
- **4.** [Unity Manual 6.3 — Batching](https://docs.unity.com/en-us/engine/6000.3/manual/analysis/graphics-performance-profiling/reduce-draw-calls/draw-call-batching/set-up)

> **Ghi chú tài liệu:** Các bước thao tác và thông số minh họa được thiết kế để tự học; vị trí menu/thuộc tính có thể thay đổi theo template, package và bản cập nhật. Các nguồn Unity ở trên được dùng để kiểm tra thuật ngữ và tính năng; không có tuyên bố đã kiểm thử trực tiếp bằng Unity Editor trong môi trường này.
