# 006 — Understanding Objects, Vertices, Edges & Faces

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 02 — Your First Modeling Tools |
| **Bài học** | Understanding Objects, Vertices, Edges & Faces |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:51 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Understanding Objects, Vertices, Edges & Faces** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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



Welcome. In this lesson, we're going to learn about what constitutes an object.

We're going to learn about vertexes, edges, and faces.

This is where we stopped at last lesson.

As much as I adore these flowers, let's remove by clicking and deleting.

Just so we don't delete the last one, let's move it to another collection.

So let's go here in our top right side, we have our outliner.

So we can see we have a scene collection and a collection inside it.

If we go here and click with the right button on our mouse,

a new collection will have a separate collection.

Let's double click and we can rename it.

Or we can click F2 on our keyboard.

So let's name it flower.

Now we can select our flower on our outliner or on a viewport.

Let's do it on viewport.

We can click M on our keyboard to move.

Let's go here to flower and our object will be in this collection.

Now we can control what happens with it.

We can de-habilitate the whole collection or hide in our viewport.

Let's disable in our entire collection.

Now our object is hidden.

So let's start with a simple cube as all tutorials do.

You can press Shift A or you can go here right below our top bar,

go to add, mesh and select our cube.

Now we have a cube.

So this is our object.

Let's move it to the correct folder.

You can also go here on the outliner, press your left button on your mouse,

move it to this collection.

Let's hide our light and our camera for now.

Now, before we start moving this box around and editing it,

I want to add another area on my workspace.

Let's move this to modeling.

You can see that when we move to modeling,

our mode already switches from object mode to edit mode.

To switch between edit mode and object mode,

you simply just press tab on your keyboard.

Tab, really simple.

I want to add another area in this workspace.

I'm going to add it on this side.

So I'll click and drag to add another area.

I'll go here on the top left side of every area.

You can switch to any area that you want.

So here we have 3D viewport, image editor, shader.

I'll change this one to spreadsheet.

I will also open the sidebar here and let's select our cube.

Why did I do this?

Here on our spreadsheet, it shows all of the positions of our vertex,

our edges and our faces.

So let's start with vertex.

Just like our object has an origin point that right now is 0, 0, 0,

as we can see this, if we go to edit mode, pressing tab,

you can see that now we have control over all of the vertex of our cube.

So let's select our object and go to edit mode by pressing tab.

We can see here on our transform that nothing is selected.

So let's select this vertex here.

Now we can see that this vertex on X is 1, on Y is minus 1, and 1 on Z.

And if we look at the views, this is correct.

So we have the position.

Each vertex of our mesh has an origin on our world.

So each point of our cube has an exact location on our object.

We can see here that we have 0 to 7, all of the positions of our vertexes.

If we go to edges, you can see that right now we are selecting vertex.

If we press 2 on our keyboard, we switch to select our edges.

As you can see, we have 12 of them.

And if we press 3, we can select our faces.

You can see that we have here 6 faces, all sharp faces.

When you are in edit mode, sometimes you want to select all of your object.

So you can press A on your keyboard.

It selects everything.

We can select A and press 1 to select our vertex, 2 to select our edges,

and 3 to select all of our faces.

There is another type of selection that we can do by pressing Alt.

It selects our edge loops.

So we can see this constitutes a loop.

So as you can see, you need 2 vertex to form an edge.

And you need 4 edges, or 3, to form a face.

Let's switch to orthographic view.

All of your faces have a front face and a back face.

The front face is the direction that your normal is facing.

So let me show you the concept of normal.

So let's go to mesh edit mode.

And we can go right here. It says normal.

We have our vertex normal, custom normal, and our face.

Let's select our face, just so we can see, and I will increase its size.

So you can see here that we have these just visual lines indicating our normal,

the direction that our normal face is headed.

This is our front face.

If we go here in overlays and select face orientation, you can see that nothing happened.

But let's select all of our faces with A and press Alt N.

You can see that now I got a normal step open.

And let's flip our faces.

Here, we can see that this is a back face because it's represented in red,

as we did here on our orientation.

This means that if we zoom in on perspective mode inside our cube,

you can see that the normal is facing inward.

So this is good to know early on so you don't get confused by all of the mesh editing

that we're going to do later.

So let's select all of them, Alt N, and flip again, and disable our normals.

Another thing that I want to show you on mesh edit mode is our edge length,

edge angle, face area, face angle.

When you are working with exact measurements, meters, or foot,

you want to know the size of the edge of your object.

So if you select this, mine is on meter right now, it shows really small,

if you can see here, the length of each edge that we have here.

So this is very useful when you're editing.

Keep in mind, if you go to object mode, it disappears.

As you can see, this cube has flat faces, so the edges are pretty sharp.

So let's add another object.

Let's add a UV sphere. I will move it.

As you can see, this also has sharp faces, but this is not ideal.

So what you can do is click on the right button mouse and select Shade Smooth.

You can see that now it looks like a ball.

You can do the same thing on this cube.

It's not going to look correct, but you can see how the light bounces in the cube,

and now you have a smooth edge, at least a fake smooth edge.

Let's go back to Shade Flat, and I'm just going to show you an example of a modifier.

If we go here on the modifier tab and add modifier and search for bevel,

you can see that automatically the modifier grabs all of our edges here and offset them,

and we can control it right here, the size and the amount of bevel.

As you can see, this is still Shade Flat, but I want a mix of both of them.

I want it to be flat in this area, but I also want it smooth depending on the angle, like this ball.

So we can click and use Shade Auto Smooth.

You can see that right now we have an angle to control our smoothness.

As we go, you can see that right around 50,

I have an automatically smooth that is kind of smooth on size,

but it still keeps this flatness, as you can see.

If we start changing these settings, we get a better result.

So let's remove this ball and let's just disable in real time in our viewport both of these.

Let's remove this one and Shade Flat.

Okay, let's go back to our cube.

So one last thing I want to do before our next lesson,

when we start actually editing our object,

I want to add a texture to it because we haven't talked too much about textures.

So right here, I'm going to change from Solid View to Material Preview.

You can see now that it's white. Right here on Properties,

let's go down to Material and you can see that we don't have any material here.

So let's click New. You can click here to name it.

Let's name it Cube M.

Okay, now you can see here that we have a preview. It's white.

And here we have a few of the properties, but this is kind of hard to use right here.

If we go to Base Color, we can actually click here and add an input,

but it's a little bit hard. It's fine to use this for small tweaks,

like I want to change color.

So let's move to our Shading workspace right here at the top.

Here you can see that we have our Material Output Surface.

We already have a physically based shader here, plugged in.

And we can click Base Color and drag to add an image texture.

Right now, we don't have nothing in it.

If you want, you can go Open Image and search on your browser,

but I also have our file selected here and I can go to Blender Cores.

Let's look for my textures and this is going to be linked below.

And I'm going to click and drag to my editor here.

And go and click and I can delete this one. Nice.

As you can see, this is not correct right now because of the UV of this cube.

So let's go to the UV workspace.

If we go here to UV workspace, we see our kind of flattened layout of our cube.

So if we go here to UV maps, you can see that this is one UV map.

We can add multiple if you want.

But for now, I want each of these faces that is represented here.

If we click Faces, you can see that it matches the one in our UV layout.

But I want this one to be the size of this texture here.

So what we can do is select with A and press U.

And we can add cube projections.

So now each face is all over to the borders here mapped.

So let's go back to Shading node.

And this is a simple way that you can map out a simple object.

Next lesson, when we start to model it,

we will also see what happens with our textures

when we start to change these faces.

And I'll also show you another way that you can map into your model procedurally.