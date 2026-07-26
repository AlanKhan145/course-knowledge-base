# 082 — Building the Armature
In this lecture, we'll be making the basic skeleton for our character.

So we got up to last time, and I'll come into front of you once again and make sure my 3D cursor is

in the world center by pressing shift s and cursor to world origin, then shift data, add and armature.

Of course if I undo that and let's say added over here so shift a to add and armature, I can just press

alt g to remove any movement and it will appear in the world center.

So back to front for you and I want my beginning bone to start around this point.

Yeah, right in the middle of our person and it's fine to move it along the Z axis, but it must stay

at zero along the x axis to work well.

However, I cannot see my bone, so take a moment to catch up with me.

Add in your bone, place it into position and see if you can remember how to make it visible.

Pause the video and have a go that.

Well, of course we could come up to x ray mode and we can see our bone there.

But I can also come down to this stickman here.

The object data properties.

Viewport display.

Scroll down a bit and in front that way my bone will always be in front.

So I'll zoom in just a touch and then go to edit mode with tab to start adding new bones and create

our skeleton.

So first of all, with the end selected, I press g then said to move that down to around this point

here so our legs can come off this bone then e to extrude upwards and I'll constrain it to the z axis

to keep it nice and central.

And from this point, I want to extrude upwards just to the base of our shoulders here, again, constraining

to the Z axis, and then have one more above that up to the neck.

So this is going to be our shoulder connection.

So when I rotate this bone here, the arms will move as well because it always connects it to the base

of a bone and will be influenced by the bone before that one.

That will all make sense in a second.

I'll do one more extrusion for the neck again constrained to the z axis up to here and one more extrusion

for the head, which is our TV.

So I've got one, two, three, four bones for the body, one for the neck and one for the head.

I'll just come across the side view and make sure they are right in the center of our body.

It's not like a spine where it would be at the back.

Generally with animation, you keep the bones in the middle of your objects, especially if you're a

beginner.

Okay, so pause video here and catch up with me creating the central line of our skeleton.

Okay.

So now we need an arm coming down here.

So if I select this one and press shift DX to duplicate and come across here, that could be the start

of our arm.

And as you can see, it's got a dotted black line.

So it's connected to this one here and therefore will rotate when this one does.

But I'll undo that because that's far too easy.

I'll select this one here as if I've made a mistake and shift to duplicate and bring it up to here.

So it's a challenge to you.

I want you to disconnect this bone from the main spine and reconnect it with this bone here.

Pause the video and have a go at that.

Okay.

So with that being selected, I press LP to clear parent and I want to connect it up to this phone here

so I'll select that one last and control P keep offset so that is now the parent bone for the shoulder.

So if I go into post mode control tab to pose mode and rotate this round, it moves my arm with it.

Let's go back to front view and back to edit mode and now I can start moving this arm into position.

So let's select the end to grab and move it across to the shoulder here.

And I start off moving it to the back of the elbow to make sure I am on the elbow that looks good and

back to side view and then e to extrude down to the wrist and g then y to make sure it is on the wrist

and I'll bring the elbow back to the middle now.

Now I know it lines up with the elbow, making sure it's constrained to the Y axis.

And let's have a look at the wrist joint.

Maybe it needs to come back just a touch, so g to move it back to there and E to extrude once again

out to the end here.

And that looks about right back to side view and the arm seems to be working there.

Okay, so possibly don't catch it with me completing the arm.

Okay.

Now, there's a very slight issue here.

Can you see how these bones are kind of twisted around?

If I press in on my keyboard and go to item, you can see there's a roll option.

Can you see if I rotate that?

It makes a difference to the bones role now.

It won't affect things massively, and you probably won't even notice it as a beginner.

But if I go to Poe's mode now and I need to go back to my medium point and press R then X twice to get

the local x axis, can you see how the local x axis is in line with that role?

If I change the role, so back to edit mode and change the roll around to there and then back to pose

mode and press r then x twice you can see it's going inwards like this.

I'll show you from front view.

So R then X twice is sort of going across a little bit as well.

Now again, it doesn't matter too much, but I'm just explaining what bone roll is and how that can

make a slight difference to good quality rigging and animation.

It is better to have these bones aligned so you know where the local axis is, but as a beginner you

hardly notice the difference.

So I'll clear that rotation.

So alt r and go back to edit mode.

So ideally you want this to be flat facing the front so I can change the roll and it looks like mine

is set at 220.

Yours might be slightly different depending on how you've edited it and I need to do that all the way

down and they should be roughly the same around to 20 to be pointing towards us like this.

I'll just go to front view and that's about right now.

Now I could have gone all the way backwards to here and that would change the local rotation.

Again, that won't matter too much to us at this level, just as long as they're all pointed towards

us.

And ideally they'll all have the same number there.

So one isn't twisted 90 degrees round, so hopefully that makes sense.

Don't panic if it doesn't too much because that will come as you become more experienced at animation.

But for now, just in edit mode, select your bones.

Remember to press end to get this menu into item and just change the roll so it is facing us and your

number might be slightly different from mine.

Again, that won't matter too much.

The axis might be just slightly different.

Pause the video and have a go that.

Okay.

So lastly, I want to create a leg.

So I'll select all these shift duplicates and move this down and rotate it around.

Remember, I've changed my pivot point to medium point.

So if it's rotating around your 3D cursor, that's why I'll scale it down.

Just a touch, move it into position and bring this one down to the ground somewhere around here and

line them up with the knees and so forth.

And from side view, I'll just push up the slightly towards the middle more, but follow in the line

of the leg, perhaps just adjust the roll very slightly to make sure they're relatively flat.

And again, I'm on roughly to 70.

This one's very slightly out, but again, it won't make much difference, and I'll leave it like that

just to prove it doesn't.

So pause the video and catch it with me creating your leg and there's a challenge to you.

I want you to parent it to the base bone of the spine, so you'll need to disconnect it from where it

is at the moment and reconnect it.

Pause the video and have a go at that.

So you should be used to this by now.

So alt p to clear the parent and select the base bone control p keep offset.

Okay, now we want these to be on the other side and there's a really great command where we can mirror

these from one side to another.

But in order for that to work, you must have your bones labeled to label a bone.

You can select it and press F two and I'll call this spine one or let's go to Spine two.

You can come to the bone properties here.

So slightly different from the armature properties there.

The bone properties are here and you can come to here and this would be spine too.

So I'll quickly name it my middle spine bones and I'll speed this up a touch and I'll name the top two

neck and head.

Now for the legs and arms.

The naming conventions are important, so I'll select the top of the leg and I'll call this thigh and

then underscore left because that's the character's left hand side.

So that's an L just there and press enter blender will recognize this underscore L and these naming

conventions listed on the screen now taken from the blender manual.

And it will enable it to mirror it to the other side.

And we'll be able to do some mirror editing as well, which is very useful.

So I'll continue naming these and this will be carve underscore L.

And first underscore ill and I'll quickly name the arm in the same way.

And remember you can press F two to quickly get to the naming menu.

So pause the video and catch up with me.

Renaming the bones in your armature.

Remember to use the underscore l command for the arm and legs.

So now I can select my arm and leg bones and right click and there is a symmetries option and it jumps

the other side.

And notice that let's say I select this bone up here we have an underscore R four, right?

So Blender has done that for us and that is all around the object origin which is right in the center

there.

Hence why it's important that you have that origin point down the middle along the Z axis and it can

be anywhere along the Z axis.

So just have a quick look and make sure all my skeletons in the right place and that's looking great.

So I want you to catch up with me symmetry using your arm and leg and of course make sure that each

of your names have transferred across if for any reason one doesn't.

It's probably because the naming convention underscore L was missing.

Once you've done that, save your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Building the Armature |
| **Thời lượng** | 9:44 |
| **Chủ đề chính** | Tạo bộ xương Armature |

## 1. Mục tiêu bài học

- Xây dựng một Armature hoàn chỉnh khớp với cấu trúc cơ thể của Blob Man.
- Biết cách dùng X-Ray và Symmetrize để dựng bone đối xứng nhanh hơn.
- Nắm được cách đặt tên bone theo quy ước (ví dụ .L/.R) để hỗ trợ Symmetrize và Mirror animation.
- Hiểu cấu trúc phân cấp (hierarchy) hợp lý cho một rig nhân vật cơ bản: root, spine, head, arms, legs.

## 2. Nội dung chính

Xây dựng Armature cho nhân vật là quá trình đặt các bone vào đúng vị trí giải phẫu tương ứng với mesh, tạo thành một hệ thống phân cấp logic. Với một nhân vật cơ bản như Blob Man, cấu trúc bone tối thiểu thường gồm: một bone gốc (root) hoặc hip, một chuỗi spine (cột sống) đi lên đến bone head, và hai chuỗi bone cho mỗi tay (upper arm, forearm, hand) và mỗi chân (thigh, shin, foot).

Để dựng nhanh và chính xác, nên bật chế độ hiển thị X-Ray (hoặc In Front) để nhìn xuyên qua mesh khi đặt bone ở Edit Mode, giúp căn chỉnh bone khớp chính xác vào bên trong hình dạng cơ thể. Một kỹ thuật tiết kiệm thời gian phổ biến là chỉ dựng bone cho một bên cơ thể (ví dụ tay trái, chân trái) với tên đặt theo quy ước hậu tố `.L`, sau đó dùng chức năng Symmetrize (Armature > Symmetrize trong Edit Mode) để tự động tạo bone đối xứng bên còn lại với hậu tố `.R` tương ứng — Blender tự nhận diện và đổi tên đúng quy ước.

Việc đặt tên bone rõ ràng và nhất quán (ví dụ `upper_arm.L`, `forearm.L`, `hand.L`) không chỉ giúp quản lý rig dễ dàng mà còn là điều kiện cần để các công cụ như Symmetrize, Copy Pose, hay Mirror animation trong Pose Mode hoạt động đúng. Quan hệ cha-con giữa các bone (thiết lập bằng cách extrude nối tiếp, hoặc Parent thủ công trong Edit Mode với Ctrl+P) quyết định cách chuyển động lan truyền: xoay bone cha (ví dụ upper_arm) sẽ kéo theo toàn bộ chuỗi con (forearm, hand) chuyển động theo.

## 3. Quy trình thực hành gợi ý

1. Thêm Armature mới, bật chế độ hiển thị X-Ray/In Front để nhìn xuyên mesh.
2. Vào Edit Mode, di chuyển bone đầu tiên vào vị trí hông/root, kéo dài lên tạo chuỗi spine đến đầu.
3. Từ vị trí vai trên spine, extrude tạo chuỗi bone tay trái: upper_arm.L, forearm.L, hand.L.
4. Từ vị trí hông, extrude tạo chuỗi bone chân trái: thigh.L, shin.L, foot.L.
5. Chọn toàn bộ bone bên trái, dùng Armature > Symmetrize để tự động tạo bone đối xứng bên phải.
6. Kiểm tra lại tên bone (hậu tố .L/.R đúng), điều chỉnh vị trí Head/Tail từng bone khớp sát với hình dạng mesh.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| `Shift+A` | Add > Armature |
| Bật "In Front" (Object Properties > Viewport Display) | Nhìn xuyên mesh để căn bone chính xác |
| `E` | Extrude tạo bone con nối tiếp |
| `Ctrl+P` (Edit Mode Armature) | Parent bone đã chọn vào bone khác (Connected/Keep Offset) |
| Armature menu > Symmetrize | Tự động tạo bone đối xứng theo tên .L/.R |
| `F2` hoặc double-click trong Outliner | Đổi tên bone |

## 5. Lưu ý & lỗi thường gặp

- Không đặt tên bone theo đúng quy ước `.L`/`.R` khiến Symmetrize không nhận diện đúng cặp đối xứng.
- Đặt bone không khớp sát vào bên trong mesh (do không bật X-Ray) khiến rig trông lệch khi Weight Paint.
- Quên thiết lập quan hệ cha-con hợp lý (ví dụ hand không parent vào forearm) khiến chuyển động không lan truyền đúng.
- Dựng quá nhiều bone không cần thiết cho một nhân vật đơn giản như Blob Man, làm tăng độ phức tạp không cần thiết khi Weight Paint.

## 6. Checklist thực hành

- [ ] Đã dựng chuỗi spine từ root đến head.
- [ ] Đã dựng chuỗi bone cho một bên tay và một bên chân.
- [ ] Đã dùng Symmetrize để tạo bone đối xứng bên còn lại.
- [ ] Đã kiểm tra và đặt tên bone đúng quy ước .L/.R.
- [ ] Đã căn chỉnh vị trí bone khớp sát với hình dạng mesh Blob Man.

## 7. Tóm tắt

Building the Armature là bước dựng bộ xương hoàn chỉnh cho nhân vật, với cấu trúc phân cấp hợp lý và tên bone theo quy ước .L/.R để tận dụng Symmetrize. Đây là nền tảng trực tiếp cho các bước IK, Parenting và Weight Painting tiếp theo.
