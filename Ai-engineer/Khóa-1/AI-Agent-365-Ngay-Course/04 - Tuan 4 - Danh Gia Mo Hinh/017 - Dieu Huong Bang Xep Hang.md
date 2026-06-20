# Ngay 017 - Tuan 4, ngay 2

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-017.txt

## Tong quan

- Chu de mo dau: Đã đến tuần thứ hai và chúng ta sẽ bắt đầu ngay thôi.
- File goc: day-017.txt
- So y chinh: 534
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Đã đến tuần thứ hai và chúng ta sẽ bắt đầu ngay thôi.
- Bạn biết cách lập trình với các mô hình frontier.
- Bạn biết cách xây dựng giải pháp một cách chặt chẽ và biết cách so sánh các chuẩn mực khác nhau.
- Bạn biết về những phần tốt và phần xấu.
- Hôm nay bạn sẽ biết cách điều hướng các bảng xếp hạng khác nhau.
- Tôi thực sự thích bảng xếp hạng.
- Trên thực tế, khi được người bạn tuyệt vời John Crone phỏng vấn trên podcast Khoa học dữ liệu, anh ấy đã mô tả tôi là một "lợn rừng" vì tôi thường nói về bảng xếp hạng.
- Và đó chính là những gì chúng ta sẽ làm hôm nay.
### Muc 2

- À, tôi cũng sẽ cung cấp cho bạn những trường hợp sử dụng LM trong thực tế để giải quyết các vấn đề thương mại một cách nhanh chóng.
- Và sau đó chúng ta sẽ hướng dẫn cách chọn LM phù hợp cho dự án của bạn.
- Chúng ta hãy bắt đầu nhé.
- Vì vậy, tôi sẽ bắt đầu bằng cách hướng dẫn bạn qua năm bảng xếp hạng khác nhau.
- Tôi sẽ nói về tất cả những điều đó.
- Và sau đó chúng ta sẽ đi kiểm tra và xem xét một số trong số chúng.
- Những thay đổi này theo thời gian, nhưng cho đến hiện tại và trong một thời gian dài, đây là những phương pháp tiên phong khi nói đến việc hiểu hiệu suất khác nhau của các mô hình khác nhau hiện có, phương pháp đầu tiên trong số đó được gọi là phân tích nhân tạo.
- Đây là một công ty AI ở Bờ Tây điều hành bảng xếp hạng này và nó thực sự rất tốt.
### Muc 3

- Thật không thể tin được là nó tốt đến thế.
- Nó rất rõ ràng và có cách tuyệt vời để đánh giá cách bạn suy nghĩ về những điều khiến LMS tốt và xấu trên nhiều khía cạnh như trí thông minh, chi phí và tốc độ, và bạn sẽ bị choáng ngợp nếu bạn chưa từng thấy nó trước đây, nó thật tuyệt.
- Bạn nên đánh dấu trang này hoặc ghi nhớ nó.
- Bất kể phân tích nhân tạo nào ở đó, đó là một công ty AI có trụ sở tại New York có bảng xếp hạng đẹp, có nhiều tính năng tốt để so sánh các LMS khác nhau.
- Nhưng điều đặc biệt hữu ích là nó có một nơi mà bạn có thể xem chi phí API và cửa sổ ngữ cảnh cạnh nhau cho tất cả các nhà cung cấp chính, điều này cực kỳ hữu ích.
- Vì vậy, tôi luôn nhìn vào giấy da.
- Có lẽ tôi nên đề cập đến khoảng một tháng trước, CEO của vellum đã liên lạc với tôi trên LinkedIn và nói rằng, tôi nghe bạn nói về bảng xếp hạng trong khóa học của bạn, điều đó thật tuyệt.
- Ừ, cảm ơn bạn nhé.
## Phan 2

### Muc 4

- Và đúng là tôi có.
- Đây là bảng xếp hạng tốt.
- Và nhân tiện, anh ấy cũng nói rằng chúng tôi được biết đến nhiều hơn vì có một sản phẩm hoàn chỉnh, chạy AI và cho phép các kỹ sư đưa nó vào sản xuất và có nhiều tính năng hữu ích.
- Vì vậy, khi xem bảng xếp hạng, hãy xem sản phẩm chính của họ tại vellum và sau đó là Scale Comm.
- Rõ ràng, họ là một công ty khởi nghiệp AI rất nổi tiếng và hiện nay là công ty do meta sở hữu một phần, và họ có một bộ bảng xếp hạng gọi là bảng xếp hạng Seal, đây là bảng xếp hạng chuyên biệt, rất chuyên sâu mà chúng ta sẽ thích thú khi xem ngay lập tức.
- Tất nhiên, họ có bảng xếp hạng riêng của mình.
- Tất cả đều ôm sát khuôn mặt.
- Họ từng là người dẫn đầu bảng xếp hạng.
### Muc 5

- Bảng xếp hạng mở khuôn mặt ôm sát từng là nơi mọi người thường đến, nhưng họ đã ngừng cập nhật vì nhiều lý do, có thể là do mọi người chơi trò này quá nhiều.
- Vậy thì không còn nơi nào để đến nữa, nhưng họ có nhiều nơi khác.
- Và vì thế chúng ta sẽ nhanh chóng xem qua một số trong số chúng.
- Và cái cuối cùng tôi muốn nhắc đến có tên là Live Bench.
- Đây là bảng xếp hạng cụ thể tập trung vào câu hỏi về rò rỉ tập dữ liệu, nhiễm bẩn tập dữ liệu.
- Và họ có một phương pháp đặc biệt để đảm bảo rằng họ đang đo lường hiệu suất thô thực sự của các mô hình và họ không dễ gặp phải vấn đề nhiễm bẩn này.
- Vậy là đã có năm bảng xếp hạng tuyệt vời.
- Tôi nghĩ chúng ta nên đi xem chúng ngay bây giờ.
### Muc 6

- Nói chung, việc chọn mục yêu thích không bao giờ là một ý tưởng hay, nhưng trước đây điều đó chưa bao giờ ngăn cản tôi.
- Bảng xếp hạng yêu thích của tôi.
- Bảng xếp hạng yêu thích của tôi là Artificial Analysis II.
- Đây rồi.
- Đây là bảng xếp hạng.
- Lần đầu tiên tôi nghe về điều này, khi nó vừa mới được tạo ra, một sinh viên đã liên hệ với tôi và hỏi, thầy đã thấy bảng xếp hạng mới này chưa?
- Ừ, và ừ, đúng vậy, nó thực sự phi thường.
- Tôi cho rằng đây là loại phổ biến nhất hiện nay.
## Phan 3

### Muc 7

- Ừm, và, ừm, đây là một công ty phân tích LMS một cách độc lập và họ có một số biểu đồ xếp hạng các hệ thống này cũng như những nơi bạn có thể tìm hiểu sâu hơn về chúng.
- Và có một số biểu đồ ở trên cùng, trí thông minh, tốc độ và giá cả, ba biểu đồ lớn mà bạn muốn bắt đầu.
- Ừm, và sau đó mỗi cái đều có một bản phân tích chi tiết hơn.
- Vì vậy, chúng ta sẽ đi sâu vào những chỉ số chi tiết hơn, bắt đầu với Chỉ số trí tuệ nhân tạo.
- Nó kết hợp mười đánh giá khác nhau.
- Bạn còn nhớ chúng ta đã nói về MLU Pro, phiên bản khó hơn của ngôn ngữ đa nhiệm khổng lồ này không?
- Hiểu về kim cương là điều đặc biệt.
- Đây là phần Hỏi &amp; Đáp về Khoa học nhân văn của Google mà chúng ta đã nói đến trong bài kiểm tra trực tiếp về mã nguồn.
### Muc 8

- À, và tôi nghĩ chúng ta đã nói về Aim.
- Và những yếu tố khác là một nhóm các yếu tố khác kết hợp lại với nhau tạo nên tổng điểm này.
- Đó chính là sức mạnh của một LM cụ thể.
- Và đây là kết quả tính đến thời điểm hiện tại.
- Nhưng bạn sẽ có được kết quả cập nhật hơn.
- Sẽ có nhiều mô hình hơn kể từ đó.
- Và vì thế bạn nên đến đây và đừng nghe những gì tôi nói.
- Bạn nên nhìn vào những gì bạn đang thấy.
### Muc 9

- Nhưng đối với tôi hiện tại, mô hình đạt điểm cao nhất trong loại tập hợp các số liệu khác nhau này, có xu hướng thiên về mã hóa di truyền một chút.
- Vì vậy, không có gì ngạc nhiên khi phiên bản Codex của GPT năm, phiên bản được tối ưu hóa đặc biệt cho mã hóa di truyền, là phiên bản có điểm thông minh cao nhất, gần như ngang bằng với GPT năm ở mức cao.
- Điều đó có nghĩa là nó được yêu cầu lý luận bằng chế độ cao nhất được thiết lập.
- Và rồi đến ông.
- Grok bốn của Musk nằm ở vị trí cao nhất.
- Nó đã ở vị trí dẫn đầu trước khi GPT thứ năm xuất hiện.
- Và sau đó là Claude 4 mới.
- 5 bài thơ sonnet.
## Phan 4

### Muc 10

- Vâng, điều này mới mẻ với tôi.
- Ừm, điểm đó hơi cao một chút, ý tôi là, đây vẫn là điểm rất, rất cao, nhưng vẫn hơi thấp hơn những điểm khác một chút.
- Sau đó là chế độ Grok Four và chế độ nhanh rồi đến Gemini 2.
- 5 Pro, khi ra mắt đã ở vị trí hàng đầu.
- Bạn thấy đấy, chúng được thay thế dần theo thời gian.
- Và sau đó, đối với một tác phẩm, phiên bản đồ sộ của Claude ở cấp độ thấp hơn, và đáng chú ý hơn nữa, hoàn toàn đáng chú ý, ở vị trí tiếp theo là mô hình nguồn mở đầu tiên.
- Tất cả những thứ tôi đã đề cập đến cho đến nay đều là những mô hình mã nguồn đóng trả phí.
- Mô hình nguồn mở đầu tiên là GPT, opus one R20b, phiên bản lớn của GPT OSS mà tôi nghĩ chúng ta vừa thấy chiến thắng trong trò chơi Connect Four, nhưng chỉ là, ừm, và, ừm, nếu nó xuất hiện ở đây và tất nhiên là siêu nhanh và rất rẻ.
### Muc 11

- Và sau đó là Quinn Three từ Alibaba Cloud và tiếp theo là Deep Seek, một công ty mới nổi.
- Uh V3 điểm hai thử nghiệm là phiên bản mới nhất của nó.
- Vẫn là bản thử nghiệm trước khi phát hành Bản thử nghiệm trước khi phát hành.
- Với tôi, có lẽ nó cũng dành cho bạn.
- Hoặc có thể nó đã là một chiếc V4 dưới biển sâu.
- Ai biết được?
- Ừ, vậy thì đó là điều tiếp theo.
- Được thôi.
### Muc 12

- Và đó là những mô hình thông minh nhất có hiệu suất tốt nhất trong phạm vi các tiêu chuẩn khác nhau này.
- Và bạn có thể tiếp tục đào sâu và xem xét những điều này để có được cảm nhận thực sự tốt về những mô hình mạnh nhất trên hành tinh.
- Và rồi thứ tiếp theo trông có vẻ đáng sợ khi nhìn vào.
- Đây là dòng thời gian cho thấy hiệu suất của các mô hình so với những điểm số này, nhìn lại theo thời gian, nhìn từ quá khứ.
- Tôi nói như thể chuyện đã xảy ra cách đây hàng thập kỷ, vào tận tháng 11 năm 2022.
- Ừ, và điều này dựa trên cùng một chỉ số thông minh.
- Và bạn có thể thấy các mô hình đã phát triển như thế nào theo thời gian so với chỉ số này.
- Và, bạn biết đấy, giống như mọi người nói về hiệu suất mô hình đang bão hòa và đang chậm lại.
## Phan 5

### Muc 13

- Nhưng khi bạn nhìn vào sơ đồ như thế và tôi hỏi bạn xem có dấu hiệu nào cho thấy mọi thứ đang chậm lại không.
- Thật là đáng sợ.
- Điều rất thú vị cần lưu ý là nhiều thành quả ban đầu đạt được là nhờ vào kỹ thuật luyện tập đúng thời điểm.
- Nhiều thành quả gần đây hơn là nhờ vào các kỹ thuật thời gian suy luận mà chúng ta bắt đầu thấy lợi nhuận giảm dần theo thời gian đào tạo.
- Và đó là lý do tại sao mọi người thường thích nói về bản phát hành GPT 5 vì khi trò chuyện với nó, tôi không cảm thấy có sự thay đổi rõ rệt nào so với GPT 4.
- 1.
- Và thực sự sự khác biệt, lý do tại sao các mô hình này hoạt động tốt hơn rất nhiều là nhờ vào các kỹ thuật thời gian suy luận, lý luận, điều chỉnh, lời nhắc và các công cụ bổ sung.
- Đây chính là thứ thực sự tạo nên sự thay đổi gần đây và là lý do tại sao xu hướng này vẫn tiếp tục diễn ra theo quỹ đạo dốc như vậy.
### Muc 14

- Nếu chúng ta loại bỏ các kỹ thuật thời gian suy luận, tôi nghĩ bạn chắc chắn sẽ thấy sự cân bằng này.
- Tiếp tục khám phá phương pháp phân tích nhân tạo tuyệt vời, chúng ta sẽ đi sâu hơn vào đánh giá trí thông minh và bạn có thể thấy hiệu quả của nó so với từng số liệu riêng lẻ.
- Bạn có thể thấy băng ghế đầu cuối giống như một mã hóa di truyền cứng sử dụng một đầu cuối.
- Còn có nhiều thứ khác nữa ở đây.
- Chúng ta sẽ nói về kỳ thi cuối cùng của nhân loại sau.
- Bạn biết đấy, đó là điều tuyệt vời.
- Ừ, nhưng bạn có nhớ là tôi đã thách bạn nghĩ xem những người mẫu hàng đầu sẽ ghi điểm ở tiêu chí nào không.
- Thật sự?
### Muc 15

- Ban đầu nó chỉ ở mức khoảng 2%.
- 3%, tôi nghĩ là vào cuối năm ngoái.
- Và hiện tại mẫu xe GPT hàng đầu đạt 5 điểm cao nhất là 26.
- 5% trong kỳ thi cuối cùng của nhân loại.
- Nó đã có những bước tiến lớn chỉ trong vòng vài tháng, điều này thật đáng sợ.
- Vậy đó, chúng ta bắt đầu thôi.
- Với HL, bạn có thể thấy Mglu Pro được thiết kế cao hơn nhiều.
- Các mô hình thanh chiếm 90% trên ML nên họ đã đưa ra Lou Pro, nhưng các mô hình hiện đã đạt 88%.
## Phan 6

### Muc 16

- Trời ơi, đây chính là bằng chứng của Google về Hỏi &amp; Đáp.
- Bạn còn nhớ không?
- Bạn có nhớ những gì tôi đã nói là hiệu suất ở mức độ con người không?
- Tỷ lệ là 65%.
- 65% là trình độ tiến sĩ.
- Tôi nghĩ 34% là không có ai là chỉ là người phàm như tôi.
- Ừ, và chúng ta hãy cùng xem nó đạt điểm gì so với các mẫu máy hàng đầu.
- Nó vượt trội hơn 88%, vượt trội hơn đáng kể so với mức 65%.
### Muc 17

- Và bây giờ bạn đã biết những người đó.
- Ừ, những người hoài nghi sẽ nói với bạn rằng, được thôi, nhưng đó là gpca, cấp độ tiến sĩ, rất cụ thể về các câu hỏi vật lý, hóa học và sinh học.
- Nhưng chúng ta có thể hỏi nó những câu hỏi ngớ ngẩn về việc sắp xếp bàn cờ vua với một nước đi trước khi ván cờ kết thúc.
- Và nó không thể làm được điều đó.
- Vì vậy rõ ràng là có thiếu sót.
- Nói chung, trình độ này không phải là trình độ tiến sĩ, nhưng có những lĩnh vực đòi hỏi trình độ này trong lý luận khoa học.
- Live Code Bench là một trong những chỉ số mã hóa cụ thể mà chúng ta sẽ xem xét sau, khi đó, GPT năm lại là chỉ số cao nhất, kỳ lạ thay, lại tốt hơn một chút so với Codex.
- Ừm, và còn một số mã hóa khác nữa, trong đó grok bốn phát huy tác dụng tốt nhất khi làm theo hướng dẫn, GPT năm Codex phát huy tác dụng mạnh nhất.
### Muc 18

- Và sau đó là cuộc thi toán, AI, cuộc thi mục tiêu mà chúng ta đã nói đến.
- Ừm, GPT năm Codex lại đứng đầu.
- Ừm, và sau đó GPT năm cao sẽ xuất hiện ngay sau đó.
- Vì vậy, có các tập hợp mô hình và kết quả từ quá trình phân tích tình báo chi tiết.
- Ừm, và bây giờ chúng ta sẽ xem xét một số thông tin khác mà bạn nhận được trên phân tích nhân tạo tuyệt vời này.
- Và tôi xin lưu ý rằng đây là 23 mẫu, nhưng bạn có thể chọn những mẫu khác.
- Bạn có thể vào đây và chọn những mẫu khác nhau mà bạn muốn xem và so sánh chúng.
- Bạn không bị giới hạn bởi những mô hình này.
## Phan 7

### Muc 19

- Trang web này thực sự tuyệt vời.
- Ồ, vậy thì bạn có thể thử nghiệm rất nhiều thứ để xem các mô hình khác nhau hoạt động như thế nào.
- Ừ, đây là một điểm khá thú vị.
- Điều này có nghĩa là các mô hình khác nhau sẽ tạo ra khối lượng mã thông báo đầu ra khác nhau, đặc biệt là khi bạn đang nghĩ về các mô hình lý luận.
- Chỉ nói liệu nó có đưa ra câu trả lời đúng không thôi thì chưa đủ?
- Bạn.
- Bạn cũng muốn hiểu cần phải suy nghĩ nhiều đến mức nào để đạt được điều đó, vì điều đó sẽ ảnh hưởng đến thời gian và chi phí.
- Và có một số thứ ở đây.
### Muc 20

- Thật thú vị khi bạn có thể thấy các mã thông báo lý luận về màu sắc khác nhau có màu sáng hơn.
- Và câu trả lời nằm ở phía trên.
- Và nó mang lại cho bạn cảm giác thực sự rằng chương trình này có hiệu suất rất mạnh mẽ.
- Nhưng một phần là vì nó đòi hỏi rất nhiều suy nghĩ và suy luận.
- Và điều đó dẫn đến biểu đồ cực kỳ hữu ích này, nhưng lại tốn kém.
- Vì vậy, việc so sánh chi phí của các mô hình là khó khăn vì chỉ so sánh chi phí của mã thông báo đầu vào và đầu ra, tôi nghĩ bạn biết rằng chúng có mức giá khác nhau, nhưng điều đó là không đủ tốt vì cùng một mô hình khác nhau có thể lập luận tốt hơn như chúng ta vừa thấy.
- Và do đó, chi phí để thực hiện cùng một việc có thể cao hơn.
- Vì vậy, cách mà phân tích nhân tạo giải quyết vấn đề cụ thể đó là họ nói, được thôi, chúng ta sẽ lấy chỉ mục của mình, tổ hợp nhiều tác vụ và chúng ta sẽ coi đó là điều tiêu chuẩn cần thử.
### Muc 21

- Và chúng ta sẽ xem chi phí để tạo ra chỉ mục này là bao nhiêu, bao gồm tất cả các mã thông báo cần tạo ra để trả lời tất cả những câu hỏi này.
- Và điều đó đã mang lại cách thực sự hay, đơn giản và hiệu quả để so sánh chi phí thực tế của các mô hình này.
- Tốt hơn là chỉ xem giá của mã thông báo đầu vào và đầu ra.
- Và với suy nghĩ đó, bạn sẽ thấy rằng Claude 4.
- Xét về mặt chi phí thì 1 tác phẩm là quá tệ.
- Bởi vì nó thực hiện rất nhiều thao tác suy nghĩ này, ừm, và bạn có thể thấy đó là chi phí đầu vào, đầu ra và lý luận.
- Nó hiển thị ở đây và rõ ràng là chi phí lý luận là 1.754 đô la ở đó.
- Nó rất đắt.
## Phan 8

### Muc 22

- Phô mai Roquefort khá đắt.
- Gemini two five Pro suy nghĩ rất nhiều.
- Đó cũng là kinh nghiệm của tôi.
- Ừm, và thật đáng kinh ngạc là GPT năm lại ở khá xa trong danh sách này so với thực tế là nó đứng đầu bảng xếp hạng về trí thông minh đối với tôi.
- Ừm, và bài thơ bốn năm cũng rất hay ở đây xét theo góc nhìn đó.
- Ờ, và vân vân.
- Thẩm phán Mistral à, tìm kiếm sâu.
- Ừm, đây là, ừm, đây là, đây là một danh sách khá thú vị, nhưng biểu đồ tiếp theo, biểu đồ tiếp theo là nơi tất cả kết hợp lại với nhau.
### Muc 23

- Được rồi.
- Vậy đây chính là biểu đồ.
- Đây là tất cả mọi thứ.
- Bạn nên đưa vấn đề này lên ngay để xem tình hình hiện tại thế nào.
- Đây là biểu đồ thể hiện trí thông minh trên trục y, chiều cao trên trục x và chi phí trên trục x.
- Vậy thì những thứ ở góc phần tư này là những mô hình thông minh và đắt tiền.
- Đây là những sản phẩm không thông minh nhưng vẫn đắt tiền.
- Đây là những thứ rẻ nhưng không thông minh.
### Muc 24

- Và góc phần tư này, góc được đánh dấu màu xanh lá cây.
- Đây là những mẫu xe giá rẻ nhưng thông minh.
- Cái nào là cái nào thì tuyệt.
- Ừm, đây thực sự là điểm lý tưởng đối với hầu hết mọi người.
- Ừm, và và, bạn biết đấy, chắc chắn có một trường phái cho rằng nếu bạn xác định bất kỳ mô hình nào như thế này ngay tại đây, thì đó chính là, ừm, GPT oss, tức là khá tiến bộ ở đây.
- Sau đó, bạn có thể tưởng tượng mình đang vẽ một chiếc hộp theo cách này và cách này.
- Bất cứ thứ gì xuất hiện ở bên phải và bên dưới đều đại diện cho thứ gì đó đắt hơn và không thông minh bằng.
- Vì vậy, có một trường phái cho rằng bạn không bao giờ nên chọn một mô hình nằm ở góc dưới bên phải của bất kỳ mô hình nào khác trên biểu đồ này.
## Phan 9

### Muc 25

- Và trên thực tế, ngay cả GPT cũng bị loại trừ vì grok bốn ở chế độ nhanh chỉ hơi cao hơn một chút và lệch khá nhiều về bên trái.
- Nó rẻ hơn và thông minh hơn.
- Và bạn có thể tranh luận như thế, hãy nhìn vào điều đó.
- Bất kỳ mô hình nào ở trên dòng này, bạn nên luôn chọn grok four fast thay thế.
- Tất nhiên, có một vấn đề nhỏ với điều đó, đó là nó quá đơn giản vì Chỉ số phân tích trí tuệ nhân tạo không nhất thiết liên quan trực tiếp đến nhiệm vụ của bạn.
- Đây là sự kết hợp của tất cả các nhiệm vụ này.
- Và vì còn có những yếu tố khác nữa, như độ trễ và những lý do khác khiến bạn có thể nghiêng về một mô hình khác.
- Nhưng theo nguyên tắc chung, đây không phải là một nguyên tắc tồi khi nói rằng, này, đừng bao giờ chọn một mô hình nằm ở phía dưới và bên phải của bất kỳ thứ gì trên biểu đồ tuyệt vời này.
### Muc 26

- Ừm, vậy hãy chọn những thứ trong góc phần tư này, như Deep Sea 3 chẳng hạn.
- 2 và grok Full Fast và GPT OS.
- Đây sẽ là những mô hình vừa rẻ vừa thông minh.
- Và chúng ta hãy xem xét nhóm những thiết bị mạnh mẽ và đắt tiền ở trên.
- Vì vậy, bạn có thể thấy rằng để bắt đầu Claude 4.
- 1 opus rất đắt và không thông minh bằng Claude 4.
- 5 bài thơ sonnet.
- Vì vậy, ngoại trừ những tiêu chuẩn rất cụ thể, thật khó để tưởng tượng tại sao lại có người sử dụng Claude 4.
### Muc 27

- Ngày nay, 1 tác phẩm trong khi 4 hoặc 5 bài sonnet thì hay hơn và rẻ hơn.
- Và khi nhìn xung quanh đây, bạn có thể thấy GPT năm và grok bốn xếp hàng như thế nào, GPT năm có vẻ rẻ hơn và thông minh hơn, ít nhất là theo tiêu chuẩn tổng hợp này.
- Và vâng, bạn có thể thấy rằng khi mô hình nguồn mở xuất hiện ở đây thì thực sự, ừm, nó khá tốn kém vì nó quá lớn, nhưng nó cũng khá thông minh.
- Vậy hãy xem xét cụm này và thực sự tìm hiểu về sức mạnh so với chi phí của các mô hình khác nhau.
- Và với tôi, bạn sẽ thấy điều gì đó khác biệt.
- Và như vậy, bạn sẽ có thể rút ra những kết luận mới và đăng tải về chúng, chia sẻ với những học viên khác trên Udemy hoặc LinkedIn hoặc chia sẻ sơ đồ này.
- Đây thực sự là một sơ đồ hấp dẫn.
- Nhiều người nên biết về điều này hơn.
## Phan 10

### Muc 28

- Được rồi, chỉ cần thêm vài ví dụ nữa để cho bạn thấy về phần phân tích nhân tạo về tốc độ và độ trễ.
- Vì vậy, điều này cho bạn thấy các mô hình chạy nhanh như thế nào.
- Họ sẽ phun ra bao nhiêu mã thông báo đầu ra mỗi giây với OSS 120 ở vị trí hàng đầu?
- Và chúng tôi đã tận mắt chứng kiến điều đó khi chơi trò Connect Four và nó thực sự bùng cháy.
- Độ trễ mà tôi đã đề cập trước đó là một số liệu khác.
- Đây là thời gian cần thiết trước khi bạn nhận được mã thông báo đầu tiên, không bao gồm mã thông báo suy nghĩ.
- Chúng không được tính.
- Chỉ khi bạn nhận được mã thông báo trả lời đầu tiên thì mới được tính và bạn sẽ thấy Lama4 Maverick hoạt động khá tốt.
### Muc 29

- Kimmy K-2 là mẫu xe của công ty khởi nghiệp moonshot của Trung Quốc, GPT five, Quinn three từ Alibaba Cloud.
- Tất cả đều tốt về mặt tốc độ, thời gian phản hồi từ đầu đến cuối, tổng thời gian phản hồi.
- Con lạc đà bốn bướu cũng ở vị trí tốt ở đó.
- Và sau đó là biểu đồ nhỏ đẹp mắt này cho thấy trí thông minh so với tốc độ đầu ra và tổng giá so sánh giá đầu vào và đầu ra trên mỗi triệu mã thông báo, không còn gắn chặt với chỉ số phân tích của chúng nữa.
- Và một thang đo khác.
- Lần này là trí thông minh so với giá với giá trên một triệu token theo thang logarit.
- Một cách hữu ích nữa, nhưng tôi thích cách trước hơn.
- Ồ, và còn có một loạt các bảng cụ thể khác nữa.
### Muc 30

- Có một số thứ trên OS 120.
- Có rất nhiều thứ để xem ở đây.
- Bạn nên đắm mình vào Phân tích nhân tạo - tôi dành mười phút ở đây và bạn sẽ biết cách chọn một tập hợp con mô hình phù hợp với nhiệm vụ của mình.
- Đây chính là nơi để đi.
- Trang web này thật tuyệt vời.
- Và tiếp theo là bảng xếp hạng giấy da.
- Bạn sẽ tìm thấy liên kết trong tài liệu tham khảo giấy da.
- Một lần nữa, công ty mà CEO đã nhắn tin cho tôi trên LinkedIn, ừm, sau khi tôi đề cập đến nó.
## Phan 11

### Muc 31

- Có một số bảng so sánh tốt.
- Nó có, ừm, ừm, ừm, so sánh các mô hình với nhau theo từng mô hình mà bạn có thể chọn từ danh sách thả xuống và xem thứ hạng của chúng.
- Nhưng điều tôi muốn đề cập, điều mà tôi thấy hữu ích nhất, chính là ở đây, chi phí cửa sổ ngữ cảnh.
- Và bây giờ tốc độ không còn được như trước nữa.
- Ngoài ra hãy so sánh tốc độ trong bảng này.
- Nhưng tôi thực sự thích nó vì đây là nơi duy nhất để có được chi phí đầu vào và đầu ra cho mỗi mã thông báo cho một cửa sổ ngữ cảnh.
- Và như bạn đã biết từ tuần đầu tiên, có một khía cạnh khác ở đây là chi phí lưu trữ.
- Nếu bạn gửi cùng một mã thông báo đầu vào hai lần, thường thì giá trị sẽ ít hơn đáng kể.
### Muc 32

- Nhưng để có được điều đó, bạn phải vào trang web của người mẫu.
- Nhưng dù sao thì giấy da cũng rất hữu ích phải không?
- Bây giờ chúng ta sẽ xem xét bảng xếp hạng hải cẩu, một tập hợp các bảng xếp hạng do công ty AI Mail công bố.
- com.
- Và chúng được thiết kế như bảng xếp hạng để kiểm tra cụ thể các lĩnh vực chuyên môn khác nhau.
- Vì vậy, nếu bạn có một nhiệm vụ rất chuyên biệt, bạn có thể muốn xem liệu có bảng xếp hạng Seal nào áp dụng cho mình không.
- Một trong những bảng xếp hạng mà họ nổi tiếng nhất chính là bảng xếp hạng Humanity's Last Exam mà tôi đã hứa với bạn.
- Và nếu chúng ta đào sâu vào đó, chúng ta có thể thấy nhiều hơn về kỳ thi cuối cùng của nhân loại.
### Muc 33

- Giải thích rằng có 2500 câu hỏi.
- Nó cung cấp một số thông tin cơ bản về các chuẩn mực biên giới đều có lợi nhuận giảm dần.
- Và sau đó, khi hợp tác với trung tâm an toàn AI, họ đã đưa ra ý tưởng này.
- Họ đã nhận được câu hỏi do người dùng gửi đến và họ đã chọn ra bộ câu hỏi cuối cùng này.
- Và bạn sẽ thấy rằng khi họ bắt đầu, tức là vào tháng 11 năm ngoái, mẫu xe hàng đầu là GPT bốn và đạt điểm 2.
- 72.
- Tôi đã nói với bạn là tôi nghĩ nó nằm giữa 2 và 3.
- Ồ, đúng rồi.
## Phan 12

### Muc 34

- Và theo thời gian, hãy xem những con số này đã thay đổi như thế nào.
- Và bây giờ GPT năm ghi được 25 điểm.
- 3.
- Tôi nghĩ chúng ta đã thấy một con số hơi khác nhau trong bài phân tích nhân tạo II, đó là vì có một biến thể của bài kiểm tra này chỉ có văn bản, trong khi bài kiểm tra này là phiên bản đa phương thức.
- Và bạn có thể thấy điều này đã thay đổi như thế nào.
- Và, bạn biết đấy, đối với những người cảm thấy tiến độ đang chậm lại, thì đó không phải là điều chúng ta thấy về khả năng này.
- Ừ, và ừ, đúng rồi.
- Cách nếu bạn thắc mắc các câu hỏi được đánh giá như thế nào vì chúng rất khó.
### Muc 35

- Vâng, chúng ta hãy bắt đầu bằng cách xem những câu hỏi như thế nào nhé.
- Thông tin này có trên trang web của họ, trang web thi khoa học nhân văn.
- Sau đây là một ví dụ về câu hỏi.
- Ờ, nó được đưa ra hình ảnh đó.
- Câu hỏi ở đây là hình ảnh mô tả dòng chữ La Mã ban đầu được tìm thấy trên bia mộ.
- Cung cấp bản dịch cho chữ Palmyrene.
- Có bản phiên âm của văn bản.
- À, trời ơi, đó là sự kết hợp giữa việc có kiến thức chuyên môn sâu rộng về một chủ đề nào đó cực kỳ khó hiểu, nhưng cũng có thể giải quyết được vấn đề.
### Muc 36

- Bởi vì tôi cho rằng đây là thứ cần phải giải mã và giải quyết một số vấn đề để tìm ra cách bạn có thể đọc được nó.
- Ừ, vậy thì đây là một câu hỏi về sinh thái học.
- Tôi thậm chí sẽ không cố gắng đọc hết bài này vì tôi sẽ tự làm mình xấu hổ.
- Nhưng bạn có thể thấy điều đó ở đó và cảm nhận được mức độ khó khăn của chúng.
- Có một câu hỏi toán học.
- Có một câu hỏi về khoa học máy tính.
- Có môn hóa học và ngôn ngữ học.
- Với văn bản gốc tiếng Do Thái trong Kinh thánh được chuẩn hóa, nhiệm vụ của bạn là phân biệt giữa âm tiết đóng và âm tiết mở.
## Phan 13

### Muc 37

- Ờ, hóa học.
- Thông tin thú vị.
- Vật lý.
- Tôi sẽ xem xét điều đó sau.
- Cây gậy.
- Căng thẳng.
- Giá trị là bao nhiêu?
- Được thôi, vậy thì đây là một câu hỏi siêu khó, ở cấp độ vật lý, trông có vẻ như vậy.
### Muc 38

- Ừ, nó đến từ UC Berkeley.
- Có lẽ đây là câu hỏi rất khó.
- Ừ, đó là những mẫu.
- Thật vui khi được nhìn thấy chúng.
- Thật thú vị khi hiểu được những thử thách này khó khăn đến mức nào.
- Chúng chắc chắn có độ phức tạp cao hơn trình độ tiến sĩ.
- Cách đánh giá là mô hình đưa ra câu trả lời.
- Và điều đó được cung cấp cho ba người.
### Muc 39

- Một trong những mô hình lý luận lớn hơn từ AI mở.
- Và ba là câu trả lời được đưa ra từ mô hình và tài liệu tham khảo.
- Sự thật vàng.
- Ừ, hãy trả lời đúng sự thật.
- Câu trả lời vàng làm nên lời nói của tôi.
- Nó được đưa ra như vậy và phải so sánh chúng và xác nhận rằng chúng nhất quán.
- Và do đó, nó giống như một loại LM đóng vai trò là thẩm phán.
- Nhưng không chỉ có LM chấm điểm mà LM còn sử dụng câu trả lời tham khảo.
## Phan 14

### Muc 40

- Vậy thì đâu là kỹ thuật tuyệt vời?
- Vậy đó là kỳ thi cuối cùng của nhân loại.
- Thật là vui.
- Hãy nhìn vào nó.
- Và bất kể bạn đang nhìn thấy gì thì chắc chắn thế giới đã thay đổi từ đây.
- Và bạn sẽ thấy chúng tôi đang ở đâu.
- Và đúng vậy, nếu là vào những năm 80 hoặc 90, thì có lẽ, ừm, những kẻ thống trị đã tiếp quản rồi.
- Ừ, đó là kỳ thi cuối cùng của nhân loại.
### Muc 41

- Và để hướng dẫn bạn qua một số bảng xếp hạng khác trên bảng xếp hạng hải cẩu, có một bảng xếp hạng kiểm tra cụ thể khả năng sử dụng MCP để gọi công cụ của các mô hình.
- Có một số số liệu về kỹ thuật phần mềm.
- Có một điều liên quan đến khả năng lý luận bằng ngoại ngữ, hoặc giải các câu đố ngoại ngữ bằng lý luận, vì lý luận thường tập trung khá nhiều vào tiếng Anh.
- Ồ, có rất nhiều thách thức liên ngành.
- Có một đánh giá cụ thể về vấn đề an ninh và an toàn.
- Đó là điều mà Cellcom đã tập trung rất nhiều vào và cũng là điều tương tự về sự liên kết.
- Mặt nạ đang đánh giá sự trung thực của người mẫu khi bị ép phải nói dối.
- Và bạn còn nhớ điểm tôi đã nêu về mối lo ngại tiềm ẩn rằng các mô hình biết khi nào chúng được đánh giá.
### Muc 42

- Rõ ràng điều đó đi kèm với một số liệu như thế này.
- Nhưng cho đến bây giờ, sonnet vẫn hoạt động tốt ở bài sonnet thứ 4.
- 5 có vẻ như làm khá tốt việc này.
- Sự kiên định của họ với niềm tin khi bị ép phải nói dối.
- Siêu thú vị, ừm, phức tạp, lý luận nhiều bước, tầm nhìn, sự hiểu biết.
- Và sau đó là một chiếc ghế dành cho gia sư.
- Một cái gì đó rất cụ thể để giảng dạy kỹ năng.
- Và vì vậy, nếu bạn đang muốn xây dựng thứ gì đó phục vụ cho lĩnh vực giáo dục thì tutor bench có thể là bảng xếp hạng hữu ích dành cho bạn.
## Phan 15

### Muc 43

- Vậy là bảng xếp hạng hải cẩu đã kết thúc.
- Để tôi chuyển sang ôm nhé.
- Hãy đối mặt với điều này.
- Có một khoảng trống ôm chặt khuôn mặt.
- Có rất nhiều bảng xếp hạng hữu ích mà bạn có thể tham khảo để so sánh các mô hình nguồn mở dựa trên các đặc điểm khác nhau.
- Bảng xếp hạng trước đây được gọi là Bảng xếp hạng mở, nhưng hiện đã được lưu trữ trong vài tháng.
- Có vẻ như Huggingface đã quyết định rằng họ không muốn tham gia vào trò chơi xây dựng bảng xếp hạng này nữa, có thể là vì mọi người đã bắt đầu chơi trò này và có quá nhiều mô hình khác nhau được đưa lên đây khiến nó trở nên ồn ào.
- Vì vậy, tôi nghĩ họ đã rút lui khỏi không gian này.
### Muc 44

- Nhưng nếu bạn quan tâm thì có đấy.
- Bài viết này đã ra mắt được vài tháng, nhưng vẫn là nơi tuyệt vời để xem xét hiệu suất của các mô hình nguồn mở khác nhau.
- Nhưng vẫn còn rất nhiều bảng xếp hạng khác được cập nhật thường xuyên ở đây.
- Có một bảng xếp hạng mã lớn cung cấp cho bạn hiệu suất của các lập trình viên khác nhau so với các ngôn ngữ lập trình khác nhau như C++, JavaScript, Java.
- Và bạn có thể thấy nó có 2.
- 5 lập trình viên.
- Vì vậy, đây là một số mẫu mới nhất.
- Và bạn sẽ tìm thấy nhiều bảng xếp hạng khác ở đây.
### Muc 45

- Có một hiệu suất rất tốt để xem tốc độ và sức mạnh của các mô hình nguồn mở khác nhau trên các thông số kỹ thuật phần cứng khác nhau.
- Có một bảng xếp hạng y tế có các tiêu chí rất cụ thể từ ngành y tế.
- Ừm, Hỏi &amp; Đáp, giải phẫu, kiến thức lâm sàng và xếp hạng các mô hình khác nhau dựa trên các tiêu chuẩn cụ thể đó, bảng xếp hạng tác nhân, nghiên cứu chuyên sâu, ảo giác, bảng xếp hạng hình ảnh.
- Có rất nhiều điều để khám phá về khuôn mặt ôm.
- Luôn kiểm tra kỹ xem thông tin này được cập nhật gần đây nhất như thế nào và kiểm tra các nguồn để đảm bảo rằng đây là bảng xếp hạng đáng tin cậy, nhưng cũng có rất nhiều thông tin có thể truy cập miễn phí trên huggies face.
- Và tôi đã đề cập đến điều cuối cùng tôi sẽ nói với bạn là Live Bench, đây là một chuẩn mực khó và không bị nhiễm bẩn, bao gồm việc làm mới hoàn toàn tất cả các câu hỏi sau mỗi sáu tháng và sau đó tiến hành kiểm tra dựa trên các yếu tố khác nhau như lập luận, mã hóa và mã hóa di truyền, toán học và phân tích dữ liệu.
- Và bạn có thể thấy thứ hạng của các mô hình khi so sánh với những điểm số khác nhau này, GPT năm cao hiện đang ở vị trí dẫn đầu.
- Claude 4.
## Phan 16

### Muc 46

- 5.
- Suy nghĩ xuất hiện ngay sau GPT năm.
- Ừ và ừ thì khá gần, nhưng là ừ.
- Vâng.
- Cũng làm rất tốt về mặt lý luận nhưng lại giỏi về mặt lập trình.
- Hãy nhìn vào vị trí đầu tiên về mã hóa hoặc liên kết ừm, cho ừm, mã hóa tác nhân.
- Thật kỳ lạ, GPT năm cao có hiệu suất kém hơn một chút so với GPT năm trung bình về mã hóa tác nhân.
- Có thể nó suy nghĩ quá nhiều, nhưng đây là một nguồn tài nguyên tuyệt vời vì các số liệu này được chuẩn bị rất cẩn thận để không gặp phải vấn đề rò rỉ dữ liệu.
### Muc 47

- Và đây là nguồn rất đáng tin cậy.
- Và một lần nữa, nó kết hợp hầu hết các mô hình nguồn đóng và nguồn mở trong bảng xếp hạng này, một số mô hình ở đây là GLM.
- Tôi nghĩ chúng ta đã thấy rằng nó cũng hoạt động khá tốt trong phân tích nhân tạo.
- Ừm, là sản phẩm của công ty khởi nghiệp Trung Quốc Xie AI.
- Có rất nhiều mô hình tuyệt vời để xem ở đây.
- Hãy kiểm tra và đánh dấu trang Live Bench nhé.
- Vì vậy, tôi đã giới thiệu cho bạn một vài đấu trường khi chúng ta cùng nhau trải qua cuộc phiêu lưu này.
- Những sản phẩm tôi đã làm là The Outsmart và Connect Four.
### Muc 48

- Nhưng thực tế là có những đấu trường thực sự.
- Hoặc ít nhất cũng có một đấu trường thực sự phù hợp và rất nổi tiếng.
- Trước đây nó được gọi là Lambesis.
- Ngày nay nó được gọi là đấu trường LM.
- Mô hình ngôn ngữ đấu trường LM.
- Một nơi tuyệt vời để đến.
- Đây là nơi bạn có thể trò chuyện ẩn danh với hai người mẫu khác nhau.
- Nó có thể là biên giới.
## Phan 17

### Muc 49

- Chúng có thể là mã nguồn mở.
- Khi so sánh chúng, bạn không biết cái nào là cái nào.
- Bạn bỏ phiếu.
- Vậy thì đây giống như một sự đánh giá mù quáng của con người.
- Và sau đó, kết quả được hiển thị theo thứ gọi là xếp hạng theo kiểu ELO, đối với những người chơi cờ vua thì bạn đã biết rõ về nó, nhưng đây là loại xếp hạng chỉ hiệu quả khi bạn có một cuộc thi đấu trực tiếp và bạn có thể thể hiện hiệu suất của các mô hình khác nhau so với những mô hình trước đó.
- Và thật thú vị khi được tham gia vào đấu trường này để tự mình trải qua quá trình đánh giá các người mẫu và bỏ phiếu.
- Và như một lợi ích, bạn đang đóng góp cho cộng đồng vì bạn đang giúp mọi người biết mô hình nào là tốt nhất trong lĩnh vực này, bạn biết đấy, hãy quên mọi tiêu chuẩn đi.
- Đây chỉ là quyết định cuối cùng của mọi người về mô hình nào mạnh hơn.
### Muc 50

- Và vì thế, có điều gì đó ở nó giống như lời khẳng định cuối cùng trong mọi bảng xếp hạng.
- Vậy là tôi đã giải thích xong.
- Có thể bạn thấy điều này hơi trừu tượng.
- Có một cách để làm cho nó bớt trừu tượng hơn là hãy thử nghiệm.
- Chúng ta hãy cùng thực hiện điều đó.
- Được rồi, chúng ta đang ở la Marina, nơi có đấu trường chatbot nổi tiếng.
- Và chúng ta sẽ đặt câu hỏi không phải cho một mà là cho hai mô hình.
- Chúng ta sẽ kể một câu chuyện cười cho một căn phòng đầy các kỹ sư AI.
### Muc 51

- Đó chính là bạn.
- Được rồi, chúng ta cùng xem nhé.
- Vì vậy, công việc này được giao cho hai trợ lý khác nhau là trợ lý A và trợ lý B.
- Trợ lý A cho biết tại sao mạng lưới nơ-ron lại đi trị liệu.
- Bởi vì có quá nhiều lớp chưa được giải quyết.
- Ồ, cũng không tệ.
- Được thôi.
- Chắc chắn phải có trợ lý.
## Phan 18

### Muc 52

- Đây là một sản phẩm được thiết kế riêng cho các kỹ sư AI.
- Tại sao mạng nơ-ron lại tách khỏi cây quyết định?
- vì nó không thể xử lý được cam kết phân nhánh.
- Vâng.
- Ừm.
- Vâng.
- Ừm, tôi, ừm, tôi nghĩ, ừm, ừm, giữa hai cái đó, tôi nghĩ cái a ngắn hơn và ngọt hơn, nhưng tôi hơi phân vân.
- Nhưng tôi sẽ chọn trợ lý A, có thể bạn sẽ cảm thấy khác, nhưng thật đáng tiếc, vì đó không phải là lựa chọn của bạn.
### Muc 53

- Đó là sự lựa chọn của tôi.
- Đây là điều tuyệt vời nhất của trang web này.
- Tôi được quyền lựa chọn.
- Nếu bạn di chuột qua những mục này, bạn có thể thấy nó sẽ làm nổi bật mục nào tôi sẽ chọn bên trái là tốt hơn.
- Vậy đó là phiếu bầu của tôi.
- Cuộc bỏ phiếu đã kết thúc.
- Và bây giờ chúng ta có thể xem kết quả.
- Và vì thế chúng ta nhấp vào đây trên phần bảng xếp hạng.
### Muc 54

- Bạn có thể thấy thực sự có rất nhiều bảng xếp hạng khác nhau tùy thuộc vào loại câu hỏi bạn đã hỏi.
- Và chúng ta sẽ bám sát vào văn bản đầu tiên vì đó là nơi mọi thứ bắt đầu.
- Và đó có lẽ là câu phổ biến nhất.
- Bạn có thể thấy.
- Có 50.000 lượt bình chọn ở đây và Gemini Two Five Pro là mẫu điện thoại được mọi người thích trò chuyện nhất.
- Và, ừm, để điều đó xảy ra trước.
- Nhưng xin lỗi, không có ai ngang hàng cả.
- Điểm số hơi thấp hơn một chút, nhưng tôi cho rằng điểm số hòa là Claude opus 41 và Claude Sonnet 45.
## Phan 19

### Muc 55

- Vậy thì thực ra tất cả đều bị ràng buộc.
- Và sau đó là GPT ChatGPT kỳ lạ cho số không, đây là phiên bản GPT bốn được tối ưu hóa đặc biệt cho trò chuyện.
- Có lẽ không có gì lạ.
- Có lẽ đó là điều bạn mong đợi.
- Điều đó đứng ở vị trí thứ hai.
- Và nó được coi là ngang hàng với các mẫu máy khác, bao gồm cả bản xem trước GPT bốn năm, chỉ được phát hành trong một thời gian ngắn.
- Ừm, cao hơn một điểm so với GPT năm cao.
- Ừm, thật thú vị và vui khi thấy Gemini hai năm Pro ở vị trí đầu tiên như vậy.
### Muc 56

- Và bạn có thể xem bảng xếp hạng khác tại đây.
- Và một lần nữa, điều làm cho điều này trở nên thỏa mãn nhất là không có điều gì không dựa trên một số tiêu chí như giám khảo hoặc một số tiêu chí khác hoặc một lựa chọn trắc nghiệm nhiều lựa chọn.
- Điều này dựa trên những người thực tế như bạn và tôi bỏ phiếu cho mô hình mà chúng tôi thích hơn mà không cần biết mô hình nào là mô hình nào, điều đó có nghĩa là nó hoàn toàn hợp lệ.
- Vậy hãy vào đó và bỏ phiếu nhé.
- Đóng góp vào phiếu bầu và xem điều gì có thể xảy ra.
- Xem cách bạn có thể thay đổi bảng xếp hạng và đưa mô hình yêu thích của mình lên vị trí dẫn đầu.
- Và hãy tìm hiểu đôi chút về các khả năng khác nhau của mô hình khi bạn thực hiện.
- Vì vậy, như một chủ đề bổ sung nhanh, tôi biết mọi người đều muốn học lập trình.
### Muc 57

- Tôi chán ngấy với tất cả những chủ đề mang tính thương mại này.
- Nhưng để kết thúc, tôi muốn nói về những trường hợp sử dụng khác nhau trong thương mại khi áp dụng LMS để giải quyết các vấn đề kinh doanh.
- Và tôi thường mô tả nó như là, như bạn có thể nghĩ về việc sử dụng LMS và nói chung là áp dụng AI, ừm, cùng với chuỗi giá trị kinh doanh mà bạn cung cấp.
- Ban đầu, mọi người đều nghĩ tới tự động hóa.
- Bạn đã sử dụng AI để tự động hóa các tác vụ thủ công, dễ xảy ra lỗi và dễ tự động hóa.
- Tự động hóa các nhiệm vụ lặp đi lặp lại ban đầu là lĩnh vực của AI.
- Sau đó, nó chuyển từ tự động hóa sang tăng cường, tức là trở thành phi công phụ, thành con người làm việc cùng con người, cho phép ai đó làm được nhiều việc hơn vì họ có thể, ừm, giao một số nhiệm vụ cho AI và cho phép họ đạt được nhiều thành tựu hơn thông qua quan hệ đối tác với LLM.
- Và sau đó là cấp độ cuối cùng.
## Phan 20

### Muc 58

- Bước tiếp theo là tạo sự khác biệt, khi đó bạn hoặc doanh nghiệp của bạn thực sự có thể đạt được điều gì đó hoàn toàn khác biệt vì AI đang tạo ra một hoạt động mới mà trước đây là không thể.
- Và khi bạn đi theo con đường liên tục đó, tất nhiên mọi thứ sẽ ngày càng thú vị hơn từ tự động hóa đến tăng cường và khác biệt.
- Và cũng rất hữu ích khi nghĩ về các loại giải pháp AI mà bạn xây dựng theo ba chiều.
- Có những thứ mà mọi người thường mô tả là trình bao bọc ChatGPT và thường được sử dụng theo cách hơi coi thường.
- Và đây là những trường hợp ứng dụng thương mại được tích hợp với LLM như GPT.
- Ừ, mọi người thường chỉ nói ChatGPT vì đó là cách rõ ràng nhất mà lại coi thường người khác nhất, và họ dùng cách đó để tăng thêm giá trị cho ứng dụng của mình.
- Và ý tôi là, có rất nhiều ví dụ về điều này khi bạn cầm điện thoại lên và xem các ứng dụng ở đó, bạn sẽ thấy rằng nhiều ứng dụng trong số đó sẽ sử dụng LLM theo một cách nào đó.
- Họ sẽ tích hợp JNI vào ứng dụng.
### Muc 59

- Ứng dụng đầu tiên tôi nghĩ đến là Duolingo vì chúng ta đã nói về nó trước đó.
- Và đúng vậy, nó thực sự sử dụng GPT.
- Ừm, và đây là một ví dụ rõ ràng về việc chỉ cần thêm một lớp vỏ bọc bên ngoài và có thể tính phí cao cho nó.
- Mặc dù tất nhiên là họ còn làm nhiều hơn thế nữa.
- Có lẽ điều đó không công bằng, nhưng bạn hiểu ý tôi rồi đấy.
- Và sau đó, phi công phụ thường rất giống nhau.
- Làn sóng đồng lái, về cơ bản chỉ đưa ra lời kêu gọi đến một mô hình biên giới nhưng lại đưa mô hình đó vào công cụ.
- Vậy đó là các trình bao bọc GPT.
### Muc 60

- Và tiếp theo là một nền tảng AI độc quyền, chuyên biệt mà doanh nghiệp của bạn đã xây dựng để có thể gia tăng giá trị vì có chuyên môn trực tiếp trong một số lĩnh vực.
- Và tất nhiên, lĩnh vực này càng hấp dẫn thì càng có ý nghĩa.
- Và có thể Duolingo cũng nằm trong lĩnh vực này.
- Tất nhiên, vẫn có một sự liên tục nào đó giữa những điều này.
- Nhưng đây là nơi bạn xây dựng các mô hình có chuyên môn mà bạn sẽ không tìm thấy nếu bạn truy cập ChatGPT.
- Và có thể ban đầu bạn đã thực hiện điều đó thông qua đào tạo, thông qua tinh chỉnh, bạn đã xây dựng các mô hình mà bạn đã đào tạo nó trên dữ liệu độc quyền và bạn đã sử dụng dữ liệu đó để có thể đạt được điều gì đó khác biệt.
- Trò chuyệnGPT.
- Nhưng ngày càng có nhiều kỹ thuật suy luận theo thời gian, đó là Rag và các loại khác cùng với các công cụ bổ sung, các khả năng khác cho phép bạn làm được nhiều hơn.
## Phan 21

### Muc 61

- Và do đó có những công ty nhỏ hơn, có những công ty khởi nghiệp, có những công ty như Harvey đang áp dụng bằng luật sư vào luật.
- Có công ty nơi tôi làm việc tại Nebula, nơi áp dụng công nghệ này vào việc tìm kiếm tài năng, nghề nghiệp, công việc và kết nối mọi người với những vai trò mà họ sẽ thành công.
- Có Kahneman đến từ Học viện Khan, nơi đang áp dụng nó vào giáo dục, và sau đó chỉ để nói chuyện với một số người lớn ngoài kia, tất nhiên, Salesforce tham gia vào trò chơi này ở khắp mọi nơi, nhưng họ có dịch vụ chăm sóc sức khỏe đặc biệt ấn tượng có thể thực hiện những việc như tự động ghi chú của bác sĩ và các cuộc họp lâm sàng, ừm, và có thể loại bỏ nhiều công việc hành chính, nhưng với kiến thức, với thông tin riêng và được kết nối với tất cả các công cụ Salesforce và Palantir, tất nhiên,
- nền tảng dữ liệu có rất nhiều AI được dệt vào đó, tận dụng dữ liệu của họ.
- Và đó là chủ đề chung của vấn đề này, rằng một công ty AI, có thể giống như công ty bạn đang làm việc, có thể phân biệt mình với những công ty khác thường thông qua dữ liệu.
- Vấn đề nằm ở dữ liệu.
- Andrew Ng từng nói rằng AI chính là nguồn điện mới và tôi nghĩ điều đó đã được chứng minh là đúng.
- Nhưng ngoài ra, tôi muốn nói rằng dữ liệu chính là điện.
### Muc 62

- Việc sở hữu bộ dữ liệu độc quyền mà người khác không có nghĩa là bạn có thể xây dựng một ứng dụng chuyên biệt cho doanh nghiệp có thể thực hiện những điều mà người khác không thể.
- Và những thứ này luôn đi theo bộ ba.
- Vì thế phải có cái thứ ba.
- Và tất nhiên đó là AI di truyền.
- Đó chính là ranh giới mới.
- Đó là nơi chúng ta có thể xây dựng phần mềm tự động, có khả năng đưa ra quyết định, có khả năng tự mình thực hiện mọi việc.
- Và nơi này thực sự giống như nơi mà hơn bất kỳ nơi nào khác, chúng ta có thể xây dựng những thứ cho phép các doanh nghiệp tạo sự khác biệt và làm những điều mà trước đây không thể thực hiện được.
- Và điều thú vị đối với tôi là nhiều trường hợp sử dụng phổ biến nhất liên quan đến Agentic AI lại mang tính kỹ thuật hơn và đến từ các công ty kỹ thuật.
### Muc 63

- Rõ ràng là Claude Code, OpenAI, Codex, đây là những công cụ mà chúng ta đều biết, cũng như chế độ tác nhân OpenAI mà chúng tôi sử dụng trong ChatGPT.
- Nhưng điều đó ít mang tính kỹ thuật hơn.
- Nhưng dù sao thì nó cũng đến từ một công ty công nghệ.
- Tôi nghĩ rằng điều đáng chú ý là cách các doanh nghiệp đưa AI di truyền vào sản phẩm của họ một cách mạnh mẽ.
- Và điều đó vẫn chưa xảy ra.
- Và tôi nghĩ đó sẽ là ranh giới tiếp theo.
- Và nếu bạn thấy điều này thú vị hoặc muốn tìm hiểu thêm về nó, thì tôi có một bản tóm tắt riêng về LMS dành cho các nhà lãnh đạo.
- Tôi biết rằng hầu hết các bạn đều muốn tôi chuyển sang phần viết mã, chúng ta sẽ làm điều đó ngay sau đây.
## Phan 22

### Muc 64

- Nhưng nếu bạn quan tâm thì có bản tóm tắt đi kèm.
- Và một điều tôi muốn nói về toàn bộ chủ đề này là, tôi tin rằng đó là một siêu năng lực.
- Nếu bạn là một kỹ sư AI và bạn cũng có kiến thức về khía cạnh thương mại của lĩnh vực này, bạn phải hiểu biết về một số cạm bẫy và một số lĩnh vực thành công khi áp dụng AI di truyền hoặc AI tạo ra để mang lại lợi ích thương mại.
- Vì vậy, tôi khuyên bạn nên dành thời gian để xem xét cả khía cạnh thương mại nữa.
- Nó thực sự giúp bạn và có thể một số doanh nhân khác tham gia khóa học này để có được một số kỹ năng kỹ thuật, giúp bạn có được siêu năng lực.
- Và có lẽ bạn cũng đồng ý với tôi rằng đó chính là vấn đề.
- Biết cả hai, ít nhất cũng phải có nhận thức tốt.
- Một số người biết rằng hiểu biết về khía cạnh thương mại sẽ thực sự giúp bạn nổi bật.
### Muc 65

- Được thôi, nhưng tôi hứa với bạn rằng chúng ta sẽ đi sâu vào vấn đề kỹ thuật và chúng ta sẽ bắt đầu thực hiện vào ngày mai.
- Chúng ta sẽ quay lại phòng thí nghiệm.
- Đã hai ngày trôi qua mà không có phòng thực hành lập trình thực sự nào.
- Chúng ta sẽ xây dựng một thử thách thương mại nhỏ, vừa thú vị vừa thiết thực.
- Giả sử chúng ta đang cố gắng xây dựng một sản phẩm có thể chuyển đổi từ công nghệ này sang công nghệ khác.
- Cụ thể, chúng ta sẽ thử thực hiện một số thao tác để chuyển đổi mã Python sang mã C++ để trở thành mã C++ hiệu suất cao.
- Ồ, đây quả là một điều thú vị.
- Vì vậy, hầu hết các bạn có thể biết C++ giống như một ngôn ngữ biên dịch dành riêng cho từng nền tảng, biên dịch thành mã máy chạy gốc trên nền tảng của bạn, trong khi Python là ngôn ngữ được thông dịch.
### Muc 66

- Và do đó, việc chuyển đổi mã Python sang C++ thực sự là một điều tuyệt vời vì nó cho phép bạn xây dựng giải pháp cực kỳ nhanh chóng.
- Và chúng ta sẽ thử nghiệm với nhiều mô hình khác nhau.
- Chúng ta sẽ chọn mô hình phù hợp để thực hiện điều đó.
- Chúng ta sẽ sử dụng bài tập này để tìm hiểu cách chọn mô hình phù hợp cho nhiệm vụ đang thực hiện, chắc chắn sẽ rất thú vị.
- Và chúng ta sẽ làm điều đó vào ngày mai.
- Và như vậy, tại thời điểm này, ngoài việc mã hóa bằng các mô hình frontier, Llms và Transformers nguồn mở, bạn có thể tự tin lựa chọn mô hình phù hợp cho dự án của mình bằng các số liệu được hỗ trợ.
- Hoặc nếu bạn muốn cầu kỳ hơn, bạn có thể chọn những mẫu phù hợp.
- Bạn có thể chọn Llms đúng cho tập hợp con.
## Phan 23

### Muc 67

- Vẫn còn một bước nữa để tạo nguyên mẫu thực sự và chọn ra mô hình cuối cùng.
- Và đó chính là những gì chúng ta sẽ thực hiện trong vài ngày tới.
- Lần tới bạn sẽ có thể đánh giá các mô hình, đặc biệt là khả năng tạo mã.
- Và chúng ta sẽ có thể xây dựng một giải pháp sử dụng mô hình để tạo mã.
- Và như một tác dụng phụ của việc này, chúng ta sẽ thực hành lựa chọn mô hình phù hợp, đó chính là nội dung của tuần này.
- Hẹn gặp lại bạn vào ngày mai.

