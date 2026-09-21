# Lesson 01 — Từ ANN đến Diverse Similarity Search

## Mục tiêu

Sau bài này, bạn phải trả lời được ba câu hỏi:

1. Vì sao nearest-neighbor search thông thường dễ trả về các kết quả “giống nhau quá mức”?  
2. Vì sao cách phổ biến `retrieve r >> k rồi rerank` có thể trở thành bottleneck?  
3. Paper thay đổi điều gì trong graph ANN để diversity trở thành một phần của chính quá trình search?

## 1. Nearest neighbor search đang tối ưu điều gì?

Ta có tập dữ liệu `P` gồm `n` vector trong không gian metric `(X,D)`. Với query `q`, nearest-neighbor search tìm điểm `p` làm nhỏ nhất:

\[
D(q,p).
\]

Trong bài toán `k`-NN, ta lấy `k` điểm gần nhất. Với ANN, ta chấp nhận nghiệm xấp xỉ để đổi lấy tốc độ trên dữ liệu lớn hoặc chiều cao.

Nếu chỉ tối ưu khoảng cách `D`, hệ thống không hề biết rằng nhiều kết quả có thể đại diện cho cùng một seller, cùng document, cùng brand, hoặc cùng một intent.

## 2. Redundancy trong retrieval

Ví dụ RAG: một tài liệu dài được chia thành 30 chunk. Nếu query rất khớp với tài liệu này, top-10 nearest chunks có thể đều đến từ **cùng một tài liệu**. Relevance từng chunk cao, nhưng lượng thông tin mới cung cấp cho LLM thấp.

Ví dụ shopping/ads: một seller sở hữu rất nhiều vector sản phẩm rất gần query. Nếu top-100 bị seller đó chiếm phần lớn, kết quả thiếu đa dạng seller.

Paper mô hình hóa metadata rời rạc bằng **color**:

- seller id → color;
- brand → color;
- document id → color;
- intent class → color.

Một yêu cầu cực đoan là `k'=1`: mọi kết quả phải có color khác nhau. Yêu cầu mềm hơn cho phép mỗi color xuất hiện tối đa `k'` lần.

## 3. Pipeline hai giai đoạn truyền thống

Cách dễ triển khai:

```text
query
  ↓
ANN search lấy r ứng viên gần nhất, với r >> k
  ↓
post-processing / reranking có ràng buộc diversity
  ↓
trả k kết quả
```

Vấn đề nằm ở `r`.

Nếu các điểm gần query bị thống trị bởi một vài color, ta phải lấy rất nhiều candidate trước khi đủ `k` kết quả hợp lệ. Trong trường hợp xấu, `r` có thể lớn tới bậc `n`.

Do đó mục tiêu của paper là:

> Có thể đi trực tiếp đến `k` kết quả đa dạng bằng graph search, thay vì trả giá cho một candidate pool rất lớn rồi mới lọc không?

## 4. Ý tưởng hệ thống của paper

Paper sửa **hai nơi**:

1. **Index construction:** khi prune edge, không chỉ xét geometry mà còn bảo đảm graph vẫn có đủ đường đi đến các color/diversity khác nhau.
2. **Search:** danh sách candidate/solution luôn tôn trọng diversity constraint thay vì tìm ANN thuần relevance rồi lọc cuối.

Đây là lý do phương pháp có thể giảm latency: diversity được “đan” vào cấu trúc graph và quá trình traversal.

## 5. Vì sao phân bố color lệch làm bài toán khó?

![Seller distribution](../assets/images/figure_01_seller_distribution.png)

Trong real-world seller dataset của paper, top 7 seller chiếm hơn 90% tổng số vector. Nếu tìm theo nearest distance thuần túy, candidate set gần query rất dễ bị vài seller áp đảo.

![Amazon brand distribution](../assets/images/figure_02_brand_distribution.png)

Amazon Automotive cân bằng hơn, nhưng vẫn skew: một phần nhỏ brand chiếm phần lớn vector.

### Ý nghĩa

Diversity constraint không chỉ là “trang trí UX”. Nó thay đổi bài toán search vì cấu trúc phân bố dữ liệu làm cho việc tìm đủ color khác nhau có thể tốn nhiều exploration hơn đáng kể.

## 6. Ba cách nhìn về “diversity”

### Cách 1 — Màu rời rạc

`color(p)` là seller/brand/document-id. Constraint dễ kiểm tra.

### Cách 2 — Metric diversity `ρ`

Hai điểm có thể không cùng metadata, nhưng vẫn quá giống về nội dung. Khi đó dùng metric khác `ρ` để đo diversity.

### Cách 3 — Relaxed diversity

Không bắt buộc mọi phần tử phải hoàn toàn khác nhau. Với `k' > 1`, ta cho phép một cụm tương tự nhỏ nhưng giới hạn kích thước của nó.

## 7. Kết quả chính ở mức ý tưởng

Paper xây dựng các thuật toán graph-based có bảo đảm lý thuyết cho diverse ANN trên dữ liệu có bounded doubling dimension, đồng thời xây heuristic tương thích phong cách DiskANN để thực nghiệm ở quy mô lớn.

Ở real-world seller setting, paper báo cáo để đạt khoảng 95% recall@100:

- baseline `standard build + post-processing`: latency trên 8 ms;
- `standard build + diverse search`: khoảng 4.5 ms;
- `diverse build + diverse search`: khoảng 1.5 ms.

Điểm cần nhớ không phải chỉ là “5×”, mà là **index và search cần cùng biết về diversity**.

## Câu hỏi tự kiểm tra

1. Vì sao tăng `r` trong pipeline reranking vừa có lợi cho recall vừa làm latency xấu đi?
2. Trong RAG, bạn sẽ chọn color là `chunk id` hay `document id`? Vì sao?
3. Nếu dữ liệu có color phân bố gần uniform, bạn dự đoán lợi thế của diverse build sẽ thay đổi thế nào?
4. Diversity constraint khác filter constraint kiểu `brand=NIKE` ở điểm nào?
