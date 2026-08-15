# 060 — Symmetry Settings

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 13 — Basics: Sculpting with Symmetry |
| **Bài học** | Symmetry Settings |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:25 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Symmetry Settings** trong pipeline của section.
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

Alright, so by this point we have a pretty good handle on the basic functions of sculpting. Now,

sculpting is often used for organic forms such as the tree that we did in our last demo. But

most frequently it is used for living things such as characters or creatures. And all of these types

of things are symmetrical in nature, so we need to learn how to sculpt using symmetry in Blender.

Now, to demonstrate this I have a quad sphere here. That is a sphere that is created of all

quadrilateral faces. And to create this quickly in Blender, we can just start from a new sculpting

template. So if you're creating a new file in Blender, File, New, instead of choosing General

we can come down here to Sculpting. And the new file it has created for you will be in Sculpting

mode. You will have the Sculpting workspace open and you will have this quad sphere here for you.

Now, if you need to get your layout mode back you can always add any of the tabs that we had

loaded previously into this sculpting template. Okay, so let's talk about sculpting with symmetry

in Blender. Now, in the past if we have needed something to be symmetrical we have gone and used

a mirror modifier. So let's go ahead and do that now. And I'm also going to turn on my axes here

just so we have a better idea of where we are in space. So we have a mirror modifier. Let's just

start sculpting. And you see that our strokes are indeed being mirrored across the x-axis here.

So this is great, you may be thinking, but we're going to quickly see that mirror modifier is

actually not the way we want to go because it's not really supported in sculpt mode.

And, you know, you may think, okay, well, I need to change this. Let me enable dynamic topology by

coming up here. And now we have this warning here that says generative modifiers detected. Keeping

the modifiers will increase your poly count when returning to object mode. Well, we've gotten

warnings up here in the past and we've ignored them. So let's just click OK. But now we're getting

this warning here in our mirror modifier panel that says it's not supported in dyno typo. Indeed,

if we even move or click and sculpt anywhere, our strokes are not being mirrored. Well, okay,

we know of another way to get more geometry in Blender and in sculpting mode, and that is with

the multi-res modifier. So let's just use that. Let's add a multi-res to our modifier stack and

notice that the multi-res is snapped up to the top. And this is just the nature of this modifier.

It just needs to be at the top and Blender will only allow it to be at the top. So let's go ahead

and subdivide this a couple times. And now you'll see we also are still getting an error

And now you'll see we also are still getting an error down here that says

not supported in sculpt mode. And if we sculpt,

our strokes are not being mirrored. So this is why we cannot use the mirror modifier

with sculpting in Blender. Instead, we just need to use the sculpting X symmetry options.

And these can be found up in the top right hand corner of the screen. You'll see this icon here

that has a little butterfly on it and that denotes symmetry. So to mirror our strokes

across any axis, simply enable the axis button here. We have X for the X axis.

We have Y for the Y axis. And of course, Z for the Z axis.

You can enable multiple axes at the same time

to mirror in more directions.

These settings can also be accessed by coming into the properties editor panel,

by coming into the properties editor panel, clicking on the active tool panel,

and coming down to the symmetry option. Let's click to enable this drop down.

Here we have the mirror axis options that we were exploring already up here in this

shortcut panel. But we also have a few more.

So lock, and then we have these axis buttons. So enabling these will lock the transformation

of your vertices on that axis. So I have locked the X axis here. So when I draw in the Y direction,

everything is normal. And as I come around to the X, my points begin to move less and less.

It's because they're locked in the X. And of course, you can lock in the Y.

If I draw around this way, suddenly when I reach the exact Y direction,

my points are not being moved anymore. And the Z will lock it in the Z.

You can see it is drawing out here and not drawing there.

And of course, just like any of these other options, you can use multiple axes at the same

time. I can draw on the Z, but once it starts getting down to the equator of this sphere,

my mesh is no longer being sculpted. Right. Next is the tiling settings. So tiling is going to

repeat your stroke across your mesh in the direction that you select here. So when I

have X selected, you can see that when I hover over my mesh, I'm getting these two additional

blue dots on the either side. And that is just telling me where the tiling is going to be drawn.

So let's move my cursor right here. So we have two of those cursor dots on the mesh,

and let's just draw a stroke. So it looks similar to mirroring because I am doing it across an

axis, but I can change the spacing of this by coming down to the tile offset spacing

options and changing the slider. So if I change this to something like 0.5,

you can see these dots are now much closer together.

And if I changed it down even lower, let's put it at 0.25. Now we see we get this multiple,

we're getting multiple strokes drawn across our mesh in the X direction.

Like any of these other settings, this works with any of these axes,

and you can do multiple at a time to create these sort of grids.

So let's look at these radial settings right here. These settings will allow for radial symmetry

in the desired axis. The number here determines how many times the stroke will be repeated within

360 degrees, a complete circle around the central axis. So by default, everything is one.

So when I draw everything, it is just like a normal brush stroke. You have

one stroke being drawn under your cursor. Let's increase X to two. And now when we

look at the previews, we can see how it will create radial symmetry around this X axis.

We can change it to increase the number. Let's increase it to six.

And now you can see I have even more symmetry around this X point.

We can increase this number in any of these directions or multiple just by entering the

just by entering the number here. Drawing will give you a preview of what that would look like.

So we have it here and here.

All right, the last thing I want to look at with the symmetry options is the Symmetrize button.

Now, let's say you come in and you start sculpting on your mesh.

And you forget to turn symmetry on. And you realize all of a sudden that, hey, wait, I need

I need this to be even across across the axis. Well, we can do this after the fact without having

to redo our sculpt by using the Symmetrize button. So just down here at the very bottom

of the symmetry panel under the Active Tool tab in the Properties Editor, we have this button

that says Symmetrize. Let's just click it and see what happens. So you'll see here that what it has

done, it has copied whatever was on this half of the mesh and mirrored it over to this half,

which is great. That's exactly what we wanted in this case. We wanted the negative x half of the

mesh to be copied over to the positive half. And how do you know if this is positive or negative?

Well, if you hit one on your numpad to go into front orthographic view and look at the x

direction laying this way, think of it as a number line, right? With the world origin being zero,

all the positive numbers would go to the right and all the negative numbers will go to the left.

So because I drew on the back of this, I was drawing on the negative x half of the mesh.

But say you didn't draw on that.

Say you drew on the positive half. Well, no problem. You can still use the Symmetrize,

you just have to come down to this drop down here and change it to positive x to negative x. So it's

going to take this positive half and it's going to mirror it onto this. If we click Symmetrize,

same result. And as you can imagine, any of these axes can be mirrored positive to negative,

negative to positive in any direction simply by choosing its option here in the dropdown.

All right, so that is all there is to sculpting really. Actually, I take it back. That's not all

there is to sculpting really. There's one more thing I missed. And that is just something to

notice about the Symmetrize button is that it does not work with a multi res modifier.

So if I have a multi res on this mesh, and I have sculpted some detail into that

subdivision level. But let's say I need the symmetrical now, coming into the active tool

panel, and coming down to the symmetry tab, you'll see that Symmetrize is grayed out. And

this is just by nature of the multi res modifier, the way it works, you cannot have

anything that's going to remesh your object programmatically. So

it's just something to note, it's not going to work with this, you would have to

either apply or get rid of this modifier, and then Symmetrize it. It will, however,

work with dynamic topology, can sculpt on this side, come into the active tool panel and hit

Symmetrize. Okay, so that is all I wanted to cover about sculpting. We're going to move forward

with a demonstration on sculpting with symmetry in the next video.