# Bài 07 — Lab: Hoàn thiện vật liệu và ánh sáng cho robot Mech

## 1. Tổng quan

Đây là bài thực hành tổng hợp để áp dụng một quy trình hoàn chỉnh: cấu hình Eevee/HDRI, tạo các nhóm vật liệu procedural, gán vật liệu đúng vùng, thêm Emission và xây dựng bộ ánh sáng Sci-Fi. Mục tiêu là tạo cảnh có khả năng chỉnh sửa trực tiếp trong Blender, không chỉ tạo một ảnh nhìn đẹp ở một góc.

## 2. Mục tiêu

Sau Lab, bạn có thể:

- Thiết lập đầy đủ một scene chiếu sáng cho mô hình robot mech.
- Tạo hoặc tái sử dụng ít nhất các material `Light Metal`, `Dark Metal`, `Eyes`, `Plastic`, `Pipes`, `Red Light`.
- Kiểm soát material slots ở vùng bu lông, viền, ống, mắt và ăng-ten.
- Chẩn đoán shader bị quá bóng, quá nhám hoặc sáng lệch vùng.
- Kiểm tra cảnh từ nhiều góc và lưu sản phẩm `.blend` có tổ chức.

## 3. Chuẩn bị

- Một model robot đã được tạo hình trước đó, có đủ hoặc có thể thay thế các nhóm chi tiết: giáp, mắt, nhựa, ống, bu lông, đèn.
- Blender với Shader Editor, Material Properties, World và các loại light cơ bản.
- Một ảnh HDRI để kiểm tra vật liệu.
- Thư mục làm việc chứa file dự án và ảnh kiểm tra.

Không cần dựng lại toàn bộ robot. Nếu model hiện có là một mesh duy nhất, hãy sử dụng Material Slots và vùng face chọn thủ công.

## 4. Quy trình thực hiện

### 4.1. Giai đoạn A — Cảnh và vật liệu nền

1. Lưu bản sao dự án trước khi thay đổi vật liệu.
2. Chọn Eevee, chuyển sang chế độ Rendered, thiết lập Color Management theo bài 01.
3. Nạp HDRI vào World; thử bật `Film > Transparent`.
4. Tạo `Light Metal` với AO, hai lớp Noise, trộn Darken, `Metallic = 1`, `Bump Strength ≈ 0.06`, Roughness có biến thiên.
5. Dùng `Link Materials` để tái sử dụng trên phần vỏ phù hợp.

**Checkpoint A:** Vỏ robot phản xạ HDRI và có vết mòn/độ nhám tinh tế; không có normal bị lỗi.

### 4.2. Giai đoạn B — Vật liệu chi tiết

1. Tạo `Eyes`: Base Color đen, Roughness khoảng `0.1`.
2. Tạo `Plastic`: Base Color `#1F1F1F`, Roughness khoảng `0.2`; Noise làm biến dạng Voronoi; Bump Strength khoảng `0.03`.
3. Tạo `Pipes`: Base Color `#9B9B9B`, Metallic `1`, Noise Scale khởi đầu `3` có thể tăng `10–12`, Roughness theo Color Ramp, Bump Strength khoảng `0.02`.
4. Sao chép `Light Metal` thành bản vật liệu độc lập `Dark Metal`; làm tối phần ramp màu và tăng mức nhám phù hợp.
5. Gán `Dark Metal` cho viền, bu lông và các mảng ốp đã chọn; gán `Pipes` cho ăng-ten nếu phù hợp.

**Checkpoint B:** Mỗi nhóm chất liệu có tính chất phân biệt được; không có mặt bị gán sai material.

### 4.3. Giai đoạn C — Emission và lighting

1. Tạo `Red Light` sử dụng `Emission`, màu `#FF4A3D`, Strength khoảng `50`.
2. Thêm Area Light viền đỏ phía sau robot, Shape Rectangle, Power tham khảo `5000`.
3. Nhân bản thành Area viền xanh ở phía đối diện.
4. Thêm Area Light lớn từ phía trên, màu trắng hơi xanh; xoay để tăng phản xạ vào phần đầu/mắt.
5. Thêm ba Point Light bù sáng, Power tham khảo `1000` mỗi đèn.
6. Tắt/bật đèn theo nhóm để điều chỉnh sáng–tối và giữ màu vật liệu không bị lấn át.

**Checkpoint C:** Viền đỏ–xanh rõ, vùng mắt có highlight, chi tiết tối vẫn thấy được và Emission không làm cháy cả đầu robot.

### 4.4. Giai đoạn D — Hoàn thiện

1. Xem từ góc chính, góc bên và mặt sau; kiểm tra vị trí bất thường của phản xạ.
2. Kiểm tra lại `Material Slots` ở các chi tiết nhỏ, đặc biệt bu lông và ăng-ten.
3. Lưu dự án cuối thành `mech_final_materials_lighting.blend`.
4. Xuất ảnh kiểm tra từ hai góc để đánh giá mức độ nhất quán.

## 5. Kiểm thử và xử lý lỗi

| Kiểm thử | Dấu hiệu đạt | Nếu chưa đạt |
| --- | --- | --- |
| Kim loại | Có phản xạ, AO ở khe và Roughness thay đổi | Kiểm tra Metallic, World và nhánh node |
| Normal | Không có vệt shading lạ | Không nối bản đồ màu trực tiếp vào BSDF Normal; qua Bump |
| Mắt | Bóng, tương phản với khung | Kiểm tra Roughness và vị trí Area Light |
| Nhựa | Có vi chi tiết, không quá gồ ghề | Hạ Bump Strength |
| Ống | Không quá bóng, có vân nhẹ | Điều chỉnh Noise Scale và Roughness ramp |
| Dark Metal | Là bản material độc lập, đủ tối | Kiểm tra đã Duplicate/Single User chưa |
| Bu lông | Tối đúng chỗ, không bị dính màu sang giáp | Chọn lại face và Assign |
| Emission | Phát sáng đúng vùng | Kiểm tra slot, Emission Surface và hiệu ứng Glare/Bloom |
| Lighting | Tách viền tốt, mặt trước đủ sáng | Chỉnh hướng Area và vị trí Point |

## 6. Sản phẩm cần nộp

- **File Blender** `mech_final_materials_lighting.blend` gồm mô hình, material và đèn có thể chỉnh sửa.
- **Ảnh 01**: Góc chính, thể hiện rõ vật liệu và bố cục ánh sáng đỏ–xanh.
- **Ảnh 02**: Góc phụ, thấy các vùng vật liệu ở cạnh/thân hoặc phía sau.
- **Bảng tự đánh giá** theo checklist dưới đây (có thể điền ngay trong file Markdown này).

## 7. Checklist Definition of Done

- [ ] HDRI được nạp đúng và chiếu sáng scene.
- [ ] `Light Metal` có AO, Noise, Roughness và Bump phù hợp.
- [ ] `Dark Metal` là datablock riêng và đã được gán cho viền/bu lông.
- [ ] Vật liệu mắt có độ bóng cao mà không làm mất ánh phản xạ.
- [ ] Nhựa có vi chi tiết từ Noise và Voronoi.
- [ ] Các ống dùng `Pipes` và không bị quá bóng.
- [ ] Material slots được Assign đúng face ở mọi góc kiểm tra.
- [ ] Vùng `Red Light` dùng Emission đúng bộ phận.
- [ ] Có hai Area rim đỏ–xanh, một Area lớn và ba Point Light.
- [ ] Phản xạ và highlight không che mất hình dáng robot.
- [ ] File `.blend` được lưu và có ít nhất hai ảnh kiểm tra.

## 8. Tiêu chí tự đánh giá

| Nhóm | Tiêu chí | Tỷ trọng gợi ý |
| --- | --- | ---: |
| Cấu hình cảnh | HDRI, preview và màu hiển thị hợp lý | 15% |
| Shader | Kim loại, nhựa, mắt, ống có đặc tính riêng | 35% |
| Gán vật liệu | Các vùng và các material slot chính xác | 20% |
| Ánh sáng | Rim, main, fill, Emission rõ và cân bằng | 20% |
| Hoàn thiện | File lưu đúng, kiểm tra nhiều góc | 10% |

Các tỷ trọng trên là rubric thực hành do giáo trình đề xuất, không phải thông số kỹ thuật của Blender.

## 9. Câu hỏi ôn tập

**Câu 1.** Robot có vật liệu Dark Metal nhưng khi chỉnh màu thì Light Metal cũng đổi theo. Hướng xử lý đúng?

A. Xóa Point Light.  
B. Đổi World Color.  
C. Tăng Motion Blur.  
D. Tạo bản sao datablock material độc lập.

**Đáp án: D.** Material dùng chung không thể chỉnh riêng mà không ảnh hưởng các object khác đang dùng nó.

**Câu 2.** Màu đen trắng từ Noise được nối trực tiếp vào `Principled Normal` gây shading bất thường. Bước sửa nào phù hợp?

A. Đưa Noise/Color Ramp vào `Bump Height`, nối `Bump Normal` vào BSDF Normal.  
B. Tăng Number of Samples.  
C. Bật Wireframe.  
D. Xóa mắt robot.

**Đáp án: A.** Bump chuyển dữ liệu cao độ thành normal đúng chức năng.

**Câu 3.** Phần mắt đen không thấy điểm sáng dù Roughness đã là 0.1. Nên kiểm tra gì trước?

A. Chiều dài timeline.  
B. Tên file HDRI có dấu cách hay không.  
C. Hướng nguồn sáng, phản xạ môi trường và góc camera.  
D. Độ dài animation.

**Đáp án: C.** Mắt bóng vẫn cần môi trường và góc phản xạ phù hợp để xuất hiện highlight.

**Câu 4.** Cảnh có Emission nhưng không có ánh sáng đủ trên tấm giáp bên cạnh. Giải pháp phù hợp?

A. Giảm độ phân giải render.  
B. Điều chỉnh/ thêm đèn vật thể hoặc hệ chiếu sáng gián tiếp phù hợp.  
C. Chỉ đổi tên material thành Area Light.  
D. Chuyển metallic về âm.

**Đáp án: B.** Emission hiển thị sáng không đảm bảo chiếu sáng trực tiếp vùng lân cận như đèn.

**Câu 5.** Cách kiểm tra bộ đèn nào làm robot bị cháy sáng nhanh và dễ hiểu nhất?

A. Tăng tất cả công suất.  
B. Xóa HDRI trước khi quan sát.  
C. Chỉ đổi màu mắt.  
D. Bật tắt từng đèn và so sánh ánh sáng trong cùng góc nhìn.

**Đáp án: D.** Cô lập nguồn sáng giúp nhận ra đèn nào tạo vấn đề.

## 10. Tổng kết

Bạn đã xây dựng một scene hoàn chỉnh từ vật liệu procedural đến ánh sáng Sci-Fi. Quan trọng hơn, quy trình này có thể dùng lại cho các model robot/cơ khí khác: tạo material nền → tạo biến thể theo nhóm chi tiết → gán đúng mặt → dàn ánh sáng → kiểm tra nhiều góc → lưu sản phẩm có thể chỉnh sửa.
