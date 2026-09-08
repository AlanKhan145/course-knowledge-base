# 012 — Simple Houses

| Thuộc tính       | Nội dung                                          |
| ---------------- | ------------------------------------------------- |
| **Module**       | Module 01 — Introduction & Setup                  |
| **Bài học**      | Simple Houses                                     |
| **Thời lượng**   | 6:07                                              |
| **Chủ đề chính** | Tạo các mẫu nhà đơn giản bằng Loop Cut và Extrude |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tạo hình một ngôi nhà đơn giản từ **một Cube duy nhất**.
* Sử dụng **Loop Cut** để bổ sung các cạnh cần thiết cho mô hình.
* Chỉnh sửa mái nhà bằng cách di chuyển Vertex hoặc Edge theo trục Z.
* Dùng **Extrude** để tạo phần nhà mở rộng sang bên cạnh.
* Phân biệt rõ **Object Mode** và **Edit Mode** khi thêm object mới.
* Biết cách tách các phần mesh rời thành những object riêng biệt.
* Rèn luyện tư duy phân tích hình khối trước khi bắt đầu modeling.

---

## 2. Nội dung chính

Trong bài này, chúng ta tạo một số mẫu nhà low-poly đơn giản để chuẩn bị cho cảnh có **ngọn hải đăng** ở các bài tiếp theo.

Thay vì tạo riêng thân nhà và mái nhà bằng nhiều object, mỗi ngôi nhà được bắt đầu từ **một Cube**. Sau đó, hình dạng ngôi nhà được tạo bằng các thao tác:

* Thêm đường cắt bằng `Ctrl + R`.
* Chọn Edge hoặc Face.
* Di chuyển các thành phần bằng `G`.
* Extrude một phần của ngôi nhà bằng `E`.

Quy trình tư duy cơ bản:

```text
Cube
  ↓
Thêm Loop Cut
  ↓
Nâng cạnh giữa lên
  ↓
Tạo mái dốc
  ↓
Thêm Loop Cut nếu cần
  ↓
Extrude phần mở rộng
```

Điểm quan trọng của bài học là không nên dùng quá nhiều thao tác Extrude khi một vài đường **Loop Cut** và thao tác di chuyển Edge đã đủ để tạo hình.

---

## 3. Kiến thức trọng tâm

### 3.1. Tạo mái nhà bằng Loop Cut

Một mái nhà hai dốc đơn giản có thể được tạo từ Cube theo quy trình:

1. Vào **Edit Mode**.
2. Tạo một đường Loop Cut chạy qua chính giữa Cube.
3. Chọn cạnh nằm giữa mặt trên.
4. Di chuyển cạnh đó lên theo trục Z.

Khi cạnh giữa được nâng lên, mặt trên của Cube sẽ tạo thành hai mặt mái dốc.

```text
Cube ban đầu                 Sau khi nâng cạnh giữa

┌─────────────┐                    /\
│             │                   /  \
│             │                  /    \
└─────────────┘                 └──────┘
```

Đây là cách nhanh và hiệu quả hơn so với việc Extrude nhiều lần để cố tạo mái nhà.

---

### 3.2. Loop Cut

**Loop Cut** tạo một vòng cạnh mới chạy quanh mesh.

Phím tắt:

```text
Ctrl + R
```

Quy trình sử dụng:

1. Nhấn `Ctrl + R`.
2. Di chuyển chuột đến vị trí muốn tạo đường cắt.
3. Nhấn chuột trái để xác nhận.
4. Nhấn chuột phải để giữ đường cắt ở chính giữa.

Có thể dùng:

* Nhấp đúp chuột trái để xác nhận đường cắt ở vị trí mặc định.
* Hoặc nhấn chuột trái rồi chuột phải để xác nhận nhưng hủy thao tác trượt cạnh.

Sau khi tạo Loop Cut, Blender thường tự chuyển sang **Edge Select Mode**.

---

### 3.3. Extrude

Extrude được dùng để kéo một phần hình học ra khỏi mesh hiện tại.

Phím tắt:

```text
E
```

Trong bài học, Extrude được sử dụng để tạo:

* Một phần nhà nhô ra bên cạnh.
* Một khu vực mở rộng có mái riêng.
* Các biến thể kiến trúc từ ngôi nhà ban đầu.

Muốn chỉ Extrude một nửa mặt bên, trước tiên phải tạo thêm một đường Loop Cut để chia mặt đó thành hai phần.

---

## 4. Bài thực hành 1 — Ngôi nhà mái cao

### Yêu cầu

Tạo một ngôi nhà cơ bản có mái hai dốc từ một Cube.

### Các bước thực hiện

1. Thêm Cube:

```text
Shift + A → Mesh → Cube
```

2. Nhấn `Tab` để vào **Edit Mode**.

3. Tạo Loop Cut ở giữa Cube:

```text
Ctrl + R
```

4. Nhấp đúp chuột trái hoặc nhấn chuột trái rồi chuột phải để đặt đường cắt ở chính giữa.

5. Chuyển sang **Edge Select Mode** nếu cần:

```text
2
```

6. Chọn cạnh giữa ở mặt trên.

7. Di chuyển cạnh lên theo trục Z:

```text
G → Z
```

8. Kéo cạnh lên đến độ cao phù hợp rồi nhấn chuột trái để xác nhận.

### Kết quả

Cube được biến đổi thành một ngôi nhà có mái hai dốc.

```text
       /\
      /  \
     /    \
    /______\
    |      |
    |      |
    |______|
```

---

## 5. Bài thực hành 2 — Nhà một tầng

Trong bài giảng, mẫu nhà thấp một tầng được gọi là **bungalow** trong tiếng Anh Anh.

### Các bước thực hiện

1. Thêm một Cube mới trong **Object Mode**.

2. Vào Edit Mode:

```text
Tab
```

3. Tạo Loop Cut ở giữa:

```text
Ctrl + R
```

4. Chọn cạnh giữa phía trên.

5. Nâng cạnh lên để tạo mái:

```text
G → Z
```

6. Chọn hai cạnh phía trên ở hai đầu ngôi nhà.

7. Di chuyển hai cạnh xuống theo trục Z:

```text
G → Z
```

Điều chỉnh sao cho:

* Thân nhà thấp hơn.
* Hai bên mái có độ dốc tương đối đều.
* Đỉnh mái không quá cao.

### Cách khác

Có thể chọn hai mặt phía trên rồi di chuyển chúng xuống. Tuy nhiên, chọn hai Edge thường giúp kiểm soát hình dạng mái rõ ràng hơn.

### Kết quả

```text
        /\
       /  \
      /____\
      |    |
      |____|
```

Ngôi nhà có chiều cao thấp hơn mẫu đầu tiên và phù hợp với kiểu nhà một tầng.

---

## 6. Bài thực hành 3 — Nhà có phần mở rộng bên hông

Mẫu thứ ba có một phần nhà nhô ra từ một bên.

### Phân tích hình khối

Để Extrude chỉ một phần của mặt bên, cần chia mặt bên thành hai phần bằng một đường Loop Cut.

```text
Mặt bên ban đầu             Mặt bên sau Loop Cut

┌──────────────┐            ┌──────┬───────┐
│              │            │      │       │
│              │     →      │      │       │
└──────────────┘            └──────┴───────┘
```

### Các bước thực hiện

1. Thêm Cube và vào Edit Mode.

2. Tạo Loop Cut giữa Cube:

```text
Ctrl + R
```

3. Chọn cạnh giữa phía trên.

4. Nâng cạnh lên để tạo mái:

```text
G → Z
```

5. Tạo thêm một Loop Cut theo chiều còn lại để chia mặt bên:

```text
Ctrl + R
```

6. Chuyển sang **Face Select Mode**:

```text
3
```

7. Chọn một nửa mặt bên.

8. Extrude mặt đó ra ngoài:

```text
E
```

9. Chuyển sang Edge Select Mode:

```text
2
```

10. Chọn cạnh mái của phần vừa Extrude.

11. Di chuyển cạnh xuống theo trục Z:

```text
G → Z
```

12. Có thể chuyển sang **Side View** để căn mái chính xác hơn:

```text
Numpad 3
```

### Kết quả

Ngôi nhà có thêm một phần mở rộng ở bên hông, nhưng phần mở rộng vẫn sử dụng mái dốc liên tục với mái chính.

```text
          /\
         /  \
        /    \____
       /          \
      /____________\
      |            |
      |____________|
```

---

## 7. Bài thực hành 4 — Phần mở rộng có mái riêng

Mẫu cuối có phần mở rộng bên cạnh và phần mở rộng này có một mái dốc riêng.

### Các bước thực hiện

1. Thêm Cube và vào Edit Mode.

2. Tạo Loop Cut ở giữa Cube:

```text
Ctrl + R
```

3. Nâng cạnh trên lên để tạo mái chính:

```text
G → Z
```

4. Tạo một Loop Cut theo chiều ngang ở phần thân nhà.

5. Điều chỉnh vị trí đường cắt dựa trên chiều cao mong muốn của phần mở rộng.

6. Chuyển sang Face Select Mode:

```text
3
```

7. Chọn mặt bên cần mở rộng.

8. Extrude mặt đó ra ngoài:

```text
E
```

9. Tạo thêm một Loop Cut chạy qua chính giữa phần vừa Extrude:

```text
Ctrl + R
```

10. Chuyển sang Edge Select Mode:

```text
2
```

11. Chọn cạnh giữa trên phần mở rộng.

12. Nâng cạnh lên theo trục Z:

```text
G → Z
```

### Kết quả

Phần mở rộng có mái riêng thay vì sử dụng chung độ dốc với mái chính.

```text
          /\
         /  \
        /    \        /\
       /      \______/  \
      /__________________\
      |                  |
      |__________________|
```

---

## 8. Lưu ý quan trọng về Object Mode và Edit Mode

Một lỗi phổ biến là thêm object mới trong khi vẫn đang ở **Edit Mode**.

### Khi đang ở Object Mode

Nếu nhấn:

```text
Shift + A
```

Blender hiển thị đầy đủ các loại object như:

* Mesh
* Curve
* Surface
* Text
* Light
* Camera
* Empty

Object mới được thêm sẽ là một object riêng biệt.

### Khi đang ở Edit Mode

Nếu nhấn:

```text
Shift + A
```

Blender chỉ hiển thị menu **Mesh**.

Mesh mới được thêm sẽ trở thành một phần của object hiện tại.

Ví dụ, nếu đang chỉnh sửa ngôi nhà và thêm một Plane trong Edit Mode:

```text
Ngôi nhà + Plane = Một object duy nhất
```

Mặc dù Plane và ngôi nhà nằm cách xa nhau, chúng vẫn thuộc cùng một mesh.

Khi quay lại Object Mode và di chuyển object, cả hai phần sẽ cùng di chuyển.

### Dấu hiệu nhận biết

Nếu nhấn `Shift + A` nhưng chỉ nhìn thấy menu Mesh, điều đó có nghĩa là bạn vẫn đang ở **Edit Mode**.

---

## 9. Tách các phần mesh rời thành object riêng

Nếu vô tình thêm một mesh mới trong Edit Mode, có thể tách các phần rời thành object riêng.

### Các bước thực hiện

1. Đảm bảo đang ở Edit Mode.

2. Nhấn:

```text
P
```

3. Chọn:

```text
Separate → By Loose Parts
```

Hoặc truy cập từ menu:

```text
Mesh → Separate → By Loose Parts
```

4. Nhấn `Tab` để quay lại Object Mode.

Sau khi tách, các phần hình học rời sẽ trở thành các object độc lập.

```text
Trước khi tách:

Object 1
├── Ngôi nhà
└── Plane


Sau khi tách:

Object 1 → Ngôi nhà
Object 2 → Plane
```

### Các tùy chọn Separate

| Tùy chọn           | Chức năng                                     |
| ------------------ | --------------------------------------------- |
| **Selection**      | Tách phần hình học đang được chọn             |
| **By Material**    | Tách mesh dựa trên vật liệu                   |
| **By Loose Parts** | Tách các phần hình học không kết nối với nhau |

Trong tình huống của bài học, lựa chọn phù hợp nhất là **By Loose Parts**.

---

## 10. Quy trình modeling tổng quát

```text
Quan sát mẫu nhà
        ↓
Phân tích các mặt cần chỉnh sửa
        ↓
Thêm Cube
        ↓
Vào Edit Mode
        ↓
Tạo Loop Cut ở giữa
        ↓
Nâng cạnh giữa để tạo mái
        ↓
Cần phần mở rộng?
   ┌────┴────┐
  Không      Có
   ↓          ↓
Hoàn tất   Thêm Loop Cut
              ↓
         Chọn một Face
              ↓
            Extrude
              ↓
       Chỉnh lại phần mái
              ↓
           Hoàn tất
```

---

## 11. Phím tắt và công cụ liên quan

| Thao tác                        | Phím tắt          |
| ------------------------------- | ----------------- |
| Thêm object hoặc mesh           | `Shift + A`       |
| Chuyển Object Mode/Edit Mode    | `Tab`             |
| Loop Cut                        | `Ctrl + R`        |
| Move/Grab                       | `G`               |
| Di chuyển theo trục Z           | `G`, sau đó `Z`   |
| Extrude                         | `E`               |
| Vertex Select Mode              | `1`               |
| Edge Select Mode                | `2`               |
| Face Select Mode                | `3`               |
| Separate                        | `P`               |
| Front View                      | `Numpad 1`        |
| Side View                       | `Numpad 3`        |
| Top View                        | `Numpad 7`        |
| Undo                            | `Ctrl + Z`        |
| Xóa object hoặc thành phần mesh | `X` hoặc `Delete` |
| Lưu file                        | `Ctrl + S`        |

> Các phím `1`, `2`, `3` để chuyển chế độ chọn chỉ hoạt động theo cách trên khi không sử dụng hàng phím Numpad.

---

## 12. Lỗi thường gặp

### 12.1. Dùng quá nhiều Extrude để tạo mái

Mái hai dốc cơ bản chỉ cần:

1. Một Loop Cut ở giữa.
2. Nâng cạnh giữa lên.

Không cần Extrude nhiều lần.

---

### 12.2. Loop Cut không chạy theo hướng mong muốn

Loop Cut phụ thuộc vào cấu trúc cạnh của mesh và vị trí con trỏ chuột.

Cách xử lý:

* Di chuyển chuột sang cạnh khác để thay đổi hướng Loop Cut.
* Xoay góc nhìn để dễ chọn đúng vòng cạnh.
* Kiểm tra xem mesh có cấu trúc Quad phù hợp hay không.

---

### 12.3. Đường Loop Cut bị lệch khỏi chính giữa

Sau khi nhấn chuột trái để xác nhận Loop Cut, Blender chuyển sang chế độ trượt cạnh.

Nhấn chuột phải để hủy việc trượt và đặt đường cắt ở chính giữa:

```text
Ctrl + R → Click trái → Click phải
```

---

### 12.4. Không thể Extrude một nửa mặt bên

Nguyên nhân là mặt bên vẫn chỉ là một Face duy nhất.

Cần dùng `Ctrl + R` để chia mặt thành nhiều Face trước khi Extrude.

---

### 12.5. Thêm object mới nhưng hai vật thể di chuyển cùng nhau

Nguyên nhân là object mới được thêm trong Edit Mode và trở thành một phần của mesh hiện tại.

Cách xử lý:

```text
Tab → Edit Mode
P → By Loose Parts
Tab → Object Mode
```

---

### 12.6. Phần mái mở rộng không thẳng hàng

Cách xử lý:

* Chuyển sang Front View hoặc Side View.
* Chọn Edge cần chỉnh sửa.
* Di chuyển theo trục Z.
* So sánh độ dốc với mái chính.

---

### 12.7. Quên lưu file

Nên lưu file thường xuyên bằng:

```text
Ctrl + S
```

Đặc biệt cần lưu sau khi hoàn thành các mẫu nhà để tiếp tục sử dụng trong bài học tiếp theo.

---

## 13. Bài tập mở rộng

Sau khi hoàn thành bốn mẫu nhà, hãy thử tạo thêm các biến thể khác.

Một số ý tưởng:

* Tạo phần mở rộng ở phía sau ngôi nhà.
* Tạo hai phần mở rộng ở hai bên.
* Tạo ngôi nhà có mái cao và thân thấp.
* Tạo nhà dài với nhiều đoạn mái.
* Tạo nhà hình chữ L.
* Tạo phần mái có độ dốc khác nhau.
* Kết hợp các ngôi nhà thành một cụm công trình nhỏ.

Nguyên tắc thực hiện:

```text
Quan sát hình dạng
→ Xác định vị trí cần Loop Cut
→ Chọn đúng Edge hoặc Face
→ Move hoặc Extrude
→ Kiểm tra từ nhiều góc nhìn
```

Các ngôi nhà không cần giống hoàn toàn với mẫu trong bài. Mục tiêu chính là hiểu cách phân tích hình dạng và lựa chọn công cụ phù hợp.

---

## 14. Checklist thực hành

* [ ] Đã tạo được mái nhà bằng một đường Loop Cut.
* [ ] Đã nâng cạnh giữa bằng `G → Z`.
* [ ] Đã tạo được ngôi nhà mái cao.
* [ ] Đã tạo được ngôi nhà một tầng thấp.
* [ ] Đã tạo được phần nhà mở rộng bằng Extrude.
* [ ] Đã tạo được phần mở rộng có mái riêng.
* [ ] Phân biệt được Object Mode và Edit Mode.
* [ ] Biết dấu hiệu đang ở Edit Mode khi menu Add chỉ hiển thị Mesh.
* [ ] Biết dùng `P → By Loose Parts` để tách các phần mesh rời.
* [ ] Đã kiểm tra mô hình từ Front View hoặc Side View.
* [ ] Đã thử tự tạo thêm ít nhất một mẫu nhà khác.
* [ ] Đã lưu file để chuẩn bị cho bài tiếp theo.

---

## 15. Tóm tắt

Bài **Simple Houses** là bài thực hành tổng hợp các kỹ năng chỉnh sửa mesh cơ bản trong Blender.

Kỹ thuật quan trọng nhất là:

```text
Loop Cut → Chọn Edge → Di chuyển Edge → Tạo mái
```

Đối với các mẫu phức tạp hơn:

```text
Loop Cut → Chọn Face → Extrude → Thêm Loop Cut → Chỉnh mái
```

Bài học cũng nhấn mạnh sự khác nhau giữa **Object Mode** và **Edit Mode**. Khi thêm mesh trong Edit Mode, mesh mới sẽ thuộc object đang chỉnh sửa. Nếu tạo nhầm, có thể dùng:

```text
P → By Loose Parts
```

để tách các phần mesh thành object riêng biệt.

Sau bài này, người học đã có thể tạo nhiều biến thể nhà low-poly từ một Cube duy nhất và sẵn sàng sử dụng chúng trong cảnh ngọn hải đăng ở các bài tiếp theo.

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
