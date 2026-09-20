# 003 - Bài tập: mô phỏng ReAct Agent Loop

## 1. Mục tiêu

Bài tập giúp người học tự tái tạo chu trình `Thought → Action → Observation` và hiểu vì sao lịch sử phải được đưa trở lại LLM ở mỗi vòng.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm:

- `Thought`;
- `Action`;
- `Observation`;
- function/tool call;
- lịch sử xử lý;
- scratchpad;
- điều kiện dừng của agent loop.

## 3. Đề bài

Xét một E-Commerce Agent cần trả lời yêu cầu về giá cuối của một laptop sau khi áp dụng một hạng giảm giá.

Agent có:

- công cụ lấy giá sản phẩm;
- công cụ xử lý mức giảm giá.

Hãy mô phỏng quá trình agent giải quyết yêu cầu qua nhiều vòng lặp.

## 4. Nhiệm vụ

1. Tạo bảng có các cột:
   - vòng lặp;
   - dữ liệu LLM đang có;
   - quyết định tiếp theo;
   - action;
   - observation;
   - dữ liệu được thêm vào lịch sử.
2. Mô phỏng ít nhất:
   - một vòng lấy giá sản phẩm;
   - một vòng xử lý giảm giá;
   - một vòng kết thúc không gọi thêm công cụ.
3. Giải thích phần nào do LLM quyết định và phần nào do ứng dụng thực thi.
4. Viết pseudocode cho vòng lặp `while`.
5. Mô tả điều kiện khiến vòng lặp dừng.

## 5. Yêu cầu

- Không coi LLM là thành phần trực tiếp chạy mã công cụ.
- Mỗi observation phải được đưa trở lại lịch sử trước vòng tiếp theo.
- Vòng lặp chỉ dừng khi mô hình quyết định không cần thêm tool call.
- Pseudocode không được phụ thuộc vào một API framework cụ thể.

## 6. Tiêu chí hoàn thành

- [ ] Phân biệt đúng `Thought`, `Action`, `Observation`.
- [ ] Có thể hiện lịch sử được tích lũy.
- [ ] Có ít nhất một tool call ở hai vòng đầu.
- [ ] Vòng cuối trả lời mà không gọi tool mới.
- [ ] Có pseudocode thể hiện đúng cơ chế lặp.
