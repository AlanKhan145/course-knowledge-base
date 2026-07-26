# 067 — Animating The Plane
In this lecture, I'll give you a brief introduction to animation by animating our plane, flying over

some buildings.

So here's where we got up to last time.

And I want to bring in the buildings and the barrels from one of the previous lectures to create a scene

for our aeroplane to fly across.

So I'll come back to layout mode.

So we've got a nice lot of space and go into material preview mode.

I'll zoom out a touch and select my plane controller G, then Z to move that upwards.

Then I can bring my building and barrels into here.

Now, in order to bring in items from one scene to another, we can go up to file and it's under append.

There is an option link as well.

It's slightly more complicated.

So for beginners I always suggest append.

There's also import and export options here and you might think you're importing from a different blend

of file, but these are all for different file types of objects.

So instead we go to append and then I can navigate to the folder with my file.

In the file I'm looking for is called lots of barrels, so I'll double click on that and I can go to

the object.

You can also choose a whole collection to bring in a group of items, but I'll go to object so I can

choose specific ones.

And what I need is the Q, which is the house, and then the four cylinders, which are the barrels.

Obviously it would be a better idea to label your items or put these into a collection, especially

when it comes to much larger scenes.

So if you are creating a big scene, then do make sure you're thinking about some sort of naming conventions.

So I'll append those in and you can see those appear in the middle of our scene there.

Okay, so I'm going to quickly add a floor as well.

So I'll press shift s to move my 3D cursor to the world origin and then shift eight to add mesh and

then plane and scale it up.

So it's nice and big or so I'm going to select my building and barrels.

I'll do select the floor and rotate them around the Z axis, 90 degrees and we'll have the plane flying

over our buildings and barrels in this direction.

Don't worry too much about this set up.

I'll set you a challenge a little bit later on to build a bit more of a scene.

But for now, they're just a point of reference.

So we can have our plane fly over something.

So just pause the video and catch up with me.

Appending your items into this file and putting them onto a floor in a position where our plane can

fly over them, pause the video and have a go at that.

Okay.

So for animation, I'm going to go to the animation workspace.

So I'll click on that and you can see we've got two 3D viewport windows, one with the camera and one

that we can just move around and see our items.

We've also got a dope sheet down at the bottom that so we can see what's happening with our keyframes.

And we've also got a timeline right at the bottom here.

If I bring this up, you can see there's a timeline down there.

I'll just bring that back down because bring it all the way down to the beginning there, because the

timeline has these extra pieces in here, this record button and play buttons as well as the start and

finish time.

But the other details of the timeline, the key frames that are underneath and hidden now, are actually

shown in more detail within the dope sheet.

That's why you have the timeline squashed down like this.

Now we've also got some other useful information under the output properties just here and you can see

our frame start and frame end.

They're the same as down here on our timeline.

We've also got the frame rate, so that's 24 frames per second.

So when Blender renders an animation, it will render 24 still images for each second of footage.

I find this much easier to change to 25, which is the European standard.

It really doesn't make too much difference these days, but 25 is much easier when you're trying to

figure out how many seconds and so forth are in your animation.

So what I want to do with my animation is take my plane, so I'll take the plane controller G Then why

move it back across our scene over here and we're going to have it fly from one side to the other and

we're going to rotate the propeller as well.

I'm also going to move the camera so we can easily see the plane flying over the buildings.

So I'll press dn with my mouse over this viewport.

Choose view and lock camera to view and then press and again and move to a position where I can see

my buildings somewhere around about here, making sure the plane is off screen and it's going to go

off screen the other side as well.

So something like this works well.

I could also change to material preview mode so I can see my items a bit more clearly, but it's not

particularly important.

Okay, so pause the video here and set up your camera so it's at the side of your buildings like this

and have the plane off camera to the side like I have here.

Pause the video and have a go at that.

Okay.

So in order to animate going from one side to the other, we need to set what are called key frames.

So I want this to be my starting position.

So I bring my play head, which I can click and drag along here to zero and to insert a keyframe.

At this point I move my mouse over the 3D viewport and press I to insert.

Now we can set keyframes for the location and the rotation.

You can also do two at once, so location and rotation is commonly used.

I'll choose that so you can see what happens.

A yellow dot appears to say that there's a keyframe there.

It also appears in a timeline, so I'll show you that that's the timeline.

And it just has the single yellow dot saying There's one keyframe again, I'll bring that back down.

The dope sheet, however, has a bit more information so you can see the object transforms and the particular

channels as they're known, that have been animated and have key frames attached to them.

Incidentally, I can move around this by using the wheel of my mouse or middle mouse button to move

around as well.

I'll minimise this though because we don't really need to see it and I'll move up so we can see all

of those keyframes.

Now it looks a little bit complicated at the moment, but just realize that there's one main keyframe

for the position and rotation of our aeroplane.

So just pause the video here and bring your play head to frame zero and insert a keyframe for the location

and rotation of your plane controller.

Okay.

So I want my plane to move across the screen fairly quickly.

So I would say possibly 2 seconds.

So I want to move my plane head 2 seconds across to place my next keyframe.

So just have a quick think about where 2 seconds would be on my timeline.

So hopefully you're getting the idea that 25 frames per second means that one second will be 25 frames.

So to there and 2 seconds will of course be 50 frames.

So at frame 50, I want my plane to be over here.

So gee, then why?

And you can see it going past my camera there.

So somewhere around there should work nicely.

So I've positioned that and I can press I to insert the keyframe location and rotation.

Now if I bring my play head between these two key frames, you can see it going across the screen like

so.

So we've got a very simple animation now.

Our animation is only 50 frames, so we may as well change the end to 50 frames.

And I can zoom in on my 50 frames here.

And instead of grabbing your play head like this, you can press play by pressing spacebar.

When it gets to the end, you'll see it repeats the animation and I can press spacebar to stop.

Now I'll just quickly show you how you can delete a keyframe in case you accidentally put one in in

the wrong place or something like that.

You can select the very top and that will select all the ones underneath and you can press delete.

So if I scrub my timeline across my frames, you can see nothing's happening.

So I'll go back to frame 50 G, then y move it across to about there.

And once again I to insert a keyframe in the location and rotation and there's my animation back.

So pause the video and catch it with me creating a second keyframe at frame 50 and move your plane across

to the other side of the scene.

Okay, so we're almost there.

I'll just select the propeller controller and zoom in on that and we want to animate this.

So I'll press I to insert the keyframe and we only need the rotation this time.

And you can see under my object transforms, we've only got rotation there.

Don't worry about the term oiler.

It can be a little bit confusing for beginners, but just understand that that is controlling rotation.

I'll minimize that.

So we've got our keyframe and I accidentally put it on frame two.

I can easily move that keyframe by clicking and dragging the top and moving it to frame one.

And it'll be helpful actually if I zoomed in a bit.

So I get this in the right place so I can click and drag these key frames along, and that now is at

frame one.

Now I can go to frame 50 and I'll press period key on my numpad to zoom in on my propeller again, which

is on the other side of my scene, and I'm going to press ry3 thousand 600, so I'm going to type in

3600.

And you can see that at the very top of my screen there and press enter.

So I've rotated the propeller all the way around ten times, so 360 degrees is once round.

I can now press I and then keyframe the rotation and you can see the propeller rotating there.

So if I zoom out a bit, move across slightly, you can see my propeller rotating.

Ten times would be very slow, in fact.

So you may want to go 36,000 instead.

So it rotates 100 times as it goes across.

I'm not particularly sure how many revolutions it would actually do in 2 seconds, but you can look

it up if you like.

So let's zoom out a bit further and I can press play to see my plane flying across.

And the propeller rotating.

So pause the video and catch it with me putting in the two key frames for your propellers rotation.

Now for your final challenge.

It would be great to put in an interesting kind of scene here.

So maybe duplicate your building a few times, place your barrels into different positions, perhaps

even find a texture for a crate as well.

So you've got barrels and crates, the classic game objects, and you could even find a different building

material and have lots of different buildings in our scene.

Now, if you're not completely confident about building this, then do look at the next lecture where

I go through in detail about how I made the scene.

Once you've done that, make sure you've saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Animating The Plane |
| **Thời lượng** | 10:05 |
| **Chủ đề chính** | Tạo hoạt ảnh máy bay |

## 1. Mục tiêu bài học
- Tạo keyframe cho chuyển động bay của máy bay (Location, Rotation) trên controller đã chuẩn bị ở bài trước.
- Tạo animation quay liên tục cho propeller.
- Làm quen với Timeline và Graph Editor để xem, chỉnh sửa các keyframe/F-Curve.
- Hiểu vai trò của Interpolation Mode trong việc tạo chuyển động mượt hay dứt khoát.

## 2. Nội dung chính
Animation cơ bản trong Blender dựa trên **keyframe**: tại một frame cụ thể trên Timeline, giá trị thuộc tính (Location, Rotation, Scale...) của object được "chốt" lại; Blender tự nội suy (interpolate) giá trị giữa các keyframe để tạo chuyển động mượt.

Với máy bay, animation thường gồm hai lớp:
- **Chuyển động bay của Empty controller chính:** keyframe Location (và có thể Rotation để mô phỏng nghiêng cánh khi rẽ) tại một vài frame mốc dọc theo quỹ đạo bay mong muốn, ví dụ bay thẳng, nghiêng cua, lên cao.
- **Chuyển động quay propeller:** thường là animation lặp liên tục, có thể keyframe Rotation tại frame đầu và một frame sau đó với giá trị góc lớn (nhiều vòng quay), đặt Interpolation là Linear để tốc độ quay đều, thay vì Ease In/Out vốn phù hợp cho chuyển động tự nhiên có gia tốc.

Quy trình tạo keyframe cơ bản: đặt playhead tại frame mong muốn trên Timeline, thay đổi giá trị thuộc tính (di chuyển/xoay object), sau đó nhấn `I` để chèn keyframe (Insert Keyframe), chọn loại thuộc tính cần keyframe (Location, Rotation, LocRotScale...).

**Graph Editor** cho phép xem các F-Curve (đường cong biểu diễn giá trị thuộc tính theo thời gian) của từng kênh animation, chỉnh sửa tay cầm (handle) của từng keyframe để kiểm soát độ mượt/nhanh chậm. **Interpolation Mode** (phím `T` trong Graph Editor hoặc trong Timeline) gồm các kiểu chính: Constant (nhảy đột ngột), Linear (đều), Bezier (mượt, có easing) — lựa chọn phù hợp tùy loại chuyển động.

## 3. Quy trình thực hành gợi ý
1. Chọn Empty controller chính, đặt playhead ở frame đầu (thường frame 1), định vị máy bay ở điểm xuất phát, nhấn `I → Location` (hoặc `LocRotScale` nếu cần cả xoay).
2. Di chuyển playhead tới các frame tiếp theo, thay đổi Location/Rotation để mô phỏng quỹ đạo bay, chèn keyframe tương ứng tại mỗi mốc.
3. Mở Graph Editor để kiểm tra F-Curve của Location/Rotation, chỉnh handle nếu chuyển động chưa mượt.
4. Chọn propeller, tại frame đầu keyframe Rotation Z (hoặc trục quay tương ứng) bằng 0, tại một frame sau đó (ví dụ 20–30 frame sau) keyframe giá trị góc lớn (vài vòng quay, ví dụ 1440° cho 4 vòng).
5. Chọn các keyframe của propeller, đặt Interpolation Mode là Linear để tốc độ quay đều.
6. Nhấn Spacebar hoặc phím Play để xem trước animation trong Viewport, tinh chỉnh vị trí/thời điểm keyframe nếu cần.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `I` | Insert Keyframe (chèn keyframe cho thuộc tính đã chọn) |
| `Alt+A` | Xóa/hủy hoạt động; trong ngữ cảnh keyframe cũng dùng để bỏ chọn |
| `Ctrl+Click` (trên Timeline) | Di chuyển playhead nhanh tới frame được click |
| `T` (trong Graph Editor/Timeline khi chọn keyframe) | Đổi Interpolation Mode (Constant/Linear/Bezier...) |
| `Spacebar` | Play/Pause animation preview |
| `Home` (trong Graph Editor) | Frame All — hiển thị toàn bộ F-Curve trong khung nhìn |

## 5. Lưu ý & lỗi thường gặp
- Keyframe trực tiếp lên mesh máy bay thay vì controller Empty khiến khó chỉnh sửa tổng thể sau này (đã được tránh nhờ bước chuẩn bị ở bài trước).
- Quên chọn đúng loại keyframe (chỉ Location mà quên Rotation) khiến chuyển động thiếu một phần mong muốn.
- Dùng Bezier interpolation mặc định cho propeller khiến tốc độ quay không đều (chậm dần ở đầu/cuối) — nên đổi sang Linear cho chuyển động quay liên tục.
- Đặt các keyframe quá gần nhau khiến chuyển động bị giật, hoặc quá xa nhau khiến chuyển động chậm chạp không như ý muốn.

## 6. Checklist thực hành
- [ ] Đã keyframe được quỹ đạo bay cơ bản cho controller chính.
- [ ] Đã keyframe chuyển động quay liên tục cho propeller với Interpolation Linear.
- [ ] Đã kiểm tra và chỉnh sửa F-Curve trong Graph Editor.
- [ ] Đã xem trước animation bằng Play và xác nhận chuyển động hợp lý.

## 7. Tóm tắt
Bài học tạo animation thực tế cho máy bay: keyframe chuyển động bay trên controller và chuyển động quay liên tục cho propeller, đồng thời làm quen với Graph Editor và Interpolation Mode để kiểm soát chất lượng chuyển động — nền tảng để tinh chỉnh timing ở bài tiếp theo.
