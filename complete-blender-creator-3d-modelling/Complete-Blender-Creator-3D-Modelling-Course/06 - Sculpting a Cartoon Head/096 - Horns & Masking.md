# 096 — Horns & Masking

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Horns & Masking |
| **Thời lượng** | 6:41 |
| **Chủ đề chính** | Tạo sừng và sử dụng Masking Brush |

## 1. Mục tiêu bài học

- Sử dụng brush Mask để cô lập vùng trên đầu, chuẩn bị kéo thành sừng.
- Hiểu quy trình dùng Mask Extract hoặc kéo khối để tạo hình sừng nhô cao, thon dần.
- Thêm các đường xoắn/rãnh đặc trưng của sừng bằng Crease và Draw Sharp.

## 2. Nội dung chính

Sừng là một chi tiết nhô cao và thon nhọn, khó tạo trực tiếp chỉ bằng Grab như tai vì cần độ cao lớn và độ thon rõ rệt. Có hai kỹ thuật chính:

- **Kéo trực tiếp bằng Mask + Grab/Snake Hook**: dùng brush Mask vẽ một vùng tròn nhỏ trên đầu (vị trí gốc sừng), sau đó dùng Snake Hook hoặc Grab kéo dài nhiều lần theo từng đoạn ngắn để tạo độ cao và độ cong tự nhiên, thu nhỏ dần Radius brush khi kéo lên gần đỉnh sừng để tạo độ thon.
- **Mask Extract**: vẽ Mask vùng gốc sừng, sau đó dùng công cụ **Mask Extract** (trong menu Mask hoặc panel Tool) để tách vùng đã mask thành một mesh riêng biệt với độ dày (Thickness) chỉ định — phù hợp khi muốn sừng là một object tách rời, dễ chỉnh sửa độc lập hoặc áp Remesh riêng cho nó.

Sau khi có khối sừng cơ bản, dùng **Crease** để khắc các đường xoắn ốc hoặc rãnh dọc đặc trưng của sừng động vật (dê, cừu), và **Draw Sharp** (biến thể của Draw giữ cạnh sắc hơn) để làm rõ các gờ nổi giữa các rãnh. Đầu sừng nên thon nhỏ và hơi nhọn, gốc sừng phình to hơn và hòa vào da đầu bằng một bước Smooth chuyển tiếp nhẹ.

Vị trí và số lượng sừng là lựa chọn thiết kế — có thể đặt một cặp sừng đối xứng hai bên đầu (dùng Symmetry X) hoặc một sừng đơn ở giữa trán tùy phong cách nhân vật.

## 3. Quy trình thực hành gợi ý

1. Xác định vị trí gốc sừng trên đầu (hai bên trán/đỉnh đầu), bật Symmetry X nếu làm cặp sừng đối xứng.
2. Dùng Mask vẽ vùng tròn nhỏ tại gốc sừng.
3. Dùng Snake Hook/Grab kéo dài nhiều đoạn ngắn, giảm dần Radius để tạo độ thon dần lên đỉnh sừng.
4. Hoặc: dùng Mask Extract để tách vùng đã mask thành mesh sừng riêng với Thickness phù hợp.
5. Dùng Crease khắc các đường xoắn/rãnh dọc theo thân sừng.
6. Dùng Draw Sharp làm rõ các gờ giữa rãnh.
7. Smooth nhẹ phần gốc sừng nối với da đầu để chuyển tiếp tự nhiên.
8. Xóa Mask (`Alt+M`) sau khi hoàn tất.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush / Công cụ | Chức năng |
|---|---|
| Brush **Mask** (`M`) | Vẽ mặt nạ cô lập vùng gốc sừng |
| `Alt+M` | Xóa toàn bộ Mask |
| `Ctrl` (giữ khi dùng Mask) | Đảo chiều mask |
| Menu Mask > **Mask Extract** | Tách vùng đã mask thành mesh riêng có độ dày |
| Brush **Snake Hook** | Kéo dài khối thành hình sừng |
| Brush **Draw Sharp** | Đắp khối giữ cạnh sắc nét hơn Draw thường |
| Brush **Crease** | Khắc rãnh xoắn/dọc trên thân sừng |
| `X` | Symmetry cho cặp sừng đối xứng |

## 5. Lưu ý & lỗi thường gặp

- Kéo sừng quá nhanh trong một lần thay vì nhiều đoạn ngắn khiến hình dạng cong không tự nhiên, dễ bị "gãy khúc".
- Không giảm Radius dần khi kéo lên đỉnh khiến sừng có độ dày đều thay vì thon tự nhiên.
- Gốc sừng nối cứng với da đầu, thiếu bước Smooth chuyển tiếp làm lộ đường ráp.
- Dùng Mask Extract với Thickness quá nhỏ khiến mesh sừng dễ bị lỗi khi Remesh sau này.

## 6. Checklist thực hành

- [ ] Đã dùng Mask để cô lập vùng gốc sừng.
- [ ] Đã tạo khối sừng thon dần bằng Snake Hook/Grab hoặc Mask Extract.
- [ ] Đã khắc rãnh/xoắn đặc trưng bằng Crease.
- [ ] Gốc sừng đã chuyển tiếp mượt với da đầu.
- [ ] Cặp sừng (nếu có) đối xứng qua Symmetry X.

## 7. Tóm tắt

Bài học hướng dẫn tạo sừng cho nhân vật bằng kỹ thuật Masking kết hợp Snake Hook/Grab hoặc Mask Extract, sau đó khắc chi tiết rãnh xoắn bằng Crease và Draw Sharp, tạo nên đặc điểm nổi bật cho nhân vật hoạt hình.
