# 066 — Preparing for Animation

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Preparing for Animation |
| **Thời lượng** | 9:16 |
| **Chủ đề chính** | Chuẩn bị controller cho animation |

## 1. Mục tiêu bài học
- Hiểu vì sao cần thiết lập "controller" (thường là Empty) trước khi keyframe animation trực tiếp trên mesh.
- Biết cách đặt Origin đúng vị trí cho từng bộ phận chuyển động (ví dụ propeller cần Origin tại tâm quay).
- Sử dụng Parenting để liên kết các object con (propeller, bánh đáp...) với controller hoặc với thân máy bay.
- Tổ chức Outliner/Collection hợp lý để quản lý rig đơn giản của máy bay.

## 2. Nội dung chính
Trước khi tạo keyframe, việc chuẩn bị đúng cấu trúc object là bước quan trọng để animation sau này dễ kiểm soát và chỉnh sửa. Với một dự án như máy bay bay lượn, thường cần:

- **Một Empty gốc làm controller chính** cho toàn bộ máy bay: thay vì keyframe trực tiếp lên mesh máy bay, ta parent mesh vào một Empty, rồi animate Empty đó. Cách này giúp tách biệt animation logic khỏi dữ liệu mesh, dễ chỉnh sửa transform tổng thể mà không ảnh hưởng đến pivot gốc của mesh.
- **Origin chính xác cho từng bộ phận:** propeller cần Origin đặt đúng tâm trục quay (dùng `Object → Set Origin → Origin to 3D Cursor` sau khi đặt 3D Cursor vào tâm propeller) để khi keyframe rotation, nó quay quanh đúng trục thay vì lệch tâm.
- **Parenting (`Ctrl+P`):** propeller được parent vào thân máy bay (hoặc vào một Empty riêng làm trục quay), bánh đáp/các chi tiết chuyển động khác cũng parent tương ứng, đảm bảo khi Empty controller chính di chuyển, toàn bộ cấu trúc con di chuyển theo.

Việc đặt tên rõ ràng cho các object controller (ví dụ "CTRL_Plane", "CTRL_Propeller") và tổ chức chúng trong Outliner giúp việc keyframe ở bài tiếp theo mạch lạc hơn, đặc biệt khi cần chọn đúng object để thao tác trong Graph Editor hoặc Timeline.

## 3. Quy trình thực hành gợi ý
1. Đặt 3D Cursor vào vị trí mong muốn (ví dụ tâm propeller) bằng Snap (`Shift+S`).
2. Chọn object propeller, dùng `Object → Set Origin → Origin to 3D Cursor` để đưa Origin về đúng tâm quay.
3. Thêm một Empty (`Shift+A → Empty → Plain Axes`) tại vị trí phù hợp làm controller chính cho toàn bộ máy bay.
4. Chọn toàn bộ mesh máy bay, Shift+chọn Empty cuối cùng, `Ctrl+P → Object (Keep Transform)` để parent vào Empty.
5. Với propeller, parent riêng vào thân (hoặc một Empty phụ) để nó có thể quay độc lập quanh trục của chính nó.
6. Kiểm tra bằng cách xoay/di chuyển thử Empty controller, xác nhận toàn bộ máy bay di chuyển theo đúng như một khối thống nhất, còn propeller vẫn quay đúng tâm khi test riêng.
7. Đặt tên và tổ chức lại Outliner cho các controller vừa tạo.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+S` | Snap menu (đưa 3D Cursor tới điểm mong muốn) |
| `Object → Set Origin → Origin to 3D Cursor` | Đặt lại Origin của object |
| `Shift+A → Empty` | Thêm Empty làm controller |
| `Ctrl+P` | Parent object đã chọn vào object cuối cùng (active) |
| `Alt+P` | Clear Parent (gỡ liên kết cha-con) |

## 5. Lưu ý & lỗi thường gặp
- Quên đặt lại Origin cho propeller trước khi parent/keyframe khiến nó quay lệch tâm thay vì quay tại chỗ.
- Parent theo thứ tự chọn sai (object cần làm "con" phải được chọn trước, object "cha"/Empty chọn sau cùng làm active) khiến quan hệ cha-con bị đảo ngược.
- Dùng `Ctrl+P → Object` thay vì `Object (Keep Transform)` có thể làm object bị nhảy vị trí đột ngột nếu Origin của cha không trùng gốc tọa độ.
- Không tổ chức tên rõ ràng cho các Empty controller gây nhầm lẫn khi có nhiều Empty trong scene ở bước animate.

## 6. Checklist thực hành
- [ ] Đã đặt Origin đúng tâm quay cho propeller.
- [ ] Đã tạo Empty controller chính và parent toàn bộ máy bay vào đó.
- [ ] Đã parent propeller riêng để có thể quay độc lập.
- [ ] Đã kiểm tra thử chuyển động của controller trước khi keyframe thật.

## 7. Tóm tắt
Bài học thiết lập cấu trúc controller (Empty, Origin, Parenting) làm nền tảng kỹ thuật cho animation, đảm bảo các bộ phận của máy bay (đặc biệt là propeller) chuyển động đúng như mong đợi trước khi bắt đầu keyframe thực tế ở bài tiếp theo.
