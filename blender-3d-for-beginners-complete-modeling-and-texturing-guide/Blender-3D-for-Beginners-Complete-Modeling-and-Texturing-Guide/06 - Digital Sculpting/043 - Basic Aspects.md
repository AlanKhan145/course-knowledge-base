# 043 — Basic Aspects

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Basic Aspects |
| **Thời lượng** | 5:14 |
| **Chủ đề chính** | Nhập môn Sculpt Mode và yêu cầu mật độ mesh |

## 1. Mục tiêu bài học

- Biết chuyển vào Sculpt Mode và nhận diện bố cục workspace Sculpting.
- Hiểu vì sao sculpting cần mesh có mật độ polygon đủ cao.
- Nắm được quy trình sculpting tổng quát: từ hình khối lớn đến chi tiết nhỏ.

## 2. Nội dung chính

**Sculpt Mode** được truy cập qua dropdown Mode ở góc trên-trái viewport (chuyển từ Object Mode) hoặc bằng cách chọn tab **Sculpting** trong thanh Workspaces — workspace này tự động bố trí lại giao diện với thanh công cụ brush bên trái, panel Tool Settings phía trên, và các tab Brush Settings/Symmetry ở bên phải.

Khác với Edit Mode (nơi thao tác trực tiếp trên từng vertex/edge/face rời rạc), sculpting mô phỏng việc "nặn đất sét kỹ thuật số" — brush đẩy/kéo hàng loạt vertex trong một vùng bán kính cùng lúc theo một falloff mượt mà. Điều này đòi hỏi mesh phải có **mật độ polygon đủ cao** để brush có đủ "vật liệu" để biến dạng chi tiết; sculpt trên một Cube 8 vertex gần như không tạo ra hiệu ứng gì đáng kể. Ba giải pháp tăng mật độ sẽ được giới thiệu kỹ ở bài 047: Multiresolution Modifier, Dynamic Topology, và Voxel Remesh.

Quy trình sculpting chuẩn luôn đi từ **hình khối lớn (big forms)** — tỷ lệ tổng thể, silhouette chính — trước, sau đó mới đến **hình khối trung bình (secondary forms)** như cơ bắp, nếp gấp lớn, và cuối cùng là **chi tiết nhỏ (fine details/tertiary forms)** như lỗ chân lông, vết xước, texture bề mặt. Sculpt chi tiết nhỏ quá sớm khi tỷ lệ tổng thể còn sai thường dẫn đến phải làm lại từ đầu.

## 3. Lưu ý & lỗi thường gặp

- Cố gắng sculpt chi tiết ngay từ đầu trên một mesh mật độ thấp sẽ không có tác dụng hoặc cho kết quả méo mó.
- Bỏ qua giai đoạn blocking hình khối lớn để nhảy thẳng vào chi tiết nhỏ là lỗi quy trình phổ biến nhất của người mới học sculpting.

## 6. Checklist thực hành

- [ ] Đã chuyển được vào Sculpt Mode và nhận diện các vùng chính của workspace Sculpting.
- [ ] Hiểu vì sao cần mật độ polygon cao để sculpt hiệu quả.
- [ ] Nắm được quy trình big forms → secondary forms → fine details.

## 7. Tóm tắt

Sculpting là một tư duy làm việc khác hẳn Edit Mode — thành công phụ thuộc vào việc chuẩn bị đủ mật độ mesh và tuân thủ quy trình đi từ hình khối lớn đến chi tiết nhỏ, thay vì cố định hình chi tiết ngay từ bước đầu.
