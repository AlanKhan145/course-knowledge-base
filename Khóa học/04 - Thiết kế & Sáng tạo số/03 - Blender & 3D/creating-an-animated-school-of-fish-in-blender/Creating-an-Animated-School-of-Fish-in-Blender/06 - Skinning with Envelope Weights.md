# 06 — Gắn Mesh vào Armature bằng Envelope Weights

| Thuộc tính       | Nội dung                                                         |
| ---------------- | ---------------------------------------------------------------- |
| **Video**        | Không rõ tên/kênh — chỉ có transcript                            |
| **Phân đoạn**    | Rigging Part 2                                                   |
| **Thời điểm**    | `15:48–16:18`                                                    |
| **Chủ đề chính** | Parent bằng Envelope Weights, kiểm tra biến dạng trong Pose Mode |

---

## 1. Mục tiêu bài học

Sau phần này, bạn có thể:

* Gắn mesh cá vào Armature bằng phương pháp **Envelope Weights**.
* Hiểu nguyên lý xác định vùng ảnh hưởng của Envelope Weights.
* Phân biệt cơ bản giữa **Envelope Weights** và **Automatic Weights**.
* Kiểm tra nhanh khả năng biến dạng của mesh trong **Pose Mode**.
* Nhận biết hiện tượng **weight bleed** tại vùng nối giữa thân và đuôi.

---

## 2. Tổng quan quy trình

```text
Chọn mesh cá
     │
     ▼
Giữ Shift và chọn Armature
     │
     ▼
Armature trở thành Active Object
     │
     ▼
Ctrl + P
     │
     ▼
Armature Deform
with Envelope Weights
     │
     ▼
Chuyển sang Pose Mode
     │
     ▼
Xoay xương đuôi để kiểm tra
     │
     ▼
Phát hiện Weight Bleed nếu có
```

> [!IMPORTANT]
> Thứ tự chọn object rất quan trọng: **mesh được chọn trước, Armature được chọn sau cùng**.

---

## 3. Gắn mesh cá vào Armature

Sau khi Armature đã được dựng xong ở chương 05, bước tiếp theo là liên kết mesh cá với hệ thống xương.

### Trình tự lựa chọn

1. Chọn **mesh cá**.
2. Giữ `Shift`.
3. Chọn **Armature** sau cùng.

Object được chọn cuối cùng sẽ trở thành **Active Object**. Trong trường hợp này, Armature cần là active object để Blender hiểu rằng mesh sẽ được parent và biến dạng theo hệ thống xương.

Sau đó:

```text
Ctrl + P
→ Armature Deform
→ With Envelope Weights
```

Tùy chọn đầy đủ trong menu là:

> **Armature Deform With Envelope Weights**

Sau khi thực hiện, Blender sẽ tự động:

* Parent mesh cá vào Armature.
* Thêm **Armature Modifier** vào mesh.
* Tạo các **Vertex Group** tương ứng với những deform bone.
* Tính trọng số ảnh hưởng dựa trên vùng envelope của từng xương.

---

## 4. Envelope Weights hoạt động như thế nào?

Mỗi xương có một vùng ảnh hưởng bao quanh, thường mang hình dạng gần giống một **viên con nhộng**.

```text
       Vùng Envelope của xương

          ┌───────────────┐
       ╭──┘               └──╮
      ●──────── Bone ─────────●
       ╰──┐               ┌──╯
          └───────────────┘
```

Các vertex nằm:

* **Gần xương** sẽ nhận weight cao hơn.
* **Xa xương** sẽ nhận weight thấp hơn.
* **Ngoài vùng envelope** có thể không nhận ảnh hưởng từ xương đó.

Khi envelope của hai xương chồng lên nhau, một vertex có thể nhận ảnh hưởng từ cả hai xương.

```text
Envelope thân             Envelope đuôi
───────────────╲       ╱───────────────
                ╲█████╱
                 ╲███╱
                  ╲█╱
           Vùng ảnh hưởng chồng lấn
```

Chính vùng chồng lấn này có thể tạo ra hiện tượng **weight bleed**.

---

## 5. Vì sao sử dụng Envelope Weights?

Trong bài học này, mesh cá có cấu trúc tương đối đơn giản:

* Thân cá thuôn dài.
* Các xương nằm gần trục trung tâm của mesh.
* Số lượng xương ít.
* Không có nhiều chi tiết hình học phức tạp.
* Vùng thân và đuôi tương đối dễ phân chia.

Vì vậy, envelope hình con nhộng của từng xương đã đủ để mô tả vùng ảnh hưởng ban đầu.

Tác giả nhận định rằng phương pháp này:

> “Sẽ ổn cho một hình dạng đơn giản như thế này.”

---

## 6. Envelope Weights và Automatic Weights

| Tiêu chí                  | Envelope Weights                             | Automatic Weights                                                            |
| ------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| **Cách tính**             | Dựa trên vùng envelope bao quanh từng xương  | Dựa trên thuật toán heat weighting và quan hệ không gian giữa xương với mesh |
| **Thiết lập ban đầu**     | Nhanh, dễ hiểu                               | Tự động và thường chính xác hơn                                              |
| **Phù hợp với**           | Mesh đơn giản, ít xương, hình dạng thuôn dài | Nhân vật hoặc sinh vật có cấu trúc phức tạp                                  |
| **Khả năng weight bleed** | Dễ xảy ra khi envelope chồng lấn             | Vẫn có thể xảy ra nhưng thường ít rõ hơn                                     |
| **Khả năng tinh chỉnh**   | Có thể chỉnh trực tiếp bán kính envelope     | Thường chỉnh bằng Weight Paint hoặc Vertex Group                             |
| **Độ chính xác**          | Phụ thuộc mạnh vào kích thước envelope       | Thường tốt hơn với mesh hữu cơ phức tạp                                      |

> [!NOTE]
> Envelope Weights không nhất thiết luôn “tốt hơn” hoặc “nhanh hơn” Automatic Weights. Nó chỉ đặc biệt phù hợp khi cấu trúc mesh và hệ thống xương đủ đơn giản.

---

## 7. Kiểm tra kết quả trong Pose Mode

Ngay sau khi parent, mesh cá vẫn giữ nguyên hình dạng.

Đây là hành vi bình thường vì Armature đang ở **Rest Pose** và chưa có xương nào bị biến đổi.

### Cách kiểm tra

1. Chọn Armature.
2. Chuyển từ **Object Mode** sang **Pose Mode**.
3. Chọn xương đuôi, chẳng hạn xương `tail`.
4. Nhấn `R` để xoay xương.
5. Quan sát chuyển động của mesh.

```text
Rest Pose                      Pose thử nghiệm

──────────────►                ──────────╲
Thân       Đuôi                Thân        ╲ Đuôi
```

Nếu thiết lập đúng:

* Vùng đuôi sẽ đi theo xương đuôi.
* Vùng thân vẫn tương đối ổn định.
* Khu vực nối giữa thân và đuôi sẽ uốn cong.

Sau khi kiểm tra, có thể dùng:

```text
Alt + R
```

để xóa giá trị xoay của xương và đưa nó về tư thế ban đầu.

---

## 8. Vấn đề được phát hiện: Weight Bleed

Khi thử xoay xương đuôi, tác giả phát hiện:

> “Có một vấn đề nhỏ với lưới ở đó.”

Vấn đề này xuất hiện tại khu vực nối giữa thân và đuôi. Một số vertex có thể đang nhận ảnh hưởng từ xương không mong muốn.

Ví dụ:

```text
Kết quả mong muốn

Xương thân  ─────────────┐
                         ├── Vùng chuyển tiếp
Xương đuôi              ─┘

Khi xảy ra Weight Bleed

Xương thân  ────────────────► ảnh hưởng quá sâu vào đuôi
Xương đuôi       ───────────► ảnh hưởng ngược vào thân
```

### Biểu hiện thường gặp

* Một phần đuôi bị kéo theo xương thân.
* Thân cá bị méo khi chỉ xoay xương đuôi.
* Vùng nối bị lõm, phồng hoặc xoắn bất thường.
* Chuyển động giữa hai vùng không rõ ràng.
* Một số vertex dường như “dính” vào cả hai xương.

Nguyên nhân phổ biến là envelope của hai xương liền kề đang chồng lấn quá nhiều.

Vấn đề này sẽ được xử lý chi tiết ở **chương 08**, sau khi hoàn thành thiết lập chu kỳ bơi tự động trong chương 07.

---

## 9. Quy trình thực hành

### Bước 1 — Chọn đúng thứ tự object

```text
Chọn mesh cá
→ Giữ Shift
→ Chọn Armature
```

Đảm bảo Armature có viền active sáng hơn mesh.

### Bước 2 — Parent bằng Envelope Weights

Nhấn:

```text
Ctrl + P
```

Chọn:

```text
Armature Deform
└── With Envelope Weights
```

### Bước 3 — Chuyển sang Pose Mode

Chọn Armature và sử dụng menu chế độ:

```text
Object Mode
→ Pose Mode
```

### Bước 4 — Kiểm tra xương đuôi

* Chọn xương `tail`.
* Nhấn `R` để xoay.
* Quan sát vùng thân, đuôi và khu vực chuyển tiếp.

### Bước 5 — Ghi nhận lỗi

Kiểm tra xem có dấu hiệu:

* Thân bị kéo theo đuôi.
* Đuôi bị xương thân giữ lại.
* Mesh bị lõm hoặc phồng bất thường.
* Vùng ảnh hưởng không đúng với cấu trúc cá.

Ở bước này chỉ cần **phát hiện và ghi nhận**, chưa nhất thiết phải sửa ngay.

---

## 10. Điều chỉnh Envelope của xương

Trong trường hợp vùng ảnh hưởng quá lớn hoặc quá nhỏ, có thể chỉnh envelope của từng xương.

### Vị trí thiết lập

```text
Bone Properties
→ Deform
→ Envelope
```

Các thông số thường gặp gồm:

| Thông số              | Chức năng                                           |
| --------------------- | --------------------------------------------------- |
| **Envelope Distance** | Mở rộng hoặc thu hẹp vùng ảnh hưởng bên ngoài xương |
| **Head Radius**       | Điều chỉnh bán kính envelope tại đầu xương          |
| **Tail Radius**       | Điều chỉnh bán kính envelope tại cuối xương         |
| **Envelope Multiply** | Nhân mức ảnh hưởng envelope của xương               |

> [!TIP]
> Có thể bật kiểu hiển thị **Envelope** cho Armature để quan sát trực tiếp vùng ảnh hưởng của từng xương trong viewport.

Tuy nhiên, trong workflow của video, lỗi weight bleed sẽ được xử lý sau bằng cách chỉnh trọng số hoặc nhóm vertex thay vì dừng lại quá lâu ở bước này.

---

## 11. Phím tắt và công cụ liên quan

| Thao tác                     | Phím tắt/Vị trí                                      |
| ---------------------------- | ---------------------------------------------------- |
| Chọn thêm object             | `Shift + Click`                                      |
| Mở menu Parent               | `Ctrl + P`                                           |
| Parent bằng Envelope Weights | `Ctrl + P → Armature Deform → With Envelope Weights` |
| Chuyển sang Pose Mode        | Mode Dropdown → Pose Mode                            |
| Xoay xương                   | `R`                                                  |
| Xóa giá trị xoay của xương   | `Alt + R`                                            |
| Xóa vị trí của xương         | `Alt + G`                                            |
| Xóa tỉ lệ của xương          | `Alt + S`                                            |
| Chỉnh Envelope               | Bone Properties → Deform → Envelope                  |
| Kiểm tra Armature Modifier   | Mesh → Modifiers Properties                          |
| Kiểm tra Vertex Group        | Mesh → Object Data Properties → Vertex Groups        |

---

## 12. Lỗi thường gặp

### 12.1. Không thấy tùy chọn Armature Deform

**Nguyên nhân:** Chọn sai thứ tự object hoặc Armature không phải active object.

**Cách khắc phục:**

```text
Bỏ chọn tất cả
→ Chọn mesh
→ Shift + chọn Armature
→ Ctrl + P
```

---

### 12.2. Xoay xương nhưng mesh không di chuyển

Kiểm tra:

* Mesh đã được parent đúng chưa.
* Mesh có **Armature Modifier** hay chưa.
* Trường `Object` trong Armature Modifier có trỏ đúng Armature không.
* Xương có bật tùy chọn **Deform** không.
* Vertex Group có được tạo đúng tên xương không.
* Armature Modifier có đang được bật trong viewport không.

---

### 12.3. Toàn bộ mesh di chuyển cứng theo Armature

Có thể bạn đã chọn:

```text
Ctrl + P → Object
```

thay vì:

```text
Ctrl + P
→ Armature Deform
→ With Envelope Weights
```

Parent kiểu Object chỉ làm mesh đi theo toàn bộ Armature, không tạo biến dạng theo từng xương.

---

### 12.4. Vùng đuôi hoặc thân bị méo

Nguyên nhân có thể gồm:

* Envelope của xương quá lớn.
* Hai envelope chồng lấn quá nhiều.
* Vertex nhận weight từ sai xương.
* Tổng trọng số giữa các nhóm không phù hợp.
* Mesh có quá ít topology tại vùng cần uốn.

Đây là vấn đề sẽ được xử lý ở chương 08.

---

### 12.5. Mesh biến dạng không mượt

Envelope Weights chỉ xác định xương nào ảnh hưởng đến vertex. Độ mượt khi uốn còn phụ thuộc vào mật độ topology.

```text
Ít edge loop                     Nhiều edge loop

●────────●────────●              ●──●──●──●──●──●
      Uốn gãy                         Uốn mượt hơn
```

Nếu vùng thân hoặc đuôi có quá ít edge loop, mesh vẫn có thể bị gãy khúc dù weight đã tương đối chính xác.

---

## 13. Checklist thực hành

* [ ] Đã chọn mesh cá trước.
* [ ] Đã giữ `Shift` và chọn Armature sau cùng.
* [ ] Armature là active object.
* [ ] Đã dùng **Armature Deform With Envelope Weights**.
* [ ] Mesh đã có Armature Modifier.
* [ ] Các Vertex Group tương ứng với xương đã được tạo.
* [ ] Đã chuyển sang Pose Mode.
* [ ] Đã xoay thử xương đuôi.
* [ ] Mesh biến dạng theo Armature.
* [ ] Đã kiểm tra vùng nối giữa thân và đuôi.
* [ ] Đã ghi nhận hiện tượng weight bleed nếu có.
* [ ] Đã đưa xương về tư thế ban đầu sau khi kiểm tra.

---

## 14. Tóm tắt

**Envelope Weights** là phương pháp skinning đơn giản, trực quan và phù hợp với mesh cá có cấu trúc thuôn dài, ít xương và không quá nhiều chi tiết phức tạp.

Quy trình chính gồm:

```text
Mesh
→ Shift + Armature
→ Ctrl + P
→ With Envelope Weights
→ Pose Mode
→ Xoay xương đuôi để kiểm tra
```

Phương pháp này cho kết quả đủ tốt để tiếp tục rig, nhưng vùng envelope của các xương liền kề có thể chồng lấn và gây ra **weight bleed**. Lỗi này không ảnh hưởng đến việc tiếp tục bài học và sẽ được chỉnh sửa ở chương 08.
