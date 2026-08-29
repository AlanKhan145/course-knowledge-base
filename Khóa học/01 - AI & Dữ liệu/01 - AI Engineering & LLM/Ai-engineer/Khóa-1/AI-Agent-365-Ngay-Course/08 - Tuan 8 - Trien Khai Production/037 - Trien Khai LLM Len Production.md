# Ngay 037 - Tuan 8, ngay 2

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-037.txt

## Tong quan

- Chu de mo dau: Chào mừng đến với tuần thứ tám, ngày thứ hai - một ngày vô cùng bận rộn.
- File goc: day-037.txt
- So y chinh: 652
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Chào mừng đến với tuần thứ tám, ngày thứ hai - một ngày vô cùng bận rộn.
- Đây thực sự là lúc mọi thứ đang dần hoàn thiện khi chúng ta tiến gần đến đích.
- Bạn đã có thể, ngoài tất cả những điều bạn đã biết có thể làm, giờ đây bạn còn có thể triển khai các mô hình ngôn ngữ lớn (LLMs) vào môi trường sản xuất trên models.com bằng cách sử dụng phương pháp tạm thời, sau đó là phương pháp dựa trên hàm, và cuối cùng là phương pháp dựa trên lớp với khối lượng lưu trữ bền vững.
- Hôm nay, bạn sẽ có thể xây dựng một giải pháp Rag nâng cao với lượng dữ liệu lớn mà không cần chuỗi ngôn ngữ, tạo mô hình kết hợp và triển khai mã sẵn sàng cho sản xuất có thể gọi nhiều mô hình khác nhau.
- Tất cả những điều đó sẽ được trình bày ngay sau đây.
- Và bạn chắc hẳn không cần tôi phải nhắc nhở về giá cả, đúng không?
- Một khung nền tảng AI tự động sẽ theo dõi các giao dịch, tìm kiếm chúng, đánh giá giá trị thực sự của chúng và gửi thông báo đẩy cho những cơ hội tốt.
- Sẽ có bảy mô hình khác nhau hợp tác với nhau, bao gồm mô hình biên giới, mô hình được tinh chỉnh và cũng quay trở lại mô hình biên giới sử dụng Rag.
### Muc 2

- Vậy chúng ta đang so sánh các kỹ thuật tối ưu hóa thời gian đào tạo với các kỹ thuật tối ưu hóa thời gian suy luận bằng Rag.
- Được rồi, đây là một lời nhắc nhở về kiến trúc di truyền của chúng ta, với một chú thích nhỏ rằng điều quan trọng là phải phát triển kiến trúc đại lý để giải quyết một vấn đề kinh doanh, chứ không chỉ vì nó nghe có vẻ như bạn muốn thực hiện các bước như vậy.
- Tuy nhiên, với điều kiện đó, đây là kiến trúc mà chúng tôi đang sử dụng, mà bạn có thể hình dung là chúng tôi đã lựa chọn vì nó giải quyết tốt nhất vấn đề hiện tại của chúng tôi.
- Hôm qua tôi đã đề cập rằng chúng ta sẽ tạo ra một trình quét (scanner agent) có khả năng tìm kiếm các giao dịch tiềm năng bằng cách phân tích các nguồn tin RSS.
- Sau đó, chúng ta sẽ có một tác nhân tổng hợp để ước tính giá trị thực của các đối tượng, và một tác nhân gửi thông báo đẩy.
- Vì vậy, tất nhiên, điều mà tôi chưa nói với bạn hôm qua, mà tôi chắc chắn bạn đã đoán ra, là tác nhân tổng hợp đó hoạt động độc lập, phối hợp với các tác nhân khác thông qua các tác nhân con.
- Và có ba người trong số họ.
- Và hãy cho họ thấy.
### Muc 3

- Một trong số đó, tất nhiên, là đại lý chuyên gia mà chúng ta đã tạo ra hôm qua.
- Nếu bạn thắc mắc tại sao chúng tôi tạo ra điều đó và nó thậm chí không được thể hiện trên sơ đồ, đó chính là lý do tại sao nó thuộc về đây.
- Đó là một trong những cách chúng ta tính toán chi phí của một thứ gì đó.
- Một cách khác là chúng ta sẽ xây dựng một loại công cụ định giá mới, một đại lý biên giới.
- Chúng ta sẽ gọi cho một nhà cung cấp dịch vụ biên giới (LM) để xác định chi phí của một thứ gì đó.
- Chúng ta đã thực hiện điều đó trong tuần thứ sáu, và chúng ta đã biết rằng nó không được tinh chỉnh tốt, và phiên bản gốc của nó không tốt bằng chuyên gia của chúng ta.
- Vậy tại sao chúng ta lại mang nó trở lại?
- Chà, chúng ta sẽ làm điều đó vì thay vì tinh chỉnh nó, chúng ta sẽ sử dụng các kỹ thuật thời gian suy luận dưới dạng rag để cải thiện nó.
## Phan 2

### Muc 4

- Điều chúng ta sẽ làm là chúng ta sẽ hỏi GPT-5-1: "Này, cái này giá bao nhiêu?" Nhưng mà, tôi sẽ thêm một chút bối cảnh ở đây.
- Dưới đây là năm điều khác có thể tương tự.
- Và đây là giá thực tế của chúng.
- Và điều này có thể giúp bạn đưa ra một ước tính chính xác cho những gì tôi đang yêu cầu.
- Và điều đó về cơ bản là cung cấp cho nó bối cảnh là rác.
- Cách chúng ta sẽ tìm các sản phẩm tương tự là thực hiện tìm kiếm vector trong kho lưu trữ vector để tìm các sản phẩm tương tự dựa trên mô tả, do đó đây là phương pháp tìm kiếm Rag truyền thống dựa trên ngữ cảnh liên quan.
- Nhập vào hộp thoại, và điều đó sẽ giúp mô hình biên giới đưa ra ước tính chính xác.
- Đó chính là điều chúng ta sẽ xây dựng.
### Muc 5

- Chúng tôi cũng sẽ xây dựng một tác nhân mạng thần kinh.
- Và điều này sẽ sử dụng mạng thần kinh tuyệt vời mà tôi đã giới thiệu vào cuối tuần thứ sáu.
- Đó thực sự rất tốt.
- Và nó sử dụng một kỹ thuật hoàn toàn khác biệt, vì vậy việc có ba mô hình khác nhau với các phương pháp ước tính giá hoàn toàn khác nhau là rất mạnh mẽ.
- Bởi vì mô hình kết hợp (ensemble agent) sẽ có thể kết hợp cả ba mô hình đó theo một cách nào đó để đưa ra một con số chính xác hơn.
- Và đó chính là cách chúng ta sẽ xác định được chi phí thực tế của một thứ gì đó.
- Và chúng ta sẽ hoàn thành tất cả những điều đó trong hai ngày tới, hôm nay và ngày mai.
- Và đến ngày thứ tư, chúng ta sẽ xây dựng công cụ lập kế hoạch để điều phối tất cả các hoạt động này.
### Muc 6

- Và ngày thứ năm là lúc chúng ta kết hợp mọi thứ với khung làm việc của đại lý và giao diện người dùng, sau đó hoàn thiện mọi thứ và thư giãn, tận hưởng thành quả, mua những chiếc TV tuyệt vời và mọi thứ tương tự như vậy.
- Đó là dự án của chúng tôi.
- Đó là giá đúng.
- Hãy di chuyển đến con trỏ.
- Hãy cùng nhau làm một chiếc khăn.
- Người định giá.
- Được rồi.
- Vậy chúng ta hãy bước vào tuần thứ tám.
## Phan 3

### Muc 7

- Ngày thứ hai.
- Hôm nay là ngày mặc quần áo cũ của chúng ta.
- À, thứ tự chơi mà chúng ta sẽ thực hiện là chúng ta đã hoàn thành modalerts.com.
- Và các đại lý chuyên môn hiện nay bao gồm đại lý rag, đại lý biên giới và đại lý nhóm.
- Và ngày mai là máy quét và ứng dụng nhắn tin.
- Được rồi.
- Vậy chúng ta sẽ xây dựng một nền tảng dựa trên dữ liệu thô để ước tính chi phí của một thứ gì đó.
- Và chúng ta cần một bộ dữ liệu gồm các mục tương tự để phân tích.
### Muc 8

- Và chúng ta có một bộ dữ liệu như vậy.
- Chúng tôi vẫn còn toàn bộ dữ liệu đào tạo mà chúng tôi đã sử dụng trước đây.
- 800.000 mặt hàng được thu thập từ Amazon tạo thành một bộ dữ liệu đào tạo lý tưởng.
- À, chúng tôi đã có điều đó.
- Chúng tôi đã sử dụng nó cho việc đào tạo và bây giờ có thể sử dụng nó cho các kỹ thuật thời gian suy luận trong trường hợp này.
- Vậy, ừm, chúng ta hãy thử xem sao.
- Chúng ta sẽ xây dựng một hệ thống xử lý dữ liệu theo từng bước.
- Vậy là chúng ta có một số tệp nhập cần thực hiện ở đây và cần tải vào biến môi trường.
### Muc 9

- Ở đây có một hằng số bối cảnh cho kho lưu trữ sản phẩm vectơ, chính là nơi chúng ta sẽ lưu trữ tất cả các sản phẩm đã được vectơ hóa.
- Và bây giờ tôi sẽ đăng nhập vào Hugging Face.
- Đừng lo lắng về cảnh báo đó.
- Và bây giờ bạn có thể lựa chọn.
- Hãy nhớ chọn chế độ sáng.
- Bạn có thể lựa chọn giữa việc sử dụng toàn bộ bộ dữ liệu 800.000 bản ghi hoặc chỉ 20.000 bản ghi.
- Nếu bạn muốn giữ nó chặt hơn một chút, nó vẫn sẽ hoạt động tốt ngay cả với 20, vì vậy bạn có thể thoải mái sử dụng.
- Chế độ sáng sẽ được bật nếu bạn muốn.
## Phan 4

### Muc 10

- Và để nhắc lại, hôm nay tôi sẽ làm rất nhanh.
- Hôm nay có rất nhiều việc phải làm.
- Nếu điều này quá sức với bạn, xin đừng lo lắng.
- Sử dụng nó để phát triển直觉.
- Hãy quay lại.
- Hãy thực hiện nó theo thời gian của bạn.
- Được rồi, đây là đoạn mã quen thuộc.
- Tôi hy vọng đây chính là phần mềm dùng để tải dữ liệu vào tập dữ liệu.
### Muc 11

- À, từ việc sử dụng vật phẩm, từ trung tâm, từ trung tâm khuôn mặt ôm.
- Vậy chúng ta đang tải toàn bộ tập dữ liệu.
- Bây giờ bạn có thể đang tải phiên bản đầy đủ hoặc chỉ phiên bản một phần.
- Vậy sau khi hoàn thành bước đó, chúng ta sẽ tạo kho dữ liệu chroma.
- Chroma tất nhiên là cơ sở dữ liệu vector mã nguồn mở.
- Thật là một cách tuyệt vời, thật là một cách tuyệt vời để có thể làm việc với các cơ sở dữ liệu vector.
- Chắc chắn rồi.
- Miễn phí.
### Muc 12

- À, trên diễn đàn Hỏi & Đáp của Udemy, có rất nhiều câu hỏi hay về các loại cơ sở dữ liệu véc tơ khác nhau.
- Hãy nhớ rằng, yếu tố quyết định sự khác biệt chính là mô hình encoder.
- Đó là mô hình mã hóa tạo ra vectơ.
- Kho dữ liệu chỉ là nơi dữ liệu được lưu trữ.
- Và tôi nhớ đã chỉ cho bạn xem về các loại cơ sở dữ liệu vectơ khác nhau mà bạn có thể lựa chọn.
- Việc lựa chọn các cơ sở dữ liệu vector khác nhau liên quan đến các yếu tố như khả năng mở rộng, chi phí, tốc độ truy xuất, nhưng chính vector đó được tạo ra bởi bộ mã hóa.
- Vậy nên đây không còn là chuỗi dài nữa.
- Đây chỉ là phần cơ bản, à, mà chúng ta đã làm vào cuối tuần thứ năm rồi.
## Phan 5

### Muc 13

- Khách hàng Chroma liên tục.
- Điều này sẽ tải vào cơ sở dữ liệu vector hoặc tạo ra một cơ sở dữ liệu vector nếu nó chưa tồn tại.
- Đối với bộ mã hóa, chúng ta sẽ sử dụng mô hình Transformers all mini Ml6 v2 mà chúng ta đã đề cập sơ qua trước đó.
- Đây là mô hình mã nguồn mở miễn phí, vì vậy bạn có thể gọi hàm encoder để mã hóa và nhận được một đoạn văn bản như thế này.
- Một kỹ sư AI giỏi đã gần hoàn thành giai đoạn cuối của chương trình đào tạo chính về Kỹ thuật AI, và chúng ta có thể in ra rằng đây chính là vectơ.
- Nó có tất cả, tất cả 384 chiều trong vector này, đó chính là kết quả mà tất cả các mô hình ngôn ngữ nhỏ (mini LLM), L6 và V2 đưa ra.
- Đó chính là ý nghĩa mà đoạn văn bản này thể hiện.
- Được rồi.
### Muc 14

- Với bối cảnh đó, chúng ta sẽ lấy 800.000 sản phẩm, chuyển đổi chúng thành các vectơ và đưa vào Chromatic, một cơ sở dữ liệu Chromatic lớn.
- Và tôi sẽ chạy chương trình đó và nó sẽ bắt đầu ngay lập tức.
- À, và nó xảy ra ngay lập tức.
- Đó là ngay lập tức.
- Và bạn có thể nghĩ, ồ, đó là vì việc tạo cơ sở dữ liệu vector thực sự, thực sự nhanh chóng.
- Nhưng đáng tiếc, điều đó không phải là sự thật.
- Đó là vì tôi đã gian lận ở đây và tôi có một đoạn mã nhỏ ở đây để kiểm tra xem nó đã tồn tại chưa, nếu đã tồn tại thì không làm gì cả.
- À, thực ra việc này mất khoảng một giờ hoặc gì đó.
### Muc 15

- À, và đó là tất cả.
- Tôi có một GPU.
- Có thể sẽ mất nhiều thời gian hơn đối với bạn.
- Có thể.
- Đây có thể là một công việc cần làm trong một đêm nếu bạn thực sự muốn làm điều đó cho tất cả mọi người.
- Vâng, mất 30 phút khi tôi thực hiện trên GPU của mình.
- Vậy.
- Vậy bạn nên xem tình hình đang diễn ra như thế nào.
## Phan 6

### Muc 16

- Bạn cũng có thể chắc chắn rằng bạn có thể chỉ cần cắt ngắn quá trình đào tạo.
- Bạn có thể nói như thế này: "Tàu hỏa bằng tàu hỏa trên 50.000" nếu bạn muốn 50 gạch chân, ừm, ừm, bạn có thể làm nó ngắn hơn một chút.
- Bạn có thể làm bất cứ điều gì bạn muốn.
- Nhưng điều này, điều này là gì, điều gì được đưa vào chroma, ừm, và đây là thứ cho biết nếu nó đã có sẵn.
- Vậy hãy xóa dòng đó nếu bạn muốn chương trình chạy theo cách truyền thống.
- Nhưng khi hoàn thành việc đó, bạn sẽ có một cơ sở dữ liệu véc tơ đã được điền đầy đủ, có thể chứa tới 800.000 mục trong đó.
- Được rồi, vậy là bạn đã dành bảy tuần qua bên tôi, và bạn biết rằng tôi không phải là người chỉ thích nói suông.
- À, tất cả dữ liệu đều có trong Cromer.
### Muc 17

- Chúng ta phải xem xét điều này.
- Tiếp theo, chúng ta sẽ hiển thị các vectơ trong Cromer.
- Và à, nếu bạn cố gắng hình dung tất cả chúng, tất cả 800.000, thì đó là cách chắc chắn để làm máy tính của bạn bị treo.
- Vì vậy, tôi không khuyên bạn nên làm điều đó.
- Tôi đã thử làm điều đó vào năm ngoái với khoảng 400.000.
- Tôi chỉ vừa đủ qua.
- Vậy nên chúng ta sẽ không làm điều đó.
- Chúng ta sẽ chọn lọc 10.000 điểm, sau đó tải 10.000 điểm đó vào, và sau đó chúng ta sẽ sử dụng t-SNE một lần nữa.
### Muc 18

- Phương pháp T-distributed stochastic neighbor embedding (T-SNE) được sử dụng để giảm chiều từ 384 chiều mà bộ mã hóa tạo ra xuống còn hai chiều, và hiển thị kết quả đó dưới dạng một biểu đồ.
- À, vậy chúng ta hãy làm điều đó ngay bây giờ.
- Hãy tạo biểu đồ 2D và thế là xong, đây là kết quả.
- Và wow, thật tuyệt phải không?
- Điều này khiến tôi nhớ đến những gì chúng ta đã làm trong tuần thứ năm.
- Chỉ tốt hơn một chút.
- Vậy đây là 10.000 điểm được hiển thị trực quan trong không gian.
- Vậy chúng ta có thể hiểu việc lấy mô tả sản phẩm và chuyển đổi chúng thành các vectơ có ý nghĩa như thế nào.
## Phan 7

### Muc 19

- Và một lần nữa, hãy nhớ lại điểm tương tự như tuần thứ năm.
- Văn bản được cung cấp cho bộ mã hóa không bao gồm thông tin về vị trí cụ thể trên Amazon mà nó được trích xuất từ đó.
- Chúng tôi chỉ cần nhập văn bản vào và nó đã chuyển đổi nó thành một điểm vector.
- Và sau đó, tôi đã tô màu các chấm này để chỉ ra phần nào trên Amazon đã cung cấp thông tin này.
- Nhưng thông tin đó không được cung cấp cho bộ mã hóa.
- Thật hay là các loại vật phẩm khác nhau được hiển thị trong các phần khác nhau.
- Ở đây cho thấy mô hình mã hóa có một loại hiểu biết bẩm sinh về các loại đối tượng khác nhau.
- Bây giờ, bạn có thể nhận thấy một chi tiết nhỏ ở đây là có một danh mục được bao gồm trong văn bản, vì thực tế là khi chúng tôi thực hiện tiền xử lý, chúng tôi đã yêu cầu một mô hình ngôn ngữ lớn (LLM).
### Muc 20

- Trong trường hợp của tôi, tôi đã yêu cầu OSS 20 đề xuất một cách để chuyển đổi văn bản gốc thành một văn bản có chứa danh mục.
- Hãy nhớ rằng điều đó không đến từ Amazon.
- Đó không phải là thông tin mà chúng ta đã lấy từ phần nào của Amazon.
- Đó là điều được thêm vào sau đó.
- Vậy đó vẫn là điều thú vị để xem cách nó cho phép phân loại các loại khác nhau.
- Ví dụ, những thứ màu xanh ở đây đại diện cho các bộ phận ô tô, các sản phẩm liên quan đến ô tô.
- Và những thứ màu đỏ là đồ chơi và trò chơi.
- Và có thể bạn đang nghĩ, khoan đã, khoan đã, khoan đã.
### Muc 21

- Đừng vội vàng.
- Tôi thấy có những vật dụng màu đỏ nằm giữa những vật dụng màu xanh.
- Điều đó không hay lắm.
- Nếu bạn nhìn kỹ vào đó, bạn sẽ thấy rằng chúng thực chất là các bộ phận của ô tô.
- Đồ chơi, phụ tùng xe đồ chơi.
- Và mô hình mã hóa đã quyết định rằng mặc dù sản phẩm này xuất hiện trên Amazon, nhưng nó thuộc một phần khác.
- Khi nói đến ý nghĩa của các đối tượng, bộ mã hóa muốn đặt chúng trong khu vực này, và điều đó phụ thuộc vào bộ mã hóa.
- Đó chính là điều nó làm, và đó chính là cách nó thực hiện.
## Phan 8

### Muc 22

- Và tôi thực sự rất thích thú khi khám phá dữ liệu, xem xét những gì đã kết thúc ở đâu và hiểu nó dựa trên nội dung của văn bản.
- Và vì vậy, tôi khuyến khích các bạn cũng làm điều tương tự.
- Hãy dành chút thời gian để tìm hiểu kỹ về điều này.
- Hãy xem những gì đã được đặt ở đâu, để hiểu cách bộ mã hóa quyết định, ừm, đặt các thứ ở đâu.
- Tất cả những điều này, tất nhiên, được lưu trữ trong Chroma, kho dữ liệu vector mã nguồn mở miễn phí.
- Nhưng các vectơ được xác định bởi mô hình mã hóa của chúng tôi, mô hình all mini lm6 L2 từ Hugging Face.
- Và anh cũng hiểu em quá rõ.
- Bạn biết là tôi sẽ đi làm một biểu đồ 3D tiếp theo, rõ ràng là vậy.
### Muc 23

- Hãy xem nó trông như thế nào trong 3D.
- Và cũng giống như tuần thứ năm, bạn còn nhớ rõ mọi thứ từ lúc đó.
- Ban đầu, trông có vẻ như một mớ hỗn độn ở đây.
- Chúng tôi có rất nhiều thứ, nhưng một lần nữa, chúng tôi có thể zoom vào, điều này luôn mang lại trải nghiệm tuyệt vời.
- Đây là nó.
- Và chúng ta có thể xoay nó xung quanh và có thể cảm nhận được sự hòa trộn tuyệt vời giữa các màu đỏ và xanh dương của các bộ phận xe đồ chơi ở đây, và bạn sẽ có được cảm giác trực quan rõ ràng hơn về mọi thứ.
- À, vậy nên tôi lại khuyên bạn nên dành thời gian để tìm hiểu nó.
- À, đây là một cách rất thú vị để phân tích dữ liệu.
### Muc 24

- Nó khiến tôi rất phấn khích, ừm, vì vì nó, nó thật sự rất thú vị.
- Và điều đó cũng thật tuyệt vời.
- Một cách tuyệt vời để có được sự đánh giá trực tiếp về.
- Chuyển đổi văn bản thành vector có nghĩa là gì?
- Được rồi, thôi không nói về các sơ đồ nữa.
- Tôi luôn thiếu sơ đồ.
- À, chúng ta hãy, à, hãy chuyển việc này thành việc tìm kiếm các sản phẩm tương tự trong một quy trình tự động.
- Hãy nhắc lại cho mình xem mục kiểm tra đầu tiên trong tập dữ liệu kiểm tra của chúng ta là gì.
## Phan 9

### Muc 25

- Bạn có nhớ mục kiểm tra đầu tiên trong tập dữ liệu kiểm tra đầu tiên không?
- Tất nhiên là bạn làm rồi.
- Đó là pedal méo tiếng máu cũ, chiếc pedal guitar mà tất cả chúng ta đều cần.
- À, vậy tôi sẽ bắt đầu bằng cách giới thiệu cho các bạn một hàm có tên là vector, hàm này nhận vào một đối tượng và chuyển đổi nó thành một vector.
- Và nó thực hiện điều đó bằng cách gọi hàm mã hóa dot encode.
- Được rồi.
- Điều đó không khó lắm.
- Bạn hiểu điều đó.
### Muc 26

- Được rồi.
- Điều này cũng rất đơn giản, đó là tính năng tìm kiếm các mục tương tự.
- Khi được cung cấp một mặt hàng, hệ thống sẽ trả về một số mặt hàng tương tự và giá của chúng.
- Và nó cực kỳ đơn giản.
- Chúng tôi chỉ tạo một vector từ các mục.
- Vì vậy, chúng ta gọi hàm này ở đây là vector.
- Và sau đó chúng ta nói đến việc thu thập.
- Đây là truy vấn dot cho bộ sưu tập chroma của chúng tôi.
### Muc 27

- Và chúng ta truyền vào vector.
- Chúng tôi có một cách để chuyển đổi mảng numpy thành danh sách.
- Và chúng tôi đã yêu cầu nhận lại năm kết quả.
- Chúng tôi nhận các tài liệu, chúng tôi nhận báo giá và chúng tôi trả lại.
- Được rồi, vậy nếu tôi tìm thấy các sản phẩm tương tự cho pedal méo tiếng, tôi sẽ nhận được gì?
- Tôi được gì?
- Được rồi, tôi được những thứ này.
- Năm phản hồi này.
## Phan 10

### Muc 28

- Chúng ta cũng nhận được một số thông tin từ tiếng ồn của máu cũ.
- Nhưng nó không phải là một pedal méo tiếng.
- Đó là một quá trình nỗ lực tạo ra hiệu ứng vang.
- Vì vậy, đây là một loại hộp hiệu ứng âm thanh tương tự từ cùng một nhà sản xuất nhưng không phải là cùng một sản phẩm.
- Chúng ta có một bộ khuếch đại Md2 Mega Distortion.
- Vậy đây là một loại pedal méo tiếng khác từ một nhà sản xuất khác.
- Chúng ta lại có một hiệu ứng âm thanh cổ điển khác, lần này là một pedal delay, một loại hiệu ứng khác biệt, nhưng cùng thương hiệu.
- Và sau đó là một vài điều khác.
### Muc 29

- Và đây là giá của năm món đồ đó.
- Như vậy, bạn có thể thấy ngay rằng chúng ta có các sản phẩm tương tự với giá cả tương ứng.
- Điều này đang hoạt động.
- Đó đều là những chuyện vặt vãnh.
- Nói chung, chúng ta chỉ đang thực hiện một phép tra cứu vector trong một cơ sở dữ liệu.
- Và đây chính là bản chất của Rag.
- Điều này có nghĩa là tôi có thứ gì đó.
- Tôi muốn tra cứu thông tin tương tự như vậy vì tôi định đưa nó vào prompt của mình.
### Muc 30

- Và thực tế, đó chính xác là những gì chúng ta làm trong hàm tiếp theo này: tạo bối cảnh dựa trên một số thông tin tương tự và một số giá cả.
- Vậy tôi sẽ có một thông điệp để làm bối cảnh.
- Dưới đây là một số mặt hàng khác có thể tương tự với mặt hàng mà bạn cần ước tính.
- Và sau đó, tôi sẽ chỉ đề cập đến các sản phẩm có thể liên quan và liệt kê chúng ra, được không?
- Để làm cho điều đó trở nên thực sự với bạn, hãy tiếp tục sử dụng hiệu ứng méo tiếng ồn máu cũ của chúng ta, dù nó là gì đi chăng nữa.
- À, trước tiên chúng ta hãy tìm những thứ tương tự với nó, sau đó gọi hàm `make context` và xem kết quả in ra là gì.
- Vậy là bắt đầu nhé.
- Nó nói cho bối cảnh.
## Phan 11

### Muc 31

- Dưới đây là một số sản phẩm khác có thể tương tự hoặc có liên quan đến các dự án âm thanh cũ, hiệu ứng precession reverb, và sản phẩm liên quan đến Boss Mega Distortion Pedal.
- Và tôi sẽ cung cấp giá ở phần cuối đây.
- Vì vậy, đây rõ ràng là một bối cảnh hữu ích mà mô hình biên có thể tận dụng để đưa ra mức giá tốt hơn.
- Để cảm thấy như chúng ta đang đi đúng hướng ở đây.
- Và điều này, tất nhiên, một lần nữa nằm ở trung tâm của rag.
- Được rồi.
- Và chúng ta có thể chuyển đổi điều đó thành tin nhắn theo phong cách AI mở, um, với nội dung tin nhắn do người dùng tạo.
- Và thông điệp sẽ là ước tính giá của sản phẩm này, sau đó trả lời với giá.
### Muc 32

- Không có giải thích, giống như trước đây.
- Và sau đó là phần tóm tắt sản phẩm.
- Và sau đó, chúng ta sẽ bổ sung các ví dụ liên quan.
- Được rồi, chúng ta hãy xem nó hoạt động như thế nào.
- Ước tính giá của sản phẩm.
- Được rồi, chúng ta hãy lấy lại, lấy lại mục kiểm tra đầu tiên và in các thông báo, được không?
- Chúng tôi nhận nội dung từ người dùng, ước tính giá của sản phẩm này, trả lời với giá, vân vân, vân vân, vân vân.
- Đó chính xác là điều chúng tôi mong đợi.
### Muc 33

- Thay vì làm điều này, chúng ta hãy lấy phần tử thứ 0 của nó và nội dung của nó, sau đó in ra để chúng ta thực sự thấy được kết quả mà chúng ta nhận được.
- Tôi cần đóng dấu ngoặc ở đây, tôi nghĩ vậy, và xóa cái đó.
- Hãy chạy chương trình này và đây là kết quả chúng ta nhận được.
- Ước tính giá của sản phẩm này.
- Trả lời với giá.
- Không có giải thích.
- Và đây là sản phẩm.
- Để tham khảo, đây là một số mặt hàng khác có thể tương tự với mặt hàng mà chúng ta cần ước tính.
## Phan 12

### Muc 34

- Và chúng ta đã có nó.
- Điều này có vẻ rất rõ ràng và đó là tất cả.
- Đây đã là quy trình Rag của chúng tôi.
- Bây giờ chúng ta có thể có một hàm, GPT five one rag, nơi chúng ta chỉ cần lấy một mục.
- Bước 1: Chúng ta tìm những thứ tương tự như món đồ đó.
- Bước hai chúng ta gọi là GPT 5.1.
- Chúng tôi truyền các tin nhắn mà chúng tôi tạo ra, trông giống hệt như thế này.
- Và chúng ta không cần phải suy luận gì cả.
### Muc 35

- Chúng tôi đang cung cấp cho nó tất cả thông tin cần thiết.
- Và thế là xong.
- Đó là tất cả những gì chúng ta cần làm để kích hoạt chế độ Rag của GPT-5.1.
- À, có thể bạn đã nghĩ rằng điều này sẽ rất phức tạp, nhưng thực ra không phải vậy.
- Chúng tôi vừa hoàn thành việc xây dựng một quy trình xử lý dữ liệu hoàn chỉnh.
- Điều duy nhất chúng ta còn lại cần làm là thử nghiệm nó.
- Hãy thử xem sao.
- Vậy đây là lúc quyết định.
### Muc 36

- Sẽ có rất nhiều khoảnh khắc quyết định trong tuần này, nhưng tôi hy vọng rằng bạn vẫn còn giữ được điều gì đó trong tay.
- Dựa trên dữ liệu từ tuần trước, với tất cả các ghi chú của bạn về mức giá mà chúng ta đã đạt được, chúng ta đã có thể đạt được mức giá 39,85, đây là mức giá tốt nhất từ mô hình chuyên gia của chúng ta, và đó chính là mức giá mà chúng ta đang phải đối mặt ở đây.
- Mô hình mạnh nhất trên hành tinh được trang bị cơ sở kiến thức Rag có khả năng tra cứu so sánh như thế nào với một mô hình nhỏ hơn hơn một nghìn lần và được lượng tử hóa xuống còn bốn bit, nhưng đã được tinh chỉnh?
- Vậy đây chính là cuộc đối đầu giữa những người khổng lồ.
- Đây là chức năng.
- Đơn giản như vậy thôi.
- Hãy cùng thực hiện một thí nghiệm nhanh trước tiên.
- Bạn nhớ rằng giá của chiếc pedal méo tiếng đó là $219.
## Phan 13

### Muc 37

- Hãy làm Ragnar.
- Khi tôi chạy tác vụ này, nó sẽ trước tiên tra cứu trong Chromium, tìm các mục tương tự, sau đó gọi đến GPT-5.1 trên đám mây để đưa ra ước tính, và kết quả là $229.
- Vậy cái đó giảm $10.
- Điều đó chắc chắn rất gần.
- Điều đó thật đáng ngạc nhiên.
- Nhưng điều chúng ta không biết là liệu điều này có áp dụng cho tất cả hay không, liệu có những trường hợp ngoại lệ hay không.
- Hãy cùng tìm hiểu.
- Hãy chạy thử xem sao.
### Muc 38

- Nó đang hoạt động.
- Đã có một số màu xanh và một số màu đỏ.
- Bạn có thể thấy nó đang di chuyển một cách trơn tru và nhanh chóng.
- Và tôi cũng vậy, điều này thật quá thú vị đến mức tôi không thể làm việc đó là tạm dừng bạn lại và quay trở lại, bởi vì chúng ta cần phải sống trọn vẹn khoảnh khắc này cùng nhau và trở thành một phần của tất cả những điều này khi nó diễn ra.
- À, và, ừm, đúng rồi, tôi nên nói rằng mặc dù chúng ta đã đặt nền móng ở đây, nhưng tôi nhận thấy có một chút ngẫu nhiên trong này, nên tôi không biết chính xác câu trả lời chúng ta sẽ nhận được là gì.
- Mỗi lần tôi chạy nó, kết quả lại hơi khác nhau.
- Chúng ta đã đi được hai phần ba chặng đường.
- Chúng ta đang ở giai đoạn cuối cùng, còn 30 việc cần làm, 20 việc cần hoàn thành trong 10 ngày tới.
### Muc 39

- Câu trả lời sắp xuất hiện, và đó sẽ là sự so sánh giữa đào tạo và suy luận.
- Dưới đây là kết quả hiển thị trực quan.
- Và đây là con số 30.19, chiến thắng thuộc về nó.
- Wow.
- Vậy nên, ừm, thật bất ngờ và đáng kinh ngạc, ừm, mô hình biên giới cộng với rag đã vượt trội hơn cả mô hình được tinh chỉnh kỹ lưỡng của chúng ta.
- Và đây là kết quả khác so với cùng kỳ năm ngoái, khi đó mô hình được tinh chỉnh chuyên sâu vẫn mạnh hơn cả Rag.
- Nhưng không còn nữa.
- Hiện nay, sự kết hợp giữa mô hình tiên phong với GPT-5, sức mạnh của nó, cùng với toàn bộ kiến thức và khả năng của nó, kết hợp với kiến thức chuyên môn về khả năng tra cứu nội dung liên quan trong cơ sở dữ liệu Chroma, đã giúp nó trở nên thực sự, thực sự sắc bén.
## Phan 14

### Muc 40

- Trong phạm vi $30.
- À, không phải trong khoảng $31, mà là $30.19 mới là lỗi.
- Điều này thực sự tuyệt vời.
- Hình ảnh đã nói lên tất cả.
- Chúng tôi vừa hoàn thành và đã vượt qua tất cả các con số trước đây của mình.
- Đây hiện là mô hình mạnh nhất trên hành tinh.
- Vâng, tôi nghe thấy bạn đang thuyết phục tôi chọn mô hình mạnh mẽ nhất trên hành tinh này cho nhiệm vụ cụ thể này.
- Và thực ra không phải như vậy.
### Muc 41

- Đó là mô hình mạnh mẽ nhất.
- Đó là vì quy trình làm việc này, kết hợp giữa mô hình và chức năng tra cứu, đã giúp chúng ta trở thành mạnh nhất trên hành tinh.
- Có lẽ tôi đang đi quá xa, nhưng dù sao đi nữa, điều đó thật tuyệt vời.
- Đó là một kết quả tuyệt vời, nhưng hóa ra chúng ta có thể làm tốt hơn một chút.
- Bạn đang nghĩ gì vậy?
- Ha!
- Làm sao chúng ta có thể làm tốt hơn thế này được?
- Chỉ tốt hơn một chút thôi.
### Muc 42

- Nhưng chúng ta có thể làm tốt hơn một chút.
- Và đó là do một điều bí ẩn gọi là "ensemble".
- Nếu bạn có các mô hình khác nhau đưa ra các kết quả khác nhau, thì bạn thường có thể xây dựng một mô hình khác, là sự kết hợp của các mô hình đó và khiến nó vượt trội hơn về hiệu suất so với tất cả các mô hình kia.
- Bây giờ, có thể điều đó nghe có vẻ trái ngược với直觉 của bạn.
- Bạn có thể nói, khoan đã, làm sao điều đó có thể hoạt động được nếu tất cả các mô hình này đều sai lệch hơn, tôi không biết, hãy nói là 100, thì làm sao một sự kết hợp của chúng có thể cho ra sai số nhỏ hơn 100?
- Làm sao điều đó có thể hoạt động được?
- Và đó chính là điều kỳ diệu của một thứ gọi là tập hợp (ensemble).
- Và tôi muốn nói rằng, đối với các nhà khoa học dữ liệu trong số các bạn, điều này đã quá quen thuộc.
## Phan 15

### Muc 43

- Nhưng nổi tiếng nhất, các hệ thống đề xuất thực sự ra đời nhờ một giải thưởng mang tên Netflix Prize, đó là khi Netflix đã trao hoặc đề nghị giải thưởng $1 triệu cho bất kỳ ai có thể tạo ra hệ thống đề xuất phim tốt nhất, vượt trội so với mô hình hiện có của họ trong việc gợi ý bộ phim tiếp theo mà bạn có thể muốn xem.
- Và những người chiến thắng giải thưởng Netflix đã làm được điều đó bằng cách xây dựng một mô hình tập hợp lớn.
- À, nhưng các mô hình kết hợp là những thứ mà các nhà khoa học dữ liệu yêu thích và xây dựng liên tục.
- Và trên thực tế, mô hình rừng ngẫu nhiên mà chúng ta đã xem trước đó chính là một mô hình tập hợp.
- Vậy tại sao việc kết hợp nhiều mô hình lại có thể đạt kết quả tốt hơn bất kỳ mô hình riêng lẻ nào?
- Cách giải thích đơn giản là như sau: giả sử chúng ta có một mô hình dự đoán giá cả, và giả sử rằng giá của tất cả hàng hóa của chúng ta đều chính xác là $100.
- Tất cả các sản phẩm đều có giá $100 cho mỗi sản phẩm.
- Và mô hình này luôn sai lệch chính xác $10.
### Muc 44

- Hoặc là $10 quá nhiều, hoặc là $10 quá ít.
- Vì vậy, nó luôn đoán là 110 hoặc 90.
- Mỗi lần như vậy, nó luôn chênh lệch mười.
- Khi chúng ta chạy mô hình này, sai số trung bình tổng cộng là mười vì nó sai lệch mười đơn vị mỗi lần.
- Vậy trung bình là mười.
- Và giả sử chúng ta có một mô hình khác và nó có những đặc tính tương tự.
- Nó cũng luôn chênh lệch mười.
- Và nó cũng luôn luôn hoặc sai quá nhiều hoặc quá ít.
### Muc 45

- Vì vậy, cả hai mô hình này, mô hình A và mô hình B, đều có sai số là mười vì cả hai đều luôn đoán sai lệch mười.
- Giờ hãy giả sử chúng ta kết hợp hai mô hình này bằng cách lấy trung bình.
- Chúng ta chỉ cần lấy mô hình này cộng với mô hình kia chia cho hai, tức là trung bình của hai mô hình đó.
- Lỗi của mô hình kết hợp sẽ là gì?
- Chà, nếu chúng ta không may mắn và mỗi lần mô hình A dự đoán sai lệch $10, mô hình B cũng dự đoán sai lệch $10.
- Và mỗi khi A gặp sự cố, B cũng gặp sự cố.
- Trường hợp xấu nhất.
- Trong trường hợp đó, chúng ta sẽ lại lệch đi mười đơn vị so với giá trị trung bình, và do đó, sai số tổng hợp sẽ là mười.
## Phan 16

### Muc 46

- Nhưng nếu có trường hợp nào đó mà chúng đi theo hai hướng ngược nhau, thì ngay lập tức sai số trung bình sẽ nhỏ hơn mười.
- Và hy vọng rằng ví dụ này sẽ giúp bạn có được một chút cảm nhận.
- Nghe có vẻ hơi trái với直觉, nhưng thực ra nó có lý.
- Có thể có cách kết hợp các mô hình khác nhau để loại bỏ sự không nhất quán giữa chúng, đặc biệt nếu chúng sử dụng các phương pháp khác nhau, và điều này có thể giúp mô hình tổng hợp trở nên tốt hơn so với tổng của các phần riêng lẻ theo một cách nào đó.
- Và đó chính là lý thuyết cơ bản đằng sau các tập hợp.
- Và đó chính là điều chúng ta sẽ làm ngay bây giờ.
- Vậy hãy bắt đầu bằng cách quay lại với công cụ định giá theo mô hình của chúng tôi, chuyên gia của chúng tôi.
- Tôi có một hàm nhỏ ở đây chuyên dùng để gọi modal trên đám mây và trả về tóm tắt từ modal.
### Muc 47

- Tôi cũng có cái này ở đây.
- Lấy giá trị loại bỏ số khi một số mô hình của chúng tôi trả về văn bản.
- Được rồi.
- Bây giờ chúng ta sẽ sử dụng thêm một mô hình khác, đó là mạng nơ-ron mà tôi đã giới thiệu vào cuối tuần thứ sáu, và bạn cũng có thể tự đào tạo nó nếu muốn.
- Tôi đã tải các trọng số lên một tệp, mạng nơ-ron sâu, PyTorch, và tệp đó hiện có sẵn trên Google Drive ở đây, bạn có thể tải xuống các trọng số đó.
- Và bạn nên đặt nó ngay tại đây trong thư mục mạng nơ-ron sâu này.
- Nó chỉ hơn một gigabyte.
- Vì vậy, việc tải xuống có thể mất một chút thời gian.
### Muc 48

- Và tôi sẽ không đưa nó vào Git vì nó quá lớn để đưa lên GitHub, nên bạn có thể tải nó xuống và đưa nó vào đó.
- Và sau đó, tôi đã tạo ra một mô hình mạng nơ-ron sâu để thực hiện suy luận, mà bạn có thể tải vào.
- Chúng ta thực sự không cần.
- Tôi nghĩ chúng ta không cần điều đó.
- À, chúng ta có thể tải dữ liệu này vào và sau đó tải các trọng số của chúng ta vào.
- Và điều đó sẽ cho chúng ta một cách khác để, ừm, để thực hiện điều này.
- Điều này sẽ cung cấp cho chúng ta một cách để chạy mạng nơ-ron sâu.
- Vậy bây giờ tôi có một mô hình chuyên gia và một mô hình mạng nơ-ron sâu.
## Phan 17

### Muc 49

- Và bây giờ chúng ta có thể có một mô hình tổng hợp.
- Và nó sẽ sử dụng mô hình biên giới làm giá trị đầu tiên, mô hình chuyên gia làm giá trị thứ hai và mạng nơ-ron sâu làm giá trị thứ ba.
- Bây giờ, điều bạn cần làm trong trường hợp này là thực hiện phân tích hồi quy tuyến tính.
- Bây giờ, hãy áp dụng phương pháp này cho một lượng lớn dữ liệu và thực hiện phân tích hồi quy tuyến tính để xác định xem sự kết hợp có trọng số nào của các mô hình khác nhau sẽ mang lại kết quả tốt nhất trên tập dữ liệu kiểm tra.
- Và thực tế, đó chính là điều tôi đã làm trong khóa học này năm ngoái.
- Nhưng nó cũng là một sự phân tâm.
- Điều đó mất một chút thời gian để hoàn thành.
- Nếu bạn quan tâm đến việc làm điều đó, thì tôi rất khuyến khích bạn thử làm xem sao.
### Muc 50

- Không mất nhiều thời gian, nhưng nó mất khoảng nửa giờ để mày mò với mô hình hồi quy tuyến tính.
- Và tôi không nghĩ rằng việc minh họa điểm này là quan trọng, vì tôi có thể nhanh chóng phác thảo một cách sơ lược như sau: hãy lấy 80% của giá đầu tiên, 10% của giá thứ hai và 10% của giá thứ ba.
- Khi kết hợp ba mức giá này, 80% được phân bổ cho mô hình biên của chúng tôi với Rag, 10% cho mô hình chuyên gia, và 10% cho mạng nơ-ron sâu.
- Hãy thử kết hợp chúng lại và xem kết quả thế nào.
- Vậy, điều chúng ta có thể làm là chạy đánh giá mô hình tập hợp của chúng ta với tập dữ liệu kiểm tra này và xem hiệu suất của nó như thế nào.
- Được rồi, vậy chúng ta quay lại việc gọi skript đánh giá yêu thích của mình bằng hàm ensemble ngay tại đây.
- Và với bộ dữ liệu thử nghiệm của chúng tôi, tôi sẽ bắt đầu.
- Và lần này sẽ mất nhiều thời gian hơn.
### Muc 51

- Đặc biệt, cái đầu tiên sẽ mất toàn bộ 30 giây trong khi chế độ modal bắt đầu hoạt động.
- Nhưng một khi nó đã vượt qua được cái đầu tiên, nó sẽ tăng tốc.
- Vậy tôi sẽ để nó tự hoạt động, và hy vọng bạn cũng sẽ làm như vậy vì bạn sẽ muốn tự mình thử nghiệm điều này.
- Nhưng tôi muốn nói rằng đối với một số bạn, có thể gặp phải vấn đề kỹ thuật khi chạy mạng thần kinh sâu vì nó là một hệ thống khá phức tạp và nặng nề.
- Nếu bạn muốn, bạn không cần phải chạy nó và việc này rất đơn giản.
- Tôi đã đề cập trước đó rằng có một số cách tắt nhanh đơn giản.
- Nếu bạn gặp bất kỳ vấn đề nào khi chạy mô hình tập hợp, bạn có thể thay thế mô hình tập hợp bằng một mô hình chỉ thực hiện cuộc gọi đến mô hình chuyên gia.
- Nếu bạn không muốn, thì không cần phải làm điều này.
## Phan 18

### Muc 52

- Dù sao đi nữa, mọi thứ đã bắt đầu và tôi sẽ để nó diễn ra.
- Bạn có thể thấy rằng sau khi modal đã được kích hoạt, việc gọi modal lặp đi lặp lại sẽ diễn ra rất nhanh chóng.
- Vậy, để tránh nhầm lẫn, mỗi khi chúng tôi đưa ra một mức giá, chúng tôi đang gọi mô hình chuyên gia trong modal.
- Trong đám mây, chúng tôi đang gọi mô hình biên giới của chúng tôi để tra cứu trong chroma, và đưa ra lời nhắc đó cho GPT-5.1.
- Và sau đó, chúng tôi cũng đang gọi một mạng thần kinh sâu và để nó thực hiện ước lượng.
- Và chúng ta đã đi được hơn nửa chặng đường.
- Và tôi sẽ gặp bạn ngay sau khi nó hoàn tất.
- Và tôi nên nói rằng, tất nhiên, trong ba mức giá đó, nó lấy 80% của mức giá biên, cộng thêm 10% và 10% nữa, tất cả được cộng lại thành con số này.
### Muc 53

- Hãy cùng khám phá.
- Đây là nó.
- Chúng tôi có hai tay cầm.
- Chúng tôi chỉ đạt được một cải thiện nhỏ về số liệu biên giới.
- Nhưng hiện tại chúng ta chỉ còn 29,9.
- Và ở đây, hệ số R-squared hiện đang ở mức 87%.
- Hình ảnh này trông thật đẹp.
- Thật tuyệt đẹp.
### Muc 54

- Nhìn xem mọi thứ bây giờ gần nhau đến mức nào?
- Chúng ta thực sự là như vậy.
- Chúng ta đã hoàn tất việc định giá.
- Nếu bạn đã chán ngấy với những biểu đồ này, đây là biểu đồ cuối cùng, cuối cùng.
- Tôi đã rất quyết tâm để có được một chiếc tay cầm đôi và cuối cùng tôi đã đạt được mục tiêu đó.
- Xin vui lòng ghi lại điều này.
- Số tiền cuối cùng của bạn là 129,90.
- Đó chính là thành công.
## Phan 19

### Muc 55

- Bây giờ tôi cũng nhận thức rõ điều mà có lẽ bạn đã nghĩ đến, đó là tất cả những điều này đều có mặt tích cực và tiêu cực.
- Việc quá tập trung vào con số 29 có thể là điều vô nghĩa, bởi vì tất nhiên, con số đó có một khoảng sai số xung quanh nó.
- Nhưng nó cảm thấy tốt.
- Bạn biết đấy, cảm giác thật tuyệt khi đạt được 29,9.
- Nhưng vấn đề là, điều này chỉ dựa trên việc thiết lập nhanh chóng và tổng quát các trọng số này.
- Nếu bạn có thời gian để xây dựng một mô hình tập hợp đầy đủ, bạn có thể đạt được kết quả tốt hơn nhiều.
- À mà này, bạn có thể thêm nhiều mô hình vào đây.
- Bạn có thể thêm các mô hình biên giới khác.
### Muc 56

- Bạn có thể đưa vào toàn bộ các mô hình khác nhau mà chúng ta đã đề xuất.
- Quay lại với XGBoost, quay lại với rừng ngẫu nhiên.
- Tôi nghĩ năm ngoái tôi đã sử dụng thuật toán Rừng ngẫu nhiên thay vì mạng nơ-ron.
- Vậy thì hãy làm đi.
- Càng đầu tư nhiều, kết quả càng tốt.
- Vấn đề khi sử dụng hồi quy tuyến tính cho mô hình kết hợp của bạn là hồi quy tuyến tính rất thông minh, và nếu một yếu tố không đóng góp bất kỳ tín hiệu nào, nó sẽ không bao gồm yếu tố đó.
- Nó sẽ không được tính.
- Vậy bạn có thể thêm bao nhiêu mô hình tùy thích.
### Muc 57

- Và hồi quy tuyến tính sẽ giúp xác định cách kết hợp các mô hình khác nhau này để đạt được kết quả cuối cùng tốt nhất.
- Vì vậy, bạn có thể vượt qua tôi với con số 29 này, và tất nhiên, đó chính là thách thức dành cho bạn.
- Sử dụng tất cả các kỹ thuật.
- Hãy tận dụng mọi thứ chúng ta đã làm ở đây để trở nên tốt hơn nữa.
- Hãy làm cho nó xuống còn 20.
- Hãy xem bạn có thể làm được gì.
- Năm ngoái, điểm cao nhất mà tôi đạt được là 46 hoặc khoảng như vậy.
- Có thể là 47.
## Phan 20

### Muc 58

- À, vậy là, thật sự, tôi, tôi, tôi thực sự bị ấn tượng bởi kết quả này.
- Tôi rất vui.
- Tôi muốn đạt được mức ba.
- Đó chính là giấc mơ của tôi.
- Và tôi đã đạt được mức 29,9 với hai tay cầm, thật sự rất, rất tuyệt vời.
- À, vậy, à, vâng, xin hãy dành một chút thời gian để ăn mừng thành công này, tận hưởng vinh quang của lỗi $29.9 của chúng ta.
- Và tất nhiên, điều đó sẽ không thực sự nếu chúng ta không thể hình dung được điều đó.
- Vậy nên tôi phải làm điều này.
### Muc 59

- Được rồi, bắt đầu nhé.
- Hãy đưa nó vào biểu đồ này.
- Và đây là kết quả cuối cùng, sai số dự đoán từ mỗi mô hình.
- À, chúng tôi có, à, các mô hình học máy gốc, các mô hình học máy gốc, à, hiệu suất quảng cáo thảm hại ở đây với 87,6.
- Điên rồ.
- À, đây là mạng thần kinh đầu tiên mà chúng tôi đã thực hiện, với độ chính xác 63%.
- Đây là tất cả các mẫu xe tiên phong.
- Tốt nhất là GPT 5.1 với điểm số 44,74.
### Muc 60

- Sau đó là kết quả tinh chỉnh không như mong đợi.
- Đây là mô hình mạng thần kinh sâu tốt nhất của chúng tôi với 46, uh, và 46,49.
- Đó chính là mức cơ sở, là mức tồi tệ nhất của mọi thứ, cho đến khi đạt được con số 39,85 được tinh chỉnh kỹ lưỡng, đó chính là kết quả chiến thắng của chúng ta.
- Cho đến ngày hôm nay.
- Hiện tại, GPT-5.1 đang dẫn đầu với điểm số 30.19, và ngay sau đó là mô hình tổng hợp của chúng tôi với điểm số 29.9.
- Kết hợp cái này với cái này và cái này.
- Và như tôi đã nói, ở đây chắc chắn còn nhiều tiềm năng để khai thác.
- Còn nhiều nước ép nữa và tôi, tôi không thể chờ đợi để nghe cách bạn làm điều đó.
## Phan 21

### Muc 61

- Và bạn phải gửi cho tôi các ảnh chụp màn hình, đăng các ảnh chụp màn hình của biểu đồ đó để cho thấy hiệu suất mà bạn có thể đạt được.
- Nhưng hiện tại, tôi sẽ rất, rất hài lòng với con số 29,9.
- Được rồi.
- À, nhưng để làm cho tôi thực sự vui lòng, chúng ta phải đưa điều này vào một đại lý.
- À, và, à, vậy chúng ta sẽ bắt đầu bằng việc thử nghiệm một đại lý biên giới, đó là một đại lý sẽ chịu trách nhiệm quản lý toàn bộ quy trình xử lý dữ liệu.
- À, vậy chúng ta hãy kiểm tra lại một lần nữa.
- Nó nằm trong thư mục các đại lý.
- Có một nhân viên biên phòng.
### Muc 62

- Bạn đang ở đâu?
- À, nó ở đó.
- Và nhân viên biên giới là Điều này hoàn toàn giống như khi chúng ta chuyển đổi các tệp notebook thành các mô-đun Python.
- Và tôi luôn khuyên bạn nên bắt đầu với một cuốn sổ tay, vì đó là cách tuyệt vời để duy trì tư duy thử nghiệm và liên tục cải tiến.
- Nhưng đến một lúc nào đó, đã đến lúc cần đưa các thành phần vào các mô-đun Python.
- Và đây là cách tôi đang cố gắng giải thích cho bạn.
- Giống như mã nguồn đã sẵn sàng cho sản xuất.
- Điều đó có nghĩa là nó có những thứ như, bạn biết đấy, docstrings.
### Muc 63

- Vậy là chúng ta có, ừm, những bình luận tích cực ở đây.
- Và tôi cũng đang sử dụng các gợi ý kiểu.
- Vậy nên tôi đang áp dụng tất cả các phương pháp tốt nhất mà có lẽ các nhà khoa học dữ liệu trong tôi chưa thực sự cẩn thận trong việc áp dụng.
- Nhưng bây giờ chúng ta đang tập trung vào khía cạnh kỹ thuật của công việc một kỹ sư trí tuệ nhân tạo.
- Chúng tôi đang cố gắng cẩn thận hơn một chút trong việc này.
- Bạn có thể thấy rằng nhân viên biên giới chỉ đang tuân theo chính xác cùng một quy trình, tuy nhiên.
- Bây giờ chúng ta đã thử nghiệm và hoàn thiện nó, chúng ta có thể biến nó thành một mô-đun tốt, một đại lý biên giới lớp tốt.
- Nó có cùng chức năng trong việc thiết lập kết nối và nhận tin nhắn để tìm kiếm các đối tượng tương tự.
## Phan 22

### Muc 64

- Và đây chính là lúc nó thực sự xác định giá.
- Với bối cảnh đó, chúng ta có thể sử dụng điều này một cách đơn giản.
- Chúng ta có thể gọi điện thoại đến Quadcast HyperX condenser Mic và tìm hiểu giá của nó.
- Và nó dự đoán rằng chi phí là $140.
- Và tôi nghĩ tôi đã đề cập trước đó rằng thực tế nó tốn của tôi $130.
- À, vậy đây là một mức giá thực sự rất, rất tốt.
- Và mô hình chuyên gia của chúng tôi đạt 90, kết quả này không tốt bằng.
- À, vậy, à, đúng rồi.
### Muc 65

- Đây rồi, đây là nó.
- Bây giờ, ừm, một, một điều là, ừm, đó.
- Ồ, đúng rồi.
- Hãy thử cái này nữa.
- Hãy thử xem.
- Định giá Shure Mv7 plus.
- À, bây giờ bạn có thể thắc mắc đó là gì.
- Đó là micro mà tôi đang sử dụng để nói chuyện với các bạn ngay lúc này.
### Muc 66

- À, đó là micro hiện tại của tôi, và nó có giá 2,99 đô la.
- À, ừm, ừm, vâng, nó rất gần.
- Một lần nữa, rõ ràng là anh ấy thực sự am hiểu về những điều này.
- À, và chúng ta cũng có thể sử dụng một tác nhân mạng thần kinh, và điều này được hiển thị bằng màu tím.
- Và bây giờ chúng ta hãy cùng xem xét mô hình đại lý mạng thần kinh.
- Đây là nó.
- Nó rất ngắn gọn và đơn giản.
- Nó chỉ thực hiện việc suy luận trên mạng thần kinh của chúng ta.
## Phan 23

### Muc 67

- À, và sau khi tải nó vào và cài đặt xong.
- Vậy nếu chúng ta quay lại đây, chúng ta cũng có thể làm điều tương tự.
- Và nó không hoạt động tốt bằng.
- Nó ghi 162.
- À, nhưng nó vẫn nằm trong khoảng chung.
- Và cuối cùng, chúng ta có thể bắt đầu tạo ra một tác nhân tổng hợp để sử dụng cả ba thành phần và kết hợp chúng lại với nhau.
- Vậy hãy cùng xem qua các chuyên gia, cụ thể là mô hình đại lý tổng hợp (ensemble agent) ngay bây giờ.
- Nó ở đây trong Ensemble Agent ngay tại đó.
### Muc 68

- Vậy là lại ngắn gọn và súc tích.
- Nhưng có một điều về điều này mà có thể bạn đã mong đợi.
- Nếu bạn, nếu bạn nhận ra điều này, điều mà tôi, điều mà tôi suýt nữa đã không đề cập.
- Vậy điều này làm gì?
- Nó tạo ra một tác nhân chuyên gia, một tác nhân biên giới và một tác nhân mạng thần kinh trong phương thức init của nó.
- Nó tạo ra ba tác nhân mà nó giao phó, nhưng nó cũng tạo ra trình tiền xử lý.
- Hãy nhớ, chúng ta vẫn phải làm.
- Nếu chúng ta lấy dữ liệu văn bản từ internet, chúng ta vẫn cần phải tiền xử lý dữ liệu đó để chuyển đổi sang định dạng phù hợp nhất cho các tác nhân của chúng ta.
### Muc 69

- Vậy thì nó sẽ lấy văn bản được đưa vào trong hàm giá này, lấy văn bản đó và trước tiên sử dụng bộ tiền xử lý để viết lại nó.
- Sau đó, nó sẽ gọi chuyên gia.
- Biên giới và mạng thần kinh là ba giá trị mà ba tác nhân ở bên phải.
- Và nó kết hợp chúng bằng cách nhân biên giới với 0.8, chuyên gia với 0.1 và mạng thần kinh với 0.1.
- Và đó là kết quả mà nó trả về, và nó cũng ghi lại điều đó.
- Nếu bạn muốn tham gia và cải thiện nhóm, đây chính là nơi để làm điều đó.
- Tất nhiên, đây là lúc bạn có thể sử dụng các trọng số thực tế mà chúng ta xác định dựa trên dữ liệu.
- Xem xét tập dữ liệu kiểm tra (val) để xác định cách phân bổ trọng số tối ưu cho nó.
## Phan 24

### Muc 70

- Ngoài ra, nếu bạn gặp vấn đề kỹ thuật khi triển khai mạng thần kinh, hoặc khi triển khai một trong hai mô hình chuyên gia hoặc mô hình biên.
- Đây là một lối tắt mà bạn có thể sử dụng.
- Bạn có thể truy cập vào trình quản lý gói này và chỉ cần bình luận (comment out) các gói gây ra vấn đề cho bạn.
- Chỉ cần bình luận chúng ở đây, bình luận chúng ở đây và sau đó ở đây.
- Bình luận các dòng đó và chỉ trả về số mà bạn thực sự muốn.
- Hãy để tôi bỏ chú thích để bạn có thể đơn giản hóa mô hình đại lý tổng hợp và thực hiện bất kỳ tác vụ nào mà bạn mong muốn.
- Đây là một nơi bạn có thể đến để thực sự làm rõ những gì đang xảy ra.
- Nếu bạn muốn, bạn có thể chạy phiên bản tối thiểu của ứng dụng này.
### Muc 71

- À, nhưng mà, chúng ta sẽ có phiên bản cao cấp nhất của sản phẩm này.
- Chúng ta sẽ, chúng ta sẽ, chúng ta sẽ sử dụng phương pháp cân nặng kết hợp này.
- Và bạn sẽ nhận thấy đây là một ví dụ về quy trình làm việc của đại lý, trong đó chúng tôi sử dụng mã Python để điều phối ba cuộc gọi đến ba đại lý khác nhau.
- Không phải là hiện tại có sự tự chủ nào cả.
- Đây chỉ là một cuộc gọi cố định cho ba đại lý phụ để tổng hợp các con số và tính toán giá ước tính tổng cộng của mặt hàng này.
- Được rồi.
- Và cuối cùng, bây giờ tôi cần tải vào đại lý tập hợp.
- Bạn có thể thấy rằng khi tác nhân tổng hợp được khởi tạo, nó bắt đầu bằng cách khởi tạo tất cả các tác nhân cơ sở, tác nhân biên và tác nhân mạng thần kinh.
### Muc 72

- Và sau đó nó cho biết đã sẵn sàng.
- Và bây giờ tôi có thể yêu cầu đại lý của chúng tôi báo giá cho micro Shure Mv7 Plus dành cho podcaster.
- Nó đi rồi.
- Và bạn có thể thấy những thông báo nhật ký này thật tuyệt vời như thế nào.
- Chúng ta có thể quan sát mọi thứ diễn ra.
- Đại lý tập hợp được xử lý trước bằng Grok vì tôi đã thiết lập điều đó trong tệp môi trường của mình, như tôi đã chỉ cho bạn trước đó.
- Đó là đã được xử lý trước.
- Bây giờ, đại lý chuyên môn đang gọi mô hình được tinh chỉnh.
## Phan 25

### Muc 73

- Và tất nhiên, nó đã đi ngủ.
- Vậy việc này sẽ mất 30 giây, điều này, ừm, luôn khiến người ta mệt mỏi khi nó xảy ra.
- Tôi nên đã đặt cờ đó để nó luôn hoạt động.
- Nhưng khi việc đó hoàn tất, khi modal đã hoàn thành việc, ừm, việc, nó đang khởi động máy chủ, nó sẽ gọi modal.
- Sau đó, nó sẽ tiến hành định giá theo phương pháp định giá theo giá thị trường.
- Nó sẽ thực hiện việc định giá bằng mạng thần kinh.
- Và sau đó, chúng ta sẽ có kết quả tổng hợp.
- Được rồi.
### Muc 74

- Xong rồi.
- Nó dự đoán 2,99.
- Điều đó thật thú vị, vì điều đó hoàn toàn chính xác.
- Vậy là lần này, mô hình được tinh chỉnh của chúng tôi đã dự đoán chính xác giá của sản phẩm này.
- Đó thực sự là điều rất thú vị.
- À, vậy là nhân viên biên phòng đã sai lệch $10.
- Dàn nhạc đã sai lệch hoàn toàn.
- Kết quả cuối cùng rất sít sao.
### Muc 75

- À, lần này chúng ta đã làm tốt hơn nếu chỉ cần chọn đại lý chuyên môn.
- Và có thể khi bạn xây dựng dàn nhạc của mình, bạn sẽ có một dàn nhạc như vậy.
- Điều đó sẽ có thể làm tốt hơn so với nhóm của tôi.
- Nhưng đó là tất cả.
- Chúng tôi vừa xây dựng một mô hình tập hợp và bạn có thể thấy tất cả các lần gọi đến LMS đã diễn ra.
- Đây là cuộc gọi đến một LM.
- Và sau đó, chúng tôi cũng phải vecto hóa.
- Lại một cuộc gọi nữa, rồi ba cuộc gọi nữa.
## Phan 26

### Muc 76

- Vậy là bốn cuộc gọi LM đã tham gia vào việc đưa ra kết quả này.
- Và, đó chính là kết quả của hệ thống đại lý ảo của chúng tôi, đã sẵn sàng hoạt động cho sản phẩm của chúng tôi.
- Và tôi đã nói có năm cuộc gọi LM ở đó.
- Nhưng để chính xác hơn, tôi nên nói là bốn cuộc gọi LM và một cuộc gọi mạng thần kinh.
- Chúng tôi, trước hết, được gọi là mô hình biên giới, bao gồm mô hình mã hóa LM và mô hình biên giới LM.
- Chuyên viên.
- Đó là hệ thống LM được tinh chỉnh của chúng tôi.
- Đó là cuộc gọi LM thứ ba của chúng tôi.
### Muc 77

- À, đại lý tổng hợp.
- Để thực hiện tất cả các thao tác này, cần phải gọi trình tiền xử lý, đây là một cuộc gọi LM.
- Đó là cuộc gọi LM thứ tư.
- Đây là một mạng thần kinh, không phải là mô hình ngôn ngữ (LM).
- À, và như vậy, cuối cùng có tổng cộng năm mô hình tham gia.
- Bốn trong số đó là hệ thống quản lý học tập (LMS) và một trong số đó là mạng thần kinh.
- Nhưng dù sao đi nữa, thật là nhiều công đoạn phức tạp, nhiều yếu tố phải được xem xét để đưa ra một mức giá cho sản phẩm.
- Tất cả những điều đó đã xảy ra và đó chính là cách mà hệ thống đại lý của chúng tôi đã xây dựng kiến trúc của mình.
### Muc 78

- Mọi việc đang tiến triển tốt đẹp.
- Đó quả là một ngày trọng đại.
- Tôi hứa với bạn một ngày trọng đại.
- Đó là một ngày quan trọng.
- Chúng tôi không mất quá nhiều thời gian cho việc đó.
- Chúng tôi đã đi rất nhanh.
- Nhưng kết quả thực sự, thực sự tuyệt vời.
- Tôi rất vui vì chúng ta đã có được hai tay cầm.
## Phan 27

### Muc 79

- Tôi không nghĩ chúng ta sẽ làm điều đó.
- Thật là tuyệt vời.
- Và có thể bạn đã làm tốt hơn nữa.
- Được rồi.
- Với điều đó.
- Chúng ta đã hoàn thành 92,5% chặng đường này.
- Đây là giai đoạn nước rút.
- Wow.
### Muc 80

- Tất nhiên bạn biết, bạn có thể tạo văn bản và mã nguồn bằng các mô hình front-end, mô hình nguồn mở, API và công cụ.
- Các công cụ sẽ trở lại.
- Hỗ trợ.
- Chúng tôi đã xây dựng Rag hai lần.
- Bạn có thể áp dụng chiến lược gồm năm bước.
- Bạn có thể chọn lọc dữ liệu và tạo mô hình cơ sở.
- Bạn có thể thực hiện việc tinh chỉnh mô hình.
- Và bạn có thể triển khai các mô hình vào môi trường sản xuất, bao gồm cả trên modal.
### Muc 81

- Chúng ta có thể xây dựng một workflow Rag và triển khai một mô hình tập hợp (ensemble model) kết hợp nhiều mô hình khác nhau.
- Được rồi, vậy lần sau chúng ta sẽ tập trung chủ yếu vào việc phát triển trình quét (scanner agent).
- Và điều đó sẽ đòi hỏi việc sử dụng các đầu ra có cấu trúc mà chúng ta có.
- Tôi đã đề cập đến điều này nhiều lần và tôi luôn nói rằng chúng ta sẽ xử lý nó một cách đúng đắn, và chúng ta sẽ xử lý nó một cách đúng đắn.
- Chúng ta sẽ xử lý vấn đề này một cách cẩn thận vào ngày mai.
- Và đó như là một phần cuối cùng của kiến thức cốt lõi vô cùng quan trọng.
- À, nhưng mà nói chung thì chúng ta đã gần đến đích rồi.
- Tất cả sẽ được hoàn thiện bây giờ.
## Phan 28

### Muc 82

- À, và tôi không thể chờ đợi để cho bạn xem giá cả.
- Đúng.
- À, đang hiện thực hóa.
- Hẹn gặp lại vào ngày mai.

