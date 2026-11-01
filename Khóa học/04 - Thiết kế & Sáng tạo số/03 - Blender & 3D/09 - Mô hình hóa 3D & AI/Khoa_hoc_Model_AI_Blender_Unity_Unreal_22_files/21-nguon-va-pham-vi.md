# Nguồn, phạm vi và lưu ý học thuật

Khóa học dùng **hai bản chép lời do người học cung cấp**, có nhiều lỗi do nhận dạng giọng nói hoặc dịch tự động. Các ví dụ sau được thống nhất tên kỹ thuật cho dễ học nhưng **không nhằm giả định chính xác nhãn nút trong giao diện phần mềm**.

## Nguồn A — Video ngắn: sửa một prop 3D AI (00:00–05:55)
- 00:00–01:15: Mesh AI → Blender; model khoảng 48K triangles, Decimate xuống dưới 5K trong ví dụ.
- 01:16–03:48: Smart UV Project trên bản sao; bake Diffuse Color từ bản gốc; lưu texture; export FBX/OBJ.
- 03:59–05:09: Photoshop chỉnh màu, tạo emission mask, Unity material & post-processing.
- 05:09–05:55: Tạo normal/metallic/roughness từ ảnh, bổ sung khói/aura, so sánh before/after.

## Nguồn B — File đính kèm: nhân vật 3D AI game-ready (00:00–36:09)
- 00:48–04:46: Concept ComfyUI → tách ảnh các phần bằng AI.
- 04:46–11:14: Sinh bộ phận high-poly → lắp ráp, nắn hình Blender.
- 11:14–15:24: Retopology và tạo UV trên low-poly.
- 15:24–20:11: Bake normal bằng quy trình multires/shrinkwrap minh họa.
- 20:11–24:29: Texturing PBR bằng ComfyUI/Trellis 2 và công cụ khác.
- 24:35–32:44: Auto-Rig Pro; tail, jaw, skinning, FBX export.
- 32:54–36:09: Mixamo Walk/Run/Idle → import, preview animation trong Unreal.

## Những phần biên soạn bổ sung
- Sửa thứ tự chọn **source trước – target cuối** trong baking kiểu Selected to Active để học viên không bị nhầm.
- Phân biệt Bloom theo render pipeline Unity, và roughness/smoothness khi chuyển texture.
- Tách normal map giả lập từ ảnh so với normal bake từ high-poly.
- Bổ sung bài tập, thang chấm, cấu trúc project, quy tắc kiểm thử và cách debug.

## Giới hạn
- Chưa có video gốc, workflow file hoặc ảnh chụp UI. Bản chép lời **không đủ để xác minh chắc** mọi tên dịch vụ/tool bên thứ ba, phiên bản và tùy chọn.
- Không coi số lượng triangles, 2K/4K texture, “AI tự rig” hay “game-ready” trong nguồn là tiêu chuẩn hiệu năng được kiểm nghiệm trên mọi thiết bị.
- Bài 17 chưa bao gồm hệ thống Gameplay Character, Animation Blueprint/State Machine hoàn chỉnh. Đây là phần nghiên cứu tiếp nếu muốn nhân vật điều khiển được.
