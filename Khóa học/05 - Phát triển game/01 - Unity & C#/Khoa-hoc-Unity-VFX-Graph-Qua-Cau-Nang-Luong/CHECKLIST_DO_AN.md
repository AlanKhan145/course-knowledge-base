# Checklist nghiệm thu đồ án quả cầu năng lượng

## 1. Môi trường

- [ ] Có project Unity cấu hình URP và VFX Graph phù hợp phiên bản đang dùng.
- [ ] Asset VFX Graph được liên kết với đối tượng trong Scene.

## 2. Trails

- [ ] Hạt khởi tạo trên vùng Sphere.
- [ ] Có Spawn Rate và Capacity phù hợp.
- [ ] Có Turbulence và Conform to Sphere.
- [ ] Độ dày vệt nhỏ, giảm dần theo vòng đời.
- [ ] Có thuộc tính màu và Lifetime có thể điều chỉnh.

## 3. Pulse

- [ ] Periodic Burst tạo xung theo chu kỳ.
- [ ] Quad có kích thước theo OrbSize.
- [ ] Blend mode Additive (hoặc lựa chọn tương đương với mục tiêu hình ảnh).
- [ ] Alpha chuyển tiếp mờ → sáng → mờ.

## 4. Particles và Curl Noise

- [ ] Có hệ hạt nhỏ riêng, kết cấu rõ.
- [ ] Hạt chuyển động nhờ Turbulence và giữ dáng nhờ Conform.
- [ ] Curl Noise nhận input liên quan Position và Time.
- [ ] Đã thử Remap để khống chế biên độ chuyển động.

## 5. Inspector, thẩm mỹ và hiệu năng

- [ ] OrbSize tác động nhất quán lên các lớp.
- [ ] Tạo được ít nhất hai phối màu khác nhau.
- [ ] Có thể điều chỉnh tốc độ phát hạt mà không mở lại graph.
- [ ] Đã kiểm tra hiệu năng ở mật độ thấp và trung bình.
- [ ] Không đặt `50000` hạt/giây như mặc định nếu chưa đo tải GPU.

## 6. Sản phẩm nộp

- [ ] Asset graph và Scene demo.
- [ ] Ảnh chụp hai biến thể màu.
- [ ] Ghi chú một lỗi đã gặp và cách khắc phục.
