# Đánh giá cuối khóa, rubric và lộ trình mở rộng

**Loại bài:** Bài học thực hành · **Mục tiêu:** Tự chấm sản phẩm theo các tiêu chí khả năng sử dụng, đúng dữ liệu, an toàn và tính bảo trì.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Kết quả cần đạt
Người học phải giải thích được vì sao cùng một câu hỏi có thể hiển thị text, chart, form hoặc table; tạo được prototype chat Next.js; hiểu đường đi API; nối dữ liệu tính toán từ backend; xử lý action; nhận thức giới hạn của C1 legacy và hướng OpenUI.

## 2. Rubric 100 điểm
| Nhóm | Điểm | Yêu cầu |
| --- | ---: | --- |
| Backend và dữ liệu | 25 | Validate CSV, tính KPI đúng, phân quyền |
| Giao diện tương tác | 25 | Chat, widget phù hợp, form/action chạy |
| Tính đúng và giải thích | 20 | Không bịa số, có đơn vị, kiểm tra logic |
| UX/accessibility | 15 | Responsive, state lỗi, keyboard |
| Vận hành/README | 15 | Secret đúng chỗ, tests, hướng dẫn chạy |

Mỗi nhóm phải có bằng chứng: testcase, ảnh minh họa, phản hồi của API đã làm sạch, hoặc demo tại chỗ. Không chỉ chấm dựa trên giao diện đẹp.

## 3. Bài kiểm tra thực hành
Dùng CSV 10 hàng tự tạo với ít nhất 2 tháng và 5 SKU. Đặt yêu cầu: “Cho tôi tổng quan doanh số tháng trước và sản phẩm có gross margin từ 5%”. Hệ thống phải suy ra intent phân tích, query/aggregate dữ liệu, hiển thị dashboard và bảng, đồng thời cho phép đổi kỳ hoặc xuất báo cáo. Thử lại với dữ liệu sai, không có quyền, mất kết nối.

## 4. Hướng mở rộng hợp lý
**Giai đoạn 1** thêm hội thoại bền vững và auth. **Giai đoạn 2** tích hợp database PostgreSQL và dữ liệu thời gian thực qua API có kiểm soát. **Giai đoạn 3** thêm công cụ phân tích, search, hoặc agent workflow khi thực sự cần. **Giai đoạn 4** đánh giá OpenUI, quan sát tỉ lệ lỗi schema/renderer và chi phí production.

## 5. Nhật ký học tập
Tạo file `LEARNING_LOG.md` ghi ngày, nội dung đã hoàn tất, lỗi gặp phải, nguyên nhân và bài học rút ra. Mỗi lần thay dependency nên ghi version thực tế cùng đường dẫn tài liệu. Việc học sẽ bền vững hơn việc sao chép code không hiểu.

## 6. Tổng kết
Khóa học không kết thúc ở việc render một card đẹp. Sản phẩm đáng tin phải trả lời đúng, cho thao tác thật, bảo vệ dữ liệu và có thể bảo trì khi framework thay đổi.

## 7. Câu hỏi ôn tập

**Câu 1.** Nhóm điểm lớn nhất trong rubric là?

A. Backend/dữ liệu và giao diện tương tác đồng hạng  
B. Logo  
C. Màu sắc  
D. Số dependencies  

**Đáp án:** A. **Giải thích:** Hai nhóm đều 25 điểm.

**Câu 2.** Bằng chứng nghiệm thu nên gồm?

A. Chỉ ảnh quảng cáo  
B. Testcase và demo/ảnh thực tế  
C. Nhạc nền  
D. Tên file đẹp  

**Đáp án:** B. **Giải thích:** Rubric cần được chứng minh bằng kết quả.

**Câu 3.** Lỗi nào phải kiểm thử?

A. Chỉ dark mode  
B. Chỉ hover  
C. Dữ liệu sai, thiếu quyền, mất mạng  
D. Chỉ loading thành công  

**Đáp án:** C. **Giải thích:** Các tình huống lỗi thực tế quyết định độ tin cậy.

**Câu 4.** Khi thêm PostgreSQL cần vẫn giữ?

A. Secret trong client  
B. SQL tùy ý từ AI  
C. Không cần auth  
D. Tầng xác thực và phân quyền  

**Đáp án:** D. **Giải thích:** Database không tự giải quyết quyền người dùng.

**Câu 5.** Nên ghi gì trong learning log?

A. Thử nghiệm, lỗi, cách khắc phục  
B. Chỉ ngày tháng  
C. Chỉ tên dự án  
D. Mật khẩu API  

**Đáp án:** A. **Giải thích:** Nhật ký giúp tái hiện và cải thiện quá trình học.

