# 032 — Create an Object with These Operations Pt. 1 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Create an Object with These Operations Pt. 1 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 40:07 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Create an Object with These Operations Pt. 1 DEMO** trong pipeline của section.
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


Ok, so let's get started on the more practical side of what we've been

covering over the last few videos. So we're going to do a demo here and we're

going to be covering everything that we're going to be using, everything that

we've covered until now. So everything from adding and transforming objects,

deleting objects, that we covered in some early videos, up into the functions that

we covered in the last series of videos, which were extrude, delete, fill, join, loop

cut and slide, subdivide, bevel, and inset. So I just started up with a new Blender

file here and I've tabbed over into the modeling workspace just to get rid of

the animation timeline here at the bottom. Just because I noticed over the

last few videos it was sort of obstructing my keystroke capture here

in the bottom. So just like the previous demos, I'm probably not going to describe

every single thing that I'm doing because a lot of it is about repetition

and learning those hotkeys, those shortcuts. But again, my keystrokes

will be captured down here in the bottom left corner of the screen so you can

follow along with what I'm doing. Okay so I don't have a plan as such for what

I want to demo with these tools, but in the last couple demos we've been doing

these kind of larger exterior scenes because we haven't really been able to

go in and edit these meshes to be much more than primitives. So now that we know

how to add and remove geometry and detail we can do a lot more and we can

do it at a smaller scale. So I'm going to move into doing an interior scene just

for a bit of a change of pace. So now that we can really manipulate these

shapes we can do a lot more. So I'm going to create, I'm going to start, since I

know I want to do an interior, I don't have a firm plan for what I'm going to

put in it, but let's just start by building out the room itself. And now I'm

not going to put like a ceiling or a fourth wall on this room just so that we

can see what we're doing. But you know if this were like a 3D game environment you

were building you know you would have those things because when you know if

your perspective is inside the room you'd want to be able to view it from

all sides. But this is going to be more like a like a diorama almost. So we can

just start with our default cube. Now I want to make some walls and doors and

just sort of the major building blocks of this piece. So to do that and in order

to do that in a way in which everything lines up nice and evenly I'm going to

turn on grid snapping. And we went over this in a previous video but we can do

that by coming up here and clicking the snap icon which is like a little magnet

and you can also press shift tab to toggle it on and off. So I'm gonna turn it

on. I'm gonna press 1 to come into front orthographic. Tab into edit mode. And you

may be wondering why I'm so insistent on keeping the pivot points at the bottom

when it doesn't so far it doesn't have seemed to have mattered. This is

honestly just good practice and for me coming from environment modeling for

games specifically when you bring pieces into your game engine. So you wouldn't

program your game in Blender but you would use another engine like Unity or

Unreal. So you would make all your models in Blender. You would export them and

then you would import them into these engines. And when you import them it's

just a lot easier when you're placing things and duplicating them in engine if

the pivots at the bottom because it those types of programs will snap your

pivot to the ground so that just everything is lined up the way it should

be and it's just makes your workflow a little bit easier down the line. So

although it may not have seemed to have mattered for some of the demos I've

done it is just good practice. Okay so I guess for this let's start let's start

thinking about our scale. So I did this I think I covered this in the previous

video but I may not have. So the default cube that you start with is 2 by 2 by 2

meters. So let's say I want to make a I'm going to not make this one of our

final pieces this is just going to be a tool that I use to get an idea for scale.

So we're going to make this about the size of a door because a door is a

pretty universal thing and it's something that we all see every day so

it allows us to judge whether things are scaled appropriately. So we're going to

leave the Z at 2 meters. We're going to put the X dimensions at about 1 meter

and these are all approximate I mean if you measure a door it's not going to

necessarily be exactly this. And then the Y doesn't matter quite as much again

this isn't going to be our door this is more just a scaling reference. I'm just

going to put it at 1 meter. Okay so this is the size of approximately a door and

approximately you know a tall person. So I'm just going to rename this scale ref so

later I'm not confused by it. All right so now I'm in object mode I'm going to

add a new cube. I have snapping turned on still you may notice that it's kind of

feel it looks a little different when I'm sliding it once a snapping on. Again

I forgot to move my pivot point after I just made that whole point about how you

should always have it at the bottom for environment pieces. So if you look at a

door just in on sort of a normal wall there's like a little bit of space

between the top of the door and the ceiling so again this is not going to be

an architectural design piece so it's not going to be exact. You can use

blender for the for architectural design and things like that you just have to be

more careful about getting your measurements correct. So this is going to

be our first wall segment and there's a few conventions about how big and

how wide you should make walls. It's largely up to you and the needs you have

for your scene but you know typically a door is two meters tall and if you're

building this for like a game or even an animation you would want your

character model brought in here to you know make sure that they can fit through

the doors and things because if you know model your whole scene based on a

certain scale you bring your character in and realize oh the character can no

longer move through this door I can't you know proceed with this then you'd

have to go back and redo it and tweak it and it just wouldn't it wouldn't be good.

So let's make this section of the wall four meters long and then there's some

conventions regarding how thick your wall should be. Again it depends on what

you want to use this for but there are some issues with having your walls be

flat planes that can arise in some game engines and what I mean by that is

instead of using a cube if we used a plane which is just a single face it

would work to make your walls like this way and if you weren't ever gonna see

like move through this doorway or see the other side of this you can

absolutely use a plane there's just sometimes issues with lighting you know

if you have an exterior light source it might just bleed through a little bit

because it the engines have a harder time with it but so we're gonna have a

little bit of thickness to our wall just like a real world real world wall say

that five times fast. Okay so since we know that this is approximately the size

of our door we can use this information to cut a doorway in using some of our

delete functions that we learned. So let's select and let's make sure we're

trying to keep this a little bit organized for these longer demos so

let's name that can even name it maybe like wall underscore door and whatever

naming conventions you choose it's largely personal preference obviously if

you're working for you know some sort of studio they'll probably have a naming

convention they want you to follow but it's just a scene that you're working on

by yourself use whatever you like. So I've tabbed into edit mode on this wall

and I've pressed ctrl R to get my preview loop cut so what I'm actually

gonna do is I'm gonna bring it right in the center here which brings it right in

the center of our door I'm gonna scroll up on my mouse wheel once to make the

cuts think the number of cuts to I'm gonna click I'm gonna click again I want

them exactly where they are. So now because we have median point is the

default transform pivot point if we have both of these selected which they

will be as soon as you place them if we press S and X and scale them on X you

can see that these edges slide in really nice so we're gonna line these up with

the size of the door and we're gonna make another cut across right here the

same way we're gonna hit ctrl R get our preview slide it up and now we have the

cut going all the way around so let's hide our scale reference and now we

actually need to make a hole in this wall for the doorway so let's go into

face select mode and select the faces that we want to delete by shift-clicking

again X for delete menu and faces so now we have this doorway that's

appropriately sized but we can see into the interior of our wall so we just have

to patch up these holes we already know how to do that we're just going to come

down here select this edge press F F and F one more time to fill all the way

around that loop so we already have our first room piece now let's move this off

the center a little bit because I like to add and model things in the center of

the screen but that's totally personal preference so let's make another wall

piece and let's make this one just a like a plain wall with no doors or

windows or anything like that plain tab into edit mode move this up wireframe to

select be able to select through everything you may be asking why I'm

grabbing these faces and moving them with the G tool instead of scaling them

there's no reason it's it's just a personal preference thing I'd have to

come in here and enable scale snapping to get it to snap if I use scale which

is no big deal you can do it that way you just come to the drop down in the

snap highlight scale highlight you can highlight everything if you like and now

if you select both of these faces and S and X they will snap so there's no real

reason I'm doing one method over the other it's just sort of a personal

preference thing so let's look at this let's see I made this I think I made

this 20 centimeters I believe that these grid lines are currently set to one

meter each yeah because this has four before and this is four meters so yes

so each of these little squares is going to be 10 centimeters so my walls are 20

centimeters thick so let's make this one 20 centimeters thick

actually made it 30 and you can see because it says 0.3 meters so I was off

by one there we go 0.2 we're good 0.2 yes they match okay so now we have a

plain wall we have a wall with a doorway cut into it and let's make one more with

a window so to do this I'm just gonna move this to the side but I'm just gonna

duplicate it just to speed up this process and make it from from this shape

we can see we have wall plane .001 now because it's a duplicate let's rename it

wall window all right now most windows are roughly the top of them are roughly

aligned with the top of doors and this can vary depending on you know what type

of building but for like standard modern buildings and I don't know a ton about

architecture you know as as its own discipline but for standard modern

buildings they seem to line up roughly with the top of the door so now we could

have duplicated this and added edge loops to it and filled it but I think

it's actually just gonna be easier now to do it from here and because this

piece is directly behind this piece on the Y just where I've placed it for now

when I hit one to go into front orthographic it's lined up perfectly so

if I select our wall underscore window go into one hit one I'm sorry on the

numpad to move into front orthographic and now I tab into edit mode I can still

see these guidelines because I'm in wireframe I'm looking through this mesh

so I can see the guidelines of the mesh behind it which is going to make it

easier to make these lines be where I need them so now I have this this cut

horizontally across the mesh and it's like at the exact height that this one

is so how tall you want to make your windows is largely up to you there you

typically they're roughly rectangular I'm just trying to visualize between

this and this let's make it this one we can always move it now same thing with

these guidelines here we're gonna match basically the width just to keep things

simple so all I've done is hit ctrl and R hovered over this edge to get my

preview and scrolled up once on the mouse wheel to double it and I have

double-clicked to place it exactly where it is you could also add the

number of cuts afterwards by accessing this loop cut and slide menu down here

so S and X scale it in now you'll see that this isn't lining up exactly and I

believe that is because I did not have scale snapping enabled when I made this

door I think I just eyeballed it so we're gonna turn snapping off quickly

and we're just going to come in and I've just box selecting to select the entire

loop you can also you know of course hold alt and click it I'm just gonna

zoom in so I can see where this is and I'm gonna hit G and X and transform I'm

gonna do the same thing over here G and X okay so now we have all of our loop

cuts in place so now all we have to do same thing we did for the door is select

the faces that we want to delete which is a little bit easier to see in solid

viewport shading so I just selected both those faces I'm going to X and we're

going to delete the faces now again we just want to fill these let's select two

edges actually we can select yes two edges and four vertices and fill this

whole quad so now if we just select this edge because there is this quad drawn

blender sees that oh I get it you want it to fill in this way so now if I just

hit F I don't have to make the whole selection all right so we have our

initial pieces here so let's think about how we want some of these arranged

and let's add a floor in while we're at it now for the floor I am going to use a

plane just because you don't typically have the same issues with light coming

through and again this is sort of a more advanced topic and it's not really

something you need to worry about at this stage but I do just want to explain

why I use certain pieces over other pieces at times so I typically use

planes for the ground because you don't typically have a light source underneath

something so you don't have to worry as much about light coming through so I

have snapping on let's just scale it up so it's four by four so it's just

matches the width now we can start duplicating some of these objects around

to build out our room so I'm going to go into top view because I like using top

view for laying out things just moving this to the side a little bit because I

think I want the door to be here by 20 centimeters so that's sitting on this

plane now we can grab some of these and start moving around so now let's start

duplicating this floor for wherever we need it so and you could you know scale

this and extrude some of these edges to make the floor the shape you need but

for consistency and just ease of placement I think it's it's better it's

called the modular workflow and it's something that is used a lot in

games it's easier to make things sort of a standardized size and then just

duplicate them and it also helps with like when you add texture so if I had a

sort of like a wood floor running on this with like the wood floor planks I

won't get in too much into detail about that because we're that's gonna be a

future video is texturing but just know that it would be easier to texture a

single square plane than it would be to to texture something that is like

extruded into like a funky L shape so I don't think I want a window right here

next to the door I think I'm gonna duplicate this wall out place it rotate

it and because I had rotate turned on in the snapping I was able to just quickly

and accurately make it 90 degrees I think I am gonna put the window over

here so you'll notice with the snapping that if I'm really zoomed out I can't

snap to like the 10 centimeter increments before we talked about this a

little bit in the lecture so if you notice that it's not snapping to small

enough increments you just have to zoom in until you can see these grid lines

that you need to snap them to another regular wall right here

you'll see because I made the floors and the walls all the same width in the

their local X direction that it just makes it a lot easier to build things

out with proper placement so you can think of this as like like a diorama

like I don't know maybe you're playing a top-down game and you know like the

Sims or something and when you look into your into your houses you know there's

no walls or ceilings obstructing so you could see what's going on so think of it

like that it's a good start it's it's just a little square room which is a

little bit boring so let's add a little bit of variation I'm gonna do that by

rotating some of these walls and making just more interesting configuration

okay so that's a good sort of starting point for this

okay let's think about what we can add to give this a little bit more life so

obviously we need actual windows and actual doors not just these holes cut

into our mesh so let's do that now this doorway is again not perfectly on the

world origin but it is aligned on the x-axis so when I come in when I press 1

on the numpad and come in here you can see this doorway is being cut exactly in

half by this axis line so it's just gonna make it very easy because it's

all lined up with the center of the world to make a door so actually you can

do that you could just add a new cube and scale it or if you like you can just

use the scale ref just rename it to door and then just scale from here just

because it's a little bit closer to the shape we need already a little bit

quicker and now that we have our doorways cut and things like that we

don't really need the scale reference anymore because we can just look at our

doorway or our windows

just placing that right in the center

we're gonna need to make a frame for it at some point too because it's gonna

look strange if we don't yeah so let's look at this now I'm going to show you a

shortcut that we have not discussed in the lectures and this is just a sort of

a view mode shortcut so if you have a lot of objects in your scene and you're

you're trying to view them from angles and things are obstructing it and you're

like well I could go into wireframe but I really you know I want to see this

object solid you just want to see it alone the I mean you could select

everything and press H to hide it but the quicker way to quickly view an

object in isolation is to click on it and click the slash key on your keyboard

and that will put you in like local view which basically just hides

everything else that was not selected in your viewport it just hides it

temporarily for you now if you press alt H it won't bring it back because this is

a different functionality than the H key you have to move out of local view and

you'll know you're in local because up here where it says user perspective it

will say local so to move out of local view all you have to do is press the

slash again the slash key again and it will bring everything back so if you

just need to quickly focus on one piece that is how you do it so we've made a

couple doors up until now but we haven't really been able to add a lot more

detail other than just like putting in a doorknob but because we weren't able to

edit our mesh and find enough detail but now we can so let's add a loop cut

just right in the middle and I'm thinking about those doors that have

sort of the inset panels so we do know how to make an inset and that is with

using insets let's select every face and whether or not you want to do the back

face is up to you just move out of local view so it depends what your scene is

for if this door is going to open at any point you would want to model the

back face because you would see it but if it's just going to stay closed and

it's just going to be a static shot you know you don't necessarily have to model

the back face slash again to go into local view and press I and you see that

it's coming in as one but I put that cut in the center because I wanted to so I'm

just going to press I again to turn on individual alright I want to scale these

in on the X a little bit so now I want to bring these panels in because if I

tabbed into object mode right now I haven't moved these off the surface at

all so it still appears flat even though these cuts and vertices have been added

I'm going to press E and S and then Y to scale it on the Y and I've turned snapping off for this

just because I I want a little bit finer control cool so in order to see this

better we can come up here and turn on cavity the way we have but you'll notice

that when I press 1 to view it from the front you still can't see it even though

the inset is there and that is just because these edges these faces are perfectly flat

to the world it's just something to know that when you are looking at something that is

perfectly flat from a perfect front view you just won't be able to visualize it so there's

a couple of tricks we can do to make this visible from the front so let's tab back into edit mode

our selection is still active let's change our transform pivot point to individual origins

and press S and scale these in a little bit so now this face isn't perfectly aligned to the world

and this face is a little bit smaller but when you come into front view you can now see it because

we can now see these edges properly okay it looks so far so good let's add our door shift

right-clicking to move my 3d cursor so I can quickly add a cylinder in the correct spot

well approximately the correct spot and press R X and 90 to flip it this way I'm going to scale

it down put scale and shift Y because I don't want to affect the length of it this way right

now and then I like to do this as I go you can model everything in with flat shading and then

come in and fix it but I like to do it as I go it just helps me visualize what I'm doing let's

come in here select this face loop by in face select mode holding alt and clicking right

clicking and selecting shade smooth let's add a UV sphere for the actual knob part

rotating it 90 degrees along the X which you can do by pressing R X and then 90 or by hitting 3

on your numpad and then just typing in R and 90 again because it when you're viewing it from

orthographic it will only transform in the directions that you can view it shading it

smooth there just to get a better idea and then the same way we did this before we're going to

tab into edit mode on this grab a single vertex at the front we're going to turn on proportional

editing by either clicking this icon or pressing O on the keyboard grabbing pressing Y for Y and

then we're going to scroll the change our influence just so we have this more this shape that's round

here and flat here like a doorknob and now we're just gonna play with the scale until it looks

approximately right I think it's a little bit too high up let's let's join these objects together

but not to the door just yet so we're gonna do that by making our selection and in this case

I have no preference over where the origin is because I'm gonna move it anyway so ctrl and J

to join it and now I just want to fix the origin and how I'm gonna do that with the 3d cursor

snapping that we went over in a previous video so on face select mode I want the cursor I want

the origin to be exactly on the center but on this face so I'm just gonna select this entire face I'm

going to press shift and s to pull up the snapping menu and hit cursor to selected now I'm going to

tab into object mode going to right-click going to come down to set origin and click origin to

3d cursor again this should all be review so I'm just gonna reset my 3d cursor so it's not

obstructing my view by pressing shift C and then we can put the doorknob on the other side just

duplicating it shift D, Y for the axis and now we want to flip it completely in this direction so

I'm in right orthographic so all I have to do is press R and 180 and then place it looks pretty

good so we can join all these together if we like and then of course I'm going to I'm gonna

make the door selection my last active this is another thing about selection order and joining

is it matters not only for the pivot which should be here for a door but we covered that already so

but it also matters for the name so if you watch the names up here of all these objects I didn't

name the doorknobs and when I joined the the two pieces of the doorknob together I joined the

sphere to the cylinder so it maintains the name of your active selection so if I select the knob

and the knob which are just named cylinder because I didn't rename them if I then select the door

I'm just making sure I have my selection order right so now the door is my active selection if I

control J it will maintain the name door now if I had done this in the wrong order not only would

the pivot point be wrong but when I press ctrl J it is now called cylinder dot oh oh one which

we don't really want so just remember that the active object is it's going to maintain all the

properties of the active object so just make sure that what you want is active and you'll see that

I'm getting some shading errors here because these objects did not have a uniform scale and they still

did not which you can you can tell in the by bringing up the sidebar by pressing n and viewing

these things here now if these are all one it should fix these things here but if I change it

this way it's going to scale the mesh so we need to apply the scale which we've done in a previous

video but again to do that just make your selection in object mode hold ctrl press a to bring up this

apply menu and just apply the scale now it's fixed that shading error we had right here all right

that's a good nice basic door so let's continue on all right and I brought everything back again

just by pressing slash you know I'm being a little bit repetitive here but I know that these hotkeys

there's just a lot of them and there's not always the easiest to memorize so I think just repetition

is the best way to memorize these things so proportional editing on which we do not really

need right now so let's turn it off all I did was add a cube scale it down you'll notice if I scale

something in edit mode actually this is a good point to make so if I have this cube and I scale

it down to approximately that size in object mode the scale of it is 0.086 and that's because I did

it on the object level however this cube I added it I tabbed into edit mode and then I scaled it

so you'll see that the scale remains at 1 so just remember that doing things in object mode is a good

way to sort of preserve the history of the object I guess is the best way to say it because now if I

reset these values to one of the cube that I I reset error I scaled an object mode if I reset

these values to one it brings it back to the default size which is 2 by 2 by 2 but for this

one because I scaled it in edit mode its scale of one is now equal to a dimension of 0.13 meters

so if I were to scale this an object mode and then clear that by pressing alt and then s to clear the

scale back to one it now reads this as the default scale for this object you know it's sort of heady

and conceptual but you will get the hang of it the more you use these objects and scale these

objects again repetition is kind of key here okay so I'm just lining this up to make a simple frame

and we did this with multiple cubes in the past the way we were making frames for our doors was

by adding a cube here and scaling it adding a cube here and scaling it and adding a cube here and

scaling it and then joining those objects and that's that's a valid way to do it but I just

want to show you another way so we now have it scaled to the approximate width we'll probably

just change it a little bit but just get it roughly the size you want it and now tab into

edit mode we're gonna select this top top face we're gonna hit E to extrude it and we're just

gonna extrude it to the top it's easier to line up if you are in orthographic view and we don't

actually need this edge loop so we're gonna delete it we're gonna alt click to select it X edge loops

okay so now we need to basically extend that around so we need it to come up and then we need

to extrude from the face that is created here across so we need to make one more extrusion

in the vertical direction E to extrude so now we have this face here that we can extrude across

this way and we're just gonna do the same thing until and go all the way around E line it up

so it looks like this is roughly 10 centimeters one of these major grid lines so let's just line

it up like that just so just to try to get the thickness even on both sides and obviously you

can spend much more time you can turn on snapping you know you can get the measurements exact but

this is just to demonstrate how you would use these skills practically modeling something so

that looks a lot better than the doors we've been making for sure it's more detailed anyway so I'm

gonna pause the recording here and just take a little break and then when we come back we're

gonna finish out this room

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
