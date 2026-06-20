# Ngay 038 - Tuan 8, ngay 3

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-038.txt

## Tong quan

- Chu de mo dau: Được rồi, một khoản phạt.
- File goc: day-038.txt
- So y chinh: 407
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Được rồi, một khoản phạt.
- Chào mừng đến với tuần thứ tám.
- Ngày thứ ba.
- Hôm nay là ngày để nâng cấp kỹ năng một lần nữa với một kỹ năng mới.
- Đầu ra có cấu trúc.
- Kỹ năng này vô cùng quan trọng trong cách hệ thống quản lý học tập (LMS) hoạt động, đặc biệt là khi làm việc với các quy trình làm việc của Agentic.
- Tất nhiên, bạn có thể sử dụng các mô hình tiên tiến và mã nguồn mở, sử dụng các công cụ và tài nguyên, cũng như tinh chỉnh cả mô hình tiên tiến và mô hình mã nguồn mở.
- Điều quan trọng là, bạn cũng có thể triển khai mô hình được tinh chỉnh với modal.
### Muc 2

- Bạn có thể sử dụng Rag với các mô hình tiên tiến có cấu hình lớn với 800.000 mục tương tự và kết hợp chúng thành một mô hình tổng hợp, kết hợp những điểm mạnh của nhiều mô hình khác nhau.
- Được rồi.
- Hôm nay, hôm nay chúng ta sẽ nói về các đầu ra có cấu trúc.
- Và điều quan trọng là, một trong những ứng dụng của điều này, có rất nhiều, rất nhiều, rất nhiều ứng dụng của đầu ra có cấu trúc.
- Một trong những việc chúng ta sẽ thực hiện hôm nay là sử dụng nó như một công cụ để phân tích dữ liệu không cấu trúc và chuyển đổi dữ liệu không cấu trúc thành dạng cấu trúc, đây là một nhiệm vụ kinh doanh, một nhiệm vụ thương mại mà bạn thường xuyên phải đối mặt.
- Và các hệ thống học máy (LLMs) thực sự rất giỏi trong việc đó.
- Hãy bắt đầu thôi.
- Vậy là các kết quả có cấu trúc.
### Muc 3

- Vậy có một cách mà các đầu ra có cấu trúc hoạt động.
- Và rồi còn có những gì họ thực sự là.
- Nó有点像工具调用 Khi việc gọi công cụ có vẻ như mô hình ngôn ngữ lớn (LLM) có thể đột ngột thực hiện các cuộc gọi đến các công cụ, nhưng trên thực tế, đó là một việc đơn giản hơn nhiều.
- Vì vậy, khi làm việc với các đầu ra có cấu trúc, bạn có thể định nghĩa một lớp Python và phải làm cho nó trở thành một lớp con của mô hình cơ sở (base model) - một đối tượng có cấu trúc chặt chẽ mà chúng ta đã đề cập đến một vài lần.
- Vậy.
- Vậy bạn tạo một lớp Python, nó là một lớp con của một lớp gọi là base model.
- Và khi bạn làm điều đó, điều đó có nghĩa là bạn định nghĩa từng thuộc tính của lớp này một cách cẩn thận.
- Vậy là bạn định nghĩa một lớp theo cách đó.
## Phan 2

### Muc 4

- Và bạn có thể thấy OpenAI đã phát minh ra điều này, và hiện nay hầu hết các nhà cung cấp khác cũng hỗ trợ nó, nhưng không phải tất cả.
- Nhưng bạn có thể nói với nhà cung cấp: "Này, khi bạn làm theo những gì tôi sắp yêu cầu bạn làm trong lời nhắc của tôi, khi bạn phản hồi, đừng phản hồi bằng ngôn ngữ tự nhiên." Trả lời bằng một đối tượng, một đối tượng đã được khởi tạo, một đối tượng Python với các trường đã được điền đầy đủ.
- Điều đó thật kỳ lạ phải không?
- Nó giống như một mô hình ngôn ngữ tự nhiên.
- Tại sao nó đột nhiên không thể dự đoán các token nữa, mà thay vào đó có thể tạo ra một đối tượng, một đối tượng Python, và đó chính là kết quả bạn nhận được?
- Đó chính là sức mạnh của đầu ra có cấu trúc.
- Và đó chính là cảm giác đó.
- Và điều đó thực sự rất tuyệt vời.
### Muc 5

- Và nó cho phép bạn làm được rất nhiều điều.
- Nó cho phép bạn tạo cấu trúc cho các cuộc gọi này, những cuộc gọi khá linh hoạt đến các mô hình ngôn ngữ lớn (LLMs).
- Nó cho phép bạn giới hạn kết quả nhận được.
- Nó cho phép bạn thực hiện các hành động dựa trên thông tin đó.
- Vì vậy, nó cho phép bạn tổ chức và cấu trúc cách bạn phối hợp giữa nhiều mô hình ngôn ngữ lớn (LLMs).
- À, nhưng, ừm, đúng vậy, cảm giác này là như vậy.
- Nhưng thực tế, như thường lệ, lại đơn giản hơn nhiều.
- Vậy đây là thực tế.
### Muc 6

- Lý do bạn tạo một lớp con của mô hình cơ sở pedantic là vì mục đích chính của pedantic là định nghĩa một lược đồ JSON.
- Nếu bạn có một đối tượng là một lớp con của mô hình cơ sở, bạn có thể chuyển đổi nó thành JSON và sau đó chuyển đổi JSON trở lại thành đối tượng ban đầu.
- Vậy, lớp pedantic mà bạn đã thiết lập được sử dụng để tạo ra một sơ đồ JSON, một tài liệu mô tả rằng JSON phải tuân thủ các quy định sau và trình bày chi tiết các quy định đó.
- Nó cần phải có các trường này.
- Và bạn thêm mô tả bằng ngôn ngữ tự nhiên cho các trường của mình, và mô tả đó sẽ được bao gồm trong sơ đồ JSON.
- Và OpenAI chỉ đơn giản là thêm một yêu cầu bổ sung vào lời nhắc hệ thống, yêu cầu rằng khi tạo phản hồi, bạn phải trả lời dưới dạng JSON và phải tuân thủ schema này, xin vui lòng.
- Và như vậy, mô hình chỉ tạo ra các token.
- Tất cả những điều đó tạo ra token.
## Phan 3

### Muc 7

- Và các token mà nó tạo ra là JSON.
- Và các mô hình máy học rất thích tạo ra JSON vì chúng được đào tạo trên một lượng lớn dữ liệu JSON.
- Và nó tuân thủ sơ đồ vì nó nằm trong lời nhắc hệ thống.
- Sau đó, thư viện khách hàng Python của OpenAI sẽ lấy JSON đó và chuyển đổi nó thành một đối tượng của lớp mà bạn muốn được điền đầy đủ các trường JSON đó.
- Và thế là, bạn nhận được một đối tượng Python.
- Đó chính là cách nó thực sự hoạt động.
- Nó không có gì đặc biệt kỳ diệu, nhưng nó mang lại cho bạn cảm giác rằng bạn có thể giao tiếp với các đối tượng Python thông qua các mô hình thay vì chỉ sử dụng ngôn ngữ tự nhiên.
- Nhưng có một điều về nó thực sự rất kỳ diệu.
### Muc 8

- Có một điều về nó khiến người ta phải thốt lên: "Wow, thật thông minh!" Một điều về các đầu ra có cấu trúc mà bạn, ngay cả khi bạn đã biết tất cả những điều đã được đề cập cho đến nay, có thể bạn vẫn chưa biết đến tính năng nhỏ bé này.
- Ít nhất thì đây là cách nó được triển khai với OpenAI và một số nhà cung cấp khác.
- Và nó thực sự, thực sự thông minh.
- Và để giải thích điều đó cho bạn, tôi cần nhắc lại cách thức hoạt động của suy luận.
- Hãy nhớ rằng, khi mô hình tạo ra token tiếp theo, nó không thực sự tạo ra một token.
- Đó không phải là kết quả mà mạng thần kinh cho ra.
- Kết quả thu được sau khi áp dụng hàm softmax là một tập hợp các xác suất, bao gồm tất cả các xác suất của tất cả các token có thể xuất hiện tiếp theo.
- Và sau đó có một đoạn mã cho biết: "Được rồi, tôi sẽ chọn giá trị có khả năng cao nhất" hoặc "Được rồi, tôi sẽ lấy mẫu từ các giá trị này theo phân phối xác suất của chúng." À, có một mẹo đấy.
### Muc 9

- Và có một kỹ thuật được gọi là giải mã có giới hạn thời gian suy luận.
- Đó là tên kỹ thuật của nó.
- Và ngay cả từ những lời đó, có lẽ bạn đã biết tôi sắp nói gì.
- Nói chung, khi mô hình tạo ra phân phối xác suất này, OpenAI đã viết một số mã Python nói rằng, "Đợi đã." Mô hình này cần tuân thủ.
- Điều này cần tạo ra một đối tượng tuân thủ một tiêu chuẩn JSON cụ thể.
- Hãy để tôi xem xét tất cả các token có thể tiếp theo và kiểm tra xem có token nào trong số này có thể vi phạm quy định về token hay không.
- Điều đó có nghĩa là kết quả đầu ra sẽ không tuân thủ tiêu chuẩn, và tôi sẽ đơn giản là đặt xác suất về 0 để mô hình, dù xảy ra bất kỳ điều gì, cũng sẽ không tạo ra một token vi phạm tiêu chuẩn JSON.
- Nó chỉ có thể tạo ra.
## Phan 4

### Muc 10

- Tôi chỉ sẽ giữ lại các xác suất cho những trường hợp phù hợp với thông số kỹ thuật.
- Và sau đó, chúng ta sẽ tạo ra.
- Sau đó, chúng ta sẽ chọn token tiếp theo và thực hiện thủ thuật đó.
- Và đó chẳng phải là điều thông minh sao.
- Đơn giản quá.
- Khi bạn nghe thấy điều đó, bạn sẽ nghĩ: "Tôi đã nghĩ ra điều đó, nhưng bạn lại không nghĩ ra." Nhưng một khi bạn đã nghe thấy điều đó, nó giống như, tất nhiên, tất nhiên.
- Và điều đó có nghĩa là mô hình thực sự bị giới hạn, nghĩa là nó phải tạo ra văn bản tuân thủ theo thông số kỹ thuật.
- Trường hợp xấu nhất là nó không bao giờ đưa ra kết luận.
### Muc 11

- Nó cứ tiếp tục như vậy hay gì đó.
- Vậy vẫn còn một số tình huống thất bại.
- Nhưng ngoài ra, khi sử dụng OpenAI, nó sẽ luôn tạo ra kết quả đầu ra tương thích với lược đồ JSON của Pydantic.
- Và do đó, đây là cách để đảm bảo rằng phản hồi từ mô hình sẽ được gán vào đối tượng Python của bạn.
- Và điều đó thực sự thông minh.
- Được rồi.
- Và như vậy, chúng ta sẽ trực tiếp đến phòng thí nghiệm.
- Chúng ta sẽ quay lại với việc lập trình.
### Muc 12

- Và chúng ta sẽ tập trung vào trình quét.
- Tôi sẽ gặp bạn tại con trỏ.
- Được rồi.
- Vậy là chúng ta bước vào tuần thứ tám.
- Chúng ta đến ngày thứ ba.
- Chào mừng đến với phần tiếp theo của The Price is Right.
- Chúng tôi đã phát triển thành công mô hình đại lý chuyên gia và mô hình đại lý tổng hợp của mình.
- Bây giờ chúng ta sẽ bắt đầu xây dựng trình quét của mình.
## Phan 5

### Muc 13

- Tôi sẽ thực hiện một số thao tác nhập dữ liệu.
- Đây là đoạn mã mà tôi đã viết để trích xuất dữ liệu từ các nguồn RSS và phân tích kết quả.
- Để tôi bắt đầu và sau đó sẽ cho các bạn xem.
- Đó là những kiến thức cơ bản.
- Không có gì đáng nói về điều đó.
- Nó nằm trong các giao dịch.
- Điểm chấm ở đây.
- Bạn bắt đầu bằng cách chọn một số nguồn RSS.
### Muc 14

- Tôi có một ưu đãi dành cho các sản phẩm điện tử, máy tính và thiết bị nhà thông minh từ Dealnews.com.
- Và đây là một cặp sản phẩm khác dành cho ngành Ô tô và Lực lượng Bảo vệ Nhà nước.
- Và bạn có thể tham gia nếu muốn.
- Và bạn có thể thêm bất kỳ nguồn RSS nào mà bạn muốn.
- Tôi sử dụng một thư viện có tên là Feedparser, đây là một thư viện mã nguồn mở dùng để phân tích các nguồn tin RSS, cho phép đọc chúng một cách đơn giản.
- Tôi chỉ lấy mười mục đầu tiên từ mỗi mục.
- Bạn có thể tăng con số đó lên nếu bạn muốn có nhiều hơn, nhưng có vẻ như đó là một việc làm hợp lý.
- Và à, sau đó tôi chỉ cần đọc qua các thông tin đó và cũng truy cập vào trang web nơi giao dịch được mô tả chi tiết, và tôi thu thập càng nhiều dữ liệu càng tốt từ đó.
### Muc 15

- Vậy là chúng ta có một số dữ liệu không cấu trúc liên quan đến giao dịch này, và đó chính là những gì chúng ta có ở đây.
- À, nó đã được tải và đang chạy ba nguồn RSS đó.
- Nếu tôi xem xét điều này, chúng ta có 30 giao dịch vì đó là ba bộ gồm mười giao dịch mỗi bộ.
- Nếu tôi chọn ngẫu nhiên, hãy xem giao dịch số mười.
- Đây là nó.
- Đây là chương trình khuyến mãi Cyber Monday dành cho game thủ của Dell, với rất nhiều thông tin chi tiết về chương trình và liên kết trực tiếp đến ưu đãi.
- À, đó chính là những gì chúng ta đã thu thập được.
- Được rồi.
## Phan 6

### Muc 16

- Đây chính là nơi diễn ra mọi thứ.
- Tôi có một thông báo hệ thống.
- Bạn xác định và tóm tắt năm giao dịch chi tiết nhất từ danh sách bằng cách chọn các giao dịch, v.v., v.v., v.v., v.v., v.v.
- Tôi khuyên bạn nên cẩn thận với các sản phẩm được mô tả là giảm giá hoặc giảm giá một phần.
- Đây không phải là giá thực tế mà bạn cần trả lời, vân vân và một lời nhắc tương tự cho người dùng, tôi đang nói với bạn, bạn sẽ nhận được danh sách các mặt hàng mà bạn cần trả lời với năm giao dịch hứa hẹn nhất.
- Và đừng để bị phân tâm bởi những thứ quảng cáo giảm giá $1,000.
- Điều quan trọng là chính giá cả thực tế.
- Và tất nhiên, tôi nói điều này vì tôi đã thử nghiệm, đã thử nhiều cách khác nhau.
### Muc 17

- Nó đã không đạt được mục tiêu theo nhiều cách khác nhau.
- Nó đôi khi bị nhầm lẫn với mức giảm giá của một giao dịch.
- Đó là cách tôi đã đến đây.
- Thỉnh thoảng tôi trình bày điều này như thể đây là điều đầu tiên tôi gõ.
- Không phải.
- Với những dự án như thế này, điều quan trọng là bạn sẵn sàng xắn tay áo lên và thử nghiệm với các lệnh cho đến khi đạt được hiệu suất mong muốn.
- Được rồi, đó là lời nhắc hệ thống và lời nhắc người dùng, uh, tiền tố.
- Và bây giờ tôi sẽ tạo một lời nhắc cho người dùng.
### Muc 18

- Nó sẽ có tiền tố này ở đây.
- Và đó sẽ là nội dung của tất cả 30 mục mà chúng ta đã thu thập.
- Vậy chúng ta đang tạo một lời nhắc có hướng dẫn này.
- Và sau đó, nó có hướng dẫn này.
- Và sau đó, nó có 30 thứ khác nhau bên trong.
- Và ở phần cuối, nó sẽ hiển thị chính xác năm giao dịch, không hơn.
- Vậy hãy tải nó vào.
- Và bây giờ, hãy sử dụng hàm này với một lời nhắc.
## Phan 7

### Muc 19

- Vậy để tôi cho bạn xem nó trông như thế nào.
- Chúng tôi sẽ chỉ hiển thị 2000 ký tự đầu tiên của nó.
- À, đây là cách nó trông như thế này.
- Trả lời với năm giao dịch tiềm năng nhất từ danh sách, v.v., v.v.
- các giao dịch.
- Và đây là các ưu đãi.
- Mỗi cái đều ổn cho đến nay.
- Đúng là như vậy, phải không?
### Muc 20

- Chúng tôi chỉ đang nói ra điều đó.
- Chúng tôi muốn bạn tìm ra năm giao dịch tiềm năng nhất.
- Chưa có thông tin gì về đầu ra có cấu trúc.
- Được rồi.
- Nhưng bây giờ đến phần kết quả có cấu trúc.
- Thông thường, đây là nơi tôi sẽ yêu cầu OpenAI tạo ra thứ gì đó mà bạn đã quá quen thuộc, nhưng hiện tại tôi không có OpenAI.
- Một điều gì đó khác biệt.
- Và đó là cách bạn mô tả các kết quả có cấu trúc.
### Muc 21

- Và trong hàm phân tích này, nó có các tham số thông thường: tên mô hình, các thông điệp, và nỗ lực suy luận mà bạn đã từng nhắc đến từ lâu với thuật ngữ "minimal".
- Nhưng còn một điều nữa.
- Có định dạng phản hồi và chúng ta đang truyền thông tin này trong quá trình lựa chọn giao dịch.
- Đó là gì?
- À, đó thực ra là thứ mà tôi đã nhập khẩu và cũng có trên trang deals.pi.
- Hãy cùng tìm kiếm lựa chọn ưu đãi.
- Nó được gọi là uh và đây là nó.
- Đây là một lớp con của mô hình cơ sở.
## Phan 8

### Muc 22

- Và đó là một lớp chỉ có một trường deals.
- Và trường đó là danh sách các đối tượng giao dịch, được không.
- Vì vậy, danh sách giao dịch là danh sách các đối tượng giao dịch.
- Và bạn sẽ thấy ở đây, điều này có vẻ hơi cầu kỳ, nhưng tôi muốn nói rằng nó có một trường dữ liệu được gọi là "deal".
- Và bạn có thể mô tả nó bằng tiếng Anh.
- Và vì vậy, tôi mô tả sự lựa chọn của bạn về năm giao dịch có mô tả chi tiết và chất lượng cao nhất cùng với giá cả rõ ràng nhất.
- Bạn nên tin tưởng rằng giá cả phản ánh đúng giá trị của giao dịch.
- Đó là một giao dịch tốt với mô tả rõ ràng.
### Muc 23

- Được rồi.
- Vậy mỗi đối tượng giao dịch này là gì?
- Mỗi đối tượng đều có mô tả sản phẩm, giá cả và URL.
- Mô tả sản phẩm là tóm tắt rõ ràng và súc tích về sản phẩm.
- Mô tả là giá thực tế.
- Hãy chắc chắn cung cấp giá thực tế.
- Và sau đó.
- Và rồi bạn biết đấy, nếu ưu đãi là giảm $100 cho đơn hàng $500, thì bạn nên trả $400.
### Muc 24

- Và sau đó là URL được cung cấp.
- Vậy đây là cách chúng ta đã định nghĩa một cấu trúc chi tiết cho đối tượng lựa chọn giao dịch, chứa các giao dịch là bản sao của đối tượng này, kèm theo mô tả, giá và URL.
- Và điều quan trọng cần lưu ý ở đây là chúng ta không chỉ mô tả sơ đồ JSON này, mà còn có các quy tắc để giải thích cách điền vào từng trường, và chính điều đó cho phép chúng ta hiện tại thực hiện cuộc gọi đầu ra có cấu trúc này.
- Và để giúp bạn hiểu rõ hơn, tôi muốn chỉ cho bạn cách chọn giao dịch này.
- Đây là một lớp học.
- Tôi đã định nghĩa nó trong quá trình lựa chọn đại lý.
- Chúng tôi chỉ đang xem nó.
- Đó là vì nó là một lớp chi tiết, một lớp con của mô hình cơ sở.
## Phan 9

### Muc 25

- Nó có một số chức năng mà nó thừa hưởng.
- Một trong số đó là tôi có thể gọi mô hình.
- Mô hình.
- À, ừm, xin lỗi.
- Mô hình.
- À, sơ đồ này.
- Và bây giờ khi tôi chạy lệnh này, chúng ta sẽ thấy mô tả JSON của lược đồ JSON liên quan đến đối tượng này.
- Và chính loại sơ đồ này được cung cấp trong lời nhắc hệ thống cho OpenAI để yêu cầu GPT tuân thủ sơ đồ này.
### Muc 26

- Và đó là cách khi chúng ta gọi hàm OpenAI parse và chỉ định định dạng phản hồi là "deal selection", nó sẽ trả về một đối tượng JSON tuân thủ theo thông số kỹ thuật đó.
- Và bạn đã quen với việc chúng tôi xem kết quả là phản hồi chấm lựa chọn, không có nội dung tin nhắn.
- Và đó không phải là điều chúng ta có ở đây.
- Đó là phản hồi số 0 20...
- Và điều đó làm là nó lấy nội dung và lấy JSON, sau đó điền vào một đối tượng loại deal selection bằng những thông tin đó.
- Vậy nếu tôi chạy đoạn code này, nó sẽ chuyển đổi đối tượng JSON đó thành một lược đồ.
- Nó đang gọi OpenAI với lời nhắc này.
- Đúng vậy.
### Muc 27

- Mô hình OpenAI GPT này đang tạo ra JSON tuân thủ theo lược đồ này.
- Và kết quả trả về là một đối tượng lựa chọn giao dịch được điền đầy đủ với dữ liệu JSON đã được trả về.
- Và vì vậy, nếu bạn nhìn vào thứ này, bạn có thể thấy rằng nó là một đối tượng chọn giao dịch.
- Nó có một trường gọi là "deals", mỗi trường trong số đó là một giao dịch.
- Thế nên hãy chờ đã.
- Nếu tôi thêm một số mã ở đây và nói rằng đối với các giao dịch trong kết quả, chúng ta sẽ làm chính xác những gì con trỏ đề xuất.
- Và hãy xem cái này.
- Bạn có thể thấy rằng chúng tôi có một thiết bị theo dõi sức khỏe, đang được bán với giá cực kỳ rẻ, mỗi chiếc Dell 16 plus.
## Phan 10

### Muc 28

- Đây là một chiếc laptop Dell có giá $550.
- Trông có vẻ là một món hời tuyệt vời.
- Và có thể bạn đang nghĩ rằng, chiếc đồng hồ theo dõi sức khỏe này chỉ có giá $15.
- Điều đó nghe có vẻ quá tốt để là sự thật.
- Vâng, chúng ta có thể kiểm tra lại.
- Dưới đây là liên kết đến dealnews.com.
- Đây là URL được trả về trong các kết quả đầu ra có cấu trúc của chúng tôi.
- Hãy nhấp vào nó và xem nó hiện ra.
### Muc 29

- Đây chính là nó.
- Đây là trang web đã được trích xuất bởi mã nguồn của tôi.
- Và điều này, nếu ở định dạng không cấu trúc, sẽ được gửi đến GPT.
- Và đã phát hiện ra rằng nó chưa cung cấp cho chúng ta số 159.
- Nó đã mang lại cho chúng ta mức giá $15 cực kỳ rẻ ở đó.
- Vậy là nó đã hoàn toàn chính xác.
- Hãy xem cái này ở đây.
- $550 chính là giá của máy tính Dell.
### Muc 30

- Nhiều cửa sổ pop-up không ổn định xuất hiện.
- Vậy là nó đã hoạt động tốt.
- Nó đã phân tích dữ liệu không cấu trúc, thu thập từ internet, và chuyển đổi chúng thành các đối tượng chi tiết.
- Nó đã trả lời bằng định dạng JSON tuân thủ lược đồ.
- Thư viện OpenAI đã chuyển đổi điều đó thành một đối tượng chi tiết, và nó đã được điền đầy đủ thông tin một cách chính xác.
- Bây giờ có một điểm nữa tôi muốn đề cập ở đây, đó là một điểm mang tính thương mại và rất quan trọng.
- Điều chúng ta vừa làm là lấy dữ liệu không cấu trúc từ internet và phân tích nó, và làm điều đó một cách thông minh, nghĩa là một ưu đãi như "giảm $100 trên $300" sẽ được hiểu là "giảm $200".
- Đó gần như là một vấn đề chưa được giải quyết chỉ vài năm trước đây.
## Phan 11

### Muc 31

- Có rất nhiều trình phân tích cú pháp dành cho các lĩnh vực khác nhau, nhưng chúng thường rất khó tính, rất cứng nhắc và đến mức nếu nội dung không tuân thủ đúng như mong đợi, thì chúng sẽ bị lỗi.
- Vì vậy, dù bạn có cố gắng thế nào để hiểu cách hệ thống sẽ diễn giải văn bản, nếu văn bản đó không có đủ ý nghĩa, nếu nó không ghi "$100 giảm giá cho $300", mà thay vào đó nó ghi điều gì đó như "Thông thường là giảm $200, nhưng tuần này chỉ giảm $250".
- Điều đó hoàn toàn không thể xử lý được bằng bất kỳ phương pháp nào trên hành tinh này, và đã có rất nhiều phương pháp cố gắng thực hiện điều này theo những cách khác nhau, nhưng đều rất cồng kềnh và dễ vỡ.
- Chúng sẽ bị hỏng khi các định dạng thay đổi theo những cách khác nhau.
- Và bằng cách nào đó, trong vòng vài năm, việc phân tích loại dữ liệu này đã trở thành một vấn đề đã được giải quyết, mà các mô hình ngôn ngữ lớn (LLMs) có thể thực hiện.
- Chúng có thể xử lý dữ liệu không cấu trúc với những phức tạp tương tự như con người, như các loại giao dịch khác nhau và các trường hợp ngoại lệ khác nhau, và chúng có thể giải thích nó với một loại trí tuệ như vậy.
- Và đây là điều gần như kỳ diệu.
- Nếu bạn đã từng thử viết các trình phân tích cú pháp trước đây và trong lĩnh vực này.
### Muc 32

- Tôi đã thực hiện rất nhiều công việc liên quan đến phân tích hồ sơ xin việc.
- Đó là một vấn đề gần như đã được giải quyết.
- Có rất nhiều công cụ phân tích CV trên thị trường, nhưng do CV có quá nhiều định dạng khác nhau, các công cụ phân tích CV đã phát triển theo thời gian trở nên rất phức tạp và nặng nề.
- Những thứ có vô số điều kiện được tích hợp sẵn.
- Và chúng khá tốt, nhưng chúng hơi đắt.
- Và bây giờ, các hệ thống học máy (LLMs) có thể dễ dàng phân tích CV.
- Điều đó rất dễ dàng và không ai ngờ tới.
- Khả năng của các mô hình ngôn ngữ lớn (LLMs) trong việc phân tích dữ liệu không cấu trúc và chuyển đổi chúng thành dạng cấu trúc.
### Muc 33

- Đó là điều gì đó thật phi thường.
- Và tất nhiên, nó cũng có những nhược điểm riêng.
- Có một chi phí cho điều đó.
- Có độ trễ và có sự không thể dự đoán được khi sử dụng các mô hình ngôn ngữ lớn (LLMs).
- Tuy nhiên, việc phân tích thông minh là một giải pháp hoàn toàn mới mà trước đây chưa từng có.
- Và đây là điều có rất nhiều ứng dụng.
- Tôi cá là bạn có thể nghĩ ra một nơi nào đó trong công việc hiện tại của mình mà bạn có thể áp dụng loại trình phân tích cú pháp này để chuyển đổi dữ liệu không cấu trúc thành dữ liệu có cấu trúc.
- Và chìa khóa để có thể làm được điều đó là sử dụng đầu ra có cấu trúc, vì nó đảm bảo định dạng đầu ra.
## Phan 12

### Muc 34

- Và bây giờ, điều duy nhất còn lại là chúng ta cần kích hoạt tính năng ghi nhật ký và tạo một thành phần gọi là "scanner agent".
- Hãy cùng xem qua nhanh nhé.
- Điều đó thực sự rất đơn giản.
- Đó chính xác là cùng một thứ, cùng một thông báo hệ thống, cùng một thông báo cho người dùng.
- Luôn có một màu sắc, luôn luôn có một màu sắc.
- Và sau đó tìm kiếm các giao dịch.
- Bạn có thể thấy tôi đã thêm một số bình luận và gợi ý kiểu dữ liệu vì đó là việc nên làm.
- Vậy đây là bước đầu tiên nhằm đưa mã nguồn này vào sản xuất.
### Muc 35

- À, sau khi đã lưu trong sổ tay, hãy yêu cầu người dùng thực hiện thao tác tương tự và sau đó quét như trước đây.
- Đây là nơi chúng ta truyền định dạng phản hồi.
- Và đây là nơi chúng ta gọi là phản hồi .0.
- đã được phân tích, tất nhiên đây là nơi chúng ta nói rằng chúng ta đang sử dụng đầu ra có cấu trúc.
- Và như vậy, chúng ta có thể gọi trình quét (scanner agent) và gọi trình quét (agent scan).
- Chúng tôi thấy các thông báo nhật ký của mình hiển thị bằng màu cyan.
- Và hy vọng sau vài phút, chúng ta sẽ nhận được một số giao dịch đã được quét, đã được đọc từ nguồn cấp RSS và sau đó được gửi đến GPT-5, hệ thống này đang thực hiện hai tác vụ.
- Nó đang lựa chọn những giao dịch tiềm năng nhất, đồng thời phân tích chúng và chuyển đổi thành đầu ra có cấu trúc, trong đó các thông tin như giá cả và URL được xác định rõ ràng.
### Muc 36

- Được rồi.
- Thôi, tôi sẽ để nó kết thúc như vậy cho đến khi nó kết thúc.
- Hiện tại, nó đã nhận được 30 giao dịch và hiện đang gọi OpenAI bằng cách sử dụng đầu ra có cấu trúc.
- Bước cuối cùng của quá trình này.
- Và sau đó chúng ta sẽ xem kết quả.
- Và bây giờ chúng ta sẽ chuyển sang phần cuối cùng của ngày hôm nay, đó là một tính năng nhỏ cuối cùng mà tôi nghĩ sẽ khiến các bạn thích thú.
- Được rồi.
- Tôi sẽ để việc này hoàn tất và sẽ quay lại ngay lập tức.
## Phan 13

### Muc 37

- Được rồi.
- Và đây là nó.
- Và chúng ta xem xét kết quả.
- Và tất nhiên, chúng ta có một đối tượng chọn giao dịch nhờ vào thủ thuật này.
- Chiêu trò suy luận mà chúng ta đã biết là chúng ta sẽ làm và nó bao gồm thiết bị theo dõi sức khỏe ở phía trước.
- Được rồi.
- Tiếp theo, đại lý cuối cùng của ngày hôm nay là một công cụ rất đơn giản và nhanh chóng, và tôi muốn giới thiệu với các bạn một công cụ mới có tên là pushover, đây là một công cụ nhỏ gọn và tiện lợi để gửi thông báo đẩy đến điện thoại của bạn.
- Bạn có thể đã quen thuộc với các nền tảng như Twilio có khả năng gửi tin nhắn văn bản.
### Muc 38

- Họ khá nghiêm ngặt và yêu cầu bạn phải điền nhiều giấy tờ để được phép gửi tin nhắn văn bản, nhằm tránh việc bạn spam người khác.
- Một cách tiếp cận đơn giản hơn nhiều, nếu bạn muốn nhắn tin cho chính mình, là sử dụng một ứng dụng kết nối trực tiếp với bạn.
- Pushover là miễn phí, ít nhất là trong tháng đầu tiên hoặc lâu hơn, vì vậy bạn nên là người sử dụng nó.
- Thôi nào, điều này không quá quan trọng.
- Điều này không liên quan gì đến khả năng của Llms trong việc gửi thông báo đẩy, nhưng thật thú vị khi có cảm giác rằng một tác nhân có khả năng tự chủ để thực hiện điều đó, gửi thông báo đẩy đến điện thoại của bạn.
- Vì vậy, tôi khuyến khích bạn thực hiện quy trình cài đặt nhỏ này, mặc dù tôi hiểu rằng nó không hoàn toàn liên quan, nhưng tôi sử dụng nó trong các khóa học khác của mình cho nhiều mục đích khác nhau, và tôi thấy Pushover rất tuyệt vời.
- Còn nhiều lựa chọn khác nữa, nếu bạn muốn sử dụng một cái khác.
- Nhưng nhưng điều chúng ta sẽ làm là truy cập vào pushover dot net và thiết lập mọi thứ.
### Muc 39

- Được rồi.
- Vậy là bạn vào trang web pushover net, nó sẽ hiển thị như thế này.
- Bạn truy cập để đăng nhập hoặc đăng ký.
- Và bạn sẽ cần đăng ký lần đầu tiên.
- Và tôi không thể truy cập vào đây ngay bây giờ vì một lý do nào đó, họ hiển thị khóa API và token của bạn trên màn hình bảng điều khiển, với chữ to.
- Vậy chỉ cần đến đó, tôi sẽ tiết lộ token của mình cho bạn.
- Khi bạn thực hiện điều đó, bạn sẽ thiết lập nó và nhận được một token.
- Vấn đề là thế này.
## Phan 14

### Muc 40

- À, Pushover có hai token và bạn cần cả hai.
- Và điều đó hơi gây nhầm lẫn.
- Sau khi bạn đã đăng ký, bạn sẽ thấy, um, một token chính ở góc trên bên phải của màn hình bảng điều khiển.
- Nó bắt đầu bằng chữ cái U.
- Đó được gọi là token người dùng.
- Và à, vậy hãy chú ý đến cái bắt đầu bằng chữ U.
- Điều đó dễ dàng.
- Nhưng sau đó, trên màn hình chính, bạn cần nhấp vào "Tạo ứng dụng/API token".
### Muc 41

- Và sau đó, nó yêu cầu bạn đặt tên cho nó, ừm, và bạn có thể đặt bất kỳ tên nào bạn muốn.
- Bạn có thể đặt tên cho nó là "đại lý" hoặc bất kỳ tên nào bạn muốn, hoặc "MLM" hoặc bất kỳ tên nào bạn muốn.
- Có thể LM Engineering sẽ là lựa chọn tốt hơn.
- Hoặc Trí tuệ nhân tạo (AI).
- Kỹ sư trí tuệ nhân tạo.
- Đó có thể là một cái tên hay cho bạn.
- À, sau đó nhấp vào "Tạo Ứng dụng".
- Điều này không chỉ áp dụng cho hàng đợi của riêng bạn.
### Muc 42

- Vậy bạn sẽ nhớ điều đó trong tương lai.
- Và khi bạn làm điều đó, bạn sẽ nhận được một token khác, đó là token cấp ứng dụng liên quan đến đối tượng này.
- À, vậy là bây giờ bạn có hai token.
- Một bắt đầu bằng chữ U và một bắt đầu bằng chữ A, bạn cần thêm vào tệp EMV, đẩy token bắt đầu bằng chữ U, sau đó đẩy token bắt đầu bằng chữ A và sau đó lưu lại.
- Và sau đó bạn sẽ cần.
- Sau khi đã lưu tệp EMV, hãy đảm bảo rằng bạn đã lưu nó.
- Tôi biết các bạn đã biết những điều này rồi.
- À, sau đó chúng ta sẽ phải vào đây và thực hiện việc bỏ qua EMV (nếu đúng) và làm lại thao tác này.
## Phan 15

### Muc 43

- Và sau đó, ừm, bạn sẽ cần phải, ừm, phải, phải, phải in, ừm, phải, phải nhập các khóa của bạn như thế này.
- Và hãy in chúng ra và đảm bảo rằng người dùng dễ bị lừa được tìm thấy và bắt đầu bằng chữ U, và token dễ bị lừa được tìm thấy và bắt đầu bằng chữ A.
- Và nếu bạn đã đến được bước này, thì bạn thật tuyệt vời.
- Mọi thứ đều hoạt động bình thường.
- Bạn cũng cần cài đặt ứng dụng Pushover trên điện thoại của mình.
- À, và, có hướng dẫn cho việc đó kèm theo liên kết đến ứng dụng trên trang đích đó.
- Và tôi sẽ để điện thoại ở đây, tắt chuông và hy vọng không ai gọi cho tôi.
- Và bây giờ tôi vừa viết lại hàm push này.
### Muc 44

- Điều này hiện tại không liên quan gì đến LMS.
- Nhưng lệnh push chỉ có thể chứa một payload.
- Đó là token người dùng.
- Token, cái bắt đầu bằng chữ A, sau đó là một thông điệp, và sau đó nó chỉ gọi URL pushover.
- Và đó, đó chính là điều nó nói.
- Và nếu tôi nói "thỏa thuận lớn" và thực hiện điều này, thì thế là xong.
- Bạn đã nghe thấy điều đó.
- Tôi hy vọng bạn đã nghe thấy điều đó.
### Muc 45

- Đó là điện thoại của tôi đang nhận thông báo đẩy.
- Hãy làm lại lần nữa.
- Đây rồi.
- Ba lần.
- Rất tốt.
- Và tôi đã đưa điều này vào một đại lý.
- Tất nhiên.
- Đây là nó.
## Phan 16

### Muc 46

- Trình quản lý tin nhắn.
- À, bây giờ, vấn đề là tôi cảm thấy điều đó có vẻ hơi quá.
- Chúng ta không thể gọi nó là một đại lý nếu nó chỉ đơn giản là thực hiện một cuộc gọi để thuyết phục ai đó, và thế là hết.
- Và tôi muốn gọi nó là một đại lý.
- Và vì vậy, tôi cảm thấy chắc chắn phải có một LLM tham gia.
- Vậy nên tôi đã sử dụng Claude Sonnet 45 để viết một thông điệp quảng cáo.
- Vậy đây là nơi chứa tải trọng.
- Tôi cũng đã thay đổi âm thanh thành âm thanh của máy tính tiền.
### Muc 47

- Và sau đó, tôi có một thông báo cảnh báo tạo ra một tin nhắn hấp dẫn.
- Và sau đó, nó thực hiện cuộc gọi để lôi kéo khách hàng bằng thông điệp quảng cáo hấp dẫn về một ưu đãi.
- Đó là thay đổi duy nhất mà tôi đã thực hiện ở đây.
- Nếu bạn không muốn làm điều đó, bạn có thể xóa nó khỏi đây và chỉ để nó phản hồi với chính giao dịch đó.
- Nhưng, ừm, đúng vậy, đặc biệt là nếu bạn không có API đám mây.
- Điều này không hoàn toàn cần thiết, hoặc bạn có thể làm điều đó, tất nhiên là có thể sử dụng OpenAI nếu bạn muốn, nhưng tôi muốn làm điều này để chúng ta có thể có một lý do nào đó để có thêm một tác nhân khác trong hệ thống.
- Ừm, được rồi.
- Với điều đó trong tâm trí, um, hãy đảm bảo rằng điện thoại của tôi đã được mở khóa.
### Muc 48

- Tôi có thể nói đó là một thỏa thuận cực kỳ lớn.
- Chúng ta nên mua một máy tính tiền.
- Đây rồi.
- Bạn có tiếng "ka ching", và chúng tôi có dịch vụ in ấn màu trắng.
- Và bây giờ đây là phần mà chúng ta sẽ thực sự gọi một mô hình, ừm, với thông tin này ở đây, một ưu đãi đặc biệt cho Samsung.
- Vậy nên nó được gọi là nguyên lý nhân văn.
- Và ở đó, tôi đã mua một chiếc máy tính tiền.
- Tiền vào túi.
## Phan 17

### Muc 49

- Và nó thông báo về một ưu đãi tuyệt vời.
- Mua một chiếc tivi Samsung 60 inch.
- Được rồi, bắt đầu nhé.
- À, một tin nhắn đầy hào hứng từ Claude.
- Điều đó khiến chúng ta thực sự cảm thấy như đang sử dụng một đại lý.
- Claude đang biến điều này thành một điều gì đó sẽ đánh thức chúng ta và khiến chúng ta hào hứng muốn đi mua chiếc tivi LED màn hình phẳng 60 inch đó.
- À, và nó đang chuyển nó qua pushover.
- Vậy đây chỉ là một điều gì đó.
### Muc 50

- Một chút gì đó đặc biệt để thể hiện rằng các đại lý của chúng tôi có thể thông báo cho chúng tôi và làm điều đó một cách chuyên nghiệp.
- Wow.
- Bạn đã đạt 95%.
- Chúng ta sắp hoàn thành rồi.
- À, vậy, à, bạn biết đấy, mọi thứ mà bạn có thể làm.
- Tôi đang gặp khó khăn khi cố nhồi nhét tất cả thông tin vào một slide.
- Tôi đã phải ép buộc và sử dụng các đầu ra có cấu trúc ở cuối điểm liệt kê cuối cùng.
- Một chút ngượng ngùng, nhưng.
### Muc 51

- Nhưng thật lòng mà nói, đến thời điểm này, bạn đã có đầy đủ các thành phần và khối xây dựng cần thiết để phát triển các giải pháp trí tuệ nhân tạo (AI).
- Bây giờ chỉ còn việc gom lại thôi.
- Có lẽ mảnh ghép cuối cùng của bức tranh sẽ liên quan đến phần phối hợp.
- Chúng ta sẽ khôi phục việc sử dụng các công cụ mà chúng ta đã sử dụng từ tuần thứ hai.
- Chúng ta sẽ quay lại với các công cụ một cách quyết liệt, và chúng ta sẽ sử dụng chúng để tạo ra một hệ thống điều phối tác nhân và một trình lập kế hoạch, một tác nhân lập kế hoạch tự động với vòng lặp tác nhân.
- Chúng ta sẽ làm tất cả những việc đó vào ngày mai.
- Tôi sẽ gặp bạn sau.

