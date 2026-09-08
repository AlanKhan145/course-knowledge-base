# 074 — Introduction to UV Space and Coordinates

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 17 — Basics: UVs |
| **Bài học** | Introduction to UV Space and Coordinates |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 19m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Introduction to UV Space and Coordinates** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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

So, now we know how to apply materials to our objects, how to use texture inputs to

control the look of those materials, and even how to create our own tiling textures.

But what we need to look at now is, how is Blender deciding how these textures are being

mapped onto this object?

The process by which Blender maps a texture onto the faces of an object is known as UV mapping.

Now, UV mapping is the process by which we flatten all of the faces on the surface of our model

down into a 2D space so that we can project a flat image onto it, as denoted by this figure here.

You can think of UVs as the wrapping paper around your object with the image texture

printed onto it. The term UV refers to the 2D grid that this wrapper is projected onto.

Because we are using the dimensions of X, Y, and Z in our 3D space, we have just backed up

in the alphabet to choose the next available letters to denote our 2D image space.

Let's look at UV editing in Blender. We're going to do this by coming up to the

workspace tabs and selecting UV editing.

So this is the UV editing workspace. It consists of our 3D viewport on the right hand side,

along with our scene outliner and our properties editor, the same way all of our workspaces

have had. But on the left side, we now have what is called the UV editor.

This UV editor allows us to see any of our 2D textures as well as how they are being mapped

onto our object. So let me show you what I mean by bringing up the brick texture into this UV editor.

To bring up an image that you already have loaded into your Blender scene,

all you have to do is come up to this image drop-down icon in the UV workspace

and select it from the drop-down list. And of course, to visualize this in the 3D viewport,

we just need to enable material preview viewport shading.

So this portion of the image right here is what is known as the UV map for this object.

Each of these faces here correspond to a face on our cube. To show you how they correspond,

we're going to enable something called sync selection, which is denoted by this icon right

up at the top left-hand corner here. If we enable this and switch to face select mode,

now when I select a face here in the UV map, the corresponding face is selected on our model.

Additionally, if I select a face on the model, the corresponding face is selected in the UV map.

This can just give you an idea of how this texture is being projected onto our cube.

The way we would change how this is being mapped is by changing the faces here in the UV editor.

So I can select any of these faces. I can press G to grab them, move them around to project them.

I can rotate them by pressing R.

And I can scale them by selecting a face and pressing S. Now you can see all these changes

I have applied are reflected in the UV map. So I'm going to go ahead and select all of these faces.

And I'm going to go ahead and create a UV map right in real time here on our mesh object.

So this is a good way to give you an idea of how a texture would be projected onto your object

based on its UV map. However, we typically do not have a texture to start with when creating UV maps.

UV maps are done before any textures are applied. So how do we know that a UV map is good and that

the texture will be projected correctly onto it before we have a texture to put on our model?

The way that we know that is by adding what is called a UV grid.

So I'm going to start from a new blender scene

just so I don't have any textures loaded into this file at all,

to show you what I mean. We can delete the camera and the light as usual.

So now if this was our object that we needed to create a UV map for, we could come into UV editing,

tab into edit mode, and we see that this default cube does have UVs on it already.

But how do we know that these UVs are correct? Well, we need a placeholder texture

that will enable us to visualize how this is being mapped.

And that placeholder texture in blender is referred to as a UV grid.

To add a UV grid to this object, we first need to create the UV grid texture,

but we can do this within blender itself.

So within the UV editor, we're going to come up here to where we selected the images from our

drop down. But since we have no textures in this new blender file, we need to add a new one.

So let's just click the new button here. Now you'll get this new image pop up with all the

settings to initialize it. So let's rename this UV grid. Let's change the resolution to 2048 by 2048.

Again, we want to be using a power of two resolution here. And most importantly, where it

says generated type, we want to change it from a blank to UV grid. Once we have all of those

settings in place, go ahead and click OK. Now, this will show you the UV grid you have just created

in the UV editor. In order to visualize this pattern on our model, we need to apply it via a

material. But we know how to do this already. Let's come down to the material properties tab.

And we are used to seeing this, this is our default material. So all we need to do is add

this pattern in to our base color input the same way we would add any other image. We can do this

in the shader editor by adding the nodes. Or more simply, we can do this via the properties panel by

clicking this yellow dot next to base color, choosing image texture. And now from the drop

down here, we can select the UV grid we just created. We can also quickly add a UV grid to our

object using the text tools add-on we enabled at the start of this course. So let's remove this

material. Let's go into object mode and remove this material. And now we can see that we have

let's go into object mode and remove this material.

Now, we can quickly add a UV grid to this object by coming into the UV image editor

and pressing N on the keyboard to bring up the side panel.

From here, we can go into the text tools tab. Again, this will not appear if you did not download

and install the text tools add-on at the beginning of this course. So if you do not have this, and

you would like to use it, go back and watch that video, which will run through how to get the text

tools add-on into Blender. But if you do have it enabled, you can come into this text tools panel

here, we can choose a resolution up at the top, let's choose 2048. And we can just press this

checker map button to automatically add a new UV grid at a resolution of 2048

and create a material and add it to the material all in one click.

So and once we have this material set up, we can use it on any object in our scene,

we do not need to repeat this process, we can add a sphere.

And both of these currently have a checker on it. Let's use the text tools one.

So we can quickly add the UV grid to any object in our scene.

Now the UV grid will show you anywhere that your texture is being stretched or warped in any way.

If we look take a look at this sphere object right here,

we can see that this texture is being slightly stretched across our surface. Because when we

look at this checkerboard pattern in the UV editor, we can see that all of these checkers

are perfectly square, whereas on our sphere, they are appearing slightly stretched.

So we can fix any stretching or distortion we have on our UVs by editing the UV map in the UV

map in the UV editor. So to access any objects UV map, you just need to select it and tab into

edit mode. This will cause the UV map to appear on the UV image editor on the left side of your

screen here. Now you'll notice that if I do not have these faces selected, the UV map disappears.

So we either need to select everything and work with our UVs this way,

or we need to enable UV sync selection up here at the top, which will keep our UVs in this view

even when we do not have any faces selected in the 3d viewport. So either one of those,

and depending on what kind of tools you're using, some tools are not compatible with this,

so you will find yourself switching back and forth. So to remove some of the stretching here

on the sort of equator of the sphere, we can do this by scaling these faces.

So if we have everything selected here, you can press S and X to scale this.

And that you'll see that that has fixed some of the stretching right here, but it has caused

other issues up here. So depending on the shape of your object, you may find that some distortion

is inevitable. And in that case, you just want to hide the distortion in areas where you are

less likely to notice it, depending again on what your model is.

So as I mentioned, as I mentioned before, all new primitives added into Blender will have a default

UV map applied to it. But any model you create through modeling or sculpting process will need

to have its UVs manually applied. The process by which we assign UVs is called UV unwrapping,

and it's just the process by which we take our models and mark the edges where we want to make

cuts that create the flat UV map. So what I mean by this is if we select this face here

and this face here, these faces are welded together by an edge on our 3D object, but

in our UV map, you'll see that this edge and this edge both represent the same edge

on our 3D object. So what Blender has done here on this primitive is essentially

marked this seam to be cut for the UVs so that we could stretch this out to be flat.

The edges that we mark to make these cuts into are called seams. To mark any edge

or edges as a seam, all you need to do is select it in the 3D viewport. And then if you are in

edge select mode, you can right click or you can pull up the same menu using the edge menu

toolbar option at the top. You can click and select Mark Seam.

The edges that are marked as seams will be rendered a different color. In my case,

it is this orange color to denote that these are seams. Now, although I have marked the seams here,

nothing has updated in the UV map. And that is because we need to run the unwrap operation

in order to see any of these changes. So let's do that by selecting the faces that we wish to unwrap.

In this case, it is all of them. So I just hit A on my keyboard to select all. And then we're

going to press U on the keyboard to bring up this UV mapping menu. And then we're just going to

choose the first option here that says Unwrap. The result will be here in the UV editor.

The result will be here in the UV editor. And of course, you can also see it if we have our

checker applied. So what has happened here? Well, what has happened was although we had

simple UVs on our primitive object, none of these edges were actually marked as seams.

And we knew that because when we tabbed into edit mode, none of them are rendered in orange

the way that these manually marked seams are. So if you add any new primitive to Blender,

it will have these UVs, but these are not marked as seams. So if I run an unwrap operation on this

again, well, this one completely failed here because I have no seams and it is completely

manifold. So if I add a seam here and press U and unwrap, you'll see that the seams that were

previously where the seams were previously has not been saved. So in order to save the UVs of

a primitive, you will need to mark these as seams, which you can do very quickly by let's just clear

these seams first by coming into the edge select mode and right clicking or accessing the edge

menu panel here. Let's right click and just press clear seam and that will remove any seams that

you have selected. So in this case, it has removed all the seams from this object. So if I wanted to

preserve these UVs from the primitive, I need to mark all of these points as seams. But we don't

have to do this manually. In this case, that would be very time consuming. Instead, let's select

everything in the UV image editor. Let's click the UV menu drop down and let's press seams from

islands. So that has looked at all the islands, which are individual chunks of faces in the UV

image editor are called islands. So it has looked at the edges of all our islands and applied seams

to the location of those on our 3d model.

But let's look at a slightly more complex model.

So here I have a Blender file with a simple model here really, but it is much more complex than our

primitives. So the way we would go about UV unwrapping something more complex, the first thing

we're going to do is come into the UV editing workspace by coming up to the top here and

selecting the UV editing workspace. And we're going to go ahead and select the UV unwrapping

workspace by coming up to the top here and selecting UV editing.

And now if we select our model here

by pressing A to select everything, you will see that we have I have set as

I have a set of UVs applied to it, but we're going to demonstrate how to do this from scratch.

So I'm going to remove the UVs I have currently applied to this model by pressing U and hitting

and hitting reset.

So let's quickly add a checkerboard texture to this so we can visualize how these UVs are being

unwrapped. So let's come into the UV image editor here, press N on the keyboard, navigate to text

tools. Let's up our resolution to 2048 and let's hit checker map. Now you'll see here that the

checker map has appeared to have failed. But if we zoom in very close, we can see that it actually

is being applied to our model. It is just that the UVs have been reset. So we need to manually

start marking UVs in order to get this checker map to appear correctly. So I'm going to pause

the recording here. And when we come back, we're going to demonstrate the process of how to unwrap

UVs for this object.


