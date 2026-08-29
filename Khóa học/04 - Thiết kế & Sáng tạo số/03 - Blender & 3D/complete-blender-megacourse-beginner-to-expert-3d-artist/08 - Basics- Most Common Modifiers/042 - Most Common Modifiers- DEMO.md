# 042 — Most Common Modifiers: DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 08 — Basics: Most Common Modifiers |
| **Bài học** | Most Common Modifiers: DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 40:32 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Most Common Modifiers: DEMO** trong pipeline của section.
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


All right, let's get started with the demo for using modifiers when building practical scenes

and objects. So for this demonstration, I'm going to do some columns. I'm going to be doing Doric

columns, which if you're not familiar with them, they're these sort of Greek style columns, but

they have these simple bases and tops. This would not be a Doric column, so not with these sort of

floral details, with these sort of straight geometrical details. So let's get started

with that. We're going to start by adding a cube to our scene, or using the default cube if that's

what you have up. And now let's start by making our base. So I'm going to tab into edit mode,

and I'm going to briefly turn on grid snapping, just so when I move this face by hitting G and

then Z, it's going to snap exactly to this x axis line, which we are using as our floor plane.

So now let's turn that off and grab this base. And

let's bring this down pretty low here. So now I want to prep this for use with a mirror modifier.

And actually, these columns are symmetrical both in the x direction and in the y direction,

so I really only need to model a quarter of it. And I'm going to model this quarter of it

that is in the front right part of the mesh, because it will make it easier to view when

snapping to the orthographic views with our shortcuts. So let's prep this for a mirror

modifier by in edit mode adding some loop cuts. Or you can simply select A and subdivide this once.

All right, so now we have all the points that we need

in order to define this front corner. So let's select all the other points that do not define

this corner, press X and delete them. Okay, so now we just have this front corner,

did subdivide this face, but we can leave that, we'll use that geometry,

that is open in the middle. And we do want to leave it open in the middle because we're going

to close it with a mirror modifier. So in the modifier properties panel, come in, add modifier

and add a mirror. Now it's defaulted it to mirror across the X, which we do want, but we also want

it to mirror across the Y. So just add the Y to that. And we can go ahead and turn on clipping

for this because we do not want to create any holes along these lines. Okay, so let's start

adding a little bit of detail to this. I'm going to actually lower this down a little bit and scale

it in because I want to create sort of a little lip at the very bottom. Extrude this up and maybe

inset it again. And I want to talk a little bit about inset with the mirror modifier.

So when I inset this, it's only insetting this face, but I can change how this inset is performed

on a mirror modifier by pressing B on the keyboard, which will turn off boundary. I

believe it is currently off. Yes, it'll turn off boundary. So basically when you have something

like a mirror modifier on and you inset with a boundary on, it's recognizing this as the boundary

of the mesh that you're insetting. So you would end up with four little extrusions

rather than one large one in the center. So what you have to do is when we inset it,

hit B for boundary and bring it in or enable boundary right here in the inset faces menu.

All right. We can always scale this. If we lock the Z value, we can adjust this value.

Okay. Let's extrude one more time.

It's looking pretty good. It's a good start anyway.

We can add some detail to this if we like. Just add a couple loop cuts and maybe extrude these in.

I'm hitting Shift Z after I press S so it doesn't change the height of these faces. I want them

scaled in exactly at their same height. And you can actually scale them down a little bit in the

Z. I still had to lock the Z value because when you scaled it that way, it would probably not

scale properly. But I just scaled these faces down a little bit in the Z so that when you're

viewing it from an orthographic view, you can see this edge. Normally it would just sort of

disappear the way this one has. So we can fix that edge as well. Let's grab the edge loop,

pressing Alt and clicking, grabbing in the X and just moving it up. And now when we view it in

orthographic mode, we can now see this edge again. And we can do that for all of these,

or we can use things like bevels. So we can grab this edge, we can hit Shift B and bevel it a

little bit. And now in orthographic view, now we can see this edge much more clearly.

Let's put a bevel here as well.

And let's just scale this up a little bit higher. Okay.

So that's good to start for our base. Now let's move on to the column portion. And the column

portion is going to be a cylinder. So I'm going to keep these objects separate for now, and then

we can merge them when we're happy with how it looks. So let's add a cylinder, Shift A, cylinder,

and scale this a bit. I currently have my Transform Pivot set to 3D cursor, which is

why it's when I'm scaling it, it's coming into this point instead of into this point.

Let's actually change that back to median for the time being just so we can

get the width of this right. Move it up.

And let's change the height of this either by scaling it and moving it or by coming into

edit mode and just moving the top face. And let's say about there. And now if you look at

images of these columns, a lot of times they will, they will usually the top will be slightly

thinner than the bottom. So let's just scale that in a little bit. All right.

It's a pretty good start. I think I actually want to add a little bit more detail to the bottom.

Just so this transition isn't quite so stark, because if you're looking at

reference pictures on the other screen, they do have sort of some, you know, extrusions and things

around the round part as well before you get into the main column portion. So

let's just bring the bottom up a little bit and extrude it, scale it,

bring it down a little bit so it's not quite so harsh. Extrude it.

Let's do an extrude and scale.

And extrude and just straight down. Extrude into scale.

Let's bring this down a little. And let's extrude straight down. I do want to make

sure that the widest point of this column is the bottom. Just for visual reasons.

I'm not following any particular design on this. I just kind of have a Google image search of

dork columns and I'm looking at sort of all of them and getting an idea for what types of things

you typically see in these columns. So let's delete this bottom face because we're never

going to see it. It's just taking up memory on our computer. And the same is actually true for

the top face. So now I can shade this whole thing smooth and it should look proper.

I want to smooth out some of these curves a bit.

So I'm just going to do that by grabbing these edge loops and beveling them.

I can repeat a bevel of the exact same width by hitting SHIFT and R and SHIFT and R. Okay.

Another bevel. A smaller bevel for these sort of interior cuts.

Tabbing in and out of edit mode so I can see how it looks. Tabbing back in to fix anything that

needs to be fixed. Okay. That looks pretty good.

So we actually want to do the same thing basically up top, but rather than just repeating it and

trying to get it as even as possible, we can use a mirror modifier for this. So let's divide this

mesh in half. And since we know that this is the exact halfway point, because between this point

and this point, because Blender will always add a loop cut exactly at the halfway point,

let's snap our origin to this because it's going to be our line of symmetry. So

this should all be review, but to snap the origin, SHIFT S, cursor to selected,

tab into edit mode, right click, set origin, origin to 3D cursor. Great. So now we have our

origin right here. So if we come back into edit mode, select this top circle of vertices,

delete them. And now in the modifiers panel, we're going to add a modifier of a mirror to the stack.

We're going to disable the X mirror because we have our X information. We actually have all of

our X and Y information. We're just going to enable it on the Z. So coming back into object

mode, you'll see it's mirroring the bottom piece to the top, and I didn't have to redo those extrusions

and bevels. Now, if I wanted to mirror this, let's say I want the base of this is going to be exactly

the same as the top. You can do this also with a mirror modifier. So let's collapse this modifier.

We still need it, so we're not going to get rid of it. We're just going to add another mirror

modifier to this. So let's just add a mirror modifier. By default, it's on X, which we do not

want. We want it on Z because we want to mirror it on the up and down direction. Enable Z, but

you'll see that because the pivot is at the bottom here, it is flipping it down into the negative.

So it's essentially flipping this underground, and we want it flipped up here.

Now we can do this. We can move this origin up into this point, but we don't have to do that

because we already have this piece whose origin is right here. So instead, we're going to use the

mirror object option in the mirror modifier. So on our base piece, we're going to come into the

second mirror modifier we have, and we can rename these. We can call this XY modifier,

this first one, because it is the one that we have that's creating this entire base from just

this corner along the X and the Y axes. We can call this top bottom modifier. Renaming it will do

nothing to the modifier. It's just if you have a lot in your stack, helps you keep them organized.

So let's use the mirror object. So what that's going to do, it's going to take this object and

flip it based on the pivot of another object, which is exactly what we want. So in mirror object,

either select it from the dropdown or hit the eyedropper icon, select the object. And now you'll

see that this is being mirrored perfectly on the Z axis around this object. Moving this object will

move the way it is mirrored. So you'll see that really the only mesh data we have is this cylinder

and this corner of the base. But with modifiers, we've created the entire column.

So I want to add the sort of indents to this before we move on to joining it, before we finalize this.

So we can do this. And actually,

this mesh is also symmetrical all the way around. So we don't actually even need this section. We

can delete these vertices. We can add a second mirror modifier, and I'm going to drag it to the

top just because that's how I like to organize my modifier. If you like to do anything that's like

a piece of one mesh, like anything that would essentially need clipping turned on

in the stack above the pieces that are like being mirrored around other objects,

that's just a personal preference and like an organizational thing. And we can delete the back

as well. So we just have now this corner. So let's enable X and Y on this first mirror modifier.

And so now really all our mesh data is this strip of mesh. That modifier is going to be

on these objects. This is all we have in our scene, really.

So you can just really see how powerful modifiers are for really quickly flushing out objects and

scenes. So let's turn that back on. And let's make sure clipping is enabled.

I'm going to add one edge loop right here to sort of protect these edges.

And I'm going to select one, two, three, four of these. And I'm not going to select them on

the line of symmetry because I'm about to bevel these edges. And if you try to bevel an edge that

is on a line of symmetry, it won't work. So let's Ctrl B and bevel this.

So now bevels are there. If we extrude and scale this on not the Z, Shift Z,

bring it in. Now this is a little messed up because I had my transform pivot set to median,

so it's only looking at this quarter. So let's just set it back to 3D cursor.

And do we have this extrusion? Okay, good. Just making sure I didn't create any duplicates by

moving those around. So now when we extrude along the X and Y, it should come in exactly to the

center. Now this looks a little funky, and there's a number of reasons, and it's mostly just shading.

We do have to come in however and delete these sort of artifact faces. No problem, just delete

them. So now we really need to fix the shading on this. And I think the way I'm going to do this

is by selecting these,

shading them flat. So you'll see what these shaded flat, and you can see it on the center

one most of all. It's just fixed some of these shading issues, and it's easier to see this

sort of extrusion part. So you can see that if we had every face on here,

like that we were modeling with mesh, this would take a long time. But we only have to

do a quarter of it, and so the mirror modifier really speeds that up.

Okay, look at this. Now we just need to fix the shading on the bottom.

And I believe these ones should be flat as well.

Let's just select all of these and shade flat. Still having some artifacts,

we can fix those in a bit though.

So let's say we're happy with the appearance of this column.

I'm just going to show you that, I believe I went over this in a previous video,

I'm going to fix this shading really quick by hitting A to select everything,

hitting Alt N and pressing Reset Vectors. It's going to highlight some of these edges for you

in blue. And all that means is Blender sees this is a sharp edge, so this edge needs to be shaded

as sharp. And sometimes you want this, sometimes you don't.

You can always come in afterwards and change these back to smooth shading. Select the edge,

right click in Edge Select mode, or come up to the Edge Select menu,

just do Clear Sharp, and that will shade that back to smooth.

So you'll see that the Reset Vectors has fixed all the issues we were having here,

but it incorrectly assumed that we wanted sharp edges here, so we just have to come in and clear

them. And we can make an edge sharp ourselves by, in Edge Select mode, selecting our edges,

right clicking, and hitting Mark Sharp.

Okay, so that's looking a lot better.

So let's say we're happy with this. Now, because we have the same modifier stack on both these

objects, we actually wouldn't have any issues if we were to join them. However, if one of these

did not have one of these exact modifiers that are being modified in the same way across the

X and Y and then across the Z, you might get some issues. And we might even get some issues because

our base is using our cylinder. So I believe that if we join them, these will...

Oh, looks okay. So all that it's done now is that it's cleared the mirror object,

because that object no longer exists anymore because we joined it.

But just know that if you are trying to join two objects together that have different modifiers in

the stack, but you want it to appear exactly as it does in the viewport, the way to do that would

just be to first apply the modifiers and then join them. So you would just hit the down arrow and

apply or Control A to apply each of your modifiers. And you want to apply the top one first and then

the bottom one, as we discussed when we discussed the modifier stack order. And then you want to

join those objects after you have applied all the modifiers on all the separate objects. But I'm

going to leave these because they have the exact same modifiers. It's not causing any issues. And

I think it just creates a smoother, more flexible workflow when you leave your modifiers.

All right. So we have one column here. Now we can use some more modifiers to flesh this out even

more. So let's say we wanted, you know, some sort of Greek temple or something like that. So we're

going to need a lot of columns. So let's make... let's duplicate our column here, but we're going

to do it with modifiers. So I'm first just going to move this over a little bit.

And then I'm going to, to this... let's rename this really quick.

To this column object, I'm going to add to my modifier stack an Array modifier.

So right now it has a relative offset of one, so there's no gap right here. They're being drawn

exactly next to each other. We can just increase this slider to move this over. Great. And now if

we increase the count, every subsequent column we place will have that same exact distance.

So we can increase and decrease these sliders to get roughly the look we want.

I do want an even number, I believe, because I want to be able to

place like a door or something right there.

These columns would obviously be holding up some sort of roof. So let's add that now.

We can press Shift and C to reset our 3D cursor, just to make sure that we're not

in the center again. We're going to add a cube. Move it up. Scale this a little bit in the X.

I'm just changing that pivot point back to median, which is the default.

We'll place these as close as we can here. Scale it.

Now I'm trying to place these exactly in the center by looking at these, but that's a very

inaccurate way to do this. So what I actually probably should be doing is instead of making

an array of six, I should be making an array of three, making my placement on this side,

and adding even another mirror modifier. But we're going to use this mesh cube object as

our point of symmetry. So if we add cube into this, it's just going to flip it and it's going

to be exact. And if I change the width of this at any point, it will mirror perfectly.

So you can see that you can quickly get a lot of modifiers going in your stack,

but it makes your models really flexible while you're working with them.

Okay, so I have this the width I want it. I'm going to come back to this piece in just a second.

I first want to flesh out more of the base of this. I'm thinking like, you know, like an ancient

Greek temple sort of thing. So let's add this, a new cube, tab into edit mode, briefly turn on

snapping so that it's perfectly flush with the floor, turn off snapping, have it out of edit

mode to have our pivot move with us. Let's move it back, scale it up, and with the pivot at the

bottom, it's going to stay there. It's really nice. So that's a little too high, obviously.

Let's scale it to about there. Next, scale it out. And we want to, from the top view,

make it, it doesn't have to be square perfectly, it can be a little bit rectangular.

Okay, that looks pretty good. That's sort of the interior base, you know, like where this would be

like a door in here, and this would be the actual interior of the building.

So we can add a door and we can do that with the Boolean modifier. I'm going to hide this cube

just for right now. And I'm going to leave these up for reference. And then we'll probably hide

them in a moment. So let's rename this to like, building, or something like that.

And now we're going to cut in a door here. So we're going to add another cube.

And we're going to scale it, just looking at these columns, not looking at real world values,

we're just going to scale it to what we think roughly a door should look like for a building

of this size. I think that looks about good. I'm going to inset this back.

So it is intersecting with this main building structure of what these like these walls are.

And now instead of just kind of sticking this cube onto the front of this wall segment,

the way that we have been doing in the past, we are now going to use a Boolean modifier to cut

in a doorway. So we're going to select our building mesh. And let's rename this something

like bool underscore door, just so it's easier to find. Now let's add a modifier here and we're

going to add a Boolean. So our Boolean object is going to be our door, select it. Now if we hide

this object, we now have this indent here. There we go. All right.

So I'm just thinking about the order in which I want to approach these things. Sometimes,

you know, for certain objects, the order really matters. For other things, it really,

it's up to you. I think what I want to do is I'm going to apply this Boolean modifier

because I'm satisfied with this. And I'm looking at some references. I just Googled Greek temple

and I'm looking at some references and it doesn't look like this interior section really

has many windows in most of these. It just has a door

from what I can see for most of them. I'm sure some of them have windows.

And it's up to you. If you decide you want windows in yours, same operation with this,

you just add a Boolean, call it, you know, a cube, size it the way you want it,

call it, you know, Boolean underscore window, place them where you want them.

And then add another Boolean for the modifier stack. Or alternatively, you could, in edit mode,

duplicate this and, you know, scale it to be a window size. And now this is all one object. So

this Boolean modifier is still referencing this object. So if we hide it, you'll see it now has

a door and a window cut in because it is all one object. So there's a couple different ways to do

things. And since I have these windows, let's just add them on the front.

I don't like that one. We're just going to add maybe three here.

You'll see in wireframe with the Boolean modifier turned on, there's these cuts that

are coming across. It's just kind of telling you where it's going to draw these new edges

to connect with these vertices. Okay, let's hide our Boolean object.

Great. And you know, you can do as many as you like, go all the way around,

whatever you like. We are going to go all the way around, just maybe not with the windows.

So let's return to this because you might be wondering what I'm planning on doing with it.

I'm planning on doing with it. So let's see how this is lined up.

In the z-axis. Yeah. Okay. So we don't actually, we're going to extend this out. So we don't

actually need this top face. So let's delete it. So we have just sort of an empty box here.

And you can see sort of the interior of the indents we made with the Boolean modifier.

Let's tab into edit mode on this, which is going to be the roof piece and just grab it, drag it out.

All right. So let's see, it is approximately 10, 20, 30, 40, 50 centimeters out from this wall

is this edge. Let's just check the side. So it's 10, 20, 30, 40, 50 should be about here. So

I'm going to drag it out to about there.

We're going to shift D and duplicate these along the Y and place them. And if you're wondering,

oh, couldn't I use a mirror modifier around this object? Absolutely. Maybe we should,

since this is supposed to be a mirror modifier demo. But once again, just proving that there

is more than one way to model something in Blender. So I've just added another mirror

modifier to the stack. Let's call this like, start naming some of these front, back.

And then if you ever forget what an individual modifier in your stack does, just

disable the viewport visibility and you'd be, oh, this one is the left, right.

The array, we kind of know what the array does. It's the only array.

This is, let's call this local underscore top, bottom. And I'm calling it local because

what I mean by that in this case is that I'm mirroring this locally to create an object.

And then these mirrors down lower in the stack are for mirroring to duplicate that object.

So this one is local X, Y, yes. Local underscore X, Y. And that's just going to

help me keep track of what each of these is doing in the stack. All right.

So let's actually come to top view here. See, this is two, three, four, five, about five.

From the edge. So let's duplicate, shift D to duplicate this.

And we come into wireframe so we can see where the boundaries are. Two, three, four, five.

So now I have these spaced approximately where they need to be. So I need to basically,

for this object that's been duplicated, I no longer want it running through,

want it running this way. So let's change our array to zero

in the X. And let's change it to,

negative one, let's change it to one in the Y. And then just slide it up. I think it was at,

what is it at for this one? 3.4. Let's go 3.4. And reduce our count down to two.

And still, because this is not exactly square, we have a little bit of leftover.

We're just going to increase this relative factor on our array modifier until it looks

approximately even. Looks pretty good. Okay, so we want to pitch this roof.

I'm going to do that with an extrusion. Because these roofs on these sort of Greek style temples

have a portion where they just come straight up, and then they pitch in after that. So

let's extrude this face. And in fact, we can be using a mirror modifier on this one as well,

because it is exactly the same left and right. And mirror modifiers help keep things symmetrical.

Let's grab this in on the X. Looks pretty good. So now, these, these vertices are so close together,

there's no point to having both of them. So let's box select, and you can come into wireframe to

box select to make sure that you're getting them both. Just make sure there's no actual

geometry behind them. You see, obviously, I cannot select something that's, you know,

them. You see, obviously, I cannot select something that's just being produced as part

of a mirror modifier. And also, it's in a separate object. So M at center, M at center.

Okay. So I'm not going to spend too much longer on this.

Demonstration's getting sort of long. But we're almost done. So let's just push through

all I've done is inset this face with I, and moved it up a little. I'm going to hit E to

extrude it and bring it in. I'm going to delete this sort of artifact face that's created between

them from the mirror modifier. Create that inset edge and scale it in ever so slightly,

just so that we can see it from the front better. Oops. And I did not have clipping turned on for

this. So it created a hole. So I'm just Ctrl Zing to undo it, enable clipping, and scale it again.

Cool. Let's create a quick base for this, another cube.

Going to tab into edit mode, briefly turn on snapping.

I'm actually going to put this at the top because I want it to come down.

And I'm going to grab that and make it, oh, I don't know, 0.5, 50, 50 centimeters.

Okay. So now we need to scale this on the X and maybe bring it forward a little bit on the Y

without snapping enabled. I'm just trying to create sort of an edge, something that sticks

out a little bit. And I'm going a little bit quicker now because I'm trying to finish this,

but you'll just see it's created like a little bit of a lip for these to sit on.

And we can create sort of a more, scale it like just a couple steps up to the foundation.

Again, this is not architecturally accurate, but it does not need to be for our purposes.

It looks pretty good. Now I made this inset on the front and I forgot to make it on the back.

Let's just duplicate it by cutting this mesh in half, deleting the back and enabling Y

on the mirror modifier, but we just need to move the pivot. I think we could even do it that way.

Yeah. So we didn't even need to move the pivot. We just added this building, this block part

as our object for our mirror object in the mirror modifier.

So you can continue on with this, adding more detail, putting in the doors,

things like that, but that is going to wrap up this demo for how to use

modifiers when modeling an object. And I will see you in the next one.


