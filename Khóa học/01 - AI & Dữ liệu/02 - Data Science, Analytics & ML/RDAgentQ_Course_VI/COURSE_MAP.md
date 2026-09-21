# Course Map

| Bài | Chủ đề | Trọng tâm | Paper |
|---|---|---|---|
| 01 | Bài toán và bối cảnh | factor mining, model innovation, hạn chế pipeline hiện tại | §1 |
| 02 | Pipeline định lượng chuẩn hóa | tensor dữ liệu, factor transform, preprocessing, target, predictor | App. B |
| 03 | Kiến trúc R&D-Agent(Q) | 5 unit, Research/Development, feedback loop | §2 |
| 04 | Specification Unit | scenario contract, schema, output, execution environment | §2.1, App. E.1 |
| 05 | Synthesis Unit | hypothesis generation, knowledge forest, exploration/exploitation | §2.2 |
| 06 | Implementation + Co-STEER | DAG scheduling, code generation, practical knowledge base | §2.3, App. A.1 |
| 07 | Validation Unit | dedup factor, IC similarity, Qlib backtest | §2.4 |
| 08 | Analysis + Bandit | feedback, SOTA, contextual Thompson sampling | §2.5, App. A.2 |
| 09 | Thực nghiệm + metrics | CSI300, split, baselines, IC/ICIR/ARR/IR/MDD/CR, trading rules | §3, App. C |
| 10 | Kết quả CSI300 | factor/model/joint optimization, pass@k, factor/model effects | §4 |
| 11 | Generalization + ablation | CSI500, NASDAQ100, cost, Optiver, component/scheduler ablation | App. D |
| 12 | Prompt design | prompt contract cho Specification/Synthesis/Implementation/Analysis | App. E |
| 13 | Discussion | chẩn đoán, hạn chế, hướng mở rộng, broader impacts | App. F |

## Đầu ra sau khóa học

Sau khi hoàn thành, người học nên có thể:

- Vẽ lại kiến trúc R&D-Agent(Q) và giải thích vai trò từng unit.
- Phân biệt **factor optimization**, **model optimization** và **joint optimization**.
- Viết một specification có schema I/O rõ ràng cho agent code-generation.
- Thiết kế một knowledge base lưu `(task, code, feedback)` và cơ chế retrieval theo similarity.
- Giải thích vì sao cần dedup factor trước backtest.
- Tính và diễn giải IC, ICIR, ARR, IR, MDD, Calmar Ratio.
- Mô tả contextual Thompson sampling cho lựa chọn factor/model.
- Đọc ablation và nhận ra đóng góp của từng module thay vì chỉ nhìn một metric đơn lẻ.
