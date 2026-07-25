# 004 — Version and Requirements

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction |
| **Bài học** | Version and Requirements |
| **Thời lượng** | 1:31 |
| **Chủ đề chính** | Phiên bản Blender và yêu cầu cấu hình |

## 1. Mục tiêu bài học

- Biết phiên bản Blender mà khóa học sử dụng và thời điểm nội dung được cập nhật.
- Nắm được cấu hình máy tối thiểu và khuyến nghị để theo học thoải mái.
- Biết các thiết bị ngoại vi nên có (chuột có bánh xe cuộn, bảng vẽ đồ họa cho phần sculpting).

## 2. Nội dung chính

Khóa học được xây dựng và cập nhật dựa trên nhánh **Blender 4.x**, với nội dung được rà soát và cập nhật gần nhất vào **tháng 4/2026** để phản ánh đúng giao diện và tính năng hiện hành. Vì Blender phát hành phiên bản mới đều đặn, giao diện có thể xê dịch nhẹ giữa các bản 4.x, nhưng các nguyên lý và quy trình làm việc trong khóa học vẫn áp dụng được.

Về cấu hình máy, Blender chạy được trên cấu hình khá khiêm tốn nhưng để trải nghiệm mượt mà, đặc biệt khi render bằng **Cycles**, nên có:

- **GPU (card đồ họa rời)**: giúp tăng tốc render Cycles đáng kể qua CUDA/OptiX (NVIDIA), HIP (AMD) hoặc Metal (Apple Silicon); không bắt buộc nhưng khuyến nghị mạnh cho phần render.
- **RAM**: tối thiểu 8GB, khuyến nghị 16GB trở lên để làm việc mượt với các scene có nhiều chi tiết, đặc biệt khi sculpting mesh mật độ cao.
- **Chuột có bánh xe cuộn**: gần như bắt buộc vì Blender dùng scroll để zoom và nhiều thao tác điều hướng viewport dựa trên chuột 3 nút.
- **Bảng vẽ đồ họa (graphics tablet)**: không bắt buộc nhưng rất hữu ích cho module Digital Sculpting — giúp kiểm soát lực nét vẽ (pressure sensitivity) tốt hơn nhiều so với chuột khi điêu khắc chi tiết.

## 5. Lưu ý & lỗi thường gặp

- Không có GPU rời vẫn học được bình thường — Cycles có thể render bằng CPU (chậm hơn) và Eevee vẫn chạy tốt trên phần cứng tích hợp cho phần lớn bài tập.
- Không có bảng vẽ cũng không sao — module sculpting vẫn có thể thực hành bằng chuột, chỉ độ chính xác về lực nét sẽ hạn chế hơn.
- Nên kiểm tra phiên bản Blender đang cài trước khi học (`Blender > About Blender`) để đối chiếu với giao diện trong video.

## 6. Checklist thực hành

- [ ] Đã biết khóa học dùng Blender 4.x, cập nhật tháng 4/2026.
- [ ] Đã kiểm tra máy đáp ứng RAM tối thiểu 8GB (khuyến nghị 16GB+).
- [ ] Đã xác nhận có chuột với bánh xe cuộn.
- [ ] Đã cân nhắc chuẩn bị bảng vẽ đồ họa cho phần sculpting (không bắt buộc).

## 7. Tóm tắt

Khóa học dựa trên Blender 4.x, cập nhật tháng 4/2026, khuyến nghị máy có GPU cho render Cycles, RAM từ 16GB, chuột có bánh xe cuộn là bắt buộc, và bảng vẽ đồ họa là lựa chọn hữu ích cho phần điêu khắc.
