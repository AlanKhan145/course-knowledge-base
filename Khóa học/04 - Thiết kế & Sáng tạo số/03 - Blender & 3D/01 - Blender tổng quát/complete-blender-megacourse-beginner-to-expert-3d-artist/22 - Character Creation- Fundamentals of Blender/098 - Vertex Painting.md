# 098 — Vertex Painting

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 22 — Character Creation: Fundamentals of Blender |
| **Bài học** | Vertex Painting |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 36:00 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Vertex Painting** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow

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


Hello everyone, in this video we are going to talk about vertex painting so

first of all delete the default cube don't forget that then let's make a

plane over here and now let's go to vertex painting over here or ctrl tab

and vertex paint so if I go to vertex paint I have this menu I have this color

over here let's pick a red color and let's color this plane right so if I

click here nothing happens so what is going on why can't I color my plane but

if I go over here if I click and drag over here as you can see something

happens now I have a red color over here if I go over here and here and here I

get color red a red color plane so what is happening is that when vertex

painting as the name implies use vertices these vertices so my plane has

four vertices use these vertices to paint the object the mesh so it paints

around these vertex paint around these vertices and then when the

paintings the paintings blend with each other right here that's the whole thing

about vertex painting so you you're painting the vertices remember that so

to be able to fix this problem that we have like we can we can paint in the

middle right now all right as you can see we need to subdivide our plane and

to do that we go to edit mode tab right click subdivide and then we have this

subdivision then let's increase the subdivision something like 10 you can

go more than 10 as you can see if I click here it won't change you can go

more than 10 by typing it so if I type 12 I can go for 12 subdivision all right

then ctrl tab vertex paint and then if I try now you can see that I can paint on

my plane all right to fill the whole objects with a paint a paint that to

chosen chosen over here you need to go to paint and set vertex color or the

shortcut shift K so if I hold shift and K I will fill this plane with the red

color and if I go for green for example and shift K or fill it with green and

the same thing with this blue color all right so that's the whole thing about

vertex color you need to first add geometry but now I want to see this

plane in full glory like I want to see it in the rendering so I go to rendering

and then what happens like we don't have our vertex color like we have in the

shading mode what you need to know is that when you make an object and go to

vertex mode blender will if you go to here obviously the properties blender

will make a vertex color in this tab over here for you so we will make a

vertex color and then you can even rename this vertex color to test then

even make another vertex color like to test to or can make a lot of vertex

colors and if you want to use one of them you go here and choose one of these

to be rendered all right so clicking on this render button this is the render

icon so this vertex color will be rendered if you want to test test one to

be rendered let's add the one here just click on the icon over here so to add

this to for us to see the vertex color in the rendering we need to go to

shading and add a material for our plane so I click on new now our plane has a

material if I change it here as you can see right and now shift a and then search

for vertex color search for vertex color over here with this color and then

we have this vertex color node and then select over in this box to choose your

vertex color so as you as you as we have made here two versus color options over

here alright so two vertices colors test one and test two I want to use the test

one that we just made a painting like I think it was a blue color so I click on

it and then test one and then connect this color to base color and then

blender we're going to use this vertex color note to determine that this color

is used for rendering alright so now if I make changes in my vertex color right

here in the rendering mode I can see it as well as my shading but then we can

change it to test two all right and then change the vertex change the vertex

color in the test two so click on test two now we're in the other

vertex color and then like shift K to fill it or go to shading mode first

select the test two and then shift K and then let's maybe add something else so

this is our test two and this is our test one but we made our shading to be

to show in the rendering mode the test one so in the shading mode we can change

it and see like other layers of our work like other things like we want to make

two to color into paintings to see like which one is better than the other right

and then we do this to test them out and then if you go to test two we are in

test two and we go we go to rendering it is showing the test one we go here and

change it to test two and now in rendering mode we're gonna see the test

two as well so that's the whole thing about these vertices colors that you

need to know and you need to go to here in the node properties and add the

vertex color node and select the vertex color that you want all right now let's

get into the fun part which is painting so as I've said before while shift K you

will fill the color and here we have or we already know we have drawing to draw

on our mesh and then we have blur which is kind of a smoothing like we can

smooth our color over here and have much more smoother shifts that especially

this is very useful in vertices coloring because because it is painting on

vertices it can make very sharp edges and you can fix this with this blur

option then we can we have this average which will average the color of the mesh

when you click with the same values that we have green here we have blue here if

I click here you will average it over here so if I click on the right here it

will try to average the area with the same color and it does that so and we

have a smear as well so let's again make a color here like blue if I use a smear

over here and then use this I can drag my color like that okay so we have this

and we have the mixing type for example I'm not gonna go into all of these but

for example if you use the screen we can have a much more softer color if you

click like if you click here we have a much more softer and it can help us to

blend the coloring with each other as well so let's change it back to screen

then we have a radius over here so if you change it as you can see the radius

will change as well and make changes to how thin or thick your drawing will be

or you can use the shortcut which is which is the same in all the other

menus as well so in the vertex paint, in the weight paint, in the texture paint

and in the sculpt mode for changing the radius the shortcut is F if you

didn't know so by pressing F I can change it and then by clicking I can

compare and for strength we can change it here as well or by the shortcut

shift F so we're pressing shift F can change the strength as well so if I

click here I get this strength over here alright and again it's the same in

other menus so very helpful if you have a tablet you can click on here so if

you have a pen tablet with pressure like I do right now I can press right here

and it will detect your pressure for painting so for example if I

click here right let me color it with white and I make it like something like

this and then the strength so for radius we don't need strength right but

something that we need strength is for something we need pressure for radius we

don't need the pressure so but for something like for strange we pretty

much need pressure pen pressure so now I have pen pressure and now if I pressure

it like this I get a very very more strange with which one much more a

strange color if I press pressures very softly I get a very very soft color

right here I can help a lot when blending colors with each other all

right so that's it the brush menu is not very helpful in here and the texture

menu just not very helpful these are set set it to default and never touch them I

think and then we have texture okay so in all the menus over here vertex paint

weight paint texture paint you have these options right and then you have

over here the workplace the worker space the active tool workspace you also have

these options over here with some extra options that the blender team I think

couldn't just fill in this place I will explain here but all these options are

here as well okay so we have texture if I click a new I'm making I make a

texture and if I go here you know on the texture I see it as well to see the

texture we need to go to the global texturing properties in blender so this

is a texture properties in blender if I go to object mode I have it as well to

add texture to my object so the I go here and then I select the texture so

for example if I select the texture like the texture we use in the last video

like this this wood texture the albedo texture and isolated I have this

texture or here I go to the properties over here on the texture and this

texture is selected or under here these texturings is selected and the mapping

is set to tight so now let me first fill it and then yeah now if I select on it

you see some changes like the color blender is trying to use the color in

the texture to paint this area alright and as you can see we have this and the

reason the resolution is in good well easy because we don't have enough

geometry so if I go here we only have this much geometry if you go and

subdivide it even more you get a very much more resolution and you get this

picture very well but I don't want you to do that because it takes a lot of

performance so speaking of performance you need to keep in mind that the

vertex paints mode in blender takes a lot of performance when you have a lot

of vertices and in many cases you have all right unless you just do some low

poly modeling otherwise you have a lot of geometry to work with and sometimes

when painting it gets very laggy so keep that in mind but the reason it is low

res is because your mesh is low res actually so we have mapping over here

set to tons as you can see we did that shift K to fill it again if you use

viewplane you use another method to paint all right and 3d as well use

another method to paint but what I'm interested in is in this essence on so

in every menu here vertex texture is sculpting remember that to project a

texture like this to to our mesh it's better to use stencil and what it does

is adding this texture to our scene like a square and to move this texture use

right mouse click and to rotate it use ctrl and right mouse click and if I zoom

in right now or zoom out actually and fill texture like this and then I'm

telling blender that I want these areas to only be included in the painting so

if I zoom in right now and go here and then if I paint over here nothing

happens all right but if I paint over here now I'm getting the texture that I

wanted so you only can paint over the area that your stencil is I can move it

to it right click all right so that's pretty handy a sensor and that you can

use for you can use in your texturing vertex painting and sculpting let me

delete that by hitting that and yeah all right the next thing here is stroke let

me fill it again with shift K stroke the first default stroke method we have is

space so it's the same thing that we've seen already so this is space like

something like painting and then we have dots you use some dots for stroking and

adding paint right and then we have a brush it's it looks like something like

like a spring it look yeah that the paint looks like you're spraying on the

object so let's go here it looks like yeah spraying on the object and then we

have a line which is very useful if I click and drag I have this line over here

if I let go I have this thing over here this line and again because we have a

low geometry and it is painting the vertices is giving me this very sharp

painting if I change it to curve the last option we have we can use curve as

well and again these stroke things are similar in the texture weight and sculpt

mode so remember that you can use all these all these options are there as

well so for curve is a little different let me change my view go to yeah so for

curve the the key that you have to press is ctrl plus right-click all right so if

I go here and I have my shirt as curve and then ctrl and right-click I have

these handle over here then I let go and then if I ctrl and right-click here I

have my second handle and if I ctrl and right-click here I have my third handle

and if I ctrl and right here click here I have my fourth handle if I do this I

can change the location and how these handle and those will affect and do my

and I can use them for my painting painting some very interesting shapes

and then when I'm done with the curves I'm done with setting up the curves I

press enter on my keyboard and then the curves will be painted all right and

again because our resolution is low is going like this let me actually increase

the resolution so you have a better idea how these will be useful so now you can

see that the curve did a very good job to make a line over here and if you use

blur we can make these sharp edges go away all right or we can go here paint

and smooth vertices color to add an effect so that's it for the strokes

something else we have here are these options let me change it back to space

let's go over here the same option here again so these are the same options

stroke stroke same option here we have a spacing let me fill this from the color

we have a spacing over here and what is it when we painting where we're painting

it's using this value of a spacing to between each stroke so actually doing

this thing like making these dots and then when we're left-clicking and

dragging it paints like this all right so if you increase this spacing

Blender will increase the spacing between each stroke so it will make

that thing like this and if you increase it very high like that I may not even

see the stroke so if I go like that yeah I don't see anything anymore so and if

you decrease it like for one it will increase the resolution a little bit

but again it takes performance from and takes CPU and all that so I usually like

it around 5 to 10 the default value of 7 isn't the next thing we have here is

jittering so you turn look at it like a randomness like a randomness modifier so

if we click here it adds some randomness into your stroke all right and if I

combine it with this spacing which I just showed you you get some nice effect

like this all right and this is very useful when painting the skin and when

you want to paint the imperfections the input sample will increase the resolution

for especially the dots so it will improve the resolution but I think it's

not very useful in texturing it's useful in sculpting not very much in

texturing and vertex paint again shift K to fill in I don't know why in vertex

paint we don't have a fill option over here because if you go to texture which

I will discuss in the next video you have a fill option over here which does

the same thing as this shift K button over here to fill my object so but I

don't know why we don't have it here hopefully we have it in the future the

sample is a stroke here over here if you enable it it especially when you're

working with a mouse you may not be able to make a straight line so by enabling

the sample stroke blender will help you and make it make a make a line behind

your stroke to help you draw straight lines so if I click and drag as you can

see this is a line I guess so the factor is very high I think oh no the spacing

is very high so let's reset this to default right click reset right click

reset and right click reset all right now now we have the default value of

stabilizer now if I click and drag and change the color now you can see that I

can make various straight lines and if I increase the factor the strange will be

much higher so if I do this now you can see that I don't even see a color

because this line is preventing me from making color it is it's kind of

calculating the path so to make a very straight line so if I go this I can do

that I don't even I can make something like this around painting like that all

right and if I increase the radius it will help me to make some very round

shapes like that okay so yeah that's it about stabilizing stroke let's turn it

up now for fall-off you have these you have these things over here these shapes

over here and what it means like the default one is like this what it means

is that it has a path like this one and then goes like this something so it's

something like this right and then it means that when you have your stroke

like over here all right if you have your stroke or you'll be

several the floor if you have a story over here the most the strange will be

mostly in this area and then it will fall in this area so it will be it will

be much that it will have much less assurance so for example if I could if I

do some coloring over here as you can see I have very much strange or here and

then the color gets softer in these areas all right so if I change the

fall-off or here like off the curve and then make it like this so what I'm so

the shape is like this over here so what I expecting is that the thing is like

this right so it what I'm expecting to is to get something very soft so I'm

expecting to get something very soft from my stroke to have them to have a

very soft color in the whole in the whole when I'm painting that's what I

mean so if I click on it let's see what they did with what it does as you can

see is making a very soft coloring and the inside is black or here right so if

I change it like this let's see how it changes right and if I delete this dot

or here and have a shape like this now I have I think I'm I'm gonna get paint I

hope in with a very soft color so let's get that as you can see yeah so so

that's it for this one so you can change it as well so if I go over here and

something like this I will get a very sharp like this it's very sharp a sharp

painting and I can manipulate this one as well so you have these options and

these are the pre-made options you can use so it's smoothing you can use this

one smooth for a smooth brush can use sharper for a sharper brush and you can

use constants so by constants you will not get these blur areas like these blur

areas around your brush okay so that's it that's all you need to know about

these these fall-offs all right let's

change it back to default something like this all right so the next thing

the next thing is the cursor it's the color of the cursor so it's kind of pink

now if I change it to green it will be green if I change it to blue it will be blue and you

can set the fall-off opacity and this opacity right here so that I think

that's all you have symmetry as well you can enable symmetry over here or you can

enable symmetry yeah can enable symmetry over here if I enable symmetry X symmetry

you have the X symmetry so the X symmetry yeah so something like that

all right and the most important thing in the coloring texture painting and

versus painting is something called and it's not in here something called color

palette and it will be very useful for you so hey Ascension so we have something

called color picker and color palette here which we don't have over here so if

I go here and choose a color it's the same as here to choose a color right to

paint and then here I have an option to change color swap color so if I click

and swap color I can swap color very fast or here but we can go even faster than this

with the with a shortcut so the shortcut for swapping color is X on keyboard so now let's

change the color to something like red and now I have red color as my active color now

painting now I press X now I have green color as my active color X X X X X X so here we can

change the color very quickly all right and then we can make a color palette so here I click on new

and then I can make a name so for example I make color palettes named skin and then I have

this skin color palette and to add a color color to this color palette I press on this plus button

this will add my active color which is green right now to my color palette so click on this plus

button now I have this green and then I can I can let's press X of bread as my active color

let's press on plus now I have red as well in my color but let's add some other color palettes

like this one like this one and now I have four colors to use so it will be very useful to go

coloring I can quickly change to this color quickly change to this color quickly change

to this color and this color with my color palette the other good thing is that we can make many

color palette as much as we want so if I click on this one to add a new color palette I have a

new color palette and then I can make a new color palette named like imperfections so for imperfections

of the skin and now I can add colors for imperfection like something like brown or something like like

this color right and then I can use these as well and then I can go here and then change between my

color palette so if I go to color palette skin now I have all these colors that I've just made

and then the last shortcut is s for for these parts of our course it gives you and this I pick

I color I pick what was equalized I'm not sure and then by pressing by holding s and then not

clicking or not clicking just hovering you can select your color so now it's green pay attention

to this color over here it's green right here and I'll move it towards red and now it's red and I'll

move it toward this one and this one and this one this one and now I can choose any color I want so

if I let go of red my color will be right now I can paint on this as you can see this color the

value is different is because it is we painted a red on top of a white and behind blow it up maybe

with some other color as well so it is taking this this into consideration as well and then

blending the color this value of this color this here saturation and then when we cover it on yellow

it will give us these these blending colors of these blending effects and we can change the

blending effects like something for like a screen and then we can change it to look something

multiply to get other effects so multiply will give us a very more value color and the screen

will do the opposite all right so s is for so it's in color and that is very useful for blending

so if I have some colors over here some green all right some yellow and this and then we can

just quickly use this over here and then blend with this blue and then use this over here again

and then color it and use this color it use this color it use this and we can go on like

this and blend color with each other very nicely so this is very useful for coloring

okay that's so the main shortcuts are F for radius shift F for the strange control right

for the curve stroke X for swapping between colors and s for selecting colors on our mesh

all right I think that's it for vertex painting I really hope you learn something in this video

and as a last reminder for seeing your vertex color in the rendering you need to add a vertex

color node and choose your vertex color so let's change it to cycle not much of a difference all

right that's it and until next video which we will discuss about texture painting and a basic

stuff about some basic stuff about UV unwrapping goodbye


