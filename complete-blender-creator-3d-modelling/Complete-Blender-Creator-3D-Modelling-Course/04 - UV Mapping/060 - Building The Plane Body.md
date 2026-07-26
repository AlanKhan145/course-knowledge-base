# 060 — Building The Plane Body
In this lecture, we'll start building the body of our plane following our reference images.

I'll also be introducing the auto mirror tool.

So here's where we got up to last time, and I'm still in wireframe mode and it's probably best to go

to solid mode, but also have x ray mode.

Then when I go to something like Side View with three, zoom in, there's my cube in front of my reference

image and I can easily see the reference image because of x ray view.

And with the cube selected I can resize it with s to scale and bring it into position.

And I'll start with this section here.

So scan in the Y, bring that into position somewhere around here.

So it's taking up this section.

The reference image should be fairly helpful because you can see the topology of the faces and how many

loop cuts and things like that we have.

You can see that there's an edge coming down here.

It's a little distracting with the wing and we'll come to that later.

But when modeling, try and focus on the base shapes first and build up slowly.

Now I'm going to switch the front view and obviously scale in the X to make sure my shape matches the

front profile.

Now I could have used the cylinder and you can see it's got one, two, three, four faces going round

one side, but it's actually easier to start off with a cube and then divide it later on because it's

easier to edit.

And once I've got that base shape, then I can start adding detail.

So when building complex models, you get the base shape first and you build up the detail afterwards.

So that's what it looks like at the moment.

Fairly basic.

And I want you to pause the video here, catch up with me, resize your cube.

So it's a similar position to mine both side view and front view.

Pause the video and have a go at that.

Okay.

So we can see some symmetry from one side to the other.

So it would make sense to make this a mirrored object.

Now we can go into edit mode, cut the shape in half, delete half the shape and add our mirror.

But I'm going to show you a really useful add on.

If I go up to edit preferences and add ons, type in mirror and there's the auto mirror tool, make

sure that's ticked and close down your preferences.

Now when I press DN on my keyboard and go to the edit tab, you'll see Auto Mirror is there.

I've got another add on enabled called bull tools.

Bull tools.

It's not necessary for this course.

Now with my object selected, I can mirror in the X, Y or z, but always remember before pressing the

auto mirror button it will mirror around our object origin.

So if I zoom in, you can see our object origin is in the center along the x axis.

So that's fine, not along the z axis.

So if I were to mirror on the Z axis, that may cause a slight problems.

We can easily recenter it by right clicking set origin and then origin to geometry that will put it

right into the center of the object.

So now I can press auto mirror and it looks like nothing's happened.

But if I go to the mirror tools here, you can see I have a mirror modifier enabled.

It's in the x axis.

Clipping has been turned on and if I go into edit mode, you can see I've got one side that I can edit,

so it's a nice quick way of setting up your mirrors.

So pause video here and enable the auto mirror add on.

Then make sure your object origin is in the center of your object and use the auto mirror under the

edit menu in the x axis to create your mirror.

Pause the video and have a go at that.

Okay.

So now I'm going to go round to side view and just extrude my shape outwards.

Now make sure you don't click once here and shift click here and then extrude.

Because that way I'm just extruding this edge.

I haven't selected the vertices behind those other vertices, so I'll undo that and I'll go back to

side view.

You must box select like this.

So you've got all four selected.

And then e to extrude and pull them outwards.

And I might want to scale these down very slightly.

Do you remember when you're scaling, you're also scaling in the x axis this direction as well.

So once again, back to side view E to extrude and scale that down.

E to extrude and scale that down.

Let's just double check that and that's looking fine.

Like I say, we can modify the shape a bit more later on by adding a loop, cut down the middle, and

then moving this top outside edge inwards a bit.

And again, this one inwards a bit, and we'll end up with a more rounded shape.

So back to Side View, select the back with box, select E to extrude, to pull that backwards and scale

it down.

So I'm following this shape and I can then select these ones here and e to extrude to pull them upwards.

I'll tap Z to take away the Z axis so it doesn't go at an angle and I can move it up to there and then

I can grab this one here and move that up into position as well.

Then I can select all three at the back e to extrude outwards scale down.

And it gets a bit messy and complicated at the back here.

What I'm going to do for now is just to extrude all the way back to the edge of the shape here and scale

it right down to something like this.

Then I can press control R to do a loop, cut down the middle, ready for extruding out that back tail

fin.

So I've followed my reference image and I've got the base shape of the middle section of the plane.

Your challenge then is to do exactly the same, try and follow the topology as best as possible.

Then you'll end up with something that's very similar to mine.

Once you've done that, make sure you've saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Building The Plane Body |
| **Thời lượng** | 5:23 |
| **Chủ đề chính** | Dựng thân máy bay |

## 1. Mục tiêu bài học
- Bắt đầu dựng thân máy bay (fuselage) dựa theo ảnh tham chiếu đã thiết lập.
- Áp dụng box modelling: bắt đầu từ một khối cơ bản rồi thêm chi tiết dần.
- Sử dụng Mirror Modifier để chỉ cần model một nửa thân máy bay.
- Dùng Loop Cut và Proportional Editing để tạo dáng cong tự nhiên cho thân.

## 2. Nội dung chính
Thân máy bay thường được dựng theo phương pháp **box modelling**: bắt đầu từ một mesh đơn giản (cube hoặc cylinder), sau đó dùng loop cut để thêm cạnh, rồi kéo/scale từng vòng cạnh (edge loop) theo hình dạng thân máy bay quan sát được từ ảnh tham chiếu Front và Side.

Vì máy bay đối xứng qua mặt phẳng dọc thân (trục X), nên chỉ cần model một nửa và dùng **Mirror Modifier** (trục X, bật Clipping để hai nửa luôn khớp liền tại đường giữa) để tự động phản chiếu nửa còn lại. Điều này giúp tiết kiệm thời gian và đảm bảo đối xứng hoàn hảo.

Quy trình dựng dáng cơ bản:
- Thêm một mesh cơ bản (ví dụ Cylinder hoặc Cube) làm gốc cho thân.
- Dùng `Ctrl+R` (Loop Cut) để chia thân thành nhiều đoạn dọc theo chiều dài, tương ứng các điểm mốc quan trọng trên ảnh tham chiếu (mũi, khoang lái, đuôi).
- Chọn từng vòng cạnh, dùng `S` (Scale) để phồng/hóp thân theo đúng đường viền ảnh, có thể kết hợp Proportional Editing (`O`) để tạo độ chuyển mượt giữa các đoạn.
- Kéo (`E` — Extrude) phần mũi và đuôi để tạo độ thon nhọn tự nhiên.

Nên thường xuyên xoay góc nhìn giữa Front, Side và Perspective để đối chiếu dáng thân với cả hai ảnh tham chiếu cùng lúc, tránh chỉ tham chiếu một góc nhìn duy nhất khiến mesh bị lệch ở góc còn lại.

## 3. Quy trình thực hành gợi ý
1. Thêm mesh cơ bản (Cylinder/Cube) tại vị trí thân máy bay, dịch một nửa sang trục X dương để chuẩn bị Mirror.
2. Thêm Mirror Modifier, chọn trục X, bật Clipping.
3. Vào Edit Mode, dùng `Ctrl+R` thêm loop cut dọc theo chiều dài thân theo các mốc trên ảnh tham chiếu.
4. Scale từng edge loop để khớp đường viền thân từ ảnh Side và Front, xen kẽ kiểm tra ở cả hai góc nhìn.
5. Extrude phần mũi và đuôi máy bay để tạo độ vuốt nhọn.
6. Dùng Proportional Editing khi cần chỉnh dáng cong mượt mà hơn thay vì di chuyển từng vertex cứng.
7. Kiểm tra đối xứng bằng cách xoay view sang Perspective, xác nhận Mirror hoạt động đúng không có khe hở ở giữa.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut (thêm vòng cạnh mới) |
| `E` | Extrude (kéo mặt/cạnh để tạo hình mới) |
| `S` | Scale |
| `O` | Bật/tắt Proportional Editing |
| `Ctrl+2` (trên Modifier) | Áp Multiresolution/Subdivision preview mức 2 (nếu dùng thêm Subdivision Surface) |
| `Numpad 1` / `Numpad 3` | Chuyển góc nhìn Front / Side để đối chiếu ảnh tham chiếu |

## 5. Lưu ý & lỗi thường gặp
- Quên bật Clipping trên Mirror Modifier khiến đường giữa thân bị hở khi các vertex trung tâm không nằm đúng trên trục X = 0.
- Chỉ tham chiếu một ảnh (chỉ Front hoặc chỉ Side) khiến thân máy bay đúng ở góc này nhưng sai lệch rõ ở góc kia.
- Thêm quá nhiều loop cut ngay từ đầu khiến mesh khó kiểm soát; nên bắt đầu với ít đoạn, tăng dần khi cần chi tiết hơn.
- Không kiểm tra pháp tuyến (normal) mặt ngoài có thể gây lỗi hiển thị bóng đổ sai khi render sau này (dùng Overlay → Face Orientation để kiểm tra).

## 6. Checklist thực hành
- [ ] Đã dựng được khối thân cơ bản đối xứng qua Mirror Modifier.
- [ ] Đã thêm loop cut và scale khớp theo cả ảnh Front và Side.
- [ ] Đã tạo được độ thon ở mũi và đuôi máy bay.
- [ ] Đã kiểm tra không có khe hở tại đường giữa thân.

## 7. Tóm tắt
Bài học bắt đầu quá trình modelling máy bay bằng cách dựng thân từ một khối cơ bản, sử dụng box modelling kết hợp Mirror Modifier để đảm bảo đối xứng, tạo nền tảng hình khối cho các chi tiết cánh và bộ phận khác ở các bài tiếp theo.
