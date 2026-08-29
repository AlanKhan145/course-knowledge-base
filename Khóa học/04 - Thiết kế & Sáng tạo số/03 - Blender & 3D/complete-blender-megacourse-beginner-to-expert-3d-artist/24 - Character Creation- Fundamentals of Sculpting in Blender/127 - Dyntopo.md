# 127 — Dyntopo

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 24 — Character Creation: Fundamentals of Sculpting in Blender |
| **Bài học** | Dyntopo |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 11m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Dyntopo** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic

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


All right, so let's go to, let's make a Suzanne over here and let's go into

sculpt mode and let's take a look at Dynatopo. You can find Dynatopo over here or

go to the workspace and go down you have it over here. If you try to enable

Dynatopo, it's gonna give you a warning that the vertex data detected is

gonna, it's not gonna preserve vertex colors, UVs or other custom

data. So you just have to always press on OK and then you have this enabled. You

need to know that it's certain brushes Dynatopo doesn't work like for

example here with grab brush doesn't work, with draw sharp it doesn't work

all right, but with like the main brushes like clear shapes or draw it

works pretty well. So what is Dynatopo? So if I go to overlays and enable wireframes

as you can see now we have this shape and this is mostly, let me delete this

and make another one and now you can see that the geometry is by two quads. If we

enable Dynatopo and while we have Dynatopo enabled, Blender tries to convert

the mesh into triangles. All right, so keep that in mind. So if I enable this

right now and press OK then I have Dynatopo over here with some options.

All right, if I go over here to detailing I have relative, constant, brush, detail

and manual detail. The first two are the most useful ones, the last two are not

that useful and you can actually achieve the same results with the first two that

the last two don't do. So when I explain these two first so you get

the idea what they do. So if I go to manual detail and I set the resolution

over here, the higher the resolution, the higher the geometry will be and what

Dynatopo does, where you press on your mesh, anywhere on your mesh, Blender

tries to add more resolution based on this number over here to that area. So if

I click here nothing happens because manual detail, if I hover my mouth

it's gonna make, it's gonna use flood fill and does not change on each stroke.

So with manual detail, look at it something like a converter, like it

converts to a higher or lower resolution with triangles. So if I click on

data flood fill, it's a resolution like this, 8.5, I press on data flood fill, it's

gonna flood fill the mesh we have with this resolution. If I undo that

and increase the resolution over here and press on data flood fill, now as you can

see we have much more resolution. If I disable the overframe, as you can see

this has, the monkey has much more resolution that we can use to do sculpting.

Let me undo this and enable overframe. Now let's go to brush detail, so brush

if I hover my mouth, it's gonna explain the mesh details relative to brush

radius. So if my radius is like this, so right now I can't set the

resolution like I could with the brush, with the manual detail because the brush

radius, which we can change with F, is gonna set the resolution. So if I click

on it now, now as you can see Blender is trying to add resolution to these areas.

If I increase the radius, now you can see the resolution decreases. If I decrease

the resolution, the radius more, now it has much more resolution as you can see

it is so black when we were looking at it from distance and it is adding a lot

of resolution based on our radius. So these are these two options but I

suggest to not use them at all if you're going to use dot and tuple. The first two

is much more like better in many situations. So let's go to constant

detail. So what does constant detail does is actually it is kind of a combination

between brush detail and manual detail. So you can set the resolution like you

could with manual detail but this time you could actually add geometry with

your strokes. If I click here, as you can see the geometry is gonna be added. If I

increase the resolution, something like this, it's gonna increase the

resolution with each stroke that I make, right? So let's make the resolution to

something like this and if I click on this and right here it's gonna increase

the resolution. If I disable the wireframe, you can see that this area

over here is much more, it has much more resolution, has much more geometry than

this area. If I smooth it out, you're gonna see it better. So this area is much

more high-res than this area. Alright, so then if I click on an area here with my

stroke on constant detail, it's gonna make this this geometry over here and

then I have the option to data float field. So like the manual detail, if I

click on this, Blender is gonna try to make this resolution for the whole

object. So if I click on this, now Blender is gonna calculate and now we have a

constant mesh with the same resolution. And that is pretty handy in many situations

where, for example, you are trying to add some details over here, then you

are happy with it, then you press on data float field and then you have a resolution

that matches in all over the objects. Alright, the next thing we have, the last

thing is relative detail. So with relative detail, it is relative, if I

hover my mouse over here, the data detail is relative to the brush size. So it is

kind of like the brush detail. So if I go over here and make a stroke over here,

clicking is gonna make this kind of effect if I decrease the radius. And if

I go over to detail size, now this is different, this works different than the

constants, the constant by increasing the resolution, the resolution increases, but

in relative, the pixels, the more they are, the lower resolution you have. So if I

use like 22 pixels over here, it's going to decrease the resolution. And if I go

here and decrease the pixel, let's do something like six, and it's gonna

increase the resolution in this area. That is pretty handy. It's very useful

relative for adding details, so if I disable wireframe, and this is the eye

area, I want to add maybe some wrinkles, alright, but I don't want to change the

geometry of other surface of the object I'm sculpting on. If I decrease the

pixels like this, if I try to sculpt in this area, now I'm adding geometry in

this area. And the thing is, if I go to wireframe again, I've added the

geometry. The thing is, while doing the brushes, it is also like making a bulge,

alright, with draw brush, like this is what draw brush does. But as I said, with

other options, like you want to do a sculpt with draw sharp, but draw sharp, as I

showed you, is not gonna have this effect. It doesn't work with draw sharp,

it doesn't grab, and some other brushes. So what you want to do, is you want to

have draw brush, and set this change to zero, if you don't want to

affect the surface, and then you click on the surface like this, if I decrease the

pixels over here, then you are actually adding geometry, but you're not affecting

the surface. So as you can see, I'm not affecting the surface, but adding

geometry over here. Now this area has more geometry right now. So if I go

now to draw sharp, now I have much more geometry to work with, and I can make

some creases like this, which I wasn't able to do in this area for example,

which has much less geometry. And you can see, you have to play around with it

to see. So yeah, that's all the thing about Dynatopo. What you need to remember is

that Dynatopo always makes triangles. So this is not at all good for production,

or animation, or even some rendering. It makes a lot of triangles, and it's

only good for some really quick sketching, and doing the main

shapes of your object, or where you just don't want to, just want to quickly

add some details to your object to see how it looks, and all that. So yeah, that's

one workflow that you can use. Dynatopo, you can quickly add details which you

can't with other options. So in Remesh, or with multi-resolution, you have to have

the same amount of geometry in your object to sculpt. But in this

method, you can always add geometry to where you want, like this. Add geometry

to where you want, and then go to the brush you want, and start adding some

fine details to your objects. Alright, so that's it for this video. In the next

video, I'm going to show you how to how the Remesh workflow works.


