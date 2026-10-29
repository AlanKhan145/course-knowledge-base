# Giáo trình Creative Core — VFX (tiếng Việt)

## 1. Giới thiệu

Bộ tài liệu gồm **8 bài học Markdown tiếng Việt**, một file đáp án cho bài kiểm tra và tài liệu hướng dẫn sử dụng. Mục đích là học theo tiến trình: hiểu công cụ → tự tạo hệ hạt → thiết kế hiệu ứng môi trường/burst → làm quen VFX Graph → thử thách và tích hợp vào dự án.

Nội dung được giảng lại độc lập, bám theo **chủ đề và thứ tự** của 8 file đầu vào Creative Core – VFX; kiến thức kỹ thuật được kiểm tra và bổ sung bằng tài liệu Unity. Các bài học không phải toàn văn bài giảng, transcript video, bản dịch chính thức hay đáp án quiz Unity Learn. **Unity 6.3** là phiên bản hướng dẫn mục tiêu của các file đầu vào; khóa độc lập Creative Core VFX trên Unity Learn hiện cũng có thể hiển thị bộ nội dung gắn nhãn phiên bản Unity khác. Hãy ưu tiên kiểm tra đúng Editor/package hiện đang dùng.

## 2. Mục lục

| Thứ tự | File | Vai trò | Sản phẩm / kỹ năng |
| --- | --- | --- | --- |
| 01 | [001-get-started-with-vfx.md](01-Tutorials/001-get-started-with-vfx.md) | Lesson | Nguyên lý và lựa chọn hệ hạt |
| 02 | [002-play-around-with-a-particle-system.md](01-Tutorials/002-play-around-with-a-particle-system.md) | Lesson/lab | Khảo sát module với thử nghiệm có kiểm soát |
| 03 | [003-create-an-environmental-particle-system.md](01-Tutorials/003-create-an-environmental-particle-system.md) | Lab | Tạo mưa/tuyết |
| 04 | [004-create-a-burst-particle.md](01-Tutorials/004-create-a-burst-particle.md) | Lesson/lab | Tia lửa khi va chạm, sự kiện C# |
| 05 | [005-experiment-with-vfx-graph.md](01-Tutorials/005-experiment-with-vfx-graph.md) | Lesson/lab | Spawn/Initialize/Update/Output |
| 06 | [006-challenge-add-some-magic-to-your-scene.md](02-Exercises/006-challenge-add-some-magic-to-your-scene.md) | Exercise | Phép thuật 2 lớp, chấm theo rubric |
| 07 | [007-apply-vfx-to-your-guided-project.md](01-Tutorials/007-apply-vfx-to-your-guided-project.md) | Mini project | VFX event, prefab, đo hiệu năng |
| 08 | [008-creative-core-vfx-quiz.md](03-Quizzes/008-creative-core-vfx-quiz.md) | Assessment | 16 câu trắc nghiệm + 2 bài tình huống |
| — | [009-dap-an-creative-core-vfx-quiz.md](03-Quizzes/009-dap-an-creative-core-vfx-quiz.md) | Answer key | Đáp án và lời giải thích |
| — | [TAI_LIEU_THAM_KHAO.md](TAI_LIEU_THAM_KHAO.md) | Resource | Nguồn Unity được đối chiếu |

## 3. Cách sử dụng

1. Đọc bài theo thứ tự hoặc bắt đầu từ chủ đề cần học. Mỗi file có thể đọc riêng.
2. Mở Unity, làm các bước lab và **ghi dự đoán trước khi thay đổi thông số**.
3. Lưu `Scene`, `Prefab`, ảnh Inspector/Graph, video minh chứng và kết quả kiểm thử.
4. Làm bài 06 mà không xem trước lời giải mẫu; hoàn thành bài 08 rồi mới mở đáp án.
5. Nếu sử dụng công cụ đọc Markdown chưa hỗ trợ Mermaid, mở tài liệu bằng VS Code với extension hỗ trợ Mermaid hoặc GitHub/GitLab tùy hỗ trợ.

## 4. Quy ước

- Những **giá trị thông số cụ thể** trong bài lab là preset thử nghiệm do tài liệu đề xuất, không phải số liệu benchmark hoặc giá trị tối ưu do Unity công bố.
- Tên API (`ParticleSystem`, `Play()`, `Stop()`) được giữ nguyên; code C# dùng để minh họa cách tích hợp và chưa được chạy/biên dịch trong Unity trong quá trình biên soạn.
- Không có lời hứa về FPS; muốn tối ưu phải đo cùng điều kiện, ưu tiên build trên phần cứng đích.
- UI/menu, render pipeline và VFX Graph package thay đổi giữa các phiên bản; khi khác hướng dẫn, đối chiếu tài liệu Unity đúng phiên bản.

## 5. Các nguồn chính

- [Unity Learn — Creative Core VFX](https://learn.unity.com/course/creative-core-vfx)
- [Unity 6.3 Manual — Particle System modules](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/particle-system-modules)
- [Unity 6.3 Manual — Choosing your Particle System](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/choosing-your-particle-system)
- [Unity 6.3 Manual — Visual Effect Graph](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/vfxgraph)
- [Unity 6.3 Script Reference — ParticleSystem](https://docs.unity.com/en-us/engine/6000.3/script-reference/unityengine/particlesystem)

**Biên soạn và đối chiếu:** 29/10/2026.
