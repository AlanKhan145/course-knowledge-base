# 052 — Hoàn thiện những chi tiết cuối cùng

## The Finishing Touches

| Thuộc tính         | Nội dung                                                          |
| ------------------ | ----------------------------------------------------------------- |
| **Module**         | Module 03 — Low-Poly Dinosaur                                     |
| **Bài học**        | The Finishing Touches                                             |
| **Thời lượng**     | 7:18                                                              |
| **Chủ đề chính**   | Hoàn thiện scene khủng long low-poly                              |
| **Kết quả đầu ra** | Một ảnh render hoàn chỉnh với bố cục, ánh sáng và màu sắc cân đối |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tổ chức lại giao diện Blender để vừa quan sát Camera vừa chỉnh sửa scene.
* Bổ sung cây để cảnh vật bớt trống trải.
* Phát hiện và xử lý các tam giác mỏng gây lỗi hiển thị trên núi.
* Điều chỉnh vị trí khủng long và Camera theo quy tắc một phần ba.
* Dùng **Decimate Modifier** để tăng vẻ low-poly cho khủng long.
* Chuyển nguồn sáng sang **Spot Light** để tập trung ánh sáng vào phần đầu.
* Tinh chỉnh nền, độ tương phản và thiết lập màu sắc trước khi render.
* Render và đánh giá sản phẩm cuối cùng.

---

## 2. Tổng quan quy trình hoàn thiện

Đây là giai đoạn **polish** — không tạo thêm một mô hình hoàn toàn mới mà tập trung rà soát, phát hiện vấn đề và tinh chỉnh những chi tiết nhỏ.

```text
Sắp xếp giao diện
       ↓
Bổ sung cây
       ↓
Sửa lỗi hình học trên núi
       ↓
Điều chỉnh khủng long và Camera
       ↓
Decimate khủng long
       ↓
Tập trung ánh sáng bằng Spot Light
       ↓
Tinh chỉnh nền và Color Management
       ↓
Render ảnh cuối bằng F12
```

Không có một thông số duy nhất phù hợp với mọi scene. Người dựng cần liên tục quan sát kết quả trong Camera View và điều chỉnh dựa trên cảm nhận thị giác.

---

# 3. Nội dung chi tiết

## 3.1. Sắp xếp workspace để chỉnh sửa thuận tiện

Giảng viên quay lại **Shading Workspace** và mở rộng vùng Viewport.

Giao diện được bố trí thành ba khu vực chính:

* **Phía dưới:** Camera View để quan sát khung hình cuối.
* **Phía trên:** Perspective View để chọn và di chuyển các object.
* **Bên phải:** Shader Editor để chỉnh sửa vật liệu khi cần.

Cách bố trí này giúp vừa quan sát ảnh đầu ra, vừa chỉnh sửa scene mà không phải liên tục chuyển đổi góc nhìn.

```text
┌───────────────────────────────┬─────────────────┐
│ Perspective View              │ Shader Editor   │
│ Chọn và di chuyển object      │ Chỉnh vật liệu  │
├───────────────────────────────┴─────────────────┤
│ Camera View — theo dõi khung hình cuối          │
└─────────────────────────────────────────────────┘
```

---

## 3.2. Bổ sung thêm cây cho scene

Khung cảnh ban đầu còn khá thưa cây. Để scene trông dày và tự nhiên hơn:

1. Chuyển sang góc nhìn từ trên xuống.
2. Chọn cụm cây cần nhân bản.
3. Bỏ chọn các nguồn sáng để tránh sao chép nhầm.
4. Tạo **Linked Duplicate** bằng `Alt + D`.
5. Giới hạn chuyển động để cây không bị thay đổi độ cao.
6. Di chuyển cụm cây sang khu vực còn trống.

### Tại sao sử dụng Linked Duplicate?

Các cây được tạo bằng `Alt + D` dùng chung dữ liệu mesh với cây gốc.

Điều này mang lại hai lợi ích:

* Tiết kiệm bộ nhớ.
* Khi chỉnh sửa mesh gốc, các bản sao liên kết cũng được cập nhật.

> Cần bảo đảm chỉ chọn cây trước khi nhân bản. Nếu chọn nhầm Light, Camera hoặc object khác, chúng cũng sẽ bị sao chép theo.

---

## 3.3. Kiểm tra scene trong Rendered View

Sau khi bổ sung cây, chuyển Viewport sang **Rendered View** để kiểm tra kết quả thực tế.

Ở bước này, một tam giác dài và mỏng xuất hiện trên đỉnh núi. Đây là dạng lỗi hình học có thể tạo ra vùng phản sáng hoặc bóng đổ bất thường.

### Nguyên nhân

Sau khi sử dụng Decimate hoặc Sculpt, mesh có thể xuất hiện:

* Tam giác quá dài.
* Tam giác quá mỏng.
* Các mặt có tỷ lệ không cân đối.
* Bề mặt bị gấp hoặc tạo bóng bất thường.

### Cách xử lý trong bài

Có hai cách được đề xuất:

#### Cách 1: Điều chỉnh Decimate

Thay đổi nhẹ giá trị của **Decimate Modifier** để Blender tính toán lại cấu trúc tam giác.

#### Cách 2: Dùng Grab Tool trong Sculpt Mode

1. Chọn ngọn núi.
2. Chuyển sang **Sculpt Mode**.
3. Dùng **Grab Tool**.
4. Di chuyển nhẹ khu vực có tam giác lỗi.
5. Quay lại Shading Workspace để kiểm tra.

Việc thay đổi vị trí các đỉnh làm topology thay đổi nhẹ và có thể loại bỏ tam giác gây lỗi.

> Với mô hình low-poly, các tam giác ngẫu nhiên thường tạo cảm giác tự nhiên. Tuy nhiên, cần tránh những tam giác quá mỏng vì chúng dễ gây lỗi shading.

---

## 3.4. Tinh chỉnh vật liệu núi

Sau khi xử lý lỗi hình học, giảng viên điều chỉnh nhẹ vật liệu núi để phần phía trên sáng hơn.

Mục tiêu là:

* Giúp đỉnh núi nổi bật hơn.
* Tăng khả năng phân biệt giữa núi và nền.
* Giữ được cảm giác phân lớp của địa hình.
* Không làm mất phong cách low-poly.

Đây chỉ là thay đổi nhỏ, nhưng có ảnh hưởng đáng kể đến độ rõ của toàn bộ bố cục.

---

## 3.5. Đưa khủng long nổi bật hơn trong khung hình

Khủng long ban đầu còn hơi nhỏ và chưa phải điểm nhấn rõ ràng.

Để cải thiện:

1. Chuyển sang Top View.
2. Chọn khủng long.
3. Nhấn `G`.
4. Di chuyển khủng long đến gần Camera hơn.
5. Quan sát trực tiếp kết quả trong Camera View.

### Áp dụng quy tắc một phần ba

Giảng viên tiếp tục sử dụng **Rule of Thirds**:

* Đầu khủng long nằm gần giao điểm phía trên bên trái.
* Ngọn núi nằm ở khu vực bên phải.
* Hai chủ thể tạo sự cân bằng nhưng không đối xứng tuyệt đối.

```text
┌────────────┬────────────┬────────────┐
│            │            │            │
│     ●      │            │    Núi     │
├────────────┼────────────┼────────────┤
│  Đầu       │            │            │
│ khủng long │            │            │
├────────────┼────────────┼────────────┤
│            │            │            │
└────────────┴────────────┴────────────┘
```

Dấu `●` biểu thị một trong các giao điểm mạnh của quy tắc một phần ba.

---

## 3.6. Điều chỉnh Camera bằng Lock Camera to View

Khủng long đã được đưa gần Camera hơn nhưng vẫn có thể tăng độ tập trung bằng cách tiến Camera vào một chút.

Thao tác:

1. Trong Camera View, nhấn `N` để mở Sidebar.
2. Mở mục **View**.
3. Bật **Lock Camera to View**.
4. Điều hướng trong Viewport để thay đổi vị trí Camera.
5. Khi đã có bố cục phù hợp, tắt Lock Camera to View.
6. Nhấn `N` để đóng Sidebar.

### Lưu ý

Sau khi chỉnh Camera, nên tắt **Lock Camera to View** ngay. Nếu để tùy chọn này hoạt động, Camera có thể bị di chuyển ngoài ý muốn khi xoay hoặc thu phóng Viewport.

---

## 3.7. Tạo bề mặt low-poly tự nhiên cho khủng long

Ngọn núi có các tam giác ngẫu nhiên nên trông tự nhiên và hữu cơ. Trong khi đó, khủng long vẫn có các mặt quad khá đồng đều, khiến bề mặt hơi cứng và thiếu sức sống.

Để thay đổi, giảng viên thêm **Decimate Modifier** cho khủng long.

### Thao tác

1. Chọn khủng long.
2. Mở tab **Modifiers**.
3. Chọn **Add Modifier**.
4. Thêm **Decimate**.
5. Giảm dần giá trị **Ratio**.
6. Quan sát đồng thời khuôn mặt, mắt và thân.

### Cách lựa chọn Ratio

Nếu Ratio quá cao:

* Mesh gần như không thay đổi.
* Bề mặt vẫn đều và ít đặc trưng low-poly.

Nếu Ratio quá thấp:

* Mất hình dạng mắt.
* Khuôn mặt biến dạng.
* Mất các chi tiết nhận diện.
* Tam giác trở nên quá lớn hoặc quá sắc.

Giảng viên chọn một mức trung gian:

* Khuôn mặt có nhiều tam giác thú vị hơn.
* Đôi mắt vẫn còn rõ.
* Hình dáng tổng thể của khủng long không bị phá hỏng.

```text
Ratio cao              Ratio phù hợp              Ratio quá thấp
Ít thay đổi     →     Low-poly rõ ràng     →     Mất chi tiết
Nhiều quad            Vẫn giữ đôi mắt             Méo khuôn mặt
```

> Khi sử dụng Decimate cho nhân vật, khuôn mặt và mắt là hai khu vực cần kiểm tra kỹ nhất.

---

## 3.8. Chuyển nguồn sáng thành Spot Light

Sau khi Decimate, vùng mắt của khủng long tối hơn và mất bớt ánh phản chiếu.

Để xử lý, giảng viên thử điều chỉnh nguồn sáng và chuyển nó sang **Spot Light**.

### Mục tiêu

* Tập trung ánh sáng vào đầu khủng long.
* Làm rõ vùng mắt.
* Không làm toàn bộ scene bị quá sáng.
* Tạo điểm nhấn thị giác rõ ràng hơn.

### Quy trình

1. Chọn nguồn sáng.
2. Chuyển loại Light thành **Spot**.
3. Xoay nguồn sáng về phía đầu khủng long.
4. Thu hẹp hình nón ánh sáng.
5. Tăng dần công suất.
6. Quan sát vùng mặt và mắt trong Camera View.

### Các mức công suất được thử nghiệm

| Công suất thử nghiệm | Kết quả                           |
| -------------------: | --------------------------------- |
|               `1000` | Ánh sáng bắt đầu làm rõ phần đầu  |
|               `5000` | Quá sáng và thiếu tự nhiên        |
|               `2000` | Khá mạnh nhưng vẫn có thể sử dụng |
|               `1500` | Mức cân bằng được lựa chọn        |

Giá trị cuối cùng khoảng `1500` cho kết quả phù hợp với scene trong bài. Đây không phải thông số bắt buộc cho mọi dự án.

### Thu hẹp Spot Size

Hình nón ánh sáng được thu hẹp để Spot Light chỉ tập trung chủ yếu vào đầu khủng long.

Điều này tạo ra:

* Vùng đầu sáng hơn.
* Phần thân vẫn giữ bóng tối.
* Mắt nổi bật nhờ sự tương phản.
* Chủ thể được tách khỏi hậu cảnh tốt hơn.

---

## 3.9. Tắt Overlays và Gizmos

Trước khi đánh giá hình ảnh cuối, giảng viên tắt:

* **Viewport Overlays**.
* **Gizmos**.
* Hệ trục tọa độ trong Viewport.

Mục đích là loại bỏ các yếu tố gây mất tập trung và giúp Viewport gần giống với ảnh render cuối nhất.

Khi không còn đường viền, trục và biểu tượng điều khiển, người dựng có thể đánh giá chính xác hơn:

* Bố cục.
* Màu sắc.
* Ánh sáng.
* Độ tương phản.
* Khả năng phân biệt giữa chủ thể và hậu cảnh.

---

## 3.10. Tinh chỉnh World Background

Giảng viên tiếp tục điều chỉnh độ sáng của nền.

Nền sáng hơn giúp ngọn núi nổi bật, nhưng đồng thời cũng làm toàn bộ scene sáng hơn vì World Background vẫn ảnh hưởng đến ánh sáng môi trường.

### Mối quan hệ cần lưu ý

```text
World Strength tăng
        ↓
Nền sáng hơn
        ↓
Ánh sáng môi trường mạnh hơn
        ↓
Toàn bộ scene cũng sáng hơn
```

Vì vậy, không nên chỉ đánh giá màu nền mà phải quan sát ảnh hưởng của nó lên toàn bộ scene.

---

## 3.11. Transparent Background

Trong **Render Properties**, mục **Film**, Blender có tùy chọn **Transparent**.

Khi bật tùy chọn này:

* Nền của ảnh render trở nên trong suốt.
* Có thể thay nền bằng màu hoặc ảnh khác trong phần mềm chỉnh sửa ảnh.
* Ánh sáng World vẫn có thể tiếp tục ảnh hưởng đến scene.

Điều này cho phép tách biệt:

* Màu nền xuất hiện trong ảnh.
* Ảnh hưởng chiếu sáng của World.

Ví dụ, có thể render khủng long với nền trong suốt rồi thêm nền khác trong phần mềm như Photoshop.

Tuy nhiên, trong bài học, giảng viên tắt Transparent để hoàn thành toàn bộ hình ảnh trực tiếp trong Blender và tránh làm quy trình phức tạp hơn.

---

## 3.12. Color Management và độ tương phản

Ở phần cuối của Render Properties, giảng viên mở mục **Color Management**.

### View Transform

Bài học đang sử dụng **Filmic**, giúp giữ lại nhiều thông tin màu sắc và vùng sáng tối.

### Look

Trong mục **Look**, có thể thay đổi độ tương phản.

| Thiết lập     | Hiệu ứng                                         |
| ------------- | ------------------------------------------------ |
| Low Contrast  | Ảnh xám, phẳng và ít chiều sâu                   |
| High Contrast | Màu rõ hơn, vùng sáng sáng hơn, vùng tối đậm hơn |

Giảng viên nhận thấy **High Contrast** phù hợp với scene:

* Khủng long nổi bật hơn.
* Màu sắc sinh động hơn.
* Ánh sáng và bóng tối rõ ràng hơn.
* Cảnh có chiều sâu tốt hơn.

### Exposure và Gamma

Giảng viên cũng thử thay đổi:

* **Exposure**.
* **Gamma**.

Tuy nhiên, các thay đổi này không cần thiết nên được hoàn tác. Cuối cùng chỉ giữ lại mức tương phản cao hơn.

> Khi chỉnh Color Management, nên thay đổi từng thông số riêng biệt để biết chính xác thông số nào đang cải thiện hoặc làm xấu hình ảnh.

---

# 4. Quy trình thực hành

## Bước 1: Sắp xếp giao diện

* Mở Shading Workspace.
* Tạo một Viewport quan sát Camera.
* Tạo một Viewport Perspective để chỉnh scene.
* Giữ Shader Editor ở bên cạnh.

## Bước 2: Bổ sung cây

* Chọn cụm cây.
* Bỏ chọn Light và các object không cần thiết.
* Dùng `Alt + D` để tạo Linked Duplicate.
* Di chuyển cây vào các khu vực còn trống.

## Bước 3: Kiểm tra núi

* Chuyển sang Rendered View.
* Quan sát các vùng có tam giác dài hoặc lỗi shading.
* Điều chỉnh Decimate hoặc dùng Grab Tool trong Sculpt Mode.

## Bước 4: Tinh chỉnh vật liệu núi

* Làm phần đỉnh núi sáng hơn một chút.
* Kiểm tra độ tương phản giữa núi và nền.

## Bước 5: Điều chỉnh khủng long

* Chuyển sang Top View.
* Dùng `G` để đưa khủng long gần Camera hơn.
* Đặt đầu khủng long theo quy tắc một phần ba.

## Bước 6: Chỉnh Camera

* Bật **Lock Camera to View**.
* Tiến Camera gần chủ thể hơn.
* Tắt Lock Camera to View sau khi hoàn thành.

## Bước 7: Decimate khủng long

* Thêm Decimate Modifier.
* Giảm Ratio từ từ.
* Dừng lại trước khi mắt và khuôn mặt mất chi tiết.

## Bước 8: Tinh chỉnh ánh sáng

* Chuyển nguồn sáng thành Spot Light.
* Hướng Spot Light vào đầu khủng long.
* Thu hẹp Spot Size.
* Thử công suất từ khoảng `1000` đến `2000`.
* Chọn mức phù hợp với scene.

## Bước 9: Tinh chỉnh nền và màu sắc

* Điều chỉnh World Strength.
* Kiểm tra tùy chọn Transparent nếu cần xuất nền trong suốt.
* Mở Color Management.
* Tăng độ tương phản bằng Look phù hợp.

## Bước 10: Render

* Tắt Overlays và Gizmos để kiểm tra.
* Nhấn `F12`.
* Quan sát ảnh render và tiếp tục điều chỉnh nếu cần.

---

# 5. Phím tắt và công cụ liên quan

| Phím tắt / Công cụ  | Chức năng                                             |
| ------------------- | ----------------------------------------------------- |
| `Alt + D`           | Tạo Linked Duplicate                                  |
| `G`                 | Di chuyển object                                      |
| `N`                 | Mở hoặc đóng Sidebar                                  |
| `F12`               | Render ảnh tĩnh                                       |
| Top View            | Dễ bố trí cây, khủng long và các object trên mặt đất  |
| Rendered View       | Xem trước vật liệu và ánh sáng gần với kết quả render |
| Grab Tool           | Di chuyển vùng mesh trong Sculpt Mode                 |
| Decimate Modifier   | Giảm số mặt và tạo bề mặt tam giác low-poly           |
| Spot Light          | Tập trung ánh sáng vào một khu vực                    |
| Lock Camera to View | Di chuyển Camera bằng cách điều hướng Viewport        |
| Film → Transparent  | Render ảnh với nền trong suốt                         |
| Color Management    | Điều chỉnh View Transform, Look, Exposure và Gamma    |

---

# 6. Những thay đổi chính trong bài

Giảng viên thực hiện ba thay đổi quan trọng nhất:

1. **Bổ sung thêm cây** để scene bớt trống trải.
2. **Decimate khủng long** để bề mặt có nhiều tam giác và mang phong cách low-poly rõ hơn.
3. **Tăng độ tương phản** trong Color Management để ảnh có màu sắc và chiều sâu tốt hơn.

Ngoài ra còn có các điều chỉnh phụ:

* Sửa tam giác lỗi trên núi.
* Đưa khủng long gần Camera.
* Điều chỉnh lại bố cục.
* Chuyển nguồn sáng sang Spot Light.
* Tăng sáng phần đầu và mắt.
* Điều chỉnh World Background.
* Tắt Overlays và Gizmos trước khi đánh giá.

---

# 7. Lưu ý và lỗi thường gặp

## 7.1. Sao chép nhầm nguồn sáng

Khi chọn nhiều cây, có thể vô tình chọn cả Light.

**Cách phòng tránh:**

* Kiểm tra Outliner.
* Bỏ chọn Light trước khi dùng `Alt + D`.
* Quan sát biểu tượng object đang được chọn.

---

## 7.2. Tam giác quá mỏng sau Decimate

Tam giác dài và mỏng có thể gây:

* Vệt sáng bất thường.
* Bóng đổ không tự nhiên.
* Bề mặt nhấp nháy hoặc méo.
* Các vùng shading bị gãy.

**Cách xử lý:**

* Thay đổi nhẹ Decimate Ratio.
* Dùng Grab Tool di chuyển các đỉnh.
* Kiểm tra lại trong Rendered View.

---

## 7.3. Giảm Decimate Ratio quá mạnh

Nếu giảm quá nhiều:

* Mắt có thể biến mất.
* Miệng và khuôn mặt bị méo.
* Chân hoặc đuôi mất hình dạng.
* Silhouette của nhân vật không còn rõ.

Luôn ưu tiên giữ được hình dáng nhận diện của nhân vật.

---

## 7.4. Spot Light quá mạnh

Công suất quá lớn, như mức `5000` trong bài, khiến:

* Vùng đầu bị cháy sáng.
* Mất màu vật liệu.
* Chủ thể không còn hòa hợp với môi trường.
* Bóng tối và ánh sáng chuyển tiếp quá gắt.

Nên tăng Power từ từ và quan sát trực tiếp trong Camera View.

---

## 7.5. Hình nón Spot Light quá rộng

Nếu Spot Size quá rộng, nguồn sáng gần giống một Fill Light và không tạo được điểm nhấn.

Nếu quá hẹp, ánh sáng có thể chỉ chiếu vào một phần rất nhỏ của khuôn mặt.

Cần cân bằng giữa:

* Spot Size.
* Vị trí Light.
* Góc xoay.
* Power.

---

## 7.6. Quên tắt Lock Camera to View

Khi tùy chọn này đang bật, các thao tác điều hướng có thể làm Camera thay đổi ngoài ý muốn.

Sau khi đặt xong bố cục, hãy tắt tùy chọn này.

---

## 7.7. Nền sáng làm cả scene sáng theo

World Background không chỉ là màu nền mà còn ảnh hưởng đến ánh sáng môi trường.

Nếu tăng World Strength quá nhiều:

* Bóng đổ bị nhạt.
* Scene mất độ tương phản.
* Spot Light giảm hiệu quả.
* Khủng long khó tách khỏi hậu cảnh.

---

## 7.8. Tăng quá nhiều thông số cùng lúc

Nếu đồng thời thay đổi:

* World Strength.
* Light Power.
* Exposure.
* Gamma.
* Contrast.

sẽ rất khó xác định nguyên nhân khiến hình ảnh tốt hơn hoặc xấu đi.

Nên thay đổi từng thông số, đánh giá rồi mới chuyển sang thông số tiếp theo.

---

# 8. Checklist hoàn thiện scene

## Bố cục

* [ ] Khủng long là chủ thể chính của khung hình.
* [ ] Đầu khủng long nằm gần một điểm mạnh của quy tắc một phần ba.
* [ ] Ngọn núi cân bằng với vị trí của khủng long.
* [ ] Các cụm cây không quá thưa hoặc quá dày.
* [ ] Không có object nào che khuất chủ thể ngoài ý muốn.

## Hình học

* [ ] Núi không còn tam giác dài gây lỗi shading.
* [ ] Decimate không làm mất mắt của khủng long.
* [ ] Silhouette của khủng long vẫn rõ ràng.
* [ ] Không có object xuyên qua nhau.
* [ ] Không có mặt mesh bị biến dạng bất thường.

## Ánh sáng

* [ ] Spot Light hướng đúng vào đầu khủng long.
* [ ] Mắt đủ sáng để nhận biết.
* [ ] Phần đầu không bị cháy sáng.
* [ ] Bóng tối vẫn giữ được chi tiết.
* [ ] Nguồn sáng phù hợp với ánh sáng môi trường.

## Màu sắc

* [ ] Núi nổi bật so với nền.
* [ ] Nền không làm scene quá sáng.
* [ ] Độ tương phản đủ mạnh nhưng không mất chi tiết.
* [ ] Exposure và Gamma không bị điều chỉnh quá mức.
* [ ] Màu sắc giữa các object thống nhất với phong cách low-poly.

## Render

* [ ] Đã kiểm tra scene trong Camera View.
* [ ] Đã tắt Overlays và Gizmos khi đánh giá.
* [ ] Đã render thử bằng `F12`.
* [ ] Không có lỗi hình học hoặc ánh sáng trong ảnh render.
* [ ] Đã lưu file Blender trước khi chỉnh sửa lớn.

---

# 9. Thử thách mở rộng

Sau khi hoàn thành scene theo bài học, bạn có thể tự cá nhân hóa sản phẩm.

## Một số ý tưởng

* Thêm một ngọn núi ở xa.
* Tạo thêm một con khủng long thứ hai.
* Thay đổi vị trí và loại nguồn sáng.
* Tạo một phiên bản vào ban đêm.
* Thử nền trời có màu khác.
* Thêm nhiều tầng cây để tăng chiều sâu.
* Thay đổi góc Camera.
* Tạo một bố cục hoàn toàn khác.
* Dùng ánh sáng để tạo cảm giác bình minh hoặc hoàng hôn.
* Render nền trong suốt để ghép với hậu cảnh khác.

Mục tiêu không chỉ là sao chép chính xác sản phẩm của giảng viên mà còn vận dụng các kỹ thuật đã học để tạo ra phiên bản riêng.

---

# 10. Tóm tắt bài học

Bài học tập trung vào quá trình hoàn thiện scene khủng long low-poly thông qua hàng loạt điều chỉnh nhỏ nhưng có tác động lớn đến chất lượng hình ảnh.

Quy trình chính bao gồm:

* Bổ sung cây để lấp khoảng trống.
* Xử lý các tam giác lỗi trên ngọn núi.
* Đưa khủng long gần Camera hơn.
* Áp dụng quy tắc một phần ba.
* Dùng Decimate để tăng vẻ low-poly cho nhân vật.
* Chuyển Light sang Spot để làm nổi bật đầu và mắt.
* Điều chỉnh World Background.
* Tăng độ tương phản trong Color Management.
* Render ảnh cuối bằng `F12`.

Điểm quan trọng nhất của bài là không có một công thức cố định cho bước hoàn thiện. Người dựng cần liên tục quan sát, thử nghiệm và điều chỉnh cho đến khi bố cục, vật liệu, ánh sáng và màu sắc phối hợp hài hòa với nhau.
