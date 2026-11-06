# Wallet Balances: Tạo Donut Chart và phân biệt dữ liệu thật với mock

> **Loại bài:** lesson · **Chuyên đề:** Module 05 — Các component giao diện sinh tạo

## 1. Tóm tắt

Dữ liệu ví là ví dụ rõ về việc tool trả số liệu, còn UI quyết định cách biểu diễn. Donut chart phù hợp với tỷ trọng tài sản, nhưng biểu đồ chỉ có ý nghĩa nếu giá trị đã được quy đổi nhất quán và có nguồn gốc.

## 2. Mục tiêu học tập

- Thiết kế schema cho số dư ví và dữ liệu chart.
- Tính tỷ trọng phân bổ tài sản hợp lệ.
- Thiết kế loading/empty/error cho biểu đồ.

## 3. Yêu cầu dữ liệu

Một chart phân bổ không thể cộng trực tiếp `0,5 BTC + 100 ETH` theo đơn vị token. Phải chọn cùng một đơn vị định giá (ví dụ USD) từ dữ liệu giá hợp lệ. Nếu chỉ có số dư token mà không có tỷ giá, nên hiển thị bảng số dư thay vì tự bịa tỷ trọng.

```ts
import { z } from 'zod';
export const WalletSliceSchema = z.object({
  symbol: z.string().min(1).max(20),
  valueUsd: z.number().finite().nonnegative(),
});
export const WalletChartSchema = z.object({
  currency: z.literal('USD'),
  slices: z.array(WalletSliceSchema).max(40),
});
```

Trong hệ thống thực, giá và số dư có timestamp, nguồn, độ chính xác và trạng thái đồng bộ. Nếu API provider bị lỗi, không nên giữ biểu đồ như thể là dữ liệu mới.

## 4. Tính tỷ trọng

Với giá trị $v_i$ của tài sản thứ $i$, tổng $V=\sum_i v_i$. Khi $V>0$, tỷ trọng phần trăm là:

$$
p_i = \frac{v_i}{V}\times100\%.
$$

Ví dụ minh họa **mock**: BTC trị giá 600 USD và ETH 400 USD thì tỷ trọng lần lượt là 60% và 40%. Kết quả dùng để kiểm tra tính toán, **không phải số dư ví thật**.

```ts
const total = slices.reduce((sum, asset) => sum + asset.valueUsd, 0);
const percentages = total === 0 ? [] : slices.map(asset => ({
  symbol: asset.symbol,
  percent: (asset.valueUsd / total) * 100,
}));
```

## 5. Component và thư viện chart

Tremor có các component biểu đồ/dashboard; Chakra UI hỗ trợ theme, layout và các control. Tùy phiên bản, API cụ thể của thư viện chart có thể khác nhau. Về kiến trúc, `WalletDonutChart` nhận mảng `{symbol,valueUsd}` đã validate, transform theo component chart đang dùng, định dạng con số và hiển thị legend. Không buộc logic gọi ví/LLM vào component biểu đồ.

```tsx
export function WalletSummary({ slices }: {
  slices: { symbol: string; valueUsd: number }[];
}) {
  const total = slices.reduce((s, a) => s + a.valueUsd, 0);
  if (total === 0) return <p>Chưa có tài sản để phân bổ.</p>;
  return <ul>{slices.map(a => <li key={a.symbol}>
    {a.symbol}: {(a.valueUsd / total * 100).toFixed(1)}%
  </li>)}</ul>;
}
```

Đây là fallback text độc lập với chart library, thuận lợi cho accessibility và test.

## 6. Kết nối với Generative UI

`getWalletBalances` kiểm tra người dùng và ví trước khi trả dữ liệu. Client nhận `tool-getWalletBalances`, validate output rồi dựng donut chart hoặc bảng. UI nên có đường dẫn xem chi tiết và thời điểm cập nhật. Không nhận địa chỉ ví người khác như bằng chứng đủ để xem thông tin riêng tư nếu backend áp dụng chính sách quyền truy cập.

## 7. Lỗi thường gặp

- Gộp token và USD vào một tổng sẽ tạo tỷ trọng sai.
- Dùng số giả mà không gắn nhãn mock dễ gây hiểu nhầm.
- `total=0` tạo chia cho 0 và `NaN`.
- Tự tạo random color/label thiếu nhất quán khiến chart khó đọc; nên giữ palette ổn định và legend rõ.

## 8. Thực hành và kiểm tra

**Lab:** Dùng mock `{BTC:600,ETH:300,SOL:100}` tạo tỷ trọng 60/30/10, kiểm tra tổng xấp xỉ 100%. Thử tập rỗng và toàn số 0. **Đạt** khi UI có fallback text và ghi rõ dữ liệu demo.

## 9. Câu hỏi ôn tập

### Câu 1

Muốn so sánh tỷ trọng BTC/ETH, dữ liệu nên thống nhất theo gì?

A. Một đơn vị giá trị chung như USD  
B. Tên token  
C. Độ dài địa chỉ ví
D. Số lượng token  

**Đáp án:** A.

**Giải thích:** Tỷ trọng chỉ có nghĩa khi các số liệu cùng đơn vị.

### Câu 2

Tổng valueUsd bằng 0 thì nên?

A. Tự tạo 100% cho BTC  
B. Hiển thị empty state  
C. Tăng số dư giả
D. Chia bình thường  

**Đáp án:** B.

**Giải thích:** Tránh phép chia 0 và không mô tả dữ liệu không có.

### Câu 3

Tại sao nên có fallback text bên cạnh chart?

A. Để tránh backend
B. Để bỏ dữ liệu  
C. Accessibility và dễ kiểm thử  
D. Để che tỷ trọng  

**Đáp án:** C.

**Giải thích:** Fallback cho người dùng không đọc được chart và giúp kiểm thử.

### Câu 4

Model có nên tự đoán giá token khi tool lỗi không?

A. Chỉ khi prompt dài  
B. Chỉ khi dùng Chakra
C. Có  
D. Không  

**Đáp án:** D.

**Giải thích:** Dữ liệu giá và số dư cần nguồn đáng tin cậy.

### Câu 5

Tool lấy số dư nên làm gì trước khi truy xuất?

A. Kiểm tra xác thực và quyền truy cập  
B. Gọi random()  
C. Render chart
D. Chỉ đổi theme  

**Đáp án:** A.

**Giải thích:** Dữ liệu ví có thể nhạy cảm, phải bảo vệ ở backend.

## 10. Tổng kết

Dữ liệu ví là ví dụ rõ về việc tool trả số liệu, còn UI quyết định cách biểu diễn. Donut chart phù hợp với tỷ trọng tài sản, nhưng biểu đồ chỉ có ý nghĩa nếu giá trị đã được quy đổi nhất quán và có nguồn gốc.
