# 128 — Remesh and How to Combine it with Multires Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 24 — Character Creation: Fundamentals of Sculpting in Blender |
| **Bài học** | Remesh and How to Combine it with Multires Modifier |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 28m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Remesh and How to Combine it with Multires Modifier** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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

Alright now let's get into the next workflow. The last one is remeshing. So

what does it mean? If I go over here I have voxel size, I have adaptivity and

all these options and a remesh button. So it means that Blender, if I enable

wireframe, Blender is gonna make all, I mean it's gonna remesh, it's gonna make

the whole geometry of the object and it's gonna remesh it based on the voxel

size that we set over here. Okay so if I go over here and set a higher

amount is I'm gonna get less resolution with my object. If I set it to a lower

amount I'm gonna have more resolution. So lower amount of voxel size means more

resolution, higher amount means less resolution. But I don't know how

much resolution I should add. So there are two ways to do that. The first one is

going to remesh and there is an eyedropper over here. So with this we can

get a sample of how much this voxel size is. If I click on here now

Blender is showing me like 0.13 is the voxel size of my mesh right now, base

mesh of Suzanne. So if we go here and increase this number I expect that the

geometry would be like with less resolution. If I now go here and click

on remesh, Blender is gonna calculate and remesh the object with this voxel size

that I have set. So if I click on here as you can see now we have a much bigger

voxel size with less resolution. If I do that, if I again click on here click on

here and I have this amount of voxel size and if I decrease it like to

something like this then click on remesh now as you can see I have more

resolution in my object. If I decrease it further to something like this I'm

gonna get this. If I decrease it even more, not too high, not too low, something like

this. If I click on remesh it's gonna give me a very high resolution object

like this. Alright if I disable the wireframe and if I try to smooth it you

can see that this mesh has such a high resolution. Alright so that's the whole

thing about remeshing. It allows us to set a voxel size and remesh it based on

that voxel size. So what's the good of this method is that we can always start

from a low resolution like this. If I go here and press on remesh I'm getting

this. Then I can move around my object like this and I can sculpt the low

details like the primary shapes like this and then when I'm deciding I want

more geometry I can go here, lower the voxel size, remesh again, I have more

geometry. I can go now add more details and then if I decide I need more

geometry I can go here again, lower the voxel size, remesh, lower, remesh, lower,

remesh, lower, remesh. So the whole workflow of remeshing is to start from the

highest when you're sculpting. Alright never start with the low

amounts of voxel size. Start with the highest that you can like for example if

I go here I might add these and then I'll use the eyedropper and then use the

remeshing and then I get these amounts of geometry. Then I work with this. I

start my sculpting with this and then go to remeshing, decrease it a little bit,

remeshing, work with it again, decrease it again, remesh it. Now I can have much

more detail. Then decrease it again, remesh it and this all happens while

doing the sculpt. So in the process of sculpting I do the remeshing.

Alright so from the highest point to the lowest point while we are sculpting. So we

also have some shortcuts for the remeshing that are very useful and one

is shift R and the other one is R. So R is for remesh and shift R is for setting

the amount of voxel size, setting the voxel size. So if I press shift R now I

get this square over here then I can visually see the voxel size. So if I set

it to this voxel size and then I press, I'm sorry the shortcut is ctrl R and

then if I press ctrl R it's gonna do the remeshing. So this option as you can

see the shortcut if you hover your mouth the shortcut is ctrl R and for voxel

size the shortcut is shift R. So this way I can quickly even not use this remesh

tab which you can find also over here. I can quickly set my remesh, ctrl R, doing

sculpts, set my remesh. I mean choosing the voxel size, shift R, then ctrl R to

remesh, do more sculpts, shift R, set lower resolution, ctrl R, do more sculpting,

shift R, less voxel size, ctrl R to remesh and then I can do that. I can see

the more resolution you're gonna get, I mean the less voxel size is gonna give

you more resolution and that makes it hard for Blender to calculate. So you

don't go too low for voxel size. So if I go like something like this, like this

alright the lowest amount which Blender isn't even letting me do it. Alright so

this amount is very low and I'm sure it's gonna crash my Blender, crash Blender

because Blender can't handle this amount of geometry. This is a lot of the

geometry, like it's gonna make millions of geometry this voxel size. So be

careful how much voxel size you're adding. I found it that using the shift R

because you always see the scale of the of the squares, it's always better to do

the setting the voxel size because here if you do this and then you go like this

you're actually setting amounts like this and if you hit on remesh, Blender is

gonna crash. So you can always, if you want to see how much voxel you have, use

this and then it's gonna show you the amount or use shift R for the same

thing and the number is gonna be shown at the center also. So this is my

favorite workflow when it's starting to do sculpting. So if like

I'm starting with a simple sphere, then if I go and enable symmetry, I do

something like this, something like this. Alright, I press M, I did this,

ctrl R, then G, then bring this down. Now I'm making a neck, then alt M, then I go

here and as you can see now the mesh is a stretched. So if I go to wireframe, the

mesh now is a stretched. So one of the things that's that's gonna that's gonna

tell you when to remesh is when the mesh is a stretched. So you don't have to

enable the wireframe to see it. So if you go here we can clearly see that the

mesh is a stretched. So if I use G for grab and go to grab it more, you can see

that the mesh is stretching anymore. So this is telling me that I need to remesh.

So I go to remesh, I go to sampler, click on it and then use remesh or use ctrl R

to remesh. So I'm gonna press ctrl R and now my mesh is remesh and as you can

see now I don't have those, there's a stretched line. So if I go here and I want to

make a snake hook right here and do this at some point because I have the same

element of like quads in my mesh, it's gonna get stretched. So I'm gonna press

ctrl R again but now at some point now I see that I am not having enough

resolution. So this is the point that I go press on shift R and decrease the

voxel size to something like this to have more resolution ctrl R to remesh.

And now I have more resolution now I can make much more things over here.

Right so that's it that is the workflow whenever you are having problems and

your mesh is getting the stretch just press ctrl R and if you're if you see

that you don't have like edges, you don't have enough resolution, shift R and

decrease the resolution and ctrl R again to have more resolution. And then with

this method as you can see you can quickly make shapes like now we can

quickly go and make a face right here, do this, go here and make some make some

quick face with low resolution and that is the important that you need to start

with low resolution because I can't do at the end like this with higher

resolution. That's the best thing of remeshing because the workflow is

like you have to start with low resolution and then go your way up to

higher resolution. So I go here make the nose and I can change the jaw over here

something like this and use clear strips and make the lips maybe here.

Alright now as you can see I need geometry to add details and I can go

here and decrease the voxel size ctrl R and when there is gonna ctrl R

somebody is gonna calculate and give me more geometry. Now I can do things like

this right. So there's the whole thing about remeshing. The other thing that

you can use remeshing is when you try to

merge objects. So one of the problems that you have with Dynatopo is that if

you want to merge things for example you are using Dynatopo and this mesh with

relative with this pixel and you're doing this thing. As a reminder

Dynatopo is gonna add geometry to you when you're using your stroke.

Then at some point you want to join an object to this. So for example I want to

join a monkey to my sphere like this. The one thing you do is you select

the monkey, select your object and then ctrl J. Now these are one object.

The thing is if you zoom in as you can see we have geometry inside our

object and we don't want that. So when you're using Dynatopo you can

use the simple ctrl J or you have to use a modifier called boolean. With boolean

you need to select your object, select the goal object and then

boolean it inside and I'm not gonna go into that area but you can try out this

as well when you're using the Dynatopo and you want to merge object you have to

use boolean. With boolean it has problems it is not gonna be perfect and it's gonna

make problems definitely so keep that in mind. But the beauty of remeshing is that

Blender is gonna try to remesh the whole object around it. So if I go

here and click on my monkey and click on this object over here and ctrl J to

join them and now they are one object. As you can see if I go inside now it is

also I have geometry inside so I don't want that. You never want the geometry

that is not gonna be seen. All the geometry should be always outside

so inside is no. So if I go to sculpt mode and then I go to remesh and then I

click on this and click on this now I'm gonna tell Blender that I want the whole

object to be remeshed based on this voxel size. So if I click on remesh now

watch what happens. So this monkey also has been changed to have the same

resolution so the whole object have the same resolution but the beauty is that

if you go inside now the inside has also been changed like these two now have been

joined beautifully. Like very good they've been joined together awesome and

then we can go and maybe a smooth this and as you can see it works. Like these

two meshes has been joined together very easy and that is pretty good. So for

example maybe you want to work on parts of the body that you're

sculpting in different objects. So for example here you want to

make an ear right here and you're sculpting it making changes to your ear

and all that. Alright so something like this maybe. You're making things to your

ear like making changes to your ear and doing maybe this. Alright something simple I'm

not gonna go too far with this. But you have an ear you works on and you

worked on it separately because you don't want to mess

your object. So if these two were joined and you're working on this area then it's

gonna affect this area as well. So you don't want to go into other workflows

like masking and faces and all that. You want to work on objects separately and

the body also. So you want to add a body separately, work on your body separately

alright and all that. So after you're done with sculpting the different body

parts what you're gonna do you're gonna press on your objects join them together

and now they are joined and then to remove the geometry inside you just have

to go to sculpt mode and use remeshing with the same box size. Click on remesh

and now these two objects are joined perfectly. So as you can see we have it

even a dance over here so we don't have double geometry. Then you can press

shift to smooth. Now we have these two objects merged each other beautifully.

And that is why I like to work with remesh only. I rarely use dynatopo.

Dynatopo is only like when I sit and I want to make a quick sketch. That's the only

time I use it. Remeshing it gives you a lot of freedom to do quick changes to

your mesh. Like I can do this and then ctrl R and remesh. That is very quick,

very good and very effective. And I can work on body parts, other body parts

differently like this and then when I'm happy I can just join them. Go to sculpt mode

and press on remesh and just remesh them all. And then go here and smooth it.

It's so easy right? So that's the whole workflow I use for making characters

with remesh. But the downside is that you can go too low with this box size.

So as I explained this is too low. Alright and blender is gonna crash and you can't use

it. You can't use it for a sculpting. I'm telling you. You can't use this on a

sculpting if you go too low on resolution. This is only the remeshing only for the

first stage of sculpt. So now that I have explained all the workflows. So you

have multi-resolution, you have dynamo and you have remesh. My preferred and many

preferred workflow for making characters is combining remeshing and multi-res. So

you do that by first like using remeshing on your object. Then do your

sculpt and all that. And when your sculpting is done like you made the main

shapes. Then you go and as you can see if I enable the wireframe. We do not

have a wireframe that is gonna be perfect for animation or production.

So this wireframe as you can see over here. These are not good for animation

work. And even if you use decimate and use unsubdivide over here. It's gonna

make some problems definitely as you can see here. So we can't use this in

production. What we have to do we have to retopologize this. Alright and

retopology. I'm going to retopologize my character in the next part when we made

our character. But this is the only reason that you need to retopologize. So

we start retopologizing by adding a plane and then doing like making let me

choose this first like replicating the shape of our object in a much lower

resolution. And then for example imagine now we have a much lower resolution

lower than this. For example if I go to remesh and press on remesh I can get a

lower resolution. Also we have another option in Blender which is called quad

remeshing. So if I press ctrl alt R I get this option for quad remeshing. So

this quad remeshing is an automatic remesher that is gonna calculate your

object and give you a quad based object as best as it can. You can set the number

of faces. For example if I set the number to 5,000 I'm gonna get around 5,000

not the exact number but around 5,000 faces. So if I press OK now Blender is

gonna calculate the object 40% or 50%. It's gonna give me a much less

resolution object. Alright so what the problem is is that this tool in Blender

it's gonna it has been the same like for years now. It's not good. The bottom line

is that it is not a good remesher. There are a lot of good remeshers out there

that you can use but this isn't a good remesher and I don't suggest that you

use it at all. The option is there but don't use it at all. As you can see the

geometry over here, here we have holes and that is not good at all. That is not

good. Like in this area it's good but then in this area it couldn't

calculate how to make the shape. It gives us something like this which is

not good. Alright so for demonstration I want to have a much less resolution. I

want to show you how to combine this now with multi-resolution so you use

remesh to make these objects and then I'm gonna duplicate it with shift D to

have this object. Alright and then I'm gonna hide my original object and this

is my duplicated object and I'm gonna retopo it. Alright to make a lower

resolution or I'm gonna use an automatic remesh tool like this one and disable

mesh symmetry because it is gonna make a mess.

I'm gonna wait for Blender to do the retopology. So the whole

process is to again sculpt with the remeshing and then retopo or use

automatic retopology tools to make a lower versions of your mesh. Now I get

this mesh with the quad remesher. Ctrl-Alt-R and now what you do

is that if I add a multi-resolution and use subdivide, it's gonna subdivide my

mesh right. So it's gonna subdivide my mesh into a higher resolution objects.

Then I'm gonna add another modifier called shrinkwrap and change the wrap

method to project. Enable the negative and then I'm gonna set my target to my

original mesh. So what is the point of this shrinkwrap? With this shrinkwrap I'm

gonna tell Blender to like look at it that this object that we made that we

duplicated and remeshed it is gonna steal like steal the details of the

object that we're gonna choose. But the object that we're gonna choose must have

the same scale and the same like it should be the same in the same silhouette

in the same form shape. Alright so now these two are in the same form as you

can see this is our original mesh with where you sculpted it in with remesher.

This is with we remeshed it with quad remesher and then use multi-res and now we

have shrinkwrap and if I choose my target to my original object over here.

Now something happens if I hide my original object over here a sphere without

the number. Now as you can see this is the object we have. So if you don't see

it is mostly because we don't have a lot of details but if I move it or

actually if I apply this shrinkwrap so I'm gonna apply this shrinkwrap just for

demonstration or actually let's just duplicate this. Alright so I duplicated

the original mesh so this is the mesh with multi-resolution and this is the

mesh we have with the remesher we sculpted. So this is the sculpted with

higher resolution and this is with lower resolution and as you can see it there

is no difference between them like little difference. We always get some

problems like over here but we can easily fix them like with smoothing. But

this is the whole workflow the combination between the remeshing and

multi-resolution. So the first stage is to use remesh and sculpt. The second

phase of our sculpting is to retopo or auto remesh and the goal is to get

a shape with less topology. Alright so the goal of retopology in the second

phase is to get a shape with less topology like we did over here with this

one. And then the third phase is to add modifiers. The modifiers we added were

multi-res and the shrinkwrap. So with shrinkwrap we are gonna still we're

gonna steal like we're gonna get the details from the main ship which is this

one and we're gonna wrap it around our low geometry objects and with the help

of multi-resolution we're gonna store that resolution inside this multi-

resolution. So if I enable this shrinkwrap right now. Now I have the all

these details stored inside this multi-resolution. So if I decrease this

multi-resolution to zero you can see we get the detail we had with like

quad remesher. This is the base quad remesher result and if I increase it we

get the details that we got with the shrinkwrap. That is the whole workflow we

have so this is very important this is what I'm gonna use and what I use in all

my sculpts. And in this way in the end result is gonna give you a very

beautiful shape, higher resolution like model. Because with multi-resolution we can

always go higher subdivide and for example with subdivide once more I can

always have my level viewport to something like 2 and my render to 4. So

I'm gonna have a higher resolution in my render and that is really really helpful

for our modeling and rendering and even for our rigging and animation. So that's

it for this video and I hope you enjoyed it. Alright until the next video goodbye.


