# 218 — Animating Destruction

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 32 — 3D Environments: Destroying and Detailing Assets |
| **Bài học** | Animating Destruction |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 38:17 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Animating Destruction** trong pipeline của section.
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


All right, welcome back.

In the previous episode, or the previous lesson, we looked at how we can destroy this model quickly.

But then again, I went back and then copied my entire object again, or the entire like

different parts here.

And then I added them or applied first applied all the modifiers, then applied all transformations.

And whenever I struggled with applying any type of transformation, I just went ahead

and made it a single user.

You'll see that it's going to say a port, a ported because it's like it's a multi user or something.

And then you can just select the object, if it's a multi user object, relations, make single user.

And you know, you can select the entire entire, like the entirety of the models and then hold

alt and then make them all single users, just like we showed before.

So this is a clean model, where everything is copied.

And everything, sorry, everything is all the modifiers has been applied.

And all the transformations has been applied as well.

So what do we want to do now?

Well, now, what we want to do is simulating this in a better way, essentially, we can

do this in a multitude of ways.

Honestly, I thought multiple times about removing the bolts from the scene, because simulating

them would be quite difficult, simply because I'll show you now, you know, essentially,

what you need to do is that you need a plane where it's going to act as a ground, don't

right at the at the at your object, just make it have some space a bit, because this will

help with, you know, clipping, you know, you know, what will help with your object, not

to clip through your plane.

And I'll go down into the physics step and made this a rigid body, and then call it passive.

Now, if I select the bolts, and give it also a rigid body, but it's active, if I hit play,

they're all together, like it's not, it's not one shape, I think we can get rid of that

shading tab, go to timeline, then switch back up here.

So another thing we can do is that we can go into edit mode, and then hit A, and then

B, and separate by loose parts.

And now each one of these will be a bolt, we can now move them into go out, M, new collection,

call it ready bolts.

And I will rename it to ready bolts, and then hit OK.

And they have now moved into that bolts collection.

And I can just drag that, drag them there into, you know, under ready.

And I can now select like one, one object, you can zoom in on that.

And if I hit Shift G, I can select collection, maybe no, yeah, ready bolts, yeah, I can select

the entire collection.

And now you can see that they all have that same physics, I believe, yeah, they all have

the same physics.

So if I hit space, you can see that things aren't so good, because what we need to do

is that we need to select all of them again, and hit Ctrl, Alt X, and origin to bottom,

like each one should have its own origin, so that nothing should.

Now, you can see that all of them has now, you know, turned into like these mess.

But I'm only simulating the bolts here.

Whenever things get too crazy, and I mean, when we simulate like different other stuff,

this is going to get a bit more difficult.

So I think I'll believe, I think I believe that I will, we will maintain, maintain the

the bolts in inside the object.

And maybe after we just do the simulation for the entire scene, then we will be able

to break things into like more smaller parts.

And then we can simulate things in a better way.

So we'll just combine these two, hit Ctrl J. And let's see if we have any other bolts

that are not connected.

Ctrl J. Now we'll just do this for the entire bolt population, if you could say so.

Both, Ctrl J. This will make things, although that, although that they are not that realistic,

which, you know, is something you might be looking for if the, if the outcome of your

modeling will be viewed from a close up shot, then again, like I showed you how you could

go around that, it's going to be by, you know, you know, separating all the bolts from each

other, and then do that, just like so.

We could simulate the curves in a different fashion.

And I will show you how.

Do they have a lot of geometry though? No, not really. That's nice. Okay.

So what we want to do is that we want to give all of these objects a rigid body settings,

you know, activate the rigid body for them.

Each of these, if you can see here, they have like different settings.

And if I increase the mass for each of these parts, this will slightly change how things

look like in the, in the simulation.

So I'll just quickly here, add everything back into collections, and then I will get

right back to you. All right. Welcome back.

So I've added everything into like its own collection, and now I can start giving each

of these a rigid body physics.

I can activate the rigid body physics for each of these.

And now I don't want to have to select everything, I can just hit shift G, shift G, and then

sublinks. No. Shift G. Maybe children. No. There we go. Yeah. Collection. My bad.

That makes sense.

And now it can hold alt and press rigid body.

I don't think it activates. No, it doesn't.

But yeah, I still need that selection though.

So I'll just give it that.

Maintain the same settings and go into object, rigid body, and copy from active.

So all of them have the same setting now.

If I hit space, we all do that odd thing.

What we need to do is that control C, control Z, they all share the same origin point.

This will cause a problem because it's as if, again, there's this drawing of the bounding

box around your object, and that bounding box is how things interact.

So essentially, or by default, it's convex hull, but even with convex hull activated,

so this essentially picks up roughly the exact same mesh-like surface encompassing.

So as if you have your actual look of the object interacting with the other objects.

But when the origin shifts away, now Blender needs to calculate that shift because it's

essentially included in the object.

So this is a quick explanation for why this is happening.

I'll quickly switch this back from bound to textured, and then hit control alt X and then

origin to bottom.

Now of course, each one of these has its own origin.

Even after you have the physics tab, you don't really need to go back more than that.

Again, you will find some odd interactions simply because, again, like that tilt might

actually cause that issue.

And another thing you need to look out for is that these objects aren't touching because

if they are, this is also an interaction that might occur between the different objects.

Now we can change these to tons, one ton, 1,000 kilogram, and then rigid body, copy

from active, and let's see how that interacts.

It sort of interacts the same because we need to space thing out.

If I hit S, it doesn't matter if these two are not touching.

I believe this is the only part that's touching here. That one too.

So I believe that side, yeah, here. Okay.

So one, two, and three. No.

Let's just rotate things.

Doesn't matter now if we go outside of the model.

Yeah, that one can do this.

And now this model is now falling according to the actual object.

Let's quickly do something here, which is I want to see how the object would interact

if I were to activate the rigid body for both of these.

So maybe 5,000, then object, copy from active, rigid body, copy from active.

This might go crazy, but yeah, it is.

The reason is the object here are intersecting, so we can do things.

We can either make a hole in the platform, or we can cut the object here in half, and

this could help us with that.

Yeah, this catapulted the four main structure parts here.

So we can go around that by, this has like a crazy rotation, shouldn't be intersecting

We can probably combine these two, you know, to save some time.

We can probably do this, and of course, that shouldn't really fall that hard.

We can go ahead and select all these main structures, go into edit mode, then in the

side view, I can just go to knife tool, and then while cutting, I can look at the bottom

to see if I can cut through, it's C, so I need to align to X, no, Y, there we go.

I should probably redo that.

So Y, am I cutting through? Yes.

Then enter, and now I have that seam, I probably shouldn't have everything selected from start.

I'll just click away once, and have it clean again.

So I'll just do that knife again, just click away, hit Y, and I make sure that at the bottom

here, cut through is activated, I'll hit C once, so now it's activated.

Then hit enter, and now I have an edge here on all the objects on the same level.

So if I hit control B, and hit three X faces, and then I should probably hit L on each of

these parts, because these are now going to be new objects.

Probably go in here, select all these, and then P, buy loose parts, and then no, not

loose parts, P selection, there we go.

And now each one of these can have like its own origin.

Hopefully that fixes things up a bit more.

That throws the thing way to the bottom.

Let me just increase the height of that a bit.

And now the falling here makes a bit more sense.

So I'll save that, and yeah, I'll go and add the rigid body to all of these.

Let's go hit start.

What do we have as that?

Yeah, I'll select all these, and select one of those, and hit objects, rigid body, copy

from, no, this is the active, there we go.

Objects, rigid body, copy from active.

And now I believe even the top structure parts are now going to fall with me.

So I've now added that to all the structures.

I can now probably hide that.

So these are only the platforms now.

Let's try and give this a quick destruction and see, click explode, and see how this would

look like if we were to, this looks like, you know, it didn't really explode, just active,

and this is passive. Particle.

Particle system.

Move that a bit down.

I think because it's a particle system, it's not interacting with my floor here, which

doesn't really make sense.

But then again, like, I don't really want that effect of explosion.

It's not really the scope of the actual scene here.

So I have only these two, which is what we want.

So these are platforms.

I'll just hide these, and then give all the body, rigid body, I'll leave it as is.

Maybe give it some mass as well, and then we can go ahead and objects, rigid body, copy from active.

I just wanted to make sure that I've only selected these three.

Why did that go crazy?

Oh, I believe because the structure is doing that.

Yeah.

I mean, we can go around a lot of things here, but I don't think that this is, actually,

it's not too bad.

I just want to scale things.

And the Z, control, alt, X, make sure that they have their own origin.

Something is still causing that crazy movement.

Probably the big structures. We'll see now. Oh, the origin.

Should probably select everything here.

Control, alt, X, origin to bottom.

Well, we have a lot of multi-users as well.

So objects, relations, make single user, hold alt and object in data.

Now, if I control, alt, X, origin to bottom, this should work.

And now they're not sharing the origin, but you still see that they catapult. Catapult.

Sort of.

We can unhide the platforms.

It's just a process of, you know, finding the good spot of, you know, have to do this

in one place.

We can do something a bit crazy, which, like, I wouldn't say crazy, to be honest, but I'll

just add a cube and then move it by one unit up so that it has the origin at the bottom.

I'll snap it to the ground.

Then scale and scale.

Then scale. Scale on the Z.

And under here, I'll view it as wire.

And that could act, like, I can just move that down for now.

And then I can just scale that, like, put it even down further. Hit control S.

And let me try something crazy here.

It might either go too bad or too good. Passive.

I think I understand why.

I'll hit control A and alt, control X.

Still, it's probably because the normals are facing.

We calculate inside.

Calculate outside.

Let's do this, like, let's cheat our way into that.

What I'm trying to achieve here is I'm trying to draw a box around the actual object here.

So let's see if this works.

It doesn't again. Okay. Control Z.

And I think I'll just duplicate these around.

R and Y by 90.

Alt D on X.

Rotate it on Z by 180. So let's see.

Now it interacts with our object here, which is like the plane.

I can move these into a new collection called maybe collision.

Then, okay.

So I can have things a bit more organized.

You can then hit alt D. R and Z, 90.

You can see it's rotating away.

So I'll just hit minus to make sure that it's in place.

I'm sure there would be like a more efficient way to do this than dispersing.

Like having an actual domain would probably make much more sense here. But let's see. G on the X.

It's fine if they go up.

Just making sure that my simulation is working here.

So I'll just select all of them and then bounce.

No, I should have alt and bounce. There we go.

Now I can just see through them, which is super nice. Alt D that.

R on the Z by 90.

Make sure that it's facing the right way.

You can probably squeeze that space even more. G on the X.

I don't want the debris to be so much far off my model here. So let's see.

Control S, always save your object.

Always save your file.

And that's looking good.

Things are being dispersed.

Let me see if by hiding that we will still have our simulation here.

Yes, we do. Awesome.

I'll just have to remember to hide it from the render view.

Then you can just change the background here to something. There we go.

I just want to see.

Things were just too vague.

So we have simulated the structure and the body.

Not all of it, but let's hide the platform.

The body, these two body. What else? That too.

Now we have these two.

Then what else do we have?

That, this, and the doors.

And these bottom platforms. What else?

This and that big cylinder.

We can just select everything.

Control select that twice because it's hidden.

And then let's have an active object here.

And then I'll just add the rigid body to it.

I think after doing that we will have to add a roof

because things will just catapult through the entire scene. Then object.

Rigid body.

Copy from active.

And then I'll just shift click that twice.

You can see that without the shift I'm not just hiding anything.

So we'll just do that for here too. Go back. Hit space.

Yes, it catapulted.

I think we will need a ceiling. We'll see now.

Something clipped through which is not nice.

Just hold down the platforms. The collision.

There we go.

I will alt D that on the X.

And then we can maybe move them all up.

Like I don't really need a ceiling.

Just move them up. This helps. Come on. Go inside. Oh, it didn't. Oh, it did. Awesome. That's cool.

I think we might need to extend the simulation to maybe 500 frames

because you can see that it stopped midway

and things didn't have the time to rest just yet.

So we'll do this again.

Let's see how things look like here.

Did we stop the animation? Let's see that.

I was wondering what I was doing wrong.

I just forgot that we need to just extend the frames here.

So probably cage to 500.

So let's see if this works now.

It works.

Things rest almost here.

And then after that, let's just give everything a simulation first.

So these are the dish.

Select the dish as active.

Physics rigid body object.

And then copy from active.

Let's see things go crazy again. Boom. Wow.

That's an actual explosion.

I think we might need a ceiling here because that's just too crazy.

I'll activate the collisions again.

I should probably let's not space things out just yet.

All D on the Z and then rotate it on the Y or the X by 180.

And then I now have that ceiling.

Now we can't go anywhere. There we go.

Again, there is probably a better way to do that.

We just think that this cluster is just doesn't make any sense.

So I think we should probably combine these two.

So that and this control J and it's a process of combining things together

that would make sense for them to stay together.

And this is probably something you can look for.

So I'll just hide these collisions again.

I'll probably hide everything except the dish.

No, including the dish.

Just don't want to hide it.

Yeah, there we go.

I'll just hide these two as well.

And now none of these has like a simulation because we need to separate them.

So I'll just go in here.

And of course, if I select by loose parts, this is not going to help.

So just hit L over all of these.

And I believe that addition is at the right.

So this means that these are included on the object to the left.

Then you can separate selection and do the same.

I'll get back to you when I finish the entire model here.

All right.

Welcome back quickly here.

I thought I should probably remove the bolts from the platform here again.

It might not be efficient to do simulation with the bolts.

You can probably combine them with a beam that's going across the staircase here

or the platform.

But other than that, I don't think it's efficient to have bolts all the way

all around the debris of your object.

So I'll just select the bolts here, then X and delete the faces.

And now I just got rid of the bolts. Welcome back.

That took a while.

I've done separating each and every part I want to separate.

You can see that we have removed some bolts here.

This is because we want to avoid some of the catapulting that's happening.

I quickly here press space again and see if things...

I mean, they would still go crazy, but I want to see... Oh.

So these are the rails ready.

That's a lot of objects here.

Just imagine we had to add bolts.

That would have been much crazier.

This will greatly slow my PC here.

But let's try it anyway. Object. Merged body.

Copy from active.

And then I'll just turn off that. Select way.

Hit control S before I crash my PC. Let's see.

That's much better.

Now I can see, like, some debris, actually.

This makes much more sense.

We should probably destroy the vertical elements as well.

I mean, we will anyway.

But having them dispersed just like that.

Like, this shot is just too good.

Like, this is just too good.

Let me just have a boundary here.

And control S and go to cycles real quick.

Hopefully, yeah, I have to hide these collisions from the camera.

And, you know, this just looks like ready to be inside a scene or something.

And that's really cool.

I think I'll just combine the dish with the, like, that part. The top part.

Should probably do that.

Back to viewport.

Then activate the layout.

Select everything.

I should probably make this control J.

Now it's the same part.

This goes crazy at first.

Just want to make sure that nothing clips out.

I mean, some does.

But that's fine.

I should probably look how this collision is working.

Can probably alt D and C.

And push them both a little bit downwards.

Control S once more.

Let's hide the collisions. Go crazy. Big satellite. Cool.

Absolutely cool.

And then, like, we can manually decay the actual, you know what?

Probably also combine this with that.

Let's make that the active control J.

And do we control something else? No. Boom.

See some parts are still clipping outside. Not sure why.

But that's pretty cool.

You know, it's fine.

We still have plenty to go with. So boom.

Now as soon as it rests, I should probably animate also the collision planes here.

So that, you know, they space out the moment the other part catapults.

Because I need things to, let's probably move these into C.

And give it some breathing room here.

G on the X a bit. And G on the Y. Hide it again. Control S. Go back.

Let's see how this works. Yep.

It's cool to have debris go like crazy in all directions. You know what?

That shot looks just super cool.

Like you can see that having fully interacted with, yeah, I want it to rest here.

You have the part that's overlooking, you know, the other side.

Maybe there is like a stair, a man-made stair.

It doesn't belong to the actual scene.

So someone is going up.

You can see from here that this has tilted.

You can do this manually.

But just imagine the amount of time it would take you to do that manually.

Again, however, in the next tutorial, we will be tweaking things up to our liking.

Especially with the dish here. So, yeah.

I'll see you guys.

Destroy some stuff.

Animate some stuff.

And I will see you guys in the next lesson.

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
