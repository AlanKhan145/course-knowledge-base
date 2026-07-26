# 059 — Plane Reference Images
In this next section of lectures, we'll be taking our knowledge of UVA unwrapping to the next level

by unwrapping a complex object.

So a spitfire aeroplane.

In this particular lecture, we'll be importing the reference images so we can make the model of our

Spitfire.

Now I've started a new scene, so it's nice and simple and there's no distractions.

But you could easily put this into the scene with our barrels and our building, and you could then

change the shape of the building to be some sort of airport hangar or radio tower or something similar

to that, and build a whole airport.

And I'll be showing you how you can take objects from one scene to another so we can easily append as

it's known or import the plane we make into our other scene.

So let's import our images in the resources that come with this lecture, you'll see that you've got

a plane front, a plane side, and a plane top images which we can bring into Blender.

So I'll click the front one and just bring that in and bring the side one in and bring the top one in

as well.

I'll minimise that and I'll just select all these three alt g to remove any movement and alt r to remove

any rotation.

I'll click on the cube and press H to hide for the moment and select our first one here, which looks

like the front.

I'll rotate by the x 90 degrees.

Oh, actually I selected the side view but that's fine.

I can rotate by the x 90 degrees for that and r z 90.

So that side view, I'm going to label this as well.

That will help us.

I'll select the next one, which looks like Top View, and that's the correct rotation.

So I'll double click on that and also rename that top and the last one there.

This looks like front view are X 90 and just check that and that looks correct.

So I'll double click on that and type in front.

Also, I'll select all three of these and move them to a new collection.

So m new collection plane ref.

Now I can easily hide them in the viewport and make the visible when I need to.

Okay, now they need a little bit of lining up.

So first of all, I move the side and the front view away from the middle.

So G then X for the side view.

I move that this way and the front view here g then y and move it backwards and the top view.

G then z.

To move it downwards.

That way, when I bring my Q back by clicking on the I, I can model in front of each of these views

side, front and top.

So pause the video and catch it with me placing your reference images into the scene so that they've

got the right rotation and that they're in a location where you can model in front of them.

Okay.

So what I need to do now is line them up.

So we'll start with one view.

So in this case, I'll take the top view and I'll just zoom in slightly, make sure that top view is

selected.

I'll just go to the object data properties and turn the opacity on and bring that down to something

like point five.

In this case seems to work well now we can see instantly that it doesn't quite line up with the middle.

So I can press g the x and move that across, hold down shift to move in smaller increments and move

it into the middle there and left click.

So how do I get the front of the plane here in top view to line up with the front of the plane inside

view there?

Well, I'll go back to Top View and I'm going to use my starting cube, the default cube, as we call

it, as a reference.

And I can move my cube, so g then Y to the front of the plane.

So it's bang on the front of the plane just there.

Now when I go to side view, I can select my side image and g then y holding down shift to move that

to exactly the front there.

But how do I know the back end is lining up?

Well, let's take our cube.

I'll go to top for you again.

And this time I go into edit mode and into wireframe, select the back of the cube g, then y and move

that.

So it's touching the back there.

So this cube is exactly the right length.

So back into object mode, back into side view, and we can see that my side view is nowhere near the

right size.

If I scale this now, it will scale the front as well.

And we can do that and we can press each to grab and move it into position, scale it a bit again.

But instead if I move the 3D cursor to here and then change my transform pivot point to the 3D cursor

and press the scale, it will scale from the front there and I can move that precisely to the back.

So I should have the top and side view lining up nicely now.

So pause the video and have a go at that.

So you've got your top view and side view lined up with each other.

Lastly then is the rear view.

So I'll go to top for you again.

Select my cube.

Oh, I'm going by the 3D cursor here.

So I'll turn it back to medium point and scale by the X and make sure it's the width of my wings.

That way when I go to front view, making sure that my front image is selected, I can scale that down

so the wings touch the edge of the box like this.

Lastly, then, we need to make sure that the side view and the front view are in line.

So let's say the bottom of the plane.

So I go to side view, select my cube, which seems to be a little bit awkward at the moment, and it's

actually just a highlight problem.

It wasn't highlighting correctly, probably because I'm in x ray mode, let's try wireframe instead.

That will make it a bit easier.

And again, go to side view and I'll scale my cube so it's the right height for the plane.

So somewhere around here G then said to move it upwards.

I'll just zoom in so we can see it nice and easily.

So that's hitting the bottom of the plane there and I'm going to edit mode and choose the top of the

cube.

G then said to move that upwards.

So it's hitting the top of the rudder there and the bottom of the plane back into object mode, back

to front view this time select my front view and G then said to move it upwards and about there looks

good and I'll grab it in the x axis to make sure it's nicely aligned there and I'll scale it up as well

because I'm not quite touching the edge with my wings.

Lastly, I'll turn off perspective for each of the views so that they don't appear in perspective mode.

Now when I go to front view, side view and top view, I'll just see those.

But when I go into 3D view, I'm not distracted by them.

The very last thing for me to do, I think side view, I might turn the opacity on for that as well.

So it's not too distracting.

So your challenge then is to make sure all your reference images are aligned and ready for our plane

model.

Once you've done that, make sure you've saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Plane Reference Images |
| **Thời lượng** | 6:19 |
| **Chủ đề chính** | Nhập ảnh tham chiếu máy bay |

## 1. Mục tiêu bài học
- Biết cách nhập ảnh tham chiếu (reference image) vào scene Blender bằng `Add → Image → Reference`.
- Sắp xếp đúng ảnh Front View và Side View của máy bay tại vị trí, góc quay và tỷ lệ chính xác.
- Hiểu sự khác biệt giữa Reference Image và Background Image, và vì sao Reference phù hợp hơn cho modelling 3D.
- Khóa (lock) ảnh tham chiếu để tránh chọn nhầm trong quá trình modelling.

## 2. Nội dung chính
Trước khi dựng mô hình máy bay, cần thiết lập ảnh tham chiếu làm nền để đảm bảo tỷ lệ và hình dáng chính xác. Blender hỗ trợ hai loại ảnh tham chiếu:
- **Reference Image** (`Add → Image → Reference`): một object Empty đặc biệt hiển thị ảnh trong không gian 3D, có thể xoay, di chuyển, scale tự do như một object bình thường, hiển thị từ mọi góc nhìn (không chỉ ortho).
- **Background Image** (trong View properties của viewport, tab Background Images khi ở chế độ Orthographic): ảnh chỉ hiển thị khi nhìn thẳng theo trục ortho, không phải một object thực sự trong scene, không xuất hiện khi render.

Đối với dự án modelling từ nhiều góc (front, side), Reference Image thường tiện hơn vì có thể sắp xếp cả hai ảnh cùng lúc trong scene, xoay đúng 90° để mỗi ảnh chỉ hiển thị rõ khi nhìn từ góc tương ứng (Numpad 1 cho Front, Numpad 3 cho Side).

Các bước quan trọng khi thiết lập:
- Đặt ảnh Front tại gốc tọa độ, xoay để mặt phẳng ảnh vuông góc với trục Y (nhìn từ Front — Numpad 1).
- Đặt ảnh Side xoay 90° quanh trục Z để mặt phẳng ảnh vuông góc với trục X (nhìn từ Side — Numpad 3).
- Canh chỉnh vị trí (Location) sao cho hai ảnh khớp về chiều cao và chiều dài thân máy bay (dùng một điểm chuẩn chung, ví dụ mũi máy bay hoặc trục cánh).
- Điều chỉnh Opacity/Depth trong Object Data Properties của Reference để ảnh không che khuất mesh khi modelling.

Sau khi sắp xếp xong, nên khóa Reference Images (đặt vào Collection riêng và bật Disable Selection, hoặc dùng Lock Object Transform) để tránh vô tình di chuyển ảnh trong lúc thao tác mesh.

## 3. Quy trình thực hành gợi ý
1. Chuẩn bị hai ảnh máy bay: một ảnh nhìn từ Front, một ảnh nhìn từ Side, cùng tỷ lệ.
2. Vào `Add → Image → Reference`, chọn ảnh Front, đặt tại gốc tọa độ.
3. Thêm ảnh Side tương tự, xoay 90° quanh trục Z (`R Z 90 Enter`).
4. Chuyển góc nhìn Front (Numpad 1) và Side (Numpad 3) để kiểm tra từng ảnh hiển thị đúng và không lệch tỷ lệ.
5. Canh chỉnh Location/Scale của hai ảnh để khớp với nhau theo một điểm chuẩn chung.
6. Đưa hai Reference Image vào một Collection riêng, đặt tên rõ ràng, và khóa lại (Disable Selection trong Outliner) để tránh chọn nhầm khi modelling.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Add → Image → Reference` | Thêm ảnh tham chiếu vào scene |
| `Numpad 1` / `Ctrl+Numpad 1` | Góc nhìn Front / Back |
| `Numpad 3` / `Ctrl+Numpad 3` | Góc nhìn Right / Left |
| `Numpad 7` | Góc nhìn Top |
| `R` sau đó `X`/`Y`/`Z` | Xoay object theo trục tương ứng |
| `Numpad .` | Đưa object đã chọn vào giữa khung nhìn (Frame Selected) |

## 5. Lưu ý & lỗi thường gặp
- Hai ảnh không cùng tỷ lệ khung hình hoặc không được scale khớp nhau khiến mô hình bị sai tỷ lệ giữa chiều dài và chiều cao.
- Quên xoay ảnh Side 90° khiến cả hai ảnh cùng nằm trên một mặt phẳng, không thể dùng làm tham chiếu hai góc nhìn riêng biệt.
- Không khóa Reference Image dễ dẫn đến việc vô tình kéo/xoay ảnh trong lúc chọn vertex gần đó.
- Đặt Opacity ảnh quá cao che khuất mesh đang chỉnh sửa, gây khó quan sát wireframe.

## 6. Checklist thực hành
- [ ] Đã thêm được ảnh Reference cho cả góc Front và Side.
- [ ] Đã xoay và canh chỉnh hai ảnh khớp tỷ lệ với nhau.
- [ ] Đã kiểm tra hiển thị đúng khi chuyển Numpad 1 / Numpad 3.
- [ ] Đã khóa các Reference Image để tránh chọn nhầm.

## 7. Tóm tắt
Bài học thiết lập nền tảng cho toàn bộ quá trình modelling máy bay: nhập và canh chỉnh chính xác hai ảnh tham chiếu Front và Side bằng Reference Image, tạo cơ sở tỷ lệ đúng cho các bước dựng hình ở những bài tiếp theo.
