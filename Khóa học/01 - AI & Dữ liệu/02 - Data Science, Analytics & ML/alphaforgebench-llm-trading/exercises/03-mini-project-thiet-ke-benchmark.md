# Bài tập 03 - Mini project: Thiết kế một benchmark sinh chiến lược

**Loại:** Project  
**Mục tiêu:** Áp dụng nguyên tắc thiết kế của AlphaForgeBench vào một benchmark nhỏ.

## 1. Đề bài

Thiết kế benchmark mini gồm 9 query theo lưới:

- Level 1, 2, 3;
- Easy, Medium, Hard.

Không cần triển khai trading thật. Trọng tâm là **thiết kế benchmark tái lập**.

## 2. Deliverable

Tạo các file:

```text
mini-benchmark/
├── README.md
├── queries.json
├── prompt-template.md
├── interface-contract.md
├── evaluation-plan.md
└── limitations.md
```

## 3. Yêu cầu `queries.json`

Mỗi query nên có:

- `id`;
- `level`;
- `grade`;
- `strategy_description`;
- `required_inputs`;
- `expected_reasoning_type`.

Đây là schema bài tập tự luyện, không phải schema nguyên văn từ bài báo.

## 4. Evaluation plan

Kế hoạch cần nêu:

- số lần sinh độc lập;
- model nào được so sánh;
- cách giữ prompt giống nhau;
- interface code đầu ra;
- backtest engine hoặc simulator xác định;
- nhóm metric return/risk/risk-adjusted;
- cách báo cáo mean ± std;
- cách kiểm tra cross-run stability.

## 5. Tiêu chí tự chấm

| Tiêu chí | Điểm |
|---|---:|
| Taxonomy phân biệt được ba loại năng lực | 20 |
| Có kiểm soát prompt/interface | 20 |
| Execution có tính tái lập | 20 |
| Metric không lệch về một mục tiêu duy nhất | 20 |
| Nêu rõ giới hạn và điều không được suy diễn | 20 |
| **Tổng** | **100** |
