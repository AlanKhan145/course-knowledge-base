# 078 — Texture Painting: Color Maps Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 18 — Basics: 3D Texture Painting |
| **Bài học** | Texture Painting: Color Maps Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 25m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texture Painting: Color Maps Pt. 2** trong pipeline của section.
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

So underneath the color wheel here which we use for selecting colors and we

obviously have the value slider here which will affect the lightness or

darkness. Again we can pick any color hue here or we can click on the color bar to

bring up the full color selector which will enable us to also access the hue,

saturation, and value sliders which should already be familiar to you from

previous sections of the course. So we have these two color bars here and this

refers to our primary and our secondary color. So we can basically save two

colors in memory at the same time for quick switching between them. I think by

default these are set to black and white but we can set them to whatever we want

so that when I have my primary color here is red my secondary color here is

green and it will also show you color and secondary color if you hover over

them. So when I click to draw on this mesh, I'm still set to overlay that's why

it's not showing up. So I'm putting my blend mode back to mix just to get back a normal style

brush. So when I click and drag on this mesh to paint I am painting with my

primary color. Now I can paint quickly with my secondary color by holding

CTRL and then coming in and painting with my mouse. You can also quickly flip

between these two colors using the X hotkey on your keyboard. So if I click

and paint I'm using the primary color and now instead of pressing CTRL and

holding that I'm just going to hit X to swap these two and now when I click I'm

using my secondary color. Now if you wanted to use the eyedropper tool

basically to sample any color that is currently on your screen you can do so

either by opening up the full color picker by clicking on either the primary

or the secondary color slots and choosing the eyedropper we can come in

and sample a new color or we can do so by hovering the color in either the 3D

or 2D viewport and pressing S on the keyboard. Now when you do this you do not

have to click to confirm your selection and in fact if you click to confirm it

it will probably be a little messed up. So all you have to do is hover over the

color with your cursor and press S to assign that to the new slot. Now we can

also save more than one color at a time we just can't have them loaded in here

but the way that we can save our colors is by using these color palette options

here underneath our color picker. So I'm gonna paint over this with actually just

a solid black. So I just want to clear off my canvas here and I'm going to do

so just by coming in with a solid color and a large brush size and painting it

again. And of course we have our radius and our strength here. These options I did not

cover because they are exactly the same as the radius and strength tools I'm

sorry the radius and strength settings that we covered for sculpting. So we can

change them here in the properties editor we can change them up here on the

top or we can press F on our keyboard to change the size or shift F to change the

strength. And those controls again are exactly the same as the sculpting brush

controls for radius and strength. So let's look at this color palette here

let's click this drop down and open it up. I'm just going to delete anything that we

accidentally had here. So by default Blender will have a sort of default

colors palette that you can load in here by clicking this palette drop down and

choosing palette. These colors are just sort of preset but if you wanted to

create your own palette you could certainly do that as well. So by default

I believe Blender will create a new palette for you but you can also come in

and add a new palette by coming here and clicking the add a new palette button.

So we got a .002 suffix to indicate that we have created a new palette. To add the

color that you currently have selected here to the palette all you have to do

is press the plus key and that will add a color swatch here. So let's change it

and let's add a couple colors to our palette. So all I've done here is changed

the primary color by selecting a new color from the wheel and I've clicked

the plus key here to add them as colors in my palette. So now I have multiple

colors saved and I can quickly switch between them for quick painting. Again if

you press S to sample a new color on your keyboard it will sample

automatically but if you press S and click it will add that color to your

palette. So I could quickly add this black color to my palette either by

pressing plus on my keyboard or by sampling it in my 3d viewport and

clicking to add that black to my new color palette. We can reorder any of the

colors in this palette using these arrow keys so if I wanted to move this black

up in front of this purple color I could just press up I could move it back

down by pressing the down arrow and I can also sort these automatically if I

had a large number of colors either by their hue, their saturation, their value

or their luminance. So if I were to open the defaults I believe we could sort it

by hue and here we have all of our oranges together all of our greens all

of our blues and all of our pinks are all collected together. That's just to

give you an idea of how these things are being sorted. And again just like with

our sculpting brush tools we can change the fall off of our brush by coming up

here to the falloff drop-down or by opening the falloff drop-down in the

properties editor. Here we have some presets, smooth which is the default

will give you this sort of soft edges. We can do constant to give hard edges. Now

this will cause some pixelation here depending on the resolution of the

texture you are painting in and we can get different brush effects by changing

the falloff here. You can also manually change your falloff by adjusting these

points on the curve as we discussed in a sculpting video. You can add new points

to the curve by simply clicking on them and then we can click and drag the

points. So just as a reminder the way these curves work, let me reset this to the

default. So this is what your default curve will look like and all this is

saying is that it's calculating how to place your brush strokes and what

they look like based on a mathematical formula which is visually represented

here. So the x-axis on this graph represents the distance from the center

of your brush and the y-axis represents the opacity. So the leftmost point on the

curve here represents the point that is directly under our crosshairs in our

cursor and the rightmost point here represents the area of the brush that is

represented by the circle, the outermost edge of it. Now the y-axis represents, as

I said, the opacity. So if a point is at the top that means that that area of the

brush is going to be fully opaque and if it is at the bottom it is going to be

fully transparent. So looking at this curve we can see that if I click to, and

let's get a brighter color so we can see what we're doing, if I click anywhere on

this mesh we can see that the area that was under my crosshairs, which was

represented by this dot right here, is fully opaque and it in a smooth

fashion blends itself into a fully transparent area around the edges. So

you'll see that there's a significant portion around the edge of that circle

that represents my brush that is fully transparent and so it is represented

here. So knowing this we can get a custom falloff that we need. So if I change to

constant here this means that from the center all the way to the edge is going

to be fully opaque no matter what. So if I drag down this edge a little bit to be

slightly less opaque and click now you'll see that it is slightly brighter

in the center than it is around these edges. Now if I wanted to extend the

brightness or the bright area farther out to the edges I would need to add a

point here and increase the opacity of that point. So now the transparency only

starts to fall off of this curve again which is why it is called a falloff

towards the edge of the brush. So if I zoom out, click, you'll see that now this

bright yellow area is much larger in this second circle. So that is just a

little bit about how you can customize your falloffs but generally the presets

that you use will be fine. You really only need to customize it if you do want

to do something very strange with your falloff like let's say you wanted the

center of your brush to be transparent and the edges to be opaque which would

look something like that. So for the most part you'll be fine using the

presets but just know that that is how the graph works and the curves work if

you need to get some sort of special effect such as this one. I'm gonna just paint over all

these changes I made and get a clean cube again. So that is more or less all

you need to know about the draw brush using a combination of the radius, the

strength, the blend mode, and the falloff you can get a lot of different varying

and interesting results. So the next brush I want to go over is going to be

the soften brush and this brush does what it sounds like it will just blur

the edges of any strokes you have made. So if I come around and blur this and

this might be more clear if I come in first with my draw brush and change my

falloff to constant. Let's come in and just paint something here. So here we

have these very hard edges around the edges of where our brush was. So the

soften brush which you can come in and select it right here if you come in and

soften you'll see it it will just blur those edges a little bit for you. The

soften brush is pretty straightforward there aren't a lot of settings you can

change your blur method here but Gaussian blur is your pretty your

standard blur for most digital art. Next up we have the smear brush similar to a

soften this is not going to add any color to our model it is just going to

move the color around on it so if I come in with the smear brush and make

sure that my camera is zoomed out enough I can just start smearing some of these

areas. It's kind of freaky. Again this one is very straightforward it does not

have a lot of settings we can mess with and it will only appear to affect areas

that have differing colors so if I were to come in here and try to smear within

this obviously it is smearing it but it is smearing it with the same color so we

are not seeing any effect here. So the next brush we want to cover is the clone

brush which can be accessed right here in the toolbar. So the clone brush is

going to act in a similar way to the clone brush in Photoshop if you are

familiar with that we did cover a bit about how to use the clone brush in

Photoshop when we discussed tiling textures but this is going to work in a

similar way. So let's come to this face and let's draw something here. So if we

wanted to replicate this brush stroke here onto other areas of our mesh we can

do so with the clone brush. So in order to use a clone brush what you have to do

is move your 3d cursor to the area on your 3d mesh in which you want to clone.

So in order to sample this green dot all I need to do is control hold control and

right-click I'm sorry hold shift and right-clicked to move my 3d cursor to

this spot. So now with my clone brush active if I come and paint on this face

you'll see it is replicating that dot everywhere that I paint and just to

prove to you that it is not drawing new dots and it is in fact a replicating

them we can come in and you know edit this to be something a little bit more

complex. Let's pull up our clone brush again and our 3d cursor returns to that

spot so now when we click and draw you're getting that shape cloned again.

Now one thing that is important to note about the clone brush is that it is

dependent on your view angle so if I'm viewing this this is on the backside so

if I'm doing this from the back orthographic if I'm doing this face and

I come in with my clone brush it will replicate that exactly flat however if I

am viewing this at a glancing angle and I come in with my clone brush you'll see

that when we return back to the back orthographic it has skewed my clone

because I was viewing this at a glancing angle. So if you wanted to say replicate

this sort of face but you wanted to put it on a face that is over here well you

couldn't do that in the 3d viewport because as you'll see it is taking our

view angle into account. So you would need to you could still use the clone

brush to accomplish this but you would need to do so in the 2d image editor and

the clone brush is going to work slightly differently in the 2d image

editor than it is in the 3d viewport. So to use this properly in the 2d view let's

pull up the side panel here by hovering in our 2d viewport and pressing N on the

keyboard. So we have our active tool set to clone. What we need to look at now we

need to come down here under the brush settings and click this advanced drop

down here. And you'll see that the advanced features here are not the same

as they are here because again this brush behaves differently depending on

whether you are in 3d or 2d mode. So let's take a closer look at this 2d clone

tool. So in order to use the clone tool properly in 2d we unfortunately do not

have a 2d cursor in this paint mode here. So if we shift right click nothing

happens and if we try to paint again nothing is happening. That is because the

clone tool in the 2d image editor needs to have its sample set here under

advanced where it says image. So if I wanted to replicate this face here I

would need to click this image field and choose base color 1 again is this image.

Now at first it appears as though nothing has happened but really if we

click down on our right mouse button and drag we can now move the a clone of this

image that we're painting on around on our screen. So this sort of semi

transparent overlay is how we're going to draw on our clones. So we can choose

the right mouse button and click and drag to reposition our clone image and

we can left click and drag over the area that we wish to clone. And now you'll see

if we return to the 3d viewport we now have our face properly cloned. Now one

major limitation of using the clone tool in the 2d viewport here is that we

cannot rotate or scale this clone at all as we can when using stencils. So if we

need to rotate this face that we want to clone we want to load this image in

as a stencil instead. But the cool thing that you can do with cloning is that we

can clone from a different image onto our mesh. So let's load in a new image

into Blender. So to get a new image into our Blender file let's just hit this

open image tab here. It's going to bring up our file browser. So I'm just going to

navigate to a location on my computer where I have saved some images and let's

pull up this tiling grass texture we made from a previous video. Great so now

I have this image loaded into Blender. It has not affected my texture painting at

all because we haven't actually painted it. Right now we're just looking at this

image. So let's return to our texture paint by clicking the drop-down at the

top and choosing our texture paint image that we are creating. And now when we

come into the tool settings here when we come into this image drop-down

let's choose our new texture that we just loaded in. So it's added over here

but no worries. Again we cannot rotate or scale this but we can move this over

any of our faces. And now if we come in with our clone tool and left-click and

drag to paint we can see that we have now cloned from this image texture

directly onto our mesh. So that can be a really powerful way to add detail to

your mesh in maybe ways that using this texture and just applying this texture

to this mesh cannot because now I can come in and draw additional things over

this texture and we're still using just a single image to render all these faces.

Okay the last brush I want to discuss is the fill brush. Again this is very

straightforward if you've ever used a program even like Microsoft Paint.

Choosing the fill brush we can select a color. We can click on our mesh in the

3d viewport to fill the entirety of the mesh with that color. We can in the 2d

viewport come in and this the fill tool in the 2d viewport again will work

slightly differently but it will work more like a traditional fill tool that

we are used to from 2d image editing software such as Photoshop or Microsoft

Paint. So it will sample the pixel color under your brush and it will fill every

pixel that is that color with our new color. So if I want to fill this eye sort

of area with white I'm just coming with the fill tool and it will fill. Now it is

not totally perfect because of the fall off of our brush causes some of these

pixels around the edge to be darker than the ones in the center so just keep that

in mind but it is useful for quickly filling out entire areas like we can

quickly change the background color of this cube from black to white simply by

coming in the 2d image editor and using the fill tool.

So as I said we can click to fill the entire mesh in the 3d viewport using the

fill tool but we can also use the fill tool to fill certain areas that we have

masked out. So we discussed masks in a previous section of the course so I'm

not going to be going over what they are here but just know that if you want to

say mask one face of our model here and fill it with a new color the way that we

would do that in Blender is by quickly leaving texture paint mode for edit mode

we're going to select just that face that we want to paint on we're going to

with it still selected we're going to return to texture paint mode and now

you'll see our selection is gone but if we come up and click this button here

next to the mode select where it says paint mask well this model is white so

the difference was hard to see but basically what it has done is it has

painted a mask on every face that we did not have selected so now if I come

in and fill this it will fill only the face that we had selected and

additionally we can come in with our other tools such as draw and if I draw

on this now I can draw on the face that I had selected but not on any others so

that is how you would mask out individual faces in texture paint mode

now we're going to take a quick break and when we come

back we're going to talk about how to paint on our mesh for information

channels other than base color so I will see you in the next video