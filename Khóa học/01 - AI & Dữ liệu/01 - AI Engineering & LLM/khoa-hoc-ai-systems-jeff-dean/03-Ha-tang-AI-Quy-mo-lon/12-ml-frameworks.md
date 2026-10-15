# Bài 12 — TensorFlow, PyTorch và JAX trong hệ sinh thái AI

> **Module 03: Hạ tầng AI quy mô lớn**  
> **Phạm vi bài giảng:** 21:19–22:21  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **tensorflow, pytorch và jax trong hệ sinh thái ai** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Phân biệt framework ML với kiến trúc mô hình.
2. Hiểu vai trò phép toán tensor, autodiff và hệ sinh thái phần mềm.
3. Lựa chọn framework dựa vào mục đích nghiên cứu hoặc triển khai.

## 3. Kiến thức trọng tâm

### 3.1. Phần mềm hạ tầng quyết định khả năng cộng tác
Các thư viện mở cho phép nhiều nhóm dùng chung trừu tượng tensor, hàm tối ưu, dữ liệu và tính đạo hàm. Nhờ đó nhà nghiên cứu không cần viết lại nhân ma trận, backpropagation và công cụ phân phối cho mọi thử nghiệm.

### 3.2. Ba hệ sinh thái nổi bật
| Framework | Điểm cần nắm |
|---|---|
| **TensorFlow** | Hệ sinh thái tính toán tensor, autodiff và nhiều công cụ triển khai |
| **PyTorch** | Cách viết Python trực quan, thường dùng trong nghiên cứu và phát triển mô hình |
| **JAX** | Tư duy hàm và biến đổi chương trình cho tự động vi phân, vector hóa, biên dịch |

Trong hệ thống Gemini được giới thiệu, **JAX** là một phần của stack huấn luyện. Điều này mô tả lựa chọn kỹ thuật của một dự án, không có nghĩa mọi dự án nên chuyển sang JAX.

### 3.3. Chọn framework qua vòng đời mô hình
Một pipeline thường cần xử lý dữ liệu, mô tả forward pass, tự tính gradient, huấn luyện, phân tán, lưu checkpoint và triển khai suy luận. Các framework giải quyết những lớp công việc giống nhau với trade-off khác nhau về API, tích hợp phần cứng và đội ngũ.

**Điểm quan trọng:** Transformer là kiến trúc; PyTorch, TensorFlow hoặc JAX là công cụ có thể *triển khai* kiến trúc đó.

### 3.4. Một mô hình nhỏ bằng PyTorch
```python
import torch

x = torch.tensor([1.0, 2.0, 3.0])
w = torch.tensor(0.5, requires_grad=True)
y = (w * x).sum()
y.backward()
print(w.grad)  # 6.0
```
Ở đây autodiff tính $d(0.5\times(1+2+3))/dw=6$ mà không cần viết công thức đạo hàm bằng tay.

## 4. Bài tập thực hành

Thực hiện đoạn code ví dụ nếu đã cài PyTorch. Thay phép tính thành `loss=((w*x)-torch.tensor([2.,4.,6.])).pow(2).mean()`, tính gradient, giải thích một bước cập nhật $w$. Viết các tiêu chí chọn framework cho một project cá nhân.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Điều nào là một framework ML thay vì kiến trúc mạng?**

A. Transformer  
B. JAX  
C. LSTM  
D. Mixture of Experts  

**Đáp án: B.** JAX cung cấp API và phép biến đổi chương trình cho tính toán ML.

**Câu 2. Autodiff hỗ trợ tác vụ nào?**

A. Gán nhãn khuôn mặt thủ công  
B. Tự tăng số lõi CPU vật lý  
C. Tính đạo hàm của phép tính tham số hóa  
D. Đăng ký bản quyền dữ liệu  

**Đáp án: C.** Tự động vi phân giúp huấn luyện bằng gradient.

**Câu 3. Trong ví dụ w*(1+2+3), gradient theo w là?**

A. 0.5  
B. 3  
C. 1  
D. 6  

**Đáp án: D.** Đạo hàm theo w của w nhân tổng x bằng tổng x, tức 6.

**Câu 4. Vì sao framework mở quan trọng với cộng đồng nghiên cứu?**

A. Cho phép tái sử dụng trừu tượng và chia sẻ công cụ  
B. Bảo đảm mọi kết quả đều đúng  
C. Loại bỏ nhu cầu có dữ liệu  
D. Khiến phần cứng không còn quan trọng  

**Đáp án: A.** Hạ tầng phần mềm chung giúp xây và thử ý tưởng nhanh hơn.

**Câu 5. Điều nào không hợp lý khi chọn framework?**

A. Xem khả năng chạy trên phần cứng sẵn có  
B. Chọn chỉ vì một dự án lớn khác dùng nó  
C. Xem API nhóm phát triển quen dùng  
D. Xem khả năng triển khai và hỗ trợ  

**Đáp án: B.** Lựa chọn kỹ thuật phải phù hợp yêu cầu của project cụ thể.

## 6. Tổng kết

- Framework hỗ trợ tensor, autodiff và hệ công cụ; không phải là chính thuật toán AI.
- Lựa chọn công cụ cần dựa mục tiêu, phần cứng và khả năng bảo trì.
