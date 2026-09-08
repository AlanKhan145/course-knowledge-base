# 194 — Rails from Curves

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Rails from Curves |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 32:29 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Rails from Curves** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- environment art, asset assembly và scene organization
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


All right, welcome back.

I noticed that the last lesson was a little bit long.

So I'll try to break down the lessons into smaller, like, in terms of time frames. Yeah.

So we stopped at doing that staircase.

And if you remember from before, we used to, like, instance the some, like certain objects

in order to, like, maintain the ability of, you know, being able to switch and deform

all the other objects all at once without the hassle of copying them over and over again.

And I might actually make use of that now, because I also wanted to share another way

of actually breaking the of actually making the rails.

So as we can see here, I will not try to, like, copy it as it is.

But I will just show a few steps and methods other than doing that, which is something

I actually previewed before.

So since I have this, like, object here, let me move it aside and maybe actually isolate it.

So I don't want to go out of focus when looking at the big object here.

What I will do is I will add a plane.

And the intention here is to actually have a curve that looks similar to this.

Let me delete the ray modifier.

I'll just snap this to here. So top right.

And then go into edit mode, select the bottom vertices, and then a G on the Z and just move it up top.

I'm just looking to copy the top part here.

I will also select these, make sure that they are extended as far as this part goes.

And yeah, that's it.

So what I will try to do now is that I will select all the vertices.

If I hit Control B, I can see that there is no bevel happening.

What I need to do is to hit Control Alt B. Sorry, before doing that, I'll show you how

to do things using the shortcut at the bottom right.

So Control Alt B, then I can now increase the vertices to better match my liking.

So I don't need so much geometry.

If things aren't going well, just try and go outside of edit mode, apply everything,

and then hit Control Alt X, make sure that the origin is at the bottom or at least close

or at the center of the object, and then hit Control Alt B again, and things should look

a little better just in case things don't work the first time.

So I'll select the face and hit X.

And again, if you don't have this pie menu, make sure that you activate it in the preferences and add-ons.

I'll delete only faces, so I will maintain the edge, as you can see here.

So I'm maintaining that edge, and I can now convert it into a curve by going to Object, Convert Curve.

And now, since it's a curve, I can control the curve by, under Geometry, I can give it

a little bit of depth.

By default, it's circular. It's round.

So you can change from these settings.

Profile is like, if you want to have a certain profile, there are some presets that you can choose from.

And of course, you can also edit, not only choose from.

So go ahead and do that.

My selection is round because this is the output I'm trying to achieve.

If we press E here, you can see that, no, G on the Y, G on the Z.

So yeah, it's like there sort of should be, at least to my knowledge, there should be

like a start and end to each of the, to any given curve.

So for that purpose, we can just have all curves created, and then we can convert them

later on into one shape, just like that.

So here, we can just, again, I believe that, let's see, if I create a cube quickly here,

change the size to 0.05, and then snap it here.

So this is five centimeters.

If I change this to 0.25, no, 0.025.

So yeah, the depth here is like the radius and not really the diameter.

Because if it's the diameter, just by typing 0.5, you should have the same results, but

this is not the case.

So I just wanted to showcase that.

I'll duplicate that side and then remove that geometry.

We'll go back into object and convert back to mesh.

And now in edit mode, I can create two vertices here by hitting Control R and hovering over that shape.

I'll select these two and these two and hit F.

I'll delete the face, the center here.

I'll actually select these two edges and hit Control I to select the invert, and then delete edge.

Yeah, only edges and faces, there we go.

And now I can convert that into a curve.

Hopefully it doesn't destroy things when we give it, no, that's fine.

So as you can see here, I believe that the railing inside are thinner from the rail,

like from the outer rail.

So let's give it 0.025 divided by two.

You can use math inside almost any geometry, sorry, property that has any numbers in it.

So you can do that with anything that, you know, whenever you are interacting with numbers.

Just some parameters, however, need to have like the, like doesn't accept an integer.

So you can actually, so you should actually use like one, two, three, and four.

But yeah, you can still do equations inside of these like boxes of values.

To make sure that they are both aligned, I believe I can hit Shift S, or we can actually

hit Alt G on both.

Let's zoom in and use two.

I believe I can delete those now.

So I don't really need it.

Again, I will copy that.

Shift D on the X, and go into, no, I need to first clear the geometry by setting that

to zero, object, then convert, mesh, go into edit mode, be on vertex select, just so you

can see what's happening.

I believe adding three should be good.

I see that it's two in the reference, but this is quite larger than the one we are designing.

Let's see how three looks like.

So these three F, I see that the edge here didn't actually connect.

So I'll just hit Control Z and just do it manually.

This also saves me the time from deleting the face.

So I will do the same.

Hit Control I to select the invert, and then X and delete edges and faces.

Go back, go outside of edit mode, and under convert, curve, and do the same.

I believe it's 0.0125.

No, that's the bevel.

I need, oh, it should be that.

Okay, let's do it manually then, 0.25, divide it by two, there we go, and then hit Alt G.

Now we have something to work with here.

Is this looking good? Let's see.

I can move this a little bit down, or I can just, let me decrease that by two as well,

and divide that by two.

Let's multiply this by one and a half, so it's not too thick.

This looks good, actually.

This looks fine.

Maybe I need to space them out a bit, but just don't want to, so G on the Z by 0.1,

so that's 10, G on the Z, maybe you want to memorize the numbers here, you don't have to.

No, G on the Z by 0.1, whoops, so two centimeters up and minus two centimeters down, there we go.

Now we can select that, move it aside, in preparation of coming back to isolated view,

so that it's just not in the center and I'm facing issues when looking for it.

I can duplicate that, put it aside, so that whenever I need to adjust anything about it

in terms of like beveling, adding new geometry or curves, I can just come back to it, because

what I will do here is I will select these curves, and then Object, Convert, I believe

we need to have an active object, I believe without clicking Alt to apply to everything,

this is going to, oh, it's already curved, this is going to be affecting one, no, it's

affected everyone, oh, okay, that's good, I didn't have to hit Alt, that's it.

I don't really need to adjust anything regarding that, I believe though that every and each

of these curves is an object on its own, I can hit Control J to join everything, and

I can hit, I'll just access my Quick Favorites to shade it smooth, and activate Auto Smooth, yeah.

I can now, I can now do something here, which is something called the Remesh.

The Remesh essentially, if you have like these creases that you need to get rid of,

let me actually turn off the Smooth, the Auto Smooth here, you can see that there is the

obvious connection here, and it's like not really welded into the rail, again, however,

what I would recommend is not to do that step, because it might actually affect your performance,

or at least like freeze the PC until you finish from like processing that step, it takes some

time, and you will see why in a bit.

So let's actually save before doing anything, just in case anything goes bad.

So what that does is that like it looks at the object and essentially remeshes everything.

If we go into Edit Mode, you'll see that the geometry looks like this.

But if we were to just leave everything by default and Vox Remesh, you'll see that something

else happened, you know.

What happened is that it's being remeshed in accordance to that voxel size.

So the smaller it gets, the more details you retain.

So as you can see, what happened is it remeshed the entire object.

And essentially, let's bring this to something smaller.

So another O, but make it this five.

So it's the half, essentially.

You know, the more geometry or the more accurate the size is, or the more smaller the voxel

size is, the more it's going to be, you know, more accurate.

Let's actually try the quad as well.

So you select the number of faces, hit OK, it will be calculating at the bottom.

So quad reflow remesh.

The number of faces essentially means the number of, like, polygons, I believe.

It's going to be, of course, because faces are connected to each other, it's not going

to mean that's 4,000 multiplied by four, because some of the polygons will be sharing the edges.

Actually, all the polygons will be sharing edges.

I believe it's going to be maybe 8,000 edges.

And of course, a little over that in terms of vertices.

So as we can see here, 4,000.

Maybe this is something you're looking for.

But what this did is, of course, it just quadrised, if you could say, the workflow.

It's not, of course, as you can see, good with some parts in any geometry.

Sometimes you actually have to have some geometry before actually starting that step.

So I'll just quickly hit Control Z here.

I believe it also, like, deleted one of the objects as well, because it didn't have the correct number.

So it started with the maybe outer, like, rail here.

And as soon as it came, like, to one of these rails, it went out of the number I gave it

at the beginning, which is 4,000.

And as such, it just didn't quadrise the last object. Yeah.

So we have done this.

What else we could do?

I see that these two are connected in a certain way between each other.

So what we can do is, let's see.

So this is the curve.

Yes, this is the curve. I am in stairs. Okay.

You can see that the object and the collection here is going a little bit crazy.

Let me just want to organize things a bit.

I don't need to be looking at this for now.

So I'll just expand my Blender.

And I will hit Shift D, move that on the X, and I'll go into edit mode. I can see. Oh, no.

Let me first remove any of that.

And then in object, convert mesh, I'll go into vertex select, I believe if we extrude

these two by maybe 0.5.

Maybe that's good. Yeah.

Of course, I will extrude it from one side because whenever you array this, it's going

to already have that connection on the other side.

So just pay attention to that.

You don't need to be adjusting things into each other every time you repeat it.

So just extrude it from one side.

And this could actually act as our railing.

I only, however, need these two edges.

So I'll hit Control I, and then X, delete only faces and edges. There we go.

And that, just make sure that it has the same origin as the others because you can reset

them all together.

I'll actually hit Shift S and cursor to selection, cursor to active. There we go.

So that whenever, if I hit Alt G, no, it's going to move there.

That's fine though.

I can just hit Shift S again and then selection to cursor.

Then now they both share the same origin.

Go in and make this a curve, convert, curve, and in the geometry, bevel depth.

Let's see, what was the diameter of this thing?

So I'll hit Control C, I'll hover over that box here, Control C, back in here, Control

V for them to have the same value.

And then I can now select that object, Shift S, if you don't have this menu, again, make

sure that you have the pie menu activated, and then selection to cursor.

And now they both have the same origin, and that looks fine.

I will hit object.

It's not, yeah, it's not the entire length though, because it's coming from the center

of what used to be the curve.

So the curve is in here and the extrusion is from here.

So I can probably shift that by, so it's from the center. This is five.

I believe it should be 2.5, but it seems like this is not it, 0.25, no, G in the Y, 0.025 minus.

Yeah, there is a little difference here.

I believe it's the smoothing maybe.

It doesn't really matter.

Just as soon as it touches my object, I can convert it back into a mesh.

And now it's a mesh.

Select my object because I want the origin of it, not the shifted origin, and hit Control

J. If I do the opposite.

So essentially, what's being active is going to be the origin of the new geometry.

So if I select that and then select that, this has the origin now.

I see two origins, the one in orange and the one in yellow.

And if I combine these both by hitting Control J, this will be the origin of the geometry.

So if I rotate it, it's going to rotate around that.

Of course, if you have it set as active element, I believe by setting bounding box, it's going

to rotate global. It should.

If I rotate down to Z, it's origin. Yeah. Global local. No.

It should be set to bounding box because if we were to go here into object properties

and viewport display and bounds, you'll see that this is the bound of the object now.

And this is going to affect a lot of things in terms of like modifiers, maybe simulations and so on.

I'll quickly switch that back to texture and actually Control Z before even adjoining these

two because this isn't what we're looking for.

We're looking for this.

And now it automatically let me shade everything smooth. There we go.

And now we have that nice looking object.

Now I can just mirror it or actually, sorry, array it.

And now it's going to have that little detail there.

I can now actually not minimize, but just un-expand my Blender, make sure that things

are looking good. Okay.

So, yeah, now that this object has its size, I tried as much as possible to maintain the

I copied it, by the way, I tried as much as possible to maintain the look of the previous

one because I don't want to like keep on editing the like resize and such, although this is

something you will do a lot of times when modeling, again, it's an iterative process

that will need your time and patience.

How we can interact with that bottom part.

I believe we can raise it actually, then go into edit mode and select these, I'm sorry,

by hitting L on these separate objects.

And that's why it's good to have separate curves.

Actually, we didn't need to hit L, we just need to select the bottom faces.

Let's see, sorry, vertices.

I just want to extrude or extend these out by 0.1, so 10 centimeters.

I can now move this up and then back to snap with this part.

So it has the same spacing.

And at the bottom, I'll just maintain that shape.

So to do that, I'll just duplicate that aside, remove the modifiers, no, I need the solidify or do I not?

I believe I don't, at least for the case of the bottom part here, because what I will

do is just hit L on, I'll just make sure that you're on face select, or at least hovering

over what you want to select, then hit L, control I, delete vertices.

I don't need any of that.

Then let's move that aside.

Do they share the same origin or at least on an origin I can merge them with? I guess not.

That's fine though.

I can, I'll just duplicate it to the side here.

Make sure it's centered, or at least I can do this and then G on the X and snap it to here.

It's not being snapped.

So the face of it is being snapped to the face of the other side. Okay.

I have to go the extra step, I guess.

So shift S, cursor to active, and then shift S, selection to cursor, and now they both

share the same center.

I believe because this is being shifted.

It's going crazy, but they both have, should have at least the same area.

Let me isolate these for a minute, and then what I need to do is that I need them both

to have the same ending.

So G on the Y, stop it here.

I don't need that part. Whoops.

What did I delete?

I hit control X to dissolve things, but I believe this is just destroying the geometry.

I'll just hit X and delete each loops. This works.

And then G on the Y and snap it with this part.

Now to look from the top, I just want to center this as much as possible.

I don't want things to look odd in other parts of the railing, and I can just now go

outside of this view, select the bottom part.

Let me actually hit control X on that to make sure that it's exactly in the center, and

then make sure that the bottom is the yellow one or the one selected at last, and hit control

J. And now let me clear the parent by hitting Q and object and data.

No, this is making it a parent, a child, sorry.

Parent, clear parent.

Now it's outside of its parent here, which is the base of the staircase.

I can now move this.

I can delete that now.

Delete, and then I can bring this back here, and since we should have the same like property

of the object, I'll quickly here see what would happen if we were to go to edit mode

to edit mode or, yeah, I will duplicate that, yeah, and rotate it here, select this, and

this should be the one that has like that's being instanced.

Let's check quickly here. Yes, it is.

So what I'll do is that I will merge these two or join, and now we can see that this

part is now being repeated with all the other parts.

What we can do is that we can roughly match the location of it with the other parts.

So let's do that.

I'll just make sure that things are aligned.

Let's align it actually with.

So I'll hit control I and delete the other geometry, the old one.

So I will just hit X and delete vertices.

And now I cleared the old geometry.

What I need to do is just match things together until they align.

At least, you know, make sure that the geometry.

Wait, can we reset that for it to be zero? On the X.

Zero, I believe it should be zero.

And then I need a distance that would make sense in terms of the Y.

Is it Z? No.

The Y, G on the Y, X.

It's moving things together.

Should it be rotated or on the Z by 180? No.

Oh, yeah, I need to increase the distance in the array modifier if I have one. So G on the X.

G on the X again.

Make sure that this is shaded smooth.

No, auto smooth.

Just leave it at auto smooth.

And if I need to add any extra geometry, I'll do that.

This could act as my reference or a controller, at least.

So I move it aside.

Always remember to save.

I just saved right there.

And is this looking good?

This is looking fine.

This is one that we did in instance, which is OK.

These two will be changed as well.

And let's see, and that one as well.

So I'll just delete all these extra railings that we want to change.

I will make sure that we have some distance to work with.

So G on the Y, G on the Y, snap things.

They don't have to be really like touching. That's fine.

I can actually delete the solidify modifier from all these selections. Did that help?

I have to do it manually. That's fine.

It's obvious to see the solidify modifier because it just adds this extra geometry at the top.

So by just looking at it, you know that this part has to be shaded smooth.

By just looking at it, you know that this part has a solidify modifier,

or this object has it, and this object doesn't.

And it's even more obvious if you have multiple objects that are the same,

but essentially different in terms of the modifiers. OK.

Oh, this one too.

Let's delete that.

And I can see that we can move all these

so that they aren't really intersecting with the stair.

So yeah, now we are talking.

This looks a little better.

It's a method that might have not taken too much time,

but just discussing how stairs work is something that might take time, actually. So yeah.

With that said, let's end that lesson here so that we don't have any lengthy lessons anymore

and continue on on the next lesson.

I will catch you right now.


