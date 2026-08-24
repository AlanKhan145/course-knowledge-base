# 09 — Nhân bản và tạo biến thể cho nhiều con cá

| Thuộc tính       | Nội dung                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **Video**        | Không rõ tên/kênh — chỉ có transcript                                                      |
| **Phân đoạn**    | Chuẩn bị đàn cá                                                                            |
| **Thời điểm**    | 20:18–21:47                                                                                |
| **Chủ đề chính** | Nhân bản bằng `Shift + D`, thay đổi Amplitude và Phase Multiplier, tổ chức bằng Collection |

---

## 1. Mục tiêu bài học

Sau chương này, bạn có thể:

* Nhân bản một con cá đã hoàn thiện, bao gồm **mesh, Armature và animation**.
* Tạo nhiều biến thể chuyển động bằng cách thay đổi tham số của **F-Curve Modifier**.
* Tránh hiện tượng toàn bộ đàn cá bơi cùng tốc độ và lắc cùng nhịp.
* Gom các con cá vào một **Collection** để làm nguồn instance cho Geometry Nodes ở chương tiếp theo.
* Làm gọn viewport bằng cách ẩn các Armature không còn cần quan sát trực tiếp.

---

## 2. Tổng quan quy trình

```text
Cá gốc đã hoàn thiện
        │
        ├── Shift + D ──> Cá 01: tốc độ gốc
        │
        ├── Shift + D ──> Cá 02: bơi nhanh
        │                  ├── Tăng Phase Multiplier
        │                  └── Điều chỉnh Amplitude
        │
        └── Shift + D ──> Cá 03: bơi chậm
                           ├── Giảm Phase Multiplier
                           └── Điều chỉnh Amplitude

                    ↓

         Gom tất cả vào Fish Collection

                    ↓

       Dùng làm nguồn cho Geometry Nodes
```

---

## 3. Nhân bản con cá hoàn chỉnh

Con cá ở cuối chương 08 đã bao gồm:

* Mesh cá.
* Armature điều khiển.
* Hai xương chính: `body` và `tail`.
* F-Curve Modifier tạo chuyển động bơi tự động.
* Weight Paint đã được sửa sạch.

Để tạo thêm cá:

1. Chuyển sang **Object Mode**.
2. Chọn đồng thời mesh và Armature của con cá.
3. Nhấn:

```text
Shift + D
```

4. Di chuyển bản sao sang vị trí khác để dễ quan sát.
5. Lặp lại thao tác cho đến khi có khoảng ba con cá.

> [!IMPORTANT]
> Phải chọn cả **mesh và Armature** trước khi nhân bản. Nếu chỉ sao chép mesh, bản sao có thể không giữ đúng hệ thống rig và animation mong muốn.

### Có cần thay đổi kích thước ngay không?

Chưa cần.

Kích thước của từng con cá sẽ được ngẫu nhiên hóa trong Geometry Nodes ở chương sau. Vì vậy, chỉnh scale thủ công tại đây có thể khiến bạn phải thực hiện cùng một công việc hai lần.

---

## 4. Vấn đề đồng bộ hóa chuyển động

Nếu tất cả bản sao đều giữ nguyên F-Curve Modifier, chúng sẽ có:

* Cùng tốc độ lắc.
* Cùng biên độ.
* Cùng chu kỳ chuyển động.
* Kiểu bơi gần như giống hệt nhau.

Kết quả là cả đàn cá trông giống một nhóm object được sao chép máy móc.

```text
Không có biến thể:

Cá 01  ~~~~~~~~>
Cá 02  ~~~~~~~~>
Cá 03  ~~~~~~~~>
        ↑
   Cùng nhịp, cùng tốc độ
```

Ngay cả khi đã sử dụng **Phase Offset** để lệch thời điểm chuyển động, sự khác biệt vẫn có thể chưa đủ rõ. Để tạo cảm giác tự nhiên hơn, cần thay đổi thêm:

* **Amplitude** — độ mạnh của chuyển động lắc.
* **Phase Multiplier** — tốc độ lặp của chu kỳ.
* Có thể kết hợp thêm **Phase Offset** — vị trí bắt đầu trong chu kỳ.

---

## 5. Ý nghĩa các tham số chính

| Tham số              | Tác dụng                                                                      |
| -------------------- | ----------------------------------------------------------------------------- |
| **Amplitude**        | Điều khiển độ lớn của góc xoay, tức mức độ cá lắc mạnh hay nhẹ                |
| **Phase Multiplier** | Điều khiển tốc độ chạy của hàm sin, tức tốc độ lặp của chuyển động            |
| **Phase Offset**     | Dịch chuyển điểm bắt đầu của chu kỳ, giúp các con cá không lắc cùng thời điểm |

Có thể hình dung như sau:

```text
Amplitude lớn
     /\        /\
    /  \      /  \
---/----\----/----\---

Amplitude nhỏ
   /¯\      /¯\
--/---\----/---\--------
```

```text
Phase Multiplier lớn
/\/\ /\/\ /\/\ /\/\     → Chu kỳ nhanh

Phase Multiplier nhỏ
/¯¯¯\____/¯¯¯\____       → Chu kỳ chậm
```

---

## 6. Tạo biến thể bơi nhanh cho cá thứ hai

Bản sao thứ hai đã có sẵn animation từ cá gốc. Việc cần làm là chỉnh lại F-Curve Modifier để nó bơi nhanh và mạnh hơn.

### Quy trình

1. Chọn Armature của cá thứ hai.
2. Kiểm tra xương `body`.
3. Mở **Graph Editor**.
4. Chọn F-Curve điều khiển `Rotation Z`.
5. Mở phần thiết lập F-Curve Modifier.
6. Tăng **Phase Multiplier** lên khoảng `2`.
7. Điều chỉnh **Amplitude** để tăng hoặc giảm độ lắc.
8. Thực hiện thay đổi tương ứng cho xương `tail`.

Ví dụ:

| Xương  | Phase Multiplier |                     Amplitude |
| ------ | ---------------: | ----------------------------: |
| `body` |       Khoảng `2` |  Điều chỉnh theo hình dáng cá |
| `tail` |       Khoảng `2` | Có thể mạnh hơn thân một chút |

Khi Phase Multiplier tăng lên khoảng `2`, chu kỳ chuyển động sẽ diễn ra nhanh hơn đáng kể so với bản gốc.

Nếu chuyển động trở nên quá mạnh hoặc quá giật, có thể giảm Amplitude xuống khoảng:

```text
0.15
```

### Nguyên tắc quan trọng

```text
Tốc độ thân thay đổi
        │
        └── Tốc độ đuôi cũng phải thay đổi tương ứng
```

Nếu chỉ chỉnh xương `body` mà không chỉnh `tail`, chuyển động có thể trở nên thiếu liên kết:

```text
Thân:  ~~~~~~~~ nhanh
Đuôi:  ~~~~     chậm
             ↑
        Lệch nhịp
```

---

## 7. Tạo biến thể bơi chậm cho cá thứ ba

Với cá thứ ba, thực hiện theo hướng ngược lại: giảm tốc độ của chu kỳ để tạo cảm giác bơi thong thả hơn.

Thiết lập được nhắc đến trong transcript:

| Xương  | Phase Multiplier |                   Amplitude |
| ------ | ---------------: | --------------------------: |
| `body` |   Khoảng `0.085` |               Khoảng `0.15` |
| `tail` |   Khoảng `0.085` | Điều chỉnh đồng bộ với thân |

Kết quả là cá thứ ba có:

* Chu kỳ lắc chậm hơn.
* Chuyển động nhẹ nhàng hơn.
* Kiểu bơi khác biệt rõ so với cá gốc và cá nhanh.

> [!NOTE]
> Các con số trên nên được xem là giá trị tham khảo. Kết quả thực tế còn phụ thuộc vào kích thước cá, chiều dài xương, đơn vị góc xoay và thiết lập của F-Curve ban đầu.

---

## 8. So sánh ba biến thể

| Cá        | Tốc độ | Biên độ         | Vai trò                |
| --------- | ------ | --------------- | ---------------------- |
| **Cá 01** | Gốc    | Gốc             | Chuyển động chuẩn      |
| **Cá 02** | Nhanh  | Có thể mạnh hơn | Tạo cảm giác năng động |
| **Cá 03** | Chậm   | Nhẹ hơn         | Tạo cảm giác thong thả |

```text
Cá 01:  ~~~~    ~~~~    ~~~~     Tốc độ trung bình
Cá 02:  ~~~~~~~~~~~~~~~~~~~~      Tốc độ nhanh
Cá 03:  ~~~~~~~~        ~~~~~~~~  Tốc độ chậm
```

Ba kiểu bơi cơ bản này sẽ giúp Geometry Nodes tạo ra một đàn cá có độ đa dạng lớn hơn, ngay cả khi chỉ sử dụng một số ít object nguồn.

---

## 9. Chế độ thao tác cần chú ý

Trong quá trình chỉnh animation, có thể phải chuyển đổi giữa các chế độ:

| Chế độ           | Mục đích                                                            |
| ---------------- | ------------------------------------------------------------------- |
| **Object Mode**  | Chọn và quản lý Armature, nhân bản object, di chuyển vào Collection |
| **Pose Mode**    | Chọn từng xương và kiểm tra chuyển động                             |
| **Graph Editor** | Chỉnh F-Curve và các Modifier của animation                         |

Quy trình thao tác thường là:

```text
Object Mode
    ↓
Chọn Armature
    ↓
Pose Mode
    ↓
Chọn body hoặc tail
    ↓
Graph Editor
    ↓
Chỉnh F-Curve Modifier
```

Nếu không thể chọn hoặc thay đổi Armature như mong muốn, hãy quay lại **Object Mode**, chọn đúng Armature rồi tiếp tục.

---

## 10. Gom đàn cá vào Collection

Sau khi hoàn thành ba biến thể:

1. Chuyển sang **Object Mode**.
2. Chọn toàn bộ mesh và Armature của các con cá.
3. Nhấn:

```text
M
```

4. Chọn:

```text
New Collection
```

5. Đặt tên:

```text
Fish Collection
```

Cấu trúc trong Outliner có thể như sau:

```text
Scene Collection
└── Fish Collection
    ├── Fish_01
    ├── Fish_01_Armature
    ├── Fish_02
    ├── Fish_02_Armature
    ├── Fish_03
    └── Fish_03_Armature
```

Collection này sẽ được sử dụng làm nguồn dữ liệu cho Geometry Nodes ở chương 10.

---

## 11. Ẩn Armature trong viewport

Sau khi rig và animation đã hoạt động đúng, không nhất thiết phải tiếp tục hiển thị các Armature.

Trong Outliner:

1. Tìm các object Armature.
2. Nhấn biểu tượng **con mắt** bên cạnh từng Armature.
3. Giữ lại mesh cá để quan sát kết quả animation.

Việc này giúp:

* Viewport gọn hơn.
* Dễ quan sát đàn cá.
* Tránh nhầm lẫn khi chọn object.
* Chuẩn bị tốt hơn cho bước thiết lập Geometry Nodes.

> [!WARNING]
> Ẩn Armature chỉ làm nó biến mất khỏi viewport. Không nên xóa Armature vì mesh vẫn đang phụ thuộc vào hệ thống rig này để biến dạng.

---

## 12. Quy trình thực hành đề xuất

### Bước 1 — Tạo ba con cá

* Chọn mesh và Armature của cá gốc.
* Nhấn `Shift + D` hai lần.
* Đặt ba con cá ở ba vị trí khác nhau để dễ kiểm tra.

### Bước 2 — Giữ cá thứ nhất làm bản chuẩn

Không thay đổi các tham số animation của cá thứ nhất.

### Bước 3 — Tạo cá bơi nhanh

* Tăng Phase Multiplier của `body`.
* Tăng Phase Multiplier tương ứng cho `tail`.
* Điều chỉnh Amplitude nếu chuyển động quá mạnh.
* Có thể thử giá trị Amplitude khoảng `0.15`.

### Bước 4 — Tạo cá bơi chậm

* Giảm Phase Multiplier của cả `body` và `tail`.
* Thử giá trị khoảng `0.085`.
* Dùng Amplitude khoảng `0.15` hoặc tinh chỉnh theo kết quả quan sát.

### Bước 5 — Kiểm tra đồng bộ thân và đuôi

Phát animation và quan sát:

* Đuôi có theo sau thân hợp lý không?
* Tốc độ thân và đuôi có khớp nhau không?
* Có con cá nào lắc quá mạnh hoặc quá nhanh không?

### Bước 6 — Tổ chức Collection

* Chọn toàn bộ mesh và Armature.
* Nhấn `M`.
* Tạo Collection mới tên `Fish Collection`.

### Bước 7 — Làm gọn viewport

Ẩn các Armature trong Outliner, chỉ giữ lại mesh cá để quan sát.

---

## 13. Phím tắt và công cụ liên quan

| Thao tác                     | Phím tắt hoặc vị trí              |
| ---------------------------- | --------------------------------- |
| Nhân bản object              | `Shift + D`                       |
| Chuyển object vào Collection | `M`                               |
| Tạo Collection mới           | `M > New Collection`              |
| Chuyển sang Object Mode      | `Ctrl + Tab` hoặc menu Mode       |
| Chuyển sang Pose Mode        | `Ctrl + Tab` hoặc menu Mode       |
| Phát hoặc dừng animation     | `Spacebar`                        |
| Ẩn hoặc hiện object          | Biểu tượng con mắt trong Outliner |

---

## 14. Lỗi thường gặp

### 14.1. Chỉ nhân bản mesh

**Hiện tượng:** Bản sao không biến dạng hoặc không có animation đúng.

**Nguyên nhân:** Armature không được nhân bản cùng mesh.

**Cách khắc phục:** Chọn cả mesh và Armature trước khi nhấn `Shift + D`.

---

### 14.2. Chỉ chỉnh tốc độ của xương thân

**Hiện tượng:** Thân cá lắc nhanh nhưng đuôi vẫn chuyển động theo tốc độ cũ.

**Nguyên nhân:** Phase Multiplier của `body` và `tail` không đồng bộ.

**Cách khắc phục:** Kiểm tra F-Curve Modifier của cả hai xương.

---

### 14.3. Tất cả cá vẫn bơi giống nhau

**Nguyên nhân có thể:**

* Chỉ thay đổi Phase Offset.
* Không thay đổi Amplitude.
* Không thay đổi Phase Multiplier.
* Các bản sao vẫn dùng cùng một Action hoặc dữ liệu animation liên kết.

**Cách khắc phục:**

* Tạo khác biệt về tốc độ.
* Tạo khác biệt về biên độ.
* Kiểm tra dữ liệu animation có đang dùng chung hay không.
* Tạo bản sao độc lập cho Action nếu cần chỉnh riêng từng Armature.

> [!IMPORTANT]
> Nếu thay đổi F-Curve của một con nhưng tất cả các con khác cũng thay đổi theo, nhiều khả năng các Armature đang dùng chung một Action. Khi đó cần tạo **Single User** cho dữ liệu animation trước khi chỉnh từng bản sao.

---

### 14.4. Animation quá nhanh hoặc quá mạnh

**Nguyên nhân:** Phase Multiplier hoặc Amplitude được tăng quá cao.

**Cách khắc phục:**

* Giảm Amplitude trước nếu góc lắc quá lớn.
* Giảm Phase Multiplier nếu chu kỳ quá nhanh.
* Phát animation liên tục trong lúc tinh chỉnh để đánh giá trực quan.

---

### 14.5. Armature bị instance cùng mesh

Ở chương sau, khi dùng toàn bộ `Fish Collection` làm nguồn cho Geometry Nodes, các Armature có thể bị đưa vào hệ thống instance nếu Collection chưa được tổ chức lại.

Giải pháp có thể gồm:

* Tạo một Collection chỉ chứa các mesh cá dùng làm instance.
* Giữ Armature trong Collection riêng.
* Hoặc loại Armature khỏi Collection nguồn khi thiết lập Geometry Nodes.

Không nên xóa Armature khỏi scene vì mesh vẫn cần rig để duy trì chuyển động.

---

## 15. Checklist thực hành

* [ ] Đã chọn cả mesh và Armature trước khi nhân bản.
* [ ] Đã tạo ít nhất ba con cá.
* [ ] Cá thứ nhất giữ tốc độ bơi gốc.
* [ ] Cá thứ hai có Phase Multiplier lớn hơn.
* [ ] Cá thứ ba có Phase Multiplier nhỏ hơn.
* [ ] Đã điều chỉnh Amplitude riêng cho từng biến thể.
* [ ] Đã chỉnh cả xương `body` và `tail`.
* [ ] Thân và đuôi của từng con cá chuyển động đồng bộ.
* [ ] Các con cá không còn lắc cùng tốc độ và cùng biên độ.
* [ ] Đã gom toàn bộ object vào `Fish Collection`.
* [ ] Đã ẩn Armature để làm gọn viewport.
* [ ] Đã kiểm tra Action có bị dùng chung ngoài ý muốn hay không.

---

## 16. Tóm tắt

Ở chương này, con cá hoàn chỉnh được nhân bản thành nhiều phiên bản khác nhau. Thay vì chỉ thay đổi vị trí hoặc kích thước, mỗi bản sao được điều chỉnh trực tiếp các tham số của F-Curve Modifier:

* **Amplitude** tạo khác biệt về độ mạnh của chuyển động.
* **Phase Multiplier** tạo khác biệt về tốc độ bơi.
* **Phase Offset** giúp các con cá không bắt đầu chu kỳ cùng lúc.

Sau khi tạo được các biến thể bơi nhanh, bơi chậm và bơi ở tốc độ gốc, toàn bộ object được gom vào `Fish Collection`. Collection này sẽ trở thành nguồn đầu vào cho Geometry Nodes, nơi đàn cá được phân bố với số lượng lớn và ngẫu nhiên hóa thêm về vị trí, hướng và kích thước.

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
