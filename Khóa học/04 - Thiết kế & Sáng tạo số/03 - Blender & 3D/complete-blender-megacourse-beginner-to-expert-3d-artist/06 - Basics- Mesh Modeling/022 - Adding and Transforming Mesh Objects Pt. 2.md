# 022 — Adding and Transforming Mesh Objects Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 06 — Basics: Mesh Modeling |
| **Bài học** | Adding and Transforming Mesh Objects Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 16:49 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Adding and Transforming Mesh Objects Pt. 2** trong pipeline của section.
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

So now that we know how to transform an object, but this cube alone can really only get us so

far. We need to know how to add more objects into a scene. So to add any object to the 3D

viewport, simply hold shift and then press A to bring up the add menu. Blender gives you this

whole list of different types of objects that you can add to your scene, but for now we are

only going to be concerned with this first type here, which is mesh. From there, this whole list

gives you the types of mesh primitives that you can add. Our default scene always starts with a

cube. Any mesh that you add to a scene from this menu is called a mesh primitive. They are mesh

objects that just have a basic shape such as a cube, a sphere, a cone, a cylinder, and so on.

Now these are going to serve as the starting points for modeling more complex shapes. The

add menu can also be accessed by going to the top toolbar of the 3D viewport here where it says add,

clicking on that, and the same thing. Bring up the same menu, go to mesh, primitive, and add a

primitive. Now when you add a new mesh into the scene, you will get this add menu down at the

bottom left-hand corner. Click to expand it and you'll see there's some initialization options

here for the primitive you've just added. So for example, for this cylinder, you can choose how

many sides it has that make up this circle around the top. So setting this value down to 6, for

example, will turn this into a hexagon with six sides. For a UV sphere, same thing. You can click

to expand this add menu and you can use the sliders here to control how many segments and

rings are in your sphere, which is a great way to control the resolution. So you can play around

with these initialization settings and you can get some kind of interesting shapes just from

these alone. Now the thing to notice about these menus that appear down here is that as soon as I

click anywhere off or perform any other operation in Blender, that menu is gone. And there is no way

to get it back without deleting the object and, you know, re-adding it here. That's because this

menu is only applicable to the last operation you performed. So if you click, that counts as an

operation and the menu is gone. So let's look at some of these primitives. Let's look at this one

here that says monkey. Now this is Suzanne, as you can see in the top left corner here, her name is

Suzanne. And I believe the purpose of this being a primitive is for testing materials, you know,

this shape has a lot of interesting sort of curves and planes and it can very quickly show you how

material will appear on a variety of shapes at the same time. But we're going to use her for the

purpose of demonstration. So now that we know how to both add and transform primitives, we can use

these skills to give Suzanne a hat. I'm going to make it a party hat. So I'm going to add another

mesh object by, in the viewport, pressing Shift A, Mesh, Cone. And now that we have the cone added

here into the scene, we're going to transform it so it's in place as a hat. We're just going to press

G, Z to move it up. We can press 3 to look at Suzanne in orthographic side view. And this will

give us a view exactly from the side. And the nice thing about orthographic views is now when I press

G, I don't have to press an axis or Shift X in this case, to lock the X value because we are viewing it

exactly from the side. Moving this cone will not move it in the X direction at all because we are

looking at it flat. So turn this off, sorry. You can move it sort of into place, we can hit R, we'll

rotate along the X axis if we are in orthographic view. And we can hit Scale until it's roughly

where we want it. Looks great. Now you may have noticed that when I added this cone, it added it

right into the center of Suzanne's face. Blender is always going to add new objects wherever this

3D cursor is. This 3D cursor is this crosshair icon right here. So by default, the 3D cursor

is in the center of the world at 0, 0, 0. But we don't have to add new objects here, we can add

them wherever we want in the scene by moving the 3D cursor. So we can do this by holding Shift in

the viewport and right-clicking anywhere else on the screen to snap the 3D cursor to a new location.

So now if we snap this 3D cursor over here, and we add a cone, you'll see it adds it over here.

If you've moved the 3D cursor and you want to get it back to the world origin exactly,

simply hold Shift and press C on the keyboard. This will snap the 3D cursor back to the origin

and also reset the camera zoom so that you'll be focused on the world origin. This is handy,

sometimes you may accidentally move, you know, your view way out and way back and you're like,

oh no, I need to get back there. Just hold Shift and press C and it'll snap you back to

the original location. You can easily duplicate any object you've added to the viewport by

selecting the object and pressing Shift and then D and moving it out and clicking to confirming

the new position. You can duplicate along a single axis using the same principle of moving along an

axis that we just got went over with transforms. So you can select an object, you can press hold

Shift and press D to duplicate it and then press Y to move it only along the Y axis. Clicking to

confirm as always. Now once we start having multiple objects in our scene, we're going to

want a way to keep track of them. And we can do this by renaming these objects. You can see the

name of every object up here in the outliner. And you'll notice when we start duplicating that

Blender adds these suffixes .001, .002, .003 for all these objects that we've duplicated. This is

because no two objects can have the exact same name in Blender. However, if we wanted to name

these something other than the default, we can do so by either double clicking this name in the

outliner, which will bring up an input field. We can type in a name and press Enter to confirm it.

Or you can do this by clicking the object in the 3D viewport and pressing F2 on the keyboard,

which will bring up that same input field. Type the name, press Enter to confirm. And now you can

see we've renamed this one Hat. So now I've added all these cones over here to the scene, but I

don't actually want them there. It's not part of what we're doing. So to delete an object, select

it by left-clicking, and then either hit Delete on the keyboard or X, which will bring up Delete. I

think we'll just delete it. X will bring up this confirm menu, and you can press Delete. Note that

pressing the Backspace key does not work for this. It is only the Delete key. We can just delete these

objects. So this hat's looking pretty good, but I want like a little pom-pom on the end of it right

now. So how I'm going to do that is I'm going to add another object, and I'm going to add a UV

sphere. Now I was messing with the initialization settings here just a moment ago, so you'll see

that when it adds, it's not actually adding as a sphere because it remembered the last settings I

had. So all we have to do is reset this. It's 32 and 16. You can make it whatever resolution you

want, but those are the default values for a new sphere and a radius of one meter. So press 3 to

go into Right Orthographic. Press G to grab this sphere. We're going to move it up about there. Now

we're going to press S to scale it in. We're just going to make sure it's lined up the way we want

it. R to rotate. That looks pretty good. So now this hat has a little pom-pom on the end. But say

I wanted to move this now. Well, when I click on the hat, you'll notice that it's only highlighting

the cone object. And when I move it, only the cone moves. That's sort of a problem. Now we could do

this using multi-select. We can click on both of the objects that make up this hat. We can click

the hat and then shift and click on the sphere to multi-select. Now when we move it, they move

together. You can also select multiple objects by making sure your Selection Mode up here is set to

Box Select. You can hold and look at the Selection Modes, but we're going to have it on Box. We can

click anywhere in the viewport, hold and drag over the objects, and it will select them in the same

way. Now this pom-pom is part of this hat, and I want it to be attached. But currently Blender

sees these as different objects. And you can see here in the outline, there's an entry for the hat

that we renamed to Hat. It used to be Cone. And there's one that says Sphere, which is the pom-pom

on top. You know, they're separate. But we can join these objects together by selecting the

sphere, then shift-selecting the cone so we have the multiple selection, holding Ctrl and pressing

J on our keyboard. This will join these two objects together. And now you can see when I

click to select it, it draws the selection outline around both objects. And the sphere has disappeared

from the outliner up here. Now this is a good time to mention selection order in Blender. The

order in which you select things is typically very important. The most recent selection you make will

always be highlighted here in this green color, and that is what is known as the active selection.

Everything else that has been selected before that using shift and clicking will be highlighted

in blue, and that is just known as the selection. For joining objects, the order in which you select

matters because Blender will always join your selected object to your active object. This means

that the combined object will have the origin, which is Blender's terminology for pivot point,

of the active object. So what does that really mean? It means that if I join the sphere to the

cone by selecting in that order and pressing Ctrl J to join, this object will now pivot or rotate

around this green dot. The difference becomes more apparent if I undo that, separate those

objects. So the difference becomes more apparent if I select the cone first and I join it to the

sphere by pressing Ctrl J, you'll now see that the pivot is up here and it is the sphere's pivot,

and when I rotate it behaves completely differently. So keep this in mind when

transforming objects. They will always rotate and scale around the origin,

which is represented by this green dot. You can move the pivot point of any mesh object,

but we will get into how to do that in a future video when we start editing the

actual points that make up these objects. So the last thing I want to touch on in this

video is the shading modes that are available in Blender. So when you add a sphere such as

this one, you may be like, why does it look all flat and faceted? Can't you know, can it just be

smooth? And yes, it can. In Blender, you could decide whether you want to draw objects with

flat faces such as this, which is the default for any new primitive object or with smooth faces.

And to switch, all you have to do is select the object in the viewport by left-clicking and then

right-clicking on it and picking this first object in the context menu, which says shade smooth. So

you can see we no longer have those hard edges on this sphere. To put it back, same thing, just

select the object, right-click to pull up the object context menu, and press shade flat, and

we will get that faceted look back. So to recap, we now know the most fundamental functions of

Blender, which is how to navigate around our 3D viewport, how to snap to orthographic views,

and how to add, transform, and delete mesh objects. Now I always think it is good to

practice new skills before you move on to the next topic. So as an exercise, I'd like you to

build something in Blender using adding, transforming, and duplicating meshes. I'm

going to do this as a demonstration. You're welcome to follow along and build the same

thing I'm going to build, or build something totally different that's your own creation.

It's up to you, as long as you are practicing those functions and learning those keyboard shortcuts.


