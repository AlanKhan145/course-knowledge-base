# Bài 04 — Master 3D Scene Navigation

Unity Essentials · Module 1: Editor Essentials · Tutorial · Unity 6.3 LTS

Cơ bản

&#x20;30 phút

&#x20;10 XP trên Unity Learn

[Master 3D scene navigation - Unity Learn](https://images.openai.com/static-rsc-4/sdX-wt7hECfwGigda-ve4D8A6weDzZ2l1wMX7xFs4es5-Dj-M25L8-C97LLGDGTuwPdiInzfwZYLniW9QV_-PATWysmVaxMcypVxOchozpFsWEiMwTcLXHiSr9Ib18Mk6RVaUbaRBxlHPg580EYfPLzK_D8x0T41LvL0yGxivP0?purpose=inline)

[learn.unity.com](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials/tutorial/master-3d-scene-navigation?version\&utm_source=chatgpt.com)

> Chủ đề: Thành thạo điều hướng trong không gian 3D bằng Scene View, Flythrough Mode, Frame Selected, Orbit, Pan, Zoom và Orientation Gizmo.
>
> Yêu cầu đầu vào: Đã hoàn thành việc làm quen với Unity Editor và mở được project Essentials Pathway.
>
> Kết quả cuối cùng: Tìm bốn chữ số ẩn trong khu vui chơi 3D, ghép thành mã bí mật và nhập mã trong Play Mode để kích hoạt màn pháo hoa.

## 1. Tổng quan bài học

Điều hướng không gian 3D là một kỹ năng nền tảng khi phát triển trò chơi trong Unity.

Không giống việc chỉnh sửa hình ảnh 2D, khi làm việc trong môi trường 3D, người phát triển phải quan sát đối tượng từ nhiều góc độ, di chuyển góc nhìn xuyên qua môi trường và kiểm tra những vị trí có thể bị che khuất.

Ví dụ, để đặt một nhân vật lên chiếc cầu trong Scene, cần có khả năng:

- Quan sát chiếc cầu từ trên xuống.
- Xác định khoảng cách giữa nhân vật và mặt cầu.
- Xoay góc nhìn sang bên cạnh để kiểm tra độ cao.
- Phóng to để điều chỉnh vị trí chính xác.
- Di chuyển đến khu vực khác mà không làm thay đổi vị trí của các GameObject.

Những thao tác này được thực hiện chủ yếu bằng Scene Camera, là camera phục vụ biên tập bên trong Scene View.

Trong bài học, người học sẽ khám phá một sân chơi 3D (Playground) gồm bốn khu vực. Mỗi khu vực có một chữ số được giấu ở vị trí đặc biệt. Muốn tìm được đầy đủ bốn chữ số, cần kết hợp nhiều kỹ thuật điều hướng khác nhau.

### Mục tiêu học tập

Sau khi hoàn thành, người học có thể:

1. Giải thích được vai trò của Scene Camera.
2. Phân biệt điều hướng Scene View với di chuyển GameObject.
3. Sử dụng Frame Selected để tập trung vào đối tượng.
4. Thực hiện Pan, Orbit và Zoom.
5. Điều khiển Scene Camera bằng Flythrough Mode.
6. Điều chỉnh tốc độ di chuyển Camera.
7. Sử dụng Orientation Gizmo để chuyển góc nhìn.
8. Phân biệt Perspective và Orthographic.
9. Tìm kiếm những chi tiết bị che khuất trong Scene.
10. Kết hợp các thao tác để hoàn thành thử thách tìm mã bí mật.

Bài tập tìm bốn chữ số là hoạt động chính của tutorial Master 3D scene navigation dành cho Unity 6.3.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



## 2. Kiến thức nền tảng về điều hướng 3D

### 2.1. Scene Camera là gì?

Trong Unity Editor, Scene Camera là camera dùng để quan sát không gian làm việc trong Scene View.

Scene Camera không nhất thiết là một GameObject được lưu trong Scene. Nó phục vụ quá trình biên tập và cho phép người phát triển tự do thay đổi góc nhìn.

Cần phân biệt:

| Tiêu chí          | Scene Camera                               | Main Camera                              |
| ----------------- | ------------------------------------------ | ---------------------------------------- |
| Mục đích          | Quan sát, chỉnh sửa Scene                  | Tạo hình ảnh cho trò chơi                |
| Hoạt động trong   | Scene View                                 | Game View                                |
| Điều khiển        | Các thao tác điều hướng Editor             | Transform, script hoặc hệ thống Camera   |
| Thay đổi góc nhìn | Không trực tiếp thay đổi góc nhìn gameplay | Có thể thay đổi hình ảnh gameplay        |
| Lưu trong Scene   | Không như một GameObject thông thường      | Thường là GameObject có Camera Component |

Ví dụ, khi bạn di chuyển Scene Camera để quan sát phía sau một tòa nhà, vị trí của Main Camera không tự thay đổi.

### 2.2. Ba trục tọa độ 3D

Unity sử dụng hệ tọa độ với ba trục X, Y và Z.

Minh họa hệ tọa độ 3D. Hướng chiếu trên màn hình phụ thuộc vào góc quan sát.

| Trục | Màu mặc định | Vai trò thường gặp       |
| ---- | ------------ | ------------------------ |
| X    | Đỏ           | Chiều ngang của thế giới |
| Y    | Xanh lá      | Chiều cao                |
| Z    | Xanh dương   | Chiều sâu                |

Trong Scene View, ba trục này giúp xác định hướng không gian. Tuy nhiên, di chuyển theo hướng nhìn của Camera không phải lúc nào cũng trùng với một trục tọa độ thế giới.

### 2.3. Pivot Point

Pivot Point là điểm tham chiếu mà Camera sử dụng trong một số thao tác điều hướng, đặc biệt khi Orbit quanh một đối tượng.

Ví dụ, khi lựa chọn một ngôi nhà và thực hiện Frame Selected, ngôi nhà được đưa vào vùng quan sát. Tiếp đó, Orbit cho phép xoay góc nhìn quanh điểm tập trung để quan sát các mặt của ngôi nhà.

Điểm quan trọng là Pivot phục vụ điều hướng, không đồng nghĩa với việc di chuyển ngôi nhà.

## 3. Sáu kỹ thuật điều hướng quan trọng

[Video - Camera Orbit to Fixed Track/Arc - Rendering - Epic Developer Community Forums](https://images.openai.com/static-rsc-4/57DjUJIQ-vGcFk_C6ykjYvHtT1HVx7yzMN5YUnWfKHL5ew3p6iXJGG22HT0EiKju-CMkeTcfY2jHiJvpNXrztrH1GfBtzpR2TIlB2SThxpeCsxBESDHcndBNFl2bn2WxqUzgK9Cjsjjz2JeFlbn6HF4dtP9OsODH1S8AtExKcxE?purpose=inline)

Orbit — Xoay quanh đối tượng

Thay đổi vị trí và hướng của góc nhìn quanh điểm tập trung. Phù hợp để xem mặt sau, mặt dưới hoặc các chi tiết bị che khuất.

[Camera Navigation Controls](https://images.openai.com/static-rsc-4/p2d0NkNJjfOOlw-Ip84uBF8LEXTmRRhfmZZ2Ayj2vE4h1dEwwhnLgg7VVh8w1T1I7miCGCI3ZoMJB_AReFqogpQq-McCFlum8PQx3jCLocI1y4gbpkv3oxq2WrB_R19LIcBJ5CUgmrJUpThlv285LDE_LjttzqFpttj6cH_VE3Y?purpose=inline)

Pan — Dịch chuyển khung nhìn

Dịch chuyển góc quan sát sang ngang hoặc lên xuống, thường không thay đổi hướng nhìn.

[Perception & Depth course lesson | Uxcel](https://images.openai.com/static-rsc-4/bTvH9iYVAXziJlOV7Dwr2VP2rMlkCe0VrGzyJOTXmuYoCkaDllosDBYhlcR2kS1MoR5FbBruNrORL8NhW9cwQFfNu1dMqbrXejAXMyqfOJN5H_cgNJeMMKF-86c5QBwLvFIGZ69QaDv4LovG2AVunOBUAnXenUj7arwcjOeTr28?purpose=inline)

Zoom — Phóng to, thu nhỏ

Điều chỉnh mức độ gần xa khi quan sát, giúp kiểm tra những chi tiết nhỏ trong Scene.

[The User interface of Unity 3D game engine.  | Download Scientific Diagram](https://images.openai.com/static-rsc-4/5zDbexjT5PQE2cHqa5dKrtjkIZRhNgifkbWyJTcY_CidFYSVkQiSJapuS_X8X0XCmLT3UsseqCt53xR6etRosPYzjUunFAR3yarxkKt1g9N99jsNGazafMLP1L4Gn57KT1OGtHtf5VI1Fbmjaewer1SkkYOI_o_V1PPN9bM9i_Q?purpose=inline)

Frame Selected — Tập trung vào đối tượng

Đưa GameObject được chọn vào giữa vùng quan sát, giúp tìm nhanh một đối tượng trong Scene lớn.

[Camera Overlay - Unity Learn](https://images.openai.com/static-rsc-4/I3sw9jAjFmIih16Z8oGsiY7UxdYrLNuUDGnRfzxwtGokGPWCdbY7RFMaMrWTBkiAkq-YQBY-SHbgsSTrIrwLskumGISf0Xulu65Rrpmhfb3mFeGYVRS_GWdHQM6SBwX5m-Zycf8TL1cNXkmb3u4_Xn-tX1PQKLnZuBdF5Mpny-0?purpose=inline)

Flythrough — Bay trong không gian 3D

Di chuyển Scene Camera như khi điều khiển nhân vật góc nhìn thứ nhất, bằng chuột và bàn phím.

[Master 3D scene navigation - Unity Learn](https://images.openai.com/static-rsc-4/8ubwMDoiJTLz-RBdKP8cdUZ8VadaAVEVlcDaV_4lZFsAutotk9rrB6TTeQ4KvDHIS_MDTRQ-TQX93DgU3f2Zqw2xUHgm7s45Bl23NgdRQv_iBnYK6TxZNLAMxOqzJ71RYTn0O5VRzThE_OrcSegs9GL76l05oe4CM_Wg6B7irz4?purpose=inline)

Orientation Gizmo — Định hướng Camera

Chuyển nhanh sang góc nhìn Top, Front, Left và các hướng khác; hỗ trợ chuyển Perspective và Orthographic.

Các công cụ này bổ trợ cho nhau. Chẳng hạn, khi muốn xem một chi tiết bên trong mô hình, có thể bắt đầu bằng Frame Selected, tiếp tục Zoom, sau đó sử dụng Orbit để tìm được góc quan sát phù hợp.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



## 4. Bảng phím tắt điều hướng Unity 6.3

### 4.1. Thao tác với chuột

| Thao tác              | Windows                               | macOS                                        |
| --------------------- | ------------------------------------- | -------------------------------------------- |
| View Tool             | `Q`                                   | `Q`                                          |
| Pan                   | Giữ chuột giữa và kéo                 | Giữ chuột giữa và kéo nếu có                 |
| Orbit                 | `Alt + kéo chuột trái`                | `Option + kéo chuột trái`                    |
| Zoom                  | Lăn chuột hoặc `Alt + kéo chuột phải` | Cuộn trackpad hoặc `Option + kéo chuột phải` |
| Frame Selected        | `F`                                   | `F`                                          |
| Lock View to Selected | `Shift + F`                           | `Shift + F`                                  |
| Flythrough            | Giữ chuột phải + `WASD`               | Giữ chuột phải + `WASD`                      |
| Tăng tốc              | `Shift` khi điều hướng                | `Shift` khi điều hướng                       |

Khi View Tool (`Q`) được chọn, có thể dùng chuột trái kéo để Pan.

Nếu chỉ có trackpad, Unity hỗ trợ các tổ hợp điều hướng khác như `Alt + Ctrl + kéo chuột trái` trên Windows hoặc `Option + Command + kéo chuột trái` trên macOS để Pan.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com



### 4.2. Phím trong Flythrough Mode

Sơ đồ bàn phím khi đang giữ chuột phải trong Flythrough Mode.

| Phím    | Chức năng               |
| ------- | ----------------------- |
| `W`     | Tiến về phía trước      |
| `S`     | Di chuyển lùi           |
| `A`     | Dịch chuyển sang trái   |
| `D`     | Dịch chuyển sang phải   |
| `Q`     | Hạ thấp Scene Camera    |
| `E`     | Nâng cao Scene Camera   |
| `Shift` | Tăng tốc di chuyển      |
| Chuột   | Thay đổi hướng quan sát |

Lưu ý sự khác biệt theo ngữ cảnh: khi không giữ chuột phải, `W` thường chọn Move Tool và `Q` chọn View Tool. Khi đang điều hướng trong Flythrough Mode, chúng được sử dụng để di chuyển Scene Camera.

## 5. Thực hành: Khám phá sân chơi 3D

Đây là hoạt động chính của bài học. Người học sẽ thực hiện một thử thách tìm kiếm vật thể (Scavenger Hunt) trong Playground Scene.

### 5.1. Mở Playground Scene

Trong Unity Editor:

1. Mở Project Window.
2. Tìm thư mục `_Unity Essentials`.
3. Mở thư mục `Scenes`.
4. Nhấp đúp vào Scene có tên `1_Playground_Navigation_Scene`.
5. Quan sát toàn bộ sân chơi trong Scene View.

Đường dẫn tài nguyên:

```
Assets/
└── _Unity Essentials/
    └── Scenes/
        └── 1_Playground_Navigation_Scene
```

Tên Scene được sử dụng trong tutorial Unity Essentials phiên bản 6.3.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn



### 5.2. Tìm bốn khu vực của sân chơi

Trong Hierarchy, tìm GameObject:

`Playground_Areas`

Mở rộng nhóm đối tượng. Có bốn khu vực chính:

```
Playground_Areas
├── 01_Swingset
├── 02_Picnic_Area
├── 03_Play_Structure
└── 04_Firepit
```

| Đối tượng           | Khu vực             |
| ------------------- | ------------------- |
| `01_Swingset`       | Xích đu             |
| `02_Picnic_Area`    | Khu dã ngoại        |
| `03_Play_Structure` | Công trình vui chơi |
| `04_Firepit`        | Khu vực bếp lửa     |

### 5.3. Frame từng khu vực

Lần lượt nhấp đúp vào bốn GameObject con trong Hierarchy.

Mỗi lần nhấp đúp, Scene View sẽ tập trung vào khu vực tương ứng.

Sau đó, nhấp đúp vào `Playground_Areas` để đưa toàn bộ nhóm khu vực vào vùng quan sát.

Kết quả mong đợi: Người học có thể nhanh chóng chuyển từ một khu vực cụ thể sang góc nhìn tổng thể của toàn bộ sân chơi mà không cần di chuyển thủ công qua một khoảng cách lớn.

## 6. Thực hành Flythrough Mode

### 6.1. Kích hoạt Flythrough

Flythrough Mode cho phép di chuyển Scene Camera bằng chuột và bàn phím cùng lúc.

Thực hiện:

1. Đưa con trỏ chuột vào Scene View.
2. Nhấn và giữ chuột phải.
3. Di chuyển chuột để thay đổi hướng quan sát.
4. Tiếp tục giữ chuột phải và nhấn `W`.
5. Quan sát Camera di chuyển về phía trước.
6. Thử `A`, `S`, `D` và `Q`, `E`.
7. Nhả chuột phải để kết thúc thao tác.

Nên bắt đầu bằng cách nhấn từng phím trong thời gian ngắn. Giữ phím quá lâu khi mới học có thể khiến Camera di chuyển ra xa sân chơi.

### 6.2. Điều chỉnh tốc độ Flythrough

Khi đang giữ chuột phải để di chuyển, sử dụng con lăn chuột để tăng hoặc giảm tốc độ Scene Camera.

Có thể mở View Options Overlay và điều chỉnh giá trị `Camera Speed` nếu cần.

Trong Unity 6.3, View Options là một Overlay của Scene View. Nếu không thấy, có thể mở Overlays Menu bằng phím dấu backtick (\`) trong cấu hình mặc định và tìm View Options. \<Cite ref="turn622715view0"/>

### 6.3. Khi nào nên dùng Flythrough?

Flythrough đặc biệt phù hợp với:

- Khám phá một Scene 3D rộng.
- Di chuyển từ công trình này đến công trình khác.
- Quan sát môi trường ở góc nhìn gần với người chơi.
- Tìm các chi tiết đặt phía sau hoặc bên trong đối tượng.
- Khảo sát bố cục của màn chơi.

Flythrough hoạt động trong Perspective Mode và không phải phương thức điều hướng dành cho 2D Mode.

### 6.4. Phân biệt Flythrough và Orbit

| Đặc điểm         | Flythrough                 | Orbit                                |
| ---------------- | -------------------------- | ------------------------------------ |
| Cách di chuyển   | Bay tự do                  | Xoay quanh điểm tập trung            |
| Điều khiển chính | Chuột phải + WASD          | Alt/Option + chuột trái              |
| Mục đích         | Khám phá không gian        | Kiểm tra quanh đối tượng             |
| Điểm nhìn        | Có thể thay đổi liên tục   | Giữ điểm tập trung tương đối ổn định |
| Ví dụ            | Bay từ xích đu đến bếp lửa | Quan sát mặt dưới của cầu trượt      |

\<CodeBlock language="mermaid" model_previewable> flowchart TD     A["Cần quan sát một vị trí trong Scene"] --> B{"Bạn muốn làm gì?"}     B -->|"Di chuyển đến khu vực khác"| C["Flythrough"]     B -->|"Quan sát quanh đối tượng"| D["Orbit"]     B -->|"Tập trung đối tượng"| E["Frame Selected"]     B -->|"Nhìn gần hơn"| F["Zoom"]     B -->|"Dịch chuyển khung hình"| G["Pan"] \</CodeBlock>&#x20;

## 7. Thử thách tìm bốn chữ số bí mật

### 7.1. Mục tiêu thử thách

Trong Playground Scene có bốn chữ số được giấu tại những vị trí khác nhau. Các chữ số này tạo thành một mã gồm bốn ký tự số.

Thử thách yêu cầu kết hợp những thao tác vừa học để tìm đủ chữ số.

Trước tiên, cần kiểm tra phản hồi của trò chơi khi nhập sai mã:

1. Nhấn `Play`.
2. Quan sát Game View.
3. Tìm ô nhập `Enter 4-digit code...`.
4. Nhập thử một mã gồm bốn chữ số bất kỳ.
5. Quan sát phản hồi.
6. Thoát Play Mode.

Không cần đoán mã bằng cách thử hàng loạt. Mục đích của bài học là luyện điều hướng để tìm ra các chữ số trong Scene. \<Cite ref="turn937308view1"/>

### 7.2. Chữ số thứ nhất — Swingset

\<AsyncImage query="Unity Learn Essentials playground 3D swingset scene navigation swing set" aspectRatio="16:9"/>

Kỹ thuật chính: Flythrough.

Chữ số đầu tiên được giấu phía sau thanh ngang phía trên của bộ xích đu.

Các bước:

1. Tìm khu vực `01_Swingset`.
2. Nhấp đúp để đưa xích đu vào giữa Scene View.
3. Giữ chuột phải và dùng `WASD` để tiến gần.
4. Di chuyển vòng ra phía sau xích đu.
5. Điều chỉnh góc nhìn để quan sát thanh ngang phía trên.
6. Ghi lại chữ số tìm được.

Không cần chỉnh Position hoặc Rotation của xích đu.

### 7.3. Chữ số thứ hai — Grill

\<AsyncImage query="Unity 3D barbecue picnic grill playground scene game prop" aspectRatio="16:9"/>

Kỹ thuật chính: Frame Selected và Zoom.

Chữ số thứ hai nằm bên trong vỉ nướng tại khu dã ngoại.

Các bước:

1. Di chuyển đến khu vực `02_Picnic_Area`.
2. Chọn Move Tool (`W`) khi không ở Flythrough Mode.
3. Trong Scene View, nhấp chọn Grill.
4. Đưa con trỏ vào Scene View và nhấn `F`.
5. Lặp lại `F` để quan sát cách Unity thay đổi mức Frame.
6. Lăn con lăn chuột để tiến gần vào bên trong Grill.
7. Tìm và ghi lại chữ số.

Trong Scene mẫu, việc nhấn `F` nhiều lần có thể chuyển giữa hai mức Frame gần và xa của đối tượng đang chọn.

Điều quan trọng là sử dụng Frame để tìm đúng đối tượng trước, sau đó Zoom để quan sát chi tiết. \<Cite ref="turn937308view2"/>

### 7.4. Chữ số thứ ba — Play Structure

\<AsyncImage query="3D playground slide climbing structure underside colorful Unity game environment" aspectRatio="16:9"/>

Kỹ thuật chính: Orbit.

Chữ số thứ ba nằm ở mặt dưới của công trình vui chơi.

Các bước:

1. Tìm `03_Play_Structure`.
2. Chọn công trình trong Hierarchy hoặc Scene View.
3. Nhấn `F` để Frame đối tượng.
4. Giữ `Alt + chuột trái` trên Windows, hoặc `Option + chuột trái` trên macOS.
5. Kéo chuột để Orbit quanh công trình.
6. Điều chỉnh góc nhìn xuống mặt dưới.
7. Ghi lại chữ số tìm được.

Sau khi tìm xong, tiếp tục Orbit lên phía trước công trình để luyện khả năng trở về góc quan sát dễ hiểu.

Điểm cần ghi nhớ: Orbit khác với chỉ xoay hướng nhìn bằng chuột phải. Khi Orbit, góc quan sát di chuyển quanh một điểm tập trung, nhờ đó dễ kiểm tra toàn bộ bề mặt đối tượng.

### 7.5. Chữ số thứ tư — Firepit

\<AsyncImage query="3D campfire firepit two outdoor chairs game environment stone fire pit" aspectRatio="16:9"/>

Kỹ thuật chính: Orientation Gizmo và Orthographic View.

Chữ số cuối cùng được giấu tại khu vực bếp lửa giữa hai chiếc ghế ngoài trời.

Các bước:

1. Tìm `04_Firepit`.
2. Chọn đối tượng bếp lửa.
3. Nhấn `F` để Frame.
4. Quan sát khu vực bên dưới bếp lửa.
5. Sử dụng các trục trong Orientation Gizmo để nhìn trực diện từ bên cạnh.
6. Chuyển chế độ từ Perspective sang Orthographic.
7. Thử những góc nhìn Front, Back, Left hoặc Right để làm rõ hình dạng chữ số.
8. Ghi lại chữ số cuối cùng.
9. Chuyển lại Perspective Mode.

Unity Learn hướng dẫn dùng chế độ không phối cảnh để quan sát các đường nét tạo nên chữ số bị che giấu tại Firepit. \<Cite ref="turn937308view3"/>

### 7.6. Ghi kết quả

{@body const [digits,setDigits]=DIL.useState(["","","",""])} \<box border radius="xl" padding={3} gap={3}> Bảng ghi mã bí mật \<grid columns={4} gap={2}> {#each ["Xích đu","Grill","Cầu trượt","Bếp lửa"] as name,i} \<grid-item> \<box gap={1} align="center"> \<text size="xs" color="secondary" textAlign="center">{name}\</text> \<input value={digits[i]} placeholder="?" size="lg" onChange={v=>setDigits(a=>a.map((x,j)=>j===i?v.replace(/[^0-9]/g,"").slice(0,1):x))}/> \</box> \</grid-item> {/each} \</grid> \<box background="surface-secondary" radius="md" padding={3} gap={1} align="center"> \<caption>Mã đã thu thập\</caption> \<title size="2xl" tabularNums>{digits.map(x=>x||"–").join(" ")}\</title> \</box> \<button block color="primary" variant="outline" disabled={digits.some(d=>!d)} onClick={()=>GenUI.copy(digits.join(""))}>\<icon name="copy" inline/> Sao chép mã để nhập vào Unity\</button> \</box>

Các chữ số phải được xác định trực tiếp trong project đang sử dụng. Không nên ghi một mã chưa được quan sát rồi coi như đã hoàn thành bài.

## 8. Perspective và Orthographic

### 8.1. Perspective Mode

Perspective là kiểu phép chiếu phối cảnh, khiến các đối tượng ở xa thường trông nhỏ hơn các đối tượng ở gần.

Đây là cách biểu diễn gần với trải nghiệm quan sát thế giới thực.

Ví dụ, một con đường thẳng có hai cạnh song song trong thế giới 3D có thể trông như hội tụ về một điểm ở xa.

### 8.2. Orthographic Mode

Orthographic là kiểu phép chiếu không phối cảnh.

Trong Orthographic, kích thước biểu kiến không giảm chỉ vì một đối tượng ở xa Camera hơn. Nhờ đó, chế độ này phù hợp với việc kiểm tra hình dạng và căn chỉnh đối tượng.

\<grid columns={2} gap={3}>   \<grid-item>     \<AsyncImage query="Unity scene view perspective versus orthographic 3D cubes perspective diagram" aspectRatio="4:3"/>     \*\*Perspective\*\*     \<text color="secondary" size="sm">Có phối cảnh, thuận tiện để quan sát không gian có chiều sâu.\</text>   \</grid-item>   \<grid-item>     \<AsyncImage query="orthographic projection multiple cubes same size 3D visualization diagram" aspectRatio="4:3"/>     \*\*Orthographic\*\*     \<text color="secondary" size="sm">Không có hiện tượng thu nhỏ theo khoảng cách do phối cảnh.\</text>   \</grid-item> \</grid>&#x20;

### 8.3. Sử dụng Orientation Gizmo

Trong Unity 6.3, cụm điều khiển này được tài liệu kỹ thuật gọi là Orientation Overlay, còn trong tutorial có thể được gọi là Scene View Gizmo.

Nó thường chứa một khối định hướng trung tâm và các đầu trục X, Y, Z.

Có thể:

- Chọn đầu trục để chuyển sang góc nhìn theo trục đó.
- Nhấp khối trung tâm để đổi chế độ Perspective và Orthographic.
- Nhấp chuột phải để mở menu tùy chọn góc nhìn.
- Chọn `Free` để quay lại cách nhìn tự do.
- Giữ `Shift` và nhấp khối trung tâm để trở về góc phối cảnh thuận tiện khi bị lạc hướng.

Nếu Orientation Overlay bị ẩn, có thể bật lại thông qua menu Overlays của Scene View. \<Cite ref="turn622715view1"/>

### 8.4. Trường hợp ứng dụng

| Tình huống                                   | Chế độ phù hợp       |
| -------------------------------------------- | -------------------- |
| Khám phá môi trường 3D                       | Perspective          |
| Kiểm tra bố cục tổng thể                     | Perspective          |
| Quan sát mặt trước của mô hình               | Orthographic + Front |
| Căn chỉnh vật thể từ trên xuống              | Orthographic + Top   |
| Kiểm tra các chi tiết có hình chiếu đặc biệt | Orthographic         |
| Tạo cảm giác độ sâu khi quan sát             | Perspective          |

Lưu ý thuật ngữ: Isometric là một kiểu góc nhìn trục đo, thường được sử dụng trong chế độ chiếu trực giao. Không phải mọi góc nhìn Orthographic đều là Isometric. Trong thử thách Firepit, mục đích chính là loại bỏ méo hình do phối cảnh.

## 9. Kiểm tra mã trong Play Mode

Sau khi tìm được đầy đủ bốn chữ số:

1. Nhấn `Play` trên Toolbar.
2. Mở Game View.
3. Tìm ô nhập mã bốn chữ số.
4. Nhập mã đã ghi lại.
5. Quan sát kết quả trong Scene.
6. Nếu đúng, hiệu ứng pháo hoa xuất hiện tại trung tâm sân chơi.
7. Nhấn lại nút Play để thoát Play Mode.

Mã được thiết kế liên quan tới năm Unity được thành lập, đây cũng là gợi ý để kiểm tra kết quả tìm kiếm. \<Cite ref="turn937308view3"/>

Nếu không xuất hiện hiệu ứng mong đợi, trước tiên cần kiểm tra thứ tự các chữ số theo bốn khu vực. Không nên thay đổi mã trong script hoặc chỉnh sửa Scene để bỏ qua thử thách.

## 10. Bài tập củng cố

### Bài tập A — Điều hướng cơ bản

Mục tiêu: Sử dụng các thao tác Scene Camera mà không làm thay đổi GameObject.

Thực hiện:

1. Mở Playground Scene.
2. Frame khu vực Swingset.
3. Pan sang trái và phải.
4. Zoom vào và Zoom ra.
5. Orbit quanh Swingset.
6. Nhấp đúp `Playground_Areas` để trở về góc nhìn tổng thể.

Yêu cầu kiểm chứng: Ghi lại Transform của một GameObject trước và sau bài thực hành để xác nhận không vô tình di chuyển đối tượng.

### Bài tập B — Điều hướng nâng cao

Mục tiêu: Kết hợp Flythrough và Orientation Gizmo.

Thực hiện:

1. Di chuyển bằng Flythrough qua bốn khu vực.
2. Điều chỉnh tốc độ Scene Camera.
3. Frame Firepit.
4. Chuyển góc nhìn từ Front sang Top.
5. Chuyển giữa Perspective và Orthographic.
6. Khôi phục góc nhìn Perspective ban đầu.

Yêu cầu kiểm chứng: Chụp hai ảnh của cùng một đối tượng ở chế độ Perspective và Orthographic, sau đó giải thích điểm khác biệt.

### Bài tập C — Tìm kiếm chi tiết ẩn

Tạo một Scene thực hành riêng gồm Ground và một vài khối Cube.

Đặt một Cube nhỏ phía sau hoặc dưới một Cube lớn, sau đó cố gắng tìm Cube nhỏ bằng các kỹ thuật điều hướng đã học.

Không chỉnh sửa vị trí của Cube khi đang tìm kiếm; chỉ sử dụng Scene Camera.

## 11. Lỗi thường gặp và cách khắc phục

| Hiện tượng                             | Nguyên nhân có thể                                       | Cách xử lý                                                |
| -------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------- |
| Nhấn WASD nhưng Camera không di chuyển | Chưa giữ chuột phải hoặc Scene View không được tập trung | Giữ chuột phải trong Scene View rồi thử lại               |
| Camera di chuyển quá nhanh             | Camera Speed quá cao                                     | Giảm tốc độ bằng con lăn khi Flythrough hoặc View Options |
| Không thể Orbit                        | Đang trong 2D Mode hoặc Orientation bị khóa              | Chuyển 3D và kiểm tra khóa xoay                           |
| Bị lạc khỏi sân chơi                   | Camera đã di chuyển quá xa                               | Nhấp đúp `Playground_Areas`                               |
| Không tìm thấy đối tượng               | Đối tượng nằm ngoài vùng quan sát                        | Chọn trong Hierarchy rồi nhấn `F`                         |
| Không thấy Orientation Gizmo           | Overlay bị ẩn                                            | Mở Overlays và bật Orientation                            |
| Perspective khác mong đợi              | Đang ở Orthographic                                      | Chuyển lại Perspective                                    |
| Game View không thể Flythrough         | Flythrough là thao tác của Scene View                    | Trở lại Scene View và điều hướng ở Edit Mode              |
| Vô tình di chuyển GameObject           | Kéo Move Gizmo thay vì điều khiển góc nhìn               | Undo thao tác và chọn View Tool                           |
| Mã bốn chữ số không đúng               | Thiếu hoặc sai thứ tự chữ số                             | Kiểm tra lại từng khu vực                                 |

### Quy trình debug điều hướng

\<CodeBlock language="mermaid" model_previewable> flowchart TD     A["Không điều hướng được"] --> B{"Đang ở cửa sổ nào?"}     B -->|"Game View"| C["Chuyển Scene View"]     B -->|"Scene View"| D{"Chế độ quan sát?"}     D -->|"2D / Orthographic"| E["Chuyển Perspective"]     D -->|"Perspective"| F["Kiểm tra phím, chuột, tốc độ"]     C --> G["Thử lại"]     E --> G     F --> G     G --> H{"Vẫn không đúng?"}     H -->|Có| I["Frame đối tượng bằng F"]     H -->|Không| J["Tiếp tục thực hành"]     I --> J \</CodeBlock>&#x20;

Điều hướng Scene View là thao tác biên tập và thường không sinh lỗi trong Console. Vì vậy, khi không di chuyển được, cần kiểm tra trạng thái cửa sổ, chế độ chiếu và thiết bị đầu vào trước khi xem đây là lỗi của project.

## 12. Câu hỏi ôn tập trắc nghiệm

{@body const questions = [ {q:"Khi muốn di chuyển tự do trong Scene View bằng bàn phím và chuột, thao tác nào phù hợp nhất?",o:["Nhấn Play rồi dùng WASD","Giữ chuột phải và sử dụng WASD trong Scene View","Chọn Main Camera và đổi Position","Giữ Alt và chỉ lăn con lăn"],c:1,e:"Flythrough sử dụng chuột phải kết hợp WASD để điều khiển Scene Camera trong Perspective Mode."}, {q:"Bạn muốn kiểm tra mặt dưới của một công trình 3D, đồng thời luôn hướng góc nhìn về công trình. Nên dùng kỹ thuật nào?",o:["Pan","Chỉ dùng Zoom","Thay đổi Transform của công trình","Orbit"],c:3,e:"Orbit thay đổi vị trí quan sát quanh một điểm tập trung, rất phù hợp để xem mặt trên, mặt sau và mặt dưới của đối tượng."}, {q:"Một GameObject ở rất xa và khó tìm thấy trong Scene View. Cách nào nhanh nhất để tập trung vào nó?",o:["Chọn GameObject trong Hierarchy rồi nhấn F","Nhấn Play nhiều lần","Thay đổi Render Pipeline","Xóa Main Camera"],c:0,e:"Frame Selected đưa đối tượng được chọn vào vùng quan sát mà không cần tự di chuyển Camera qua một quãng đường lớn."}, {q:"Đặc điểm nổi bật của Orthographic View là gì?",o:["Luôn khiến đối tượng gần Camera lớn hơn","Chỉ hiển thị các đối tượng 2D","Không có hiện tượng thu nhỏ do phối cảnh theo khoảng cách","Tự động chỉnh sửa Scale của GameObject"],c:2,e:"Orthographic loại bỏ hiệu ứng phối cảnh, hữu ích khi kiểm tra hình dạng, mặt bên và căn chỉnh đối tượng."}, {q:"Trong thử thách Unity Essentials, để tìm chữ số nằm bên trong Grill, cách kết hợp nào hợp lý nhất?",o:["Thay đổi Rotation của Grill và nhấn Play","Frame Selected sau đó Zoom vào chi tiết","Chỉnh Scale của mọi đối tượng","Chỉ thay đổi Camera trong Game View"],c:1,e:"Frame giúp xác định đối tượng cần xem, còn Zoom giúp quan sát chi tiết bên trong Grill mà không cần thay đổi mô hình."} ]} {@body const [ans,setAns]=DIL.useState({})} {@body const [graded,setGraded]=DIL.useState(false)} \<box border radius="xl" padding={3} gap={3}> \<row align="center" justify="between"> Kiểm tra kiến thức \<text size="xs" color="secondary">{Object.keys(ans).length}/5 câu đã trả lời\</text> \</row> {#each questions as q,i} \<box key={i} gap={2}> Câu {i+1}. {q.q} \<radio-group direction="col" value={ans[i]===undefined?"":String(ans[i])} onChange={v=>{setAns(a=>({...a,[i]:Number(v)}));setGraded(false)}}> {#each q.o as opt,j} \<radio key={j} value={String(j)}>{String.fromCharCode(65+j)}. {opt}\</radio> {/each} \</radio-group> {#if graded} \<box background="surface-secondary" radius="md" padding={2} gap={1}> \<row align="center" gap={2}> \<icon name={ans[i]===q.c?"check-circle":"x-circle"} color={ans[i]===q.c?"success":"danger"}/> \<text weight="medium" color={ans[i]===q.c?"success":"danger"}>{ans[i]===q.c?"Chính xác":"Đáp án đúng: "+String.fromCharCode(65+q.c)}\</text> \</row> \<text size="sm">{q.e}\</text> \</box> {/if} \</box> {#if i\<questions.length-1} \<divider color="subtle"/> {/if} {/each} {#if graded} \<box align="center" padding={2} gap={1}> \<title size="2xl" tabularNums>{questions.filter((q,i)=>ans[i]===q.c).length}/5\</title> \<text weight="medium">Kết quả của bạn\</text> \</box> {/if} \<row justify="end"> \<button color="primary" disabled={Object.keys(ans).length!==5} onClick={()=>setGraded(true)}>Chấm điểm\</button> \<button color="secondary" variant="outline" onClick={()=>{setAns({});setGraded(false)}}>Làm lại\</button> \</row> \</box>

## 13. Checklist hoàn thành bài học

{@body const items=["Mở được 1_Playground_Navigation_Scene.","Xác định được bốn khu vực trong Playground_Areas.","Frame được một GameObject bằng phím F.","Phân biệt được Scene Camera và Main Camera.","Sử dụng được Pan trong Scene View.","Sử dụng được Orbit quanh một đối tượng.","Zoom vào và ra một đối tượng.","Di chuyển được bằng Flythrough Mode.","Điều chỉnh được tốc độ Scene Camera.","Phân biệt được Perspective và Orthographic.","Sử dụng được Orientation Gizmo.","Tìm được chữ số tại khu Swingset.","Tìm được chữ số bên trong Grill.","Tìm được chữ số dưới Play Structure.","Tìm được chữ số tại Firepit.","Nhập đúng mã và quan sát pháo hoa trong Play Mode.","Hoàn thành bài tập và ghi lại ảnh minh chứng."]} {@body const [done,setDone]=DIL.useState([])} \<box border radius="lg" padding={3} gap={2}> \<row align="center" justify="between"> Tiến độ thực hành \<text size="sm" color="secondary" tabularNums>{done.length}/{items.length}\</text> \</row> \<box height="6px" radius="full" background="surface-tertiary" clip> \<box height="100%" background="surface-inverted" radius="full" width={`$DIL2%`}/>



## 14. Tổng kết kiến thức

\#chatgpt-mermaid-\_r_1qj\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1qj\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1qj\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1qj\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1qj\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1qj\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1qj\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1qj\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1qj\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1qj\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1qj\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1qj\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1qj\_ p{margin:0;}#chatgpt-mermaid-\_r_1qj\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1qj\_ .label text,#chatgpt-mermaid-\_r_1qj\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ .node rect,#chatgpt-mermaid-\_r_1qj\_ .node circle,#chatgpt-mermaid-\_r_1qj\_ .node ellipse,#chatgpt-mermaid-\_r_1qj\_ .node polygon,#chatgpt-mermaid-\_r_1qj\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .rough-node .label text,#chatgpt-mermaid-\_r_1qj\_ .node .label text,#chatgpt-mermaid-\_r_1qj\_ .image-shape .label,#chatgpt-mermaid-\_r_1qj\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1qj\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .rough-node .label,#chatgpt-mermaid-\_r_1qj\_ .node .label,#chatgpt-mermaid-\_r_1qj\_ .image-shape .label,#chatgpt-mermaid-\_r_1qj\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1qj\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1qj\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1qj\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1qj\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1qj\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1qj\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1qj\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1qj\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1qj\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1qj\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1qj\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1qj\_ .icon-shape,#chatgpt-mermaid-\_r_1qj\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1qj\_ .icon-shape p,#chatgpt-mermaid-\_r_1qj\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1qj\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1qj\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1qj\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1qj\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1qj\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1qj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1qj\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1qj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1qj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1qj\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1qj\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1qj\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1qj\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1qj\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1qj\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1qj\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .node rect,#chatgpt-mermaid-\_r_1qj\_ .node circle,#chatgpt-mermaid-\_r_1qj\_ .node ellipse,#chatgpt-mermaid-\_r_1qj\_ .node polygon,#chatgpt-mermaid-\_r_1qj\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1qj\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1qj\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1qj\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1qj\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1qj\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Scene View NavigationFrame SelectedPan / Orbit / ZoomFlythroughOrientation GizmoTập trung đối tượngKhám phá các góc nhìnDi chuyển qua môi trường 3DPerspective / OrthographicQuan sát chi tiếtHoàn thành thử thách tìm mã

Kỹ năng cốt lõi của bài học là điều khiển Scene Camera chính xác và hiệu quả.

Khi cần di chuyển đến một khu vực khác, sử dụng Flythrough. Khi cần tìm một đối tượng, dùng Frame Selected. Khi muốn kiểm tra mặt sau hoặc mặt dưới của đối tượng, sử dụng Orbit. Khi cần quan sát chi tiết nhỏ, dùng Zoom. Khi cần loại bỏ ảnh hưởng của phối cảnh, chuyển sang Orthographic.

Khả năng kết hợp linh hoạt các thao tác này giúp việc xây dựng môi trường 3D trong Unity nhanh hơn, chính xác hơn và ít gặp khó khăn do góc nhìn.

## 15. Tài liệu tham khảo

1. [Unity Learn — Master 3D scene navigation (Unity 6.3)](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials/tutorial/master-3d-scene-navigation?version=6.3\&utm_source=chatgpt.com) — Tutorial chính thức gồm 12 bước, hoạt động tìm mã trong Playground.
2. [Unity Learn — Editor Essentials](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com) — Toàn bộ Mission Editor Essentials.
3. [Unity 6.3 Manual — Scene View Navigation](https://docs.unity3d.com/6000.3/Documentation/Manual/SceneViewNavigation.html?utm_source=chatgpt.com) — Hướng dẫn Pan, Orbit, Zoom, Flythrough và Frame Selected.
4. [Unity 6.3 Manual — Orientation Overlay](https://docs.unity3d.com/6000.3/Documentation/Manual/overlay-orientation.html?utm_source=chatgpt.com) — Hướng dẫn các góc nhìn Perspective, Orthographic và trục định hướng.
5. [Unity 6.3 Manual — Scene View](https://docs.unity3d.com/6000.3/Documentation/Manual/UsingTheSceneView.html?utm_source=chatgpt.com) — Cơ sở sử dụng Scene View.

Nội dung tiếng Việt tự biên soạn, bổ sung kiến thức nền tảng và bài tập thực hành; đối chiếu ngày 21/10/2026. Các bước của thử thách được xây dựng từ tutorial Unity 6.3, không phải bản dịch nguyên văn hoặc transcript của Unity Technologies. Các phím tắt giả định cấu hình mặc định.

Bài tiếp theo: [Bài 05 — Pass the Scene View Flying Test](https://learn.unity.com/pathway/unity-essentials/unit/editor-essentials?version=6.3\&utm_source=chatgpt.com) — Luyện Flythrough Mode thông qua thử thách bay qua các vòng trong môi trường 3D.