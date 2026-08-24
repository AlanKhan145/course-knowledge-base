# 107 — Material Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Material Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29:23 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Material Pt. 1** trong pipeline của section.
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


Hello in this video we are going to give some material and some color to our

character so we model our character and then we model some clothes and then we

finish off with making a shoe all right so before giving some material and making

some material let's do some final adjustments so for example I don't like

the nose over here so let's just let's just delete that and then use this cube

we made here with the subdivision level and let's try to make him more

stylized more simple nose so nothing fancy all right so let's go to edit mode

select the face and then G X let's turn off the proportional editing all right

then let's position it wherever you want so let's select this face G Y and then

maybe let's rotate it in the x-axis all right now let's increase the subdivision

level to something like 3 is enough I think and then let's smooth it

right click shader smooth now let's go and move these vertices a little bit

toward the x-axis or actually y-axis so toward the y-axis then move them inside

a little bit too then it's too round so let's select these edges and then scale

scale them in the x-axis let's look around see what we have make some

changes over here maybe all right I think I like this one a lot better now

very simple stylized nose then let's go to the shoe and I want to first disable

the mirroring for all of these then let's do some more adjustments over here

some final adjustments and then we are going to convert them to mesh this

vertices I think it's not necessary

let's actually undo that and get that vertex vertex back it made some really

sharp edges over here

all right let's make some some changes over here let's move these two vertices

a little bit inside

all right this one is too high so let's bring it down with GZ

I just rotated this one the end part is not is distorted over here but we don't

care because it's gonna be seen so let's move these two down right like this now

let's move these three down with GZ and then let's rotate them with ctrl T and

then move them up a little bit let's move this one down as well this one down

over here and then rotate with ctrl T

all right I think that's more cleaner now I can do some more adjustments here

as well but this one is let's rotate it with ctrl T and bring this one a little

bit down this one as well so

all right so let's take a look at the character pan around go around your

character and see if you see and look for flaws maybe look for something that

you can change for example I think the ears here can go with a bit toward

inside like this that's too much so all right so we can change a little bit of

these eyebrows okay alright

let's move this one down a lot a bit

let's go to edit mode this is one cube right let's make a loop over here and

then let's bring the teeth in the middle down so it will make it careful like this

all right we can scale it a little bit so scale it in the Z axis and then bring

it up okay let's shave this move this part and shave this move this part

and the bolt looks good all right I think we're ready to start material we

can always go back and adjust things but at some point you need to stop and say

okay that's that looks good to me and go to the next step right so all right now

what I'm gonna do I'm gonna first save this control s and then I'm gonna make

another safe fall because I want to convert these curves over here and over

here to mesh and then to apply all these all these modifiers so once I want

to say I want to add a safe order so to do that ctrl shift s and this window

will be up and then press on this plus button or here okay this plus button to

make number in front of your samples and then save us all right and this is now a

new safe file and we can always if we do some mistakes go back and append over

here our other object from the other safe file okay now let's get into the

converting converting these curves to do that select them all and I think that's

it right that's all the curves we have then go to objects and converts or

right-click and convert to convert to mesh and now if you go to edit mode you

can see we have this nice mesh over here and over here these are the measures we

have and then we can go to we can select these

shoelaces and then select the one we want to join them and then ctrl J to

join them also now these these shoelaces are joined and then let's set

origin to geometry and then add a mirror modifier and mirror it mirror it in the

body I think yeah so it would be mirrored toward the other shoe and we

can keep this mirror for now so let's go and convert to this one and now let's

start joining these areas over here so we have this one with subdivision level 2

let's see our subdivision level 2, subdivision level 3, I think level 3 is good enough we

don't have to apply for the hair for now so let's just leave it as it is for the

eyebrow as well we don't have to apply it all right we can just do this to have

a more organized so more organized modifiers this is our eye right here

this is our nose so we can we can join the ears and the nose to the face right

now okay so let's do that if you want to make adjustments to the ear we should do

that right now so I think that's good enough so if we maybe rotate it in the

x-axis or the y-axis all right I think it's good enough for now all right this

is a solid character let's select the ears let's select the nose and let's

select the face and then ctrl J to join them all and now this is one object okay

I did a mistake I have to first apply this mirror modifier so let's move it up

like this and apply the subdivisions as well so let's see which subdivision level

is good for us I think subdivision level 2 is enough but we can go with 3 as well

so let's go with 3 let's apply the mirror modifier apply the subdivision

modifier and now the ears are here and then we can go to the nose as well

apply the nose the 3 I think is enough yeah 3 is enough let's apply it

select the ears select the nose select the face and ctrl J and then this face

is connected all right now that is connected we can use the whole face for

coloring and all that we can also join this body over here we don't have a

modifier for the body if you go to edit mode we can see that we have this

geometry but as you can see this part of the body cannot be seen so if I go to

X-ray mode you can see that this part is not going to be seen so this is just

this is just unnecessary geometry that can slow down our computer so we can go

to front view and then go to the edit mode and then alt Z to enable the X-ray

mode and then let's box select these areas that we don't need so this area

maybe some symmetry on yeah these areas I think let's see yeah these areas we

can just delete them with X and vertices so we just deleted those areas that we

don't need and we will help us with a better and a smoother viewport right now

what we can do is to select select the hands select the face and then join

these two as well so first yeah let's select the hands select the face and

join these two with ctrl J it will apply it will also apply a subdivision

modifier for the hands maybe that's not what we want so let's undo that first

all right so just undo that and let's let's do this part of joining these parts

for the last one so let's apply the mirror modifier for this one the all

the modifiers for this one so first the mirror modifier then solidify then

subdivision so let's see if the subdivision level is too high maybe we

can go lower than this

so I think at least four is needed for this part so let's select any and to

apply all the modifiers let's see with only rims no well to apply all the

modifiers you just have to hold ctrl a and then visual geometry to mesh all

right now all the modifiers of this part is applied then we can go here and

delete this one as well we don't need it so go ahead and press X and delete

you can delete every object every mesh that you cannot see in the scene so all

right now I think we're ready first let's apply these one as well we can

keep them because we probably won't be doing anything so fancy about these ones

so let's just keep the modifiers applying them will make or make it make

it more hard to go around the viewport at all so let's just keep them and then

so we have this and then we can have this one as well so I'm aiming to I'm

actually aiming to use both material and vertex painting in this part alright so

in the next part then I can go to texture painting and show you the

texture painting so I'm gonna do some parts with just material and procedural

materials and then the face for example and the hand we can go with vertex

painting and I as well maybe so so then we don't have to apply the modifiers for

this one so let's just go back and then get the modifiers of this area back so

let's go back all right now we have the modifiers of this part back and then we

can delete this one again so we can minimize them like this so I want to

apply a modifier or apply a material procedural material over here a

procedural material over here so we can own we can have them in the modifier tab

all right we don't have to apply them but for vertex painting we have to apply

the subdivision a little bit because unfortunately Blender can't you can't

vertex paint in Blender with the subdivision level in some other softwares

you can do that and I hope they add this feature to just add subdivision level and

it starts painting so then let's check the other parts all right I think we're

good so let's minimize the modifiers for the shoes as well and all right let's

start with the materials over here so let's go to shading let's save first

let's go to shading and then we are in the shading in the material viewport

menu so this is the principal material, principal BSDF we have I want to make

some procedural material for these coats over here so let's first go to

white then I want to make some textures so let's go to textures let's go to I

think Voronoi will be good for us and then let's add a color round let's add

distance to FAC and then let's hold ctrl shift click to see the

effect of this Voronoi texture then we can adjust this Voronoi texture like this

I want to scale it up to make some cells like this so these are some cells

all right then we can go ahead and change the material over here so let's

make a blue shirt now let's make the color of the dot to something like maybe

maybe some maybe some yellow all right and then let's scale it up even more

like something like even I can go to 1000 and yeah I think it's good

all right now to see the effect on the whole material ctrl shift click on the

principal BSDF to apply it and then connect the color to base color and

then Blender is going to calculate the changes and this is what we get all

right so we can also make another texture over here so make and let's make

an annotation like a noise texture and then let's make a new color ramp with

black and white and then connect these two together and then ctrl shift click

on this one to see how this will be this will look so let's change the scale here

and change the detail randomization distortion maybe no I don't like the

distortion so let's reset it to default value let's change these values over

here as well all right and now what we can do is to add mix RGB so let's search

for mix RGB let's put it over here so this is color 1 and then let's connect

these two to color 2 and now this is mixed all right to see that let's go and

click on this ctrl shift click on this and let's see what we get so we get this

shape over here so this is a mix between the noise texture and the warner texture

we can change the color of this over here so let's change the color here and

see what we get so I want blue and then this is mixing these two textures we can

also go here to the blending type and go to add and see what we get all right

let's go to multiply okay multiply is too much I think let's go to screen and

see hmm the screen is giving some cool effects so let's change this color and

change it to something like green maybe all right now let's increase this a scale

and increase this one as well

we can change the values over here so I want some subtle changes on the shirt I

don't want it to be too much all right and then the saturation of this color

over here is too much for me so let's just bring down the value a little bit

and then bring down the saturation here

all right let's play around with the noise texture now let's bring down the

saturation of this color over here as well okay let's go to render and see

what it looks like in render as you can see there are some textures over here so

all right for now I'm happy with these things but I want to add another texture

here for the bump and for the normal so do that let's add another texture once

maybe I think a moss grave will be good here so let's add another color ramp

here to see the changes let's connect these two and control shift T over here

and this is gonna add this type of effect so let's change the scale I want

something too high so like like this and then change the detail over here all

right then go shift a again and search for bump vector say this is a bump

vector and then connect the color around to the bump vector and connect the bump

to the normal over here all right it's gonna calculate when there's gonna

calculate and make some bumps over these white areas and then if I click shift

click shift on this this is gonna be the color and this is gonna be the bump node

over here so as you can see there are some bumps on the texture so if you go

to material view and let's increase the light over here all right this is clearly

too much so we can go here and decrease the strength to something like 0.5 let's

go for 0.1 and we have to connect this color to the height so so we can see the

effect you have to connect the color to height so it wasn't affecting the

surface very much so now we can see how it affects the surface over here and

this is too much so I'm gonna go for very subtle like 0 very subtle 0 or 1

maybe that's gonna be yeah I think can go a little bit higher so 0 or 0.3

all right I think that's fine for now let's change this point light to an

aerial light and go here and then ctrl T or shift T sorry to change the direction

let's scale it up and let's increase the power to something like 100 let's change

the color let's change it to 1,000 and we have more light over here to see the

changes it's very subtle not very much but it adds variation to your clothes all right

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
