# Tài liệu tham khảo — Unity Creative Core VFX

**Đối chiếu ngày:** 29/10/2026. Liên kết ưu tiên tới Unity hoặc tài liệu do Unity phát hành.

## 1. Khóa học và mục tiêu

- [Unity Learn — Creative Core VFX (khóa độc lập)](https://learn.unity.com/course/creative-core-vfx): mục tiêu học gồm chọn giữa Particle System và VFX Graph; tạo environmental/burst effect; giải thích graph đơn giản. Trang khóa độc lập hiện hiển thị Unity 6.0, trong khi bộ file học được biên soạn nhắm đến Unity 6.3.
- [Unity Learn — Creative Core pathway](https://learn.unity.com/pathway/creative-core): lộ trình sáng tạo gồm VFX, Lighting, Animation, Audio, UI và các kỹ năng nghệ thuật.

## 2. Particle System trong Unity 6.3

- [Chọn giữa các hệ hạt](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/choosing-your-particle-system): so sánh mô hình biên tập, C# API, render pipeline và quy mô hạt.
- [Danh mục module](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/particle-system-modules): Main, Emission, Shape, Noise, Collision, Color, Size và Renderer.
- [Emission module](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/particle-system-modules/part-sys-emission-module): Rate over Time, Rate over Distance và Burst (Time, Count, Cycles, Interval, Probability).
- [Shape module](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/particle-system-modules/part-sys-shape-module): vùng phát và hướng ban đầu.
- [ParticleSystem API](https://docs.unity.com/en-us/engine/6000.3/script-reference/unityengine/particlesystem): truy cập module, Play, Stop, Emit và số hạt.

## 3. Visual Effect Graph

- [Unity 6.3 Manual — Visual Effect Graph](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/vfxgraph): mục đích và khả năng mô phỏng GPU của package.
- [Unity — VFX Graph Getting Started](https://docs.unity3d.com/Packages/com.unity.visualeffectgraph@latest/index.html?subfolder=/manual/GettingStarted.html): thao tác tạo asset, tạo instance và sử dụng graph. Tài liệu tại địa chỉ `latest` thay đổi khi package cập nhật; nên xem phiên bản package đang cài trong Editor.
- [Visual Effect component](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/vfxgraph/class-visual-effect): component chứa instance của hiệu ứng.

## 4. Đo hiệu năng

- [Unity — Best practices for profiling game performance](https://activation.unity3d.com/how-to/best-practices-for-profiling-game-performance): phân biệt CPU/GPU bottleneck, kiểm tra GPU frame và vấn đề overdraw của particle trong suốt.

## 5. Phạm vi và mức độ bằng chứng

- **Bám nguồn học tập:** chủ đề, kỹ năng nền tảng, thứ tự bài và loại hình tutorial/exercise/quiz.
- **Đối chiếu bằng tài liệu Unity:** tên module, API, điều kiện chọn VFX Graph, thuật ngữ kỹ thuật và lỗi thường gặp.
- **Bổ sung cho mục đích sư phạm:** các preset tham số, bài lab, ví dụ C#, sơ đồ Mermaid, rubric chấm và câu hỏi tự luyện; đây không phải bài tập/đáp án chính thức của Unity.
- **Chưa kiểm thử trong Unity Editor:** code và presets phải được xác nhận trên project, vật liệu và phiên bản package của người học.
