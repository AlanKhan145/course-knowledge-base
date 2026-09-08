# 071 — Shading and Textures Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 16 — Basics: Introduction to Textures and Materials |
| **Bài học** | Shading and Textures Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 17m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Shading and Textures Pt. 1** trong pipeline của section.
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


Okay, now that we have a basic idea of what materials are in Blender and a little bit

about how to use them, it is time to look at materials in a little more detail.

We're going to do this by opening up our shading workspace up here at the top.

So click on shading and you will be met with this interface.

So the shading workspace is the workspace that we have that is designed for creating

and building materials in Blender.

It consists of a file browser right here in the top left hand corner, an image viewer

right in the bottom left corner, we have our 3D viewport up here at the top center, we

have a node editor at the bottom center, and then we still have our scene outliner

and our properties editor just as we had in the modeling workspaces.

Now you may be wondering why the background in the shading editor appears different than

the other workspaces.

This background is simply showing us sort of the default lighting setup we have for

previewing materials in Blender.

And you may have noticed in the last video that despite the fact that we cannot see this

background in our layout or modeling tabs, it is still present when we are in the material preview mode.

And we know this because in the first video I did on materials, when we were looking at

a new material and we dropped its roughness down to zero, and let's give it a different

color so we can see it a little better, we are seeing the reflection of this image despite

the fact that we are not seeing it here.

So the purpose of this image, which is called an HDRI image, is to give background lighting

and also give our objects something to reflect when they have very smooth values.

Otherwise we would not be getting a true preview of how our object would look in a scene full

of other objects if there was nothing to reflect off of shiny surfaces.

We can change the image we are using by coming into our viewport shading options dropdown.

And here we will see a preview of the image that we are currently using as our HDRI background

applied to a reflective sphere.

We can also see this sphere down here in the shader editor workspace, but we can change

what we are using here, what image we are using, by clicking on this icon and Blender

will load up a few different HDRI backgrounds.

Now some of these are packaged with Blender, a couple of these are ones that I have downloaded

from outside sources.

But if we wanted to change the lighting scenario, we could do so by selecting a new background

and you will see the background is updated in the shader editor workspace and the reflections

have changed to match our new background image.

So we know what a file browser is and we're familiar with the stuff on this side of the

screen as well as a 3d viewport, even though it appears slightly differently in this workspace.

Let's take a look, a closer look here at the node editor.

Now nodes in Blender are these boxes right here and all these are a visual representation

of what we have going on with our materials.

Now if you take a closer look at this principled BSDF node, you will notice that it has a base

color value which matches the color we applied, it has a metallic, it has the roughness, and

this node is the same as looking at these properties here in the menu.

It's just a more visual representation of these values.

So we can come into the node here and click to change any of these values just as we did

in the properties editor.

So let's look at the different types of nodes that are present in Blender.

The first one I want to look at is the material output node.

Now in order for a material to be displayed on this object, the material needs to have

a material output node.

Basically everything that is plugged into this node will be what shows up on the material.

So if I disconnect this just by clicking on this dot and dragging it out to sever this

connection here, you will see that our material with these properties is no longer being displayed

and we simply have a solid black object because we have nothing connected to material output.

Now all of the materials we are going to be covering in the Blender basics course are

going to come from this surface, this surface input in the material output node.

So for now we are not going to be looking at volume or displacement, just know that

everything that is controlled here and visible here will be driven by the surface property.

So let's reconnect this.

So this node right here, this large one that is called Principled BSDF is what is known

as a shader node.

And shader nodes are nodes that control what types of information is input into this material output.

The Principled BSDF node is the default node that is added when you add a new material

to an object in Blender.

This is considered the most current method of shading, especially for real-time graphics,

which all that means is, real-time graphics, all that means is that when I update a value

here in the material, it is reflected instantly in the object in the 3D viewport in real-time.

I do not have to render a still image in order to see that value changed.

But there are other nodes that we can use in Blender.

Let's disconnect this Principled and collapse it and move it over to the side.

Let's add a new node to this graph by hitting shift and A, and you'll see we get the add

menu but it is different than the add menu that we were given in our 3D viewport when

we were looking at modeling.

Now there are all sorts of things you can add to this graph, but let's just look at

the shader options.

Again there's a long list of shaders that we can add, and we can see the Principled

BSDF is right here, which is the default shader.

But let's look at a couple other options.

Let's look at Diffuse.

So we have added a Diffuse BSDF shader to our material here.

And you'll see that we have much fewer options, we were only given three.

We were given one for the color, one for the value of the roughness, and one for the normal.

We're going to cover what normals are in a future video.

Let's just look at these values.

So if we connect this BSDF output node to the surface input node on the material output,

we will see this reflected on our object.

So let's click and drag, and connect.

Now if we click on the color value, we can see that the color wheel is just the same

as the one we have on our Principled shader, and the roughness value works the same way as well.

So this is simply a much simpler shader than we were using before, however some of these

values are not updating in real time, as you'll notice with the roughness, currently

nothing is happening.

This is considered a legacy shader in Blender and is not used, it has been replaced by the

Principled BSDF.

There are other types of shaders we can use, we can use something like a Glass BSDF to

mimic the appearance of glass on our object.

So not only is this a fully smooth material that is causing reflections to appear on our

object, but there's also a glass refraction happening that may be more clear on a sphere.

So I just deleted the cube, I added a new sphere, I smoothed the shading, and now I'm

going to add in that material I was just looking at onto this sphere.

So I'm going to do this by coming over to the Materials Properties tab, clicking our

dropdown and selecting our material.

Now I have all my nodes back here, and we can see when we move around this sphere that

not only are we reflecting, but we're also getting refraction properties that are consistent with glass.

We can change these refraction properties by shifting this IOR value right here.

Different types of materials have different IORs, which is short for Index of Refraction,

and these values are searchable, you can search something like IOR for glass, and I believe

it's something like 1.45 or 1.5, and that is just something that you can look up online

and these are based on real world values.

Let's delete the glass shader, let's look at a different shader now.

Let's look at the transparent shader.

Let's connect this to see what it does.

Now this should be giving us a transparent mesh, but it is not at the moment.

So let's look at why.

So we're going to come into the Material Properties tab here and look at these settings.

So underneath the surface, we will get the inputs for anything we have plugged into this

surface node here.

So if I were to plug in the principled shader into the surface, the surface dropdown now

contains all of the input values for our principled BSDF node.

And if I, oops, didn't mean to connect that, if I connect the transparent, we are only

seeing the settings that are available in the transparent BSDF node, which is just the

color at the moment.

So let's fix what's wrong with this shader.

And that is, what is currently wrong with this shader is that our material is currently

set to opaque, yet we are trying to use a transparent shader.

So to fix that, we need to come into the material property settings, come down here to the settings

and look at this option here where it says blend mode opaque.

Let's click this dropdown.

And we have a few options for how we would like to calculate opacity.

So we have fully opaque, so something that is not transparent by default is going to

be rendered opaque.

We have alpha clip, which is for things that are masked that are either transparent or

not with no in-between values.

We have alpha hashed.

Now here we are seeing for the first time an actual transparency value on the shader.

I'm just going to change this back to the default.

So you'll see as we move around, we're getting sort of a fuzziness to it, and that has to

do with the way that these transparency is being calculated.

We also have alpha blend, which is similar and will allow us to use our color input here.

So I have this set to a blue, but we can change the color of it and we will see that

we are still seeing through our mesh, but we are now adding the color and we have a

lot smoother transitions when we pan around or sorry, when we rotate around this object,

we are not seeing that sort of noisy fuzziness that we were getting with the alpha hashed.

So there are a lot of different shaders you can try out in Blender for different effects.

If you would like to use PBR shading, also known as physically based shading, which is

the standard for real time shading, you will want to use the principled BSDF node, which is the default.

There's one more node I want to talk about though, and that is the mix shader node.

So the mix shader node looks like this.

You will get, have two inputs for two different shaders, a factor for blending between them,

and then the output node.

Let's connect the output node first, we'll return this to black.

And let's add a diffuse shader and just give it a color so we can see it.

So the mix shader node does exactly what it sounds like.

It will take two different shaders and mix their outputs together for the final result.

So let's connect the diffuse shader into the first input node.

And let's take the second shader and connect it to the second output node.

So this is currently the blend of our two nodes.

We can change how this is being blended by sliding up the factor down to zero will have

the first shader input be the only input.

And sliding it up will cause the second shader to be the only input.

So we can blend the two by putting it somewhere in the middle.

Now for the purposes of this course, we are going to be looking and working mostly with

the principled BSDF shader, because it has the capabilities of many of the shaders combined,

which is kind of why it's the standard for real-time shading.

Let's change this back to opaque to get rid of some of that strangeness that was happening here.

Now we looked at how to change individual values such as the color, the roughness, the

metallic value of this.

There are a few more here that are dependent on what type of material you're working with,

such as the emission will cause this to glow.

So if you have set your emission value to anything other than black, it will glow in the dark.

Let's change to rendered mode.

So I currently have no lights in this scene.

So without anything lit, and with just this sort of pinkish metallic object that is not

emitting any light of its own, if we switch into rendered mode, this becomes quite dark

because there is no light being reflected off of it.

But if I were to put a value into emission, this would now glow.

So something like a neon sign, you would want to have a value for emission, and it will

glow in whatever color you set for it.

Again, setting it to black is the default and will mean that this object is not glowing

or emitting any light of its own.


