# 159 — Texturing the Shorts

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 25 — Character Creation: Final Project |
| **Bài học** | Texturing the Shorts |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 37:10 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texturing the Shorts** trong pipeline của section.
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

hello and welcome back guys so let us do the texturing of the shorts over here so

let's go and start this I want to make the progress a little bit faster so I'm

just gonna go to our jacket over here and then copy and paste these things

over here except no I actually want to pump I want the fabric I don't want this

base color all right so I'm deselecting it and I want the ambient occlusion so

I'm just gonna ctrl C to copy it and then paste it over here let's let me do

it this and then paste it over here okay now I can go ahead and connect this bump

to bump because I want a similar material you're just gonna play around

with these are the bumps as you can see you can just play around with the

numbers and all that okay but now let's go to let's go here and change the

level viewport to 1 I don't want blender to lag, change the level viewport of all of

these to 1 as well so blender would be much more responsive okay and now let's

go ahead and go to texture paint and then go to workspace and let's add a

base color we're gonna call it shorts base color and this is gonna be the

color that we set over here all right or actually it's a different color so let's

ctrl C this one and then base color ctrl V to have this space this as the base

color I'm gonna click on 32-bit floats to have it in a higher quality and then

it automatically connected to the base color but I want it to be connected to

this mix node over here so to the second one and then this mix node which is the

ambient occlusion node we're gonna mix it with the base color which we mixed

with the fabric pattern and then we are gonna connect this sockets to the base

color and let's see what we get we get this result all right so that's not bad

let me bring in pure F so this is our pure F and yeah we need to make it a

little bit darker and a bit more green so let's do that let's go and let's go

to here over here let's go to feel and then let's copy paste our color which we

copied earlier let's make it darker now let's fill it okay and then let's go to

hue and go a little bit toward green so as you can see I'm changing it a little

bit toward green let's pull it again to get a little bit more closer to the

color of the shorts that we have over here so let's also change it more so I

don't want it to be too green

okay as you can see here it's not green it looks like gray so if I see other

people's works as well it's more toward gray so I think that's the right color

as well I'm gonna turn it toward gray like this like what we had earlier and

this is pretty cool let's make it a little bit more black by reducing the

value now we have something like this we can even go further have something

like this okay so I think that's cool you can you can decide how it's gonna

look it doesn't necessarily needs to be perfect and match 100% with the reference

but you need to not vary too much like we can't use red or any color but yeah

this is good I think I'm gonna change it a little bit toward green again to see

it as a dark green color like I think that's the that's the best color for

this short for now alright so I filled it and let's start color on it but don't

forget to save it right now you're in the jacket but I want to go to the base

layer of this one shorts base layer so select this and I pressed s I'm on

keyboard and then press shorts and this is the UV okay and then press on image

save as and I'm gonna save it as OpenEXR and then let's say fill it with full

let's go to maps folder and save it as it is right now okay let's save blender

as well and now our color map is saved well as you know we have work to do we

have to go to flat and as you can see the color is now looking too much flat

so we have to go again to the curves bring down this one so go to this one

this preset over here and then bring down this handle all the way down over

here it makes the brush much more smoother so if I draw on here as you can

see the brush is much more smoother okay then we can change it to white over here

so see the result as you can see it's too much okay so I can change the

change something like this all right let's decrease this change as much as we

can and I want to add some white patches so let's go over here and add some white

patches to some areas I think we can even go lower than this like 0.1 is good

I'm just drawing a little bit of white patches in areas so it's to our art

this range is actually zero so let's change it back to 0.1 let's add a

little bit of whiteness in some areas to add some variation

all right let's go to material preview to see what we get and now we have a better

result let's go and I want to go to my color preset to see what we have I want

to add a little bit of yellow let's see material preview first to see what we

get when we color on it so that's quite fine it adds more to the color it makes

it to be not to be too clean and too new so I don't want to fabric to look too

new all right you should have some damages some dust on it all that

okay let's go to power material preview all right now let's select on this color

and see what we get when we draw on it with a much higher value so because the

color is toward black it doesn't add difference a lot of difference but as

you can see here now it's adding a little bit of redness so that's that

might do what we want in some of these areas I'm just gonna add some redness in

some of these areas

again to add more variation so the solid wheel to see where we added these

things all right now it looks much older all right so now I want to go to brown

and with the brown I want to use our mask over here so let's click on new

texture go over here to texture over here and new and open our texture the

dots texture and then make sure that the texture is disabled we want to use

texture mask and select our texture that we imported so now we view plane over

here and we actually set it to random and check this box random and we go over

here to space and we increase the jitter this makes it much more random all right

now we can add stuff so we don't immediately see it but it is adding some

dots I presume and maybe the jitter is too much so let's try again you have the

texture mask yeah so let's try it with a little bit sharper yeah now we see it

now let's go to material preview to see how much is affecting the area in here

it is too much so let's make that half right there and let's make it a little

bit go down to not be too harsh let's try again now as you can see these dots

now are much better they're affecting the color but not too much that it would

be too visible and too noticeable and now let's add these dots to the surface

okay now that's good so I want to connect these

pockets now to the shorts to make it to make the color the same so I'm gonna

press on so I think the material is different right now the material is the

same but let's connect them

let's see if we don't have any modifiers and now let's connect them

all right now let's go to texture paint let's grab this color over here and draw

on top of this and let's make it a bit sharper and disable texture mask now

let's color on top of it

okay now let's delete this one and let's add some variation to the pockets as

well this strange was too much so I'm just adding some quick colors to the

base color we just did

let's go to solid color so the material is not too much white alright so we need

to fix that let's bring the strange and add back a little bit of that green and now we're good

all right it's the same thing over here

now let's add some white in this area now in this area is too it's just with

one color I don't like it so let's just add some color with low strange

all right let's set it to pure black and set it to one of the strange to see what

color we get when we color in this area so more toward red as you can see so

let's go make it to the middle a little bit

make it to multiply to see what we get now it's much more darker all right so I

want a little bit of darker areas in the folds in the area of the folds I'm

just gonna a little bit with a very low pressure on my pen a little bit color

these areas where we have some folds

okay I'm gonna use soften and a little bit soften between the colors over here

to make it more blending with each other

okay now I think this area is looking too much red okay so I'm going to grab

this color with s and then paint on this area a little bit a little bit low

strange the very soft color painting on top of the blackness we did over here

with the original color which is like this color the green color to make it

more blend with each other so I don't as I said before I don't want something

like this something that is too strange something like all right that's not too

too strong but sometimes when the hue and the saturation is very up we have a

full strand of ever sharp fall-off we get something like this all right and I

don't want an effect like that because that's how it works okay we need to

blend things each other so we can even use this and bring down the strange then

use this red to blend this black and green with each other so as you can see

now I'm blending these two colors together it's red let's change it back

to mix and now the mix it is too strong we can change it to screen to make the

blending much more nicer

okay now let's again grab the green color and I want to let's first save the

image and I want to make it a very consistent fall-off with a consistent

fall-off I'm gonna do one strokes like this from below to top so it would be

blending much nicer between the colors

increase the strength with shift from holding shift as you can see below the

strength I'm holding shift and then increasing the strength it's gonna

increase the strength much more precisely

let's go a little bit higher in the strength and now let's blend colors much nicely nicer

all right that's good next thing I want to do I wanna with a with a brown color

like that and with a fall-off like that so I want to add a little bit let's say

increase the value let's decrease it I don't want it to be too visible and now

I want to make these areas a little bit more toward red and brown because these

areas are much are much there's a much higher chance that these areas are gonna

this dust is gonna sit on these areas

point lamp increase the radius and increase the power like something like

200 all right I want to put the light like this I want to see how it looks

like is there well it if there is too much redness or anything okay let's

select this and let's remove this one we need to make our own pump so these lines

over here not correct correct we need to make our own bump

all right I think it's a so it'll be too much of redness in this area so let's

grab the draw brush I know it's a sharper fall-off with green increase the

strange and let's draw on it all right it's gonna destroy it all right but it's

gonna leave behind a little bit of that color so that's I think that's gonna be

much better than what we had before let's go and see yeah as you can see

the color is it's much better enough so we can do even more in this area

then it's soften don't forget to save it's soften we will make the blendings

in these areas a little bit better

okay now let's go to our rocket space over here and make our bump map so I

think a 2k pump map is enough for our purpose over here and 32-bit you're not

kidding okay and the bump map should be here as you can see we don't need the

bump vector so I'm gonna delete that we're gonna do the same we did with the

jacket and all the hoodie and all that we're gonna click on this and connect it

to the color and now what I'm gonna do I want to make the same thing with it with

the jacket in this area and we are going to make some dents in this area to do

that if you remember we need a black color all right with a horror strange

and then make sure that you have no texture set it to line set the falloff

to something like like the default one I think is good enough and now let's see what we get

I don't see anything maybe increase this range let's connect it directly to the

bump vector and to see much better what we're doing so I don't see anything

let's go out of object mode then go to texture mode again all right because it's

set to screen so I think that's the problem yeah that was a problem so we

can do it even better in this view so a line like this and let's go to material

preview to see the result and obviously you need to tune it down but obviously

this is too much so set make the radius to be much later than we was and then

with a line brush we are going to do that let's make sure the x symmetry is on

which is not so I'm just going to do it again and do it like this all right

let's check the other side and I think that's good and now let's make it in the

back as well we don't need symmetry so let's make it in the back something like this

okay and now I want some bumps in the pockets as well so let's test this first

I'm gonna test the radius first and then I'm gonna use curves for this purpose so

I think that's a bit lower I think that's fine we go to stroke and change

it to curve make this first handle mark the second handle make these to be

straight lines like this and then move it with this one here with this one here

ctrl right click again to make another handle make it straight over here make

it a little bit curve in these areas and make another handle make this handle

move to this area

that's enable x symmetry ctrl right click again

you

all right I made a mistake I just zoomed in so let's set it up again you have to

be careful not to zoom in I just forgot about that to move around or zoom in you

just have to be stationary you can't move so I'm just going to zoom out a

little bit let's move these again

and now let's press enter and we can press double a to remove all these

curves and with X and I think that's good enough and other on the other side

is good enough as well so we can fix this line over here manually like this

actually let's go with space 10 and stop at the stroke and do it with a curve like

this okay let's do the same thing with the line in the middle parts over here

and let's save our bump map save as PNG is fine now we can change it to OpenXR

RGBA full and short bump EXR and now our maps are saved and now let's make

something like this here

all right that is fine let's do the same thing now actually this area is not

sewn together so this is a yeah this is one fabric over here one fabric over

here these are sewn together with the fabric above which we don't see so

that's good let me do one one more time in here in the middle line so let's go

to front view and with line we can easily do this so this is very very

little let's make it a bit bigger and that's fine let's go to rendering and

see the result and that is fine that is very good so now all right so that's

good so let's connect these two together so this one to color one and

the fabric to color two and the mix node to height all right and now let's see

the changes as you can see now we have combined these two together so that's

good I'm much nicer okay so let me save our bumps over here and make sure the

star is not on your on your image over here it means as I said before it means

that your map has not be your map has not been saved okay I think that's good

enough so let's stop it right there and in the next one let's go and finish the

shoes and with the shoes I think we are done with the texturing so until next time goodbye


