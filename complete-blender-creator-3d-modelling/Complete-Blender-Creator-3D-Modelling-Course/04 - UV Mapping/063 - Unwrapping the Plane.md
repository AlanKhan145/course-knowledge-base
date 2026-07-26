# 063 — Unwrapping the Plane
In this lecture will be unwrapping the body of the plane so we can place a spitfire texture onto it.

Okay, so here's where we got up to last time.

So I select the body of my plane and go into edit mode.

Now, in order to edit UVs, it's nice to be in the movie editing workspace, so I'll jump across to

there, zoom in on that space and zoom in on my airplane.

Now it can be a bit daunting unwrapping complex objects, but as always, we take the main object and

we break it down into separate pieces.

In this case, the main wings, the tail wing and the body can be three separate islands.

Now, it's worth also mentioning that we have a mirror, and when you unwrap with the mirror modifier,

the exact same thing is happening on the other side.

So if I do any marking of seams or anything like that, that will be copied to the other side.

Also, when I unwrap this science, UVs will be in exactly the same position as the mirrored side.

Just bear that in mind.

It may not make complete sense, but I'll show you what I mean in a moment.

So let's come around to the side here and think about where we need the seams to go.

So I'm in edge mode at the moment and I'm going to select the edges between my wing and the body of

the plane.

Then I can press control e mark seems.

Now we can unwrap parts of the model separately so I can press L over the wing and that selects the

linked by the seams.

So if I just open up this dialog box here, you can see that Seams is selected.

So it's selecting this island, as it were, that's broken off from the main body by this seam.

With all that selected, I can press you to unwrap and unwrap and just unwrap the wing.

Now it's not working because it's as if someone has squashed it from here and flattened it out.

So we need another seam to break this in half.

So I'll select the edges coming around the bottom here and again control e mark seams.

Remember you can right click and mark seams as well.

Now when I press l it will only select the bottom.

I need to select the top part of the wing as well.

So Press L again and that adds to my selection.

So the whole wing is now selected you to unwrap and unwrap and we can see the top half of my wing here

and the bottom half there.

Also, remember that this wing is being unwrapped as well and it's in exactly the same position.

So any texture I add here will look exactly the same on the other side.

Again, you'll see that in detail later on.

So pause the video here and catch up with me and unwrap the main wing.

Remember to mark the seams around where it connects to the body and separate the top from the bottom.

Pause the video and have a go at that.

Now I want to give you a small challenge of unwrapping the back tail wing, pause the video and have

a go at that.

Okay.

So if I select a part of it and press period, kill my numpad, I can zoom in on that area and now I

can select these edges going around here.

Right click Mark Sims and let's separate the top from the bottom by selecting these around here.

Now it's worth mentioning that I pressed alt left click to select this edge loop, but it also goes

across here and we don't need these selected here or here.

So I'll deselect those and this time right click mark themes.

So I've separated those out.

I can now deselect all with alt a l select the top and l select the bottom as well and you to unwrap.

And there they are, unwrap there.

So we know that's working well.

So let's zoom out and think about the body.

Now, it may be that we can unwrap the whole of the body as one, so alt eight select all l to select

the body you to unwrap and unwrap.

And that looks fairly decent.

If we take a look at something like the front here, we can see it sort of goes around the corner,

but it squashed it out reasonably well.

So that's quite successful.

Let's select all now and see how it's unwrapped.

Looks a bit strange because it's all on top of each other, but we can easily with it all selected to

another unwrap so you to unwrap and unwrap and it's placed them into position.

But I have got an error message down the bottom here saying object has non-uniform scale, so I must

have scaled my object at some point.

So it'd be a good idea to go back into object mode, control a, set my scale back into edit mode and

unwrap once again.

Very slight difference there, but it's always worth doing that so you get a better unwrap.

Okay, so pause the video and catch it with me and select all your plane and unwrap it.

You should end up with something similar to what I've got here.

Pause the video and have a go at that.

Now, if for any reason you didn't end up with the same as I have here, let's say, for example, that

this particular edge here, if I press control a and clear seam and then select all and unwrap, you

can see that it's tried to add the wing, which is actually this tiny section here to the whole of the

body, and it's gone completely wrong.

So I'll undo those steps and select all making sure I'm back to here.

So if for any reason you don't see what I see here, just go round checking that you haven't left any

spaces.

Okay.

At this point, I don't want you to follow along with me, but I'm just going to show you what happens

if I go to our mirror modifier and apply my mirror or have to be an object mode for that.

So tap into object mode and apply the mirror, then back into edit mode.

Make sure everything's selected and unwrap.

Now first of all, the unwrap has gone wrong, but you can see I've got double the amount of wings.

So one, two, three, four and tail wings.

One, two, three, four.

And I haven't got a seam down the middle.

So if I out left click to select that middle edge loop there and control mark seams then select all

new to unwrap and unwrap.

Now we can see double the middle body of the plane as well.

So I'll undo those steps and I've got my mirror modifier back, back into edit mode and I've got only

half.

But the UVs are right on top of each other now when texturing, I'm happy for the wings to be exactly

the same on this side as this side.

And of course, the tail wing as well.

But the main body, we don't want it to have the same this side as this side, because the graphic we're

going to be using or the texture we're going to be using has some writing on it.

And if it's mirrored to the other side, the writing will be the wrong way round.

So I do want to apply my mirror so the two halves can be placed onto my texture in different places.

So I'll go back to object mode and apply my mirror back into edit mode.

You can see my UVs are still there, so it's all still unwrapped and the two halves are on top of each

other.

So if I select islands, for example, select this wing and press G to grab, you can see the other

one is there.

I'll undo that change though.

So I have to create a loop, cut down the middle.

So left click to select that loop going all the way through and right click mark seems now I can press

L over the middle and l on the other side as well.

And you to unwrap and unwrap.

Now I've got two body sections, let's select all.

So here are my two body sections and they're separate, but I've still got my wings that are right on

top of each other.

So again G to grab and you can see the other one underneath there and I can therefore box select both

of these so they're both selected and move them together so I can create space and move them into the

right position later on.

I always want to keep these together.

They're going to be exactly the same from one side to the other, the same for the tail wings.

There's two there and I can box, select them and move them together.

Or I can just select one G to grab and you can see it's on top of the other.

Now, just as a quick reminder, if I select all with a and press you to unwrap and unwrap my wings

now are not right on top of each other and it's actually fairly awkward for me to position them so that

they are.

So I'm going to undo that.

That's why I wanted to unwrap the body separately into two sections so it didn't disrupt my other UV

islands, being right on top of each other from when we unwrapped when it had a mirror.

Hopefully that all makes sense, but just pause the video here and catch up with me applying the mirror

and marking that seam down the middle, but making sure that you only unwrap the body of the plane.

So select the body of the plane using L and only unwrap that section.

That means the wings will keep their position, each wing being right on top of each other.

Once you've done that, make sure you've saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Unwrapping the Plane |
| **Thời lượng** | 8:05 |
| **Chủ đề chính** | Unwrap thân máy bay |

## 1. Mục tiêu bài học
- Áp dụng toàn bộ kiến thức seam/UV island từ đầu module vào một mô hình phức tạp nhiều bộ phận: máy bay.
- Lên kế hoạch chia mesh máy bay thành các nhóm UV island hợp lý theo từng bộ phận (thân, cánh, đuôi, propeller).
- Đặt seam ở vị trí ít lộ (đường nối tự nhiên, mặt dưới, khe giữa các panel).
- Pack toàn bộ island vào một hoặc nhiều UV map, đảm bảo tỷ lệ texel hợp lý.

## 2. Nội dung chính
Máy bay là một mesh phức tạp gồm nhiều bộ phận với hình dạng khác nhau: thân dạng ống thon, cánh dạng tấm phẳng thon, đuôi tương tự cánh nhưng nhỏ hơn, propeller dạng cánh quạt mỏng. Mỗi bộ phận nên được unwrap theo chiến lược phù hợp với hình dạng của nó, giống như đã luyện tập với thùng gỗ ở đầu module, nhưng với nhiều nhóm island hơn.

Chiến lược tổng quát:
- **Thân máy bay:** đặt seam dọc theo đường ít lộ (thường là mặt dưới bụng máy bay) và các seam vòng tại các vị trí phân đoạn tự nhiên (mũi, gốc cánh, đuôi) để chia thân thành các island vừa phải, dễ pack.
- **Cánh và đuôi:** vì là các tấm dẹt gần phẳng, thường chỉ cần một seam ở mép trước hoặc mép sau để "mở" mặt trên và mặt dưới cánh ra thành một island tương đối phẳng, ít méo.
- **Propeller/chi tiết nhỏ:** có thể unwrap riêng lẻ hoặc dùng Smart UV Project nếu hình dạng đơn giản và không cần kiểm soát texture chi tiết.

Sau khi đánh seam từng bộ phận, chọn toàn bộ mesh và `U → Unwrap` để tạo tất cả island cùng lúc, sau đó dùng `U → Pack Islands` để tự động sắp xếp chúng gọn trong không gian UV 0–1, tránh chồng lấn và tối ưu tỷ lệ texel giữa các phần lớn (thân, cánh) và phần nhỏ (chi tiết).

Có thể cân nhắc sử dụng nhiều UV Map (UV Maps trong Object Data Properties) nếu số lượng chi tiết quá lớn để dồn vào một texture, nhưng với một dự án học tập ở quy mô này, một UV map duy nhất được pack hợp lý thường là đủ.

## 3. Quy trình thực hành gợi ý
1. Rà soát lại toàn bộ mesh máy bay, xác định ranh giới tự nhiên giữa các bộ phận (thân, cánh, đuôi, propeller).
2. Đánh seam theo từng bộ phận: seam dọc mặt dưới thân, seam mép cánh, seam quanh gốc các chi tiết nhỏ.
3. Bật Live Unwrap để quan sát UV cập nhật khi thêm seam, tinh chỉnh nếu island bị méo nhiều.
4. Chọn toàn bộ mesh, `U → Unwrap`.
5. Gán checker texture để kiểm tra độ méo trên toàn bộ mô hình, đặc biệt các vùng cong như mũi máy bay.
6. `U → Pack Islands` để sắp xếp UV gọn gàng; kéo/scale thủ công thêm nếu cần ưu tiên độ phân giải cho các phần quan trọng (thân, cánh chính) hơn chi tiết nhỏ.
7. Lưu lại bố cục UV cuối cùng, chuẩn bị cho bước texturing cánh và thân ở các bài tiếp theo.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+E → Mark Seam` | Đánh dấu seam |
| `U → Unwrap` | Unwrap toàn bộ mesh theo seam |
| `U → Pack Islands` | Tự động sắp xếp UV island |
| `U → Smart UV Project` | Unwrap tự động cho các chi tiết nhỏ, đơn giản |
| `L` | Chọn toàn bộ mesh liên kết (linked) dưới con trỏ, hữu ích khi chọn từng bộ phận riêng để unwrap |

## 5. Lưu ý & lỗi thường gặp
- Cố gắng unwrap toàn bộ máy bay thành một island duy nhất khiến độ méo rất lớn ở các vùng cong phức tạp.
- Không ưu tiên tỷ lệ texel giữa các bộ phận (thân lớn dùng chung diện tích UV với chi tiết nhỏ) khiến texture bị mờ ở phần lớn hoặc quá nét ở phần nhỏ.
- Đặt seam ở mặt trên/mặt dễ thấy của cánh và thân khiến đường nối texture lộ rõ khi hoàn thiện.
- Quên Pack Islands sau khi unwrap khiến các island chồng lên nhau, gây lỗi texture khi áp vào các bài sau.

## 6. Checklist thực hành
- [ ] Đã đánh seam hợp lý cho từng bộ phận của máy bay.
- [ ] Đã unwrap toàn bộ mesh và kiểm tra độ méo bằng checker texture.
- [ ] Đã Pack Islands và cân đối tỷ lệ texel giữa các phần.
- [ ] UV layout đã sẵn sàng để chuyển sang bước texturing.

## 7. Tóm tắt
Bài học áp dụng đầy đủ quy trình seam – island – pack đã học vào mô hình máy bay phức tạp, tạo ra một layout UV hoàn chỉnh cho toàn bộ mô hình, là nền tảng trực tiếp cho việc texturing cánh và thân ở hai bài tiếp theo.
