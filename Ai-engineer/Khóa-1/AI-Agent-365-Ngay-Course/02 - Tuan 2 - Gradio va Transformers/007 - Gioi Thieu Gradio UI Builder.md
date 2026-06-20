# Ngay 007 - Tuan 2, ngay 2

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-007.txt

## Tong quan

- Chu de mo dau: Vâng, tôi rất vui mừng khi bạn đã vượt qua được tất cả các API đó.
- File goc: day-007.txt
- So y chinh: 807
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Vâng, tôi rất vui mừng khi bạn đã vượt qua được tất cả các API đó.
- Bạn đã đến tuần thứ hai, ngày thứ hai, đây là một trong những ngày tôi yêu thích nhất.
- Hôm nay là ngày tôi giới thiệu cho bạn niềm vui mang tên gradio.
- Về cơ bản, đây là cách xây dựng giao diện người dùng.
- Nếu bạn tệ trong việc xây dựng giao diện người dùng như tôi, thì đây là UI dành cho các loại không phải giao diện người dùng và rất thú vị.
- Và nó đặc biệt quan trọng trong thế giới khoa học dữ liệu vì nó hướng đến việc xây dựng giao diện người dùng khoa học dữ liệu.
- Trên thực tế có hai khuôn khổ rất phổ biến như thế này.
- Có Gradio và có Streamlit.
### Muc 2

- Và tôi thích cả Gradio và Streamlit.
- Và thực tế, như tôi đã đề cập, ứng dụng Outsmart mà tôi đã giới thiệu cho bạn trước đây là ứng dụng Streamlit.
- Và cả hai đều thực sự khá khác nhau.
- Họ có rất nhiều phong cách khác nhau, nhưng tôi thích cả hai.
- Và nếu phải chọn một thứ tôi yêu thích nhất thì tôi sẽ chọn một thứ tôi yêu thích nhất.
- Sẽ là Gradio, nhưng chỉ chênh lệch một chút thôi.
- Và đó chính là những gì tôi sẽ chỉ cho bạn trong tuần này.
- Nhưng những gì bạn có thể làm, bạn có thể nói về máy biến áp, ít nhất là nền tảng, các mô hình tiên tiến hàng đầu, bạn có thể tự tin sử dụng API hoàn thành trò chuyện.
### Muc 3

- Bạn có thể sử dụng API Frontier.
- Ý tôi là, trời ơi, bạn có thể sử dụng rất nhiều thứ trong số chúng, bao gồm cả những thứ như bộ nhớ đệm nhanh chóng, bao gồm cả trừu tượng hóa và bộ định tuyến, v.v.
- Được thôi.
- Nhưng hôm nay bạn sẽ có thể nói về Gradio.
- Bạn sẽ có thể tạo một giao diện người dùng đơn giản và có thể kết nối Gradio với Frontier Llms.
- Tôi có rất nhiều điều dành cho bạn.
- Được rồi, vậy Gradio là gì?
- Gradio là thư viện Python nguồn mở được tạo ra bởi một công ty hiện thuộc sở hữu của Hugging Face.
## Phan 2

### Muc 4

- Vậy nên bây giờ nó là một phần của Hugging Face.
- Và nó cung cấp cho bạn cách chỉ cần viết một đoạn mã Python để tạo ra giao diện người dùng.
- Và tôi sẽ yêu cầu bạn giữ một bên.
- Như thế nào?
- Chính xác thì chuyện gì đang diễn ra khi bạn làm điều này?
- Bởi vì sẽ có một số thứ kỳ diệu và giao diện người dùng sẽ xuất hiện.
- Và bạn có thể thắc mắc, giao diện người dùng này như thế nào?
- Kiểu như, nó là gì vậy?
### Muc 5

- Thực ra đây là một ứng dụng React.
- Vậy nên React được viết bằng JavaScript TypeScript.
- Vậy đó là đâu?
- Tôi sẽ cố gắng tiết lộ tất cả những điều đó sau khi bạn đã có chút cảm nhận về nó.
- Vậy trước tiên hãy gạt bỏ sự hoài nghi, hãy xem giao diện người dùng, sau đó tôi sẽ giải thích những gì thực sự đang diễn ra.
- Nó làm điều đó bằng cách nào?
- Ờ, thế nên tôi đã nói là dễ mà.
- Thực sự rất dễ.
### Muc 6

- Đây là một trong những ví dụ từ trang web của họ về cơ bản là bạn nhập Gradio.
- Có một dòng tuyệt vời là import Gradio thành GR mà mọi người đều làm, vì lý do nào đó, nó được import thành GR.
- Và sau đó nếu bạn có một hàm như thế này có hàm greet, thì bạn có thể tạo một giao diện người dùng cho phép bạn nhập dữ liệu.
- Bạn có thể nhấn nút gửi.
- Hàm Python mà bạn đã viết sẽ được gọi khi bạn nhấn nút gửi và bạn sẽ thấy kết quả trong file output.
- Vì vậy, nó cho phép bạn mô tả một giao diện chỉ với các đầu vào, đầu ra, nút bấm, sau đó bạn có thể đưa một số hàm Python vào và nó sẽ xây dựng một giao diện và kết nối mọi thứ lại với nhau.
- Và nó thực sự hiệu quả.
- Tim, như bạn sẽ thấy.
## Phan 3

### Muc 7

- Được rồi.
- Và bây giờ chúng ta sẽ bắt tay ngay vào thực hiện ba việc.
- Chúng ta sẽ tạo một UI cho các lệnh gọi API tới các mô hình frontier.
- Chúng ta sẽ tạo tờ rơi giới thiệu công ty ngay từ tuần đầu tiên.
- Và chúng ta sẽ đưa nó vào UI, điều này sẽ rất tuyệt.
- Và chúng ta sẽ có tính năng phát trực tuyến và giảm giá trong giao diện người dùng.
- Và nó sẽ thực sự dễ dàng.
- Được thôi.
### Muc 8

- Bạn đã sẵn sàng chưa?
- Bạn kiểu như ổn thôi.
- Anh ấy cứ nói rằng mọi chuyện sẽ dễ dàng.
- Liệu nó có thực sự dễ dàng không?
- Vâng, bạn có thể tự mình đánh giá.
- Chúng ta hãy thử xem nhé.
- Chúng ta hãy chuyển đến con trỏ.
- Được thôi.
### Muc 9

- Và chúng ta đang ở Casa.
- Chúng ta sẽ đi vào thư mục tuần thứ hai.
- Và chúng ta sẽ đến tuần thứ hai, ngày ...
- Chúng ta sẽ xây dựng một giao diện người dùng (UI) bằng cách sử dụng framework Gradio cực kỳ đơn giản và chuẩn bị tận hưởng niềm vui.
- Được rồi.
- Chúng ta bắt đầu với một vài lệnh nhập, một số lệnh nhập khá đơn giản.
- Và bây giờ chúng ta phải nhập Gradio làm anh chàng.
- Ồ đúng rồi, thế là xong.
## Phan 4

### Muc 10

- Trên thực tế, vì một lý do nào đó, việc này cần có thời gian.
- Lần này chỉ mất một giây, nhưng đôi khi phải mất tới 10 giây để nhập gói này.
- Vì vậy, nếu bạn đang ngồi đó chờ đợi thì đừng lo lắng.
- Được thôi.
- Bây giờ tôi sẽ tải dot EMV của mình vào.
- Và tôi chỉ kiểm tra xem tôi có mang theo chìa khóa không.
- Bây giờ, như thường lệ trên khóa học này, bạn không cần phải có bất kỳ chìa khóa nào cả.
- Bạn có thể sử dụng Olama tại địa phương.
### Muc 11

- Bạn có thể sử dụng AI mở nếu có.
- Bạn có thể sử dụng Anthropic và Google nếu có, hoặc bất kỳ công cụ nào bạn muốn.
- Hướng dẫn thứ chín cung cấp cho bạn hướng dẫn chính xác.
- Nhưng thành thật mà nói, sau ngày hôm qua tôi nghĩ bạn biết chính xác phải làm gì.
- Bạn có thể sử dụng Open Router.
- Bạn có thể.
- Bạn có thể vào thị trấn.
- Tất cả đều như nhau.
### Muc 12

- Chúng tôi sẽ sử dụng thư viện máy khách Python AI mở.
- Vậy thì tất cả đều giống hệt nhau.
- Và thực tế là ở đây tôi sẽ thiết lập thư viện máy khách OpenAI Python và sau đó là Anthropic và Gemini.
- Tôi cũng sẽ làm như vậy.
- Thủ thuật thông thường, vẫn là thư viện máy khách Python nhưng thay đổi URL cơ sở, các điểm cuối khác nhau.
- Hiện tại chúng ta có OpenAI Anthropic và Gemini.
- Chúng ta có nên sử dụng chúng không?
- Được rồi, chúng ta hãy thực hiện một API hoàn thành trò chuyện rất đơn giản.
## Phan 5

### Muc 13

- Thực ra tôi vừa xóa ô đó.
- Vì vậy, tôi có thể gõ nó cho những người muốn xem tôi gõ.
- Chúng ta bắt đầu thôi.
- Vì vậy, tôi muốn viết một hàm gọi GPT 4.
- 1 mini sử dụng thư viện Python OpenAI.
- Có lẽ bạn biết rõ điều này đến mức có thể gõ đúng tất cả những thứ này.
- Chắc chắn không phải thế này nữa.
- Và chúng ta sẽ gọi nó là tin nhắn GPT.
### Muc 14

- Và chức năng này sẽ cần một lời nhắc.
- Vì vậy, chỉ cần một lời nhắc.
- Và sau đó chúng ta sẽ gọi OpenAI.
- Đầu tiên, chúng ta sẽ đưa ra danh sách từ điển thông thường theo cách mà chúng tôi gọi là OpenAI.
- Và đây rồi.
- Tôi chỉ cần nhấn phím Tab.
- Được rồi.
- Vì vậy, nó sẽ có thông báo hệ thống mà tôi đã xác định ở đây.
### Muc 15

- Và sau đó là lời nhắc được truyền vào hàm.
- Được rồi.
- Có vẻ ổn đấy.
- Và bây giờ tôi sẽ nói phản hồi là OpenAI hoàn thành việc tạo ra.
- Những thứ khác nhau mà chúng ta có thể truyền vào là gì?
- Bạn nhớ một trong số chúng là mô hình sẽ thực hiện GPT 4.
- 1 mini và cái còn lại là tin nhắn.
- Đấy, nó đây rồi.
## Phan 6

### Muc 16

- Và sau đó chúng tôi trả về nội dung tin nhắn phản hồi bằng không.
- Đó là cách đơn giản để gọi ChatGPT để gọi GPT.
- Xin lỗi, ChatGPT là sản phẩm chúng tôi gọi là GPT.
- Thực ra tôi sẽ dành một phút để nói nhanh.
- Tôi đã nói nhiều lần rằng đây là thứ gọi là Chat Completions API, đây là API đầu tiên mà OpenAI đưa ra.
- Đó là thứ mà mọi người sử dụng nhiều nhất.
- Đó chỉ là thứ hoàn tất cuộc trò chuyện đã được truyền vào.
- Hiện tại, OpenAI có một số API khác.
### Muc 17

- Quan trọng nhất là nó có một API gọi là API phản hồi.
- Và nếu bạn truy cập trang web của OpenAI, họ sẽ cho bạn biết trong tài liệu của họ rằng họ khuyến khích bạn sử dụng API phản hồi thay vì API hoàn thành trò chuyện, vì nó có nhiều chức năng hơn.
- Nó có chức năng sử dụng những thứ gọi là công cụ được quản lý và nhiều thứ khác nữa.
- Và họ nói với bạn rằng đó là API tốt hơn, mạnh mẽ hơn để sử dụng.
- Và đây là chiêu trò của OpenAI.
- Và vì vậy tôi muốn cảnh báo bạn đừng tin vào lời nói của nó.
- Vâng, đúng vậy.
- API phản hồi mạnh mẽ hơn và có nhiều chức năng hơn.
### Muc 18

- Nhưng có lẽ có hai điều bạn nên biết về điều đó.
- Thứ nhất, chức năng bổ sung đó chủ yếu là chức năng trả phí.
- Nếu bạn muốn sử dụng các công cụ quản lý bổ sung mà họ cho phép, bạn phải trả thêm phí.
- Chúng là những thứ như chạy mã từ xa, chạy trình duyệt từ xa.
- Một số là miễn phí, nhưng hầu hết đều phải trả phí.
- Vì vậy, đây là một điều cần lưu ý.
- Và điều thứ hai cần lưu ý là API phản hồi là thứ bị khóa trong hệ sinh thái của OpenAI.
- Đây không phải là điều phổ biến và được chia sẻ rộng rãi trên tất cả các nhà cung cấp.
## Phan 7

### Muc 19

- Vì vậy, nếu bạn đăng ký API phản hồi, bạn sẽ bị ràng buộc vào hệ sinh thái OpenAI.
- Và bạn không muốn làm điều đó vì chúng ta sẽ sử dụng nhiều mô hình khác nhau, như mọi người vẫn làm trong ngành, và bạn thường không muốn bị ràng buộc với một nhà cung cấp so với tất cả các nhà cung cấp khác.
- Nhìn chung, chắc chắn có những lúc bạn nên sử dụng API phản hồi.
- Nhưng nhìn chung, API hoàn thành trò chuyện là lựa chọn nên cân nhắc.
- API chuẩn chung đơn giản được sử dụng trên nhiều mô hình khác nhau.
- Và có một vài trường hợp ngoại lệ, nhưng đó là nguyên tắc chung tuyệt vời.
- Vâng, tôi rất vui vì được trò chuyện nhanh với bạn.
- Tôi đã tự hỏi và muốn nêu vấn đề đó ra từ lâu rồi.
### Muc 20

- Đấy, thế là xong.
- Được rồi.
- Vậy là chúng ta đã viết xong hàm này.
- Bây giờ chúng ta sẽ gọi hàm có câu hỏi hôm nay là ngày mấy.
- Sau đó nó sẽ thực hiện cuộc gọi này tới GPT và có thể tự hỏi điều này sẽ nói gì.
- Và nó sẽ ghi ngày hôm nay là ngày 7 tháng 6 năm 2024.
- Và bạn kiểu như, cái gì cơ?
- Có chuyện gì thế?
### Muc 21

- Vâng, vấn đề là khoảng thời gian đó cách xa tôi khoảng một năm rưỡi và thậm chí còn hơn thế nữa đối với bạn.
- Tôi cho rằng vấn đề ở đây là những mô hình này, như chúng ta đã nói tuần trước khi chúng ta yêu cầu họ nói về điểm yếu của họ, chúng được đào tạo tại một thời điểm nào đó và có một thời điểm mà dữ liệu đào tạo kết thúc, đó là ngày cuối cùng họ được đào tạo và ngày đó được gọi là thời điểm kết thúc đào tạo.
- Và họ không có bất kỳ thông tin đào tạo nào ngoài thông tin đào tạo bị cắt bỏ đó.
- Và trong trường hợp của mô hình này, thời điểm đó là vào khoảng tháng 6 năm 2024.
- Vậy là phạm vi hiểu biết của nó về GPT bốn một mini đã hết.
- Ừm, và bạn có thể nói, được thôi, nhưng nếu tôi hỏi câu hỏi đó với ChatGPT, nó sẽ trả về ngày hôm nay.
- Và đúng vậy, đó là vì ChatGPT là sản phẩm được xây dựng dựa trên mô hình này.
- Và có những người như bạn và tôi đã viết mã vào đó để đảm bảo rằng chúng ta cập nhật lời nhắc hệ thống theo ngày hiện tại và chúng ta làm những việc như thế.
## Phan 8

### Muc 22

- Vì vậy, nếu bạn sử dụng sản phẩm, bạn sẽ nhận được nhiều chức năng hơn được tích hợp sẵn bởi những người như bạn và tôi.
- Nếu bạn gọi trực tiếp mô hình, bạn sẽ gặp phải những lỗi như lỗi cắt kiến thức mà mô hình này rất hay mắc phải.
- Được rồi, như vậy là chúng ta đã hoàn thành một số công việc cơ bản.
- Chúng tôi đã viết ra thứ gì đó gọi là LLM.
- Tôi muốn bạn gạt LLMs sang một bên.
- Chúng ta sẽ quay lại với Llms sau.
- Bây giờ chúng ta sẽ chỉ nói về UI, UI khoa học dữ liệu.
- Được rồi.
### Muc 23

- Chúng ta sẽ bắt đầu với một hàm rất đơn giản.
- Đây không phải là điều gì quá khó khăn.
- Chúng ta bắt đầu thôi.
- Nó sẽ được gọi là Def Shout.
- Shout sẽ lấy một số văn bản làm dữ liệu đầu vào.
- Sau đó nó sẽ in.
- Shout đã được gọi với thông tin đầu vào đó.
- Để chúng ta có thể in nó.
### Muc 24

- Ừm và sau đó tôi có thể thấy con trỏ là tệ nhất.
- Con trỏ sẽ điền mọi thứ vào cho tôi.
- Dừng lại.
- Ừ, vậy thì điều chúng ta sẽ làm là lấy văn bản được truyền vào làm đầu vào, chuyển đổi nó thành chữ hoa và trả về phiên bản chữ hoa.
- Vậy thì trả về dấu chấm ở trên như thế này.
- Ừm, đúng vậy, thứ gì đó rất phức tạp.
- Nếu tôi gọi shout bằng từ hello, thì những gì chúng ta mong đợi sẽ thấy là câu lệnh print và sau đó là hello.
- Viết hoa trở lại.
## Phan 9

### Muc 25

- Đấy, thế là xong.
- Shout đã được gọi bằng in nhưng hello và sau đó hello được viết hoa.
- Được thôi.
- Bây giờ chúng ta sẽ phải làm một việc khá phức tạp.
- Chúng ta sẽ thử xây dựng một giao diện người dùng.
- Chúng ta sẽ muốn xây dựng thứ gì đó có thể khởi chạy máy chủ web chạy cục bộ.
- Điều đó sẽ cung cấp một giao diện người dùng phản ứng để đưa điều này lên hàng đầu, cho phép người dùng tương tác với đoạn mã Python này.
- Ở đây để gọi hét.
### Muc 26

- Được rồi.
- Và đây là cách chúng tôi thực hiện.
- Chúng ta gõ giao diện GR.
- Giao diện GR là một trong những cách đơn giản nhất để làm việc với Gradio.
- Tạo cho tôi một giao diện mới.
- Được thôi.
- Điều đầu tiên chúng ta phải nói với Gradio là chức năng của nó là gì?
- Chúng ta đã viết mã Python nào là cốt lõi của ứng dụng này?
### Muc 27

- Và đối với chúng tôi đó chính là chức năng hét lên.
- Đó là chức năng khoa học dữ liệu mà chúng tôi muốn đưa vào giao diện người dùng.
- Vậy bạn nói chức năng tương đương với tiếng hét.
- Thực ra bạn không cần điều đó.
- Đây là một kiểu thông lệ, nhưng bạn chỉ cần nói "hét lên".
- Ồ, giờ thì bạn để ý nhé, tôi không làm điều gì như thế này đâu.
- Tôi không gọi shout và tôi không gọi shout với hello.
- Tôi chỉ truyền vào tên của hàm đó thôi.
## Phan 10

### Muc 28

- Và bạn có thể rất quen thuộc với điều này nếu bạn đã từng lập trình, nếu không phải là lần đầu tiên bạn thấy điều này, nó có thể khiến bạn choáng ngợp.
- Chúng ta không gọi hàm shout, chúng ta chỉ truyền nó vào như một biến.
- Và điều đó có nghĩa là chúng ta đang cung cấp nó cho Gradio để Gradio có thể chọn gọi hàm này tại bất kỳ thời điểm nào trong tương lai.
- Nó biết đó là hàm mà chúng ta muốn được gọi trong tương lai.
- Và khi bạn làm như vậy, nó được gọi là lệnh gọi lại.
- Thứ này là tiếng hét gọi lại mà Gradio có thể gọi lại bất cứ lúc nào nó muốn.
- Được thôi.
- Được rồi.
### Muc 29

- Bây giờ hàm này có văn bản đầu vào và có văn bản đầu ra.
- Nó trả về văn bản.
- Và vì vậy chúng ta phải cho Gradio biết rằng nó có đầu vào và có đầu ra.
- Và gradient cần phải làm gì đó với nó.
- Và chúng ta làm điều đó bằng cách nào?
- Nó rất tinh vi.
- Chúng ta nói input inputs plural equals và chúng ta nói text box, nghĩa là chúng ta muốn có một hộp văn bản.
- Và bất cứ thứ gì trong hộp văn bản đó mà chúng ta muốn đưa vào đầu vào.
### Muc 30

- Được thôi.
- Và đưa ra bất cứ kết quả nào từ hàm này.
- Chúng tôi muốn đưa nội dung đó vào hộp văn bản.
- Được rồi.
- Được thôi.
- Và còn một điều nữa là Gradio có thể cung cấp cho bạn rất nhiều thứ có sẵn, kiểu như có cả miễn phí.
- Và thực ra chúng ta không muốn điều đó.
- Nó được gọi là chế độ đánh dấu.
## Phan 11

### Muc 31

- Và nếu bạn nói chế độ đánh dấu là không bao giờ.
- Khi đó nó sẽ không bổ sung thêm chức năng này.
- Đây là một công cụ đặc biệt trong khoa học dữ liệu mà bạn có thể muốn đánh dấu kết quả là không đúng.
- Nhưng chúng ta không cần công cụ đặc biệt đó.
- Được thôi.
- Và sau đó chúng ta phải thực hiện một số công việc rất phức tạp vì về cơ bản chúng ta sẽ muốn tạo ra một máy chủ ứng dụng có thể chạy ứng dụng này, tạo ra giao diện phản ứng và phục vụ giao diện phản ứng đó, bất kỳ ai truy cập vào máy chủ ứng dụng, rất nhiều công việc kỹ thuật ở đây.
- Vì vậy, cần tới vài trăm dòng mã để có thể thực hiện được điều này.
- Và không, không phải vậy, mà là dot launch này.
### Muc 32

- Đúng rồi, đúng rồi.
- Và bây giờ chúng ta có thể chạy thử và xem điều gì xảy ra.
- Chúng ta bắt đầu thôi.
- Tôi sẽ chạy nó.
- Bùm!
- Giao diện người dùng sẽ xuất hiện.
- Được rồi.
- Ừm, và, ừm, hãy xem điều gì xảy ra nếu chúng ta nhập từ xin chào vào đây.
### Muc 33

- Nhấn mạnh vào đó và chúng ta sẽ nhận được lời chào được hét lên trong đầu ra.
- Nếu tôi cuộn xuống, chúng ta sẽ thấy nó được in ngay bên dưới giao diện người dùng.
- Đã gọi lệnh Shout với dữ liệu đầu vào.
- Xin chào?
- Và, ừ, tôi chắc là bạn không ngạc nhiên đâu.
- Chào bạn.
- Nếu tôi nhấn nút này, chúng ta sẽ lên cao và có mũ.
- Và nếu chúng ta kéo xuống, chúng ta sẽ thấy.
## Phan 12

### Muc 34

- Biểu đồ đó đã được gọi bằng dữ liệu đầu vào.
- Chào bạn.
- Vậy thì những gì bạn thấy ở đây trong đầu ra của sổ ghi chép thực chất là một trang web.
- Vấn đề ở đây là Gradio đang chạy một máy chủ ứng dụng và cung cấp trang web này cho bất kỳ ai truy cập vào.
- Và bạn có thể vào liên kết này xuất hiện ngay tại đây và bạn sẽ thấy chính mình khi nhấp vào liên kết đó.
- Bạn sẽ có một trang web với giao diện người dùng như thế này, bạn có thể nhập hello và nhấn submit, trang web sẽ hiển thị lời chào.
- Nó thậm chí còn chào hỏi nữa.
- Ừ, ừ, đúng rồi, việc này thực hiện rất dễ dàng.
### Muc 35

- Và một lần nữa, điều cần ghi nhớ là, có vẻ hơi điên rồ khi bạn nghe lần đầu, nhưng nó lại là điều quen thuộc với những người đã từng viết mã JavaScript hay bất cứ thứ gì.
- Đó có phải là những gì chúng ta đang trao tặng ở đây, điều này, điều này, điều này chúng ta đang nói với Gradio không?
- Này, bất cứ khi nào người dùng thực hiện hành động nào trên trang web, tôi muốn bạn gọi lại lệnh gọi lại mà tôi vừa đưa cho bạn.
- Đầu vào phải được kết nối với đầu vào của bạn.
- Đầu ra cần phải được đưa vào đầu ra và đó chính là những gì Gradio sẽ xử lý cho bạn chỉ bằng một dòng mã này.
- Và tôi chỉ minh họa rằng nếu tôi nhấp vào liên kết này và liên kết của bạn có thể có số cổng khác ở cuối, tôi sẽ nhấp vào liên kết này.
- Sau đây là giao diện người dùng.
- Bây giờ chúng ta đang xem một ứng dụng React chạy trên máy chủ cục bộ của tôi, trỏ đến cổng đó và tôi có thể nhập hello.
### Muc 36

- Và khi tôi nhấn nút gửi thì nó lại hiện ra và quay lại ở chế độ nền.
- Nó chỉ gọi lại lần thứ ba.
- Mọi việc diễn ra như thế đó.
- Thật tuyệt phải không?
- Được rồi, tiếp theo tôi muốn giới thiệu với các bạn một thứ thậm chí còn điên rồ hơn có tên là chia sẻ.
- Và tôi cần phải đề cập rằng nếu bạn làm việc trong môi trường doanh nghiệp có chế độ bảo mật nghiêm ngặt thì giải pháp này có thể không phù hợp với bạn.
- Trên thực tế, nếu bạn không chắc chắn về bảo mật, nếu bạn không làm việc cho nhóm khoa học dữ liệu, nếu bạn là người không nhất thiết phải tham gia vào chức năng công nghệ, bạn có thể muốn bỏ qua bước này hoàn toàn, vì có thể đây là điều sẽ khiến bạn phải lưu ý đến bộ phận bảo mật của công ty, vì Gradio thực hiện một việc khá công nghệ cao.
- Nhưng Gradio có một cách cực kỳ tuyệt vời để bạn có thể chia sẻ.
## Phan 13

### Muc 37

- Đúng như vậy.
- Đây là dòng tương tự như trước, nhưng tôi đã thêm vào, nếu bạn nhìn lại ở đây, nó không nói rằng share equals true.
- Nếu bạn nói chia sẻ bằng đúng thì Gradio thực hiện một điều gì đó có công nghệ khá cao.
- Thay vì chạy nó trên hộp cục bộ của bạn để bạn chỉ có một máy chủ cục bộ như máy chủ web đang chạy, nó sẽ gửi mã đó đến gradio để ôm mặt và họ chạy nó miễn phí như trong một cái cũi nơi các ứng dụng có thể chạy.
- Vì vậy, bạn có thể chia sẻ nó với người khác.
- Nhưng có một điều hơi điên rồ một chút.
- Khi ai đó tương tác với trang web của bạn đang chạy trên một nền tảng như gradio khi họ nhấn nút đó.
- Gradio vẫn sẽ quay lại máy tính của bạn và gọi lệnh share the shout ngay tại đây trên máy của bạn, như chúng ta sẽ thấy ngay sau đây.
### Muc 38

- Và nếu bạn đang thắc mắc, làm sao mà điều đó lại xảy ra được?
- Gradio có thể truy cập trở lại máy tính của tôi bằng cách nào?
- Đơn giản là nó sử dụng một phương pháp mà những người trong ngành kỹ thuật gọi là đường hầm HTTP.
- Nếu bạn đã từng sử dụng thứ gì đó như Ngrok, nó sẽ sử dụng công nghệ đó.
- Điều này rất phổ biến và được nhiều người trong giới công nghệ hiểu rõ.
- Nó được sử dụng rất nhiều trong các cộng đồng khoa học dữ liệu để chia sẻ ứng dụng, nhưng nếu bạn không phải là thành viên của cộng đồng đó, bạn nên bỏ qua chia sẻ bằng đúng.
- Và còn một cách tốt hơn, toàn diện hơn và hoàn toàn công khai để chia sẻ ứng dụng mà tôi sẽ giới thiệu cho bạn sau.
- Nhưng bây giờ, chúng ta hãy thử xem sao.
### Muc 39

- Chúng ta chạy nó một cách đơn giản với share equals true.
- Chúng ta quay lại giao diện.
- Và những gì bạn sẽ thấy ở đây là lần này nó đang chạy cục bộ.
- Bạn có thể thấy có một số cổng khác nhau vì mỗi lần bạn chạy Gradio chỉ chọn cổng tiếp theo.
- Tất cả các ứng dụng Gradio trước đây của tôi đều chạy trên các cổng khác, nhưng nó cũng chạy trên một URL công khai.
- Đây là URL hiện tại.
- Một số thập lục phân dài.
- Gradio trực tiếp và liên kết chia sẻ này sẽ hết hạn sau một tuần và nó sẽ cho bạn biết liệu bạn có muốn biết cách thực hiện đúng hay không.
## Phan 14

### Muc 40

- Bạn chạy Gradio deploy.
- Và đó là một vấn đề khác được ghi chép đầy đủ trong tài liệu, là cách tiếp cận triển khai phù hợp mà chúng tôi đề cập trong một số khóa học khác của tôi.
- Nhưng mà cái này đỉnh thật.
- Nếu tôi nhấp vào đây, nó sẽ mở trang web Gradio trực tiếp.
- Và khi tôi gõ uh, howdy, uh và nhấn gửi, chúng ta sẽ nhận được howdy bằng chữ in hoa.
- Nếu tôi quay lại đây lần nữa, bạn sẽ thấy rằng shout đã được gọi bằng đầu vào.
- Xin chào.
- Nó đang chạy mã Python trên máy tính của tôi.
### Muc 41

- Nghe có vẻ điên rồ phải không?
- Ừ, nhưng mọi chuyện diễn ra như thế đấy.
- Thật tuyệt vời.
- Chương trình này sẽ chạy miễn phí trong một tuần.
- Ừm, và, ừm, bạn luôn có thể, bất cứ lúc nào, chỉ cần dừng máy tính của bạn để nó không thể gọi lại lệnh gọi lại của bạn nữa, nếu bạn muốn.
- Vì vậy, chỉ khi bạn có máy tính xách tay này chạy thì nó mới có thể sử dụng lệnh gọi lại của bạn.
- Vì vậy, tôi hy vọng là bạn đã tìm thấy điều đó.
- Mát mẻ.
### Muc 42

- Nếu bạn không chắc chắn chuyện gì đang xảy ra hoặc không hài lòng với điều đó, thì hãy bỏ qua nó ngay.
- Nhưng nếu bạn đang xây dựng ứng dụng Gradio và muốn chia sẻ ứng dụng đó với nhóm của mình hoặc với những người khác một cách dễ dàng, thì bạn chỉ cần thêm vào đó share equals true.
- Một tính năng dễ thương khác cần biết về Gradio là quên đi việc chia sẻ.
- Chúng ta sẽ không quay lại vấn đề đó nữa.
- Bạn có thể sử dụng tùy ý, nhưng có một điều đặc biệt là khi bạn chạy nó cục bộ, bạn có thể gọi điều này trong trình duyệt là equals true.
- Và tất cả những gì nó làm là khi bạn chạy lệnh này, nó sẽ ngay lập tức bật lên cửa sổ trình duyệt.
- Thật tiện lợi nếu bạn luôn phải làm việc trên cửa sổ trình duyệt chứ không phải trên máy tính xách tay.
- Trong trình duyệt, "bằng đúng" có nghĩa là nó sẽ bật lên ngay lập tức để bạn có thể chạy giao diện người dùng ngay lập tức.
## Phan 15

### Muc 43

- Và chúng ta có nó rồi.
- Siêu dễ.
- Gradio cũng giúp bạn dễ dàng thêm ID người dùng và mật khẩu đăng nhập vào ứng dụng của mình.
- Đặc biệt nếu bạn đang sử dụng share equals true thì đó có thể là điều đáng để cân nhắc.
- Ừm, đây là cách bạn thực hiện trong lệnh gọi để khởi chạy, bạn chỉ cần thêm auth equals và sau đó bạn có thể nhập ID người dùng và mật khẩu vào một bộ như thế này.
- Và với ID người dùng và mật khẩu là chuối, không nói mật khẩu của tôi ở bất kỳ nơi nào khác.
- Trong trường hợp bạn đang thắc mắc, ừm, chúng tôi có nó đây.
- Ừm, và bạn cũng có thể, thay vì chỉ truyền một ID người dùng và mật khẩu, bạn có thể truyền một danh sách các cặp ID người dùng và mật khẩu.
### Muc 44

- Toàn bộ danh sách những người đó sẽ có thể đăng nhập.
- Ý tôi là gì?
- Vâng, nếu tôi chạy cái này, ứng dụng Gradio của tôi sẽ hiện ra và bây giờ nó có thông tin đăng nhập và mật khẩu.
- Và nếu tôi nhập thêm và nhập bất kỳ thông tin nào ở đó rồi đăng nhập, thì thông tin sẽ báo là thông tin đăng nhập không hợp lệ.
- Tôi phải dùng trình quản lý mật khẩu.
- Hãy thử lại lần nữa.
- Thêm chuối vào và bắt đầu.
- Bây giờ chúng ta đã đăng nhập vào ứng dụng.
### Muc 45

- Tôi có thể chào và nhấn nút gửi.
- Và nó có hiệu quả.
- Chúng tôi có xác thực.
- Và rõ ràng khi quay lại cursor, chúng ta có thể thấy nó gọi hàm shout.
- Trước khi tất cả các bạn gửi email cho tôi cùng một lúc, tôi biết rõ là bạn không bao giờ nên để mật khẩu ở dạng văn bản thuần túy như vậy.
- Ít nhất, bạn có thể sử dụng tệp env nếu muốn lưu một số mật khẩu ở đó, nhưng tất nhiên bạn nên sử dụng thứ gì đó phù hợp, chẳng hạn như cơ sở dữ liệu bảo mật phù hợp và thậm chí có thể là một số loại hệ thống băm.
- Bạn có thể tìm kiếm trên Google bất kỳ thông tin nào bạn muốn.
- Nhưng đây là cách nhanh chóng để thêm vào tính năng xác thực, cho bạn thấy nó dễ dàng như thế nào.
## Phan 16

### Muc 46

- Và nếu bạn có share equals true để cho thế giới bên ngoài có khả năng vào và chạy mọi thứ thì bạn có thể muốn đưa vào xác thực.
- Không thể dễ dàng hơn được nữa.
- Được rồi, chúng ta hãy tiếp tục.
- Bạn có thể thấy tôi thích gradio.
- À, còn một điều nữa là tôi đã cho các bạn xem tất cả những màn hình này.
- Chúng hiện lên ở chế độ tối vì đó là chế độ mặc định trên hệ thống của tôi.
- Có thể bạn đã thấy phiên bản chế độ sáng.
- Bây giờ, nếu muốn, bạn có thể buộc Gradio hiển thị giao diện người dùng ở chế độ tối.
### Muc 47

- Trên thực tế, Gradio khuyên bạn không nên làm như vậy và họ không tạo điều kiện thuận lợi vì họ chỉ ra rằng điều quan trọng là phải tôn trọng lựa chọn chế độ sáng hoặc chế độ tối của người dùng vì lý do trợ năng, nhưng nếu bạn muốn, đây là cách bạn có thể thực hiện.
- Bạn có thể viết một số mã JavaScript, bạn có thể truyền mã JavaScript đó vào và sau đó nó sẽ luôn ở chế độ tối.
- Và đây là chế độ tối mọi lúc.
- Và thực tế, tôi có thể cho bạn thấy điều đó một lần nữa bằng cách chuyển nó sang chế độ sáng hơn.
- Ừ, để tôi thay đổi điều này nhé.
- Tôi đổi từ tối thành sáng.
- Tôi tin là bây giờ nó sẽ ở chế độ sáng.
- Đấy, thế là xong.
### Muc 48

- Bùm!
- Ha ha!
- Có thể đây là những gì bạn đã thấy.
- Phiên bản chế độ sáng.
- Tôi chào bạn, gửi đi.
- Và nó được viết hoa.
- Vậy đó là sự thay đổi chế độ ánh sáng.
- Tôi sẽ đưa điều này trở lại trạng thái tối.
## Phan 17

### Muc 49

- Ờ.
- Vậy là xong.
- Và quay lại chế độ tối.
- Vậy thì bạn có thể chuyển đổi giữa chế độ tối và chế độ sáng.
- Nhưng như tôi đã nói, Gradio khuyên bạn nên giữ nguyên như vậy.
- Hãy để người dùng quyết định.
- Tôn trọng sự lựa chọn của người dùng về vấn đề đó.
- Được rồi.
### Muc 50

- Bây giờ chúng ta sẽ đưa giao diện người dùng này tiến xa hơn một chút.
- Và vì thế có một khối mã nhỏ ở đây.
- Nhưng mọi chuyện sẽ rất hợp lý, tôi hy vọng là nó sẽ không làm bạn ngạc nhiên chút nào.
- Ừ, chúng ta có thể chọn chỉ định rõ ràng các trường sẽ xuất hiện trên giao diện người dùng.
- Vậy giả sử chúng ta muốn có đầu vào và đầu ra.
- Và thay vì chỉ sử dụng tất cả các giá trị mặc định đó, chúng ta sẽ nói rằng tôi muốn đầu vào là một hộp văn bản.
- Tôi muốn nhãn chính là thông điệp của bạn.
- Thông tin thêm.
### Muc 51

- Nhập tin nhắn muốn hét lên.
- Giả sử nó có bảy dòng và sau đó thông báo đầu ra sẽ là một hộp văn bản khác có nhãn phản hồi với tám dòng.
- Và bây giờ tôi có thể.
- Tôi có thể nói rằng giao diện của tôi rất tuyệt vời.
- Chức năng.
- Hàm gọi lại mà tôi sẽ gọi sẽ là từ shout.
- Giả sử bạn không cần phải đưa chức năng vào đó.
- Bạn chỉ cần làm như vậy thôi.
## Phan 18

### Muc 52

- Nhưng chúng ta vẫn giữ nguyên nó.
- Chức năng là hét.
- Tiêu đề của cửa sổ sẽ là từ shout.
- Đầu vào sẽ là đầu vào mà chúng ta vừa viết ở đây.
- Đầu ra sẽ là đầu ra mà chúng ta đã viết ngay tại đó.
- Chúng tôi có thể đưa ra một số ví dụ.
- Xin chào và chào bạn.
- Và một lần nữa chế độ báo hiệu này không bao giờ xảy ra.
### Muc 53

- Bạn có thể lấy nó ra nếu muốn và xem nó có tác dụng gì.
- Đó chỉ là một công cụ nhỏ mà chúng ta không cần đến.
- Và sau đó xem dot launch.
- Vì vậy, nó chỉ được diễn đạt rõ ràng hơn một chút.
- Và khi tôi mở nó ra, bạn có thể thấy giao diện người dùng đẹp mắt này.
- Nó có tiêu đề là shout đúng như chúng tôi đã hứa.
- Tin nhắn.
- Nhập tin nhắn để chào mọi người.
### Muc 54

- Nhấn gửi.
- Chào bạn.
- Bạn có thể thấy nó được in ở đó.
- Nó gọi lại lệnh gọi xuống.
- Sau đây là một số ví dụ tôi có thể nhấp vào howdy và nó sẽ hiển thị howdy.
- Nhấn gửi và bạn sẽ thấy lời chào và bản in.
- Vì vậy, mọi thứ sẽ gọn gàng và ngăn nắp hơn một chút.
- Chúng tôi sử dụng ít hơn một chút khi dùng Gradio.
## Phan 19

### Muc 55

- Và chúng tôi sẽ nói rõ hơn về những gì chúng tôi muốn.
- Và nó cho bạn thấy cách bạn có thể kiểm soát được.
- Xác định trường vô tuyến, truyền chúng vào đầu vào và đầu ra, đưa ra một số ví dụ, tiêu đề, v.v.
- Một điều nữa tôi sẽ đề cập, và điều này có thể đã khiến bạn bất ngờ, là khi bạn di chuyển chuột, nếu chuột của bạn di chuyển trên giao diện Gradio, thì đột nhiên bạn sẽ không thể cuộn lên và xuống nếu bạn sử dụng bánh xe chuột để di chuyển lên và xuống.
- Và lý do là vì nó cố gắng cuộn lên và xuống trong giao diện người dùng này, bạn phải di chuyển chuột sang một bên, sau đó bạn có thể cuộn lên và xuống.
- Tôi đã từng gặp những người thắc mắc như tại sao chuột của tôi lại không hoạt động?
- Nó giống như con trỏ vậy.
- Bạn chỉ cần đưa chuột ra ngoài giao diện Gradio là được.
### Muc 56

- Được rồi, bây giờ, bây giờ là thời khắc quan trọng đối với bạn và nó sẽ rất điên rồ.
- Tôi hy vọng đây sẽ là khoảnh khắc tuyệt vời đối với bạn.
- Bạn có nhớ những gì có vẻ như đã xảy ra cách đây rất lâu nhưng thực ra chỉ mới xảy ra cách đây vài phút không?
- Khi bắt đầu thực hành này, chúng ta đã viết một hàm gọi là message GPT.
- Bạn còn nhớ điều đó không?
- Chúng ta hãy quay lại và xem xét nó, vì tôi cảm thấy bạn giống như vậy, phải không?
- Vâng, chúng tôi đã làm vậy.
- Để tôi chỉ cho bạn nhé.
### Muc 57

- Blah blah blah cho đến tận đây.
- Trời ơi, có vẻ như chuyện đó đã xảy ra từ rất lâu rồi.
- Nhắn tin cho GPT, bạn là một trợ lý hữu ích.
- Chỉ cần một tin nhắn là xong.
- Và nó trả về câu trả lời.
- Nó gọi GPT trên đám mây.
- Bây giờ bạn có hiểu ý tôi không?
- Được rồi, chúng ta quay lại thôi.
## Phan 20

### Muc 58

- Ờ, vậy thì.
- Vậy đó chính là thứ chúng tôi đã tạo ra.
- Vậy chúng ta hãy viết lại chính xác nội dung giống như trong ô trước.
- Nhưng chúng ta sẽ đổi shout thành GP để gửi tin nhắn tới GPT một hàm khác.
- Nhưng nó vẫn là một hàm lấy một đầu vào và đưa ra một đầu ra giống như Xiao đã làm.
- Cũng giống như xiao là một hàm có thông báo đầu vào và đầu ra, GPT lấy thông tin đầu vào, lời nhắc và đầu ra.
- Câu trả lời.
- Vậy thôi.
### Muc 59

- Không còn gì khác nữa.
- Được rồi, tôi sẽ thay đổi thông tin.
- Tôi sẽ thay đổi ví dụ.
- Tôi sẽ không thay đổi các ví dụ.
- Xin chào và chào hỏi là được rồi.
- Ừ, tôi sẽ đổi tiêu đề.
- Ngoài ra thì không có thay đổi gì cả.
- Được rồi.
### Muc 60

- Bạn có đồng ý với tôi không?
- Bạn thấy không?
- Không có gì thay đổi.
- Chỉ có một hàm gọi lại.
- Chức năng khác nhau.
- Còn lại thì giống nhau.
- Chúng ta bắt đầu thôi.
- Tôi sẽ chạy nó.
## Phan 21

### Muc 61

- Và được rồi, chúng ta có một giao diện có tiêu đề là GPT.
- Tin nhắn của bạn.
- Nhập tin nhắn cho GPT mini.
- Chúng ta có thể gõ, nhưng chúng ta có thể sử dụng cái chúng ta có ngay ở đây.
- Xin chào.
- Nhấn gửi.
- Và xin chào.
- Hôm nay tôi có thể giúp gì cho bạn?
### Muc 62

- Nó chỉ gọi là GPT.
- Nó gọi là chức năng đó.
- Nó đã nhận được câu trả lời.
- Câu trả lời nằm ở đây.
- Vậy thôi.
- Và vì vậy, rõ ràng là bạn biết ý tôi muốn nói là ôm mặt một con gradio không biết rằng nó vừa thực hiện một cuộc gọi đến GPT.
- Về cơ bản, đây chỉ là một hàm gọi lại khác.
- Thực ra đó là một hàm gọi lại mà chúng ta đã cung cấp có tên là GPT.
### Muc 63

- Nó không được gọi là hét.
- Nó không quan tâm.
- Nó thậm chí còn không biết tên.
- Đó chỉ là một biến số.
- Nó chỉ gọi hàm đó và không có gì cả.
- Nó không biết gì về llms.
- Nó chỉ đơn giản là kết nối đầu vào với đầu ra thông qua nút gửi.
- Chỉ có vậy thôi.
## Phan 22

### Muc 64

- Đó chính là những gì đang xảy ra ở đây.
- Quá dễ.
- Chúng tôi vừa đưa LLM vào giao diện người dùng.
- Và bây giờ bạn đã biết cách sử dụng like share equals true.
- Và bạn có thể sử dụng auth để có thể đăng nhập.
- Và sau đó mọi người có thể kết nối với GPT như thế này.
- Ồ.
- Bạn thấy đấy, tôi đã nói với bạn rằng hôm nay rất vui.
### Muc 65

- Được rồi, tiếp theo, chúng ta sẽ thực hiện một thay đổi nhỏ, ừm, để, ừm, thực hiện, ừm, thực hiện câu trả lời này bằng markdown thay vì bằng văn bản thông thường.
- Và vì vậy tôi sẽ thay đổi thông báo hệ thống thành bạn là trợ lý hữu ích có thể phản hồi bằng markdown mà không cần codeblock.
- Đó là điều nhỏ nhặt để đảm bảo nó không tạo thêm dấu tích xung quanh, đáng để biết.
- Vì vậy, đôi khi tôi nhận được câu hỏi về vấn đề này.
- Mọi người ban đầu ngạc nhiên vì tôi viết thông báo hệ thống đó, nhưng tôi không sử dụng thông báo hệ thống trong phần còn lại của đoạn mã này.
- Và tôi nói với bạn rằng điều đó sẽ thay đổi những gì xảy ra.
- Và mọi người thì kiểu như, được thôi, nhưng bạn không sử dụng nó.
- Ồ, bạn có biết điều này không?
### Muc 66

- Bạn có biết chuyện gì đang xảy ra ở đây không?
- Vì vậy, đôi khi mọi người bị nhầm lẫn về sổ ghi chép Jupyter vì thứ này được gọi là sổ ghi chép Jupyter.
- Những giao diện máy tính xách tay này khiến mọi người bối rối và nghĩ rằng bạn có thể coi nó như một dòng mã dài đang chạy ở đó.
- Và chúng tôi chỉ đang chỉnh sửa thêm ở phần cuối của tệp.
- Nhưng không, cách thức hoạt động của nó là mỗi khi bạn chạy một ô, bạn đang thực thi ô đó.
- Và có một Python chạy đằng sau hậu trường để nó chạy.
- Và thông báo hệ thống này, chúng tôi đã định nghĩa nó ở đâu đó ngay trên này.
- À, lý do tôi nhấn mạnh điều này là vì đây là một sự nhầm lẫn phổ biến và là nguồn gốc của nhiều lỗi.
## Phan 23

### Muc 67

- Vì vậy, chúng ta cần phải hiểu những gì đang xảy ra ở đây.
- Quay trở lại đây chính là nơi tôi định nghĩa thông báo hệ thống.
- Về cơ bản, tôi đang định nghĩa một biến toàn cục vì đây chỉ là một thông báo hệ thống biến toàn cục.
- Và tôi đang sử dụng biến toàn cục ở đó.
- Và sau này khi tôi định nghĩa lại điều này, tôi sẽ thay đổi biến toàn cục.
- Và giá trị mới đó sẽ được sử dụng bất cứ khi nào hàm này được gọi.
- Vì vậy, trong sổ tay, nếu bạn thường làm điều gì đó như thế này, bạn sẽ làm việc với các biến toàn cục.
- Và bạn có thể thay đổi chúng bất cứ lúc nào.
### Muc 68

- Và chúng sẽ ảnh hưởng đến mọi thứ xảy ra trước đó.
- Vì vậy, bạn cần hiểu điều này vì nó cũng có thể tạo ra lỗi.
- Bây giờ các kỹ sư hoặc kỹ sư phần mềm trong số các bạn sẽ biết rằng việc sử dụng biến toàn cục như thế này không được khuyến khích trong kỹ thuật phần mềm.
- Và đó là điều bạn cần làm nếu đang xây dựng bằng Python Modules.
- Ví dụ, bạn sẽ muốn có thông tin đầu vào là thông báo hệ thống và lời nhắc.
- Bạn sẽ không muốn dựa vào biến toàn cục.
- Và vì vậy, có một số người nói với tôi rằng bạn không nên sử dụng biến toàn cục, blah blah, blah blah, nhưng thực tế thì đó là một sự hiểu lầm nhỏ.
- Khi bạn sử dụng một máy tính xách tay như thế này, bạn đang làm việc với tư cách là một nhà khoa học, chứ không phải là một kỹ sư phần mềm.
### Muc 69

- Hãy bỏ chiếc mũ kỹ sư phần mềm, đội chiếc mũ nhà khoa học dữ liệu và với tư cách là nhà khoa học dữ liệu, bạn được khuyến khích thử nghiệm, lặp lại, thay đổi mọi thứ và xem điều gì xảy ra.
- Đây là một chế độ làm việc khác.
- Vì vậy, trên thực tế, theo quan điểm này, tôi cho rằng việc có các biến toàn cục trong sổ ghi chép của bạn và thay đổi chúng, xem hiệu ứng, rồi thay đổi chúng lần nữa là hoàn toàn bình thường và hợp lý, đó là cách thức hoạt động.
- Miễn là bạn hoàn toàn hiểu rõ chuyện gì đang xảy ra thì đây là một phương pháp thực hành hoàn toàn an toàn và thẳng thắn mà nói, đây là phương pháp được khuyến khích.
- Được rồi, hết lời phàn nàn.
- Chúng ta hãy tiếp tục nhé.
- Được rồi, vì vậy chúng ta sẽ định nghĩa lại thông báo hệ thống để phản hồi và giảm giá.
- Chúng ta cũng đang thay đổi đầu ra thứ hai thành đầu ra của trường thứ hai.
## Phan 24

### Muc 70

- Thay vì là một hộp văn bản, giờ đây nó là một markdown tuyệt vời và đẹp mắt.
- Điều đó có nghĩa là Gradio sẽ tìm ra cách hiển thị markdown đúng cách ở đó.
- Và chúng ta cũng sẽ thay đổi các câu hỏi từ "xin chào" sang những câu hỏi sâu sắc hơn một chút.
- Vậy nên tôi có hai ví dụ cho bạn ở đây.
- Bạn có thể nhập bất cứ thông tin gì bạn muốn vào đây.
- Nhưng chúng ta sẽ chọn giải thích kiến trúc hoặc kiến trúc máy biến áp cho người không chuyên.
- Hãy bắt đầu bằng cách đó và nhấn gửi.
- Và bây giờ sẽ gọi là GPT 4.
### Muc 71

- 1.
- Và với những gì thu được, chúng ta sẽ lấy lại được giá trị mong muốn.
- Bạn có thể thấy có một vài từ được in đậm ở đó.
- Và còn một số thứ nữa.
- Chắc chắn.
- Sau đây là lời giải thích đơn giản về kiến trúc máy biến áp.
- Hãy tưởng tượng bạn muốn đọc và hiểu một cuốn sách, nhưng cuốn sách đó thực sự dài và nghĩa của câu thường phụ thuộc vào những từ xuất hiện trước đó nhiều.
- Phương pháp truyền thống là đọc từng từ trong sách.
### Muc 72

- Máy biến áp giống như một trình đọc sách điện tử siêu thông minh có thể xem qua toàn bộ câu hoặc đoạn văn.
- Tìm ra điều gì là quan trọng và tiếp tục.
- Chú ý.
- Đó chính là ý tưởng chính về cách các từ liên quan với nhau.
- Hiểu ý nghĩa thông qua các lớp, các lớp của mạng lưới nơ-ron.
- Vậy thì đây là một mô tả hay và dễ hiểu dành cho người mới bắt đầu.
- Chúng ta hãy thay đổi điều này để giải thích kiến trúc chuyển đổi cho một kỹ sư AI đầy tham vọng và nhấn gửi.
- Một lần nữa nó sẽ chuyển sang GPT.
## Phan 25

### Muc 73

- Nó sử dụng cùng một lệnh gọi lại.
- Nhưng bây giờ phản hồi mà hệ thống yêu cầu trong markdown.
- Và phản hồi bây giờ sẽ được hiển thị bằng markdown.
- Và đây là thứ mang tính kỹ thuật hơn một chút.
- Nó đề cập đến tờ giấy.
- Sự chú ý là tất cả những gì bạn cần mà tôi đã đề cập từ năm 2017.
- Ừ, nó nói về LSTM.
- Bạn còn nhớ tôi đã nói rằng đó là thứ có trước thứ chúng ta vẫn dùng không?
### Muc 74

- Và sau đó, nó giải thích các thành phần của máy biến áp mà chúng ta sẽ xem xét trong quá trình thực hiện.
- Nhưng hầu hết là vào tuần thứ ba tuần tới, ừm, nhúng đầu vào, mã hóa vị trí, ừm, sau đó là ngăn xếp bộ mã hóa và giải mã.
- Nhưng thông thường ngày nay bạn chỉ có một ngăn giải mã và sau đó là lớp đầu ra và cách các lớp này kết hợp với nhau.
- Và sau đó là một lời giải thích đơn giản về sự tự chú ý và những lợi ích ở đây.
- Và đối với những người muốn tìm hiểu sâu hơn về Transformers, đây chính là thời điểm thích hợp.
- Bạn có giao diện người dùng Gradio.
- Bạn có thể tiếp tục hỏi những câu hỏi tiếp theo, mặc dù không có cuộc trò chuyện nào ở đây.
- Nó sẽ không biết những gì bạn đã nói trước đó.
### Muc 75

- Bạn chỉ cần thêm nhiều câu hỏi hơn vào đây.
- Nhấn gửi mỗi lần để tìm hiểu về máy biến áp trong khi chơi với giao diện người dùng Gradio đẹp mắt.
- Được thôi, nhưng có một điều chúng tôi có thể cải thiện là bạn có thể nhận thấy rằng nó dừng lại một lúc, rồi đột nhiên xuất hiện.
- Và bây giờ bạn đã quen với ý tưởng về phát trực tuyến mà chúng ta đã thực hiện vào tuần đầu tiên, trong đó chúng ta thu thập kết quả khi chúng được gửi về từ GPT và chúng ta chỉ cần viết lại hàm đó, hàm đó, hàm mà chúng ta phải gọi là GPT và chúng ta có thể tạo ra một phiên bản mới có tên là phát trực tuyến GPT, sẽ phát trực tuyến kết quả.
- Bây giờ, cách thức hoạt động là bạn sử dụng thứ gọi là máy phát điện với gradio.
- Nếu bạn cung cấp một hàm gọi lại, là một trình tạo, một loại hàm đặc biệt, Gradio sẽ tự động nói rằng tôi sẽ lặp lại hàm này nhiều lần và hiển thị kết quả khi có.
- Và đơn giản chỉ có vậy thôi.
- Bạn thực hiện lệnh gọi lại thông qua trình tạo.
## Phan 26

### Muc 76

- Gradio sẽ tìm ra cách làm mới liên tục với thông tin mới nhất mà nó mong đợi bạn lặp lại với những dữ liệu ngày càng lớn hơn, không phải với từng phần riêng lẻ mà là với toàn bộ số lượng dữ liệu cần trả về.
- Vì vậy, nếu bạn không tự tin với trình tạo, nếu bạn mới làm quen với từ khóa yield, hãy xem hướng dẫn.
- Tôi đã giải thích rõ ở đó rồi.
- Bạn cũng có thể chỉ cần dựa vào trực giác và tìm ra cách giải quyết.
- Nhưng có lẽ sẽ tốt hơn nếu xem qua hướng dẫn và chọn đúng máy phát điện.
- Ừ, nhưng ừ, nhưng ở đây chúng ta có một luồng, GPT.
- Chúng tôi cũng nhận được thông báo hệ thống và lời nhắc mà chúng tôi gọi là OpenAI create.
- Nhưng bạn có thể nhớ rằng có luồng đối số bổ sung này bằng true.
### Muc 77

- Và khi chúng ta làm điều đó, thứ nhận được không phải là phản hồi, mà là một luồng.
- Và sau đó chúng ta có thể nói for chunk trong luồng.
- Và bạn có nhớ đoạn này không?
- 0.
- nội dung delta.
- Và vâng, chúng tôi chỉ cần thêm thông tin đó vào kết quả.
- Vì vậy, kết quả đó là một dạng tổng hợp tất cả các văn bản đã có cho đến nay.
- Và đó là những gì chúng ta thu được tại mỗi điểm.
### Muc 78

- Vì vậy, đây là trình tạo mà bạn có thể lặp lại để đưa ra tất cả phản hồi từ GPT.
- Và đây chính là mã Gradio thực tế của chúng ta.
- Nó hoàn toàn giống như trước.
- Tôi nghĩ là không có thay đổi gì cả.
- Vâng, tất nhiên là có một thay đổi nhỏ này.
- Chúng tôi vừa chuyển đổi lệnh gọi lại từ phiên bản không có tính năng phát trực tuyến sang phiên bản có tính năng phát trực tuyến.
- Nhưng Gradio tự mình giải quyết mọi việc.
- Nó xác định rằng trả về một trình tạo hoặc là một trình tạo và kết quả là nó lặp lại để hiển thị.
## Phan 27

### Muc 79

- Chúng ta hãy cùng xem nó trông như thế nào nhé.
- Được rồi, tôi đã chạy xong.
- Chúng ta bắt đầu thôi.
- Chúng tôi lại có câu hỏi rồi.
- Ừ, chúng ta có người bình thường và người có tham vọng trở thành kỹ sư AI.
- Chúng ta hãy bắt đầu với câu hỏi phức tạp hơn, đó là kỹ sư AI đầy tham vọng và nhấn gửi.
- Và điều chúng ta nên tìm và thực sự tìm thấy là phát trực tiếp sẽ cho kết quả phát trực tiếp nhanh hơn tốc độ tôi có thể cuộn.
- Ừ, nhưng sau đó chúng ta lại có như trước.
### Muc 80

- Chúng tôi đã định dạng và trình bày lời giải thích một cách rõ ràng.
- Nó nói về các máy biến áp có thể song song hóa được, và chúng có thể xử lý các phụ thuộc tầm xa và chúng rất linh hoạt.
- Một lần nữa, nó cung cấp cho bạn các lớp khác nhau, các ngăn xếp mã hóa và giải mã, sau đó là sự tự chú ý, cơ chế chú ý là cốt lõi của nó.
- Ồ, và bạn có thể đọc thêm một chút về điều đó.
- Và tôi đang làm điều này.
- Tất nhiên, tôi có mục đích kép ở đây.
- Tôi muốn bạn hiểu sâu hơn một chút về kiến trúc máy biến áp thực sự là gì.
- Ồ, và hãy nhìn vào tất cả những điều này.
### Muc 81

- Có rất nhiều thông tin về nó.
- Ừ, được thôi.
- Và đó là luồng phát trực tiếp từ GPT.
- Quá dễ.
- Và bây giờ tôi có thứ gọi là Stream Claude.
- Chỉ dành cho những người có chìa khóa nhân loại.
- Nếu bạn có thứ gì khác thì hãy sử dụng nó.
- Tất nhiên, bạn có thể biến dòng suối thành một con lạc đà nếu bạn có một con lạc đà, nhưng thực tế là bạn có một con lạc đà.
## Phan 28

### Muc 82

- À, và tôi chỉ sử dụng cùng một cách hoàn thành trò chuyện, cùng một thư viện OpenAI như mọi khi.
- Vậy thì đó là sự hoàn thiện mang tính nhân loại.
- Chúng tôi sẽ sử dụng Claude Sonnet 45 nếu bạn muốn giá rẻ hơn, hãy sử dụng thơ Haiku mà chúng tôi đã sử dụng ngày hôm qua.
- Stream có nghĩa là đúng.
- Hoàn toàn giống nhau.
- Và chúng ta có cùng một đoạn mã ở đây.
- Nhưng thay vào đó chúng tôi sẽ gọi Stream Claude.
- Và chúng tôi đặt tên là Claude.
### Muc 83

- Và đây rồi.
- Trả lời tin nhắn cho Claude 4.
- 5.
- Và, ừm, chúng ta nên chọn cách của người bình thường.
- Chúng ta hãy cùng xem nhé.
- Ừm, hy vọng là nó đã được phát trực tuyến và chúng ta sẽ nhận được câu trả lời khác.
- Tôi nghĩ tôi thích cái của anthropic hơn, vì nó không quá đơn giản đối với người bình thường.
- Nó giống như một cơ chế chú ý.
### Muc 84

- Ngôi sao của chương trình.
- Nó hay và được giải thích rõ ràng.
- Vì thế.
- Vì vậy, tôi khá thích phiên bản dành cho người bình thường của Claude.
- Ừm, vậy là bạn đã thấy việc chuyển sang một hàm gọi lại khác và sử dụng anthropic thay vì GPT để trả lời các câu hỏi của chúng ta dễ dàng như thế nào.
- Được rồi, bây giờ tôi sẽ lấy một ít.
- Lại tưởng tượng như thế nữa.
- Bạn không cần phải làm theo tất cả những điều này nếu bạn không muốn, nhưng tôi chỉ muốn chỉ cho bạn thấy.
## Phan 29

### Muc 85

- Nhìn kìa.
- Hãy nhìn vào đây.
- Vì vậy, tôi đã thực hiện một cuộc gọi lại khác, nhưng lần này khá lén lút.
- Nó cần một lời nhắc, nhưng cũng cần một mô hình, mà nó mong đợi có thể là từ GPT hoặc từ Claude.
- Và rõ ràng là các kỹ sư phần mềm và bạn sẽ nói rằng chúng ta nên sử dụng phép liệt kê cho việc này, blah blah, blah.
- Tôi biết chỉ cần giữ cho nó đẹp và đơn giản thôi.
- Ừm, vậy thì, ừm, nếu GPT được truyền vào, thì chúng ta sẽ gọi nó, chúng ta sẽ lấy luồng GPT này, đây thực ra chỉ là thu thập trình tạo đó và đưa vào kết quả.
- Nếu Claude quay lại, chúng ta sẽ lấy trình tạo có tên là Stream Claude cho lời nhắc đó và đưa nó vào phần kết quả.
### Muc 86

- Nếu không, chúng tôi sẽ báo lỗi.
- Và sau đó lệnh yield from này cũng giống như vậy.
- Giống hệt như nói for chunk trong result yield chunk.
- Cũng giống như cách nói tắt để đạt được điều đó, chỉ cần nói là thu được kết quả.
- Đó chỉ là một mẹo hay của Python.
- Có tác dụng tương tự.
- Nó lặp lại các kết quả và đưa ra từng kết quả một.
- Ồ, đó chính là mô hình luồng.
### Muc 87

- Đây là thứ có thể phát trực tuyến từ GPT hoặc Claude.
- Tại sao tôi lại cho bạn xem cái này?
- Bởi vì hãy xem cái tiếp theo này.
- Ừ, lần này tôi nhập tin nhắn chính xác như trước.
- Nhập tin nhắn cho LM.
- Và sau đó tôi có một trường khác ở đây gọi là bộ chọn mô hình.
- Và nó có một menu thả xuống.
- Bạn có thể tưởng tượng ra đó là gì.
## Phan 30

### Muc 88

- Có hai giá trị có thể là GPT hoặc Claude.
- Và tất nhiên nó phải khớp với văn bản ở đây, đó là lý do tại sao bạn thực sự nên sử dụng phép liệt kê.
- Ừm, hoặc là GPT hoặc là Claude.
- Nhãn là mô hình chọn mặc định.
- Nó sẽ bắt đầu bằng GPT.
- Và sau đó có phản hồi ở đây.
- Và sau đó, ừm, đối với tôi, ừm, thực ra việc tạo mô hình luồng giao diện của tôi chính là lệnh gọi lại mà tôi cung cấp cho Gradio để nó có thể gọi lại khi muốn.
- Tiêu đề sẽ là Llms.
### Muc 89

- Lần này sẽ có hai đầu vào: đầu vào tin nhắn và đầu ra là bộ chọn mô hình.
- Khi tôi đưa ra ví dụ, tôi sẽ đưa ra ví dụ.
- Một lần nữa bạn phải đưa ra danh sách các danh sách như thế này.
- cho mỗi cái có hai đầu vào cần được thiết lập.
- Được thôi.
- Có rất nhiều thứ cần phải làm ở đây, nhưng hãy để tôi chạy thử và xem chúng ta sẽ nhận được gì.
- Được rồi.
- Bây giờ chúng ta có một thứ mà giao diện người dùng này có thông báo và có menu thả xuống.
### Muc 90

- Bạn thấy đấy, tôi có thể chọn nhiều mẫu khác nhau.
- Ừ, và ừ, ở đây tôi có một số ví dụ.
- Vì vậy, tôi có thể, tôi có thể sử dụng GPT dành cho người bình thường.
- Chúng ta hãy cùng xem Claude chọn Claude như thế nào nhé.
- Và chúng tôi muốn giải thích về kiến trúc máy biến áp cho một kỹ sư AI đầy tham vọng.
- Và tôi nhấn gửi.
- Và tất nhiên, bây giờ nó sẽ chọn Claude.
- Nó đang phát trực tiếp từ Claude.
## Phan 31

### Muc 91

- Ồ, tuyệt quá.
- Chúng tôi cũng có một số phương trình ở đây.
- Chúng ta hãy đến với phần softmax.
- Ừm, thế thì, ừm, thế thì khá thú vị.
- Chúng tôi vừa viết một cái gì đó giống như các tuyến đường đến các mô hình khác nhau dựa trên lựa chọn của bạn ngay tại đây.
- Ồ, và đó là rất nhiều chức năng được tích hợp vào giao diện người dùng này.
- Vì vậy, bạn có thể tưởng tượng ra mọi hướng khác nhau.
- Bạn có thể lấy cái này và bây giờ bạn nên vào và thêm các mô hình khác nhau vào đây.
### Muc 92

- Ý tôi là, chúng ta đã đề cập đến rất nhiều điều ngày hôm qua, nhưng tất nhiên bạn có thể có nhiều biến thể lạc đà khác nhau.
- Bạn có thể có nhiều mô hình khác nhau thông qua llama.
- Bạn có thể có Deep Sea, bạn có thể có Gemma, bạn có thể có Fei hoặc Kwan và đưa tất cả chúng vào đây và thử chúng và nắm bắt cơ hội đó.
- Tại sao không hỏi một số câu hỏi yêu thích của chúng tôi về kiến trúc máy biến áp như một cách để xây dựng một chút kiến thức cơ bản về máy biến áp?
- Được rồi, giờ là lúc chúng ta xem lại tờ rơi và đưa nó vào UI.
- Và tôi thực sự muốn gợi ý ở đây, có lẽ trước khi chúng ta cùng nhau thực hiện, bạn có thể tạm dừng video và tự mình thực hiện vì nó khá dễ.
- Ừm, nhưng, ừm, dù sao thì, tôi sẽ cho bạn xem, ừm, tôi chỉ định làm một tờ rơi đơn giản, không phải tờ rơi chúng ta đã làm tuần trước, trong đó có các liên kết và trình bày mọi thứ một cách chi tiết.
- Chỉ dựa trên một cú lấy nhanh.
### Muc 93

- Giống như một công cụ tóm tắt web hơn.
- Vậy thì, ừm, tôi sẽ nhập khẩu thứ đó.
- Lấy nội dung trang web từ scraper dot pi mà tôi có bản sao trong thư mục này và thư mục kia.
- Ừm, và rồi ừm, tôi lại nói hơi quá rồi đây.
- Tôi sẽ ghi đè lên thông báo hệ thống tương tự trước khi tận dụng lợi thế của việc đây là biến toàn cục trong sổ ghi chép này.
- Không phải là thực hành kỹ thuật phần mềm tốt, nhưng là thử nghiệm khoa học dữ liệu tuyệt vời.
- Bạn là trợ lý phân tích nội dung trang đích của trang web công ty và tạo một tài liệu quảng cáo ngắn về công ty.
- Trả lời bằng markdown mà không cần khối mã.
## Phan 32

### Muc 94

- Chúng ta sẽ có một cuộc gọi lại thông tin quảng cáo giống như trước và chúng ta sẽ xây dựng lời nhắc.
- Và sau đó chúng tôi sẽ phát trực tiếp từ Claude hoặc GPT.
- Và với điều đơn giản đó, chúng ta có thể chạy.
- Bây giờ chúng ta có thể tạo trình tạo tài liệu quảng cáo công ty.
- Ồ, UI, đây rồi.
- Bạn thấy tên công ty này được đặt nhanh thế nào không?
- Tôi đã đưa ra một số ví dụ ở đây.
- Chúng ta có thể thực hiện lại mô hình Huggingface Huggingface.
### Muc 95

- Hãy thử GPT.
- Hãy nộp bài thôi.
- Chúng tôi hiện đang yêu cầu GPT cung cấp cho chúng tôi một ví dụ, ừm, về một tờ rơi giới thiệu công ty từ Hugging Face.
- Và một lần nữa, nó không theo các liên kết.
- Đây chỉ là phiên bản đơn giản chỉ sử dụng trang đích, nhưng vẫn rất mạnh mẽ.
- Và chúng ta cũng có thể có một ví dụ khác là tưởng tượng tôi là một công ty.
- Hãy xem trang web của tôi và lần này chúng ta có thể yêu cầu Claude xem trang đích của tôi.
- Nộp cái đó đi.
### Muc 96

- Và bây giờ chúng ta sẽ có một nhà đổi mới xuất sắc tại giao điểm giữa AI và tiềm năng của con người.
- Nghe tuyệt quá, tôi thích lắm.
- Ồ, vậy là xong.
- Từ nhân học.
- Chúng ta chỉ còn vài phút nữa, thậm chí có thể chỉ vài giây nữa thôi.
- Tạo giao diện người dùng để xây dựng một tờ rơi dựa trên mã mà chúng tôi đã viết trước đó.
- Và tôi hy vọng rằng bạn sẽ ngạc nhiên vì điều này.
- Thật dễ sử dụng.
## Phan 33

### Muc 97

- Và tôi thấy rất thoải mái với tư cách là một nhà khoa học dữ liệu, một người thích làm việc chủ yếu ở phần back-end, khi tôi có thể nhanh chóng tạo ra những bản demo tuyệt vời, những MVP tuyệt vời như thế này chỉ với một vài dòng mã.
- Và tất nhiên, đối với một số bài tập bạn có thể thực hiện theo cách này, bạn có thể tăng cường cách này để thực sự sử dụng phương pháp Lynx mà chúng ta đã thực hiện trong tuần đầu tiên.
- Nhận được các liên kết, xây dựng một tờ rơi mạnh mẽ hơn.
- Thật tuyệt.
- Bạn có thể sử dụng share equals true nếu môi trường của bạn có khả năng sử dụng và chia sẻ nó.
- Bạn có thể thêm xác thực một cách dễ dàng.
- Vì vậy, nó có ID người dùng và mật khẩu.
- Ồ, và bạn có thể đưa nó theo một hướng khác, cung cấp cho nó chức năng kinh doanh khác.
### Muc 98

- Bạn đã khám phá ra việc xây dựng giao diện người dùng cho mục đích thương mại dễ dàng như thế nào.
- Tôi cũng gợi ý bạn nên tham khảo các tài nguyên của Gradio.
- Nó có các tài liệu tuyệt vời được giải thích rất rõ ràng và có thể bắt đầu và chạy rất nhanh.
- Vậy thì bạn nên làm như vậy.
- Xây dựng một số thứ.
- Nếu bạn xây dựng thứ gì đó mới bằng Gradio thì hãy đưa nó vào mục đóng góp của cộng đồng.
- Gửi cho tôi một PR, bạn sẽ thấy có bao nhiêu ở đây.
- Nhìn kìa, có rất nhiều thứ khác nhau ở đây.
### Muc 99

- Mọi người đã xây dựng nên những công trình tuyệt vời.
- Thêm vào của bạn.
- Cho tôi xem bạn có gì nhé.
- Sử dụng một con lạc đà không bướu để làm thêm một số mô hình.
- Bất cứ điều gì.
- Bất cứ điều gì bạn quan tâm.
- Hãy coi đây là cơ hội để thử nghiệm và xây dựng lại.
- Cách tốt nhất để học là thông qua việc xây dựng.
## Phan 34

### Muc 100

- Vậy hãy làm như vậy, tạo một số giao diện người dùng và đăng bài về nó trên LinkedIn để tôi có thể đưa ra ý kiến và tôi sẽ gặp lại bạn để hoàn thiện.
- Tôi đã nói điều này trước rồi.
- Hành trình này là về việc thăng cấp, thăng cấp, thăng cấp.
- Khi bạn xây dựng các kỹ năng khác nhau và vừa lên cấp, bạn vừa xây dựng khả năng nhanh chóng tạo ra giao diện người dùng (UI).
- Và hy vọng ý tưởng về cuộc gọi lại sẽ thành hiện thực với bạn.
- Hoặc có thể bạn đã biết tất cả những điều đó rồi, nhưng dù sao thì, tại thời điểm này, bạn có thể tự tin sử dụng markdown phát trực tuyến của OpenAI API, JSON, bạn có thể sử dụng một loạt các mô hình frontier và giờ bạn đã biết cách xây dựng UI cho tương lai.
- Bạn có thể nhận thấy hạn chế của giao diện người dùng này là không có lịch sử trò chuyện.
- Chúng tôi chỉ nói một tin nhắn duy nhất.
### Muc 101

- Ngày mai chúng ta sẽ biến nó thành giao diện trò chuyện nơi chúng ta có thể trò chuyện liên tục.
- Chúng tôi có thể cung cấp bối cảnh.
- Chúng ta cũng sẽ xem xét Multi-shot, đưa ra một cách tiếp cận cực kỳ phổ biến và bạn sẽ xây dựng trợ lý AI hỗ trợ khách hàng đầu tiên của mình.
- Nếu bản tóm tắt mà chúng ta đã thực hiện trong tuần đầu tiên là một trong những trường hợp sử dụng chính thì có lẽ điều này còn lớn hơn nữa.
- Đây là trường hợp sử dụng chính tuyệt đối.
- Chúng ta sẽ cùng nhau làm việc đó vào ngày mai.
- Hẹn gặp lại bạn sau.

