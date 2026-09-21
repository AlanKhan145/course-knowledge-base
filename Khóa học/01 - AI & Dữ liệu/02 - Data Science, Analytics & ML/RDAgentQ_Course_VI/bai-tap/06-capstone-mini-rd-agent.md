# Capstone — Thiết kế Mini R&D-Agent cho một bài toán data-centric

## Mục tiêu

Thiết kế một prototype kiến trúc lấy cảm hứng từ paper. Không bắt buộc dùng dữ liệu tài chính; có thể chọn forecasting, anomaly detection, feature engineering hoặc model selection.

## Deliverables

### 1. `specification.md`

Định nghĩa:

- background;
- dataset schema;
- output schema;
- execution environment;
- validation rules;
- optimization objective.

### 2. `synthesis.md`

Mô tả:

- cách lưu experiment history;
- cách chọn context cho action hiện tại;
- schema hypothesis;
- rule tránh lặp ý tưởng.

### 3. `implementation.md`

Thiết kế:

- task graph;
- scheduler;
- code runner;
- feedback parser;
- knowledge base `(task, code, feedback)`;
- retrieval.

### 4. `validation.md`

Phải có:

- syntax/runtime checks;
- schema checks;
- data leakage checks;
- duplicate/redundancy checks;
- benchmark metric.

### 5. `analysis.md`

Phải định nghĩa:

- SOTA update rule;
- failure diagnosis;
- next-hypothesis feedback;
- action selection policy.

### 6. Experiment plan

Thiết kế tối thiểu:

- baseline;
- ablation;
- held-out/OOS test;
- compute/time budget;
- reproducibility log.

## Tiêu chí tự chấm

- 20%: contract rõ và chạy được.
- 20%: feedback loop có memory.
- 20%: validation khách quan.
- 15%: scheduler/action policy có lý do.
- 15%: experimental design.
- 10%: failure modes và limitations.
