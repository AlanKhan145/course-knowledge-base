# Bài 05 - Chuỗi điều khiển xoáy từ thân đến đuôi

## 1. Tóm tắt

Đây là bài trung tâm của khóa học. Dữ liệu DPIV và mô phỏng được tổng hợp trong bài báo cho thấy thân cá tạo một làn sóng vorticity bound di chuyển dọc thân. Khi biên độ uốn tăng về phía sau, vorticity tăng, bắt đầu shed mạnh hơn ở vùng thân thu hẹp và cuống đuôi. Vây đuôi sau đó tái định vị các xoáy này để tạo reverse Kármán street và jet đẩy.

## 2. Mục tiêu bài học

- mô tả chuỗi body wave → bound vorticity → shedding → tail interaction → jet;
- giải thích vì sao biên độ chuyển động tăng từ đầu đến đuôi;
- hiểu vai trò của peduncle;
- đọc Figure 5, 7 và 8;
- liên hệ body-generated vorticity với tail-generated vorticity.

## 3. Sóng chuyển động dọc thân

Bài báo mô tả chuyển động thân như một traveling wave. Trong mặt phẳng dọc giữa thân, chuyển động này đi kèm một làn sóng spatial của **body-bound vorticity**.

Không nên hiểu “bound” là xoáy đứng yên tuyệt đối. Nó là vorticity gắn với trường dòng quanh thân trước khi shed tự do vào wake.

## 4. Biên độ tăng dần từ đầu đến đuôi

Khi amplitude của thân tăng từ đầu về đuôi, biên độ bound vorticity cũng tăng. Tại vùng gần chiều rộng cực đại của thân, vorticity ở các mép trên/dưới bắt đầu shed, ban đầu yếu và tăng mạnh khi tới peduncle.

Bài báo nhấn mạnh mức shedding phụ thuộc mạnh vào:

- hình dạng thân;
- hình dạng vây;
- vị trí dọc thân.

## 5. Peduncle là nút chuyển tiếp quan trọng

Ở vùng cuống đuôi, các cấu trúc xoáy ba chiều đã được shed tự do và đi vào vùng tương tác với tail.

Tail không chỉ “quạt” nước. Nó **reposition**:

- xoáy đến từ bên trái sang bên phải;
- xoáy đến từ bên phải sang bên trái.

Sự tái định vị đó giống cơ chế foil thao tác xoáy tới ở Bài 01.

## 6. Chuỗi cơ chế hoàn chỉnh

```mermaid
flowchart LR
    A[Sóng uốn dọc thân] --> B[Bound vorticity tăng theo biên độ]
    B --> C[Shedding tăng ở thân sau]
    C --> D[Xoáy tự do tới peduncle]
    D --> E[Vây đuôi tái định vị xoáy]
    E --> F[Tương tác với xoáy do tail shed]
    F --> G[Reverse Kármán street]
    G --> H[Jet đẩy]
```

Đây là lý do mô hình animation cá tự nhiên không nên chỉ xoay tail bone một cách độc lập. Pha và biên độ của thân trước đó quyết định trường dòng mà tail gặp.

## 7. Figure 5 - DPIV phía sau cá bơi thẳng

![Figure 5 - DPIV wake của cá bơi thẳng](../assets/images/figures/figure-05-dpiv-mullet-wake.png)

Figure 5 cho thấy trường vận tốc quanh thân và phía sau tail của một mullet bơi thẳng. Hình được dùng để minh họa reverse Kármán street và tổ chức wake có liên quan đến hiệu suất đẩy cao.

## 8. Figure 7 - separation và tail interaction

![Figure 7 - Dòng dọc thân và wake](../assets/images/figures/figure-07-longitudinal-flow.png)

Các contour vorticity và streamline cho thấy body không phải khối thụ động. Separation từ thân và interaction của tail với vorticity tới là một chuỗi liên tục.

## 9. Figure 8 - tadpole CFD

![Figure 8a - Tadpole ở C-curve](../assets/images/figures/figure-08a-tadpole-c-curve.png)

![Figure 8b - Tadpole ở S-curve](../assets/images/figures/figure-08b-tadpole-s-curve.png)

Mô phỏng tadpole ở `Re = 7200` cho thấy onset của separation tại mép thân và wake gồm các cấu trúc xoáy ba chiều xoay ngược chiều nhau, bố trí phản đối xứng. Bài báo cũng nhắc rằng chuyển động snout có ảnh hưởng đáng kể tới dòng vùng đầu.

## 10. Nước nông và nước sâu

Một tranh luận lịch sử là xoáy gần thân xuất hiện mạnh tới mức nào. Bài báo tổng hợp kết quả cho thấy nước nông làm shedding thân mạnh hơn và xuất hiện sớm hơn về phía trước, nhưng cơ chế định tính của vorticity control vẫn giữ.

Điều này rất quan trọng khi so sánh video thí nghiệm: độ sâu bể có thể làm thay đổi mức độ separation quan sát được.

## 11. Ý nghĩa cho mô phỏng và animation

Các suy luận sau là cách chuyển trực tiếp nội dung bài báo thành yêu cầu mô hình chuyển động:

- pha uốn phải truyền từ đầu/thân trước về đuôi;
- biên độ thường tăng dần về phía sau;
- tail nên có pha tương quan với sóng thân, không phải random độc lập;
- rẽ hoặc tăng tốc cần thay đổi cả body wave và tail stroke;
- vây đuôi nên được coi là bộ phận “xử lý wake” do thân tạo ra.

Các điểm này là **suy luận thiết kế từ cơ chế thủy động lực học trong bài báo**, không phải thông số rig cụ thể do bài báo cung cấp.

## 12. Câu hỏi tự kiểm tra

1. Vì sao bound vorticity tăng về phía tail?
2. Shedding bắt đầu và mạnh lên ở vùng nào?
3. Tail làm gì với xoáy tới từ hai phía?
4. Reverse Kármán street trong wake giữa thân có bao nhiêu xoáy trái dấu mỗi chu kỳ theo mô tả bài báo?
5. Nước nông thay đổi quan sát shedding như thế nào?

## 13. Tổng kết

Trong bơi ổn định, thân và tail là một hệ thống điều khiển dòng liên tục. Thân tạo và vận chuyển vorticity; phần sau thân shed nó; tail nhận, tái định vị và phối hợp với vorticity do chính tail tạo ra để tổ chức một jet đẩy hiệu quả.
