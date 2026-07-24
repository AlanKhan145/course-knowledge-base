# 080 — Blob Man

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Blob Man |
| **Thời lượng** | 9:50 |
| **Chủ đề chính** | Tạo mesh nhân vật Blob Man |

## 1. Mục tiêu bài học

- Dựng một mesh nhân vật đơn giản dạng "blob" (khối tròn) làm đối tượng thực hành rigging.
- Ôn lại kỹ thuật box modelling và Subdivision Surface để tạo hình dáng cơ thể mềm mại.
- Xác định trước các bộ phận cơ thể chính cần có để rig sau này: đầu, thân, hai tay, hai chân.
- Đảm bảo mesh có topology đơn giản, đủ sạch để Weight Paint dễ dàng ở các bài sau.

## 2. Nội dung chính

"Blob Man" là một nhân vật đơn giản hóa tối đa, thường được dựng từ các khối cầu/capsule biến dạng, phù hợp làm đối tượng học rigging vì không đòi hỏi kỹ thuật modelling nhân vật phức tạp (không cần chi tiết khuôn mặt, ngón tay...). Mục tiêu của bài học không phải là tạo một nhân vật đẹp về mặt nghệ thuật, mà là tạo một mesh có cấu trúc rõ ràng, dễ đoán trước để làm quen với toàn bộ quy trình rigging: từ Armature, Parenting, Weight Painting đến animate walk cycle.

Quy trình dựng thường bắt đầu từ một hình cầu (UV Sphere) hoặc hình trụ làm thân, sau đó extrude ra các chi (tay, chân) và đầu. Việc giữ mesh ở mức low-poly tương đối với modifier Subdivision Surface ở trên giúp vừa có hình dáng bo tròn dễ nhìn ("blob"), vừa giữ được số lượng vertex thấp — điều này rất quan trọng cho các bước rigging sau, vì mesh càng ít vertex phức tạp thì Weight Paint càng dễ kiểm soát và ít lỗi biến dạng.

Khi dựng, cần lưu ý vị trí các khớp tiềm năng (vai, khuỷu tay, hông, đầu gối) — dù chưa có Armature ở bước này, hình dáng mesh nên có đủ "chỗ" (đủ geometry, đủ loop cut) tại các vị trí đó để sau này bone có thể uốn cong mesh tự nhiên mà không bị méo hay gãy góc.

## 3. Quy trình thực hành gợi ý

1. Thêm một UV Sphere hoặc Cube làm gốc cho phần thân (torso).
2. Extrude/kéo dài để tạo đầu ở phía trên thân.
3. Extrude hai bên để tạo tay, extrude phía dưới để tạo hai chân.
4. Thêm Loop Cut tại các vị trí khớp dự kiến (vai, khuỷu tay, hông, đầu gối) để chuẩn bị cho việc uốn cong sau này.
5. Áp modifier Subdivision Surface (và Mirror nếu dựng nửa người rồi đối xứng) để có hình dáng "blob" mềm mại, cân đối.
6. Kiểm tra tổng thể tỉ lệ cơ thể (chiều dài tay/chân so với thân) hợp lý cho một nhân vật hoạt hình đơn giản.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `E` | Extrude — kéo dài geometry tạo tay, chân, đầu |
| `Ctrl+R` | Loop Cut — thêm vòng chia tại vị trí khớp |
| `Ctrl+2` | Thêm Subdivision Surface modifier (Viewport level 2) |
| `Ctrl+M` sau đó trục (X/Y/Z) | Mirror mesh theo trục đối xứng |
| `Ctrl+B` | Bevel — làm mềm góc cạnh nếu cần |
| `Alt+M` | Merge nhiều vertex tại một vị trí (đóng lỗ hổng ở đầu chi) |

## 5. Lưu ý & lỗi thường gặp

- Topology quá phức tạp (quá nhiều vertex không cần thiết) khiến Weight Paint ở bài sau trở nên khó kiểm soát.
- Không thêm đủ Loop Cut tại vị trí khớp, khiến mesh bị gãy góc hoặc méo bất thường khi bone uốn cong.
- Tỉ lệ cơ thể không cân đối (tay/chân quá ngắn hoặc quá dài) gây khó khăn khi thiết lập Armature khớp với mesh.
- Để mesh không đối xứng hoàn toàn nếu định dùng Mirror modifier sau này cho rigging, gây lệch khi Weight Paint đối xứng.

## 6. Checklist thực hành

- [ ] Đã dựng xong phần thân, đầu, hai tay, hai chân của Blob Man.
- [ ] Đã thêm Loop Cut tại các vị trí khớp dự kiến.
- [ ] Đã áp Subdivision Surface để có hình dáng bo tròn mềm mại.
- [ ] Đã kiểm tra tỉ lệ cơ thể hợp lý và mesh không có lỗ hổng.

## 7. Tóm tắt

Blob Man là nhân vật mẫu đơn giản, tập trung vào topology sạch và tỉ lệ cơ thể hợp lý thay vì chi tiết thẩm mỹ, nhằm làm nền tảng thực hành cho toàn bộ quy trình rigging và animate ở các bài học tiếp theo.
