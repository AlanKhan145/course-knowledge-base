# 034 — Create an Object with These Operations Pt. 3 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Create an Object with These Operations Pt. 3 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 36:43 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Create an Object with These Operations Pt. 3 DEMO** trong pipeline của section.
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


Okay, we're back. I just wanted to test something quickly off camera to make sure that I could

accomplish it using only the tools we've covered. So I was thinking it would be interesting

to add a sort of a little cupboard under this this stairway just to, you know, break it

up because right now it's just sort of a monolithic block right here. So this is totally achievable

using stuff we have covered. So the way I'm going to do this is by cutting some edges

in between these vertices here. And we're going to do that using the join operation

we went over in a previous video. So we're just going to select the two, the two vertices

here that we want to join across the face that we want to split. And just do that by

shift-clicking and press J. And then we're just want to, and it creates this triangle

here and we just want to continue this line down to about here. So make a selection, make

another selection, J, and continue that to about here. So now we have these edges cut

diagonally across this mesh. And because we used the join and not the fill operation,

these faces are all split now. So what we can do is start selecting some of these faces

until we get the shape we want. And we're just going to extrude this in. I had snapping

turned on and I'm not sure I want it quite that deep. So let's just bring it forward.

And now you'll see we have the flickering happening again, this Z fighting. No worries.

Delete these faces that are part of the stairwell object so that the floor is part of this plane

floor. So now we have sort of a little indent here. I'm quickly selecting this by using the

shortest path. You can see it here, pick shortest path, which is again, just achieved by holding

control and clicking. Maybe a little bit deeper. So now let's put like a door of some kind on this.

So just trying to visualize how I'm going to do that.

And I think, actually, we're going to undo some of this extrusion. We're going to leave

all the cuts we made. We're just, just was trying to picture it in my brain. And I think

we want the door to be thinner, even though we want the whole, this whole thing to be wide. So

just trying to think that if we really need this to be,

to really exist in this model, like this hole under the staircase space, or if

we really just need the door, because it's never really going to be open. So I don't think we're

actually going to view it. So you can make the whole space by doing what I just did there. But

I think I'm actually just going to make a little door here. So in order to get a door, that's this

shape, I'm just going to control and click shortest path. And I'm going to duplicate just these faces.

Same way we do it for individual objects. So just shift D, and I can press Y to just pull it forward.

Now I want this selection to be separate from the rest of this staircase mesh. So the way I'm going

to do that is by clicking P on the keyboard, which will bring up the separate menu. And we will go

over this in more detail later, but we're just going to click by selection. And all that will do

is separate the selected faces you have into a new object. So when I tab into object mode,

I can have these be separate. So let's tab into object mode, select only this new door plane we've

made. Let's pull it out a little bit so we can see what we're doing. Let's tab into edit mode.

A to select all, E to extrude it back. Now, yeah, okay, it's looking pretty good.

Now, the thing about separating parts of our mesh from each other is that it messes up our

pivot points. So the pivot point for this object is still over here because we separated it from

this object, which had it here. So we just, all we have to do is just snap it the same way we've

been snapping things before. Shift S, cursor to selected, right click, set origin, origin to 3D

Right click, set origin, origin to 3D cursor. So now if we rotated it,

you know, it opens like a door. And if you wanted to have this open for your scene,

you know, you could come in here, you can add an edge loop to sort of protect this edge and

um, take these ones and extrude them forward to create the rest of the cupboard.

I just hit slash to view it in isolation, just so I can get a feel for,

like, we don't need any of these bottom faces because it's always going to be sitting on the

ground. So let's just delete them. And it's totally okay in, in 3D modeling, if you have

sort of open bottoms and things like that, it's not going to cause any problems so long as,

you know, these, it will never be viewed from this angle,

but it shouldn't cause any sort of technical problems with it.

So hit slash to move out of local view.

And using that, um, hit alt R and just clear that rotation so it snaps it back.

Now I want to make a doorknob for this, but I don't want to remodel a whole doorknob,

because I already have a doorknob, but it's joined to this door mesh. So we're going to use the

separate function we just did. So we're going to tab into edit mode on this door. We're going to

select this doorknob by selecting a single face on it and pressing L to select everything linked

to it. Same thing with this part. And we're going to duplicate it with shift D, bring it forward.

And now we're going to separate just our selection by pressing P and clicking separate selection.

And that's it. Now let's, um, tab out of edit mode, select just this new doorknob, and let's quickly fix

the pivot point. Um, we're just going to set it to the center because we're going to join it to

this object anyway. Okay. So now let's just place it.

And then we probably want to give this an inset panels, um, the same way we did for this one,

just so it is a little bit visually consistent. So let's select every face on the top half of this

and press I to inset. And now individual is still turned on. So we'll, it's, we're insetting every

individual face, which we don't want in this case, because this is going to be a very, very

we're insetting every individual face, which we don't want in this case, because this door is made

up of a lot more faces. So let's hit I to turn it off and just have a single selection.

And let's do that again down here.

And you'll see that things have gotten sort of wonky here, but because this is all flat,

you won't be able to tell. So let's just make this selection, hit E to extrude it, bring it in.

And now let's go up here, click individual origins and scale these in. So you'll notice

that it's not scaling each individual face. It's, it's scaling individual origins based on your

connected selections. Um, it's just something to keep in mind with Blender is, um, you know,

it's kind of just something you have to memorize, unfortunately, is that that's how

individual faces work sometimes, depending on how you have it selected.

Cool. So it's like a nice little cupboard under the stairs.

So you can continue filling this out as much as we like. Um,

yeah, let's just move a little bit quicker

to try to fill this out. And again, spend as much time as you like, or you wish to

on this piece. I probably will not be, you know, finishing this whole room into exacting detail

again, because this is just a demonstration to give you the idea of how these operations,

how these tools can be used practically when modeling. So let's inset this face with I

and extrude and scale it in ever so slightly, create sort of a picture frame. Yeah.

So like if you had, um, you know, this was like,

let's say this was the front door of a house, you know, or something like that, you would come in

and have your sort of entryway. And, you know, maybe you'd have more of a room off here and

this would lead to another room and you'd have the stairs. So you'd have, you know,

things hanging on the walls and stuff. I actually, I'm not really liking how these

stairs are looking. I'm not going to redo them, but I am going to come back

and add, um, you'll see stairs, especially interior stairs, sort of have this like lip

that comes out from this edge. It'll come out like that, come back in and then go down to the riser.

So we're going to add some loop cuts into this, and we're going to do this as quickly as possible,

but just control R clicking, sliding, and eyeballing the placement of these.

You'll see that this loop cut is broken here because I have divided this into triangles,

sort of the same with the loop selection we talked about is that Blender no longer recognizes it as

a loop when it hits something that has anything other than four faces. So a triangle or even a

five-sided polygon, um, anything with more than four sides, uh, any face with more than four sides

in Blender and in other 3D modeling programs is called an Ngon, which just means N is, you know,

sort of the math term for any variable number of sides, and gon is coming from the term polygon,

which is, you know, just sort of the other term for faces. Just a little fun fact for you. Okay,

so we've added our loop cuts all the way down, or all the way up, I should say. So now

let's grab these front ones. Oops. And let's just extrude them out ever so slightly.

And do the same thing on these ones.

That looks a lot better. And we can even, uh, continue to add detail at finer and finer levels.

Actually, I think I'm only going to do it on these, on the top ones right now. Select this top corner.

Or, yes, top corner edge, I should say. And let's bevel it with a CTRL-B,

just to give it more of a rounded sort of shape. So now when we tab out,

that just looks a lot nicer, in my opinion.

Okay, let's add like, um, you know, some furniture. And I'm not going to make this

furniture very detailed. Again, this is just a demonstration. But, you know,

but, you know, you might have something,

you know, under these photos, like sort of a credenza or something of that nature.

I like where the pivot point is. So I'm going to edit mode to do this.

Just using all my transform tools. And let's scale this in.

Oops. Now, I press S and then X on this, and you'll see that nothing is happening.

It's because I'm scaling these along their individual origins. Which, with a face that

is oriented this way, it has sort of an X scale of zero already, because it is flat along the

X axis. So to fix that, all we have to do is make sure we come up here, change it back to median

point, S, X, and now we can scale it in the way we expect it to go.

Just shifting those up so they're not creating, you know, tangent lines here.

Now, let's say there's like, um,

like cabinet doors. So I want to make a section of three individual cabinet doors,

or where cabinet doors would be. Because I think if you just do two, this piece is too wide,

and it's going to look strange. So let's do it this way. Let's grab all of these. Let's hit

Inset, and then hit I again to make them individual. Let's extrude these back.

Let's just go all the way back. Why not? So now,

what I can do from here is I can make, you know, a door, like a cabinet door,

just with another cube, same way we've been doing everything up until this point.

And again, I'm not going to spend, oh, not even as much time as I did on this door, even less.

Let's give it an inset just so we can see it a little bit better.

Cool. Let's add a, let's add a, let's add a, let's add a, let's add a,

pull knob. And I'm going to do that by duplicating my doorknob again, and just scaling it.

So same thing as we did to make this doorknob, we're just going to tab into any of our doors

that have a doorknob, doesn't matter which one. Actually, we didn't even join this. So we can

just, we don't even have to separate it. But you could go in, if you did join it,

go and select it, press P to separate it by selection. But we did not join this.

So let's just duplicate the knob, place it roughly over here,

and then scale it so it's appropriately sized for this piece.

Cool. Let's shift D X to make another one.

And you can make it whatever like design you like. I'm just trying to do this relatively quickly.

Let's add some shelves on this side.

Roughly basing this off of a piece of furniture that I actually have in my house,

which is why I'm doing it this way.

Just going into wireframe because I was having trouble seeing this edge

from the front. But I'm not ready to scale it or bevel it yet.

I'm just trying to get the shape of this in. And you could, you could do these shelves by

adding loop cuts and, and just doing that. But I'm not going to do that because I don't want

to get the shape of this in. And you could, you could do these shelves by adding loop cuts and

filling them. But I think in the long run, it's going to be better

in this case to just make them separate pieces and join them afterwards.

Let's join them. And for the purposes of this, like I'm never going to have these doors open

for the purposes of this. So we can just join them all to this piece. If you wanted

anything to be openable or interactive in any way or animated in any way, you would keep

the doors separate from this mesh to animate them. But since I'm never,

ever going to see the inside of this, we're just going to join it.

Now I want to create sort of a lip on the top piece, sort of in the same way we did for the

stairs. So to do that, because I have these inset, I can't add an edge loop across this way.

Because if I try to, you'll see it adds it around the loop that way. So instead, how we're going to

do it is by grabbing the top faces and extruding them up. And that will create this edge right

here that we need. Let's extrude this. We're not going to do it all the way around, but we're going

to do it on the sides as well. So I'm going to hit E and S and then I'm going to hit Shift Z

because I don't want these faces to create an angle like coming up this way.

You can see it didn't scale exactly uniformly and that is because the scale of our object is

not uniform. So you can scale it a little bit in one direction and then grab it and then move it

until it's even. Or you just undo that through that quickly. If we apply the scale of this

by hitting Ctrl A, bringing up the Apply menu and pressing Scale, we come into this now,

it should be more even when we hit Extrude, Scale and Shift and Z.

Except that I don't have my selection done properly.

There we go. Missing a face. Let's see. Okay. Extrude, Scale, Shift Z. And it scales it slightly

more evenly. It's still not exact, so you're probably going to have to come in here and just

press G and Y and scale it out. And now these things not being straight really doesn't matter

because this face is flat. So when you tab into Edit Mode, you can't see it. But if it bothers you

and you just want it straight, you can come in and move them.

If you just want it to be like a really pretty wireframe.

All right. I think I actually do want the window right here. So I'm just going to duplicate it

across the Y, snapping on and move it. So now I have a window there.

Resetting my 3D cursor in my camera by pressing Shift C,

just so that it's not obstructing my view of this area.

I think I'm going to add some sort of sofa right here or something.

It'd be a little bit strange to have a sofa right off your front door, but say it's not

your front door or say you live in a smaller apartment or something, you might have something

like that. Maybe we'll just do an armchair or something.

So I'm dividing this up, like these as the arms. It's more of a loveseat, I guess.

And then this for the back. So now we need to add a couple more loops. Let's say the seat

would be right here and come in and then up. So now all we have to do in theory is delete these faces

and fill them in. So we're missing a little bit of information we need in order to fill it,

but it's no problem. We're just going to select this one edge and we're going to come down here

and extrude it until it's lined up with this line in the front. So now that we have this face that's

been extruded out, we can fill this in. So I'm going to go ahead and select this face.

So now we can fill this properly. Let's fill in our quads just by making our selections and

pressing F and F. So it's a little boxy and obviously, you know, you can spend a lot of time

getting the shape just how you want it. I'm not looking at a reference or anything,

so I'm not trying to make it any particular shape necessarily, but just sort of the general idea of

seat or something like that. So I've just grabbed this back and elevated a little bit because

typically the arms are not going to be the same height as the back. The back's going to be a

little bit higher. Let's add a loop cut and turn off snapping for right now.

And we can just really take our time and let's go into local view so I can see what I'm doing.

So I want these to be obviously not slanted that way because that would be extremely bizarre.

Just in wireframe and I'm selecting through it with the box selection,

so I'm selecting both sides of this at once.

And then let's maybe grab just these front edges and bevel them with CTRL B.

And maybe even grab this whole loop and bevel it to give it more of a curve.

Just selecting and hitting CTRL B on all of these to create the bevels.

And I'm selecting both sides of these at the same time because I want to make sure that my bevels

are even. So you can do that by making a multi selection or by beveling and then being like,

OK, I like that width. I want it over here. As long as you don't have to bevel it,

or by beveling and then being like, OK, I like that width. I want it over here.

As long as you don't do anything else or tab out of edit mode, you can make your selection

shift and R and it will repeat that bevel to the same width.

Let's change the shading on some of these.

It's by using the shortest path, selecting, CTRL and clicking. Shade smooth.

Clicking, shade smooth.

Shading is a little funky on these and that can happen sometimes.

You'll notice that I can't fix this by applying the scale, because when I tab into

object mode and look at the scale, it is still at one. So that scale apply thing,

you know, it just it just wouldn't do anything because it's already at one. So

there are other ways to fix this, and this is a little bit more advanced.

But what you can do is reset your normal vectors. So

the shading, without getting too into detail about how this works, but the shading is calculated

based off of like the direction that each of these vertices, edges and faces is facing.

And sometimes it gets a little out of whack when you bevel and extrude a lot of stuff. So

to fix it, something that I have noticed that has worked a lot for me in the past

is selecting everything on your object. You can just hit A or you can in wireframe just box select

the entire piece. So once you have everything selected, you can hit alt and N to bring up this

normals menu. And we discussed what a normal is in the previous video. So a normal is a

we discussed what a normal is a little bit in the extrude video, and we're going to get more into

what it is in a future video at a more advanced level. But just for now, know that if you get

this kind of funny shading, something that sometimes works is coming into this normals

menu, alt N and hitting reset vectors. So you'll see that these like strange edges we were getting

are now gone and it just looks a little bit more smooth.

So I'm not going to spend too much longer on this piece.

You know, you could, you could either add like cushions as separate objects, which I

recommend doing a separate objects, but you could also do it by, you know, adding a loop cut in the

middle and extruding these pieces. But let's go into wireframe so we can see what we're doing.

Let's get this approximately

the sort of the width we need it.

Let's make it squishier.

And let's move it over to the left and right here so we are getting it the right size.

This is going to be sort of the bottom cushion and I may need to drop this, this face a little bit.

So to make this less harsh looking, I mean, we could change the shading, but we can also

with everything selected, control B and start beveling it.

And then increasing the number of segments to round it out. Now I'm getting sort of an uneven

bevel and I don't really like that. So let me undo that. Come in here. The scale is all messed up.

So let's apply the scale first. Now we have ones in every category here.

Tab into edit mode and let's just do that bevel again. Control B. You'll see it's a lot more even.

So applying the scale can really help with all manner of sort of troubleshooting issues. Like

when I, something is not behaving the way I expect it to in Blender, the first thing I typically check

is the scale and seeing if it's not uniform.

So we can add some like fluffiness to this a little bit. Let's turn on proportional editing

so we get sort of a smoother fall off. Actually, before we transform this face, let's add some

loop cuts. So now I'm going to grab just the center one and with proportional editing on,

I'm going to go G and Z and just kind of pull it up to give it sort of the illusion that it's like

more of a cushion and less flat. So it's currently in flat shading, so it looks all sorts of funky.

So let's shade smooth. And if this is still too harsh of an angle for you, you know,

all you have to do is continue to add loop cuts or subdivide it further. So generally,

the more smooth you want a piece to be, the more vertices you need.

That's just sort of a general principle of 3D modeling.

Cool. So we have like a basic cushion. Let's shift D and X to duplicate it.

So

shift D.

Rotate that by 90 degrees, negative 90 degrees. Scale that on the Z. Grab it along the Y.

Duplicate it along the X. That's like a, that's a halfway decent, you know,

sofa, loveseat. You could bevel these edges to make them less, um, less harsh as well.

So I just use the shortest path operation by control clicking shift on this side,

control clicking to get that selection. Let's bevel it with a few less. Now, when you bevel

things, you might notice something like this happening, this sort of overshoot. That's

because your vertices were too close together on the edge that you beveled. And so they've,

they've sort of gone, they're overlapping each other in a way that is not ideal.

So, um, you can fix this manually by merging these, these vertices together, these two,

um, or you can select clamp overlap on your bevel operation,

which actually for some reason did not work. Typically,

if you have clamp overlap selected, this will not happen.

Strange. Typically this will clamp these two together, but it will also limit how much you

can bevel something. So when it reaches the point where these two vertices meet,

it will just stop the entire bevel operation. Um, but let's just fix these by merging them

and click at center. And then same thing is going to be wrong on the other side,

cause we did this evenly. So select both those vertices and press M and click at center.

So now this just forms a triangle, but, um, no big deal.

Now, when you reset the vectors, it's not necessarily going to be, um, perfect.

And we'll get more into this later, but

there are certain things, uh, it's the reason that it still is looking kind of funky is because

we shaded this smooth, but it has these 90 degree angles in it, which by definition cannot be smooth.

So we can either, you know, round out these edges or we can shade like the bottom flat

flat because this forms a 90 degree angle around here. So let's just shade flat. And you'll see

that the part down here that was sort of looking strange was fixed by shading this flat. So,

and I believe that hide these cushions really quick. So you can either round these out, um,

or where you have these 90 degree angles, shade them flat and that will fix the issues over here.

Okay. So again, not spending a whole lot of time on this,

just giving you another example of how to use some of these operations.

Okay. So I think I'm going to leave this demonstration here because I think you get

the idea. Now, if you have followed along with me and you want to finish out this room, and I

suggest that you do on your own, finish this out. Um, you know, all you have to do is just keep

adding to it. Um, you know, you can add a railing right here. If you're looking for some suggestions,

you can add some end tables right here. You could add maybe a rug over this part, um, really whatever

you can, you know, you can think of, you can even extend this and make, you know, an entire house if

you wanted to with just those operations. Um, but for the purposes of this demonstration, I'm going

to conclude it here. I do encourage you, however, to continue forward with this and finish out at

least this room, just so you really get a lot of the practice using, using these operations.

So that's going to wrap it up for this video in the, um, next section of the course, we're going

to be going over, uh, ways to create and model things in a non-destructive workflow. So I will

see you in the next section.

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
