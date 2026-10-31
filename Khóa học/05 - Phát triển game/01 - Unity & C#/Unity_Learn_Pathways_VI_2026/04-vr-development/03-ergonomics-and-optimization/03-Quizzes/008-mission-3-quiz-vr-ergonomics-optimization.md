# Bài 08 — Kiểm tra tổng hợp: VR Ergonomics & Optimization

> **Dạng bài:** Assessment tự ôn tập · **Học phần:** Ergonomics and Optimization · **Ngữ cảnh:** Unity 6.3
>
> **Lưu ý:** Đây là bộ câu hỏi thực hành tự biên soạn, không phải bài kiểm tra chính thức của Unity.

## 1. Mục đích kiểm tra

Bài kiểm tra đánh giá khả năng giải thích và vận dụng các kiến thức: comfort, accessibility, XR Interaction Toolkit, teleportation/continuous movement, Console và Profiler, baked/realtime lighting, build và chia sẻ dự án. Người học nên trả lời theo bối cảnh của một scene đã từng chạy thử, không chỉ nhớ định nghĩa.

## 2. Hướng dẫn làm bài

- Với mỗi câu trắc nghiệm, chọn **một** phương án phù hợp nhất.
- Không cần mở Unity khi làm phần trắc nghiệm; sau đó dùng một scene để thực hiện bài kiểm tra thực hành.
- Tự giải thích lựa chọn bằng một câu và nêu dấu hiệu có thể kiểm chứng trong Editor hoặc bản build.
- Đối với câu vận dụng, ưu tiên các bước chẩn đoán có thể lặp lại.

## 3. Trắc nghiệm

### Câu 1
Một người dùng khó chịu khi hình ảnh liên tục dịch chuyển dù cơ thể đứng yên. Thay đổi nào nên được thử trước nếu tác vụ cho phép?

A. Tăng số đèn động.  
B. Bỏ phản hồi khi chọn đồ vật.  
C. Cho phép di chuyển bằng teleportation.  
D. Tăng độ phức tạp vật liệu.

### Câu 2
Trong XR Interaction Toolkit, thành phần nào chủ động gửi thao tác chọn tới đối tượng?

A. `Interactor`.  
B. `Light Probe`.  
C. `Reflection Probe`.  
D. `Lightmap`.

### Câu 3
Một đồ vật không thể chọn trong Play mode. Bước chẩn đoán nào có cơ sở nhất?

A. Đổi toàn bộ render pipeline.  
B. Xóa scene và tạo lại.  
C. Tăng cường độ ánh sáng.  
D. Kiểm tra input actions, interactor, interactable và collider.

### Câu 4
Tại sao không nên kết luận hiệu năng trên HMD chỉ dựa vào FPS trong Editor?

A. Vì Editor không thể chạy scene VR.  
B. Vì thiết bị đích và môi trường Editor có tải xử lý khác nhau.  
C. Vì FPS không liên quan đến VR.  
D. Vì Profiler chỉ dùng để sửa lỗi mã.

### Câu 5
Sau khi tối ưu, FPS tăng nhưng ứng dụng không còn hiển thị tín hiệu thành công khi thao tác. Kết luận nào phù hợp?

A. Cải thiện đã hoàn hảo.  
B. Chỉ cần ghi FPS mới.  
C. Cần đánh giá lại vì thay đổi gây tác dụng phụ lên trải nghiệm.  
D. Không cần kiểm tra thêm.

### Câu 6
Loại nguồn sáng nào phù hợp nhất để mô phỏng một đèn rọi theo vùng hình nón?

A. `Spot Light`.  
B. `Directional Light`.  
C. `Light Probe`.  
D. `Reflection Probe`.

### Câu 7
Mục tiêu chính của baked lighting là gì?

A. Biến mọi vật động thành vật tĩnh.  
B. Loại bỏ hoàn toàn ánh sáng.  
C. Bắt buộc mọi nguồn sáng phải thay đổi liên tục.  
D. Tính trước ánh sáng phù hợp và lưu vào dữ liệu như lightmap.

### Câu 8
Một vật động trông không hòa hợp với ánh sáng bake của cảnh. Thành phần nào đáng kiểm tra?

A. Stack Trace.  
B. `Light Probes`.  
C. Tên scene.  
D. File README.

### Câu 9
Build thành công nhưng ứng dụng khởi động sai scene. Điều gì cần kiểm tra?

A. Danh sách scene trong cấu hình build.  
B. Số câu hỏi ôn tập.  
C. Màu của README.  
D. Tên video demo.

### Câu 10
Để xác định vì sao ứng dụng bị chậm, phép thử nào đáng tin hơn?

A. Giảm mọi cài đặt cùng lúc.  
B. Chỉ nhìn cảm giác mượt của một lần chạy.  
C. Đo bằng Profiler, sửa một yếu tố, đo lại trong cùng điều kiện.  
D. Chỉ chỉnh ảnh nền.

### Câu 11
Một ứng dụng chỉ báo thành công bằng sự thay đổi từ đỏ sang xanh. Cải thiện nào có lợi cho accessibility?

A. Bỏ toàn bộ phản hồi.  
B. Tăng khoảng cách với vật thể.  
C. Buộc người chơi đứng mới thao tác được.  
D. Bổ sung biểu tượng, hình dạng hoặc văn bản dễ nhận biết.

### Câu 12
Trước khi nâng gói XR của project đang ổn định, quy trình nào hợp lý nhất?

A. Nâng đồng thời mọi gói mà không kiểm thử.  
B. Sao lưu project, đọc thay đổi, thử trên scene nhỏ và kiểm thử hồi quy.  
C. Bỏ qua runtime trên thiết bị.  
D. Chỉ thay tên file project.

## 4. Câu hỏi ngắn

1. So sánh teleportation với continuous movement về phương thức điều hướng và comfort.
2. Phân biệt lỗi logic tương tác với điểm nghẽn hiệu năng. Nêu công cụ kiểm chứng cho từng loại.
3. Giải thích khi nào nên cân nhắc baked lighting, realtime lighting và Light Probes.
4. Vì sao một dự án VR cần README và bằng chứng từ bản build thực tế?

## 5. Bài thực hành kiểm tra

Dựng một scene nhỏ có `XR Origin`, một interactable và một cách di chuyển. Thực hiện thao tác chọn, ghi lại phản hồi và kiểm thử một lần trong Editor. Nếu có thiết bị đích, chạy bản build và đo hiệu năng. Cố ý thay đổi một cấu hình có thể phục hồi (chẳng hạn ngắt liên kết input trong bản sao), ghi hiện tượng, khắc phục và chứng minh kết quả.

## 6. Tiêu chí tự chấm

| Phần | Tiêu chí | Kết quả tự ghi |
|---|---|---|
| Trắc nghiệm | Chọn một đáp án và giải thích có căn cứ | *Điền* |
| Câu hỏi ngắn | Nêu đúng khái niệm, lý do và ví dụ | *Điền* |
| Thực hành | Hoạt động chạy được và có minh chứng | *Điền* |
| Chẩn đoán | Có bước tái hiện, quan sát, sửa và kiểm chứng | *Điền* |
| Comfort/hiệu năng | Có nhận xét dựa trên tình huống hoặc số đo | *Điền* |

**Gợi ý đánh giá:** Với mỗi câu, kiểm tra ba phần: khái niệm chính xác, giải thích vì sao và một ví dụ có thể quan sát. Không suy đoán điểm dựa trên kết quả của Unity Learn; đây là bài luyện tập độc lập.

## 7. Checklist sau bài kiểm tra

- [ ] Giải thích được mối quan hệ interactor/interactable và input actions.
- [ ] Nêu được khác biệt teleportation và continuous movement.
- [ ] Biết khi nào cần Console và khi nào cần Profiler.
- [ ] Phân biệt baked lighting và realtime lighting.
- [ ] Biết kiểm thử bản build và rà giấy phép khi chia sẻ.
- [ ] Có ít nhất một minh chứng thực hành liên quan đến những kỹ năng trên.
---

*Tài liệu học tập tự biên soạn dựa trên đề mục của Unity Learn; không phải bản dịch hoặc transcript chính thức. Đối chiếu nội dung và tài nguyên thực hành tại [Unity Learn — Ergonomics and Optimization](https://learn.unity.com/pathway/vr-development/unit/ergonomics-and-optimization?version=6.3). Tên menu và package có thể thay đổi theo phiên bản project.*
