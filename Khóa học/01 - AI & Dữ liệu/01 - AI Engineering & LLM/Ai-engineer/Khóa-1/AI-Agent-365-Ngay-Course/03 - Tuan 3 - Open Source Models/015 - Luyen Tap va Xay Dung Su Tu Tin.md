# Ngay 015 - Tuan 3, ngay 5

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-015.txt

## Tong quan

- Chu de mo dau: Tốt.
- File goc: day-015.txt
- So y chinh: 479
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Tốt.
- Xin chào.
- Bạn đã trở lại.
- Đã đến ngày thứ năm của tuần thứ ba.
- Khi tuần thứ ba kết thúc, chúng ta sẽ luyện tập và xây dựng sự tự tin.
- Bạn đã tự tin với các người mẫu và trợ lý của Frontier.
- Và bạn chỉ đang tiến gần đến đó với các đường ống, trình phân tích và mô hình.
- Bây giờ chúng ta sẽ tiếp tục, thực hiện một số công việc với Tokenizer và các mô hình để xây dựng một dự án thương mại nhỏ thú vị và có thể chạy suy luận và các mô hình nguồn mở và triển khai giải pháp LLM sẽ sử dụng cả mô hình biên giới và nguồn mở, và sẽ rất tuyệt vời và thỏa mãn.
### Muc 2

- Một cách khá kỹ thuật nữa, nhưng thực sự là cách để xem xét kỹ lưỡng một chút.
- Ừm, vậy thì để tôi kể cho bạn nghe những gì tôi sắp làm nhé.
- Vì vậy, chúng ta sẽ tạo một ứng dụng có khả năng ghi biên bản cuộc họp.
- Nó có khả năng ghi âm cuộc họp và chuyển thành bản tóm tắt và hành động.
- Và đó là loại công cụ thương mại mà bạn thực sự có thể tích hợp vào các sản phẩm phổ biến.
- Vì vậy, mọi người đang xây dựng thứ này và kiếm tiền từ nó.
- Đây là điều thực tế mà chúng ta sẽ làm.
- Và chắc chắn chúng tôi sẽ thực hiện một phiên bản thử nghiệm hơn.
### Muc 3

- Không hẳn là bạn đã sẵn sàng để kiếm tiền từ nó ngay lúc này, nhưng chắc chắn đây là một bước tiến theo hướng đó.
- Bạn chắc chắn sẽ thấy cách bạn có thể mở rộng nó.
- Nó sẽ sử dụng mô hình giao diện người dùng để chuyển âm thanh cuộc họp thành văn bản.
- Trước đây chúng ta đã thực hiện chuyển văn bản thành giọng nói và bây giờ là chuyển giọng nói thành văn bản.
- Ừ, sau đó chúng ta sẽ sử dụng một mô hình nguồn mở để tạo biên bản cuộc họp.
- Và sau đó, khi có thể, chúng ta sẽ phát trực tiếp chúng, hiển thị và giảm giá.
- Chúng tôi sẽ làm tất cả những điều đó.
- Đó sẽ là dự án thương mại của chúng tôi và là cách để nâng cao chuyên môn của chúng tôi.
## Phan 2

### Muc 4

- Nhưng trước tiên, tôi có thứ thú vị muốn cho bạn xem.
- Hãy để tôi đưa bạn trở về.
- Bạn có tin quay lại con trỏ không?
- Chúng ta hãy chuyển sang con trỏ trong một giây.
- Vậy là tôi đã quay lại con trỏ.
- Tôi sẽ bước sang tuần thứ ba.
- Tôi sẽ bước sang ngày thứ năm.
- Và tất nhiên ngày thứ năm bắt đầu bằng một liên kết đến Google Colab.
### Muc 5

- Nhưng tôi sẽ không đến đó.
- Trước tiên tôi muốn cho bạn xem một thứ.
- Có một điều tôi nghĩ là bạn sẽ thích.
- Vì vậy, hôm qua tôi đã lướt qua vấn đề này một chút, nhưng tôi đã đề cập đến nó trong những tuần trước về cách các mô hình thực sự suy luận, cách chúng tạo ra đầu ra thực sự là một quá trình gồm nhiều bước.
- Điều bạn khám phá ra ngày hôm qua là cách thức hoạt động của các máy biến áp này là đầu vào là một chuỗi mã thông báo và chúng chỉ có một đầu ra, và đầu ra đó là một tập hợp các xác suất, một xác suất cho mỗi mã thông báo tiếp theo có thể có.
- Vậy có lẽ không có một đầu ra nào cả.
- Có rất nhiều kết quả đầu ra.
- Đó là 128.000 đầu ra của nó.
### Muc 6

- Đó là xác suất cho từng mã thông báo tiếp theo có thể có, chỉ là mã thông báo tiếp theo theo chuỗi đầu vào này.
- Và bạn có thể nhớ khi tôi giải thích điều này trong tuần đầu tiên, tôi nghĩ có lẽ là tuần thứ hai, rằng cách thức hoạt động là bạn nhập chuỗi đầu vào, thực hiện quy trình này và kết quả thu được từ các xác suất này, sau đó bạn chọn một trong số những xác suất này mà bạn cho là sẽ là mã thông báo tiếp theo.
- Và thông thường người ta chỉ chọn cái có khả năng cao nhất dẫn đến mã thông báo tiếp theo có khả năng xảy ra nhất.
- Bây giờ cũng có nhiều cách khác để thực hiện điều đó.
- Nhưng bạn hãy lấy nó đi.
- Giả sử bạn lấy giá trị có khả năng xảy ra cao nhất và sau đó bạn nói, được rồi, bây giờ hãy lấy chuỗi đầu vào đó và đặt mã thông báo có khả năng xảy ra đó vào cuối chuỗi đầu vào và truyền lại tất cả vào như một đầu vào mới cho cùng một bộ biến đổi.
- Và nó sẽ tạo ra sự phân bố xác suất của mã thông báo thứ hai.
- Và bạn lấy nó, bạn chọn cái có khả năng xảy ra cao nhất, bạn nhét nó vào cuối, bạn đưa nó vào lần nữa và bạn lặp lại.
## Phan 3

### Muc 7

- Và theo cách đó, máy biến áp này sẽ liên tục nhả ra từng mã thông báo một.
- Và đó là lý do tại sao chúng tôi truyền trực tiếp kết quả và tại sao bạn thấy hình ảnh động của máy đánh chữ.
- Bởi vì nó thực sự tạo ra những dự đoán này từng mã thông báo một.
- Và bằng cách nào đó, quá trình thực hiện từng bước một này cho phép nó đưa ra loại phản hồi rất có ý nghĩa và cho phép các mô hình lý luận suy nghĩ thông qua từng bước một về những gì chúng sẽ làm.
- Và các mã thông báo sau này có nhiều khả năng chính xác hơn vì chúng muốn nhất quán với các mã thông báo trước đó.
- Đây là một hiệu ứng kỳ lạ, và khi tôi cố gắng giải thích điều đó với mọi người, đôi khi mọi người không tin tôi.
- Và vì vậy tôi đã viết bài này để giúp thuyết phục mọi người rằng đó thực sự là những gì đang diễn ra.
- Và đặc biệt, có người đã nói rằng một trong những câu hỏi tôi thường hỏi người mẫu là hãy mô tả màu xanh lam cho một người chưa bao giờ nhìn thấy.
### Muc 8

- Đây chính là loại vấn đề mà các mô hình này đưa ra câu trả lời tuyệt vời.
- Chúng ta hãy cùng xem xét GPT trong một phút.
- Tôi nghĩ chúng ta đã từng làm điều này rồi.
- Vậy nên điều tôi sẽ làm bây giờ là đưa nó vào GPT bốn trên mini, nhưng theo một cách khá thú vị.
- Có một cách để bạn có thể gọi GPT thông qua API và nó không chỉ cung cấp cho bạn mã thông báo tiếp theo có khả năng xảy ra cao nhất mà còn cung cấp cho bạn một vài mã thông báo có khả năng xảy ra cao nhất và cung cấp cho bạn xác suất của từng mã thông báo.
- Và bạn có thể gọi nó trong một vòng lặp và thu thập từng vòng lặp.
- Bạn cũng có thể thực hiện điều này bằng mã ôm mặt khá dễ dàng.
- Ừ, nhưng tôi đã làm điều đó với OpenAI ở đây vì thật tuyệt khi thấy một câu trả lời mạnh mẽ như vậy.
### Muc 9

- Và tôi đã viết một số mã trong visualizer, bạn có thể xem qua.
- Ừ, nếu bạn muốn.
- Không quan trọng tôi đã thực hiện nó như thế nào.
- Đó không phải là vấn đề chính ở đây, nhưng nó được thể hiện dưới dạng biểu đồ theo cách mà tôi muốn chỉ cho bạn thấy.
- Tôi sẽ chạy nó ngay bây giờ.
- Tôi sẽ hỏi GPT bốn hoặc mini câu hỏi này và tôi sẽ hình dung kết quả.
- Để tôi chỉ cho bạn nhé.
- Vậy là nó đang chạy ngay lúc này.
## Phan 4

### Muc 10

- Và đây là kết quả.
- Và để tôi hướng dẫn bạn thực hiện việc này.
- Và tôi nghĩ đây có thể là một khoảnh khắc "aha" khác dành cho bạn.
- Vì vậy, đối với mã thông báo đầu tiên, mã thông báo đầu tiên phải đứng sau câu, hãy mô tả màu xanh lam cho một người chưa từng nhìn thấy màu này trong một câu.
- Mã thông báo đầu tiên mà nó cho rằng có nhiều khả năng là từ màu xanh lam, với tối đa 3 đến 1 chữ số thập phân là 100.
- 0%.
- Nhưng nếu bạn tiếp tục, con số sẽ là 99.
- 9999.
### Muc 11

- Vì vậy, gần như 100% nó sẽ có màu xanh.
- Màu thứ hai có khả năng cao nhất cũng có màu xanh.
- Nhưng đó là bởi vì có thứ gì đó giống như, ừm, nó có màu xanh nhưng không có từ kết thúc hay gì đó.
- Vì vậy, đó là một dạng khác biệt của mã thông báo đó.
- Và khả năng khác là nó nghĩ rằng nó có thể bắt đầu bằng từ "tưởng tượng", nhưng điều đó rất khó xảy ra.
- Vì vậy, nó có thể nghĩ đến một câu hỏi như mô tả màu xanh.
- Từ đầu tiên có khả năng xuất hiện nhiều nhất chắc chắn là từ "blue".
- Vì vậy màu xanh được chọn và màu xanh được đẩy vào cuối chuỗi đó.
### Muc 12

- Và bây giờ nó lại nói hãy mô tả màu xanh cho một người chưa bao giờ nhìn thấy màu xanh.
- Và bây giờ mô hình sẽ tạo ra mã thông báo tiếp theo.
- Và vì thế nó đưa ra những điều sau.
- Đây là ba khả năng hàng đầu.
- Màu xanh lam có thể đạt 62%, màu xanh lam cảm thấy đạt 38% và màu xanh lam có thể nhỏ hơn nhiều.
- Và tất cả những điều này có vẻ rất đáng tin.
- Bạn biết đấy, giống như tôi, tôi không ngạc nhiên khi bạn có thể viết một mô hình thống kê dựa trên tất cả dữ liệu trên Internet để biết rằng "blue is" có khả năng là từ đầu tiên nhất và "blue is".
- Và cảm giác màu xanh sẽ rất hợp lý.
## Phan 5

### Muc 13

- Từ thứ hai.
- Từ thứ hai đứng sau từ blue và chúng ta chọn là.
- Bây giờ chúng ta có màu xanh và đó là những gì chúng ta truyền lại vào GPT.
- Và điều tiếp theo nó có thể đưa ra là màu xanh hoặc màu xanh là một hoặc màu xanh giống như vậy.
- Và một lần nữa, điều đó có vẻ không quá xa vời khi một chương trình so sánh mẫu thống kê có thể thấy rằng đó là một từ tiếp theo rất hợp lý.
- Vì vậy, nó chọn màu xanh lam, đây là ba từ đầu tiên có khả năng xuất hiện nhiều nhất sau chuỗi mà chúng ta đã có.
- Tất nhiên là tôi tin rồi.
- Điều đó có vẻ không quá xa vời.
### Muc 14

- Màu xanh mang lại cảm giác mát mẻ hoặc màu xanh mang lại cảm giác bình tĩnh, hoặc màu xanh mang lại cảm giác mát mẻ và bình tĩnh.
- Tất cả chúng đều có vẻ là những từ rất thực tế.
- Màu xanh là cảm giác mát mẻ và thư thái của làn gió nhẹ lướt trên da bạn hoặc Và tôi khuyến khích bạn xem qua điều này.
- Hãy xem xét các xác suất tại mỗi điểm và thấy rằng bạn đang nhìn thấy người đàn ông phía sau bức màn giống như trong phim Phù thủy xứ Oz.
- Bạn sẽ được chứng kiến một số hoạt động của cỗ máy, cách nó lựa chọn xác suất của các mã thông báo và cách nó tạo ra câu trả lời rất biểu cảm và giàu chất thơ cho một câu hỏi rất khó bằng cách lựa chọn mã thông báo tiếp theo có khả năng xảy ra cao nhất.
- Và tôi hy vọng rằng bằng cách hướng dẫn bạn thực hiện điều này, một chút kỳ diệu về dự đoán mã thông báo tiếp theo sẽ dần mờ nhạt và bạn sẽ nghĩ, ồ, được rồi, thì ra đó là cách nó hoạt động.
- Ừ, thì ra đó là điều tôi muốn cho bạn thấy.
- Ừ, và có thể bạn đã thấy nó trên các video YouTube của tôi, trong trường hợp đó thì tôi nghĩ là, được rồi, tôi đã thấy rồi, nhưng tôi thích nó.
### Muc 15

- Đối với tôi, đây là một khoảnh khắc đặc biệt, thậm chí đối với cá nhân tôi, bởi vì.
- Bởi vì tất nhiên là tôi biết điều này.
- Nhưng phải đến khi bạn thực sự nhìn thấy nó, và thực sự đau khổ vì nó, thì bạn mới cảm nhận được điều này một cách thực sự và bạn có cảm giác rằng đây là những thành phần, giống như tôi nghĩ tôi đã thấy trong một trong những video của mình khi bạn biết, công thức đằng sau một số món ăn, một số món ăn, nó mất đi một chút sự hấp dẫn.
- Bạn nghĩ, vậy là hết rồi sao?
- Và ở đây có cảm giác hơi giống thế.
- Và điều tôi khuyến khích bạn làm là hãy thử thay đổi điều này bằng cách thử nghiệm với thứ gì đó khác.
- Hãy mô tả màu cam cho một người chưa bao giờ nhìn thấy.
- Và rõ ràng là bạn sẽ nhận được những phản hồi khác nhau.
## Phan 6

### Muc 16

- Và sau đó, ừm, đúng rồi, nói nhiều hơn về sự ấm áp và sống động.
- Và khi bạn làm điều này và thử nghiệm với điều này, bạn sẽ có được sự hiểu biết ngày càng rõ ràng và cụ thể hơn về những gì đang diễn ra và rằng những LMS tuyệt vời này, những LMS đáng kinh ngạc này thực sự chỉ là những cỗ máy dự đoán thống kê.
- Vì vậy, ngay cả khi bạn đã từng thấy điều này trên video YouTube của tôi trước đây, thì giờ bạn đã có mã rồi.
- Bạn nên thử nghiệm nó.
- Hãy thực hành ngay nhé.
- Hãy cảm nhận chính mình.
- Bây giờ bạn cũng có thể áp dụng lại điều này cho các mô hình khuôn mặt ôm sát.
- Và thực ra điều đó rất dễ thực hiện, và tôi chắc rằng GPT hoặc Claude cũng có thể làm được điều đó cho bạn.
### Muc 17

- Chỉ cần cập nhật mã trình trực quan hóa của tôi để sử dụng các lớp mô hình và chơi với các mô hình đó.
- Hãy tận dụng kinh nghiệm thực tế.
- Một điểm cuối cùng cần lưu ý là mô tả thứ gọi là nhiệt độ.
- Có thể bạn đã biết rằng khi gọi OpenAI, bạn có thể truyền nhiệt độ vào dưới dạng một trường.
- Khi bạn tạo OpenAI, bạn có thể nói mô hình bằng thông điệp và nhiệt độ bằng.
- Và bạn có thể biết rằng nhiệt độ bằng không có nghĩa là bạn muốn nó luôn luôn tạo ra cùng một kết quả đầu ra, tức là rất nhất quán trong những gì nó tạo ra.
- Và nhiệt độ cao hơn sẽ mang lại cho bạn nhiều câu trả lời đa dạng hơn.
- Một số người mô tả nó có tính sáng tạo hơn, nhưng tôi nghĩ điều đó không hoàn toàn đúng.
### Muc 18

- Quan trọng hơn là sự thay đổi mà bạn nhận được.
- Cách thực sự hoạt động trong thực tế chỉ là khi thực hiện suy luận, đoạn mã thực hiện suy luận này, vòng lặp này sẽ chọn mã thông báo tiếp theo.
- Vấn đề là làm sao để chọn được mã thông báo tiếp theo.
- Nếu bạn đặt nhiệt độ bằng 0, thì nó luôn chọn mã thông báo có xác suất cao nhất.
- Đó chính là người được chọn.
- Nó luôn chọn cái đó.
- Và đó là lý do tại sao mọi thứ luôn giống nhau nhưng đôi khi lại có chút ngẫu nhiên.
- Nhưng về cơ bản, khi bạn có nhiệt độ cao hơn, thay vì chỉ luôn chọn mã thông báo có xác suất cao nhất, nó sẽ lấy mẫu từ các mã thông báo có xác suất cao hơn có nhiều khả năng được chọn hơn và nhiệt độ càng cao thì nó càng sẵn sàng xem xét xa hơn mã thông báo có xác suất cao nhất.
## Phan 7

### Muc 19

- Và đó chính là nhiệt độ.
- Và nếu bạn đã từng sử dụng nó trước đây và đang thắc mắc điều đó có nghĩa là gì và nó được tích hợp vào bộ chuyển đổi như thế nào, thì tất cả đều liên quan đến kỹ thuật suy luận này và cách nó chọn mã thông báo tiếp theo.
- Được rồi.
- Vâng, tôi hy vọng bạn thích bài viết này.
- Cái nhìn nhỏ này dưới mui xe.
- Bây giờ đã đến lúc chúng ta quay lại Colab và tiếp tục dự án tuần thứ ba và ngày thứ năm của mình.
- Và chào mừng mọi người đến với dự án để kết thúc tuần thứ ba vào ngày thứ năm, tạo biên bản từ tệp âm thanh.
- Và trong trường hợp bạn cảm thấy điều này không đủ thú vị với mình, hãy nhớ rằng đây là phương pháp đa phương thức.
### Muc 20

- Chúng ta sẽ sử dụng các mô hình nguồn mở và nguồn đóng.
- Chúng ta sẽ sử dụng các đường ống và các mô hình phân tích dữ liệu.
- Chúng ta sẽ làm mỗi thứ một chút.
- Đây là một bài tập tuyệt vời.
- Bạn chắc chắn nên làm điều này.
- Và chỉ có trong Colab để bạn có thể thử nghiệm tất cả và thêm một chút tính năng mới.
- Tôi muốn cung cấp cho bạn một chức năng hữu ích khác, đó là kết nối colab của bạn với Google Drive.
- Nếu bạn sử dụng tùy chọn đó, bạn không cần phải làm vậy.
### Muc 21

- Nhưng tôi thấy nó rất hữu ích, thực sự rất tiện lợi để lưu trữ các tập tin và có thể dễ dàng sử dụng chúng trong Colab.
- Vì vậy, chúng ta sẽ viết chương trình này để có thể thu thập biên bản, ghi biên bản và các việc cần làm và hành động từ bản ghi âm cuộc họp.
- Tôi đã tìm thấy trong một tập dữ liệu, biên bản của Hội đồng thành phố Denver là.
- Có vẻ như có một số biên bản cuộc họp rất hấp dẫn, nếu bạn muốn nghe.
- Nhưng việc mang chúng đi chép lại cũng chẳng có ích gì với tôi.
- Và tôi đã tải chúng lên Google Drive và tôi có nó để bạn có thể tải xuống.
- Và tôi đã chụp nhanh một phần nhỏ của nó để chúng ta không phải tốn tiền thuê API thực hiện việc phiên âm.
- Ừm, mặc dù sẽ có phiên bản mã nguồn mở hoàn toàn nếu bạn muốn.
## Phan 8

### Muc 22

- Ừm, đây là nơi bạn có thể tải xuống tệp từ nơi tôi đã chia sẻ.
- Vì vậy, bạn có thể vào đây để tải xuống tệp này nếu có sẵn cho bạn.
- À, và tôi cũng có dữ liệu gốc mà tôi đã liên kết đến bộ dữ liệu khuôn mặt ôm mà bạn có thể xem đây là ngân hàng dữ liệu của Hội đồng thành phố Denver.
- Và bạn có thể tải xuống âm thanh cụ thể bằng cách nhấp vào liên kết thứ hai ngay tại đó để tải xuống nếu bạn muốn tự mình tải âm thanh, sau đó lấy một đoạn trích mà bạn muốn phân tích.
- Nhưng tôi đã làm điều đó cho bạn rồi nếu bạn muốn.
- Đây là những gì chúng ta sẽ sử dụng cho dự án của mình.
- Được rồi.
- Vì vậy, bạn đã tải tệp này xuống ổ đĩa cục bộ của mình và chúng tôi sẽ sớm tìm ra cách tải tệp này lên Google Colab này vì rõ ràng là tệp này không có nhiều tác dụng trên ổ đĩa cục bộ của bạn.
### Muc 23

- Chúng tôi cần nó trên hộp Colab.
- Vì vậy, hãy nhớ rằng nếu có vấn đề gì xảy ra với lỗi Cuda, bạn sẽ biết phải làm gì.
- Bước đầu tiên là cài đặt một số Pip giống như ngày hôm qua.
- Bit và byte và tăng tốc.
- Đó sẽ là chuyện thường tình với chúng ta.
- Sau đó, chúng ta phải chạy một loạt lệnh nhập.
- Và tất nhiên trước tiên bạn cần đảm bảo rằng mình đã kết nối với T4.
- Cho tôi xem tài nguyên của tôi.
### Muc 24

- Tôi đã chạy thử rồi nên bạn có thể thấy tôi đã rèn luyện trí nhớ của mình.
- Chúng ta hãy xem liệu tôi có thể sống sót mà không phải khởi động lại không.
- Ừ, vậy là đã cài đặt và nhập xong.
- Ừ, chúng ta sẽ sử dụng con llama này 3.
- 2, vì vậy bạn cần phải có quyền đó vì chúng ta đã nhận được nó ngày hôm qua.
- Nếu bạn không muốn sử dụng llama 3.
- 1 hoặc sử dụng Gwen hoặc Jama hoặc bất kỳ cái gì bạn muốn sử dụng.
- Được rồi, tôi muốn cung cấp cho bạn khả năng mới này để đính kèm Colab vào Google Drive của bạn.
## Phan 9

### Muc 25

- Và đây là tùy chọn.
- Khi bạn chạy lệnh này, nó sẽ nhắc bạn xem tôi có thực hiện lệnh này không.
- Ồ không.
- Vậy là tôi đã gắn Google Drive của mình rồi.
- Khi bạn thực hiện thao tác này, khi bạn chạy lệnh này, một cửa sổ bật lên sẽ hiện ra và hỏi bạn có đồng ý cấp quyền cho Colab truy cập Google Drive của bạn hay không.
- Và bạn sẽ phải trải qua và nói đồng ý với mọi thứ.
- Bạn phải nhấp vào "có" hai lần.
- Và trên một trong những màn hình hiện ra, bạn phải cuộn xuống một chút để chọn đồng ý, để cho phép Colab truy cập Google Drive của bạn và cấp cho nó khả năng xem dữ liệu.
### Muc 26

- Bây giờ tôi đã có một cái.
- Có một sinh viên rất lo ngại về những tác động của việc làm đó và anh ấy nói với tôi rằng anh ấy lo ngại về việc trao cho Google khả năng, Google, ừm, khả năng đọc Google Drive của anh ấy.
- Ừ, và tôi đã chỉ ra cho anh ấy một lỗi logic nhỏ trong đó, rằng Google thực sự có khả năng đọc Google Drive của anh ấy, vì ngay từ đầu đó là ổ đĩa của Google.
- Quyền mà bạn cấp cho sổ ghi chép này, colab này là để có quyền truy cập vào Google Drive của bạn.
- Vậy điều bạn đang xác nhận là bạn tin rằng không có mã độc nào ở đây.
- Mã độc hại sẽ xâm nhập vào Google Drive của bạn và thực hiện hành vi xấu.
- Nói cách khác, bạn cần biết rằng bạn tin tưởng tôi và bạn có thể đọc đoạn mã này và không có gì ở đây đáng ngờ.
- Và như bạn sẽ thấy, đó là mã rất đơn giản.
### Muc 27

- Vì vậy, bạn nên tự tin vào điều đó.
- Mặc dù tôi rõ ràng là một người cực kỳ gian xảo, ừm, bạn có thể nhận ra rằng đoạn mã này không có cơ hội để làm điều gì xấu xa.
- Vì thế.
- Vậy thì không phải vậy.
- Tôi nghĩ rằng đó có lẽ là một rủi ro có thể kiểm soát được.
- Tuy nhiên, nếu bạn có bất kỳ lo ngại nào về việc lập bản đồ Google Drive, bạn chắc chắn không cần phải làm điều đó.
- Tôi làm vậy vì tôi thấy nó thực sự tiện lợi.
- Sau khi chạy xong và cấp quyền cho nó, bạn sẽ thấy Google Drive của mình sẽ được ánh xạ.
## Phan 10

### Muc 28

- Và để cho bạn thấy ý tôi là gì, tôi sẽ nhấn nút này ngay đây.
- Hãy xem thử.
- Nó nằm ở thanh bên.
- Nó nằm bên dưới mật khẩu.
- Nút phím là nút tập tin này.
- Bạn làm như vậy và trình duyệt tệp này sẽ mở ra.
- Và đây là hình ảnh cho thấy hệ thống tệp trên hộp Colab này trên đám mây.
- Nó có cấu trúc thư mục riêng.
### Muc 29

- Và mỗi lần bạn tạo một phiên bản mới, mỗi lần bạn có thời gian chạy mới, bạn kết nối với T4.
- Nó có thư mục dữ liệu mẫu này giống như dữ liệu đi kèm.
- Và bạn có thể đưa thêm tập tin vào đây.
- Và bất cứ khi nào bạn ngắt kết nối và xóa thời gian chạy hoặc thời gian chạy bị đóng, mọi thứ sẽ bị xóa sạch và chỉ còn lại dữ liệu mẫu đơn giản.
- Và bạn sẽ thấy ổ đĩa này ở đây, đó là do tôi đã gắn ổ đĩa của mình.
- Và ổ đĩa Google của tôi nằm ngay ở đây.
- Và bạn cũng sẽ như vậy nếu bạn chạy chương trình này.
- Nhưng nếu bạn không muốn thì cũng không sao cả.
### Muc 30

- Bạn cũng có thể chỉ cần nhấn nút tải lên này.
- Bạn nhấn nút đó và bạn có thể tải lên một tệp tin trên ổ đĩa cục bộ của mình như tệp tin mà bạn vừa tải xuống.
- Từ tôi.
- Tệp tin này bạn đã tải xuống, sau đó bạn chỉ cần tải nó lên và đặt ngay tại đó hoặc đặt nó vào một thư mục nào đó.
- Đơn giản chỉ có vậy thôi.
- Và sau đó có thể truy cập được từ máy này.
- Đây là hệ thống tập tin cục bộ mà máy này đang chạy.
- Chỉ có vậy thôi.
## Phan 11

### Muc 31

- Sử dụng mã này ở đây cho phép bạn lập bản đồ Google Drive của mình.
- Ờ, làm cho cuộc sống dễ dàng hơn.
- Được rồi, vậy là tôi kết thúc bài viết này.
- Chúng ta hãy cùng xem nhé.
- Vì vậy, bạn có thể sử dụng chính xác cùng một tệp như tôi hoặc bạn có thể sử dụng tệp của riêng bạn, nhưng khi bạn đã làm như vậy, thì đây là một liên kết khác đến cùng một thứ.
- Tải xuống, lưu vào Google Drive, còn tôi lưu vào thư mục có tên LMS trong ổ đĩa LMS của tôi.
- Và sau đó là trích xuất dấu gạch dưới Denver, đây chính là tên của tệp.
- Vì vậy, nếu bạn đặt nó ở đó thì tên tệp này sẽ là tên tệp chính xác cho nó trên hộp cục bộ.
### Muc 32

- Nếu bạn đặt nó ở nơi khác thì chỉ cần đặt tên cho nó, đặt tên cho nó ở bất cứ nơi nào ngay tại đây.
- Nếu bạn tải lên thủ công, chỉ cần đặt nội dung gạch chéo gạch chéo trích xuất Denver.
- Đơn giản vậy thôi.
- Được rồi.
- Tôi nghĩ là tôi chưa chạy cell này.
- Đấy, thế là xong.
- Ừ, được thôi.
- Tiếp theo, chúng ta sẽ đăng nhập vào Hugging Face.
### Muc 33

- Và chúng ta sẽ mở tập tin âm thanh đó.
- Và nếu điều đó gây ra vấn đề gì cho bạn, thì có nghĩa là bạn chưa đặt đúng tên tệp hoặc chưa tải lên đúng vị trí.
- Tôi chắc chắn rằng, ừm, bạn sẽ có thể tìm ra cách giải quyết.
- Được rồi.
- Vì vậy, chúng ta có hai bước để thực hiện dự án này.
- Bước đầu tiên là chuyển âm thanh thành văn bản.
- Bước thứ hai là phân tích văn bản đó và lập biên bản cuộc họp.
- Và bước đầu tiên, tôi sẽ cung cấp cho bạn một giải pháp thay thế nguồn mở và một giải pháp nguồn đóng.
## Phan 12

### Muc 34

- Tôi sẽ cho bạn xem cả hai và bạn có thể lựa chọn.
- Chúng ta hãy bắt đầu với phần mềm nguồn mở.
- Mã nguồn mở sẽ sử dụng đường ống ôm sát khuôn mặt.
- Vì vậy, chúng ta sẽ sử dụng đường ống tuyệt vời này.
- Tôi không nghĩ là tôi cần phải nhập nó.
- Đây rồi.
- Chúng ta chỉ cần nhập đường ống thôi.
- Hãy nhớ rằng điều tuyệt vời nhất về pipeline là bạn chỉ cần nói nhiệm vụ sẽ đưa ra mô hình.
### Muc 35

- Chúng tôi sẽ cung cấp một mô hình có tên là whisper, một mô hình đơn giản mà OpenAI có phiên bản tiếng Anh của nó.
- Bạn có thể bỏ mục đó đi nếu muốn sử dụng nhiều ngôn ngữ.
- Ừm, và tôi nghĩ chúng ta sẽ...
- ừm, tôi nghĩ vậy.
- Vậy thì tốt hơn.
- Ừm, và ừm, sau đó chúng ta sẽ chỉ cần chạy chương trình này và in bản ghi.
- Chúng ta hãy bắt đầu thôi.
- Chúng ta hãy xem liệu cách này có hiệu quả không nhé.
### Muc 36

- Nhân tiện, tính năng phát hiện đèn pin cũng hoạt động tốt, nhưng tôi nghĩ đó là tính năng mà chúng ta đã thấy trước đó.
- Tôi nghĩ khi nó nói rằng nó đã lỗi thời.
- Bây giờ bạn phải nói dtype.
- Ừ, vậy thì chúng ta cứ để nó chạy.
- Bây giờ nó sẽ ừm, sẽ là nó, nó sẽ sử dụng Cuda.
- Vì vậy, nó sẽ nằm trên GPU của tôi, nó sẽ chạy đoạn trích cuộc họp của Hội đồng thành phố Denver thông qua mô hình này.
- Và nó sẽ chuyển từ âm thanh thành văn bản.
- Bây giờ khi bạn chạy lệnh này, nó sẽ thực sự tải xuống các mô hình.
## Phan 13

### Muc 37

- Có thể mất nhiều thời gian hơn một chút, nhưng tôi đã chạy cái này rồi, nhìn này, Ram hệ thống của tôi thực sự rất đầy.
- Ừ, nhưng, ừ, bây giờ chúng ta sẽ chuyển âm thanh đó thành văn bản, và tôi sẽ gặp lại bạn ngay khi hoàn tất.
- Được rồi, bản ghi chép vừa hoàn tất.
- Chỉ mất có hai phút và đây là thành quả.
- Ừm, sự hợp nhất của hai con sông, kiểu mà chúng ta đã thấy gần đây và chính trị trên thế giới.
- Có một vấn đề rất lớn.
- Rất nhiều thông tin thu thập được từ việc ghi chép cuộc họp của Hội đồng thành phố Denver.
- Và tôi sẽ lưu trữ điều đó trong một bản ghi mã nguồn mở có thể thay đổi, vì bây giờ chúng ta sẽ sử dụng cách khác để thực hiện.
### Muc 38

- Chúng tôi sẽ sử dụng AI mở.
- Nó có bốn bản ghi mini GPT.
- Bây giờ tôi chỉ chạy cái này và nó tốn của tôi 0 đô la.
- 03, nhưng tôi không chắc liệu điều đó chỉ xảy ra một lần hay là do tôi đã chạy nó hai lần.
- Vậy thì hoặc là tốn một xu rưỡi hoặc là 0 đô la.
- 03 nếu bạn làm vậy.
- Vì vậy, bạn phải cảm thấy thoải mái với điều đó, với mức chi tiêu đó.
- Hoặc bạn luôn có thể kiểm tra giá mới nhất của sản phẩm này, nhưng chắc chắn không có giá cao hơn.
### Muc 39

- Không nên theo thứ tự đó nữa.
- Nhưng như thường lệ, đừng bao giờ đặt ra mức chi tiêu tối thiểu cho chìa khóa nếu bạn lo lắng về vấn đề này.
- Ừ, được thôi.
- Bây giờ, điều đầu tiên bạn cần làm là nếu bạn muốn sử dụng mã nguồn đóng và đây là tùy chọn, bạn có thể chỉ sử dụng mã nguồn mở nếu bạn muốn sử dụng mô hình frontier, sau đó bạn cần đến các khóa ở đây và đảm bảo rằng khóa API OpenAI của bạn ở đây.
- Vì vậy, nó phải trông giống hệt như thế.
- Không phải khóa API mở mà là khóa API OpenAI.
- Bạn nhớ rằng nó phải hoàn toàn chính xác.
- Bạn phải nhập khóa vào giá trị, bật nó lên và sau đó bạn sẽ có thể truy cập vào nó.
## Phan 14

### Muc 40

- Và chúng ta hãy làm như thế này.
- Chúng ta có ừm, mô hình âm thanh là GPT bốn Mini Transcribe.
- Đây là nơi tôi lấy chiếc chìa khóa mà chúng ta vừa để ở đằng kia.
- Đây là nơi tôi tạo một OpenAI mới bằng cách truyền khóa API đó vào.
- Sau đó tôi gọi bản ghi là bản ghi OpenAI tạo ra, tôi truyền vào mô hình âm thanh, đặt tên cho tệp và định dạng phản hồi, sau đó chúng tôi cũng sẽ in nó.
- Chúng ta hãy cùng xem nó đưa ra kết quả gì nhé.
- Cứ để nó chạy và tôi sẽ quay lại ngay với bạn.
- Và OpenAI đã hoàn thành.
### Muc 41

- Và chỉ mất có 27 giây.
- Tốc độ này nhanh hơn hai phút và bạn có thể thấy ngay khi nhìn vào bản in ở đó rằng nó có vẻ khá giống nhau.
- Nhưng hãy nhìn xem một trong số chúng, nơi mã nguồn mở được đặt dấu phẩy.
- Điều này thực sự chấm dứt việc chỉ đưa ra những cách giải thích khác nhau, nhưng nhìn chung thì chúng khá giống nhau.
- Chúng ta có thể in cả hai cái một cách tuần tự.
- Tôi nhận thấy một trong số chúng dài hơn một chút, vì vậy có thể có một số lượng token tối đa mà tôi muốn đặt ở đâu đó nếu tôi muốn có được toàn bộ, nhưng ngoài ra chúng trông khá giống nhau và bạn có thể chọn chạy một trong hai cái đó.
- Nhưng tôi muốn cho bạn thấy cách sử dụng đường ống.
- Có một số thực hành tốt ở đó.
### Muc 42

- Và quay lại sử dụng OpenAI API.
- Vì vậy, chúng ta cũng có một số mô hình biên giới ở đây.
- Được rồi.
- Đó là bước một.
- Chúng tôi đã lấy một số âm thanh và chuyển đổi thành văn bản lời nói thành văn bản.
- Vậy là trước đây chúng ta đã chuyển văn bản thành giọng nói, ngày nay là chuyển giọng nói thành văn bản.
- Và tất nhiên chúng tôi cũng đã hoàn thành thế hệ hình ảnh thứ hai.
- Vì vậy, chúng tôi đang đề cập đến rất nhiều phương thức.
## Phan 15

### Muc 43

- Dù sao thì bước tiếp theo sẽ là phân tích bản ghi chép này và lập một báo cáo, báo cáo tóm tắt biên bản và các hành động.
- Chúng ta hãy bắt đầu thôi.
- Và như thường lệ, chúng ta tập trung vào lời nhắc của mình.
- Tôi có một tin nhắn hệ thống.
- Bạn tạo biên bản cuộc họp từ bản ghi chép với các điểm thảo luận tóm tắt, nội dung chính và mục hành động theo định dạng đánh dấu mà không cần khối mã và lời nhắc dành cho người dùng.
- Dưới đây là biên bản cuộc họp của Hội đồng Denver.
- Vui lòng viết biên bản bằng ngôn ngữ markdown mà không có khối mã, bao gồm các điểm thảo luận tóm tắt, nội dung cần ghi nhớ, mục hành động với chủ sở hữu.
- Và sau đó là phần phiên âm.
### Muc 44

- Có lẽ chúng ta nên đưa điều này vào.
- Điều này có thể làm cho bản chép lại rõ ràng hơn.
- Ừm, thêm không gian.
- Ừ, có thể nói là trình bày khá đẹp.
- Có một chút lặp lại giữa hai điều này, nhưng sự lặp lại không bao giờ là vấn đề.
- Trên thực tế, việc thử nói lại một điều gì đó một vài lần luôn là một ý tưởng hay vì bạn đang khiến mô hình có nhiều khả năng tuân thủ nhiệm vụ của bạn hơn, phù hợp với những gì bạn muốn nó thực hiện.
- Vậy chúng ta hãy chạy thử nhé.
- Và bây giờ chúng ta sẽ sử dụng bit và byte để lượng tử hóa thành bốn bit.
### Muc 45

- Bạn còn nhớ điều này không?
- Đây là kiểu dữ liệu Nf4 mà bạn có thể tra cứu.
- Tìm hiểu thêm về phân phối chuẩn để số bốn bit có 16 giá trị có thể được ánh xạ vào không gian dấu chấm động.
- Và bây giờ, tất nhiên là có các bước mã nguồn mở đơn giản.
- Chúng ta có được mã thông báo Lamaze.
- Chúng ta thiết lập token pad là token EOS.
- Làm sao bạn có thể quên điều này?
- Ha ha.
## Phan 16

### Muc 46

- Không phải ai cũng thiết lập mã thông báo Pad là mã thông báo sao?
- Ờ.
- Được thôi.
- Và sau đó chúng ta sử dụng công cụ phân tích mã thông báo.
- Chúng tôi sử dụng tiện ích áp dụng mẫu trò chuyện để có thể truyền những tin nhắn này và biến chúng thành một chuỗi mã thông báo có chứa mã thông báo đặc biệt.
- Và sau đó chúng ta có được các tenxơ trả về theo kiểu PyTorch cần thiết để có thể đưa vào GPU.
- Và nếu bạn thấy rằng thực hành là cách bạn sẽ làm, bạn sẽ quen với điều này.
- Bạn nên tự mình thực hiện việc này, chạy thử và xem kết quả.
### Muc 47

- Nhưng về cơ bản, đó chỉ là điều bạn làm theo thói quen.
- Đây là cách bạn thực hiện.
- Bạn áp dụng mẫu trò chuyện để biến tin nhắn thành một chuỗi.
- Bạn chuyển nó thành PyTorch, rồi đưa nó vào Cuda.
- Đây là công cụ streamer mà tôi đã giới thiệu ngày hôm qua, chúng ta sẽ tạo một streamer văn bản cho biết chúng ta đang sử dụng tokenizer nào.
- Và cuối cùng chúng ta sẽ lấy mô hình của anh chàng to lớn.
- Đây là mô hình tự động cho mô hình ngôn ngữ LLM nhân quả từ mô hình đã được đào tạo trước.
- Chúng tôi đặt cho nó cái tên mô hình Lama.
### Muc 48

- Chúng ta nói rằng chúng ta muốn nó trên GPU.
- Chúng ta sẽ lượng tử hóa.
- Và sau đó chúng ta chỉ cần tạo đầu ra và sử dụng trình phát trực tuyến này để bạn có thể phát trực tuyến kết quả.
- Và chúng ta chạy nó và bây giờ nó sẽ tải vào.
- Trước hết Lama, tôi đề xuất bạn sử dụng các mô hình khác nhau của phiên bản Lama có 3 tỷ tham số ngày hôm qua.
- Vậy nên, bạn biết đấy, nó có phần thô hơn một chút so với cái chúng ta đã làm ngày hôm qua.
- Và GPU của tôi rất, rất chặt chẽ.
- Tôi không chắc liệu nó có chạy được không vì đây là lần thứ hai tôi chạy nó.
## Phan 17

### Muc 49

- Hy vọng là nó sẽ chú ý đến điều đó.
- Bạn nên kiểm tra trên máy tính để đảm bảo bộ nhớ GPU của bạn còn tốt.
- Đang tải cái này vào.
- Cho đến giờ chúng tôi vẫn ổn.
- Và tất nhiên, nếu bạn đã chạy nó rồi thì lần thứ hai sẽ nhanh hơn.
- Chúng ta bắt đầu thôi.
- Nó đang chạy.
- Và đây chính là thông tin đầu vào ở đây.
### Muc 50

- Và ở đây chúng ta thấy nó đang truyền ngược trở lại.
- Kết quả là, lệnh gọi LM trả về bản ghi có tiêu đề.
- Tóm tắt 11 thành viên, địa điểm, các điểm thảo luận.
- Nghị viên Lopez trình bày bản tuyên bố số 1127.
- Nhằm tôn vinh Ngày của người bản địa lần thứ hai.
- Những thông tin bổ sung, hành động và thông báo bổ sung của Nghị viên Lowman.
- Nhiều điều về Nghị viên Lowman.
- Rõ ràng Lopez có nhiều điều muốn nói trong cuộc họp này.
### Muc 51

- Vậy là xong.
- Đây là kết quả báo cáo của LM, tóm tắt và đưa ra các điểm hành động và bài học kinh nghiệm từ cuộc họp Hội đồng thành phố Denver.
- Nó đã thành công, nhưng rõ ràng là chúng ta không biết chắc chắn nó có thành công hay không cho đến khi chúng ta thấy nó được giảm giá và in ra đẹp mắt.
- Và đây là nó.
- Ờ, đây là bản tóm tắt được định dạng đẹp mắt.
- Tóm tắt biên bản cuộc họp của Hội đồng thành phố Denver.
- Có những người tham dự, các điểm thảo luận, những điểm chính, các mục hành động và các ghi chú bổ sung.
- Vậy là bạn đã có nó được tạo ra bởi llama 3.
## Phan 18

### Muc 52

- 2.
- Nếu bạn sử dụng một mô hình lớn hơn, tất nhiên bạn có thể nhận được nhiều loại kết quả khác nhau.
- Nhưng tất cả đều miễn phí, ngoại trừ một trong những lựa chọn thay thế là hoàn toàn miễn phí.
- Ngoài ra còn có lựa chọn khác là không tốn đồng nào.
- 03 thực hiện việc phiên âm, nhưng ngoài ra, đây là một ví dụ về việc sử dụng các mô hình nguồn mở miễn phí để xây dựng một số chức năng thương mại.
- Trên thực tế, đây là một khả năng được tích hợp vào nhiều sản phẩm thương mại khác nhau, như Zoom và nhiều sản phẩm khác nữa.
- Và đây là điều mà bạn biết cách tự xây dựng ngay bây giờ bằng mã nguồn mở, bạn có thể làm được và bạn nên làm.
- Và tôi đã đưa vào đây một đóng góp của sinh viên để xây dựng nội dung.
### Muc 53

- Đưa nó vào Gradio, thực sự rất tuyệt.
- Và bạn cũng có thể làm được điều đó.
- Có rất nhiều thứ bạn có thể làm với nó để biến nó thành một công cụ hoàn chỉnh.
- Và bạn hoàn toàn nên làm như vậy.
- Điều này cung cấp cho bạn một số nền tảng để thử nghiệm và cách tốt nhất để xây dựng chuyên môn bạn cần là thông qua thực hành và rèn luyện.
- Sử dụng các mô hình nguồn mở, thử nghiệm chúng và xây dựng sản phẩm.
- Nếu bạn có thể nghĩ ra những ý tưởng tương tự về cách áp dụng trực tiếp vào doanh nghiệp của mình, thì bạn nên làm như vậy và xem xét kỹ lưỡng.
- Hãy đảm bảo rằng bạn tự mình thực hiện việc này.
### Muc 54

- Và nếu bạn nghĩ ra điều gì đó thú vị, một cách diễn đạt khác biệt mà bạn muốn tôi thêm vào đây, vui lòng gửi cho tôi và tôi sẽ thêm vào các liên kết đến dự án của bạn để, ừm, vì thực hiện PR cho, ừm, colabs không phải là điều dễ dàng.
- Đó là cách tôi sẽ làm.
- Tôi sẽ đưa ví dụ của bạn vào đây để các sinh viên khác có thể xem bài làm của bạn.
- Dù sao đi nữa, tôi hy vọng bạn thích bài học này và tôi sẽ gặp lại bạn để trình bày slide và giao bài tập cho bạn và kết thúc bài học.
- Được rồi.
- Và điều này đưa chúng ta đến kết thúc của tuần thứ ba, vào cuối tuần thứ ba, tức là ngày thứ năm.
- Và điều đó chỉ có thể có một ý nghĩa.
- Nghĩa là đã đến giờ giao bài tập.
## Phan 19

### Muc 55

- Đã đến lúc kết thúc tuần làm bài tập giúp bạn kiểm tra các mô hình nguồn mở.
- Và đây là một trong những trường hợp sử dụng cốt lõi của LMS của JNI có thể áp dụng cho hầu hết mọi lĩnh vực kinh doanh, đó là tạo dữ liệu tổng hợp bằng LLM để tạo các tập dữ liệu mà bạn có thể sử dụng trong bất kỳ dự án nào và tự xây dựng cho mình một trình tạo dữ liệu tổng hợp, thứ mà bạn có thể đưa vào thứ gì đó như, ừm, tôi muốn có ví dụ, ừm, hồ sơ nhân viên.
- Tôi muốn có hướng dẫn định nghĩa sản phẩm mẫu, bất kể đó là gì, có thể mô tả loại dữ liệu bạn cần, cách bạn muốn cấu trúc dữ liệu theo mục đích và xây dựng thứ gì đó có thể tạo ra nhiều tài liệu như vậy.
- Ồ, tôi đảm bảo rằng đó là điều cực kỳ hữu ích với bạn.
- Đó chính là dự án mà tôi sẽ đề xuất.
- Viết một số mô hình có thể tạo ra các tập dữ liệu, sử dụng nhiều mô hình khác nhau, sử dụng chúng như cách bạn khám phá khả năng của các mô hình và nó cũng sẽ cung cấp cho bạn một tập dữ liệu đẹp và đa dạng.
- Vì vậy, nó mang lại cho bạn nhiều đầu ra và trải nghiệm đa dạng, đó chính là mục đích của nó.
- Ừ, hãy thử lượng tử hóa, thử không lượng tử hóa, thử nhiều hình dạng và kích thước khác nhau.
### Muc 56

- Và tất nhiên, tại sao không tạo một giao diện người dùng gradient cho sản phẩm của bạn để bạn có thể xem và tạo ra nó, thậm chí chia sẻ nó với những người khác trong công ty và có thể đăng về nó trên LinkedIn để tôi có thể tham gia và tự mình xem nó, rồi thử tạo dữ liệu tổng hợp.
- Nhiều sinh viên đã làm như vậy và rất tuyệt.
- Thật ấn tượng.
- Tôi đã sử dụng một trong số những công cụ đó để tạo ra một số dữ liệu và tất nhiên là tôi đã tự xây dựng bộ tạo dữ liệu tổng hợp của riêng mình nhiều lần.
- Vì vậy, đây thực sự là một bài tập tuyệt vời hơn bất cứ điều gì khác.
- Bây giờ là lúc thực hành.
- Cách tốt nhất để ghi nhớ điều này là thực hiện nhiều lần.
- Sau đó, bạn sẽ không bao giờ phải suy nghĩ hai lần về việc mã thông báo Pad có bằng mã thông báo iOS hay không vì bạn chỉ cần nhập nó hoặc bất cứ thứ gì, và chúng áp dụng các mẫu trò chuyện và tất cả những thứ khác, nó trở thành bản năng sau khi bạn thực hiện khoảng 30 lần.
### Muc 57

- Vậy thì, hãy xây dựng trình tạo bộ dữ liệu tổng hợp của bạn và chia sẻ nó, rồi tận hưởng quá trình này.
- Và như tôi đã nói, đó là điều đặc biệt hữu ích vì bạn có thể sử dụng nó trong công việc hàng ngày của mình.
- Bạn có thể sử dụng nó với bất kỳ dự án nhà ở nào mà bạn đang xây dựng.
- Các mô hình.
- Tiện ích của nó rất rộng.
- Đây quả là một dự án tuyệt vời để thực hiện.
- Và với điều đó, tuần thứ ba đã hoàn tất và tuần này chắc chắn là mọi thứ đang tiến triển.
- Bây giờ bạn có thể lập trình bằng mô hình frontier.
## Phan 20

### Muc 58

- Bạn có thể xây dựng trợ lý AI, nhưng giờ đây bạn cũng có thể xây dựng giải pháp LLM kết hợp các mô hình biên giới và mã nguồn mở.
- Bạn có thể sử dụng các đường ống cũng như API mô hình trong thư viện Hucking Face Transformers.
- Và bạn đang bắt đầu có được trực giác và cảm nhận về cách mạng lưới nơ-ron hoạt động bên trong đối với các lớp của mạng lưới nơ-ron, đối với các nhúng đa chiều và lớp tự chú ý.
- Một lần nữa, bạn không cần phải biết quá chi tiết về vấn đề này, nhưng bạn cần có trực giác tốt và nền tảng để hiểu biết.
- Và tôi hy vọng rằng bạn thích suy luận, hình dung đó, và rằng bạn đã tự mình thử nghiệm một chút và có được góc nhìn đó, sự hiểu biết sâu sắc về những gì suy luận thực sự đòi hỏi.
- Được rồi.
- Được rồi.
- Vậy là tuần thứ ba đã kết thúc.
### Muc 59

- Tuần tới.
- Tuần tới, chúng ta sẽ bàn về câu hỏi có lẽ là quan trọng nhất được hỏi với LLMs: Đâu là câu hỏi đúng?
- Có rất nhiều.
- Cái nào là tốt nhất?
- Mọi người hỏi tôi, chương trình LLM nào là tốt nhất?
- Vâng, chúng ta sẽ cố gắng trả lời câu hỏi đó vào tuần tới.
- Chúng ta sẽ so sánh Llms.
- Chúng ta cũng sẽ sử dụng một nhiệm vụ cụ thể.
### Muc 60

- Chúng ta cũng sẽ thực hiện việc tạo mã với nhiều mô hình khác nhau.
- Và tôi cũng biết rằng tuần tới là tuần trước tuần Rag.
- Tôi biết mọi người rất thích Tuần lễ Rag.
- Nhưng tuần tới cũng sẽ tuyệt vời lắm đây.
- Tôi muốn đảm bảo rằng bạn sẽ không muốn bỏ qua vì chúng ta sẽ làm được rất nhiều điều tuyệt vời.
- Và hãy nghỉ ngơi thật thoải mái để lấy lại sức và sẵn sàng cho tuần thứ tư.
- Ngay đây thôi.

