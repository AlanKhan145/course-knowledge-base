# Báo cáo bổ sung lý thuyết nền cho khóa AlphaAgent

## Phạm vi và phương pháp

Đã khảo sát đệ quy toàn bộ thư mục `D:\Sao lưu\Udemy\Khóa học`, sau đó đọc toàn bộ 10 lesson trong `alphaagent-llm-driven-alpha-mining/lessons` trước khi chọn nguồn. Việc truy hồi được thực hiện theo nội dung lesson và dependency cần thiết, không chỉ theo từ khóa trong tên file.

Nguồn được ưu tiên theo thứ tự:

1. Nội dung thật của các khóa học trong kho.
2. Nội dung các lesson khác của AlphaAgent để giữ mạch khái niệm.
3. Kiến thức chuyên môn chuẩn ở mức tối thiểu khi kho không có giải thích đủ gần use case.

Phần thêm được viết lại theo hướng giảng trực tiếp, không sao chép nguyên văn lesson nguồn. Mỗi lesson hiện có thứ tự: nội dung AlphaAgent gốc ngay sau title, lý thuyết nền, liên hệ với bài hiện tại, source path và các source block nguyên văn để copy.

## Kết quả inventory

| Hạng mục | Kết quả |
|---|---:|
| Nhóm khóa học đã quét | 9 |
| Course/collection folder có Markdown trực tiếp theo heuristic inventory | 79 |
| Tổng số file trong kho | 31.888 |
| Tài liệu Markdown đã index làm proxy cho lesson/document inventory | 22.674 |
| AlphaAgent module | 1 |
| AlphaAgent lesson | 10 |
| AlphaAgent lesson dạng theory/review/glossary | 10 |
| Lesson coding/lab/exercise độc lập | 0; bài tập được nhúng trong một số lesson |
| Lesson được bổ sung lý thuyết | 10 |
| Lesson không cần bổ sung | 0 |
| Lượt source lesson được tham chiếu | 53 |
| Source lesson duy nhất được sử dụng | 27 |

Con số 79 là số thư mục course/collection có file Markdown trực tiếp theo heuristic; kho có nhiều cấu trúc khác nhau nên 22.674 Markdown mới là chỉ số inventory nhất quán giữa các nhóm, không khẳng định mọi file đều là video lesson độc lập.

## Cấu trúc khóa AlphaAgent

| Thứ tự | File lesson | Phân loại | Trọng tâm |
|---:|---|---|---|
| 01 | `01-alpha-mining-and-alpha-decay.md` | Theory + review | Alpha mining, alpha decay, overfitting, crowding |
| 02 | `02-problem-formulation.md` | Theory | Tensor dữ liệu, objective và regularized objective |
| 03 | `03-operator-library-and-ast.md` | Theory + exercise | Operator library, factor parsing và AST |
| 04 | `04-regularization-mechanisms.md` | Theory + exercise | Complexity, originality, hypothesis alignment |
| 05 | `05-autonomous-multi-agent-framework.md` | Theory + exercise | Idea Agent, Factor Agent, Eval Agent và feedback loop |
| 06 | `06-experiment-design.md` | Theory + experimental analysis | Dataset, metric, split, LightGBM và backtest protocol |
| 07 | `07-results-and-alpha-decay.md` | Results analysis + review | Performance, cumulative return và yearly decay |
| 08 | `08-efficiency-ablation-base-llm.md` | Results analysis + review | Efficiency, ablation, t-test và base LLM |
| 09 | `09-summary-and-review.md` | Summary + review | Hàm ý, kết luận và 15 câu hỏi ôn tập |
| 10 | `10-glossary.md` | Glossary | Tra cứu thuật ngữ AlphaAgent |

Không có module con hoặc file coding/lab/exercise độc lập trong thư mục `lessons`; các bài tập và phân tích được đặt trực tiếp trong các lesson lý thuyết.

## Phân tích AlphaAgent và dependency map

```text
Bài 01: giá/OHLCV → return → alpha factor → overfitting/p-hacking → crowding/decay
    ↓
Bài 02: feature/target → objective/argmax → regularization → hypothesis bias
    ↓
Bài 03: operator library → grammar → AST → executable symbolic factor
    ↓
Bài 04: complexity → AST similarity/originality → alignment → multi-objective penalty
    ↓
Bài 05: state/action/observation → Idea/Factor/Eval Agent → feedback loop
    ↓
Bài 06: OHLCV/time split → IC/RankIC/ICIR → AR/IR/MDD → LightGBM → backtest
    ↓
Bài 07: predictive effectiveness → economic payoff → persistence → alpha decay
    ↓
Bài 08: ablation → hit/dev/token efficiency → variance → t-test/p-value → base LLM
    ↓
Bài 09: search/metaheuristic → multi-objective → continuous exploration → scientific workflow
    ↓
Bài 10: glossary liên kết dữ liệu, expression, đánh giá tài chính và agent
```

## Bảng tổng hợp theo lesson

| AlphaAgent lesson | Lý thuyết đã thêm | Khóa học nguồn | Source lesson |
|---|---|---|---|
| `01-alpha-mining-and-alpha-decay.md` | Return đơn giản/log; alpha factor và portfolio; generalization, overfitting, p-hacking; factor crowding và exploration | AI Data Scientist Roadmap; Machine Learning Roadmap; Tính toán tiến hóa | `010 - Time Series Basics.md`<br>`025 - Feature Engineering.md`<br>`002 - Generalization.md`<br>`003 - Overfitting.md`<br>`03-lap-trinh-di-truyen.md` |
| `02-problem-formulation.md` | Feature/target và leakage; objective, metric, `argmax`; regularization; không gian search rời rạc và nghiệm cục bộ; market hypothesis như inductive bias | AI Data Scientist Roadmap; Machine Learning Roadmap; Tính toán tiến hóa | `004 - Target Variable.md`<br>`033 - Model Selection.md`<br>`010 - Regularization.md`<br>`03-lap-trinh-di-truyen.md`<br>`025 - Time Series Validation.md` |
| `03-operator-library-and-ast.md` | Expression như chương trình nhỏ; arity/type/missing value; AST; intermediate representation; structured/constrained output; complexity và common subtree | Tính toán tiến hóa; AI Engineer Roadmap; AI Data Scientist Roadmap | `03-lap-trinh-di-truyen.md`<br>`004 - LLMs.md`<br>`006 - Structured Output.md`<br>`007 - Constraining Outputs and Inputs.md`<br>`008 - Output Schema.md`<br>`010 - Pandas.md` |
| `04-regularization-mechanisms.md` | Trade-off performance/penalty; complexity và bias-variance; AST similarity/largest common subtree; alpha zoo; hypothesis–description–expression alignment; multi-objective | Machine Learning Roadmap; Tính toán tiến hóa; AI Data Scientist Roadmap | `010 - Regularization.md`<br>`03-lap-trinh-di-truyen.md`<br>`025 - Feature Engineering.md`<br>`033 - Model Selection.md` |
| `05-autonomous-multi-agent-framework.md` | Agent loop; state/action/observation/tool; planning, evaluation, reflection, memory; phân biệt feedback với RL reward; multi-agent role separation; hypothesis 4 phần | AI Engineer Roadmap | `001 - AI Agents.md`<br>`010 - Plan-and-Execute.md`<br>`011 - Reflection.md`<br>`012 - Memory.md`<br>`007 - Evaluation Harness.md` |
| `06-experiment-design.md` | OHLCV; simple/log return; time series/cross-section; `rolling`, `shift`, `rank`; Pearson/Spearman, IC/RankIC/ICIR; AR/IR/MDD; temporal split và leakage; LightGBM downstream | AI Data Scientist Roadmap; AI Engineer trading resource; BI Analyst Roadmap; Data Analyst Roadmap; Machine Learning Roadmap | `010 - Time Series Basics.md`<br>`004 - Target Variable.md`<br>`ai_stock_trading/README.md`<br>`003 - Correlation Analysis.md`<br>`002 - Correlation Analysis.md`<br>`025 - Time Series Validation.md`<br>`007 - XGBoost - LightGBM.md` |
| `07-results-and-alpha-decay.md` | Predictive effectiveness, economic payoff, persistence; cumulative excess return; drawdown/MDD; so sánh công bằng và giới hạn suy luận từ backtest | AI Data Scientist Roadmap; AI Engineer trading resource; BI Analyst Roadmap; Machine Learning Roadmap | `010 - Time Series Basics.md`<br>`ai_stock_trading/README.md`<br>`003 - Correlation Analysis.md`<br>`033 - Model Selection.md`<br>`002 - Generalization.md` |
| `08-efficiency-ablation-base-llm.md` | Ablation/control; hit ratio, dev success rate, token efficiency; variance và exploration; base LLM so với framework; t-test, p-value và caveat time-series/multiple comparisons | AI Engineer Roadmap; AI Data Scientist Roadmap | `007 - Evaluation Harness.md`<br>`004 - LLMs.md`<br>`026 - t-test.md`<br>`023 - p-value.md`<br>`005 - Variance.md`<br>`033 - Model Selection.md` |
| `09-summary-and-review.md` | Search space/metaheuristic; GP, fitness, mutation/crossover; tối ưu đa mục tiêu; continuous exploration; scientific workflow; agent contracts | Tính toán tiến hóa; AI Engineer Roadmap; AI Data Scientist Roadmap | `03-lap-trinh-di-truyen.md`<br>`05-chien-luoc-tien-hoa.md`<br>`001 - AI Agents.md`<br>`007 - Evaluation Harness.md`<br>`033 - Model Selection.md` |
| `10-glossary.md` | Bốn lớp khái niệm; feature/target, IC/return, feedback/reward; cách định vị thuật ngữ trong pipeline | AI Engineer trading resource; AI Data Scientist Roadmap; BI Analyst Roadmap; AI Engineer Roadmap; Tính toán tiến hóa | `ai_stock_trading/README.md`<br>`010 - Time Series Basics.md`<br>`003 - Correlation Analysis.md`<br>`001 - AI Agents.md`<br>`03-lap-trinh-di-truyen.md` |

Trong mỗi lesson, phần `## Nguồn kiến thức liên quan trong kho khóa học` chứa đường dẫn tương đối đầy đủ. Bảng dùng tên file ngắn để dễ đọc; danh mục ngay dưới đây cung cấp path đầy đủ và không thay thế được các path trong lesson.

## Danh mục source lesson duy nhất với path đầy đủ

- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/Ai-engineer/Khóa-1/Resources/llm_engineering/week4/community-contributions/ai_stock_trading/README.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/01 - Foundations and LLM Basics/Module 02 - Introduction/02-LLMCore/004 - LLMs.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/02 - Model Platforms and Prompting/Module 05 - Prompt Engineering/03-Structured/006 - Structured Output.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/02 - Model Platforms and Prompting/Module 05 - Prompt Engineering/03-Structured/007 - Constraining Outputs and Inputs.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/02 - Model Platforms and Prompting/Module 05 - Prompt Engineering/03-Structured/008 - Output Schema.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/04 - Agents, Multimodal and Tools/Module 10 - AI Agents/01-Basics/001 - AI Agents.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/04 - Agents, Multimodal and Tools/Module 10 - AI Agents/04-Build/010 - Plan-and-Execute.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/04 - Agents, Multimodal and Tools/Module 10 - AI Agents/05-MemoryMCP/011 - Reflection.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/04 - Agents, Multimodal and Tools/Module 10 - AI Agents/05-MemoryMCP/012 - Memory.md`
- `01 - AI & Dữ liệu/01 - AI Engineering & LLM/ai-engineer-roadmap/AI-Engineer-Roadmap-Course/00 - Roadmap.sh AI Engineer Official/05 - Production and Portfolio/Module 13 - Production AI and LLMOps/03-Evals/007 - Evaluation Harness.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/01 - Math, Statistics and Econometrics/Module 02 - Statistics/01-DescStats/005 - Variance.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/01 - Math, Statistics and Econometrics/Module 02 - Statistics/04-Testing/023 - p-value.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/01 - Math, Statistics and Econometrics/Module 02 - Statistics/04-Testing/026 - t-test.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/01 - Math, Statistics and Econometrics/Module 03 - Econometrics and Time Series/03-TSParts/010 - Time Series Basics.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/02 - Coding and EDA/Module 04 - Coding for Data Science/02-Libs/010 - Pandas.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/02 - Coding and EDA/Module 05 - Exploratory Data Analysis/01-Understand/004 - Target Variable.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/03 - Machine Learning and Deep Learning/Module 06 - Machine Learning/01-Supervised/007 - XGBoost - LightGBM.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/03 - Machine Learning and Deep Learning/Module 06 - Machine Learning/05-Features/025 - Feature Engineering.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/ai-data-scientist-roadmap/AI-Data-Scientist-Roadmap-Course/00 - Roadmap.sh AI Data Scientist Official/03 - Machine Learning and Deep Learning/Module 06 - Machine Learning/06-Select/033 - Model Selection.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/bi-analyst-roadmap/BI-Analyst-Roadmap-Course/00 - Roadmap.sh BI Analyst Official/Module 04 - Statistics Basics - Thong ke co ban/01-VariablesAndData-CorrelationAnalysis/003 - Correlation Analysis.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/data-analyst-roadmap/Data-Analyst-Roadmap-Course/00 - Roadmap.sh Data Analyst Official/03 - Analysis and Visualisation/Module 11 - Statistical Analysis/01-HypothesisTesting-Regression/002 - Correlation Analysis.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/khoa-hoc-tinh-toan-tien-hoa/Chuong 03 - Lap Trinh Di Truyen/03-lap-trinh-di-truyen.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/khoa-hoc-tinh-toan-tien-hoa/Chuong 05 - Chien Luoc Tien Hoa/05-chien-luoc-tien-hoa.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/machine-learning-roadmap/Machine-Learning-Roadmap-Course/00 - Roadmap.sh Machine Learning Official/04 - Evaluation, Workflow and Deep Learning/Module 11 - Model Evaluation/01-WhatIsModel-BiasVarianceTradeoff/002 - Generalization.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/machine-learning-roadmap/Machine-Learning-Roadmap-Course/00 - Roadmap.sh Machine Learning Official/04 - Evaluation, Workflow and Deep Learning/Module 11 - Model Evaluation/01-WhatIsModel-BiasVarianceTradeoff/003 - Overfitting.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/machine-learning-roadmap/Machine-Learning-Roadmap-Course/00 - Roadmap.sh Machine Learning Official/04 - Evaluation, Workflow and Deep Learning/Module 11 - Model Evaluation/05-MAPE-TimeSeriesValidation/025 - Time Series Validation.md`
- `01 - AI & Dữ liệu/02 - Data Science, Analytics & ML/machine-learning-roadmap/Machine-Learning-Roadmap-Course/00 - Roadmap.sh Machine Learning Official/04 - Evaluation, Workflow and Deep Learning/Module 13 - Deep Learning Foundations/02-LossFunctions-Regularization/010 - Regularization.md`

Danh mục trên là 27 file duy nhất; một số file được tái sử dụng ở nhiều lesson vì chúng cung cấp dependency nền dùng chung.

## Nội dung source đã nhúng

Để tiện sao chép, mỗi lesson đã có thêm section `## Nội dung các file tham khảo để tiện sao chép` ở cuối file. Mỗi source được đặt trong một fenced block 4 dấu backtick, giữ nguyên nội dung Markdown của source và có source path ngay trước block.

| Lesson | Source block đã nhúng |
|---|---:|
| `01-alpha-mining-and-alpha-decay.md` | 5 |
| `02-problem-formulation.md` | 5 |
| `03-operator-library-and-ast.md` | 6 |
| `04-regularization-mechanisms.md` | 4 |
| `05-autonomous-multi-agent-framework.md` | 5 |
| `06-experiment-design.md` | 7 |
| `07-results-and-alpha-decay.md` | 5 |
| `08-efficiency-ablation-base-llm.md` | 6 |
| `09-summary-and-review.md` | 5 |
| `10-glossary.md` | 5 |

Tổng cộng có 53 source block. Do nhiều lesson cùng cần một dependency, một source có thể xuất hiện trong nhiều file; đây là chủ ý để mỗi lesson có thể copy độc lập.

## Các prerequisite quan trọng xuyên suốt khóa

- Dữ liệu OHLCV, simple/log return, lag/rolling và phân biệt time series với cross-section.
- Feature, target, temporal split và look-ahead/data leakage.
- Correlation, rank correlation, IC, RankIC, ICIR; sau đó mới đọc AR, IR, MDD và backtest.
- Alpha factor, alpha decay, overfitting, p-hacking và factor crowding.
- Objective, regularization, complexity, originality và hypothesis alignment.
- Operator library, arity/type checking, structured output và AST như symbolic intermediate representation.
- Agent loop: state, action, observation, tool, planning, reflection, memory và feedback.
- Search/metaheuristic: exploration–exploitation, fitness, mutation/crossover và tối ưu đa mục tiêu.
- Ablation, hit ratio, dev success rate, token efficiency, variance, t-test và p-value.

## Validation

Đã kiểm tra sau khi chỉnh sửa:

- 10/10 file có `## Lý thuyết nền cần biết`, `## Liên hệ với bài học này` và source section không rỗng.
- 53/53 source references trỏ tới file thực sự tồn tại; không còn source path hỏng.
- Heading không bị nhảy cấp; code fence cân bằng ở cả 10 file.
- Delimiter display math `\[`/`\]` cân bằng.
- UTF-8 hợp lệ, không phát hiện marker tạm thời hoặc section rỗng.
- Git diff cho thấy tổng cộng 68.126 dòng được thêm vào 10 lesson sau khi nhúng source; tổng số dòng xóa là 0. Vì vậy nội dung lesson AlphaAgent gốc được bảo toàn và hiện nằm ngay sau title, đồng thời phần theory và source copy được bổ sung ở các section mới.

## Vị trí các file đã cập nhật

Tất cả 10 file trong thư mục `lessons` đã được cập nhật. Báo cáo này nằm tại thư mục gốc khóa học để người học có thể truy xuất dependency map và source inventory trước khi học.

## Phân bổ hình ảnh theo lesson

Các asset trong thư mục `assets` đã được đối chiếu với nội dung và gắn vào các lesson phù hợp:

| Asset | Lesson sử dụng | Mục đích |
|---|---|---|
| `figures/figure-01-alphaagent-workflow.png` | `05-autonomous-multi-agent-framework.md` | Minh họa vòng lặp Idea Agent → Factor Agent → Eval Agent → feedback |
| `figures/figure-02-ast-similarity.png` | `03-operator-library-and-ast.md`, `04-regularization-mechanisms.md` | Minh họa AST và structural similarity/originality |
| `tables/table-01-dataset-splits.png` | `06-experiment-design.md` | Minh họa train/validation/test split |
| `tables/table-02-performance-comparison.png` | `07-results-and-alpha-decay.md` | Minh họa bảng so sánh performance |
| `figures/figure-03-cumulative-excess-return.png` | `07-results-and-alpha-decay.md` | Minh họa cumulative excess return |
| `figures/figure-04-yearly-ic-rankic.png` | `07-results-and-alpha-decay.md` | Minh họa IC/RankIC và alpha decay theo năm |
| `figures/figure-05-ic-evolution.png` | `08-efficiency-ablation-base-llm.md` | Minh họa IC qua các evolution round |
| `figures/figure-06-ablation.png` | `08-efficiency-ablation-base-llm.md` | Minh họa ablation study |
| `figures/figure-07-base-llm-radar.png` | `08-efficiency-ablation-base-llm.md` | Minh họa so sánh base LLM |
| `figures/alpha-mining-and-alpha-decay-overview.png` | `01-alpha-mining-and-alpha-decay.md` | Minh họa pipeline từ market data đến candidate alpha và alpha decay |
| `figures/regularized-objective-balance.png` | `02-problem-formulation.md` | Minh họa cân bằng predictive performance với complexity, originality và alignment |
| `figures/continuous-exploration-loop.png` | `09-summary-and-review.md` | Minh họa vòng lặp market insight → hypothesis → factor → evaluation → feedback |
| `figures/alphaagent-concept-map.png` | `10-glossary.md` | Minh họa bản đồ bốn lớp khái niệm trong AlphaAgent |
| `figures/01-price-to-factor-pipeline.png` | `01-alpha-mining-and-alpha-decay.md` | Minh họa pipeline price/volume → returns → features → factor score → portfolio test |
| `figures/01-overfitting-vs-crowding.png` | `01-alpha-mining-and-alpha-decay.md` | So sánh hai nguyên nhân chính của alpha decay |
| `figures/02-objective-decomposition.png` | `02-problem-formulation.md` | Phân rã predictive score và regularization penalty trong objective |
| `figures/02-hypothesis-to-factor.png` | `02-problem-formulation.md` | Minh họa hypothesis → expression → factor → out-of-sample test |
| `figures/03-operator-library-flow.png` | `03-operator-library-and-ast.md` | Minh họa raw features → operator library → AST → executable factor |
| `figures/03-ast-tree-anatomy.png` | `03-operator-library-and-ast.md` | Minh họa binary operator, unary operator và feature leaf |
| `figures/04-three-regularization-gates.png` | `04-regularization-mechanisms.md` | Minh họa ba cổng complexity, originality và hypothesis alignment |
| `figures/04-hypothesis-alignment-loop.png` | `04-regularization-mechanisms.md` | Minh họa vòng hypothesis → description → expression → consistency score |
| `figures/05-agent-roles.png` | `05-autonomous-multi-agent-framework.md` | Minh họa vai trò Idea Agent, Factor Agent và Eval Agent |
| `figures/05-agent-contracts.png` | `05-autonomous-multi-agent-framework.md` | Minh họa observation, action, tool call, state memory và feedback |
| `figures/06-time-based-split.png` | `06-experiment-design.md` | Minh họa train/validation/test theo thứ tự thời gian và chống leakage |
| `figures/06-backtest-pipeline.png` | `06-experiment-design.md` | Minh họa market data → signal → portfolio returns → risk metrics |
| `figures/07-metrics-interpretation.png` | `07-results-and-alpha-decay.md` | Minh họa quan hệ giữa predictive signal, performance và risk |
| `figures/07-alpha-decay-timeline.png` | `07-results-and-alpha-decay.md` | Minh họa signal strength suy giảm từ train đến live |
| `figures/08-efficiency-funnel.png` | `08-efficiency-ablation-base-llm.md` | Minh họa token budget và funnel từ candidate đến accepted alpha |
| `figures/08-framework-vs-base-llm.png` | `08-efficiency-ablation-base-llm.md` | So sánh tác động của base LLM quality và framework design |
| `figures/09-scientific-discovery-workflow.png` | `09-summary-and-review.md` | Minh họa observation → hypothesis → evidence → revision |
| `figures/09-exploration-exploitation-balance.png` | `09-summary-and-review.md` | Minh họa cân bằng exploration, exploitation và adaptive search |
| `figures/10-glossary-pipeline.png` | `10-glossary.md` | Minh họa pipeline của các thuật ngữ từ OHLCV đến agent feedback |
| `figures/10-metric-glossary-map.png` | `10-glossary.md` | Phân nhóm thuật ngữ theo data, expression, evaluation và agent process |

Tổng cộng 33 asset được sử dụng với 34 image reference; `figure-02-ast-similarity.png` được dùng ở cả Bài 03 và Bài 04 vì phục vụ hai góc nhìn liên quan. Hai mươi asset bổ sung được tạo bằng built-in `image_gen`, sau đó kiểm tra trực quan và sao chép vào `assets/figures`.
