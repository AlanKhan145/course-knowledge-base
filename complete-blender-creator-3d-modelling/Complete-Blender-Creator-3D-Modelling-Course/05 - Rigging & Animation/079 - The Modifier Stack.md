# 079 — The Modifier Stack
In this lecture, we'll be finishing off our television and learning a bit about the modify stack and

practicing subdivision service modeling.

Okay, so here's where we got up to last time and I'll just turn off x ray mode now so we can see our

television and how we're getting on.

So let's work on the screen area.

I'll select my television and I may as well rename it now to TV as we will start adding a few more objects

now and I'll go into edit mode and the screen section will be these faces here.

Now don't follow along with this just yet, but if I go to face mode with three and select those faces

there, I can make them a bit sharper in here by pressing I to insert and also be four boundaries so

that it excludes the mirror.

And can you see how the inset, the closer it gets the edge, the sharper that is.

And I could make it nice and sharp like this.

However, it's a little bit easier if I undo that to separate the screen from the TV.

So if I press P to separate and by selection we can see that we've got a separate screen.

We have got this problem in the middle, and I'll talk about that in a second.

But you can see that it's much sharper around the edges here.

It will also be much easier for when we texture later on.

So I'll go into object mode and select the screen and let's label that screen as well.

Now notice that the screen keeps the modifiers from the object that it was separated from.

So it's still got a subdivision service modifier and a mirror.

And as I was saying earlier, the mirror modifier is underneath the subdivision surface modifier.

So the subdivision surface modifier is happening first.

So let's hide the mirror for the moment.

And that's what the subdivision surface modifier looks like.

Then we add the mirror to that and you can see it's just copying this half over to the other side.

However, if I click and drag the mirror above the subdivision service modifier, we can see that instantly

disappears because we have.

If I hide the subdivision surface modifier, that's tricky to see.

So I'll go to local view with forward slash.

We have the mirror happening first.

So we've got this half mirror to the other side and then the subdivision service modifier happening

after the mirror.

So the second modifier is taking into account the first modifiers effects.

So back out of local view with forward slash and with my television selected and a small challenge to

you is first catch up with me by separating the faces for the screen, then selecting the screen.

You'll have to come back into object mode for that move the mirror modifier above the subdivision surface

modifier.

And I want you to do the same for the television.

Pause the video and have a go at that.

Okay.

So hopefully you found that fairly straightforward.

With a TV selected, I can click and drag the mirror above the subdivision surface modifier and it gets

rid of these funny anomalies.

And now be nice if the screen had a bit of a curve coming out here like an old retro screen.

So I'll select our screen into edit mode and select this face in here cheat grab in the Y to bring that

out.

So it's nice and curvy like this.

That looks quite fun.

I feel like it's inset a bit too much, so I might press G then y and bring it forward slightly.

I'll just double check that that's still inserted.

Fine.

And that looks good.

Also, at this stage, I think it's a good idea to select both our objects right click and shade smooth.

And that looks a lot nicer now.

Now let's add some dials at the bottom.

So our shift right click to this point here, shift data, add mesh and then cylinder.

Currently it's got 32 vertices and we'll keep it at the default because we're going for a nice finish.

Now with smooth edges, it helps to have a lot of vertices to make up your circles.

I'll scale this down and into position.

So somewhere around here and our x 90 to move it into position like this now it's absolutely fine to

have it overlapping and inserted into our TV like this, but we have got a bit of a curve coming down

here, which might be a good idea to try and rectify.

So I'll select my TV into edit mode and have a quick think about how I can flatten this out so it stops

curving in this direction so much.

Well, this curve is affected by two aspects.

This edge loop up here and this one here.

Now, we can't move this edge loop down very easily.

I can go into edge mode and select from here to here and TG to edge slide and move that down.

And that does help somewhat.

If flattens it out a bit and starts curving from here.

We can also, if I undo that control R and do a loop cut and bring it down this way and that might be

a bit more successful keeping it flatter as we go down and then it suddenly curves around here.

If we want to maintain that curve coming around here, we can select this edge loop along here.

And I'll go to front view for this and G.G. and G.G. to do that sort of double edge slide to curve things

out slightly.

So that's fairly successful.

The other edge loop, as I was talking about, is this one here and I can G if I want to sharpen that

up at all.

And you can see how it's bringing that bottom area in here.

I'll undo that and show you that again from the side here.

And we've flattened it out in that way as well.

That does, of course, flatten out all the way up our shape here.

I actually slightly prefer that, so I think we'll leave it like that.

I think we possibly got a little bit too much space for our dials at the bottom, so I might just bring

the bass up a touch so into wireframe, select all these and G then said to move them up slightly to

somewhere around here.

Back out of wireframe into object mode and let's move the dial up.

G then said just take a look around, make sure I haven't changed anything too drastically and I think

that's working well.

So pause the video and catch it with me adding your cylinder and making any modifications to the base

section that you feel are necessary for your television.

Okay.

So lastly, what I want to do is with my cylinder here, it's got a very sharp edge.

So I want to give that a bit more smoothness.

First of all, I'll stick it out a little bit more from our television.

So gee, then why now?

It's a bit flatter.

I can have it insert just a small amount about there and let's add a subdivision surface modifier to

our cylinder.

So I press control three to do a subdivision surface modifier of three levels, but it looks a little

bit strange.

That's because if I go into edit mode we have a very big end gone and the subdivision surface modifier

much prefers quads so four sided faces rather than big end guns like this.

Hence we're getting all this sort of bumpiness.

Now this is fairly straightforward to sort out.

I can go into face mode, select the send face, and if I press I to insert and bring that in a bit

and left click and go back into object mode, you can see it's sorted it out quite nicely at the front.

I'll just isolate the shape for a moment with Ford Slash, go back into edit mode and do the same for

the back.

So I to insert and bring that in and you can see it's got a nice curve around here, but we haven't

got all those strange bumps.

Well, certainly not so many.

There's a little bit of wobbling ness around here.

The reason it's now keeping its structure more is because this face at the front and the faces around

it are plainer.

So they're flat, as you can see around there.

So it's using the quads from here for the curve.

But this section, it doesn't need to worry about so much.

I could smooth this out even more by doing another inset here.

And can you see how it's lost that slight wobble around here and it slowly smoothes out a bit better?

I'll quickly show you what that looks like without that extra inset.

If I go to object mode and shade smooth, you can see a little bit of bumpiness there.

So back into edit mode and insert and I'll go in a little bit further back to object mode and we've

lost that wobble.

Same around the back into object mode.

Select that face, insert it and again much smoother now.

So I go back into edit mode so you can see my cylinder and I want you to pause the video here and catch

up with me adding a subdivision surface modifier to the sphere and sorting out that wobbly anomaly by

adding some insets for the faces.

Now, lastly, what I want you to do as your challenge is to sharpen up the curve going around here.

So you'll have to think about how you edit the shape in order to do that.

Pause the video and have a go at that.

Okay.

So hopefully you figured that out.

We can add a loop cut along the side here by control.

Ah, add a loop cut in and suddenly it's a bit sharper.

And I can bring this to the front if I like, if I want it to be a lot sharper and maybe have one at

the back as well to sharpen that up as well.

And we can always jiggy to edge slide and move this about depending on how sharp or soft we want those

edges.

So back into object mode, back out of local view and I think I'll press shift de X and scale it down

to create another dial next to this one.

And we got an interesting looking TV.

So hopefully you understanding the ideas behind subdivision service modelling and this will help you

when it comes to building the body of our character in the next lecture.

So as always, make sure you've saved your work ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | The Modifier Stack |
| **Thời lượng** | 8:54 |
| **Chủ đề chính** | Tìm hiểu thứ tự Modifier Stack |

## 1. Mục tiêu bài học

- Hiểu Modifier Stack là gì và tại sao thứ tự các modifier ảnh hưởng đến kết quả cuối cùng.
- Biết cách sắp xếp lại thứ tự modifier bằng kéo thả hoặc menu dropdown.
- Nắm được cách kết hợp phổ biến giữa Bevel, Mirror, Solidify và Subdivision Surface.
- Biết cách Apply modifier khi cần chuyển kết quả thành mesh thật.

## 2. Nội dung chính

Modifier Stack trong Blender hoạt động theo nguyên tắc tuần tự từ trên xuống dưới: mỗi modifier nhận đầu vào là kết quả đã qua modifier phía trên nó, xử lý, rồi truyền kết quả xuống modifier tiếp theo. Vì vậy, cùng một tập modifier nhưng thứ tự khác nhau sẽ cho ra kết quả hình học hoàn toàn khác nhau.

Một ví dụ kinh điển là kết hợp Mirror và Subdivision Surface: nếu đặt Mirror trước Subdivision Surface, đường nối ở giữa (nơi mirror) sẽ được subdivide mượt mà cùng với phần còn lại của mesh; nhưng nếu đặt Subdivision Surface trước Mirror, đường nối giữa có thể xuất hiện khe hở hoặc gấp khúc vì mỗi nửa được subdivide độc lập trước khi ghép lại. Tương tự, Bevel thường nên đặt trước Subdivision Surface để phần vát cạnh được làm mượt cùng lúc với toàn bộ mesh, còn Solidify (tạo độ dày cho mesh phẳng) thường đặt trước hoặc sau Subdivision Surface tùy hiệu ứng độ dày mong muốn khi bo tròn.

Modifier Stack chỉ là một lớp hiển thị/tính toán không phá hủy (non-destructive) — mesh gốc trong Edit Mode không bị thay đổi cho đến khi người dùng chủ động nhấn Apply. Sau khi Apply, kết quả của modifier được "đóng băng" thành hình học thật của mesh, không thể chỉnh lại tham số modifier đó nữa (trừ khi Undo). Việc Apply thường thực hiện khi mesh đã hoàn thiện và chuẩn bị cho bước tiếp theo như rigging, vì một số modifier (đặc biệt Mirror, Subdivision Surface ở mức cao) có thể ảnh hưởng đến cách Weight Paint và Armature hoạt động nếu chưa Apply.

## 3. Quy trình thực hành gợi ý

1. Trên mesh TV đã dựng ở bài trước, thêm modifier Bevel để vát nhẹ các cạnh.
2. Thêm tiếp modifier Subdivision Surface bên dưới Bevel, quan sát kết quả.
3. Thử kéo thả đổi thứ tự hai modifier (Subdivision Surface lên trước Bevel) để so sánh khác biệt.
4. Nếu mesh có tính đối xứng, thử thêm Mirror modifier và thử nghiệm thứ tự với Subdivision Surface.
5. Khi hài lòng với kết quả, cân nhắc Apply các modifier cần thiết trước khi chuyển sang bước rigging hoặc UV.
6. Kiểm tra lại mesh trong Edit Mode sau khi Apply để xác nhận số lượng vertex/face đã đúng như mong đợi.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Chức năng |
|---|---|
| Kéo thả icon `::::` trên modifier | Đổi thứ tự modifier trong stack |
| Ctrl+A (trong menu Apply, hoặc dropdown modifier) | Apply modifier đã chọn |
| `Ctrl+2` / `Ctrl+3` | Thêm nhanh Subdivision Surface với mức Viewport tương ứng |
| Icon con mắt / màn hình trên modifier | Bật/tắt hiển thị modifier ở Viewport / Render / Edit Mode |
| `Shift+Ctrl+A` | Apply tất cả transform hoặc modifier tùy context menu |

## 5. Lưu ý & lỗi thường gặp

- Đặt Mirror sau Subdivision Surface gây khe hở hoặc gấp khúc ở đường nối giữa.
- Apply modifier quá sớm khi mesh chưa hoàn thiện, mất khả năng chỉnh sửa tham số sau này.
- Quên Apply Scale/Rotation của object trước khi Apply modifier có thể khiến hình dạng bị méo.
- Chồng quá nhiều modifier nặng (Subdivision Surface mức cao, Mirror, Solidify...) làm giảm hiệu năng viewport đáng kể.

## 6. Checklist thực hành

- [ ] Đã hiểu nguyên tắc modifier xử lý tuần tự từ trên xuống.
- [ ] Đã thử đổi thứ tự Bevel và Subdivision Surface để so sánh kết quả.
- [ ] Đã thử kết hợp Mirror với Subdivision Surface đúng thứ tự.
- [ ] Đã Apply các modifier cần thiết trên mesh TV khi hoàn thiện.

## 7. Tóm tắt

Modifier Stack xử lý tuần tự từ trên xuống dưới, vì vậy thứ tự sắp xếp modifier (đặc biệt giữa Mirror, Bevel và Subdivision Surface) quyết định trực tiếp kết quả hình học cuối cùng. Hiểu rõ nguyên tắc này giúp tránh lỗi hình học phổ biến khi modelling.
