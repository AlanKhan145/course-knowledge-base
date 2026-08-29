# 028 — Pillar Details: Knife & Bisect

| Thuộc tính       | Nội dung                                                |
| ---------------- | ------------------------------------------------------- |
| **Module**       | Module 02 — Modular Dungeon                             |
| **Bài học**      | Pillar Details – Knife & Bisect                         |
| **Thời lượng**   | 9:38                                                    |
| **Chủ đề chính** | Tạo chi tiết sứt mẻ cho cột bằng Bevel, Knife và Bisect |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tạo các vết sứt nhỏ trên cạnh cột bằng **Vertex Bevel** và **Edge Bevel**.
* Dùng **Edge Slide** để ghép các vertex và tạo hình khuyết trên đá.
* Hiểu vì sao **Loop Cut** không thể đi qua một số vùng topology.
* Dùng **Knife Tool** để tạo đường cắt thủ công vòng quanh mesh.
* Dùng **Bisect Tool** để cắt đồng thời nhiều mặt bằng một mặt phẳng.
* Tạo các vết hư hỏng ngẫu nhiên nhưng vẫn giữ được hình dáng hợp lý của cột.
* Tránh các lỗi topology và lỗi thao tác thường gặp khi dùng Knife và Bisect.

---

## 2. Quy trình tổng quát

```text
Tạo đường cắt bổ sung
        │
        ├── Mesh toàn Quad ──→ Loop Cut
        │
        ├── Topology phức tạp ─→ Knife
        │
        └── Muốn cắt thẳng nhiều mặt ─→ Bisect
                         │
                         ▼
            Chọn vertex hoặc edge
                         │
                         ▼
               Bevel tạo mặt mới
                         │
                         ▼
              Edge Slide ghép đỉnh
                         │
                         ▼
                Tạo vết sứt trên cột
```

---

## 3. Tạo vết sứt từ một vertex

Khi muốn tạo một vết sứt tại một điểm đơn lẻ trên cạnh cột, có thể bevel trực tiếp vertex đó.

### Các bước thực hiện

1. Chọn cột gốc.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Chuyển sang **Vertex Select**.
4. Chọn một vertex nằm trên cạnh ngoài.
5. Nhấn:

```text
Ctrl + B → V
```

Hoặc sử dụng phím tắt trực tiếp:

```text
Ctrl + Shift + B
```

6. Kéo chuột để xác định kích thước vết sứt.
7. Cuộn con lăn chuột để đặt số segment về `1`.
8. Nhấn chuột trái để xác nhận.
9. Chọn hai vertex mới bên trong.
10. Nhấn `J` để nối chúng lại.

### Vì sao cần nhấn `J`?

Blender đôi khi tự chia các mặt tam giác theo hướng không mong muốn. Khi chọn hai vertex bên trong và nhấn `J`, ta xác nhận rõ đường cạnh cần tạo.

```text
Vertex ban đầu
      │
      ▼
Vertex Bevel
      │
      ▼
Hai vertex mới
      │
      ▼
Nhấn J để nối
      │
      ▼
Vết sứt hoàn chỉnh
```

> Việc nối hai vertex bằng `J` giúp topology ổn định và tránh Blender chia tam giác sai hướng.

---

## 4. Tạo vết sứt từ một edge

Ngoài việc bevel một vertex, ta có thể bevel toàn bộ một cạnh để tạo một vùng khuyết lớn hơn.

### Các bước thực hiện

1. Chuyển sang **Edge Select**.
2. Chọn cạnh cần tạo vết sứt.
3. Nhấn `Ctrl + B`.
4. Cuộn con lăn chuột để tạo thêm một đường cắt ở giữa.
5. Nhấn chuột trái để xác nhận.
6. Chuyển sang **Vertex Select**.
7. Chọn một vertex phía trong.
8. Nhấn `G` hai lần:

```text
G → G
```

9. Trượt vertex sang vertex đối diện.
10. Thực hiện tương tự với vertex còn lại.

Khi hai vertex trượt vào nhau, chúng cần được hợp nhất để tạo thành phần lõm.

### Auto Merge Vertices

Trước khi trượt các vertex vào nhau, cần bật:

```text
Auto Merge Vertices
```

Nếu không bật Auto Merge, hai vertex có thể nằm chồng lên nhau nhưng vẫn là hai điểm riêng biệt.

> Vertex chồng nhau mà chưa merge có thể gây lỗi shading, topology và các thao tác chỉnh sửa sau này.

---

## 5. Điều chỉnh vị trí vết sứt

Sau khi tạo bevel, có thể thay đổi độ cao của vết sứt bằng cách chọn toàn bộ các vertex liên quan và di chuyển theo trục `Z`.

```text
G → Z
```

Ví dụ:

* Đưa vết sứt lên gần đầu khối đá.
* Đưa vết sứt xuống gần chân khối đá.
* Tránh để tất cả các vết sứt nằm cùng một độ cao.

Nếu muốn đặt một cạnh mới trước khi bevel, có thể dùng **Edge Slide**:

```text
G → G
```

Sau đó nhập giá trị để căn đều, chẳng hạn:

```text
E → 4
```

Tùy phiên bản Blender và trạng thái thao tác, tùy chọn **Even** giúp giữ khoảng cách trượt đều so với cạnh tham chiếu.

---

## 6. Giới hạn của Loop Cut

Thông thường, có thể nhấn `Ctrl + R` để thêm một đường cắt vòng quanh mesh. Tuy nhiên, Loop Cut chỉ hoạt động liên tục qua các mặt **quad**.

### Quad là gì?

Quad là một mặt có đúng bốn cạnh:

```text
●────●
│    │
│    │
●────●
```

Nếu đường cắt gặp một mặt có năm cạnh trở lên, Loop Cut sẽ bị dừng.

### N-gon là gì?

N-gon là một mặt có nhiều hơn bốn cạnh.

Ví dụ, một mặt có năm cạnh:

```text
    ●
   / \
  ●   ●
  │   │
  ●───●
```

Trong bài học, một phần của cột có mặt năm cạnh. Vì vậy:

* `Ctrl + R` hoạt động ở các vùng quad.
* Đường Loop Cut dừng lại khi gặp n-gon.
* Blender không thể tự xác định đường đi tiếp theo của vòng cắt.

```text
Quad → Quad → Quad → N-gon
  ✓      ✓      ✓        ✗
```

Khi Loop Cut không hoạt động, có thể thay thế bằng:

* **Knife Tool** để cắt thủ công.
* **Bisect Tool** để cắt bằng một mặt phẳng.

---

## 7. Knife Tool

### 7.1. Công dụng

Knife Tool cho phép tạo các đường cắt thủ công trên bề mặt mesh.

Phím tắt:

```text
K
```

Knife thích hợp khi:

* Mesh có n-gon.
* Loop Cut không thể đi xuyên qua topology.
* Muốn kiểm soát chính xác từng điểm cắt.
* Muốn tạo một đường cắt vòng quanh khối đá không đều.

---

### 7.2. Cách sử dụng Knife

1. Vào **Edit Mode**.
2. Nhấn `K`.
3. Di chuyển chuột đến một cạnh.

Khi Knife nhận diện được cạnh, cạnh đó sẽ được làm nổi bật. Khi trỏ vào một vertex, điểm snap thường được hiển thị rõ hơn.

4. Nhấn chuột trái để đặt điểm đầu tiên.
5. Tiếp tục nhấn chuột trái trên từng cạnh tiếp theo.
6. Giữ và kéo chuột giữa để xoay viewport trong khi vẫn đang dùng Knife.
7. Đi vòng quanh toàn bộ mesh.
8. Nhấn vào điểm cuối hoặc điểm bắt đầu.
9. Nhấn `Enter` để xác nhận.

```text
K
│
├── Click cạnh 1
├── Click cạnh 2
├── Click cạnh 3
├── Xoay viewport bằng MMB
├── Tiếp tục click từng cạnh
└── Enter để hoàn thành
```

---

### 7.3. Cắt vòng quanh khối đá

Mục tiêu trong bài học là tạo một đường cắt ngang vòng quanh phần giữa của khối đá.

Do khối đá có topology không hoàn toàn giống nhau ở mọi phía, cần:

* Quan sát kỹ từng cạnh.
* Click thủ công trên từng cạnh.
* Xoay viewport để đi hết một vòng.
* Kết thúc chính xác tại điểm đầu.

Sau khi xác nhận, Knife tạo ra một vòng cạnh mới có thể dùng để tạo các vết sứt.

---

### 7.4. Lỗi khi bỏ qua nhiều cạnh

Knife đôi khi cho phép click từ một điểm sang một điểm cách xa vài mặt. Blender sẽ cố tự suy đoán đường cắt đi qua các mặt ở giữa.

Tuy nhiên, cách này có thể gây ra:

* Đường cắt đi sai hướng.
* Xuất hiện cạnh thừa.
* Đường cắt chạy “loạn” quanh mesh.
* Topology bị chia không như mong muốn.
* Knife mất định hướng khi xoay viewport.

Ví dụ:

```text
Cách rủi ro:
Điểm A ─────────────→ Điểm D
         Blender tự đoán

Cách an toàn:
Điểm A → Điểm B → Điểm C → Điểm D
         Click từng cạnh
```

### Cách xử lý

* Nhấn `Ctrl + Z` để hoàn tác điểm cắt vừa đặt.
* Nhấn `Esc` để hủy toàn bộ thao tác Knife hiện tại.
* Nhấn `K` và thực hiện lại.
* Click từng cạnh liên tiếp thay vì bỏ qua nhiều cạnh.

> Để có kết quả ổn định nhất, hãy đặt điểm Knife trên từng cạnh khi đi vòng quanh mesh.

---

## 8. Bisect Tool

### 8.1. Công dụng

Bisect cắt mesh bằng một mặt phẳng vô hạn. Công cụ này phù hợp khi cần tạo một đường cắt thẳng xuyên qua nhiều mặt cùng lúc.

Khác với Knife:

* Knife tạo đường cắt theo nhiều điểm do người dùng đặt.
* Bisect tạo đường cắt theo một mặt phẳng thẳng.

```text
Knife
Điểm → Điểm → Điểm → Đường cắt thủ công

Bisect
Kéo một đường → Tạo mặt phẳng cắt xuyên mesh
```

---

### 8.2. Chọn hình học trước khi Bisect

Bisect chỉ tác động lên các vertex, edge hoặc face đang được chọn.

Do đó, trước khi sử dụng công cụ, cần nhấn:

```text
A
```

để chọn toàn bộ phần mesh muốn cắt.

Nếu không chọn toàn bộ mesh, Bisect có thể:

* Chỉ cắt một vài mặt.
* Không tạo được vòng cạnh hoàn chỉnh.
* Bỏ sót phần phía sau của khối đá.

---

### 8.3. Cách sử dụng Bisect

1. Vào **Edit Mode**.
2. Nhấn `A` để chọn toàn bộ.
3. Chọn **Bisect Tool** trong thanh công cụ bên trái.
4. Kéo một đường ngang qua khối đá.
5. Blender tạo một mặt phẳng cắt xuyên qua phần mesh đã chọn.
6. Điều chỉnh vị trí bằng gizmo của Bisect nếu cần.

Bisect có thể tạo nhanh một vòng cạnh ngang quanh khối đá.

---

### 8.4. Các tùy chọn của Bisect

Sau khi cắt, Blender hiển thị các tùy chọn:

| Tùy chọn         | Chức năng                                   |
| ---------------- | ------------------------------------------- |
| **Clear Inner**  | Xóa hình học ở phía bên trong mặt phẳng cắt |
| **Clear Outer**  | Xóa hình học ở phía bên ngoài mặt phẳng cắt |
| **Fill**         | Tạo mặt mới để đóng phần bị hở sau khi xóa  |
| **Plane Point**  | Điều chỉnh vị trí mặt phẳng cắt             |
| **Plane Normal** | Điều chỉnh hướng của mặt phẳng cắt          |

Trong bài học này, không cần xóa phần nào của khối đá. Bisect chỉ được dùng để tạo thêm một vòng cạnh.

Do đó:

```text
Clear Inner: Tắt
Clear Outer: Tắt
Fill: Không cần thiết
```

---

## 9. So sánh Loop Cut, Knife và Bisect

| Công cụ                 | Khi nào sử dụng                          | Ưu điểm                         | Hạn chế                                    |
| ----------------------- | ---------------------------------------- | ------------------------------- | ------------------------------------------ |
| **Loop Cut** `Ctrl + R` | Mesh có các vòng quad liên tục           | Nhanh, đều, dễ căn chỉnh        | Không đi xuyên qua n-gon hoặc pole         |
| **Knife** `K`           | Topology không đều hoặc cần cắt thủ công | Linh hoạt, kiểm soát từng điểm  | Dễ tạo đường cắt sai nếu bỏ qua nhiều cạnh |
| **Bisect**              | Cần cắt thẳng xuyên nhiều mặt            | Nhanh, chính xác theo mặt phẳng | Phải chọn đúng hình học trước khi cắt      |

### Quy tắc lựa chọn

```text
Topology toàn Quad?
        │
      Có ─────→ Loop Cut
        │
      Không
        │
        ▼
Muốn đường cắt thẳng xuyên mesh?
        │
    Có ───────→ Bisect
        │
    Không
        │
        ▼
      Knife
```

---

## 10. Tạo các vết sứt sau khi cắt

Sau khi đã tạo vòng cạnh bằng Knife hoặc Bisect, có thể tiếp tục tạo các vết sứt.

### Cách 1: Sứt từ một vertex

1. Chọn một vertex trên vòng cạnh mới.
2. Nhấn `Ctrl + Shift + B`.
3. Kéo để tạo bevel.
4. Đặt segment về `1`.
5. Chọn hai vertex phía trong.
6. Nhấn `J` để nối.

### Cách 2: Sứt từ một edge

1. Chuyển sang **Edge Select**.
2. Chọn một cạnh.
3. Nhấn `Ctrl + B`.
4. Tạo một đường cắt ở giữa.
5. Chuyển sang **Vertex Select**.
6. Dùng `G → G` để trượt hai vertex vào nhau.
7. Đảm bảo Auto Merge đang bật.

### Cách 3: Thay đổi vị trí trước khi bevel

1. Chọn vertex hoặc edge.
2. Dùng `G → G` để trượt dọc theo cạnh.
3. Đặt nó tại vị trí bất đối xứng.
4. Thực hiện Vertex Bevel hoặc Edge Bevel.

---

## 11. Sửa hướng chia tam giác sai

Sau khi Vertex Bevel, Blender có thể chia các mặt tam giác theo hướng không mong muốn.

Hiện tượng thường gặp:

* Tam giác hướng vào phía trong vết sứt.
* Đường chéo chạy qua bề mặt ngoài.
* Vùng bevel có vẻ bị xoắn hoặc lộn xộn.

### Cách sửa

1. Chọn hai vertex cần nối.
2. Nhấn:

```text
J
```

Blender sẽ tạo cạnh nối trực tiếp giữa chúng và điều chỉnh lại cách chia mặt.

> Đây là bước quan trọng sau khi bevel một vertex trên topology không hoàn toàn đối xứng.

---

## 12. Tạo chi tiết ngẫu nhiên hợp lý

Các vết sứt trên đá nên có sự ngẫu nhiên, nhưng không nên hoàn toàn thiếu kiểm soát.

### Nên làm

* Thay đổi độ cao giữa các vết sứt.
* Xen kẽ vết nhỏ và vết trung bình.
* Đặt một số vết tại góc, một số vết trên cạnh thẳng.
* Tạo số lượng khác nhau trên từng khối đá.
* Xoay quanh cột để kiểm tra tất cả các phía.
* Giữ lại nhiều vùng bề mặt nguyên vẹn.

### Không nên

* Đặt tất cả vết sứt ở cùng một độ cao.
* Tạo vết sứt trên mọi cạnh.
* Dùng cùng một kích thước bevel cho tất cả các vết.
* Làm hư hỏng quá nhiều khiến cột mất hình dáng.
* Tạo topology phức tạp không cần thiết.

```text
Tốt:
  nhỏ ─── trung bình ───── nhỏ
      vị trí không đều

Không tốt:
  lớn ── lớn ── lớn ── lớn
      khoảng cách đều nhau
```

> Mục tiêu là tạo cảm giác đá cũ và bị hư hỏng tự nhiên, không phải phá hủy toàn bộ hình dáng của cột.

---

## 13. Cắt nhiều cột cùng lúc bằng Bisect

Bisect có thể tác động lên nhiều object nếu chúng cùng được chỉnh sửa trong **Multi-Object Edit Mode**.

### Quy trình

1. Chọn hai cột.
2. Nhấn `Tab` để vào Edit Mode.
3. Nhấn `A` để chọn toàn bộ hình học của cả hai cột.
4. Chọn Bisect Tool.
5. Kéo một đường ngang qua cả hai.
6. Một vòng cắt được tạo trên cả hai mesh cùng lúc.

Ưu điểm:

* Tiết kiệm thời gian.
* Đường cắt có cùng độ cao.
* Dễ tạo cấu trúc cơ bản đồng nhất.

Sau đó, các vết sứt nên được chỉnh khác nhau trên từng cột để tránh cảm giác sao chép.

---

## 14. Trở về công cụ Select sau khi dùng Bisect

Sau khi dùng Bisect, công cụ này vẫn có thể đang được kích hoạt.

Nếu tiếp tục click trong viewport, Blender có thể bắt đầu một thao tác cắt mới thay vì chọn vertex hoặc edge.

Do đó, sau khi hoàn thành:

1. Chọn lại **Select Box** trong thanh công cụ.
2. Hoặc sử dụng phím tắt chọn phù hợp.
3. Kiểm tra biểu tượng công cụ đang hoạt động trước khi tiếp tục.

```text
Dùng Bisect
    │
    ▼
Hoàn thành đường cắt
    │
    ▼
Chuyển về Select Box
    │
    ▼
Tiếp tục chọn và chỉnh mesh
```

---

## 15. Phím tắt quan trọng

| Phím tắt               | Chức năng                               |
| ---------------------- | --------------------------------------- |
| `Tab`                  | Chuyển giữa Object Mode và Edit Mode    |
| `1`                    | Vertex Select                           |
| `2`                    | Edge Select                             |
| `3`                    | Face Select                             |
| `A`                    | Chọn toàn bộ                            |
| `Ctrl + B`             | Bevel cạnh                              |
| `Ctrl + B`, sau đó `V` | Chuyển từ Edge Bevel sang Vertex Bevel  |
| `Ctrl + Shift + B`     | Bevel vertex trực tiếp                  |
| `G`, `G`               | Edge Slide                              |
| `G`, `Z`               | Di chuyển theo trục Z                   |
| `J`                    | Nối hai vertex bằng một cạnh            |
| `Ctrl + R`             | Loop Cut                                |
| `K`                    | Knife Tool                              |
| `Enter`                | Xác nhận đường cắt Knife                |
| `Esc`                  | Hủy Knife hoặc thao tác hiện tại        |
| `Ctrl + Z`             | Hoàn tác                                |
| `MMB`                  | Xoay viewport                           |
| `Numpad .`             | Focus vào đối tượng hoặc phần đang chọn |

---

## 16. Lỗi thường gặp và cách khắc phục

### 16.1. Loop Cut không đi vòng quanh cột

**Nguyên nhân:**
Đường cắt gặp n-gon hoặc topology không phải quad liên tục.

**Cách khắc phục:**

* Dùng Knife để cắt thủ công.
* Dùng Bisect để tạo đường cắt thẳng xuyên mesh.
* Không cố ép Loop Cut đi qua vùng topology không phù hợp.

---

### 16.2. Hai vertex không hợp nhất

**Nguyên nhân:**
Auto Merge Vertices chưa được bật.

**Cách khắc phục:**

* Bật Auto Merge.
* Trượt lại vertex bằng `G → G`.
* Kiểm tra xem hai vertex đã thực sự trở thành một điểm hay chưa.

---

### 16.3. Knife tạo đường cắt hỗn loạn

**Nguyên nhân:**

* Bỏ qua quá nhiều cạnh.
* Xoay viewport khiến Blender suy đoán sai mặt tiếp theo.
* Click vào vị trí không rõ ràng trên bề mặt.
* Không snap chính xác vào edge hoặc vertex.

**Cách khắc phục:**

* Nhấn `Esc` để hủy.
* Bắt đầu lại bằng `K`.
* Click lần lượt trên từng cạnh.
* Không tạo đường cắt dài xuyên nhiều mặt trong một lần.

---

### 16.4. Blender chia tam giác sai hướng

**Nguyên nhân:**
Sau khi bevel vertex, Blender tự động xác định đường chéo của các mặt mới.

**Cách khắc phục:**

* Chọn hai vertex phía trong.
* Nhấn `J` để nối chúng.

---

### 16.5. Click nhưng không chọn được vertex

**Nguyên nhân:**
Bisect hoặc Knife vẫn đang là công cụ hiện hành.

**Cách khắc phục:**

* Chuyển lại sang **Select Box**.
* Kiểm tra thanh công cụ bên trái trước khi tiếp tục.

---

### 16.6. Cột bị hư hỏng quá mức

**Nguyên nhân:**
Tạo quá nhiều vết sứt hoặc bevel quá lớn.

**Cách khắc phục:**

* Hoàn tác một số chi tiết.
* Giữ lại các vùng mặt phẳng lớn.
* Giảm kích thước bevel.
* Tạo khoảng trống giữa các vùng hư hỏng.

---

## 17. Quy trình thực hành đề xuất

### Giai đoạn 1: Khối đá giữa

1. Chọn cột gốc.
2. Vào Edit Mode.
3. Tạo một vết sứt bằng Vertex Bevel.
4. Tạo một vết sứt bằng Edge Bevel.
5. Di chuyển một số cạnh bằng Edge Slide.
6. Kiểm tra Auto Merge.
7. Dùng `J` để sửa các vùng tam giác.

### Giai đoạn 2: Khối đá dưới

1. Thử `Ctrl + R`.
2. Quan sát Loop Cut bị dừng tại n-gon.
3. Hủy Loop Cut.
4. Nhấn `K`.
5. Click lần lượt trên từng cạnh quanh khối đá.
6. Nhấn `Enter`.
7. Dùng vòng cạnh mới để tạo một hoặc hai vết sứt.

### Giai đoạn 3: Khối đá trên

1. Chọn toàn bộ bằng `A`.
2. Dùng Bisect tạo một đường cắt ngang.
3. Không bật Clear Inner hoặc Clear Outer.
4. Chuyển về Select Box.
5. Tạo thêm các vết sứt từ đường cắt mới.

### Giai đoạn 4: Hai cột còn lại

1. Chọn cả hai cột.
2. Vào Multi-Object Edit Mode.
3. Dùng Bisect để cắt cả hai cùng lúc.
4. Dùng Knife để luyện thao tác trên phần còn lại.
5. Tạo vết sứt với vị trí và kích thước khác nhau.
6. Tránh sao chép chính xác chi tiết của cột đầu tiên.

---

## 18. Checklist thực hành

* [ ] Đã tạo ít nhất một vết sứt bằng Vertex Bevel.
* [ ] Đã tạo ít nhất một vết sứt bằng Edge Bevel.
* [ ] Đã sử dụng `G → G` để trượt vertex hoặc edge.
* [ ] Đã bật Auto Merge Vertices.
* [ ] Đã sử dụng `J` để nối hai vertex.
* [ ] Hiểu vì sao Loop Cut không đi qua n-gon.
* [ ] Đã dùng Knife tạo một đường cắt vòng quanh khối đá.
* [ ] Đã click từng cạnh để tránh lỗi Knife.
* [ ] Đã dùng Bisect tạo một vòng cắt ngang.
* [ ] Đã thử Bisect trên nhiều object cùng lúc.
* [ ] Đã chuyển lại về Select Box sau khi cắt.
* [ ] Các vết sứt có vị trí và kích thước tương đối ngẫu nhiên.
* [ ] Cột vẫn giữ được hình dáng tổng thể.
* [ ] Đã lưu file trước khi kết thúc bài học.

---

## 19. Thử thách

Hoàn thiện chi tiết cho cả ba cột với các yêu cầu:

* Mỗi cột có kiểu hư hỏng khác nhau.
* Có sử dụng cả Knife và Bisect.
* Kết hợp Vertex Bevel và Edge Bevel.
* Không để các vết sứt phân bố quá đều.
* Không tạo quá nhiều chi tiết.
* Quan sát cột từ nhiều hướng trước khi hoàn thành.

### Gợi ý phân bố

| Cột          | Knife | Bisect | Số vết sứt gợi ý |
| ------------ | ----: | -----: | ---------------: |
| Cột thứ nhất |    Có |     Có |              4–6 |
| Cột thứ hai  |    Có |     Có |              3–5 |
| Cột thứ ba   |    Có |     Có |              5–7 |

Số lượng trên chỉ mang tính tham khảo. Điều quan trọng là các chi tiết phải trông tự nhiên và không lặp lại máy móc.

---

## 20. Tóm tắt

Trong bài học này, các chi tiết hư hỏng trên cột đá được tạo chủ yếu bằng cách bổ sung topology rồi bevel và ghép các vertex.

Ba công cụ cắt có vai trò khác nhau:

* **Loop Cut** nhanh nhưng chỉ hoạt động tốt trên các vòng quad liên tục.
* **Knife** linh hoạt, phù hợp với topology phức tạp nhưng cần click cẩn thận trên từng cạnh.
* **Bisect** tạo đường cắt thẳng xuyên qua toàn bộ phần mesh được chọn và có thể cắt nhiều object cùng lúc.

Sau khi có đường cắt, sử dụng:

```text
Vertex/Edge Bevel
        +
Edge Slide
        +
Auto Merge
        +
Join Vertices
        =
Vết sứt đá tự nhiên
```

Khi tạo chi tiết, cần ưu tiên sự ngẫu nhiên có kiểm soát. Một vài vết sứt được đặt hợp lý sẽ hiệu quả hơn việc làm hư hỏng toàn bộ bề mặt cột.
