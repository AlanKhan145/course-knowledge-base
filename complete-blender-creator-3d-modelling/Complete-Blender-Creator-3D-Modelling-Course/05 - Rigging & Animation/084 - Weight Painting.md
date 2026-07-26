# 084 — Weight Painting
In this lecture, we'll be taking a look at wait painting for our character and we'll be changing a

few of the weights before animating.

Okay, so here's where we got up to last time.

And in order to see our weights, I need to select my body.

But I'm currently in pose mode for my armature, so I'll come out of pose mode into object mode, select

my character and go across to wait painting.

Now this is great.

We can see the influence of this bone down here and you can see the red areas are where that bone has

the most influence across into yellow green and then light blue for the least.

However, I've got no way of selecting these other bones to see their influence.

So if I go back to object mode now and I select my armature first and then shift select my character,

then go into white paint mode and remember I can press control tab to bring up my pie menu.

Go to wait painting.

Now I can hold down control and choose the bones of the armature because I have the armature selected

at the same time.

And this is fantastic because let's say I choose this bone up here, we can see it's got a little bit

of extra weight that it might not need around here.

And we can even test this by rotating the bone inwards.

And you can see it kind of has this gap here, which we probably don't want.

It's a similar case with this bone here, but this is a bit tougher to see because if I press r to rotate,

we can't rotate it because it's part of an IC chain.

So I need to select the control bone at the bottom here.

Now this, if you remember, is the control bone and we turned off deform.

Hence it's not got any influence on the mesh.

The same with our poll target here, but I can still select them in this mode and press G to grab and

pose my model to see what sort of pinching effects are happening up here.

Now, if I go back to this bone again, hold down control and left click, I can see the weights for

that bone.

So I'll leave it in this position for the moment and I'll select this top arm bone first because that's

the easiest to understand.

And again, we can see that gap within here and we want to try and get rid of that or minimize it.

Well, I've got my weight option up here and currently if I paint, which is to hold down left click

and paint on my mesh, you can see it's distorting my mesh because it's trying to attach itself to this

bone for one, but it's also painting weights across my character.

I'll undo that so I can come in here and I can try and paint this area here.

But obviously if I paint now, it will paint a value of one depending on how much I paint on the object.

And that's obviously affecting this badly.

So we don't want that.

We want to actually paint a weight of zero on here so I can change the weight down to zero and then

start painting.

And you can see it's clearing those areas and it's sometimes difficult to say you might want to make

your brush a bit bigger with F and then I can come in here and start painting these.

You may wonder why it's a little bit awkward.

It's because our character is quite low poly and the weights are actually attached to the vertices.

If I go into edit mode with my object, you can see I've only got a few vertices around here.

So those are the things that I'm actually painting.

So back into white painting mode and when I start painting the value of zero up the top here, for example,

it's only affecting that one vertex on the edge.

Let's go round to the back and change this area down here as well.

And if I accidentally go over the arm, I'll show you how I can solve that in a second.

So I'll paint this weight out.

So we've got a kind of pinching going on here, but it looks much better for the lower arm.

So I'm painting those areas.

So they are a dark blue like this.

We can have a little bit of light blue and maybe green around the shoulder.

So it does move inwards with the bone and I can press R to rotate and you can see that final influence

there.

We can see a little bit of influence down here, though.

Have a look at that when I rotate.

So let's take a look around and you can see that tiny bit of light blue there.

So I need to paint that out.

And now when I press rotate and I'll just press the Y so I don't have to move my camera, you can see

it's not influencing it now.

And now I've got my bone rotated up here.

I can change it back to one and make sure this area is fully affected.

So I'll just make my brush a little bit smaller, come around to the back here and make sure that's

all fully affected by this bone.

The other great thing, if I press control left, click on the other side because this is a mirrored

mesh.

Still, if I go to my modifiers, you can see there's my mirror, there's my subdivision surface and

there's my armature as well.

So we've got this stack going on here.

And because it's a mirrored mesh, anything I do on this side will be mirrored to the other side.

Okay, so pause the video here and catch up with me and remember you're selecting the armature and then

the mesh second.

So that's the active object.

Then going into wait paint mode and paint the weights out of the body for that upper arm bone.

So you control left click on the upper arm bone and then you start painting the weights out.

So it's got very little effect on the body.

Pause the video and have a go at that.

Okay.

So hopefully you got an okay with that and you ended up with a similar result as I have here.

It might look slightly different.

It might have a bit of pinching, a bit of distortion.

It doesn't matter too much.

You probably won't notice a lot of it when you're animating.

Now let's go round to the front, and if you haven't already, I'd like you to control click on our

control bone for our foot and move that to a position where it's fairly high in the air like this.

Then I can control, click on the thighbone and start thinking about the weights here.

So I'll bring the weights down to zero and we can see it's affecting very high up here.

So I can get rid of some of that and maybe a little bit down here as well.

So it hasn't got so much influence.

And if I want to test this control, click on the control bone down here.

I'll come around to the front and grab it.

And you can see there's still a bit of a dent in here.

It's better to have a sort of pinching line here, just like a normal person's hip.

So it will control left click on this bone here again and paint some of this out.

Maybe a touch more there, and the width of the dent is slowly being removed.

And we can test to see what it's like when I completely take it out of that area.

It sort of folds over on itself, and that actually seems to work a little bit better.

So probably somewhere around here we don't need this area up here.

So I've taken an awful lot out of this area, but that seems to be working.

Let's go back to the control zone by control left clicking and move that around.

And yes, the mesh does pinch over itself, but that kind of works, I think, for this model.

And let's look at the back that seems to be working well as well.

So I'll control left click on that so you can see my results there.

So your challenge then is to complete the weight for the upper thigh bone here, pause the video and

have a go at that.

Okay.

So hopefully got an okay with that.

Once again, it doesn't matter too much if you've got a bit of pinching or dents in your mesh, it won't

detract too much from the final animation.

Let's just go through and check some of these other bones.

This is our base bone and if I move that, the whole mesh moves apart from the control bones.

Because remember, they were unpainted from our mesh.

This is really handy because they'll stick to the floor and we can move our mesh up and down.

And I can go through each of these and I can simply see that they look fairly good and the distortion

is working well.

Good.

Check the arms as well.

A bit of bend there.

A bit of bend in the hand.

That's all working fine.

Now to reset my post position, I can select all with a and alt R to reset the rotation and g to reset

any movement.

And we're back to the start here.

So finally, reset your pose with alt and alt g and of course make sure you've saved your work ready

for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Weight Painting |
| **Thời lượng** | 7:31 |
| **Chủ đề chính** | Gán trọng số bằng Weight Painting |

## 1. Mục tiêu bài học

- Hiểu Weight Painting là gì và mối quan hệ giữa Vertex Group và Armature deform.
- Biết cách vào Weight Paint mode và đọc thang màu trọng số (xanh dương = 0, đỏ = 1).
- Biết cách dùng cọ vẽ (brush) để tinh chỉnh trọng số ở vùng biến dạng sai sau Automatic Weights.
- Nắm được các công cụ hỗ trợ: Blend, Add, Subtract, và giá trị Weight cụ thể.

## 2. Nội dung chính

Weight Painting là quá trình xác định mức độ ảnh hưởng (trọng số, weight, giá trị từ 0 đến 1) của mỗi bone lên từng vertex của mesh. Trọng số này được lưu trong Vertex Group — mỗi bone tương ứng với một Vertex Group cùng tên, và giá trị weight của một vertex trong group đó quyết định vertex bị "kéo theo" bao nhiêu phần trăm khi bone tương ứng chuyển động. Khi Parent bằng Automatic Weights ở bài trước, Blender đã tự tạo các Vertex Group này dựa trên khoảng cách hình học, nhưng kết quả tự động thường không hoàn hảo, đặc biệt ở các vùng giao nhau giữa nhiều bone (nách, háng, cổ).

Trong Weight Paint mode (chuyển từ Object Mode, chọn mesh, vào chế độ Weight Paint), mesh được tô màu theo thang nhiệt: xanh dương biểu thị weight 0 (không bị ảnh hưởng bởi bone đang chọn), đỏ biểu thị weight 1 (ảnh hưởng hoàn toàn), các màu trung gian (xanh lá, vàng, cam) thể hiện giá trị ở giữa. Người dùng chọn một bone trong Pose Mode kết hợp (Weight Paint mode tự động hiển thị Armature liên kết), sau đó dùng cọ vẽ trực tiếp lên mesh để tăng/giảm trọng số cho bone đang active.

Các công cụ vẽ chính gồm: Draw (vẽ thêm weight theo giá trị Weight đã đặt), Blend (pha trộn mượt giữa các giá trị lân cận), Add/Subtract (cộng/trừ nhanh), và Smooth (làm mượt chuyển tiếp trọng số giữa các vùng, tránh biến dạng gấp khúc đột ngột). Một kỹ thuật kiểm tra hiệu quả là bật chế độ xem trước bằng cách vào Pose Mode và xoay thử các bone trong khi vẫn xem mesh ở Weight Paint hoặc bật tùy chọn hiển thị Armature deform trực tiếp, giúp phát hiện ngay vùng nào bị kéo sai.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh Blob Man đã Parent với Armature, vào Weight Paint mode.
2. Trong Pose Mode (hoặc panel liên kết), chọn từng bone lần lượt và quan sát vùng mesh được tô đỏ/xanh tương ứng.
3. Xoay thử một bone (ví dụ upper_arm) ở Pose Mode, quan sát vùng mesh bị kéo sai (ví dụ phần thân bị kéo theo tay).
4. Quay lại Weight Paint, chọn bone gây lỗi, dùng brush Subtract để giảm weight ở vùng không nên bị ảnh hưởng.
5. Dùng brush Add hoặc Blend để tăng weight cho vùng chưa bị ảnh hưởng đủ (ví dụ đầu vai chưa theo đúng bone).
6. Lặp lại kiểm tra bằng cách xoay bone và tinh chỉnh cho đến khi mesh biến dạng tự nhiên ở mọi khớp chính.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| Chuyển Mode dropdown sang "Weight Paint" | Vào chế độ Weight Paint |
| `Ctrl+Click` (trên brush) hoặc phím `+`/`-` | Tăng/giảm nhanh giá trị Weight của brush |
| Tool: Draw / Blend / Add / Subtract / Smooth | Các chế độ cọ vẽ trọng số khác nhau |
| `Shift` (giữ khi vẽ) | Tạm chuyển sang chế độ Smooth/Blend nhanh (brush phụ) |
| `[` / `]` | Giảm/tăng kích thước brush |
| Ctrl+Tab (trong lúc kiểm tra) | Chuyển sang Pose Mode để test chuyển động |

## 5. Lưu ý & lỗi thường gặp

- Vẽ weight khi chưa chọn đúng bone active, khiến trọng số bị gán nhầm cho bone khác.
- Để chuyển tiếp trọng số quá đột ngột (không dùng Smooth) gây gấp khúc mesh tại vùng khớp khi animate.
- Quên kiểm tra vùng đối xứng (tay trái/phải) sau khi chỉnh weight một bên, dẫn đến kết quả không cân đối.
- Chỉ kiểm tra ở Weight Paint mà không thử xoay bone thực tế ở Pose Mode, bỏ sót lỗi biến dạng chỉ xuất hiện khi chuyển động.

## 6. Checklist thực hành

- [ ] Đã vào Weight Paint mode và hiểu thang màu trọng số.
- [ ] Đã kiểm tra biến dạng mesh bằng cách xoay thử từng bone chính.
- [ ] Đã tinh chỉnh weight tại ít nhất một vùng khớp bị lỗi (vai, háng...).
- [ ] Đã dùng Smooth để làm mượt chuyển tiếp trọng số.
- [ ] Đã kiểm tra tính đối xứng của weight giữa hai bên cơ thể.

## 7. Tóm tắt

Weight Painting tinh chỉnh mức độ ảnh hưởng của từng bone lên mesh thông qua Vertex Group, khắc phục các lỗi biến dạng còn sót lại sau Automatic Weights. Đây là bước quyết định chất lượng biến dạng mesh trước khi bước vào animate walk cycle hoàn chỉnh.
