---
title: "Bài 04 — Lựa chọn hướng màn hình cho trò chơi AR"
pathway: "Mobile AR Development"
module: "AR Experience Design"
lesson_number: 4
lesson_type: "lesson"
unity_version: "2022.3 (đề mục tham chiếu)"
language: "vi"
content_type: "Bài học tự biên soạn"
---

# Bài 04 — Lựa chọn hướng màn hình cho trò chơi AR

> **Chủ đề:** Thiết kế trải nghiệm thực tế tăng cường (AR) với Unity, minh họa xuyên suốt bằng trò chơi UFO.  
> **Định hướng:** Đọc độc lập, thực hành theo từng bước và kiểm chứng trực tiếp trong Unity; các ví dụ minh họa không phải toàn văn hoặc mã nguồn chính thức của Unity Learn.

## 1. Bối cảnh thiết kế

Ứng dụng AR yêu cầu người dùng **vừa quan sát môi trường qua camera, vừa chạm vào giao diện**. Hướng màn hình dọc (`Portrait`) hoặc ngang (`Landscape`) làm thay đổi vùng quan sát, quãng di chuyển ngón tay và cách đặt các nút điều khiển UFO. Chọn hướng màn hình là quyết định về **trải nghiệm sử dụng**, không chỉ là thiết lập kỹ thuật.

## 2. Mục tiêu học tập

- Phân tích ưu và nhược của Portrait/Landscape đối với game UFO AR.
- Thiết kế một bố cục có vùng quan sát, vùng thao tác và thông báo trạng thái.
- Biết vị trí cấu hình orientation trong `Player Settings` và kiểm tra trên thiết bị.
- Phát hiện tình huống UI bị che bởi mép màn hình hoặc vùng an toàn (*safe area*).

## 3. So sánh hai phương án

| Tiêu chí | Portrait | Landscape |
|---|---|---|
| Tương tác bằng một tay | Thường thuận lợi hơn | Có thể cần hai tay |
| Không gian theo chiều ngang | Hẹp hơn | Rộng hơn, hợp chuyển động ngang |
| Bố trí nút điều khiển | Có thể gom phía dưới | Có thể tách hai bên màn hình |
| Quan sát mặt phẳng và mục tiêu | Phù hợp hành trình quét dọc | Phù hợp vùng chơi trải rộng |
| Rủi ro giao diện | Nút chồng lên mục tiêu ở giữa | Mép trái/phải bị UI chiếm nhiều |

Không có lựa chọn tốt nhất cho mọi game. Ví dụ, nếu UFO di chuyển chủ yếu trái–phải trên một bàn dài, Landscape có thể dễ quan sát hơn; nếu người chơi cần giữ máy một tay và chạm nút hút, Portrait có thể thuận lợi hơn.

## 4. Quy tắc tổ chức màn hình

```text
+------------------------------+
|  Hướng dẫn AR / trạng thái    |
|------------------------------|
|                              |
|       VÙNG CAMERA + UFO      |
|       VÙNG MỤC TIÊU          |
|                              |
|------------------------------|
| Di chuyển          [HÚT]     |
+------------------------------+
```

Đây là **wireframe minh họa** cho Portrait. Các nút điều khiển nên dễ tiếp cận và không che mục tiêu. Cần sử dụng các thiết lập `Anchor` của UI để bố cục giữ được vị trí tương đối trên nhiều kích cỡ màn hình, đồng thời chú ý vùng an toàn ở máy có notch hoặc camera cutout.

## 5. Các bước thực hành

1. Phác thảo cùng một màn hình chơi ở Portrait và Landscape, giữ nguyên số nút và các thông báo.
2. Với từng phương án, đánh dấu ba vùng: **camera/thế giới**, **điều khiển**, **thông tin trạng thái**.
3. Trong Unity, mở phần thiết lập ứng dụng cho platform mục tiêu (`Player Settings`) và chọn orientation tương ứng; tên mục cụ thể có thể thay đổi theo phiên bản.
4. Gắn UI vào Canvas, kiểm tra `Anchor`, kích thước nút và vùng chạm trên các tỷ lệ màn hình khác nhau.
5. Chạy trên điện thoại: tìm bề mặt, đặt UFO, di chuyển và nhấn hút. Quan sát xem tay hoặc UI có che UFO/mục tiêu không.
6. Chốt một hướng màn hình và viết quyết định thiết kế gồm **lý do, đánh đổi và tình huống đã kiểm thử**.

**Checkpoint:** người thử có thể hoàn thành cả hai thao tác “di chuyển” và “hút” mà không cần tìm kiếm nút hay mất dấu mục tiêu.

## 6. Lưu ý khi thiết kế

- **Không khóa quá sớm:** đánh giá ít nhất hai phác thảo trước khi chọn.
- **Không bỏ qua safe area:** UI đẹp trên Game view có thể bị notch che trên máy thật.
- **Không coi camera là UI:** nội dung thế giới AR có thể nằm sau các nút; phải thử khi dịch chuyển điện thoại.
- **Không chỉ nhìn tỷ lệ khung:** hướng cầm điện thoại còn ảnh hưởng độ mỏi tay và khả năng quét không gian.

## 7. Bài tập và kết quả

Thiết kế hai wireframe tương ứng Portrait và Landscape. Tổ chức một phép thử ngắn với cùng nhiệm vụ: đặt UFO, chạm điều khiển trong vài bước và hút một mục tiêu. Ghi lại lựa chọn cuối cùng.

- [ ] Có hai bản phác thảo kèm chú thích.
- [ ] Có lý do lựa chọn orientation.
- [ ] UI không bị che bởi vùng an toàn của thiết bị thử.
- [ ] Có ảnh/video kiểm chứng thao tác khi cầm máy.

## 8. Câu hỏi ôn tập

**Câu 1. Khi game AR dùng điều khiển bằng một tay, chế độ nào thường dễ bố trí nút ở phần dưới?**

A. Portrait, nếu bố cục thiết kế phù hợp  
B. Chỉ Landscape  
C. Chỉ Orthographic  
D. Bất kỳ chế độ nào không cần thử  

**Đáp án:** A. **Giải thích:** Portrait có thể tạo vùng thao tác một tay thuận tiện, nhưng phải đánh giá theo gameplay.

**Câu 2. Vì sao không nên chỉ xoay màn hình để quyết định orientation?**

A. Vì máy có pin  
B. Vì còn phải xét vị trí UI, vùng camera và tương tác  
C. Vì scene Unity không có Camera  
D. Vì HUD luôn cố định đúng  

**Đáp án:** B. **Giải thích:** Orientation ảnh hưởng phân bổ không gian và vị trí nút, không chỉ phép xoay hình.

**Câu 3. Điều gì cần kiểm tra trên điện thoại có notch/camera cutout?**

A. Thời gian biên dịch  
B. Tên prefabs  
C. Safe area và nội dung sát mép  
D. Cỡ file âm thanh  

**Đáp án:** C. **Giải thích:** Safe area tránh các vùng không hiển thị hoặc khó thao tác.

**Câu 4. Nếu chuyển sang Landscape khiến mục tiêu bị nút che, cách xử lý tốt nhất?**

A. Tăng kích thước nút  
B. Xóa mục tiêu  
C. Tắt camera  
D. Điều chỉnh layout, anchor và vùng tương tác  

**Đáp án:** D. **Giải thích:** Cần tối ưu bố cục để giữ mục tiêu và điều khiển dễ quan sát.

**Câu 5. Làm sao chọn orientation dựa trên bằng chứng?**

A. Thử trên thiết bị với nhiệm vụ chơi giống nhau và ghi quan sát  
B. Chọn theo sở thích người lập trình không cần test  
C. Chọn chế độ không cần UI  
D. Chọn theo tên project  

**Đáp án:** A. **Giải thích:** Thử nghiệm theo kịch bản giúp đánh giá khả năng nhìn thấy và thao tác.

---

**Đọc thêm:** [Unity Learn — AR Experience Design](https://learn.unity.com/pathway/mobile-ar-development/unit/ar-experience-design?version=2022.3). Nội dung các bước và ví dụ trong tài liệu này là bài tập tự biên soạn, có thể cần điều chỉnh theo cấu trúc project và package thực tế.
