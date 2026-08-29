# 012 — Modeling the Roof (Curves and Array)

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 03 — Building the Fantasy Cabin |
| **Bài học** | Modeling the Roof (Curves and Array) |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 23:42 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Modeling the Roof (Curves and Array)** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- modeling, mesh editing và kiểm soát hình học

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


Welcome, in this lesson we are going to model the roof for our little fantasy cabin.

We are going to use only curves and the array modifier to do it.

So let's go and create a new collection named roof and I'm going to disable the other ones for now.

So first I'm going to do this little part here, the ridge of this little house, like

more or less like this, but I want to do kind of a variation so it doesn't look this straight

and I'm going to use a new feature of the array that we have.

So it's going to look a little bit different.

So I'm going to start with the cylinder shape and I'm going to use a 24 or more, I'm going

to use the default 32 because I don't think I'm going to use subdivision for this.

So now I will rotate by 90 degrees and the only tip about the amount of vertices is that

you keep one vertex on the X and one on the Y because we are going to delete this bottom part here.

Okay, so now I'm going to close this off.

I'm also going to, then I'm going to select this one and deselect the bottom face and

I'm going to duplicate this and scale a little bit just to create a separation and then I'm

going to extrude along normals.

I want to grab this bottom part here and scale only.

I'm thinking this bottom part could be some kind of structure for this part of the roof

and I'm going to use just a bevel.

Just two segments.

Let's see how it looks.

I'm going to reduce this part here.

I don't want to change this proportion, so I want this to be incurring this direction.

Okay, so before I adjust the scale for this one, I'm going to activate my cap and shape

and grab just the line of this top part here.

I'm going to duplicate it and separate by selection and I'm going to use this one to

be the base for my ridge.

Now I'm going to go here and use a simple array and I'm going to do the array after the bevel on Y.

Actually, let's see.

We have a rotation here.

That's why you need to apply your rotation.

Since we're going to use in this direction, I'm going to apply the rotation and now we can use one Y.

So what I'm going to do right now, even though this isn't a curve, I'm going to go here and

convert to a curve and I'm going to use here on line, I'm going to go with curve.

Now we need to select this curve.

Okay, so now you can see that our object is being fit on the curve.

Here I have a line rotation, so we are aligning the rotation forward X and up Z.

So if we don't align, we will follow the direction of our object.

For now, I don't need.

And the reason that I'm doing this in this case is that I want to use this count method

because here we are just counting by the distance, like we have one and then 1.1 and you can

do like this or rotation, but it's kind of limited.

So I want to use curve and with this we can adjust by distance.

So here you can see if I want the distance between one instance and the other to be four

meters, it looks like this.

If I want it to be less, it will keep adding based on the change that you do on this.

But first, let me adjust the size.

Okay, so I'll just scale it down.

Let me see, 28.

Let's compare it to the cabin shape.

Let's scale it more or less like this.

Okay, so now I can come here and reduce the amount.

Now we need to come here since we don't have the subdivision applied and kind of fit on the...

Yeah, I think this looks okay.

And now is the fun part.

We can come here to array and randomize it.

So depending what we change here, you can see that slowly it starts to turn.

Here I'm changing on the Y, so you have a little variation on the Y.

So I'm going to adjust a little bit of variation, maybe 10 at the most.

And here on X, just a little bit too, maybe 5, maybe this could be more. And on Z.

Just so we don't have a straight line here, let's make it so it shows a little bit of

the distance between them.

And this will be the ridge of the roof, really quick.

Okay, now let me just move this, it's the curve for the ridge here.

Now I'm going to grab this part, one loop here to do the slope of the roof.

I'm going to use this here, maybe one more, and delete these vertices.

Now I'm going to transform this into a curve again.

Now you need to enter and set to NURBS, actually, and set to Bezier.

Now you have all of these points.

So I'm going to remove some of them, maybe just this one, I think this one will be enough.

So now I can drag it and modify this curve.

So I want to do kind of a slope here, kind of a cute detail.

And the nice thing about this is that you can go back to this and adjust the way that you need.

So let's move on to the next step.

So the first thing I'm going to do is to create the object that will go here.

So for this, I want to add a simple cube.

And I'm going to do a simple tile, I think a square tile, and I'm just going to round

the edges with a bevel, just to keep on the same language.

So the size is going to be, I need just this, 46, I'm also going to add the bevel here.

So this is going to be our tile, I'm going to rename this tile to Roof, okay?

One thing I can do is I can select both of them, Ctrl L and link in copy modifiers.

So now you can see that it's applied to this curve, all I have to do is remove and select

the cabin shape, let's rename it.

So now in this case, you will need to align the rotation.

So now you select your curve and go to edit, and here you can tilt your curve.

With this, you also tilt the position of your object.

Instead of rotating the way that we have it right here, we can change this curve.

So now we have the correct direction, let's reduce.

So it kind of overlaps a little bit, and now let's adjust the different rotation that we

have from before.

So I'm going to exaggerate this a little bit more, I want it to feel, to look kind

of crooked, even if it overlaps a lot.

So you can play around with the settings here.

So now what I'm going to do is move my curve here at the edge, and I'm going to lower this

part here a bit, and now I'm going to apply an array on this curve.

So it would be like an inception of arrays.

So I'm going to array this curve on the line on the Y, and zero on X, and your roof takes shape.

And you can see that this is nice because light hits different between all of them.

Of course, if you want a more straight look, you can even just deactivate, it will be a

simple tile, but I want something like this.

Okay, so now I want to add some supports here at the front and here at the bottom, and I'm

going to do this without using arrays, just curves.

So let me grab this curve here, I'm going to duplicate and separate.

Now I'm going to add a curve right here, and I'm going to do some support loops.

So here it's kind of sloped, so maybe one here, and just one more here.

And I also want to add one here.

So let's grab this one, this one as a reference, I'm going to copy it and separate.

And I'm also going, yeah, I'm going to leave array on, but I'm going to reduce this by

I think just four, five.

I have the other one selected, I'll just actually reduce this one, go back, okay, this one.

Just going to use a few of them and sparse it out.

So yeah, I think this is a good number, I'm going to move it here.

So this is going to be the support.

I'm going to hide this one for now, this one and this one.

Yeah, let's focus only on the structure right now.

So I'm going to apply this array, yeah, I'm going to apply.

Okay, I need to convert to mesh before, and it's already applied.

I'm going to convert to a curve again, because this is a curve, yeah.

I'm going to convert to a curve, and the same thing.

The line type, I'm going to use here, NURBS, I'm going to use here.

Now I'm going to join this one, it's a little short, let me see why.

I don't know why this one is falling short, but I'm going to grab this, this is better.

So this is a NURBS curve, let's just convert to the same one, let me adjust this real quick.

Let's just make all easier, okay.

So now we have our structure, this below and this on top.

So now instead of doing arrays and adding a different object, I can go here to curves,

and you can go here to geometry, and here you can offset, actually you can extrude,

and you can offset, and create, basically create a geometry just from your curves.

So I'm going to go here, down here in bevel, and I'm going to increase depth, something

like this, and I'm going to go to profile, here I have some options, so if I move here,

you can see that the shape changes, and you can also adjust the resolution, how many basically

edge loops you want.

Maybe if we do a little star like this, it's kind of cute, if I select, let's see, this

gives some nice dimension to the object, let's increase resolution, and we can also come

here, and shade smooth.

So here we need to fill our caps, and also if this cut is still too sharp, you can increase

the resolution here to increase the edge loops here.

So this part here, I think we need to, let's see what we could do here.

So let's lower everything, okay, so this is the structure, let's see

our tile again, so now we can see that we have a little bit of overlap, but I think

it's okay, maybe we should rise this up a little bit, or bring this down, maybe if we

add another one, okay, so this is kind of fun, okay, so now we have our roof, and I'm

going to actually increase the size a little bit, so it's more evidential, pronounced on

top of this, maybe I'll just increase the size here, and not this size, the other size,

so just so it shows a little bit more, and I'm also going to bring this down from the

shape here, maybe it's too much, maybe, so go back a little bit, and I also want to not

overlap this part, but we need a little bit more distance here, a little bit less, okay.

Good, I think this is good, so now let's see if we can mirror this other side, perfect,

so this we can mirror, let's mirror the other side, so now we have this on all sides,

okay, this is kind of cute, let's see how everything looks together, windows and door.

I like how cute and messy this looks, so we're going to add variations for this material here

on our roof, and also we're going to add some slabs here, let's add one more thing

before we go to assemble our scene, I'm going to add also a few steps here, so it does

a smooth transition to your pathway.

I'm going to do something different, since we are working with curves, I'm going to add a curve,

it doesn't matter where it is, let's just go to edit, I'm going to actually select and delete

this one, and I'm going to go here under draw, or curve pen, let's draw, I just want to see

how this looks, not very great, let's do it again, this and this and this and this,

maybe the other way around, okay, it's okay, so now I can go here and play around with the result,

let's draw this, so this is the part in 3D that you can have fun, I mean, you can have fun

I mean, you can have fun anytime, but times like this are pretty fun,

I want to make it like really rounded, like it's made of maybe, maybe adobe,

okay,

okay, I'm going to go here to curves and adjust the resolution,

I just don't want too many vertex when I convert to a mesh,

I could use this as a profile, but it's okay,

okay, let's click shift 10 and recalculate outside,

I still have too much vertices here, so let me go back and reduce this a little more

before I convert to a mesh,

just one more, okay, okay, okay, recalculate outside,

and let's just add here a bevel, try not to overlap anything and auto smooth,

okay, we have a cute step, if this is entered,

okay, so this is our little fantasy cabin house, we used a lot of modifiers and properties that

we learned on the previous lessons, in the next lesson we're going to join everything we did,

like the lantern and the combo stone, and we're going to do a terrain to assemble our scene.


