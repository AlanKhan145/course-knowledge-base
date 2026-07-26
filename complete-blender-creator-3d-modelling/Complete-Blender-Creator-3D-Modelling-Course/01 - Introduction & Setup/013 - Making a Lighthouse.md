# 013 — Tạo ngọn hải đăng

| Thuộc tính       | Nội dung                                                                |
| ---------------- | ----------------------------------------------------------------------- |
| **Module**       | Module 01 — Introduction & Setup                                        |
| **Bài học**      | Making a Lighthouse                                                     |
| **Thời lượng**   | 10:35                                                                   |
| **Chủ đề chính** | Tổ chức đối tượng bằng Collection và tạo mô hình ngọn hải đăng low-poly |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tổ chức nhiều object vào một **Collection**.
* Đổi tên object và Collection trong Blender.
* Ẩn hoặc hiện toàn bộ một nhóm object.
* Tạo một **Cylinder low-poly** với số lượng đỉnh phù hợp.
* Sử dụng `Extrude`, `Scale` và `Inset` để dựng hình.
* Tạo thân hải đăng thuôn dần từ dưới lên trên.
* Tạo các gờ, phần đèn và mái chóp của ngọn hải đăng.
* Chọn nhanh một vòng mặt bằng `Alt + Click`.
* Điều chỉnh kích thước theo mặt phẳng XY mà không làm thay đổi chiều cao.

---

## 2. Chuẩn bị scene

Khi mở lại file Blender, chương trình sẽ giữ nguyên chế độ làm việc trước đó.

Ví dụ, nếu bạn lưu file khi đang ở **Edit Mode**, lúc mở lại file, Blender vẫn tiếp tục ở Edit Mode.

Nhấn:

```text
Tab
```

để quay lại **Object Mode** trước khi tổ chức các object trong scene.

---

## 3. Đổi tên object

Các object được tạo từ Cube thường có tên mặc định như:

```text
Cube
Cube.001
Cube.002
```

Có hai cách phổ biến để đổi tên object.

### Cách 1: Đổi tên trong Outliner

Trong cửa sổ **Outliner**:

1. Tìm object cần đổi tên.
2. Nhấp đúp vào tên object.
3. Nhập tên mới.
4. Nhấn `Enter`.

### Cách 2: Đổi tên bằng phím tắt

Chọn object trong viewport và nhấn:

```text
F2
```

Sau đó nhập tên mới và nhấn `Enter`.

Tên object hiện tại cũng được hiển thị ở góc trên bên trái của viewport.

---

## 4. Tổ chức object bằng Collection

Khi scene có nhiều object, việc ẩn từng object bằng biểu tượng con mắt trong Outliner sẽ mất thời gian.

Giải pháp tốt hơn là đưa các object liên quan vào cùng một **Collection**.

### 4.1. Tạo Collection từ Outliner

Trong Outliner:

1. Nhấn biểu tượng **New Collection**.
2. Một Collection mới sẽ xuất hiện.
3. Nhấp đúp vào tên để đổi tên Collection.

Có thể nhấp chuột phải vào Collection và chọn **Delete** nếu không cần sử dụng.

---

### 4.2. Tạo Collection bằng phím tắt

Chọn một object rồi nhấn:

```text
M
```

Chọn:

```text
New Collection
```

Nhập tên Collection, ví dụ:

```text
House
```

Sau đó chọn **Create**.

---

### 4.3. Đưa nhiều object vào Collection

Trong Outliner:

1. Chọn object đầu tiên.
2. Giữ `Shift`.
3. Chọn object cuối cùng để chọn nhiều object liên tiếp.
4. Kéo toàn bộ các object đã chọn vào Collection `House`.

Sau khi đưa các ngôi nhà vào cùng một Collection, bạn có thể nhấn biểu tượng con mắt của Collection để ẩn hoặc hiện toàn bộ nhóm.

```text
Các object ngôi nhà
        │
        ▼
Collection: House
        │
        ├── Cube
        ├── Cube.001
        ├── Cube.002
        └── Cube.003
```

### Lưu ý

Một object đang được chọn vẫn có thể tiếp tục ở trạng thái được chọn dù Collection chứa nó đã bị ẩn.

Điều này đôi khi gây nhầm lẫn vì Blender vẫn ghi nhớ **Active Object**. Chọn một object khác trong scene để tránh thao tác nhầm lên object đang bị ẩn.

Trong các project nhỏ, không nhất thiết phải đổi tên từng object. Tuy nhiên, nên đặt tên rõ ràng cho các Collection để scene vẫn được tổ chức hợp lý.

---

## 5. Thêm Cylinder làm thân hải đăng

Sau khi ẩn Collection chứa các ngôi nhà, thêm một Cylinder mới:

```text
Shift + A → Mesh → Cylinder
```

Nhấn phím dấu chấm trên Numpad để tập trung góc nhìn vào object:

```text
Numpad .
```

Lệnh này tương ứng với:

```text
View → Frame Selected
```

---

## 6. Thiết lập số lượng đỉnh của Cylinder

Ngay sau khi thêm Cylinder, bảng **Adjust Last Operation** xuất hiện ở góc dưới bên trái.

Thay đổi:

```text
Vertices: 32 → 16
```

Cylinder 16 đỉnh phù hợp với phong cách low-poly vì:

* Vẫn giữ được hình dáng gần tròn.
* Có ít polygon hơn.
* Dễ chỉnh sửa hơn.
* Có thể tăng độ chi tiết sau này nếu cần.
* Số `16` chia hết cho `4`, thuận lợi khi sử dụng Mirror Modifier.

> Trong modeling, nên bắt đầu với số polygon thấp nhất có thể, sau đó mới tăng độ chi tiết.

### Khi bảng thiết lập biến mất

Bảng **Adjust Last Operation** sẽ biến mất nếu bạn:

* Chọn object khác.
* Click ra ngoài.
* Di chuyển object.
* Chuyển sang Edit Mode.
* Thực hiện một thao tác chỉnh sửa khác.

Khi đó, cách đơn giản nhất là:

1. Xóa Cylinder.
2. Thêm lại Cylinder mới.
3. Thiết lập lại số Vertices.

Blender thường ghi nhớ thông số được sử dụng ở lần gần nhất.

---

## 7. Quy trình tạo ngọn hải đăng

Ngọn hải đăng được dựng từ một Cylinder duy nhất bằng cách liên tục thao tác trên mặt trên cùng.

Quy trình tổng quát:

```text
Cylinder
   │
   ├── Extrude + Scale vào trong
   │
   ├── Extrude lên trên
   │
   ├── Scale nhỏ dần để tạo thân thuôn
   │
   ├── Extrude + Scale ra ngoài để tạo gờ
   │
   ├── Inset mặt trên
   │
   ├── Extrude phần đèn
   │
   ├── Extrude các gờ trên
   │
   └── Extrude + Scale 0 để tạo mái chóp
```

---

## 8. Tạo gờ dưới của hải đăng

Nhấn:

```text
Tab
```

để chuyển sang **Edit Mode**.

Chuyển sang chế độ chọn mặt:

```text
3
```

Chọn mặt trên cùng của Cylinder.

### Bước 1: Extrude và Scale vào trong

Nhấn:

```text
E
```

Ngay sau đó nhấn:

```text
S
```

Di chuyển chuột vào trong để thu nhỏ mặt vừa extrude.

Nhấn chuột trái hoặc `Enter` để xác nhận.

### Bước 2: Extrude lên trên

Tiếp tục nhấn:

```text
E
```

Di chuyển mặt lên trên để tạo chiều cao cho gờ.

Quy trình này có thể ghi ngắn gọn như sau:

```text
E → S → thu nhỏ → xác nhận
E → kéo lên → xác nhận
```

Kết quả là một gờ nhỏ nhô ra quanh phần dưới của thân hải đăng.

---

## 9. Tạo thân hải đăng thuôn dần

Chuyển sang Front View:

```text
Numpad 1
```

Chọn mặt trên cùng, sau đó nhấn:

```text
G → Z
```

Kéo mặt lên trên để tăng chiều cao thân tháp.

Tiếp theo nhấn:

```text
S
```

Scale mặt trên nhỏ lại.

Điều này khiến thân Cylinder thuôn dần từ đáy lên đỉnh.

```text
Nhìn từ phía trước:

      ┌──────┐
     /        \
    /          \
   /            \
  └──────────────┘
```

Không cần nhập kích thước chính xác. Hãy quan sát silhouette tổng thể và điều chỉnh sao cho thân hải đăng có tỷ lệ cân đối.

---

## 10. Tạo gờ nhô gần phần đỉnh

Chọn mặt trên cùng.

Nhấn:

```text
E → S
```

Lần này, scale mặt **ra ngoài** thay vì vào trong.

Sau đó nhấn:

```text
E
```

và kéo mặt lên trên để tạo chiều cao cho gờ.

Quy trình:

```text
E → S → scale ra ngoài
E → kéo lên
```

### Hiện tượng Z-fighting

Sau khi extrude và scale ra ngoài nhưng chưa kéo lên, viewport có thể xuất hiện hiện tượng nhấp nháy.

Hiện tượng này gọi là:

```text
Z-fighting
```

Nó xảy ra khi hai hoặc nhiều mặt nằm trùng hoặc gần như trùng hoàn toàn trên cùng một vị trí.

Trong trường hợp này, Z-fighting chỉ xuất hiện tạm thời. Khi tiếp tục extrude mặt lên trên, các mặt sẽ được tách ra và hiện tượng nhấp nháy biến mất.

> Trong model hoàn chỉnh, không nên để các mặt nằm chồng lên nhau vì có thể gây lỗi hiển thị và render.

---

## 11. Sử dụng Inset

Để tạo phần lõm vào trước khi dựng khu vực đèn, có thể sử dụng tổ hợp:

```text
E → S
```

Tuy nhiên, Blender cung cấp công cụ phù hợp hơn là **Inset Faces**.

Phím tắt:

```text
I
```

Cách thực hiện:

1. Chọn mặt trên cùng.
2. Nhấn `I`.
3. Di chuyển chuột vào trong.
4. Nhấn chuột trái để xác nhận.

Inset tạo một mặt nhỏ hơn nằm bên trong mặt hiện tại và tự động tạo vòng mặt bao quanh.

```text
Mặt ban đầu              Sau khi Inset

┌────────────┐          ┌────────────┐
│            │          │ ┌────────┐ │
│            │    →     │ │        │ │
│            │          │ └────────┘ │
└────────────┘          └────────────┘
```

Inset tương đương với việc tạo một vùng mặt bên trong mà không cần thực hiện riêng hai bước Extrude và Scale.

---

## 12. Tạo phần đèn và mái chóp

Sau khi Inset mặt trên, tiếp tục tạo phần đỉnh của ngọn hải đăng.

### 12.1. Tạo phần đèn

Chọn mặt trong vừa tạo và nhấn:

```text
E
```

Kéo mặt lên trên để tạo phần đèn.

---

### 12.2. Tạo gờ phía trên

Nhấn:

```text
E → S
```

Scale mặt ra ngoài để tạo gờ.

Sau đó nhấn:

```text
E
```

Kéo mặt lên trên để tạo độ dày cho gờ.

---

### 12.3. Tạo mái chóp

Chọn mặt trên cùng và nhấn:

```text
E
```

Kéo mặt lên trên.

Tiếp theo nhấn:

```text
S → 0 → Enter
```

Scale mặt trên về kích thước bằng `0`.

Các đỉnh của mặt sẽ hội tụ vào tâm, tạo thành một điểm nhọn.

```text
       ▲
      / \
     /   \
    ├─────┤
    │     │
    ├─────┤
    │     │
   /       \
  /         \
 └───────────┘
```

> `S → 0` là kỹ thuật nhanh để gom các đỉnh đang chọn về cùng một vị trí theo tâm scale.

---

## 13. Chọn một vòng mặt bằng Alt + Click

Sau khi tạo hình cơ bản, một số gờ có thể quá mỏng hoặc quá dày.

Để chọn toàn bộ một vòng mặt chạy quanh object:

1. Chuyển sang Face Select Mode bằng phím `3`.
2. Giữ `Alt`.
3. Nhấp chuột trái vào một cạnh nằm ngang thuộc vòng mặt cần chọn.

```text
Alt + Left Click
```

Blender sẽ chọn toàn bộ **Face Loop** chạy quanh thân Cylinder.

Điều quan trọng là phải click vào một cạnh chạy ngang qua vòng mặt muốn chọn.

---

## 14. Điều chỉnh độ dày của gờ

Sau khi chọn Face Loop, chuyển sang Front View:

```text
Numpad 1
```

Nhấn:

```text
G → Z
```

Kéo vòng mặt lên hoặc xuống để thay đổi độ dày của phần gờ.

Ví dụ:

* Kéo vòng mặt dưới xuống để làm gờ dày hơn.
* Kéo vòng mặt trên lên để tăng chiều cao phần đèn.
* Kéo các vòng gần nhau lại để làm gờ mỏng hơn.

---

## 15. Scale theo mặt phẳng XY

Khi nhấn `S`, Blender mặc định scale theo cả ba trục:

```text
X, Y và Z
```

Điều này có thể khiến phần được chọn thay đổi cả chiều rộng lẫn chiều cao.

Để scale theo chiều ngang mà không thay đổi trục Z, sử dụng:

```text
S → Shift + Z
```

`Shift + Z` có nghĩa là loại trừ trục Z khỏi thao tác.

Khi đó, object chỉ được scale theo:

```text
X và Y
```

Quy trình:

```text
Alt + Click → chọn Face Loop
S → Shift + Z → điều chỉnh bán kính
```

Kỹ thuật này rất hữu ích khi muốn:

* Làm rộng gờ.
* Thu nhỏ phần đèn.
* Điều chỉnh bán kính thân tháp.
* Giữ nguyên chiều cao của vòng mặt.

---

## 16. Hủy thao tác đang thực hiện

Nếu đang di chuyển hoặc scale nhưng không muốn áp dụng thay đổi, nhấn:

```text
Right Click
```

hoặc:

```text
Esc
```

để hủy thao tác hiện tại.

Ví dụ, sau khi nhấn `S` và di chuyển chuột, nhấp chuột phải sẽ đưa phần được chọn trở về kích thước ban đầu.

---

## 17. Bỏ chọn toàn bộ

Nhấn:

```text
Alt + A
```

để bỏ chọn toàn bộ thành phần trong Edit Mode.

Lưu ý: Trong một số phiên bản hoặc cấu hình keymap Blender khác, phím bỏ chọn có thể là `Alt + A` hoặc thao tác chọn được quản lý bằng phím `A`. Hãy quan sát trạng thái lựa chọn trong viewport.

---

## 18. Sơ đồ quy trình dựng hình

```text
1. Tổ chức scene
   │
   ├── Chọn các ngôi nhà
   ├── Tạo Collection "House"
   ├── Đưa object vào Collection
   └── Ẩn Collection
   │
   ▼
2. Tạo Cylinder
   │
   ├── Shift + A → Mesh → Cylinder
   ├── Vertices = 16
   └── Tab → Edit Mode
   │
   ▼
3. Tạo thân tháp
   │
   ├── Chọn mặt trên
   ├── E → S vào trong
   ├── E kéo lên
   ├── G → Z tăng chiều cao
   └── S thu nhỏ mặt trên
   │
   ▼
4. Tạo gờ và phần đèn
   │
   ├── E → S ra ngoài
   ├── E kéo lên
   ├── I tạo Inset
   ├── E tạo phần đèn
   └── E → S tạo gờ trên
   │
   ▼
5. Tạo mái
   │
   ├── E kéo lên
   └── S → 0 tạo điểm nhọn
   │
   ▼
6. Tinh chỉnh
   │
   ├── Alt + Click chọn Face Loop
   ├── G → Z chỉnh độ dày
   └── S → Shift + Z chỉnh bán kính
```

---

## 19. Phím tắt và công cụ quan trọng

| Thao tác                       | Phím tắt                      |
| ------------------------------ | ----------------------------- |
| Chuyển Object Mode/Edit Mode   | `Tab`                         |
| Đổi tên object                 | `F2`                          |
| Chuyển object sang Collection  | `M`                           |
| Thêm Cylinder                  | `Shift + A → Mesh → Cylinder` |
| Tập trung vào object đang chọn | `Numpad .`                    |
| Front View                     | `Numpad 1`                    |
| Chế độ chọn mặt                | `3`                           |
| Extrude                        | `E`                           |
| Scale                          | `S`                           |
| Di chuyển                      | `G`                           |
| Di chuyển theo trục Z          | `G → Z`                       |
| Inset Faces                    | `I`                           |
| Scale về tâm                   | `S → 0`                       |
| Loại trừ trục Z khi Scale      | `S → Shift + Z`               |
| Chọn Face Loop                 | `Alt + Left Click`            |
| Bỏ chọn toàn bộ                | `Alt + A`                     |
| Hủy thao tác                   | `Esc` hoặc chuột phải         |
| Xác nhận thao tác              | `Enter` hoặc chuột trái       |

---

## 20. Lưu ý và lỗi thường gặp

### 20.1. Sử dụng quá nhiều Vertices

Cylinder có quá nhiều đỉnh sẽ:

* Làm mesh phức tạp hơn.
* Khó chỉnh sửa.
* Tăng số lượng polygon không cần thiết.
* Làm giảm phong cách low-poly.

Với bài tập này, `16 Vertices` là lựa chọn phù hợp.

---

### 20.2. Bảng Adjust Last Operation bị mất

Bảng thiết lập Cylinder chỉ tồn tại ngay sau khi thêm object.

Nếu đã click ra ngoài hoặc thực hiện thao tác khác, hãy xóa Cylinder và tạo lại thay vì cố tìm lại bảng thiết lập.

---

### 20.3. Scale làm thay đổi cả chiều cao

Khi scale một vòng mặt bằng `S`, Blender có thể thay đổi cả trục Z.

Sử dụng:

```text
S → Shift + Z
```

để chỉ thay đổi bán kính theo mặt phẳng XY.

---

### 20.4. Z-fighting

Nếu viewport xuất hiện hiện tượng nhấp nháy, có thể hai mặt đang nằm chồng lên nhau.

Hãy kiểm tra xem thao tác Extrude đã được kéo ra khỏi vị trí ban đầu hay chưa.

---

### 20.5. Chọn sai Face Loop

Khi sử dụng `Alt + Click`, cần click vào cạnh nằm ngang đi qua vòng mặt mong muốn.

Nếu click vào cạnh dọc, Blender có thể chọn một vòng chạy theo hướng khác.

---

### 20.6. Object bị ẩn nhưng vẫn đang được chọn

Sau khi ẩn Collection, Active Object có thể vẫn là một object nằm trong Collection đó.

Hãy chọn một object đang hiển thị trước khi tiếp tục thao tác.

---

### 20.7. Mái chóp chưa hội tụ đúng tâm

Trước khi sử dụng:

```text
S → 0
```

hãy bảo đảm mặt trên cùng đã được chọn đầy đủ và tâm scale nằm ở vị trí phù hợp.

---

## 21. Checklist thực hành

### Tổ chức scene

* [ ] Đã chuyển về Object Mode.
* [ ] Đã tạo Collection `House`.
* [ ] Đã đưa toàn bộ các ngôi nhà vào Collection.
* [ ] Đã ẩn Collection để tránh gây mất tập trung.

### Tạo mesh

* [ ] Đã thêm Cylinder.
* [ ] Đã đặt số Vertices bằng `16`.
* [ ] Đã chuyển sang Edit Mode.
* [ ] Đã chuyển sang Face Select Mode.

### Dựng hình

* [ ] Đã tạo gờ dưới bằng Extrude và Scale.
* [ ] Đã kéo thân tháp lên theo trục Z.
* [ ] Đã scale phần trên nhỏ lại để tạo độ thuôn.
* [ ] Đã tạo gờ nhô gần phần đỉnh.
* [ ] Đã sử dụng Inset cho mặt trên.
* [ ] Đã tạo phần đèn.
* [ ] Đã tạo gờ phía trên.
* [ ] Đã tạo mái chóp bằng `S → 0`.

### Tinh chỉnh

* [ ] Đã sử dụng `Alt + Click` để chọn Face Loop.
* [ ] Đã điều chỉnh độ dày của các gờ.
* [ ] Đã sử dụng `S → Shift + Z` để chỉnh bán kính.
* [ ] Đã kiểm tra silhouette ở Front View.
* [ ] Đã lưu file Blender.

---

## 22. Bài tập thực hành

### Bài tập 1: Tổ chức Collection

Tạo ít nhất hai Collection:

```text
House
Lighthouse
```

Đưa các object tương ứng vào đúng Collection và thử ẩn/hiện từng Collection.

### Bài tập 2: Tạo biến thể hải đăng

Tạo ba phiên bản hải đăng:

1. Hải đăng thấp và rộng.
2. Hải đăng cao và thon.
3. Hải đăng có phần đèn lớn và mái chóp cao.

Chỉ sử dụng:

* `Extrude`
* `Scale`
* `Inset`
* `Grab`
* Chọn Face Loop

### Bài tập 3: Giảm polygon

Tạo hai Cylinder:

* Một Cylinder có `16 Vertices`.
* Một Cylinder có `32 Vertices`.

So sánh:

* Số lượng mặt.
* Hình dáng silhouette.
* Mức độ dễ chỉnh sửa.
* Sự khác biệt khi nhìn từ xa.

---

## 23. Tóm tắt

Trong bài học này, ngọn hải đăng được tạo từ một Cylinder low-poly có `16 Vertices`.

Thay vì sử dụng nhiều object riêng biệt, toàn bộ thân, gờ, phần đèn và mái chóp được tạo từ một mesh duy nhất bằng các thao tác:

```text
Extrude → Scale → Inset → Extrude
```

Các kỹ thuật quan trọng gồm:

* Tạo Collection để tổ chức scene.
* Dùng `E` và `S` để tạo các tầng hình học.
* Dùng `I` để tạo mặt Inset.
* Dùng `S → 0` để tạo điểm chóp.
* Dùng `Alt + Click` để chọn Face Loop.
* Dùng `S → Shift + Z` để scale theo mặt phẳng XY.

Đây là một bài tập quan trọng giúp làm quen với quy trình **box modeling theo chiều dọc**, có thể áp dụng cho nhiều loại mô hình khác như:

* Tháp.
* Cột kiến trúc.
* Chai lọ.
* Ống khói.
* Lâu đài.
* Trụ đèn.
* Các công trình low-poly.
