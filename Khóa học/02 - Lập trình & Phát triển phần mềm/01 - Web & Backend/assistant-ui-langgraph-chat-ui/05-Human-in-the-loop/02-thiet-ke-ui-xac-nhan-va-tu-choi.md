# Lab: Thiết kế bảng phê duyệt và xử lý xác nhận/từ chối

> **Loại:** Lab · **Trọng tâm:** Approval UI, tính nhất quán khi resume và kiểm thử an toàn.

## 1. Tổng quan

Approval UI phải trình bày chính xác điều người dùng sắp ủy quyền, cho phép từ chối dễ dàng và ngăn click trùng. Nó không phải một nút “OK” chung chung. Với giao dịch, bảng cần hiện mã cổ phiếu, số lượng, giá tham khảo, tổng chi phí dự kiến (nếu có dữ liệu), và nêu giới hạn của thông tin.

## 2. Mục tiêu và chuẩn bị

- Dựng được component `ApprovalCard` trên React.
- Vô hiệu hóa nút khi quyết định đang được gửi.
- Xử lý các trạng thái pending/approved/rejected/failed.
- Biết cách nối callback phê duyệt với cơ chế resume đúng với phiên bản LangGraph adapter.

Chuẩn bị một graph có interrupt ở trước công cụ thực thi. Callback `onDecision` của component dưới đây là interface **do chúng ta tự định nghĩa**; ứng dụng sẽ triển khai callback bằng cơ chế resume của runtime hoặc LangGraph SDK tương ứng.

## 3. Viết component presentation độc lập

```tsx
"use client";

import { useState } from "react";

type Proposal = {
  requestId: string;
  symbol: string;
  quantity: number;
  estimatedTotal: number | null;
  currency: string;
};

type Decision = "approve" | "reject";

export function ApprovalCard({
  proposal,
  onDecision,
}: {
  proposal: Proposal;
  onDecision: (requestId: string, decision: Decision) => Promise<void>;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(decision: Decision) {
    if (pending) return;
    setPending(true);
    setError(null);
    try {
      await onDecision(proposal.requestId, decision);
    } catch {
      setError("Không gửi được quyết định. Hãy kiểm tra trạng thái yêu cầu.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section aria-label="Xác nhận thao tác">
      <h3>Kiểm tra đề xuất</h3>
      <p>Mã: {proposal.symbol}</p>
      <p>Số lượng: {proposal.quantity}</p>
      <p>
        Tổng dự kiến: {proposal.estimatedTotal === null
          ? "Chưa có giá hợp lệ"
          : new Intl.NumberFormat("en-US", { style: "currency", currency: proposal.currency })
              .format(proposal.estimatedTotal)}
      </p>
      <p>Chỉ tiếp tục khi bạn đồng ý với nội dung trên.</p>
      {error && <p role="alert">{error}</p>}
      <button disabled={pending} onClick={() => submit("reject")}>Từ chối</button>
      <button disabled={pending || proposal.estimatedTotal === null}
        onClick={() => submit("approve")}>Xác nhận</button>
    </section>
  );
}
```

Code chỉ mô tả lớp hiển thị và callback. Nó không được phép tự gọi API giao dịch thật khi chỉ mới render. Trong sản phẩm thực tế, cần chặn chấp thuận dựa trên validation server và có thể yêu cầu bước xác thực mạnh hơn.

## 4. Kết nối với LangGraph

### 4.1. Backend

Graph tạo đề xuất và dừng ở interrupt. Server lưu đề xuất đang chờ cùng thread ID, request ID và danh tính chủ sở hữu; sau khi nhận quyết định, server chỉ cho phép tiếp tục nhánh tương ứng nếu request còn hiệu lực.

### 4.2. Frontend

Một renderer đọc interrupt hoặc tool approval payload và tạo `ApprovalCard`. Khi bấm, `onDecision` dùng API resume/approval của phiên bản runtime được dự án cài đặt. **Không dùng ví dụ minh họa này như một endpoint mua hàng đã được triển khai:** nó chưa chứa transport, authorization hoặc xử lý backend.

Trong assistant-ui có các cơ chế UI cho tool calls/approval; API và callback cụ thể có thể thay đổi theo runtime. Kiểm tra guide `Tool UI` và hướng dẫn `Interrupts` của package bạn đang dùng.

## 5. Bộ test bắt buộc

| Tình huống | Kỳ vọng |
| --- | --- |
| Bấm từ chối | Không có lệnh thực thi |
| Bấm xác nhận một lần | Chỉ một yêu cầu resume hợp lệ |
| Double-click liên tiếp | Không gửi hai giao dịch |
| Dữ liệu giá thiếu | Không cho duyệt ngay trong UI demo |
| Network timeout | Hiện lỗi và kiểm tra state server trước khi retry |
| Mở lại thread | Khôi phục đề xuất còn chờ |

**Chú ý:** disable button ở frontend chỉ cải thiện UX. Server vẫn phải chống gửi trùng, kiểm tra quyền và chống replay.

## 6. Deliverable

Cung cấp file `ApprovalCard.tsx`, bảng test case, sơ đồ backend state và ảnh hai nhánh approve/reject. Mô tả rõ sự khác biệt giữa `approved`, `executing` và `succeeded`.

## 7. Tổng kết

Approval UI là giao diện của một quy trình kiểm soát, không phải bằng chứng thực thi. Nó thành công khi quyết định được gắn với đúng yêu cầu, người dùng có thông tin để đánh giá và backend duy trì tính toàn vẹn của hành động.

## 8. Câu hỏi ôn tập

### Câu 1

Callback `onDecision` trong lab này là gì?

A. Một API giao dịch có sẵn  
B. Một prop do ứng dụng định nghĩa để nối transport phê duyệt  
C. CSS callback  
D. Một environment variable

**Đáp án:** B

**Giải thích:** Component được tách khỏi SDK để không phụ thuộc nhầm API runtime.

### Câu 2

Khi giá chưa hợp lệ, lab xử lý nút xác nhận thế nào?

A. Luôn bật  
B. Tự nhập giá  
C. Vô hiệu hóa xác nhận  
D. Đánh dấu đã mua

**Đáp án:** C

**Giải thích:** Không thể xác nhận chi phí dự kiến khi thiếu dữ liệu cần thiết.

### Câu 3

Ngăn double-click ở frontend có đủ chống giao dịch lặp?

A. Không; server vẫn cần idempotency và kiểm tra quyền  
B. Có; mọi request đều một lần  
C. Có nếu đổi màu nút  
D. Không cần chống trùng

**Đáp án:** A

**Giải thích:** Frontend chỉ là một lớp UX, server mới kiểm soát tác động.

### Câu 4

Gặp timeout ngay sau khi gửi approve, cần làm gì?

A. Gửi vô hạn  
B. Báo thành công chắc chắn  
C. Tạo một order mới ngay  
D. Kiểm tra trạng thái yêu cầu trước khi retry

**Đáp án:** D

**Giải thích:** Timeout có thể xảy ra sau khi server đã nhận yêu cầu.

### Câu 5

Từ chối cần đi tới trạng thái nào?

A. Succeeded  
B. Rejected và không gọi tool ghi  
C. Executing  
D. Approved

**Đáp án:** B

**Giải thích:** Đường đi reject không thực thi hành động.
