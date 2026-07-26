# 057 — Wooden Barrels UV's
In this lecture, we'll continue our understanding of UV mapping by marking our own seams and placing

a barrel texture onto our barrel.

So here's where we got up to last time.

And I'm still in edit mode for the monkey head.

I'm going to quickly show you what happens if we clear all the seams on this monkey and try and unwrap

it.

So if I select all with a to clear the seams or completely get rid of the seams, I can either press

Ctrl E to go to the edit menu and there's clear seams there.

Or if I just bring this window out slightly, you can see the edge menu here and there's clear seams

just there.

So with everything selected that's gotten rid of all the seams on this monkey.

Now if I press u to unwrap again with everything selected and unwrap, you can see the unwrap here.

Now it has actually got three islands and I'm in island selection mode at the moment.

This island here and here are actually the eyes.

If I deselect all with alt A and press L over the eye.

So that's linked selected.

So it will select internal separate objects and press G to grab in the Y.

You can see that the eyes are actually separate internal objects.

The same for the other one.

And if I select all you can see, it's trying to take the whole entire head and squash it down into

this mess here.

If I press control spacebar over this window and zoom in, you can see this monkey head here.

And you can kind of just about make out some features in here.

That looks to be an eye socket.

Maybe there perhaps an ear here.

It's very difficult to make out, but basically it's as if a large object has landed on the top of the

shape and just squashed it and flattened it out like a pancake.

That's what happens when you have no seams on your objects.

So I'll press Ctrl spacebar to come out of full screen mode, and I'll show you more about how you can

create scenes on your object in just a moment.

But for now, we'll delete the monkey.

So I'll come into object mode with tab and press delete.

I'll select on my barrel here.

Press the period key to zoom in on that.

I'll move the window in slightly.

So we've got a bit more space for our shader editor and UV image editor.

I'll also press the T key to get rid of the side tool panel there.

So that's the T key.

And for this I'm going to go into edit mode.

And I'm going to clear the seams on my barrel as well because we're going to mark them in ourselves.

So I can show you that process.

So select all Ctrl E to go to the edit menu or the edge menu again up the top here.

And clear seams okay.

So pause the video here and make sure you've caught up with me.

Delete the monkey.

Make sure you're in object mode when you do that and then select our barrel.

Go into edit mode and clear the seams.

Pause the video and have a go at that.

Okay, now you can see if I bring out my UV image here that we've still got our islands set up and it

still looks like it's been unwrapped, yet we have no seams.

So even though we have no seams, our old UV map is still working.

And you can see that if I were to select an island and press G to grab, you can see the top moving

about, and I'm moving about that face in the UV editor.

So you can delete the seams and still have a UV map.

However, I'm going to delete this UV map by clicking the minus button in the UV maps option.

And again, it turns black because it doesn't know where to put our Musgrave image.

I'll make sure all selected with a and press U to unwrap and unwrap.

And it's unwrapped, but it's failed in some way.

And you can see it's tried to unwrap this and it's unwrapped every single individual face separately,

so they all look the same because they're all covering the whole of this image, including the bottom

and the top.

So we therefore have to mark some seams.

This is fairly straightforward.

I can go to edge mode and alt left click on the top edge loop here and press Ctrl E to go to the edge

menu and mark seams the same for the bottom, so alt left click on that.

I can actually also right click and mark seams.

It's a slightly different menu, but it's got mark seams within there as well.

So I can mark seams seems there.

So I've separated the bottom and the top and the middle.

So pause the video and catch up with me.

Marking the seams for the top face and the bottom face.

Remember you can either press Ctrl E or you can right click to get the Mark seams option.

Pause the video and have a go at that.

Okay, now if I select all now and press U to unwrap and unwrap, I've got three circles and you should

have the same as me when you do the same.

Now have a quick think as to why there are three circles instead of a flat middle section as we had

before.

Well, hopefully you've realised I need a seam down the middle for this middle section going all the

way around to unwrap properly.

Just like a label has a kind of seam going down one side, and the two edges are stuck together on the

can of food or whatever it may be.

Our barrel needs the same.

So I can select this edge.

Right click Mark seams.

Now when I select all and press U to unwrap and unwrap, we can see we've got this nice flat label like

island as well as the top and the bottom.

So pause the video and catch up with me, making sure you've marked that extra seam down the side like

I have.

Okay, so now we need some sort of barrel texture.

So I'm in textures.

Com and I've searched for barrel.

If I scroll down a bit I'll show you this one first.

Now I have downloaded this and I will show you the results, but it isn't actually that great if I choose

the zoom button, you can see at the bottom along the metal strips they're slightly darker than at the

top, so when we put this on our barrel, we'll get a really obvious seam.

I'll show you that in a moment within blender.

A better option is this one over here because it keeps consistency from the top to the bottom.

So this is the main one that we'll be using.

So make sure you've downloaded that.

You can always just go for some simple wooden barrel like this.

So maybe download that one.

Try that out to another one that I want you to try.

If we close this down is perhaps this plank one at the top here.

If.

If I select that, you can see that it's not actually based on a barrel, but it could possibly come

up with a good looking barrel in the end.

So I've downloaded this second one here.

So we've got three options there that you can try.

So pause the video here and make sure you've downloaded those three options that I mentioned.

You may even want to download the one that I suggested not to use, just to see the results of that

as well.

So back into blender and I'll just bring down my UV image at a slightly zoom out.

Just a touch and I'll bring my textures into here.

So I've downloaded all four of those textures, and I can actually select them from here and drag them

into my shader editor.

Like this I can only do this one at a time though, so I have to drag them all in separately and I'll

minimize that window.

And I can now swap our Musgrave texture for our plank textures.

So I'll delete the Musgrave texture.

Bring our first plank texture in.

So I'm just speeding up the footage of me organizing the textures slightly.

I've just expanded them so you can see the names and put them on top of each other.

So I've maximized the shader editor so you can see the different texture names.

And I'm going to start with this one here, which looks like this, which ends in four underscore for

underscore m.

So I'll hook that up to the color.

And I can hook this up to each one of these like so.

And I'll just speed that footage up slightly.

And then I can easily just plug this end color node into the base color for each one I want to try.

I'll press Ctrl spacebar to come out of full screen mode, and you can see my barrel texture on here.

Let's find the texture in here, which is this one just here ending in four underscore M.

And I need to shift around my UVs slightly.

So take a moment to catch up with me and bring in your textures and hook up the texture that I mentioned

earlier.

Okay, let's zoom in.

Just a touch to my UV editor, and a challenge to you now is to set up your UVs so that the barrel texture

sits nicely onto our cylinder, so it looks a little bit like a barrel.

Pause the video and have a go at that.

So the main thing I need to change is my big middle section here.

So with the island selected, I'll select that island scale in the X, make it nice and big, and G

then X and move it across so it's covering those end planks.

I'll just scale it in the X so it's slightly thinner like this.

And we've got a sort of barrel looking thing there and it works reasonably well.

We can see the seam here and it's not too bad.

So that's quite a successful texture that one.

Let's just have a look at the top there.

Looking quite nice even though they're not particularly round.

Let's select those islands and I can select them at the same time by holding down shift and scaling

the x.

And I can round them out like this.

And it stops that stretching.

I'll undo that so you can see the slight stretching there and redo it with Ctrl shift Z.

And you can see it's not stretching as much.

So making these into circles by scaling them in the X works nicely.

Now lastly, you may want to edit your barrels slightly.

So if I press Ctrl R over the top of my barrel to do a loop, cut around the middle and maybe create

two loops like this and right click.

Notice if I move the loops up and down, they don't distort the texture.

And I'll talk about that in the next lecture.

But I'll right click so they stay in the center and I'll scale them outwards.

So s to scale and shift Z so they don't scale up or down.

So we've got a more rounded out barrel like this.

It's a little bit square.

So with those two selected I can press control B to bevel and make it a little bit smoother like this.

So it's got more of a curve.

And notice it's creating the UVs according to where I'm adding those loop cuts.

So that's two loop cuts around the middle.

And I've beveled them so that they create this curve.

I find it easier to do two loop cuts and then bevel, rather than starting with four loop cuts that

I would have to scale at different sizes.

So in the next lecture, we'll be looking at the other textures and how they fit onto our barrel, and

the problems you might come across with those.

But for now, I want you to finish off your barrel doing the two loop cuts like I have here and creating

the bevel.

And then of course, make sure you save your work ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Wooden Barrels UV's |
| **Thời lượng** | 10:03 |
| **Chủ đề chính** | UV Mapping thùng gỗ |

## 1. Mục tiêu bài học
- Áp dụng kiến thức seam và UV island vào một mô hình thực tế: thùng gỗ (wooden barrel).
- Biết cách unwrap một mesh dạng trụ (cylindrical) sao cho các thanh gỗ dọc thân thùng không bị méo.
- Tách UV của thân thùng và hai nắp (cap) thành các island riêng biệt hợp lý.
- Kiểm tra và tinh chỉnh UV bằng checker texture trước khi áp texture gỗ thật.

## 2. Nội dung chính
Thùng gỗ là mesh dạng trụ điển hình, thường gồm: phần thân hình trụ (có thể phình nhẹ ở giữa) và hai mặt nắp tròn ở trên/dưới, cộng thêm các đai kim loại (hoop) bao quanh nếu mô hình có chi tiết đó.

Chiến lược unwrap phổ biến cho hình trụ:
- Đánh một seam dọc theo một đường sinh (vertical edge loop) trên thân trụ để "mở" thân thùng thành một hình chữ nhật phẳng — đây chính là nguyên lý của Cylinder Projection.
- Đánh seam theo vòng tròn ở mép trên và mép dưới thân trụ để tách rời thân khỏi hai nắp.
- Unwrap riêng hai mặt nắp (cap) — thường tự nhiên trở thành hình tròn gần như không méo vì mặt đã phẳng.

Có thể dùng `U → Cylinder Projection` để Blender tự động thực hiện việc này, hoặc tự đánh seam thủ công rồi dùng `U → Unwrap` để kiểm soát chính xác vị trí đường nối (quan trọng nếu texture gỗ có vân dọc theo thớ gỗ, cần thân thùng không bị méo ngang).

Sau khi có UV, cần **pack** các island (thân, nắp trên, nắp dưới, đai kim loại nếu có) gọn trong không gian UV 0–1 bằng `UV → Pack Islands`, đảm bảo tỷ lệ texel tương đối đồng đều giữa các phần.

## 3. Quy trình thực hành gợi ý
1. Mở mesh thùng gỗ ở Edit Mode, chọn Edge Select Mode.
2. Chọn một đường dọc (vertical edge loop) trên thân trụ, đánh dấu Mark Seam.
3. Chọn hai vòng tròn mép trên và mép dưới (Alt+Click để chọn loop), Mark Seam để tách nắp khỏi thân.
4. Chọn toàn bộ mesh, nhấn `U → Unwrap` (hoặc thử Cylinder Projection để so sánh).
5. Mở UV Editor, kiểm tra thân thùng đã trải thành hình chữ nhật đều, hai nắp thành hình tròn riêng.
6. Dùng checker texture để xác minh không có ô vuông bị kéo dãn bất thường.
7. Dùng `UV → Pack Islands` để sắp xếp lại các island gọn gàng, tránh chồng lấn.
8. Xoay/di chuyển thủ công các island trong UV Editor nếu cần bố cục hợp lý hơn cho bước texturing sau này.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+E → Mark Seam` | Đánh dấu seam trên cạnh đã chọn |
| `Alt+Click` | Chọn nhanh edge loop (vòng dọc hoặc vòng ngang) |
| `U → Unwrap` | Unwrap dựa trên seam |
| `U → Cylinder Projection` | Chiếu UV tự động theo hình trụ |
| `U → Pack Islands` | Sắp xếp lại các UV island gọn trong không gian 0–1 |
| `G` / `R` / `S` (trong UV Editor) | Di chuyển / xoay / scale island trong UV space |

## 5. Lưu ý & lỗi thường gặp
- Seam dọc đặt ở vị trí dễ nhìn thấy (mặt trước thùng) sẽ lộ rõ đường nối texture khi nhìn từ góc đó — nên đặt seam ở mặt sau hoặc nơi ít quan sát.
- Quên tách nắp khỏi thân bằng seam vòng khiến toàn bộ mesh unwrap thành một khối bị méo nặng.
- Không Pack Islands sau khi unwrap khiến các island chồng lấn hoặc chiếm không đều không gian UV, gây lãng phí độ phân giải texture.
- Tỷ lệ texel không đồng đều giữa thân và nắp khiến texture gỗ trông sắc nét khác nhau giữa các phần.

## 6. Checklist thực hành
- [ ] Đã đánh seam dọc thân trụ và seam vòng tách hai nắp.
- [ ] Đã unwrap và kiểm tra bằng checker texture không bị méo đáng kể.
- [ ] Đã Pack Islands để sắp xếp UV gọn gàng.
- [ ] Đã đặt seam ở vị trí ít lộ để chuẩn bị cho bước texturing.

## 7. Tóm tắt
Bài học áp dụng trực tiếp kỹ thuật seam và UV island vào mô hình thùng gỗ — một ví dụ kinh điển cho hình dạng trụ. Kết quả là một layout UV gồm thân thùng trải phẳng và hai nắp tròn riêng biệt, sẵn sàng cho bước texturing với vân gỗ ở các bài tiếp theo.
