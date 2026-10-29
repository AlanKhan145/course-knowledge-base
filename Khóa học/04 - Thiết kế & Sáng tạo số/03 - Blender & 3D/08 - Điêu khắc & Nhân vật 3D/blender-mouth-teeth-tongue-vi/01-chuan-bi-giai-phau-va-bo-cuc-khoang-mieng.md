# Bài 01 — Chuẩn bị và phác họa hình học khoang miệng

**Mốc video:** 00:00–01:56  
**Đầu vào:** Đầu nhân vật đã có mesh và vùng miệng được retopology.  
**Đầu ra:** Đường tham chiếu để dựng trần miệng, sàn miệng và đoạn chuyển sâu về họng.

## Mục tiêu học tập

- Hiểu lý do cần có **khoang miệng 3D** chứ không chỉ một lỗ trống ở môi.
- Phân biệt góc nhìn chính diện, góc nhìn bên và chế độ **Wireframe**.
- Vẽ được biên dạng gần đúng cho trần/sàn miệng trước khi dựng lưới.

## 1. Tại sao phải dựng bên trong miệng?

Khi nhân vật mở miệng, camera nhìn thấy nhiều hơn răng: vùng phía sau môi, trần miệng, sàn miệng, không gian tối bên trong và cuối khoang. Nếu không có cavity, người xem có thể **nhìn xuyên qua đầu**. Vì vậy ta dựng một hình học có chiều sâu, đủ kín để ngăn hiện tượng này, nhưng không cần mô phỏng giải phẫu y khoa đầy đủ cho nhân vật game.

**Phân biệt thuật ngữ**

| Thuật ngữ | Nghĩa |
|---|---|
| Mouth cavity / mouth bag | Khoang/lòng miệng 3D nối từ viền trong môi về phía họng |
| Lip inner edge loop | Vòng cạnh phía trong môi, chỗ bắt đầu extrude |
| Gums | Nướu (không phải kẹo cao su) |
| Palate | Vòm miệng / phần trần |
| Lower oral floor | Sàn miệng và phần mô mềm dưới lưỡi |
| Throat opening | Hướng chuyển tiếp sâu về phía họng |

## 2. Thiết lập vùng làm việc

1. Mở model đầu nhân vật; lưu bản sao trước khi làm.
2. Tạm thời **ẩn body, tóc và phụ kiện** để chỉ còn phần đầu đang xử lý.
3. Chia cửa sổ 3D Viewport thành **hai vùng** bằng cách kéo góc cửa sổ: một vùng giữ góc chính diện (`Numpad 1`), vùng còn lại xem bên (`Numpad 3`) hoặc Orbit phù hợp.
4. Ở góc nhìn bên, chuyển sang **Wireframe** (`Z` rồi chọn Wireframe, hoặc `Shift+Z` tùy keymap); việc này giúp thấy các đường mesh nằm phía trong.
5. Dùng công cụ **Annotate** để đánh dấu đường tham chiếu. Chọn placement theo **View** hoặc **3D Cursor** nếu phù hợp; **không chọn Surface** nếu bạn muốn nét không bám lên mesh đầu.

> **Kiểm tra:** Bạn quan sát được vùng môi từ một góc và mặt cắt tương đối của khoang miệng từ góc còn lại.

## 3. Phác hình cavity

- **Sàn miệng:** Từ phía trong môi dưới, vùng cong tiến về phía nướu, hạ về phía trong xương hàm rồi đi sâu về họng. Không nên tạo một mặt phẳng kéo thẳng từ môi vào sau đầu.
- **Trần miệng:** Từ mép môi trên đi vào vòm miệng; đỉnh vòm nằm sau hàng răng trên, sau đó hạ dần về phía họng.
- **Độ sâu:** Kéo đủ sâu để camera nhìn từ môi không thấy khoảng trống xuyên đầu, nhưng tối ưu số cạnh theo mức độ cần thiết.

```text
Sơ đồ mặt cắt ngang dọc đơn giản (không theo tỉ lệ)

         Mũi
          ▲
  Môi trên ───\____  Vòm / trần miệng
               \   \________
   Khoang miệng  \           \  Hướng về họng
                /            /
  Môi dưới ───__/___        /
          Sàn miệng \______/
```

## 4. Lưu ý về hình học

- Vùng gần môi là nơi camera dễ nhìn thấy nhất: ưu tiên đường cong sạch, không thắt đột ngột.
- Tránh để đường thành trên và dưới **cắt xuyên** nhau ở vùng sau.
- Đừng cố khắc họa thanh quản hay mô sinh học sâu mà camera sẽ không thấy.
- **Bổ sung:** Nếu đã có rig facial, lưu ý các đoạn gần môi cần mật độ cạnh thích hợp cho đóng/mở và cười/nói.

## Bài thực hành

- [ ] Hai viewport đang hiển thị chính diện và bên hông.
- [ ] Có đường phác trần và sàn miệng.
- [ ] Đường phác đủ sâu để tránh nhìn xuyên qua đầu.
- [ ] Lưu file `mouth_01_guides.blend`.

**Câu hỏi tự kiểm tra:** Vì sao “kéo sâu đến mức không nhìn xuyên đầu” hữu ích hơn việc cố mô hình hóa đầy đủ cổ họng cho một nhân vật chỉ xuất hiện ở góc nhìn bình thường?

**Chuyển bài:** [Bài 02 — Extrude cavity](02-tao-khoang-mieng-va-tach-object.md).
