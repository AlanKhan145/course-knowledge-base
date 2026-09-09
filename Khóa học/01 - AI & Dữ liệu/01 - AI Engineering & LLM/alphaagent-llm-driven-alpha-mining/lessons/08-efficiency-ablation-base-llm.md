# Bài 08 - Mining Efficiency, Ablation và ảnh hưởng của Base LLM

## 1. Alpha mining efficiency

![Figure 5 - IC evolution](../assets/figures/figure-05-ic-evolution.png)

Figure 5 theo dõi IC qua năm vòng evolution trên CSI 500.

Paper nhận xét:

- RD-Agent có variance nhỏ hơn và candidate đồng nhất hơn;
- AlphaAgent có average IC cao hơn RD-Agent và AlphaForge trong các vòng được minh họa;
- variance của AlphaAgent tăng theo round, được tác giả diễn giải như dấu hiệu exploration rộng/diverse hơn nhờ originality penalty.

## 2. Ablation study

![Figure 6 - Ablation](../assets/figures/figure-06-ablation.png)

Ablation được thực hiện trên 100 vòng evolution, chia giữa CSI 500 và S&P 500. Ba metric:

- **Hit ratio:** tỉ lệ alpha đạt return “exceptional” theo threshold paper định nghĩa.
- **Dev success rate:** tỉ lệ factor thực thi thành công, không lỗi code/numerical.
- **Token efficiency:** inverse ratio của token trung bình trên mỗi candidate, chuẩn hóa để giá trị cao hơn tốt hơn.

Kết quả chính:

- Hit ratio: **0.29** với AlphaAgent vs **0.16** khi bỏ factor modeling constraints → paper gọi là **81% improvement**.
- Dev success rate: **0.83** vs **0.75** khi bỏ symbolic assembly.
- Token efficiency: AlphaAgent **1.00** vs **0.81** khi bỏ symbolic assembly; paper diễn giải là cải thiện hiệu quả sinh candidate trên mỗi token.

## 3. Base LLM comparison

![Figure 7 - Base LLM comparison](../assets/figures/figure-07-base-llm-radar.png)

Paper thử AlphaAgent với:

- GPT-3.5-turbo;
- Qwen-Plus;
- DeepSeek-R1.

Trên S&P 500, DeepSeek-R1 đạt kết quả tốt nhất trong ba base LLM theo radar figure, với:

- ICIR: **0.0615**;
- annualized return: **9.19%**;
- MDD: **-6.50%**.

Paper cũng báo cáo Student’s t-test khi so AlphaAgent với RD-Agent trên từng base LLM; p-value cho IC difference đều dưới 0.05:

- GPT-3.5-turbo: 0.0311;
- Qwen-Plus: 0.0109;
- DeepSeek-R1: 0.0382.

## 4. Hai tầng tác động

Kết quả gợi ra hai tầng độc lập trong setup của paper:

1. **Framework design** (regularization + symbolic assembly + feedback loop) cải thiện so với counterpart.
2. **Base LLM strength** vẫn ảnh hưởng chất lượng factor; reasoning model mạnh hơn có thể nâng kết quả thêm.

## 5. Bài tập tự luyện

1. Ablation nào kiểm tra tác động của factor constraints?
2. Ablation nào kiểm tra symbolic assembly?
3. Tại sao tăng variance của candidate chưa chắc là điều xấu trong exploration?
4. p-value < 0.05 trong thí nghiệm này đang hỗ trợ nhận định nào của tác giả?

## 6. Nguồn trong paper

- Section 4.4, Figure 5, trang 8.
- Section 4.5, Figure 6, trang 8.
- Figure 7 và phần so sánh base LLM, trang 9.
