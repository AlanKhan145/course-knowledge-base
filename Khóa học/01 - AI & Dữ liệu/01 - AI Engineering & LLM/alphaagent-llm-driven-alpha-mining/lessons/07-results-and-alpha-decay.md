# Bài 07 - Kết quả tổng thể và Alpha Decay Analysis

## 1. Mục tiêu

Đọc và diễn giải kết quả chính trên CSI 500 và S&P 500.

## 2. Overall performance

![Table 2 - Performance comparison](../assets/tables/table-02-performance-comparison.png)

Các kết quả AlphaAgent được paper báo cáo:

| Market | IC | ICIR | AR | IR | MDD |
|---|---:|---:|---:|---:|---:|
| CSI 500 | 0.0212 | 0.1938 | 11.00% | 1.488 | -9.36% |
| S&P 500 | 0.0056 | 0.0552 | 8.74% | 1.0545 | -9.10% |

Trong Table 2, AlphaAgent dẫn đầu các metric chính trong hai market theo thiết lập so sánh của paper.

## 3. Cumulative excess return

![Figure 3 - Cumulative excess returns](../assets/figures/figure-03-cumulative-excess-return.png)

**Figure 3 (paper, trang 7)** so sánh cumulative excess return trên CSI 500 và S&P 500. Paper nhận xét:

- time-series models có dấu hiệu decay rõ hơn, đặc biệt trên S&P 500;
- LightGBM + Alpha158 dao động quanh zero trên S&P 500;
- DeepSeek-R1 suy giảm sau 2023 trong thiết lập được báo cáo;
- AlphaAgent duy trì đường cumulative excess return bền hơn trên cả hai thị trường.

Paper mô tả khoảng **45% cumulative excess return trên CSI 500** và **trên 37% trên S&P 500** trong testing period.

## 4. Yearly alpha decay

![Figure 4 - Yearly IC and RankIC](../assets/figures/figure-04-yearly-ic-rankic.png)

Figure 4 so sánh GP, RSI, Alpha158 và 15 alpha do AlphaAgent khai phá trên CSI 500 theo năm.

Paper báo cáo:

- GP, RSI, Alpha158 giảm mạnh về IC/RankIC theo thời gian;
- AlphaAgent giữ IC quanh 0.02 và RankIC quanh 0.025 tương đối ổn định.

Thông điệp chính: AlphaAgent không chỉ tìm factor “tốt ở một snapshot”, mà paper muốn chứng minh factor có **persistence** tốt hơn khi thị trường thay đổi.

## 5. Cách đọc kết quả một cách đúng

Kết quả trong paper là kết quả của **một protocol cụ thể**: dataset, fee, LightGBM pipeline, baseline, prompt/evolution round và alpha zoo đều ảnh hưởng đến con số cuối cùng. Do đó nên diễn giải kết quả như bằng chứng thực nghiệm trong setup của paper, không phải cam kết lợi nhuận ngoài thị trường.

## 6. Bài tập tự luyện

1. Nếu AR cao nhưng IC giảm liên tục theo năm, ta có thể nói factor chống decay tốt không?
2. MDD thấp bổ sung thông tin gì mà AR không thể hiện?
3. Tại sao S&P 500 được paper mô tả là môi trường khó hơn cho alpha persistence?

## 7. Nguồn trong paper

- Section 4.2 - Overall Performance, trang 6-7.
- Table 2 và Figure 3, trang 7.
- Section 4.3 và Figure 4, trang 7-8.
