# KHÓA HỌC: KỸ THUẬT XÂY DỰNG HỆ THỐNG AI HIỆN ĐẠI

**Nội dung:** Neural Networks → Distributed Training → Transformer/MoE → TPU/Pathways → Test-time Compute → Distillation/RL → Gemini → Multi-agent, Retrieval và tương lai AI.

> Tài liệu tiếng Việt biên soạn từ nội dung bài nói của Jeff Dean và phần hỏi đáp đi kèm. Các thí nghiệm, bài tập, sơ đồ và ví dụ bổ sung được thiết kế để hỗ trợ học tập; chúng không phải mã nguồn hay kiến trúc nội bộ của Google. Các phát biểu theo thời điểm và benchmark trong bài được giữ theo ngữ cảnh lịch sử của bài nói, không mặc định là thông số hiện hành.

## 1. Mục tiêu đầu ra

Sau khóa học, người học có thể giải thích kiến trúc AI từ mô hình đến hạ tầng; phân tích trade-off chất lượng, tính toán và độ trễ; mô tả các kỹ thuật tăng hiệu quả LLM; thiết kế pipeline multimodal/agent có kiểm chứng; và đề xuất thí nghiệm nghiên cứu nhỏ đáng tin.

## 2. Đối tượng và chuẩn bị

- Phù hợp với người học AI Engineering, khoa học máy tính, ML và hệ thống phân tán.
- Nên biết Python căn bản, vector/ma trận, xác suất và khái niệm loss, gradient. Các bài nền tảng vẫn giải thích lại những khái niệm trọng tâm.
- Không bắt buộc có GPU. Phần lớn bài thực hành là phân tích hệ thống, thử Python nhỏ hoặc thiết kế đánh giá.

## 3. Lộ trình học

### Module 01 — Nền tảng Deep Learning

- [ ] [Bài 01: Vì sao AI tiến bộ nhanh: quy mô và thuật toán](01-Nen-tang-Deep-Learning/01-vi-sao-ai-tien-bo.md) — 03:35–05:05
- [ ] [Bài 02: Neural network, gradient descent và backpropagation](01-Nen-tang-Deep-Learning/02-neural-network-gradient.md) — 05:05–06:26
- [ ] [Bài 03: Huấn luyện phân tán: data parallel và model parallel](01-Nen-tang-Deep-Learning/03-distributed-training.md) — 06:26–10:13
- [ ] [Bài 04: Học biểu diễn không giám sát qua hình ảnh](01-Nen-tang-Deep-Learning/04-unsupervised-vision.md) — 10:13–12:20

### Module 02 — Biểu diễn và kiến trúc mô hình

- [ ] [Bài 05: Word embeddings và không gian ngữ nghĩa](02-Bieu-dien-va-Kien-truc/05-word-embeddings.md) — 12:27–13:43
- [ ] [Bài 06: Seq2Seq và LSTM trong dịch máy](02-Bieu-dien-va-Kien-truc/06-seq2seq-lstm.md) — 13:43–15:03
- [ ] [Bài 07: Transformer: attention thay đổi kiến trúc chuỗi](02-Bieu-dien-va-Kien-truc/07-transformer-attention.md) — 22:21–24:45
- [ ] [Bài 08: Tự giám sát văn bản: next-token và masked-token](02-Bieu-dien-va-Kien-truc/08-self-supervised-llm.md) — 24:45–27:06
- [ ] [Bài 09: Vision Transformer và sự chuyển dịch từ CNN](02-Bieu-dien-va-Kien-truc/09-vision-transformer.md) — 27:06–28:13
- [ ] [Bài 10: Mixture of Experts và mô hình thưa](02-Bieu-dien-va-Kien-truc/10-mixture-of-experts.md) — 28:13–30:16

### Module 03 — Hạ tầng AI quy mô lớn

- [ ] [Bài 11: TPU: tăng tốc suy luận và huấn luyện AI](03-Ha-tang-AI-Quy-mo-lon/11-tpu-hardware.md) — 15:03–21:07
- [ ] [Bài 12: TensorFlow, PyTorch và JAX trong hệ sinh thái AI](03-Ha-tang-AI-Quy-mo-lon/12-ml-frameworks.md) — 21:19–22:21
- [ ] [Bài 13: Pathways và lớp trừu tượng máy tính phân tán](03-Ha-tang-AI-Quy-mo-lon/13-pathways-distributed-runtime.md) — 30:16–32:03
- [ ] [Bài 14: Silent Data Corruption và phục hồi huấn luyện](03-Ha-tang-AI-Quy-mo-lon/14-silent-data-corruption.md) — 32:03–36:16

### Module 04 — Tối ưu huấn luyện và suy luận

- [ ] [Bài 15: Test-time compute và suy luận nhiều bước](04-Toi-uu-Huan-luyen-va-Suy-luan/15-test-time-reasoning.md) — 36:16–38:15
- [ ] [Bài 16: Knowledge Distillation: từ teacher sang student](04-Toi-uu-Huan-luyen-va-Suy-luan/16-knowledge-distillation.md) — 38:15–40:48
- [ ] [Bài 17: Reinforcement Learning từ phản hồi và phần thưởng kiểm chứng](04-Toi-uu-Huan-luyen-va-Suy-luan/17-reinforcement-learning-feedback.md) — 40:48–43:55
- [ ] [Bài 18: Speculative Decoding: tăng tốc sinh token](04-Toi-uu-Huan-luyen-va-Suy-luan/18-speculative-decoding.md) — 43:55–47:12

### Module 05 — Gemini và ứng dụng đa phương thức

- [ ] [Bài 19: Gemini: mô hình đa phương thức thống nhất](05-Gemini-va-Ung-dung-Da-phuong-thuc/19-gemini-native-multimodal.md) — 47:12–50:10
- [ ] [Bài 20: Long context, model tiers và đánh đổi chất lượng–giá](05-Gemini-va-Ung-dung-Da-phuong-thuc/20-long-context-pro-flash.md) — 50:10–52:20
- [ ] [Bài 21: Đánh giá AI: toán học, benchmark và xếp hạng cặp](05-Gemini-va-Ung-dung-Da-phuong-thuc/21-benchmark-evaluation.md) — 52:20–55:56
- [ ] [Bài 22: Generative UI, sáng tạo ảnh và ứng dụng đa phương thức](05-Gemini-va-Ung-dung-Da-phuong-thuc/22-generative-ui-multimodal-tools.md) — 55:56–61:28

### Module 06 — Hệ thống agent và tương lai AI

- [ ] [Bài 23: Tổ chức nghiên cứu và phát triển mô hình quy mô lớn](06-He-thong-Agent-va-Tuong-lai-AI/23-research-organization.md) — 61:28–65:30
- [ ] [Bài 24: Multi-agent, retrieval và tương lai tối ưu suy luận](06-He-thong-Agent-va-Tuong-lai-AI/24-agents-retrieval-inference.md) — 65:30–68:46
- [ ] [Bài 25: World models, tác động xã hội và an toàn AI](06-He-thong-Agent-va-Tuong-lai-AI/25-world-models-impact-safety.md) — 68:46–76:04
- [ ] [Bài 26: Nghiên cứu AI với tài nguyên nhỏ và tư duy khoa học](06-He-thong-Agent-va-Tuong-lai-AI/26-research-small-scale.md) — 76:04–78:32

## 4. Phương pháp học đề xuất

1. Đọc phần mục tiêu trước mỗi bài và thử tự trả lời xem mình đã biết gì.
2. Học kiến thức cốt lõi; xem sơ đồ và tự diễn giải bằng lời.
3. Hoàn thành bài thực hành hoặc lập thiết kế có thể kiểm chứng.
4. Làm năm câu trắc nghiệm rồi đối chiếu phần giải thích.
5. Khi hoàn thành một module, tự ôn và cập nhật checkbox ở mục lộ trình.

## 5. Đồ án và tài liệu bổ trợ

- [Đồ án cuối khóa và tiêu chí chấm](DO-AN-CUOI-KHOA.md)
- [Bảng thuật ngữ Anh–Việt](THUAT-NGU.md)
- [Bản đồ chương trình học có thời điểm](LO-TRINH-THEO-THOI-GIAN.md)

## 6. Giới hạn sử dụng

Bộ học liệu không thay thế paper, tài liệu kỹ thuật chính thức, benchmark cập nhật hay tài liệu vận hành phần cứng. Các tỷ lệ tăng tốc, điểm số và ngày ra mắt được kể lại trong bối cảnh trình bày; không mặc định chúng đúng cho mô hình, thiết bị hay dịch vụ ở thời điểm hiện tại.
