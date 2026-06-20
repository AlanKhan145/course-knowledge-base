# Ngay 035 - Tuan 7, ngay 5

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-035.txt

## Tong quan

- Chu de mo dau: Thế là chúng ta đã đến đây.
- File goc: day-035.txt
- So y chinh: 495
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Thế là chúng ta đã đến đây.
- Đây là tuần thứ bảy.
- Ngày thứ năm.
- Dường như đây là khoảnh khắc quan trọng.
- Ngày công bố kết quả.
- À, nhưng trước tiên, một lời nhắc nhở.
- Bạn đã có thể làm việc với các mô hình nguồn mở và nguồn đóng, sử dụng các công cụ gọi hàm, và được hỗ trợ bởi chiến lược 5 bước của Rag để giải quyết vấn đề kinh doanh, bao gồm thu thập dữ liệu, tinh chỉnh mô hình tiên tiến, và hiện tại là chạy Q Laura cho mô hình nguồn mở, bao gồm tối ưu hóa siêu tham số, theo dõi quá trình đào tạo, và các trọng số và sai số tuyệt vời.
- Hy vọng là bạn không hào hứng quá mức như tôi, nhưng ít nhất bạn đã tận hưởng quá trình thực hiện nó.
### Muc 2

- Và hôm nay, tất nhiên, là ngày công bố kết quả.
- Chúng ta sẽ thực hiện quá trình suy luận trên một mô hình đã được tinh chỉnh.
- Vậy là với ma trận Laura và các thứ khác.
- Vậy có một số vấn đề cần đề cập và kết luận ở đây, để bạn có thể tự tin thực hiện tất cả những điều này một cách độc lập.
- Đó là phần quan trọng nhất của nó.
- À, và tôi, tôi rất hào hứng được chia sẻ kết quả với các bạn.
- Tất nhiên, điều chúng ta đang cố gắng hướng tới là đạt được một mô hình có hiệu suất gần với mô hình tiên tiến nhất.
- Nhận thức rằng chúng ta đang làm việc với mô hình Llama 3.2, một mô hình có 3 tỷ tham số, một mô hình nhỏ so với các mô hình tiên tiến có hàng nghìn tỷ tham số, và nhận thức rằng chúng ta đã lượng tử hóa nó xuống còn 4 bit để nó có thể chạy trên điện thoại di động một cách chắc chắn.
### Muc 3

- Và vì vậy, nó rất nhỏ.
- Câu hỏi là, liệu chúng ta có thể đạt được hiệu suất gần với mức tối ưu không?
- Liệu nó có thể đánh bại Ed không?
- Ít nhất nó cũng nên có thể đánh bại khả năng của tôi.
- Có thể nó sẽ gần bằng GPT-4.1 Nano hoặc thứ gì đó tương tự.
- Đó chính là mục tiêu mà chúng ta hướng tới khi cố gắng tối ưu hóa mô hình mã nguồn mở, vì nó miễn phí và là thứ mà bạn có thể sử dụng.
- Được rồi.
- Nhưng trước tiên, trước khi chúng ta thực hiện việc đó, trước khi chạy quá trình suy luận, tôi muốn làm rõ một vấn đề mà tôi đã để ngỏ trong một thời gian dài, đó là giải thích chính xác về cách tính toán hàm mất mát mà chúng ta liên tục đề cập đến.
## Phan 2

### Muc 4

- Thiệt hại là gì?
- Cách tính toán như thế nào.
- Một số thông tin chi tiết hơn về đào tạo.
- Vậy trước khi bắt đầu thực hành, chúng ta sẽ xem qua một số slide lý thuyết nhé.
- Được rồi, bắt đầu nhé.
- Bạn nhớ bốn bước của quá trình đào tạo.
- Bây giờ bạn đã quen thuộc với họ rồi.
- Chúng tôi đã mã hóa từng cái một.
### Muc 5

- À, cách đây một tuần.
- Nhưng bây giờ chúng ta biết rằng trước tiên bạn phải thực hiện một lượt chạy trước.
- Đó là khi bạn có một số dữ liệu đầu vào và bạn dự đoán token tiếp theo sẽ là gì bằng cách phân tích dữ liệu đầu vào đó, tính toán độ mất mát, một phép tính cho biết mức độ sai lệch của dự đoán.
- Bạn thực hiện bước lùi (backward pass), tức là chúng ta xem xét: nếu điều chỉnh từng thông số này, liệu điều đó có làm giảm hay tăng độ mất mát (loss)?
- Sau đó, chúng ta thực hiện một bước nhỏ theo hướng làm giảm độ mất mát.
- Nó được gọi là bộ tối ưu hóa.
- Bạn còn nhớ chúng ta đã sử dụng một thuật toán tối ưu hóa gọi là Adam, tôi nghĩ là Adam, một thuật toán rất phổ biến.
- Phương pháp ban đầu được gọi là SGD (Stochastic Gradient Descent).
### Muc 6

- Đó là phương pháp cơ bản chỉ đơn giản là lấy tỷ lệ học tập nhân với gradient, sau đó di chuyển theo hướng ngược lại, và gradient của tỷ lệ học tập âm sẽ thực hiện một bước.
- Thế là xong.
- Đó là bốn bước trong quá trình đào tạo.
- À, bạn đã trải qua điều này một vài lần rồi.
- Và điều chúng ta sẽ tìm hiểu là cách tính toán khoản lỗ này.
- Và để có thêm một chút cái nhìn tổng quan về vấn đề này, về toàn bộ ý tưởng này.
- Vậy bước đầu tiên một lần nữa là bước truyền về phía trước.
- Vậy có một chuỗi nhập liệu như sau: "Giá là đô la." Và đó chính là token tiếp theo.
## Phan 3

### Muc 7

- Nó phải dự đoán rằng đó là một chuỗi đầu vào.
- Nó đã trở thành các ID token.
- Các ID token đó được đưa vào một mạng thần kinh nhân tạo, bao gồm mô hình cơ sở Llama 3.2 và một số bộ điều chỉnh Lora, có khả năng điều chỉnh và tinh chỉnh nhẹ mô hình Llama được áp dụng.
- Kết quả cuối cùng được đưa ra là token tiếp theo được dự đoán.
- Giả sử nó ghi giá là $99.
- Nó dự đoán 99 là token có khả năng cao nhất tiếp theo.
- Đó là đường chuyền về phía trước.
- Tiếp theo là tính toán tổn thất.
### Muc 8

- Tính toán tổn thất dựa trên dự đoán token tiếp theo là 99.
- Giả sử món đồ này thực sự có giá $89.
- Chúng ta chênh lệch $10.
- Vậy chúng ta cần tính toán một số tổn thất.
- Và sự mất mát đó chắc chắn phải liên quan đến việc chúng ta đã sai lầm đến mức nào, nếu như chúng ta thực sự đúng.
- Nếu đó là một dự đoán hoàn hảo, thì tổn thất phải bằng không, tức là không có sai số.
- Nó hoàn hảo.
- Nếu nếu nếu đó là nếu chúng ta sai lầm hơn, thì càng sai lầm, tổn thất càng lớn.
### Muc 9

- Được rồi.
- Số càng lớn thì kết quả càng xấu.
- Được.
- Bạn đang nghĩ, có thể bạn đang nghĩ, ừm, sao không nhỉ?
- Thử lấy sự chênh lệch giữa chúng xem sao?
- Sai số tuyệt đối.
- Đó chính là thứ chúng ta đã sử dụng suốt thời gian qua.
- Hoặc có thể là sai số bình phương trung bình mà hồi quy tuyến tính sử dụng.
## Phan 4

### Muc 10

- Nhưng có một vấn đề với điều đó mà chúng ta sẽ đề cập đến sau.
- Nhưng bạn đã hiểu ý chính rồi.
- Đó chính là bản chất của sự mất mát.
- Sau đó, chúng ta thực hiện một bước gọi là "backward pass", tức là đi qua từng tham số và xem xét: nếu chúng ta điều chỉnh nó một chút, liệu điều đó có làm cho hàm mất mát tăng hay giảm.
- Và tất nhiên, điều đó được gọi là tính toán gradient vì nó liên quan đến phép tính vi phân, và chúng ta chỉ cần thực hiện điều đó cho các bộ điều chỉnh Laura vì chúng ta đã cố định toàn bộ mô hình cơ sở.
- Vậy nên chúng ta chỉ thực hiện việc điều chỉnh này cho các bộ điều hợp Laura nhỏ hơn này, chúng đang được tối ưu hóa dựa trên gradient.
- Đó là cách bạn sẽ giải thích nó.
- Và việc thực hiện điều này sẽ đòi hỏi một quá trình tính toán vô cùng vất vả và phức tạp, liên quan đến hàng tấn công thức toán học.
### Muc 11

- Nhưng có một mẹo hay.
- Một kỹ thuật được gọi là backprop hoặc backpropagation, là phương pháp tính toán độ dốc, xác định mức độ nhạy cảm của các thành phần trong mạng thần kinh khi bị thay đổi nhẹ, bằng cách bắt đầu từ phần dưới cùng của mạng thần kinh, di chuyển ngược lên đến các đầu vào ban đầu, và tính toán tất cả các độ dốc dựa trên các độ dốc đã được tính toán trước đó.
- Và đó là vì nó sử dụng một thủ thuật toán học gọi là quy tắc chuỗi, một khái niệm mà bạn có thể nhớ từ thời trung học, giống như một khái niệm trong giải tích, cho phép bạn tính toán đạo hàm của một hàm số theo đạo hàm của các hàm số khác.
- Và vì vậy, nó sử dụng phương pháp này là áp dụng lặp đi lặp lại quy tắc chuỗi theo hướng ngược lại.
- Và đây là điều đã được phát minh từ lâu.
- Nhưng thủ thuật này là một trong những bí quyết đã làm cho việc huấn luyện mạng thần kinh trở nên hiệu quả đến vậy.
- Đó là một cách làm vô cùng hiệu quả đến mức một quy trình vốn dĩ rất tốn thời gian có thể được thực hiện một cách nhanh chóng.
- Và đặc biệt, điều này có thể diễn ra một cách hiệu quả, song song và nhanh chóng.
### Muc 12

- Và như vậy, chúng ta có thể tính toán các gradient trong quá trình gọi là back propagation hoặc back prop.
- Và tất cả những điều đó được gọi là quá trình truyền ngược.
- Được rồi.
- Đó chính là backprop.
- Và có lẽ bạn đã từng nghe câu nói đó.
- Nếu bạn muốn tìm hiểu thêm về backprop, thì việc tra cứu và tìm hiểu chi tiết hơn là điều dễ dàng.
- Nhưng tôi không muốn đi sâu vào chi tiết rùng rợn ở đây.
- Thực ra, chính thuật toán đó đã rất cũ.
## Phan 5

### Muc 13

- Tôi nghĩ nó từ những năm 1970, nhưng thực ra là vào những năm 1980, cụ thể là năm 1986, khi có bài báo nổi tiếng đó.
- Một trong số các tác giả là Geoff Hinton, người được coi là một trong những "cha đẻ" của trí tuệ nhân tạo hiện đại, và điều đó thực sự đã đưa nó vào tâm điểm của việc ứng dụng trong các mạng thần kinh trong trí tuệ nhân tạo.
- À, vậy backprop là cực kỳ quan trọng.
- Được rồi.
- Và sau đó, tối ưu hóa là bước thứ tư.
- Và đây là nơi chúng ta lấy tất cả các bộ chuyển đổi và nhẹ nhàng điều chỉnh chúng theo hướng đó.
- Điều đó có nghĩa là lần sau, mức độ tổn thất sẽ ít hơn.
- Bạn hiểu rồi.
### Muc 14

- Bạn đã biết về bốn bước này.
- Vậy bây giờ hãy đi sâu hơn một bước nữa để tôi có thể giải thích chính xác cách tính toán tổn thất là gì.
- Được rồi, quay lại với sơ đồ này một lần nữa.
- Hãy nhớ điều này.
- Chúng tôi vừa mới thấy điều này.
- Đường chuyền về phía trước.
- Tôi đã nói với bạn rằng quá trình truyền về phía trước (forward pass) là việc nhận một lời nhắc đầu vào, xử lý nó và dự đoán token tiếp theo.
- Nhưng điều đó không hoàn toàn đúng.
### Muc 15

- Tôi không nói dối, nhưng tôi đã đơn giản hóa một cách quá mức, điều này khiến chúng ta cần phải đi sâu hơn.
- Bây giờ, đó không phải là điều mà lệnh chuyển tiếp thực sự làm.
- Thực ra, như bạn biết đấy, từ khi chúng ta thực hiện điều này vào tuần thứ ba, tôi nghĩ rằng lệnh chuyển tiếp không dự đoán token tiếp theo.
- Nó tạo ra một phân phối xác suất cho mỗi token có thể có trong từ vựng, bao gồm tất cả 128.000 token tiếp theo có thể có.
- Mỗi trường hợp được gán một xác suất.
- Và đó chính là lý do tại sao, nếu bạn nhớ lại đầu ra của đầu LM, lớp cuối cùng của mạng thần kinh, nó là một ma trận có 128.000 chiều, vì mỗi phần tử của vectơ đó đại diện cho xác suất rằng đó là token tiếp theo chính xác, và nó được thiết kế theo cách đó.
- Đó là loại quy trình mà tất cả đều cộng lại thành một, vì vậy bạn phải có khả năng, phải có khả năng, phải có khả năng, ừm, bạn không thể có 200 token.
- Bạn phải sắp xếp sao cho tổng của tất cả các xác suất bằng một.
## Phan 6

### Muc 16

- Và mô hình đã đưa ra dự đoán của mình theo cách xác suất.
- Và thông thường, khi chúng ta nói về token tiếp theo được dự đoán, chúng ta đang đề cập đến cách nó chọn mẫu từ các lựa chọn, tức là chọn một trong các token từ phân phối xác suất này.
- Và tôi nhận ra rằng chúng ta đã đề cập đến điều này trong các buổi giảng trước.
- Bạn có thể đã biết điều này rồi.
- À, đôi khi bạn chỉ cần chọn giá trị tối đa, tức là token được gán xác suất cao nhất.
- Và đó thường là điều xảy ra nếu bạn đặt nhiệt độ về 0.
- Vậy ý bạn là đôi khi, thay vì sử dụng nhiệt độ thấp hơn, bạn chỉ cần lấy mẫu từ các xác suất này.
- Bạn chọn cái có xác suất cao nhất.
### Muc 17

- Vậy đó, đó là cách nó thực sự hoạt động.
- Và khi chúng ta nói rằng token dự đoán là 99, điều chúng ta muốn nói là nó có xác suất 15%, ví dụ, và đó là xác suất cao nhất.
- Đó chính là cái mà chúng ta đã chọn.
- Được rồi.
- Vậy thì việc tính toán tổn thất.
- Vì vậy, chúng tôi đã đưa ra một token tiếp theo là 99.
- Và token tiếp theo thực tế là 89.
- Chúng ta tính toán tổn thất như thế nào.
### Muc 18

- Chúng ta làm gì giữa hai con số này.
- Đây là điều có thể khiến bạn hơi bất ngờ.
- Nếu bạn không biết điều này, chúng tôi thực sự không xem xét token 99 đó chút nào.
- Nó không có ảnh hưởng gì đến việc tính toán tổn thất.
- Bạn kiểu như, gì cơ?
- Ừm, chúng tôi không xem xét điều đó, mà thay vào đó.
- Và đây chính là khoảnh khắc "Aha".
- Thay vào đó, chúng ta nên hỏi: Mô hình đã đưa ra xác suất bao nhiêu cho token mà chúng ta thực sự muốn?
## Phan 7

### Muc 19

- Mô hình đã đưa ra xác suất bao nhiêu cho token có giá trị 89?
- Không quan trọng nó nói gì ở câu 99 vì đó không phải là câu trả lời đúng.
- Nó đã nói gì về 89?
- À, và bạn biết đấy, vì nó không thể như vậy vì mọi thứ phải cộng lại thành một.
- Nếu nó cho xác suất 15% cho 99, thì nó phải nhỏ hơn con số đó.
- Nếu đó không phải là con số tối đa, thì chắc chắn phải là một con số nhỏ hơn cho 89.
- Vậy xác suất mà nó đưa ra cho 89 là bao nhiêu?
- Đó là điều tiếp theo chúng ta sẽ xem xét.
### Muc 20

- Và về cơ bản, nếu mô hình cho xác suất 100% cho giá trị 89, thì đó sẽ là một mô hình hoàn hảo.
- Nó cho biết có 100% khả năng rằng token tiếp theo là token cho 89, và điều đó có nghĩa là chúng ta sẽ, ừm, chúng ta sẽ muốn mức lỗ là zero.
- Nếu nó có bất kỳ số nào khác, chúng ta sẽ muốn mức lỗ cao hơn.
- Và số càng nhỏ, mức tổn thất càng cao.
- Và vì vậy, họ sử dụng một công thức, ừm, để, để đạt được điều này.
- Họ muốn có một công thức sao cho nếu xác suất là 100 thì tổn thất là zero.
- Nếu xác suất nhỏ hơn, chúng ta muốn mức lỗ cao hơn.
- Và công thức đó, chỉ là một chút toán học đối với bạn, họ lấy logarit âm của xác suất mà bạn nhớ là logarit.
### Muc 21

- À, nếu bạn không nhớ, thì đó là các bản ghi.
- Logarit của 1 là 0, do đó logarit âm của 1 (tức là 100%) cũng sẽ là 0.
- Vậy thì nó chắc chắn vượt qua bài kiểm tra đó.
- Và logarit âm của một số nhỏ hơn sẽ là một số lớn hơn.
- Vậy là nó vượt qua cả hai bài kiểm tra.
- Vậy, logarit âm của xác suất mà mô hình đưa ra token tiếp theo thực tế chính là token mà chúng ta đang tìm kiếm là 89.
- Đó là cách tính toán khoản lỗ.
- Và nếu bạn đang thắc mắc tại sao, đó là vì điều đó đơn giản là rất phù hợp với các phép tính.
## Phan 8

### Muc 22

- Khi tính toán điều này, mọi thứ diễn ra rất suôn sẻ.
- Khi thực hiện phương pháp back prop, việc sử dụng logarit âm giúp giải quyết vấn đề một cách gọn gàng và đơn giản.
- Và như vậy, nó đáp ứng tất cả các tính chất.
- Nó hoạt động tốt.
- Và đó chính là lựa chọn của chúng ta.
- Và điều đó có nghĩa là việc cố gắng giảm giá trị logarit âm của xác suất, token tiếp theo thực sự làm rất tốt trong việc huấn luyện mạng thần kinh và thực hiện điều đó.
- À, điều đó kết hợp với ý tưởng tính toán xác suất được gọi là hàm mất mát entropy chéo.
- Mất mát entropy chéo.
### Muc 23

- Đó chính là ý nghĩa của phép tính đó.
- Và bạn thường nghe thấy thuật ngữ "cross entropy loss".
- Tôi đã nói điều đó nhiều lần rồi.
- Và những con số về độ mất mát mà chúng ta đã thấy, cả độ mất mát trong quá trình đào tạo và độ mất mát trong quá trình kiểm tra, đều là độ mất mát entropy chéo.
- Và có thể bạn đang nghĩ, ừm, nhưng tại sao?
- Tại sao chúng ta không chỉ lấy sự chênh lệch giữa hai con số này hoặc cái gì đó tương tự?
- Và đó là vì hãy nhớ rằng các hệ thống quản lý học tập (LMS) này không thực sự được thiết kế để đưa ra các con số.
- Đó không phải là điều họ làm.
### Muc 24

- Họ thực sự đang cố gắng dự đoán các token và ngôn ngữ tự nhiên.
- Đó có thể là một mức giá.
- Đó có thể là một bình luận bằng tiếng Anh.
- Nó có thể là bất cứ thứ gì.
- Vì vậy, mặc dù việc lấy hiệu số giữa các con số có thể hoạt động tốt, nhưng trong trường hợp của chúng ta, nó thường không hiệu quả.
- Bạn sẽ không thể sử dụng điều đó cho bất kỳ trường hợp nào khác.
- Điều tuyệt vời về cách tính toán hàm mất mát entropy chéo này là nó áp dụng được cho mọi thứ, cho bất kỳ điều gì bạn có thể tưởng tượng.
- Chỉ là nói vậy thôi.
## Phan 9

### Muc 25

- Chúng tôi muốn hệ thống đưa ra đề xuất này, xác định xác suất mà hệ thống gán cho đề xuất đó và lấy logarit âm của xác suất đó, phương pháp này áp dụng cho mọi trường hợp.
- Đây là phương pháp tính toán tổn thất tiêu chuẩn cho một vấn đề phân loại.
- Và điều chúng ta có ở đây thực sự là việc phân loại.
- Chúng tôi đang cố gắng phân loại token tiếp theo có khả năng cao nhất.
- Đó là những gì đang xảy ra.
- Đó là lý do tại sao phương pháp này hoạt động hiệu quả đến vậy và tại sao nó được áp dụng rộng rãi cho hệ thống quản lý học tập (LMS).
- Đó là cách tính lỗ.
- À, và à, đúng rồi.
### Muc 26

- Vậy nên, chúng ta lấy logarit âm của xác suất của giá trị thực, tức là logarit âm của xác suất của $89 trong trường hợp này.
- Và nếu bạn lấy logarit âm của 1, bạn sẽ được 0.
- Vậy nếu bạn nói rằng nó sẽ là 89% và bạn đúng, đó là hoàn hảo.
- Không có tổn thất.
- Nếu không, logarit âm, số càng nhỏ thì mức độ tổn thất càng cao.
- Nó hoạt động rất tốt.
- Đó là tổn thất.
- Và sau khi tính toán tổn thất đó, chúng ta thực hiện backprop.
### Muc 27

- Và sau đó, chúng ta tiến hành tối ưu hóa.
- Như trước đây, chúng ta đang thực hiện một bước nhỏ để hy vọng rằng lần sau, xác suất của điều thực sự sẽ cao hơn một chút.
- Do đó, mức lỗ đó thấp hơn một chút.
- Nó hoạt động hoàn hảo.
- Và để tóm tắt lại tất cả những điều đó một lần nữa.
- Vậy, đầu ra của một mô hình không chỉ đơn giản là dự đoán token tiếp theo, mà là xác suất của tất cả các token có thể tiếp theo.
- Và đúng vậy, tôi đã nói rằng đó là đầu ra của lớp cuối cùng, nhưng nó không hoàn toàn chính xác.
- Những người đang rất muốn sửa lỗi cho tôi.
## Phan 10

### Muc 28

- Tôi sẽ nói ngay bây giờ, bạn thực sự sử dụng một hàm gọi là hàm softmax, hàm này chuyển đổi các đầu ra của lớp cuối cùng thành các xác suất.
- Và sau đó, trong quá trình suy luận, bạn có thể chọn token có xác suất cao nhất, hoặc bạn có thể lấy mẫu dựa trên các xác suất.
- Có rất nhiều cách để làm điều đó.
- À, và nhiệt độ.
- Và còn có các tham số khác mà bạn có thể truyền vào quá trình suy luận.
- Đã đến lúc quyết định cách bạn chọn từng token và hàm mất mát.
- Như tôi đã nói, điều đó hoàn toàn đơn giản.
- Xác suất mà mô hình gán cho token tiếp theo thực sự đáng lẽ phải là 100%, nhưng nó không phải như vậy.
### Muc 29

- Nó đã gán cho nó một số nhỏ hơn.
- Và vì vậy, bạn lấy logarit âm của xác suất đó.
- Và điều đó thực sự hoạt động rất tốt.
- Và phương pháp này sử dụng hàm softmax để tính toán xác suất, sau đó sử dụng hàm logarit âm của xác suất (được gọi là hàm logarit âm của xác suất) làm hàm mất mát, được gọi là hàm mất mát entropy chéo và rất phổ biến.
- Và những gì chúng ta làm với LMS, đó chính là nền tảng lý thuyết mà bây giờ bạn đã nắm vững.
- Tất nhiên, còn rất nhiều điều có thể nói về tất cả những điều này, và bạn có thể tự tìm hiểu thêm nếu có thêm câu hỏi, hoặc tất nhiên, hãy hỏi tôi, nhưng mà, ừm, hy vọng bây giờ các mảnh ghép khác nhau đang dần kết nối lại với nhau và bạn đang nghĩ, được rồi, mình đã làm được.
- Tôi đã chịu đựng hết tất cả các slide của bạn.
- Bây giờ, liệu đã đến lúc chúng ta thấy được kết quả chưa?
### Muc 30

- Hãy đảm bảo rằng bạn đã kết nối với T4 và tôi sẽ tiến hành cài đặt các gói pip.
- Ở phía trên cùng là hai bản cài đặt Pip.
- Và sau đó, tôi cũng đang tải xuống script đánh giá của chúng ta và lần này chúng ta thực sự sẽ sử dụng nó.
- Chúng ta sẽ thực hiện một số thao tác nhập dữ liệu và sau đó định nghĩa một số hằng số.
- Được rồi.
- Hãy để tôi dừng lại ở đây một chút.
- Đó là mẫu cơ bản mà bạn đã biết.
- Đây là Pricer, à, tên dự án.
## Phan 11

### Muc 31

- Đây là tên người dùng "Hugging Face" của tôi nếu bạn muốn sử dụng các mô hình của tôi.
- Nếu bạn đã tự làm điều này, tất nhiên, bạn có thể đưa các mô hình của mình vào như một chế độ.
- Hãy đặt chế độ sáng thành true ban đầu.
- Chúng ta sẽ chạy chế độ nhẹ trước.
- Vậy thì, dữ liệu người dùng mà tôi có, tất nhiên nếu bạn đang sử dụng bộ dữ liệu của mình thì hãy thay đổi nó cho phù hợp với bạn.
- Nếu không, hãy giữ dữ liệu của tôi ở các điểm dữ liệu đúng, được không?
- Và sau đó, nếu chúng ta đang ở chế độ sáng, chúng ta sẽ sử dụng tính năng tiết kiệm mà tôi vừa mới cho bạn xem.
- Điều đó đã có một số tiến triển.
### Muc 32

- Nếu chúng ta không ở chế độ sáng, chúng ta sẽ sử dụng đoạn mã nặng mà tôi đã cho bạn xem.
- Và điều này.
- Đây là nơi tôi đã dán số phiên bản đó, ID điểm kiểm tra đó, và băm mà tôi đã lấy từ Hugging Face trong kho lưu trữ đó, điều này đã được đồng bộ hóa với bước đó.
- Là 6200 phải không?
- Tôi nghĩ đó là bước 6200 của quá trình chạy.
- Bước tốt nhất mà chúng ta có.
- Và sau đó chúng ta sẽ kết hợp điều này thành một dự án, uh, và một tên trung tâm.
- Và điều này hy vọng sẽ mang lại cho chúng ta.
### Muc 33

- Vậy bây giờ chúng ta sẽ xem chế độ sáng, được chứ.
- Sau đó, chúng ta đăng nhập vào Hugging Face.
- Chúng tôi nhập các tập dữ liệu.
- À, và chúng ta hãy kiểm tra nhanh mục kiểm tra đầu tiên.
- Hãy nhớ rằng các tính toán xác thực mà chúng ta đã thực hiện là trên một tập dữ liệu khác.
- Chúng tôi đã giữ lại bộ dữ liệu kiểm tra này cho đến phút chót.
- Và tất nhiên, món đầu tiên trong bộ thử nghiệm là món yêu thích của chúng tôi - pedal điều chế.
- Chúng ta sẽ thực hiện quá trình lượng tử hóa.
## Phan 12

### Muc 34

- Và đây chúng ta bắt đầu.
- Bây giờ chúng ta sẽ đến đây, đây chính là nơi diễn ra những điều thú vị.
- Vậy nên chúng ta đã thiết lập một bộ phân tích từ.
- Chúng tôi đã thiết lập mô hình cơ sở cho đến nay hoàn toàn giống như trước đây.
- Đây là dòng khác biệt.
- Đây là nơi chúng ta nói, ừm, mô hình được tinh chỉnh là mô hình được tinh chỉnh hiệu quả về tham số, đó là tên gọi thân mật của Laura.
- À, mô hình đường dẫn từ mô hình đã được huấn luyện sẵn.
- Và chúng tôi cung cấp cho nó mô hình cơ bản và đặt tên cho mô hình trên hub mà chúng tôi muốn thu thập.
### Muc 35

- Và đơn giản chỉ có vậy.
- Nó sẽ tải các ma trận Laura này.
- Và nó sẽ tạo ra một mô hình mới được gọi là "model", mô hình này đã sẵn sàng để sử dụng mô hình cơ sở và các bộ điều chỉnh (adapters) được tích hợp trên đó.
- Và nếu bạn muốn, bạn có thể chỉ định một phiên bản cụ thể, có nghĩa là bạn muốn nó tìm kiếm điểm kiểm tra cụ thể đó.
- Vì vậy, nếu có bản sửa đổi được thiết lập, nó cũng thực hiện điều đó.
- Vậy đây là những gì chúng ta đang thực hiện hiện nay.
- Đây là cách chúng tôi tải dữ liệu từ đĩa.
- Mô hình được tinh chỉnh mà chúng ta có.
### Muc 36

- Và tôi sẽ, ừm, để, để nó tải vào vì nó mất một lúc.
- Tôi sẽ gặp bạn ngay lập tức.
- Và như vậy, mọi thứ diễn ra suôn sẻ.
- Và dung lượng bộ nhớ là 2, 2, 7, 1 megabyte, điều này có ý nghĩa.
- Chúng ta đã từng thấy điều này trước đây.
- Dung lượng của phiên bản cơ bản là 2.2GB, cộng thêm khoảng 70MB cho các bộ chuyển đổi.
- Được rồi, chúng ta hãy in mô hình này.
- Đây là nó.
## Phan 13

### Muc 37

- À, đây là mô hình lạc đà đã được điều chỉnh.
- Bạn sẽ thấy rằng các lớp tự chú ý (self-attention layers), bao gồm các lớp Q, V và O, đã được điều chỉnh bằng các ma trận Lora A và Lora B.
- Chúng có 32 chiều bên trong.
- Đó là vì R bằng 32.
- Và nếu bạn tiếp tục, bạn sẽ thấy rằng các lớp MLP của họ không có bộ điều chỉnh vì khi chúng ta thực hiện quá trình huấn luyện nhẹ, chúng ta chỉ tập trung vào các lớp chú ý.
- Vậy là mọi thứ đều diễn ra như dự kiến.
- Đã đến lúc chúng ta thực hiện quá trình suy luận và thực hiện quá trình suy luận.
- Chúng tôi có một phiên bản, chúng tôi có một mô hình dự đoán.
### Muc 38

- Đây là một chức năng khác mà chúng ta sẽ tiến hành kiểm thử.
- Nó chịu trách nhiệm lấy một mặt hàng và hoàn trả chi phí bằng cách gọi một LM.
- Và có thể bạn đã nhận ra chức năng này vì đây chính là chức năng mà chúng ta đã sử dụng để kiểm tra mô hình cơ sở cách đây vài ngày.
- Cùng một phương pháp.
- Chúng tôi đang sử dụng điều này để kiểm tra mô hình đã được tinh chỉnh của mình.
- Bắt đầu với biến thể ánh sáng, chúng ta sẽ cố gắng ít nhất là vượt qua mức hiệu suất của con người.
- Ed nhận được $87.
- Ồ, đó là khoảnh khắc tuyệt vời nhất của tôi.
### Muc 39

- À, và, à, sau đó chúng ta cũng sẽ xem liệu có thể đạt được gần với GPT cho một nano, với giá trị 62,51.
- Chúng ta có hai cơ hội để làm điều này.
- Chúng tôi có phiên bản nhẹ và sau đó chúng tôi sẽ thử với phiên bản đầy đủ.
- Hãy xem nào.
- Được rồi.
- Được rồi, bắt đầu nhé.
- Đã đến lúc phải chạy.
- Ừm, thế là nó đi rồi.
## Phan 14

### Muc 40

- Hiện tại, nó đang chạy thuật toán đánh giá.
- À, có một chút xanh tươi đấy.
- Có một chút màu đỏ.
- Được rồi.
- Điều này thật thú vị.
- Đây chính là khoảnh khắc quyết định.
- Đây chính là điều mà chúng ta đã mong đợi bấy lâu nay.
- À, nó đang lao qua họ.
### Muc 41

- Nó có 200 việc cần làm.
- À, và, à, tôi cảm thấy lo lắng, ừm, và chúng ta đang đến gần điểm giữa của quý.
- Tôi cảm thấy mình như một bình luận viên ở đây.
- À, và, à, có lẽ tôi sẽ không làm điều đó.
- Tôi sẽ không tiếp tục ở lại đó.
- Bạn sẽ không phải chứng kiến tôi đổ mồ hôi.
- À, tôi sẽ, ừm, hoàn thành việc này và quay lại ngay sau khi xong.
- À, tôi nghĩ tôi sẽ để bạn xem đoạn đếm ngược cuối cùng, cuối cùng cho tôi để xem bạn thấy gì.
### Muc 42

- Được rồi, bắt đầu nhé.
- Dưới đây là kết quả.
- Bam!
- Được rồi, được rồi.
- Được rồi.
- Vậy con số cuối cùng là $65 và 40, 65 và 40.
- Điều đó có nghĩa là nó đã làm tốt hơn Ed.
- Và nó đã rất gần với GPT 41 nano.
## Phan 15

### Muc 43

- Đó thật sự ấn tượng.
- Đây là một mô hình.
- Đây là một mô hình dựa trên phiên bản llama 3.2 đơn giản.
- Và nó hoạt động như thể đã được đào tạo trên một hộp T4 miễn phí.
- Không, không chi tiêu gì cả.
- Và chúng tôi đã đạt được kết quả rất tốt.
- Khi nhìn vào biểu đồ này, nó trông thật ấn tượng, thật đẹp, một kết quả tuyệt vời.
- Thật tuyệt vời.
### Muc 44

- Hy vọng là ít nhất.
- Tất nhiên, bạn có thể đã sử dụng điều này để phát triển直觉, hoặc bạn có thể đã tự mình tham gia kh óa đào tạo miễn phí này và bạn sẽ đạt được kết quả tương tự, và bạn sẽ rất hài lòng với điều đó.
- Bạn vừa xây dựng một mô hình có khả năng cạnh tranh ngang ngửa với hiệu suất tiên tiến nhất của GPT 41 nano, và đó là một kết quả rất tốt, rất tốt.
- Được rồi, nhưng.
- Nhưng chúng ta còn một việc nữa phải làm.
- Haha.
- Tôi chưa quên và tôi chắc chắn rằng bạn cũng vậy.
- Hãy thực hiện một phiên khởi động lại trong thời gian chạy và xóa tất cả các kết quả đầu ra của chúng ta.
### Muc 45

- Đưa mọi thứ trở lại trạng thái ban đầu và khởi động lại.
- Chúng tôi vẫn đang ở giai đoạn T4.
- Chúng tôi sẽ thực hiện điều này, nhưng điểm khác biệt là chế độ sáng bị tắt.
- Chúng tôi sẽ làm hết sức mình ở đây.
- Chúng tôi sẽ tiến hành thử nghiệm mô hình này.
- Chúng ta sẽ chọn tên chạy này và phiên bản này để xem liệu có thể cạnh tranh hơn một chút với GPT cho một nano hay không.
- Ừm, được rồi.
- Vậy là chúng ta lại tiếp tục, chúng ta tải dữ liệu vào tập dữ liệu của mình.
## Phan 16

### Muc 46

- Nó sẽ tải toàn bộ tập dữ liệu.
- Chúng ta thực sự không cần tất cả dữ liệu đào tạo.
- Nhưng mà, nhưng mà, nhưng mà, dù sao đi nữa, chúng ta sẽ tải nó vào.
- Chúng ta sẽ tải lại mô hình cơ sở một lần nữa và sẽ gặp lại các bạn ngay sau khi mọi thứ được tải xong và chúng ta sẵn sàng.
- Được rồi.
- Kích thước tổng thể của mô hình là 3.753MB.
- Và tất nhiên, đó là dung lượng 2.2MB của phiên bản tiêu chuẩn.
- Và sau đó có khoảng 1,5 gigabyte.
### Muc 47

- Vậy, 2,2 GB cho phiên bản tiêu chuẩn và 1,56 GB cho các bộ chuyển đổi.
- Được rồi.
- Và uh, nếu tôi in ra mô hình đã được tinh chỉnh, điều bạn sẽ thấy ở đây, tất nhiên, là các bộ điều hợp Lora được đặt trên tất cả các lớp chú ý.
- Và bây giờ chúng có thêm nhiều chiều, 256 chiều vì R là 256.
- Nhưng nếu bạn cuộn xuống các lớp MLP, bạn sẽ thấy rằng chúng cũng là các bộ điều hợp ở đó.
- À, và bạn sẽ thấy tỷ lệ bỏ học 0,1 ở tất cả các nơi khác nữa, cho cả hai mô hình này.
- À, thế là họ ở đó.
- Đây hy vọng chính xác là điều bạn mong đợi.
### Muc 48

- Lại đến lúc chúng ta thực hiện dự đoán mô hình.
- Chúng tôi biết rằng chúng tôi có thể vượt qua hiệu suất đó.
- Điều đó không khó.
- À, nhưng bây giờ chúng tôi đang hy vọng.
- Ý tôi là, chúng ta sẽ ở gần đây.
- Sẽ thật tuyệt nếu chúng ta có thể đánh bại GPT-4.1 Nano.
- Điều đó chắc chắn sẽ rất thỏa mãn.
- Hãy xem điều gì sẽ xảy ra.
## Phan 17

### Muc 49

- Chà, nó chưa bắt đầu.
- Ồ.
- Chúng ta có một cái màu vàng và một cái màu đỏ để bắt đầu.
- Được rồi, tôi sẽ gặp bạn gần thời điểm đó hơn, gần thời điểm công bố chính thức.
- Gặp lại sau nhé.
- Được rồi, vậy chúng ta thấy một số màu đỏ, vàng và xanh lá cây.
- Chúng ta sắp đến hồi kết.
- Trông có vẻ hứa hẹn.
### Muc 50

- Ở đó có rất nhiều rau xanh.
- Còn ba nữa.
- Đây rồi, đây rồi, đây rồi, đây là kết quả.
- Và trời ơi, đây là kết quả: 39 và 8539,85.
- Hãy ghi lại con số 39,85.
- Điều đó có nghĩa là gì.
- Điều đó có nghĩa là mô hình này đã vượt trội hơn tất cả các mô hình khác mà chúng tôi đã thử nghiệm.
- Mô hình này không chỉ vượt trội hơn so với mô hình GPT-4-1 Nano mà tôi đang sử dụng, mà còn vượt trội hơn tất cả các mô hình Frontier Gemini-3.
### Muc 51

- Không.
- Claude 4.5 tác phẩm.
- Không.
- G 5.1.
- Được coi là mô hình mạnh nhất trên hành tinh tính đến thời điểm hiện tại.
- Đối với tôi lúc này.
- Không.
- Chúng ta đã đánh bại nó.
## Phan 18

### Muc 52

- Nó đã ghi bàn.
- À, con số đó là 44,74 phải không?
- Và chúng ta đã vượt qua nó bằng mô hình tự phát triển của mình.
- Chúng tôi vừa nhận được một đơn hàng ba sản phẩm và giá là 39,85.
- Chúng tôi đã đạt được mức 30.
- Wow.
- Wow.
- Bây giờ, có thể bạn sẽ hoàn toàn choáng váng vì điều này.
### Muc 53

- Thế nào?
- Làm sao có thể tưởng tượng được rằng một mô hình với ít tham số đến vậy, một mô hình Llama 3.2 với lượng tử hóa 4 bit, có thể chạy trên điện thoại di động với các bộ điều hợp mà chúng ta có, vẫn chỉ chiếm một phần nhỏ dung lượng.
- Làm sao mô hình đó có thể hoạt động tốt hơn mô hình biên giới đã được đào tạo với $100 triệu?
- À, đó là, ừm, đó là điều chúng ta cần thảo luận.
- Nhưng trước khi làm điều đó, hãy dành một chút thời gian để ngạc nhiên và chúc mừng thành công của kết quả này.
- Đây là một kết quả đáng kinh ngạc.
- Chúng tôi vừa xây dựng một giải pháp cho vấn đề thương mại của mình, vượt qua ranh giới hiện tại.
- Đây là mô hình mạnh nhất trong việc dự đoán giá cả hàng hóa theo bộ dữ liệu thử nghiệm của chúng tôi, là mô hình mạnh nhất trên thế giới.
### Muc 54

- Và tất nhiên, để đưa nó trở lại mặt đất.
- Trước khi tôi quá phấn khích về điều này, bạn cần nhớ rằng điều chúng ta đã đạt được ở đây là chúng ta đã có thể tạo ra một mô hình LLM trở thành mô hình mạnh nhất trên hành tinh cho một tác vụ kinh doanh cụ thể, với rất nhiều dữ liệu cụ thể.
- Vậy nên, điểm mấu chốt là việc tinh chỉnh cho phép chúng ta thực hiện một nhiệm vụ cụ thể một cách xuất sắc.
- Thực tế, nó tốt hơn mô hình biên giới với hàng trăm triệu đô la chi phí đào tạo, vì chúng tôi đã tối ưu hóa nó đặc biệt cho nhiệm vụ đó.
- Và điều đó cho phép bạn đạt được hiệu suất vượt trội so với các mô hình tiên tiến nhất cho tác vụ của bạn.
- Nếu bạn có dữ liệu, đó chính là nơi mà việc tinh chỉnh thực sự phát huy hiệu quả.
- Đó là việc xây dựng một kỹ năng, một chuyên môn cụ thể có thể áp dụng ngoài dữ liệu đào tạo của nó.
- Nếu bạn có đủ dữ liệu độc quyền như chúng tôi đã có ở đây.
## Phan 19

### Muc 55

- Vậy nên, như bạn biết đấy, với suy nghĩ đó, có lẽ không có gì đáng ngạc nhiên khi chúng ta có thể làm được điều đó.
- Tuy nhiên, điều này vẫn thực sự mang lại cảm giác thỏa mãn, và thật tuyệt vời khi chúng ta đã đạt được điểm số 39,85, vượt qua các mô hình tiên phong trong nhiệm vụ của mình.
- Bây giờ, điều duy nhất còn lại là tôi sẽ tiết lộ biểu đồ mà chúng ta thích xem.
- Dưới đây là biểu đồ chứa kết quả mới nhất của chúng tôi.
- Vậy, điều chúng ta thấy ở đây tất nhiên là mô hình học máy truyền thống ban đầu, sau đó là kết quả cuối cùng không như mong đợi, tiếp theo là mạng thần kinh truyền thống, và cuối cùng là mạng thần kinh hiện đại, không phải là truyền thống.
- Và sau đó là kết quả từ một loạt các mô hình biên giới khác nhau.
- Mô hình GPT 4.1 nano được tinh chỉnh, nhưng kết quả rất tệ, sau đó là mạng thần kinh sâu đã làm rất tốt.
- À, và sau đó là con lạc đà cơ bản, được huấn luyện chỉ trong một giờ, và nó đã làm tốt.
### Muc 56

- Nó vượt trội hơn, ừm, GPT-4 Nano được tinh chỉnh.
- Nó đã vượt qua trình chỉnh sửa, nhưng nó không thể làm tốt hơn ngay cả một mạng thần kinh đơn giản.
- Nhưng.
- Nhưng khi chúng tôi tinh chỉnh mô hình dựa trên toàn bộ dữ liệu của mình trong nhiều giờ cho hai epoch, hóa ra, vào cuối epoch thứ hai, bản chụp nhanh mà chúng tôi đã thực hiện đã giúp chúng tôi vượt qua tất cả các mô hình khác trên bảng xếp hạng.
- Chúng ta đã lọt vào top 30, chỉ vừa kịp lọt vào top 30 với kết quả đáng kinh ngạc này, và đó thực sự là một kết thúc đáng hài lòng cho tuần thứ bảy.
- Và như vậy, tuần thứ bảy đã kết thúc.
- Chúng tôi đã hoàn thành nó.
- Chúng tôi đã vượt qua ranh giới, điều mà thực sự là mục tiêu mà tôi đã đề ra.
### Muc 57

- Và chúng ta đã làm được.
- Và có thể bạn đang tự hỏi, nhiệm vụ của bạn là gì?
- Tất nhiên, có một nhiệm vụ dành cho bạn.
- Nhiệm vụ của bạn là vào đây ngay bây giờ và đánh bại tôi.
- Con số 39 mà bạn có.
- Tôi chưa thực hiện nhiều tối ưu hóa siêu tham số.
- Có nước ép bên trong đó.
- Có chỗ trống.
## Phan 20

### Muc 58

- Tôi đang chờ bạn đánh bại tôi.
- Hãy vào đây, thử chạy một vài lần, thử nghiệm và khám phá xem liệu bạn có thể giảm nó xuống mức thấp hơn trong khoảng 30 không.
- Tôi chắc chắn điều đó có thể thực hiện được nếu tôi đến đó trước.
- Và tất nhiên tôi sẽ làm.
- Tôi sẽ cập nhật các tài liệu để khoe khoang về nó.
- Tôi có lẽ sẽ đưa nó vào kho lưu trữ để bạn có thể xem phiên bản mới nhất của tôi.
- À, và tôi sẽ tiếp tục chia sẻ mọi thứ tôi làm để cải thiện bản thân.
- Nhưng thách thức đối với bạn là thực hiện tối ưu hóa siêu tham số.
### Muc 59

- Tìm cách.
- Thường thì ứng dụng lớn nhất đến từ việc xử lý dữ liệu theo một cách nào đó để có thể đào tạo nó hiệu quả hơn.
- Vậy là có cái đó.
- Điều cần lưu ý.
- Được rồi.
- Nhưng bây giờ, khi chúng ta kết thúc tuần thứ bảy, chúng ta cùng nhau kỷ niệm thành công của bạn.
- Không chỉ có thể tạo ra văn bản và mã nguồn, sử dụng các công cụ, sử dụng trợ lý, mà bạn còn có thể xây dựng với Rag, áp dụng chiến lược năm bước để giải quyết vấn đề kinh doanh với LMS.
- Tối ưu hóa mô hình biên.
### Muc 60

- Nhưng bây giờ, bạn có thể tự tin thực hiện quy trình tinh chỉnh mô hình nguồn mở để nó có thể hoạt động hiệu quả trong các tác vụ thương mại.
- Và nếu bạn có đủ dữ liệu và nếu bạn có mục tiêu rõ ràng, thì đoán xem?
- Bạn có thể vượt qua mức hiệu suất hàng đầu.
- Bạn có thể làm tốt hơn GPT 5.1 trong công việc của mình.
- Wow.
- Được rồi, nếu bạn nghĩ rằng tuần này đã là tốt nhất có thể, nếu bạn nghĩ rằng điều này thật tuyệt vời, tôi hy vọng bạn đã nghĩ vậy, và tôi cũng nghĩ vậy.
- Thì tôi có tin tức cho bạn đây.
- Tuần sau còn tốt hơn nữa.
## Phan 21

### Muc 61

- Tôi biết điều đó nghe có vẻ khó tin, nhưng đó là sự thật.
- Tuần tới là thời điểm chúng ta sẽ thực hiện một số công việc rất thú vị liên quan đến việc triển khai sản xuất.
- Khi chúng ta sử dụng mô hình mà chúng ta đã xây dựng, và sử dụng nền tảng AI không máy chủ để đưa nó lên internet, từ đó chúng ta có thể truy cập nó từ bất kỳ đâu.
- Chúng tôi cũng sẽ xây dựng một hệ thống Rag quy mô lớn.
- Chúng ta sẽ quay lại Rag để giải quyết vấn đề cụ thể này.
- Bạn đã chán ngán với vấn đề này.
- Nhưng nhưng chúng ta sẽ sử dụng Rag vì đây là một trường hợp sử dụng tuyệt vời cho Rag.
- Và cuối cùng, chúng ta sẽ phát triển một giải pháp trí tuệ nhân tạo (AI) dựa trên cơ chế tác nhân và di truyền, một xu hướng đang rất được ưa chuộng.
### Muc 62

- Tôi có một khóa học riêng về trí tuệ nhân tạo di truyền, nhưng trong khóa học này, chúng ta sẽ xây dựng một mô hình từ đầu và nó sẽ sử dụng mô hình của chúng ta.
- Nó sẽ sử dụng rất nhiều thứ, và nó sẽ mang đến cho bạn một kết thúc hoàn hảo sẽ khiến bạn choáng váng.
- Bạn cần phải ngủ một chút vì tuần này đã xảy ra rất nhiều chuyện.
- Bạn đã làm được rất nhiều việc.
- Hy vọng bạn cũng vượt qua được kết quả của tôi.
- Hãy nghỉ ngơi và nạp lại năng lượng, sau đó quay lại sẵn sàng cho tuần thứ tám.
- Tôi sẽ gặp bạn sau.

