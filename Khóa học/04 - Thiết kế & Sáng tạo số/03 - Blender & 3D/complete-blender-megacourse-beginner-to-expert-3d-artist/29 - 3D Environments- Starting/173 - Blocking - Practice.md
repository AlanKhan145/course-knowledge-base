# 173 — Blocking

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 29 — 3D Environments: Starting |
| **Bài học** | Blocking |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 30:43 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Blocking** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- environment art, asset assembly và scene organization

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

Now that we set up our Blender interface and we have a thumbnail or composition

to work with we can now start blocking the scene and blocking is essentially

doing thumbnails in 3D but it's only but of course it's limited to the position

of objects you position them at so that's why I recommend doing thumbnails

in 2D before sketching thumbnails before going into blocking the scene in 3D

so I'll just start by a plane a simple plane and I always use a human scale to

the average human just for reference so that I do not I do not mess up the scale

while while doing the scene and as you can see okay that's the scale of a human

so this means that this plane is large and so on in our thumbnail we had some

satellites so that's a sphere let's bring that down to 32 I don't I don't

need so so much geometry here what I'm looking for is just having a geometry

that I could I could work with okay now I'll isolate this object from from the

rest of the viewport to do that you'll hit the backslash to isolate your

object from the scene another way to do this is hitting shift H but this is

going to hide everything and if the geometry in the hidden stuff is is is

intense or big you you'll have you'll face problems while hiding and I

you will face problems when hiding and unhiding these objects so what what I

will do is alt H to unhide everything hidden and then go into isolated view

again you can see it here at the bottom you see me you see what I'm clicking

right here the backslash and then in in edit mode I will just delete half of

this of this sphere so that we can have a dome sort of maybe you could scale it

up a bit like this so it's it's more of a satellite and I don't need anything

more than that like this is good enough what I needed it for just to just to see

it compared to to a human scale you'll see me here activating the vertex snap

this is so that when I when I hit ctrl I'm now turning on momentarily turning

on the snap option let's send and let's turn this back to medium point so of

course these settings here are our default so whenever I move this and then

look for the corner of the plane I now have it snap at now we we won't be

using references here I'm just blocking the scene just you know in reference to

the human body a big satellite would would usually look like that so let's

rotate it up a bit it's it would be a good it would be a good step if we add a

camera here so that we can see what we're actually doing so I'll be

clicking shift a and then move down to camera and add a camera and by default

any object you spawn is going to spawn right at the 3d cursor you can hit shift

right click to change the position of anything you're trying to spawn and so

if I add in a cube it's going to be added right at the 3d cursor to to set

it back I'm going to hold shift s just have we learned about it cursor to

world origin I'm just going to leave it there you know I don't need the cube for

now so yeah now that I have a camera I can now position the camera where I

would likely have like it's sort of position like we will go into details

about positioning the camera and the camera settings and I will hit with the

camera selected I will hit alt ctrl 0 now in under item I will just make sure

that it doesn't have any rotations in the Z you'll you'll less likely have to

rotate any camera and the y-axis let's let's leave everything just like that

and lock the Y so that when I when I am rotating the camera the Y remains the

same of course unless you like determine otherwise by by just changing the number

here but as long as it's locked whenever you rotate the your object the Y will

will remain zero quickly here we'll just add in some composition guides so the

the the thirds just as we learned maybe maybe add triangle B or just leave it

triangle A for now and maybe I want to bring this a little down a little bit

rotate this rotate it

add in a cube

and then move it up snap it to the ground change the position of the origin

so that we're not detailing anything I'm just I'm just determining the position

of the object just you can hit the icon here to go into the camera just click

zero and it's going to go to the activated camera

now of course this is this isn't how satellite looks like but we will be

refining that later on maybe even like delete the whole object and start all

over I'm going to hit ctrl J to combine both objects and then we will

continue on detailing our scene

I'm going to separate this back again just so that I could scale it up

let's let's delete this for now ctrl X to bring the origin a little bit closer

and now when I hit alt D I'm now instancing this object and you'll see

what I mean by that now so if I instance an object of course you can

manipulate that object by itself but whenever you go into edit mode you're

editing both objects at the same time so say I'm extruding this face or maybe

even deleting certain faces you'll now end up with both objects having the same

like basic geometry in edit mode so this this is going to help us when when

we're trying to have certain repetitions in a scene and we don't need to

manipulate every single object all by the same time and in the case that you

okay well I'm done with all objects and I want to separate one of these objects

what I'm going to do is under the object data properties I'm going to hit this

number and this number displays okay how it tells you how many objects are

instanced so essentially now we have four so the selected object whenever you

click on it now that object is unique from the other objects but again even

instanced object you could like manipulate them outside the edit mode of

course and you'll retain the geometry or the shape of other objects as well

another useful tip for for instance things that say that okay I'm I want to

add something or actually change what I added so say instead of these satellites

I want buildings so what I will do is have in this cube roughly around that

object scale it a bit and in an edit mode I'll just join both objects so

CTRL J is going to appear in all instanced objects. We separated this object

we made it unique and okay well these are not buildings simply we will be

going into edit mode and hitting L and that's to select each object in the scene

so say that you combined multiple objects in one objects whenever you

hover over that object and hit L is going to select that object another way

to separate is that by selecting all of them and P and then by by loose parts

and that loose part is the cube of course but we we actually want to

separate the satellite or actually delete it so I hit L hit X apply menu

appears delete faces now we have these buildings and of course I can manipulate

all of them now since they are the instanced object

let's go back before we do that that's why you have an 80 undo steps it's

actually way better so in the camera we go back again maybe we have our character

here looking that

by the way if you move objects away from the camera and they start to disappear

one thing to do is that you select your camera under the camera settings in clip

start and end of course this is where where your camera starts to pick up

objects and this is where it ends and by default it's 1000 for the camera and

500 for the viewport but 1000 for the viewport as well so you can just

increase this to say like you're liking it doesn't really matter like it doesn't

decrease anything or decrease anything so I'll just increase it a bit so that

whenever I move an object further away from the camera I still have some space

to work with there now let's have some variations another good way to model

while in the camera view is that you could actually have a different small

screen here you know and it's it's a viewport but you know I'm looking at the

top of the of the screen and now whenever I move an object here I have I

have another view of it from the other side

move it down a bit maybe one is straight up destroyed what I what I did here is I

hit alt G to reset the location and alt R to reset the rotation and I'll just

start rotating it down maybe and it's like

it's actually sinking at the ground you know because it's destroyed keep on

distancing object I'm just blocking the scene here like I'm not doing

anything doing anything crazy

okay now we can maybe add mountains in the background so under under edit and

preferences you will find an add-on called landscapes ANT landscapes and

this you have this by default in Blender like you don't have to download anything

you just have to activate it and that's it and it will show up to the to the

side here if you don't have that menu just click N to show it up and then

under landscape you just click landscape and that will give you some crazy

looking landscapes of course you have a lot of settings to play with so before

have this go away just just determine your actual settings so that you get to

you to have it looking good you have a lot of options here that actually looks

good and we don't need any any challenge like you don't have to subdivide it any

much more but just in the case you you want it you want it have some more

geometry you can subdivide it from here as well as like have it subdivided from

the modifiers but we will not be using that for now so I'll be let's go back to

the camera increase that up a bit

we'll go into details about the about the landscape add-on I just want to have

the scene blocked and ready for for detailing and such actually let's have

this viewport under under this under these settings you can have you can

change your your object color by object so of course you need to switch to matte

flat then random so that each object has like its own color and I could I could

tell the mountain from the satellites from here let's have the cavity turned

on so that I could see things a bit yeah that's better so at cap random and

I have the cavity turned on you can of course like tune it to your liking I'll

just keep that default I just want to see my my objects maybe instance this so

instance to the X and you can run away with having the same geometry in your

scene just just by rotating and scaling things up a bit let's make this closer

I'm now looking at the general composition of the scene like this isn't

really good this relation is pretty much cool just move this into Y just to hide

anything the bottom now now it's looking now now it's starting to look

like yeah I'm having some story here to tell since we're only blocking the scene

I can just maybe subdivide this a bit and do this by clicking shift R I'll do

it multiple times then maybe I'll select a few vertices here and there and with

the proportional editing I just hit O for short just activate this settings

then by scrolling I'm increasing I'm increasing the the effect radius for the

proportional editing as you can see now we we have a little bit more interesting

ground than before it's it's more obvious here in the edit mode that's

already looking very good we will be just throwing some lighting some it's

actually manipulated a little bit more have maybe this point go up just

blocking the scene here you know what we learned when doing composition can move

this guy up a bit and now maybe move it in the X here it doesn't have to be at

the exact intersection of the guidelines but it's just to guide you in while

blocking the scene I can bring this a little bit in the Y axis but I have it

is hovering back again it's a process of like doing basic graphics in in 3d so

say like okay I don't really need my object to be I don't I don't need my

object of interest to be like at that spot I need it to be the opposite spot

so all you can do is just have another camera and then with this camera make

sure it's the activated camera then hold ctrl 0 and now it's it's it's here

move to the X axis a bit to the bottom make sure we don't have any rotation in

the Y and lock that axis I have to set 90 and then the height of the camera is

very important so it really determines like what what type of camera using is

it like a bird flying in the sky or is it like a normal person height view

maybe you're looking from a building or something it's very important as

going to affect affect our focal length and we'll get into that in details when

we when we talk about the camera settings so let's have this at the other

side then rotate it until like I get my object of interest at the other side

essentially so what I did here is that I had GZ and the first first time I

determined the axis is going to determine the local axis but when I hit

Z again sorry the global axis but when I hit Z again it's now going to be in

global mode so let me scale that down a bit distance it maybe to the back you

know adding some depth to the scene and now we have her objects of interest at

the other side now of course I need to activate thirds maybe be this time yes

and these are like perfectly labeled like you get to see the center the

golden ratio and the harmony and we of course need need harmony for sure and

centers you can use the golden ratios but like I I personally don't now it's

also an instance or old guy here bring him closer to the camera okay now now we

we need to bring the camera down a bit just so that we are close to the to the

ground you can see that the height of it is five meters up it's and that's like

the grid is the grid 0 and the z-axis and this is like the height of 5 meters

high you can switch it to the height of like an average person and that's like

the high of an average person but usually when it's a third-person camera

you need to have your camera a little bit higher than your object so this

camera is just fine we now have our character here looking at what could be

the story it could be further back actually be better if it is so it's on

the satellite so we're looking at the satellite and we have this destroyed

object there so we'll be adding some complexity to to all of these objects

but in general what you're doing here is that you're blocking the scene you don't

need any much details and the the the bumps we did there with proportional

editing is actually is actually looking quite good let's add one more mountain

maybe actually have a different looking landscape so create landscape and in the

settings let's zoom into that hit dot in a numpad as you see at the bottom of the

screen and then let's let's have this change a bit

I'm just looking at something that looks good I'm just you know as soon as I see

myself like giving it too much time I just just okay I'll go with that it's

only for reference I don't need any details anyway so let's scale that up a

bit now we have something to work with here if I need this bump at the other

side one way to do this is of course to mirror it and then delete the other side

another fast way is to just scale it with a negative factor to the other side

so it's it's here I want to flip it so S for scaling X and then minus one and

then it's it's going to be flipped so S X minus one and now it's it's just

flipped I just needed the the height of the bump on the other side now don't

also shy away from rotating it above the ground like it's no one is going to

see what's what's happening at the bottom so raise it up and now you can

just have the mountain even rotated from the ground and you know it's it's even a

different mountain it's like a different asset now we're having all

these objects guiding us as to where we we could put our like details and such

and of course by by adding in some complexity to this spot we will be

making it the focal of the eye yeah start start on blocking your scene based

on your thumbnails and in the next video we'll be talking a little bit about

texturing and such so you can you can have your time preparing your your your

own blocking if you want to follow along that's that's fine just remember that

you go step by step don't overdo it if you're if you're starting and just

learning of course you can take your time blocking your scene learning about

the different add-ons we use today simply the landscape it's it's very

beautiful and we will dive into detail about these this this add-on because it

doesn't of course end there like you can go even after setting up the the

landscape into changing the settings and the look of each of these mountains and

since we instanced as you remember we instanced these these mountains whenever

we edit one of these it's going to edit all the others now look at that so yeah

thank you for tuning in see you soon

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
