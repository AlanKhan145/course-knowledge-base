# 01 — Intro & Problem Statement

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Mở đầu — đặt vấn đề |
| **Thời điểm** | 00:00–00:52 |
| **Chủ đề chính** | Vấn đề rig mesh cá scan dày đặc, lời hứa kỹ thuật nhanh gọn |

## 1. Mục tiêu bài học

- Hiểu rõ vấn đề cụ thể mà video giải quyết: animate mesh cá đã được scan 3D (photogrammetry/3D scan) mà không cần retopology.
- Nắm được các ràng buộc/lời hứa của kỹ thuật sắp trình bày: ~10 phút, không add-on, không asset trả phí, chạy real-time trong Eevee.

## 2. Nội dung chính

Tác giả mở đầu bằng quan sát thực tế: những con cá nhỏ di chuyển với chuyển động lắc lư (wiggle) rất tự nhiên và hữu cơ, nhưng tái tạo lại chuyển động đó trong Blender lại khó hơn nhiều so với vẻ ngoài của nó. Vấn đề cụ thể nằm ở nguồn tài nguyên: trên internet có rất nhiều **model cá dạng "đóng hộp"** — tức là các model được tạo ra bằng **3D scan/photogrammetry**, có chất lượng hình ảnh rất cao nhưng **cấu trúc liên kết (topology) dày đặc và không đều**, khác hẳn với mesh được model thủ công theo dạng lưới quad sạch dùng cho animation. Với loại mesh này, việc rig bằng phần cứng tiêu chuẩn (Armature, weight painting) mà không phải **retopology (dựng lại lưới)** trước là rất khó — và retopology tốn nhiều thời gian, không phải hướng tác giả muốn đi.

Sau vài tuần thử nghiệm, tác giả cho biết đã tìm ra một **quy trình dễ và thực tế** để animate chính xác loại mesh scan dày đặc này mà **không cần retopology**. Video cam kết trình bày quy trình này với ba ràng buộc quan trọng, xác lập ngay từ đầu để người xem biết được phạm vi và độ khả thi: mất khoảng **10 phút** để thực hiện, **không yêu cầu add-on** nào (chỉ dùng tính năng có sẵn của Blender), **không cần asset trả phí** (mọi tài nguyên đều miễn phí), và **chạy trong thời gian thực trong Eevee** — nghĩa là kỹ thuật đủ nhẹ để xem preview mượt mà ngay trong viewport, không cần chờ render Cycles.

## 3. Quy trình thực hành gợi ý

1. Trước khi bắt đầu, chuẩn bị sẵn Blender (khuyến nghị Eevee làm render engine mặc định cho project này).
2. Ghi nhớ ba ràng buộc của kỹ thuật (không add-on, không asset trả phí, real-time Eevee) để không đi lệch hướng khi tìm tài nguyên ở bước sau.
3. Xác định rõ vấn đề cốt lõi cần giải quyết: làm sao để một mesh scan dày đặc, không tối ưu cho animation, vẫn có thể uốn cong tự nhiên mà không cần dựng lại lưới.

## 4. Phím tắt & công cụ liên quan

*(Đoạn giới thiệu, chưa có thao tác kỹ thuật cụ thể trong Blender.)*

## 5. Lưu ý & lỗi thường gặp

- Đừng nhầm lẫn giữa "model cá chất lượng cao" và "model cá sẵn sàng để animate" — hai tiêu chí này độc lập với nhau; một model scan đẹp về hình ảnh vẫn có thể rất khó rig nếu topology dày đặc/không đều.
- Kỹ thuật trong video được thiết kế đặc thù để tránh retopology — nếu bạn có sẵn một model cá đã model thủ công với topology sạch, một số bước tối ưu ở chương 04 có thể không cần thiết.

## 6. Checklist thực hành

- [ ] Đã hiểu rõ vấn đề: mesh cá scan dày đặc khó rig bằng phương pháp tiêu chuẩn.
- [ ] Đã nắm được ba ràng buộc của kỹ thuật sắp học (không add-on, miễn phí, real-time Eevee).
- [ ] Đã chuẩn bị Blender sẵn sàng để bắt đầu thực hành từ bước 1.

## 7. Tóm tắt

Video giải quyết một vấn đề rất cụ thể — animate mesh cá scan dày đặc mà không cần retopology — bằng một quy trình nhanh, miễn phí và chạy real-time trong Eevee, đặt nền tảng kỳ vọng rõ ràng trước khi đi vào từng bước kỹ thuật.
