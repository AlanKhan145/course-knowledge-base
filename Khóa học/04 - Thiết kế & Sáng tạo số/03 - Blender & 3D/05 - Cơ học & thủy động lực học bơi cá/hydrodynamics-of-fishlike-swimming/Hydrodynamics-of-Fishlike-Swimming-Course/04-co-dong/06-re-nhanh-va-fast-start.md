# Bài 06 - Rẽ nhanh và fast-start

## 1. Tóm tắt

Cá có thể đạt gia tốc cực lớn và đổi hướng nhanh bằng cách uốn thân thành C hoặc S rồi “mở” thân theo một traveling wave. Cơ chế thủy động lực học chính vẫn là vorticity control, nhưng thay vì wake tuần hoàn ổn định, cơ động nhanh tạo một **cặp xoáy mạnh có hướng**, hình thành một local jet để đổi động lượng của cá.

## 2. Mục tiêu bài học

- mô tả kinematics C-start/S-start;
- hiểu double-flip của vây đuôi;
- mô tả tuần tự hai body-bound vortices trong C-turn;
- giải thích cách tail tái định vị vorticity để tạo vortex pair;
- hiểu vai trò của timing và hạn chế separation drag.

## 3. Kinematics của fast-start

Bài báo dẫn các quan sát trên các loài nhanh như pike, với gia tốc cực đại được báo cáo vượt `150 m/s²` trong các nghiên cứu được trích dẫn.

Chuỗi chuyển động tổng quát:

1. thân uốn mạnh thành hình C hoặc S;
2. thân nhanh chóng duỗi/giải uốn;
3. biến dạng truyền dọc thân như một traveling wave;
4. tail thực hiện stroke mạnh để tổ chức wake thành cặp xoáy đẩy.

## 4. Double-flip của caudal fin

Thí nghiệm mô phỏng tail cho thấy một double-flip:

- flip sang một phía và shed một xoáy;
- đảo chiều và shed xoáy trái dấu.

Kết quả là một vortex pair tạo thrust. Một khoảng trễ thời gian giữa hai flip có thể tăng thrust vì cho phép các eddy phát triển thích hợp trước khi tương tác.

Điểm quan trọng: **timing là một biến điều khiển thủy động lực học**, không chỉ một đặc điểm thẩm mỹ của chuyển động.

## 5. C-turn của Giant Danio

Trong C-maneuver, flow ban đầu tổ chức thành hai vùng gần tròn:

- một gần tail;
- một gần head;

hai vùng này được mô tả như hai body-bound vortices trái dấu.

Sau đó:

1. tail bắt đầu đi sang trái;
2. xoáy ngược chiều kim đồng hồ dịch về tail và shed trước peduncle;
3. xoáy này tới caudal fin và được tái định vị;
4. ở stroke ngược lại, xoáy chiều kim đồng hồ ban đầu gần head đi ra sau;
5. nó shed, được tail thao tác và ghép với xoáy trước;
6. cặp xoáy tạo local jet đổi momentum của cá.

## 6. Figure 9 - đo DPIV và mô phỏng

![Figure 9 - Flow khi Giant Danio rẽ 60 độ](../assets/images/figures/figure-09-turning-giant-danio.png)

Figure 9 đối chiếu DPIV trên cá sống với mô phỏng số tại mặt phẳng giữa thân trong một maneuver 60°. Đây là bằng chứng quan trọng rằng mô phỏng có thể tái hiện các cấu trúc flow chính của chuyển động rẽ.

## 7. Figure 10 - chuỗi vorticity control khi rẽ

![Figure 10 - Chuỗi body-bound và wake vorticity khi rẽ](../assets/images/figures/figure-10-turning-vorticity-sequence.png)

Figure 10 cô đọng các giai đoạn của turning maneuver. Vùng đánh dấu `L` là vùng áp suất thấp được thân và tail thao tác để tăng cường turning thrust jet.

## 8. Cặp xoáy mạnh hơn bơi thẳng

Trong Giant Danio được phân tích, bài báo báo cáo:

- circulation vô thứ nguyên trung bình của xoáy trong jet lớn hơn khoảng 42% so với xoáy wake điển hình khi bơi thẳng;
- bán kính lõi vortex hơn gấp đôi so với bơi thẳng.

Các con số này thuộc trường hợp nghiên cứu cụ thể, nhưng cho thấy turning cần tạo một “packet” động lượng mạnh hơn wake steady-swimming.

## 9. Vì sao cá cơ động hiệu quả?

Bài báo kết luận sự linh hoạt xuất sắc được giải thích bởi hai yếu tố:

- tạo nhanh một vortex pair nhờ body flexing và tail manipulation;
- không hình thành nhiều vorticity “ký sinh” ngoài cặp xoáy cần thiết, nên tránh separation drag lớn như một rigid body quay tương tự.

Tức là không chỉ tạo lực lớn, mà còn **tập trung wake vào đúng cấu trúc cần cho maneuver**.

## 10. Figure 8 và hình C/S

![Figure 8a - C-curve](../assets/images/figures/figure-08a-tadpole-c-curve.png)

![Figure 8b - S-curve](../assets/images/figures/figure-08b-tadpole-s-curve.png)

Mặc dù Figure 8 là mô phỏng tadpole chứ không phải cùng thí nghiệm Giant Danio, hai panel C-curve và S-curve giúp hình dung việc hình dạng thân thay đổi topology dòng phía sau như thế nào.

## 11. Chuyển thành nguyên tắc animation

Từ cơ chế trong bài báo có thể rút ra:

- turning không nên chỉ xoay toàn bộ root bone;
- body curvature phải xuất hiện trước hoặc đồng thời với đổi hướng;
- tail stroke cần có asymmetry theo maneuver;
- gia tốc nhanh nên đi cùng tăng biên độ và thay đổi timing giữa các đoạn thân;
- rẽ trái/phải phải đảo dấu pattern tương ứng của body curvature và tail stroke.

Đây là nguyên tắc định tính; bài báo không cung cấp đường cong keyframe rig cụ thể.

## 12. Câu hỏi tự kiểm tra

1. C-start khác steady swimming ở mục tiêu wake như thế nào?
2. Vì sao cần time lag giữa hai flip của tail trong thí nghiệm được dẫn?
3. Hai body-bound vortices ban đầu nằm gần vùng nào?
4. Tail thao tác chúng như thế nào trước khi tạo cặp xoáy wake?
5. Vì sao absence of parasitic shedding có lợi cho maneuver?

## 13. Tổng kết

Cá rẽ nhanh bằng cách biến toàn thân thành một “máy tạo và định tuyến xoáy”. Body curvature tạo các vùng vorticity mạnh, tail thu nhận và tái định vị chúng thành cặp xoáy định hướng, qua đó tạo local jet đủ mạnh để thay đổi momentum rất nhanh.
