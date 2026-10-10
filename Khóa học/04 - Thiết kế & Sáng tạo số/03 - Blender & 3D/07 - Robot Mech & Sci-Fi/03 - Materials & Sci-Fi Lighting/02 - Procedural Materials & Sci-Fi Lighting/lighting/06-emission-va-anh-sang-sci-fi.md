# Bài 06 — Emission Shader và bố trí ánh sáng Sci-Fi đỏ–xanh

## 1. Tóm tắt

Các lớp vật liệu giúp robot có khối và chất, nhưng ánh sáng quyết định điểm nhấn cuối cùng. Bài này tạo một vùng Emission màu đỏ trên thân/đầu robot, sau đó dàn một hệ thống **sáu đèn bổ sung**: hai đèn viền màu đỏ và xanh, một Area Light lớn từ phía trên và ba Point Light để bù sáng. HDRI tiếp tục đảm nhiệm ánh sáng môi trường và phản xạ.

## 2. Mục tiêu học tập

- Phân biệt `Emission Shader` với `Area Light` và `Point Light`.
- Gán vật liệu phát sáng cho một phần nhỏ của robot.
- Dùng màu phát sáng `#FF4A3D` và Strength tham khảo `50`.
- Bố trí rim light đỏ–xanh để tách silhouette khỏi nền.
- Dùng đèn chính và đèn bù để tránh vùng tối mất chi tiết.
- Kiểm tra kết quả từng nguồn sáng bằng cách tạm ẩn/hiện đèn.

## 3. Vật liệu Emission hoạt động như thế nào?

`Emission Shader` mô tả bề mặt **tự phát sáng về mặt hiển thị**. Nó không giống một đèn vật lý đặt trong scene. Trong cấu hình render khác nhau, vật liệu phát sáng có thể cần thêm giải pháp chiếu sáng gián tiếp hoặc đèn thật để thắp sáng vật thể xung quanh.

Trong bài này, `Emission` được dùng để làm vùng đèn robot sáng rực; những nguồn `Area` và `Point` riêng biệt phụ trách chiếu sáng mô hình.

## 4. Tạo đèn đỏ bằng Emission Shader

1. Chọn object chứa bộ phận đèn nhỏ trên robot, vào `Edit Mode`.
2. Bỏ chọn vùng cũ (`Alt + A`); di chuột tới chi tiết đèn, nhấn `L` nếu nó là phần hình học liên thông.
3. Trong `Material Properties`, tạo slot và material tên `Red Light`.
4. Khi vùng đèn vẫn được chọn, bấm `Assign`.
5. Mở `Shader Editor` của material này. Xóa `Principled BSDF` khỏi mạng của `Red Light` nếu bạn muốn dùng shader thuần phát sáng.
6. Thêm `Emission` và nối đầu ra `Emission` vào `Material Output: Surface`.
7. Đặt `Strength ≈ 50` và màu phát sáng **`#FF4A3D`**.
8. Quay về `Object Mode` và kiểm tra dưới `Rendered`.

```text
Emission (Color #FF4A3D, Strength 50)
        ↓
Material Output: Surface
```

Màu đỏ thuần bão hòa cao có thể trông gắt hoặc hồng khi quầng sáng lan ra. Màu `#FF4A3D` sáng, hơi pha trắng giúp vùng lõi đèn sáng mạnh nhưng vẫn giữ cảm giác quầng đỏ. `Strength = 50` là mốc minh họa, không phải mức phù hợp cố định với mọi exposure.

**Về Bloom:** Trong giao diện Eevee cũ, Bloom được bật ở phần render; với cấu hình Blender mới có thể phải tạo quầng sáng qua compositor hoặc cơ chế tương ứng. Vật liệu Emission tự sáng không đảm bảo tự có halo rõ trong mọi thiết lập.

## 5. Bố trí đèn viền đỏ và xanh

### 5.1. Rim Light đỏ

1. Trong `Object Mode`, nhấn `Shift + A` → `Light` → `Area`.
2. Di chuyển đèn bằng `G`, xoay bằng `R`; dùng `Numpad 7` để kiểm tra hướng nhìn từ trên xuống.
3. Đặt đèn về phía sau, hướng nguồn sáng vào cạnh robot để tạo đường viền sáng khi nhìn từ góc camera chính.
4. Ban đầu đặt Power khoảng `500` để kiểm tra, sau đó nâng lên **khoảng `5000`** trong cảnh minh họa.
5. Đổi màu đèn thành **đỏ**.
6. Thay Shape của Area Light từ `Square` sang `Rectangle` và tăng kích thước theo chiều dọc (trục Y trong giao diện Shape) để tạo vệt sáng dài chạy dọc cơ thể.

Đèn viền không nhằm chiếu sáng toàn bộ mặt trước. Nó giúp tách rìa silhouette, làm lộ các cạnh giáp và tăng cảm giác không gian.

### 5.2. Rim Light xanh

1. Chọn Area Light đỏ, nhấn `Shift + D` để nhân bản.
2. Chuyển đèn qua phía đối diện của robot, xoay hướng chiếu vào cạnh bên cần nhấn mạnh.
3. Đổi màu thành **xanh dương**.
4. Giữ Power tham khảo **khoảng `5000`**.
5. Xem từ góc camera chính để đảm bảo hai màu không phủ kín hoàn toàn lớp vật liệu bên dưới.

Đỏ và xanh tạo tương phản màu đặc trưng Sci-Fi; độ mạnh thực tế còn phụ thuộc kích thước nguồn sáng, khoảng cách, exposure và tỷ lệ robot.

## 6. Tạo đèn chính từ phía trên

1. Nhân bản một `Area Light` đã tạo (`Shift + D`).
2. Đưa nó lên cao hơn và hướng xuống robot.
3. Chuyển Shape về `Square`, tăng kích thước vùng chiếu.
4. Đổi màu thành **trắng hơi ngả xanh** thay vì xanh bão hòa mạnh.
5. Xoay đèn cho điểm phản xạ đi qua các phần đáng chú ý, nhất là mắt và phần đầu.

Đèn chính này bổ sung vùng sáng lớn và mềm hơn để robot không chỉ hiện như hai đường viền đỏ–xanh trên nền tối.

## 7. Thêm ba Point Light bù sáng

1. Nhấn `Shift + A` → `Light` → `Point`.
2. Đặt đèn tại vùng còn tối, không được chiếu tốt bởi HDRI và các Area Light.
3. Đặt Power tham khảo **khoảng `1000`** và màu gần trắng, hơi xanh.
4. Nhân bản bằng `Shift + D` thành tổng cộng **ba Point Light**.
5. Bố trí từng đèn tại các vùng cần thêm chi tiết, quan sát trực tiếp thay vì xếp đều một cách máy móc.

Ba Point Light là nhóm **fill light**: hỗ trợ thấy các ống, viền hoặc chi tiết đang chìm trong bóng. Chúng không nhất thiết phải mạnh bằng đèn viền.

## 8. Sơ đồ hệ thống lighting

```text
            Area Light lớn (trắng hơi xanh)
                         ↓
    Area đỏ  →    [ ROBOT MECH ]    ←  Area xanh
      (rim)                              (rim)
                  ↖   ↑   ↗
              Point 1  2  3 (fill)

    World HDRI: ánh sáng môi trường + phản xạ
    Red Light Emission: chi tiết phát sáng trên robot
```

Sáu đèn trong sơ đồ là **hai rim Area + một Area lớn + ba Point**. Ngoài ra cảnh có **HDRI** và **material Emission**. Không tính Emission hoặc HDRI thành một trong sáu đèn vật thể.

## 9. Kiểm tra ánh sáng có kiểm soát

Để biết một nguồn sáng đang làm gì, chọn đèn và dùng `H` để tạm ẩn, `Alt + H` để hiện lại. So sánh khung nhìn theo từng bước:

1. Chỉ HDRI: xác định độ sáng nền và phản xạ cơ bản.
2. Thêm rim đỏ: kiểm tra viền đỏ có bám đúng silhouette không.
3. Thêm rim xanh: kiểm tra viền hai phía có tách rõ không.
4. Thêm Area trên: kiểm tra mắt và phần đầu có highlight không.
5. Thêm ba Point: kiểm tra vùng tối còn bị mất chi tiết không.
6. Bật Emission: kiểm tra vùng đèn robot phát sáng đúng vị trí.

Nếu vật liệu bắt đầu mất chi tiết vì quá sáng, điều chỉnh năng lượng, vị trí hoặc exposure; không cố giữ mọi nguồn ở mức Power minh họa.

## 10. Bảng cấu hình thực hành

| Thành phần | Số lượng | Cấu hình tham khảo |
| --- | ---: | --- |
| HDRI World | 1 | `Suburban Field 02` 1K `.hdr` |
| Emission trên robot | 1 vùng | `#FF4A3D`, Strength `50` |
| Rim Area đỏ | 1 | Đỏ, Rectangle, Power khoảng `5000` |
| Rim Area xanh | 1 | Xanh dương, Rectangle, Power khoảng `5000` |
| Main Area | 1 | Square lớn, trắng hơi xanh, hướng xuống robot |
| Fill Point | 3 | Gần trắng hơi xanh, Power khoảng `1000` mỗi đèn |

Power của main Area không có một số cố định được chỉ rõ ở phần bố trí cuối; hãy điều chỉnh bằng quan sát thay vì tự mặc định bằng các đèn khác.

## 11. Thực hành và lỗi thường gặp

**Thực hành:** Tạo đủ hệ thống ánh sáng trên một robot mech có `Light Metal`, `Dark Metal`, `Eyes`, `Plastic` và `Pipes`. Xuất một ảnh góc chính và một ảnh kiểm tra góc bên; lưu file `mech_06_lighting.blend`.

**Checkpoint:** Viền đỏ và xanh xuất hiện ở hai hướng, phần đầu có vùng sáng chính, các mảng tối còn thấy được chi tiết, mắt có highlight, vùng Emission nổi bật nhưng không che toàn bộ hình khối.

| Triệu chứng | Nguyên nhân / cách kiểm tra |
| --- | --- |
| Emission sáng nhưng không chiếu lên giáp | Emission không đồng nghĩa với Area/Point Light trong mọi engine |
| Không có quầng sáng | Kiểm tra cách thiết lập Bloom/Glare theo phiên bản |
| Robot bị cháy sáng | Giảm Power, điều chỉnh khoảng cách đèn hoặc exposure |
| Hai đèn viền không lộ cạnh | Đổi vị trí/hướng chiếu tương đối với camera |
| Mắt không có phản xạ đẹp | Điều chỉnh nguồn Area lớn và góc quan sát |
| Chi tiết dưới bụng chìm trong bóng | Bổ sung/chỉnh Point Light bù sáng |

## 12. Câu hỏi ôn tập

**Câu 1.** `Emission Shader` khác `Area Light` ở điểm quan trọng nào?

A. Emission luôn tạo mesh mới.  
B. Emission luôn chiếu sáng toàn bộ scene giống Area Light.  
C. Emission làm bề mặt hiển thị như đang phát sáng; tác dụng chiếu sáng xung quanh phụ thuộc engine và thiết lập.  
D. Area Light chỉ dùng để tô màu vật liệu.

**Đáp án: C.** Vật liệu phát sáng và nguồn sáng vật thể là hai loại thành phần khác nhau.

**Câu 2.** Vì sao Rim Light được đặt lệch về phía sau robot?

A. Để tạo đường sáng trên mép silhouette.  
B. Để tự tăng polygon.  
C. Để tắt HDRI.  
D. Để biến mắt thành gương.

**Đáp án: A.** Nguồn phía sau thường làm sáng rìa vật thể, giúp tách robot khỏi nền.

**Câu 3.** Hệ thống đèn vật thể cuối bài gồm cấu hình nào?

A. Sáu Point Light.  
B. Ba Rim Light và ba Camera.  
C. Một HDRI và năm Emission.  
D. Hai rim Area, một Area lớn, ba Point.

**Đáp án: D.** Tổng cộng sáu đèn vật thể, chưa kể HDRI và Emission trên robot.

**Câu 4.** Muốn xem nguồn sáng nào gây lóa, thao tác nào hữu ích?

A. Xóa vật liệu mắt ngay lập tức.  
B. Ẩn/hiện từng đèn để so sánh.  
C. Tăng cả sáu đèn cùng lúc.  
D. Xóa toàn bộ Color Ramp.

**Đáp án: B.** Bật tắt nguồn sáng có kiểm soát giúp xác định nguyên nhân.

**Câu 5.** Thành phần nào chủ yếu giúp bù vùng cơ khí đang quá tối trong bố cục này?

A. Material Slot.  
B. Bump Strength.  
C. Nhóm Point Light.  
D. Color Ramp của mắt.

**Đáp án: C.** Các Point Light được đặt nhằm đưa thêm ánh sáng vào vùng thiếu sáng.

## 13. Tổng kết

Robot có vùng phát sáng đỏ, hai đèn viền tương phản đỏ–xanh, một Area Light chính và ba đèn Point bù sáng. HDRI tiếp tục đóng vai trò môi trường phản xạ; các vật liệu và ánh sáng phối hợp để làm nổi bật thiết kế cơ khí.
