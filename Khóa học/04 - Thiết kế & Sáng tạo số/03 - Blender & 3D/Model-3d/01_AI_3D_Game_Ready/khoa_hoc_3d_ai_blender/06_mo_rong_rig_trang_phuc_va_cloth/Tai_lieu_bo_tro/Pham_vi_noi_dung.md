# Phạm vi nội dung và cách tổ chức khóa học

Khóa học được biên soạn từ các tài liệu hướng dẫn thực hành Blender do người học cung cấp và phần phụ đề về Cloth trên nhân vật với animation Mixamo. Các phần được kết nối thành chương trình học theo trình tự thực hành; những ví dụ, bài tập, tiêu chí kiểm thử và cách tổ chức thư mục là cấu trúc sư phạm bổ sung.

## Các nhóm kỹ thuật được sử dụng

1. **Manual skirt rig:** Tạo DEF, các chuỗi điều khiển, MCH socket, constraint và tách xoay hông.
2. **Gắn trang phục:** Rigify, fit mesh, Sculpt, Shrinkwrap, Automatic Weights, Weight Paint, giày/áo/váy và lỗi da xuyên.
3. **Cloth Simulation:** Pin, chất liệu mềm/cứng, self collision, topology, cơ thể va chạm và nhiều lớp trang phục.
4. **Workflow Mixamo:** Nhập FBX, thời gian chuẩn bị T-pose, nối animation, camera, render video.
5. **Hybrid & export:** Gắn cape vào armature + Cloth, Empty theo ba đỉnh mô phỏng, bake chuyển động bone.
6. **Rig phụ kiện:** Túi, dây đeo, váy tự động, B-Bone và tay áo trượt.

Hai tệp phụ đề về rig phụ kiện có nội dung giống nhau nên được gộp thành một mảng kiến thức. Những lựa chọn như số bone, mật độ lưới, FPS và thông số solver trong bài là **ví dụ để thử nghiệm**, không phải cấu hình tối ưu cho mọi phiên bản Blender hoặc mọi model.

## Giới hạn

- Không có file `.blend`, FBX, texture hoặc model 3D đi kèm trong bộ đầu vào, nên khóa học không giả định rằng chúng đã được tạo sẵn.
- Các thao tác phụ thuộc Blender/Rigify/FBX có thể thay đổi tùy phiên bản; cần kiểm tra UI và cấu hình rig thực tế.
- Việc xuất mô phỏng Cloth sang bone không đồng nghĩa tái tạo chính xác mọi nếp vải; phải kiểm thử file xuất.
