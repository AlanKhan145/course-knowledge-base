# Bài 14 — Kiểm thử, bài tập tổng hợp và đánh giá cuối khóa

## 1. Hướng dẫn

Bài đánh giá kiểm tra khả năng thiết kế, đọc trạng thái và sửa lỗi cho chatbot LangGraph có memory. Mục tiêu không phải học thuộc tên hàm mà là **dự đoán kết quả đúng** trong tình huống nhiều thread, restart, context giới hạn và summary.

## 2. Phạm vi cần nắm

- Stateless chat và lịch sử message.
- `StateGraph`, `MessagesState`, reducer, checkpointer, `thread_id`.
- `InMemorySaver` so với `PostgresSaver`.
- Docker volume, database URI và `.setup()`.
- Context budget, trimming, deletion, rolling summarization.
- Kiểm thử isolation, persistence và lưu giữ dữ kiện quan trọng.

## 3. Bảng tổng hợp công nghệ

| Nhu cầu | Công cụ | Lưu ý quan trọng |
| --- | --- | --- |
| Tổ chức workflow | `StateGraph` | Node nhận state, trả state update |
| Gộp messages | `MessagesState` | Reducer quyết định append/delete |
| Memory demo | `InMemorySaver` | RAM mất khi restart |
| Memory bền | `PostgresSaver` | Cần DB, schema, quản lý kết nối |
| Cô lập hội thoại | `thread_id` | Không thay thế xác thực và quyền sở hữu |
| Giảm input token | `trim_messages` | Không xóa state hiện hành |
| Xóa khỏi state | `RemoveMessage` | Không cam kết xóa backup/checkpoint lịch sử |
| Giữ ý quá khứ | `summary` + recent | Nén có thể gây mất/sai dữ kiện |

## 4. Bài tập thực hành 1 — Debug bot “quên” dù PostgreSQL vẫn chạy

**Tình huống:** User gửi “Tôi tên Lan”. Lượt tiếp theo hỏi “Tên tôi là gì?” nhưng bot không biết. PostgreSQL vẫn healthy.

**Nhiệm vụ:** Lập kế hoạch chẩn đoán theo thứ tự: kiểm tra `thread_id` ở hai request; đọc `get_state` xem tên có trong history; so sánh prompt thực đưa vào model; kiểm tra có trimming hoặc deletion; kiểm tra graph có sử dụng đúng saver/URI. Không được kết luận ngay rằng PostgreSQL hỏng.

**Tiêu chí hoàn thành:** cung cấp ít nhất 4 nguyên nhân có thể xảy ra, phép kiểm tra tương ứng và cách sửa khi xác nhận được nguyên nhân.

## 5. Bài tập thực hành 2 — Vòng đời hội thoại

**Tình huống:** `MessagesState` có 10 messages; sau lượt mới, chat thêm 1 human + 1 AI; node cleanup xóa 6 đầu nếu tổng >10.

**Nhiệm vụ:** Tính số còn sau lượt này; sau lượt tiếp theo có còn kích hoạt cleanup không; so sánh nếu thay xóa 6 đầu bằng giữ 4 cuối. Biểu diễn kết quả thành một bảng và giải thích vì sao các con số khác nhau.

**Tiêu chí hoàn thành:** phép đếm nhất quán, chỉ ra có điều kiện `>` chứ không phải `>=`.

## 6. Bài tập thực hành 3 — Summary mất thông tin quan trọng

**Tình huống:** Một người nêu một ràng buộc quan trọng ở đầu chat; sau 30 lượt, câu trả lời không còn tuân thủ ràng buộc đó, dù có summary.

**Nhiệm vụ:** Kiểm tra summary đã thực sự lưu ràng buộc chưa; xem node chat có gửi summary không; đề xuất cách lưu facts quan trọng có cấu trúc và cơ chế truy xuất phù hợp. Đánh giá bằng bộ câu hỏi trước/sau nén, không chỉ nhìn summary bằng mắt.

**Tiêu chí hoàn thành:** phân biệt lỗi summary generation, lỗi context construction và lỗi LLM sử dụng ngữ cảnh.

## 7. Trắc nghiệm cuối khóa

**Câu 1.** Cùng một `InMemorySaver`, đổi `thread_id` từ A sang B tạo ra điều gì?  
A. Đổi model.  
B. Chuyển dữ liệu A sang B.  
C. Bắt đầu chuỗi state của thread B nếu chưa tồn tại.  
D. Xóa database.  
**Đáp án: C.** `thread_id` phân vùng các checkpoint.

**Câu 2.** Giữ nguyên `thread_id` qua restart Python nhưng dùng `InMemorySaver` mới sẽ:  
A. Mất state cũ.  
B. Tự đọc state từ cloud.  
C. Nhớ vì ID là bộ nhớ.  
D. Tạo backup.  
**Đáp án: A.** ID chỉ định danh, saver RAM không bền.

**Câu 3.** Công cụ nào cần để state survive restart ứng dụng nếu DB vẫn tồn tại?  
A. `trim_messages`.  
B. `PostgresSaver`.  
C. `temperature=0`.  
D. `RemoveMessage`.  
**Đáp án: B.** Database-backed checkpointer ghi snapshot bền hơn RAM.

**Câu 4.** `trim_messages` làm giảm token prompt mà state vẫn tăng vì:  
A. Trimming không thể dùng cùng checkpointer.  
B. LangGraph tự tạo thread mới.  
C. Docker tự nhân đôi dữ liệu.  
D. Nó chọn input cho model chứ không xóa state.  
**Đáp án: D.** Trimming và deletion có tác động khác nhau.

**Câu 5.** Vì sao cần `RemoveMessage(id=m.id)` sau summary?  
A. Chuyển model sang async.  
B. Đổi ID cuộc hội thoại.  
C. Loại messages đã được nén khỏi state hiện tại.  
D. Tạo password database.  
**Đáp án: C.** Xóa phần cũ tránh giữ lại trùng lặp.

**Câu 6.** Ngưỡng tổng message >6, mỗi lượt thêm 2, sau 3 lượt từ trạng thái trống thì:  
A. Chưa tóm tắt.  
B. Tóm tắt 3 lần.  
C. Đã tóm tắt 1 lần.  
D. Xóa hết tin nhắn.  
**Đáp án: A.** Tới đúng 6 chưa thỏa điều kiện >6.

**Câu 7.** Đã tóm tắt lần đầu, muốn lần thứ hai không mất bối cảnh cũ phải:  
A. Dùng ID thread khác.  
B. Đưa summary hiện có vào lần cập nhật tiếp theo.  
C. Chỉ giữ câu hỏi mới.  
D. Xóa named volume.  
**Đáp án: B.** Rolling summary tích lũy lịch sử đã nén.

**Câu 8.** Phương pháp kiểm chứng persistence tốt nhất?  
A. Nhìn giao diện đẹp.  
B. Chỉ thử hỏi model cùng process.  
C. Đếm token trả lời.  
D. Đọc `get_state` ở process mới với cùng thread ID và DB.  
**Đáp án: D.** Đây là chứng cứ trạng thái được lưu bền.

**Câu 9.** Người dùng nhập `thread_id` bất kỳ để xem chat của người khác. Phần nào phải ngăn điều đó?  
A. `max_tokens`.  
B. `temperature`.  
C. Backend authentication + authorization.  
D. Mermaid diagram.  
**Đáp án: C.** Checkpointer không tự phân quyền nghiệp vụ.

**Câu 10.** Trường hợp nào cần cân nhắc hơn rolling summary thuần túy?  
A. Cần lưu chính xác dữ kiện quan trọng theo cấu trúc và cập nhật có kiểm chứng.  
B. Chỉ chào người dùng một lần.  
C. Chỉ in graph.  
D. Chỉ xem `docker --version`.  
**Đáp án: A.** Summary có nguy cơ làm mất hoặc sai lệch chi tiết.

## 8. Rubric tự đánh giá

| Hạng mục | Điểm tối đa | Tiêu chí |
| --- | ---: | --- |
| Nền tảng và thread isolation | 20 | Giải thích được reducer, thread, kiểm chứng độc lập |
| Persistence | 20 | Restart không mất dữ liệu và đọc được state |
| Context management | 20 | Phân biệt trim/delete/summary, có budget |
| Graph summarization | 20 | Conditional edges đúng, summary cập nhật và xóa đúng |
| Testing, security awareness | 20 | Có test case, phân quyền, bảo mật và giới hạn giải pháp |
| **Tổng** | **100** | **80+ điểm: hoàn thành tốt phần thực hành** |

Thang điểm này là thang tự luyện được đề xuất, không phải tiêu chuẩn chứng nhận chính thức.

## 9. Checklist bàn giao

- [ ] Không có `.env` hoặc secret thật trong file nộp.
- [ ] Code có chỉ dẫn cài đặt và chạy được trong môi trường đã cấu hình.
- [ ] Dùng đúng `thread_id` khi tiếp tục chat, ID mới khi New Chat.
- [ ] Có log snapshot trước/sau restart.
- [ ] Có log kiểm tra state đã được cắt hoặc nén.
- [ ] Đã đo hoặc ước lượng ngân sách context.
- [ ] Có xử lý ít nhất một ca mất thông tin quan trọng sau summary.
- [ ] Giải thích được giới hạn production của prototype.

## 10. Tổng kết

Hoàn thành khóa học khi bạn có thể **chứng minh** memory hoạt động bằng kiểm thử trạng thái, chứ không chỉ dựa vào câu trả lời có vẻ hợp lý của LLM. Nền tảng này có thể đưa vào chatbot API, agent và trợ lý có phiên hội thoại, sau khi bổ sung các lớp production cần thiết.
