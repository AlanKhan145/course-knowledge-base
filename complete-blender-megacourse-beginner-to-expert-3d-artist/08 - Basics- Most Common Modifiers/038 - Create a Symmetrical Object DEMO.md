# 038 — Create a Symmetrical Object DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 08 — Basics: Most Common Modifiers |
| **Bài học** | Create a Symmetrical Object DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 27:53 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Create a Symmetrical Object DEMO** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- modeling, mesh editing và kiểm soát hình học
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

Okay, so now that we've talked about the mirror modifier a little bit, we're just

going to jump in and do a really quick demo on it because I think it will be

easier to understand when you see it in practice. So all I have here is a new

empty blender scene. I just created a new scene and I deleted everything in it.

That is all I did off-camera. So for this we are going to make a humanoid figure

but character modeling is something that takes quite a bit of time. So just

for the purposes of a quick demonstration on the mirror modifier,

we're going to simplify this. So for this demonstration I'm going to make a

gingerbread man. This is great because it's a humanoid form, it is symmetrical

but it is dramatically simplified from an actual character model. So let's jump

in. Now for this I am going to start with a cylinder. So let's just add a

cylinder and I want them to be facing forward so that when I press 1 on the

numpad I'm looking at the front of the gingerbread man. So let's rotate this

around because this is going to be the head. So let's press R, X, and 9, 0. The

scale for this does not matter as such. It's going to be a standalone model so

it doesn't need to be scaled appropriately relative to any other

models. So make it basically whatever size you like. I'm just moving it up

because I like to always treat the the grid lines here as the ground plane. So

let's make this thinner, S, Y, scale it in.

Ok so now we are ready to really get started. This is going to be our starting

point but we want to use a mirror modifier so that we don't have to model

both sides of this. We're just going to model the right side and it's going to

be mirrored over to the left. So let's start by prepping this model a little

bit, or this primitive I should say. Tabbing into edit mode, in vertex select

I'm going to come into perspective so I can see a little bit better what I'm

doing. I'm going to select the one vertex at the very top and the one at the very

bottom that these are the ones that are aligned with this z-axis when we come

into front orthographic. So I want to split this mesh in half basically. So if

I deleted it right now it would delete this whole face which we could fill,

that's a totally valid method, but I'm just going to sort of preemptively

prevent that by splitting this face. We're going to split that again with the

join operation. So just with these two selected just press J on your keyboard

to join them and now our faces are split. We're going to do the same thing on the

back. Select the top one, select the bottom one, J to join. Okay so now we have it

split. Let's press 1 on our numpad to come into front orthographic. Let's move

into wireframe shading either by pressing it up here or doing the Z

shortcut in the radial menu. Let's box select everything on the left side, press

X and delete the vertices. So now we have this prepped to use a mirror modifier.

And if you like you can fix the shading right here. Again I'm having this funny

shading because I have a non-uniform scale so just ctrl A, apply the scale. All

better. Okay so now let us add a mirror modifier to this. So in the properties

editor under the modifier properties, this little wrench, add modifier, mirror. Great. I'm

going to turn on clipping for the moment because I don't want this mesh to be

separated from itself. Okay so if you look at a gingerbread man they don't

really have any real neck to speak of. It just sort of comes around the head

straight into the arms. There's no neck, there's no shoulder. Straight into the arms

which kind of come and form a curve that goes straight into the legs. So let's try

to see how we can make that. So tab into edit mode and we need to extrude out

from some of these bottom faces. And this part is going to be a little bit

trial and error to see how many faces we need to select to get it to be the right

thickness. So with all these faces selected just press E to extrude. And now you'll see that this,

although they're being extruded this way, this face becomes stretched because we

have clipping on. So if it were off, just to demonstrate, you would get this hole

in the mesh which we do not want. So turn clipping on. Extrude. Yeah again there's no

real neck to speak of so we are going to probably extrude the arms from right

here. So just pull it out a little bit and we may need to change the size of some of these

things. And this does not matter as much but if this kind of thing bothers you, you can sort of

even these faces out. It just makes kind of a nicer looking wireframe. And again we're getting

locked to this normal so it's sort of getting wider at the bottom which we don't really want.

So we can hit Z to sort of free extrude and just kind of bring it more straight down.

Now I think I'm gonna move this edge loop down a little bit. I'm just alt-clicking to select all

the way around it. Let's pull out some arms. Now for the arms, although there's no neck on

a gingerbread man and the arms just kind of come straight out of this portion,

I don't really want them to come to such a fine edge right here. So I'm just gonna add one edge

loop going along here to give it a little bit of distance. So we're just gonna press ctrl R,

hover, click, slide it up about where we want it. Again we may need to shift it but no problem. And

click there. So now this edge is just sort of like a retaining edge if you will to keep this

from becoming too sharp of an angle right here. Okay so now we're gonna select this face on the

side. I'm gonna hit E to extrude and bring out just the start of our arms. So now gingerbread

men don't have hands or anything like that to worry about but their arms are much more rounded.

So the way that we round out shapes as we've discussed in previous videos is to add more edges,

more vertices, add more detail, more geometry to that section. So let's add some edge loops. Let's

start with just one. We're gonna hit ctrl R and put an edge loop just here. So now I want to bring

this edge out a little bit to change the profile. That's looking pretty good. So now this is still

quite pointy so the only way we can round out a shape is to add more vertices. So in this case

I'm gonna use bevel to round this out. So I'm gonna first select this edge loop and while you

don't need to select the entire loop to get the silhouette you like, if you select only this edge

and bevel it, it creates triangles here which may or may not be an issue depending on what you're

working on. For something this simplistic it probably would not be an issue but just for

good practice I like to avoid triangles where I can early on in the model and only add them where

it is absolutely necessary because it messes up our things like the ability to select a whole

loop and things like that. So let's just select the whole edge loop by holding alt and clicking

on it and now we're just gonna bevel the whole thing. Now this does add a few more faces here

and if we were doing this for something like a game where we really want our geometry to be

optimized and to be as efficient as possible we probably wouldn't want these extra faces

just because it would slow our computer down without really benefiting us in any way. But

at this stage of the modeling I do think it's worth it to keep my ability to select loops. So

we're just gonna have a few extra faces. So now I want to round out these edges. So these edges

don't have a full loop when you alt click on them it just selects that edge. So this probably will

create some triangles but again we're just trying to minimize the triangles we're not trying to

avoid them altogether. So select those edges and ctrl B to bevel them. So now we have a bit more

of a round shape and you could continue to bevel these edges out just doing the same process and

it would just become progressively smoother. But we're going to just go ahead and move forward

with the leg section. So let's do that. So the legs on a gingerbread men come sort of out at a

pretty wide angle and they don't really have any feet. Again it's just sort of little rounded

stumps like this. So in order to do that we need to select all the bottom faces and put E to

extrude. Now we still have clipping on so we're getting sort of a skirt on this guy which is fine

but we're making a gingerbread man not a gingerbread woman. So we just need to turn clipping off. So

you'll see that you may toggle clipping on and off over the course of modeling something it's not

something that is set in stone it can be toggled on and off dynamically as you model and it will

not affect anything that you have already created. So with clipping off if we extrude now we get the

split that we need here for the legs. And actually this is the kind of sharp angle I was trying to

avoid up here so let's quickly ctrl Z to undo that and add another edge loop right here to sort

of protect us from having such a sharp angle. So now we're not going to select this very middle

piece we're just going to select these ones and E to extrude. So now we just don't have quite a

sharp an angle and you can come up here and adjust it so it's more has more of that rounded that arch

sort of look. So now I believe these legs are a little bit long for if you're thinking about an

actual gingerbread person they have sort of stumpy limbs. So now we just need to change the shape of

this part a little bit to be more rounded as we have it up here so no worries we already know how

to do that. Now we already have quite a number of edge loops on the leg here so I don't think we

need to add any more right away whereas with the arm we just we just had this sort of rectangular

shape we didn't have any of the information in the middle that we needed. So we have this

information now so we just need to move these things really so let's select some of these

edges and just hit G and start moving them. Great it's already looking a lot better and now we can

come in select this edge select this edge because these still form sort of a sharp angle that I

don't like. Control B bevel these out smooth them out okay it looks pretty good and if we put if we

add to our modifier stack here a subdivision surface let's see well we don't have quite

enough information to subdivide this properly so let's actually delete that for now. You can drag

him down so he's more on the ground and right now all I'm doing is just sort of adjusting the ratios

of the arms and legs and things like that just eyeballing it so it's looking pretty good. So we

can add more detail as we like we can in edit mode we can add a sphere and now you'll see that

because I'm in edit mode and I've added the sphere to this object that already has a modifier on it

if I grab this out it will have two spheres now if you have clipping turned on when you do this

it will stretch it so just make sure clipping is turned off if you need to separate these pieces.

So now all I'm going to do is delete this bottom half and I'm just going to fix the shading on this

I'm in edge select mode so we can come up to face and do shade smooth. So now with this still

selected we can hit RX 90 to bring these forward scale them down and place them where we need them.

Again these these spheres are being reflected off of this central point so we can make them

symmetrical but separate without really any issues and we need to bring this forward so

it's on the surface of our mesh. All right and then typically they have like little buttons

right here so to do that we're just going to duplicate these spheres but we are placing

these on the central point so we need to remove half of this sphere first well half of this half

sphere. So let's shift D to duplicate and just move it off to the side so we can work with it

a little bit easier let's go into wireframe view zoom in and box select everything on the left

side press X and delete the vertices grab this G bring it to the center now we can line it up as

close as we can but we're not going to be able to get this perfect so we need to turn clipping

back on so we've turned clipping on but clipping will not affect anything that has already been

placed so we need to just make sure that this line is right on the center so to do that just

alt click to select the loop press G and X and if you cannot drag it at all that means that it is

clipped to the center and should not be any problem anymore okay so we have our button let's make you

know a few of them looks pretty good all right now to add shapes like eyebrows or a smile or

anything like that what we're actually going to do is in this we're going to do this in a separate

object and I think that'll be clear in just a moment and then we're going to merge it afterwards

so given a little bit of thought to this so hopefully it works out shift a let's add another

UV sphere let's rotate it by 90 degrees in the X direction and again it's going to be on the

surface of this mesh so we can delete the back half of it okay and I also want to delete the

left half of it got a little couple verts that I missed no problem let's add a mirror modifier

now to this object so add modifier mirror we're going to turn on clipping so I was thinking a

little bit about how to get sort of a more of a tube shape that still had a rounded edges that

came and met this main part of the body so I think the best way that I want to do this just

scale it down a little bit is tab into edit mode on this separate sphere and with clipping it must

be on for this let's grab everything and drag it out in the X we get a little bit of funky geometry

but let's not worry about that for just right now we can always clean up our points at a later date

so I want to I want to be able to cut loops through this and I think yes if I do this right

now because of this the way this sphere was I will only cut through half now I could cut through half

and cut through half and join them but I think what I'm going to try to do is dissolve those

edges all I did was box select all these edges that were coming to this central point I hit X

and I hit dissolve edges so let's just double check that nothing got messed up by going into

solid mode okay that is about right that's about what I wanted and we can shade it smooth so I

believe now we must connect this point and this point to make this into a loop because right now

this is a single face and as you can see it has many more than four sides and blender will not

recognize a loop if there are not exactly four sides so let's select this point and this point

and press J to join them so now we have this face that is has many sides which we call an end gone

but we also have this quad so I believe yes now if I press ctrl R I can add a loop all the way

through we can straighten this out it's forming to this angle blender will always try to form

your edge loops to match the angles in your geometry but we can straighten this out to match

this one very easily all we have to do is hit S X and 0 all right so now if we slide this over so

now we've created this sort of straightened isolated section of loops so now if we add more

they will be straight okay so what I want to do now is give this a curve so I'm just going to

select this center loop by alt-clicking let's try this with proportional editing so turn the

proportional editing icon or press O on your keyboard press G and press Z and scroll your

influence wheel until you get something that is roughly the curve you want okay so now we can

scale this a little bit more we can place it and let's move it back so it's on the surface of our

mesh great so now these pieces are all one piece when I select it and I tab into edit mode I can

edit these spheres or these half spheres and as well as this body shape I've created so we want

to join this to this but if we do this currently you'll see an error occurs because this piece has

a mirror modifier and this piece has a mirror modifier but they're being mirrored differently

so if we join a piece that is not being modified to a piece with a mirror modifier it will

automatically add the mirror modifier well it's not really adding it but this piece will then be

reflected but we want this whole piece to be reflected so all we have to do is just apply

this modifier before we add it now even though both of these pieces have a mirror modifier instead of

creating you know a mirror modifier stack where there would be two here it thinks that these

things are are being mirrored the same way so it kind of merges the mirror modifier so all we have

to do is apply this so let's come into the modifier stack on with this eyebrow object selected click

the drop down and click apply again you can also do this by hovering your cursor over here and just

pressing ctrl and a so now it's applied so when we tab into edit mode this is one single piece

so now if I select this eyebrow select the rest of the of the gingerbread man and hit ctrl J to

join it now you'll see it automatically just adds this piece to this section with the mirror modifier

and mirrors it nicely so we're gonna do a similar process for the mouth we just won't need to apply

the mirror modifier beforehand because we're only going to make half of it so same process in object

mode we're creating a separate object shift a add a sphere let's rotate it in the X by 90 degrees

fix the shading if you like we're in right orthographic I'm just box selecting and deleting

the back half and in front orthographic box selecting and deleting the left half so now

I'm just left with this quarter of a sphere all right let's add our mirror modifier again this

is the exact same process we went over with the eyebrows turn on clipping you can grab it we can

scale it and let's fix these edge loops just select these funky ones dissolve them not delete them I

mean you can delete them and then fill the hole that it will create but we'll just dissolve them

a couple more steps select these edges and close them off to formal edge loop or a face loop I

should say here add this we can flatten this out on the X by heading S X 0 oh and you'll see I have

proportional editing still turned on so it warped the end here so just turn that off S X 0 grab X

slide it over and now we can add a couple more loops and we can start turn proportional adding

back on G Z and we can try to form roughly the curve that we want again we're not spending a

ton of time showing this demonstration you can you know it's a little finicky and you can sort

of adjust it however you like you know maybe rotate this so this becomes a little less squished

something like that

let's move it up scale it

down to its appropriate scale

g y put it on the surface

all right and also you can add the little you know they usually have like

some little icing details right here which you can add using the exact same method that we did

for these ones and just uh moving the the edge loops around but that is going to more or less

wrap it up for this demo actually one more thing i want to do i'm just going to select all the

edges that make up this this sort of contoured edge and i'm doing this with the shortest path

a combination of alt and clicking to select loops and then ctrl clicking and shift clicking

to just to get the selection i want so you've shift clicked on this twice to make this my

active selection so now if i hit control i can just walk this selection all the way down

and now that i have this whole edge corner selected i can hit ctrl b and i can bevel it

just to smooth it out a little bit so there you have it that is the practical use case for the

mirror modifier um in the next few videos we're going to go over a few more of the basic modifiers

in blender before we wrap up the section on modifiers so i will see you in the next video


