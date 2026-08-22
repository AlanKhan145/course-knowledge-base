# 002 — Download and Install Blender

| Thuộc tính         | Nội dung                                                        |
| ------------------ | --------------------------------------------------------------- |
| **Phần**           | 01 — Introduction to Blender                                    |
| **Thời lượng**     | 2:32                                                            |
| **Chủ đề**         | Tải xuống, cài đặt và khởi động Blender                         |
| **Mức độ**         | Nhập môn                                                        |
| **Kết quả đầu ra** | Blender được cài đặt thành công và có thể tạo/lưu file `.blend` |

---

## 1. Mục tiêu bài học

Sau bài này, người học có thể:

* [ ] Tìm đúng trang web chính thức của Blender.
* [ ] Chọn phiên bản Blender phù hợp với hệ điều hành.
* [ ] Phân biệt bản ổn định với các bản Experimental.
* [ ] Cài đặt Blender trên máy tính.
* [ ] Khởi động Blender lần đầu.
* [ ] Mở được template **General**.
* [ ] Tạo và lưu thử một file `.blend`.

---

# 2. Blender là phần mềm miễn phí

Blender là phần mềm 3D miễn phí và có thể tải trực tiếp từ trang web chính thức:

**Blender.org → Download**

Không cần mua license hoặc đăng ký tài khoản để sử dụng các chức năng cơ bản của Blender.

---

# 3. Tìm Blender trên Internet

Giảng viên khuyến nghị khi tìm kiếm nên nhập:

```text
Blender 3D
```

thay vì chỉ:

```text
Blender
```

Lý do là từ **blender** cũng có nghĩa là **máy xay sinh tố**, vì vậy tìm `Blender 3D` sẽ giúp kết quả chính xác hơn.

```text
Search Engine
     │
     ↓
"Blender 3D"
     │
     ↓
blender.org
     │
     ↓
Download Blender
```

---

# 4. Luôn ưu tiên trang web chính thức

Trang nên sử dụng là:

```text
blender.org
```

Trang tải chính thức:

```text
blender.org/download/
```

Workflow đơn giản:

```text
Google / Search Engine
        ↓
     Blender 3D
        ↓
    blender.org
        ↓
      Download
```

> Nên kiểm tra tên miền trước khi tải để tránh các trang tải phần mềm không chính thức.

---

# 5. Chọn phiên bản Blender

Trong video, phiên bản được sử dụng là:

```text
Blender 4.4
```

và tại thời điểm ghi bài, trang tải cung cấp:

```text
Blender 4.4.3
```

Nếu khi học bạn thấy Blender đã có phiên bản mới hơn thì thông thường vẫn có thể tiếp tục học.

Các chức năng cơ bản như:

* Move.
* Rotate.
* Scale.
* Modeling.
* Materials.
* Lighting.
* Animation.
* Rendering.

vẫn giữ nguyên nguyên lý sử dụng.

Tuy nhiên, giao diện hoặc vị trí một số tùy chọn có thể thay đổi nhẹ giữa các phiên bản.

---

# 6. Stable và Experimental

Blender có nhiều nhánh phiên bản khác nhau.

Có thể hình dung:

```text
Blender Versions
│
├── Stable
│   └── Dùng cho học tập / làm việc thông thường
│
├── Experimental
│   └── Thử nghiệm tính năng mới
│
└── Archive
    └── Các phiên bản Blender cũ
```

## Stable

Đây là lựa chọn nên dùng khi mới học.

Ưu điểm:

* Ổn định hơn.
* Ít lỗi hơn.
* Plugin/Add-on tương thích tốt hơn.
* Phù hợp với khóa học.
* Phù hợp cho project thực tế.

### Khuyến nghị

```text
Người mới
   ↓
Stable Version
```

---

## Experimental

Trang Blender cũng cung cấp các phiên bản thử nghiệm.

Có thể gặp:

* Alpha.
* Beta.
* Release Candidate.
* Daily Build.
* Các tính năng đang phát triển.

Workflow trên website thường tương tự:

```text
Download
   ↓
Go Experimental
   ↓
Download Blender Experimental
```

Các phiên bản này chủ yếu phục vụ:

* Thử nghiệm tính năng mới.
* Development.
* Kiểm thử.
* Báo lỗi.

Không nên sử dụng làm môi trường học chính nếu chưa có lý do cụ thể.

---

# 7. Blender Archive

Nếu cần một phiên bản cũ hơn, Blender cũng cung cấp kho lưu trữ:

```text
Current Stable
      │
      ├── Experimental
      │
      └── Archive
              ↓
        Older Versions
```

Archive hữu ích khi:

* Một project cũ yêu cầu đúng phiên bản Blender.
* Add-on chỉ hỗ trợ phiên bản nhất định.
* Tutorial sử dụng phiên bản cũ.
* Cần kiểm tra khả năng tương thích.

Tuy nhiên, với người mới:

> **Không cần tải phiên bản cũ nếu khóa học vẫn hoạt động bình thường trên bản stable hiện tại.**

---

# 8. Chọn hệ điều hành

Blender hỗ trợ các hệ điều hành chính:

| Hệ điều hành | Phiên bản                        |
| ------------ | -------------------------------- |
| Windows      | Windows Installer / Portable     |
| macOS        | Intel hoặc Apple Silicon tùy máy |
| Linux        | Linux package                    |

Quy trình cơ bản gần như giống nhau:

```text
Chọn hệ điều hành
      ↓
Download
      ↓
Installer / Package
      ↓
Install
      ↓
Launch Blender
```

---

# 9. Cài Blender trên Windows

Trong bài giảng, giảng viên sử dụng Windows.

Sau khi tải xong, mở thư mục **Downloads**.

Bạn sẽ thấy file cài đặt Blender.

Ví dụ:

```text
Downloads/
└── blender-x.x.x-windows-x64.msi
```

Sau đó chạy installer.

Quy trình:

```text
Installer
   ↓
Next
   ↓
Accept / Continue
   ↓
Next
   ↓
Install
   ↓
Finish
```

---

# 10. Quy trình cài đặt chi tiết

## Bước 1 — Mở installer

Nhấp đúp vào file cài đặt Blender vừa tải.

Ví dụ:

```text
blender-4.x.x-windows-x64.msi
```

---

## Bước 2 — Bắt đầu trình cài đặt

Chọn:

```text
Next
```

---

## Bước 3 — Xác nhận các tùy chọn

Với người mới, thông thường có thể giữ nguyên thiết lập mặc định.

```text
Default Settings
       ↓
      Next
```

---

## Bước 4 — Cài đặt

Nhấn:

```text
Install
```

Chờ quá trình cài đặt hoàn tất.

---

## Bước 5 — Hoàn thành

Khi cài đặt xong:

```text
Finish
```

Nếu xuất hiện tùy chọn như:

```text
Learn how to support Blender
```

thì đây chỉ là liên kết cung cấp thêm thông tin về cách hỗ trợ Blender Foundation.

Không bắt buộc phải bật.

---

# 11. Blender nằm ở đâu sau khi cài?

Sau khi cài đặt, Blender thường xuất hiện ở:

```text
Desktop
```

hoặc:

```text
Start Menu
```

Trên Windows có thể:

1. Nhấn phím `Windows`.
2. Gõ:

```text
Blender
```

3. Chọn ứng dụng **Blender**.

---

# 12. Có nên cài Blender bằng Steam?

Blender cũng có thể được phân phối qua các nền tảng khác, ví dụ:

```text
Steam
```

Tuy nhiên, bài học khuyến nghị:

> **Tải trực tiếp từ trang chính thức của Blender.**

Workflow được ưu tiên:

```text
blender.org
     ↓
Download
     ↓
Stable
     ↓
Install
```

Ưu điểm là bạn kiểm soát rõ phiên bản đang cài và có thể truy cập trực tiếp các phiên bản khác khi cần.

---

# 13. Khởi động Blender lần đầu

Sau khi mở Blender, bạn sẽ gặp màn hình khởi động.

Tùy phiên bản, Blender có thể yêu cầu chọn một số thiết lập lần đầu như:

* Language.
* Keymap.
* Theme.
* Select With.
* Quick Setup.

Nếu chưa có nhu cầu đặc biệt, có thể giữ thiết lập mặc định.

---

# 14. Mở template General

Tại Splash Screen, chọn:

```text
General
```

Template này tạo scene Blender mặc định.

Thông thường scene sẽ có:

```text
Collection
│
├── Camera
├── Cube
└── Light
```

Trong Viewport bạn sẽ thấy khối Cube mặc định.

---

# 15. Scene mặc định của Blender

```text
Blender General
│
├── Cube
│   └── Object mẫu
│
├── Camera
│   └── Camera render
│
└── Light
    └── Nguồn sáng
```

Đây là scene cơ bản được sử dụng trong rất nhiều tutorial Blender.

---

# 16. Kiểm tra Blender hoạt động bình thường

Sau khi mở **General**, hãy thử tương tác với Viewport.

Ví dụ:

### Chọn Cube

Click vào Cube.

### Xoay góc nhìn

Giữ:

```text
Middle Mouse Button
```

và rê chuột.

### Zoom

Dùng:

```text
Mouse Wheel
```

Nếu các thao tác này hoạt động bình thường thì Blender đã khởi động thành công.

---

# 17. Lưu file `.blend` đầu tiên

Sau khi mở template General, hãy thử lưu project.

Phím tắt:

```text
Ctrl + Shift + S
```

Lệnh này mở:

```text
Save As
```

Chọn thư mục muốn lưu.

Ví dụ:

```text
Blender_Course/
└── 01_Introduction/
```

Đặt tên:

```text
lesson_002_test.blend
```

Sau đó nhấn:

```text
Save Blender File
```

---

# 18. `Ctrl + S` và `Ctrl + Shift + S`

Hai phím tắt này có mục đích khác nhau.

| Phím               | Chức năng                         |
| ------------------ | --------------------------------- |
| `Ctrl + S`         | Lưu file hiện tại                 |
| `Ctrl + Shift + S` | Save As — lưu với tên/vị trí khác |

Khi tạo file mới lần đầu:

```text
Ctrl + Shift + S
```

Sau đó trong quá trình làm việc:

```text
Ctrl + S
```

thường xuyên.

---

# 19. Quy tắc đặt tên file

Không nên đặt những tên khó quản lý như:

```text
test.blend
test2.blend
test_final.blend
test_final2.blend
test_final_final.blend
```

Nên dùng version rõ ràng:

```text
lesson_002_v001.blend
lesson_002_v002.blend
lesson_002_v003.blend
```

Hoặc với project:

```text
fish_project_v001.blend
fish_project_v002.blend
fish_project_v003.blend
```

---

# 20. Quy trình hoàn chỉnh

```text
Internet
   ↓
Search "Blender 3D"
   ↓
blender.org
   ↓
Download
   ↓
Chọn hệ điều hành
   ↓
Chọn Stable
   ↓
Download Installer
   ↓
Run Installer
   ↓
Install
   ↓
Launch Blender
   ↓
General
   ↓
Save As
   ↓
project_v001.blend
```

---

# 21. Stable hay Experimental?

Quy tắc đơn giản:

```text
Bạn đang học Blender?
        │
        ├── Có
        │    ↓
        │  Stable
        │
        └── Không / cần test tính năng mới
             ↓
          Experimental
```

Đối với khóa học này:

> **Ưu tiên Stable.**

---

# 22. Nếu khóa học dùng phiên bản khác thì sao?

Ví dụ bài giảng sử dụng:

```text
Blender 4.4
```

nhưng bạn đang dùng một phiên bản Blender khác.

Không nhất thiết phải đổi ngay.

Trước tiên kiểm tra:

```text
Tutorial
   ↓
Thao tác có giống không?
   │
   ├── Có → tiếp tục học
   │
   └── Không
        ↓
Tìm vị trí chức năng mới
        ↓
Nếu khác quá nhiều
        ↓
Cân nhắc cài version tương ứng
```

Các nguyên tắc cốt lõi của Blender thường không thay đổi đáng kể giữa các phiên bản gần nhau.

---

# 23. Khi nào cần cài Blender phiên bản cũ?

Một số trường hợp:

### Project cũ

```text
Project Blender cũ
       ↓
Không tương thích tốt
       ↓
Cài version tương ứng
```

### Add-on cũ

```text
Add-on
   ↓
Chỉ hỗ trợ Blender X.X
   ↓
Cài đúng version
```

### Tutorial quá khác

Nếu giao diện và hệ thống công cụ thay đổi quá nhiều, có thể cài thêm phiên bản được tutorial sử dụng.

---

# 24. Có thể cài nhiều phiên bản Blender không?

Có.

Ví dụ:

```text
Computer
│
├── Blender 4.4
├── Blender 4.x
└── Blender phiên bản khác
```

Điều này hữu ích khi cần:

* Kiểm tra project.
* Test add-on.
* So sánh phiên bản.
* Làm việc với asset cũ.

Tuy nhiên người mới chỉ cần **một bản stable** để tránh phức tạp.

---

# 25. Thực hành

## Bài tập 1 — Cài Blender

Thực hiện:

```text
blender.org
   ↓
Download
   ↓
Stable
   ↓
Install
```

---

## Bài tập 2 — Mở Blender

Khởi động chương trình và chọn:

```text
General
```

Kiểm tra xem scene có:

* Cube.
* Camera.
* Light.

---

## Bài tập 3 — Lưu file đầu tiên

Nhấn:

```text
Ctrl + Shift + S
```

Lưu thành:

```text
002_install_test_v001.blend
```

---

## Bài tập 4 — Mở lại file

Đóng Blender.

Sau đó mở lại:

```text
002_install_test_v001.blend
```

Nếu Blender mở file bình thường thì quá trình cài đặt và lưu file đã hoàn thành.

---

# 26. Các lỗi thường gặp

## Không tìm thấy Blender sau khi cài

Mở Start Menu và tìm:

```text
Blender
```

---

## Tải nhầm trang

Hãy kiểm tra tên miền:

```text
blender.org
```

---

## Cài nhầm Experimental

Nếu mới học, quay lại trang Download và chọn bản ổn định.

---

## File `.blend` không mở

Kiểm tra:

* Blender đã cài hoàn chỉnh chưa.
* File có bị lỗi không.
* File được tạo bằng phiên bản Blender mới hơn quá nhiều hay không.

---

## Giao diện khác video

Nguyên nhân thường là:

```text
Khác phiên bản Blender
```

Không cần hoảng. Trước tiên hãy tìm chức năng tương ứng vì workflow cơ bản thường vẫn giống nhau.

---

# 27. Ghi nhớ nhanh

### 1. Tải Blender từ nguồn chính thức

```text
blender.org
```

### 2. Người mới ưu tiên

```text
Stable
```

thay vì:

```text
Experimental
```

### 3. Hệ điều hành khác nhau không làm thay đổi cách học Blender đáng kể

```text
Windows
macOS
Linux
   ↓
Blender
   ↓
Cùng nguyên lý sử dụng
```

### 4. Sau khi cài phải kiểm tra ngay

```text
Launch Blender
      ↓
General
      ↓
Save .blend
```

---

# 28. Checklist hoàn thành bài

## Download

* [ ] Đã truy cập đúng trang Blender chính thức.
* [ ] Biết cách tìm `Blender 3D`.
* [ ] Đã chọn đúng hệ điều hành.
* [ ] Đã chọn bản stable.
* [ ] Biết Experimental dùng để làm gì.
* [ ] Biết Blender Archive tồn tại.

## Installation

* [ ] Đã tải installer.
* [ ] Đã chạy trình cài đặt.
* [ ] Blender cài đặt thành công.
* [ ] Blender xuất hiện trong Start Menu hoặc Applications.

## Kiểm tra

* [ ] Đã mở Blender.
* [ ] Đã mở template **General**.
* [ ] Nhìn thấy Cube, Camera và Light.
* [ ] Viewport hoạt động bình thường.

## File

* [ ] Biết `Ctrl + S` dùng để lưu.
* [ ] Biết `Ctrl + Shift + S` dùng cho **Save As**.
* [ ] Đã lưu thử ít nhất một file `.blend`.
* [ ] Đã đóng và mở lại file thành công.

---

# 29. Tóm tắt bài học

```text
TÌM BLENDER
     ↓
Blender 3D
     ↓
blender.org
     ↓
DOWNLOAD
     ↓
Stable Version
     ↓
Chọn Windows / macOS / Linux
     ↓
INSTALL
     ↓
Launch Blender
     ↓
General Template
     ↓
Ctrl + Shift + S
     ↓
Lưu file .blend
```

**Ý tưởng cốt lõi của bài 002:**

> Hãy bắt đầu với một bản Blender ổn định được tải trực tiếp từ trang chính thức. Sau khi cài đặt, việc đầu tiên cần kiểm tra là Blender có thể khởi động, mở template General và lưu thành công một file `.blend`.
