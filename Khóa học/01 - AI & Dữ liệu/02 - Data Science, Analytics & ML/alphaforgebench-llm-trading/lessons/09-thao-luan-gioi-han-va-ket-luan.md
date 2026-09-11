# Bài 09 - Thảo luận, giới hạn và kết luận

**Loại:** Lesson  
**Nguồn chính:** PDF trang 9

## 1. "End-to-end" trong bài báo nghĩa là gì?

Ở đây end-to-end là pipeline từ **natural-language requirement -> rule-based strategy code -> deterministic backtest**. Nó không đồng nghĩa với agent trực tiếp quyết định BUY/HOLD/SELL ở mọi timestep.

Hai interface kiểm tra hai năng lực khác nhau:

- agent trading: step-wise action selection;
- AlphaForgeBench: tổng hợp factor, rule và decision logic thành chiến lược nhất quán.

## 2. Financial strategy generation không phải một năng lực đơn nhất

Ranking reversal giữa Level 1 và Level 3 cho thấy:

- giỏi dịch quy tắc thành code;
- giỏi suy ra tham số;
- giỏi thiết kế chiến lược mở;

là các năng lực khác nhau.

Benchmark vì vậy hữu ích như một công cụ chẩn đoán, không chỉ là bảng xếp hạng.

## 3. Phạm vi kiểm soát của benchmark

Thiết lập hiện tại giới hạn ở:

- single-asset;
- long-only;
- standardized backtest;
- fixed transaction cost 10^-3;
- không explicit slippage;
- không liquidity modeling.

Những lựa chọn này tăng tính so sánh và tái lập, nhưng khiến metric nên được hiểu là **đo chất lượng thiết kế chiến lược trong môi trường kiểm soát**, không phải dự báo trực tiếp hiệu năng triển khai ngoài thị trường thật.

## 4. Stage 2 cũng có giới hạn

Structured queries được augment từ Stage 1 theo taxonomy định trước. Mục đích là tăng khả năng chẩn đoán, không phải tái tạo đầy đủ mọi loại chiến lược có thể gặp ngoài đời.

Bài báo cho rằng ranking giữa Stage 1 và Stage 2 vẫn broadly aligned, vì vậy structured track có vẻ duy trì khác biệt năng lực thật mà không tạo bias mạnh cho một model cụ thể.

## 5. Kết luận cuối của bài báo

Trên **903 queries, 6 LLM, 7 assets và 35.190 implementations**, AlphaForgeBench cho thấy code-generation paradigm:

- có tính tái lập cao;
- ít nhạy với temperature trong thiết lập được thử;
- phân biệt model rõ hơn ở task khó;
- bộc lộ ranking reversal và model-specific risk profile.

## 6. Điều không nên suy diễn quá nguồn

Không nên biến kết quả thành khẳng định rằng:

- model đứng đầu benchmark chắc chắn kiếm lời tốt nhất khi triển khai thực;
- benchmark đã xử lý đầy đủ slippage, liquidity, short-selling hay portfolio allocation;
- các appendix đã được kiểm chứng trong gói PDF này.

PDF cung cấp không chứa Appendix C/D/E/F/G, nên khóa học không bổ sung các chi tiết đó bằng suy đoán.
