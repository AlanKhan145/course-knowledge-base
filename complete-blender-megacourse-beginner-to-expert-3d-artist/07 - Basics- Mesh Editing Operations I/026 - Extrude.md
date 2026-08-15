# 026 — Extrude

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Extrude |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 19:17 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Extrude** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- modeling, mesh editing và kiểm soát hình học
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


Welcome back! I hope you all were able to make something cool for the last exercise.

You know, that's the nice thing about this online course format, you can take as much

time as you need for the exercises or do them over several times until you really feel comfortable

moving on. And you know, I really suggest that you do take your time with them. I'm

sure it's really tempting to blow through the beginning sections of the course to get

to the good stuff. But really, the only way you're going to get better at anything is

by practicing, and practicing a lot. But that aside, this is where the good stuff really

starts, in my opinion anyway, because today we are finally going to get into some mesh

modeling operations that will dramatically expand the capacity of what we can do and

make in Blender. So let's hop in. I just have a new Blender file up here, and we can switch

into the modeling tab if you like. This is just going to maximize our 3D viewport by

getting rid of the animation timeline at the bottom. Now, modeling is this part of

the 3D asset workflow, that is, the part where we are working primarily in edit mode and

creating a shape by both moving the vertices around and creating new geometry as part of

this object to add complexity and detail to the form. Now the toolbar should be visible

by default on the left side of the viewport here, but you can toggle it on and off by

pressing T on your keyboard. In the next few videos, we are going to be covering some of

these tools that are accessible here on the toolbar. Now I am going to be teaching you the

hotkey for these, but just know that everything we're going to discuss over the next few videos

is also accessible on the sidebar here. We're not going to be covering all of these just yet,

and I'm not going to be going in order as they appear, rather I'm going to present them to you

in the order in which I think they are most frequently used and most important. So let's

get started. So one thing I touched on a little bit in the demo, I just want to go over it quickly

again here in case you missed it, and that is how to soften and sharpen our face normals to

affect the shading of this object. Now we did this on the object level by in object mode

selecting an object by just by left clicking and then right clicking and hitting shade smooth.

Also reversing that by the same process, just choosing shade flat. Now we can also do this

on a per face level, and we can do that by pressing tab to come into edit mode,

making a selection that we wish to be soft or smooth, and right clicking

and bringing up the shade smooth option right here. Now if I tab back out of edit mode into

object mode, you'll see that only those faces that I had selected are now smooth.

This right click menu that I brought up to do this operation is contextually aware of your

selection mode. So in order to perform this operation on the faces, I needed to be in face

select mode. Now I could also access this option in any of the selection modes by coming up here

and clicking face shade smooth. This menu is the exact same as the one we brought up by right

clicking in face select mode, just know that it is also accessible here at the top along with the

contextual menus for vertex select and edge select. I'm just going to undo that by selecting

these faces, right clicking in face select mode, and pressing shade flat. Now we just have our

default cube back the way it was. We can also delete the camera and the light just by selecting,

pressing x, and deleting. We don't need them for this part of the course.

So the first thing we're going to look at is the extrude tool. Starting with this default cube,

let's tab into edit mode. So you'll see here that we have this cube with six faces. We can extend

any of these out without affecting the placement of these existing vertices by using the extrude

tool. So let's go into face select mode and select one of the faces on our cube. If we press e for

extrude, we can pull this face up, but instead of moving this face out so that the sides along

the cube are stretched, we are instead creating new geometry here that is still attached to the

original cube. So just left click when you want to confirm that placement, and you'll see that

we have a rectangle with 10 faces now, as opposed to a cube with six. We can continue to extrude

from these faces to get even more complex shape just by pressing e, left clicking,

making a new selection, pressing e, left clicking.

So now, if we think about combining this with the transformation functions we already know,

we can get even more complex shapes. So if we extrude, we can

scale these faces, we can extrude and rotate these faces,

we can extrude and we can hit g and grab and move these faces around.

Now, we can make things like columns very easily with the extrude tool.

Just moving this out of the way. Let's add a new cube by shift a, mesh, cube.

So we'd start with the base by flattening this cube a little. So let's just hit

s and z to scale it along its z axis, approximately that width. You can now tab into edit mode.

And now let's use the extrude tool to build this column up from the base. So this is how I'm going

to do this. I'm going to select this top face, I'm going to hit e for extrude, but instead of

dragging it up, first I'm going to scale it. So before I left click, if I press s to scale it,

we can scale it in and create this inset face.

Now if we press, with this face selected, if we press e again, we can extrude it straight up,

click to place, and now we're going to repeat the process that we did down here

in reverse up here to create the top. So we are just going to press e to extrude,

and then instead of clicking to place, we're going to press s to scale it out.

And I'm just eyeballing this. Obviously, if you were building columns, you'd want these

to be, you know, the same width and height and things, but we're just eyeballing this just for

demonstration. So now we have this flattened face that is laying exactly on top of this face here.

So we're getting sort of this weird flickering, which we've seen in the past called z fighting,

but all we have to do now from here is with that same selection still made, press e again,

pull that up, flickering's gone, and we have our basic column shape. Pretty cool.

Now, something that is really important about extrusion and causes a lot of frustration in

the beginning. If you press e to extrude a face, and you right click to cancel that operation,

it will snap back to how it was. But the extrusion is still there. When I right clicked,

all I canceled was the movement part of the extrusion. So I'm going to go ahead and click

right click, all I canceled was the movement part of the operation.

So having dropped that extrusion, I can see what's going on if I grab this face and move

it by pressing G, press Z to move it up, and we can see those faces were still created.

Even though we didn't move them out, so it appears as one face. Now doing this will

lead to duplicate geometry that is trying to occupy the same space as the geometry you already

have, which will cause a major problems down the line. So just don't do it. Just be careful that

you don't have duplicate vertices. And an easy way to check out any vertex is by just grabbing it,

moving it around, you'll see if it's a duplicate.

Now we could Ctrl Z and undo that. Or there is another way to clean this up.

And that is by merging any duplicate vertices we have. So let's quickly redo

those duplicates by extruding, right clicking to drop it. So now we have all these duplicates

here. But let's say we can't we didn't notice that we did this and we did some other work on

this model. So we can't just Ctrl Z to undo it. Well, there's a very easy way to fix this without

destroying your geometry. And that is with merging. So to merge, I'm going to pull this up so it's

more clear what I'm doing. To merge any two vertices together, all we have to do is select

the vertices we want to merge, press M on the keyboard and select how we want them to merge.

So at center, we'll merge those two vertices directly in between at the halfway point.

This is another instance in which selection order is very important in Blender, because when you

have an active selection, so if I click here, and click here, this is now my active selection.

Remember that the active object is always going to be in green. And now if I press M to merge,

you see I have a couple more merging options, including at first and at last. And this has

to do with selection order. So I can demonstrate this by pressing M and saying at first.

And you'll see that my active vert has snapped to the first vertex I had selected and merged.

Let's undo that. And with the same two vertices, so you can get an idea of how these are different.

If I press M, and select at last, it will snap that vertex down to the active selection,

which is the last thing you selected. Now, there's one more merging function I want to go over and

that is by distance. And this one is going to be probably one of your most used merging operators.

So basically, all I've done is I've hit Ctrl Z a couple times to undo. So now we are back

at having these duplicates on top of each other. I think we have even three duplicates on top of

each other. We do. So we could select them all and merge them at the center, which if they're

on top of each other, they will just stay in the same place. But now, I'm going to select them all

which if they're on top of each other, they will just stay in the same place. But now,

when you grab it, you can see that it's just the single vertex.

Now we could do it that way for all of these, but sometimes we don't even know

where our duplicates are. And in very complex models, you can end up with duplicates,

and you just don't know where they're located. So the best way to get rid of that is to merge

your vertices by distance. So what this is, is Blender will basically look at everything that

you have selected. And if it finds any vertices that are on top of each other occupying the same

physical space, it will just automatically merge them together, leaving any other vertices that

are not overlapping untouched. So we can quickly fix the top of this column by pressing A to select

everything in our mesh, pressing M to pull up the merge panel, and then selecting by distance.

And you'll get a little notification that says removed six vertices. That means I had

six vertices that were occupying the same space as another vertex on this model. So now,

when I click here, you'll see that all those duplicates have been fixed. So it's easy to

accidentally create duplicates when using extrusion, but it is also easy to fix.

Now, you may notice that when you extrude any face from a mesh,

that you're locked to this blue axis that's being drawn on the screen.

This direction is called the normal. And all that really means is whatever direction

this face is facing. So right now, extruding

pulls the faces out along our global XYZ axis. But that is only because this object

currently has the exact same rotation as our world. We didn't rotate it at all after we made it.

But if we tab into object mode, let's quickly just give this a little bit of a rotation.

Then tab back into edit mode.

So now when we extrude, it is still following the angle of this face, the direction it's facing,

which is also known as its normal, despite the rotation. So just know that when I say that

something is moving along the normal, that is what I mean. It's just the direction that is

facing outward from the selected face. So let's say that you wanted to extrude something

at like a funky angle. Well, you could just hit E to extrude, left click to place,

press G and transform it. You don't necessarily have to be locked to this normal while extruding.

We can extrude along any of the global axes by pressing E for extrude and then the axis key. So

for example, we can select a face, press E for extrude, X will extrude it along the global X

and Y would extrude it along the global Y. We can also extrude along a local axis,

the same way we move along a local axis. So we can make our selection, press E for extrude,

press X for the global X, and then press X once again to shift into the local X transform.

Now, just a quick aside about this local space.

You may be wondering why when you press G to grab something and then double tap X,

it moves this direction, but when you press E and double tap X, it moves this direction.

This is because this object has a key. So if you want to move it, you have to press

G and double tap X. So this object has a local rotation such that this is the local X. And when

we perform a grab operation, it's looking at the object's local X rotation. But when we extrude,

it is only looking at the local transform for this face only. So Blender reads this

for forward and back, and this for up and down.

It's a little bit confusing, and that's something that you will just get used to with practice.

Just remember that the local space for a single selection is not necessarily the same as the local

space for your object. Another note about the extrude and local versus global space, you'll

notice that if I hit E to extrude and hit Z, instead of being locked to the global Z axis,

I'm in this free transform mode. That's because when I say a direction along its normal,

that is another way of saying the local Z axis. So when you start an extrusion, you are already

moving in its local Z space. We can change this to the global Z if we hit E to extrude.

If we hit E to extrude, Z wants to drop the axis, Z again will lock it to the global space,

and Z a third time will lock it to the local space. But that is the same as just pressing

E by itself. So that is the extrude tool. We'll do a demonstration for it, and in the next video,

we're going to cover some more of these functions.


