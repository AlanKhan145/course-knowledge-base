# 085 — Animating the Walk Cycle
In this video, we'll be working on animating the walk cycle for our TV head character.

Okay, so here's where we got up to last time, and let's go across to the animation workspace to work

on our animation.

I'm still in white paint mode, so I'll turn back to object mode and I'll go to side view with our character

because that's the most important for a walk cycle with this view over here.

I'll change it out of camera view because that can actually be a bit distracting at this moment.

And I'll zoom in.

So we've got a three quarter view like this.

Also, I want to be able to see the bones, so I'll come across to the overlays and turn those on.

Now it's my understanding that this should show the bones.

Now, if I click on the overlays and bones are selected there, I'm not sure quite why it's not been

selected.

So let's select on the bones there.

It just needed updating.

So once I've selected the bones, we can see them in our three quarter view.

It's helpful to have a three quarter view like this because when I go to post mode with control tab,

of course you can select pose mode up here as well.

I can now select the back bones quite easily, which is a little bit more difficult from purely side

view here.

It's also helpful to have a floor in the scene.

It's easy enough inside view because we've got our grid line for the Y axis, but it would be helpful

to have it in our three quarter view as well.

So I'll just quickly go back to object mode with control tab shift data, add mesh and plane scale that

right up and alt g to remove any movement.

So just pause the video here and set up your scene in the same way I have.

Now there's one other really helpful thing that we can do for work cycles.

I'm going to use the outlier because we won't need to select objects using the outlier.

And I'll bring that out slightly and zoom in our character a bit more.

And I'll change this to the image editor so I can bring an image into here of a walk cycle.

So I'll go to open and in the resources you can find a walk cycle graphic.

Just here you can choose either the PSD or the JPEG.

Blender can read both, but I'll choose the JPEG for now and press open.

And you can see we've got all the frames of our walk cycle that we need here that we can easily mimic.

So I'll press control, spacebar, so you can see that nice.

And clearly the red is obviously the back side of the character and the blue the front and you've got

the frames indicated at the top here.

Now you can see our character does dig into the floor very slightly on occasions and for a simplistic

walk cycle that we're doing that will work fine.

But for more complicated walk cycles, you'd have a bend in the toes.

Now you may also notice that it's 24 frames long.

It's really nice to keep it at 24 frames for a walk cycle because it divides into three nice and easily.

So we've got a picture every three frames and we can also have 24 nice and easily as well.

So this is one of those occasions where the default of 24 frames per second is very helpful.

Now you may also notice it starts on frame zero, but the frame zero is precisely the same as frame

24.

So when we actually come to render our animation, we'll want to start on frame one so as not to have

a repeated frame.

And if we always see that repeated frame in our animation, you'll get a slight glitch.

It's hardly noticeable to the naked eye.

But for this, when we actually render our file, we'll start it on frame one, which perhaps is why

Blender has it as a default for things like walk cycles.

Now you may also notice that frame one is precisely the same as frame 12, but flipped.

So if you look at the legs, they're precisely the same.

But doing the reverse and the same for the arms, although there is a slight more bend in the hands,

which is actually a limitation of this picture reference, but basically going from 0369 are exactly

the same as 15, 18 and 21, but flipped.

So look at frame three and the position and you can see that frame 15 is the flipped version.

And that's something we can do within Blender, which is very helpful and makes creating these walk

cycles and run cycles much quicker.

So I press control, spacebar and zoom out to touch so we can see the beginning frames.

So pause the video here and insert that reference image.

Okay.

So let's start animating our select my bones go into post mode and immediately you'll see that were

the wrong way round for our reference.

So instead of this side view, I'll press control three to go to reverse side view as I call it.

Remember, you can press the tilde and go to left view instead of right for you.

The same with my three quarter view here.

That will be a little bit easier.

Now we want to position our character to the first keyframe here so you can zoom in a little bit on

that if you like, and you could open this up even because we don't need anything from here either.

First of all, I'll just come around to front view slightly and R then Y for the upper arm to bring

that down and the same the other side are.

Then y now I'm using the global axes.

You can also use the local axes.

So our x x and you can see that's very slightly different due to our bone roll, but because of the

way our character is positioned nicely along the global axis along the Y, we can just use the y axis,

hence why the bone roll wasn't so important as a beginner.

But that does make it fairly important that when you're in three quarter view, you don't just press

R to rotate, otherwise it will come out at a slight angle, press r, then y to make sure it's constrained

to the y axis.

Okay, so my arms are in position.

Let's work on the rest of the body.

So I'll grab the bottom foot and I'll bring my three quarter view back around so I can make sure I've

got the right selection there and g to grab to move that backwards to somewhere around here and the

other one forwards slightly.

And we can see that our character is slightly high up.

There's no bend in this leg when he's touching the floor.

So we want to select the base bone there and G, then Z to move it down.

So there's a very slight bend there.

You can also see that the character's leaning forward slightly, so r to rotate, lean them forward

very slightly somewhere around there.

And I can now bring this down a little bit more because of that base foot being a bit lower.

So it's touching the floor there.

You can zoom in and be a bit more precise with this character.

It's better to dig in slightly to the floor, so at no point it looks like it's floating.

And then the back foot here, we can select this bone across here and rotate that again, digging very

slightly into the floor.

But I think we're about right there.

Don't worry if it's not precisely the same as this, just as long as it's in the rough same position,

you should be fine.

Now for the arms, I'll rotate those forward and we can have a little bit of a swing to the hand as

well.

So it swings upwards and then it will swing backwards as well.

You'll see that in a moment and select the backbone.

There are two rotate and that comes backwards to here and again a little bit of swing to our hand.

And there we have the first pose so I can select all and press I to insert a keyframe location and rotation.

However, I'm not on frame zero, but I'll do this anyway.

So location and rotation, it's inserted in there and I can actually move this back to frame zero and

just move these backwards quite easily if you accidentally put it in the wrong frame.

But remember, we are starting at frame zero this time, so pause the video here and catch it with me.

Positioning your character so it's the same as the reference image and insert the keyframe on frame

zero for that pose.

Okay.

So I'll just go into full screen for our reference image and remember that frame zero is precisely the

same as frame 24.

So control spacebar to come out of full screen mode and I can duplicate this to frame 24 first let's

make the end frame 24 so we don't have all this wasted space and let's zoom in on that area.

So we've got our walk cycle of 24 frames just there.

Now I can press shift DX to duplicate these key frames and move them all the way across.

Do make sure you have every single bone selected when you do that.

It's a common mistake to make when you have one selected and you only copy the keyframe for that one

bone.

As I was saying earlier, that frame zero and frame 12 are the same but flipped.

Well, we can select all with a and we can right click and copy pose.

So let's control C for short.

We'll go to frame 12 and we can right click and paste flipped.

So X flipped across the x axis, which is one reason why you always model with the x axis going across.

So I'll do that.

Remember to insert the keyframe as well though.

So I to insert the keyframe for location and rotation.

And now when I scrub across my timeline, we've actually got a very basic walk cycle and I can press

play and he looks a bit like he's walking, but we can go further, of course.

So pause the video here and copy your frame zero to frame 24, make sure you have all the bones selected

and then copy and paste the flipped at frame 12.

Okay.

So what about these in-between frames?

Well, let's go across to frame three.

At this point, it's a good idea to have the record button enabled.

And I'll show you one more thing you can do.

Let's take our spine.

One bone.

You can see that I've recorded location and rotation, but if I start using the record button now,

it will record the scale as well, which is pointless and we don't need it and it can clog things up

if we wanted to go to the graph editor or anything like that.

So I'll minimize the spine again.

And under keying where it says Active Keying Set, I can click in that box and change it to only effect

the location and rotation.

Now, with my record button on when I position my bones, it will only record the movement and rotation.

So frame three, the character moves downward slightly.

So let's select that middle bone there and grab in the Z axis and move it down slightly.

Our foot here needs to come down to make sure it's touching the floor and digging into the floor slightly

is absolutely fine.

And this bone we can flatten that out like.

So this one may be a tiny bit of adjustment just to around there.

The arms have a general swing to them anyway, so they're in roughly the right position.

So that looks fine.

I won't duplicate it yet.

I'll go to frame six and do that one.

So the character comes back up slightly, which you will find happens anyway.

So it drops down and then comes back up very slightly, but we can make it come back up a little bit

further than that because there's quite a big dip there as it goes up to frame nine, which is the highest

point.

So somewhere around there, let's sort out the legs a bit more.

So the right leg I'll select in here and it's just back a little bit more, make sure that's on the

floor and then the left leg that's firmly planted on the floor.

So I'll bring that down to here.

Just there should work nicely that all looks about right and then cross to frame nine and that's a similar

height to frame 12, but it's slightly taller.

So let's just jump from frame zero to frame nine and you can see the height doesn't move.

So we need to move it up very slightly.

So G, then Z move it up very slightly to somewhere around there.

Just zoom in on this again.

So the left leg, the back leg, let's position that first.

That's roughly around.

Right.

But we might want to just bring it down a touch more and make sure it's touching the floor or just very

slightly inserted into the floor like this.

And the front foot up a little bit more with a bit of rotation there close to the floor, but not quite

touching.

And notice I'm not exactly the same as this position here.

My foot is slightly above the floor.

This one's almost touching.

Doesn't matter too much.

Don't worry too much about it.

Okay, so I've got my first 12 frames.

Okay, so pause the video and catch up with me animating those first frames up to frame nine.

Now I need to copy these frames and flip them to frame 15.

Now, don't follow along this, but I'll just show you what happens if I select all I can press control

C and then select on frame 15 making sure my mouse is in the three D viewport and then control shift

v to paste.

Now notice, however, that this is key framed every single one because I've pasted the pose for all

my bones, whereas this only has a few bones selected and those are the ones I selected and moved.

So I'm going to undo that to make sure you don't have any problems at all.

I think it's a good idea to go to frame three, let's say, and press eye to insert a keyframe for all

of your bones, just to be absolutely sure you're copying everything to frame 15.

Same with frame six, just press eye and it will insert all those key frames and frame nine and press

eye and insert all those key frames.

So your challenge then is to copy key frame three and place it in key frame 15 as a flipped pose.

The same with frame six and that will be the same as 18 and then frame nine, which will be the same

as 21.

Pause the video and have a go at that.

Okay.

So hopefully you got an okay with that.

I select frame three control.

See, now just be aware if you press control, see within the dope sheet that would have copied everything

that's been selected.

So do make sure you're doing this in the three D viewport.

So control C and then choose frame 15 control shift V.

To paste that frame, you can actually select two key frames in the dope sheet and control C and then

I can go to frame 18 and control shift V to paste the flipped of both those key frames.

But I don't want to overcomplicate things at this stage, so let's play our animation and we've got

a great looking walk cycle.

They're nice and simple, especially when you've got the references and it works really effectively.

So hopefully you got an okay with that.

As always, make sure you've saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Animating the Walk Cycle |
| **Thời lượng** | 13:11 |
| **Chủ đề chính** | Tạo hoạt ảnh đi bộ |

## 1. Mục tiêu bài học

- Hiểu các pha chính (key pose) của một chu kỳ đi bộ: Contact, Down, Passing, Up.
- Biết cách dùng IK Target của chân để giữ bàn chân bám đất tự nhiên trong lúc đi.
- Tạo một animation walk cycle lặp (loop) mượt mà cho Blob Man.
- Làm quen với việc dùng Graph Editor để tinh chỉnh timing giữa các pha đi bộ.

## 2. Nội dung chính

Walk cycle là một trong những bài tập animation kinh điển nhất, dựa trên 4 pha chuyển động lặp lại của mỗi bước chân: Contact (chân chạm đất, cả hai chân đang mở rộng nhất, một trước một sau), Down (trọng tâm cơ thể hạ thấp nhất khi chân chịu lực), Passing (chân chịu lực đứng thẳng, chân kia đang lướt qua ở giữa), và Up (trọng tâm cơ thể nâng cao nhất khi chuẩn bị bước tiếp theo). Bốn pha này lặp lại xen kẽ giữa hai chân để tạo thành một chu kỳ hoàn chỉnh, thường kéo dài khoảng 12-24 frame cho một bước tùy tốc độ đi mong muốn (chậm hơn dùng nhiều frame hơn).

Nhờ đã thiết lập IK ở bài trước, việc animate chân trở nên trực quan hơn nhiều: chỉ cần di chuyển IK Target của bàn chân đến các vị trí Contact tương ứng và chèn keyframe, không cần xoay từng khớp đùi/cẳng chân theo FK. Điều quan trọng là giữ bàn chân đứng yên tại chỗ (không trượt) trong suốt pha chân đang chịu lực trên mặt đất — đây là lỗi phổ biến nhất khi mới tập animate walk cycle (hiện tượng "foot sliding").

Ngoài chuyển động chân, một walk cycle thuyết phục cần thêm các yếu tố phụ: lên xuống của hông/cột sống (hip sway theo phương thẳng đứng, khớp với nhịp Down/Up), xoay nhẹ hông theo phương ngang khi đổi trọng tâm, và chuyển động đối trọng của tay (tay trái vung ra trước khi chân phải bước tới, và ngược lại) để giữ thăng bằng tự nhiên. Sau khi tạo xong một chu kỳ, có thể nhân bản (duplicate) hoặc dùng modifier NLA/Cyclic Extrapolation trong Graph Editor để lặp animation liên tục mà không cần tạo lại từ đầu mỗi bước.

## 3. Quy trình thực hành gợi ý

1. Xác định độ dài một chu kỳ walk (ví dụ 24 frame) và đặt keyframe cho 4 pha chính: Contact, Down, Passing, Up cho từng chân.
2. Dùng IK Target của chân, di chuyển đến vị trí Contact (chân trước/sau) tại các frame tương ứng và chèn keyframe.
3. Animate hông (root/spine bone) lên xuống theo nhịp Down/Up, và xoay nhẹ theo phương ngang.
4. Animate tay vung đối trọng với chân (FK đơn giản là đủ cho tay).
5. Play lại toàn bộ chu kỳ, kiểm tra hiện tượng foot sliding — nếu có, chỉnh lại keyframe IK Target để bàn chân đứng yên đúng lúc chịu lực.
6. Mở Graph Editor để tinh chỉnh timing/easing giữa các pha, đảm bảo chuyển động không đều đều máy móc.
7. Thiết lập lặp animation (duplicate chu kỳ hoặc Cyclic Extrapolation) để xem thử nhân vật đi liên tục nhiều bước.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| `I` | Insert Keyframe cho IK Target hoặc bone hông/tay tại mỗi pha |
| `G` | Di chuyển IK Target đến vị trí Contact/Passing |
| Graph Editor > Channel > Extrapolation Mode > Make Cyclic (F-Modifier) | Lặp animation tự động theo chu kỳ |
| `Shift+D` | Duplicate keyframe/action để nối tiếp chu kỳ đi bộ |
| `Ctrl+Tab` | Vào Pose Mode để animate bone |
| `Spacebar` | Play để kiểm tra toàn bộ walk cycle |

## 5. Lưu ý & lỗi thường gặp

- Foot sliding: bàn chân bị trượt trên mặt đất trong pha chịu lực do keyframe IK Target không giữ đúng vị trí cố định.
- Thiếu chuyển động đối trọng của tay khiến dáng đi trông cứng và thiếu tự nhiên.
- Bỏ qua chuyển động lên xuống của hông (hip sway) làm walk cycle trông như "trượt" thay vì "bước đi".
- Timing đều tuyệt đối giữa các pha (không dùng easing trong Graph Editor) khiến chuyển động trông máy móc, thiếu trọng lượng.
- Chu kỳ nối tiếp không khớp (frame cuối khác frame đầu) gây giật khi animation lặp lại.

## 6. Checklist thực hành

- [ ] Đã xác định và keyframe 4 pha chính (Contact, Down, Passing, Up) cho cả hai chân.
- [ ] Đã kiểm tra và khắc phục hiện tượng foot sliding.
- [ ] Đã animate chuyển động hông lên xuống và tay vung đối trọng.
- [ ] Đã tinh chỉnh timing bằng Graph Editor.
- [ ] Đã thiết lập animation lặp liên tục nhiều bước.

## 7. Tóm tắt

Walk cycle được xây dựng từ 4 pha chuyển động lặp lại (Contact, Down, Passing, Up), kết hợp IK cho chân, chuyển động hông và tay đối trọng để tạo dáng đi tự nhiên. Đây là bài tập tổng hợp toàn bộ kỹ năng rigging và animation đã học trong module.
