# Ngay 022 - Tuan 5, ngay 2

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-022.txt

## Tong quan

- Chu de mo dau: Tôi đã mong chờ ngày này từ lâu rồi.
- File goc: day-022.txt
- So y chinh: 716
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Tôi đã mong chờ ngày này từ lâu rồi.
- Hôm nay tôi có một món quà đặc biệt dành cho bạn.
- Tôi, tôi cảm thấy ghen tị vì bạn đang ở nơi này, chưa từng trải nghiệm những điều tôi dành cho bạn ngày hôm nay và tất cả những điều đó sắp xảy ra với bạn.
- Có lẽ bạn nghĩ tôi hơi quá đáng, nhưng hãy chờ xem.
- Được thôi.
- Hôm nay có điều gì khiến tôi hào hứng đến vậy?
- Vâng, hôm nay là ngày của các vectơ đối với Rag.
- Tôi sẽ giới thiệu Lang Chain.
### Muc 2

- Một cái như vậy.
- Ý tôi là, chúng ta đã được giới thiệu về nó trước đây, nhưng chúng ta sẽ đi sâu hơn vào Lang Chain.
- Và tôi sẽ giới thiệu cho bạn cách nhìn thực tế vào các vectơ, đưa chúng vào sắc độ và trực quan hóa chúng trong sắc độ.
- Để nhắc lại những gì bạn đã có thể làm, bạn đã có thể tạo văn bản.
- Bạn có thể tạo mã bằng các mô hình frontier, bằng các công cụ hỗ trợ, bằng các mô hình nguồn mở, bạn có thể tự tin chọn mô hình phù hợp cho dự án của mình.
- Và tại thời điểm này, bạn có thể giải thích ý tưởng lớn đằng sau Rag, đó là bạn sử dụng các vectơ để thực hiện một loại tìm kiếm ngữ nghĩa.
- Tìm kiếm mơ hồ để tìm nội dung có liên quan.
- Đó chính là ý tưởng lớn.
### Muc 3

- Đó là những gì chúng ta sẽ sử dụng để thực hiện từ điều khá đơn giản mà chúng ta đã làm ngày hôm qua.
- Có thứ gì đó mạnh mẽ hơn nhiều.
- Và đến cuối ngày hôm nay, bạn sẽ có thể giải thích về chuỗi dài, mặt tốt và mặt xấu.
- Bạn sẽ có thể làm việc với các bộ mã hóa phổ biến, nhúng các mô hình như chúng cũng được biết đến.
- Và bạn sẽ có thể chia tài liệu thành các phần, chuyển các phần thành các vectơ, đưa vectơ vào dữ liệu vectơ, lưu trữ tất cả những điều đó chỉ trong một ngày.
- Và đó là ngày hôm nay.
- Được rồi, trước khi bắt đầu, chúng ta hãy cùng tóm tắt nhanh những gì đã diễn ra ngày hôm qua.
- Tôi biết bạn đã hiểu rồi, nhưng điều quan trọng là phải nhắc lại.
## Phan 2

### Muc 4

- Vì vậy, người dùng đặt một câu hỏi.
- Hôm qua chúng tôi đã làm một việc khá ngớ ngẩn khi trả lời câu hỏi đó.
- Chúng tôi chỉ chia nhỏ nó thành các từ và xem liệu chúng ta có hiểu gì về những từ này không?
- Nhưng đó không phải là cách hay vì bạn có thể bỏ lỡ thông tin quan trọng.
- Bạn thực sự muốn thực hiện một số tìm kiếm mơ hồ trên văn bản đó.
- Được thôi, đây là cách để thực hiện điều đó.
- Mang theo một LL mã hóa.
- Ông M.
### Muc 5

- An và Lmw tạo ra một vectơ biểu diễn ý nghĩa của câu hỏi.
- Biến câu hỏi thành một vectơ.
- Hãy tra cứu thông tin đó trong dữ liệu vectơ.
- Lưu trữ cơ sở dữ liệu có khả năng tìm kiếm thông tin tương tự với vectơ mà bạn vừa truyền vào một cách nhanh chóng, sau đó thu thập thông tin mà chúng ta có được.
- Truyền thông tin đó vào lời nhắc cho LM.
- Và những gì chúng ta nhận được là thứ gì đó dựa trên ngữ cảnh đó, ngữ cảnh có liên quan mà chúng ta đã truyền vào trong lời nhắc.
- Được rồi.
- Bây giờ chúng ta hãy nói về chuỗi lang.
### Muc 6

- Vậy là bạn đã gặp Lang Chain một cách thoáng qua trước đó.
- Nhưng bây giờ chúng ta sẽ đi sâu hơn vào chuỗi ngôn ngữ.
- Vì vậy, Lang Chains là một khuôn khổ mã nguồn mở.
- Ứng dụng này được ra mắt vào tháng 10 năm 2022 bởi Harrison Chase, người đã khởi xướng và sau đó thành lập một công ty xung quanh ứng dụng này.
- Đây là một khuôn khổ chung.
- Đôi khi chúng tôi gọi những lớp này là lớp trừu tượng cho phép bạn giao tiếp với nhiều mô hình khác nhau và cũng ghép chúng lại với nhau, xây dựng những thứ giống như đường ống giẻ rách mà chúng ta sẽ thực hiện.
- Và có một phiên bản mới của Lang Chain, được phát hành gần đây, vào tháng 10 năm 2025, đây là một bản cải tiến khá quan trọng bao gồm việc đóng gói lại phần lớn Lang Chain.
- Vậy thì thực sự có một loại tiền tố 1.
## Phan 3

### Muc 7

- 0 và bài đăng 1.
- 0 và chúng ta sẽ làm việc với 1.
- 0 với phiên bản mới của Lang Chain ngày hôm nay khi chúng ta đào sâu vào cái này, cái này, khuôn khổ này, ừm, lớp trừu tượng này cho phép bạn kết nối, xâu chuỗi các llms khác nhau để hoàn thành nhiệm vụ kinh doanh và giới thiệu những ưu và nhược điểm của Lang Chain, những điều tốt và xấu.
- Vậy thì có một vài ưu điểm.
- Trước hết, Lang chain là thứ giúp việc ghép các llms lại với nhau để hoàn thành một việc gì đó trở nên nhanh hơn nhiều.
- Vì vậy, đối với những việc như trợ lý hoặc giẻ lau sẽ làm hoặc đối với các nhiệm vụ tóm tắt, điều đó có nghĩa là bạn có thể đưa sản phẩm ra thị trường nhanh hơn nhiều.
- Những thứ như sử dụng công cụ.
- Có một bộ công cụ rất mạnh mẽ đi kèm với nó.
### Muc 8

- Những thứ như thế này có thể thực hiện rất nhanh chóng.
- Đó chính là những gì Langshan mang lại cho bạn.
- Ngoài ra còn có rất nhiều sự áp dụng trong doanh nghiệp.
- Langshan cực kỳ nổi tiếng khi mới ra mắt và đến năm 2023, nó thực sự đã tạo nên tiếng vang lớn.
- Vì vậy, nó rất phổ biến trong doanh nghiệp.
- Rất nhiều dự án sử dụng Langshan, vì vậy đây thường là tài liệu lý lịch rất tốt.
- Thật tốt khi có nó ở đó.
- Đó là điều bạn biết cách làm.
### Muc 9

- Bạn sẽ thường xuyên gặp phải điều này.
- Vì vậy, xét về một số nhược điểm của Langshan, có lẽ điều đầu tiên tôi sẽ đề cập là khi Langshan lần đầu tiên xuất hiện vào năm 2223, việc gọi đến OpenAI, anthropic và Gemini nếu bạn tự mình thực hiện khá khác biệt.
- Và do đó, nhu cầu về một thứ gì đó giống như Langshan có thể thống nhất và kết nối mọi thứ lại với nhau, giúp bạn có thể chuyển đổi giữa các mô hình khác nhau là rất lớn.
- Nhưng kể từ đó, thời thế đã thay đổi.
- Và bây giờ, như bạn đã trải nghiệm, vì tất cả các nhà cung cấp đều có điểm cuối tương thích với OpenAI nên việc chuyển đổi giữa các mô hình khác nhau trở nên vô cùng đơn giản chỉ bằng cách sử dụng thư viện máy khách Python của OpenAI và bạn chỉ cần chuyển đổi URL cơ sở, có thể chỉ cần cấu hình và di chuyển giữa các nhà cung cấp khác nhau.
- Vì vậy, nhu cầu về lớp trừu tượng này được xây dựng ở phía trên là ít hơn.
- Và một số thứ khác mà mục đích của việc này là đơn giản hóa, như sử dụng các công cụ và sử dụng mẫu nhắc nhở, tất cả đều đã hội tụ theo thời gian.
- Hiện nay có những mô hình rất phổ biến để thực hiện tất cả những điều này.
## Phan 4

### Muc 10

- Vì vậy, ở thời điểm này, nhu cầu về chuỗi dài không còn cần thiết nữa.
- Vậy thì rõ ràng đó là một nhược điểm.
- Và nhược điểm còn lại có lẽ đáng tranh luận hơn và có lẽ là vấn đề sở thích cá nhân.
- Nhưng Langston ban đầu được coi là một lớp trừu tượng khá nhẹ.
- Nhưng theo thời gian, nó ngày càng phát triển và hiện tại có trọng lượng khá nặng.
- Nó khá thực chất về mọi mặt mà nó cung cấp.
- Đúng vậy.
- Nó có rất nhiều thuật ngữ, một số khái niệm, một số điều cần phải học.
### Muc 11

- Nó thậm chí còn có ngôn ngữ riêng, LCL, mặc dù chưa thực sự phổ biến nhưng cũng là một phần của nó.
- Và một số người sử dụng nó.
- Và vì thế nó thực sự đã trở thành một lớp trừu tượng khá nặng nề.
- Có rất nhiều điều cần phải học.
- Có một quá trình học tập khá dài để bước vào hệ sinh thái chuỗi Lang.
- Và hiện nay có nhiều lớp trừu tượng khác như LM nhẹ mà chúng ta đã gặp thực sự rất nhẹ.
- Và bạn có thể sử dụng những thứ như Light LM rất dễ dàng với một đường cong học tập nhỏ và chuyển đổi giữa các mô hình khác nhau, trong khi Lang Chain thì khó đăng ký hơn nhiều.
- Và kết quả là, lang chain bắt đầu có cảm giác giống như một sản phẩm cũ với đường cong học tập lớn và có những thứ còn sót lại từ thời đại trước, như thông điệp của con người và thông điệp của AI.
### Muc 12

- Nếu bạn biết rằng thứ thực sự đã được thay thế trong tâm trí mọi người bằng một danh sách các từ điển rất đơn giản mà chúng ta rất quen thuộc từ OpenAI.
- Vì vậy, theo quan điểm đó, Lang Chain có thể có vẻ hơi nặng nề, đòi hỏi phải học khá nhiều.
- Có những thứ nhẹ hơn như ánh sáng, con cừu nhỏ và một số thứ khác có lẽ ít cần thiết hơn.
- Vì vậy, tôi muốn cung cấp cho bạn những ưu và nhược điểm thẳng thắn.
- Bạn sẽ được trực tiếp đánh giá sản phẩm trong vài ngày tới.
- Khi chúng ta làm việc với nó, như tôi đã nói, bạn sẽ thấy những điều tốt nhất của Long Chain, và có thể bạn cũng sẽ thấy một số điểm chưa hoàn thiện.
- Sẽ rất dễ dàng để xây dựng một đường ống bằng vải vụn.
- Chúng ta sẽ có tất cả những thứ đó, chỉ cần một vài dòng mã.
## Phan 5

### Muc 13

- Chúng ta sẽ có một đường ống rác.
- Sẽ tuyệt vời lắm đây.
- Nhưng bạn cũng có thể thấy một số thuật ngữ khó hiểu, những thứ bổ sung đi kèm với hỗn hợp.
- Và tất nhiên, Lang Chain hiện đã là một phần của Công ty Lang Chain.
- Họ cũng có những dịch vụ khác nữa.
- Họ có biểu đồ Lang, một thứ rất khác biệt.
- Ừm, đã từng kết nối các tác nhân với nhau trong biểu đồ phụ thuộc mà chúng tôi đề cập trong khóa học về tác nhân của tôi, họ có Lang Smith, một nền tảng khả năng quan sát.
- Ừm, và họ còn có một số thứ khác nữa.
### Muc 14

- Vậy nên, có một hệ sinh thái lớn được xây dựng xung quanh Lang chain và có rất nhiều điều đáng thích về nó.
- Và có một vài điều cần lưu ý như chúng ta sẽ thấy.
- Được thôi.
- Chúng ta vào đây thôi.
- Vì vậy, chúng ta sẽ xem qua Lang Chain trước khi tiếp tục.
- Và thực ra đây là lần đầu tiên tôi sử dụng phiên bản thứ hai của Cursor vừa mới ra mắt.
- Nhưng tôi cho là bạn đã sử dụng nó từ lâu rồi.
- Và ở trên cùng, tôi thấy rằng chúng ta có thể chuyển đổi giữa trình soạn thảo hiện tại và các tác nhân nơi bạn có thể chạy nhiều tác nhân.
### Muc 15

- Đó là chức năng mới.
- Dù sao đi nữa, bước sang tuần thứ năm, chúng ta đã bước sang ngày thứ hai, ngày vectơ.
- Đây là lúc chúng tôi tiếp tục làm việc với chuyên gia giàu kinh nghiệm của công ty bảo hiểm Insure Life Insurance.
- Và bây giờ chúng ta sẽ làm việc bằng cách lấy dữ liệu trong cơ sở kiến thức và vector hóa nó rồi đưa vào kho lưu trữ vector.
- Vậy thì hôm nay sẽ có ba phần.
- Đầu tiên, chúng ta sẽ chia tài liệu thành các phần gọi là khối, là những phần nhỏ của tài liệu, hữu ích và sẵn sàng để đưa vào kho dữ liệu vectơ.
- Và sau đó chúng ta sẽ biến những thứ đó thành vectơ.
- Hoặc ít nhất chúng ta sẽ có các vectơ liên kết với từng vectơ, sau đó đưa chúng vào cơ sở dữ liệu vectơ mã nguồn mở và sắc độ mà tôi sẽ nói đến sau.
## Phan 6

### Muc 16

- Và sau đó chúng ta sẽ hình dung các vectơ của mình.
- Nhưng bây giờ chỉ cần đến phần A, chúng ta hãy chia tài liệu thành các phần nhỏ.
- Và bạn có thể nghĩ tại sao chúng ta cần chia tài liệu thành nhiều phần và chia chúng thành nhiều phần nhỏ?
- Và lý do là hãy tưởng tượng chúng ta có những tài liệu này và chúng sẽ chứa đủ loại thông tin khác nhau.
- Chúng ta đã thấy có hồ sơ nhân sự của nhân viên.
- Có nhiều thông tin về sản phẩm.
- Khi người dùng đặt câu hỏi, câu hỏi đó có thể chỉ liên quan đến một phần của tài liệu.
- Và nếu chúng ta chỉ xây dựng một vectơ liên kết với toàn bộ tài liệu thì khả năng một câu hỏi khớp trực tiếp với toàn bộ tài liệu như vậy sẽ rất thấp.
### Muc 17

- Vì vậy, chúng ta nên thử suy nghĩ về cách chia nhỏ từng tài liệu để có cơ hội tốt nhất rằng một phần cụ thể có thể giải quyết một vài câu hỏi khác nhau và có mức độ chi tiết phù hợp để điều đó trở thành sự thật.
- Và việc tìm ra cách lấy tài liệu và chia chúng thành các phần là một ví dụ về một phần trong quá trình làm việc với Rag mang tính thử nghiệm cao, đầy thử nghiệm và sai sót.
- Không có quy tắc nào để phân chia dữ liệu chính xác, chúng ta sẽ thấy điều này khi thử nghiệm.
- Dù sao thì, đó là phần giới thiệu nhanh.
- Sau đây là một số mặt hàng nhập khẩu.
- Có rất nhiều mặt hàng nhập khẩu mà chúng tôi đang thực hiện ở đây, và rất nhiều trong số đó là hàng nhập khẩu theo chuỗi dài.
- Chúng ta hãy cùng xem qua chúng nhé.
- Lang Chain có nhiều gói dịch vụ khác nhau và các gói dịch vụ khác nhau.
### Muc 18

- Bạn phải cài đặt pip hoặc thêm pip riêng.
- Và chúng thường có những tập hợp phụ thuộc khác nhau.
- Vì vậy, có một chuỗi ngôn ngữ ở đây dành cho chuỗi gạch dưới OpenAI, đó là tất cả các lớp liên quan đến OpenAI.
- Có một cái dành cho Chromo, cơ sở dữ liệu mà chúng ta sẽ sử dụng.
- Có một lớp dành cho lớp ôm mặt.
- Có một bộ trình tải tài liệu, là các công cụ để tải tài liệu, nằm trong cộng đồng Lang chain, khá giống với những đóng góp cộng đồng của chúng tôi.
- Đây là nơi mọi người thêm vào các đóng góp nguồn mở và sau đó là trình phân tách văn bản, đây là một phần cụ thể của Lang Chain có trách nhiệm tiếp nhận tài liệu và biến chúng thành các phần.
- Vì vậy, như tôi đã nói, đây là ví dụ về việc chuỗi Lang khá nặng, có nhiều gói khác nhau.
## Phan 7

### Muc 19

- Nếu bạn còn nhớ Light LM thì chỉ có một gói duy nhất và nó cực kỳ đơn giản.
- Bạn nhập một gói, bạn có thể sử dụng bất kỳ LM nào.
- Vì vậy, nó mang lại cho bạn cảm giác có rất nhiều thứ đang diễn ra, có rất nhiều chức năng.
- Nhưng cũng có rất nhiều điều cần phải học hỏi để đăng ký được chứ.
- Vì vậy, chúng tôi thực hiện những lần nhập khẩu này.
- Và điều thú vị là phải mất khá nhiều thời gian để nhập tất cả những thứ này.
- Có rất nhiều chuyện đang diễn ra.
- Chúng tôi sẽ sử dụng GPT bốn một nano vì chúng tôi đặc biệt muốn làm điều gì đó rẻ và nhanh.
### Muc 20

- Và GPT bốn một nano là cả hai thứ đó.
- Chúng ta sẽ lưu trữ tài liệu của mình trong cơ sở dữ liệu vector, chúng ta sẽ tìm hiểu sau.
- Nó sẽ được gọi là vector DB.
- Và chúng ta cũng hãy kiểm tra xem chúng ta có khóa AI mở hay không.
- Mọi thứ đều tốt đẹp.
- Được thôi.
- Tiếp theo chúng ta sẽ tải tài liệu vào.
- Vì vậy, trước khi chúng ta sử dụng bất kỳ mã chuỗi Lang nào, tôi chỉ muốn kiểm tra các tài liệu này.
### Muc 21

- Trước hết, tôi có một thứ ở đây sẽ sử dụng glob.
- Quả cầu.
- Nếu bạn nhớ rằng cách của chúng ta giống như việc duyệt qua cấu trúc thư mục để tìm bất kỳ thứ gì trong thư mục cơ sở kiến thức có chứa tệp đánh dấu.
- Và chúng ta sẽ tìm hiểu xem chúng ta có bao nhiêu tập tin.
- Tôi sẽ tải tất cả chúng vào một biến có tên là toàn bộ cơ sở kiến thức.
- Và tôi sẽ in ra tổng số ký tự chúng ta có trong toàn bộ nội dung.
- Vì vậy, có 76 tệp khác nhau trong cơ sở kiến thức này.
- Và tổng cộng có 300.000 ký tự.
## Phan 8

### Muc 22

- Và tôi sẽ sử dụng một thư viện có tên là Tick token.
- Bạn có thể nhớ, tôi nghĩ chúng ta đã xem xét điều đó giống như chúng ta đã làm, để xem có bao nhiêu mã thông báo trong này và đếm số lượng mã thông báo.
- Và có vẻ như có tới gần 64.000 mã thông báo.
- Nếu bạn lấy toàn bộ cơ sở kiến thức và mã hóa nó.
- Và đối với những ai còn nhớ một số bảng xếp hạng mà chúng tôi đã xem xét, chẳng hạn như Valium.
- Bạn sẽ nhận ra rằng thực ra, đó là điều chúng ta có thể đưa vào cửa sổ ngữ cảnh cho bất kỳ mô hình chính nào.
- Vì vậy, trên thực tế, bạn có thể đưa toàn bộ kiến thức tôi có vào đây.
- Tất cả các thư mục này, mọi thứ ở đây đều có thể phù hợp với lời kêu gọi mở AI.
### Muc 23

- Bây giờ giá sẽ bắt đầu tăng lên một chút mỗi lần bạn gọi.
- Với toàn bộ bối cảnh đó.
- Giống như việc đưa toàn bộ Hamlet vào mọi lúc, nhưng vẫn có thể thực hiện được.
- Nhưng vấn đề ở đây là dữ liệu này tưởng tượng rằng nó lớn hơn gấp mười lần.
- Hãy tưởng tượng nó lớn hơn gấp 100 lần.
- Rất nhanh chóng, bạn sẽ đến lúc không thể làm được điều đó nữa.
- Và bây giờ tôi không muốn làm điều đó nữa vì nó quá khó khăn và sẽ tốn kém.
- Ừ, nhưng nhưng đó là điều bạn phải ghi nhớ.
### Muc 24

- Ý tưởng của Rag là có thể mở rộng quy mô và hỗ trợ cơ sở kiến thức khổng lồ và vẫn có thể có được chuyên môn, vẫn có thể nhận được câu trả lời chất lượng cao khi chúng ta gọi LLM.
- Và thực tế, vào tuần thứ tám, chúng ta sẽ xây dựng một cơ sở kiến thức với 400.000 tài liệu.
- Vì vậy, chúng ta sẽ mở rộng quy mô.
- Bạn sẽ thấy điều đó.
- Và trong khóa học AI về sản xuất của tôi, chúng tôi cũng sử dụng quy mô lớn hơn nhiều.
- Vậy nên ví dụ này giống như một thang đo trung bình để bạn có thể hiểu rõ hơn.
- Nhưng hãy tưởng tượng việc tăng lên gấp hai lần.
- Điều tương tự cũng được áp dụng.
## Phan 9

### Muc 25

- Được rồi.
- Cuối cùng cũng đến lúc viết một số mã chuỗi dài.
- Chúng ta sẽ tải các tài liệu này và biến chúng thành một đối tượng chuỗi dài gọi là tài liệu, đại diện cho từng tài liệu.
- Và đoạn mã này không làm được gì nhiều.
- Có vẻ như có rất nhiều mã ở đây.
- Ừ, được thôi.
- Nhưng những gì chúng ta đang làm là chúng ta lại sử dụng glob glob này để có được danh sách tất cả các thư mục.
- Mỗi công ty này sẽ lưu trữ sản phẩm của nhân viên vào một biến gọi là thư mục.
### Muc 26

- Và sau đó chúng ta sẽ nói "ôi, xin lỗi, tôi vừa viết sai chính tả".
- Bằng cách nào đó tôi đã thay đổi được điều đó.
- Đấy, thế là xong.
- Thư mục.
- Ừ, vậy thì chúng ta sẽ, chúng ta sẽ lấy một danh sách tài liệu, một danh sách trống.
- Chúng ta sẽ xem xét từng thư mục này.
- Đối với mỗi loại, chúng ta sẽ nói rằng loại tài liệu sẽ chỉ là tên của thư mục đó, bất kể đó là thư mục nào.
- Và sau đó chúng ta sẽ sử dụng lớp cộng đồng chuỗi ngôn ngữ này có tên là trình tải thư mục, đây là thứ có thể tải toàn bộ thư mục trong mọi thứ ở đó.
### Muc 27

- Và điều này đảm bảo rằng nó hoạt động trên cả PC và máy Mac.
- Sau đó chúng tôi sẽ đưa nó vào.
- Và đối với mỗi tài liệu, chúng ta sẽ thiết lập một thứ gọi là loại tài liệu.
- Và chúng tôi sẽ thêm tài liệu đó vào danh sách này.
- Được rồi.
- Vì vậy, nếu sau đó tôi muốn in thì tôi sẽ tự điền con trỏ vào.
- In ra rằng chúng ta đã tải bao nhiêu tài liệu cũng được.
- Vì vậy, đây là cách sử dụng các lớp trình tải chuỗi Lang để tải vào từng tài liệu của chúng ta.
## Phan 10

### Muc 28

- Nó không phức tạp hơn nhiều so với những gì chúng ta đã làm ngày hôm qua khi chúng ta chỉ tải tài liệu dưới dạng chuỗi.
- Nhưng mỗi thứ này, nếu chúng ta chỉ xem xét một trong số chúng, hãy xem xét Documents Zero và xem xét nó.
- Đây là một đối tượng chuỗi Lang được gọi là tài liệu, nó có siêu dữ liệu.
- Nguồn gốc là nơi nó đến.
- Loại tài liệu, thứ mà chúng tôi tự đưa vào đó.
- Dòng này ở đây, loại tài liệu là từ sản phẩm.
- Bởi vì điều đầu tiên này là một sản phẩm.
- Và nội dung trang là toàn bộ nội dung của trang đó.
### Muc 29

- Vậy đó là các trường trong tài liệu đối tượng này.
- Và bạn có thể tự mình kiểm tra, xem xét và hiểu những gì chúng tôi vừa đưa vào danh sách tài liệu.
- Và bây giờ là lúc chia từng tài liệu thành nhiều phần.
- Và việc chia một thứ gì đó thành nhiều phần, ừm, một lần nữa, lại mang tính thử nghiệm.
- Nó hoàn toàn mang tính kinh nghiệm.
- Bạn thử nhiều thứ khác nhau.
- Có một số thứ khác nhau được gọi là trình phân tách văn bản, là các lớp khác nhau trong chuỗi dài cho phép bạn chia nhỏ tài liệu thành các phần nhỏ hơn.
- Cách đơn giản nhất được gọi là bộ tách văn bản ký tự.
### Muc 30

- Và về cơ bản nó thực hiện đúng như những gì được quảng cáo.
- Nó chỉ cắt nhỏ theo từng ký tự.
- Có một phiên bản phức tạp hơn một chút được gọi là bộ tách văn bản ký tự đệ quy.
- Một lần nữa, nghe có vẻ như đây là một điều gì đó sang trọng, nhưng không phải vậy.
- Nó mang tính đệ quy và chỉ cố gắng như vậy.
- Đầu tiên, nó sẽ cố gắng phân chia mọi thứ theo khoảng cách giữa các phần bằng một vài dòng trống, sau đó cố gắng thực hiện bằng một dòng trống và cuối câu hoặc những thứ tương tự như vậy.
- Vì vậy, nó giống như một loại hệ thống phân cấp về cách nó cố gắng chia nhỏ các tài liệu để có thể thực hiện tốt nhất việc chia nhỏ các tài liệu tại nơi mà nó cho là có sự ngắt quãng tự nhiên trong các tài liệu và bạn chỉ thị cho nó.
- Bạn muốn có bao nhiêu ký tự trong mỗi phần và bạn muốn có bao nhiêu phần chồng chéo giữa các phần khác nhau?
## Phan 11

### Muc 31

- Bởi vì nếu bạn nghĩ về điều đó, khi bạn đặt một câu hỏi, có khả năng câu hỏi đó sẽ được trả lời bằng một đoạn văn.
- Ừ, hoặc có thể đó là câu trả lời, bạn biết đấy, nếu chúng ta chỉ chia nhỏ tài liệu, thì có thể câu trả lời cho câu hỏi của chúng ta sẽ nằm ở đâu đó ở giữa, và điều đó sẽ gây ra vấn đề.
- Vì vậy, bằng cách chồng chéo với từng phần, chúng ta sẽ giảm khả năng cắt đôi câu trả lời, nhưng thường thì một câu hỏi cụ thể sẽ phù hợp với ít nhất một phần.
- Vậy đây là một phần của quá trình suy nghĩ khi phân chia dữ liệu.
- Nhưng như bạn sẽ khám phá, nếu bạn thắc mắc quy trình thực hiện việc này là gì?
- Câu trả lời sẽ là thử và sai.
- Bạn thử nghiệm, bạn thử nhiều chiến lược phân chia khác nhau và xem chiến lược nào hiệu quả nhất.
- Và tôi biết bạn đang nghĩ gì.
### Muc 32

- Bạn đang nghĩ, được thôi, nhưng thế nào là làm việc tốt nhất?
- Làm sao bạn biết được chiến lược phân chia dữ liệu có hiệu quả nhất?
- Và đó là một ý tưởng tuyệt vời dành cho bạn.
- Và đừng lo, chúng tôi sẽ giải quyết vấn đề đó.
- Đó là một trong những khía cạnh thiết yếu nhất của quy trình làm việc Rag mà chúng ta sẽ đề cập sau trong tuần này.
- Nhưng nói thế là đủ rồi.
- Để tôi chạy thử nhé.
- Chúng tôi vừa chia 76 tài liệu của mình thành 413 phần.
### Muc 33

- Và đây là cái đầu tiên.
- Đó chỉ là một phần tóm tắt sản phẩm.
- Một phần của thứ này nằm ngay đây.
- Ừ, thì ra đó là một trong số đó.
- Chúng ta hãy cùng xem xét thêm một ví dụ nữa nhé.
- Chúng ta hãy xem xét từng phần.
- Ừ, tùy bạn.
- Số 100.
## Phan 12

### Muc 34

- Chúng ta hãy cùng xem số 100 là gì nhé.
- Đó là một phần của, ừm, nguồn, ừm, thứ gì đó và nguồn, tài liệu nguồn.
- Và nó bắt đầu với bảy hoạt động kinh doanh liên tục.
- Vậy thì nó chỉ là một phần của tài liệu, gồm 413 phần.
- Điều gì xảy ra nếu chúng ta thay đổi kích thước khối xuống còn 800?
- Sau đó, chúng ta sẽ có 532 khối, nhiều khối hơn, vì mỗi khối có kích thước nhỏ hơn.
- Và chúng ta sẽ đưa nó trở lại mức 1000.
- Và bạn nên thử cách này.
### Muc 35

- Hãy cảm nhận nó, hãy cảm nhận sự chồng chéo của khối này trông như thế nào.
- Hãy tự thuyết phục mình rằng không có điều gì thông minh ở đây cả.
- Về cơ bản, nó chỉ là việc chia nhỏ các tài liệu.
- Bạn sẽ nhận được số lượng khối khác nhau nếu kích thước khối khác nhau.
- Ừm, và, và ừm, bạn có thể sử dụng, bạn có thể tra cứu các loại công cụ tách văn bản khác nhau mà bạn có thể thử ở đây nếu bạn muốn tìm hiểu sâu hơn về ý tưởng chuyển đổi tài liệu thành các phần hữu ích.
- Được rồi.
- Đây là cái nhìn nhanh đầu tiên của chúng ta về Lang Chain.
- Chúng ta sẽ quay lại và tìm hiểu thêm một chút về nhúng vectơ và vectơ.
### Muc 36

- Và sau đó chúng ta sẽ quay lại đây ngay.
- Được rồi.
- Vâng, đó là lần đầu tiên bạn nhìn thấy Lang Chain và lần đầu tiên bạn nhìn thấy phần Splitters của tài liệu Lang Chain.
- Chúng tôi có thể tải vào một loạt tài liệu, chia chúng thành nhiều phần, những phần này giống như các mảnh của tài liệu.
- Và chúng tôi sử dụng bộ chia văn bản ký tự đệ quy có thể thử trước tiên với các dòng trống đôi, sau đó là các dòng trống đơn và sau đó là các khoảng trắng để thử chia mọi thứ thành một số ký tự nhất định với một chút chồng chéo giữa chúng.
- Để cố gắng phân chia tài liệu của chúng ta thành các phần, các đoạn văn bản có khả năng liên quan đến các câu hỏi một cách hợp lý.
- Được rồi, hãy gạt tất cả sang một bên.
- Chúng ta đang chuyển chủ đề.
## Phan 13

### Muc 37

- Chúng tôi sẽ quay lại.
- Chúng ta đang chuyển chủ đề.
- Chúng ta sẽ nói về các bộ mã hóa hoặc mô hình nhúng mà tôi đã giới thiệu ngày hôm qua, các mô hình có khả năng lấy văn bản và chuyển chúng thành một tập hợp số mà chúng ta có thể coi như một vectơ.
- Đó là một vị trí trong không gian đôi khi được gọi là nhúng vectơ.
- Và đây là điều mà các mô hình này thực hiện rất tốt.
- Và chúng ta, ừm, chúng ta muốn phân biệt thật cẩn thận, và đây sẽ là chủ đề thường xuyên được nhắc đến ngày hôm nay giữa hai bước khác nhau này.
- Chuyển văn bản thành vectơ sử dụng bộ mã hóa, sau đó lưu trữ vectơ đó trong cơ sở dữ liệu vectơ như Chroma, đây là cơ sở dữ liệu mà chúng ta sẽ sử dụng.
- Cơ sở dữ liệu vector là một loại cơ sở dữ liệu đặc biệt có khả năng thực hiện truy vấn rất nhanh, không phải truy vấn SQL.
### Muc 38

- Theo một cách nào đó, bạn có thể quen thuộc, nhưng các truy vấn về phần dữ liệu nào có vectơ gần nhất với phần này, do đó, chúng có thể nhanh chóng truy xuất dựa trên vectơ.
- Đó là quan điểm của họ, nhưng bản thân họ không đưa ra các vectơ.
- Vectơ không được tạo ra bởi sắc độ.
- Vectơ được tạo ra bởi mô hình mã hóa, LLM.
- Đó chính là thứ tạo ra vectơ.
- Vì vậy, có hai điều khác nhau cần suy nghĩ về mô hình mã hóa và cơ sở dữ liệu vectơ.
- Và chúng tách biệt nhau.
- Khi chúng ta xem mã, có vẻ như hai thứ này bị gộp chung lại vì bạn tạo chúng cùng lúc và liên kết chúng lại với nhau.
### Muc 39

- Vì vậy, có thể gây nhầm lẫn khi nhớ rằng cơ sở dữ liệu vectơ là nơi chúng được lưu trữ, nhưng không phải là nơi chúng được tạo ra.
- Chúng được tạo ra bởi mô hình mã hóa.
- Để liệt kê một vài mô hình mã hóa, có một từ là vec, đó là nơi mọi thứ bắt đầu, một mô hình có thể lấy một từ và biến nó thành một vectơ.
- Nó không được sử dụng cho mục đích này mà vì lý do lịch sử.
- Đây chính là điều tôi đã đề cập đến với vua trừ đàn ông cộng phụ nữ là hoàng hậu.
- Sau đó Bert xuất hiện vào năm 2018.
- Đây là mô hình máy biến áp của Google.
- Đó là một bộ mã hóa rất mạnh mẽ và vẫn còn được sử dụng cho đến ngày nay.
## Phan 14

### Muc 40

- Nhưng có rất nhiều bộ mã hóa hiện đại.
- Đây là những điều bạn có thể gặp thường xuyên nhất.
- OpenAI có rất nhiều bộ mã hóa.
- Họ có một cái gọi là Nhúng văn bản, ba cái nhỏ, ừm, và họ có một cái đi kèm gọi là Nhúng văn bản, ba cái lớn.
- Và tôi nghĩ rằng chúng ta sẽ sử dụng cả hai thứ này vào một lúc nào đó.
- Ừ, Google có một công cụ gọi là Gemini Embedding 001, ở đó.
- Họ đang nhúng một mô hình rất phổ biến.
- Và sau đó Hugging Face có rất nhiều bộ mã hóa nguồn mở trong một gói có tên là Hugling Face sentence Transformers.
### Muc 41

- Và loại mà tôi nghĩ là phổ biến nhất, chắc chắn là loại mà tất cả chúng ta đều sử dụng và tôi chắc rằng bạn sẽ bắt gặp rất nhiều lần, đó là All mini lm, l6 v2.
- Thực sự rất phổ biến.
- Sau đây là một số bộ mã hóa phổ biến nhất mà bạn có thể gặp.
- Được rồi.
- Bây giờ chúng ta sẽ sử dụng chuỗi dài để lấy những gì chúng ta vừa xây dựng và đưa chúng vào kho dữ liệu vector.
- Vì vậy, chúng tôi đã đọc các tài liệu trong tất cả các thư mục.
- Chúng tôi đã chia chúng thành những phần này rồi.
- Chúng tôi đã biến tài liệu thành những phần nhỏ.
### Muc 42

- Từ đó nó bị phá vỡ.
- Chúng tôi lại sử dụng bộ tách văn bản ký tự đệ quy, bộ này sẽ tìm kiếm các ký tự nhập kép, sau đó là các ký tự rẽ đơn và sau đó là các khoảng trắng.
- Chúng ta có những đoạn văn bản dài khoảng 1000 ký tự với 200 ký tự chồng lên nhau.
- Hy vọng là bạn đã vào đó, đã đào sâu, đã xem xét chúng, đã kiểm tra các khối.
- Bạn đã chắc chắn rằng họ đã lập ra những tài liệu này.
- Bây giờ bước cuối cùng là chuyển chúng thành các vectơ và lưu trữ chúng trong cơ sở dữ liệu.
- Và một lần nữa tôi nhắc đến bước cuối cùng, nhưng bạn thực sự cần nhớ rằng đó là hai việc khác nhau.
- Bộ mã hóa hoặc mô hình nhúng chuyển đổi văn bản thành vectơ.
## Phan 15

### Muc 43

- Và sau đó, một kho lưu trữ vector sẽ lưu trữ chúng trong cơ sở dữ liệu, có khả năng tra cứu nhanh chóng những thứ gần nhau trong kho dữ liệu vector.
- Và để tóm tắt lại các bộ mã hóa phổ biến mà tôi đã đề cập, Gemini có một bộ mã hóa của OpenAI.
- Khuôn mặt ôm chặt lấy tất cả.
- Nhiều Ml6 v2 rất phổ biến.
- Và sau đó có các kho dữ liệu vector phổ biến hoặc các cửa hàng vector.
- Vậy là có rất nhiều thứ như thế này.
- Và tôi thường nhận được câu hỏi là nên sử dụng kho dữ liệu vector nào.
- Cái nào là tốt nhất?
### Muc 44

- Và rồi nó lại quay trở lại.
- Tôi nghĩ mọi người thường nhầm lẫn giữa bộ mã hóa và bộ lưu trữ vector.
- Bạn thực sự cần phải lo lắng nhiều về việc bộ mã hóa hoặc mô hình nhúng nào là tốt nhất cho vấn đề của mình.
- Các mô hình nhúng khác nhau sẽ có hiệu suất rất khác nhau trong các trường hợp sử dụng khác nhau và điều đó cần rất nhiều thử nghiệm và kiểm tra, như chúng ta sẽ thực hiện trong tuần này.
- Lựa chọn cơ sở dữ liệu lưu trữ vector.
- Điều này cũng giống như bất kỳ lựa chọn cơ sở dữ liệu nào khác.
- Đây là sự lựa chọn về cơ sở hạ tầng liên quan đến việc cân nhắc giữa chi phí và hiệu suất.
- Có những thành phần nguồn mở mà Chroma sẽ sử dụng ngày nay.
### Muc 45

- Rất dễ sử dụng và tất nhiên là mã nguồn mở miễn phí.
- Bạn chỉ cần đặt nó vào.
- Còn một loại nữa cũng khá phổ biến.
- Ừm, Fyss rất nổi tiếng.
- Đó là của Facebook.
- Tôi đoán là nó là viết tắt của tìm kiếm sự tương đồng giữa Facebook AI và meta trước khi đổi tên.
- Và Fyss nghe hay hơn chuột.
- Ừm, ừm, ừm, ừm Fyss cũng rất phổ biến, nhưng nó không thực sự là một cơ sở dữ liệu.
## Phan 16

### Muc 46

- Đây chỉ là phiên bản trong bộ nhớ, có khả năng lấy vectơ và thực hiện tìm kiếm vectơ trong bộ nhớ.
- Đây là một số phần mềm nguồn mở phổ biến nhất.
- Có những sản phẩm trả phí như Pinecone và Alleviate, và còn nhiều sản phẩm khác nữa mà bạn có thể tìm kiếm trên Google hoặc yêu cầu ChatGPT giới thiệu cho bạn một số sản phẩm tốt nhất.
- Có rất nhiều.
- Ừm, quả thông.
- Cả hai đều rất, rất nổi tiếng.
- Và đây là những dịch vụ phải trả phí.
- Và vì vậy, bạn phải trả tiền để có thể mở rộng quy mô để cung cấp dịch vụ cơ sở dữ liệu được quản lý.
### Muc 47

- Ừm, và mạnh hơn rất nhiều.
- Vì vậy, nếu bạn đang tìm kiếm kho lưu trữ dữ liệu vectơ cho doanh nghiệp, bạn có thể cân nhắc điều này.
- Nhưng tôi phải nói rằng nó ít phổ biến hơn trong những năm gần đây.
- Ừm, trong một năm gần đây, tôi phải nói rằng tất cả những điều này đều rất mới, ừm, bởi vì hiện nay các nhà cung cấp cơ sở dữ liệu chính thống đều hỗ trợ vectơ một cách tự nhiên, do đó ít cần phải áp dụng cơ sở dữ liệu vectơ thuần túy như quả thông, bởi vì các cơ sở dữ liệu chính thống như Postgres, bạn có thể đưa vectơ vào Postgres như một cơ sở dữ liệu quan hệ.
- Ừm, Mongo là cơ sở dữ liệu NoSQL, bạn có thể sử dụng cơ sở dữ liệu dựa trên tài liệu.
- Bạn có thể đặt các vectơ ở đó để ừm, tại Nebula.
- Trong công việc hàng ngày, chúng tôi sử dụng Elasticsearch, nền tảng tìm kiếm hiệu suất cao.
- Và nó sử dụng các vectơ một cách tự nhiên.
### Muc 48

- Và vì thế chúng ta có khoảng 200 triệu vectơ.
- Và chúng ta có thể thực hiện tìm kiếm để lọc và tìm ra các vectơ tương tự.
- Và nó thực hiện điều đó chỉ trong vài giây.
- Nó cực kỳ nhanh.
- Ừm, và nó giống như một công cụ tìm kiếm gốc cũng hỗ trợ tính năng tương tự vectơ.
- Và điểm tôi muốn nhấn mạnh ở đây là rất nhiều người hỏi tôi về lựa chọn kho dữ liệu vector.
- Và tôi chỉ muốn nói rằng phần lớn thời gian, điều quan trọng là bộ mã hóa, mô hình nhúng.
- Đó chính là điều bạn thực sự cần quan tâm.
## Phan 17

### Muc 49

- Đó là những gì bạn cần kiểm tra, như chúng ta sẽ làm trong tuần này và thực sự hiểu mô hình nhúng nào sẽ hoạt động tốt nhất cho vấn đề kinh doanh của bạn và đưa nội dung có liên quan nhất vào kho dữ liệu mà nó đưa vào.
- Đây là mối quan tâm lớn hơn đối với quyết định về cơ sở dữ liệu cơ sở hạ tầng thông thường.
- Điều quan trọng hơn là chi phí, hiệu suất, khả năng mở rộng, khả năng phục hồi, sao lưu, bảo mật, tất cả những mối quan tâm đó giống như bất kỳ cơ sở dữ liệu nào khác.
- Và do đó, đây là loại cơ sở hạ tầng có thể hoạt động với bất kỳ bộ mã hóa nào bạn chọn.
- Bây giờ có một số ngoại lệ.
- Các chuyên gia có lẽ đang chờ để tham gia và sửa lỗi cho tôi với một số tình huống trong đó một số nền tảng cao cấp có thể hỗ trợ các loại tìm kiếm tương đồng khác nhau, các tìm kiếm được tối ưu hóa hiệu suất đặc biệt khi họ chỉ tìm kiếm trong một số vùng không gian nhất định, những thứ như vậy.
- Vậy thì điều đó chắc chắn là đúng.
- Có một số điểm trùng lặp, nhưng nhìn chung thì tương đối nhẹ.
### Muc 50

- Với tư cách là một kỹ sư AI, điều mà bạn nên dành hết năng lượng của mình để tập trung vào chính là mô hình nhúng.
- Bạn tạo vectơ từ văn bản và quyết định cơ sở dữ liệu như thế nào?
- Nó giống như một loại cơ sở hạ tầng được gọi là sự đánh đổi giữa chi phí và hiệu suất.
- Và chào mừng trở lại và chào mừng trở lại đúng nơi chúng ta đã dừng lại trước khi tôi đi vòng qua một chút.
- Ừ, vậy thì tất nhiên là bạn nhớ rồi, chúng ta vừa mới lấy tài liệu.
- Chúng tôi chia chúng thành nhiều phần.
- Tôi nghĩ bây giờ bạn đã hiểu ý nghĩa của các khối rồi.
- 413 trong số đó.
### Muc 51

- Ồ, tất cả đều ở đó.
- Bây giờ chúng ta sẽ tạo các vectơ và lưu trữ chúng trong chroma.
- Và chúng ta sẽ sử dụng mô hình nhúng mã nguồn mở hoặc mini lm, l6 v2 từ Huggingface.
- Bây giờ, tôi tin rằng bạn không cần phải đăng nhập vào Huggingface để sử dụng mô hình này.
- Đó là thứ chỉ có sẵn công khai.
- Ừm, nhưng phòng trường hợp bạn gặp phải lỗi đăng nhập khuôn mặt ôm, ừm, thì bạn hãy nhớ rằng trong tuần thứ ba, chúng tôi đã thiết lập mã thông báo khuôn mặt ôm.
- Xin hãy cho tôi mã thông báo HF.
- Nếu bạn gặp sự cố khi đăng nhập, hãy thêm mã thông báo đó vào tệp EMV và nhớ chạy lại EMV.
## Phan 18

### Muc 52

- Nhưng tôi không nghĩ là cần thiết.
- Chuyện đó không nên xảy ra với bạn.
- Dù sao thì chúng ta cũng cần làm điều này vào tuần thứ tám, nên bạn có thể vẫn muốn làm.
- Nhưng nhưng nhưng dù sao đi nữa.
- Được rồi.
- Vì vậy, chúng ta sẽ bắt đầu bằng cách tạo biến mới embeddings.
- Và chúng ta sẽ tạo một phiên bản của đối tượng nhúng khuôn mặt ôm này.
- Và đây là một phần của Bộ luật Langerhans.
### Muc 53

- Và chúng ta nói với nó tên mẫu.
- Chúng tôi muốn sử dụng tất cả mini lm, l6, v2.
- Đấy, nó đây rồi.
- Và những gì chúng ta làm ở đây là kiểm tra xem đã có hay chưa, một thứ gọi là vector underscore db, đó là thứ chúng ta gọi là cơ sở dữ liệu.
- Và tôi có điều đó vì tôi đã chạy nó trước đây và nó nói rằng nếu nó tồn tại thì hãy vào và đảm bảo rằng chúng ta xóa nó để có thể bắt đầu lại từ đầu.
- Vì vậy, bạn có thể chạy lại nhiều lần.
- Và lần nào nó cũng sẽ xóa sạch nếu nó tồn tại.
- Và nếu không, nó sẽ tạo ra một cái mới.
### Muc 54

- Được rồi.
- Và bây giờ hãy nhìn vào dòng lưu trữ vector này.
- Chúng tôi đang tạo một kho lưu trữ vector.
- Chúng ta sử dụng từ này là sắc độ.
- Đây là một đối tượng chuỗi dài khác đại diện cho cơ sở dữ liệu sắc độ, một cơ sở dữ liệu mã nguồn mở miễn phí thực sự có SQLite chạy phía sau và sẽ được tạo ngay trên máy tính của bạn mà không cần bạn phải làm thêm bất kỳ công việc nào nữa.
- Tài liệu Chromium.
- Và thứ chúng ta truyền vào dưới dạng tài liệu mà chúng ta muốn tạo trong kho dữ liệu vectơ là các khối mà chúng ta vừa tạo ra, có bao nhiêu khối?
- 400 và một số khối 413.
## Phan 19

### Muc 55

- Khối 413 khối.
- Chúng tôi đã truyền chúng vào và chúng tôi cũng truyền vào mô hình nhúng, bộ mã hóa, thứ này ở đây, nhúng khuôn mặt ôm sát.
- Và chúng ta cho nó biết tên của thư mục nơi nó được lưu trữ.
- Đó là cách chúng ta tạo cơ sở dữ liệu sắc độ với các khối, các phần nhúng, với tên thư mục để tạo.
- Đó là những gì chúng tôi làm.
- Và đây là lúc tôi muốn nói rằng việc sử dụng with encode để kết hợp cơ sở dữ liệu với mô hình nhúng rất dễ dàng.
- Bạn có thể thấy bạn chỉ cần kết hợp tất cả lại với nhau để tạo ra sắc độ.
- Nhưng mô hình nhúng này thực sự không liên quan đến sắc độ.
### Muc 56

- Nó khác biệt.
- Nó có thể là bất kỳ mô hình nhúng nào mà chúng ta có thể đưa vào đó.
- Dù sao thì, hãy chạy thử nhé.
- Bây giờ nó đang diễn ra.
- Đó là việc lấy tất cả các tài liệu đó, tất cả 413 tài liệu, chuyển chúng thành các vectơ, đưa chúng vào kho lưu trữ vectơ.
- Chuyện đó đã xảy ra.
- Mọi chuyện cứ thế xảy ra.
- Và thư mục vector db này, nếu tôi mở nó ra, nó chứa đầy những thứ giống như SQL Lite, thực chất là một cơ sở dữ liệu có 413 khối dữ liệu.
### Muc 57

- Thế thì sao?
- Nếu bạn vừa chạy xong thì bạn vừa tạo ra kho dữ liệu vector đầu tiên của mình.
- Xin chúc mừng.
- Tiếp theo chúng ta sẽ đi sâu vào kho dữ liệu vectơ để xem chúng ta có gì ở đây.
- Vậy thì bộ sưu tập là tên gọi của like.
- Giống như những gì chúng ta nghĩ về cơ sở dữ liệu quan hệ như một bảng.
- Vậy là chúng ta chỉ có một bộ sưu tập.
- Vì vậy, chúng ta đưa nó vào như một tập hợp biến.
## Phan 20

### Muc 58

- Và chúng tôi đã yêu cầu số lượng của nó.
- Chúng ta có bao nhiêu thứ?
- Và chúng ta cũng chỉ lấy một trong những vật thể ở đó.
- Một trong số đó là tìm hiểu xem nó có bao nhiêu chiều.
- Chúng ta hãy cùng xem nhé.
- Vì vậy, chúng ta có 413 vectơ trong Cromer với 384 chiều.
- Đề cập.
- Điều đó có nghĩa là có khoảng 384 con số liên quan đến mỗi vectơ đó.
### Muc 59

- Và một lần nữa, tôi nghĩ bạn biết điều này, nhưng 384 chiều đó không phải là một tính năng của Cromer.
- Cromer có thể lấy các vectơ có kích thước bất kỳ.
- Đây là tính năng của mô hình nhúng mini lm, l6, v2 ôm sát khuôn mặt giúp chuyển đổi văn bản thành vectơ 384 chiều.
- Đó chính là nguồn gốc của các vectơ.
- Được rồi, bây giờ là phần hay nhất.
- Đã đến lúc chúng ta phải hình dung.
- Vì vậy, tôi rất tin tưởng vào việc trực quan hóa dữ liệu, xem xét và khám phá dữ liệu, đây là điều chúng ta sẽ thực hiện nhiều lần trong vài tuần tới.
- Và đây cũng không phải là ngoại lệ.
### Muc 60

- Và việc trực quan hóa thông tin được biểu diễn dưới dạng vectơ có thể đặc biệt thú vị và sâu sắc.
- Cung cấp cho bạn cách phát hiện những điểm bất thường, xu hướng thú vị hoặc xu hướng có vấn đề.
- Đây thực sự là một việc tuyệt vời nên làm.
- Và từ góc độ giáo dục, nó cũng rất hữu ích khi cung cấp cho bạn trực giác thực sự về việc biểu diễn dữ liệu bằng vectơ có ý nghĩa gì?
- Điều đó thực sự có nghĩa là gì?
- Vâng, bạn sẽ thấy nó và nó sẽ cung cấp cho bạn một số manh mối.
- Trước tiên, tôi sẽ trích xuất từ cơ sở dữ liệu của chúng ta một danh sách các vectơ, một danh sách các tài liệu thực sự là các khối, siêu dữ liệu liên quan đến từng khối.
- Ừm, các loại tài liệu.
## Phan 21

### Muc 61

- Và sau đó tôi cũng sẽ có một màu sắc, ừm, sẽ được chọn dựa trên việc đó là sản phẩm, nhân viên, hợp đồng hay công ty.
- Vậy thì đó là điều chúng ta sẽ làm.
- Ừm, và ừm, điều chúng ta sẽ làm bây giờ là đưa nó lên để xem nó trông như thế nào về mặt trực quan.
- Nhưng có một vấn đề, và, và vấn đề là với bạn và tôi, ừm, vấn đề là chúng ta, con người, chúng ta có một hạn chế là chúng ta không giỏi nhìn thấy bất cứ thứ gì có chiều cao trên ba chiều.
- Chúng ta không thể nhìn thấy mọi thứ trong không gian 384 chiều vì chúng ta không hiểu điều đó có nghĩa là gì?
- Ừ, thì ra đó là một vấn đề.
- Nhưng may mắn thay, các nhà toán học đã xuất hiện để giúp chúng ta thoát khỏi nỗi đau khổ này.
- Có một kỹ thuật.
### Muc 62

- Có một số kỹ thuật.
- Có một loại gọi là PCA, có một loại gọi là t-SNE, mà chúng ta sẽ sử dụng.
- t-SNE là viết tắt của T-phân phối.
- Nhúng láng giềng ngẫu nhiên chỉ là một khái niệm dễ hiểu.
- Bạn không cần biết rằng bạn không biết nó có nghĩa là gì, nhưng điều bạn cần biết là t-SNE là một kỹ thuật rất phổ biến để lấy dữ liệu nhiều chiều hơn và chiếu nó xuống, chẳng hạn, hai chiều, sao cho những thứ gần nhau trong không gian 2 chiều có khả năng sẽ gần nhau trong không gian đa chiều, và những thứ cách xa nhau trong không gian 2 chiều có khả năng sẽ cách xa nhau.
- Đây là một kỹ thuật thống kê.
- Bạn có thể tìm kiếm trên Google để đọc tất cả thông tin về nó.
- Trên Wikipedia.
### Muc 63

- Điều này rất phổ biến.
- Ừm, vậy thì chúng ta sẽ chạy t-SNE và yêu cầu nó chiếu xuống hai chiều.
- Nó sẽ sử dụng trạng thái ngẫu nhiên này có nghĩa là nó sẽ đưa ra cùng một câu trả lời mỗi lần.
- Ừ, và sau đó chúng ta sẽ vẽ biểu đồ để có thể thấy nó trông như thế nào khi được hiển thị ở dạng 2D.
- Được rồi, bắt đầu thôi.
- Chúng tôi chạy nó và bùm!
- Điều này xuất hiện.
- Bây giờ bạn có thể thấy một số cảnh báo.
## Phan 22

### Muc 64

- Nó có thể đưa ra cho bạn một số cảnh báo liên quan đến khuôn mặt ôm chặt về một số chủ đề.
- Bỏ qua điều đó đi.
- Đây không phải là điều bạn thường nhận được cảnh báo khi sử dụng phần mềm nguồn mở.
- Biên giới và các cảnh báo thường chỉ cần được ghi chú lại để phòng trường hợp có điều gì đó không ổn sau này có thể quay lại.
- Trong trường hợp này thì không có gì cả.
- Được thôi.
- Dù sao đi nữa, hãy dành chút thời gian để tiếp thu điều này.
- Và nó giống như kiểu, ôi, bạn đang nhìn gì thế này?
### Muc 65

- Đây là cái gì?
- Vì vậy, đây giống như một bản đồ dữ liệu của chúng ta.
- Và nếu bạn di chuột qua, bạn sẽ thấy rằng mỗi phần đều hiển thị loại ở trên cùng, đây là tài liệu của nhân viên và văn bản liên quan đến phần này.
- Và bạn có thể thấy có khoảng 400 khối được hiển thị ở đây.
- Và nếu bạn hỏi một số người thì trục x và trục y có ý nghĩa gì?
- Những trục này không có ý nghĩa gì.
- Đó chỉ là dữ liệu được phân phối ở đó.
- Cái gì?
### Muc 66

- Điều quan trọng là những thông tin gần nhau, vì đó phải là những thông tin có ý nghĩa tương tự nhau.
- Vậy thì đó chính là điều bạn cần thực sự hiểu và tìm hiểu.
- À, và vấn đề là thế này.
- Văn bản được gửi đến mô hình mã hóa của chúng ta, hãy nhớ rằng, chính bộ mã hóa đã tạo ra vectơ.
- Nó được lưu trữ trong sắc độ, nhưng bộ mã hóa đã tạo ra vectơ.
- Văn bản đó chỉ là văn bản của đoạn văn.
- Nó dựa trên văn bản của đoạn văn.
- Không nói rằng một số người trong số họ là nhân viên.
## Phan 23

### Muc 67

- Một số là công ty, một số là hợp đồng và một số là sản phẩm.
- Vì vậy, thật thú vị khi một số dữ liệu được phân tách khá rõ ràng.
- Như bạn sẽ thấy, nhìn chung tất cả nhân viên đều ở đây.
- Bây giờ chắc chắn có một số thông tin liên quan đến công ty.
- Nếu bạn tìm hiểu sâu hơn, bạn sẽ thấy rằng nó liên quan khá nhiều đến nhân viên, nhưng một số trong đó lại xuất hiện ở đây.
- Nhưng phần lớn đều tập trung ở đây.
- Và sau đó bạn sẽ thấy một số thứ khác ở đây.
- Nói chung là phải tách biệt mọi thứ ra.
### Muc 68

- Có một thứ trông giống như một dải dữ liệu sản phẩm nằm giữa một số phần khác nhau của hợp đồng.
- Vì vậy, có một số sự phân tách theo ý nghĩa dựa trên loại tài liệu.
- Ồ, và hy vọng là bạn sẽ có được cảm nhận tốt khi tìm hiểu về các dịch vụ tích hợp khác nhau, các phần của các hợp đồng khác nhau.
- Và bạn có thể thấy chúng gần nhau như thế nào trong không gian vectơ.
- Vì vậy hãy dành chút thời gian.
- Hãy dành chút thời gian để xem qua phần này.
- Kiểm tra các khối.
- Hãy xem các khối có ý nghĩa tương tự nằm gần nhau và hiểu được ý nghĩa của việc có thông tin này, các vectơ này được lưu trữ trong sắc độ, lưu ý rằng các vectơ được lưu trữ trong sắc độ, nhưng các vectơ này được tạo ra bằng khuôn mặt ôm hoặc mô hình V2 mini.
### Muc 69

- Đó chính là thứ đã tạo nên các vectơ mà chúng ta đang xem xét ở đây.
- Vâng, hy vọng là bạn cũng hài lòng với điều này như tôi.
- Tôi thấy những hình ảnh trực quan này thực sự thú vị.
- Làm cho nó to hơn một chút.
- Tại sao không?
- Và đóng cái thùng xe lại.
- Đấy, thế là xong.
- Bây giờ chúng ta thực sự có được nó trong sự huy hoàng trọn vẹn của nó.
## Phan 24

### Muc 70

- Có tất cả những điểm khác nhau ở đó.
- Tôi hy vọng rằng bạn đã dành chút thời gian để thực sự tìm hiểu sâu về hình ảnh dữ liệu này, nhưng có lẽ còn có điều gì đó thú vị hơn mà chúng ta có thể làm.
- Có lẽ bạn đã biết rằng con người chúng ta, như tôi đã đề cập trước đó, có thể tiến xa hơn một chút so với 2D.
- Chúng ta có thể nhìn thấy mọi thứ ở dạng 3D, và tôi sẽ không thể làm tốt công việc của mình nếu tôi không mang đến cho các bạn hình ảnh 3D về điều này.
- Và t-SNE có thể thực hiện điều đó chỉ bằng cách truyền vào một số thành phần, ba thay vì hai.
- Ồ, và chúng ta có thể chiếu không gian 384 chiều của mình xuống 3D và xem nó trông như thế nào.
- Vậy chúng ta hãy cùng xem xét nhé.
- Nó đang đến ngay đây.
### Muc 71

- Bùm!
- Tôi xin giới thiệu với các bạn, ừm, các điểm của chúng ta là 400 khối được hiển thị trong không gian 3D.
- Và tôi nghe bạn.
- Bạn có thể nói, ồ, thoạt nhìn thì trông có vẻ lộn xộn quá.
- Ừ, tôi thích phiên bản 2D hơn.
- Ừm, nhưng nhưng khoan đã, trước hết, bạn có thể di chuột qua những điểm này để xem mô tả của chúng như thế này và xem chúng nằm ở đâu trong không gian.
- Nhưng bạn cũng có thể xoay toàn bộ không gian xung quanh như vậy, kiểm tra và cảm nhận thực tế.
- Thực sự hiểu rõ hơn về cách mà màu xanh lam, mặc dù hơi ở giữa màu đỏ, nhưng chúng lại có phần tách biệt với nhau.
### Muc 72

- Ừm, và màu vàng cũng có cách phân phối riêng của nó.
- Ồ, và bạn thực sự có thể tinh chỉnh bằng cách phóng to như thế này.
- Hãy xem qua, đến và khám phá những điểm khác nhau.
- Và vì vậy, mặc dù màu vàng có vẻ gần giống với màu đỏ hơn một chút, nhưng thực ra họ không để ý đến điều đó.
- Bây giờ bạn có thể thấy chúng được phân phối khác nhau như thế nào.
- Vì vậy, mặc dù 2D dễ nhìn hơn 3D một chút, nhưng bạn có thể khám phá và tìm hiểu nhiều hơn nữa với 3D và tôi khuyến khích bạn hãy tận hưởng điều này.
- Tất nhiên, mục đích sử dụng đúng đắn của điều này là để phát hiện ra những điều bất thường.
- Phát hiện như thế nào?
## Phan 25

### Muc 73

- Vâng, ừm, nhiều tài liệu khác nhau đang được nhóm lại theo mức độ tương đồng.
- Hãy đào sâu và cố gắng tìm ra lỗi và đưa ra cho bạn manh mối về cách bạn có thể sử dụng các bộ mã hóa khác nhau.
- Nhưng nó cũng rất thú vị và mang lại trực giác tốt về ý nghĩa của những vectơ này.
- Và một lần nữa, bạn có thể nghĩ về nó giống như chúng ta đang hình dung các vectơ này dưới dạng sắc độ.
- Chỉ cần luôn nhớ rằng chúng ta đang trực quan hóa các vectơ này khi chúng được lưu trữ trong sắc độ.
- Nhưng các vectơ không được tạo ra bởi sắc độ.
- Các vectơ được tạo ra bởi mô hình biến đổi câu ôm mặt hoặc mini lm, l6 v2.
- Đó chính là thứ đã biến khoảng 400 khối của chúng ta thành những điểm này trong không gian 304 chiều.
### Muc 74

- Và bây giờ là trò tiếp theo của tôi.
- Ờ, tôi muốn đào sâu hơn vào ý tưởng rằng Bộ mã hóa chính là yếu tố quyết định vị trí của các điểm này trong không gian.
- Và còn cách nào tốt hơn để minh họa điều đó hơn là thử một bộ mã hóa khác?
- Vậy chúng ta hãy quay lại và thử lại bộ mã hóa khác.
- Quay lại đây và tôi sẽ bình luận nơi chúng ta thiết lập mô hình nhúng.
- Và chúng ta hãy bắt đầu bằng cách xem xét văn bản nhúng ba mô hình nhỏ từ OpenAI.
- Chúng ta hãy cùng kiểm tra điều này.
- Chúng ta hãy chạy thử nhé.
### Muc 75

- Và đoạn mã này mà bạn nhớ sẽ xóa cơ sở dữ liệu của tôi.
- Tạo cơ sở dữ liệu mới với 413 tài liệu.
- Một lần nữa những khối đó lại biến mất.
- Chúng ta hãy chạy lại lần nữa.
- Hãy nhớ rằng bạn có thể thấy ở đây chúng ta đã có 384 chiều trước đây.
- Từ mô hình khuôn mặt ôm sát, hiện tại chúng ta có 1536 chiều.
- Bởi vì chúng tôi đang sử dụng một mô hình nhúng khác.
- Chúng tôi đang sử dụng phiên bản trả phí.
## Phan 26

### Muc 76

- Nhưng nó thực sự rất rẻ từ OpenAI.
- Văn bản nhúng ba nhỏ.
- Tất cả.
- Được rồi, chúng ta hãy quay lại hình dung một lần nữa.
- Chúng tôi sẽ thực hiện công tác chuẩn bị để có được tài liệu.
- Và bây giờ chúng ta đã ở đây.
- Vì vậy, trước khi chạy ô này, chúng ta hãy cùng xem lại hình ảnh ban đầu của nó.
- Trước đây trông nó như thế này.
### Muc 77

- Bây giờ chúng ta sẽ chạy chương trình này và tạo ra hình ảnh trực quan mới về các vectơ mới vì chúng đến từ mô hình nhỏ OpenAI.
- Được rồi.
- Bạn đã sẵn sàng chưa?
- Hãy ghi nhớ điều này.
- Hãy giữ lại bức ảnh đó.
- Nếu bạn có trí nhớ siêu phàm, hy vọng là bạn có.
- Chúng ta hãy chạy lại lần nữa và xem nó trông như thế nào.
- Được rồi.
### Muc 78

- Chuyện đó đã xảy ra rồi.
- Vậy là xong.
- Được rồi.
- Nó trông hoàn toàn khác.
- Trước hết, việc mọi thứ xoay vòng không có ý nghĩa gì cả.
- Hãy nhớ rằng tọa độ x và y thực tế không có ý nghĩa gì.
- Điều quan trọng là các tài liệu được tách biệt như thế nào.
- Và hãy xem mô hình của OpenAI đã tiến bộ đến mức nào.
## Phan 27

### Muc 79

- Hãy nhìn xem các tài liệu của nhân viên được lưu trữ ở đây như thế nào.
- Hãy xem các hợp đồng ở đây thế nào.
- Và bây giờ bạn có thể thấy rằng các sản phẩm đã ở một vị trí hoàn toàn khác.
- Ừm, ngoại trừ một số tài liệu ở đây.
- Và điều bạn sẽ thấy nếu bạn tìm hiểu kỹ hơn là những phần này đều liên quan cụ thể đến tính năng của sản phẩm.
- Và điều đó sẽ rất giống với văn bản ở đây, đó là các phần của hợp đồng liên quan đến các tính năng.
- Vì vậy, bạn sẽ thấy rằng khi sử dụng một mô hình như OpenAI, nó thực sự rất tốt.
- Mô hình nhúng OpenAI và ý nghĩa liên kết.
### Muc 80

- Và ở đây bạn sẽ thấy mọi thứ của công ty đều có ở đây.
- Trong dải này, bạn sẽ thấy có một số hồ sơ nhân viên ở đây.
- Và đây sẽ là những phần hồ sơ nhân viên có vẻ liên quan đến thông tin về công ty.
- Ừ, nếu bạn tìm hiểu sâu hơn, tôi nghĩ bạn sẽ tìm thấy điều đó.
- Nhưng bây giờ chúng ta hãy quay lại và thực hiện thêm một thay đổi nữa, chuyển sang mô hình lớn và xem nó trông như thế nào.
- Vậy là tôi quay trở lại phần mô hình nhúng, chúng ta sẽ nhúng văn bản vào ba phần tử lớn.
- Chúng ta hãy chạy thử nhé.
- Và bây giờ chúng tôi hy vọng có thể chuyển đổi 413 tài liệu của mình thành các vectơ lớn hơn.
### Muc 81

- Vâng, lớn hơn bao nhiêu?
- Chúng ta hãy cùng xem nhé.
- Trước đây chúng ta có 1536 chiều liên quan đến mỗi vectơ, giờ đây chúng ta có 3072 chiều, 3072 chiều trong kho vectơ liên quan đến mỗi một trong 413 khối của chúng ta.
- Được rồi, đã đến lúc hình dung.
- Hãy nhớ nó trông như thế nào.
- Đây là hình ảnh của các biến thể nhỏ.
- Chúng ta hãy cùng xem xét biến thể lớn.
- Ồ, và đây rồi.
## Phan 28

### Muc 82

- Được rồi.
- Ồ, vậy thì lại là một bước nữa.
- Tốt hơn hết là hãy xem lại cách làm, trước hết, giống như trước, các nhân viên ở bên trái.
- Bây giờ thì không còn quan trọng nữa.
- Chúng rõ ràng là rất riêng biệt ngoại trừ hai phần này, đó là những thứ mà, ừm, bạn có thể thấy từ ensure có trong cả hai phần này.
- Vậy đây là hai phần của một tài liệu dành cho nhân viên có vẻ phản ánh rõ nhất về toàn bộ công ty.
- Bây giờ bạn có thể thấy sự phân tách giữa màu xanh và màu đỏ thậm chí còn rõ nét hơn.
- Mô hình thông minh hơn đã thực hiện tốt hơn công việc hiểu ý nghĩa ngữ nghĩa khác nhau giữa các phần này.
### Muc 83

- Ừm, và ở đây bạn sẽ thấy rằng đây thực sự vẫn là một phần của sản phẩm liên quan đến chức năng dường như thuộc về hầu hết các hợp đồng.
- Vì vậy, bạn có thể thấy đó là lý do tại sao nó lại như vậy.
- Nhìn lại đây lần nữa, nó là một phần của sản phẩm.
- Và đây là những phần của hợp đồng liên quan đến sản phẩm, đó là lý do tại sao chúng đều xoay quanh cùng một phạm vi.
- Thật sự hấp dẫn.
- Bạn có thể thấy mô hình lớn hoạt động tốt hơn nhiều.
- Và vì vậy, chúng ta thực sự thấy cách chúng ta đã, chúng ta đã tiến bộ giữa mô hình khuôn mặt ôm nhỏ, sau đó là phiên bản nhỏ của OpenAI, vẫn còn khá lớn, và sau đó là phiên bản lớn với 3072 chiều và cách mà nó cho phép dữ liệu được tách biệt như vậy.
- Và điều đáng nói là, người ta có thể cho rằng lý do mô hình lớn tốt hơn là vì nó có nhiều chiều hơn.
### Muc 84

- Thông thường, một mô hình lớn hơn sẽ tạo ra các nhúng vectơ có nhiều chiều hơn, cho phép nó thể hiện mọi thứ với nhiều mức độ tự do hơn.
- Nhưng không phải lúc nào cũng như vậy.
- Và điều đó không nhất thiết phải xảy ra.
- Điều quan trọng là một máy biến áp tiên tiến hơn có khả năng nắm bắt ý nghĩa của văn bản tốt hơn và có khả năng diễn đạt ý nghĩa đó ở nhiều chiều hơn, tôi cho rằng, sẽ giúp máy có nhiều sức mạnh hơn để thực hiện điều đó.
- Vì vậy, chúng thường có phần liên quan.
- Nhưng chúng tôi đã di chuyển giữa khoảng 400 chiều, ban đầu là 384 chiều cho mô hình khuôn mặt ôm sát đến khoảng 1000 chiều, từ 1005 chiều đến khoảng 3000 chiều.
- Khi chúng ta di chuyển qua ba mô hình nhúng đó, tôi biết chính xác bạn đang chờ tôi làm gì.
- Bạn đang đợi tôi làm cốt truyện 3D.
## Phan 29

### Muc 85

- Tôi cũng đang nghĩ tới điều đó.
- Chúng ta hãy làm điều này và đi vào trong.
- Bạn còn nhớ cốt truyện 3D cũ không?
- Đây là mẫu cũ có khuôn mặt ôm sát.
- Có chút lộn xộn.
- Bây giờ chúng ta hãy tạo một biểu đồ 3D mới.
- Tôi biết đây chính là điều bạn đang chờ đợi.
- Đây rồi.
### Muc 86

- Vâng, bạn biết đấy, nó vẫn còn hơi lộn xộn một chút vì những biểu đồ 3D này có thể.
- Nhưng hãy xem thử điều này.
- Hãy xem điều gì sẽ xảy ra nếu tôi điều khiển chúng ta đi xung quanh.
- Hãy nhìn xem bốn đốm đó được tách ra rõ ràng như thế nào.
- Một lần nữa, có một số điểm trùng lặp giữa hợp đồng và sản phẩm.
- Và đó là vì có một số điểm trùng lặp trong các loại tài liệu đó.
- Hợp đồng có chứa một số thông tin liên quan đến sản phẩm, bạn sẽ thấy khi tìm hiểu kỹ các tài liệu này.
- Nhưng nhìn chung thì đây thực sự là điều đáng kinh ngạc.
### Muc 87

- Nó thực sự mang lại cho bạn cảm giác tuyệt vời về việc lấy ý nghĩa của một tài liệu, biến nó thành một vectơ trong không gian.
- Tôi hy vọng bạn thích nó và khuyến khích bạn khám phá thêm.
- Bây giờ hãy tiếp tục thực hiện việc này.
- Nhìn vào những điểm khác nhau có những điểm gần nhau.
- Hãy đảm bảo rằng nội dung của các khối đó là tương tự nhau và hiểu rõ mô hình cần làm gì để định vị dữ liệu ở đâu đó trong không gian vectơ.
- Và đó là kết thúc của ngày trọng đại này.
- Tôi hy vọng bạn đồng ý rằng phần giới thiệu của tôi là đúng.
- Hôm nay thực sự rất vui.
## Phan 30

### Muc 88

- Những hình ảnh vector đó chính là mục đích của nó.
- Ừ, tôi thực sự khuyến khích bạn thử nghiệm với nhiều bộ mã hóa khác nhau ngay bây giờ.
- Hãy thử một số mô hình nhúng khác nhau.
- Bạn có thể tra cứu chúng, bạn có thể thực hiện nhiều nguồn mở khác nhau.
- Hoặc bạn có thể thử làm như Gemini nếu bạn có tài khoản Gemini.
- Hãy thử nghiệm với chúng và sau đó xem hình ảnh trực quan.
- Việc chơi với các mô hình mã hóa rất thú vị và giúp bạn có được cảm nhận, trực giác tốt về cách chúng biểu diễn thông tin khác nhau.
- Tóm lại, tại thời điểm này, bạn có thể tạo văn bản và mã bằng các mô hình frontier, trợ lý và công cụ, mô hình nguồn mở, bộ chuyển đổi khuôn mặt ôm sát.
### Muc 89

- Bạn có thể chọn mô hình phù hợp cho dự án của mình bằng cách sử dụng bảng xếp hạng điểm chuẩn.
- Bạn có thể giải thích cách Rag sử dụng nhúng vector và kho dữ liệu vector để chuyển văn bản thành tài liệu, thành các khối, để chuyển các khối thành vector, để đưa vector vào kho dữ liệu, cách vector giống như chỉ mục trong dữ liệu.
- Và chúng tôi đã sử dụng Chroma, cơ sở dữ liệu nguồn mở, có lẽ là cơ sở dữ liệu vector đầu tiên mà bạn đang chạy trên máy tính của mình.
- Tuyệt vời.
- Lần tới, lần tới khi chúng ta thực sự xây dựng đường ống Rag, chúng ta sẽ sử dụng Lang Chain để xây dựng đường ống Rag.
- Siêu dễ.
- Chúng tôi cung cấp dịch vụ trả lời câu hỏi chuyên nghiệp dựa trên nền tảng giẻ rách và bạn sẽ có thể tạo ra ứng dụng chatbot dựa trên Gradio không chỉ hiển thị câu trả lời cho các câu hỏi mà còn có thể hiển thị các tài liệu đã sử dụng.
- Đó là tài liệu tham khảo giúp trả lời câu hỏi.
### Muc 90

- Bối cảnh liên quan được thể hiện qua đường ống Rag của chúng tôi.
- Chúng ta sẽ làm tất cả những điều đó vào ngày mai.
- Và đến thời điểm này, bạn đã đi được 55% chặng đường để trở thành kỹ sư LLM.
- Hẹn gặp lại bạn vào ngày mai.

