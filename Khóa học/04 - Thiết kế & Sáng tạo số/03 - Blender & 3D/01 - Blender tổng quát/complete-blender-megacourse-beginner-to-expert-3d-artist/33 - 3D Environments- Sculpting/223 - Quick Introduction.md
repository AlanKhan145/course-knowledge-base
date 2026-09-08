# 223 — Quick Introduction

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 33 — 3D Environments: Sculpting |
| **Bài học** | Quick Introduction |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 14:41 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Quick Introduction** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
- environment art, asset assembly và scene organization
- làm quen Blender, workspace và workflow cơ bản

- Theo dõi bài giảng và ghi lại tên công cụ, phím tắt, modifier hoặc node được sử dụng.
- Lưu một phiên bản thực hành riêng để có thể so sánh trước và sau khi hoàn thành bài.

## Thực hành đề xuất

1. Xem bài học một lượt để nắm quy trình tổng thể.
2. Thực hiện lại từng thao tác trong một file Blender riêng.
3. Thử thay đổi ít nhất một tham số hoặc chi tiết để kiểm tra mức độ hiểu bài.
4. Lưu kết quả và ghi chú lỗi, shortcut hoặc thiết lập cần nhớ.

## Checklist

- [ ] Đã xem hết bài học.
- [ ] Đã thực hành lại nội dung chính trong Blender.
- [ ] Đã lưu file thực hành hoặc kết quả render.
- [ ] Đã ghi chú các công cụ và tham số quan trọng.
- [ ] Đã hoàn thành thử thách mở rộng nhỏ của riêng mình.

## Ghi chú về nguồn

> File này được tạo từ metadata curriculum do người dùng cung cấp (tên bài, section và thời lượng). Nội dung chi tiết cần được bổ sung hoặc hiệu chỉnh khi có transcript, video hoặc ghi chú gốc của bài học.

All right. Welcome back.

This is a new chapter, the sculpting chapter.

It's going to be a little bit short because, again, this is

not the scope of our scene or the course.

What we'll be doing here is that we will be sculpting rocks,

and it would make sense that we can now look back at the references we had before.

So there are a few steps we need to prepare here.

Let me just resize that properly.

We don't need that much space.

There are a few steps.

Of course, we will need to block our rock shape.

General rock shape.

We don't have pretty much here, but I think having one that looks

like this would be pretty much fine. Maybe this too.

This required a lot of details and might take a lot of time.

We can just take the general shape of it and just have it applied.

So what we'll do is that, again, we started with a new scene.

I'll hit Shift A and add a cube.

Again, move it by one unit up so that we have the origin at the bottom.

And I will not go outside of edit mode because we will be editing it

inside edit mode just now.

Because what we will do is that we will scale everything on all

except the Z axis, and we will press E, S, E, S more.

We're just looking onto how we can achieve the same general shape of our object here.

I can also see that it's not only one, but it consists of multiple parts.

You can see that this part has been carved into or has sculpted due to natural elements

like wind and such.

So what we will do is that I'll hit Shift D and move it aside, scale it a bit.

And let's just have the general shape.

Oops, G, Shift Z, maybe S on the Z.

Or let's duplicate it again.

Shift D. I'm just Shift D.

I don't care about if it's Alt D or Shift D.

I just need it to have S on Z.

Just need it to have the general shape. That's all.

And now we can go into sculpt mode.

We need the object selected.

I will select this main object, hit Control J, and then hit Control Tab, and then go into sculpt mode.

Now, if we were to sculpt, we will be using the geometry of the existing object.

So if I were to draw, and I'm using a mouse, by the way, you will see that, you know,

we're lacking a lot of details here because, like, I've been drawing a lot.

So we can do two things, and we will actually, you know, we'll be using them both.

The first thing, it's dynotopo.

The dynamic topology, it adds like a small, invisible grid in front of you.

So it exists on this plane.

If I hit Shift D, you can see that, you know, this is the size or the radius of the triangles

that or the details that we've drawn.

And to better demonstrate it, I didn't change it, by the way, I just press Escape.

So Shift D, the default is 12.

I believe you can adjust it from here. So it's 12.

What I will do is that if I stroke here, now we can see that, you know, it subdivides as,

you know, as I am drawing.

And the size, that's 12 pixels, is, like, constant.

Meaning that if I zoom in, it remains 12 pixels.

The more I zoom in, the more it remains the same.

But that 12 pixels close up is different from that 12 pixels from afar.

And as you can see here, that level of detail is the same.

But because I zoomed in, it got more and more smaller.

So you can do things.

First of all, you can either maintain a very small amount of detail size.

So I just chose four.

And then I can just draw like this.

And you can see that there are a lot of details.

So again, you can just control the size, the detail size, either by scrolling down

or hitting Shift D.

What I would recommend, of course, is that having it at the large amount,

not really the largest, doesn't matter.

Maybe just reset it back to 12.

And then I'll hold Shift to smooth anything I just made.

Doesn't matter if it just destroys my geometry.

Or maybe let's actually just hit Control D.

And I just hold Shift.

Just want to smooth everything out.

It's like as if it's interacting with three objects.

And it makes sense because they are three objects.

So again, what we can do is I'll hit Control D to deactivate Dynatobo.

And I will hit Shift R.

And this is the second method I meant we will be using.

So what this does is it's essentially a Voxel Remesh.

And you can go without doing that grid.

The shortcut is Shift R.

By default, it's here.

For demonstration, it's much better because you'll realize what level of detail

you'll be losing, essentially.

If you have a smooth area like here, and then the grid is pretty large,

then you'll be losing most of that smoothness.

So I wanted to show you that before we can actually continue on adding anything.

So I'll hit Shift R.

I think we can go a little bit smoother here.

And then by default, it doesn't update.

You have to hover over any of these.

Let me show you that again.

So I set this to 0.7, but it didn't update in here.

I have to hover over any of these settings to just update.

And then I'll hit Remesh.

And now these are all now one object.

Although, yes, you might find some artifacts inside.

Then again, you can see that they have all been combined now.

So now I can hit Ctrl D and activate the Dynatobo.

If I hit Shift, I'm now smoothing between these different transitions.

So as you can see, we'll probably do this again.

So yeah, I can hit Shift D and increase the size a little bit.

And maybe I hit Ctrl to like sculpt or Shift to smooth.

You can just decrease that size again and draw, like have a better shape, hold Shift.

And it's a really fun process.

Again, I'm using a mouse.

So don't worry about not getting your strokes looking pretty and stuff.

Again, it's only just a rough look.

So what are we doing now?

So you can, of course, like go ahead and do this over and over,

switch between different brushes and then maybe change something else.

I believe this is mostly what artists would do to draw some details into their like rocks and stuff.

And since it's random, you know, they get away with it.

They get away with it.

You can also like smooth and unsmooth some parts.

And at the end, you'll get a rough shape of how a rock would look like.

But then again, this is, to me at least, is a little bit tedious of a process.

So you can run away, of course, with having a brush that looks like a rock.

And this is what I looked into before actually getting into that.

So what I did is that I searched online for a brush set.

I think it's from evento.com, which is free.

And CC is hero, meaning you can use it for commercial purposes, which is pretty nice.

I already downloaded the file.

So what I will do is that I will go to file, then append, and then locate my brushes set,

rock brushes photo scanned.

And then there is a preview for these brushes.

Then again, like we're now appending a blend file.

I'll double click on that file.

And then under brush, I'll just select the first one, hit shift, select the last one,

and then append.

And now if I hit N under item, sorry, tool, I'll now see, should see all the brush sets.

There we go.

Just remember to switch your brushes.

Leave, this should exist on all.

No, not really.

Yeah, only the first one.

So yeah, now these aren't essentially brushes.

Imagine them as like stamps, because you can see that I'm dragging here.

But what is happening is that I'm only scaling that stroke.

So I can't really move, draw with that brush.

And it makes sense, actually, because if you start drawing with that brush,

you'll be getting these artifacts.

It wouldn't really look like a real work.

And you can immediately see that, like the difference is here now

is that we are not drawing that much.

We decrease the detail.

I don't think it's going to affect us, you know, the details.

You have to pretty much zoom in a lot.

And I think we should turn off the dynatopo for now, because this is way faster.

And we get to like remesh our geometry as soon as we believe this is satisfying.

And then even with this brush selected, I can still hold shift and smooth any artifacts

or, you know, anything that doesn't look like an organic shape.

And then just draw again, smooth things out, smooth things out and just draw.

Let's try a different brush.

You know, this lesson is only just to introduce you to how this looks like.

Like from this side, let's just do multiple strokes here and there.

I'm trying to make sense out of how things are aligned.

And I can hit like maybe, whoops, shift R.

Automatically turns off the dynatopo and then just notice the number here.

So 72 faces, 72,000 faces.

And that increase a little bit, which actually is something we want.

But then again, we can just hit shift R again, decrease the number of faces or sorry,

the grid size and then remesh again.

So this was only an introduction to our scene here.

Again, you can see the dynatopo is really slow.

You can just turn it off and just interact with the geometry that I already have.

Like I don't need anything more than this.

And again, I can just hold shift and drag and just I have like a lot of brushes to work with.

Like 32 brushes is quite enough, to be honest, to go around with.

And you can enjoy a different set of like brushes, which is nice.

So shout out to the people at Evanto for, you know, making this possible.

The process of sculpting is really mesmerizing.

You can get lost pretty easily.

This is satisfying already in a very short period of time, all because of these brush sets.

So again, set up your base mesh.

I think we will redo that again in the next lesson.

And set up your brushes, append your brushes.

I will give a link to the website or the download link to that brush set.

It's over BlendSwap.

And, you know, you can also look for a lot of other stuff there on BlendSwap.

Again, this brush set is free.

I'll provide you with that link in the project files.

As you can see, this is looking amazing.

It's by Robert Duck.

You can see the preview of all the rock brushes here.

They are photo scan, meaning like they are real and they exist in real life.

And they are free and they are CC0, which is something we care about when designing

or making projects that are commercial.

So again, go ahead, download this brush set.

I believe it's important.

If you don't want to, it's fine.

You can always like go with your own methods if you like want something pretty original.

Then again, you can just come up with a lot of original stuff just, you know, using free

brush sets and their brushes like they're not the actual asset.

So, yeah, go ahead and do that.

And I'll see you guys in the next one.


