# Bài 21 — Đánh giá AI: toán học, benchmark và xếp hạng cặp

> **Module 05: Gemini và ứng dụng đa phương thức**  
> **Phạm vi bài giảng:** 52:20–55:56  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **đánh giá ai: toán học, benchmark và xếp hạng cặp** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Phân biệt bài toán có đáp án kiểm chứng được và đánh giá sở thích.
2. Giải thích cách so sánh ẩn danh theo cặp và xếp hạng tương đối.
3. Nhận diện hạn chế của một benchmark đơn lẻ.

## 3. Kiến thức trọng tâm

### 3.1. Năng lực mô hình được đo theo nhiều chiều
Một mô hình có thể tốt ở code nhưng chưa tốt ở nhận diện ảnh, hoặc giỏi toán nhưng đưa lời đáp không phù hợp người dùng. Vì vậy, bộ đánh giá cần gồm nhiều nhóm nhiệm vụ và cả phép đo vận hành như chi phí, độ trễ.

### 3.2. Đánh giá toán học có verifier
Các bài toán Olympic hoặc chương trình đánh giá toán khó yêu cầu không chỉ có con số cuối, mà cần lập luận hoặc chứng minh đúng. Phần mô tả quá trình phát triển Gemini nhắc đến việc giải **5/6 bài toán** tại một kỳ thử thách toán quốc tế, với ngân sách suy luận cao. Cần hiểu đây là kết quả được báo cáo trong một bối cảnh thi/đánh giá cụ thể; để so sánh chính thức với hệ khác cần thông tin về quy tắc, thời lượng và cách chấm.

Một thước đo đúng/sai hợp lệ phải có đáp án chuẩn hoặc quy trình kiểm định chứng minh độc lập.

### 3.3. Blind pairwise preference
Một giao diện đánh giá có thể ẩn tên hai mô hình A/B, cho người dùng xem hai câu trả lời và chọn câu phù hợp hơn. Từ rất nhiều cặp đối đầu, hệ thống ước lượng mức mạnh yếu **tương đối**, thường dùng phương pháp xếp hạng theo ý tưởng Elo hoặc biến thể.

```mermaid
flowchart LR
 P[Câu hỏi người dùng] --> A[Câu trả lời ẩn danh A]
 P --> B[Câu trả lời ẩn danh B]
 A --> V[Người đánh giá chọn phương án]
 B --> V
 V --> R[Xếp hạng tương đối]
```

Một xếp hạng từ sở thích người dùng không thể thay thế bài test bảo mật, code correctness, sự thật hoặc độ bền của long-context.

### 3.4. Thiết kế benchmark nội bộ
Một hệ thống AI cần tách **offline evaluation** (bộ dữ liệu cố định), **human preference** (đánh giá theo cặp) và **online product metrics** (hành vi thực, có bảo vệ quyền riêng tư). Tránh leakage test, benchmark overfitting và chỉ chọn những ví dụ model thể hiện tốt để quảng bá.

### 3.5. Dùng đánh giá để ra quyết định kỹ thuật
Thay vì hỏi “mô hình nào đứng đầu?”, hãy hỏi “với ràng buộc thời gian và chi phí của sản phẩm, mô hình nào đạt ngưỡng chất lượng của từng nhiệm vụ?”.

## 4. Bài tập thực hành

Xây bộ đánh giá gồm 5 câu toán có đáp án, 5 câu tóm tắt dựa vào tài liệu và 5 câu code có unit tests. Tạo bảng tiêu chí chấm cho từng nhóm, trong đó yêu cầu mô tả cách phòng tránh leakage giữa train và test.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Điều gì là đặc trưng của blind pairwise preference?**

A. Chỉ có một câu trả lời không đối chứng  
B. Luôn cho biết model A là phiên bản Pro  
C. Tên hai mô hình được ẩn khi người đánh giá chọn câu tốt hơn  
D. Chỉ đánh giá bằng số lượng token  

**Đáp án: C.** Ẩn tên giảm một phần ảnh hưởng nhận biết thương hiệu.

**Câu 2. Vì sao bài toán toán học khó cần verifier?**

A. Vì lời giải càng dài càng đúng  
B. Vì chỉ có chatbot mới chấm được  
C. Vì tokenizer không có số  
D. Bởi chứng minh có thể nghe hợp lý nhưng sai  

**Đáp án: D.** Đúng/sai toán học cần quy trình kiểm tra hợp lệ.

**Câu 3. Leaderboard sở thích người dùng có hạn chế gì?**

A. Không trực tiếp chứng minh tính đúng sự thật hoặc bảo mật  
B. Không thể có bất kỳ thông tin nào hữu ích  
C. Luôn phản ánh chính xác mọi lĩnh vực  
D. Chỉ áp dụng cho ảnh JPEG  

**Đáp án: A.** Preference score đo sở thích trong phân bố câu hỏi được đánh giá.

**Câu 4. Benchmark leakage là gì?**

A. GPU bị chảy nhiệt  
B. Thông tin từ tập đánh giá rò rỉ vào quá trình phát triển hoặc huấn luyện  
C. Loss càng nhỏ càng làm bộ nhớ rò rỉ  
D. Sai số tính toán do bitflip  

**Đáp án: B.** Nếu biết đáp án test khi tối ưu, điểm có thể phóng đại năng lực thật.

**Câu 5. Quyết định triển khai nên dựa trên gì?**

A. Chỉ top-1 ở một leaderboard  
B. Chỉ số tác giả của paper  
C. Bộ đánh giá sát nhiệm vụ và ràng buộc chất lượng–chi phí  
D. Chỉ số lần tải mô hình  

**Đáp án: C.** Một sản phẩm cần đáp ứng yêu cầu thực tế của chính nó.

## 6. Tổng kết

- Không có một benchmark đại diện cho mọi năng lực và môi trường sản phẩm.
- Đánh giá ưu tiên người dùng khác đánh giá đúng/sai có thể kiểm chứng.
