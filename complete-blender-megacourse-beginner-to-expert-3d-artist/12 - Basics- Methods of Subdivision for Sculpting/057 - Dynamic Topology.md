# 057 — Dynamic Topology

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 12 — Basics: Methods of Subdivision for Sculpting |
| **Bài học** | Dynamic Topology |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 17:15 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Dynamic Topology** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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

we have gone over the multi-resolution modifier, but there is one more method for getting higher

levels of detail in your mesh dynamically in the sculpt mode. I'm just going to delete this object

and bring in a clean UV sphere. Let's come into sculpt mode. So the method that we're going to use

now is called dynamic topology. It's also shortened to dyno typo. This is a method of

dynamically dividing or tessellating the mesh underneath your brush strokes. So to see what

this is doing, let's just take a look at it. Now to enable dyno typo, all you have to do is come up

here to the top right corner of the screen where it says dyno typo and click the checkbox.

You'll get this error message that says vertex data detected. Dyno typo will not preserve vertex

colors, UVs, or other custom data. Don't worry about any of that right now, just click okay.

So now we have dynamic topology enabled. So let's just take our draw brush and click and drag and

see what this does. Now you'll see that despite us having a very low resolution on our original

sphere, dynamic topology has created divisions in this mesh based on where we placed our brush

stroke. Let's tab into edit mode and look at what it's actually done. So you can see that it has

triangulated this entire mesh. Now this is just something that Blender needs to do in order to

calculate this type of division. And underneath our brush stroke, it has added points more densely

underneath where our brush stroke was than it has added, well it hasn't added any over here at all.

So let's jump back into sculpt mode. Now if you go into edit mode on your mesh,

dynamic topology will disable by default. So if you go into edit mode and come back into

sculpt mode and now want to use dynamic topology, you need to come in here and just click this

checkbox again and click pass this warning message.

So like all things in Blender, there are advanced options for this feature. So let's click the

drop down here and look at some of these. We have detail size, refine method, detailing,

and smooth shading. Now smooth shading will just smooth out our sphere the way we have been

using smooth shading before. If you like it to be smoothed, you can just enable this bubble down

here. But let's look at some of these other settings. So currently detail size is set to 12

pixels. So if you change this, you will get a different amount of division under your brush

stroke. So this is 12 pixels. If we increase this to say 30 and draw, we will have less division and

less detail under our brush stroke. And if we decrease this to say about five and we draw again,

you'll see we'll have much finer detail and much denser divisions under that brush stroke.

Again, let's quickly look into edit mode and you will see how our mesh has been divided

at those different detail sizes. Let's re-enable.

Next up, let's look at this refine method. So by default, it is set to subdivide collapse.

I'm just going to return that detail size to the default.

So what subdivide collapse does, or rather, let's start with what refine method does.

Refine method is just how Blender is going to handle subdivisions under your brush stroke. So

the default is subdivide collapse. So what that means is with a detail size of 12, if I draw on

this, and let's actually grab our crease brush for this. So if I draw on this with subdivide collapse,

as the refine method, what it will do is it will look at the object here. And if your edges are

over this amount in distance, it will subdivide them. And if they are under this amount in

distance, it will collapse them. So when we draw with our crease brush, it is subdividing everything

until these edges reach a length of 12 pixels. And then it is collapsing them into each other

so that we retain a relative uniform density over this area.

So even though we are drawing with this crease over and over again on this section of the mesh,

this crease is never going to become very sharp because as soon as these edges are getting close

enough together to start to define it in any sort of sharpness, they're being collapsed into each

other. So if we wanted to get our edges quite sharp, we could do this by changing the refine

method. So under the denim type of dropdown, under refine method, click this dropdown box,

and we'll have a couple more options here. So let's look at subdivide. So this one will add

increasingly fine detail to your mesh, because it does not depend on the length of the edge,

whether or not it is being subdivided, it is always going to subdivide your edge, no matter

how small those edges get. So you can see that by drawing over with the crease brush on subdivide,

you can get these very, very tight cuts into our mesh that are just not achievable with subdivide

collapse. Now, you may be asking, well, why would you ever use subdivide collapse then?

And that is for performance reasons. Now, the more points you have on a mesh, the higher

resolution it will be, but the lower the performance of your computer will be. And

eventually, you might crash your entire program, if not your entire computer,

if you have a mesh that has billions upon billions of polygons in it.

So subdivide is adding way more geometry than we necessarily need in some of these areas.

So just keep that in mind, that you really only want to use this very dense

mesh where you need it and areas of your mesh that don't have as much detail

should be lowered in their resolution to save on performance.

Let's go back into sculpt mode. Let's re-enable dyno typo.

And now let's look at the collapse edges method. So collapse edges, you may have guessed,

sort of the opposite of subdivide, it will collapse your edges no matter what,

so that we are progressively getting less and less detail in the area.

Maybe this is more clear with a draw brush than a crease brush.

So as I draw over this area, it's getting less detailed.

Now, it will still

maintain your detail size of 12. So if you wanted even less detail than this,

you could increase this number and draw over it.

So collapse will always collapse your edges, and it will remove fine detail and sharp edges,

but it will also lower your polygon count. Let's just move some of this out.

Okay, the next setting in dynamic topology, I want to cover is the

Okay, the next setting in dynamic topology, I want to cover, I'm just going to return these

settings to default, just so we aren't confused by what any one thing is doing.

So the next thing I want to cover is the detailing mode. By default, it is set to relative detail.

So what this means is that the size of the detail on your brush is dependent on how zoomed in you

are to your mesh. So if I was zoomed out to a relatively far distance,

and let's just find a new portion of this mesh to work on, I have my draw brush here.

So if I'm zoomed out here, and I have a detail size of 12, at this view distance,

we get edges that are this length. Now if we zoom way in,

and draw, this is still 12. Even though this detail is much more fine than this. Now why is

that? That is because our detail size is in a unit of pixels. So the number of pixels changes

dependent on what is on your screen. That is to say, when you are farther away, 12 pixels covers

12 pixels covers more area on the screen than when you are close up. But each of these is

being divided to 12 pixels at the relative level of detail based on our view distance from the mesh.

So if we wanted to change this, we can do that by changing the detailing method

to something else, we can change it to constant.

And this will create a detail that is constant regardless of how zoomed in or out you are from

your mesh. You will see the detail size change to resolution, it will change from a value in pixels

to an arbitrary unitless value, which we can change here with the slider.

Lower values such as 10 will give you less detail. Higher values, which is 30,

will give you finer detail.

We can also select the resolution by using this eyedropper, clicking on this and coming

to any portion of our mesh which we wish to replicate the resolution of. So let's say I

wanted this resolution of this stroke right here, I could just click with the dropper.

And now when I draw, I have that resolution. And we can see that it is a resolution of 70.43.

Now this button has appeared here at the bottom when we change to constant detail,

and it is called detail flood fill. What this does is it takes the size that you set in the

resolution and applies it to the entirety of the mesh. So let's set our size to something like 25.

So now if we were to draw on this, this would be a resolution of 25 in the constant detail. So even

if we zoom out, we still have that same resolution, just in a larger stroke. So let's apply

this resolution to the entire mesh by pressing detail flood fill. Now, you may not see a difference

right away. But actually, if you come into edit mode, you can see that this resolution

is uniform across the entire mesh now.

Let's return to sculpt mode, re-enable dynamic topology,

and look at some of these other detailing types. Let's look at brush detail. Now this calculates

your size as a percent of your brush size. So you'll see that detail has changed to percentage,

and it is set at 25%. So, to demonstrate what this does,

at a brush size of 40 pixels, with a detail size of 25%, if we come in here and draw on this model,

we get a resolution that looks like that. Now, if we were to increase the brush size,

which I've done just by tapping the bracket key on the keyboard,

and leave this detail percentage at 25%, and now we come in and draw, we have

detailing that looks like that.

Now, if we were to increase this percentage at a larger brush size,

we would get less detail. And if we were to decrease the brush size,

we would get detail that looks like that. And again, you can always come into edit mode and

compare their relative densities here. See that the first option had the highest density,

and this option had the lowest.

Now, the last detailing method we're going to cover is manual detail. Now,

if you select manual detail, and you sculpt, it will not actually change the underlying density

of your mesh. So if I sculpt over a high density area, and a low density area,

it will still manipulate those points, but it is not changing the resolution at all.

So manual detail really only works with the flood fill option.

So it is an option if you wanted to preserve the relative detail percentage,

but if you wanted to keep the relative detail percentage, you can do that here.

It is an option if you wanted to preserve the relative detail changes between two parts of

your mesh, but you still needed to edit the shape, you could sculpt with manual detail.

And just like constant detail, we can apply this resolution to the entirety of the mesh

by using the detail flood fill.

This has just equalized the density of the geometry across the entire model.

So that is all I wanted to discuss for dynamic topology. As you can see, it is a very powerful

tool for creating dynamic shapes on the fly. However, it does triangulate your mesh in a way

that may not be appropriate for animation. So that is just something to keep in mind for dynamic

topology that if you want to animate a piece you create with dynamic topology, you may have to

to re-topologize it later, but we will cover that later in the course.

For now, we are going to move on to a demonstration for sculpting with subdivision levels.