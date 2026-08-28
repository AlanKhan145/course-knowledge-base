# 047 — Rule of Thirds in 3D

**Phần:** 06 — Camera & Rendering  
**Thời lượng:** 5:19  
**Chủ đề:** Rule of Thirds và bố cục frame  
**Loại bài:** lesson

---

## 1. Tóm tắt

`Rule of Thirds` là một nguyên tắc bố cục cơ bản giúp tổ chức subject, đường chân trời, khoảng trống và các lớp không gian trong frame.

Trong Blender, composition guide có thể được hiển thị trực tiếp trong `Camera View`, giúp người dựng xác định vị trí focal point trước khi render. Tuy nhiên, một bố cục tốt không chỉ phụ thuộc vào grid. Focal length, hướng nhìn của nhân vật, sự cân bằng thị giác và cách phân chia foreground, middle ground, background đều ảnh hưởng đến cách người xem đọc hình ảnh.

Mục tiêu của bài này là sử dụng các nguyên tắc đó để camera được đặt có chủ ý thay vì chỉ đặt subject vào giữa frame theo thói quen.

---

## 2. Mục tiêu học tập

Sau khi hoàn thành bài này, người học có thể:

- Giải thích được nguyên tắc `Rule of Thirds`.
- Bật composition guide trong camera của Blender.
- Đặt focal point gần các giao điểm quan trọng của grid.
- Chọn focal length phù hợp với loại shot.
- Tổ chức foreground, middle ground và background để tạo chiều sâu.
- Cân bằng trọng lượng thị giác giữa các vùng của frame.
- Chừa khoảng thở phù hợp theo hướng nhìn hoặc hướng chuyển động của subject.
- Đặt horizon có chủ ý thay vì mặc định nằm giữa frame.
- Kiểm tra bố cục bằng crop, silhouette và thumbnail.

---

## 3. Bố cục bắt đầu từ ý định của shot

Trước khi di chuyển camera, cần xác định điều người xem phải nhìn thấy đầu tiên.

Một shot hiệu quả thường có thứ tự:

```text
Ý định của shot
      ↓
Subject chính
      ↓
Focal point
      ↓
Focal length
      ↓
Vị trí camera
      ↓
Phân bố không gian
      ↓
Kiểm tra composition
```

Ví dụ, nếu mục tiêu là giới thiệu một môi trường rộng lớn thì camera và lens cần ưu tiên không gian.

Nếu mục tiêu là biểu cảm của nhân vật, subject phải chiếm vai trò thị giác lớn hơn và background không nên cạnh tranh với khuôn mặt.

Vì vậy, `Rule of Thirds` không phải bước đầu tiên tuyệt đối. Nó là công cụ hỗ trợ sau khi đã biết shot muốn truyền đạt điều gì.

---

## 4. Focal length và cảm giác của bố cục

Focal length ảnh hưởng trực tiếp đến `Field of View`, phối cảnh và lượng không gian xuất hiện trong frame.

Các khoảng dưới đây chỉ mang tính định hướng. Việc phân loại lens không có ranh giới tuyệt đối và còn phụ thuộc vào sensor hoặc camera model.

| Focal length tham khảo | Đặc điểm thường gặp | Ứng dụng phổ biến |
|---|---|---|
| Khoảng 30 mm trở xuống | Góc rộng, chứa nhiều không gian | Landscape, architecture, interior, establishing shot |
| Khoảng 35–70 mm | Góc nhìn tương đối tự nhiên | Medium shot, character shot, general-purpose |
| Khoảng 70–135 mm | Góc hẹp hơn, ít distortion khi đứng xa subject | Portrait, close-up, cinematic detail |
| Trên khoảng 135 mm | Telephoto, góc nhìn hẹp | Subject ở xa, wildlife, sports, compressed perspective |

Không nên xem các khoảng này là quy tắc cứng.

Ví dụ, portrait hoàn toàn có thể được quay bằng lens rộng nếu distortion là một phần của phong cách hình ảnh.

### Lens rộng

Lens ngắn tạo `Field of View` rộng:

```text
Focal length ngắn
        ↓
Góc nhìn rộng
        ↓
Nhiều môi trường trong frame
        ↓
Perspective giữa gần và xa rõ hơn
```

Lens rộng phù hợp khi muốn nhấn mạnh:

- không gian;
- kiến trúc;
- khoảng cách;
- môi trường xung quanh nhân vật;
- cảm giác người xem đang ở bên trong scene.

Tuy nhiên, khi đặt quá gần khuôn mặt, lens rộng có thể làm tỷ lệ subject bị biến dạng mạnh.

### Lens dài

Lens dài tạo góc nhìn hẹp hơn.

Khi muốn giữ cùng kích thước subject trong frame, camera thường phải lùi xa hơn. Kết quả có thể làm khoảng cách biểu kiến giữa các lớp foreground và background trông bị nén hơn.

Lens dài thường hữu ích cho:

- portrait;
- close-up;
- shot mang cảm giác tách subject khỏi môi trường;
- cảnh cần background ít gây phân tâm.

Việc chọn lens phải phục vụ nội dung của shot, không phải chỉ dựa trên một con số được xem là "đúng".

---

## 5. Rule of Thirds là gì?

`Rule of Thirds` chia frame thành chín vùng bằng hai đường ngang và hai đường dọc.

```text
┌──────────┬──────────┬──────────┐
│          │          │          │
│        ● │          │ ●        │
├──────────┼──────────┼──────────┤
│          │          │          │
│          │          │          │
├──────────┼──────────┼──────────┤
│        ● │          │ ●        │
│          │          │          │
└──────────┴──────────┴──────────┘
```

Bốn điểm giao nhau là những vị trí thường được sử dụng để đặt:

- mắt nhân vật;
- khuôn mặt;
- vật thể chính;
- nguồn sáng;
- một điểm có contrast cao;
- focal point quan trọng.

Nguyên tắc cơ bản là thay vì tự động đặt subject ngay chính giữa, hãy cân nhắc đưa điểm quan trọng đến gần một trong các giao điểm.

Điều này thường tạo ra frame có:

- hướng đọc rõ hơn;
- không gian thở tốt hơn;
- sự bất đối xứng có kiểm soát;
- cảm giác tự nhiên hơn.

`Rule of Thirds` là guideline chứ không phải luật bắt buộc.

Center composition vẫn có thể rất mạnh khi được dùng có chủ ý.

---

## 6. Bật Rule of Thirds trong Blender

Chọn camera và mở các tùy chọn hiển thị của camera.

Trong phần `Composition Guides`, bật:

```text
Thirds
```

Khi chuyển sang:

```text
Numpad 0
```

grid sẽ xuất hiện trong `Camera View`.

Các đường này chỉ hỗ trợ bố cục trong viewport và không xuất hiện trong render cuối.

Workflow đơn giản:

```text
Camera View
     ↓
Bật Thirds
     ↓
Xác định subject
     ↓
Đặt focal point gần giao điểm
     ↓
Kiểm tra khoảng trống
     ↓
Tinh chỉnh camera
```

Không nên cố ép mọi vật thể vào grid. Chỉ những thành phần có vai trò thị giác quan trọng mới cần được cân nhắc theo các đường này.

---

## 7. Đặt focal point

Focal point là nơi mắt người xem được dẫn đến đầu tiên.

Trong character shot, focal point thường là:

- mắt;
- khuôn mặt;
- bàn tay đang thực hiện hành động;
- vật thể mà nhân vật đang tương tác.

Trong product shot, focal point có thể là:

- logo;
- màn hình;
- đặc điểm thiết kế;
- vùng nhận ánh sáng đẹp nhất.

Một cách bố trí phổ biến:

```text
┌──────────┬──────────┬──────────┐
│          │       👁  │          │
│          │          │          │
├──────────┼──────────┼──────────┤
│          │ Subject  │          │
│          │          │          │
├──────────┼──────────┼──────────┤
│          │          │          │
│          │          │          │
└──────────┴──────────┴──────────┘
```

Với portrait, đặt vùng mắt gần đường một phần ba phía trên thường là một điểm khởi đầu tốt.

Không nhất thiết toàn bộ đầu hoặc thân nhân vật phải nằm trên giao điểm. Quan trọng là focal point chính có quan hệ rõ với cấu trúc frame.

---

## 8. Foreground, Middle Ground và Background

Bố cục 3D có một lợi thế quan trọng so với graphic composition phẳng: có thể sử dụng chiều sâu thật của scene.

Có thể chia không gian thành ba lớp:

```text
Camera
  ↓
Foreground
  ↓
Middle Ground
  ↓
Background
```

### Foreground

Foreground nằm gần camera nhất.

Có thể sử dụng:

- cây;
- tường;
- đồ nội thất;
- silhouette;
- vật thể bị blur nhẹ.

Foreground giúp tạo cảm giác camera thực sự nằm trong một môi trường thay vì đang quan sát một sân khấu phẳng.

### Middle Ground

Middle ground thường chứa subject chính.

Ví dụ:

```text
Foreground → khung cửa

Middle Ground → nhân vật

Background → đường phố
```

Sự phân tách này tạo cảm giác khoảng cách và quy mô rõ hơn.

### Background

Background cung cấp:

- context;
- atmosphere;
- silhouette phụ;
- nguồn sáng;
- chiều sâu.

Background không nên có quá nhiều contrast hoặc chi tiết cạnh tranh trực tiếp với focal point trừ khi đó là chủ đích của shot.

Kết hợp ba lớp tạo một cấu trúc dễ đọc:

```text
Foreground Object
        ↓
Main Subject
        ↓
Secondary Subject
        ↓
Background
```

Không bắt buộc shot nào cũng phải có đủ ba lớp, nhưng việc suy nghĩ theo các lớp này rất hữu ích khi scene trông quá phẳng.

---

## 9. Cân bằng trọng lượng thị giác

Một frame không cần đối xứng hoàn toàn, nhưng phải kiểm soát được trọng lượng thị giác.

Giả sử một nhân vật lớn đứng ở bên trái:

```text
┌───────────────────────────────┐
│                               │
│    CHARACTER                  │
│    ███████                    │
│    ███████                    │
│                               │
│                               │
└───────────────────────────────┘
```

Phía bên phải có thể trở nên quá trống.

Có thể cân bằng bằng một secondary element:

```text
┌───────────────────────────────┐
│                               │
│    CHARACTER          LIGHT   │
│    ███████              ●     │
│    ███████                    │
│                               │
│                               │
└───────────────────────────────┘
```

Secondary element có thể là:

- lamp;
- table;
- plant;
- window;
- một nhân vật khác;
- vùng sáng;
- architecture;
- silhouette.

Cân bằng không có nghĩa hai bên phải có kích thước bằng nhau.

Một vật thể nhỏ nhưng rất sáng có thể cân bằng một subject lớn nhưng tối.

Trọng lượng thị giác chịu ảnh hưởng bởi:

- kích thước;
- contrast;
- brightness;
- saturation;
- detail;
- vị trí;
- khoảng trống xung quanh.

---

## 10. Look Room và khoảng thở

Nếu nhân vật đang nhìn sang phải, thường nên để nhiều không gian hơn ở phía trước hướng nhìn.

Ví dụ:

```text
┌───────────────────────────────┐
│                               │
│   PERSON →                    │
│            khoảng nhìn        │
│                               │
└───────────────────────────────┘
```

Khoảng trống này thường được gọi là `Look Room`.

Nếu cắt frame ngay trước mặt nhân vật:

```text
┌───────────────────────────────┐
│                               │
│                    PERSON → | │
│                               │
└───────────────────────────────┘
```

shot có thể tạo cảm giác:

- bị chật;
- bí;
- căng thẳng;
- subject đang bị chặn.

Điều đó không nhất thiết sai.

Nếu câu chuyện cần tạo cảm giác bất an, thiếu không gian phía trước hướng nhìn có thể trở thành một lựa chọn bố cục có chủ ý.

Nguyên tắc quan trọng là:

> Khoảng trống trong frame cũng là một thành phần của bố cục.

Tương tự với subject đang di chuyển, thường nên chừa không gian về phía chuyển động. Đây thường được gọi là `Lead Room`.

---

## 11. Đường chân trời

Hai đường ngang của `Rule of Thirds` rất hữu ích khi đặt horizon.

Thay vì tự động đặt horizon chính giữa frame:

```text
┌─────────────────────────────┐
│                             │
│                             │
├─────────────────────────────┤ ← Horizon
│                             │
│                             │
└─────────────────────────────┘
```

có thể đặt nó gần đường một phần ba phía trên:

```text
┌─────────────────────────────┐
│                             │
├─────────────────────────────┤ ← Horizon
│                             │
│                             │
│                             │
└─────────────────────────────┘
```

hoặc đường một phần ba phía dưới:

```text
┌─────────────────────────────┐
│                             │
│                             │
│                             │
├─────────────────────────────┤ ← Horizon
│                             │
└─────────────────────────────┘
```

Hai lựa chọn tạo ra trọng tâm khác nhau.

Horizon thấp:

```text
Nhiều bầu trời
      ↓
Nhấn mạnh không gian phía trên
```

Horizon cao:

```text
Nhiều mặt đất
      ↓
Nhấn mạnh môi trường phía dưới
```

Horizon ở chính giữa không phải luôn sai. Nó có thể phù hợp với:

- reflection;
- symmetry;
- shot tĩnh;
- kiến trúc;
- composition cố ý cân bằng.

Điều cần tránh là đặt nó ở giữa chỉ vì chưa suy nghĩ về bố cục.

---

## 12. Dùng phá vỡ bố cục để tạo cảm giác bất an

Quy tắc bố cục có thể được phá vỡ có chủ đích.

Ví dụ, một nhân vật phản diện hoặc một cảnh căng thẳng có thể được đặt:

- lệch khỏi giao điểm quen thuộc;
- quá sát mép frame;
- với quá ít look room;
- trong một vùng negative space bất thường;
- với trọng lượng thị giác không cân bằng.

Ví dụ:

```text
┌───────────────────────────────┐
│                               │
│                         ████  │
│                         ████  │
│                               │
│                               │
└───────────────────────────────┘
```

Bố cục này có thể tạo cảm giác khó chịu hơn so với một shot cân bằng.

Điểm quan trọng là phân biệt:

```text
Bố cục lệch do sơ suất
```

và:

```text
Bố cục lệch vì mục đích kể chuyện
```

Một shot không tuân thủ `Rule of Thirds` vẫn có thể rất tốt nếu sự phá vỡ đó phục vụ cảm xúc hoặc narrative.

---

## 13. Kiểm tra silhouette và negative space

Một cách nhanh để đánh giá composition là tạm bỏ qua material và detail.

Quan sát chủ yếu:

- hình dạng lớn;
- khoảng trống;
- sự chồng lấn;
- silhouette.

Subject quan trọng phải đọc được tương đối rõ so với background.

Ví dụ không tốt:

```text
Subject
   ↓
Background có silhouette gần giống
   ↓
Hai hình hòa vào nhau
   ↓
Focal point yếu
```

Có thể xử lý bằng:

- di chuyển camera;
- di chuyển subject;
- thay focal length;
- điều chỉnh ánh sáng;
- thay đổi background;
- tạo thêm separation bằng DOF.

Negative space cũng cần được xem như một hình dạng.

Nếu khoảng trống bên trái rất lớn nhưng không phục vụ hướng nhìn hoặc narrative, composition có thể mất cân bằng.

---

## 14. Kiểm tra bằng crop và thumbnail

Một composition mạnh thường vẫn đọc được khi thu nhỏ.

Sau khi thiết lập camera, hãy kiểm tra frame dưới dạng thumbnail.

Nếu khi thu nhỏ mà:

- không biết subject chính là gì;
- mắt bị kéo sang background;
- các khối lớn hòa vào nhau;
- focal point biến mất;

thì composition có thể chưa đủ rõ.

Có thể kiểm tra theo flow:

```text
Full Frame
    ↓
Thumbnail
    ↓
Nhìn focal point đầu tiên
    ↓
Kiểm tra silhouette
    ↓
Crop thử
    ↓
Tinh chỉnh camera
```

Crop cũng giúp phát hiện các vấn đề như:

- headroom quá lớn;
- subject sát mép;
- object phụ bị cắt khó chịu;
- khoảng trống không cần thiết.

Đối với nội dung có thể xuất hiện ở nhiều nền tảng, nên thử cả các tỷ lệ khác nhau như:

```text
16:9
9:16
1:1
```

Không nên mặc định một composition landscape sẽ vẫn hoạt động tốt khi crop sang vertical.

---

## 15. Lỗi thường gặp

**Hiện tượng:** Subject luôn nằm chính giữa mọi shot.  
**Nguyên nhân:** Camera được căn theo thói quen thay vì theo mục tiêu bố cục.  
**Cách xử lý:** Bật `Thirds` và thử đưa focal point về một giao điểm trước khi quyết định dùng center composition.

**Hiện tượng:** Scene trông phẳng dù có nhiều object.  
**Nguyên nhân:** Các object nằm gần cùng một depth hoặc silhouette chồng lên nhau.  
**Cách xử lý:** Tổ chức lại foreground, middle ground và background.

**Hiện tượng:** Một bên frame quá nặng.  
**Nguyên nhân:** Trọng lượng thị giác tập trung vào cùng một vùng.  
**Cách xử lý:** Điều chỉnh camera hoặc thêm secondary element hợp lý ở vùng đối diện.

**Hiện tượng:** Nhân vật trông bị ép sát mép frame.  
**Nguyên nhân:** Thiếu `Look Room` hoặc `Lead Room`.  
**Cách xử lý:** Chừa thêm không gian theo hướng nhìn hoặc hướng chuyển động.

**Hiện tượng:** Horizon vô tình chia frame thành hai phần bằng nhau.  
**Nguyên nhân:** Camera được đặt mà chưa xác định vùng muốn nhấn mạnh.  
**Cách xử lý:** Thử đặt horizon gần một trong hai đường ngang của thirds grid.

**Hiện tượng:** Shot đẹp khi xem lớn nhưng khó hiểu khi thu nhỏ.  
**Nguyên nhân:** Composition phụ thuộc quá nhiều vào detail nhỏ.  
**Cách xử lý:** Kiểm tra lại hierarchy, silhouette, contrast và focal point.

---

## 16. Best practices

- Xác định subject chính trước khi đặt camera.
- Chọn focal length dựa trên mục đích shot, không dựa trên thói quen.
- Bật `Thirds` khi dựng composition nhưng không coi grid là luật tuyệt đối.
- Ưu tiên đặt focal point thay vì cố căn toàn bộ subject vào giao điểm.
- Dùng foreground, middle ground và background để tạo chiều sâu.
- Kiểm soát trọng lượng thị giác của cả hai phía frame.
- Chừa khoảng thở theo hướng nhìn và chuyển động.
- Đặt horizon có chủ ý.
- Kiểm tra silhouette trước khi dựa vào material và detail.
- Thu nhỏ frame để đánh giá hierarchy.
- Thử crop nếu output có khả năng xuất hiện ở nhiều aspect ratio.
- Chỉ phá vỡ quy tắc khi sự phá vỡ phục vụ cảm xúc hoặc câu chuyện.

---

## 17. Bài thực hành

Tạo một scene có một subject chính và ít nhất hai object phụ ở các khoảng cách khác nhau.

Bật:

```text
Camera Properties
→ Viewport Display
→ Composition Guides
→ Thirds
```

Sau đó thực hiện ba phương án camera.

**Phương án A — Bố cục cân bằng**

- Đặt focal point của subject gần một giao điểm.
- Tạo foreground, middle ground và background.
- Chừa look room đúng hướng nhìn.
- Đặt horizon gần một đường ngang của grid.

**Phương án B — Center composition**

- Đặt subject chính giữa.
- Cân bằng hai phía frame.
- Kiểm tra xem center composition có thực sự mạnh hơn phương án A hay không.

**Phương án C — Bố cục bất an**

- Đẩy subject gần mép frame.
- Giảm look room.
- Tạo negative space bất thường.
- Giữ focal point vẫn đủ rõ để shot không trở thành lỗi ngẫu nhiên.

Với mỗi phương án, kiểm tra ở:

```text
Full-size Render
      ↓
Thumbnail
      ↓
Crop thử
      ↓
Silhouette
```

**Kết quả mong đợi:**

- Focal point có thể nhận biết ngay.
- Người học thấy rõ sự khác biệt giữa bố cục cân bằng, center composition và bố cục cố ý gây bất an.
- Foreground, middle ground và background tạo cảm giác chiều sâu.
- Khoảng trống hỗ trợ hướng nhìn của subject.
- Composition vẫn đọc được khi hình ảnh được thu nhỏ.

---

## 18. Checklist hoàn thành

- [ ] Bật được `Thirds` trong `Composition Guides`.
- [ ] Xác định được focal point chính của shot.
- [ ] Không đặt mọi subject vào chính giữa theo thói quen.
- [ ] Chọn focal length phù hợp với mục đích shot.
- [ ] Phân biệt được foreground, middle ground và background.
- [ ] Tạo được separation rõ giữa các lớp không gian.
- [ ] Kiểm soát được trọng lượng thị giác hai phía frame.
- [ ] Chừa `Look Room` hoặc `Lead Room` khi phù hợp.
- [ ] Đặt horizon có chủ ý.
- [ ] Silhouette của subject chính đọc được.
- [ ] Negative space hỗ trợ composition.
- [ ] Focal point vẫn rõ khi xem thumbnail.
- [ ] Đã thử crop để phát hiện vấn đề framing.

---

## 19. Tổng kết

`Rule of Thirds` là một trong những công cụ đơn giản nhất để bắt đầu xây dựng composition có chủ ý trong Blender. Grid giúp xác định focal point, horizon và phân bố subject nhưng không phải công thức bắt buộc cho mọi shot.

Một composition 3D mạnh còn phụ thuộc vào focal length, khoảng cách camera, foreground, middle ground, background, trọng lượng thị giác và khoảng thở theo hướng nhìn của subject.

Mục tiêu cuối cùng không phải là đặt mọi thứ chính xác lên các đường thirds. Mục tiêu là tạo một hierarchy rõ ràng để người xem biết nên nhìn vào đâu, mắt được dẫn theo hướng nào và cảm nhận được chiều sâu cũng như cảm xúc mà shot muốn truyền đạt.