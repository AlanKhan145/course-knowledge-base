# 067 — Woven Backpack

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Woven Backpack |
| **Thời lượng** | 11:46 |
| **Chủ đề chính** | Dựng ba lô đan lát bằng Array/Tissue add-on |

## 1. Mục tiêu bài học

- Dựng khối thể tích chính của ba lô trước khi thêm chi tiết đan lát bề mặt.
- Tạo hiệu ứng đan lát (weave) bằng Array Modifier lặp lại theo bề mặt cong hoặc Tissue add-on.
- Hoàn thiện dây đeo (straps) gắn vào cơ thể nhân vật.

## 2. Nội dung chính

Ba lô bắt đầu từ một **khối thể tích chính** dựng bằng Subdivision Surface trên một base hình hộp/oval được làm phồng nhẹ (giống túi vải căng đầy đồ đạc bên trong) — tương tự tư duy organic modeling ở Module 03. Sau khi có hình khối tổng thể, bề mặt được phủ chi tiết **đan lát (woven pattern)**: dải sợi đan chéo qua lại mô phỏng ba lô mây/liễu gai đan tay.

Có hai cách tiếp cận: (1) dùng **Array Modifier** kết hợp **Curve Modifier hoặc Shrinkwrap** để lặp lại một dải sợi nhỏ bám theo bề mặt cong của khối ba lô theo cả hai hướng ngang-dọc, tạo lưới đan thủ công có kiểm soát; hoặc (2) dùng **Tissue add-on** (add-on chuyên tạo hoa văn/lưới phủ theo bề mặt phức tạp, nhanh hơn cách thủ công nhưng cần làm quen giao diện riêng) để tự động phủ một pattern đan lên toàn bộ bề mặt khối ba lô.

**Dây đeo (straps)** dựng đơn giản hơn: dải phẳng dài Solidify để có độ dày, uốn theo Curve hoặc Simple Deform Bend để ôm theo vai nhân vật, phần khóa/nắp đóng mở dựng bằng box-modeling nhỏ (Module 04). Toàn bộ ba lô sau đó dùng **Surface Deform** hoặc đơn giản là parent + weight paint nhẹ để bám theo lưng nhân vật khi tư thế thay đổi ở bước rig (bài 070).

## 3. Quy trình thực hành gợi ý

1. Dựng khối thể tích chính của ba lô từ base hình hộp/oval, Subdivision Surface làm phồng.
2. Chọn cách tạo hoa văn đan: Array + Shrinkwrap thủ công, hoặc dùng Tissue add-on nếu đã cài đặt.
3. Phủ pattern đan lên toàn bộ bề mặt ba lô, kiểm tra mật độ hợp lý (không quá dày đặc gây nặng máy).
4. Dựng dây đeo bằng dải Solidify, uốn theo Curve/Simple Deform để ôm vai nhân vật.
5. Dựng khóa/nắp đóng bằng box-modeling, gắn vào đúng vị trí.
6. Đặt ba lô vào lưng nhân vật, kiểm tra không xuyên chéo với cơ thể/trang phục.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Array Modifier | Modifier Properties > Add Modifier > Generate > Array |
| Shrinkwrap Modifier | Modifier Properties > Add Modifier > Deform > Shrinkwrap |
| Simple Deform (Bend) | Modifier Properties > Add Modifier > Deform > Simple Deform |
| Tissue add-on (nếu cài) | Edit > Preferences > Add-ons > Tissue |

## 5. Lưu ý & lỗi thường gặp

- Hoa văn đan quá dày đặc làm tăng vọt số lượng polygon, gây nặng máy khi sculpt/render các bước sau — nên cân bằng độ chi tiết với hiệu năng.
- Dây đeo không bám đúng theo dáng vai khi nhân vật được pose ở bài 070 nếu chưa gắn Surface Deform hoặc weight paint phù hợp từ bước này.
- Pattern đan không nhất quán hướng (một số đoạn đan ngang, một số đan dọc) khiến bề mặt trông lộn xộn thiếu logic thị giác.

## 6. Checklist thực hành

- [ ] Đã dựng khối thể tích chính của ba lô.
- [ ] Đã tạo hiệu ứng đan lát nhất quán trên bề mặt.
- [ ] Đã hoàn thiện dây đeo và khóa/nắp đóng.
- [ ] Đã đặt ba lô đúng vị trí trên lưng nhân vật, không xuyên chéo.

## 7. Tóm tắt

Ba lô đan lát là bài tập ứng dụng thực tế của Array/Shrinkwrap (hoặc Tissue add-on) để tạo hoa văn bề mặt phức tạp một cách hiệu quả, đồng thời chuẩn bị một asset sẽ cần bám theo chuyển động cơ thể ở các bước rig tiếp theo.
