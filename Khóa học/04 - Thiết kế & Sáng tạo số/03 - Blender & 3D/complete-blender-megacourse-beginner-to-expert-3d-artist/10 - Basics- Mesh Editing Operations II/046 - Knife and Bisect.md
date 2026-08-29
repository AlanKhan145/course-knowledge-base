# 046 — Knife and Bisect

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 10 — Basics: Mesh Editing Operations II |
| **Bài học** | Knife and Bisect |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 15:01 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Knife and Bisect** trong pipeline của section.
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


All right, so it is time to return to mesh modeling and finish talking about some of

these tools that are present here in the toolbar. So if you are in a new blender scene, all I have

done here is deleted the camera and the light. We don't need them for this section of the course. So

just on the default cube, we can come in here to edit mode. And we're going to look at some of

these tools on the toolbar. So the first thing I want to look at is the knife tool, which is this

icon right down here for the cube with the edges cut in the points in it. So we can access this

tool either by clicking here where it says knife, or by pressing the hotkey K for knife. Either one

of those will bring up the knife tool. Now you see we have this little knife icon with a little

blue square under it. So this is just indicating where we want to make our cuts. So let's say I

want to cut this edge with a new point. And I can do that just by with the knife tool active clicking.

And now you can see that I have drug out this line with another point at the end of it. So in the

past we have made our cuts into our mesh with loop cuts, which always divide it in half and follow

the Blender's edge loop rules, so to speak. But we can cut into our mesh in a more freeform way with

the knife tool. So let's press K again on our keyboard. Let's start clicking on edges to make

cuts. And now when we are done making our cuts, we can just hit enter on the keyboard to confirm

that. And you can see that edges have been cut into this mesh. And we can, you know, now treat

these meshes in any way, or these these faces, these edges, and these vertices, just as we do

with any other. Now you could create something like that. You could, you know, create something

like that. And you can see that even though I didn't draw this point to an edge, it's still

cut into this face and just created a vertex right in the center of this face. Now you may get some

sort of errors and shading problems creating geometry like this, but you can do it. All right,

the next tool I want to discuss is the bisect tool. And the bisect tool, if you hover over all

these, you probably won't see it. So what you need to do to access it is come down to the knife tool,

click and hold, and drag the selection down to bisect and release it. So now this toolbar slot

has the bisect tool in it. So we've talked a lot about cutting things in half with our loop cuts,

but say we do not have a, you know, continuous edge loop in the direction that we want to cut.

So the way we would approach a problem like that, say we wanted to cut this mesh, but I have now

cut a triangle into it. So I can no longer use the loop cut tool to cleanly cut through the mesh. So

the way we would tackle this problem is to use the bisect tool. So with the bisect tool enabled,

let's make a selection on our mesh. I'm just going to press A for everything or all. And

now we can click and drag, and you'll see this line form out. And this is just previewing where

we want to make our cut, what rotation we want to make it at. So let's say we want to make it like

this. Now this cut has been made into the mesh, but before we perform any other operations,

we have a couple options if we need to adjust it. If we need to slide it, we can drag the arrows.

And if we need to rotate it, we can drag on the circle. And you'll see when you slide this bisect

tool preview, it is not being prevented, it's not being hindered in any way by the existing

geometry. So even though we have a point here, if we were trying to loop cut and slide that,

and we slid it down to this point, it would not be able to go past this point. But with the bisect

tool, we can do we can place this cut anywhere we need it. When we're ready, we can just click off

of it. And going into vertex select mode, we can see that these points are here and can be

manipulated just as any point. I will say that when you select tools from the toolbar, rather

than using their shortcut, you will have to manually return to select mode up here to in

order to properly select these points to edit them. So that's just something to keep in mind

is that you may get, I'm getting these errors here, but that's because I am still in bisect

mode and I have nothing selected. Now bisect, the bisect tool does require you to make a selection

to work, and it will only create a cut through your selection. So I selected everything last

time so it completely bisected my entire mesh. But if I select these faces and use the tool,

you'll see that it has not continued this cut through the unselected faces.

Okay, so the next tool that I want to cover is the knife project tool. And for this,

let's get a clean, a clean cube here. And let's tap into edit mode. Now you won't see the knife

project button here. It's sort of hidden in a deeper menu, but I think it is such a useful tool

that I want to make sure that I cover it. So what the knife project does is it takes the open edges

of one object and it uses them to make cuts into another object. So what I mean by an open edge is

this cube and any of the actual, most of these, these primitives are all what we call manifold

objects, which means that every edge in this object is connected to another face. There are

no sort of open edges. So a plane is a non manifold object because the edges on this side,

this edge is connected to a face here, but it is not connected to a face here and none of them are

around. So this creates an open edge or a wire edge is sometimes also known. So knife project

only works from an object that has a wire edge. So just keep that in mind. So let's look at what

it actually does. So I'm going to scale this up just a little and we're going to cut into this

mesh based on the shape of something else. And the shape that we're going to use is actually a text

object. Text objects are sort of hybrid object type in Blender. I'm just moving it up above so

we can see it. If I tab into edit mode on the text, I can actually edit what it says.

But if I view it in wireframe, we can see where these edges and faces are going to be drawn. So

it's not really a mesh in and of itself, but it is easily created into a mesh and Blender views

the edges of these letters as open wire edges. So we can use it with the knife project.

So let's position this text object directly above our cube. So the selection order for knife project

is pretty important. So we need to select our cube. We need to tab into edit mode. Then we

to control and click on this text object to select it. What we then need to do is let's press 7 to

come into top orthographic view. And we're going up to this top menu bar. We're going to press

mesh and then we're going to come down to where it says knife project and click that. So let's

look at what it just did. It has cut points and edges and drawn faces directly into the face of

this cube. So what can we do with this now? Well, let's unhighlight some of these central cuts. And

now we could extrude it, for example. And now we have this text cut into our cube.

Now knife project is dependent on view angle. So this cut cleanly into the top because I was

looking at it from the top orthographic perspective. If I move this text around, let's say to

something like this, and I ran the knife project on it by lining it up in my viewport,

coming into the cube, tabbing into edit mode. Now I need to control click this and I sometimes find

that it doesn't work when you have too many objects behind it. So if you are control clicking

and it's not selecting this correctly, just skew it so that there's nothing behind this object,

control click it and then line it up. So let's line it up in our viewport. We have all this

ready to go. Let's go to mesh, knife project. And you'll see it has cut in at that angle,

but it is skewed because of the perspective. And it was when it was cut, and the angle

of our viewport. Now we can fix some of this like intense stretching

by coming into orthographic view before we do this. So this is just showing you another way of how

the viewpoint in your 3D perspective is really important for this tool. So if I press five on

my numpad and come into orthographic view, we've now flattened this cube out. So now let's tab

into edit mode. Let's control select this object, line it back up, mesh, knife project.

Now let's come back into perspective by pressing five. And now you can see that this is much less

distorted. When I do this, I can see that this is much more distorted. So I'm going to come back

into orthographic view, and I can see that this is much less distorted when I've done that in

orthographic view. It works, knife project works with more than just text. You can also use mesh

objects. Again, they just have to have a wire edge. So you could, three, let's add mesh,

with believe no faces in it, and it will be a non-manifold object. In the add circle

initialization menu, let's change this number of vertices to six. This will make it a hexagon.

And if you're wondering where it is, it has just been added inside of our cube. So let's just move

it up. So if I come into orthographic view, or rather first tab into edit mode, control,

click on this hexagon, three, to be in right orthographic, mesh, knife project.

And you can see now we have this hexagon cut perfectly into the side of our mesh.

All right. So I spent sort of a long time on the knife project, but I do think it is a really

powerful tool. And it's definitely a good one to know. So I'm going to wrap up the video here for

now. We've gone over cutting with knife, which we can do by doing, pressing K, and clicking.

We went over how to bisect across the selection with the bisect tool. And we went over how to

use the knife project tool. So in the next video, we're going to continue on with more of these

tools for mesh editing.