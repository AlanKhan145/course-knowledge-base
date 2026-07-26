# 066 — Preparing for Animation
Okay.

So here's where we got up to last time.

And before doing anything, I just want to bring back my gizmos so you can see my Cartesian coordinates

at the top there and bring back my overlays so you can see what I've selected and my grid floor and

so on.

Now, before preparing the plane for animation, I just want to select the cockpit.

I'll just press shift, right click to move the 3D cursor so we can see that easily.

And I don't feel it's dark enough, so I'm just going to change the color so it's darker and I think

that looks a lot better.

Also, one other thing that I wanted to point out is that if I select Propeller and just zoom in on

that, if I go to edit mode now and let's say try and select a face, we can't really see it.

Of course we could go to x ray mode like we were before and then I can see those faces.

That's fine, but at this point it's nice to have x ray mode off because we're in material preview mode

so we can see our texture is a bit easier.

Well in the modifier.

So under the spanner and my solidifying modifier here, we've currently got an offset to the center.

So if I bring that to the back like this, so minus one, we can then see our faces or I could bring

it to the front and we can see the faces on the back.

But if you have the offset in the middle, so it's coming out of both sides, you can use this button

called on cage.

If I press that, it kind of shows you the results of the modifier as if you had applied it.

So I can select a face here.

It does select all those faces because that one face with the modifier makes up all those other faces.

So I can select areas in here if I need to.

And if I select this top face and let's have a quick look at our Spitfire texture once again, the propellers

actually have this yellowy color on the tip.

So it is a challenge to you.

I want you to add a yellow color to the tip of the propeller.

Now, you could do this by unwrapping it and trying to map it to the plane, but the much easier way

is with material slots.

So pause the video and have a go at that.

So hopefully remember that slots are at the top here and with my object selected in edit mode and with

that face selected I can go to the slots, add a new slot, assign that face to it.

It immediately turns white because there's no texture in slot two yet.

So let's add a texture.

I'll call this yellow and change the color to a yellow color.

Let's see what that looks like.

It's not too bad, but it's not quite matching the yellow here.

If I click on the base color and choose the pipette or the eyedropper as it's known, I can then pick

a color from my reference image and you can see that that's now matching much more closely.

Let's go back to object mode and see how that looks and I think that looks great.

So hopefully going okay with that.

Now let's think about preparing our plane for animation.

Now, currently it's lots of separate objects.

As you can see there.

So when animating, I would need to select all the objects and move them around.

It's actually a lot simpler to attach these objects or parent, as we call it, to one single object

called An Empty.

I'll show you what that means.

I'll go to Side View with three and just move to the middle shift eight to add and there's empty in

the middle there.

So I'll choose plane axis.

It doesn't matter what you choose because they all serve the same function.

They just look a bit different in case you needed them to look different so you can identify them.

So I use a plane axis.

I'll move that into the middle here and let's go to front view and make sure it's right in the center

of my plane.

So just there looks good.

Incidentally, that's actually right in the middle of the grid, so I may as well press in on my toolbars,

go to item and click and drag over all my location and press zero to make sure that's right in the center

like that.

I'll press enter, get rid of that panel.

It helps if it's in the center of your plane just for the sake of rotation, especially when it comes

to front view and you want to rotate or bank the plane.

So pause the video here and add an empty and make sure it's roughly in the middle of your plane.

Okay.

So now I want to parent.

So attach these objects to my empty.

Before I do that, it would be a good idea to start labeling things.

So I'm just going to bring down the outline.

Start with the empty and I'll call that plane controller and I'll just go through labeling each object.

And for the sake of speed, I'll speed the footage up and I'll put the whole plane into a collection.

So m to move to new collection.

New collection and plane that will make a difference when we start bringing other objects into our animation.

Now with them all selected, I need my empty to be the active object.

Currently it's the main part of my propeller just at the front there, so I need to shift select my

plane controller.

So that's now the active object and then I can go up to the object menu.

So at the front of my panel at the top object and under parent, I can choose object.

So now if I select my controller on its own and press g to grab it moves all the objects together.

I'll right click to cancel that.

Also, if I go to the side here and press r then y I can also bank my plane like this as well.

Now the interesting thing about using a parent system like this is that I can still move the children.

So the things that are attached to the parent object, I can still move them independently.

So I could still move the propeller over here, for example.

And when I go back to the plane controller, I can still move that around.

I'll undo those steps.

So pause the video here and parent your objects to the empty.

The useful thing about parenting like this is I can change the position of any of these objects, but

they'll still be affected by our main controller.

And in fact, I'm noticing that my propeller is in the middle of this sort of main propeller object

at the front, whereas it should be at the back here.

So I'll just go to side view, zoom in and G to grab in the Y and move those backwards to there.

And also this spitfire has a black at the front.

So I'm going to change that to a dark metallic color somewhere around here.

I think that looks a bit better now.

The fact that I can move these objects independently means I can also rotate these around the Y, but

there's still move with the main controller.

But once again, these are separate objects.

So it's a little bit tricky.

I have to keep selecting them separately and then deselect the plane and rotate them if I want to animate

them or change any of the animation.

So we could have a controller for the front of the plane as well.

And that's the great thing about this parenting system.

I compare it these to a plane controller and then parent the parent controller to the main plane controller.

So to position my controller in the right place, let's select this object here and have a quick look.

That's right in the center, but it's not quite right in the center of the grid.

In the Z axis, you can see the Y is slightly above the middle of my propeller.

However, these are nicely positioned in relation to the main body of my propeller.

So they'll rotate nicely around that.

So if I select that main body there and shift s to move my cursor to select it so it's in the middle

there, I can now press shift data add and add a new empty.

Let's choose a different one this time and maybe we'll choose circle and I'll scale it down slightly.

So our propeller controller is in the right position.

Now, a quick challenge to you then is to set up the propeller so it's parented to the propeller controller,

pause the video and have a go at that.

So I select all these objects and select the propeller controller at last.

So that new empty that I've created there and we can go to the object menu and parent or we can press

control P for the shortcut and there's object there.

So now when I select the controller and press r, then y I can rotate my propeller around like this.

I'll undo that movement and I just rename this propeller controller and I'll move that into the plane

collection.

So pause the video here and catch it with me selecting your propeller objects and parenting them to

the propeller controller.

Now it's worth noting that the plane controller has a dropdown arrow and it has the cockpit and the

plane body in it, and the propeller controller has a dropdown arrow and it's got all the propeller

components within it.

Now, if I move my plane controller, notice that it's only moving the plane and the cockpit now.

So you can see this parent relationship here.

We've got the plane body and I haven't renamed my cockpit, so let's just rename that quickly.

So when I added the propeller objects to the propeller controller, it undid the parent to the plane

controller, and now they're only attached to the propeller controller.

But I want these to move when my main plane controller moves so I can select this one, the propeller

controller shift, select the plane controller and control P and parent both those.

So now we have a situation where I can move the plane controller and it moves everything, but I can

use my propeller controller so ah then y to control the propellers.

A good analogy for this is that you have a mother with a baby inside her.

So when the mother moves, the baby moves, but the baby can still move independently of the mum.

So if I rotate this in the Y and then move this up, it's like the baby's moved around inside the mum,

but it still goes wherever the mother goes, so I'll undo those too.

It obviously gets very odd when you think about a baby inside a baby inside a baby.

But that is possible with parenting using this method.

So pause the video and catch it with me making sure that your propeller controller is parented to your

main plane controller.

And once you've done that, make sure you've saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Preparing for Animation |
| **Thời lượng** | 9:16 |
| **Chủ đề chính** | Chuẩn bị controller cho animation |

## 1. Mục tiêu bài học
- Hiểu vì sao cần thiết lập "controller" (thường là Empty) trước khi keyframe animation trực tiếp trên mesh.
- Biết cách đặt Origin đúng vị trí cho từng bộ phận chuyển động (ví dụ propeller cần Origin tại tâm quay).
- Sử dụng Parenting để liên kết các object con (propeller, bánh đáp...) với controller hoặc với thân máy bay.
- Tổ chức Outliner/Collection hợp lý để quản lý rig đơn giản của máy bay.

## 2. Nội dung chính
Trước khi tạo keyframe, việc chuẩn bị đúng cấu trúc object là bước quan trọng để animation sau này dễ kiểm soát và chỉnh sửa. Với một dự án như máy bay bay lượn, thường cần:

- **Một Empty gốc làm controller chính** cho toàn bộ máy bay: thay vì keyframe trực tiếp lên mesh máy bay, ta parent mesh vào một Empty, rồi animate Empty đó. Cách này giúp tách biệt animation logic khỏi dữ liệu mesh, dễ chỉnh sửa transform tổng thể mà không ảnh hưởng đến pivot gốc của mesh.
- **Origin chính xác cho từng bộ phận:** propeller cần Origin đặt đúng tâm trục quay (dùng `Object → Set Origin → Origin to 3D Cursor` sau khi đặt 3D Cursor vào tâm propeller) để khi keyframe rotation, nó quay quanh đúng trục thay vì lệch tâm.
- **Parenting (`Ctrl+P`):** propeller được parent vào thân máy bay (hoặc vào một Empty riêng làm trục quay), bánh đáp/các chi tiết chuyển động khác cũng parent tương ứng, đảm bảo khi Empty controller chính di chuyển, toàn bộ cấu trúc con di chuyển theo.

Việc đặt tên rõ ràng cho các object controller (ví dụ "CTRL_Plane", "CTRL_Propeller") và tổ chức chúng trong Outliner giúp việc keyframe ở bài tiếp theo mạch lạc hơn, đặc biệt khi cần chọn đúng object để thao tác trong Graph Editor hoặc Timeline.

## 3. Quy trình thực hành gợi ý
1. Đặt 3D Cursor vào vị trí mong muốn (ví dụ tâm propeller) bằng Snap (`Shift+S`).
2. Chọn object propeller, dùng `Object → Set Origin → Origin to 3D Cursor` để đưa Origin về đúng tâm quay.
3. Thêm một Empty (`Shift+A → Empty → Plain Axes`) tại vị trí phù hợp làm controller chính cho toàn bộ máy bay.
4. Chọn toàn bộ mesh máy bay, Shift+chọn Empty cuối cùng, `Ctrl+P → Object (Keep Transform)` để parent vào Empty.
5. Với propeller, parent riêng vào thân (hoặc một Empty phụ) để nó có thể quay độc lập quanh trục của chính nó.
6. Kiểm tra bằng cách xoay/di chuyển thử Empty controller, xác nhận toàn bộ máy bay di chuyển theo đúng như một khối thống nhất, còn propeller vẫn quay đúng tâm khi test riêng.
7. Đặt tên và tổ chức lại Outliner cho các controller vừa tạo.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+S` | Snap menu (đưa 3D Cursor tới điểm mong muốn) |
| `Object → Set Origin → Origin to 3D Cursor` | Đặt lại Origin của object |
| `Shift+A → Empty` | Thêm Empty làm controller |
| `Ctrl+P` | Parent object đã chọn vào object cuối cùng (active) |
| `Alt+P` | Clear Parent (gỡ liên kết cha-con) |

## 5. Lưu ý & lỗi thường gặp
- Quên đặt lại Origin cho propeller trước khi parent/keyframe khiến nó quay lệch tâm thay vì quay tại chỗ.
- Parent theo thứ tự chọn sai (object cần làm "con" phải được chọn trước, object "cha"/Empty chọn sau cùng làm active) khiến quan hệ cha-con bị đảo ngược.
- Dùng `Ctrl+P → Object` thay vì `Object (Keep Transform)` có thể làm object bị nhảy vị trí đột ngột nếu Origin của cha không trùng gốc tọa độ.
- Không tổ chức tên rõ ràng cho các Empty controller gây nhầm lẫn khi có nhiều Empty trong scene ở bước animate.

## 6. Checklist thực hành
- [ ] Đã đặt Origin đúng tâm quay cho propeller.
- [ ] Đã tạo Empty controller chính và parent toàn bộ máy bay vào đó.
- [ ] Đã parent propeller riêng để có thể quay độc lập.
- [ ] Đã kiểm tra thử chuyển động của controller trước khi keyframe thật.

## 7. Tóm tắt
Bài học thiết lập cấu trúc controller (Empty, Origin, Parenting) làm nền tảng kỹ thuật cho animation, đảm bảo các bộ phận của máy bay (đặc biệt là propeller) chuyển động đúng như mong đợi trước khi bắt đầu keyframe thực tế ở bài tiếp theo.
