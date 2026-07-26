# 074 — The Record Button
In this lecture, we'll be taking our knowledge of animation further and looking particularly at the

record function.

Okay.

So here's where we got up to last time, and we've got our animation frames in the middle here.

Let's extend this by 50 frames and create a bit more animation.

So I'll come to the end down here and type in 150.

I'll zoom out a touch so we can see all those frames.

Now, hopefully you can see the difference between the timeline and the dope sheet.

The dope sheet has all the animation frames for any object that is selected, so all the channels that

you can see on the side here, whereas the timeline just tells us that there is a key frame at these

different points.

So the timeline is a nice, simple way of looking at animation, whereas the dope sheet is much more

detailed.

What the timeline does have, however, is this panel at the top here, which can be very useful, particularly

the record buttons and the key frame options here.

So I'll bring down the timeline to about this point here so we can just see that top panel, which,

like I was saying, can be very useful.

So at frame 100 is the current finish of our animation.

There's nothing happening after that.

So let's make something more interesting happen.

What I'm going to do is show you the record button or the auto keying button.

If I click on that, everything I now do with my objects in the viewport will be recorded and automatically

insert keyframes.

So I'll go to frame 150 and press G to grab in the x axis and move my cube back to the beginning.

When I left click watch what happens in my dope sheet.

It suddenly inserts lots of keyframes.

I'll bring that up so you can see them all just there.

Now, the slight problem with this is that it's added some scale keyframes as well, which I didn't

really need.

So the record button often records more than you need.

You can limit what it records, but that's for another time.

Most importantly, it was nice and easy to set up key frames with the record button active.

So pause the video here and have a go at adding another keyframe at the end for movement, but this

time using the record button to record it.

Pause video and have a go at that.

Okay.

So I'm going to show you a common mistake that I see lots of beginners make.

I want to scale up my cube over the course of the animation, so I'm at the end of the animation.

I can therefore press the scale and make it much bigger like this.

That action should be recorded on my keyframes here.

That's great.

So hopefully when I go through it will scale up.

But of course it doesn't because I haven't got a scale keyframe at the beginning.

So there's only one keyframe.

So that's the size it will stay throughout the animation.

That's a fairly important concept to understand, and it's one you'll certainly get used to as you go

along.

Now, if I want to set a scale keyframe at the start here, so it gradually scales over the course of

the animation, I can obviously just scale it down here and left click and it will set my keyframe.

And now.

It will scale over the course of the animation.

I'll go back to the beginning of the animation, but I'll show you these buttons down here.

I can press this button, jump to endpoint, and that will jump to the beginning of my animation.

And by end point it means these are two ends of the animation.

So you can press this one to go to the end point at the very end or at this point to go to the end point

at the beginning.

If I press end on my toolbar and go to item, I just bring this down so you can easily read that you'll

notice the transform controls are highlighted yellow.

When I move across slightly, they go green.

When they hit another keyframe, that's when they turn yellow.

There's no keyframe on the rotation or the scale.

Hence why the location is the only one that's yellow.

If I go across to the next keyframe instantly I can press this button here.

Jump to keyframe.

You can see that the rotation is also highlighted yellow here because we have rotation keyframes on

this one.

And if I go to the next keyframe, all of them are highlighted in yellow.

So if it's highlighted green, it means it's got a keyframe somewhere, although not particularly on

this frame.

I'll jump to the next one.

If it's highlighted yellow, it means there's a keyframe for that particular transformation.

So I'll go back to the beginning with my jump to End Point, and I'll set the scale in here to one.

So click and drag over all these parameters, type in one and press enter.

And it has recorded that scale because we have the record option here.

If I don't have the record button enabled, I can right click on these and say Replace Keyframe.

But that's automatic because I have the record button enabled.

So pause the video here and set the beginning keyframe for your scale size to one.

And there's a quick challenge to you.

Set your end keyframe scale to two, pause the video and have a go at that.

Okay.

So hopefully you understood that you can go to the end frame by jumping here and I can click and drag

across these and change it to two.

So currently our animation goes around to the top and then back to the middle, scaling all the time.

I want to challenge you to have the scaling only happen in the last 2 seconds.

So it maintains its scale for 4 seconds and then the last 2 seconds it scales up.

Pause the video and have a go at that.

Okay.

So what I need to do is at frame 100, which is 4 seconds, I need to have a key frame, the same as

this one here for the scale, which we know is one.

So I can click and drag across these and type in one.

And if you did it that way, that's absolutely fine.

Or I can take the scale keyframes by box selecting them like this so they're all selected there and

I can duplicate them with Shift DX.

So Shift dx to duplicate drag them across to this one here and now.

I know it's the same here as it is at the beginning.

So if I click and drag from the beginning, it keeps it scale of one and then suddenly scales up to

twice as big.

So as well as creating keyframes by recording, we can also press shift the to duplicate keyframes.

This is particularly useful if you have a set of channels such as the scale here and you want it to

stay the same, so keep the same scale across this area.

You can duplicate this keyframe to the endpoint that you want and it will stay the same in this area.

Okay.

Lastly, I want to show you that you can animate other objects, so I'll zoom out just a touch.

And I think it would be a nice idea if we animated our camera.

So it moves from here to here, but still points at our cube.

So I'll need to animate the movement and the rotation.

So your challenge then is to do just that, animate the camera from one side to the other, and you'll

need to rotate it.

So it keeps pointing in the middle of our scene.

Pause the video and have a go at that.

Okay.

So hopefully, remember, you need a keyframe at the beginning as well as the end.

So make sure you go to the beginning and set the key frame for where it is at the moment.

Now I can keyframe the parameters in here, but obviously that will take a little while.

Or I can press I over my three d viewport and keyframe the lock rod or location and rotation.

I could also come in here and click I within here and keyframe all channels.

Or I can actually press G to grab and without doing anything, just press enter and it will keyframe

the movement because I've got the record button on, I'll open up the object transforms to show that

it's actually keyframe the rotation and the scale as well.

And we can also see that up here because they're highlighting yellow.

I can now go to the end frame G to grab in the x axis, so move it across the other side.

And I also need to rotate in the Z axis and bring it back to the middle here.

Let's see what that looks like by dragging across my timeline.

And I do manage to keep most of the cube in all the way through.

What's often better is a slight curve to the animation like this.

So coming out here in the middle, so it doesn't end up zooming in to an area which it currently does.

If I go to frame 75, you can see it's slightly zoomed in here, so I need it out here somewhere so

I can press G then Y at this point.

So it zooms out slightly and again I've got the record button on.

So it's recorded that movement.

I wasn't quite on frame 75, I didn't notice, but that doesn't matter too much.

And we can see we've got a slight curve.

To the animation now.

So you can see there we can animate the camera as well.

Okay.

This time I'm going to ask you to animate the light.

So we have a light in the middle of our scene here.

I want you to move it from this corner here to this corner here.

Pause the video and have a go at that.

Okay.

So this is easier in top view.

So I'll press seven on my numpad g to grab to move that into position.

And again, we've got our object transforms recorded just there across to the end to grab and move it

to the last position.

So hopefully you got an okay with that.

One thing I'd like to show you is that you can also, if I go to the light properties, animate the

power of the light and even the color.

In fact, most parameters can be animated within Blender, which gives you a huge amount of possibilities.

Let's do just that.

Then I'll go back to my beginning frame and I'll change the color to a red.

Now this is an activated by the record button, so you actually need to right click and insert keyframe.

You can see a keyframe appear there and the light properties are now appeared in our dope sheet.

So for the moment you'll need to right click and insert keyframe or it's saying Replace a keyframe.

At the moment we'll change the power to 100 as well and press enter.

And again I've got to right click insert keyframe.

Then let's go to the end.

I'll change the colour to a purple and that has set a keyframe this time because we told Blender that

we want to start animating this, it's allowed it to be influenced by the record button.

I'll change the power to 1000.

And again, we've got a keyframe because it's highlighted in yellow and we can see our light options

down here.

I'll just move my frame up a little bit more.

You can see the RDB, which stands for Red Blues and Greens and the Power they're being influenced.

I'll move across my top panel and go to Rendered View, make sure you're an EV for this and hopefully

your machine will be able to keep up.

And I'll drag slowly across my timeline.

We can see my light changing intensity and changing colour from red to purple.

So it's a bit dull at the moment.

So what I want you to do is add a new light to the scene and also animate that moving it across from

the other corners of our scene and again animate the colour and the power.

You can have this one much brighter or darker.

It's entirely up to you.

Pause the video and have a go at that.

Okay.

So you might have pressed shift to add and added in a new light from there.

However, another option is to duplicate our current light.

So shift to duplicate and I'll move that up to the top corner here.

You could have had it come from this corner over to there, or this corner over to there.

Or any other way.

It doesn't matter.

Now, at the moment, it's sharing the animation properties of the other one.

Apart from the end frame, because when I duplicated it, I moved it.

And therefore that was recorded and I did this whilst my play head was on the end frame.

So I'll need to move those key frames that it's got at the moment around into different positions.

So I'll go back to the beginning and grab and move it down to the bottom corner here and I'll change

the colour to something different like green and the power.

This time I go up to 2000, let's see what we've got now.

It's going across and they both change to purple and they both end up with 1000.

So I change the colour of this one to something like a yellow instead.

And again because the record buttons on, it's inserting these key frames for me and we can see our

animation of our camera, our lights and our cube all happening in the scene in front of us.

So hopefully you got an okay with that.

And you're understanding animation a lot more now and you're getting used to the idea of keyframes.

In animation, you might like to render out your results.

Do you remember to save your work before rendering in case of any crashes?

And I'll see you in the next lecture.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | The Record Button |
| **Thời lượng** | 11:32 |
| **Chủ đề chính** | Sử dụng nút Record để tạo keyframe |

## 1. Mục tiêu bài học

- Hiểu chức năng của nút Auto Keying (Record) trên Timeline.
- Biết cách bật/tắt Auto Keying và ảnh hưởng của nó đến quy trình animate.
- So sánh ưu/nhược điểm giữa chèn keyframe thủ công (phím I) và Auto Keying.
- Nắm được các rủi ro khi quên tắt Auto Keying trong lúc chỉnh sửa scene.

## 2. Nội dung chính

Nút Record (biểu tượng hình tròn đỏ, còn gọi là Auto Keying) nằm trên thanh Timeline, bên cạnh các nút điều khiển playback. Khi được bật, Blender sẽ tự động chèn keyframe mỗi khi một thuộc tính đã có ít nhất một keyframe trước đó bị thay đổi (di chuyển, xoay, scale, hoặc chỉnh giá trị trong Properties panel) tại frame hiện tại — người dùng không cần nhấn I thủ công nữa.

Auto Keying rất hữu ích khi tinh chỉnh animation đã có sẵn: chỉ cần di chuyển đến frame cần sửa, thay đổi giá trị, và keyframe mới sẽ tự động được tạo. Tuy nhiên, thuộc tính phải đã được keyframe ít nhất một lần trước đó thì Auto Keying mới hoạt động — nếu object chưa có keyframe nào, cần chèn keyframe đầu tiên bằng tay (phím I) trước khi Auto Keying có tác dụng cho thuộc tính đó.

Một điểm cần lưu ý là Auto Keying là con dao hai lưỡi: nếu quên tắt sau khi animate xong, mọi thay đổi tiếp theo (kể cả những điều chỉnh không cố ý) sẽ vô tình bị ghi thành keyframe, làm hỏng animation đã hoàn thiện. Vì vậy nên tập thói quen chỉ bật Record khi đang chủ động animate, và tắt ngay khi chuyển sang chỉnh sửa mesh hoặc thiết lập scene khác.

## 3. Quy trình thực hành gợi ý

1. Chèn keyframe Location đầu tiên cho object bằng phím I tại frame 1.
2. Bật nút Record (Auto Keying) trên Timeline.
3. Di chuyển playhead sang một frame khác, sau đó di chuyển/xoay object — quan sát keyframe mới tự động xuất hiện.
4. Lặp lại ở vài frame khác nhau để tạo một chuỗi chuyển động.
5. Tắt Record ngay sau khi hoàn tất để tránh ghi đè keyframe ngoài ý muốn.
6. Thử quay lại một frame đã có keyframe và chỉnh giá trị để thấy Auto Keying cập nhật keyframe hiện có thay vì tạo mới.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / nút | Chức năng |
|---|---|
| Nút Record (chấm đỏ) trên Timeline | Bật/tắt Auto Keying |
| `I` | Chèn keyframe thủ công (cần dùng để tạo keyframe đầu tiên) |
| `Left/Right Arrow` | Di chuyển giữa các frame khi Auto Keying đang bật |
| `Alt+I` | Xóa keyframe nếu Auto Keying tạo nhầm |

## 5. Lưu ý & lỗi thường gặp

- Quên tắt Record sau khi animate xong, dẫn đến các chỉnh sửa mesh hoặc vị trí sau đó vô tình bị ghi keyframe.
- Nhầm tưởng Auto Keying tự tạo keyframe cho thuộc tính chưa từng được keyframe — thực tế cần khởi tạo bằng tay trước.
- Không kiểm tra lại Dope Sheet sau khi dùng Record để xác nhận số lượng keyframe được tạo có đúng như mong đợi.
- Bật Record trong lúc dựng scene tĩnh (không animate) có thể vô tình tạo animation không mong muốn cho object.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe đầu tiên bằng phím I trước khi bật Record.
- [ ] Đã bật Record và tạo ít nhất 2-3 keyframe tự động.
- [ ] Đã kiểm tra lại các keyframe được tạo trong Dope Sheet.
- [ ] Đã tắt Record sau khi hoàn thành animate.

## 7. Tóm tắt

Nút Record (Auto Keying) giúp tăng tốc quy trình animate bằng cách tự động chèn keyframe khi thay đổi giá trị đã được keyframe trước đó, nhưng cần bật/tắt có ý thức để tránh ghi đè animation ngoài ý muốn.
