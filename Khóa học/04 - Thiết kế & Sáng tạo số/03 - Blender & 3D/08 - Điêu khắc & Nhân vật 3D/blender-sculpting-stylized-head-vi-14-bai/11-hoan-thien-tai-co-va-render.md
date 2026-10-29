# Bài 11 — Hoàn thiện tai, cổ và trình bày render

> **Khóa học Blender Sculpting — đầu nhân vật stylized | Tài liệu tiếng Việt**  
> **Nguồn chính:** transcript dài khoảng 1 giờ 34 phút do người học cung cấp. **Mốc trong mỗi bài là thời gian video**, không phải thời lượng thực hành.  
> **Mức độ:** bắt đầu → trung cấp; ưu tiên dựng hình khối đầu và học kỹ thuật Sculpt Mode.

> **Quy ước biên tập:** Nội dung *Theo bài gốc* bám sát trình tự và ý tưởng người dạy; các mục ghi **bổ sung** là hướng dẫn sư phạm/kiến thức phần mềm, không phải lời nói nguyên văn. Transcript có lỗi dịch máy: "không khí" = *ear (tai)*, "máy xay sinh tố" = *Blender*, "xe" có thể là *ears*, "sấy" là *sculpt* trong ngữ cảnh. Các vị trí không rõ đã được diễn đạt thận trọng. **Phím tắt và menu khác nhau giữa các phiên bản.**

**Đối chiếu bản ghi:** 1:23:21–1:34:20.

## Mục tiêu học tập
- Kiểm tra vùng vành tai, mặt sau tai, bờ hàm và cổ sau nhiều vòng sculpt.
- Thiết lập ánh sáng đơn giản để đọc rõ khối đầu.
- Xuất ảnh render từ các góc hữu ích cho portfolio.

## Theo bài gốc
Ở đoạn cuối, giảng viên thu vành tai lại, nhấn gờ lòng tai, sửa mặt sau tai, sau đó quay về phần cổ. Trong phần trình bày, giảng viên thử **Sun Light**, một môi trường ánh sáng **HDRI** và một **MatCap** có tương phản thuận tiện để kiểm tra form. Bản ghi không cung cấp một sơ đồ lighting ba điểm đầy đủ hay công thức chính xác về strength; phần dưới là quy trình bổ sung để bạn dễ tái lập.

## Phần A — Sculpt hoàn thiện
1. Từ Side, kiểm tra độ dài tai, tỷ lệ vành/lòng/dái tai.
2. Mask các khu vực đã ổn; điều chỉnh tai ra gần đầu hơn nếu cần.
3. Đắp gờ bị mất sau remesh bằng Clay Strips/Draw; thêm Crease cực nhẹ ở ranh giới.
4. Xoay ra sau tai để đảm bảo có độ dày và chân tai nối đầu.
5. Làm mượt vùng cổ và nối góc hàm–gáy, tránh hiệu ứng 'cổ cắm vào cằm'.
6. Lưu tệp cuối `head_sculpt_final.blend` trước phần vật liệu/render.

## Phần B — Ánh sáng và xuất ảnh (bổ sung học tập)
1. Dùng **Material Preview / MatCap** trong Viewport để đọc mảng sáng tối nhanh; đó không nhất thiết là ảnh render cuối.
2. Đặt một nguồn **Area Light** hoặc Sun Light ở phía trên–trước, để bóng làm rõ hốc mắt và gò má nhưng không che tối toàn bộ một bên.
3. Nếu sử dụng **HDRI**, nạp môi trường phù hợp và xoay nó đến khi mảng sáng cho thấy form. HDRI thường là nguồn chiếu sáng môi trường, không phải texture màu da.
4. Đặt camera ở góc Front, Side hoặc 3/4; điều chỉnh focal length để tránh méo phối cảnh không mong muốn.
5. Chọn engine phù hợp (Eevee/Cycles tùy máy) và xuất PNG. Ghi lại cấu hình ánh sáng để có thể tái lập.

```mermaid
flowchart LR
    A[Mesh được tinh chỉnh] --> B[MatCap kiểm tra form]
    B --> C[Key Light hoặc HDRI]
    C --> D[Camera 3/4]
    D --> E[Render PNG]
    E --> F[Đối chiếu silhouette]
```

## Điều cần hiểu
Ánh sáng đẹp có thể giúp người xem nhận rõ điêu khắc nhưng **không sửa được hình học sai**. Vì vậy luôn thử một ảnh clay render trung tính trước khi dùng vật liệu da hoặc hiệu ứng phức tạp.

## Bài tập
Xuất bộ ảnh 4 góc: Front, Side, 3/4, Back (hoặc close-up tai). Dùng cùng vật liệu clay và hệ ánh sáng tương đương để dễ so sánh.

## Tiêu chí hoàn thành
- [ ] Tai có mặt sau hợp lý, bờ hàm–cổ liền mạch.
- [ ] Có ảnh kiểm form MatCap hoặc studio clay.
- [ ] Có ít nhất ba ảnh render đánh giá được silhouette.

---
## Tự đánh giá nhanh
1. Phần nào trong bài là khối lớn cần ưu tiên hơn nếp/rãnh nhỏ?
2. Ảnh góc 3/4 cho thấy vấn đề gì mà ảnh Front không thể hiện đủ?
3. Bạn sẽ lưu file và kiểm tra mật độ mesh vào thời điểm nào?

**Chuyển tiếp:** Hoàn thành checklist và lưu ảnh trước khi mở bài tiếp theo.
