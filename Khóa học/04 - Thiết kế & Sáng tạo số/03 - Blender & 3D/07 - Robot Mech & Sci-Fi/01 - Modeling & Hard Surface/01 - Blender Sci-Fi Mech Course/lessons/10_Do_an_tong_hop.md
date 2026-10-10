# Bài 10 — Đồ án tổng hợp: Hoàn thiện thân và ba lô robot Mech Sci-Fi

## 1. Bài toán

Xây dựng một mô hình 3D tập trung vào **phần thân và ba lô robot Mech khoa học viễn tưởng**, có cấu trúc đủ rõ để kiểm tra kỹ thuật hard-surface trong Blender. Sản phẩm cần thể hiện lớp vỏ giáp, hốc cơ khí, backpack, hộp phụ, bình chứa, đai giữ, đường ống, đèn và chi tiết lắp ráp. Đây là đồ án **dựng hình**, không phải yêu cầu dựng rig, UV, texture hoàn chỉnh hay hệ animation.

## 2. Mục tiêu sản phẩm

- Tạo torso đối xứng và có lớp ngực nhô khỏi vỏ chính.
- Có ít nhất một vùng inset/extrude thể hiện khoang cơ khí lõm.
- Dựng backpack có góc vát, thành và đường cắt hỗ trợ hình khối.
- Tạo hộp chứa, ngàm hoặc mô-đun phụ phía sau.
- Có bình chứa đi kèm đai giữ và đường ống 3D có độ dày.
- Bố trí đèn, gờ và bu lông để hoàn thiện hình khối.
- Bảo đảm scene dễ chỉnh sửa, không có lỗi mesh hiển nhiên khi quan sát.

## 3. Chuẩn bị và cách tổ chức file

Khởi tạo hoặc tiếp tục file Blender chứa torso; giữ ảnh tham chiếu và phần đầu robot nếu có. Tạo các tên object rõ ràng, chẳng hạn `Torso_Main`, `Backpack`, `Tank`, `Tube_Main`, `Front_Lights`, `Bolts`. Tên gọi không bắt buộc trùng, nhưng phải đủ dễ phân biệt.

Nên lưu các mốc riêng thay vì chỉ ghi đè một file:

```text
mech_torso_01_blockout.blend
mech_torso_02_backpack.blend
mech_torso_03_tank_tubes.blend
mech_torso_final.blend
```

Không áp dụng (`Apply`) tất cả modifier chỉ vì đã gần xong. Chỉ apply khi có nhu cầu kỹ thuật cụ thể và sau khi đã lưu bản có thể sửa được.

## 4. Milestone 1 — Vỏ thân và ngực

Từ cube, tạo nửa torso và Mirror theo `X`. Loại bỏ mặt giữa không cần thiết, kiểm tra `Clipping`/`Merge`. Điều chỉnh dáng từ Front, Side, Perspective View. Dùng `Ctrl + R` chia các vùng ngực và `E` extrude một vài mặt tạo lớp giáp nhô. Thêm bevel thủ công ở các mép cần nhấn; dùng `I` và `E` tạo panel nhỏ.

**Điểm nghiệm thu:** ngực có ít nhất hai cấp bề mặt, đường giữa không hở, không có cạnh bevel chồng bất thường.

## 5. Milestone 2 — Khoang và cơ khí bên trong

Tạo một hốc lõm bằng Inset/Extrude, dựng hai trụ nối hoặc thanh đỡ và các khe thông gió. Các cụm phụ phải có vị trí nhất quán với hốc và tiếp xúc tương đối hợp lý với phần vỏ.

**Điểm nghiệm thu:** nhìn bên thấy khoang có độ sâu; nhìn trước nhận ra các thành phần cơ khí bên trong.

## 6. Milestone 3 — Backpack và hộp chứa

Dùng `Shift + D` nhân bản mặt phía sau thân, scale/extrude tạo ba lô. Dựng cạnh nghiêng có kiểm soát; nơi `Ctrl + R` không đi được, cô lập mesh và dùng Knife. Tạo một hộp lưu trữ và mô-đun phụ gắn trên ba lô.

**Điểm nghiệm thu:** góc nhìn phía sau phân biệt được vỏ, hộp chứa và ngàm; topology không có đường cắt dư rõ rệt.

## 7. Milestone 4 — Bình chứa và hệ ống dẫn

Tạo bình hình trụ có hai đầu định hình bằng extrude và scale theo pivot phù hợp. Bổ sung ít nhất hai đai giữ và một đai nối vào backpack. Tạo curve riêng, tăng `Bevel Depth` để có ống nổi 3D; dùng các control point/handle để đưa hai đầu tới đúng vị trí. Dựng ít nhất một đầu nối bằng mesh.

**Điểm nghiệm thu:** ống có tiết diện, cong mềm, không gãy khúc hoặc xuyên vỏ một cách vô lý.

## 8. Milestone 5 — Trang trí cuối và kiểm tra chất lượng

Dựng một cụm đèn phía trước, khối trang trí, gờ vai và một nhóm bu lông. Dùng Snapping khi đặt bu lông lên panel. Bảo đảm chi tiết nhỏ không che mất dáng robot. Chuyển qua chế độ Object/Edit để kiểm tra các vùng có shading bất thường, mặt hở hoặc geometry chồng. Tính lại normals ở các phần mesh cần thiết.

**Điểm nghiệm thu:** các chi tiết bám bề mặt, không đối xứng sai ngoài ý muốn và các vùng bevel bắt sáng hợp lý.

## 9. Quy trình kiểm thử sản phẩm

Thực hiện lần lượt những phép kiểm thử thủ công:

1. **Đối xứng:** nhìn trước, xác minh thân không có khe giữa; kiểm tra Modifier.
2. **Silhouette:** nhìn trước, bên và góc ba phần tư để nhận xét tỉ lệ ngực/ba lô.
3. **Topology:** bật Wireframe, rà đường cắt ở ba lô và các mặt vừa extrude.
4. **Normals và shading:** chọn phần mesh thích hợp, kiểm tra hướng normal; dùng `Shift + N` khi cần.
5. **Vị trí phụ kiện:** kiểm tra bình, dây đai, đầu ống, bu lông có điểm chạm rõ ràng.
6. **Khả năng chỉnh sửa:** kiểm tra các object riêng, modifier còn hợp lý, tên object dễ xác định.
7. **Lưu trữ:** `Ctrl + S`, mở lại file và kiểm tra các object quan trọng có còn đầy đủ.

## 10. Deliverable và Definition of Done

**Tệp cần nộp:** `mech_torso_final.blend` cùng tối thiểu bốn ảnh chụp viewport: trước, bên, sau, ba phần tư. Các ảnh dùng để kiểm tra hình khối, không bắt buộc render ảnh đẹp.

**Definition of Done:**

- [ ] Torso và lớp ngực được dựng, có Mirror hợp lý.
- [ ] Có panel nổi/lõm và mép vát phù hợp.
- [ ] Có ít nhất một khoang cơ khí với chi tiết bên trong.
- [ ] Backpack có khối chính, góc cắt và một hộp phụ.
- [ ] Có bình, đai kẹp, ống Bézier có độ dày và đầu nối.
- [ ] Có đèn, gờ hoặc khe thông gió cùng nhóm bu lông.
- [ ] Đã kiểm tra mặt thừa, normals, giao cắt và hiện tượng shading xấu.
- [ ] File `.blend` mở được và các thành phần còn dễ chỉnh sửa.

## 11. Tiêu chí tự đánh giá

| Tiêu chí | Chưa đạt | Đạt | Tốt |
| --- | --- | --- | --- |
| Silhouette thân và ba lô | Khó nhận biết các khối | Rõ các khối chính | Cân đối trong cả ba góc nhìn |
| Chất lượng mesh | Có mặt thừa, hở hoặc méo nổi bật | Không có lỗi rõ ràng | Topology gọn, dễ chỉnh sửa |
| Chi tiết cơ khí | Rời rạc, thiếu độ dày | Có khoang và các thành phần gắn hợp lý | Có phân cấp lớn/nhỏ rõ ràng |
| Bình và ống dẫn | Ống gãy hoặc không nối | Ống cong có đầu nối | Đường ống tự nhiên và bố cục sạch |
| Hoàn thiện | Chi tiết lộn xộn | Đèn/bu lông hợp lý | Nhịp điệu chi tiết nhất quán |

## 12. Câu hỏi ôn tập

### Câu 1

Khi thấy đường nứt dọc giữa torso, bước đầu tiên nên kiểm tra là gì?

A. Độ sáng đèn.  
B. Camera.  
C. Chất lượng texture.  
D. Origin cùng `Merge/Clipping` của Mirror.

**Đáp án:** D. **Giải thích:** Những yếu tố này trực tiếp ảnh hưởng đường nối hai nửa.

### Câu 2

Một ống Curve đã đặt đúng vị trí nhưng rất mảnh, bước chỉnh nào hợp lý?

A. Tăng Bevel Depth của Curve.  
B. Tăng ISO.  
C. Xóa bình chứa.  
D. Tắt viewport.

**Đáp án:** A. **Giải thích:** Bevel Depth tạo độ dày hình học cho ống.

### Câu 3

Khi `Loop Cut` dừng tại vùng mép đã vát, lựa chọn nào có căn cứ?

A. Dùng Shade Smooth thay thế cắt hình học.  
B. Dùng Knife để cắt có kiểm soát rồi kiểm tra topology.  
C. Thêm Sun Light.  
D. Chỉ thay đổi màu object.

**Đáp án:** B. **Giải thích:** Knife xử lý những vùng không có đường đi loop phù hợp.

### Câu 4

Để bố trí nhiều bu lông trên các mặt giáp có góc khác nhau, chức năng nào giúp ích trực tiếp?

A. Graph Editor.  
B. Text Editor.  
C. Face Snapping và kiểm tra hướng theo normal.  
D. Sequencer.

**Đáp án:** C. **Giải thích:** Snap hỗ trợ tiếp xúc bề mặt và định hướng lắp đặt.

### Câu 5

Sản phẩm nào phù hợp nhất với phạm vi đồ án này?

A. Một đoạn phim animation hoàn chỉnh không có mesh.  
B. Một mô hình robot toàn thân đã rig nhưng không có ba lô.  
C. Chỉ một ảnh render không có file dự án.  
D. Một file `.blend` của torso và backpack có hình khối/chi tiết cơ khí, kèm ảnh kiểm tra.

**Đáp án:** D. **Giải thích:** Đồ án yêu cầu kiểm tra sản phẩm dựng hình và khả năng tiếp tục chỉnh sửa.

## 13. Tổng kết

Một robot Mech được dựng tốt không đồng nghĩa với nhiều chi tiết nhất. Kết quả chất lượng là mô hình có **phân cấp hình khối, topology hợp lý, phụ kiện gắn đúng chỗ và các bước kiểm tra rõ ràng**.
