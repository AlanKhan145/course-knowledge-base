# 025 — Creating a Crate

| Thuộc tính       | Nội dung                                   |
| ---------------- | ------------------------------------------ |
| **Module**       | Module 02 — Modular Dungeon                |
| **Bài học**      | Creating a Crate                           |
| **Thời lượng**   | 9:34                                       |
| **Chủ đề chính** | Dựng thùng gỗ low-poly cho modular dungeon |

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tạo một chiếc thùng gỗ từ **Cube** với kích thước phù hợp hệ thống modular.
* Sử dụng **Individual Inset** để tạo khung riêng trên từng mặt.
* Dùng **Extrude Faces Along Normals** để đẩy các mặt vào trong đồng đều.
* Tạo các khe ván gỗ bằng **Loop Cut**, **Bevel** và **Scale**.
* Thêm độ cong vênh nhẹ để mô hình bớt hoàn hảo và tự nhiên hơn.
* Tạo các vết sứt, mẻ bằng **Vertex Bevel**.
* Hiểu cơ bản về **Normals**, **N-gon** và cách Blender tam giác hóa bề mặt khi render.

---

## 2. Tổng quan quy trình

```text
Thêm Cube 1,2 m
      ↓
Đặt Cube trên mặt sàn
      ↓
Inset riêng từng mặt
      ↓
Extrude các mặt vào trong theo Normal
      ↓
Thêm Loop Cut tạo khe ván
      ↓
Bevel và Scale để mở rộng khe
      ↓
Làm cong vênh nhẹ các đỉnh
      ↓
Vertex Bevel tạo vết sứt
      ↓
Kiểm tra N-gon và hướng tam giác
      ↓
Hoàn thiện Crate
```

---

## 3. Tạo khối cơ sở

Trước tiên, đổi tên object thùng tròn trước đó thành `Barrel`, sau đó ẩn nó trong **Outliner** bằng biểu tượng con mắt.

Thêm một Cube mới:

```text
Shift + A → Mesh → Cube
```

Ngay sau khi thêm Cube, mở bảng thông số của thao tác vừa thực hiện và đặt:

```text
Size: 1.2 m
```

Kích thước này giúp crate có chiều cao tương đương với barrel, nhờ đó hai object có thể được xếp chồng hoặc kết hợp dễ dàng trong hệ thống modular.

Chuyển sang góc nhìn chính diện:

```text
Numpad 1
```

Di chuyển Cube lên trên mặt sàn giả định:

```text
G → Z
```

Có thể giữ `Shift` trong lúc di chuyển để điều chỉnh với bước nhỏ hơn.

> Mục tiêu là đặt đáy của Cube sát với mặt sàn, không để nó chìm xuống hoặc lơ lửng quá cao.

---

## 4. Tạo khung bằng Individual Inset

Chuyển sang **Edit Mode**:

```text
Tab
```

Sau đó chuyển sang chế độ chọn mặt:

```text
3
```

Hoặc nhấn biểu tượng **Face Select** trên thanh công cụ.

Chọn toàn bộ các mặt của Cube:

```text
A
```

### 4.1. Vì sao Inset thông thường không hoạt động đúng?

Nếu chỉ nhấn `I`, Blender có thể inset toàn bộ vùng được chọn như một khối thống nhất. Với crate, chúng ta muốn mỗi mặt được inset độc lập.

Sử dụng:

```text
I → I
```

Lần nhấn `I` thứ hai sẽ bật chế độ:

```text
Individual
```

Sau đó di chuyển chuột để điều chỉnh độ rộng của phần khung và nhấn chuột trái để xác nhận.

Bạn cũng có thể bật tùy chọn **Individual** trong bảng thông số của công cụ Inset.

### Kết quả

```text
Trước Inset                  Sau Individual Inset

┌─────────────┐              ┌─────────────┐
│             │              │ ┌─────────┐ │
│             │      →       │ │         │ │
│             │              │ └─────────┘ │
└─────────────┘              └─────────────┘
```

Mỗi mặt của Cube giờ có một mặt nhỏ ở giữa và một đường viền bao quanh.

---

## 5. Extrude các mặt vào trong theo Normal

Không nên sử dụng `E` rồi `S` để thu nhỏ các mặt. Cách này khiến toàn bộ các mặt scale về một tâm chung, dẫn đến hình dạng không đồng đều.

Thay vào đó, sử dụng:

```text
Alt + E
```

Chọn:

```text
Extrude Faces Along Normals
```

Di chuyển chuột để đẩy các mặt trung tâm vào trong một khoảng nhỏ.

### Tại sao phải extrude theo Normal?

Mỗi mặt có một hướng riêng gọi là **Normal**. Extrude Along Normals giúp tất cả các mặt di chuyển cùng một khoảng cách theo hướng vuông góc của chính nó.

```text
                Normal
                  ↑
                  │
        ┌─────────┼─────────┐
        │         │         │
        │       Bề mặt      │
        └───────────────────┘
```

Đối với các mặt bên của Cube, Normal sẽ hướng sang trái, phải, trước hoặc sau. Vì vậy, mỗi mặt sẽ được đẩy vào trong đúng hướng của nó.

### Hiển thị Normal

Trong **Edit Mode**, mở:

```text
Viewport Overlays → Normals
```

Bật tùy chọn hiển thị Normal để quan sát các đường chỉ hướng của từng mặt.

> Tùy chọn hiển thị Normal chỉ xuất hiện đầy đủ khi đang ở Edit Mode.

Sau khi kiểm tra xong, có thể tắt Normal để viewport dễ quan sát hơn.

---

## 6. Tạo các khe ván gỗ

Các mặt lõm hiện tại vẫn còn quá phẳng. Tiếp theo, tạo các đường phân chia để mô phỏng nhiều tấm ván ghép lại.

### 6.1. Thêm Loop Cut

Nhấn:

```text
Ctrl + R
```

Lăn con lăn chuột để tạo hai đường cắt.

Nhấn chuột trái để xác nhận, sau đó nhấn chuột phải để đặt các đường cắt vào vị trí chính giữa.

Thực hiện Loop Cut theo nhiều hướng cần thiết trên crate.

```text
Một mặt crate sau Loop Cut

┌─────────────────┐
│       │         │
│───────┼─────────│
│       │         │
│───────┼─────────│
│       │         │
└─────────────────┘
```

---

### 6.2. Chọn đường đi ngắn nhất

Để chọn liên tiếp nhiều cạnh:

1. Chọn cạnh đầu tiên.
2. Giữ `Shift`.
3. Sử dụng:

```text
Ctrl + Shift + Left Click
```

Blender sẽ chọn đường đi ngắn nhất giữa hai phần tử đã chọn.

Công cụ này hữu ích khi cần chọn hàng loạt cạnh chạy quanh phần lõm của crate.

Nếu khó kiểm soát, bạn vẫn có thể giữ `Shift` và chọn từng cạnh thủ công.

---

### 6.3. Bevel các cạnh

Sau khi chọn các cạnh cần tạo khe, nhấn:

```text
Ctrl + B
```

Di chuyển chuột để điều chỉnh độ rộng.

Lăn con lăn chuột để thêm một segment ở giữa. Thông thường, chỉ cần cấu trúc đơn giản với một cạnh trung tâm.

```text
Trước Bevel             Sau Bevel

───────                 ────┬────
                            │
                        ────┴────
```

---

### 6.4. Thu hẹp phần khe

Chọn hai cạnh nằm ở hai bên của khe rồi scale chúng lại gần nhau.

Tùy hướng của mặt, sử dụng:

```text
S → X
```

hoặc:

```text
S → Y
```

hoặc:

```text
S → Z
```

Ví dụ:

* Hai mặt bên trái và phải: thường scale theo `X`.
* Mặt trước và sau: có thể scale theo `Y`.
* Mặt trên và dưới: scale theo `Z`.

> Không nên chọn tất cả các cạnh ở nhiều phía rồi scale cùng lúc. Khi đó Blender sẽ scale chúng về tâm chung của toàn bộ vùng chọn và tạo ra kết quả sai.

Sau bước này, các mặt lõm sẽ có những khe giống như các tấm ván gỗ riêng biệt.

---

## 7. Tạo độ cong vênh tự nhiên

Một thùng gỗ cũ hiếm khi có các tấm ván hoàn toàn thẳng và đồng đều. Vì vậy, cần thêm một lượng biến dạng rất nhỏ.

Chuyển sang chế độ chọn đỉnh:

```text
1
```

Chọn một số vertex rồi di chuyển nhẹ:

```text
G
```

Có thể giới hạn theo một trục:

```text
G → X
G → Y
G → Z
```

### Thêm hình học để biến dạng tốt hơn

Tạo thêm các Loop Cut ở giữa những tấm ván:

```text
Ctrl + R
```

Có thể thêm hai đường cắt để tạo thêm các vertex điều khiển.

Sau đó, chọn từng vertex hoặc nhóm vertex nhỏ và di chuyển chúng rất nhẹ.

```text
Ván quá thẳng              Ván cong nhẹ

──────────────             ──────╱──────
──────────────      →      ─────╲───────
──────────────             ───────╱─────
```

### Nguyên tắc quan trọng

* Biến dạng phải rất nhỏ.
* Tránh kéo mạnh các đỉnh ở góc.
* Kiểm tra mô hình thường xuyên trong Object Mode.
* Quan sát từ khoảng cách mà người chơi thực sự nhìn thấy object.

Nhấn:

```text
Tab
```

để chuyển qua lại giữa Edit Mode và Object Mode trong quá trình kiểm tra.

> Biến dạng quá mạnh sẽ khiến crate giống vật liệu mềm hoặc bị nóng chảy thay vì gỗ cũ.

---

## 8. Tạo vết sứt ở các góc

Các góc vuông hoàn hảo làm crate trông quá mới. Có thể tạo các vết sứt bằng **Vertex Bevel**.

Trong Edit Mode và Vertex Select, chọn một vertex ở góc.

Nhấn:

```text
Ctrl + B
```

Sau đó nhấn:

```text
V
```

Phím `V` chuyển Bevel từ chế độ bevel cạnh sang **bevel vertex**.

Lăn con lăn chuột để giảm số segment xuống mức thấp, thường chỉ cần một segment.

Nhấn chuột trái để xác nhận.

```text
Góc ban đầu               Góc bị sứt

┌────────                 ╲────────
│                          │
│                          │
```

Lặp lại trên một số góc khác nhau.

Không cần tất cả các vết sứt có cùng kích thước. Sự khác biệt nhẹ sẽ giúp object tự nhiên hơn.

---

## 9. Tạo vết khuyết trên cạnh

Ngoài các góc ngoài, có thể tạo một số vết khuyết nằm giữa cạnh của crate.

Chọn một vertex nằm trên cạnh rồi sử dụng:

```text
Ctrl + B → V
```

Mở rộng Vertex Bevel để tạo một phần khuyết lớn hơn.

Trong một số trường hợp, Blender có thể tam giác hóa bề mặt theo hướng không mong muốn. Khi đó, chọn hai vertex cần nối và nhấn:

```text
J
```

Lệnh này tạo một cạnh nối giữa hai vertex trên cùng bề mặt, giúp xác định hướng chia bề mặt rõ ràng hơn.

```text
Hướng chia không mong muốn      Hướng chia được kiểm soát

┌──────────────┐                ┌──────────────┐
│ \            │                │            / │
│   \          │       →        │          /   │
│     \        │                │        /     │
└──────────────┘                └──────────────┘
```

---

## 10. N-gon và hiện tượng tam giác hóa

### 10.1. N-gon là gì?

Một mặt có nhiều hơn bốn cạnh được gọi là **N-gon**.

| Loại mặt | Số cạnh |
| -------- | ------: |
| Triangle |       3 |
| Quad     |       4 |
| N-gon    |  Trên 4 |

Sau khi thực hiện Inset, Bevel hoặc Vertex Bevel, mô hình có thể xuất hiện nhiều N-gon.

### 10.2. Blender xử lý N-gon như thế nào?

GPU và game engine cuối cùng đều render bề mặt dưới dạng các tam giác. Vì vậy, Blender sẽ tự động chia N-gon thành nhiều triangle.

Nếu N-gon không phẳng hoàn toàn, Blender có thể chọn hướng tam giác không phù hợp và tạo ra:

* Bóng đổ bất thường.
* Đường gấp không mong muốn.
* Vùng bề mặt bị tối hoặc sáng sai.
* Biến dạng khi xuất sang game engine.

### 10.3. Có nhất thiết phải sửa tất cả N-gon không?

Không nhất thiết.

N-gon có thể được giữ nguyên khi:

* Bề mặt gần như phẳng.
* Object được quan sát từ xa.
* Kết quả shading vẫn ổn.
* Khu vực đó không bị biến dạng hoặc animate.

Cần xử lý khi:

* N-gon nằm trên bề mặt lớn và cong.
* Blender chia tam giác theo hướng gây lỗi.
* Bề mặt xuất hiện shading bất thường.
* Model cần xuất sang game engine với topology được kiểm soát chặt chẽ.

Trong bài này, chỉ cần thêm cạnh bằng `J` ở những vị trí mà hướng chia tam giác thực sự ảnh hưởng đến hình dạng vết sứt.

---

## 11. Quy trình thực hành hoàn chỉnh

### Bước 1: Chuẩn bị scene

* Đổi tên thùng tròn thành `Barrel`.
* Ẩn Barrel trong Outliner.
* Thêm một Cube mới.

### Bước 2: Đặt kích thước

* Đặt `Size = 1.2 m`.
* Chuyển sang Front View.
* Di chuyển Cube lên trên mặt sàn.

### Bước 3: Tạo khung mặt

* Vào Edit Mode.
* Chọn toàn bộ các mặt.
* Nhấn `I` hai lần để bật Individual Inset.
* Điều chỉnh độ rộng khung.

### Bước 4: Tạo phần lõm

* Nhấn `Alt + E`.
* Chọn **Extrude Faces Along Normals**.
* Đẩy các mặt trung tâm vào trong.

### Bước 5: Tạo khe ván

* Thêm Loop Cut bằng `Ctrl + R`.
* Chọn các cạnh cần thiết.
* Bevel bằng `Ctrl + B`.
* Scale các cạnh về gần nhau theo đúng trục.

### Bước 6: Tạo độ cong vênh

* Thêm Loop Cut ở giữa các tấm ván.
* Chọn một số vertex.
* Di chuyển rất nhẹ để tạo sai lệch tự nhiên.

### Bước 7: Tạo vết sứt

* Chọn vertex ở góc hoặc trên cạnh.
* Nhấn `Ctrl + B`, sau đó nhấn `V`.
* Tạo các vết sứt có kích thước khác nhau.

### Bước 8: Kiểm soát topology

* Kiểm tra các N-gon.
* Quan sát hướng tam giác hóa.
* Dùng `J` để nối vertex khi cần kiểm soát hướng chia mặt.

### Bước 9: Hoàn thiện

* Chuyển sang Object Mode.
* Quan sát crate từ nhiều góc.
* Giảm các biến dạng quá mạnh.
* Đổi tên object thành `Crate`.
* Lưu file Blender.

---

## 12. Phím tắt và công cụ quan trọng

| Phím tắt                                | Chức năng                     |
| --------------------------------------- | ----------------------------- |
| `Shift + A`                             | Thêm object mới               |
| `Tab`                                   | Chuyển Object Mode/Edit Mode  |
| `1`                                     | Vertex Select trong Edit Mode |
| `2`                                     | Edge Select trong Edit Mode   |
| `3`                                     | Face Select trong Edit Mode   |
| `A`                                     | Chọn toàn bộ                  |
| `G`                                     | Di chuyển                     |
| `G`, `Z`                                | Di chuyển theo trục Z         |
| `I`                                     | Inset Faces                   |
| `I`, `I`                                | Bật Individual Inset          |
| `Alt + E`                               | Mở menu Extrude nâng cao      |
| `Alt + E → Extrude Faces Along Normals` | Extrude theo Normal           |
| `Ctrl + R`                              | Thêm Loop Cut                 |
| `Ctrl + B`                              | Bevel cạnh                    |
| `Ctrl + B`, `V`                         | Bevel vertex                  |
| `S`, `X/Y/Z`                            | Scale theo một trục           |
| `Ctrl + Shift + Click`                  | Chọn đường đi ngắn nhất       |
| `J`                                     | Nối các vertex trên bề mặt    |
| `Numpad 1`                              | Front View                    |
| `Numpad .`                              | Focus vào phần tử đang chọn   |
| `T`                                     | Ẩn hoặc hiện Toolbar          |
| `Ctrl + Z`                              | Hoàn tác                      |

---

## 13. Lỗi thường gặp

### 13.1. Inset tất cả các mặt thành một vùng chung

**Nguyên nhân:** Chỉ nhấn `I` một lần.

**Cách khắc phục:**

```text
I → I
```

Hoặc bật tùy chọn **Individual** trong bảng Inset.

---

### 13.2. Extrude rồi Scale làm mặt bị lệch

**Nguyên nhân:** Dùng `E` rồi `S`, khiến các mặt scale về một tâm chung.

**Cách khắc phục:**

```text
Alt + E → Extrude Faces Along Normals
```

---

### 13.3. Các khe ván bị kéo sai hướng

**Nguyên nhân:** Scale theo sai trục hoặc chọn các cạnh ở nhiều phía cùng lúc.

**Cách khắc phục:**

* Chỉ chọn các cạnh trên hai phía đối diện.
* Scale theo trục phù hợp với hướng của mặt.
* Thực hiện từng nhóm cạnh riêng biệt.

---

### 13.4. Crate bị biến dạng quá mạnh

**Nguyên nhân:** Di chuyển vertex quá xa.

**Cách khắc phục:**

* Giữ `Shift` khi điều chỉnh.
* Chỉ tạo sai lệch rất nhỏ.
* Kiểm tra thường xuyên trong Object Mode.

---

### 13.5. Vertex Bevel không hoạt động

**Nguyên nhân:** Bevel đang ở chế độ ảnh hưởng đến cạnh.

**Cách khắc phục:**

```text
Ctrl + B → V
```

---

### 13.6. Xuất hiện đường gấp hoặc shading lạ

**Nguyên nhân:** N-gon không phẳng bị Blender tam giác hóa theo hướng không phù hợp.

**Cách khắc phục:**

* Chọn hai vertex.
* Nhấn `J` để tạo cạnh kiểm soát hướng chia mặt.
* Kiểm tra lại trong Object Mode.

---

## 14. Checklist thực hành

* [ ] Đã tạo Cube với kích thước `1.2 m`.
* [ ] Đã đặt Cube phía trên mặt sàn.
* [ ] Đã sử dụng Individual Inset trên tất cả các mặt.
* [ ] Đã extrude mặt vào trong bằng Extrude Faces Along Normals.
* [ ] Đã thêm Loop Cut để chia các tấm ván.
* [ ] Đã dùng Bevel và Scale để tạo khe giữa các ván.
* [ ] Đã thêm độ cong vênh nhẹ cho bề mặt gỗ.
* [ ] Đã tạo vết sứt ở một số góc.
* [ ] Đã tạo một số vết khuyết trên cạnh.
* [ ] Đã kiểm tra N-gon và hướng tam giác hóa.
* [ ] Đã dùng `J` tại những vị trí cần kiểm soát topology.
* [ ] Đã kiểm tra mô hình trong Object Mode.
* [ ] Đã đổi tên object thành `Crate`.
* [ ] Đã lưu file trước khi chuyển sang bài tiếp theo.

---

## 15. Tóm tắt

Trong bài học này, crate được dựng trực tiếp từ một Cube có kích thước `1.2 m`. Cấu trúc khung gỗ được tạo bằng **Individual Inset**, sau đó các mặt trung tâm được đẩy vào trong bằng **Extrude Faces Along Normals**.

Các khe ván được tạo bằng sự kết hợp của **Loop Cut**, **Bevel** và **Scale**. Một lượng biến dạng nhỏ được thêm vào các vertex để mô hình có cảm giác thủ công và cũ kỹ hơn.

Cuối cùng, **Vertex Bevel** được sử dụng để tạo các vết sứt ở góc và cạnh. Bài học cũng giới thiệu cách Blender xử lý **N-gon**, hiện tượng tự động tam giác hóa và cách sử dụng `J` để kiểm soát hướng chia mặt tại những vị trí quan trọng.

Đây là một bài tập quan trọng giúp rèn luyện kỹ năng box modelling, chọn cạnh, kiểm soát topology và tạo sự bất đối xứng tự nhiên cho các đạo cụ low-poly.
