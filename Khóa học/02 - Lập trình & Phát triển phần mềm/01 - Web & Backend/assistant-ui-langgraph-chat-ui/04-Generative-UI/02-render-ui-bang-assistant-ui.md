# Lab: Render UI message từ LangGraph và component React

> **Loại:** Lab · **Trọng tâm:** `typedUi`, `custom` streaming và `makeAssistantDataUI`.

## 1. Tổng quan

LangGraph hỗ trợ phát dữ liệu UI có cấu trúc theo một tên component. Trong TypeScript, graph có thể dùng `typedUi().push()`; phía assistant-ui có thể dùng `makeAssistantDataUI` để đăng ký renderer. Đường triển khai này độc lập với việc chỉ hiển thị tool call và giúp các node graph quyết định khi nào cần một widget cụ thể.

## 2. Mục tiêu và chuẩn bị

Bạn cần dự án React có `@assistant-ui/react`, `@assistant-ui/react-langgraph`, server LangGraph kết nối được và một graph có `messages` key. Mục tiêu là phát một UI event có `name="chart"`, liên kết nó với AI message và render qua React.

## 3. Phát UI message trong node

Ví dụ TypeScript theo cơ chế được tài liệu mô tả:

```typescript
import { typedUi } from "@langchain/langgraph-sdk/react-ui/server";
import type { ComponentRegistry } from "./components";

export async function chartNode(state: unknown, config: unknown) {
  const ui = typedUi<ComponentRegistry>(config);
  const message = { id: "msg-1", type: "ai", content: "Biểu đồ minh họa." };
  ui.push(
    { name: "chart", props: { series: [1, 2, 3], title: "Sales" } },
    { message },
  );
  return { messages: [message] };
}
```

`ComponentRegistry` là type registry do ứng dụng định nghĩa; đoạn code tập trung vào giao ước UI, không phải một graph đầy đủ tự chạy. Khi triển khai, type thực tế của `state`/`config` cần khớp SDK/graph.

Dữ liệu `series` ở đây là minh họa, không đại diện dữ liệu tài chính thật.

## 4. Đăng ký renderer React

File `components/ChartUI.tsx`:

```tsx
import { makeAssistantDataUI } from "@assistant-ui/react";

type ChartProps = { series: number[]; title: string };

export const ChartUI = makeAssistantDataUI<ChartProps>({
  name: "chart",
  render: ({ data }) => (
    <section aria-label="Biểu đồ dữ liệu">
      <h3>{data.title}</h3>
      <ul>{data.series.map((v, i) => <li key={i}>{v}</li>)}</ul>
    </section>
  ),
});
```

Ví dụ dùng danh sách số để tránh phụ thuộc chart package. Bạn có thể thay bằng một chart library nếu giao diện cần biểu đồ thật.

Mount renderer trong provider tree:

```tsx
<AssistantRuntimeProvider runtime={runtime}>
  <ChartUI />
  <Thread />
</AssistantRuntimeProvider>
```

`ChartUI` tại vị trí mount dùng để **đăng ký renderer**, không tự vẽ card tại đó. Payload từ stream gắn với message tương ứng sẽ quyết định khi nào xuất hiện UI.

## 5. Liên kết event với message

LangGraph gửi UI message cùng AI message. Phần metadata như `message_id` giúp runtime đặt UI vào đúng message. Nếu không liên kết đúng, UI có thể không nằm trong đoạn hội thoại như mong muốn. Đảm bảo ID duy nhất trong lượt thực thi thực tế thay vì hardcode `msg-1` cho mọi run.

Nếu tự gọi `client.runs.stream`, cần bao gồm kênh `custom` trong danh sách stream mode. `unstable_createLangGraphStream` đã hỗ trợ kênh này theo tài liệu hiện hành.

## 6. Kiểm thử và debug

- Sai component name (`charts` thay vì `chart`) → renderer không khớp.
- Không mount `ChartUI` bên trong provider → không đăng ký renderer.
- Thiếu hoặc sai metadata liên kết → UI không gắn đúng message.
- Có dữ liệu không hợp lệ → renderer phải kiểm tra trước khi tính toán hoặc vẽ.
- Refresh làm biến mất UI đã emit → xem cơ chế khôi phục UI message từ state trong `load`.

**Checkpoint:** UI minh họa xuất hiện tại đúng vị trí message, và không xuất hiện khi graph không phát event `chart`.

## 7. Deliverable và tổng kết

Bàn giao hai file node/renderer, ảnh chụp thành công và case thiếu event để kiểm tra fallback. Quan trọng nhất là phân biệt **event có cấu trúc từ graph** với **tool result được render**; cả hai đều có thể tạo UI trực quan nhưng cơ chế là khác nhau.

## 8. Câu hỏi ôn tập

### Câu 1

API nào phát UI event TypeScript từ LangGraph node?

A. useState  
B. typedUi().push()  
C. console.log  
D. setTimeout

**Đáp án:** B

**Giải thích:** typedUi().push() phát dữ liệu UI có cấu trúc.

### Câu 2

API nào đăng ký renderer cho LangGraph UI message trong React?

A. useEffect  
B. createContext  
C. makeAssistantDataUI  
D. renderToString

**Đáp án:** C

**Giải thích:** makeAssistantDataUI ánh xạ name tới component React.

### Câu 3

Để gắn UI vào đúng AI message, cần?

A. Thông tin liên kết message ID  
B. Chỉ class CSS  
C. API key trong client  
D. Giá cố định

**Đáp án:** A

**Giải thích:** Message identity cho phép runtime định vị payload UI.

### Câu 4

Khi tự stream từ SDK, mode nào phải có để nhận UI events?

A. head  
B. metadata-only  
C. debug-only  
D. custom

**Đáp án:** D

**Giải thích:** LangGraph UI event được phát qua custom.

### Câu 5

Mount ChartUI trong provider có ý nghĩa gì?

A. Tự động mua tài sản  
B. Đăng ký renderer cho event phù hợp  
C. Thay backend graph  
D. Lưu tất cả giá vào localStorage

**Đáp án:** B

**Giải thích:** Đăng ký giúp runtime chọn renderer khi có UI part phù hợp.
