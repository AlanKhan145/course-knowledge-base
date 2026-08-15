# 111 — Vertex Painting the Face

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Vertex Painting the Face |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 32:07 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Vertex Painting the Face** trong pipeline của section.
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

Hello everyone! So in this video we are going to vertex paint the face but

first we need to do some adjustments. I wanted to introduce to you

a new modifier that you may find useful in your own projects. So as

you can see you want to vertex paint this face over here but we also need to

first join all the areas join these areas as well to the face but let's go

to the shading menu and if I go to edit mode as you can see the geometry of the

ear and the nose and the face the base geometry before applying the subdivision

level is too much different so I want to fix that so to do that let's separate

them again so if you remember we joined them so let's separate them again with

pressing L in the face selection and L on the other ear and L on the

nose and let's separate them by loose parts. Blender is gonna separate

them now so we have a separated nose and separated ears okay so first let's

actually join these two ears because we want to apply the same modifier so to do

that let's first delete the subdivision modifier that they inherited from the

face let's delete the subdivision modifier for both and then let's join

these two let's delete this one as well and now we are ready to join these two

ears so let's press ctrl J to join them and now they are joined so now we what I

wanted to show you is to go to modifiers and click on decimates so remember this

geometry is too high for us we want a pretty similar geometry like we don't

want too much difference because after applying the subdivision level is gonna

be too high in this area and we don't want that so let's go to modifiers and

we can do we can reduce the geometry by decimate so here under collapse it will

make the geometry very let's say triangular so if I decrease this as you

can see the geometry will be triangular but let's go to I'm interested in this

area because as you remember we made this mesh with with a simple with a

simple with a simple cylinder so and then subdivided it so we have a very

quad mesh we can unsubdivide it with this menu over here so I have 30,000

faces so if I do one unsubdivide I get this result but I'm not interested in

this shape so this geometry is not very good for me it is made a result in bad

edges so I want a very like something like this very straight lines like this

these are what I'm interested in all right so one subdivision level not very

good two subdivision level as you can see now this is what I want so let's do

three now three subdivision level this is not what I want or let's go for four

and now this is what I want so if I go increase it a little bit more as you can

see this geometry gets a lot less a lot less resolution but I think six

subdivision level may work so let's duplicate it for just see how it works

so if I so from 30,000 faces we reached 576 faces so if we apply this and then

after joining with the face with the face we want three subdivision levels

let's add again three subdivision levels and let's see how our ears looks as you

can see not much of a difference all right so we can go with six subdivision

six decimation on subdivision so six on subdivision on subdivide and then click

on apply so now let's go to the nose and do the same thing so decimate on

subdivide let's see the wireframe and now let's do so we have 384 faces let's

do one iteration not very good in the geometry to the iteration though that

looks very good 96 geometry so that's what I'm after let's play apply and then

now let's again join these loose parts with the face or here with ctrl J now

these parts as well inherited subdivision level over here that we can

apply later on alright let's disable the wireframe I want to also I want to

also join the eyelids with the face so let's check out the geometry and let's

see if we can make subdivision level a little bit less so if you go here and do

one subdivision so I think we have to move it up here alright and go out of

edit mode and now if you enable wireframe we can see each iteration what

they do so no I think we can't decrease the geometry but we can do because these

areas are not necessary for us but we may want to move them later so let's

just keep them this geometry works well I think yeah they're gonna be higher in

this area the geometry after applying subdivision level but I think that's the

safest safest way to do it so let's disable the wireframe of this eyelids

now let's click on this and then let's actually apply this and then let's click

on this and this and ctrl J to join them and they they too inherited subdivision

level but as you can see we have a problem over here so by applying

subdivision level it did some some harsh it did make this over here to be let's

say distorted the edges so let's undo that and see we can if we can fix it so

let's go here and then let's add a loop cut over here and let's see but adding

loop cuts we can save these edges from being too smooth out by this of the

original let's join them again and as you can see now it's much better so

compared with this one over here it's much better so you can add one more

subdivision level as well too so let's undo this and then let's actually go

here and delete these ones so we can alright it didn't lead the whole thing

so let's press L and then L again and then delete them so then we're gonna do

another mirror modifier let's add another edge to here to protect the

edges over here from being smooth out too much and now I think we're ready so

let's add the mud mirror modifier object mirror to the face why the mirror

modifier join them with the face ctrl J and now as you can see we have nice

edges over here all right we could also could also to have a better age so this

is this is all about this is all about

adjusting and all right let's let's also go to edge selection select this edge

and ctrl P bevel let's see how this bevel will help us to add a very round

shape over here so let's add this bevel over here and then let's add a bevel

over here as well so two bevels I'm gonna add two bevels to get a very round

shape over here and now let's apply the mirror modifier and you know the drill

so the face ctrl J and now let's see how it looks so I think now looks kind of

better like it's rounded around these edges over here so yeah it's definitely

looks better so let's go to material let's see yeah it looks better to me I'm

gonna keep it like this so we added some loops over here and if you go to edit

mode we add some loops we can presumably delete these edges because we added

bevels so go to X and dissolve edges to dissolve these edges and yeah we're good

to go so now this is a whole face without the eyes and eyebrows all right

let's go and ctrl A scale and then we want to have the hands to the face as

well so we can we can do one one vertex panes so let's do the same thing with

decimation over here for the hands and see how much we can decrease the

resolution so as you can see I'm happy with this much resolution and even this

one works too so if I apply this and then if I try to add another subdivision

surface I'll get the same amounts of resolution over here so let's keep that

this is pretty low and I like it so let's save let's click on the hand click

on the other face and then ctrl J to join them with the face and now these

hands inherited also the subdivision level of the face right and this looks

kind of good and now we are ready to go to to the vertex plane but before I

apply this subdivision level I want to make a duplicate so I made a duplicate

right-click to get it back to the location and then M to change the

collection and then let's move it to back up so I have it in the back of as

well if I need it well if I need it later on so press ctrl a again a scale

and have a good scale and then let's go to the vertex planes and then now we're

in the vertex plane but as we talked about in this last video as well if you

paint here first we need more geometry so make sure to apply the subdivision

level avoiding the level 3 and let's see what we get over here if we change it

to the brush maximum strength and we get this result so first of all let's go to

edit mode this geometry may not be pretty not may not be good for what we're

gonna do so let's go let's let's test again so always go with the lowest

geometry and tested against no I think I think it's gonna be fine I think it's

gonna be fine tree tree subdivision was gonna be fine don't go too high so if

you go too high every every everything with will be multiplied by 4 so some

sometimes just one subdivision level will make the geometry so much and you

don't want so again if you paint over here and go to the render view you don't

see your vertex plane to see your vertex plane all right go to the shading go to

the material of your objects press shift a search vertex paint search vertex

color and then select your vertex color that the that one there makes for you

and join these two then go to layout again and let's start vertex painting so

first of all let's vertex paint this area as you remember from the last video

to fill with one color you need to press shift K let's change the color so we can

find a good skin color press shift K and this is too saturated so bring down the

saturation just get again and this kind of good but you need to go to the

material preview the shading preview material preview are a little bit

different as you can see over here and let's see over here if we change it

yeah that's the situation a little more situation maybe works better for this

character why the hands aren't changing colors oh because they have different

materials as you remember we added a different material for the hand so we

need a same material for the hands yeah so delete all the other materials you

have so do it of this one and delete let's let's see what is the selection

here so let's go to here select yeah this is a selection so let's delete this

one as well so we have only one material over here so now we're good to

go and let's go to where to spend and now the material should be the same as

you can see so if you go to render more as you can see there is a little bit

difference between the material preview on the render mode I think the reason is

the light so if we go to the light let's go to object mode and then let's select

the light and yeah no light is fine I think I thought the light is in

different color if you saw a lot of changes between the color of material

preview here we have little changes so we're good we're good to paint in the

material preview but if you see a lot of changes check the color of your lights

for example if I change the color of the aerial light over here to something

like this now in the material preview it's like this but if you go to render

preview now you can see that the light is affecting how our character looks

right so be careful that this the light would be in the white the light color

would be white so now let's start the vertex painting of this character the

face and the hats so I think this is good let's increase the saturation a

little bit yeah let's increase it a little bit more so I'm holding shift and

dragging to more precise like more precise we can do it like this and this

is too high so I'm gonna go for C 68 I think or a little bit down 1666 now

let's go to the mature to the renderer

let's decrease it actually to 6464 looks fine all right now that we have

the skin material we need to make some areas of the face more red so skin is

consisted of the skin color or which can be this color or it can be black or it

can be yellow and then some red colors and then some brown colors we don't need

brown colors for a silo as characters but if you're making something more

realistic you can use brown as well so I'm gonna go with with this what I've

read and if I do this it's too much so I want something subtle let's go to a

stroke and change it to space maybe no that's worst change it to dots all right

let's decrease this range nope nope I think the airbrush is the one to go so

let's change it to airbrush again and yeah the airbrush will give us a nice

effect like this now let's change it to screen and see what we get this is too

wide I send it to multiply and multiply maybe be the thing we want so let's

change this range down too much because we're using multiply then let's do

something like this all right let's go back I want to show you let's go to

shading and shading as you can see this is too different than the material

preview let's go here to flat so this will show you the flat color of our

character if you color over here we can see how much we are changing the color

all right this will the flat color color over here will show us much better how

much we are changing the colors of our characters so if you do something like

this this will be something more subtle so let's go to here now as you can see

this is a very subtle redness on the cheek area and we can go for blur and blur

it out but yeah I think this is way too low so let's increase the range and do

it again and I have X symmetry on over here if you wonder if you wonder why

it's color on the both so X symmetry on so by coloring this area this way will

be colored as well so let's do something like this let's actually do

go to more and then we can blur it like this to make it more much better to make

it much better all right let's do the same thing with

the lips or the mouth area we don't have a leap but something like here with the

mouth area I'm okay with that and let's blur the edges over here that's fine if

you don't see the changes you go to again to here and the flat area and now

you can see how this area is different so let's go back here and then do the

same on the tip of the nose over here so something like this don't blur it out

let's actually let's actually use the smear then bring it up a little bit

like something subtle so it will be so little because flat you can see how it

will look so let's to smear over here to not make it too perfect all right we can

do the same for the eyelids so let's do the same for these areas of eyelids so

let's do this this and then let's blur it by the way I'm not using I'm not

using any any color palette over here it's because vertex paint I usually do

vertex paint when I don't care about animating it because you can't animate

this character right now you know this is too much geometry with this area too

much geometry with this area you can't do some animations some some really like

little frames like 20 frames but you can't animate this because of the high

resolution so if you want to animate your character you need to go to the

texture to the texturing of this character and you need to UV unwrap and

all those things so we're gonna texture the character we're gonna make in the

next part so I wanted to just show you how to use vertex painting as well so

just for one shot you can use vertex painting to paint not much a difference

except that in texture painting we have masks which are very useful all right I

think that's good I was blurring this area I think so let's blur them a little

bit more let's blur these let's go to the flat and you can see the changes

over here and I want to make the ears a little bit red so let's press slash to

make it to make it solo then let's make it a little bit more red so the edges I

want the edges to be a little bit red and the inside a little bit red and then

blur out especially the inside I don't want it to be too much then blur out the

edges of these parts all right okay so let's also make the inside of the mouth

little bit red so let's do this this and this I don't want it to be perfect I

don't want it to be too like one color we can go for some spraying so we don't

need to have it too perfect if I go to out of local mode let's see what we get

look at these patches in the inside the mouth

and then we can use the average to make it more as one as one color so really

subtle not so much it's kind of smoothing the color all right let's give

some emphasize around the mouth over here let's blur it out okay that's cool

that's cool I think that's good enough now let's go let's go to the hand area

for the hand area let's actually look at your hand as you can see you have some

redness around the knuckle area so around these area we have some neck

redness and this one is this part of the tongue then let's blur it out to make it

smooth and more as one with the color of the hand let's go to the render view to

see better subtle yeah I like it everything needs to be subtle not too

much now I think that's enough for the hand nothing too much about hands anyway

and let's go around the character if we can add anything else we can also you

know we have three areas for a character the forehead area is usually colored as

yellow around the cheeks are colored as red and around the mouth over here is

a little bit of gray so let's try out that one and let's make some red over

here some yellow over here and to give some variation in the colors if you go

to a flat color this area a little bit of yellow so this is much yellow color

this has much yellow color than the other areas and then let's smooth them

out with the blur like this we have some subtle variation in the forehead

all right very subtle like red color and yellow colors over there and then if you

want I don't think I want it but let's experiment right let's make some gray

over this area or this area so some gray color some gray grayish dark color

around this area all right so we have some color variation all over the face

and it doesn't look so flat like one color and variation gives the character

much more interesting look

all right let's go and see we have yeah we have something much more interesting

over here yeah some more variation

all right you can go and do some

vertices printing for the hair I'm gonna just leave it as it is simple stuff like

it so simple some spheres that does the job let's go to object mode and see what

we have right now and oh my god he doesn't have one shoe and what happened

to our shoelaces so good thing is we did a save another save so we can just append

that one so I'm gonna do do that after the recording and I'll just mirror it or

duplicate it over here so no worries so he's just with one foot like yeah

variation right right variation the character just one foot so let's see how

what we have over here with this and let's change the color I want the color

to be different but we go into the rendering if you're done with the

character we'll go with with the lighting and the rendering in the next

video all right so I hope you liked this video you learned something and until

next video goodbye


