# Bản chép lời video gốc (tài liệu nguồn, tiếng Việt)

> Bản ghi tự động theo mốc thời gian, có lỗi nhận dạng/dịch máy; giữ nguyên để tra cứu.

00:00 Trong video này, chúng ta sẽ làm một

00:01 Hệ thống chiến đấu lưới theo lượt trong Unity

00:04 Các đơn vị của chúng tôi sẽ chia thành hai đội được bố trí

00:06 một lưới với bán kính di chuyển nhất định và

00:08 khả năng tấn công từng đơn vị

00:10 không thực hiện động tác của nó rồi tấn công vào

00:11 Một cuộc chơi theo từng bước Hãy bắt đầu

00:16 [Nhạc]

00:20 xin chào và chào mừng tôi là code monkey của bạn

00:23 Và kênh này là để giúp đỡ

00:24 Bạn sẽ học cách tự tạo ra trò chơi của riêng mình

00:26 với các hướng dẫn NF do chuyên gia thực hiện

00:28 Nhà phát triển game indie nên nếu bạn tìm thấy

00:30 Video hữu ích, cân nhắc đăng ký nhé.

00:32 Vậy đây là những gì chúng ta muốn làm ở đây

00:34 Chúng tôi có một bản đồ đẹp với rất nhiều

00:36 Nhân vật nên đây là đội màu xanh dương

00:38 Và những người này thuộc đội đỏ

00:39 Bây giờ là theo lượt nên hiện tại

00:42 lượt hoạt động dành cho đơn vị này trên lưới

00:45 Chúng ta có thể nhìn thấy nó di chuyển xa đến đâu

00:47 vì vậy tôi có thể nhấp vào bất kỳ cái hợp lệ nào trong số này

00:49 vị trí lưới tôi nhấp vào bất kỳ vị trí nào trong số đó

00:51 Đi anh ta tiến về phía đó cho mỗi lượt

00:54 Tôi có thể thực hiện một động tác và một đòn tấn công nên

00:57 ở đây là một kẻ thù và tôi có thể nhấp vào

00:59 anh ta sẽ tấn công nên nếu tôi nhấp thì đúng rồi

01:01 Bạn đi nó thực hiện một đòn tấn công và bây giờ là

01:03 hệ thống này tôi đã thiết kế một

01:05 từng nhân vật một thay vì một

01:06 gọi điện làm nhóm và một đội đầy đủ để

01:08 ngay khi nhân vật trong đội hồ bơi

01:10 đã hoàn thành, nó đã chọn một nhân vật từ

01:11 Đội Đỏ Vậy giờ là lần này và lại một lần nữa

01:13 Tôi có thể xem mình có thể tiến xa đến đâu, ghi chú lại cách

01:16 Phong trào sử dụng pathfinder nên

01:18 bởi vì con creighton này đang đi bộ tôi

01:20 không thể thực sự đạt được vị trí đó nhưng

01:22 một lần nữa, tôi có thể chuyển đến bất cứ đâu tôi muốn nên

01:25 hãy đi lên tận đó và bây giờ tôi

01:27 có thể tấn công, vậy hãy tấn công cái đó và

01:29 Đúng rồi, xong rồi, giờ lại vào

01:30 Đội Xanh và lại có thể di chuyển và bây giờ

01:33 cái đó quá xa nên tôi không thể tấn công

01:35 để tôi có thể nhấn khoảng trống để

01:37 Bỏ qua lượt của tôi và giờ lại quay về chuyện này

01:39 một và giờ tôi có thể thử chuyển vào

01:41 Bây giờ thử đánh anh ta mà không có mảnh nào

01:43 quá xa nên giờ lại bỏ qua và cứ thế tiếp tục

01:44 vân vân, đây là nền tảng cho một buổi tiệc ngon

01:47 Hệ thống chiến đấu theo lượt tuyệt vời

01:49 Mọi thứ đều hoạt động tốt và chúng tôi không thể

01:51 sau này sẽ mở rộng thêm với một số đặc biệt

01:53 khả năng và một số AI cho kẻ thù

01:55 làm một trò chơi gần như giống X đúng không

01:57 Giờ thì đang có đợt giảm giá mùa xuân

01:59 tài sản hoặc vòng quay của tài sản lớn

02:01 Biểu tượng, hiệu ứng âm thanh và công cụ tuyệt vời tại

02:03 giảm giá tuyệt vời khi sử dụng chúng để làm cho bạn

02:05 Trò chơi thực sự nổi bật, hãy xem qua

02:07 nhấp vào liên kết trong phần mô tả và

02:08 nếu bạn nhặt được gì qua đó

02:10 Bạn cũng sẽ hỗ trợ kênh

02:11 Được rồi, vậy vòng tròn này, chúng ta bắt đầu thôi

02:13 Được rồi, đây là cảnh bắt đầu của chúng ta.

02:16 Có một bản đồ với một số đơn vị và một số

02:18 các đối tượng bây giờ bản đồ được xây dựng bằng cách sử dụng

02:21 hệ thống lưới mà chúng tôi đã làm trong một lần trước

02:22 để tôi có thể bật các thiết bị và

02:25 hình dung lưới mà tôi cũng đang sử dụng

02:27 việc tìm đường cũng được thực hiện trong

02:28 một video khác và tôi cũng đang sử dụng

02:30 Bản đồ thị trấn mà chúng ta sẽ dùng để

02:32 thể hiện tầm ảnh hưởng của chúng tôi

02:33 Về các khu vực nên nếu bạn chưa thấy

02:35 sau đó kiểm tra các liên kết trong

02:37 Mô tả hệ thống chiến đấu này sẽ không

02:38 xây dựng dựa trên những điều đó một lần nữa

02:41 là một minh chứng tuyệt vời cho sức mạnh của

02:42 viết mã sạch nên chúng tôi tạo lưới đó

02:44 hệ thống từ lâu rồi và chúng tôi đã tái sử dụng

02:46 nó trong rất nhiều kịch bản khác nhau

02:48 bởi vì chúng tôi đã chắc chắn viết mã của mình

02:50 một cách sạch sẽ và có thể tái sử dụng tại đây

02:52 Trình chỉnh sửa có một đối tượng trò chơi đơn giản và

02:54 có đoạn script này đính kèm nên nó

02:57 là một script đang thiết lập lưới

02:59 Tìm đường và ăn Alma ở đây là

03:01 Kịch bản và nó khá đơn giản, chúng tôi

03:04 Chỉ cần xác định một trọng số bản đồ nhất định và ánh xạ

03:06 sau đó chúng ta xây dựng lưới của mình

03:08 Tìm đường lưới và thị trấn di chuyển của chúng tôi

03:10 hãy lập bản đồ vì vậy với các hệ thống đó chúng ta

03:12 Hãy có căn cứ đẹp của chúng tôi, video này được thực hiện

03:14 có thể thực hiện được nhờ những điều tuyệt vời này

03:16 Người ủng hộ đến patreon.com/scishow đến

03:18 Code Monkey để nhận một số đặc quyền và sự giúp đỡ

03:20 Giữ video miễn phí cho mọi người ngay bây giờ

03:22 Hãy biến hệ thống chiến đấu lưới của chúng ta thành

03:24 Đi làm đầu tiên với một đơn vị duy nhất

03:26 và cho nó một thứ tự di chuyển đơn giản như trong

03:28 Quỹ dự án, hãy tạo ra một EC

03:30 JavaScript gọi đây là chiến đấu lưới của chúng tôi

03:33 hệ thống: hãy tạo một đối tượng trò chơi để chạy

03:35 Nó và đính kèm kịch bản của chúng tôi nhé bây giờ vào

03:39 Ở đây, trước tiên hãy tạo một trường để thêm

03:42 tham chiếu đơn vị để chúng tôi tạo ra một thiết bị tiệt trùng

03:45 Phim loại đơn vị cho chiến đấu IT chúng tôi đang

03:48 Tôi sẽ xem lớp đó được thiết lập thế nào

03:50 một chút để chúng tôi có phim cho một đơn vị và

03:55 Quay lại trình chỉnh sửa ở đây chúng ta có thể

03:57 chỉ cần kéo tham chiếu của chúng tôi, được rồi, trước tiên

03:59 Trong tất cả, hãy thực hiện vài động tác đơn giản

04:01 Gửi đơn vị đến vị trí mục tiêu ngay bây giờ

04:03 Mỗi đơn vị đều dựa trên sản phẩm tiền chế này

04:05 Ở đây để phần cuối có một đơn vị chính rất tốt

04:08 kịch bản chiến đấu và phần còn lại của kết thúc

04:10 Cách bố trí như chúng tôi đã làm trong Modular

04:12 hệ thống điều khiển ký tự để có một

04:14 Có rất nhiều module như cái này ở đây

04:16 điều này di chuyển đơn vị về phía mục tiêu

04:17 vị trí sử dụng tìm bản đồ và cái này

04:19 đang chuyển sang trạng thái thống nhất bằng cách sửa đổi

04:21 vận tốc vật cứng nhưng về cơ bản là cho

04:23 Logic của hệ thống chiến đấu của chúng ta tất cả chúng ta

04:25 Need là kịch bản chính ở đây và cái này

04:28 script đã được thiết lập để tương tác

04:29 cùng với tất cả những thứ khác, rất tuyệt trong đơn vị của chúng tôi

04:31 Kịch bản chiến đấu mà chúng tôi thực sự quan tâm

04:33 Ngay bây giờ là khả năng gọi cái này

04:35 nên chúng tôi chuyển sang vị trí của Terry

04:37 Và chúng ta có màn trở lại rồi, vậy hãy cùng nhau

04:39 Quay lại với kịch bản chính của chúng ta, đây là

04:41 và hãy làm một bản cập nhật voi đơn giản và tiếp tục

04:46 bản cập nhật hãy kiểm tra

04:47 Chuột trái chơi khi chuột trái

04:51 nút chuột đang ở đây và hãy thử

04:52 cầm chuột sai vị trí để cho

04:55 rằng có một hàm trong các tiện ích

04:56 mà bạn có thể tải về cho

04:58 tự do khỏi tôi tại Tacoma com

05:00 để tôi có thể vào lễ trao giải Tony để lấy

05:03 Mods sai vị trí ở đây là hàm

05:06 trong trường hợp bạn muốn tự viết

05:07 bây giờ khi chuột đặt sai vị trí, chúng ta hãy

05:09 xuống thiết bị để đến đó, nên tôi sẽ làm

05:12 Chiến đấu tín dụng đơn vị và chúng tôi sử dụng nó

05:14 Chức năng mà chúng ta đã thấy bảo tôi chuyển sang

05:16 nhắm vào sự phản đối của Mouser, được rồi

05:19 Cứ như thế này là sẽ hoạt động thôi, thử xem nào.

05:21 Được rồi, đây là tất cả các thiết bị đều không hoạt động

05:24 và bây giờ tôi di chuyển chuột và nhấn vào

05:26 nút chuột không sáng bất cứ thứ gì bạn có thể truy cập

05:27 Đơn vị đã xử lý đúng cách

05:29 vị trí và bây giờ nếu tôi nhấp vào phía sau đó

05:31 Đóng thùng và đúng rồi, đó là cách bạn có thể

05:34 thấy không, nó thực sự đang sử dụng đường dẫn đúng không?

05:36 Vậy là chúng ta đã có chuyển động cơ bản hoạt động

05:38 Tuyệt vời, giờ đây là một trong những điều chính mà

05:40 chúng tôi muốn áp dụng cho hệ thống chiến đấu của mình là

05:42 để có một số chuyển động hạn chế nên

05:44 đơn vị không thể, ví dụ, di chuyển một Internet

05:46 một tháng nên tôi không thể vào đó và anh ấy

05:48 không nên có thể di chuyển toàn bộ điều này

05:50 Khoảng cách, quay lại mã của chúng ta ở đây, hãy cùng

05:52 tính toán tất cả các vị trí hợp lệ mà

05:54 Đơn vị thực sự có thể di chuyển đến bây giờ theo cách

05:57 Chúng ta sẽ làm điều đó để đến muộn

05:58 con đường đến từng vị trí và sau đó chúng ta

06:00 sẽ kiểm tra độ dài của đường dẫn đó

06:02 Vậy hãy viết mã đó ngay khi bắt đầu

06:05 Và để thử nghiệm, hãy bắt đầu từ những điều nhỏ

06:07 Giả sử đơn vị của chúng ta chỉ có thể di chuyển tối đa

06:09 Năm bước và bây giờ chúng ta muốn vào đây

06:12 Kiểm tra tất cả các vị trí trong đó

06:13 Vậy nên trước tiên chúng ta lấy đơn vị và chúng ta

06:17 truy cập vị trí của nó nhưng giờ chúng ta không thể

06:21 muốn vị trí giun nhưng nó

06:22 vị trí trên lưới vì vậy chúng ta cần

06:24 để truy cập lại lưới, lưới là

06:27 được thiết lập trong script này để nó nằm trong

06:29 ở đây và nó đang được xây dựng ở đây

06:31 và chúng ta đã có một đơn giản đẹp

06:33 hàm để trả về lưới đó, vậy hãy

06:35 truy cập hàm này để chúng ta vào đó

06:39 truy cập script vào thể hiện tĩnh và

06:42 lấy lưới của chúng ta để sử dụng lưới đó

06:48 truy cập hàm để lấy

06:50 vị trí x và y của một thế giới nhất định

06:52 vị trí

06:54 Vậy là chúng ta có unit ex trong unit wine

06:57 Bây giờ với các đơn vị x và y, ta có thể đơn giản là

07:00 làm một chu trình cơ bản, tức là chúng ta làm bốn chúng ta

07:03 bắt đầu với X bắt đầu tại đơn vị X

07:06 trừ đi khoảng cách di chuyển của Emacs và chúng ta sẽ

07:08 sẽ tiếp tục cho đến khi X nằm dưới đơn vị X

07:12 cộng thêm D khoảng cách di chuyển tối đa và làm tương tự

07:16 Chuyện này được rồi, vậy chúng ta đến đây

07:24 Chuyển đổi qua tất cả các vị trí trên lưới

07:26 có những người xung quanh vị trí đơn vị của chúng ta

07:29 trong phạm vi một khoảng cách tối đa nhất định ngay bây giờ

07:31 Trước tiên, hãy kiểm tra xem vị trí này có phải là không?

07:33 có thể đi bộ được, vì vậy chúng tôi cần tiếp cận

07:36 Lưới khó tìm nên vị trí

07:46 hiện tại có thể đi bộ được hoặc không thể đi bộ được

07:48 Nếu là cáp thì hãy hoàn thành

07:50 đường dẫn đến vị trí đó nên nếu có

07:57 một đường đi hợp lệ thì ta có đường đi thực tế

07:59 kiểm tra tài khoản nên nếu ta lấy được đường đi thì

08:09 tính số đường đi tới

08:11 khoảng cách tối đa và nó nằm trong phạm vi

08:13 khoảng cách di chuyển hoặc nó nằm ngoài phạm vi của chúng tôi

08:15 di chuyển khoảng cách nên nếu nó ở đây thì

08:17 Nó hợp lý nếu là bất kỳ trong số nào khác

08:19 Vậy thì nó không hợp lệ, đúng vậy logic của chúng ta

08:21 nên đang hoạt động ngay bây giờ để

08:23 Nhìn trực quan chúng ta có thể dùng bản đồ thị trấn

08:25 giờ đây, trong diễn viên mà tôi đã đặt sẵn

08:28 Trên bản đồ thị trấn của tôi, nó được chuẩn bị bằng hai

08:30 Loại khăn tắm nên không có loại nào cả, điều này

08:32 vô hình và di chuyển, nghĩa là chúng ta có thể

08:33 di chuyển về phía đó, ở đây chúng ta có thể sử dụng.

08:35 rằng chúng ta đưa chuyển động lên bản đồ và chúng ta

08:40 Đặt sprite bản đồ thị trấn này và chúng ta sẽ có cái này

08:46 X và Y này trong trường hợp này đặt nó để di chuyển

08:49 và tất cả những ngày khác chúng tôi đặt nó

08:51 vô hình

08:57 Được rồi, mọi thứ cứ như thế này

09:00 Chúng ta nên có khả năng làm việc

09:01 Nhìn trực quan tất cả các vị trí tuyệt vời

09:03 mà chúng ta có thể chuyển đến và tất cả những nơi mà chúng ta

09:04 Không được, vậy hãy thử xem thử nào

09:07 Ngay lập tức chúng ta có thể thấy rằng logic của mình là

09:08 thực sự đang hoạt động để chúng ta có thể thấy cái nào hợp lệ

09:11 những vị trí chúng ta có thể di chuyển đến và nhìn thấy

09:12 những loại nào nằm trong phạm vi tối đa của chúng tôi

09:14 Năm người trong đơn vị thực sự của chúng ta bây giờ hãy

09:17 xác minh rằng mọi thứ đều thực sự

09:18 hoạt động đúng, vậy hãy đặt chúng ta ở đây

09:21 thêm vài thùng nữa và nếu có thì chỉ cần

09:24 như vậy chúng ta có thể thấy rằng nó thực sự là

09:25 làm việc nên các thùng này đang bị tắc nghẽn

09:28 Chúng ta không thể chuyển đến khu vực này nữa

09:30 Đúng vậy để chúng ta có thể xác thực tất cả các vấn đề của mình

09:32 Các vị trí di chuyển có thể rất tuyệt bây giờ chúng ta

09:34 cần đảm bảo rằng chúng ta chỉ có thể

09:35 thực sự di chuyển về phía thung lũng di chuyển

09:37 bởi vì hiện tại về mặt thị giác chúng ta

09:39 có thể nhìn thấy nhưng tôi có thể tự thích ở đây

09:40 và ừp, anh ấy vào đó thôi

09:42 Chỉ là bây giờ là một trong những điều tuyệt vời nhất

09:45 mà chúng tôi đã thêm vào khi tạo lưới

09:47 hệ thống là khả năng làm cho nó hoạt động

09:48 với các vị trí tổng quát để mỗi vị trí lưới có

09:51 một đối tượng lưới thuộc loại cụ thể bây giờ nên

09:54 Chúng ta đã dùng từ trống rỗng này đến lâu rồi

09:56 đối tượng nên thực sự chỉ lưu trữ phần tạo

09:58 X&Y và sau đó chúng tôi đang làm một số debug

10:00 vẽ các đường để chúng ta có thể nhìn thấy trực quan

10:02 Bây giờ hãy thay thế nó bằng một

10:03 đối tượng grid phù hợp để lưu trữ tất cả dữ liệu

10:05 chúng ta muốn vậy hãy sao chép lớp này

10:09 Vậy hãy vào hệ thống chiến đấu và

10:11 Vậy thì hãy cùng tạo ra mọi thứ ngay lập tức

10:17 Chúng ta có đối tượng đỏ cơ bản ở đây

10:19 Và bây giờ chúng ta cần làm ở đây là

10:21 chỉnh sửa kiểu thay vì sử dụng cách này

10:23 Thời gian, chúng ta dùng cái trên lưới nhé.

10:25 Hệ thống chiến đấu ổn thỏa, mọi thứ đều ổn

10:32 hoạt động đúng và giờ đã nằm trong lưới này

10:33 ĐỐI TƯỢNG ĐÓ LÀ TẤT CẢ DỮ LIỆU

10:35 Chúng ta sẽ cần nên ví dụ như

10:37 Có một quả bóng riêng đơn giản cho

10:41 Vị trí Valley Blue và một số chức năng

10:44 được thiết lập

10:49 Được rồi, chúng ta có vàng đơn giản và

10:52 Bây giờ xuất hiện khi chúng ta đang

10:54 hoàn thành các vị trí hợp lệ của chúng tôi nếu có

10:56 hợp lệ thì chúng ta vào lưới theo thứ tự

10:59 để lấy đối tượng lưới trên X Y và

11:06 ta gọi hàm tập hợp của mình và trong này

11:09 trường hợp này đúng và trên

11:12 Trường hợp khác thì sai, vậy hãy làm như vậy

11:13 Ở đây, được rồi, chúng ta đặt tất cả thành

11:21 không hợp lệ thì chúng ta đi qua và các số

11:24 mà là hợp lệ, chúng ta đặt chúng thành Val nên bây giờ

11:26 rằng chúng tôi đã xác nhận được quyết định của mình

11:28 Vào vị trí, chúng ta xuống đây trong đơn vị của chúng ta

11:30 Chiến đấu trên lưới thay vì di chuyển nó

11:32 ngay đến đó, hãy xác thực trước

11:34 vị trí đó để chúng ta truy cập lưới điện của mình

11:45 đặt đối tượng lưới trên bánh xe chuột

11:47 tại vị trí, chúng tôi kiểm tra xem nó có hợp lệ hay không

11:49 di chuyển vị trí và nếu có thì chúng ta sẽ nói

11:51 đơn vị của chúng tôi tiến tới vị trí đó

11:53 Được rồi, cứ như thế này thôi

11:54 đang làm việc

11:55 Hãy thử thử, vậy đây rồi, hãy thử

11:57 nhấp vào vị trí không hợp lệ để ra ngoài

11:59 ở đây tôi bấm mà không có gì xảy ra

12:01 thiết bị không di chuyển bây giờ tôi nhấp vào một

12:03 quan điểm hợp lý bất cứ điều gì trong số đó là anh ấy

12:05 Hướng về vị trí đó được rồi

12:07 logic của chúng tôi hoạt động rất tốt nên đây là

12:10 để chuyển động lưới của chúng ta đúng

12:12 được xác nhận, nhưng hiện tại chúng ta chỉ là

12:14 Tính toán khi bắt đầu như đơn vị của tôi

12:17 di chuyển nên cập nhật thực tế

12:18 Vị trí mới tìm thấy nên hãy làm điều đó

12:20 Đầu tiên, chúng ta lấy tất cả mã này và chúng ta

12:23 thực sự biến nó thành một sự kiện đúng nghĩa

12:25 Vì vậy, thay vì ở điểm xuất phát thì chúng ta

12:29 nhận cập nhật của chúng tôi từ với các vị trí di chuyển

12:30 hàm và khi bắt đầu chúng ta gọi

12:33 chức năng đó và bây giờ là bản cập nhật của chúng tôi

12:36 Chúng ta cũng cần gọi nó khi đơn vị

12:38 đạt được vị trí của mình và chúng ta cũng nên

12:40 chặn di chuyển của chúng ta khi đơn vị đã

12:42 thực sự chuyển nhà, vậy để làm một

12:44 máy trạng thái đơn giản giống như chúng ta đã làm trong

12:46 Video AI của kẻ thù

12:54 Được rồi, vậy chúng ta có một câu hỏi đơn giản là tôi biết

12:56 cho bang của chúng tôi và nếu bạn muốn lưu trữ

12:58 sau đó là trạng thái của một chân nối hàng tuần

13:00 dot bình thường và cập nhật chúng tôi làm là chuyển đổi

13:03 trên trạng thái của chúng ta, nếu chúng ta bình thường thì đừng

13:04 Lắng nghe các đầu vào và xem chúng ta đang trên

13:06 Vậy thì chúng ta chỉ đang chờ đợi như vậy

13:09 Ý tôi là ở đây khi chúng ta quay lại di chuyển

13:10 hãy sửa đổi trạng thái và trong trường hợp này

13:13 Chúng ta sẽ đặt trạng thái chờ đợi và

13:15 khi đó việc chuyển sang hàm này đã có một

13:17 Comeback được gọi khi đơn vị

13:19 đến vị trí của nó, nó chỉ đơn giản thôi

13:21 hành động không nhận được, tôi bao phủ các đại biểu trong

13:23 Một video khác nếu bạn muốn tìm hiểu thêm

13:25 nhưng về cơ bản, hàm này sẽ không được

13:27 bị kích hoạt ở cuối nên có trong đây

13:29 rằng chúng ta có thể đặt lại trạng thái

13:31 trạng thái dot bình thường và sau khi đặt lại

13:35 Trạng thái này thì chúng ta có thể cập nhật chuyển đổi hợp lệ của mình

13:37 Vị trí ổn rồi vậy là xong rồi

13:41 Hãy thử nghiệm nhé. Vậy là chúng ta đang ở đây và chúng ta có thể

13:43 Xem tất cả các vị trí di chuyển của chúng ta bây giờ hãy cùng

13:45 chuyển xuống đây và chờ bất kỳ ai ở Rio

13:48 và điều này đã đến đó bây giờ anh ấy đang cập nhật bây giờ tôi

13:49 có thể di chuyển đến các vị trí này nên đi thôi

13:51 ở đây và đúng rồi, nó cập nhật và giờ tôi có thể

13:53 đi vào đây và ở đó bây giờ đi

13:55 xác thực đang hoạt động nên tôi nhấn ra

13:56 Ở đây và không, nó không đi đâu cả.

13:58 Dọn dẹp ở đó và đúng rồi, đó là tất cả

14:01 Đúng rồi, mọi thứ đều hoạt động rất tốt

14:02 Vì vậy, chúng tôi đã có khá nhiều người của chúng tôi

14:05 Hệ thống chúng tôi đã có thiết bị di chuyển

14:07 trong một lưới và nó đang di chuyển theo một

14:09 theo từng lượt để sau khi tôi di chuyển tôi

14:12 không thể nhấp vào bất cứ đâu mà tôi phải chờ

14:13 đơn vị để đến đó và chỉ khi đó mới có thể

14:15 Thực ra tôi lại di chuyển nên logic lượt của chúng ta

14:18 đã hoạt động và trong khi như vậy

14:20 xác nhận bạn có thể tiến xa đến mức nào

14:21 Tôi không thể di chuyển thiết bị này hoàn toàn

14:23 chỉ xuất hiện trong lần di chuyển hợp lệ

14:24 Vậy nên bây giờ không cần làm việc thì chúng ta hãy

14:26 thiết lập tấn công của chúng ta để chúng ta muốn

14:28 có thể nhấp vào kẻ địch để

14:30 tấn công hắn nếu hắn ở trong tầm

14:32 Vậy trước tiên hãy xử lý việc nhấp vào nó ngay bây giờ

14:35 Một cách chúng ta có thể làm điều đó là sử dụng

14:37 các máy va chạm và các bản đúc lớn để

14:39 chọn kẻ địch để tấn công bằng cách sử dụng

14:41 cách tiếp cận đó sẽ có nghĩa là

14:43 Kích thước máy va chạm phải hoàn hảo

14:44 khớp kích thước lưới phiền toái để thay vào đó

14:47 của các máy va chạm và Ray chọn cách đơn giản hơn

14:49 Chúng ta có thể làm là đơn giản cất giữ thiết bị của mình trên

14:51 chính đối tượng lưới nên ở đây trong

14:53 đối tượng lưới mà chúng tôi tạo ra có thể đơn giản là

14:55 thêm một trường nữa và đây sẽ là một

14:57 phim cho đơn vị thực sự

14:59 đứng trên đối tượng lưới này nên ta thêm

15:02 của thời gian

15:03 thoát khỏi chiến đấu và đó là chiến đấu UniCredit

15:05 điều đó nằm trên vật thể vĩ đại này và

15:07 Bây giờ có một hàm để thiết lập và ổn thôi

15:16 Vậy ta có trường của chúng ta và một hàm

15:18 để đặt một hàm thành xóa và

15:19 Hàm để lấy nó nên bây giờ chúng ta cần

15:21 khởi tạo điều này nên hãy cùng làm đến cùng

15:23 ở đây và chúng ta sẽ thêm một cái nữa

15:25 serialize trường và điều này sẽ không phải là một

15:28 đội hình đơn vị của chúng tôi cho chiến đấu và hiện nay

15:32 Hãy vào trình chỉnh sửa và vào đây

15:34 Hãy kéo tất cả các tham chiếu đơn vị của chúng ta

15:36 Được rồi, họ đến rồi

15:37 Và bây giờ ở đây, khi chúng ta bắt đầu, hãy cùng

15:40 Cập nhật tất cả các đối tượng lưới của chúng tôi nên hãy cùng

15:43 lần thứ hai để chúng ta luân phiên

15:51 Tất cả các đơn vị của chúng tôi và chúng tôi có bếp nướng

15:53 lấy đối tượng lưới trên các đơn vị đó

15:55 đặt vị trí và chúng ta thiết lập trường đó nhé

15:58 Bây giờ ở dưới đây chúng ta có thể kiểm tra khi nhấn vào

16:00 ở vị trí đơn vị để chúng ta có lưới của mình

16:13 Sau đó chúng ta có đối tượng lưới bên dưới

16:15 con chuột và sau đó chúng ta kiểm tra xem có

16:17 một đơn vị bên trong đối tượng lưới đó, nếu có

16:20 Vậy thì có nghĩa là chúng ta đã nhấp vào đầu

16:21 của đơn vị thì ta kiểm tra xem mục tiêu có phải

16:24 Đơn vị là kẻ thù của đơn vị hiện tại nên

16:29 Chúng tôi đã nhấp vào một kẻ thù của hiện tại

16:30 và nếu có thì chúng ta muốn tấn công

16:33 Vì vậy, chúng ta sẽ nói với đơn vị này để

16:36 tấn công đơn vị còn lại và một lần nữa

16:39 tấn công cũng có một delegate kích hoạt

16:41 khi tấn công hoàn thành để chúng ta có thể thực hiện

16:45 Điều tương tự để thay đổi trạng thái của chúng ta để anh ấy

16:50 tấn công mục tiêu trong đó rồi quay lại

16:52 đến mức bình thường và sau đó chúng ta có chúng ta không phải

16:57 Kẻ thù chứ không phải đơn vị ở đây nên nếu chúng ta

16:59 tấn công rồi chúng ta gãy, nếu không thì chúng ta

17:01 Tiếp tục đi xuống đây và chúng ta kiểm tra

17:03 Chuyển động đơn giản, được rồi, giống như vậy

17:05 Điều này sẽ hoạt động nên nếu chúng ta nhấp vào

17:07 Một kẻ thù, chúng ta nên có thể tấn công hắn

17:08 Hãy thử nghiệm nhé, vậy là chúng ta đang ở đây và nếu tôi

17:11 nhấp vào ngoài khu vực di chuyển không thể di chuyển I

17:13 click yep tôi vẫn còn phải nhiều hơn

17:15 chuyển động bây giờ nếu tôi nhấp vào phía trên

17:16 Một kẻ thù, nếu bạn nói đúng, anh ấy đúng

17:19 tấn công kẻ thù và ảnh hưởng đến tôi, tôi đang

17:21 Tự nói chuyện với chính mình thì không được

17:22 Bất cứ điều gì nhấp lên trên và Mi là không.

17:25 không làm được gì cả, nên tôi có thể

17:27 Bây giờ nhấp vào kẻ địch để tấn công

17:28 Anh ấy tuyệt vời, giờ chúng ta vẫn còn vài thứ

17:31 Lưu ý, trước tiên chúng ta cũng cần phải

17:34 Xác thực phạm vi tấn công ngay bây giờ

17:36 cái này rất xa nhưng tôi vẫn có thể

17:38 nhấp vào để tấn công hắn và khi chúng tôi

17:40 chúng ta cần thực sự cập nhật

17:42 đối tượng lưới cơ sở từ hiện tại

17:44 Tôi đã di chuyển thiết bị này nhưng bên dưới

17:46 đối tượng grid nên đơn vị này đã được đặt trên

17:48 Vị trí thực sự của nó nên hãy làm vậy

17:50 cả hai ghi chú trước cho cuộc tấn công chúng ta vừa mới

17:53 cần sử dụng hàm kiểm tra xem

17:54 nó có thể tấn công nên nếu đơn vị này có thể

17:59 tấn công đơn vị mục tiêu để bạn có thể chọn

18:07 tấn công hoặc không thể tấn công và điều này

18:09 Chỉ làm một chức năng cơ bản là sai

18:11 vectơ ba khoảng cách và ở đây nếu ta

18:13 không thể tấn công và hãy tạo ra một đơn giản

18:15 cửa sổ bật lên Được rồi, vậy là xong rồi

18:20 Và bây giờ là cập nhật lưới ở đây

18:23 Khi ta có một vị trí di chuyển hợp lệ thì

18:25 Chúng ta sẽ loại bỏ chúng khỏi

18:26 vị trí hiện tại nên chúng ta đi vào

18:28 Bread chúng ta lấy đối tượng lưới của điều này

18:31 đơn vị và sau đó chúng tôi làm sạch nó trong phần cay đắng

18:35 Chiến đấu rồi chúng ta chiếm lưới mục tiêu

18:40 đối tượng và sau đó chúng ta thiết lập hợp nhất

18:43 Combat với cái này được rồi, vậy là vậy

18:51 nó

18:51 Xem thử tấn công của chúng ta có ổn không

18:54 ở đây chúng ta biết khoảng cách tấn công là

18:56 gần như giống như bước đi

18:57 khoảng cách để nếu tôi lên đỉnh như anh ấy không nên

18:59 Tấn công quá nhanh mà không thể tấn công

19:01 Được rồi, tốt rồi nếu tôi chuyển đến gần anh ấy và

19:04 Tôi nhấp bốn lần, đúng rồi, đó rồi, giờ tôi có thể

19:06 thực sự tấn công anh ta để tôi có thể chuyển vào một

19:08 chọn vị trí ngẫu nhiên và nhấp vào bất kỳ vị trí nào trong số đó

19:10 Bạn đi đi, mọi thứ đã được xác nhận rồi

19:12 Vì vậy, ở đây chúng ta có sự di chuyển và tấn công

19:14 Hoạt động tuyệt vời, vậy đây là chúng ta

19:16 Hệ thống gần như hoàn chỉnh, mọi thứ đều được xây dựng hoàn chỉnh

19:19 hoạt động hoàn hảo, chỉ khác là

19:21 làm việc cho một đơn vị duy nhất nên rất

19:23 Điều quan trọng mà chúng ta còn thiếu là

19:25 hệ thống lượt của chúng tôi giờ tôi đã đề cập đến một

19:28 Hệ thống chiến đấu theo lượt đơn giản trong một

19:30 Video này, vậy hãy cùng làm gì đó

19:32 Khá giống ở đây trong lưới của chúng ta

19:34 Hệ thống chiến đấu chúng tôi đã có một hệ thống tốt

19:35 mảng của một trong các đơn vị của chúng ta bây giờ là gì chúng ta

19:38 Nhu cầu là chia chúng thành hai phần

19:39 và đi từ đội này sang đội khác

19:41 Vậy hãy tạo ra một vài danh sách đơn giản hai

19:47 Vậy là giờ chúng ta có Đội Xanh và Đội Đỏ

19:50 ở đây khi chúng ta đang lướt qua chúng

19:52 Chúng ta cũng có thể làm được điều đó, được rồi, rất nhiều

20:00 đơn giản là chúng ta chỉ cần khởi tạo danh sách của riêng mình

20:02 Chúng tôi luân phiên và thêm chúng vào

20:03 Tùy vào đội mà họ đang ở bây giờ

20:06 Ở đây chúng ta cũng sẽ cần một số

20:07 chỉ mục để xác định cái nào

20:09 là đơn vị hoạt động của chúng tôi và chúng tôi khởi động họ

20:13 cả hai đều tắt ở mức âm một, được rồi, giờ chúng ta đi thôi.

20:16 tạo một hàm để chọn hàm tiếp theo

20:18 Các đơn vị đang hoạt động, trước tiên chúng ta kiểm tra đội

20:22 trên cái đang hoạt động hiện tại nên nếu

20:31 Cái hiện tại hoặc là không hoặc là trên

20:33 Đội Đỏ rồi chúng ta có đội tiếp theo trên

20:34 Đội Xanh và nếu bây giờ chúng ta có đội tiếp theo

20:36 Ở đúng đội nên hãy làm điều đó

20:38 chức năng ổn rồi, vậy chúng ta có cái tiếp theo

20:50 hoạt động một thành viên trong nhóm này để chúng tôi chỉ cần

20:52 tăng chỉ số của chúng ta rồi trả về

20:54 cái đó ở vị trí đó rồi đến đây

20:56 Khi chúng tôi chọn, chúng tôi thiết lập thiết bị nhanh chóng

20:58 chiến đấu cần được thực hiện đúng vậy nên tất cả chúng tôi

21:02 logic nên hoạt động nên đầu tiên

21:05 thời điểm chúng ta gọi là lần này sẽ không còn

21:07 đã biết nên nó sẽ chọn một trong số

21:08 Đội xanh, lần sau chúng tôi gọi lại

21:10 Người này sẽ thuộc đội xanh nên

21:12 Chúng ta sẽ chọn một trong số những cái đỏ

21:14 Đội ngũ và cứ thế tiếp tục để chúng ta có

21:16 hàm này để chọn đúng tiếp theo

21:18 tính cách hoạt động và hiện nay hầu hết các

21:20 phần còn lại của mã đã hoạt động bằng cách sử dụng

21:21 lĩnh vực này nên mọi thứ khác nên

21:23 đang làm việc nên chúng ta chỉ cần bình tĩnh lại thôi

21:26 Khi bắt đầu, chúng tôi đặt mọi thứ và

21:28 Trước khi chúng tôi cập nhật các vị trí có sẵn

21:29 Chà, nó không giống như đơn vị hoạt động tiếp theo

21:31 và ở đây và đừng phơi bày nữa

21:34 Điều này trong trình chỉnh sửa vì nó sẽ

21:35 bắt đầu với câu 'không', vậy là xong rồi

21:39 Giờ đến phần thử nghiệm, hãy để chúng hoán đổi

21:41 sau khi chỉ di chuyển một lần mỗi lượt

21:43 Vậy là ở đây chúng ta có phong trào của mình, được chứ?

21:45 và sau khi kết thúc là chuyển động thì

21:47 Hãy cùng một số người thích Vienna hoạt động tiếp theo

21:49 Được rồi, hãy thử nghiệm và đây là

21:53 Đến lượt ai đó, tiến vào thôi

21:55 Ở đây và đúng rồi, khi anh ấy đến đó thì bây giờ là

21:57 đến lượt người này và mọi thứ lại là

21:59 được xác thực nên tôi bấm hết lượt

22:00 Ở đây không, không có gì cả, giờ đi thôi.

22:02 cái đó ở đây và đúng rồi, đó chính là

22:04 Đội đỏ và tôi mong đợi đội duy nhất nên

22:06 Nước đi của đội Xanh và Nước đi của Đội Đỏ

22:07 Được rồi, tất cả logic đều hoạt động

22:10 và tất cả các thuật ngữ đều đúng

22:11 Chuyển đi khi logic của chúng ta đã hoạt động

22:13 Hãy khiến họ di chuyển và tấn công vào

22:15 cùng một lượt nên ở đây chúng ta có thể lưu trữ

22:17 hai tỷ đơn giản khi chúng ta thấy như

22:23 Người đang hoạt động tiếp theo, hãy đặt cả hai cái này thành

22:25 Đúng vậy, và ở đây chúng ta đã tìm thấy một thời điểm, tất cả

22:38 Vậy là chúng tôi đã tìm được một đội, di chuyển bất kỳ cuộc tấn công nào

22:40 Và bây giờ chỉ cần nói hàm để kiểm tra xem

22:43 quay lại xong nên nếu chúng ta không thể di chuyển hoặc

22:53 tấn công rồi kết thúc lượt này và chúng ta sẽ

22:56 Chúng tôi sẽ làm thử nghiệm

22:57 Mỗi lần chúng ta di chuyển hoặc tấn công nên

22:59 cũng có thể sử dụng chức năng này để

23:00 Bỏ qua lượt này nên ở đây trong bản cập nhật của chúng tôi

23:05 Chúng ta cũng hãy làm một phím nhập liệu đơn giản

23:08 khi bạn nhấn phím cách thì hãy

23:11 hãy đến lượt của chúng ta Được rồi mọi thứ

23:14 nên đang hoạt động

23:14 Hãy thử nghiệm, vậy chúng ta đã ở đây, bắt đầu

23:17 Với điều này, đúng rồi, cho đến giờ rất ổn, hãy thử xem

23:19 Chuyển vào đó và đúng là giờ anh ấy chuyển đi

23:22 Hãy thử tấn công và nếu có thì bạn sẽ

23:24 Tấn công bạn biết là người này rồi nên bây giờ

23:26 cái này tôi có thể tấn công trước, rồi sau đó tôi

23:28 di chuyển và vì tôi đã xong rồi nên là thế này

23:30 một nên bây giờ cái này di chuyển và bây giờ tôi thử

23:34 tấn công nhưng tôi không thể vì anh ấy quá

23:35 xa để tôi có thể nhấn khoảng cách và nếu có

23:37 bạn đi Tôi bỏ qua lượt và giờ là thế này

23:39 một và bây giờ cái này có thể di chuyển và bây giờ

23:41 Hãy tấn công cái này và cứ thế tiếp tục

23:42 Forth được rồi, tuyệt vời, vậy tất cả chúng ta

23:45 Logic Turn và tất cả logic chiến đấu của chúng ta

23:47 hiện đang hoạt động đúng với một số

23:49 nhập vào đây tôi đã triển khai rồi

23:51 máy quay lia để tôi có thể nhấn phím s

23:54 và E để di chuyển camera như vậy

23:56 cái đó đang được xử lý bằng

23:57 Sen máy bây giờ tôi đã nói cách sử dụng tội lỗi

23:59 Máy trong video trước đó nên hãy kiểm tra lại

24:01 ra nếu bạn không biết cách sử dụng

24:02 Một lần nữa, mọi thứ đang được xử lý bởi những người bình thường của chúng ta

24:04 Script Trình xử lý trò chơi chúng tôi đã có tài khoản của mình

24:06 Chuyển động máy quay rồi chúng ta có một màn trình diễn đẹp

24:08 chức năng để thiết lập độ ngã của máy ảnh

24:10 vị trí

24:10 Vậy chỉ để nói tiếng Ba Lan thôi, chúng ta gọi cái này là

24:12 bất cứ khi nào lượt của chúng ta thay đổi thì ở đây khi

24:15 Khúc cua đã qua, chúng ta đi đến nơi nào đó thôi

24:17 chọn đơn vị đang hoạt động tiếp theo và sau đó

24:20 chọn Hãy vào trò chơi Handler của chúng tôi

24:22 và gọi chức năng này để lia máy ảnh

24:25 lên đơn vị của chúng ta, đúng như vậy

24:30 Để xem nào, được rồi, đây rồi, di chuyển thôi.

24:32 Cái này ở đây và bây giờ, hãy bỏ qua và

24:35 Nếu có thì bút máy ảnh thì cái đó

24:37 giờ tôi có thể di chuyển nó có thể bỏ qua bất kỳ cây bút chì nào

24:39 xuống và vân vân, được rồi, vậy đây là

24:41 Chỉ cần đánh bóng một chút thôi, được rồi, đây

24:45 chúng tôi đã có hệ thống hoạt động hoàn chỉnh

24:47 Hai đội: đội Xanh dương và Đội Đỏ

24:48 Bây giờ mỗi đơn vị có thể di chuyển một đòn tấn công trong

24:51 lượt của mình và tôi cũng có thể bỏ qua lượt nếu tôi

24:54 muốn để tôi có thể di chuyển đơn vị này rồi tôi có thể

24:57 thực hiện một đòn tấn công và sau khi tấn công là

24:59 Xong rồi giờ đến lượt đội đỏ

25:00 giờ tôi có thể di chuyển một đòn tấn công và ở đó

25:03 Bạn đi ngay bây giờ là ủng hộ đội xanh

25:04 Vì vậy, họ thay đổi giữa đội Đỏ và

25:07 Đội Xanh Dương bây giờ vì phong trào bạn

25:09 có thể xem các vị trí sự kiện mà chúng ta có thể

25:11 di chuyển đến tất cả các vị trí là

25:12 tích lũy bằng cách sử dụng pathfinder để chúng ta có thể

25:15 Chỉ di chuyển đến các vị trí hợp lệ nên ở đây

25:17 cái chuồng này đi được nên tôi không thể đi được

25:18 vào vị trí đó để tôi có thể nhấp vào một

25:20 Vị trí hợp lệ di chuyển vào đó và ngay bây giờ

25:22 nhấp để tấn công kẻ thù và

25:24 Giờ thì cuộc tấn công hiện tại chúng tôi đã chuẩn bị để

25:26 luôn được đánh giá nhưng chúng tôi có thể dễ dàng thêm vào

25:28 Tỷ lệ trúng dựa trên khoảng cách trong

25:30 bao vây để làm cho điều này đẹp đẽ hơn

25:31 giống như X hả, bạn có thể nhấp để di chuyển

25:34 nhấp để tấn công và nếu có thì bạn sẽ chọn như vậy

25:36 Ngay khi nó kết thúc, đến lượt của nó ngay bây giờ tôi

25:38 có thể di chuyển lại một đòn tấn công và tương tự bây giờ

25:40 ngay lúc này có thể là một

25:42 nút thắt hiệu suất là cách chúng tôi

25:43 tính toán tất cả các đường đi có thể có mà

25:45 đơn vị có thể chịu được tùy thuộc vào cách

25:48 Các đơn vị của bạn có thể di chuyển xa như vậy

25:50 Khá tốn kém hoặc không còn nhiều như bây giờ một chiều

25:52 Chúng ta có thể dễ dàng giải quyết bằng cách sử dụng

25:54 Tìm đường mà chúng tôi thực hiện bằng Unity

25:56 Chấm đó nếu bạn nhớ thì dùng được

25:58 nhanh gấp hàng nghìn lần so với cái này

26:00 Vậy nếu bạn muốn phát triển thêm

26:01 Hệ thống thì đó là một trong những vấn đề

26:03 rằng bạn thực sự có thể cải thiện vượt ra ngoài

26:04 rằng đây là một hệ thống hoạt động đầy đủ

26:06 Hệ thống chiến đấu theo lượt tuyệt vời cho tôi

26:08 hãy biết trong phần bình luận nếu bạn muốn

26:09 Xem tôi nói rõ hơn về điều này

26:10 để tạo ra một trò chơi hoàn chỉnh như Exxon

26:13 Video trở nên khả thi nhờ những điều này

26:14 Những người ủng hộ tuyệt vời đến

26:16 patreon.com/scishow

26:17 Code Monkey để nhận một số đặc quyền và sự giúp đỡ

26:19 giữ video miễn phí cho tất cả mọi người vì

26:21 Bạn luôn có thể tải dự án về

26:22 Tìm thấy một chút là từ truyện tranh Unity Calm

26:24 Đăng ký kênh để có thêm Unity

26:26 Hướng dẫn thúc đẩy các tài khoản Nuclear 7

26:28 và hẹn gặp lại lần sau

26:31 [Nhạc]