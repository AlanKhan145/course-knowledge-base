# 045 — Sculpting a Cat Head

**Phần:** 05 — Sculpting  
**Thời lượng:** 15:13  
**Chủ đề:** Sculpt organic head và facial forms  
**Loại bài:** lesson

---

## 1. Tóm tắt

Sculpt đầu mèo là bài thực hành tốt để áp dụng các nguyên tắc quan trọng của organic sculpting: đọc reference, xây dựng silhouette, kiểm soát tỷ lệ, sử dụng symmetry, hình thành hốc mắt, muzzle, tai, mũi và các plane của khuôn mặt.

Quy trình hiệu quả không bắt đầu bằng mắt, mũi hay nếp nhăn. Model phải được xây dựng theo thứ tự:

```text
Reference
    ↓
Skull + silhouette
    ↓
Muzzle + cheek
    ↓
Eye sockets
    ↓
Ears
    ↓
Nose + mouth planes
    ↓
Secondary forms
    ↓
Surface cleanup
    ↓
Fine detail
```

Trong giai đoạn blockout, mục tiêu quan trọng nhất là làm cho đầu mèo đọc đúng từ nhiều góc nhìn. Detail chỉ được thêm sau khi primary forms đã ổn định.

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- phân tích reference đầu mèo trước khi sculpt;
- xây dựng base head từ một sphere;
- sử dụng `X Symmetry` để duy trì cấu trúc hai bên;
- sử dụng `Grab` để tạo silhouette và tỷ lệ tổng thể;
- nhận diện skull, muzzle, cheek và eye socket;
- tạo mắt bằng geometry riêng thay vì sculpt toàn bộ từ cùng một mesh;
- sử dụng `Mask` để cô lập vùng hốc mắt;
- tạo volume bằng `Clay Strips` và `Inflate`;
- sử dụng `Crease` để định nghĩa các vùng cần chuyển tiếp sắc;
- nhận biết mesh bị kéo giãn và remesh đúng thời điểm;
- kiểm tra model ở front, side và three-quarter view;
- chuyển sang `Multiresolution` khi primary và secondary forms đã ổn định.

---

## 3. Phân tích reference trước khi sculpt

Không nên bắt đầu bằng việc kéo sphere theo cảm tính.

Trước tiên cần phân tích những khối lớn của đầu mèo.

Có thể chia cấu trúc thành:

```text
        Ears
      ╱      ╲
     ╱ Skull  ╲
    │          │
    │ Eye Area │
    │   ↓  ↓   │
    │  Muzzle  │
     ╲  Nose  ╱
      ╲ Mouth╱
```

Các yếu tố quan trọng cần quan sát:

- chiều rộng hộp sọ;
- chiều dài muzzle;
- vị trí và hướng tai;
- độ sâu eye sockets;
- độ nhô của mũi;
- độ rộng vùng má;
- vị trí đường miệng;
- độ chuyển tiếp giữa trán và sống mũi.

Reference tối thiểu nên cung cấp:

- front view;
- side view.

Nếu có thêm three-quarter view, việc đánh giá volume sẽ chính xác hơn.

> Reference không chỉ dùng để copy contour. Nó giúp hiểu cấu trúc ba chiều nằm phía sau silhouette.

---

## 4. Tách geometry khi hình dạng cơ bản đã có sẵn

Không phải mọi bộ phận đều cần sculpt từ cùng một mesh.

Đối với mắt, cách hiệu quả hơn thường là sử dụng một sphere riêng.

Lý do:

- eyeball về bản chất gần với sphere;
- giữ được hình dạng tròn chính xác;
- dễ điều chỉnh kích thước;
- dễ thay đổi vị trí;
- cung cấp mốc để sculpt eyelid và eye socket.

Workflow:

```text
Head Mesh
    +
Eyeball Geometry
    ↓
Sculpt eyelid quanh eyeball
```

Nguyên tắc này có thể mở rộng:

> Nếu một hình dạng primitive đã mô tả tốt cấu trúc cần tạo, hãy tận dụng primitive thay vì cố sculpt lại một hình học chính xác từ bề mặt organic.

---

## 5. Chuẩn bị base mesh

Có thể bắt đầu từ một `UV Sphere`.

Quy trình:

1. Tạo sphere.
2. Đặt sphere gần tỷ lệ tổng thể của skull.
3. Apply scale nếu cần.
4. Chuyển sang `Sculpt Mode`.
5. Kiểm tra topology.
6. Remesh ở resolution vừa đủ.
7. Bật symmetry theo trục X.

Base mesh không cần dày ngay từ đầu.

Ở giai đoạn đầu, chỉ cần đủ geometry để tạo:

- skull;
- muzzle;
- ears;
- cheek;
- eye socket.

Resolution quá cao sẽ làm khó việc chỉnh primary forms.

---

## 6. Remesh và Dyntopo

Có nhiều cách cung cấp geometry cho sculpting.

`Voxel Remesh` tái tạo mesh với mật độ tương đối đồng đều.

Workflow:

```text
Base Mesh
    ↓
Sculpt form
    ↓
Geometry bị stretch
    ↓
Voxel Remesh
    ↓
Tiếp tục sculpt
```

`Dyntopo` có hướng tiếp cận khác: topology được thay đổi động tại khu vực brush tác động.

Điều này hữu ích trong một số workflow nhưng có thể khiến mật độ mesh thay đổi mạnh giữa các vùng.

Đối với bài sculpt đầu mèo cơ bản, workflow dễ kiểm soát hơn là:

```text
Remesh
   ↓
Primary Forms
   ↓
Remesh khi cần
   ↓
Secondary Forms
   ↓
Multiresolution
   ↓
Fine Detail
```

Không cần tăng resolution cho toàn model ngay khi mới bắt đầu.

---

## 7. Bật symmetry

Đầu mèo ở giai đoạn blockout nên được sculpt gần đối xứng.

Bật symmetry theo trục X:

```text
Stroke bên trái
      ↓
X Symmetry
      ↓
Stroke tương ứng bên phải
```

Symmetry đặc biệt hữu ích khi tạo:

- skull;
- muzzle;
- eye sockets;
- cheek;
- ears;
- nose;
- mouth.

Asymmetry tự nhiên có thể được thêm sau khi cấu trúc chính đã ổn định.

> Không nên tạo asymmetry quá sớm khi tỷ lệ cơ bản vẫn chưa đúng.

---

## 8. Block skull và silhouette

Bắt đầu bằng `Grab` với brush radius lớn.

Ở giai đoạn này không cần:

- lông;
- mí mắt chi tiết;
- nostril sắc;
- wrinkle;
- pore.

Chỉ tập trung vào silhouette.

### Front view

Kiểm tra:

- chiều rộng đầu;
- độ thu của phần muzzle;
- độ rộng hai má;
- vị trí hai tai;
- trục giữa khuôn mặt.

### Side view

Kiểm tra:

- độ dài muzzle;
- độ cong skull;
- độ nhô của nose;
- góc tai;
- transition từ forehead xuống muzzle.

Một form đúng front view nhưng sai side view vẫn là form sai.

---

## 9. Block muzzle và cheek

Mèo có vùng muzzle tương đối đặc trưng.

Không nên hình dung muzzle chỉ là một phần kéo dài của sphere.

Nó là một tập hợp volume quanh:

- nose;
- whisker pads;
- upper mouth;
- cheek transition.

Có thể hình dung:

```text
        Nose
         ↓
    ┌─────────┐
    │ Muzzle  │
  ╱             ╲
Cheek         Cheek
```

Sử dụng `Grab` để điều chỉnh khối lớn trước.

Sau đó mới dùng:

- `Clay Strips`;
- `Inflate`;
- `Draw`;

để xây volume.

Whisker pads cần có cảm giác tròn và mềm nhưng không được phồng quá mức.

---

## 10. Tạo tai từ primary form

Tai ảnh hưởng mạnh đến việc model được đọc là mèo, chó hay loài khác.

Không chỉ chiều dài tai quan trọng mà còn:

- vị trí gốc tai;
- góc nghiêng;
- hướng tai;
- độ mở;
- silhouette nhìn từ side view.

Ở blockout, có thể kéo geometry hiện có bằng `Grab`.

Tập trung vào hình dạng tam giác lớn trước.

Không sculpt ngay:

- inner ear folds;
- edge thickness nhỏ;
- fur detail.

Kiểm tra tai ở side view vì tai mèo thường không dựng hoàn toàn theo một mặt phẳng chính diện.

---

## 11. Xây dựng eye sockets bằng Mask

Eye socket nên được tạo trước khi cố làm eyelid chi tiết.

Một phương pháp hiệu quả:

1. Mask vùng xung quanh mắt.
2. Invert mask nếu cần.
3. Sử dụng `Grab` hoặc deformation phù hợp để đẩy vùng socket vào trong.
4. Clear mask.
5. Smooth có chọn lọc.

Luồng:

```text
Mask vùng mắt
     ↓
Cô lập vùng cần deformation
     ↓
Đẩy eye socket vào
     ↓
Clear Mask
     ↓
Refine transition
```

Ở giai đoạn này eye socket có thể còn rất thô.

Điều quan trọng là tạo được:

- độ sâu;
- vị trí;
- góc nhìn;
- khoảng cách giữa hai mắt.

---

## 12. Thêm eyeball riêng

Tạo một `UV Sphere` cho eyeball.

Sau đó:

1. Scale sphere theo kích thước mắt.
2. Đặt nó vào eye socket.
3. Điều chỉnh độ sâu.
4. Tạo mắt thứ hai bằng symmetry hoặc `Mirror` phù hợp với workflow.

Eyeball không nên nhô quá xa khỏi skull.

Hãy đánh giá từ side view:

```text
Sai:
Skull ── (  Eye nhô quá nhiều

Tốt hơn:
Skull ─( Eye nằm trong socket
```

Eyeball là reference hình học để sculpt eyelid, không phải chỉ là chi tiết trang trí.

---

## 13. Sculpt eyelid quanh eyeball

Khi eyeball đã đúng vị trí, bắt đầu thêm volume quanh mắt.

Eyelid phải **ôm theo sphere của eyeball**.

Không nên sculpt eyelid như hai đường vẽ phẳng trên khuôn mặt.

Workflow:

```text
Eyeball
   ↓
Add volume quanh socket
   ↓
Upper eyelid
   ↓
Lower eyelid
   ↓
Smooth transition
```

Có thể sử dụng:

- `Clay Strips`;
- `Draw`;
- `Inflate`;
- `Smooth`.

Ở giai đoạn này vẫn giữ brush tương đối lớn.

Nếu expression trông quá dữ hoặc quá buồn, kiểm tra:

- góc upper eyelid;
- độ mở mắt;
- vị trí eyebrow/forehead volume;
- độ sâu eye socket.

---

## 14. Forehead và bridge giữa hai mắt

Một đầu động vật không phải tập hợp các chi tiết tách rời.

Giữa hai mắt cần có volume liên tục đi từ:

```text
Forehead
   ↓
Bridge
   ↓
Nose
```

Nếu vùng này quá lõm, hai mắt sẽ có cảm giác tách rời.

Nếu quá phồng, khuôn mặt sẽ mất đặc trưng.

`Clay Strips` phù hợp để xây volume ở khu vực này.

Sau mỗi vài stroke:

1. Kiểm tra side view.
2. Kiểm tra three-quarter view.
3. Smooth nhẹ vùng transition.
4. Không làm mất ridge chính.

---

## 15. Sculpt nose

Nose nên được xây từ volume trước rồi mới tạo nostril.

Thứ tự:

```text
Nose mass
   ↓
Nose width
   ↓
Nose projection
   ↓
Nostril placement
   ↓
Crease nhỏ
```

Không bắt đầu bằng việc vẽ hai lỗ nostril lên một surface chưa đúng.

Dùng `Grab`, `Clay` hoặc `Inflate` để sửa volume trước.

Sau đó mới dùng brush sắc như `Crease` để định nghĩa:

- cạnh nostril;
- đường nối với muzzle;
- transition nhỏ quanh nose.

Strength nên thấp để tránh tạo rãnh quá sâu.

---

## 16. Mouth planes

Miệng không chỉ là một đường crease.

Trước tiên cần xác định volume của khu vực quanh miệng.

Có thể hình dung:

```text
Nose
  ↓
Upper muzzle
  ↓
Mouth plane
  ↓
Lower muzzle / jaw
```

`Inflate` hoặc clay brush có thể tạo volume cho phần muzzle dưới.

Sau đó sử dụng một brush sắc hơn để định nghĩa đường miệng.

Nếu mouth line được tạo quá sớm:

```text
Crease mạnh
    ↓
Đường rõ
    ↓
Nhưng volume xung quanh sai
    ↓
Miệng trông như được vẽ lên mặt
```

Form luôn phải đi trước line.

---

## 17. Kiểm tra model từ ba góc chính

Trong organic sculpt, không nên sculpt quá lâu ở một góc nhìn.

Ba góc cần kiểm tra liên tục:

```text
Front
  ↕
Three-quarter
  ↕
Side
```

**Front view** giúp kiểm tra:

- symmetry;
- khoảng cách mắt;
- width;
- muzzle;
- tai.

**Side view** giúp kiểm tra:

- skull;
- eye depth;
- nose projection;
- muzzle length;
- ear angle.

**Three-quarter view** giúp phát hiện:

- volume bị phẳng;
- cheek không đủ;
- mắt không nằm đúng socket;
- transition thiếu tự nhiên.

Three-quarter view đặc biệt quan trọng vì đây là góc dễ nhận biết sai lệch 3D nhất.

---

## 18. Remesh khi geometry bị stretch

`Grab` và các deformation lớn có thể kéo polygon thành các dải dài.

Dấu hiệu:

- wireframe không đều;
- brush bắt đầu phản ứng kỳ lạ;
- surface xuất hiện vùng gãy;
- detail không giữ được.

Khi đó:

```text
Stretched Mesh
      ↓
Remesh
      ↓
Uniform Density
      ↓
Continue Sculpting
```

Không remesh liên tục sau từng thao tác.

Chỉ remesh khi topology thực sự bắt đầu cản trở quá trình sculpt.

Đồng thời không đặt voxel size quá nhỏ quá sớm vì sẽ làm model nặng không cần thiết.

---

## 19. Smooth có chọn lọc

`Smooth` rất hữu ích nhưng dễ phá form.

Nên dùng Smooth để:

- loại bỏ artifact;
- nối transition;
- làm mềm vùng clay quá gắt;
- xử lý surface sau remesh.

Không nên dùng Smooth để:

- sửa tỷ lệ;
- sửa silhouette;
- xóa một form đã sculpt sai;
- làm toàn bộ model tròn và mềm.

Workflow đúng:

```text
Xác định form
    ↓
Sculpt
    ↓
Đánh giá
    ↓
Smooth đúng vùng cần thiết
```

Thay vì:

```text
Sculpt
→ Smooth toàn bộ
→ Sculpt
→ Smooth toàn bộ
```

Nếu Smooth quá mạnh, giảm strength của smoothing.

---

## 20. Stabilize Stroke cho đường cần kiểm soát

Một số chi tiết như:

- mouth line;
- nostril;
- crease quanh mắt;

cần stroke tương đối ổn định.

Nếu thao tác chuột hoặc stylus rung, `Stabilize Stroke` có thể tạo độ trễ nhẹ để làm đường đi của brush mượt hơn.

Luồng:

```text
Input tay
    ↓
Stabilization
    ↓
Stroke mượt hơn
```

Công cụ này hữu ích cho detail có hướng rõ, nhưng không cần bật cho mọi brush.

`Grab` và các brush blockout thường cần phản hồi trực tiếp hơn.

---

## 21. Chọn MatCap để đọc form

Viewport shading ảnh hưởng lớn đến khả năng đọc sculpture.

Một MatCap có shadow và highlight rõ giúp quan sát:

- plane;
- ridge;
- valley;
- surface noise.

Không chọn shading chỉ vì màu đẹp.

Mục tiêu là:

> ánh sáng viewport phải giúp nhìn thấy form.

Có thể thay đổi MatCap trong quá trình sculpt để kiểm tra xem model có chỉ trông đẹp dưới một điều kiện ánh sáng cụ thể hay không.

---

## 22. Chuyển từ primary sang secondary forms

Chỉ chuyển sang secondary forms khi:

- skull đúng;
- muzzle đúng tỷ lệ;
- ears đúng vị trí;
- eye sockets đúng;
- nose projection hợp lý;
- silhouette đọc được.

Secondary forms gồm:

- eyelid rõ hơn;
- cheek transition;
- brow/forehead transition;
- nose wings;
- whisker pads;
- mouth volume;
- jaw transition.

Một checkpoint hữu ích:

> Nếu tắt mọi crease và chi tiết nhỏ, model vẫn phải đọc được là một đầu mèo.

Nếu không đạt điều đó, chưa nên đi tiếp.

---

## 23. Khi nào chuyển sang Multiresolution?

Remesh trung bình đủ cho blockout và nhiều secondary forms.

Fine detail cần mật độ cao hơn.

Khi form chính đã ổn:

```text
Stable Base Form
      ↓
Multiresolution
      ↓
Subdivide
      ↓
Higher Sculpt Level
      ↓
Fine Detail
```

Fine detail có thể gồm:

- wrinkle nhỏ;
- pore;
- fold;
- surface breakup;
- các chi tiết da nhỏ.

Không sử dụng `Multiresolution` để tránh phải sửa primary form.

Nếu silhouette vẫn sai, quay lại mức thấp hoặc sửa base trước.

---

## 24. Surface detail không sửa được anatomy

Một sai lầm thường gặp là thêm:

- wrinkle;
- pore;
- crease;
- fur indication;

với hy vọng model trở nên thuyết phục hơn.

Nhưng:

```text
Sai tỷ lệ
   +
Nhiều detail
   =
Model chi tiết nhưng vẫn sai
```

Detail chỉ làm rõ surface đã tồn tại.

Thứ tự ưu tiên luôn là:

```text
Silhouette
    ↓
Proportion
    ↓
Primary Forms
    ↓
Secondary Forms
    ↓
Detail
```

---

## 25. Workflow hoàn chỉnh

Quy trình sculpt đầu mèo có thể hệ thống thành:

```text
Reference
    ↓
Phân tích skull và muzzle
    ↓
Tạo sphere
    ↓
Remesh
    ↓
X Symmetry
    ↓
Grab silhouette
    ↓
Block skull
    ↓
Block muzzle + cheek
    ↓
Block ears
    ↓
Mask eye sockets
    ↓
Đặt eyeballs
    ↓
Sculpt eyelids
    ↓
Forehead + bridge
    ↓
Nose mass
    ↓
Mouth planes
    ↓
Remesh khi cần
    ↓
Secondary forms
    ↓
Surface cleanup
    ↓
Multiresolution
    ↓
Fine details
```

Mỗi bước chỉ nên được thực hiện khi bước phía trên đã đủ ổn định.

---

## 26. Lỗi thường gặp

**Hiện tượng:** Đầu nhìn giống mèo ở front view nhưng sai hoàn toàn khi xoay ngang.  
**Nguyên nhân:** Sculpt theo contour 2D thay vì kiểm tra volume.  
**Cách xử lý:** Luân phiên front, side và three-quarter view.

**Hiện tượng:** Mắt trông như gắn bên ngoài khuôn mặt.  
**Nguyên nhân:** Chưa xây eye socket đủ sâu hoặc eyeball đặt quá ngoài.  
**Cách xử lý:** Chỉnh socket và vị trí eyeball trước khi sửa eyelid.

**Hiện tượng:** Tai làm model giống loài khác.  
**Nguyên nhân:** Góc, vị trí hoặc tỷ lệ tai sai.  
**Cách xử lý:** Đánh giá tai từ side view và so với reference.

**Hiện tượng:** Muzzle quá dài.  
**Nguyên nhân:** Kéo `Grab` theo front view mà không kiểm tra side view.  
**Cách xử lý:** Giảm projection và đánh giá lại skull-to-muzzle ratio.

**Hiện tượng:** Khuôn mặt quá mềm.  
**Nguyên nhân:** Lạm dụng `Smooth`.  
**Cách xử lý:** Giữ các plane và ridge quan trọng, chỉ smooth transition.

**Hiện tượng:** Nose có nostril rõ nhưng vẫn không giống.  
**Nguyên nhân:** Detail được tạo trước khi nose mass đúng.  
**Cách xử lý:** Xóa hoặc làm mềm detail, sửa volume trước.

**Hiện tượng:** Mesh bắt đầu rách hoặc brush tạo artifact.  
**Nguyên nhân:** Geometry bị kéo giãn sau nhiều deformation.  
**Cách xử lý:** Remesh ở resolution phù hợp.

**Hiện tượng:** Model rất nặng nhưng vẫn chưa đúng form.  
**Nguyên nhân:** Tăng subdivision quá sớm.  
**Cách xử lý:** Làm việc ở resolution thấp hơn cho đến khi primary forms ổn định.

---

## 27. Best practices

- Sử dụng reference từ ít nhất hai góc khi có thể.
- Bắt đầu bằng brush lớn.
- Giữ symmetry trong phần lớn giai đoạn primary forms.
- Dùng geometry riêng cho eyeball.
- Sculpt eye socket trước eyelid detail.
- Kiểm tra ear angle ở side view.
- Xây nose bằng volume trước nostril.
- Xây mouth planes trước mouth crease.
- Không để `Smooth` xóa mất cấu trúc.
- Remesh khi topology bắt đầu cản trở sculpting.
- Không tăng resolution chỉ để model trông “mịn” hơn.
- Kiểm tra three-quarter view thường xuyên.
- So sánh silhouette với reference ở khoảng cách xa.
- Chỉ thêm fine detail khi model đã đọc đúng mà chưa cần detail.

---

## 28. Bài thực hành

Sculpt một đầu mèo từ sphere và dừng trước giai đoạn pore hoặc fur detail.

### Giai đoạn 1 — Primary forms

1. Chuẩn bị front và side reference.
2. Tạo một sphere.
3. Remesh ở resolution vừa phải.
4. Bật `X Symmetry`.
5. Dùng `Grab` tạo skull.
6. Block muzzle.
7. Block cheek.
8. Block hai tai.
9. Tạo phần neck đơn giản.

**Checkpoint:**

- silhouette front view đọc được;
- silhouette side view hợp lý;
- muzzle không quá dài hoặc quá ngắn;
- tai có hướng rõ.

### Giai đoạn 2 — Facial structure

1. Mask vùng eye sockets.
2. Tạo độ sâu cho socket.
3. Thêm eyeball bằng sphere riêng.
4. Sculpt upper và lower eyelid.
5. Thêm volume ở bridge.
6. Tạo nose mass.
7. Tạo whisker pads.
8. Xác định mouth plane.

**Checkpoint:**

- mắt nằm trong skull thay vì nổi ngoài surface;
- nose và muzzle có volume;
- khuôn mặt đọc được ở three-quarter view.

### Giai đoạn 3 — Cleanup

1. Remesh nếu topology bị stretch.
2. Smooth những vùng chuyển tiếp cần thiết.
3. Giảm các bump không mong muốn.
4. Chỉnh lại silhouette bằng `Grab`.
5. Kiểm tra front, side và three-quarter.

**Kết quả mong đợi:**

```text
Cat Head
   ↓
Silhouette rõ
   ↓
Primary Forms đúng
   ↓
Facial Structure đọc được
   ↓
Surface tương đối sạch
```

Không cần thêm pore, fur hay wrinkle nhỏ để hoàn thành bài thực hành.

---

## 29. Checklist hoàn thành

- [ ] Có reference đủ để kiểm tra front và side.
- [ ] Base mesh có resolution phù hợp.
- [ ] Đã bật symmetry trong giai đoạn primary forms.
- [ ] Skull được block trước facial detail.
- [ ] Muzzle có volume rõ.
- [ ] Cheek được xây như form 3D thay vì contour.
- [ ] Tai đúng vị trí và hướng cơ bản.
- [ ] Eye socket được tạo trước eyelid detail.
- [ ] Eyeball sử dụng geometry riêng.
- [ ] Mắt không nhô quá xa khỏi skull.
- [ ] Forehead và bridge có transition hợp lý.
- [ ] Nose mass được xác định trước nostril.
- [ ] Mouth plane được xây trước crease.
- [ ] Silhouette đọc được ở front view.
- [ ] Silhouette đọc được ở side view.
- [ ] Model đọc được ở three-quarter view.
- [ ] Remesh được thực hiện khi geometry bị stretch.
- [ ] `Smooth` chỉ được dùng có chọn lọc.
- [ ] Detail không được dùng để che lỗi tỷ lệ.
- [ ] Chỉ chuyển sang `Multiresolution` sau khi form chính đã ổn.

---

## 30. Tổng kết

Sculpt đầu mèo là bài tập về **hình khối**, không phải về số lượng brush hay chi tiết bề mặt.

Một workflow đáng tin cậy luôn bắt đầu từ:

```text
Skull
  ↓
Silhouette
  ↓
Muzzle
  ↓
Eye Sockets
  ↓
Ears
  ↓
Facial Volumes
  ↓
Secondary Forms
  ↓
Detail
```

`Grab` đóng vai trò chính trong blockout. `Mask` giúp cô lập những vùng như eye socket. `Clay Strips` và `Inflate` xây volume, trong khi `Crease` chỉ nên được dùng sau khi form xung quanh đã tồn tại. Remesh giúp duy trì mật độ mesh khi geometry bị kéo giãn, còn `Multiresolution` phù hợp hơn cho giai đoạn detail cuối.

Nguyên tắc quan trọng nhất là kiểm tra model liên tục từ **front, side và three-quarter view**. Nếu đầu mèo chưa đọc đúng khi chưa có detail, hãy tiếp tục sửa primary forms thay vì che vấn đề bằng wrinkle, crease hoặc surface detail.