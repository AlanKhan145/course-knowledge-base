# 047 — Spin/Smooth/Shrink

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 10 — Basics: Mesh Editing Operations II |
| **Bài học** | Spin/Smooth/Shrink |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 17:04 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Spin/Smooth/Shrink** trong pipeline của section.
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

So the next tool I want to cover is going to be the spin tool. Now we looked at in a previous

video how to create an array of duplicates in a circle around an object by using an array

modifier. But this was sort of a complicated multi step process that involved us creating

an empty object, moving the pivot point of our cube, and using a modifier. So there's

actually a much simpler way to do this. So let's delete this modifier, delete this empty.

So starting from just a default cube, let's grab this a little bit out in the Y. Now I'm

going to tab into edit mode, and I'm going to come into the toolbar here, which again is

accessible by pressing T on your keyboard to toggle it back and forth. So we're going to come

down here and look at the spin tool. So clicking on the spin tool will give you this manipulator

arc right here. And if we click on either of these points and start dragging in a circle,

we will see that we will get our array of duplicates around the center, just as we did

before. Now, it is important to note that the method using the array modifier was based on

the location of an empty object, and the origin of your mesh, whereas the spin tool functions

simply by looking at wherever the 3d cursor is in your scene, and rotating around that. Now,

there are a few settings that come with the spin tool, so which we can access by opening the spin

menu that appears down in the bottom left hand corner of the screen. So the first option here

is steps and sliding this up and down or clicking the arrows. Pardon me, I lost my menu. Quickly do

this again. So clicking the arrows or sliding this up and down will control the number of duplicates

that are being made. We can adjust the spacing of these duplicates by clicking and holding on

the white circle that is drawn. To adjust the spacing, we can make our spin selection,

we can perform our spin operation again by clicking on the blue plus keys. We can also

control the angle here with this slider, it's the it is the exact same as controlling it here

in the viewport. And we can control the axis around which these spins are made here in the

menu. I had got an error there because it's invalid because all of these are set to zero.

But all I have to do is change one of these to one. And it is now making this spin around the

x axis in this direction. It's just Ctrl Z a couple times to undo that. So a quick note about

how these spins are made, I have the entire cube selected here, which is a manifold object. Now,

remember that a manifold object just means that every edge is connected to a face on both sides.

So when I have a manifold selection, such as the entire mesh, and I click the manipulator,

it will spin out complete duplicates. However, let's Ctrl Z and undo that. If I make a non

manifold selection, meaning I have, say a single face selected, and I click the manipulator and

drag it out, it will extrude these points out and keep them connected. Now it is possible if you

want to duplicate a non manifold selection, this is possible to do by coming into the menu and

selecting use duplicates. Now there is a tool called spin duplicates here. But after some

experimentation, it appears to be largely redundant. And spin appears to have all the

functionality of spin duplicates by using the duplicates checkbox in the menu. Let's just

delete this. Okay, so the next tools I want to cover are the smooth and randomized tools. So a

smooth tool is the smooth tool is right under the spin tool. So we can select it on the toolbar by

clicking it here. And you'll get this manipulator, this yellow sort of dot. Now, the smooth tool will

look at all the points that you have selected and try to average their values in such a way as to

smooth out these angles. So if I click and drag this manipulator, the smooth tool is trying to

interpret based on the direction I am dragging my mouse how I would like these points to be smoothed

out. We of course have a smooth vertices menu option up here after we perform the operation.

Let's look at this, we can control the smoothing here. So sliding this down will unsmooth it and

sliding it up will smooth it. We can tell Blender how many times to repeat this level of smoothing

by increasing the steps. And we can lock any or all of the axes. So next, I want to look at the

randomized tool and randomize is not the same as unsmoothing. Unsmoothing just brings this mesh

back to its original shape. Now if I wanted this to be more random and less smooth, I would use

the randomized tool. The randomized tool is located underneath the smooth tool. So let's

click and hold on the smooth tool, and we'll get this menu pop out. Let's click and hold over

randomize and release to select it. Now nothing in our viewport has changed. But now if we pull

on this manipulator, we can see when we pull it out, we will extremely randomize the points in

our mesh. Now you may be wondering why would you ever want this the smooth tool is a little bit

easier to understand, you know the purpose of it, but why would you ever want to randomize a mesh?

Well, a good practical example of this is creating something like a ground plane. So let's say you

have a scene and you have the ground under it, and it is completely flat, but the scene is maybe

something that is exterior. So you want to quickly create some noise along the surface. So to do this,

you could add a mesh of a plane. I mean, scale it however you need to. But let's tab into edit

mode on this plane. Let's right click and let's click subdivide. Now let's open the subdivide

menu. And let's subdivide it by 30. Now we have a mesh that looks more like this. So now with

everything selected, we can use the randomize tool to give it just a little bit of randomization.

And of course, we can come in here and fine tune that with the sliders. Changing the value of the

random seed will just, it will not change the amount of, you know, transform that these vertices

are getting, but it will just change which ones are being pushed up, which ones are being pushed

down at random. So then you could, you know, scale it up. You could shade it smooth. You might even

put a subdivision surface modifier on it. And suddenly you have a ground plane with a lot more

natural variation consistent with, you know, an exterior or outdoor scene. Let's add a torus. Now

the next tool I want to go over is going to be the shrink and fatten tools. So if we start with

something like a torus, if we wanted to shrink or fatten this, we could not do so by scaling,

because scaling it will change the size of it, but it is not changing the width of this in relation

to the size of it. So we would need to use a different tool for that. We would need to use

the shrink and fatten tools. The shrink and fatten tools can be accessed in the toolbar. And coming

down here to this little cube icon with the arrows pointing inside and outside of it. So clicking on

that will give you another yellow manipulator. All we have to do is grab this by clicking and

dragging, and we can see we can fatten it by pulling it out and make it thinner, shrink it by

pushing it in. Underneath the shrink fatten tool, there is the push and pull tool. This is similar

to the shrink and fatten tool except that it will combine the functions of shrinking and fattening

with a scale tool. So you'll also be editing the scale at the same time. All right, just getting

a default cue back here so that we can more clearly see what we're doing. The next tool I'm

going to cover briefly, it is called the poly build tool. It is sort of more of a newer blender

feature, and I don't really use it all that much myself. So I'm going to cover it just to show you

what it does, but this is not one that I use a lot. So when you enable the poly build tool from

the toolbar, you'll get this sort of highlight over your cursor. So with the highlight active

on your cursor, if you click and drag, you can now move points freely in space without using the G

key. You can still use your single axis transformations by clicking and holding,

pressing the axis key, and dragging. And then you can just release to confirm the new placement. So

I'm clicking and dragging and pressing Z on my keyboard, and I'm locking it to the Z axis,

and then I am simply releasing when I want to confirm its new placement. Now,

if you click and drag on points, they will move. But if you click and drag on edges,

if you click and drag on edges, they will actually extrude that edge. So you can build

out a polygonal shape simply by clicking and dragging. Now if you control and click on the

screen, you will get sort of a preview if you're close enough to create new, new faces. And let's

say you have a point selected. I'm having some issues getting my selections correct,

which is kind of why this is still an experimental feature in Blender. The selection for it is not

totally polished, and it's a little bit finicky. But you know, you can you can control and click

to drag out new faces. Now if you have something highlighted, you can hold shift and click to

delete that selection. And again, this is a little bit finicky. I clicked, I shift clicked on that

point, it didn't delete, but I shift clicked it on the other one, it did delete, and then I was

able to delete that. So that is the polybuild tool. Again, it is still somewhat experimental,

and if you even hover over it, it says undocumented operator. So just know that that is there for you

if you prefer it. Alright, so I'm going to go over the next few tools also pretty briefly,

because they are not ones that are really heavily used, but we're going to cover them anyway. So the

first one is shear. And all shear does, it will give you this kind of wacky manipulator gizmo here,

but shear is just going to sort of skew your mesh in the direction you drag off the manipulator. So

you can see what it does by just simply shearing your cube here. But again, there are other ways

to achieve shapes like this in Blender, and this is just not one I use very frequently. The last

one I'm going to cover as part of the toolbar tools is the rip region tool. Again, this is not

heavily used tool, but what you will get is this little circle manipulator. And if you highlight a

point on your mesh and click within the circle and drag it out, it will separate this point and

change the shape of this face, creating sort of a hole in your mesh. So again, you can't rip from

something that is not connected. But if I selected another one, I could rip this down. And it will

always try to rip from the direction of what based on where you click. So if I click up here,

it's going to rip away this, I click down here, it's going to rip away this. So that is how you

would rip faces from each other. Again, very frequently used tool, but it is there for you.

So that is all I'm going to discuss for the toolbar here. We've gone over most of these,

we've gone over extrude, inset, bevel, loop cut, bisect, and down. And so we are going to talk

about a couple more advanced mesh editing tools in the next video.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
