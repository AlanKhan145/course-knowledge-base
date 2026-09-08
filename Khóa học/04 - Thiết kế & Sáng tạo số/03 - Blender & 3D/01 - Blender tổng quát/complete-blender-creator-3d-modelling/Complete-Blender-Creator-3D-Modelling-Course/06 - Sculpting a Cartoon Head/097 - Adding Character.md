# 097 — Adding Character: Tạo cá tính cho nhân vật

| Thuộc tính           | Nội dung                                                              |
| -------------------- | --------------------------------------------------------------------- |
| **Module**           | Module 06 — Sculpting a Cartoon Head                                  |
| **Bài học**          | Adding Character                                                      |
| **Thời lượng**       | 9:12                                                                  |
| **Chủ đề chính**     | Hoàn thiện chi tiết, phá đối xứng và tạo cá tính                      |
| **Chế độ làm việc**  | Sculpt Mode                                                           |
| **Kỹ thuật nổi bật** | Chuyển nhanh đối tượng, Draw Sharp, Blob, Inflate, Grab, Voxel Remesh |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Chuyển nhanh giữa nhiều đối tượng khi đang ở **Sculpt Mode**.
* Làm cho sừng gắn tự nhiên hơn vào phần đầu.
* Tạo vân, rãnh và chi tiết bề mặt bằng **Draw Sharp**.
* Điều chỉnh độ phân giải của mesh bằng **Voxel Remesh**.
* Phân biệt cách sử dụng **Inflate Brush** và **Blob Brush**.
* Tắt đối xứng để tạo các chi tiết khác nhau giữa hai bên khuôn mặt.
* Dùng **Grab Brush** để tạo biểu cảm và làm khuôn mặt bớt cứng nhắc.
* Hoàn thiện cá tính của nhân vật trước khi chuyển sang tô màu và ánh sáng.

---

## 2. Ý tưởng chính: từ hình khối đến nhân vật

Ở các bài trước, phần đầu, mắt, tai và sừng đã được xây dựng tương đối hoàn chỉnh. Tuy nhiên, một mô hình đúng về hình khối chưa chắc đã có cá tính.

Giai đoạn này tập trung vào ba yếu tố:

```text
Hoàn thiện liên kết
        ↓
Thêm chi tiết bề mặt
        ↓
Phá đối xứng có chủ đích
        ↓
Tạo biểu cảm và cá tính riêng
```

Đây là giai đoạn mang tính thử nghiệm cao. Bạn không nhất thiết phải làm nhân vật giống hoàn toàn với mẫu của giảng viên.

Mục tiêu quan trọng nhất là:

> Thử kéo, bóp, làm lệch và thêm chi tiết để khám phá diện mạo thú vị nhất cho nhân vật.

---

## 3. Lưu file trước khi chỉnh sửa

Các thao tác trong bài có thể thay đổi mạnh hình dạng của mô hình. Vì vậy, đây được xem là một giai đoạn tương đối **destructive** — khó quay trở lại trạng thái ban đầu nếu đã thực hiện quá nhiều thao tác.

Trước khi bắt đầu:

1. Lưu file hiện tại.
2. Có thể tạo một bản sao riêng.
3. Tiếp tục chỉnh sửa trên bản sao mới.

Ví dụ:

```text
character_head_v01_base.blend
character_head_v02_character.blend
```

Sau khi hoàn tất bài học, nên tiếp tục lưu thành một file mới để chuẩn bị cho giai đoạn tô màu.

---

# Phần A — Chuyển nhanh giữa các đối tượng trong Sculpt Mode

## 4. Vấn đề khi sculpt nhiều đối tượng

Phần đầu và hai chiếc sừng là những đối tượng riêng biệt.

Theo cách thông thường, để chuyển từ sculpt sừng sang sculpt đầu, bạn phải:

1. Nhấn `Ctrl + Tab`.
2. Chuyển sang **Object Mode**.
3. Chọn phần đầu.
4. Nhấn `Ctrl + Tab`.
5. Quay lại **Sculpt Mode**.

Quy trình này không quá dài nhưng sẽ trở nên bất tiện nếu phải chuyển đổi nhiều lần.

---

## 5. Chuyển đối tượng bằng `Alt + Q`

Trong Sculpt Mode, bạn có thể sử dụng:

```text
Alt + Q
```

Đưa con trỏ chuột lên đối tượng muốn sculpt rồi nhấn `Alt + Q`.

Đối tượng được chọn sẽ:

* Nháy màu đỏ trong thời gian ngắn.
* Trở thành đối tượng đang hoạt động.
* Có thể được sculpt ngay lập tức.

Ví dụ:

```text
Sculpt phần đầu
      │
      ├── Alt + Q trên sừng → Sculpt sừng
      │
      └── Alt + Q trên đầu  → Quay lại sculpt đầu
```

### Lưu ý

* Hãy phóng to khu vực cần chọn để tránh chọn nhầm.
* Đặt con trỏ trực tiếp lên bề mặt đối tượng.
* `Alt + Q` không hợp nhất các đối tượng; nó chỉ chuyển đối tượng đang được chỉnh sửa.

---

# Phần B — Làm sừng gắn tự nhiên vào đầu

## 6. Vấn đề tại chân sừng

Nếu sừng chỉ xuyên vào phần đầu, vùng tiếp xúc có thể trông:

* Quá phẳng.
* Bị cắt đột ngột.
* Giống một vật thể được gắn lên hơn là mọc ra từ da.

Để khắc phục, cần tạo một vùng da hoặc mô thịt nhô lên bao quanh chân sừng.

---

## 7. Tạo phần da bao quanh sừng

### Quy trình

1. Dùng `Alt + Q` để chọn phần đầu.
2. Chọn **Draw Brush**.
3. Giảm kích thước cọ.
4. Vẽ thêm khối xung quanh chân sừng.
5. Tiếp tục dùng cọ nhỏ hơn để chỉnh vùng tiếp xúc.
6. Giữ `Shift` để làm mượt các vùng lồi lõm.

Mục tiêu là tạo cảm giác:

```text
Không tốt:
Đầu ─────────│ Sừng
             │
        chân sừng phẳng

Tốt hơn:
Đầu ───────╮
           ╰━━ Sừng
      da nhô lên bao quanh
```

Không cần tạo một vòng tròn hoàn hảo. Một chút không đều có thể khiến phần sừng trông tự nhiên hơn.

---

# Phần C — Tạo vân sừng bằng Draw Sharp

## 8. Draw Sharp Brush là gì?

**Draw Sharp** là cọ dùng để tạo các đường rãnh sắc và rõ trên bề mặt.

Nó có nét tương tự **Crease Brush**, nhưng thường cho cảm giác:

* Đường khắc sắc hơn.
* Rãnh hẹp hơn.
* Thích hợp để tạo vết nứt hoặc vân bề mặt.

Draw Sharp thường đẩy bề mặt vào trong thay vì làm khối phồng ra ngoài.

---

## 9. Vì sao chi tiết bị hạt hoặc khối?

Khi thử vẽ các đường nhỏ lên sừng, bạn có thể thấy bề mặt:

* Bị hạt.
* Bị răng cưa.
* Có dạng khối vuông.
* Không giữ được đường nét sắc.

Nguyên nhân chính là mesh chưa có đủ mật độ polygon.

```text
Ít polygon
    ↓
Không đủ điểm để tạo rãnh nhỏ
    ↓
Chi tiết bị gãy và khối
```

Muốn tạo chi tiết nhỏ hơn, cần tăng độ phân giải của mesh.

---

## 10. Tăng độ phân giải bằng Voxel Remesh

### Bước 1: Thiết lập Voxel Size

Nhấn:

```text
Shift + R
```

Sau đó di chuyển chuột để điều chỉnh kích thước voxel.

Trong bài học, giảng viên thử các giá trị gần:

```text
0.008
0.007
```

Giá trị voxel càng nhỏ:

* Mesh càng dày.
* Có nhiều polygon hơn.
* Giữ được chi tiết nhỏ tốt hơn.
* Máy tính phải xử lý nặng hơn.

```text
Voxel Size lớn  → Ít polygon  → Nhẹ nhưng ít chi tiết
Voxel Size nhỏ  → Nhiều polygon → Mịn nhưng nặng hơn
```

### Bước 2: Thực hiện Remesh

Sau khi chọn độ phân giải, nhấn:

```text
Ctrl + R
```

Mesh sẽ được tạo lại dựa trên Voxel Size hiện tại.

Trong ví dụ của bài học, chiếc sừng sau khi remesh có khoảng **22.000 mặt**, mức mà phần lớn máy tính hiện đại có thể xử lý được.

---

## 11. Chọn độ phân giải phù hợp

Không nhất thiết phải sử dụng mesh cực kỳ dày.

Hãy lựa chọn dựa trên khoảng cách quan sát cuối cùng:

| Trường hợp                          | Độ phân giải            |
| ----------------------------------- | ----------------------- |
| Sừng chỉ xuất hiện ở khoảng cách xa | Không cần quá cao       |
| Có cảnh quay cận mặt                | Cần tăng mật độ         |
| Chỉ tạo vài đường vân lớn           | Độ phân giải trung bình |
| Tạo nhiều vết nứt nhỏ               | Độ phân giải cao hơn    |

Giảng viên chủ động không tăng mật độ quá cao để bài học phù hợp với nhiều cấu hình máy tính.

---

## 12. Shade Smooth để đánh giá kết quả

Sau khi remesh, bề mặt có thể vẫn trông hơi khối trong Sculpt Mode.

Để kiểm tra diện mạo gần với kết quả cuối:

1. Nhấn `Ctrl + Tab`.
2. Chuyển sang **Object Mode**.
3. Nhấp chuột phải lên đối tượng.
4. Chọn **Shade Smooth**.

Shade Smooth làm bề mặt hiển thị mềm hơn nhưng không thực sự tăng số lượng polygon.

```text
Voxel Remesh → Thay đổi topology thật
Shade Smooth → Chỉ làm mượt cách hiển thị
```

---

## 13. Tạo vân trên sừng

Sau khi tăng độ phân giải:

1. Quay lại **Sculpt Mode**.
2. Chọn **Draw Sharp**.
3. Giảm kích thước cọ.
4. Vẽ các đường cong hoặc đường xiên trên bề mặt sừng.
5. Không cần kéo đường liên tục từ đầu đến cuối.

Có thể tạo nhiều loại chi tiết:

* Đường vân dọc.
* Đường vòng quanh thân sừng.
* Vết nứt ngắn.
* Các đường cong bất quy tắc.
* Hình xoáy giống mắt gỗ.
* Các nút hoặc vân gỗ.

Ví dụ:

```text
Vân thẳng:     ///////

Vân vòng:      ))))))

Mắt gỗ:        ((•))

Vết nứt:       ──┐
                  └──
```

Hãy tránh tạo quá nhiều đường có khoảng cách và hướng giống nhau. Sự ngẫu nhiên nhẹ sẽ khiến bề mặt tự nhiên hơn.

---

## 14. Điều chỉnh Strength nhanh bằng `Shift + F`

Để thay đổi cường độ cọ:

```text
Shift + F
```

Sau đó di chuyển chuột sang hai bên.

* Strength cao: đường khắc sâu và mạnh.
* Strength thấp: đường mảnh và tinh tế hơn.
* Mức khoảng `0.5` thường phù hợp với nhiều cọ.

Strength cũng có thể được chỉnh trong khu vực:

```text
Active Tool and Workspace Settings
```

### Gợi ý

Khi tạo vân sừng:

* Bắt đầu ở strength trung bình.
* Tạo một vài đường thử.
* Giảm strength nếu rãnh quá sâu.
* Tăng dần thay vì tạo một đường quá mạnh ngay từ đầu.

---

# Phần D — Thêm nốt sần và khuyết điểm

## 15. Vì sao nên thêm khuyết điểm?

Một khuôn mặt quá mượt và quá cân đối thường trông:

* Nhân tạo.
* Thiếu lịch sử.
* Thiếu cá tính.
* Không phù hợp với nhân vật phản diện hoặc sinh vật kỳ quái.

Các chi tiết nhỏ như nốt sần, mụn cóc hoặc khối da nhô lên có thể giúp nhân vật trở nên đáng nhớ hơn.

---

## 16. Inflate Brush

**Inflate Brush** làm bề mặt phồng ra ngoài.

Phù hợp với:

* Làm dày một vùng.
* Tạo phần mô nhô lên.
* Kéo khối da ra ngoài.
* Tạo sự chuyển tiếp tại chân sừng.

Inflate thường tạo sự thay đổi tương đối rộng và mềm.

---

## 17. Blob Brush

**Blob Brush** tạo các khối lồi nhanh và tròn hơn.

Phù hợp với:

* Nốt ruồi lớn.
* Mụn cóc.
* U nhỏ.
* Các khối da lồi.
* Bề mặt sần bất thường.

So sánh nhanh:

| Brush          | Đặc điểm                      | Phù hợp                    |
| -------------- | ----------------------------- | -------------------------- |
| **Inflate**    | Đẩy bề mặt phồng lên dần      | Làm dày hoặc nâng một vùng |
| **Blob**       | Tạo khối tròn nhanh           | Mụn cóc, cục u, nốt sần    |
| **Draw**       | Bồi thêm vật liệu theo nét cọ | Khối da, gờ và nếp nổi     |
| **Draw Sharp** | Khắc rãnh sắc vào bề mặt      | Vết nứt, vân và đường khắc |

---

## 18. Thêm nốt sần lên khuôn mặt

Bạn có thể thử đặt các nốt sần ở:

* Một bên má.
* Trên mũi.
* Gần đường lông mày.
* Phần cằm.
* Gần khóe miệng.

Không nên đặt tất cả chi tiết ở cùng một kích thước hoặc cách đều nhau.

```text
Không tự nhiên:
●   ●   ●   ●

Tự nhiên hơn:
  ●        •
       ◉
           ·
```

Sau khi tạo khối:

* Giữ `Shift` để làm mềm vùng tiếp giáp.
* Không làm mượt hoàn toàn khối chính.
* Giữ lại một chút không đều để tạo cảm giác hữu cơ.

---

# Phần E — Tắt đối xứng để tạo cá tính

## 19. Vì sao cần tắt Symmetry?

Trong giai đoạn dựng hình ban đầu, Symmetry giúp:

* Tạo khuôn mặt nhanh hơn.
* Giữ tỷ lệ ổn định.
* Tránh phải sculpt hai bên riêng biệt.

Nhưng ở giai đoạn hoàn thiện, đối xứng tuyệt đối có thể làm khuôn mặt:

* Quá sạch.
* Cứng nhắc.
* Thiếu biểu cảm.
* Trông giống mô hình mẫu hơn là một nhân vật thật.

Khuôn mặt có cá tính thường có một số điểm khác biệt giữa hai bên.

---

## 20. Tắt Symmetry trong Sculpt Mode

Trong phần thiết lập đối xứng của Sculpt Mode, tắt trục đang được sử dụng, thường là:

```text
Symmetry X
```

Sau khi tắt, nét cọ chỉ tác động lên phía bạn đang chỉnh sửa.

> Vị trí nút và phím tắt có thể khác nhau tùy phiên bản Blender hoặc keymap. Kiểm tra phần Symmetry trong Sculpt Mode trước khi thực hiện các thay đổi lớn.

Trước khi tắt Symmetry, nên lưu file vì những chỉnh sửa tiếp theo có thể thay đổi mạnh diện mạo nhân vật.

---

## 21. Các cách tạo bất đối xứng

Có thể tạo sự khác biệt giữa hai bên bằng những thay đổi như:

* Một bên lông mày cao hơn.
* Một mắt nheo nhiều hơn mắt còn lại.
* Mũi hơi lệch.
* Cằm nghiêng sang một phía.
* Một bên hàm rộng hơn.
* Một khóe miệng cao hơn.
* Nốt sần chỉ xuất hiện ở một bên.
* Một bên khuôn mặt bị kéo dài hoặc lõm hơn.

Điều quan trọng là các thay đổi nên hỗ trợ cùng một biểu cảm.

Ví dụ:

```text
Lông mày trái nâng lên
          +
Mắt trái mở lớn hơn
          +
Khóe miệng trái nhếch
          ↓
Biểu cảm nghi ngờ hoặc tinh quái
```

---

# Phần F — Dùng Grab Brush tạo biểu cảm

## 22. Grab Brush

**Grab Brush** dùng để kéo và dịch chuyển một vùng mesh.

Đây là công cụ chính để thay đổi:

* Hình dáng tổng thể.
* Silhouette.
* Vị trí lông mày.
* Hình dáng mắt.
* Đường miệng.
* Mũi, cằm và hàm.

Kích thước brush quyết định phạm vi ảnh hưởng.

```text
Brush nhỏ → Chỉnh chi tiết cục bộ
Brush lớn → Kéo cả một vùng khuôn mặt
```

---

## 23. Nhướn một bên lông mày

Một bên lông mày được nâng lên có thể tạo biểu cảm:

* Hoài nghi.
* Tinh quái.
* Khinh thường.
* Ngạc nhiên.
* Gian xảo.

### Cách thực hiện

1. Tắt Symmetry.
2. Chọn **Grab Brush**.
3. Tăng kích thước cọ.
4. Kéo vùng lông mày lên nhẹ.
5. Quan sát ảnh hưởng lên mí mắt.
6. Smooth nhẹ nếu bề mặt bị kéo méo.

### Cẩn thận

Nếu brush quá lớn, bạn có thể vô tình kéo cả:

* Mí mắt dưới.
* Nhãn cầu.
* Gò má.
* Phần thái dương.

Trong trường hợp đó, có thể dùng **Masking** để bảo vệ những vùng không muốn tác động.

---

## 24. Tạo mắt nheo

Để làm nhân vật có biểu cảm mạnh hơn:

* Thu hẹp một bên mắt.
* Kéo mí trên xuống.
* Nâng nhẹ mí dưới.
* Giữ mắt còn lại mở hơn.

Sự khác biệt giữa hai mắt giúp khuôn mặt có cảm giác đang chủ động biểu đạt thay vì đứng yên.

Khi kéo mí mắt, nên kiểm tra ở nhiều góc nhìn để tránh:

* Mí xuyên vào nhãn cầu.
* Khoảng hở giữa mí và mắt.
* Mí quá mỏng.
* Đường viền mắt bị méo.

---

## 25. Liên kết biểu cảm giữa mắt và miệng

Biểu cảm khuôn mặt không chỉ nằm ở một bộ phận.

Khi một bên lông mày được nâng lên, vùng da cùng phía có thể dịch chuyển theo:

```text
Lông mày nâng
     ↓
Gò má và vùng dưới mắt thay đổi
     ↓
Khóe miệng cùng phía có thể nâng
```

Nếu chỉ di chuyển lông mày mà toàn bộ phần còn lại đứng yên, biểu cảm có thể trông thiếu tự nhiên.

Hãy quan sát sự liên kết giữa:

* Lông mày.
* Mí mắt.
* Gò má.
* Mũi.
* Khóe miệng.
* Hàm.

---

## 26. Làm mũi bị lệch

Dùng Grab Brush với kích thước tương đối lớn để:

* Kéo đầu mũi sang một bên.
* Làm sống mũi hơi cong.
* Tạo cảm giác mũi từng bị va đập.
* Làm khuôn mặt bớt hoàn hảo.

Không nên chỉ kéo đầu mũi mà bỏ qua phần chân mũi. Hãy tạo một đường cong chuyển tiếp mềm từ sống mũi xuống đầu mũi.

---

## 27. Làm cằm và hàm bất đối xứng

Có thể thử:

* Kéo cằm sang một phía.
* Thu hẹp một bên hàm.
* Làm một bên má lõm hơn.
* Đưa phần cằm ra trước.
* Làm đường hàm bên trái và phải khác nhau nhẹ.

Những thay đổi này ảnh hưởng lớn đến silhouette, vì vậy cần thường xuyên:

1. Xoay mô hình.
2. Quan sát từ chính diện.
3. Quan sát từ góc nghiêng.
4. Quan sát góc ba phần tư.
5. Thu nhỏ viewport để kiểm tra tổng thể.

---

## 28. Thay đổi biểu cảm miệng

Trong bài học, phần miệng được điều chỉnh từ trạng thái tương đối trung tính sang biểu cảm cau có hoặc khó chịu.

Có thể tạo:

* Khóe miệng kéo xuống.
* Một bên môi thấp hơn.
* Đường miệng nghiêng.
* Phần môi trên nhô hơn.
* Cằm lệch theo hướng biểu cảm.

### Quy trình gợi ý

1. Dùng Grab kéo một khóe miệng xuống.
2. Chỉnh khóe còn lại ít hơn.
3. Smooth nhẹ vùng môi.
4. Kiểm tra đường miệng từ góc nghiêng.
5. Khôi phục các nốt sần nếu chúng bị biến dạng.

---

# Phần G — Masking khi chỉnh vùng nhạy cảm

## 29. Khi nào cần dùng Mask?

Masking hữu ích khi Grab Brush tác động lên quá nhiều khu vực.

Ví dụ, khi chỉnh lông mày nhưng không muốn làm biến dạng mí mắt:

```text
Mask mí mắt
     ↓
Dùng Grab kéo lông mày
     ↓
Mí mắt được bảo vệ
```

Các vùng thường nên mask:

* Nhãn cầu.
* Mí mắt dưới.
* Tai.
* Sừng.
* Miệng.
* Những chi tiết đã hoàn thiện.

Masking không bắt buộc cho mọi thao tác, nhưng rất hữu ích khi cần kiểm soát chính xác.

---

# Phần H — Quy trình thực hành hoàn chỉnh

## 30. Quy trình đề xuất

### Bước 1: Lưu phiên bản hiện tại

Tạo một bản lưu trước khi thực hiện các thay đổi mạnh.

### Bước 2: Hoàn thiện chân sừng

* Chọn phần đầu bằng `Alt + Q`.
* Dùng Draw tạo vùng da quanh chân sừng.
* Smooth nhẹ phần tiếp giáp.

### Bước 3: Tăng độ phân giải sừng

* Chọn sừng bằng `Alt + Q`.
* Nhấn `Shift + R`.
* Chọn Voxel Size phù hợp.
* Nhấn `Ctrl + R` để remesh.

### Bước 4: Tạo vân sừng

* Chọn Draw Sharp.
* Điều chỉnh kích thước và strength.
* Vẽ các đường vân không đều.
* Thêm một vài nút hoặc vòng xoáy.

### Bước 5: Tắt Symmetry

* Quay lại phần đầu.
* Lưu file.
* Tắt Symmetry theo trục X.

### Bước 6: Thêm khuyết điểm

* Dùng Blob tạo một vài nốt sần.
* Dùng Inflate khi cần nâng một vùng rộng hơn.
* Smooth phần tiếp giáp.

### Bước 7: Tạo biểu cảm

* Nâng một bên lông mày.
* Nheo một mắt.
* Làm mũi hơi lệch.
* Kéo cằm sang một phía.
* Điều chỉnh đường miệng thành biểu cảm cau có.

### Bước 8: Kiểm tra tổng thể

Quan sát nhân vật từ:

* Chính diện.
* Góc nghiêng trái.
* Góc nghiêng phải.
* Góc ba phần tư.
* Khoảng cách xa.

### Bước 9: Lưu thành file mới

Lưu phiên bản hoàn thiện để chuẩn bị cho giai đoạn painting và lighting.

---

## 31. Sơ đồ quy trình

```text
Lưu file gốc
     │
     ▼
Làm mềm liên kết đầu – sừng
     │
     ▼
Remesh sừng
     │
     ▼
Tạo vân bằng Draw Sharp
     │
     ▼
Lưu thêm một phiên bản
     │
     ▼
Tắt Symmetry
     │
     ├── Thêm nốt sần
     ├── Nâng lông mày
     ├── Nheo mắt
     ├── Làm lệch mũi
     ├── Kéo cằm
     └── Chỉnh miệng
     │
     ▼
Kiểm tra silhouette
     │
     ▼
Smooth có chọn lọc
     │
     ▼
Lưu file hoàn thiện
```

---

# Phần I — Phím tắt và công cụ

## 32. Bảng phím tắt

| Phím tắt               | Chức năng                                       |
| ---------------------- | ----------------------------------------------- |
| `Ctrl + Tab`           | Mở Pie Menu để chuyển chế độ                    |
| `Alt + Q`              | Chuyển nhanh đối tượng đang sculpt dưới con trỏ |
| `Shift + R`            | Điều chỉnh Voxel Size cho Remesh                |
| `Ctrl + R`             | Thực hiện Voxel Remesh trong Sculpt Mode        |
| `Shift + F`            | Điều chỉnh Strength của brush                   |
| Giữ `Shift` khi sculpt | Smooth tạm thời                                 |
| `Ctrl + Z`             | Hoàn tác thao tác                               |

---

## 33. Bảng công cụ

| Công cụ          | Công dụng trong bài                             |
| ---------------- | ----------------------------------------------- |
| **Draw**         | Tạo phần mô hoặc da bao quanh chân sừng         |
| **Draw Sharp**   | Tạo rãnh và vân sắc trên sừng                   |
| **Inflate**      | Làm một vùng bề mặt phồng lên                   |
| **Blob**         | Tạo nhanh nốt sần, mụn cóc hoặc khối lồi        |
| **Grab**         | Kéo lông mày, mắt, mũi, miệng, cằm và hàm       |
| **Smooth**       | Làm mềm vùng gồ ghề hoặc chuyển tiếp bị gãy     |
| **Mask**         | Bảo vệ vùng không muốn bị tác động              |
| **Voxel Remesh** | Tạo lại topology với mật độ đồng đều hơn        |
| **Shade Smooth** | Làm mượt cách hiển thị bề mặt trong Object Mode |

---

# Phần J — Nguyên tắc tạo cá tính

## 34. Bất đối xứng phải có chủ đích

Không nên làm lệch mọi bộ phận một cách ngẫu nhiên. Hãy chọn một hướng tính cách chính.

### Nhân vật gian xảo

* Một lông mày nâng cao.
* Một mắt nheo.
* Một khóe miệng nhếch.
* Mũi hơi lệch.

### Nhân vật cau có

* Hai lông mày ép xuống nhưng không hoàn toàn giống nhau.
* Khóe miệng kéo xuống.
* Hàm nhô ra.
* Mắt nhỏ và sâu.

### Nhân vật ngốc nghếch

* Hai mắt có độ mở khác nhau.
* Cằm lệch.
* Mũi lớn hoặc cong.
* Miệng hơi mở lệch.

### Nhân vật già hoặc từng trải

* Nếp nhăn không đều.
* Một bên mặt chảy xệ hơn.
* Sừng hoặc tai bị hư hỏng.
* Nhiều nốt sần và bề mặt thô.

---

## 35. Quan sát silhouette

Các chi tiết nhỏ chỉ có thể nhìn thấy khi ở gần, nhưng silhouette vẫn phải thú vị khi nhìn từ xa.

Kiểm tra silhouette bằng cách:

* Thu nhỏ mô hình trên màn hình.
* Chuyển sang góc nhìn bên.
* Quan sát đường ngoài của trán, mũi, môi và cằm.
* Kiểm tra sừng có tạo hình dễ nhận biết hay không.

Một nhân vật tốt nên vẫn có thể được nhận ra khi chỉ nhìn đường viền.

---

## 36. Chi tiết lớn, vừa và nhỏ

Để mô hình không bị rối, nên phân chia chi tiết thành ba cấp:

| Cấp độ  | Ví dụ                                             |
| ------- | ------------------------------------------------- |
| **Lớn** | Hình đầu, độ rộng hàm, hướng cằm, kích thước sừng |
| **Vừa** | Lông mày, gò má, mũi lệch, biểu cảm miệng         |
| **Nhỏ** | Vân sừng, nốt sần, nếp nhăn, vết nứt              |

Thứ tự nên thực hiện:

```text
Chi tiết lớn
     ↓
Chi tiết vừa
     ↓
Chi tiết nhỏ
```

Không nên mất nhiều thời gian tạo vân nhỏ nếu hình dáng tổng thể của đầu vẫn chưa ổn.

---

# Phần K — Lỗi thường gặp

## 37. Remesh quá dày

### Biểu hiện

* Blender chạy chậm.
* Brush có độ trễ.
* File trở nên nặng.
* Khó tiếp tục chỉnh hình lớn.

### Cách khắc phục

* Tăng Voxel Size.
* Chỉ remesh ở mức đủ giữ chi tiết cần thiết.
* Không tăng mật độ chỉ vì bề mặt nhìn chưa mượt; thử Shade Smooth trước.

---

## 38. Remesh quá thưa

### Biểu hiện

* Draw Sharp tạo đường khối.
* Rãnh bị răng cưa.
* Nốt sần có hình đa giác.
* Smooth làm mất chi tiết nhanh.

### Cách khắc phục

Giảm Voxel Size một chút rồi remesh lại.

---

## 39. Quên tắt Symmetry

### Biểu hiện

* Nốt sần xuất hiện giống nhau ở cả hai bên.
* Hai lông mày cùng được kéo lên.
* Mũi vẫn thay đổi đối xứng.
* Khuôn mặt không đạt được sự khác biệt mong muốn.

### Cách khắc phục

* Hoàn tác ngay.
* Kiểm tra thiết lập Symmetry.
* Tắt trục X trước khi tiếp tục.

---

## 40. Phá đối xứng quá mức

### Biểu hiện

* Khuôn mặt trông bị lỗi.
* Mắt, mũi và miệng không còn liên kết.
* Cằm lệch quá xa.
* Silhouette mất cân bằng.

### Cách khắc phục

* Thực hiện thay đổi từng bước nhỏ.
* Xoay mô hình sau mỗi vài thao tác.
* Dùng `Ctrl + Z` nếu thay đổi không cải thiện nhân vật.
* Không cố giữ mọi thử nghiệm.

Giảng viên cũng nhiều lần thử kéo khuôn mặt mạnh hơn rồi hoàn tác một phần để quay lại phiên bản phù hợp hơn.

---

## 41. Smooth quá nhiều

Smooth quá mạnh có thể:

* Xóa vân sừng.
* Làm mất nốt sần.
* Làm biểu cảm yếu đi.
* Khiến khuôn mặt trở lại trạng thái quá tròn và đều.

Chỉ nên smooth:

* Vùng chuyển tiếp bị gãy.
* Các cục lồi không mong muốn.
* Mép bị kéo nhọn sau khi dùng Grab.
* Phần chân của nốt sần.

Không smooth trực tiếp lên phần chi tiết chính nếu muốn giữ hình dạng của nó.

---

## 42. Chỉnh cận cảnh nhưng không kiểm tra tổng thể

Một chi tiết có thể đẹp khi phóng lớn nhưng không phù hợp với cả khuôn mặt.

Sau mỗi nhóm thay đổi:

1. Thu nhỏ camera.
2. Xoay mô hình.
3. So sánh hai bên.
4. Kiểm tra biểu cảm chính.
5. Đánh giá silhouette.

---

# Phần L — Bài tập thực hành

## 43. Bài tập chính

Hãy tạo một phiên bản nhân vật có cá tính rõ ràng bằng cách:

* Tạo vùng da bao quanh chân sừng.
* Thêm vân cho ít nhất một chiếc sừng.
* Tắt Symmetry.
* Tạo ít nhất hai nốt sần bất đối xứng.
* Nâng một bên lông mày.
* Làm một mắt nheo hơn mắt còn lại.
* Điều chỉnh mũi, cằm hoặc miệng hơi lệch.
* Lưu mô hình thành một file mới.

---

## 44. Thử thách mở rộng

Tạo ba phiên bản từ cùng một mô hình gốc:

### Phiên bản 1 — Gian xảo

* Một bên lông mày nâng cao.
* Một mắt nheo.
* Khóe miệng nhếch lên.

### Phiên bản 2 — Giận dữ

* Lông mày ép xuống.
* Mũi nhăn.
* Miệng cau lại.
* Hàm đưa ra trước.

### Phiên bản 3 — Ngốc nghếch

* Hai mắt mở không đều.
* Cằm lệch.
* Mũi cong.
* Miệng hơi méo.

Lưu từng phiên bản riêng để so sánh:

```text
character_sly.blend
character_angry.blend
character_silly.blend
```

---

# Phần M — Checklist hoàn thành

## 45. Checklist kỹ thuật

* [ ] Đã lưu một phiên bản trước khi thực hiện thay đổi destructive.
* [ ] Đã sử dụng `Alt + Q` để chuyển giữa phần đầu và sừng.
* [ ] Đã tạo vùng da bao quanh chân sừng.
* [ ] Đã kiểm tra độ phân giải trước khi tạo vân.
* [ ] Đã sử dụng Voxel Remesh khi cần.
* [ ] Đã thử Draw Sharp trên bề mặt sừng.
* [ ] Đã biết cách điều chỉnh Strength bằng `Shift + F`.
* [ ] Đã phân biệt Inflate và Blob Brush.
* [ ] Đã tắt Symmetry trước khi tạo chi tiết lệch.
* [ ] Đã dùng Grab để thay đổi biểu cảm.
* [ ] Đã Smooth có chọn lọc.
* [ ] Đã kiểm tra mô hình ở nhiều góc nhìn.
* [ ] Đã lưu phiên bản hoàn thiện thành file riêng.

---

## 46. Checklist tạo hình

* [ ] Chân sừng không còn trông như gắn phẳng vào đầu.
* [ ] Vân sừng đủ rõ nhưng không quá dày đặc.
* [ ] Hai bên khuôn mặt có sự khác biệt.
* [ ] Một bên lông mày hoặc mắt tạo điểm nhấn chính.
* [ ] Mũi, cằm và miệng hỗ trợ cùng một biểu cảm.
* [ ] Nốt sần được phân bố không đều một cách tự nhiên.
* [ ] Silhouette vẫn cân bằng dù khuôn mặt không còn đối xứng.
* [ ] Nhân vật có thể được mô tả bằng một tính cách rõ ràng.

---

# 47. Tóm tắt bài học

Bài học này hoàn thiện giai đoạn sculpt bằng cách bổ sung các chi tiết tạo nên cá tính riêng cho nhân vật.

Các kỹ thuật quan trọng gồm:

* Sử dụng `Alt + Q` để chuyển nhanh giữa các đối tượng trong Sculpt Mode.
* Dùng Draw để tạo vùng da bao quanh chân sừng.
* Tăng mật độ mesh bằng Voxel Remesh trước khi tạo chi tiết nhỏ.
* Dùng Draw Sharp để khắc vân và rãnh trên sừng.
* Điều chỉnh Strength bằng `Shift + F`.
* Dùng Inflate và Blob để tạo các khối lồi, nốt sần và mụn cóc.
* Tắt Symmetry để tạo sự khác biệt giữa hai bên khuôn mặt.
* Dùng Grab để nâng lông mày, nheo mắt, làm lệch mũi, cằm và miệng.
* Sử dụng Mask khi cần bảo vệ các vùng nhạy cảm.
* Thường xuyên kiểm tra silhouette và hoàn tác những thử nghiệm không hiệu quả.

Thông điệp quan trọng nhất của bài học là:

> Đừng quá sợ làm hỏng mô hình. Hãy lưu một phiên bản an toàn, sau đó tự do thử nghiệm, kéo và biến dạng khuôn mặt cho đến khi nhân vật thực sự có cá tính.

Sau khi hoàn thành, mô hình đã sẵn sàng chuyển sang các giai đoạn tiếp theo: **tô màu, thiết lập vật liệu và ánh sáng**.
