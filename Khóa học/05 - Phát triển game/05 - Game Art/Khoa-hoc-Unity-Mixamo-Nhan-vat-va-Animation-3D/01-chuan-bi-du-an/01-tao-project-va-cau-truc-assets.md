# Bài 01 — Tạo dự án Unity 3D và tổ chức Assets

## 1. Tóm tắt

Một dự án game 3D thường chứa mô hình, animation, texture, material và mã C#. Nếu để tất cả asset trong cùng một thư mục, việc chọn đúng file FBX hoặc kiểm tra Animator rất dễ nhầm. Bài này tạo nền tảng dự án có cấu trúc rõ ràng trước khi tải nhân vật từ Mixamo.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

- Tạo một dự án Unity 3D và phân biệt `Project` với `Hierarchy`.
- Xây dựng hệ thống thư mục cho `Characters`, `Animations`, `Animators`, `Textures`, `Materials` và `Scripts`.
- Giải thích lợi ích của việc tách model, animation và texture.
- Kiểm tra vị trí các asset trong dự án.

## 3. Project, Hierarchy và Assets khác nhau thế nào?

`Project` là nơi quản lý các file cấu thành game. `Hierarchy` hiển thị các GameObject đang có trong scene, còn `Inspector` dùng để xem và chỉnh component/thuộc tính của đối tượng đang chọn. Một file FBX nằm trong `Project` sẽ chỉ trở thành nhân vật của scene khi được đưa vào `Hierarchy`.

Thư mục `Assets/` là nơi Unity nhận diện tài nguyên dự án. Tên và cách tổ chức thư mục dưới `Assets/` có thể do đội phát triển tự quy định.

## 4. Tạo dự án và thư mục

1. Mở Unity Hub, tạo dự án mới với template **3D** phù hợp bản Unity đang sử dụng.
2. Mở dự án trong Unity Editor, quan sát các cửa sổ `Project`, `Hierarchy`, `Scene`, `Game` và `Inspector`.
3. Trong cửa sổ `Project`, mở `Assets`, tạo thư mục `Mixamo`.
4. Trong `Mixamo`, tạo ba thư mục con: `Characters`, `Animations` và `Animators`.
5. Trong `Assets`, tạo `Resources`, sau đó tạo `Textures` bên trong.
6. Trong `Assets`, tạo thêm `Materials` và `Scripts`.

Cấu trúc cuối cùng:

```text
Assets/
├── Mixamo/
│   ├── Characters/    # Model nhân vật, FBX With Skin
│   ├── Animations/    # FBX chứa chuyển động bổ sung
│   └── Animators/     # Animator Controller
├── Resources/
│   └── Textures/      # Ảnh dùng làm bề mặt sàn
├── Materials/         # Material trích xuất hoặc tạo mới
└── Scripts/           # Script C# điều khiển nhân vật
```

`Resources` có cơ chế đặc biệt trong Unity dành cho tải asset lúc chạy. Quy trình này **không bắt buộc** dùng cơ chế đó, nhưng vẫn giữ tên thư mục để thuận tiện làm theo bài thực hành.

## 5. Cách đặt tên và tránh nhầm file

Nên đặt tên file theo chức năng: `AJ_NeutralIdle.fbx`, `Macarena.fbx`, `AJ.controller`, `PlayerController.cs`. Tên chỉ là ví dụ để tổ chức; khi làm thực tế có thể giữ tên file tải từ Mixamo. Điều quan trọng là không ghi đè file chứa model bằng file chỉ chứa chuyển động.

Không đổi tên các tham số Animator một cách tùy tiện sau khi viết script. Chuỗi trong `Animator.SetTrigger("MacarenaDance")` sẽ phải trùng với tham số bạn tạo trong Animator Controller.

## 6. Thực hành nhanh

- Tạo đầy đủ các thư mục và kiểm tra không có thư mục nào nằm nhầm bên ngoài `Assets`.
- Tạo scene mới và lưu lại bằng tên có ý nghĩa, chẳng hạn `MixamoDemo`.
- Quan sát sự khác nhau giữa một asset trong Project và một GameObject trong Hierarchy.

## 7. Lỗi thường gặp

| Hiện tượng | Nguyên nhân thường gặp | Cách xử lý |
| --- | --- | --- |
| Không thấy thư mục vừa tạo | Đang xem nhầm vị trí trong Project | Chọn `Assets` và mở đúng cây thư mục |
| Kéo asset vào Project nhưng không thấy trong scene | File mới chỉ được import | Kéo model từ Project vào Hierarchy/Scene |
| Nhầm FBX nhân vật và FBX animation | Cùng được để trong một thư mục | Tách `Characters` và `Animations` |

## 8. Câu hỏi ôn tập

**Câu 1.** Cửa sổ nào quản lý các file FBX của dự án?

A. `Hierarchy`  
B. `Console`  
C. `Project`  
D. `Game`

**Đáp án:** C. **Giải thích:** `Project` hiển thị asset trong `Assets/`, còn `Hierarchy` quản lý GameObject của scene.

**Câu 2.** Vì sao nên tách `Characters` và `Animations`?

A. Để Unity tự tăng tốc khung hình  
B. Để quản lý đúng model gốc và chuyển động bổ sung  
C. Vì Unity không hỗ trợ FBX cùng thư mục  
D. Để bỏ qua bước tạo Avatar

**Đáp án:** B. **Giải thích:** Mô hình gốc và FBX chỉ chứa chuyển động có vai trò khác nhau, nên tách giúp tránh chọn nhầm.

**Câu 3.** Sau khi import FBX vào Project, muốn nhân vật xuất hiện trong scene cần làm gì?

A. Kéo FBX vào `Hierarchy` hoặc `Scene`  
B. Chỉ đổi tên file  
C. Tạo một thư mục mới  
D. Nhấn `Build`

**Đáp án:** A. **Giải thích:** Import tạo asset, còn thêm vào scene tạo instance GameObject.

**Câu 4.** Tên `Resources` trong Unity có đặc điểm gì?

A. Luôn bắt buộc cho model 3D  
B. Chỉ dành cho C#  
C. Tự kích hoạt Animator  
D. Là thư mục có cơ chế tải asset riêng, nhưng bài học không cần dùng cơ chế đó

**Đáp án:** D. **Giải thích:** Asset gán trực tiếp vào Inspector không cần được tải qua `Resources.Load`.

**Câu 5.** Thư mục thích hợp để đặt `AJ.controller` là gì?

A. `Textures`  
B. `Animators`  
C. `Characters`  
D. `Scripts`

**Đáp án:** B. **Giải thích:** File controller định nghĩa hệ thống state/transition của Animator.

## 9. Tổng kết

Dự án đã có cấu trúc quản lý tài nguyên rõ ràng. Khi có FBX từ Mixamo, bạn sẽ biết file nào thuộc nhân vật, file nào chỉ chứa chuyển động, và material/texture cần được lưu ở đâu.
