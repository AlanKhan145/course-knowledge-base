# 002 - Tool Binding and Defensive Prompting - Practice

## 1. Mục tiêu

Bài tập yêu cầu gắn các tool đã viết vào model và xây dựng system prompt đủ chặt để agent không tự đoán dữ liệu nghiệp vụ.

## 2. Kiến thức cần dùng

- danh sách tool;
- `tool_map`;
- `bind_tools()`;
- `SystemMessage` và `HumanMessage`;
- defensive prompting.

## 3. Đề bài

Tiếp tục shopping agent từ bài 001. Agent phải có quyền dùng `get_product_price` và `apply_discount`, nhưng không được tự thay thế chức năng của hai tool bằng suy đoán của LLM.

## 4. Nhiệm vụ

### 4.1. Chuẩn bị tool registry

Tạo:

- một danh sách chứa hai tool;
- một dictionary ánh xạ tên tool sang đối tượng tool tương ứng.

Dictionary này phải đủ để vòng lặp ở bài sau có thể nhận tên tool từ LLM rồi tìm callable cần thực thi.

### 4.2. Bind tool vào model

Khởi tạo chat model phù hợp với môi trường của bạn và bind hai tool vào model.

Xác nhận model được sử dụng có hỗ trợ function/tool calling.

### 4.3. Viết system prompt phòng thủ

System prompt phải thể hiện đầy đủ bốn nguyên tắc:

1. Không được đoán hoặc giả định giá sản phẩm.
2. Phải gọi `get_product_price` để lấy giá.
3. Chỉ được áp dụng giảm giá sau khi đã nhận giá từ tool tra cứu.
4. Không tự tính giảm giá; phải dùng `apply_discount`.
5. Nếu người dùng chưa chỉ định cấp giảm giá, phải hỏi lại thay vì tự chọn.

### 4.4. Tạo message history ban đầu

Tạo danh sách message gồm:

- system message chứa vai trò và guardrails;
- human message chứa câu hỏi người dùng.

Dùng kịch bản thử nghiệm:

```text
Giá của một chiếc laptop sau khi áp dụng ưu đãi vàng là bao nhiêu?
```

## 5. Yêu cầu hoàn thành

- [ ] `tools` chứa đúng các tool đã tạo.
- [ ] `tool_map` ánh xạ được tên tool sang callable.
- [ ] Model được bind với cùng danh sách tool.
- [ ] System prompt cấm đoán giá.
- [ ] System prompt bắt buộc dùng `get_product_price` trước `apply_discount`.
- [ ] System prompt cấm tự tính giảm giá.
- [ ] System prompt yêu cầu hỏi lại nếu thiếu cấp giảm giá.
- [ ] Message history có system message và human message.

## 6. Thử nghiệm phòng thủ

Chạy hai biến thể input:

**Trường hợp A**

```text
Giá laptop sau ưu đãi vàng là bao nhiêu?
```

**Trường hợp B**

```text
Giá laptop sau khi giảm giá là bao nhiêu?
```

Quan sát sự khác biệt mong đợi về hành vi: trường hợp A có đủ cấp giảm giá để tiếp tục; trường hợp B thiếu thông tin cần thiết và không nên tự chọn một tier.

## 7. Gợi ý

Defensive prompt không thay thế validation trong code. Ở bài này chỉ tập trung vào việc mô tả ranh giới hành vi cho model; logic thực thi và kiểm tra tool call sẽ được triển khai ở bài 003.
