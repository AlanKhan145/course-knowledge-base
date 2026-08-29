# 086 — Final Project Overview

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 21 — Basics: Final Project |
| **Bài học** | Final Project Overview |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 18:46 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Final Project Overview** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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
All right, here we are, we have made it through the entirety of the Blender Basics course.

Now before we go, I mentioned I wanted to do a final project to show you how we string

all of these different portions of the pipeline together to end up with a final rendered result.

Now rather than walk you through that entire process step by step, I want to challenge

you, think of this as your final exam, to make a piece from start to finish.

So I will include this Blender file as well as any supplemental materials required so

you can see how I made this piece, but I do encourage you now if you want an extra challenge

to pause the video and go ahead and just try to make it on your own.

So I will walk through briefly how I made this piece, but we're not going to do the

whole process live on camera as all of the steps that I have used are the things that

we have gone over in previous sections of the course.

So let's look at this and break it down a little bit.

I'm in the Layout tab right now, I am in Rendered Preview mode.

So let's just pop over to Solid mode and let's come out of our camera view just by

rotating around and let's just take a look at this piece.

I'm going to hide this plane I added.

The only purpose of that is just to give a ground plane to cast shadows on for my final render.

So I'm going to go ahead and hide that.

And let's come into Solid mode and let's break down how I made that piece.

So included in the Blender file I'm going to package up and release with this video.

We have all the separate steps here as separate collections.

So what I've done is I have made copies at each stage so you can see what the piece looks

like at each stage.

So let's start with the reference.

Here is my reference image loaded into Blender.

It's just a standard image I found on the internet.

Here's the original image.

So I brought this into Blender and I set it up to use as an orthographic reference.

Here we have the result of modeling based on this reference.

In the modeling collection I do have a separate subfolder here called Modifiers.

And what this one is, if you're taking a look at how this is constructed...

Sorry, let me hide some of these other ones.

So this is the model including all the modifiers that I used.

I just used a couple of booleans for the spout area and these little handle attachments.

So I have left them with the modifiers on so that you can tab into edit mode and see

how those modifiers are working.

Let's close that one out.

After I had my basic model, all I did was apply the modifiers and then I came up and

just cleaned up some of the geometry here.

So I just connected these things nicely to different points.

If I had any vertices that were sort of overlapping, I merged them together.

And I cleaned up the geometry in such a way that I have either all quad geometry or all

triangles or a mixture of both.

So you can see here that this piece was made with three separate objects that comprise

the total piece.

I have this main pot piece here, which was created using some boolean objects here.

And I used the union setting on the booleans to join those pieces together.

I have the lid piece here, which was just made through extrusion and traditional modeling.

I started with a cylinder primitive for all of these pieces.

And I have the handle piece here, which again was made from a cylinder using traditional

modeling and a mirror modifier just to make this side the same as this side.

So after the modeling portion of the workflow, we have something that looks like this.

Once I have all my modifiers applied and my geometry cleaned up, I was ready to bring

it into sculpting.

Let's enable that here.

So I brought these separate pieces and sculpted them separately.

They are still separate in Blender.

And all I did here was come in with a crease brush in the additive mode, and I drew in

some of these details, which is accomplished by basically coming into a wireframe orthographic

with dynamic topology and literally tracing these details in and then coming in and cleaning them up.

So after the sculpting process, we have something that looks like this.

And once we have the sculpting process, we are ready to bake all this information into

a normal map to be applied to our low poly object.

So for the next step, I needed this object to have its UVs unwrapped.

So what I did for this is I duplicated the model I had from the modeling section.

So if we tab into edit mode here, we can see we still have our low cleaned up geometry.

And then I went in and unwrapped the UVs.

And if you tab into edit mode, you can see where I placed these seams.

I did it all manually just by selecting edge loops and marking them as seams.

And let's take a quick look at the UVs in the UV editor.

So I'm going to shift and select all these objects, and I'm going to tab to come into

edit mode for all of them and press A to select everything.

So you'll see this is how I have the UVs laid out for this object.

Although these are separate objects, they share the same UV space so that when I have

everything selected, nothing is overlapping, nothing is clipping outside of the edges,

and they will all fit together and use a single texture.

All right, so now that we have the UVs unwrapped, we can bake our normals.

So again, all I did was I duplicated this low poly version, and I placed it in the exact

same location in the world as our high poly from our sculpting.

I came into the, I changed my render engine to cycles.

Because the bake option is only present if you have cycles here, not Eevee.

I set my bake settings as we discussed in a previous video.

And I baked information from the sculpting piece onto this duplicate low poly.

So here I have these normals applied.

So although this appears very similar to our sculpted piece, if we tab into edit mode,

we can see that we still have our low poly geometry.

And here in the UV editor over here, we can see this was the result of our bake.

So this is our normal map.

So to visualize this on the main piece, all I did was come into shading, created a material,

and I just called it normals here.

And I didn't change anything on this principled BSDF other than to add our normals.

This image here, as an image texture here, I connected color to the input color node

of the normal map, and I connected normal to normal, which gave us this result.

Now keep in mind that in order for the normal map to appear correctly, I had to change the

color space from sRGB to raw or non-color.

And in order to have access to this option here, we just had to save this image externally.

All right, the last portion of this workflow is to texture paint it.

So I worked on another duplicate, but normally you would do this on the same piece.

So here, all I have done is set up my texture paint.

I have a couple of textures that I am layering here, and you can see how this texture is

constructed by coming into the shading viewport.

Let's click on them.

You'll see I have added a new material here, and I just called it teapot material.

And if we zoom out in the graph, we can see how this is constructed.

So let's work from right to left to understand what's happening here.

I have the material output, which is here by default, but instead of connecting it directly

to my principled BSDF shader, I have connected it to a mix shader because I am using two

different principled BSDF nodes here and here.

One of these is controlling the painted green portions of this piece.

So it has a metallic value of zero and a fairly high roughness.

And the other shader is controlling the metallic portions of this piece.

So you can see we have a light orange base color, and we have a metallic value of one.

So using these two nodes, I have mixed them together, and I have mixed them together by

a factor of a texture that I have painted, and this texture is called metal mask.

So this texture, all it is, let's pull it up in the viewport, is a black and white texture

where all the black areas indicate where the green paint area is supposed to appear, and

all the white areas show where the metal is supposed to appear.

And this I just painted in hand, this I just painted by hand using the texture paint slots here.

Here we can see our metal mask, and we can come in and paint on it.

All right, let's keep looking at this material.

So you'll see here that I have two normal maps working.

I have one here, which is the normals that we baked from the previous step, and I have

one here, which is actually the same texture.

And I needed to input this twice because I'm using two different shader nodes.

So without this second normal map in the metal shader node, everywhere that I have painted

metal, meaning over these engraved parts, would appear very flat.

So I just want to make sure that regardless of what shader I am using, I am still inputting

those normals so I get that nice sculpted detail in my piece.

We have, let's look here at the rest of the painted material layer.

So we have this texture here, teapot material base color.

Again, this one I added through the texture paint slot.

I connected it here, and all it is is this base color here that I applied as a fill.

And then I came in with a slightly darker value and a texture brush.

Again, I will include all the brushes and things.

I only used one texture brush, which I made in Photoshop.

It looks like this, and I will include it with the package.

All I did here was that in the texture paint mode, in my draw brush, I input this image,

this image here.

I imported it into Blender and put it right here.

And then I painted with just a very low strength to get this sort of color variation over the

surface of the paint layer.

And this here, I just painted in base color to indicate depth. All right.

And the last texture I used, again, all I did was create a new texture in Blender.

And I hooked it up to the roughness input on the metal layer.

And all I did was come in with, again, with a texture brush.

I had filled it with a 0.5 gray value initially.

And I came in with a texture brush in the texture paint mode in the 2D editor with white as my color.

And I just painted sort of a noise texture over the surface to give this roughness variation

that you're seeing here on the metal. So that is all.

It's just using just one, two, three, four textures, including the normals, to get this result.

So once I had the texture paint completed, I was ready for setting this up for rendering.

So what I did to set this up for rendering, you can hide this again.

I added a plane, again, just Shift A, Mesh Plane, here to the bottom to give the shadows

something to cast onto because otherwise this would just be floating in space and we wouldn't

have any of these shadows being cast.

I added a new material to this plane, and I just set a base color of a sort of maroon

here to complement this green color.

Once I had that, I just needed to set up my lights.

You see I have four lights working in this scene here.

Let's pop back over to rendered view so you can see what they're doing.

Let's switch to Eevee so we can move around our viewport without all that noise.

So I have a spotlight right here, and you can check all the settings here that I have.

It's about 200 watts.

It's got a slight orange tint to it.

I have the spotlight here as my main light for this piece, and then I have a couple of

point lights here.

I have sort of a standard white here, and then in the back I have a couple with a slight

blue color to them to sort of backlight the backside of this.

So I set my lights up here.

I added a camera to the scene just by pressing Shift A and adding a camera.

I navigated my viewport to an area that I liked.

I liked this angle and this shot.

I snapped my camera to that view by pressing Control Alt and Zero on the numpad.

So now when I press Zero on the numpad, we have the camera view here as we discussed

in the previous videos.

So I'm happy with this final shot.

So all I have to do now is come into the rendering mode.

You can choose a slot if you like.

You can render, you know, from a few different cameras or a few different angles or a few

different lighting setups.

All I did was here, I'm going to change to Cycles to get a better quality render.

I'm going to leave the max samples at 4096 because that is a very high quality image

that it's going to create.

And I changed my device to GPU Compute as we discussed in the rendering video.

So all I have to do now is either press F12 on the keyboard or come up to Render, Render Image.

Give this a moment for this progress bar to finish.

Okay, and there we have it.

It took about 28 seconds to render.

And this is our final result.

Now you could save this image out.

Very important that we always save our images here by coming up to Image and Save.

You can choose a location for that image on your computer.

Here I have a couple of different renders that I tried.

I tried one with a blue background and then with the maroon background.

And so from here, what I would do is take this into Photoshop or another image editor

to get this final result.

All I have done is I've brightened it a little bit.

I've added a little bit of contrast and I've put a vignette around the side.

Now I'm not going to cover how to do that as this is not a Photoshop course.

But that is how this piece was constructed.

So the challenge you have now for yourself is to recreate this process and create an

asset in Blender from start to finish.

Now this is going to conclude the Blender Basics course.

I hope you all have learned a lot and had a good time doing it.

And congratulations on completing the course.
