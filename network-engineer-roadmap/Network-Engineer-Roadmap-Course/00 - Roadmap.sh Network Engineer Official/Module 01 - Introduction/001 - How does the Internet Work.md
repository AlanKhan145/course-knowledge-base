# 001 - How does the Internet Work?

**Module:** Module 01 - Introduction  
**Roadmap item:** Bài 1  
**Loại nội dung:** Networking foundations  
**Thời lượng gợi ý:** 35-55 phút

---

## 1. Tóm tắt
Internet hoạt động như mạng lưới các mạng kết nối với nhau.

Với Network Engineer, **How does the Internet Work?** cần được gắn với topology, packet flow, security, reliability và khả năng troubleshooting. Mục tiêu không chỉ là thuộc khái niệm, mà là dùng nó để thiết kế hoặc xử lý sự cố mạng tốt hơn.

## 2. Mục tiêu học tập
- Giải thích được **How does the Internet Work?** bằng ngôn ngữ rõ ràng cho engineer, IT support hoặc stakeholder kỹ thuật.
- Biết khi nào chủ đề này xuất hiện trong thiết kế, cấu hình, vận hành hoặc debug mạng.
- Tạo được một artifact nhỏ: sơ đồ mạng, bảng so sánh, checklist, lab note hoặc troubleshooting report.

## 3. Nội dung roadmap
- Internet hoạt động như mạng lưới các mạng kết nối với nhau.
- Dữ liệu được chia thành packet, đi qua router/switch, rồi được tái ghép ở đích.
- Cần hiểu DNS, IP Address, TCP/UDP, HTTP/HTTPS ở mức tổng quan.

## 4. Ứng dụng trong công việc Network Engineer
- Luôn xác định luồng traffic: source, destination, protocol, port, route và thiết bị trung gian.
- Ghi rõ giả định về latency, bandwidth, reliability, security và failure mode.
- Khi troubleshooting, khoanh vùng theo layer/model thay vì đoán lỗi ngẫu nhiên.

## 5. Bài tập thực hành
Vẽ luồng truy cập một website từ laptop tới server, gồm DNS lookup, TCP/TLS handshake và HTTP request.

Sau đó viết 5-7 dòng trả lời: nếu mạng gặp lỗi, chủ đề này giúp bạn kiểm tra điều gì trước?

## 6. Artifact nên tạo
- Internet flow diagram and protocol overview note
- Một sơ đồ hoặc bảng kiểm có thể dùng lại trong lab
- Một ví dụ troubleshooting: symptom, hypothesis, command/tool, result, next step

## 7. Câu hỏi tự kiểm tra
- Chủ đề này nằm ở tầng/lớp nào trong OSI hoặc TCP/IP?
- Nó ảnh hưởng tới connectivity, performance, security hay availability?
- Command, tool hoặc observation nào giúp kiểm chứng hiểu biết của tôi?
- Nếu giải thích cho người mới, tôi sẽ dùng ví dụ topology nào?

## 8. Tổng kết
**How does the Internet Work?** là một phần trong năng lực thiết kế và vận hành mạng. Hãy biến bài học thành lab note, sơ đồ, checklist hoặc báo cáo troubleshooting có thể đưa vào portfolio Network Engineer.
