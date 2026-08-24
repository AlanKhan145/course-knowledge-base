# 113 — Rigging the Character with Riggify Add-on Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Rigging the Character with Riggify Add-on Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29:28 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Rigging the Character with Riggify Add-on Pt. 2** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- rigging, posing và chuẩn bị character cho animation
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
First of all for this rig what I usually do if I go to solo mode with the slash

this is too much and it gets a lot complicated when going to the reading

process and if you're starting I don't want you to get confused or it

will get complicated so let's just disable some of these options over here

if you press N or go over here to the toolbar over here and go to rig layers

there are some layers that you can disable so for example for the arms I

only need the IKs over here these are the IKs I don't need these ones over

here so let's just disable the FK and let's do the same thing for the leg so

disable the FK of the leg right and we can keep this on so we can with this we

can adjust the knee so let's disable this as well I think we can leave it on

and the torso too this is too much I think yeah the torso we can disable this

one as well so we have a much more simpler brick over here let's go back to

let's get out of the solo mode with person slash again and now we are ready

to parent our object let's select all the objects with a let's select the rig

as an active object over here and then let's press ctrl P and then press with

automatic weight it usually and especially because if you go over here

we have 400,000 vertices I might be even higher because of the subdivision levels

it might take a minute or two so I'm just going to pause the video but I'm

going I'm just gonna do the same thing ctrl a and then ctrl P I'm sorry ctrl P

and then go here with automatic weights and I'm just gonna wait I think it's

gonna be for a minute I think and then I'm gonna resume the video so alright

guys I'm done with with the metric right now so I selected my character and then

selected the metric over here and then ctrl P and then right here ctrl P and

then with automatic weight so immediately I got some problems so I

forgot to tell you one important thing to remember before doing the parenting

is that to on parents objects so if you remember my shoelaces over here were

parented to the shoe over here so I just clicked on them and pressed alt P to

on parent and then I figured now that I'm done with the modeling of these

things I would convert them to mesh and then joined join them together with the

shoe with ctrl J so I selected the shoelace selected the shoe and then

ctrl J to join them all so now the shoe is just one object and now it's easier

to use them in the rigging and then I as I was expecting kind of I got some to

some problem into the in the chest area as you can see here this is the the

metric we had earlier and this bone made some problems for me when I created this

this generated this rig so I tried to edit my original rig which is this one

by just deleting these bones and let me show you I made an armature right here

all right I want you right here and then I figured these bones are making

problems over here these ones so I just deleted them so with X due to the bones

and then I just came over here and then selected selected these bones over here

all right shift T to duplicate them and then P to separate the bones so and then

I got these ones over here brought them to my original rig and then pressed on

this rig and then ctrl J to join them all then I went to edit mode and adjusted

the bones right here on the mesh of my character these three bones over here I

just set them accordingly and made some changes like this made this bone for for

the head this one for these two bones for the neck area and then after it was

finished with the adjustments I just click on this bone and click on this and

then ctrl P and then connect the parent them with keeping offsets all right

that's that's important you need to parents this bone with this one over

here with just keeping the offset and the one more important thing is this is

that this one over here as you can see over here this is the chest one over

here these are in the same location and that is important so blender gave me an

error that these two bones are not in the same location so I went here select

this one and then select then hold shift s and then select cursor to select the

subcursor is right over here and then select this sphere and shift s and then

selection to cursor so now they are on top of each other and then and then I

just went ahead and come over came over here and press on generate rig I took

about I generated the rig and I selected my characters and I did the rig ctrl P

with automatic weight it took about one or two minutes I think to generate it

all right so now that so I showed you the changes I made so I had to make

another rig over here so you may find a problem too in this area exactly and

especially this one over here this is the clavicle bone remember to have it

before I had it like this as you can see I didn't pay attention too much this

one but this also made some problems because these two spheres need to have

some distance and the right angle would be like this so if you go and search

clavicle on the internet you see that the clavicle bone is kind of straight

when you look at it from the front view so keep that in mind and keep the

transform symmetry on and keep them like this and this bone the bone tree is

symmetry keep it behind all right that's all I generated the rig and we

can now hide the metric and use the generated generated rig over here so if

you go to to use the rig we need to go to another mode over here as pose mode

and I talked about this in the fundamentals and now we're on the pose

mode and now if everything is correct now we can select these bones these

shapes over here and one important thing go over here again and choose in front

so you will see the bones as well so do that again for this rig this generated

rig and then while we are in the pose mode we can select any bone we want any

any joints actually any of these bones and then if we click R we can rotate

rotate the mesh and then if we click G we can move the mesh with it and that's

the whole thing about rigging in in general so as you can see the ear is

moving is not moving accordingly like what we want so we get into that so

whenever we are making a whenever I make a make a rig there are some

problems that usually get fixed with these two solutions one whenever I have

a problem like this one I check the weights paints this is solution one and

solution two is to remove armature modifier so this is solution two so

these two solution usually work for me when I encounter these kind of errors

with my riggings alright so let me explain to you what does this weight

paints mean so rigify has made a rig for us with automatic weights paints and

that means if I for example I'm in the pose mode of this of this rig right now

if I select this arm bone over here these arrows and if I press press G to

move as you can see a lot of things are moving right now so this area is moving

and then this area also is moving too so in so blender with the rigify makes some

automatic makes some automatic automatic groups vertex groups over here so if you

select any mesh you have these vertex groups are made in this tab object data

properties these are all the bones that we have with our mesh and these groups

will define which part which part of the metric will affect which part of the

mesh we have so for example if I select the shirt over here and then go to weight

paints as you can see this area is marked as red and green alright and then

here we have red so usually red is red is the full strange so blender will

blend the world try to use the full strange in the red area alright and you

can adjust this with the weight and strange over here so if I decrease the

weight it will be less less with less affection like it has like green

affection if I increase it and then use this then in this red area we are saying

to blender that with this bone over here that we selected so this one over here is

selected upper arm left this is the bone we are we are telling blender that

whenever I'm using this bone upper arm left which is this arrows that we just

talked about affect this area as well so if I go here and then go to pose mode

the shortcut for pose mode is control and top so if I if I hold control if I

click control and tab boy I have my metric selected I go to pose mode so

control tab and then pose mode control tab again back to object mode so I press

control tab again and I'm in pose mode and this point is selected let me do

selected and selected again this one is selected now let's move it and see how

now it is gonna affect the shirt we have now as you can see the area we have just

painted red is moving a lot when we are using this bone all right so let's go

back to object mode yes select our shirt and then control tab and then select

weight paint over here and then to remove these we can go here these are

our brushes so we have like a texture we have brushes or brush we have blur to

blur it out like this and we have averaged averages a lot similar with the

vertex paint and texture painting which we discussed in the fundamentals we have

a smear over here but also we have if you click over here we have some brushes

over here that will have some different some different effects I usually only

use dark and draw and lighten lighten will make a very light effect over here

so if you do this it will make and with 100% weight will make a very red red

red thing but if you press on darken and then reduce the weight to zero it will

try to make everything blue so you will you'll have a very strong effect like

this we can now delete this area right now and then for example here maybe when

I'm using this arrow this bone over here this upper arm left I don't want this

area to be moved as well so if I just with darken brush I just remove these

areas that I don't want to be affected with this part all right so that is the

whole thing about weight pain so you can go over here and if I click here and

then on my keyboard press the up arrow or down arrow can go up and down I can

see now that I can just adjust the bone so shoulder left will adjust these area

of the shirt and then for example upper arm left just this layer and then I can

go here for example and then press on lighten and increase the weight to 100%

and tell blender that I want this area to be red which melt make it the effect

much more stronger in this area in comparison to this area let's undo that

so as you can see you can move up and down with the keyboard and see the

effect you have let's go back to object mode control tab object mode so that is

the whole thing about weight pains and the problem we had with the ears you can

fix it as well so the ears probably is connected to some other things

especially when you have a complex character and for example you have a

lot of accessories and these accessories are really close together like do you

have some accessories like this and they're very close together I mean you

select them all and select the armature and press ctrl P to parent with

automatic weight it might blend there might not know which one of these

accessories belong to which one of these parts so what I do for accessories

I use the second method I told you I remove the armature from these

accessories all right I'm gonna do that for this character as well so let's just

separate the ears over here select the ear with L L will select all the

connected vertices L to this one as well and then select P to separate it

then we have our ears separated and our ears also have all these groups but we

don't need them right now so you can just go here and then select all delete

all groups and then this one is important we don't want the ear now to

be affected by this armature the whole armature so if we go to armature pose

mode and then I select on this I don't want to be affected and because we

removed the vertex groups it actually does that it doesn't affect it but I

wanted to actually remove this as well this is the same thing by removing the

modifier let's go back to show you how it works by removing the armature

modifier it automatically will remove the vertex vertex the vertex groups as

well so if I select my ears while having the vertex group and then if I remove it

all the all those groups are removed and if I go to pose mode now my my ears are

not moving with the armature and now what I can do I can tell blender that I

want this object over here or any accessory over here maybe the teeth and

the tongue too I want this object to be parented to a certain bone in the

armature and then I can have more control so I select my object in this

case the ears and then I select the rig and then ctrl tab to go to pose mode and

then I select the bone I want my object the ear here to be parented to so I

select this one over here this one is the one that moves the head this is the

top one of the armature and then I press ctrl P again to parent and then I if I

press bone the ears will be parented to just this one all right now I expect I

expect that if I move this bone now now all things are correct and now I'm

automatically telling blender that with this bone is with this particular bone

over here to be this particular bone only affect the ear but also if I go to

pose mode and for example if I change this bone because this bone if you go

over here and select the bone we had all right if we go to edit mode these

bones are connected to each other and parented to each other all right so the

metarig the metarig to the generator rig too if I go to pose mode and then I

select other the other bone like the neck bone is also parented to this bone

as well so if I move this one now this one is also moving the ears and that is

exactly what I want and that is the simplicity of this generated metarig

all right so one of the areas I usually change the weight paint also is the is

the shoe so I usually when I change the location of the shoe and the rotation

especially it it does something like this right here all right so what I can

do I can get out of the pose mode select the shoe go to weights paint and then go

to here and then I can just select this and sort by hierarchy maybe or sort

by name and then with the arrow let's find the the one where this group that

effect is affecting the left shoe so let's find that and yeah this is the

sheen but I want the midfoot so let's find the midfoot here it is so these

areas these green areas will not be affected as much as these red areas I

don't want that I wanted to be I want them all to be affected in the same

manner so what I do with 100 say 100 weights with the light and brush I just

light these areas to red and be careful to not affect the other shoe you can do

this as well and then it will make your life difficult because if you

move this bone this part of the shoe will move as well

all right that's good enough let's let's do a little bit more over here as

well and now if I go back to object mode and select the rig and go to pose mode

with control tab now let's move these bone and let's see the changes now as

you can see the rotation is much more smoother and it doesn't just stretch the

mesh aggressively all right and these are the bones you can use for like this

is the torso as I said in the last one you can also enable these ones like to

add more more control but I think this is enough for posing and we can use as I

said R to rotate and G to move around the bone and all that one other thing is

that I usually don't use a single bone like a single bone like this one this is

the arm bone if I rotate it if I move it with G I get this effect this is very

strong and I don't want to set the IKs over here so if you go here to the rig

layers we have IKs for leg and IKs for arm I usually only select the IK to move

around the arm or the leg so this is the IK for the hands for example hand IK

left and then if I press G to move it will move the whole hand with it and

then if I press R it will rotate only the hand over here so by pressing G will

move the whole arm and hand and by pressing R it will rotate the wrist area

and that is what I want. Alright so if you did some changes like for example

this one and then this one and then this for example and then maybe maybe using

this one maybe this this is the IK of the foot so for example you made a mess

right this is a mess this unless you want weird pose like this but this is a

very messy pose but you want to reset the pose to what it was reset the pose

to the T pose you had right so you do that by pressing by clicking on the

whole rig over here or by placing A to press all the ones and then press Alt R

and then Alt G to reset the movements and reset the rotations now we're back

with what we had. Alright so I think that's it with the rigging right now if

you find any problems over here for example I moved this one and as I can

see the the bolt is moving quite good with the torso all right but the buckle

the buckle on the other hand is not maybe we can go to object mode and

select these two and maybe we do let's save first let's remove the modifiers

the armature modifier and then let's select the buckle and select the

armature then go to pose mode with control select the armature as active

object go to pose mode with control tab and then select despawn over here and

then press ctrl first let's go out of the out of the pose mode first you need

to unparent all right so Alt P remember unparent I raised that but always

unparent before doing the the parenting of the armature so Alt P and clear

parent and keep transformation so again press armature go to pose mode select

the bone you want in this case this is the bone I want this object to move

around and then ctrl P and then select one all right now if I select this bone

this is much better for doing the rigging of this character and around

the around the bolt as you can see if you do something so extreme like this

well you will like it can't catch up with this much of rotations all right so

you need to keep that in mind if you want something so exaggerated like this

and it isn't moving like that you go to weight paints again and you need to go

to weight paint of your object and then adjust the weight paints accordingly

all right so I think that's it in the next video we are going to pose the

character and yeah that's it this is a this is all the thing I wanted to show

you in the rigging I usually use these techniques and these these two methods

usually fixes the issues you have by going to weight paints and adjusting the

weight paint of the area or by removing the armature modifier and of a selected

object and then select a bone ctrl P parent that object to a specified bone

so you won't have a problem for accessories this second option is much

more is better for accessories of your character all right that's it in the

next video we are going to pose our character with this rig we just made we

can just delete this old metal rig over here until next video goodbye

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
