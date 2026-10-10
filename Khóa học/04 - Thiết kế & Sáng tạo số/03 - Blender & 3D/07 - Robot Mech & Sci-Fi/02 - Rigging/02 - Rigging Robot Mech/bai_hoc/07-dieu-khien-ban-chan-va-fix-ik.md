# Bài 07 — Giới hạn Foot IK, Copy Rotation và sửa liên kết hông

## 1. Tóm tắt bài học

Sau khi tạo IK, chân có thể gập bằng một bone đích. Tuy nhiên, bộ điều khiển còn cần giới hạn để không trượt sai trục, và phải điều khiển được cả chuyển động xoay mắt cá. Bài này thiết lập `Foot IK.R`, dùng `Copy Rotation` cho `Ankle.R`, sửa thứ bậc liên kết để xoay hông vẫn hoạt động, rồi ẩn những bone không dùng để animate trực tiếp.

## 2. Mục tiêu học tập

- Giới hạn `Foot IK.R` chỉ dịch chuyển trên Y/Z và xoay theo X.
- Tạo `Copy Rotation` cho mắt cá từ bộ điều khiển bàn chân.
- Gắn đúng mesh mắt cá và bàn chân vào bone của chúng.
- Sửa lỗi xoay hông không kéo theo chân do target IK tách khỏi hệ phân cấp.
- Ẩn bone phụ trong `Pose Mode` mà không xóa rig.

## 3. Thiết lập bộ điều khiển Foot IK.R

Vào `Pose Mode`, chọn `Foot IK.R`, mở `N → Item` và đặt giới hạn sau:

| Kênh | Thiết lập trong bài | Mục đích |
| --- | --- | --- |
| `Location X` | Khóa | Ngăn controller trượt ngang trục X |
| `Location Y`, `Location Z` | Mở | Di chuyển chân trong mặt phẳng điều khiển |
| `Rotation X` | Mở | Điều khiển góc quay mắt cá/bàn chân |
| `Rotation Y`, `Rotation Z` | Khóa | Tránh xoay ngoài hướng dự kiến |
| `Scale` | Khóa | Tránh làm biến dạng bộ điều khiển |

Thử `G` và `R`, rồi reset bằng `Alt + G`, `Alt + R` khi cần. Mục tiêu là chỉ dùng một bone để kéo chân tới vị trí mới và xoay bàn chân, thay vì thao tác nhiều bone nối tiếp.

## 4. Đồng bộ xoay mắt cá bằng Copy Rotation

`Foot IK.R` là bộ điều khiển, còn `Ankle.R` là xương của khớp thật. Khi xoay controller, muốn mắt cá nhận cùng góc xoay thì cần một `Bone Constraint` bổ sung.

1. Trong `Pose Mode`, chọn `Ankle.R`.
2. Mở `Bone Constraints Properties`.
3. Chọn `Add Bone Constraint → Copy Rotation`.
4. Đặt `Target = Armature` của robot.
5. Ở trường `Bone`, chọn `Foot IK.R`.
6. Chọn controller và dùng `R` để kiểm tra xương mắt cá nhận chuyển động xoay.

Có thể khó nhìn rõ vì bone controller và mắt cá ban đầu chồng nhau. Hãy kiểm tra đồng thời mesh đã parent và góc của các khớp thay vì chỉ nhìn đường xương.

## 5. Gắn mesh mắt cá và bàn chân

Trong `Object Mode`:

1. Chọn mesh mắt cá và armature; vào `Pose Mode`, chọn `Ankle.R` rồi `Ctrl + P → Bone`.
2. Chọn mesh bàn chân và armature; vào `Pose Mode`, chọn `Foot.R` rồi `Ctrl + P → Bone`.
3. Trên bone `Foot.R`, khóa `Location`, `Scale`, và các rotation khác X, để bàn chân chỉ gập theo trục dự kiến.
4. Kiểm tra riêng các thao tác kéo IK và xoay controller.

Phân biệt ba vai trò: `Foot IK.R` là tay nắm, `Ankle.R` nhận IK/Copy Rotation, còn `Foot.R` gắn mesh bàn chân.

## 6. Sửa lỗi phân cấp: hông xoay nhưng chân không đi theo

Một target IK đặt độc lập có thể giữ chân ở một vị trí không phù hợp khi hông xoay. Quá trình kiểm thử minh họa hai giai đoạn:

1. Thử parent `Foot IK.R` dưới `Master Control` bằng `Keep Offset` để khi di chuyển toàn robot, target cũng đi theo.
2. Tiếp tục kiểm tra xoay `Hip Rotation.R`. Nếu hông xoay nhưng chân không xoay cùng, chuyển parent của **`Foot IK.R` sang `Hip Rotation.R`** bằng `Ctrl + P → Keep Offset` trong armature `Edit Mode`.

Do `Hip Rotation.R` đã là con của `Body`, còn `Body` là con của `Master Control`, target IK vẫn đi theo toàn robot qua hệ phân cấp, đồng thời phản ứng chính xác với chuyển động xoay hông.

Cấu trúc điều khiển sau khi sửa:

```text
Master Control
└── Body
    └── Hip Rotation.R
        ├── Upper Leg.R → Lower Leg.R → Ankle.R → Foot.R
        └── Foot IK.R  (target IK, không nối vào chuỗi biến dạng)
```

`Foot IK.R` là nhánh độc lập dưới hông, không đặt nối tiếp dưới `Ankle.R`; tránh tạo quan hệ vòng lặp hoặc target bị kéo theo sai cách.

## 7. Làm gọn bộ điều khiển trong Pose Mode

Trong khi tạo animation, không nhất thiết phải thấy mọi bone phụ. Ở `Pose Mode`, chọn từng bone không dùng trực tiếp để điều khiển (các bone biến dạng/cấu trúc và `Ankle.R`) rồi nhấn `H` để ẩn. Giữ lại những bone thực sự cần chọn: `Master Control`, `Body`, `Hip Rotation.R`, `Foot IK.R` và các bone điều khiển bổ sung có vai trò trong thao tác pose.

- `H`: ẩn bone đang chọn trong chế độ hiện tại.
- `Alt + H`: hiện các bone đã bị ẩn.

Ẩn bone **không xóa** bone hoặc constraint. Khi cần sửa hệ xương, chuyển sang `Edit Mode` hoặc hiện lại bone phù hợp.

## 8. Kiểm tra, debug và thực hành

**Checkpoint:** `Foot IK.R` kéo chân trên mặt phẳng Y/Z, xoay X làm mắt cá nhận góc quay, và xoay `Hip Rotation.R` kéo cả nhánh chân lẫn IK target đi theo.

**Lỗi thường gặp:** quên parent `Foot IK.R` với hông; Copy Rotation trỏ sai bone; parent mesh bàn chân vào IK controller thay vì `Foot.R`; ẩn xương điều khiển trước khi thử pose.

**Thực hành:** thực hiện 4 động tác: nâng chân bằng IK, xoay cổ chân, xoay hông, dịch chuyển cả robot. Sau từng phép thử, reset pose và xác nhận không còn biến dạng vị trí bất thường.

## 9. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Trong cấu hình này, Foot IK.R được phép di chuyển theo trục nào?

A. X và Y  
B. X và Z  
C. Chỉ X  
D. Y và Z  

**Đáp án: D.** Controller bị khóa Location X, còn Y và Z mở để kéo chân.

**Câu 2.** Constraint nào làm mắt cá sao chép góc quay từ controller?

A. Copy Rotation  
B. Bevel  
C. Subdivision Surface  
D. Copy Location trên camera  

**Đáp án: A.** Copy Rotation chuyển góc quay từ Foot IK.R sang Ankle.R.

**Câu 3.** Khi hông xoay nhưng target IK giữ chân lại, parent Foot IK.R nên chuyển tới đâu?

A. Foot.R  
B. Ankle.R  
C. Hip Rotation.R  
D. Camera  

**Đáp án: C.** Foot IK.R cần nằm dưới xương hông trong hệ phân cấp để theo chuyển động hông.

**Câu 4.** Vì sao ẩn xương không sử dụng khi animate?

A. Để tăng số bone  
B. Để dễ chọn các controller chủ yếu trong viewport  
C. Để xóa IK constraint  
D. Để gộp armature và mesh  

**Đáp án: B.** Ẩn xương phụ giúp thao tác tạo pose rõ ràng hơn mà vẫn giữ cấu trúc rig.

**Câu 5.** Mesh bàn chân nên được parent vào bone nào?

A. Master Control  
B. Ankle.R  
C. Foot IK.R  
D. Foot.R  

**Đáp án: D.** Foot.R là xương dành cho mesh bàn chân; Foot IK.R đóng vai trò điều khiển.

## 10. Tổng kết

Bài học đã hoàn thành các nội dung: Khóa kênh Foot IK, đồng bộ xoay mắt cá, parenting đúng và ẩn các bone không dùng làm controller. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
