# Ngay 039 - Tuan 8, ngay 4

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-039.txt

## Tong quan

- Chu de mo dau: Thật khó tin, nhưng hôm nay là ngày cuối cùng trước ngày cuối cùng của chương trình.
- File goc: day-039.txt
- So y chinh: 442
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Thật khó tin, nhưng hôm nay là ngày cuối cùng trước ngày cuối cùng của chương trình.
- Chào mừng các bạn đến với ngày cuối cùng trước ngày cuối cùng của chương trình.
- Đó là bây giờ.
- Chúng ta đang ở tuần thứ tám, ngày thứ tư, hôm nay và ngày mai.
- Vẫn còn phải đi.
- Hôm nay chúng ta sẽ khám phá một hệ thống trí tuệ nhân tạo khổng lồ.
- Chúng ta sẽ tìm hiểu cách bạn sử dụng các công cụ để điều phối các tác nhân.
- Và chúng ta sẽ xây dựng một tác nhân lập kế hoạch với chuyên môn quan trọng về vòng lặp tác nhân mà bạn đang phát triển.
### Muc 2

- Đối với những ai đã tham gia khóa học đại lý của tôi, các bạn đã biết rõ về Agentic AI.
- Thỉnh thoảng, việc tiếp cận vấn đề theo cách này từ những nguyên lý cơ bản là rất hữu ích, tự mình xây dựng khung làm việc dựa trên nguyên tắc chủ động, và tự mình thực hiện việc điều phối.
- Điều này thực sự hữu ích và giúp bạn hiểu sâu sắc về ý nghĩa của việc sở hữu trí tuệ nhân tạo có khả năng tự chủ.
- Và như bạn đã biết, việc sử dụng các khung công cụ có sẵn (off-the-shelf frameworks) để thực hiện nhiều tác vụ này là khá phổ biến, điều này giúp việc triển khai các agent và kết nối chúng với nhau trở nên rất nhanh chóng.
- Nhưng thật tuyệt khi biết cách nó thực sự hoạt động phía sau hậu trường.
- Đó là những gì chúng ta sẽ làm hôm nay.
- Hiện tại, vào đầu tuần, tôi đã định nghĩa về trí tuệ nhân tạo di truyền (genetic AI) và cung cấp cho các bạn một số định nghĩa về phiên bản hiện đại nhất, mới nhất của nó, đó là khi các mô hình ngôn ngữ lớn (LLMs) được trang bị các công cụ, gọi các công cụ theo vòng lặp để đạt được mục tiêu, tức là các mô hình ngôn ngữ lớn (LLMs) gọi các công cụ theo vòng lặp để đạt được mục tiêu.
- À, nhưng khi bạn có một hệ thống AI tuân theo các định nghĩa này, sẽ có một số đặc điểm nổi bật trong kết quả mà bạn tạo ra, và đó chính là những điểm chung giữa các giải pháp được thiết kế.
### Muc 3

- Và đó chính là điều bạn cần lưu ý.
- Một trong số đó là việc giải pháp AI thường bao gồm việc chia một vấn đề lớn thành các bước nhỏ hơn, trong đó các bước nhỏ này được thực hiện bởi các cuộc gọi riêng lẻ đến mô hình ngôn ngữ lớn (LLM).
- Đó là một đặc điểm rất phổ biến của chúng.
- Và điều này cũng có cái bẫy mà tôi đã đề cập trước đó, cái bẫy "agentic", khi mọi người quá vội vàng chia nhỏ vấn đề thành các bước, đặc biệt là khi họ gán cho các bước đó những trách nhiệm giống như con người, với tên gọi của các "agent" và, và họ không làm điều đó với mục đích chia nhỏ vấn đề.
- Họ đã làm điều đó vì đó là điều họ làm.
- Những vai trò của con người sẽ như thế nào.
- Và có thể điều đó sẽ ổn.
- Nhưng tôi chỉ đề nghị rằng bạn nên bắt đầu bằng cách hiểu rõ vấn đề.
## Phan 2

### Muc 4

- Bạn chia nhỏ thành các hệ thống quản lý học tập (LMS) nhỏ hơn để giải quyết vấn đề.
- À, không chỉ vì nghe có vẻ như điều đó sẽ làm một đại lý tốt.
- Được rồi, đó là một trong những đặc điểm nổi bật.
- Một cách khác, tất nhiên, là sử dụng các công cụ.
- À, việc gọi công cụ chính là lĩnh vực mà tôi xuất thân.
- Ý tưởng rằng bạn có thể trang bị cho một LM một công cụ để thực hiện một số chức năng bổ sung, và thực sự, những gì công cụ đó có thể làm là gọi một LM khác.
- Và đó là cách bạn có LMS.
- Kiểm soát quy trình làm việc và gọi các hệ thống quản lý học tập (LMS) khác cùng các đầu ra có cấu trúc là một tính năng khác.
### Muc 5

- Và bạn có thể nghĩ rằng công cụ và kết quả đầu ra có cấu trúc nghe có vẻ như là hai thứ hoàn toàn khác nhau.
- Các công cụ trang bị cho LM để thực hiện các hành động, các đầu ra có cấu trúc giới hạn đầu ra mà nó tạo ra.
- Thực tế, chúng có mối quan hệ rất mật thiết.
- À, đối với hầu hết các nhà cung cấp, đầu ra có cấu trúc thực tế được triển khai thông qua các công cụ.
- Đây là một lệnh gọi công cụ tạo ra đầu ra có cấu trúc.
- Vậy là thú vị đấy.
- Một cách khác để xem xét vấn đề này là thay vì sử dụng các công cụ gọi, bạn có thể tạo ra một đầu ra có cấu trúc.
- Và trong phần đầu ra có cấu trúc đó, hãy mô tả những gì bạn muốn xảy ra tiếp theo.
### Muc 6

- Thực tế, mặc dù công cụ và đầu ra có cấu trúc nghe có vẻ như là hai thứ hoàn toàn khác nhau, nhưng chúng thực sự có mối liên hệ chặt chẽ và gần như là những khái niệm tương đương.
- À, nhưng cả hai yếu tố đó kết hợp lại chính là đặc trưng của một giải pháp trí tuệ nhân tạo có khả năng tự chủ.
- Và sau đó là môi trường đại lý, một cấu trúc bao quanh các đại lý của bạn, cho phép chúng giao tiếp với nhau theo một cách nào đó, truyền tải thông tin hoặc chia sẻ thông tin chung giữa chúng.
- Đó là đặc trưng của một giải pháp mang tính chủ động.
- Điều này rất phổ biến, và đó là điều mà chúng ta sẽ tự mình phát triển.
- Nhưng nếu bạn sử dụng khung làm việc đại lý (agent framework), tất nhiên, nó đi kèm với cấu trúc đó và sau đó là một đại lý lập kế hoạch (planning Agent).
- Thông thường, đó là một cuộc gọi LM khác có thể quyết định điều gì sẽ xảy ra và vào thời điểm nào.
- Trong các giải pháp đại lý đơn giản, điều này có thể chỉ là một quy trình làm việc.
## Phan 3

### Muc 7

- Đó có thể chỉ là mã Python điều phối các tác vụ diễn ra khi nào, và trong các giải pháp đại lý nâng cao như chúng ta sẽ thực hiện, nó có thể là một cuộc gọi LM có các công cụ, và các công cụ đó cho phép nó gọi các đại lý khác.
- Hoặc có thể là một cuộc gọi LM tạo ra các đầu ra có cấu trúc.
- Và các đầu ra có cấu trúc mô tả những gì sẽ xảy ra khi một trong hai trường hợp đó xảy ra.
- Và cuối cùng, và đây có lẽ là cái ngọt ngào nhất trong số đó.
- Đó là cái không được định nghĩa rõ ràng nhất.
- Đây có phải là khái niệm về tính tự chủ, một cảm giác rằng giải pháp này không chỉ là một cuộc trò chuyện với người dùng, mà không chỉ là một trợ lý AI.
- Đó là điều gì đó có tính bền vững vượt ra ngoài khái niệm đơn thuần là một cuộc trò chuyện với người dùng.
- À, và à, đúng vậy, nó có một loại trí nhớ vượt ra ngoài một tương tác duy nhất, mang lại cho bạn cảm giác rằng bạn đang sử dụng một nền tảng trí tuệ nhân tạo (AI) thực sự.
### Muc 8

- Nó dường như vẫn tiếp tục tồn tại, và bạn có thể hình dung ra thứ mà chúng ta sắp xây dựng, thứ có khả năng gửi thông báo đẩy theo định kỳ, bất cứ khi nào nó muốn, theo cách mang lại cảm giác tự chủ và khả năng ghi nhớ.
- Đó là một công cụ có khả năng thực hiện các tác vụ ở chế độ nền và sau đó chủ động liên hệ với chúng ta để cung cấp câu trả lời.
- Loại thứ đó giống như một dấu hiệu đặc trưng, và có lẽ nó là thứ ít được định nghĩa rõ ràng nhất trong số đó.
- Vậy điều này giúp bạn hiểu được ý nghĩa của việc trở thành một cá nhân chủ động.
- Chúng tôi, tất nhiên, sẽ đáp ứng tất cả các tiêu chí này trên nền tảng Agentic của mình, uh, và, uh, và, nhưng bạn sẽ thấy rằng các nền tảng thường được mô tả là "agentic" nếu chúng đáp ứng bất kỳ tiêu chí nào trong số này.
- Thuật ngữ này là một thuật ngữ rất, ừm, rộng và có thể áp dụng.
- Đây là một thuật ngữ chung có thể áp dụng cho bất kỳ giải pháp nào trong số này, nhưng chắc chắn sẽ có những người có định nghĩa nghiêm ngặt hơn và cho rằng chỉ khi có một vòng lặp tác nhân rõ ràng có thể tiếp tục mãi mãi thì mới được coi là tác nhân.
- Một trải nghiệm mang đậm phong cách Claud code.
### Muc 9

- Và chúng ta cũng đang tiến rất gần đến điều đó với những gì chúng ta đang xây dựng.
- Được rồi.
- Và để nhắc lại, điều chúng ta đang xây dựng là gì?
- Chắc hẳn bạn còn nhớ, đó là một công cụ quét (scanner agent) mà chúng ta đã phát triển hôm qua, có khả năng nhận diện các giao dịch tiềm năng.
- Và tất nhiên, trình quét của chúng tôi sử dụng đầu ra có cấu trúc để chuyển đổi dữ liệu không có cấu trúc được thu thập từ internet và các nguồn RSS thành một đối tượng có cấu trúc, chứa thông tin giao dịch và giá cả.
- Có một mô hình đại diện tổng hợp ước tính giá trị thực của một đối tượng dựa chỉ trên mô tả của nó.
- Đúng vậy.
- Nó thực hiện một quá trình tiền xử lý để chuyển đổi dữ liệu sang định dạng phù hợp hơn cho các mô hình.
## Phan 4

### Muc 10

- Và tất nhiên, nó sẽ gọi một loạt các mô hình khác.
- Và chúng tôi có một trình xử lý tin nhắn sẽ tạo ra một tin nhắn quảng cáo sử dụng Claude để viết sonnet.
- Sau đó, chúng tôi sẽ gửi thông báo đẩy thông qua Pushover.
- Và đằng sau đại lý tổng hợp đó, tất nhiên, chúng ta có đại lý chuyên môn.
- Và nó đang chạy ở đâu?
- Nó đang chạy tiếp.
- Và chúng tôi có một nhân viên biên giới đang sử dụng bộ xử lý Rag.
- Đó là việc mã hóa văn bản của đối tượng mà chúng ta đang cố gắng định giá.
### Muc 11

- Nó tìm kiếm các sản phẩm tương tự trong Chroma.
- Và sau đó, nó sẽ gọi đến GPT-5.1 với tất cả thông tin đó.
- Và nó thực sự làm rất tốt điều đó.
- Và sau đó, chúng ta có một tác nhân mạng thần kinh đang ước tính giá bằng cách sử dụng mạng thần kinh sâu từ tuần thứ sáu.
- Hôm nay chúng ta sẽ xây dựng mô hình lập kế hoạch để điều phối các hoạt động giữa các thành phần này.
- Và nó sẽ làm điều đó vì chúng ta sẽ cung cấp cho nó ba công cụ, một công cụ cho phép nó gọi từng bước trong ba bước đó, ba tác nhân ở phía bên phải theo quan điểm của nó.
- Chúng chỉ là công cụ.
- Nó không biết rằng nó là một mô hình ngôn ngữ lớn (LLM).
### Muc 12

- Nó chỉ coi đó là ba công cụ khác nhau mà nó có thể gọi.
- Giống như các công cụ chúng ta đã xây dựng trong tuần thứ hai.
- Và ngày mai, chúng ta sẽ hoàn tất phần khung làm việc của đại lý và giao diện người dùng.
- Và nó sẽ là, ừm, nó sẽ tuyệt vời.
- Đó sẽ là màn kết thúc hoành tráng.
- À, nhưng bây giờ chúng ta hãy chuyển sang con trỏ.
- Hãy cùng nhau xây dựng một công cụ lập kế hoạch.
- Được rồi.
## Phan 5

### Muc 13

- Chúng ta bước vào tuần thứ tám, chúng ta sẽ đến ngày thứ tư.
- Sắp kết thúc rồi.
- Chúng ta có đi đến ngày thứ tư không?
- Và ừm, đây là The Price is Right.
- Ngày thứ tư: Trình lập kế hoạch tự động.
- À, và, à, đây là nó.
- Chúng ta sẽ thực hiện một số hoạt động nhập khẩu.
- Hôm nay chúng ta sẽ sử dụng GPT-5.1.
### Muc 14

- Nếu bạn muốn sử dụng một mẫu rẻ hơn, thì hãy điều chỉnh lại cho phù hợp.
- Nhưng nhưng số lượng token sẽ rất ít, được không.
- Tôi muốn bắt đầu bằng cách thu thập một số dữ liệu thử nghiệm.
- Trình quét mà tôi có giống như một phương pháp quét thử nghiệm, chỉ trả về kết quả thử nghiệm.
- Vậy chúng ta có thể có.
- Thế thì để tôi cho bạn xem ý tôi là gì.
- Nó trả về một đối tượng chọn giao dịch.
- Đây là đối tượng Pydantic.
### Muc 15

- Và nó đã được điền vào bằng một bộ giao dịch giả mạo.
- Thực ra, đó là thứ tôi đã thu thập được từ lâu, nên nó từng là thật.
- À, nhưng đó chỉ là một số dữ liệu.
- À, chúng ta sẽ sử dụng dữ liệu thử nghiệm để bắt đầu.
- Với điều này.
- Được rồi.
- Bạn còn nhớ cách các công cụ hoạt động từ tuần thứ hai không?
- Bạn còn nhớ cách nó hoạt động không?
## Phan 6

### Muc 16

- Về cơ bản, bạn tạo ra một khối JSON, một khối JSON không hoàn hảo mô tả cho mô hình về chức năng và khả năng mà nó có.
- Và sau đó, khi bạn yêu cầu mô hình, bạn nói với nó: "Này, bạn có một số công cụ." Và sau đó bạn hỏi: "Bạn có muốn gọi bất kỳ công cụ nào trong số này không?" Nếu câu trả lời là "có", thì sẽ có một câu lệnh if và chúng ta sẽ nói: "Được rồi, nếu nó muốn gọi một trong số các công cụ này, thì chúng ta sẽ thực hiện và trả về kết quả." Được rồi.
- Hy vọng bạn còn nhớ điều đó.
- Nếu không, đây là một số chỉnh sửa nhanh chóng để giúp bạn nâng cao kỹ năng sử dụng các công cụ.
- À, và ừm, tôi sẽ làm điều đó bằng cách tạo ra ba hàm giả.
- Ba hàm giả.
- Và chúng đang ở ngay đây, được chưa.
- Chức năng này quét internet để tìm kiếm các ưu đãi.
### Muc 17

- Vậy công cụ này quét internet để tìm các ưu đãi hấp dẫn và tạo ra một danh sách được chọn lọc các ưu đãi tiềm năng.
- Nó cho biết sẽ in chức năng giả để quét internet.
- Điều này trả về một tập hợp các giao dịch được cài đặt sẵn và chỉ trả về kết quả kiểm thử này ở đây dưới dạng JSON.
- Thế là xong.
- Đó là việc tìm kiếm các ưu đãi trên internet.
- Đó là hàng giả.
- Nó trả về các giao dịch thử nghiệm.
- Đây là một cái nữa.
### Muc 18

- Đánh giá giá trị thực.
- Công cụ này ước tính giá trị thực sự của một sản phẩm dựa trên mô tả bằng văn bản.
- Đó là một hàm giả.
- Hàm giả để ước tính giá trị thực của hàm này luôn trả về $300.
- Và sau đó, nó trả về mô tả sản phẩm có giá trị thực ước tính là 300.
- Hãy thêm dấu đô la vào đó để thành $300.
- Thế là xong.
- Đó là hàm giả thứ hai của chúng ta.
## Phan 7

### Muc 19

- Chức năng giả mạo tiếp theo.
- Thông báo cho người dùng về giao dịch.
- Công cụ này thông báo cho người dùng về một ưu đãi đặc biệt dựa trên mô tả của nó, và nó hiển thị một chức năng giả để thông báo cho người dùng về điều này, điều này có chi phí.
- Và nó ước tính điều này và chỉ trả về các thông báo đã được gửi.
- Được rồi.
- Vậy đây là các hàm giả.
- Tất cả những gì họ làm là in một thứ gì đó.
- Hãy chạy cái đầu tiên này.
### Muc 20

- Tìm kiếm các ưu đãi trên internet.
- Tôi sẽ làm điều đó.
- Nó cho biết đó là một chức năng giả mạo để quét internet tìm kiếm các ưu đãi.
- Và nó trả về tập hợp JSON này dưới dạng văn bản.
- Hãy thực hiện ước tính cho trường hợp thứ hai này.
- Đánh giá giá trị thực.
- Đánh giá giá trị thực, theo một con trỏ chuột mới của iPhone.
- Cảm ơn.
### Muc 21

- À, hàm giả để ước tính giá trị thực của một chiếc iPhone mới, luôn trả về giá trị 300.
- Và nó chỉ trả về chuỗi đó với giá trị 300.
- Được rồi.
- À, hãy thông báo cho người dùng về việc có một chiếc iPhone mới.
- Giá giao dịch là 100.
- Giá trị thực tế ước tính là 1000.
- Và đó là URL.
- Và bây giờ chúng ta bắt đầu.
## Phan 8

### Muc 22

- Chức năng giả để thông báo cho người dùng rằng thông báo đã được gửi thành công.
- Được rồi.
- Không có gì thông minh ở đây, ba hàm giả.
- Tôi hiểu, tôi biết, được rồi.
- Bây giờ hãy chuẩn bị tinh thần cho một lượng lớn JSON, hãy dụi mắt và sẵn sàng vì đây sẽ là một lượng JSON khổng lồ, rất nhiều.
- À, đây là định dạng JSON cho hàm quét.
- Bạn có nhớ rằng bạn phải tạo ra một đoạn JSON mô tả tên của hàm, mô tả chức năng của nó và các tham số (nếu có).
- Chức năng quét khá đơn giản.
### Muc 23

- Đây rồi.
- Đây là hàm ước tính.
- Nó hơi cồng kềnh hơn một chút.
- Chúng tôi có thể ước tính giá trị thực của món đồ dựa trên mô tả của nó, và ước tính xem nó thực sự đáng giá bao nhiêu.
- Và thế là xong.
- Mô tả là tham số duy nhất, là một chuỗi ký tự, mô tả về mục cần ước tính.
- Và sau đó, chức năng thông báo sẽ thông báo cho người dùng về một giao dịch.
- Nó có ba.
### Muc 24

- À, không, nó có bốn tham số: mô tả, giá giao dịch, giá trị thực ước tính và URL.
- Và tất cả đều là bắt buộc.
- Đây là JSON mô tả các chức năng.
- Chúng tôi đã thực hiện điều này vào tuần thứ hai.
- Cũng giống như vậy.
- Chúng tôi đã tạo ra JSON này.
- Và tất nhiên, nếu bạn sử dụng khung làm việc của đại lý, đây chính là những việc mà nó sẽ thực hiện cho bạn.
- Bạn không cần phải viết JSON này.
## Phan 9

### Muc 25

- Bạn có một hàm có docstring.
- Và có một công cụ sẽ tự động tạo ra JSON này cho bạn.
- Vậy đây là loại việc mà người ta phải làm nếu bắt buộc, đặc biệt là khi phải bắt đầu từ đầu như chúng ta đang làm.
- Nếu bạn đang sử dụng một khung làm việc cho ứng dụng web, nó sẽ tự động tạo ra những thành phần không ổn định như vậy cho bạn.
- À, nhưng mà chúng ta phải làm thủ công.
- Và bây giờ chúng ta sẽ đưa tất cả những điều đó vào một danh sách các công cụ.
- À, chức năng quét, chức năng ước tính, chức năng thông báo, đó là.
- Bây giờ tôi cần thực thi ô đó.
### Muc 26

- Thực thi ô đó.
- Thực thi ô này.
- Hãy xem nó trông như thế nào.
- Hãy dành cho mình một chút thời gian để xem xét điều này.
- Đây là nó.
- Dưới đây là các công cụ của chúng tôi dưới dạng một lượng lớn dữ liệu JSON mô tả các tác vụ khác nhau mà chúng tôi sẽ cho phép mô hình ngôn ngữ lớn (LLM) thực hiện.
- Và hãy nhớ rằng bí quyết của việc gọi công cụ chính là nó cực kỳ nhàm chán.
- Điều xảy ra là đoạn JSON này sẽ được đưa vào lời nhắc hệ thống cho mô hình ngôn ngữ lớn (LLM).
### Muc 27

- Và hệ thống sẽ hiển thị thông báo: "Này, bạn có thể chạy bất kỳ công cụ nào trong số này, hoặc ít nhất là người dùng có thể làm điều đó nếu bạn muốn", hãy trả lời bằng cách nhấn "Dừng".
- Lý do là việc gọi công cụ.
- Nếu bạn muốn sử dụng một trong các công cụ này, hãy cho tôi biết công cụ nào, tôi sẽ chạy nó, và sau đó tôi sẽ gọi lại cho bạn với kết quả.
- Đó chính là bản chất của việc gọi công cụ.
- Được rồi, bây giờ chúng ta hãy ghép các phần lại với nhau.
- Chúng ta sẽ gọi một mô hình ngôn ngữ lớn (LLM) bằng các công cụ này, những công cụ này tham chiếu đến các hàm giả không thực hiện bất kỳ tác vụ nào.
- Chúng chỉ in được thôi.
- Và bây giờ chúng ta có một hàm gọi công cụ xử lý, mà có thể bạn đã nhớ từ tuần hai.
## Phan 10

### Muc 28

- Nó khá là chung chung.
- Nó nói rằng trong các cuộc gọi công cụ, có thể có nhiều cuộc gọi công cụ.
- Nó sẽ tìm kiếm tên hàm và các tham số.
- Và có một đoạn mã này, tôi không biết liệu nó có thực sự "Pythonic", thực sự tinh tế hay chỉ là một chút "hacky".
- À, tôi vừa sử dụng tính năng trong Python cho phép truy cập vào danh sách tất cả các hàm được định nghĩa toàn cục.
- À, tôi đã thu thập chức năng này, đặt tên cho công cụ này, và sau đó đây lại là một đoạn mã Python rất tinh tế hoặc một thủ thuật phức tạp, tùy thuộc vào quan điểm của bạn.
- À, nhưng sau đó tôi gọi công cụ được mô tả trong phản hồi.
- Tôi dựa vào việc tên của công cụ được trả về, ví dụ như "tìm kiếm các ưu đãi trên internet", hoàn toàn trùng khớp với chức năng thực tế của nó.
### Muc 29

- Vậy tôi đang chuyển chuỗi đó thành một cuộc gọi hàm.
- Điều bạn thực sự nên làm, nếu muốn đảm bảo an toàn, là bạn nên nói điều gì đó như sau: "Nếu tên công cụ được quét, hãy kiểm tra điều đó vì nó biết rằng nếu tên công cụ quét internet để tìm kiếm ưu đãi, thì hãy quét internet để tìm kiếm ưu đãi." Đây là những gì bạn nên làm.
- Điều này an toàn và cẩn thận.
- Và điều tôi đang làm là, là, là như thế này, ừm, tôi không biết liệu đó là một hacker hay là một ý tưởng thông minh.
- À, nhưng điều này và điều này cơ bản là chuyển đổi chuỗi đó thành một hàm và sau đó gọi nó một cách động.
- À, vậy, ừm, đúng rồi.
- Bạn thích hay ghét, đó chính là điều tôi đang làm ở đây.
- Sau đó, tôi sẽ thêm kết quả vào cuối tin nhắn.
### Muc 30

- Vậy hy vọng điều này sẽ quen thuộc với các bạn vì chúng ta đã thực hiện nó trong tuần thứ hai.
- Vậy là tôi không cần phải làm lại nữa, được rồi.
- Và bây giờ chúng ta đang tiến gần đến một thời điểm quyết định khác đối với chúng ta.
- Được rồi.
- Bạn đã sẵn sàng chưa?
- Điều này thực sự rất quan trọng.
- Thông báo hệ thống và thông báo người dùng này là thông báo hệ thống và thông báo người dùng quan trọng nhất trong toàn bộ khóa học.
- Vậy chúng ta nên tập trung vào đây.
## Phan 11

### Muc 31

- Thông báo hệ thống.
- Bạn tìm thấy những ưu đãi hấp dẫn trên các sản phẩm giảm giá bằng cách sử dụng công cụ của mình và thông báo cho người dùng về ưu đãi tốt nhất.
- Được rồi.
- Chúng ta sẽ sử dụng tin nhắn của người dùng đó.
- Đầu tiên, hãy sử dụng công cụ của bạn để tìm kiếm các ưu đãi giảm giá trên internet.
- Sau đó, đối với mỗi giao dịch, hãy sử dụng công cụ của bạn để ước tính giá trị thực sự.
- Sau đó, hãy chọn giao dịch hấp dẫn nhất có giá thấp hơn nhiều so với giá trị thực tế ước tính, và sử dụng công cụ của bạn để thông báo cho người dùng.
- Sau đó, chỉ cần trả lời "OK" để xác nhận thành công.
### Muc 32

- Thế là xong.
- Đó là hướng dẫn của chúng tôi.
- Hãy đưa điều đó vào một số tin nhắn.
- Hãy cùng xem qua các tin nhắn.
- Đây rồi.
- Đó cũng chính là những gì tôi vừa đọc cho bạn nghe.
- Đó là thông báo hệ thống của chúng tôi và lời nhắc cho người dùng.
- Được rồi.
### Muc 33

- Nhìn này.
- Điều cần lưu ý về đoạn mã này là có một dòng mã thực sự quan trọng, và dòng mã đó chính là dòng này ngay đây.
- Chúng tôi cho rằng điều đó là sai.
- Và rồi chúng ta nói, mặc dù chưa hoàn thành.
- Và tại sao điều đó lại quan trọng?
- Có thể bạn đang nghĩ rằng bạn là người quan trọng.
- Hãy suy nghĩ về điều đó một chút.
- Điều đó quan trọng vì đó là vòng lặp đại lý của chúng ta.
## Phan 12

### Muc 34

- Điều này có nghĩa là chúng ta đáp ứng định nghĩa vì chúng ta có một vòng lặp.
- Đó là một vòng lặp có một tác nhân sẽ di chuyển xung quanh và nó được trang bị các công cụ, tức là một tác nhân được trang bị các công cụ.
- Và khi nó phản hồi, uh, để chỉ ra thành công, nó sẽ không gọi công cụ.
- Nó sẽ chỉ hoàn thành.
- Điều đó có nghĩa là "done" là đúng.
- Mục tiêu đã đạt được.
- Và đây là một chương trình Thạc sĩ Luật (LLM) được thiết kế theo chu trình, kết hợp các công cụ để đạt được mục tiêu.
- Và các công cụ mà nó có chính là các bộ công cụ mà chúng ta đang truyền vào ngay tại đây.
### Muc 35

- Và những công cụ này là ba hàm giả mà chúng ta đã viết ở trên.
- Tất cả những gì họ làm là in một thứ gì đó và sau đó trả về dữ liệu giả.
- Vậy là tôi có thể chạy chương trình này và nó sẽ tạo ra một bản sao giả.
- Nó sẽ sử dụng hệ thống tin nhắn và lời nhắc người dùng để trang bị cho LM các chức năng giả mạo này, mà nó cho rằng, theo như nó biết, đó là các công cụ thật.
- Và chúng ta sẽ xem nó sẽ làm gì.
- Được rồi.
- Được rồi, bắt đầu nhé.
- Hít thở sâu và chạy.
### Muc 36

- Vì vậy, nó ngay lập tức gọi hàm giả để quét internet.
- Điều đó trả về một tập hợp các giao dịch được cài đặt sẵn.
- Nhìn này.
- Chức năng giả này chỉ được gọi để ước tính giá trị thực bốn lần.
- Và nó chỉ tạo ra một hàm giả để thông báo cho người dùng về một giao dịch, sau đó nó trả về.
- Được rồi, nó nhanh hơn cả tốc độ bình luận của tôi.
- Đó chính là điều vừa xảy ra.
- Tất cả đều là các hàm giả, nhưng nó đã gọi tất cả chúng và gọi chúng một cách độc lập.
## Phan 13

### Muc 37

- Nó đã gọi tất cả họ vì đó là những công cụ mà nó cho là phù hợp để gọi vào thời điểm đó.
- Tất nhiên, như bạn đã biết, luôn có sự cám dỗ để cố gắng suy nghĩ về điều này theo một cách nào đó giống như con người.
- Điều đang xảy ra là các cuộc gọi LM này đang tạo ra các token, các token có khả năng xuất hiện tiếp theo cao nhất, và các token có khả năng xuất hiện tiếp theo cao nhất này liên quan đến việc thực hiện các cuộc gọi công cụ, dừng lại vì lý do cuộc gọi công cụ cho từng cuộc gọi công cụ theo thứ tự như mô tả trong tệp JSON này.
- Ở đây, nó biết phải thực hiện cuộc gọi công cụ này trước tiên và sau đó thực hiện cho từng giao dịch trong số đó.
- Và cuối cùng là thông báo cho người dùng.
- Và tôi nghĩ nó đã có được năm giao dịch và quyết định chỉ yêu cầu báo giá.
- Đó là sự lựa chọn của nó.
- À, nó đã tự động đưa ra quyết định đó ngay tại đó.
### Muc 38

- Đó chính là sức mạnh của sự tự chủ.
- À, vậy dù chúng ta đã khá cứng nhắc, bạn có thể thử nghiệm bằng cách linh hoạt hơn, và bạn có thể thử một cái gì đó thực sự, thực sự ngắn gọn ở đây.
- À, chúng tôi đã rất cụ thể về những gì chúng tôi muốn nó làm.
- Nó vẫn tự quyết định về một số vấn đề.
- Nhưng nó đã đưa ra tất cả những kết luận đúng đắn.
- Nhưng vấn đề là nó đang gọi các hàm giả.
- Và đó không phải là điều chúng ta mong muốn.
- Chúng tôi muốn nó thực sự gọi các đại lý khác.
### Muc 39

- Vậy chúng ta sẽ làm điều đó như thế nào?
- Chà, có lẽ bạn đã nhận ra điều này, nhưng nó sẽ thực sự rất đơn giản.
- Chúng ta hầu như không cần phải làm gì cả, vì LM - người lập kế hoạch LM - đã lo liệu mọi việc ở đây.
- Nó không biết rằng những chức năng này là giả mạo.
- Đó chỉ là việc gọi các công cụ này.
- Và nó đang thực hiện cuộc gọi hàm đó, trong đó chúng ta vừa thêm một câu lệnh in.
- Nhưng chính cuộc gọi hàm đó có thể chỉ là một cuộc gọi đến tác nhân khác.
- Nó có thể chỉ đơn giản là "Frontier Agent Price" hoặc bất kỳ tên nào tương tự.
## Phan 14

### Muc 40

- Cách chúng ta thực hiện chức năng đó hoàn toàn do chúng ta quyết định.
- Và đó chính xác là điều tôi đã làm.
- Vậy nếu chúng ta xem xét trong mô hình lập kế hoạch tự động ở đây, đây là một lớp mà, khi nó được tạo ra, khi nó được khởi tạo, nó sẽ tạo ra một tác nhân quét, một tác nhân tập hợp và một tác nhân truyền tin.
- Nó tạo ra các bản sao của từng cái trong số đó.
- Và sau đó, nó có chức năng quét internet để tìm kiếm các ưu đãi và chức năng đó gọi là "scanner scan".
- Đó chính là yếu tố đã kích hoạt quá trình quét mà chúng tôi đã thực hiện cách đây vài ngày.
- Nó có giá trị thực tế ước tính.
- Vậy là chúng ta đã làm điều đó vào hôm qua.
### Muc 41

- Nó có giá trị ước tính thực tế chỉ gọi hàm self.ensemble.price.
- Nó gọi hàm giá, sau đó hàm giá này sẽ gọi tất cả các hàm giá khác.
- Và sau đó, chúng ta có thông báo cho người dùng về giao dịch.
- Và điều đó gọi hàm thông báo, hàm này lại gọi chính xác cùng một hàm mà chúng ta đã thực hiện ngày hôm qua.
- Và sau đó tôi có cùng một đối tượng JSON.
- Và bây giờ, trong hàm gọi công cụ handle, tôi gọi một trong những hàm ở trên.
- Lần này tôi đã viết nó tốt hơn một chút.
- Tôi có một từ điển ánh xạ từ văn bản sang chính hàm đó, vì vậy tôi không cần phải làm điều đó.
### Muc 42

- Biến toàn cục gây rắc rối.
- Tôi không biết bạn có cho rằng điều đó là tinh tế hay chỉ là một cách làm tạm bợ, nhưng tôi sẽ không làm điều đó.
- Tôi đang làm một việc gì đó chắc chắn hơn.
- Trong tinh thần của việc triển khai mã nguồn đã được tối ưu hóa và sẵn sàng cho việc triển khai, với thiết kế tinh tế và chuyên nghiệp.
- Vì vậy, chỉ cần cẩn thận hơn một chút, nhưng về cơ bản, thông báo hệ thống và lời nhắc người dùng vẫn giữ nguyên.
- Và đây là vòng lặp của đại lý của chúng ta.
- Chúng ta đã làm điều sai trái mà không hề làm.
- Và sau đó, nó lặp lại cho mỗi lần gọi công cụ cho đến khi quyết định rằng tôi đã hết.
## Phan 15

### Muc 43

- Không cần gọi thêm công cụ nào nữa, sau đó nó nhận phản hồi và thông báo rằng đã hoàn thành với phản hồi này.
- Và đó sẽ là hệ thống lập kế hoạch tự động của chúng ta.
- Đó chính xác là điều tương tự, ngoại trừ việc thay vì sử dụng các hàm trống hoặc hàm giả, chúng ta đã thực sự gọi đến các tác nhân khác.
- Được rồi, đã đến lúc rồi.
- Hãy làm điều này.
- Vậy, ừm, chúng ta sẽ bật lại tính năng ghi nhật ký.
- Chúng tôi sẽ truy cập vào cơ sở dữ liệu của chúng tôi.
- Hãy chuẩn bị sẵn sàng.
### Muc 44

- Được rồi.
- Bây giờ tôi sẽ nói về các tác nhân Dot, sau đó chúng ta sẽ chuyển sang các tác nhân lập kế hoạch tự động và nhập tác nhân.
- Điều chúng ta vừa mới xem xét lúc đó và hãy cùng nhau tạo ra nó.
- Agent là bộ sưu tập các tác nhân lập kế hoạch tự chủ.
- Được rồi.
- Hãy bắt đầu thôi.
- Vậy chúng ta sẽ tạo ra đại lý này.
- Và khi chúng ta tạo ra tác nhân lập kế hoạch, nó sẽ tạo ra các tác nhân khác mà nó phụ thuộc vào.
### Muc 45

- Và vậy chúng ta sẽ xem điều gì sẽ xảy ra ở đây.
- Nó sẽ được thiết lập.
- Nó sẽ thực hiện một loạt các thao tác nhập dữ liệu, tất nhiên.
- Nhìn kìa.
- Một số màu sắc, một số màu sắc, có rất nhiều điều đang xảy ra.
- Công cụ lập kế hoạch tự động khởi tạo công cụ quét đã sẵn sàng.
- Nhóm đại lý.
- Chuyên viên đang kết nối với modal.
## Phan 16

### Muc 46

- Mọi thứ đang diễn ra.
- Đại lý sẽ đã tải các trọng số của nó.
- Được rồi, bây giờ.
- Giờ đây đã đến lúc.
- Đã đến lúc phải chạy rồi.
- Đại lý.
- Đại lý.
- Kế hoạch.
### Muc 47

- Bạn đã sẵn sàng chưa?
- Hãy bắt đầu thôi.
- Được rồi, vậy là hệ thống lập kế hoạch tự động đang bắt đầu thực thi một tác vụ.
- Nó đang gọi máy quét.
- Và đó là phần được đánh dấu màu xanh cho nhân viên lập kế hoạch.
- Hiện tại, chúng ta đang ở chế độ màu cyan cho máy quét.
- Máy quét sắp lấy các giao dịch từ nguồn cấp dữ liệu RSS.
- Vậy là nó đang làm cái việc đó, cái việc cạo đó, cái việc đã thu thập được 30.
### Muc 48

- Hoặc có thể nếu bạn đã tăng âm lượng lên, nó có thể đã thu được nhiều hơn.
- Và bây giờ nó đang gọi OpenAI với các đầu ra có cấu trúc.
- Nó sử dụng đầu ra có cấu trúc để chuyển đổi dữ liệu không có cấu trúc thành dữ liệu có cấu trúc.
- Nó đã nhận được năm giao dịch được chọn lọc từ OpenAI như một phần của kết quả đầu ra có cấu trúc đó.
- Hiện tại, nó đã được chuyển trở lại cho nhân viên lập kế hoạch để xác định xem nó muốn làm gì tiếp theo.
- Được rồi, vậy nó sẽ cần thực hiện một số việc.
- Đầu tiên, chúng ta sẽ bắt đầu bằng cách chạy mô hình đại diện tập hợp để ước tính giá trị thực của một thứ gì đó.
- Và mô hình tổng hợp bắt đầu bằng cách sử dụng mô hình ngôn ngữ (LM) để xử lý văn bản, mà tôi đã cấu hình để sử dụng OpenAI GPT-2, nhằm tiền xử lý văn bản thành một văn bản có tiêu đề, danh mục và các thông tin cần thiết khác, để đảm bảo văn bản ở trạng thái tốt nhất có thể cho mô hình LMS của chúng ta ước tính giá.
## Phan 17

### Muc 49

- Và sau đó, nó đến tay chuyên gia.
- Đây là mẫu sản phẩm tiên phong của chúng tôi.
- Vì vậy, không phải tất cả các mô hình chuyên gia biên giới đều chạy trên mô hình.
- Điều đó mất 30 giây để khởi động, và nó đã làm được.
- Hiện tại, mô hình biên giới đang được thực thi.
- Bây giờ nó quá nhanh đối với tôi.
- Bây giờ bạn có thể thấy màu tím là mô hình tiên phong.
- Màu xanh là mẫu tiên phong.
### Muc 50

- Vậy màu tím là đại diện cho mạng thần kinh.
- Chúng tôi đã định giá cho năm sản phẩm.
- Và bây giờ nó đã quay trở lại, ừm, đến, ừm, nó đã quay trở lại với, ừm, ừm, thông báo đẩy.
- Và bây giờ nó vừa mới đẩy mạnh và ở đó.
- Bạn có nghe thấy không?
- Đó là điện thoại của tôi.
- Tôi vừa nhận được một tin nhắn.
- Thật tuyệt vời.
### Muc 51

- Thỏa thuận.
- Cảnh báo.
- Đặt mua Dell 16 Plus Ultra 5.
- Tôi đã nhận được thông báo về giao dịch.
- Tôi đã bắt được.
- Điều đó đã xảy ra.
- Chúng tôi vừa chạy khung làm việc của đại lý.
- Và điều đó có phải là tuyệt vời không?Vậy tôi hy vọng rằng bạn sẽ bị choáng ngợp bởi điều này.
## Phan 18

### Muc 52

- Điều này thật sự, thật sự tuyệt vời.
- À, tôi nghĩ là tôi vừa mới tính toán xong.
- Tôi nghĩ rằng tổng cộng việc triển khai khung này đã yêu cầu, tôi đã đếm được tổng cộng 34 lần gọi hàm để thực hiện tất cả các tác vụ này.
- 29 Lrms, năm, ừm, cuộc gọi mạng thần kinh, ừm, bao gồm mỗi phần của vòng lặp đại lý đó như một cuộc gọi riêng biệt.
- À, vì đó là một cuộc gọi khác biệt, khác biệt, khác biệt, khác biệt, à, ừm, từ đó, chúng tôi đã gọi ba mô hình biên giới khác nhau: GPT-5, GPT-5-1 và Anthropic, ừm, Claude, ừm, 45.
- Và chúng tôi đã sử dụng ba mô hình nguồn mở, mô hình chuyên biệt được tinh chỉnh của chúng tôi, uh, mô hình All Mini LM, L6, V2, uh, bộ mã hóa từ Hugging Face và OSS, uh, mà chúng tôi đã sử dụng cho GPT OSS 20 trong quá trình tiền xử lý.
- Vậy là ba mô hình biên giới, ba mô hình mã nguồn mở.
- 29.
### Muc 53

- Hệ thống Quản lý Học tập (LMS) kết hợp với năm lần gọi mạng thần kinh đến mạng thần kinh sâu của chúng tôi, tổng cộng 34 lần gọi mô hình, tất cả đều hợp tác với nhau để đạt được kết quả này: tìm thấy một chiếc Dell 16 Plus Ultra được gửi đến tôi dưới dạng thông báo đẩy, đó thực sự là một nền tảng ấn tượng.
- Đây là một sản phẩm rất ấn tượng.
- À, vậy tôi hy vọng các bạn đã thích điều này.
- Tôi hy vọng bạn đã có thể tự mình làm cho điều này hoạt động.
- Hãy nhớ, nếu bạn gặp bất kỳ sự cố kỹ thuật nào vì có quá nhiều thứ đang diễn ra ở đây, bạn có thể bình luận về những vấn đề đó.
- Bạn có thể giảm độ phức tạp của mô hình tập hợp.
- Chắc chắn là đang gọi một trong những mẫu đó.
- À, bạn có thể đơn giản hóa ở nhiều nơi khác nhau nếu các thành phần hoạt động không hiệu quả, nhưng tôi hy vọng chúng sẽ hoạt động tốt.
### Muc 54

- Và tôi hy vọng bạn đang thấy điều gì đó tương tự như thế này.
- Và nếu bạn chỉ muốn, nếu bạn chỉ tham gia để có được直觉, thì điều quan trọng là phải nhận ra rằng việc xây dựng nền tảng phức tạp này với sáu hoặc bảy mô hình khác nhau hợp tác với nhau qua 34 cuộc gọi thực sự không quá khó khăn.
- À, với kết quả tuyệt vời này.
- Được rồi.
- Tôi sẽ gặp bạn để kiểm tra lại và xem xét một lần nữa kiến trúc mà chúng ta đã xây dựng, và, ừm, cảm thấy vô cùng tự hào về nó.
- Và nếu bạn đã điều chỉnh nó và làm điều gì đó khác biệt, tôi rất muốn nghe về điều đó.
- Đây là, ừm, việc xây dựng điều này thật sự rất thú vị.
- Và có lẽ bạn đang nghĩ, đó có phải là kết thúc không, đúng không?
## Phan 19

### Muc 55

- Đó thực sự là một kết thúc tuyệt vời.
- Không, vẫn còn nhiều hơn nữa.
- Vẫn còn một chút nữa.
- Chúng ta còn một ngày nữa là kết thúc việc này.
- Một ngày nữa.
- Đó là một ngày ngắn, nhưng đó là một ngày tuyệt vời và sẽ là kết thúc cuối cùng, kết thúc của mọi kết thúc.
- Chúng ta sẽ hoàn thiện quy trình làm việc Agentic bằng cách bổ sung các yếu tố như bộ nhớ và các thành phần khác.
- Đến cuối quy trình, không chỉ bạn có thể thực hiện tất cả các tác vụ trên slide này mà tôi không cần nhắc lại, mà bạn còn có thể làm được tất cả những điều này.
### Muc 56

- Và bạn cũng có thể tự hào nói: "Bạn biết không?
- Lúc này, tôi đã trở thành một kỹ sư trí tuệ nhân tạo."

