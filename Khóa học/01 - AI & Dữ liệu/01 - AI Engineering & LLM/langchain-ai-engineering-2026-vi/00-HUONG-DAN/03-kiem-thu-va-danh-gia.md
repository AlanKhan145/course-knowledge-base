# Đánh giá AI Engineering

- **Correctness:** output có đáp ứng nghiệp vụ và schema? Test hành vi đầu ra chứ không test câu chữ chính xác tuyệt đối.
- **Groundedness:** với RAG, claim có nguồn trong các đoạn trả về?
- **Retrieval:** đo Recall@k, độ phủ tài liệu, lỗi split và duplication.
- **Reliability:** timeout, retry có giới hạn, limit steps, fallback, idempotency.
- **Security:** kiểm thử prompt injection từ tool output, quyền tenant, SSRF và secrets.
- **Operations:** đo latency (p50/p95), số token và đơn giá provider tại thời điểm đo.

Mẫu một case: `case_id, input, expected_behavior, source_docs, observed, pass_fail, notes`.
