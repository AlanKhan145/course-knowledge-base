# 075 — The Graph Editor
In this lecture, we'll be looking at the graph editor to create a bouncing ball animation.

So I've started a new blender file, and a quick challenge to you is to add in a sphere and a plane

for a floor, and I want you to animate the sphere so it falls from a small height over about one second

and hits the floor and stay still.

So you'll need two key frames, one at the top and one at the bottom, and your animation should last

for one second.

So pause the video and have a go at that.

Okay.

So hopefully you got an okay with that.

I'll select the cube and delete it.

Shift eight and you've sphere and shift eight, add mesh and then plane.

I'll scale the plane up so it becomes like a floor and I'll move my sphere up in the Z axis.

So it's going to fall down and hit the floor.

Now I can press the record button and I'll just lift the timeline up a little bit so you can see the

keyframes are press g to grab and press enter just so it's enters a keyframe because I have the record

button active I'll go across 25 frames but do remember if I go to my output properties that the frame

rate by default is 24.

So I'll just change that to 25.

You can keep it on 24 if you like, and go to 24 frames.

It doesn't make too much difference, but at 25 frames I can now press G to grab in the Z axis and move

it onto the floor.

Now it's a little bit tricky from this view here, so I'll go to front view, zoom in a bit G to grab

and there's that axis and get it a little bit more accurate to there.

And you'll notice that I moved it twice, but because I was over the keyframe the second time I moved

it where I was adjusting the position slightly, it overwrite the original ones.

We've still got two key frames here, so I changed my end frame to 25 just for the moment.

Zoom out of touch and press play and you can see my ball falling to the floor.

So hopefully came up with something similar to this.

Let's go across to the animation workspace now that gives us our camera view and the dope sheet as well.

But what I want to show you this time is the graph editor.

So I'll come across to my window options here and change it to the graph editor.

And you can see this animation column here which has the dope sheet and timeline at the top.

Then there's the graph editor and I'll bring this up slightly and let's zoom in on my object so I can

see it a little bit more clearly.

And I'll zoom out of my graph editor using the wheel of my mouse.

Let's just pause the video and catch it with me.

Making sure you've changed your dope sheet to the graph editor and you've got a similar layout to mine

in terms of space.

Now the graph editor shares some similarities to the dope sheet in the sense that we've got our object

here and we've got the object transformed here or the channels.

Now it gives them a particular colour.

We are actually only moving in the Z location so I can select this one and shift select all the way

down to the scale, right click and delete channels that will make it a little bit easier to understand.

So I've got three channels for location now.

I know it's not moving in the X and Y, but I'll leave those in there just to show you some elements

of the graph editor.

You'll see these have colors associated with them.

So the Z here has a blue and it's actually this one here.

I know that because it's got some animation on it.

It goes from this height here down to this height here, and it's focusing on the object, origin of

the object.

That's why it's not all the way down to zero here.

The object origin is actually above the floor, hence the line is above the floor.

Here the x and y are at zero at the moment.

So if I hide those, you can see those key frames deleting.

I can highlight a channel.

So if I click on the x, you can see it in purple there.

It's actually red, but it's over the top of the blue line of zero.

So it's got a purply color to it.

So it's a mixture of the blue, which is the zero line and the red.

Therefore purple, if I highlight the Y location, you can see a mixture of blue and green which gives

us a slightly turquoise color.

And the z is this one here highlighted.

I can actually change the height of this holding down control, pressing the will of my mouse and moving

it upwards will change the height.

If I hold down control and use the will of my mouse and move across, it changes the width.

So I'll make it a bit thinner here because we're going to add some frames to the end and bring this

to the beginning.

So now I've explained the X and Y, I'll select both those and delete them.

So I'm just left with my Z location, which we can see here.

So pause the video and catch it with me.

Delete the channels we don't need because we're just using the Z location and zoom in.

So you're seeing a similar size to what I can see here.

Pause the video and have a go at that.

Okay.

Let's start making our ball bounce.

I've got 25 frames that are at the moment.

I'll bring it a little bit further this way.

Let's go to 100 frames so it's going to fall and then it needs to come back up and down and up and down

and up and down.

So it hits the ground at frame 25 and it's going to bounce back up, not quite another 25 frames because

we're going to have it decay in terms of its bounce.

And I know one second is a long time for a ball to drop, but we're sort that out in a moment.

So I'll go an extra 20 frames and I can duplicate this key frame here.

So shift DX to duplicate and move it out to here.

And remember, you can constrain it to the x axis by pressing x.

So it's exactly the same height as the starting keyframe.

So I left click there to set it and I can press G to grab in the Y to move it down.

Now that is slightly confusing because it's the Y axis in this 2D graph here, but obviously our object

is moving in the Z axis.

So up and down in 2D windows like this is always going to be the y axis, then it's going to fall again.

So it's going to hit the floor and I can duplicate this one.

So shift D and then X and I actually want to keep this in exactly the same position a bit shorter again.

And I want 65 now, which is fine because it's going to go up and down at the same speed.

Then I'll select this one here, shift each duplicate in the x axis, bring it along, and this time

it's going to be shorter and not bounce as high.

So if I go to 80, that's 15 frames and then G, then Y to bring that down so it doesn't bounce quite

as high.

And I'll bring that down a bit further.

So it starts to die off and I'm around two and one half up.

It doesn't matter if you've got different heights to me.

We can change this all in a moment and then I'll duplicate this one shift dx in the X, move it across

and again another 15 frames and let's just see what that looks like.

So I'll press play.

So it falls down, bounces, bounces again and dies and the bounces stop.

It doesn't look much like a ball bouncing at the moment, but before I continue, pause the video here

and catch it with me, making sure you've got a similar bouncing ball to what I have here.

Okay.

Now, hopefully you're getting the idea of the graph, Ed, that we've got the height axis coming up

here for the Z and obviously time going along the bottom here.

But what I'm finding is when I drag across my timeline as it comes to the first point, the falling

slows down.

And you can see that in the graph here, it's speed of falling increases and this is constant here,

but then its speed of falling here slows down and we get an effect.

If I bring the timeline back to here and press play where it doesn't seem to be hitting the ground,

so it slows down and almost hovers, one way of fixing that is changing the interpolation.

If I click on this keyframe here, I can actually change the way this is interpolated and change these

curves.

So they're a bit sharper and therefore we get a bounce.

If I press a T, the interpolation is the most important for us as beginners.

There's constant which I'll show you looks like this.

So that's an on off and in fact I'll select all my key frames with A and then press T and then press

constant.

So you can see this on all five days.

So it's on the floor.

Up on the floor.

Up.

Certainly doesn't look like bouncing.

So I press a T again and incidentally you can find this menu under key and then interpolation mode.

Then we've got linear, which if I play that takes away any curves.

So that's good for the bottom of our bounce, but not for the top as it looks like it's hitting a ceiling.

Then lastly, if I press t again, we have the busier now the busier create these curves and if I select

this one here and scale in the X to bring it right in like this, we get a bounce and it's correct at

the top here as it slows down and comes back down again.

So we need to make this one sharp, like this one.

I can press a T and change it to linear, which is fine, but it's a little bit awkward and I have to

move this a handle here and it has that because it's linked to another one that is a busier handle.

It's actually just a bit easier to select it and scale it right in and I'll do the same for this one.

Scaled it right in, so I'll press play at the start.

And we've got a ball bouncing very slowly at the moment.

Okay.

So pause the video here and just take a quick look at the interpolation modes by pressing T.

But we're going to leave it with busy air for the moment.

So select your bottom keyframes and give them a much sharper point by scaling them all down.

Okay.

Now it's far too slow.

This bounce, it looks like there's not much gravity.

What I can do is select all my points and scale in the X to shorten this.

But obviously I'm scaling into this sort of middle point of all our keyframes, so I'll undo that.

And if I move my play head to the front, incidentally, I do want to move this keyframe to frame zero,

so press g than x with that across one and the frame start to zero.

I'm not sure why that's not default, to be honest, and I can select all my key frames.

And I can use this button here, the pivot point and change it to 2D cursor much like the transform

pivot up here has 3D cursor.

If I now scale from here in the x axis, it will scale according to where my play head is.

So I'll bring it to 50 frames and I want you to pause the video here and catch it with me reducing the

length of the animation to 50 frames.

So let's see what that looks like by pressing play.

That's not too bad.

It seems to be falling at the right rate, but these top keyframes are a little bit sharp still, and

it doesn't stay at the top of the bounce long enough.

So if I select them all, change my pivot point to individual centers and then press scale in the X,

I can make this much wider and now play it and it looks like a bouncing ball, although I do need a

little bit more bounces along here.

So pause the video here and catch it with me selecting your top key frames and using the individual

centers.

Pivot point scale them up in the x so they spend a longer time at the top of the bounce.

Pause the video and have a go at that.

Okay.

So a challenge to you then is to continue the bouncing so it gets smaller and smaller until it stops,

maybe at around 70, 75, something like that.

Pause the video and have a go at that.

Okay.

So I can move our play head across.

I can duplicate these key frames and bring them down here.

I could move the ball in the viewport as well.

It's entirely up to you.

I'd like to be able to see the gradual decline of the height, so I'd rather duplicate a keyframe from

here and move it across to here and this one as well.

So that's around this height.

Probably needs to scale in a little bit like this and shift each duplicate to bring it down to about

there.

And this one as well needs to become a little bit shorter actually.

So probably around here and G then X to make that across.

And this is a bit tricky because there's no middle point.

So I'll come to here and I'll bring this one back.

So gee than X, so it has the same amount of frames, one side to the other.

I can zoom in a bit to make sure we can see that nice and easily.

So that's one, two, three, one, two, three.

And again, I need to scale this in so there's a bit more of a curve.

Last one.

So shift D, I'll move it down here.

And this time it's going to be to scale it down a bit and shift D to duplicate in the x axis across

there.

And you could do even a final one at a very short height here.

I'll speed that footage up a little bit and I'm just going to select all the bottom ones because really

they're not quite sharp enough so I can scale them all down.

Just make sure I've got the individual centres on scale them all in the X so they're very, very sharp

like this.

Zoom out of touch and let's play our animation.

And that looks great.

Now, males will stop it at frame 80.

Now, if I was rendering with still frames, I'd actually stop it at frame 72 and just repeat the last

frame.

But if it's a video file, I want a little bit of stillness before I restart my animation so it's bouncing

like this.

And then there's just a bit of stillness before it restarts the animation like this.

Of course, you might like to render your animation.

Just make sure you've moved your camera into the right position and that you set up the output correctly

and change the file format to ffmpeg.

If you want a video file, also remember to save your work before you start rendering and I'll see you

in the next lecture.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | The Graph Editor |
| **Thời lượng** | 12:56 |
| **Chủ đề chính** | Làm việc với Graph Editor |

## 1. Mục tiêu bài học

- Hiểu vai trò của Graph Editor trong việc kiểm soát chi tiết đường cong animation (F-Curve).
- Biết cách đọc trục X (thời gian) và trục Y (giá trị thuộc tính) trên đồ thị.
- Nắm được cách chỉnh handle của keyframe để thay đổi kiểu nội suy (Bezier, Linear, Constant).
- Biết cách dùng Graph Editor để tạo easing, làm mượt hoặc tạo hiệu ứng bật/nảy (bounce, overshoot) cho animation.

## 2. Nội dung chính

Graph Editor là công cụ chuyên sâu để chỉnh sửa animation ở mức đường cong (F-Curve), khác với Timeline hay Dope Sheet chỉ hiển thị keyframe như các điểm rời rạc. Trong Graph Editor, trục hoành (X) biểu diễn thời gian (frame), còn trục tung (Y) biểu diễn giá trị của thuộc tính đang animate (ví dụ vị trí Z, góc xoay X...). Mỗi keyframe xuất hiện dưới dạng một điểm trên đường cong, có hai handle (tay cầm) ở hai bên để kiểm soát độ cong của đường trước và sau điểm đó.

Kiểu nội suy (Interpolation) quyết định hình dạng đường cong giữa hai keyframe: Bezier (mặc định) tạo chuyển động mượt có ease-in/ease-out, Linear tạo chuyển động đều tốc độ, Constant giữ nguyên giá trị đột ngột nhảy sang keyframe kế tiếp (thường dùng cho hiệu ứng animation dạng stop-motion hoặc thay đổi trạng thái tức thời). Loại handle của từng keyframe (Vector, Auto, Auto Clamped, Free, Aligned) cũng ảnh hưởng đến cách đường cong uốn quanh điểm đó.

Graph Editor đặc biệt hữu ích khi cần tinh chỉnh timing và spacing của animation theo 12 nguyên tắc animation cổ điển — ví dụ tạo overshoot (đường cong vọt qua giá trị đích rồi quay lại) cho cảm giác đàn hồi, hoặc ease-in/ease-out để chuyển động tự nhiên hơn thay vì đều đều máy móc.

## 3. Quy trình thực hành gợi ý

1. Tạo một animation đơn giản với 2-3 keyframe Location trên Timeline.
2. Mở Graph Editor (đổi một vùng làm việc sang Animation workspace hoặc chuyển Editor Type).
3. Chọn một keyframe, quan sát handle của nó và thử kéo handle để thay đổi độ cong.
4. Thử đổi Interpolation của một đoạn từ Bezier sang Linear rồi sang Constant, quan sát khác biệt khi play animation.
5. Thử kéo handle tạo hiệu ứng overshoot (đường cong vượt qua giá trị đích).
6. Dùng phím N để mở sidebar và nhập giá trị Frame/Value chính xác cho một keyframe.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `T` | Mở menu chọn kiểu Interpolation (trong Graph Editor) |
| `V` | Đổi kiểu Handle Type của keyframe đang chọn |
| `N` | Mở/đóng sidebar thông tin keyframe (Frame, Value) |
| `Home` | Đưa toàn bộ đường cong vào khung nhìn (View All) |
| `G` / `S` | Di chuyển / co giãn keyframe hoặc handle trong đồ thị |
| `A` | Chọn tất cả keyframe trong Graph Editor |

## 5. Lưu ý & lỗi thường gặp

- Chỉnh Graph Editor khi chưa chọn đúng kênh (channel) F-Curve cần sửa, dẫn đến chỉnh nhầm thuộc tính khác.
- Kéo handle quá tay tạo overshoot không mong muốn, khiến animation trông "giật" thay vì mượt.
- Quên phím Home để căn khung nhìn, khiến đường cong bị thu nhỏ hoặc phóng to khó thao tác.
- Nhầm lẫn giữa chỉnh keyframe (điểm chính) và chỉnh handle (tay cầm điều khiển độ cong).

## 6. Checklist thực hành

- [ ] Đã mở được Graph Editor và nhận diện trục X/Y.
- [ ] Đã thử đổi Interpolation giữa Bezier, Linear, Constant.
- [ ] Đã thử kéo handle để tạo easing hoặc overshoot.
- [ ] Đã dùng sidebar (N) để nhập giá trị keyframe chính xác.

## 7. Tóm tắt

Graph Editor cho phép kiểm soát animation ở mức đường cong chi tiết, từ kiểu nội suy đến hình dạng handle, giúp tạo ra chuyển động tự nhiên và có chủ đích thay vì animation cứng nhắc mặc định.
