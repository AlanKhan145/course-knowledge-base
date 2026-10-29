# Bài 07 — Tạo khối mũi và khoét lỗ mũi

**Mốc video:** 16:47–20:21 · **Thời lượng học gợi ý:** 35–45 phút

## Mục tiêu

Tạo mũi cách điệu từ mesh bổ sung, kết hợp êm với đầu, sau đó điêu khắc hai lỗ mũi.

## Thực hành

1. Trong Object Mode, tạo mesh cơ bản mới cho mũi (tùy phong cách có thể dùng **UV Sphere** hoặc **Cube bo tròn**). Đặt tại vùng giữa mặt, nhìn từ góc trước và ngang để kiểm tra sống mũi.
2. Dùng `S`, `G`, `R` để chỉnh độ rộng cánh mũi, độ nhô của đầu mũi và độ cao. Thêm Subdivision Surface nếu bề mặt còn góc cạnh.
3. Nếu chủ định **hàn thành một mesh điêu khắc**: sao lưu bản trước; Apply các modifier cần thiết, chọn mũi và đầu rồi `Ctrl + J`. Tiếp tục **Voxel Remesh** ở mức phù hợp như Bài 04.
4. Dùng **Smooth** tại ranh giới mũi–má để chuyển khối tự nhiên; tránh làm bẹt đầu mũi.
5. Bật **Symmetry X** trong Sculpt Mode.
6. Dùng **Draw** hoặc brush làm lõm, điều chỉnh radius nhỏ để khoét hai vùng lỗ mũi. Giữ `Ctrl` để đảo tác động ở brush hỗ trợ.
7. Xoay sang góc dưới-3/4 để xem hai lỗ mũi có độ sâu và kích cỡ phù hợp. Smooth nhẹ vùng rìa.

## Kiểm tra hình khối

```text
Mặt trước:                 Mặt nghiêng:
   [hai mắt]                   trán
       |                         \
      / \     ← cánh mũi         \__  ← đầu mũi nhô
     ( o o )  ← lỗ mũi           \___
```

## Lưu ý quan trọng

- **Mốc 0.02 của Voxel Size không phổ quát**. Nếu kích thước mô hình khác, phải điều chỉnh theo kích cỡ thực.
- Giữ mũi là mesh riêng **cũng hợp lệ** nếu dùng phong cách lắp ghép và chưa muốn hàn. Video nguồn thiên về ghép/remesh để sculpt liền.
- Nếu muốn mũi game-ready về sau, cần quy trình retopology/UV khác; video này chưa dạy các bước đó.

## Tự kiểm tra

- [ ] Mũi có độ nhô rõ từ góc nghiêng.
- [ ] Chuyển tiếp mũi–mặt không bị gãy hoặc lõm bất thường.
- [ ] Lỗ mũi có hình và hướng nhất quán.

**Bài tập:** tạo hai mẫu mũi: mũi tròn nhỏ và mũi dài nhọn; chỉ thay tỷ lệ mà không đổi phong cách tổng thể.
