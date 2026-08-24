# 078 — Subdivision Surface Modelling

| Thuộc tính             | Nội dung                                                              |
| ---------------------- | --------------------------------------------------------------------- |
| **Module**             | Module 05 — Rigging & Animation                                       |
| **Bài học**            | Subdivision Surface Modelling                                         |
| **Thời lượng**         | 10:48                                                                 |
| **Sản phẩm thực hành** | Phần thân TV bo tròn                                                  |
| **Mục đích sử dụng**   | Làm phần đầu cho nhân vật hoạt hình                                   |
| **Kỹ thuật chính**     | Subdivision Surface, Support Loop, Mirror, Auto Mirror, Box Modelling |

---

## 1. Giới thiệu bài học

Trong bài này, chúng ta sẽ dựng phần thân của một chiếc TV bằng kỹ thuật **Subdivision Surface Modelling**.

Chiếc TV sau đó sẽ được sử dụng làm phần đầu cho một nhân vật. Nhân vật này sẽ tiếp tục được hoàn thiện và dùng để tạo một **walk cycle** — chu kỳ hoạt ảnh đi bộ.

Quá trình dựng hình bắt đầu từ **Cube mặc định**, sau đó sử dụng:

* Modifier **Subdivision Surface** để làm mượt hình khối.
* Các **support loop** để kiểm soát độ bo tròn.
* Modifier **Mirror** để chỉ cần dựng một nửa mô hình.
* Công cụ **Auto Mirror** để tự động chia đôi mesh.
* Extrude và Edge Slide để tạo phần màn hình TV.

---

## 2. Mục tiêu bài học

Sau khi hoàn thành bài học, anh có thể:

* Hiểu nguyên lý cơ bản của modifier **Subdivision Surface**.
* Thêm nhanh Subdivision Surface bằng phím tắt.
* Kiểm soát độ sắc và độ cong bằng các **support loop**.
* Hiểu ảnh hưởng của khoảng cách giữa các edge loop.
* Sử dụng **Auto Mirror** để tạo modifier Mirror.
* Hiểu tầm quan trọng của thứ tự modifier trong **modifier stack**.
* Chỉnh hình khối bằng X-Ray, Scale, Grab và Edge Slide.
* Tạo khu vực lõm vào cho màn hình TV.
* Hoàn thiện phần thân TV bo tròn để tiếp tục ở bài sau.

---

# 3. Nguyên lý của Subdivision Surface

## 3.1. Subdivision Surface là gì?

**Subdivision Surface** là một modifier có tác dụng:

1. Chia mỗi mặt của mesh thành nhiều mặt nhỏ hơn.
2. Nội suy lại vị trí các điểm.
3. Làm bề mặt trở nên cong và mượt hơn.

Với một mặt tứ giác, mỗi lần subdivision sẽ chia mặt đó thành bốn mặt nhỏ hơn.

```text
Một mặt ban đầu
┌───────────┐
│           │
│           │
└───────────┘

Sau một cấp subdivision
┌─────┬─────┐
│     │     │
├─────┼─────┤
│     │     │
└─────┴─────┘
```

Khi áp dụng lên Cube, các cạnh và góc vuông sẽ được nội suy thành một hình dạng tròn hơn.

---

## 3.2. Thêm Subdivision Surface bằng menu

Có thể thêm modifier theo đường dẫn:

```text
Modifier Properties
        ↓
Add Modifier
        ↓
Subdivision Surface
```

Sau khi thêm, modifier mặc định thường có một cấp subdivision trong viewport.

---

## 3.3. Phím tắt thêm nhanh Subdivision Surface

Subdivision Surface được sử dụng rất thường xuyên, vì vậy Blender cung cấp các phím tắt:

| Phím tắt   | Kết quả                                       |
| ---------- | --------------------------------------------- |
| `Ctrl + 1` | Thêm Subdivision Surface với Viewport Level 1 |
| `Ctrl + 2` | Thêm Subdivision Surface với Viewport Level 2 |
| `Ctrl + 3` | Thêm Subdivision Surface với Viewport Level 3 |

Ví dụ:

```text
Cube
  │
  ├── Ctrl + 1 → Subdivision Level 1
  ├── Ctrl + 2 → Subdivision Level 2
  └── Ctrl + 3 → Subdivision Level 3
```

Cấp subdivision càng cao:

* Bề mặt càng mượt.
* Số lượng polygon càng lớn.
* Blender càng cần nhiều tài nguyên để xử lý.

---

## 3.4. Viewport Levels và Render Levels

Modifier Subdivision Surface có hai thông số quan trọng:

| Thông số            | Chức năng                                     |
| ------------------- | --------------------------------------------- |
| **Levels Viewport** | Số cấp subdivision hiển thị khi đang làm việc |
| **Render Levels**   | Số cấp subdivision sử dụng khi render         |

Thông thường, Render Levels có thể cao hơn Viewport Levels để:

* Giữ viewport nhẹ và dễ thao tác.
* Vẫn tạo được kết quả render mượt.

Trong bài học:

* Viewport được đặt khoảng **2–3 levels**.
* Render Levels được đặt thành **3**.
* Máy cấu hình yếu có thể giảm xuống **2**.

> Không nên tăng subdivision quá cao khi chưa cần thiết, vì số polygon sẽ tăng rất nhanh.

---

# 4. Support Loop và cách kiểm soát độ cong

## 4.1. Vấn đề khi chỉ dùng Subdivision Surface

Nếu chỉ thêm Subdivision Surface vào Cube, hình khối sẽ trở nên quá tròn và gần giống một quả cầu.

Để tạo một chiếc TV, chúng ta cần:

* Một số khu vực bo tròn mềm mại.
* Một số cạnh vẫn tương đối vuông và rõ ràng.

Giải pháp là thêm các **support loop**.

---

## 4.2. Support loop là gì?

Support loop là một edge loop được đặt gần cạnh chính để giúp giữ hình dạng của cạnh đó sau khi subdivision.

```text
Không có support loop:

Cạnh gốc
    ↓
╭──────────╮
│          │
╰──────────╯
Bo tròn mạnh


Có support loop gần cạnh:

Support loop
      ↓
┌─╮
│ ╰────────╮
│          │
╰──────────╯
Cạnh sắc hơn
```

Nguyên tắc quan trọng:

> Support loop càng gần cạnh chính thì cạnh sau subdivision càng sắc.

---

## 4.3. Thêm support loop

Sử dụng:

```text
Ctrl + R
```

Sau đó:

1. Di chuyển chuột đến vùng cần tạo loop.
2. Nhấn chuột trái để xác nhận.
3. Di chuyển loop đến vị trí mong muốn.
4. Nhấn chuột trái lần nữa để đặt vị trí.

Nhấn chuột phải sau lần xác nhận đầu tiên sẽ đặt loop chính giữa.

---

## 4.4. Edge Slide

Để di chuyển một edge loop trên bề mặt mesh, sử dụng:

```text
G, G
```

Edge Slide cho phép cạnh trượt dọc theo topology hiện tại mà không tự do rời khỏi bề mặt mesh.

```text
Edge loop ở giữa
       │
       ▼
───────┼────────

G, G sang gần cạnh
                │
                ▼
───────────────┼
```

Khi edge loop được đưa gần cạnh ngoài, cạnh đó trở nên sắc hơn sau subdivision.

---

# 5. Bắt đầu dựng thân TV

## 5.1. Khởi tạo mô hình

Bắt đầu từ file Blender mới và sử dụng Cube mặc định.

Quy trình ban đầu:

```text
Cube mặc định
      ↓
Thêm Subdivision Surface
      ↓
Đặt Viewport Level 2 hoặc 3
      ↓
Đặt Render Level khoảng 3
```

Ở thời điểm này, Cube sẽ có dạng tròn gần giống một khối cầu.

---

# 6. Thêm Mirror bằng Auto Mirror

## 6.1. Tại sao sử dụng Mirror?

Chiếc TV có hình dạng đối xứng qua trục X.

Thay vì chỉnh cả hai bên, chúng ta chỉ cần:

* Dựng một nửa mô hình.
* Để Mirror tự động tạo nửa còn lại.

```text
Nửa được dựng          Nửa được Mirror
       ←──── Trục X ────→
┌────────────┬────────────┐
│    Gốc     │   Bản sao  │
└────────────┴────────────┘
```

---

## 6.2. Bật Auto Mirror Add-on

Mở phần thiết lập add-on:

```text
Edit
  ↓
Preferences
  ↓
Add-ons
  ↓
Tìm kiếm: Auto Mirror
  ↓
Bật Auto Mirror
```

Sau khi bật, đóng cửa sổ Preferences.

---

## 6.3. Cấu hình Auto Mirror

Trong bài học, Auto Mirror được thiết lập:

* Trục đối xứng: **X Axis**.
* Hướng giữ lại: **Positive X**.
* Object Origin phải nằm ở giữa mô hình.
* Bật **Clipping** để các vertex ở đường giữa không bị tách ra.

Khi nhấn **Auto Mirror**, Blender sẽ:

1. Tạo đường cắt giữa mô hình.
2. Xóa một nửa mesh.
3. Thêm modifier Mirror.
4. Bật Clipping ở đường giữa.

---

# 7. Thứ tự modifier trong Modifier Stack

Sau khi thêm Auto Mirror, mô hình có hai modifier:

* Subdivision Surface.
* Mirror.

Thứ tự của chúng trong danh sách được gọi là **modifier stack**.

```text
Modifier Stack

[ Modifier 1 ]
      ↓
[ Modifier 2 ]
      ↓
[ Kết quả cuối ]
```

Blender xử lý modifier từ trên xuống dưới. Vì vậy, thay đổi thứ tự modifier có thể tạo ra kết quả khác nhau.

Thông thường, cấu trúc hợp lý là:

```text
Mirror
   ↓
Subdivision Surface
```

Mirror thường nên nằm phía trên để:

1. Tạo ra toàn bộ hình học đối xứng.
2. Sau đó Subdivision Surface mới làm mượt toàn bộ kết quả.

Trong bài, giảng viên tạm thời để thứ tự chưa tối ưu nhằm giải thích thêm về modifier stack ở phần sau.

Có thể thay đổi thứ tự bằng cách kéo modifier lên hoặc xuống.

---

# 8. Tạo hình dáng cơ bản của TV

## 8.1. Làm phẳng phần trên và dưới

Khối ban đầu quá tròn. Để tạo hình TV, thêm các loop cut nằm gần phần trên và dưới.

```text
        Support loop trên
              ↓
      ╭────────────╮
     ╱              ╲
    │                │
     ╲              ╱
      ╰────────────╯
              ↑
        Support loop dưới
```

Thực hiện:

1. Nhấn `Ctrl + R`.
2. Tạo một loop gần phía trên.
3. Tạo một loop gần phía dưới.
4. Đặt loop phía dưới không quá sát cạnh vì cần dành không gian cho bảng điều khiển TV.

Kết quả là hình dạng trở nên vuông hơn nhưng vẫn có các góc bo tròn.

---

## 8.2. Điều chỉnh độ cong theo chiều sâu

Nhìn từ Top View hoặc Side View, thêm support loop ở:

* Gần mặt trước.
* Gần mặt sau.

Mục đích:

* Làm mặt trước rõ ràng hơn.
* Hạn chế phần sau bị tròn quá mức.
* Tạo dáng TV hộp cổ điển.

Không cần đặt tất cả các loop quá sát cạnh. Khoảng cách support loop quyết định độ mềm của vùng chuyển tiếp.

---

## 8.3. Hình dạng dự kiến

```text
Nhìn từ phía trước

╭──────────────────╮
│                  │
│                  │
│                  │
╰──────────────────╯


Nhìn từ bên cạnh

     Mặt trước
         ↓
╭─────────────╮
│              ╲
│               │
╰──────────────╯
               ↑
            Mặt sau
```

Mặt trước tương đối phẳng, trong khi thân TV thu nhỏ dần về phía sau.

---

# 9. Thu nhỏ phần phía sau TV

## 9.1. Bật X-Ray

Để chọn được cả vertex ở phía trước và phía sau mesh, bật chế độ X-Ray.

Có thể dùng:

```text
Alt + Z
```

Hoặc bật nút X-Ray trên thanh điều khiển viewport.

---

## 9.2. Chọn phần mặt sau

Ở Side View:

1. Dùng Box Select để chọn toàn bộ vertex phía sau.
2. Scale phần này nhỏ lại.
3. Di chuyển nhẹ để tạo dáng thuôn.

Các thao tác có thể sử dụng:

| Thao tác | Công dụng                      |
| -------- | ------------------------------ |
| `S`      | Thu nhỏ toàn bộ vùng được chọn |
| `S`, `X` | Scale theo trục X              |
| `S`, `Z` | Scale theo trục Z              |
| `G`, `X` | Di chuyển theo trục X          |
| `G`, `Y` | Di chuyển theo trục Y          |
| `G`, `Z` | Di chuyển theo trục Z          |

> Trục di chuyển phụ thuộc vào hướng và cách mô hình được đặt trong scene.

---

## 9.3. Lưu ý khi dùng Mirror

Khi chỉ chỉnh một nửa mô hình, tâm scale của phần được chọn không bao gồm nửa được Mirror.

Vì vậy, đôi khi Scale không tạo ra kết quả giống như khi chỉnh một mesh hoàn chỉnh.

Có thể kết hợp:

* Scale theo từng trục.
* Di chuyển bằng Grab.
* Chỉnh riêng các edge hoặc vertex.

---

## 9.4. Điều chỉnh vùng giữa

Sau khi thu nhỏ phần sau, thân TV có thể bị cong hoặc thắt bất thường ở giữa.

Để sửa:

1. Chọn các edge ở khu vực giữa.
2. Di chuyển chúng vào trong hoặc ra ngoài.
3. Scale theo trục Z nếu phần thân quá cao.
4. Quan sát kết quả ở Object Mode.

Quy trình chỉnh sửa nên lặp lại:

```text
Chọn vertex hoặc edge
        ↓
Di chuyển hoặc Scale
        ↓
Chuyển sang Object Mode
        ↓
Quan sát bề mặt Subdivision
        ↓
Quay lại Edit Mode để sửa tiếp
```

---

# 10. Tinh chỉnh đường cong hai bên

Thay vì luôn chọn cả edge loop, có thể chọn riêng từng đoạn edge.

Ví dụ:

* Chọn cạnh trên ở bên hông.
* Dùng `G, G` để Edge Slide.
* Chọn cạnh kế tiếp.
* Tiếp tục Edge Slide để điều chỉnh độ cong.

Cách này giúp tạo một đường cong tùy chỉnh thay vì một hình dạng hoàn toàn đồng đều.

```text
Đường thẳng ban đầu

│
│
│
│


Sau khi chỉnh từng edge

╮
│
│
╰
```

Phần đáy TV có thể được làm rộng hơn một chút để dành không gian cho:

* Nút điều khiển.
* Núm vặn.
* Loa hoặc bảng điều khiển.

---

# 11. Tạo khu vực màn hình TV

## 11.1. Chọn mặt trước

Chuyển sang Face Select:

```text
3
```

Sau đó chọn mặt lớn ở phía trước TV.

---

## 11.2. Extrude mặt vào trong

Sử dụng:

```text
E
```

Extrude mặt trước vào trong theo chiều sâu để tạo vùng lõm của màn hình.

```text
Mặt trước ban đầu

┌──────────────────┐
│                  │
│                  │
└──────────────────┘


Sau khi Extrude vào trong

┌──────────────────┐
│  ┌────────────┐  │
│  │  Màn hình  │  │
│  └────────────┘  │
└──────────────────┘
```

Sau khi extrude, khu vực màn hình vẫn bị bo tròn khá nhiều vì Subdivision Surface.

---

# 12. Làm rõ viền màn hình bằng support loop

## 12.1. Thêm loop quanh màn hình

Sử dụng `Ctrl + R` để thêm support loop gần các cạnh của vùng màn hình.

Các loop cần được thêm quanh:

* Mép trái và phải.
* Mép trên.
* Mép dưới.
* Khu vực lõm phía trong màn hình.

Mục tiêu là tạo một viền màn hình tương đối rõ nhưng vẫn giữ phong cách bo tròn.

---

## 12.2. Khoảng cách quyết định độ sắc

```text
Support loop xa cạnh

│       │
│       │
╰───────╯
Bo tròn nhiều


Support loop gần cạnh

│ │
│ │
└─╯
Sắc hơn
```

Không nhất thiết phải đặt support loop sát hoàn toàn vào cạnh. Với TV phong cách hoạt hình, nên giữ một mức bo tròn vừa phải.

---

## 12.3. Đặt loop chính giữa

Khi tạo loop bằng `Ctrl + R`:

1. Nhấn chuột trái để tạo loop.
2. Nhấn chuột phải để hủy việc trượt.
3. Loop sẽ được đặt chính giữa.

Cách này được sử dụng để tạo thêm độ rõ cho vùng màn hình mà không làm cạnh quá sắc.

---

# 13. Điều chỉnh kích thước màn hình

Sau khi tạo phần lõm, có thể điều chỉnh kích thước màn hình.

## 13.1. Mở rộng màn hình theo chiều ngang

1. Chuyển sang Front View.
2. Bật X-Ray.
3. Chọn các edge hoặc vertex tạo thành mép bên của màn hình.
4. Di chuyển chúng theo trục ngang.

Ví dụ:

```text
G, X
```

Do mô hình sử dụng Mirror, chỉ cần chỉnh một bên, bên còn lại sẽ tự động cập nhật.

---

## 13.2. Tăng chiều cao màn hình

Chọn edge ở phần trên của màn hình và di chuyển lên:

```text
G, Z
```

Cần quan sát phần topology phía sau vì việc di chuyển edge ở mặt trước có thể làm thay đổi đường cong ở mặt bên.

---

## 13.3. Giữ bề mặt sạch

Sau khi điều chỉnh màn hình, cần kiểm tra:

* Các edge phía sau có bị lệch không.
* Đường cong bên hông có bị lõm không.
* Các vertex có bị dồn quá gần nhau không.
* Bề mặt có xuất hiện nếp gấp bất thường không.

Có thể sử dụng `G, G` để Edge Slide các edge bị lệch về vị trí hợp lý.

---

# 14. Quy trình thực hành hoàn chỉnh

```text
Cube mặc định
      ↓
Thêm Subdivision Surface
      ↓
Đặt Viewport và Render Levels
      ↓
Bật Auto Mirror
      ↓
Mirror theo trục X
      ↓
Thêm support loop trên, dưới, trước và sau
      ↓
Bật X-Ray
      ↓
Thu nhỏ phần sau của TV
      ↓
Tinh chỉnh đường cong hai bên
      ↓
Chọn mặt trước
      ↓
Extrude vào trong để tạo màn hình
      ↓
Thêm support loop quanh màn hình
      ↓
Điều chỉnh kích thước màn hình
      ↓
Kiểm tra topology và bề mặt
      ↓
Lưu file
```

---

# 15. Phím tắt và công cụ sử dụng

| Phím tắt           | Chức năng                            |
| ------------------ | ------------------------------------ |
| `Ctrl + 1`         | Thêm Subdivision Surface Level 1     |
| `Ctrl + 2`         | Thêm Subdivision Surface Level 2     |
| `Ctrl + 3`         | Thêm Subdivision Surface Level 3     |
| `Tab`              | Chuyển giữa Object Mode và Edit Mode |
| `Ctrl + R`         | Thêm Loop Cut                        |
| `G, G`             | Edge Slide                           |
| `E`                | Extrude                              |
| `S`                | Scale                                |
| `S`, `X`           | Scale theo trục X                    |
| `S`, `Z`           | Scale theo trục Z                    |
| `G`, `X`           | Di chuyển theo trục X                |
| `G`, `Y`           | Di chuyển theo trục Y                |
| `G`, `Z`           | Di chuyển theo trục Z                |
| `Alt + Z`          | Bật hoặc tắt X-Ray                   |
| `1`                | Vertex Select trong Edit Mode        |
| `2`                | Edge Select trong Edit Mode          |
| `3`                | Face Select trong Edit Mode          |
| `Ctrl + Z`         | Undo                                 |
| `Ctrl + Shift + Z` | Redo                                 |
| `Ctrl + S`         | Lưu file                             |

> Các phím số `1`, `2`, `3` dùng để chọn Vertex, Edge và Face là hàng số phía trên bàn phím, không phải Numpad.

---

# 16. Những nguyên tắc quan trọng

## 16.1. Topology điều khiển hình dạng Subdivision

Subdivision Surface không tự quyết định mô hình phải trông như thế nào. Hình dạng cuối phụ thuộc vào:

* Vị trí vertex.
* Khoảng cách giữa các edge loop.
* Cấu trúc topology.
* Thứ tự modifier.

---

## 16.2. Edge càng gần nhau, cạnh càng sắc

```text
Khoảng cách lớn
Edge ───────── Support
→ Chuyển tiếp mềm


Khoảng cách nhỏ
Edge ─ Support
→ Chuyển tiếp sắc
```

Đây là nguyên tắc cốt lõi của Subdivision Surface Modelling.

---

## 16.3. Không cần mọi chi tiết phải giống tuyệt đối

Hình dạng TV có thể khác một chút so với mẫu.

Điều quan trọng là:

* Silhouette hợp lý.
* Hai bên đối xứng.
* Mặt trước đủ rộng cho màn hình.
* Phần sau thuôn nhẹ.
* Các góc được bo tròn tự nhiên.
* Không có vùng bị bóp méo hoặc gợn sóng.

---

# 17. Lỗi thường gặp

## 17.1. Mô hình tròn như quả cầu

**Nguyên nhân:** Chỉ thêm Subdivision Surface mà không có support loop.

**Cách khắc phục:**

* Thêm loop gần phần trên và dưới.
* Thêm loop gần mặt trước và mặt sau.
* Điều chỉnh khoảng cách giữa các loop.

---

## 17.2. Cạnh TV quá sắc

**Nguyên nhân:** Support loop được đặt quá gần cạnh ngoài.

**Cách khắc phục:**

* Dùng `G, G` kéo support loop ra xa cạnh.
* Giữ một khoảng cách nhỏ để tạo vùng bo tròn.

---

## 17.3. Cạnh TV quá mềm

**Nguyên nhân:** Support loop nằm quá xa cạnh cần giữ.

**Cách khắc phục:**

* Dùng Edge Slide đưa support loop đến gần cạnh hơn.
* Thêm một support loop mới nếu cần.

---

## 17.4. Đường giữa bị tách

**Nguyên nhân:**

* Mirror chưa bật Clipping.
* Vertex giữa chưa nằm đúng trên trục Mirror.

**Cách khắc phục:**

* Bật **Clipping** trong Mirror Modifier.
* Đưa vertex giữa về đúng trục X bằng giá trị tọa độ phù hợp.

---

## 17.5. Hai bên TV không đối xứng

**Nguyên nhân:**

* Chưa sử dụng Mirror.
* Object Origin không nằm ở giữa.
* Chỉnh sửa nhầm cả hai bên mesh.

**Cách khắc phục:**

* Kiểm tra Origin.
* Sử dụng Auto Mirror.
* Chỉ chỉnh phần mesh phía Positive X.

---

## 17.6. Màn hình quá tròn

**Nguyên nhân:** Sau khi extrude chưa thêm support loop quanh vùng màn hình.

**Cách khắc phục:**

* Thêm loop ở mép trên, dưới và hai bên.
* Thêm loop ở phần lõm bên trong.
* Điều chỉnh khoảng cách loop để giữ độ bo vừa phải.

---

## 17.7. Bề mặt bị lõm hoặc gợn sóng

**Nguyên nhân:**

* Các edge loop phân bố không đều.
* Vertex bị kéo lệch.
* Một số edge bị dồn quá sát.
* Topology phía sau bị biến dạng khi mở rộng màn hình.

**Cách khắc phục:**

* Quan sát mô hình ở nhiều góc.
* Dùng Edge Slide thay vì di chuyển tự do khi phù hợp.
* Điều chỉnh từng vertex hoặc edge nhỏ.
* Chuyển qua lại giữa Edit Mode và Object Mode để kiểm tra.

---

## 17.8. Blender bị lag

**Nguyên nhân:** Viewport Subdivision Level quá cao.

**Cách khắc phục:**

* Giảm Viewport Level xuống 2.
* Giữ Render Level ở 3 nếu máy vẫn render được.
* Không Apply modifier khi chưa thực sự cần.

---

# 18. Bài tập thực hành

Dựng một thân TV với các yêu cầu:

* Bắt đầu từ Cube.
* Sử dụng Subdivision Surface Level 2 hoặc 3.
* Sử dụng Mirror theo trục X.
* Phần thân có góc bo tròn.
* Mặt trước tương đối phẳng.
* Phần thân thu nhỏ nhẹ về phía sau.
* Có vùng lõm dành cho màn hình.
* Màn hình có viền rõ nhưng không quá sắc.
* Phía dưới màn hình có đủ không gian cho bảng điều khiển.
* Mesh không xuất hiện nếp gấp hoặc biến dạng lớn.

---

# 19. Checklist hoàn thành

## Modifier

* [ ] Đã thêm Subdivision Surface.
* [ ] Viewport Level được đặt ở mức 2 hoặc 3.
* [ ] Render Level được đặt phù hợp.
* [ ] Đã thêm Mirror theo trục X.
* [ ] Mirror đã bật Clipping.
* [ ] Đã kiểm tra thứ tự trong modifier stack.

## Hình dáng TV

* [ ] Phần trên và dưới tương đối phẳng.
* [ ] Các góc vẫn có độ bo tròn.
* [ ] Phần sau thu nhỏ nhẹ.
* [ ] Hai bên TV đối xứng.
* [ ] Phần đáy đủ rộng cho bảng điều khiển.

## Màn hình

* [ ] Đã chọn mặt trước và Extrude vào trong.
* [ ] Đã thêm support loop quanh màn hình.
* [ ] Viền màn hình đủ rõ.
* [ ] Màn hình có kích thước phù hợp.
* [ ] Topology phía sau không bị biến dạng.

## Hoàn thiện

* [ ] Đã kiểm tra mô hình ở Front, Side và Top View.
* [ ] Không có vùng bề mặt bị lõm bất thường.
* [ ] Đã lưu file để tiếp tục ở bài sau.

---

# 20. Tóm tắt bài học

Trong bài học này, chúng ta đã sử dụng **Subdivision Surface Modelling** để dựng phần thân TV bo tròn từ một Cube cơ bản.

Những kiến thức quan trọng nhất gồm:

1. Subdivision Surface chia nhỏ và làm mượt mesh.
2. `Ctrl + 1`, `Ctrl + 2`, `Ctrl + 3` giúp thêm nhanh modifier.
3. Support loop giúp kiểm soát độ cong và độ sắc của cạnh.
4. Support loop càng gần cạnh thì cạnh càng sắc.
5. Mirror giúp dựng mô hình đối xứng nhanh hơn.
6. Thứ tự modifier trong modifier stack ảnh hưởng đến kết quả.
7. X-Ray giúp chọn toàn bộ vertex xuyên qua mô hình.
8. Extrude mặt trước vào trong để tạo khu vực màn hình.
9. Cần thường xuyên kiểm tra bề mặt ở Object Mode.
10. Hình dáng TV nên được hoàn thiện tương đối trước khi chuyển sang dựng chi tiết màn hình ở bài tiếp theo.

```text
Subdivision Surface
        +
Support Loops
        +
Mirror Modelling
        +
Chỉnh sửa Silhouette
        =
Thân TV bo tròn, đối xứng và dễ tiếp tục phát triển
```

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
