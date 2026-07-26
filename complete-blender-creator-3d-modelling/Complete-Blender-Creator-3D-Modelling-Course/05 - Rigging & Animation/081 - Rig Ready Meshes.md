# 081 — Rig Ready Meshes
 In this lecture, we'll be getting our mesh ready for rigging, and I'll be talking a little bit about

topology and deformation.

Okay, so here's where we got up to last time and our characters looking nice, but there's a few adjustments

that would help us before we make our skeleton and rig our character.

So it deforms a little bit better in order to illustrate the point about how the deformation can be

affected by the topology.

So not only the amount of faces, edges and vertices, but their positioning as well.

I've got two objects in my scene and incidentally, if I select one of these objects and go to the object

properties under viewport visibility, I've set it to wireframe so you can actually see the edges whilst

in object mode.

And I have one object with one loop cut around the middle and one object with three loop cuts around

the middle.

I've also got two images, so this could be something like an elbow joint or something along those lines

with the first one.

If I select that armature and go into post mode and press R, then X to rotate around the x axis and

bring that down.

You can see the result to the topology there.

I'll just turn the overlays off so it hides the bones.

In the second one when I rotate this one by the x axis and let's hide the bones, you can see it deforms

a lot more nicely because it's got that extra topology around the joint.

Now, if I put a subdivision surface modifier on both of these.

And again turn the overlays off.

It's interesting to see the difference.

You still get a much cleaner deformation when we have that extra topology around the joint, then you

do the single.

So the base topology before the subdivision surface modifier is applied does make a big difference.

So let's head back to our character now and I'll go to the front view and into edit mode with our character

and I'll go to x ray mode.

I'll zoom in just to touch and on the side here as well.

Now there's areas of bend.

So the elbow joint, for example, if we've only got one loop cut around there, it's not going to bend

as well.

However, if I press control B to bevel this and use my will to create an extra loop cut in there,

we've now got three loop cuts and that should help the deformation work well.

I'll come back to front view.

We can do the same for the loop around the wrist.

So control B to Bevel.

And again, we can create three cuts.

You don't always need three.

And there's often clever ways of making the topology work without three loop cuts.

But it is nice and simple.

So back to front view.

We can do the same for the shoulder, but we can actually just put an extra loop cut in here because

it's got one either side.

So control R2, the loop cut and double click to put that in the middle there for the neck and the waist.

I think we're okay.

We've got a fair bit of topology around there for the hip joint.

We could do with an extra loop cut in here.

So control R and bring that up into here.

You can have three for this.

But in the case of the hip, you do get a lot of pinching anyway.

So two should be fine and you'll see the results of this in a moment.

I think it's preferable to put the hip a little bit higher here and maybe bring this one down slightly

to create a touch more space, and then we can tidy these areas up around here.

Our character is a bit androgynous at the moment, so if I want it to be male, then I'll bring the

hips in a bit more female.

They'll just come out slightly more.

Male anatomy is slightly easier for beginners, so I'll just bring it in slightly.

Lastly, we've got the knee and the ankle, so I want you to pause the video here and catch up with

me creating these extra loop cuts.

And I want you to do the same for the knee and the ankle.

Remember, though, that the ankle already has two.

So take that into consideration.

Pause the video and have a go at that.

So hopefully that made sense.

We can select the loop for the knee and control B to Bevel and we've got our three loop cuts there and

we can press control R for the ankle to create three loop cuts there.

Now, our character is very simple.

It hasn't got a thumb or fingers and it hasn't actually got any toes, although there is a loop cut

there for it.

But we're not going to bend the toes just for the sake of simplicity as this is a beginners course.

But if I were going to, I would think about the amount of loop cuts there and on the fingers as well.

But what we've got here should work nicely.

There is one other aspect though.

At the moment it's in a tee pose, so it looks like the letter T coming up here and out here.

Now this is fine and lots of characters are made like this and rigged in this way.

However, I find an A pose is a little bit better, especially for beginners, because the deformation

is kind of easier to control.

So I'll select my entire arm.

I'll make my three D cursor to this point here because then I can rotate around the three D cursor and

bring the arm down to here.

So I'll choose the 3D cursor here R to rotate and bring it down.

So it looks more like an A now hence in a frame.

And at this point I can tidy up the topology a little bit so there's less pinching under the arm, so

it will rig it a little bit better.

So I'll move into the shoulder joint and select these, bring them across slightly.

This one here, bring it up and these here and bring it out.

I'll just be a little bit careful.

There's no overlap, so something like this looks quite nice.

I just want to make one tiny adjustment and bring that back and bring these up slightly.

So the chest is sticking out, but the top of the neck isn't sticking out too much.

Let's go to solid mode just to check on what we've got there and back to object mode and make sure that

looks okay.

It is sometimes helpful to have a slight bend at the arm so we can see our topology when we're rigging.

So that's the last thing we do.

Back into edit mode and I will select these.

Let's go back to x ray mode and select them again.

And in the side view I can just bring them back g then x like this and that works well back to solid

mode, back to object mode.

And this is what we've got.

Okay.

So in the next lecture, we'll set up the armature and the skeleton.

But for now, make sure you've caught up with me just making those minor adjustments to the mesh as

I've done here.

And of course, once you've done that, make sure you've saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Rig Ready Meshes |
| **Thời lượng** | 5:53 |
| **Chủ đề chính** | Chuẩn bị mesh cho rigging |

## 1. Mục tiêu bài học

- Hiểu các tiêu chí để một mesh được coi là "sẵn sàng cho rigging" (rig-ready).
- Biết cách Apply Transform (Location, Rotation, Scale) trước khi rig.
- Biết cách Apply các modifier không cần giữ lại dưới dạng non-destructive.
- Kiểm tra và dọn dẹp mesh: normal, vertex trùng, n-gon bất thường.

## 2. Nội dung chính

Trước khi gắn Armature vào một mesh, có một số bước dọn dẹp kỹ thuật quan trọng để đảm bảo rigging và animate sau này hoạt động chính xác. Đầu tiên và quan trọng nhất là Apply Transform: object nên có Location tại gốc tọa độ hợp lý, Rotation bằng 0 và Scale bằng 1 (Object > Apply > All Transforms, hoặc Ctrl+A). Nếu scale của object khác 1 (ví dụ object bị scale 0.5 trong Object Mode mà chưa Apply), Armature và các bone parent vào sẽ tính toán sai tỉ lệ, gây ra hiện tượng mesh biến dạng bất thường khi animate.

Thứ hai, cần quyết định modifier nào giữ lại dưới dạng non-destructive (ví dụ Subdivision Surface thường giữ lại vì không ảnh hưởng đến rigging) và modifier nào cần Apply thành mesh thật trước khi rig (ví dụ Mirror, Solidify — vì Weight Paint và Armature deform cần tác động trực tiếp lên geometry cuối cùng). Giữ Mirror modifier chưa Apply đôi khi vẫn hoạt động được với rigging đối xứng, nhưng thường phức tạp hơn cho người mới, nên khóa học khuyến khích Apply trước khi rig để đơn giản hóa quy trình.

Cuối cùng, nên kiểm tra tổng thể mesh: xóa vertex trùng lặp (Merge by Distance), đảm bảo normal hướng ra ngoài đồng nhất (Recalculate Normals, Shift+N), và tránh n-gon hoặc geometry lỗi có thể gây méo khi Weight Paint. Một mesh sạch giúp quá trình gán Vertex Group và Weight Paint ở các bài sau diễn ra suôn sẻ hơn rất nhiều.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh Blob Man, vào Object > Apply > All Transforms (hoặc Ctrl+A > All Transforms).
2. Kiểm tra Properties panel (N) xác nhận Location/Rotation = 0, Scale = 1.
3. Quyết định Apply các modifier cần thiết (ví dụ Mirror) trong Modifier Properties.
4. Vào Edit Mode, chọn tất cả (A), dùng Mesh > Clean Up > Merge by Distance để loại bỏ vertex trùng.
5. Recalculate Normals (Shift+N) để đảm bảo normal đồng nhất hướng ra ngoài.
6. Kiểm tra lại mesh bằng chế độ hiển thị Face Orientation (tùy chọn) để phát hiện normal bị lật.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+A` | Apply Transform (Location/Rotation/Scale/All Transforms) |
| `M` (Edit Mode) | Merge menu, chọn "By Distance" để gộp vertex trùng |
| `Shift+N` | Recalculate Normals (Outside) |
| `Alt+N` | Menu xử lý Normal nâng cao (Flip, Recalculate Inside...) |
| `A` | Chọn tất cả geometry trong Edit Mode |

## 5. Lưu ý & lỗi thường gặp

- Quên Apply Scale khiến Armature biến dạng mesh không đúng tỉ lệ khi Parent hoặc animate.
- Giữ lại modifier Mirror chưa Apply trong khi Weight Paint theo cách không đối xứng, gây kết quả khó kiểm soát.
- Bỏ qua bước Merge by Distance khiến vertex trùng lặp gây lỗi shading hoặc rách mesh khi biến dạng.
- Không kiểm tra Normal trước khi rig, dẫn đến các mặt bị lật tối màu bất thường sau khi animate.

## 6. Checklist thực hành

- [ ] Đã Apply toàn bộ Transform của mesh Blob Man.
- [ ] Đã quyết định và Apply các modifier cần thiết trước khi rig.
- [ ] Đã chạy Merge by Distance để dọn vertex trùng.
- [ ] Đã Recalculate Normals cho toàn bộ mesh.

## 7. Tóm tắt

Một mesh "rig-ready" cần có Transform sạch (Scale = 1, Rotation = 0), modifier đã được xử lý phù hợp, và geometry không lỗi (không vertex trùng, normal đồng nhất). Bước chuẩn bị này tuy nhỏ nhưng quyết định rất nhiều đến độ ổn định của rig ở các bước tiếp theo.
