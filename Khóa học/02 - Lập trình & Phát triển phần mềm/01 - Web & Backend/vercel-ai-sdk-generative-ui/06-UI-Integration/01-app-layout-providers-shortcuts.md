# Kết nối layout, theme, shortcut và ô nhập chat

> **Loại bài:** lesson · **Chuyên đề:** Module 06 — Tích hợp React UI và chất lượng

## 1. Tóm tắt

Giao diện Generative UI chỉ hữu ích khi các thành phần dùng chung một đường gửi tin, cùng hệ thống theme và trạng thái nhất quán. Root layout, client providers, shortcut buttons và form chat cần phân chia đúng vai trò.

## 2. Mục tiêu học tập

- Tạo ranh giới UI provider trong Next.js.
- Thiết kế shortcut gửi prompt qua chung một handler.
- Khắc phục lỗi Enter và nút bấm gửi khác nhau.

## 3. Layout và provider

Next.js App Router đặt metadata và HTML shell trong `app/layout.tsx`. Chakra UI hoặc các provider khác dựa vào React context được gói trong `components/providers.tsx` có `'use client'`. Nếu không có Chakra thì không cần wrapper này; có thể dùng Tailwind CSS cho layout cơ bản.

```tsx
// components/providers.tsx
'use client';
export function Providers({ children }: { children: React.ReactNode }) {
  // Đặt ChakraProvider/theme provider tại đây khi đã cài đúng version.
  return <>{children}</>;
}

// app/layout.tsx
import { Providers } from '@/components/providers';
export const metadata = { title: 'Generative UI Lab' };
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return <html lang="vi"><body><Providers>{children}</Providers></body></html>;
}
```

Đây là skeleton wrapper; nếu sử dụng Chakra UI thật cần cài version tương thích và bổ sung `ChakraProvider` theo tài liệu của chính version đó.

## 4. Shortcut là prompt, không phải giao dịch

Trong ứng dụng mẫu, các shortcut tương ứng yêu cầu như vẽ lưới, donut chart, airdrop, contract UI. Chúng chỉ gửi prompt tới assistant; sau đó model quyết định tool thích hợp.

```tsx
const examples = [
  'Tạo lưới dashboard 2 hàng, 3 cột',
  'Hiển thị phân bổ số dư ví dưới dạng donut chart',
  'Tìm airdrop trong hệ Cosmos',
  'Giải thích ABI của smart contract này',
];

{examples.map(prompt => <button key={prompt}
  type="button" onClick={() => sendMessage({ text: prompt })}>
  {prompt}
</button>)}
```

Nếu một shortcut có thể dẫn tới mua crypto thì chỉ mô tả hành động chuẩn bị và hiển thị review; không gắn button trực tiếp vào transaction execution.

## 5. Khắc phục lỗi Enter

Trong bản demo điển hình, nút tạo UI hoạt động nhưng nhấn Enter không hoạt động hoặc tạo request sai vì sự kiện form và button không dùng chung logic. Đúng hơn:

```tsx
<form onSubmit={e => {
  e.preventDefault();
  const text = input.trim();
  if (!text) return;
  sendMessage({ text });
  setInput('');
}}>
  <input value={input} onChange={e => setInput(e.target.value)} />
  <button type="submit">Tạo giao diện</button>
</form>
```

Khi cần chặn gửi trùng trong lúc streaming, bổ sung điều kiện `status`; khi cần composer nhiều dòng, textarea Enter/Shift+Enter phải được thiết kế riêng và nêu rõ hành vi.

## 6. Theme và style

Chakra UI hỗ trợ component/theme; Tailwind CSS hỗ trợ utility styling; thư viện biểu đồ như Tremor hỗ trợ dashboard. Chúng có thể cùng tồn tại nhưng cần tránh hai hệ theme tạo typography, color token hoặc reset CSS xung đột. Thiết kế nên thống nhất spacing, border, empty/error/loading state, contrast và mobile width.

## 7. Acceptance criteria UI

Trang chat hiển thị các message theo thứ tự, mỗi message có key ổn định, tool result có skeleton/ready/error, các shortcut không gửi trùng, form hoạt động bằng bàn phím và button, responsive không tràn ngang. Metadata và secrets không bị chuyển xuống client bundle.

## 8. Thực hành và kiểm tra

**Lab:** Bố trí một trang có header, 4 shortcut và chat input. Test Enter, click, gửi message rỗng, click liên tục khi đang stream, mobile viewport. **Đạt** khi mỗi message chỉ phát đúng một request và có trạng thái gửi.

## 9. Câu hỏi ôn tập

### Câu 1

Shortcut hợp lý nên làm gì?

A. Chỉnh trực tiếp DB  
B. Bỏ qua LLM
C. Gửi prompt qua cùng chat handler  
D. Tự gửi transaction  

**Đáp án:** C.

**Giải thích:** Shortcut tận dụng pipeline chat và tool selection.

### Câu 2

Tại sao không nên biến root layout thành client chỉ vì Chakra?

A. Vì không có metadata  
B. Vì Tailwind không hoạt động
C. Vì Chakra bị cấm  
D. Có thể dùng client wrapper giữ server layout  

**Đáp án:** D.

**Giải thích:** Client boundary nhỏ hơn giúp giữ các lợi ích server component.

### Câu 3

Enter và click submit nên dùng chung gì?

A. Form onSubmit  
B. Hai API độc lập  
C. Hai models  
D. CSS selector

**Đáp án:** A.

**Giải thích:** Một handler tránh hành vi khác nhau hoặc gửi trùng.

### Câu 4

Hai UI libraries cùng dùng có rủi ro gì?

A. Không bao giờ có lỗi  
B. Theme/reset CSS xung đột  
C. LLM không chạy  
D. Zod ngừng parse

**Đáp án:** B.

**Giải thích:** Cần thống nhất visual tokens và reset rules.

### Câu 5

Button shortcut gọi trực tiếp executePurchase có phù hợp không?

A. Có nếu dùng RSC
B. Có nếu đặt trong CSS  
C. Không, cần review/approval  
D. Có vì click là đồng ý mọi điều kiện  

**Đáp án:** C.

**Giải thích:** Lệnh tạo UI và chấp thuận giao dịch là hai hành động khác nhau.

## 10. Tổng kết

Giao diện Generative UI chỉ hữu ích khi các thành phần dùng chung một đường gửi tin, cùng hệ thống theme và trạng thái nhất quán. Root layout, client providers, shortcut buttons và form chat cần phân chia đúng vai trò.
