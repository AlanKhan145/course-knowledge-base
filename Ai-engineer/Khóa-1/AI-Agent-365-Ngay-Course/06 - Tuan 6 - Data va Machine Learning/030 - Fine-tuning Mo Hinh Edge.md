# Ngay 030 - Tuan 6, ngay 5

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-030.txt

## Tong quan

- Chu de mo dau: Chào mừng đến với tuần thứ sáu.
- File goc: day-030.txt
- So y chinh: 930
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Chào mừng đến với tuần thứ sáu.
- Ngày thứ năm.
- Chào mừng, cuối cùng, đến với việc tinh chỉnh mô hình biên.
- Thôi nào, tôi đã hiển thị hình ảnh này trên slide này vào đầu mỗi ngày trong tuần này với Laura được quấn quanh đầu.
- Và có lẽ bạn đang tự hỏi, Laura là gì?
- Khi nào thì chúng ta sẽ giải thích Laura là gì và nó liên quan như thế nào đến việc tinh chỉnh mô hình?
- Và, ừm, câu trả lời là tôi sẽ thực sự giải thích điều đó vào tuần tới, đó là lúc chúng ta sẽ tinh chỉnh một mô hình nguồn mở, xắn tay áo lên và đi sâu vào lõi của mô hình, tinh chỉnh và xây dựng những thứ gọi là ma trận Laura, mô-đun mục tiêu và đủ thứ khác.
- Nhưng, nhưng khi tinh chỉnh mô hình biên, bạn thực chất chỉ đang thực hiện các cuộc gọi API để yêu cầu OpenAI: "Này, tôi muốn bạn tinh chỉnh mô hình này." Bạn thực sự không thể tự mình tham gia vào quá trình đào tạo chi tiết, và thông thường người ta hiểu rằng OpenAI sử dụng kỹ thuật gọi là Laura khi bạn yêu cầu họ thực hiện việc tinh chỉnh này.
### Muc 2

- Nhưng họ không tiết lộ điều đó một cách cụ thể.
- Và họ không công bố cách họ thực hiện việc tinh chỉnh.
- Vậy nên hôm nay chúng ta sẽ không thực sự xem xét bên trong của Laura.
- Chúng ta chỉ có thể tin rằng đó là điều đang xảy ra.
- Và đó là lý do tại sao tôi sẽ không giải thích.
- Tôi sẽ không nói với bạn rằng Laura là viết tắt của "low rank adapters", vì bạn không cần biết điều đó.
- Tôi không chỉ nói vậy, nhưng chúng ta sẽ làm điều đó vào tuần tới.
- Và hiện tại, hãy biết rằng chúng tôi đã kết nối Laura với bộ não này trên đám mây OpenAI.
### Muc 3

- Được rồi, với những điều đã nêu, tất nhiên bạn có thể làm việc với các mô hình nguồn mở và mô hình tiên tiến.
- Bạn có thể tạo các giải pháp Rag và giải quyết vấn đề bằng một chiến lược gồm năm bước, bao gồm thu thập dữ liệu, tiền xử lý dữ liệu, xây dựng mô hình cơ sở, và các bước khác.
- Cuối cùng, bạn sẽ tìm hiểu cách tinh chỉnh mô hình biên.
- Chúng ta sẽ đi qua quy trình, tạo dữ liệu, chạy mô hình và kiểm tra kết quả.
- Đi thôi.
- Vậy khi bạn hợp tác với OpenAI để tinh chỉnh mô hình, và chúng ta sẽ sử dụng OpenAI cho quá trình tinh chỉnh của mình.
- Và các nhà cung cấp khác cũng hỗ trợ tinh chỉnh.
- Và nó thường hoạt động theo cách tương tự đối với tất cả chúng.
## Phan 2

### Muc 4

- Vậy chúng ta sẽ sử dụng OpenAI, đây là công cụ phổ biến nhất cho việc này, nhưng việc chuyển đổi sang các công cụ khác cũng rất đơn giản.
- Cách hoạt động của nó là có ba giai đoạn, và thực tế nó khá tương tự với những gì đã xảy ra khi chúng ta sử dụng grok ở chế độ batch.
- Nó có nhiều điểm tương đồng với chế độ batch, và chính vì vậy mà việc bạn có trải nghiệm đầu tiên với nó vào ngày thứ hai trong tuần này đã rất hữu ích.
- Đây là ba giai đoạn.
- Bước đầu tiên là bạn cần tạo dữ liệu đào tạo, một tập dữ liệu đào tạo theo định dạng cụ thể.
- Và định dạng đó là tệp JSON, một tệp mà bạn đã rất quen thuộc, một tệp trong đó mỗi dòng là một tài liệu JSON riêng biệt.
- Vậy bạn đưa tập dữ liệu đào tạo của mình vào định dạng JSON và tải lên OpenAI.
- Bước thứ hai là khi bạn tiến hành đào tạo và bạn sẽ bắt đầu thấy kết quả.
### Muc 5

- Bạn sẽ thấy mức độ tổn thất từ mỗi đợt đào tạo của mình.
- Bạn sẽ thấy mức độ tổn thất giảm dần và có thể theo dõi nó để hiểu rõ những gì đang xảy ra trong quá trình đào tạo.
- Và thứ ba, bạn lấy kết quả này và đánh giá chúng.
- Bạn điều chỉnh kết quả và sau đó lặp lại chúng.
- Được rồi.
- Với sự chuẩn bị đó, bây giờ tôi sẽ hướng dẫn các bạn vào để thực hiện một số điều chỉnh chi tiết.
- Nhưng trước khi làm điều đó, tôi muốn cho các bạn xem một số thông tin trên trang web của OpenAI để giải thích các loại tinh chỉnh khác nhau mà họ cung cấp, và cho các bạn biết chúng ta sẽ chọn loại nào và tại sao chúng ta sẽ làm điều đó ngay bây giờ.
- Vậy là bây giờ tôi đang ở trên trang web của nền tảng OpenAI trong phần tài liệu của họ.
### Muc 6

- Nếu bạn truy cập vào nền tảng và sau đó nhấp vào mục "Docs", bạn cũng sẽ đến đây.
- Và có tài liệu hướng dẫn chi tiết cho các API mà OpenAI cung cấp.
- Và bạn có thể cuộn xung quanh để xem rằng, ừm, ví dụ, họ có rất nhiều thông tin về cái mà họ gọi là API phản hồi, đây là API thay thế của họ cho việc hoàn thành cuộc trò chuyện, thứ mà chúng ta đã quen thuộc, và họ khuyến khích bạn sử dụng nó.
- Họ nói rằng đó chính là tương lai.
- Đó là một chút mánh khóe.
- Tức là, họ làm điều đó vì muốn buộc bạn phải sử dụng hệ sinh thái của họ, bởi vì nếu bạn sử dụng API phản hồi, bạn có thể tận dụng một số tính năng trả phí, nhưng nó sẽ không thể tương thích ngay lập tức với các mô hình khác.
- Theo ý kiến cá nhân, tôi khuyên bạn không nên sử dụng API phản hồi mà nên sử dụng API hoàn thành cuộc trò chuyện.
- Tuy nhiên, có rất nhiều tính năng ở đây là độc quyền của OpenAI, nhưng chúng thực sự tuyệt vời.
## Phan 3

### Muc 7

- À, có một số thông tin về đại lý mà bạn có thể đọc thêm về điều đó.
- Tất nhiên, tôi đã đề cập đến rất nhiều nội dung trong khóa học về đại lý của mình, nhưng có một số nội dung thực tế ở đây thực sự rất thú vị.
- À, có API thời gian thực ngay tại đây.
- Nếu bạn quan tâm đến việc khám phá các tính năng như chuyển văn bản thành giọng nói hoặc chuyển giọng nói thành văn bản theo thời gian thực và các tính năng tương tự, thì bạn sẽ tìm thấy rất nhiều thông tin hữu ích tại đây.
- À, nhưng tôi muốn đưa bạn đến giai đoạn tinh chỉnh, đó chính là điều chúng ta đang làm hôm nay.
- Và khi chúng ta xem xét việc tinh chỉnh, bạn sẽ thấy rằng có nhiều phương pháp khác nhau để tinh chỉnh mô hình OpenAI.
- Và bắt đầu từ những kiến thức cơ bản, điều quan trọng là phải hiểu rằng khi bạn tinh chỉnh một mô hình tiên tiến như OpenAI, bạn đang có được phiên bản riêng của nó chỉ dành riêng cho bạn.
- Đây là thứ mà bạn có thể sử dụng trong một khoảng thời gian nhất định.
### Muc 8

- Và đó chính là điều quan trọng.
- Tất cả những điều này cho phép bạn có một phiên bản riêng tư nhỏ của mô hình OpenAI.
- Và tất nhiên, cũng đáng để chúng ta tìm hiểu kỹ hơn về ý nghĩa của Laura vào tuần tới, nhưng có lẽ bạn đã có cái nhìn tổng quan rằng tất cả điều này đều xoay quanh việc có thể thay đổi một số thông số nhỏ và để những thông số nhỏ đó ảnh hưởng đến mô hình lớn hơn.
- Vậy khi tôi nói rằng OpenAI cung cấp cho bạn một bản sao riêng tư của điều này, điều bạn thực sự nhận được là một bản sao nhỏ của một số lượng nhỏ các tham số.
- Và những công cụ đó được sử dụng để nhẹ nhàng điều chỉnh nền tảng lớn hơn, mô hình GPT lớn hơn.
- Và các thông số nhỏ của bạn ở đây được điều chỉnh theo cách mà nó được áp dụng cho mô hình lớn này.
- Và bây giờ tôi đang giải thích những gì tôi đã nói.
- Tôi định để đến tuần sau, nhưng Laura là viết tắt của "low rank adapter" và "rank" là một thuật ngữ khác để chỉ "chiều".
### Muc 9

- Nó cho biết rằng đây là một mô hình được điều chỉnh từ mô hình lớn, nhưng có ít chiều hơn và bộ tham số nhỏ hơn để điều chỉnh mô hình lớn.
- Đó là cách nó hoạt động.
- Bạn huấn luyện một trong những mô hình này, đây là kết quả được lưu trữ, và kết quả này sẽ được áp dụng cho mô hình chính khi bạn thực hiện suy luận.
- Nhưng chúng ta không cần phải lo lắng về những điều đó vì OpenAI sẽ làm tất cả những việc đó cho chúng ta.
- Tuần tới, chúng ta sẽ phải lo lắng về nó.
- Vậy là đây.
- Các loại khác nhau này có quá trình tinh chỉnh có giám sát.
- Tầm nhìn này rõ ràng là chúng ta hiện tại không đang làm việc với hình ảnh.
## Phan 4

### Muc 10

- Vậy chúng ta sẽ bỏ qua việc tối ưu hóa sở thích trực tiếp của DPO và tinh chỉnh tăng cường RFT.
- Vậy ba phương pháp SFT và RFT này là ba phương pháp chính mà chúng ta sẽ tìm hiểu ngay bây giờ, bắt đầu với phương pháp tinh chỉnh có giám sát.
- Vậy đây là trường hợp mà bạn cung cấp các ví dụ về dữ liệu đầu vào và kết quả đầu ra mong đợi, tức là các phản hồi chính xác.
- Và đây là công cụ cho phép bạn đào tạo mô hình AI mở bằng các ví dụ cụ thể cho trường hợp sử dụng của bạn.
- Kết quả là một mô hình được tùy chỉnh, giúp tạo ra phong cách và nội dung của bạn một cách đáng tin cậy hơn.
- Bạn có thể sử dụng nó hiện tại với bất kỳ trong ba mô hình sau: GPT-4-1, Big Guy, Mini và Nano.
- Vì vậy, bạn thấy tại sao tôi chọn bốn một, không phải năm một.
- Hiện tại, họ chưa hỗ trợ tính năng này cho các mẫu sản phẩm mới hơn, nhưng có thể họ sẽ hỗ trợ vào thời điểm của bạn.
### Muc 11

- Và xin vui lòng ghi chú lại mọi thứ bạn thấy ở đây, vì có thể bạn sẽ phải cập nhật tên mô hình nếu mô hình mà họ hỗ trợ hiện tại khác với mô hình mà chúng ta sẽ sử dụng, đó chính là mô hình này ngay đây.
- Vì vậy, phương pháp này là lựa chọn tốt nhất cho việc phân loại khi bạn cần phân loại các đối tượng vào các nhóm để dịch với một số sắc thái, để tạo nội dung theo một phong cách cụ thể, và để khắc phục các lỗi phát sinh.
- Nếu mô hình chính của bạn liên tục mắc lỗi, bạn cần đưa ra một số ví dụ về cách ngăn chặn nó tiếp tục làm như vậy.
- À, đó là cách nó hoạt động.
- Đó là SFT (Supervised Fine-Tuning) và DPO (Direct Preference Optimization).
- Khi bạn muốn tinh chỉnh mô hình dựa trên một số ví dụ tốt và một số ví dụ xấu.
- Đây thực sự là một ví dụ về việc bạn đã đưa ra một số lựa chọn khác nhau cho người dùng của mình.
- Và người dùng của bạn đã đánh giá tích cực hoặc tiêu cực về các biến thể khác nhau mà họ đang xem.
### Muc 12

- Và bạn muốn tinh chỉnh mô hình của mình, để tối ưu hóa nó.
- Thật khó để không dùng từ đó.
- À, vậy là nó có xu hướng ưu tiên loại này hơn loại kia dựa trên sở thích này, tức là việc điều chỉnh bằng cách bấm "thích" hoặc "không thích" như vậy.
- Vì vậy, đây là một phương pháp được coi là rất mạnh mẽ để giúp mô hình trở nên tinh tế hơn, có thể điều chỉnh nhẹ nhàng theo một hướng nhất định.
- Và thường thì đó là những việc như chọn phong cách và giọng điệu phù hợp trong cuộc trò chuyện, ừm, có thể là tập trung vào những điều quan trọng.
- Ở đây nói rằng, nó cho phép mô hình học hỏi từ sở thích chủ quan của con người.
- Đó là ý tưởng.
- Và đây thực sự là phiên bản kế thừa của một phương pháp gọi là RL (Reinforcement Learning) mà có thể bạn đã nghe qua, tức là học tăng cường dựa trên phản hồi của con người.
## Phan 5

### Muc 13

- Đây chính là bước đột phá lớn đã giúp chuyển từ mô hình GPT trước đó sang ChatGPT vào năm 2022.
- Đó chính là loại kỹ thuật này.
- Đó chính là DPO (Direct Preference Optimization).
- Được rồi.
- Và bây giờ là phương pháp tiên tiến nhất và có thể là phong cách nhất: tinh chỉnh tăng cường RFT để đạt được hiệu suất chuyên gia trong một lĩnh vực cụ thể.
- Ý tưởng này tương đối giống với việc tinh chỉnh có giám sát, nhưng thay vì có một tập hợp các câu trả lời đúng, không phải là bạn có nhãn cho tất cả dữ liệu của mình, mà thay vào đó, bạn có thể có một chương trình có khả năng đánh giá các phản hồi khác nhau, và nó sẽ điều chỉnh các yếu tố dựa trên điểm số đó.
- Và chương trình đó thực hiện việc chấm điểm thực tế có thể là một LL.M.
- Chương trình Thạc sĩ Luật (LL.M.) Người ta đôi khi nói đó là LL.M.
### Muc 14

- Với tư cách là một thẩm phán, một chương trình LLM được thiết kế với một yêu cầu cụ thể, giúp nó đánh giá xem câu trả lời có phải là một câu trả lời tốt hay không.
- Và điều này rất tinh tế, nhưng nó cho phép bạn một lần nữa, đó là về sự tinh tế.
- Nó cho phép bạn điều chỉnh mô hình theo các mục tiêu phức tạp, vì bạn có thể sử dụng mô hình ngôn ngữ lớn (LLM) để đánh giá những gì đã xảy ra so với các mục tiêu phức tạp đó.
- Vậy đây là cách bạn có thể thực sự định hình một mô hình để tạo ra nó, để nó trở nên hiệu quả, có thể là, ừm, không có lỗ hổng bảo mật hoặc thứ gì đó tương tự.
- Đúng vậy, chẩn đoán y tế.
- Đó là loại vấn đề mà một thẩm phán có bằng Thạc sĩ Luật (LLM) có thể quyết định liệu đây có phải là một chẩn đoán hợp lý hay không, dựa trên các điều kiện và dựa trên các sự kiện.
- À, vậy, ừm, đây là một số ví dụ.
- Chìa khóa này tương tự như SFT.
### Muc 15

- Sự khác biệt là bạn sử dụng SFT khi có các nhãn cụ thể và sử dụng RFT khi không có nhãn, mà thay vào đó bạn có cách đánh giá xem sản phẩm được tạo ra là tốt hay xấu thông qua một hệ thống đánh giá, và bạn sẽ xây dựng hệ thống đánh giá đó, và nó sẽ sử dụng nó một cách động để quyết định nên làm gì.
- Đó là sự củng cố.
- Điều chỉnh chi tiết.
- RFT và RFT chỉ có thể được sử dụng với các mô hình suy luận vì tất cả đều xoay quanh việc định hình quá trình suy luận dựa trên phản hồi này.
- Và hiện tại, đối với mini, chúng ta đã vượt xa O's, nhưng mini là lựa chọn duy nhất có thể sử dụng cho mục đích này.
- Được rồi, vậy là đã giải thích các loại tinh chỉnh khác nhau mà bạn có thể thực hiện thông qua API OpenAI.
- Và tôi chắc chắn rằng bạn đã hiểu rõ trường hợp nào phù hợp với chúng ta trong trường hợp này.
- Trường hợp rõ ràng là phù hợp nhất với chúng ta là SFT supervised fine tuning, vì chúng ta có dữ liệu được gắn nhãn.
## Phan 6

### Muc 16

- Vậy là chúng ta đã có các sự kiện.
- Chúng ta không cần máy chấm điểm vì chúng ta đã có câu trả lời hoàn hảo.
- Chúng ta có thể viết một chương trình chấm điểm chỉ so sánh với câu trả lời hoàn hảo và đưa ra quyết định, nhưng điều đó sẽ là một sự lãng phí thời gian hoàn toàn.
- Chúng ta không cần phải làm điều đó vì chúng ta đã có câu trả lời thực sự ở đây.
- À, và chúng ta đang ở trong trường hợp SFT, và tôi nên nói rằng đây là phương pháp phổ biến nhất trong số các phương pháp.
- Nó không phổ biến như việc sử dụng DPO và RFT, những phương pháp tinh tế và phức tạp hơn, được thiết kế để xử lý các trường hợp đặc biệt.
- Nhưng SFT chính là những gì mọi người làm.
- Thường thì đây là lựa chọn hàng đầu.
### Muc 17

- Đây là lúc bạn có dữ liệu được gắn nhãn và muốn tinh chỉnh mô hình.
- Hãy nhớ, chúng ta sẽ không thực sự tinh chỉnh mô hình GPT thực tế vì nó quá lớn.
- Ngay cả GPT-4-1 Nano cũng chắc chắn có hàng tỷ tham số, có thể lên đến một nghìn tỷ.
- Chúng tôi sẽ không làm điều đó, mà thay vào đó, chúng tôi tin rằng OpenAI sẽ đào tạo một tập thông số nhỏ hơn, mà chúng tôi sẽ sử dụng để áp dụng cho mô hình lớn, và đó chính là điều mà nó sẽ duy trì và phát triển cho chúng tôi.
- Chúng ta sẽ không có cái nhìn toàn diện về điều đó.
- Chúng ta sẽ sử dụng một số lệnh gọi API để thiết lập mọi thứ, chạy quá trình đào tạo, đo lường kết quả và tất cả những điều đó sẽ được thực hiện trong video tiếp theo.
- Được rồi, bây giờ chúng ta đã bước vào tuần thứ sáu, ngày thứ năm.
- Thời gian trôi qua thật nhanh.
### Muc 18

- Bạn đang nghĩ, không, họ chưa làm.
- Không phải tuần này.
- Tuần này có phần, ừm, chuyên nghiệp hơn một chút.
- Được rồi, ngày thứ năm, tinh chỉnh mô hình biên.
- Chúng ta sẽ sử dụng API của OpenAI để tinh chỉnh phiên bản riêng của mình.
- Chúng ta sẽ sử dụng GPT-4 Nano.
- Không nhiều.
- À, và à, nó sẽ là, nó sẽ là, nó sẽ là tuyệt vời.
## Phan 7

### Muc 19

- Chúng tôi đang sử dụng phương pháp tinh chỉnh có giám sát, đây là phương pháp phổ biến nhất và rõ ràng là phù hợp nhất với trường hợp sử dụng của chúng tôi.
- Vậy là tôi đang nhập tất cả dữ liệu.
- Như bạn sẽ thấy, việc bạn làm đúng hay sai ở đây không quan trọng.
- Đang tải toàn bộ tập dữ liệu 800.000 bản ghi.
- Hãy làm điều đó và in dữ liệu của chúng ta ra để đảm bảo rằng chúng ta đã có nó.
- Và chúng ta sẽ sử dụng thư viện khách hàng OpenAI.
- Bạn nhớ rằng OpenAI chính là OpenAI.
- Điều này dường như đã xảy ra từ rất lâu rồi, khi chúng ta làm những việc này, ừm, cách đây tận hai tuần.
### Muc 20

- À, đó là thư viện khách hàng Python mà chúng ta sẽ bắt đầu sử dụng ở đó.
- Và sau đó, chúng ta sẽ thảo luận về số lượng điểm dữ liệu mà chúng ta sẽ sử dụng cho quá trình tinh chỉnh.
- Thế này, vấn đề là thế này.
- OpenAI khuyến nghị bạn không nên sử dụng quá nhiều điểm dữ liệu cho quá trình tinh chỉnh.
- Họ khuyến nghị bắt đầu với chỉ 50 đến 100 điểm dữ liệu và sau đó chỉ tăng lên nếu bạn muốn.
- Lý do cho điều đó là vì SFT, bạn đang làm việc với một mô hình được huấn luyện sẵn có quy mô lớn, và ý tưởng của việc tinh chỉnh OpenAI là chỉ thêm một số gợi ý, một số cách để giúp nó hiểu được mục tiêu mà bạn đang hướng tới.
- Có thể bạn muốn nó luôn trả lời với một chút mỉa mai.
- Có thể bạn muốn nó luôn từ chối trả lời các câu hỏi cá nhân.
### Muc 21

- Đó là điều mà bạn đang cố gắng dạy cho nó ngoài những gì nó đã làm, và điều đó không nên đòi hỏi quá nhiều ví dụ.
- Vậy nên, như bạn có thể đoán được, điều chúng ta đang cố gắng làm là dạy một kỹ năng hoàn toàn khác biệt, và chúng ta có rất nhiều ví dụ.
- Điều đó không thực sự là một trường hợp sử dụng lý tưởng để tinh chỉnh mô hình tiên tiến.
- Đây là một trường hợp sử dụng tốt hơn cho việc tinh chỉnh mô hình nguồn mở để tự xây dựng một thứ gì đó.
- Không thực sự hiệu quả cho việc tinh chỉnh mô hình biên.
- Chúng tôi vẫn sẽ thử sức một lần nữa.
- Bây giờ, nghe này, tôi sẽ làm một điều hơi điên rồ ở đây, và tôi sẽ thử nhập 20.000 điểm, một lượng lớn dữ liệu, vì tôi thực sự muốn thử dạy cho mô hình biên giới này kỹ năng này.
- Nó tốn của tôi $3.42.
## Phan 8

### Muc 22

- Vì vậy, nó vẫn không quá đắt đỏ vì Nano là một mẫu máy rất rẻ.
- Vì vậy, tôi muốn chọn một mô hình rất rẻ và cung cấp cho nó rất nhiều ví dụ, vì theo tôi, chúng ta không thể mong đợi nó học được nhiều kỹ năng chuyên môn nếu nó không được tiếp xúc với nhiều mức giá khác nhau, ít nhất là cho mỗi danh mục.
- Nhưng bạn không nên làm điều này quá nhiều, vì vậy tôi sẽ làm 20.000.
- Bạn chỉ cần làm bài 100.
- Tôi sẽ thay đổi con số này thành 100 khi bạn chạy chương trình, để tôi có thể, ừm, tôi đề xuất chúng ta sử dụng 100 ví dụ.
- Tôi sẽ chọn một con số lớn hơn.
- Nhưng bạn không nên làm điều đó.
- Vậy chúng ta hãy xem ở đây xem nếu tôi thực hiện quá trình tinh chỉnh mô hình Len, mô hình của tôi vẫn sẽ hiển thị 20.000 vì tôi đã thay đổi điều này sau khi chạy mô hình.
### Muc 23

- Nhưng bạn nên nói 100.
- Điều đó sẽ không tốn của bạn một xu nào.
- Và đó là một con số tốt để có.
- Được rồi.
- Vậy bây giờ chúng ta hãy bắt đầu với đề bài của mình.
- Hôm qua tôi đã cải thiện prompt này một chút, tôi nghĩ vậy.
- Vậy thì chúng ta hãy sử dụng prompt mà chúng ta đã có được hôm qua.
- Hãy giữ mọi thứ nguyên vẹn như cũ.
### Muc 24

- Vậy cuối cùng, yêu cầu nào chúng ta đã chọn hôm qua?
- Ước tính giá của sản phẩm này.
- Chỉ trả lời bằng giá.
- Không có giải thích.
- Hãy lấy chính xác điều đó và đặt nó ngay tại đây.
- À, hãy ước tính giá của sản phẩm này.
- Trả lời với giá.
- Không có giải thích.
## Phan 9

### Muc 25

- Và đây là giá cả.
- Và, ừm.
- Đúng rồi, tôi thấy ở đây chúng ta hãy để nó hiển thị giá đầy đủ như vậy, giống như giá của Iceland.
- À, vậy chúng tôi đang cung cấp dữ liệu này, này, ừm, này, này dưới dạng danh sách các từ điển, trong đó chứa giá của sản phẩm, và sau đó nó trả về chỉ giá.
- Vậy để tôi đưa ra một ví dụ.
- Nếu chúng ta xem xét điểm đào tạo số 0, nó yêu cầu ước tính giá của sản phẩm này, trả lời với giá, không giải thích.
- Và còn có thông tin về một số khóa chốt bên trong được bao gồm và nội dung hỗ trợ vai trò được trả lại.
- Và đó là giá cả.
### Muc 26

- Vậy đây là những gì chúng ta muốn nó học cách phản hồi.
- Chúng tôi muốn nói rằng, này, hãy xem này, nếu chúng tôi cung cấp cho bạn lời nhắc người dùng này, chúng tôi muốn bạn trả lời bằng phản hồi của trợ lý này.
- Đó chính là cách chúng tôi đang tổ chức dữ liệu của mình.
- Có rất nhiều ví dụ như thế này.
- Vì vậy, nó có thể học được rằng đây là loại phản hồi của trợ lý mà nên xuất hiện như kết quả của yêu cầu này từ người dùng.
- Được rồi.
- Đó là trò chơi.
- Đó chính là điều chúng ta sẽ làm.
### Muc 27

- Chúng tôi hiện muốn tổng hợp 20.000 ví dụ về điều này, trong trường hợp của tôi là 100 ví dụ cho bạn.
- Gói gọn lại và yêu cầu OpenAI: "Này, hãy tạo cho tôi một biến thể của GPT-4 One Nano đã được huấn luyện từ dữ liệu này." Được rồi.
- Vậy chúng ta sẽ có một hàm có tên là make jsonl.
- Nghe quen quen?
- Điều này khá giống với những gì chúng ta đã làm vào ngày thứ hai.
- Vậy nó sẽ đi qua và sẽ cần một bộ các mục.
- Nó sẽ lặp qua các mục đó.
- Nó sẽ gọi hàm này để chuyển đổi các tin nhắn thành tin nhắn.
## Phan 10

### Muc 28

- Chuyển đổi điều đó thành JSON và ghi vào một dòng trong tệp JSON.
- Được rồi.
- Vậy nếu chúng ta lấy ba điểm đào tạo đầu tiên, thì nó trông như thế nào?
- À, nó trông như thế này.
- Đây là ba dòng JSON chứa các thông báo.
- Và sau đó, chúng ta có chính xác những thứ đến từ đây.
- Chúng tôi đang ước tính giá của sản phẩm này.
- Dưới đây là chi tiết về sản phẩm.
### Muc 29

- Và cuối cùng, đây là phản hồi mà mô hình nên trả về.
- Được rồi.
- Rất tốt.
- Đó là biểu diễn JSONL của ba điểm dữ liệu đào tạo của chúng tôi.
- Được rồi.
- Dưới đây là một hàm nhỏ khác có tên là write Jsonl.
- Nó sẽ lấy các mục và tên tệp, sau đó ghi thông tin đó vào một tệp.
- Tuyệt vời.
### Muc 30

- Điều này cực kỳ đơn giản.
- Vậy chúng ta sẽ sử dụng cùng một thư mục jsonl ở đây mà chúng ta đã sử dụng trước đó khi thực hiện chế độ batch.
- Hãy tạo một tệp mới có tên Fine Tune Train để chứa toàn bộ tập dữ liệu tinh chỉnh của chúng ta.
- Và nhân tiện, chúng ta cũng sẽ có một tập dữ liệu riêng biệt gọi là validation.
- Bạn có thể đã nhận thấy rằng tôi cũng thường dành riêng 50 điểm dữ liệu để sử dụng cho việc kiểm tra.
- Vậy chúng ta cũng sẽ sử dụng chúng.
- Chúng tôi cũng sẽ ghi nội dung đó vào một tệp tin.
- Ồ, bắt đầu nhé.
## Phan 11

### Muc 31

- Và chúng tôi đã tạo ra hai tệp tin: tệp tin tinh chỉnh mô hình và tệp tin tinh chỉnh kiểm tra.
- Hãy vào thư mục jsonl của chúng ta và đảm bảo rằng chúng ta có thể thấy rằng, ừm, bây giờ chúng ta đang ở đâu?
- Jsonl.
- Được rồi, bắt đầu nhé.
- Có một chuyến tàu điều chỉnh tinh tế.
- Đây rồi.
- Nhìn xem tất cả những thứ này.
- Và tinh chỉnh quá trình xác thực.
### Muc 32

- Nên có 50 cái như vậy.
- Và bây giờ chúng ta bắt đầu.
- Ở đây nên có 100 cho bạn.
- Hãy đảm bảo rằng chỉ có 100 cho tôi.
- Sẽ có 20.000 vì tôi điên rồi.
- À, vậy tôi muốn chi thêm $4.
- Tôi muốn cố gắng hết sức để mang lại cho chúng ta điều gì đó, ừm, có giá trị.
- Đáng để dành thời gian.
### Muc 33

- À, vậy là xong.
- À, quay lại ngày thứ năm.
- Được rồi, bây giờ chúng ta sẽ yêu cầu OpenAI tạo một tệp tin.
- Tải lên tệp, ừm, của tệp JSONL này mà tôi sẽ cung cấp cho bạn.
- Và mục đích sẽ được tinh chỉnh.
- Và đây chính là nơi chúng ta thực hiện điều đó.
- Và tôi hy vọng điều này sẽ tương tự như vậy.
- Điều này sẽ quen thuộc với bạn.
## Phan 12

### Muc 34

- Bạn sẽ nghĩ: "À, mình nhận ra cái này." Trước đây, chúng tôi đã sử dụng Grok để tạo.
- Chúng tôi đã gửi một tệp tin và mục đích của chúng tôi là xử lý theo lô.
- Khi chúng tôi nói với Grok: "Này, chúng tôi muốn tải lên một tệp cho mục đích xử lý hàng loạt." Bạn biết không?
- OpenAI cũng có loại API tương tự.
- Tôi nghĩ tôi đã đề cập điều đó với bạn rồi.
- À, và đó là OpenAI tạo ra, và bạn có thể sử dụng nó cho các mục đích khác nhau hoặc trong trường hợp này, mục đích là tinh chỉnh.
- Và đó chính là những gì chúng tôi làm.
- Và hiện tại, chúng tôi đang tải lên một tệp tin lên OpenAI để thực hiện quá trình tinh chỉnh.
### Muc 35

- Và điều này thực sự khiến người ta phải suy nghĩ.
- Và nó sẽ rất nhanh cho bạn vì bạn chỉ có 100 mục trong đó.
- Tôi chạy nó và đây chúng ta đi.
- Nó có một ID tệp.
- Hãy nhớ rằng chúng ta cũng đã gặp trường hợp tương tự với Grok.
- Và chúng ta cũng có thể làm tương tự cho tệp xác thực của mình.
- Và đây là cách nó trông như thế nào.
- Tuyệt vời.
### Muc 36

- Chúng tôi vừa tải lên hai tệp tin lên OpenAI.
- Và nếu bạn không tin tôi, tôi có một liên kết nhỏ ở đây đến nền tảng OpenAI.
- Hãy nhấp vào đó.
- Chúng ta bước vào OpenAI.
- Chúng ta đang ở khu vực lưu trữ.
- Và bạn sẽ thấy ở đây một vài tệp, cụ thể là một vài tệp JSON mà tôi vừa tải lên cách đây vài giây.
- Trạng thái đã sẵn sàng.
- Nó có dung lượng 27 kilobyte.
## Phan 13

### Muc 37

- À, tệp xác thực này, tệp đào tạo có dung lượng 11MB.
- Bởi vì tôi có 20.000 thứ trong đó.
- Của bạn, có lẽ sẽ nhỏ hơn nhiều.
- Của bạn sẽ khoảng 50.000 hoặc 60.000.
- Vậy là các tệp đã được tải lên và sẵn sàng đang nằm trong OpenAI.
- Đã đến lúc chúng ta phải làm điều đó.
- Họ thậm chí còn nói rằng mục đích là để tinh chỉnh.
- Nó ở đó.
### Muc 38

- Họ đang ngồi ở đó.
- Họ đã sẵn sàng.
- Đã đến lúc chúng ta cần tinh chỉnh.
- Được rồi.
- Tiếp tục.
- Bước hai.
- Điều chỉnh chi tiết.
- Vậy lần này chúng ta sẽ làm việc với OpenAI.
### Muc 39

- Điều chỉnh chi tiết.
- Tạo.
- Được rồi.
- Đó là một cuộc gọi API.
- Đây là một cái mới.
- Đây là điều này.
- Chúng tôi không nghĩ rằng điều này giống với bất kỳ sản phẩm nào của Grok.
- Chúng ta cần cung cấp một tệp đào tạo.
## Phan 14

### Muc 40

- Đó là điều dễ dàng.
- Đó là tệp tin về tàu hỏa.
- Chúng tôi đã nhận được tệp xác thực.
- Đó là tệp xác thực cho mô hình.
- Chúng ta sẽ sử dụng GPT-4 Nano.
- Đây chính xác là nội dung tôi đã trích dẫn từ trang tài liệu đó.
- Bạn nên kiểm tra trang tài liệu nếu bạn đang chạy chương trình này.
- Và hãy đảm bảo rằng bạn sử dụng cùng một ID mô hình trên toàn bộ hạt giống.
### Muc 41

- Điều đó có nghĩa là bạn nhớ rằng chúng ta đang bắt đầu từ một tập hợp số ngẫu nhiên cố định, và bạn biết tại sao đó là số 42 và các siêu tham số.
- Chúng ta sẽ làm một cái.
- Kỷ nguyên.
- Kỷ nguyên là một lần quét qua toàn bộ dữ liệu.
- Việc thực hiện nhiều lần quét qua dữ liệu sẽ không có ý nghĩa.
- Tại sao lại không có ý nghĩa gì?
- À, vì chúng ta có rất nhiều dữ liệu.
- Nếu chúng ta muốn xử lý thêm dữ liệu, chúng ta nên thêm dữ liệu vào thay vì thực hiện hai lần xử lý trên cùng một dữ liệu.
### Muc 42

- Chúng tôi có rất nhiều dữ liệu, nên chúng tôi có quá nhiều dữ liệu để lựa chọn.
- Đó không phải là vấn đề của chúng tôi.
- Không cần thiết phải sử dụng kích thước lô cho epoch thứ hai.
- Đây là điều mà bạn nên thay đổi và thử nghiệm.
- Đây là một ví dụ về việc tối ưu hóa siêu tham số.
- À, thử và sai.
- À, đối với bạn, tôi thực sự khuyên bạn nên chọn tùy chọn đó vì bạn chỉ có 100 điểm.
- Thành thật mà nói, bạn có thể xem xét từng cái một.
## Phan 15

### Muc 43

- Nhưng tôi đang làm quá nhiều việc nên việc làm nhanh hơn và đạt được 16 điểm là điều khôn ngoan đối với tôi.
- Vậy tôi sẽ chạy chương trình này và nó sẽ khởi động và tắt đi.
- Nó đã biến mất.
- Đó là công việc tinh chỉnh.
- Tôi sẽ thay đổi lại thành 1 để khi bạn chạy nó, giá trị bên trong sẽ là 1 và kích thước lô là 1, điều này phù hợp hơn cho một tập dữ liệu rất nhỏ.
- Được rồi.
- Vậy bây giờ sau khi đã làm xong điều đó, chúng ta có thể làm là chúng ta có thể nói, "Này, tôi muốn liệt kê các tác vụ tinh chỉnh đang chạy hiện tại của mình." Và bằng cách đặt giới hạn là một, tôi chỉ muốn phiên bản mới nhất.
- Đó là cái mà tôi mới bắt đầu gần đây nhất.
### Muc 44

- Và bây giờ chúng ta bắt đầu.
- Chúng tôi nhận được một công việc tinh chỉnh, ừm, tốt.
- Bạn có thể thấy ở đây nó đang chạy.
- Bạn có thể thấy rằng điều đó phù hợp với công việc.
- Đó chính là ở đây.
- À, và chúng ta có thể xem thời gian nó được tạo ra.
- Nó chưa có lỗi nào cả.
- Điều đó tốt.
### Muc 45

- À, và, à, nó có một số tham số siêu.
- Kích thước lô, ừm, tốc độ học là tự động.
- Nó sẽ xác định tỷ lệ học tập mà nó muốn sử dụng.
- Và, ừm, bạn có thể thấy tất cả những gì đang diễn ra ở đây.
- Được rồi.
- Vậy bây giờ chúng ta có thể thu thập ID công việc này bằng cách lấy phần dữ liệu này và lấy ID đó.
- Hãy lấy ID đó đi.
- Để tôi in ra để đảm bảo chúng ta đã có đúng ID công việc.
## Phan 16

### Muc 46

- Được rồi.
- Bạn có thể thấy rằng ID đó ở đây khớp với ID này ở đây và ID này ở đây.
- Đây chính là ID của hệ thống mà chúng ta đang vận hành.
- Chúng ta có thể sử dụng OpenAI fine tuning retrieve cho ID này để lấy thông tin mới nhất về nó, và đây là kết quả.
- Chúng ta có thể thấy lại, không có lỗi nào cho đến nay.
- Điều đó tốt.
- À, và à, mô hình được tinh chỉnh không có nghĩa là nó chưa hoàn thành, và điều đó không có gì đáng ngạc nhiên.
- Có thể nó đã hoàn thành cho bạn với bộ dữ liệu nhỏ của bạn, nhưng đối với tôi, nó sẽ mất một chút thời gian.
### Muc 47

- À, đây là tỷ lệ học tập mà nó đã quyết định sử dụng, vì lý do gì đó.
- À, và, à, đúng vậy, chúng ta có thể thấy ở đây có rất nhiều thứ đang diễn ra, nhưng điều nó đang làm là hiện tại nó đang xác minh các tệp mà họ thích, à, OpenAI đã viết một số mã để kiểm tra các tệp cụ thể đó nhằm đảm bảo rằng tôi không cố gắng làm điều gì đó xấu.
- Tôi không có ý định huấn luyện mô hình cho mục đích xấu.
- Vậy nên nó đang kiểm tra dữ liệu của tôi để đảm bảo không có gì đáng ngờ trong đó.
- Và, ừm, hy vọng nó sẽ không phát hiện ra bất kỳ điều gì đáng ngờ vì tất cả những sản phẩm này đều được thu thập từ Amazon.
- Không có gì đáng sợ trong tập dữ liệu đào tạo này, nhưng nó vẫn tiếp tục.
- Đang xem xét mọi thứ.
- À, và bây giờ chúng ta có thể gọi các sự kiện tinh chỉnh mô hình của OpenAI.
### Muc 48

- Bạn truyền ID công việc và nói, "Này, hãy cho tôi tối đa mười sự kiện và chúng ta xem chúng trông như thế nào." Và điều chúng ta có thể thấy là cho đến nay chỉ có hai sự kiện xảy ra, và hai sự kiện đó là việc tạo ra công việc tinh chỉnh và hiện tại đang xác thực tệp.
- Và đây là điều sẽ mất một hoặc hai phút, có thể là mười phút, thậm chí là hai mươi phút.
- Vậy nên tôi sẽ đi và sẽ quay lại khi chúng ta có thêm điều để thảo luận.
- Và tôi cũng nên nhắc lại rằng, giống như trước đây, chúng ta cũng có thể vào và xem xét quá trình tinh chỉnh đang diễn ra.
- Nó nằm tại OpenAI.
- Điều chỉnh tinh tế và nó sẽ xuất hiện.
- Đây là phần điều chỉnh chi tiết ở bên trái.
- Đây là cùng một nơi.
## Phan 17

### Muc 49

- Đây là bảng điều khiển.
- Nếu bạn đã truy cập vào nền tảng, hãy nhấp vào bảng điều khiển.
- Cuộn xuống đây.
- Bạn sẽ thấy việc tinh chỉnh chi tiết ở đây.
- Vừa rồi chúng ta đang ở phần lưu trữ của hệ thống này để xem các tệp tin của chúng ta đang được lưu trữ tại đây.
- Chúng ta hiện đang ở phần tinh chỉnh, và bạn có thể thấy rằng hiện tại nó đang kiểm tra tính hợp lệ của tệp này cho bạn.
- Điều này lẽ ra đã hoàn thành khá nhanh, nên có thể bạn đã thấy phần tiếp theo cho tôi.
- Tôi đang ngồi đây xem nó đang được xác minh.
### Muc 50

- Đã xác thực được 5 phút cho đến nay.
- Tôi sẽ để nó tiếp tục.
- Và sau khi được xác minh, chúng ta sẽ có thêm một số vấn đề cần xem xét.
- Được rồi.
- Và bây giờ nó không còn kiểm tra bộ dữ liệu nữa.
- Điều chỉnh chi tiết đang được thực hiện.
- Vậy tôi thấy ở đây quá trình tinh chỉnh, tôi thấy tiến trình xoáy tròn đó.
- Và ở phía bên phải đây, tôi thấy thông tin về nó.
### Muc 51

- Phương pháp đào tạo được giám sát.
- Mô hình cơ bản là GPT-4-1 Nano.
- Và nếu tôi cuộn xuống, tôi có thể thấy các epoch là một kích thước lô.
- Remember là 16.
- Đây là tốc độ học mà nó đã chọn và hạt giống.
- À, và tôi thấy rằng thực ra đó là hệ số nhân tốc độ học.
- Vì vậy, có lẽ tỷ lệ học tập có lẽ là một con số nhỏ hơn rất nhiều so với con số đó.
- Nhưng đây là mức độ mà nó sẽ giảm thêm, theo suy đoán của tôi.
## Phan 18

### Muc 52

- À, nhưng OpenAI không tiết lộ tất cả các chi tiết bên trong về cách thức đào tạo hoạt động.
- Một số chi tiết cụ thể.
- Được rồi.
- Và bạn có thể thấy nó vừa xuất hiện ở đó.
- Tôi nghĩ nó sắp kết thúc rồi.
- À, vậy thì điều bạn có thể thấy ở đây là sự thay đổi về mức độ tổn thất trong biểu đồ này trong suốt quá trình của lô.
- Vì vậy, mức lỗ ban đầu khá cao.
- Và độ chính xác đột ngột tăng vọt, giống như bắt đầu từ mức thấp và đột ngột tăng lên.
### Muc 53

- À, và bạn có thể thấy ở đây là trạng thái.
- Điều này rất giống với những gì chúng ta đã thấy trong mã nguồn.
- Các tác vụ tinh chỉnh đã bắt đầu và các tệp đã được xác thực đã hoàn tất quá trình xác thực.
- Ồ, xin lỗi, tôi đang đi sai hướng.
- Được tạo và xác minh vào lúc, ừm, 41 phút sau đó.
- Đã hoàn tất việc xác minh.
- Điều đó mất khoảng tám phút.
- Và sau đó, ừm, công việc tinh chỉnh bắt đầu.
### Muc 54

- À, bây giờ có điều gì đó ở đây trông có vẻ đáng lo ngại, đây là dấu hiệu đầu tiên cho thấy mọi việc có thể không diễn ra theo kế hoạch.
- Bạn có thấy điều gì đó không ổn không?
- Vấn đề là.
- Vậy là, trước hết, tin vui là sự sụt giảm đã ập đến.
- Nhưng đây là điều mà bạn gần như luôn thấy trong quá trình đào tạo và không nên bị phân tâm.
- Lý do điều này xảy ra là vì định dạng của tất cả dữ liệu đào tạo của chúng ta rất tương đồng.
- Các nhãn của chúng tôi luôn bắt đầu bằng dấu đô la ($) và sau đó là câu trả lời.
- Và đó là kết thúc của thông điệp của chúng tôi.
## Phan 19

### Muc 55

- Và mô hình học rất nhanh.
- Đó là định dạng của tất cả các câu trả lời của chúng tôi.
- Chúng tôi không có giá, chúng tôi chỉ có ký hiệu đô la.
- Và khi nó đạt được định dạng và cấu trúc đúng, tổn thất sẽ ập đến.
- Chúng ta sẽ thảo luận về cách tính toán tổn thất thực tế vào tuần tới.
- Nhưng tất nhiên, trước tiên là phải nghĩ ra các đoạn văn bản khác nhau.
- Và nó nhanh chóng khẳng định rằng đây là câu trả lời đúng.
- Và thế là nó rơi xuống.
### Muc 56

- Điều khiến tôi hơi lo lắng là, và thực ra, đường màu tím này dường như trái ngược với những gì tôi sắp nói với bạn.
- Nhưng theo tôi, từ thời điểm đó trở đi, tôi không thấy xu hướng cho thấy sự suy giảm tiếp tục giảm bớt.
- Theo quan sát của tôi, về mặt trực quan, nó tất nhiên là dao động vì đôi khi nó hơi lệch, đôi khi lại đúng một chút, nhưng thực sự nó không học được nhiều.
- À, và nhìn kìa, đường kẻ màu tím mà OpenAI đang cố gắng vẽ.
- Xu hướng dường như cho thấy rằng nó không thể thực sự nhìn thấy.
- Nó nghĩ rằng mình đang làm tốt hơn, nhưng sau đó lại trở nên tồi tệ hơn.
- À, theo tôi thấy, dường như không có nhiều sự tiến bộ trong việc học tập diễn ra sau lợi ích ban đầu là có được định dạng đúng.
- Và điều này cũng khá nhất quán với những gì họ nói về việc, bạn biết đấy, có thể bạn cần 5050 ví dụ để có thể xác định chính xác định dạng phản hồi đúng.
### Muc 57

- Phần đó hoạt động tốt với chỉ một số lượng nhỏ ví dụ.
- Nhưng về mặt nâng cao khả năng dự đoán giá sản phẩm mô hình, tôi không thấy điều đó thể hiện rõ trong dữ liệu hiện tại, nhưng tất nhiên, kết quả sẽ nói lên tất cả.
- À, vậy đây vẫn đang trong giai đoạn tinh chỉnh.
- Đây là kết quả tạm thời.
- Tôi sẽ quay lại khi chúng ta có một số kết quả cuối cùng để xem xét.
- Được rồi, vậy quá trình đào tạo đang ở giai đoạn cuối cùng.
- Tôi đã quay lại và đã thu nhỏ màn hình trình duyệt một chút để chúng ta có thể nhìn thấy nhiều hơn những gì đang diễn ra.
- Điều chỉnh chi tiết.
## Phan 20

### Muc 58

- Vẫn đang trong quá trình thực hiện ở đây.
- Nếu chúng ta cuộn xuống, chúng ta có thể thấy biểu đồ này ở đây.
- Đợi đã, tôi sẽ quay lại từ đầu.
- Biểu đồ này đang cho chúng ta thấy kết quả.
- Lại một lần nữa, đường đi rất gập ghềnh.
- Khó có thể xác định liệu có xu hướng nào ở đây hay không.
- Có một số cách có thể giúp bạn nhận diện xu hướng.
- Một là bạn có thể làm mịn đường cong một chút, như bạn có thể thấy tôi đã làm trước đó, để thử xem liệu có thể nhận ra một xu hướng nào đó hay không.
### Muc 59

- Và bạn có thể bật chế độ ghi nhật ký và có thể nó sẽ trông tốt hơn một chút vào cuối cùng.
- Khi xem xét theo cách này, có một xu hướng rất nhỏ, nhưng nó thực sự làm nổi bật những thay đổi nhỏ ở biên độ.
- Được rồi.
- Và đây cũng là biểu đồ tương tự để đánh giá độ chính xác.
- À, và ở đây chúng ta có thể thấy khung thời gian của sự việc đã xảy ra.
- Chúng tôi đã khởi động lô cho tôi vào lúc 40 phút sau 41 phút sau khi xác minh, quá trình này mất khoảng tám phút.
- Và sau đó là quá trình tinh chỉnh chi tiết.
- Việc tinh chỉnh chỉ mất chưa đầy 20 phút.
### Muc 60

- Đã hoàn thành.
- Hiện tại, hệ thống đang đánh giá xem mô hình được tinh chỉnh có còn tuân thủ các chính sách khác nhau của OpenAI hay không.
- Về mặt này, chúng ta chưa từng dạy nó làm điều xấu.
- Chúng tôi đã dạy nó để tính toán chi phí của các vật dụng.
- Không phải là thứ gì đó, mà là thứ gì đó không vui.
- Và hy vọng rằng họ sẽ nhanh chóng nhận ra điều đó và thông báo cho tôi rằng tôi có thể sử dụng mô hình này.
- Một việc khác chúng ta có thể làm là chuyển sang phần chỉ số, nơi chúng ta sẽ thấy các con số trong bảng, và ở đây chúng ta sẽ thấy độ mất mát trong quá trình đào tạo, tức là độ mất mát được tính toán cho từng lô dữ liệu nhỏ của chúng ta.
- Nhưng chúng ta cũng sẽ thấy hàm mất mát xác thực.
## Phan 21

### Muc 61

- Đó là gì.
- Đó là việc sử dụng tập dữ liệu kiểm tra của chúng ta, bao gồm 50 điểm dữ liệu mà chúng ta đã cung cấp và không được sử dụng cho mục đích đào tạo.
- Họ bị giữ lại.
- Và nó liên tục kiểm tra với cùng 50 mục để chúng ta có thể đánh giá một cách công bằng liệu chúng ta có tiến bộ trong quá trình đào tạo hay không.
- Vậy đây là cách chúng ta có thể hy vọng xác định được.
- À, vậy chúng ta bắt đầu với 1.138 làm điểm xuất phát.
- Được rồi.
- Hãy xem điều gì sẽ xảy ra.
### Muc 62

- 1.138 tăng lên 1.179.
- Điều đó còn tệ hơn nhiều.
- Thật không may, và tất nhiên, có một số tiếng ồn ngẫu nhiên trong đây, nên rất khó để biết liệu chúng ta có nằm trong khoảng ± hay không.
- Nhưng lần đầu tiên chúng tôi thực hiện bài kiểm tra xác thực này, kết quả còn tệ hơn 1.138.
- Ừm, để xem chúng ta còn nghĩ ra được gì nữa.
- À, 1.141 khá tương tự với điểm xuất phát.
- À, bạn có thể thấy thanh cuộn 1.133.
- Một sợi tóc có tốt hơn so với điểm xuất phát của chúng ta không?
### Muc 63

- Nhưng tôi tin rằng cái tiếp theo là, để xem nào, 1.284 đã xấu đi đáng kể.
- Và theo tôi, điều này cho thấy rằng vẫn chỉ là sự dao động ngẫu nhiên, và lỗi xác thực thực sự có một khoảng sai số lớn xung quanh nó.
- Và chúng ta chỉ đang xoay quanh vấn đề đó.
- Tôi nghi ngờ rằng chúng ta thực sự đang tạo ra một mô hình tồi tệ hơn.
- Nhưng hãy xem đây, chúng ta có 0.932, dường như là một giá trị mất mát xác thực tốt hơn nhiều.
- Hãy cứ tiếp tục đến cùng và xem chúng ta sẽ kết thúc ở đâu, xem điều này cho chúng ta biết điều gì.
- Quay trở lại 1.225.
- Vậy thì, nói cho công bằng, kết quả cuối cùng cho thấy giá trị mất mát xác thực lần cuối cùng, ừm, cao hơn so với khi chúng ta bắt đầu.
## Phan 22

### Muc 64

- Nhưng tôi không nên suy diễn quá nhiều về điều đó vì bạn có thể thấy các con số dao động quá nhiều.
- Điều đó cho thấy chúng ta không phải.
- Nếu chúng ta đang có sự cải thiện, thì nó nằm trong phạm vi sai số, vì vậy chúng ta sẽ không thể nhận thấy điều đó với tập dữ liệu xác thực tương đối nhỏ này.
- Ừm, được rồi.
- Đó là kết quả tạm thời của chúng tôi.
- Đợt xử lý đã hoàn tất thành công.
- Đã hoàn thành.
- Đó là tên của lô sản phẩm đã hoàn thành của chúng tôi.
### Muc 65

- Đã đến lúc chúng ta quay lại với mã nguồn và bắt đầu áp dụng những điều này vào thực tế.
- Vậy là chúng ta lại quay trở lại với con trỏ.
- Và bạn còn nhớ là chúng ta đã làm điều này ngoài trời.
- Sự kiện.
- Nếu tôi chạy lại lần này, lần trước chúng ta chỉ nhận được hai sự kiện.
- Có lẽ bây giờ chúng ta sẽ được chứng kiến toàn bộ chuỗi sự kiện.
- Điều đó nhất quán với những gì chúng ta vừa thấy trong giao diện người dùng.
- Đây là chúng.
### Muc 66

- Bạn có thể thấy rằng ở đây đã có một số bước hoàn thiện.
- Và sau đó, mô hình tinh chỉnh mới đã được tạo ra để đánh giá dựa trên các chính sách sử dụng và các kiểm tra điều chỉnh đã hoàn tất.
- Chính sách sử dụng đã hoàn tất.
- Công việc đã được hoàn thành thành công.
- Vui mừng!
- Đã đến lúc hành động!
- Vậy tên mô hình được tinh chỉnh là OpenAI.
- Tối ưu hóa quá trình thu thập dữ liệu, tối ưu hóa mô hình.
## Phan 23

### Muc 67

- Đó là khu đất từng nằm ở đâu đó phía trên này.
- Trường này bây giờ sẽ được điền vào.
- Hãy xem nó.
- Hãy in ra tên là gì.
- À, đó là tên.
- Và có lẽ điều đó sẽ hoàn toàn giống với những gì chúng ta vừa thấy trong giao diện người dùng cách đây một lúc.
- Bạn cũng có thể sao chép và dán nó từ đó, tất nhiên, nhưng đây là cách thực hiện điều đó một cách lập trình.
- Được rồi.
### Muc 68

- Vậy đây là tin nhắn thử nghiệm của chúng tôi.
- Bây giờ tôi phải cập nhật điều này để khớp chính xác với lời nhắc mà chúng ta đã sử dụng trước đó.
- À, đây là lời nhắc của chúng tôi.
- Đây là thông điệp.
- Để tôi lấy cái này.
- Hãy quay lại đây và thay thế tin nhắn này bằng tin nhắn kia.
- Vậy hãy ước tính giá của sản phẩm này.
- Trả lời với giá.
### Muc 69

- Không có giải thích.
- Lần này.
- Chúng tôi chỉ đang nhập nội dung tin nhắn.
- Chúng tôi không cung cấp phản hồi cho trợ lý.
- Tất nhiên, có một số người đã tham gia khóa học và tại thời điểm này đã mắc lỗi với các tin nhắn thử nghiệm của họ.
- Họ đã bao gồm phản hồi của trợ lý, và khi họ chạy thử nghiệm, họ đạt được điểm số hoàn hảo, không có lỗi nào, 100% kết quả đều chính xác và họ cho biết đã tinh chỉnh mô hình.
- Điều đó hoàn hảo, và tôi phải thông báo cho họ rằng kết quả đó là rất khó xảy ra, và khả năng cao là họ đã làm hỏng bộ dữ liệu thử nghiệm vị giác của mình.
- Vì vậy, hãy luôn đảm bảo rằng khi chạy các bài kiểm tra, bạn không cung cấp cho nó câu trả lời mà bạn muốn nó phản hồi bằng câu trả lời của trợ lý.
## Phan 24

### Muc 70

- Vậy để tôi giải thích cho bạn hiểu ý tôi muốn nói là gì.
- Nếu tôi nhận được tin nhắn thử nghiệm cho thử nghiệm số 0, nó yêu cầu ước tính giá của sản phẩm này.
- Trả lời với một mức giá.
- Đây là pedal distortion guitar yêu thích của chúng tôi, ừm, từ thương hiệu Blood Noise cũ.
- Và đây là nó.
- Và chúng ta chỉ có tin nhắn dành cho người dùng duy nhất.
- Chúng tôi không có phản hồi từ trợ lý.
- Đây là phản hồi của trợ lý mà mô hình được tinh chỉnh của chúng tôi sẽ tạo ra cho chúng ta.
### Muc 71

- Được rồi, cuối cùng cũng đến lúc quyết định.
- Dưới đây là một hàm GPT-4 được tinh chỉnh bằng Nano, chúng tôi gọi là OpenAI Create cho tên mô hình.
- Chúng tôi không truyền vào GPT-4 một nano.
- Chúng tôi sử dụng tên gọi rất phức tạp của mô hình được tinh chỉnh kỹ lưỡng này, FTE, GPT-4-1 Nano Personal Pricer, và ý tưởng thú vị ở cuối tên đó.
- Từ "pricer" được thêm vào vì khi chúng tôi thiết lập batch này lần đầu tiên, chúng tôi đã thêm hậu tố "pricer".
- Điều đó chỉ cho chúng ta cơ hội để có thứ gì đó ở đó mà chúng ta có thể nhận ra.
- Vậy tôi có thể phân biệt được tất cả các mô hình khác nhau của mình.
- Ừm, được rồi.
### Muc 72

- Đó chính là mô hình của chúng tôi.
- Đó chính là những gì chúng ta đang truyền vào ở đây.
- Chúng tôi gửi các tin nhắn thử nghiệm và chúng tôi chỉ cần, ừm, bảy token.
- Nghe có vẻ ổn.
- Đó là câu trả lời của chúng tôi.
- Chúng tôi trả lại nó.
- Đây là chức năng của chúng tôi.
- Được rồi, vậy hãy in giá thực tế của bài kiểm tra số 0.
## Phan 25

### Muc 73

- À, cái pedal méo tiếng máu cũ.
- Và xem điều gì.
- Giá thực tế của Guess GPT 4 One Nano là 219.
- Mô hình được tinh chỉnh của chúng tôi dự đoán là 199.
- Được rồi, nó khá gần.
- À, tôi không biết so sánh với trước đây thế nào, nhưng bây giờ đã đến lúc, cuối cùng, chúng ta phải tiến hành cuộc thử nghiệm lớn của mình.
- Hãy xem nào.
- Được rồi, bắt đầu nhé.
### Muc 74

- Bắt đầu.
- Nó đang chạy ngay bây giờ.
- Nó đang thực hiện các tính toán khá nhanh chóng.
- Khi GPT-4.1 Nano được tinh chỉnh, phiên bản tinh chỉnh của nó đã vượt qua 200 điểm dữ liệu thử nghiệm của chúng tôi.
- Và đây là kết quả.
- Được rồi.
- Và đúng vậy, đó là một sự thất vọng.
- Đó là một sai lầm lớn.
### Muc 75

- Đó là, ừm, $75,91.
- Hãy ghi điều đó xuống tờ giấy.
- À, tin tốt là, nó vẫn vượt trội so với mức độ hiệu suất của con người và nhiều mô hình khác, nhưng nó kém hơn so với các mô hình tiên tiến nhất của chúng tôi.
- Và thực tế, một cách kỳ lạ, nó kém hơn GPT-4 Nano.
- Chưa được tinh chỉnh.
- Việc tinh chỉnh chi tiết không mang lại hiệu quả.
- Thực tế, điều đó đã cản trở kết quả.
- Chúng ta đã lùi lại một chút.
## Phan 26

### Muc 76

- Và đây là sự biến động lớn trong con số này.
- Thỉnh thoảng khi tôi chạy chương trình này, nó dự đoán một trong các con số là khoảng $10.000.
- Nó lệch hẳn ra.
- À, và đôi khi nó dường như hoạt động tốt.
- Và tôi đã chạy thử nghiệm này một vài lần với các loại đào tạo khác nhau, với GPT-4-1-Mini, tôi đã có thể đạt được độ chính xác với 200 điểm dữ liệu.
- Tôi gặp lỗi 96, ừm, với 2000, tôi gặp lỗi ở mức 79, mức này tương tự như với nano.
- Với 2000 điểm dữ liệu, tôi nhận được kết quả là 82.
- Khi sử dụng 20.000 điểm dữ liệu tương tự, trước đây tôi nhận được kết quả là 67,75, nhưng lần này kết quả kém hơn một chút và đôi khi khi chạy thuật toán, nó tạo ra những con số cực kỳ cao.
### Muc 77

- Và lỗi này rất nghiêm trọng.
- Bạn cũng có thể tự mình nhận ra điều đó.
- Vậy chuyện gì đang xảy ra?
- Thật đáng thất vọng.
- Chúng tôi đã thực hiện việc tinh chỉnh.
- Tôi đã nói với bạn suốt cả tuần về sức mạnh của việc tinh chỉnh.
- Cuối cùng, chúng ta tiến hành điều chỉnh chi tiết và kết quả có phần kém hơn.
- Hoặc ít nhất, có thể nói rằng có rất nhiều sự đa dạng.
### Muc 78

- Có lẽ chúng ta thực sự chưa tạo ra sự khác biệt đáng kể.
- Tại sao lại như vậy?
- Có chuyện gì đang xảy ra?
- Tại sao việc tinh chỉnh không hiệu quả với chúng ta?
- Hãy cùng thảo luận về điều đó trong phần trình chiếu.
- Được rồi, hy vọng là bạn không cảm thấy quá thất vọng vào lúc này.
- Bạn như thể, ừm, vì tôi đã làm.
- Cũng có thể.
## Phan 27

### Muc 79

- Tôi đã cảnh báo bạn rằng sẽ có điều gì đó không mấy tốt đẹp sắp xảy ra.
- Vậy chuyện gì đã xảy ra?
- Đang có chuyện gì vậy?
- Làm thế nào chúng ta có thể hiểu được điều này?
- Điều quan trọng là phải hiểu tại sao người ta lại tiến hành tinh chỉnh mô hình biên.
- Và khi công cụ đó không phù hợp với mục đích của bạn, bạn cần tập trung vào vấn đề đang gặp phải.
- Vì vậy, lý do bạn tinh chỉnh Mô hình Frontier là do những trường hợp sử dụng như vậy.
- Bạn muốn thiết lập phong cách hoặc giọng điệu cho một mô hình.
### Muc 80

- Bạn muốn cải thiện độ tin cậy của nó trong việc tạo ra một loại đầu ra cụ thể, giống như cách tinh chỉnh được sử dụng, để đảm bảo rằng nó tạo ra Jason theo một định dạng cụ thể trước khi chúng ta có các đầu ra có cấu trúc.
- À, bạn muốn tạo ra các trường hợp xử lý lỗi, khi hệ thống thực hiện theo một lệnh phức tạp và gặp sự cố, hoặc xử lý các trường hợp ngoại lệ.
- Điều tương tự cũng áp dụng khi bạn muốn thực hiện một kỹ năng hoặc tác vụ mà không thể giải thích rõ ràng trong lệnh.
- Vì vậy, bằng cách cung cấp cho nó nhiều ví dụ, bạn muốn nó hiểu rõ những gì công việc yêu cầu.
- Và đó không chính xác là tình huống mà chúng ta đang gặp phải.
- Chúng tôi đang cố gắng giảng dạy một nội dung rất cụ thể với nhiều ví dụ minh họa.
- Và theo một cách nào đó, bạn biết đấy, chúng ta đã có một nhiệm vụ có thể được diễn đạt một cách rất rõ ràng trong một lời nhắc.
- Chúng tôi biết chính xác điều mình muốn, và chúng tôi có thể trực tiếp yêu cầu điều đó từ GPT cho một phiên bản mini.
### Muc 81

- Và nó có kiến thức vô cùng phong phú về thế giới.
- Nó đã được đào tạo với hàng trăm triệu đô la chi phí đào tạo và lượng dữ liệu khổng lồ để có được tất cả chuyên môn này.
- Chúng ta có thể đặt câu hỏi đó, và đó chính xác là điều chúng ta đã làm hôm qua.
- Việc tinh chỉnh mô hình dựa trên các ví dụ cụ thể như vậy không tự nhiên phù hợp với mô hình biên giới đã được nhồi nhét quá nhiều kiến thức, và chúng ta đang cố gắng chỉ điều chỉnh nó, tinh chỉnh nó một chút với một số giá sản phẩm rất cụ thể.
- Và do đó, kết quả là chúng ta không thể cải thiện hiệu suất một cách đáng kể.
- Tôi nghi ngờ rằng chúng ta cũng không làm tình hình trở nên tồi tệ hơn một cách đáng kể.
- Tôi nghi ngờ rằng chúng ta vừa đưa vào quá trình này một lượng lớn nhiễu.
- Và đó là lý do tại sao chúng ta đang nhận được những con số có vẻ khác nhau.
## Phan 28

### Muc 82

- Thỉnh thoảng tốt hơn, thường thì tệ hơn.
- À, nhưng mà, ừm, đúng vậy, tất cả là vì đó không phải là lý do thực sự để tinh chỉnh mô hình biên.
- Nhưng tôi có tin vui cho bạn.
- Đó chính là lý do tại sao bạn có thể tinh chỉnh một mô hình nguồn mở.
- Vậy đây là một trở ngại tạm thời, nhưng có thể bạn đã hy vọng rằng tôi sẽ đưa ra cho bạn những con số ấn tượng về việc tinh chỉnh, một mô hình tiên tiến.
- Điều này thực sự đã trở thành một bài học quý giá cho chúng tôi về việc điều chỉnh mô hình biên giới ở đâu là hợp lý.
- Khi bạn đang thực hiện việc điều chỉnh hành vi của nó hoặc cố gắng khiến nó tuân theo một phong cách cụ thể, điều này không phải để truyền đạt loại kỹ năng cốt lõi này.
- À, nhưng mà chúng ta sẽ xem thử nó hoạt động như thế nào vào tuần tới.
### Muc 83

- À, và, à, đúng vậy, tôi nghĩ tôi muốn nhấn mạnh một điểm chung là, nhìn chung, việc các thí nghiệm gặp trục trặc.
- Đó là một phần của công việc.
- Đó chính là công việc của một nhà khoa học dữ liệu.
- Và vì vậy, chúng ta nên vui mừng vì đã có điều gì đó mang lại kết quả không tốt, vì điều đó cho thấy chúng ta đang liên tục cải tiến.
- Chúng tôi đang tiến hành nghiên cứu và phát triển (R&D).
- Khi bạn làm việc với tư cách là một kỹ sư phần mềm, một vấn đề luôn là điều tồi tệ.
- Một lỗi là một lỗi.
- Đó không bao giờ là điều tốt.
### Muc 84

- Bạn biết đấy, có thể bạn sẽ học cách không làm điều đó nữa, nhưng không phải là, ừm, có điều gì tích cực để lấy từ đó mà bạn mong muốn.
- Thật là, ôi, tuyệt quá!
- Tôi đã tìm ra lỗi rồi.
- À, nhưng trong khoa học dữ liệu, điều đó không đúng.
- Như vậy, nghiên cứu và phát triển (R&D) là quá trình thử nghiệm, khám phá và thất bại, điều này có nghĩa là bạn đã loại bỏ một phương pháp tiếp cận cho vấn đề hiện tại.
- Đó là một điểm học tập quan trọng.
- Vậy nên tôi biết mình là người luôn lạc quan, tích cực.
- Vậy có lẽ tôi sẽ nói điều gì đó như thế này.
## Phan 29

### Muc 85

- Nhưng tôi đang cố gắng đảm bảo với bạn rằng mặc dù các con số là.
- Tôi đoán là họ tệ lắm.
- Đây vẫn là một điểm quan trọng trên con đường của chúng ta để thực sự giải quyết triệt để vấn đề kinh doanh này.
- Và như vậy, việc thiết lập các thí nghiệm, một số thành công và một số thất bại.
- Đó là một phần của công việc.
- Đó là những gì nó bao gồm.
- Và đúng vậy, chúng ta nên hài lòng với điều đó ít nhất.
- Nhưng trong thời gian này, thách thức dành cho bạn trong tuần này, tuần thứ sáu, là hãy thử tái tạo lại điều này và thực hiện một số điều chỉnh nhỏ với một tập dữ liệu rất nhỏ.
### Muc 86

- Đừng làm 20.000 của tôi, chỉ cần làm 20.
- À, tôi thực sự nghĩ rằng con số 20.000 sẽ vượt qua con số trước đó một chút, vì nó đã làm được điều đó khi tôi chạy thử trước đây, nhưng lần này thì không, không rõ lý do tại sao.
- Vậy là xong.
- À, đôi khi nó dường như hoạt động tốt hơn, nhưng với 20, hãy thử điều chỉnh các tham số siêu (hyperparameters).
- Hãy thử các phương pháp như thay đổi số epoch, thử các kích thước batch khác nhau.
- Sử dụng nó như một cách để hiểu những gì đang xảy ra.
- Hãy xem xem bạn có thể làm tốt hơn tôi không.
- Có thể bạn có thể.
### Muc 87

- À, ừm.
- Việc thực hiện các lần tinh chỉnh này khá nhanh chóng, chỉ cần một lượng nhỏ.
- Thực hành là điều tốt.
- Thật tốt khi thấy độ mất mát trong quá trình huấn luyện và độ mất mát trong quá trình kiểm tra, để có cái nhìn tổng quan về những gì đang xảy ra.
- À, và bạn cũng có thể xem xét sử dụng điều này cho một trường hợp sử dụng mà nó phù hợp hơn.
- Nếu một trong những trường hợp sử dụng này phù hợp với bạn và là điều bạn đang muốn thực hiện, thì có thể xem xét thử nghiệm việc tinh chỉnh mô hình cho mục đích đó, thực hiện một việc gì đó thực sự mang lại hiệu quả, tức là tinh chỉnh mô hình tiên tiến để đó trở thành nhiệm vụ cần thực hiện.
- À, có lẽ đó không phải là kết luận mà bạn mong đợi từ một tuần mà tất cả đều tập trung vào việc tinh chỉnh.
- Và tất cả những gì tôi có thể nói với bạn là tôi có sự cứu rỗi dành cho bạn.
## Phan 30

### Muc 88

- Tuần tới hứa hẹn sẽ là một tuần đầy thú vị khi chúng ta bắt tay vào việc tinh chỉnh mô hình nguồn mở.
- Trong quá trình này, bạn sẽ làm việc với một mô hình nhỏ hơn, cho phép bạn có nhiều quyền kiểm soát hơn trong việc tinh chỉnh, từ đó có cơ hội thử nghiệm các mô hình khác nhau và thực sự khám phá cách chúng ta có thể tạo ra sự khác biệt.
- Tinh chỉnh mô hình để có thể cạnh tranh với các mô hình lớn hơn nhiều so với nó.
- Đó là tất cả những gì đang chờ đón bạn trong tuần tới.
- Nhưng trước tiên, tôi không muốn để bạn chỉ ở trong tình trạng tồi tệ, nên tôi muốn có một điều gì đó.
- Một kết quả tốt đẹp cho tuần này.
- Còn một việc nữa cần làm.
- Vậy nên tôi có điều gì đó khác biệt dành cho bạn.
### Muc 89

- Tôi muốn đưa bạn quay lại con trỏ chuột để có một bất ngờ nhỏ nữa.
- Một điều gì đó để bạn mỉm cười vào cuối tuần.
- Đó là gì nhỉ?
- Bạn đang thắc mắc.
- Để tôi chỉ cho bạn.
- Hãy di chuyển đến con trỏ.
- Được rồi, vậy chúng ta đã quay lại với con trỏ.
- Hãy vào thư mục tuần sáu.
### Muc 90

- Và tôi muốn cho bạn xem rằng tôi đã thêm một tệp khác.
- Tôi đã quyết định thử xây dựng một mô hình mới để trình bày cho bạn xem, với hy vọng đạt được một số kết quả tốt.
- Và tôi sẽ quay lại việc xây dựng mạng thần kinh.
- Một lần nữa, hãy nhớ rằng chúng ta đã tạo ra một mạng nơ-ron cơ bản cách đây vài ngày, nhưng tôi nghĩ, tại sao không để lại cho các bạn một ví dụ không phải là mạng nơ-ron cơ bản.
- Đây thực chất là một mạng thần kinh sâu, có thể không sâu bằng kiến trúc transformer, nhưng chắc chắn là một bước tiến trong hướng đó, một hệ thống khá phức tạp, thể hiện đỉnh cao của mạng thần kinh và những gì chúng có thể đạt được.
- Vậy nếu chúng ta vào thư mục tuần 6 trong gói Pricer ở đây, bạn sẽ thấy thực tế có một mô-đun được gọi là Mạng thần kinh sâu.
- Và đây là cách xây dựng một mạng thần kinh nhân tạo chuyên nghiệp.
- À, bạn có thể thấy đây là một mô hình mạng nơ-ron sâu.
## Phan 31

### Muc 91

- Điều này tương tự như trước đây, nó là một lớp con của mô-đun NN.
- Và nó vẫn giữ nguyên các lớp như trước đây.
- Có điều gì đó hơi khác bây giờ.
- Nó có nhiều lớp được tạo thành từ khối dư thừa này.
- Và điều này bản thân nó đã bao gồm nhiều lớp khác nhau.
- Lớp tuyến tính.
- Bạn có thể nhớ là chúng ta đã từng có điều đó trước đây.
- Có một số lớp khác được gọi là layernorm.
### Muc 92

- Lại là hàm ReLU mà chúng ta đã sử dụng trước đây.
- Thuật toán Dropout được thiết kế để đảm bảo rằng mô hình không bị quá khớp (overfit).
- Một lớp tuyến tính khác.
- Một tiêu chuẩn khác.
- Và đúng vậy, tất cả những điều này được gom lại thành một khối.
- À, mạng nơ-ron sâu chính nó chứa, à, mười lớp hoặc số lớp được chỉ định, trong đó mỗi lớp này là một mô-đun, và mỗi mô-đun này lại có nhiều lớp.
- Vậy đây là một mạng thần kinh khá lớn.
- Cách đếm số lớp trong mạng thần kinh đôi khi có sự khác biệt giữa các người, nhưng tùy thuộc vào cách đếm cụ thể, bạn có thể nói rằng mạng thần kinh này có thể có từ 10 lớp đến 40 hoặc 50 lớp, tùy thuộc vào cách bạn đếm.
### Muc 93

- À, nhưng thực ra có rất nhiều lớp được ghép lại với nhau.
- À, và đây là phạm vi của mạng thần kinh.
- Điều đó không hẳn là phức tạp.
- À, nhưng sau đó tôi có một công cụ gọi là Deep Neural Network Runner, chủ yếu là một công cụ hỗ trợ.
- Và điều này có nhiều mã tương tự như trước đây, nhưng nó chỉ có thêm một chút phức tạp hơn.
- Nhưng nó có chức năng đào tạo này, bao gồm bốn bước đào tạo.
- Nó có đường chuyền về phía trước.
- À, đây rồi.
## Phan 32

### Muc 94

- Bước truyền về phía trước, tính toán tổn thất, bước truyền về phía sau, và sau đó là bước tối ưu hóa.
- Và ở đây có rất nhiều thứ lặt vặt.
- Tôi đang thực hiện một phương pháp thông minh để chuẩn hóa dữ liệu đầu vào.
- Tôi đang áp dụng nhiều kỹ thuật chuyên nghiệp để tối ưu hóa hiệu suất của mạng thần kinh.
- À, và sau đó tôi có một hàm suy luận ở cuối đây, nó chỉ thực hiện suy luận cho nó.
- Đây chỉ là một mô hình của một mạng thần kinh nhân tạo cấp chuyên nghiệp hơn.
- Và bây giờ chúng ta sẽ làm gì là xem, vậy nên nó không phải là LLM.
- Nhưng đây lại là điều mà chúng ta có thể tự rèn luyện và có thể xem được hiệu suất mà chúng ta có thể đạt được từ, ừm, nên đây không phải là học máy truyền thống.
### Muc 95

- Đây chính là ứng dụng thực tế của học sâu (deep learning).
- Điều này có thể mang lại cho chúng ta điều gì?
- Hãy cùng tìm hiểu.
- Được rồi, nếu bạn đang ở trong thư mục tuần sáu, tôi có một cuốn sổ tay mới ở đây có tên là "Redemption".
- Chạy đi!
- Mở ra.
- Chuyến đi chuộc tội.
- Điều này hoàn toàn tùy chọn.
### Muc 96

- Bạn có thể xem những gì tôi có ở đây.
- Bạn có thể tự mình thực hiện nếu muốn trải nghiệm sự kỳ diệu của điều này.
- Vậy tôi sẽ thực hiện một số thao tác nhập dữ liệu, bao gồm việc nhập mô hình mạng nơ-ron sâu mà chúng ta vừa xem qua.
- Và chúng ta sẽ sử dụng toàn bộ tập dữ liệu.
- Bạn cũng có thể thực hiện đào tạo chỉ với tập dữ liệu nhỏ.
- Vậy hãy tải tất cả dữ liệu đó vào như trước đây khi tải các mục đầy đủ, vì tôi đang sử dụng bộ dữ liệu đầy đủ.
- Và sau khi hoàn thành việc đó, tôi sẽ gọi trình chạy mạng thần kinh sâu của chúng ta, trình này sẽ chuẩn bị mọi thứ cho dữ liệu đào tạo và 1000 điểm dữ liệu đầu tiên trong tập dữ liệu kiểm tra của chúng ta.
- Vậy thì mất khoảng 30 giây để tải toàn bộ tập dữ liệu của chúng ta trong quá trình đào tạo.
## Phan 33

### Muc 97

- Và sau đó chúng ta sẽ bắt đầu làm việc một cách suôn sẻ.
- Tất cả đã được tải vào.
- Vậy bây giờ chúng ta sẽ chạy chương trình này.
- Bây giờ chúng ta đang thiết lập mạng thần kinh của mình.
- Bạn còn nhớ mạng thần kinh nhân tạo cơ bản mà chúng ta đã đề cập trước đây.
- Nó có khá nhiều thông số.
- Tôi nghĩ là 600.000.
- Đúng vậy chứ?
### Muc 98

- Khoảng 600.000 tham số trong mạng nơ-ron cơ bản.
- Cái này.
- Đây là một mạng thần kinh mạnh mẽ hơn.
- Chúng ta sẽ có thêm các thông số.
- Hãy xem còn bao nhiêu nữa.
- Nó sắp in ra.
- À, và, à, đúng rồi.
- Như tôi đã nói, đây là điều mà bạn có thể tự mình rèn luyện, hoặc bạn có thể tải sẵn phiên bản mà tôi đã rèn luyện sẵn.
### Muc 99

- Vậy nó có 289 triệu tham số.
- Vậy nên, ý tôi là, nó vẫn chưa phải là mô hình biên giới với hàng tỷ hay hàng nghìn tỷ tham số, nhưng nó vẫn có rất nhiều thứ ở đó.
- Đó là một mẫu máy khá cồng kềnh, chắc chắn rồi.
- Và nó đang sử dụng GPU của tôi hoặc máy Mac Apple Silicon của tôi.
- Và nó có thể đề xuất sử dụng Cuda cho bạn nếu bạn đang sử dụng máy tính PC có card đồ họa Nvidia.
- Được rồi, bây giờ bạn có một sự lựa chọn.
- Có ba lựa chọn.
- Thứ nhất, bạn có thể không làm gì cả và chỉ cần quan sát tôi để xem kết quả mà tôi đạt được.
## Phan 34

### Muc 100

- Thứ hai, bạn có thể chọn tải xuống tệp tin.
- Bạn có thể truy cập vào liên kết Google Drive này không?
- Ở đó có một tệp có tên là "deep Neural Networks PyTorch".
- Bạn có thể lấy tệp này và đặt nó vào thư mục tuần sáu.
- Bạn có thể thấy tôi đã có của mình ngay ở đó.
- Nó bị bỏ qua bởi Git.
- Tôi chưa đưa nó vào kho lưu trữ vì nó khoảng bảy gigabyte hoặc gì đó.
- Ồ không, đó là rừng ngẫu nhiên.
### Muc 101

- Nó gần như là hai gigabyte.
- Nó không to lắm.
- Đó là hai buổi biểu diễn.
- Vẫn quá lớn để lưu trữ trong thư viện, nhưng bạn có thể lưu trữ nó trên Google Drive để có thể tải xuống nếu muốn.
- Và sau đó, chỉ cần một dòng lệnh để tải nó vào.
- Nếu bạn muốn tự mình đào tạo mô hình này, mỗi epoch sẽ mất khoảng 40 phút.
- Vậy việc chạy 5 epoch mất khoảng 4 giờ hoặc ít hơn một chút.
- À, và tôi đã chạy chương trình này trong Redemption Train rồi.
### Muc 102

- Bạn có thể thấy rằng điều này đã được thực thi, nó đã được thực thi.
- Mỗi epoch mất 40 phút và đã hoàn thành.
- Và đó chính xác là những gì cuốn sổ tay Redemption Train cũng giống như vậy, nhưng nó thực sự chạy hai dòng này để thực sự huấn luyện mạng thần kinh.
- Nhưng chúng ta sẽ không làm điều đó ở đây.
- Chúng ta chỉ cần tải nó vào.
- Tôi đã có tệp này rồi.
- Tôi đã lưu nó ngay tại đây.
- Đây rồi.
## Phan 35

### Muc 103

- Mạng nơ-ron sâu, PyTorch.
- Và nó đã tải nó vào.
- Chỉ mất vài giây để tải nó vào sau khi đã được huấn luyện sẵn.
- Đó là một cách làm hoàn toàn hợp lý.
- Và bây giờ, chúng ta chỉ cần thực hiện bài kiểm tra.
- Và như thường lệ với những thứ này, chúng ta đóng gói nó trong một mạng thần kinh sâu nhỏ gọn.
- Nó chỉ đơn giản là gọi hàm `runner dot inference`, điều này hoàn toàn giống với cách chúng ta đã làm trước đây.
- À, chúng ta hãy chạy thử xem kết quả thế nào.
### Muc 104

- Thật sự rất nhanh.
- Xong rồi!
- Giao diện trông đẹp.
- Lỗi 46.49 46.49.
- Hãy cùng xem xét điều đó.
- Điều đó thật đáng kinh ngạc.
- Vậy là chúng ta đã tự phát triển mạng thần kinh của riêng mình.
- Chúng tôi không đánh bại GPT 5-1.
### Muc 105

- Đó vẫn đang dẫn đầu.
- Nhưng chúng ta đã rất rất gần.
- Và chúng tôi đã đánh bại Claude 45 opus, một mô hình có hàng nghìn tỷ tham số.
- À, và, à, chúng ta đã đánh bại nó khá dễ dàng.
- Ồ, vậy đây là, đây thực sự là điều rất thú vị để xem.
- Và đây là một mô hình hoàn toàn tự làm.
- Đây là mã được viết từ đầu.
- Và từng lớp một trong PyTorch.
## Phan 36

### Muc 106

- Bạn có thể tìm hiểu kỹ về nó.
- Bạn có thể tự xem mã nguồn.
- Đây là một dự án mà chúng tôi đã xây dựng từ đầu.
- Nếu bạn đang tự hỏi, khoan đã, làm sao một mô hình chỉ có khoảng hai, bất kể là gì, 289 triệu tham số có thể xử lý được mô hình khổng lồ với hàng nghìn tỷ tham số.
- Lý do là vì chúng ta đã huấn luyện nó.
- Chúng tôi đã tự đào tạo mô hình này bằng dữ liệu riêng của mình và đã đào tạo nó với 800.000 điểm dữ liệu.
- Và nó không bị phân tâm bởi tất cả những việc khác mà nó có thể làm.
- Nó không biết cách viết thơ về tổng thống.
### Muc 107

- Nó không biết cách làm thế nào để trả lời email bán hàng của bạn, viết bài đăng trên LinkedIn hay bất kỳ mục đích nào mà mọi người đang sử dụng LLMs.
- Nhưng điều nó có thể làm là dự đoán giá của một sản phẩm, và nó có thể làm điều đó khá chính xác trong khoảng $46.
- À, gần như tốt ngang với GPT 5.1, mô hình mạnh nhất trên hành tinh.
- Vậy nên tôi nghĩ điều đó thật tuyệt vời.
- Đây là một điểm quan trọng mà chúng ta cần đạt được.
- Tôi nhận ra rằng nó hơi lệch hướng, lệch hướng, lệch hướng vì chúng ta đang tinh chỉnh các mô hình biên, nhưng tôi muốn kết thúc với một kết quả thực sự tuyệt vời.
- Và tôi khuyến khích bạn thử nghiệm với điều này và khám phá nó.
- Và nếu bạn muốn, nếu bạn đã quan tâm đến việc tìm hiểu về các mạng thần kinh cơ bản mà không cần xem xét các mô hình transformer, đây là cơ hội để bạn tham gia và xem mã nguồn tại đó.
### Muc 108

- Hãy nhờ một người có bằng Thạc sĩ Luật (LLM) giải thích một số nội dung đó.
- Nếu bạn không chắc chắn, hãy xem xét một số siêu tham số mà bạn có thể điều chỉnh ở đó.
- Bạn có thể điều chỉnh các thông số như kích thước lô, tốc độ học và các thông số khác.
- Hãy thử nghiệm với nó và xem liệu bạn có thể làm tốt hơn nữa với một mạng thần kinh sâu tự làm và tận hưởng điều đó.
- Bây giờ chúng ta hãy xem xét tất cả kết quả của chúng ta bên cạnh nhau.
- Và đây là kết quả mới nhất của chúng ta trên mọi mặt.
- Đây là sai số dự đoán.
- Bạn còn nhớ những cải tiến của chúng ta với machine learning truyền thống.
## Phan 37

### Muc 109

- Đây là màn trình diễn thảm hại của Ed.
- Mạng thần kinh nhân tạo vanilla gốc của chúng tôi.
- Đây là các mô hình tiên phong.
- Đang cải thiện.
- Đang cải thiện.
- Đây chắc chắn là kết quả đáng thất vọng của chúng ta.
- Tôi không thể nói điều đó chỉ bằng cách tinh chỉnh mô hình.
- Tôi sẽ nói, như tôi đã nói rằng lần đó tôi làm điều đó, tôi đã đạt được kết quả tốt hơn GPT-4, Nano và được tinh chỉnh.
### Muc 110

- Nhưng rõ ràng có rất nhiều biến thể trong mô hình tinh chỉnh này và nó chưa mang lại kết quả như mong đợi cho chúng ta.
- À, nhưng đây là một cách hay để kết thúc.
- Mạng nơ-ron sâu mà chúng tôi đã huấn luyện bằng toàn bộ dữ liệu của mình đã hoạt động rất tốt.
- Nó gần như, gần như đã đánh bại GPT-5-1, nhưng nó đã đánh bại các mô hình tiên tiến khác, bao gồm Gemini 3 Pro, một cách dễ dàng.
- Vậy là một cách tuyệt vời để kết thúc tuần, với những thí nghiệm tuyệt vời và những kết quả đáng khen ngợi.
- Chúng tôi đã gặp một số khó khăn, nhưng qua quá trình đó, chúng tôi đã học hỏi được nhiều điều và hiện tại, chúng tôi hoàn toàn sẵn sàng để đi sâu hơn vào việc tinh chỉnh các mô hình nguồn mở vào tuần tới.
- Wow.
- Bạn có tin được không?
### Muc 111

- Bạn đã đi được 75% chặng đường này rồi đấy.
- Tôi đã không cung cấp cho bạn các tỷ lệ phần trăm trong một thời gian ngắn.
- Và có thể bạn đang tự hỏi, bây giờ tôi đang ở đâu?
- 75% tôi đánh giá cao tuần này.
- Có cảm giác như vậy.
- Có rất nhiều việc đang diễn ra.
- Đó là một nhiệm vụ quá nặng nề.
- Nhưng mà, nó đáng giá.
## Phan 38

### Muc 112

- Tôi hy vọng chúng ta đã thảo luận rất nhiều vấn đề.
- Tôi hy vọng bạn có một hiểu biết thực tế về những gì cần thiết để thực hiện các tác vụ như tạo các tệp JSON, chạy mô hình ở chế độ batch, và thực hiện tinh chỉnh mô hình thông qua API.
- Bạn có khả năng nhận biết khi nào nên làm điều đó và có lẽ khi nào không nên làm điều đó.
- Và bạn cũng đã có một chút hiểu biết về những gì cần thiết để làm việc với machine learning truyền thống.
- À, nó không phải là điều quá phổ biến, nhưng nó vẫn còn tồn tại rất nhiều.
- Và đó là một nền tảng tuyệt vời.
- Luôn là lựa chọn tốt để sử dụng làm mô hình cơ sở.
- Và bạn thậm chí còn có cơ hội tiếp xúc với học sâu và việc xây dựng một mạng thần kinh từ đầu như vậy.
### Muc 113

- Lại nữa sao?
- Không phải là điều gì đó thường xảy ra hàng ngày.
- Nhưng thật tuyệt khi đã có nền tảng đó và hiểu cách nó hoạt động, phòng trường hợp bạn cần phải làm điều đó.
- Vì vậy, đây là những tài liệu rất quan trọng.
- Điều quan trọng khác trong tuần này là chúng ta đã giải quyết một vấn đề thương mại, cụ thể là xác định giá cả dựa trên mô tả sản phẩm.
- Và chúng tôi đã xây dựng một khung thử nghiệm, một khung thử nghiệm để đánh giá một chỉ số.
- Chúng tôi đã tập trung phân tích kỹ lưỡng về sự chênh lệch giá tuyệt đối này.
- Đó là chỉ số vừa là chỉ số mẫu vừa là chỉ số kết quả kinh doanh.
### Muc 114

- Và chúng tôi đã theo dõi điều đó suốt quá trình, và chúng tôi đã theo dõi tiến trình của các thí nghiệm của mình.
- Không phải tất cả các thí nghiệm đều diễn ra theo kế hoạch.
- Không phải là phiên bản mới nhất và cũng không phải là thí nghiệm trên con người.
- Trời ơi.
- À, nhưng nhiều trong số họ đã rất tuyệt vời.
- Và, bạn biết đấy, GPT-5.1 thực sự đã tỏa sáng.
- Và đó chính là mục đích của việc thực hiện các thí nghiệm, tối ưu hóa siêu tham số (hyperparameter optimization), hay còn gọi là thử và sai.
- Đây chính là nơi bạn tìm thấy kết quả.
## Phan 39

### Muc 115

- Đây là nơi bạn có thể đạt được hiệu quả cao trong việc giải quyết các vấn đề kinh doanh của mình.
- Được rồi.
- Chúc mừng bạn đã hoàn thành 75% chặng đường!
- À, nghỉ ngơi một chút, nghỉ ngơi, nghỉ ngơi một chút.
- Hãy có một giấc ngủ ngon.
- Bởi vì khi chúng ta bắt đầu vào tuần tới, mọi thứ sẽ thực sự trở nên rất hấp dẫn.
- Đây là nơi tôi sẽ đến nếu tôi không quá phấn khích.
- Đây là lúc tôi trở nên vô cùng phấn khích.
### Muc 116

- Khi chúng ta bắt đầu tinh chỉnh mô hình mã nguồn mở.
- Và mục tiêu của chúng ta cho tuần tới là nói rằng, hãy nhìn xem, các mô hình nguồn mở là miễn phí.
- Chúng rất nhỏ, chúng ta sẽ sử dụng một mô hình thu nhỏ, và chúng ta sẽ xem liệu có thể đạt đến mức độ gần với hiệu suất của mô hình tiên tiến không?
- Ví dụ, liệu chúng ta có thể sử dụng GPT-4 Nano và các thông số của nó để có thể đạt gần với GPT-5, và làm điều đó bằng một mô hình nhỏ như Llama 3.2, một mô hình thực sự nhỏ.
- Chúng ta có thể làm gì với điều đó?
- Nếu chúng ta sử dụng tinh chỉnh, đó chính là mục tiêu.
- Sẽ thật sự, thật sự thú vị.
- Tôi không thể chờ đợi để cho bạn xem.
### Muc 117

- Tôi sẽ gặp bạn vào tuần thứ bảy.
- Sẽ có ngay.

