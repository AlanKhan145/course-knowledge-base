# 076 — Bone Basics
In this lecture, I'll be going through the basics of bones and we'll be setting up a snake for animation.

So I'm in a new start up file and I'm going to use my default cube as the basis for my snake.

I'll come to front view with one on my numpad and zoom out a touch and scale the snake in the x axis.

So it's four metres long, roughly somewhere around there.

So one, two, three, four meters.

And that's what our snake looks like at the moment.

Now, if I go into edit mode, you can see the vertices of my object there.

And if I try and add some bones to this to animate it now, it wouldn't work because we haven't got

enough topology to deform.

Let's say I try and take these ends and rotate them and move them.

It can't bend because there's no extra vertices.

So I'll undo that and I'll add some loop cuts going across the middle.

So control R use the wheel of my mouse to somewhere around there, which looks roughly around ten and

left click twice to set them in place.

So we've got lots of cuts across there.

I can come to my dialog box here and show you that it's actually ten.

If you want to follow along precisely with me, it won't make too much difference if you have nine or

11, but you can type in ten here to have the same as me.

I'll minimize that and we'll come back into object mode.

So pause the video here and catch it with me.

Scale your cube in the x axis and then do lots of loop cuts.

So we've got some points to animate.

Now I want to show you a useful modifier here for adding and smoothing out topology.

If we go across to spanner or wrench here and add modifier, it's the subdivision surface modifier.

So if I click on that, you can see instantly that it becomes a bit more smooth.

And if I zoom in a bit, you can see that it's added some more topology and in fact it's divided every

face into for if I go into edit mode, that will show what it looks like before the result.

So there's our original mesh and the subdivision service modifier is dividing it up and giving it more

faces, which is great because the more faces we have, the better the distortion in our movement,

which I'll show you in a moment when we add the bones.

So pause the video here and add in a subdivision surface modifier to your object.

So I'll come out to edit mode back into object mode and we need to add some bones to our snake in order

to move those vertices.

So I come to front view once again and I'll press shift eight and and the bones are called an armature.

So an armature is made up with one or more bones.

So I click on that and that adds a bone into the middle, but we can't see it very well.

That's because it's behind our snake.

So if I come to the object data properties here where we've got this funny sort of stickman and go to

viewport display, if I scroll down a bit, there's an option in front.

If I tick on that, you will always see the bone in front of the object wherever I move to.

So that's very useful.

I'll go back to front view and zoom out to touch.

Now Bones have three modes.

If we come up to here, we've got object mode, edit mode and pose mode.

Edit mode is what we use for creating the skeleton.

So the shape of the armature and pose mode is what we use for animating it.

So we always build our skeletons in edit mode.

So I'll go to edit mode.

I'll zoom into our bone once again, just to show you that you can now select the base, the middle

to the middle selects the whole bone or the end.

So if I select the base and press g to grab it will move the base and make the bone longer and the same

for the end there.

Whereas the middle I can move the whole bone like this.

So I'll zoom out and with the whole bone selected our press g to grab and move it somewhere to the front

here.

It doesn't have to be to the very front.

This bone will affect all this area.

Here I'll select the end and just extend it slightly.

So it's covering about three blender units there in the same way as modeling.

I can have the end selected and press E to extrude and I can constraint the x axis and bring it out

so it's the same length.

Okay, so pause the video here and catch up with me inserting a bone and going into edit mode and placing

it at the front and then extruding from the end to create a new bone.

And I want you to create a few more bones until you get to the middle point here and make them roughly

even pause video and have a go that.

Okay.

So I'll extrude in the x axis once again to here and just keep doing that all the way along until I

get to the middle.

Now, this end one is a bit longer than the others, so I can easily just come into these points and

g to grab in the x and just even it out a little bit.

Unfortunately, there's no command for distribute like there might be in something like Photoshop or

something along those lines.

So we would have to go by the grid lines.

It's not important if they're slightly different sizes, it won't make too much difference to our animation.

Okay, so just take a moment to even out your bones a little bit if you haven't already.

Okay.

So we go to the middle and I can actually select all my bones and do remember I am still in the edit

mode at this point.

So you're always editing the shape of your armature in edit mode and I'm going to press shift duplicate

in the x axis and bring them across to the end here.

Now we've actually got two sets of bones within our armature, so these bones over here are joined together.

If I press G to grab on this joint here, you can see it moves both the bones.

We can join those together.

But before we do that, I want to show you Poe's mode and how them not being connected would cause us

a problem.

So I'll go across to Poe's mode and when I select the bones they turn blue now indicating that they're

in pose mode and there is a parenting system going on.

This one is parented to this one, which is parenting this one all the way down to the end.

So if I press r to rotate on this one, it rotates the end one as well.

So it's a bit like a shoulder joint and then a forearm joint, for example.

I can then rotate this one independently.

So this would be an elbow, for example.

And that is the reason we need these ones joint these ones, because we would want to rotate this one

and have them all rotate.

So I'll undo those movements and go back to edit mode in order to connect to this bone.

To this bone, we select this bone first.

So that's the one we want to connect and then the one we want to connect to last.

So that is the active object highlighted in yellow and as usual we press control p to parent.

Now there's an option here to keep offset that would actually connect them but keep them a distance

apart.

Whereas connected.

If I press that you'll see it actually moves and joins together.

So now when I go into Poe's mode and rotate this one, you'll see it rotates all the other ones along

the line.

So I'll go back into edit mode and I want you to catch it with me duplicating your beginning section

of bones and move them to the end and then join the middle two together with control.

P to parent remember you're selecting connected pause the video and have a go at that.

Now lastly, I'll show you that you can select a random bone and shift DX to duplicate and can you see

the black dotted line?

If I zoom in a bit closer there, that's to show that they are connected with an offset.

So remember the control p command and there was keep offset.

That would be an offset if I go to Poe's mode now and let's say rotate this one here to rotate, can

you see how it's still affected this one here because they are connected with an offset.

So that's the idea behind an offset.

So I'll go back into edit mode, select this bone and press delete to delete the bones.

Okay.

So in the next video we'll talk about animating our snake.

So make sure you save your work here.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Bone Basics |
| **Thời lượng** | 7:06 |
| **Chủ đề chính** | Kiến thức cơ bản về bone |

## 1. Mục tiêu bài học

- Hiểu bone (xương) là gì trong Blender và vai trò của nó trong hệ thống rigging.
- Biết cách thêm một Armature/bone mới vào scene.
- Nắm được cấu trúc của một bone: Head, Tail, Roll.
- Phân biệt các chế độ làm việc với Armature: Object Mode, Edit Mode, Pose Mode.

## 2. Nội dung chính

Bone là đơn vị cơ bản cấu tạo nên một Armature — bộ khung xương dùng để điều khiển biến dạng của mesh trong quá trình animate. Mỗi bone có hình dạng kim tự tháp thon dài, gồm hai điểm chính: Head (gốc, đầu rộng) và Tail (đỉnh, đầu nhọn). Bone thường được nối tiếp nhau thành chuỗi (chain) mô phỏng cấu trúc xương thật, ví dụ chuỗi xương tay gồm upper arm, forearm, hand.

Armature có ba chế độ làm việc chính, tương tự như mesh: Object Mode (di chuyển/scale cả Armature như một object), Edit Mode (chỉnh cấu trúc bone — thêm, xóa, nối, đổi tên bone, giống chỉnh mesh ở Edit Mode) và Pose Mode (xoay/di chuyển bone để tạo dáng và animate — đây là chế độ dùng để animate nhân vật, tương tự việc điều khiển con rối). Chuyển sang Pose Mode bằng Ctrl+Tab hoặc chọn từ dropdown chế độ.

Một khái niệm quan trọng khác là Roll — góc xoay của bone quanh trục dọc của chính nó, quyết định hướng "lên/xuống local" của bone, ảnh hưởng đến cách các constraint và IK hoạt động sau này. Bone cũng có quan hệ cha-con (parent-child) trong hệ thống phân cấp (bone hierarchy), thể hiện qua Bone Constraint Properties và Armature outliner — bone con sẽ di chuyển theo bone cha khi bone cha được xoay/di chuyển.

## 3. Quy trình thực hành gợi ý

1. Thêm một Armature mới qua Add > Armature (mặc định là một bone đơn).
2. Vào Edit Mode của Armature (Tab), quan sát Head và Tail của bone.
3. Kéo dài Tail bằng cách chọn và di chuyển (G) để tạo bone dài hơn.
4. Thử extrude (E) từ Tail của bone đầu tiên để tạo bone thứ hai nối tiếp.
5. Chuyển sang Pose Mode (Ctrl+Tab), thử xoay (R) bone để quan sát cách nó biến dạng khung xương.
6. Quay lại Object Mode, kiểm tra Armature hiển thị đúng trong Outliner.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Shift+A` | Add > Armature (thêm bone mới) |
| `Tab` | Chuyển giữa Object Mode và Edit Mode của Armature |
| `Ctrl+Tab` | Chuyển nhanh sang Pose Mode |
| `E` | Extrude — kéo dài chuỗi bone từ Tail |
| `G` / `R` / `S` | Move / Rotate / Scale bone (Edit Mode hoặc Pose Mode) |
| `N` | Mở sidebar xem thông tin bone (Roll, Length...) |

## 5. Lưu ý & lỗi thường gặp

- Nhầm lẫn giữa Edit Mode (chỉnh cấu trúc xương) và Pose Mode (tạo dáng/animate) — thao tác nhầm mode dễ làm hỏng rig.
- Không đặt tên bone rõ ràng (ví dụ Bone.001, Bone.002) khiến việc quản lý rig phức tạp về sau khó khăn.
- Quên rằng xoay bone ở Object Mode sẽ xoay toàn bộ Armature, không phải một bone riêng lẻ.
- Bỏ qua Roll của bone khiến hướng xoay không tự nhiên khi thiết lập IK hoặc constraint sau này.

## 6. Checklist thực hành

- [ ] Đã thêm một Armature mới vào scene.
- [ ] Đã hiểu và xác định được Head, Tail của bone.
- [ ] Đã thử extrude để tạo chuỗi nhiều bone.
- [ ] Đã chuyển qua lại giữa Object Mode, Edit Mode, Pose Mode.
- [ ] Đã đổi tên ít nhất một bone cho dễ quản lý.

## 7. Tóm tắt

Bone là thành phần cốt lõi của Armature, được chỉnh cấu trúc ở Edit Mode và animate ở Pose Mode. Hiểu rõ Head/Tail/Roll và ba chế độ làm việc là nền tảng bắt buộc trước khi xây dựng rig phức tạp hơn cho nhân vật.
