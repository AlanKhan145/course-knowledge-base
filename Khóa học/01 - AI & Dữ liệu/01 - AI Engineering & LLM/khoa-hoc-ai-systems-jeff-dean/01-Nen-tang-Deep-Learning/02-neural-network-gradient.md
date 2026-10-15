# Bài 02 — Neural network, gradient descent và backpropagation

> **Module 01: Nền tảng Deep Learning**  
> **Phạm vi bài giảng:** 05:05–06:26  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **neural network, gradient descent và backpropagation** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Mô tả một neuron và vai trò của trọng số.
2. Giải thích được loss, gradient descent và backpropagation.
3. Tính thử một bước cập nhật tham số đơn giản.

## 3. Kiến thức trọng tâm

### 3.1. Neuron nhân tạo là gì?
Một neuron nhận vector đầu vào $x$, kết hợp với trọng số $w$ và bias $b$:

$$z=\sum_{i=1}^{n}w_ix_i+b,\qquad a=f(z).$$

Hàm kích hoạt $f$ cho phép mạng biểu diễn quan hệ phi tuyến. Ghép nhiều neuron thành các lớp giúp mô hình học đặc trưng ở những mức trừu tượng khác nhau. Phép so sánh neuron sinh học chỉ là nguồn cảm hứng; neuron nhân tạo là đối tượng toán học đơn giản hơn nhiều.

### 3.2. Loss là tín hiệu học
Sau khi dự đoán $\hat y$, ta so sánh với nhãn hoặc mục tiêu $y$ thông qua hàm mất mát $L(\hat y,y)$. Huấn luyện tìm tham số $\theta$ làm giảm tổng mất mát trên dữ liệu. Gradient cho biết mất mát thay đổi như thế nào khi tham số biến đổi.

Quy tắc gradient descent cơ bản:

$$\theta_{t+1}=\theta_t-\eta\nabla_\theta L(\theta_t).$$

Trong đó $\eta$ là learning rate. Nếu quá lớn, cập nhật có thể dao động hoặc phân kỳ; nếu quá nhỏ, tiến trình học có thể chậm.

### 3.3. Backpropagation tối ưu mạng nhiều lớp
Đối với mạng có nhiều lớp, ta không đo riêng từng trọng số bằng cách thử tất cả giá trị. **Backpropagation** dùng quy tắc dây chuyền đạo hàm để tính gradient hiệu quả từ đầu ra trở lại các lớp trước.

```mermaid
flowchart LR
 X[Đầu vào] --> F[Forward pass]
 F --> L[Loss]
 L --> B[Backpropagation]
 B --> U[Cập nhật trọng số]
 U --> F
```

Chính khả năng cập nhật tự động hàng triệu hoặc hàng tỷ tham số khiến mạng nơ-ron trở thành một nền tảng có thể học từ dữ liệu lớn.

### 3.4. Ví dụ cập nhật một tham số
Giả sử $L(w)=(w-3)^2$, $w=1$ và $\eta=0.1$. Khi đó $dL/dw=2(w-3)=-4$, nên:

$$w_{mới}=1-0.1(-4)=1.4.$$

Mất mát giảm từ $4$ xuống $2.56$. Đây là một bước tối ưu đơn biến, đủ để minh họa nguyên lý cập nhật.

## 4. Bài tập thực hành

Viết Python thuần để thực hiện 10 bước gradient descent cho $L(w)=(w-3)^2$:
```python
w, lr = 1.0, 0.1
for step in range(10):
    loss = (w - 3) ** 2
    grad = 2 * (w - 3)
    print(step, round(w, 4), round(loss, 4))
    w -= lr * grad
```
Thử đổi `lr` thành `0.01` và `1.1`, ghi nhận độ ổn định của loss.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Backpropagation chủ yếu thực hiện công việc gì?**

A. Chia dữ liệu thành train/test  
B. Tạo nhãn thủ công  
C. Tăng xung nhịp GPU  
D. Tính gradient qua nhiều lớp bằng quy tắc dây chuyền  

**Đáp án: D.** Backpropagation giúp tính đạo hàm của loss với các tham số mạng.

**Câu 2. Khi learning rate quá lớn, điều gì có thể xảy ra?**

A. Loss dao động hoặc phân kỳ  
B. Loss chắc chắn về 0 ngay  
C. Dữ liệu được gán nhãn chính xác hơn  
D. Mạng tự tăng số lớp  

**Đáp án: A.** Bước cập nhật quá lớn có thể vượt qua vùng tối ưu.

**Câu 3. Trong công thức cập nhật gradient descent, dấu trừ có vai trò gì?**

A. Làm số tham số giảm đi  
B. Di chuyển ngược hướng gradient để giảm loss cục bộ  
C. Thay thế hàm kích hoạt  
D. Chuẩn hóa dữ liệu  

**Đáp án: B.** Gradient chỉ hướng tăng nhanh nhất; lấy dấu trừ để giảm.

**Câu 4. Vì sao cần hàm kích hoạt phi tuyến?**

A. Để mô hình không cần trọng số  
B. Để tự tạo nhãn dữ liệu  
C. Để nhiều lớp có thể biểu diễn quan hệ phi tuyến  
D. Để bỏ toàn bộ loss  

**Đáp án: C.** Nếu chỉ ghép các phép biến đổi tuyến tính thì vẫn chỉ là phép tuyến tính.

**Câu 5. Với L(w)=(w−3)² và w=1, gradient bằng bao nhiêu?**

A. 4  
B. 2  
C. −2  
D. −4  

**Đáp án: D.** Đạo hàm bằng 2(w−3), thay w=1 được −4.

## 6. Tổng kết

- Forward pass tạo dự đoán; loss đo sai lệch; backprop truyền gradient.
- Learning rate quyết định kích thước bước cập nhật.
