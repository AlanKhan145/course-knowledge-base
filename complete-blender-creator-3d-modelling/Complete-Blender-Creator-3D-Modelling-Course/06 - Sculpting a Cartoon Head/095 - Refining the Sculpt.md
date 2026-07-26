# 095 — Tinh chỉnh bản điêu khắc

## Refining the Sculpt

| Thuộc tính       | Nội dung                                             |
| ---------------- | ---------------------------------------------------- |
| **Module**       | Module 06 — Sculpting a Cartoon Head                 |
| **Bài học**      | Refining the Sculpt                                  |
| **Thời lượng**   | 7 phút 59 giây                                       |
| **Chủ đề chính** | Làm sạch bề mặt và tinh chỉnh các chi tiết khuôn mặt |
| **Phần mềm**     | Blender — Sculpt Mode                                |

---

## 1. Mục tiêu bài học

Trong bài học này, chúng ta sẽ hoàn thiện bản sculpt bằng cách:

* Điều chỉnh lại vùng cổ, ngực và vai.
* Làm mượt những khu vực còn gồ ghề.
* Thực hiện lần **Voxel Remesh cuối cùng** để tăng mật độ lưới.
* Làm sắc nét lại môi, mũi, mí mắt và tai.
* Sử dụng các brush như **Crease**, **Draw**, **Grab** và **Smooth** để thực hiện những chỉnh sửa nhỏ.
* Kiểm tra nhân vật ở nhiều góc nhìn trước khi chuyển sang bài tiếp theo.

> Ở giai đoạn này, chỉ nên thực hiện những thay đổi nhỏ. Khối chính và hình dáng tổng thể của nhân vật gần như đã hoàn thiện.

---

## 2. Tổng quan quy trình

```text
Kiểm tra cổ và vai
        ↓
Làm mượt bề mặt
        ↓
Voxel Remesh lần cuối
        ↓
Tinh chỉnh môi
        ↓
Tinh chỉnh mũi
        ↓
Tinh chỉnh mắt
        ↓
Tinh chỉnh tai
        ↓
Kiểm tra toàn bộ và lưu file
```

---

# 3. Điều chỉnh vùng cổ và vai

Trước khi tinh chỉnh khuôn mặt, cần kiểm tra lại vùng cổ, ngực và vai.

Trong bản sculpt hiện tại, vùng cổ có thể hơi rộng khi nhìn từ phía trước. Vì nhân vật được thiết kế với vóc dáng khá gầy, có thể thu hẹp khu vực này một chút.

## Cách điều chỉnh

* Thu nhỏ chiều rộng của cổ.
* Đẩy nhẹ phần phía trước cổ vào trong.
* Giữ lại một chút thể tích ở phía sau cổ để mô phỏng cơ cổ.
* Không cần tạo quá nhiều chi tiết giải phẫu ở khu vực này.
* Giữ `Shift` và vuốt lên bề mặt để loại bỏ các vùng gồ ghề.

### Hình dung cấu trúc cổ

```text
Nhìn từ bên cạnh

          Đầu
           │
      _____│
     /     │  ← Phía sau cổ có nhiều thể tích hơn
    /      │
   |       │
   |      /   ← Phía trước cổ lõm nhẹ vào trong
    \____/
       │
      Vai
```

Mục tiêu không phải tạo cổ chân thực tuyệt đối mà là tạo cảm giác phần đầu được kết nối hợp lý với thân người.

---

## 4. Làm mượt trước lần Remesh cuối

Trước khi tăng độ phân giải lưới, hãy xoay quanh mô hình và kiểm tra:

* Đỉnh đầu.
* Phía sau đầu.
* Cổ.
* Vai.
* Hai bên khuôn mặt.
* Những khu vực đã sử dụng nhiều brush.

Giữ `Shift` để kích hoạt Smooth tạm thời và làm sạch các vùng bị:

* Gồ ghề.
* Có cục nhỏ.
* Xuất hiện đường lượn không mong muốn.
* Bị méo sau nhiều lần kéo và đẩy mesh.

> Nên làm sạch bề mặt trước khi Remesh. Nếu Remesh khi bề mặt còn nhiều lỗi, các lỗi đó sẽ được tái tạo trên lưới mới.

---

# 5. Voxel Remesh lần cuối

Sau khi hình dáng tổng thể đã ổn định, có thể thực hiện lần Remesh cuối để có thêm mật độ polygon phục vụ việc tinh chỉnh.

## Thiết lập được sử dụng trong bài

* Mật độ hiện tại: khoảng **500.000 mặt**.
* Voxel Size đề xuất: khoảng **0.008**.
* Sau Remesh: khoảng **750.000 mặt**, tùy thuộc vào kích thước mô hình.

Nhấn:

```text
Ctrl + R
```

để thực hiện Voxel Remesh trong Sculpt Mode.

## Có bắt buộc phải tăng mật độ không?

Không.

Nếu máy tính hoạt động chậm hoặc đã có khoảng nửa triệu mặt, bạn có thể giữ nguyên mật độ hiện tại. Mục tiêu của việc tăng mật độ chỉ là có thêm độ phân giải để:

* Làm sắc nét đường môi.
* Tạo rãnh mũi rõ hơn.
* Làm mí mắt sạch hơn.
* Tạo chi tiết bên trong tai.

> Không nên tăng mật độ quá cao nếu máy tính không đủ mạnh. Mật độ lớn có thể khiến thao tác sculpt bị giật hoặc phản hồi chậm.

---

# 6. Tinh chỉnh môi

Môi là một trong những khu vực cần được làm sạch kỹ nhất sau nhiều lần Remesh.

## Brush sử dụng

* **Crease**
* **Draw**
* **Grab**
* **Smooth**

## 6.1. Làm rõ đường tiếp xúc giữa hai môi

Chọn brush **Crease**, sau đó:

1. Giảm kích thước brush.
2. Vuốt dọc theo đường nơi môi trên và môi dưới tiếp xúc.
3. Tạo một rãnh rõ ràng nhưng không quá sâu.
4. Làm mượt nhẹ hai bên đường rãnh.
5. Dùng Crease thêm lần nữa nếu đường môi bị mờ.

```text
        Môi trên
      __________
     /          \
────/────────────\────  ← Đường Crease giữa hai môi
    \            /
     \__________/
        Môi dưới
```

## 6.2. Bổ sung thể tích cho môi

Nếu môi quá phẳng:

* Dùng **Draw** để đẩy môi ra ngoài một chút.
* Làm mượt nhẹ sau đó.
* Quay lại **Crease** để khôi phục đường phân cách giữa hai môi.

## 6.3. Chỉnh hình dáng bằng Grab

Nếu khóe môi hoặc đường môi bị lệch:

* Dùng **Grab** với kích thước nhỏ.
* Chỉ di chuyển từng vùng một khoảng rất ngắn.
* Thường xuyên thu nhỏ góc nhìn để kiểm tra hình dáng tổng thể.

> Không nên chỉ nhìn môi ở khoảng cách quá gần. Một đường môi có thể trông đẹp khi phóng lớn nhưng lại không phù hợp với toàn bộ khuôn mặt.

---

# 7. Tinh chỉnh mũi

Sau môi, tiếp tục sử dụng **Crease Brush** để làm rõ cấu trúc của mũi.

## Các khu vực cần chú ý

* Rãnh giữa cánh mũi và khuôn mặt.
* Viền ngoài của lỗ mũi.
* Phần dưới đầu mũi.
* Vùng chuyển tiếp giữa mũi và má.

## Quy trình

1. Chọn Crease với kích thước nhỏ.
2. Đi theo đường cong của cánh mũi.
3. Tạo đường viền lỗ mũi rõ hơn.
4. Làm mượt khu vực nằm bên ngoài đường Crease.
5. Nếu cần, làm mượt cả đường rãnh rồi vẽ lại bằng Crease.
6. Dùng Grab để sửa những chỗ bị méo.
7. Kiểm tra lại mũi ở khoảng cách xa hơn.

### Cấu trúc đơn giản của cánh mũi

```text
Nhìn từ phía trước

       ______
     /        \
    /          \
   |   (    )   |
    \   \__/   /
     \________/

       ↑    ↑
   Cánh mũi và lỗ mũi
```

## Lưu ý

* Đường rãnh không nên quá sắc hoặc quá sâu.
* Nếu đường mũi trông giống như bị “cắt” vào bề mặt, hãy Smooth nhẹ.
* Những chỉnh sửa lúc này chỉ nên rất nhỏ.
* Nếu một vùng bị lượn sóng, dùng Grab hoặc Smooth để sửa trước khi tiếp tục.

---

# 8. Tinh chỉnh mắt và mí mắt

Mí mắt cần đủ sắc nét để thể hiện rõ hình dạng mắt nhưng vẫn phải bám tự nhiên quanh nhãn cầu.

## 8.1. Làm rõ đường mí mắt

Sử dụng **Crease Brush** để:

* Làm rõ mí trên.
* Làm rõ mí dưới.
* Tạo đường chuyển tiếp sạch quanh nhãn cầu.
* Nhấn mạnh khóe mắt nếu cần.

Một kỹ thuật hiệu quả là:

```text
Smooth nhẹ → Crease lại → Kiểm tra từ xa
```

Việc làm mượt trước rồi vẽ lại giúp đường mí mắt sạch và sắc hơn.

## 8.2. Điều chỉnh biểu cảm

Dùng **Grab Brush** để thay đổi nhẹ hình dáng quanh mắt:

* Kéo phần mí trên xuống để tạo cảm giác nheo mắt.
* Đẩy vùng lông mày xuống để tạo vẻ cau có.
* Nâng hoặc hạ khóe mắt.
* Tạo biểu cảm dữ dằn hoặc khó chịu cho nhân vật.

```text
Biểu cảm trung tính          Biểu cảm cau có

   _________                   \_______/
  /         \                   \     /
 |    ○ ○    |                 |  ○ ○  |
  \_________/                   \_____/
```

Có thể thử nghiệm biểu cảm mạnh hơn, sau đó giảm bớt nếu kết quả trông quá cường điệu.

## 8.3. Tạo khóe mắt

Có thể điều chỉnh nhẹ phần khóe mắt gần mũi để:

* Tạo hình dạng tuyến lệ.
* Làm mắt kết nối tự nhiên hơn với sống mũi.
* Giảm cảm giác nhãn cầu chỉ được đặt vào một hốc trống.

> Sau mỗi lần chỉnh sửa, hãy kiểm tra xem mí mắt vẫn bao quanh nhãn cầu hợp lý hay không.

---

# 9. Tinh chỉnh tai

Tai là một cấu trúc phức tạp. Trong bài học này, mục tiêu không phải tạo một tai giải phẫu hoàn chỉnh mà chỉ cần hình dáng đủ thuyết phục.

## 9.1. Tạo đường cong chính bên trong tai

Dùng **Crease Brush** để tạo một đường cong giống dấu hỏi:

```text
      ______
    /        \
   /   ___    \
  |   /   \    |
  |   \    |   |
   \   \__/   /
    \________/

Đường bên trong tai có dạng gần giống “?”
```

Hướng vuốt cơ bản:

```text
Đi lên → vòng quanh → đi xuống
```

## 9.2. Bổ sung thể tích

Nếu vành tai quá mỏng hoặc phẳng:

* Dùng **Draw Brush** ở phần bên ngoài tai.
* Tăng thể tích rất nhẹ.
* Smooth để nối phần vừa thêm với bề mặt xung quanh.

## 9.3. Điều chỉnh hình dáng bằng Grab

Dùng Grab để:

* Làm tai mỏng hơn.
* Kéo tai lùi về phía sau.
* Thu nhỏ vùng tai quá dày.
* Tạo đầu tai nhọn hơn.

Trong bài học, tai được làm nhọn nhẹ để nhân vật có vẻ:

* Kỳ dị.
* Siêu nhiên.
* Giống goblin hoặc ác quỷ.
* Phù hợp hơn với phong cách nhân vật phản diện.

## 9.4. Làm sắc các rãnh trong tai

Quay lại **Crease Brush** để:

* Làm rõ vùng lõm trung tâm.
* Nhấn mạnh vành tai.
* Tạo rãnh ở phía trên và phía dưới.
* Smooth nhẹ hai bên đường Crease.

> Với người mới, không nên thêm quá nhiều rãnh nhỏ trong tai. Quá nhiều chi tiết có thể khiến tai trông rối và khó đọc.

---

# 10. Các brush và thao tác chính

| Brush / thao tác | Công dụng trong bài                                |
| ---------------- | -------------------------------------------------- |
| **Smooth**       | Làm sạch các vùng gồ ghề và làm mềm đường brush    |
| Giữ `Shift`      | Tạm thời kích hoạt Smooth                          |
| **Crease**       | Tạo rãnh sắc ở môi, mũi, mí mắt và tai             |
| **Draw**         | Bổ sung thể tích cho môi và vành tai               |
| **Grab**         | Điều chỉnh vị trí và hình dáng của các vùng nhỏ    |
| `Ctrl + R`       | Thực hiện Voxel Remesh                             |
| Chuột giữa       | Xoay góc nhìn và tập trung kiểm tra từng khu vực   |
| Thu nhỏ brush    | Tạo chi tiết và đường rãnh chính xác hơn           |
| Phóng to/thu nhỏ | Kiểm tra cả chi tiết cục bộ lẫn hình dáng tổng thể |

---

# 11. Nguyên tắc tinh chỉnh

## 11.1. Smooth rồi Crease lại

Khi một đường rãnh bị gãy hoặc lượn sóng:

```text
Đường rãnh xấu
      ↓
Smooth nhẹ
      ↓
Vẽ lại bằng Crease
      ↓
Smooth hai bên
```

Kỹ thuật này đặc biệt hữu ích đối với:

* Đường môi.
* Cánh mũi.
* Mí mắt.
* Rãnh trong tai.

---

## 11.2. Làm việc từ lớn đến nhỏ

Ngay cả ở giai đoạn hoàn thiện, thứ tự thao tác vẫn nên là:

```text
Hình dáng tổng thể
        ↓
Khối trung bình
        ↓
Đường rãnh chính
        ↓
Chi tiết nhỏ
```

Không nên cố làm sắc một đường nhỏ khi hình dáng xung quanh nó vẫn chưa đúng.

---

## 11.3. Thường xuyên kiểm tra từ xa

Sau một vài nét brush:

1. Thu nhỏ góc nhìn.
2. Xoay mô hình.
3. Kiểm tra từ phía trước.
4. Kiểm tra góc ba phần tư.
5. Kiểm tra từ bên cạnh.

Điều này giúp phát hiện:

* Môi bị lệch.
* Mũi quá nhọn.
* Mí mắt không ôm nhãn cầu.
* Tai quá dày.
* Biểu cảm bị cường điệu quá mức.

---

## 11.4. Chỉ thực hiện những điều chỉnh nhỏ

Ở giai đoạn này, không nên thay đổi lớn cấu trúc nhân vật.

Các chỉnh sửa phù hợp gồm:

* Kéo một vùng vào trong một chút.
* Làm một rãnh sâu hơn nhẹ.
* Làm mượt một cục nhỏ.
* Thay đổi khóe mắt hoặc khóe môi.
* Thu nhỏ độ dày của tai.

Nếu cần thay đổi toàn bộ tỷ lệ đầu hoặc khuôn mặt, nên thực hiện trước khi tăng mật độ lưới.

---

# 12. Lỗi thường gặp

## 12.1. Crease quá sâu

### Hiện tượng

* Đường môi trông như bị cắt.
* Cánh mũi có rãnh quá đen.
* Mí mắt tách rời khỏi khuôn mặt.
* Tai có quá nhiều đường sắc.

### Cách sửa

* Smooth nhẹ trên đường rãnh.
* Giảm Strength của Crease.
* Tăng kích thước brush một chút.
* Vẽ lại bằng một nét đều hơn.

---

## 12.2. Smooth quá nhiều

### Hiện tượng

* Môi mất thể tích.
* Mí mắt biến mất.
* Mũi trở nên tròn và thiếu cấu trúc.
* Tai mất các rãnh chính.

### Cách sửa

* Dùng Draw để khôi phục thể tích.
* Dùng Crease để tạo lại đường phân khối.
* Smooth chỉ ở hai bên đường nét, không quét mạnh toàn bộ khu vực.

---

## 12.3. Tập trung quá lâu vào một vùng

Khi phóng quá gần, người học có thể liên tục chỉnh sửa một chi tiết mà không nhận ra nó đã không còn phù hợp với toàn bộ khuôn mặt.

### Cách phòng tránh

```text
Chỉnh vài nét → Thu nhỏ → Xoay mô hình → Đánh giá lại
```

---

## 12.4. Tăng mật độ lưới quá cao

### Hiện tượng

* Blender phản hồi chậm.
* Brush bị giật.
* Khó thực hiện các thay đổi lớn.
* File nặng hơn đáng kể.

### Cách xử lý

* Giữ mật độ hiện tại nếu đã đủ chi tiết.
* Chỉ Remesh xuống khoảng `0.008` khi máy tính có thể xử lý.
* Không tiếp tục giảm Voxel Size chỉ để có thêm polygon.

---

## 12.5. Tai quá phức tạp

Tai thật có cấu trúc rất phức tạp, nhưng việc cố tái hiện toàn bộ ngay từ đầu thường khiến kết quả trở nên rối.

Chỉ cần giữ ba thành phần chính:

```text
Vành tai ngoài
      +
Rãnh cong bên trong
      +
Một vùng lõm trung tâm
```

---

# 13. Quy trình thực hành đề xuất

## Bước 1 — Kiểm tra cổ và vai

* Thu nhỏ cổ nếu cần.
* Đẩy nhẹ phần trước cổ vào trong.
* Smooth vùng cổ, vai và đỉnh đầu.

## Bước 2 — Remesh lần cuối

* Chỉ thực hiện nếu máy tính đáp ứng được.
* Có thể đặt Voxel Size khoảng `0.008`.
* Nhấn `Ctrl + R`.

## Bước 3 — Tinh chỉnh môi

* Crease đường tiếp xúc giữa hai môi.
* Draw nhẹ nếu môi thiếu thể tích.
* Smooth hai bên đường rãnh.
* Grab để chỉnh khóe môi.

## Bước 4 — Tinh chỉnh mũi

* Crease quanh cánh mũi và lỗ mũi.
* Smooth các đường quá sắc.
* Grab để sửa vùng bị méo.

## Bước 5 — Tinh chỉnh mắt

* Crease mí trên và mí dưới.
* Smooth rồi vẽ lại nếu đường mí bị gãy.
* Grab để tạo biểu cảm cau có.
* Điều chỉnh khóe mắt.

## Bước 6 — Tinh chỉnh tai

* Tạo đường cong dạng dấu hỏi.
* Draw thêm thể tích ở vành tai.
* Grab để làm tai mỏng hoặc nhọn hơn.
* Crease các rãnh chính.

## Bước 7 — Kiểm tra lần cuối

* Xoay mô hình 360°.
* Kiểm tra trước, bên và góc ba phần tư.
* Smooth những vùng còn gồ ghề.
* Đảm bảo các đường Crease không quá sâu.
* Lưu file.

---

# 14. Checklist thực hành

## Hình dáng tổng thể

* [ ] Cổ không quá rộng so với đầu.
* [ ] Phần trước cổ đã được đẩy vào nhẹ.
* [ ] Vai và đỉnh đầu không còn các vùng gồ ghề lớn.
* [ ] Hình dáng nhân vật vẫn cân đối khi nhìn từ nhiều góc.

## Remesh

* [ ] Đã làm sạch bề mặt trước khi Remesh.
* [ ] Chỉ tăng mật độ nếu máy tính xử lý được.
* [ ] Sau Remesh, mesh vẫn giữ đúng hình dáng tổng thể.

## Môi

* [ ] Hai môi có đường phân cách rõ.
* [ ] Đường môi không bị răng cưa.
* [ ] Môi vẫn có đủ thể tích.
* [ ] Khóe môi phù hợp với biểu cảm nhân vật.

## Mũi

* [ ] Cánh mũi có đường chuyển tiếp rõ.
* [ ] Lỗ mũi sạch và không quá sắc.
* [ ] Đầu mũi không bị méo.
* [ ] Hai bên mũi nối tự nhiên với má.

## Mắt

* [ ] Mí mắt ôm quanh nhãn cầu.
* [ ] Đường mí không bị gãy.
* [ ] Khóe mắt có hình dáng hợp lý.
* [ ] Biểu cảm cau có phù hợp với nhân vật.

## Tai

* [ ] Vành tai có đủ thể tích.
* [ ] Có đường cong chính bên trong tai.
* [ ] Các rãnh không quá phức tạp.
* [ ] Tai không quá dày.
* [ ] Đầu tai đã được làm nhọn nhẹ nếu phù hợp với thiết kế.

## Hoàn thiện

* [ ] Đã kiểm tra mô hình từ mọi góc.
* [ ] Không còn vùng gồ ghề dễ nhận thấy.
* [ ] Các chi tiết không bị sắc quá mức.
* [ ] Đã lưu file trước khi kết thúc bài.

---

# 15. Ghi nhớ

> Sculpting cần nhiều thời gian luyện tập. Mô hình của bạn không cần phải giống hoàn toàn với mô hình của giảng viên.

Điều quan trọng là:

* Hiểu cách quan sát hình dáng.
* Biết lúc nào nên dùng Smooth.
* Biết cách làm sắc đường nét bằng Crease.
* Biết sửa hình bằng Grab.
* Không chỉnh sửa quá mức.
* Thường xuyên kiểm tra mô hình ở khoảng cách xa.

---

# 16. Tóm tắt bài học

Trong bài **Refining the Sculpt**, chúng ta hoàn thiện bản sculpt đầu nhân vật bằng cách điều chỉnh cổ và vai, làm sạch bề mặt, thực hiện một lần Voxel Remesh cuối, sau đó tinh chỉnh lần lượt môi, mũi, mắt và tai.

Các công cụ chính được sử dụng gồm:

* **Smooth** để loại bỏ bề mặt gồ ghề.
* **Crease** để làm rõ các đường rãnh.
* **Draw** để bổ sung thể tích.
* **Grab** để sửa hình dáng.
* **Voxel Remesh** để tăng mật độ lưới phục vụ việc hoàn thiện.

Kết thúc bài học, nhân vật đã có bề mặt sạch hơn, các đường nét khuôn mặt rõ ràng hơn và biểu cảm phản diện được thể hiện tốt hơn, sẵn sàng cho các bước phát triển nhân vật tiếp theo.
