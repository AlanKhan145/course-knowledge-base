# 007 — Texture Mapping & Basic Modeling Tools

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 02 — Your First Modeling Tools |
| **Bài học** | Texture Mapping & Basic Modeling Tools |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 22:36 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texture Mapping & Basic Modeling Tools** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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

Welcome. In the last lesson, we learned how to map our cube using UVs. In this lesson,

I'm going to show you how you can do a procedural texture mapping and what is the difference

between them. We are also going to be modeling two objects, a pathway and a lantern. So this is

the cube that we mapped last lesson. Let's start editing it and see what happens to the texture.

So let's select it. Press tab to enter edit mode here on top. And I already have faces selected

here. To move, you can move your face exactly as you move your object. Just pressing G on your

keyboard and moving your mouse. So same thing. If you want to lock on Z, you can press Z. Here

you can see that I have my snap activated here. That's why it's moving this way.

So you can see that when we UV unwrap, this happens when you move your face. It's because

your texture is stretching. So if I click here and I go to my UV workspace, let's just change

this real quick. You can see that my UV doesn't change here. That's why it is stretching, depending

what I do with my textures. Because it is connected to all of these edges, all of these bounds

are these bounds here. So you can see what happens to your texture. So let's go back to the

way that it was before. Now, I want you to see what happens when we extrude this face. So having

your face selected, just press E on your keyboard and go up. You can also see here that we lost

the textures here on both sides because it's not on our UV. It's not mapped yet. So this is some of

the problems that you face when you are modeling and texturing at the same time. At first, we're

not going to worry about this. Usually, you model and then texture. But I wanted to show you a way

that we can do this at the same time. Usually, when we are modeling, we do not worry about this

and just texture later. But I wanted to show you this early on to see a way that you can model and

also see your texture without having all these problems. And it's really interesting to know

early on. So let's go back to the way that it was again. And let's focus our attention here to the

bottom editor area. Here, you can see that we have a node on our texture that is called vector.

If we drag it and just let go of your click and type UV map, this is the node that is default

by the shader. You don't need to do this to use your first UV map. It's already automatically.

But this means that we can use another type of texturing. So we can type mapping and on vector,

we can go to texture coordinate. And I'm going to select this first one that is generated.

Now, this type of mapping is procedural. It doesn't depend on our UV map. So you can see here

that we only have the top. To change that, we can go here on our texture image where we have linear

and flat. Here, you can see image is projected flat using the x and the y coordinates of the

texture vector. So let's change this to make it projectable into all of the directions. So x, y,

and z. So we can go here and select box. So you can imagine this as a triplanar projection.

Triplanar is a term that we use in Unity and game softwares. So you can see it right here.

It's projected on all of our axes from plus z to minus z, x minus x, and so forth. So you can see

that it's mapped on all directions because it's based on a texture space that is a bounding box.

You can imagine like a box and it's being mapped on all directions. So what does this mean when we

are modeling? Let's go to edit mode and just move our faces on z. You can see that the texture is

being repeated even if I extrude. If I go here, if I move this way, because it's considering

the texture space of our object. Even if I move freely, you can see that the texture stays put.

So if you are working with a white level box, for example, for a game or you're doing level art,

this is pretty useful. You don't have to worry about losing your grid.

So one last thing before we move to our modeling. Let's get this back to the way that it was before,

removing our mapping and flat. There's a way that we can avoid these distortions. It's on this top

bar here, you can see options. We have our options here on transform that it says correct face

attributes. If we activate this and then move our faces, we can automatically move our faces

we can automatically correct our UV map. You can see right here at the bottom it starts,

our UV map starts to expand depending what we do. So we can see here that this image is being

repeated here and here. Right here on image, you can see that this is saying repeat. Let's change

this. If you go to extend or if you go to clip, it's not being repeated. So usually use this first

one. Now let's go back to our box shape and this is going to be our base shader for now.

So let's go back. Let's go to our modeling workspace. The first thing that we're going to do

is model a cobblestone path object. So the first thing that I usually do is grab references.

I have here a cobblestone that I grabbed. So I'm going to click and drag to my viewport.

This doesn't work if you are in edit mode. So let's press tab and then click and drag. Okay,

we can drag things as images. I'm just grabbing it here for a reference view, then I'm going to

delete it. But you can see here on our outliner that we have an image here. It's just an image.

So the first thing that I do after grabbing my reference is analyzing the overall shape. So here

is simple shapes. We just have boxes here that are aligned. Some of them aren't. So you can see that

it's pretty simple. Then we can, after we do the simple shapes, then we can start adding details

and then the texture. So you always start by the simple approach. So I'm going to delete this for

now. And let's talk a little bit about units. So here we can see that we have our boxes. Here we

are already activated our measurement, the edge length. And we can see that we have two by two

meters size. So let's go to our front view, pressing one on our numpad.

And let's grab our bottom vertices. To do that, you need to grab the front vertices and the back.

So if you do just a box selection like this, selecting vertices. So there's a couple ways you

can do that. You can go here on the top and activate toggle x-ray, or you can go in wireframe

or you can go in wireframe mode. I prefer to go here because we can still see our texture.

So let's go ahead and press G. Right now you can see that we have our snap activated

and it's following the grid. So let's move it until I reach zero and select.

Now if I press A, I can see that we have one meter high here on our edge length. So let's

reduce that. I'll select the top one. Okay, so now we have 20 centimeters high, still a little

bit high. So let's make it 10. Now there's a couple ways that you can approach doing these

cobblestones. I'm going to do my preferred one. So this is basically our area delimitated by two

by two that I want to make all of my little stones. So what I'm going to do right now is

go to edit mode and create a loop. So let's go to our solid tab so you can see it better.

To do a loop, we can do ctrl R and you can see here that another set of vertex and edges are

created just at the middle of my face. You can see that another loop of vertices and its edges

are created here on face. So if I click and drag, I can choose the location. If I press S,

it stays right at the middle. So you can see here that we have one meter and one meter. So we can do

this for both sides. So here we divided our cube into four different faces on top and on bottom

and two on side. So this is called subdivision. So if you go here and select just this edge and

you press right mouse and go to subdivide, you will subdivide this edge into edges. You can

see that we got a vertex here in the middle. So that goes for edges and faces. So let's go back.

Okay. In the next lesson, we're going to use modifiers to do this, but let's skip to manual

modeling for now. There's another concept that I want to talk with you is the quad modeling. So

every time that you're modeling, you always try to leave faces with four different edges. So

like we have here, this is called. So if you want to know more about this right now,

you can search for topology. So this is the term that we call it. Is the right

perfect topology is when you have all quads in all of your modeling. Of course, this is pretty

easy to do this right now. But when you work with pretty complex models, you'll see how hard it is

to keep a perfect topology. But we will work on that on our next lessons when we build a little

cabin. So right now let's select all of our mesh A and click the right muzzle. So let's do some

quick subdivision. Let's press A, right click of the mouse and click subdivide. If we go here

at the bottom left, you can see an arrow saying subdivide. Click here and then it will open this

little window. You can see here number of cuts. So you can increase this and decrease. I'm going

to add just one more. Yeah, I think this is good. And you have a couple of options here. You can do

a fractal. So it creates a little bit of noise, but let's keep it straight for now. Now you can

click outside. You can see that we got these extra loops here on the side. So let's remove them.

Let's click two to select our edges. Click alt and shift to select our loops, edge loops here and here.

Now to delete, you can press X and this little window will pop up. So you can choose what you

want to delete. Vertices, edges. Let's just click vertices just so you can see what happens. So when

you delete vertices, you lose all of it, your edges and your faces. If we delete edges, you can

see that these edges that I selected were deleted, our faces, but we were left with these edges here.

We have the option of faces, but that won't happen anything because we don't have a face

selected. Only edges and faces, the same thing. And we have only faces that won't happen anything.

So we have these options here of dissolve vertices and dissolve edges. If we go to

dissolve edges, you can see that we delete the edges that we had selected and everything else

is perfect. There's a shortcut for that, so let's go back.

You can press ctrl X and it will do that automatically.

So that's how you can delete your vertices without messing your overall model. Okay, so now let's go

to viewport overlays and activate our wireframe. So here we can see what we just created. So right

So right now I want to use this as a base to create our other stones. So what I'm going to do

is duplicate this, not as an instance, using just shift and D. If I use shift and D and press

ask, it's going to be duplicated at the same position as I have my original one. But you can

see here that we have both of them. So I'll rename this by double clicking and saying this is just my

grid. And for this one, I will say stones. Let's select our grid. Let's first hide our stones and

select our grid. So I'll press tab. So what I want to do here is select all the faces that have the

same normal. So I can do that by pressing shift and G and this window of select similar will pop

up. So you can select by similar, by material, by area and by normal. So if I click here, all of the

faces that have the same normal will be selected. So you can see right here. So what I can do right

now is press X and it will open this window and we can select vertices. If you select vertices,

it will automatically delete this edge and its face because it doesn't support if it doesn't

have a vertex. So as you can see, our normals are flipped because we have here the face orientation

activated. So let's select all of them, alt N and flip. So now we have our grid.

Let's unhide our stones. And now what I want to do is just scale this stone to organic size. So

let's create a few variations of this stone. As we can see here on references, we have some long

ones, some shorter ones and different placement, but also following a grid. So I don't want to

scale my object itself. I want to scale just the mesh. So let's go into edit mode, select all.

I'll deactivate my edge length for now because we already have our base with our grid. Now I want to

scale the stones, not scaling Z. If we press S and scale it down, we're going to lose the Z property

and we are scaling in the middle point. We are losing also this part right here. So let's go back

and let's choose here on transform pivot, as we saw before, 3D cursor. So let's scale without

changing anything else. You can see here that now we scaled on three directions right here at the

bottom, but now our pivot point is right at the zero, zero, zero. So we have more of a uniform scale

without losing our height. But I want to scale just on X and one Z. So what I can do is press S

and press Y and without clicking on anything else, we can go here, resize tab and copy the same scale

to X and press enter. So here we have an uniform scale, but keeping Z1.

Now there's one thing that got updated in Blender 5.1 is the snap by face center.

So if you go here or press shift tab to activate snap, you can go here to face center.

So one thing that got added in Blender 5.1 is the snap to face center. So let's select our object,

activate snap and select face center. If you move, you can see that now we can snap to the face

of our grid, but I want it to be snapped by the center of what I just created. So I can go here

and snap base, I can select center. So now I can snap to all of these faces. Now what I'm going to be doing

is create various objects of the stones with different sizings using our grid. So what I'm

going to do is also activate edge center and face center. So if I go here and click shift, I can add

multiple of snaps. So I just want these two. So this is my first stone. Let's create it a little

bit smaller. I'll click shift D and add another right here, shift D. I'll add this to the center

of my edge and I'll leave it a little bit bigger.

I'm also going to add a vertex because I want to reach this middle point here.

So now we have a lot of different stones and you can see here that as you scale and move your object,

the proportion of our quads, of our polygons or faces changes. So keep in mind, ideally you want

to keep the same length. For example, this one we have 0.04 by 0.09. Ideally you want to always have

like a square, but for what we are doing, you don't need to worry about this right now. So now what I

want to do is join everything that we did into one stone. So we can do this. I think the easier

way is to do by the outliner. So let's select the bottom one and pressing shift, let's go all the

way up to the one. You can see now that we have a lot of objects selected. This one is our selected

object and the one that is a little bit lighter is our active object. So if we join all of these meshes,

all of these objects into one, it will join into a stone 0.023, but I don't want that. I want to

join with this original stone here. So I can click count, control and select stones. Now if you want

to join a lot of objects into the active one, you can press control G and that will automatically

join into one object. So you can see here. Let's check our sidebar and you can see that our orange

point changed because the stone was right here. So let's apply. So my origin point is at 0.0.0. So

let's go control A and select location. Now our orange point in 0.0.0. Okay. So right now this

looks pretty boring, but in the next lesson, I'm going to show you how we can transform this by

just using modifiers. Modifiers is a way that we can model our object in an indestructible way.

So let's move on to our lantern.


