# Bài 09 — Bài kiểm tra tổng hợp: Giao diện người dùng trong Unity

> **Creative Core · UI · Assessment · Unity 6.3**  
> **Phạm vi:** Thiết kế UI/UX; Canvas và TextMeshPro; anchors, pivot, Canvas Scaler; Image và 9-slicing; Button/Toggle/Slider; World Space UI.

## 1. Hướng dẫn thực hiện

Bài kiểm tra dùng để xác định khả năng **giải thích và lựa chọn cách triển khai UI**, không chỉ ghi nhớ tên component. Trước khi bắt đầu, người học nên có một scene thực hành với tiêu đề, menu cài đặt và âm thanh để kiểm chứng giả thuyết khi cần.

- **Phần A:** 12 câu trắc nghiệm, mỗi câu có **một đáp án đúng nhất**.
- **Phần B:** 4 phát biểu đúng/sai, yêu cầu giải thích ngắn.
- **Phần C:** 2 bài tình huống thực tế.
- **Phần D:** 1 bài thực hành kiểm chứng trực tiếp trong Unity Editor.

Đây là bộ câu hỏi **tự biên soạn** để ôn tập; không sao chép bài quiz chính thức. Bài quiz Unity Learn riêng có nội dung và quy tắc chấm riêng.

## 2. Phần A — Trắc nghiệm

### Câu 1

Một nhóm phát triển muốn cải thiện cách người chơi tìm thấy mục "Âm thanh" trong menu. Bước đầu nào liên quan trực tiếp nhất?

A. Điều chỉnh kiến trúc thông tin và nhóm mục cài đặt.  
B. Tăng texture resolution của môi trường.  
C. Đổi thuật toán pathfinding.  
D. Bake lại ánh sáng.

### Câu 2

Trong dự án dùng `uGUI`, `TextMeshProUGUI` nên được đặt trong cấu trúc nào?

A. Chỉ trong Prefab không thuộc scene.  
B. Bên dưới một Canvas thích hợp.  
C. Bắt buộc dưới Directional Light.  
D. Bắt buộc dưới Rigidbody.

### Câu 3

Một nút phải giữ offset đối với góc dưới-phải khi thay đổi cửa sổ. Cấu hình nào đúng nhất?

A. Anchor cố định ở trung tâm.  
B. Không dùng Canvas Scaler.  
C. Anchor ở góc dưới-phải và chỉnh offset.  
D. Đổi tất cả camera thành Orthographic.

### Câu 4

`Canvas Scaler > Scale With Screen Size` được dùng chủ yếu để làm gì?

A. Thay đổi dữ liệu AudioClip.  
B. Co giãn UI dựa trên resolution tham chiếu và kích thước màn hình thực tế.  
C. Đảm bảo camera không nhìn xuyên tường.  
D. Thay thế mọi chức năng anchor.

### Câu 5

Vì sao hình nền panel có viền bo nên được cấu hình `Image Type = Sliced` sau khi đặt Border?

A. Giúp các góc không bị kéo méo như khi dãn sprite thông thường.  
B. Tự thêm Navigation vào Button.  
C. Tự lưu cài đặt âm lượng.  
D. Tăng độ phân giải camera.

### Câu 6

Một Button không hoạt động khi người chơi click, trong khi giao diện vẫn hiển thị. Nhóm yếu tố nào nên được kiểm tra đầu tiên?

A. Lighting bake và reflection probe.  
B. Asset Bundle và Terrain.  
C. EventSystem, GraphicRaycaster, raycast target, interactable và listener.  
D. Animation compression và texture mipmap.

### Câu 7

Hàm nào phù hợp để hiện một GameObject menu đang tắt?

A. `SetActive(true)`  
B. `Destroy()`  
C. `SetActive(false)`  
D. `RemoveListener()`

### Câu 8

Điều khiển nào mô tả tốt nhất lựa chọn "Bật nhạc / Tắt nhạc"?

A. Một nút bấm không có trạng thái.  
B. Image với Alpha ngẫu nhiên.  
C. Slider 0–1000.  
D. Toggle với trạng thái Boolean.

### Câu 9

Tại sao `Slider.Value` nên được khởi tạo theo `AudioSource.volume` hiện tại?

A. Vì điều đó làm FPS tăng.  
B. Vì UI phải phản ánh trạng thái thật ngay khi mở menu.  
C. Vì EventSystem không hỗ trợ bool.  
D. Vì tránh phải dùng Camera.

### Câu 10

Một bảng điều khiển gắn trên cửa của tàu vũ trụ phải di chuyển và xoay theo tàu. Render Mode nào phù hợp nhất?

A. Screen Space - Overlay.  
B. Screen Space - Camera.  
C. World Space.  
D. Không sử dụng Canvas.

### Câu 11

`Pivot` của `RectTransform` chủ yếu xác định điều gì?

A. Loại UnityEvent.  
B. Điểm tham chiếu của phép xoay và thay đổi kích thước/định vị phần tử.  
C. Các phương pháp tải scene.  
D. Khoảng âm lượng AudioSource.

### Câu 12

Trong guided project có ba góc camera, yêu cầu nào cần quan tâm khi dùng các nút chuyển camera?

A. Tất cả camera phải đồng thời enabled.  
B. Không cần kiểm tra tag MainCamera hay AudioListener.  
C. Có thể chỉ định camera phù hợp rõ ràng và bảo đảm listener/tag nhất quán.  
D. Chỉ cần đổi tên Button, không cần gắn sự kiện.

## 3. Phần B — Nhận định đúng/sai

**B1.** `UI` và `UX` là hai cách gọi hoàn toàn tương đương, không cần phân biệt trong thiết kế.

**B2.** Một Canvas trong scene có thể chứa nhiều UI GameObject; Unity không giới hạn scene chỉ có một Canvas.

**B3.** Đặt Canvas sang World Space đồng nghĩa mọi nút sẽ tự nhận click mà không cần kiểm tra Event Camera và hệ thống raycast.

**B4.** Một Image trang trí được bật `Raycast Target` có thể gây trở ngại cho Button ở phía sau nếu nó nằm trên đường raycast.

Với mỗi câu: đánh dấu **Đúng** hoặc **Sai**, sau đó giải thích trong 1–2 câu và nêu một phép thử trên Unity Editor nếu cần.

## 4. Phần C — Bài tập tình huống

### Tình huống C1 — Nút trôi khỏi góc

Ở tỷ lệ 16:9, nút Settings xuất hiện gần góc trên-phải. Chuyển sang 4:3, nút lại tiến về giữa. Người dùng cũng báo rằng giao diện rất nhỏ ở màn hình có độ phân giải cao.

Yêu cầu: nêu nguyên nhân khả dĩ; đề xuất cấu hình anchor/pivot và Canvas Scaler; thiết kế ba test case để chứng minh sửa lỗi thành công.

### Tình huống C2 — Menu âm thanh không đồng bộ

Khi mở scene, AudioSource đang phát với `volume = 0.4`. Nhưng Slider hiển thị 0 và Toggle thể hiện “Tắt nhạc”. Sau lần kéo đầu tiên, âm lượng thay đổi đột ngột.

Yêu cầu: xác định vấn đề về dữ liệu/trạng thái; đề xuất thứ tự khởi tạo UI; cho biết khi nào có thể dùng `SetValueWithoutNotify` hoặc `SetIsOnWithoutNotify`.

## 5. Phần D — Bài thực hành trong Editor

Xây dựng một màn hình cài đặt ngắn trong scene 3D. Màn hình phải có `TextMeshPro`, `Settings Button`, panel `Image` có thể co giãn, `Exit Button`, `Music Toggle` và `Volume Slider`. Thực hiện kiểm tra ba kích thước Game view; nếu có thời gian, nhân bản scene để thử World Space UI.

**Minh chứng cần nộp:** screenshot hoặc recording trạng thái trước/sau mở menu; ảnh inspector của một Button hoặc Toggle; bảng ghi một lỗi, nguyên nhân và cách kiểm tra sau sửa.

## 6. Thang điểm đề xuất

| Thành phần | Điểm |
| --- | ---: |
| Phần A — 12 câu (0.25 điểm/câu) | 3 |
| Phần B — 4 câu (0.5 điểm/câu) | 2 |
| Phần C — 2 tình huống (1 điểm/câu) | 2 |
| Phần D — Thực hành (UI 1đ, tương tác 1đ, kiểm thử 1đ) | 3 |
| **Tổng** | **10** |

Không cung cấp sẵn đáp án tại đây để giữ tài liệu ở vai trò bài đánh giá. Có thể tự đối chiếu các bài học theo từng chuyên đề và chạy các thí nghiệm trong Unity để giải thích lựa chọn.

## 7. Tài liệu tham khảo

- [Unity Learn — Creative Core: UI quiz](https://learn.unity.com/pathway/creative-core/unit/creative-core-ui/quiz/creative-core-ui-quiz?version=6.3)
- [Unity Learn — Creative Core UI Mission](https://learn.unity.com/pathway/creative-core/unit/creative-core-ui?version=6.3)
- [Unity Manual — Basic Layout](https://docs.unity.cn/2023.2/Documentation/Manual/UIBasicLayout.html)
- [Unity Manual — Canvas Scaler](https://docs.unity.cn/2023.1/Documentation/Manual/script-CanvasScaler.html)

*Bài kiểm tra tự biên soạn bằng tiếng Việt, không phải đề quiz hoặc bản dịch chính thức của Unity.*
