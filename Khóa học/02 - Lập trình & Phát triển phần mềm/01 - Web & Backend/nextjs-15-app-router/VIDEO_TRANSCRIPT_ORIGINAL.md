# TRANSCRIPT TIẾNG VIỆT (NGUỒN THAM KHẢO)

> Bản chép lời do người dùng cung cấp, chưa chỉnh lỗi ASR.

00:00 Chào mọi người, tôi tên là Vishwas và chào mừng bạn đến với khóa học hướng dẫn toàn diện nhất của năm tới trong suốt phần này

00:06 chúng tôi sẽ xây dựng từ đầu để khám phá tất cả các khái niệm chính trong Ni shares, chúng tôi sẽ tập trung vào phiên bản 15 và

00:12 Ở trên, tùy vào thời điểm bạn đang xem trong phần giới thiệu này, tôi sẽ trình bày những gì là lý do tại sao nó đáng để học và những gì

00:20 Bạn cần biết trước khi bắt đầu, vậy chính xác NEXS là gì là một framework React để xây dựng full stack web

00:28 Ứng dụng Khi xây dựng ứng dụng chỉ với React, không khả thi để tạo một ứng dụng đầy đủ tính năng

00:34 Ready for Production React là một thư viện để xây dựng giao diện người dùng chỉ chịu trách nhiệm cho lớp view của một

00:41 Ứng dụng, với tư cách là nhà phát triển, bạn cần đưa ra quyết định về các tính năng khác như định tuyến, lấy dữ liệu và nhiều hơn nữa. Tiếp theo.

00:48 SHS ngược lại, là một framework React sử dụng React để xây dựng giao diện người dùng nhưng cũng cung cấp

00:55 các tính năng bổ sung cho phép bạn xây dựng các ứng dụng sẵn sàng cho sản xuất Các tính năng này bao gồm tối ưu hóa định tuyến

01:02 kết xuất, lấy dữ liệu, đóng gói, biên dịch và nhiều hơn nữa, bạn không cần cài đặt thêm các gói làm NEX

01:09 cung cấp mọi thứ bạn cần, tuy nhiên hãy nhớ rằng NEX là một framework có những quan điểm và quy ước riêng nên

01:16 Được tuân thủ để triển khai các tính năng này, bạn không cần lo lắng vì các quy ước đã xuất phát từ một đội ngũ

01:22 Với nhiều năm kinh nghiệm viết ứng dụng React cho sản xuất, để nhắc lại, NEX là một framework React dành cho

01:29 Xây dựng các ứng dụng web full stack sẵn sàng sản xuất, giờ khi chúng ta đã hiểu NextJS là gì, hãy cùng xem tại sao nó đáng giá

01:36 Việc học lý do để học SH tiếp theo xuất phát từ việc nó đơn giản hóa quá trình xây dựng sẵn sàng sản xuất

01:42 ứng dụng web cho phép tôi liệt kê một số tính năng chính mà Nies cung cấp ngay từ đầu là định tuyến truyền thống

01:50 các ứng dụng react yêu cầu cài đặt và cấu hình các gói định tuyến bên thứ ba mỗi khi bạn cần tạo một

01:56 route nexts đơn giản hóa điều này với định tuyến dựa trên tệp, bạn chỉ cần tạo tệp và các tuyến đường sẽ tự động

02:03 tạo ra thứ hai là API routes, giúp nexs khác biệt như một full stack framework, bạn có thể xây dựng cả front-end

02:11 Các thành phần React và EPI backend trong cùng một ứng dụng NEXS, cho phép tích hợp liền mạch giữa fronter của bạn

02:17 Mã đầu cuối và phía sau thứ ba là sự linh hoạt của kết xuất tiếp theo, hỗ trợ cả kết xuất phía máy chủ và phía máy khách

02:25 Các phương pháp khi được triển khai đúng cách, điều này sẽ giúp cải thiện hiệu suất và tối ưu hóa công cụ tìm kiếm tốt hơn. Thứ tư là dữ liệu được tối ưu hóa.

02:34 Fetching XGS cung cấp hỗ trợ cho Esync trong các thành phần React, giúp việc lấy dữ liệu trở nên đơn giản và hiệu quả

02:41 xgs cũng linh hoạt với các phương pháp thiết kế hỗ trợ các module CSS, điều chỉnh các giải pháp CSS và CSS injs phù hợp với bạn

02:49 Ngoài ra, NextJS còn bao gồm các tối ưu hóa Boox cho hình ảnh, phông chữ và script giúp nâng cao

02:57 Các chỉ số web của ứng dụng và trải nghiệm người dùng tổng thể, cuối cùng Nexts đi kèm với quá trình phát triển tối ưu và

03:04 hệ thống xây dựng sản xuất: Điều này có nghĩa là bạn có thể tập trung viết mã thay vì xử lý các cấu hình phức tạp

03:10 Những tính năng này kết hợp lại tạo nên một framework mạnh mẽ cho phát triển web trong suốt khóa học này chúng tôi sẽ khám phá

03:17 từng tính năng chi tiết cũng xin lưu ý rằng tôi có thể chỉ gọi nexts là next trong khóa học nên xin đừng quá

03:24 giờ tôi bối rối rồi, còn các yêu cầu tiên quyết về HTML, CSS, model và kiến thức JavaScript là gì vì

03:32 NextJS là một framework của React, cũng rất quan trọng để hiểu rõ các nguyên tắc cơ bản của React trong khi bạn chưa có

03:38 bạn cần là chuyên gia, bạn nên quen thuộc với các khái niệm như thành phần hàm, props, State jsx và hooks nếu

03:46 Bạn mới làm quen với React. Tôi có một loạt hướng dẫn chi tiết bao gồm React từ trình độ sơ cấp đến nâng cao nên hãy chắc chắn

03:52 Để kiểm tra điều đó, mục tiêu của tôi là hướng dẫn bạn từ người mới hoàn toàn trở thành chuyên gia vào năm tới, bạn có thể tìm thấy tất cả

03:59 Mã nguồn cho khóa học này trong kho GitHub Liên kết Trong phần mô tả với phần giới thiệu này, hãy cùng

04:04 Tiếp tục xây dựng ứng dụng Hello World đầu tiên của chúng ta trong Nex. Hãy cùng nhau tạo ứng dụng Nexs đầu tiên. Trước tiên.

04:14 Chúng ta cần thiết lập môi trường phát triển của mình, chúng ta cần hai thứ Nodejs và một trình soạn thảo văn bản tùy ý. Head.

04:21 đến nodejs.org để tải xuống và cài đặt phiên bản ổn định mới nhất của node.js nếu bạn đã cài đặt

04:29 chỉ cần đảm bảo nó cập nhật, Nextjs yêu cầu Nodejs phiên bản 18.18 hoặc mới hơn cho trình soạn thảo văn bản, cá nhân tôi

04:38 Khuyến nghị VS Code, bạn có thể lấy từ Code, Dovisual Modeling studio.com Được rồi, môi trường của chúng ta đã sẵn sàng. Hãy cùng khám phá thôi. Tôi đã

04:47 tạo một thư mục tên là hướng dẫn nexs và mở mã VS trong đó. Thư mục này sẽ là không gian làm việc của chúng tôi xuyên suốt

04:54 Khóa học: Tạo một dự án mới cho năm tới cực kỳ đơn giản, chỉ cần một lệnh mở bảng điều khiển terminal của bạn

05:03 pactic là phím tắt và chạy lệnh npx tạo dấu gạch nối tiếp theo ứng dụng chậm nhất khi bạn làm điều này, bạn sẽ

05:14 xem một số prompt trước tiên nó sẽ hỏi tên dự án, chúng tôi sẽ gọi nó là hello dấu gạch nối thế giới, rồi bạn sẽ thấy

05:22 bảy câu hỏi cấu hình để tôi hướng dẫn bạn qua các lựa chọn này, chúng tôi muốn typescript, chúng tôi muốn eslint, chúng tôi muốn t in

05:29 CSS, chúng ta muốn mã của mình nằm trong thư mục nguồn, chúng ta sẽ dùng bộ router ứng dụng mới turbo pack ổn định ở phiên bản 15 nhưng

05:38 Chúng tôi sẽ tạm thời không nhập và giữ nguyên bí danh nhập mặc định, cho nó vài giây để nó hoạt động và

05:45 bạn sẽ thấy một thư mục mới có tên hello world với ứng dụng NEXS bên trong để chạy ứng dụng điều hướng

05:53 vào thư mục dự án với lệnh CD hello dấu gạch nối thế giới, sau đó chạy lệnh npm chạy Dev, điều này bắt đầu một

06:02 máy chủ phát triển trên Local Host P 3000 Control Plus nhấp vào hoặc command plus nhấp vào liên kết nó cung cấp để mở ứng dụng ngay trong

06:13 trình duyệt của bạn và thế là xong, ứng dụng hell World của bạn đã hoạt động, bạn sẽ thấy trang chào mừng của SH tiếp theo.

06:20 với hướng dẫn bắt đầu bằng cách chỉnh sửa Source slapp p. TSX save và xem ngay các thay đổi của bạn

06:29 Hãy làm chính xác như vậy, quay lại mã VS, thu nhỏ terminal với control backtick, mở thư mục nguồn rồi

06:38 thư mục ứng dụng và trang tìm. TSX ở đây, nếu bạn cuộn xuống bạn sẽ thấy hai hướng dẫn bắt đầu bằng cách chỉnh sửa

06:46 Trang Slapp nguồn. TSX và lưu lại để xem ngay các thay đổi của bạn, hãy thay thế văn bản trong mục danh sách thứ hai bằng Hello

06:56 Lưu thế giới và trình duyệt sẽ tự động làm mới và bạn sẽ thấy văn bản của mình thay đổi trên màn hình giống như vậy

07:04 rằng bạn đã có ứng dụng NS đầu tiên chạy ngay khi chúng ta biết cách tạo ứng dụng nexs bằng Create

07:10 ứng dụng tiếp theo, hãy cùng xem cấu trúc thư mục của Dự án, trước đó chúng ta đã học cách tạo và chạy một ứng dụng NXS cơ bản

07:20 bây giờ chúng ta sẽ đi sâu vào cấu trúc của Dự án để hiểu điều gì khiến mọi thứ diễn ra khi chúng ta chạy

07:26 Ứng dụng Tôi đã mở dự án hello world trong VS Code và ở cấp gốc chúng ta có thể thấy bốn thư mục và 10 thư mục

07:34 hãy phân tích từng cái một, bắt đầu với các tệp đầu tiên chúng ta có package.json đây là nơi tất cả các tệp của chúng ta

07:42 Dự án phụ thuộc và script sống cho phụ thuộc Chúng tôi có những điều cần thiết cho phiên bản 15 React vào năm tới

07:50 và react Dom phiên bản 19, tùy thuộc vào lựa chọn của bạn trong quá trình thiết lập, bạn cũng có thể có typescript với các kiểu của nó

07:58 Tailwind với các gói sau CSS và eslin, phần script khá đơn giản cho chế độ phát triển

08:07 xây dựng cho sản xuất, bắt đầu để chạy máy chủ sản xuất và liên kết để thiết lập liên kết ES tích hợp trong jss tiếp theo

08:14 cấu hình một tệp package.json đơn giản với các phụ thuộc và kịch bản. Tiếp theo là cấu hình của chúng tôi

08:22 Hồ sơ tiếp theo chúng ta có. config dots cho năm sau: Ts config.js cho TypeScript Eslint config.js cho Eslint và cả hai Twin.

08:37 config.cfg MGS for tailn CSS cũng có một vài file mà chúng tôi sẽ không tập trung nhiều trong khóa package khóa học này. Json mà

08:47 đảm bảo cài đặt nhất quán các phụ thuộc của chúng tôi bị bỏ qua cho Kiểm soát Phiên bản tệp readme chứa một

08:55 Một vài hướng dẫn liên quan đến việc chạy, xây dựng và triển khai ứng dụng cũng như môi trường tiếp theo. D.S chứa

09:02 typescript Các khai báo cho n shs bây giờ hãy tiến hành đến các thư mục khác nhau trước, thư mục tiếp theo sẽ được truy cập

09:10 được tạo ra khi bạn chạy các script Dev hoặc Bild, đó là nơi ứng dụng NEX của bạn thực sự được phục vụ, bạn sẽ

09:17 lưu ý thư mục này bị bỏ qua G nên đừng quá lo lắng về nó trong quá trình phát triển khi chúng ta có node

09:24 Modules là nơi lưu trữ tất cả các phụ thuộc đã cài đặt của chúng tôi, điều này được tạo ra khi bạn chạy cài đặt npm hoặc trong trường hợp của chúng tôi khi chúng tôi

09:32 chạy tập lệnh dev sẽ tự động xử lý việc cài đặt nếu cần, như thư mục tiếp theo mà nó muốn lấy

09:39 cũng bị bỏ qua và chúng ta không cần phải lo lắng về điều đó trong quá trình phát triển, thư mục thứ ba là thư mục công cộng, khá ổn

09:45 quan trọng là nơi tất cả các tài sản tĩnh như hình ảnh và SVG của bạn được đặt. Cuối cùng chúng ta đã có phần bắt đầu của chương trình.

09:53 Thư mục nguồn bên trong thư mục nguồn là thư mục app, tức là bộ định tuyến ứng dụng, đây là nơi chúng ta sẽ dành phần lớn thời gian của chúng ta

10:02 trong khóa học này, hiện tại nó chứa bốn tệp, biểu tượng F cho tab trình duyệt, biểu tượng toàn cục. CSS cho bố cục kiểu trên toàn ứng dụng. TSX cho

10:13 Các thành phần giao diện người dùng dùng chung trên các trang và trang. TSX tạo ra những gì bạn thấy tại localhost với giá 3000 trên trang này. TSX là

10:22 Những gì chúng tôi đã chỉnh sửa trước đó, thành phần Home được định nghĩa ở đây sẽ được lắp vào layout. TSX dành cho trẻ em Pro top đến

10:30 Tạo giao diện người dùng hoàn chỉnh trong bố cục. TSX, tùy vào phiên bản nhỏ của nexs, bạn có thể thấy phông Guist được nhập dưới dạng

10:38 Phông chữ Google hoặc cũng có thể được tham chiếu như một phông chữ cục bộ không ảnh hưởng đến việc học của chúng ta nên đừng quá lo lắng về

10:45 nhưng để tôi giải thích cách mọi thứ kết nối khi chúng ta chạy lệnh npm run Dev trong terminal thì quá trình thực thi bắt đầu

10:53 từ package.json chuyển đến bố cục. TSX hiển thị thành phần bố cục gốc cho URL localhost 3000 mà nó tìm kiếm

11:03 Thành phần trong trang. TSX trong thư mục ứng dụng là thành phần chính của chúng ta, nó hiển thị thành phần này bên trong root

11:12 Bố cục bạn có thể đang thắc mắc thư mục ứng dụng này xử lý định tuyến trong ứng dụng của chúng ta như thế nào, nhưng trước khi chúng ta đến đó, chúng ta

11:19 cần đề cập đến một số khái niệm react mới là nền tảng cho cách chúng ta viết mã năm sau, hãy cùng khám phá những điều đó

11:27 Tiếp theo, trước khi đi sâu vào định tuyến, hãy cùng tìm hiểu một khái niệm cơ bản giúp chúng ta hiểu rõ hơn cách định tuyến

11:34 Hoạt động trong X chia sẻ khái niệm là các thành phần react server hoặc RSC cho các thành phần react server ngắn gọn là một kiến trúc mới

11:42 kiến trúc này được nhóm react giới thiệu và nhanh chóng được Shar tiếp tục áp dụng. Kiến trúc này mang đến một cách tiếp cận mới

11:49 Để tạo thành phần React bằng cách chia chúng thành hai loại riêng biệt: thành phần máy chủ và thành phần máy khách, chúng ta sẽ

11:56 Khám phá các loại thành phần này chi tiết hơn khi chúng ta tiến về phía trước, nhưng hiện tại hãy tập trung vào một vài điểm chính

12:03 NEX mặc định sẽ cấu trúc tất cả các thành phần dưới dạng thành phần máy chủ, các thành phần này có thể thực hiện các tác vụ bên máy chủ như đọc

12:10 tệp hoặc lấy dữ liệu trực tiếp từ cơ sở dữ liệu, sự đánh đổi là họ không thể sử dụng react hook hoặc xử lý người dùng

12:17 tương tác Nếu bạn muốn tạo thành phần client, bạn sẽ cần thêm chỉ thị sử dụng client ở đầu

12:23 tệp thành phần của bạn trong khi các thành phần khách hàng không thể thực hiện các tác vụ phụ của máy chủ như đọc các tệp mà chúng có thể sử dụng

12:29 Các tương tác hook và handle hãy nghĩ về các thành phần client như các thành phần react truyền thống mà bạn đã quen thuộc

12:36 Với các phiên bản React trước khi chúng ta đi vào định tuyến, bạn sẽ thấy các ví dụ thực tế về cả hai thành phần

12:42 Các loại Chúng ta sẽ làm việc với một số thành phần để các thao tác nhất định hoàn thành trước khi kết xuất

12:47 và chúng tôi sẽ sử dụng các thành phần khách hàng để tận dụng các hook từ module định tuyến có điều này

12:54 Hiểu cơ bản về các thành phần máy chủ và máy khách sẽ giúp bạn hiểu rõ hơn khái niệm định tuyến CEPS nếu không có

13:00 Nếu điều này có ý nghĩa ngay bây giờ thì đừng lo, chúng tôi sẽ trình bày tất cả về thành phần React Server trong nhiều chi tiết hơn

13:06 chi tiết ở phần sau của khóa học. Được rồi, với nền tảng này, hãy cùng bắt đầu với định tuyến. Tiếp theo, hãy cùng khám phá một trong các JS của NEX.

13:16 các tính năng cốt lõi định tuyến nextjs sử dụng hệ thống định tuyến dựa trên hệ thống tệp, nghĩa là các URL bạn có thể truy cập trong trình duyệt của mình là

13:24 dựa trên cách bạn tổ chức các tệp và thư mục trong mã của mình, để tôi chỉ cho bạn cách điều này hoạt động với một số

13:29 Ví dụ thực tế Tôi đã tạo một dự án NEX mới sử dụng lệnh npx create next app ở phiên bản demo dấu gạch nối định tuyến mới nhất

13:38 Demo định tuyến là tên của dự án của chúng tôi. Khi lệnh hoàn thành thành công, bạn sẽ có một dự án tương tự như

13:44 của tôi, hãy điều hướng đến thư mục Nguồn, bây giờ chúng ta sẽ bắt đầu lại bằng cách xóa thư mục ứng dụng vì chúng ta sẽ xây dựng

13:52 routes từ đầu, tôi đã đề cập trước đó rằng next s có cơ chế định tuyến dựa trên file, bạn có thể tự nhiên làm mọi file

14:04 Trong thư mục ứng dụng của chúng tôi, hãy trở thành một tuyến đường, không hoàn toàn tiếp theo, cô ấy được xây dựng dựa trên các quy ước và định tuyến chỉ là một lĩnh vực

14:11 Khi các quy ước này đặc biệt quan trọng, có ba quy ước chính cần ghi nhớ: trước hết là các tuyến đường

14:19 phải nằm trong thư mục ứng dụng, các tệp tuyến thứ hai phải được đặt tên là page.js hoặc trang. TSX tùy thuộc vào việc bạn có phải là người hay không

14:28 sử dụng typescript third, mỗi thư mục đại diện cho một đoạn của đường dẫn URL khi các quy ước này được tuân thủ tự động tệp

14:36 trở nên khả dụng như một tuyến đường Hãy áp dụng điều này vào thực tế cho kịch bản một: chúng ta muốn tạo một trang chủ hiển thị

14:44 khi ai đó truy cập trang web của chúng tôi tại Local Host Port 3000, hãy quay lại VS code và triển khai kịch bản này

14:51 quy ước khóa đầu tiên trong định tuyến EX là tất cả các tuyến đường phải được đặt trong một thư mục ứng dụng trong thư mục nguồn.

14:59 Tạo thư mục này Quy ước thứ hai là bất kỳ tệp nào được định làm route đều phải được đặt tên là Page. TSX hoặc page.js nếu bạn không dùng

15:09 TypeScript Hãy tạo một trang. Tệp TSX trong thư mục ứng dụng từ tệp này, chúng ta sẽ mặc định xuất một thành phần react đơn giản

15:20 hàm mặc định về home và điều này trả về một thẻ mỗi một với nội dung chào mừng về nhà, và như vậy chúng ta đã tạo ra

15:29 tuyến đầu tiên của năm sau trong terminal chạy lệnh npm chạy Dev để khởi động máy chủ dev trong trình duyệt.

15:38 Localhost 3000 và bạn sẽ thấy Welcome Home hiển thị, đây là trang Khái niệm Định tuyến Khóa đầu tiên của chúng tôi. TSX

15:46 tệp bên trong thư mục ứng dụng tự động ánh xạ tới URL gốc của trang web mà chúng tôi đã triển khai thành công

15:54 Kịch bản một: Trước khi tiếp tục, hãy cùng nói về bố cục. TSX mặc dù chúng tôi đã xóa tệp này khi

16:01 việc xóa thư mục ứng dụng Nexts sẽ tự động tạo và thiết lập khi bạn truy cập route gốc lần đầu, chúng tôi sẽ

16:09 Khám phá các bố cục sâu hơn sau, nhưng hiện tại hãy nhớ rằng tệp này sẽ được tạo tự động phía sau hậu trường

16:16 Bây giờ hãy giải quyết kịch bản số hai: Đối với kịch bản này, chúng ta cần tạo thêm hai tuyến đường nữa, một cho trang Giới thiệu.

16:23 và một trong trang hồ sơ, URL sẽ đọc localhost 3000 slab và localhost 3000 SL profile trong vs

16:32 mã Hãy tạo các tuyến đường này Có ba bước đơn giản, đầu tiên hãy tạo một thư mục mới tên là About bên trong ứng dụng

16:41 Thư mục thứ hai trong thư mục Giới thiệu này Tạo một trang. tệp TSX thứ ba từ tệp này xuất mặc định một react

16:51 hàm xuất mặc định thành phần mà trả về mỗi cái về tôi tương tự tạo một thư mục khác trong

17:00 Thư mục ứng dụng có tên là Hồ sơ bên trong trang Tạo Thư mục.

17:05 Tệp TSX từ tệp này xuất mặc định một thành phần react xuất hồ sơ hàm mặc định, trả về một thẻ H1 có ghi là my

17:15 hồ sơ sau khi lưu tệp và quay lại trình duyệt, trang chủ vẫn sẽ hiển thị ở gốc

17:21 Định tuyến Cổng Máy chủ Địa phương 3000 Khi bạn điều hướng đến slab localhost 3000, bạn sẽ thấy trang Giới thiệu về tôi và tương tự

17:31 Đi đến hồ sơ SL sẽ hiển thị trang hồ sơ của tôi, kịch bản 2 giờ đã hoàn thành khái niệm định tuyến khóa thứ hai để

17:39 Hãy nhớ rằng các tuyến đường được liên kết trực tiếp với tên thư mục của chúng trong thư mục ứng dụng trên một trang. Tệp TSX bên trong

17:47 Thư mục Giới thiệu ánh xạ đến tuyến slab và một trang. Tệp TSX bên trong thư mục hồ sơ ánh xạ đến đường đi hồ sơ cho phép tôi

17:56 Cho bạn xem một hình ảnh nhanh về tất cả những gì chúng ta đã đề cập cho đến nay, trang này khá đơn giản. TSX trong

18:03 thư mục ứng dụng ánh xạ trực tiếp đến tuyến gốc và mỗi thư mục trong thư mục ứng dụng ánh xạ trực tiếp đến một đoạn trong url của bạn

18:10 bây giờ bạn có thể đang thắc mắc điều gì xảy ra nếu ai đó cố truy cập một URL không khớp với bất kỳ tệp nào trong ứng dụng của bạn

18:17 giả sử ai đó cố gắng truy cập bảng điều khiển SL, trong trường hợp này NEX đã hỗ trợ bạn, nó sẽ tự động phục vụ

18:25 lên phản hồi không tìm thấy 404 bạn không cần viết mã đặc biệt nào để xử lý các tuyến không tồn tại này đến giờ bạn

18:32 Bạn nên hiểu rõ cách định tuyến dựa trên tệp hoạt động trong XJS. Điều tuyệt vời của hệ thống này là bạn không cần

18:39 cần chỉnh sửa cài đặt và cấu hình router trong mã của bạn, cấu trúc tệp và thư mục của bạn làm tất cả

18:45 Heavy Lifting Đây là ví dụ hoàn hảo cho triết lý của NEX ưu tiên quy ước hơn là cấu hình khi nó

18:52 Quay lại với định tuyến, được rồi, hãy tiếp tục khám phá thêm về định tuyến. Trước đó chúng ta đã có cái nhìn thoáng qua về Nex

19:01 Hệ thống định tuyến dựa trên tệp mà chúng tôi đã thấy trên trang. Tệp TSX trong thư mục ứng dụng ánh xạ đến một miền gốc và trang how. Tệp TSX trong

19:10 các thư mục con tạo các tuyến trùng với tên thư mục của chúng như về và hồ sơ bây giờ hãy cùng xử lý các tuyến lồng nhau trong kịch bản 3

19:19 chúng ta cần thiết lập một trang hiển thị khi người dùng truy cập blog Local Host 3000 SL, chúng ta cũng cần xử lý hai

19:26 các tuyến đường bổ sung localhost 3000 /blog slir và Loos 3000 blog2 để tôi cho bạn thấy việc này dễ dàng thế nào với bộ định tuyến ứng dụng trước tiên hãy cùng

19:38 Tạo một thư mục khối bên trong thư mục ứng dụng của chúng tôi. Bên trong thư mục khối này, chúng tôi sẽ thêm trang. Tệp TSX với một đơn giản

19:47 Thành phần React được xuất dưới dạng trang SO mặc định. TSX và thành phần react xuất blog hàm mặc định trả về H1

19:57 gắn thẻ blog của tôi. Nếu chúng tôi lưu lại và kiểm tra Localhost 3000 /blog, chúng tôi sẽ thấy ngay trang blog của mình, trang này đã xử lý phần đầu tiên

20:08 Kịch bản 3 nhưng còn các tuyến lồng nhau này thì sao? SL blog SLfirst và SL blog SLC thì sao? Đây là lúc Nex thực sự tỏa sáng.

20:19 có thể đơn giản tạo hai thư mục mới bên trong thư mục khối có tên first và second, do đó thư mục mới trước, thư mục mới thứ hai trong

20:31 Mỗi thư mục chúng tôi sẽ tạo một trang. Tệp TSX với thành phần riêng được xuất làm trang mặc định.

20:40 TSX và một trang khác. TSX, chúng tôi xuất một hàm mặc định gọi là first blog, trả về một thẻ each1, bài đăng blog đầu tiên và

20:51 ở phần còn lại, chúng ta xuất một hàm mặc định, blog thứ hai trả về thẻ H1, bài blog thứ hai nên lưu các tệp

21:00 điều hướng đến localhost 3000 /blog slfirst và bạn sẽ thấy trang khối đầu tiên hiển thị chính xác vị trí cần thiết và

21:09 tương tự, khi bạn điều hướng đến /blog SLC, bạn sẽ thấy trang block thứ hai giống như cách chúng tôi đã triển khai

21:17 Kịch bản thứ ba: Đây là trang minh họa cách các tuyến lồng nhau này hoạt động. TSX trong thư mục ứng dụng

21:24 tương ứng với trang route gốc. TSX trong thư mục block tương ứng với trang /blog. TSX trong thư mục đầu tiên

21:32 tương ứng với / blog slir và tương tự /blog SL2, điểm chính ở đây là nexs phản chiếu cấu trúc thư mục của bạn trong

21:41 URL tự động, đó là cách tiếp theo chúng ta sẽ xem một điều gì đó còn mạnh mẽ hơn, các tuyến động mà chúng ta đã biết trước đây

21:52 các tuyến lồng nhau bằng cách tạo một thư mục khối trong thư mục ứng dụng với thư mục con thứ nhất và thứ hai, mỗi thư mục con có

22:00 trang riêng. Tệp TSX tương ứng với /blog slir và /blog SLC, mặc dù điều này hoạt động cho các trường hợp đơn giản sử dụng các phần định nghĩa sẵn, nhưng không phải lúc nào cũng vậy.

22:12 Thực tiễn cho các ứng dụng phức tạp, hãy cùng tìm hiểu kịch bản 4 để hiểu tại sao trong kịch bản này chúng ta lại xây dựng một

22:19 danh sách sản phẩm và trang Chi tiết khi người dùng truy cập sản phẩm SL, họ sẽ thấy danh sách gồm ba sản phẩm

22:27 Khi họ điều hướng đến/ sản phẩm rồi đến các sản phẩm đó thì họ nên thấy chi tiết cho sản phẩm đó

22:33 ví dụ như điều hướng đến/ sản phẩm SL1 nên hiển thị chi tiết về sản phẩm đầu tiên sản phẩm SL2

22:41 nên hiển thị chi tiết về sản phẩm thứ hai, v.v. Để tôi chỉ cho bạn cách chúng ta có thể triển khai điều này trong NEXS, trước tiên hãy cùng

22:48 Tạo một thư mục sản phẩm trong thư mục ứng dụng của chúng tôi Thư mục mới Sản phẩm bên trong chúng ta sẽ tạo một trang. Tệp TSX

22:58 tệp này sẽ chứa một thành phần react hiển thị danh sách ba sản phẩm để xuất danh sách sản phẩm hàm mặc định

23:07 và chúng tôi trả về một H1 ghi danh sách sản phẩm và ba H2 cho sản phẩm một, 2 và 3 nếu bạn truy cập Localhost 3000

23:18 Các sản phẩm SL bạn sẽ thấy danh sách sản phẩm của chúng tôi, phần một đã hoàn thành dựa trên những gì chúng tôi đã học về các tuyến đường lồng nhau

23:28 bạn có thể nghĩ rằng chúng ta có thể tạo các thư mục riêng cho từng sản phẩm, đúng là một thư mục cho mã sản phẩm 1, một thư mục cho

23:35 Product ID 2 và tương tự trước và thứ hai trong thư mục khối của chúng ta, hãy thử cách tiếp cận đó, trước tiên chúng ta sẽ tạo một

23:43 Thư mục được đặt tên là một trong thư mục sản phẩm của chúng tôi và thêm một trang. Ở đây chúng ta sẽ xuất mặc định một thành phần react

23:53 hiển thị chi tiết văn bản về sản phẩm sử dụng thẻ H1 xuất hàm mặc định, trả về chi tiết sản phẩm và

24:01 mỗi cái đều có chi tiết về sản phẩm, chắc chắn nếu chúng ta truy cập sản phẩm Local Host 3000 SL SL1 thì nó hoạt động nhưng đây là

24:11 Hãy tưởng tượng việc có hàng trăm sản phẩm tạo một thư mục cho mỗi sản phẩm sẽ là một cơn ác mộng bảo trì, đây là một cơn ác mộng

24:19 khi các phân đoạn định tuyến động hữu ích, trước tiên hãy xóa thư mục này và thay vào đó chúng ta sẽ tạo một thư mục đặc biệt

24:28 với dấu ngoặc vuông nên trong sản phẩm thư mục mới, dấu ngoặc vuông chúng ta sẽ gọi là ID sản phẩm. Tôi dùng ID sản phẩm thay vì

24:39 hoặc chỉ là ID vì nó mô tả rõ ràng hơn trong thư mục này, chúng ta sẽ tạo trang của mình. Chúng tôi sẽ làm tệp TSX

24:46 xuất mặc định cùng một thành phần, xuất chức năng mặc định chi tiết sản phẩm trả về mỗi chi tiết thẻ về sản phẩm

24:54 nhưng giờ đây có điều thú vị xảy ra khi bạn làm mới trình duyệt và truy cập sản phẩm SL SL1, chúng ta sẽ thấy sản phẩm

25:02 Trang chi tiết truy cập sản phẩm SL2 sản phẩm SL3 thậm chí sản phẩm SL100 đều hoạt động tốt vì

25:15 Nexus xử lý tên thư mục trong ngoặc vuông như một phân đoạn động, giúp các tuyến của chúng tôi trở thành ID sản phẩm động và linh hoạt

25:23 ở đây ám chỉ mã sản phẩm từ 1 đến 100 v.v., nhưng việc hiển thị cùng một văn bản này cho mọi sản phẩm không thực sự hữu ích trong một

25:33 ứng dụng thật bạn có thể lấy chi tiết sản phẩm từ API dựa trên ID sản phẩm này, ít nhất là bây giờ

25:40 hiển thị sản phẩm mà chúng ta đang xem bây giờ Mỗi trang trong bộ định tuyến ứng dụng đều nhận các tham số định tuyến qua prop tham số

25:48 Hãy phân cấu trúc nó dưới dạng tham số, loại tham số là một lời hứa kết quả cho một đối tượng chứa

25:58 phân đoạn động như các cặp giá trị khóa trong trường hợp của chúng ta, đó là ID sản phẩm, tên thư mục của chúng ta, điểm hay của máy chủ

26:07 thành phần là chúng ta có thể sử dụng AIT không đồng bộ để giải quyết lời hứa và truy cập phân đoạn động, do đó xuất ra mặc định không đồng bộ

26:16 chi tiết sản phẩm hàm và trong thành phần const product ID bằng các tham số AWA và truy cập hiển thị product ID

26:26 Mã sản phẩm trong giao diện người dùng: Khi bạn truy cập sản phẩm SL1, bạn sẽ thấy chi tiết về sản phẩm một và/ sản phẩm sl100 hiển thị chi tiết về

26:38 sản phẩm 100 và nhớ rằng ID không nhất thiết phải là số, có thể là chuỗi, ví dụ như sản phẩm SL, iPhone và chúng ta

26:46 xem chi tiết về sản phẩm iPhone kịch bản 4 đã được triển khai thành công để tôi tóm tắt những gì chúng tôi

26:53 đã xây dựng, chúng tôi đã tạo một thư mục với dấu ngoặc vuông chứa mã sản phẩm và được ghi . TSX bên trong nó và giờ là Nexts trên Maps

27:02 bất kỳ sản phẩm SL nào trượt URL đến tệp này bên trong thành phần, chúng ta lấy ID sản phẩm từ prop parms để hiển thị Dynamic

27:11 Nội dung ở đây là trang trực quan hóa các tuyến đường động. TSX trong thư mục ứng dụng tương ứng với tuyến gốc

27:19 trang. TSX trong thư mục products tương ứng với sản phẩm và trang. TSX trong ID sản phẩm trong ô vuông

27:27 thư mục dấu ngoặc tương ứng với một đoạn động SL1 SL2 sl00 và tương tự mẫu này rất hữu ích cho việc xây dựng

27:36 liệt kê các chế độ xem chi tiết trong ứng dụng của bạn dù bạn đang xây dựng một trang thương mại điện tử với hàng triệu sản phẩm hay Blog

27:43 với vài trăm block post hoặc bất kỳ ứng dụng nào cần định tuyến động, cách tiếp cận này sẽ phục vụ bạn rất tốt. Hãy cùng phát triển kiến thức của chúng ta về

27:52 các tuyến động và khám phá các tuyến động lồng nhau trong các ứng dụng thực tế mà bạn thường gặp

27:58 các kịch bản bạn cần xử lý nhiều đoạn động trong các tuyến đường của mình hãy xem xét kịch bản 5 bạn muốn hiển thị

28:05 Chi tiết sản phẩm tại/ products1 nhưng bạn cũng cần hiển thị đánh giá đầu tiên cho sản phẩm đó tại/ products1 đánh giá SL SL1 để tôi chỉ cho bạn

28:16 cách thiết lập điều này với bộ định tuyến ứng dụng trước đây chúng tôi đã thiết lập định tuyến ID sản phẩm động, đó là lý do/product1 đã có

28:25 hiển thị chi tiết sản phẩm ngay bây giờ Hãy cùng đối mặt với sản phẩm SL Đánh giá SL1 SL SL1 nếu bạn thoải mái với file

28:34 Dựa trên định tuyến, phần tiếp theo này sẽ được hiểu ngay lập tức khi chúng ta xử lý nhiều đoạn đường dẫn khác nhau, chúng ta

28:40 cần suy nghĩ về các thư mục lồng nhau, đây là những việc đầu tiên chúng ta sẽ làm trong thư mục ID sản phẩm: tạo một đánh giá.

28:49 thư mục này cung cấp cho chúng ta mã sản phẩm SL/ đánh giá, nhưng chúng ta chưa xong, chúng ta cũng cần một mã đánh giá động nên

28:59 bên trong thư mục đánh giá này, tạo một thư mục khác có tên review ID trong dấu ngoặc vuông trong thư mục này tạo một

29:09 trang. Ở đây, hãy định nghĩa một thành phần react hiển thị cả ID sản phẩm và ID đánh giá để xuất mặc định async

29:18 chức năng đánh giá sản phẩm và chúng tôi cấu trúc lại các tham số đường dẫn là loại hứa hẹn sẽ kết quả với mã sản phẩm

29:28 là kiểu chuỗi và ID đánh giá kiểu chuỗi sản phẩm và mã đánh giá tương ứng với mã sản phẩm là động

29:37 Route và Review ID cũng là Dynamic route trong thành phần, chúng tôi phân cấu trúc Product ID và Review ID bằng cách chờ đợi

29:48 sau đó, chúng tôi trả về từng ID đánh giá và tiếp theo là ID sản phẩm sản phẩm ngay bây giờ để phần thú vị trong

29:59 trình duyệt điều hướng đến sản phẩm localhost 3000 SL1 Đánh giá SL1 và bạn sẽ thấy chính xác những gì chúng tôi muốn đánh giá một

30:09 Đối với sản phẩm số một, thử thay đổi URL, có thể vào sản phẩm 100 và xem lại ID số năm, theo dõi các ID đó cập nhật theo thời gian thực

30:19 đánh giá năm cho sản phẩm 100 Chúng tôi đã triển khai thành công kịch bản 5 Dưới đây là hình ảnh trực quan giúp bạn hình dung

30:27 các tuyến động lồng nhau này. TSX trong thư mục ứng dụng tương ứng với trang gốc. TSX Within sản phẩm

30:34 tương ứng với/ sản phẩm p. TSX trong mã sản phẩm tương ứng/ một chúng tôi không có tuyến duyệt danh sách và chúng tôi bỏ qua đến

30:44 xem lại ID ở đâu là trang. TSX tương ứng với đánh giá ID one sản phẩm SL1 đánh giá SL1 điểm chính ở đây là

30:54 rằng bạn có thể tạo các tuyến động lồng nhau đơn giản bằng cách sử dụng d đoạn DC với tên thư mục lồng nhau, nhưng đây là

31:01 một điều thú vị nexs thực ra có một cách khác để xử lý nhiều phân đoạn linh kiện động trước khi chúng ta đi sâu vào điều đó.

31:09 Có một bài tập để bạn thực hiện một trang liệt kê đánh giá cho mỗi sản phẩm, vì vậy hãy tạo một trang. Tệp TSX trong phần đánh giá

31:17 Thư mục và liệt kê vài bài đánh giá Hãy cho tôi biết kết quả ở phần bình luận Hãy cùng khám phá một bài đánh giá mạnh mẽ khác

31:25 Khái niệm định tuyến gọi là Catchall Segment để hiểu rõ hơn, hãy xem xét kịch bản 6, hãy tưởng tượng chúng ta đang xây dựng một

31:33 trang tài liệu cho dự án của chúng tôi Trang này có nhiều tính năng và mỗi tính năng chứa nhiều Khái niệm

31:40 cần tài liệu minh họa: một điều hướng bên với năm tính năng, trong đó tính năng đầu tiên mở rộng để hiển thị năm tính năng.

31:46 các khái niệm khác nhau, mục tiêu là tạo ra các tuyến riêng biệt cho từng khái niệm dưới các tính năng tương ứng của nó, hãy cân nhắc các URL như

31:54 localhost 3000 do/ tính năng 1 khái niệm SL 1/ do/ tính năng 1/c khái niệm 2/ do/ tính năng 2/ khái niệm 1 và tương tự bây giờ nếu chúng ta

32:07 có 20 tính năng và mỗi tính năng có 20 khái niệm, chúng tôi xem xét 400 tuyến đường khác nhau vì nexs sử dụng hệ thống tệp

32:16 Định tuyến điều đó có nghĩa là 400 tệp riêng biệt trong một dự án nhưng đây là lúc Định tuyến Động phát huy tác dụng

32:23 sử dụng các thư mục Dynamic route với ID khái niệm, chúng ta có thể giảm xuống chỉ còn 20 tệp, tiến thêm một bước nữa

32:30 làm cho thư mục tính năng động với ID tính năng và chúng ta chỉ còn hai thư mục, một cho ID tính năng và một cho

32:38 Khái niệm ID tốt hơn nhiều nhưng vẫn có một điều kiện mỗi khi chúng ta thêm đoạn A New Path vào URL như SL docs SL

32:48 có một khái niệm SLC, một ví dụ SL, chúng ta cần một cấp độ lồng nhau nữa trong thư mục routes vì mỗi trang đều trong

32:57 Tài liệu của chúng ta chia sẻ cùng bố cục Sẽ tuyệt biết bao nếu chúng ta có thể xử lý tất cả các đoạn tuyến này chỉ với một

33:03 Đó chính là những gì tính năng Catch All Segments cho phép chúng tôi làm. Để tôi chỉ cho bạn cách thiết lập nó trong thư mục ứng dụng của bạn.

33:11 tạo một thư mục docs bên trong tạo một thư mục khác với quy ước đặt tên đặc biệt của nexs sử dụng dấu ngoặc vuông với

33:22 ba dấu chấm như toán tử trải rộng theo sau là tên mà chúng ta sẽ sử dụng slug vì đây là thuật ngữ phổ biến cho URL

33:32 Sau đó tạo một trang. Tệp TSX trong thư mục slug mặc định xuất một thành phần react để xuất hàm mặc định nói rằng

33:42 trả về một thẻ H1 talks homepage: điều kỳ diệu của tệp này là nó khớp với bất kỳ URL nào có DO trong đường dẫn, hãy thử

33:53 dù bạn truy cập SL dos tính năng SL 1/c concept one hay thậm chí SL do/feature oneconcept one SL một ví dụ bạn sẽ làm được.

34:07 xem cùng một trang docs là tuyến bắt tất cả các phân đoạn đang hoạt động, nó sẽ thu thập tất cả các đoạn URL và xử lý chúng trong

34:16 tệp đơn, đây là lựa chọn hoàn hảo cho các trang tài liệu nơi bạn muốn có các đoạn URL khác nhau để tổ chức

34:22 và SEO nhưng giữ nguyên bố cục cơ bản, tất nhiên bạn sẽ muốn truy cập các đoạn URL khác nhau trong mã của mình.

34:30 tôi chỉ cho bạn cách làm điều đó bằng đối tượng params, chúng ta phân cấu trúc tham số từ prop và tham số là kiểu như hứa hẹn chúng ta

34:39 có slug là một mảng chuỗi trong cấu trúc thành phần D slug từ các tham số bằng cách chờ nó

34:48 thành phần của bạn là một hàm bất đồng bộ cho jsx, chúng ta sẽ sử dụng bất kỳ khối Els nào để xử lý các khả năng khác nhau, nên nếu SL

34:58 tồn tại và độ dài bằng hai trả về một chó xem thẻ H1 cho đặc trưng slug bằng không và slug khái niệm của

35:10 một cái khác, nếu slug tồn tại và chiều dài bằng một, ta trả về một h1 tag weing dogs cho đặc trưng slug bằng không

35:23 Rất đơn giản trên trình duyệt, điều hướng đến SL docs SL routing và bạn sẽ thấy xem tài liệu để định tuyến tính năng

35:33 Điều hướng đến/ Docs SL/ Định tuyến SL Bắt tất cả các phân đoạn và bạn sẽ thấy xem tài liệu cho định tuyến và khái niệm tính năng

35:43 bắt tất cả các phân đoạn bạn có thể tùy chỉnh logic giao diện này theo cách bạn muốn, nhưng thường bạn sẽ sử dụng mảng slug

35:49 để lấy tài liệu phù hợp cho từng tính năng hoặc khái niệm, kịch bản 6 đã được triển khai thành công ngay bây giờ tiếp theo

35:57 hiện cũng cung cấp tùy chọn các phân đoạn bao quát nếu bạn chỉ điều hướng đến SL Docs trong URL, bạn sẽ thấy lỗi 404

36:07 Nhưng nếu bạn muốn hiển thị cùng trang tài liệu ở đây thì chỉ cần đóng dấu tên thư mục bằng một cặp dấu ngoặc vuông thêm

36:15 đổi tên thư mục slug và quấn nó bằng một cặp dấu ngoặc vuông bổ sung, điều này làm cho các đoạn slug trở nên tùy chọn và bây giờ

36:24 Slash Docs cũng sẽ hoạt động, kích hoạt câu trả về cuối cùng này. Bây giờ bạn có thể đang thắc mắc khi nào nên dùng một trang đơn giản. TSX

36:34 Trong thư mục Docs so với trang bao gồm tùy chọn. TSX vì cả hai đều hiển thị giao diện người dùng/ tài liệu trong URL rất tốt

36:44 rất đơn giản nếu giao diện trang của bạn luôn giống với trang đơn giản. TSX trong thư mục docs nếu giao diện trang của bạn là

36:52 khác nhau tùy theo URL ví dụ như trong kịch bản hiện tại của chúng ta thì hãy sử dụng tùy chọn bắt tất cả

36:59 Trang tuyến đường. TSX trong thư mục slug thay vì trên trang. TSX ngay trong thư mục docs là một hình ảnh trực quan

37:08 Bắt tất cả các phân đoạn của máy chủ 3000 sẽ hiển thị trang. TSX trong thư mục ứng dụng cho bất kỳ URL nào chứa tài liệu mà chúng tôi hiển thị

37:17 trang. TSX trong thư mục slug là phân khúc tổng quát của chúng tôi, đúng là cái nhìn toàn diện về các phân đoạn cashall

37:25 Chúng ta đã đề cập khá nhiều về định tuyến năm tới nhưng vẫn còn nhiều điều để khám phá, hãy tiếp tục với dự án tiếp theo

37:32 chủ đề: hãy cùng khám phá cách tạo trang 404 tùy chỉnh bằng bộ định tuyến ứng dụng mặc định khi bạn truy cập một tuyến đường mà

37:40 không tồn tại trong thư mục ứng dụng của bạn, bạn sẽ thấy một trang cơ bản 44 trang, hãy thử truy cập tòa nhà localhost 3000b để xem những gì tôi

37:49 trong khi trang mặc định này hoạt động tốt cho phát triển, bạn có thể muốn tùy chỉnh nó cho trang sản xuất của mình

37:56 Tin tốt là rất đơn giản, tất cả những gì bạn cần làm là tạo một tệp có tên Notfound DJs hoặc notf found. TSX nếu

38:05 Bạn đang dùng TypeScript trong thư mục ứng dụng, để tôi chỉ cho bạn cách đầu tiên trong VS Code tạo một tệp mới trong thư mục ứng dụng có tên Not Found. TSX không tìm thấy dấu gạch nối.

38:19 TSX hãy nhớ tên tệp phải hoàn toàn không phải dấu gạch nối. Tìm thấy dấu gạch nối. Đây là hội nghị năm sau. Định nghĩa và xuất

38:27 một thành phần react nên không tìm thấy hàm mặc định xuất và chúng ta trả về một thẻ div với tiêu đề H2 ghi là page

38:37 không tìm thấy và thẻ đoạn văn không thể tìm thấy tài nguyên được yêu cầu, bạn có thể thoải mái tạo hình thành phần này theo ý muốn

38:44 Tôi giữ mọi thứ đơn giản ở đây vì chúng ta tập trung vào ý tưởng hơn là tạo phong cách nếu bạn làm mới trình duyệt bây giờ

38:51 bạn sẽ thấy trang tùy chỉnh không tìm thấy thay vì trang mặc định là trang không tìm thấy tài nguyên yêu cầu

39:00 tệp này đặc biệt hữu ích cho các trang sản xuất, nơi bạn muốn trang 404 của mình phù hợp với thương hiệu trang web và

39:06 Thiết kế nhưng đây là một điều thú vị trong khi trang Noton này hoạt động tự động với định tuyến dựa trên tệp năm sau, bạn có thể

39:14 Ngoài ra, hãy kích hoạt nó một cách lập trình bằng hàm Not Found để tôi cho bạn xem một ví dụ, giả sử chúng ta đang xây dựng một

39:21 hệ thống đánh giá sản phẩm, nơi chúng tôi sẽ không bao giờ có quá 1.000 đánh giá và chúng tôi muốn hiển thị một trang 404 cho bất kỳ

39:29 ID đánh giá trên 1.000 nên ở trang thư mục ID đánh giá.

39:35 tệp TSX nhập hàm không tìm thấy từ điều hướng SL tiếp theo rồi trong thành phần nếu mã đánh giá cú pháp int lớn hơn

39:50 1.000 gọi hàm Not found và nhân tiện, đây là một tính năng thú vị khác bạn có thể tạo noton cụ thể

40:00 Các trang cho các phần khác nhau của ứng dụng, ví dụ trong thư mục ID xem xét, bạn có thể tạo một notf tìm thấy khác. Tệp TSX

40:08 với thông điệp cụ thể hơn, nên tôi sẽ sao chép file notfound từ thư mục ứng dụng rồi dán vào phần đánh giá

40:16 ID thư mục và thay đổi đánh giá tin nhắn không tìm thấy trong trình duyệt khi bạn truy cập slash products slash1 slre reviews

40:28 sl1000 và1 bạn sẽ thấy trang không tìm thấy đánh giá cụ thể hơn thay vì trang Global 404 của bạn, điều này là do

40:37 tiếp theo, chúng ta sử dụng trang not Fon cụ thể nhất mà nó có thể tìm thấy, trong trường hợp này là trang trong thư mục review ID thay vì thư mục trong thư mục

40:45 Tuy nhiên, trong thư mục ứng dụng, một điều cần lưu ý là thành phần không tìm thấy không chấp nhận các đạo cụ bạn

40:52 có thể bạn đang thắc mắc nếu tôi cần hiển thị các thông điệp khác nhau dựa trên tham số route thì chúng ta sẽ dựa vào đường dẫn sử dụng

41:00 name Hook từ nexs, hãy nhập nó và gọi nó trong component chưa tìm thấy của chúng ta, import use path name from next

41:11 Điều hướng SL và sau đó trong tên đường dẫn const của thành phần bằng với tên đường dẫn, tuy nhiên khi lưu lại

41:21 tệp chúng tôi gặp lỗi Bạn đang nhập một thành phần cần sử dụng tên đường dẫn React hook này chỉ hoạt động

41:28 trong một thành phần khách hàng để sửa lỗi Đánh dấu tệp hoặc cha của nó bằng chỉ thị client đã sử dụng nếu bạn nhớ từ trước đó I

41:36 đã đề cập rằng trong kiến trúc thành phần react server mới, tất cả các thành phần react đều là thành phần máy chủ bởi

41:42 default và hook chỉ có thể sử dụng bên trong các thành phần client, vì vậy hãy làm theo hướng dẫn để sửa eror add use

41:50 khách hàng ở đầu tệp trong dấu ngoặc kép sử dụng thành phần client của chúng tôi không phải phông chữ giờ là thành phần thành phần khách hàng bạn

41:58 có thể truy cập hằng số tên đường dẫn trong thành phần và trích xuất các tham số route từ đó để const product ID

42:06 bằng tên đường dẫn. Spit trên dấu gạch chéo tiến mà chúng ta truy cập tại chỉ số 2, tương tự như ID xem xét sẽ là tên đường dẫn.

42:17 tách tại cho Slash và access index 4, giờ chúng ta có thể hiển thị các giá trị đã trích xuất trong các thành phần jsx

42:27 ID đánh giá không tìm thấy cho ID sản phẩm trong trình duyệt bạn sẽ thấy thông báo đánh giá 1,00 và một không tìm thấy

42:36 Đối với Product One, đó là tất cả những gì bạn cần biết về tệp và chức năng không tìm thấy trong ứng dụng NEXS

42:46 Router trong khi Nexs cung cấp cho chúng ta một số quy ước định tuyến cần tuân theo, nhưng thực ra nó khá linh hoạt trong cách bạn cấu trúc

42:52 tệp và thư mục dự án của bạn. Hãy cùng xem xét vị trí ghép tệp trong nexs. bạn đã biết rằng nexs sử dụng một tệp rồi.

43:00 bộ định tuyến dựa trên hệ thống, mỗi thư mục đại diện cho một đoạn tuyến được ánh xạ đến đường dẫn URL, nhưng đây là điểm quan trọng

43:07 Phần Một tuyến chỉ trở nên công khai khi bạn thêm page.js hoặc trang. Để tôi cho bạn xem file TSX

43:17 Ý tôi là hãy tạo một thư mục mới gọi là dashboard trong thư mục ứng dụng của chúng ta bên trong, chúng ta sẽ tạo một tệp

43:25 gọi là biểu đồ đường nét do TSX ở đây chúng ta sẽ định nghĩa một biểu đồ đường hàm mặc định của thành phần react đơn giản, trả về một biểu đồ đường thẻ.

43:38 Bây giờ nếu bạn thử vào bảng điều khiển slash trong trình duyệt, bạn sẽ nhận được lỗi 404 trang không tìm thấy vì chúng tôi chưa

43:48 đã thêm một trang. TSX, nhưng đó chính là thứ làm cho một route có thể truy cập được trang Let's Create. TSX, đây là một điều thú vị khác ngay cả khi một tuyến là công khai với một trang.

44:02 TSX, trình duyệt chỉ nhận được những gì được trả về theo trang. DSX và nó phải là thành phần React xuất mặc định, hãy thử

44:11 xem điều gì xảy ra nếu bạn tạo một thành phần mà không đặt nó thành mặc định xuất biểu đồ thanh hàm trả về

44:19 trên mỗi biểu đồ một thanh trong trình duyệt, bạn có thể thấy trang 404 biến mất nhưng bạn sẽ thấy lỗi nói là mặc định

44:27 Xuất không phải là một thành phần react trong/ trang SL của bảng điều khiển. Hãy sửa điều này bằng cách thêm một xuất mặc định phù hợp vào

44:36 thành phần để xuất bảng điều khiển hàm mặc định trả về trong mỗi bảng điều khiển One ngay bây giờ khi bạn truy cập trình duyệt

44:46 và làm mới bạn sẽ thấy bảng điều khiển xuất hiện, lưu ý rằng thành phần biểu đồ thanh vẫn không hiển thị, vậy đó là gì

44:55 điểm chính ở đây bạn có thể xem việc đặt các tệp dự án an toàn bên trong các đoạn định tuyến trong thư mục ứng dụng mà không cần

45:02 Lo lắng về việc chúng vô tình trở thành các tuyến đường trong khi bạn có thể giữ file trong ứng dụng

45:09 thư mục bạn không cần, một số nhà phát triển thích giữ tệp của họ bên ngoài thư mục ứng dụng, có thể trong

45:16 thư mục nguồn với một thư mục thành phần riêng biệt cho tất cả các thành phần giao diện người dùng, Shatan Library làm điều này ví dụ và

45:23 Điều đó hoàn toàn ổn NextJS cũng cung cấp cho chúng tôi hai tính năng thú vị nữa để giúp tổ chức dự án, Let Me Show You

45:31 những điều tiếp theo chúng ta vừa học về việc collocation an toàn của các tệp mà NEX xử lý ngay khi mở hộp. Bây giờ hãy cùng tìm hiểu

45:41 một tính năng thú vị khác của NEX là thư mục riêng tư, điều này sẽ giúp bạn giữ dự án của mình rất ngăn nắp, vậy riêng tư là gì

45:48 hãy nghĩ về nó như một cách để báo cho nexts, này, thư mục này chỉ dành cho nội bộ, đừng đưa nó vào

45:55 hệ thống định tuyến thư mục và tất cả các thư mục con của nó bị loại trừ khỏi việc định tuyến để tạo thư mục riêng chỉ cần thêm một

46:03 gạch dưới đầu tên thư mục để tôi chỉ cho bạn cách hoạt động trong thư mục ứng dụng của bạn tạo một thư mục có tên

46:10 Gạch dưới, đây là nơi bạn có thể đặt các hàm tiện ích như định dạng date.js hoặc các chức năng. TS nếu bạn đang sử dụng

46:21 TypeScript Chúng ta sẽ bỏ qua chi tiết triển khai tạm thời nhưng đây là những gì tôi thực sự muốn cho bạn xem, hãy cùng

46:29 Tạo một trang. TSX bên trong thư mục undor liip này với một thành phần react đơn giản nên có trang tệp mới.

46:38 TSX xuất hàm mặc định là private route và trả về thẻ H1 bạn không thể xem điều này trên trình duyệt bây giờ bạn có thể

46:46 Tôi nghĩ điều này sẽ xuất hiện trên thư viện Localhost 3000 Slore nhưng không phải vậy vì thư viện Incore gạch dưới khiến nó trở thành thư viện riêng tư

46:55 nên năm sau sẽ không tạo đường dẫn cho nó, hãy thử điều hướng vào thư mục slore trong trình duyệt và bạn sẽ nhận được lỗi 404

47:05 không tìm thấy trang không thể tìm thấy tài nguyên được yêu cầu đây là trang 404 tùy chỉnh mà chúng tôi đã định nghĩa trước đó các thư mục riêng tư là

47:13 Rất hữu ích cho nhiều việc, giữ logic giao diện người dùng tách biệt với logic định tuyến có cách nhất quán để

47:20 tổ chức các tệp nội bộ trong dự án của bạn giúp dễ dàng nhóm các tệp liên quan trong trình soạn thảo mã và cuối cùng là tránh

47:28 Việc đặt tên tiềm năng có thể xung đột với quy ước đặt tên tệp trong năm tới và đây là một mẹo nhanh chuyên nghiệp

47:35 nếu bạn thực sự muốn có gạch dưới trong URL, hãy dùng phần trăm 5f thay vào đó, đó chỉ là phiên bản mã hóa URL của một

47:43 Gạch dưới, thử chuyển gạch dưới sang tỷ lệ phần trăm 5F và xem điều gì xảy ra trên trình duyệt của bạn, hãy cho tôi biết trong phần bình luận

47:51 Phần bạn có thể xem ph. TSX trong thư mục riêng của trình duyệt chỉ là một trong những cách để tổ chức năm sau của bạn

47:59 Dự án: Nếu đây không phải sở thích của bạn, bạn luôn có thể chọn không sử dụng tính năng này và chỉ dựa vào tệp

48:05 đặt cụm hoặc thậm chí đặt các tệp bên ngoài thư mục ứng dụng lên trên, tiếp theo chúng ta sẽ xem thêm một tính năng tuyệt vời khác mà nexts mang lại

48:13 Về tổ chức dự án, hãy cùng khám phá một tính năng mạnh mẽ khác mà NEX cung cấp để tổ chức các nhóm định tuyến dự án của chúng ta

48:23 tính năng này cho phép chúng tôi tổ chức các tuyến đường và tệp dự án một cách logic mà không ảnh hưởng đến cấu trúc URL; nó cũng rất

48:30 đáng lưu ý rằng nhóm tuyến thực sự là cách duy nhất để chia sẻ bố cục giữa các tuyến mà không ảnh hưởng đến URL

48:38 Hãy cùng xem các nhóm rout hoạt động bằng cách triển khai một số tuyến xác thực chúng ta sẽ xây dựng các tuyến cho đăng ký đăng nhập

48:44 và quên mật khẩu, trước tiên hãy vào thư mục ứng dụng của bạn và tạo ba thư mục. Đăng nhập và quên mật khẩu. Trong mỗi thư mục, chúng ta sẽ định nghĩa một trang.

49:00 Tệp TSX với một thành phần react đơn giản có tiêu đề để đăng ký. TSX xuất thanh ghi hàm mặc định, trả về một trang sao chép thanh ghi thẻ H1.

49:13 TSX từ thư mục đăng ký, dán vào thư mục đăng nhập và thay đổi đăng ký để đăng nhập, dán tương tự. DSX trong

49:22 quên mật khẩu và đổi tên thành phần quên mật khẩu trong trình duyệt khi truy cập localhost 3000 SL

49:32 đăng ký hiển thị đăng ký dấu gạch chéo đăng nhập hiển thị đăng nhập và dấu gạch chéo quên mật khẩu hiện đã quên mật khẩu bây giờ điều này hoạt động nhưng

49:43 có vấn đề là các tuyến xác thực của chúng tôi bị rải rác khắp thư mục ứng dụng, trong khi điều này có thể ổn khi

49:49 Bạn làm việc một mình và biết rõ tất cả các con đường xác thực mà điều đó trở nên khó khăn trong môi trường nhóm

49:56 Hãy cải thiện trải nghiệm của nhà phát triển bằng cách nhóm các tuyến liên quan lại với nhau. Chúng ta có thể làm điều này bằng cách tạo một thư mục AU để

50:04 lưu trữ tất cả các tuyến liên quan đến xác thực của chúng tôi, hãy thử nhé. Tạo một thư mục AU bên trong thư mục ứng dụng và di chuyển

50:12 đăng ký đăng nhập và quên mật khẩu thư mục bên trong để đăng ký di chuyển nó vào bên trong hoặc cập nhật nhập di chuyển đăng nhập

50:24 bên trong Au cập nhật, nhập và di chuyển, quên mật khẩu, bên trong cập nhật Nhập và lưu các thay đổi, cấu trúc dự án trông rất nhiều

50:36 bây giờ đã dọn dẹp đúng rồi nhưng nếu bạn kiểm tra trình duyệt, bạn sẽ thấy các tuyến đường bị lỗi, hãy đăng ký SL, đăng nhập và quên mất

50:44 tất cả mật khẩu đều trả về 404 điều này xảy ra vì nxs tự động ánh xạ các thư mục lồng nhau vào các pod URL, nên bây giờ chúng ta có au/register

50:56 a/ đăng nhập và au/ quên mật khẩu mặc dù cấu trúc URL này có thể phù hợp với các tuyến Au nhưng có thể không lý tưởng cho các tuyến khác

51:06 Các nhóm như marketing hoặc phân tích Đây là lúc nhóm tuyến phát huy tác dụng để tạo nhóm rout.

51:14 chỉ cần đóng dòng tên thư mục trong ngoặc đơn, vậy hãy đổi tên O, thêm dấu ngoặc đơn và O bên trong thư mục, điều này cho biết

51:23 tiếp theo: coi thư mục này là công cụ tổ chức, chỉ loại trừ nó khỏi đường dẫn URL nếu bạn gặp sự cố

51:31 đổi tên thư mục dừng máy chủ dev bằng contrl C đổi tên thư mục và khởi động lại máy chủ với kiểm tra npm runev

51:39 trình duyệt của bạn lại localhost 3000 đăng ký, chúng tôi thấy trang đăng ký SL, trang đăng nhập và quên mật khẩu, chúng tôi thấy

51:50 trang mật khẩu đã quên nhưng giờ mã của chúng tôi đã được tổ chức gọn gàng và nếu bạn cần tổ chức hơn, bạn thậm chí có thể định tuyến các nhóm Nest trong đó

51:59 Chúng ta sẽ kết thúc khám phá về định tuyến với các trang trong bộ định tuyến ứng dụng. Tiếp theo, chúng ta sẽ khám phá bố cục trong

52:09 chi tiết, chúng ta đã khám phá các trang là thành phần giao diện người dùng riêng cho từng tuyến đường. Bây giờ hãy cùng tìm hiểu về bố cục. bố cục chính là giao diện người dùng.

52:18 được chia sẻ giữa nhiều trang trong ứng dụng của bạn, hãy nghĩ về nó như có một cấu trúc nhất quán như một tiêu đề

52:25 và chân trang xuất hiện trên mỗi trang tiếp theo giúp việc triển khai trở nên cực kỳ dễ dàng. Việc tạo bố cục rất đơn giản.

52:33 Chỉ cần xuất mặc định một thành phần React từ một layout. JS hoặc bố cục.

52:38 Tệp TSX, thành phần đó nhận một prop con, tiếp theo sẽ được điền vào nội dung trang của bạn. Hãy cùng xem điều này trong

52:46 action: Tôi nên nói thêm rằng chúng ta không cần phải tạo bố cục từ đầu vì Nexts mặc định cung cấp bố cục trong thư mục ứng dụng của bạn, bạn sẽ tìm thấy bố cục.

52:55 Trang thích TSX. TSX, điều này tuân theo quy ước đặt tên tệp đặc biệt của năm sau, bố cục này. Tệp TSX trong thư mục ứng dụng là

53:05 gọi là root layout và nó không phải là tùy chọn, mọi ứng dụng Nexus đều phải có một cái này, thực tế Nexus rất kiên quyết về điều này

53:14 rằng nếu bạn xóa nó thì nó sẽ tự động tái tạo lại tệp, hãy để tôi chứng minh bạn đã xóa, di chuyển đến thùng rác. Làm mới

53:22 Local Host 3000 trong trình duyệt và xem nó đã tạo lại nó rồi, hãy cùng hiểu mã nguồn, chúng ta sẽ

53:32 Nói về đối tượng metadata sau, nhưng hiện tại hãy tập trung vào component React, mỗi component layout đều cần một

53:40 Trẻ em: Đây là nơi nội dung trang của bạn sẽ được đặt trong trường hợp của chúng tôi là trang.

53:46 TSX trong thư mục ứng dụng sẽ trở thành các con khi bố cục. TSX hiển thị nếu bạn kiểm tra các phần tử trong công cụ phát triển Chrome

53:55 bạn sẽ thấy và một thẻ HTML với ngôn ngữ bằng tiếng Anh phù hợp với bố cục của chúng tôi và một thẻ body chứa thẻ H1

54:05 Chào mừng bạn về nhà, điều đó đến từ trang của chúng tôi. Thành phần TSX thông qua prop trẻ em hiện tại bố trí của chúng tôi không ổn

54:14 Hãy làm cho nó hữu ích hơn bằng cách thêm phần đầu và chân trang, tôi sẽ ghép mã vì đây là HTML cơ bản và

54:23 CSS nên chúng ta có thẻ header với nền kiểu màu xanh nhạt đệm cho một REM với thẻ đoạn văn ghi

54:31 phần đầu trang sau đó có phần tử chân trang với màu nền kiểu dáng Coastwhite, di chuyển một REM với đoạn văn

54:39 nói rằng chân trang nằm giữa phần đầu và chân trang là các đạo cụ con của chúng ta, rất đơn giản là HTML và CSS, mặc dù chúng ta có thể

54:49 Tạo các thành phần riêng biệt cho đầu trang và chân trang, chúng tôi giữ cho đơn giản với văn bản giữ chỗ và thiết kế cơ bản cho

54:55 Bây giờ hãy nhìn vào trình duyệt và bạn sẽ thấy phần đầu và chân trang. Điều thú vị là chúng sẽ giữ nguyên vị trí.

55:04 Dù bạn chọn tuyến nào, hãy thử đi slash about hoặc struck products, tiêu đề và foter vẫn giữ nguyên.

55:14 Sức mạnh của bố cục gốc. Tệp TSX tạo ra một cấu trúc nhất quán trên toàn bộ ứng dụng của bạn, bạn có thể thêm vào

55:23 bất kỳ kiểu dáng đánh dấu hay hành vi nào bạn muốn chỉ cần nhớ bao gồm prop con để trang của bạn có thể hiển thị

55:30 Nội dung độc đáo của họ ở đây là minh họa trực quan về cách bố cục hoạt động trong bộ định tuyến ứng dụng khi bạn truy cập Localhost 3000

55:38 Thành phần bố cục thô trong bố cục. TSX trong thư mục ứng dụng được hiển thị, điều này chứa một phần đầu trang ở trên cùng và chân trang tại

55:45 Prop dưới cùng và prop con nằm giữa prop con sẽ được thay thế bằng thành phần được định nghĩa trong Page. TSX

55:53 trong thư mục ứng dụng khi bạn truy cập Local Host 3000, hãy chọn thành phần được định nghĩa trong trang. TSX trong thư mục giới thiệu thay thế

56:03 nội dung con trong tệp bố cục và khi bạn truy cập hồ sơ localhost 3000 sl, thành phần được định nghĩa trong trang. TSX

56:11 trong thư mục profile thay thế prop con trong tệp bố cục. Tôi hy vọng điều này giúp bạn hiểu rõ hơn về bố cục.

56:18 Bây giờ, đây là một thử thách nhanh trước khi chúng ta tiến hành, hãy thử tạo các thành phần header và footer của riêng bạn và thêm chúng vào

56:25 Lớp gốc để lại bình luận để cho tôi biết tiến triển thế nào tiếp theo. Chúng ta sẽ khám phá các bố cục lồng nhau. Trước đó, chúng ta đã khám phá các bố cục

56:37 những thành phần giao diện người dùng tiện lợi này được chia sẻ giữa nhiều trang trong ứng dụng của bạn, mỗi ứng dụng đều cần root

56:43 Layout mà trong trường hợp của chúng tôi nằm trong layout. Tệp TSX trong thư mục ứng dụng, đây là điều thú vị về bố cục bạn

56:51 có thể Nest chúng không, giả sử bạn muốn một bố cục đặc biệt chỉ cho trang chi tiết sản phẩm, chúng ta có thể làm điều đó bằng cách thêm một bố cục. TSX

56:59 Bên trong thư mục Chi tiết sản phẩm, hãy để tôi chỉ cho bạn cách tạo bố cục trong thư mục ID sản phẩm. TSX

57:08 tệp tại đây Định nghĩa và xuất mặc định một thành phần react để xuất hàm mặc định, hãy gọi chi tiết sản phẩm này

57:18 Bố cục Thành phần chấp nhận prop con kiểu react. React node và chúng tôi trả lại prop con cùng với và

57:26 H2 ghi là featured products, giống như layout gốc, chúng ta xuất một component react với prop con nhưng

57:34 lần này, prop con đại diện cho chi tiết nội dung trang ID sản phẩm về sản phẩm, tiếp theo là ID sản phẩm

57:43 Tôi cũng đã thêm một tiêu đề H2 đơn giản nói rằng sản phẩm nổi bật hãy coi đây là nơi bạn có thể muốn giới thiệu

57:51 vòng quay các sản phẩm nổi bật, hãy xem cách hoạt động trên trình duyệt khi bạn truy cập tuyến đường để Local Host

57:59 3000 bạn chỉ thấy bố cục gốc, chân trang và nội dung con từ trang. TSX trong thư mục ứng dụng vẫn như cũ

58:07 điều này xảy ra khi bạn truy cập phần đầu trang sản phẩm SL và thành phần danh sách sản phẩm dưới dạng con, nhưng đây là

58:16 Điều thú vị là khi bạn điều hướng đến một sản phẩm cụ thể như SL1 bạn sẽ thấy nó được giới thiệu

58:24 phần sản phẩm xuất hiện cho slash1, slash2 và thậm chí sl00, điều này xảy ra vì first nexs hiển thị bố cục gốc với

58:36 prop con đại diện cho nội dung thư mục ID sản phẩm sau đó bố cục ID sản phẩm sẽ bắt đầu thay thế các prop con

58:44 Trong bố cục gốc, chúng ta sẽ thấy sản phẩm nổi bật cuối cùng là nội dung trang thực tế từ trang. TSX trong

58:53 thư mục ID sản phẩm điền vào prop con trong bố cục ID sản phẩm mẫu này cho phép bạn tạo

59:00 bố cục chuyên biệt cho các phần khác nhau của ứng dụng của bạn Dưới đây là hình ảnh trực quan hóa các bố cục lồng nhau trong bộ định tuyến ứng dụng cho

59:08 Lost 3000 layout. Tệp TSX trong thư mục ứng dụng được render cho/sản xuất thành phần trong trang. TSX trong sản phẩm

59:17 thư mục thay thế prop con trong bố cục gốc khi bạn truy cập sản phẩm SL/ một TSX thành phần trong bố cục. TSX

59:26 trở thành prop con trong bố cục gốc, bố cục chi tiết sản phẩm chứa các sản phẩm nổi bật và sau đó

59:33 Thành phần từ trang. TSX được hiển thị dưới dạng prop con trong bố cục của ID sản phẩm. Tệp TSX để chúng ta thấy

59:41 đầu trang và chân trang, xen giữa chúng ta thấy bố cục và các thành phần Trang từ ID sản phẩm khi bạn điều hướng đến/ sản phẩm SL2 chỉ vào trang.

59:52 Nội dung TSX được thay thế bằng JSI cập nhật, điểm then chốt ở đây là router ứng dụng Nex hỗ trợ bố cục lồng nhau cho phép

1:00:01 Bạn tùy chỉnh các phần khác nhau của ứng dụng đúng như ý muốn, giờ bạn có thể đang thắc mắc nếu tôi muốn thì sao?

1:00:08 loại trừ đầu trang và chân trang khỏi một số trang cho các trang như đăng nhập, đăng ký hoặc quên mật khẩu bạn có thể muốn

1:00:16 Một bố cục sạch sẽ, tập trung hơn, đừng lo, có một giải pháp đơn giản mà chúng ta sẽ khám phá

1:00:23 Tiếp theo, trước khi bắt đầu, tôi chỉ muốn nói rằng tôi đã chuyển sang dự án mới của năm tới chỉ để chủ đề này

1:00:32 làm cho việc này thật dễ theo dõi ngay bây giờ hãy tưởng tượng chúng ta đang xây dựng một ứng dụng với các tuyến đường cho khách hàng Revenue đăng nhập và

1:00:39 Đăng ký tất cả những trang này đã được tạo ra phía sau hậu trường, chúng tôi muốn các trang doanh thu và khách hàng của mình có một

1:00:47 Đầu trang và chân trang đẹp nhưng chúng tôi muốn giữ cho các trang đăng nhập và đăng ký sạch sẽ và tối giản, đây là thách thức

1:00:54 Nếu chúng ta thêm đầu trang và chân trang trong bố cục gốc. Tệp TSX, chúng sẽ được áp dụng cho từng trang trong

1:01:02 Ứng dụng: Không có cách nào khác, nhưng nếu bạn muốn bố cục khác nhau cho các phần khác nhau của ứng dụng thì sao?

1:01:09 Đây là lúc nhiều bố cục root phát huy tác dụng, bạn có thể đang tự hỏi làm sao chúng ta có thể có nhiều layout root thì không phải

1:01:17 Lẽ ra chỉ có một trong thư mục ứng dụng. Đây là lúc nhóm tuyến thực sự tỏa sáng. Hãy nhớ cách nhóm tuyến giúp chúng ta.

1:01:25 tổ chức cấu trúc dự án của chúng tôi mà không ảnh hưởng đến URL, chúng tôi cũng cho phép chúng tôi áp dụng bố cục một cách chọn lọc cho các mục đích cụ thể

1:01:32 Một phần của ứng dụng của chúng tôi: Hãy để tôi chỉ cho bạn cách tạo hai nhóm tuyến trong thư mục ứng dụng, đầu tiên là marketing để tăng doanh thu và

1:01:43 khách hàng, hãy di chuyển các thư mục đó rồi một nhóm route khác, Au để đăng nhập và đăng ký, hãy di chuyển chúng đi.

1:01:54 Tiếp theo, chúng ta sẽ xem bố cục gốc. tệp TSX và di chuyển nó từ thư mục ứng dụng vào nhóm marketing route để di chuyển nó

1:02:08 cập nhật Nhập và đổi tên thành bố cục marketing, rất quan trọng là bố cục gốc không tồn tại trong

1:02:16 thư mục ứng dụng, chúng ta sẽ tạo một bố cục khác trong thư mục a, vậy hãy sao chép và dán tệp bố cục và đổi tên thành

1:02:24 Bố cục AU và ở đây hãy loại bỏ phần đầu trang, chỉ có phần cuối trang. Khi bạn lưu tệp và kiểm tra điều này, trên trình duyệt sẽ thấy một trang lỗi.

1:02:35 TSX không có bố cục root và đây là trang. TSX trong thư mục ứng dụng, tất cả những gì bạn cần làm là di chuyển nó vào

1:02:45 Nhóm Tuyến Marketing ngay bây giờ. TSX tương ứng với localhost 3000 và nó có một tệp bố cục gốc để làm việc

1:02:54 nhưng trong trình duyệt bạn sẽ thấy một điều thú vị, URL không thay đổi gì nhưng giờ đăng ký và đăng nhập

1:03:01 Trang chỉ có chân trang trong bố cục, trong khi khách hàng và doanh thu có cả đầu trang và chân trang, chúng tôi có thể định nghĩa nhiều bố cục gốc khác nhau

1:03:13 ảnh hưởng đến các phần cụ thể của ứng dụng chúng ta, đây là điều làm cho các nhóm tuyến đường trở nên mạnh mẽ trong lần tiếp theo chúng cung cấp

1:03:21 Chúng tôi có sự linh hoạt để tạo ra các giao diện người dùng khác nhau cho các phần khác nhau của ứng dụng, đồng thời giữ nguyên mã nguồn của chúng tôi

1:03:27 Sắp xếp và dễ bảo trì Bây giờ bạn đã thành thạo cách các thành phần hoạt động trong bố cục, hãy cùng tìm hiểu

1:03:34 thành một thứ khác thú vị là đối tượng metad dat nằm ngay phía trên nó chúng ta sẽ chuyển lại

1:03:41 Dự án Route Demo Để hiểu rõ hơn về vấn đề này, hãy cùng nói về tối ưu hóa công cụ tìm kiếm và cách Ni Shares có thể hỗ trợ

1:03:49 chúng tôi hiểu đúng thì API siêu dữ liệu trong XS là một tính năng mạnh mẽ cho phép chúng tôi định nghĩa siêu dữ liệu cho từng trang tạo

1:03:57 Chắc chắn nội dung của chúng tôi trông rất đẹp khi được chia sẻ hoặc lập chỉ mục bởi các công cụ tìm kiếm, bộ định tuyến ứng dụng cung cấp cho chúng tôi hai cách để xử lý

1:04:04 Siêu dữ liệu trong bố cục. TSX hoặc trang. Bạn có thể xuất một đối tượng siêu dữ liệu tĩnh hoặc xuất một đối tượng động

1:04:12 Chức năng tạo siêu dữ liệu trước khi chúng ta đi sâu dưới đây là những điểm chính bạn cần biết về cấu hình định tuyến

1:04:19 Metadata cả hai đều bố cục. TSX và trang. TSX có thể xuất siêu dữ liệu bố cục áp dụng cho tất cả các Trang khi trang

1:04:27 siêu dữ liệu đặc thù cho trang đó theo thứ tự từ trên xuống bắt đầu từ cấp gốc khi

1:04:35 siêu dữ liệu tồn tại ở nhiều vị trí dọc theo tuyến đường chúng hợp nhất với siêu dữ liệu trang ghi đè metadata bố cục cho

1:04:43 Đối chiếu thuộc tính, hãy bắt đầu với mã VS và bắt đầu với phương pháp đối tượng metadata tĩnh, chúng ta sẽ giữ nguyên

1:04:51 Dữ liệu metad hiện có trong bố cục gốc tiêu đề tệp TSX mô tả nexs được tạo bởi nexs trong trang về các tuyến đường của chúng tôi. TSX

1:05:02 xuất một đối tượng siêu dữ liệu để xuất siêu dữ liệu const với thuộc tính tiêu đề được đặt thành about code Evolution trong khi cả layout và Page có thể

1:05:15 có siêu dữ liệu, siêu dữ liệu trang được ưu tiên khi chúng chồng lấn, hãy cùng kiểm tra điều này trên trình duyệt, xem xét

1:05:23 Trang chủ các yếu tố bảng bạn sẽ thấy tiêu đề tiếp theo và mô tả được tạo bởi NEX sh, điều này đến từ chúng tôi

1:05:31 bố cục. Dữ liệu metadata TSX bây giờ khi chúng ta vào localhost 3000 slab, bạn sẽ nhận thấy tiêu đề thay đổi thành about code Evolution trong khi vẫn giữ nguyên

1:05:43 cùng một mô tả được tạo bởi next shares, điều này xảy ra vì khi các route có nhiều đối tượng metadata chúng

1:05:51 Hợp nhất với các đoạn sâu hơn được ưu tiên vì khoảng PACH sâu hơn bố cục gốc của nó

1:05:59 ghi đè tiêu đề bố cục về mã Evolution ghi đè nextjs mô tả giữ nguyên vì nó

1:06:07 không bị ghi đè, nó chưa bao giờ được định nghĩa trên trang. TSX, mẫu này hoạt động giống nhau dù bạn lồng sâu đến đâu

1:06:15 bố cục và trang là và đây là cách cấu hình đối tượng metadata tĩnh hoạt động trong nextjs. Tiếp theo, hãy cùng xem xét Dynamic.

1:06:24 siêu dữ liệu Điều này rất hữu ích khi siêu dữ liệu của bạn phụ thuộc vào thông tin động như thông số tuyến đường hiện tại và dữ liệu bên ngoài

1:06:33 hoặc siêu dữ liệu được định nghĩa trong các phân đoạn cha, bạn có thể Định nghĩa nó bằng cách xuất một hàm tạo siêu dữ liệu từ một

1:06:39 bố cục. TSX hoặc trang. Ví dụ về file perfect của TSX là một route động như product ID thay vì cùng tiêu đề cho

1:06:50 Mỗi sản phẩm xảy ra với một đối tượng siêu dữ liệu tĩnh, chúng ta có thể tạo un cho mỗi sản phẩm, đây là cách chúng ta thiết lập hàm tạo siêu dữ liệu trong PAGE.

1:07:01 TSX: Đầu tiên, chúng ta sẽ tạo kiểu props thành phần, sao cho kiểu props bằng các tham số, đây là một lời hứa giải quyết

1:07:10 đến mã sản phẩm của chuỗi kiểu và sau đó chúng ta sẽ sử dụng kiểu này với thành phần của chúng ta, vì vậy các tham số của kiểu props cuối cùng ta sẽ

1:07:20 Định nghĩa hàm tạo siêu dữ liệu ở phía trên, nhập kiểu siêu dữ liệu từ tiếp theo, sau đó xuất một hàm gọi là

1:07:31 tạo metadata chính xác tên này và đây là một hàm không đồng bộ, hàm nhận các tham số kiểu props và

1:07:42 trả về một metadata hứa kiểu trong phần thân hàm, chúng ta chờ tham số và truy cập product ID, chúng ta gán nó cho một hằng số gọi là ID và chúng ta

1:07:55 trả về một đối tượng metadata với tiêu đề được đặt thành product theo sau là product ID ngay bây giờ nếu chúng ta quay lại trình duyệt

1:08:04 và ghé thăm sản phẩm SL1, kiểm tra tiêu đề, chúng ta thấy đó là sản phẩm số một, điều hướng đến sl00 và chúng ta có thể thấy sản phẩm tiêu đề.

1:08:16 100 cho ví dụ đơn giản này, chúng tôi sử dụng ID sản phẩm trực tiếp trong tiêu đề nhưng trong một ứng dụng thương mại điện tử thực tế

1:08:24 Khi bạn có thể có một danh mục sản phẩm, bạn có thể lấy chi tiết sản phẩm trong hàm này và đặt tiêu đề

1:08:30 do đó chúng tôi không có API để làm việc nên sẽ giữ đơn giản và trả về một lời hứa dẫn đến 100

1:08:37 Vậy tiêu đề const bằng với Chờ Promise Mới, sẽ được giải quyết sau 100 mili giây, vì vậy đã đặt thời gian chờ Quyết định

1:08:51 giả sử tiêu đề được lấy là từ iPhone, tiếp theo là ID, chúng ta trả về sản phẩm tiêu đề, tiếp theo là tiêu đề trong

1:09:01 trình duyệt, nếu chúng ta điều hướng đến/ sản phẩm sl6, chúng ta có thể thấy tiêu đề là sản phẩm iPhone 16, đây là cách bạn cấu hình

1:09:11 Metadata định tuyến động trong Next chia sẻ một điểm quan trọng tôi nên đề cập là bạn không thể dùng cả metadata

1:09:19 đối tượng và hàm tạo siêu dữ liệu trong cùng một đoạn tuyến là một trong hai và trước khi chúng ta tiếp tục có một trong hai

1:09:28 giới hạn quan trọng bạn cần lưu ý khi làm việc với siêu dữ liệu: nó sẽ không hoạt động trên các trang được đánh dấu bằng

1:09:34 chỉ thị sử dụng client để tôi chỉ cho bạn ý tôi là gì. Tôi sẽ tạo một route mới trong thư mục ứng dụng gọi là counter

1:09:42 Tôi sẽ tạo một trang. Tệp TSX mặc định xuất một bộ đếm đơn giản số lượng thành phần Biến trạng thái thiết lập

1:09:52 nhấn nút chức năng để tăng số lượng vì thành phần sử dụng hook của react, tôi sẽ đánh dấu nó bằng use client

1:10:00 directive ở trên cùng tôi cũng sẽ đặt tiêu đề thành counter trong đối tượng metadata để xuất metadata const, đó là một đối tượng có tiêu đề được đặt

1:10:13 để đếm trong trình duyệt, khi bạn điều hướng đến bộ đếm SLC tuyến đường, bạn sẽ gặp lỗi mà bạn đang

1:10:21 cố gắng xuất siêu dữ liệu từ một thành phần được đánh dấu với Use Client mà không được phép sẽ loại bỏ

1:10:27 xuất hoặc chỉ thị sử dụng máy khách bạn sẽ gặp lỗi tương tự ngay cả khi xuất siêu dữ liệu tạo

1:10:33 Chức năng Giải pháp là giữ siêu dữ liệu của bạn trong các thành phần máy chủ và trích xuất bất kỳ chức năng phía máy khách nào

1:10:40 thành các thành phần riêng biệt, để tôi chỉ cho bạn mẫu đúng trong thư mục bộ đếm, tạo bộ đếm mới. Tệp TSX

1:10:50 và di chuyển logic phía client khỏi trang. TSX vào counter. TSX Tôi sẽ sao chép mã và dán nó vào đây rồi gỡ bỏ

1:10:59 đối tượng metadata và đổi tên component thành counter thành export có tên, không nhất thiết phải là export có tên nhưng tôi thích

1:11:07 Các thành phần của tôi sẽ được đặt tên là xuất khẩu trong trang Counter Routes. Tệp TSX giờ đây chúng ta có thể nhập thành phần bộ đếm và trả về

1:11:15 vì vậy hãy trả về bộ đếm và đảm bảo nhập thành phần bộ đếm ở phía trên, gỡ bỏ chỉ thị sử dụng khách hàng và sử dụng

1:11:23 State hook nhưng giữ nguyên đối tượng dữ liệu metod như hiện tại. Khi bạn làm mới tuyến counter SLC bạn sẽ thấy counter

1:11:34 tiêu đề và trang hiển thị mà không có lỗi nào bạn cũng thấy cùng tiêu đề trong bộ đếm tab trình duyệt, đây là

1:11:42 Cách được khuyến nghị để xử lý siêu dữ liệu trong các thành phần khách hàng, hãy cùng đi sâu hơn vào trường tiêu đề trong siêu dữ liệu, nơi chơi một

1:11:51 Vai trò quan trọng trong việc định tuyến tiêu đề. Công việc chính của Trường là xác định tiêu đề tài liệu của bạn và bạn có thể thiết lập nó bằng cách sử dụng

1:11:57 hoặc là một chuỗi hoặc một đối tượng, để tôi chỉ cho bạn cả hai cách tiếp cận cách đơn giản nhất để đặt tiêu đề là với một giá trị chuỗi, đây là

1:12:05 những gì chúng tôi đã làm trong bố cục của mình. TSX và trang. Khi chúng tôi đặt tiêu đề thành About Code Evolution thì nó hiển thị

1:12:14 Chính là chuỗi đó trong thẻ tiêu đề của trình duyệt, nhưng nếu bạn cần kiểm soát nhiều hơn thì đó là nơi định nghĩa tiêu đề thì sao?

1:12:21 Vì một vật thể rất hữu ích, ban đầu có thể có vẻ phức tạp nhưng bạn sẽ nắm bắt được mọi thứ một cách hoàn hảo trong cách sử dụng

1:12:28 bố cục gốc bạn sẽ muốn nhập và sử dụng kiểu siêu dữ liệu để hỗ trợ nhập TypeScript tốt hơn

1:12:35 siêu dữ liệu từ siêu dữ liệu tiếp theo là loại dữ liệu siêu dữ liệu. Bây giờ khi sử dụng phương pháp đối tượng, bạn có ba lựa chọn mạnh mẽ

1:12:45 Template mặc định và tuyệt đối Hãy bắt đầu với tiêu đề mặc định. thuộc tính mặc định đóng vai trò như phương án dự phòng cho bất kỳ

1:12:54 con đường chúng không chỉ định tiêu đề riêng của mình, ví dụ nếu chúng ta đặt giá trị cho bài hướng dẫn năm sau Hyphone

1:13:01 Cod Evolution và bạn có một trang như appblog SL. TSX nếu không có tiêu đề định nghĩa thì nó sẽ tự động sử dụng điều này

1:13:12 tiêu đề mặc định trong trình duyệt điều hướng đến/ blog và chúng ta thấy tiêu đề tiếp theo mã hướng dẫn Evolution là mặc định

1:13:20 giá trị là giá trị dự phòng, tiếp theo là tùy chọn mẫu, điều này rất hữu ích khi bạn muốn thêm tính nhất quán

1:13:28 tiền tố hoặc hậu tố cho tiêu đề của bạn thuộc tính này áp dụng cho các tuyến con chúng tôi sẽ đặt nó theo tỷ lệ phần trăm của ống

1:13:37 ký tự và mã Evolution hiện có trong trang blog nếu bạn đặt tiêu đề thành blog để xuất const metadata tiêu đề được đặt thành blog, kết quả là

1:13:49 mã đường ống blog Evolution tiêu đề trang con, tức là blog thay thế phần trăm s trong mẫu bố cục, mẫu này là

1:13:58 đặc biệt hữu ích trong các ứng dụng đa trang, nơi bạn muốn định dạng tiêu đề nhất quán trên toàn bộ trang web của mình.

1:14:05 Chúng tôi có tùy chọn tiêu đề tuyệt đối, đôi khi bạn có thể muốn thoát khỏi mẫu mẫu do các phân đoạn cha thiết lập, đó chính xác là tiêu đề.

1:14:15 thuộc tính absolute sẽ xóa thuộc tính này khỏi tệp bố cục và thêm nó vào tiêu đề trang khối là một đối tượng và

1:14:25 Chúng tôi đặt giá trị tuyệt đối là blog dây và đây là những gì chúng tôi nhận được, chỉ cần viết blog sạch sẽ và chúng tôi đang tách ra

1:14:35 từ mẫu được thiết lập trong bố cục. Tựa đề TSX F. tuyệt đối ghi đè tiêu đề phân đoạn cha. Tất cả đều đúng.

1:14:44 mọi thứ bạn cần biết về định tuyến và siêu dữ liệu SEO vào năm tới và tiếp theo chúng ta sẽ khám phá liên kết và

1:14:50 Điều hướng với bộ định tuyến ứng dụng Trước đây chúng ta đi vào hệ thống định tuyến dựa trên tệp trong XS Chúng ta đã đề cập định nghĩa các tuyến cho ứng dụng của mình

1:15:00 route nested routes Dynamic routes và bắt tất cả các route trong khi chúng tôi đang gõ URL trực tiếp trong trình duyệt để kiểm tra

1:15:08 những tuyến này không phải là cách người dùng thực sự điều hướng các trang web, thay vào đó họ nhấp vào các liên kết hoặc bị chuyển hướng sau một số

1:15:16 Hành động, hãy cùng xem cách triển khai điều này trong SH tiếp theo. Đầu tiên, hãy xem cách điều hướng từ trang chủ đến blog

1:15:24 khi nhấp vào một liên kết để điều hướng phía máy khách, chia sẻ tiếp theo cung cấp cho chúng ta thành phần liên kết, thành phần liên kết là một

1:15:30 thành phần react mở rộng phần tử neo HTML và là cách chính để điều hướng giữa các tuyến trong nexs đến

1:15:38 Sử dụng nó, chúng ta sẽ cần nhập nó từ next/link trong trang gốc của chúng ta. Tệp TSX trong thư mục ứng dụng, hãy bắt đầu bằng cách nhập

1:15:46 thành phần liên kết nhập liên kết từ liên kết SL tiếp theo. Bây giờ chúng ta có thể thêm thành phần liên kết để điều hướng ở bất cứ đâu trong

1:15:54 đây là cú pháp: tôi sẽ bao bọc tag H1 bằng react fragment và thêm một liên kết ngay bên dưới

1:16:02 Tiêu đề văn bản là blog, href bằng/ blog bằng cách sử dụng thành phần liên kết với một prop href mà chúng tôi tạo ra có thể nhấp vào

1:16:12 Các phần tử điều hướng trong trường hợp này chúng ta hiển thị blog dưới dạng văn bản và khi nhấp vào sẽ đưa chúng ta đến lưu blog SL

1:16:19 Bạn sẽ vào trình duyệt và bạn sẽ thấy một liên kết blog có thể nhấp vào dẫn thẳng đến trang chặn. Hãy thêm

1:16:27 Một ví dụ khác để đảm bảo chúng ta đã nắm được điều này, chúng ta sẽ tạo một liên kết đến trang sản phẩm ngay sau liên kết blog của mình

1:16:34 vì vậy liên kết thành phần, văn bản là sản phẩm và HF là sản phẩm SL đơn giản ngay tại trang chủ, làm mới và chúng ta thấy

1:16:45 liên kết sản phẩm khi nhấp vào sẽ dẫn bạn đến sản phẩm SL, nơi chúng tôi thấy thành phần danh sách sản phẩm, cả hai liên kết của chúng tôi đều là

1:16:52 Hoạt động trơn tru bây giờ luôn tốt khi giúp người dùng quay lại trang chủ. Hãy thêm liên kết trang chủ vào sản phẩm của chúng tôi.

1:16:59 danh sách Trang mở trang. Tệp TSX trong thư mục sản phẩm của bạn và nhập liên kết thành phần từ dấu gạch chéo tiếp theo

1:17:08 liên kết rồi thêm một liên kết đến trang chủ trong jsx, văn bản là home và HRE là chuyển tiếp, dấu gạch chéo, điều này trỏ đến

1:17:17 ỨNG DỤNG ĐỊNH TUYẾN BÂY GIỜ KHI BẠN Ở TRANG SẢN PHẨM, BẠN SẼ THẤY MỘT LIÊN KẾT ĐƯA BẠN VỀ NHÀ, TIẾP THEO HÃY CÙNG GIẢI QUYẾT

1:17:24 Một số điều thú vị hơn Tuyến động trên trang sản phẩm của chúng tôi có ba sản phẩm được liệt kê và mỗi sản phẩm có thể chuyển đổi

1:17:32 các sản phẩm đang được gửi vào liên kết đến trang Chi tiết của nó, hãy nhớ cách các tuyến động của chúng tôi là sản phẩm SL Mã sản phẩm SL cho

1:17:41 Ví dụ sản phẩm SL1 thì đây là cách chúng ta triển khai như một liên kết trong h hai thành phần liên kết, sản phẩm một trở thành

1:17:51 văn bản và mỗi ref bằng với sản phẩm SL SL SL1 tương tự Product 2 và product 3 trong trình duyệt bạn sẽ thấy

1:18:03 sản phẩm liên kết với chi tiết tương ứng Trang sản phẩm một, chi tiết về sản phẩm một, hai và ba trong khi

1:18:12 mã hóa cứng các liên kết này hoạt động, đôi khi chúng ta cần tạo chúng một cách động, giả sử chúng ta có một mã sản phẩm sắp ra

1:18:19 từ một nơi khác nên ID sản phẩm const bằng 100, giá trị có thể lấy từ một prop, ví dụ chúng ta có thể dùng template

1:18:28 để tạo liên kết sử dụng ID sản phẩm này, tôi sẽ nhân đôi tiêu đề H2 và liên kết ID sản phẩm này với HRE

1:18:37 chúng ta sẽ sử dụng backx, là chìa khóa bên dưới phím Escape, hãy chắc chắn quấn nó trong niềng răng cong rồi sau đó là Mã sản phẩm niềng răng niềng xoắn đô la

1:18:47 điều này tạo ra một liên kết động hiển thị sản phẩm 100 dẫn đến trang sản phẩm tương ứng. Bây giờ đây là

1:18:54 điều tôi muốn nhấn mạnh về thành phần liên kết là nó có một prop thay thế thay đổi cách lịch sử điều hướng

1:19:01 Hoạt động rồi, hãy thêm nó vào thành phần liên kết của sản phẩm 3, bây giờ thử lại trong trình duyệt từ trang chủ, nhấp vào

1:19:11 sản phẩm nhấp vào sản phẩm một rồi nhấn lại Hoạt động bình thường với sản phẩm hai Trang Chi tiết và chúng ta quay lại nhưng với

1:19:21 sản phẩm thứ ba, chúng ta điều hướng đến trang Chi tiết nhưng khi tôi nhấn nút quay lại thì bạn sẽ chuyển thẳng đến trang chủ

1:19:28 bỏ qua danh sách sản phẩm vì thay thế sẽ ghi đè mục lịch sử hiện tại thay vì thêm một mục mới

1:19:36 Một điều cần lưu ý là thành phần liên kết giúp việc điều hướng phía client trong XJS trở nên dễ dàng, chỉ cần nhập

1:19:44 Từ liên kết SL tiếp theo, thêm HREF của bạn và bạn sẽ ổn thôi, trước đó chúng ta đã học về thành phần liên kết để điều hướng giữa các tuyến đường

1:19:55 Bây giờ hãy cùng giải quyết điều gì đó mà chúng ta chưa đề cập, việc thiết kế các liên kết chủ động bạn biết đấy, hầu hết các trang web đều làm nổi bật

1:20:02 Trang hiện tại bạn đang ở trong menu điều hướng. Chúng tôi sẽ xây dựng chính xác rằng nó không chỉ là về thẩm mỹ, mà còn giúp người dùng

1:20:10 Hiểu vị trí của chúng trong hồ sơ của bạn và rất quan trọng để tiết kiệm thời gian và giúp chúng ta bắt đầu. Tôi đã có

1:20:16 đã chuẩn bị một số mã trong nhóm o route của chúng tôi, tôi đã tạo một bố cục. Tệp TSX với mảng liên kết điều hướng chứa

1:20:24 ba mục đăng ký đăng nhập và quên mật khẩu, mỗi mục có tên và thuộc tính href tương ứng, bố cục

1:20:32 component Ánh xạ lên các liên kết này và hiển thị chúng bằng thành phần liên kết JSS NEX nếu bạn truy cập/đăng ký

1:20:40 Trong trình duyệt, bạn sẽ thấy cả ba liên kết trong bố cục A mà bạn có thể nhấp giữa chúng và chúng sẽ luôn hiển thị

1:20:47 trong suốt đăng ký, đăng nhập và quên mật khẩu. Bây giờ hãy để chúng hiển thị cái nào đang hoạt động. Tiếp theo, SHS sẽ cho chúng ta

1:20:56 sử dụng hook tên đường dẫn để giúp chúng tôi xác định liên kết nào đang hoạt động, hãy đưa nó vào phía trên, nhập sử dụng tên đường dẫn từ

1:21:04 snation tiếp theo và sử dụng nó trong thành phần bố cục a, tên đường dẫn const bằng với sử dụng tên đường dẫn khi chúng ta lưu tệp

1:21:15 chúng ta gặp lỗi đã từng thấy trước đây, hãy nhớ cách các thành phần máy chủ mặc định trong XS well hooks chỉ hoạt động trong

1:21:22 các thành phần của khách hàng nên chúng ta cần thêm chỉ thị để sử dụng khách hàng ở đầu tệp của chúng ta, giờ đã được sửa rồi, hãy sử dụng

1:21:32 hằng số tên đường dẫn cung cấp cho chúng ta đường dẫn URL hiện tại, vì vậy hãy gạch chéo đăng ký cho định tuyến đăng ký SL cho

1:21:41 đăng nhập lộ trình SL quên mật khẩu cho lộ trình quên mật khẩu, v.v. các giá trị này khớp với từng giá trị trong nav của chúng tôi

1:21:50 mảng links nên trong phương thức map ta có thể thêm const is active bằng với path name bằng links H ref hoặc path name do bắt đầu bằng link hre và link.

1:22:06 HRE không bằng với route gốc. Tiếp theo, đã đến lúc thêm một số kiểu trên thành phần liên kết, hãy thêm tên lớp với

1:22:15 có điều kiện nên nếu là active là true, chúng ta chỉ định font in đậm và lề phải bốn, nếu nó không hoạt động, chúng ta chỉ định F văn bản

1:22:25 blue 500 và lề phải bốn, đây là các lớp Tailwind CSS, font bold làm cho văn bản in đậm và văn bản blue 500 cho chúng ta một

1:22:35 Màu xanh dương đẹp MR4 tạo thêm khoảng trống bên phải. Nếu bạn kiểm tra bảng Elements của trình duyệt, bạn sẽ thấy

1:22:43 liên kết hoạt động có lớp font chữ đậm trong khi các liên kết khác có chữ xanh 500 mà chúng ta đang xem SL quên

1:22:51 mật khẩu nên quên mật khẩu là lựa chọn đang hoạt động của chúng ta nhưng chờ đã, các kiểu dáng dường như không hiển thị trên trình duyệt

1:22:59 Điều này là do chúng ta đã loại bỏ tệp CSS toàn cục trước đó, không sao đâu, hãy tạo một kiểu dáng. Tệp CSS trong số lẻ

1:23:07 thư mục và thêm các thành phần cơ sở CSS tailn và tiện ích vào bố cục. Tệp TSX nhập tệp styles.css hoặc nếu bạn

1:23:18 bạn cũng có thể khôi phục tệp CSS toàn cục từ trước đó, dù cách nào cũng được, bây giờ quay lại trình duyệt và

1:23:27 bạn có thể thấy tuyến đường hiện tại quên mật khẩu là In đậm và các liên kết khác màu xanh dương, nhấp vào đăng nhập và Kiểu dáng thay đổi

1:23:35 Đó là tất cả những gì cần để tạo kiểu cho liên kết chủ động trong SHS tiếp theo. Hãy cùng tìm hiểu tham số và tìm kiếm tham số trong Nexts nếu bạn đang làm việc với

1:23:46 Điều hướng bạn chắc chắn cần hiểu hai khái niệm này một cách đơn giản cho một tham số URL nhất định.

1:23:53 hứa rằng re resols với một đối tượng chứa các tham số Dynamic route như ID, ví dụ search patterms, là một

1:24:00 hứa rằng sẽ chuyển sang một đối tượng chứa các tham số truy vấn như bộ lọc và STING để hiểu điều này

1:24:07 Tốt hơn là hãy xây dựng một trang bài báo tin tức đơn giản hỗ trợ nhiều ngôn ngữ trước tiên hãy xem cách tạo liên kết

1:24:14 với cả parms và search parms trong thành phần home, thêm hai liên kết, liên kết đầu tiên ghi read in English và href là SL

1:24:24 bài viết SL tin nóng1 23 dấu hỏi ngôn ngữ bằng tiếng Anh Tôi sẽ sao chép liên kết này thay đổi

1:24:34 văn bản để đọc bằng tiếng Pháp và đổi ngôn ngữ sang FR FR tại đây tin nóng 1 đến 3 là tham số tuyến động và

1:24:44 language là tham số truy vấn, tiếp theo hãy định nghĩa một route cho các Articles, chúng ta đã làm điều này trước đây, nên trong thư mục ứng dụng tạo một thư mục có tên

1:24:53 bài viết và bên trong tạo một thư mục khác gọi là article ID, lần này nằm trong dấu ngoặc vuông bên trong thư mục tạo

1:25:03 Một trang. Tệp TSX và Định nghĩa thành phần bài viết mới nhất, xuất hàm mặc định bài báo tin tức và cho jsx

1:25:14 hiển thị một thẻ H1 với bài báo tin tức văn bản kèm theo ID và một đoạn văn với phần văn bản được đọc bằng ngôn ngữ tôi sẽ

1:25:24 sau đó thêm một bộ chuyển đổi ngôn ngữ với các liên kết để chuyển đổi ngôn ngữ, tức là nhập thành phần liên kết từ liên kết SL tiếp theo và

1:25:32 Gọi nó ngôn ngữ sẽ là tiếng Anh và HRE sẽ là/ bài viết / ID dấu hỏi ngôn ngữ bằng với

1:25:44 tương tự, chúng tôi sẽ tạo tiếng Tây Ban Nha và tiếng Pháp với ngôn ngữ bằng ES và FR FR trong trình duyệt khi bạn nhấp vào

1:25:54 liên kết L đọc bằng tiếng Anh, thành phần bài báo tin tức được hiển thị, chúng ta có tin nóng 123, là tham số tuyến đường

1:26:02 và L bằng I, là tham số truy vấn quay lại, nhấp vào read bằng tiếng Pháp và chúng ta thấy cùng một thành phần

1:26:10 với ngôn ngữ bằng F FR, bước tiếp theo của chúng ta là truy cập giá trị của các từ khóa và các từ khóa tìm kiếm trong bài báo

1:26:18 thành phần và hiển thị chúng trong giao diện người dùng thay thế ID và ngôn ngữ, bắt đầu bằng cách giải cấu trúc các parms và parms tìm kiếm

1:26:26 từ props parms là một lời hứa được giải quyết thành một đối tượng chứa các tham số tuyến đường động trong bài viết ID của chúng ta

1:26:39 là tham số định tuyến động, đây là loại tham số tìm kiếm chuỗi, là một lời hứa chuyển thành một đối tượng chứa truy vấn

1:26:50 tham số: Lang là tham số truy vấn và giá trị có thể là tiếng Anh, tiếng Anh, tiếng Tây Ban Nha hoặc tiếng Pháp, cũng có thể làm cho nó

1:27:00 tùy chọn vì parms và search PMS là những lời hứa nên bạn sẽ cần aade chúng trong thành phần, thêm từ khóa ASN vào

1:27:08 hàm và aade các parms và các mẫu tìm kiếm lấy ID bài viết từ các tham số và ngôn ngữ từ tham số tìm kiếm

1:27:23 với giá trị mặc định là tiếng Anh, bây giờ thay thế văn bản giữ chỗ trong jsx bằng giá trị mã bài viết và

1:27:32 ngôn ngữ cho các liên kết sử dụng PEX thay vì dấu ngoặc kép và nội suy ID đô la để mã số bài viết trên cả ba liên kết đều hướng đến

1:27:45 trình duyệt và chúng ta thấy các giá trị hiển thị trong giao diện người dùng, bài báo tin nóng 123 đọc bằng tiếng Pháp, nhấp vào ngôn ngữ

1:27:54 các liên kết ngôn ngữ và bạn sẽ thấy những thay đổi ngôn ngữ, tôi nên lưu ý rằng bạn có thể chờ đợi và truy cập PARMS và

1:28:03 tìm kiếm parms trong thành phần bài báo tin tức vì nó là thành phần máy chủ nếu đây là thành phần máy khách

1:28:10 bạn sẽ nhận được lỗi vì các thành phần client không hỗ trợ async a và sử dụng client ở trên cùng, bạn sẽ thấy

1:28:17 vấn đề bây giờ là để truy cập các giá trị của patterms và search patterms trong thành phần khách, bạn sẽ cần sử dụng một hook

1:28:24 từ react, đây là use hook, vậy hãy xóa async và await, thay vào đó nhập use từ react, gọi hook này

1:28:34 truyền tham số và tham số tìm kiếm, vào trình duyệt và bạn có thể thấy thành phần vẫn hoạt động như mong đợi

1:28:43 Vì vậy, async chờ các thành phần máy chủ nhưng dùng hook cho các thành phần khách, đó là cách bạn truy cập patterms và tìm kiếm

1:28:51 Patterms in nures Bây giờ Một điểm rất quan trọng cần lưu ý là trong khi trang. TSX có quyền truy cập cả patterms và tìm kiếm

1:29:00 Bố cục Patterms. TSX chỉ có quyền truy cập vào các thuật ngữ tìm kiếm patterms, không có sẵn trong các thành phần bố cục như một

1:29:08 bài tập Định nghĩa một thành phần bố cục và cố gắng truy cập các từ khóa tìm kiếm trong đó, đồng thời cho tôi biết trong phần bình luận bên dưới

1:29:17 xảy ra trong khi liên kết hoạt động rất tốt trong hầu hết các trường hợp, đôi khi chúng ta cần điều hướng một cách lập trình, nghĩ về thời điểm bạn đang

1:29:23 Mua sắm trên Amazon, sau khi bạn gửi đơn hàng, bạn sẽ tự động được chuyển hướng đến trang xác nhận đơn hàng kiểu này

1:29:32 Điều hướng lập trình rất cần thiết cho việc gửi biểu mẫu và nhiều tình huống thực tế khác. Hãy cùng tìm hiểu cách chúng ta

1:29:39 có thể thực hiện điều này bằng cách sử dụng nexs App router cho ví dụ của chúng ta, chúng ta sẽ giữ mọi thứ đơn giản dù không có đầy đủ

1:29:47 trên trang thương mại điện tử, chúng tôi sẽ tạo một kịch bản cơ bản khi nhấp vào nút đặt hàng trên trang sản phẩm đặt hàng P

1:29:54 dẫn chúng tôi đến trang chủ, hãy bắt đầu bằng cách tạo tuyến sản phẩm đặt hàng trong thư mục ứng dụng của bạn. Tạo đơn hàng mới.

1:30:02 Thư mục sản phẩm và thêm một trang. Tệp TSX với thành phần react cơ bản xuất ra sản phẩm hàm mặc định mà chúng ta trả về

1:30:12 một sản phẩm H1 Tag Order: Hãy thêm một nút để làm cho mọi thứ tương tác, chà xát tiêu đề bằng React Fragment và thêm

1:30:22 một nút đặt hàng ngay bây giờ chúng tôi sẽ thêm một nút bấm Handler vào nút sử dụng onclick, chúng tôi sẽ định nghĩa tay cầm click

1:30:32 chức năng ghi lại một thông điệp đơn giản lên bảng điều khiển khi đặt hàng sau khi đặt đơn hàng mô phỏng mà bạn muốn

1:30:41 chuyển hướng người dùng đến trang chủ Đây là nơi sử dụng router hook xuất hiện, đầu tiên hãy nhập nó ở đầu tệp của bạn

1:30:50 nhập sử dụng bộ định tuyến từ điều hướng SL tiếp theo và bên trong thành phần của bạn thiết lập bộ định tuyến Router bằng với

1:31:00 Dùng router rồi dùng phương thức push để xử lý điều hướng, sau đó sau console log router. đẩy và đường đi là

1:31:09 Trang chủ trong trình duyệt Nếu bạn điều hướng đến/đặt hàng sản phẩm, bạn sẽ nhận được lỗi vì router đã qua sử dụng chỉ hoạt động trong client

1:31:18 các thành phần và sử dụng chỉ thị Cent ở đầu tệp để sửa lỗi này, bạn sẽ thấy tiêu đề và

1:31:26 nút đặt hàng, nhấp vào nút sẽ đưa bạn thẳng đến trang chủ điều hướng lập trình trong

1:31:33 hành động mặc dù chúng ta sử dụng dấu gạch chéo tiến làm đích bạn có thể sử dụng bất kỳ tuyến đường hợp lệ nào dù nó là động lồng nhau

1:31:41 Hoặc thậm chí là một route bao quát, đôi khi bạn cũng có thể muốn thay thế trang hiện tại trong ngăn xếp lịch sử thay vì thêm một mục mới cho router sử dụng đó.

1:31:52 Thay router thay cho router. push it tương tự như việc sử dụng thay thế prop trên một thành phần liên kết, bạn cũng có thể sử dụng router

1:32:01 Doback để quay lại trang hoặc router trước đó. Tiến lên để tiến về phía trước trong lịch sử giờ đây còn một cách nữa để

1:32:09 xử lý điều hướng lập trình và đó là hàm chuyển hướng. Hãy xem một ví dụ sử dụng sản phẩm hiện có của chúng tôi.

1:32:16 thành phần đánh giá: hãy nhớ cách chúng ta kiểm tra xem ID đánh giá có lớn hơn 100 hay không và hiển thị một trang không tìm thấy, hãy cùng

1:32:24 chuyển hướng chúng đến danh sách sản phẩm Thay vào đó, ở trên cùng, chuyển hướng từ quốc gia tiếp theo và thay vì gọi 'không tìm thấy'

1:32:35 chúng tôi sẽ gọi redirect với các sản phẩm destination route SL ngay khi bạn truy cập sản phẩm localhost 3000 SL

1:32:46 SL1 SL đánh giá SL1 thực tế thay vì thấy trang không tìm thấy, bạn sẽ tự động bị chuyển hướng đến trang danh sách sản phẩm a

1:32:57 Ví dụ khá gượng ép nhưng nó cho thấy cách chúng ta có thể sử dụng chuyển hướng trong ứng dụng của mình, ngay bây giờ chúng ta đã có

1:33:04 đã đề cập đến liên kết và điều hướng trong XJS, hãy cùng đi sâu hơn vào một số khái niệm liên quan. Tiếp theo, hãy xem một tập tin đặc biệt khác.

1:33:14 rằng nexs cung cấp tệp mẫu trong bộ định tuyến ứng dụng để hiểu rõ hơn về các tệp mẫu, chúng ta cần xem xét trước.

1:33:21 Hành vi cụ thể của các bố cục trong bộ định tuyến ứng dụng của chúng tôi có một nhóm định tuyến AU với một tệp bố cục xử lý

1:33:29 điều hướng giữa ba liên kết đăng ký đăng nhập và quên mật khẩu trong bố cục này hãy thêm một phần tử nhập để thu thập

1:33:37 một số dữ liệu người dùng, trước tiên chúng ta sẽ nhập trạng thái UST từ react ở phía trên và trong thành phần bố cục chúng ta sẽ

1:33:47 bao gồm một đầu vào biến trạng thái với một đầu vào bộ hàm Setter và giá trị ban đầu là một chuỗi rỗng

1:33:54 Đối với JSX, chúng ta sẽ hiển thị một phần tử đầu vào có giá trị bằng với biến trạng thái đầu vào và khi thay đổi, ta gọi là

1:34:06 Chức năng đặt E. Mục tiêu. giá trị dữ liệu chúng ta thu thập từ phần đầu vào này không quan trọng, chúng ta chỉ cần

1:34:15 một số trạng thái trong thành phần của chúng ta, bây giờ hãy kiểm tra điều này trong trình duyệt, điều hướng đến/đăng ký và chúng ta sẽ thấy bố cục hoặc của chúng ta.

1:34:25 phần đầu vào có thể không hiển thị do kiểu dáng nhưng tôi có thể xác nhận nó có ở đó, tôi sẽ gõ Cod Evolution làm bài kiểm tra

1:34:33 đầu vào, bây giờ chú ý đến những gì xảy ra với giá trị đầu vào này khi chúng ta điều hướng từ đường đăng ký đến đăng nhập

1:34:41 hãy chú ý cách trạng thái được bảo toàn điều này xảy ra vì bố cục chỉ Mount nội dung trang mới trong khi vẫn giữ nguyên

1:34:50 các phần tử chung nguyên vẹn chúng không gắn lại thành phần chia sẻ dẫn đến hiệu suất đăng ký tốt hơn và quên đăng ký

1:34:58 password là các trang mới được gắn lại khi di chuyển giữa chúng trong khi đầu vào trong bố cục là

1:35:05 một thành phần chia sẻ không được gắn lại hành vi này hoạt động rất tốt trong hầu hết các trường hợp, tuy nhiên đôi khi bạn có thể cần

1:35:14 bố cục để tạo một thể hiện mới cho mỗi thành phần con trong quá trình điều hướng Điều này có thể hữu ích cho các kịch bản như

1:35:22 triển khai hoạt ảnh nhập hoặc thoát hoặc chạy các móc hiệu ứng sử dụng khi các tuyến đường thay đổi, đây là lý do các tệp mẫu xuất hiện

1:35:30 tiện lợi như một lựa chọn thay thế cho các tệp bố cục, các mẫu tương tự như bố cục ở chỗ chúng cũng được chia sẻ giao diện người dùng giữa

1:35:38 nhiều trang trong ứng dụng của bạn, sự khác biệt chính là bất cứ khi nào người dùng điều hướng giữa các tuyến đi cùng một

1:35:45 mẫu bạn nhận được khởi động hoàn toàn mới một phiên bản thành phần mẫu mới được gắn kết các phần tử dom được tạo lại

1:35:53 trạng thái đã được xóa và hiệu ứng được đồng bộ lại, bạn có thể tạo mẫu bằng cách xuất một thành phần react mặc định

1:36:00 từ một mẫu. JS hoặc mẫu. Tệp TSX như các mẫu bố cục cần chấp nhận một prop con để hiển thị

1:36:07 Lồng nhau do segments để demo điều này, chúng ta chỉ cần đổi tên bố cục. Tệp TSX thành mẫu.

1:36:17 TSX trở lại trình duyệt, nếu chúng ta gõ lại mã Evolution và điều hướng đến quên mật khẩu, bạn sẽ thấy trạng thái đã được đặt lại

1:36:27 đây là ý nghĩa của tệp mẫu trong bộ định tuyến ứng dụng, đáng chú ý là bạn thực sự có thể sử dụng

1:36:33 cả hai bố cục. TSX và mẫu. TSX cùng với nhau trong trường hợp này, bố cục sẽ được hiển thị trước, sau đó các tệp con của nó được thay thế

1:36:42 theo các thành phần mẫu, mẫu đầu ra không phải là yêu cầu phổ biến và bố cục nên là lựa chọn ưu tiên cho giao diện người dùng chung

1:36:51 tuy nhiên, nếu bạn cần sử dụng các mẫu. Bây giờ bạn đã hiểu cách sử dụng chúng, chúng tôi đã khám phá một số mẫu

1:36:59 Các tệp đặc biệt như Page. Bố cục TSX. Mẫu TSX. TSX và không tìm thấy. TSX, giờ hãy cùng xem một vấn đề quan trọng khác

1:37:09 gọi là loading. TSX tệp này giúp chúng tôi tạo các trạng thái tải mà người dùng sẽ thấy trong khi chờ nội dung tải trong một

1:37:16 đoạn tuyến cụ thể trạng thái tải xuất hiện ngay lập tức khi điều hướng, thông báo cho người dùng biết ứng dụng

1:37:22 tôi phản hồi tốt và đang tải nội dung, hãy quay lại mã VS để xem cách nó hoạt động khi tạo tải

1:37:29 Trạng thái khá đơn giản, bạn chỉ cần thêm một lệnh tải. Tệp TSX ở thư mục bên phải, hãy thử cách này cho

1:37:37 Đoạn đường blog trong thư mục khối tạo tải.

1:37:43 TSX mặc định xuất một thành phần react xuất hàm mặc định khi tải hàm trả về H1 đang tải phía sau hậu trường

1:37:52 việc tải này. Tệp TSX tự động đóng gói trang. Tệp TSX và các con lồng nhau của nó trong một hồi hộp react

1:38:01 ranh giới Nếu bạn mới với khái niệm hồi hộp thì đừng lo lắng trên trình duyệt nếu chúng ta điều hướng trực tiếp đến Local

1:38:08 Bạn có thể nhận thấy blog của 3000 SL thực ra không thấy văn bản tải vì Trang Blog của chúng tôi tải rất tốt

1:38:17 Nhanh chóng, nội dung trang blog thay thế văn bản tải trong đèn nhấp nháy nhưng tin tôi đi, nó đang làm việc để chứng minh điều đó

1:38:25 Tôi sẽ giới thiệu một delay với một lời hứa mất 2 giây để giải quyết, nên hãy xuất hàm mặc định async blog

1:38:33 và chúng ta chờ đợi một lời hứa mới, kết quả sau 2 giây với thời gian chờ được thiết lập, chúng ta gọi là hàm giải quyết mà tôi sẽ

1:38:44 truyền delay có chủ ý làm giá trị trả về từ promise ngay bây giờ khi chúng ta quay lại trình duyệt và tải lại

1:38:52 Bạn có thể thấy văn bản tải trong 2 giây và sau khi lời hứa của chúng tôi được hoàn thành, nó sẽ được thay thế bằng nội dung trang blog

1:39:02 Hiện tại chúng tôi chỉ hiển thị văn bản tải cơ bản, nhưng trong các ứng dụng thực tế bạn có thể sáng tạo với điều này.

1:39:08 muốn sử dụng skeleton loader, spinners hoặc thậm chí hiển thị bản xem trước những gì sắp tới như ảnh hoặc tiêu đề, hoàn toàn là như vậy

1:39:16 Tùy bạn làm cho nó hoàn thiện đến mức nào, chỉ cần nhớ ghi phần nạp đạn.

1:39:21 Tệp TSX ở đúng thư mục có hai lợi ích rất thú vị khi sử dụng giao diện tải trước, nó mang lại cho người dùng

1:39:29 phản hồi ngay lập tức khi họ di chuyển đến nơi mới, điều này giúp ứng dụng của bạn trở nên nhanh nhẹn và phản hồi nhanh chóng, đồng thời người dùng biết rõ

1:39:35 Click của họ thực sự đã làm được điều gì đó thứ hai Tiếp theo giữ cho bố cục chia sẻ tương tác trong khi nội dung mới tải được

1:39:43 nghĩa là người dùng vẫn có thể sử dụng các chức năng như menu điều hướng hoặc thanh bên ngay cả khi nội dung chính chưa sẵn sàng khi tải

1:39:51 Mẫu giao diện người dùng đảm bảo các trạng thái tải này không cản trở các phần đã hoạt động, mang lại cho người dùng một

1:39:58 Trải nghiệm mượt mà hơn, đó là về việc nạp đạn. TSX để tải trạng thái tức thì trong bộ định tuyến ứng dụng, đã đến lúc khám phá một trạng thái khác

1:40:10 Khía cạnh quan trọng của ứng dụng chúng tôi, cụ thể là xử lý lỗi, được triển khai thông qua một tệp đặc biệt gọi là Error. TSX

1:40:17 Để tôi chỉ cho bạn cách hoạt động ngay bây giờ khi chúng ta truy cập sản phẩm localhost 3000 SL/ đánh giá SL1 SL1 mọi thứ đều hoạt động trơn tru mà chúng ta có thể thấy

1:40:29 đánh giá đầu tiên về sản phẩm đầu tiên của chúng tôi, URL này tương ứng với trang. Tệp TSX trong thư mục ID đánh giá của chúng tôi nhưng hãy cùng

1:40:39 Hãy thực tế rằng mọi thứ không phải lúc nào cũng hoàn hảo. Yêu cầu mạng có thể thất bại và dữ liệu có thể không khả dụng.

1:40:46 mô phỏng một kịch bản lỗi trong trang review ID của chúng tôi để xem cách xử lý các tình huống như vậy bên ngoài thành phần của chúng tôi. Tôi sẽ

1:40:54 tạo một hàm tạo ra một số nguyên ngẫu nhiên từ 0 đến bất kỳ số đếm nào chúng ta đưa vào bên trong thành phần mà chúng ta

1:41:01 sẽ gọi hàm này với hai làm đối số, vì vậy hàm giờ sẽ trả về số 0 hoặc 1 nếu trả về

1:41:17 Thứ nhất, chúng ta xuất hiện lỗi với thông báo lỗi khi tải lại. Nếu chúng ta làm mới trình duyệt vài lần, cuối cùng sẽ thấy runtime chưa được xử lý.

1:41:29 lỗi với thông báo lỗi của chúng tôi lỗi tải đánh giá đây đang ở chế độ phát triển Hãy xem nó hoạt động thế nào trong

1:41:36 sản xuất bằng cách chạy npm chạy bản xây dựng sau khi hoàn tất chạy lệnh npm Run start ngay khi lỗi xảy ra

1:41:48 sau khi làm mới vài lần, chúng tôi nhận được lỗi ứng dụng chung, một ngoại lệ phía máy chủ đã xảy ra và chúng ta sẽ xem

1:41:57 thông báo lỗi của chúng tôi trong bài đánh giá tải lỗi terminal điều này không tốt cho người dùng của chúng tôi đúng không? thông báo lỗi không phải

1:42:04 hữu ích và tệ hơn là lỗi trong thành phần review ID lồng sâu của chúng tôi sẽ làm hỏng toàn bộ ứng dụng mà chúng tôi có thể cải thiện bằng cách

1:42:14 xử lý lỗi một cách khéo léo chỉ chứa chúng vào phần bị ảnh hưởng trong khi giữ lại phần còn lại của ứng dụng

1:42:21 Chạy đây là nơi lỗi. TSX rất hữu ích, hãy tạo một cái trong thư mục ID đánh giá của chúng tôi, ngay cạnh trang. TSX

1:42:31 Lỗi. TSX ở đây chúng ta sẽ định nghĩa một thành phần khách hàng để sử dụng chỉ thị khách hàng ở trên cùng lỗi xuất hàm mặc định

1:42:39 biên trả về lỗi thẻ div trong ID đánh giá, thành phần này hoạt động như một ranh giới lỗi xung quanh trang của chúng ta. Tệp TSX

1:42:49 rất quan trọng cần lưu ý rằng ranh giới lỗi phải là các thành phần của máy khách bạn sẽ cần thêm sử dụng máy khách tại

1:42:55 đầu file contrl C và khởi động lại máy chủ dev với npm chạy Dev refresh trang cho đến khi chúng ta gặp lỗi, giờ mới thấy

1:43:06 lỗi trong ID xem xét là văn bản từ lỗi. TSX tất nhiên trong một ứng dụng thực tế bạn sẽ muốn tạo kiểu cho nó

1:43:13 phù hợp với thiết kế ứng dụng của bạn, nhưng điều tuyệt vời như bạn có thể nhận thấy là phần còn lại của

1:43:19 Ứng dụng vẫn tiếp tục hoạt động, chúng tôi có phần tiêu đề, các sản phẩm nổi bật từ bố cục sản phẩm và chân trang

1:43:27 chỉ thành phần review ID đã bị thay thế bằng jsx được định nghĩa nhầm lẫn.

1:43:33 TSX bây giờ thành phần này nhận đối tượng lỗi dưới dạng prop nên lỗi loại lỗi có thể dùng nó để tạo lỗi

1:43:42 Thông báo sẽ cung cấp thông tin hữu ích hơn vì vậy hãy thay error trong review ID bằng error. bằng cách thay thế văn bản mã cứng của chúng tôi bằng

1:43:52 Lỗi. Thông báo rằng bây giờ chúng ta sẽ thấy lỗi khi tải lại, khi mọi thứ xảy ra sự cố, lỗi mà chúng ta đã đưa vào ph. Tệp TSX này

1:44:02 Thông báo tương tự được gửi đến lỗi của chúng tôi. Thành phần TSX, đây là thứ gây ra lỗi.

1:44:08 TSX mạnh mẽ đến mức trong bộ định tuyến ứng dụng tự động bao bọc các đoạn tuyến và các đoạn con lồng nhau của chúng trong một lỗi phản ứng

1:44:16 ranh giới bạn có thể tạo giao diện lỗi tùy chỉnh cho các đoạn cụ thể bằng cách sử dụng cấu trúc hệ thống tập tin để cô lập lỗi

1:44:24 các phân đoạn bị ảnh hưởng trong khi giữ cho phần còn lại của ứng dụng hoạt động tốt, cuối cùng nó cho phép bạn cố gắng khôi phục

1:44:31 từ lỗi mà không cần tải lại toàn trang, giờ chúng ta đã xác định được tất cả các tệp đặc biệt trong ứng dụng, hãy cùng nhau

1:44:39 nhìn vào bức tranh lớn hơn, slide cho chúng ta thấy cấu trúc thành phần trong một thành phần bố trí thư mục ở phía trên

1:44:46 tiếp theo là template rồi ranh giới lỗi từ error. TSX cho lỗi thời gian chạy, một ranh giới chờ đợi khi tải.

1:44:54 TSX một ranh giới lỗi khác từ không tìm thấy. TSX cho tài nguyên bị thiếu và cuối cùng là thành phần trang với phần này

1:45:02 Thiết lập xử lý lỗi đã sẵn sàng: Hãy cùng khám phá các kỹ thuật xử lý lỗi nâng cao hơn. Khi tiếp tục, trước đây chúng ta đã học cách xử lý lỗi một cách khéo léo bằng Error.

1:45:14 TSX, mặc dù một số lỗi nghiêm trọng, những lỗi khác có thể chỉ là tạm thời và có thể sửa bằng một lần thử lại đơn giản, hãy cùng xem cách

1:45:21 để phục hồi khỏi lỗi như vậy, ngoài prop lỗi, hãy dùng ranh giới lỗi do lỗi. TSX cung cấp cho chúng tôi

1:45:28 một prop hữu ích khác là hàm reset kiểu là hàm trả về khoảng trống, chúng ta có thể sử dụng điều này

1:45:36 đặt lại chức năng bằng cách thêm một nút trong jsx của chúng tôi để kích hoạt nó khi nhấp vào giữa WRA thông báo trong thẻ đoạn văn và thêm một

1:45:45 nút là thử lại và khi nhấp vào chúng ta sẽ gọi chức năng đặt lại, nút này cung cấp cho người dùng một cách

1:45:54 để thử lại việc hiển thị thành phần trong trang. TSX, nếu chúng ta vào trình duyệt và tải lại cho đến khi gặp lỗi, bạn sẽ thấy

1:46:02 nhận thấy một nút thử lại khi nhấp vào, nó cố gắng kết thúc lại thành phần ID xem xét nhưng nếu chúng ta tiếp tục nhấp vào chúng ta

1:46:11 sẽ liên tục gặp lỗi này nhiều lần vì hàm retry sẽ cố gắng reender phía client nhưng

1:46:19 chuyển đổi thành phần review ID thành thành phần client chỉ để xử lý lỗi là hơi quá mức để cố gắng ở phía máy chủ

1:46:27 phục hồi chúng ta sẽ cần dựa vào việc bắt đầu chuyển đổi từ react và sử dụng router từ nextjs. Đây là cách chúng ta có thể thực hiện điều đó.

1:46:35 bắt đầu bằng cách nhập sử dụng router từ điều hướng tiếp theo và bắt đầu chuyển đổi từ react, sau đó trong component chúng ta

1:46:45 Định nghĩa một hằng số router bằng cách gọi use router const Router bằng với use router tiếp theo chúng ta Định nghĩa một hàm Reload

1:46:55 Điều đó làm mất router. Gọi làm mới và đặt lại bên trong Start Transition để Start Transition Điều này chấp nhận một hàm trong đó

1:47:04 Chúng tôi gọi Router. làm mới và đặt lại Đảm bảo các dòng này nằm ngoài câu lệnh trả về mà hàm reload đảm bảo

1:47:13 rằng việc làm mới sẽ bị hoãn đến giai đoạn kết xuất tiếp theo, cho phép react xử lý bất kỳ cập nhật trạng thái nào đang chờ trước

1:47:20 Tiếp theo, chúng ta cập nhật Handler khi nhấp để gọi chức năng nạp lại ngay bây giờ nếu vào trình duyệt

1:47:28 và tải lại cho đến khi gặp lỗi, bạn sẽ thấy nút thử lại khi nhấp vào nó cố gắng kết thúc lại

1:47:36 thành phần ID xem xét nếu số ngẫu nhiên của chúng ta không phải là một số chúng ta sẽ khôi phục lỗi và xem nội dung trang thực tế của

1:47:44 Tất nhiên đây có thể chỉ là chức năng nạp đạn nhưng tôi hy vọng bạn thấy nó hữu ích, chúng tôi còn nhiều hơn nữa

1:47:50 Những khía cạnh thú vị về xử lý lỗi cần đề cập, vậy hãy tiếp tục tập trung vào cách xử lý lỗi trong các routs lồng nhau. Hiện tại chúng ta có

1:48:01 Lỗi của chúng ta. Tệp TSX nằm trong thư mục ID xem xét hệ thống tuyến đường của chúng tôi, chúng tôi có sản phẩm ở trên cùng.

1:48:07 level, tiếp theo là Product ID và Review ID được lồng bên trong cấu trúc này thực sự ảnh hưởng đến cách lỗi của chúng ta. Tệp TSX

1:48:16 Hoạt động, đây là điều then chốt để hiểu lỗi luôn xuất hiện để tìm ranh giới lỗi cha gần nhất

1:48:23 Điều này có nghĩa là đó là một lỗi. Tệp TSX xử lý lỗi không chỉ cho thư mục riêng của nó mà còn cho tất cả các thư mục con lồng nhau

1:48:31 Các đoạn bên dưới cũng bằng cách đặt lỗi một cách chiến lược. Bạn có thể sử dụng các tệp TSX ở các cấp độ khác nhau trong thư mục route của mình.

1:48:38 kiểm soát chính xác chi tiết xử lý lỗi của bạn. Để tôi cho bạn thấy ý tôi, hãy vào mã VS và chuyển chúng ta

1:48:45 Lỗi. Tệp TSX từ thư mục review ID cho đến route sản phẩm khi chúng tôi làm mới trình duyệt và kích hoạt

1:48:55 một lỗi, chúng ta sẽ thấy cùng một thông báo lỗi lỗi khi tải đánh giá nhưng lần này có một điểm khác biệt quan trọng

1:49:03 Toàn bộ tuyến sản phẩm sẽ bị thay thế bằng những gì bị lỗi. TSX là do lỗi từ trang. TSX trong

1:49:12 thư mục review ID sẽ nổi lên cho đến khi tìm thấy ranh giới lỗi gần nhất, hiện nằm trong thư mục products, nhưng hãy theo dõi điều gì xảy ra khi chúng ta

1:49:22 di chuyển tệp trở lại thư mục ID đánh giá và làm mới phần sản phẩm nổi bật từ bố cục ID sản phẩm của chúng tôi vẫn ở

1:49:34 và chỉ thành phần review ID mới được thay thế bằng lỗi của chúng tôi. Giao diện TSX sẽ thấy chính xác hơn nhiều

1:49:42 thực sự minh họa cách xử lý lỗi hoạt động trong các routs lồng nhau nơi bạn đặt lỗi. Tệp TSX tạo ra sự khác biệt lớn

1:49:50 nó xác định chính xác phần nào của giao diện người dùng sẽ bị ảnh hưởng khi có sự cố xảy ra tiếp theo chúng tôi sẽ đi sâu vào xử lý

1:49:56 lỗi trong bố cục sau khi xử lý lỗi trong các tuyến lồng nhau, hãy cùng giải quyết một vấn đề quan trọng không kém việc xử lý lỗi trong bố cục

1:50:06 Chúng ta biết lỗi đó. TSX xử lý lỗi cho tất cả các đoạn con lồng nhau nhưng có một điểm thú vị liên quan đến bố cục. TSX

1:50:14 Các thành phần trong cùng phân đoạn thì ranh giới lỗi sẽ không phát hiện lỗi trong bố cục. TSX trong cùng một phân đoạn

1:50:21 do cách cấu trúc thành phần hoạt động, bố cục thực tế nằm phía trên ranh giới lỗi trong cây thành phần

1:50:28 Hãy quay lại với mã V và xem điều này thực tế với một ví dụ thực tế, tôi sẽ bắt đầu bằng cách sao chép lỗi. Tệp TSX

1:50:35 từ tuyến review ID vào route product ID rồi trong bố cục product ID. TSX Tôi sẽ thêm lỗi ngẫu nhiên tương tự

1:50:46 Chúng tôi đã có trong trang Review ID sao chép cả bộ tạo số ngẫu nhiên và logic ném lỗi để thay đổi thông báo thành lỗi

1:51:02 đang tải sản phẩm Tôi sẽ chú thích mã lỗi trong ID đánh giá để tránh nhầm lẫn khi trình duyệt khi chúng ta

1:51:11 tải lại trang và kích hoạt lỗi, bạn sẽ nhận thấy có điều gì đó không ổn, không có ranh giới lỗi nào bắt được nó và

1:51:18 Ứng dụng bị lỗi khi chạy chưa xử lý. Chúng tôi cũng thấy thông báo lỗi khi tải sản phẩm, điều này làm nổi bật một

1:51:26 Lỗi điểm quan trọng. TSX sẽ không xử lý lỗi từ bố cục. TSX trong cùng phân đoạn là giải pháp chúng ta cần

1:51:36 để di chuyển lỗi. Tệp TSX đến phân đoạn bố cục cha, trong trường hợp này là các sản phẩm sẽ tải lại trang và bạn sẽ thấy

1:51:49 mọi thứ hoạt động như mong đợi, ranh giới lỗi chạy ERS đúng cách, chỉ thay thế nội dung route sản phẩm trong khi vẫn giữ nguyên

1:51:56 đầu trang, chân trang và các yếu tố giao diện cấp cao khác trong tag. Tôi khá chắc bạn có câu hỏi

1:52:04 Bạn có thể đang tự hỏi liệu ranh giới lỗi có thể phát hiện lỗi trong bố cục hay không. Tệp TSX từ cùng một phân đoạn

1:52:13 còn lỗi trong bố cục root thì sao? nó không có đoạn rõ ràng, chúng ta xử lý những lỗi đó như thế nào Nexts đã nghĩ đến

1:52:21 và Prov cung cấp một tệp đặc biệt gọi là Global error. TSX nằm trong thư mục ứng dụng gốc của bạn, đây là

1:52:28 Tuyến phòng thủ cuối cùng khi có sự cố nghiêm trọng xảy ra ở cấp cao nhất của hồ sơ ứng tuyển của bạn, đó là một chút

1:52:35 chi tiết để mô phỏng và bắt lỗi trong bố cục gốc, nên để tôi chỉ cho bạn cách thiết lập để gây lỗi trong

1:52:42 bố cục gốc của chúng ta trong thư mục ứng dụng, tôi sẽ thêm một thành phần wrapper đặc biệt để hiển thị lỗi nằm cạnh

1:52:50 Bố cục gốc. Tệp TSX tạo lỗi rapper. TSX Tôi sẽ dán mã và hướng dẫn bạn từng bước qua đoạn mã, bạn có thể tìm đoạn mã này trên GitHub của tôi

1:53:01 repo nhưng để tôi nhanh chóng điểm qua những gì chúng ta có ở đây, lỗi rapper là một thành phần client, nên hãy dùng client directive là

1:53:08 ở đầu cùng chúng ta đang nhập một số Style, sử dụng State Hook từ react và sau đó có trình mô phỏng lỗi này

1:53:15 thành phần nó chấp nhận một thông báo và hiển thị thông báo lỗi đó nếu cờ lỗi được đặt thành true true lỗi là false

1:53:24 mặc định nhưng khi bạn nhấp vào nút, mô phỏng bộ lỗi, lỗi được đặt thành true và lỗi sẽ được kích hoạt

1:53:32 thành phần error simulator có mặt trong một thành phần error wrapper chấp nhận các prop con và kết xuất giống như điều này

1:53:40 Component là cần thiết để xuất lỗi từ layout gốc của chúng ta, tức là trong layout. Tệp TSX nhập thành phần và thêm nó vào jsx được bao bọc

1:53:51 xung quanh các con ch, nên việc mở và đóng lỗi tiếp theo sẽ thêm lỗi toàn cục. tệp TSX trong thư mục ứng dụng để

1:54:03 liền kề với bố cục. Lỗi toàn cục tệp mới TSX.

1:54:09 TSX tệp này nên xuất một thành phần react sẽ được hiển thị khi xảy ra lỗi trong bố cục gốc hoặc bất kỳ

1:54:16 của các tuyến đường lồng nhau trong trường hợp không có ranh giới eror Một lần nữa để tiết kiệm thời gian, tôi sẽ dán mã mà bạn có thể tìm thấy

1:54:23 đoạn mã này trong kho GitHub của tôi, chúng tôi bắt đầu với chỉ thị use client vì ranh giới lỗi phải là client

1:54:30 các thành phần, chúng ta nhập một số CSS, rồi định nghĩa một thành phần phản ứng gọi là Global error, hiển thị một mỗi hai

1:54:38 Nếu có sự cố xảy ra, chỉ cần nhấn nút gọi là cửa sổ. Vị trí.

1:54:44 tải lại và văn bản được làm mới rất đơn giản bây giờ trong cả hai tệp. Các lớp Tailwind được sử dụng để tạo kiểu và bạn

1:54:53 sẽ chú ý đến toàn cầu. Import CSS tệp chưa tồn tại nên hãy tạo nó trong thư mục ứng dụng và tạo tệp mới

1:55:02 gọi là toàn cầu. CSS bao gồm các thành phần và tiện ích cơ sở của Tailwind, tất cả rồi, thiết lập của chúng tôi giờ đã hoàn tất trên trình duyệt khi bạn

1:55:12 Điều hướng đến Local Host 3000, bạn sẽ thấy thành phần wrapper mới được bao gồm của chúng tôi bao bọc P. TSX trong thư mục ứng dụng bằng cách sử dụng

1:55:21 thành phần bao bọc này chúng ta có thể kích hoạt lỗi trong bố cục gốc, nhấp nút bây giờ chúng ta không thấy lỗi toàn cục

1:55:28 Khởi động biên chỉ thấy lớp lỗi chồng lên vì biên lỗi toàn cục chỉ hoạt động ở chế độ sản xuất

1:55:37 Trong quá trình phát triển, bạn sẽ thấy lớp phủ NEX mặc định thay vào đó, vì vậy chúng ta có lỗi runtime chưa xử lý và lỗi

1:55:44 thông báo lỗi mô phỏng trong bố cục root trong terminal nhấn contrl C để dừng máy chủ phát triển và chạy quá trình xây dựng

1:55:52 lệnh npm chạy build rồi khởi động máy chủ sản xuất với npm chạy lại khởi động trong trình duyệt mô phỏng

1:56:04 lại lỗi trong bố cục gốc, giờ chúng ta vẫn không thấy giao diện lỗi toàn cục và cũng không thấy lớp phủ lỗi

1:56:11 nguyên nhân là lỗi toàn cục đó. TSX cần bao gồm các thẻ HTML và body riêng vì khi ranh giới lỗi này

1:56:21 Kick in nó thay thế hoàn toàn layout gốc của bạn, chúng ta có thẻ HTML và body trong layout. TSX cũng cần được

1:56:30 bao gồm trong ranh giới lỗi toàn cục vì vậy HTML và body hãy xây dựng lại với npm chạy build và chạy lại với npm Run

1:56:42 khởi động trong trình duyệt, mô phỏng lỗi lần nữa và chúng ta có thể thấy giao diện lỗi toàn cục có điều gì đó đã xảy ra và một nút để

1:56:53 làm mới tương ứng với jsx có trong biên lỗi toàn cục của chúng tôi Chỉ hoạt động trong chế độ sản xuất

1:57:00 và yêu cầu HTML cùng thẻ body được hiển thị, đây là hai điều quan trọng bạn cần biết về lỗi toàn cục. TSX

1:57:08 Điều đó làm nó khác với lỗi thông thường của chúng tôi. TSX vì chúng tôi không thể phát hiện thêm lỗi nào nữa nên được khuyến nghị nên

1:57:15 có toàn cầu. TSX, HTML và CSS đơn giản nhất có thể sẽ là kịch bản lý tưởng mà bạn không muốn có lỗi từ

1:57:24 Ranh giới lỗi toàn cục, tất cả đã bao quát các khái niệm chính về xử lý lỗi trong bộ định tuyến ứng dụng nexts, đã đến lúc đi sâu vào một số

1:57:34 Các khái niệm định tuyến nâng cao Trong phần tiếp theo, chúng ta sẽ bắt đầu với các tuyến song song, chúng là gì, cách thiết lập chúng

1:57:41 Và lý do tại sao chúng cực kỳ hữu ích khi xây dựng giao diện người dùng phức tạp cho các tuyến song song là một cơ chế định tuyến tiên tiến cho phép chúng ta

1:57:49 kết xuất nhiều Trang cùng lúc trong cùng một bố cục Hãy xem kịch bản 7 xây dựng một bảng điều khiển phức tạp

1:57:56 đối với một ứng dụng web, hãy tưởng tượng cần hiển thị phân tích người dùng các chỉ số doanh thu và thông báo cùng lúc trong

1:58:05 Cách làm truyền thống giống như vậy là tạo ba thành phần riêng biệt cho mỗi bộ phận và tổ chức chúng theo một bố cục.

1:58:12 TSX nằm trong thư mục bảng điều khiển trong thư mục ứng dụng, vậy hãy làm điều đó, giờ chúng ta đã có thư mục bảng điều khiển rồi

1:58:20 Vậy hãy tạo một thư mục mới gọi là Bảng điều khiển phức tạp và thêm bố cục. Tệp TSX sử dụng các thành phần thông thường để mã nguồn

1:58:34 Có thể trông như thế này, ba thành phần sẽ được nhập từ các tệp riêng biệt và hiển thị trong

1:58:40 Bố cục bảng điều khiển phức tạp, phân tích thành phần người dùng, các chỉ số doanh thu và thông báo, bố cục cũng sẽ hiển thị thành phần từ trang liền kề.

1:58:50 TSX là prop con, file này chưa tồn tại nên hãy tạo nó trên trang file mới.

1:58:58 TSX xuất hàm mặc định bảng điều khiển phức tạp và trả về một thẻ H1 ghi rằng bảng điều khiển phức tạp cho nhau

1:59:07 ba thành phần mà chúng tôi sẽ không định nghĩa đại diện cho một phần bảng điều khiển cụ thể trong giao diện người dùng

1:59:14 chúng như những thẻ sẽ hiển thị dữ liệu cần thiết, trong khi cách tiếp cận dựa trên thành phần truyền thống này hoạt động tốt như bình thường.

1:59:22 các tuyến đường có thể đạt được kết quả tương tự với một số lợi ích bổ sung, vậy làm thế nào để triển khai các tuyến song song trong sh song song tiếp theo

1:59:30 Routes và XJS được định nghĩa bằng một tính năng gọi là slot giúp tổ chức nội dung theo cách mô-đun để

1:59:37 tạo một khe, chúng ta sử dụng quy ước đặt tên thư mục at, mỗi ô được định nghĩa sẽ tự động trở thành một prop trong nó

1:59:45 bố cục tương ứng. Tệp TSX cho bảng điều khiển phức tạp của chúng tôi, chúng tôi sẽ tạo ba ô trong bảng điều khiển comp complex

1:59:53 thư mục tại người dùng để phân tích người dùng tại doanh thu cho chỉ số doanh thu và tại các thông báo cho thông báo hãy cùng

2:00:03 Triển khai những điều này ngay bây giờ, hãy bắt đầu với thông báo trong thư mục bảng điều khiển phức tạp, tạo một thư mục mới.

2:00:11 Gọi thông báo qua một trang. Tệp TSX xuất mặc định một thành phần react gọi là notifications trả về một DI

2:00:21 gắn thẻ t với các thông báo văn bản tương tự trong bảng điều khiển phức tạp, lại tạo một thư mục khác tại Revenue tạo một trang. Tệp TSX và

2:00:34 xuất mặc định một thành phần react gọi là Revenue metrics trả về một thẻ div ghi Revenue metrics cuối cùng tạo

2:00:42 một thư mục khác có một trang. Tệp TSX nên ở trang người dùng. TSX xuất hàm mặc định user Analytics trả về một thẻ div với văn bản

2:00:54 Phân tích người dùng: Ba thành phần đơn giản với quy ước đặt tên thư mục AT. Bây giờ chúng ta có thể sử dụng ba ô này trong bố cục của mình.

2:01:04 TSX Điều hay là chúng được tự động truyền vào thành phần bố cục của chúng tôi như các props và không có Import

2:01:12 cần thiết, hãy xóa các câu lệnh nhập và chỉ định thêm ba đạo cụ nữa: người dùng doanh thu và thông báo, và đối với các loại

2:01:23 cùng ba thành phần người dùng: doanh thu và thông báo. Tôi sẽ cập nhật jsx với các kiểu nội tuyến để phù hợp với bố cục từ

2:01:33 trong slide của chúng tôi, bạn có thể tìm thấy mã này trên kho GitHub của tôi, chúng tôi có một thẻ div kèm theo với thẻ sad div để kết xuất

2:01:41 phụ kiện trẻ em chúng ta có khe người dùng, khe doanh thu và cuối cùng là khe thông báo, chúng ta cũng tạo một tấm thẻ đẹp

2:01:49 component để bao bọc từng khe đó trong thư mục nguồn, chúng ta sẽ tạo một thư mục mới gọi là components với

2:01:57 Thẻ. TSX, tôi sẽ dán mã cho một thành phần card để tiết kiệm thời gian, giờ ở mỗi khe, thay thẻ diff bằng

2:02:08 thành phần thẻ đảm bảo nhập thành phần ở phía trên để thông báo được bao bọc bằng chỉ số doanh thu của thẻ

2:02:16 Với phân tích thẻ và người dùng được bao quát cùng thẻ, chúng tôi sẵn sàng khi bạn truy cập bảng điều khiển Locost 3000 Complex

2:02:27 Bạn sẽ thấy bảng điều khiển phức tạp của chúng tôi với tiêu đề chính ngay tại đây và cả ba khe đều được bố trí đẹp mắt. Phân tích người dùng

2:02:35 Các chỉ số doanh thu và thông báo, nếu không hiệu quả, thử khởi động lại máy chủ phát triển, các tuyến song song của chúng tôi hoạt động như mong đợi nhưng

2:02:44 Đây là điều quan trọng cần lưu ý: slot không phải là đoạn tuyến và không ảnh hưởng đến cấu trúc URL của bạn, nên nếu bạn thử

2:02:52 Điều hướng đến người dùng SL bảng điều khiển phức tạp hoặc tại người dùng bạn sẽ không thấy phân tích người dùng bạn sẽ nhận được trang 404 không

2:03:04 Và điều thú vị hơn nữa là đạo cụ trẻ em thực ra là một khe ngầm không cần chỗ riêng

2:03:12 trang SL bảng điều khiển phức tạp của thư mục. TSX giống như trang SL con của bảng điều khiển phức tạp. TSX, về mặt kỹ thuật thì chúng ta

2:03:24 đang làm việc với bốn khe trong tệp bố cục, bây giờ để tôi hướng dẫn bạn qua một số trường hợp sử dụng của parallel

2:03:30 định tuyến bảng điều khiển với nhiều phần, giao diện xem chia nhỏ, bố cục đa khung giao diện quản trị phức tạp và

2:03:39 Thực ra bất kỳ giao diện người dùng nào mà các phần phải hoạt động độc lập, bạn có thể thắc mắc lợi ích của việc xây dựng người dùng là gì.

2:03:47 Giao diện với các tuyến song song làm chúng đặc biệt trong khi các tuyến song song rất tuyệt để tách bố cục

2:03:54 vào những vị trí dễ quản lý, đặc biệt khi các nhóm khác nhau làm những phần khác nhau, đó không phải là siêu năng lực chính của họ.

2:04:01 Có thể làm được điều đó với các thành phần thông thường, phép màu thực sự của các tuyến song song đến từ hai tính năng chính độc lập

2:04:09 Xử lý tuyến đường và điều hướng phụ: Hãy cùng phân tích một trong những đặc điểm hấp dẫn nhất của các tuyến song song

2:04:16 là khả năng xử lý từng tuyến một cách độc lập điều này rất quan trọng vì mỗi khe trong bố cục của bạn như người dùng

2:04:24 doanh thu và thông báo có thể tự xử lý việc tải và lỗi của chính nó. Điều khiển chi tiết này đặc biệt hữu ích

2:04:31 Trong các trường hợp các phần khác nhau của trang tải với tốc độ khác nhau hoặc gặp lỗi riêng biệt, hãy cân nhắc điều đó

2:04:39 Nếu dữ liệu phân tích người dùng của bạn mất thời gian tải nhanh, bạn có thể hiển thị một vòng xoay tải chỉ cho phần đó trong khi

2:04:46 mọi thứ khác vẫn tương tác hoặc nếu có sự cố khi lấy các chỉ số Doanh thu, bạn có thể hiển thị thông báo lỗi trong đó

2:04:54 Khe cụ thể mà không làm gián đoạn phần còn lại của bảng điều khiển Lợi ích quan trọng khác của việc sử dụng các tuyến song song là

2:05:01 Khả năng cung cấp trải nghiệm điều hướng phụ liền mạch trong mỗi tuyến song song mà mỗi khe có thể thực hiện

2:05:08 hoạt động như một ứng dụng mini đầy đủ với điều hướng riêng và quản lý trạng thái, người dùng có thể tương tác với từng ứng dụng

2:05:15 phần riêng biệt: áp dụng bộ lọc, sắp xếp dữ liệu hoặc điều hướng qua các trang mà không ảnh hưởng đến các phần khác

2:05:22 ví dụ, trong phần thông báo, người dùng có thể muốn chuyển đổi giữa chế độ xem mặc định và chế độ xem lưu trữ để xem các chế độ xem cũ hơn

2:05:31 các thông báo này, các tương tác này vẫn nằm trong phần thông báo và các cập nhật URL để phù hợp với

2:05:37 chế độ xem hiện tại, điều này giúp URL có thể chia sẻ và giúp người dùng theo dõi vị trí của mình trong ứng dụng, người dùng cũng có thể điều hướng

2:05:45 qua các phần khác nhau của ứng dụng mà không cần tải lại trang hoặc thay đổi bố cục không cần thiết khi

2:05:51 Thảo luận về điều hướng phụ trong các tuyến song song, có một khái niệm rất quan trọng mà chúng ta cần hiểu, hãy xem là gì

2:05:57 Tiếp theo, hãy cùng đi sâu vào một khía cạnh quan trọng của định tuyến song song, đó là xử lý các tuyến đường không thể so sánh mà chúng ta đã học

2:06:07 Việc điều hướng phụ trong các tuyến là một trong những lợi ích của việc sử dụng các tuyến song song, ví dụ như trong khu phức hợp của chúng tôi

2:06:12 Bảng điều khiển, chúng ta có thể điều hướng giữa danh sách mặc định các thông báo và một danh sách lưu trữ các thông báo. Hãy để chúng ta điều hướng

2:06:20 Hãy vào mã VS và triển khai kịch bản trước, chúng ta sẽ cập nhật trang này. TSX trong ô thông báo để thêm

2:06:27 Điều hướng đến chế độ xem lưu trữ Nhập thành phần liên kết và đưa nó vào JSX Hãy bao bọc thông báo trong một div

2:06:36 Tag and Add Another Div với liên kết được lưu trữ và HRE is/ Complex Dasboard Slash Archived Link nhân tiện là một

2:06:50 xuất mặc định bây giờ hãy tạo chế độ xem thông báo đã lưu trữ bên trong ô thông báo tạo một chế độ lưu trữ

2:07:00 Hãy nhớ đây là thư mục route thông thường và thêm một trang. TSX với mã tương tự nhưng đã được chỉnh sửa cho

2:07:08 Chế độ xem lưu trữ để sao chép trang. TSX dán nó, cập nhật tên thành phần cho các thông báo đã lưu trữ Tiêu đề và liên kết

2:07:19 chúng tôi trỏ đến thông báo mặc định, HF is/ complex, Dashboard, xin lưu ý là thư mục route thông thường và

2:07:28 không phải một khe. Nếu bạn kiểm tra trình duyệt, bạn sẽ thấy liên kết thông báo đã lưu trữ, nhấp vào nó sẽ thay đổi

2:07:37 URL đến/ bảng điều khiển phức tạp SL đã được lưu trữ và giao diện người dùng hiển thị chế độ xem đã lưu trữ, nhấp vào liên kết mặc định sẽ đưa bạn đến

2:07:47 Quay lại/ Bảng điều khiển phức tạp và chúng ta thấy chế độ xem thông báo, điều hướng phụ của chúng ta hoạt động hoàn hảo với cái này

2:07:56 Triển khai đã được thực hiện. Hãy cùng thảo luận về chủ đề chính của video này, đó là các tuyến không khớp mặc định. Nội dung

2:08:04 hiển thị trong một khe khớp với URL hiện tại, bảng điều khiển phức tạp của chúng tôi có bốn khe, trẻ em, người dùng, doanh thu và

2:08:14 thông báo khi bạn truy cập bảng điều khiển phức tạp localhost 3000, tất cả các khe đều hiển thị nội dung tương ứng nhưng khi bạn

2:08:23 điều hướng đến bảng điều khiển phức tạp localhost 3000 SL chỉ lưu trữ khe thông báo có nội dung phù hợp

2:08:32 ba slot còn lại dành cho trẻ em, người dùng và doanh thu trở nên không ai sánh kịp. Shar sẽ xử lý các slot không thể so sánh này.

2:08:40 khác nhau tùy thuộc vào cách bạn điều hướng khi điều hướng qua giao diện người dùng, ví dụ như việc nhấp vào liên kết tiếp theo vẫn hiển thị

2:08:48 bất cứ thứ gì đã có trong các ô không khớp trước đó để khi bạn chuyển giữa thông báo mặc định và thông báo lưu trữ thì thông báo còn lại

2:08:56 ba khe, trẻ em, người dùng và doanh thu giữ nguyên như trước và không bị ảnh hưởng bởi sự thay đổi đường dẫn URL

2:09:04 từ bảng điều khiển phức tạp của SL đến bảng điều khiển phức tạp SL, SL được lưu trữ khi bạn tải lại trang, tuy nhiên tiếp theo sẽ tìm kiếm một

2:09:13 mặc định. Tệp TSX trong mỗi khe không khớp, tệp này rất quan trọng vì nó đóng vai trò là phương án dự phòng cho nội dung Rend khi

2:09:22 framework không thể lấy trạng thái hoạt động của khe từ URL hiện tại nếu không có tệp bạn sẽ nhận được 404

2:09:29 lỗi đó chính xác là điều xảy ra nếu bạn tải lại bảng điều khiển phức tạp SL đã lưu trữ, không tìm thấy và không tìm thấy

2:09:38 Tài nguyên yêu cầu Chúng tôi không có mặc định. Tệp TSX trong phần người dùng con hoặc các khe doanh thu, hãy quay lại vs

2:09:47 Lập trình và sửa lỗi này bằng cách thêm file bị thiếu bây giờ các file có thể phản chiếu trang của bạn. Nội dung TSX hoặc trình bày gì đó

2:09:55 Hoàn toàn khác biệt, tùy bạn, trong trường hợp của chúng tôi, chúng tôi sẽ giữ mọi thứ đơn giản và sao chép nội dung từ trang. TSX dành cho chúng tôi

2:10:03 Bảng điều khiển phức tạp, chúng ta cần thêm ba điều mặc định. TSX để ngăn lỗi 404 khi tải lại trang trước là dành cho

2:10:11 ô dành cho trẻ em Định nghĩa mặc định. TSX trong thư mục bảng điều khiển phức tạp, đây sẽ là phương án dự phòng

2:10:20 Xem ô dành cho trẻ em sao chép nội dung từ trang. TSX và dán nó bạn có thể đổi tên thành phần cũng như

2:10:29 thay đổi tiêu đề hoàn toàn tùy theo bạn. Định nghĩa mặc định. TSX bên trong khe người dùng Vậy nên trong thư mục add users mặc định.

2:10:40 TSX và đây sẽ là chế độ xem dự phòng cho slot người dùng để sao chép trang.

2:10:46 Nội dung TSX rồi dán lại, tôi sẽ thay đổi văn bản thẻ để sử dụng analytics, nội dung mặc định cuối cùng. Định nghĩa mặc định.

2:10:56 TSX trong thư mục doanh thu tôi sẽ sao chép. Nội dung TSX và giữ nguyên như vậy, điều này sẽ phục vụ như một

2:11:06 Chế độ dự phòng View cho slot doanh thu khi đã có sẵn việc nạp lại localhost 3000 complex dashboard SL

2:11:15 Archived hoạt động hoàn hảo, khe thông báo hiển thị nội dung đã lưu trữ vì đây là khe duy nhất có

2:11:22 Thành phần được định nghĩa cho đường dây lưu trữ dấu gạch chéo, thư mục này ngay tại đây, các khe khác hiển thị mặc định tương ứng. TSX

2:11:31 nội dung như những túi rơi nói về bảng điều khiển phức tạp, phân tích người dùng mặc định, nội dung mặc định, các chỉ số doanh thu mà chúng tôi không có.

2:11:39 thay đổi để tải lại bảng điều khiển phức tạp Điều hướng đến các con đã lưu trữ Người dùng và doanh thu Vẫn giữ nguyên Chúng ta tải và chúng ta

2:11:49 kết xuất nội dung mặc định Thiết lập này đảm bảo bạn không vô tình kết xuất một tuyến đường không nên song song

2:11:56 Đã hiển thị nếu bạn gặp sự cố với điều này, vui lòng thử khởi động lại máy chủ phát triển. Được rồi, chúng ta đã làm được rồi.

2:12:03 đã đề cập cách Parallel Routes cho phép bạn kết xuất đồng thời nhiều trang trong cùng một bố cục. Tiếp theo chúng ta sẽ khám phá

2:12:10 Cách Parallel Routes cho phép hiển thị có điều kiện các trang trong cùng một bố cục trong nghiên cứu trước đây của chúng tôi

2:12:18 Định tuyến song song, chúng tôi học cách hiển thị nhiều Trang cùng lúc trong cùng một bố cục mà không thay đổi URL

2:12:25 Bây giờ hãy cùng khám phá các tuyến điều kiện, một tính năng mạnh mẽ khác mà các tuyến song song cho phép, hãy tưởng tượng bạn muốn hiển thị

2:12:33 nội dung khác nhau tùy thuộc vào việc người dùng có đăng nhập hay không, bạn có thể muốn hiển thị bảng điều khiển để xác thực

2:12:38 người dùng nhưng hiển thị trang đăng nhập đối với những người không phải là các tuyến điều kiện cho phép chúng tôi thực hiện điều này trong khi vẫn duy trì

2:12:45 mã hoàn toàn tách biệt trên cùng một URL. Để tôi chỉ cho bạn cách triển khai kịch bản này. Hãy bắt đầu bằng cách tạo ra

2:12:52 vị trí đăng nhập đầu tiên trong thư mục bảng điều khiển phức tạp tạo một thư mục con mới gọi là at login bên trong thư mục này

2:13:00 Tạo một trang. TSX, chúng tôi sẽ giữ component đơn giản, ví dụ bạn có thể sao chép component từ slot khác

2:13:11 người dùng dán nó vào đây và đổi tên thành khe đăng nhập thay đổi văn bản thành Vui lòng đăng nhập để tiếp tục trong ứng dụng thực

2:13:22 đây sẽ là nơi bạn sẽ triển khai biểu mẫu đăng nhập của mình nhưng đoạn văn giữ chỗ này vẫn hoạt động tốt cho phần demo now của chúng tôi

2:13:28 Quay lại với bố cục. TSX và thêm slot đăng nhập vào props để đăng nhập rồi đăng nhập kiểu react. phản ứng

2:13:40 node cho jsx, chúng ta sẽ tạo một kiểm tra Au đơn giản, thêm một hằng số gọi là e, đã đăng nhập và đặt thành fults trong một thực tế

2:13:50 bạn thường dùng một ứng dụng như get user hoặc dùng Au để kiểm tra trạng thái xác thực nhưng

2:13:57 Chúng ta sẽ giữ mọi thứ đơn giản ở đây dựa trên giá trị của E đã đăng nhập, hãy render giao diện người dùng có điều kiện để trả về là

2:14:05 đã đăng nhập rồi, chúng ta đã có gì rồi ngoài khe đăng nhập. Khi bạn kiểm tra trình duyệt, bạn sẽ thấy khe đăng nhập

2:14:14 vì we set đã đăng nhập ở chế độ false, nếu bạn không thấy sự thay đổi, hãy thử khởi động lại máy chủ phát triển npm runev của bạn.

2:14:24 làm mới và chúng ta sẽ thấy thẻ, vui lòng đăng nhập để tiếp tục, đổi giá trị của East đã đăng nhập thành true và bạn sẽ thấy tất cả

2:14:32 các khe khác xuất hiện, điều này cho thấy cách các tuyến song song hiển thị các trang khác nhau một cách có điều kiện trong khi vẫn giữ sạch

2:14:40 mã tách biệt dưới cùng một URL, khe đăng nhập cũng được hưởng lợi từ lỗi độc lập và trạng thái tải như

2:14:47 ngoài việc điều hướng phụ đến một khả năng đăng ký hoặc quên mật khẩu, bộ định tuyến ứng dụng trong ex đã giới thiệu hai

2:14:56 Các mẫu định tuyến nâng cao mà chúng ta đã học về các tuyến song song, giờ hãy cùng tìm hiểu về việc chặn các tuyến đường

2:15:03 Hãy cùng giải quyết vấn đề này thành hai phần, đầu tiên chúng ta sẽ hiểu các Cốt lõi Concept và quy ước, sau đó chúng ta sẽ xem cách diễn đạt

2:15:10 Chúng để sử dụng thực tế: chặn các tuyến là một cơ chế định tuyến tiên tiến cho phép bạn tải một tuyến từ

2:15:16 một phần khác của ứng dụng của bạn trong bố cục hiện tại, nó đặc biệt hữu ích khi bạn muốn hiển thị phần mới

2:15:22 nội dung trong khi vẫn giữ người dùng của bạn trong cùng một bối cảnh để hiểu rõ hơn, để tôi chia sẻ với bạn một vài thực tế

2:15:28 ví dụ xem xét luồng đăng nhập, thường nhấp vào liên kết đăng nhập sẽ đưa bạn đến một trang mới nhưng có các tuyến đường chặn

2:15:37 bạn có thể hiển thị một mô hình thay thế trong khi vẫn cập nhật URL đến/ đăng nhập, điều này có nghĩa là chia sẻ URL đó hoặc làm mới

2:15:46 Trang vẫn hoạt động như mong đợi, hiển thị toàn bộ trang đăng nhập hoặc xem xét một thư viện ảnh thay vì chuyển đến

2:15:54 Trang ảnh riêng biệt Khi ai đó nhấp vào một bức ảnh, bạn có thể hiển thị mô hình với ảnh phóng to với chi tiết như

2:16:00 tên và vị trí của nhiếp ảnh gia sẽ cập nhật URL để phù hợp với ảnh cụ thể, giúp truy cập URL đó có thể chia sẻ

2:16:09 Trực tiếp sẽ hiển thị toàn bộ trang ảnh của tất nhiên, việc định nghĩa các tuyến chặn trong ứng dụng XJS liên quan đến một số

2:16:17 Quy ước: Hãy cùng tìm hiểu mã VS và hiểu chúng qua các ví dụ, chúng ta sẽ bắt đầu bằng việc thiết lập thư mục của mình.

2:16:23 Cấu trúc trong thư mục ứng dụng của bạn Tạo một thư mục mới có tên F1 viết tắt cho thư mục một có một trang. Tệp TSX chứa một trang thành phần react đơn giản.

2:16:38 Hàm mặc định xuất TSX F1 trả về thẻ H1 trang F1 bên trong thư mục F1, hãy tạo một thư mục khác F2

2:16:49 với một trang riêng. TS X là trang F2. TSX ở đây xuất hàm mặc định F2 return và thẻ H1 ghi F2

2:17:01 trang tiếp theo, hãy cập nhật thành phần F1 của chúng ta để bao gồm một liên kết đến F2, tức là nhập liên kết từ liên kết SL tiếp theo và cho jsx thêm một

2:17:13 thẻ div với thành phần liên kết trỏ đến F2 H bằng với slf1 slf2 hãy nhớ thư mục F2 được lồng bên trong

2:17:24 Thư mục F1 trong trình duyệt khi bạn truy cập Local Host 3000 slf1, bạn sẽ thấy thành phần F1 kèm liên kết đến F2, nhấp vào liên kết này sẽ

2:17:36 dẫn bạn thẳng đến/ F1 slf2 chúng ta thấy trang jsx F2 hãy thay đổi hành vi này với một tuyến đường chặn để hiểu

2:17:46 Chặn các quy ước định tuyến tốt hơn, hãy cùng suy nghĩ về hai yếu tố chính: Thư mục Nguồn và thư mục đích, chúng ta

2:17:54 muốn chặn đường F2 khi điều hướng từ đường F1, nên F1 là thư mục nguồn và F2 là Target

2:18:04 thư mục, hãy bắt đầu bằng cách tạo một thư mục mới trong thư mục nguồn, đây sẽ là tuyến chặn tên thư mục

2:18:11 cần khớp với thư mục mục F2 của chúng ta nhưng chúng ta cần một tiền tố đặc biệt để hoạt động, tạm thời tôi sẽ thêm dấu gạch nối chặn

2:18:22 Khi tôi giải thích tiền tố thực sự cần thiết, việc sử dụng tiền tố VI rất quan trọng vì nó thông báo cho các nexs

2:18:30 nơi Target Route được đặt, hãy chú ý cách cả F2 và F2 bị chặn đều ở cùng một cấp độ trong cấu trúc thư mục của chúng tôi

2:18:39 Khi chúng ta muốn chặn một tuyến đường ở cùng mức như thế này, chúng ta sử dụng ký hiệu dấu chấm trong ngoặc đơn, vậy hãy thay thế

2:18:47 Dấu gạch nối bị chặn với dấu ngoặc đơn và dấu chấm bên trong, bên trong thư mục này chúng ta sẽ tạo một trang. Tệp TSX với một react

2:18:57 thành phần hiển thị nội dung bị chặn của chúng tôi, vì vậy khi xuất hàm mặc định bị chặn F2, chúng tôi trả về một thẻ H1 với

2:19:06 tiền tố và văn bản nói rằng trang F2 bị chặn khởi động lại máy chủ dev với npm chạy Dev và điều hướng đến/

2:19:16 F1 trong trình duyệt nhấp vào liên kết F2, URL cập nhật thành slf1 slf2 nhưng hiển thị nội dung bị chặn làm mới trang này

2:19:27 tải trang F2 gốc thay vào đó, đây là ý tưởng đằng sau việc chặn các tuyến đường, nó cho phép bạn hiển thị giao diện người dùng thay thế bằng

2:19:35 bảo toàn ngữ cảnh nhưng mặc định về giao diện người dùng chuẩn trên trang Direct sẽ tải quy ước đầu tiên bạn cần biết

2:19:42 chặn các tuyến khá đơn giản, chúng tôi sử dụng DOT trong ngoặc đơn để khớp các đoạn

2:19:49 ở cùng cấp độ trong cấu trúc thư mục của bạn, điều này tương tự như quy ước đường dẫn tương đối, nơi chúng ta sử dụng DOT để

2:19:55 tham khảo thư mục hiện tại, nếu bạn muốn chặn thứ gì đó cao hơn một cấp thì sao? Không vấn đề gì, chúng tôi chỉ dùng hai

2:20:03 các dấu chấm trong dấu ngoặc đơn làm tiền tố tương tự như cách chúng ta sử dụng hai dấu chấm để chỉ thư mục cha trong đường dẫn tương đối

2:20:11 Quy ước, để tôi cho bạn thấy ý tôi với một ví dụ, hãy tạo một thư mục mới tên là F3 trong thư mục ứng dụng của chúng ta. Vậy

2:20:19 trong thư mục mới ứng dụng F3, tạo một trang. Tệp TSX với hàm mặc định xuất thành phần react đơn giản

2:20:28 F3 trả về thẻ H1, trang F3, giờ hãy chuyển sang trang. TSX trong thư mục F1 và thêm liên kết đến F3, văn bản là F3 và

2:20:40 H slf3 khi bạn thử điều này trong trình duyệt, nhấp vào liên kết F3 này sẽ đưa bạn thẳng đến slf3, điều này hiển thị trang F3 nhưng hãy làm

2:20:53 Điều thú vị hơn là khi chặn đường dẫn này trong ví dụ này, thư mục nguồn của chúng ta là F1, nơi chúng ta đang điều hướng từ và

2:21:01 thư mục mục tiêu của chúng ta là F3, nơi chúng ta muốn đến, nên bên trong thư mục nguồn F1, chúng ta sẽ tạo một thư mục mới phù hợp với

2:21:10 Tên thư mục mục là F3 nên thư mục mới F3 chúng ta cần một tiền tố đặc biệt để hoạt động nhưng tôi sẽ thêm dấu gạch nối chặn

2:21:21 làm chỗ giữ trong khi tôi giải thích tiền tố thực sự cần thiết vì F3 nằm một cấp trên vị trí chúng ta đang ở trong thư mục

2:21:29 Cấu trúc: Chúng ta sẽ dùng dấu chấm trong ngoặc đơn làm tiền tố giống như khi bạn dùng do do slash để đi lên một

2:21:38 Thư mục trong các tệp pod Bên trong thư mục này hãy tạo một trang. TSX với một thành phần cho thấy chúng ta có

2:21:46 Đã chặn thành công trang Route SO. TSX và mặc định xuất một hàm gọi là intercepted F3, hiển thị

2:21:54 tiền tố cũng như trang F3 bị chặn nội dung giúp máy chủ Dev của bạn khởi động lại nhanh npm chạy Dev và bây giờ trong

2:22:05 the/ F1 route khi bạn nhấp vào liên kết F3 đó, URL vẫn hiển thị slf3 nhưng bạn sẽ thấy nội dung bị chặn của chúng tôi thay vào đó

2:22:15 Nếu bạn làm mới trang, bạn sẽ trở lại nội dung F3 gốc đúng như bạn mong đợi, hy vọng là

2:22:22 Quy ước bắt đầu có ý nghĩa Bây giờ hãy xem cách ghép các phân đoạn cao hơn hai cấp trong cấu trúc thư mục của chúng ta

2:22:29 Hãy bắt đầu bằng cách tạo một thư mục mới tên F4 trong thư mục ứng dụng của chúng ta, bên trong đó chúng ta sẽ thêm một trang đơn giản. TSX

2:22:39 xuất file hàm mặc định F4 và trả về một thẻ H1 ghi F4 page cho ví dụ này chúng ta sẽ chặn

2:22:48 F4 khi điều hướng từ F2, vậy hãy thêm một liên kết đến F4 trong liên kết nhập trang F2 và gọi nó để điều hướng đến

2:23:01 F4, một TR sẽ là slf4 nếu bạn thử điều này trên trình duyệt bằng cách điều hướng đến slf1 slf2 và nhấp vào F4 thì nó sẽ đưa bạn đến

2:23:14 trực tiếp đến/ F4 và bạn sẽ thấy nội dung trang F4 nhưng chúng tôi sẽ thay đổi hành vi đó cho kịch bản này nguồn của chúng tôi

2:23:24 thư mục là F2 nơi chúng ta đang điều hướng và thư mục đích là F4, nơi chúng ta muốn vào bên trong thư mục nguồn

2:23:32 F2, chúng ta sẽ tạo một thư mục mới phù hợp với tên thư mục mục đích F4, chúng ta cần một tiền tố đặc biệt để tạo nó

2:23:40 hoạt động nhưng tôi sẽ thêm dấu gạch nối chặn làm chỗ giữ trong khi giải thích tiền tố thực tế chúng ta cần vì các bộ F4

2:23:49 hai cấp trên vị trí của cấu trúc thư mục, chúng ta sẽ sử dụng dấu ngoặc đơn với hai dấu chấm và một tập hợp khác

2:23:59 dấu ngoặc đơn với hai dấu chấm, đây là tiền tố của chúng ta để đi lên hai thư mục bên trong thư mục, hãy tạo một trang. Tệp TSX

2:24:09 với một thành phần cho thấy chúng tôi đã chặn thành công tuyến đường nên xuất hàm mặc định chặn F4

2:24:16 tiền tố và nội dung giờ giúp máy chủ của bạn khởi động lại nhanh npm chạy Dev và thử khi tải slf1

2:24:28 slf2 bạn sẽ thấy liên kết đến F4, nhấp vào liên kết và bạn sẽ thấy nội dung bị chặn của chúng tôi thay vì

2:24:35 Trang F4 gốc Nếu bạn làm mới trang, bạn sẽ nhận lại giao diện F4 thông thường. Đây chính xác là điều chúng tôi muốn

2:24:43 Đường đi chén, dấu ngoặc kép với hai dấu chấm bên trong quy ước này cực kỳ hữu ích khi bạn cần

2:24:50 để chặn các route nằm ở nhiều cấp độ cao hơn trong cấu trúc thư mục của bạn, hãy nghĩ như sử dụng do/do slash in

2:24:58 Tệp thông thường, các bộ phận là cùng một khái niệm chỉ được điều chỉnh cho định tuyến năm sau, đó là lần thứ ba chúng tôi tham gia quy ước chặn tuyến tiếp theo

2:25:08 Hãy cùng xem quy ước cuối cùng để chặn các tuyến đường sử dụng ba dấu chấm trong ngoặc đơn để khớp các đoạn

2:25:15 Từ thư mục ứng dụng gốc, trước tiên hãy tạo một thư mục mới tên F5 trong thư mục ứng dụng F5 và thêm một trang. Tệp TSX với

2:25:26 thành phần react đơn giản xuất hàm mặc định F5 và chúng ta trả về thẻ H1 trang F5 tiếp theo trong thư mục F2 của chúng ta sẽ tạo một thư mục F2 bên trong

2:25:40 với một trang giấy. TSX bao gồm một liên kết đến F5 để tên thư mục là F2 bên trong với một trang. Tệp TSX mặc định xuất một

2:25:52 thành phần react với liên kết đến/ F5 trong trình duyệt, điều hướng đến slf1 slf2 slash inner F2 và bạn sẽ thấy

2:26:04 Liên kết đến F5, nhấp vào nó hiện tại sẽ đưa bạn trực tiếp đến tuyến F5, SL F5, nhưng nếu bạn muốn chặn tuyến này thì sao?

2:26:14 trong trường hợp này, thư mục nguồn của chúng ta là F2 bên trong, nơi chúng ta đang điều hướng và thư mục đích là nơi chúng ta muốn truy cập

2:26:24 bên trong thư mục nguồn trong F2 của chúng ta, chúng ta sẽ tạo một thư mục mới phù hợp với tên thư mục mục đích F5, chúng ta cần một thư mục đặc biệt

2:26:34 tiền tố để làm cho nó hoạt động nhưng tôi sẽ thêm dấu gạch nối chặn làm chỗ giữ trong khi giải thích tiền tố thực tế

2:26:42 cần vì F5 sống nhiều đoạn trên vị trí hiện tại của chúng ta, ta có thể sử dụng dấu ngoặc đơn quy ước đặc biệt với

2:26:51 ba dấu chấm bên trong này sẽ báo cho CH tiếp theo khớp các đoạn bắt đầu từ thư mục ứng dụng gốc tức là từ ứng dụng gốc

2:26:59 thư mục có một thư mục F5, hãy tạo tuyến đường chặn của chúng ta với một trang. Hàm mặc định xuất tệp TSX

2:27:08 chặn F5 và chúng tôi trả về một thẻ H1 với tiền tố và nội dung, khi bạn khởi động lại máy chủ dev thì npm chạy Dev

2:27:19 và điều hướng đến SL F1 slf2 SL inner F2 và nhấp vào liên kết F5, bạn sẽ thấy tuyến đường bị chặn thay vì

2:27:29 Trang F5 gốc nhưng nếu bạn làm mới, bạn sẽ nhận lại được tuyến F5 thông thường đúng như chúng tôi muốn, đây là trang thứ tư

2:27:38 quy ước sử dụng ba dấu chấm trong ngoặc đơn để khớp các đoạn từ thư mục ứng dụng gốc để kết thúc

2:27:46 chặn các tuyến đường mang lại cho bạn khả năng mạnh mẽ để hiển thị nội dung từ phần khác của ứng dụng trong khi vẫn giữ nguyên

2:27:52 người dùng của bạn trong ngữ cảnh hiện tại và slide này là một bảng tóm tắt nhanh về các quy ước mà chúng ta đã đề cập

2:27:59 Biết rằng việc chặn đường có thể hơi phức tạp lúc đầu và điều đó hoàn toàn bình thường. Tiếp theo chúng ta sẽ xem xét một cách thực tế

2:28:06 Ví dụ này sẽ khiến tất cả những điều này nhấp vào, chúng tôi gần đây đã khám phá các tuyến song song và các tuyến đường chặn để

2:28:15 Các mẫu định tuyến mạnh mẽ trong bộ định tuyến ứng dụng. Bây giờ để tôi chỉ cho bạn cách các mẫu này phối hợp với nhau thông qua

2:28:20 một ví dụ thực tế: hãy nhớ ví dụ về nguồn ảnh mà tôi đã đề cập trước đó, tôi sẽ trình diễn và phân tích mã để

2:28:28 Giúp bạn hiểu cách mọi thứ hoạt động, hãy bắt đầu với bản demo tại Localhost 3000/- Feed bạn sẽ thấy một nguồn hình ảnh

2:28:36 hiển thị bảy kỳ quan mới của thế giới, nhấp vào bất kỳ hình ảnh nào và một mô hình sẽ xuất hiện với phiên bản phóng to của nó

2:28:44 Hình ảnh cùng với các chi tiết như tên nhiếp ảnh gia và vị trí ở cuối cùng. Những gì đang diễn ra ở đây thực sự là

2:28:52 thú vị là chúng ta đang xem xét một tuyến song song bị chặn trong khi URL thay đổi thành/ ảnh Feed cộng với

2:29:00 Image ID những gì bạn đang thấy là một tuyến đường bị chặn song song hiển thị trong cùng bố cục với ảnh

2:29:07 nguồn cấp có thể nhìn thấy ở phía sau, điều này rất quan trọng vì nếu không có lộ trình song song modal, việc nhấp vào ảnh sẽ

2:29:14 Thay thế hoàn toàn nội dung trang thay vì hiển thị lớp phủ và đây là điều còn thú vị hơn với

2:29:21 các mô hình nhấn nút quay lại của trình duyệt sẽ đưa bạn về trang trước thay vì đóng mô hình nhưng

2:29:28 Các tuyến chặn song song giải quyết vấn đề này một cách tinh tế, chú ý cách các nút trình duyệt lùi và tiến mở mượt mà

2:29:35 và đóng mô hình, đây là một tính năng thú vị khác nếu bạn chia sẻ URL với ai đó hoặc chỉ làm mới trang thì ảnh sẽ tải

2:29:46 Chi tiết trên một trang mới Điều này làm cho các tuyến đường chặn song song trở nên hoàn hảo cho các mô hình. Bạn có thể áp dụng nguyên tắc tương tự.

2:29:54 ở những nơi khác cũng như có nút đăng nhập mở mô hình nhưng truy cập trực tiếp vào đăng nhập SL sẽ hiển thị đăng nhập đầy đủ

2:30:01 Giờ bạn đã thấy nó hoạt động, hãy để tôi hướng dẫn bạn từng bước để tạo ra nó, bạn sẽ tìm thấy tất cả mã nguồn trong

2:30:08 thư mục nguồn ảnh trong kho GitHub của tôi và thành phần modal được định nghĩa trong thư mục components bước một, thu thập lại

2:30:16 Hình ảnh và đặt chúng vào một thư mục ảnh bên trong thư mục nguồn cấp ảnh. Chúng ta có bảy hình ảnh, bước hai. Tạo một

2:30:25 typescript để nhập các hình ảnh này và tổ chức chúng thành một mảng với siêu dữ liệu mà mỗi kỳ quan trong mảng của chúng tôi cần

2:30:34 tên ID Nguồn ảnh gia và địa điểm bước ba thiết lập một trang. Tệp TSX trong thư mục nguồn ảnh để hiển thị

2:30:44 danh sách hình ảnh của bạn, sử dụng mảng Wonders, tôi chọn tablein CSS để tạo kiểu, tạo ra phong cách bạn thích, wrap

2:30:52 mỗi hình ảnh trong một thành phần liên kết trỏ đến/ nguồn ảnh kèm theo ID hình ảnh từ 1 đến 7 trang này tạo ra phần chính của bạn

2:31:02 nguồn ảnh tại localhost 3000 photo bước bốn tạo chi tiết ảnh của bạn Tuyến động bên trong nguồn ảnh

2:31:11 thêm một ID Tuyến động tuyến này lấy tham số ID tìm ảnh phù hợp từ mảng Wonders

2:31:20 và hiển thị chi tiết ảnh, tên ảnh, nguồn ảnh, nhiếp ảnh gia, tên và vị trí khi ai đó truy cập nguồn ảnh SL, ID SL.

2:31:32 như hai người với Petra, giờ họ sẽ thấy chi tiết kỳ diệu cho phần quan trọng, bước năm là chặn đường

2:31:41 giữa nguồn cấp và chi tiết, vì chúng ta muốn một mô hình chồng lên nguồn cấp, chúng ta sẽ bắt đầu với một tuyến song song, tạo một mô hình như một tuyến song song.

2:31:51 trong thư mục nguồn ảnh và đưa nó vào bố cục. TSX props mô hình hóa điều này ở model route là đặc biệt vì nó

2:32:00 cho phép kết xuất đồng thời cả nội dung nguồn cấp và mô hình có thể tồn tại trên màn hình cùng lúc cho

2:32:08 tuyến song song modal chặn là nguồn và tuyến ID là đích nên bên trong nguồn modal

2:32:16 thêm một thư mục mới khớp với tên thư mục đích trong trường hợp này là ID Dynamic route vì model là một

2:32:25 tuyến song song một tiền tố cần phải là dấu chấm trong ngoặc đơn để khớp cùng cấp độ trong thư mục này tạo một trang

2:32:33 hiển thị chi tiết ảnh tương tự như tuyến Dynamic ID chính Tôi đã di chuyển tên ảnh từ trên xuống dưới xuống

2:32:41 Trình bày cách bạn có thể có giao diện người dùng khác nhau cho mỗi tuyến đường Bước Sáu, thêm một giao diện mặc định. Tệp TSX sang mô hình song song

2:32:49 thư mục route tệp này được dùng để hiển thị nội dung mô hình khi route được tải lần đầu chúng ta chỉ trả về null now

2:32:56 Đây là những gì xảy ra phía sau hậu trường khi bạn lần đầu tải nguồn cấp ảnh SL, NEX hiển thị cả hai tuyến modal mà

2:33:04 Bắt đầu trống nhờ mặc định. TSX và nội dung chính có trên trang. TSX thì khi bạn nhấp vào một hình ảnh thì modal

2:33:14 Route chặn việc điều hướng đến/ trượt nguồn cấp ảnh. Điều này hiển thị lớp phủ mod trong khi vẫn giữ ảnh chính của bạn.

2:33:21 nguồn cấp hiển thị bên dưới khi bạn tải lại trang sẽ không bị chặn và ID Dynamic route được hiển thị thay thế

2:33:30 Hy vọng ví dụ này giúp bạn hiểu cách các tuyến chặn song song hoạt động cùng nhau. Được rồi, đây là phần kết của trang.

2:33:38 định tuyến dựa trên XS Chúng ta sẽ đi sâu vào các trình xử lý tuyến đường trước đó. Chúng ta đã học cách định tuyến đến các trang có tệp dựa trên file

2:33:48 Hệ thống định tuyến, mặc dù đó đã là một tính năng mạnh mẽ, nhưng bộ định tuyến ứng dụng còn có thể làm được nhiều hơn nữa, nó cho phép bạn tạo ra tùy chỉnh

2:33:56 trình xử lý yêu cầu cho các tuyến của bạn sử dụng tính năng gọi là trình xử lý tuyến đường, khác với các tuyến trang cung cấp nội dung HTML

2:34:03 Trình xử lý tuyến đường cho phép chúng ta xây dựng các endpoint nghỉ ngơi với toàn quyền kiểm soát phản hồi, hãy nghĩ về nó như việc xây dựng một

2:34:09 node cộng với ứng dụng Express, bạn có thể thực hiện tất cả các thao tác crud với cơ sở dữ liệu, nhưng đây là phần thú vị là không có

2:34:17 cần thiết lập và cấu hình một máy chủ riêng biệt, tiếp theo cung cấp cho bạn mọi thứ ngay lập tức, trình xử lý tuyến đường rất tốt khi

2:34:24 Tạo các yêu cầu APEPI bên ngoài, ví dụ nếu bạn đang xây dựng một ứng dụng cần giao tiếp với người thứ ba

2:34:30 các trình xử lý tuyến dịch vụ của party là hoàn hảo cho việc đó vì chúng chạy bên máy chủ S bên thông tin nhạy cảm của bạn như

2:34:37 Khóa riêng tư vẫn giữ an toàn và không bao giờ đến được trình duyệt, nếu bạn truy cập từ router Pages thì có thể nghĩ đến Route

2:34:44 trình xử lý dưới dạng API route tiếp theo ở đây hỗ trợ đầu xóa bản vá sau cài đặt và các tùy chọn nếu phương thức không được hỗ trợ là

2:34:54 gọi Tiếp theo SH sẽ trả về một phương thức 405 không được phép phản hồi Để tôi chỉ cho bạn cách xây dựng tuyến đầu tiên của bạn Handler tôi đã

2:35:03 Tôi đã mở mã VS ở đây và tôi đã bắt đầu bằng cách tạo một dự án mới cho năm tới bằng lệnh npx create next app at

2:35:11 Demo trình xử lý tuyến đường mới nhất: Khi lệnh hoàn thành, bạn sẽ có một dự án giống như của tôi. Hãy bắt đầu thôi.

2:35:19 vào thư mục Nguồn, đầu tiên chúng ta sẽ tạo một thư mục mới gọi là hello bên trong thư mục ứng dụng, giống như các tuyến đường trang

2:35:29 Trình xử lý phải nằm trong thư mục ứng dụng. Bên trong thư mục Hello này, chúng ta sẽ tạo một tệp gọi là route.

2:35:36 TS: Đó là một quy ước năm sau nữa chúng ta cần tuân theo, ở đây chúng ta sẽ xuất một hàm phù hợp với trình lấy HTTP

2:35:45 Và vâng, đó là một quy ước khác xuất khẩu hàm asnc get, chúng ta sẽ giữ điều này đơn giản và trả về một phản hồi văn bản thuần túy, trả về phản hồi mới

2:35:57 xin chào thế giới, chúng tôi đang sử dụng đối tượng phản hồi JavaScript tiêu chuẩn để xử lý yêu cầu đến, chúng tôi trả về một

2:36:05 phản hồi mới với hello world dưới dạng văn bản trên trình duyệt, điều hướng đến localhost 3000 /hello và bạn sẽ thấy văn bản của chúng tôi

2:36:14 Phản hồi: Xin chào thế giới, và như vậy, chúng ta đã có trình xử lý tuyến đầu tiên đang hoạt động, đó thực sự là ý tưởng cốt lõi của

2:36:22 Trình xử lý tuyến trong thư mục ứng dụng tạo một tuyến đường. Tệp TS và các hàm Xuất được đặt tên theo động từ HTTP trong trường hợp này khi

2:36:33 Ai đó gửi yêu cầu Get to/ Hello hoặc Get Handler sẽ bắt đầu hành động. Bây giờ có hai điều quan trọng cần lưu ý.

2:36:41 đầu tiên, trình xử lý tuyến rất linh hoạt trong việc tổ chức, nên giống như các tuyến trên trang, bạn có thể lồng chúng vào các thư mục và

2:36:48 thư mục con để giữ mọi thứ gọn gàng, ví dụ bạn có thể thêm một thư mục bảng điều khiển trong thư mục ứng dụng của mình với

2:36:56 Trình xử lý route riêng để tạo bảng điều khiển thư mục mới và sao chép route sang. TS từ thư mục Hello nhưng thay văn bản thành bảng điều khiển

2:37:09 dữ liệu nếu bạn muốn các nội dung riêng biệt cho người dùng, hãy tạo thư mục con người dùng bên trong bảng điều khiển với một route khác. Bộ xử lý

2:37:18 trả về dữ liệu người dùng Mỹ, sao chép dán và chuyển văn bản thành dữ liệu người dùng. Bây giờ trong trình duyệt, bạn có thể truy cập bảng điều khiển SL để

2:37:29 Dữ liệu bảng điều khiển và bảng SL người dùng SL để lấy dữ liệu người dùng rất đơn giản Thứ hai, cảnh giác với xung đột giữa

2:37:40 Route trang và trình xử lý Route, đây là ý tôi để bạn có một profile route trang, trang SL. TSX trong thư mục ứng dụng

2:37:50 Vậy là hồ sơ / trang cá nhân. TSX với một trang hồ sơ hàm mặc định xuất đơn giản và chúng ta trả về một trang hồ sơ thẻ div trong

2:38:00 cùng một thư mục, giả sử bạn có một route của route handler.

2:38:05 TS bạn có một hàm get Handler trả về một API profile phản hồi mới, trong trường hợp này là route. TS sẽ nhận

2:38:15 thay theo mặc định nên khi bạn truy cập hồ sơ localhost 3000 sl, bạn sẽ thấy dữ liệu API của hồ sơ thay vì trang của bạn

2:38:25 thành phần sửa lỗi là di chuyển trình xử lý route của bạn đến một thư mục con apepi. Vì vậy, trong thư mục profile, hãy tạo một Epi

2:38:33 Folder và di chuyển route. TS trong thư mục đó nên hãy chọn profile SL route. TS trở thành profile /i/ route. bây giờ bạn có thể có cả trang của mình

2:38:48 at/ profile và Epi at/ profile slpi của bạn để tóm tắt các trình xử lý tuyến đường cho phép bạn tạo các trình xử lý yêu cầu tùy chỉnh

2:38:58 đối với một tuyến đường nhất định, chúng được định nghĩa trong một tuyến đường. JS hoặc route. Tệp TS bên trong thư mục ứng dụng là một route. Tệp TS tại

2:39:07 cùng cấp độ đoạn tuyến với trang. TSX sẽ gây ra xung đột và trang sẽ không được phục vụ theo tuyến xử lý

2:39:15 Tôi sẽ xử lý yêu cầu. Bây giờ bạn đã nắm được những kiến thức cơ bản, để tôi hướng dẫn bạn qua một số ví dụ thực hành.

2:39:21 xử lý các yêu cầu lấy sau khi tạo và delete với các trình xử lý tuyến nexs. Trước đây chúng ta đã học cách tạo một trình xử lý tuyến cơ bản. Bây giờ hãy cùng chúng ta làm vậy.

2:39:32 Đi sâu hơn vào việc làm việc với các trình xử lý tuyến đường, bắt đầu từ cách xử lý các yêu cầu trước khi bắt đầu. Tôi nên làm vậy.

2:39:39 đề cập rằng chúng ta sẽ không tập trung vào giao diện người dùng cho phần này mà sẽ sử dụng API arrest của Thunder client cho VS

2:39:46 mã để kiểm tra các trình xử lý tuyến đường của chúng tôi nếu bạn chưa làm, hãy cài đặt tiện ích mở rộng khách Thunder trong VS Code một lần

2:39:54 bạn đã chuẩn bị sẵn rồi, chúng ta có thể tiếp tục tập trung vào các trình xử lý tuyến đường, chúng ta sẽ bỏ qua việc thiết lập cơ sở dữ liệu thay vào đó.

2:40:02 sẽ lưu dữ liệu của chúng tôi trong bộ nhớ, nghĩa là nó sẽ được xóa khi chúng tôi khởi động lại ứng dụng hoặc làm mới trang

2:40:08 Hoàn toàn ổn vì mục tiêu chính của chúng tôi là hiểu cách các trình xử lý tuyến đường hoạt động, hãy bắt đầu bằng việc tạo một số dữ liệu để làm việc

2:40:16 đầu tiên hãy tạo một thư mục mới có tên là comments trong thư mục Source của bạn, bên trong thư mục này tạo một tệp

2:40:24 gọi là dữ liệu. TS Và ở đây tôi sẽ dán một loạt ba bình luận mà chúng ta sẽ sử dụng, hãy coi chúng như những bình luận trên YouTube

2:40:33 mỗi video có một ID riêng biệt và một số văn bản. Bây giờ khi đã có dữ liệu sẵn sàng, hãy tạo trình xử lý tuyến đường của chúng ta trong

2:40:41 cùng thư mục Commons tạo một tệp mới gọi là route. TS: Hãy nhớ đây là quy ước nexs để tạo trình xử lý tuyến

2:40:50 trong tệp này, chúng ta sẽ định nghĩa và xuất hàm get Handler của chúng ta, bắt đầu bằng cách nhập mảng chú thích từ

2:40:58 tệp dữ liệu để nhập nhận xét từ / dữ liệu, sau đó chúng ta xuất một hàm gọi là get xuất hàm async, lấy cái này get.

2:41:11 Trình xử lý chỉ đơn giản trả về mảng bình luận của chúng tôi như phản hồi liền kề. Json và chúng tôi đi qua bình luận, giờ hãy thử nghiệm Handler này

2:41:24 mở phần mở rộng client tender và nhấp vào yêu cầu mới, đặt phương thức HTTP để lấy và nhập URL localhost 3000

2:41:35 các cuộc trao đổi giữ nguyên tất cả các thiết lập khác khi bạn nhấn gửi, bạn sẽ thấy phản hồi trạng thái 200 được rồi

2:41:43 với mảng ba bình luận của chúng tôi, ID một bình luận đầu tiên, ID 2 bình luận thứ hai và ID3 bình luận thứ ba hoàn hảo, get

2:41:53 Handler hoạt động chính xác như mong đợi, hiện tại chúng tôi đang dùng ứng dụng Thunder để kiểm thử nhưng trong một ứng dụng thực tế bạn

2:42:00 giao diện người dùng sẽ làm cho yêu cầu này trở nên quan trọng khi trang tải hoặc khi người dùng tương tác với nó

2:42:07 vấn đề là chúng tôi đã tạo thành công trình xử lý tuyến đường trong N Shars. Tiếp theo, chúng ta sẽ khám phá cách xử lý

2:42:14 trước đây chúng ta đã học về cách xử lý yêu cầu GET. Bây giờ hãy cùng khám phá cách xử lý các yêu cầu POST. Hãy bắt đầu

2:42:25 với thunder client, chúng ta sẽ giữ lại yêu cầu get trước đó và tạo một yêu cầu mới, trước tiên chọn post làm HTTP

2:42:35 word tiếp theo, sao chép URL HTTP localhost 3000 commments tiếp theo, chúng ta cần chỉ định một đối tượng chú thích mới để thêm vào

2:42:47 mảng bình luận của chúng ta đi đến tab thân và dưới Json, cùng với một đối tượng khóa trong dấu ngoặc kép là văn bản và giá trị là mới

2:42:59 chú ý rằng chúng tôi không chỉ định ID sẽ được tạo bởi hàm Handler khi nhấn Gửi chúng tôi

2:43:08 nhận phương thức lỗi status 405 không được phép Hãy sửa bằng cách thêm một Handler cho yêu cầu post này quay lại

2:43:16 đến lộ trình của chúng ta. Tệp TS trong thư mục comment coms chúng ta sẽ Định nghĩa và Xuất một hàm mới, xuất Asing function post

2:43:26 hãy nhớ rằng tên hàm của chúng ta phải khớp với động từ HTTP mà chúng ta muốn xử lý mỗi route mà hàm Handler nhận được là rất quan trọng

2:43:34 một đối tượng yêu cầu web tiêu chuẩn như một yêu cầu tham số kiểu yêu cầu, chúng tôi trích xuất thân Json từ yêu cầu này bằng cách gọi và chờ yêu cầu.

2:43:47 Jason, điều này cho chúng ta đối tượng mà chúng ta đã chỉ định trong Thunder client, hãy lưu nó trong một hằng số gọi là common rồi ta

2:43:57 tạo một đối tượng bình luận mới để const new bình luận bằng với một đối tượng, chúng tôi đặt ID bằng độ dài hiện tại của bình luận

2:44:06 mảng cộng một để bình luận có độ dài + một và sử dụng văn bản từ phần thân yêu cầu của chúng tôi để văn bản là bình luận. văn bản chúng tôi thêm vào

2:44:18 Bình luận mới này trong mốc bình luận của chúng tôi sử dụng Push Comments. Gửi bình luận mới ngay để nhận phản hồi mà chúng tôi cần

2:44:27 Phản hồi. Json nhưng điều đó sẽ cho chúng tôi mã trạng thái 200 vì chúng tôi đang tạo một tài nguyên mới với yêu cầu đăng bài

2:44:36 Trạng thái năm 2011 phù hợp hơn, nên hãy trả lại phản hồi mới, đi qua bình luận mới của chúng tôi là Json so json. buộc dây mới

2:44:46 Thông thường: đặt loại nội dung thành application sljs trong headers và sử dụng status code 2011 để chỉ ra việc tạo tài nguyên thành công

2:44:59 Quay lại trong ứng dụng Thunder khi chúng tôi nhấn gửi bây giờ, chúng tôi nhận được trạng thái tạo năm 2011 và một bình luận mới là phản hồi id4 text mới

2:45:10 bình luận nếu chúng tôi chuyển sang tab yêu cầu nhận và nhấn gửi lại, chúng tôi sẽ thấy cả bốn bình luận bao gồm một bình luận mới

2:45:19 và đó là cốt lõi của việc xử lý các yêu cầu bài đăng Định nghĩa người xử lý bài đăng của bạn, xử lý phần thân yêu cầu và gửi lại

2:45:28 Phản hồi phù hợp Xin lưu ý rằng bất kỳ thay đổi nào đối với bình luận chỉ tồn tại trong bộ nhớ và sẽ không được lưu vào tệp

2:45:35 hệ thống mảng bình luận của chúng ta vẫn chỉ có ba bình luận. Được rồi, bây giờ chúng ta đã ghi chú, hãy cùng nhau

2:45:42 chuyển sang khám phá các trình xử lý tuyến động mà chúng ta đã đề cập, tạo trình xử lý tuyến đường, quên và đăng yêu cầu ngay bây giờ

2:45:51 Hãy cùng giải quyết các yêu cầu vá và xóa, chúng hoạt động hơi khác nhau vì chúng yêu cầu chỉ định bình luận nào cần

2:45:57 cập nhật hoặc xóa trong khi SL bình luận của chúng tôi xử lý các yêu cầu lấy và đăng yêu cầu vá và xóa cần thiết

2:46:06 một điểm cuối như slash chú thích trượt, trong đó ID là một đoạn động, có thể là 1, 2, 3 hoặc bất kỳ ID hợp lệ nào từ

2:46:16 mảng bình luận, trước tiên hãy tìm hiểu cách tạo một trình xử lý tuyến động trả về một bình luận duy nhất dựa trên

2:46:22 ID của nó, điều này sẽ giúp chúng ta xử lý tốt các yêu cầu vá lỗi và xóa sau này, bạn sẽ vui khi biết rằng Dynamic

2:46:30 trình xử lý tuyến đường tuân theo cùng một mẫu như các tuyến trên trang động, vì vậy để tạo một trình xử lý/ trượt tuyến trước, chúng ta

2:46:39 sẽ tạo một thư mục mới tên là ID được đóng trong ngoặc vuông bên trong thư mục nhận xét nên thư mục mới trong

2:46:46 hãy ghi dấu ngoặc vuông vào ID rồi chúng ta sẽ thêm một tuyến đường. Route của tệp TS bên trong. TS và Định nghĩa xuất hàm Get Handler của chúng tôi

2:46:57 Khi vào trong hàm này, chúng ta cần lấy một chú thích cụ thể phù hợp với tham số ID của tuyến đường trước

2:47:06 chúng ta sẽ nhập mảng chú thích chứa dữ liệu của chúng ta, vì vậy hãy nhập chú thích từ dữ liệu tiếp theo, chúng ta cần truy cập ID

2:47:16 tham số route và như một biến thể, hàm Handler nhận hai tham số, đầu tiên là một đối tượng yêu cầu

2:47:24 mà chúng ta đã quen thuộc là một đối tượng context chứa các tham số route nên các tham số kiểu hứa hẹn

2:47:36 chứa tham số ID route của chúng ta kiểu chuỗi bây giờ chúng ta chỉ quan tâm đến ngữ cảnh nên hãy thêm tiền tố yêu cầu

2:47:44 đối tượng có dấu gạch dưới trong phần thân hàm chờ lời hứa pro và phân cấu trúc thuộc tính ID từ

2:47:51 đối tượng params để ID const bằng với await harams sử dụng ID này, chúng tôi tìm kiếm trong mảng commment để tìm

2:48:02 Khớp chung nên const common bằng với nhận xét. tìm và với mỗi bình luận, chúng ta kiểm tra xem ID của nó có khớp tham số không

2:48:12 ID để phân tích trong ID, khi tìm thấy chúng tôi gửi lại cho khách hàng như phản hồi trả về liền kề. Bình luận Json Hãy thử nghiệm

2:48:25 Điều này trong ứng dụng Thunder ở tab nơi chúng ta đang gửi yêu cầu get, hãy thêm dấu gạch chéo 1 vào URL và nhấn gửi, chúng ta sẽ có một

2:48:35 200 trạng thái ổn và bình luận có ID bằng một, thử slash2 gửi và chúng ta nhận được bình luận thứ hai, tương tự với slash3

2:48:45 đối với bình luận thứ ba, tham số URL Det xác định bình luận nào chúng ta lấy trong khi chỉ làm việc với ba bình luận

2:48:52 Bình luận ở đây trong ứng dụng thực tế bạn có thể có hàng nghìn bản ghi cơ sở dữ liệu nhưng logic vẫn giữ nguyên

2:49:00 trích xuất ID từ các tham số, tìm dữ liệu tương ứng với ID đó và trả về dưới dạng Json, nhưng bây giờ chúng ta

2:49:07 Hiểu về Trình xử lý tuyến động Hãy chuyển sang xử lý các yêu cầu vá để cập nhật từng bình luận riêng lẻ Hãy tìm hiểu cách xử lý bản vá

2:49:17 yêu cầu vá Một yêu cầu vá cho phép chúng tôi chỉnh sửa một phần tài nguyên vì chúng tôi chỉ làm việc với một tài nguyên duy nhất

2:49:24 thuộc tính có tên là cập nhật văn bản, bình luận sẽ khá đơn giản. Trước tiên, để tôi cho bạn xem yêu cầu vá trông như thế nào.

2:49:31 như trong client Thunder, chúng ta sẽ bắt đầu bằng cách thay đổi từ HTTP từ get sang patch, chúng ta sẽ giữ cùng một URL vì chúng ta là

2:49:39 khi cập nhật chú thích với ID3 trong tab body dưới phần Json, chúng tôi sẽ thêm một đối tượng với bộ thuộc tính văn bản

2:49:48 đến một chuỗi khác được cập nhật chung, khi chúng ta nhấn gửi, chúng ta nhận được một phương thức trạng thái 405 không được phép, hãy sửa điều đó bằng

2:49:58 thêm một Handler cho các yêu cầu vá lỗi trong tuyến đường của chúng tôi. Tệp TS bên trong thư mục ID, chúng ta sẽ tạo một trình xử lý tuyến đường mới

2:50:07 hàm xuất bản vá chức năng không đồng bộ chức năng này nhận hai tham số, yêu cầu và context. Tôi sẽ sao chép các tham số từ

2:50:19 hàm Handler lấy trong hàm đầu tiên chúng ta phân cấu trúc ID bằng cách chờ tham số, tiếp theo lấy thân Json từ

2:50:28 yêu cầu sử dụng yêu cầu chờ đợi. Json, chúng ta gán nó cho một hằng số gọi là body, bây giờ chúng ta dùng request, vậy hãy loại bỏ

2:50:38 gạch dưới từ tham số của chúng tôi. Tiếp theo, từ phần thân, chúng tôi phân cấu trúc văn bản bình luận để tìm bình luận mà chúng tôi muốn cập nhật.

2:50:47 Có thể sử dụng bất kỳ mảng TH nào. tìm hoặc tìm chỉ mục Tôi chọn tìm chỉ mục vì chúng ta sẽ cần nó cho các thao tác xóa sau này

2:50:57 Vậy chỉ số con bằng với các chú thích. Tìm chú thích chỉ mục như bình luận đó. ID bằng ngựa trong ID

2:51:09 tham số: khi ta tìm thấy chú thích, chúng ta chỉ cần cập nhật thuộc tính văn bản của nó sao cho chú thích của văn bản chỉ mục bằng với văn bản từ

2:51:22 Yêu cầu cuối cùng trả về bình luận cập nhật như phản hồi liền kề trả về phản hồi. Bình luận Json của chỉ mục hiện đang trở về phía khách thunder

2:51:35 và nhấn gửi, chúng tôi nhận được mã trạng thái 200 với bình luận cập nhật trong phản hồi ID3 text bình luận cập nhật nếu bạn

2:51:44 gửi yêu cầu get từ cùng tab đến/ bình luận. Chúng tôi có thể xem bình luận cập nhật trong mảng ID3 văn bản, bình luận cập nhật

2:51:59 Đây là cách chúng tôi xử lý các yêu cầu vá trong trình xử lý tuyến đường Xin lưu ý rằng bất kỳ thay đổi nào đối với bình luận chỉ tồn tại trong

2:52:06 Bộ nhớ và sẽ không được lưu vào hệ thống tập tin trong dữ liệu. TS bạn sẽ tiếp tục thấy văn bản gốc cho ID bình luận 3

2:52:14 tiếp theo, chúng ta sẽ xem xét cách xử lý yêu cầu xóa, hãy cùng tìm hiểu cách xử lý yêu cầu xóa, yêu cầu xóa làm tên

2:52:24 gợi ý xóa một tài nguyên được chỉ định trong trường hợp của chúng ta, chúng ta sẽ xóa một bình luận bằng ID của nó trước, hãy xem đó là gì

2:52:32 yêu cầu xóa có vẻ như trong ứng dụng Thunder chúng ta sẽ bắt đầu bằng cách thay đổi từ HTTP từ bản vá để xóa URL

2:52:40 cấu trúc vẫn giữ nguyên vì chúng ta vẫn cần ID chú thích trong URL /3, cho ví dụ này chúng ta sẽ xóa

2:52:48 comment với ID 3 chúng ta có thể xóa body Json vì nó không cần thiết cho yêu cầu xóa, khi nhấn gửi chúng ta nhận được một

2:52:56 phương thức lỗi status 405 không được phép, hãy sửa bằng cách thêm một Handler cho yêu cầu xóa trong API route của chúng tôi trong

2:53:05 Tuyến đường của chúng ta. TS trong thư mục ID, hãy thêm một hàm xử lý tuyến đường mới, chúng ta sẽ tạo một hàm không đồng bộ gọi là

2:53:15 Delete nhận hai tham số: request và context. Đây là các tham số giống như chúng ta đã từng thấy cho cả hai

2:53:24 patch và get requests chúng ta lấy tham số ID route bằng cách chờ tham số, tiếp theo chúng ta sẽ dùng array. tìm thấy

2:53:34 chỉ mục để tìm chú thích muốn xóa, hãy sao chép dòng từ hàm patch sao cho chỉ số const bằng nhau

2:53:42 đến bình luận. tìm chỉ mục tìm chú thích sao cho ID của nó bằng tham số route ID trước khi xóa chú thích tại mục đã cho

2:53:51 ID chúng ta lưu nó trong một biến để có thể trả về sau, vì vậy const đã xóa bình luận bằng với chú thích của chỉ mục thì ta

2:54:00 Sử dụng mảng. Nối để xóa mục để bình luận. Nối tại chỉ mục một và cuối cùng chúng tôi trả về phản hồi. Chuyền Json

2:54:13 Trong bình luận đã xóa, hãy thử nghiệm điều này trong Thunder client, nhấn gửi ngay bây giờ cho chúng tôi mã trạng thái 200 và hiển thị

2:54:23 đã xóa bình luận trong văn bản phản hồi ID3, đây là bình luận thứ ba và nếu chúng ta gửi yêu cầu get từ cùng tab thì chỉ

2:54:32 bình luận chéo bạn sẽ nhận thấy bình luận với ID3 không còn xuất hiện trong mảng chúng ta chỉ có hai

2:54:41 Vậy đó là cách chúng tôi xử lý yêu cầu xóa trong trình xử lý tuyến đường, xin lưu ý rằng bất kỳ thay đổi nào đối với bình luận chỉ

2:54:49 tồn tại trong bộ nhớ và sẽ không được lưu vào hệ thống tệp trong dữ liệu. TS bạn sẽ tiếp tục thấy bình luận thứ ba ngay bây giờ

2:54:56 Chúng ta đã đề cập đến các yêu cầu nhận bản vá và xóa bài vá, hãy tiếp tục tìm hiểu thêm một số liên quan

2:55:05 chủ đề, hãy cùng tìm hiểu cách làm việc với các tham số truy vấn URL trong trình xử lý tuyến đường trong dữ liệu của chúng ta. Tệp TS chúng ta có một mảng

2:55:13 ba bình luận bây giờ tưởng tượng chúng ta muốn lọc các bình luận này dựa trên một từ khóa tìm kiếm St, ví dụ khi bạn truy cập

2:55:20 localhost 3000 Commons bạn sẽ thấy cả ba bình luận, nhưng nếu bạn chỉ muốn thấy các bình luận chứa từ đó thì sao?

2:55:27 Đầu tiên, bằng cách vào slash comments, câu hỏi dấu hỏi là bằng với đầu tiên, hãy cùng tìm hiểu về VS Code và xem cách

2:55:36 Hãy thực hiện điều này trên đường đi. TS có trong thư mục chú thích, chúng ta đã định nghĩa hàm get Handler của mình, trả về

2:55:44 mảng gồm ba commment: đây là route mà chúng ta cần chỉnh sửa Handler, đầu tiên cần làm việc với yêu cầu

2:55:50 mặc dù chúng tôi đã sử dụng API yêu cầu tiêu chuẩn cho đến nay trong ngữ cảnh next chia sẻ loại mà chúng tôi là

2:55:58 thực tế xử lý yêu cầu tiếp theo, nhập nó ở đầu từ máy chủ SLS tiếp theo và chỉ định loại trong

2:56:07 Get Handler Đối tượng yêu cầu tiếp theo này cung cấp các phương pháp thuận tiện để quản lý tham số truy vấn một cách dễ dàng. Hãy cùng cập nhật

2:56:15 Mã của chúng tôi trong phần hàm thân sẽ lấy tất cả các tham số truy vấn bằng cách sử dụng yêu cầu.

2:56:21 URL nextext. Tìm kiếm các tham số và lưu chúng trong một hằng số gọi là tham số tìm kiếm, sau đó ta sử dụng phương thức get để

2:56:30 lấy tham số truy vấn cụ thể của chúng tôi sao cho truy vấn const bằng với tham số tìm kiếm truy vấn doget nếu có truy vấn

2:56:41 tham số chúng tôi lọc các nhận xét chỉ bao gồm những bình luận chứa từ khóa tìm kiếm nên const filtered cons fenmment bằng nhau

2:56:49 để truy vấn xem nó có tồn tại commons hay không. lọc và lọc Commons sao cho chúng bao gồm tham số truy vấn nếu không có truy vấn nào

2:57:01 Phản hồi với mảng bình luận gốc Cuối cùng gửi lại các bình luận đã lọc dưới dạng Json Hãy thử nghiệm trên trình duyệt

2:57:10 điều hướng đến bình luận localhost 3000 SL và chúng ta vẫn thấy ba bình luận hiện chỉ định dấu hỏi

2:57:18 query bằng first và bạn sẽ thấy chỉ commit đầu tiên. Hãy thử thay đổi giá trị tham số truy vấn thành ir và bạn sẽ

2:57:28 lấy cả bình luận đầu tiên và thứ ba vì cả hai đều chứa IR phòng trường hợp bạn đang thắc mắc cách làm việc với nhiều tham số truy vấn, bạn có thể

2:57:38 truy cập từng thông số riêng lẻ bằng tham số tìm kiếm, doget truyền tên tham số rất đơn giản nhưng đây là cách bạn làm việc

2:57:47 Với các tham số truy vấn trong trình xử lý tuyến đường thì chúng là tùy chọn nhưng thực sự rất tuyệt vời khi thêm các tính năng mạnh mẽ như

2:57:53 Tìm kiếm sắp xếp và phân trang cho ứng dụng của bạn. Hãy cùng tìm hiểu về xử lý các tiêu đề trong trình xử lý tuyến đường. Chúng ta sẽ bắt đầu

2:58:03 với những điều cơ bản về tiêu đề thực sự là gì, tiêu đề HTTP đại diện cho siêu dữ liệu liên quan đến một yêu cầu API và

2:58:10 phản hồi Siêu dữ liệu này có thể được phân loại thành hai nhóm chính: đầu tiên chúng ta có các tiêu đề yêu cầu, những tiêu đề này được gửi bởi

2:58:18 khách hàng như trình duyệt web đến các tiêu đề yêu cầu máy chủ chứa thông tin thiết yếu về yêu cầu mà

2:58:24 giúp máy chủ hiểu và xử lý đúng cách, ví dụ chúng ta có user agent nhận diện trình duyệt và

2:58:31 Hệ điều hành đến máy chủ thường được sử dụng cho việc hiển thị nội dung và phân tích theo trình duyệt mà chúng tôi đã chấp nhận

2:58:39 chỉ ra các loại nội dung như định dạng văn bản, video hoặc hình ảnh mà máy khách có thể xử lý, cho phép máy chủ

2:58:46 để cung cấp tài nguyên theo định dạng phù hợp với máy khách, một tiêu đề yêu cầu phổ biến khác là ủy quyền

2:58:52 tiêu đề được máy khách sử dụng để xác thực với máy chủ, nó mang thông tin xác thực cho phép kiểm soát

2:58:59 truy cập tài nguyên thứ hai, chúng ta có tiêu đề phản hồi, những tiêu đề này được gửi lại từ máy chủ đến máy khách mà chúng cung cấp

2:59:07 thông tin về máy chủ và dữ liệu được gửi trong phản hồi Một ví dụ là tiêu đề loại nội dung mà

2:59:14 chỉ ra loại phương tiện của phản hồi, nó cho máy khách biết loại dữ liệu của nội dung trả về như thế nào

2:59:21 text/html cho tài liệu HTML, ứng dụng, sljs cho dữ liệu Json, v.v. khi bạn làm việc với trình xử lý tuyến trong xgs, bạn

2:59:31 sẽ cần biết cách vừa đọc tiêu đề yêu cầu vừa gửi lại tiêu đề phản hồi, hãy cùng tìm hiểu mã nguồn của chúng tôi và

2:59:38 Hãy hiểu rằng với một ví dụ, bây giờ chúng ta sẽ sử dụng profile route mà Handler đã xây dựng trước đây open route. TS có mặt trong

2:59:46 Thư mục API chúng ta có một Get Handler trả về phản hồi mới qua file API data. Tôi sẽ mở Thunder client

2:59:54 tiện ích mở rộng tạo một yêu cầu mới đến http localhost 3000 profile API mặc định yêu cầu có hai header chấp nhận và

3:00:04 user agent, hãy thêm một thứ ba, ủy quyền và chúng ta có thể đặt giá trị thành bearer token bia 1 2 3 4 5. Bây giờ câu hỏi là

3:00:16 làm thế nào để chúng ta đọc các header này trong route của mình? Handler thì chúng ta có hai lựa chọn, lựa chọn đầu tiên là sử dụng yêu cầu

3:00:24 tham số ở trên cùng nhập yêu cầu tiếp theo từ máy chủ SL tiếp theo và chỉ định tham số với yêu cầu kiểu của nó là

3:00:34 type next request trong hàm Handler, chúng tôi sử dụng API web headers để trích xuất các header yêu cầu mới

3:00:43 và chúng tôi gửi theo yêu cầu. chúng ta lưu nó trong một hằng số gọi là request headers. Ở dòng tiếp theo, chúng ta sẽ sử dụng

3:00:54 lấy phương thức trên tiêu đề yêu cầu và ghi lại tiêu đề ủy quyền vào bảng điều khiển để console.log tiêu đề yêu cầu được lấy

3:01:04 header ủy quyền mà chúng tôi vừa chỉ định nếu gửi yêu cầu từ khách hàng Thunder sẽ mở terminal mà chúng tôi sẽ thấy

3:01:13 Tiêu đề xác thực token Bearer của chúng tôi có giá trị là bia, theo sau là 1 đến 3 4 5, trong khi tùy chọn đầu tiên này hoạt động

3:01:21 hoàn toàn ổn, bạn cũng có thể chọn sử dụng chức năng headers mà Next SH cung cấp ở phía trên các header nhập

3:01:29 từ các tiêu đề SL tiếp theo và trong phần thân hàm, chúng ta gọi hàm tiêu đề và lưu kết quả trong một hằng số tiêu đề yêu cầu

3:01:39 vậy danh sách tiêu đề const bằng với await headers là một hàm Asing nên chúng ta cần chờ nó

3:01:48 Sau đó, chúng ta truy cập tiêu đề ủy quyền bằng phương thức Get và ghi lại vào danh sách tiêu đề Console console.log.get.

3:01:58 ủy quyền gửi lại yêu cầu với giá trị token khác là 1 2 3 4 5 67 và kiểm tra terminal, chúng ta có thể thấy

3:02:08 Token bia mới nhất đã được ghi lại, vậy đây là cách bạn đọc tiêu đề từ một yêu cầu đến. Bây giờ hãy nói về việc thiết lập

3:02:16 tiêu đề đi Đây là điều quan trọng cần biết các tiêu đề trả về từ các hàm tiêu đề là chỉ đọc

3:02:23 để đặt các tiêu đề mới, bạn sẽ cần trả về một phản hồi mới với các tiêu đề tùy chỉnh của bạn. Để tôi cho bạn xem một ví dụ nếu

3:02:30 bạn truy cập tuyến đường này trong trình duyệt của bạn, hồ sơ SL API của bạn, bạn sẽ thấy dữ liệu API hồ sơ dưới dạng văn bản thuần túy, kiểm tra tab mạng

3:02:40 và bạn sẽ nhận thấy loại nội dung là văn bản/thuần túy, nên nếu chúng ta đóng gói văn bản trong thẻ H1 và làm mới thì nó vẫn sẽ hiển thị dưới dạng

3:02:51 văn bản thuần túy nhưng hãy chú ý điều gì xảy ra khi chúng ta đặt loại nội dung thành text/html để trả về phản hồi mới làm đối số thứ hai

3:03:01 bạn chỉ định tiêu đề và loại nội dung là text/html, làm mới trình duyệt và bây giờ bạn đã có dữ liệu API profile văn bản H1 được định kiểu đúng

3:03:13 trình duyệt hiển thị nó khác đi vì chúng tôi đã yêu cầu nó mong đợi HTML thông qua kiểu nội dung tiêu đề phản hồi

3:03:20 Text/HTML Điều quan trọng là để thiết lập header, bạn cần trả về một phản hồi mới với header tùy chỉnh bằng yêu cầu và

3:03:29 Response header bạn có thể Triển khai bất kỳ logic nào bạn cần trong route của mình. Bộ xử lý trước đây chúng ta đã học cách

3:03:37 làm việc với tiêu đề trong trình xử lý tuyến đường bây giờ hãy cùng khám phá cách xử lý cookie trong trình xử lý tuyến đường Cookie là những phần nhỏ

3:03:44 dữ liệu mà một máy chủ gửi đến trình duyệt web của người dùng, trình duyệt có thể lưu trữ cookie và gửi chúng trở lại trình duyệt đó

3:03:51 máy chủ với các yêu cầu trong tương lai cookie phục vụ ba mục đích chính quản lý các phiên như đăng nhập người dùng và mua sắm

3:03:59 giỏ hàng xử lý cá nhân hóa như sở thích người dùng và chủ đề cũng như theo dõi như ghi lại và phân tích người dùng

3:04:07 Hành vi: Nếu bạn muốn tìm hiểu sâu hơn về cookie, bạn có thể xem tài liệu chi tiết về MDN nhưng

3:04:14 Bây giờ hãy quay lại với VS Code và xem cách chúng ta có thể làm việc với cookie trong lộ trình Handler năm tới tương tự như

3:04:20 Những gì chúng ta thấy với headers, chúng ta sẽ chủ yếu xem xét cách thiết lập và lấy cookie bên trong một route. Có trình xử lý

3:04:27 có hai cách để thực hiện điều này: cách đầu tiên là thiết lập cookie bằng cách trả về một phản hồi mới với cookie đã đặt

3:04:34 header để sau content type text/html chỉ định set cookie theme bằng dark nếu chúng ta kiểm tra Thunder client và nhìn

3:04:47 Tại tab Cookie trong phần phản hồi, chúng tôi không có cookie khả dụng, nó bắt đầu trống với logic cookie đã thiết lập của chúng tôi

3:04:55 Nếu chúng tôi gửi yêu cầu mới, chúng tôi sẽ thấy cookie tee của chúng tôi xuất hiện tên là tee value dark ngay bây giờ để đọc cookie này trong

3:05:04 route Handler của chúng ta có thể sử dụng tham số request để const theme bằng request. bánh quy. getet và chúng tôi chỉ định

3:05:16 tên nhóm cookie, hãy ghi lại vào console trong ứng dụng Thunder nếu chúng ta gửi yêu cầu và mở

3:05:25 terminal chúng ta sẽ thấy cặp giá trị tên cookie được ghi lại tên chủ đề giá trị màu tối, vậy đây là cách tiếp cận đầu tiên của chúng ta

3:05:34 sử dụng tiêu đề cookie đặt để đặt cookie và đối tượng yêu cầu để đọc nó cho phương pháp tiếp theo tiếp theo cung cấp

3:05:42 một hàm cookie tích hợp cho phép nhập nó ở phía trên nhập tiêu đề dấu phẩy cookie từ tiêu đề SL tiếp theo cookie là

3:05:52 một hàm eing do đó chúng ta cần chờ nó trong hàm Handler const cookie store bằng với await

3:06:02 cookie bây giờ để thiết lập cookie theo phương pháp này, chúng ta có thể gọi là Cookie store. Chúng ta chỉ định kết quả tên trên mỗi trang cho

3:06:12 ví dụ và giá trị là 20 sau khi gửi yêu cầu mới, kết quả cookie trên mỗi trang hiện xuất hiện với giá trị 20, đọc cookie này chỉ

3:06:26 dễ dàng như cookie store.get nên console.log cookie store.get kết quả trên mỗi trang, gửi yêu cầu

3:06:37 một lần nữa và trong terminal bạn sẽ thấy kết quả tên trên mỗi giá trị trang 20 cách với hàm cookie

3:06:47 hỗ trợ các phương thức bổ sung như has và delete, vui lòng tham khảo tài liệu để biết thêm thông tin. Được rồi, vậy là kết thúc

3:06:54 làm việc với cookie trong trình xử lý tuyến đường, hãy nhanh chóng nói về việc xử lý chuyển hướng trong trình xử lý tuyến đường, hãy tưởng tượng bạn đã xây dựng một API của người dùng

3:07:05 đã hoạt động một thời gian, điểm cuối V1 của bạn có thông tin người dùng cơ bản như ID, email, tên đầy đủ và tạo tại sau một

3:07:13 vài tháng, bạn đã xây dựng một endpoint V2 toàn diện hơn bao gồm tên cấu trúc, tùy chọn người dùng và dữ liệu hồ sơ để di chuyển

3:07:24 Khách hàng đến điểm cuối mới này, chúng ta có thể thiết lập chuyển hướng trong V1, tức là trong thanh V1. Chuyển hướng nhập TS từ điều hướng SL tiếp theo

3:07:35 và trong hàm get Handler gọi redirect truyền trong New Path /i slv2 SL người dùng trong trình duyệt khi các máy khách truy cập

3:07:49 /i slv1 họ sẽ nhận được chuyển hướng tạm thời 307 đến /i/ người dùng V2 Điều này hoạt động trơn tru vì tất cả các trường V1 đều

3:08:03 được bảo tồn trong V2 các trường mới chỉ là các trường cộng thêm, các khách hàng hiện có có thể tiếp tục sử dụng các trường mà họ luôn sử dụng và

3:08:11 Khách hàng mới có thể tận dụng cấu trúc dữ liệu nâng cao, đồng thời cho chúng tôi cơ hội dọn dẹp bất kỳ vật phẩm loot nào trong V1

3:08:18 Trước khi chuyển hoàn toàn, All Right Up tiếp theo, chúng ta sẽ xem xét bộ nhớ đệm trong các trình xử lý tuyến đường để xem chi tiết cuối cùng về

3:08:28 Trình xử lý tuyến đường Hãy nói về bộ nhớ đệm khi các trình xử lý tuyến trong mục tiếp theo mặc định đã được lưu trong bộ nhớ đệm Bạn có thể chọn vào

3:08:35 bộ nhớ đệm khi sử dụng phương thức get. Để tôi chỉ cho bạn cách hoạt động. Hãy tạo một thư mục mới tên là Time trong ứng dụng của chúng tôi.

3:08:43 Thư mục và thêm một route. Tệp TS nên thời gian/lộ trình.

3:08:50 TS ở đây là một điểm cuối đơn giản để lấy Handler trả về thời gian hiện tại ở định dạng Json nếu bạn điều hướng đến localhost

3:08:59 3000 /thời gian trên trình duyệt bạn sẽ thấy thời gian hiện tại là 11:45 43 sáng.

3:09:07 mỗi lần tải lại sẽ hiển thị thời gian gần nhất vì mặc định không có bộ nhớ đệm và đây chính xác là điều chúng tôi muốn

3:09:13 Trong trường hợp này, hãy xem một kịch bản mà trong thư mục ứng dụng tạo một thư mục mới là hoàn toàn hợp lý.

3:09:21 Thư mục có tên Categories with a route. TS File Định nghĩa và Xuất một hàm Get Handler để xuất hàm eing get và chúng ta có một

3:09:32 mảng gồm bốn danh mục, mỗi danh mục có một ID và một tên, chúng ta trả về mảng ở định dạng Json, chúng ta đã mã hóa cứng các danh mục

3:09:40 dữ liệu để đơn giản hóa nhưng trong tình huống thực tế dữ liệu này thường đến từ cơ sở dữ liệu vì dữ liệu này hiếm khi

3:09:48 thay đổi mỗi yêu cầu đến endpoint này sẽ kích hoạt truy vấn cơ sở dữ liệu không hiệu quả để tránh điều này, chúng ta có thể sử dụng

3:09:56 bộ nhớ đệm Chúng ta sẽ thêm một tùy chọn cấu hình ở đầu tệp export const Động là bằng với việc ép tĩnh này

3:10:06 đảm bảo phản hồi được lưu vào bộ nhớ đệm và phục vụ ngay lập tức cho tất cả người dùng, tuy nhiên chúng tôi không thể kiểm tra tuyến đường này

3:10:13 Handler vì không có dữ liệu động trong phản hồi này, hãy thêm cấu hình seam vào Handler lộ trình thời gian

3:10:21 và kiểm tra thay vào đó, xuất const Dynamic Force tĩnh. Bây giờ điều hướng đến/ thời gian trong trình duyệt bạn sẽ thấy

3:10:30 thời gian hiện tại: 11:49 31 sáng. Nếu bạn tải lại trang, bạn vẫn sẽ thấy thay đổi thời gian. Đó là vì không có

3:10:39 bộ nhớ đệm trong quá trình phát triển, hãy xây dựng ứng dụng bằng npm chạy build và khởi động bằng npm chạy bắt đầu ngay điều hướng đến/ thời gian thời gian là 11:49

3:10:54 58 giờ sáng, thời gian Vẫn giữ nguyên khi tải lại làm mới và bạn có thể thấy thời gian không thay đổi lần làm mới này vào

3:11:03 thời gian ứng dụng được xây dựng, nếu bạn quay lại trình duyệt và điều hướng đến/ thời gian sau 10 phút bạn vẫn sẽ thấy

3:11:11 đồng thời nó chỉ thay đổi khi ứng dụng được xây dựng lại, nhưng nếu chúng ta muốn cập nhật dữ liệu mà không

3:11:18 xây dựng lại toàn bộ ứng dụng tốt bạn có thể xác thực lại dữ liệu đã lưu trong bộ nhớ đệm bằng cách sử dụng tái tạo tĩnh tăng dần tại

3:11:26 phía trên của tệp chúng ta sẽ thêm xuất const revalidate bằng 10 điều này sẽ xác thực lại dữ liệu mỗi 10 giây

3:11:37 khi bạn chạy npm run build, mã rout Handler được tạo ra cùng với thời gian build khi bạn chạy npm run start.

3:11:47 Tất cả các yêu cầu gửi đến Slash Time đều được lưu vào bộ nhớ đệm và ngay lập tức sau 10 giây trôi qua, yêu cầu tiếp theo vẫn sẽ hiển thị

3:11:56 trang lỗi đã được lưu trong bộ nhớ đệm khi một phiên bản mã mới được tạo ở nền với dấu thời gian mới nhất ngay bây giờ

3:12:03 khi bạn tải lại, dấu thời gian cập nhật sẽ hiển thị trong 10 giây tiếp theo và quá trình này lặp lại, đây là cách bạn xác thực lại

3:12:13 trình xử lý route cached trong bộ định tuyến ứng dụng, đáng chú ý là bộ nhớ đệm chỉ hoạt động với các phương thức get khác

3:12:21 các phương thức như post put hoặc delete sẽ không bao giờ được lưu vào bộ nhớ đệm nếu bạn sử dụng các hàm động như headers và

3:12:28 cookie hoặc làm việc với đối tượng yêu cầu trong bộ nhớ đệm phương thức get của bạn sẽ không được áp dụng Tôi hy vọng điều này sẽ giúp bạn có ích

3:12:36 hiểu cách hoạt động của bộ nhớ đệm trong trình xử lý tuyến đường, chúng ta còn một chủ đề cuối cùng cần đề cập trong phần này, nên hãy giữ nguyên

3:12:44 Chuyển sang chủ đề cuối cùng về định tuyến INEXS, hãy cùng tìm hiểu về phần mềm trung gian, phần mềm trung gian INEXS là một tính năng mạnh mẽ

3:12:52 cho phép bạn chặn và kiểm soát luồng yêu cầu và phản hồi trong toàn bộ ứng dụng của bạn. Nó thực hiện điều này

3:12:59 ở cấp độ toàn cầu, nâng cao đáng kể các tính năng như chuyển hướng, viết lại URL, viết lại tiêu đề xác thực, cookie

3:13:06 Và nhiều hơn nữa, hãy cùng tìm hiểu mã VS và xem cách triển khai middleware trong ứng dụng của chúng ta. Tạo middleware trong XJS.

3:13:13 rất đơn giản, chỉ cần thêm một tệp DOJ s hoặc TS vào thư mục nguồn của bạn, phần mềm trung gian dots bây giờ là middleware

3:13:25 cho phép bạn chỉ định các phần nơi nó nên được kích hoạt bằng hai cách tiếp cận: cấu hình bộ khớp tùy chỉnh hoặc câu lệnh điều kiện

3:13:33 Hãy cùng khám phá cả hai cách tiếp cận bằng cách chuyển hướng làm ví dụ, hãy tưởng tượng một tình huống khi điều hướng đến/lập hồ sơ

3:13:41 nên chuyển hướng người dùng đến trang chủ. Dưới đây là cách chúng ta có thể thực hiện điều này. Chúng ta bắt đầu bằng cách nhập phản hồi tiếp theo từ

3:13:48 máy chủ SLS tiếp theo, mở rộng API phản hồi tiêu chuẩn, chúng tôi cũng nhập loại yêu cầu tiếp theo từ máy chủ next/s

3:13:59 tiếp theo, chúng ta định nghĩa một hàm middleware chấp nhận yêu cầu kiểu yêu cầu tiếp theo sao cho hàm xuất middleware chấp nhận yêu cầu kiểu tiếp theo

3:14:11 Request Hàm này sẽ chuyển hướng đến trang chủ khi truy cập hồ sơ dấu gạch chéo, vì vậy hãy trả về phản hồi tiếp theo.

3:14:20 chuyển hướng URL mới và đường dẫn là trang chủ mà chúng tôi cũng gửi theo yêu cầu. URL với sau đó sử dụng một đối tượng cấu hình để chỉ cho ni

3:14:32 chia sẻ để chỉ áp dụng phần mềm trung gian này cho đường rout của / profile, do đó export const config bằng với một đối tượng mà chúng ta chỉ định một

3:14:41 Matcher SL profile, hãy khởi động lại máy chủ dev với npm chạy Dev ngay khi bạn điều hướng đến/profile trong

3:14:51 Trình duyệt sẽ tự động chuyển hướng đến Homage thể hiện cách cấu hình matcher. Bây giờ hãy xem phương pháp thứ hai.

3:14:59 cách tiếp cận bằng các câu lệnh điều kiện, chúng ta sẽ giữ lại Imports nhưng chú thích phần thân hàm và đối tượng config

3:15:07 Thay vào đó, chúng ta sẽ nhập yêu cầu F. URL tiếp theo. Tên paath bằng với hồ sơ và trả về phản hồi tiếp theo. chuyển hướng URL mới và

3:15:21 Hãy chỉ định đường dẫn là /hello và chúng ta sẽ truyền yêu cầu. URL tiếp theo khi bạn truy cập hồ sơ SL trong trình duyệt, nó sẽ

3:15:32 chuyển hướng đến route /hello mà chúng tôi đã tạo cách đây một thời gian, điều này cho thấy cách chúng ta có thể sử dụng các câu lệnh điều kiện để

3:15:40 kiểm soát phản hồi phần mềm trung gian dựa trên đường dẫn yêu cầu Beyond chuyển hướng middleware cũng hỗ trợ viết lại URL

3:15:48 Tính năng hoàn hảo để xử lý URL cũ hoặc cải thiện SEO thay vì chuyển hướng, bạn có thể sử dụng rewrite để giữ URL trong

3:15:56 trình duyệt không thay đổi trong khi phục vụ nội dung khác nhau. Bây giờ điều hướng đến/ hồ sơ và bạn sẽ thấy nó được chuyển hướng đến/ xin chào so

3:16:06 chúng ta thấy hello world nhưng URL trong trình duyệt vẫn là hồ sơ SL, cuối cùng hãy cùng khám phá cách sử dụng cookie và header trong phần mềm trung gian, hãy cùng khám phá

3:16:16 modif mod middleware của chúng tôi để xử lý tùy chọn của người dùng cho các chủ đề và thêm một header tùy chỉnh cho tất cả các phản hồi chúng tôi bắt đầu

3:16:24 Bằng cách lấy đối tượng phản hồi mà cuối cùng ta sẽ trả về từ hàm để phản hồi const bằng với phản hồi tiếp theo.

3:16:34 Tiếp theo, sử dụng đối tượng yêu cầu, chúng ta kiểm tra xem người dùng có tùy chọn chủ đề được lưu trong cookie của họ không nên const theme

3:16:43 Ưu tiên bằng với yêu cầu. Cookie lấy và tên cookie là chủ đề, nên nếu không có phản hồi tùy chọn chủ đề.

3:16:54 bánh quy. đặt tên cookie là chủ đề và giá trị là màu tối, cuối cùng chúng ta trả về đối tượng phản hồi đã chỉnh sửa từ

3:17:02 chức năng phần mềm trung gian nên sẽ trả về phản hồi nếu chúng ta quay lại trình duyệt và xem cookie trong công cụ phát triển

3:17:11 trong tab ứng dụng, bạn có thể thấy chúng đang trống. Nếu bạn làm mới, bạn sẽ thấy cookie chủ đề Dark đang

3:17:19 đặt giá trị chủ đề tên, tối nếu chúng ta ghi đè giá trị thành sáng và sau đó làm mới, bạn có thể thấy giá trị không phải

3:17:29 ghi đè sang màu tối, rất dễ làm việc với cookie, giờ đây tiêu đề hoạt động mượt mà như vậy. Hãy thêm một tiêu đề tùy chỉnh vào

3:17:38 phản hồi sử dụng tiêu đề phản hồi đặt tên là tiêu đề tùy chỉnh và đặt giá trị thành giá trị tùy chỉnh, vào tab mạng và làm mới

3:17:50 Trang cho hồ sơ dưới tiêu đề phản hồi bạn sẽ thấy tiêu đề tùy chỉnh của chúng tôi với giá trị của nó. Tiêu đề tùy chỉnh rất hữu ích

3:18:00 để truyền thêm thông tin có thể được sử dụng bởi các script phía client hoặc để gỡ lỗi như bạn thấy phần mềm trung gian có thể

3:18:07 được sử dụng hiệu quả để thao tác cả cookie và header trong chỉ mục phần mềm trung gian tóm tắt mà shes cho phép bạn

3:18:14 kiểm soát và chặn hiệu quả chu kỳ phản hồi yêu cầu, cho phép chuyển hướng, viết lại URL và thao tác tiêu đề cùng cookie với

3:18:24 Kết thúc phần đầu tiên về định tuyến trong XS chúng ta đã đề cập đến một loạt các chủ đề từ định nghĩa tuyến cơ bản

3:18:32 sử dụng trang và bố cục Tuyến động nhóm tuyến đường liên kết và điều hướng Tải và lỗi Trạng thái và nâng cao

3:18:40 các khái niệm như tuyến song song, chặn tuyến, trình xử lý tuyến đường và giờ là middleware, tôi hy vọng bạn đã cảm nhận được

3:18:46 Tự tin khi làm việc với định tuyến trong X cho phần tiếp theo, chúng ta sẽ đi sâu vào việc kết xuất trong XS sau khi khám phá các chi tiết của

3:18:58 Tiếp theo: Định tuyến của SH trong phần đầu tiên chúng ta đã sẵn sàng giải quyết một vấn đề quan trọng tương tự ở phần thứ hai

3:19:04 render trong XS có thể nghe phức tạp nhưng thực ra khá đơn giản, đó là một quá trình

3:19:11 chuyển đổi mã thành phần bạn viết thành các giao diện người dùng mà người dùng có thể nhìn thấy và tương tác với những điều khó khăn

3:19:18 Một phần để xây dựng một ứng dụng hiệu quả là xác định khi nào và ở đâu nên thực hiện quá trình chuyển đổi này

3:19:24 có lẽ bạn đã từng nghe các thuật ngữ như CSR SSR và RSS được nhắc đến và có thể chúng khiến bạn phải băn khoăn

3:19:30 Đừng lo, chúng ta sẽ phân tích tất cả những điều này theo cách hợp lý, nhưng trước khi bắt đầu render

3:19:37 Trong phần chia sẻ tiếp theo, hãy lùi lại một bước và xem cách việc render hoạt động trong chính react vì nexs được xây dựng trên nền tảng

3:19:44 React hiểu mô hình render của react sẽ giúp mọi thứ khác khớp lại với nhau, tôi nên nói rằng chúng ta đang nói về

3:19:51 để bao quát khá nhiều khái niệm trong phần này, nếu có điều gì đó không hoàn toàn hợp lý ngay lập tức thì đó là

3:19:57 Hoàn toàn bình thường, bạn có thể tạm dừng và xem lại bất kỳ phần nào cảm thấy chưa rõ ràng, tin tôi đi, đôi khi cần vài lần

3:20:05 Các Khái niệm này thực sự đồng bộ rất tốt, với phần giới thiệu này trong đầu, hãy cùng tìm hiểu cách react xử lý

3:20:15 để thực sự hiểu cách render hoạt động trong nexts, chúng ta cần xem phản ứng đã phát triển như thế nào qua

3:20:22 Thập kỷ vừa qua, hãy cùng tìm hiểu các chiến lược rendering khác nhau của Reacts và xem chúng đã thay đổi như thế nào theo thời gian nếu

3:20:28 Bạn đã làm việc với phát triển web một thời gian, có lẽ bạn còn nhớ khi React chủ yếu được dùng để xây dựng đơn

3:20:34 ứng dụng trang khi khách truy cập trang web của bạn, máy chủ sẽ gửi lại một trang HTML duy nhất, trang này rất đẹp

3:20:43 đơn giản chỉ là một thẻ div đơn giản và một liên kết đến tệp Javascript, để tôi chỉ cho bạn ý tôi với một ví dụ từ

3:20:50 tạo ứng dụng react, công cụ hàng đầu để bắt đầu các dự án react, bạn sẽ nhận được tệp HTML tối thiểu này với một file rỗng.

3:20:57 thẻ root div và một tham chiếu bundle.js tệp Javascript bundle.js này là nguồn năng lượng thực sự chứa

3:21:07 mọi thứ như Thư viện React, mã ứng dụng của bạn, mọi thứ cần thiết để chạy ứng dụng, trình duyệt sẽ

3:21:14 tải tệp này ngay khi HTML được xử lý sau khi trình duyệt của bạn tải xuống toàn bộ JavaScript thì nó sẽ

3:21:20 bắt đầu tạo HTML ngay trên máy tính của bạn, chèn nó vào Dom dưới phần tử root div đó và

3:21:28 đó là lúc bạn cuối cùng sẽ thấy giao diện người dùng của mình, đây là cách rất đơn giản để xác minh nếu bạn kiểm tra Dom

3:21:35 các phần tử inspector chúng ta có thể thấy một header với hình ảnh và H1 cùng thẻ đoạn văn nhưng nếu bạn xem nguồn PID

3:21:47 bạn chỉ thấy HTML cơ bản gốc mà máy chủ gửi qua toàn bộ phương pháp này, nơi trình duyệt của bạn là

3:21:54 client biến đổi các thành phần react thành những gì bạn thấy trên màn hình, gọi tắt là CSR rendering phía khách hàng

3:22:02 CSR trở nên rất phổ biến cho các ứng dụng một trang và mọi người đều sử dụng nó, tuy nhiên không lâu sau các lập trình viên

3:22:10 bắt đầu nhận thấy một số nhược điểm vốn có của cách tiếp cận này, vấn đề lớn đầu tiên là SEO khi các công cụ tìm kiếm thu thập dữ liệu trang web của bạn

3:22:19 Họ chủ yếu xem xét nội dung HTML, nhưng với CSR, HTML ban đầu của bạn về cơ bản chỉ là một thẻ div rỗng,

3:22:26 Không phù hợp cho các công cụ tìm kiếm khi cố gắng tìm hiểu trang của bạn nói về điều gì, cộng thêm khi bạn có quá nhiều thành phần lồng nhau

3:22:33 việc thực hiện các cuộc gọi API nội dung có ý nghĩa có thể tải quá chậm khiến các công cụ tìm kiếm không thể phát hiện được, vấn đề thứ hai là

3:22:41 Hiệu năng và trải nghiệm người dùng, hãy nghĩ về trình duyệt của bạn, tức là client, phải làm mọi thứ để lấy dữ liệu.

3:22:49 Xây dựng giao diện người dùng, làm mọi thứ tương tác và đó là rất nhiều công việc, người dùng thường phải nhìn chằm chằm vào màn hình trống hoặc

3:22:56 Tải Spinner trong khi tất cả những điều này xảy ra và đây là điểm nhấn mỗi khi bạn thêm một tính năng mới vào ứng dụng của mình

3:23:04 Gói JavaScript ngày càng lớn khiến người dùng phải chờ lâu hơn, điều này đặc biệt gây khó chịu cho những người có

3:23:10 kết nối internet chậm hơn trong khi CSR thực sự đã thay đổi cuộc chơi và mang đến cho chúng ta ứng dụng web tương tác We Love Today

3:23:17 các nhà phát triển biết họ cần các giải pháp tốt hơn cho SEO và hiệu suất. Tiếp theo, chúng ta sẽ xem xét một bản dựng hình khác

3:23:24 cách tiếp cận giải quyết trực tiếp các hạn chế CSR này, chúng tôi vừa đề cập đến render phía client trong react và hai phương pháp chính của nó

3:23:33 Nhược điểm đầu tiên là SEO vì nội dung thường dựa vào JavaScript để hiển thị trên các công cụ tìm kiếm phía khách hàng

3:23:40 gặp khó khăn trong việc lập chỉ mục đúng cách, thứ hai là trải nghiệm người dùng, người dùng phải chờ đợi trình duyệt tải PAR và

3:23:47 thực thi JavaScript trước khi thấy bất kỳ nội dung có ý nghĩa nào để khắc phục những hạn chế này của rendering phía client

3:23:54 Các Framework phản ứng hiện đại như Gatsby và Nas đang chuyển sang phía Serer. Giải pháp, hãy cùng xem cách điều này thay đổi nội dung như thế nào.

3:24:01 giao khi có yêu cầu thay vì gửi một tệp HTML trần cần JavaScript phía khách để xây dựng trang

3:24:09 máy chủ hiện xử lý việc hiển thị toàn bộ HTML tài liệu HTML đầy đủ này sẽ được chuyển thẳng đến trình duyệt

3:24:16 vì HTML đã được tạo trên máy chủ nên trình duyệt có thể nhanh chóng phân tích và hiển thị nó, giúp chúng ta ban đầu nhanh hơn

3:24:23 thời gian tải trang: phương pháp phía máy chủ này giải quyết cả hai vấn đề CSR trực tiếp, các công cụ tìm kiếm giờ đây có thể dễ dàng

3:24:31 lập chỉ mục nội dung được hiển thị trên máy chủ giải quyết vấn đề SEO của chúng tôi ngay khi người dùng thấy nội dung HTML thực tế ngay lập tức

3:24:39 việc nhìn chằm chằm vào màn hình trống hoặc quay tải nhưng đây là điều kiện trong khi SSR làm cho nội dung hiển thị nhanh hơn

3:24:46 chính sự phức tạp về tính tương tác, trang không thể trở nên tương tác hoàn toàn cho đến khi gói JavaScript bao gồm cả phản ứng và

3:24:56 mã ứng dụng của bạn đã hoàn tất việc tải xuống và thực thi trong trình duyệt giai đoạn quan trọng này được gọi là

3:25:03 hydration là nơi trang HTML tĩnh ban đầu được server phục vụ được đưa vào trạng thái sống trong quá trình hydration react thực hiện

3:25:12 control trong trình duyệt và tái tạo thành phần Tre trong bộ nhớ sử dụng HTML được render của máy chủ làm blueprint

3:25:19 cẩn thận vẽ ra vị trí của tất cả các phần tử tương tác rồi kết nối các logic JavaScript

3:25:24 như khởi tạo trạng thái ứng dụng, thêm bộ xử lý nhấp chuột và di chuột, và thiết lập tất cả các tính năng động

3:25:30 Cần thiết cho trải nghiệm người dùng tương tác đầy đủ, hiểu rằng nước là chìa khóa cho những gì sắp tới, vì vậy xin hãy

3:25:37 hãy chắc chắn rằng bạn cảm thấy thoải mái với những gì chúng tôi vừa học khi đào sâu hơn về phía Serers Các giải pháp có thể được phân loại thành hai

3:25:44 chiến lược chính là tạo trang tĩnh hoặc SSG và việc kết xuất phía máy chủ hoặc SSR tạo trang tĩnh xảy ra

3:25:53 trong thời gian xây dựng khi bạn triển khai ứng dụng lên máy chủ, điều này dẫn đến các trang đã được hiển thị và

3:26:00 sẵn sàng phục vụ, rất phù hợp cho nội dung giữ được sự ổn định tương đối như các bài viết blog phía máy chủ hiển thị ở bên kia

3:26:08 Hand render trang theo yêu cầu khi người dùng yêu cầu. Đây là lựa chọn lý tưởng cho nội dung cá nhân hóa như mạng xã hội.

3:26:15 các nguồn cấp mà mỗi HL thay đổi dựa trên người đăng nhập, bạn thường sẽ nghe cả hai cách tiếp cận được gọi chung là

3:26:22 Kết xuất phía Serers hoặc SSR trong khi kết xuất phía dịch vụ là một bước tiến lớn so với phía client

3:26:29 mang lại cho chúng tôi tải hàng ban đầu nhanh hơn và SEO tốt hơn, nhưng cũng có những thách thức riêng. Vấn đề đầu tiên với SSR là

3:26:36 các thành phần không thể bắt đầu render rồi tạm dừng hoặc chờ khi dữ liệu vẫn đang được tải nếu thành phần cần

3:26:44 để lấy một thứ gì đó từ cơ sở dữ liệu hoặc nguồn khác như API, việc lấy này phải hoàn thành trước khi máy chủ có thể

3:26:51 bắt đầu hiển thị trang điều này có thể làm chậm thời gian phản hồi của máy chủ với trình duyệt vì máy chủ phải hoàn thành

3:26:56 thu thập tất cả dữ liệu cần thiết trước khi bất kỳ phần nào của trang có thể được gửi đến máy khách, vấn đề thứ hai với SSR là

3:27:03 để hydration thành công, trong đó react thêm tính tương tác vào HTML được render của máy chủ thành phần trong

3:27:09 trình duyệt phải khớp chính xác với thành phần được tạo trên máy chủ Tre, điều này có nghĩa là tất cả JavaScript cho thành phần đó

3:27:16 phải được tải lên máy khách trước khi bạn có thể bắt đầu cung cấp nước cho bất kỳ ai trong số họ. Vấn đề thứ ba với SSR liên quan đến

3:27:23 Phản ứng nước tự nó làm nước cây thành phần chỉ trong một lần duy nhất, nghĩa là một khi nó bắt đầu cấp nước thì nó sẽ không dừng lại

3:27:30 Cho đến khi hoàn thành toàn bộ cây, tất cả các thành phần phải được làm ẩm trước khi bạn có thể tương tác

3:27:37 bất kỳ trong ba vấn đề này đều phải tải dữ liệu cho toàn bộ trang, tải JavaScript cho toàn bộ

3:27:43 page và hydrating toàn bộ trang p cùng lúc tạo ra vấn đề thác nước All or Nothing kéo dài từ máy chủ đến

3:27:51 khách hàng, nơi mỗi vấn đề phải được giải quyết hoàn toàn trước khi chuyển sang vấn đề tiếp theo, điều này trở nên thực sự

3:27:57 kém hiệu quả khi một số phần của ứng dụng chậm hơn phần khác, như thường xảy ra trong các ứng dụng thực tế, những hạn chế này dẫn đến

3:28:06 Đội react để phát triển kiến trúc SSR mới và cải tiến. Tiếp theo, chúng ta sẽ khám phá kiến trúc này và xem cách nó giải quyết

3:28:14 trước đây chúng tôi đã khám phá các vấn đề SSR truyền thống về rendering phía máy chủ trong react và

3:28:23 đã phát hiện ra những hạn chế chính của nó, hãy tóm tắt nhanh các thách thức trước tiên, chúng ta không thể bắt đầu render HTML cho đến khi tất cả

3:28:29 dữ liệu được lấy trên máy chủ ngay khi chúng ta cần chờ tất cả JavaScript tải xong trên máy khách trước khi quá trình hydration bắt đầu

3:28:37 và thứ ba, mọi thành phần cần được ngập nước trước khi bất kỳ thành phần nào trở nên tương tác, những vấn đề này tạo thành một

3:28:43 hoặc hiệu ứng thác nước Nothing khá kém hiệu quả, đặc biệt khi một số phần của ứng dụng bạn chậm hơn

3:28:49 so với những người khác để khắc phục những hạn chế về hiệu năng này, React 18 đã giới thiệu kiến trúc SSR hồi hộp mới này

3:28:58 kiến trúc cho phép bạn sử dụng thành phần hồi hộp để mở khóa hai tính năng SSR thay đổi cuộc chơi: HTML streaming

3:29:05 Trên server và selective hydration trên client, hãy cùng khám phá chi tiết hai tính năng này khi chúng ta đã thảo luận về một

3:29:12 một phút trước, truyền thống SSR là All or Nothing, máy chủ sẽ hiển thị toàn bộ HTML rồi gửi đến

3:29:20 client hiển thị HTML này và chỉ sau khi tải đầy đủ gói JavaScript thì react mới tiến hành

3:29:26 Tưới nước toàn bộ ứng dụng để tăng tính tương tác, nhưng React 18 cho chúng ta cách tốt hơn. Đây là một cách tương tự.

3:29:34 trực quan hóa từ góc nhìn giao diện người dùng: đầu tiên bạn render toàn bộ HTML, client cuối cùng sẽ nhận được nó

3:29:42 Bạn tải toàn bộ mã và làm ướt toàn bộ ứng dụng, nhưng React 18 cho chúng tôi cách tốt hơn khi bạn bao bọc một thứ gì đó

3:29:49 như khu vực nội dung chính của bạn trong thành phần hồi hộp, bạn đang nói với phản ứng này, đừng chờ phần này bắt đầu.

3:29:56 khi phát trực tiếp phần còn lại của trang, react sẽ hiển thị một vòng quay tải cho phần đã được bao bọc trong khi nó hoạt động trên

3:30:02 phần còn lại của trang, khi máy chủ cuối cùng đã có dữ liệu sẵn sàng cho phần chính đó, react sẽ stream thêm HTML bổ sung

3:30:10 qua luồng liên tục cùng với một chút JavaScript biết chính xác vị trí để đặt html đó

3:30:17 Phần thú vị: người dùng có thể xem nội dung của phần chính ngay cả trước khi React hoàn tất tải trên trình duyệt của họ

3:30:24 Điều này giải quyết vấn đề đầu tiên của chúng ta: bạn không cần phải lấy tất cả mọi thứ trước khi có thể hiển thị bất cứ điều gì, nếu một phần cụ thể là

3:30:31 chậm và có thể làm chậm HTML ban đầu, không vấn đề gì, nó có thể được tích hợp liền mạch vào luồng

3:30:37 sau này khi nó sẵn sàng, đây là bản chất của cách sự hồi hộp hỗ trợ việc stream HTML phía serers, nhưng chúng ta vẫn

3:30:45 có thêm một trở ngại nữa để vượt qua ngay cả khi gửi HTML nhanh hơn, chúng ta không thể bắt đầu làm ẩm cho đến khi tải xong tất cả

3:30:52 JavaScript cho phần chính, nếu đó là một phần mã lớn, chúng tôi vẫn đang để người dùng phải chờ đợi để có thể

3:30:58 tương tác với trang để giảm thiểu vấn đề này, có thể sử dụng việc chia nhỏ mã cho phép bạn thông báo cho người đóng gói các phần này của

3:31:05 Mã không gấp, hãy tách chúng thành các script riêng biệt, sử dụng React Lazy cho việc tách mã rất mạnh mẽ

3:31:12 ở đây nó tách mã các phần chính của bạn khỏi khối JavaScript B cốt lõi, nghĩa là trình duyệt có thể tải xuống

3:31:18 React và hầu hết các ứng dụng của bạn lập trình độc lập mà không bị kẹt chờ đợi mã phần chính và

3:31:25 Đây là lúc mọi thứ trở nên thực sự thú vị khi bạn bao bọc phần chính của bạn trong một thành phần hồi hộp mà bạn đang

3:31:30 Không chỉ bật stream mà còn nhắc React rằng bạn có thể làm ướt các phần khác của trang trước khi mọi thứ hoàn toàn ổn

3:31:37 Đây chính là cái gọi là Hydration chọn lọc và đây là một bước ngoặt, nó cho phép cung cấp nước cho các bộ phận của

3:31:44 trang khi chúng có sẵn ngay cả trước khi phần HTML còn lại và mã JavaScript được tải xuống đầy đủ

3:31:51 từ góc nhìn của người dùng, đây là những gì xảy ra đầu tiên khi họ thấy nội dung không tương tác được phát trực tiếp dưới dạng HTML mặc dù

3:31:59 các phần chính mà mã JavaScript chưa được tải về, react bắt đầu tưới nước chọn lọc và các phần khác của

3:32:05 Trang có thể trở nên tương tác Phần chính sẽ bắt kịp và trở nên tương tác khi mã của nó được tải, điều này rất quan trọng vì nó có nghĩa là một

3:32:14 một phần lớn script JavaScript sẽ không cản trở phần còn lại của trang bạn trở nên tương tác nhưng nó vẫn có thể cân bằng

3:32:20 Bổ sung nước chọn lọc tốt hơn cũng giải quyết vấn đề thứ ba: nhu cầu bổ sung nước cho mọi thứ để tương tác

3:32:27 Anything React bắt đầu cấp nước ngay khi có thể, nghĩa là người dùng có thể tương tác với các thứ như đầu và bên hông

3:32:34 Điều hướng mà không cần chờ nội dung chính và điểm hay nhất là React tự động xử lý tất cả những điều này, đây là một điều

3:32:42 Rất thông minh về cách React xử lý việc cấp nước trong các tình huống nhiều thành phần đang chờ cấp nước.

3:32:49 ưu tiên việc cung cấp nước dựa trên các thành phần mà người dùng đang cố gắng tương tác, ví dụ react sắp cấp nước

3:32:57 Điều hướng bên hông, nhưng người dùng nhấp vào khu vực nội dung chính, phản ứng sẽ ngay lập tức chuyển sang chế độ và làm ẩm cho người đã nhấp

3:33:03 thành phần trong giai đoạn ghi nhận sự kiện nhấp chuột, điều này có nghĩa là thành phần đã sẵn sàng phản hồi ngay bên cạnh

3:33:10 Điều hướng nó sẽ được làm ẩm sau đó nên đó là phản ứng của kiến trúc SSR hồi hộp mới đã giải quyết hiệu quả tất cả

3:33:18 ba nhược điểm lớn của SSR truyền thống nhưng chúng ta vẫn chưa hoàn thành, mặc dù có những cải tiến trong SSR vẫn còn

3:33:26 Vẫn còn một số thách thức chúng ta cần suy nghĩ trước dù chúng ta đang truyền mã JavaScript lên trình duyệt từng chút một

3:33:32 Nhưng cuối cùng, người dùng vẫn phải tải toàn bộ mã nguồn cho một trang web khi chúng tôi liên tục thêm các tính năng vào

3:33:39 Ứng dụng Mã này ngày càng phát triển và điều này dẫn đến một câu hỏi quan trọng liệu người dùng có thực sự cần tải xuống nhiều dữ liệu như vậy không?

3:33:47 Rồi hiện tại còn một vấn đề khác là mọi thành phần React đều được cấp nước ở phía khách hàng dù cần thiết hay không

3:33:53 Dù có tính tương tác hay không, điều này có nghĩa là chúng ta đang sử dụng tài nguyên và làm chậm thời gian tải cũng như thời gian tương tác bằng

3:34:00 Ẩm các thành phần có thể chỉ là hàm lượng tĩnh, điều này dẫn đến một câu hỏi khác liệu tất cả các thành phần có phải

3:34:07 Uống nước ngay cả những người không cần tương tác, và đây là thử thách thứ ba: ngay cả các nhân viên phục vụ cũng rất khó khăn

3:34:14 tốt hơn trong việc xử lý xử lý nặng, chúng tôi vẫn đang làm cho người dùng thiết bị của phần lớn công việc JavaScript này thực sự có thể

3:34:21 Hãy làm chậm mọi thứ, đặc biệt trên các thiết bị yếu hơn, và điều này dẫn đến một câu hỏi quan trọng khác phải không?

3:34:28 Tận dụng máy chủ nhiều hơn, những thách thức này chỉ ra điều gì đó lớn hơn. Chúng ta cần những cách thông minh hơn để xây dựng nhanh chóng.

3:34:35 các ứng dụng vượt ra ngoài phương pháp dựng hình truyền thống Giải pháp chính xác là điều chúng tôi sẽ làm

3:34:41 Tiếp theo, chúng ta đã thấy cách render Reacts đã phát triển từ rendering phía client sang rendering phía SERs và sau đó là

3:34:50 Sự hồi hộp cho phần dựng hình bên của Serer, mỗi bước đều mang đến những cải tiến nhưng cũng mang đến những thử thách mới cho sự hồi hộp với

3:34:58 SSR đã đưa chúng tôi đến gần hơn với trải nghiệm render liền mạch nhưng vẫn gặp khó khăn với kích thước gói lớn

3:35:05 gây tải xuống quá mức cho người dùng, uống nước không cần thiết, trì hoãn tương tác và phía khách tải nặng

3:35:11 Quá trình xử lý dẫn đến hiệu suất kém hơn để giải quyết những thách thức này, chúng tôi cần nhiều hơn một bước nhỏ từng bước.

3:35:18 cần một bước nhảy vọt đáng kể để đưa chúng ta đến các thành phần máy chủ react RSC cho các thành phần máy chủ react ngắn gọn

3:35:26 đại diện cho một kiến trúc mới do nhóm React thiết kế Cách tiếp cận này tận dụng thế mạnh của cả máy chủ và máy khách

3:35:33 Môi trường để tối ưu hóa hiệu quả, thời gian tải và tính tương tác, kiến trúc giới thiệu mô hình thành phần kép

3:35:41 Phân biệt giữa thành phần máy khách và thành phần máy chủ, sự phân biệt này không dựa trên thành phần hay chức năng mà là

3:35:49 Về môi trường thực thi và các hệ thống cụ thể mà chúng được thiết kế để tương tác, hãy cùng xem xét kỹ hơn

3:35:55 tại hai loại thành phần này, bắt đầu với thành phần khách hàng các thành phần khách là phản ứng quen thuộc

3:36:01 Các thành phần mà chúng tôi đã sử dụng và bàn luận trong các kỹ thuật render trước đây, chúng thường được render

3:36:07 ở phía khách hàng nhưng chúng cũng có thể được hiển thị sang HTML một lần trên máy chủ, cho phép người dùng ngay lập tức nhìn thấy

3:36:13 Trang HTML nội dung thay vì màn hình trống. Tôi biết nghe có vẻ khó hiểu khi nói các thành phần khách hàng có thể hiển thị

3:36:20 trên máy chủ nhưng tốt nhất nên hiểu như một chiến lược tối ưu hóa, các thành phần này chủ yếu hoạt động trên

3:36:27 client nhưng có thể và nên chạy một lần trên máy chủ để hiệu suất tốt hơn; các thành phần client có quyền truy cập đầy đủ vào

3:36:35 môi trường máy khách như trình duyệt cho phép họ sử dụng hiệu ứng trạng thái và trình lắng nghe sự kiện để xử lý

3:36:42 tương tác, chúng cũng có thể truy cập API độc quyền của trình duyệt như định vị địa lý hoặc lưu trữ cục bộ, cho phép bạn xây dựng

3:36:49 Giao diện người dùng cho các trường hợp sử dụng cụ thể, giống như chúng tôi đã làm suốt những năm qua trước khi kiến trúc RSC được giới thiệu trong

3:36:57 thực tế, thuật ngữ thành phần khách hàng không mang ý nghĩa gì mới, nó chỉ giúp phân biệt các thành phần này với

3:37:03 các thành phần máy chủ mới được giới thiệu các thành phần máy chủ đại diện cho một loại thành phần react mới

3:37:10 được thiết kế đặc biệt để hoạt động độc quyền trên máy chủ và không giống như các thành phần khách, mã của chúng vẫn ở trên

3:37:17 máy chủ và không bao giờ được tải xuống máy khách, thiết kế này Lựa chọn mang lại nhiều lợi ích cho các ứng dụng phản ứng

3:37:25 Hãy cùng xem xét kỹ hơn những lợi ích này là gì, đầu tiên là các gói nhỏ hơn vì các thành phần máy chủ vẫn hoạt động

3:37:32 máy chủ tất cả các phụ thuộc của họ cũng ở đó, điều này rất tuyệt vời cho người dùng có kết nối chậm hoặc yếu hơn

3:37:39 vì chúng không cần tải về pars và chạy JavaScript cộng thêm không có sự hỗ trợ

3:37:45 bước làm cho ứng dụng của bạn tải và tương tác nhanh hơn ngay khi bạn có quyền truy cập trực tiếp vào máy chủ tài nguyên máy chủ

3:37:54 Các thành phần có thể giao tiếp trực tiếp với cơ sở dữ liệu và hệ thống tệp, giúp việc lấy dữ liệu trở nên cực kỳ hiệu quả mà không cần

3:37:59 Xử lý phía máy khách Chúng sử dụng sức mạnh của máy chủ và sự gần gũi với nguồn dữ liệu để quản lý các tính toán nặng

3:38:06 các tác vụ hiển thị, bảo mật thứ ba cũng được tăng cường vì các thành phần máy chủ chỉ chạy trên dữ liệu nhạy cảm của máy chủ và

3:38:14 logic như khóa và token không bao giờ rời khỏi máy chủ thứ tư việc lấy dữ liệu trở nên thông minh hơn nhiều các thành phần máy chủ cho phép bạn

3:38:22 di chuyển việc lấy dữ liệu đến máy chủ gần hơn với nguồn dữ liệu của bạn Điều này có thể cải thiện hiệu suất bằng cách giảm thời gian để

3:38:29 lấy dữ liệu cần thiết cho render và số lượng yêu cầu mà client cần thực hiện có bộ nhớ đệm khi bạn

3:38:37 kết xuất trên máy chủ bạn có thể lưu trữ kết quả và sử dụng cho các người dùng và yêu cầu khác nhau, điều này có nghĩa là tốt hơn

3:38:43 Hiệu năng và chi phí thấp hơn vì bạn không phải render lại và luôn lấy dữ liệu tham khảo khi tải trang đầu tiên thứ sáu và

3:38:51 Contentful Paint đầu tiên được nâng cấp nghiêm túc bằng cách tạo HTML trên máy chủ, người dùng sẽ thấy nội dung của bạn ngay lập tức và

3:38:59 không cần phải chờ JavaScript tải xuống và thực thi, SEO thứ bảy cũng được cải thiện. Bot công cụ tìm kiếm cũng có thể

3:39:06 dễ dàng đọc HTML được hiển thị trên máy chủ giúp các trang của bạn dễ lập chỉ mục hơn và cuối cùng là máy chủ phát trực tuyến

3:39:13 Các thành phần có thể chia quy trình render thành các đoạn để truyền đến client khi đã sẵn sàng, nghĩa là người dùng

3:39:19 bắt đầu xem nội dung của họ nhanh hơn thay vì chờ toàn bộ trang hiển thị trên máy chủ trong react

3:39:26 kiến trúc thành phần máy chủ Các thành phần máy chủ xử lý việc lấy dữ liệu và kết xuất tĩnh trong khi các thành phần máy khách

3:39:32 Hãy chú ý đến việc hiển thị các yếu tố tương tác. Điều tuyệt vời của thiết lập này là bạn sẽ tận dụng tối đa cả máy chủ và

3:39:38 Kết xuất client khi sử dụng một framework ngôn ngữ duy nhất và tập hợp API duy nhất, giống như nhận được tất cả lợi ích của

3:39:44 Các kỹ thuật R in truyền thống nhưng không có nhược điểm thì chúng tôi đã đề cập khá nhiều nên để tôi đơn giản hóa những gì đã học

3:39:51 Với những điểm chính, các thành phần React Server mang đến một cách tiếp cận mới để xây dựng ứng dụng React bằng cách tách biệt

3:39:57 các thành phần thành hai loại: thành phần máy chủ và thành phần máy khách thành phần máy chủ chạy độc quyền trên máy chủ

3:40:05 Họ lấy dữ liệu và chuẩn bị nội dung mà không gửi mã đến trình duyệt, điều này giúp ứng dụng của bạn nhanh hơn vì người dùng

3:40:11 tải ít mã hơn, tuy nhiên các thành phần máy chủ không thể xử lý bất kỳ hành động tương tác nào của các thành phần khách hàng trên các thành phần khác.

3:40:17 chạy thủ công trong trình duyệt và quản lý tất cả các phần tương tác như nhấp chuột và gõ phím, chúng cũng có thể lấy chữ cái đầu tiên

3:40:24 Kết xuất máy chủ để tải trang nhanh hơn, cùng nhau giúp các trang web nhanh hơn, an toàn hơn và dễ tiếp cận hơn với mọi người

3:40:31 Bất kể thiết bị hay vị trí của họ là gì, bạn có thể đang nghĩ OK VAS, đây đều là thông tin rất hữu ích về Reacts

3:40:39 Rendering Evolution nhưng làm thế nào để kết nối với các chia sẻ tiếp theo tốt? Đây là điều mà bộ định tuyến ứng dụng trong nexs được xây dựng

3:40:46 Hoàn toàn dựa trên kiến trúc React Server Components, tất cả những lợi ích này chúng ta vừa thảo luận, chúng đã được xây dựng sẵn

3:40:53 Trong phiên bản mới nhất của Next Shares, hiểu về sự phát triển của Reacts rendering cung cấp nền tảng

3:40:59 cần thiết để bạn hiểu được những gì chúng ta sắp khám phá khi chúng ta đi sâu hơn vào những chia sẻ tiếp theo. Nếu bạn có

3:41:06 Thành thạo với các chiến lược render React mà chúng ta đã đề cập, hãy cùng tìm hiểu về render trong

3:41:12 Tiếp theo, trước đây chúng ta đã khám phá các thành phần của react server và học về mô hình thành phần kép của nó phân biệt

3:41:21 giữa các thành phần máy chủ và máy khách, bây giờ hãy áp dụng kiến thức đó vào thực tiễn bằng cách tạo cả hai loại thành phần trong

3:41:28 một ứng dụng XS cho phần thứ hai của khóa học về render Tôi đã tạo một dự án mới cho năm sau

3:41:35 Sử dụng lệnh NPX Create Next App Demo rendering Byphen Demo Muộn nhất Khi bạn chạy lệnh này, bạn sẽ có một kết quả tương tự

3:41:43 Cấu trúc dự án cần làm việc xem xét cách kiến trúc RSC tích hợp với nexs là một điểm then chốt

3:41:50 hãy nhớ rằng mọi thành phần trong ứng dụng NEXS mặc định là thành phần máy chủ, điều này bao gồm cả thành phần tích hợp sẵn

3:41:58 bố cục gốc và trang gốc đi kèm với mỗi dự án mới của năm sau, nhưng hãy tạo một thành phần mới để xác minh điều này

3:42:06 sẽ thêm một trang giới thiệu vào ứng dụng của chúng tôi bằng cách tạo một thư mục mới trong thư mục ứng dụng với tệp TSX trang tại đây

3:42:17 Định nghĩa một hàm mặc định xuất thành phần react đơn giản về trang trả về mỗi trang về và giống như

3:42:25 rằng chúng ta đã tạo một thành phần máy chủ để chứng minh điều này, hãy thêm console.log về thành phần máy chủ trong trình duyệt khi chúng ta

3:42:36 điều hướng đến slab, hãy chú ý cách nó bị khóa bằng một thẻ máy chủ đặc biệt, bạn cũng có thể thấy cùng một thông báo trong terminal này

3:42:45 xác nhận thành phần của chúng tôi là thành phần máy chủ chạy các thành phần trên máy chủ mang lại nhiều lợi ích không

3:42:53 Gói Kích thước Truy cập trực tiếp vào tài nguyên bên lề của Serer, cải thiện bảo mật và SEO tốt hơn, tuy nhiên các thành phần máy chủ vẫn có

3:43:01 giới hạn Chúng không thể tương tác với API trình duyệt hoặc xử lý tương tác người dùng, ví dụ nếu chúng ta cố gắng sử dụng trạng thái trong

3:43:09 trang giới thiệu của chúng tôi với UST State Hook từ react, vậy hãy nhập UST State từ react và gọi hook, gọi là nó

3:43:18 tên và đặt tên, chúng ta sẽ nhận được lỗi vì bang Hoa Kỳ yêu cầu môi trường thành phần khách hàng hiện tại của chúng ta

3:43:26 trang về là thành phần máy chủ các thành phần máy chủ không thể duy trì trạng thái vì chúng chạy trên máy chủ nơi trình duyệt

3:43:33 Quản lý trạng thái dựa trên không tồn tại, điều này củng cố thực tế rằng Nexia trash mọi thành phần như một máy chủ

3:43:40 thành phần mặc định, trừ khi được chỉ định rõ ràng, chúng ta hãy giữ trang giới thiệu như một máy chủ hoạt động

3:43:47 thành phần bằng cách loại bỏ UST State hook và học cách tạo một thành phần khách hàng mới, chúng ta sẽ tạo một bảng điều khiển SL

3:43:56 trang. TSX trong thư mục ứng dụng sử dụng trạng thái để quản lý tên người dùng, vì vậy xuất trang bảng điều khiển hàm mặc định

3:44:06 nhập và gọi, sử dụng tên trạng thái và đặt tên cho jsx, chúng ta có một thẻ div trong mỗi bảng điều khiển One, một đầu vào

3:44:16 phần tử với giá trị được đặt thành tên, biến trạng thái, và khi thay đổi, chúng ta gọi tên tập hợp, là hàm tập hợp của chúng ta, sau đó chúng ta có một

3:44:25 đoạn văn hello theo sau là biến State tên để chuyển đổi thành phần Máy chủ này thành thành phần máy khách tại

3:44:32 phía trên tệp, chúng ta phải bao gồm một chỉ thị hoặc nói đơn giản là một chỉ thị đặc biệt trong mã sử dụng client

3:44:40 Trong Trích dẫn, chỉ thị này đóng vai trò như vé của chúng tôi để vượt qua ranh giới từ phía máy chủ sang phía khách hàng và cho phép chúng tôi

3:44:48 Định nghĩa các thành phần khách hàng mà nó báo cho nexts rằng thành phần bảng điều khiển này cùng với bất kỳ thành phần nào nó nhập là

3:44:56 được thiết kế cho việc thực thi phía phía máy khách, do đó thành phần này có quyền truy cập đầy đủ vào API trình duyệt và khả năng

3:45:04 Xử lý tương tác để điều hướng đến tuyến đường này. Hãy thêm một liên kết trên trang chủ, tức là ở trang gốc. TSX bên dưới hình ảnh

3:45:13 liên kết văn bản là Das board, mỗi ref bằng với bảng điều khiển và đảm bảo nhập component liên kết ở phía trên

3:45:22 nhập liên kết từ liên kết dấu gạch chéo tiếp theo nếu bạn quay lại trình duyệt và điều hướng đến bảng điều khiển dấu gạch chéo bằng cách nhấp vào

3:45:31 Liên kết chúng ta thấy thành phần với trạng thái hoạt động như mong đợi. Xin chào Vishwa, bây giờ hãy xem một rất

3:45:39 Điểm quan trọng về hành vi kết xuất các thành phần khách hàng Hãy thêm console.log bảng điều khiển thành phần khách hàng

3:45:48 Quay lại thành phần trang bảng điều khiển của chúng tôi, khi chúng tôi nhấp vào liên kết bảng điều khiển từ trang chủ, nhật ký sẽ xuất hiện trên trình duyệt

3:45:57 console nhưng không có thẻ server, nếu bạn nhìn vào terminal thì chúng ta không thấy thông báo nhưng nếu tải lại thì

3:46:05 Trang bảng điều khiển Bảng điều khiển xuất hiện cả trong trình duyệt và trong terminal Để tôi giải thích tại sao điều này xảy ra

3:46:15 Khi chúng ta điều hướng bằng thành phần liên kết, thành phần bảng điều khiển chỉ được hiển thị phía client và ta thấy

3:46:21 thông báo trong bảng điều khiển trình duyệt nhưng nếu chúng tôi tải lại trang, thành phần bảng điều khiển sẽ được hiển thị một lần trên máy chủ để cho phép

3:46:28 người dùng sẽ ngay lập tức thấy nội dung HTML của Trang thay vì màn hình trống và sau đó một lần nữa ở phía khách trong quá trình

3:46:36 Hydration Đây là lý do tại sao chúng ta thấy thông báo trong bảng điều khiển trình duyệt và terminal, thuật ngữ thành phần khách hàng thực sự là

3:46:44 Gây nhầm lẫn nhưng bạn sẽ quen với hành vi này khi làm việc với rsc, lưu ý là thông báo trong trình duyệt là

3:46:51 đăng nhập hai lần trên trình duyệt do chế độ nghiêm ngặt trong quá trình phát triển, điều này không xảy ra trong sản xuất nên đừng

3:46:57 hãy lo lắng về việc tóm tắt trong kiến trúc RSC và mở rộng ra trong các thành phần của bộ định tuyến ứng dụng nexs là máy chủ

3:47:06 các thành phần mặc định tạo thành phần máy khách tại chỉ thị sử dụng máy khách ở đầu các thành phần máy chủ tệp

3:47:13 được hiển thị độc quyền trên máy chủ trong khi các thành phần khách hàng được kết xuất một lần trên máy chủ và sau đó trên

3:47:19 client. Tiếp theo, chúng ta sẽ khám phá vòng đời rendering của các thành phần máy chủ và máy khách. Chúng ta đã đề cập về máy chủ và máy khách.

3:47:30 Các thành phần trong Nexts. Bây giờ hãy cùng tìm hiểu vòng đời kết xuất của chúng một cách đơn giản hơn. Chúng ta sẽ khám phá cách chúng được tạo ra.

3:47:37 Cuộc sống trên màn hình của bạn Hiểu quá trình này không bắt buộc để xây dựng ứng dụng năm sau nhưng nó giống như biết

3:47:44 Những gì xảy ra trong bếp trước khi thức ăn của bạn được đưa lên bàn không cần thiết để thưởng thức bữa ăn của bạn nhưng chắc chắn

3:47:50 Thật thú vị khi nói về các thành phần máy chủ React, chúng ta đang xử lý ba bên chính: trình duyệt của bạn, máy khách và

3:47:57 Ở phía máy chủ, chúng ta có NEX, framework và React thư viện. Hãy cùng phân tích chuỗi tải ban đầu.

3:48:04 từng bước khi trình duyệt của bạn yêu cầu một trang, liên kết shs app router sẽ khớp URL yêu cầu với một thành phần máy chủ

3:48:12 tiếp theo, sh sau đó chỉ đạo react render thành phần máy chủ đó, react sẽ render thành phần máy chủ và bất kỳ thành phần con nào

3:48:19 các thành phần cũng là thành phần máy chủ chuyển đổi chúng sang định dạng Json đặc biệt gọi là RSC

3:48:26 payload nếu bạn kiểm tra tab mạng khi điều hướng đến một tuyến đường, bạn sẽ gặp định dạng Json đặc biệt này

3:48:34 payload RSC trong quá trình này nếu bất kỳ thành phần máy chủ nào sẽ phản ứng tạm dừng việc render cây con đó và gửi một

3:48:42 giá trị giữ chỗ thay vào đó, trong khi tất cả những điều này diễn ra, react cũng đang chuẩn bị các lệnh cho các thành phần khách hàng

3:48:49 chúng ta sẽ cần sau đó, sh lấy cả các lệnh payload RSC và thành phần khách hàng để tạo HTML trên

3:48:57 máy chủ HTML này sẽ truyền trực tiếp đến trình duyệt của bạn ngay lập tức, cung cấp cho bạn một bản xem trước nhanh không tương tác về tuyến đường tại

3:49:05 cùng lúc đó, nexs cũng truyền tải payload RSC khi react kết xuất từng phần giao diện người dùng khi nó đến nexs trình duyệt

3:49:13 xử lý tất cả những gì được truyền qua React sử dụng các lệnh của payload RSC và thành phần khách hàng để

3:49:20 kết xuất dần giao diện người dùng khi tất cả các thành phần máy khách và đầu ra của các thành phần máy chủ đã được tải

3:49:26 Trạng thái giao diện cuối cùng được trình bày cho các thành phần khách hàng người dùng dưới quá trình chuyển đổi ứng dụng của chúng ta từ

3:49:33 Hiển thị tĩnh thành trải nghiệm tương tác. Đây là trình tự tải ban đầu cho RSC. Bây giờ hãy cùng xem qua

3:49:42 trình tự cập nhật để làm mới các phần của ứng dụng trình duyệt yêu cầu một reetch của một giao diện người dùng cụ thể như một giao diện đầy đủ

3:49:50 route tiếp theo xử lý yêu cầu và so khớp nó với thành phần máy chủ được yêu cầu tiếp theo hướng dẫn react kết xuất

3:49:57 Cây component React hiển thị các thành phần tương tự như khi tải ban đầu, nhưng đây là nơi

3:50:03 khác là chúng ta không tạo HTML mới để cập nhật, thay vào đó năm sau sẽ truyền dữ liệu phản hồi dần dần

3:50:10 Quay lại trực tiếp cho máy khách khi nhận được phản hồi luồng tiếp theo sẽ kích hoạt một reender của tuyến đường sử dụng mới

3:50:17 Content React sau đó cẩn thận đối chiếu hoặc hợp nhất đầu ra mới được render với các thành phần hiện có trên màn hình

3:50:26 vì chúng ta sử dụng định dạng Json đặc biệt thay vì HTML nên react có thể cập nhật mọi thứ trong khi vẫn giữ giao diện quan trọng

3:50:32 Ghi nguyên những thứ như bạn đã nhấp vào đâu hoặc bạn đã gõ gì, đây là chuỗi cập nhật RSC ngay bây giờ

3:50:40 chúng ta hiểu về vòng đời render của các thành phần react seever. Hãy cùng tìm hiểu sâu hơn về chủ đề trong XS.

3:50:47 có ba cách khác nhau để render trên máy chủ tĩnh Dynamic và streaming, hãy cùng xem xét kỹ hơn

3:50:55 mỗi cái trong số này, tôi đã đề cập trước đó ba chiến lược rendering máy chủ trong SH tiếp theo. Bây giờ hãy xem chiến lược đầu tiên tĩnh

3:51:05 rendering tĩnh là một chiến lược rendering máy chủ, trong đó chúng tôi tạo các trang HTML khi xây dựng ứng dụng

3:51:12 hãy coi đó như việc chuẩn bị toàn bộ nội dung trước khi bất kỳ người dùng nào truy cập trang web của bạn sau khi đã xây dựng các Trang này

3:51:19 có thể được CDN lưu vào bộ nhớ đệm và phục vụ ngay lập tức cho người dùng. Điều thực sự thú vị về cách tiếp cận này là nó cũng tương tự

3:51:25 Trang dựng sẵn có thể được chia sẻ giữa nhiều người dùng khác nhau, giúp ứng dụng của bạn tăng hiệu năng đáng kể, điều này giúp

3:51:32 hiển thị tĩnh hoàn hảo cho các mục như bài blog, danh sách sản phẩm thương mại điện tử, tài liệu và tiếp thị. Trang ngay bây giờ

3:51:40 rằng chúng ta hiểu thế nào là kết xuất tĩnh và khi nào nên sử dụng nó, bạn có thể thắc mắc chúng ta thực sự sử dụng nó như thế nào

3:51:46 hoặc cụ thể hơn, làm thế nào để chúng ta bảo NS hiển thị tĩnh một tuyến đường cụ thể? Đây là tin tốt bạn không cần phải

3:51:53 Do Anything Special Static rendering là chiến lược mặc định trong bộ định tuyến ứng dụng Tất cả các tuyến đều được chuẩn bị tự động tại

3:52:00 thời gian build mà không có thiết lập bổ sung nào, giờ bạn có thể đang nghĩ khoan đã, bạn cứ nói về việc tạo HTML ở

3:52:07 Thời gian xây dựng nhưng chúng tôi chưa xây dựng ứng dụng đúng cách, chúng tôi chỉ đang chạy nó ở chế độ phát triển bây giờ, điều đó rất tuyệt

3:52:15 Câu hỏi: Hãy nói về sự khác biệt giữa máy chủ sản xuất và máy chủ phát triển. Trong sản xuất, chúng ta tạo một

3:52:22 Tối ưu hóa xây dựng và triển khai ngay trên các thay đổi chuyến bay sau khi triển khai một máy chủ phát triển, mặt khác,

3:52:28 tập trung vào trải nghiệm của nhà phát triển và chúng tôi cần một điều gì đó linh hoạt hơn, chúng tôi cần thấy ngay các thay đổi của mình trong

3:52:34 Trình duyệt mà không xây dựng lại ứng dụng mỗi lần, đó là lý do đội tiếp theo đưa ra quyết định thông minh trong các trang sản xuất

3:52:42 được dựng sẵn một lần trong quá trình xây dựng, nhưng trong quá trình phát triển, các trang này được dựng sẵn ở mọi yêu cầu, hãy truy cập trang chủ.

3:52:50 Đã được render trước và phục vụ Làm mới lại và phục vụ điều này đảm bảo bạn luôn thấy mã mới nhất của mình

3:52:57 thay đổi trong mỗi tiếp theo yêu cầu cũng hiển thị một chỉ báo tuyến tĩnh trong quá trình phát triển để giúp bạn xác định

3:53:04 Tuy nhiên, tôi phải nói rằng các tuyến đường là tĩnh, đừng quá lo lắng về việc tạo tĩnh trong quá trình phát triển, những gì

3:53:11 Điều quan trọng thực sự là hiểu cách nó hoạt động khi bạn xây dựng ứng dụng cho sản xuất trước khi chúng ta đi sâu vào quá trình xây dựng

3:53:17 Quy trình, hãy dừng máy chủ dev và dọn dẹp bằng cách xóa thư mục tiếp theo được tạo trong quá trình phát triển. Tiếp theo, hãy thêm một liên kết đến

3:53:28 Trang Giới thiệu từ trang gốc. Tệp TSX để sao chép liên kết đến bảng điều khiển và thay đổi HF cũng như văn bản trong

3:53:37 Trang trên, chúng ta cũng sẽ hiển thị thời gian hiện tại, nên về trang trong dấu ngoặc nhọn là ngày mới. để loal time string này sẽ

3:53:47 hãy giúp chứng minh một điểm sau này, bây giờ trong terminal run lệnh npm run build, điều này tạo ra một bản build sản xuất tối ưu cho ứng dụng của chúng tôi.

3:53:58 đầu ra lại được chuyển vào thư mục tiếp theo nhưng lần này nội dung sẽ khá khác so với những gì chúng ta thấy trong quá trình

3:54:05 Phát triển: Có khá nhiều điều để phân tích ở đây, vậy hãy bắt đầu với những gì chúng ta thấy trong nhà ga, bạn sẽ nhận thấy ba

3:54:12 các cột hiển thị thông tin về từng tuyến đường, kích thước tuyến đường và lần tải đầu tiên, JS route khá đơn giản, đó chính là tuyến đường

3:54:20 nên SL về và/bảng điều khiển ví dụ kích thước cho thấy lượng dữ liệu cần tải xuống khi điều hướng đến đó

3:54:29 trang client trang tương ứng trong trình duyệt lần đầu tải J cho biết lượng tải xuống khi tải ban đầu

3:54:36 từ máy chủ, hãy phân tích các con số này trước, có một gói chia sẻ mà tất cả các tuyến đều sử dụng nó bao gồm

3:54:44 mã khung chạy toàn cục CSS của bạn, mã nhà cung cấp như react chẳng hạn, và một số mã liên quan đến tuyến đường được chia sẻ

3:54:52 Bundle có dung lượng 105 KB khi xem xét từng tuyến riêng lẻ từ một trang gốc đến một trang.

3:54:59 TSX trong thư mục ứng dụng là 8.4 KB, tuy nhiên khi ai đó truy cập trang chủ, họ sẽ tải cả thư mục này và tệp chia sẻ

3:55:07 bundle tổng cộng 114 KB nexts cũng tự động tạo trang 404 không tìm thấy, nó rất nhỏ với 979 bytes nhưng cần 106 KB

3:55:19 với gói chia sẻ, trang trên là thành phần máy chủ khá nhẹ, chỉ 136 byte cho phía khách

3:55:28 điều hướng và 105 KB cho máy chủ tải trang bảng điều khiển là thành phần khách hàng lớn hơn một chút ở mức 370

3:55:37 bytes và 106 KB từ máy chủ bên cạnh mỗi tuyến bạn sẽ thấy một số ký hiệu và ở cuối là một biểu tượng của năm sau

3:55:46 Chú giải cho thấy cách mỗi tuyến được hiển thị trên trang root route của chúng tôi. TSX có một vòng tròn rỗng biểu thị tĩnh

3:55:54 việc hiển thị tương tự cũng áp dụng cho không tìm thấy và bảng điều khiển, tất cả đều được hiển thị sẵn tại thời gian hóa đơn dưới dạng HTML tĩnh

3:56:04 Những dấu hiệu này rất hữu ích khi bạn mới bắt đầu với hành vi tự làm đau tiếp theo và muốn hiểu chuyện gì đang xảy ra

3:56:09 Giờ hãy cùng xem qua đầu ra build, tiếp theo sẽ đặt mọi thứ vào thư mục nextt chứa tất cả các file

3:56:17 cần thiết để phục vụ ứng dụng của chúng ta cho trình duyệt, chúng ta sẽ tập trung vào hai thư mục chính: máy chủ và thư mục tĩnh bên trong

3:56:25 thư mục máy chủ: Có một thư mục ứng dụng phù hợp với cấu trúc tuyến của ứng dụng chúng tôi. Để tôi chỉ cho bạn điều quan trọng.

3:56:31 các tệp bạn sẽ tìm thấy ở đây, đầu tiên chúng ta có các tệp HTML, xem thông tin build của chúng ta hiển thị trang gốc là tĩnh như thế nào.

3:56:40 Tìm thấy index.html trong thư mục ứng dụng cùng một câu chuyện với trang không tìm thấy của chúng tôi.

3:56:48 HTML chúng ta cũng có một phần về. HTML với trang H1 HTML về và dấu thời gian cùng bảng điều khiển. HTML với tiêu đề của nó

3:56:59 đầu vào và đoạn văn bạn có thể thắc mắc tại sao chúng ta thấy HTML cho các thành phần khách hàng, bởi vì ngay cả các thành phần khách hàng cũng là

3:57:06 được dựng sẵn như một bước tối ưu hóa, điều mà chúng ta đã bàn khi học về các thành phần của khách hàng nhưng

3:57:12 Các tệp HTML nằm trong toàn bộ câu chuyện. Mỗi tuyến đường cũng nhận được cái gọi là payload RSC chẳng hạn. RSC cho thành phần về máy chủ và bảng điều khiển.

3:57:24 RSC cho thành phần khách bảng điều khiển các tệp với định dạng Json đặc biệt này được react tạo ra cho mỗi tuyến đường

3:57:32 và đại diện cho Dom ảo của bạn một cách siêu nhỏ gọn bằng cách sử dụng các chữ viết tắt và tham chiếu nội bộ cho các thành phần máy chủ này

3:57:40 payload bao gồm kết quả thực tế được hiển thị như thẻ H1 với văn bản về trang trong đó, các thành phần khách hàng hoạt động một chút

3:57:48 khác, payload của họ có các chỗ giữ chỗ cho thấy các thành phần của khách hàng nên đặt ở đâu cùng với các tham chiếu đến

3:57:54 ví dụ, các tệp JavaScript, bảng điều khiển, định tuyến payload của chúng ta, chỉ ra nơi mã thành phần của nó tồn tại tĩnh

3:58:01 chunks ứng dụng bảng điều khiển dấu gạch nối DD 953b DJ bên cạnh thư mục máy chủ chúng ta có thư mục tĩnh này đào sâu vào thư mục tĩnh

3:58:12 chunks app và bạn, bạn sẽ tìm thấy tất cả các tuyến đường của chúng tôi, thư mục bảng điều khiển ở đây có tệp mã component mà chúng ta đã thấy

3:58:19 đã tham chiếu trong payload RSC về những thứ cần thiết cho việc đối chiếu và cấp nước, thẻ H1, đầu vào bảng điều khiển, v.v.

3:58:29 để chúng ta hiểu đầu ra build, hãy phục vụ ứng dụng của chúng ta từ thư mục, chạy lệnh npm Run start.

3:58:38 Truy cập LCOS 3000 và với các công cụ phát triển của bạn đang mở, thực hiện bộ nhớ đệm trống rồi tải lại cứng, xem xét các tài nguyên khác nhau có thể

3:58:47 việc đầu tiên cần kiểm tra là yêu cầu Local Host này, nó đang đến dưới dạng một loại tài liệu, đây là

3:58:55 index.html chúng ta đã thấy trước đó trong thư mục ứng dụng máy chủ, nhấp vào xem trước và bạn có thể thấy bản xem trước của trang HTML

3:59:05 phản hồi hiển thị cho bạn mã HTML ngoài HTML Tôi muốn thu hút sự chú ý của bạn đến hai tệp RSC

3:59:14 bảng điều khiển \_ RSC và về uncore RSC, những điều này rất cần thiết để xây dựng giao diện người dùng ở phía khách hàng khi chúng ta điều hướng đến

3:59:22 slab hoặc/ bảng điều khiển sử dụng các liên kết cũng có thành phần bảng điều khiển mã trang DD 953b DJ đã được tải về. Đây là các đoạn mã

3:59:34 Điều thú vị là xóa tab mạng và nhấp vào thông tin về và bảng điều khiển, ví dụ như về thành phần và thành phần bảng điều khiển

3:59:44 Hãy chú ý cách chúng hiển thị ngay lập tức mà không chạm đến máy chủ, đó là vì tải ban đầu đã bao gồm tất cả mọi thứ

3:59:51 cần thiết cho việc điều hướng phía client nên chúng tôi đã có mọi thứ cần thiết ngay trong trình duyệt, nhưng khoan đã, tiếp theo SH thế nào rồi

3:59:59 Biết gửi cho chúng tôi thông tin về giới thiệu và bảng điều khiển trước khi chúng tôi nhấp vào bất cứ thứ gì, nhờ một tính năng gọi là

4:00:06 Prefetch một kỹ thuật thông minh tải trước các tuyến đường ở nền khi các liên kết của chúng trở nên hiển thị cho các liên kết tĩnh

4:00:13 Các tuyến như của chúng tôi NextJS tự động lấy trước và lưu bộ nhớ đệm toàn bộ tuyến đường nên khi trang chủ của chúng tôi tải các liên kết

4:00:20 đến About và Dashboard Nexts đã có việc prefetge About và các tuyến điều hướng trên bảng điều khiển để điều hướng tức thì, nhưng còn về

4:00:27 Giới thiệu. HTML và bảng điều khiển. Các tệp HTML mà chúng ta đã thấy trước đó trong thư mục máy chủ khi bạn nhập URL

4:00:36 trực tiếp hoặc nhấn làm mới trong trình duyệt, đó là lúc bạn nhận được toàn bộ tài liệu HTML trực tiếp từ máy chủ để

4:00:42 khi bạn điều hướng đến slab 3000 đầu tiên cục bộ, lần này bạn sẽ thấy tài liệu về là HTML cho/ bảng điều khiển với HTML, bạn cũng sẽ thấy

4:00:57 Nhận mã cần thiết để uống nước, ồ và nhớ dấu thời gian chúng tôi đã thêm vào trang Giới thiệu, chú ý cách nó giữ nguyên

4:01:05 Dù bạn làm mới bao nhiêu lần, đó là vì nó đã bị khóa khi chúng tôi xây dựng ứng dụng, chúng tôi sẽ làm vậy

4:01:13 Khám phá thêm về rendering nhưng đây là những gì chúng ta đã học được, render tĩnh là một chiến lược mà HTML được tạo ra tại

4:01:20 thời gian xây dựng cùng với tải RSCP HTML cho các thành phần và các đoạn JavaScript cho việc hydration phía khách hàng là

4:01:27 đã tạo các lượt truy cập tuyến trực tiếp phục vụ các tệp HTML trong khi điều hướng phía khách sử dụng payload RSC và các đoạn JavaScript

4:01:35 Nếu không có thêm yêu cầu máy chủ, điều này làm cho render tĩnh trở nên tuyệt vời về hiệu năng, đặc biệt trong blog.

4:01:41 Tài liệu và trang tiếp thị, tôi biết đây là rất nhiều thứ để tiếp thu, nếu một số phần cảm thấy mơ hồ thì tôi khuyên bạn nên thử

4:01:49 tự chạy mã nguồn, xem tab mạng và thử nghiệm, cách tốt nhất để hiểu các khái niệm này là xem

4:01:56 Họ đang hoạt động, mục tiêu của tôi không chỉ là chỉ cho bạn cách sử dụng tiếp theo mà còn giúp bạn hiểu tại sao mọi thứ lại hoạt động

4:02:02 Cách họ làm trước đây chúng ta đã học về chiến lược rendering máy chủ đầu tiên, tức là static rendering. Bây giờ hãy cùng tìm hiểu về chiến lược thứ hai.

4:02:12 chiến lược Kết xuất động là chiến lược kết xuất máy chủ, trong đó các tuyến đường được kết xuất

4:02:18 Riêng biệt đối với từng người dùng khi họ gửi yêu cầu, điều này rất hữu ích khi bạn cần hiển thị dữ liệu hoặc thông tin cá nhân hóa

4:02:25 chỉ có khi yêu cầu các thông tin như cookie hoặc tham số tìm kiếm URL, trang web tin tức cá nhân hóa

4:02:33 trang mua sắm và nguồn cấp dữ liệu mạng xã hội là một số ví dụ mà việc hiển thị động hiện nay có lợi khi chúng ta

4:02:40 Hiểu thế nào là rendering động và khi nào nên sử dụng nó, bạn có thể thắc mắc làm thế nào để thực hiện nó như thế nào?

4:02:46 Chúng ta nói với SH tiếp theo rằng chúng ta muốn một route cụ thể được render động, nó khá đơn giản, tự động XJS

4:02:54 chuyển sang kết xuất động cho toàn bộ tuyến đường khi phát hiện cái gọi là hàm động hoặc API động

4:03:02 trong XS, các hàm động này là cookie, headers, kết nối, chế độ nháp, tìm kiếm, prop, và sau đó là

4:03:10 một API mới sử dụng bất kỳ trong số này sẽ tự động vận hành toàn bộ tuyến đường của bạn vào Dynamic rendering tại thời điểm yêu cầu.

4:03:18 viết một đoạn mã để hiểu rõ hơn về mã VS. Hãy cùng chỉnh sửa thành phần About bằng cách nhập và sử dụng

4:03:25 cookie Chức năng động ở phía trên nhập cookie từ các tiêu đề SL tiếp theo chuyển thành phần thành phần không đồng bộ

4:03:34 chức năng nên xuất hàm không đồng bộ mặc định về trang và trong hàm nội dung hàm const cookie store là

4:03:42 bằng một cookie trọng lượng thì const theme bằng cookie store.get let's pass trong tên cookie là

4:03:53 Chủ đề Chúng ta sẽ ghi chủ đề lên console Đừng quá lo lắng về chức năng cookie đúng không.

4:03:59 bây giờ chúng ta chỉ đang dùng nó để kích hoạt Dynamic rendering cho trang giới thiệu này với đoạn mã này, hãy cùng xây dựng

4:04:06 và kiểm tra đầu ra từ Dynamic rendering, tôi sẽ xóa thư mục tiếp theo trước rồi chạy npm run build trong

4:04:17 terminal sẽ mất một chút thời gian để tạo thư mục build newex, trước tiên hãy xem kết quả build trong

4:04:24 terminal chúng ta có thể thấy tất cả các tuyến đường được tạo ra được liệt kê, chú ý kỹ đến tuyến đường có biểu tượng F bên cạnh

4:04:33 nếu bạn kiểm tra chú giải, bạn sẽ thấy F chỉ Dynamic rendering server rendered on demand next next

4:04:40 điểm quan trọng cần nhớ là các trang được render động sẽ được tạo trong thời gian build nếu chúng ta

4:04:47 kiểm tra ứng dụng máy chủ tiếp theo, chúng tôi sẽ thấy các tệp HTML cho bảng điều khiển chỉ mục nhưng không tìm thấy tệp HTML cho trang lên

4:04:58 cuối cùng, hãy bắt đầu ứng dụng với npm Run start trong trình duyệt khi chúng ta dùng slash around và làm trống bộ nhớ đệm và hard

4:05:08 tải lại trang hiển thị theo yêu cầu và bạn sẽ thấy câu lệnh khóa trong giá trị chủ đề tên đầu cuối đèn này

4:05:16 cookie đã được thiết lập khi chúng ta tìm hiểu về chức năng cookie trước đó, hãy xem tab mạng và bạn sẽ thấy

4:05:22 cả bản xem trước và phản hồi chứa HTML, mỗi lần làm mới bạn sẽ nhận được thời gian mới nhất nếu kiểm tra bản dựng

4:05:33 thư mục vẫn chưa có tệp HTML nào được tạo trong thư mục máy chủ vì chúng tôi đang xây dựng một trang mới cho mỗi

4:05:40 Đơn giản là không cần phải lưu trữ nó, những gì tôi vừa giải thích có thể có vẻ đơn giản sau khi hiểu về tĩnh

4:05:47 Generation build tuy nhiên điều quan trọng là phải nhớ rằng việc xây dựng ứng dụng và chạy ứng dụng đã xây dựng là

4:05:54 gần nhất có thể với triển khai sản xuất, nên tôi muốn bạn hiểu cách nó hoạt động, đây là những gì

4:06:00 chúng ta đã học được rằng Dynamic rendering là một chiến lược trong đó HTML được tạo ra tự động ngay khi yêu cầu

4:06:08 bật nó khi gặp các chức năng động như tiêu đề cookie, chế độ kết nối sau hoặc tìm kiếm

4:06:15 Params prop Dynamic rendering rất tuyệt vời cho nội dung cá nhân hóa như nguồn cấp dữ liệu mạng xã hội, một trong những điểm tuyệt vời nhất của

4:06:22 NEX Shar là bạn không phải lo lắng về việc tự động render NEX Shar tĩnh và động

4:06:29 chọn chiến lược kết xuất tối ưu cho mỗi tuyến dựa trên các tính năng và API bạn đang sử dụng, nhưng nếu bạn muốn

4:06:36 ép một tuyến đường được render động Bạn có thể sử dụng export const Động bằng với việc ép Dynamic cont ở trên cùng

4:06:44 của trang của bạn, giờ khi chúng ta đã hiểu về kết xuất tĩnh và động, hãy cùng tìm hiểu về việc tạo các tham số tĩnh thực sự

4:06:53 tính năng thú vị trong sh tiếp theo, nói đơn giản là tạo tham số tĩnh, là một hàm hoạt động song song với Dynamic

4:07:01 các đoạn tuyến để tạo các tuyến tĩnh trong thời gian xây dựng thay vì theo yêu cầu theo yêu cầu, mang lại cho chúng tôi một trải nghiệm tốt

4:07:08 Tăng hiệu năng Tôi biết điều này nghe có vẻ hơi phức tạp nên hãy cùng nhau đi qua một ví dụ thực tế

4:07:15 sẽ xây dựng một trang danh sách sản phẩm và trang Chi tiết để xem cách hoạt động này trước tiên trong thư mục ứng dụng của chúng tôi

4:07:22 Tạo một thư mục Sản phẩm mới và thêm một trang. Tệp TSX với thành phần react để hiển thị sản phẩm nổi bật xuất ra

4:07:32 trang sản phẩm hàm mặc định và chúng tôi trả về một thẻ H1 ghi sản phẩm nổi bật và ba liên kết đến ba

4:07:40 Sản phẩm nổi bật sản phẩm một, 2 và ba, tiếp theo chúng ta sẽ tạo một ID Dynamic route, nên trong nội bộ sản phẩm ID được đặt trong dấu ngoặc vuông với

4:07:51 Một trang. Tệp TSX để hiển thị chi tiết sản phẩm riêng lẻ, cho phép tôi dán mã để tiết kiệm thời gian xuất mặc định không đồng bộ

4:08:00 trang sản phẩm hàm nhận tham số route, chúng ta chờ các tham số và phân cấu trúc ID sản phẩm, chúng ta trả về một

4:08:08 Chi tiết ID sản phẩm thẻ H1 được hiển thị tại timam khi chúng tôi xây dựng ứng dụng bằng npm run build something

4:08:17 Điều thú vị là nếu bạn nhìn vào terminal, bạn sẽ nhận thấy Niar xử lý trang danh sách sản phẩm và

4:08:24 trang chi tiết sản phẩm khác nhau: trang danh sách sản phẩm sẽ hiển thị tĩnh trong khi giọng nói chi tiết sản phẩm được thiết lập

4:08:32 lên cho rendering động và điều này hợp lý, NEX không biết giá trị id cần thiết cho đến khi có người

4:08:39 thực sự yêu cầu một URL cụ thể, hãy xem thư mục build cụ thể trong server slapp và bạn sẽ tìm thấy tệp HTML

4:08:50 cho các sản phẩm. HTML nhưng bạn sẽ không thấy gì cho trang Chi tiết sản phẩm nếu bạn chạy ứng dụng với npm Run

4:08:59 bắt đầu và truy cập sản phẩm SL1, bạn sẽ thấy dấu thời gian thay đổi mỗi khi bạn làm mới trang, điều này là do

4:09:09 trang Chi tiết sản phẩm được hiển thị theo yêu cầu theo yêu cầu. Từ những gì chúng tôi từng học trước đây, chúng tôi biết rằng hiển thị tĩnh sẽ giúp chúng tôi tốt hơn.

4:09:17 Sẽ tuyệt biết bao nếu chúng ta có thể tiếp tục làm tốt hơn ít nhất là các sản phẩm nổi bật của chúng tôi chi tiết Trang sản phẩm

4:09:25 một, 2 và ba, đó chính xác là những gì tạo static parms giúp chúng ta làm. Hãy cùng xem cách triển khai nó trong

4:09:33 trang chi tiết sản phẩm, chúng ta sẽ thêm một hàm tạo tham số tĩnh, là một hàm bất đồng bộ trả về một mảng

4:09:44 đối tượng Mỗi đối tượng đại diện cho một tuyến đường mà chúng ta muốn hiển thị trước với khóa đối tượng tương ứng với động của tuyến đường

4:09:51 segment, chúng ta muốn ID với 1, 2 và 3, hàm này chạy trong thời gian build, trong khi chúng ta chỉ trả về một mảng

4:10:02 ở đây bạn cũng có thể lấy các ID này từ một API nếu chúng ta xây dựng lại ứng dụng, bây giờ với bản build chạy npm bạn sẽ thấy kết xuất PR sh tiếp theo

4:10:13 Trang chi tiết sản phẩm cho cả ba sản phẩm nổi bật SL1 SL2 và SLASH3 được thể hiện qua phần mới

4:10:22 ký hiệu là một vòng tròn được tô màu và nếu bạn kiểm tra chú thích thì nó ghi SSG được dựng sẵn dưới dạng HTML tĩnh bằng cách tạo tĩnh

4:10:31 hàm tham số bạn cũng có thể xác nhận điều này bằng cách kiểm tra thư mục build để ứng dụng máy chủ và các sản phẩm bạn sẽ tìm thấy ngay bây giờ

4:10:41 Tệp HTML 1. HTML 2html và 3. HTML tương ứng với các ID của chúng tôi, khởi động ứng dụng với npm Run start và

4:10:52 điều hướng đến/ sản phẩm SL1 để ý cách dấu thời gian giữ nguyên khi bạn làm mới, điều này là do chúng ta đang phục vụ một tệp HTML đã được dựng sẵn

4:11:03 còn các tuyến với nhiều phân đoạn động thì sao? giả sử chúng ta có một danh mục sản phẩm với các danh mục và

4:11:09 sản phẩm sử dụng một tuyến như/ sản phẩm danh mục SL sản phẩm/ trang SL. TSX trong trường hợp này, mỗi đối tượng bao gồm các giá trị cho

4:11:20 cả hai phân khúc Động đều cần dựng sẵn danh mục tuyến đường Điện tử, điện thoại thông minh, điện tử, sách laptop và sách khoa học viễn tưởng

4:11:29 và các bản thảo tĩnh tạo tiểu sử rất phù hợp cho các tình huống như sản phẩm nổi bật hoặc bài viết blog phổ biến

4:11:38 static PMS là một tính năng mạnh mẽ trong XS cho phép bạn dựng trước các tuyến tĩnh cho các phân đoạn động mà nó chạy khi xây dựng

4:11:46 Time xử lý nhiều phân đoạn Động và thực sự có thể nâng cao hiệu suất ứng dụng của bạn bằng cách đảm bảo rằng

4:11:52 Các trang truy cập đã được hiển thị sẵn và sẵn sàng phục vụ ngay lập tức, tôi cá là bạn đang thắc mắc điều gì xảy ra với các Trang

4:11:59 nơi ID không được bao gồm trong việc tạo tham số tĩnh, hãy cùng khám phá điều đó tiếp theo chúng ta đã học về

4:12:08 hàm tạo tham số tĩnh cho phép chúng ta dựng trước các tuyến tĩnh cho các đoạn động bằng cách trả về một mảng

4:12:15 các đối tượng mà các khóa khớp với tham số Dynamic route của chúng ta, trong ví dụ chúng ta trả về các đối tượng có giá trị ID là 1 2

4:12:23 và ba, nghĩa là tiếp theo chúng ta sẽ render trước các trang chi tiết sản phẩm cho ba sản phẩm này khi xây dựng

4:12:30 Khá đơn giản đúng không, nhưng đây là một câu hỏi thú vị: điều gì xảy ra khi ai đó cố gắng truy cập một sản phẩm

4:12:36 trang có ID không nằm trong danh sách hàm tạo tham số tĩnh như sản phẩm với ID 4, 5 v.v.

4:12:44 Nexs đã hỗ trợ chúng ta, nó vẫn sẽ hiển thị các trang đó, chỉ là không hiển thị trước mà sẽ hiển thị tĩnh tại

4:12:52 Thời gian chạy: Để tôi chỉ cho bạn ý tôi trong trình duyệt. Nếu chúng ta điều hướng đến/ sản phẩm sl4, bạn sẽ thấy trang vẫn hoạt động được.

4:13:02 Và nếu chúng ta kiểm tra thư mục build next server app products, chúng ta thấy 4. HTML tệp này được tạo vào thời điểm chạy khi

4:13:15 Chúng tôi đã truy cập / Sản phẩm SL4 và vì trang được hiển thị tĩnh nên dấu thời gian sẽ không thay đổi mỗi lần làm mới trang. Hãy thử

4:13:25 Một lần nữa, với sản phẩm SL SL5, lưu ý là không có năm người. Tệp HTML trong thư mục build của chúng tôi khi truy cập sản phẩm SL

4:13:35 sl5 sẽ tạo một tệp HTML mới với thời gian hiện tại và bạn có thể thấy tệp đó trong thư mục build 5

4:13:43 HTML tệp này được phục vụ cho khách hàng ngay bây giờ nexas thực sự cho chúng ta một số quyền kiểm soát hành vi này thông qua một thiết lập

4:13:51 gọi là tham số động mặc định Tham số động được đặt thành True, nghĩa là NEX sẽ hiển thị các trang tĩnh theo yêu cầu

4:14:00 đối với bất kỳ phân đoạn động nào không được bao gồm trong tạo parms tĩnh, nhưng đây là điểm thú vị chúng ta có thể đặt nó thành

4:14:07 fals báo cho NEX sh trả về lỗi 404 cho bất kỳ phân đoạn động nào không nằm trong danh sách dựng sẵn của chúng ta

4:14:15 nói đây là một hành động, tôi sẽ thay đổi tham số động thành false stop production build của chúng tôi và rebuild bằng lệnh npm

4:14:24 chạy build, khởi động máy chủ với np. chạy start ngay bây giờ, nếu chúng ta cố gắng vào các sản phẩm SL sl4, chúng ta sẽ nhận được một trang 404, tức là Dynamic

4:14:36 các tham số true và dynamic giá trị kiểm soát điều gì xảy ra khi phân đoạn động được truy cập, đó là

4:14:43 Không được tạo ra bằng Generate Static Patterms, giờ bạn có thể đang thắc mắc khi nào nên sử dụng từng tùy chọn tốt hơn

4:14:50 thực sự phụ thuộc vào trường hợp sử dụng của bạn, nếu bạn xây dựng một trang thương mại điện tử thì có lẽ bạn sẽ muốn giữ Dynamic

4:14:55 Patterms nói rằng True bằng cách này bạn có thể dựng trước các trang sản phẩm phổ biến nhất để có hiệu suất tốt hơn nhưng vẫn

4:15:02 Cho phép truy cập tất cả các sản phẩm khác của bạn, chúng sẽ được hiển thị theo yêu cầu nếu bạn làm việc với

4:15:08 một thứ gì đó giống như một Blog, nơi bạn có số trang nhỏ hơn, cố định hơn để bạn có thể render trước tất cả và thiết lập

4:15:15 Tham số động đến Falls, như vậy nếu ai đó cố truy cập một bài đăng blog không tồn tại, họ sẽ nhận được 404 sạch sẽ

4:15:22 lỗi, thay vì chờ một trang sẽ không bao giờ tồn tại, vậy đó là về PARM động, tóm lại là một

4:15:30 thiết lập đơn giản cho phép bạn kiểm soát mạnh mẽ cách Nexus xử lý các phân đoạn Động không được bao gồm

4:15:36 Trong phần Tạo mẫu tĩnh, hãy cùng khám phá chiến lược kết xuất máy chủ thứ ba và cuối cùng. Phát trực tiếp là một chiến lược

4:15:46 cho phép render giao diện Progressive UI từ công việc trên server được chia nhỏ thành các phần nhỏ hơn và stream đến client

4:15:52 Ngay khi chúng sẵn sàng, điều này có nghĩa là người dùng có thể xem các phần của trang ngay lập tức mà không phải chờ đợi mọi thứ

4:15:58 load it đặc biệt mạnh mẽ để cải thiện thời gian tải trang ban đầu và xử lý các thành phần giao diện người dùng phụ thuộc vào

4:16:04 việc lấy dữ liệu chậm hơn, điều này thường sẽ làm chậm toàn bộ tuyến đường, điều này có thể nghe quen thuộc nếu bạn nhớ lại

4:16:11 sự hồi hộp trong thảo luận SSR về reacts tạo ra sự khác biệt chính ở đây là chúng ta đang xem xét nó qua nexs

4:16:18 nơi streaming được tích hợp sẵn trong bộ định tuyến ứng dụng, để tôi chỉ cho bạn cách thiết lập ranh giới hồi hộp trong

4:16:24 Ứng dụng để tiết kiệm thời gian Tôi đã thiết lập một lộ trình gọi là product reviews, kết xuất ba phần tử và mỗi phần tử là một

4:16:32 nói rằng sản phẩm đánh giá một thành phần sản phẩm một thành phần đánh giá các thành phần này tồn tại trong nguồn của chúng tôi SL

4:16:39 thư mục components cho cả hai thành phần, tôi đã cố ý thêm độ trễ 2 giây cho thành phần sản phẩm và 4 giây

4:16:48 đối với phần đánh giá, độ trễ M này tạo ra cảm giác như chúng ta thực sự lấy dữ liệu với Dev của mình

4:16:55 máy chủ đang chạy nếu chúng tôi truy cập các đánh giá sản phẩm Hurst 3000 SL địa phương để bạn sẽ thấy trang

4:17:04 mất một thời gian để hiển thị bất cứ thứ gì, ngay cả phần tử H1, hãy kiểm tra tab mạng và bạn sẽ thấy các bài đánh giá sản phẩm

4:17:13 thời gian phản hồi của máy chủ là 6 giây, đó là vì nó lấy mọi thứ trước khi gửi bất cứ thứ gì. Hãy cải thiện

4:17:21 Điều này sử dụng chiến lược phát trực tuyến được hỗ trợ trong bộ định tuyến ứng dụng, rất đơn giản, chúng tôi chỉ cần quấn chậm hơn

4:17:28 Các thành phần với suspense và EXs xử lý phần còn lại ở vị trí cao nhất, nhập suspense từ react và wrap cả sản phẩm lẫn đánh giá

4:17:38 Các thành phần với thành phần hồi hộp trên thành phần suspense chỉ định prop dự phòng. Hãy dùng một cách đơn giản

4:17:45 thẻ đoạn văn ghi tải chi tiết sản phẩm và một đánh giá khác đang tải. Bây giờ hãy xem điều gì xảy ra khi chúng ta

4:17:55 reload: Tiêu đề xuất hiện ngay lập tức, tiếp theo là chi tiết sản phẩm sau 2 giây và cuối cùng là các đánh giá sau 4 giây

4:18:03 Trong giây lát khi các thành phần đang tải, chúng ta sẽ thấy văn bản dự phòng tải chi tiết sản phẩm và tải các đánh giá này

4:18:11 là Progressive HTML Ren đang hoạt động từ máy chủ đến máy khách và đó là phần kết của chúng ta về việc hiển thị máy chủ

4:18:18 Chiến lược trong XGS Chúng ta còn một chủ đề quan trọng nữa về render cần đề cập tiếp theo, vậy hãy cùng đi sâu vào chủ đề đó khi chúng ta đã xây dựng được một nền tảng vững chắc

4:18:29 Nền tảng hiểu rõ RSC và mô hình thành phần kép, đã đến lúc khám phá thành phần máy chủ và máy khách

4:18:35 patterns Tôi sẽ cung cấp cho bạn một cái nhìn tổng quan nhanh ở đây, sau đó chúng ta sẽ xem xét kỹ hơn các trường hợp sử dụng cụ thể cho server và

4:18:41 Các thành phần khách hàng khi chúng ta tiếp tục, hãy bắt đầu với các thành phần máy chủ, đây là lựa chọn hàng đầu của bạn cho một số tác vụ quan trọng

4:18:49 lấy dữ liệu, truy cập gói và tài nguyên trực tiếp, giữ an toàn thông tin nhạy cảm trên máy chủ và

4:18:56 xử lý các phụ thuộc lớn phía máy chủ, nghĩa là giảm JavaScript để người dùng tải về, chuyển sang máy khách

4:19:03 Các thành phần: Đây là những người bạn tốt nhất của bạn khi nói đến việc thêm xử lý tương tác, trình lắng nghe sự kiện quản lý trạng thái

4:19:09 và hiệu ứng vòng đời khi làm việc với API riêng của trình duyệt, triển khai hook tùy chỉnh hoặc sử dụng lớp react

4:19:16 Các thành phần, mặc dù những trường hợp sử dụng này nghe có vẻ đơn giản, thực ra còn rất nhiều điều cần phân tích về cách sử dụng

4:19:23 Những thành phần này thực chất cho phép chúng ta đi sâu hơn vào các mẫu tiếp theo cho thành phần máy chủ đầu tiên của chúng ta

4:19:31 mẫu, hãy nói về sự tách biệt mã serveron khi xây dựng các ứng dụng NS, một số mã được đặt cụ thể

4:19:38 Được thiết kế để chạy độc quyền trên máy chủ, hãy nghĩ về các module hoặc hàm S xử lý biến môi trường

4:19:44 giao tiếp trực tiếp với cơ sở dữ liệu hoặc xử lý thông tin nhạy cảm vì các mô-đun JavaScript có thể được chia sẻ giữa

4:19:52 mã thành phần máy chủ và máy khách dành cho máy chủ có thể vô tình tìm đến máy khách, đây là tin xấu

4:19:59 vì nó có thể làm hỏng gói JavaScript của bạn, làm lộ truy vấn cơ sở dữ liệu khóa bí mật và logic kinh doanh nhạy cảm của bạn, nên rất tuyệt

4:20:05 quan trọng là giữ mã serveron tách biệt với mã phía client, may mắn là có một giải pháp hay cho vấn đề này mà chúng ta có thể sử dụng

4:20:13 một gói có tên server only gây lỗi thời gian xây dựng nếu ai đó vô tình nhập mã máy chủ vào

4:20:20 Component client: Để tôi chỉ cho bạn cách hoạt động, hãy cùng vào mã VS và tạo hai thành phần. Đầu tiên, chúng ta sẽ tạo một trang SL route của máy chủ.

4:20:31 TSX với một thành phần react đơn giản xuất trang định tuyến hàm mặc định của máy chủ, trả về một H1 tag server route thì chúng ta

4:20:41 sẽ tạo lại trong thư mục một lần nữa trang SL định tuyến khách hàng.

4:20:47 TSX với một thành phần react khác thêm chỉ thị sử dụng client ở trên cùng xuất tuyến client mặc định

4:20:55 trả về một tuyến khách phần tử H1 ngay trong thư mục nguồn, hãy tạo một thư mục utils mới với một tệp mới gọi là server

4:21:05 utils dots server dấu gạch nối utils dots chúng ta sẽ tạo một hàm chỉ chạy trên máy chủ

4:21:15 Việc triển khai thực tế hiện tại không quan trọng, chúng ta chỉ muốn minh họa khái niệm, nên đây là một hàm với

4:21:21 câu lệnh loog và một giá trị trả về hàm phía máy chủ const console.log và một câu lệnh trả về này

4:21:30 chức năng có thể làm đủ loại việc phía máy chủ sử dụng các gói npm truy cập biến môi trường cho API

4:21:38 Khóa thực hiện các cuộc gọi cơ sở dữ liệu hoặc xử lý logic nghiệp vụ nhạy cảm và tính toán trước khi trả về giá trị

4:21:46 Việc triển khai hiện tại không quan trọng nhưng hãy sử dụng hàm này trong thành phần máy chủ của chúng ta. Vậy là trong máy chủ.

4:21:53 Trang tuyến đường. TSX nhập hàm site máy chủ từ util SLS server utils và trong phần thân hàm, kết quả const là

4:22:04 bằng với chức năng site máy chủ tìm kết quả trong H1 trên trình duyệt khi bạn truy cập dấu gạch nối máy chủ Local Host 3000 SLS

4:22:15 bạn sẽ thấy thông báo nhật ký với thẻ server và bạn cũng sẽ thấy chúng trong terminal, đó là vì

4:22:23 mã đang chạy trên máy chủ, chúng ta cũng thấy kết quả máy chủ là một phần của thẻ H1. Bây giờ điều gì xảy ra nếu chúng ta sử dụng.

4:22:31 Chức năng này trong thành phần khách hàng sao chép câu lệnh nhập và dán vào trang tuyến khách hàng. Kết quả TSX const là

4:22:41 tương đương với chức năng trang máy chủ và chúng tôi liên kết kết quả nếu bạn điều hướng đến/ định tuyến khách hàng bạn sẽ nhận thấy các thông báo nhật ký nhưng điều này

4:22:53 thời gian không có thẻ server trong tuyến terminal/client, chúng ta thấy các thông báo nhật ký nhưng lại thấy chúng trong

4:23:03 trình duyệt với tư cách là thành phần máy khách thực thi, đây chính xác là điều chúng tôi muốn ngăn chặn dựa trên bản chất của

4:23:10 thao tác trong chức năng bên của máy chủ Điều quan trọng là phải đảm bảo chỉ thực thi trên máy chủ nếu các mã này kết thúc

4:23:18 Trong gói khách hàng, bạn đang xem xét các vấn đề hiệu năng tiềm ẩn do kích thước gói lớn hơn và tính toán nặng

4:23:25 Rủi ro bảo mật từ logic nhạy cảm bị lộ và các lỗi chức năng có thể xảy ra khi mã riêng của máy chủ cố gắng chạy

4:23:31 Trong trình duyệt, đây là nơi gói server only có tác dụng, hãy cùng cài đặt nó với npm install server.

4:23:41 chỉ có dấu gạch nối khi đã cài đặt, nhập nó vào máy chủ của bạn, sử dụng tệp dots ở trên cùng, chỉ nhập dấu gạch nối máy chủ ngay bây giờ nếu có ai đó

4:23:54 cố gắng nhập module này vào một thành phần khách, bản dựng sẽ thất bại ngay lập tức, ngăn chặn bất kỳ khả năng nào

4:24:01 các vấn đề liên quan đến việc tiết lộ mã phía máy chủ cho máy khách giống như có một nhân viên bảo vệ ngăn chặn mã máy chủ

4:24:08 từ việc lén lút vào gói máy khách trong tóm tắt giữ mã chỉ máy chủ tách biệt với mã phía máy khách

4:24:15 không chỉ là thực hành tốt mà còn rất cần thiết cho hiệu suất bảo mật và độ tin cậy của gói chỉ dành cho máy chủ

4:24:22 Giúp thực thi sự tách biệt này, làm cho ứng dụng của bạn mạnh mẽ và an toàn hơn. Được rồi, hãy chuyển sang bước tiếp theo.

4:24:31 mẫu cho thành phần máy chủ thứ hai của chúng ta, mẫu hãy cùng khám phá cách làm việc với các gói của bên thứ ba các thành phần máy chủ có

4:24:39 Giới thiệu một mô hình mới đầy hứng khởi trong react và hệ thống EOS đang phát triển để theo kịp, các gói của bên thứ ba đang bắt đầu

4:24:45 để thêm chỉ thị sử dụng client vào các thành phần cần tính năng phía client, làm rõ vị trí của chúng

4:24:51 Nên chạy được, đây là vấn đề nhưng nhiều gói NPM vẫn chưa thực hiện chuyển đổi này, nghĩa là trong khi họ

4:24:57 hoạt động tốt trong các thành phần máy khách, chúng có thể bị hỏng hoặc hỏng hoàn toàn trong các thành phần máy chủ, nhưng đừng lo lắng thì có một

4:25:04 Giải pháp đơn giản: Chúng tôi có thể gói các thành phần bên thứ ba cần tính năng phía khách hàng vào khách hàng của chúng tôi

4:25:11 Các thành phần: Để tôi chỉ cho bạn cách hoạt động với một ví dụ thực tế. Chúng ta sẽ sử dụng React Slick, một thành phần Carousel phổ biến.

4:25:18 Từ NPM dựa vào các tính năng phía khách hàng để bắt đầu, hãy cùng cài đặt các gói cần thiết trong terminal

4:25:26 chạy lệnh npm install react dyphen slick slick Harel và add types SL react slick now chúng ta gặp lỗi vì chúng ta

4:25:36 đang sử dụng react 19, hãy chạy lệnh bằng cách thêm -- Force next, tôi sẽ mở ví dụ playground ở npm từ đây chúng ta sẽ lấy mẫu

4:25:49 Sao chép mã vào thanh trượt hình ảnh. Trang rout từ JSX sang Client.

4:25:56 TSX, đây là thành phần client, bắt đầu với Imports, sau đó là jsx, chúng ta có thể loại bỏ dòng import CSS

4:26:11 và thay vào đó sao chép thanh trượt CSS từ hình ảnh.

4:26:17 CSS lên toàn cầu.

4:26:22 CSS chuyển màu đen sang trắng vì chúng ta đang làm việc với chế độ tối trong jsx pleal kitten không còn hoạt động nữa, vậy hãy cùng làm việc với chế độ tối

4:26:32 Sử dụng Pix để làm ảnh thay vào đó. Khi bạn kiểm tra Localhost 3000 client route, bạn sẽ thấy một file hoạt động hoàn hảo.

4:26:45 Carousel, bây giờ chuyện gì xảy ra nếu chúng ta cố gắng sử dụng Carousel này trực tiếp trong một thành phần máy chủ, hãy dán cùng đoạn mã đó vào

4:26:53 Trang định tuyến máy chủ. TSX để trang Nhập và dán vào tuyến đường máy chủ.

4:27:01 TSX và sau đó là jsx sao chép và dán trong trình duyệt, khi chúng ta truy cập tuyến máy chủ SLS thì gặp phải một vấn đề tại sao lại là

4:27:19 thành phần slider sử dụng các tính năng phía khách hàng nhưng thư viện không bao gồm chỉ thị sử dụng máy khách, chắc chắn chúng ta

4:27:27 Có thể thêm user client vào tuyến server của chúng ta nhưng điều đó đồng nghĩa với việc phải từ bỏ các khả năng quan trọng của SERs như cơ sở dữ liệu

4:27:34 gọi truy cập vào biến môi trường bí mật, v.v. Để giải quyết điều này, bạn phải đóng gói các thành phần bên thứ ba mà

4:27:41 phụ thuộc vào các tính năng chỉ phụ thuộc vào khách hàng trong thành phần khách hàng của bạn, vì vậy trong thư mục thành phần tạo một tệp mới

4:27:49 Thanh trượt hình ảnh. TSX, chúng ta sẽ sử dụng cùng mã Carousel nhưng thêm chỉ thị use C ở phía trên, chúng ta cũng sẽ đổi tên

4:28:00 điều này đến thanh trượt hình ảnh như một xuất có tên bây giờ thành phần máy chủ của chúng ta có thể được làm sạch để chỉ cần sử dụng hình ảnh

4:28:15 thành phần slider nhập nó ở phía trên và gọi nó như một phần của hàm trang máy chủ jsx của chúng ta có thể được

4:28:23 đã khôi phục thành phần thanh trượt hình ảnh của chúng tôi có thể được nhập và có thể được đưa vào JSX, chúng tôi vẫn còn một máy chủ

4:28:30 thành phần nhưng bây giờ có một phần tử hoạt động như thành phần khách hàng kiểm tra lại trình duyệt và ta thấy thành phần đó

4:28:38 hoạt động như mong đợi, route máy chủ theo sau là kết quả máy chủ và chúng ta có carousel, chỉ thấy một hình ảnh duy nhất

4:28:46 Từ Pixum nhưng nếu bạn làm việc với ảnh cục bộ thì bạn sẽ thấy tất cả chúng trong các gói bên thứ ba tóm tắt trong React

4:28:53 Hệ sinh thái đang trong giai đoạn chuyển tiếp khi nhiều thành phần từ các gói NPM chưa áp dụng cách sử dụng

4:28:59 Chỉ thị khách hàng Việc bao bọc các thành phần như vậy trong các thành phần khách hàng của chính chúng tôi sẽ cho phép chúng tôi tận dụng hệ sinh thái

4:29:07 của các gói bên thứ ba trong khi tuân thủ mô hình thành phần máy chủ mới. Được rồi, chúng ta có thêm một thành phần Ser nữa.

4:29:14 Mẫu cần bao quát Hãy cùng xem tiếp theo đó là gì cho thành phần máy chủ cuối cùng của chúng ta Mẫu Hãy cùng khám phá cách làm việc với

4:29:23 Các nhà cung cấp ngữ cảnh Nếu bạn quen với React, bạn sẽ biết rằng các nhà cung cấp ngữ cảnh thường sống gần gốc

4:29:30 của một ứng dụng để chia sẻ Global State và Logic, ví dụ như giao diện của ứng dụng của bạn, tuy nhiên có một vấn đề với

4:29:38 Ngữ cảnh react của kiến trúc RSC không được hỗ trợ trong các thành phần máy chủ nếu bạn cố gắng tạo một ngữ cảnh tại

4:29:45 Tuyến ứng dụng bạn sẽ gặp lỗi, giải pháp là tạo ngữ cảnh của bạn và hiển thị nhà cung cấp của nó bên trong một

4:29:52 Thành phần client chuyên dụng, để tôi chỉ cho bạn cách điều này hoạt động so với mã nguồn mà chúng ta bắt đầu với bố cục. TSX trong thư mục ứng dụng tại đây

4:30:00 Hãy thiết lập và cung cấp một ngữ cảnh chủ đề mà toàn bộ ứng dụng của chúng ta có thể sử dụng, nhập tạo ngữ cảnh từ React

4:30:12 tiếp theo, chúng ta Định nghĩa kiểu chủ đề có màu sắc làm đối tượng chính, chuỗi kiểu và thứ cấp của chuỗi kiểu

4:30:22 tiếp theo, chúng ta Định nghĩa chủ đề mặc định để chủ đề mặc định là loại màu chủ đề đối tượng Định nghĩa một màu chính và một

4:30:33 màu thứ cấp tiếp theo, chúng ta định nghĩa const theme context bằng để tạo context kiểu theme và cuối cùng chúng ta chuyển giao diện mặc định

4:30:47 chúng ta bao bọc thẻ body bằng ngữ cảnh theme giá trị do provider bằng theme mặc định và chúng ta thêm thẻ đóng khi chúng ta

4:31:00 Lưu cái này và kiểm tra trình duyệt của chúng tôi. Chúng tôi sẽ thấy lỗi. Bạn đang nhập một thành phần cần tạo ngữ cảnh này.

4:31:07 React Hook chỉ hoạt động trong thành phần client, giờ chúng ta có thể thêm chỉ thị client để tạo layout. TSX một client

4:31:14 nhưng điều đó sẽ yêu cầu Nex chạy component này và tất cả những gì nó nhập trên phía client mà không phải

4:31:21 Thay vào đó, hãy tạo một context và render provider của nó trong một component client riêng biệt trong

4:31:28 Thư mục components: Hãy tạo một tệp mới gọi là Theme Hyphen Provider.

4:31:35 TSX vì chúng ta đã xem mã rồi, tôi sẽ dán nó vào đây để tiết kiệm thời gian, hãy cùng phân tích vấn đề này

4:31:42 Chúng ta đã có Type Default Theme và Theme Context Creation giống như trước, giờ xuất một thành phần Theme Provider để hiển thị Theme Context.

4:31:53 nhà cung cấp với giá trị giao diện mặc định của chúng tôi và hiển thị bất kỳ con nào chuyển sang đó, tôi cũng đã thêm một giao diện đã qua sử dụng tiện lợi

4:32:01 hook mà bất kỳ thành phần nào cũng có thể sử dụng để truy cập theme, nhưng phần quan trọng nhất là chỉ thị sử dụng Clan tại

4:32:07 Mặt trên trở lại trong bố cục. TSX, giờ đây chúng ta có thể đơn giản hóa mã của mình với trình cung cấp giao diện, xóa và tạo nhập ngữ cảnh

4:32:16 và thay vào đó nhập Nhà cung cấp giao diện từ nhà cung cấp giao diện của chúng tôi. Tệp TSX xóa mã cho type theme

4:32:25 chủ đề mặc định, tạo ngữ cảnh và cho jsx, chỉ định thành phần trình cung cấp chủ đề để kiểm tra điều này, hãy sử dụng

4:32:34 Ngữ cảnh chủ đề trong trang Client Route So In Page. TSX là thành phần khách hàng nhập chủ đề sử dụng

4:32:43 Hook và sử dụng nó để truy cập chủ đề, chủ đề const bằng với use theme và đối với jsx, chúng ta sẽ xóa carousel

4:32:52 mã hóa và áp dụng màu chính cho trang tuyến L của phần tử H1 và chúng ta sẽ chỉ định chủ đề màu kiểu nội tuyến.

4:33:03 màu sắc.

4:33:05 thành phần chính giờ đây là một thành phần rất đơn giản trong trình duyệt từ đầu đến vạch khách hàng và bạn sẽ thấy

4:33:14 trang định tuyến khách hàng ở màu xanh dương chính của chúng tôi, chuyển sang màu phụ và nó chuyển sang màu xám, nhà cung cấp giao diện của chúng tôi hiện đang hoạt động như mong đợi tại đây

4:33:27 là điều quan trọng cần lưu ý mặc dù chúng ta đang bao bọc ứng dụng của mình trong một thành phần khách hàng mà

4:33:34 Các thành phần máy chủ nhà cung cấp chủ đề ở phía dưới là các thành phần máy chủ, chúng ta sẽ khám phá khái niệm này

4:33:41 sẽ đi sâu hơn trong thời gian tới, nhưng đây là chìa khóa để làm việc với các nhà cung cấp ngữ cảnh và các thành phần máy chủ thay vì

4:33:48 chuyển đổi thành phần máy chủ của bạn thành thành phần máy khách tạo một thành phần máy khách mới và sử dụng nó trong máy chủ của bạn

4:33:54 Component với các props con, nếu bạn dùng React phiên bản 19, bạn có thể render chỉ context như một provider thay vì context. Nhà cung cấp nên

4:34:06 Bối cảnh chủ đề. nhà cung cấp có thể được hiển thị chỉ là ngữ cảnh chủ đề vào trình duyệt làm mới và bạn sẽ tiếp tục

4:34:14 Xem kết quả tương tự. Tiếp theo, hãy cùng khám phá các mẫu thành phần khách hàng cho thành phần khách hàng đầu tiên của chúng ta.

4:34:24 mẫu: hãy nói về sự tách biệt mã chỉ dành cho khách hàng, trước đó chúng ta đã xem xét mã chỉ dành cho máy chủ trong các ứng dụng nexs.

4:34:31 Và bây giờ chúng ta sẽ đảo ngược mọi thứ và tập trung vào mã chỉ dành cho client giống như cách chúng ta cần giữ an toàn

4:34:37 phía máy chủ vận hành, việc giữ một số chức năng hoàn toàn ở phía máy khách cũng quan trọng không kém.

4:34:43 chính xác là mã phía client, đúng là mã hoạt động với các tính năng đặc thù của trình duyệt như cửa sổ thao tác Dom

4:34:50 tương tác đối tượng hoặc thao tác lưu trữ cục bộ Các tính năng này không có trên máy chủ nên chúng ta cần

4:34:56 đảm bảo mã như vậy chỉ chạy ở phía máy khách để tránh lỗi hiển thị phía máy chủ nhằm tránh các lỗi không mong muốn

4:35:03 Sử dụng mã phía máy chủ, chúng ta có thể dùng một gói gọi là Client, hãy cùng tìm hiểu mã VS và hiểu

4:35:10 với ví dụ từ trước, chúng ta có server route là thành phần máy chủ và client route hiện là thành phần máy khách

4:35:20 hãy thêm một hàm chỉ dành cho khách hàng trong thư mục nguồn, bên trong thư mục utils, tạo một tệp mới gọi là client u. TS chúng ta

4:35:30 sẽ Định nghĩa một hàm chỉ chạy trên phía client, việc triển khai thực tế hiện tại không quan trọng

4:35:37 Chúng ta chỉ muốn minh họa khái niệm này, đây là một hàm đơn giản với câu lệnh khóa và một giá trị trả về xuất ra

4:35:43 hàm phía client const console.log sử dụng đối tượng window, sử dụng bộ nhớ cục bộ và trả về kết quả của khách hàng chức năng này

4:35:52 có thể sử dụng bất kỳ tính năng riêng của trình duyệt nào như cửa sổ hoặc lưu trữ cục bộ mà không hoạt động ở phía máy chủ, hãy nhập vào

4:35:59 và sử dụng chức năng này trong thành phần Client Route ở phía trên, nhập chức năng phía client từ MS/Client Details

4:36:09 và trong component const kết quả bằng hàm phía client, chúng ta sẽ hiển thị một thẻ đoạn văn cho kết quả

4:36:20 khi bạn chạy điều này trong trình duyệt, bạn sẽ thấy các thông báo nhật ký xuất hiện trong bảng điều khiển, sử dụng đối tượng cửa sổ sử dụng cục bộ.

4:36:27 lưu trữ chúng ta cũng thấy kết quả client được hiển thị trong giao diện người dùng, không có thẻ máy chủ đặc biệt và điều này xác nhận

4:36:34 mọi thứ đang chạy phía client như kế hoạch, giờ hãy bảo vệ mã chỉ client của chúng ta, bắt đầu bằng cách cài đặt client

4:36:43 chỉ gói trong terminal của bạn chạy lệnh npm install client dấu gạch nối chỉ khi bạn gặp lỗi chỉ định --

4:36:55 Ép sau khi lệnh hoàn tất, nhập nó ở đầu tệp khách hàng .ts để chỉ nhập khách hàng khi chúng tôi chỉ nhập khách hàng trong một mô-đun

4:37:08 nó tạo ra một mạng lưới an toàn nếu ai đó cố gắng sử dụng mã này trên site máy chủ, nó sẽ thất bại khi xây dựng, hãy nhập và

4:37:15 Sử dụng hàm trang khách này trong trang Server Rout. TSX, sao chép câu lệnh nhập và dán nó sao chép

4:37:27 gọi dán nó gọi kết quả khách hàng này và hiển thị nó như một phần của thẻ H1, lưu tệp và trong terminal

4:37:37 bạn sẽ thấy lỗi khi bạn đang nhập một thành phần mà Imports Client only, nó chỉ hoạt động trong thành phần client nhưng

4:37:44 không có thành phần cha nào được đánh dấu sử dụng client nên các thành phần máy chủ theo mặc định, lỗi này hoạt động như một lệnh làm sạch

4:37:50 báo hiệu cho các nhà phát triển về việc sử dụng mã đặc thù của máy khách không phù hợp trong bối cảnh máy chủ, bạn cũng sẽ

4:37:57 nhận thấy lỗi tương tự khi bạn điều hướng đến/định tuyến máy chủ thay vì gặp sự cố khi ứng dụng của bạn là

4:38:04 khi chạy bạn sẽ phát hiện các vấn đề này sớm trong quá trình phát triển trong phần tóm tắt giống như mã máy chủ chỉ cần máy khách cô lập

4:38:12 chỉ mã cần ở phía máy khách, nơi nó có thể sử dụng đúng các tính năng trình duyệt, gói chỉ máy khách hoạt động như vậy

4:38:18 Mạng lưới an toàn của chúng tôi đảm bảo mã phía khách hàng luôn ở đúng vị trí của nó, giúp ứng dụng của chúng tôi đáng tin cậy hơn và

4:38:25 Dễ bảo trì hơn. Được rồi, hãy chuyển sang mẫu thành phần khách hàng tiếp theo, hãy cùng khám phá mẫu thứ hai và

4:38:33 Mẫu thành phần khách hàng cuối cùng Vị trí chiến lược của các thành phần khách hàng trong cây thành phần của bạn, điều này rất tuyệt

4:38:41 quan trọng để tối ưu hóa hiệu suất ứng dụng của bạn vì các thành phần máy chủ không thể xử lý trạng thái và

4:38:46 tính tương tác, chúng ta cần các thành phần khách hàng để lấp đầy khoảng trống. Khuyến nghị chính ở đây là định vị các thành phần khách hàng này.

4:38:52 Các thành phần thấp hơn trong thành phần của bạn Tre để tôi chỉ cho bạn lý do tại sao điều này quan trọng Tôi đã chuẩn bị một số mã để trình diễn khái niệm này

4:39:00 Trong dự án của chúng tôi, tôi đã thiết lập một tuyến mới gọi là trang đích và cũng tạo ba thành phần mới trong các thành phần đó

4:39:06 Thanh điều hướng thư mục Tìm kiếm điều hướng và liên kết điều hướng Trước khi chúng ta đi sâu vào mã nguồn, hãy để tôi giải thích chúng ta đang xây dựng gì Hình ảnh A

4:39:15 trang đích với thanh điều hướng ở trên cùng và khu vực nội dung chính bên dưới, chúng tôi sẽ tập trung vào Navar hôm nay nó bao gồm

4:39:23 một lớp bọc ngoài, chính là thành phần Navar, chứa hai liên kết điều hướng thành phần bên trong để điều hướng

4:39:30 tìm kiếm liên kết và điều hướng với thanh tìm kiếm cho phép người dùng tìm kiếm trên trang web của chúng tôi, điều này tạo thành một thành phần đơn giản Tre the

4:39:38 thành phần trang đích nằm ở trên cùng với một thành phần điều hướng vì các thành phần con của nó tôi đã triển khai cấu trúc này rồi

4:39:45 Trong ứng dụng Nexts của chúng tôi, để tôi hướng dẫn bạn qua các thành phần trang đích, bạn sẽ nhận thấy chúng tôi đã nhập

4:39:52 thành phần Navar ở phía trên bên trong thành phần Navar này chúng tôi đã mang cả liên kết điều hướng và tìm kiếm điều hướng này

4:40:00 các thành phần chỉ đơn giản là xuất văn bản cho danh sách Now danh sách liên kết điều hướng, đầu vào tìm kiếm điều hướng, mỗi thành phần đều bao gồm nhật ký bảng điều khiển để hiển thị

4:40:09 khi nó hiển thị nhật ký console, Navar hiển thị liên kết điều hướng và tìm kiếm điều hướng được hiển thị, đừng quá lo lắng

4:40:17 Về chi tiết triển khai cụ thể, vì chúng ta đang tập trung vào việc hiểu cấu trúc thành phần, hãy cùng kiểm tra điều này trên trình duyệt

4:40:25 Đi đến trang đích slash, hãy xem bảng điều khiển công cụ phát triển và bạn sẽ thấy các câu lệnh khóa với thẻ máy chủ

4:40:33 vì đây đều là các thành phần của máy chủ, bạn có thể xác nhận điều này bằng cách nhìn vào terminal, nơi bạn sẽ phát hiện cùng một khóa

4:40:40 Câu lệnh Navar đã hiển thị liên kết điều hướng đã hiển thị và tìm kiếm điều hướng đã hiển thị ngay bây giờ thanh tìm kiếm của chúng ta không có bất kỳ trạng thái nào liên kết

4:40:50 Với nó, hãy giới thiệu một biến trạng thái để theo dõi giá trị đầu vào tìm kiếm, chúng ta sẽ làm điều này trong thành phần navbar

4:40:58 nhập use state từ react và gọi use state hook gọi là search set search initial value string rỗng khi chúng ta lưu cái này we

4:41:11 nhận lỗi thành phần navbar của chúng ta không được đánh dấu là thành phần khách hàng Hãy sửa điều đó bằng cách thêm chỉ thị sử dụng khách hàng

4:41:18 ở phía trên, sau khi lưu và làm mới, chúng ta sẽ thấy các câu lệnh khóa phía khách hàng trong trình duyệt cho cả ba thành phần, giờ là thanh

4:41:28 Các liên kết đã render Now đã hiển thị tất cả các liên kết mà không có thẻ server và đừng lo lắng về việc xem

4:41:34 khóa hai lần, đó chỉ là chế độ phản ứng nghiêm ngặt trong phát triển, nhưng đây là một suy nghĩ nếu client CL của bạn được khai báo trong

4:41:42 thành phần Navar không phải là thành phần duy nhất chạy phía client sao? Đây là một hiểu lầm phổ biến khi

4:41:49 bạn đánh dấu một thành phần bằng client đã sử dụng, nó không chỉ ảnh hưởng đến thành phần đó mà còn ảnh hưởng đến mọi thành phần con trong

4:41:57 thành phần Tre bên dưới trong trường hợp của chúng tôi, liên kết điều hướng và tìm kiếm điều hướng trở thành các thành phần khách hàng cũng như hãy nghĩ đến việc sử dụng khách hàng

4:42:04 vì việc vẽ một đường trong cây thành phần và mọi thứ bên dưới đường đó chạy ở phía khách hàng, điều quan trọng là phải

4:42:11 Hãy hiểu khái niệm này đặc biệt khi bạn làm việc với cây component lớn hơn nếu bạn chuyển đổi cấp cao

4:42:16 Component vào component khách, chỉ để thêm tính tương tác, bạn vô tình làm cả cây con của nó

4:42:23 con cái cũng chạy trên máy khách, điều này đồng nghĩa với việc gửi thêm mã đến trình duyệt và mất đi lợi ích của máy chủ

4:42:29 các thành phần, đó là lý do chúng tôi muốn đẩy các thành phần khách hàng xuống càng xa càng tốt, lý tưởng là biến chúng thành Lá

4:42:36 trong trường hợp của chúng ta, chúng ta có thể cải thiện điều này, thay vì biến Navar thành thành phần khách hàng, chúng ta có thể giữ nó như một

4:42:44 thành phần máy chủ và chỉ cần chuyển đổi tìm kiếm điều hướng sang thành phần client, đó là thành phần duy nhất thực sự cần trả lại trạng thái

4:42:51 trong VS Code, hãy chuyển use client sang tìm kiếm điều hướng cùng với trạng thái, use state hook cũng như trong trình duyệt, tải lại trang và

4:43:08 bạn sẽ chỉ thấy tìm kiếm điều hướng chạy ở phía client, các liên kết Navar và điều hướng có thẻ server, vậy là như vậy

4:43:16 Vị trí thành phần khách hàng trong bộ định tuyến ứng dụng Hãy cùng kết thúc phần này về rendering bằng cách đi sâu vào các thành phần được hỗ trợ

4:43:25 và các mẫu không được hỗ trợ của việc rời khỏi các thành phần máy chủ và khách hàng trong tiếp theo, tin tôi đi, điều này dễ hiểu nhất

4:43:32 qua các ví dụ, vậy hãy bắt đầu ngay lập tức, trước tiên hãy tạo một route mới gọi là inter leing trong thư mục ứng dụng.

4:43:41 Thêm một trang. TSX bên trong chúng ta sẽ cần một vài thành phần để minh họa điều này, nên trong các thành phần

4:43:49 Thư mục: Hãy tạo cả thành phần máy chủ và máy khách, hãy bắt đầu với thành phần máy chủ của chúng ta, tạo thành phần máy chủ 1.

4:44:00 TSX, hãy đặt tên nó là component máy chủ một, export, const, component máy chủ một, và đây là một hàm trả về một H1

4:44:10 Tag Server component One, chúng ta cũng bao gồm một thao tác chỉ máy chủ như hệ thống tệp, đọc thành phần này ở đầu

4:44:20 nhập mô-đun FS và trong thành phần gọi FS. đồng bộ readfile truyền theo đường dẫn và utf8 là thứ hai

4:44:28 đối số: chúng ta không quan tâm đến kết quả của phương thức read file này nên có thể bỏ qua phép gán, đây là của chúng ta.

4:44:35 thành phần máy chủ đầu tiên nhân bản tệp này để sao chép và dán và đặt tên cho nó thành phần máy chủ 2 cập nhật tên thành phần cũng như

4:44:48 Tham số read file là thành phần máy chủ 2, thành phần máy chủ 2. TSX và thành phần máy chủ H1 2 hiện nay cho chúng tôi

4:44:58 Thành phần khách hàng trong cùng thư mục thành phần tạo dấu gạch nối 1 của thành phần iph khách hàng. TSX và gọi tên nó đi

4:45:08 thành phần máy khách một xuất const thành phần máy khách một và điều này tương đương với một hàm trả về một máy khách thẻ H1

4:45:19 thành phần một ở đây bao gồm một thao tác chỉ dành cho client như use State call, vì vậy hãy thêm chỉ thị use Cent ở đầu nhập

4:45:29 sử dụng trạng thái từ react và gọi nó trong tên thành phần, tên tập hợp phẩy bằng với sử dụng trạng thái và

4:45:37 giá trị ban đầu là Batman, một lần nữa chúng ta không lo lắng về việc sử dụng biến trạng thái hay hàm seter

4:45:44 trong thành phần của chúng tôi, đây là thành phần khách hàng đầu tiên, hãy sao chép tệp này để sao chép và đổi tên tệp này thành

4:45:54 Thành phần khách hàng 2. TSX cập nhật tên thành phần và bây giờ jsx hãy định nghĩa một thành phần trong trang rời rạc. Xuất tệp TSX

4:46:06 hàm mặc định ENT rời khỏi trang và chúng ta trả về và H1 tag inter leaving page khi tất cả các thành phần đã sẵn sàng

4:46:16 hãy cùng khám phá các mẫu tương tác khác nhau, trước tiên là thành phần máy chủ nằm trong một thành phần máy chủ khác, bây giờ chúng ta

4:46:24 Interleaving route đã là một thành phần máy chủ nhưng hãy tận dụng các thành phần khác vừa tạo ra

4:46:31 Ở trên cùng, nhập thành phần máy chủ một vào trang.

4:46:38 TSX gọi nó rồi trong thành phần máy chủ Một, nhập thành phần máy chủ 2 và đưa nó vào jsx, như H1, thành phần máy chủ một, rồi

4:46:51 thành phần máy chủ thứ hai trong trình duyệt điều hướng đến slash inter left và bạn sẽ thấy tuyến đường hoạt động mà không cần bất kỳ

4:46:59 issue thành phần máy chủ 2 lồng bên trong thành phần máy chủ một được lồng bên trong thành phần leing đầu tiên

4:47:07 mẫu thành phần máy chủ bên trong thành phần máy chủ khác hoạt động như mong đợi, mẫu thứ hai là máy khách

4:47:14 Thành phần bên trong một thành phần khách hàng khác nên trong trang. TSX trong thành phần nhập thư mục giữa thư mục

4:47:23 một và gọi nó sau đó Nest client component hai bên trong client component one để nhập client component

4:47:33 hai gói mỗi cái bằng react fragment và gọi component client để kiểm tra trình duyệt, bạn có thể thấy điều này hoạt động hoàn hảo

4:47:43 Fine cũng như thành phần khách hàng 2 lồng bên trong thành phần khách hàng, một thành phần lồng bên trong trang thứ hai của chúng ta

4:47:51 mẫu thành phần khách hàng bên trong thành phần khách hàng cũng hoạt động hoàn hảo, mẫu thứ ba là khách hàng

4:47:58 Thành phần bên trong thành phần máy chủ nên nhập thành phần máy chủ một vào trang.

4:48:07 TSX rồi thành phần client tiếp theo, một bên trong component máy chủ. Nhập component client một và gọi client component

4:48:17 thành phần một, kiểm tra trình duyệt và bạn có thể thấy mẫu này cũng hoạt động bình thường, thành phần khách hàng 2 là

4:48:25 hiện đang lồng bên trong thành phần máy khách một được lồng bên trong thành phần máy chủ một được lồng bên trong

4:48:32 thành phần trang interliving để mẫu thứ ba của thành phần khách hàng bên trong thành phần máy chủ cuối cùng hoạt động hoàn hảo

4:48:40 Hãy cùng xem xét thành phần máy chủ bên trong một thành phần khách hàng, tức là trong trang Interleing. Thành phần khách hàng nhập TSX

4:48:53 một rồi thành phần máy chủ Nest một bên trong thành phần khách hàng Nhập thành phần máy chủ một và gọi

4:49:04 khi bạn lưu tệp và kiểm tra trình duyệt, bạn sẽ thấy một module lỗi không thể giải quyết FS vì bất kỳ

4:49:14 thành phần lồng bên trong thành phần máy khách cũng tự động trở thành thành phần máy khách vì các thành phần máy khách

4:49:21 kết xuất sau các thành phần máy chủ bạn không thể nhập trực tiếp thành phần máy chủ vào thành phần khách ngay cả khi máy chủ

4:49:29 thành phần một được định nghĩa là thành phần máy chủ khi nó được lồng bên trong một thành phần máy khách, nó chuyển đổi thành một

4:49:37 thành phần máy khách được thực thi phía máy khách trong môi trường máy khách không có mô-đun hệ thống tệp và do đó

4:49:44 lỗi vì vậy điều quan trọng là phải nhớ rằng việc nhập một thành phần máy chủ vào thành phần máy khách là một mẫu không phải

4:49:53 được hỗ trợ trong XJS nhưng đừng lo, có một cách khắc phục hay thay vì lồng thành phần máy chủ, hãy truyền nó làm prop

4:50:02 đối với thành phần khách, một cách tiếp cận phổ biến là sử dụng prop con của reacts để tạo cái gọi là slot nên trong

4:50:09 Rời khỏi trang xen kẽ. TSX truyền thành phần máy chủ một làm prop con cho thành phần máy khách một mở và đóng

4:50:18 Tag và Nest server component one trong client component one chỉ định prop con kiểu react. nút phản ứng và

4:50:29 thay vì nhập và gọi thành phần máy chủ một, chúng ta chỉ định các prop con: kiểm tra trình duyệt ngay bây giờ và

4:50:38 mọi thứ hoạt động tốt C component lồng bên trong component máy chủ, thành phần này lồng bên trong component client, đây là

4:50:46 mẫu được khuyến nghị để xen kẽ các thành phần máy chủ và máy khách trong XJS và hãy nhớ rằng bạn không bị giới hạn chỉ ở

4:50:53 Prop trẻ em Bạn có thể sử dụng bất kỳ prop nào trên thành phần client, điều này dẫn chúng ta đến cuối phần thứ hai, đó là một

4:51:00 Phân tích sâu về render trong XS, chúng tôi đã đề cập đến mọi thứ từ CSR và SSR đến suspense, kết xuất các loại thành phần của rsc

4:51:09 Chu kỳ sống, kết xuất tĩnh và động, luồng và các mẫu composition này, bạn nên nắm vững cách làm

4:51:18 Hiển thị trong bộ định tuyến ứng dụng năm sau, còn rất nhiều điều hấp dẫn nữa cho năm sau, nên hãy đón chờ

4:51:24 Trong phần tiếp theo của hai phần trước, chúng ta đã đề cập đến định tuyến và render. Bây giờ hãy cùng đi sâu vào phần thứ ba về dữ liệu.

4:51:34 fetching và mutation trong XS Cho đến nay chúng tôi đã làm việc với nội dung được mã hóa cứng trong các tuyến và thành phần, nhưng thực tế mà nói

4:51:44 Ứng dụng doanh nghiệp, bạn thường lấy dữ liệu từ các nguồn bên ngoài, bộ định tuyến ứng dụng được xây dựng trên React Server

4:51:50 kiến trúc thành phần cho phép chúng tôi linh hoạt để lấy dữ liệu bằng các thành phần máy chủ hoặc máy khách

4:51:57 Tuy nhiên, thường tốt hơn là sử dụng các thành phần máy chủ cho các thao tác dữ liệu vì bạn có thể trực tiếp

4:52:04 giao tiếp với cơ sở dữ liệu và hệ thống tệp của bạn ở phía máy chủ, bạn có thể đạt hiệu suất tốt hơn vì bạn gần hơn với

4:52:11 Nguồn dữ liệu của bạn, gói phía khách hàng của bạn luôn gọn gàng vì phần việc nặng nhọc diễn ra phía máy chủ và bạn

4:52:18 các thao tác nhạy cảm và khóa apepi vẫn được bảo mật trên máy chủ trong suốt phần thứ ba này. Tôi sẽ hướng dẫn bạn cách

4:52:25 xử lý dữ liệu ở cả thành phần máy khách và máy chủ nhưng chúng tôi chủ yếu tập trung vào các thành phần máy chủ để bắt đầu với

4:52:33 phần về lấy dữ liệu. Tôi đã thiết lập một dự án mới cho năm sau trong VS code, sử dụng lệnh trong X create next

4:52:41 ứng dụng mới nhất là bản demo lấy dấu gạch nối TAA hãy tiến hành và chạy lệnh này, bạn sẽ có cùng một dự án.

4:52:50 Bây giờ khi chúng ta đã thiết lập xong, hãy cùng tìm hiểu về việc lấy dữ liệu với SHS tiếp theo, hãy cùng tìm hiểu cách lấy dữ liệu trong

4:52:58 Router ứng dụng tiếp theo, trước tiên chúng ta cần một số dữ liệu thực sự để làm việc. Tôi sẽ giới thiệu với bạn về Json.

4:53:05 một dịch vụ API giả miễn phí cung cấp dữ liệu giả để chúng tôi thử nghiệm nếu bạn chuyển sang Json

4:53:12 Placeholder nhập code.com và xem phần tài nguyên của họ, bạn sẽ thấy một điểm cuối của người dùng, điều này cho chúng ta một phần liền kề

4:53:22 mảng gồm 10 người dùng với các thông tin khác nhau, chúng ta sẽ lấy dữ liệu này và hiển thị tên người dùng, email của từng người dùng.

4:53:31 và số điện thoại trong ứng dụng NEXS của chúng tôi, trong khi NEXS thực sự tỏa sáng với việc lấy dữ liệu trong các thành phần máy chủ mà chúng tôi

4:53:40 Sẽ nói sau, hãy bắt đầu với điều mà bạn có thể quen thuộc hơn với việc lấy dữ liệu phía khách hàng nếu bạn đã

4:53:46 đã hoàn thành việc lấy dữ liệu trong react trước khi bạn cảm thấy như ở nhà. Hãy bắt đầu trong thư mục ứng dụng của bạn, tạo một thư mục mới.

4:53:53 gọi Users client và thêm một trang. Tệp TSX bên trong tôi chọn client tên người dùng vì chúng ta đang xử lý người dùng

4:54:03 dữ liệu trong thành phần khách hàng nhưng bạn có thể đặt tên theo ý muốn, mã chúng ta sắp viết sẽ trông đẹp mắt

4:54:09 Bạn đã quen nếu bạn từng làm việc với react trước đây, vậy chúng ta sẽ đi qua với tốc độ tốt. Trước tiên, hãy định nghĩa kiểu typescript của chúng ta.

4:54:16 đối với người dùng, chúng tôi sẽ giữ đơn giản và chỉ bao gồm các trường mà chúng tôi quan tâm, gõ: người dùng chứa ID, tên, tên người dùng.

4:54:25 Email và số điện thoại cho thành phần của chúng tôi, chúng tôi sẽ gọi đó là UsersClient, vì vậy xuất hàm mặc định Users Client mà chúng tôi cần

4:54:35 ba phần trạng thái trong thành phần này là người dùng để lưu trữ người dùng đã lấy tải nhằm theo dõi xem người dùng có đang

4:54:42 đang được lấy và lỗi để lưu các thông báo lỗi đừng quên nhập trạng thái sử dụng từ react tiếp theo chúng ta sẽ sử dụng

4:54:50 dùng hiệu ứng để lấy người dùng khi component mount, import use effect từ react và trong component tôi đang đi

4:54:58 để dán mã cho hiệu ứng sử dụng bên trong use effect hug của chúng ta, chúng ta có một hàm Asing gọi là Fetch users

4:55:06 lấy dữ liệu người dùng từ API giữ chỗ của Json, đây là cùng URL mà chúng ta đã thấy trước đó, giữ chỗ Jon Doty

4:55:14 code.com người dùng, nếu có sự cố với phản hồi, chúng tôi sẽ báo lỗi là không thể truy xuất người dùng và cập nhật lỗi

4:55:24 Nêu với bất kỳ lỗi nào. thông báo hoặc lỗi không xác định đã xảy ra nếu mọi thứ diễn ra suôn sẻ, chúng tôi sẽ cập nhật trạng thái người dùng

4:55:32 với dữ liệu nhận được, dù sao cũng đặt tải là false khi hoàn tất, chúng tôi gọi hàm này là fetch users right

4:55:39 Tránh khỏi hiệu ứng sử dụng phụ khi component được mount cho giao diện người dùng, chúng tôi sẽ xử lý từng trạng thái phù hợp nếu bạn vẫn

4:55:47 Đang tải, chúng tôi sẽ hiển thị thông báo đang tải. Nếu gặp lỗi, chúng tôi sẽ hiển thị thông báo đó, và nếu mọi thứ hoạt động hoàn hảo, chúng tôi

4:55:54 sẽ hiển thị qua người dùng của chúng tôi và hiển thị họ theo kiểu sạch sẽ user.name người dùng. Tên người dùng email và số điện thoại của họ

4:56:03 Đúng vậy, các lớp Tailwind chủ yếu dành cho kiểu tóc nên tôi nghĩ bạn không cần quá lo lắng về việc đạt được điều này

4:56:09 Bố cục chính xác và như bạn thấy, đây gần như là mã react tiêu chuẩn với chỉ một kiến trúc RSC

4:56:17 thêm sử dụng chỉ thị C ở phía trên để cho phép sử dụng móc trong trình duyệt nếu bạn điều hướng đến Local Host 3000 SL

4:56:26 người dùng gạch nối client bạn sẽ thấy nhanh văn bản tải và sau đó danh sách người dùng được hiển thị đẹp mắt, chúng ta có

4:56:34 Tên người dùng, tên người dùng, email và số điện thoại. Chúng tôi có dữ liệu của 10 người dùng khác nhau. Nhưng đây là điều bạn nên làm.

4:56:43 Thực ra chỉ dùng các thành phần client để lấy dữ liệu khi bạn thực sự cần, ví dụ khi cần cập nhật theo thời gian thực

4:56:49 hoặc khi dữ liệu của bạn phụ thuộc vào các tương tác phía client mà bạn không thể dự đoán ở phía server cho mọi thứ khác, thì

4:56:56 Cách được khuyến nghị để lấy dữ liệu là thông qua các thành phần máy chủ, chúng ta sẽ đề cập tiếp theo, trước đó chúng ta đã học cách lấy dữ liệu

4:57:04 Dữ liệu trong các thành phần khách hàng Bây giờ hãy cùng học cách lấy dữ liệu trong các thành phần máy chủ – một trong những điều thú vị nhất

4:57:11 về kiến trúc RSC là nó hỗ trợ esync và các từ khóa trong các thành phần máy chủ, điều này có nghĩa là chúng ta có thể viết

4:57:17 lấy mã dữ liệu giống như JavaScript thông thường sử dụng hàm Asing kết hợp với từ khóa await để tôi cho bạn xem

4:57:24 cách điều này hoạt động với một ví dụ, chúng ta sẽ một lần nữa sử dụng slash users in point từ mẫu giữ chỗ Json cho mô phỏng API của chúng ta

4:57:33 chúng tôi sẽ lấy dữ liệu người dùng này và hiển thị tên, tên người dùng, email và số điện thoại của từng người dùng trên máy chủ NEX SHS của chúng tôi

4:57:39 component Compon: Hãy cùng vào VS Code và bắt đầu ngay trong thư mục ứng dụng của bạn, tạo một thư mục mới có tên Users Gạch nối

4:57:48 máy chủ và thêm một trang. TSX bên trong tôi chọn máy chủ tên người dùng vì chúng tôi xử lý dữ liệu người dùng trong một

4:57:57 thành phần máy chủ nhưng bạn có thể đặt tên theo ý muốn. Trước tiên, hãy định nghĩa typescript type cho người dùng.

4:58:04 Giữ cho đơn giản và chỉ bao gồm các trường chúng tôi quan tâm đến ID, tên, tên người dùng, email và điện thoại, tương tự như dữ liệu

4:58:11 đang lấy các thành phần client nên tôi sẽ Copy Type user và dán vào trang mới. Tệp TSX cho thành phần của chúng tôi

4:58:21 chúng ta sẽ gọi nó là máy chủ người dùng, vì vậy xuất hàm mặc định, máy chủ người dùng, làm cho thành phần này không đồng bộ vì các thành phần máy chủ hỗ trợ

4:58:33 Các thao tác không đồng bộ, đây là lúc việc lấy dữ liệu người dùng trở nên rất đơn giản, chúng ta chỉ cần gửi yêu cầu get đến

4:58:41 điểm cuối của người dùng sử dụng API fetch để phản hồi const bằng với await Fetch và URL là Jon pleas holder. kiểu chữ

4:58:51 code.com người dùng trong dòng tiếp theo const là người dùng kiểu user array bằng với await response. Json và hãy cùng ghi lại trên console

4:59:03 người dùng giá trị khi bạn lưu điều này và kiểm tra ra/ máy chủ người dùng trong trình duyệt, máy chủ người dùng có dấu gạch nối, hãy xem xét

4:59:15 Bảng điều khiển bạn sẽ thấy danh sách người dùng gồm 10 người dùng, việc lấy dữ liệu của chúng ta đang hoạt động, việc còn lại là

4:59:22 hiển thị người dùng trên màn hình chỉ cần sao chép câu trả về từ thành phần khách hàng mà chúng tôi đã tạo trước đó

4:59:30 và dán nó vào thành phần máy chủ xóa câu lệnh khóa console mà chúng ta ánh xạ lên danh sách người dùng, nơi mỗi người dùng được định nghĩa bởi người dùng

4:59:40 Chúng tôi hiển thị tên người dùng, tên người dùng, email và số điện thoại. Các lớp chủ yếu dùng để tạo phong cách, nên đừng quá lo lắng.

4:59:49 quá nhiều về việc đạt được bố cục và giao diện chính xác này, hãy lưu tệp và bạn sẽ thấy tất cả 10 người dùng được hiển thị

4:59:56 tuyến đường là/ người dùng gạch nối máy chủ, chúng tôi đã lấy dữ liệu thành công trong các thành phần máy chủ. Đây là một điều thực sự

5:00:05 Hay đấy, bạn nên biết khi xây dựng các ứng dụng Nexs, bạn thường sẽ lấy cùng một dữ liệu trong nhiều

5:00:10 những nơi như cách yêu cầu B xuất hiện trên sáu thành phần khác nhau trong cây của chúng ta để tải một tuyến đường duy nhất, bạn có thể nghĩ như vậy

5:00:18 sẽ kích hoạt nhiều yêu cầu mạng cho cùng một dữ liệu nhưng react xử lý thông minh thông qua một tính năng gọi là

5:00:23 ghi nhớ yêu cầu react Liệu D sẽ trùng lặp các yêu cầu lấy dữ liệu với cùng URL và tùy chọn, điều này có nghĩa là bạn có thể lấy dữ liệu

5:00:32 bất cứ nơi nào bạn cần trong cây thành phần mà không lo lắng về các yêu cầu mạng trùng lặp, react chỉ thực hiện

5:00:38 thực tế lấy một lần và tái sử dụng kết quả cho các cuộc gọi tiếp theo trong cùng một lượt render, đây là một tính năng của react

5:00:45 và do đó được bao gồm trong XS cho phép bạn viết dữ liệu lấy mã chính xác ở nơi bạn cần thay vì phải

5:00:51 Tập trung lấy dữ liệu và truyền dữ liệu qua props, hãy chú ý việc lấy dữ liệu đơn giản thế nào với các thành phần máy chủ chỉ

5:00:58 dễ dàng chờ đợi với API fetch không sử dụng trạng thái không sử dụng không có sự phức tạp của quản lý trạng thái mà chúng ta thường gặp

5:01:05 Nói về trạng thái, bạn có thể thắc mắc cách xử lý trạng thái tải và lỗi trong các thành phần máy chủ

5:01:13 Đó chính xác là điều chúng ta sẽ khám phá tiếp theo, trước đó chúng ta đã khám phá việc lấy và hiển thị dữ liệu với các thành phần máy chủ

5:01:22 bây giờ hãy giải quyết các trạng thái tải và lỗi, trong khi các thành phần khách hàng yêu cầu bạn quản lý các trạng thái này riêng biệt

5:01:28 biến và các thành phần máy chủ render có điều kiện giúp quá trình này trở nên sạch sẽ hơn khi triển khai trạng thái tải tất cả

5:01:34 Chúng ta cần làm là Định nghĩa và Xuất một thành phần phản ứng trong quá trình tải. TSX để xử lý lỗi, chúng tôi cũng làm tương tự trong

5:01:42 Lỗi. TSX, chúng ta đã đề cập đến những khái niệm này khi thảo luận về định tuyến trước đó, nhưng giờ hãy xem chúng hoạt động cụ thể như thế nào

5:01:49 Về việc lấy dữ liệu, để tôi bắt đầu với mã VS và chỉ cho bạn cách hoạt động, trước tiên hãy tạo một tệp mới gọi là Loading.

5:01:56 TSX trong thư mục máy chủ có dấu gạch nối người dùng nên đang tải. TSX, đây là một quy ước xjs ở đây: Định nghĩa và Xuất một thành phần react

5:02:07 để tôi dán mã vào đây để tiết kiệm thời gian. Chúng tôi có trang tải hàm mặc định xuất và thành phần này

5:02:13 tạo một spinner tải đẹp sử dụng hai thẻ div với các lớp CSS đuôi vì việc lấy dữ liệu xảy ra

5:02:20 Rất nhanh trong ví dụ của chúng ta, hãy thêm một delay có chủ ý để demo trạng thái tải tốt hơn, nên chờ đợi lời hứa mới mà

5:02:28 Kết quả sau 2 giây Nếu chúng ta quay lại trình duyệt và làm mới trang, chúng ta sẽ thấy vòng xoay tải xuất hiện trong 2 giây

5:02:39 Trước khi dữ liệu người dùng xuất hiện, việc triển khai trạng thái tải bây giờ khá đơn giản cho lỗi

5:02:45 Xử lý: Hãy tạo lỗi. TSX trong cùng thư mục, tên tệp một lần nữa là quy ước XS Định nghĩa và Xuất react

5:02:55 thành phần với kiểu dáng phù hợp, tôi sẽ dán mã lại ở đây để tiết kiệm thời gian xử lý lỗi các thành phần

5:03:02 cần phải là các thành phần khách hàng nên chúng ta có chỉ thị use C ở phía trên, sau đó có trang lỗi hàm mặc định xuất ra

5:03:09 và thành phần nhận được một đối tượng lỗi mà chúng ta đang ghi lại vào bảng điều khiển bằng hiệu ứng sử dụng trong một thực tế

5:03:15 bạn có thể muốn gửi lỗi này đến dịch vụ ghi nhật ký lỗi, giao diện người dùng chỉ hiển thị clear

5:03:21 Thông báo lỗi màu đỏ Lỗi Lấy dữ liệu người dùng để kiểm tra xử lý lỗi trở lại trang. TSX trong cùng một thư mục chúng ta

5:03:30 có thể mô phỏng lỗi bằng cách thay đổi URL thành một thứ không chính xác để người dùng 1 2 3 lưu tệp và quay lại

5:03:37 trình duyệt bạn sẽ thấy thông báo lỗi xuất hiện lỗi khi lấy dữ liệu người dùng chúng tôi đã xử lý thành công cả việc tải

5:03:45 và trạng thái lỗi khi lấy dữ liệu trong các thành phần máy chủ trong tóm tắt để quản lý việc lấy dữ liệu Trạng thái sẽ thêm một lần tải. TSX

5:03:53 tệp cùng với thành phần react cho trạng thái tải và một lỗi. Tệp TSX với thành phần máy khách để xử lý lỗi

5:04:00 Bây giờ khi chúng ta đã hiểu những nguyên lý cơ bản của việc lấy dữ liệu trong các thành phần máy chủ, hãy cùng khám phá hai

5:04:06 Các mẫu phổ biến cho việc lấy dữ liệu Khi lấy dữ liệu bên trong các thành phần, bạn cần nhận biết hai việc lấy dữ liệu

5:04:13 các mẫu tuần tự và song song trong các yêu cầu lấy dữ liệu tuần tự và cây thành phần phụ thuộc vào từng

5:04:20 ngoài ra, điều này có thể dẫn đến thời gian tải lâu hơn, nhưng có thể có những trường hợp mô hình này là không thể tránh khỏi vì một người tải về.

5:04:27 Tùy thuộc vào kết quả của phần còn lại. Hãy cùng hiểu rõ hơn với một ví dụ cho dữ liệu giả lập mà chúng ta sẽ tiếp tục dựa vào.

5:04:34 lần này chúng ta sẽ sử dụng các endpoint của host/hosts và SL users để tạo một blog như vậy

5:04:42 page the/ posts endpoint trả về một mảng gồm 100 bài đăng và mỗi bài đăng có ID người dùng host ID tiêu đề và nội dung the/

5:04:53 điểm người dùng trả về một mảng người dùng mà chúng ta đã từng sử dụng trước đây nếu chúng ta thêm ID người dùng vào/ người dùng chẳng hạn.

5:05:01 slash1 chúng ta lấy đối tượng người dùng riêng lẻ trong ứng dụng của mình, chúng ta sẽ tạo một thành phần bài đăng để lấy tất cả các bài đăng

5:05:09 và với mỗi bài đăng, nó sẽ lấy tác giả bằng thuộc tính ID người dùng, đây là ví dụ hoàn hảo về tuần tự

5:05:16 lấy vì chúng ta cần ID người dùng từ mỗi bài đăng trước khi có thể lấy tác giả của nó, hãy vào mã VS và lấy

5:05:23 Bắt đầu trong thư mục ứng dụng của bạn, tạo một thư mục mới gọi là Posts Sequential và thêm một trang. Tệp TSX bên trong trước

5:05:34 hãy định nghĩa typescript type type cho các bài đăng, mỗi bài đăng có user ID, id, id, tiêu đề và nội dung cho thành phần mà chúng ta sẽ gọi

5:05:44 nó đăng tuần tự nên xuất hàm mặc định sau tuần tự làm cho thành phần này hỗ trợ lấy dữ liệu

5:05:54 Vì chúng ta vừa mới học các nguyên tắc cơ bản về lấy dữ liệu trong các thành phần máy chủ, tôi sẽ dán toàn bộ

5:05:59 mã component ở đây và sau đó chúng ta sẽ đi qua từng bước, bắt đầu bằng cách lấy tất cả các bài đăng từ kiểu chỗ giữ chỗ Json của endpoint/ Posts

5:06:10 code.com sloss, URL bạn có thể tìm thấy trong trình duyệt, chúng tôi chuyển đổi phản hồi sang Json rồi lọc các bài đăng thành

5:06:19 chỉ bao gồm những bài có ID chia hết cho 10, điều này nhằm đảm bảo mỗi bài viết có một tác giả khác nhau

5:06:27 Chỗ giữ chỗ Json có cùng một tác giả mỗi 10 bài đăng trong jsx cho mỗi bài đăng chúng tôi hiển thị tiêu đề bài viết thân bài và một

5:06:37 chỗ giữ chỗ cho tên tác giả được lấy nếu chúng ta kiểm tra trình duyệt bằng cách điều hướng đến/đi theo thứ tự, chúng ta nên thấy 10

5:06:47 bài đăng đang được hiển thị, giờ hãy xem làm thế nào để lấy tác giả cho mỗi bài đăng trở lại trong VS Code, tạo một tệp mới gọi là

5:06:55 tác giả. TSX bên trong thư mục post sequential nên tác giả.

5:07:01 TSX: Định nghĩa kiểu tác giả, đây là kiểu người dùng nhưng chúng ta chỉ cần các trường ID và tên, nên ID của kiểu, số và

5:07:11 chuỗi tên kiểu bây giờ hãy định nghĩa component author của chúng ta một lần nữa. Tôi sẽ dán toàn bộ mã component ở đây và sau đó.

5:07:19 chúng ta sẽ đi qua từng bước, chúng ta có một thành phần hàm nhận một prop ID người dùng, gửi yêu cầu fch đến Json

5:07:26 Điểm cuối ID người dùng SL và Trả về tên tác giả để sử dụng thành phần này cần nhập vào

5:07:34 thành phần trang sau tuần tự và thay thế tên tự động giữ chỗ bằng thành phần tác giả sẽ xóa

5:07:42 Thẻ đoạn văn Gọi thành phần tác giả Đảm bảo nhập nó ở đầu cùng rồi nhập ID người dùng bằng với post.

5:07:53 ID người dùng, nếu bạn kiểm tra trình duyệt, chúng ta sẽ thấy các bài đăng hiển thị với tên tác giả như Graham Ain H, v.v.

5:08:05 việc lấy dữ liệu tuần tự trong thực tế, đầu tiên chúng ta lấy tất cả bài đăng từ API của post, sau đó với mỗi bài viết chúng ta render

5:08:13 một yêu cầu lấy khác để lấy thông tin tác giả Mỗi yêu cầu tác giả phải chờ yêu cầu Post hoàn tất

5:08:22 vì chúng ta cần ID người dùng từ từng bài đăng nên điều này hoạt động hoàn toàn tốt nhưng chúng ta có thể cải thiện bằng cách không

5:08:29 chặn giao diện người dùng trong khi lấy thông tin tác giả, chúng tôi muốn hiển thị bài đăng trước và phát trực tiếp tác giả trong

5:08:36 Bối cảnh: Chúng ta có thể làm điều này bằng cách bao quanh thành phần tác giả trong một ranh giới suspense, tức là bao bọc nó bằng suspense từ

5:08:44 React mà bạn nên đảm bảo nhập từ React ở phía trên, mở và đóng tác giả là prop con và

5:08:54 trên suspense, chúng tôi chỉ định prop dự phòng là một thẻ div hiển thị tải author bằng màu xám trong thành phần author chúng ta

5:09:03 có thể thêm độ trễ 1 giây để xem văn bản tải đang hoạt động chờ lời hứa mới được giải quyết sau 1 giây nếu chúng ta kiểm tra

5:09:12 khi trình duyệt tải lại, chúng ta sẽ thấy các bài đăng hiển thị cùng với nội dung tác giả đang tải và sau một thời gian ngắn tác giả sẽ thấy

5:09:20 Tên nên được truyền trực tiếp trong thành phần của chúng tôi, hoạt động như mong đợi. Nếu bạn hiểu rõ về việc lấy dữ liệu tuần tự, chúng ta chuyển sang phần tiếp theo.

5:09:27 Để lấy dữ liệu song song, bây giờ hãy xem xét việc lấy dữ liệu song song trong các yêu cầu lấy dữ liệu trong một tuyến đường đang rất háo hức.

5:09:37 được khởi tạo và chúng ta tải dữ liệu cùng lúc, điều này giúp giảm tổng thời gian tải dữ liệu. Hãy cùng hiểu

5:09:44 tốt hơn với một ví dụ cho dữ liệu giả lập, chúng ta sẽ một lần nữa dựa vào API giữ chỗ Json lần này, tuy nhiên lần này chúng ta sẽ

5:09:50 sử dụng các bài viết gạch chéo và album dấu gạch chéo trong điểm để tạo trang hồ sơ người dùng Điểm kết thúc bài viết trả về mảng 100

5:09:59 bài đăng Mỗi bài đăng có ID người dùng ID tiêu đề và nội dung Điểm cuối album trả về một mảng gồm 100 album mỗi album có

5:10:10 ID người dùng và tiêu đề cho cả hai điểm cuối Chúng ta có thể thêm ID người dùng làm tham số truy vấn để lọc các bài đăng và album

5:10:19 bởi người dùng nên ID người dùng dấu hỏi bằng một, bạn có thể thấy chúng ta có 10 bài đăng đều do cùng một người dùng viết.

5:10:30 tương tự, ID người dùng đánh dấu câu hỏi của album SL bằng một, chúng ta có 10 album được viết bởi cùng một người dùng nếu bạn đang xây dựng hồ sơ người dùng

5:10:41 Chúng ta có thể muốn hiển thị cả bài đăng của người dùng và album của họ cạnh nhau vì các yêu cầu này không phụ thuộc vào nhau

5:10:49 trên nhau, chúng ta có thể lấy chúng song song, hãy chuyển sang mã VS và xem điều này hoạt động trong thư mục ứng dụng của bạn, tạo một

5:10:57 thư mục mới gọi là user có dấu gạch nối song song, chúng ta sẽ truyền user ID làm tham số route, vì vậy hãy tạo một thư mục ID.

5:11:06 bên trong người dùng song song nên có dấu ngoặc vuông ID và thêm một trang. Tệp TSX bên trong bạn đã tạo một người dùng Dynamic route

5:11:17 Đầu tiên, hãy định nghĩa typescript types post chứa user id id tiêu đề và nội dung và loại album mà

5:11:26 chứa ID người dùng và tiêu đề ID người dùng phổ biến ở hai loại nhưng ở đây ID và tiêu đề tham chiếu đến ID album và

5:11:35 tiêu đề cho thành phần của chúng tôi, chúng tôi sẽ gọi nó là hồ sơ người dùng nên xuất hồ sơ người dùng hàm không đồng bộ mặc định, hãy thực hiện điều này

5:11:44 component async để hỗ trợ lấy dữ liệu. Đây là mẹo chúng ta sẽ định nghĩa các hàm truy bắt dữ liệu bên ngoài

5:11:52 thành phần tên hàm là get user posts và đây là một hàm easing lấy user ID làm tham số, nó lấy bài đăng cho

5:12:07 cho ID từ API chỗ ngồi Json và trả về phản hồi sao cho const res bằng await fetch truyền trong Json

5:12:15 Placeholder SL đăng dấu hỏi ID người dùng bằng tham số user ID và trả về phần còn lại.

5:12:24 Chức năng lấy album người dùng trên Json giống hệt nhưng với album thì tôi có thể sao chép mã và thay đổi

5:12:31 tên hàm cũng như điểm cuối lấy album người dùng SL albums ID người dùng bằng với Quá khứ trong ID người dùng hiện nay

5:12:41 hãy định nghĩa thành phần trang của chúng ta, thành phần sẽ nhận ID người dùng làm tham số route để chúng ta phân cấu trúc các tham số

5:12:49 thuộc kiểu promise chứa ID kiểu chuỗi ID ở đây là tên thư mục của chúng ta, chúng ta sẽ chờ các tham số và phân cấu trúc

5:13:00 ID người dùng từ đó, bây giờ chúng ta sẽ khởi tạo cả hai yêu cầu lấy dữ liệu song song bằng promise.all để const đăng dữ liệu là

5:13:09 tương tự để lấy các máy chủ người dùng truyền ID tương tự như const albums dữ liệu cũng bằng để lấy album người dùng truyền ID rồi gọi

5:13:21 A Wait Promise. Tất cả chúng tôi chỉ định một mảng dữ liệu bài đăng và dữ liệu album, chúng tôi gán cho các bài đăng và album do tính chất của không đồng bộ và

5:13:35 chờ một yêu cầu chờ bên trong thành phần sẽ chặn bất kỳ yêu cầu nào bên dưới nó, đây là lý do chúng tôi khởi tạo cả hai

5:13:43 trước khi chờ bất kỳ yêu cầu nào cho jsx, tôi sẽ dán toàn bộ mã component để tiết kiệm thời gian, đây là bố cục hai cột với

5:13:53 các bài đăng bên trái và album bên phải, hãy xem qua trình duyệt, điều hướng đến user parallel SL ID, ví dụ như vậy và chúng ta thấy

5:14:06 10 bài viết bên trái và 10 album bên phải Việc lấy dữ liệu của chúng tôi hoạt động như mong đợi chìa khóa để song song

5:14:14 Lấy dữ liệu là khởi tạo các yêu cầu trước khi chờ bất kỳ yêu cầu nào, hãy thêm một phần tải. Tệp TSX và một độ trễ cho hai

5:14:22 chức năng này để thấy điều này hoạt động, tức là trễ một giây để nhận bài đăng người dùng và 1 giây để lấy album người dùng tiếp theo trên trang. TSX tạo đang tải.

5:14:34 TSX với một thành phần react đơn giản, tôi đã dùng t lớp CSS để tạo một loading spinner nếu chúng ta truy cập SL user parallel

5:14:44 Ví dụ SL2, cả hai cột sẽ tải cùng lúc sau một khoảng trễ 1 giây, điều này nhanh hơn nhiều so với chờ một giây

5:14:56 Các bài đăng và thêm một giây cho việc lấy dữ liệu song song của album đặc biệt hữu ích khi bạn có

5:15:02 nhiều dữ liệu độc lập mà bạn cần lấy thay vì lấy từng phần một, bạn có thể lấy

5:15:09 Tất cả cùng lúc và giảm tổng thời gian tải. Được rồi, giờ bạn sẽ nắm chắc cách và thời điểm nên làm

5:15:15 sử dụng cả việc lấy dữ liệu tuần tự và song song trong ứng dụng của bạn, sau khi chúng ta đã xem xét cách lấy dữ liệu từ các điểm cuối API

5:15:25 sử dụng API fetch, hãy cùng khám phá việc lấy dữ liệu từ cơ sở dữ liệu trong các thành phần máy chủ, vui lòng chú ý đặc biệt đến

5:15:31 Phần này vì những gì chúng ta sắp đề cập rất quan trọng, nó là nền tảng cho các biến đổi dữ liệu và máy chủ

5:15:37 các hành động sắp tới. Bây giờ có hai lý do chính tại sao việc lấy dữ liệu trực tiếp từ cơ sở dữ liệu lại mạnh mẽ. Đầu tiên, các thành phần máy chủ có

5:15:46 Truy cập trực tiếp vào tài nguyên bên SERs giúp các tương tác cơ sở dữ liệu trở nên liền mạch vì mọi thứ đều xảy ra

5:15:52 trên máy chủ, chúng ta không cần API routes hay lo lắng về việc tiết lộ thông tin nhạy cảm cho client để hiểu

5:15:59 Cách lấy dữ liệu từ cơ sở dữ liệu. Chúng tôi sẽ làm việc với hai công cụ cực kỳ hữu ích: sqlite và Prisma bây giờ.

5:16:05 Đừng lo, nếu bạn chưa từng nghe về những thứ này, tôi sẽ giải thích rất đơn giản, sqlite rất đơn giản

5:16:11 cơ sở dữ liệu dựa trên tệp để lưu trữ thông tin trong dự án của bạn, không cần máy chủ hay thiết lập phức tạp và nó

5:16:18 Hoàn hảo để Học và tạo mẫu Prisma là công cụ giúp bạn dễ dàng giao tiếp với cơ sở dữ liệu của mình, giống như vậy

5:16:25 Một trình dịch giúp mã của bạn giao tiếp với SQL nhẹ nhàng, hãy quay lại mã VS và đi qua quá trình thiết lập

5:16:31 từng bước một, tôi rất khuyên bạn nên theo dõi tôi trước khi cài đặt terminal Prisma CLI với tư cách là Dev

5:16:39 dependency npm install Prisma [Nhạc] DD second initialize Prisma với sqlite npx Prisma init -- data source- provider

5:16:56 sqlite tạo một thư mục Prisma với một lược đồ. Tệp Prisma để đơn giản hóa cài đặt, cập nhật URL cơ sở dữ liệu trong

5:17:05 tệp này vào tệp dấu chấm .db chúng ta cũng sẽ thêm tệp cơ sở dữ liệu vào cơ sở dữ liệu tệp ignore của git Prisma slam. Bước thứ ba của DB

5:17:18 trong lược đồ. Prisma thêm mô hình sản phẩm với ID tiêu đề giá và mô tả tùy chọn đại diện cho các bảng

5:17:27 trong cơ sở dữ liệu cơ sở của mô hình sản phẩm tương ứng với bảng sản phẩm cuối cùng chạy một lần di chuyển để tạo

5:17:34 các bảng cơ sở dữ liệu từ lược đồ Prisma trong terminal chạy lệnh npx Prisma migr Dev D- name trong

5:17:44 lệnh này thực hiện ba việc tạo một tệp di chuyển trong Prisma migrations thực hiện quá trình di chuyển

5:17:53 trên cơ sở dữ liệu của bạn sẽ cài đặt gói client Prisma và tạo ra client Prisma mà chúng ta sẽ tương tác với

5:18:01 cơ sở dữ liệu, cơ sở dữ liệu và bảng của chúng ta đã sẵn sàng. Bây giờ, hãy định nghĩa các thao tác cơ sở dữ liệu trong thư mục nguồn. Tạo một

5:18:09 Tệp mới tên là Prisma db. TS để tiết kiệm thời gian, tôi sẽ dán mã khi làm nhưng bạn có thể tìm toàn bộ file trên GitHub của tôi

5:18:17 repo và liên kết đến đó nằm trong phần mô tả bên dưới, bắt đầu bằng cách nhập gói khách Prisma

5:18:24 nhập ứng dụng khách Prisma từ tại ứng dụng Prisma ở dòng tiếp theo tạo một phiên bản khách hàng Prisma mới const Prisma là

5:18:32 bằng với New Prisma client với dấu ngoặc đơn, tiếp theo chúng ta có hàm seed products này, nó kiểm tra xem một bảng có trống không và nếu

5:18:42 có thêm ba sản phẩm mẫu sản phẩm 1 2 3 với giá cả và mô tả không? Tiếp theo chúng ta sẽ định nghĩa CRUD của mình

5:18:55 Đầu tiên chúng ta phải lấy các sản phẩm sử dụng Prisma để lấy product.in sản phẩm để lấy tất cả sản phẩm. Tiếp theo, chúng ta có

5:19:04 sản phẩm sử dụng sản phẩm Prisma. tìm duy nhất để lấy một sản phẩm duy nhất theo ID của nó, tiếp theo chúng ta có sản phẩm ADD sử dụng

5:19:12 Prisma làm sản phẩm. create để thêm sản phẩm mới, chúng tôi có sản phẩm cập nhật sử dụng sản phẩm Prisma do. cập nhật để cập nhật

5:19:22 một sản phẩm hiện có cuối cùng chúng ta có sản phẩm xóa sử dụng sản phẩm Prisma. xóa để xóa một sản phẩm mà tôi đã

5:19:30 đã thêm độ trễ 1,5 giây cho mỗi thao tác CRUD để mô phỏng độ trễ, bạn sẽ không gặp phải điều này trong môi trường sản xuất nếu

5:19:37 Bạn mới sử dụng Prisma, đừng quá lo lắng về chi tiết cú pháp, tất cả những gì bạn cần biết là chúng tôi có một cơ sở dữ liệu

5:19:43 với bảng sản phẩm và các chức năng để thực hiện các thao tác cred trên bảng đó, tất cả ngay bây giờ là phần thú vị

5:19:51 Hãy lấy dữ liệu sản phẩm từ một trang EXs trong thư mục ứng dụng, tạo một thư mục cơ sở dữ liệu sản phẩm mới với trang đó. TSX

5:20:02 tệp trước Định nghĩa loại sản phẩm Mỗi sản phẩm có ID tiêu đề giá và mô tả tùy chọn tương tự như

5:20:11 Mô hình trong lược đồ. Tệp Prisma sau đó Định nghĩa trang DB sản phẩm hàm không đồng bộ mặc định xuất thành phần react từ server

5:20:22 Các thành phần chạy trên máy chủ, chúng ta có thể giao tiếp trực tiếp với cơ sở dữ liệu mà không cần API từ prismad db. TS nhập get

5:20:31 ở đây tôi đang dùng một đường dẫn ELAS tham chiếu đến thư mục nguồn trong component react compon.

5:20:39 chờ gọi hàm và lưu kết quả trong biến products sao cho const các tích kiểu product bằng

5:20:48 chờ nhận sản phẩm cho jsx, chúng ta sẽ sử dụng phương thức map để liên kết thông tin sản phẩm và sử dụng tailin.

5:20:56 để làm cho nó trông đẹp mắt, tôi sẽ sao chép và dán mã để tiết kiệm thời gian, nên các sản phẩm. bản đồ và chúng ta liên kết

5:21:05 tiêu đề sản phẩm, mô tả và giá, chúng tôi sử dụng ID như một phần của đạo cụ chính trong mục danh sách, lưu tệp vào/

5:21:15 sản phẩm, gạch nối cơ sở dữ liệu trong trình duyệt của bạn và bạn sẽ thấy ba sản phẩm được hiển thị từ cơ sở dữ liệu của bạn. Chúng ta đã có một cách hoạt động.

5:21:22 Cơ sở dữ liệu Prisma plus sqlite với truy cập trực tiếp từ thành phần máy chủ nexs của chúng tôi, không cần lớp API và trong khi chúng tôi

5:21:31 sử dụng sqlite ở đây, các khái niệm này áp dụng cho bất kỳ cơ sở dữ liệu nào bạn thích, điểm then chốt là bạn có thể truy vấn

5:21:37 cơ sở dữ liệu trực tiếp từ thành phần máy chủ năm sau của bạn. Tất nhiên. Tiếp theo, chúng ta sẽ xây dựng trên nền tảng này để học hỏi.

5:21:43 Về các biến đổi dữ liệu và hành động của máy chủ, chúng tôi đã đề cập cách lấy dữ liệu bằng các thành phần máy chủ trong ứng dụng

5:21:51 Router bây giờ là lúc khám phá những đột biến dữ liệu thú vị tương tự khi chúng ta làm việc với dữ liệu mà chúng ta đang

5:21:58 Thông thường thực hiện các thao tác gọi là CRUD: tạo read, cập nhật và xóa, chúng tôi đã thành thạo phần đọc rồi, nên

5:22:06 Hãy cùng khám phá ba yếu tố còn lại, bắt đầu với cách tạo dữ liệu để theo dõi. Hãy chắc chắn kiểm tra

5:22:13 ngoài chủ đề trước về việc lấy dữ liệu từ cơ sở dữ liệu nơi chúng ta thiết lập client Prisma với cơ sở dữ liệu sqlite

5:22:20 Có một bảng sản phẩm sẵn sàng sử dụng với một số dữ liệu mẫu và phương pháp để thực hiện các thao tác CRUD nhằm thực sự trân trọng ứng dụng

5:22:28 Cách tiếp cận của router đối với các đột biến dữ liệu đáng để xem xét cách chúng ta truyền thống xử lý các đột biến dữ liệu trong

5:22:34 phản ứng so sánh này sẽ giúp chúng ta đánh giá cao lợi ích của app router appr Hãy cùng làm một ví dụ thực tế

5:22:41 về việc tạo sản phẩm mới trong bảng sản phẩm của chúng tôi, giờ tôi đã chuẩn bị mã trước nhưng nó trông khá quen thuộc

5:22:49 Nếu bạn từng làm việc với React trước đây, để tôi hướng dẫn bạn cách mọi thứ hoạt động trong một thư mục mới gọi là React Form mà tôi đã

5:22:56 đã tạo một trang. Tệp TSX với một thành phần gọi là create product, tại đây bạn tạo một biểu mẫu với các trường nhập liệu cho

5:23:03 tiêu đề sản phẩm, giá và mô tả, bạn sẽ cần sử dụng State hook để theo dõi các giá trị trường này rồi thêm

5:23:11 một trình lắng nghe sự kiện onsubmit cho biểu mẫu của bạn kích hoạt chức năng xử lý submit khi biểu mẫu được gửi ngay bây giờ đây là

5:23:18 một điều quan trọng cần nhớ về trình xử lý submit vì lý do bảo mật mà mã phía khách không thể trực tiếp làm được

5:23:24 tương tác với cơ sở dữ liệu, đó là lý do bạn hoặc nhóm backend cần thiết lập một tuyến APEPI để xử lý việc tạo

5:23:32 trong ví dụ của chúng ta, tôi đang dùng một route API Shar tiếp theo nhưng bạn có thể coi đây như một backend và trỏ tuyến API này

5:23:40 thực sự đảm nhận việc tương tác với cơ sở dữ liệu của chúng tôi, lấy dạng dữ liệu và tạo ra sản phẩm mới

5:23:45 ghi bằng chức năng thêm sản phẩm, trong khi ở phía giao diện bạn cũng cần xử lý quy trình gửi

5:23:52 một cách tinh tế, điều này thường có nghĩa là triển khai trạng thái tải để vô hiệu hóa nút gửi trong khi gửi

5:23:59 đang tiến hành nếu việc gửi thành công, bạn sẽ muốn chuyển hướng người dùng đến trang sản phẩm để xem

5:24:05 Sản phẩm mới tạo trong trình duyệt, hãy truy cập vào biểu mẫu React và bạn sẽ thấy biểu mẫu chúng tôi đã tạo điền vào nó

5:24:13 và gửi nó, bạn sẽ thấy trạng thái tải và sau đó được chuyển hướng đến trang sản phẩm. Chúng tôi sẽ thấy sản phẩm mới được tạo trong

5:24:22 Danh sách như bạn thấy, có khá nhiều việc đang diễn ra ở đây, chúng tôi đang quản lý các hình thức, Nhà nước xử lý các hồ sơ gửi bài, tương tác

5:24:32 với một API route xử lý việc tải trạng thái và chuyển hướng, nhưng đây là tin tốt nếu bạn nghĩ chắc chắn phải có một

5:24:40 Cách làm tốt hơn và đơn giản hơn trong Nexs. Bạn hoàn toàn đúng rồi. Tiếp theo, chúng ta sẽ khám phá cách sử dụng bộ định tuyến ứng dụng Nexs

5:24:48 biến đổi toàn bộ quy trình này, làm cho nó trở nên tinh gọn và hiệu quả hơn đáng kể trước đây chúng tôi đã khám phá

5:24:57 Cách truyền thống để xử lý các đột biến dữ liệu trong React Bây giờ hãy cùng khám phá một tính năng thú vị trong bộ định tuyến ứng dụng

5:25:03 gọi là hành động máy chủ hành động máy chủ là các hàm không đồng bộ được thực thi trên máy chủ mà chúng có thể là

5:25:10 đã gọi các thành phần máy chủ và máy khách để xử lý việc gửi biểu mẫu và biến đổi dữ liệu trong các ứng dụng NEXS, bạn

5:25:17 nên sử dụng các hành động máy chủ khi bạn cần thực hiện các thao tác cơ sở dữ liệu bảo mật muốn giảm nhu cầu mã API B plate

5:25:24 Nâng cấp dần dần cho biểu mẫu và muốn tối ưu hóa hiệu suất, hành động của máy chủ có thể được định nghĩa bằng máy chủ sử dụng react

5:25:31 bạn có thể đặt chỉ thị ở đầu một hàm asnc để đánh dấu hàm là hành động máy chủ hoặc tại

5:25:38 đầu một tệp riêng biệt để đánh dấu tất cả các xuất ra tệp đó là hành động của máy chủ, hãy cùng vào mã V và xem cách này

5:25:45 phù hợp với ví dụ của chúng ta. Chúng ta sẽ xây dựng một biểu mẫu để thêm sản phẩm mới vào cơ sở dữ liệu. Trước tiên, hãy tạo một tuyến đường mới.

5:25:53 trong thư mục ứng dụng, tạo một thư mục mới, cơ sở dữ liệu sản phẩm, tạo SL. Ở đây chúng ta sẽ định nghĩa và xuất một react

5:26:03 thành phần có tên Add Product Page để xuất hàm mặc định Add Product Page đây là thành phần máy chủ cho JSX, chúng ta sẽ sao chép

5:26:14 Form JSX từ ví dụ trước của chúng ta, tức là từ trang React Form.

5:26:22 TSX sao chép câu lệnh trả về và sau đó loại bỏ các trình xử lý trạng thái và sự kiện không hoạt động trong các thành phần máy chủ, loại bỏ khi gửi từ

5:26:34 phần tử biểu mẫu trên thay đổi trạng thái tắt từ ba phần tử đầu vào khi tải và chúng ta có thể thay đổi văn bản thành chỉ cần thêm

5:26:44 sản phẩm, bây giờ chúng ta sẽ định nghĩa hành động máy chủ đầu tiên để xử lý việc gửi biểu mẫu, trước tiên chúng ta tạo một Asing

5:26:51 hàm có tên create product và đánh dấu nó bằng chỉ thị sử dụng máy chủ ở phía trên, tiếp theo chúng ta kết nối hàm này với

5:27:04 biểu mẫu bằng cách gán nó cho thuộc tính hành động sao cho hành động bằng để tạo sản phẩm khi ai đó gửi biểu mẫu của chúng tôi tạo sản phẩm này

5:27:14 hàm tự động nhận dữ liệu biểu mẫu dưới dạng đối số, kiểu là dữ liệu biểu mẫu, sau đó chúng ta lấy các trường cần thiết từ dữ liệu biểu mẫu.

5:27:24 Và gọi hàm Add Product từ Prismad DB. Tệp TS nên dữ liệu biểu mẫu tiêu đề const. lấy tiêu đề dưới dạng chuỗi tương tự lấy

5:27:37 giữ giá và mô tả Đảm bảo máy chủ của bạn ở vị trí cao nhất sau khi bạn có tất cả dữ liệu gọi thêm sản phẩm từ Prisma

5:27:50 DB vì giá là cuộc gọi số nên pass in và pass in price vì chúng ta đang sử dụng hành động máy chủ trong thành phần máy chủ,

5:28:00 có thể giao tiếp trực tiếp với cơ sở dữ liệu, mã này không bao giờ đến trình duyệt của khách hàng, giống như có một điểm cuối API được xây dựng

5:28:08 Ngay trong thành phần của bạn, cuối cùng chúng ta có thể thêm một chuyển hướng để đưa người dùng trở lại danh sách sản phẩm sau khi họ đã tạo

5:28:16 mục mới nên chờ thêm sản phẩm rồi gọi redirect từ điều hướng SL tiếp theo và điều hướng đến cơ sở dữ liệu gạch nối sản phẩm mà

5:28:27 là trang danh sách, hãy chắc chắn thêm dấu gạch chéo ở đầu nên cơ sở dữ liệu sản phẩm. Hãy thử điều này trên trình duyệt.

5:28:36 với công cụ phát triển mở bảng Network điều hướng đến lộ trình mới sản phẩm SL hyph dấu gạch nối DB tạo vào biểu mẫu và gửi

5:28:48 bạn sẽ nhận thấy một yêu cầu mạng đến máy chủ khi hành động máy chủ đang chạy và trên trang danh sách sản phẩm bạn sẽ thấy

5:28:55 Sản phẩm thử nghiệm sản phẩm hai mới được đưa vào, mô tả sản phẩm hai thử nghiệm, giá $40, giờ tôi đã chỉ ra rồi

5:29:03 Lợi ích của hành động máy chủ nhưng tôi xin nhắc lại bây giờ khi chúng ta đã thấy cách xử lý biểu mẫu truyền thống

5:29:09 gửi bài cũng như các hành động máy chủ mới, trước tiên chúng đơn giản hóa mã của bạn một cách đáng kể vì không cần thiết

5:29:17 đối với các tuyến Epi riêng biệt hoặc quản lý trạng thái phía khách hàng cho dữ liệu biểu mẫu, chúng tăng cường bảo mật bằng cách giữ cho dữ liệu nhạy cảm

5:29:24 phía máy chủ vận hành, tránh xa các mối đe dọa tiềm ẩn thứ ba, họ cải thiện hiệu suất vì có ít hơn

5:29:31 JavaScript chạy trên client dẫn đến thời gian tải nhanh hơn và các chỉ số core web tốt hơn, nhưng điểm nhấn tuyệt vời nhất là

5:29:38 một số hành động hỗ trợ tăng cường tiến bộ nghĩa là biểu mẫu của bạn vẫn hoạt động ngay cả khi JavaScript bị tắt

5:29:44 trong trình duyệt giúp ứng dụng của bạn dễ tiếp cận và bền vững hơn, trình duyệt điều hướng đến sản phẩm, cơ sở dữ liệu tạo và trong

5:29:53 Công cụ phát triển trong bảng nguồn, nhấn lệnh shift p và tắt JavaScript, bây giờ điền thông tin sản phẩm và thử

5:30:03 gửi biểu mẫu sản phẩm vẫn được tạo đây là cải tiến tiến triển trong hành động nhấn lệnh shift

5:30:11 p một lần nữa và bật JavaScript để tóm tắt các hành động của máy chủ là các hàm không đồng bộ được thực thi trên máy chủ mà chúng cho phép chúng ta

5:30:20 thực hiện các biến đổi dữ liệu mà không cần các tuyến API riêng biệt, chúng tôi triển khai chúng theo chỉ thị sử dụng máy chủ và chúng đơn giản hóa

5:30:26 mã nguồn của chúng tôi cải thiện bảo mật và hỗ trợ Nâng cấp tiến triển tiếp theo, chúng tôi sẽ tiến xa hơn bằng cách xử lý biểu mẫu

5:30:34 Gửi bài đang chờ xử lý Bang chúng tôi sẽ học cách tắt nút gửi Buton để cung cấp phản hồi tốt hơn cho người dùng và

5:30:40 Ngăn chặn việc nộp trùng lặp vô tình. Trước đây chúng tôi đã khám phá một số hành động để xử lý việc gửi biểu mẫu. Bây giờ hãy cùng nâng cao người dùng của chúng tôi.

5:30:50 Kinh nghiệm bằng cách thêm phản hồi trong quá trình gửi biểu mẫu sử dụng một React Hug gọi là Use Form Status. Sử dụng trạng thái biểu mẫu là một

5:30:58 react hug cung cấp thông tin trạng thái về lần gửi biểu mẫu gần nhất, khi bạn gọi nó thì nó trả về một

5:31:04 đối tượng trạng thái với bốn Thuộc tính Khóa đang chờ xử lý, đó là một thỏi cho biết biểu mẫu cha có phải là hay không

5:31:10 hiện đang gửi dữ liệu một đối tượng chứa phương thức dữ liệu gửi biểu mẫu một chuỗi có thể get hoặc post

5:31:19 hiển thị phương thức HTTP đang được sử dụng và hành động tham chiếu đến hàm được truyền cho hành động biểu mẫu cha

5:31:26 Vì mục đích của chúng tôi, chúng tôi sẽ tập trung vào thuộc tính đang chờ xử lý mà chúng tôi sẽ sử dụng để vô hiệu hóa hoặc gửi nút trong khi

5:31:34 Biểu mẫu đang được xử lý, hãy quay lại mã VS và triển khai điều này. Bây giờ chúng ta có thể sử dụng trạng thái biểu mẫu.

5:31:40 Hook trực tiếp trên trang. TSX, nhưng có một yếu tố quan trọng: hook chỉ có thể sử dụng trong các thành phần khách hàng

5:31:49 Chuyển đổi toàn bộ trang của chúng ta thành thành phần client sẽ không lý tưởng, chúng ta sẽ mất hết lợi thế của server

5:31:55 Vậy đây là cách tiếp cận thông minh là gì? Chúng ta sẽ chỉ trích xuất nút gửi JSX vào thành phần client riêng của nó

5:32:03 Bằng cách này, chúng ta có thể sử dụng móc mà không làm ảnh hưởng đến lợi ích của RSC. Để tôi chỉ cho bạn cách đầu tiên tạo một cái mới

5:32:10 thư mục có tên components trong thư mục nguồn và bên trong thư mục này tạo một tệp mới tên là submit.

5:32:19 TSX ở đây chúng ta sẽ định nghĩa thành phần gửi xuất cons submit bằng một hàm mũi tên, trước tiên thêm use C

5:32:29 chỉ thị vì chúng ta đang dùng một hook nên tiếp theo chúng ta nhập use form status Hook từ react Dom trong component của chúng ta

5:32:38 phân cấu trúc thuộc tính đang chờ từ trạng thái biểu mẫu sử dụng chúng ta trả về một phần tử nút với văn bản gửi loại là bằng nhau

5:32:48 để gửi và một số kiểu CSS cuối cùng, chúng tôi dùng Boolean đang chờ để vô hiệu hóa nút khi biểu mẫu là

5:32:56 Gửi trạng thái vô hiệu hóa bằng với trạng thái chờ xử lý. Chúng ta cũng có một kiểu tương ứng với trạng thái bị tắt. Bây giờ hãy sử dụng thành phần này trên trang của chúng ta.

5:33:07 TSX nên trong thành phần thêm trang sản phẩm, hãy xóa phần tử nút và gọi thành phần gửi, đảm bảo nó

5:33:17 nhập từ at components slub submit nếu bạn thử bây giờ trên trình duyệt, bạn sẽ thấy thành phần gửi là

5:33:25 hiển thị điền vào biểu mẫu và nhấn nút gửi, nó sẽ bị vô hiệu hóa ngay lập tức và khi gửi biểu mẫu

5:33:33 hoàn tất nút được kích hoạt lại, bạn sẽ thấy sản phẩm mới được thêm trong danh sách. Bây giờ bạn có thể tiến xa hơn bằng cách thêm

5:33:40 một vòng quay tải hoặc thay đổi văn bản nút nếu bạn muốn cung cấp thêm phản hồi cho người dùng nhưng tóm tắt những gì chúng tôi đã có

5:33:46 học được với các hành động máy chủ của next, chúng ta có thể sử dụng P status Hook từ react Dom để quản lý State liên quan đến active

5:33:54 Gửi biểu mẫu bằng cách chỉ trích xuất nút gửi vào thành phần khách, chúng ta có thể tận dụng tốt nhất của cả hai thế giới máy chủ

5:34:02 Thành phần được hưởng lợi từ các cập nhật chính của thành phần chính và phía khách hàng động cho trạng thái gửi biểu mẫu

5:34:08 Tiếp theo, chúng ta sẽ khám phá cách xử lý thông báo lỗi với các hành động máy chủ trước đây chúng ta đã học về cách xử lý trạng thái tải bằng biểu mẫu sử dụng

5:34:18 Bây giờ hãy cùng đi sâu vào một vấn đề quan trọng không kém: Quản lý lỗi. Trong các biểu mẫu, chúng ta sẽ sử dụng một trạng thái khác.

5:34:26 react hug mới gọi là use action State use action state là một react hug cho phép chúng ta cập nhật State dựa trên

5:34:32 Kết quả của hành động biểu mẫu: nó đặc biệt hữu ích trong việc xử lý xác thực biểu mẫu và tin nhắn. Hãy cùng vào mã và xem cách nó hoạt động trong trang tạo cơ sở dữ liệu sản phẩm.

5:34:44 TSX, hãy bắt đầu bằng việc định nghĩa các kiểu lỗi xử lý lỗi, loại lỗi chúng ta sẽ theo dõi ba lỗi tiềm ẩn, một lỗi cho tiêu đề, một lỗi

5:34:55 Đối với giá và một trường cho trường mô tả chúng là tùy chọn kiểu chuỗi lỗi sẽ là một phần của

5:35:05 trạng thái tổng thể của form vậy hãy định nghĩa type trạng thái form chứa một lỗi chính của lỗi kiểu bây giờ bên trong thành phần của chúng ta

5:35:16 sẽ thiết lập trạng thái biểu mẫu ban đầu sao cho trạng thái ban đầu của const kiểu trạng thái biểu mẫu bằng một đối tượng có lỗi được đặt thành

5:35:27 một đối tượng rỗng, giờ đây chúng ta đã có các điều kiện tiên quyết cho hành động sử dụng, trạng thái ôm, gọi nó trong

5:35:34 thành phần sử dụng trạng thái hành động đảm bảo nhập nó từ react để nhập trạng thái hành động từ react hook này

5:35:43 lấy hai tham số, đầu tiên là hành động máy chủ của chúng ta là tạo sản phẩm và thứ hai là trạng thái biểu mẫu ban đầu là

5:35:53 những gì chúng tôi vừa định nghĩa, bạn có thể thấy lỗi typescript cho create product, nhưng đừng lo, chúng tôi sẽ sửa ngay sau

5:36:01 Tiếp theo, hãy cập nhật hành động tạo máy chủ sản phẩm để hoạt động với trạng thái mới này, trước tiên hãy khai báo lỗi kiểu

5:36:10 Errors, đây là một đối tượng rỗng để bắt đầu nếu không có tiêu đề trong dữ liệu dạng mà chúng ta đặt lỗi. danh hiệu bằng nhau

5:36:20 To Title cũng bắt buộc, tương tự nếu giá không có trong dữ liệu biểu mẫu của chúng tôi, chúng tôi sẽ đặt lỗi. giá cả là yêu cầu và

5:36:32 Cuối cùng, nếu mô tả không tồn tại trong dữ liệu biểu mẫu, chúng tôi sẽ đặt lỗi. mô tả bằng với mô tả là bắt buộc

5:36:40 là tùy chọn trong mô hình của chúng ta nhưng hãy thực thi xác thực trường bắt buộc sau khi thực hiện các kiểm tra đối tượng if này. chìa khóa

5:36:49 của những sai sót. chiều dài lớn hơn 0 chúng ta trả về đối tượng lỗi những gì chúng ta đang làm ở đây là xác thực dữ liệu biểu mẫu

5:37:00 và thiết lập thông báo lỗi phù hợp: nếu bạn phát hiện bất kỳ lỗi nào, chúng tôi sẽ trả về trạng thái biểu mẫu đã cập nhật mà không cần tiến hành

5:37:09 câu lệnh insert vì object key và value là errors, chúng ta có thể sử dụng ký hiệu Shand, tuy nhiên điều này sẽ tuân thủ

5:37:20 Mẫu trạng thái của chúng tôi trong trường hợp bạn gặp khó khăn khi theo dõi trong hành động tạo máy chủ sản phẩm của chúng tôi

5:37:27 Chúng tôi lấy được giá tiêu đề và mô tả từ dữ liệu biểu mẫu, sau đó kiểm tra xem có giá trị cho từng cái hay không

5:37:34 Nếu không có, chúng ta sẽ điền vào một đối tượng lỗi khi các khóa khác nhau, nếu chỉ một khóa tồn tại thì chúng ta có lỗi trong

5:37:42 và chúng ta trả về đối tượng Errors thay vì chèn dữ liệu vào cơ sở dữ liệu, giờ hãy quay lại cách sử dụng của chúng ta

5:37:50 action Trạng thái hook này trả về một mảng chứa ba thành phần mảng const bằng để sử dụng action State the hook

5:37:58 Trả về trạng thái dạng hiện tại mà ta sẽ gọi là Trạng thái, một hành động dạng mới mà ta sẽ gọi là hành động dạng và một Boolean

5:38:07 điều đó cho biết nếu hành động đang được thực thi, hãy gọi nó là e đang chờ xử lý. Bây giờ hãy sử dụng ba giá trị này.

5:38:14 Trong thành phần của chúng ta, trước tiên chúng ta sẽ sử dụng trạng thái biểu mẫu hiện tại để hiển thị các thông báo lỗi, vì vậy bên dưới mỗi nhãn chúng ta sẽ thêm

5:38:24 một đoạn văn hiển thị thông báo lỗi nếu nó tồn tại như vậy trạng thái Braes curly. Lỗi. Tiêu đề và nếu có, hãy thêm trạng thái hiển thị thẻ đoạn văn.

5:38:38 Lỗi. gạch cũng thêm kiểu Tailwind để hiển thị thông báo màu đỏ, tôi sẽ sao chép ba dòng mã này và

5:38:48 dán nó vào mục giá cũng như nhãn mô tả cho trạng thái cập nhật giá.

5:38:55 Lỗi. Giá cả và để mô tả trạng thái.

5:38:59 Lỗi.

5:39:02 Mô tả Chúng ta cũng sẽ nhóm trường biểu mẫu và thông báo lỗi trong một thẻ div để nhãn bao bọc thẻ div cũng như

5:39:09 thông báo lỗi Div Tag, Wrapping nhãn và thông báo lỗi và thông báo lỗi cuối cùng, điều này chỉ nhằm mục đích nhóm liên quan

5:39:24 Các phần tử và cộng khoảng cách giữa các trường khác nhau, trạng thái giờ đã được xử lý, tiếp theo chúng ta sẽ trỏ hành động form đến

5:39:33 thuộc tính hành động của biểu mẫu của chúng ta, vì vậy thay vì tạo sản phẩm, chúng ta chỉ định hành động biểu mẫu, chúng ta sẽ sử dụng chi tiêu E

5:39:43 Boolean để tắt nút gửi có điều kiện khi hành động đang được thực hiện, giờ đây hoàn toàn tùy chọn

5:39:50 vì chúng tôi đã xử lý trạng thái chờ xử lý với trạng thái biểu mẫu sử dụng trong thành phần gửi, nhưng tôi sẽ chỉ cho bạn cách thực hiện

5:39:57 Dù sao tôi cũng sẽ chú thích ra thành phần nút gửi sao chép phần tử nút từ thành phần gửi và dán nó vào vị trí của

5:40:06 thuộc tính disable chúng ta sẽ chuyển e đang chờ Boolean trả về bằng hành động use State hug cuối cùng những gì chúng ta đã làm ở đây là

5:40:15 thay vì gọi trực tiếp sản phẩm create hành động máy chủ, chúng ta đưa nó qua use action State hook để quản lý

5:40:22 Cập nhật trạng thái dựa trên hành động biểu mẫu, bây giờ khi lưu tệp và quay lại trình duyệt, chúng ta sẽ gặp lỗi

5:40:29 Bạn có đoán được tại sao chúng ta lại sử dụng một react hook trong thành phần máy chủ không? Hãy sử dụng action State ngay bây giờ, bản năng đầu tiên của bạn

5:40:37 có thể là thêm use client ở đầu file của chúng ta, hãy làm vậy hãy dùng client khi tôi lưu file, bạn có thể thấy nó cho chúng ta

5:40:45 lỗi khác vì không được phép định nghĩa các hành động máy chủ được chú thích trong máy khách

5:40:52 các thành phần nói đơn giản hơn chúng ta không thể sử dụng chỉ thị sử dụng máy chủ trong một thành phần được đánh dấu bằng chỉ thị sử dụng khách hàng nên

5:41:00 Giải pháp là gì? Đó là điều chúng ta sẽ khám phá tiếp theo. Trước đó, chúng ta gặp phải một trở ngại khi cố gắng định nghĩa hành động máy chủ trong

5:41:09 một thành phần khách hàng năm sau sẽ không cho phép nhưng đừng lo, tôi có giải pháp hay cho bạn, mẹo là

5:41:16 tách hành động máy chủ thành một tệp riêng, giữ cho logic phía SERs được tách biệt rõ ràng khỏi phía khách hàng

5:41:22 các thành phần, để tôi chỉ cho bạn cách làm điều này, trước tiên hãy tạo một thư mục mới tên là actions trong thư mục Source của bạn bên trong

5:41:29 Thư mục này tạo một tệp có tên là products. TS chúng tôi dùng tên này vì chúng tôi làm việc với các sản phẩm nhưng

5:41:36 Cứ thoải mái đặt tên cho dự án của bạn, giờ hãy để chúng tôi thiết lập sản phẩm. Tệp TS, vấn đề là thế này

5:41:43 về chỉ thị máy chủ của chúng tôi bạn có thể đặt một chỉ thị ở đầu một hàm Asing để đánh dấu hàm đó là

5:41:50 hành động máy chủ hoặc ở đầu một tệp riêng biệt để đánh dấu tất cả các lần xuất tệp đó là hành động máy chủ, vì vậy chúng ta bắt đầu

5:41:59 tệp này với chỉ thị sử dụng máy chủ ở đầu cùng Tiếp theo chúng ta sẽ di chuyển lỗi kiểu và trạng thái biểu mẫu vào tệp này và Xuất

5:42:12 sau đó chúng tôi sẽ thực hiện hành động tạo máy chủ sản phẩm nhưng sẽ loại bỏ chỉ thị máy chủ của Hoa Kỳ khỏi chức năng như

5:42:27 Không còn cần thiết ở đây nữa. Hãy đảm bảo nhập sản phẩm và chuyển hướng các hàm ở phía trên. Nhập thêm sản phẩm.

5:42:35 Từ cơ sở dữ liệu Prisma và nhập chuyển hướng từ điều hướng tiếp theo, hãy chắc chắn xuất sản phẩm ngay bây giờ. Hãy cùng cập nhật trang của chúng tôi. Tệp TSX chúng tôi

5:42:49 sẽ xóa nhập cho sản phẩm quảng cáo và chuyển hướng, chúng tôi sẽ nhập mẫu trạng thái và tạo sản phẩm từ sản phẩm mới của chúng tôi

5:42:58 sản phẩm. Tệp TS trong thư mục actions, chúng tôi vẫn sẽ sử dụng trạng thái hành động với chức năng create product ngay bây giờ nếu bạn

5:43:06 lưu tệp và thử trên trình duyệt, chúng tôi gặp lỗi nói bạn có ý dùng máy chủ không, nên hãy chắc chắn rằng chúng tôi không có

5:43:16 bất kỳ khoảng trắng dư nào có thể điều hướng đến sản phẩm tạo bằng dấu gạch nối DB và không cần điền vào biểu mẫu. Các trường, nhấp vào nút gửi

5:43:25 Chúng tôi có dữ liệu mẫu đơn. getet không phải là một hàm và điều này là vì khi chúng ta sử dụng action State và pass, create

5:43:33 product hàm tự động nhận trạng thái trước đó làm đối số đầu tiên, do đó trạng thái trước đó của kiểu form

5:43:43 Khi bạn gửi với các trường trống, bạn sẽ thấy các thông báo lỗi, tiêu đề, giá và mô tả, tất cả đều

5:43:51 là bắt buộc khi bạn điền đầy đủ và gửi sản phẩm mới của bạn sẽ xuất hiện trong danh sách và đó là tất cả chúng tôi có

5:44:02 đã triển khai xác thực biểu mẫu thành công bằng cách sử dụng trạng thái hành động sử dụng với hành động biểu mẫu được định nghĩa riêng cách tiếp cận này cho phép

5:44:09 Chúng tôi là lựa chọn tốt nhất của cả hai thế giới, chúng tôi có thể sử dụng các hook React phía khách hàng để quản lý trạng thái biểu mẫu bằng cách tận dụng sức mạnh của

5:44:16 hành động máy chủ cho các biến đổi dữ liệu cho chủ đề tiếp theo Tôi muốn đi vòng nhanh để nói về trạng thái biểu mẫu đang chờ trả về từ khi sử dụng

5:44:28 và đang chờ trả về từ hành động sử dụng Trạng thái chúng ta hãy xem trạng thái đang chờ từ trạng thái biểu mẫu sử dụng và E đang chờ xử lý

5:44:37 từ use action State cả hai boolean có thể giúp chúng tôi xác định xem biểu mẫu có đang được gửi hay không và cho phép chúng tôi vô hiệu hóa việc gửi.

5:44:44 nhưng có một điểm khác biệt thú vị giữa chúng đáng để hiểu trạng thái chờ xử lý khi sử dụng

5:44:49 trạng thái biểu mẫu dành riêng cho việc nộp biểu mẫu; ngược lại, EAS đang chờ hành động sử dụng có thể là

5:44:56 sử dụng với bất kỳ hành động nào chứ không chỉ gửi biểu mẫu. Trong ví dụ của chúng tôi, bạn thực sự có thể sử dụng bất kỳ hành động nào và nhận được

5:45:03 công việc đã hoàn thành đang chờ từ trạng thái biểu mẫu sử dụng trong thành phần gửi riêng hoặc một phần tử nút thông thường với chi tiêu điện tử

5:45:12 từ trạng thái hành động sử dụng nhưng đây là cách tôi nghĩ về việc chọn giữa chúng khi đang chờ từ trạng thái sử dụng biểu mẫu khi

5:45:19 bạn đang xây dựng các thành phần tái sử dụng được thiết kế để tồn tại bên trong các biểu mẫu, ví dụ như nút gửi hoặc tải

5:45:25 Các spinner mà bạn muốn sử dụng trên các biểu mẫu khác nhau trong ứng dụng của bạn chọn e đang chờ từ hành động sử dụng trạng thái

5:45:32 khi bạn cần theo dõi các hành động của máy chủ không nhất thiết liên quan đến việc nộp biểu mẫu, nó mang lại cho bạn sự linh hoạt bổ sung

5:45:40 Nên nói thêm rằng tài liệu chính thức trên React cũng như Next SH khá ít về chủ đề này nếu bạn có nhiều tài liệu thật hơn

5:45:47 Ví dụ thế giới về việc bạn sử dụng một trong hai thay vì cái kia, tôi rất muốn nghe về chúng trong phần bình luận bên dưới

5:45:53 Được rồi, bây giờ bạn đã thấy cách tạo sản phẩm mới với các hành động máy chủ. Tiếp theo, hãy cùng xem cách cập nhật

5:45:59 Một sản phẩm hiện có sử dụng Server Actions, hãy cùng khám phá việc triển khai thao tác cập nhật cho các sản phẩm của chúng tôi và

5:46:07 tìm hiểu cách truyền thêm các đối số cho hành động máy chủ trong VS Code, chúng ta sẽ bắt đầu bằng cách tạo một route để chỉnh sửa

5:46:14 chi tiết sản phẩm dưới ứng dụng SL products DB tạo một tuyến động mới trong dấu ngoặc vuông id/trang. TSX, hãy sao chép mã từ trang tạo cơ sở dữ liệu sản phẩm.

5:46:29 TSX và dán vào tuyến mới này, đổi tên thành phần thành phần để chỉnh sửa sản phẩm, trang trên trình duyệt, điều hướng đến

5:46:38 DB sản phẩm SL1 và chúng tôi thấy biểu mẫu để cập nhật chi tiết sản phẩm, giờ cần lấy dữ liệu sản phẩm hiện có tương ứng với

5:46:48 id1 để điền vào biểu mẫu này, chúng ta sẽ trích xuất tham số route ID và lấy sản phẩm tương ứng từ

5:46:56 cơ sở dữ liệu để phân cấu trúc các tham số thuộc kiểu ID đối tượng hứa có kiểu chuỗi trong thành phần D ID cấu trúc từ

5:47:08 tham số nên const ID bằng tham số we và sau đó ta sẽ sử dụng phương thức get product từ Prisma DB, trả về một

5:47:19 product cho ID const product bằng một tích weit get và ta đi qua cú pháp end ID bây giờ đây là nơi ta

5:47:31 gặp thử thách đầu tiên, chúng ta không thể sử dụng từ khóa AIT vì các thành phần khách hàng không thể là thành phần Asing nếu tôi thêm

5:47:41 Theo từ khóa bạn có thể thấy cảnh báo và chúng tôi cũng không thể gỡ use client vì đang dùng react hugs trong

5:47:47 Thành phần Đây thực sự là một vấn đề phổ biến bạn sẽ gặp trong XS để giải quyết điều này, chúng ta sẽ chia logic của mình theo cùng một cách

5:47:55 Thư mục ID tạo một tệp mới sản phẩm dấu gạch nối chỉnh sửa biểu mẫu.

5:48:02 TSX sao chép toàn bộ mã từ Peach. TSX nhưng bỏ phần lấy dữ liệu để loại bỏ các tham số chờ sản phẩm và

5:48:15 Hãy gọi thành phần biểu mẫu chỉnh sửa sản phẩm này trong trang. DSX, chúng tôi sẽ chỉ tập trung vào phần lấy dữ liệu nên

5:48:24 xóa chỉ thị sử dụng C ở phía trên trạng thái hành động sử dụng khỏi phản ứng gọi sử dụng trạng thái hành động và cho

5:48:32 jsx chúng ta trả về thành phần biểu mẫu sản phẩm mới tạo, chúng ta cũng có thể xóa trạng thái biểu mẫu và tạo

5:48:40 product cũng như trạng thái ban đầu từ thành phần, chúng ta có thể thêm bất đồng bộ vì không còn hook nào nữa để đi qua

5:48:48 product làm prop cho component form nên chúng ta đang làm ở đây là trích xuất các tham số route để lấy ID

5:48:56 lấy sản phẩm tương ứng với ID và truyền chi tiết sản phẩm đó làm đạo cụ để chỉnh sửa sản phẩm

5:49:03 biểu mẫu trong thành phần client của biểu mẫu chỉnh sửa sản phẩm, hãy chỉ định sản phẩm prop và đối với kiểu, chúng ta sẽ truy cập vào

5:49:12 trang danh sách sản phẩm trong sản phẩm gạch nối DB xuất khẩu loại sản phẩm và nhập nó vào đây, tôi sẽ chắc chắn sử dụng tại

5:49:22 /a/ cơ sở dữ liệu sản phẩm hiện sử dụng chi tiết sản phẩm làm giá trị mặc định cho tất cả các trường biểu mẫu, vì vậy giá trị mặc định cho tiêu đề bằng

5:49:33 sản phẩm. tiêu đề tương tự cho giá trị mặc định là bằng sản phẩm. giá và đối với mô tả giá trị mặc định là

5:49:44 bằng mô tả sản phẩm vì mô tả có thể là null, chúng ta sử dụng toán tử kết tụ null để cung cấp

5:49:52 một chuỗi rỗng làm giá trị mặc định, vì vậy dấu hỏi kép, chuỗi rỗng nếu chúng ta quay lại trang chỉnh sửa sản phẩm, chúng ta

5:50:02 vẫn còn lỗi typescript trước hãy nhập loại sản phẩm tôi sẽ sao chép dòng này dán nó

5:50:10 tại đây và chỉ định kiểu biến sản phẩm, bây giờ get product có thể trả về null. Nếu không tìm thấy tích thì chúng ta

5:50:20 cũng cần xử lý trường hợp đó, nếu không tìm thấy sản phẩm, chúng ta gọi hàm không tìm thấy từ điều hướng SL tiếp theo.

5:50:29 đảm bảo nhập nó ở đầu cùng typescript giờ đã vui vẻ trở lại trang danh sách cơ sở dữ liệu sản phẩm kết thúc tiêu đề sản phẩm

5:50:37 với một thành phần liên kết để cho phép điều hướng đến trang chỉnh sửa nên thành phần liên kết mà chúng tôi nhập từ SL tiếp theo

5:50:45 link wrap tiêu đề sản phẩm chỉ định mỗi ref bằng back text SL products dấu gạch nối DB slid và đó là dollar curly Braes

5:51:00 sản phẩm. ID trong trình duyệt khi nhấp vào tiêu đề sản phẩm để sản phẩm một đưa chúng ta đến trang chỉnh sửa đã được điền sẵn

5:51:10 với chi tiết sản phẩm One Price 500 mô tả One One thiết lập giao diện người dùng của chúng tôi giờ đã hoàn tất Hãy chuyển sang triển khai

5:51:19 Hành động cập nhật máy chủ cho việc gửi biểu mẫu trong sản phẩm. TS trong thư mục actions sẽ nhân đôi lệnh tạo

5:51:27 Hành động máy chủ sản phẩm và đặt tên cho nó Biểu mẫu Chỉnh sửa Sản phẩm. TSX, chúng tôi sẽ nhập hành động chỉnh sửa máy chủ sản phẩm thay vì

5:51:44 tạo sản phẩm và truyền nó vào làm đối số để sử dụng hành động Trạng thái cũng quay lại trong chỉnh sửa hành động máy chủ sản phẩm sẽ

5:51:54 Chỉnh sửa để gọi cập nhật sản phẩm từ Prismad DB. TS cập nhật sản phẩm trong cơ sở dữ liệu nhưng giờ chúng ta lại phải đối mặt với một vấn đề thú vị khác

5:52:05 sản phẩm cập nhật thử thách cần mã sản phẩm, nghĩa là chúng ta cần mã sản phẩm trong máy chủ chỉnh sửa sản phẩm

5:52:12 vì Product ID không phải là trường biểu mẫu, chúng ta không thể truy cập nó từ dữ liệu biểu mẫu như các trường khác, giờ chúng ta có thể sử dụng một

5:52:20 trường nhập ẩn sao cho loại đầu vào bằng Hidden name là giá trị ID bằng sản phẩm. ID nhưng cái này

5:52:29 sẽ hiển thị ID trong HTML mà không mã hóa đúng, thay vào đó hãy dùng phương thức bind của javascript để truyền

5:52:37 các đối số bổ sung trong thành phần edit product form chúng ta có thể liên kết ID với hành động edit product server để const edit

5:52:46 sản phẩm có ID bằng với chỉnh sửa sản phẩm. liên kết ID sản phẩm phẩy null và sau đó truyền hàm này vào hành động use

5:52:58 Xác định ID đối số liên kết giờ đây sẽ có sẵn như đối số đầu tiên trong hành động chỉnh sửa máy chủ sản phẩm

5:53:06 nên ID kiểu số phẩy, trạng thái trước của kiểu form dữ liệu form trạng thái, kiểu form dữ liệu truyền ID này lần đầu tiên

5:53:16 Tham số cập nhật hàm sản phẩm ID dấu phẩy tiêu đề giá và mô tả trong trình duyệt cập nhật chi tiết sản phẩm để

5:53:27 mô tả cập nhật Chỉ một lần nhấn để gửi và các thay đổi sẽ được phản ánh ngay trên trang danh sách sản phẩm trên máy chủ cập nhật của chúng tôi

5:53:39 Hành động đã hoàn tỏa, tôi hiểu đó là quá nhiều điều cần tiếp nhận, nên để tôi tóm tắt những gì chúng tôi đã làm, chúng tôi đã tạo ra một lộ trình năng động.

5:53:47 Để cập nhật từng sản phẩm, chúng tôi đã sử dụng Route Parms để lấy thông tin sản phẩm từ cơ sở dữ liệu của mình, chúng tôi phát hiện ra rằng

5:53:55 các thành phần khách hàng không thể là thành phần không đồng bộ để giải quyết vấn đề không đồng bộ chúng ta chia dữ liệu lấy vào máy chủ

5:54:01 logic thành phần và biểu mẫu thành thành phần khách hàng từ thành phần máy chủ, chúng tôi truyền chi tiết sản phẩm như một prop đến

5:54:09 thành phần khách hàng Trong thành phần khách hàng chúng tôi gán chi tiết sản phẩm làm giá trị mặc định vào các trường biểu mẫu trong các hành động của mình

5:54:17 sản phẩm. TS, chúng tôi đã tạo một hành động máy chủ mới để xử lý cập nhật sản phẩm, chức năng cơ sở dữ liệu, mặc dù yêu cầu

5:54:26 ID sản phẩm không có sẵn trong dữ liệu biểu mẫu, chúng tôi đã sử dụng phương thức bind để truyền đối số ID mà không làm lộ nó

5:54:34 trong HTML, chúng ta lấy ID làm đối số đầu tiên trong hành động máy chủ và truyền nó đến hàm cơ sở dữ liệu mà chúng ta

5:54:41 Chức năng cập nhật sản phẩm đã hoạt động trơn tru. Tiếp theo, chúng ta sẽ xử lý phần cuối cùng của các hoạt động CRUD

5:54:48 chức năng xóa, hãy cùng khám phá việc triển khai chức năng xóa bằng các hành động của máy chủ, chúng ta sẽ bắt đầu bằng cách thêm một

5:54:58 Nút xóa cho từng sản phẩm trong danh sách của chúng tôi tại trang cơ sở dữ liệu sản phẩm. Sản phẩm sau DSX. giá Tôi sẽ thêm một file xóa

5:55:07 loại nút bằng để gửi với nền đỏ để tạo kiểu và xóa văn bản tiếp theo, hãy định nghĩa

5:55:16 Xóa hành động máy chủ trong Hành động / Sản phẩm. TS, chúng tôi sẽ thêm chức năng xóa sản phẩm, tức là xuất hàm không đồng bộ, xóa sản phẩm, nhập chức năng xóa sản phẩm khỏi cơ sở dữ liệu prismad.

5:55:32 TS xử lý việc xóa một sản phẩm theo hành động xóa máy chủ sản phẩm ID của nó sẽ nhận tham số ID kiểu

5:55:42 Số và chuyển trực tiếp đến chức năng xóa sản phẩm, rất đơn giản trong sản phẩm của chúng tôi

5:55:49 chúng ta cần gọi hành động This Server, nhưng câu hỏi là làm thế nào để thực hiện điều đó nếu sử dụng OnClick Handler trên

5:55:56 nút xóa nó sẽ làm cho nó trở thành mã phía máy khách, tuy nhiên chúng tôi muốn thành phần vẫn là thành phần máy chủ

5:56:03 giải pháp là bao bọc nút của chúng ta bằng một phần tử biểu mẫu, ví dụ thẻ mở và thẻ đóng biểu mẫu trên phần tử biểu mẫu

5:56:13 sẽ chỉ định thuộc tính hành động để gọi hành động xóa máy chủ sản phẩm sao cho hành động bằng để xóa sản phẩm

5:56:23 chắc chắn để nhập ở phía trên, import remove product from actions. SL products now remove product đáp ứng tham số ID, vì vậy chúng ta cũng sẽ liên kết product.

5:56:35 Tôi đã dùng phương pháp bind nên là sản phẩm dấu phẩy null. ID, điều này làm cho ID sản phẩm trở thành đối số đầu tiên để

5:56:45 xóa sản phẩm giống như chúng tôi đã làm trước đó với hành động cập nhật máy chủ sản phẩm, cùng một ID này được truyền để xóa sản phẩm

5:56:54 hãy lưu lại tất cả và thử trên tuyến cơ sở dữ liệu sản phẩm, chúng ta thấy nút xóa mới được thêm vào cho từng sản phẩm

5:57:02 khi chúng ta nhấn xóa trên sản phẩm cuối cùng, tức là validation typle một, chúng ta thấy yêu cầu mạng nhưng không có gì xảy ra trong giao diện nếu bạn

5:57:12 Làm mới trang bạn sẽ thấy sản phẩm cuối cùng đã biến mất, vậy còn thiếu gì? Chúng ta cần làm mới lại cái này

5:57:19 danh sách sản phẩm tự động sau khi xóa để khắc phục điều này, chúng ta có thể sử dụng một hàm gọi là revalidate path. Hãy chắc chắn nhập revalidate path.

5:57:31 từ dấu gạch chéo tiếp theo làm đối số, hãy chỉ định dấu gạch chéo cơ sở dữ liệu, đây là đường dẫn của trang danh sách sản phẩm mà chúng tôi đang báo cho ni chia sẻ

5:57:42 refetch dữ liệu cho/ sản phẩm, đường dẫn cơ sở dữ liệu sau khi xóa, hãy chắc chắn thêm từ khóa await ngay khi chúng tôi xóa một

5:57:51 Product Submit Product One Bạn thấy yêu cầu mạng và nó biến mất khỏi danh sách mà không cần hướng dẫn sử dụng

5:57:59 Làm mới Bạn vẫn sẽ nhận thấy độ trễ 1,5 giây mà chúng tôi đã tích hợp trong ứng dụng thực tế thường là

5:58:07 Ngắn hơn nữa, bất kỳ độ trễ nào cũng không lý tưởng cho trải nghiệm người dùng, nên tiếp theo chúng ta sẽ xem cách làm cho việc này mượt mà hơn khi sử dụng

5:58:15 Cập nhật lạc quan cho chủ đề cuối cùng liên quan đến hoạt động CRUD. Hãy cùng xem xét cách thực hiện các cập nhật lạc quan với

5:58:24 use optimistic hook, use optimistic là một react hook, nó cung cấp cách để cập nhật giao diện người dùng một cách optimistic trong khi

5:58:31 Hành động không đồng bộ đang được tiến hành, kỹ thuật này giúp các ứng dụng của chúng tôi cảm thấy phản hồi tốt hơn, đặc biệt khi làm việc với

5:58:37 thay vì để người dùng chờ đợi phản hồi từ máy chủ, chúng ta có thể hiển thị kết quả mong đợi ngay lập tức để tôi trình bày

5:58:44 Bạn sẽ thấy cách điều này hoạt động với một đoạn mã trong ví dụ của chúng ta khi người dùng nhấp vào nút xóa thay vì độ trễ 1,5 giây

5:58:54 để hiển thị việc xóa, chúng tôi sẽ xóa sản phẩm đó ngay lập tức khỏi danh sách để đạt được điều đó, trước tiên chúng tôi nhập sử dụng

5:59:01 Optimistic Hook từ react trên trang cơ sở dữ liệu sản phẩm của chúng tôi. Nhập file TSX sử dụng optimistic từ react để gọi nó trong

5:59:10 thành phần sau khi dữ liệu đã được lấy sử dụng optimistic và hook nhận hai tham số, tham số đầu tiên là

5:59:19 trạng thái ban đầu rằng bạn muốn cập nhật một cách lạc quan, đây là danh sách các sản phẩm được lấy từ cơ sở dữ liệu, tham số thứ hai là một

5:59:30 hàm xác định cách cập nhật trạng thái một cách lạc quan hàm này lấy trạng thái hiện tại vào các đối số

5:59:38 mà chúng ta sẽ gọi là các sản phẩm hiện tại và một lập luận bổ sung để giúp tạo ra trạng thái mới cho kịch bản của chúng ta là

5:59:46 đối số bổ sung là ID sản phẩm tương ứng với sản phẩm chúng ta muốn xóa hàm lọc hiện tại

5:59:53 mảng products để loại trừ sản phẩm có ID đã cho, để các sản phẩm hiện tại lọc sản phẩm sao cho sản phẩm đó. ID là

6:00:03 không bằng ID sản phẩm, đây chỉ là JavaScript đơn giản, không có gì cụ thể cho phản ứng hoặc tiếp theo, điều quan trọng là chúng ta phải trả về bản cập nhật này.

6:00:13 Hãy liệt kê làm trạng thái lạc quan của chúng ta, bây giờ điều này sử dụng gì cho câu lạc quan trả về hai điều đầu tiên là kết quả của sự lạc quan

6:00:22 trạng thái mà chúng ta sẽ gọi là các sản phẩm lạc quan. Đây là mảng mà chúng ta sẽ trình bày cho người dùng, thứ hai là một hàm để

6:00:31 kích hoạt cập nhật lạc quan, hàm lấy một đối số thuộc bất kỳ loại nào và chúng ta sẽ gọi hàm cập nhật rằng

6:00:39 Chúng ta đã định nghĩa đối số thứ hai là sử dụng từ lạc quan, vậy làm thế nào để sử dụng hai giá trị này trước thay vì

6:00:47 Lặp lại danh sách sản phẩm từ cơ sở dữ liệu, chúng ta sẽ lặp lại danh sách sản phẩm lạc quan là

6:00:54 được quản lý bởi sử dụng Hook lạc quan thứ hai, chúng ta tạo một hàm không đồng bộ xóa sản phẩm theo ID, lấy một ID sản phẩm kiểu

6:01:05 số và xử lý hành động xóa máy chủ của chúng tôi, vì vậy hãy chờ xóa sản phẩm, truyền mã sản phẩm vào mã sản phẩm trước khi gọi

6:01:16 hành động máy chủ tuy nhiên chúng tôi kích hoạt bản cập nhật optimistic nên đặt sản phẩm optimistic truyền ID sản phẩm này

6:01:25 ngay lập tức hiển thị cho người dùng các thay đổi của họ trong khi việc xóa thực sự diễn ra ở nền trên phần tử biểu mẫu để

6:01:32 thuộc tính hành động chúng ta gọi hàm mới remove product bằng cách liên kết ID sản phẩm để liên kết null comma product. Nhận diện cái này

6:01:46 value là mã sản phẩm mà hàm nhận được, điều này rất khó tiếp nhận, vậy hãy cùng xem qua quy trình sử dụng

6:01:52 Hook lạc quan Một lần nữa chúng ta gọi hook với trạng thái hiện tại và một hàm trả về trạng thái lạc quan

6:02:01 trạng thái lạc quan có sẵn làm giá trị trả về đầu tiên mà chúng tôi sử dụng để hiển thị danh sách các sản phẩm mà chúng tôi sử dụng

6:02:08 giá trị trả về thứ hai là hàm setter để gọi hàm cập nhật và thực thi logic để trả về trạng thái mới này

6:02:17 Chức năng setter chạy ngay trước khi máy chủ thực hiện, người dùng luôn thấy trạng thái lạc quan trong khi thực tế

6:02:23 thao tác hoàn tất ở chế độ nền. Nếu chúng ta lưu tệp, chúng ta sẽ thấy lỗi vì đang sử dụng một hook trong máy chủ.

6:02:31 Thành phần Giải pháp chúng ta sẽ cần tách biệt việc lấy dữ liệu khỏi logic đột biến dữ liệu tương tự như cách chúng ta đã làm

6:02:37 Với hoạt động cập nhật của chúng tôi trước đó, dọc theo trang của bạn. TSX tạo chi tiết dấu gạch nối sản phẩm tệp mới. TSX sao chép

6:02:48 Toàn bộ mã từ trang giấy. TSX và dán vào tệp mới này, đổi tên thành phần thành chi tiết sản phẩm, chi tiết sản phẩm trở thành

6:02:59 một thành phần máy khách xử lý các đột biến và cập nhật lạc quan thêm chỉ thị use CLI ở phía trên để loại bỏ ASN

6:03:07 từ khóa và cả mã lấy dữ liệu, nó sẽ nhận dữ liệu từ thành phần máy chủ cha, thay vào đó chúng ta chỉ định

6:03:15 sản phẩm loại sản phẩm tôi cũng sẽ làm cho việc xuất không tên này hoàn hảo cho trang. TSX giờ đây sẽ là một thành phần máy chủ chịu trách nhiệm

6:03:27 chỉ lấy dữ liệu mới có thể xóa Mã không mong muốn sử dụng sản phẩm xóa tích cực và thành phần liên kết có thể được

6:03:36 Đã xóa thay vào đó, hãy nhập thành phần chi tiết sản phẩm mới tạo, vì vậy hãy nhập chi tiết sản phẩm từ DO/Chi tiết sản phẩm

6:03:44 Đối với thành phần, chúng ta vẫn sẽ lấy sản phẩm từ cơ sở dữ liệu và sau đó trả về cùng một thành phần đó, truyền vào

6:03:53 danh sách sản phẩm như một đạo cụ lưu cả hai tệp và thử nghiệm trên trình duyệt. Tôi muốn bạn quan sát điều gì xảy ra khi chúng ta

6:04:01 nhấp nút xóa để kiểm tra sản phẩm một xóa và sản phẩm biến mất ngay lập tức trong khi việc xóa thực sự hoàn tất trong

6:04:10 Nền sau 1,5 giây nhưng người dùng của bạn vẫn có trải nghiệm phản hồi mượt mà mà họ yêu thích, nên hãy xóa nó đi

6:04:18 được xóa ngay lập tức và thao tác xóa hoàn tất ở nền, kết thúc phần xem xét các thao tác CRUD với các thành phần máy chủ

6:04:26 và các hành động máy chủ trong bộ định tuyến ứng dụng cho Chủ đề cuối cùng trong phần này về việc lấy dữ liệu và biến đổi

6:04:35 hãy cùng xem thành phần biểu mẫu mới được giới thiệu trong XS, thành phần biểu mẫu được xây dựng trên nền tảng HTML

6:04:42 Form Element và nó đi kèm với một số tính năng mạnh mẽ khiến nó hoàn hảo cho các ứng dụng web hiện đại. Nó tự động lấy trước

6:04:51 giao diện người dùng loaring xử lý điều hướng phía khách hàng khi gửi biểu mẫu và cung cấp cải tiến tiến bộ từ

6:04:58 Hộp cho phép tôi chỉ cho bạn cách thành phần hoạt động với một ví dụ trong ứng dụng của chúng tôi. Hiện tại chúng tôi có trang chủ.

6:05:05 và một trang cơ sở dữ liệu gạch nối sản phẩm, nơi chúng tôi hiển thị danh sách sản phẩm trên trang chủ, chúng tôi sẽ thêm chức năng tìm kiếm sản phẩm

6:05:12 tính năng sẽ chuyển hướng đến trang cơ sở dữ liệu sản phẩm để hiển thị danh sách sản phẩm được lọc theo truy vấn tìm kiếm

6:05:20 Hãy cùng vào mã VS và xem cách thực hiện điều đó, trước tiên hãy thiết lập trạng thái tải trong thư mục cơ sở dữ liệu sản phẩm

6:05:28 Tạo một lệnh tải. Tệp TSX Định nghĩa một hàm mặc định xuất thành phần react đơn giản để tải trả về thẻ Dev khi tải sản phẩm tiếp theo

6:05:40 chúng ta sẽ định nghĩa một thành phần tìm kiếm, tạo một tệp mới gọi là tìm kiếm. TSX trong thư mục components xuất một thành phần react gọi là

6:05:51 tìm kiếm thành phần này sẽ hiển thị một biểu mẫu với đầu vào tìm kiếm và nút gửi. Tôi sẽ dán mã để tiết kiệm thời gian để

6:06:00 xuất const tìm kiếm trả về một phần tử biểu mẫu HTML với action is equal/products dấu gạch nối DB với một số kiểu dáng và

6:06:09 sau đó chúng ta có một tên phần tử đầu vào bằng với truy vấn với CSS styling và các sản phẩm tìm kiếm placeholder, chúng ta cũng có

6:06:17 một phần tử nút kiểu gửi theo kiểu CSS và văn bản gửi một biểu mẫu rất đơn giản với đầu vào và

6:06:26 tuy nhiên, chúng ta sẽ sử dụng thành phần biểu mẫu mới thay vì phần tử HTML biểu mẫu để nhập biểu mẫu từ

6:06:36 Biểu mẫu SL tiếp theo và gọi thành phần biểu mẫu. Bây giờ chúng ta đã có thành phần tìm kiếm sẵn sàng, hãy thêm nó vào trang chủ của chúng ta, gốc

6:06:48 trang. Tệp TSX trong thư mục ứng dụng sẽ là điểm vào cho chức năng tìm kiếm của chúng tôi. Nhập tìm kiếm

6:06:56 thành phần từ tại các thành phần tìm kiếm SL và ngay sau phần tử HTML chính và trước khi thành phần hình ảnh được gọi

6:07:06 tìm kiếm Nếu bạn kiểm tra trình duyệt, bạn sẽ thấy nút nhập và gửi tìm kiếm được hiển thị khi bạn nhập truy vấn tìm kiếm và nhấn

6:07:18 gửi bạn sẽ được dẫn đến trang cơ sở dữ liệu sản phẩm gạch chéo và trạng thái tải sẽ xuất hiện ngắn trước

6:07:25 Sản phẩm được hiển thị danh sách sản phẩm nhưng không được lọc để tìm kiếm hoạt động, chúng ta cần cập nhật

6:07:32 Logic lấy dữ liệu dựa trên truy vấn tìm kiếm nên quay lại so với mã trong cơ sở dữ liệu Prisma. TS, hãy chỉnh sửa chức năng lấy sản phẩm

6:07:42 để xử lý truy vấn tìm kiếm, hãy chấp nhận truy vấn, tùy chọn là kiểu chuỗi và nếu truy vấn tồn tại, chúng ta sẽ

6:07:53 Trả lại sản phẩm Prisma. tìm nhiều và chúng ta sẽ chỉ định một điều kiện trong đó hoặc tiêu đề chứa mô tả truy vấn

6:08:05 chứa truy vấn, nói cách khác: nếu có tham số truy vấn, hãy tìm tất cả các sản phẩm có tiêu đề chứa truy vấn tìm kiếm đó hoặc

6:08:15 mô tả chứa truy vấn tìm kiếm nếu truy vấn không tồn tại hãy trả về danh sách đầy đủ các sản phẩm cuối cùng chúng ta cần

6:08:23 cập nhật trang cơ sở dữ liệu sản phẩm của chúng tôi. TSX để xử lý tham số tìm kiếm nên thành phần trang giờ có props và chúng ta

6:08:33 phân cấu trúc các tham số tìm kiếm kiểu đối tượng hứa sẽ chứa truy vấn là tùy chọn và thuộc loại

6:08:43 chuỗi trong phần thân hàm, chúng ta phân cấu trúc truy vấn từ các tham số tìm kiếm và truyền truy vấn làm đối số để lấy

6:08:53 sản phẩm trở lại trình duyệt khi bạn gõ sản phẩm thứ ba vào mục tìm kiếm và nhấn gửi, bạn sẽ được điều hướng đến

6:09:02 trang cơ sở dữ liệu sản phẩm và sản phẩm sẽ được lọc dựa trên truy vấn tìm kiếm, chúng ta chỉ thấy sản phẩm duy nhất chứa

6:09:10 Sản phẩm thứ ba trong tiêu đề hoặc mô tả Bây giờ có thể không có gì đặc biệt nhưng NEX thực ra là

6:09:18 làm rất nhiều việc phía sau hậu trường, khi thành phần biểu mẫu xuất hiện thì nó sẽ lấy trước giao diện người dùng đang tải

6:09:25 Tuyến DB liên kết với/ sản phẩm đây là giá trị của prop hành động giây khi người dùng gửi tìm kiếm

6:09:33 Điều hướng ngay lập tức đến phía client trang sản phẩm và dữ liệu biểu mẫu được chuyển thành các thuật ngữ URL chẳng hạn.

6:09:40 truy vấn dấu hỏi bằng sản phẩm 3 phần ba nó sẽ hiển thị trạng thái tải trong khi kết quả tìm kiếm đang được

6:09:47 khi lấy dữ liệu, chúng ta thấy thẻ div đang tải trong khi các sản phẩm đang được lấy ở nền, cuối cùng khi dữ liệu đã được

6:09:54 kết quả đã sẵn sàng hiển thị trong giao diện người dùng, rất nhiều chức năng đang diễn ra ở đây, thành phần biểu mẫu cũng vậy.

6:10:02 hỗ trợ nâng cao tiến bộ ngay khi cài đặt, nghĩa là ngay cả khi không có JavaScript, biểu mẫu vẫn hoạt động như một

6:10:09 dạng HTML thông thường, thành phần biểu mẫu mang lại trải nghiệm người dùng rất mượt mà với ít công sức từ phía chúng tôi.

6:10:17 tất cả các phần phức tạp của việc điều hướng và tải biểu mẫu, cho phép chúng ta tập trung xây dựng các tính năng thay vì

6:10:24 xử lý mã lộn xộn như ngăn chặn quản lý trạng thái thủ công mặc định hoặc bất kỳ cách xử lý biểu mẫu cổ điển nào

6:10:31 và bạn nên biết rằng thành phần biểu mẫu cũng hỗ trợ các hành động máy chủ trong trang Chi tiết sản phẩm của chúng tôi thay vì chúng tôi

6:10:41 có một biểu mẫu cho phép chúng ta xóa một sản phẩm, hãy thay thế phần tử biểu mẫu HTML bằng thành phần biểu mẫu để

6:10:49 nhập biểu mẫu từ biểu mẫu SL tiếp theo và thay thế phần tử HTML bằng thành phần biểu mẫu, quay lại trình duyệt và

6:10:57 xóa một sản phẩm nó vẫn hoạt động như mong đợi để tóm tắt thành phần biểu mẫu nằm trong thành phần mới trong X shs mở rộng

6:11:07 Phần tử biểu mẫu HTML và cung cấp nhiều tính năng mạnh mẽ như prefetching, tải giao diện người dùng, điều hướng phía client trên

6:11:14 gửi biểu mẫu và nâng cấp tiến bộ ngay từ đầu, chúng ta hoàn thành phần thứ ba về lấy dữ liệu và đột biến

6:11:23 Chúng tôi đã học cách lấy dữ liệu trong các thành phần khách hàng cách lấy dữ liệu trong các thành phần máy chủ với thao tác không đồng bộ và xử lý tải

6:11:30 và trạng thái lỗi khi tải. TSX và lỗi. TSX và việc lấy dữ liệu trực tiếp từ cơ sở dữ liệu, chúng tôi cũng đã học được

6:11:38 về các hành động máy chủ cho việc xác thực dữ liệu thay đổi và phản hồi trạng thái đang chờ với trạng thái biểu mẫu sử dụng và hành động sử dụng

6:11:45 Trạng thái hook tách các hành động máy chủ để sử dụng trong các thành phần khách hàng cách truyền thêm dữ liệu để thực hiện cập nhật và

6:11:52 thao tác xóa cách thực hiện cập nhật tích cực và cuối cùng là cách xử lý biểu mẫu với thành phần biểu mẫu mới

6:12:00 Bây giờ bạn sẽ có hiểu biết vững chắc về việc lấy dữ liệu và xử lý biểu mẫu trong SH tiếp theo cho phần tiếp theo của năm tới

6:12:09 Tất nhiên, hãy cùng bàn về một khía cạnh quan trọng khác của ứng dụng web là xác thực nếu bạn nghĩ về nó

6:12:15 Hầu hết các ứng dụng xoay quanh người dùng. Khi xây dựng cho người dùng, chúng ta cần xem xét ba khái niệm cơ bản: danh tính.

6:12:22 Phiên và Truy cập Danh tính là về việc xác minh ai đó thông qua các phiên xác thực để theo dõi một

6:12:29 trạng thái đăng nhập của người dùng trên các yêu cầu và kiểm soát truy cập họ có thể làm gì, các điều khoản dành cho nhà phát triển mà chúng tôi gọi là

6:12:36 Quản lý và ủy quyền phiên xác thực Now NEX xử lý điều này hơi khác so với React truyền thống

6:12:43 Ứng dụng với ứng dụng React một trang, bạn chỉ xử lý mã phía client, nhưng tiếp theo bạn phải bảo vệ

6:12:51 ứng dụng của bạn từ ba góc độ khác nhau: mã phía client, mã phía máy chủ và các tuyến API khi triển khai

6:12:57 xác thực bạn thường muốn cho phép người dùng đăng ký, cung cấp cho họ cách đăng nhập, giúp họ quản lý

6:13:04 tài khoản hiển thị hoặc ẩn các thành phần giao diện người dùng dựa trên việc chúng có đăng nhập hay không, bảo vệ một số tuyến đường nhất định tùy thuộc vào

6:13:10 Trạng thái xác thực, phiên truy cập và dữ liệu người dùng: khi cần thiết, thiết lập kiểm soát truy cập dựa trên RO và cuối cùng cung cấp cách thức

6:13:17 Để đăng xuất, đây là điều mà việc xây dựng tất cả từ đầu sẽ mất rất nhiều thời gian, đó là lý do ngay cả Nexts cũng vậy.

6:13:25 khuyến nghị sử dụng thư viện xác thực mà các chú chó nêu rõ trong khi bạn có thể triển khai một quy trình tùy chỉnh cho

6:13:32 tăng cường bảo mật và đơn giản, chúng tôi sử dụng thư viện xác thực, điều này dẫn chúng ta đến thư ký, thư ký có thực sự như vậy không?

6:13:40 Dịch vụ xác thực và quản lý người dùng tuyệt vời hoạt động tuyệt vời với Next chia sẻ phần hay nhất là miễn phí

6:13:47 đến 10.000 người dùng hoạt động hàng tháng, điều này hoàn hảo cho khóa học của chúng tôi và hầu hết các dự án bạn sẽ xây dựng, tôi thực sự đã từng dùng clerk

6:13:54 trong một vài dự án trang web của tôi và tôi có thể nói đây là giải pháp xác thực đơn giản nhất mà tôi tìm thấy cho lần tới

6:13:59 Nhiều năm trôi qua và bạn sẽ hiểu tại sao để bắt đầu với phần xác thực này, tôi đã thiết lập một

6:14:07 Dự án Fresh Next Year trong VS Code sử dụng lệnh NPX Create Next App at Latest Authentication Demo Dấu gạch nối Go

6:14:15 Tiến lên và chạy lệnh này, bạn sẽ có một dự án tương tự như tôi đang làm ở đây, giờ chúng ta có thể bắt đầu hành trình của mình

6:14:22 để xây dựng một ứng dụng NEX an toàn, hãy bắt đầu bằng cách thiết lập một tài khoản thư ký, tôi khuyên bạn nên làm theo

6:14:31 cùng với tôi để nhanh chóng thiết lập tài khoản song song, hãy truy cập trang chủ của Clerk, liên kết nằm trong phần mô tả

6:14:37 và nhấp vào Bắt đầu tạo tài khoản bằng phương pháp bạn ưa thích Tôi sẽ nhập email và mật khẩu

6:14:45 nhấp vào tiếp tục nhập mã xác minh sau khi đăng nhập tạo ứng dụng mới trong clerk nhập tên

6:14:53 ứng dụng của ứng dụng dưới dạng sh tiếp theo, chọn các tùy chọn đăng nhập mà bạn muốn hỗ trợ và bạn có thể xem

6:15:00 một bản xem trước giao diện người dùng ở bên phải, chúng ta sẽ có email mật khẩu và xác thực Google, tôi cũng sẽ thêm vào

6:15:08 GitHub, bạn có thể thấy điều này được cập nhật trong phần xem trước, để tiếp tục, nhấp vào nút tạo ứng dụng, điều này dẫn chúng ta đến phần thiết lập

6:15:17 trang hướng dẫn chọn chia sẻ tiếp theo làm khung nếu chưa được chọn, bây giờ hãy làm theo các bước sau

6:15:25 cùng nhau để thêm thư ký vào dự án bước một cài đặt gói thư ký sao chép lệnh từ hướng dẫn cài đặt

6:15:33 Page và chạy nó trong terminal npm cài đặt tại clerk nextjs, bước hai thiết lập biến môi trường trong dự án của bạn, tạo một môi trường.

6:15:47 tệp loc trong gốc dự án của bạn và thêm khóa API thư ký sao chép khóa có thể xuất bản và khóa bí mật từ

6:15:58 Trang hướng dẫn cài đặt và thêm chúng vào môi trường. tệp looc: hãy chắc chắn sử dụng khóa của chính bạn chứ không

6:16:05 bước ba của tôi tạo một tệp middleware dots trong thư mục nguồn mã invs trong thư mục nguồn tạo middleware

6:16:14 tệp dots sao chép mã từ trang hướng dẫn cài đặt và dán vào đây, điều này sẽ giúp chúng tôi truy cập dữ liệu Au và

6:16:27 cấu hình các route bảo vệ sau này và tôi vừa nhận ra điều này không nên nằm trong ứng dụng mà nên nằm trong thư mục nguồn bước bốn để bao bọc toàn bộ

6:16:39 ứng dụng với thành phần nhà cung cấp thư ký, là một thành phần react cung cấp ngữ cảnh của thư ký cho bạn

6:16:46 Ứng dụng Chúng ta sẽ làm điều này hơi khác so với hướng dẫn cài đặt trong bố cục gốc

6:16:52 Bố cục tệp. Thành phần nhà cung cấp thư ký nhập TSX ở phía trên từ tại thư ký SL nextjs và bao bọc jsx với nó

6:17:05 Thẻ mở và thẻ đóng của nhà cung cấp thư ký, điều này giờ cho phép chúng ta truy cập vào Hook và các thành phần của thư ký với thiết lập ngay bây giờ

6:17:14 hoàn tất, chúng ta có thể bắt đầu viết mã để thực hiện mục tiêu của mình. Bây giờ chúng ta đã thiết lập Clerk. Thêm đăng nhập và đăng xuất nào.

6:17:24 Chức năng cho ứng dụng của chúng tôi Điều tuyệt vời của Clerk là nó cung cấp các thành phần được xây dựng sẵn mà

6:17:30 xử lý tất cả các luồng xác thực cho chúng tôi. Hãy bắt đầu với chức năng đăng nhập. Bắt đầu bằng cách tạo một thư mục trong nguồn

6:17:37 Thư mục có tên Components bên trong thư mục này sẽ tạo một tệp gọi là Navigation.

6:17:47 TSX ở đây Định nghĩa và Xuất một thành phần react gọi là navigation. Tôi muốn một thanh điều hướng trông ổn với

6:17:54 logo và nút đăng nhập nên để tiết kiệm thời gian tôi sẽ dán mã component mà bạn có thể tìm thấy trên GitHub repo export của tôi

6:18:02 const navigation chúng ta có phần tử HTML điều hướng, nhiều lớp TAOR CSS và mỗi lớp đều gắn thẻ tiếp theo ứng dụng của sh, đó là

6:18:11 Lẽ ra phải là logo của chúng tôi và là chỗ giữ chỗ cho nút đăng nhập, bao gồm thành phần này trong

6:18:18 bố cục. Tệp TSX để nó được hiển thị trên mọi trang ngay trước khi trẻ con kích hoạt điều hướng và đảm bảo nhập nó

6:18:26 từ AT/Components, điều hướng SL, kiểm tra trình duyệt và bạn sẽ thấy thanh điều hướng với logo giống như SHS

6:18:34 Bây giờ hãy thêm nút đăng nhập trong điều hướng. TSX nhập thành phần nút đăng nhập từ thư ký nhập nút đăng nhập từ tại

6:18:47 clerk / nextar kết xuất thành phần trong thẻ div nơi bạn thấy nút đăng nhập thành phần giữ chỗ trên thẻ này

6:18:56 Thiết lập thành phần Chế độ prop bằng modal Điều này có nghĩa là nhấn nút sẽ mở một hộp thoại mô hình đẹp thay vào đó

6:19:05 hoặc chuyển hướng đến một trang riêng biệt, hãy kiểm tra trình duyệt và bạn sẽ thấy nút đăng nhập trên thanh điều hướng, hãy tiến hành và

6:19:13 nhấp vào đó, bạn sẽ thấy mô hình đăng nhập đẹp mắt của Clerk với tất cả các tùy chọn xác thực mà chúng tôi đã cấu hình trước đó vì chúng tôi

6:19:21 Chưa có tài khoản, tôi sẽ nhấn nút đăng ký ở cuối mô hình mà nó giới thiệu cho chúng tôi

6:19:27 với giao diện để tạo tài khoản, hãy tạo tài khoản bằng email và mật khẩu, nhấn tiếp tục và nhập mã xác minh một lần

6:19:38 Đã xác nhận Chúng tôi sẽ được chuyển hướng trở lại trang chủ Chúng tôi đã đăng nhập Chúng tôi đã đăng nhập Chúng ta hãy tiếp tục thêm đăng xuất

6:19:45 chức năng đăng xuất thư ký cung cấp một thành phần gọi là nút đăng xuất, hãy nhập và thêm đúng

6:19:52 Bên cạnh nút đăng nhập của chúng tôi, hãy kiểm tra trình duyệt và bạn sẽ thấy nút đăng xuất bằng tiếng Navar của bạn, hãy nhấp vào nó, bạn sẽ được đăng nhập

6:20:01 Thoát khỏi ứng dụng, automat tự động xử lý mọi việc, xóa phiên làm việc, xóa token và

6:20:08 cập nhật giao diện người dùng nếu cần nhưng hiện tại không có thay đổi giao diện nào cho biết chúng ta đã đăng nhập hay đăng xuất, hãy thử

6:20:16 tiếp theo chúng ta có các thành phần nút đăng nhập và nút đăng xuất để đăng nhập và đăng xuất, nhưng để đăng xuất, CLER cung cấp một

6:20:26 thành phần đẹp hơn gọi là nút người dùng: hãy nhập nó, nút đăng xuất bình luận và thêm vào jsx thay thế

6:20:35 Nút trên trình duyệt, thử đăng nhập và bạn sẽ thấy nó ở đây khi bạn nhấp vào, nó sẽ mở một menu thả xuống với

6:20:48 hai tùy chọn chúng ta có đăng xuất, thực hiện chức năng giống như thành phần nút đăng xuất, nhưng tùy chọn thứ hai là

6:20:55 quản lý tài khoản mở giao diện quản lý hồ sơ đầy đủ trong hộp thoại mô hình tại đây bạn có thể cập nhật

6:21:02 Ảnh đại diện, cập nhật địa chỉ email, cập nhật mật khẩu, xóa tài khoản và nhiều hơn nữa tùy thuộc vào

6:21:10 cấu hình trong bảng điều khiển thư ký nhưng nếu bạn thích có một trang cài đặt hồ sơ riêng biệt chứ không phải một mô hình thì sao?

6:21:18 không vấn đề gì, nhân viên thư ký cung cấp cho chúng ta một thành phần hồ sơ mà chúng ta có thể nhúng vào một route catchall tùy chọn. Tôi sẽ bình luận ở biển hiệu.

6:21:28 Nhập nút Out để đảm bảo chúng ta không gặp lỗi ngoằn ngoèo đỏ cho trang hồ sơ riêng biệt trong thư mục ứng dụng

6:21:35 tạo một thư mục mới tên User Profile, User Byphen Profile tại đây, thêm một route tùy chọn gọi là user profile so

6:21:44 Dấu ngoặc vuông kép dấu chấm chấm dấu gạch nối hồ sơ người dùng trong thư mục này Tạo một trang. Tệp TSX Định nghĩa và Xuất một

6:21:54 thành phần react gọi là trang hồ sơ người dùng xuất chức năng mặc định trang hồ sơ người dùng ở trên cùng nhập hồ sơ người dùng

6:22:03 component từ Clerk và render nó như một phần của jsx, tức là trả về một thẻ div để thêm phong cách cho trang, sau đó chúng ta

6:22:12 gọi thành phần hồ sơ người dùng của chúng tôi với prop đường dẫn được đặt cho/ hồ sơ người dùng Hy ngay trong thành phần điều hướng, thêm liên kết đến hồ sơ người dùng

6:22:23 nên liên kết cần nhập từ liên kết SL tiếp theo, văn bản sẽ là profile HRE sẽ bằng

6:22:34 gạch chéo hồ sơ người dùng theo cùng đường dẫn mà chúng ta đã chỉ định ở đây và thay vào nút đăng xuất bình luận và nút người dùng bình luận

6:22:45 tương tự với câu lệnh nhập, hãy kiểm tra trình duyệt và bạn sẽ thấy hồ sơ Liên kết trong Navar khi nhấp vào nó

6:22:52 sẽ đưa bạn đến trang hồ sơ với pa/ hồ sơ người dùng và nhấn vào Bảo mật sẽ dẫn bạn đến/ user hyen

6:23:01 trang bảo mật SL profile khi nhấp vào đăng xuất sẽ đăng xuất và chuyển hướng bạn đến trang chủ như bạn thấy

6:23:10 Clerk giúp việc thêm quản lý hồ sơ vào ứng dụng của bạn trở nên cực kỳ dễ dàng. Tiếp theo, hãy cùng tìm hiểu cách

6:23:16 hiển thị có điều kiện các phần khác nhau của giao diện dựa trên trạng thái xác thực của người dùng. Trước đó chúng tôi đã thêm ký hiệu đăng nhập.

6:23:25 chức năng quản lý hồ sơ ra ngoài cho ứng dụng Niar của chúng tôi, mọi thứ hoạt động rất tốt nhưng vẫn còn một vấn đề nhỏ

6:23:32 nút đăng nhập và liên kết hồ sơ đều hiển thị khi chúng ta đã đăng nhập và nút đăng xuất hiển thị khi

6:23:38 Chúng ta đã đăng xuất rồi, hãy sửa điều đó bằng cách học cách render các thành phần giao diện người dùng có điều kiện dựa trên

6:23:44 Xác thực Nhân viên Nhà nước một lần nữa làm cho việc này trở nên siêu dễ dàng với hai thành phần đặc biệt đã đăng nhập và đăng xuất

6:23:53 Hãy nhập chúng và dùng chúng để cập nhật thành phần điều hướng của chúng ta, để các thành phần đăng nhập và đăng xuất từ AT Clerk

6:24:02 SL nextjs trong Js X quấn nút đăng nhập bằng thành phần đăng xuất và liên kết hồ sơ cộng với

6:24:16 nút đăng xuất với thành phần đăng nhập bây giờ nút đăng nhập chỉ xuất hiện khi người dùng đăng xuất và

6:24:27 nút liên kết và đăng xuất chỉ xuất hiện khi người dùng đã đăng nhập khá gọn gàng bên phải thư ký xử lý toàn bộ trạng thái người đàn ông

6:24:34 Lưu ý cho chúng tôi: kiểm tra trình duyệt và bạn chỉ thấy nút đăng nhập khi đăng xuất và đăng nhập

6:24:43 trong hồ sơ, nút liên kết và đăng xuất sẽ xuất hiện, nút đăng nhập giờ đã ẩn, đơn giản và rõ ràng khi chúng ta hiểu

6:24:54 cách hiển thị có điều kiện các thành phần giao diện người dùng Hãy cùng tiến thêm một bước và học cách bảo vệ toàn bộ trang khỏi

6:25:00 người dùng chưa xác thực Nếu bạn đăng xuất, hãy thử điều hướng đến hồ sơ người dùng Localhost 3000 SL, bạn sẽ gặp phải một

6:25:10 lỗi thời gian chạy thư ký Hồ sơ người dùng không thể hiển thị trừ khi người dùng đã đăng nhập. Điều chúng ta cần làm là bảo vệ tuyến đường này để

6:25:18 chỉ người dùng đã xác thực mới có thể truy cập, cách bảo vệ tuyến đường mạnh mẽ nhất trong X là thông qua phần mềm trung gian của Clerk như

6:25:26 một phần của quá trình cài đặt, bạn đã tạo một tệp dots middleware trong thư mục nguồn, đây là nơi bạn có thể cấu hình

6:25:33 Phần mềm trung gian của thư ký Bắt đầu bằng cách nhập một hàm gọi là tạo bộ khớp tuyến từ thư ký, tiếp theo tạo một bộ khớp cho

6:25:42 các tuyến bạn muốn bảo vệ sẽ gọi hàm và truyền một mảng các tuyến cần được bảo vệ, trong trường hợp này chúng ta muốn

6:25:51 bảo vệ hồ sơ người dùng SL cho phép lưu giá trị trả về trong một hằng số gọi là is protected route

6:26:00 cuối cùng truyền một hàm đến phần mềm trung gian thư ký, hàm nhận đối tượng Au và đối tượng yêu cầu dưới dạng

6:26:07 các đối số trong phần thân hàm, chúng ta kiểm tra xem yêu cầu có khớp với bất kỳ tuyến đường nào được bảo vệ nếu là tuyến được bảo vệ hay không

6:26:15 truyền yêu cầu và nếu có, chúng tôi gọi phương thức protect trên đối tượng O. Protect chúng tôi sẽ cần chờ đợi điều này

6:26:26 và thêm từ khóa Asing, đảm bảo bạn đặt đúng dấu ngoặc đơn vì phương thức protect sẽ chuyển hướng người dùng đến

6:26:33 trang đăng nhập tự động nếu họ chưa đăng nhập trong trình duyệt nếu chúng tôi cố gắng điều hướng đến/ hồ sơ người dùng một lần nữa trong khi

6:26:41 Khi đăng xuất, chúng tôi sẽ được chuyển hướng đến trang đăng nhập do nhân viên lưu trữ. Đăng nhập bằng thông tin đăng nhập của bạn và bạn sẽ được chuyển hướng lại.

6:26:51 quay lại hồ sơ người dùng. Chúng tôi đã bảo vệ thành công tuyến hồ sơ người dùng. Bây giờ trong phần mềm trung gian. Bạn cũng có thể

6:26:58 đảo ngược logic bảo vệ thay vì e protected route tạo e public route của chúng tôi là root route

6:27:07 Tuyến đăng nhập và tuyến đăng ký trong phần mềm trung gian của thư ký, nếu không thì tuyến công cộng đi qua trong yêu cầu đang chờ hoặc. bảo vệ như vậy

6:27:18 phần mềm trung gian bây giờ sẽ bảo vệ tất cả các tuyến đường theo mặc định và bạn chỉ định những tuyến nào nên là công khai, điều này rất hữu ích

6:27:25 khi phần lớn ứng dụng của bạn yêu cầu xác thực trên trình duyệt, nếu chúng tôi cố gắng điều hướng đến hồ sơ người dùng trong khi

6:27:32 Đăng xuất, chúng tôi vẫn sẽ được chuyển hướng đến trang đăng nhập do nhân viên lưu trữ Đăng nhập và bạn có thể truy cập người dùng SL

6:27:40 Profile Now nếu bạn muốn kiểm soát nhiều hơn đối với ứng dụng của mình dựa trên trạng thái xác thực người dùng, bạn

6:27:47 có thể sử dụng đối số Au trong phần mềm trung gian chờ Au để lấy ID người dùng và chức năng chuyển hướng đến đăng nhập nếu người dùng không có

6:27:59 đăng nhập nên nếu không phải ID người dùng và tuyến không phải là công khai nên không phải là yêu cầu tuyến công cộng bạn có thể chuyển hướng đến

6:28:10 trang đăng nhập, trả lại, chuyển hướng đến đăng nhập, đảm bảo giải cấu trúc ID người dùng, cùng logic như trước, nhưng bây giờ bạn có thể thêm

6:28:20 logic tùy chỉnh để chạy trước khi chuyển hướng điều này có thể bao gồm ghi lại các lần truy cập trái phép để giám sát bảo mật

6:28:27 định tuyến người dùng đến các trang đăng nhập theo vùng hoặc xử lý cửa sổ bảo trì cho các tuyến đường cụ thể, bất cứ điều gì

6:28:34 liên quan đến ứng dụng của bạn, bảo vệ các tuyến đường là phần quan trọng trong việc xây dựng các ứng dụng web an toàn và cá nhân hóa

6:28:41 Phần mềm trung gian CLTS nào Quá trình này đơn giản và linh hoạt khi xây dựng ứng dụng web, chúng ta thường cần truy cập người dùng và phiên làm việc

6:28:50 dữ liệu để cá nhân hóa trải nghiệm và theo dõi hành động của người dùng với tài khoản của họ để đọc dữ liệu người dùng và phiên làm việc flirt

6:28:57 cung cấp hai trợ giúp Au và người dùng hiện tại, hãy hiểu cách sử dụng chúng. Ví dụ cho ví dụ này, chúng ta sẽ tạo một người dùng mới

6:29:06 Route gọi là dashboard trong thư mục amp tạo thư mục dashboard và thêm một trang. Xuất tệp TSX một bảng điều khiển hàm mặc định

6:29:18 trang trả về một tiêu đề trong trang nhập và gọi O cùng các trợ giúp người dùng hiện tại và kiểm tra trả về

6:29:26 đối tượng trong một bảng điều khiển, vì vậy trước tiên hãy nhập các phương thức Au và người dùng hiện tại cho máy chủ SLS của clerk slns rồi gọi chúng

6:29:39 trong thành phần trang bảng điều khiển để Au và người dùng hiện tại và chờ các đối tượng trả về, trợ giúp O sẽ trả về O

6:29:49 đối tượng của người dùng đang hoạt động nên const o đối tượng bằng await o trợ giúp người dùng hiện tại sẽ trả về

6:29:58 đối tượng người dùng backend của người dùng đang hoạt động nên đối tượng const user bằng để chờ nhật ký người dùng hiện tại

6:30:07 các đối tượng đến đối tượng bảng điều khiển, đối tượng người dùng trong trình duyệt, sau khi chúng ta đã đăng nhập, nếu chúng ta điều hướng đến/bảng điều khiển chúng ta

6:30:18 sẽ thấy các đối tượng Au và người dùng đã được ghi lại trong bảng điều khiển, nếu bạn kiểm tra đối tượng O, bạn sẽ thấy ID người dùng ID phiên

6:30:26 các tuyên bố phiên chuyển hướng đến đăng nhập và tương tự đối tượng người dùng chứa địa chỉ email, tên, ID người dùng, hình ảnh, URL cuối cùng

6:30:39 name Etc trong các thành phần máy chủ và trình xử lý tuyến đường bạn thường sử dụng ID người dùng từ đối tượng Au và truy vấn

6:30:47 cơ sở dữ liệu của hai trợ giúp Au và người dùng hiện tại này hữu ích trong các thành phần máy chủ và trình xử lý tuyến đường nhưng không

6:30:55 làm việc trong các thành phần khách hàng trong một thành phần khách bạn có thể đọc cùng dữ liệu bằng cách sử dụng Au và sử dụng các móc người dùng. Let me me.

6:31:03 Hướng dẫn bạn cách tạo một tệp mới tên là Counter trong thư mục Components.

6:31:09 TSX Định nghĩa và Xuất một bộ đếm const thành phần bộ đếm đơn giản xuất ra chúng ta gọi trạng thái US với giá trị bằng 0 chúng ta hiển thị

6:31:20 giá trị đếm và khi nhấp chuột, chúng ta gọi là set count, tăng giá trị đếm lên một lần, một bộ đếm rất đơn giản

6:31:28 component và sử dụng chỉ thị client ở trên cùng để biến nó thành component client một counter client rất đơn giản

6:31:36 Thành phần: Hãy nhập và gọi thành phần này trên trang gốc. TSX bên dưới thành phần hình ảnh để đếm

6:31:47 đảm bảo nhập từ bộ đếm SLC at/components rồi quay lại bộ đếm nhập thành phần sử dụng Au và

6:31:56 sử dụng user hooks từ clerk từ at clerk SL nexts trong thành phần gọi use o và phân cấu trúc đối tượng Returned thành

6:32:11 truy cập thuộc tính đã được tải, ID người dùng, ID phiên và lấy token, cũng gọi sử dụng người dùng và giải cấu trúc Đối tượng Returned để

6:32:25 access thuộc tính đã được tải và đăng nhập và người dùng, chúng có các thuộc tính xung đột, vậy hãy sử dụng chúng

6:32:33 từng cái một, từ sử dụng o, bạn có thể sử dụng thuộc tính East loaded và user ID để trả về null trong trường hợp người dùng đăng xuất

6:32:42 trong khi thành phần được gắn kết nên nếu không tải e hoặc không trả về ID người dùng null, hãy lưu tệp trở lại trình duyệt và

6:32:53 nhấp vào đăng xuất và bạn có thể thấy thành phần bị loại bỏ khỏi giao diện người dùng, tương tự như khi sử dụng người dùng, bạn có thể sử dụng

6:33:02 E đã tải và được đăng nhập vào thuộc tính để trả về null trong trường hợp người dùng đăng xuất khi thành phần đang được gắn kết một trong hai

6:33:11 các điều kiện này hoạt động trong trình duyệt, đăng nhập lại và chúng ta có thể thấy thành phần đếm đăng xuất và ứng dụng của chúng ta tiếp tục

6:33:21 để hoạt động như mong đợi, thành phần đã bị loại bỏ, bạn có thể dựa vào sử dụng o nếu bạn chỉ cần ID người dùng để

6:33:28 cá nhân hóa trải nghiệm hoặc liên kết dữ liệu với người dùng, chỉ sử dụng người dùng nếu bạn cần toàn bộ đối tượng người dùng nói

6:33:37 Về người dùng, tiếp theo, chúng ta sẽ học cách làm việc với vai trò và quyền hạn, sau khi đã đề cập đến xác thực và quản lý phiên.

6:33:48 Hãy chuyển sang một điều thực sự quan trọng đối với các ứng dụng web của bạn: vai trò người dùng và quyền hạn mà hầu hết các ứng dụng đều cần

6:33:54 không chỉ kiểm tra xem ai đó đã đăng nhập hay chưa, họ cần các cấp độ quyền khác nhau cho từng người dùng nên

6:34:00 Hãy cùng tìm hiểu cách triển khai Access Control dựa trên vai trò bằng clerk trước tiên chúng ta cần cấu hình clerk để làm

6:34:08 vai trò người dùng có sẵn trong thư ký token phiên của chúng tôi cung cấp cho chúng tôi cái gọi là siêu dữ liệu người dùng, giống như một bộ lưu trữ

6:34:14 không gian cho thông tin người dùng bổ sung. Trong trường hợp của chúng tôi, chúng tôi sẽ sử dụng nó để lưu trữ vai trò người dùng. Chúng tôi sẽ sử dụng cụ thể một thứ gì đó.

6:34:22 gọi là metadata công khai vì nó chỉ được đọc trên trình duyệt, giúp nó cực kỳ an toàn khi lưu trữ thông tin nhạy cảm

6:34:29 giống như vai trò người dùng để xây dựng một hệ thống arbac cơ bản, chúng ta cần đảm bảo siêu dữ liệu công khai này sẵn sàng trong

6:34:36 token phiên làm việc này có thể nhanh chóng kiểm tra vai trò người dùng mà không cần phải thực hiện thêm các yêu cầu mạng mỗi

6:34:44 Thời gian chúng ta cần thông tin này. Điều này giúp ứng dụng của chúng ta hiệu quả hơn nhiều. Đây là những việc bạn cần làm. Hãy truy cập

6:34:51 bảng điều khiển thư ký và dưới tab cấu hình, tìm trang phiên làm việc, dưới mục tùy chỉnh mã phiên làm việc, nhấp vào chỉnh sửa

6:35:00 trong mô hình mở ra, thêm Json với metadata khóa và giá trị sau trong dấu ngoặc kép người dùng

6:35:10 siêu dữ liệu cuộn xuống và nhấn nút lưu cho bước thứ hai chúng ta sẽ cần tạo định nghĩa typescript toàn cục

6:35:17 để làm việc với roles back invs code trong thư mục gốc ứng dụng của bạn, hãy tạo một thư mục types bên trong thư mục này, tạo một

6:35:29 toàn cầu. Tệp D.S ở đây, bắt đầu bằng cách xuất một đối tượng rỗng, điều này làm cho tệp trở thành một mô-đun. Tiếp theo, chúng ta xác định vai trò là gì.

6:35:39 Có sẵn trong ứng dụng của chúng tôi, hãy tưởng tượng một ứng dụng mạng xã hội nơi các quản trị viên có thể kiểm duyệt nội dung và quản trị viên có thể quản lý

6:35:47 Moderators vì vậy vai trò loại xuất ra bằng admin hoặc moderator Đây là hai vai trò cho ứng dụng của chúng tôi Mở rộng tiếp theo

6:35:59 Loại token phiên của Thư ký, khai báo toàn cục, giao diện Li, brais, yêu cầu phiên GWT tùy chỉnh, chúng tôi chỉ định siêu dữ liệu.

6:36:10 vai trò tùy chọn của kiểu vai trò này sẽ cung cấp tự động hoàn thành và ngăn ngừa lỗi typescript khi làm việc với

6:36:17 Trong suốt ứng dụng của chúng tôi ở bước thứ ba, chúng tôi sẽ tự thêm vai trò quản trị viên vào người dùng của mình trong thư ký

6:36:25 Bảng điều khiển điều hướng đến tab Người dùng, chọn tài khoản người dùng của bạn, tài khoản này nên là người dùng duy nhất trong danh sách

6:36:32 cuộn xuống phần siêu dữ liệu người dùng và bên cạnh tùy chọn công khai, nhấp vào chỉnh sửa, cập nhật Json bằng con số khóa và

6:36:42 quản trị giá trị nhấp vào lưu cho bước thứ tư chúng ta sẽ định nghĩa và bảo vệ một tuyến quản trị viên mới trong thư mục ứng dụng tạo quản trị viên mới

6:36:55 thư mục có một trang. Tệp TSX tại đây xuất chức năng mặc định admin trả về trang chỉ quản trị thẻ H1 đến

6:37:06 xem trang này, bạn không chỉ phải đăng nhập mà còn phải có vai trò quản trị viên, vì vậy để bảo vệ tuyến đường này, chúng tôi sẽ áp dụng

6:37:13 Kiểm soát truy cập dựa trên Ro trong tệp dots middleware của chúng tôi trước, sử dụng create route matcher để tạo matcher cho

6:37:21 Route admin nên const là admin route bằng để tạo bộ khớp tuyến và path là/ admin tiếp theo thêm một kiểm tra cho

6:37:30 vai trò của người dùng trong hàm phần mềm trung gian nếu là tuyến quản trị của yêu cầu và chờ các yêu cầu phiên Au Dot do

6:37:41 siêu dữ liệu. rooll không bằng admin const URL bằng với đường dẫn URL mới là cho Slash và đối số thứ hai là

6:37:51 Yêu cầu. URL chúng tôi trả về phản hồi tiếp theo. Chuyển hướng và truyền URL Đảm bảo nhập phản hồi tiếp theo từ Next

6:38:03 Máy chủ SL trong trình duyệt, đảm bảo bạn đã đăng nhập và điều hướng đến mục quản trị viên, quản trị viên SL bạn nên có thể

6:38:13 truy cập ngay trở lại bảng điều khiển CLER, đổi vai trò thành người điều hành và nhấn lưu, thử truy cập lại tuyến quản trị viên.

6:38:24 Vì vậy, quản trị viên SL và bạn sẽ được chuyển hướng đến trang chủ, hệ thống RBACK của chúng tôi hoạt động như mong đợi, tất nhiên là thủ công

6:38:34 thêm vai trò cho người dùng không thể mở rộng trong ứng dụng thực tế, quản trị viên sẽ muốn quản lý vai trò người dùng để

6:38:41 Ở bước thứ năm, chúng ta sẽ tạo các hành động máy chủ để quản lý vai trò người dùng trong thư mục quản trị, tạo một hành động mới. TS

6:38:51 bắt đầu tệp với chỉ thị sử dụng máy chủ tiếp theo chúng ta sẽ định nghĩa một hàm để thiết lập vai trò cho người dùng xuất ra hàm Asing

6:39:01 đặt vai trò và hàm nhận dữ liệu biểu mẫu kiểu dữ liệu biểu mẫu trong hàm, trước tiên chúng ta cần kiểm tra rằng

6:39:09 Người dùng thực hiện hành động này là quản trị viên, chúng ta có thể làm điều này bằng cách kiểm tra các tuyên bố phiên làm việc. siêu dữ liệu. lăn trên đối tượng Au

6:39:18 ở phía trên nhập o từ clerk nexs SLS server và trong hàm trích xuất các claims session const session claims

6:39:29 bằng để chờ tất cả nếu vai trò người dùng không phải là quản trị viên nếu vai trò siêu dữ liệu yêu cầu phiên không bằng với quản trị viên, chúng tôi

6:39:41 sẽ trả về lỗi không được ủy quyền vì vậy hãy ném lỗi mới không được phép. Nếu người dùng là quản trị viên, chúng tôi sẽ yêu cầu khách hàng thư ký cập nhật

6:39:52 vai trò của người dùng nên nhập client clerk từ clerk nexs SLS server và gọi nó trong component const client là

6:40:03 tương đương với một client thư ký chờ, hiện hành động máy chủ này mong đợi một file gửi biểu mẫu với hai loại thông tin, vì vậy const ID là

6:40:12 bằng dữ liệu biểu mẫu. lấy ID dưới dạng chuỗi và Ro bằng dữ liệu biểu mẫu. getet roll as role, hãy chắc chắn nhập nó từ type SLG globals ID tại đây

6:40:30 đề cập đến người dùng mà chúng tôi đang cập nhật và roll ref đề cập đến vai trò mà chúng tôi giao cho người dùng, dù là quản trị viên hoặc

6:40:37 Người điều hành tiếp theo trong ba khối sử dụng Clerk Client để cập nhật vai trò người dùng để chờ Client. người dùng. cập nhật người dùng chúng tôi

6:40:49 truyền ID làm đối số đầu tiên và đối số thứ hai là một đối tượng mà chúng ta chỉ định siêu dữ liệu công khai, đây là một đối tượng mà chúng ta đặt

6:40:59 vai trò bằng với quá khứ trong vai trò nếu có lỗi ném lỗi mới không đặt được vai trò hãy đảm bảo cú pháp cũng đúng tương tự

6:41:10 chúng ta sẽ định nghĩa một hàm để xóa một vai trò khỏi người dùng. Tôi sẽ dán mã ở đây nhưng để tôi hướng dẫn bạn qua đoạn mã.

6:41:19 xuất bằng chức năng remove role nhận dữ liệu biểu mẫu một lần nữa bắt đầu bằng cách kiểm tra người dùng gọi này

6:41:26 hành động là một quản trị viên, sau đó lấy client thư ký và trích xuất ID từ dữ liệu biểu mẫu, cuối cùng trong một khối triy, sử dụng một

6:41:35 client thư ký để cập nhật vai trò người dùng thành null nếu có lỗi do lỗi mới thất bại trong việc xóa Ro ở cả hai

6:41:43 các hàm nếu thao tác cập nhật thành công, chúng ta sẽ gọi revalidate Path và revalidate SL admin, điều này sẽ

6:41:52 Tự động cập nhật giao diện quản trị viên mà không cần chúng tôi phải làm mới trang khi cập nhật vai trò Được rồi

6:41:59 hai hành động máy chủ này, giờ đây chúng ta có thể quản lý vai trò người dùng trong ứng dụng của mình. Bước cuối cùng, chúng ta sẽ phát triển thêm

6:42:06 trang quản trị viên để quản trị viên quản lý vai trò người dùng từ giao diện người dùng, đây là một thành phần react khá chi tiết nhưng

6:42:13 bạn đã biết những kiến thức cơ bản về cách viết các thành phần react rồi. Tôi sẽ dán mã để tiết kiệm thời gian.

6:42:20 Khoảng 78 dòng mã, nhưng để tôi hướng dẫn bạn qua những gì tôi đã dán, chúng ta vẫn có chức năng xuất hàm mặc định, admin, chúng ta liên hệ với clerk, client và call users.

6:42:32 Danh sách người dùng getet. dữ liệu để lấy danh sách người dùng từ thư ký, sau đó chúng ta ánh xạ lên danh sách người dùng đó trong giao diện người dùng, có một số

6:42:41 Kiểu dáng CSS của Tailwind cho các hàng xen kẽ, chúng tôi hiển thị người dùng. Tên và người dùng.

6:42:47 họ, địa chỉ email chính, vai trò của người dùng và sau đó so với từng người dùng, chúng ta có quyền quản trị và tạo

6:42:56 các nút điều phối bao gồm các đầu vào ẩn cho ID người dùng và rooll Các nút này sử dụng hành động đặt máy chủ rooll

6:43:04 để cập nhật vai trò cho ID người dùng đã cho, chúng tôi cũng có nút xóa roll để gọi hành động remove roll server

6:43:12 nhập ID người dùng, hãy quay lại trình duyệt, đổi Ro người dùng trở lại thành admin và điều hướng đến route admin để

6:43:25 slash admin, tôi sẽ đóng các công cụ phát triển để có thêm không gian, tôi cũng sẽ đăng ký với một người dùng mới phía sau

6:43:33 cảnh trên trình duyệt khác, được rồi, tôi đã đăng ký với một người dùng mới trong Firefox nhưng người dùng này sẽ không có

6:43:40 Quản trị viên sẽ không thể truy cập vào bảng điều khiển quản trị và bạn sẽ bị chuyển hướng đến

6:43:49 Trang chủ trong trình duyệt đầu tiên làm mới trang và bạn sẽ thấy người dùng mới sử dụng tài khoản quản trị này cập nhật vai trò của người dùng mới

6:44:00 đến quản trị viên, vậy hãy nhấp vào làm quản trị viên, chúng ta có thể thấy vai trò bây giờ là quản trị viên với người dùng đã đăng nhập Firefox, cố gắng truy cập

6:44:10 Bảng điều khiển quản trị lại/ quản trị viên, chúng tôi có thể xem thành phần quản trị, hệ thống RBAC tùy chỉnh của chúng tôi hiện đang hoạt động như mong đợi.

6:44:20 làm cho arback mượt mà hơn trong các ứng dụng lớn hơn thư ký cũng cung cấp tính năng tổ chức tích hợp với

6:44:27 Vai trò và hệ thống quyền hạn bạn có thể tìm hiểu thêm về nó trong tài liệu nhưng nếu bạn đang xây dựng một công ty nhỏ

6:44:33 ứng dụng hệ thống ARBAC tùy chỉnh của chúng tôi nên đủ tốt để chúng tôi đã triển khai thành công tất cả các

6:44:40 mục tiêu xác thực Tiếp theo, hãy cùng xem một số tùy chọn tùy chỉnh có sẵn khi sử dụng Clerk

6:44:49 Các thành phần: Bây giờ chúng ta đã có ví dụ xác thực đầu cuối với thư ký, hãy để tôi hướng dẫn bạn qua

6:44:55 tùy chỉnh luồng đăng ký và đăng nhập, hiện tại thanh điều hướng của chúng tôi có nút đăng nhập kích hoạt mô hình khi

6:45:02 Nhấp vào mô hình này cho phép người dùng đăng nhập và nếu họ chưa có tài khoản, họ có thể dễ dàng chuyển sang đăng ký bằng cách sử dụng

6:45:09 liên kết ở cuối, tuy nhiên nhiều ứng dụng thích có một nút đăng ký riêng để khởi tạo quá trình đăng ký

6:45:16 Flow trực tiếp Bạn có thể dễ dàng thực hiện điều này bằng cách nhập thành phần nút đăng ký từ Clerk trong Navigation. TSX

6:45:24 nhập nút đăng ký từ Thư ký và thêm nó ngay bên dưới chế độ nút đăng nhập bằng với mô hình trong trình duyệt

6:45:37 bạn sẽ thấy một nút đăng ký xuất hiện trong Navar khi nhấp vào, nó sẽ khởi chạy mô hình đăng ký và người dùng có thể chuyển sang

6:45:45 Đăng nhập bằng liên kết ở dưới cùng, nếu cần, rất đơn giản. Tiếp theo, hãy nói về phong cách khi làm việc với

6:45:52 nhân viên lễ tân, bạn không bị kẹt với nút mặc định Kiểu dáng, bạn có thể hoàn toàn tùy chỉnh cách đăng nhập và đăng ký

6:45:58 nút trông đơn giản như việc lồng một phần tử nút với CSS của riêng bạn bên trong nút đăng nhập và đăng ký

6:46:07 các thành phần nút thay đổi từ tự đóng sang mở và đóng thẻ giữa các thẻ bao gồm HTML

6:46:18 phần tử nút bút, đây là đăng nhập và đây là đăng ký. Hãy thêm một chút CSS tailin cho cả hai nút. Hãy xem trình duyệt và

6:46:29 bạn sẽ thấy cả hai nút đều đã được tùy chỉnh, giờ bạn không có các Trang riêng để đăng nhập và đăng ký thay vì

6:46:38 Những mẫu này cũng rất dễ dàng khi điều hướng. TSX trên nút đăng nhập và nút đăng ký loại bỏ chế độ là

6:46:47 tương đương model Pro trong trình duyệt, nhấp vào đăng nhập và thư ký sẽ chuyển hướng bạn đến trang đăng nhập chuyên dụng

6:46:57 tương tự, nhấp vào nút đăng ký và bạn sẽ đến trang đăng ký ngay bây giờ, nếu bạn kiểm tra URL, bạn có thể

6:47:05 lưu ý chúng tôi không thấy tên miền ứng dụng của mình, đó là vì các trang này được lưu trữ bởi nhân viên thư ký nếu bạn muốn giữ người dùng

6:47:13 trên tên miền của bạn, bạn có thể tự tạo đăng nhập và đăng ký Pages trong khi vẫn sử dụng các thành phần của Clerk. Dưới đây là cách

6:47:20 thực hiện trong thư mục ứng dụng của bạn, tạo một thư mục đăng ký với một đường dẫn bắt tất cả tùy chọn để thư mục mới nằm trong ô vuông kép

6:47:32 Dấu ngoặc đơn Dot Dot Đăng ký là tên và thêm một trang. Tệp TSX với hàm mặc định xuất thành phần react đơn giản

6:47:44 trang đăng ký và chúng tôi trả về một thẻ div hiển thị thành phần đăng ký từ clerk, hãy chắc chắn nhập nó từ tại

6:47:54 clerk sln chia sẻ Tôi cũng sẽ thêm một số kiểu dáng cho thẻ div FX Justify, Center item Center và một số padding cũng làm tương tự

6:48:03 để đăng nhập bằng cách tạo một thư mục đăng nhập mới với tùy chọn bắt tất cả tuyến, ví dụ như dấu ngoặc vuông đôi chấm chấm chấm

6:48:14 Đăng nhập và thêm trang. Tệp TSX sao chép và dán mã thành phần cho trang đăng ký. TSX và thay đổi đăng ký đăng nhập

6:48:27 đăng nhập là một thành phần khác mà Cler cung cấp khi bạn thêm hai trang này để đảm bảo cả hai tuyến đều công khai trong

6:48:35 tập tin dots của phần mềm trung gian chúng tôi đã có nó từ khi biết đến phần mềm trung gian. Nếu bạn chưa có, xin hãy chắc chắn

6:48:42 Để thêm hai tuyến đường này, cuối cùng hãy cập nhật môi trường của bạn. tệp looc với hai biến môi trường mới thư ký công tiếp theo

6:48:52 URL đăng nhập và URL đăng ký công khai tiếp theo, chúng trỏ đến dấu gạch chéo đăng nhập và đăng ký SL, đây là hai tuyến đường mà chúng ta

6:49:02 vừa tạo, hãy chắc chắn khởi động lại máy chủ Dev của bạn để bạn có thể chạy Dev và quay lại trình duyệt ngay khi người dùng nhấp vào một trong hai nút để

6:49:13 Đăng nhập hoặc đăng ký, chúng sẽ vẫn ở trên tên miền của bạn tại/ đăng ký hoặc đăng nhập. Cuối cùng, hãy nói về các chuyển hướng sau

6:49:24 Xác thực mặc định, thư ký khá thông minh, nó nhớ nguồn gốc người dùng bằng truy vấn URL chuyển hướng

6:49:31 tham số thử nghiệm Hãy tạo một trang upout đơn giản trong thư mục ứng dụng Export Default về

6:49:43 trả về thẻ H1 về trang và điều hướng đến slab localhost 3000 vì mọi trang đều là trang được bảo vệ theo mặc định chúng ta sẽ được chuyển hướng đến/

6:49:55 đăng nhập, bạn sẽ nhận thấy URL chuyển hướng bằng với slab localhost http. Khi bạn tiếp tục, bạn sẽ bị chuyển hướng

6:50:05 để slab xung quanh trong khi Hành vi mặc định này hoạt động tốt trong hầu hết các trường hợp, bạn có thể tùy chỉnh nó bằng môi trường

6:50:12 biến bạn có hai lựa chọn cho URL dự phòng: thư ký công khai tiếp theo, đăng ký URL chuyển hướng dự phòng và ký thư ký công khai tiếp theo

6:50:23 trong URL chuyển hướng dự phòng, cách đầu tiên là thiết lập URL chuyển hướng dự phòng sau khi đăng ký, trong trường hợp URL chuyển hướng

6:50:31 tham số truy vấn bị thiếu, tham số thứ hai là thiết lập URL chuyển hướng dự phòng sau khi đăng nhập trong trường hợp tham số truy vấn URL chuyển hướng bị thiếu

6:50:41 nếu bạn không quan tâm đến tham số truy vấn URL chuyển hướng và muốn ép các chuyển hướng cụ thể bất kể ở đâu

6:50:48 người dùng đến từ bạn có thể sử dụng đăng ký thư ký công tiếp theo Force redirect URL và thư ký công tiếp theo Force signin

6:50:56 URL chuyển hướng với các chuyển hướng Force này người dùng sẽ luôn truy cập vào/onboarding sau khi đăng ký và/ bảng điều khiển sau

6:51:05 Đăng nhập Hiện tại chúng tôi chưa tạo lộ trình onboarding nên hãy chắc chắn tạo nó nếu bạn muốn thử nghiệm nhưng như vậy

6:51:13 Bạn có thể thấy Clerk cung cấp rất nhiều sự linh hoạt trong việc tùy chỉnh quy trình xác thực của bạn, tiếp theo chúng tôi sẽ

6:51:20 Hãy xem việc triển khai ứng dụng của chúng tôi cho chủ đề cuối cùng. Trong khóa học này, hãy cùng xem cách triển khai ứng dụng EXs cho bản demo này.

6:51:30 Tôi sẽ sử dụng GitHub và ververell là một nền tảng của nhóm nexs cho phép bạn triển khai nexs một cách liền mạch

6:51:38 bước ứng dụng một đảm bảo mã của bạn được đẩy lên GitHub như bạn có thể thấy, tôi đã tạo một repo đó là

6:51:46 cùng một repo mà tôi đã dùng cho toàn bộ series, năm tới có 15 hướng dẫn, chúng tôi có vài ứng dụng ở đây và chúng tôi

6:51:53 Sẽ triển khai bộ khuếch đại demo xác thực mà chúng tôi vừa làm việc ở bước hai, hãy đến ell.com và đăng ký nếu bạn muốn

6:52:01 Mới sử dụng Verell, tôi sẽ đăng nhập bằng GitHub, sau khi bạn đã đăng nhập, hãy thêm một dự án mới nếu bạn làm việc này cho

6:52:09 lần đầu tiên bạn sẽ cần cài đặt Verell, khi được yêu cầu tôi sẽ chọn tài khoản GitHub của mình, vốn đã có sẵn

6:52:15 Mã của chúng ta được liên kết trong kho NUS 15 Tutorials mà tôi sẽ nhập cho Verel Team, tôi sẽ chọn

6:52:24 tài khoản cá nhân và chọn framework preset làm ni chia sẻ cho thư mục gốc mà chúng ta sẽ nhấp vào chỉnh sửa

6:52:33 và chọn Authentication Demo Continue chúng ta có thể giữ nguyên cài đặt build và output nhưng mở rộng

6:52:41 phần biến môi trường để nhập các cặp giá trị chính từ dự án của bạn, dự án của chúng tôi có bốn môi trường

6:52:48 Biến chọn tất cả sao chép và dán, trong đó ô tự động tạo bốn biến môi trường với

6:52:56 giá trị cuối cùng nhấp vào Triển khai, điều này sẽ mất một phút để xây dựng và triển khai cho ứng dụng của bạn sau khi quá trình hoàn tất

6:53:05 Hoàn thành, chúng ta nên có bản xem trước ứng dụng, nhấp vào nó sẽ đưa chúng ta đến ứng dụng được lưu trữ trên một Verel

6:53:11 URL tiếp theo là 15 hướng dẫn. Đăng nhập Verel DoApp bằng thông tin đăng nhập tài khoản thử nghiệm và ứng dụng của chúng tôi hoạt động như vậy

6:53:23 Giờ đây nếu bạn có một tên miền tùy chỉnh, bạn có thể trỏ ứng dụng này đến tên miền đó, nhưng về mức độ xây dựng đơn giản và

6:53:30 triển khai với GitHub và Verell quan tâm, đây là tất cả những gì bạn cần làm, rất rất đơn giản, tốt với điều đó.

6:53:38 đến cuối khóa học về NEX này, tôi hy vọng bạn đã hiểu rõ hơn nhiều về các khái niệm so với trước đây

6:53:44 Nếu bạn thích khóa học và thấy nó hữu ích, vui lòng nhấn nút Thích và đăng ký kênh dưới dạng

6:53:50 Việc chia sẻ khóa học này với bạn bè hoặc đồng đội sẽ giúp ích rất nhiều và hy vọng họ sẽ bắt đầu sử dụng nó tuyệt vời

6:53:56 Framework cũng như luôn cảm ơn bạn đã theo dõi, và hẹn gặp lại lần sau, việc hỗ trợ kênh này miễn phí nhé

6:54:05 thích và đăng ký theo dõi giúp ích rất nhiều