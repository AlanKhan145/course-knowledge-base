# Bài 08 — Kiểm tra hoàn tất thiết lập Guided Project

> **Khóa học:** Creative Core · **Học phần:** Introduction to Creative Core  
> **Loại bài:** Assessment / Checkpoint · **Trọng tâm:** Xác nhận môi trường Unity và dữ liệu dự án đã sẵn sàng.

## 1. Mục tiêu kiểm tra

Trước khi phát triển vật liệu, ánh sáng hoặc hiệu ứng, dự án phải mở được trong Unity, sử dụng đúng **Universal Render Pipeline (URP)** và chứa các asset cần thiết của concept đã chọn. Checkpoint này là **kiểm tra trạng thái chuẩn bị**, không phải bài thi về lập trình hay kiểm thử một trò chơi hoàn chỉnh.

Sau phần đánh giá, người học cần xác minh được:

- Unity Editor đã cài và có thể khởi chạy.
- Đã tạo **Universal 3D (URP)** project tương ứng với guided project.
- Đã nhập starter assets, tìm thấy prefab cần thiết và có thể dựng Scene làm việc.

## 2. Ba điều kiện của checkpoint trên Unity Learn

Bài quiz chính thức yêu cầu tự xác nhận ba nội dung sau (dạng **Yes / No**):

| Câu | Nội dung cần kiểm tra | Chọn **Yes** khi nào? |
|---|---|---|
| 1 | Đã tải và cài **Unity 6000.0 LTS** chưa? | Editor theo phiên bản được nêu trong checkpoint đã được cài và khởi chạy được |
| 2 | Đã tạo **Universal 3D (URP)** project bằng **Unity 6000.0 LTS** chưa? | Dự án được tạo với đúng template và phiên bản được yêu cầu |
| 3 | Đã nhập **guided project assets** được cung cấp chưa? | Asset có thể tìm thấy và sử dụng trong Project window |

**Quan trọng về phiên bản:** đường dẫn bài học đang được hiển thị trong mục lục Unity **6.3**, nhưng câu chữ của checkpoint trên trang chính thức vẫn nêu **Unity 6000.0 LTS**. Đây là sự khác biệt nội dung giữa phần quiz và bối cảnh phiên bản; **không tự coi 6.3 là 6000.0** khi trả lời câu hỏi nguyên văn. Nếu đang thực hành với Unity 6.3, hãy xác nhận việc cài, tạo URP project và nhập asset theo Editor bạn thực sự sử dụng, đồng thời đối chiếu câu hỏi phiên bản với trang Unity Learn hiện hành.

## 3. Quy trình xác minh trước khi làm quiz

### 3.1. Kiểm tra Editor và Hub

1. Mở Unity Hub, chọn **Installs**.
2. Xem danh sách Editor versions đã cài; ghi lại version cụ thể.
3. Mở project từ **Projects**.
4. Trong Editor, xem thông tin phiên bản ở **Help → About Unity** hoặc vị trí tương đương.

**Minh chứng:** ảnh danh sách Editor và thông tin version thực tế.

### 3.2. Kiểm tra project URP

1. Trong Unity Editor, mở **Edit → Project Settings → Graphics**.
2. Xác định **Render Pipeline Asset** được gán làm cấu hình mặc định.
3. Kiểm tra **Edit → Project Settings → Quality**, vì từng quality level có thể có pipeline asset riêng.
4. Xác minh project dùng **URP**, thay vì dựa vào tên thư mục hay tên Scene.

**Minh chứng:** ảnh Graphics hoặc Quality cho thấy render pipeline hiện hành. Nếu project vừa được tạo nhưng chưa đúng pipeline, tốt hơn nên chỉnh lại trước khi đi tiếp.

### 3.3. Kiểm tra Guided Project Assets

1. Vào **Project window** và tìm thư mục `Assets/GuidedProject`.
2. Tìm nhánh của concept đã chọn, chẳng hạn `BeachsideTown`, `AlienVideoGameShop` hoặc thư mục tương ứng của dự án kiến trúc. Tên folder có thể tùy bản starter package; ưu tiên tìm bằng các asset thực tế.
3. Xác định `Prefabs/StarterEnvironment` nếu có trong bộ package của hướng dẫn.
4. Kéo prefab vào một Scene mới, kiểm tra đối tượng xuất hiện trong **Hierarchy**, sau đó lưu Scene.
5. Kiểm tra **Console** để đảm bảo không có lỗi import khiến asset không sử dụng được.

**Minh chứng:** ảnh Project window, Hierarchy và Game view. Các cảnh báo về material không tương thích có thể được xử lý trong học phần Shaders & Materials, nhưng lỗi import hoặc prefab bị thiếu thì cần giải quyết trước.

## 4. Cách xử lý khi chưa đạt checkpoint

| Vấn đề | Cách xử lý có căn cứ |
|---|---|
| Chưa cài đúng Editor | Mở Unity Hub → Installs và cài phiên bản mà khóa học hoặc project yêu cầu |
| Đã tạo dự án 3D nhưng không dùng URP | Kiểm tra template và pipeline; với project mới, cân nhắc tạo lại bằng Universal 3D |
| Không tìm được guided assets | Mở mục **Resources** của bài *Get started on your guided project*, tải lại đúng package và nhập theo định dạng |
| Đã import nhưng Scene trống | Tìm `StarterEnvironment` và thêm instance vào Hierarchy |
| Chưa chắc đã hoàn thành | Chỉ xác nhận **Yes** khi có thể tự chứng minh bằng Editor, folder và ảnh minh chứng |

**Không nên chọn Yes chỉ để vượt checkpoint.** Mục đích là bảo đảm các bài thực hành kế tiếp có nền tảng kỹ thuật phù hợp.

## 5. Bài kiểm tra thực hành bổ sung

Phần sau **tự biên soạn để ôn tập**, không phải câu hỏi chấm điểm của Unity Learn.

**Nhiệm vụ 1:** Mở project và cung cấp tên Editor version.  
**Tiêu chí đạt:** khởi chạy thành công, version ghi khớp với thực tế.

**Nhiệm vụ 2:** Chứng minh project dùng URP.  
**Tiêu chí đạt:** chỉ ra đúng Render Pipeline Asset hoặc cấu hình URP hiện hành trong Graphics/Quality.

**Nhiệm vụ 3:** Trình bày asset starter của concept.  
**Tiêu chí đạt:** xác định đúng thư mục import, thêm `StarterEnvironment` vào Scene và lưu.

**Nhiệm vụ 4:** Ghi một vấn đề phát hiện được và cách kiểm tra.  
**Tiêu chí đạt:** phân biệt nguyên nhân đã kiểm chứng và giả thuyết chưa được xác nhận.

## 6. Trắc nghiệm ôn tập bổ sung

**Câu 1.** Chọn tên `GuidedProject_URP` cho một thư mục có đủ để khẳng định project dùng URP không?  
A. Có vì tên thư mục quyết định pipeline · B. Có nếu tên Scene đúng · C. Có khi chưa tạo material · D. Không, phải kiểm tra cấu hình pipeline thực tế  
**Đáp án: D.** Tên file/folder không quyết định render pipeline đang hoạt động.

**Câu 2.** Muốn tìm starter package chính thức cần làm gì?  
A. Tìm ở phần Resources của tutorial thiết lập Guided Project · B. Tự tạo file rỗng có tên package · C. Chỉ tải texture ngẫu nhiên · D. Dùng package không rõ nguồn  
**Đáp án: A.** Bài thiết lập cung cấp tệp tài nguyên hướng dẫn.

**Câu 3.** Vì sao cần đặt prefab `StarterEnvironment` vào Scene?  
A. Để đổi Editor version · B. Để loại bỏ URP · C. Để có cấu hình môi trường khởi đầu của concept · D. Để tự động hoàn thiện game  
**Đáp án: C.** Prefab cung cấp các đối tượng nền tảng làm việc trong Scene.

**Câu 4.** Trang quiz nhắc 6000.0 LTS, còn bạn đang dùng Unity 6.3. Kết luận nào đúng?  
A. Đây là cùng một chuỗi số phiên bản · B. Cần phân biệt yêu cầu nguyên văn với môi trường đang dùng · C. Có thể chọn Yes cho mọi câu · D. URP không hoạt động trên Unity 6.3  
**Đáp án: B.** Không được đồng nhất hai nhãn phiên bản; cần đối chiếu yêu cầu hiện hành.

**Câu 5.** Điều nào chứng minh asset đã nhập thành công một cách thuyết phục?  
A. Dự án có tên đẹp · B. Đã xem video · C. Tệp ZIP còn trong Downloads · D. Prefab có trong Project window và dùng được trong Scene  
**Đáp án: D.** Asset cần hiện diện và sử dụng được, không chỉ được tải về máy.

## 7. Checklist cuối cùng

- [ ] Tôi xác định được Editor version thực sự đang dùng.
- [ ] Tôi hiểu yêu cầu phiên bản của checkpoint chính thức.
- [ ] Tôi đã tạo dự án **Universal 3D (URP)** và kiểm tra pipeline asset.
- [ ] Tôi đã tải và nhập starter assets từ nguồn phù hợp.
- [ ] Tôi đã chọn đúng concept, tìm `StarterEnvironment` và tạo Scene riêng.
- [ ] Tôi đã lưu Scene và có ảnh minh chứng.
- [ ] Tôi chỉ xác nhận các câu Yes/No theo trạng thái thực tế.

## 8. Tài liệu học thêm

- [Unity Learn — Guided project setup checkpoint](https://learn.unity.com/pathway/creative-core/unit/introduction-to-creative-core/quiz/guided-project-setup-checkpoint?version=6.3)
- [Unity Learn — Get started on your guided project](https://learn.unity.com/pathway/creative-core/unit/introduction-to-creative-core/tutorial/get-started-on-your-guided-project?version=6.3)
- [Unity Hub — Create a new project](https://docs.unity.com/en-us/hub/project-create)
