# Bài 11 — Đánh giá cuối khóa: Unity + Mixamo Animation

**Loại tài liệu:** Assessment.

## 1. Hướng dẫn

Bài đánh giá giúp kiểm tra kiến thức và khả năng tích hợp một nhân vật hoạt họa. Phần trắc nghiệm có đáp án để tự đối chiếu sau khi trả lời. Phần nhiệm vụ thực hành có rubric và yêu cầu nộp sản phẩm, không cung cấp sẵn lời giải.

## 2. Phạm vi đánh giá

- Tổ chức asset Unity.
- FBX `With Skin` và `Without Skin`.
- `Avatar Definition`, `Rig`, `Animation`.
- Material, texture và scene.
- Animator State Machine, Trigger, Exit Time.
- `MonoBehaviour`, `Input.GetKeyDown`, `Animator.SetTrigger`.
- Kiểm thử và chẩn đoán lỗi.

## 3. Trắc nghiệm tự kiểm tra

**Câu 1.** Chọn cách nhập hai animation vào cùng nhân vật từ Mixamo tối ưu trong khóa học.

A. Cả hai clip tải With Skin rồi đặt hai model trong scene  
B. Cả hai clip tải Without Skin và không có model gốc  
C. Tải Idle với model `With Skin`, tải Macarena `Without Skin`  
D. Chỉ tải material

**Đáp án:** C. **Giải thích:** Có một model gốc và thêm chuyển động mới bằng file chỉ chứa animation.

**Câu 2.** Với clip Macarena tải `Without Skin`, chọn gì trong Avatar Definition?

A. `Copy From Other Avatar`  
B. `Create From This Model` trong mọi trường hợp  
C. Không cần Animator  
D. Chọn material bàn cờ

**Đáp án:** A. **Giải thích:** Clip bổ sung cần dùng lại Avatar của nhân vật đã tạo.

**Câu 3.** Muốn bắt đầu Play Mode ở Idle, cần cấu hình gì?

A. Chọn state Dance mặc định  
B. Tắt controller  
C. Tăng tốc độ animation  
D. Đặt Idle làm default state và gán clip vào Motion

**Đáp án:** D. **Giải thích:** Animator vào default state và phát Motion của state đó.

**Câu 4.** Sự khác nhau giữa `GetKeyDown` và kiểm tra giữ phím phù hợp ở đây là gì?

A. `GetKeyDown` dùng để load texture  
B. `GetKeyDown` phản hồi đúng frame phím vừa được nhấn  
C. `GetKeyDown` chỉ dùng cho chuột  
D. `GetKeyDown` luôn tạo scene mới

**Đáp án:** B. **Giải thích:** Sự kiện nhấn mới phù hợp với việc đặt Trigger một lần.

**Câu 5.** Nếu `PlayerController` và `Animator` ở hai GameObject khác nhau, chuyện gì có thể xảy ra?

A. Animator tự động chuyển lên parent  
B. Unity đổi tên Trigger  
C. `GetComponent<Animator>()` có thể trả về null  
D. Tiling của Plane tăng

**Đáp án:** C. **Giải thích:** Hàm GetComponent không tự tìm trong các child hoặc parent.

**Câu 6.** Hành động nào giúp trở về Idle tự động khi Dance đã hoàn thành?

A. Transition Dance → Idle với `Has Exit Time` phù hợp  
B. Đổi tên scene  
C. Xóa clip Dance  
D. Thêm texture

**Đáp án:** A. **Giải thích:** Exit Time cho phép chờ quá trình phát clip trước khi chuyển state.

**Câu 7.** Vì sao Animator không cần hai model AJ riêng cho hai trạng thái?

A. Vì không có bất kỳ skeleton nào  
B. Vì Animator chỉ hỗ trợ một animation  
C. Vì texture quyết định chuyển động  
D. Vì có thể dùng các clip khác nhau trên cùng nhân vật và Avatar tương thích

**Đáp án:** D. **Giải thích:** Các clip cùng điều khiển rig của một model.

**Câu 8.** Nếu nhân vật bị mất màu dù chuyển động đúng, cần ưu tiên sửa ở đâu?

A. `Has Exit Time`  
B. Material/Texture/Shader  
C. Trigger  
D. `KeyCode.D`

**Đáp án:** B. **Giải thích:** Lỗi hiển thị bề mặt không phụ thuộc vào máy trạng thái.

## 4. Nhiệm vụ thực hành

**Đề bài:** Tạo scene Unity trong đó nhân vật 3D có sàn hiển thị hoa văn lặp, chạy Idle mặc định và chuyển sang Macarena khi nhấn phím D. Nhân vật phải quay về Idle sau khi nhảy xong. Cho phép thay AJ bằng nhân vật humanoid tương thích nếu cần.

**Yêu cầu bắt buộc:**

1. Có cấu trúc thư mục gọn gàng.
2. Model gốc dùng một FBX `With Skin`; chuyển động bổ sung không nhân bản model không cần thiết.
3. Hiển thị đúng material/texture của nhân vật và sàn.
4. Dùng `Animator Controller` với hai state, hai transition và một Trigger.
5. Script hoạt động, không phát sinh lỗi `NullReferenceException` liên quan đến Animator.
6. Ghi lại bằng ảnh hoặc video ngắn chuỗi `Idle → Dance → Idle`.

## 5. Tiêu chí chấm

| Tiêu chí | Điểm tối đa | Bằng chứng |
| --- | ---: | --- |
| Tổ chức asset rõ ràng | 15 | Cây thư mục Project |
| Nhập và hiển thị model/texture đúng | 20 | Scene/Inspector |
| Avatar và hai animation hợp lệ | 20 | FBX Import Settings |
| State machine, Trigger và Exit Time chính xác | 20 | Animator Window |
| Script input hoạt động và không lỗi | 15 | Play Mode, Console |
| Kiểm thử có ghi nhận kết quả | 10 | Bảng test và minh họa |
| **Tổng** | **100** | |

## 6. Checklist nộp bài

- [ ] Project/scene chạy được.
- [ ] Có hai file FBX chức năng khác nhau.
- [ ] Có Animator Controller và PlayerController.cs.
- [ ] Có bằng chứng Idle, Dance, rồi trở về Idle.
- [ ] Có mô tả ít nhất một lỗi từng gặp (nếu có) và cách tìm nguyên nhân.

## 7. Kết luận

Người hoàn thành bài đánh giá đã nắm được một pipeline 3D animation nhỏ nhưng đầy đủ trong Unity: asset, rig, material, animation state machine, input và kiểm thử. Đây là nền tảng kỹ thuật để bổ sung các động tác khác cho nhân vật.
