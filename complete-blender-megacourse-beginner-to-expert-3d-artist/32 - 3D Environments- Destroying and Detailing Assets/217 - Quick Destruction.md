# 217 — Quick Destruction

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 32 — 3D Environments: Destroying and Detailing Assets |
| **Bài học** | Quick Destruction |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 8:47 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Quick Destruction** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- environment art, asset assembly và scene organization

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

All right, welcome back.

But now that we are here, we have everything ready.

Let's try and do something here.

We might actually give the entirety of the model a modifier

called Decimate, and it does exactly the same as the Decimate

inside of edit mode.

But this is like for the entirety of the object.

It would not be looking into, okay, which one does have,

like, more geometry than the other.

We'll just decimate the entirety of the separate objects

or different objects by one.

This is just another cleanup process.

If you have quite a good PC, I don't think you need that,

but you just you can do it anyway, because we still have

quite a large number of faces here.

So let's see that.

So the ratio here is the same as like.

So you'll be just putting a number here, essentially.

So let's try 0.5, and we'll wait here a bit until it just finishes. All right.

Now you can see that we've cut the geometry into half. So 0.5 here.

And let me zoom in just to make sure that things are looking good still.

So 2 million is manageable here.

I'll just hit Control A to apply the modifier.

Right.

Now we are ready to, like, destroy our object.

So I'll hit Control S here real quick.

And again, there are two ways to do that.

And that's why I maintain another copy of our model here.

The first one is that when you go to Object, Quick Effects,

you have something called Quick Explode.

Of course, Cell Fracture is something we might use.

And if you don't have it, again, you can go to Edit and Preferences.

And under Add-ons, make sure to look for Cell.

And you'll find this Cell Fracture add-on.

But quickly here, I'll hit Control S because we have 2 million faces.

This, again, might take a long time.

And although I'm sure that it kind of sort of depends

on the quality of your equipment,

but it's still going to take some time because it's a simulation.

So what's going to happen is that

there will be, like, a simulation of your object being destroyed.

And the frame, like, the frame on the timeline

is going to be, like, fast forward to that frame

where, like, your object is destroyed.

The reason I wouldn't prefer to do that, because it's quite random.

Like, you do not get to control how things get destroyed.

But I wanted to show you that anyway,

because it's really, really nice.

And it saves time if you are, like, if you want, like,

a quick sort of effect of destruction, you know.

So I'll just move that here.

And you'll know why.

Simply because I need a ground or something for this to be a rigid body.

This is not, like, anything like physics for now.

This is just sort of, you know, preparing the model.

Here, I'll switch to rigid body.

And I'll make this passive.

Again, hit Control S.

I'll just turn off all these.

Just so that I could speed up things a bit if I could.

Let's not do that.

What do I have here? A cube.

Oh, it's that invisible cube. Awesome.

Now, I can probably move that plane.

Into damaged satellite. Hit Control S.

I'm just preserving as much memory as possible.

Then I'll select my object.

And hit Control S again.

Then quick effects. Explode. Is it explode? Yes, explode.

And we start waiting a bit.

And that didn't really take so much time.

But as you can see, things aren't really destroyed in a manner.

Or in a fashion that if we were to look at the references.

This is really not how we want things destroyed.

Although this is very quick.

And to do this manually is going to take you a huge time.

If we were to click on that object.

Oh, it's one object.

No, it does have a modifier.

That's the cube.

And this has physics particle system.

Let's go press space. Yeah.

Now things are going to slow down.

I should have probably brought in the timeline outliner here.

It would have made it easier to pause the animation.

Whenever I feel like it's too slow.

So let me just quickly just leave things as is.

I don't care about the frame rate of the animation right now.

I'm trying to figure out a still image.

I just want you to see how things would look like.

You can see it now that things are crumbling down.

And the bad thing about this is that you would only be seeing remnants of the actual model.

And you don't see what you've modeled.

Like here, the reason we've modeled actually the satellite in a non-destroyed fashion

is because it's really not destroyed at the end.

It has only decayed and maybe rusted.

But it still maintains a general shape of it.

So this is why we're not destroying it that way.

But I just wanted to show you that quick way because I find it to be pretty cool and easy and quick. Yeah.

So I'll quickly here bring in the timeline.

And you can see that we've stopped at a certain frame.

And I can only move through these frames that has been moved through because I believe it

starts at frame maybe 19, 18, something like that.

It's sort of ends somewhere here if I just move to 60.

This is going to take some time, but it's going to be a bit faster than actually moving

around the frame.

So I'm just going to go ahead and move it to the next frame.

And I'm going to move it to the next frame.

And I'm going to move it to the next frame.

Faster than actually moving around the entirety of the timeline until it reaches that part.

But maybe this is something you're looking for.

Like this is so much suitable for something as like debris of space or something or maybe

like something that got destroyed, not by nature, just like the sun, maybe the exposure

to the sun or wind.

But something rather that has been caused by erosions, essentially erosions and rusting

and wind blowing through it.

So, yeah, this is one way to do that. Okay.

However, we will be wanting to explode it in a manner or work around it in a manner

that gives us this as a final result.

You know, things are rusty, yes, but not completely gone.

Maybe something has decayed, but the general structure of the actual object is still there

and I'm not missing a lot.

So, yeah, for now, however, now that we have combined our object, then maybe we can actually

go ahead and destroy it piece by piece rather than playing around it with like a quick fashion,

just like how we showed before.

So, yeah, I will see you guys in the next lesson.


