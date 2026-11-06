# Thiết kế Dynamic Grid Dashboard theo yêu cầu tự nhiên

> **Loại bài:** lesson · **Chuyên đề:** Module 05 — Các component giao diện sinh tạo

## 1. Tóm tắt

Lưới hàng/cột là ví dụ tối giản nhưng mạnh để hình dung Generative UI: model nhận ý định, Zod xác thực số ô, và một React component dựng bố cục đúng tham số.

## 2. Mục tiêu học tập

- Xây component lưới có giới hạn kích thước.
- Liên kết tool output với props của React.
- Đánh giá UX trên mobile và khi tham số không hợp lệ.

## 3. Thiết kế dữ liệu trước component

`GridPreview` chỉ cần `rows` và `columns`, kiểu số nguyên trong phạm vi nhỏ. Ta định nghĩa số ô = rows × columns, tạo phần tử bằng mảng và dựng CSS grid. Có thể định nghĩa thêm `widgets` ở giai đoạn nâng cao, nhưng không nên cho AI gửi trực tiếp HTML hay raw JavaScript vào các ô.

## 4. Component có thể tái sử dụng

```tsx
// components/grid-preview.tsx
export type GridData = { rows: number; columns: number };

export function GridPreview({ rows, columns }: GridData) {
  if (!Number.isInteger(rows) || !Number.isInteger(columns) ||
      rows < 1 || columns < 1 || rows > 8 || columns > 8) {
    return <p>Không thể hiển thị kích thước lưới này.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <div className="grid gap-2 min-w-[280px]"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {Array.from({ length: rows * columns }, (_, i) => (
          <div key={i} className="rounded border p-4 text-center">
            Ô {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
```

Giới hạn lặp ở UI là **defense in depth**; schema backend vẫn phải chặn kích thước không hợp lệ. Khi `columns` nhiều trên mobile, có thể giảm cột theo breakpoint hoặc cho cuộn ngang, tùy nghiệp vụ. Thí dụ giữ đúng số cột được yêu cầu và dùng `overflow-x-auto` để tránh tự thay đổi cấu trúc.

## 5. Từ lời nhắn đến widget

Người dùng: “Vẽ lưới dashboard 2 hàng, 3 cột.” Tool `drawGrid` được gọi với `{rows:2,columns:3}`. Backend trả đúng data này. Trong renderer client:

```tsx
if (part.type === 'tool-drawGrid' && part.state === 'output-available') {
  return <GridPreview rows={part.output.rows}
                      columns={part.output.columns} />;
}
```

Người dùng nói “Đổi thành 4 cột” thì model có thể dùng ngữ cảnh để thực hiện lại tool với `{rows:2,columns:4}`. Nếu component là một layout editor tương tác lâu dài, cần lưu trạng thái hiện tại ở ứng dụng để chống mất ngữ cảnh.

## 6. Thiết kế grid cho dashboard DeFi

Mỗi ô có thể chứa widget được hệ thống allowlist như `assetTable`, `swapPanel`, `portfolioChart`. Một schema an toàn nên biểu diễn widget như enum và index/grid area, không chứa JSX. Sau đó một registry ánh xạ kiểu widget sang component. Giới hạn vị trí, số ô và widget hợp lệ bằng schema. Khi cần kéo thả, React local state lưu bố cục mới và chỉ gửi dữ liệu bố cục khi người dùng chủ động lưu.

## 7. Lỗi và cách gỡ

Lưới trống thường do rows/columns bằng 0 hoặc tool chưa trả output. Lưới vỡ layout do min width không phù hợp; giải bằng responsive wrapper. Nhiều component cùng key sẽ gây warning React; key ổn định theo vị trí hoặc ID. Nếu model trả chuỗi `"3"` thay vì số, kiểm tra inputSchema và log tool call trước khi sửa ở component.

## 8. Thực hành và kiểm tra

**Lab:** Dựng `GridPreview`, test cấu hình 2×3, 4×1, 8×8 và 9×2. Thêm tooltip hoặc label vào mỗi ô, thử viewport nhỏ. **Deliverable:** screenshot hoặc checklist; 9×2 phải bị chặn bằng thông báo lỗi hợp lý.

## 9. Câu hỏi ôn tập

### Câu 1

Số ô của lưới 2 hàng 3 cột là?

A. 8  
B. 9
C. 5  
D. 6  

**Đáp án:** D.

**Giải thích:** Tổng số phần tử là rows × columns.

### Câu 2

Tại sao kiểm tra kích thước lần nữa trong component?

A. Defense in depth trước props không hợp lệ  
B. Để gọi LLM  
C. Để bỏ Zod
D. Để thay thế schema backend  

**Đáp án:** A.

**Giải thích:** UI vẫn có thể nhận dữ liệu sai từ nguồn khác.

### Câu 3

Model nên trả gì để tạo grid?

A. JSX tùy ý  
B. {rows,columns} hợp lệ  
C. HTML script string  
D. CSS độc lập

**Đáp án:** B.

**Giải thích:** Renderer dựng JSX từ dữ liệu có cấu trúc.

### Câu 4

Khi lưới nhiều cột trên màn hình nhỏ, cách xử lý hợp lý là?

A. Tắt validator
B. Xóa dữ liệu  
C. Thiết kế responsive/overflow  
D. Cho CSS không giới hạn  

**Đáp án:** C.

**Giải thích:** Responsive tránh vỡ layout mà không làm sai ý định.

### Câu 5

Phương án nào an toàn hơn khi AI chọn widget trong ô?

A. Cho model import bất kỳ package  
B. Cho model gọi eval
C. Cho model gửi script  
D. Dùng enum widget và registry component  

**Đáp án:** D.

**Giải thích:** Allowlist widget làm giảm nguy cơ thực thi mã không tin cậy.

## 10. Tổng kết

Lưới hàng/cột là ví dụ tối giản nhưng mạnh để hình dung Generative UI: model nhận ý định, Zod xác thực số ô, và một React component dựng bố cục đúng tham số.
