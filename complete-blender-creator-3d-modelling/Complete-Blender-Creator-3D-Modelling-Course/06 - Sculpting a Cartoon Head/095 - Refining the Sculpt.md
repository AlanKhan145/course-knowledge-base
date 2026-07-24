# 095 — Refining the Sculpt

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Refining the Sculpt |
| **Thời lượng** | 7:59 |
| **Chủ đề chính** | Làm sắc nét và tinh chỉnh |

## 1. Mục tiêu bài học

- Rà soát lại toàn bộ mesh để làm sạch các lỗi khối nhỏ, cạnh gãy, bất đối xứng ngoài ý muốn.
- Làm sắc nét lại các cạnh khối quan trọng bị mờ đi sau nhiều lượt Smooth.
- Luyện tập dùng brush Polish/Scrape để có bề mặt sạch, chuẩn bị cho bước thêm chi tiết đặc trưng (sừng, bất đối xứng) ở các bài sau.

## 2. Nội dung chính

Sau giai đoạn thêm chi tiết ở bài trước, mesh thường tích lũy một số vấn đề: bề mặt hơi gồ ghề do dùng nhiều brush liên tiếp, các cạnh khối bị mờ do Smooth quá tay, hoặc vài điểm bất đối xứng nhỏ. Bài "Refining the Sculpt" là bước dọn dẹp và tinh chỉnh trước khi bước sang các chi tiết đặc trưng của nhân vật.

Các kỹ thuật/brush hữu ích cho việc tinh chỉnh:

- **Scrape/Fill**: brush Scrape "cạo" bớt phần lồi để làm phẳng theo một mặt phẳng tham chiếu (Plane), trong khi Fill lấp đầy phần lõm — cả hai giúp tạo bề mặt sạch, có kiểm soát hơn Flatten thông thường.
- **Polish**: làm mượt bề mặt nhưng vẫn giữ được các cạnh khối sắc nét hơn so với Smooth thông thường, phù hợp giai đoạn hoàn thiện.
- **Crease** ở strength thấp: làm lại sắc nét các đường phân khối đã bị mờ.
- **Symmetrize** (menu Sculpt > Symmetrize): sao chép một nửa mesh sang nửa còn lại để sửa nhanh các lỗi bất đối xứng ngoài ý muốn, trước khi chủ động phá đối xứng ở bài "Adding Character".

Ngoài ra, nên kiểm tra lại **Multiresolution levels** — có thể tạm chuyển về cấp thấp hơn để xem tổng thể khối có còn ổn không khi bỏ qua chi tiết bề mặt, đây là cách hiệu quả để phát hiện lỗi khối lớn bị che khuất bởi các chi tiết nhỏ.

## 3. Quy trình thực hành gợi ý

1. Chuyển tạm Multiresolution về cấp thấp để kiểm tra khối tổng thể còn sạch không.
2. Dùng Scrape/Fill để làm phẳng lại các mảng bề mặt bị gồ ghề.
3. Dùng Polish để làm mượt có kiểm soát mà không mất cạnh khối.
4. Dùng Crease nhẹ để làm lại sắc nét các đường phân khối quan trọng.
5. Nếu phát hiện lệch đối xứng ngoài ý muốn, dùng menu Sculpt > Symmetrize để đồng bộ lại hai bên.
6. Xoay quanh mesh ở nhiều góc, dưới ánh sáng Matcap rõ khối, để rà soát lần cuối.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush / Menu | Chức năng |
|---|---|
| Brush **Scrape** | Cạo phẳng phần lồi theo mặt phẳng tham chiếu |
| Brush **Fill** | Lấp đầy phần lõm |
| Brush **Polish** | Làm mượt có kiểm soát, giữ cạnh khối |
| Brush **Crease** | Làm sắc nét lại đường phân khối |
| Sculpt > **Symmetrize** | Sao chép một nửa mesh sang nửa còn lại |
| `Shift` (giữ) | Smooth tạm thời |
| Panel Modifier > Multiresolution | Chuyển đổi cấp độ subdivision để kiểm tra khối |

## 5. Lưu ý & lỗi thường gặp

- Symmetrize sẽ ghi đè hoàn toàn một nửa mesh — cần chọn đúng hướng (từ trái sang phải hay ngược lại) để không mất phần đã sculpt đúng.
- Lạm dụng Polish/Smooth quá nhiều làm mất hết cá tính khối đã dày công tạo ra.
- Bỏ qua bước kiểm tra ở cấp Multiresolution thấp khiến không phát hiện được lỗi khối lớn bị chi tiết nhỏ che khuất.

## 6. Checklist thực hành

- [ ] Đã kiểm tra khối tổng thể ở cấp Multiresolution thấp.
- [ ] Đã dùng Scrape/Fill làm sạch các mảng bề mặt gồ ghề.
- [ ] Đã Polish làm mượt có kiểm soát mà không mất cạnh khối chính.
- [ ] Đã kiểm tra và sửa các điểm bất đối xứng ngoài ý muốn (Symmetrize nếu cần).

## 7. Tóm tắt

Bài học hướng dẫn rà soát và tinh chỉnh lại toàn bộ mesh sau giai đoạn thêm chi tiết, sử dụng các brush Scrape, Fill, Polish và công cụ Symmetrize để có một bề mặt sạch, cân đối, sẵn sàng cho các bước thêm đặc điểm riêng của nhân vật.
