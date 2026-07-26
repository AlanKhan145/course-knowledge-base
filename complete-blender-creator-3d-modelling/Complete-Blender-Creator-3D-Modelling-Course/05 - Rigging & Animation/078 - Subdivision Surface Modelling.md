# 078 — Subdivision Surface Modelling
In this lecture, we're going to make a television using subdivision surface modeling, and this will

work as the head for a character we're going to make so we can animate a walk cycle.

So I'm in a new start up file and to create our TV, I'll use the default cube, so I'll select that.

And to give it some roundness, I'll add the subdivision surface modifier.

So I'll come across to the modifier properties here at modifier and subdivision surface just there.

So when I add it, it's one level of subdivisions.

So if I move in a bit and I'll go to edit mode so you can see the original shape with one level, each

face is divided into four.

So one, two, three, four on this side and with that subdivision it smooths it out.

Now just quickly undo those steps and show you that because this is used so often as a modifier, there's

a really handy shortcut.

If I press control one, you can see it adds the modifier there with one level of subdivision.

If I press control two, it's two levels and control three is three levels.

So it's dividing each face into four, three times and you can see it ends up being quite close to a

sphere because it's all been smoothed out.

It's worth pointing out that the render level is usually set a little bit higher than the viewport levels,

so that when you render, it's even smoother.

And when you're in the viewport you've got fast navigation.

So what I'm going to do is put the render levels up to three.

So it's the same as my viewport.

And if you've got a slow machine, then do put this down to two.

If you find that it's lagging at all, most computers should be able to handle three levels without

a problem.

So we should be okay with three.

Okay.

So pause the video here and add a subdivision service modifier with 2 to 3 levels of subdivisions.

Okay.

So we'll go back into edit mode.

Now you can follow along with me if you like, but I'm just going to show you some aspects of modeling

with subdivision surfaces.

First of all, if I press control R to do a loop, cut around the middle and double click instantly,

you can see my shape change.

If I come around to the front, you can see that it's a lot flatter along the top and then it curves

around a bit more evenly around here.

And if I view from the side, it's still fairly circular.

So what happens when I add in the loop cut?

I'm obviously adding in more faces and therefore more subdivisions.

And if I come round to the top, let's say, and press G, so edge slide and move that across.

You can see that the curve becomes even sharper and it's more rounded at the back where it loses that

extra edge loop.

So when we're adding geometry with loop cuts and extrusions, it will affect the curvy ness of the shape

and the sharpness of the edges.

If I press g g and bring it right to the edge like this, you can see that it becomes a lot sharper.

If I press control R and do another loop cut around here and then bring that right to the edge as well

and I'll go back into object mode.

We get quite a sharp line across here as those loop cuts get closer together.

So back into edit mode, often these are called supporting loops because they support the structure

of the edges.

So this is something to bear in mind as you're modeling with a subdivision surface modifier on your

object.

So I'll undo those steps and go back to my original cue and let's start modeling our TV.

First of all, I'll add a mirror modifier, so I'll press on my keyboard and go to edit and use the

auto mirror add on.

Remember that's in edit preferences, add ons, type in auto and you should see the auto mirror just

there.

Make sure that's ticked and close that down.

Now I want it to be in the x axis.

So along the x axis here and I want the positive orientation so that I'm going to be working on this

side, which is the positive X, just to make sure that you've got your object origin in the center

when doing this.

And then I'll press the auto mirror button and you can see it's deleted.

Half of my shape added the mirror modifier and it's got clipping on so the middle is stuck together.

What you'll also notice is that our shape has changed.

So we have added a loop, cut down the middle, and therefore that has slightly sharpened up the curve

across here.

One other thing that's worth noting is that I have my subdivision surface modifier first and then the

mirror second, and the order of these commonly called the stack is important and does make a difference.

And actually it's generally considered bad practice to have the mirror modifier not at the top of your

stack.

I'm going to leave it where it is for now because I want to highlight this point later and we can easily

move these around just by clicking and dragging them and putting them into position.

But like I say, I'll leave that as it is for the moment.

So pause the video and catch it with me adding a mirror modifier along the x axis using the auto mirror

add on.

Okay.

So let's try and make the shape of the television, first of all.

I'll come around to the side here and it's a bit round at the moment.

So if I press control are to do a loop cut there and left click once and drag it up to the top to maybe

somewhere around here.

I'll do the same around the bottom, somewhere around there, not quite as far because we're going to

have a place for some dials at the bottom there.

So it's looking a little bit more square.

But if I go from the top, we can see that we need another loop cut across here to sharpen this area

up here.

So control R and then loop cut there and drag that to the front.

And we've got a little bit more of a TV shape there.

It's possibly a little bit rounded at the back so we can press control R and maybe bring that back.

Not quite so far.

Maybe somewhere around here we've got a very sort of square TV.

I quite like this sort of rounded shape here, but I think we need a little bit sharper with another

loop cut somewhere around here.

Okay.

So pause the video here and add a bit of sharpness with these loop cuts in the same way I've done here.

Don't panic if it's a little bit different from mine, we can adapt the shape as we're going along.

Okay.

So we've got our curvy cube here and I think it needs to narrow a bit as it goes towards the back.

So I'm going to go to x ray mode so I can select the whole of the back like this.

And let's scale that down a bit.

Now do remember, it doesn't scale in the X in the same way because it's the medium point of the object

selected, not the other side as well.

So I can press scale in the X to scale that a bit further.

I can even press G to grab in the X to bring it in like this as well.

Now obviously it's bending a bit in the middle here so I can select these edges here and G then X to

bring those in like this.

And we've got a bit of a curve going in and I think I'll scale these in the Z as well to bring that

down to somewhere around here, perhaps a little bit more adjustment just there.

And that's about right.

It might be a little bit longer.

TV So I press G to grab in the Y this time and move it in a bit.

I'll turn off x ray mode so we can see the final result and that looks a fairly good shape at the moment.

So pause the video here if you need to catch up.

Okay.

Now I'd like to have a little bit more roundness here so I can either select this edge loop here and

press g g to edge slide to create that.

But I don't have to do it that way.

I can actually just select the top edge like this.

I'll make sure I get the last one there as well and press g g to edge slide just those.

And you can see that rounds out a little bit more.

I could then select these ones here and g g and again it rounds out a little bit further.

So there is the option to do that.

But I'll just do that for the moment, because what we can also do is select the very edge just here.

And again, I'll come to front view and just model that curve in like this.

And the same with this one here.

G to grab and create a curve like this, I think they're a little bit wider at the bottom.

Ready for that sort of control panel down here looks about right.

Okay.

So take a moment to add a little bit more curvature to this side edges there, pause the video and have

a go at that.

Okay.

Let's work on the screen at the front.

So I'll press three to go to face mode and select that face.

And I can press E to extrude in the Y axis to pull that in for a screen.

Okay.

So that's worked reasonably well, but it's very, very rounded.

So look at the shape and have a quick think about how I could make this a little bit more square.

Pause the video, if you like.

Okay.

So if I press control out and do a loop cut around here, I can move it in to make it a little bit more

square or have it a little bit more curved like this.

So somewhere around there looks good.

And again, I can press control R and create a sharpness there and controller and a bit of sharpness

down here.

So we've got this area for a TV screen, but I feel like it's a little bit too curved around here.

So coming in to the screen itself, have a quick think about how we can sharpen up these lines coming

across here and down here and across here.

Pause the video, if you like.

Well, if I press control r I can do a loop cut around the middle here and I can move it closer if I

want it sharper or just leave it in the middle by right clicking, which will cancel any movement and

that's sharpened it up nicely.

We've got a really sort of rounded looking TV, so pause the video and sharpen up that screen area.

The last time I might want to sharpen up the bottom here is this very sort of curved around here.

That's more a preference thing, but I can press control R if I want to and double f click if I want

to sharpen that up at all.

Let's see what it looks like with and without.

So that's without.

With control z and control shift z to redo.

And actually, I think maybe I prefer the curves, so I'll leave it out.

Okay.

Now, before doing the television screen, you might want to make any adaptions to the shape.

Maybe you want the screen to be a little bit bigger, probably easiest in front of you and then x ray

mode.

Perhaps I'll come round to the side so I can see it a little bit more easily and I can select these

edge loops coming through here.

A little bit.

Tricky to see.

Hopefully you can make that out, but I can select all those going around there and I can G then X to

move my screen out a bit wider.

But do be aware it is making it slightly less round.

So maybe out to here and I might want to change that top loop coming from here across to here.

And remember you can hold down control to take the shortest route and jpg to edge slide that across

if I want a little bit more roundness to the top.

I won't do that though, because I think that's about right.

And you might want a little bit more of a screen at the top as well.

So the G, then Z and move that up and you've got a little bit more of a screen.

It's looking a little bit untidy at the back here.

So do watch out for those sort of things and I can select these lines here and edge slide them down

and just this vertex here and go to edge, slide that across.

Let's get to object mode and see if that's worked.

That seems to have done an okay job.

Okay.

So I think that's about the right shape for my TV.

Again, you can have a different shape if you like.

We'll work on the screen in the next lecture, but make sure you're fairly happy with the shape of your

TV now and make sure you've saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Subdivision Surface Modelling |
| **Thời lượng** | 10:48 |
| **Chủ đề chính** | Dựng TV bằng Subdivision Surface |

## 1. Mục tiêu bài học

- Ôn lại nguyên lý hoạt động của Subdivision Surface modifier.
- Biết cách dùng Edge Loop và Crease để kiểm soát độ bo tròn của mặt phẳng khi Subdivide.
- Áp dụng kỹ thuật box modelling kết hợp Subdivision Surface để dựng một chiếc TV có góc bo mềm mại.
- Hiểu cách bật Wireframe/hiển thị Cage để kiểm tra mesh gốc trong khi xem preview Subdivision.

## 2. Nội dung chính

Subdivision Surface (thường gọi tắt là Subdiv hoặc SubD) là modifier chia nhỏ các mặt (face) của mesh thành nhiều mặt nhỏ hơn và làm mượt bề mặt theo thuật toán Catmull-Clark, biến một mesh low-poly góc cạnh thành một hình khối bo tròn mềm mại. Đây là kỹ thuật modelling rất phổ biến để tạo các vật thể có bề mặt cong tự nhiên (như TV, đồ nội thất, nhân vật) mà không cần điêu khắc chi tiết từng vertex.

Điểm mấu chốt khi làm việc với Subdivision Surface là kiểm soát được phần nào của mesh sẽ được bo tròn và phần nào giữ nguyên góc cạnh sắc. Có hai kỹ thuật chính: thêm Edge Loop hỗ trợ (support loop) đặt gần cạnh cần giữ sắc để "ép" bề mặt subdivide bo cong sát vào cạnh đó hơn, hoặc dùng Edge Crease (Shift+E) để chỉ định một cạnh cụ thể giữ độ sắc theo tỉ lệ (từ 0 = mượt hoàn toàn đến 1 = sắc hoàn toàn như mesh gốc).

Khi dựng một chiếc TV, quy trình thường bắt đầu từ một khối hộp cơ bản (cube), sau đó bevel các cạnh, thêm loop cut ở các vị trí cần giữ hình dạng (viền màn hình, chân đế), rồi áp Subdivision Surface modifier để làm mượt toàn bộ. Cần bật chế độ hiển thị "On Cage" hoặc Wireframe overlay để nhìn thấy đồng thời mesh gốc (control cage) và kết quả sau khi subdivide, giúp điều chỉnh chính xác hơn.

## 3. Quy trình thực hành gợi ý

1. Bắt đầu từ một Cube, chỉnh tỉ lệ thô để có hình dạng gần giống thân TV.
2. Thêm Loop Cut (Ctrl+R) ở các vị trí cần giữ chi tiết (viền màn hình, góc chân đế).
3. Áp modifier Subdivision Surface, quan sát bề mặt bị bo tròn quá mức ở những nơi không mong muốn.
4. Thêm support loop hoặc dùng Edge Crease (Shift+E) tại các cạnh cần giữ sắc.
5. Bật chế độ hiển thị Wireframe overlay hoặc Edit Mode Display > On Cage để kiểm tra đồng thời mesh gốc và kết quả subdivide.
6. Tăng Viewport/Render Levels của modifier khi cần độ mượt cao hơn cho khung nhìn cuối.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut and Slide |
| `Ctrl+B` | Bevel |
| `Shift+E` | Edge Crease (giữ độ sắc cạnh khi Subdivide) |
| `Ctrl+2` / `Ctrl+3` | Thêm nhanh Subdivision Surface modifier (Viewport level 2/3) |
| `Ctrl+1` | Thêm Subdivision Surface modifier với Viewport level 1 |
| `Z` | Mở pie menu chuyển kiểu hiển thị (Wireframe, Solid...) |

## 5. Lưu ý & lỗi thường gặp

- Áp Subdivision Surface trực tiếp mà không thêm support loop khiến toàn bộ mesh bị bo tròn quá mức, mất chi tiết hình khối gốc.
- Lạm dụng Edge Crease thay vì support loop có thể tạo ra bề mặt gợn sóng không tự nhiên ở vùng chuyển tiếp.
- Quên tăng Render Levels khiến kết quả render cuối cùng không đủ mượt dù viewport trông đã ổn.
- Để mesh có n-gon (mặt nhiều hơn 4 cạnh) ở vùng quan trọng, dễ gây lỗi shading hoặc biến dạng bất thường sau khi subdivide.

## 6. Checklist thực hành

- [ ] Đã dựng khối hộp cơ bản làm thân TV.
- [ ] Đã áp modifier Subdivision Surface và quan sát hiệu ứng bo tròn.
- [ ] Đã thêm support loop hoặc Edge Crease để giữ hình dạng mong muốn.
- [ ] Đã bật hiển thị On Cage/Wireframe để kiểm tra mesh gốc.
- [ ] Đã hoàn thiện hình dáng thân TV bo tròn mềm mại.

## 7. Tóm tắt

Subdivision Surface giúp biến mesh low-poly thành bề mặt bo tròn mượt mà, nhưng cần kiểm soát bằng support loop hoặc Edge Crease để giữ đúng hình dạng mong muốn. Kỹ thuật này được áp dụng trực tiếp để dựng thân chiếc TV trong dự án của module.
