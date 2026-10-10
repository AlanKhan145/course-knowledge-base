# Bài 09 — Rig cổ, đầu và kiểm thử hoàn chỉnh

## 1. Tóm tắt bài học

Robot mech không chỉ cần chân và thân. Cổ và đầu cũng phải có trục quay độc lập nhưng đồng thời đi theo thân. Bài kết thúc khóa học bằng việc tạo hai bone `Neck`, `Head`, gắn mesh và hoàn thiện hệ phân cấp; sau đó kiểm thử một loạt chuyển động để phát hiện các lỗi parent hoặc constraint còn sót.

## 2. Mục tiêu học tập

- Căn xương cổ và đầu theo tâm hình học.
- Cấu hình cổ chỉ xoay Z, đầu chỉ xoay X trong rig đang dựng.
- Parent mesh cổ/đầu vào bone tương ứng.
- Gắn bone `Head` dưới `Neck`, và `Neck` dưới `Body`.
- Kiểm tra tổng thể rig gồm thân, hai chân, IK, hông, cổ và đầu.
- Khôi phục tư thế nghỉ và lưu file hoàn chỉnh.

## 3. Dựng xương cổ

1. Trong `Object Mode`, chọn mesh `Neck` và vào `Edit Mode`.
2. Chọn vòng đỉnh biểu diễn vị trí tâm quay cổ.
3. Nhấn `Shift + S → Cursor to Selected`.
4. Quay về `Object Mode`, chọn armature và vào `Edit Mode`.
5. Nhấn `Shift + A` để tạo bone tại con trỏ.
6. Nếu bone bị thu gọn tại một vị trí, chọn `Tail`, dùng `G` và trục phù hợp (trong ví dụ là Y) để kéo bone ra hướng nhìn thuận tiện.
7. Đổi tên bone thành `Neck` bằng `F2`.
8. Vào `Pose Mode`, khóa `Location`, `Scale` và các trục xoay ngoài **Z**.
9. Trở về `Object Mode`, chọn mesh cổ rồi armature; vào `Pose Mode`, chọn `Neck` và `Ctrl + P → Bone`.

Thử xoay `Neck` để kiểm tra mesh cổ chuyển động quanh tâm khớp, không bị lệch.

## 4. Dựng xương đầu

Vị trí xoay đầu nằm ở phần tiếp giáp đầu–cổ. Có thể lấy tâm từ các mặt của mesh cổ thay vì ước lượng trên bề mặt đầu.

1. Chọn mesh cổ, vào `Edit Mode`, chuyển sang `Face Select`.
2. Chọn hai mặt ở vị trí đối diện của khớp đầu bằng cách giữ `Shift`.
3. Nhấn `Shift + S → Cursor to Selected` để căn con trỏ giữa vùng chọn.
4. Vào `Edit Mode` của armature, nhấn `Shift + A` để tạo bone mới tại đó.
5. Đổi tên thành `Head`.
6. Chọn `Tail` và nhấn `G`, `Z` để kéo hướng bone lên trên cho dễ nhìn.
7. Trong `Pose Mode`, khóa `Location`, `Scale`; giữ **Rotation X** và khóa các trục xoay còn lại.
8. Trong `Object Mode`, chọn mesh đầu rồi armature; vào `Pose Mode`, chọn `Head`, dùng `Ctrl + P → Bone`.

Kiểm tra xoay `Head`: phần đầu phải gật/ngửa tương đối với cổ, đúng hướng khớp đã thiết kế.

## 5. Hoàn thiện hệ phân cấp đầu–cổ–thân

Nếu chỉ parent mesh vào bone, xoay `Neck` có thể chưa kéo đầu theo vì bone `Head` chưa là con của `Neck`. Khắc phục trong armature `Edit Mode`:

1. Chọn `Head`, sau đó `Shift` chọn `Neck`.
2. Nhấn `Ctrl + P → Keep Offset`.
3. Chọn `Neck`, sau đó `Shift` chọn `Body`.
4. Nhấn `Ctrl + P → Keep Offset`.
5. Sang `Pose Mode`, thử xoay lần lượt `Head`, `Neck` và `Body`.

Cấu trúc chính của robot sau khi hoàn thiện:

```text
Master Control
└── Body
    ├── Neck
    │   └── Head
    ├── Hip Rotation.R
    │   ├── Upper Leg.R → Lower Leg.R → Ankle.R → Foot.R
    │   └── Foot IK.R
    └── Hip Rotation.L
        ├── Upper Leg.L → Lower Leg.L → Ankle.L → Foot.L
        └── Foot IK.L
```

Các chi tiết tĩnh bổ sung có thể gắn dưới `Master Control` nếu cần di chuyển theo cả robot nhưng không tham gia xoay của khớp riêng.

## 6. Bài kiểm thử tích hợp

Kiểm thử lần lượt trong `Pose Mode` và quan sát cả các mesh:

| Hành động | Kết quả mong đợi |
| --- | --- |
| `R` trên `Head` | Đầu xoay quanh khớp đầu |
| `R` trên `Neck` | Cổ và đầu cùng xoay |
| `R` trên `Body` | Thân, cổ, đầu và các nhánh được parent đi theo |
| `G` trên `Foot IK.R` | Chân phải gập với chuỗi IK giới hạn |
| `G` trên `Foot IK.L` | Chân trái gập độc lập |
| `R` trên `Hip Rotation.R/.L` | Mỗi hông điều khiển đúng nhánh chân của mình |
| `R` trên `Foot IK` | Mắt cá nhận góc quay từ Copy Rotation |
| `G` hoặc `R` trên `Master Control` | Các bộ phận của toàn robot di chuyển đồng bộ |

Nếu một bộ phận không đi theo, hãy xác định nó là **mesh** hay **bone**: mesh đứng yên thường do thiếu `Parent → Bone`, còn một nhánh xương đứng yên thường do thiếu hoặc sai `bone parenting`. Nếu IK kéo cả thân, kiểm tra lại `Chain Length` và quan hệ target.

## 7. Checklist hoàn thành

- [ ] Bone thân, hông, đùi, cẳng chân, mắt cá, bàn chân, cổ và đầu đã được đặt tên rõ.
- [ ] Hai nhánh `.R` và `.L` đã có đủ bone và mesh tương ứng.
- [ ] IK của mỗi chân điều khiển đúng chuỗi và target đi theo hông.
- [ ] Copy Rotation của mắt cá lấy góc quay từ đúng `Foot IK`.
- [ ] Bộ điều khiển chính di chuyển được toàn robot, không sót mesh.
- [ ] Các bone chỉ được xoay/dịch chuyển trên những kênh đã chủ ý cho phép.
- [ ] Những bone phụ đã được ẩn trong Pose Mode nếu không cần chọn khi animate.
- [ ] Đã reset tư thế nghỉ và lưu file `.blend`.

## 8. Thực hành tổng kết

Tạo ba tư thế kiểm thử: đứng nghỉ, nâng chân phải và nâng chân trái. Trong mỗi tư thế, thử xoay cổ và đầu đồng thời, rồi di chuyển cả robot bằng `Master Control`. Sau đó chọn những bone pose đã thay đổi, nhấn `Alt + R`, `Alt + G`, `Alt + S` để trả về trạng thái nghỉ và `Ctrl + S` để lưu.

**Kết quả của khóa học:** robot mech đã có rig cho các khối cứng và những bộ điều khiển cơ bản để chuẩn bị làm animation. Quy trình tạo chu kỳ bước đi, render và biên tập video là những công việc tiếp theo, không nằm trong nội dung thực hành của bài này.

## 9. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Trong cấu hình này, bone cổ được giữ tự do xoay theo trục nào?

A. X  
B. Y  
C. Z  
D. Mọi trục  

**Đáp án: C.** Neck được giới hạn quay quanh Z theo cách thiết kế trong bài.

**Câu 2.** Nếu xoay Neck nhưng đầu đứng yên dù mesh đầu đã gắn với Head, cần kiểm tra gì?

A. Quan hệ Head là con của Neck  
B. Noise Texture của chân  
C. Camera đang bị ẩn  
D. Chain Length của chân  

**Đáp án: A.** Bone Head phải được parent dưới Neck để nhận chuyển động của cổ.

**Câu 3.** Quan hệ bone nào cho phép toàn bộ đầu và cổ đi theo thân?

A. Body là con của Head  
B. Master Control là con của Neck  
C. Head là con của Foot IK.R  
D. Neck là con của Body  

**Đáp án: D.** Neck nhận transform từ Body và Head tiếp tục nhận từ Neck.

**Câu 4.** Khi G trên Foot IK.R làm cả thân robot bị kéo theo, cần kiểm tra trước điều gì?

A. Bevel Weight  
B. IK Chain Length và hệ phân cấp target  
C. Độ phân giải Render  
D. Tên vật liệu cổ  

**Đáp án: B.** IK chain quá dài hoặc target có parent sai có thể gây ảnh hưởng lan ra những bone ngoài chân.

**Câu 5.** Bước kết thúc thích hợp sau kiểm thử tất cả các pose là gì?

A. Xóa toàn bộ armature  
B. Áp dụng All Transforms cho mọi bone đang pose  
C. Reset pose và lưu dự án  
D. Bật Rendered View rồi bỏ qua lưu file  

**Đáp án: C.** Khôi phục các giá trị pose và lưu giúp giữ bản rig sẵn sàng cho animation.

## 10. Tổng kết

Bài học đã hoàn thành các nội dung: Tạo bone Neck/Head, phân cấp, kiểm thử toàn rig và đưa về rest pose. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
