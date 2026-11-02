# Bài 05 — Kiểm tra tốc độ khung hình của thế giới bên trong portal

> **Khóa học:** Mobile AR Development · **Môi trường tham chiếu:** Unity 2022.3.  
> **Kết quả:** Đo được tốc độ khung hình khi portal hoạt động, so sánh các cấu hình và tìm nguyên nhân chính gây giảm hiệu năng.

## 1. Vấn đề hiệu năng trong AR

Một trải nghiệm AR phải đồng thời xử lý camera, tracking, hiển thị thế giới thật và render nội dung 3D. **FPS** (frames per second) biểu thị số khung hình được hiển thị mỗi giây; thời gian xử lý mỗi khung hình (frame time) thường hữu ích hơn khi phân tích nơi xảy ra nghẽn. Portal có thể chứa nhiều mesh, texture, ánh sáng và hiệu ứng; vì thế cần đo hiệu năng **trên thiết bị đích**, không chỉ chạy thử trong Unity Editor.

## 2. Mục tiêu

- Giải thích quan hệ giữa FPS và thời gian khung hình.
- Đo hiệu năng ở trạng thái chưa đặt portal và sau khi portal xuất hiện.
- Sử dụng Unity Profiler để phân biệt vấn đề CPU và GPU ở mức thực hành.
- Đề xuất thay đổi đồ họa có thể kiểm chứng bằng phép đo lặp lại.

## 3. Công thức và cách đọc

$$
\text{Frame time (ms)} \approx \frac{1000}{\text{FPS}}
$$

Ví dụ để hình dung quan hệ, **30 FPS** tương ứng khoảng **33,3 ms/khung hình**, còn **60 FPS** tương ứng khoảng **16,7 ms/khung hình**. Đây là mối quan hệ toán học, **không phải** số đo của ứng dụng trong bài. Tốc độ thực tế có thể dao động vì nhiệt độ máy, tải GPU/CPU, độ phân giải camera và chất lượng tracking.

| Chỉ số | Diễn giải | Lưu ý |
|---|---|---|
| FPS trung bình | Số frame trên giây trong khoảng đo | Có thể che lấp các cú giật ngắn |
| Frame time | Thời gian cần để hoàn thành frame | Dễ so sánh với ngân sách thời gian |
| CPU Usage | Chi phí script, physics, render thread… | Xác định khu vực xử lý nặng |
| Rendering/GPU | Draw calls và thời gian xử lý đồ họa | Cần công cụ và thiết bị hỗ trợ đo GPU |
| Batches/triangles | Tải dựng hình | Không tự kết luận đây là bottleneck duy nhất |

## 4. Quy trình đo có thể lặp lại

1. Build **Development Build** nếu cần kết nối Profiler; cân nhắc bật **Autoconnect Profiler** theo cấu hình Unity và thiết bị.
2. Mở **Window > Analysis > Profiler**, chọn đúng phiên chạy trên điện thoại thay vì tiến trình Editor.
3. Chọn một khu vực thử cố định; ghi lại phiên bản ứng dụng, thiết bị, điều kiện sáng và khoảng thời gian đo.
4. Đo lần A: camera AR và plane detection hoạt động nhưng **chưa đặt portal**.
5. Đo lần B: portal xuất hiện trong tầm nhìn, đứng ở khoảng cách tương đương; thu thập frame time/FPS.
6. Đo lần C: thay **một** yếu tố, chẳng hạn tắt hạt hoặc giảm chất lượng shadow; đo lại cùng điều kiện.

```mermaid
flowchart LR
    A[Đo baseline AR] --> B[Đo khi portal hiển thị]
    B --> C[Phân tích Profiler]
    C --> D[Thay một tham số]
    D --> E[Đo lại và so sánh]
```

Khi FPS giảm mạnh ở bước B, có thể nhận định portal làm tăng tải, nhưng cần dựa vào Profiler để tìm thành phần chịu trách nhiệm. Không nên kết luận GPU nghẽn chỉ từ FPS tổng.

## 5. Mã hiển thị FPS tham khảo

Có thể dùng script nhỏ để theo dõi nhanh, nhưng số liệu chính thức nên lấy từ Profiler hoặc thiết bị. Tạo `SimpleFpsCounter.cs` và gắn vào một GameObject hoạt động:

```csharp
using UnityEngine;

public class SimpleFpsCounter : MonoBehaviour
{
    private float smoothedFrameTime;

    private void Update()
    {
        float dt = Mathf.Max(Time.unscaledDeltaTime, 0.0001f);
        smoothedFrameTime = Mathf.Lerp(smoothedFrameTime, dt, 0.1f);
    }

    private void OnGUI()
    {
        float fps = smoothedFrameTime > 0f ? 1f / smoothedFrameTime : 0f;
        GUI.Label(new Rect(16, 16, 240, 36), $"FPS (ước lượng): {fps:F1}");
    }
}
```

Giá trị hiển thị đã được làm mượt để dễ quan sát. `OnGUI` phù hợp cho debug đơn giản, không phải UI production; bản thân overlay và Development Build cũng có thể ảnh hưởng đến thời gian xử lý.

## 6. Các điểm tối ưu hóa nên thử

- **Mesh:** giảm độ phức tạp ở các vật thể không cần nhiều chi tiết; kiểm tra model không bị nhân bản ngoài ý muốn.
- **Material/texture:** giới hạn texture quá lớn và shader tốn kém; sử dụng các định dạng phù hợp nền tảng.
- **Ánh sáng và bóng:** cân nhắc baked lighting hoặc giản lược realtime shadow trong thế giới portal.
- **Particle:** giảm số lượng particle, overdraw và hiệu ứng phủ kín màn hình.
- **Logic script:** tránh `Instantiate`/`Destroy` liên tục trong `Update`; cache các tham chiếu được sử dụng nhiều lần.
- **Phạm vi hiển thị:** nội dung ngoài vùng cần quan sát không nên chiếm chi phí render không cần thiết; phần che portal sẽ được xem xét kỹ hơn ở bài tiếp theo.

Không tối ưu tất cả cùng lúc: chỉ thử một thay đổi và ghi chỉ số trước/sau để biết thay đổi nào thực sự có tác dụng.

## 7. Mẫu bảng ghi kiểm thử

| Lần đo | Điều kiện | FPS trung bình | Frame time | Nhận xét |
|---|---|---|---|---|
| A | AR, chưa có portal | *Tự đo* | *Tự đo* | Baseline |
| B | Portal đang hiển thị | *Tự đo* | *Tự đo* | So với A |
| C | Portal sau một thay đổi | *Tự đo* | *Tự đo* | So với B |

## 8. Lỗi khi đánh giá

- Chỉ dùng FPS của Editor để đại diện cho Android/iOS.
- Đo các phiên trong môi trường/điều kiện nhiệt độ quá khác nhau.
- Dùng một giá trị FPS tức thời làm kết luận chung.
- Thay nhiều tham số đồng thời nên không biết nguyên nhân cải thiện.
- Nhầm giảm chất lượng tracking với lag render; cần kiểm tra cả trạng thái AR Session.

## 9. Câu hỏi ôn tập

**Câu 1.** 60 FPS tương ứng frame time xấp xỉ bao nhiêu?  
A. 60 ms · B. 100 ms · C. 16,7 ms · D. 1,7 ms  
**Đáp án: C.** $1000 / 60 \approx 16{,}7$ ms.

**Câu 2.** Để xác định hiệu năng trên điện thoại nên làm gì?  
A. Kết nối Profiler tới bản chạy trên thiết bị · B. Chỉ đọc Console của Editor · C. Chỉ đếm số prefab · D. Chỉ nhìn Scene view  
**Đáp án: A.** Số đo cần phản ánh phần cứng đích.

**Câu 3.** Vì sao nên có phép đo baseline trước khi đặt portal?  
A. Để xóa project · B. Để mở Scene view · C. Để thay input · D. Để tách tải AR nền và tải bổ sung từ portal  
**Đáp án: D.** Phép so sánh giúp ước lượng phần tải tăng thêm.

**Câu 4.** Thực hành nào giúp xác định nguyên nhân cải thiện FPS?  
A. Thay tất cả shader và mesh cùng lúc · B. Thay một yếu tố rồi đo lại · C. Không ghi kết quả · D. Đo trên máy khác mỗi lần  
**Đáp án: B.** Giữ các yếu tố khác ổn định giúp đánh giá thay đổi.

**Câu 5.** FPS trung bình cao có đảm bảo không giật hình không?  
A. Luôn có · B. Chỉ khi không có camera · C. Không; phải xét sự dao động frame time · D. Chỉ khi vật thể đứng yên  
**Đáp án: C.** Một số frame bất thường vẫn có thể tạo cảm giác giật.

## 10. Tổng kết

Đo hiệu năng theo chu trình **baseline → có portal → phân tích → tối ưu từng yếu tố → đo lại**. Ưu tiên đo trên thiết bị thực và ghi rõ điều kiện để kết quả có thể lặp lại.

**Đọc thêm:** [Unity Profiler](https://docs.unity.cn/2023.3/Documentation/Manual/ProfilerWindow) · [Unity Learn — Create a plane detection AR app](https://learn.unity.com/pathway/mobile-ar-development/unit/create-a-plane-detection-ar-app?version=2022.3).
