# Bài 01 — Thiết lập vùng làm việc và gán vật liệu cho cổ, cụm đèn

## 1. Tóm tắt

Một robot Mech thường không được làm từ một loại kim loại duy nhất. Vỏ ngoài sáng giúp đọc được hình dáng, phần khung tối tạo chiều sâu, còn các đèn đỏ giúp người xem nhận diện những chi tiết công nghệ. Bài học này sử dụng các material đã có để hoàn thiện vùng cổ và cụm chi tiết phía trước.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Phân biệt việc **thay material của cả object** với **gán material cho một số mặt**.
- Sử dụng `L` và `Ctrl + I` để chọn nhanh những phần hình học liên kết hoặc phần còn lại.
- Quản lý `Material Slots` và dùng `Assign` đúng thời điểm.
- Tạm ẩn các object cản trở và khôi phục khi cần.

## 3. Chuẩn bị scene

Mở model robot đã dựng hình và có ánh sáng. Kiểm tra các vật liệu `Light Metal`, `Dark Metal`, `Red Light` đang tồn tại trong file. Nếu phần đầu che cổ, chọn object đầu và nhấn `H`; thực hiện tương tự với object khác thuộc cụm đầu nếu cần. Đây là **ẩn tạm trong viewport**, không phải xóa mesh.

Trong bảng `Material Properties`, một object có thể chứa nhiều **material slot**. Mỗi slot tham chiếu tới một material; trong `Edit Mode`, các mặt được gán tới slot đang hoạt động bằng nút `Assign`.

## 4. Hai cách gán material cần phân biệt

### 4.1. Một material cho toàn bộ object

Khi một object chỉ cần một chất liệu, chọn object ở `Object Mode`, mở `Material Properties` rồi chọn material mong muốn trong slot phù hợp. Nếu object chỉ có đúng một slot sử dụng, thay material của slot đó sẽ đổi bề mặt của toàn object.

Đây là cách nhanh nhất đối với một thanh nối hoặc chi tiết chỉ cần màu tối.

### 4.2. Nhiều material trên cùng object

Khi cùng một object chứa vỏ, bu lông và đèn, hãy làm theo quy trình:

1. Chọn object và nhấn `Tab` vào `Edit Mode`.
2. Bỏ chọn các phần tử cũ bằng `Alt + A` nếu cần.
3. Dùng `L` để lấy một đảo hình học liên kết; dùng `Ctrl + I` khi muốn lấy phần còn lại.
4. Trong `Material Properties`, bấm dấu `+` để thêm slot nếu object chưa có slot phù hợp.
5. Chọn material có sẵn trong danh sách và bấm **Assign** khi các mặt mục tiêu vẫn được chọn.
6. Trở về `Object Mode`, kiểm tra bằng góc nhìn đủ rõ.

`L` chọn phần hình học liên kết dưới con trỏ. Nó đặc biệt hiệu quả khi bu lông, vòng đệm hoặc ốp được xây như những đảo mesh tách nhau trong cùng object.

## 5. Thực hành trên cổ và cụm đèn

### 5.1. Tạo phân vùng sáng–tối cho cổ

Giữ `Light Metal` trên bề mặt lớn của cổ, sau đó thêm một slot chứa `Dark Metal`. Trong `Edit Mode`, trỏ chuột vào phần cổ chính và nhấn `L`. Nếu phần đã chọn là phần cần giữ sáng, nhấn `Ctrl + I` để chọn các bộ phận khác: gân, mảnh nối và chi tiết phụ.

Chọn slot `Dark Metal` và nhấn **Assign**. Khi thoát `Edit Mode`, cổ sẽ có phần lớn sáng với chi tiết cơ khí tối. Kiểm tra thật kỹ lựa chọn trước khi đảo vùng: thao tác `Ctrl + I` chỉ hữu ích khi vùng được giữ lại và vùng cần đổi đã được xác định đúng.

### 5.2. Xử lý chi tiết chỉ có một màu

Những vòng kim loại hoặc mảnh nối cần hoàn toàn tối có thể đổi trực tiếp sang `Dark Metal`. Với chi tiết cần giữ sáng, để nguyên `Light Metal`. Sau mỗi nhóm thao tác, nhấn `H` để tạm ẩn các object đã xong; việc này giúp các cụm tiếp theo không bị che khuất.

### 5.3. Hoàn thiện đèn đỏ ở mặt trước

Chọn object chứa các chi tiết mặt trước. Đặt phần cấu trúc thông thường là `Dark Metal`. Vào `Edit Mode`, bỏ chọn hết, trỏ vào từng phần đèn và nhấn `L` để chọn các đảo đèn. Thêm một slot cho `Red Light`, chọn slot và **Assign**.

`Red Light` là material đèn đã được chuẩn bị. **Đổi Base Color sang đỏ không tự động tạo phát sáng**; để đạt hiệu ứng đèn, material ấy cần có thiết lập emissive phù hợp. Trong bài này ta tái sử dụng material đèn đã có, không xây dựng lại shader phát sáng.

## 6. Kiểm tra và xử lý lỗi

- **Bấm Assign nhưng màu không đổi:** kiểm tra có đang ở `Edit Mode`, có các mặt được chọn và slot đúng đang hoạt động hay không.
- **Cả object đổi màu:** có thể bạn đã thay material của slot duy nhất thay vì thêm slot và gán cho một số mặt.
- **L chọn quá nhiều:** các vùng mesh có thể đang nối với nhau; chuyển sang chọn mặt (`Face Select`) và chọn thủ công vùng cần đổi.
- **Mất object khỏi màn hình:** đã dùng `H`; có thể khôi phục bằng `Alt + H` trong mode thích hợp.

Nhấn `Ctrl + S` sau khi hoàn thiện nhóm cổ và đèn.

## 7. Thực hành ngắn

Hãy tạo phân vùng cho một cụm cơ khí trên model của bạn: vỏ sáng, chi tiết lõm tối và một cụm đèn đỏ. Kiểm tra rằng các mặt chỉ đổi màu ở khu vực bạn chủ động chọn, không ảnh hưởng vật thể bên cạnh.

## 8. Câu hỏi ôn tập

**Câu 1.** Một object chứa vỏ sáng và bu lông tối. Cách gán đúng là gì?

A. Thêm slot `Dark Metal`, chọn các mặt bu lông và nhấn `Assign`.  
B. Đổi tên object thành `Dark Metal`.  
C. Ẩn vỏ bằng `H` để vỏ tự đổi chất liệu.  
D. Chỉ đổi màu nền viewport.

**Đáp án:** A. **Giải thích:** `Assign` gắn slot đang chọn với các mặt được chọn trong `Edit Mode`.

**Câu 2.** Sau khi dùng `L` chọn phần vỏ lớn, thao tác nào chọn phần còn lại của mesh?

A. `Ctrl + S`.  
B. `Ctrl + I`.  
C. `Shift + D`.  
D. `Alt + H`.

**Đáp án:** B. **Giải thích:** `Ctrl + I` đảo ngược lựa chọn, phù hợp khi muốn lấy các chi tiết nhỏ còn lại.

**Câu 3.** Vì sao cần dùng `Red Light` đã có thay vì chỉ tô đỏ đèn?

A. Tên material quyết định cường độ sáng.  
B. Màu đỏ luôn là kim loại.  
C. Hiệu ứng phát sáng phụ thuộc shader, không chỉ Base Color.  
D. Mesh đèn bắt buộc tách riêng object.

**Đáp án:** C. **Giải thích:** Vật liệu phát sáng đòi hỏi cấu hình emission thích hợp.

**Câu 4.** Sau khi ẩn các object đã hoàn thiện, phím nào hiển thị lại chúng?

A. `G`.  
B. `Tab`.  
C. `L`.  
D. `Alt + H`.

**Đáp án:** D. **Giải thích:** `Alt + H` bỏ trạng thái ẩn trong ngữ cảnh mode hiện hành.

**Câu 5.** Vì sao `L` đặc biệt hữu ích với một nhóm bu lông trong cùng object?

A. Nó chọn từng đảo hình học liên kết bên dưới con trỏ.  
B. Nó tự động tạo vật liệu tối.  
C. Nó luôn chọn tất cả object trong scene.  
D. Nó tăng Metallic lên 1.

**Đáp án:** A. **Giải thích:** Công cụ Linked Selection giúp chọn nhanh từng cụm mesh rời nhau.

## 9. Tổng kết

Nền tảng của material workflow là **chọn đúng hình học trước, chọn đúng slot sau, rồi mới Assign**. Sự tương phản giữa `Light Metal`, `Dark Metal` và `Red Light` hình thành hệ phân cấp vật liệu cơ bản cho robot Mech.
