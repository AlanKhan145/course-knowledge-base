# 063 — Introduction to Retopology

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 14 — Basics: Retopology |
| **Bài học** | Introduction to Retopology |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 22:39 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Introduction to Retopology** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- retopology và tối ưu topology cho asset
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


Okay, so we have finished our sculpt to this level of detail, but now if we

wanted to add finer details to this, we need to talk a little bit more about

retopology. Because we use the dynamic topology setting when we were sculpting,

the topology of this mesh, if you tab into edit mode, you'll see that not only

is it extremely dense, but there's just no edge loops in this. There's no way

that we could use a multi-res modifier with this to add surface details. And

also, if we wanted to animate this mesh, we would not be able to do it with this

type of dense, triangulated mesh. So let's tab back into object mode. So the way

that we would move forward with a piece from this stage, either for high-res

sculpting or for animation, is through retopology. Now, retopology is simply a

process of simplifying this model by basically creating a new model directly

over it that has a lower polygon count and has a cleaner edge flow. So there are

some things to keep in mind when retopologizing a mesh. And one is, you

know, what is this model going to be used for? If it is going to be used for

animation in particular, there are certain things that you need to keep in

mind when creating your new low-res mesh over this. And that is the topology, or

the edge flow, which is basically just how polygons are shaped around this mesh.

And let me just show you an example of what a good topology on a face looks

like. So this is a retopologized mesh that has appropriate edge flow for

animation. So the things to note with pieces like this is what is really

important is that we have consistent edge loops around any areas of our mesh

that are going to be deformed through animation. So in this case, if the mouth

needs to move, we need to have edge flows, or edge loops rather, that go

cleanly around the mouth in a circle so that I could alt and click right here

and it would select this entire edge loop. Now in this image, they have

highlighted all the sections and loops that are appropriate for animating a

mesh. And to find a guide like this, you can honestly just google face topology

and you will get many examples of faces that have highlighted the rings and

edges around the eyes and the mouth and areas of the mesh that need to be

deformed. They will highlight them to show you better how these faces and

edges need to flow. So this is going to become more clear when we get

further in and we actually start retopologizing our own model, but just

know that you can just simply google something like face topology guide and

you will get a lot of image results that will show you basically where your loops

need to be. So for a human face, they need to be around the eyes, around the

eyebrows if you plan on animating that, and around the mouth are the most

important points. So now that we have a general idea of how our finalized

retopologized mesh should look, let's jump back into Blender and see what we

can do to basically have this topology on this mesh. So the way retopology works

is basically I'm just going to model a new mesh over this existing one in such

a way that it matches the shapes I have created through sculpting mode. So we're

going to start with a plane and actually I'm going to tab into the

modeling workspace right here. If you have started from a sculpting template,

the layout and the modeling workspaces will not be up here. You will only have

sculpting and shading, but you can add any workspace you need back

into this file just by simply clicking the plus icon here. You can come into

general and choose modeling or layout or any workspace you need. So I've

just chosen the modeling and it will add it here at the end. Now if you want to

reorder these, you can right-click on any of these workspace tabs and say

reorder to front and that will put modeling at the front, reorder to back,

and you can organize your workspaces that way. So let's move into the modeling

workspace. It took a second because it automatically put us into edit mode.

Let's just exit into object mode again. Okay and I'm going to just do a couple

things to set this up for myself. I'm going to come into the overlays drop

down and I'm going to disable the floor which will get rid of this grid that is

intersecting our mesh and I'm going to disable these X and Y axes lines because

I know which direction this is facing already and it is just getting in my way.

Okay so to start to retopologize this mesh I'm going to press shift a on my

keyboard and I'm going to add in a plane. Now from here I'm going to tab

into edit mode because I want to leave the origin at the world center and I'm

just going to grab this plane and rotate it, scale it so it is about here. Now

there's a few more things we need to do that are that is going to make this

process a lot easier. Now retopology is kind of one of those very tedious

time-consuming processes that you know you will quickly find that you may

want to speed up the process wherever you can. So just a couple things to

start out with. So we have this plane here but right now it's just kind of

these points are floating away from our mesh and rather than having to grab each

point individually and move it to the surface we can automate that process by

turning on snapping. So let's come up to our snapping icon right here and let's

click the drop-down and by default it has been set to increment and that is what

has allowed us to snap to the grid lines here but we're going to change it from

increment because we don't want it to snap to the grid we want it to snap to

this mesh. So in order to do that let's come up here and change this to face. Now

this will open up these other options for you and all you need to do is enable

project individual elements which will allow this these surfaces to snap onto

the faces of another object. So nothing has changed right now because we haven't

moved anything but if we were to select one of these points and press G on the

keyboard. Oh well first we need to enable snapping so all I've done is change the

settings but I forgot to actually press enable it so make sure that this icon is

highlighted. So now if we select a point press G it will snap to the nearest

surface. So now we have this matching the surface of our sculpt but we can't

really see what we're doing so there's a couple tricks that we can employ to

enable to visualize what we're doing a little bit better. So the first thing I'm

going to do is with the plane selected I'm going to come into the object

properties of the plane object and I'm going to come down here to where it says

viewport display. I'm going to click this drop-down and down here at the bottom of

these options I'm just going to click the bubble that says in front. This will

move the object the rendering of the object to the front of the mesh despite

it being behind. So you can see now that it's not being clipped in although it is

existing inside this mesh it is always being rendered in front of it just to

better allow us to see what we're doing. The next thing we need to do to enable

some viewport options that are going to allow us to visualize this a little bit

better is we're going to turn on a back face culling. So what back face culling

is, let me hide this object for just a moment, just hide all of these. So right

now we have this singular face and if we pan or sorry if we rotate around to the

back of it we can see the back of this face. Now normally this is not an issue

but you will notice that as we start to pull things around to the back of this

because we have this as rendering in front it's going to get very confusing

as to what we're looking at whether we are looking at the front of a face or

the back of something in the back. So we need to turn on back face culling. Let's

do that by coming up to the viewport shading options, clicking the drop-down

and enabling this back face culling option right here. So now if I view the

front of this plane we can still see it as we did before but if I come around to

the back we can no longer see it. In fact we can only see the outline because I

have it selected. If I deselect it it disappears entirely. So that is just

going to make it a little bit easier to see what we're doing as we get farther

into our retopology. The next thing that might help your visualization is

enabling some color modes on this. Now right now it is difficult to see the

difference between this and this because they are the same color. So there are a

couple of ways you can do that. You can come down here in the same viewport

display and change the color but you will notice that this does not change

the color in the viewport. In order to visualize this color on our mesh we need

to come back into our shading options and change the color from material to

object. Another way that we can do this is if we come back into material, if we go

into the material properties tab, if we click new to add a new material, and

don't worry too much about any of this because we are going to cover in a

future video, but let's scroll down to viewport display and there is the color

option here which will allow us to add a color in our viewport. The final option

you have for enabling colors is to come into the viewport shading and change the

color mode from material to random. This will assign a random color to every

object in your scene on a per object basis. So the eyes are one color, the head

is one color, and the earrings are one color. Now you may notice that these

earrings appear to be the same color as the head despite the fact that they are

different objects. Now this is happening because there's only a select number of

colors that Blender assigns and you may get it to the point where it just

happens to have assigned the same color to two different objects based on its

randomization. Now if you wanted to change the color of any one of these

objects you'd have to do so by renaming the object. So I have renamed my objects

here in my outliner. I have this as granny underscore earrings so if I needed to

change the color so that this was a different color from the head I could

come in and change the name and that would change the color of the object. So

all these are perfectly valid ways of changing the color of your object in

order to help ease the view of it and helps you see what you're doing a

little bit more clearly. So choose any of those methods that you like if you need

to have different colors in order to be able to see this a little bit easier. So

the next thing we need to do to get ready to retopologize this is to add a

couple of modifiers to the plane object. So make sure you have the plane and you

can even rename it to something like retopology. So you know that this is the

new mesh you are creating that is going to be the retopologized version of this

old sculpt. So let's add our modifiers. So we're going to click on add modifier and

the first one we're going to add is under the deform panel we're going to go

and click on shrink wrap. Now what shrink wrap does is it basically whatever object

this modifier is on, meaning the retopology in this case, it is going to

look at whatever object you put in the target field and it is going to snap the

surface of this retopology object onto the surface of the target object. Now you

may be wondering why we need both the shrink wrap and snapping turned on

because they both provide very similar functions and I will just say that you

will get a much more accurate result if you use both snapping and a shrink wrap

modifier as opposed to using just one. So in order to get this shrink wrap

working, because right now it is currently not working and you'll know

that because the icon here is red, to get this working we need to give it a target.

So let's give it the target of this head sculpt. Let's grab the eyedropper, click

on the head and now it is working. Nothing has really happened visually but

you'll see that if we start to extrude these out, no matter what our view angle

is, it is going to snap along the surface of this mesh. Now the next modifier we

need to add is a mirror and we are very familiar with the mirror modifier

at this point. So add a mirror modifier to your retopology object, enable

clipping and now if we grab this edge and bring it to the center using G, we

will now have this topology mirrored onto the other side of our mesh which

means that we will only have to retopologize half of this face and it

will just be mirrored. The last modifier we're going to add is optional and I

only recommend adding it if you are having trouble with, if you're starting

this retopology and you're having some issues seeing what you're doing and you

notice that there's some flickering that might occur as you continue on. To combat

this, let's add a displacement modifier. So just add the modifier and under the

deform column, hit displace.

So currently we are not seeing any displacement happening. That is only

because we have the edit mode display disabled. So let's enable edit mode

display and with the strength of 1 on here, you'll see that our mesh is, or our

you know, our retopology mesh is being moved out from the surface. So let's just

dial this back to about 0.1 or maybe even 0.05. Give it a very low value, maybe

0.025 so that it just will push this retopology object ever so slightly off

of the surface. If you're having trouble visualizing it or you're getting any

sort of flickering errors, don't worry there's nothing wrong with your mesh. It

is just a display problem, which you can fix using a displace modifier, but we're

not going to use that right now because we're not having any of those issues.

Just know that if you do, that is how you fix it. Now, before we really get

started, there's a couple of add-ons that will make this easier. Now, because

retopology is such a time-consuming and tedious process, there have been many

add-ons created for it that help ease this workflow. And one I just want to

point out to you is Retopoflow. You can find this in the Blender marketplace.

Now this is a paid add-on, but I have used it myself. It does dramatically

increase the speed at which you can retopologize things. We're not going to

be using this in this video, again, because it is a paid add-on. But just

know that if you start retopologizing and you're thinking, oh man, this is very

time-consuming and I wish there was a faster way, you may need to invest a

little later down the road if you find that you're doing a lot of retopology

and you want to speed up the process. This is one I recommend. There are others

out there. Some are paid, some are not. But I know for a fact that Retopoflow

is a good one. Again, we're not going to use it because it is a paid add-on, but

there is one more add-on that comes packaged with Blender that I do want to

make sure we enable, and that is the F2 add-on. So come into Edit and

Preferences, and under the Add-ons tab, you'll see I was already searching for

it. We can come into the search bar and just press F2, and you'll get this Mesh

F2 add-on. Just click to enable it and save, exit. So what this does is it is

basically extended functionality for the fill tool, which we used in our modeling

section. We would press F, and we would fill in certain quads, lines, and faces.

So what the F2 does, let's extrude this up so I can show you. Normally, without

the F2 add-on, if we pressed F with this point selected, it would draw a

triangle right here. But with the F2 add-on, now when we press F, it creates a

perfect quad, and it draws that point out here. So this is just a sort of a

workflow speed up that instead of having to, you know, extrude and merge these

points, we can just quickly add a new point here. And keeping these faces all

quadrilateral is extremely important for having a good topology when you're

retopologizing something, especially for animation. So that is the last thing I

really wanted to discuss before we get started actually retopologizing this

model. So I'm going to pause the recording here, and when we come back,

we're going to continue on and retopologize this entire head model.


