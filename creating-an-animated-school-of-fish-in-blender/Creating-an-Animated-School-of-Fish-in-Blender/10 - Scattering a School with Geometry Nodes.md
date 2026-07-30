# 10 — Rải cả đàn cá bằng Geometry Nodes

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Geometry Nodes |
| **Thời điểm** | 21:47–25:15 |
| **Chủ đề chính** | Volume Cube, Distribute Points in Volume, Instance on Points, Collection Info, Random Value cho biến thiên kích thước |

## 1. Mục tiêu bài học

- Dựng một Geometry Nodes setup trên object "Fish Source" (chương 02) để rải nhiều bản sao cá ngẫu nhiên trong một thể tích.
- Dùng **Collection Info** với "Separate Children" để lấy từng con cá riêng lẻ trong "Fish Collection" làm nguồn instance.
- Thêm biến thiên kích thước ngẫu nhiên bằng **Random Value + Math (Multiply)**.

## 2. Nội dung chính

**Chuyển sang Geometry Nodes.** Chọn object **"Fish Source"** (Plane ẩn đã tạo ở chương 02), chuyển sang tab **Geometry Nodes editor**, tạo một node tree mới ("New").

**Volume Cube làm vùng thể tích.** Vì không cần "nhìn thấy" object này (chỉ dùng làm dữ liệu hình học nguồn), bước đầu tiên chỉ để **xem trực quan vùng không gian sẽ rải cá**: thêm node **Volume > Volume Cube** (một Primitive tạo khối hộp dạng thể tích), nối tạm vào **Group Output > Geometry** để thấy đường viền khối hộp hiển thị trong viewport. Tác giả chỉnh khối hộp này **dài hơn một chút**, di chuyển đến đúng vị trí mong muốn (dọc theo lòng suối), và **mở rộng nhẹ theo trục Z** — lưu ý: node này **không thực sự tạo ra một khối thể tích render được**, chỉ dùng làm **vùng không gian tham chiếu** để bước phân bố điểm tiếp theo sử dụng.

**Phân bố điểm trong thể tích.** Thêm node **Point > Distribute Points in Volume**, nối đầu ra của Volume Cube vào đầu vào Volume của node này. Khác với việc phân bố điểm trên bề mặt phẳng (Distribute Points on Faces), node này phân bố điểm **rải rác trong toàn bộ thể tích 3D** của khối hộp — lý do được chọn thay vì một mặt phẳng đơn thuần là để cá không chỉ nằm trên một lớp phẳng mà có độ sâu tự nhiên trong không gian dòng nước. Thông số **Density** kiểm soát số lượng điểm sinh ra; thông số **Seed** thay đổi để có **một mẫu phân bố cụ thể khác** (giữ nguyên density nhưng đổi vị trí ngẫu nhiên của từng điểm).

**Instance từng con cá lên các điểm.** Thêm node **Instances > Instance on Points**, nối chuỗi điểm đã phân bố vào đầu vào Points. Để lấy dữ liệu "Fish Collection" (chương 09) làm nguồn instance, kéo trực tiếp Collection đó từ Outliner vào Geometry Nodes editor — Blender tự động tạo một node **Collection Info** tương ứng. Trong panel của Collection Info, bật hai tùy chọn quan trọng:
- **"Separate Children"** — để mỗi con cá (mesh) bên trong Collection được coi là một **instance riêng biệt độc lập** (thay vì toàn bộ Collection bị gộp lại thành một khối "instance chung" duy nhất).
- **"Reset Children"** — để **reset transform gốc** của từng con cá về vị trí/xoay/scale mặc định trước khi instance, tránh việc vị trí gốc ban đầu của mỗi bản sao (từ lúc `Shift + D` ở chương 09) làm lệch kết quả rải.

Nối đầu ra **Instances** của Collection Info vào đầu vào **Instance** của node Instance on Points, rồi nối kết quả cuối vào Group Output.

**Loại Armature khỏi Collection.** Kết quả ban đầu cho thấy các instance **quá to** và **vẫn hiển thị cả Armature** (khung xương) đi kèm mỗi con cá — vì Armature vẫn đang nằm chung trong "Fish Collection". Khắc phục: chọn tất cả các Armature, đưa chúng **ra khỏi** "Fish Collection" (dùng lệnh Remove from Collection hoặc M sang một Collection khác) — chỉ giữ lại đúng các mesh cá trong Collection dùng cho Instance on Points. Sau khi loại bỏ, kết nối lại, kết quả chỉ còn thuần các mesh cá được instance, không còn khung xương lẫn vào.

**Điều chỉnh mật độ và kích thước.** Số lượng cá vẫn còn khá nhiều — giảm **Density** của Distribute Points in Volume xuống còn khoảng **0.5**. Thêm một node **Scale Instances** để đặt một tỉ lệ nhỏ hơn cho toàn bộ đàn.

**Biến thiên kích thước ngẫu nhiên.** Để mỗi con cá có kích thước khác nhau (không đồng đều tăm tắp): thêm node **Utility > Random Value** (kiểu Float), thêm node **Math** đặt chế độ **Multiply**, nối Random Value vào một đầu vào của Math, và nối kết quả Math vào đầu vào **Scale** của node Scale Instances. Đặt **Min khoảng 0.3** và **Max khoảng 1.2** cho Random Value (tác giả tự nhận xét khoảng này với ví dụ cụ thể này có thể hơi rộng, tạo một số cá "hơi mũm mĩm" — có thể tinh chỉnh lại tùy nhu cầu). Kết quả: nhìn từ trên xuống, đàn cá giờ có **nhiều kích thước khác nhau**, và nhờ các thiết lập biến thể tốc độ bơi từ chương 09, **không phải tất cả đều bơi cùng nhau đồng bộ**.

**Ghi chú thêm về mở rộng biến thể.** Nếu muốn thêm đa dạng hơn nữa, có thể: tạo thêm nhiều phiên bản gốc của cá (với các kiểu bơi khác nhau) trong "Fish Collection", hoặc chỉ đơn giản đổi **Seed** của Distribute Points nhiều lần để thử các mẫu phân bố khác nhau. Nếu muốn đàn đông hơn, tăng lại **Density**. Tác giả chủ động **không thêm biến thiên về góc xoay (Rotation)** cho các instance — toàn bộ cá được hướng theo cùng một chiều, vì mục đích của cảnh là mô phỏng đàn cá "đứng yên tương đối" trong dòng nước, chỉ bơi đủ để giữ vị trí ngược dòng chảy, chứ không phải bơi tự do nhiều hướng khác nhau — nên không cần "chơi xung quanh với vòng quay" như tác giả có đề cập là một khả năng mở rộng nếu muốn.

## 3. Quy trình thực hành gợi ý

1. Chọn "Fish Source", mở Geometry Nodes editor, tạo node tree mới.
2. Thêm Volume Cube, tạm nối vào Group Output để căn chỉnh kích thước/vị trí vùng rải cá.
3. Thêm Distribute Points in Volume, nối Volume Cube vào, chỉnh Density và Seed.
4. Thêm Instance on Points; kéo "Fish Collection" từ Outliner vào node editor để tạo Collection Info; bật "Separate Children" và "Reset Children".
5. Nối Collection Info > Instances vào Instance on Points > Instance; nối kết quả vào Group Output.
6. Loại các Armature ra khỏi "Fish Collection" nếu chúng vẫn hiển thị trong kết quả instance.
7. Giảm Density (~0.5), thêm Scale Instances với tỉ lệ nhỏ hơn cho toàn đàn.
8. Thêm Random Value (Float) + Math (Multiply), nối vào Scale của Scale Instances; đặt Min/Max cho biến thiên kích thước hợp lý (ví dụ 0.3–1.2, tinh chỉnh theo nhu cầu).
9. Thử đổi Seed của Distribute Points nhiều lần để tìm mẫu phân bố ưng ý; tăng/giảm Density theo mật độ đàn mong muốn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Mở Geometry Nodes editor | Đổi Editor Type hoặc tab "Geometry Nodes" |
| Thêm node mới | `Shift + A` |
| Kéo Collection vào node editor để tạo Collection Info | Kéo-thả trực tiếp từ Outliner |
| Đưa object ra khỏi Collection | Chuột phải > Collection > Remove from Collection (hoặc `M`) |

## 5. Lưu ý & lỗi thường gặp

- Quên bật "Separate Children" trên Collection Info khiến toàn bộ Collection bị coi là một instance khối duy nhất thay vì rải từng con cá riêng biệt.
- Quên bật "Reset Children" có thể khiến vị trí instance bị lệch theo transform gốc còn sót lại của từng bản sao đã nhân bản thủ công ở chương 09.
- Nếu quên loại Armature khỏi "Fish Collection", kết quả instance sẽ hiển thị lẫn cả khung xương — dễ nhầm là lỗi node trong khi thực chất là vấn đề nội dung Collection.
- Volume Cube chỉ là công cụ tham chiếu trực quan cho vùng rải, không phải hình học render thật — không cần lo lắng nếu kết quả cuối không thấy "khối hộp" nào xuất hiện trong render.
- Khoảng Random Value cho Scale quá rộng (như ví dụ Min 0.3/Max 1.2 mà tác giả tự nhận là hơi quá) có thể tạo ra một số cá to/nhỏ bất thường — nên tinh chỉnh lại khoảng giá trị theo mức độ biến thiên mong muốn cho từng dự án cụ thể.

## 6. Checklist thực hành

- [ ] Đã dựng được Geometry Nodes trên "Fish Source" với Volume Cube + Distribute Points in Volume.
- [ ] Đã dùng Collection Info (Separate Children + Reset Children) để lấy từng con cá từ "Fish Collection" làm instance.
- [ ] Đã loại Armature khỏi Collection để chỉ hiển thị mesh cá.
- [ ] Đã điều chỉnh Density và thêm biến thiên kích thước ngẫu nhiên bằng Random Value + Math.
- [ ] Đã xác nhận đàn cá có kích thước và nhịp bơi đa dạng, không đồng bộ máy móc.

## 7. Tóm tắt

Bộ node Distribute Points in Volume + Instance on Points + Collection Info (với Separate Children/Reset Children) là công thức tiêu chuẩn để biến một vài con cá đã animate thủ công thành cả một đàn rải ngẫu nhiên trong không gian ba chiều — kết hợp biến thiên kích thước qua Random Value, kết quả là một đàn cá đa dạng cả về hình dáng lẫn nhịp bơi mà không cần animate hay dựng thủ công từng cá thể.
