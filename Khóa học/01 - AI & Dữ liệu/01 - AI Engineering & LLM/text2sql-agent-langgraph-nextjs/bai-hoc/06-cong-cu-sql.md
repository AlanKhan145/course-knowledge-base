---
title: "Bài 06 — Định nghĩa GetFromDB và thực thi SQL có kiểm soát"
course: "Xây dựng Text-to-SQL Agent với LangGraph, Next.js, watsonx.ai và SQLite"
lesson_number: 6
lesson_type: "lab"
language: "vi"
---

# Bài 06 — Định nghĩa GetFromDB và thực thi SQL có kiểm soát

> **Tóm tắt:** Kết nối LangChain tool với hàm truy vấn SQLite và cung cấp schema để model tạo SQL phù hợp.

## 1. Mục tiêu học tập

- Định nghĩa tool bằng schema Zod và mô tả đủ rõ.
- Chuyển câu hỏi tự nhiên thành SELECT, JOIN, GROUP BY.
- Thiết kế giới hạn truy vấn chỉ đọc tại cả ứng dụng và database.

## 2. Nguyên lý của tool

Agent không nhận một kết nối SQLite thuần. Backend cung cấp `GetFromDB({ sql })`, mô tả lược đồ bảng và quy tắc truy vấn. LLM quyết định có cần sử dụng tool hay không, điền tham số, sau đó nhận kết quả JSON.

```ts
import { tool } from "@langchain/core/tools";
import { z } from "zod";

const getFromDB = tool(
  async ({ sql }) => JSON.stringify(await executeReadOnly(sql)),
  {
    name: "GetFromDB",
    description: `Truy vấn dữ liệu SQLite. Bảng customers(id,email,name)
      và orders(id,customer_id,total). Chỉ SELECT, dùng dấu nháy kép tên bảng/cột.`,
    schema: z.object({
      sql: z.string().min(1).max(2500).describe("Một truy vấn SQLite chỉ đọc"),
    }),
  },
);
```

Trên đây là đoạn minh họa cần import thêm `executeReadOnly`. Mô tả tool đầy đủ trong mã mẫu dùng các câu `CREATE TABLE` để cung cấp loại dữ liệu, khóa và mối quan hệ.

## 3. Ba truy vấn điển hình

**Đếm khách hàng**:

```sql
SELECT COUNT(*) AS "customer_count" FROM "customers"
```

**Danh sách đơn và người đặt**:

```sql
SELECT "c"."name", "o"."total"
FROM "customers" AS "c"
JOIN "orders" AS "o" ON "c"."id" = "o"."customer_id"
ORDER BY "o"."total" DESC
LIMIT 10
```

**Khách hàng có nhiều đơn nhất**:

```sql
SELECT "c"."name", COUNT("o"."id") AS "order_count"
FROM "customers" AS "c"
JOIN "orders" AS "o" ON "c"."id" = "o"."customer_id"
GROUP BY "c"."id", "c"."name"
ORDER BY "order_count" DESC
LIMIT 1
```

`JOIN` ghép hàng theo khóa ngoại; `GROUP BY` gom đơn theo khách; `COUNT` đếm; `ORDER BY ... DESC` đưa khách nhiều đơn lên trước. Nếu muốn cả những khách **chưa từng đặt hàng**, hãy dùng `LEFT JOIN` thay cho `JOIN`.

## 4. Hàng rào truy vấn

LLM có thể tạo SQL sai hoặc độc hại vì prompt injection, lẫn lộn schema hay lỗi suy luận. Quy tắc “chỉ chạy SELECT” phải thực hiện **bên ngoài LLM**.

| Lớp | Tác dụng | Giới hạn |
|---|---|---|
| Prompt/tool description | Hướng model tới truy vấn đúng | Có thể bị bỏ qua |
| Validation đầu vào | Chặn chuỗi không hợp lệ/đa câu lệnh | Regex không phân tích toàn bộ SQL |
| `PRAGMA query_only = ON` | SQLite chặn thao tác sửa DB ở kết nối | Không thay thế phân quyền người dùng |
| Tài khoản DB chỉ đọc | Phân quyền ở DB production | Phụ thuộc hạ tầng |
| Timeout/giới hạn tài nguyên | Giảm query nặng | Cần triển khai riêng |

File `ma-mau/src/lib/database.ts` có bộ lọc demo trước `db.all()`, bật `query_only`, và giới hạn số hàng trả về. **Lưu ý:** giới hạn sau khi lấy rows không ngăn truy vấn tiêu thụ tài nguyên lớn; production nên đặt giới hạn thời gian/tài nguyên ngay ở engine hoặc gateway.

## 5. Lỗi SQL có thể tự sửa

Nếu tool báo `no such column: full_name`, agent nên đọc lại schema và chọn `name` thay vì thử truy vấn thiếu kiểm soát. Trả lỗi kỹ thuật vừa đủ cho model tự sửa, nhưng không đưa stack trace hoặc bí mật vào UI người dùng.

## 6. Checkpoint

- Query COUNT trả 10 khách hàng.
- Query top customer trả tên Lucas Bill với 4 đơn trong dữ liệu mẫu.
- `DROP TABLE "customers"` bị từ chối.
- Query lỗi tên cột được agent sửa hoặc trả lời rõ ràng, không bịa số liệu.

## 7. Câu hỏi ôn tập

### Câu 1

Schema nhập của tool giúp làm gì?

A. Tự đổi SQLite thành MongoDB  
B. Hạn định tham số cần gửi cho tool  
C. Tạo component React  
D. Ẩn API key trên client  

**Đáp án:** B  
**Giải thích:** Zod định nghĩa và kiểm tra tham số sql.

### Câu 2

Để tìm khách nhiều đơn nhất nên dùng toán tử nào?

A. JOIN + GROUP BY + COUNT + ORDER BY  
B. INSERT + DELETE  
C. CREATE + DROP  
D. VACUUM + ATTACH  

**Đáp án:** A  
**Giải thích:** Cần nối khách–đơn, gom nhóm, đếm rồi sắp giảm dần.

### Câu 3

Biện pháp nào bắt buộc ở ngoài prompt?

A. Thêm emoji  
B. Đổi màu giao diện  
C. Định nghĩa ràng buộc chỉ đọc trong backend/DB  
D. Viết câu hỏi dài hơn  

**Đáp án:** C  
**Giải thích:** Prompt không đủ cưỡng chế an toàn dữ liệu.

### Câu 4

Nếu muốn lấy cả khách có 0 đơn, JOIN nào thích hợp?

A. CROSS JOIN  
B. INNER JOIN  
C. SELF JOIN  
D. LEFT JOIN từ customers  

**Đáp án:** D  
**Giải thích:** LEFT JOIN giữ lại hàng phía customers dù thiếu đơn.

### Câu 5

Lý do không chỉ dùng regex kiểm tra SQL?

A. Regex phân tích mọi SQL đầy đủ  
B. SQL có cú pháp phức tạp, regex dễ bỏ sót  
C. Regex đảm bảo query đúng semantic  
D. SQLite không hỗ trợ biểu thức chính quy  

**Đáp án:** B  
**Giải thích:** Regex chỉ là lớp chặn sơ bộ, cần quyền DB và kiểm soát truy vấn.
