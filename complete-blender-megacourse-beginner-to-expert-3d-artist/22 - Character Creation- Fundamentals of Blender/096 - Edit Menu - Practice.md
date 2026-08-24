# 096 — Edit Menu

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 22 — Character Creation: Fundamentals of Blender |
| **Bài học** | Edit Menu |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 24:06 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Edit Menu** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- quy trình thực hành được giới thiệu trong bài học

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


hello again in this video we are going to have a look at edit menu right over

here we have edit mode and I'm going to show you what the most important tools

over here does and how you can use them for modeling so if I do this cube and

make another cube like this and then hit tab to go to edit mode now you're in

edit mode the first thing you need to know is these options over here so the

first one is vertex select the second one is edge select and the last one is

face select so if I click on either of them you will have the you can only

select what this option allows you to select so this option allows you to

select vertices and this option allows you to select edges and

this option will allows you to select faces so now we're in face selection and

then these are faces if I select this one I can select this select these other

faces as well if I go to edge select I can select edges if I go to vertex

select I can select vertices all right if I select all of them by holding shift

and selecting I can select all of them like all vertices edges and faces but

what are vertices and faces and edges and all that so if I go here let me

disable the floor and the access look over here as you can see we have a cube

over here so in modeling in blender we have vertex this kind of dot shape we

have a vertex all right then when this vertex joins it another vertex it makes

an edge and then we when these edges become three edges or more and they

connect to each other like 3d vertices connect to each other this will make a

face so we have a face a triangular face these kind of faces and these kind of

faces and these are called different so let me show you these are called

triangular faces these are called quads and when you have more than four

vertices in your face and not in your face but in the face of your objects of

this space then this is called angles the triangular is also called trees so

these are called trees quad and angles so we have three types of faces all right

and these options allows you to select them so if I select vertex I can select

this vertex and move it around if I select edge I can select edges and move

it around if I select face I can select faces and move around which in this case

is a quad because as you can see we have one two three four which makes a quad

all right so what what is the meaning of these so should be make trees quad or

angles so the first thing you need to know is that you always have to aim to

make quads all right you always have to aim to your object to have quads and let

me explain to you why there are a couple of reasons why you need to make quads

but the most important reason is because of something called loop cuts all right

so if I go to front view, loop cut is this option over here and shortcut for loop

cut is ctrl R so you either go here and select loop cut over here or like me you

hold ctrl and R and make loop cuts so what loop cuts does is that as a name

implies it makes a cut into your mesh so if I hold ctrl R it makes a cut based on

this line that is showing that a yellow line all right so if I hover my mouse

over here it makes the line over here this loop over here if I hover my mouse

over here it makes the loop over here and I can I can choose how many cuts I

want so if I use my mouse wheel and like go up like this it will increase the

loops and if I like use my mouse wheel to decrease it like this I can use my

mouse wheel to decrease and increase my loop cuts so you if I select this one

like I have three loop cuts and then I click it's still not confirmed it goes

into this orange edges all right and then I can choose where to place my loop

cuts if I want my loop cuts to get back to the original position to get back to

the center I click on right click I do I right click and then it goes back to

the center then I have to adjust last operation setting here which you can

adjust how many loop cuts again in this menu and you can also smooth it out okay

so I have these loop cuts and then again let's make another loops over here so

ctrl R mouse wheel to increase the number of loop cuts select choose the

location and then let's click again to confirm I have these loop cuts right now

so how these loop cuts let me first delete these annotations over here okay

how this look us find the direction is based on these quads so if I press

ctrl R the loop will be if we find this the direction based on where I hover my

mouse so if find the direction over here then goes all the way over here and then

goes all the way down here all right and that's how the cut will be made but if

I make a triangular face over here like this and this go to face and triangular

face and now I have made a triangular face so one two three it is a triangular

or trees face and now if I try to make a loop cut like here or here the loop will

find its way over here it goes up and then based on my vertices like it says

there is a vertice here and there is a vertices over here so it goes straight

but then when it comes to these trees then it does it doesn't know where to go

so we're just going to go to this vertices over here or vertices over here

so it just stops and the loop ends like that so it also finds its way over here

but when it comes to this triangular over here it can't find its way and it's

also the same for angles all right so let's try out and ctrl R to make the

loop cut and as you can see the cut can't find its way through these

trees if I click and then confirm the loop is all around my object because all of these are

quads but right here when I have when I have trees the cut is not made

and I need to know that my mesh can be at any time I want to be to have loop

loop that I can make loop cuts anytime I want so for example anytime in my modeling like I want to

manipulate this mesh these loop cuts are very useful so you can ctrl R right here and then

increase the amounts of loop cuts confirm then confirm the location of the loop cuts

and then I have all these made these vertices that I made with loop cuts that I can use for

adjustment so if I press a scale s I can scale them like that all right if I press e I can extrude

them like that okay and if I press g I can move them like that I can manipulate very easily and

use them in my advantage but as I don't have triangular faces over here I can't make face

here that I can use it because you can see this face this loop is very distorted because of these

two two traces compared to here over here that I can make clean loops to use so that is the reason

we always use quad instead of angles and trees another reason is that if I make a

Icosphere which I showed you in the last video is considered of consisted of

traces right now as you can see and compare it to a UV sphere which is

which includes only quads over here and now let's smooth them both right right click

shader smooth and then here right click and shader smooth as you can see the mesh is not

good like it's not smooth as this one like these are jagged edges over here and these triangular

faces are actually we can see them over here so it's not very good even if we subdivide it

all right if we subdivide it right here subdivide and do subdivision

when we subdivision it makes things even worse than that so we usually don't want

quads as I don't want trees or angles in our mesh because of these reasons and

for example if you in the video game game characters are trees are made of trees because

of the game engines then after finishing modeling you can go to face triangular faces

and make a triangular face of your model after modeling so you're done with with the modeling so

you don't want to make any loops a loop like this then you just triangle your face your mesh to

use it in a game engine but for modeling we always use quads all right that's it

you can choose your selection with here as I said or the shortcuts one two three on your

keyboard so one is for vertex selection two is for edge selection and three is for

face selection all right that is loop cut right now

then we have something called extrude which I have shown you in previous videos

if I choose this face over here and if I press e I can extrude this face or if I go here and

select this one it gives me this plus icon that I can use to extrude another face right so

the shortcut for extrude

is e very easy extrude e and so the idea is to not use any of these icons so you have your

selection boss to select vertices select faces and all that and then you just do the shortcut

like e to extrude and it automatically snaps to the to the axis so right here it snaps to the

z-axis so if I press z it will ignore the z-axis and then I can move

my mesh my face that I've just created freely all right so another thing is

that's all about extrude you can also extrude on the edges all right so extruding edges will be

like this or extrude on the vertices so you can extrude vertices like that and yeah so

the next thing is insets and the shortcut for insets can you guess what is it yeah it's i

shortcut for inset is i if I go to face selection and select this face

and then press i it'll make this window like a window thing for me but the good thing about

inset is that it always makes quads so out of a quad we press i and it makes another quad inside

my quad like makes these uh four edges for me these four edges one two three four to make another

quad face inside and then I can do some crazy shapes like I can do this then I can scale it with

s I can rotate it like this can do another inset with i and then I can extrude it with e

move it inside then I can extrude this one out I can make crazy shapes with insets so that's insets

so inset is with i the next thing we have is bevel so the shortcut for bevel is

ctrl b so the shortcut for bevel is ctrl b and what it does is if you select the edge selection

and select an edge and you want more edges here because you want to have a smooth edge over here

you don't want to have it so sharp over here so you want to add edges over here and you do that

by ctrl b or beveling so ctrl b by pressing ctrl b you will add bevels so ctrl b like this

and by default it adds to another vertice if you move your scroll like your mouse wheel

you can increase the edges like that or you can just click and then here you can choose how many

segments you want or the width and all the other options that you can use to bevel your edge and

now that this edge over here is beveled if we go to optimal you can see that this

edge over here is much more smooth and for selecting a loop we use

let's use another color over here

and for the edge over here

we use

alt plus left click

so alt plus left click is to select the loop so we are in edge selection right now I'm in edge selection

around here so I go hold alt and then click on this and this will select all the edges over here

and then if I combine it but by beveling ctrl b I have this bevel over here and I have added

a lot of more edges right here and now I have a much more smooth shape right so that's bevel

the other thing is knife I recommend you to not use it but

it might prove useful in many cases the shortcut for knife as it starts with k is k so if you press

k all right if you press k you bring up this knife over here and then you can make vertices

like this knife it will make vertices inside the faces like if you click you make one vertice

click another one you make an edge click another one you make another vertice click and then

combine these with the first one and then to confirm it press enter in your keyboard and then

it will make this face for you that you can use for your modeling but the problem is

that as you may see we have one two three four five six and we have an angle here so it's not

good for us but maybe in some cases you may want to cut your mesh like from over here to over here

and then insert confirm to make only some faces over here but you know you have just cut the

loop over here you can use loop to make cuts all right so that is knife and the next thing is

polybuild all right polybuild with polybuild we can first manipulate the vertices like we use g

for manipulate vertices you just can click any vertices very quickly and then manipulate it

and in the meshes that are it's not closed like this mesh is closed right now okay

we can use the edge selection but if we go back to the object mode and make a plane this plane

is not closed like or it's not a closed mesh if you go to edit mode again with polybuild

now it has the option to select this ad and if i click on it and drag it will make an extrusion

of this edge so it will give me the opportunity to quickly extrude my edges right and this is

useful for retopology which which i will show you how to use this tool to retopo your character

these options are as important i never use them a spin you can use to select your face and then

make a spin movement like that like something like that but it is never useful at least for me

so i'm just not gonna overwhelm you with these things that are not useful that much but rip

region is the last thing i'm going to show you and the shortcut for ripping

is v so if i go here and somewhere around my model process i want to

um like cut this vertex and then i want to cut it right so i want to

if i want to cut it and rip it like i want to rip this vertex i press v and then i'm pressing v

i have ripped this vertices and i can also do that with edges so i i select this way this edge

and then press v and then it cuts this edge right and then also faces

no you can't rip faces yeah you only can rip edges and vertices you can use that to rip faces

like that and then scale it and this is also useful in retopology when you want to

in some areas especially in the face area to reap regions and make new cuts like you would

connect these two to make a new loop around your objects and i think that is all so to review to

recap we discussed how uh to um how what are the vertex edges faces and why you should always use

quads and then we reviewed the most important tools you have in edit mode the loop cut the

extrude the inset the bevel the knife and the ripping and that's all i think uh you need to

know these are the same tools move rotate that you can use like um if you select this vertex

and then select the move you have the move to uh to move your vertices like that the same thing

but these are the the only thing i think that you need for modeling in blender and with

the last video that i showed you the object mode and how these base meshes the primary meshes and

the curve you can use for modeling and with these techniques these options you have in

edit mode you can do your modeling pretty well all right until next video goodbye

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
