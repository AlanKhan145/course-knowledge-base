# Bài 04 — Thiết kế nền menu bằng Image, Sprite và 9-slicing

> **Creative Core · UI · Bài học + thực hành · Unity 6.3**  
> **Kết quả:** Một bảng Settings có nền bán trong suốt, tiêu đề, nút đóng và sprite viền không bị méo khi thay đổi kích thước.

## 1. Vấn đề và mục tiêu học tập

Menu cài đặt cần tạo được lớp thông tin rõ ràng mà không làm mất bối cảnh của game. Trong `uGUI`, `Image` có thể vẽ các sprite, áp màu và kiểm soát độ trong suốt. Tuy nhiên, ảnh có viền hoặc góc bo thường bị kéo méo nếu thay đổi kích thước không đúng cách. **9-slicing** là kỹ thuật xử lý những ảnh dùng làm panel hoặc button.

Sau bài này, người học có thể dựng một panel với Image, import sprite vào Unity, thực hiện 9-slicing, xác định draw order và kiểm thử sự chồng lớp.

## 2. Cơ chế hoạt động của UI Image

`Image` là một `Graphic` nằm trong Canvas. Các thuộc tính hay sử dụng:

| Thuộc tính | Tác dụng |
| --- | --- |
| `Source Image` | Sprite được dùng để vẽ hình |
| `Color` | Nhân màu (tint) và điều khiển Alpha |
| `Image Type` | Chế độ vẽ `Simple`, `Sliced`, `Tiled`, `Filled` tùy trường hợp |
| `Preserve Aspect` | Có thể giữ tỷ lệ sprite khi vẽ ở chế độ hỗ trợ |
| `Raycast Target` | Cho phép Graphic nhận hit-test con trỏ; nên tắt ở ảnh trang trí không cần bắt input |
| `Material` | Vật liệu hiển thị hình ảnh, nếu muốn dùng tùy biến phù hợp với Canvas |

Nếu thay Alpha của `Image.Color`, toàn panel trở nên bán trong suốt. Nhưng các GameObject con có màu/Alpha riêng và được render theo hierarchy; không nên mặc định rằng Alpha của ảnh nền sẽ tự làm mờ toàn bộ nội dung con theo cùng cách.

## 3. Bản chất của kỹ thuật 9-slicing

Một sprite thông thường bị kéo đồng đều khi đổi kích thước. Với 9-slicing, sprite được chia thành chín vùng: bốn góc, bốn cạnh và phần trung tâm. Các góc giữ hình dáng; cạnh dãn theo một chiều; phần giữa mở rộng để lấp diện tích còn lại.

```text
+----------------+----------------+----------------+
| Góc trái-trên  | Cạnh trên      | Góc phải-trên |
| Giữ hình       | Dãn ngang      | Giữ hình       |
+----------------+----------------+----------------+
| Cạnh trái      | Tâm            | Cạnh phải      |
| Dãn dọc        | Dãn 2 chiều    | Dãn dọc        |
+----------------+----------------+----------------+
| Góc trái-dưới  | Cạnh dưới      | Góc phải-dưới |
| Giữ hình       | Dãn ngang      | Giữ hình       |
+----------------+----------------+----------------+
```

Điều kiện quan trọng: Sprite phải có **Border** hợp lệ được xác lập trong Sprite Editor, và `Image.Type` phải đặt `Sliced`. Bật `Sliced` mà chưa xác định Border sẽ không đem lại kết quả mong muốn.

## 4. Lab — Tạo bảng Settings

### 4.1. Xây dựng hierarchy

1. Tạm ẩn `Title Text` và `Settings Button` để có không gian dựng menu.
2. Dưới `Canvas`, tạo `UI > Image`; đổi tên `Settings Menu`.
3. Dùng `Rect Tool` (**T**) để tạo một bảng chữ nhật lớn ở giữa màn hình; chỉnh `Image.Color` với Alpha phù hợp, ví dụ khoảng 0.85 là **giá trị thử nghiệm**.
4. Nhấp phải `Settings Menu` → `UI > Text - TextMeshPro`; đổi thành `Settings Text`, nội dung `CÀI ĐẶT`.
5. Tạo `UI > Button - TextMeshPro` làm con của `Settings Menu`, đổi tên thành `Exit Button`, nhãn `X` hoặc `Đóng`. Đặt gần góc trên-phải với khoảng lề dễ thao tác.

Cây đối tượng:

```text
Canvas
├── Title Text
├── Settings Button
└── Settings Menu (Image)
    ├── Settings Text (TMP)
    └── Exit Button (Button + Image)
        └── Text (TMP)
```

### 4.2. Import sprite và tạo 9-slicing

1. Kéo file PNG có góc bo/viền vào dự án.
2. Chọn texture: `Texture Type = Sprite (2D and UI)`; `Apply`.
3. Mở `Sprite Editor` và chỉnh vùng **Border** sao cho bốn góc của panel được bao đúng. Nếu không thấy Sprite Editor, kiểm tra package hỗ trợ Sprite Editor trong dự án.
4. Nhấn `Apply` trong Sprite Editor.
5. Gán sprite này vào `Image > Source Image` của `Settings Menu` hoặc `Exit Button`.
6. Đặt `Image Type = Sliced`; thay chiều rộng, chiều cao để xác minh bốn góc giữ hình dáng khi bảng kéo ngang/dọc.

**Lưu ý:** 9-slicing giữ cấu trúc viền, không tự bảo đảm ảnh nội dung có tính thẩm mỹ ở mọi kích thước. Nếu sprite có họa tiết chi tiết ở phần giữa, việc dãn tâm vẫn có thể làm họa tiết trông thiếu tự nhiên.

## 5. Draw Order và tính tương tác

Với cùng một Canvas, trong các trường hợp thông dụng, phần tử UI đứng sau trong hierarchy thường được vẽ đè lên phần tử đứng trước. Bố trí nền panel bên dưới tiêu đề và nút. Cấu hình Canvas phụ, sorting và material có thể ảnh hưởng thứ tự hiển thị, vì vậy luôn kiểm tra kết quả ở Game view.

Ảnh trang trí lớn có bật `Raycast Target` có thể chặn nhấn vào nút phía sau, tùy thứ tự và cấu hình raycast. Đối với ảnh chỉ để trang trí, nên bỏ chọn `Raycast Target`; đối với panel dùng để ngăn tương tác nền, cần thiết kế lớp chặn input có chủ đích.

## 6. Kiểm chứng và xử lý lỗi

| Hiện tượng | Nguyên nhân khả dĩ | Cách kiểm tra |
| --- | --- | --- |
| Góc bo bị kéo dẹp | `Simple` hoặc Border chưa khai báo | Kiểm tra Sprite Editor và `Image Type` |
| Nút X bị panel che | Thứ tự hierarchy sai, hoặc có lớp chắn phía trên | Rà soát hierarchy, sorting và Raycast Target |
| Ảnh trắng trơn | `Source Image` chưa gán, hoặc tint quá sáng | Gán lại Sprite và Color |
| Ảnh nhìn nhòe | Texture thấp, bị phóng lớn, thiết lập lọc/compression | Kiểm tra import settings và độ phân giải mục tiêu |
| Panel bị tràn màn hình | Anchor và kích thước chưa phù hợp | Thử lại trên Game view tỷ lệ khác |

**Checkpoint:** có bảng cài đặt chứa chữ và nút đóng; góc của sprite không méo khi đổi tỷ lệ panel; người dùng vẫn nhìn rõ chữ.

## 7. Câu hỏi ôn tập

**Câu 1.** Tại sao nên dùng 9-slicing cho panel có viền bo?  
A. Để tăng FPS lên cố định  
B. Để bốn góc không bị kéo dãn quá mức khi đổi kích thước  
C. Để tự thêm EventSystem  
D. Để phát nhạc  
**Đáp án: B.** **Giải thích:** 9-slicing chia sprite thành vùng góc/cạnh/tâm và xử lý co giãn riêng.

**Câu 2.** Điều kiện nào cần thiết để `Image Type = Sliced` hoạt động đúng ý?  
A. Có AudioListener  
B. Camera phải Orthographic  
C. Sprite được cấu hình Border  
D. Scene phải có Terrain  
**Đáp án: C.** **Giải thích:** Border quy định chín vùng của sprite.

**Câu 3.** Thuộc tính nào của `Image.Color` làm nền bán trong suốt?  
A. Alpha  
B. Font Size  
C. Near Clip Plane  
D. Pivot  
**Đáp án: A.** **Giải thích:** Alpha điều khiển độ trong suốt của đồ họa.

**Câu 4.** Một Image trang trí che khuất tương tác Button. Nên kiểm tra trước gì?  
A. Baked GI  
B. Occlusion Culling  
C. Rigidbody  
D. `Raycast Target` và thứ tự phần tử  
**Đáp án: D.** **Giải thích:** Graphic trang trí có thể nhận raycast và chặn điều khiển bên dưới.

**Câu 5.** Thành phần nào nên đặt ở bên trên nền panel trong thứ tự vẽ UI thông thường?  
A. Directional Light  
B. Settings Text và Exit Button  
C. Camera FOV  
D. Terrain  
**Đáp án: B.** **Giải thích:** Nhãn và điều khiển phải hiển thị phía trước nền để có thể đọc và bấm.

## 8. Tổng kết và tài liệu tham khảo

`Image`, `Sprite`, Color Alpha và 9-slicing tạo nên nền tảng của các bảng menu có thể co giãn. Sau bài học, panel có hình ảnh được sắp xếp hợp lý và chuẩn bị cho bước gắn tương tác.

- [Unity Learn — Create a menu background with images](https://learn.unity.com/pathway/creative-core/unit/creative-core-ui/tutorial/create-a-menu-background-with-images-3?version=6.3)
- [Unity Manual — Basic Layout](https://docs.unity.cn/2023.2/Documentation/Manual/UIBasicLayout.html)

*Bài học tiếng Việt tự biên soạn và đối chiếu tài liệu kỹ thuật; không phải bản dịch chính thức.*
