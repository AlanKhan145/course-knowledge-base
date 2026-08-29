# 108 — Material Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Material Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29:15 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Material Pt. 2** trong pipeline của section.
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

so now let's go to the leg over here and as we did in the last video these two

meshes have the same material over here as pants all right so changing one

material over here will change the other one as well so let's go here and let's

go to material preview and let's do the same thing over here I want to go with a

wave texture this time let's make a color ramp over here let's connect this

color with a fact and then let's control shift click then we get this fact let's

change the scale all right let's change the distortion a little bit distortion

maybe a little bit distortion detail not very much and this way we can change the

phase offsets all right

all right let's see how they look with color so if I change it to something so

we have we use the blue color over here let's go for something some contrast some

red over here with less value and a little bit less saturation so like this

now let's control shift click on this and connect the color to base color and

let's see what we get we get this effect over here all right so this area here I

don't like it so let's see if we can change it the offset value over here so

we can get something like this maybe no that doesn't look good maybe something

like this right maybe you don't know hmm let's change the scale over here maybe

that can help yeah that helped now let's scale it a little bit more you know I

think we have to stay at this scale so 0.9 is good enough I think then we can

change those lines as well so we can go for can go for white maybe right oh this

part is this part isn't good so this is a thing because of the mirror

subdivision so if we let's disable the mirror all right now that is looking to

be fixed so let's delete the mirror for now now let's or maybe by changing it

down here no so let's delete it and now let's add another one maybe maybe that

will fix it no I think you need to yeah the mirror object needs to be something

else so let's go for this no that didn't fix it all right let's do the

manual thing then shift D and X and then move it right over here

okay that's good enough and the shape is looking good form looking good to me

then we can change these values as well some maybe some something close to gray

would be better or changing the saturation over here something like this

will be better for the material let's go to render and see how it looks all right

and now again let's add a bump over here so let's add a bump and noise texture

will look good and color ramp again so color ramp noise texture this one did

this one control shift click to see how this mask will change things then let's

scale up this noise texture let's go for 500 all right that's good to me let's

add a bump let's add it to the color rounds let's connect these to the normal

and let's connect these to the heights over here so this one to the height to

see the effect and then delete that one and then control shift click on

principal BSDF and let's wait for blender to do the calculation and all

that all right we get this effect but we need to go to the render view to see how

actual looks obviously the strange is too much it's the 100% strange so let's

change it to 0.5 and see all right I think we should go with the same thing

we did with the way that with the clothes so let's go for this and maybe

this will be enough yeah this is enough I think this is a very subtle to give

some variation and yeah so let's go for 0.4 maybe all right let's go for the

belts over here and we're gonna go with something simple first for the belt we

are gonna make some bump like we did for here we can just select them ctrl C

and then go to here and control V and then we can just let's first see how the

mask will look we can change the scale over here so let's change it back to 200

maybe the details let's decrease the roughness over here and change the

distortion to something like crank up the distortion decrease the scale all

right now let's see what we get with the bump node so let's go to normal

normal and let's wait for blender to calculate need to first control shift T

on this one and all right let's change it to one see the how it changes or I

don't like this noise so let's make another one like I think the worn I will

be much better over here so let's just keep it over here keep this noise

texture over here and then disconnect it

with ctrl right click you can disconnect the nodes so let's go here and connect

these two then wait for blender to do its thing so it's gonna give us this texture

let's control click on this one to see what we get this is all right let's

change the randomness change it to F2

I'm playing around with the options to see what we get like I think this one is

better let's just go it down to 100 maybe 50 and then let's change this

value over here all right let's see how it looks so control shift T on this one

and then we get some uneven surface

all right let's go for 0.2 and now we have some uneven

surface in our bolts we can change the color now to something like brownish

thing or we can go here and we can maybe mix these two together so let's go here

go to this one and mix these two and see what we get if you don't like it so we

can always just go back right so I want to change the bump a little bit let's

see what we get here so blender is doing some calculation I think this is much

better for the build right not too realistic and not too too simple

let's change this to multiply or add let's see how changing the blending type

to add or change the look of this

let's see the multiply all right I think I have a happy with multiply here okay

yeah I think I think that's good enough let's go to the buckle and for the

buckle let's just let's just add a color over here maybe all right we don't need

fancy thing for the bottle for the buckle so something like this maybe all

right well I think this Voronoi bump will help a lot to bring some variation so

let's just do this and then connect the normal to normal and then wait for

Blender to do its thing and yeah I think it's much better now as you can

see there are some bumps over here so if you want to change change how this will

look you can do and invert this and the dance will be inverted like as you can

see but I want them to be to work inside so that's that's much better right

some variation over here then let's go for for the shoe over here all right as

you can remember for the shoe we did some we added some material so let's

first go for the shoe at this area is for the shoe to see which one is which

so you go to edit mode and then you go this one to select and then the

selection will be appears to you so this is the shoe so if I go here and then

press select this the selection will be this part probably I think so this is

this part and this part is until 5 is for the top all right let's just just

you can you can always change the name so let's change it so it is all right so

let's do the material so let's get out of the edit mode and let's go to material

preview and now let's let's save first let's save so we don't lose our work and

then for the shoe we can add just some variation in the color with some

texture and I think checker texture maybe you'll be good so we can test them

test this out so add the color ramp and then let's add this to this and then

color out color the color or maybe first control shift click to see how it will

look so yeah this is kind of checker and then we can choose the material so

I'm gonna go for white a little bit towards gray and then for the black

color we can go for anything we want so maybe maybe black will be better so

let's control shift click on this and then color to color let's see the

results all right I think that's good let's let's add another texture let's

add I think again a Warner texture will be good here and then shift D on the

color ramp distance to the back and then control shift click to see the effect

let's increase the scale so yeah we have these cells I think that's good

enough so let's mix these two it makes RGB put it over here and then color to

here let me close these two so we mix these two together and now let's control

shift click on this one and see the things that we're gonna have okay this

mixing but I think this is put to color 2 and this is color 1 so let's let's see

the screen and see what we get with this the screen blend type not very much for

the wanted color burn maybe all right color burn is doing the trick over here

so this is on top and this is on the bottom and now we can change these ones

over here as well so let's change it like this like this very subtle I want

I want very subtle changes over here so something like this is good so we can

change the color of this one over here to just do something like maybe red so

or maybe something like blue so there are some contrasts all right so

that's good for now so let's go for the other parts let's go for the tongue

maybe and for the tongue I'm gonna just copy the things we made for this one so

I'm just gonna copy these ones control C and then go here and go to the tongue

and then control V and then connect the bump to the normal and then let's wait

for the procedural things we made to be applied and now let's change the color

over here to something like brown right all right so I don't like these lines

over here so let's change the detail over here I think that's what causing

them no all right let's change the distortion yeah distortion so increase

the distortion over here we have some subtle changes here we can go a little

bit higher here so let's go for 0.1 or even higher than that so 0.5 no 0.5 is

too high 0.20.2 is good enough I think let's change the roughness so we don't

want it to be so reflective let's change it to something like 0.55 actually

let's let's change the roughness of these materials as well so let's go here

and change the roughness of the pants to something like this change the roughness

of this one to something like 0.7 all right now they're not too reflective and

this one as well so we want the base shoe maybe to be somewhat reflective like

I think I think 0.6 is enough 0.6 all right so let's go to this one and let's

change the material to see which one so this is affecting this one so let's go

for black here and let's add let's add some textures maybe maybe I can go first

with some gradient texture I want to use different textures so if you're not

familiar with them you can see the effect so let's go here ctrl shift click

this will make some great gradient on the area so we can do something like

this this and we can even add more gradient over here so something like

this all right but for this one I think gradient is not a good option let's

change it to change it to a magic texture

all right so let's increase the scale like this the depth

and the distortion so we get a very pretty much distorted color over here

let's delete this one but click on it and click on this minus now let's go

here and change the color so we want this one to be black and this one to be

white maybe a little bit white no actually I want something like brown so

let's go for brown let's click on this one ctrl shift click color to base color

to see the changes and now as you can see this black color over here all right

let's change this one to white something more like white and then let's

change this one to black let's change this one now to brownish thing like

this all right I don't like how this one looks I don't like this one so let's

just put it over here for later and add another one like we can go for

Musgrave I think maybe so let's click on this and let's see the changes it's

gonna update yeah I think this is the one I'm gonna have so let's change the

scale I want some some dirt like I want some dirt over here so I can do that

with this texture variable so let's go here and let's darken this this color

over here so this one now looks like some dirt on the shoe pretty good I

think the scale is too much maybe maybe the detail maybe this and this one's no

so let's change the value a little bit and let's change the saturation

let's try these as well

hmm not so much as I wanted we can do this though

all right I think that's good enough there are some variances like looks like

some dirt on the shoe I think that's good enough so let's go for the next one

we can just assign this one to this that I'm that we made so let's just do the

same do that let's go to edit mode click on this with L all right now let's go to

this part go here and then go to select and then go to this material and then go

to assign and then this material is assigned to this material as well then we

can delete the foot parts material over here all right so yeah I think that's it

we can also add something for these shoelaces add another material call it

shoelace and then let's let's add something real quick we can also copy

these materials over here this material let's delete this one this masquerade

will be good for the shoelaces as well and paste it over here let's connect them

to the base color and now let's change the scale change the scale something

like this all right and then let's change the color the black color to a

white color maybe or something gray like gray color like that

all right I think that's good enough let's add a simple material for the

eyebrows all right let's go here change the name to eyebrow and then let's

change the material over here all right let's change the roughness of the

eyebrow over here and we're good to go so that's it for this video I think we

made some procedural materials right now let's go to render mode and yeah I think

that's good enough let's also change the material of this one so let's make

it wet the tongue so let's less roughness and let's add a material for

the teeth and call it teeth and then let's

all right let's make it also more less rough so it would add a little bit of

reflection but not too much I think the mid value is good enough and we can join

these two together so ctrl J to join and these two teeth the teeth is one now so

in the next one I want to vertex paint the face on the hand and the eyes you

can also for the eyes do something very simple like you can also go for

something like let me say first because also go for a simple material for the

eyes and then like make a black material with less roughness then you get this

simple eye shape and then you can go and scale it down to get a very simple eye

but I want to show you how to vertex paint an eye so I'm gonna vertex paint the eye

and vertex paint the face in the next video all right so I hope you let me

undo this first so I really hope you enjoyed this video you learned something

in the next video we are going to finish up the coloring of the character so goodbye

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
