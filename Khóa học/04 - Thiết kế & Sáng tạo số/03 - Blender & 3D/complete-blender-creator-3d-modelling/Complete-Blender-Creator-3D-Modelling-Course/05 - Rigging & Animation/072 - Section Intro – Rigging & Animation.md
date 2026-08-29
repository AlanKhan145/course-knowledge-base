# 072 — Giới thiệu phần Rigging & Animation

| Thuộc tính            | Nội dung                                      |
| --------------------- | --------------------------------------------- |
| **Module**            | Module 05 — Rigging & Animation               |
| **Bài học**           | Section Intro – Rigging & Animation           |
| **Thời lượng**        | 1:15                                          |
| **Chủ đề chính**      | Giới thiệu rigging, animation và chu kỳ đi bộ |
| **Sản phẩm mục tiêu** | Nhân vật có thể thực hiện một chu kỳ đi bộ    |

---

## 1. Giới thiệu

Trong phần tiếp theo của khóa học, chúng ta sẽ bắt đầu tìm hiểu về **animation** và **rigging nhân vật** trong Blender.

Mục tiêu cuối cùng của phần này là:

> Tạo một nhân vật và xây dựng **chu kỳ đi bộ — walk cycle** cho nhân vật đó.

Bên cạnh animation, phần học cũng giới thiệu thêm các kỹ thuật modelling nâng cao hơn, bao gồm:

* Sử dụng các **Modifier** để tạo hình.
* Áp dụng thêm những kỹ thuật modelling chi tiết.
* Chuyển từ phong cách **low poly** sang các mô hình có độ chi tiết và số lượng polygon cao hơn.
* Chuẩn bị mô hình nhân vật để có thể rig và animate.

---

## 2. Lộ trình tổng quan

Quy trình học trong phần này có thể được hình dung như sau:

```text
Modelling nhân vật
        │
        ▼
Tạo mô hình chi tiết hơn
        │
        ▼
Sử dụng Modifier
        │
        ▼
Rigging nhân vật
        │
        ▼
Tạo chuyển động
        │
        ▼
Hoàn thiện Walk Cycle
```

Đây là bước chuyển quan trọng từ việc tạo ra các mô hình tĩnh sang việc làm cho mô hình có thể chuyển động.

---

## 3. Animation là một lĩnh vực lớn

Animation là một chủ đề rất rộng và có thể cần nhiều thời gian để thành thạo.

Phần học này chỉ tập trung vào những kiến thức nền tảng nhằm giúp người mới:

* Hiểu cách animation hoạt động trong Blender.
* Biết cách tạo những chuyển động đơn giản.
* Làm quen với quy trình animate nhân vật.
* Có đủ nền tảng để tiếp tục nghiên cứu animation chuyên sâu.

Mục tiêu không phải là tạo ra một animation hoàn hảo ngay từ lần đầu, mà là giúp người học hiểu và thực hành được toàn bộ quy trình.

---

## 4. Không cần quá lo lắng khi animation bị lỗi

Khi mới bắt đầu, animation có thể gặp nhiều vấn đề như:

* Chuyển động chưa tự nhiên.
* Các bộ phận cơ thể di chuyển sai vị trí.
* Nhịp đi bộ không đều.
* Tư thế nhân vật bị cứng.
* Animation trở nên lộn xộn hoặc khó kiểm soát.

Điều này hoàn toàn bình thường.

Quan trọng nhất là người học nên cố gắng thực hiện các kỹ thuật được hướng dẫn, kể cả khi kết quả chưa hoàn chỉnh.

```text
Thực hành lần đầu
        │
        ├── Có thể gặp lỗi
        ├── Chuyển động chưa đẹp
        └── Khó kiểm soát nhân vật
                │
                ▼
        Hiểu được quy trình
                │
                ▼
        Thực hành lần tiếp theo dễ hơn
```

Việc trải qua đầy đủ quy trình sẽ giúp người học hiểu rõ hơn cách animation vận hành. Ở những lần thực hành sau, việc tạo và chỉnh sửa chuyển động sẽ trở nên dễ dàng hơn.

---

## 5. Walk Cycle là gì?

**Walk cycle** là một đoạn animation ngắn mô phỏng chu kỳ đi bộ của nhân vật.

Chu kỳ này thường bao gồm một số tư thế chính của hai chân, chẳng hạn như:

1. Một chân bước về phía trước.
2. Trọng lượng cơ thể chuyển sang chân trước.
3. Chân phía sau nhấc khỏi mặt đất.
4. Hai chân đổi vị trí.
5. Nhân vật trở lại tư thế tương tự ban đầu.

Khi đoạn animation này được phát lặp lại liên tục, người xem sẽ có cảm giác nhân vật đang đi bộ không ngừng.

```text
Chân trái bước
      ↓
Cơ thể chuyển trọng lượng
      ↓
Chân phải đưa về phía trước
      ↓
Hai chân đổi vị trí
      ↓
Quay lại tư thế đầu
      ↺
```

---

## 6. Walk Cycle trong trò chơi

Trong game, người ta thường không tạo một animation đi bộ kéo dài cho toàn bộ màn chơi.

Thay vào đó, nhà phát triển tạo một đoạn animation ngắn và cho nó lặp lại.

Ví dụ:

```text
Người chơi nhấn phím di chuyển
              │
              ▼
Game phát animation đi bộ
              │
              ▼
Walk Cycle được lặp liên tục
              │
              ▼
Nhân vật trông như đang đi
```

Khi người chơi giữ một phím điều khiển, chẳng hạn như phím tiến về phía trước, chu kỳ đi bộ sẽ được phát lặp đi lặp lại.

Khi người chơi thả phím, game có thể dừng walk cycle và chuyển nhân vật về animation đứng yên.

### Một số animation lặp phổ biến trong game

* Đi bộ.
* Chạy.
* Đứng yên.
* Nhảy.
* Cúi người.
* Tấn công.
* Bơi.
* Leo trèo.

Mỗi hành động thường được tạo thành một animation riêng và được kích hoạt tùy theo thao tác của người chơi.

---

## 7. Sự khác biệt với modelling low poly

Ở các phần trước, mô hình thường được xây dựng theo phong cách **low poly**, sử dụng số lượng mặt tương đối ít.

Trong phần này, chúng ta sẽ bắt đầu tạo những mô hình:

* Có hình dạng mềm mại hơn.
* Có nhiều polygon hơn.
* Có cấu trúc phù hợp để biến dạng.
* Có thể chuyển động theo hệ thống xương.
* Có mức độ chi tiết cao hơn các mô hình trước.

| Low poly                          | Mô hình chi tiết hơn              |
| --------------------------------- | --------------------------------- |
| Ít polygon                        | Nhiều polygon hơn                 |
| Hình khối đơn giản                | Hình dạng mềm mại hơn             |
| Phù hợp với vật thể tĩnh đơn giản | Phù hợp với nhân vật và animation |
| Dễ tạo và chỉnh sửa               | Cần chú ý topology và biến dạng   |
| Ít yêu cầu về rigging             | Cần chuẩn bị mesh cho rigging     |

---

## 8. Tư duy học animation

Khi học animation, không nên chỉ tập trung vào kết quả cuối cùng.

Thay vào đó, cần chú ý đến từng bước trong quy trình:

```text
Quan sát chuyển động
        ↓
Xác định các tư thế chính
        ↓
Tạo animation
        ↓
Xem lại chuyển động
        ↓
Phát hiện vấn đề
        ↓
Điều chỉnh
        ↓
Lặp lại
```

Animation thường cần được xem lại và điều chỉnh nhiều lần. Đây là một quá trình thử nghiệm, quan sát và cải thiện liên tục.

---

## 9. Phương pháp thực hành đề xuất

Trong quá trình học phần này, nên:

* Thực hiện theo từng bước của bài giảng.
* Không bỏ qua bước nào dù kết quả chưa đẹp.
* Thường xuyên phát lại animation để kiểm tra.
* Quan sát chuyển động từ nhiều góc nhìn.
* Lưu file theo từng giai đoạn.
* Không chỉnh sửa quá nhiều yếu tố cùng một lúc.
* Tập trung vào chuyển động tổng thể trước khi chỉnh chi tiết.

Có thể lưu các phiên bản file theo cấu trúc:

```text
character_model.blend
character_model_v02.blend
character_rig.blend
character_walk_cycle.blend
character_walk_cycle_final.blend
```

Việc lưu nhiều phiên bản giúp dễ dàng quay lại giai đoạn trước nếu rig hoặc animation gặp lỗi.

---

## 10. Phím tắt và công cụ liên quan

Bài học này chỉ giới thiệu tổng quan nên chưa sử dụng phím tắt hay công cụ cụ thể.

Các công cụ quan trọng sẽ được giới thiệu trong những bài tiếp theo, bao gồm:

* Modifier.
* Armature.
* Bone.
* Pose Mode.
* Timeline.
* Keyframe.
* Animation playback.
* Các công cụ chỉnh sửa chuyển động.

---

## 11. Lưu ý quan trọng

> Animation không nhất thiết phải hoàn hảo ngay từ lần thực hành đầu tiên.

Một số nguyên tắc cần ghi nhớ:

* Không nên hoảng khi nhân vật chuyển động sai.
* Không nên bỏ cuộc chỉ vì walk cycle chưa tự nhiên.
* Mỗi lần thực hành sẽ giúp hiểu rõ quy trình hơn.
* Kết quả chưa đẹp vẫn có giá trị nếu người học hoàn thành được các bước.
* Animation sẽ trở nên dễ kiểm soát hơn qua từng lần thực hành.

---

## 12. Checklist trước khi bắt đầu

* [ ] Hiểu mục tiêu cuối phần là tạo một walk cycle.
* [ ] Biết rằng phần này sẽ kết hợp modelling, rigging và animation.
* [ ] Sẵn sàng chuyển từ mô hình low poly sang mô hình chi tiết hơn.
* [ ] Hiểu walk cycle là một đoạn animation được lặp lại.
* [ ] Chấp nhận rằng animation ban đầu có thể chưa hoàn hảo.
* [ ] Chuẩn bị file Blender riêng để thực hành.
* [ ] Sẵn sàng thực hiện đầy đủ quy trình thay vì chỉ quan tâm kết quả cuối.

---

## 13. Tóm tắt

Bài học giới thiệu phần **Rigging & Animation**, trong đó người học sẽ cùng xây dựng một nhân vật và tạo chu kỳ đi bộ cho nhân vật đó.

Phần học đánh dấu sự chuyển đổi từ modelling low poly sang những mô hình chi tiết hơn, sử dụng nhiều polygon và các Modifier để hỗ trợ tạo hình.

Animation là một lĩnh vực lớn nên nội dung chỉ tập trung vào những kiến thức nền tảng. Người học không cần lo lắng nếu animation ban đầu còn lộn xộn. Điều quan trọng là thực hiện đầy đủ quy trình, bởi mỗi lần luyện tập sẽ giúp việc tạo animation trở nên dễ dàng và tự nhiên hơn.

```text
Modelling chi tiết
        +
      Rigging
        +
     Animation
        =
Nhân vật có thể đi bộ
```
