# Bài 02 — Hình thái giant danio và kinematics carangiform

**Loại:** lesson  
**Nguồn chính:** PDF trang 3, 9–10  
**Hình nên xem:** Figure 4–5

> **Phạm vi nguồn:** Nội dung khoa học trong bài học được biên soạn từ *Near-body flow dynamics in swimming fish* (Wolfgang et al., 1999). Phần diễn giải được viết lại theo dạng giáo trình; không thay thế bài báo gốc khi cần đối chiếu số liệu hoặc phương pháp chi tiết.

## Hình minh họa chính

![Figure 4](../assets/figures/figure_04.png)

![Figure 5](../assets/figures/figure_05.png)



## 1. Mục tiêu

- mô tả các vây chính được paper theo dõi;
- giải thích đặc điểm của kiểu bơi carangiform;
- đọc được mô hình sóng chạy dọc backbone;
- dùng số Strouhal để liên hệ tần số, biên độ đuôi và tốc độ bơi.

## 2. Hình thái chức năng của giant danio

Trong thí nghiệm, cá có chiều dài cơ thể khoảng **5–10 cm**. Maximum span của caudal fin khoảng **23% body length**. Các cấu trúc nổi bật gồm:

- **Caudal fin:** thành phần tạo wake mạnh nhất trong mô hình.
- **Dorsal fin:** mềm và có thể dao động cùng thân.
- **Anal fin:** cứng hơn, được mô tả như một keel.
- **Ventral fins:** flare khi maneuvering nhưng ít tham gia bơi thẳng.
- **Pectoral fins:** được dùng khi maneuvering, thường áp sát thân khi bơi thẳng.
- **Caudal peduncle:** vùng thân thu nhỏ trước đuôi; hình thái hẹp giúp dòng tiến vào đuôi tương đối trơn.

## 3. Carangiform motion

Carangiform swimming có một **traveling wave** chạy dọc backbone, nhưng biên độ không đồng đều. Phần trước thân chuyển động lateral nhỏ hơn; biên độ tăng dần về posterior body và tail.

Paper biểu diễn chuyển động ngang bằng:

\[
y(x,t)=a(x)\sin(k_w x-\omega t)
\]

với:

\[
k_w=\frac{2\pi}{\lambda}, \qquad c_p=\frac{\omega}{k_w}
\]

Trong đó:

- \(x\): vị trí dọc theo chiều dài, tính từ mũi;
- \(a(x)\): envelope biên độ;
- \(\lambda\): wavelength của backbone perturbation;
- \(\omega\): circular frequency;
- \(c_p\): phase speed của sóng backbone.

Envelope được fit bằng hàm bậc hai:

\[
a(x)=c_1x+c_2x^2
\]

Mục đích của \(c_1,c_2\) là tạo đúng dạng tăng biên độ và đạt tail double amplitude mong muốn.

## 4. Số Strouhal

Paper dùng:

\[
St=\frac{fA}{U}
\]

trong đó:

- \(f\): tail-beat frequency;
- \(A\): total mean lateral excursion/double amplitude của tail;
- \(U\): swimming speed.

Trong dữ liệu thí nghiệm, phần lớn trường hợp quan sát nằm trong hoặc gần vùng được lý thuyết trước đó dự đoán là có lợi cho thrust-jet stability, khoảng **0.25 < St < 0.4**. Ca cụ thể dùng để so sánh thí nghiệm–mô phỏng có **St = 0.45**, nên không nên nhầm một case cụ thể với toàn bộ distribution.

## 5. Ca bơi thẳng dùng để mô phỏng

Paper sử dụng một sequence rõ để hiệu chỉnh mô hình:

| Đại lượng | Giá trị |
|---|---:|
| Tốc độ | \(U=1.1L\,s^{-1}\) |
| Tail-beat frequency | \(f=3.3\,Hz\) |
| Tail-tip double amplitude | \(A=0.16L\) |
| Backbone wavelength | \(\lambda=1.1L\) |
| Strouhal number | \(St=0.45\) |
| Pitch–heave phase | \(\phi=95^\circ\) |
| Tail angle of attack | \(\alpha=6^\circ\) |

## 6. Vì sao peduncle quan trọng?

Peduncle hẹp không chỉ là một “khớp nối” hình học. Theo diễn giải của paper, nó tạo điều kiện cho dòng từ thân đi vào articulated tail tương đối trơn, trong khi đuôi có thể chịu tải lớn. Vorticity phát triển dọc posterior body có thể được shed trước hoặc gần peduncle rồi gặp caudal fin trong một pha đã được điều phối bởi body wave.

## 7. Liên hệ kinematics → flow

```mermaid
flowchart LR
    A[Traveling backbone wave] --> B[Biên độ tăng về phía sau]
    B --> C[Lateral velocity lớn ở posterior body]
    C --> D[Circulation / bound vorticity mạnh lên]
    D --> E[Peduncle + caudal fin]
    E --> F[Wake vortex + thrust jet]
```

## 8. Câu hỏi tự luyện

1. Tại sao carangiform motion không thể được mô tả đầy đủ chỉ bằng một góc quay của đuôi?
2. Nếu giữ \(U\) cố định mà tăng cả \(f\) và \(A\), \(St\) thay đổi theo hướng nào?
3. Tại sao biên độ tăng về phía đuôi có ý nghĩa thủy động lực học?
