# Bài 04 — Adjust the Lights, Background, and Camera Angle

Unity Essentials · 3D Essentials · Tutorial · Unity 6.3

Chủ đề: Điều chỉnh ánh sáng, môi trường nền và góc nhìn Camera trong Scene 3D.

Tham khảo: [Unity Learn — 3D Essentials](https://learn.unity.com/pathway/unity-essentials/unit/3d-essentials?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong Unity, việc xây dựng mô hình 3D chỉ là một phần của quá trình thiết kế Scene. Để khung cảnh trở nên rõ ràng, có chiều sâu và phù hợp với phong cách trò chơi, cần điều chỉnh ba yếu tố quan trọng: ánh sáng (Lighting), môi trường nền (Background) và góc nhìn Camera.

[【Unity】官方文档学习-光照系统_unity文档-CSDN博客](https://images.openai.com/static-rsc-4/QmER4Sh6ob3vxTgrF6ngA-7nHUc_BV39JWsuTHW6glK2Q6FqF78-LDQBi8CcMFbs_83PFwFEX9hl5SzXjoL3pXCUFiMZ00iIKfEFmfeqeX_CDqnKI7JOn5HOfCNqG_bP-3lQj37vZVci54HlQET-b6gKbtt4fZKJHP5ccQK6w6o?purpose=inline)

[为虚幻开发者准备的Unity引擎指南 - 技术专栏 - Unity官方开发者社区](https://images.openai.com/static-rsc-4/rD4MUVvu_2pQBcItcCc-2py-_TT9LjBSCA3uzyNDrrdFUti-FW4mwIutxnmDQyxSg0qVlqoOCTEx2E38pR9JYyZJtlEZpGpHiG8tkpuZ9nSwdU1kNar-M3fcfkDHJR_VLzyZ14SQZRV6lStHhbuephl6mrLdNzdeX-rgYSm7N2Y?purpose=inline)

[Unity sky shader tutorial - Making a procedural animated sky in ShaderLab](https://images.openai.com/static-rsc-4/-ogh8s77WYjyrLI_qQAZKQJ8Cf5jdxPcTWMZOmpvheXxBQqfxGd-xnYlziUIkRu8ER8-JtiH0XOEUHty_UivZd_38lsiX-72l-mb1cNwEi9utVpoBqb4EqcezLytx29ZeAla0ktTQKBRd1HNqv_eWfNR4gZhT5AqQSg6oLjotZE?purpose=inline)

10

Ba yếu tố này quyết định cách người chơi nhìn thấy môi trường:

- Lighting: Làm nổi bật hình khối, tạo vùng sáng, vùng tối và bóng đổ.
- Background: Thiết lập bối cảnh phía sau các đối tượng, chẳng hạn bầu trời hoặc màu nền.
- Camera: Quyết định những đối tượng nào xuất hiện trong khung hình và chúng được quan sát từ góc độ nào.

Trong bài thực hành, chúng ta sẽ sử dụng một Scene đơn giản có sàn, các khối hộp và một số đối tượng 3D để thử nghiệm.

Kết quả cần đạt: Một Scene 3D có ánh sáng dễ quan sát, nền phù hợp và Camera được bố trí để làm nổi bật những đối tượng chính.

## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Phân biệt các loại nguồn sáng `Directional Light`, `Point Light` và `Spot Light`.
2. Điều chỉnh hướng, màu sắc, cường độ ánh sáng và bóng đổ.
3. Cấu hình Skybox hoặc Solid Color làm nền cho Camera.
4. Sắp xếp vị trí và hướng của Main Camera để tạo bố cục hợp lý.
5. Giải thích sự khác biệt giữa Realtime Lighting và Baked Lighting.
6. Nhận biết vai trò của Light Probes và Reflection Probes.
7. Kiểm tra, phát hiện và xử lý các lỗi chiếu sáng phổ biến.

## 3. Kiến thức trọng tâm

### 3.1. Hệ thống chiếu sáng trong Unity

Ánh sáng giúp người chơi nhận biết hình dạng, vật liệu, vị trí và khoảng cách giữa các vật thể trong môi trường 3D.

Một Scene thiếu ánh sáng phù hợp có thể khiến các khối hộp trông phẳng, khó phân biệt mặt trước và mặt bên, hoặc khiến nhân vật bị chìm trong nền.

Trong Unity, một nguồn sáng thường được biểu diễn bằng GameObject chứa Component `Light`.

Các thuộc tính ánh sáng được điều chỉnh trong Inspector. Tên và số lượng thuộc tính có thể khác nhau giữa Built-in Render Pipeline, URP và HDRP.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

Unity Manual



### 3.2. Các loại nguồn sáng

[Rotates a Unity directional light based on location and time. Includes time scale, and frame stepping for continuous use. · GitHub](https://images.openai.com/static-rsc-4/VRBTpk9Tkr1ya3OO8oczdO8fFoE-bD1fAtLro0Z1OU8duxwUcLME3pJ1vQW5aGYxPQol6ZkXvzW6JilwbRiGR7SH3FviIcVGZ3nzqHncRsKspmD5vi-AtqDW5u4DsRsXxvXnWk_r6Mmt6rX9qcQ4yaJDI67ik6a-2JcvWGp5yZI?purpose=inline)

Directional Light — Ánh sáng định hướng

Mô phỏng nguồn sáng ở rất xa, chẳng hạn Mặt Trời. Các tia sáng được xem là song song, nên hướng xoay của Light quan trọng hơn vị trí của nó.

Phù hợp cho ánh sáng ban ngày, ngoài trời và ánh sáng chính của toàn Scene.

[Imágenes de Contraste de luz libres de derechos | Depositphotos](https://images.openai.com/static-rsc-4/d_UkMuWFY3a3ixYZJqDvy2AC5zmOLwJBErnGsF6gxGUaoF-_MPRDgHt_NfbkuemXYzrCpf9blH-nlL4QQ70biJ7i4wA-sKDkMDeQe3GDYmUi4xvgoZKlUJlkIUBcCaegMGpRT-hC2UP6N__6s_RE90cHQ6ilj3ov4LDxspmLOmE?purpose=inline)

Point Light — Ánh sáng điểm

Phát sáng theo nhiều hướng từ một vị trí trong không gian, với phạm vi ảnh hưởng giới hạn.

Phù hợp cho bóng đèn, ngọn lửa và các nguồn sáng cục bộ.

[volumetrics - Make Volumes only visible when light overlapps it - Blender Stack Exchange](https://images.openai.com/static-rsc-4/qfG2A8TZ-vnopXHJi9ih6GD3HxZmNqHJi5vOYfsVl5E4KRiDTY9t7C2iRdvd786AcEMxmEHX6QfKhZv1MAtOEGUd2RhyTT8BLQtqXq1LrjavwdR2XqClF8aXKpgfxiGr86MSwW7pX5npSQdIVJqpnUBNnmHVOU_hN8Vrbweyp5E?purpose=inline)

Spot Light — Ánh sáng hình nón

Phát sáng theo một hướng trong vùng hình nón. Có thể điều chỉnh góc mở và phạm vi chiếu sáng.

Phù hợp cho đèn pin, đèn sân khấu hoặc đèn rọi.

Bảng so sánh:

| Loại Light  | Hướng chiếu             | Ứng dụng |
| ----------- | ----------------------- | -------- |
| Directional | Một hướng chung         | Mặt Trời |
| Point       | Nhiều hướng từ một điểm | Bóng đèn |
| Spot        | Hình nón                | Đèn pin  |

### 3.3. Các thuộc tính quan trọng của Light

Khi chọn một nguồn sáng trong Hierarchy, Inspector hiển thị Component `Light` cùng các thuộc tính điều chỉnh.

| Thuộc tính | Chức năng                                  |
| ---------- | ------------------------------------------ |
| Type       | Xác định loại nguồn sáng                   |
| Color      | Điều chỉnh màu ánh sáng                    |
| Intensity  | Điều chỉnh cường độ                        |
| Range      | Phạm vi ảnh hưởng của nguồn sáng cục bộ    |
| Spot Angle | Góc mở của Spot Light                      |
| Shadows    | Cấu hình bóng đổ                           |
| Mode       | Chọn chế độ chiếu sáng nếu pipeline hỗ trợ |

Ví dụ, với Directional Light:

- Xoay nguồn sáng có thể thay đổi hướng bóng đổ.
- Tăng Intensity có thể làm bề mặt sáng hơn.
- Chuyển ánh sáng sang màu cam tạo cảm giác ấm hơn.
- Bật Shadows giúp nhận biết chiều cao và vị trí tương đối của các vật thể.

Không phải mọi thuộc tính đều xuất hiện trên tất cả các loại nguồn sáng.

### 3.4. Background và Skybox

Background là phần nền xuất hiện ở những vùng Camera không nhìn thấy vật thể nào.

Trong Unity, hai lựa chọn cơ bản là:

Skybox

Skybox mô phỏng môi trường ở xa bao quanh Scene, chẳng hạn bầu trời hoặc một khung cảnh giả lập.

Skybox không chỉ phục vụ hiển thị. Tùy thiết lập môi trường và Render Pipeline, nó còn có thể tham gia vào tính toán ánh sáng môi trường hoặc phản xạ.

Solid Color

Thay vì hiển thị bầu trời, Camera sử dụng một màu nền cố định.

Solid Color hữu ích khi muốn tạo Scene đơn giản, kiểm tra hình khối hoặc xây dựng bố cục theo phong cách tối giản.

Trong URP, các lựa chọn này thường nằm ở mục `Environment > Background Type` của Camera. Trong Built-in Render Pipeline, thuộc tính tương ứng là `Clear Flags`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

手册: URP 的 Camera Inspector 窗口参考

+1



### 3.5. Camera và góc nhìn

Camera xác định hình ảnh được hiển thị trong Game view.

Một GameObject có thể xuất hiện rõ ràng trong Scene view nhưng không xuất hiện trong Game view nếu nằm ngoài vùng quan sát của Camera.

Các thuộc tính cơ bản:

| Thuộc tính          | Ý nghĩa                                  |
| ------------------- | ---------------------------------------- |
| Position            | Vị trí Camera                            |
| Rotation            | Hướng Camera nhìn                        |
| Field of View       | Góc nhìn của Camera Perspective          |
| Projection          | Kiểu chiếu Perspective hoặc Orthographic |
| Near Clipping Plane | Khoảng cắt gần                           |
| Far Clipping Plane  | Khoảng cắt xa                            |

Perspective tạo cảm giác phối cảnh: vật thể ở xa thường hiển thị nhỏ hơn.

Orthographic không tạo hiệu ứng thu nhỏ theo khoảng cách như phối cảnh thông thường, phù hợp với một số trò chơi chiến thuật, bản đồ hoặc phong cách isometric.

### 3.6. Realtime Lighting và Baked Lighting

Unity hỗ trợ các phương pháp chiếu sáng khác nhau để cân bằng giữa hình ảnh và chi phí xử lý.

| Đặc điểm          | Realtime Lighting                  | Baked Lighting                                                  |
| ----------------- | ---------------------------------- | --------------------------------------------------------------- |
| Tính toán         | Trong quá trình chạy               | Tính toán trước                                                 |
| Ánh sáng thay đổi | Phù hợp                            | Không cập nhật phần ánh sáng đã bake như realtime               |
| Đối tượng tĩnh    | Hỗ trợ                             | Đặc biệt phù hợp                                                |
| Đối tượng động    | Chiếu sáng trực tiếp theo cấu hình | Có thể cần Probes và ánh sáng bổ sung                           |
| Hiệu năng         | Có chi phí tính toán lúc chạy      | Giảm một phần chi phí chiếu sáng runtime nhưng dùng thêm bộ nhớ |

Realtime Lighting phù hợp khi nguồn sáng hoặc đối tượng thay đổi theo thời gian.

Baked Lighting lưu thông tin chiếu sáng được tính toán trước, thường trong các Lightmap để hiển thị hiệu quả trên các bề mặt tĩnh.

Không phải mọi Project đều hỗ trợ các tùy chọn bake theo cùng một cách; điều này phụ thuộc Render Pipeline và thiết lập Lighting.

### 3.7. Light Probes và Reflection Probes

Hai hệ thống này hỗ trợ tăng tính nhất quán và chân thực của ánh sáng trong Scene.

Light Probes lưu các mẫu thông tin chiếu sáng tại nhiều vị trí trong không gian. Đối tượng động có thể sử dụng thông tin nội suy từ các mẫu này để nhận ánh sáng gián tiếp phù hợp với môi trường đã bake.

Reflection Probes thu thập thông tin môi trường để tạo phản xạ trên những vật liệu thích hợp, đặc biệt là vật liệu có bề mặt bóng hoặc kim loại.

Light Probes không thay thế hoàn toàn ánh sáng realtime, còn Reflection Probes không phải hệ thống tính mọi phản xạ vật lý chính xác trong thời gian thực.

## 4. Chuẩn bị Scene thực hành

Tạo hoặc mở Project 3D trong Unity.

Scene thực hành nên có:

- Một Plane làm mặt đất.
- Một vài Cube xếp thành tháp.
- Một Sphere hoặc đối tượng động để quan sát.
- Main Camera.
- Directional Light.

Có thể tổ chức Hierarchy như sau:

```
LightingPractice
├── Main Camera
├── Directional Light
├── Ground
├── Tower
│   ├── Block 01
│   ├── Block 02
│   ├── Block 03
│   └── Block 04
└── PhysicsBall
```

Nếu tiếp tục sử dụng tháp Prefab của bài thực hành trước, cần giữ lại Collider và Rigidbody để quan sát chuyển động khi chạy Scene.

Tạo một Scene riêng có tên `LightingPractice` và lưu lại trước khi thực hiện.

## 5. Thực hành từng bước

### 5.1. Bước 1 — Quan sát ánh sáng ban đầu

Trong Hierarchy, chọn `Directional Light`.

Quan sát trong Inspector:

- Loại ánh sáng hiện tại.
- Màu ánh sáng.
- Cường độ ánh sáng.
- Thiết lập Shadows.
- Rotation trong Transform.

Chuyển sang Scene view và quan sát vị trí vùng sáng, vùng tối của các khối hộp.

Sau đó mở Game view để kiểm tra hình ảnh từ Main Camera.

Checkpoint: Xác định được ánh sáng chính đang chiếu từ hướng nào và bóng đổ xuất hiện ở đâu.

### 5.2. Bước 2 — Thay đổi hướng chiếu sáng

Chọn Directional Light và sử dụng công cụ Rotate (`E`) hoặc nhập giá trị trong Transform.

Thử xoay nguồn sáng theo những góc khác nhau.

Một số hiện tượng cần quan sát:

- Khi ánh sáng chiếu từ trên cao, bóng thường ngắn hơn.
- Khi ánh sáng có góc chiếu thấp, bóng có thể kéo dài.
- Khi xoay nguồn sáng, hướng đổ bóng thay đổi.
- Các mặt của khối hộp có thể sáng hoặc tối khác nhau.

Thay đổi từng trục Rotation để hiểu ảnh hưởng của nó tới hướng ánh sáng.

Lưu ý: Đối với Directional Light, thay đổi Position thường không làm thay đổi hướng và khoảng cách chiếu sáng theo cách Point Light hoạt động.

### 5.3. Bước 3 — Điều chỉnh Color và Intensity

Trong Component Light, tìm `Color` và `Intensity`.

Thực hiện ba lần thử:

| Lần thử | Cấu hình               | Mục đích                |
| ------- | ---------------------- | ----------------------- |
| 1       | Ánh sáng trắng         | Tạo hình ảnh trung tính |
| 2       | Ánh sáng vàng hoặc cam | Tạo cảm giác ấm         |
| 3       | Ánh sáng xanh nhạt     | Tạo cảm giác lạnh       |

Sau mỗi lần thay đổi, kiểm tra:

1. Mặt trên và mặt bên của Cube có thay đổi màu sắc không?
2. Vùng bóng tối có rõ hơn hoặc nhạt hơn không?
3. Material của đối tượng có còn dễ nhận biết không?
4. Có bề mặt nào trở nên quá sáng, mất chi tiết không?

Màu sắc quan sát được không chỉ phụ thuộc Color của Light mà còn phụ thuộc Material, ánh sáng môi trường, exposure và các thiết lập hiển thị khác.

### 5.4. Bước 4 — Kiểm tra bóng đổ

Trong Inspector của Directional Light, tìm phần `Shadows`.

Nếu nguồn sáng hoặc pipeline hỗ trợ, bật chế độ đổ bóng phù hợp.

Nhấn Play và quan sát bóng của tháp trên mặt đất.

Đảm bảo:

- Light có khả năng tạo Shadows.
- Đối tượng có Renderer và thiết lập Cast Shadows phù hợp.
- Mặt đất có khả năng nhận Shadows.
- Render Pipeline và Quality Settings cho phép hiển thị bóng đổ.

Checkpoint: Khi thay đổi góc của Directional Light, bóng của tòa tháp cũng thay đổi theo.

### 5.5. Bước 5 — Thay đổi Background

Chọn `Main Camera`.

Trong URP, tìm `Environment > Background Type`. Với Built-in Render Pipeline, tìm `Clear Flags`.

Thử hai thiết lập.

Thử nghiệm A — Skybox

Chọn Skybox để Camera hiển thị bầu trời hoặc môi trường nền được cấu hình.

Có thể mở cửa sổ Lighting theo đường dẫn:

`Window > Rendering > Lighting`

Trong phần Environment, tìm thiết lập `Skybox Material` nếu có.

Chọn Skybox phù hợp và quan sát sự thay đổi trong Game view.

Thử nghiệm B — Solid Color

Chuyển Camera sang Solid Color.

Chọn một màu đơn giản như xanh đậm hoặc xám.

Quan sát ảnh hưởng của nền tới khả năng phân biệt các đối tượng.

Khi chỉ đổi nền Camera sang Solid Color, không nên mặc định ánh sáng môi trường cũng sẽ thay đổi. Đây là hai thiết lập có liên quan nhưng không đồng nhất.

### 5.6. Bước 6 — Điều chỉnh góc Main Camera

Chọn `Main Camera` trong Hierarchy.

Dùng các công cụ Move (`W`) và Rotate (`E`) để điều chỉnh vị trí cùng hướng nhìn.

Mục tiêu là đưa toàn bộ tòa tháp và phần mặt đất cần thiết vào khung hình.

Một phương pháp thuận tiện:

1. Trong Scene view, di chuyển đến góc quan sát mong muốn.
2. Chọn Main Camera.
3. Sử dụng `GameObject > Align With View` hoặc phím tắt `Ctrl + Shift + F` trên Windows.
4. Mở Game view để kiểm tra kết quả.
5. Điều chỉnh thêm nếu phần đỉnh hoặc chân tháp bị cắt.

Phân biệt rõ `Scene view` là góc nhìn biên tập và `Game view` là kết quả do Camera của trò chơi render.

Minh họa bố trí Camera và đối tượng

Camera quyết định bố cục, trong khi Directional Light quyết định hướng chiếu sáng.

### 5.7. Bước 7 — Thử nghiệm Field of View

Trong Inspector của Main Camera, chọn Projection là `Perspective`.

Tìm thuộc tính `Field of View`.

Thử thay đổi góc nhìn và quan sát sự khác biệt.

- FOV nhỏ: Khung nhìn hẹp hơn, đối tượng có thể trông lớn hơn khi giữ nguyên vị trí Camera.
- FOV lớn: Quan sát được vùng rộng hơn nhưng các vật thể ở gần rìa hình ảnh có thể bị biến dạng phối cảnh mạnh hơn.

Khi điều chỉnh Camera, cần chú ý không chỉ đối tượng có nằm trong khung hình hay không mà còn cả bố cục tổng thể.

Checkpoint: Game view hiển thị đầy đủ đối tượng chính, không bị cắt ngoài ý muốn và có góc nhìn phù hợp.

## 6. Thực hành nâng cao — Baked Lighting

### 6.1. Chuẩn bị đối tượng tĩnh

Baked Lighting phù hợp với những đối tượng cố định như sàn, tường hoặc các khối trang trí không di chuyển.

Chọn các đối tượng tĩnh và cấu hình chúng tham gia quá trình tính toán Global Illumination theo cách mà Render Pipeline hỗ trợ.

Không đánh dấu các khối đang sử dụng Rigidbody động là đối tượng tĩnh chỉ để tạo Lightmap.

Ví dụ:

| Đối tượng                    | Nên bake?                                  |
| ---------------------------- | ------------------------------------------ |
| Ground cố định               | Có thể                                     |
| Tường cố định                | Có thể                                     |
| Block không di chuyển        | Có thể                                     |
| PhysicsBall đang chuyển động | Không dùng như bề mặt tĩnh                 |
| Tháp có thể đổ               | Không bake trực tiếp như một tháp bất động |

### 6.2. Thực hiện Bake

Với Project hỗ trợ lightmapping:

1. Mở cửa sổ Lighting.
2. Kiểm tra Lighting Settings Asset.
3. Bật thiết lập Baked Global Illumination phù hợp.
4. Cấu hình các đối tượng và Light tham gia bake.
5. Tìm `Generate Lighting` và thực hiện bake nếu sử dụng chế độ tạo thủ công.
6. Chờ quá trình hoàn thành rồi kiểm tra Scene.

Nếu Project đã bật chế độ tự động tạo dữ liệu chiếu sáng, cách cập nhật có thể khác.

Lưu ý: Bề mặt cần có dữ liệu UV lightmap hợp lệ để lưu thông tin chiếu sáng. Với mô hình tự nhập từ Blender hoặc phần mềm 3D khác, có thể cần kiểm tra hoặc tạo UV phục vụ lightmapping.

### 6.3. Kiểm tra kết quả Bake

Sau khi bake, hãy đối chiếu hình ảnh với trước khi bake.

Quan sát:

- Bóng trên các bề mặt tĩnh.
- Các vùng sáng gián tiếp.
- Sự khác biệt giữa vật thể tĩnh và động.
- Dữ liệu lightmap có được cập nhật sau khi sửa Scene hay không.

Để so sánh hiệu năng có ý nghĩa, nên đo nhiều lần ở cùng cấu hình và kiểm tra bằng Profiler. Không thể kết luận bake luôn cho hiệu năng cao hơn trong mọi trường hợp.

## 7. Quy trình kiểm tra kết quả

\#chatgpt-mermaid-\_r_1ak\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1ak\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1ak\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1ak\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_1ak\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1ak\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1ak\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1ak\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1ak\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1ak\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ak\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ak\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1ak\_ p{margin:0;}#chatgpt-mermaid-\_r_1ak\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1ak\_ .label text,#chatgpt-mermaid-\_r_1ak\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ .node rect,#chatgpt-mermaid-\_r_1ak\_ .node circle,#chatgpt-mermaid-\_r_1ak\_ .node ellipse,#chatgpt-mermaid-\_r_1ak\_ .node polygon,#chatgpt-mermaid-\_r_1ak\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .rough-node .label text,#chatgpt-mermaid-\_r_1ak\_ .node .label text,#chatgpt-mermaid-\_r_1ak\_ .image-shape .label,#chatgpt-mermaid-\_r_1ak\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1ak\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .rough-node .label,#chatgpt-mermaid-\_r_1ak\_ .node .label,#chatgpt-mermaid-\_r_1ak\_ .image-shape .label,#chatgpt-mermaid-\_r_1ak\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1ak\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1ak\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ak\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ak\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_1ak\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1ak\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ak\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ak\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_1ak\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1ak\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_1ak\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1ak\_ .icon-shape,#chatgpt-mermaid-\_r_1ak\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_1ak\_ .icon-shape p,#chatgpt-mermaid-\_r_1ak\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_1ak\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1ak\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_1ak\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1ak\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1ak\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1ak\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1ak\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1ak\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1ak\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ak\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1ak\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1ak\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1ak\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_1ak\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1ak\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1ak\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .node rect,#chatgpt-mermaid-\_r_1ak\_ .node circle,#chatgpt-mermaid-\_r_1ak\_ .node ellipse,#chatgpt-mermaid-\_r_1ak\_ .node polygon,#chatgpt-mermaid-\_r_1ak\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1ak\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1ak\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1ak\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1ak\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_1ak\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Chuẩn bị Scene 3DThiết lập Directional LightĐiều chỉnh màu và cường độCấu hình BackgroundĐiều chỉnh Main CameraChạy Play modeHình ảnh đạt yêu cầu?Chụp ảnh và lưu SceneKiểm tra Lighting, Camera,MaterialThay đổi từng tham sốCóChưa

Quy trình này giúp kiểm tra kết quả có hệ thống. Khi phát hiện hình ảnh không phù hợp, nên xác định yếu tố gây ra vấn đề trước khi chỉnh sửa.

Mẫu ghi chép:

| Nội dung        | Ví dụ                                         |
| --------------- | --------------------------------------------- |
| Mục tiêu        | Tạo cảnh sáng rõ, có chiều sâu                |
| Dự đoán         | Xoay Light làm thay đổi hướng bóng            |
| Thiết lập       | Directional Light, Skybox, Camera Perspective |
| Kết quả thực tế | Ghi hiện tượng sau khi chạy                   |
| Minh chứng      | Ảnh Game view, Inspector                      |
| Nhận xét        | Phân tích nguyên nhân                         |

## 8. Lỗi thường gặp và cách xử lý

| Lỗi                                                   | Nguyên nhân cần kiểm tra                                       | Cách xử lý                                                 |
| ----------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| Scene quá tối                                         | Ánh sáng yếu, sai hướng, thiếu ánh sáng môi trường             | Kiểm tra Light, Ambient Lighting và exposure               |
| Không có bóng đổ                                      | Shadows bị tắt hoặc pipeline không cho phép                    | Kiểm tra Light, Renderer và Shadow Settings                |
| Game view khác Scene view                             | Camera hoặc thiết lập hiển thị khác nhau                       | Kiểm tra Main Camera, Scene Lighting và post-processing    |
| Không nhìn thấy đối tượng                             | Camera hướng sai, đối tượng ngoài khung hình                   | Kiểm tra Transform, FOV, Clipping Planes                   |
| Skybox không xuất hiện                                | Camera đang sử dụng Solid Color hoặc cấu hình Skybox chưa đúng | Kiểm tra Camera và Lighting Environment                    |
| Bake không cập nhật                                   | Dữ liệu Lighting chưa tạo lại                                  | Kiểm tra Generate Lighting và Auto Generate                |
| Lightmap bị lỗi                                       | UV lightmap không phù hợp                                      | Kiểm tra UV và Import Settings                             |
| Đối tượng động không nhận ánh sáng bake như mong muốn | Thiếu dữ liệu chiếu sáng phù hợp cho đối tượng động            | Kiểm tra Light Probes, chế độ nhận GI và ánh sáng realtime |

Khi phát hiện lỗi, thực hiện lần lượt: tái hiện lỗi, đọc Console nếu có thông báo, kiểm tra Inspector, thay đổi một thiết lập, chạy lại và so sánh.

Đặc biệt, một Scene có thể hiển thị khác nhau giữa Scene view và Game view do Camera, Lighting, Rendering Pipeline hoặc các thiết lập hậu kỳ. Không nên xem mọi khác biệt là lỗi mô hình 3D.

## 9. Bài tập củng cố

### 9.1. Bài tập cơ bản

Thiết lập một Scene có tháp hộp và ánh sáng ban ngày.

Yêu cầu:

- Có Directional Light.
- Có nền Skybox hoặc Solid Color.
- Camera nhìn rõ tháp.
- Các khối có vùng sáng và vùng tối phân biệt được.

Tiêu chí hoàn thành: Chụp ảnh Game view và giải thích vai trò của Light, Background, Camera.

### 9.2. Bài tập vận dụng

Tạo hai phiên bản ánh sáng cho cùng một Scene.

Phiên bản A: Ánh sáng trắng hoặc vàng nhẹ, mô phỏng ban ngày.

Phiên bản B: Ánh sáng lạnh hoặc cường độ thấp hơn, mô phỏng môi trường có sắc thái khác.

Giữ nguyên bố cục và các đối tượng để tập trung so sánh ảnh hưởng của ánh sáng.

### 9.3. Bài tập mở rộng

Tạo một Scene gồm vật thể tĩnh và vật thể động.

Thử bake ánh sáng cho phần môi trường tĩnh nếu Render Pipeline hỗ trợ, rồi quan sát cách đối tượng động được chiếu sáng.

Kiểm tra xem việc bổ sung Light Probes có cải thiện tính nhất quán của ánh sáng trên vật thể động trong điều kiện thử nghiệm hay không.

## 10. Tổng kết kiến thức

Ba yếu tố quan trọng nhất trong bài:

Lighting quyết định cách ánh sáng tác động lên bề mặt và tạo bóng đổ.

Background xây dựng môi trường nền, giúp Scene có màu sắc và bối cảnh phù hợp.

Camera xác định bố cục và góc quan sát mà người chơi nhìn thấy.

Baked Lighting, Light Probes và Reflection Probes là những kỹ thuật bổ sung để nâng cao chất lượng hình ảnh hoặc tối ưu chiếu sáng trong những trường hợp phù hợp.

Khi kết hợp ánh sáng, nền và Camera, người học có thể biến một Scene gồm các hình khối đơn giản thành một môi trường 3D dễ quan sát, có bố cục rõ ràng và chiều sâu thị giác.

## 11. Checklist hoàn thành

- Tạo hoặc mở được Scene 3D.
- Xác định được Main Camera và Directional Light.
- Điều chỉnh được Rotation của Directional Light.
- Thay đổi được Color và Intensity.
- Quan sát được sự thay đổi của bóng đổ.
- Thiết lập được Skybox hoặc Solid Color.
- Điều chỉnh được vị trí và góc xoay Camera.
- Đưa đối tượng chính vào khung hình Game view.
- Phân biệt được Realtime Lighting và Baked Lighting.
- Giải thích được vai trò của Light Probes và Reflection Probes.
- Kiểm tra được ít nhất một lỗi hiển thị hoặc chiếu sáng.
- Lưu Scene và ảnh minh chứng kết quả.

## 12. Câu hỏi ôn tập trắc nghiệm

Bài kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Muốn mô phỏng ánh sáng Mặt Trời chiếu lên toàn bộ Scene ngoài trời, nguồn sáng nào phù hợp nhất?

A. Point Light

B. Spot Light

C. Directional Light

D. Reflection Probe

Câu 2. Khi xoay Directional Light trong Scene, hiện tượng nào có khả năng xảy ra?

A. Hướng bóng đổ thay đổi

B. Camera tự động xoay theo

C. Mô hình tự đổi kích thước

D. Skybox bị xóa

Câu 3. Muốn hiển thị nền một màu thay vì bầu trời, nên thay đổi thiết lập nào?

A. Mass của Rigidbody

B. Box Collider

C. Spot Angle

D. Background Type hoặc Clear Flags của Camera

Câu 4. Một GameObject nhìn thấy trong Scene view nhưng không xuất hiện trong Game view. Nên kiểm tra điều gì trước?

A. Chỉ kiểm tra âm thanh

B. Vị trí, hướng nhìn và vùng quan sát của Camera

C. Tăng trọng lực

D. Xóa Directional Light

Câu 5. Khi xây dựng môi trường tĩnh cần tính toán trước ánh sáng gián tiếp, kỹ thuật nào phù hợp?

A. Chỉ tăng Field of View

B. Bật Is Trigger

C. Baked Lighting

D. Xóa tất cả Material

Chấm điểm và xem giải thích

Ghi chú phiên bản: Các thao tác được xây dựng theo các chức năng của Unity 6, với Unity 6.3 là phiên bản học tập mục tiêu. Tên thuộc tính và vị trí thiết lập có thể khác nhau tùy Built-in Render Pipeline, URP, HDRP và cấu hình Project.