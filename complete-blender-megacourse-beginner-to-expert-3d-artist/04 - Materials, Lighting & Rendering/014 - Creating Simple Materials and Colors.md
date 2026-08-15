# 014 — Creating Simple Materials and Colors

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 04 — Materials, Lighting & Rendering |
| **Bài học** | Creating Simple Materials and Colors |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 33:22 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Creating Simple Materials and Colors** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
- lighting, camera, rendering và compositing

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

Welcome to chapter 4. In this chapter, we're going to be rendering our scene in two different

moods, in the daytime and one more moody in the nighttime. We're going to start by making

our materials. So here is where we left off last lesson. So if you go here to the top

part and go to material, you can see that we only have the flowers here with a texture.

The rest is gray. We don't have any depth in it. So let's go one more to the rendered.

Here you see that we have shadows and we have kind of a default light. So if you go

here under shading, you can see that we have a HDRI that you can choose here from your

defaults in Blender. So you have a studio version and you can change this. And you can

even control the rotation and strength. But this is kind of your defaults for the viewport

and we want to use our own. So here on the top, you can see scene lights and scene world.

So if you activate this, this means that we are going to use this part here, world properties

as our main setting for the viewport and our render. So if you go ahead and press F12,

this is our render. If we go here under color and we change, you can see that it's also

being changed there. Let's also activate scene lights. This is going to activate any

lights that we have here on our outliner. Okay, so now this looks pretty bad. So let's

go here to render. In Blender, we have two main render engines, that is Eevee and Cycles.

Eevee is a real time, more fast way that you can see and make your renders. And Cycles,

if you see, it has the ray tracing, but it takes a little bit longer to render. You can

see that it's kind of pixelated and you need to add a denoise here. So if I activate a

denoise here on the viewport, you can see that it kind of gives you a preview, but it

takes a little bit more to render. So for this one, I want to use Eevee because it's

faster and also we received huge updates in 5.1, so we want to test that. So under

Eevee, if we go here, we have the ray tracing, which is the cool feature that we have on

Blender right now. So let's enable it and you'll see. So you can see that with just

activating ray tracing, you get the same properties of shadow and ambient occlusion that we had

on Cycles. So this is pretty cool. For now, we will leave the settings this way. When

we go to the lesson that we have on Render, we will get more into it. So let's go back

to the World Properties. The first thing that I want to adjust before we start making our

materials is to show you how we can change this background here. So let's go to the Shading

tab. Okay, so from here, let's go to Material again and I'm going to deactivate the overlay.

So now you can see here that we have the shader editor view and we have objects. So

if you click here and go to World, we have the same settings that we have here, but we

have all of our nodes, so we can play around with it. If I go here and change, you can

even change colors, it will reflect into everything that we have on our scene. So this here is

our background shader and this is our color input and the strength of this color input.

If you hover your mouse above any settings and you press backspace, you will reset to

the default setting. So what I want to do here is use only textures that we have default

on Blender, so noise texture, wave texture, and so on, to do like procedural materials

without using any external materials or textures. So the first thing I'm going to do is press

F3 and search for a noise texture. Here on the output nodes, we have factor and color.

If we connect color, you can see that we have a nice color overall. If we connect factor,

we have a black and white. So now what I want to do here is pass this factor to a color

ramp and we are going to use this a lot to give some variations. So now we have a black

and white and we can control the distance between them to control the intensity of this

noise texture. So right now, I want to play around with the values and right here,

and what I want to do here is for the white parts to be kind of a cloud. So if I go here

and increase detail, you can see that I have this definition that kind of looks like a

fog, but we will make this a cloud. So play around with these settings and with this,

so you find something that you like. And what I want is this back, and let's go to

this black part and add a color for a sky. So what I'm going to do here is go to my inspiration

board and I'm going to grab a blue color. So let's see, I kind of want this kind of

blue, pretty bright. So I'm going to actually pick this color and I'm going to copy over above

control C and I can go to my other project and press control B. And this is too bright,

really bright. And this will be the cloud. You can add more color to this ramp by pressing

control and I want to add some depth to the cloud. Maybe we could right there, too much.

Yeah. And now I can also come here at my shader and adjust the intensity. So you can go lower.

So now if you look, we have kind of this fake noise in everything, but it's missing some depth.

So I'm going to show you another texture that we can use. And it's called the sky texture.

And this is really cool because it actually mimics a sky. So let's disable sun disk because it's only

functional in the cycles render. And let's reduce strings a little bit. Actually, let's duplicate

this so we don't lose the shader here. Shift D. Okay, so now I can reduce this. Let's reduce by

0.20. So you can see that the sun are more or less in this direction here. And the cool thing about

the sky texture is that you have this kind of horizon line here. So you have this kind of blurred

this gradient that gives the sky a nice effect. It's the thing that is missing from my noise texture.

So I would just do some rotation here. A little more front face. And you can see that what I need here is

this gradient here. So you can see that goes from white to a little bit of blue. I'm going to increase

this a little bit more. Okay, so we have a nice cast here. Okay, so what I can do here, I can also mix

two shaders. So if you drag here and go to mix shader, you can mix the two together or connect this

way. So now you can see that I have a little bit of my clouds and a little bit of this gradient here,

which makes a lot of difference. So if I move my factor and go to zero, you can see that I have my

original texture. And if I move here, I have the sky. So I can play with this and search for a nice in

between factor. Okay, I like this, but I also want to maybe push this to make the clouds a little bit

smaller. Let's see if we can do that. And I also want to add, if I can,

variation on the sky here.

Yeah, you can see gradient, a little bit of gradient. Maybe I can reduce the strength of this.

Okay, so this we have kind of a handmade sky. We're not going to be able to see below this horizontal

light, so I'm not going to worry about that. We can just go here and push this a little bit here. Perfect.

So let's press F12. Let's see.

Okay, so this is it for our sky right now. Then we're going to add a sun and artificial lights,

but this is going to be in the next lesson. So let's focus on the materials for now. So what I'm

going to do is just increase a little bit more of this intensity, just so we have a better view of

our materials. Now the first material that I want to add is the lantern one.

We're going to add two materials here.

So let's focus on this one. We'll go to new, and you can see here that we still have our words,

so let's go to object. So this is our Princetod BSDF, which is physically based rendering

shader. What this means is that the shader kind of controls the way that lights will bounce

on the surface. So this is realistic rendering.

So here you have your shader for surface. You also have volume, displacement, and thickness.

We're going to be using surface and displacement. But let's focus on our shader for now. Here you

have base color, metallic, roughness, alpha, normal. And for this project, we're only going to use

three nodes here, which is going to be the base color, the metallic, and the thickness.

Three nodes here, which is going to be the base color, the metallic, and the roughness.

So let's check metallic. If metallic is one, you can see that we have this shin here

on our object. Let's change to this default first, so you can see. Yeah.

So here we have, let's go to maybe studio light. And let's bump roughness to the top.

If we bump roughness, you can see that we have kind of a more, not sheer, but

you have more rough in your object. And if you go under, you can see that we have the reflection

here. So it's really smooth when we hit zero. So if we leave roughness to zero on metallic,

you have like this really reflective, you can see that it's reflecting the world that

we have here. If we select another one, you can see that it's reflecting everything,

even the flowers here. And here, here on top, you can see really well this environment here.

So if we go to our scene world, you can see that it's reflecting everything from around.

So for this lantern, we're just going to adjust the base color.

And let's not use absolute values. Let's use some variation.

More or less like this, and a rough.

Now let's add the glass. So to do that, I'm going to press tab, enter, and select this part here.

Then we will add another material. Let's name this to metal. And this one will be our glass.

Okay, so now you can see here that under add, we have different kinds of shaders.

So let's search for the glass and connect to the surface. So you can see that this is not

transparent yet. It's because we need to adjust the ray tracing. So if we go here under glass,

and activate ray trace transmission, and also change this to slap, you have

a better result. So now you can see kind of a glass effect here.

But I also want to add some properties here.

So I'm going to mix this.

And I'm going to add a other noise texture.

And I'm going to map out just the way that we did before. Ctrl T.

This way I can adjust the scale to adjust the amount of noise that I want.

I'm going to use this for roughness too. I want to make this feel like it's foggy from the inside.

Actually, I'm going to leave this white and then we'll see the effect that we get

once we add the light. So I can go here and make it completely glass, or I can make it completely

this shader here. So you can play around with this just like before. I'm going to leave it just like

this for now. So now you can see that we don't have an instance of this. You can see that we

have lantern LP. So let's rename it to lantern. And let's go here and select the original one.

This way, our materials are applied to all of them. Okay, now let's do our terrain.

So for this terrain, I want to use displacement, but not like the way that we did before with

vertex. I'm going to use just a bump only that is going to be applied by the material.

So let's go here, create a new terrain,

terrain material.

And I'm going to use...

And for this, I'm going to use a different texture called Voronoi. So let's see how it looks.

We can control the size here.

So you can see that we have kind of these different polygons here. You can adjust even more

subdivision, roughness, and randomness. So if we go to zero, we get this kind of a checker mesh.

So I want to use this to create the effect of a grass.

So the first thing we're going to do is add color to it. So add the color ramp

and connect to the base color.

And now, we're going to add a texture. So I'm going to add a texture called

and connect to the base color.

So I'm going to add my two green colors. I'm going to go here under my reference,

then I'm going to choose two more colors that I want. This one right here.

I'm going to go to this green, pink,

the main green, and let's select another one.

Lighter one here.

And I think I copied this one.

A little bit lighter.

Let's adjust.

So if we add this lichen here, you can see that I have a bunch of dots, which we can fake

lichen effect for the grass. Okay, so let's not stop here. Let's add another variation. I want

to add one variation bigger to kind of fake different hills in my terrain. So I'm going

to add another color ramp and I'm going to reduce. I'm going to go to the default again

and see what I can do to make some big variations. More or less like this.

So if I go here and I mix these two notes, let's mix this and control here. So now you

can see that we mix from zero to one. Zero is the black and white. Yeah, let's change this.

Let's change this.

Okay, so now I want to mix not everything, but just the value. So if I go to one, I have like

really black here. I want to just make it a little bit darker. You can see that from here,

it has some variation. Okay, you can even go here and make this more

defined.

Now let's add another variation, black and white, just to fake a little bit of shadow

right below this kind of lighter parts that we have here. So let's copy this one and let's copy

another color ramp. And let's do the same thing here. So I'm going to go here and I'm going to

color ramp. And let's test this out. Okay, so let's multiply this again by using this shader here.

Okay, so now we can see that we have the black right there.

I believe we need to invert this. Yeah.

Okay, so let's test by multiplying this first and then multiplying this.

Let's test. So I'm just playing around with values here. Let's see from here, I have this part.

Now I'm adding the other value here. And if we mix it,

now I'm adding the other value here. And if we mix it,

Okay, so let's leave like this for now. This is kind of more the idea. We're going to

change once we start rendering, we're going to adjust different colors and everything.

But I think, yeah, maybe we got too much. So if you look like this, let's see. Maybe I need to

adjust a little bit the scale of this. This one is fine, but maybe this can use the same scale here.

Add a little bit more variation to 200.

So let's compare. If you use just this or if we use the black and white, you already give some

depth to the material. So let's apply this to the other. First, let's also add a displacement. So if

you go here on the material output and drag, you can search for displacement. And I'm going to use

the vector displacement here. So we have this node here that is called height. Height in our

texture is just like this one. It's represented by if you have a black, it's lower and white is

higher. So you can think of zero and one. So if I go here with this material and connect this to

the height, let's look closely and increase, you can see that it kind of fakes this bump here. It's

not a vector displacement because it's not altering the mesh, but it's kind of altering

the way that the light bounces on this surface. So we can increase. Maybe with this texture, it's a

little too bumpy. Let's move to 0.5 or 0.1. But it kind of gives you this stylized effect.

So let's do... Actually, maybe if I do the inverse, it will look better. We need to test and render.

This is it for my terrain. I'm going to select the other ones, leaving this active, Ctrl L, and linking materials.

I don't like the way that the texture is kind of stretched, I feel like in this area.

So I'm going to add, with Ctrl T, I'll add another mapping that I'm going to apply to each one of these.

And I'm going to alter the scale. So you can see that it's more rounded here.

If I have one, let's say two.

Okay, 0.5 maybe.

And one.

Yeah, I think this is better.

The lower I go, the bigger the texture is.

Okay, so this is it for our terrain for now. We're going to play with the results later.

So let's go to our pathway. I feel like we already have a lot of nodes here. So let's copy...

Actually, the name is... Okay. And let's add another one for the pathway.

So I'm going to delete this. I'm going to use the same one here.

Connect to this place. I don't think we're going to use this placement for this one,

so I'm going to delete. So I'm applying the same material here.

I'm going to use a different texture for this. I'm going to use a noise again.

As the factor. And let's change colors.

I'll use my inspiration board again.

Let's connect directly.

Okay, so we need to add the vector here. Let's set back to 1, 1, 1. Okay, so we need to change this.

You can see that this is being repeated.

So let's go here under Array, and let's remove realized instances.

Now you can see that each object is being considered as their one.

Okay, so now this is stretched because we have a conflict in the texture space.

So let's see how the texture space is here in my mesh. We can't even see.

So we have our texture space only on our origin object here. So that's why our texture is warping.

You can see here that here it looks good. Let me see if I can make this more visible.

Make this more visible. And as we go down, it starts to stretch because our box is only in this position.

So you can see here that I have my texture space is considering the first object.

And as I go down, it's generating based on that space there. So what I can do is go here to

Texture Coordinate and use Object instead. And this will fix the noise. Okay.

So now I'm just going to add a few variations again. Let's see how this looks.

Maybe we could add color here.

We're moving values, so let's multiply.

Yeah, so I'm just going to play around with these values here. I'm going to show you once I'm done.

Let's delete this one.

Okay, let's do this here.

Okay, that can change.

Let's grab this one. Okay.

Maybe this dark multiply.

Maybe I want to add one more color ramp here.

And I want to change this to constant.

If I change this to constant, I have a better control. This line becomes pretty sharp.

And I can go here and

make this two.

Okay.

I kind of like this look. It gives a more stylized look. It kind of feels like a little

gray area between the grass, the terrain, and the rocks. It kind of looks like they're growing.

Maybe something like this. Yeah, so this is kind of cute. I'm missing some saturation here.

Okay, so this is it for the pathway.

Okay, so this is it for this part of the lesson. In the next lesson, we are going to make the

adjustments on the material of the little cabin and start editing the lights that are going to

make all of the difference.