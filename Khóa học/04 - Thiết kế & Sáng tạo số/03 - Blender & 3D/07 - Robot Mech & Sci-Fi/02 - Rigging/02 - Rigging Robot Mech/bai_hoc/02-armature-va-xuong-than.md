# Bài 02 — Tạo Armature và khớp xoay thân

## 1. Tóm tắt bài học

Một bộ xương (`Armature`) giúp điều khiển các khối cơ khí theo những khớp có vị trí và trục quay xác định. Bài này xây dựng xương điều khiển phần thân, đặt **đầu xương** chính xác tại tâm xoay và gắn mesh thân vào xương bằng `Parent → Bone`.

## 2. Mục tiêu học tập

- Tạo `Armature` chứa xương đầu tiên.
- Phân biệt `Object Mode`, `Edit Mode` và `Pose Mode`.
- Đặt tâm xương nhờ `3D Cursor` và hình học vòng đỉnh (`edge loop`).
- Giới hạn xương chỉ được xoay theo trục hợp lý của khớp cơ khí.
- Gắn một hoặc nhiều mesh cứng vào xương và kiểm tra kết quả.

## 3. Khái niệm cốt lõi

**Armature** là đối tượng chứa các xương. Trong ví dụ robot, một xương thường điều khiển một khớp cứng hoặc một nhóm mesh chuyển động cùng nhau.

| Chế độ | Dùng khi nào? |
| --- | --- |
| `Object Mode` | Chọn và thao tác với đối tượng mesh/armature |
| `Edit Mode` | Tạo, đổi vị trí đầu/đuôi xương và thiết lập hệ xương |
| `Pose Mode` | Xoay, dịch chuyển xương để thử tư thế hoặc làm animation |

`Tab` thường đổi giữa Object/Edit; `Ctrl + Tab` dùng để chuyển vào/ra Pose Mode khi đang làm việc với armature. Có thể chọn chế độ trực tiếp trong menu Mode để tránh nhầm khi nhiều đối tượng cùng được chọn.

Xương có điểm đầu (`Head`) và điểm cuối (`Tail`). Đối với việc xoay khớp, điểm `Head` phải nằm tại tâm quay mong muốn. Đặt sai chỗ sẽ khiến mesh quay vòng quanh một điểm không đúng cấu trúc cơ khí.

## 4. Tạo và hiển thị armature

1. Nhấn `Shift + C` để đưa `3D Cursor` về gốc tọa độ và căn lại khung nhìn.
2. Nhấn `Shift + A → Armature → Single Bone`.
3. Trong `Outliner`, đặt armature vào collection chung với các bộ phận robot để dễ quản lý.
4. Mở `Object Data Properties` của armature và chọn kiểu hiển thị xương dễ quan sát, chẳng hạn `Stick`.
5. Tại `Viewport Display`, bật `In Front` để có thể thấy xương xuyên qua bề mặt mesh.

`In Front` chỉ phục vụ quan sát trong viewport; nó không làm xương biến thành một phần của hình học robot.

## 5. Đặt tâm xoay cho thân

### 5.1. Lấy tâm hình học bằng 3D Cursor

1. Trong `Object Mode`, chọn mesh thân sẽ quay quanh khớp thân/hông.
2. Nhấn `Tab` để vào `Edit Mode` của mesh.
3. Chuyển sang chọn đỉnh hoặc cạnh. Giữ `Alt` để chọn vòng đỉnh, hoặc `Shift + Alt` để thêm vòng đỉnh ở cùng khớp.
4. Nhấn `Shift + S → Cursor to Selected`.
5. Quan sát ở `Numpad 3` (góc bên) và `Wireframe` để xác nhận `3D Cursor` nằm tại tâm khớp.
6. Quay về `Object Mode`.

Lý do chọn vòng đỉnh là tâm của vùng chọn ổn định hơn việc áng chừng bằng mắt khi khớp có hình trụ hoặc hình tròn.

### 5.2. Đưa Head của xương tới tâm

1. Chọn armature và vào `Edit Mode`.
2. Chỉ chọn đầu xương (`Head`), không chọn toàn bộ xương.
3. Nhấn `Shift + S → Selection to Cursor` để đặt `Head` tại vị trí `3D Cursor`.
4. Chuyển sang góc bên bằng `Numpad 3`.
5. Đặt `Pivot Point = 3D Cursor`, xoay xương bằng `R` khoảng một góc vuông để nó hướng ngang, rồi điều chỉnh độ dài bằng cách di chuyển `Tail`.
6. Đổi lại `Pivot Point = Median Point` khi đã căn xong, để các lần xoay thử về sau không vô tình dùng tâm con trỏ.

Trong ví dụ này, xương thân có thể hướng về phía trước robot; giá trị góc cụ thể phụ thuộc hướng model, quan trọng nhất là `Head` nằm đúng tâm khớp.

## 6. Khóa các transform không hợp lệ

Chọn xương thân trong `Pose Mode`, nhấn `N → Item`. Khóa `Location` vì xương này chỉ làm nhiệm vụ xoay khớp; khóa `Scale` vì không muốn kéo giãn hình học. Giữ tự do **Rotation X**, khóa các thành phần xoay không cần thiết, gồm Y và Z (và W nếu giao diện dùng quaternion).

Kiểm tra bằng `R`: thân chỉ được xoay theo hướng đã định. Thực hiện `Alt + R` để đưa về pose ban đầu sau khi thử.

## 7. Gắn mesh thân vào xương

1. Chuyển về `Object Mode`.
2. Chọn mesh thân; chọn thêm các mesh phải quay cùng thân, chẳng hạn cụm ba lô.
3. Giữ `Shift` và chọn armature sau cùng để armature là đối tượng active.
4. Chuyển vào `Pose Mode`, chọn đúng xương thân.
5. Nhấn `Ctrl + P → Bone`.
6. Chọn xương và xoay thử bằng `R`.

Khi mesh được parent trực tiếp đến xương, các khối cứng chuyển động theo xương mà không cần biến dạng mềm theo weight paint. Đây là lựa chọn phù hợp cho nhiều chi tiết của mech.

## 8. Kiểm tra và thực hành

**Checkpoint:** xương hiện rõ xuyên mesh; `Head` nằm tại tâm; xoay X làm thân và ba lô xoay cùng nhau; không thể kéo xương thân lung tung bằng `G`.

**Bài thực hành:** tạo một xương thân trên model robot riêng, gắn hai mesh chuyển động cùng nhau, thử xoay 3 lần rồi reset pose.

**Lỗi thường gặp:** chọn nhầm `Object Mode` khi muốn chỉnh vị trí xương; gắn mesh vào armature nhưng không chọn đúng bone ở `Pose Mode`; để `Pivot Point = 3D Cursor` rồi tưởng mesh xoay sai; đặt đầu xương lệch tâm khớp.

## 9. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Chế độ nào thích hợp để thay đổi vị trí Head và Tail của xương?

A. Pose Mode  
B. Rendered View  
C. Edit Mode  
D. Object Mode  

**Đáp án: C.** Cấu trúc và rest position của xương được thay đổi trong Edit Mode.

**Câu 2.** Tại sao cần đưa Head của xương tới tâm khớp?

A. Vì xương xoay quanh đầu xương  
B. Để tăng độ phân giải texture  
C. Để nhân đôi mesh  
D. Để tạo đèn chiếu  

**Đáp án: A.** Đầu xương quyết định điểm quay của bone; đặt sai sẽ gây chuyển động lệch khớp.

**Câu 3.** Để nhìn xương ngay cả khi bị mesh che, bật thiết lập nào?

A. Use Nodes  
B. Auto Smooth  
C. Symmetrize  
D. In Front  

**Đáp án: D.** In Front giúp xương hiển thị xuyên vật thể trong viewport.

**Câu 4.** Sau khi chọn mesh rồi armature, cách gắn mesh cứng với bone cụ thể là gì?

A. Shift + A → Mesh  
B. Trong Pose Mode, chọn bone rồi Ctrl + P → Bone  
C. Ctrl + A → Scale  
D. Alt + P → Clear Parent  

**Đáp án: B.** Parent to Bone tạo quan hệ để mesh cứng đi theo bone đã chọn.

**Câu 5.** Xương thân chỉ nên xoay theo X. Thiết lập hợp lý là gì?

A. Mở tất cả Location và Scale  
B. Khóa duy nhất Rotation X  
C. Khóa Location, Scale và những trục xoay không cần thiết  
D. Chuyển sang Weight Paint  

**Đáp án: C.** Khóa các kênh không sử dụng giúp tránh pose phi vật lý.

## 10. Tổng kết

Bài học đã hoàn thành các nội dung: Tạo xương thân đúng tâm, sử dụng Edit/Pose Mode và gắn thân robot vào bone. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
