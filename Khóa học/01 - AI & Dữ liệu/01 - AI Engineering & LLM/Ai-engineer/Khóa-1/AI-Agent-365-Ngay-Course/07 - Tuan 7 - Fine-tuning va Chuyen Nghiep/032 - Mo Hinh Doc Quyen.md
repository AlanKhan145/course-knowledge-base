# Ngay 032 - Tuan 7, ngay 2

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-032.txt

## Tong quan

- Chu de mo dau: Chào mừng đến với tuần thứ bảy, ngày thứ hai.
- File goc: day-032.txt
- So y chinh: 688
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Chào mừng đến với tuần thứ bảy, ngày thứ hai.
- Không có thời gian cho lời mở đầu.
- Chúng ta phải vào thẳng vấn đề.
- Hôm nay chúng ta sẽ có một ngày tuyệt vời.
- Chúng tôi đi vào các mô hình độc quyền.
- Chúng tôi thực sự tập trung vào việc xây dựng, như người ta thường nói, mô hình của riêng mình.
- Tất nhiên, đây là việc tinh chỉnh một mô hình nguồn mở.
- Bạn đã biết mình có thể làm gì khi làm việc với các mô hình tiên phong và mã nguồn mở.
### Muc 2

- Chiến lược năm bước.
- Và bây giờ, Q Laura, điều này đã quá quen thuộc.
- Hôm nay chúng ta thực sự sẽ bắt tay vào làm một số việc.
- Chúng ta chưa thực hiện việc tinh chỉnh chi tiết ngay bây giờ, nhưng chúng ta sẽ sẵn sàng hoàn toàn cho việc đó bắt đầu từ ngày mai.
- Và chúng ta bắt đầu bằng việc hoàn thiện bộ dữ liệu của mình để nó hoàn toàn sẵn sàng cho quá trình tinh chỉnh.
- Vậy thì chúng ta hãy đi và làm ngay bây giờ.
- Chúng ta sẽ quay lại với con trỏ.
- Trước hết, không có thời gian cho các slide, chuyển thẳng đến con trỏ.
### Muc 3

- Hẹn gặp lại vào ngày thứ hai nhé.
- Được rồi, bắt đầu nào.
- Chúng ta bước vào tuần thứ bảy.
- Chúng ta bước sang ngày thứ hai.
- Hiện tại, chúng tôi đang tiến hành một số bước cuối cùng để tối ưu hóa bộ dữ liệu của mình nhằm đảm bảo nó hoàn hảo cho quá trình tinh chỉnh.
- Thứ tự thi đấu được liệt kê ở đây.
- Vậy là bạn đã biết chúng ta sẽ làm gì trong tuần này.
- Chúng ta sẽ bắt đầu với một số mặt hàng nhập khẩu.
## Phan 2

### Muc 4

- Bạn sẽ phải cài đặt kernel nếu chưa làm điều đó.
- Bắt đầu với một số lệnh nhập nhé.
- Và chúng ta sẽ bắt đầu bằng cách phân tích bộ dữ liệu nhẹ, bộ dữ liệu nhẹ đơn giản và nhanh chóng.
- Chúng tôi đăng nhập vào Hugging Face.
- Và bây giờ chúng ta sẽ bắt đầu tải vào.
- Đây là cùng một đoạn mã mà bạn đã quen sử dụng khi chúng ta tải dữ liệu từ hub.
- 20.000 điểm dữ liệu đào tạo.
- Họ ở đó ổn.
### Muc 5

- Vậy bây giờ chúng ta sẽ tải mô hình cơ sở Llama 3.23 B.
- Và chúng ta sẽ thiết lập một bộ phân tích từ (tokenizer) để tải bộ phân tích từ cho mô hình cơ sở này.
- Và hãy tính toán dựa trên điều này để xem chúng ta sẽ có bao nhiêu token trong mỗi mục khác nhau của chúng ta.
- Và hãy vẽ biểu đồ đó.
- Để tôi giải thích cho bạn hiểu.
- Nói chung, nếu chúng ta chia văn bản thành các token, chúng ta sẽ có số lượng token khác nhau cho từng điểm dữ liệu khác nhau.
- Một số có nhiều token hơn, một số có ít hơn.
- Bạn có thể nhớ rằng trước đây có một biểu đồ bị cắt ở mức 4000 ký tự.
### Muc 6

- Khi chúng ta xem xét độ dài của các đoạn văn bản này.
- Đây là cách nó hoạt động khi chúng ta chuyển đổi nó thành token.
- Hầu hết đều có ít hơn khoảng 100 token, nhưng có một phần nhỏ và token cao nhất là 245.
- Có rất nhiều, rất nhiều đến mức có một đuôi rất dài ở đó.
- Bây giờ, khi bạn thực hiện quá trình tinh chỉnh mô hình, bạn cần thiết lập trước số lượng token tối đa trong bất kỳ tập dữ liệu đào tạo nào.
- Bởi vì mô hình sẽ phải được xây dựng sao cho có thể hỗ trợ bất kỳ số lượng token nào lên đến mức đó.
- Và lượng bộ nhớ mà bạn sử dụng trên GPU là tuyến tính.
- Đây là tỷ lệ so với độ dài chuỗi tối đa mà bạn cần hỗ trợ.
## Phan 3

### Muc 7

- Về cơ bản, việc khẳng định rằng chúng ta có thể có tới 245 ký tự hoặc token khác nhau trong dữ liệu đầu vào là khá phức tạp.
- Điều đó có nghĩa là nó sẽ phải dành bộ nhớ cho một lượng lớn không gian và tất cả các đầu vào không đạt đến mức đó.
- 245 được bổ sung bằng một ký tự đệm đặc biệt, và kết quả là chúng ta sử dụng hết bộ nhớ này với các ký tự đệm, điều này gây lãng phí bộ nhớ lớn và làm chậm quá trình đào tạo.
- Vì vậy, có lẽ chúng ta nên dừng lại ở một thời điểm nào đó và nói rằng, hãy chọn một con số như 110.
- Hãy giả sử bất kỳ nội dung nào có hơn 110 token, chúng ta sẽ cắt nó tại điểm 110.
- À, và nếu tôi làm như vậy, điều đó có nghĩa là trong số 20.000 điểm dữ liệu của tôi, 1.255 điểm sẽ bị loại bỏ vào cuối cùng, và đó khoảng 5% hoặc 5,7%.
- Và đây là điều mà, ừm, không có câu trả lời dễ dàng cho điều này.
- Một lần nữa, không có công thức nào cho điều này.
### Muc 8

- Đây giống như một siêu tham số.
- Đó là một siêu tham số.
- Bạn có thể thử nghiệm với điều này.
- Việc có thêm dữ liệu có thể giúp bạn cung cấp nhiều thông tin hơn để đào tạo.
- Vì vậy, nó cung cấp nhiều bộ dữ liệu phong phú hơn cho quá trình đào tạo của bạn.
- Nhưng nó tiêu tốn nhiều bộ nhớ hơn, điều này làm chậm quá trình đào tạo mà bạn có thể thực hiện trong một khoảng thời gian nhất định.
- Vậy là có một sự đánh đổi, và sự đánh đổi đó là điều đáng để thử nghiệm.
- Và直觉告诉我，这样做是完全合理的 Tôi cũng đã in một số bản này bị cắt bớt để tự mình kiểm tra, vì phần lớn nội dung quan trọng và thú vị đều xuất hiện ở phần đầu của mô tả, bởi vì bạn nhớ cách chúng ta viết những thứ này.
### Muc 9

- Nếu tôi in ra một bản, đợi đã.
- Chỉ nhắc lại cho bạn biết chúng trông như thế nào.
- À, chúng ta hãy lấy, ví dụ như, ừm, ừm, các món đồ.
- À, xin lỗi.
- Chúng ta nên đi tàu.
- Dữ liệu đào tạo.
- Tóm tắt: Không có.
- Đây là điều.
## Phan 4

### Muc 10

- Đây là những gì chúng ta đang xem xét ở đây.
- À, để tôi in cho bạn nhé.
- Vậy, điều chúng ta đang thấy, um, là một thứ có tiêu đề, danh mục, mô tả thương hiệu.
- Tất cả những điều này chắc chắn sẽ nằm trong 110 ký tự đầu tiên.
- Và một phần chi tiết có thể bị cắt bớt trong 5,7% trường hợp, nó đang bị cắt bớt.
- Vì vậy, có vẻ như điều đó có lẽ sẽ không làm mất đi tín hiệu quan trọng của mô hình, nhưng nó cho phép chúng ta trở nên hiệu quả hơn nhiều trong quá trình đào tạo.
- Vậy 110 là con số tôi đã chọn để đạt 5,7%, và điều đó có nghĩa là chúng ta có thể đào tạo một cách rất hiệu quả.
- Bạn có thể thử thay đổi con số này và xem kết quả như thế nào.
### Muc 11

- Thông thường, việc thay đổi tập dữ liệu là một trong những cách hiệu quả nhất để ảnh hưởng đến hiệu suất.
- Đây không phải là tham số siêu quan trọng nhất.
- Mọi người thích khám phá R và Alpha cùng nhiều thứ khác.
- Tốc độ học tập, có rất nhiều điều mà mọi người khám phá.
- Loại siêu tham số liên quan đến dữ liệu này có thể không hấp dẫn bằng.
- Nó thường tạo ra sự khác biệt rất lớn.
- À, và đặc biệt đối với tôi, việc giảm con số này xuống đã tạo ra sự khác biệt lớn, vì tôi có thể hoàn thành nhiều buổi đào tạo hơn trong cùng khoảng thời gian bằng cách kiểm soát rất chặt chẽ lượng dữ liệu được phép nhập vào.
- Vậy 110 là điều chúng ta sẽ làm.
### Muc 12

- Và bây giờ chúng ta sẽ tạo một tập dữ liệu với ngưỡng đó.
- Vậy tôi có hàm này ở đây để tạo các lời nhắc, nằm trong mô-đun Items.
- Và hãy cùng nhanh chóng xem qua Make Prompts làm gì.
- Đây là nó.
- Nó có các lệnh nhắc và yêu cầu một bộ phân tích từ.
- Nó yêu cầu số lượng token tối đa.
- Và nó có một tùy chọn về việc có nên làm tròn số hay không.
- À, để tôi giải thích cho bạn hiểu điều này.
## Phan 5

### Muc 13

- À, vậy trước hết, tôi đang tóm tắt, tóm tắt lại nội dung.
- Tôi bắt đầu với tóm tắt, chuyển nó thành các token, và nếu số lượng token quá nhiều, vượt quá số token tối đa, thì tôi sẽ cắt bớt nó xuống số token tối đa và chuyển đổi lại thành tiếng Anh.
- Nếu không, tôi sẽ chỉ sử dụng tóm tắt.
- Nếu nó nằm trong giới hạn tối đa của token.
- Được rồi.
- Và bây giờ tôi đang xây dựng một thứ gọi là "self dot prompt a prompt".
- Và đó sẽ là câu hỏi.
- Và sau đó là tóm tắt và sau đó là tiền tố.
### Muc 14

- Đó là gì.
- Được rồi, bắt đầu nhé.
- Hỏi: Chi phí này là bao nhiêu, làm tròn đến đồng gần nhất.
- Và tiền tố của giá là đô la.
- Và đó chính là điều sẽ trở thành lời nhắc.
- Nó sẽ hiển thị chi phí của điều này đến số nguyên gần nhất.
- Và sau đó là một số thứ, sau đó là giá cả, và sau đó là kết quả thực tế.
- À, vậy à, đó là những gì chúng ta đang đưa vào, ừm, vào lời nhắc.
### Muc 15

- Vậy là giá được ghi là đô la, nhưng chúng ta không tính đến kết quả thực tế.
- Đó chính là điều mà mô hình sẽ cố gắng đưa vào đó.
- Đó chính là điều mà nó sẽ được huấn luyện để trở nên giỏi trong việc thực hiện.
- Đó chính là những gì chúng ta đang làm trong quá trình tự hoàn thiện bản thân.
- Chúng tôi thực sự đang đưa ra mức giá chính nó.
- Và có một điều nhỏ bé mà tôi đang làm ở đây, đó là khi tự hoàn thiện dữ liệu, nếu chúng ta đang xây dựng dữ liệu đào tạo, thì tôi sẽ làm tròn nó đến số nguyên gần nhất, vì tôi muốn đào tạo mô hình để có thể dự đoán giá chính xác đến từng xu.
- Và bây giờ có thể bạn đang tự hỏi tại sao tôi lại làm điều đó.
- Tại sao không dự đoán chính xác đến từng xu?
## Phan 6

### Muc 16

- Và có một lý do tinh tế cho điều đó mà tôi sẽ giải thích sau.
- Nhưng nếu chúng ta đang xây dựng tập dữ liệu thử nghiệm, thì tôi muốn nó chứa giá cuối cùng thực tế, vì trong quá trình thử nghiệm, chúng ta luôn muốn kiểm tra nó so với giá thực tế.
- Vậy đây là những gì mà các prompt làm.
- Và để bạn có thể thấy điều đó, hãy thực sự chạy nó và xem kết quả như thế nào.
- Vậy là bắt đầu nhé, tôi sẽ thực hiện điều này.
- Tôi đang chạy các lệnh make và đang làm tròn dữ liệu cho tập huấn luyện và tập kiểm tra.
- Nhưng tôi không làm tròn cho dữ liệu thử nghiệm, được chứ.
- Vậy hãy cùng xem một trong số này.
### Muc 17

- Hãy cùng xem xét lời nhắc và kết quả hoàn thành.
- Hãy bắt đầu bằng cách xem xét điều đó chỉ cho mục kiểm tra đầu tiên.
- Vậy, câu hỏi đầu tiên là: "Chi phí cho điều này là bao nhiêu?" Câu hỏi là chi phí này là bao nhiêu, làm tròn đến đồng đô la gần nhất.
- Đây là pedal méo tiếng yêu thích của chúng tôi từ Old Blood Noise.
- Đây là nó.
- Giá là đô la.
- Và đó chính là điều mà mô hình sẽ được đào tạo để thực hiện.
- Nó sẽ hoàn thành điều này và việc hoàn thành.
### Muc 18

- Giá được hiển thị và được làm tròn đến số nguyên gần nhất.
- À, đó là tất cả những gì chúng ta có ở đó.
- Vậy đây chính là những gì nó được huấn luyện để làm.
- Nó đang được huấn luyện để cố gắng trở nên giỏi trong việc này.
- À, đó là đề bài và phần hoàn thành.
- Và bây giờ chúng ta hãy xem, ừm, điều này trông như thế nào nếu chúng ta chọn một mục đào tạo.
- Thực ra, hãy xem xét bài kiểm tra số một.
- Thực ra, tất nhiên, bạn sẽ thấy điều đó vì chúng ta đang xem xét tập dữ liệu thử nghiệm.
## Phan 7

### Muc 19

- Điều này không được làm tròn.
- Đây là con số thực tế, giá thực tế.
- À, nhưng đây lại là cái à.
- À, giá của món này là bao nhiêu, làm tròn đến đồng gần nhất?
- Đó là mô tả của món thử nghiệm đầu tiên.
- Hãy chuyển sang mục kiểm tra thứ hai.
- Đó là lời nhắc.
- Chi phí là bao nhiêu?
### Muc 20

- Gần nhất là một đô la.
- Đó là kết thúc.
- Được rồi.
- Và bây giờ chúng ta hãy xem xét một số dữ liệu đào tạo.
- Dữ liệu đào tạo.
- Chúng tôi dự kiến sẽ thấy điều gì đó tương tự, nhưng lần này chúng ta sẽ thấy tiêu đề "Chi phí này là bao nhiêu, làm tròn đến đồng gần nhất." Ở đó, chúng ta thấy sự hoàn thành này.
- Và con số 64.00 chính là con số hiển thị ở đây.
- Và bây giờ chúng ta sẽ bắt đầu với bài tập đầu tiên.
### Muc 21

- Và bạn sẽ thấy chi phí của điều này là bao nhiêu.
- Giá của một chiếc quạt thổi bụi điện mini là $1.
- Hoàn thành 79.00.
- Vậy hãy chạy thử một vài ví dụ về dữ liệu đào tạo và dữ liệu kiểm tra, và hiểu rõ hơn về prompt mà chúng ta đang nhập vào đó, cũng như phần hoàn thành.
- Và lý do chúng ta xử lý dữ liệu theo cách này là vì chúng ta sẽ tinh chỉnh mô hình, để khi mô hình được cung cấp lời nhắc này, nó có khả năng cao nhất sẽ đưa ra kết quả này như là token tiếp theo có khả năng cao nhất xuất hiện.Tóm lại một lần nữa, chúng ta đã viết một chương trình có thể tạo ra hai đoạn văn bản cho mỗi mục trong danh sách của chúng ta.
- Một được gọi là prompt và một được gọi là completion.
- Và lời nhắc có dạng câu hỏi: "Chi phí của món hàng này là bao nhiêu, làm tròn đến đồng gần nhất?" Sau đó, mô tả món hàng, tóm tắt và phần hoàn tất đều hiển thị giá.
- Và chúng tôi đã làm điều này theo cách này vì chúng tôi muốn thực hiện việc tinh chỉnh và dạy cho mô hình cách, khi được cung cấp lời nhắc này, nó nên hoàn thành nó với phần hoàn thành này.
## Phan 8

### Muc 22

- Và chúng tôi đang tổ chức dữ liệu của mình theo cách rất hiệu quả này.
- À, và một trong những điều tôi đã nói là sẽ quay lại giải thích là tại sao đối với dữ liệu đào tạo, tôi đã làm việc này là làm tròn số đến đồng đô la gần nhất, và tôi đã làm tròn chi phí đến đồng đô la gần nhất ở đây, và, và đối với dữ liệu kiểm tra, tôi sử dụng số nguyên vẹn.
- Sao lại thế nhỉ.
- Thế này nhé.
- Đầu tiên, hãy nhận thức rằng nếu mô hình có thể đưa giá cả chính xác đến từng đô la gần nhất, thì chúng ta đã làm rất tốt.
- Nếu giá chỉ chênh lệch $1 so với giá thực tế, điều đó đã đủ tốt cho mục đích chúng ta đang làm việc ở đây.
- Hiện tại, mô hình tốt nhất của chúng tôi đang có giá $44.74.
- Đó sẽ là GPT-5.
### Muc 23

- Vậy nên, việc đạt được mức chênh lệch chỉ một đô la là rất tuyệt vời.
- À, và khi chúng ta thực hiện dữ liệu thử nghiệm, khi chúng ta kiểm tra và so sánh để đảm bảo rằng chúng ta đang so sánh "táo với táo" với các thí nghiệm trước đó, chúng ta muốn đảm bảo rằng chúng ta luôn kiểm tra dựa trên giá thực tế.
- Và đó là lý do tại sao đối với dữ liệu thử nghiệm, chúng tôi không hề làm việc một cách cẩu thả.
- Chúng tôi sẽ không làm tròn bất kỳ con số nào.
- Chúng ta sẽ sử dụng giá thực tế.
- Nhưng trong quá trình đào tạo, tôi đang thực hiện việc làm tròn này.
- Và tại sao lại như vậy?
- À, vấn đề là thế này.
### Muc 24

- Chúng tôi đang cố gắng huấn luyện một mô hình để nó trở nên giỏi trong việc dự đoán giá cả.
- Và chúng tôi muốn tập trung nỗ lực vào phần quan trọng nhất của việc giảng dạy đó, đó là xác định sơ bộ chi phí của nó.
- Và đây cơ bản là một vấn đề liên quan đến hồi quy đối với mọi người, đặc biệt là đối với các nhà khoa học dữ liệu.
- Chúng tôi đang thực hiện một phương pháp dự đoán một con số, nhưng chúng tôi sử dụng dự đoán token tiếp theo làm phương pháp thực hiện.
- Chúng tôi đang cố gắng áp dụng một mô hình có khả năng xử lý ngôn ngữ tự nhiên và yêu cầu nó tạo ra kết quả mang tính số học hơn.
- Và đó là một việc khá thú vị để làm, vì mô hình không được tích hợp sẵn khả năng nhận biết sự khác biệt giữa các con số hoặc dấu thập phân và những thứ tương tự.
- Mô hình chỉ tập trung vào việc xác định token tiếp theo có khả năng xuất hiện cao nhất.
- Vì vậy, để có thể tận dụng tối đa mô hình và không phải lo lắng về những điều không quan trọng lắm.
## Phan 9

### Muc 25

- Tốt hơn là chúng ta nên huấn luyện nó.
- Tập trung vào số thực, số tiền bằng đô la.
- Bởi vì nếu chúng ta huấn luyện nó dựa trên số tiền (đô la và xu), thì khi nó cố gắng tạo ra các token, đối với nó, việc xác định chính xác số xu sẽ quan trọng không kém việc xác định chính xác số đô la.
- Đúng.
- Vì khoản lỗ được tính dựa trên các token mà nó thực sự nhận được.
- Đúng.
- Vì vậy, chúng ta sẽ đào tạo một hệ thống sao cho nó được khuyến khích không chỉ để đạt được con số chính xác mà còn để đạt được nó.
- Dù là $10 hay $100 cũng quan trọng như nhau, giống như việc nó là $0.10 hay $0.99.
### Muc 26

- Cuối cùng.
- Và điều đó sẽ là một sự lãng phí.
- Điều đó thật ngớ ngẩn.
- Chúng ta sẽ đang thực hiện các tính toán tổn thất sai lầm.
- Vậy.
- Đó chính là lý do tại sao tôi làm điều này.
- Tôi muốn tập trung vào việc đào tạo để đạt được số tiền đúng.
- Tôi không muốn làm xao nhãng quá trình đào tạo mô hình bằng số lượng xu.
### Muc 27

- Và nếu bạn không làm điều này, điều này, thủ thuật làm tròn này, bạn có thể nghĩ rằng, ừm, có thể tôi đã không nghĩ đến điều đó.
- Nếu điều đó xảy ra thì sao?
- Sẽ không sao cả.
- Nó vẫn sẽ hoạt động.
- Bạn vẫn sẽ đạt được kết quả.
- Nhưng tôi tin rằng việc đào tạo theo cách này sẽ mang lại hiệu quả cao hơn nhiều.
- Nó sẽ nhanh chóng tập trung vào việc dự đoán chính xác số tiền cụ thể.
- Vì vậy, một lần nữa, nó giống như một siêu tham số.
## Phan 10

### Muc 28

- Bạn có thể thử nghiệm với các gợi ý khác nhau này.
- Bạn có thể thử lấy số tiền gần nhất là 1 đô la và không làm tròn.
- Và tôi nghĩ rằng việc đào tạo sẽ mất nhiều thời gian hơn.
- Nó sẽ không hiệu quả bằng.
- À, nhưng đó chỉ là một ví dụ về một mẹo hay để tập trung vào việc đào tạo đúng hướng.
- Và điều này, như bạn biết đấy, không phải là điều quá quan trọng để chúng ta đi sâu vào, nhưng tôi muốn bạn có cái nhìn đó.
- Và đó là loại quyết định mà một nhà khoa học dữ liệu đưa ra.
- À, về mặt thực nghiệm, dựa trên kinh nghiệm, bạn thử cái này, thử cái kia và bạn nhận ra rằng, ừm, cái này mang lại kết quả tốt hơn nhanh hơn.
### Muc 29

- Hãy làm điều đó.
- Được rồi.
- Điều khác mà chúng tôi đã làm, tất nhiên, khi chạy chương trình này là chúng tôi đã cắt bớt dữ liệu đầu vào.
- Chúng tôi đã đảm bảo rằng số lượng token không bao giờ vượt quá 110.
- Nhưng chúng tôi cũng đã bổ sung thêm một số thứ nữa.
- Chúng tôi đã bổ sung câu hỏi này và đã bổ sung giá là đô la.
- Thực ra, con số tối đa sẽ không phải là 110.
- Sẽ là hơn 110 một chút vì chúng tôi đã thêm một số token nữa.
### Muc 30

- Vậy hãy cùng tìm hiểu xem điều đó thực sự là gì.
- Hãy cùng nhau tính toán những điều này.
- À, hãy xác định tổng số token prompt, bao gồm câu hỏi, giá tiền (đô la) và câu trả lời.
- Và bây giờ chúng ta hãy vẽ đồ thị đó.
- Và điều chúng ta nhận thấy là giá trị trung bình là 101, giá trị cao nhất là 126.
- Vậy đó là con số 110 mà chúng ta đã có.
- Và sau đó là 16 token khác được sử dụng trong câu hỏi đó và ký hiệu đô la.
- Vậy 126 hiện là chuỗi dài nhất mà chúng ta có ở đây.
## Phan 11

### Muc 31

- Và khi chúng ta bắt đầu vào phần đào tạo thực tế, tôi sẽ phải thông báo cho giảng viên của chúng ta về độ dài chuỗi tối đa mà hệ thống cần dự trữ.
- Và tôi sẽ sử dụng 128.
- Tôi sẽ sử dụng 128 vì việc có một vùng đệm nhỏ là tốt trong trường hợp có thêm một số token được thêm vào.
- Vì một lý do nào đó, chúng ta không bao giờ muốn cắt ngắn.
- Vậy tôi sẽ sử dụng 128, nhưng tôi cũng sẽ sử dụng 128 vì nó là một lũy thừa của hai và mọi người đều thích các lũy thừa của hai.
- Vậy chúng ta nên làm điều đó.
- Chúng ta nên có 188 là một lũy thừa của 2.
- Điều đó thật hợp lý.
### Muc 32

- Nó khiến tôi cảm thấy hạnh phúc.
- Thở phào nhẹ nhõm vì chúng ta sẽ sử dụng hệ số hai.
- Ừm.
- Bạn có thể.
- Tôi không muốn phải thừa nhận sự thật này, nhưng thực tế là tôi đã phần nào đưa ra ngưỡng 110 đó, để có thể sử dụng một số mũ hai làm độ dài chuỗi.
- Điều này thực sự là lý do chính đáng tại sao bạn có thể muốn nó là một số mũ hai, vì nó cần phải dành bộ nhớ.
- Và có lẽ điều tốt là khi bạn phân bổ bộ nhớ, bạn nên sử dụng một giá trị là lũy thừa của hai.
- Nhưng chủ yếu là do quan niệm mê tín, giống như một quan niệm mê tín trong khoa học dữ liệu, rằng việc đặt 128 làm độ dài chuỗi tối đa chỉ đơn giản là cảm thấy hợp lý.
### Muc 33

- Đó là điều ngớ ngẩn.
- Nhưng đó chính là công việc của chúng tôi.
- Và dòng cuối cùng này sẽ đẩy tập dữ liệu này lên hub.
- Nhưng hãy nhớ rằng bộ dữ liệu đầu tiên của chúng ta có tên là "Items Raw Light".
- Và sau đó, khi chúng tôi đã xử lý trước, chúng tôi đã thay đổi điều đó chỉ còn các mục nhẹ.
- Chúng tôi hiện đã có bộ dữ liệu cuối cùng được gọi là Items Prompts light.
- Đó là các lời nhắc.
- Đây là một tập dữ liệu chứa hai thành phần.
## Phan 12

### Muc 34

- Nó có tính năng gợi ý và có tính năng hoàn thành.
- Và hai yếu tố đó chính là hai cột trong dữ liệu mà chúng ta đang tải lên.
- Và tôi không chỉ chọn họ một cách ngẫu nhiên để đảm bảo tính kịp thời và hoàn thành.
- Đó chính là các tên cột thực tế mà mã "Hugging Faces" mong đợi theo mặc định.
- Khi đang thực hiện đào tạo, bạn có thể làm việc cùng với những người khác và phải thông báo cho họ, và có một số cách để thực hiện điều đó.
- Nhưng nếu bạn chọn tùy chọn "prompt and completion", thì hệ thống sẽ tự động xử lý theo cách đó và tiếp tục thực hiện mà không cần can thiệp thêm.
- Và điều đó khiến cuộc sống trở nên dễ dàng.
- Đó là lý do tại sao tôi làm điều đó.
### Muc 35

- Bạn quản lý ô này, tôi sẽ không làm vì tôi đã làm rồi.
- Và nó sẽ tải lên bộ dữ liệu đó nhắm vào khuôn mặt.
- Và hy vọng là bạn đã làm điều đó và có một bộ dữ liệu nhẹ nhàng.
- Tôi sẽ xóa các kết quả đầu ra, khởi động lại và sau đó quay lại.
- Nhưng lần này, tôi sẽ đặt chế độ sáng là false và sẽ chạy từng ô trong số này.
- Bây giờ tôi sẽ tải lại mô hình cơ sở, sử dụng bộ phân tích từ (tokenizer) và đếm số lượng từ cho toàn bộ tập dữ liệu, sau đó vẽ biểu đồ đó.
- Nhưng bây giờ sẽ mất nhiều thời gian hơn vì chúng ta không thực hiện cho 20.000 điểm dữ liệu.
- Chúng tôi đang thực hiện điều này cho 800.000 trường hợp trong tập dữ liệu đầy đủ của chúng tôi.
### Muc 36

- Vậy nên sẽ mất một vài giây.
- Tôi sẽ gửi lại cho bạn biểu đồ về các token.
- À, sau khi thiết bị này đã đếm xong chỉ trong vài phút.
- Và đây là số lượng token trong phân phối của tập dữ liệu đầy đủ.
- Bây giờ sau khi đã tải xong, giá trị trung bình là 86,6, khá tương đồng với trước đây.
- Cái cao nhất thì hoàn toàn điên rồ.
- Có một thứ gì đó ở đây chứa 4582 token.
- Và bạn có thể thắc mắc, làm sao điều đó có thể xảy ra khi chúng ta đã cắt ngắn nó xuống 4000 ký tự trước đó?
## Phan 13

### Muc 37

- Làm sao một thứ gì đó có thể có nhiều token đến vậy?
- Và tôi đề xuất một bài tập nhỏ.
- Bạn có thể tìm thấy sản phẩm này và xem qua, bạn sẽ thấy rằng đây là một sản phẩm khá kỳ lạ, có mô tả chứa rất nhiều thông tin về sản phẩm, với rất nhiều số liệu trong đó.
- À, và mỗi cái trong số chúng đều biến thành rất nhiều token.
- Và cuối cùng, nó trở thành một con số khổng lồ các token, và hầu hết đều là những thứ vô nghĩa.
- Và vì vậy, việc cắt ngắn nó hoàn toàn không có vấn đề gì cả.
- Và một lần nữa, chúng ta sẽ sử dụng con số kỳ diệu 110 này, mà tôi đã áp dụng một số nguyên tắc rất quan trọng và phức tạp, nhằm đạt được một lũy thừa của hai.
- À, vậy là, à, chúng ta kết thúc với, ừm, 47.000 mục bị loại bỏ khỏi tổng số 800.000, tức là 5,7%.
### Muc 38

- Nếu chúng ta xem xét mục đào tạo đầu tiên, đó là cái núm đồng mà chúng ta đã thấy trước đó.
- Và bây giờ chúng ta có thể tiến hành tạo các prompt cho toàn bộ tập dữ liệu.
- Hãy nhớ, cho việc đào tạo và kiểm tra.
- Chúng ta sẽ thực hiện việc cắt bớt này, việc làm tròn này, trong đó chúng ta sẽ làm tròn giá đến số nguyên gần nhất vì chúng ta không muốn làm phân tâm mô hình khi nó đang được huấn luyện để xử lý các đơn vị cent, vì điều đó sẽ là sự lãng phí nỗ lực của nó khi cố gắng làm điều đó.
- Và nó không nhận ra rằng chúng ta không quan tâm đến ý nghĩa, mà chúng ta quan tâm đến tiền.
- Nó sẽ cho rằng cả hai đều là token, rằng nó phải dự đoán rằng nó phải chính xác.
- Nhưng đối với tập dữ liệu kiểm thử, chúng ta sẽ đưa số thực vào đó để khi thực hiện tính toán kiểm thử, chúng ta đang thực hiện cùng một tính toán như đã làm trước đó.
- Chúng tôi không gian lận và thực hiện một phép tính khác khi làm điều đó.
### Muc 39

- Vậy là nó sẽ chạy.
- Và trong khi nó đang hoàn thành, tôi muốn nói thêm một điều nữa về việc này, về cách chúng ta đang sử dụng mô hình ngôn ngữ (LM) để dự đoán giá cả.
- Một lần nữa, điều này cho thấy rằng đây cơ bản là một vấn đề liên quan đến hồi quy.
- Chúng tôi đang cố gắng thực hiện một phương pháp để dự đoán một số khi việc dự đoán token thực chất không phải là một vấn đề hồi quy.
- Đối với những người am hiểu về thuật ngữ này, khi bạn chạy mô hình LM để dự đoán token tiếp theo có khả năng cao nhất, thực chất đó là một vấn đề phân loại.
- Thực ra, đây là một quá trình mà mạng thần kinh đang cố gắng dự đoán.
- Nó đang cố gắng phân loại token tiếp theo.
- Token tiếp theo có khả năng cao nhất sẽ thuộc vào một nhóm khác.
## Phan 14

### Muc 40

- Và có khoảng 128.000 khả năng phân loại.
- Và chúng đại diện cho từng token có thể xuất hiện tiếp theo.
- Vậy nó đang cung cấp một phân phối xác suất.
- Nó đang nói rằng tôi đang phân loại token tiếp theo có khả năng cao nhất.
- Vì vậy, về nhiều mặt, nó đang cố gắng phân loại giá của một mặt hàng vào một nhóm.
- Và có một ngăn chứa cho tất cả các token tiếp theo có thể đại diện cho giá của sản phẩm.
- À, và, ừm, đúng vậy.
- Vì vậy, chúng ta không muốn nó phải lo lắng về việc phân loại ý nghĩa mà chúng ta không quan tâm.
### Muc 41

- Và điều đó sẽ là một sự lãng phí thời gian.
- Chúng tôi muốn nó tập trung vào việc phân loại số tiền bằng đô la và điểm cuối cùng trong vấn đề này là, khi kết thúc, trong trường hợp mô hình Lama, Lama thực sự có một điểm thú vị trong việc token hóa của nó, đó là tất cả các số có ba chữ số đều được ánh xạ thành một token.
- Một token trong Lama.
- Nhiều mô hình khác được ánh xạ vào nhiều token, nhưng đối với Lama, nó chỉ được ánh xạ vào một token duy nhất.
- Tất cả.
- Tất cả các số từ 0 đến 999 đều nhận được một token.
- Và điều đó có nghĩa là thực tế, toàn bộ giá trị của sản phẩm được phản ánh trong một dự đoán token, điều này rất tiện lợi.
- Nếu bạn sử dụng Quen cho việc này, điều đó cũng sẽ rất tốt.
### Muc 42

- Nhưng điều đó có nghĩa là mô hình LAMA là một mô hình đặc biệt phù hợp cho vấn đề cụ thể này, vì việc phân loại một token trùng khớp với việc đoán giá trị trong khoảng từ 0 đến 999.
- Bạn đang phân loại nó vào một trong các mức giá này.
- Đó là một lưu ý nhỏ.
- Đó là một điều thú vị.
- Điều đó có nghĩa là nếu bạn đang cân nhắc giữa việc chọn Lama, Phi hay Gemma, bạn thường không cần lo lắng về các chiến lược token hóa vì chúng thường không tạo ra sự khác biệt lớn.
- Nhưng trong trường hợp này, đó có thể là một trong những lý do khiến Lama trở thành mô hình tốt nhất để lựa chọn cho thí nghiệm cụ thể này.
- Được rồi, vậy là xong và chúng ta có thể in nhanh ở đây để xem, ừm, cái đó.
- Điều này cũng giống như trước khi có lời nhắc đầu tiên về đào tạo.
## Phan 15

### Muc 43

- Thực ra, hãy quay lại mục đào tạo cơ bản và xem nó trông như thế nào.
- Đây là núm điều khiển bên trong.
- À, và đây là nó.
- Đây là lời nhắc.
- Đây là số tiền được làm tròn đến đồng đô la gần nhất.
- Nếu chúng ta chuyển sang mục kiểm tra số 0, chúng ta sẽ thấy lời nhắc và phần hoàn thành.
- Lại nữa.
- Đây là hai cột mà giao diện ôm mặt mong đợi.
### Muc 44

- Và bạn sẽ thấy có lời nhắc.
- Đây là kết quả hoàn thành.
- Hãy cùng xem xét toàn bộ phân phối của các token trong này, để chúng ta có thể xác định xem liệu chúng ta có đang cắt giảm hay không.
- Chúng tôi hy vọng có thể cắt ngang tại điểm sao cho với một khoảng đệm nhỏ, chúng ta có thể sử dụng độ dài chuỗi tối đa là 128 cho một lũy thừa của hai.
- Hãy xem nào.
- Được rồi.
- Đã hoàn thành.
- Hãy cùng xem qua.
### Muc 45

- Dưới đây là biểu đồ của chúng tôi.
- Trung bình 101.
- Và tin vui.
- Con số cao nhất là 126.
- Chúng ta có thể sử dụng độ dài chuỗi tối đa là 128.
- Và cảm thấy tự hào về sức mạnh của hai chúng ta.
- Và bây giờ chúng ta sẽ tải lên Huggingface và mọi thứ sẽ diễn ra suôn sẻ.
- Vậy là chúng ta đã tạo ra hai bộ dữ liệu.
## Phan 16

### Muc 46

- Một cái được gọi là "uh items prompts light" và một cái được gọi là "items Prompts Full".
- Các bộ dữ liệu này chỉ có hai cột.
- Họ có sự nhanh chóng và họ có sự hoàn thành.
- Và đó chính xác là điều mà Huggingface mong đợi.
- Và tiếp theo, chúng ta sẽ quay lại Colab để xem các tập dữ liệu này trông như thế nào.
- Và xin lỗi, trước khi chúng ta xem trong Colab, hãy xem qua hai bộ dữ liệu mà chúng ta vừa tải lên.
- Bắt đầu với ánh sáng.
- Vậy là thế này.
### Muc 47

- Khi ôm mặt, bạn sẽ thấy rằng đó chính là nó.
- Trước hết, đây là một thứ có ba bộ dữ liệu.
- Nó có tỷ lệ chia là 20.000 cho dữ liệu đào tạo và 1.001.000 cho dữ liệu kiểm tra.
- Điều đó có nghĩa là tổng cộng có 22.000 hàng.
- Đây là hình dáng của nó.
- Nó có một lời nhắc và một phần hoàn thành.
- Yêu cầu là các thông tin như chi phí của sản phẩm này là bao nhiêu (đến gần nhất với số nguyên), danh mục sản phẩm, mô tả, thương hiệu.
- Đó là, ừm, đó là lời nhắc, là phần hoàn thành.
### Muc 48

- Thông báo này kết thúc với giá là đô la.
- Và chúng tôi đang huấn luyện một mô hình để hoàn thành điều này, để đưa ra các token tiếp theo.
- Và chúng tôi muốn hoàn tất giao dịch này với số tiền 64.00.
- Và lý do chúng ta đang chạy lại tất cả các mô hình là vì chúng ta không muốn làm xao lãng mô hình khi nó cố gắng dự đoán số xu.
- Chúng ta sẽ tập trung vào điều này, và trong trường hợp của llama, điều này sẽ luôn là một token.
- Tất cả các số từ 0 đến 999 sẽ chỉ là 1 đến 1.
- 99 sẽ chỉ là một token duy nhất.
- Đó là hoàn hảo.
## Phan 17

### Muc 49

- Đó là bộ dữ liệu nhẹ.
- Và nếu tôi xem xét tập dữ liệu thử nghiệm, có lẽ là vậy.
- Đúng vậy, chúng ta sẽ thấy rằng nó giống nhau, trừ trường hợp tập dữ liệu thử nghiệm.
- Chúng tôi thực sự có các số liệu chính xác để đảm bảo rằng khi tiến hành kiểm tra, kết quả sẽ chính xác.
- Đó là tập dữ liệu nhẹ.
- Và nếu tôi truy cập vào bộ dữ liệu đầy đủ ở đây, đây là nó.
- Nó lớn hơn.
- Nó có 800.000 hàng, mỗi hàng có 10.000 giá trị.
### Muc 50

- Và bạn có thể thấy tổng số hàng là 820.
- Nhưng ngoài ra, mọi thứ đều giống nhau.
- Tất cả trông đều tuyệt vời.
- Đó chính là những gì chúng tôi đã làm.
- Chúng tôi đã tải lên bộ dữ liệu này, rất phù hợp cho việc tinh chỉnh.
- Đây là cách bạn cũng có thể thực hiện để tinh chỉnh cho nhiệm vụ của mình.
- Được rồi.
- Bây giờ chúng ta sẽ mở Google Colab và bắt đầu tuần thứ bảy.
### Muc 51

- Ngày thứ hai của chương trình The Price is Right.
- Vậy, ừm, chúng ta phải bắt đầu bằng cách kết nối lại với một T4, một hộp T4 miễn phí.
- Hãy chắc chắn rằng đó là T4, hãy chắc chắn rằng bạn đã chọn đúng, hãy đảm bảo rằng bạn đã có GPU, hãy đến đây và xem thử.
- Tài nguyên.
- Nếu không, mọi việc sẽ không thể tiến hành được.
- Hãy đảm bảo rằng bạn đã cài đặt bộ nhớ GPU (GPU RAM) vào đó.
- Tuyệt vời.
- Vậy, ừm, như thường lệ, chúng ta bắt đầu bằng cách thực hiện các bước cài đặt pip.
## Phan 18

### Muc 52

- Nếu không, bạn sẽ gặp rắc rối sau này.
- Vậy hãy chắc chắn rằng bạn đã làm điều đó.
- Cũng có một dòng kỳ lạ ở đây.
- Nhìn này.
- Điều này đang làm gì vậy.
- Wget Q và sau đó là rất nhiều thứ có tên của tôi trong đó.
- Đây là gì với một tệp có tên là Utils.py?
- À, vậy thì điều tôi đã làm là viết một lớp tiện ích nhỏ và chạy nó.
### Muc 53

- Tôi đã đặt nó vào thư mục tuần 7 trên GitHub, và nó sẽ tải xuống trực tiếp vào Colab này.
- Điều này giúp tôi không phải viết lại hàng đống mã nguồn ở đây, nhưng vẫn sử dụng cùng một trình đánh giá, nhờ đó chúng ta có thể hiển thị đồ thị đẹp mắt mà không cần phải gõ lại toàn bộ mã mỗi lần.
- Thực ra, trong Colab, có một biểu tượng tệp nhỏ ở đây.
- Nếu bạn vào đó, cơ bản là tệp utils.py đã được tải xuống và đặt ngay tại đó.
- Và đúng vậy, bạn có thể mở tệp này ra và xem, nhưng bạn sẽ thấy tệp utils.py.
- Có cách nào để chúng ta có thể xem nó ngay tại đây không?
- À, tôi không thấy cách nào, nhưng chắc chắn có cách để bạn có thể làm được.
- À, thế là xong.
### Muc 54

- Nhấp đúp chuột.
- Ai mà biết được?
- Nhấp đúp vào nó và chúng ta sẽ thấy tệp này, và có thể bạn sẽ nhận ra nó.
- Thực ra, đó chính là cùng một người đánh giá như trước đây.
- Và điều đó có nghĩa là chúng ta sẽ phải đóng cửa để có thể thực hiện một số hoạt động nhập khẩu.
- Và một trong những hàm nhập của chúng ta ở đây là từ util import evaluate.
- Điều đó sẽ cho phép chúng tôi tiến hành đánh giá.
- Dễ thương.
## Phan 19

### Muc 55

- Vậy nên chúng tôi đang thực hiện một số hoạt động nhập khẩu.
- Và bây giờ chúng ta có một số hằng số.
- Đây là mẫu cơ bản mà chúng ta sẽ sử dụng.
- Tên dự án sẽ là tên giá.
- Đó là điều mà chúng ta sẽ sử dụng.
- Chế độ sáng ở đây là false.
- À, nhưng thực ra, tôi không nghĩ điều đó sẽ quan trọng đối với trường hợp này, nên tôi sẽ tạm thời chấp nhận điều đó.
- À, điều đó chắc chắn sẽ ổn thôi.
### Muc 56

- Và sau đó chúng ta sẽ nhập dữ liệu, chọn bộ dữ liệu phù hợp.
- Vậy đây là đoạn mã rất quen thuộc với bạn, tôi hy vọng vậy, vì nó cơ bản giống như những gì chúng ta đã quen thuộc.
- Và nó chạy nhanh đến vậy.
- Có lẽ vì tôi đã từng chạy nó trước đây.
- Ôi, không.
- Bởi vì đó chỉ là các hằng số.
- À, chúng ta vẫn chưa học được gì cả.
- Đầu tiên, chúng ta phải đăng nhập vào Hugging Face.
### Muc 57

- Vậy bạn phải đảm bảo rằng bạn đã thiết lập token khuôn mặt ôm và rằng dấu tick đó đã được đánh dấu.
- Đúng.
- Và bây giờ chúng ta đăng nhập và đã đăng nhập thành công, sau đó chúng ta tải dữ liệu của mình.
- Vậy là chúng tôi đã tải bộ dữ liệu của mình và tách riêng dữ liệu đào tạo, dữ liệu kiểm tra và dữ liệu thử nghiệm.
- Quá trình tải dữ liệu này thực sự không nhanh lắm vì tôi chưa chuẩn bị trước, nhưng nó vẫn nhanh vì, ừm, đây là bộ dữ liệu nhỏ.
- Và chúng ta sẽ in mục kiểm tra đầu tiên và kiểm tra xem sao.
- Đó chính xác là điều chúng ta mong đợi.
- Đây là một từ điển có hai trường: prompt và completion.
## Phan 20

### Muc 58

- Giá của sản phẩm này là bao nhiêu, tính đến đồng đô la gần nhất?
- Đây là pedal méo tiếng V2 yêu thích của chúng tôi, nếu bạn bao giờ cần một chiếc, bây giờ bạn đã biết tất cả về nó, và nó có giá tuyệt vời $219.
- Đây rồi.
- Đó chỉ là bài kiểm tra số một.
- Đây rồi.
- Và hãy bắt đầu với chuyến tàu số 0.
- Và chúng tôi dự kiến sẽ thấy con số 64.00 được làm tròn đẹp mắt, đây là núm điều chỉnh bên trong.
- Một điều khác mà bạn luôn mong muốn.
### Muc 59

- Được rồi.
- Vậy bây giờ chúng ta sẽ nói rằng chúng ta muốn sử dụng lượng tử hóa 4 bit.
- Vậy hãy thiết lập cấu hình lượng tử của chúng ta ngay tại đây.
- Và chúng ta sẽ tải tokenizer vào.
- Đây cơ bản là cùng một đoạn mã như trước đây.
- Tôi không biết liệu bạn có nhớ từ tuần thứ ba không, có một số công việc phức tạp mà bạn phải làm khi thực hiện điều này.
- Token đệm nên trùng với token kết thúc câu và phía đệm nên là bên phải.
- Bạn không.
### Muc 60

- Đừng lo lắng về điều này.
- Bạn luôn làm như vậy.
- Bạn chỉ cần sử dụng mã này mỗi khi tải tokenizer cho mục đích này.
- Đó chỉ là những thứ thông thường thôi.
- Nếu bạn không làm điều đó, bạn chỉ nhận được một vài cảnh báo, điều này thật phiền phức.
- Tôi không nghĩ rằng nó thực sự ảnh hưởng đến bất cứ điều gì.
- Và vì vậy, bạn luôn thấy mã nguồn như thế này.
- Và cuối cùng.
## Phan 21

### Muc 61

- Chúng tôi sẽ in lại kích thước của nó.
- Chúng tôi đang tìm kiếm cùng một số như trước đây.
- Chúng tôi dự kiến sẽ thấy khoảng 2,2GB.
- Đó nên là kích thước của con lạc đà được lượng tử hóa.
- Tôi nghĩ con số đó là 2.2 trước khi chúng ta thêm các ma trận Lora.
- Vậy nên điều này sẽ được tải vào.
- Điều này sẽ mất khoảng 30 giây hoặc có thể một phút.
- Và khi xong việc, tôi sẽ quay lại ngay, được không?
### Muc 62

- Nó vừa được tải vào.
- Nó là 2,2 GB, tôi nhớ vậy.
- Đúng.
- Ừ, được rồi, đây là một chức năng mới cho bạn.
- Đó được gọi là model.predict, nhận một đối tượng.
- Và đây là điều sẽ làm cho mô hình cơ sở Llama 3.2 của chúng ta được lượng tử hóa xuống còn 4 bit.
- Và chúng ta sẽ cố gắng dự đoán, chúng ta sẽ dự đoán kết quả của việc yêu cầu nó hoàn thành, dự đoán token tiếp theo xuất hiện sau đầu vào đó ngay lập tức?
- Không cần tinh chỉnh, chỉ sử dụng mô hình nguyên bản.
### Muc 63

- Ừm, và, ừm.
- Đúng vậy.
- Vậy nên, về cơ bản, chúng ta lấy các đầu vào, chúng ta lấy cột prompt của một mục.
- Hãy nhớ, đó là vấn đề liên quan đến giá cả, và giá đó là bằng đô la.
- Và chúng tôi đưa điều đó lên GPU.
- Và sau đó bằng đèn pin.
- Nograd.
- Bạn có thể nhớ điều đó từ thí nghiệm mạng thần kinh của chúng ta.
## Phan 22

### Muc 64

- Điều này có nghĩa là chúng ta sẽ không tiến hành bất kỳ khóa đào tạo nào.
- Chúng tôi chỉ muốn mô hình này hoạt động ở chế độ suy luận, nghĩa là chúng tôi muốn mô hình tạo ra token tiếp theo dựa trên các đầu vào và có thể tạo ra tối đa tám token mới.
- Chỉ để phòng hờ, nếu có gì đó xuất hiện trước số thực tế, chúng ta sẽ cho nó một cơ hội, sau đó chúng ta sẽ tách ra từ đó chính xác những gì nó đã tạo ra những thứ mới.
- Và chúng ta sẽ chuyển đổi những token đó trở lại thành các ký tự.
- Và đó là mô hình dự đoán.
- Được rồi.
- Vậy thì chúng ta hãy bắt đầu.
- Chúng ta sẽ chạy.
### Muc 65

- Chúng ta sẽ bắt đầu bằng việc xem xét mục kiểm tra đầu tiên là gì.
- Nếu bạn đã quên, món đồ thử nghiệm đầu tiên chính là, ừm, pedal méo tiếng máu, có giá $219.
- Vậy bây giờ chúng ta sẽ gọi mô hình Quantize Llama 3.2 để hoàn thành việc này.
- Nó sẽ được cung cấp lời nhắc này.
- Nó sẽ được yêu cầu dự đoán các token tiếp theo sau này.
- Và chúng ta sẽ xem kết quả ra sao.
- Đây là những gì chúng ta nhận được.
- Xin mời trống rộn ràng.
### Muc 66

- Chúng tôi nhận được 349,99.
- Giá là bao nhiêu?
- Vậy có thể đó là giá mà bạn có hoặc điều gì đó tương tự.
- Nó muốn tiếp tục nói chuyện.
- À nhưng đó chính là điều nó đã nói với chúng ta 349.
- Ý tôi là, nó nằm trong vùng mơ hồ đúng chỗ, nhưng nó khá xa so với thực tế.
- Đó là lạc đà cơ bản.
- Được rồi, điều này thật thú vị.
## Phan 23

### Muc 67

- Vậy bây giờ chúng ta sẽ chạy đánh giá.
- Chúng ta sẽ chạy công cụ đánh giá để xem nó hoạt động như thế nào.
- Nhưng trước tiên, tôi còn một phần phụ lục nữa.
- Đó là một điều cực kỳ quan trọng nữa mà tôi cần giải thích cho bạn.
- Được rồi, tôi đã nói là tôi còn một phần phụ lục nữa cho bạn, và đây là phần rất quan trọng.
- Đây không phải là sự phân tâm.
- Đây là kiến thức cốt lõi.
- Bạn có thể đã nhận ra điều gì đó.
### Muc 68

- Bạn có thể thắc mắc, tại sao cấu trúc dữ liệu mà chúng ta đang truyền vào mô hình ở đây lại khác với cách chúng ta đã làm cho các mô hình biên giới trước đây.
- Chúng tôi luôn sử dụng các lời nhắc hệ thống, lời nhắc người dùng và phản hồi của trợ lý, và đó là cách chúng tôi đã sử dụng để đào tạo các mô hình của mình.
- Ở đây chúng ta chỉ có phần gợi ý và sau đó là phần hoàn thành.
- Và có thể bạn đang tự hỏi tại sao.
- Tại sao chúng ta lại tiếp cận vấn đề này theo cách khác biệt như vậy?
- Và tại sao dự đoán của chúng ta ở đây lại khác biệt đến vậy?
- Chúng ta không tạo ra phản hồi trợ lý như đã làm với GPT.
- Được rồi.
### Muc 69

- Có lý do chính đáng cho điều đó.
- Thực tế, có hai loại mô hình khác nhau như vậy.
- Có các mô hình được gọi là mô hình cơ sở.
- Và còn có các mô hình được gọi là biến thể chat hoặc biến thể hướng dẫn.
- Vậy có một phiên bản cơ bản và sau đó có phiên bản chat hoặc phiên bản hướng dẫn.
- Chúng là những từ đồng nghĩa.
- Bạn có thể sử dụng bất kỳ thuật ngữ nào trong hai thuật ngữ đó.
- Và như bạn đã biết, hiện nay còn có một loại thứ ba là các mô hình suy luận hoặc tư duy, giống như một loại thứ ba khác.
## Phan 24

### Muc 70

- Nhưng nhưng điều đó hoàn toàn không liên quan đến vấn đề này.
- Vậy chúng tôi đang xem xét giữa hai tùy chọn: phiên bản cơ bản hoặc phiên bản chat.
- Một trong hai mẫu đó, mẫu cơ bản, là điểm xuất phát.
- Đó là một mô hình được cung cấp một chuỗi đầu vào và được huấn luyện để cố gắng dự đoán các token có khả năng xuất hiện tiếp theo sau chuỗi đầu vào đó.
- Và đó là tất cả những gì nó được huấn luyện để làm.
- Nó giống như tính năng dự đoán văn bản.
- Có một trình tự nhất định và những gì có thể xảy ra tiếp theo.
- Và các phiên bản ban đầu của GPT đều là các mô hình cơ sở.
### Muc 71

- GPT 2, 3 và 3.5 là mô hình cơ sở, và việc tương tác với nó khá kỳ lạ vì nó luôn cố gắng hoàn thành bất kỳ tác vụ nào được giao.
- Và OpenAI là những người đã đưa ra ý tưởng này, đó là: "Này, hãy lấy một mô hình cơ sở và tinh chỉnh nó thêm một chút với một cấu trúc bao gồm tin nhắn hệ thống, lời nhắc của người dùng và phản hồi của trợ lý, sau đó là lời nhắc của người dùng." Hãy dạy nó.
- Kiểu trò chuyện này, kiểu tương tác qua tin nhắn này.
- Và sau đó, chúng ta sẽ làm cho nó trở nên rất giỏi trong việc trả lời khi ai đó trò chuyện với nó, thay vì chỉ đơn thuần hoàn thành chuỗi lệnh.
- Và do đó, các mô hình được tinh chỉnh này được gọi là các biến thể chat hoặc các biến thể instruct, dựa trên một mô hình cơ sở được thiết kế để dự đoán cấu trúc này.
- Và vì vậy, khi làm việc với các mô hình đó, chúng thường được đặt tên tương tự như vậy nhưng có thêm dấu gạch ngang và từ "instruct" ở cuối.
- Khi làm việc với các mô hình Instruct, bạn cần phải cấu trúc đầu vào của mình để bao gồm các token đặc biệt này.
- Hệ thống hiển thị thông báo, người dùng nhập lệnh và trợ lý trả lời vì nó đã được đào tạo để hoạt động như vậy.
### Muc 72

- Và đó là dữ liệu mà nó mong đợi và đó là điều nó sẽ tiếp tục.
- Và bạn cũng có thể sử dụng mô hình cơ sở, mô hình này không được thiết kế để xử lý trường hợp này, do đó nó sẽ không biết cách xử lý và không thể chèn một token đặc biệt vì nó chưa được đào tạo với các token đó, và do đó không biết phải làm gì với chúng.
- Nó chỉ cần nhận các token đầu vào và sẽ dự đoán token tiếp theo.
- Cả hai mô hình, mô hình cơ sở và mô hình hướng dẫn, đều có sẵn và chúng cũng là các mô hình suy luận.
- Nhưng nhưng đó là một vấn đề hoàn toàn khác.
- Vậy là có hai loại mô hình khác nhau như thế này.
- Và thực tế, bạn có thể sử dụng cả hai để tinh chỉnh.
- Bạn có thể bắt đầu với bất kỳ cái nào.
## Phan 25

### Muc 73

- Vậy tại sao chúng ta lại bắt đầu với mô hình cơ bản ở đây.
- Câu trả lời ngắn gọn là bạn có thể làm cả hai.
- Bạn có thể sử dụng mô hình cơ bản hoặc sử dụng biến thể hướng dẫn và có tất cả các token đặc biệt trong đó.
- Thông thường, các mô hình cơ bản thường hiệu quả hơn khi bạn muốn dạy một kỹ năng mới, đặc biệt là khi kỹ năng đó không yêu cầu tương tác qua chat và không cần các loại hướng dẫn khác nhau.
- Chỉ có một lệnh duy nhất, và bạn chỉ muốn nó dự đoán điều gì sẽ xảy ra tiếp theo.
- Và đó chính xác là loại vấn đề mà chúng ta đang gặp phải ở đây.
- Và các mô hình trò chuyện hoạt động hiệu quả hơn khi bạn cố gắng hoạt động trong chế độ tương tác theo kiểu "hướng dẫn - phản hồi", tức là chế độ tương tác theo kiểu "hướng dẫn - phản hồi".
- Và hướng dẫn có thể khác nhau và bạn muốn nó hoạt động theo hướng dẫn đó.
### Muc 74

- Vì vậy, những loại vấn đề đó phù hợp hơn để bắt đầu với biến thể đã được huấn luyện sẵn.
- Tất nhiên, câu trả lời ngắn gọn là bạn nên thử cả hai.
- Bạn nên thử nghiệm và chọn phương án hoạt động tốt nhất.
- Và trong trường hợp này, tôi đã làm cả hai.
- Mặc dù bản năng của tôi cho rằng cơ sở sẽ tốt hơn.
- Tôi đã thử cả hai và thực sự, đúng vậy, phần nền hoạt động tốt hơn.
- Phiên bản hướng dẫn hoạt động kém hơn một chút và cần nhiều token hơn đáng kể.
- Bộ token đặc biệt đó đã thiết lập mọi thứ.
### Muc 75

- Và vì vậy, công việc trở nên vất vả hơn và kết quả cũng kém hơn một chút.
- Không có gì nhiều trong đó, nhưng điều đó cho bạn một cái nhìn tổng quan.
- Trong trường hợp đó,直觉 của tôi thường sai, nhưng lần này lại đúng.
- Trong trường hợp đó, đối với loại vấn đề đơn giản như vậy, khi chúng ta chỉ có một yêu cầu và muốn hoàn thành nó, tốt nhất là nên sử dụng mô hình cơ bản và tổ chức dữ liệu theo cách rất đơn giản, cơ bản.
- Và điều này thực sự rất phổ biến trong quá trình tinh chỉnh.
- Khi bạn đang cố gắng dạy một kỹ năng chuyên môn như thế này.
- Được rồi, không cần dài dòng nữa, chúng ta hãy chạy hàm đánh giá.
- Và bạn có thể thấy tôi đã áp dụng toàn bộ, ừm, hàm này.
## Phan 26

### Muc 76

- Chúng tôi nhận được kết quả đẹp mắt, đầy màu sắc, ừm, khi chúng xuất hiện.
- Đây là lỗi được hiển thị mỗi lần với màu đỏ, vàng hoặc xanh lá cây tùy thuộc vào mức độ sai lệch.
- Và bạn có thể thấy rằng nó không nhanh như chúng ta thường quen vì thực tế nó không được tối ưu hóa song song.
- Tôi đang làm từng việc một thay vì làm nhiều việc cùng lúc.
- Trong phiên bản này trên Colab, bạn có thể thấy rằng chúng ta đang sử dụng hết 2.2GB bộ nhớ GPU và một chút nữa.
- Và, ừm, trông có vẻ thú vị.
- Vậy một lần nữa, điều chúng ta đang làm ở đây là chạy mô hình cơ sở, một mô hình Llama 3.2 chưa được huấn luyện và đã được tinh chỉnh.
- Chúng tôi đang tận dụng lợi thế rằng nó có một số kiến thức về thế giới.
### Muc 77

- Vì vậy, khi được cung cấp một đầu vào như vậy và phải hoàn thành nó, nó nên đưa ra một kết quả hoàn thành tương tự như những gì chúng ta đang tìm kiếm dựa trên dữ liệu đào tạo của nó.
- Và chúng tôi phát hiện ra rằng khi sử dụng mô hình tiên tiến như GPT 5.1, nó sở hữu kiến thức vô cùng phong phú, kiến thức về thế giới rất tốt, nên nó đã hoàn thành công việc một cách xuất sắc ngay từ lần đầu tiên sử dụng.
- Không cần điều chỉnh chi tiết.
- Và thực tế, uh, mô hình GPT đã hoạt động kém hơn một chút khi chúng tôi cố gắng tinh chỉnh chúng vì chúng không thực sự, ừm, phù hợp với việc tinh chỉnh như vậy.
- À, nhưng trong trường hợp này, ừm, chúng tôi rất tò mò muốn xem chiếc Llama 3.2 có kích thước nhỏ hơn đáng kể và cũng được lượng tử hóa, chỉ khoảng 2,2GB, sẽ hoạt động như thế nào.
- Và tôi sẽ quay lại.
- Chúng ta đã đi được khoảng một nửa chặng đường.
- Tôi sẽ quay lại khi công việc hoàn thành để chúng ta có thể xem kết quả.
### Muc 78

- Được rồi.
- Kết quả đã có.
- Để tôi cuộn lên.
- Được rồi, bắt đầu nhé.
- 110.72 Một câu trả lời thật tệ.
- À, tất nhiên, bạn có thể thấy nó đã bị ảnh hưởng rất nặng nề bởi hai con số thực sự tồi tệ.
- Nhưng nói chung, nó không được thực hiện tốt chút nào.
- R-squared là một số âm lớn, ừm, điều này không bao giờ là tốt khi nhìn thấy lỗi.
## Phan 27

### Muc 79

- 110,72 không tốt lắm.
- Phiên bản cơ sở llama llama 3.1 ở đó.
- Nó nên ghi là llama 3.2.
- Phiên bản cơ sở llama 3.2 không hoạt động tốt với tập dữ liệu thử nghiệm của chúng tôi.
- Ít nhất thì nó cũng cho chúng ta một điểm khởi đầu.
- 110,72 là mức giá hiện tại của Bazlama.
- Hy vọng bạn cũng đã thấy điều đó.
- Và tôi hy vọng rằng bạn đã chuẩn bị sẵn dụng cụ của mình, tờ giấy của mình và đã ghi chép lại trên tờ giấy đó.
### Muc 80

- Tờ giấy của tôi bây giờ đã rất bận rộn.
- Tôi không gọn gàng lắm và tôi đã ghi chép lại.
- Hy vọng bạn gọn gàng hơn tôi và đã ghi lại con số 110,72, nhưng việc hình dung nó luôn tốt hơn.
- Vậy hãy cùng xem qua nhanh nhé.
- Đây là nó.
- Tôi không biết bạn có nhận ra điều này không, nhưng 110.72 còn tệ hơn cả hằng số, thứ mà mô hình tồi tệ nhất của chúng ta cho đến nay chỉ đơn giản là đoán hằng số đó, không bao gồm hằng số ngẫu nhiên, điều đó thật ngớ ngẩn.
- Hằng số là 106,18 và cơ sở Lama.
- Tệ hơn là chỉ chọn cơ sở hằng số Lama là 110,72.
### Muc 81

- Ngay cả Ed cũng làm tốt hơn Lama cơ bản, không phải năm ngoái, tôi nghĩ vậy.
- Nhưng năm nay.
- Năm nay, tôi có độ chính xác cao hơn so với phiên bản cơ sở Lama 3.24 bit.
- Ồ, nó làm việc rất tệ, rất tệ.
- À, hãy xem hình ảnh này.
- Hãy nhớ lại tất cả những gì chúng ta đã làm trong quá trình đào tạo, và hãy nhớ rằng.
- Mục tiêu cho tuần này là bây giờ sử dụng con lạc đà cơ bản này.
- Vì đó là một mô hình nhỏ.
## Phan 28

### Muc 82

- Nó đã được nén xuống còn 2,2 GB.
- Chỉ là nó nhỏ xíu.
- Nó có thể vừa vặn trên một chiếc điện thoại di động, mô hình nhỏ bé này, liệu chúng ta có thể cạnh tranh được không?
- Ý tôi là, bạn biết đấy, hãy xem chúng ta có thể làm tốt hơn mức độ con người hay có lẽ là mức độ con người tồi tệ.
- Ừm, làm tốt hơn thế đi.
- À, và chúng ta có thể đến gần hơn không?
- Có thể.
- Có thể là một biến thể nano của mô hình?
### Muc 83

- À, vậy với một mô hình nguồn mở miễn phí trên thiết bị, kích thước nhỏ gọn của mô hình, chúng ta có thể có được một giải pháp thực sự đạt được mục tiêu thương mại.
- Đó là mục tiêu cho tuần này.
- Đó là mục tiêu cho vài ngày tới, ừm, điều đó thật thú vị.
- À, vậy đó là điều chúng ta sẽ nhận được sau đó.
- Và hy vọng rằng hình ảnh này sẽ giúp bạn hình dung rõ hơn.
- Ôi trời ơi, chúng ta đã đến mốc 80% rồi, tức là đã đi được 80% chặng đường.
- Và hy vọng rằng bạn thực sự cảm thấy 80% như thể bạn đã có được chuyên môn thực sự, đặc biệt là khi chúng ta đang bắt đầu xây dựng những nội dung nâng cao hơn.
- Nhiều thứ sẽ dần trở nên rõ ràng và kết nối với nhau cho bạn.
### Muc 84

- Điều này đưa chúng ta quay trở lại thời kỳ mà bạn có thể làm việc với các mô hình front-end, mô hình nguồn mở, API, bộ nhớ đệm prompt sử dụng mô hình ngôn ngữ nhẹ (light LM), chuyển đổi giữa các mô hình khác nhau bằng các công cụ và cách thức hoạt động của chúng, kỹ thuật thời gian suy luận, xây dựng trợ lý và sau đó là rag.
- Sử dụng rag để lấy lại ngữ cảnh.
- Sử dụng bộ mã hóa để có thể vectơ hóa đầu vào, trả lời câu hỏi và đo lường, đánh giá kết quả.
- Sử dụng chuỗi dài và không sử dụng chuỗi dài.
- Và tất nhiên, tất cả những gì chúng ta đã làm tuần trước bao gồm việc lựa chọn và tiền xử lý tập dữ liệu, xây dựng các mô hình cơ sở, và tinh chỉnh các mô hình tiên tiến.
- Và trong tuần này, bạn có thể giải thích ma trận Lora, lượng tử hóa mô hình bằng các mô hình nguồn mở cho, cho, và hiểu các khái niệm như mô-đun mục tiêu R và Alpha.
- Và sau đó chọn.
- Bây giờ bạn đã biết sự khác biệt giữa việc chọn một mẫu cơ bản và một biến thể trò chuyện.
## Phan 29

### Muc 85

- À, và, và bạn hiểu rằng bạn có thể chọn làm cơ sở, như Llama, Quen hoặc Gemma, và tất cả đều hoạt động tốt.
- Và có thể sẽ có những khác biệt nhỏ giữa chúng.
- Có một lợi ích nhỏ.
- Llama có tính năng tokenization này, và hóa ra nó rất tiện lợi cho vấn đề mà chúng ta đang giải quyết.
- Vậy là đã tích lũy được rất nhiều chuyên môn cốt lõi.
- Và xin đừng lo lắng nếu bạn không theo kịp mọi thứ.
- Hãy nhớ rằng có ba cách khác nhau để bạn có thể tham gia vào việc này.
- Đối với vật liệu này.
### Muc 86

- Bạn có thể chỉ đang sử dụng điều này để rèn luyện直觉, để có cảm nhận về nó.
- Hoặc bạn có thể đang làm việc với phiên bản lite hoặc thực sự đào sâu vào phiên bản đầy đủ, dù sao thì cả hai đều tuyệt vời.
- Lần sau, chúng ta sẽ tìm hiểu thêm về các siêu tham số được sử dụng trong quá trình huấn luyện.
- Chúng tôi thực sự sẽ thiết lập một mô hình SFT (Supervised Fine-Tuning Trainer) của riêng mình và bắt đầu đào tạo mô hình ngôn ngữ lớn (LLM) độc quyền của chúng tôi.
- Điều đó sẽ xảy ra.
- Tất cả sẽ diễn ra tại đây vào ngày mai.
- Ngày quan trọng nhất của khóa học cho đến nay.
- Hẹn gặp lại sau.

