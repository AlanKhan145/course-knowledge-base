# 079 — Texture Painting: Non-Color Maps

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 18 — Basics: 3D Texture Painting |
| **Bài học** | Texture Painting: Non-Color Maps |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 28:32 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texture Painting: Non-Color Maps** trong pipeline của section.
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

Alright let's pick up where we left off in the last video discussing texture

paint. So up until this point we have discussed really only how to paint color

on to your model. However there are other types of information that we can use

texture painting to fill out. Now we discussed what roughness maps and normal

maps and metallic maps were in a previous portion of the course, but how

do we hand paint those information types onto our mesh? So I'm just coming here

and fill everything with sort of like a middle white just to give us a blank

slate once again. So the way that we will do this is pretty simple in Blender.

All we need to do is add a new texture slot for any information which we want

to add. So let's say we have, let's actually just fill this with like a

color just so we can see better what we're doing. I'm just going to come in

with the fill tool. I don't have anything masked and I'm just going to

select this sort of purplish color and fill the entire mesh. Okay so great

that's how we add color and up until now we have been painting on this texture

right here which we have named base color 01 and which we are viewing right

here in the 2d viewport. So let's add another channel here to add some more

detail to this. So all we have to do is press the plus button again and remember

we will get sort of a drop-down list of what type of information we want to add.

So let's add a bump layer here. When we get this dialog after pressing this plus

button we can call it whatever we want. We can set the resolution and we can set

the default color. Now for the bump I'm going to leave it at a 0.5 gray which

just means that it has nothing no value in hue no value in saturation and the

value for value is at 0.5. So we're just going to press OK. So there we go now we

have created our bump map. So the bump map as we discussed briefly before is a

non color channel. So similar to alphas which we discussed in the sculpting

portion of the course, Blender is going to look at what we paint here and it's

going to look at the black and white values and translate them to various

degrees of bumpiness. Now I added this bump in at a 0.5 gray because Blender

and pretty much any other 3d imaging software is going to read a value of 0.5

gray as being completely flat. Now you may be wondering what happened to our

nice purple color here and it is still there we are just only viewing this

channel at the moment. We can go back to our color mode by selecting our color

texture slot here and we can return to the bump here. So again 0.5 gray

means that no changes are being made and the values that we paint here in our

on our bump map should be all grayscale values so that means I'm only going to

be using black, white, or some level of gray to paint in here. Now if we paint

with white which I'm going to do by grabbing our draw brush we can come in

here and paint with white this will tell Blender that this area of our mesh

we want to fully push out as far as we can and if we paint with black we're

telling Blender this area of our bump map we want to push in or create divots

as far as we can and having any value in between those will interpret between the

max height value and the max inset value. So I'm talking a lot about

creating bumpiness and divots but right now I am painting on my bump map with

white and black and I'm not seeing any change to the height of this mesh. In

fact I'm just seeing values of black and white. So why is that?

Well that is because we are currently previewing our viewport shading mode is

set to solid so we are just actually viewing the grayscale values of this

mesh in order or I'm sorry the grayscale values of this texture. In order to see

how this bump map is actually going to affect our mesh all we have to do is

change our viewport shading to material preview. Now we have our base color back

and the areas which were painted white and black now have bump values assigned

to them. Now this just a reminder that normal and height maps which I am

collectively referring to as a bump map here do not change the geometry of your

piece at all. It only changes how light is interacting with your model to give

it the illusion of height and displacement without the added

performance costs of actually creating all these points here and pushing them

out in space. So when you view, let me change this falloff a little bit, so when

you view an area with a bump map applied straight on this appears to be

indent. It does appear to be reversed so the black appears to be fully pushed out

and the white appears to be fully pushed in. But when we view these at a glancing

angle we can see that the surface is still in fact flat.

So let's just quickly look at how this material is being set up. We took a lot

of shortcuts by using the texture slot list here and adding them through this

texture slot panel. Let's come and look at how Blender is actually setting this

up for us. So let's tab over to shading our shading viewport and let's take a

look at the material it has created. Now because we added all of our texture

slots in the texture paint mode, Blender has gone in and based on what type of

texture we chose, you know either base color or roughness or bump, it has gone

in and added those textures and connected them to our material for us.

Now we could also do this manually if we wanted something different. Let's remove

these textures. Now if we wanted to manually add a new texture we could

definitely do that. We would just have to press shift A, texture, add an image

texture. We could select new, you know put in our settings here. This is the

exact same dialog we got when we were adding it except that Blender will just

not know by default where you want this to be plugged into. So you can plug it

in to any of these input nodes. We could also do this through the image editor or

the UV editor. Through the same process we would add a new material here. Let's

call it new matte 02 or something. It could be blank. We can add so this is now

our new texture that we've added. We could come into shading and on this

image texture node we could select the new material we made and connect it to

our base color. And then now you will see that this image, this texture is

appearing in our texture slots and we can now paint on it. So how Blender is

interpreting these textures with regards to is this a color map, is this a bump

map, is this a roughness map, that is all controlled here in the material node

editor. So just so you know that is where you can control it but again adding

through the texture slot panel and selecting the type will just set this

all up for you so you don't have to do it yourself.

Now you may often find when you start painting, I'm just going to add a couple

channels here so I can demonstrate what I'm about to discuss. So you may often

find that when you start painting you think okay good I have this area but I

also want the area that I have this color applied to I want it to also have

different height or different roughness information. And you could paint these

channels individually as we have been doing so I've come in here I've painted

a little bit of color on to the base color section. Now I can change to the

bump. Let's choose a black and I can paint with the black.

So I'm not seeing the bump changes I just made being reflected here and that

is just because Blender got a little confused because I still have this node

hanging here but it was not attached to anything so when I tried to add a new

bump map through the texture slots it didn't know what to connect to because

this connection node was already occupied. So if you're seeing any issues

like that come into your shading workspace and take a look at your

material here and the problem should be pretty evident. So let's go back here

so now these strokes that I have drawn here are visible. Let's return to texture

paint. So you may find that you want to paint like a color area and then you

want to paint an area of height but that would be very tedious to come in and

manually have to and manually have to try to match these things especially

when you're dealing with height sometimes it can be a little tricky to

get things to match appropriately. So I could come in and try to match this area

but that would be quite time-consuming. So instead we can layer some of these

properties together to paint both height and bump for an instance I'm sorry to

paint both color and height at the same time. Now the one drawback to the method

I'm about to show you for painting in multiple channels is that you will lose

the ability to finely tune some of your properties like height but let's look at

how to do it anyway. So let's come into the shader editor and as I just

explained this is what is controlling how and where these textures that we're

painting are being applied. So we can you know edit this graph a little bit to

control it in a different way. So if I wanted to paint if I knew that everywhere

I wanted to paint this green I also wanted to paint with this bump value

well I don't need two separate textures to control that. Let's disconnect this

one just by clicking on the input node and dragging it out and now let's take

the color value from our base color material and let's input it into our

height and you'll see the result is is that we now have height information

everywhere that we drew on this texture with color information. Now what Blender

is doing it is taking this color that we have drawn this bright green and it

is automatically converting it to a grayscale image and it is using that

grayscale image as the height input for our bump map here. So as I said we can

now choose any color and we can paint and it will paint the height and the

color information simultaneously. I'm going to change my falloff back to the default

smooth here and zoom out. However the limitation with this is that you are

limited your height value is going to be limited by what color you are

painting with. So if you choose a dark value color and you come in here and

paint it well if I wanted this area to be bumping out is because it is looking

at the value and this is a dark value color it is automatically going to push

it in. So if you need areas that are dark to be bumped out or areas that are light

to be pushed in you may have to control them with separate textures the way we

were doing before. Now if you are familiar with Photoshop or any other

image editing software you already know the power of working with layers. So

layers add you to as the name suggests layer different channels of information

to create an overall effect and usually this is done non-destructively across

the layers. I'm just going to paint in with a point actually I'm just going to

fill a point a 0.5 gray again just to work with a blank slate. So we can

replicate a layer system in Blender by using multiple shaders. So let's return

to our shading workspace here and at the moment we currently have our textures

and our material set up so that we have a single image texture which we can

edit and paint on in texture paint mode and that is driving both our base color

and our height. However many objects that you wish to paint will need to have

multiple values at multiple areas and while we can hand paint these it may be

easier in some instances to layer some effects. So I'm just going to delete

everything right now and start from a blank slate. So now we just have our

default cube we have no textures here and when we look at our material in our

shading viewport we have just a default principled shader node. So let's say we

wanted to have a base of a sort of a metallic object. So the way that we would

do this in Blender is by coming into our material and we could come in and

increase this metallic slider to one, maybe decrease the roughness a little

bit so we have now a standard metallic cube. Now we did look at how to mix

materials using material slots in a previous video so if I wanted to add

maybe like a non-metal area to this I could do so with material slots. However

if I were to do it that way I would be limited to the faces so I would

only be able to display either this entire face as our new material or not

at all. However if we layer some of these things and use texture painting we can

get finer control over where we are displaying our different material setups.

So let's take a look at that. So I'm going to start by just duplicating this

principled BSDF node in the material node editor. So just select the node and

press shift and D to duplicate it and I'm just going to click and drag it out

so it is underneath this one. So now I want to set up my secondary material

here. So I'm going to disconnect this just temporarily and I'm going to

connect our second one. Right now they're the same because I've duplicated them

and I haven't changed anything about this material but let's make our

secondary material a sort of non-metallic and let's give it a color

so we can see what we're doing. Let's give it like a bright orange. We can even

increase the roughness. Okay so let's say I wanted to display this orange area on

only a portion of the mesh that is not based on a singular face. Well let's do

this. We need to basically mix these two together. So let's add a mix shader node

here in the material graph. So shift A to bring up the add menu and we're going to

go under shader and we're going to choose a mix shader here. So we're going

to plug the first shader, the metallic one, into the first. We're going to

connect the second shader, the non-metallic orange one, into the second

and we're going to connect the output to the material output so that we can view

it properly in our 3d viewport. So as it stands right now this mix shader is

taking both of these inputs, mixing them together evenly, and displaying the

output as a result of our material. How it chooses to mix these together is

controlled by this factor slider here. You can slide it all the way down to

have the pure metallic, all the way down to have the pure metal, all the way up to

have the pure non-metal orange, but as it stands right now it is applying the

mixing uniformly across the surface of this mesh. However we can use texture

painting to control it and basically create a mask of where we want our

secondary texture displayed. So all we have to do here is for the factor on the

mix shader node, the input node here can take an image texture as its input. So

let me just collapse these bubbles here to give us some more room on our node

here. I'm going to press shift and A and we're going to add a texture and it's

going to be an image texture. So just as we were working with before we can

choose either any textures we have created already in Blender, but let's

just create a new one. Let's call it a mask and the default settings in this

case are fine, so let's just click OK. So now we have this texture created and we

can paint onto it, but before we do that let's just quickly connect the color to

the factor node right here. So right now our image texture that we just created

is this mask one. It is pure black so our material is being showed here as pure

metal here because remember that a numerical value of 0 in this field

equates to a color value of pure black and a numerical value of 1 here would

equate to a color value here of pure white. So plugging in a pure black

texture is telling it to shade it at a factor of 0 everywhere. Okay so let's

come now into our texture paint mode and we see that we have our mask applied

here in our texture slots because it has been connected to our material. So any

image texture you have that is connected to your material in your shader

editor should appear here as a texture slot. So now keeping in mind that 1 equals

white, 0 equals black, and 0.5 is a middle gray, we can come in with our draw

brush, set a value of white, set our brush size, and now if we paint here not only

are we getting a color information but it is including the roughness and the

metallic information that we set up in this principled BSDF node and it is

mixing them based on a texture that we have painted. We can add more layers as

needed simply by adding more of these principled shaders. Let's change some

values so we can see the effect of it. And now all we need to do is duplicate

this mix shader. Shift D. Let's plug the output of this first mix shader into

shader 1. Let's plug the output of this third principled BSDF node into shader

2. And let's plug the output of this second mix shader now is going to be the

input for our material output surface. Give it a minute to compile that. Okay

now again our factor here is set to 1 meaning that this material is displaying

only this shader at the moment. We can connect either our old mask here. Give it

a moment to compile. You can see the shaders compilation and now our mask is

appearing here. However obviously we do not want the same mask for this orange

section as we do for this blue section because it will just cause the blue to

render directly over the orange. So let's disconnect this. And your

computer may hitch a little bit at this point while it compiles shaders. That is

totally normal. Just give it a minute. So let's duplicate this node. Shift D. And

now instead of using this mask here, let's get rid of it by pressing X. And we

can either choose a new mask from the drop-down from something we have already

created. We can create a new one and texture paint into it. Or we can open an

alpha image from our computer. So let me just quickly remind you how to do that.

We went over this in the sculpting section. But all you have to do is in

this image texture node we just want to open from a location on your computer.

Navigate to that location. Select your image. Give it a moment.

Alright there we go. So now if we connect this here to this here. Now how this is

displayed again will be dependent on your texture mapping. So if I come into

the UV editor and let's stay in material preview so we can see what we're doing.

And let's change the image we are previewing in the UV side to the image

we loaded. So currently because the UVs are this sort of T shape here is going

to display any loaded texture that we have onto our mesh as such. If we wanted

to change that we would have to change the UVs. So I hope this is starting to

sort of click for you as to how materials and textures and UVs are all

interconnected. And of course if we wanted to display this sun in a

different way we could use that alpha within our texture paint to paint as a

stencil. And again this is something that should be somewhat familiar from the

sculpting portion. So what I'm going to do here I'm going to jump back into the

shading mode and instead of using this sun JPEG image I'm going to change this

back to this Numat02. And that is simply because this is a blank texture

here that I can paint on. Okay so let's return to texture paint mode. And now

anywhere that I paint on this Numat02 should be displayed in blue and

anywhere that I paint with the mask selected should be displayed in orange.

Now because Blender's painting and sculpting interfaces are largely the

same and the controls are largely the same you can use things like alphas and

texture masking the exact same way you would have done for sculpting.

So all we need to do here is come into this texture. Okay so what we actually

need to do is a little bit convoluted as far as the steps we need to take. So we

need to come into the texture drop-down as part of the active tool and workspace

settings and add a new texture. So that has added a new texture slot for us. So

now we need to set that image here. We can click the drop-down. We already have

this alpha loaded in. So we click the drop-down, select our alpha, and that will

be loaded here. And now let's just choose that from by clicking on the texture

itself. We can choose texture and that should update this preview here. Let's

change the mode to stencil. Again that will give us a stencil in our 3d viewport

which we can move by right mouse button and dragging it. Let's align our view. We

can scale it by holding shift and right mouse button and we can rotate it by

holding ctrl and pressing the right mouse button. So now with the stencil in

place we can with our draw brush enabled click here and use it as a stencil and

fill it in. So there we have it.

Alright so we're going to do a texture painting demonstration in the next video

so I will see you then.