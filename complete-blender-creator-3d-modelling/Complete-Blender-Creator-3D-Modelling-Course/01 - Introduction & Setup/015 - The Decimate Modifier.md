# 015 — The Decimate Modifier

| Thuộc tính            | Nội dung                                               |
| --------------------- | ------------------------------------------------------ |
| **Module**            | Module 01 — Introduction & Setup                       |
| **Bài học**           | The Decimate Modifier                                  |
| **Thời lượng**        | 6:06                                                   |
| **Chủ đề chính**      | Giảm số lượng polygon bằng Decimate Modifier           |
| **Công cụ liên quan** | Modifier, Sculpt Mode, Edit Mode, Proportional Editing |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Hiểu lý do cần giảm số lượng polygon sau khi sculpt.
* Thêm và điều chỉnh **Decimate Modifier**.
* Sử dụng tham số **Ratio** để tạo phong cách low-poly.
* Hiểu sự khác nhau giữa modifier chưa Apply và modifier đã Apply.
* Biết khái niệm **destructive modeling**.
* Chỉnh sửa mesh low-poly bằng Sculpt Mode và Edit Mode.
* Sử dụng **Proportional Editing** để thay đổi hình dạng mesh mềm mại hơn.

---

## 2. Tại sao cần giảm polygon?

Sau khi sculpt, object thường có số lượng mặt rất lớn. Điều này giúp bề mặt mượt và có nhiều chi tiết, nhưng cũng làm mesh trở nên nặng hơn.

Trong bài học, object nền đá cần được chuyển sang phong cách **low-poly**, vì vậy số lượng mặt phải được giảm xuống.

Việc giảm polygon mang lại một số lợi ích:

* Tạo phong cách low-poly rõ ràng.
* Giảm tải cho viewport.
* Giúp file Blender nhẹ hơn.
* Dễ sử dụng trong game engine.
* Giảm chi phí xử lý khi render hoặc xuất model.

### Quy trình tổng quát

```text
Mesh sau khi Sculpt
        │
        ▼
Số lượng polygon rất lớn
        │
        ▼
Thêm Decimate Modifier
        │
        ▼
Giảm Ratio
        │
        ▼
Kiểm tra hình dạng và số mặt
        │
        ▼
Apply Modifier
        │
        ▼
Mesh low-poly thực sự
```

---

## 3. Chuẩn bị object

Từ Sculpting Workspace, chuyển về:

```text
Layout Workspace
```

Sau đó chọn object nền đá và sử dụng:

```text
Numpad .
```

Phím này giúp tập trung góc nhìn vào object đang được chọn.

Có thể xoay và thu phóng viewport để quan sát rõ toàn bộ hình dạng của nền đá trước khi giảm polygon.

---

## 4. Thêm Decimate Modifier

Modifier được quản lý trong tab **Modifier Properties**, có biểu tượng hình cờ lê.

Các bước thực hiện:

1. Chọn object nền đá.
2. Mở **Modifier Properties**.
3. Nhấn **Add Modifier**.
4. Tìm kiếm từ khóa `Decimate`.
5. Chọn **Decimate** trong nhóm **Generate**.

Đường dẫn:

```text
Modifier Properties
└── Add Modifier
    └── Generate
        └── Decimate
```

Ngoài việc tìm trong danh sách, có thể nhập trực tiếp từ khóa:

```text
decimate
```

vào ô tìm kiếm của bảng Add Modifier.

---

## 5. Điều chỉnh Ratio

Tham số quan trọng nhất trong bài học là **Ratio**.

| Giá trị Ratio | Kết quả                              |
| ------------: | ------------------------------------ |
|       `1.000` | Giữ gần như toàn bộ mesh ban đầu     |
|       `0.500` | Giữ lại khoảng một nửa số mặt        |
|       `0.200` | Giảm mạnh số mặt                     |
|   Gần `0.000` | Mesh rất đơn giản và dễ bị biến dạng |

Khi kéo Ratio xuống:

* Số lượng mặt trên object giảm dần.
* Các tam giác trên bề mặt trở nên lớn hơn.
* Object bắt đầu có phong cách low-poly.
* Những chi tiết nhỏ từ quá trình sculpt dần biến mất.

Trong bài học, mục tiêu là giảm nền đá xuống khoảng:

```text
150 faces
```

Không nhất thiết phải đúng chính xác 150 mặt. Điều quan trọng là giữ được hình dáng tổng thể và tạo được phong cách low-poly mong muốn.

### Nguyên tắc điều chỉnh

```text
Ratio cao
  │
  │  Nhiều chi tiết
  │  Nhiều polygon
  │
  ▼
Ratio thấp
     Ít chi tiết
     Ít polygon
     Low-poly rõ hơn
```

Không nên giảm Ratio quá nhanh. Hãy kéo từ từ và quan sát silhouette của object.

---

## 6. Modifier chưa làm thay đổi mesh gốc

Một modifier mới được thêm vào chỉ tạo ra một lớp xử lý phía trên mesh gốc.

Có thể hình dung như sau:

```text
Kết quả hiển thị trong viewport
              ▲
              │
      Decimate Modifier
              ▲
              │
          Mesh gốc
```

Khi modifier chưa được Apply:

* Mesh gốc vẫn còn nguyên.
* Có thể bật hoặc tắt modifier.
* Có thể thay đổi Ratio bất kỳ lúc nào.
* Có thể xóa modifier để trở về trạng thái ban đầu.
* Có thể thêm nhiều modifier vào cùng một object.

Nếu tắt biểu tượng hiển thị của Decimate Modifier, object sẽ quay lại hình dạng có nhiều polygon ban đầu.

---

## 7. Modifier Stack

Một object có thể chứa nhiều modifier cùng lúc. Các modifier được xử lý theo thứ tự từ trên xuống dưới.

Ví dụ:

```text
Mesh gốc
   │
   ▼
Modifier 1
   │
   ▼
Modifier 2
   │
   ▼
Modifier 3
   │
   ▼
Kết quả cuối cùng
```

Khi thay đổi một modifier ở phía trên, những modifier phía dưới cũng có thể cho ra kết quả khác.

Vì vậy, thứ tự modifier trong stack rất quan trọng.

---

## 8. Sự khác nhau giữa Object Mode và Edit Mode

Khi Decimate Modifier chưa được Apply, hình dạng nhìn thấy trong viewport chưa phải là hình học thật của mesh.

Nếu chuyển sang Edit Mode, bạn có thể vẫn thấy hoặc chỉnh sửa cấu trúc mesh gốc, tùy theo thiết lập hiển thị của modifier.

Điều này có nghĩa là:

```text
Object Mode
→ Hiển thị kết quả sau modifier

Edit Mode
→ Chỉnh sửa dữ liệu mesh gốc
```

Muốn biến kết quả Decimate thành hình học thực sự, cần phải **Apply modifier**.

---

## 9. Apply Decimate Modifier

Để Apply modifier:

1. Đảm bảo object đang ở **Object Mode**.
2. Mở menu của Decimate Modifier.
3. Chọn **Apply**.

Có thể chuyển từ Edit Mode về Object Mode bằng:

```text
Tab
```

### Lưu ý quan trọng

Blender không cho phép Apply modifier khi object đang ở Edit Mode.

Quy trình đúng:

```text
Edit Mode
   │
   ├── Nhấn Tab
   ▼
Object Mode
   │
   ├── Mở menu modifier
   ▼
Apply
```

Sau khi Apply:

* Decimate Modifier biến mất khỏi Modifier Stack.
* Kết quả low-poly trở thành mesh thật.
* Khi vào Edit Mode, bạn sẽ thấy các đỉnh, cạnh và mặt đã được giảm.
* Không thể điều chỉnh lại Ratio của modifier vừa Apply.

---

## 10. Destructive Modeling

Apply modifier là một thao tác mang tính phá hủy, thường được gọi là:

```text
Destructive Modeling
```

Điều này không có nghĩa là object bị hỏng. Nó có nghĩa là dữ liệu mesh gốc đã được thay đổi trực tiếp.

### Trước khi Apply

* Có thể thay đổi Ratio.
* Có thể tắt Decimate.
* Có thể xóa modifier.
* Có thể trở lại mesh ban đầu.

### Sau khi Apply

* Mesh gốc đã bị thay thế bằng mesh low-poly.
* Không thể chỉnh lại Ratio.
* Không thể tắt modifier để lấy lại mesh cũ.
* Chỉ có thể quay lại bằng Undo hoặc mở bản sao đã lưu trước đó.

| Trạng thái | Có thể đổi Ratio |    Có thể trở về mesh gốc    | Chỉnh trực tiếp mesh low-poly |
| ---------- | :--------------: | :--------------------------: | :---------------------------: |
| Chưa Apply |        Có        |              Có              |         Chưa hoàn toàn        |
| Đã Apply   |       Không      | Không, trừ Undo hoặc bản sao |               Có              |

### Thói quen tốt

Trước khi Apply một modifier quan trọng, có thể:

* Lưu file.
* Duplicate object bằng `Shift + D`.
* Ẩn bản sao dự phòng.
* Sau đó mới Apply modifier trên object chính.

---

## 11. Chỉnh sửa mesh sau khi Apply

Sau khi Decimate Modifier được Apply, object đã trở thành một mesh low-poly thực sự.

Có hai cách chính để tiếp tục chỉnh sửa:

```text
Mesh low-poly
├── Sculpt Mode
└── Edit Mode
```

---

## 12. Chỉnh sửa bằng Sculpt Mode

Có thể chuyển lại sang Sculpt Mode và tiếp tục kéo, đẩy bề mặt.

Tuy nhiên, trong bài học, **Dyntopo không được bật**.

Điều đó có nghĩa là:

* Sculpt Mode chỉ di chuyển các đỉnh hiện có.
* Blender không tự tạo thêm topology.
* Các mặt tam giác low-poly vẫn được giữ nguyên.
* Nếu mesh có quá ít đỉnh, khả năng tạo chi tiết sẽ bị hạn chế.

```text
Dyntopo tắt
→ Không tạo thêm polygon
→ Chỉ thay đổi vị trí các đỉnh có sẵn
```

Điều này phù hợp khi chỉ muốn chỉnh nhẹ hình dáng của nền đá mà vẫn giữ phong cách low-poly.

---

## 13. Chỉnh sửa bằng Edit Mode

Chuyển về Layout Workspace, sau đó nhấn:

```text
Tab
```

để vào Edit Mode.

Trong Edit Mode, có thể chỉnh sửa:

* Vertex — đỉnh.
* Edge — cạnh.
* Face — mặt.

### Chuyển sang Vertex Select

Nhấn:

```text
1
```

để chuyển sang chế độ chọn đỉnh.

> Phím `1` ở hàng số phía trên bàn phím được sử dụng cho Vertex Select. Không nhầm với `Numpad 1`, vốn dùng để chuyển sang Front View.

Sau khi chọn một hoặc nhiều đỉnh, nhấn:

```text
G
```

để di chuyển chúng.

---

## 14. Làm phẳng một vùng

Để làm phẳng một nhóm đỉnh theo trục Z:

1. Chọn các đỉnh cần làm phẳng.
2. Nhấn `S` để Scale.
3. Nhấn `Z` để giới hạn theo trục Z.
4. Nhập `0`.
5. Nhấn `Enter`.

Phím tắt:

```text
S → Z → 0 → Enter
```

Kết quả là tất cả đỉnh được chọn sẽ nằm trên cùng một độ cao theo trục Z.

Kỹ thuật này hữu ích khi cần tạo một khu vực bằng phẳng để đặt:

* Ngôi nhà.
* Cây cối.
* Công trình.
* Đạo cụ hoặc vật thể khác.

---

## 15. Proportional Editing

**Proportional Editing** cho phép di chuyển một đỉnh đồng thời tác động đến những đỉnh xung quanh.

Có thể bật hoặc tắt bằng phím:

```text
O
```

Hoặc nhấn vào biểu tượng hình tròn trên thanh công cụ của viewport.

### Cách sử dụng

1. Vào Edit Mode.
2. Chuyển sang Vertex Select.
3. Bật Proportional Editing bằng `O`.
4. Chọn một đỉnh.
5. Nhấn `G`.
6. Di chuyển chuột.
7. Lăn con lăn chuột để thay đổi phạm vi ảnh hưởng.

```text
Chọn một đỉnh
      │
      ▼
Nhấn G
      │
      ▼
Lăn con lăn chuột
      │
      ├── Vòng tròn lớn: ảnh hưởng nhiều đỉnh
      └── Vòng tròn nhỏ: ảnh hưởng ít đỉnh
```

---

## 16. Circle of Influence

Khi Proportional Editing được bật, một vòng tròn ảnh hưởng sẽ xuất hiện.

Vòng tròn này xác định số lượng đỉnh bị ảnh hưởng bởi thao tác.

* Các đỉnh gần điểm được chọn bị ảnh hưởng mạnh.
* Các đỉnh ở xa bị ảnh hưởng nhẹ hơn.
* Các đỉnh nằm ngoài vòng tròn không bị ảnh hưởng.

Có thể hình dung mức độ ảnh hưởng như sau:

```text
       Ảnh hưởng nhẹ
              ↓
      ○ ○ ○ ○ ○ ○ ○
        ○ ○ ○ ○ ○
          ○ ● ○
             ↑
       Đỉnh được chọn
       ảnh hưởng mạnh nhất
```

Hiệu ứng giảm dần từ tâm ra ngoài được gọi là **falloff**.

Blender cho phép thay đổi kiểu falloff, nhưng ở giai đoạn này chỉ cần sử dụng kiểu mặc định.

---

## 17. Sculpting và Proportional Editing khác nhau thế nào?

| Sculpt Mode                                | Proportional Editing                            |
| ------------------------------------------ | ----------------------------------------------- |
| Dùng brush để kéo hoặc đẩy bề mặt          | Dùng đỉnh, cạnh hoặc mặt trong Edit Mode        |
| Thao tác trực quan giống điêu khắc         | Kiểm soát topology chính xác hơn                |
| Có thể dùng Dyntopo để tạo thêm topology   | Không tự tạo thêm topology                      |
| Phù hợp chỉnh hình dạng hữu cơ             | Phù hợp chỉnh hình dạng có kiểm soát            |
| Bán kính brush quyết định phạm vi tác động | Circle of Influence quyết định phạm vi tác động |

Cả hai đều có thể làm thay đổi nhiều đỉnh cùng lúc, nhưng cách điều khiển khác nhau.

---

## 18. Quy trình thực hành hoàn chỉnh

```text
Chọn nền đá đã sculpt
        │
        ▼
Chuyển sang Layout Workspace
        │
        ▼
Thêm Decimate Modifier
        │
        ▼
Giảm Ratio
        │
        ▼
Đưa số mặt xuống khoảng 150
        │
        ▼
Kiểm tra hình dạng low-poly
        │
        ▼
Chuyển sang Object Mode
        │
        ▼
Apply Modifier
        │
        ▼
Thử chỉnh trong Sculpt Mode
        │
        ▼
Trở lại Layout Workspace
        │
        ▼
Vào Edit Mode
        │
        ▼
Thử Vertex Select và Proportional Editing
        │
        ▼
Lưu file
```

---

## 19. Bài tập thực hành

### Bài tập 1 — Giảm polygon

1. Chuyển sang Layout Workspace.
2. Chọn object nền đá.
3. Thêm Decimate Modifier.
4. Giảm Ratio từ từ.
5. Đưa số mặt xuống khoảng 150.
6. Đảm bảo hình dáng chính của hòn đảo vẫn được giữ lại.

### Bài tập 2 — Apply modifier

1. Chuyển về Object Mode.
2. Mở menu của Decimate Modifier.
3. Chọn Apply.
4. Vào Edit Mode để quan sát topology mới.

### Bài tập 3 — Sculpt mesh low-poly

1. Chuyển sang Sculpt Mode.
2. Không bật Dyntopo.
3. Thử kéo và đẩy nhẹ bề mặt.
4. Quan sát cách các tam giác hiện có thay đổi.

### Bài tập 4 — Proportional Editing

1. Trở lại Layout Workspace.
2. Vào Edit Mode.
3. Chuyển sang Vertex Select.
4. Bật Proportional Editing bằng `O`.
5. Chọn một đỉnh và nhấn `G`.
6. Dùng con lăn chuột để thay đổi phạm vi ảnh hưởng.
7. Thử tạo một vùng phẳng để đặt công trình.

Không bắt buộc phải giữ lại những thay đổi thử nghiệm. Mục tiêu chính là làm quen với cảm giác điều khiển công cụ.

---

## 20. Phím tắt và công cụ liên quan

| Thao tác                       | Phím tắt hoặc vị trí                 |
| ------------------------------ | ------------------------------------ |
| Chuyển Object Mode/Edit Mode   | `Tab`                                |
| Tập trung vào object được chọn | `Numpad .`                           |
| Mở Modifier Properties         | Biểu tượng cờ lê                     |
| Thêm Decimate Modifier         | `Add Modifier > Generate > Decimate` |
| Di chuyển                      | `G`                                  |
| Scale                          | `S`                                  |
| Chọn Vertex Mode               | `1`                                  |
| Chọn Edge Mode                 | `2`                                  |
| Chọn Face Mode                 | `3`                                  |
| Làm phẳng theo trục Z          | `S`, `Z`, `0`                        |
| Bật/tắt Proportional Editing   | `O`                                  |
| Điều chỉnh phạm vi ảnh hưởng   | Con lăn chuột                        |
| Hoàn tác                       | `Ctrl + Z`                           |
| Lưu file                       | `Ctrl + S`                           |

---

## 21. Lưu ý và lỗi thường gặp

### Apply khi đang ở Edit Mode

**Hiện tượng:** Tùy chọn Apply không thể sử dụng.

**Nguyên nhân:** Blender chỉ cho Apply modifier trong Object Mode.

**Cách khắc phục:**

```text
Nhấn Tab → Object Mode → Apply
```

---

### Ratio quá thấp

**Hiện tượng:** Object bị biến dạng mạnh hoặc mất silhouette.

**Nguyên nhân:** Quá nhiều mặt đã bị loại bỏ.

**Cách khắc phục:** Tăng Ratio lên và kiểm tra lại hình dạng từ nhiều góc nhìn.

---

### Chỉnh Edit Mode nhưng không thấy topology low-poly

**Nguyên nhân:** Decimate Modifier chưa được Apply nên bạn vẫn đang chỉnh mesh gốc.

**Cách khắc phục:** Chuyển sang Object Mode và Apply modifier khi đã chắc chắn với kết quả.

---

### Không thể thay đổi Ratio sau khi Apply

Đây là hành vi bình thường. Sau khi Apply, modifier đã được chuyển thành dữ liệu mesh thật và không còn tồn tại trong Modifier Stack.

Có thể dùng:

```text
Ctrl + Z
```

nếu thao tác Apply vừa được thực hiện và chưa có quá nhiều thao tác sau đó.

---

### Sculpt không tạo thêm chi tiết

Nếu Dyntopo đang tắt, Sculpt Mode chỉ di chuyển các đỉnh hiện có. Mesh low-poly có ít đỉnh nên không thể tạo ra các chi tiết nhỏ như mesh có mật độ polygon cao.

---

### Quên bật hoặc tắt Proportional Editing

Nếu di chuyển một đỉnh nhưng nhiều đỉnh xung quanh cũng di chuyển theo, hãy kiểm tra trạng thái của Proportional Editing.

Nhấn:

```text
O
```

để tắt công cụ khi không cần sử dụng.

---

## 22. Checklist thực hành

* [ ] Đã chuyển từ Sculpting Workspace về Layout Workspace.
* [ ] Đã thêm Decimate Modifier.
* [ ] Đã giảm Ratio để tạo phong cách low-poly.
* [ ] Đã đưa số lượng mặt xuống khoảng 150.
* [ ] Đã thử bật và tắt modifier để so sánh với mesh gốc.
* [ ] Đã hiểu modifier chưa Apply không làm thay đổi vĩnh viễn mesh.
* [ ] Đã chuyển về Object Mode trước khi Apply.
* [ ] Đã Apply Decimate Modifier.
* [ ] Đã kiểm tra topology mới trong Edit Mode.
* [ ] Đã thử sculpt khi Dyntopo đang tắt.
* [ ] Đã thử Proportional Editing.
* [ ] Đã thử làm phẳng một vùng bằng `S → Z → 0`.
* [ ] Đã lưu lại file bằng `Ctrl + S`.

---

## 23. Tóm tắt bài học

**Decimate Modifier** được sử dụng để giảm số lượng polygon trong khi cố gắng giữ lại hình dạng tổng thể của object. Đây là công cụ đặc biệt hữu ích khi chuyển một mesh có nhiều chi tiết sau quá trình sculpt thành một model low-poly nhẹ hơn.

Tham số **Ratio** kiểm soát mức độ giảm polygon. Ratio càng thấp thì mesh càng có ít mặt, nhưng hình dạng cũng dễ bị biến đổi hơn.

Khi modifier chưa được Apply, mesh gốc vẫn được giữ nguyên và các thiết lập có thể tiếp tục điều chỉnh. Khi chọn **Apply**, kết quả Decimate trở thành topology thật của object. Đây là một thao tác destructive, vì vậy nên kiểm tra kỹ hoặc tạo bản sao trước khi thực hiện.

Sau khi Apply, mesh low-poly có thể tiếp tục được chỉnh sửa bằng:

* Sculpt Mode khi Dyntopo đang tắt.
* Edit Mode với Vertex, Edge và Face Select.
* Proportional Editing để di chuyển một vùng đỉnh với mức ảnh hưởng giảm dần.

### Ghi nhớ nhanh

```text
Decimate
→ Giảm polygon

Ratio
→ Kiểm soát mức giảm

Apply
→ Chuyển kết quả thành mesh thật

Sculpt không Dyntopo
→ Di chuyển topology hiện có

Proportional Editing
→ Chỉnh một đỉnh và ảnh hưởng vùng xung quanh
```
