# 102 — Body

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Body |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 23:02 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Body** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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

all right hello again let's continue where we left off in this video we are

going to make the body of this character so first of all let me delete this

ground or actually move it to the bottom over here and then what I want to do as

you can see here we have a lot of cubes over here alright so I want to first do

some this will clean up so make some collections I want to add these lights

first to a light collection so I press M new collection and let's type in lights

alright and now because I'm in viewport shading I don't need I don't need the

light so I'm just gonna select on these ones to exclude and then I don't have

them in my scene so I have a very more clean scene then I have these cubes over

here so I'm going to select them with box selection and make sure that they

are all selected and then press M and make a new collection and type in face

so I have a I have now a collection face that I can hide or unhide all the

elements of course I can join them with ctrl J all right but because still I

want the modifiers so maybe I change some things later on I want them

separated for now but if your computer can't handle it you can just join them

with ctrl J and have one object but you won't have the modifiers then so now

let's make the body let's move it up I mean the front view with number one

let's move it to the front with GZ let's move it to the up upward to the Z axis

in this location with GZ and then let's make the body so as I've said in the

last video I want to show you a new method so make a cube first and then go

to tab view tab go tab to go to edit menu and then here so like the word is

called vertex selection and as I showed you in the previous video press M to

join the vertices and select on at center this will give us one vertices to

work with but in this one I'm going to show you another modifier called skin

modifier so you will add a skin for our modifier so we just delete our cube too

so we could get a much bigger cube I guess so no now if we add a subdivision

surface modifier watch what happens we'll get we'll get a UV sphere right

but like the cube which we use subdivision modifier to move around and

to control our mesh better we can do this as well with just one vertices so

just let's just scale it up like this control a scale let's scale it up we're

gonna set the scale when we apply the modifiers so let's go to front view with

number one on numpad and then let's go to edit mode and now if I extrude this

like this it will make an extrusion like I have two points right now these two

points and I can manipulate them as like how I want so let's move in the Z axis

then let's make some more vertices like this but for vertices if you want to

change the scale of the vertex you need to use ctrl a or else if I press ctrl a

I can change the scale of this one vertices and this is very important and

there is something called in the skin as mark root so if I choose this one I want

to have the start point as my root so I go I choose my vertices I go here and

select on my root which is this red circle over here so now this vertex is

as my root so let's bring it up like this let's make another vertices and do

something like this right okay this is oh our snap tool is all on so be careful

all right so let's move this vertices over here so I have a very straight line

all right and now let's make the hands so the arms and the hands so to do that

let's let me change the location of this one and then select these two vertices

right click and subdivide to make more vertices all right I'm going to do one

more all right and then I think around this area is the right is good area to

add the arm so let's press E and watch what let's see what happens so E X and

then we have these distorted mesh all right it's because the mesh we extruded

is very big like this is very big for the arm so we need to scale it down with

ctrl a so let's press ctrl a and scale it down then let's move it closer to

this part let me disable the x-ray okay if we scale it down like this maybe

all right let's delete this vertices and I think we have too much vertices over

here so let's delete them over here or dissolve vertices over here and then

let's just make one vertices move it down a little bit and let's press on

extrude, extrude out, ctrl a, let's move it a little bit toward here and

now we're good to go so I moved it toward the where the arms starts like

here all right let's move it here as well all right I think it's a good start

right now so we can adjust this like that and then let's extrude so let's

extrude one more time like this move it a little bit closer to this, scale it

down another extrusion we can change the scale later so let's just make the

vertices for now one, two, three vertices and then one vertices for the palm of

the hand something like this all right now we have the arm we can we will

change the scale later on all right but for now we want to block out the shape

right now so we have this shape right now let's press 7 on the numpad to go to

the top view if I change the x-ray you can see so to see the vertices let's go

to x-ray with Alt Z then I have this one vertices over here and let's make the

fingers right so let's first make one vertices over here and then let's

extrude five vertices like five vertices over here to make the fingers so this is

one as you can see it is too big so ctrl-a to scale it down here as well

ctrl-a to scale it down and then let's make another one so these ones must be

for the knuckles so this is the knuckle of the hand something like this so let's

move it here and then another extrusion over here for the knuckle ctrl-a

another extrusion over here ctrl-a

let's move it a little bit over here and this one a little bit over here one more

extrusion for this finger ctrl-a and the last one here ctrl-a now let's select

all these vertices of the finger and scale them a little bit to see what we

get all right and now let's extrude them with E and then change the location of

each vertices accordingly

now let's play around with the scaling and see what we get

all right this is now let's change the scaling of different part of the hand

so this part is the forearm must be a little bit like this let's scale it down

like this over here this is the elbow part and arm part which can be more

prominent right so something like this so again we're going to sometimes

something stylize all right but I think the hand is too big right now so let's

select all these vertices and then let's select these vertices and then move

them GX or we can select them all I think GX to move them always a bit GX

again and all right let's change the tom over here

you need to be careful to not get distortions because when you apply the

skin we will get a very bad geometry so we don't want that so if I increase the

subdivision level you can see how it will look and we can adjust this even more

this finger for example

I want this to be actually flat we can bend them when we go into the rigging so

we don't need to even bend them right now

all right now let's go back to the body over here let's not forget to save

so yes let's go back to the body and let's go here let's add another

vertices over here something like this then let's move them down like this

all right so I want this arm to be over here as well so let's add mirror modifier

I want mirror modifier to be applied as a first modifier all right so we get

this geometry if I enable the clipping over here in mirror modifier and then go

to edit mode and then select all with A and then let's press G and let's press X

and see if we can get a very much more better result when we're mirroring

all right I think this is good the good thing is we can still adjust these

vertices and get the result that we want so if you want something like this we

can get that I think the the body is too big so let's scale it down with S and

now it's better right so let's go to the leg part let's shift right click over

here and go to mesh shift A to make a mesh and then go to meshes and make a

cylinder and then let's go to front view with number one on the numpad let's

press S Z to scale this up like this and then we can smooth it

and then let's make a loop over here all right then let's go to front view

and let's box select these let's go to the face selection and then let's box

select these ones so the the back part isn't selected and then let's press E to

extrude along the Y axis or the Z local axis this is the Z local axis to make a

block out of the feet we are going to make a shoe for this character so we

don't need this part of the foot like the foot over here but we're gonna do it

anyways so we can just just for our observation let's mirror it select the

mirror object for our body to mirror it and then let's bring up this ground

plane that we made let's actually add a solidify modifier for this plane all

right and then let's add a subdivision

to have a ground like this so but the bottom of the character it's not

important if a portion of the feet is inside the ground all right but it's it

shouldn't be like this like character can't be on this space if you looked it

looking like this so always adjust that even a part of the feet is inside the

ground it doesn't matter all right now we have this body you have the leg and

okay so let me see what other changes we can do let's go to edit mode vertex

selection and then let's make him a little bit fat over here something

around like this by pressing ctrl-a all right and let's move the legs like this

the legs are really long so I'm gonna scale them down and then shift right

click to move the 3d cursor and select on my ground and shift s selection the

cursor but let's actually press on the ground set origin to geometry and now

let's see no it seems the only moves it like moves like to that location so all

right okay now we have the legs we have the body we have the arms we have the

hand and yeah so let's do some more adjustments over here

okay let's add this to a new collection and name it body all right now let's go

to the render view let's see how it is gonna be in the rendering let's turn on

the lights over here and for the lights let's actually change the Sun color to

something like this okay so let's see we're here yeah I think we're good for

now for this video the next one I am going to make some clothes for this

character and see some see how we can make those clothes and all that all

right until next with you goodbye


