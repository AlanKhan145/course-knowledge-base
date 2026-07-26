# 077 — Animating Bones
In this lecture, we'll be animating our snake and I'll talk a little bit about weights.

Okay, so here's where we got up to last time and before parenting our snake to the bones, it's a good

idea to just check a couple of things.

First of all, I'm in edit mode with my bone still, so I'll just go to object mode.

And the first thing to check is that your bones are sitting nicely inside your object.

So they're not, for example, off to the side here or something strange like that, which from front

view would look like they're working.

So I'll just undo that.

The other thing that's worth doing, although it shouldn't make too much difference, but I always find

it's a good idea to select both of your objects and press control A and apply the rotation and the scale.

That way when I click on these objects, press end to go to my toolbar and go to item, we've got zero

on the rotation and one on the scale.

Now I've also got zero on the location.

That means they are right in the center of the grid and if I click on my bones, they've got that as

well.

That's always a good idea to set up as well to make sure it's right in the center.

I can't just press control A and apply the location because let's say this was off to the side like

this and I press control a and apply the location that set it to zero.

But it's not actually in the center.

All it's done is move the object origin to the center and my object is still over here, so I'll undo

that.

What we need to do is make sure that the object origin is in the center of the object and that object

origin is in the middle of the world.

So instead, if I've moved this out to this position here, I can actually press out g to remove any

of the movement and that will set the object origin back to the center of the world.

If for any reason the object origin is not in the center of your object, remember you can press right

click set origin and origin to geometry that will move it into the middle of the geometry.

And then you can press alt g to clear the location and move it to the center of the world.

Now, all this shouldn't actually make too much difference to our very simple snake here, but it can

make a difference when we're coming to do more complex things like characters later on.

So don't worry if it's not completely making sense, we will revisit these things later on.

So just pause the video here and double check that both your objects, the bones and the snake have

no rotation and a scale of one, and that the object origin is in the middle of the grid and in the

middle of your object.

Pause the video and make sure that.

Okay.

Now I need to parent my snake to the bones.

So the bones we need as the active object.

And they will be the parent and the snake object will be the child.

So I select the snake object first and then the bone's second to make them the active object and control

P to parent.

Now you get a slightly more complicated menu.

This time the easiest one is with automatic weights.

So I'll click on that and I'll show you what that does.

If I select my bones now and then go across to post mode, it should be the case that I can go into

my bones and press, let's say R, then y and rotate the bone and you can see it deforming like this.

I'll grab this one and press r to rotate around the y axis and again it deforms like so to remove the

pose I've created.

I can select everything and press alt r and press enter to remove any rotation.

So I'm back to where I started and I'm going to go back to object mode and choose my snake now and go

into white painting.

Now what this is showing me is the amount of influence a certain bone will have on my shape.

So we are seeing the influence of this end bone here.

I'll zoom in a touch on that and you can see that the end section here is all red.

That means this end section and the vertices are only affected by this one bone.

Here it slowly goes towards blue through the yellow and green colors.

And that means these vertices here are partially affected by this one, but partially affected by another

bone, which will end up being this one here.

So if I go back into object mode and incidentally, I can press control tab and use the pie menu for

that, it's a little bit faster cheese, my bones and control tab to go into post mode because there's

only three modes I can either press a tab to go into edit mode and control tab now will give me the

pie menu because there's two options.

But anyway, we're in pose mode and if I rotate this bone so r then y you can see the area that was

painted red is fully influenced by that bone and the areas that we're going towards blue in color are

over here being influenced slightly by this bone, but this area is also being influenced by this bone

here.

It does create a bit of a dent here and what's sometimes known as pinching where this area is kind of

pinched together.

And that's a common problem when you are rigging characters, especially ones that are more low poly

than others.

So this shape is relatively low poly compared to some, and we could have less pinching by having more

topology and also more bones.

So there was a smoother transition rather than this harsh angle of these two bones.

But for now, we're not too worried about that.

We're just getting used to the idea of animating objects with bones.

So I'll undo those steps and just zoom out so we can see our object.

And I want you to pause the video here, catch it with me and parent your snake to your bones.

Pause the video and have a go at that.

Okay.

So let's start animating our snake.

I'll go across to the animation workspace and I'll just come round to the front here.

For the moment.

I don't need my camera view.

I can set that up later, but because my snake's quite long, it will be useful to have this whole area

here with the 3D viewport.

So I'll come up to the top and drag across.

Also, I bring my dope sheet up just a touch and remember we've got the timeline down the bottom here.

I'll go to front view and zoom out just a little bit.

So let's together create an animation where the snake moves upwards into an SX type position.

So this position is fine for a starting point.

Now I'm in pose mode and generally speaking you'll set up most of your animations in pose mode.

Now if I go to object mode with Control Tab, I can still press G to grab and animate the movement of

the entire object in object mode, and that does have its place.

Let's say you set up a walk cycle and a run cycle for a character that would all be set up in pose mode

and it would run and walk on the spot and you would animate the whole entire object to move around your

scene in object mode.

And that's generally the kind of system that games will use.

But if we want to move and adjust the shape of our snake, then we will do all that within pose mode.

So I'll go across to pose mode and this is a good starting position for our snake.

So I'll select all my bones.

Do remember to select all your bones before clicking I to insert the keyframe and we could just use

the rotation, but I'll use the location and rotation just in case I did want to move it along in some

way and we can see in our dope sheet, I'll just bring that out a bit more.

We've got all our bones here and they've got a keyframe on them.

You can also see if I open up the bone each individual channel.

So rotation here and location there for each individual bone.

I'll minimize that though and bring the dope sheet back down.

So pause the video here and catch it with me selecting all your bones in pose mode and keep framing

that first position.

Now I will leave it on frame one for the moment.

But strictly speaking, for looping animations, you should start your key framing at frame zero so

you don't miss any frames, but that won't affect us here anyway.

Let's say it takes a second for the snake to rear upwards into our position.

So I'll move my play head to frame 25 and I'll press the record button this time and start rotating

the snake into position.

All our bones will be rotated.

The only bone we can actually move is that beginning parent bone right at the front.

Yours doesn't have to look exactly like mine, but something like this will be fine.

And again, it's a little bit jagged in the way it looks.

And for this to look better, we would need more topology on our object and more bones for a more curved

shape.

But for now, this is fine.

In fact, I'll just go back a little bit further.

So it's rearing up quite far backwards like this, and there's a big kink there.

But again, it doesn't matter too much.

Let's just check our animations working so it goes from the floor and up to this position, ready to

strike.

Okay, so pause the video here and catch it with me.

Animating it from a lying position to a red backward s position like this.

Pause the video and have a go at that.

Okay.

So as a challenge to you, I want you to make your snake strike outwards to maybe hit something out

here or maybe down to the bottom here.

Depends on how big the enemy is.

And then go back to its reared up position so it strikes out and then goes back again.

One thing to think about here is we want it to be fairly quick.

So think about how many frames you're going to use and remember you can easily adjust those if you need

to by moving the key frame.

And the other thing to remember, you can duplicate this current keyframe at the end of it striking

out.

So create one keyframe for it's striking out and then duplicate this one for it to come back to.

Hopefully that makes sense.

Pause the video and have a go at that.

Okay.

So I want it to be nice and quick.

So we'll do it in, let's say ten frames, but it might still be too slow, but we can easily move it

and let's move it into position where it's striking out and I'll speed this footage up.

But it's again me just rotating the bones.

So possibly something like this, we can check and see how that looks.

So from here it goes, char or whatever noise or probably more a hissy noise, to be fair, that's great.

So we can move along a little bit further and duplicate this keyframe.

However, it's really important to realize that I haven't got all my bones selected, so I'm only selecting

one bone.

So if I chose that and press shift DX that would actually only keyframe that bone.

And you can see just that bone wiggling around just at the end there.

So I'll undo that.

So I have to select all my bones and then select the keyframe at the top to select all the bones underneath

and shift each duplicate.

Bring that to the end here so goes Char and then brings it back again.

Let's see what it looks like from the start.

It rears up and then strikes out, but very slowly.

So again, selecting the keyframe at the top, making sure all my bones are selected, teeth grab,

move that one in and grab to move this one in.

Maybe it's a little bit slower to come back to its rear position, but very fast with the strike.

Let's try it now.

A little bit quicker.

So I'll move those in.

There we go.

I feel like it needs just a little bit more adjustment, though.

There we go.

Dangerous snake.

Okay, last challenge to you then is to continue your animation.

So it pauses in this position slightly and then goes back to lying down on the floor.

Pause the video and have a go.

That's.

Okay.

Now, hopefully remembered that in order to pause in this position, we need to copy this key frame

here.

Again, with all the bone selected, I can press shift DX to duplicate and bring that out.

Now when it strikes out, it comes back to this position and stays there and then we want it to go back

to the resting position so I can move my play head along.

Take this key frame again with all the bone selected, shift each duplicate and bring that across.

Let's just bring our play head to the beginning, see how fast it is strikes out back there and then

lies down.

Now it lies down a little bit fast.

So I'll move this keyframe across a little bit further.

Again, make sure you have all the bones selected, start at the beginning, strikes out and then lies

back down, maybe even a little bit further.

And we're on frame 70.

So I'll go back to the beginning, have a look at my strike and it lies back down.

That's great.

Now I can loop the animation.

So if I finish it at, let's say frame 80 so I can change it down here to 80.

Then press play.

Strike out.

Go back to the beginning and start again.

Notice that I went ten frames beyond the end of my animation.

If I change this to 70.

Watch what happens.

It strikes out goes back, but it straightaway lifts up and does it again.

So having a bit of a pause there gives us time to do another loop.

So I change this back to 80 and press play and we've got our animation looking wonderful.

Okay, so hopefully you've got an okay with that.

You might want to now render out your scene.

So remember the settings from the previous videos and as always, remember to save your work before

you start rendering.


Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
Play
information alert
Schedule learning time
Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.
Create Beautiful 3D Models for Games, 3D Printing & More – Now
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Animating Bones |
| **Thời lượng** | 12:05 |
| **Chủ đề chính** | Tạo hoạt ảnh bằng bone |

## 1. Mục tiêu bài học

- Biết cách chèn keyframe cho bone trong Pose Mode.
- Hiểu sự khác biệt giữa animate object thông thường và animate bone (Pose Bone).
- Nắm được cách sử dụng Keying Set (LocRotScale) khi animate nhiều bone cùng lúc.
- Làm quen với việc animate một chuỗi bone đơn giản để tạo chuyển động liên hoàn.

## 2. Nội dung chính

Animate bone hoạt động tương tự animate object thông thường (chèn keyframe bằng I, xem trên Timeline/Dope Sheet/Graph Editor), nhưng phải thực hiện trong Pose Mode và áp dụng riêng cho từng bone (Pose Bone) đang chọn — mỗi bone có transform riêng độc lập (Location, Rotation, Scale tính theo hệ tọa độ local của bone đó, thường dựa trên Rest Pose ban đầu).

Khi làm việc với chuỗi bone (ví dụ cánh tay gồm nhiều bone nối tiếp), animate bone gốc trong chuỗi sẽ kéo theo chuyển động của các bone con phía sau (do quan hệ cha-con), nhưng mỗi bone vẫn có thể có keyframe riêng để tạo chuyển động phức tạp hơn (ví dụ uốn cong từng đốt). Đây chính là nguyên lý Forward Kinematics (FK) — animate bằng cách xoay từng khớp theo thứ tự từ gốc đến ngọn, khác với Inverse Kinematics (IK) sẽ được học ở bài sau.

Khi chèn keyframe cho bone, nên chọn loại LocRotScale (hoặc dùng phím tắt tương ứng theo Keying Set) để đảm bảo toàn bộ giá trị transform của bone được lưu lại tại frame đó, tránh trường hợp chỉ lưu một phần thuộc tính khiến animation bị lỗi khi nội suy.

## 3. Quy trình thực hành gợi ý

1. Chuyển Armature sang Pose Mode (Ctrl+Tab).
2. Chọn một bone, di chuyển playhead về frame 1, nhấn I và chọn Rotation (hoặc LocRotScale).
3. Di chuyển playhead sang frame khác, xoay bone (R) để tạo tư thế mới, nhấn I lại.
4. Lặp lại cho các bone khác trong chuỗi để tạo chuyển động phối hợp.
5. Play animation để kiểm tra chuyển động của toàn bộ chuỗi bone.
6. Mở Dope Sheet (chế độ Action Editor) để xem toàn bộ keyframe của Armature trên một hàng thời gian.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+Tab` | Vào/thoát Pose Mode |
| `I` | Insert Keyframe cho Pose Bone đang chọn |
| `Alt+I` | Xóa keyframe của bone tại frame hiện tại |
| `Alt+R` / `Alt+G` / `Alt+S` | Xóa (clear) Rotation / Location / Scale về Rest Pose |
| `R` | Xoay bone (thao tác animate phổ biến nhất trong Pose Mode) |
| `A` | Chọn tất cả bone trong Pose Mode |

## 5. Lưu ý & lỗi thường gặp

- Animate ở Edit Mode thay vì Pose Mode — Edit Mode không lưu được keyframe animation cho bone.
- Quên rằng transform của bone tính theo hệ tọa độ local, khiến giá trị Location/Rotation khó đoán nếu không quen.
- Không dùng LocRotScale khi chèn keyframe, dẫn đến chỉ lưu một phần transform và animation bị lỗi ở phần còn lại.
- Chọn nhầm bone khi có nhiều bone chồng nhau trong khung nhìn — nên bật hiển thị tên bone hoặc phóng to để chọn chính xác.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe LocRotScale cho ít nhất một bone.
- [ ] Đã tạo chuyển động cho một chuỗi 2-3 bone nối tiếp.
- [ ] Đã kiểm tra animation bằng Play trong Timeline.
- [ ] Đã xem lại keyframe bone trong Dope Sheet / Action Editor.

## 7. Tóm tắt

Animate bone thực hiện trong Pose Mode theo nguyên lý Forward Kinematics: xoay và chèn keyframe cho từng bone để tạo chuyển động chuỗi. Đây là kỹ năng nền tảng trước khi học Inverse Kinematics và rigging nhân vật hoàn chỉnh.
