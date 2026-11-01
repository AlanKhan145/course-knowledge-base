---
title: "Bài 10 — Dựng concept art bằng ComfyUI và ảnh tham chiếu"
course: "Từ model AI đến Game-Ready Asset"
module: "Nhân vật: concept và high-poly"
duration_minutes: 40
source: "Video B 00:48–03:18"
language: "vi"
format: "self-study"
---

# Bài 10 — Dựng concept art bằng ComfyUI và ảnh tham chiếu

> **Thời lượng gợi ý:** 40 phút · **Nguồn:** Video B 00:48–03:18  
> **Hình thức:** Tự học có hướng dẫn, thực hành và tự kiểm tra.

## Mục tiêu
- Tạo concept art đủ rõ để sinh 3D và chia bộ phận.
- Hiểu vai trò của hình 3/4, hình toàn thân, nền sạch, thiết kế cơ khí và upscale.

## Quy trình trong nguồn
1. Mở **ComfyUI** (bản cloud hoặc cài tại máy). Video dùng mô hình ảnh được gọi là **Qwen Image 2512** theo phiên âm transcript.
2. Mô tả nhân vật rõ silhouette: khủng long steampunk, chân/cánh tay cơ khí, móng vuốt, đầu, đuôi, khớp nối.
3. Yêu cầu **full-body, nền trơn, ánh sáng studio, không che khuất các phần cơ thể**, hình 3/4 khi cần.
4. Tạo ảnh; kiểm tra sự liên tục của chi tiết, tỷ lệ và khả năng tách chi.
5. Upscale ảnh tham chiếu (video có bước tăng độ phân giải) và lưu phiên bản gốc.

### Prompt mẫu — phần minh họa tự biên soạn
```text
Full-body steampunk robotic dinosaur character, detailed mechanical joints,
clear separation between head, torso, arms, legs and tail, coherent armor plates,
neutral studio lighting, plain neutral background, three-quarter front view,
complete silhouette, no cropping, no extra limbs, consistent metal design.
```

> Prompt mẫu chỉ là ví dụ thực hành, **không phải prompt nguyên văn của video**.

## 4 tiêu chí kiểm ảnh
- Có đủ đầu/thân/chân/tay/đuôi, không mất phần sau camera.
- Màu và chi tiết cơ khí nhất quán giữa các bộ phận.
- Khớp chuyển động hợp lý (không dính liền các mảng giáp sẽ cần xoay).
- Nền không gây nhiễu khiến AI tách nhầm vật thể.

## Thực hành
Tạo một ảnh toàn thân và một ảnh 3/4; ghi lại 5 chi tiết buộc phải giữ từ concept đến model 3D.

**Đầu ra:** `concept_front3q.png`, `design-notes.md`.
