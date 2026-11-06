# Airdrop Cards và giao diện tự sinh từ ABI hợp đồng thông minh

> **Loại bài:** lesson · **Chuyên đề:** Module 05 — Các component giao diện sinh tạo

## 1. Tóm tắt

Cùng một chatbot có thể render thẻ airdrop và giao diện gọi hợp đồng thông minh. Hai trường hợp minh họa thế mạnh của component registry: dữ liệu đầu vào khác nhau, giao diện khác nhau, nhưng mỗi UI vẫn được lập trình trước và giới hạn rõ.

## 2. Mục tiêu học tập

- Thiết kế card airdrop theo hệ sinh thái và trạng thái.
- Phân loại hàm ABI read và write.
- Đề xuất cách render tương tác mà không cho AI tự thực thi giao dịch.

## 3. Airdrop Cards theo ngữ cảnh

Yêu cầu “Cho xem airdrop trong hệ Cosmos” gồm điều kiện lọc `ecosystem`. Tool `findAirdrops` nên nhận input theo schema và query một backend/nguồn dữ liệu, rồi trả danh sách card. Schema ví dụ:

```ts
import { z } from 'zod';
export const AirdropQuery = z.object({
  ecosystem: z.string().trim().min(1).max(40).optional(),
  limit: z.number().int().min(1).max(20).default(5),
});
export const AirdropItem = z.object({
  id: z.string(), name: z.string(), ecosystem: z.string(),
  url: z.string().url(), status: z.enum(['unverified','active','ended']),
});
```

Status nên phản ánh kiểm chứng thật từ dữ liệu, không chỉ lời đoán của AI. Khi nguồn không xác minh, hiển thị nhãn “chưa xác minh”, tránh ngụ ý người dùng chắc chắn đủ điều kiện nhận token. URL bên ngoài có rủi ro phishing; chỉ mở khi người dùng chủ động chọn và hiển thị domain rõ ràng.

## 4. Component airdrop

```tsx
export function AirdropCards({ items }: { items: Array<{
  id: string; name: string; ecosystem: string;
  status: string; url: string;
}> }) {
  if (!items.length) return <p>Không tìm thấy airdrop phù hợp.</p>;
  return <div className="grid gap-3 sm:grid-cols-2">
    {items.map(item => <article key={item.id} className="rounded border p-4">
      <h3>{item.name}</h3><p>{item.ecosystem} · {item.status}</p>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        Xem thông tin gốc
      </a>
    </article>)}
  </div>;
}
```

Trước khi đưa URL vào UI, backend cần kiểm tra protocol, độ tin cậy nguồn và chính sách outbound link. `z.string().url()` chỉ kiểm tra định dạng, không bảo đảm an toàn.

## 5. ABI và contract interface

ABI (Application Binary Interface) mô tả các hàm, đối số và kiểu trả về của smart contract. Với ABI kiểu JSON, một entry có `type:'function'`, `name`, `inputs`, `outputs` và `stateMutability`. Một renderer có thể nhóm hàm thành read/write:

```ts
const functions = abi.filter(item => item.type === 'function');
const readFunctions = functions.filter(item =>
  ['view', 'pure'].includes(item.stateMutability));
const writeFunctions = functions.filter(item =>
  !['view', 'pure'].includes(item.stateMutability));
```

Ví dụ giả định `balanceOf(address)` thuộc read; `transfer(address,uint256)` là write và không được tự gọi khi người dùng chỉ yêu cầu “hiển thị ABI”. Phân loại vẫn cần dựa trên ABI và logic wallet provider, không coi đây là thẩm định an toàn hợp đồng.

## 6. Render form theo kiểu đầu vào

`address` hiển thị input có validator; `uint256` yêu cầu kiểm tra số nguyên không âm và giới hạn type; `bool` có thể dùng checkbox. Một số kiểu Solidity phức tạp như tuple/array đòi hỏi form chuyên biệt. Không `eval` chuỗi ABI, không render code do model viết. Khi gọi read function, backend/wallet RPC kiểm tra chain ID và địa chỉ. Khi gọi write function, cần confirm và chữ ký của người dùng.

## 7. Checklist an toàn

Airdrop: có nguồn, domain, status đáng tin, không yêu cầu seed phrase. Contract: có chain ID, contract address, ABI hợp lệ, tách read/write, không tự gửi transaction. Khi chỉ cần xem ABI, UI chỉ cần tạo form/preview; không có lý do gọi blockchain mutating method.

## 8. Thực hành và kiểm tra

**Lab:** Với hai ABI giả định `balanceOf(view)` và `transfer(nonpayable)`, phân loại read/write và đề xuất form cho mỗi input. Đồng thời thiết kế AirdropCards với trường `status=unverified`. **Đạt** khi việc render không kích hoạt giao dịch và người dùng nhìn thấy nguồn dữ liệu.

## 9. Câu hỏi ôn tập

### Câu 1

Trong yêu cầu airdrop Cosmos, tham số lọc tự nhiên nhất là?

A. fontSize  
B. ecosystem  
C. columns  
D. gasLimit

**Đáp án:** B.

**Giải thích:** Người dùng yêu cầu theo hệ sinh thái.

### Câu 2

`z.string().url()` có bảo đảm website không phishing không?

A. Có nếu có favicon
B. Có  
C. Không, chỉ kiểm tra định dạng  
D. Có nếu HTTPS  

**Đáp án:** C.

**Giải thích:** Phải kiểm tra nguồn và rủi ro liên kết riêng.

### Câu 3

Hàm ABI `stateMutability: view` thường xếp nhóm nào?

A. Delete  
B. Deploy
C. Write  
D. Read  

**Đáp án:** D.

**Giải thích:** View không nhằm thay đổi trạng thái on-chain.

### Câu 4

Người dùng yêu cầu “hiển thị ABI”, ứng dụng có nên gửi transaction?

A. Không, chỉ render giao diện  
B. Có để test  
C. Có nếu model chọn
D. Có nếu có write method  

**Đáp án:** A.

**Giải thích:** Yêu cầu xem giao diện không phải ủy quyền thực hiện giao dịch.

### Câu 5

Vì sao không dùng `eval` để chuyển chuỗi ABI thành UI?

A. Vì không có JSON  
B. Vì có rủi ro chạy mã không tin cậy  
C. Vì React không chạy browser  
D. Vì thiếu zod

**Đáp án:** B.

**Giải thích:** ABI phải được parse như data và render bằng component allowlist.

## 10. Tổng kết

Cùng một chatbot có thể render thẻ airdrop và giao diện gọi hợp đồng thông minh. Hai trường hợp minh họa thế mạnh của component registry: dữ liệu đầu vào khác nhau, giao diện khác nhau, nhưng mỗi UI vẫn được lập trình trước và giới hạn rõ.
