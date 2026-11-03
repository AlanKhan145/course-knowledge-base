# Ghi chú phiên bản và tài liệu tham khảo

## 1. Cinemachine
- [Unity Cinemachine 3.1 — Follow Camera](https://docs.unity.cn/Packages/com.unity.cinemachine@3.1/manual/setup-follow-camera.html)
- [Unity Cinemachine 3.1 — Cinemachine Camera](https://docs.unity.cn/Packages/com.unity.cinemachine@3.1/manual/CinemachineCamera.html)
- [Unity Cinemachine 3.1 — Cinemachine Follow](https://docs.unity.cn/Packages/com.unity.cinemachine@3.1/manual/CinemachineFollow.html)
- [Unity Cinemachine 2.9 — CinemachineVirtualCamera API](https://docs.unity.cn/Packages/com.unity.cinemachine@2.9/api/Cinemachine.CinemachineVirtualCamera.html)
- [Tìm kiếm video Cinemachine 3.1 Tips and Tricks](https://www.youtube.com/results?search_query=Unity+Cinemachine+3.1+Tips+and+Tricks)

**Chú ý:** Hướng dẫn camera nền ban đầu được viết theo Cinemachine 2.x; mã trong khóa học này chọn API chính của Cinemachine 3.1 để thực hành và chỉ đối chiếu 2.x trong bảng tương thích. Các phần UI hoặc tên trường có thể đổi nếu đang dùng bản Cinemachine mới hơn 3.1.

## 2. Công cụ hiệu ứng
- Unity Shader Graph cho shader dissolve dựa trên Simple Noise và Alpha Clipping.
- Universal Render Pipeline cho Lit Shader Graph.
- Unity Visual Effect Graph cho hệ thống hạt sinh từ mesh đã skin.
- Mixamo để lấy mô hình và animation humanoid.

Việc tạo nguồn skinned mesh cho VFX Graph đòi hỏi một bridge phù hợp phiên bản VFX Graph; khóa học này không giả định có sẵn đoạn source bridge từ video bên ngoài. Có thể chọn plugin/graph sample phù hợp phiên bản hoặc tự viết bridge theo API có sẵn và kiểm thử riêng.

## 3. Quy ước kỹ thuật
- Các thông số `20px`, `16 world units/s`, `90°/s`, FOV `[10,50]`, noise scale `30`, width `0.05` chỉ là **giá trị khởi tạo để thử nghiệm**.
- Legacy `Input` được dùng để giảng thuật toán; có thể thay bằng Input System mà không đổi kiến trúc camera.
- Hãy profile VFX Graph thực tế trên build mục tiêu khi số enemy tăng.
