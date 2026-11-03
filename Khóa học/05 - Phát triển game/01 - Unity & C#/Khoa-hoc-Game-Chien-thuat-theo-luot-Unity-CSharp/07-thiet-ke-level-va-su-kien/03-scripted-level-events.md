# Scripting level: trigger, hội thoại, cutscene

> **Module 07** · Tham chiếu bản ghi video: **10:26–11:19** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video mô tả việc **kích hoạt sự kiện dựa theo vị trí**: tới một ô nhất định thì bắt đầu hội thoại/cutscene, sinh địch hoặc “đánh thức” nhóm địch. Cách triển khai đơn giản là một script gắn trên Map Prefab giữ logic của level và tham chiếu marker.

Tách điều kiện `Trigger` và hiệu ứng `Action`: `OnEnterCell → ShowDialogue`; `OnKillUnit → SpawnReinforcement`; `OnInteract → CompleteObjective`. Khi có nhiều trigger, cần trạng thái `TriggeredOnce` để tránh chạy lặp.

Thứ tự thực thi: nhận event → kiểm tra điều kiện → khóa input nếu cần → chạy sequence → cập nhật objective → trả quyền điều khiển. Đừng spawn reinforcement giữa lúc grid chưa cập nhật vị trí.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `LevelTrigger` có loại event và điều kiện.
2. Lắng nghe `OnUnitEnteredCell` và `OnUnitDied`.
3. Xây một cutscene ngắn: khóa input → camera nhìn cửa → spawn 2 địch → mở input.
4. Cho phép skip nhưng vẫn áp dụng hậu quả logic của cutscene.
5. Đánh dấu trigger dùng một lần; hỗ trợ kiểm thử/reset level.
6. Tách logic nhiệm vụ khỏi Animator/timeline cụ thể.

## 3. Bài tập vận dụng

Thiết kế mission có 3 bước: xâm nhập, tương tác với máy liên lạc, thoát khỏi bản đồ.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
