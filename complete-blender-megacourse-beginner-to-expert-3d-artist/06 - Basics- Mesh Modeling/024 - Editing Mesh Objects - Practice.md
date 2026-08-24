# 024 — Editing Mesh Objects

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 06 — Basics: Mesh Modeling |
| **Bài học** | Editing Mesh Objects |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 44:39 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Editing Mesh Objects** trong pipeline của section.
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


All right, welcome back. I hope you were able to make some cool creations with the primitive

objects. If you followed along with the demo, it should be clear that with enough time and

patience, you can make some pretty cool stuff, even with just these limited functions. But

I'm sure you're thinking, yeah, this is great, but not every object in the world is just

a box or a sphere. What about organic forms like characters? And you're right. We need

to learn how to edit these primitives into more. Before we get started editing these

meshes, however, I do need to briefly explain something about shading modes. If we hold

Z on our keyboard, we will bring up this radial shading menu. Shading modes in Blender allow

you to view your model with different levels of information. So by default, a new Blender

file will be in the solid shading mode. This will render your objects with these opaque

gray faces, which by now should be very familiar to you. However, if we hold Z and select wireframe

mode, now we are viewing these objects as wireframe meshes that we can see through. If we

hold Z and select material preview, this will show you the materials and textures applied to

your models should you have any. These models are being rendered in solid white because we

currently do not have any materials applied to them. Holding Z and pressing rendered will bring

you into rendered mode. Rendered mode shows you your solid objects plus their materials,

plus any lighting information you may have in the scene. Remember that Blender default

scenes start with a light object in them, and this is for viewing things in rendered mode.

We will discuss these shading modes in more detail in future videos, but we just needed

to be a little bit familiar with them in order to proceed to the next section. For the time being,

we are only going to be looking at solid and wireframe modes. Okay, with that out of the way,

we can get into mesh editing. Open up a new Blender file if you don't have one open already.

We're going to use a sphere now, because I think this will be easier to understand on a sphere. So,

we're going to select all the objects in our scene by pressing A. We're going to delete them

by either pressing delete or by pressing X and then confirming delete. We are now going to add

a sphere to our scene by pressing shift and A. Mesh, UV sphere. Now, up until this point,

we have only been working with meshes in what is called object mode. Object mode is used for

selecting and manipulating entire objects like we have been doing so far. But we can edit these

primitives at a finer level by manipulating the component parts that make up these mesh objects.

Now, a mesh object is made of vertices, edges, and faces. And if you select this object by left

clicking on it and pressing tab, I can better demonstrate what I mean. Pressing tab will bring

you into what is called edit mode. Edit mode will allow you to go into an individual object and edit

its vertices, edges, and faces. While we are in edit mode for a particular object, we are only

going to be able to edit that object. So, say I have a few objects in this scene. I'm going to

duplicate this sphere, shift D, X to move it along the X, shift D, X, move it along the X. Now we have a

few objects in our scene. Now, if we select this original one and press tab to go into edit mode,

you'll see that only this one has changed. And if we click on these additional spheres, we cannot

do anything with them. In order to edit these other objects, we would have to tab out of edit mode,

into object mode, select the sphere we wish to edit, tab back into edit mode, and now we can select points

on this object. You can also switch between object and edit mode by selecting the object,

coming up to the toolbar here, drop down, selecting edit mode, and selecting object mode again to tab

back into object mode. Now this drop down will give you all of the modes currently available to

you based on your selection, but we are only going to be concerned with object and edit mode. So let's

select this sphere and go back into edit mode to take a closer look at it. Now in order to edit

this mesh, we need to understand a little bit more about how it is constructed. As I said before,

every mesh object is made up of vertices, edges, and faces. So each of these dots here is called a

vertex. And all a vertex is, is a location in 3D space that is defined by coordinate values on the

X, Y, Z grid. Left click on any vertex to select it, and you can press N to pull up the sidebar.

This will allow you to view its location numerically. So if I select this vertex,

it will show me that this vertex has a location of approximately 0.69 meters on the X direction,

0.46 meters in the Y direction, and 0.55 meters in the Z direction. These numbers

when paired together are just describing this exact point in space. Now remember that the

world origin is this point here at which all these lines converge, and its numerical value is 0, 0,

0. And as a quick side note, the three number coordinate values are always read in the order

of first X, then Y, then Z. So if something on a 3D grid has a location of 2, 8, 14, that means

that it is two units on this grid away from the X location. I'm sorry, I should say it is two

units away from the world origin along this X location, two of these grid lines. It is eight

units away, eight of these grid lines away from the world origin in the Y location, and it is 14

units away from the world origin in the Z direction, which describes this location in

space. Now I know I might be being sort of repetitive here, but it is really essential

that you understand how 3D graphs and plotting things on a grid work. It's sort of the basis

for the entire concept of 3D modeling, so I apologize if this all seems fairly obvious,

but you know, for some of you, it may have been a long time since you took any sort of algebra or

math class. So I really just want to make sure that this is clear. And even after all of this,

if it's still not really clear to you why these numbers are what they are, and how these axes

work and so on, then I suggest, you know, you just take maybe an hour or so to brush up on

some basic algebra and review the Cartesian coordinate system. So don't worry about following

along with what I'm about to do, but just to describe what a mesh is to you. A mesh is essentially

a set of vertices who, when plotted on this three-dimensional grid, form all these points

that make up the shape of, in this case, a sphere. So with the information of all these individual

points, Blender is able to draw lines between them called edges, and this will form the mesh

that makes up our object. We can view the wireframe easily, again, by pressing Z on the

keyboard and selecting wireframe, or selecting wireframe icon at the top. So now we are seeing

all the vertices and the edges that make up this shape, as well as the vertices and the edges around

the back side that are normally obscured by faces. Faces are these surfaces that Blender

draws between areas of three or more edges that are rendered opaque and give the object its solid

appearance. We can select vertices, edges, and faces by changing our selection mode. Now we can

do this by coming up to the upper left-hand corner next to our mode selection. These icons

here denote your selection mode. Right now we have this one with the dot highlighted to show

that we are in vertex select mode. This means that when I left-click on this sphere, it will

select a single vertex. We can select multiple vertices at the same time the same way we select

multiple objects, by selecting one vertex, then holding shift and selecting another. You'll notice

that if you select two vertices that are next to each other, it will also highlight the edge

between them. This is because an edge is defined by these two vertices. And if you think about it,

it is physically impossible to move either of these two points in space without affecting

the straight line that is between them. If you are in box select mode, which you can make sure of by

making sure that this selection tool has a box around it, if it does not you can hold it, select

or you can toggle through all the selection nodes by pressing W on your keyboard. So in box select

mode, if you click and drag out a selection, it will select all the vertices within that area.

Now selecting the line icon here will put you in edge select mode. You can see when I click over,

all the dots have disappeared from our mesh. This is because we are no longer working with

single points in space and instead we are going to select entire edges when we click. We can hold

shift and select multiple, and we can drag out a box selection the same way we did with vertices.

Now the last mode is face select mode, shown with this square icon. Same principle,

when we click we select an entire face, which is made up of the edges and the vertices. We

can shift and click to select multiple. We can drag out a box selection and select everything

under the area. Now the reason why I brought up shading view modes at the top of this video is

that your selections will be affected by what mode you are in. So while you're in solid mode,

if you drag out a box selection, you'll see that these faces on the front side of this mesh have

been selected, but if we rotate around, nothing else has. However, if we are in wireframe view,

which again we can get to by holding Z and selecting wireframe, if we drag out a box

selection now and then hold Z and return to solid view, we can see that these faces on the front

have been selected, but it is also selected through our mesh to the faces on the back side

as well. We've discussed quite a bit now about how to select portions of our object in edit mode,

but there are a few shortcuts for selection that will immensely speed up your workflow. Let's go

over some of these quickly. When modeling, there will constantly be times when you want to select

all the vertices or edges in a loop, such as these loops that go around the sphere horizontally. Now

it would be awfully painful to have to come in here and click, hold shift, click, and shift click

our way all the way around the mesh. So instead we can use the loop select tool. Loop select tool

works in all selection modes, vertex, edges, and faces, and to use it all you have to do is hover

over the edges you want to select of the loop, hold alt, and then click on the edge. This will

highlight completely around the model. Again we can do this in edge mode and in face mode,

sorry, and in face mode. You'll notice when in face mode especially that depending on where

you click, Blender will select the loop either horizontally or vertically around the model.

So in face mode, clicking more towards these vertical edges on the left and right side of

this single face will tell Blender to select horizontally. Clicking along these horizontal

edges that run at the top and bottom of the face will tell Blender that you want to select vertically.

When selecting these vertical loops on the sphere, you'll notice that it doesn't go all the way

around. It stops one face short of the topmost point of the sphere. This is because the face

loop select function can only select loops of quadrilateral faces, that is to say faces with

four sides. If you hold alt and click on a face with four sides that is connected to other faces

with four sides, Blender will be able to detect them as a loop. However, these faces at the top

and bottom of the sphere are triangles. They only have three sides, so Blender stops the loop

selection because it has detected a side, or a face I should say, with something other than four

sides. Now loop select, both in edge and in face mode, you can use them with the multi-select

function. You just hold alt, you hold shift after you make that first selection, and you select

again and continue holding alt and shift for each selection you wish to make. Now not everything you

need to select is going to be in a straight line with quadrilateral faces. Suppose we need to select

all the edges along the surface in an S pattern. While we could just click to select and hold shift

and begin selecting everything we need along that curve, this is somewhat tedious.

So instead, to speed this up, we are going to use the shortest path selection tool. The shortest

path select works by first making a selection, either a vertex, an edge, or a face. This will

work in all modes. Then holding ctrl, and then clicking on another point on the model. So if I

click here, Blender will detect the fewest number of edges between those points because I am in edge

select mode, and it will select everything along that path it finds. So we could select our edge,

hold ctrl, select this point, and then without letting go of ctrl,

continuing to select these points until we have our S shape. Or for instance, if we go into

top orthographic view by pressing 7, let's say we wanted to select half of these triangles that

make up this topmost circle. Well in face select mode, we could do this with shortest path

by holding ctrl, clicking, and then holding, still holding ctrl, clicking here, and it will select

all of these along this path. This is another instance where selection order absolutely matters,

because Blender will always perform the shortest path operation from the active face, which is

highlighted in green here. So if I hold ctrl with this still active and click out, it will grow the

selection from that active green triangle. So if I wanted to grow it this way, I wouldn't be able to

do that because this face would need to be the active face. To make this the active face, we can

press shift, click to deselect it, and then click again, still holding shift, to reselect it as the

active face. Remember that the last selection you make will always be the active face. So now if we

ctrl and then click, we can grow the selection that way. So now that we know how to select

individual portions of our mesh, we can use the same transformation tools that we

used in the last video to change the shapes of these primitive objects.

So using the selection tools we just learned, we're going to make a selection,

and we can hit G to grab and move around and move.

We can press R to rotate our selection, and we can press S to scale it.

Now you may notice if you have a single vertex selected, that you can grab and move around and

move it. But scale and rotate will have no effect. This is simply because a vertex is

a single point in space, and by definition, a single point in space cannot have the properties

of scale or rotation. And it is reflected here in the sidebar panel, which again,

if it is collapsed, we can press N to bring it up.

For this vertex selection, it only has a location property. If you select an edge,

you'll see that you can rotate and scale it, as well as move it.

The same is true for faces. We can move by pressing G, we can rotate by pressing R,

we can scale by pressing S.

So let's use these transformation tools.

Rather than undoing through that, I'm just going to add a new sphere. So let's

undo through that, I'm just going to add a new sphere. So starting from a default sphere,

we'll press TAB to go into edit mode, and let's go into vertex selection mode by pressing

this icon. So now we're going to use these transformation tools to change the shape of

this. And we're going to change it from a sphere to more of a teardrop. So I'm going to go

press 1 on the numpad to go into front orthographic view, I'm going to press G

to grab this vertex, and I'm going to press Z to transform it along the Z axis only. So again,

that's G, Z, remove it up, and we're going to click to place it.

So next we're going to select this entire loop going down. We can do that by holding ALT and

selecting between these two points along this loop to select the whole loop. Pressing 1 to go

into front view. Pressing G, Z, we can move it up.

And by pressing S, we can scale it in. Now we're just going to repeat this process

with all these loops until we have changed it into a teardrop shape.

Okay, that looks pretty good. You may notice me move in and out of edit mode quite a bit

while I'm modeling something. I'm just trying to check the silhouette of the shape

to make sure that I'm doing the right thing. So I'm going to go ahead and press G to go

while I'm modeling something. I'm just trying to check the silhouette of the shape,

which I find is a lot easier to do when the vertices aren't being drawn over it.

It just throws off my eye a little. So the tab shortcut, as you can see,

will be extremely useful in quickly getting in and out of edit mode.

So there is another way to achieve this shape with fewer steps, but slightly less fine-tuned

control. And that is with what is called proportional editing. So let's move this

off to the side for now, just by hitting G and pressing X and moving it over.

And we're going to add another sphere right here.

Shift A, Mesh, UV Sphere.

So let's tab into edit mode. We're going to select just this top vertex,

the same way we did with this last one. And this time, we're going to turn on

proportional editing by pressing O on the keyboard. And this little icon here will light

up to tell you that proportional editing is now on. And we can always toggle

proportional editing on and off by clicking the icon itself.

So with that on, we're going to go into front view by pressing 1 on the numpad.

I'm going to frame this up. We're going to press G and Z, the exact same way we did before. But

you'll see now that we have this black circle drawn around our selection. And when we move it up

to about the same point, we're dragging these loops along with us in a way that sort of has

a fall off in which the farther away you get from this selection, the less

these vertices are going to be influenced by this transformation. So Ctrl Z to undo,

hit G and then Z for the axis. This black ring is the influence radius.

So we can change it and effectively change the shape we are creating by before we click to

confirm the placement of this while it's still under our cursor, we can scroll the mouse wheel

up to increase the influence or scroll it down to decrease it. Scrolling it all the way down

effectively makes it the same as having proportional editing off. So we can scroll

till we find a shape that's

relatively close. We can click to confirm. We can press O to turn off proportional editing.

And now we can scale these loops by holding Alt, clicking between these,

pressing S and scaling them in

until we have roughly the shape that we want.

Now, the difference between this method and this method may seem somewhat arbitrary at this point,

but you'll see that there are going to be times when you're going to want to move something in

a way that just feels a little bit more organic as if you were pushing or pulling bits of clay.

And proportional editing is a really great tool for that.

Let's keep this one. I like the shape a little better.

So I think this is a good time to mention something about the pivot point, which is known

in Blender also as the origin. So I may use terms pivot and origin interchangeably here.

Now, we've discussed it before, but I want to bring it up again, because you might have noticed

now that when we move things in object mode,

our origin is moving along with our mesh. However, if we tab into edit mode,

and say we have everything selected, and we can do that by pressing A on the keyboard,

if we now move our mesh around, the origin remains where it is.

This is because this mesh is essentially parented to this origin.

So when you move a mesh in object mode, what you're really moving is the origin,

and the mesh is sort of just following along with it. However, when you move something in edit mode,

you're moving all these points individually relative to this point here.

So by changing the relative location of this mesh to its origin, that is one method of moving

your pivot point. So let me show you what I mean by that. In front orthographic view,

press 1 on the numpad if you are not in it already,

we can move the pivot of this object. So right now, if we rotate it,

this is what it looks like rotating around the origin at the center.

And if I were to move this object in object mode, it would still rotate that way.

Now, however, if we start with this object in the center, we can do that by pressing Alt G

to clear the location. If we tab first into edit mode, and then press G, and then press Z to move it up slightly,

so it looks like it's sitting on this red line, which this will serve as our ground plane.

But in edit mode, we've moved it now. So if we tab out, we'll see that the origin

is now at the bottom of the object. And now when we rotate, it will behave completely differently.

So why does this matter? Well, in a more practical example, let's say you're making

an animation, and in your scene, you have a character and they need to move through a doorway,

you know, to open a door. Well, let's make a door. Very quickly, we're just going to add a cube by

pressing Shift A, Mesh, and selecting Cube. We're going to scale it in the Y direction by pressing

S and then Y and scaling it in. We're going to scale it in the X direction, S, X.

And that is a roughly a door shape. So let's press one to go into front orthographic.

So let's say that this x axis line is our floor. And this blue z axis line

is going to represent where the hinges of our door would be. So if we move this into place,

rotate around it, so it should swing open like this. But currently, its origin is at the center.

So when I press R to rotate and Z to rotate around the z axis, that is sort of a problem.

So let's clear the location by pressing Alt and G. Let's go press one to go into front

orthographic view. And let's tab into edit mode before we move this object. So with everything

selected, which it should be by default, but if it is not, just press A for all, press G,

and let's scooch it up so that the corner lines up with the ground plane and the edge

where the hinges should be. Now let's press Tab to go back into object mode.

Now when we select this and press R and Z to rotate it,

you can see it is rotating in a much more door like fashion.

One more thing to note is that your mesh will always scale away from your pivot point. So up

So up into this point, because we have not moved our pivots, they always start

by default at the center of the primitive. So when we scale it, it scales from the center

equally in all directions.

But now with our pivot offset from the center, when we press S to scale this object,

you can see that it is scaling directionally. This can be really useful.

Now, the only caveat to moving the pivot this way is that it is not always the most precise.

If we zoom way in on this, you can see that the origin is not exactly on our mesh.

Our door is actually floating a little bit above it.

Now we can get this origin exactly onto our mesh if we need it, if we need to be really precise.

You can do this with snapping. So in edit mode, I'm actually going to move this a little bit

farther away from the origin just so it's more apparent what I'm doing. So in edit mode,

we want to select this edge. We can do that by box selecting both vertices,

we want to select this edge. We can do that by box selecting both vertices,

selecting it in edge mode, or if we are in wireframe and in the front view,

we can box select this vertex, which will select also the vertex behind it.

Once you have this edge selected, we can hold Shift and S to bring up the snapping menu,

and we're going to select cursor 2 selected.

This has snapped our 3D cursor exactly onto this edge at exactly the halfway point

between these two vertices. From here, we're going to press Tab to return to object mode,

and with this object highlighted, we are going to right click to bring up the object context menu.

Now we used this before when we were shading things both smooth and flat, but this time we're

going to go down here to where it says set origin, and we are going to select origin 23D cursor.

This has snapped the dot that appeared here onto exactly this point,

which because we have snapped the cursor, is exactly along this edge.

Now under the set origin menu, again right click, set origin, we have a couple of other ways we can

snap our origin. We can do origin 2 geometry, which will find the center point of this mesh

and snap it to that, or just Ctrl Zing to get this origin back at the world center.

We can set origin, geometry to origin, and that will snap the center point of our mesh

to wherever the origin is in world space.

Again, set origin, origin to 3D cursor. So if we have this snapped onto this edge,

we can now select this and press Alt G to clear the location, and instead of clearing it

so that the center point is on the on the world origin, it has snapped the origin of the object

onto the world origin, which gives this object a location of 000, despite not coming from the

center. Now the pivot can also be temporarily affected without moving this origin point,

and that is going to be by using the transform pivot point drop down menu. Now it's more

apparent what this does with multiple objects in the scene, so I'm going to select this and I'm

going to press X to delete it. I'm going to reset the location of my 3D cursor by holding Shift and

pressing C. This will just snap it back to the exact origin of the world. I'm going to add

a new object, and it doesn't matter which one. Let's do a cone, just we don't work with cones

very often. I'm going to bring this cone up by pressing G and then Z and moving it up.

I'm going to press G and X and move it over to the left. Now I'm going to duplicate the cone,

Shift D and then X and then click. So now I have these two objects side by side.

Now if I select both of these by either by Shift clicking or by dragging out a selection,

and I press Scale or Rotate, you will see a dotted line being drawn from my cursor

to the center of these two objects.

to the center of these two objects.

This is because we are in median point mode for the transform pivot point. So despite the fact

that individually these objects would move around their individual origins,

when we have them both selected, because this selection mode is at median point,

Blender is looking at everything you have selected in the scene,

finding the center of those objects in space, and using that as the pivot point.

We can change this by coming to the dropdown, selecting Individual Origins, and now when we

rotate or scale these objects, they are each rotating and scaling around their respective

origins. The rest of these options are pretty self-explanatory, but try them out at your leisure.

You know, Active Element will scale and rotate around whichever one is highlighted in the green

here, whichever your last selected object is. And 3D Cursor will rotate and scale around the 3D

Cursor, which right now is between them, but if you move them out, you can see it rotates and it

scales using this as the pivot. So for the next exercise,

I want you to use the skills that we've just gone over to make something.

So with starting from primitive objects, tabbing into edit mode, and moving and transforming

the vertices, edges, and faces to make a new shape out of these primitives.

I'm going to be doing a demonstration, which you can either follow along and make the same

thing I'm making, or you can make something of your own creation. Either way, it doesn't matter,

as long as you are using these skills of transforming vertices, edges, and faces in

edit mode, and ideally layering those skills on top of the object level transform skills that we

learned in the last lesson. In the next video, we are going to cover some mesh operations that

will allow us to add vertices, edges, and faces to these shapes so that we are not limited to

using only the ones that are existing, which I believe on a default sphere is about

482? I believe it's 482 vertices on a single object. We're going to need more information

than that, but for now we're just going to practice using the transform operations

on the edit mode level. So let us get started with the demonstration.

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
