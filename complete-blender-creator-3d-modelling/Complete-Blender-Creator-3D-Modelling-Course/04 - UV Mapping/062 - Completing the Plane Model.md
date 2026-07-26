# 062 — Completing the Plane Model
In this lecture, we're going to complete the model of our plane, modeling the propellers at the front

and the cockpit.

So here's where we got up to last time.

And in order to make the front propeller, I'm going to select the plane, go into edit mode, come

around to the front here, go to vertex mode with one, select that front, vertex and press shift.

S So this is my cursor menu and I can select cursor to selected that brings my 3D cursor right on top

of that vertex there.

So now I can go back into object mode, shift eight and mesh and then cylinder, not a cone.

And in fact I very, very rarely use a cone, a cylinders always a little bit better because of the

topology.

So cylinder it is across to the add cylinder options and I'll change the verts to eight so it's nice

and low poly.

Let's zoom in on that a bit oh x 90 scale it down and let's go to top view so I can see the propeller

nice and easily zoom in a touch and g then y move it.

So it's slightly overlapping my plane there.

Just quickly see how that's looking.

The plane's not completely circular, so I'll just scale it down a touch more so it doesn't overlap

in a strange way.

Somewhere around there looks good.

Let's get a side for you.

And now my plane is very slightly out, so I'll just select on the plane.

Let's get to wireframe and just scale this end up slightly.

Then with my cylinder, scale that up slightly.

And that's about right.

Maybe just down a touch.

So G then Z.

There we go.

That looks about right back to side for you and into edit mode.

Let's select these end edges here.

Remember I'm in x ray mode so I can select the ones in the background as well and I'll scale those down

and G then Y to move them forwards.

There's a bit of a curve to this.

So control R to do a couple of loop cuts, I think.

So using the wheel of my mouse to create to and scale those up but shift y so they don't expand in the

y axis.

Somewhere about there looks good into object mode out of wireframe.

Let's just check that and that looks nice.

So pause the video and catch it with me creating that front nose using a cylinder in the same way as

I've done here.

So what about the propeller?

Well, let's go to front for you for that.

And again, into x ray mode so I can see one of my propellers on my reference image.

And for the propeller, I'm going to use a plane.

So shift to add mesh and then plane x 90 to rotate it around the x axis 90 degrees, scale it down and

just move it to this first part just here.

So scale it down, just a touch more.

I'll zoom in on that and into edit mode and let's just copy the shape of the propeller.

So G then Z to move that down, select these to E to extrude upwards and scale out E to extrude again

and scale in and E to extrude again up to the top here and scale it right down.

So we've got a really basic propeller shape like this.

So pause the video here and catch up with me and create your propeller out of a plane.

Now to add thickness to this there's a nice modifier.

So across the modifiers with the spanner or wrench icon, they're add modifier and it's under generate

solidify.

So I'll just zoom in on this for a moment so you can see the results and let's go into object mode and

G then Y to move it forward to stop that overlap that was happening there.

Now the thickness is the main parameter that we need to change.

And if I make that thicker and thinner, you can see that happening there.

This is probably easier to see without x ray mode on.

So I'll just turn that off so you can see the thickness that's happening just there.

Most of the other parameters here don't really need to worry about the offset is kind of the direction

in which it goes.

So if I change this to one, the thickness now comes out of the front sort of thing and to zero it comes

out of the back like this.

So if I set this to a zero, it will come out both sides.

Now, one thing to note, this thickness of 0.35 meters suggest that the thickness should be 30 centimetres.

If I press in and go to item, we can see that the object dimensions is a little bit confusing because

remember I've rotated it 90 degrees, but we can see the width and the height there being 14 centimetres

and 50 centimetres roughly.

So the thickness certainly isn't 35, otherwise it would be out here somewhere.

Well, that's because it's thinking about my scale.

So the scale is way down below one.

Therefore this is 35 centimetres and then this scale is applied to it.

So if I press control a and apply my scale, you can see now that looks more like 35 centimetres.

So just a quick reminder there about the idea of applying your scale so that these measurements are

therefore correct.

So I'll come across to the thickness and bring that right down to somewhere about 0.02, which makes

a bit more sense.

Okay, so pause the video here and add your solidify modifier to your plane to give it some thickness.

Now, the great thing about this modifier is that if I go into edit mode again and let's turn on x ray

mode so I can easily see it, anything I do to this, any edits I make, let's say I want to smooth

this out a bit, so I'll go into edge mode, select these two edges and control B to Bevel.

So it's nice and smooth and rounded.

You can see that it's still got the solidified modifier on and it's still adding that thickness, but

it was nice and simple for me to make those changes.

How about getting that kind of twist that propellers have?

Well, if I select, let's say the top three edges go to proportional edit and R then said we can easily

add a little bit of twist to our propeller.

It's probably a little bit too much.

So our then said, let's go back a little bit, just about there.

So we created an interesting looking propeller, nice and easily just using this simple plane, which

we can see here.

So pause the video here and add a bit of twist to your propeller.

Okay.

Lastly, I need to repeat this a couple of times.

I'll just move it into position.

So into object mode G then Y to move that forward slightly, let's line it up with side view.

So just a bit further forward, just around there, that looks great.

Okay.

Now to front view and my 3D cursor is in the middle of that front nose there.

So I can use that as my transform pivot point.

And when I rotate, I should be able to rotate around it 120 degrees and they should be positioned perfectly

for this.

I'm going to press alt dx to create a linked duplicate so any changes I make will update on all of them

then are 120 and that seems to have worked.

So press enter and I can press shift r to repeat last and that's round across to the other one.

And remember, if I make any changes to one of these, so let's say scale this up.

It's scaling them all up.

It's a bit weird because I've got proportional let it on and it's going by the 3D cursor.

I'll undo that.

I'll turn proportion, let it off so that doesn't confuse and I'll turn the transform pivot point back

to the medium point and back into object mode and let's see how we're getting on turn x way off and

our planes looking pretty good.

So pause the video here and duplicate your single propeller so that you've then got three.

Okay.

So the last thing for me to add is the cockpit.

That's nice and simple.

It's a completely separate object that overlaps the plane.

So a challenge to you is to have a go at modeling that yourself.

Don't panic if you don't feel comfortable, just make sure you've saved your work.

Have a go, see how you get on.

And if it goes wrong, just follow along with me in a moment.

So pause the video and have a go at that.

Okay.

So let's go to Side View.

Move my 3-D cursor into position shift eight, add mesh and then cube scale that right down to somewhere

around about here.

Let's go into X-ray view now and zoom in now.

It's a symmetrical object, so we could add a mirror to this.

So let's come round to the front here, go to the edit options and there's auto mirror there in the

x axis.

Incidentally, positive is the default.

So the positive x is the one here.

So when I press auto mirror and go into edit mode, it's this side that we can edit.

So it deletes the other side and that's the mirror.

So I press end to get rid of that panel.

And remember the auto mirror has clipping enabled automatically and also it mirrors around your object

origin.

Okay, so back to side view into edit mode and let's just line this up.

That one there, that one roughly there these.

So I can press E to extrude and G to grab to move it down.

And these ones, it looks like I can just bring that out like this.

I just sort the bottom out as well.

So it's level not that it makes a huge amount of difference because it's overlapping.

So there's the rough shape, but it's not quite overlapping completely.

So I'm just going to go off the references slightly and just G then said to move that down to make sure

it is fully overlapping my plane.

The top verse here.

I can select those.

And jiggy to edge slide across there and Gigi to edge slide down.

I'm just going to Gigi and slide it down a bit more because of that overlap slightly there.

And this edge here, jig to edge slide across.

And that's a nice, simple cockpit that we've got there.

Let's come out of X-ray mode so you can see the results of that.

It's nice and simple and seems to work quite well.

Okay.

So hopefully you got an okay with that and you've now completed your plane.

As always, do make sure you've saved your work ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Completing the Plane Model |
| **Thời lượng** | 9:32 |
| **Chủ đề chính** | Hoàn thiện mô hình máy bay |

## 1. Mục tiêu bài học
- Bổ sung các chi tiết còn thiếu của máy bay: đuôi (tail fin), cánh đuôi ngang (horizontal stabilizer), propeller/động cơ, kính buồng lái.
- Dọn dẹp mesh: merge vertex trùng, xóa mặt thừa, kiểm tra và sửa normal.
- Áp dụng (Apply) các modifier cần thiết khi mô hình đã hoàn chỉnh về hình khối.
- Kiểm tra tổng thể mô hình từ nhiều góc nhìn trước khi chuyển sang bước UV unwrap.

## 2. Nội dung chính
Sau khi đã có thân và cánh chính, bước hoàn thiện mô hình bao gồm thêm các chi tiết còn lại: đuôi đứng (vertical stabilizer/tail fin), đuôi ngang (horizontal stabilizer), propeller hoặc động cơ, và các chi tiết nhỏ như kính buồng lái, bánh đáp (landing gear) nếu dự án yêu cầu. Các bộ phận này thường được dựng bằng kỹ thuật tương tự cánh chính: extrude, scale thon dần, thêm độ dày bằng Solidify Modifier.

Trước khi chuyển sang bước UV mapping, việc dọn dẹp mesh (mesh cleanup) rất quan trọng:
- **Merge by Distance** (`M → By Distance` trong Edit Mode): gộp các vertex trùng hoặc quá gần nhau, thường phát sinh sau nhiều lần extrude/bridge/mirror.
- **Recalculate Normals** (`Shift+N`): đảm bảo tất cả pháp tuyến hướng ra ngoài đồng nhất; có thể bật Overlay → Face Orientation (xanh = đúng hướng, đỏ = sai hướng) để kiểm tra trực quan.
- Xóa các face/vertex thừa không sử dụng (loose geometry), kiểm tra bằng `Select → Select All by Trait → Non Manifold` để phát hiện lỗi topology.
- **Apply Modifier**: khi hình khối đã ưng ý, cân nhắc Apply Mirror Modifier (và các modifier khác như Solidify nếu không cần chỉnh sửa thêm) để "đóng băng" hình dạng cuối cùng, thuận tiện cho UV unwrap ở bài sau — vì UV thường được tạo trên mesh thực tế, không phải trên kết quả ảo của modifier.

Trước khi kết thúc, nên xoay mô hình toàn bộ 360°, kiểm tra ở chế độ Shading Solid và Material Preview, để phát hiện các lỗi hình khối, khe hở hoặc chi tiết chưa cân đối.

## 3. Quy trình thực hành gợi ý
1. Thêm các chi tiết còn thiếu: đuôi đứng, đuôi ngang, propeller, kính buồng lái... bằng extrude/inset tương tự các bước trước.
2. Ở Edit Mode, chọn toàn bộ mesh (`A`), chạy `M → By Distance` để gộp vertex trùng.
3. Chạy `Shift+N` để chuẩn hóa normal; bật Face Orientation overlay để kiểm tra trực quan.
4. Rà soát các phần rời rạc (loose geometry) và xóa nếu không cần thiết.
5. Khi hài lòng với hình khối, vào Object Mode, Apply các modifier cần thiết (Mirror, Solidify...) qua Modifier Properties.
6. Xoay mô hình 360° ở chế độ Material Preview để kiểm tra tổng thể trước khi chuyển sang unwrap.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `M` | Merge menu (By Distance, At Center...) |
| `Shift+N` | Recalculate Normals Outside |
| `Alt+N` | Mở menu Normals nâng cao (Flip, Recalculate Inside...) |
| `Ctrl+A` | Apply menu (Apply Modifier khi trỏ chuột vào modifier, hoặc Apply transform ở Object Mode) |
| `Z` | Pie menu chuyển Shading (Wireframe/Solid/Material Preview/Rendered) |

## 5. Lưu ý & lỗi thường gặp
- Apply Mirror Modifier quá sớm, trước khi hình khối hoàn chỉnh, khiến mọi chỉnh sửa sau đó phải làm thủ công trên cả hai bên thay vì tự động đối xứng.
- Không chạy Merge by Distance để lại các vertex trùng gây lỗi khi unwrap hoặc shading (bóng đổ loang lổ).
- Bỏ qua kiểm tra normal khiến một số mặt hiển thị tối/trong suốt bất thường khi render bằng Cycles hoặc Eevee.
- Thêm quá nhiều chi tiết nhỏ (rivet, ốc vít...) làm tăng số lượng polygon không cần thiết cho một mô hình học tập cơ bản.

## 6. Checklist thực hành
- [ ] Đã thêm đầy đủ các chi tiết còn thiếu: đuôi, propeller, kính buồng lái.
- [ ] Đã chạy Merge by Distance và Recalculate Normals trên toàn bộ mesh.
- [ ] Đã Apply các modifier cần thiết khi hình khối đã hoàn chỉnh.
- [ ] Đã kiểm tra mô hình từ nhiều góc nhìn, không còn khe hở hoặc lỗi hình khối rõ rệt.

## 7. Tóm tắt
Bài học hoàn thiện mô hình máy bay bằng cách bổ sung các chi tiết còn thiếu và dọn dẹp mesh kỹ lưỡng — bước chuẩn bị bắt buộc để đảm bảo quá trình UV unwrap và texturing ở các bài tiếp theo diễn ra suôn sẻ, không phát sinh lỗi từ hình học.
