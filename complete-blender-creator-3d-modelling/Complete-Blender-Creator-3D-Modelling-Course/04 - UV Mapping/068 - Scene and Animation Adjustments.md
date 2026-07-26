# 068 — Scene and Animation Adjustments
In this lecture, I'll be giving you the challenge of making a scene like this, and I'll be giving

a rundown of how I made it.

And we'll be looking at how we can extend our animations nice and easily.

So we'll start off by giving you the challenge of making a similar scene to what I've done here.

If you don't feel confident, then do look at my run through, which I'll show you in just a moment.

But it's worth having a go see how you get on.

You will need to grab a few more textures for buildings from textures.

So pause the video here and have a go at that.

So to start with, I wanted to work on the houses, so I decided to move the origin point to the bottom

face so I could scale them up and down nice and easily.

So selecting that bottom and face shift s to get to my cursor menu and cursor to selected and then right

click in object mode origin to 3D cursor.

So now my origin is at the bottom and I can scale them really easily.

So I duplicated one building off to the side.

Just test and I can scale now in the z axis nice and easily move the barrels to the front so they're

not in the way of the extra buildings.

I'm about to create and now create lots of new buildings with different heights.

Now I need to texture them with different textures.

So I selected on a new building and created a new texture based on the old one.

So add new material button just there.

And as I'm starting to build up more objects in the scene, I decided it would be a good idea to label

my original material and the new material.

So back to Building two and I changed the texture to a different texture that I downloaded from textures.

It's much grayer looking, but it seems to work okay.

And I went across to the movie editing workspace and move the front face UVs to a position that looked

like a front of a building.

And I thought about changing the side, but I thought that probably won't be seen.

So didn't worry too much.

Then I linked that with another house with the control l command, and I'll have about three houses

or so to repeat over and over.

And I use the different parts of the texture just to add some variation.

So now it's just a case of going through the houses, deciding what textures I want, maybe reshaping

them, resizing them and moving the front face eaves into position.

Again, I'm not worried about the side faces because they probably won't be seen much.

Here's another texture downloaded from textures.

Our position, the UVs for the front face, but I think it was quite bad so I changed it later on.

Then I created more houses just by duplicating the same ones over and over, and the same with the barrels

just over and over, just for simplicity.

And I organize the position a bit more later on.

Now the floor is far too white, so I change it to a grey color to start off with to see if that would

make a difference and work with my scene.

And then I thought it would be much nicer to actually get a floor material instead.

So I repositioned it to look more like a road.

I could have done a pavement here as well.

I think that would have been nice, but it would take a little bit longer.

And of course, I unwrapped it with you and then set up a new material with an image texture of the

front plugged into the color, then found my floor material.

Made sure that texture was hooked up.

It's a bit stretched, so I needed to change the gloves for this.

I took the gloves and scaled them right up so you can see it repeated over and over and it seems to

be a seamless texture, this one.

So it's quite nice.

So I can't see any repetition.

I scaled the floor up a little bit and reposition my camera to see whether I could cover the scene with

it.

Obviously, I reposition my camera much more later on anyway.

Then I jump across to the shading workspace and to the world tab so I can insert an dry into the background.

If you press control T on the world tab, it will bring up the nodes for you and you can then choose

your dry.

I chose the basic outdoor tree from Polly Haven and it was a bit bright, the first one.

So I changed it to a less bright one.

I did turn on the screen space reflections at this point just to see if that would make any difference.

But I chose a much less bright try and deleted the light in the scene.

And at this point I thought I'd experiment with some camera positions and building positions.

So I duplicated all my buildings and put them across the other side and then made a kind of windy street

like you'd expect to see in an old town.

Then I moved my whole town across so the plane would fly over the top.

It's easier to move the town than it is the plane because that's got some animation on it.

Then I went across the animation workspace because it's easier to see where my camera is and I move

that into a position that I was comfortable with.

Checked my animation was roughly working okay and it looks fairly good going across the houses like

this and then move some of my barrels into position.

Of course, if you've got some crates, you can move those into position as well.

But hopefully from this you'll get the idea of how you can create the scene than I did here.

So I've got my far more interesting scene completed now, but it would be nice if the animation was

a tiny bit longer and the plane started further back, so it flew right over the houses.

So if I come to the start again and select my plane controller, I want to change this keyframe for

that.

It's fairly simple.

I can just move this back in the why.

So gee, then why move this right back over to here out of shot so quite far back there and I to insert

keyframe on the location of rotation to make my animation longer I can extend it to maybe 4 seconds

so 100 frames and my end keyframe here that's still with the plane controller selected I can just press

G to grab to move that across to frame 100.

Now let's see what that looks like.

It comes from a distance there, but my propeller stops at frame 50, as you can see there.

So I need to change that.

But the plane position is correct.

So I just zoom in a touch and select the plane propeller controller and you can see my two key frames

there.

I just need to extend this all the way to the end here.

So now when I press play, we should see a plane flying over our scene like this.

So your challenge then is to make any changes that you feel are necessary to your scene, experiment

with different camera positions and different house positions, and change the length of your animation

from 2 seconds to 4 seconds.

And once you've done that, make sure you saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Scene and Animation Adjustments |
| **Thời lượng** | 6:06 |
| **Chủ đề chính** | Điều chỉnh scene và tốc độ animation |

## 1. Mục tiêu bài học
- Tinh chỉnh Frame Range và Frame Rate của Scene cho phù hợp với độ dài animation mong muốn.
- Điều chỉnh timing (khoảng cách giữa các keyframe) để chuyển động bay tự nhiên hơn.
- Sử dụng Graph Editor để làm mượt (ease) chuyển động thay vì tốc độ đều máy móc.
- Rà soát và dọn dẹp scene tổng thể (ánh sáng tạm, object thừa) trước khi sang bước lighting.

## 2. Nội dung chính
Sau khi đã có animation cơ bản, bước điều chỉnh giúp chuyển động trông tự nhiên và scene sẵn sàng cho việc render. Các thông số Scene quan trọng nằm trong **Output Properties**:
- **Frame Start / Frame End:** xác định đoạn animation sẽ được render, cần khớp với thời điểm bắt đầu và kết thúc chuyển động đã keyframe.
- **Frame Rate (FPS):** thường đặt 24, 25 hoặc 30 fps tùy chuẩn mong muốn; thay đổi FPS sau khi đã keyframe có thể làm animation nhanh/chậm hơn dự kiến vì số frame giữa các keyframe không đổi nhưng thời gian thực tế mỗi frame chiếm sẽ khác.

Về timing animation, khoảng cách (số frame) giữa các keyframe quyết định tốc độ cảm nhận: khoảng cách gần tạo chuyển động nhanh/gấp, khoảng cách xa tạo chuyển động chậm/êm. Việc dời (move) keyframe trên Timeline hoặc Dope Sheet là cách nhanh để chỉnh timing tổng thể mà không cần đổi giá trị transform.

Trong Graph Editor, dùng **Easing** (thông qua handle của Bezier interpolation, hoặc Easing Type: Ease In, Ease Out, Ease In-Out) để mô phỏng quán tính vật lý — ví dụ máy bay tăng tốc từ từ khi bắt đầu bay thay vì đạt vận tốc tối đa ngay lập tức. Đây là điểm khác biệt so với animation propeller ở bài trước vốn cần Linear để quay đều.

Trước khi chuyển sang lighting, cũng nên rà soát lại toàn bộ scene: xóa các object/light tạm dùng để test, kiểm tra Collection nào cần ẩn khi render (Reference Images không nên xuất hiện trong render), và xác nhận Camera đã được đặt/keyframe theo góc nhìn mong muốn nếu animation có di chuyển camera.

## 3. Quy trình thực hành gợi ý
1. Vào Output Properties, đặt Frame Start/End khớp với đoạn animation đã tạo, chọn Frame Rate phù hợp.
2. Mở Dope Sheet hoặc Graph Editor, rà soát toàn bộ keyframe, dời lại vị trí một số keyframe để điều chỉnh nhịp độ chuyển động.
3. Chọn các keyframe chuyển động bay (không phải propeller), thử đổi Easing (Ease In/Out) để tạo cảm giác tăng/giảm tốc tự nhiên.
4. Play lại animation nhiều lần, quan sát và tinh chỉnh cho tới khi chuyển động cảm thấy hợp lý.
5. Rà soát Outliner, ẩn khỏi render (icon camera) các Reference Image hoặc object phụ trợ không cần xuất hiện.
6. Kiểm tra và điều chỉnh vị trí/animation Camera nếu scene có camera chuyển động theo máy bay.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `G` (trong Dope Sheet/Graph Editor) | Di chuyển keyframe đã chọn theo thời gian |
| `T` | Đổi Interpolation Mode cho keyframe đã chọn |
| `Shift+E` (trong Graph Editor) | Đổi Easing Type (Ease In/Out/In-Out) |
| `Home` | Frame All trong Timeline/Dope Sheet/Graph Editor |
| Camera icon (Outliner) | Bật/tắt hiển thị object khi render (Disable in Renders) |

## 5. Lưu ý & lỗi thường gặp
- Đổi Frame Rate sau khi đã keyframe mà không kiểm tra lại có thể làm animation trông nhanh hoặc chậm hơn dự tính ban đầu.
- Áp Easing cho cả animation propeller khiến tốc độ quay không đều, gây cảm giác giật thay vì quay liên tục mượt mà.
- Quên ẩn Reference Image khỏi render khiến ảnh tham chiếu xuất hiện trong kết quả render cuối cùng.
- Không kiểm tra lại toàn bộ animation sau khi dời keyframe, dễ bỏ sót đoạn chuyển động bị lệch thời điểm so với các phần khác.

## 6. Checklist thực hành
- [ ] Đã đặt Frame Start/End và Frame Rate phù hợp với animation.
- [ ] Đã tinh chỉnh timing giữa các keyframe cho chuyển động bay tự nhiên hơn.
- [ ] Đã áp Easing hợp lý cho chuyển động bay (khác với Linear của propeller).
- [ ] Đã ẩn các object phụ trợ (Reference Image...) khỏi render.

## 7. Tóm tắt
Bài học tinh chỉnh timing, frame rate và easing để animation máy bay trông tự nhiên hơn, đồng thời dọn dẹp scene tổng thể — bước chuyển tiếp cần thiết trước khi thiết lập ánh sáng HDRI và render animation ở các bài cuối module.
