# Sơ đồ kiến trúc và luồng dữ liệu

## 1. Kiến trúc tổng quan

```mermaid
flowchart LR
  U[Người dùng] --> E[Express Router]
  E --> C[Controller]
  C <--> M[Mongoose Model]
  M <--> DB[(MongoDB)]
  C --> V[EJS View]
  V --> U
  P[public: CSS JS image] --> U
```

`Express Router` khớp phương thức và URL. `Controller` xử lý dữ liệu và ra quyết định. `Mongoose Model` tiếp cận database. `EJS View` trả HTML; `public` cung cấp tài nguyên tĩnh.

## 2. Tìm món ăn

```mermaid
sequenceDiagram
  actor U as Người dùng
  participant W as Trình duyệt
  participant R as Router
  participant C as Controller
  participant D as MongoDB
  U->>W: Nhập "mì" rồi Enter
  W->>R: GET /search?q=mì
  R->>C: searchRecipes
  C->>D: Recipe.find(filter)
  D-->>C: Danh sách công thức
  C-->>W: HTML danh sách kết quả
  W-->>U: Hiển thị món phù hợp
```

Tìm kiếm cơ bản dùng điều kiện tên món. Nếu muốn hỗ trợ tiếng Việt không dấu hoặc yêu cầu tự nhiên theo nghĩa, cần cải thiện thiết kế tìm kiếm.

## 3. Gửi công thức

```mermaid
flowchart TD
  A[Form gửi món] --> B[POST multipart]
  B --> C{Validation hợp lệ?}
  C -->|Không| E[Flash lỗi + Redirect]
  C -->|Có| F{Có ảnh?}
  F -->|Có| G[Kiểm tra chữ ký, dung lượng, tên an toàn]
  F -->|Không| H[Tạo Recipe]
  G --> H
  H --> I{Lưu DB thành công?}
  I -->|Có| J[Flash thành công + Redirect]
  I -->|Không| K[Dọn file nếu cần + Flash lỗi]
```

Khi có ảnh, server không nên chỉ tin `accept` của thẻ input; cần xác thực file độc lập ở server.
