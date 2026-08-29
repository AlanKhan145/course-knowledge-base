# Ngay 020 - Tuan 4, ngay 5

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-020.txt

## Tong quan

- Chu de mo dau: Được rồi.
- File goc: day-020.txt
- So y chinh: 677
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Được rồi.
- Đã là tuần thứ tư.
- Ngày thứ năm.
- Hôm nay là ngày cuối cùng của tuần, ngày cuối cùng trước tuần rag.
- Và chúng ta sẽ sử dụng nó như là lần cuối cùng để đánh giá các mô hình vì chúng ta đang đánh giá các loại.
- Bạn có thể lập trình bằng các mô hình frontier.
- Với các API trả phí để kiểm tra API hoàn thành, bạn có thể sử dụng các mô hình nguồn mở ngay cả khi đang ngủ.
- Bạn có thể tự tin lựa chọn mô hình phù hợp cho dự án của mình dựa trên các số liệu và có thể sử dụng các mô hình frontier và mã nguồn mở để tạo mã.
### Muc 2

- Hôm nay, chúng ta sẽ tiếp tục so sánh hiệu suất của một vườn thú mô hình.
- Chúng ta sẽ nói về các loại số liệu khác nhau.
- Và chúng tôi sẽ xây dựng các giải pháp để tạo mã.
- Và tôi sẽ để bạn xây dựng một số thứ cho các nhiệm vụ khác nhau.
- Được rồi.
- Chúng ta hãy bắt đầu thôi.
- Như tôi đã nói trước đó, có lẽ một trong những câu hỏi quan trọng nhất mà người ta phải giải quyết là lựa chọn LM nào phù hợp với nhiệm vụ đang thực hiện.
- Nhưng thực ra, tôi sẽ tự sửa lại.
### Muc 3

- Tôi nghĩ có một câu hỏi thậm chí còn quan trọng hơn, đó là một phần của câu hỏi đó.
- Vì vậy, có lẽ đây là một câu hỏi phụ, đó là làm thế nào bạn có thể đánh giá hiệu suất của mô hình giải pháp của mình, đó là một câu hỏi quan trọng như vậy.
- Đây là câu hỏi mà bạn phải thực sự là nhà khoa học dữ liệu mới có thể hiểu được.
- Cần phải nói rằng giải pháp này vượt trội hơn, có hiệu suất tốt hơn, bởi vì chỉ khi bạn có số liệu để đo lường thì bạn mới có thể đánh giá được LM nào là phù hợp cho nhiệm vụ đang thực hiện.
- Thật sự vô cùng quan trọng.
- Chúng ta sẽ nói về vấn đề này nhiều lần trong những tuần tới.
- Và tôi coi đó là một kỹ năng quan trọng mà một kỹ sư AI cần có.
- Và đây cũng là câu hỏi phỏng vấn thường gặp.
## Phan 2

### Muc 4

- Đây là điều bạn thường hỏi trong một nhóm thương mại thực sự.
- Vì vậy, đây là điều cần hiểu ngay cả khi nó không hấp dẫn bằng một số chủ đề khác mà chúng tôi đề cập trong khóa học.
- Đây thực sự là một câu hỏi quan trọng và tôi muốn chia sẻ với bạn ngay bây giờ về hai loại số liệu khác nhau mà bạn sẽ gặp phải và cần cân nhắc khi xây dựng giải pháp LM.
- Được rồi, vậy thì loại số liệu đầu tiên mà bạn sẽ gặp phải thực sự rất quan trọng.
- Đôi khi được gọi là số liệu tập trung vào mô hình hoặc số liệu mô hình hoặc số liệu kỹ thuật là số liệu mà bạn đo lường khi đào tạo một mô hình để đảm bảo nó được cải thiện hoặc khi bạn làm việc với tư cách là nhà khoa học dữ liệu trên một mô hình.
- Và khi bạn xử lý quá trình đào tạo, điều bình thường mà bạn nhìn vào được gọi là mất mát, đây là thước đo mức độ tệ của mô hình của bạn.
- Và bạn thường cố gắng điều chỉnh quá trình luyện tập để giảm thiểu tổn thất.
- Và nếu bạn xuất thân từ nền tảng khoa học dữ liệu truyền thống, thì một trong những số liệu đo lường tổn thất mà bạn cần biết khi bắt đầu được gọi là lỗi bình phương trung bình MSE.
### Muc 5

- Và nó đơn giản như việc bạn lấy dự đoán từ mô hình của mình, trừ đi giá trị thực tế và bình phương nó.
- Và vì vậy, nếu bạn nói rằng xếp hạng tín dụng dự kiến của ai đó là mười, và xếp hạng tín dụng thực tế của họ là tám theo dữ liệu được dán nhãn của bạn, thì bạn lấy hiệu số đó bình phương thành bốn.
- Và đó chính là tổn thất MSE hay lỗi bình phương trung bình của bạn.
- Khi nói đến việc học sâu trong LMS, số liệu mà chúng tôi thường sử dụng nhất được gọi là mất entropy chéo và chúng tôi sẽ xem xét điều đó sau khi tự đào tạo vào tuần thứ bảy.
- Khi thời điểm đó đến, chúng ta sẽ xem xét công thức tính tổn thất entropy chéo.
- Ừm, và vì thế bạn sẽ quen dần với nó, ừm, khả năng ghi nhật ký âm đối với những người biết về thứ này.
- Được thôi.
- Vậy đó chính là mất mát.
### Muc 6

- Và sự bối rối là một thước đo khác mà bạn thường gặp trong LMS, nó rất giống với mất mát entropy chéo.
- Ừ, đó là một thước đo khác để đánh giá mức độ hiệu quả của mô hình của bạn.
- Sự bối rối ở mức một có nghĩa là mô hình của bạn cực kỳ tự tin vào câu trả lời đúng.
- Đó là một sự bối rối hoàn hảo, trong khi tổn thất bằng không thì hoàn toàn hoàn hảo.
- Ờ, không có mất mát gì cả.
- Và sau đó, mức độ bối rối cao hơn cho thấy mô hình ít chắc chắn hơn về những gì nó nên dự đoán tiếp theo.
- Vì vậy, mức độ bối rối là 100 sẽ chỉ ra rằng nó giống như việc nghĩ rằng có 100 khả năng có thể xảy ra như nhau cho mã thông báo tiếp theo.
- Vậy đó chính là sự bối rối.
## Phan 3

### Muc 7

- Và sau đó là một loạt các số liệu khác từ khoa học dữ liệu truyền thống, ừm, độ chính xác, khả năng thu hồi và F1 mà chúng tạo thành, có thứ gọi là ma trận nhầm lẫn mà bạn có thể gặp phải, tất cả đều liên quan đến việc bạn đưa ra dự đoán.
- Ồ, dự đoán của bạn tốt đến mức nào?
- Tất cả đều liên quan đến kết quả dương tính giả và kết quả âm tính giả và tất cả những thứ tương tự nếu bạn đã từng làm điều này trước đây.
- Vậy đây là tất cả các loại số liệu mà bạn phải nghiên cứu với tư cách là một nhà khoa học dữ liệu.
- Và chúng ta sẽ xem xét một số điều này vào tuần thứ sáu và sau đó là tuần thứ bảy, khi chúng ta xem xét cả thế giới khoa học dữ liệu truyền thống và thế giới mới, cách các nhà khoa học dữ liệu như bạn, ừm, lập mô hình và xem xét hiệu suất của mô hình của họ.
- Và đây là những yếu tố dễ tối ưu hóa nhất cho mô hình của bạn, vì chúng được tính toán trực tiếp từ kết quả đầu ra của mô hình.
- Và bạn có thể chạy mô hình của mình, tính toán các kết quả đầu ra và bạn có thể thực hiện các thao tác như đào tạo, trong đó bạn tự động điều chỉnh tất cả các cài đặt của mô hình để cố gắng cải thiện các con số và giảm thiểu tổn thất.
- Đó chính là mục đích của đào tạo.
### Muc 8

- Vì vậy, nếu đây là những số liệu thực sự cho bạn biết hiệu suất của mô hình và bạn có thể sử dụng chúng để đào tạo mô hình, thì bạn có thể tự hỏi, vậy loại số liệu còn lại là gì?
- Tại sao chúng ta cần một loại số liệu khác?
- Vâng, có lẽ bạn có thể đoán được.
- Có một loại số liệu quan trọng khác, đôi khi được gọi là số liệu tập trung vào kinh doanh hoặc số liệu kết quả.
- Nhưng đây chính là những số liệu thương mại thực sự mà doanh nghiệp của bạn muốn bạn giải quyết.
- Chúng thường giống như các KPI gắn liền với kết quả kinh doanh, chẳng hạn như doanh thu hoặc lợi tức đầu tư hoặc một chỉ số rất phổ biến tất nhiên là sự hài lòng của khách hàng.
- Khi bạn nghĩ về việc mình đang trò chuyện với một chatbot, và sau đó bạn thấy dòng chữ nói rằng, tôi có đang làm tốt không?
- Ngón tay cái hướng lên, ngón tay cái hướng xuống.
### Muc 9

- Bạn đang cung cấp phản hồi cho người dùng.
- Và cuối cùng, mục đích của chatbot này là làm hài lòng người dùng.
- Đó là mục tiêu cuối cùng.
- Bất kể mức tổn thất entropy chéo tốt đến mức nào, thấp đến mức nào, độ phức tạp thấp và độ chính xác cao đến mức nào.
- Mọi thứ khác đều có vẻ tuyệt vời, nhưng nếu sự hài lòng của khách hàng không tốt, nếu mọi người không thích trò chuyện với chatbot của bạn, thì có điều gì đó không ổn.
- À, và khi so sánh với các tiêu chuẩn như bảng xếp hạng, bạn có thể có đủ loại điểm số tuyệt vời, nhưng nếu cuối cùng, trong các bài kiểm tra cuối cùng, nó không hoạt động tốt thì có điều gì đó không ổn.
- AUC của bạn thay đổi diện tích bên dưới đường cong của bộ điều khiển máy thu.
- Đặc điểm này nghe có vẻ rất chiến thuật.
## Phan 4

### Muc 10

- Có thể là tuyệt vời.
- Nó chẳng có ý nghĩa gì nếu doanh thu của bạn không tăng lên.
- Đó là lý do tại sao bạn cần một số liệu tập trung vào doanh nghiệp mà bạn đang cố gắng giải quyết.
- Và đây là những thứ hữu hình.
- Vậy tại sao chúng ta không tập trung vào những điều đó?
- Vâng, tất nhiên là tôi đã tự trả lời câu hỏi của mình trên slide rồi.
- Bởi vì trong khi các số liệu về kết quả kinh doanh là những gì bạn đang cố gắng giải quyết, thì thông thường có rất nhiều bước nhảy vọt về niềm tin giữa việc áp dụng giải pháp kỹ thuật và kết quả cuối cùng thực tế.
- Ai biết tại sao khách hàng của bạn lại không thích bạn.
### Muc 11

- Có lẽ.
- Có thể chatbot đang hoạt động tốt, nhưng có điều gì đó khác đang xảy ra.
- Có thể họ không thích giao diện người dùng.
- Có lẽ đó là điều gì đó hoàn toàn không liên quan.
- Và có thể, có thể doanh thu không tăng lên vì.
- Bởi vì mọi người không muốn sản phẩm của bạn hay thứ gì đó.
- Điều đó không liên quan gì đến việc mô hình hoạt động tốt.
- Vì vậy, bạn biết đấy, còn có những yếu tố bên ngoài khác nữa.
### Muc 12

- Có quá nhiều sự khác biệt giữa mô hình và kết quả kinh doanh cuối cùng.
- Vì vậy, mặc dù kết quả kinh doanh cuối cùng là điều bạn đang cố gắng đạt được, nhưng vẫn có nhiều lĩnh vực tiềm năng mà bạn có thể bỏ lỡ vì những lý do khác.
- Nó quá ồn và bạn không thể tập luyện trên đó được.
- Thông thường phải mất thời gian trước khi bạn có thể đo lường được doanh thu theo số liệu này.
- Bạn không thể.
- Bạn không thể chạy mô hình của mình rồi xem doanh thu sẽ ra sao.
- Vì vậy, bạn không thể sử dụng nó để đào tạo theo thời gian thực.
- Vì vậy, mặc dù mục tiêu cuối cùng của bạn là giải quyết vấn đề về số liệu kinh doanh, nhưng rõ ràng là bạn không thể đo lường nó một cách thường xuyên hoặc liên kết nó trực tiếp với mô hình.
## Phan 5

### Muc 13

- Vì vậy, bạn thường tối ưu hóa bằng các số liệu tập trung vào mô hình, sau đó tại một thời điểm nào đó, bạn đo lường các số liệu về kết quả kinh doanh và đó là trách nhiệm kết hợp giữa bạn, kỹ sư AI và nhà tài trợ doanh nghiệp của bạn để đảm bảo rằng bạn đã kết nối các điểm, để đảm bảo rằng bạn đã làm mọi thứ có thể để một mô hình hoạt động tốt với các số liệu tập trung vào mô hình của nó sẽ chuyển thành một doanh nghiệp hoạt động tốt với các số liệu tập trung vào doanh nghiệp của nó.
- Và tôi biết bạn đang nghĩ gì.
- Bạn đang suy nghĩ.
- Chắc chắn, chắc chắn, chắc chắn.
- Nhưng tôi là kỹ sư AI.
- Tôi là nhà khoa học dữ liệu.
- Lĩnh vực của tôi là số liệu tập trung vào mô hình.
- Đó là nơi tôi sống.
### Muc 14

- Những người kinh doanh là những người chịu trách nhiệm về số liệu kết quả kinh doanh hoặc sản phẩm.
- Các nhóm sản phẩm thường là những người ngồi ở giữa và giao diện giữa những người như chúng tôi và các bộ phận kinh doanh cuối cùng.
- Nhưng điều tôi muốn nói với bạn là tôi đã từng nói điều này trước đây, ừm, mặc dù tôi có phần đồng tình với lập luận đó, nhưng tôi hiểu rằng đó là trách nhiệm chính của chúng ta.
- Đây có phải là số liệu tập trung vào mô hình không?
- Đây là một siêu năng lực đối với những người ở vị trí của chúng tôi, đối với những người làm kỹ thuật, đối với các nhà khoa học và kỹ sư để hiểu được hoạt động kinh doanh và có thể kết nối các điểm lại với nhau.
- Nếu bạn cũng có thể làm được như vậy.
- Đó là một siêu năng lực.
- Vì vậy, tôi muốn thúc giục bạn hãy suy nghĩ và thử thách các số liệu kinh doanh để thực sự đào sâu vào chúng.
### Muc 15

- Thách thức doanh nghiệp của bạn, thách thức những người làm sản phẩm của bạn.
- Hãy chắc chắn rằng bạn là người kết nối các sự kiện.
- Bởi vì nếu bạn biết và hiểu về mặt kỹ thuật, khoa học dữ liệu và các số liệu tập trung vào mô hình, và bạn cũng hiểu các chỉ số KPI kinh doanh mà bạn đang cố gắng giải quyết, thì bạn sẽ ở vị thế tuyệt vời để tạo ra tác động thực sự, thực sự đáng kể.
- Vậy đó chính là thử thách dành cho bạn.
- Hãy nắm lấy, nắm lấy siêu năng lực đó.
- Tôi cũng có khóa học tóm tắt thương mại, nếu bạn muốn tìm hiểu sâu hơn.
- Nhưng cách tốt nhất để làm điều đó là phải tò mò, cố gắng tìm hiểu về các số liệu kinh doanh và hiểu rõ rồi đặt những câu hỏi đúng.
- Thử thách.
## Phan 6

### Muc 16

- Hãy đảm bảo rằng bạn hiểu rõ mô hình của mình sẽ ảnh hưởng thế nào đến kết quả kinh doanh.
- Và chúng ta sẽ quay lại vấn đề này từ tuần thứ sáu trở đi và thảo luận và hiểu rõ hơn về các đánh giá.
- Một chủ đề thực sự quan trọng.
- Được rồi.
- Vậy thì quay lại với dự án hiện tại.
- Trong trường hợp của chúng tôi, tất nhiên, chúng tôi rất may mắn khi số liệu mà chúng tôi đang sử dụng, số liệu mà chúng tôi hiểu rõ nhất, là số liệu tập trung vào doanh nghiệp mà chúng tôi đang làm việc trực tiếp để cải thiện hiệu suất của một số mã.
- Không xảy ra thường xuyên.
- Tôi phải nói với bạn rằng, hầu hết thời gian, số liệu mô hình khá khác biệt so với số liệu kinh doanh thực tế, nhưng trong trường hợp của chúng tôi, chúng tôi đã làm việc trực tiếp với số liệu đó.
### Muc 17

- Và nó liên quan đến hiệu suất của C++ với cùng với cùng với cần có cùng một đầu ra.
- Và cho đến nay là Gemini 2.
- 5 Pro là người chiến thắng của chúng tôi.
- Đã đến lúc chúng ta quay lại phòng thí nghiệm một lần nữa để thực hiện bài kiểm tra khó hơn, để thực sự đưa chúng vào những bước thử nghiệm cuối cùng và xem ai sẽ là người chiến thắng cuối cùng.
- Và để thay đổi, tôi quyết định thay đổi một chút.
- Và thay vì tạo mã C++ và dịch từ Python sang C++, tôi đã thay đổi nó.
- Vì vậy, chúng ta sẽ tạo mã Rust từ Python sang Rust, tôi nghĩ vậy.
- Tôi nghĩ đây là ngôn ngữ được yêu thích nhất.
### Muc 18

- Theo khảo sát nhà phát triển StackOverflow trong mười năm liên tiếp.
- Được yêu thích nhất trong mười năm.
- Chúng ta hãy cùng xem liệu chúng ta có thể tìm ra lý do tại sao không nhé.
- Khi chúng ta dịch một thử thách khó từ Python sang Rust, hãy cùng nguyền rủa.
- Được rồi.
- Quay trở lại với lời nguyền, chúng ta sẽ mở màn tuần thứ tư.
- Chúng ta đang bước sang ngày thứ năm.
- Và đây là kết quả.
## Phan 7

### Muc 19

- Xin nhắc lại, việc thực thi C++ hoặc Rust là tùy chọn.
- Bạn có thể làm cả hai.
- Tôi sẽ thiết lập cái này, phòng thí nghiệm này cho một trong hai người, hoặc bạn có thể chạy nó trên trang web C++ từ hôm qua hoặc chỉ cần chuyển mã.
- Đừng bận tâm đến việc chạy theo lựa chọn của bạn.
- Tôi cũng xin nhắc lại là tôi sẽ sử dụng một số mô hình đắt tiền, nhưng bạn có thể tự chọn hoặc chỉ chạy mã nguồn mở.
- Vấn đề là ở nhiệm vụ, không phải ở việc biên soạn, v.v.
- Vì vậy, như thường lệ, một số lệnh nhập sẽ được tải trong một số biến môi trường.
- Hãy đảm bảo rằng chúng ta đã có mọi thứ để giữ cho bộ định tuyến mở trong danh sách cũng như grok.
### Muc 20

- Với hàng đợi, chúng ta sẽ khởi tạo tất cả các thư viện máy khách.
- Và như trước đây, đây là danh sách các mô hình mà chúng ta sẽ sử dụng.
- Tôi vẫn giữ nguyên bộ như ngày hôm qua.
- Và đây là những gì chúng được liên kết tới thư viện máy khách của họ.
- Bây giờ chúng ta hãy tìm hiểu về rỉ sét.
- Vì vậy, có một hàm mới trong systeminfo mà tôi đã thêm vào đó có tên là rust info.
- Và nếu tôi chạy lệnh đó cùng với thông tin hệ thống của mình, nó sẽ cung cấp rất nhiều thông tin về việc tôi có cài đặt chuỗi công cụ Rust trên máy tính hay không, và tôi có cài đặt, sau đó tôi sẽ chạy lệnh này, lệnh này sẽ lại yêu cầu Gpc5 hướng dẫn cách cài đặt Rust nếu tôi chưa cài đặt, do đó nó sẽ hướng dẫn bạn và đây là tùy chọn nếu bạn muốn.
- Bạn có thể tiếp tục sử dụng C++.
### Muc 21

- Hãy tiếp tục làm những gì chúng ta đã làm ngày hôm qua nếu bạn không muốn lộn xộn, nó rất vui.
- Nếu bạn biết người này, có thể bạn sẽ quan tâm và muốn làm điều này.
- Điều này đặc biệt thú vị nếu bạn không biết ngôn ngữ, vì có điều gì đó rất thỏa mãn khi thấy một mô hình tạo ra thứ gì đó trông có vẻ xa lạ với bạn.
- Bạn biết đấy, kiểu như, được rồi, tôi không biết điều này có nghĩa là gì.
- Tôi sẽ xem thử nó có thực sự hiệu quả không.
- Vì vậy, tôi thấy điều đó khá thú vị.
- Ừ, và, và nó đã thực hiện xong và nói với tôi rằng tôi đã thiết lập xong rồi.
- Tôi có rust toolchain và nó cho tôi biết đây là lệnh tôi cần chạy và có vẻ như đây là lệnh khá hợp lệ, tôi vừa sao chép và dán nó xuống đây.
## Phan 8

### Muc 22

- Nhưng bạn có thể giữ nguyên phần C++ của ngày hôm qua nếu muốn.
- Theo ý bạn.
- Bây giờ chúng ta hãy chuyển sang phần chính và tôi bắt đầu ở đây, ngôn ngữ đồng nghĩa với rỉ sét.
- Và chỉ cần đổi thành C++ nếu bạn muốn sử dụng C++.
- Mọi thứ khác phải hoạt động chính xác như ngày hôm qua cho đến hết.
- Mọi thứ trong đoạn mã này đều có thể sử dụng được với Rust hoặc C++.
- Tất nhiên, Rust cũng là một ngôn ngữ được biên dịch, do đó nó có thể biên dịch toàn bộ thành mã máy gốc, giống như C++.
- Thứ rỉ sét nổi tiếng là thứ được coi là an toàn vì nó tích tụ ở mọi nơi.
### Muc 23

- Nhưng C++ cho phép bạn thực hiện những điều rất nguy hiểm, nếu muốn, có thể khiến máy tính bị sập hoàn toàn hoặc gây tràn bộ đệm và rủi ro bảo mật.
- Rỉ sét không cho phép điều đó.
- Vậy nên, ừm, chúng ta sẽ xem điều đó ảnh hưởng thế nào đến hiệu suất của mã.
- Nếu có thì chúng ta có thể làm gì?
- Chúng ta hãy cùng xem nhé.
- Vậy thì, ừm, tôi có phần này, như tôi đã nói, phần đó có chữ gỉ sét, nhưng ngoài ra thì mọi thứ vẫn giống hệt như trước.
- Cùng một lời nhắc hệ thống.
- Nhiệm vụ của bạn là chuyển đổi mã Python thành mã ngôn ngữ hiệu suất cao.
### Muc 24

- Tất nhiên đó là gỉ sét rồi.
- Chỉ phản hồi bằng mã Ross và cần tạo ra kết quả giống hệt nhau trong thời gian nhanh nhất.
- Lời nhắc nhở người dùng giống như trước.
- Những thông điệp giống như trước.
- Đầu ra ghi giống như trước.
- Cùng một cổng như trước.
- Chỉ.
- Tôi cũng đảm bảo rằng chúng ta xóa sạch mọi dấu vết gỉ sét đặc biệt.
## Phan 9

### Muc 25

- Và sau đó chạy python như trước, tức là chạy phiên bản python của mã và biên dịch rồi chạy ở đâu.
- Bây giờ thì thế này.
- Vậy thì đây là cùng một đoạn mã vì nó chỉ sử dụng lệnh biên dịch và lệnh chạy ở trên.
- Được rồi.
- Bây giờ chúng ta hãy cùng xem một số con trăn.
- Được rồi.
- Lần trước chúng ta đã có một số mã Python để tính các chữ số của pi.
- Lần này chúng ta có thứ gì đó khó hơn.
### Muc 26

- Có khá nhiều mã phức tạp.
- Và tôi sẽ xem xét kỹ hơn sau khi chúng ta thấy nó được trình bày đẹp hơn và thảo luận về nó được trình bày đẹp hơn.
- Đây là nơi chúng ta sẽ thực hiện điều đó.
- Vậy là bây giờ chúng ta có một ứng dụng gradio nhỏ phức tạp hơn một chút so với lần trước.
- Tôi mang vào một số phong cách mà tôi có trong một tập tin khác ở đó.
- Bạn có thể xem qua các kiểu nếu muốn, nhưng ừ, tôi không giỏi về CSS lắm, nhưng tôi sẽ thử.
- Tôi sẽ cho bạn biết rằng, ừm, một LLM đã tạo ra mã CSS này ngay tại đây.
- Tất nhiên, đó là cách làm hiện nay.
### Muc 27

- Ừ, vậy thì chúng ta sử dụng một số mã CSS và tạo giao diện người dùng như trước.
- Nó thực sự có ba hàng.
- Hàng đầu tiên có mã Python và mã C++, sau đó là tập hợp các nút.
- Và sau đó là hàng ghế thứ hai.
- Và hàng thứ ba có các ô đầu ra cho đầu ra Python và đầu ra C++.
- Và điều khác tôi đã đề cập là chúng tôi đang sử dụng một trường gradient đặc biệt gọi là mã GR.
- Vậy chúng ta hãy cùng xem mọi thứ trông như thế nào nhé.
- Nếu tôi chạy nó lên thì sẽ xuất hiện giao diện người dùng.
## Phan 10

### Muc 28

- Và nó khá thú vị.
- Chúng ta có khối mã này ngay tại đây và chúng ta có thể thấy những gì đang diễn ra thực sự rõ ràng.
- Để tôi thu nhỏ lại một chút.
- Đấy, thế là xong.
- Thu nhỏ hết cỡ.
- Chúng ta có thể thấy đây chính là toàn bộ mã chúng ta đang nói đến.
- Có lẽ nó trông cực kỳ nhỏ bé đối với bạn.
- Bạn phải nheo mắt, nhưng tôi có thể làm cho nó to hơn một chút.
### Muc 29

- Đấy, thế là xong.
- Và tôi có thể nhanh chóng cho bạn biết chúng tôi sẽ chạy cái gì ở đây.
- Được rồi, vậy mã Python này là gì?
- Chúng ta đang thách thức mô hình của mình bằng điều gì, đúng không?
- Vâng, để bắt đầu, chúng ta có một thứ ở đây là máy tạo số giả ngẫu nhiên.
- Nó tạo ra các số ngẫu nhiên giả mà tôi không dựa vào như thư viện ngẫu nhiên trong Python, bởi vì tôi muốn làm điều gì đó có thể tái tạo hoàn toàn trong bất kỳ ngôn ngữ lập trình nào khác, nhưng cũng vì cách tôi làm điều này, đó là sử dụng một vài số rất lớn, sau đó thực hiện phép nhân, cộng và lấy phần dư.
- Cách thực hiện là sử dụng hàm tạo bằng cách sử dụng yield của một giá trị.
- Và đó sẽ là điều khó khăn để mô hình có thể hiểu và dịch sang các ngôn ngữ khác với các cấu trúc khác nhau.
### Muc 30

- Vậy thì đó là một mẹo khá thú vị để sử dụng ở đây.
- Được thôi, chúng ta có thể tạo ra các số ngẫu nhiên.
- Thì sao?
- Vâng, tôi muốn có loại công thức như vậy ở đây.
- Đó là loại điều bạn có thể gặp phải trong trò chơi.
- Ừm, nếu bạn là một lập trình viên hoặc nhà phát triển trò chơi, thì đây có thể là loại công việc mà bạn phải làm.
- Nhưng về cơ bản, tôi tạo ra 10.000 số ngẫu nhiên trong khoảng từ âm mười đến dương mười.
- Và thách thức mà đoạn mã này giải quyết là, tôi có 10.000 số ngẫu nhiên.
## Phan 11

### Muc 31

- Hãy cho tôi biết nếu bạn có thể chọn bất kỳ tập hợp con số nào trong một hàng, bạn có thể chọn mười số đầu tiên, 30 số ở giữa, 20 số cuối, bất kỳ tập hợp con nào.
- Sau đó, bạn có thể cộng các con số đó lại.
- Bạn sẽ nhận được tổng số.
- Tổng số cao nhất bạn có thể đạt được khi lấy bất kỳ mảng con tổng nào, bất kỳ số lượng số nào trong một hàng trong mảng 10.000 số này là bao nhiêu?
- Và bạn có thể nói, ừ, khoan đã, tại sao không cứ tiếp tục đi.
- Chỉ cần lấy toàn bộ danh sách.
- Bởi vì hãy nhớ rằng, nó cũng có số âm nữa.
- Vì vậy, bạn có thể không muốn lấy kết quả tốt nhất có thể chỉ bằng cách lấy ba số ở giữa nếu tất cả chúng đều dương.
### Muc 32

- Vậy là phải tìm ra điều đó.
- Và tất nhiên, cách thực hiện được trình bày ở đây, là một cách tiếp cận khá chuẩn, là lặp qua toàn bộ mảng và bắt đầu từ điểm này.
- Và sau đó, với mỗi vòng lặp, bạn sẽ có một vòng lặp phụ ở đây, vòng lặp này sẽ lặp lại để xem kết quả cuối cùng sẽ như thế nào.
- Sau đó bạn cộng tất cả lại và tìm ra tổng.
- Và bạn phải chắc chắn rằng bạn không vô tình kiểm tra mọi thứ hai lần, điều này rất dễ xảy ra nếu bạn không cẩn thận.
- Và đó chính là tác dụng của nó.
- Và sau đó tôi nói, bạn biết không?
- Chúng ta hãy làm như vậy 20 lần.
### Muc 33

- 20 lần với các bộ số ngẫu nhiên khác nhau.
- Cộng tất cả lại và trả về.
- Vì vậy, có rất nhiều phép tính được thực hiện ở đó, rất nhiều.
- Và mô hình sẽ rất khó để hiểu được tất cả những điều đó, để dịch chúng và để có được kết quả đầu ra chính xác như vậy, chứ chưa nói đến việc làm cho chúng nhanh hơn cùng một lúc.
- Vậy chúng ta hãy cùng xem họ làm thế nào nhé.
- Nhưng trước hết, nếu chúng ta thu hẹp vấn đề lại một chút, chúng ta nên bắt đầu đi xa hơn.
- Chúng ta sẽ bắt đầu bằng cách chạy mã Python này để xem mất bao lâu.
- Nếu chúng ta chỉ sử dụng Python thì sẽ không nhanh được vì có rất nhiều việc phải làm.
## Phan 12

### Muc 34

- Và tất nhiên là lấy chuỗi và gọi eval.
- Về cơ bản, điều này giống như việc chạy mã Python rồi tìm hiểu xem mất bao lâu để thực thi mã Python.
- Và tôi tin là tôi tình cờ biết điều đó.
- Vâng, tôi biết là bạn chưa biết, nhưng bạn sắp biết điều đó bất cứ lúc nào.
- Ồ, và sau đó chúng ta có thể so sánh nó với phiên bản gỉ sét.
- Đây rồi.
- Vì vậy, tổng mảng con tối đa là tổng của việc thực hiện điều này 20 lần, kết quả là 109 tám không.
- Vậy đó chính là con số cần tìm.
### Muc 35

- Và thời gian thực hiện là 33 giây.
- Ở vùng đất Python.
- Đó là con số cần phải đánh bại trong gỉ sét.
- Vì vậy, mô hình đầu tiên được thử sẽ là mô hình đã rơi xuống đáy trước đó.
- Chúng ta sẽ đi theo thứ tự ngược lại.
- Quan 2.
- 5 coda.
- Tôi đã bắt đầu rồi.
### Muc 36

- Tất nhiên là nó đang chạy cục bộ trên máy tính của tôi và rõ ràng là chúng ta hy vọng có thể thấy nó có thể chuyển mã này sang Rust lần trước.
- Hãy nhớ rằng Pi không thể chạy được mã C++.
- Đây là mã lỗi vừa xuất hiện.
- Và nếu đây là trang web đầu tiên của bạn tại rust Code thì đây là trang dành cho bạn.
- Bây giờ chúng ta sẽ xem liệu điều này có hiệu quả hay không.
- Chạy rỉ sét và chúng ta sẽ gặp phải rất nhiều thứ, rất nhiều vấn đề.
- Đó lại là một thất bại nữa.
- Thật không may cho Kwan 2.
## Phan 13

### Muc 37

- 5 Coda.
- Tiếp theo là GPT.
- Ừ, vậy thì chúng ta nên, ừ, chúng ta nên tìm lại nó.
- Bạn còn nhớ không, đó chính là điều đã khiến chúng ta thất vọng lần trước.
- Vì vậy, chúng ta sẽ nhấn nút cổng để rỉ sét một lần nữa.
- Điều này sẽ được giải quyết bằng cách xếp hàng.
- Điều này khiến tôi tự hỏi liệu có phải tôi đã không thiết lập nó ở mức lý luận cao theo cách tôi đang nói chuyện với grok trong hàng đợi hay không, vì nó khá nhanh, và thật ngạc nhiên là trước đó nó đã làm sai.
- Ừm, vậy thì các bạn có thể kiểm tra lại và cho tôi biết nếu tôi không sử dụng đúng cách.
### Muc 38

- Ừ, nhưng giờ đã đến lúc chúng ta phải chạy thử cái này rồi.
- Chúng ta hãy xem điều gì sẽ xảy ra.
- Có chuyện gì đó đang xảy ra.
- Nó nghĩ rằng, được rồi, nó đã đưa ra câu trả lời đúng và chạy cực kỳ nhanh.
- Với tôi, điều đó có vẻ khá ấn tượng.
- Tôi sẽ nói.
- Chúng ta hãy nhanh chóng sao chép đoạn mã này xuống, ghi lại kết quả và xem mã để biết điều gì đang xảy ra.
- Ờ, thì ra đây là mã Rust.
### Muc 39

- Bạn sẽ thấy rằng, ừm, có lẽ bạn không thể nhìn thấy bất cứ thứ gì cả.
- Để tôi phóng to nhé.
- Bạn sẽ thấy rằng nó đã thực hiện một số điều thú vị ở đây.
- Ừ, nhưng quan trọng nhất là nó đã làm được một điều rất, rất quan trọng, đó là điều ấn tượng.
- Nó được triển khai lại thuật toán.
- Thuật toán này sử dụng thứ được gọi là thuật toán ứng viên Kadane, một phương pháp cho phép bạn không phải thực hiện vòng lặp và vòng lặp bên trong, mà có thể tính tổng tối đa các phần tử liên tục hoặc các phần tử liền kề trong một mảng chỉ trong một lần chạy.
- Và nó có thể nhận ra loại việc chúng ta đang làm và biết cách làm nhanh hơn.
- Và điều đó thực sự ấn tượng.
## Phan 14

### Muc 40

- Và Python 2 có thể thực hiện được điều đó.
- Nhưng thực tế là nó được thực hiện bằng Python và viết lại bằng Rust đã được biên dịch chính là lý do tại sao chúng ta có được sự cải thiện hiệu suất đáng kinh ngạc.
- Hãy xem sự khác biệt ở đây.
- 33 giây xuống còn một thứ gì đó là gì vậy?
- Tức là 304 micro giây.
- Ồ, ồ.
- Tôi tự hỏi liệu đó có phải là chiến thắng của OpenAI OS 120 không.
- Chúng ta hãy ghi nhớ điều đó nhé.
### Muc 41

- Quay lại ngày thứ năm.
- Vậy thì, ừm, chúng ta lại có Quan 2.
- 5 lập trình viên đã thất bại.
- Hoặc biến điều này thành mức giảm giá.
- Và bây giờ thì tất nhiên là có.
- Lấy làm tiếc.
- Giảm giá.
- Và bây giờ chúng ta có GPT oss 120.
### Muc 42

- Đã có khung thời gian rồi.
- Không thể tin được.
- Hiệu suất nhanh đến khó tin.
- Tuyệt vời.
- Đã đến lúc thử mô hình tiếp theo.
- Được rồi.
- Và quay trở lại.
- Tôi vẫn vậy.
## Phan 15

### Muc 43

- Tôi thực sự kinh ngạc trước sự cải thiện về hiệu suất mà chúng ta vừa chứng kiến từ OSS 120.
- Ờ, giờ tôi đã chuyển sang Deep Sea Cadet v2.
- Tôi đã chuyển sang Rust, nhấn chạy Rust và nó báo lỗi.
- Deep Sea Coder v2 lại là một thất bại nữa.
- Vậy thì tiếp tục nhé.
- Tiếp theo là Kwan, chúng ta sẽ làm điều này.
- Kwan 330 DB mà chúng ta sẽ sử dụng làm bộ định tuyến mở làm đường dẫn cho nhà cung cấp kết nối với Kwan và sẽ tính phí cho chúng ta.
- Đây là mã.
### Muc 44

- Chúng ta hãy thử rỉ sét và xem nó có thất bại không.
- Nhìn kìa, lỗi hủy bỏ do đặc điểm định dạng không xác định.
- Thật thú vị phải không?
- Đấy, thế là xong.
- Vì thế?
- Vậy là Quan cũng đã thất bại.
- Đó là mục tiếp theo trong danh sách của chúng tôi.
- Chúng tôi sẽ không cho anh ta cơ hội thứ hai.
### Muc 45

- Thật không may là vậy.
- Đây là.
- Đây chính là trò chơi.
- Ừ, bạn có thể thành công hơn nếu thực hiện theo cách này, bạn có thể đạt được kết quả khác.
- Đã đến lúc chúng ta chuyển sang mô hình trả phí nguồn đóng đầu tiên.
- Chúng ta sẽ đi với Claude.
- Vị trí đó ở cuối cùng trước khi cổng bị gỉ.
- Chúng ta hãy cùng xem Claude xử lý vụ án đầy thách thức này như thế nào.
## Phan 16

### Muc 46

- Ờ, nó đang nghĩ về điều đó.
- Tôi cảm thấy nó suy nghĩ lâu hơn so với ví dụ về hình tròn.
- Ồ, và chúng ta bắt đầu thôi.
- Chúng tôi đã có câu trả lời.
- Tôi thấy có rất nhiều thứ ở đây.
- Chúng ta hãy thử chạy thử loại rỉ sét đó.
- Ồ.
- Có lỗi.
### Muc 47

- Đấy, thế là xong.
- Tôi thực sự nghĩ rằng tôi đã thấy điều này, ừm, đây là một ví dụ.
- Nếu bạn chạy chương trình này bằng C++, thực tế là nó có thể bị sập hoặc đưa ra một con số điên rồ.
- Rust có nhiều tính năng kiểm tra kiểu hơn.
- Nó kiểm tra nhiều hơn.
- Và do đó nó nhận thấy rằng Claude đã mắc lỗi khi sử dụng số 32 bit.
- Khi những con số này yêu cầu như vậy, hãy sử dụng số 64 bit.
- Và tôi thậm chí còn thêm một bình luận.
### Muc 48

- Một bình luận về Python ở đây.
- Hãy cẩn thận khi hỗ trợ số lượng lớn.
- Chỉ là một gợi ý để mô hình khi thực hiện thao tác này, nó sẽ có chức năng đó.
- Đó là chú ý đến điều đó.
- Nhưng thật đáng buồn là điều đó không giúp ích gì cho Claude.
- Claude 4.
- 5 người đã trượt bài kiểm tra.
- Đó là một thất bại.
## Phan 17

### Muc 49

- Ghi lại Claude 4.
- 5 lần trượt.
- Và chúng ta sẽ chuyển sang GPT năm.
- Được rồi, bắt đầu thôi.
- Chúng ta sẽ chuyển sang GPT năm.
- Đây là cổng để rỉ sét.
- Và tôi cảm thấy mình chưa đề cập đủ nhiều đến giao diện mới này, tôi đã quên đề cập đến việc tôi đã thêm tất cả các nút này sao cho không chỉ có nút cuối cùng mà tất cả những gì chúng ta có là hiển thị mã.
- Đây là phần cũng hiển thị đầu ra, mà tôi nghĩ là thực sự thú vị, đó là, ừm, Đối với phần cuối cùng của giao diện này, và nó được thiết kế rất đẹp.
### Muc 50

- Ừm, trông tuyệt lắm.
- Được rồi, việc này có thể sẽ mất vài phút vì đây là nhiệm vụ khó ở GPT 5.
- Mất năm phút cho nhiệm vụ dễ hơn?
- Tôi nghĩ là vậy, nên có thể mất một thời gian.
- Vì vậy, tôi sẽ quay lại ngay khi hoàn thành.
- Được rồi.
- GPT năm đã hoàn thành.
- Chúng ta đang xem mã.
### Muc 51

- Tôi có thể thấy rồi.
- Tôi có thể thấy rằng nó có chứa thuật toán.
- Và thế là xong.
- Nó đề cập đến việc nó chứa thuật toán.
- Ờ thì nó đã thấy rồi và tôi cũng thấy là xong rồi.
- Nó được thực hiện nội tuyến giống như Claudia.
- Nhưng có vẻ như nó còn làm được nhiều hơn thế nữa.
- Tôi nghĩ là nếu tôi nhớ không nhầm.
## Phan 18

### Muc 52

- Vậy chúng ta hãy chạy thử nhé.
- Nhưng tôi mong đợi một kết quả rất tốt.
- Nó chạy rồi.
- Ồ, không.
- Nhìn kìa.
- Mọi chuyện đã sai rồi.
- Ồ, không.
- Cái gì thế?
### Muc 53

- Chuyện gì đã xảy ra với nó vậy?
- Định dạng không xác định.
- Nó giống hệt như những gì chúng ta đã nhận được trước đó.
- Thật buồn cười phải không?
- Có vẻ như là, ừm.
- Có một số lỗi trong cách định dạng văn bản.
- Mặc dù mọi thứ khác đều hoạt động bình thường.
- Ồ, tệ quá.
### Muc 54

- Thật là đáng xấu hổ.
- GPT năm.
- Bạn biết đấy, chúng tôi có luật lệ và là luật lệ.
- Tôi sẽ nói gì với bạn đây?
- Tôi e rằng chúng ta phải trượt.
- Tôi không biết chính xác chuyện này xảy ra thế nào.
- Có vẻ như là, ừm.
- Có vẻ như điều này thật đáng tiếc khi xảy ra, nhưng GPT năm đã bị loại và chúng ta sẽ tiếp tục.
## Phan 19

### Muc 55

- Vâng, tôi vẫn còn khá sốc vì chuyện này.
- Tôi thực sự bị sốc khi biết rằng GPT năm người hùng mạnh lại mắc sai lầm.
- Tôi không thể không nghĩ rằng có lẽ chính tôi đã làm sai điều gì đó ở đây.
- Ừ, chúng ta sẽ tìm hiểu xem sao, ừ, nếu tôi có.
- Vậy thì hãy cho tôi biết nhé.
- Hãy nói cho tôi biết tôi đã làm gì sai.
- Ừ, nhưng tôi tin là GPT năm đã tự loại mình.
- Trong khi đó, tôi đã chọn GPT OSS 20, ừm, là phần mềm đã chiến thắng lần trước.
### Muc 56

- Mô hình nguồn mở khiến chúng ta bất ngờ.
- Nó hiện đang chạy.
- Máy của tôi đang chạy.
- Tôi tự hỏi liệu có phải vậy không.
- Đúng vậy, cho dù tôi có xuất hiện ở trạng thái đóng băng đi chăng nữa.
- Bởi vì máy tính của tôi thực sự đang phải hoạt động hết công suất để cố gắng vượt qua vấn đề này.
- Tôi sẽ gặp bạn khi nó hoàn thành.
- Ồ, điều này thật thú vị.
### Muc 57

- Hoàn tất rồi.
- Vì vậy, GPT 5 đã tự làm mất uy tín của mình với mã lỗi rõ ràng, và giờ đây nó phải hợp tác với người anh em của mình, OS 20 GB để cố gắng cứu vãn tình hình.
- Chúng ta hãy chạy thử nhé.
- Ồ, tuyệt quá.
- Đây là đang chạy.
- Đấy, thế là xong.
- Được rồi, xong rồi.
- Tuyệt vời.
## Phan 20

### Muc 58

- Đúng vậy, nó đã làm rất tốt.
- Nhìn kìa.
- Nó có câu trả lời đúng.
- Và nó cũng được thực hiện trong thời gian cực nhanh.
- Chúng ta hãy xem xét đoạn mã này.
- Tôi thấy điều đó có vẻ đúng.
- Mảng con I không đề cập đến việc nó sử dụng thuật toán Kadane nhưng tôi có thể thấy rằng nó chỉ có một vòng lặp chứ không phải nhiều vòng lặp.
- Và nó sẽ không đưa ra câu trả lời đúng nếu trả lời sai.
### Muc 59

- Và mặc dù vậy.
- Đúng, nó không đề cập đến việc nó được triển khai lại.
- Nó vừa làm điều đó.
- Không có bình luận nào.
- Nó đã làm được điều đó theo một phong cách hoàn hảo.
- Nó vẫn tiếp tục gây ngạc nhiên.
- Đây là kết quả.
- Đây là kết quả từ mô hình nguồn mở nhỏ.
### Muc 60

- Chúng ta bắt đầu thôi.
- Dán nó vào đó.
- Thật tuyệt vời phải không?
- Nó vừa mới vào đây thôi.
- Nó là một người anh lớn hơn, lớn hơn nữa.
- Có lẽ đây chỉ là sự trùng hợp ngẫu nhiên.
- Ai biết được?
- Nhưng đó là con số chúng ta đang lấy.
## Phan 21

### Muc 61

- Đó là quy tắc.
- Tôi không đặt ra luật lệ.
- Vâng, tôi là người đặt ra luật lệ, nhưng đó là những gì chúng ta sẽ thực hiện.
- Chúc mừng.
- Chúng tôi chỉ còn hai mô hình nữa thôi.
- Được rồi, tiếp theo là tìm hiểu về thế lực hùng mạnh.
- Grok vì tôi đã bắt đầu rồi.
- Chúng ta sẽ để nó chạy.
### Muc 62

- Hãy dành thêm một chút thời gian để chiêm ngưỡng giao diện người dùng đẹp mắt này, tất cả đều được kết nối khi chúng ta xem lại mã ở đây.
- Nếu tôi quay lại đoạn mã này, chỉ để cho bạn thấy, điều mà tôi đã không đề cập cụ thể lần trước, là bạn có thể thấy rằng, ừm, các lệnh gọi lại khi bạn gọi click để chuyển đổi, nó gọi hàm cổng như trước, đưa vào các đầu vào của mô hình và python và lấy các đầu ra.
- Sau đó có nút chạy Python.
- Đó là nút mới.
- Khi bạn nhấp vào đó, nó sẽ gọi run Python, hàm này sẽ chạy và tính thời gian cho python và đưa đầu ra vào Python.
- Và khi bạn nhấp vào chạy C++ hoặc rust, tùy thuộc vào ngôn ngữ được thiết lập, nó sẽ gọi biên dịch và chạy hàm mà chúng ta đã viết và đưa đầu ra vào đó.
- Vì vậy, bạn lại thấy gradio tuyệt vời và rõ ràng như thế nào chỉ bằng cách thiết lập danh sách các nút và đăng ký các sự kiện này và liên kết chúng với các hàm gọi lại, đầu vào và đầu ra, bạn có thể dễ dàng kết nối giao diện người dùng với mô hình của mình và với hàm gọi lại ở phía sau.
- Được rồi, nó vẫn đang chạy.
### Muc 63

- Tôi sẽ gặp bạn ngay khi hoàn tất.
- Được rồi, đây là mã rust được tạo ra bởi grok để bạn xem xét.
- Ừ, được thôi.
- Tôi thấy trông có vẻ ổn.
- Ồ không.
- Tôi không chắc chắn.
- Ồ, đúng rồi, tôi nghĩ là đúng kiểu dữ liệu.
- Tôi nghĩ là trông ổn với tôi.
## Phan 22

### Muc 64

- Và, ừm, có vẻ như đây là thuật toán của Kadane, mặc dù không đề cập đến điều đó.
- Thú vị.
- Hãy chạy rỉ sét.
- Chúng ta hãy xem điều gì sẽ xảy ra.
- Chúng ta bắt đầu thôi.
- Được rồi.
- Và thế là xong.
- Nó.
### Muc 65

- Nó đã đưa ra câu trả lời đúng.
- Nó được thực hiện trong thời gian rất, rất nhanh.
- Tôi không nhìn thấy.
- Thật buồn cười.
- Trông nó khác hẳn.
- Tôi không biết tại sao nó lại nhanh hơn.
- Có vẻ như nó có cách triển khai khác.
- Tôi thấy rằng nó khá thông minh khi sử dụng kích thước của nó.
### Muc 66

- Có lúc tôi nghĩ rằng họ đã phạm sai lầm, nhưng tôi nghĩ cách họ thực hiện là rất thông minh.
- Ừm, có lẽ đó là lý do cho phép nó đạt được con số này.
- Nhưng đây là số của Grok Four.
- Chúng ta hãy đặt nó cùng với những thứ khác.
- Đây là danh sách của chúng tôi.
- Ừ, chúng ta đi xuống thôi.
- Và thế là Grok Four đã có mặt ở đây.
- Đây có phải là tốc độ nhanh nhất từ trước đến nay không?
## Phan 23

### Muc 67

- KHÔNG.
- Không phải vậy.
- Ừ, OSS 120 vẫn đang dẫn đầu.
- Đây là cách nhanh thứ hai.
- Còn một câu nữa thôi.
- Đã đến lúc rồi.
- Đã đến lúc chúng ta cần có người chiến thắng trước Gemini hai năm Pro?
- Liệu ông ấy có giữ được vị trí đầu bảng hay sẽ bị OSS 120 soán ngôi?
### Muc 68

- Được rồi, chúng ta chọn Gemini Two Five Pro và nhấn nút cổng để rỉ sét và chờ xem điều gì xảy ra.
- Thật thú vị.
- Đây chính là trận chiến cuối cùng để giành chiến thắng cuối cùng.
- Và chúng ta sẽ để nó làm việc của nó.
- Và tôi sẽ gặp lại bạn ngay.
- Được rồi.
- Chúng tôi có mã.
- Chúng tôi có mã ở đây.
### Muc 69

- Có rất nhiều thứ ở đây, rất nhiều bình luận như trước, nó đề cập đến thuật toán của Kadane, điều này rất tốt.
- Thật vui khi được chứng kiến.
- Có thứ gì đó ở đây.
- Tôi hy vọng là không giống vậy.
- Tôi thấy có thứ gì đó trông quen quen từ trước, nhưng giờ hãy chạy thử xem sao.
- Xin hãy đánh trống.
- Tiếng trống vang lên.
- Chúng ta bắt đầu thôi.
## Phan 24

### Muc 70

- Ồ vâng.
- Bạn thấy đấy, tôi nghĩ tôi đã thấy những đặc điểm định dạng phù hợp.
- Vậy thì, ừm, có gì đó không ổn với bản in này như trước đây.
- Thế thì sao?
- Thế thì sao?
- Và có thể nó liên quan đến phiên bản Rust mà tôi đang chạy, đó là phiên bản Rust mới nhất.
- Tôi không biết nguyên nhân gây ra điều này là gì.
- Tôi không biết nhiều về rỉ sét.
### Muc 71

- Tôi là một tân binh thực sự.
- Tôi không biết rõ liệu có cách nào tôi đang chạy hay triển khai nó hay gì đó tương tự không, nhưng chúng tôi đã nói chính xác lệnh chúng tôi đang sử dụng để chạy nó.
- Vậy là nó có thông tin đó, nhưng đáng ngạc nhiên là lại có lỗi rất giống.
- Chúng ta vừa mới nhận được vương miện.
- Người chiến thắng của chúng ta đã bị loại khỏi cuộc đua.
- Song Tử 2.
- Phiên bản 5 Pro đã ra mắt.
- Song Tử 2.
### Muc 72

- 4 Pro 5 Pro là một thất bại.
- Và điều đó có nghĩa là nếu chúng ta quay lại đây thì coi như thất bại.
- Và thật đáng kinh ngạc, hoàn toàn, thật đáng kinh ngạc, mô hình mã nguồn mở trước đây hoạt động kém hiệu quả, từng ở vị trí cuối cùng, ngoài việc thất bại, giờ đã được chuyển lên vị trí đầu tiên trong bảng xếp hạng cuối cùng của chúng tôi.
- Nơi đầu tiên và.
- Điều này gây sốc vì nhiều lý do.
- Ừ, nhưng một trong những điều gây sốc là nó có nghĩa là mã nguồn mở để chiến thắng, không phải mã nguồn mở, chạy trên máy tính của tôi, phải thừa nhận là mã nguồn mở chạy trên đám mây vì nó quá lớn để chạy trên máy tính của tôi.
- Nhưng mô hình nguồn mở này, AI mở, GPT OSS 120 GB là người chiến thắng, có lẽ là do một số vấn đề kỹ thuật hiện tại đã thất bại.
- Ừm, Gemini nằm trong danh sách thất bại.
## Phan 25

### Muc 73

- Ờ, ở đây.
- Tất cả những điều này đều thất bại.
- Ba dự án duy nhất thành công là GPT OSS 120 b ở vị trí thứ nhất, Grok four của Elon Musk ở vị trí thứ hai.
- Và ở vị trí thứ ba, một mô hình nguồn mở khác, lần này chạy trên máy tính của tôi, GPT OSS 20 B và mọi thứ khác đều thất bại.
- Đây là ba người chiến thắng của chúng ta.
- Mã nguồn mở để chiến thắng.
- Quả thực là một kết quả tuyệt vời và gây sốc.
- Và còn một điểm cuối cùng cần lưu ý, đó là mã máy gốc của chúng tôi được biên dịch từ Rust nhanh hơn nhiều so với Python gốc.
### Muc 74

- Python ban đầu mất 33 giây.
- 755 giây.
- Đây chính là đoạn mã nhanh hơn ở đây.
- Đúng là ôi chao.
- Đó là tốc độ 0.
- 000304.
- Chúng ta hãy cùng tìm hiểu xem nó nhanh hơn bao nhiêu nhé.
- Nó nhanh hơn 111.000 lần.
### Muc 75

- Nhanh hơn 100.000 lần đối với bài toán khó này.
- Ồ.
- Ha!
- Ồ.
- Tôi hy vọng bạn thực sự bị sốc.
- Hệ điều hành OpenAI GPT 120 b.
- Một mô hình nguồn mở đã lấy một số mã Python hoàn toàn đáng tin cậy và bằng cách thay đổi thuật toán, chuyển đổi nó thành rust, sau đó chúng tôi biên dịch thành mã máy và chạy.
- Chúng tôi đã có thể đạt được tốc độ nhanh hơn 100.000 lần so với chỉ số kết quả kinh doanh đã đạt được.
## Phan 26

### Muc 76

- Và như vậy là kết thúc phần này.
- Tôi nhận ra rằng có rất nhiều thứ kỳ quặc.
- Chúng tôi đã làm rất nhiều thứ với C++ và Rust.
- Tôi không biết bạn có thích nó hay không, nhưng hy vọng là kết quả sẽ làm bạn thích thú.
- Thật tuyệt vời.
- Một kết quả thực sự tuyệt vời.
- Và thật tuyệt vời khi đó là một mô hình mã nguồn mở.
- Điều này rất khác so với kết quả của tôi năm ngoái khi tôi sử dụng C++ và đạt được mức cải thiện hiệu suất gấp 60.000 lần, quả là một bước tiến vượt bậc.
### Muc 77

- Đó là nguồn đóng.
- Nhưng lần này, lần này mã nguồn mở sẽ chiến thắng, có lẽ là do một sự loại trừ đáng ngạc nhiên.
- Tuy nhiên, chúng tôi sẽ chấp nhận.
- Mã nguồn mở.
- Đúng vậy.
- Được rồi, bây giờ thử thách dành cho bạn.
- Có rất nhiều thử thách mà tôi muốn chia sẻ về cách bạn có thể thực hiện dự án này, phát triển nó theo những hướng hoàn toàn mới và làm những điều thực sự thú vị với nó.
- Trước hết, tôi sẽ tái tạo lại kết quả của mình, tự mình thử nghiệm và thêm một số mô hình khác nhau.
### Muc 78

- Nếu bạn đang sử dụng một con lạt ma, hãy ném bất cứ thứ gì vào chúng.
- Hãy thử một số mô hình mã hóa.
- Tôi nhận ra chúng ta sử dụng từ "grok for".
- Ngoài ra còn có một phiên bản mã mà bạn có thể thử xem có hiệu quả không.
- Có rất nhiều cách khác nhau mà bạn có thể thử để xem cách nào hiệu quả hơn.
- Và hãy chia sẻ kết quả của bạn.
- Tôi rất muốn xem.
- Tôi rất muốn biết mọi người nhận được kết quả như thế nào.
## Phan 27

### Muc 79

- Vì vậy, chúng ta sẽ tìm ra ai là người chiến thắng, ai là người chiến thắng cuối cùng và điều quan trọng là phải làm như vậy.
- Vậy là đối với bất kỳ ai đã hoàn thành khóa học đại lý của tôi thì khóa học đó đã hoàn thành.
- Có khám phá nào với Agentic AI không?
- Đây là một quá trình lấy từng phần một tập tin và chuyển đổi nó.
- Tất nhiên, điều này rất phù hợp với giải pháp đại lý, nơi bạn có thứ gì đó có khả năng lặp lại tất cả các tệp và tạo ra một cổng, một giải pháp đầy đủ.
- Vậy thì điều đó thật là tuyệt vời.
- Vì vậy, đó sẽ là một thách thức lớn.
- Bạn có thể bắt đầu bằng cách chỉ thử đọc qua một vài tệp và sau đó xem bạn muốn tiến xa đến đâu với nhiều lệnh gọi LLM, một phần mở rộng rất tự nhiên.
### Muc 80

- Và sau đó, một điều khác bạn cần làm là nếu bạn muốn có một thử thách lớn hơn và những người khác đã làm điều này, bạn sẽ thấy điều này trong phần đóng góp của cộng đồng cho nhiều giải pháp thực sự thú vị.
- Một trong số đó là viết một công cụ mã có thể tự động thêm chuỗi tài liệu và bình luận.
- Bạn có thể lấy giao diện người dùng đó rồi thêm chúng vào và làm cho nó trông thật đẹp.
- Chơi với UI, chơi với các lệnh gọi lại.
- Chỉ nên gọi lại nhanh và gọi LM.
- Tôi nghĩ bạn sẽ ngạc nhiên khi biết việc xây dựng một số thứ này, như chuỗi tài liệu và chú thích, hoặc chuyển đổi sang ngôn ngữ khác, dễ dàng đến thế nào.
- Ở đây chúng ta có C++ và Rust.
- Thêm thứ gì đó khác vào.
### Muc 81

- Chúng ta hãy cùng xem thử nhé.
- Vậy thì thật tuyệt.
- Ừm, viết các bài kiểm tra đơn vị.
- Vì vậy, hãy đưa mã vào để kiểm tra đơn vị.
- Kết hợp điều đó với một tác nhân nào đó.
- Và bạn có thể tạo các bài kiểm tra đơn vị cho toàn bộ kho lưu trữ của mình.
- Và sau đó, nếu bạn muốn tiến xa hơn một chút và làm điều gì đó mang tính thương mại và sâu sắc hơn, bạn có thể có một trình tạo mã viết mã có thể giao dịch theo tín hiệu giao dịch, mua và bán cổ phiếu trong môi trường mô phỏng.
- Một lần nữa, đây là một sự thừa nhận nhỏ đối với thứ mà chúng tôi xây dựng trên khóa học Myogenic, nhưng bạn có thể tự mình thử.
## Phan 28

### Muc 82

- Và tôi đã đưa một giải pháp nhỏ vào thư mục bổ sung mà bạn có thể xem, giải pháp này sẽ tạo ra mã và cố gắng tinh chỉnh để ngày càng thực hiện tốt hơn.
- Đó chỉ là một thứ gì đó đặc biệt, thêm thắt để thỉnh thoảng nhìn vào thôi.
- Nhưng nhưng đúng là bạn không nên làm điều đó ngay bây giờ.
- Bạn chỉ nên viết thứ gì đó sử dụng các lệnh gọi API này hoặc một con llama để viết mã sử dụng API nhằm tìm tín hiệu giao dịch.
- Đây là một số ý tưởng thú vị, nhưng bạn cũng hãy sáng tạo nhé.
- Hãy nghĩ đến một thử thách lập trình.
- Bạn có bằng LLM để hỗ trợ và phát triển điều đó ở đây.
- Và hãy nhớ rằng, mục đích của tất cả những điều này là đưa ra một chỉ số kinh doanh, một thứ gì đó bạn muốn đạt được, xem xét bảng xếp hạng để xác định các mô hình ứng viên và sau đó xem chúng hoạt động như thế nào và cách chúng thực sự đạt được chỉ số kinh doanh của bạn.
### Muc 83

- Vì vậy, hãy nhớ rằng khi bạn thực hiện thử thách, hãy làm theo quy trình, trải qua nó và suy nghĩ về đánh giá của mình.
- Hãy suy nghĩ về mọi việc một cách có kỷ luật.
- Là một nhà khoa học, hãy tiến hành thí nghiệm.
- Đạt được kết quả tuyệt vời.
- Tôi hy vọng bạn sẽ đạt được kết quả tuyệt vời như 100.000.
- Tăng tốc lên.
- Và như vậy là chúng ta đã kết thúc tuần thứ tư.
- Vậy là đã kết thúc tuần thứ tư.
### Muc 84

- Bạn Bây giờ bạn đã chính thức đi được nửa chặng đường trên hành trình trở nên thành thạo trong kỹ thuật LM.
- Chúc mừng.
- Bây giờ bạn đã ở chặng đường cuối cùng.
- Bạn đang ở nửa sau.
- Càng ngày càng gần đến hồi kết.
- Nhưng quan trọng hơn tất cả những điều đó, bạn đang bước vào một tuần lễ rách rưới.
- Khoảnh khắc mà rất nhiều người, có lẽ bao gồm cả bạn, đã chờ đợi.
- Nhưng bạn đã có thể đối phó với các mô hình biên giới và với khuôn mặt ôm sát của Transformers.
## Phan 29

### Muc 85

- Bạn có thể chọn mô hình phù hợp cho dự án của mình dựa trên số liệu, bảng xếp hạng, v.v.
- Và bạn có thể xây dựng các giải pháp tạo mã bằng cách sử dụng các mô hình front-end và mô hình nguồn mở.
- Và bạn có thể ngạc nhiên với kết quả.
- Lần tới khi bạn có thể giải thích các ý tưởng đằng sau Rag, bạn sẽ có thể thực hiện một số quy trình cấp cao để bổ sung chuyên môn cho các truy vấn của mình và bạn sẽ có thể triển khai phiên bản đồ chơi của Rag, một phiên bản rẻ tiền và vui nhộn.
- Bạn sẽ thực hiện tất cả những điều đó vào tuần thứ năm, ngày đầu tiên sẽ diễn ra vào ngày mai.

