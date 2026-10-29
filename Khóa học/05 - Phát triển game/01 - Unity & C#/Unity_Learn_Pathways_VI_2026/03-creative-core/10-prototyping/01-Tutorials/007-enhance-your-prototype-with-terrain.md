# Bài 07 — Thiết kế địa hình bằng Terrain trong Unity

> **Creative Core · Prototyping · Thực hành**

Terrain giúp tạo địa hình từ dữ liệu cao độ và lớp texture, đặc biệt phù hợp với vùng đồi, thung lũng hoặc địa hình bao quanh không gian chơi.

## 1. Mục tiêu và chuẩn bị

Người học sẽ tạo Terrain tile, tạo đồi bằng brush, làm mượt địa hình, thêm Terrain Layer và kiểm tra đường đi. Tạo một scene thử nghiệm riêng trước khi đưa địa hình vào prototype.

Từ menu **GameObject > 3D Object > Terrain**, Unity tạo `Terrain` GameObject cùng `TerrainData` asset liên quan. Trong Inspector hoặc Terrain overlay có công cụ sculpt và paint. [Hướng dẫn chính thức](https://docs.unity.com/en-us/engine/6000.6/manual/creating-environments/script-terrain/terrain-using-terrains).

## 2. Nguyên lý heightmap và điểm giới hạn

Terrain trong Unity lưu địa hình cơ bản dưới dạng **heightmap**: với mỗi vị trí phẳng (x, z), dữ liệu xác định một cao độ y. Vì vậy, một Terrain thông thường không trực tiếp tạo được hang có trần nhô hoặc nhiều mặt đất chồng nhau tại cùng vị trí. Nếu cần hang, mái vòm hoặc vách hình học phức tạp, hãy kết hợp mesh.

Đặc biệt, không thể đào địa hình xuống **thấp hơn mức gốc của heightmap** bằng cách liên tục hạ brush. Nếu muốn một rãnh thấp ở trước cầu, có thể nâng vùng mặt đất chung rồi hạ phần rãnh, hoặc thiết lập cao độ Terrain hợp lý trước khi sculpt.

## 3. Công cụ cần biết

| Công cụ | Tác dụng | Ứng dụng |
|---|---|---|
| Raise / Lower Terrain | Thay đổi độ cao | Tạo đồi, thung lũng |
| Smooth Height | Giảm biến thiên cao độ đột ngột | Làm đường đi bớt gồ ghề |
| Set Height | Đưa vùng về cao độ mục tiêu | Làm sân, nền công trình |
| Paint Texture | Phủ bề mặt bằng Terrain Layer | Đánh dấu đường mòn/cỏ/đất |
| Create Neighbor Terrains | Tạo tile liền kề | Mở rộng không gian |

**Brush Size** điều khiển diện tích ảnh hưởng; **Opacity/Strength** điều khiển cường độ tác động. Thử với lực thấp trước để tránh mặt đất đổi quá mạnh. Với landscape cỡ nhỏ, **không cần** mặc định tạo lưới 3 × 3 tile như bài tập minh họa trên Unity Learn; tăng số tile làm phát sinh chi phí quản lý và rendering.

## 4. Bài thực hành: đồi và rãnh trước cầu

1. Tạo Terrain; điều chỉnh kích thước TerrainData cho phù hợp scene, ghi lại thông số ban đầu.
2. Chọn Raise/Lower, dùng brush mềm tạo hai gò đồi ngoài vùng chơi chính.
3. Dùng Smooth Height làm mượt chân đồi, giữ độ dốc đường đi phù hợp nhân vật.
4. Dùng Set Height hoặc nâng mặt bằng chung rồi hạ rãnh trước cầu. Cố gắng tạo một vị trí có chênh cao nhìn thấy được nhưng không chặn nhiệm vụ chính.
5. Tại **Paint Texture**, thêm `Terrain Layer` đầu tiên, sau đó chọn layer khác để đánh dấu đường đi. Lưu ý layer đầu có thể phủ toàn bộ Terrain.
6. Nếu cần thêm diện tích, dùng Create Neighbor Terrains thay vì tạo các tile rời thủ công.
7. Play mode, đi kiểm tra từng đoạn dốc, vị trí cầu và mép rãnh; sửa phần gây kẹt hoặc khó quan sát.

## 5. Hiệu năng và lỗi thường gặp

Lỗi “nhân vật chìm vào đất” thường liên quan collider/controller, vị trí spawn hoặc height. Lỗi đường đi quá dốc cần sửa địa hình chứ không nên tăng tốc độ player để vượt qua. Khi thêm tree/grass/detail và nhiều Terrain Layer, cần theo dõi hiệu năng trên nền tảng đích; chi phí thực tế tùy render pipeline và thiết lập.

**Kết quả cần nộp:** ảnh chụp Terrain trước/sau, ghi chú brush và một lượt chạy kiểm tra chuyển động qua địa hình.

## 6. Nguồn kỹ thuật

- [Unity Docs – Create and edit Terrains](https://docs.unity.com/en-us/engine/6000.6/manual/creating-environments/script-terrain/terrain-using-terrains)
- [Unity Docs – Paint Texture](https://docs.unity.com/en-us/engine/6000.6/manual/creating-environments/script-terrain/terrain-textures/terrain-paint-texture)
- [Unity Learn – Enhance your prototype with Terrain](https://learn.unity.com/tutorial/enhance-your-prototype-with-terrain-3?version=6.0)

## 7. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Tại sao heightmap không trực tiếp tạo hang có mái nhô?

A. Vì có quá nhiều lớp màu  
B. Vì mỗi điểm (x,z) cơ bản chỉ có một độ cao  
C. Vì chỉ hỗ trợ âm thanh  
D. Vì phải có NPC  

**Đáp án:** B
**Giải thích:** Một heightmap đơn trị không mô tả nhiều mặt đứng chồng lên nhau.

**Câu 2.** Muốn tạo rãnh thấp hơn vùng đất, thao tác nào hợp lý?

A. Tạo mặt đất chung cao hơn rồi hạ phần rãnh  
B. Chỉ tăng số đèn  
C. Tắt Terrain Collider  
D. Thêm logo  

**Đáp án:** A
**Giải thích:** Không thể sculpt thấp hơn cao độ gốc của heightmap bằng công cụ giảm độ cao.

**Câu 3.** Dùng Smooth Height để làm gì?

A. Tăng số tile  
B. Chỉ đổi màu  
C. Làm mềm biến thiên cao độ gắt  
D. Tạo ô cửa ProBuilder  

**Đáp án:** C
**Giải thích:** Smooth giảm sự thay đổi cao độ đột ngột.

**Câu 4.** Terrain Layer chủ yếu phục vụ việc gì?

A. Điều khiển Animator  
B. Chạy Input System  
C. Tạo collider dạng Box  
D. Gắn texture và thuộc tính bề mặt Terrain  

**Đáp án:** D
**Giải thích:** Paint Texture dùng các Terrain Layer.

**Câu 5.** Lúc nào nên tạo Neighbor Terrain?

A. Khi cần mở rộng landscape liền kề  
B. Khi cần viết C#  
C. Khi project không có camera  
D. Khi muốn bật nút  

**Đáp án:** A
**Giải thích:** Adjacent tiles giúp mở rộng địa hình có tổ chức.
