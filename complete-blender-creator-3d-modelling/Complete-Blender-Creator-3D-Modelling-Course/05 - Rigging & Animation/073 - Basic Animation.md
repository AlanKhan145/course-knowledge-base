# 073 — Basic Animation
In this lecture, I'll be reintroducing you to the animation workspace and will be animating a basic

cube with simple transformations.

So in a new start up file, and I'm going to go across to the animation workspace.

So a quick reminder of what we covered last session.

We've got the 3D viewport over here with our camera view, a basic 3D viewport here just so we can move

around our scene in general, the dope sheet and the timeline right at the bottom.

And the dope sheet is a more complex version of the timeline.

What I'm going to do is drag this up so you can see the timeline and I'll bring the dope sheet up so

you can easily see that as well.

Then you'll be able to see the similarities and differences.

So if I come around to the front a little bit more, I want to move my cue from one side to the other.

So I move my play head and I can left click to move that.

And the default is actually frame one.

It doesn't matter too much for this sort of animation, but if you want to be really accurate then you

should really start on frame zero.

It makes more logical sense.

You'll notice also we've got our start and end times here, so I need to start at frame zero here as

well.

And let's select the cube and G then X to move it in the x axis slightly off camera.

If I look on the left hand side with my camera view just there now to insert a key frame I press I that's

whilst over the three D viewport so I'll click location and we see our key frame added in our dope sheet

and on our timeline.

Now the timeline we only see one keyframe.

That's just to say that there is a key frame and it could be one it could be many on this object at

that point.

So it's very simplistic way of looking at your animation.

The dope sheet is more detailed and if I open that up, you can see our transform locations there being

keyframes.

Now the summary, the point at the top here is the same as the timeline.

If I select that I select all the keyframes underneath, I could have more than one object here that

is animated, and I could select several of those animated objects at this point.

And selecting this very top point here would select all the objects that I have selected.

But I could go into individual objects like this cube by selecting this one here.

This will make a little bit more sense when we have more objects in our scene.

The next is cube action.

Don't worry too much about actions at the moment, but an action could be seen as a kind of complete

animation, like a walk cycle, and a run cycle would be two different actions, and you can have several

actions in a scene.

Then underneath that I have the object transforms and I can select that and that will select all underneath.

Then I can select individual channels and you can see them being highlighted individually.

So it's a basic hierarchy going upwards.

When I select the top one, it selects all the ones underneath.

Apart from when we get to the bottom of the hierarchy here with the different channels.

Again, don't worry if that's a bit confusing.

The more we work on it, the more we do, the more that will make sense.

So I want to move across the scene, pass the camera, and I want to do that in 2 seconds.

So a quick challenge to you.

See if you can remember how to do that.

Don't worry if you can't just follow along with me in a moment, pause the video and have a go at that.

Okay.

So we want to move from here to here in 2 seconds.

Therefore, I need to move my play head along to where 2 seconds should be.

Now I've moved it to frame 50, and that would mean that there were 25 frames per second.

Let's go across to our output properties and we can see the frame rate is actually 24 frames per second,

so it should be 48.

To be precise, don't worry if you put it at 50, I always like to put the frame rate at 25, especially

if you're a beginner, because we can divide our timeline up so much easier with 25, so I'll move it

across to 50.

But do change your frame rate to 25 frames per second if you want it to be precisely 2 seconds.

Not that that matters too much really.

So after moving my play head to that point, I can then with my mouse over the 3D viewport, press g,

then x to move it across, pass the camera again to somewhere like here and now.

I could press I within the 3D viewport.

You've also got a key option down here and I can press insert key frame there if I select that I have

a few options here.

Now, currently we have just the location, as are all channels, which you can see down the bottom

in the dope sheet.

So if I click that, it will keyframe the location of all the channels.

But you could argue there's no real need to have the Y and the Z location as well, because it's only

moving in the X axis.

So you can actually just select one, go to the key menu and insert keyframes, or we can press I over

the dope sheet for only selected channels here so I could actually select my keyframes for the Y and

Z location like this and press delete and delete those keyframes.

And it will still work going across from one side to the other.

And it's a little bit less confusing, to be honest.

So pause the video here and make sure you've caught up with me and you've got your keyframes going from

0 to 50 and your cube goes across the screen in the x axis across the camera.

Lastly, delete the keyframes for the Y and Z location.

Okay.

So it's a little bit dull at the moment.

So what we're going to do is add in a floor, so shift data, add and then plain and I'll scale it up.

And currently our box is inserted into our floor.

So you can see that it slides along from one side to the other half way through the floor are not on

top of it.

So I'll select my cube again.

And a challenge to you is now to change this animation so that it slides along the top of the floor.

Pause the video and have a go.

That.

Okay.

So hopefully that wasn't too confusing.

But because we have no keyframes on the Z axis, I can simply g, z and then one and press enter.

And now that's sitting exactly above my floor because this is a two unit cube and it was halfway in

the middle.

And now when I run my animation, you can see that it slides across the floor.

Now, that wouldn't have worked if I had Keyframe my Z location, so I would have to change it for the

end keyframe and the beginning keyframe.

But because that channel is not key framed, it doesn't matter.

So hopefully that made sense to you, and that's not too confusing.

Now I want to give you a quick challenge of changing the animation length to 4 seconds so it takes longer

for our box to go from one side to the other.

Pause the video and have a go at that.

Okay.

So hopefully you remembered we can select our end key frame and you can select it at any point along

here because it's only got one channel and I can just press G to grab to move that along.

So it's now at frame 100, which will be 4 seconds because our frame rate is 25.

So now when I drag it across, it will take 4 seconds.

And remember, the play button is the spacebar.

You'll want to bring your animation to the start and you can then see that going across in real time.

I'll press spacebar again to stop that animation.

Okay, so I'll come round to the top slightly.

And now what I want you to do, I want you to make this go across to this point here and down to this

point here.

So it's not moving upwards just in the Y axis that way and back again this way.

So pause the video and have a go at that.

Okay.

Now, this was a little bit tougher because hopefully you realized we need to go back to the beginning

and we need to set a key frame for our why location.

Because if I go halfway through to frame 50 and press G, then Y to move it up to here and then I to

insert the key frame on the location.

It will actually just animate at the top there because we had no starting point for our Y and no finishing

point for our Y.

So I'll undo that and I'll go back to the start and I'll press I to keyframe the location.

That means we've got the Y and the Z in this location as well, because when I keyframe the location

in the viewport, it keyframes all the location channels X, Y and Z.

So I've got a starting keyframe and now I need to go to the end and press I to keyframe that location

as well.

And now when I go to the middle, I can press G, then y.

And once again, I to keyframe that location as well.

And it's got all three key frames there for all three channels.

Let's play this animation and you can see it going up the top there.

Hand background, which isn't so great because it goes slightly off the camera, but that's not important

at this stage.

Okay.

So hopefully you got an okay with that.

Your last challenge then is I want you to rotate your cube around the Z axis, one full resolution as

it's doing its current movement across the screen.

Pause the video and have a go that.

Okay.

So hopefully remember, do you need to go back to the start?

We can now press eye and insert keyframe for rotation.

And if I press the middle mouse button to move down, you can see the Euler rotation just there.

Again, don't worry too much at the moment.

What Euler means, you'll get used to that a bit as you go along.

Now we can go to the end of our animation and in our viewport press r z 360 and that's rotated around

360 degrees and I can press I rotation and now you can see the animation working just there.

Okay, very last small challenge.

I want you to zoom out a bit on your camera so you can see the entire thing, change the end frame to

100 and render out your animation.

Remember to change the resolution so it renders nice and fast.

Pause the video and have a go that.

So hopefully remembered.

The end frame is down here, but it's also in the frame range just here under our output properties.

So I change it to 100 and you can see it change here and in my timeline so I can move across here and

zoom in slightly with my will.

I'll go over the camera view, press an under view, lock camera to view and clear that panel and just

move out a little bit.

Let's press play and see how that looks.

Make sure we can see it all in frame and that's fine.

So I press the spacebar to stop that animation.

Currently it's going to the temp file, so I need to change that to something more sensible.

So I'm creating a folder called Practice Cube and I'll double click on that to make sure I'm inside

that folder and press, except at the moment it's all still frames or I can change it to ffmpeg to make

it nice and easy just under the encoding.

It's a good idea to change that to MP for if you want it to be easily read, I can change this output

quality to perceptually lossless and the encoding speed to slowest.

If I scroll back up to the top, I can change the resolution to something like 25 so it renders nice

and fast and press control.

F 12 to render out my animation and you can see it rendering very quickly just there.

If I want to run my animation again, I can come up to render and view animation, which is Control

F 11 and that will play through my animation and loop it as well so I can keep watching it.

Okay.

So hopefully.

Gordon Okay.

With that, do you make sure you've saved your work ready for next time?



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Basic Animation |
| **Thời lượng** | 10:45 |
| **Chủ đề chính** | Ôn tập animation cơ bản |

## 1. Mục tiêu bài học

- Ôn lại các khái niệm nền tảng của animation trong Blender: keyframe, frame, Timeline, frame rate.
- Hiểu cách chèn keyframe cho vị trí (Location), xoay (Rotation) và tỉ lệ (Scale) của một object.
- Biết cách di chuyển giữa các keyframe và xem lại chuyển động qua Timeline.
- Làm quen với khái niệm interpolation (nội suy) giữa hai keyframe.

## 2. Nội dung chính

Animation trong Blender hoạt động dựa trên nguyên lý keyframe: người dùng thiết lập giá trị của một thuộc tính (vị trí, xoay, tỉ lệ, v.v.) tại các thời điểm (frame) cụ thể, và Blender tự động nội suy (interpolate) giá trị giữa các keyframe đó để tạo chuyển động mượt mà. Timeline ở phía dưới màn hình hiển thị playhead (con trỏ frame hiện tại) và các keyframe đã tạo dưới dạng các điểm kim cương màu vàng/xanh.

Ba thuộc tính animation cơ bản nhất là Location (G), Rotation (R) và Scale (S) — tương ứng với các phím transform quen thuộc. Khi nhấn I (Insert Keyframe) trên object đang chọn, Blender sẽ mở menu cho phép chọn loại keyframe cần chèn: Location, Rotation, Scale, hoặc LocRotScale (cả ba cùng lúc). Mỗi keyframe được gắn vào một frame cụ thể trên Timeline, và có thể di chuyển playhead bằng cách kéo chuột hoặc dùng phím mũi tên trái/phải, hoặc nhảy trực tiếp giữa các keyframe bằng Up/Down Arrow (hoặc Ctrl+Page Up/Down tùy layout).

Kiểu nội suy mặc định là Bezier (chuyển động có ease-in/ease-out tự nhiên), nhưng cũng có thể chuyển sang Linear (tốc độ đều) hoặc Constant (không nội suy, giữ nguyên giá trị đến keyframe tiếp theo) tùy vào hiệu ứng mong muốn.

## 3. Quy trình thực hành gợi ý

1. Chọn một object đơn giản (ví dụ hình cube) trong scene.
2. Di chuyển playhead về frame 1, nhấn I và chọn Location để chèn keyframe vị trí ban đầu.
3. Di chuyển playhead sang frame khác (ví dụ frame 30), di chuyển object bằng G, sau đó nhấn I lại để chèn keyframe thứ hai.
4. Nhấn Spacebar hoặc phím Play trong Timeline để xem lại chuyển động.
5. Thử lặp lại với Rotation và Scale để quan sát cách các thuộc tính khác nhau nội suy.
6. Mở Timeline mở rộng hoặc Dope Sheet để xem toàn bộ keyframe đã tạo trên một hàng thời gian.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `I` | Insert Keyframe (mở menu chọn loại keyframe) |
| `Alt+I` | Xóa keyframe của thuộc tính tại frame hiện tại |
| `G` / `R` / `S` | Transform: Move / Rotate / Scale |
| `Left/Right Arrow` | Lùi/tiến một frame |
| `Up/Down Arrow` | Nhảy tới keyframe kế trước/sau |
| `Spacebar` | Play/Pause animation (tùy cấu hình) |

## 5. Lưu ý & lỗi thường gặp

- Quên chèn keyframe ở frame đầu tiên khiến object "nhảy" đột ngột thay vì di chuyển mượt.
- Chèn nhầm loại keyframe (ví dụ chỉ Location trong khi object có cả xoay) dẫn đến animation không đầy đủ.
- Nhầm lẫn giữa Timeline và Dope Sheet/Graph Editor — Timeline chỉ cho cái nhìn tổng quan, không chỉnh được đường cong chi tiết.
- Không đặt lại frame range (Start/End) của scene khiến animation bị cắt cụt khi render hoặc playback.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe Location cho một object tại ít nhất 2 frame khác nhau.
- [ ] Đã xem lại animation bằng Play trong Timeline.
- [ ] Đã thử chèn keyframe Rotation và Scale.
- [ ] Đã thử xóa một keyframe bằng Alt+I.
- [ ] Đã quan sát các điểm keyframe hiển thị trên Timeline.

## 7. Tóm tắt

Bài học ôn lại nền tảng animation trong Blender dựa trên hệ thống keyframe: chèn giá trị tại các frame cụ thể và để Blender nội suy chuyển động giữa chúng. Đây là kiến thức nền cho toàn bộ phần rigging và animation nhân vật sau này.
