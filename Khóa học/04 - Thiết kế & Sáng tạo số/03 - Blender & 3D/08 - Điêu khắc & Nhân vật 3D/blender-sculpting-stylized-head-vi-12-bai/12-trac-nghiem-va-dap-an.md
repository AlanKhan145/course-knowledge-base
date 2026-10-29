# Bài 12 — Kiểm tra cuối khóa và đáp án

**Hướng dẫn:** Tự trả lời trước; mở phần đáp án sau. Mỗi câu 1 điểm (10 điểm tổng).

## Câu hỏi

1. `Ctrl + J` trong Object Mode làm gì? Nó có bảo đảm hai mesh thành một bề mặt liền không?
2. Voxel Size càng **nhỏ** thì mật độ lưới và mức tiêu thụ tài nguyên thường thay đổi thế nào?
3. Nêu một sự khác biệt giữa **Sculpt Symmetry X** và **Mirror Modifier**.
4. Trong Sculpt Mode, khi dùng một brush hỗ trợ đảo chiều, giữ `Ctrl` thường nhằm làm gì?
5. Trong thao tác sculpt hỗ trợ, giữ `Shift` thường giúp làm gì?
6. **Shade Smooth** có tạo thêm polygon giống Subdivision Surface không?
7. Vì sao nên nhìn khối đầu ở góc nghiêng và 3/4?
8. **Shrinkwrap** dùng để làm gì khi dựng lông mày?
9. Vì sao cần lưu bản backup trước khi **Apply modifier** hoặc **Voxel Remesh**?
10. Video nguồn đã dạy trọn vẹn quy trình UV, rigging, vật liệu, ánh sáng và render chưa?

---

## Đáp án và giải thích ngắn

1. **Join nhiều mesh object thành một object**; không tự hàn các đảo lưới. Muốn hàn mặt có thể dùng voxel remesh hoặc thao tác hợp lý khác.
2. Thường **tăng mật độ polygon** và dùng nhiều tài nguyên hơn.
3. Symmetry X phản chiếu tác động nét sculpt theo trục cục bộ; Mirror Modifier phản chiếu **hình học** theo mặt phẳng xác định bởi origin/Mirror Object.
4. **Đảo chiều tác động của brush** (đắp↔lõm tùy brush và phiên bản).
5. Tạm thời dùng **Smooth** để làm mềm, tùy brush/keymap.
6. **Không**. Shade Smooth làm mượt cách nội suy pháp tuyến hiển thị, không tăng phân giải mesh.
7. Để kiểm tra **độ dày và silhouette 3D**, tránh mô hình chỉ đẹp khi nhìn chính diện.
8. **Ép/chiếu dải lông mày** bám bề mặt cong của đầu.
9. Vì những thao tác đó có thể **thay đổi topology** hoặc làm mất khả năng chỉnh sửa ở giai đoạn trước.
10. **Chưa**. Video kết thúc ở phần sculpt và hẹn một video khác cho vật liệu, tô màu, ánh sáng, render; không dạy toàn bộ pipeline game-ready.

## Tự xếp loại

- **9–10:** vững khái niệm, nên thực hiện một biến thể không theo hướng dẫn.
- **7–8:** cơ bản tốt, nên ôn Voxel Remesh/Mirror/Shrinkwrap.
- **Dưới 7:** xem lại bài 02, 04 và 08, sau đó làm lại bài tập ngắn.
