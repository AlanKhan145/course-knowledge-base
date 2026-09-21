# Khóa học R&D-Agent(Q): Tự động hóa R&D định lượng bằng hệ đa tác tử

Khóa học này được biên soạn trực tiếp từ paper **“R&D-Agent-Quant: A Multi-Agent Framework for Data-Centric Factors and Model Joint Optimization”** (NeurIPS 2025 / arXiv:2505.15155v2). Mục tiêu là biến paper thành một lộ trình học độc lập: hiểu kiến trúc, hiểu công thức, đọc được thực nghiệm, và có thể phác thảo một hệ thống tương tự ở mức kỹ thuật.

> **Lưu ý:** đây là tài liệu học thuật/kỹ thuật, không phải khuyến nghị đầu tư. Các con số thực nghiệm được giữ theo paper và chỉ dùng để học cách thiết kế, đánh giá hệ thống nghiên cứu định lượng.

## Cấu trúc thư mục

```text
RDAgentQ-Course/
├── README.md
├── COURSE_MAP.md
├── GLOSSARY.md
├── ly-thuyet/
│   ├── 01-bai-toan-va-boi-canh.md
│   ├── 02-pipeline-dinh-luong-chuan-hoa.md
│   ├── 03-kien-truc-rd-agent-q.md
│   ├── 04-specification-unit.md
│   ├── 05-synthesis-unit.md
│   ├── 06-implementation-unit-va-co-steer.md
│   ├── 07-validation-unit.md
│   ├── 08-analysis-unit-va-bandit.md
│   ├── 09-thiet-ke-thuc-nghiem-va-metrics.md
│   ├── 10-ket-qua-chinh-csi300.md
│   ├── 11-generalization-ablation-cost-case-study.md
│   ├── 12-prompt-design-va-agent-contracts.md
│   └── 13-discussion-limitations-va-bai-hoc-he-thong.md
├── bai-tap/
│   ├── 01-concept-check.md
│   ├── 02-metrics-va-backtest.md
│   ├── 03-thiet-ke-hypothesis-factor.md
│   ├── 04-mo-phong-co-steer.md
│   ├── 05-doc-ket-qua-thuc-nghiem.md
│   └── 06-capstone-mini-rd-agent.md
├── dap-an/
│   ├── 01-concept-check-dap-an.md
│   ├── 02-metrics-va-backtest-goi-y.md
│   └── 05-doc-ket-qua-thuc-nghiem-dap-an.md
├── assets/
│   └── *.png
└── source/
    └── 2505.15155v2.pdf
```

## Cách học đề xuất

1. Học bài 1–3 để nắm **vì sao phải đồng tối ưu factor–model** và vòng lặp tổng thể.
2. Học bài 4–8 để hiểu từng unit và luồng dữ liệu giữa các agent.
3. Học bài 9–11 để đọc đúng metrics, backtest, bảng thực nghiệm, ablation và kiểm tra generalization.
4. Học bài 12 để hiểu prompt/contract giữa agent; bài 13 để nhìn hệ thống ở mức thiết kế nghiên cứu.
5. Sau mỗi cụm, làm bài tập tương ứng. Capstone yêu cầu tự thiết kế một mini R&D-Agent ở mức kiến trúc và pseudocode.

## Kiến thức nền nên có

- Python và machine learning cơ bản.
- Khái niệm supervised learning, train/validation/test split.
- Time series và dữ liệu bảng.
- Kiến thức cơ bản về factor, return, drawdown, Sharpe/IR.
- Khái niệm LLM agent, tool use, feedback loop và code generation.

## Hình minh họa

Ảnh trong `assets/` được trích/cắt từ các trang quan trọng của paper để học nhanh kiến trúc, thuật toán, bảng kết quả và thiết kế prompt. Mỗi bài có chú thích trang gốc tương ứng.
