# Bài 10 — Introduction to Project Management and Teamwork

Nhập môn quản lý dự án và làm việc nhóm trong Unity

Junior Programmer · Player Control · Tutorial · Unity 6.3

> Nguồn tham khảo: [Unity Learn — Player Control](https://learn.unity.com/pathway/junior-programmer/unit/player-control?version=6.3\&utm_source=chatgpt.com).
>
> Bài học được biên soạn độc lập bằng tiếng Việt, tập trung vào kỹ năng lập kế hoạch, quản lý công việc và phối hợp nhóm trong dự án Unity. Đây không phải bản dịch chính thức của Unity.

## 1. Tổng quan bài học

Khi phát triển một trò chơi bằng Unity, viết code chỉ là một phần của quá trình tạo sản phẩm. Một dự án còn cần được lên kế hoạch, phân chia nhiệm vụ, theo dõi tiến độ, kiểm thử và phối hợp giữa các thành viên.

Ví dụ, để xây dựng một trò chơi lái xe đơn giản, nhóm phát triển có thể cần thực hiện nhiều công việc: thiết kế đường đua, lập trình điều khiển xe, tạo vật cản, thiết lập camera và kiểm thử gameplay.

Nếu những công việc này không được tổ chức hợp lý, dự án dễ gặp tình trạng:

- Các thành viên làm trùng nhiệm vụ.
- Không biết tính năng nào cần hoàn thành trước.
- Thay đổi của người này ảnh hưởng đến người khác.
- Phát sinh lỗi nhưng không xác định được người phụ trách.
- Dự án chậm tiến độ dù từng thành viên đều đang làm việc.

Project Management giúp tổ chức và kiểm soát công việc, còn Teamwork giúp các thành viên phối hợp hiệu quả để cùng hoàn thành sản phẩm.

Trong Unity Junior Programmer, quản lý dự án là một kỹ năng thuộc quá trình phát triển sản phẩm tương tác thời gian thực.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://learn.unity.com\&sz=32)

Unity Learn

+1



## 2. Mục tiêu học tập

Sau khi hoàn thành bài học, người học có thể:

1. Giải thích vai trò của Project Management và Teamwork trong phát triển game.
2. Phân biệt được Project, Task, Milestone, Deliverable và Deadline.
3. Chia một dự án Unity thành các nhiệm vụ nhỏ, có kết quả kiểm chứng được.
4. Thiết lập bảng theo dõi công việc theo mô hình Kanban đơn giản.
5. Phân công nhiệm vụ và trao đổi tiến độ rõ ràng.
6. Áp dụng quy trình kiểm thử, ghi nhận lỗi và phản hồi vào dự án Unity.

## 3. Kiến thức cốt lõi

### 3.1. Project Management là gì?

Project Management (quản lý dự án) là quá trình lập kế hoạch, tổ chức, theo dõi và điều chỉnh công việc nhằm hoàn thành một sản phẩm theo các mục tiêu đã xác định.

Trong phát triển game, quản lý dự án thường cần trả lời năm câu hỏi:

| Câu hỏi | Ý nghĩa                                              |
| ------- | ---------------------------------------------------- |
| What?   | Cần xây dựng sản phẩm và tính năng gì?               |
| Why?    | Vì sao tính năng đó cần thiết?                       |
| Who?    | Ai chịu trách nhiệm?                                 |
| When?   | Khi nào cần hoàn thành?                              |
| How?    | Công việc được triển khai và kiểm chứng như thế nào? |

Ví dụ, thay vì đặt mục tiêu chung chung là "Làm một trò chơi lái xe", có thể xác định:

Mục tiêu sản phẩm: Xây dựng một prototype 3D trong đó người chơi có thể điều khiển xe, tránh vật cản và hoàn thành một lượt chơi.

Một prototype là phiên bản thử nghiệm tập trung vào các cơ chế chính, chưa cần hoàn thiện toàn bộ đồ họa và nội dung như sản phẩm cuối cùng.

### 3.2. Các thuật ngữ quan trọng

| Thuật ngữ   | Giải thích        | Ví dụ trong Unity                           |
| ----------- | ----------------- | ------------------------------------------- |
| Project     | Toàn bộ dự án     | Trò chơi lái xe 3D                          |
| Scope       | Phạm vi công việc | Di chuyển xe, vật cản, camera               |
| Task        | Nhiệm vụ cụ thể   | Viết script điều khiển xe                   |
| Milestone   | Cột mốc tiến độ   | Hoàn thành prototype chơi được              |
| Deliverable | Sản phẩm bàn giao | Unity Project hoặc bản build                |
| Deadline    | Hạn hoàn thành    | Ngày phải bàn giao nhiệm vụ                 |
| Dependency  | Sự phụ thuộc      | Kiểm thử lái xe cần có hệ thống di chuyển   |
| Stakeholder | Bên liên quan     | Người chơi thử, giảng viên, nhóm phát triển |

Một nhiệm vụ tốt nên có người phụ trách, kết quả mong đợi và tiêu chí hoàn thành. Điều này giúp giảm hiểu nhầm khi bàn giao công việc.

### 3.3. Teamwork trong phát triển game

Teamwork không chỉ là chia mỗi người một phần công việc. Các thành viên còn phải thống nhất cách thực hiện, chia sẻ thông tin và giải quyết vấn đề chung.

Một nhóm nhỏ có thể phân chia vai trò như sau:

| Vai trò       | Trách nhiệm                                     |
| ------------- | ----------------------------------------------- |
| Project Lead  | Theo dõi mục tiêu, tiến độ và vấn đề phát sinh  |
| Programmer    | Xây dựng logic gameplay bằng C#                 |
| Game Designer | Xác định luật chơi và trải nghiệm người chơi    |
| Artist        | Chuẩn bị model, material và tài nguyên hình ảnh |
| Tester        | Kiểm thử, ghi lại lỗi và xác nhận kết quả       |

Đây là cách phân chia tham khảo, không phải cấu trúc bắt buộc. Trong dự án nhỏ, một thành viên có thể đảm nhiệm nhiều vai trò.

## 4. Quy trình quản lý dự án Unity

Một dự án game có thể tổ chức theo quy trình lặp, trong đó sản phẩm được cải thiện sau mỗi vòng kiểm thử và phản hồi.

Vòng đời phát triển dự án

Phản hồi từ bước kiểm thử hoặc bàn giao có thể được đưa trở lại kế hoạch cho vòng phát triển tiếp theo.

### 4.1. Lập kế hoạch

Trước khi mở Unity Editor, cần xác định sản phẩm tối thiểu có thể chơi được.

Ví dụ, dự án Car Control Prototype có thể có các yêu cầu sau:

| Mã  | Yêu cầu            | Tiêu chí kiểm tra                           |
| --- | ------------------ | ------------------------------------------- |
| R01 | Xe di chuyển tiến  | Xe tiến khi có lệnh điều khiển              |
| R02 | Xe rẽ trái và phải | Người chơi điều khiển được hướng xe         |
| R03 | Camera theo dõi xe | Xe luôn nằm trong vùng quan sát             |
| R04 | Có vật cản         | Scene có ít nhất một vật cản                |
| R05 | Chạy thử ổn định   | Không có lỗi nghiêm trọng cản trở lượt chơi |

Các yêu cầu này tạo thành phạm vi của bản thử nghiệm. Những tính năng như chọn xe, nâng cấp động cơ hay bảng xếp hạng có thể để dành cho giai đoạn khác.

### 4.2. Phân chia nhiệm vụ

Một yêu cầu lớn cần được chia thành những Task nhỏ hơn.

Ví dụ, yêu cầu "Xe có thể di chuyển" có thể chia thành:

- Tạo `Player` GameObject.
- Tạo script điều khiển chuyển động.
- Thiết lập phương thức đọc input.
- Cấu hình tốc độ di chuyển.
- Kiểm tra hành vi khi nhấn và thả phím.

Việc chia nhỏ giúp xác định chính xác công việc nào đang hoàn thành và công việc nào còn vướng mắc.

### 4.3. Theo dõi tiến độ bằng Kanban

Kanban là cách trực quan hóa công việc bằng các trạng thái. Một bảng đơn giản có thể sử dụng ba cột: `To Do`, `In Progress` và `Done`.

To Do

Tạo vật cản

Kiểm tra va chạm

In Progress

Lập trình xe

Đang thực hiện

Done

Tạo Scene

Đã kiểm tra

Mỗi khi bắt đầu một nhiệm vụ, thẻ công việc được chuyển sang `In Progress`. Khi hoàn thành và đạt tiêu chí kiểm tra, thẻ được chuyển sang `Done`.

Các nhóm cũng có thể bổ sung trạng thái `Blocked` để đánh dấu công việc đang bị cản trở bởi lỗi hoặc sự phụ thuộc.

## 5. Phối hợp và giao tiếp trong nhóm

### 5.1. Quy tắc giao tiếp hiệu quả

Một thông báo tiến độ nên trả lời ba câu hỏi:

1. Đã hoàn thành việc gì?
2. Đang thực hiện việc gì?
3. Có vấn đề nào cần hỗ trợ không?

Ví dụ:

> Đã hoàn thành: Thiết lập điều khiển di chuyển xe.
>
> Đang thực hiện: Kiểm tra camera theo dõi nhân vật.
>
> Vấn đề: Camera bị lệch khi xe xoay, cần kiểm tra lại vị trí tương đối.

Báo cáo như vậy cụ thể hơn nhiều so với câu "Em đang làm game".

### 5.2. Quản lý thay đổi và xung đột

Khi nhiều người cùng sửa một Unity Project, có thể xảy ra trường hợp hai thành viên thay đổi cùng một scene hoặc cùng một script.

Để giảm rủi ro, nhóm nên thống nhất:

- Phạm vi file mỗi người phụ trách.
- Quy tắc đặt tên Scene, Script và GameObject.
- Cách thông báo trước khi sửa nội dung dùng chung.
- Cách kiểm thử trước khi hợp nhất thay đổi.
- Việc sử dụng hệ thống version control như Git hoặc Unity Version Control.

Version control giúp theo dõi lịch sử sửa đổi và phối hợp các thay đổi, nhưng không tự động loại bỏ mọi xung đột. Đặc biệt, các file scene và prefab của Unity có thể cần được hợp nhất cẩn thận.

## 6. Thực hành: Quản lý dự án Player Control

### 6.1. Chuẩn bị

Sử dụng một Unity Project có scene xe và đường đua đơn giản, hoặc tạo dự án mới để thực hành. Chuẩn bị thêm một bảng ghi công việc bằng Markdown, spreadsheet hoặc công cụ quản lý nhiệm vụ.

### 6.2. Bước 1 — Xác định phạm vi

Viết một mô tả ngắn cho sản phẩm:

Tên: Car Control Prototype

Mục tiêu: Người chơi điều khiển xe chạy trên đường, có thể rẽ và quan sát đường đi bằng camera.

Phạm vi: Điều khiển xe, đường đua đơn giản, camera và vật cản.

Ngoài phạm vi: Đua nhiều người, lưu thành tích trực tuyến và hệ thống nâng cấp xe.

### 6.3. Bước 2 — Tạo bảng Task

| Task                  | Người phụ trách | Trạng thái | Điều kiện hoàn thành      |
| --------------------- | --------------- | ---------- | ------------------------- |
| T01: Tạo Scene        | Thành viên A    | To Do      | Có đường đua và xe        |
| T02: Script di chuyển | Thành viên B    | To Do      | Xe tiến và rẽ được        |
| T03: Camera           | Thành viên A    | To Do      | Camera theo dõi xe        |
| T04: Vật cản          | Thành viên C    | To Do      | Có vật cản trong scene    |
| T05: Kiểm thử         | Cả nhóm         | To Do      | Các yêu cầu được xác nhận |

Nếu thực hiện một mình, người học có thể tự đảm nhiệm tất cả Task nhưng vẫn theo dõi từng trạng thái.

### 6.4. Bước 3 — Thực hiện và cập nhật

Trong quá trình phát triển, mỗi thành viên cập nhật trạng thái Task khi bắt đầu, gặp trở ngại hoặc hoàn thành.

Ví dụ, nếu script di chuyển đã chạy nhưng xe di chuyển sai hướng, Task T02 chưa nên được chuyển sang `Done`. Lỗi cần được ghi lại và kiểm tra.

### 6.5. Bước 4 — Kiểm thử và ghi nhận vấn đề

Đặt Unity Editor ở Play mode để kiểm tra từng yêu cầu.

| Kiểm thử              | Kết quả mong đợi                   |
| --------------------- | ---------------------------------- |
| Nhấn phím tiến        | Xe tiến về phía trước              |
| Nhấn phím trái        | Xe đổi hướng theo điều khiển       |
| Thả phím điều khiển   | Xe phản ứng đúng logic đã thiết kế |
| Di chuyển qua vật cản | Hành vi phù hợp thiết kế va chạm   |
| Quan sát Game view    | Camera theo dõi đúng mục tiêu      |

Với mỗi lỗi, ghi lại hiện tượng, cách tái hiện, kết quả mong đợi và kết quả thực tế.

### 6.6. Bước 5 — Tổng kết và bàn giao

Kết thúc một vòng phát triển, nhóm cần xác nhận:

- Các nhiệm vụ hoàn thành đã đạt điều kiện kiểm tra.
- Dự án mở được trên Unity Editor.
- Những lỗi chưa xử lý được liệt kê rõ ràng.
- Các thay đổi quan trọng đã được lưu bằng version control hoặc phương pháp sao lưu phù hợp.
- Có bản demo, ảnh hoặc video minh chứng kết quả.

## 7. Các vấn đề thường gặp

| Vấn đề                     | Nguyên nhân có thể       | Hướng xử lý                               |
| -------------------------- | ------------------------ | ----------------------------------------- |
| Nhiệm vụ kéo dài           | Phạm vi quá rộng         | Chia thành Task nhỏ                       |
| Thành viên làm trùng       | Phân công không rõ       | Chỉ định người chịu trách nhiệm           |
| Tính năng chưa dùng được   | Thiếu kiểm thử           | Xác lập tiêu chí hoàn thành               |
| Xung đột khi hợp nhất file | Nhiều người cùng sửa     | Phân chia phạm vi và dùng version control |
| Không rõ tiến độ           | Không cập nhật bảng Task | Báo cáo tiến độ thường xuyên              |
| Liên tục thêm tính năng    | Không kiểm soát phạm vi  | Ưu tiên yêu cầu đã thống nhất             |

Một nguyên tắc quan trọng là Done không chỉ có nghĩa là đã viết xong code. Công việc cần đạt kết quả mong đợi và được kiểm tra trước khi xác nhận hoàn thành.

## 8. Bài tập củng cố

Bài tập cơ bản: Lập một bảng Kanban cho dự án Player Control với tối thiểu năm Task. Mỗi Task phải có tên, trạng thái và tiêu chí hoàn thành.

Bài tập vận dụng: Giả sử một nhóm gồm ba người phát triển trò chơi lái xe. Hãy phân công công việc sao cho hạn chế việc hai thành viên đồng thời sửa cùng một scene hoặc script.

Bài tập mở rộng: Giả sử khi kiểm thử, xe chạy nhanh hơn dự kiến và camera theo dõi bị giật. Hãy tạo hai bug report riêng biệt, phân công người kiểm tra và cập nhật trạng thái trên bảng Kanban.

## 9. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Mục đích chính của Project Management trong dự án Unity là gì?

A. Thay thế hoàn toàn công việc lập trình C#

B. Đảm bảo mọi thành viên sử dụng cùng một máy tính

C. Tổ chức, theo dõi và điều chỉnh công việc để đạt mục tiêu dự án

D. Tự động tạo model và animation

Câu 2. Trong bảng Kanban, một Task đang được thực hiện nên đặt ở trạng thái nào?

A. In Progress

B. Done

C. Archived

D. Canceled

Câu 3. Hai thành viên cùng sửa một Unity Scene gây xung đột. Biện pháp phù hợp nhất là gì?

A. Xóa toàn bộ thay đổi của một người

B. Ngừng sử dụng scene trong dự án

C. Chỉ giữ bản sửa mới nhất mà không kiểm tra

D. Phối hợp phạm vi sửa đổi và sử dụng version control

Câu 4. Một Task lập trình nên được đánh dấu Done khi nào?

A. Ngay khi tạo file script

B. Khi đạt tiêu chí hoàn thành và được kiểm tra

C. Khi lập trình viên bắt đầu làm việc

D. Khi không còn thời gian kiểm thử

Câu 5. Một Task bị chặn do phụ thuộc vào tính năng chưa hoàn thành. Cách xử lý nào tốt nhất?

A. Ghi nhận sự phụ thuộc, báo cho người liên quan và điều chỉnh kế hoạch

B. Đánh dấu Done để bảng trông hoàn chỉnh

C. Xóa Task khỏi dự án

D. Tiếp tục mà không cần trao đổi

Chấm điểmLàm lại

## 10. Checklist hoàn thành

Tiến độ học tập

0/6 hoàn thành

Giải thích được mục đích của Project Management và Teamwork.

Phân biệt Task, Milestone và Deliverable.

Xây dựng được bảng Kanban cho một dự án Unity.

Phân chia được nhiệm vụ kèm tiêu chí hoàn thành.

Ghi nhận được lỗi và phương án xử lý.

Có kế hoạch bàn giao và kiểm thử sản phẩm.

## 11. Tổng kết

Project Management và Teamwork là những kỹ năng giúp biến một ý tưởng game thành sản phẩm có thể triển khai, kiểm thử và bàn giao.

Ba nguyên tắc quan trọng nhất là xác định rõ mục tiêu, phân chia công việc có thể kiểm chứng và duy trì giao tiếp trong suốt quá trình phát triển.

Ngay cả khi phát triển game một mình, người học vẫn nên áp dụng những nguyên tắc này để quản lý thời gian, kiểm soát phạm vi và xây dựng thói quen làm việc chuyên nghiệp.

Ghi chú phiên bản: Các nguyên tắc quản lý dự án không phụ thuộc trực tiếp vào Unity 6.3. Giao diện Editor và các công cụ cộng tác có thể thay đổi giữa các phiên bản Unity.