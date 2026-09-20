# 002 - Bài tập Dynamic Tool Descriptions

## 1. Mục tiêu

Thực hành tạo mô tả công cụ động từ metadata của hàm Python để đưa vào ReAct prompt.

## 2. Kiến thức cần dùng

- dictionary và `.items()`;
- `inspect.signature()`;
- `inspect.getdoc()`;
- thuộc tính `__wrapped__`;
- `"\n".join(...)`;
- tool names và tool descriptions.

## 3. Đề bài

Giả sử chương trình có dictionary:

```python
tools = {
    "get_product_price": get_product_price,
    "apply_discount": apply_discount,
}
```

Các hàm đã được decorator theo dõi bọc bên ngoài.

Hãy triển khai cơ chế sinh chuỗi mô tả công cụ để LLM có thể đọc trong ReAct prompt.

## 4. Nhiệm vụ

1. Viết hàm `get_tool_descriptions(tools)`.
2. Với mỗi tool, truy cập hàm gốc qua `__wrapped__`.
3. Lấy chữ ký bằng `inspect.signature()`.
4. Lấy docstring bằng `inspect.getdoc()`.
5. Ghép tất cả mô tả thành một chuỗi, có dòng mới giữa các tool.
6. Tạo riêng biến chứa danh sách tên tool.
7. In hai kết quả để kiểm tra.

## 5. Yêu cầu hoàn thành

- [ ] Không viết cứng metadata của từng tool vào prompt.
- [ ] Mỗi mô tả có tên tool, signature và docstring.
- [ ] `tool_names` chỉ chứa tên các tool hợp lệ.
- [ ] `tool_descriptions` chứa thông tin chi tiết hơn `tool_names`.
- [ ] Kết quả có thể chèn trực tiếp vào một f-string ReAct prompt.

## 6. Checkpoint

Sau khi chạy chương trình, hãy kiểm tra:

- mô tả của cả hai tool đều xuất hiện;
- signature phản ánh đúng tham số;
- docstring không bị mất;
- các tool được ngăn cách rõ ràng;
- danh sách tên tool không chứa object function.

## 7. Gợi ý

Bắt đầu bằng:

```python
import inspect
```

Sau đó lặp qua:

```python
for tool_name, tool in tools.items():
    ...
```

Không cần triển khai parser hoặc agent loop trong bài tập này.
