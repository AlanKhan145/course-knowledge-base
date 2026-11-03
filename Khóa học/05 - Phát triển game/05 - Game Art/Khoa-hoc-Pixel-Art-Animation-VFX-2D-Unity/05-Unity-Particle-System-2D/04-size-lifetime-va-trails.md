# Bài 04 — Size over Lifetime, Trails và hệ hiệu ứng kết liễu

> Module: Hệ thống hạt 2D bằng sprite trong Unity  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T02 05:01–06:37

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **size over lifetime, trails và hệ hiệu ứng kết liễu**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Hạt sao trong tutorial được cải thiện bằng **Size over Lifetime**: bắt đầu lớn và thu nhỏ dần. **Trails** thêm vệt bám theo hạt; tỷ lệ trails = 1 nghĩa là mọi hạt có vệt, bằng 0 nghĩa là không hạt nào có.

### Quy trình
1. Tạo `FX_StarImpact` dạng Burst; dùng sprite ngôi sao hoặc đốm sáng.
2. Bật `Size over Lifetime`: thử curve lớn → nhỏ rồi so sánh với nhỏ → lớn.
3. Bật `Color over Lifetime` để hạt mờ dần về alpha 0.
4. Bật `Trails`, chọn vật liệu trail tương thích render pipeline; chỉnh `Ratio` từ 0 tới 1 để cảm nhận mật độ.
5. Tạo cú kết liễu 3 tầng: flash tại điểm trúng, mảnh hạt bay ra, khói hoặc bụi tắt sau. Các tầng nên có tuổi thọ khác nhau.
6. Đảm bảo hiệu ứng được kích hoạt theo sự kiện một lần, không tự lặp; mục tiêu FPS trên điện thoại cần hạn chế số hạt và overdraw.

### Mốc phối hợp đề xuất (sáng tạo bổ sung)
`0 ms: flash → 40 ms: burst mảnh → 100 ms: khói/bụi → 300–600 ms: fade`. Đây là ví dụ để thực hành, không phải thông số trong video.

## Bài tập bắt buộc

1. Làm prefab `FX_StarImpact` có size curve + trails.
2. Dựng 3 tầng hiệu ứng cho một cú kết liễu.

## Tiêu chí hoàn thành

Có sự khác biệt rõ trước/sau dùng trails và size curve; hiệu ứng tự kết thúc.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
