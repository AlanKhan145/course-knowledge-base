# 034 — Practical Exercise 3 – Motorcycle Helmet

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Practical Exercise 3 – Motorcycle Helmet |
| **Thời lượng** | 18:14 |
| **Chủ đề chính** | Dựng mũ bảo hiểm mô-tô: vỏ, kính che, khe thông gió |

## 1. Mục tiêu bài học

- Dựng phần vỏ chính của mũ bảo hiểm bằng Subdivision Surface trên khối cơ bản.
- Khoét kính che (visor) bằng Boolean.
- Thêm chi tiết khe thông gió và dây quai.
- Render kết quả cuối module với hiệu ứng bloom/glow trong compositor.

## 2. Nội dung chính

Mũ bảo hiểm là bài tập tổng hợp khép lại module, kết hợp cả tư duy organic (vỏ mũ bo tròn ôm đầu) lẫn hard-surface (kính che, khe thông gió, đinh tán). Vỏ chính dựng từ một **UV Sphere** hoặc Cube được Subdivision Surface làm mượt, sau đó chỉnh dáng bằng cách kéo/Scale các vertex/loop cut để tạo hình dạng khí động học đặc trưng của mũ bảo hiểm (phần sau nhô ra, phần trước thu gọn quanh mặt).

**Kính che (visor)** được cắt bằng **Boolean Difference**: dựng một khối cong ôm theo mặt trước mũ, dùng nó làm cutter để khoét một khoảng hở, sau đó dựng riêng tấm kính (thường là một mặt cong mỏng, vật liệu trong suốt sẽ được thêm ở Module 07) lắp vừa vào khoảng hở đó. **Khe thông gió** dựng bằng Boolean tương tự với các khối nhỏ hơn ở đỉnh và cằm mũ, có thể thêm chi tiết lưới hoặc rãnh nhỏ bên trong khe.

Bài học khép lại bằng việc **render với hiệu ứng bloom/glow** trong Compositor: bất kỳ phần nào có vật liệu phát sáng nhẹ (ví dụ đường viền phản quang, đèn LED trang trí) sẽ được node **Glare** (đã giới thiệu khái quát và sẽ học kỹ ở Module 07) khuếch đại thành quầng sáng mềm, tăng cảm giác chân thực và kịch tính cho ảnh render cuối cùng — cũng là bài tổng kết kỹ thuật cho toàn bộ Module 04.

## 3. Quy trình thực hành gợi ý

1. Dựng vỏ mũ từ UV Sphere hoặc Cube, thêm Subdivision Surface, chỉnh dáng khí động học bằng Scale/Proportional Editing.
2. Dựng một khối cutter cong ôm mặt trước, dùng Boolean Difference để khoét chỗ lắp kính che.
3. Dựng riêng tấm kính che vừa khít khoảng hở vừa khoét.
4. Boolean thêm các khe thông gió nhỏ ở đỉnh và cằm mũ.
5. Thêm chi tiết dây quai và đinh tán nhỏ bằng các primitive đơn giản.
6. Áp dụng Bevel Modifier + Harden Normals cho toàn bộ vỏ cứng.
7. Thiết lập render, thêm vật liệu phát sáng nhẹ cho chi tiết trang trí, bật node Glare trong Compositor để tạo hiệu ứng bloom.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Proportional Editing (chỉnh dáng mượt theo vùng) | `O` (bật/tắt), lăn chuột để chỉnh bán kính ảnh hưởng |
| Boolean Modifier | Modifier Properties > Add Modifier > Generate > Boolean |
| Node Glare (Compositor) | Shader/Compositor Editor > Add > Filter > Glare |
| Render ảnh tĩnh | `F12` |

## 5. Lưu ý & lỗi thường gặp

- Vỏ mũ dùng UV Sphere trực tiếp không chỉnh sửa sẽ trông như quả cầu tròn đều, thiếu hình dáng khí động học đặc trưng — cần kéo/Scale không đều theo từng vùng.
- Cutter khoét kính che quá lớn hoặc sai vị trí có thể xuyên thủng phần vỏ không mong muốn — nên kiểm tra từ nhiều góc nhìn trước khi Apply Boolean.
- Bật Glare với cường độ quá cao khiến toàn bộ ảnh bị "cháy sáng" mất chi tiết — nên tăng dần và theo dõi kết quả qua Render Result.
- Quên đặt vật liệu phát sáng (Emission) cho các chi tiết cần bloom khiến hiệu ứng Glare không có gì để khuếch đại.

## 6. Checklist thực hành

- [ ] Đã dựng vỏ mũ bảo hiểm với hình dáng khí động học rõ ràng.
- [ ] Đã khoét kính che và dựng tấm kính lắp vừa khoảng hở.
- [ ] Đã thêm khe thông gió và chi tiết dây quai.
- [ ] Đã render với hiệu ứng bloom/glow trong Compositor.

## 7. Tóm tắt

Mũ bảo hiểm mô-tô là bài tập tổng hợp của Module 04, đòi hỏi kết hợp Subdivision Surface cho hình khối tổng thể, Boolean cho các chi tiết cắt khoét, Bevel/Harden Normals cho shading sạch, và một bước hậu kỳ Glare để hoàn thiện ấn tượng thị giác cuối cùng.
