# 044 — Dino Curves

| Thuộc tính       | Nội dung                                            |
| ---------------- | --------------------------------------------------- |
| **Module**       | Module 03 — Low-Poly Dinosaur                       |
| **Bài học**      | Dino Curves                                         |
| **Thời lượng**   | 7:48                                                |
| **Chủ đề chính** | Điều chỉnh độ cong cho đầu, thân và đuôi khủng long |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Điều chỉnh hình dáng khủng long theo ảnh tham chiếu ở góc nhìn trước và góc nhìn bên.
* Thu nhỏ phần mõm để đầu khủng long có hình dạng tự nhiên hơn.
* Mở rộng thân tại vùng vai và chân.
* Thu nhỏ dần thân về phía đuôi.
* Gộp các vertex cuối đuôi thành một điểm.
* Sử dụng **Proportional Editing** để tạo chuyển tiếp mềm.
* Sử dụng **Edge Slide** để làm tròn silhouette của thân.
* Kiểm tra và sửa các điểm lồi, lõm hoặc gãy khúc trên mô hình.

> Trong bài này, “curves” không phải là đối tượng Curve của Blender. Đây là quá trình tạo các đường cong cho hình dáng của mesh bằng cách di chuyển vertex, edge và face.

---

## 2. Kết quả cần đạt

Khối khủng long ban đầu vẫn còn khá vuông và thô:

```text
Trước khi chỉnh:

Đầu vuông ─── Thân hộp ─── Đuôi rộng
██████████████████████████████
```

Sau khi điều chỉnh:

```text
Sau khi chỉnh:

Mõm thu nhỏ → Thân phình nhẹ → Đuôi thu dần về một điểm
      ╭───────╮
  ╭───╯       ╰───────────────╲
  ╰───╮       ╭────────────────╯
      ╰───────╯
```

Mục tiêu chính là cải thiện **silhouette** — đường viền tổng thể của mô hình khi nhìn từ nhiều góc.

---

## 3. Chuẩn bị bố cục làm việc

### 3.1. Hiển thị lại ảnh tham chiếu

Bật lại hai ảnh tham chiếu:

* Ảnh nhìn từ phía trước.
* Ảnh nhìn từ bên cạnh.

Chuyển sang Front View:

```text
Numpad 1
```

Ở góc nhìn bên, mô hình đã tương đối khớp với ảnh. Tuy nhiên, ở góc nhìn trước:

* Thân còn quá hẹp.
* Mõm còn quá rộng.
* Một số vùng đầu cần được thu vào trong.

---

### 3.2. Chia Viewport thành hai cửa sổ

Thay vì liên tục chuyển đổi giữa Front View và Perspective View, hãy chia khu vực làm việc thành hai Viewport.

Bố cục gợi ý:

```text
┌─────────────────────────┬─────────────────────────┐
│                         │                         │
│      Front View         │    Perspective View     │
│                         │                         │
│  Căn theo reference     │  Kiểm tra hình khối 3D │
│                         │                         │
└─────────────────────────┴─────────────────────────┘
```

#### Cách thực hiện

1. Loại bỏ Timeline ở phía dưới bằng cách kéo góc của Viewport phủ lên Timeline.
2. Kéo từ góc Viewport để tạo thêm một cửa sổ mới.
3. Đặt cửa sổ bên trái thành **Front View**.
4. Giữ cửa sổ bên phải ở **Perspective View**.
5. Nhấn `T` để ẩn Toolbar nếu cần thêm không gian.
6. Tắt chế độ hiển thị Wireframe ở Perspective View để nhìn hình khối rõ hơn.

Không nên tắt Wireframe ở cửa sổ Front View vì bạn vẫn cần nhìn xuyên qua mesh để căn theo ảnh tham chiếu.

---

## 4. Điều chỉnh phần mõm

Phần đầu đang có dạng hộp và quá rộng khi nhìn từ phía trước. Cần thu nhỏ cả hàm trên và hàm dưới về phía đầu mõm.

---

### 4.1. Chỉnh hàm trên

Trong Face Select Mode:

1. Chọn dãy face ở phía trên của mõm.
2. Có thể dùng `Ctrl + Click` để chọn liên tiếp các face.
3. Di chuyển chúng vào trong theo trục X:

```text
G → X
```

4. Xoay dãy face quanh trục Z:

```text
R → Z
```

Khi xoay, quan sát Perspective View để xác định đúng hướng. Trong bài giảng, góc xoay cần đi theo chiều âm để phần trước của mõm thu vào trong.

Sơ đồ nhìn từ trên xuống:

```text
Trước:

┌──────────────┐
│              │
│     Đầu      │
│              │
└──────────────┘

Sau:

╲              ╱
 ╲    Đầu     ╱
  ╲__________╱
```

> Phần đường viền phía trước trong ảnh tham chiếu biểu thị đầu ngoài cùng của mõm, không phải toàn bộ chiều rộng của hộp đầu.

---

### 4.2. Chỉnh hàm dưới

Lặp lại thao tác tương tự cho phần hàm dưới:

1. Chọn dãy face của hàm dưới.
2. Xoay quanh trục Z:

```text
R → Z
```

3. Di chuyển theo trục X:

```text
G → X
```

4. Kiểm tra lại trong Perspective View.
5. Điều chỉnh thêm nếu hàm dưới bị quá hẹp hoặc quá rộng.

Mục tiêu là làm cho miệng:

* Rộng hơn ở phía sau.
* Thu nhỏ dần về phía đầu mõm.
* Hai hàm có kích thước tương đối cân bằng.
* Không bị gãy hoặc lệch khi nhìn trong không gian 3D.

---

## 5. Mở rộng phần thân

Sau khi chỉnh đầu, tiếp tục định hình chiều rộng của thân theo ảnh Front View.

### 5.1. Mở rộng phần vai và thân trước

1. Chọn các face ở vùng thân trước.
2. Di chuyển chúng ra ngoài theo trục X:

```text
G → X
```

3. Căn vùng rộng nhất của thân với đường viền trên ảnh tham chiếu.

Một số edge có thể nhô ra quá xa sau khi mở rộng. Chuyển sang Edge Select Mode và kéo chúng vào trong:

```text
G → X
```

Không cần đạt độ chính xác tuyệt đối ngay lập tức. Ở giai đoạn này, ưu tiên dựng hình dáng tổng thể.

---

### 5.2. Mở rộng vùng gần chân

Vùng thân gần vị trí chân thường là phần rộng nhất.

1. Chọn các edge hoặc face tại khu vực này.
2. Kéo ra ngoài theo trục X.
3. Căn gần với đường viền chân trên ảnh tham chiếu.

Silhouette chiều ngang của thân nên có dạng:

```text
Nhìn từ phía trước:

        Vai
       ╭────╮
      ╱      ╲
     │  Thân  │
     │        │
      ╲      ╱
       ╰────╯
```

---

## 6. Thu nhỏ thân về phía đuôi

Từ vùng rộng nhất của thân, các edge cần thu nhỏ dần về phía cuối đuôi.

Quy trình:

```text
Thân rộng
    ↓
Thu dần các edge
    ↓
Gộp vertex cuối
    ↓
Tạo một điểm ở đuôi
```

---

### 6.1. Bật Auto Merge

Trước khi đưa các vertex cuối đuôi vào cùng một vị trí, bật:

```text
Auto Merge Vertices
```

Auto Merge giúp các vertex tự động gộp lại khi chúng được di chuyển đủ gần nhau.

---

### 6.2. Tạo điểm cuối đuôi

1. Chọn các edge hoặc vertex ở mặt cuối của đuôi.
2. Di chuyển chúng về giữa theo trục X:

```text
G → X
```

3. Nhờ Auto Merge, các vertex sẽ gộp thành một điểm duy nhất.

```text
Trước:

┌─────────┐
│  Đuôi   │
└─────────┘

Sau:

╲       ╱
 ╲     ╱
  ╲   ╱
   ╲ ╱
    ●
```

> Sau thao tác này, khu vực cuối đuôi có thể xuất hiện nhiều triangle. Đây chưa phải topology tối ưu, nhưng có thể xử lý trong các bước tiếp theo.

---

## 7. Dùng Proportional Editing để thu thân

Sau khi tạo điểm cuối đuôi, cần làm cho chiều rộng thân chuyển tiếp mềm hơn.

### 7.1. Bật Proportional Editing

Phím tắt:

```text
O
```

Chọn các edge gần đuôi, sau đó di chuyển theo trục X:

```text
G → X
```

Trong lúc di chuyển:

* Cuộn chuột lên để giảm bán kính ảnh hưởng.
* Cuộn chuột xuống để tăng bán kính ảnh hưởng.

```text
Edge được chọn
      ↓
Các vertex gần đó cũng di chuyển
      ↓
Mức độ ảnh hưởng giảm dần theo khoảng cách
```

Proportional Editing giúp tránh việc thân chuyển đột ngột từ rộng sang hẹp.

---

### 7.2. Tắt Proportional Editing khi không cần

Sau khi hoàn tất phần thu thân, tắt Proportional Editing:

```text
O
```

Nếu quên tắt, các thao tác tiếp theo có thể vô tình làm di chuyển nhiều vertex khác.

---

## 8. Điều chỉnh chiều cao cuối đuôi

Chuyển sang Vertex Select Mode.

Các vertex ở phía trên và dưới của đuôi cần được đưa dần về điểm cuối.

Có thể sử dụng Edge Slide:

```text
G → G
```

Edge Slide cho phép vertex trượt dọc theo các edge hiện có mà không phá vỡ hướng topology quá nhiều.

Thực hiện lần lượt:

1. Chọn vertex phía trên gần cuối đuôi.
2. Nhấn `G`, sau đó nhấn `G` lần nữa.
3. Trượt vertex về phía điểm cuối.
4. Lặp lại với vertex phía dưới.

Kết quả:

```text
Nhìn từ bên cạnh:

Trước:
────────────┐
            │
────────────┘

Sau:
────────────╲
             ●
────────────╱
```

Do Auto Merge vẫn đang bật, các vertex được đưa đến cùng vị trí sẽ gộp lại với nhau.

---

## 9. Tạo đường cong cho thân bằng Edge Slide

Thân hiện đã đúng chiều rộng nhưng vẫn còn khá vuông. Có thể sử dụng Edge Slide để tạo đường cong mà không cần thêm nhiều geometry.

### 9.1. Làm cong phần lưng

1. Chuyển sang Edge Select Mode.
2. Chọn một dãy edge gần phía sau thân.
3. Có thể dùng `Ctrl + Click` để chọn liên tiếp đến gần cuối đuôi.
4. Tắt Proportional Editing nếu nó vẫn đang bật.
5. Trượt một edge theo một hướng:

```text
G → G
```

6. Trượt edge bên cạnh theo hướng ngược lại:

```text
G → G
```

Việc bố trí hai edge lệch nhau sẽ tạo cảm giác bo cong cho phần lưng.

```text
Trước:

──────────────

Sau:

──────╮
      ╰────────
```

---

### 9.2. Làm cong phần bụng

Lặp lại thao tác với dãy edge phía dưới thân:

1. Chọn edge từ vùng bụng đến gần cuối đuôi.
2. Dùng `G → G` để trượt các edge.
3. Điều chỉnh sao cho đường bụng có độ cong nhẹ.

Kết quả tổng thể:

```text
Trước:

┌────────────────────┐
│                    │
└────────────────────┘

Sau:

╭────────────────────╮
╰────────────────────╯
```

Không nên chọn edge nằm ngay sát điểm cuối đuôi nếu edge đó không thể slide bình thường do topology hội tụ vào một vertex duy nhất.

---

## 10. Tinh chỉnh silhouette

Sau khi tạo độ cong cơ bản, xoay quanh mô hình và tìm các điểm bất thường.

Các vấn đề thường gặp:

* Một edge nhô ra quá xa.
* Đường viền đuôi bị gãy.
* Vai quá hẹp hoặc quá rộng.
* Phần trên của hàm nhô ra ngoài ảnh tham chiếu.
* Một số đoạn của thân thay đổi độ rộng quá đột ngột.

### Thao tác tinh chỉnh

#### Chọn một edge loop

```text
Alt + Click
```

#### Di chuyển theo trục X

```text
G → X
```

Dùng thao tác này để kéo toàn bộ vòng edge vào trong hoặc ra ngoài.

Ví dụ với phần đuôi:

```text
Gãy khúc:

───────╲__
          ╲___

Sau khi sửa:

───────────╲
            ╲____
```

---

## 11. Kiểm tra mô hình từ nhiều góc

Không nên chỉ căn mesh theo đúng ảnh 2D. Một hình dạng có thể khớp ở Front View nhưng lại không tự nhiên khi nhìn trong Perspective View.

Quy trình kiểm tra:

```text
Front View
    ↓
Kiểm tra chiều rộng
    ↓
Side View
    ↓
Kiểm tra chiều cao và độ cong
    ↓
Perspective View
    ↓
Kiểm tra thể tích 3D
    ↓
Chỉnh các điểm lồi hoặc gãy
```

Khi đánh giá mô hình, hãy chú ý:

* Đầu có thu nhỏ đều về phía mõm không?
* Hàm trên và hàm dưới có cân bằng không?
* Vai có đủ rộng không?
* Thân có chuyển tiếp tự nhiên sang đuôi không?
* Đuôi có hội tụ thành một điểm rõ ràng không?
* Có edge nào nhô ra bất thường không?
* Hình dạng có đẹp khi xoay ở nhiều góc không?

> Không nhất thiết phải bám tuyệt đối vào ảnh tham chiếu nếu hình dạng 3D thực tế trông hợp lý hơn. Ví dụ, vai khủng long có thể được làm rộng hơn một chút so với reference.

---

## 12. Sơ đồ quy trình bài học

```text
Hiển thị ảnh tham chiếu
          ↓
Chia Viewport thành hai cửa sổ
          ↓
Thu nhỏ hàm trên và hàm dưới
          ↓
Mở rộng vai và thân
          ↓
Thu nhỏ dần về phía đuôi
          ↓
Bật Auto Merge
          ↓
Gộp cuối đuôi thành một điểm
          ↓
Dùng Proportional Editing tạo chuyển tiếp
          ↓
Dùng Edge Slide làm cong lưng và bụng
          ↓
Kiểm tra Perspective View
          ↓
Sửa các điểm lồi, lõm và gãy khúc
          ↓
Lưu file
```

---

## 13. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ | Chức năng                                              |
| ------------------ | ------------------------------------------------------ |
| `Numpad 1`         | Chuyển sang Front View                                 |
| `T`                | Hiện hoặc ẩn Toolbar                                   |
| `1`                | Vertex Select Mode                                     |
| `2`                | Edge Select Mode                                       |
| `3`                | Face Select Mode                                       |
| `Ctrl + Click`     | Chọn liên tiếp các face hoặc edge theo đường đi        |
| `Alt + Click`      | Chọn edge loop                                         |
| `G → X`            | Di chuyển theo trục X                                  |
| `R → Z`            | Xoay quanh trục Z                                      |
| `G → G`            | Edge Slide hoặc Vertex Slide                           |
| `O`                | Bật hoặc tắt Proportional Editing                      |
| Cuộn chuột         | Điều chỉnh bán kính ảnh hưởng của Proportional Editing |
| `Numpad .`         | Focus vào vùng hoặc đối tượng đang chọn                |
| Auto Merge         | Tự động gộp các vertex ở cùng vị trí                   |

---

## 14. Lưu ý và lỗi thường gặp

### 14.1. Xoay mõm sai hướng

Khi dùng:

```text
R → Z
```

hãy quan sát Perspective View để xác định hướng xoay. Trong Front View, rất khó nhận biết mặt đang nghiêng về phía trước hay phía sau.

---

### 14.2. Mõm bị thu quá nhỏ

Sau khi xoay, không nên chỉ căn đúng phần đầu ngoài cùng của ảnh reference mà làm toàn bộ hàm bị bó hẹp.

Hãy kiểm tra:

* Độ rộng phía sau của hàm.
* Độ rộng đầu mõm.
* Chuyển tiếp từ đầu sang cổ.

---

### 14.3. Proportional Editing ảnh hưởng quá rộng

Nếu vòng tròn ảnh hưởng quá lớn, việc di chuyển edge gần đuôi có thể làm biến dạng cả phần thân hoặc đầu.

Giải pháp:

* Cuộn chuột để giảm bán kính.
* Tắt Proportional Editing khi cần chỉnh riêng từng điểm.

---

### 14.4. Vertex cuối đuôi không gộp

Nguyên nhân thường gặp:

* Chưa bật Auto Merge.
* Khoảng cách gộp quá nhỏ.
* Các vertex chưa thực sự nằm cùng vị trí.

Kiểm tra lại cài đặt Auto Merge và kéo các vertex sát về tâm.

---

### 14.5. Edge Slide không hoạt động như mong muốn

Edge gần điểm cuối đuôi có thể không slide được bình thường vì nhiều edge đang hội tụ tại một vertex.

Trong trường hợp này:

* Chọn edge nằm trước điểm cuối.
* Không cố slide edge đang nối trực tiếp với đỉnh hội tụ.
* Có thể dùng `G` để chỉnh thủ công nếu cần.

---

### 14.6. Chỉ kiểm tra theo reference 2D

Reference giúp xác định tỉ lệ nhưng không thể hiện đầy đủ thể tích 3D.

Luôn kiểm tra mô hình trong Perspective View để tránh:

* Thân bị dẹt.
* Đầu bị méo.
* Hàm bị nghiêng.
* Đuôi có các đoạn gãy không tự nhiên.

---

### 14.7. Topology có nhiều triangle ở cuối đuôi

Việc gộp toàn bộ vertex cuối đuôi thành một điểm sẽ tạo ra nhiều mặt tam giác.

Đây là kết quả tạm thời chấp nhận được ở giai đoạn dựng hình. Topology có thể được chỉnh lại sau khi silhouette đã hoàn thiện.

---

## 15. Checklist thực hành

### Bố cục làm việc

* [ ] Đã bật lại ảnh tham chiếu Front và Side.
* [ ] Đã chia Viewport thành hai cửa sổ.
* [ ] Một cửa sổ dùng để căn reference.
* [ ] Một cửa sổ dùng để kiểm tra Perspective View.
* [ ] Đã tắt Wireframe ở Perspective View nếu cần.

### Phần đầu

* [ ] Hàm trên đã thu nhỏ về phía mõm.
* [ ] Hàm dưới đã thu nhỏ tương ứng.
* [ ] Miệng không bị quá hẹp.
* [ ] Đầu không bị nghiêng hoặc méo trong không gian 3D.

### Phần thân

* [ ] Vai và vùng gần chân đã được mở rộng.
* [ ] Chiều rộng thân tương đối khớp với Front Reference.
* [ ] Không có edge nhô ra bất thường.
* [ ] Thân thu nhỏ dần về phía đuôi.

### Phần đuôi

* [ ] Auto Merge đã được bật trước khi gộp vertex.
* [ ] Cuối đuôi đã hội tụ thành một điểm.
* [ ] Đường trên và dưới của đuôi chuyển tiếp tự nhiên.
* [ ] Không còn các đoạn gãy khúc rõ rệt.

### Hoàn thiện

* [ ] Đã dùng Edge Slide để làm cong phần lưng.
* [ ] Đã dùng Edge Slide để làm cong phần bụng.
* [ ] Đã kiểm tra mô hình từ nhiều góc nhìn.
* [ ] Đã sửa các điểm lồi, lõm hoặc không tự nhiên.
* [ ] Đã lưu file trước khi chuyển sang bài tiếp theo.

---

## 16. Bài tập thử thách

Hãy xoay quanh toàn bộ mô hình và tự kiểm tra các vùng sau:

1. Phần nối giữa đầu và cổ.
2. Phần vai.
3. Vùng rộng nhất của thân.
4. Phần chuyển tiếp từ thân sang đuôi.
5. Đường trên của đuôi.
6. Đường dưới của đuôi.
7. Điểm cuối đuôi.

Sử dụng kết hợp:

```text
G → X
G → G
Alt + Click
Ctrl + Click
Proportional Editing
```

Mục tiêu là loại bỏ các điểm:

* Nhô ra quá mức.
* Lõm vào bất thường.
* Thay đổi hướng đột ngột.
* Không khớp với hình khối tổng thể.

---

## 17. Tóm tắt bài học

Trong bài **Dino Curves**, khối cơ bản của khủng long được chuyển từ hình hộp vuông thành một hình dáng tự nhiên hơn.

Các thao tác chính gồm:

* Chia Viewport để vừa căn reference vừa quan sát mô hình 3D.
* Thu nhỏ phần mõm bằng Move và Rotate.
* Mở rộng phần vai và thân.
* Thu nhỏ dần thân về phía đuôi.
* Dùng Auto Merge để gộp cuối đuôi thành một điểm.
* Dùng Proportional Editing để tạo chuyển tiếp mềm.
* Dùng Edge Slide để làm cong đường lưng và bụng.
* Kiểm tra silhouette từ nhiều góc và sửa các đoạn gãy.

Đây là bước quan trọng giúp mô hình bắt đầu có hình dáng sinh vật rõ ràng, đồng thời vẫn giữ được phong cách low-poly trước khi tiếp tục thêm các bộ phận và chi tiết khác.
