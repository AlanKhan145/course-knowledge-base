# Ngay 029 - Tuan 6, ngay 4

Nguon goc: ../AI_AGENT_365_TXT_GOC/day-029.txt

## Tong quan

- Chu de mo dau: Thế là tuần thứ sáu, ngày thứ tư.
- File goc: day-029.txt
- So y chinh: 811
- Cach doc: di theo tung phan, tung muc, tung y chinh ben duoi.

## Phan 1

### Muc 1

- Thế là tuần thứ sáu, ngày thứ tư.
- Và hôm nay tôi có một ngày thật tuyệt vời dành cho bạn.
- Tôi không thể chờ đợi được nữa.
- Như thường lệ, chúng ta phải bắt đầu từ vị trí hiện tại của mình.
- Bạn có thể tạo mã.
- Bạn có thể tạo văn bản bằng các mô hình nguồn mở và nguồn đóng.
- Bạn có thể xây dựng các giải pháp Rag và đánh giá chúng.
- Và bây giờ, bạn có thể thực hiện quy trình gồm năm bước để giải quyết vấn đề.
### Muc 2

- Bạn có thể tạo một tập dữ liệu và xây dựng mô hình cơ sở bằng các phương pháp học máy truyền thống, từ hồi quy tuyến tính cho đến rừng ngẫu nhiên và XGBoost.
- Và bạn có thể hình dung kết quả.
- Và bây giờ bạn đã quen thuộc với biểu đồ y hat y.
- Hôm nay, chúng ta sẽ xây dựng một mạng nơ-ron cơ bản.
- Và chúng ta sẽ làm nhiều hơn là chỉ xây dựng nó.
- Chúng ta sẽ huấn luyện nó.
- Chúng ta thực sự sẽ huấn luyện một mạng thần kinh từ đầu để giải quyết vấn đề này.
- Và sau đó, chúng ta sẽ sử dụng mô hình biên.
### Muc 3

- Và sau đó, chúng ta sẽ so sánh một loạt các mô hình tiên tiến với một tác vụ bằng cách sử dụng biểu đồ đánh giá tuyệt vời của chúng ta, y hat y.
- Được rồi, chúng ta bắt đầu nhé.
- Nhưng một lần nữa, để cung cấp cho bạn bối cảnh rõ ràng về những gì chúng ta đang làm ở đây.
- Nhắc lại trình tự các sự kiện.
- Tuần này, chúng ta sẽ tập trung vào việc tuyển chọn dữ liệu, đánh giá các mô hình và sau đó làm việc với các mô hình tiên tiến.
- Vào ngày đầu tiên chúng tôi thực hiện công việc quản lý dữ liệu đó, tất cả các biểu đồ, chúng tôi đã đảm bảo rằng chúng tôi có các sản phẩm với giá phù hợp, được lấy từ dữ liệu Amazon được trích xuất trên Hugging Face.
- Sau đó, vào ngày hôm sau, chúng tôi đã tiến hành xử lý sơ bộ dữ liệu.
- Chúng tôi đã gửi từng mô tả sản phẩm đến một mô hình ngôn ngữ lớn (LLM).
## Phan 2

### Muc 4

- Chúng tôi sử dụng GPT OSS để chuyển đổi chúng thành nội dung ngắn gọn, súc tích và có độ chính xác cao.
- Sau đó, chúng tôi đã xây dựng một số mô hình cơ sở, bao gồm một mô hình đơn giản chỉ lấy một số ngẫu nhiên và một mô hình khác dự đoán đường thẳng trung bình.
- Và sau đó, chúng tôi đã sử dụng phương pháp học máy truyền thống.
- Chúng tôi đã xây dựng một mô hình hồi quy tuyến tính đơn giản với một số biến chất lượng kém.
- Và sau đó, chúng tôi đã phát triển một hệ thống sử dụng xử lý ngôn ngữ tự nhiên, với một số tính năng hữu ích và sử dụng các từ thông dụng.
- Và sau đó chúng tôi đã đến Random Forest.
- Và sau đó chúng tôi đã sử dụng XGBoost và đạt được một số kết quả khá tốt.
- Hôm nay là mạng nơ-ron.
### Muc 5

- Chúng ta sẽ xây dựng một mạng thần kinh cơ bản và sẽ huấn luyện nó.
- Chúng ta sẽ huấn luyện một mạng thần kinh và xem hiệu suất của nó như thế nào.
- Và sau đó, chúng ta sẽ chuyển sang hệ thống quản lý học tập (LMS) tiên tiến.
- Và các mô hình học máy tiên tiến (LMS) tất nhiên là các mạng nơ-ron, nhưng sử dụng một kiến trúc phức tạp hơn nhiều, bao gồm các lớp tự chú ý, là một phần của kiến trúc transformer.
- Và bạn đã có cái nhìn sơ lược về điều đó trong tuần thứ ba khi chúng ta tìm hiểu xem một mô hình thực sự trông như thế nào.
- Vậy chúng ta sẽ chuyển sang mạng nơ-ron, đến các mô hình tiên tiến và thử nghiệm chúng.
- Và điều đó thực sự mở đường cho tương lai, khi chúng ta sẽ tinh chỉnh mô hình tiên phong vào tuần tới.
- Tất nhiên, chúng tôi đang hoàn thiện mô hình mã nguồn mở và sau đó sẽ tích hợp tất cả lại với nhau.
### Muc 6

- Chúng ta sẽ thêm vào rag Agentic và có một kết thúc hoành tráng.
- Đó là kế hoạch.
- Và bây giờ tôi muốn nói một chút về việc đào tạo mô hình.
- Và tôi muốn nhấn mạnh rằng tuần tới chính là thời điểm chúng ta thực sự bắt tay vào việc này.
- Và vì vậy, tôi muốn bạn xem đây như một bản xem trước.
- Đây là một đoạn giới thiệu.
- Bạn không cần phải hiểu hết tất cả những điều này.
- Có thể bạn đã biết tất cả những điều này.
## Phan 3

### Muc 7

- Trong trường hợp đó, bạn có thể thúc giục tôi nhanh chóng, giao cho tôi hai nhiệm vụ.
- Nhưng nếu bạn mới bắt đầu tập huấn, nếu bạn chưa từng tập huấn mô hình trước đây, hãy cân nhắc điều này.
- Chỉ cần cung cấp cho bạn một số thông tin, giúp bạn có được một số hiểu biết cơ bản về một số thuật ngữ và một số công việc chúng ta sẽ thực hiện, vì chúng ta sẽ sử dụng mô hình mạng thần kinh cơ bản (vanilla neural network) cho quá trình đào tạo.
- Chỉ để chúng ta đã có lần thử nghiệm đầu tiên với nó.
- Vậy đào tạo là gì?
- Lúc này, tôi tin rằng điều này đã khá rõ ràng với bạn.
- Nhưng việc đào tạo đang nói rằng, được rồi, chúng ta có một mô hình học máy.
- Nó chứa các thông số bên trong.
### Muc 8

- Các thông số này quyết định cách hệ thống sẽ thực hiện dự đoán dựa trên các đầu vào.
- Và học máy truyền thống.
- Bạn thường có từ 2 đến 20 tham số như vậy trong các mạng nơ-ron sâu sử dụng học sâu hiện đại.
- Các mô hình ngôn ngữ lớn (LLMs) có thể có hàng triệu, thậm chí hàng tỷ, đôi khi lên đến hàng nghìn tỷ tham số.
- Các tham số này được điều chỉnh trong quá trình huấn luyện để mô hình ngày càng trở nên chính xác hơn trong việc dự đoán đầu ra dựa trên đầu vào.
- Nhưng không chỉ đơn thuần là dự đoán các kết quả trong dữ liệu đào tạo, mà còn phải làm điều đó theo cách có thể tổng quát hóa, sao cho không chỉ có thể dự đoán kết quả, mà sau khi đào tạo, khi được cung cấp đầu vào mới ở giai đoạn suy luận, nó vẫn hoạt động tốt trên đầu vào đó.
- Và cách bạn tiến hành đào tạo nên phù hợp.
- Nó nên khuyến khích khả năng tổng quát hóa của mô hình, vì mô hình đang nhận diện các mẫu chung trong dữ liệu, thay vì cố gắng xác định chính xác đầu vào là gì.
### Muc 9

- Và điều đó sẽ dẫn đến hiện tượng quá khớp (overfitting).
- Được rồi.
- Hy vọng là điều đó đã rõ ràng.
- Vậy khi bạn thực sự tiến hành đào tạo, bạn thực hiện qua bốn bước khác nhau.
- Và bạn thực hiện bốn bước này nhiều lần với những lượng dữ liệu nhỏ, bạn có thể thực hiện từng điểm dữ liệu một, nhưng thông thường bạn nhóm dữ liệu thành các khối gọi là lô.
- Và sau đó, đối với mỗi lô, bạn thực hiện bốn bước sau.
- Vậy bốn bước trong quá trình đào tạo là gì?
- Chúng có một số tên gọi khác nhau.
## Phan 4

### Muc 10

- Tôi sẽ giới thiệu cho bạn một số thuật ngữ.
- Và sau này trong khóa học, chúng ta sẽ đi sâu hơn vào ý nghĩa của từng khái niệm đó.
- Bước đầu tiên trong bốn bước được gọi là bước truyền về phía trước (forward pass), và đây là một thuật ngữ chuyên môn để chỉ một quy trình rất đơn giản: bạn được cung cấp một số đầu vào trong dữ liệu đào tạo và bạn chỉ cần tính toán, đi qua mạng thần kinh để xác định dự đoán là gì dựa trên các đầu vào đó.
- Đó được gọi là đường chuyền về phía trước.
- Và bước thứ hai được gọi là tính toán tổn thất.
- Và đây là lúc bạn có dự đoán này.
- Nhưng vì đó là dữ liệu đào tạo, bạn cũng có dữ liệu tham chiếu.
- Đây là mũ của tôi.
### Muc 11

- Bạn cũng đã được trao cho y.
- Và bạn có thể nói rằng chúng khác nhau như thế nào.
- Tôi đã sai lầm đến mức nào.
- Tôi đã làm tệ đến mức nào.
- Và đó được gọi là tổn thất.
- Và đó là bước quan trọng thứ hai trong quá trình đào tạo.
- Và bước thứ ba được gọi là bước lùi.
- Và phép truyền ngược đang nói rằng, được rồi, bây giờ chúng ta đã có sự mất mát này, nó xuất phát từ việc thực hiện phép truyền thuận.
### Muc 12

- Cuối cùng, chúng ta đã phải chịu một thất bại.
- Điều chúng ta sẽ làm bây giờ là đi ngược lại qua mạng thần kinh và xem xét xem việc điều chỉnh từng thông số một chút có ảnh hưởng như thế nào.
- Nó làm cho tổn thất lớn hơn hay nhỏ hơn?
- Nó cải thiện tình hình hay làm cho nó tồi tệ hơn?
- Và việc đó cũng được gọi là tính toán gradient.
- Có lẽ điều này nghe có vẻ quen thuộc với bạn.
- Nó nên có một chút kiến thức về giải tích từ môn toán trung học.
- Và đúng là như vậy.
## Phan 5

### Muc 13

- Đó là một số phép tính vi phân được thực hiện để xác định mức độ nhạy cảm của từng tham số, hoặc mức độ nhạy cảm của hàm mất mát khi thay đổi từng tham số một, và tính toán điều đó cho toàn bộ mạng thần kinh.
- Và bước thứ tư sau khi bạn đã hoàn thành các bước trên được gọi là tối ưu hóa.
- Điều này liên quan đến việc thực hiện một bước nhỏ theo hướng đó, điều chỉnh từng thông số một chút, để lần sau khi bạn điều chỉnh theo hướng đó, kết quả sẽ tốt hơn một chút, giúp giảm thiểu tổn thất.
- Và đó cũng được gọi là phương pháp gradient ngẫu nhiên.
- Ít nhất đó là một trong những cách mà bạn có thể làm điều đó.
- Một trong những cách đơn giản nhất là thực hiện bước nhỏ này theo hướng sẽ giúp giảm thiểu tổn thất của bạn nếu bạn nhận được cùng các đầu vào đó một lần nữa.
- Đó là ý tưởng.
- Bốn bước tính toán tổn thất trong quá trình truyền ngược, tối ưu hóa trong quá trình truyền ngược.
### Muc 14

- Và bạn thực hiện điều này cho từng phần dữ liệu nhỏ của mình, lặp đi lặp lại nhiều lần.
- Và mỗi lần bạn thực hiện điều đó, bạn chỉ đang điều chỉnh các trọng số trong mạng thần kinh của mình để lần sau nó sẽ hoạt động tốt hơn một chút.
- Và nếu bạn đã biết điều này, có lẽ bạn cũng biết rằng tôi đang đơn giản hóa quá mức ở một số điểm.
- Nhưng ý tưởng này chỉ nhằm giúp bạn có cái nhìn tổng quan về điều này.
- Và có thể bạn đang nghĩ, tôi thậm chí còn không biết mạng thần kinh là gì, huống chi là hiểu những bước này có nghĩa là gì.
- Trong trường hợp đó, đừng lo lắng về điều đó.
- Chúng tôi sẽ làm nhiều hơn nữa theo thời gian.
- Ý tưởng này là một khóa học thực tiễn.
### Muc 15

- Trước hết và trên hết, chúng ta sẽ tiến hành các hoạt động.
- Và tôi hy vọng rằng một số lý thuyết như vậy sẽ dần dần ảnh hưởng đến bạn trong quá trình bạn tiếp thu.
- Đó là cách mà tôi thích học hỏi.
- Tôi thích học hỏi thông qua thực hành, và sau đó là tiếp thu những kiến thức như thế này, đồng thời thỉnh thoảng được tiếp xúc một chút, một chút lý thuyết.
- Và đó chính là điều này.
- Vì vậy, lý do tôi trình bày cho các bạn bốn bước này là vì chúng ta sẽ đi vào mã nguồn và huấn luyện một mạng thần kinh, và các bạn sẽ thấy bốn bước này.
- Và mỗi bước trong bốn bước đó chỉ cần một dòng mã.
- Đơn giản thế thôi.
## Phan 6

### Muc 16

- Vậy là bây giờ bạn đã biết điều gì sẽ xảy ra.
- Và một điểm cuối cùng cần lưu ý về vấn đề này là có một số thiết lập liên quan đến cấu hình tổng thể của quá trình đào tạo hoặc mạng thần kinh của bạn, nhưng những thiết lập này không phải là các tham số trong mô hình được điều chỉnh trong quá trình đào tạo.
- Đó chỉ là các cài đặt chung điều khiển mọi hoạt động mà bạn đang thực hiện.
- Một trong số đó, ví dụ, là kích thước của các lô này.
- Tôi đã đề cập rằng dữ liệu của bạn được chia thành các lô như vậy.
- Số bit dữ liệu trong mỗi lô là một trong những thông số, nhưng nó không phải là một trong những thông số có thể điều chỉnh.
- Và những thông số này không phải là thông số mô hình thực sự.
- Chúng chỉ là một số thông số bổ sung.
### Muc 17

- Chúng được gọi là các siêu tham số.
- Chúng khá chung chung.
- Chúng ảnh hưởng đến mọi thứ, các siêu tham số.
- Và tôi đã đề cập đến từ đó trước đây trong bối cảnh của một khái niệm gọi là tối ưu hóa siêu tham số.
- Và đó là việc điều chỉnh một số tham số siêu (hyperparameters) này.
- Và tôi đã đề cập đến một vài người ở đây.
- Thời kỳ và tốc độ học.
- Epoch là số lần bạn lặp qua toàn bộ tập dữ liệu của mình.
### Muc 18

- Bởi vì thông thường, bạn không chỉ chạy qua toàn bộ dữ liệu một lần trong quá trình đào tạo, mà bạn sẽ thực hiện điều đó thêm một vài lần nữa, đôi khi lên đến 10 hoặc 20 lần, để xem liệu mỗi lần thực hiện có mang lại lợi ích ngày càng lớn hơn hay không.
- À, vậy epoch là một siêu tham số khác.
- Số epoch và tỷ lệ học, tức là, ừm, mức độ, ừm, mức độ của bước nhỏ đó khi bạn thực hiện bước nhỏ đó trong quá trình tối ưu hóa, bước đó lớn đến mức nào?
- Bạn có thể làm cho nó thực sự, thực sự, thực sự nhỏ.
- Hoặc bạn có thể làm nó, bạn biết đấy, to hơn một chút.
- Và có những mẹo để thực hiện các việc như bắt đầu với những bước khá lớn và dần dần giảm bớt chúng, để bạn có thể bắt đầu thực hiện những bước nhỏ hơn và nhỏ hơn.
- Việc thay đổi tất cả các thông số epoch và learning rate được gọi là tối ưu hóa siêu tham số (hyperparameter optimization) vì bạn đang tối ưu hóa các siêu tham số của mình.
- Và điều đó nghe có vẻ như là tối ưu hóa siêu tham số công nghệ cao.
## Phan 7

### Muc 19

- À, và à, đúng vậy, đó cơ bản là một cách để thử nghiệm nhằm tìm ra bộ tham số siêu tối ưu mang lại kết quả tốt nhất.
- Và điểm mấu chốt là cách mà mọi người thực hiện điều này về cơ bản là thử và sai, rằng mọi người đưa ra rất nhiều phương pháp phức tạp để tìm kiếm qua tất cả các giá trị có thể.
- Nhưng cuối cùng, đó chỉ là quá trình thử và sai.
- Và vì vậy, khi bạn nghe một nhà khoa học dữ liệu nói rằng họ rất bận rộn vì đang thực hiện tối ưu hóa siêu tham số, bạn biết rằng đó chỉ là cách nói hoa mỹ cho việc họ đang thử nghiệm và điều chỉnh.
- Họ cứ thế, ồ, thử kích thước lô này và kích thước lô kia xem sao.
- Và thế là xong.
- Đó là các tham số siêu.
- Đó là tối ưu hóa tham số siêu.
### Muc 20

- Hãy thử nói câu đó ba lần.
- Và chúng ta sẽ thực hiện một số điều đó ngay sau đây.
- Và thế là chúng ta bắt đầu thôi.
- Hãy cùng nhau đến biên giới.
- Hãy xem các mô hình khác nhau có thể hoạt động như thế nào với vấn đề dự đoán giá sản phẩm của chúng ta.
- Đi thôi.
- Được rồi, chúng ta đang ở Cursa.
- Hãy đến tuần thứ sáu.
### Muc 21

- Hãy đến ngày thứ tư.
- Đã là ngày thứ tư rồi.
- Đây là nó.
- À, giá cả hợp lý.
- Dự án tốt nghiệp.
- À, thứ tự thi đấu.
- Chúng ta đang ở ngày thứ tư, học sâu và al Alam's.
- Hãy xem này.
## Phan 8

### Muc 22

- Chúng tôi có rất nhiều mặt hàng nhập khẩu khác nhau ở đây, và bạn có thể thấy một số sản phẩm thú vị.
- Có một ngọn đuốc nhập khẩu.
- Chúng ta sẽ sử dụng PyTorch.
- À, và à, vậy nên hôm nay sẽ trở nên khá hấp dẫn.
- À, đợi đã, tôi sẽ xóa hết những thứ đó.
- Nhưng bây giờ chúng ta bắt đầu từ đầu, được chứ.
- Vì vậy, một lần nữa, bạn có thể chọn chế độ sáng là false hoặc true.
- Tôi khuyên bạn nên bắt đầu với true.
### Muc 23

- Hôm nay chúng ta có rất nhiều việc phải làm, ừm, khi chúng ta tiến hành đào tạo.
- Nhưng tôi sẽ làm giả.
- Tôi sẽ sử dụng một bộ dữ liệu đầy đủ với 800.000 điểm dữ liệu.
- Hãy nhớ bỏ qua ghi chú này.
- Điều đó không quan trọng.
- Chúng tôi đã đăng nhập vào Hugging Face.
- Và bây giờ chúng ta sẽ tải vào bộ dữ liệu đầy đủ.
- À, và lúc này bạn sẽ tải dữ liệu nhẹ vào.
### Muc 24

- Hãy để nó tải ngay tại đây.
- Được rồi, trong khi điều đó đang diễn ra, hãy để tôi giới thiệu với bạn phần tiếp theo.
- Phần tiếp theo sẽ là một bất ngờ dành cho bạn.
- Một bất ngờ nhỏ mà có thể bạn không ngờ tới.
- À, vậy, ừm, chúng ta sắp bắt đầu tìm hiểu về mạng thần kinh nhân tạo khi so sánh cách hoạt động của mạng thần kinh với các phương pháp học máy truyền thống.
- Và tôi chợt nghĩ rằng trước khi làm điều đó, có một loại mạng thần kinh khác mà chúng ta có thể muốn thử nghiệm trước khi xem xét hiệu suất của mạng thần kinh nhân tạo trên vấn đề này.
- Có vẻ như sẽ là một ý kiến hay nếu thử nghiệm một mạng thần kinh ít nhân tạo hơn.
- Chúng ta nên xem con người thực hiện nhiệm vụ này như thế nào.
## Phan 9

### Muc 25

- Tôi đã nói với bạn rằng đó là một nhiệm vụ khó khăn.
- Đoán giá của một sản phẩm không dễ dàng như bạn nghĩ.
- Và, bạn biết đấy, tôi có thể dễ dàng nói điều đó, nhưng chúng ta không thể chắc chắn trừ khi chúng ta thử.
- Vì vậy, theo tôi, việc hợp lý nhất là tôi nên ra ngoài và tiếp xúc với một nhóm người, thu thập mô tả về các sản phẩm và ước tính chi phí dựa chỉ trên mô tả của sản phẩm.
- À, và thế là tôi ra ngoài làm việc đó, và tôi nhanh chóng nhận ra rằng không có con người nào, không có con người nào sẵn sàng tự mình chịu đựng sự nhục nhã khi phải đưa ra giá sản phẩm dựa trên mô tả, ít nhất là không có con người nào.
- Đó là, ừm, đó là một người bạn thân thiết của tôi đến mức có thể làm điều đó.
- À, và cuối cùng, sau một thời gian dài, tôi đã tìm được một người sẵn sàng chịu đựng điều này, và người đó, tất nhiên, chính là tôi.
- À, không ai khác sẽ làm điều đó.
### Muc 26

- Tôi buộc phải làm điều đó.
- À, và thế là.
- Vậy trước hết, bạn vui lòng, ừm, ừm, chuẩn bị trước.
- Bạn nên lấy tờ giấy và bút mà chúng ta đã sử dụng trước đây với mô hình cho đến nay.
- Chúng ta cần phải thêm một người cụ thể vào danh sách này để xem công việc này như thế nào.
- Vậy nên điều đầu tiên tôi làm là viết một đoạn mã nhỏ để lấy 100 mục kiểm tra đầu tiên.
- Có lẽ tôi nên làm 200 để nhất quán với mọi thứ khác.
- Nhưng tôi phải nói với bạn, điều này suýt nữa đã giết chết tôi.
### Muc 27

- 100 là mức tối đa mà tôi sẵn sàng làm.
- Nếu bạn sẵn sàng tự mình làm 200 và trải qua thử thách này, thì hãy cứ làm đi.
- Vậy là tôi đã tạo một tệp CSV có tên là Human Human trong CSV.
- Và đây là khi chúng ta mở nó ra, nó trông như thế này.
- Đây chỉ là một tập hợp các mô tả trong một tệp được phân tách bằng dấu phẩy, mà bạn có thể tải vào các ứng dụng như Microsoft Excel hoặc Google Sheets và sử dụng nó như một cách để, ừm, xin lỗi, như một cách để, để có một tệp mà bạn có thể điền vào, xem xét và điền vào dự đoán của mình về giá của sản phẩm đó.
- Và tôi khuyến khích bạn làm điều đó, nhưng tôi chắc chắn sẽ không ép buộc bạn phải làm.
- Và bây giờ tôi sẽ đọc những gì tôi đã ghi vào đó.
- À, vậy là tôi đã tự mình trải qua điều đó.
## Phan 10

### Muc 28

- Đã mất rất nhiều thời gian của tôi.
- Nó khó hơn nhiều so với những gì bạn tưởng tượng.
- Nó khó khăn hơn nhiều.
- Và tôi nên tiết lộ rằng tôi đã làm điều này cách đây một năm.
- Và khi tôi làm điều đó cách đây một năm, tôi đã làm nó một cách trọn vẹn.
- Tôi nghĩ rằng tôi đã làm điều đó với khoảng 250 sản phẩm.
- Và, tôi có thể nói với bạn rằng điểm số của tôi đã cải thiện từng năm.
- À, nhưng mà, à, thôi thì tôi sẽ không tiết lộ hết đâu.
### Muc 29

- Bạn biết đấy, bạn có thể đưa ra một dự đoán.
- Bạn nghĩ tôi sẽ làm ở đâu?
- Tôi sẽ cách xa bao nhiêu?
- Và tôi sẽ so sánh như thế nào với các mô hình hồi quy và học máy truyền thống?
- Và sau đó chúng ta sẽ xem liệu tôi có thể bị đánh bại bởi các mạng thần kinh sâu hay không.
- À, vậy tôi có một hàm này, hàm định giá con người, một hàm tương tự như các hàm khác của chúng ta.
- Và điều nó làm là tra cứu chỉ số của mục được truyền vào, sau đó tra cứu mục đó trong tệp CSV mà tôi vừa ghi ra, bạn thấy đấy.
- Vậy nên, về cơ bản, nó chỉ đơn giản là thực hiện một thao tác tra cứu.
### Muc 30

- Thế là xong.
- Và do đó, chúng ta sẽ có thể so sánh kết quả của mình song song.
- Và trước tiên, chúng ta hãy xem xét mục kiểm tra đầu tiên.
- Hãy xem tôi đã nói gì.
- Và chúng tôi sẽ in giá thực tế.
- Và sau đó, con người này đã dự đoán giá cả như thế nào.
- Giá thực tế mà tôi dự đoán là $120, nhưng thực tế nó đã lên đến $219.
- Điều này không hứa hẹn gì tốt đẹp.
## Phan 11

### Muc 31

- Và thế là, không cần phải nói thêm, chúng ta hãy bắt đầu.
- Tôi có kích thước bằng 100.
- Xin lỗi.
- Hãy loại bỏ cái đó.
- Tôi có kích thước bằng 100.
- Chúng ta sẽ gọi nó là "đánh giá" giống như trước đây.
- Hãy xem điều gì sẽ xảy ra.
- Được rồi, bắt đầu nhé.
### Muc 32

- Dưới đây là kết quả.
- À, làm cho cái này nhỏ hơn một chút.
- Ừm, đúng vậy.
- Ý tôi là, nó thật sự vô vọng.
- Thật sự là vô vọng, tôi e là vậy.
- Tôi đã làm đội thất vọng.
- Tôi đã làm thất vọng Đội Nhân loại.
- Tôi đã làm một công việc tồi tệ.
### Muc 33

- Tôi đã sai lệch trung bình $87.
- Vậy, ừm, hãy lấy tờ giấy của bạn ra và ghi "người" hoặc "biên tập viên", vì có thể bạn có thể làm tốt hơn.
- Chúng ta nên đặt biên tập viên đại diện cho nhân loại.
- Tôi đã kiếm được $87.62.
- Đó là cách tôi đã sai lầm như thế nào.
- Và nếu so sánh điều đó, điều đó có nghĩa là, được rồi, tôi đã đánh bại các số ngẫu nhiên.
- À, và tôi đã vượt qua việc chỉ đoán trung bình, à, và, à, tôi đã vượt qua hồi quy tuyến tính, chỉ là hồi quy tuyến tính truyền thống.
- Nhưng tôi đã bị đánh bại bởi mô hình hồi quy tuyến tính ngôn ngữ tự nhiên, đạt 76,8%, bị Random Forest đánh bại một cách dễ dàng và rõ ràng là bị XGBoost vượt qua một cách áp đảo.
## Phan 12

### Muc 34

- Điều này thật đáng xấu hổ khi một mô hình học máy truyền thống lại có thể vượt trội hơn tôi.
- Tôi rất mong được biết liệu có ai đã chấp nhận lời đề nghị này của tôi chưa.
- Để tôi kể cho bạn nghe.
- Nhưng nếu ai đó cảm thấy sẵn lòng thử nghiệm và trải nghiệm, thì tôi rất muốn biết liệu chỉ có mình tôi là vô vọng hay không, nhưng có một điều tôi muốn chia sẻ với bạn.
- Tôi muốn nói với bạn rằng khi tôi làm điều này vào năm ngoái, lỗi của tôi là, tôi nghĩ là 126.
- Thật là thất vọng và tồi tệ, nhưng ít nhất thì điểm số này cũng đã cải thiện so với trước đây.
- Tôi đã học được điều gì đó trong năm qua.
- Tôi có khả năng đoán giá của một món đồ dựa trên mô tả tốt hơn một chút.
### Muc 35

- Nhưng điều bạn cũng sẽ nhận thấy ở đây là hệ số xác định (R²) của tôi rất nhỏ.
- Tôi có ích hơn một chút so với việc chỉ tính trung bình.
- Và một lần nữa, tôi muốn nói với các bạn rằng khi tôi làm điều này vào năm ngoái, một cách đáng xấu hổ và nhục nhã, tôi đã đạt được giá trị r bình phương âm.
- Điều đó có nghĩa là nếu bạn đi mua sắm cùng tôi và thấy một thứ gì đó như, ồ, tôi thấy món đó hay đấy, thì bạn nên đoán giá trung bình thay vì hỏi tôi cố gắng nói xem nó giá bao nhiêu.
- Nếu chỉ đoán trung bình như năm ngoái, tôi sẽ tệ hơn, nhưng năm nay là một con người mới của tôi.
- Tôi đã học được điều gì đó.
- Tôi chỉ nhỉnh hơn một chút so với việc đoán trung bình, và tôi cần lưu ý rằng đây thực tế là bộ dữ liệu kiểm tra khác so với năm ngoái.
- Nếu bạn chỉ đang suy nghĩ, nhưng bạn đã có cơ hội thứ hai để làm điều tương tự, thì nó đã khác.
### Muc 36

- Một bài kiểm tra khác và tôi đã làm tốt hơn.
- Bạn có thể xem một số điều mà tôi đã làm không tốt bằng cách xem qua đây.
- Canon EOS Rebel.
- Ồ, vậy à, tôi hiểu rồi, tôi hiểu rồi.
- Tôi nghĩ rằng nó sẽ tốn $400.
- À, đó giống như một chiếc máy ảnh DSLR, một chiếc máy ảnh chuyên nghiệp thực sự.
- Và thực tế, nó có giá $800.
- Và tôi nghĩ là 400, tôi không biết.
## Phan 13

### Muc 37

- Ừm, ừm, thế là xong, thế là xong.
- Bạn có thể di chuột qua và xem những, những dự đoán đáng khinh bỉ mà tôi đã đưa ra.
- Được rồi.
- Thế là xong.
- Đó là con người của chúng ta.
- Đó chính là tiêu chuẩn được đặt ra.
- Và nói thật lòng, điều này có vẻ hơi ngớ ngẩn, nhưng thực ra đây là một thói quen tốt để hiểu rõ mức độ hiệu suất của con người, từ đó có thể so sánh xem các mô hình hoạt động như thế nào.
- Đã đến lúc chúng ta cùng nhau tìm hiểu về mạng nơ-ron đầu tiên của mình.
### Muc 38

- Vì vậy, rõ ràng chúng ta sẽ không đi sâu vào các mạng nơ-ron cơ bản vì đó không phải là nội dung chính của khóa học này.
- Đó là về Hệ thống Quản lý Học tập (LMS).
- Nhưng chúng ta làm điều này như một cách để có cái nhìn đầu tiên về việc huấn luyện mô hình và cái nhìn đầu tiên về việc vận hành mạng nơ-ron trước khi tiến hành huấn luyện chính thức vào tuần tới.
- Và tất nhiên, chúng tôi đã tiến hành một số khóa đào tạo vì trước đây chúng tôi đã đào tạo một số mô hình truyền thống, như hồi quy tuyến tính.
- Nhưng bây giờ chúng ta sẽ huấn luyện một mạng thần kinh.
- Vậy việc đầu tiên chúng ta làm là lấy dữ liệu đào tạo, sau đó chúng ta sẽ lấy giá của từng mặt hàng, chuyển nó thành một mảng numpy và gọi nó là y, đây chính là kết quả thực tế (ground truth) mà bạn thường sử dụng.
- Và tôi sẽ tạo một thư mục có tên là "documents", chứa tất cả các bản tóm tắt của tất cả các mục.
- Vậy là bây giờ chúng ta đã có các tài liệu và mọi thứ đều ổn.
### Muc 39

- Vậy chúng ta sẽ sử dụng Countvectorizer một lần nữa để tạo ra một vector cho mỗi tài liệu, một vector chỉ bao gồm các số để biểu thị liệu sản phẩm có xuất hiện trong đó hay không.
- Tôi sẽ không sử dụng Countvectorizer, mặc dù họ nói rằng họ đang sử dụng nó.
- Hãy để tôi thay đổi điều đó bằng cách sử dụng Vectorizer băm Vectorizer băm tương tự như Countvectorizer.
- Đơn giản là hiệu quả hơn.
- Nó nhanh hơn nhiều.
- Và ừm, bạn có thể hỏi, tại sao, tại sao, tại sao lại làm vậy?
- Tại sao không luôn sử dụng bộ vectơ hóa băm?
- Nhược điểm duy nhất là bộ vectơ hóa băm không thể cho bạn biết những từ nào đã được chọn.
## Phan 14

### Muc 40

- Nó chuyển đổi mọi thứ thành các giá trị băm và mọi thứ được thực hiện chỉ bằng các con số.
- À, và bạn không thể quay lại.
- Bạn không thể xem những từ tiếng Anh nào đã được chọn.
- Và trước đó, tôi muốn cho bạn xem những từ tiếng Anh thực sự là gì.
- Vậy bây giờ chúng ta không cần phải biết điều đó nữa.
- Chúng tôi tin rằng nó đang chọn những từ phổ biến nhất.
- Và chúng ta sẽ sử dụng bộ véc-tơ hóa băm, vốn nhanh hơn.
- Và chúng ta sẽ sử dụng 5000 từ, không phải 2000, để có một vốn từ vựng phong phú hơn.
### Muc 41

- Và tôi cũng có cái này ở đây.
- Biến nhị phân này bằng true.
- Binary equals true có nghĩa là không đếm số lần xuất hiện của một từ như "luxury" hoặc "Samsung" hoặc bất kỳ từ nào khác trong đó, mà chỉ đặt giá trị 0 nếu từ đó không xuất hiện, và đặt giá trị 1 nếu từ đó xuất hiện bất kỳ số lần nào.
- Và việc sử dụng các giá trị nhị phân 0 hoặc 1 là truyền thống khi làm việc với mạng thần kinh.
- Tất nhiên, mỗi phương pháp đều có ưu và nhược điểm, bạn có thể thử nghiệm cả hai.
- Tôi đã thực hiện điều này với một phiên bản nhỏ hơn của nó, và kết quả là đúng, chỉ tốt hơn một chút.
- Và nói chung, việc sử dụng nhị phân theo cách này được coi là phổ biến hơn.
- Nó đôi khi được gọi là một vectơ nóng.
### Muc 42

- Khi bạn có một vectơ chỉ chứa các giá trị 0 hoặc 1, tùy thuộc vào việc giá trị đó có hiện diện hay không.
- Được rồi.
- Và sau đó, chúng ta thực hiện Vectorizer Fittransform.
- Và đó chính là điều sẽ diễn ra ngay bây giờ.
- Và nó sẽ thay thế mọi tài liệu bằng một thứ gì đó có, ừm, 5.000 số 0 hoặc 1 liên quan đến 5.000 từ phổ biến nhất.
- Vậy đó là những gì chúng ta đã làm trước đây với hồi quy tuyến tính.
- Nó chạy nhanh hơn nhiều bây giờ.
- Và chúng tôi có 5.000 cái.
## Phan 15

### Muc 43

- Được rồi.
- Đã đến lúc giới thiệu một mạng thần kinh.
- Vậy đây là nó.
- Đây là mạng thần kinh của chúng tôi.
- Đây là một lớp con của một lớp PyTorch có tên là module.
- Và đó là toàn bộ nội dung của nó.
- Bạn có thể đang nghĩ, ồ, chắc hẳn phải có rất nhiều công nghệ để xây dựng một mạng thần kinh.
- PyTorch khiến việc này trở nên vô cùng dễ dàng.
### Muc 44

- Đây là một mạng thần kinh tám lớp, chỉ là một mô hình mà tôi đã xây dựng.
- À, tôi nghĩ là tám lớp.
- Không có định nghĩa cố định nào về những yếu tố làm cho một mạng thần kinh trở thành một mạng thần kinh sâu.
- Mạng nơ-ron sâu có nghĩa là có nhiều lớp, nhưng không có định nghĩa cụ thể về điều gì làm cho nó trở nên sâu.
- À, tám lớp có lẽ chưa đủ để gọi là sâu.
- Có thể nói nó rất sâu sắc.
- Thích.
- Bạn có thể nói rằng bất kỳ thứ gì có hơn vài lớp đều được coi là phức tạp, nhưng có lẽ tám lớp vẫn chỉ là một mô hình đơn giản hoặc chỉ là một mạng thần kinh.
### Muc 45

- À, vậy đó là những gì chúng ta có ở đây.
- Tám lớp.
- Và bây giờ tôi sẽ không đi vào chi tiết về cách các lớp này được cấu thành.
- Nhưng đối với những người đã có kinh nghiệm với điều này, chúng cơ bản là các lớp tuyến tính với hàm kích hoạt ReLU sau mỗi lớp.
- Và đó là cách bạn thiết lập tất cả các lớp của mình trong hàm tạo (constructor) trong hàm init, sau đó bạn có hàm forward này.
- Bạn có thể nhớ từ đó vì đó là cách chúng ta gọi quá trình truyền qua mô hình để thu được kết quả đầu ra.
- Và điều đó đơn giản là lấy kết quả đầu ra của từng lớp trong mạng thần kinh bằng cách gọi lớp trước đó và sau đó áp dụng hàm kích hoạt ReLU.
- Làm điều đó tám lần.
## Phan 16

### Muc 46

- Kết quả được hiển thị.
- Nếu bạn không biết về điều này, điều đó không quan trọng.
- Ý tưởng là để có được một chút cảm nhận.
- Chúng tôi có một hệ thống tính toán gồm tám lớp.
- Mỗi phép tính này giống như rất nhiều phép hồi quy tuyến tính nhỏ, rất nhiều phép tính kiểu Little Mix.
- Nếu bạn đã xem video YouTube của tôi, có tám lớp trong đó và kết quả đầu ra sẽ xuất hiện ở cuối video.
- Đó là tất cả.
- Chúng ta vừa mới định nghĩa mạng thần kinh của riêng mình.
### Muc 47

- Nó rất đơn giản.
- Bạn gọi đây là mạng thần kinh cơ bản?
- Thực ra, nó không có gì quá phức tạp, chỉ là phiên bản tiêu chuẩn ngay từ đầu.
- Và điều quan trọng nhất khi xây dựng các mạng thần kinh như thế này là bạn không cần phải thiết kế các đặc trưng một cách đặc biệt.
- Bạn không cung cấp cho nó bất kỳ thông tin cụ thể nào để làm việc, bạn chỉ để nó đi qua.
- Tất cả các thông số của nó đều tự động được thiết lập.
- Điều gì quan trọng trong quá trình đào tạo?
- Được rồi.
### Muc 48

- À, và bây giờ tôi có một số công cụ giúp chuyển đổi các mảng numpy của chúng ta thành các tensor PyTorch, đây là đối tượng PyTorch mà nó có thể làm việc với.
- Và tôi chia dữ liệu đào tạo thành tập huấn luyện và tập kiểm tra, sau đó chuẩn bị mọi thứ sẵn sàng.
- Và sau đó, tôi có một công cụ gọi là Data Loader mà tôi đang sử dụng từ PyTorch, nơi bạn có thể chỉ định một lô dữ liệu, mỗi lô chứa 64 điểm dữ liệu.
- Chúng ta sẽ gom tất cả vào.
- Và chúng tôi đã đưa điều đó vào thiết bị xếp hàng lên tàu hỏa này.
- Và dòng cuối cùng ở đây là mô hình bằng kích thước đầu vào của mạng thần kinh.
- Đó là lúc chúng ta tạo ra mạng thần kinh của mình.
- Điều này sẽ mất rất nhiều thời gian.
## Phan 17

### Muc 49

- Không mất chút thời gian nào.
- Điều đó sẽ được hoàn thành trong vài giây.
- Và chúng ta sẽ có mạng thần kinh của riêng mình.
- Và tôi sẽ in ra số lượng tham số mà chúng ta có trong mạng thần kinh nhân tạo tự chế này.
- Vì vậy, việc này mất nhiều thời gian hơn tôi nghĩ vì nó đang tải tất cả các lớp PyTorch.
- Được rồi.
- 18 giây.
- Vậy nên nó không nhanh như vậy.
### Muc 50

- À, chúng ta hãy in nó ra.
- Số lượng tham số trong mô hình này là 669.000 tham số.
- Vì vậy, số lượng tham số không nhiều so với tiêu chuẩn của LM.
- Nhưng khi nghĩ đến machine learning truyền thống, với tối đa vài trăm tham số, đây thực sự là một con số khổng lồ.
- Được rồi.
- Đã đến lúc chúng ta cần tiến hành một số khóa đào tạo.
- Bạn đã sẵn sàng cho buổi huấn luyện chưa?
- Được rồi, bắt đầu nhé.
### Muc 51

- Tôi sẽ bắt đầu buổi đào tạo.
- Và trong khi nó đang chạy, tôi sẽ giải thích cho bạn về những gì nó làm.
- Nó đi rồi.
- Nó đã tắt.
- Vậy bạn hãy chỉ định cách chúng ta sẽ tính toán khoản lỗ.
- Hãy nhớ rằng sự mất mát là điều quan trọng này.
- Chúng ta sẽ sử dụng sai số bình phương trung bình.
- Tôi nghĩ tôi đã nói với bạn trước đó rằng mặc dù chúng ta xem xét sai số tuyệt đối là con số mà chúng ta tập trung vào vì nó rất cụ thể và rõ ràng.
## Phan 18

### Muc 52

- Trong khoa học dữ liệu, việc sử dụng sai số bình phương trung bình là rất phổ biến.
- Và chúng ta có trình tối ưu hóa này, vậy nó sẽ thực hiện các bước của mình như thế nào.
- Tôi đã đề cập đến thuật toán gradient ngẫu nhiên.
- Đây là một loại tối ưu hóa phức tạp hơn một chút.
- Đây là tỷ lệ học tập.
- Đó là tham số siêu khác, đó là bước nhỏ.
- lại.
- Bạn không cần phải nhớ bất kỳ điều gì trong số này.
### Muc 53

- Điều này chỉ để giúp bạn có cái nhìn tổng quan.
- Được rồi.
- Hai thời kỳ mà tôi đã đề cập.
- Epoch là một siêu tham số.
- Đó là số lần chúng ta phải kiểm tra toàn bộ dữ liệu.
- Vì vậy, cho khoảng thời gian.
- Vậy nên chúng ta sẽ làm tất cả những điều này hai lần, tức là kiểm tra lại tất cả các lô hàng của chúng ta.
- Và sau đó có bốn dòng mã.
### Muc 54

- Và bốn dòng mã này đại diện cho bốn bước trong quá trình đào tạo.
- Hy vọng bạn đã ghi chú lại điều đó ở đâu đó.
- Bạn nhớ bốn bước.
- Chúng là gì?
- Bước đầu tiên.
- Bước đầu tiên là thực hiện quá trình truyền dữ liệu theo hướng trước.
- Và đây là kết quả đầu ra của hàm biểu thức bằng với mô hình được truyền vào trong lô x.
- Và điều đó sẽ cho bạn một số kết quả.
## Phan 19

### Muc 55

- Điều đó sẽ đi qua đường chuyền này.
- Nó sẽ làm tất cả những điều đó.
- Được rồi.
- Đó là bước đầu tiên.
- Bước thứ hai là tính toán tổn thất bằng cách gọi hàm tổn thất với các đầu ra và với giá trị thực của lô y, tức là giá thực tế của các mặt hàng này.
- Mất mát ngược là quá trình đi ngược lại toàn bộ mạng và tính toán các gradient cho tất cả các tham số này.
- Nếu chúng ta điều chỉnh từng thông số này một chút, thì mức độ thay đổi của hàm mất mát sẽ như thế nào?
- Và sau đó, optimizer.step là khi chúng ta thực hiện một bước nhỏ với độ lớn 0.001 theo hướng đó, điều này sẽ làm giảm hàm mất mát một chút.
### Muc 56

- Tại sao chúng ta không thực hiện một bước nhảy vọt lớn?
- Bởi vì nếu chúng ta làm điều đó, chúng ta có thể gặp phải tình trạng quá khớp (overfitting) hoặc có thể đi quá xa.
- Có rất nhiều điều có thể xảy ra sai sót.
- Bạn chỉ muốn thực hiện một bước nhỏ mỗi lần.
- Và điều đó thường dẫn đến việc tổng quát hóa một cách rất tốt.
- Và sau đó chúng ta sẽ tiến hành in ấn.
- Và nó vừa mới hoàn thành.
- Xong rồi.
### Muc 57

- Chúng tôi vừa huấn luyện mạng thần kinh của riêng mình.
- Và bạn cũng có thể đang điều hành điều này.
- Bạn cũng đã làm như vậy.
- Chúc mừng.
- Và bây giờ, chúng ta cần phải thực sự triển khai dự án này.
- Suy luận.
- Điều đó cực kỳ đơn giản.
- Đây là nó.
## Phan 20

### Muc 58

- Đây là quá trình suy luận của mạng thần kinh của chúng tôi.
- Chúng tôi nói với nó rằng chúng tôi không đang tập luyện.
- Chúng tôi kể lại.
- Bạn đã tham gia.
- Bạn không còn ở chế độ huấn luyện nữa.
- Và sau đó chúng ta nhận một mặt hàng.
- Chúng tôi chuyển đổi nó trở lại thành vectơ gồm 5000 số 0 hoặc 1, sau đó chuyển đổi nó thành một đối tượng PyTorch.
- Và chúng ta chỉ cần gọi mô hình của mình với đối tượng này.
### Muc 59

- Và đó là kết quả.
- Đó là tất cả.
- Đó sẽ là quá trình chạy mạng thần kinh của chúng ta.
- Hãy xem kết quả nhé.
- Đây là nó.
- Đây là một mạng thần kinh nhân tạo, cụ thể là một mạng thần kinh nhân tạo tám lớp theo mô hình cơ bản.
- Rất đơn giản mà chúng ta hầu như không phải làm gì cả.
- Nó chạy cực kỳ nhanh.
### Muc 60

- Và kết quả mà chúng ta đạt được là kết quả tốt nhất cho đến nay, cách biệt khá xa.
- Hãy ghi lại.
- Mạng nơ-ron cơ bản đạt 63,97.
- Điều đó thật tuyệt vời.
- Và hệ số xác định R-squared vừa vượt qua mốc 50%.
- Chúng ta đang làm khá tốt về mặt hình ảnh.
- Trông thật tuyệt vời.
- Trông thật tuyệt vời.
## Phan 21

### Muc 61

- À, chúng ta đã đạt được rất nhiều tiến bộ.
- Thật tuyệt vời.
- Và hy vọng rằng, ừm, bạn có thể cảm nhận được một phần những gì đang diễn ra.
- Bạn không cần phải hiểu hết mọi thứ, nhưng bạn có thể cảm nhận được rằng việc thiết lập một mạng thần kinh cơ bản và huấn luyện nó để đạt được kết quả khá tốt thực sự rất đơn giản, chỉ như vậy thôi.
- Tuyệt vời.
- Được rồi, bây giờ đã đến lúc chúng ta chuyển sang LMS.
- Tôi sẽ gặp lại các bạn trong video tiếp theo.
- Vậy là bạn đã có một số hiểu biết về cách thức và quá trình chuyển đổi từ mạng thần kinh sang mô hình ngôn ngữ lớn (LLM), vì chúng ta đã đề cập đến mô hình này trong tuần thứ ba và thấy rằng nó cơ bản là một cấu trúc có nhiều lớp.
### Muc 62

- Và nó cũng tương tự như mạng thần kinh cơ bản mà chúng ta vừa xây dựng, nhưng nó có các lớp phức tạp hơn thực hiện các tác vụ như chú ý, xác định phần nào của lớp trên cùng là quan trọng.
- Nó có rất nhiều thứ liên quan đến các khái niệm như nhúng (embeddings) ở phần trên, mà về cơ bản là nhúng vectơ (vector embeddings).
- Cái mà chúng ta sử dụng cho Rag tương tự như lớp đầu tiên của một trong những mô hình ngôn ngữ lớn (LLM) này.
- Bạn có các lớp chú ý, và sau đó còn có rất nhiều thành phần khác để giúp mô hình có khả năng tổng quát hóa tốt.
- Điều đó đã được tích hợp sẵn trong kiến trúc mạng thần kinh gọi là transformer, một kiến trúc phức tạp hơn nhiều so với thứ đơn giản mà chúng ta đang có ở đây.
- Ý tôi là, nó không phải là quá phức tạp, nhưng nó cũng khá là nhiều hơn.
- Và tất nhiên, chúng lớn hơn rất nhiều, rất nhiều.
- Họ có hàng tỷ hoặc hàng nghìn tỷ tham số, không phải chỉ vài trăm nghìn.
### Muc 63

- Đó chính là điều chúng ta sẽ làm tiếp theo.
- Chúng ta sẽ mở rộng phân tích này để xem xét một mô hình LM thực tế và cố gắng thực hiện cùng một phân tích với mô hình đó.
- Nhưng điểm khác biệt chính là chúng ta sẽ không đào tạo bất kỳ điều gì.
- Chúng tôi sẽ chỉ lấy một mô hình ngôn ngữ (LM) từ kệ và nói rằng, mà không cần bất kỳ đào tạo bổ sung nào, chỉ sử dụng kiến thức cơ bản mà bạn đã có, cùng với kiến thức về thế giới mà bạn đã được trang bị như một phần của $100 triệu mà OpenAI đã đầu tư vào bạn, bạn có thể làm tốt đến mức nào trong nhiệm vụ này?
- Vì vậy, đây là việc sử dụng LM ngay từ kệ, không cần tinh chỉnh.
- Nó có thể thực hiện nhiệm vụ này như thế nào?
- Hãy cùng xem.
- Được rồi, vậy chúng ta hãy đến vùng biên giới.
## Phan 22

### Muc 64

- Chúng ta sẽ xem xét hiệu quả của các mô hình tiên phong khi được triển khai ngay lập tức.
- Không cần đào tạo, chỉ cần suy luận dựa trên kiến thức thế giới của họ, được không.
- Đầu tiên, chúng ta hãy viết một hàm nhỏ.
- Nếu hàm này nhận được một đối tượng, nó sẽ tạo ra một lời nhắc cho mô hình ngôn ngữ (LM).
- Và câu hỏi chúng ta sẽ sử dụng ở đây là "Đoán giá của sản phẩm này".
- Trả lời với giá.
- Không có giải thích.
- À, có lẽ tôi sẽ đưa ra ước tính thay vì đoán mò, có thể sẽ tốt hơn.
### Muc 65

- À, chắc chắn có nhiều tiềm năng để khai thác bằng cách thử nghiệm với lời nhắc này và điều chỉnh nó sao cho phù hợp nhất với từng mô hình.
- Tôi vừa nghĩ ra một ý tưởng nhanh chóng ở đây.
- Nếu bạn muốn dành thời gian thử nghiệm với điều này và xem liệu bạn có thể làm tốt hơn không, đó sẽ là điều thật tuyệt vời.
- Và học sinh đã làm điều này và đạt được kết quả tốt hơn bằng cách áp dụng một số phương pháp thông minh, một số bối cảnh cụ thể ở đây.
- À, và một điều tôi muốn đề xuất là, mặc dù tất cả dữ liệu thử nghiệm đều có giá từ 0 đến $1.000, tôi không nghĩ chúng ta nên giới hạn và nói rằng không có gì có giá cao hơn $1.000, vì chúng ta muốn điều này có thể đại diện cho khả năng định giá bất kỳ thứ gì.
- Chỉ là chúng ta đã giới hạn dữ liệu đào tạo của mình, nhưng chúng ta muốn có kiến thức chuyên môn tổng quát để có thể định giá bất kỳ thứ gì.
- Đó là một điểm tinh tế.
- Nhưng ngoài ra, chúng ta có thể thực hiện điều này.
### Muc 66

- Vậy bây giờ, nếu tôi xem xét mục kiểm tra đầu tiên của chúng ta, hãy xem tóm tắt của nó.
- À, để in cái đó đi.
- Vậy là chúng ta có thể xem nó một cách rõ ràng.
- Xem đây là gì.
- Điều này trông có vẻ khá thú vị.
- À, thực ra, đó là một pedal guitar.
- Một pedal mà bạn sử dụng để biến dạng âm thanh khi chơi guitar điện, và, ừm, nó được gọi là pedal biến dạng và điều chế Excess V2.
- Thương hiệu, nhà sản xuất của nó là một thương hiệu có tên Old Blood Noise.
## Phan 23

### Muc 67

- Tôi là.
- Nếu bạn là một tay guitar, bạn có thể biết đó có phải là một thương hiệu tuyệt vời hay không.
- Bạn có thể tự do bình luận.
- À, và nó có một mô tả về nó.
- Vậy đây là những gì chúng ta cần định giá.
- Vậy nếu chúng ta xem xét các thông điệp mà chúng ta nhận được cho điều đó, chúng ta sẽ nhận được một danh sách các từ điển.
- Chỉ có một vai trò từ điển là người dùng.
- Nội dung là ước tính giá của sản phẩm này, hãy trả lời với giá.
### Muc 68

- Không có giải thích.
- Và đây là chi tiết của nó.
- Vậy bây giờ chúng ta có thể viết một hàm có tên là GPT 41 nano.
- Vậy đó là một hàm tương tự như các hàm mà chúng ta đã viết trước đây, có chức năng dự đoán.
- Và chúng ta sẽ chạy qua trình đánh giá của chúng ta.
- Thay vì chỉ gọi một mô hình hoặc thực hiện các thao tác như đoán giá trị trung bình hay bất kỳ phương pháp nào khác, phương pháp này gọi một mô hình ngôn ngữ (LM).
- Nó thực hiện một cuộc gọi API.
- Tôi đang sử dụng LM nhẹ.
### Muc 69

- Bạn có thể sử dụng OpenAI Create thay thế.
- Chúng tôi sẽ sử dụng mô hình GPT 4.1 nano.
- Và có thể bạn đang thắc mắc tại sao lại như vậy khi đã có năm cái rồi.
- Và có thể đối với bạn là GPT 6 hoặc GPT 7.
- Nhưng đối với tôi, có năm lựa chọn và tôi chọn GPT-4 vì tôi muốn một thứ gì đó rất nhanh, và nó chính là như vậy.
- Và cũng bởi vì khi chúng ta tiến hành tinh chỉnh, chúng ta sẽ muốn bắt đầu với một mô hình khá rẻ tiền.
- Và đây là một ứng cử viên tiềm năng cho việc tinh chỉnh.
- Và chúng tôi muốn so sánh nó với điều này.
## Phan 24

### Muc 70

- Đó là hàm của chúng ta, hàm này tính toán giá trị của, ừm, của cái này.
- Và bây giờ chúng ta hãy chạy nó cho mục kiểm tra đầu tiên.
- Và chúng ta nhận lại $180, vậy bạn có biết chi phí thực tế của việc này là bao nhiêu không?
- Hãy xem $219.
- Vậy GPT-4 Nano không còn xa nữa.
- Được rồi.
- Điều đó thật thú vị.
- Hãy tiến hành đánh giá toàn diện ngay bây giờ.
### Muc 71

- Hãy xem điều gì sẽ xảy ra.
- Nó đi rồi.
- Bạn có thể thấy nó đang hoạt động ở nơi bạn thấy kết quả.
- Bạn thấy chúng có màu xanh lá cây, vàng hoặc đỏ.
- Nếu bạn gặp lỗi giới hạn tốc độ khi chạy lệnh này, hãy nhớ rằng bạn có thể thay đổi giá trị của `workers` thành `1` hoặc `2` để ngăn chương trình thực thi các tác vụ song song nếu gặp lỗi giới hạn tốc độ.
- Và đây là kết quả, có lẽ bạn đã thấy nó trước tôi.
- Đây là biểu đồ 62.51.
- 62.51 là kết quả mà chúng ta nhận được từ GPT 4.1 nano.
### Muc 72

- Ghi lại con số 62,51 và chỉ số R bình phương đang tăng.
- Và ở đây, về mặt hình ảnh, nó trông như thể đã mang lại rất nhiều thứ.
- Con số này thường được đoán là $150.
- Chính xác là cho rất nhiều thứ.
- À, và nó nghĩ rằng thứ gì đó là vô lăng, nó nghĩ sẽ là 1200.
- Vậy nên, nghe này, có thể bạn cảm thấy $62 không phải là số tiền mà bạn mong đợi.
- Nó có thể nghe có vẻ khá cao đối với bạn.
- Nó đã vượt qua mạng nơ-ron cơ bản của chúng tôi, nhưng chỉ một chút.
## Phan 25

### Muc 73

- Chỉ với $1.
- Nhưng vấn đề là thế này.
- Mạng nơ-ron vanilla là mô hình mà chúng tôi đã huấn luyện với 400 lớp, mỗi lớp chứa 800.000 điểm dữ liệu.
- Vì vậy, đây là điều mà chúng tôi đã thực sự rèn luyện để trở nên giỏi trong việc này với lượng dữ liệu khổng lồ.
- Đây là GPT-4 Nano ngay khi mở hộp.
- Không có đào tạo, không có gì cả.
- Chỉ sử dụng kiến thức chung, sử dụng logic thông thường, không sử dụng mô hình được huấn luyện.
- Và nó đã vượt trội hơn so với một mạng thần kinh nhân tạo đã được huấn luyện với dữ liệu giá sản phẩm.
### Muc 74

- Và rõ ràng nó vượt trội hơn hẳn so với mức hiệu suất của con người, vốn chỉ đạt $87,62 - một con số đáng thất vọng.
- Vậy tôi có thể nói đây thực sự là một kết quả khá tốt, khá đáng khen ngợi so với GPT 41 nano.
- Được rồi, bây giờ chúng ta sẽ làm lại điều này cho nhiều mẫu sản phẩm và cả những mẫu sản phẩm đắt tiền nữa.
- Nhưng bạn không cần phải làm điều đó vì tôi đã làm rồi.
- Bạn có thể nhận hết công lao từ kết quả của tôi mà không cần phải tự mình thực hiện.
- Nhưng nếu bạn muốn, bạn có thể làm như vậy.
- Ngay cả với các mô hình đắt tiền, chi phí cũng không quá cao vì đây là những tác vụ rất, rất nhỏ.
- Và bạn cũng có thể, thay vì đặt kích thước là 200 điểm, bạn có thể giảm xuống còn 10 điểm và như vậy sẽ rẻ đến mức khó tin.
### Muc 75

- Không phải.
- Nó đã biến mất khỏi tầm ngắm.
- Vậy chúng ta sẽ thử Claude 4.5, hiện tại đây là mô hình mạnh mẽ nhất của Anthropic và có thể là một trong những mô hình mạnh mẽ nhất trên hành tinh.
- Nhưng dường như mọi người đều có ý kiến trái chiều về việc đánh giá nó so với GPT-5-1 và Gemini-3, hai mô hình lớn nhất hiện nay đối với tôi.
- Tôi chắc chắn rằng mỗi tuần đều có điều mới xảy ra.
- Chắc chắn bạn đã đi trước tôi rất nhiều bước và bạn nên thử nó với các mẫu mới nhất, tất nhiên rồi.
- Vậy đây là nơi chúng ta có thể đánh giá Claude cho tác phẩm, tôi muốn nhắc nhở các bạn, bạn có thể nói kích thước bằng nhau và đặt nó thành mười.
- Nếu bạn muốn giới hạn nó, bạn sẽ nhận được các khoảng tin cậy lớn hơn.
## Phan 26

### Muc 76

- Nhưng điều đó không sao.
- Và bạn cũng có thể nói rằng công nhân bằng một.
- Nếu bạn chưa đăng ký một trong các gói cao cấp hoặc chưa thanh toán để sử dụng một trong các gói cao cấp.
- À, vậy thì tôi sẽ bắt đầu.
- Và thế là nó đi rồi.
- Sẽ chậm hơn một chút vì đây là mô hình lớn hơn, nhưng nó đang hoạt động.
- Và đúng rồi, để làm rõ thêm, khi tôi nói rằng nếu bạn chưa trả tiền để tham gia các cấp độ cao hơn, có thể bạn sẽ thắc mắc tôi đang nói về điều gì.
- Cách thức hoạt động của các nhà cung cấp dịch vụ biên giới này thường là: tùy thuộc vào tổng số tiền bạn đã chi tiêu cho API của họ, họ sẽ chuyển bạn sang một cấp độ khác và bạn có thể tra cứu giới hạn sử dụng của họ.
### Muc 77

- Có các bảng hiển thị các cấp độ khác nhau, và số tiền bạn cần chi tiêu để đạt được cấp độ đó.
- Ở các cấp độ cao hơn, bạn có thể chi tiêu nhiều hơn và chạy nhiều tác vụ song song hơn.
- Và lý do họ làm điều này là để cố gắng khuyến khích bạn chi tiêu nhiều tiền hơn.
- Có thể là vậy, nhưng ít nhất trên bề mặt, lý do họ làm điều đó là vì họ chỉ muốn đảm bảo rằng bạn thực sự có ý định chi tiêu số tiền này.
- Họ muốn đảm bảo rằng chỉ những người có chuyên môn cao mới được phép thực hiện các tác vụ như xử lý nhiều tác vụ song song, nhằm tránh tình trạng ai đó chi tiêu quá mức dự định và tránh các vấn đề liên quan đến API và các vấn đề khác.
- Vậy tôi chắc chắn có rất nhiều lý do cho điều đó, nhưng ít nhất đó là một trong những lý do mà họ muốn đảm bảo rằng bạn đã có một lịch sử chi tiêu cho việc này.
- Đó là điều bạn muốn làm trước khi họ đồng ý cho bạn nâng lên mức giới hạn cao hơn.
- Chúng tôi tin rằng quý vị biết mình đang làm gì, rằng quý vị có ý định chi tiêu số tiền này và rằng quý vị sẽ không bị bất ngờ.
### Muc 78

- Đó chính là lý thuyết đằng sau điều đó.
- À, và, à, điều đó đã cho phép tôi nói lan man về điều đó trong khi, à, Claude, opus 4.5 hoàn thành, à, nếu bạn muốn nâng cấp lên cấp độ cao hơn với OpenAI hoặc Anthropic, hãy xem phần giới hạn tốc độ trên trang web của họ.
- Nó làm cho mọi thứ trở nên cực kỳ rõ ràng về những gì cần thiết.
- Bam!
- Đây là kết quả của chúng tôi.
- Opus 4.5 có giá $47.10 47.10.
- Điều đó thật đáng kinh ngạc.
- Claude 4.7.
## Phan 27

### Muc 79

- Đó được gọi là 4.7.
- Claude 4.5.
- Điểm số 47.10.
- Và đối với những ai đã tham gia khóa học của tôi năm ngoái, các bạn sẽ biết rằng đây chính là con số mà tôi đã đạt được như là kết quả tốt nhất.
- Đây chính là khoảnh khắc kết thúc đầy ấn tượng.
- Vậy là Claude, tác phẩm số 45, đã vượt qua kỷ lục tuyệt đối tốt nhất, tốt nhất, tốt nhất của năm ngoái.
- À, và đây là nó.
- Và, bạn biết đấy, nếu bạn đang tự hỏi bản thân, việc đoán giá của một sản phẩm và sai lệch trung bình $47, điều đó không thực sự ấn tượng.
### Muc 80

- Thì tôi thách thức bạn.
- Hãy tự mình thử xem.
- Đi đi, làm đi, và tao sẽ xóa nụ cười trên khuôn mặt mày.
- Nó khó khăn hơn nhiều so với những gì bạn tưởng tượng.
- Khó khăn hơn nhiều.
- Ồ ồ, bạn có thể nhắn tin cho tôi và nói, "Không, bạn sai rồi." Tôi chỉ cách $3.
- Nhưng mà, nhưng mà, nhưng mà, tôi không tin điều đó.
- Không, không.
### Muc 81

- Vậy, Claude, tác phẩm số 45.
- Ồ, thật sao?
- Kết quả thật tuyệt vời ở đây.
- $47.
- Thật tuyệt vời khi được thấy điều này.
- Xin chúc mừng anthropic.
- Chúc mừng.
- 47 hiện là thành tích tốt nhất của chúng tôi.
## Phan 28

### Muc 82

- Và chúng ta có thể thấy.
- Tất nhiên, chúng ta luôn cần phải kỷ luật và nhận thức rằng có một khoảng sai số liên quan đến điều này, nhưng kết quả vẫn rất tuyệt vời.
- Được rồi, đã đến lúc nói về Gemini 3, hiện tại được coi là phiên bản ấn tượng nhất trong phân tích nhân tạo.
- Đây là mô hình thông minh nhất hiện nay.
- Đối với tôi.
- Một lần nữa, điều này đắt hơn và chậm hơn.
- Vậy nên chỉ chạy lệnh này nếu bạn muốn.
- Tôi có kích thước 20 ở đây và tôi đã phải giảm số lượng công nhân xuống còn hai.
### Muc 83

- Nếu không, tôi đã gặp, ừm, lỗi.
- Vậy chúng ta chỉ sẽ chạy 20 điểm dữ liệu.
- À, tôi đoán đây là cái thật.
- Hãy làm cho nó thành 50.
- À, và tôi sẽ đi pha cà phê và quay lại sau.
- Chúng tôi sẽ khởi động điều này.
- Chúng ta sẽ nhận được 50 kết quả để xem Gemini hoạt động như thế nào.
- Và tôi sẽ để bạn, ừm, chờ một lát vì điều này sẽ mất thời gian.
### Muc 84

- Như bạn thấy, nó vừa mới hoàn thành một việc và đã mất rất nhiều thời gian.
- À, nhưng nó đã làm khá tốt.
- À, nhưng chúng ta sẽ thấy kết quả ngay lập tức.
- Được rồi.
- Vì vậy, việc chạy chương trình với 50 mục đã mất năm phút.
- Vậy nên nó không thực sự nhanh nhẹn.
- Nhưng đây là kết quả của chúng tôi.
- Gemini three Pro Preview đạt được một số điểm khá ấn tượng.
## Phan 29

### Muc 85

- $50.
- Không tốt bằng Claude 4.5.
- Gemini 3 Pro có điểm số 50,54.
- À, và hệ số xác định R² ở đây rất cao.
- R bình phương đến từ đâu?
- Lại từ Claude.
- Hãy cùng xem qua.
- Ồ, điều đó thật thú vị, phải không, rằng hệ số xác định (r²) cao hơn một chút?
### Muc 86

- Ồ, không phải chỉ một chút.
- Cao hơn khá nhiều.
- Chỉ đơn giản là nó làm tốt hơn trong việc nắm bắt các xu hướng.
- Nhưng con số chính mà chúng ta đang xem xét là sai số tuyệt đối.
- Gemini 3 có kết quả gần với Claude, nhưng không tốt bằng Claude trong việc ước tính giá của một sản phẩm chỉ dựa trên mô tả của nó.
- Và tôi cũng có Gemini 25 Flash.
- À, có một tia sáng.
- Thực ra, điều chúng ta có thể làm là sử dụng đèn flash vì điều đó thực sự nhanh chóng.
### Muc 87

- Và điều đó sẽ mang lại cho chúng ta một cách làm việc hiệu quả.
- Hãy xem điều gì sẽ xảy ra ở đây.
- À, và bây giờ hãy thay đổi điều này thành đèn flash.
- À, và chúng ta hãy xem chúng ta sẽ nhận được gì.
- Chờ đã, ừm, từ mẫu sản phẩm nhẹ nhàng, đơn giản nhưng mạnh mẽ này của Gemini.
- Nó nhanh chóng và tiện lợi.
- Nhìn kìa.
- À, và nó có thể chạy song song.
## Phan 30

### Muc 88

- Họ không áp dụng các giới hạn tỷ lệ nghiêm ngặt như vậy.
- Vượt qua mốc 200 của chúng ta.
- Xem cách đèn flash hoạt động như thế nào.
- Và đây là kết quả: 58,68.
- Khá đáng kính.
- Tốt hơn GPT-4 Nano, nhưng chỉ tốt hơn một chút.
- Nhưng điều đó có thể xảy ra.
- Đó là, ừm, đó là đối thủ cạnh tranh của nó trong lĩnh vực này.
### Muc 89

- Gemini 2.5 flash đạt 58,68 điểm.
- À, cho đến nay, người chiến thắng rõ ràng của chúng ta hiện tại là Claude 4.5.
- Còn gì nữa?
- Sao không thử Grock 4.1?
- Mẫu mới nhất của ông Musk dành cho tôi.
- À, có thể bạn đã có phiên bản mới hơn của Grock rồi.
- Tôi đang sử dụng, ừm, tôi đang đi qua ánh sáng.
- LM Tôi đã thiết lập một khóa Grock, mà tôi đã lưu trong tệp Em của mình với tên Xai API key, đây là khóa bạn cần có để có thể chạy ứng dụng này.
### Muc 90

- Tôi đang sử dụng grok cho một tác vụ xử lý nhanh không cần suy luận, và tôi sẽ chạy tác vụ đó trong hàm này.
- Và chúng ta sẽ xem kết quả như thế nào trong giây lát.
- Được rồi, bắt đầu nhé.
- Chạy hàm đó.
- Và bây giờ nó ngừng hoạt động.
- Nó hoạt động mượt mà và nhanh chóng.
- Vì vậy, một lần nữa, như thường lệ, hàm đánh giá mà bạn truyền vào là hàm cần được kiểm tra.
- Và nó đi qua từng điểm kiểm tra này.
## Phan 31

### Muc 91

- Nó gọi hàm này cho từng mục một.
- Và việc quyết định xem điều gì sẽ được kiểm tra phụ thuộc vào cách triển khai chức năng này của chúng ta.
- Tôi không biết bạn có để ý không, nhưng tôi cũng có một đoạn mã thông minh ở đó giúp xác định tiêu đề của biểu đồ dựa trên tên của hàm, để nó có thể gọi nó một cách nhanh chóng.
- Và nó đã lấy điều đó từ tên của hàm.
- Vậy đây là kết quả.
- À, 57.
- À, vậy là, ông Musk, à, khi nói đến, à, ông ấy không làm tốt bằng các mô hình lớn.
- Nhưng đây là phiên bản nhanh của Grok 4.1, và nó hoạt động tốt hơn một chút so với Gemini 2.5 Flash với 7.62.
### Muc 92

- Được rồi.
- Cuối cùng, GPT 5.1, phiên bản đầy đủ và mạnh mẽ nhất, không có gì sánh kịp.
- Bạn có thể lựa chọn mức độ nỗ lực trong việc suy luận.
- Không có.
- Thấp, trung bình và cao.
- Và thực ra, tôi đã phát hiện ra rằng không có phương pháp nào đạt kết quả tốt nhất trong giai đoạn thử nghiệm ban đầu của tôi.
- Vì vậy, việc cho nó cơ hội để suy luận thực sự không giúp ích gì cho nó.
- Nó đã khiến nó mắc sai lầm.
### Muc 93

- Vì vậy, nó hoạt động tốt nhất khi không có gì.
- Và như vậy, chúng ta có thể bắt đầu.
- À, và tôi nghĩ rằng cuộc cạnh tranh giữa hai sản phẩm này sẽ rất gay cấn, đặc biệt là khi so sánh với Claude 4.7.
- Đây là một cuộc đối đầu giữa những người khổng lồ.
- À, Claude.
- Claude 4.7.
- Claude 4.5, đạt 47 điểm, so với GPT 5.1, mà theo tôi là mô hình mạnh nhất của OpenAI hiện tại.
- Đây là cuộc đối đầu giữa hai "ông lớn", hai mẫu sản phẩm vô cùng mạnh mẽ.
## Phan 32

### Muc 94

- Chúng ta sẽ tìm ra ai sẽ giành giải thưởng hôm nay khi dòng này đến cuối, sắp diễn ra ngay bây giờ.
- Và câu trả lời là GPT 5.1.
- Wow.
- Với kết quả thực sự ấn tượng là 44,74, đó là một con số đáng kinh ngạc.
- Đây là kết quả thực sự tuyệt vời ở đây.
- Nó được thực hiện rất, rất tốt.
- Ừm, đúng rồi.
- À, ý tôi là, hình ảnh minh họa đã nói lên tất cả.
### Muc 95

- Bạn có thể thấy rằng GPT-5.1, um, mô hình được coi là mạnh mẽ nhất trên hành tinh hiện nay ở nhiều nơi, chỉ với phiên bản sẵn có mà không cần đào tạo, có thể dự đoán giá trị của một sản phẩm dựa trên mô tả của nó với độ chính xác chỉ chênh lệch $44.74, điều này tốt hơn đáng kể so với bất kỳ mô hình nào của tôi, bao gồm cả những mô hình từ năm ngoái.
- Thật sự đáng kinh ngạc khi thấy chúng ta đã tiến xa đến mức nào.
- Đây là một kết quả tuyệt vời và là cách hoàn hảo để kết thúc nghiên cứu mô hình của chúng ta hôm nay, nhưng bạn có thể tiếp tục.
- Khám phá các mẫu khác.
- Bất kể bạn có quyền truy cập vào gì, bạn đều có thể sử dụng Olama để chạy các mô hình trên máy tính cục bộ.
- Họ thường không làm tốt lắm, nhưng bạn có thể thử và xem kết quả ra sao.
- Hãy thử nghiệm với một số mô hình địa phương bằng cách này, um, tôi đã chạy thử nghiệm này với OSS và nhận được con số khá cao, khoảng 100 và một chút, thực ra, uh, nhưng bạn có thể tự mình thử với các mô hình miễn phí.
- Bạn cũng có thể, nếu có quyền truy cập vào router mở, thử nghiệm nhiều mô hình khác nhau trên router mở.
### Muc 96

- Thật là vui vẻ.
- À, hãy tìm bảng xếp hạng của riêng bạn và xem liệu bạn có thể vượt qua 44.74 không.
- Ngoài ra, hãy thử nghiệm với việc gợi ý.
- Đây là một phương pháp rất hiệu quả để cải thiện con số này.
- Hãy tận hưởng trải nghiệm.
- Hãy xem bạn có thể đạt được và làm được những gì.
- Chia sẻ bất kỳ màn hình nào bạn truy cập.
- Bất kỳ, bất kỳ, bất kỳ cơ hội nào bạn có để vượt qua kết quả của tôi, và tôi sẽ gặp bạn để tổng kết.
## Phan 33

### Muc 97

- Được rồi.
- Và để kết thúc, tôi xin bắt đầu bằng việc cập nhật lại những thông tin mới nhất, bảng xếp hạng và kết quả cho đến nay.
- Bạn sẽ nhớ rằng chúng tôi thậm chí còn không hiển thị câu trả lời ngẫu nhiên ở đây.
- Con số 300 và một số khác đã giúp chúng ta đạt được chỉ số ERA là 106.
- Phương pháp hồi quy tuyến tính đã giảm giá trị xuống còn 102, nhưng chỉ tốt hơn một chút so với hằng số.
- Nhưng khi chúng tôi kết hợp NLP với hồi quy tuyến tính và mô hình "bag of words", tỷ lệ đã giảm xuống còn 77.
- Rừng ngẫu nhiên cho kết quả tốt hơn một chút ngay cả khi sử dụng tập dữ liệu nhỏ.
- XGBoost lại một lần nữa cho kết quả tốt hơn khi sử dụng tập dữ liệu đầy đủ.
### Muc 98

- Hiệu suất ở mức độ con người cực kỳ nhanh chóng dưới hình thức của Ed, ừm, đã thất bại thảm hại.
- À, 8788, nhưng, à, mạng thần kinh cơ bản đã được áp dụng và đạt kết quả tốt ở mức 64.
- Tuy nhiên, GPT-4 One Nano thực sự ấn tượng, ngay cả khi không được đào tạo gì cả.
- Điều này đã được đào tạo trên 800.000 ví dụ.
- À, nhưng GPT-4 Nano ngay từ khi ra mắt, dựa trên kiến thức tổng quát mà nó đã được đào tạo, có khả năng viết thơ.
- Nó có thể viết, viết email tiếp thị, nó có thể dịch các ngôn ngữ.
- Và đoán xem?
- Nó cũng có thể dự đoán giá sản phẩm với độ chính xác lên đến $63 cho mỗi sản phẩm.
### Muc 99

- Nhanh hơn một chút.
- Gemini 3 Pro tiếp tục thể hiện tốt hơn với điểm số 50.54.
- Và tất nhiên, độ tin cậy của kết quả này khá thấp vì chúng ta chỉ có 50 điểm dữ liệu ở đây.
- Nhưng tôi không hiển thị các thanh sai số, điều này không phải là cách làm chuyên nghiệp của tôi.
- Nhưng bạn có thể thêm vào nếu muốn.
- Và bài sonnet Claude 45 đã khiến tôi choáng ngợp với kết quả tuyệt vời ở mức $47, tốt hơn bất kỳ điều gì tôi đã làm trong năm ngoái.
- Nhưng GPT-5.1 đã chiếm trọn spotlight.
- Kết quả tốt nhất của lô 44.7.
## Phan 34

### Muc 100

- Thực ra, tôi vừa mới chạy lại thuật toán này với mức độ suy luận cao, và kết quả thu được gần như tương tự, nên nó không tệ hơn, nhưng cũng không tốt hơn.
- Vậy 44,7, ừm, đó là người dẫn đầu trên bảng xếp hạng.
- Đó là GPT 51, không cần đào tạo thêm, không cần tinh chỉnh, chỉ dựa trên quá trình đào tạo ban đầu, nó đã có thể dự đoán giá của một sản phẩm với độ chính xác trong khoảng $44.74.
- Rất tốt.
- Được rồi.
- Và cuối cùng, sau tất cả những điều đã nói, lần tới chúng ta thực sự sẽ có cơ hội để tinh chỉnh một số chi tiết.
- Và, ừm, đúng vậy, tôi đã cho bạn một vài gợi ý rằng, ừm, mọi việc có thể không diễn ra như kế hoạch.
- Vậy miễn là bạn đã sẵn sàng về mặt tinh thần cho điều đó, thì tóm lại, bạn đã có thể chạy các mô hình nguồn mở và nguồn đóng.
### Muc 101

- Bạn có thể thực hiện bộ nhớ đệm lệnh, bạn có thể tạo cảnh báo nhỏ, uh, bạn có thể tạo các giải pháp Rag nâng cao với chuỗi ngôn ngữ, bao gồm đánh giá và không có chuỗi ngôn ngữ.
- Và bạn có thể áp dụng một chiến lược gồm năm bước.
- Bạn có thể chọn lọc dữ liệu, bạn có thể tạo mô hình cơ sở bằng phương pháp học máy truyền thống.
- Và bây giờ bạn có thể áp dụng học sâu vào đó, ít nhất là một phần nào đó của học sâu.
- Bạn có thể làm việc với mạng nơ-ron sâu có tám lớp.
- Và bạn có thể thêm nhiều lớp hơn nếu muốn.
- Và bạn có thể đưa ra một giải pháp tiên phong cho một vấn đề kinh doanh, như chúng ta vừa làm.
- Lần sau, bạn sẽ biết cách tinh chỉnh mô hình biên, tạo tập dữ liệu tinh chỉnh và sau đó kiểm tra mô hình đã được tinh chỉnh.
### Muc 102

- Điều này thật thú vị.
- Đó là một nước đi chuyên nghiệp thực sự và mọi thứ sẽ diễn ra vào ngày mai.
- Tôi sẽ gặp bạn sau.

