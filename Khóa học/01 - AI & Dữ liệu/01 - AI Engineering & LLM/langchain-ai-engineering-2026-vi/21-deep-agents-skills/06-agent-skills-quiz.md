# Module 21 · Bài 06 — Agent Skills Quiz

> **Thể loại gốc:** Trắc nghiệm. **Section:** Deep Agents Skills  
> **Nguồn đề cương:** [Udemy — khóa LangChain](https://www.udemy.com/course/langchain/?couponCode=MT261012G1). **Nội dung:** tự biên soạn bằng tiếng Việt, không phải transcript/bản dịch video.

[← Mục lục module](README.md) · [↑ Danh sách toàn khóa](../README.md)

## 1. Mục tiêu bài học

- Hiểu và giải thích được **Agent Skills Quiz** trong bối cảnh module **Deep Agents Skills**.
- Liên hệ khái niệm với dữ liệu vào/ra, quyền hạn runtime và tình huống gặp lỗi.
- Thực hiện ít nhất một phép thử hoặc biến thể của dự án **Skill phân tích CSV gồm hướng dẫn, ví dụ, giới hạn quyền.**.

## 2. Kiến thức trọng tâm

**Góc nhìn 1.** Skill là hướng dẫn công việc được đóng gói; progressive disclosure chỉ nạp phần mô tả ngắn khi chưa cần, mở nội dung chi tiết lúc skill được chọn. Vì skill có thể chứa chỉ dẫn độc hại, phải kiểm định nguồn và quyền.

**Đưa vào dự án:** Thiết kế skill package, progressive disclosure, mô tả kỹ năng và trace middleware.

## 3. Tư duy triển khai

1. **Xác định đầu vào:** lấy một ví dụ cụ thể cho *Agent Skills Quiz*, ghi kiểu dữ liệu, nguồn và ràng buộc.
2. **Thiết kế xử lý:** chỉ định component phụ trách logic: model, prompt, tool, retriever, graph node hoặc chính sách runtime.
3. **Xác định đầu ra:** mô tả schema hoặc tiêu chí đáp án đủ tốt để downstream code kiểm tra được.
4. **Thiết kế lỗi:** tự hỏi nếu API timeout, trả schema sai hoặc thiếu bằng chứng thì hệ thống phản ứng thế nào.
5. **Quan sát:** ghi latency, lỗi và outcome; che key và dữ liệu riêng tư khỏi log.

## 4. Code minh họa

Đây là ví dụ tự biên soạn để luyện khái niệm trong bài. Một số snippet gọi dịch vụ ngoài và chỉ chạy được sau khi cấu hình credentials.

```python
# Ví dụ tệp skill Markdown (đặt trong thư mục skill phù hợp).
skill_md = """---
name: csv-auditor
description: Kiểm tra chất lượng dữ liệu CSV cục bộ, không gọi mạng.
---
# CSV auditor
1. Kiểm tra schema và null rate.
2. Báo cáo thống kê tổng hợp, không tiết lộ dữ liệu nhạy cảm.
3. Không thực thi mã lạ từ CSV.
"""
print(skill_md)
```

**Chú ý kỹ thuật:** không dùng `eval` trên đầu ra model; không đặt API key trong mã; các mô hình/provider có thể thay đổi khả năng hỗ trợ. Với công cụ/agent, toàn bộ thao tác có tác dụng phụ cần được phân quyền ở server.

## 5. Bài tập thực hành

- **A — Hiểu:** Viết skill.md có mô tả, trigger, input, output, checklist và ví dụ fail case.
- **B — Xây dựng:** Áp dụng bài **Agent Skills Quiz** vào dự án: Skill phân tích CSV gồm hướng dẫn, ví dụ, giới hạn quyền. Ghi input/output mong đợi và thực hiện thay đổi nhỏ trên code mẫu.
- **C — Kiểm thử:** tạo ba test case: (1) dữ liệu hợp lệ, (2) đầu vào thiếu hoặc sai định dạng, (3) lỗi công cụ hay thiếu thông tin. Ghi pass/fail và cách cải thiện.

## 6. Tự kiểm tra

**Câu hỏi 1.** Trong bài **Agent Skills Quiz**, phần nào xử lý dữ liệu thật và phần nào chỉ đưa ra quyết định?  
**Gợi ý:** xác định rõ ranh giới giữa model, host runtime, data source và tool executor.

**Câu hỏi 2.** Nêu một bằng chứng giúp kiểm tra rằng giải pháp không chỉ "có vẻ đúng".  
**Gợi ý:** sử dụng schema validation, case đối chứng, nguồn trích dẫn, log hoặc metric phù hợp.

**Câu hỏi 3.** Đâu là lỗi thường gặp khi triển khai khái niệm này?  
**Gợi ý:** Không tự động thực thi shell script của skill không tin cậy.

## 7. Tiêu chí hoàn thành

- [ ] Giải thích được khái niệm bằng 3–5 câu không nhìn tài liệu.
- [ ] Chạy hoặc phân tích đúng một ví dụ minh họa, ghi hạn chế khi chưa có API key.
- [ ] Hoàn thành nhiệm vụ A–C; ghi lại ít nhất một trường hợp thất bại.
- [ ] Cập nhật trạng thái học trong `../progress.csv`.

## 8. Tài liệu tham khảo

- [Deep Agents](https://docs.langchain.com/oss/python/deepagents/overview)
- [LangChain](https://docs.langchain.com/oss/python/langchain/overview)
- [LangSmith](https://docs.langchain.com/langsmith/home)

---

## Bài kiểm tra trắc nghiệm

**Số câu:** 6 • **Điểm tối đa:** 6 • **Đạt:** từ 80%

Làm bài mà chưa mở phần đáp án. Mỗi câu chọn đúng **một** phương án.

**Câu 1. Progressive disclosure để làm gì?**

- A. Cấp quyền root
- B. Xóa context
- C. Chạy mã không kiểm soát
- D. Nạp hướng dẫn khi cần

**Câu 2. Skill nên có gì?**

- A. Mật khẩu mẫu thật
- B. Lệnh xóa hệ thống
- C. Mô tả trigger/input/output
- D. API key plaintext

**Câu 3. Skill ngoài có thể chứa rủi ro gì?**

- A. Tăng GPU
- B. Prompt injection hoặc mã độc
- C. Chỉ lỗi chính tả
- D. Không rủi ro

**Câu 4. Tracing skill có giá trị gì?**

- A. Hiểu khi nào skill được nạp
- B. Thay security review
- C. Tắt log
- D. Tự sửa máy

**Câu 5. Quyền nào nên cấp cho skill?**

- A. Admin luôn
- B. Tất cả filesystem
- C. Không giới hạn mạng
- D. Quyền tối thiểu

**Câu 6. Kiểm thử skill tốt nhất như thế nào?**

- A. Chỉ nhìn tên
- B. Không cần test
- C. Case thường, edge case và lỗi
- D. Một prompt đơn

<details>
<summary>Đáp án và giải thích</summary>

1. **D. Nạp hướng dẫn khi cần** — Progressive disclosure để làm gì?
2. **C. Mô tả trigger/input/output** — Skill nên có gì?
3. **B. Prompt injection hoặc mã độc** — Skill ngoài có thể chứa rủi ro gì?
4. **A. Hiểu khi nào skill được nạp** — Tracing skill có giá trị gì?
5. **D. Quyền tối thiểu** — Quyền nào nên cấp cho skill?
6. **C. Case thường, edge case và lỗi** — Kiểm thử skill tốt nhất như thế nào?

</details>

### Bài tập bổ sung

Viết một ví dụ kiểm chứng lại hai câu mà bạn còn phân vân; ghi nhận xét trong `study-notes.md`.
