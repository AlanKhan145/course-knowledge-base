# 144 — Retopology of The Head

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 25 — Character Creation: Final Project |
| **Bài học** | Retopology of The Head |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 46:19 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Retopology of The Head** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- retopology và tối ưu topology cho asset
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

All right, guys, welcome back. Let's start the process of apologizing our character.

So this is the apology on why we needed. Well, in the last parts of this course, we model

the character. And while we are modeling, it's more of a technical thing we with a cube

or with anything, any other mesh, we can just go ahead and extrude things and make things

like this. Because it's a very technical thing, we always take care of the geometry of its

apology and make sure that the topology is as best as it can be. But when we are sculpting,

as you can see, the only thing that we care about is how it looks. So we started with

a low geometry, but we may end up with a geometry like this. This is a very high poly mesh right

now. And this is not appropriate for production for games, for animations, for movies, anything.

And even for just a single rendering, it might take a lot of time. So if I go to Evie over

here, this is the first time I'm changing to the rendering mode, the first time always

takes time. If I change it, as you can see, it takes more time to render the scene because

of how much geometry we have over here we have over 500,000 vertices. So to fix that

to make sure that our character is ready for production is ready for rendering for

animation, anything you want to do with it, we need to apologize it. Alright, so that's

the whole thing about retopology. And then after which apologizing, then we have a mesh,

a very optimized mesh that we can just add a subdivision, or multi multi res or here

and then continue the sculpting and adding more details. While we have a good geometry.

Alright, let's start this. There is apology with body over here. So I'm just gonna click

the body and then hold shift and click on edge to hide everything else. So everything

else is now hidden. Alright, so now I want to start there is apologizing. So there are

some steps to do it. First, we need a plane. Alright, now we have a plane, then let's bring

it up. So I usually start there is apologizing from the head. Alright, so let's start from

the head. And first, let's rotate it in the x degree x axis. So our x and 90 degree. And

this is now rotated. So the whole idea of our apologizing is that we add a plane over

here and then we just extrude this plane around the mesh we have and get a new mesh

the new objects. But right now our plane goes inside of the character and that's not what

we want. We only want the surface to sit on top of the surface to get accurate results.

To do that, first, let me need to enable snap, snapping. And you have these options

to be enabled. First, make sure that the face option is enabled. And then go over here and

enable project project individual elements and also enable all these options over here,

move, rotate and scale. These options over here, make sure that the mesh that we have,

if now if, as you can see, we don't have snapping to enable, but if we now enable the snappy

tool, and if I change and if I move my plane over here, just make sure that the plane is

going to stick to the surface of my object. So as you can see, now the plane is sticking

to the object. Now if I rotate, rotate it, as I have affected the rotate and scale area

over here as well. If I rotate it, it also rotates based on the objects that is sitting

on. Alright, so I can move it around and stuff like that. And then to make things even better,

we can add a modifier over here, shrink wrap modifier, I usually set it on projects on

negative and then on target, you have to choose a target or here. Now I make sure that the

plane is wrapping around the object that I have select. But now let's send it off for

now. The object gets deformed because of how it is rotated. So let's just scale it down.

And don't forget to hit a scale. And then let's enable it. As you can see, the shrink

wrap modifier is doing this thing to wrapping this plane around the object they have. So

I don't want this right now. This is making problems right now. As you can see, if I move

it around, it fixes it though. So if it makes some kind of that problem, if I move it a

little bit down, this vertices is going to stick to this part of the mesh. But if I move

it up, it's going to fix the problem. But that's the problem we have a shrink wrap.

So whenever you're extruding the edges, we might get some of these problems. So what

I do, I usually just only use snapping and I turn off the shrink wrap from the viewport

with this click with this icon over here. So if I click over here, the shrink wrap is

disabled. All right. And then after extruding, for example, after going over here and extruding

this right here, okay, then I'll enable shrink wrap to see how it's going to look on top

my object. All right. To make things more clear, because when we use shrink wrap and

snapping, it's just, it's on the surface, but it's a little bit it's not visible right

now. Because this is more. This is hiding the plane for us to seeing the plane, we go

to object properties over here, and then enable in front. So now we have our plane in front

and then we can start extruding like that. All right. And then if you want to walk through

if you see right here, the plane, the plane is right here. But the shrink wrap is wrapping

the print plane on the object. Alright, so if you don't want to see the vertices over

here, right now the vertices over here, you can just go over here and enable cage by enabling

cage is going to just snap it onto the surface.

All right, or what we can do or what I do is that I disable shrink wrap while I do the

topology. And I just work with snapping. All right. And then I go out of the edit mode.

And then I enable shrink wrap to see what I get. And if I'm happy with this, all right,

let me just minimize this. And if I'm happy with this, I go over here on this arrow, and

I duplicate this, and I apply the duplicated shrink wrap. And then again, disable the shrink

wrap over here. Now as you can see, the shrink wrap is applied. But as for now, everything

we do, we don't have shrink wrap on and we get a much more nicer version of geometry

over here, right. And then again, enable shrink wrap. And if I change see any changes

that I like, duplicate and apply. That's the whole thing about about the process of retopology

and the tools that you need. There are some other tools over here. To wrap this up poly

build, I explained about this in fundamentals. But if I click on poly build, I can select

the edge and then drag it to make an extrusion. So like the edge and drag it to make an extrusion.

All right. And this makes things easy. For example, I can hover on my mouse over the

vertices and then just move around the vertices. But this tool is very precise. So right now

my, my plane is very big, so I can easily select the edges. But many times the plane

is actually like in this size. All right. And then it gets hard to select the edges,

I have to be precise and go over the edge to select it, right? Yes. So just experiment

for yourself to see if it fits how you're going to do. Sometimes I want to go and select

these manually, I have to go over here and select box or I can just select B to select

it like that. But like selecting box is much more like better to select because if I select

B, then I let go then it's just gonna switch back to poly build, I might mess things up.

And then another tool that I showed you before is if you go to edit preference, and then

go to add on and then search for loop, you have a tool as loop tools, enable it and this

tool is only available in edit mode. Now that we are in edit mode, if I select an edge over

here, first of all, there's some edges over here and go to go to edit and then look to

all have seen some of these options, I can select on space to make a space between the

edges similar. Alright, I can go over to this and select on the space to get a more similar

shape of these of these rectangles. And then I have like, for example, flatten to flatten

the edge, I have circle to make a circle of the edge. And I have loft, for example, I

have relaxed to relax the vertices and edges. Very, very good tool. And also, there's this

option only in vertex selection, if I select all the vertices with a and then right click

I have this option over here, smooth vertices, it's going to smooth the versus somehow like

the smooth brush in the sculpting mode is going to just smooth the vertices like this

and give me a very much more better geometry. So let me delete this.

Now the next thing is, is that you can also add a substitution surface modifier. All right,

to see how it's going to look after you subdivide. For example, if I do it over here, I may see

that I have some problems over here. Obviously, I need a geometry over here. But you might

even see some problems after enable is so the workload would be that you just disable

the subdivision. After a while after walking, and he's apologizing, you just enable it to

see how it's going to look after there is apology. All right. And the last thing is

a mirror modifier because the things that we usually do with apologizes, they usually

symmetrize as you can see, we even we made the clothes symmetrize. And we can use that

to just lessen our work. So we can just use a mirror modifier and just do one side of

the body. Alright, so we just do one side of the body and the mirror modifier, we just

mirror it on the other side, and we're done. So it makes things much faster. That's the

whole and that's the whole thing. So I wanted to share with you about this apology. So now

let's get right into it. And we apologize the head. So let me delete these faces. And

all right, we have our all our modifiers set, we have a snap tool set with these with

these on, don't enable project at the center in the project individual elements. And we

are set. So let's disable this.

Then we go here. One last thing we many times in the in extruding and all we need to merge

things. So for example, over here, if I extrude this over here, these two are separated these

two edges, right, these edges are separated, we need to merge them. And we merge them by

clicking on the word to see clicking on the other word, see, hit M on keyboard, and select

one of these at center is going to merge them in the center point over here. Last is going

to as first is going to merge them with the first selection and last is going to merge

them with the last selection. So just press on last and it's going to merge them like

that. But sometimes this might take a while for when we are extruding very fast. So there's

an option over here. So on the upper right corner option and auto merge. And this is

going to auto merge the vertices that are close together based on this threshold. Alright,

so if I press G and make this close to this edge, as you can see, nothing happens, because

and now they are merged. Nothing happened when we were like really close because this

threshold is very low, but now they are merged right now. Let's merge them. And then now

let's increase this to a very high value like 0.1. All right. And now if I move this around

like this, and I click and as you can see, this is easily get merged right now. But as

you can see, this, this is a very long distance for merging. If I click on here, they are

merged in this position, right? So they are merged at this distance. And this is a very

long distance. So we can just have make it this distance half or point five, for example.

And then for ripping vertices also, so you don't want these to be merged, you can use

V on your keyboard to V rip vertices. So I'm pressing V, and I ripped this vertices from

So let's try this merge option over here. And then let's just go over here and they're

going to merge very fine. So now that we are set, we are good to go. Let's do these faces.

I want to start with apologizing the face, the face, I want the face to be mirrored.

Alright, to do that, let's bring the first plane to the middle of the head like this.

And then on edit mode, we merge them. But there's an more optional here. In the mirror

modifier, we need to enable clipping because now if I move these faces that are mirrored,

they're going to just go into each other. To prevent that, let's just enable clipping.

And now when they go into each other, they're just going to clip into each other and mirror

into and merge into each other. All right, can also play around with this merge button

merge option over here if if they are, for example, too far away from each other, they're

going to merge and now they're merged these two vertices are merged because of this option

over here, if you want it to be like merged from a longer distance, you can play around

with that. But I think this is fine. We always need to go back and check these lines over

here to see if they are managed before applying the mirror modifier. But that's the last last

operation that we're going to do. So let's go to over here. And let's define how it is

going to be. So we have a plane like this. Alright, now we are going to start with apology.

This is the front of the face. So one thing I want to mention, our face right here ahead

right here, it doesn't have face features. Alright, so this is a mask, we're going to

make this Spider Man is a mask doesn't have this face features. This is going to make

this easier. So we're just going to wrap around the head with geometry easily. But if it did

have faces, or if you are going to make this for animation, you need to make things like

more different than what I'm going to do right now. Alright, so around the mouse, if you're

going to animate your character, and the character is going to talk around the mouse

needs to be, if I duplicate it needs to be like this, like a loop around the mouse. Alright.

So this is very quick, not very accurate. But do you need a loop around the mouse to

admit things? Why did it change? I went to the render that as to say, we'll shrink our

here, you need a loop around the mouse. Okay. So something like this. Alright, because you

want to use these loops to animate the mouse of the character and make it go up and down. Okay,

so that's one thing you need to remember. Let's delete these faces.

And as a starter, apology, I'm just going to click on the edge selection, I'm just going to

extrude it. So first, I want to make a loop around the head like this, then I'm going to

make a loop around the jawline over here, then a loop around the neck. So neck and head are

need to be done with each other. And then we're going to do the rest of the head.

Before making the neckline, I want to make the line that goes down to the body to set the things

as we go. So let's just extrude it with E extrude with E, I have shrink wrap modifier off,

as you can see, extrude with a extrude with a just extrude and go down and make similar

extrusion. But right now we don't have a similar extrusion, that's okay, I'm just going to press

G and bring it down to this area. Alright, and then I can press Ctrl R, and then with the mouse

wheel, I can increase the edges over here. Alright, then let's go and extrude over here

on top of the head.

And then let's just extrude to the

back of the body. We see the back face of the faces over here, if it makes problems for you,

go over here to this arrow over here, and then enable backface calling is going to

hide the back face of the faces that are over here.

Let's just extrude this to this area, and then Ctrl R and make some loops.

For now, we are not making it accurate, but you should have the same loops we have over here. So

that's one thing to remember. We can also let's undo that. And always it's good to have an even

number. So we can see that the thing we can see that over here, as you can see number of cuts.

So let's have an even number like eight, for example, and confirm.

So as you can see, over here, we could see the number of the cuts.

Alright, now the base or the body right now, it's not important how to connect these because these

might be might delete these or transform these while we go. But now we have the body right now,

we can enable shrink wrap to see how it shrink wraps around the body. And we can go to object

mode, duplicate, apply this and disable the shrink wrap again. So now after enabling the shrink wrap,

we have these edges over here that are separate from each other. And we need to just select them

and make them closer to each other. But I'm not going to do that now, because we might get these

results. Again, when we are doing the reciprocity, near the end, we are going to make them more

closer to each other. But you can do that, like press Alt click to click on the edge and then go

inside to make them into each other. But we get things like this. So be careful when you're doing

that. Alright. Maybe just selecting them one by one is the better option. So g x, bring them

towards each other. So now let's make the area over here on the jawline. So I want to connect

this jawline to this area over here. Right. So let's do that.

And just watch seeing how many vertices we have over here.

Let's connect this to better see how it's going to work out later on.

By pressing s, you can scale down or up your edge.

I'm just extruding. And now I can

merge these two together by bringing them closer to each other.

So let's bring these colors and now they are mesh. But as you can see,

this plane over here is too big right now. But we don't know, we need to first see if

this loop over here is right for us. So now we have to connect these loops together.

But now I want to show you an option over here. So there's an option over here face

grid fill is going to fill the loop that we're going to sell in that this is the loop

is going to select it's going to make geometry based on this loop, but it needs even number of

edges. So if you have a number of edges over here, we should have the same number of edges

over there. So let's count this number over here. So as you can see, we can see the edges over here

five right now, this is the vertices actually. So the edges are over here edges for we have

four selected. And now we have nine selected in this area. Now, let's see how much we have over

here. If it doesn't work, we should just go manually. We have 14 over here. All right.

Let's bring down this area. And let's make a loop over here. Now we have 15 were here.

All right, I think best thing is just go manually right now.

Yeah, the best thing is right now I think it's just go manually. Let's select the

let's go to the upper view and select the middle face over here. And I want to extrude it and see

where I can connect it. All right, let's connect these two together now.

Now these two are connected.

All right. Now we have a loop in this area. As you can see 123 or here 123412345 or here.

So we need another edge in this area, we can bring down this area over here and add another

edge in this area. And then let's select these edges and go to face grid fill. And now we don't

have the necessary things. So like two edges. So I think 1234512345. And over here we have three.

So that's that might be the problem over here. So just do it manually, then. All right,

this is manually, we just have to go and press E on this edge.

pressed H by accident. Let's press E select and merge these two,

e merge these two, e merge these two. And then let's go and merge these two as well.

All right. Now let's go over here, we can go ahead and merge them as well. But first,

let's merge from the upside. merge these, these, these two. These ones.

All right. Let's go here and merge these from over here.

And then at the end, we're gonna see which vertices we need to delete, which vertices and

faces we need to have. So now we have this we have all this over here. But as you can see, we have

one over here, 123. But over here, we have only two. So if we extrude over here, we are going to

need one edge over here. And if I extrude here, one is going to be here, but they're gonna attach

to each other. So just gonna press Ctrl R and add one edge here. And just add these together. And

then this is going to be made just by itself. To fill this face, press F. And that's it. That's

now the back of the head. Now let's see if we can grid fill it this. So still we can grid fill it.

Uh, let's go again, the manual way. But I want to show you another way to do this.

This extrusion, I showed you how to extrude manually or here with E, we can just extrude.

And then it's going to merge. All right. But there is an add on in preferences called

F two, and it comes with blender. Alright, so enable this add on I means this as you can see,

as you see over here, as you see over here, if I undo things,

alright, if I undo things over here, I pressed

Sorry, I pressed these two edges and press F on keyboard to fill it. Alright, but this F to add on

enabled or enables us if I click and where to see that has two edges. Alright, so this word to see

has two edges over here. If I click this air to see and press on F, it's gonna make a plane

itself. And that's very helpful. So you're now you can just clean up vertices and press F F

quickly, you can add the edges we need. Then over here, we can connect these two together.

Then let's go and press F,

press F over here, F,

pressing F, and

that's quite good. And this connecting these two together. And now it's filling this part.

All right. Now, as you can see, we need an edge loop in this area.

Let's do later, let's fill this area first to see what we're gonna get.

So you can go very can go very,

let's say, accurate and just count the numbers and just go with it. But I prefer that I just

go with the flow, and then decide which edges I'm going to add and which is I'm not gonna add.

Alright, so now this is almost certain that I need an edge over here, a loop over here. So just

I'm just gonna press Ctrl R and then add a loop in this area. And now this is connected.

And let's bring down this area. And now let us continue with F button to fill this area.

So we just F button, I'm just going to fill this area. So let's just have it here.

So I have, let's press F to fill this area. And then let's see if we need to add another loop. So

all right, now I have these to be Phil, so I'm going to press F

between these two and then I have these two to fill so just press F to fill and then now

I have these ones that I need to make

uh I need to make right so let's go over here and see yeah I think we're here one two three four we

have a code over here but we need to fill it all right now that doesn't work let's just go the

easier way and add a lookout so let's just add a lookout in this area with ctrl r now that we

have a lookout we can just go ahead and press f over here and then add another lookout in this

area join those two together and then join join these two edges together by pressing clicking on

them press f and now we have our mesh as you can see every part of our mesh is now consisted of

quads now here we have a problem that we might get and we need to be careful this was made by

automerged all right because we have that automerging label when we made the loop and

the loop were close to each other you just merge these two vertices together let's just rip this

over here or let's undo that and

let's disable automerge so we didn't get problems let's rip these vertices

and let's see how we can fix this

so these two need to be merged i think merge together with m

and then these two need to be merged

or not actually

we need to

we need to make a

make this

let's we need to make this as a rectangle let's delete the edge over here and now i think

it's going to be fixed let's delete the edge select these f select these and f

and now the problem is fixed now we have all quads so be careful when you are adding edge

loops that are very close to each other so they don't get

they don't get merged by this option not so much now i'm just going to select all

of the vertices and i'm just going to go right click and expose vertices to smooth them another

thing i want to do i want to select this edge and maybe press on a space i don't know it might

make problems now yeah it made some problems but let's enable shrink wrap to see what we get

all right that's good

okay let's press on relax to relax this edge a couple of times not too much so

by relaxing these edges this is going to be much more smooth

so

now let's just smooth vertices a couple of times

at this point we just need to adjust

the quads we have so we all we have we need to have similar quads right here

all right that's good for now now as you can see we made the head and now we have a good

geometry that we can work with now let's go to the neck i'm just gonna press f to fill this

not like that let's undo that i need to press f on this side let's press f

press on the wrong vertices be careful which vertices you are pressing

then i can join these two together

you can now enable auto merge and maybe bring down the distance like 0.4

all right let's make these two edges a little bit so

far from each other

look at the retopology like a game like a kind of a game a minigame they need to fill in

where the geometry is needed and all that

so

all right now i'm gonna do the second edge much more quickly i'm just gonna press e and

extrude this and bring it in this area and then i'm just gonna connect these with these edges

let's connect this manually connect these two together and connect

these two

and now by making as you can see it is going inside because we don't have

any look us let's make some look cuts and we need

the number to be correct so one two three let's just do over here

select these edges to see how many edges how many lookouts we need

so i have 10 edges over here so i need 10 lookouts over here so i can go over here

and make 210 look us as you can see over here you can see the number of cuts i need 10 cuts

and that's it now i have 10 cuts and all i need to do i need to connect these together

let's disable shrink wrap or actually let's go over here duplicate the shrink wrap and

apply it and disable it again after applying the shrink wrap go around and see if you

see any artifacts any errors

now let's connect these edges now i have my automation on and with the art with help

automag i quickly connect these edges i'm not uh worrying a lot about

like how it is gonna look later on i'm gonna smooth them and relax them

all right it seems i have i've made one edge unnecessary edge over here go over here and

dissolve edge to dissolve the edge don't delete the edge because it's going to delete the whole

face dissolve the edge all right here i can click on this edge let's put some space all right let's

disable that no so we can make this a very smooth

uh the space between vertices is similar but we can relax them

all right now we have a much more relaxed

oh we made some problems over here so what i'm thinking is that just

select these edges and relax them so i select the loop but i don't need that loop so let's

just select these press on a space to make this space similar and press on relax to relax these

edges and i can do the same thing over here

so there's some space there's some relax

and as you can see we have a much better loop around the neck

all right now let's uh

all right now i think uh it's good for now let's uh connect these together

so

i'm not uh selecting the loop because it might make problems while we have the snap to on

and we can just manually go ahead and change the position of this vertices

all right now as you can see we have a very much low geometry head we can

enable this subdivision to see what we get and as you can see we get a

a quite good result with this geometry that we have made by now and uh all right that's it for

this video we made the head we apologize the head next we are going to apologize the body

so until next time goodbye

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
