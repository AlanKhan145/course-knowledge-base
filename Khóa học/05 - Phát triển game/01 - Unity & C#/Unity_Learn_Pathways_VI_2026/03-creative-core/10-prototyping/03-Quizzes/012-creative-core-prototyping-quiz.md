# Bài 12 — Bài kiểm tra tổng hợp – Creative Core: Prototyping

> **Creative Core · Prototyping · Kiểm tra**

Bộ câu hỏi tự biên soạn để ôn các quyết định thiết kế, quy trình xây prototype và công cụ Unity; không đại diện cho đề quiz chính thức của Unity Learn.

## 1. Hướng dẫn và phạm vi

**Hình thức:** 12 câu trắc nghiệm, mỗi câu chọn một phương án tốt nhất. Không sử dụng Unity Editor trong lần tự kiểm tra đầu; sau đó chọn ba câu gắn với thực hành và tự chứng minh bằng scene. Bài đánh giá này không kèm đáp án để người học có thể tự làm trước.

**Phạm vi:** xác định giả thuyết; người dùng mục tiêu; elevator pitch; paper prototype; greybox; ProBuilder; Terrain; asset inventory; playtest; build và báo cáo.

## 2. Câu hỏi trắc nghiệm

**Câu 1.** Lý do hàng đầu để tạo prototype trước bản game hoàn thiện là gì?

A. Tạo tất cả asset trước.  
B. Kiểm chứng giả thuyết quan trọng với chi phí thấp.  
C. Tránh cho người dùng thử.  
D. Bảo đảm trò chơi sẽ thành công.

**Câu 2.** Elevator pitch nào thể hiện trải nghiệm rõ nhất?

A. Trò chơi có shader hiện đại.  
B. Trò chơi dùng engine Unity.  
C. Trò chơi có 80 model.  
D. Người chơi khám phá lâu đài để kích hoạt cầu thoát hiểm.

**Câu 3.** Với một người mới học Unity, ý tưởng nào thích hợp để bắt đầu thử điều khiển và không gian?

A. Walking simulator một khu vực và một tương tác.  
B. MMORPG nhiều máy chủ.  
C. Hệ thống kinh tế online.  
D. Thế giới mở nhiều trăm giờ chơi.

**Câu 4.** Paper prototype phù hợp nhất để làm gì?

A. Đo GPU frame time chính xác.  
B. Tạo lightmap.  
C. Kiểm tra luồng hành động và quy tắc trước khi code.  
D. Export bản build Android.

**Câu 5.** Chức năng nào là Must have cho prototype bàn đạp–nút–cầu?

A. Hệ thống skin.  
B. Nút có trạng thái và mở cầu khi điều kiện được thỏa.  
C. Thời tiết động.  
D. NPC hội thoại dài.

**Câu 6.** Greybox được ưu tiên để kiểm tra điều gì?

A. Marketing.  
B. Bản quyền nhạc nền.  
C. Tương thích cửa hàng ứng dụng.  
D. Tỉ lệ không gian, lối đi và tương tác cơ bản.

**Câu 7.** `OnInteract` có sẵn trong mọi Unity Project không?

A. Không; trong project mẫu nó là custom script.  
B. Có; là physics component mặc định.  
C. Có; là Terrain brush.  
D. Có; là phần bắt buộc của Camera.

**Câu 8.** ProBuilder hữu ích khi cần?

A. Thu âm voice-over.  
B. Tạo nhạc nền.  
C. Chỉnh mesh tường và tạo lối đi trong Scene view.  
D. Viết tài liệu pháp lý.

**Câu 9.** Terrain dựa trên heightmap có hạn chế nào?

A. Không tạo được đồi.  
B. Không trực tiếp biểu diễn hang có trần nhô tại cùng vị trí phẳng.  
C. Không thể có texture.  
D. Không thể có Collider.

**Câu 10.** Một người chơi không nhận ra nút đã được bật; nên làm gì trước?

A. Chỉ đổi logo.  
B. Xóa bàn đạp.  
C. Phát hành ngay.  
D. Xem lại tín hiệu phản hồi và quan sát người thử.

**Câu 11.** Trong playtest, lời hướng dẫn nào ít gợi ý nhất?

A. Hãy tìm cách thoát khỏi khu vực.  
B. Hãy dẫm bàn đạp sau tường.  
C. Hãy nhấn nút xanh ở góc trái.  
D. Hãy nhìn cầu trước khi bắt đầu.

**Câu 12.** Khi chuyển project cho người khác kiểm tra, đâu là một bộ bàn giao hợp lý?

A. Chỉ ảnh Scene view.  
B. Chỉ file texture.  
C. Build hoạt động, README và thông tin phiên bản/phụ thuộc cần thiết.  
D. Chỉ tên ý tưởng.

## 3. Bài kiểm tra thực hành

**Tác vụ:** dựng một scene có player, một vùng kích hoạt và một đối tượng đổi trạng thái. Trong tối đa một trang ghi chú, trình bày giả thuyết, ảnh minh chứng trước/sau và cách tái hiện một lỗi (nếu có). Không cần sao chép đúng câu đố cầu.

**Tiêu chí chấm gợi ý:** 40% nhận diện đúng các quyết định; 30% giải thích nguyên nhân; 30% áp dụng vào thực hành. Các trọng số là đề xuất tự đánh giá cho tài liệu này, không phải thang điểm của Unity Learn.

## 4. Nguồn tham khảo

- [Unity Learn – Creative Core Prototyping course](https://learn.unity.com/project/creative-core-prototyping)
- [Unity ProBuilder documentation](https://docs.unity.cn/Packages/com.unity.probuilder%406.1/manual/workflow-create.html)
- [Unity Terrain documentation](https://docs.unity.com/en-us/engine/6000.6/manual/creating-environments/script-terrain/terrain-using-terrains)
