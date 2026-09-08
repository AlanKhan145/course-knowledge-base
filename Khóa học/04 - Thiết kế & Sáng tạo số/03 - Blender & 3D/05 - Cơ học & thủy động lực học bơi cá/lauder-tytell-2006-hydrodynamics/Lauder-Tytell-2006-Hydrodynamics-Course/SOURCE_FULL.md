# Thủy động lực học của cơ chế đẩy bằng uốn sóng ở cá

> **Tài liệu biên soạn chi tiết bằng tiếng Việt từ chương:** George V. Lauder & Eric D. Tytell (2006), *Hydrodynamics of Undulatory Propulsion*, Chương 11 trong *Fish Physiology, Volume 23: Fish Biomechanics*, trang 425-468. DOI: `10.1016/S1546-5098(05)23011-X`.
>
> Đây là bản **giảng lại có cấu trúc**, giữ đầy đủ các luận điểm, phương trình, kết quả thực nghiệm, số liệu quan trọng và ý nghĩa của 17 hình trong chương. Tài liệu không nhằm sao chép nguyên văn từng câu của bản gốc.

## 1. Tóm tắt nội dung cốt lõi

Chương này xem xét cơ chế tạo lực khi cá bơi bằng **uốn sóng thân và vây** (*undulatory propulsion*) từ hai phía: lý thuyết thủy động lực học và dữ liệu thực nghiệm đo trực tiếp dòng chảy. Điểm mới quan trọng của giai đoạn nghiên cứu được tổng kết trong chương là sự xuất hiện của video tốc độ cao kết hợp **DPIV - Digital Particle Image Velocimetry**, cho phép quan sát và định lượng trường vận tốc, xoáy và wake quanh cá đang bơi tự do thay vì chỉ suy ra lực từ chuyển động thân.

Các kết luận xuyên suốt gồm:

- Các nhãn cổ điển như **anguilliform, subcarangiform, carangiform, thunniform** hữu ích để mô tả hình học chuyển động, nhưng không đủ để phân loại khác biệt thủy động lực học thực sự.
- Khi tốc độ thấp, các loài có hình thái rất khác nhau có thể có biên dạng uốn giữa thân tương đối giống nhau. Khác biệt wake đáng kể thường liên quan nhiều hơn đến **hình học ba chiều**, hình dạng đuôi và các bề mặt vây.
- Hai tham số nền tảng là **Reynolds number** và **Strouhal number**. Strouhal khoảng 0,3 thường gắn với hiệu suất cao của foil dao động, nhưng cá thật có thể lệch xa giá trị này, đặc biệt ở tốc độ thấp.
- Mô hình **resistive** dùng lực cản cục bộ; mô hình **reactive / elongated body theory (EBT)** của Lighthill dùng phản lực gia tốc và khối lượng ảo. EBT rất hữu ích nhưng bỏ qua nhiều hiệu ứng nhớt, hình học 3D và hoạt động độc lập của các vây.
- Ở lươn bơi ổn định, wake chủ yếu gồm các **jet động lượng ngang**, gần như không có động lượng dọc trục đáng kể. Ngược lại, cá có vây đuôi rời rõ như trout, mackerel và bluegill tạo wake có **vortex ring** và jet động lượng có thành phần hướng sau rõ rệt.
- Vây đuôi không nên coi chỉ là phần nối tiếp của thân; nó là một **bề mặt đẩy độc lập**, có cơ nội tại, có thể thay đổi hình dạng và điều khiển vector lực.
- Vây lưng và vây hậu môn là các **bề mặt điều khiển chủ động**, tạo lực ngang, lực đẩy và mô-men ổn định; wake của chúng còn thay đổi dòng tới vây đuôi.
- Trong dòng xoáy kiểu **Kármán vortex street**, cá có thể đổi hẳn chiến lược vận động và để dòng chảy làm phần lớn công uốn thân, giúp giảm huy động cơ thân.
- So sánh DPIV với EBT cho thấy công suất có thể khớp khá tốt, nhưng EBT có thể **đánh giá thấp lực/wake impulse tới khoảng 50%**.
- Chương kết thúc bằng năm hướng nghiên cứu: nối CFD với thực nghiệm, đo dòng 3D, nghiên cứu maneuver/turbulence, làm rõ tương tác các vây, và liên kết thủy động lực ngoài cơ thể với cơ học - cơ - thần kinh bên trong.

## 2. Bối cảnh và mục tiêu của chương

Trước khi có DPIV, phần lớn nghiên cứu bơi của cá phải đi theo chuỗi suy luận: quan sát hình học chuyển động -> đưa vào mô hình lý thuyết -> suy ra lực và dòng nước. Điều còn thiếu là câu trả lời định lượng trực tiếp cho câu hỏi: **cá thật sự làm gì với chất lỏng xung quanh nó?**

Các thử nghiệm ban đầu như dùng lớp sữa mỏng, thuốc nhuộm hoặc kỹ thuật Schlieren có thể cho hình ảnh định tính của dòng, nhưng khó thu được trường vận tốc có độ phân giải thời gian và không gian đủ cao. Sự kết hợp của ba thành phần đã thay đổi tình hình:

1. camera tốc độ cao có độ phân giải cao;
2. laser liên tục công suất lớn tạo mặt phẳng sáng;
3. thuật toán DPIV theo dõi chuyển động của các hạt phản xạ gần trung hòa nổi.

Nhờ đó, người nghiên cứu có thể đo trực tiếp dòng trên bề mặt, gần thân và trong wake của cá. Chương vì vậy được tổ chức theo logic: **kiểu bơi cổ điển -> lý thuyết -> phương pháp đo -> dữ liệu wake thân/vây -> lực tổng thể -> dòng rối và thao tác -> đối chiếu lý thuyết với thực nghiệm -> hướng tương lai**.

## 3. Các kiểu bơi uốn sóng cổ điển

### 3.1. Anguilliform

Anguilliform lấy tên từ chi *Anguilla* (lươn). Mô tả cổ điển nhấn mạnh việc một phần rất lớn thân tham gia uốn sóng và gần một bước sóng có thể hiện diện dọc thân. Tuy nhiên, dữ liệu mới cho thấy quan niệm “toàn thân lươn luôn uốn biên độ lớn ở mọi tốc độ” là quá đơn giản.

Ở tốc độ thấp, uốn chủ yếu tập trung ở vùng sau thân. Dao động phần đầu tăng đáng kể khi tốc độ cao hơn hoặc khi cá tăng tốc. Vì vậy, hình ảnh lươn uốn mạnh toàn thân trong các nghiên cứu kinh điển có thể phản ánh trạng thái **không ổn định / tăng tốc**, chứ không đại diện cho bơi ổn định ở mọi tốc độ.

### 3.2. Subcarangiform

Subcarangiform thường được mô tả là có hơn nửa bước sóng nhưng dưới một bước sóng dọc thân. Đây là một nhãn trung gian giữa anguilliform và carangiform. Trong dữ liệu kinematic hiện đại, biên dạng biên độ của subcarangiform ở tốc độ vừa và thấp lại không khác quá xa các dạng lân cận như cách phân loại cổ điển gợi ý.

### 3.3. Carangiform

Carangiform thường có vùng uốn lớn tập trung hơn về nửa sau thân, với tối đa khoảng nửa bước sóng trên thân. Biên độ tăng nhanh phi tuyến về phía cuống đuôi và đuôi.

### 3.4. Thunniform

Thunniform lấy tuna làm mẫu, thường gắn với thân dao động ngang ít và vây đuôi có aspect ratio cao. Dữ liệu định lượng cho thấy thunniform không nhất thiết là một “cơ chế hoàn toàn khác”, mà có thể xem là biến đổi tương đối vừa phải của carangiform.

![Hình 11.1 - Bốn kiểu uốn sóng cổ điển](images/fig_11_01_p03.png)

**Hình 11.1 - trang PDF 3.** Bốn kiểu cổ điển được so sánh trong điều kiện tương đối đồng nhất: cá dài khoảng 20-25 cm và bơi ở khoảng 1,6-1,8 chiều dài thân mỗi giây (`L s^-1`). Các đường giữa thân ở nhiều thời điểm trong một chu kỳ đập đuôi cho thấy từ subcarangiform đến thunniform, envelope biên độ có mức giống nhau đáng kể; khác biệt rõ nhất là lươn có dao động phần trước thân lớn hơn.

### 3.5. Tốc độ bơi làm thay đổi cách nhìn về “mode”

Ở tốc độ thấp hơn `1,0 L s^-1`, sự giống nhau giữa các loài càng rõ: dao động phần đầu nhỏ, uốn tập trung về nửa sau thân. Khi tốc độ tăng vượt xấp xỉ `1,0 L s^-1`, các đoạn cơ phía trước được huy động nhiều hơn và phần đầu bắt đầu dao động ngang rõ hơn.

![Hình 11.2 - So sánh bass và lươn theo tốc độ](images/fig_11_02_p05.png)

**Hình 11.2 - trang PDF 5.** Largemouth bass ở `0,7 L s^-1` chủ yếu uốn nửa sau thân, còn ở `2,4 L s^-1` đầu dao động rõ. Lươn ở `0,5 L s^-1` lại có biên dạng uốn rất giống bass tốc độ thấp dù hình dạng cơ thể khác mạnh.

### 3.6. Vì sao phân loại hai chiều là chưa đủ

Tác giả nêu hai vấn đề chính:

- **Biên dạng midline có thể quá giống nhau**, nhất là ở tốc độ thấp, nên không phản ánh đầy đủ khác biệt thủy động lực giữa loài.
- **Hình học 3D bị bỏ qua.** Cá có vây lưng, vây hậu môn, vây ngực, vây bụng, cuống đuôi và đuôi là các vùng có thể tách dòng, sinh xoáy và gia tốc nước.

Do đó, khác biệt thủy động lực quan trọng có khả năng đến từ **hình học ba chiều và phân bố diện tích dọc thân** nhiều hơn là chỉ từ envelope biên độ của một đường giữa thân 2D.

## 4. Cơ sở lý thuyết của propulsion uốn sóng

### 4.1. Xấp xỉ cá như một hydrofoil dao động

Một cách đơn giản để bắt đầu là xem đuôi cá như một **flapping hydrofoil**. Hai đại lượng vô thứ nguyên đặc biệt quan trọng là Reynolds number và Strouhal number.

### 4.2. Reynolds number

Reynolds number mô tả tỉ lệ giữa hiệu ứng quán tính và hiệu ứng nhớt:

$$
Re = \frac{\rho U L}{\mu} = \frac{UL}{\nu}
\tag{1}
$$

Trong đó:

- $U$: vận tốc tiến trung bình;
- $L$: chiều dài đặc trưng, có thể là chiều dài cá hoặc chord của foil;
- $\rho$: mật độ chất lỏng;
- $\mu$: độ nhớt động lực;
- $\nu$: độ nhớt động học.

Các miền tổng quát được chương sử dụng:

- `Re < 1`: miền nhớt, lực nhớt chi phối;
- `Re > 1000`: miền quán tính, lực quán tính chi phối;
- giữa hai miền: cả nhớt và quán tính đều quan trọng.

Điểm cần lưu ý là Reynolds number của toàn cơ thể có thể rất lớn, nhưng tại mép vây hoặc cấu trúc nhỏ, Reynolds number cục bộ có thể thấp hơn nhiều. Vì vậy, **không thể mặc định rằng nhớt hoàn toàn không quan trọng** chỉ vì Re toàn thân lớn.

### 4.3. Strouhal number

Strouhal number mô tả tốc độ vẫy so với tốc độ tiến:

$$
St = \frac{fA}{U}
\tag{2}
$$

Trong đó:

- $f$: tần số đập/vẫy;
- $A$: biên độ peak-to-peak, tức tổng quãng từ cực đại một phía đến cực đại phía đối diện;
- $U$: vận tốc tiến.

Nhiều động vật bơi và bay hoạt động quanh `St ≈ 0,3`, vùng thường cho hiệu suất đẩy cao đối với foil dao động. Tuy nhiên, đây không phải định luật cứng.

![Hình 11.3 - Strouhal number và locomotion](images/fig_11_03_p08.png)

**Hình 11.3 - trang PDF 8.** Ở lươn bơi trong khoảng `0,6-1,8 L s^-1`, `St` khoảng `0,31-0,41`, gần vùng tối ưu thường dự đoán. Pacific salmon ở tốc độ thấp `0,5 L s^-1` có `St > 0,6`; điều này có thể phản ánh hiệu suất thấp thật sự ở tốc độ thấp hoặc cho thấy `St` đơn lẻ chưa đủ mô tả toàn bộ phức tạp của cá thật.

### 4.4. Tương tác hai chiều giữa cơ và nước

Hình học thân không phải một tín hiệu “đầu vào cố định” trong sinh học thật. Cơ tạo mô-men và uốn thân -> thân tác dụng lực lên nước -> nước phản lực lên thân -> biến dạng thân thay đổi -> lực cơ cần thiết cũng thay đổi. Đây là một hệ **fluid-structure interaction** có hồi tiếp.

Phần lớn mô hình giải tích cổ điển đơn giản hóa bằng cách coi kinematics đã biết và chỉ tính lực chất lỏng, thay vì giải đồng thời cơ học nội tại và thủy động lực.

## 5. Mô hình resistive

### 5.1. Ý tưởng

Mô hình resistive của Taylor ước lượng lực đẩy bằng cách chia thân thành nhiều đoạn rồi cộng lực cản tác dụng lên từng đoạn. Dạng cơ bản:

$$
D = \frac{1}{2} C_D \rho S u^2
\tag{3}
$$

Trong đó:

- $C_D$: hệ số cản của đoạn;
- $\rho$: mật độ nước;
- $S$: diện tích đặc trưng của đoạn;
- $u$: vận tốc đoạn, gồm cả vận tốc tiến và vận tốc do uốn ngang.

Trong thực tế cần tách lực song song và vuông góc thân vì $C_D$ theo hai hướng khác nhau.

### 5.2. Hạn chế

Mô hình này gặp ba vấn đề lớn:

1. công thức drag chuẩn được xây dựng cho chuyển động tương đối ổn định, trong khi uốn sóng là chuyển động không ổn định;
2. thường giả định đoạn phía trước không làm biến đổi dòng mà đoạn phía sau nhận được;
3. khó xác định chính xác $C_D$ cho các đoạn đang đổi hướng và hình dạng.

Dù vậy, lực resistive không phải không quan trọng: chúng có thể đóng góp vào lực đẩy và đồng thời làm giảm hiệu suất propulsion.

## 6. Mô hình reactive - Lighthill elongated body theory

### 6.1. Khái niệm phản lực gia tốc và khối lượng ảo

EBT của Lighthill xem lực chủ yếu phát sinh do thân gia tốc và giảm tốc ngang trong nước. Nước “chống lại” thay đổi vận tốc như thể thân cá phải gia tốc thêm một lượng khối lượng chất lỏng gọi là **virtual mass**.

Mô hình lý tưởng này bỏ qua phần lớn lực nhớt để tập trung vào thành phần quán tính.

### 6.2. Cân bằng công suất

Nếu bỏ qua nhớt, công suất do cá đưa vào hệ được chia thành hai phần: công hữu ích đẩy cá và công để tạo wake:

$$
P_{total} - P_{thrust} - P_{wake} = 0
\tag{4}
$$

![Hình 11.4 - Hình học của elongated body theory](images/fig_11_04_p11.png)

**Hình 11.4 - trang PDF 11.** Hình phóng đại đầu đuôi dùng hai tam giác đồng dạng để liên hệ tốc độ sóng thân $V$, tốc độ tiến $U$, vận tốc ngang đầu đuôi $W$ và vận tốc ngang hiệu dụng mà nước “cảm nhận” là $w$.

### 6.3. Vận tốc ngang hiệu dụng của nước

Từ hai tam giác đồng dạng:

$$
\frac{w\,dt}{W\,dt} = \frac{(V-U)dt}{Vdt}
\tag{5}
$$

Suy ra:

$$
w = W\frac{V-U}{V}
\tag{6}
$$

Hai trường hợp giới hạn giúp hiểu biểu thức:

- nếu cá bị giữ cố định, $U=0$ -> $w=W$;
- nếu $U=V$ -> đầu đuôi trượt đúng vào vị trí phần thân phía trước vừa đi qua, nước gần như không thấy chuyển động ngang hiệu dụng -> $w=0$.

### 6.4. Công suất tổng, công suất wake và công suất đẩy

Với $m_V$ là virtual mass trên một đơn vị chiều dài ở đầu đuôi:

$$
P_{total} = m_V w U W
\tag{7}
$$

Công suất đi vào động năng của wake:

$$
P_{wake} = \frac{1}{2}m_V w^2 U
\tag{8}
$$

Suy ra công suất đẩy trung bình:

$$
P_{thrust} = m_V\left(wWU - \frac{1}{2}w^2U\right)
\tag{9}
$$

Vì $P=FU$:

$$
F_{thrust}=\frac{P_{thrust}}{U}
$$

### 6.5. Virtual mass tại đuôi

Lighthill xấp xỉ:

$$
m_V = \frac{1}{4}\pi \rho d^2
\tag{10}
$$

với $d$ là chiều cao dorso-ventral của vây đuôi tại mép sau.

### 6.6. Lực đẩy và trade-off hiệu suất

Với sóng truyền biên độ không đổi đơn giản, lực đẩy trung bình tỉ lệ với:

$$
F_{thrust} \propto V^2-U^2
$$

Muốn lực đẩy dương, tốc độ sóng thân $V$ phải lớn hơn tốc độ tiến $U$ theo hướng ngược chuyển động sóng so với hướng tiến cá.

Hiệu suất đẩy Froude:

$$
\eta = \frac{P_{thrust}}{P_{total}}
=1-\frac{1}{2}\frac{V-U}{V}
\tag{11}
$$

Mô hình chỉ ra trade-off quan trọng:

- khi $V$ tiến gần $U$, hiệu suất tăng;
- nhưng ở giới hạn hiệu suất cực đại của mô hình, thrust tiến về 0;
- tăng $V$ để có thrust lớn hơn làm giảm hiệu suất;
- theo công thức lý tưởng này, $\eta$ không thấp hơn 0,5.

### 6.7. Giới hạn của EBT

EBT nhỏ-biên độ giả định thân tạo góc nhỏ với hướng tiến. Khi biên độ/góc lớn, năng lượng đi vào wake nhiều hơn dự đoán của dạng đơn giản. Lighthill sau đó phát triển phiên bản biên độ lớn có thể dự đoán lực ngang tốt hơn.

Các hạn chế còn lại:

- giả định Reynolds number hiệu dụng vô hạn nên giảm vai trò nhớt;
- không mô hình hóa đầy đủ tác dụng của mép sắc và tách dòng;
- midline 2D không biểu diễn hình học ba chiều;
- chỉ tham số hóa vây đuôi qua virtual mass, trong khi vây lưng, vây hậu môn, vây ngực và vây bụng có thể chủ động;
- khó mô tả đa dạng hành vi như turning, maneuvering và tương tác nhiều vây.

## 7. Phương pháp thực nghiệm: video tốc độ cao và DPIV

### 7.1. Hệ thống đo

Chương mô tả hệ thống điển hình gồm:

- bể dòng tuần hoàn để cá giữ vị trí tương đối ổn định;
- camera tốc độ cao, thời điểm đó có thể đạt ít nhất `1024 x 1024 px` ở trên `500 fps`;
- laser argon-ion liên tục công suất khoảng 10 W qua hệ thấu kính tạo **light sheet dày 1-2 mm**;
- hạt phản xạ gần trung hòa nổi có đường kính trung bình khoảng **12 µm**;
- ít nhất một camera chụp hạt trong mặt phẳng laser và một camera đồng bộ khác theo dõi chính xác tư thế/thân/vây của cá;
- có thể xoay mặt phẳng laser theo các hướng trực giao để dựng hình dung 3D qua nhiều thí nghiệm.

![Hình 11.5 - Bố trí thí nghiệm DPIV](images/fig_11_05_p16.png)

**Hình 11.5 - trang PDF 16.** Sơ đồ cho thấy bể dòng tuần hoàn, hai camera, gương, laser và ba cách đặt light sheet. Ảnh hạt liên tiếp được cross-correlation để tạo ma trận vector vận tốc.

### 7.2. Stereo-DPIV

DPIV với một camera chỉ cho hai thành phần vận tốc nằm trong mặt phẳng laser. Dùng hai camera lệch góc đã biết có thể tái dựng ba thành phần vận tốc $(x,y,z)$ trong một mặt phẳng - nền tảng cho phân tích wake 3D tốt hơn.

### 7.3. Từ trường vận tốc đến vorticity và impulse

Vorticity $\boldsymbol{\omega}$ mô tả tốc độ quay cục bộ của phần tử chất lỏng. Cấu trúc vortex trong wake phản ánh độ lớn, hướng và phần nào thời điểm lực cá truyền vào nước.

Nếu giả định hai vortex ngược chiều nối với nhau thành vortex ring lõi nhỏ, impulse có thể xấp xỉ:

$$
I=\rho A\Gamma
\tag{12}
$$

Trong đó:

- $A$: diện tích bao bởi vortex ring;
- $\Gamma$: circulation của lõi vortex;
- $\rho$: mật độ nước.

Một công thức tổng quát hơn:

$$
\mathbf{I}=\frac{1}{2}\rho\int \mathbf{x}\times\boldsymbol{\omega}\,dV
\tag{13}
$$

Đây là impulse vector. Chia impulse cho khoảng thời gian thích hợp, thường cỡ nửa chu kỳ đập đuôi, cho ước lượng lực trung bình.

### 7.4. Hai lợi thế thực nghiệm quan trọng

1. **Kiểm soát trạng thái bơi.** Bể dòng cho phép chọn tốc độ chính xác và chỉ lấy dữ liệu khi cá bơi ổn định, hoặc chủ động kích thích maneuver từ trạng thái biết trước.
2. **Biết chính xác vị trí cá so với light sheet.** Vì hình học cá 3D phức tạp, một trường vận tốc không gắn được với vị trí thân/vây trong mặt phẳng laser rất khó diễn giải đúng.

Bơi trong nước tĩnh có thể giảm turbulence nền, nhưng lại khó thu các chu kỳ bơi ổn định và lặp lại.

## 8. Axial propulsion: wake của thân và đuôi

### 8.1. Lươn bơi ổn định

Wake của *Anguilla* cho một kết quả quan trọng: động lượng chủ yếu hướng **ngang**, không phải hướng dọc trục. Các xung jet ngang có thể được hiểu như dòng qua tâm những vortex ring tách rời hoặc chỉ liên kết yếu.

![Hình 11.6 - Wake phía sau lươn](images/fig_11_06_p19.png)

**Hình 11.6 - trang PDF 19.** Trường dòng trung bình pha ở 90% chu kỳ đập đuôi cho ba vùng động lượng ngang nổi bật. Freestream đã được trừ đi để làm rõ wake.

Các điểm chính:

- phần lớn jet ngang được tạo bởi **1/3 cuối thân**;
- khoảng **15% cuối thân** đóng vai trò đặc biệt mạnh trong hình thành shear layer;
- độ xoáy cục bộ có thể đạt khoảng `90 s^-1`;
- các “proto-vortex” phía trước tồn tại nhưng chứa ít vorticity nên không phải nguồn chính của wake vortex cuối cùng.

![Hình 11.7 - Dòng sát thân lươn qua chu kỳ](images/fig_11_07_p20.png)

**Hình 11.7 - trang PDF 20.** Sáu thời điểm trong chu kỳ cho thấy dòng sát thân và các hướng quay chính; vorticity mạnh chủ yếu phát triển gần phần sau.

Shear layer sau đó roll-up, tách thành nhiều vortex và hình thành rõ sau khoảng một chu kỳ đập đuôi.

![Hình 11.8 - Cơ chế hình thành wake lươn](images/fig_11_08_p21.png)

**Hình 11.8 - trang PDF 21.** Mô hình sơ đồ hóa vortex sơ cấp, vortex thứ cấp do shear-layer roll-up và giả thuyết cấu trúc 3D gồm các vortex ring hướng ngang.

Khi lươn tăng tốc độ bơi ổn định từ khoảng `0,5` đến `2,0 L s^-1`, bản chất wake vẫn tương đối giống: jet ngang lớn và rất ít động lượng dọc trục.

### 8.2. Trout, mackerel và bluegill: wake có thrust signature

Ở cá có vây đuôi rời rõ, wake khác đáng kể. Một lát cắt ngang wake trout cho hai tâm vorticity và jet giữa có thành phần hướng sau mạnh.

![Hình 11.9 - Wake trout](images/fig_11_09_p22.png)

**Hình 11.9 - trang PDF 22.** Trout bơi ổn định ở `1,0 L s^-1` tạo hai tâm vortex, tương ứng lát cắt qua vortex ring với jet trung tâm có hướng vừa downstream vừa ngang.

Lát cắt đứng sau mackerel cho thấy vortex tip từ hai đầu vây đuôi và vùng gia tốc giữa chúng.

![Hình 11.10 - Wake mackerel và mô hình vortex ring](images/fig_11_10_p23.png)

**Hình 11.10 - trang PDF 23.** Ở mackerel `1,2 L s^-1`, hai tâm vorticity do đầu trên và đầu dưới đuôi tạo ra. Mô hình bluegill ở `1,5 L s^-1` cho jet trung tâm lệch trung bình khoảng **58°** so với trục tiến; lực đẩy trung bình khoảng **14 mN**, trong khi lực ngang trung bình khoảng **23 mN**.

Điều đáng chú ý: lực ngang không phải nhiễu nhỏ. Ở nhiều loài, lực ngang **ít nhất ngang với lực dọc** và thường lớn gấp 2-3 lần.

### 8.3. Vorticity gần thân vẫn tập trung về phía sau

Mặc dù cấu trúc wake cuối của lươn và cá có đuôi rời khác nhau, cả hai đều có điểm chung là vorticity wake mạnh phát triển chủ yếu ở **1/3 sau thân**.

![Hình 11.11 - Dòng sát thân bluegill](images/fig_11_11_p24.png)

**Hình 11.11 - trang PDF 24.** Sáu thời điểm của bluegill cho thấy các cấu trúc dòng quay gần phần sau thân tương tự định tính với trường dòng sát thân lươn.

### 8.4. Uốn thân làm tăng drag

Đo boundary layer trên cá bơi tự do cho thấy chuyển động uốn có xu hướng **tăng skin-friction drag** so với trường hợp thân kéo thẳng. Đây là kết quả quan trọng vì trước đó từng có tranh luận rằng uốn kiểu cá có thể làm drag giảm dưới giá trị của thân thẳng.

### 8.5. “Đuôi như chân vịt rời”

Khi bơi ổn định, lực đẩy trung bình phải cân bằng drag trung bình. Ở lươn, wake không có thrust signature dọc rõ, phù hợp quan điểm thrust và drag phân bố dọc cơ thể có thể triệt tiêu trong wake tổng. Nhưng ở trout, bluegill và mackerel, đuôi tạo dấu vết thrust rõ ràng.

Tác giả vì vậy đề xuất phép tương tự với thuyền gắn động cơ ngoài:

- thân cá giống hull, chịu phần lớn drag;
- vây đuôi giống propeller rời, tạo thrust bằng cơ nội tại;
- wake sau propeller vì vậy vẫn có thrust signature ngay cả khi lực tổng toàn hệ bằng 0 theo trung bình chu kỳ.

## 9. Chức năng của vây đuôi

### 9.1. Đuôi đối xứng ngoài không có nghĩa chuyển động đối xứng

Cá có vây đuôi **homocercal** nhìn ngoài đối xứng vẫn có thể điều khiển hai thùy khác nhau. Thùy lưng có thể đi ngang xa hơn thùy bụng; chiều cao đuôi cũng mở rộng và thu lại trong một chu kỳ.

![Hình 11.12 - Biến dạng vây đuôi homocercal](images/fig_11_12_p26.png)

**Hình 11.12 - trang PDF 26.** Video đồng bộ lateral và posterior cùng quỹ đạo bốn marker ở mép sau cho thấy thùy lưng bluegill có thể excursion lớn hơn rõ rệt thùy bụng. Các cơ nội tại của đuôi chủ động tạo ra thay đổi hình dạng này.

### 9.2. Đuôi heterocercal và ring-within-a-ring

Ở shark có đuôi heterocercal, mép sau nghiêng sinh cấu trúc vortex phức tạp dạng **ring-within-a-ring**.

![Hình 11.13 - Vortex ring trong wake đuôi shark](images/fig_11_13_p27.png)

**Hình 11.13 - trang PDF 27.** Mô hình cho ba tâm vorticity và hai hệ vòng xoáy lồng nhau, với jet động lượng đi xuyên cấu trúc vòng phía trên.

Điều này minh họa rằng hình dạng và độ bất đối xứng 3D của đuôi có thể thay đổi topology wake; không thể suy ra đầy đủ từ midline 2D.

### 9.3. Dòng tới đuôi không phải freestream

Trước khi nước đến vây đuôi, nó đã đi qua toàn bộ thân và cuống đuôi. Ở mackerel, dòng dọc thân hội tụ về phía đuôi, đồng thời chuyển động ngang của cuống đuôi làm nước wrap quanh cuống.

![Hình 11.14 - Dòng quanh caudal peduncle](images/fig_11_14_p28.png)

**Hình 11.14 - trang PDF 28.** Quỹ đạo hạt cho hai thành phần: hội tụ do hình dạng thân thu hẹp về đuôi và dòng vòng quanh cuống do cuống lắc ngang. Vây đuôi vì vậy làm việc trong một dòng tới đã bị **body + peduncle precondition**.

## 10. Chức năng của vây lưng và vây hậu môn

### 10.1. Các vây median là bề mặt điều khiển chủ động

Vây lưng và vây hậu môn có:

- cơ nội tại riêng;
- khả năng tác dụng lực trực tiếp lên nước;
- mép sau sắc, nơi tách dòng và shed vorticity;
- chuyển động độc lập tương đối với thân.

Do nghiên cứu cổ điển tập trung vào đường giữa thân, vai trò này từng bị đánh giá thấp.

### 10.2. Wake của vây lưng

![Hình 11.15 - Wake vây lưng](images/fig_11_15_p30.png)

**Hình 11.15 - trang PDF 30.** Ở bluegill, vây lưng gia tốc dòng trong khoảng giữa vây lưng và đuôi và shed vortex ngay trước đuôi. Ở rainbow trout, vây lưng tạo chuỗi vortex với jet ngang mạnh; đuôi đi xuyên các jet và tâm vortex đó.

Các số liệu chính:

- ở bluegill bơi `1,1 L s^-1`, phần mềm của vây lưng đóng góp gần **12% thrust tổng**;
- lực ngang do vây lưng ở bluegill gần **2 lần thrust** của chính vây lưng;
- ở trout, lực ngang tương đối còn lớn hơn, **trên 3 lần thrust**, do wake vây lưng dao động chủ yếu sang hai bên.

### 10.3. Tương tác dorsal-fin -> caudal-fin

Wake vây lưng đi vào vùng hoạt động của đuôi. Vortex do vây lưng tạo có thể gia tốc dòng trên bề mặt đuôi, thay đổi áp suất và tăng khả năng tạo thrust. CFD được chương dẫn lại cho thấy vorticity từ vây lưng có thể thúc đẩy hình thành **leading-edge vortex** trên vây đuôi nhanh hơn, từ đó tăng thrust.

Ở tuna thường rút vây lưng khi bơi routine, đuôi nhận dòng chủ yếu đã biến đổi bởi thân; ổn định roll khi đó dựa nhiều hơn vào điều chỉnh vây ngực.

## 11. Cân bằng lực tổng thể và dòng ba chiều

### 11.1. Mô-men roll và yaw từ vây lưng

Lực ngang do vây lưng xuất hiện phía trên và sau tâm khối lượng nên tạo cả **roll torque** và **yaw torque**. Để bơi thẳng ổn định, các bề mặt khác phải bù:

- vây hậu môn có thể tạo mô-men roll ngược;
- đuôi và vây ngực có thể phối hợp bù yaw;
- các vây median và paired cùng tham gia ổn định, ngay cả trong bơi thẳng đều.

![Hình 11.16 - Cân bằng lực và giả thuyết wake 3D](images/fig_11_16_p31.png)

**Hình 11.16 - trang PDF 31.** Panel A tóm tắt các lực/mô-men và ba mặt phẳng đo wake. Panel B-C đưa ra giả thuyết về các filament vortex shed từ vây lưng, vây hậu môn, cuống đuôi và vây đuôi.

### 11.2. Vì sao tách BCF và MPF quá đơn giản

Phân loại **BCF - body/caudal fin** đối lập với **MPF - median/paired fin** có thể gây hiểu nhầm nếu hiểu như hai hệ propulsion tách biệt. Dữ liệu cho thấy trong bơi BCF, vây median vẫn hoạt động thủy động lực mạnh để tạo lực và giữ ổn định.

### 11.3. Góc tấn của toàn thân

Nhiều cá bơi với thân có **positive angle of attack**. Góc này thay đổi theo tốc độ và làm đổi lift do dòng trên thân. Vì vậy, cân bằng lực không chỉ là thrust-drag mà còn gồm lift, buoyancy, moment do vị trí lực và tư thế thân.

### 11.4. Wake 3D có thể phức tạp hơn nhiều so với một vortex ring

Từ phía sau, hệ wake giả định có thể chứa đến **10 vortex filaments**:

- hai cặp do đuôi;
- một cặp do mép trên/dưới cuống đuôi;
- một cặp do vây lưng;
- một cặp do vây hậu môn.

Cách các filament nối thành vortex ring rời chưa được xác định đầy đủ. Đây là lý do 3D flow là vấn đề trung tâm trong việc hiểu cá bơi thật.

## 12. Uốn sóng trong dòng rối: Kármán gait

### 12.1. Từ bể dòng “sạch” đến môi trường tự nhiên

Trong tự nhiên, cá thường sống trong dòng có turbulence do đáy gồ ghề, vật cản, dòng sông mạnh hoặc dòng biển. Vì vậy, bơi trong dòng microturbulent ổn định của phòng thí nghiệm chỉ là một phần nhỏ của repertoire vận động.

Cá có thể dùng vật cản để draft/entrain và tận dụng vortex thay vì chống lại chúng.

### 12.2. Kármán vortex street

Một cylinder tiết diện chữ D tạo chuỗi vortex luân phiên tương đối đều. Khi cá bơi trong chuỗi này, kinematics thay đổi mạnh so với freestream.

![Hình 11.17 - Kármán gait](images/fig_11_17_p34.png)

**Hình 11.17 - trang PDF 34.** Trong freestream, center of mass dao động ngang nhỏ. Trong Kármán street, center of mass dao động lớn và hình dạng thân thay đổi mạnh; trout lượn giữa các tâm vortex. Thí nghiệm mô tả cá bơi cách cylinder rộng 5 cm khoảng **3-4 chiều dài thân** về phía downstream, tức đã ở ngoài vùng hút sát vật cản.

### 12.3. Uốn thân phần lớn thụ động

Một kết quả nổi bật là trong Kármán gait, cả cơ myotomal đỏ và trắng ở phần lớn thân có thể giảm hoạt động mạnh. Cá có thể dùng vây ngực hoặc cơ đỏ phía trước để chỉnh angle of attack với vortex tới, còn vùng giữa và sau thân được **de-recruit**. Điều này cho thấy môi trường vortex có thể cung cấp một phần đáng kể năng lượng và hình dạng uốn cho locomotion.

## 13. Tăng tốc và maneuvering

Dữ liệu định lượng cho các maneuver “routine” còn ít so với các C-start tốc độ cao. Một số nghiên cứu đã quan sát wake khi yaw/turn nhưng thường thiếu kinematics đồng bộ đủ chi tiết.

Tytell nghiên cứu tăng/giảm tốc có kiểm soát ở lươn với cùng chuỗi chuyển động dùng cho cả kinematics và wake. Điều kiện được nêu trong chương:

- tốc độ ban đầu khoảng `0,6-1,9 L s^-1`;
- gia tốc/giảm tốc vào khoảng từ `+1,3` đến `-1,4 L s^-2`.

Lươn chủ yếu thay đổi **vận tốc tip đuôi** để tạo tăng tốc. Khi tăng tốc, wake xuất hiện thêm động lượng dọc trục đáng kể. Nghĩa là wake của lươn tăng tốc chuyển từ mẫu “lateral jets, ít streamwise momentum” sang mẫu giống hơn với cá có vây đuôi rời: có **downstream momentum jet**.

Điểm này nhấn mạnh rằng wake không chỉ phụ thuộc loài/hình dạng mà còn phụ thuộc **trạng thái động học** - bơi ổn định hay tăng tốc.

## 14. Đối chiếu lý thuyết với dữ liệu thực nghiệm

### 14.1. Cơ hội kiểm định trực tiếp

Trước DPIV, EBT chủ yếu được kiểm định gián tiếp bằng dữ liệu energetic/efficiency. DPIV tạo cơ hội so sánh trực tiếp giữa:

- lý thuyết giải tích Lighthill;
- CFD;
- thí nghiệm foil heaving/pitching của kỹ thuật fluid;
- wake thật của cá.

### 14.2. EBT so với DPIV ở lươn

Kết quả được chương tổng hợp:

- **công suất wake ngang trung bình** từ DPIV không khác có ý nghĩa so với EBT;
- dạng biến thiên công suất theo thời gian cũng tương đối giống;
- DPIV cho peak power cao hơn;
- EBT lại **đánh giá thấp force/impulse wake**, có trường hợp đến khoảng **50%**.

### 14.3. Vì sao power có thể khớp nhưng force không khớp

Các nguyên nhân được thảo luận:

- hiệu ứng fluid chưa nằm trong EBT có thể thay đổi power và force không theo cùng tỉ lệ;
- DPIV thường đo một lát cắt 2D nên phải giả định cấu trúc 3D ngoài mặt phẳng;
- sai số khi dựng wake 3D có thể làm thừa/thiếu tổng vorticity;
- đo toàn bộ wake power qua một control volume hoàn chỉnh bằng DPIV là khó.

Điều này không làm EBT “vô dụng”; ngược lại, nó xác định rõ phạm vi mà mô hình đơn giản cho dự đoán tốt và nơi cần CFD/3D measurement bổ sung.

## 15. Năm hướng nghiên cứu tương lai

### 15.1. Kết nối CFD và thực nghiệm

Cần thiết kế thí nghiệm để kiểm định các dự đoán cụ thể của CFD, đặc biệt ở boundary layer và tương tác wake giữa các vây. Boundary-layer measurement quan trọng vì wake visualization đơn thuần không cho trực tiếp drag của thân.

### 15.2. Đo dòng ba chiều thực sự

Dữ liệu 3D vẫn còn ít nhưng cần thiết để:

- hiểu topology của vortex ring/filament;
- xác định các vây tương tác thế nào;
- kiểm định giả định của lý thuyết;
- giải thích vì sao thân kiểu lươn tạo wake khác cá có đuôi rời.

### 15.3. Maneuvering và turbulence

Cần nhiều dữ liệu hơn về bơi quay, tăng giảm tốc routine, điều khiển trong dòng tự nhiên và cách cá khai thác vortex.

### 15.4. Chức năng và tương tác của toàn bộ hệ vây

Dữ liệu vây lưng mới ở mức vừa phải, vây hậu môn còn ít và vây bụng gần như chưa có dữ liệu thủy động lực trực tiếp trong bối cảnh chương. Cá phải được xem như hệ có **nhiều control surfaces phối hợp**.

### 15.5. Nối dòng ngoài với cơ học - cơ - thần kinh

Thủy động lực ngoài cơ thể cần nối với:

- mechanics của thân;
- muscle activation;
- neural control;
- feedback cảm giác từ chính lực thủy động lực.

Mục tiêu dài hạn là một mô hình xuyên suốt từ **nervous system -> muscle -> body deformation -> fluid flow -> hydrodynamic feedback**.

## 16. Bảng tổng hợp các kết quả định lượng quan trọng

| Hiện tượng / đối tượng | Điều kiện trong chương | Kết quả chính |
|---|---:|---|
| So sánh 4 mode cổ điển | 20-25 cm; `1,6-1,8 L s^-1` | Envelope uốn từ subcarangiform đến thunniform rất giống nhau |
| Ngưỡng dao động phần đầu | khoảng `1,0 L s^-1` | Dưới mức này phần đầu thường dao động rất ít; tốc độ cao hơn huy động phần trước nhiều hơn |
| Reynolds number | `Re < 1`; `Re > 1000` | Miền nhớt và miền quán tính được dùng như hai giới hạn tổng quát |
| Strouhal của lươn | `0,6-1,8 L s^-1` | `St ≈ 0,31-0,41` |
| Salmon tốc độ thấp | `0,5 L s^-1` | `St > 0,6` |
| Hệ camera DPIV | >= `1024x1024`; > `500 fps` | Đủ phân giải để theo flow separation và vortex formation |
| Light sheet | dày `1-2 mm` | Mặt phẳng đo vận tốc |
| Hạt DPIV | khoảng `12 µm` | Hạt phản xạ gần trung hòa nổi |
| Lươn - shear layer | vùng sau thân | vorticity có thể tới khoảng `90 s^-1` |
| Lươn bơi ổn định | `0,5-2,0 L s^-1` | Wake vẫn chủ yếu là lateral momentum jets |
| Trout | `1,0 L s^-1` | Wake có vortex ring và downstream jet |
| Mackerel | `1,2 L s^-1` | Vortex tip ở hai đầu vây đuôi + jet trung tâm |
| Bluegill tail | `1,5 L s^-1` | Jet khoảng `58°`; thrust ~`14 mN`; side force ~`23 mN` |
| Bluegill dorsal fin | `1,1 L s^-1` | ~`12%` tổng thrust; lateral force gần 2x thrust của vây lưng |
| Trout dorsal fin | routine swimming | Lateral force > 3x thrust của vây lưng |
| Wake 3D giả thuyết | nhìn từ sau | có thể tới khoảng 10 vortex filaments |
| Kármán gait | 3-4 body lengths sau cylinder rộng 5 cm | body bending lớn, center-of-mass excursion lớn, cơ thân giữa/sau giảm hoạt động |
| Lươn tăng/giảm tốc | start `0,6-1,9 L s^-1`; `+1,3` đến `-1,4 L s^-2` | tăng tail-tip velocity và thêm streamwise momentum |
| EBT so với DPIV | wake lươn | power khá khớp; EBT có thể underestimate force tới ~50% |

> `L s^-1` nghĩa là số chiều dài thân mỗi giây; `L s^-2` là số chiều dài thân mỗi giây bình phương.

## 17. Cách đọc 17 hình như một mạch lập luận

1. **Hình 11.1-11.2:** phân loại kinematic cổ điển và lý do midline 2D chưa đủ.
2. **Hình 11.3-11.4:** chuyển sang mô hình fluid cơ bản: Strouhal và EBT.
3. **Hình 11.5:** công cụ DPIV biến vấn đề từ suy đoán thành đo trực tiếp.
4. **Hình 11.6-11.8:** lươn tạo wake ngang, shear-layer roll-up, ít downstream momentum khi steady.
5. **Hình 11.9-11.11:** cá có đuôi rời tạo vortex ring/downstream jet nhưng phần sinh vorticity mạnh vẫn tập trung phía sau thân.
6. **Hình 11.12-11.14:** đuôi là propulsor 3D chủ động; hình dạng đuôi và dòng qua cuống đuôi làm thay đổi wake.
7. **Hình 11.15-11.16:** vây lưng/hậu môn tham gia lực, ổn định và precondition dòng tới đuôi; hệ lực phải nhìn 3D.
8. **Hình 11.17:** trong dòng vortex tự nhiên, cá đổi hẳn gait và có thể dùng năng lượng môi trường.

## 18. Thuật ngữ quan trọng

| Thuật ngữ | Giải thích trong ngữ cảnh chương |
|---|---|
| Undulatory propulsion | Tạo lực bằng sóng uốn truyền dọc thân/vây |
| Midline kinematics | Chuyển động của đường giữa thân khi nhìn trong một mặt phẳng |
| Wake | Trường dòng phía sau vật thể/cá sau khi đã bị chuyển động làm biến đổi |
| Vorticity $\omega$ | Độ quay cục bộ của phần tử chất lỏng |
| Circulation $\Gamma$ | Đại lượng tích phân liên quan tổng độ xoáy quanh một vùng/vortex |
| Vortex ring | Cấu trúc xoáy dạng vòng, thường có jet động lượng xuyên qua tâm |
| Shear layer | Lớp giữa hai vùng dòng có vận tốc/hướng khác nhau mạnh |
| DPIV | Kỹ thuật đo trường vận tốc từ chuyển động hạt giữa các khung hình số |
| Stereo-DPIV | DPIV dùng hai camera để tái dựng ba thành phần vận tốc trong mặt phẳng |
| Reynolds number | Tỉ lệ tương đối giữa quán tính và nhớt |
| Strouhal number | Tỉ lệ `fA/U` mô tả mức dao động so với chuyển động tiến |
| Virtual mass | Khối lượng chất lỏng hiệu dụng phải được gia tốc cùng vật thể |
| Resistive model | Mô hình lực dựa chủ yếu trên drag cục bộ |
| Reactive model / EBT | Mô hình lực dựa trên phản lực gia tốc và virtual mass |
| Froude propulsive efficiency | Tỉ số công hữu ích tạo thrust trên tổng công đưa vào |
| Homocercal tail | Đuôi đối xứng ngoài; vẫn có thể chuyển động bất đối xứng |
| Heterocercal tail | Đuôi bất đối xứng hình thái, điển hình ở nhiều shark |
| Caudal peduncle | Cuống đuôi, vùng nối thân với vây đuôi |
| BCF | Body-caudal fin locomotion |
| MPF | Median-paired fin locomotion |
| Kármán gait | Gait cá sử dụng chuỗi vortex luân phiên phía sau vật cản |

## 19. Những kết luận dễ bị hiểu sai nếu chỉ xem hình dạng thân

- **Không nên gán mode chỉ từ silhouette.** Cùng một cá thay đổi biên dạng uốn theo tốc độ.
- **Không nên rig/giải thích đuôi như bone cuối của spine.** Dữ liệu chức năng cho thấy đuôi là bề mặt có điều khiển hình dạng riêng.
- **Không nên xem vây lưng/hậu môn là trang trí thụ động.** Chúng tạo lực và vortex riêng.
- **Không nên đưa freestream trực tiếp vào mô hình đuôi.** Dòng tới đuôi đã bị thân, cuống đuôi và các vây upstream thay đổi.
- **Không nên chỉ nhìn thrust dọc.** Lực ngang có thể lớn hơn thrust dọc nhiều lần và phải được cân bằng bằng hệ vây.
- **Không nên dùng một wake pattern cho mọi trạng thái.** Lươn steady và lươn accelerating có wake khác nhau rõ.

## 20. Lời cảm ơn trong nguồn

Tác giả cảm ơn các thành viên Lauder Lab và đặc biệt nhắc đến các trao đổi với Paul Webb và Bill Schultz về cân bằng thrust-drag; Kathy Dickson cung cấp dữ liệu scombrid cho Hình 11.1; Jacquan Horton, Adam Summers và Eliot Drucker cung cấp dữ liệu cho Hình 11.3B. Công trình được hỗ trợ bởi National Science Foundation, grant `IBN0316675` cho G. V. Lauder.

## 21. Tài liệu tham khảo

Danh mục tài liệu tham khảo đầy đủ của chương gốc được giữ riêng trong file [`references.md`](references.md) để file bài học chính dễ đọc hơn.

## 22. Danh mục file ảnh

Toàn bộ 17 hình được trích từ PDF và lưu trong thư mục [`images/`](images/). Bảng mapping chi tiết theo số hình và trang PDF có trong [`FIGURES.md`](FIGURES.md).

---

### Ghi chú về nguồn và cách biên soạn

- Nội dung học thuật, số liệu, phương trình và lập luận trong file này được lấy từ chương PDF người dùng cung cấp.
- Ảnh được crop/render trực tiếp từ vùng ảnh gốc trong PDF ở khoảng 300 DPI, không vẽ lại và không thay đổi nội dung khoa học.
- Ký hiệu `µm` ở phần DPIV được đọc trực tiếp từ hình/caption PDF; bản text extraction thô có thể mất ký tự `µ`.
- Những câu mang tính diễn giải trong tài liệu được viết lại bằng tiếng Việt để phục vụ học tập, không thay thế cho trích dẫn học thuật từ bản xuất bản gốc.
