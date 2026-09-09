# Khóa học: AlphaAgent - LLM-Driven Alpha Mining và chống Alpha Decay

Khóa học này được biên soạn lại từ bài báo **“AlphaAgent: LLM-Driven Alpha Mining with Regularized Exploration to Counteract Alpha Decay”**, KDD 2025. Nội dung được tổ chức theo hướng học từng bước, không phải bản chép nguyên văn bài báo.

## Mục tiêu khóa học

Sau khi hoàn thành, người học có thể:

1. Giải thích alpha factor, alpha mining và alpha decay.
2. Phân biệt hai nguyên nhân trọng tâm của alpha decay được bài báo nhấn mạnh: **overfitting/p-hacking** và **factor crowding**.
3. Mô tả cách AlphaAgent dùng LLM kết hợp regularization để tạo factor có tính mới, có lý do tài chính và ít phức tạp hơn.
4. Hiểu vai trò của **operator library**, **abstract syntax tree (AST)**, độ tương đồng giữa factor và alpha zoo.
5. Phân tích workflow ba agent: **Idea Agent → Factor Agent → Eval Agent → feedback**.
6. Đọc được thiết kế backtest, các metric IC/RankIC/ICIR/IR/AR/MDD và kết quả thực nghiệm.
7. Hiểu các kết quả về alpha decay, hiệu quả khai phá, ablation study và ảnh hưởng của base LLM.

## Lộ trình

- [Bài 01 - Bối cảnh: Alpha Mining và Alpha Decay](lessons/01-alpha-mining-and-alpha-decay.md)
- [Bài 02 - Problem Formulation và Regularized Objective](lessons/02-problem-formulation.md)
- [Bài 03 - Operator Library, AST và Factor Parsing](lessons/03-operator-library-and-ast.md)
- [Bài 04 - Ba cơ chế Regularization](lessons/04-regularization-mechanisms.md)
- [Bài 05 - Kiến trúc Multi-Agent tự trị](lessons/05-autonomous-multi-agent-framework.md)
- [Bài 06 - Thiết kế thực nghiệm và Backtest](lessons/06-experiment-design.md)
- [Bài 07 - Kết quả tổng thể và Alpha Decay](lessons/07-results-and-alpha-decay.md)
- [Bài 08 - Efficiency, Ablation và Base LLM](lessons/08-efficiency-ablation-base-llm.md)
- [Bài 09 - Tổng kết, hàm ý và câu hỏi ôn tập](lessons/09-summary-and-review.md)
- [Glossary](lessons/10-glossary.md)

## Ảnh/tables đã tách

### Figures

- `assets/figures/figure-01-alphaagent-workflow.png` - Figure 1, workflow AlphaAgent.
- `assets/figures/figure-02-ast-similarity.png` - Figure 2, AST similarity với alpha zoo.
- `assets/figures/figure-03-cumulative-excess-return.png` - Figure 3, cumulative excess returns.
- `assets/figures/figure-04-yearly-ic-rankic.png` - Figure 4, yearly IC/RankIC.
- `assets/figures/figure-05-ic-evolution.png` - Figure 5, IC qua 5 vòng.
- `assets/figures/figure-06-ablation.png` - Figure 6, ablation study.
- `assets/figures/figure-07-base-llm-radar.png` - Figure 7, so sánh base LLM.

### Tables

- `assets/tables/table-01-dataset-splits.png` - Table 1, train/validation/test splits.
- `assets/tables/table-02-performance-comparison.png` - Table 2, so sánh hiệu năng.

### GIF

- `AlphaAgent_Figures_Preview.gif` - GIF chạy lần lượt 7 figure để xem nhanh toàn bộ phần hình ảnh.

## Nguồn

Tang et al., *AlphaAgent: LLM-Driven Alpha Mining with Regularized Exploration to Counteract Alpha Decay*, Proceedings of KDD 2025, 10 pages. Bài báo cung cấp mã nguồn tại repository được ghi trong phần Abstract của paper.

> Lưu ý: Đây là tài liệu học tập biên soạn lại từ paper. Các con số, công thức và kết luận thực nghiệm trong khóa học giữ theo nguồn; các bài tập “tự luyện” là câu hỏi học tập được thêm vào để hỗ trợ hiểu bài.
