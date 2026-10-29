# Bài 02 — Hình dạng 2D, hình khối 3D và tư duy phân rã vật thể

**Mục tiêu:** phân biệt shape/form; nhận diện các khối cơ bản trong đồ vật, cơ thể; dựng được vật thể bằng cách ghép khối từ nhiều góc nhìn.

**Nguồn chính:** `Pasted markdown (4)(2).md` (khoảng 01:54–11:00); liên hệ `Pasted markdown(20261028-163743).md` (khoảng 09:00–14:00). **Bổ sung:** bài tập, quy trình kiểm tra khối.

## 1. Từ hình phẳng đến hình có thể xoay trong đầu

Một **hình tròn** chỉ cho ta đường bao phẳng. Một **quả cầu** cho phép tưởng tượng mặt trước, mặt sau, phần được che khuất; khi xoay trong không gian, đường bao tổng thể vẫn tròn nhưng những đường cấu trúc trên bề mặt thay đổi.

| Hình 2D | Khối tương ứng | Ví dụ ứng dụng |
|---|---|---|
| Tròn | Cầu, ellipsoid | Đầu, mắt, khớp vai |
| Chữ nhật | Hộp, lăng trụ | Sách, thân đồ vật, ngực/khung xương chậu phác thảo |
| Tam giác | Nón, lăng trụ tam giác | Mũ, mũi, tai cách điệu |
| Hình cong | Trụ cong, khối hữu cơ | Cánh tay, tóc, tay nắm |

**Không phải** mọi chi tiết trong thực tế đều quy về chính xác các khối Euclid: đây là *cách đơn giản hóa có chủ đích* để hiểu cấu trúc.

## 2. Ba năng lực cần luyện

Bản phụ đề nhấn mạnh ba năng lực: **(1) vẽ khối cơ bản từ nhiều góc, (2) phân rã vật nhìn thấy, (3) tái tạo vật bằng các khối đã phân rã**.

```mermaid
flowchart LR
 A[Quan sát đồ vật] --> B[Xác định khối lớn]
 B --> C[Thêm khối phụ]
 C --> D[Chọn trục và góc nhìn]
 D --> E[Kiểm tra chồng lấp / tỉ lệ]
 E --> F[Vẽ đường bao và chi tiết]
```

### Năng lực 1 — Dựng hình cơ bản

- **Hộp:** xác định ba chiều ngang/dọc/sâu; cạnh song song trong không gian phải tuân thủ hệ phối cảnh đã chọn.
- **Trụ:** hai đáy elip tương thích với góc nhìn; chiều dài theo trục khối.
- **Cầu:** dựng trục lớn và đường vòng cung như kinh/vĩ tuyến để kiểm tra chiều hướng.
- **Nón:** đỉnh nằm trên trục của mặt đáy; mặt đáy nhìn nghiêng là elip.

**Mẹo:** vẽ phần khuất bằng nét mờ ở giai đoạn đầu để không bị lẫn mặt trước–mặt sau.

### Năng lực 2 — Nhìn vật phức tạp thành khối đơn giản

Một bình nước có thể gồm thân trụ, nắp trụ thấp, quai cong. Một đôi giày có thân dạng hộp nêm, mũi tròn, đế lớp dẹt. Nhờ vậy, bài toán “vẽ cả đôi giày” chuyển thành “dựng các khối đúng vị trí và tỉ lệ rồi tinh chỉnh đường bao”.

### Năng lực 3 — Dựng lại ở góc nhìn mới

Sau khi vẽ theo mẫu, hãy thử tự xoay vật 30–45 độ trong tưởng tượng. Nếu chỉ nhớ đường nét của ảnh tham chiếu, bạn khó xoay đúng. Nếu nhớ *quan hệ hình khối*, bạn có thể dựng mặt sau hoặc góc 3/4 hợp lý hơn.

## 3. Thí dụ: dựng một chiếc xẻng hót rác có tay cầm

Ví dụ trong nguồn là một dụng cụ hót rác có nhiều phần; lời dịch tên vật không rõ ràng nhưng ý tưởng **khối nêm/khay + tay cầm dạng ống + đoạn nối** khá rõ.

1. Vẽ một **hộp nêm dẹt** làm phần khay; xác định mặt đáy, thành sau và mép trước.
2. Dựng **trụ dài** theo hướng tay cầm.
3. Thêm **khối nối** giữa tay cầm và phần khay.
4. Dùng đường xuyên/đường trục để kiểm tra các phần khớp với nhau.
5. Cuối cùng, bo cong các góc, thêm độ dày nhựa/kim loại, lược bỏ đường dựng hình.

## 4. Ứng dụng nhân vật manga

Một mannequin phác thảo có thể dựng từ: đầu = cầu + mặt phẳng hàm, lồng ngực = hộp bo tròn, chậu = hộp nghiêng, tay/chân = trụ nối bằng các khớp. Đây chỉ là mô hình **khởi đầu**, không thay thế học giải phẫu.

- Dùng trục vai và trục hông khác nhau để tạo tư thế có chuyển động.
- Khi tay hướng về camera, hãy nghĩ đến **trụ trong không gian** trước khi tính đến bàn tay ở cuối trụ.
- Vật gần camera có thể xuất hiện lớn hơn; không sửa bằng việc “thu tay về kích cỡ thường” nếu phối cảnh yêu cầu khác.
- Với trang phục, vẽ cơ thể/khối nền trước; nếp vải bám quanh khối, không xuất hiện độc lập.

## 5. Bài tập theo cấp độ

**Cấp A — 12 khối, 15 phút:** vẽ 4 hộp, 4 trụ, 4 quả cầu từ góc khác nhau; tô nét phần khuất nhẹ hơn.

**Cấp B — Phân rã, 15 phút:** chọn 3 vật (bình nước, ghế, giày), phác 3–5 khối cấu thành mỗi vật. Viết tên khối bên cạnh.

**Cấp C — Trí nhớ không gian, 20 phút:** nhìn một vật trong 2 phút, cất ảnh tham chiếu, vẽ lại từ góc nhìn khác; so sánh với ảnh thật ở góc mới nếu có.

| Kiểm tra | Đạt khi |
|---|---|
| Trục | Các phần cùng vật theo một hướng hợp lý |
| Thể tích | Không có khối nào vô cớ xuyên qua khối khác |
| Chồng lấp | Phân biệt mặt trước và phần khuất |
| Tỉ lệ | Khối chính chiếm tỉ lệ hợp lý so với khối phụ |
| Dễ nhận dạng | Trước khi thêm texture, vật vẫn được nhận ra |

## 6. Lỗi hay gặp

- **Chỉ sao đường bao:** khối nhìn ổn từ một góc nhưng không thể tưởng tượng từ góc khác → luyện vẽ hình khối có đường trục.
- **Quên chiều sâu:** lòng cốc hoặc đế giày bị vẽ như nét phẳng → thêm độ dày bề mặt.
- **Vẽ từng phần rời:** tay cầm không đúng tâm nối → dựng các trục lớn trước.
- **Dùng hình khối cứng quá lâu:** nhân vật máy móc → sau bước dựng, làm mềm bằng giải phẫu, đường chuyển động, hình hữu cơ.

### Câu hỏi ôn tập

1. Hình tròn và quả cầu khác nhau ở đâu về thông tin không gian?
2. Nếu phải vẽ một chiếc xe đạp, bạn phân rã nó thành những khối nào?
3. Khi nào nên vẽ các cạnh khuất bằng nét mờ?

**Tiếp theo:** [Bài 03 — Phối cảnh](03-phoi-canh-mot-hai-ba-diem.md).
