# 219 — Animating Cables

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 32 — 3D Environments: Destroying and Detailing Assets |
| **Bài học** | Animating Cables |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 44:39 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Animating Cables** trong pipeline của section.
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


Today, we will be learning how to animate cables and how we can add some details to

like the details we added previously.

We did not give rigidbody simulation to all the parts here, so we will be doing that now.

We can just select anything, I think it's vertical, just select all the verticals.

And let's have an active object here, which we believe have the rigidbody settings.

We'll go to the rigidbody and then copy from active, then this should solve the issue of

them being animated.

And this will limit us to a few things here.

Let's also do this for the cable boxes.

I can simulate these two, so I'll just join these two, and we can maybe join these two.

I'm just trying to make things look simpler.

Did we boolean that? Yes, we did.

And we applied it as well, which is awesome.

I'll just control J and join them together.

Now we have some cables here. Oh, here too.

Need these to have some rigidbody physics.

I think we need that too.

Again, I'll make this active and then object rigidbody, copy from active, and this should...

Now we have with everything except, if we can wait, the cables, wow, that covers everything. There we go.

Which, yeah, so the large cables and the smaller cables, as well as the pipes up here.

Before we get into detail about that, let me explain how we want to go about that.

I'll save here and start a new scene, whoops, a new, there we go, and then I'll just hit

control alt B to remove that boundary, I'll hit shift A and add a plane, zoom in on that,

and let me select that edge, and hit control I to select the inverse, and then hit X and

delete the edges, so I'm now left with that edge.

I move that on the X by 0.5, sorry, G on the X minus one, so that the origin is the same spot.

I'll maybe scale it on the Y, S on the Y, and then in vertex mode, I'll hit control

R, scroll down a bit so that it has some segments, and you can already guess that this is going

to act as our cable.

If we were to give this a cloth modifier, or under the physics property, give it a cloth

modifier, and just begin that, we would see nothing, but then the usual, we would be just

selecting these two parts, maybe, to see things more clearly, maybe the central one as well,

or let's just F3 and select, look for checker deselect, sorry, F3 and then checker deselect,

so it looks like that.

I'll just select the first, the end, and something in the center, hit control G, and just make

a new group, and now if we were to go under the shape, and select the group we made, and

then start the simulation, you can see that we have this being simulated as a cable, probably,

but what we want to do is that, because essentially these, I can't assign pin groups, but I can't

make these, if I were to animate these vertices according to objects that are falling around,

if we were to look here, these essentially are parts of another object like this one,

so what we want to do is, let's go back to our scene, what we want to do is that we need to

sort of like have this being hooked into another object, and then animate that hooked object,

so I'll quickly here clear the group, let's see if we can achieve that, so what we want to do is

that, again, I can select that far end, and hit control H, and this, you'll see, will bring up

a small menu that says hook to new object, which is the thing we want to select, and you'll see

that it added an empty here, and if we were to look at the object modifiers, you can see that

it added a hook modifier, now if I were to move that empty, you can see that it moves that vertex

as well, however, if we were to play the simulation, it's not affecting our simulation just yet,

let me, let us finish the entire part here, or let's, let's go ahead with, with one empty,

I was going to add an empty on the other side, or the hook on the other side, I'll make sure that

the hook is above the cloth, so it's like the first and the modifier stacks, and then

I'll go into, if I were to hit space, again, I won't see anything, what I need to do is that

I need to hit control G, and then assign whatever I need to be hooked into a group,

so that's a new group, there we go, and then under modifier, sorry, under the physics tab,

I'll go to shape, and select the group again, and now that group is being hooked,

but with that said, it's also following that empty now, and you can imagine that this,

you know, could be your object, as you saw before, I can hit shift A, and maybe add a monkey,

and let's rotate that monkey by 90, and move it on the Y, and as you saw before,

if I'm in edit mode, and select that vertex, and then control select an object from outside

our geometry, in edit mode, again, like I'm only moving, or rotating, or manipulating the object

inside edit mode, I'm not manipulating anything outside, I can just hit control H, and then

hook the selected object, and now I have another modifier, and the stack, which is,

which is attached to Susan, however, I didn't yet determine that point to be one of the pen

points in the group, in the cloth simulation, so what I need to do, is that I go into edit mode,

and then under that group, under, sorry, under that tab, which is the object data properties,

I'll just hit assign, so with the vertex selected, I'll hit assign, if I want to make sure,

I can just select the group, and then hit select, and it's going to select the two vertices,

or all the vertices that I have assigned into that group, now, if I hit space, again, now,

this is being hooked, so I have a hook here, I have a hook there, and you can see how this is

going to help us in our simulation, I'll now delete that scene, go back to our main scene,

hit control S, now, I can do this two ways, I can, I should probably hit control Z a few times,

hopefully, we have our scene here, yeah, so I can do this two ways, we remember that this is not

a curve, sorry, this is not a mesh from the beginning, it used to be a curve, and that curve,

like, you know, we gave it geometry, and that geometry later on became what we have in our final

model, I will show you a way around, you know, in the final solution, but the thing is,

if we were to add a curve, let me add a curve real quick, so this is your curve,

you'll see that we do not have, under the physics property, like, we do not have the cloth simulation,

we do have a soft body, which, you know, could be something you could use,

we'll just clear the rotation here, or on the Z, then rotate it on the Z, scale it up,

and I'll do the same, I'll go, just, I'll just go inside, maybe give it some depth a little bit,

I just want to see what I'm doing, and then go inside this edit mode, edit mode in the curve,

I can probably control select, and just, I don't need any new objects,

I don't need any new objects, I should probably hide that too, and then select that,

it's silly to have a Susan, maybe I'll hit control H, then add a new hook, or empty,

and then now, like, this is controlling my curve.

Now, I can give this a, if I hit space, of course, like, nothing happens,

I'm still, however, controlling my curve, so what I can do is that I can give this a soft body,

like, I can activate the soft body for it, and as you can see, you know, although,

although not the best, like, method of doing this, but again, you will be, let's do this the proper

way, it's not being, like, helpful here, because it's, yeah, the first thing is, it's a bit buggy,

and it's obvious, the second thing is, this isn't how I would, you know, you should go about

simulating cables, or, you know, simulating at all, it's, it's not really the most efficient way,

the second reason is, you don't have collisions, like, you can't essentially collision this curve

with another object, so if you were to show, show this back again, again, this is just the same

hook as before, I can add a, maybe another monkey, and give this monkey a good legend,

oh, maybe because it doesn't have geometry, let me quickly here add some modifiers, so I'll just

add a, a skin, and I'll hit control one to add, like, a subdivision modifier, then probably now,

all right, that wasn't me, I, I had an issue with organizing, properly organizing

the, the modifiers here, so as you can see here, the, it is the geometry, so, like, it should have

geometry, but what needs to happen is that these should be moved up here, let's go back,

how, into space, now, they are interacting with Susan, oh, it doesn't have any physics

collision, there we go, now it's interacting with, with Susan here, or the monkey, I should say,

so, yeah, this is, this is what we are trying to achieve in, in our scene, though, so,

I believe I showed you what I wanted to show you,

yeah, let's just delete that scene, and hit control S, so, we have multiple options to go with here,

did we simulate these? I believe we did, yes, we'll go back to the starting frame,

then we can now, let's try, so, yeah, we can either simulate this as is, or,

what I might prefer to do is that we can maybe hook these two, or copy these two,

and then shift D and Y, copy them outside, and now, let's delete those, I'll just,

I'll probably copy these hooks, too, and,

one is, I might be making cables from the ground up, because I'll just be taking edges,

yeah, I'll take, I'll take them all, so, shift D and the Y, then, I, I just ignored the rings in

here, you know, because, you know, it might not be obvious, like, as in details, in the, in the

final, like, you know, debris look, we'll go into edit mode for, you know, one by one, doesn't have

to be both, I'll just hit two, to make sure that I'm edge select, hold alt, and then select on

any of these edges, like, doesn't matter, just, just make sure that it goes all the way from,

from the start to the end, and then hit shift D, and then P, to separate the selection,

and now, I can get rid of that part, I'll do the same in here, so, two, shift D,

D, selection, go outside, and delete the original cable, in here, I'll just do the same, if I,

if I were to switch, like, to vertex view, you can see that, you know, I already have plenty to,

to go around with, just clean up, maybe a little bit, let's try,

yeah, I'll just mesh, clean up, the symmetry, and then, I'll just,

it's probably, it's probably dependent, dependent on faces, so, I'll just hit mesh, clean up, and

merge by distance, I'll just slowly increase that distance, just don't want to have that

too much geometry, for Blender to calculate, you know, eventually, we'll be adding a subdivision,

I just don't want it to be completely destroyed from the original shape,

so, just be looking at, you know, the original as a reference, I removed 50 vertices, which looks

fine, can I, I can move these into, like, maybe a cloth cable, because I would like to hide these,

so, if I space, I'll still give that a little freeze, so, maybe, I'll just leave them hidden,

I don't want my scene to be, like, clustered with destroyed objects, I should probably move this,

right to the center here, I can't, I won't be able to do them both, but, it's, you know,

move it again, and control S, now, I can give this a cloth simulation, or, you know, turn on the cloth

physics for it, and then go into edit mode, and select both ends, because these will react as,

like, the pens for my group, then, assign them to group, go to shape, and then,

add this as shape, now, create space, that is being simulated, now, go back into the first frame,

and we can add these objects as hooks, so, I'll just select that one,

there we go, so, I can now hit control H, and hook selected, and now,

control, click away, make sure that I don't have any vertices selected,

hold control, and select the object, control H, and hook to select it,

and now, again, if I were to move either end of these, I'm now controlling that, like, part,

I'll just make sure that I have the hooks before the cloth simulation, go back, let's try this

works, there we go, I now have them both hooked, I can then, add a skin modifier,

I believe this is a good radius, because I will hit control one,

that's going to be beveled anyway, so, hit space,

and this is good, now, of course, I can, like, animate some, like, animate these parts,

and as such, I'll be controlling the cable too, just make sure that things don't go too crazy,

because you can see here, like, this is taking a huge amount of time,

let's hit Q, and shade smooth, and enable auto smooth, let's make sure that we,

maybe give it one more time, it's not really that demanding, just yet, so, just remember not to

subdivide your mesh too much, I'll do the same in here, by the way, you can see that it's clipping

through the actual object, you can, of course, like, play around with the collision,

collision here, and you can make this a collision object, like, you can make it have a collision,

just like with the monkey we showed the example before, but then again,

you're just increasing the amount of calculation your blender is, you know, trying to calculate,

so, I'll just, I'll just try my best not to, like, play around with these too much, again,

these will be implemented in a scene where, like, they will be mostly destroyed, so,

I'll just, you know, ignore the fact that this is happening,

I might need to, like, adjust the collision for some parts, because I would like, you know,

I wouldn't like my cable to be, like, simulated properly, but going through,

clipping through some objects, but then again, you can see here, the collision is quite, you know, the,

quite demanding, essentially, I don't think you can collide with the hook,

like, you can't really test it, because it's a hook,

yeah, but it's, yeah, I can see a difference here, a bit of difference here,

like, it's not completely clipping through the actual object anymore,

let's repeat that one more time,

like, it's forcing itself outside of the object as much as it can, but because I believe,

maybe the weight of the object, of the cable, this is happening, but yeah, let's,

let's do this for the other part as well, so, I'll just go, collide this for now,

go collide this for now, and then go in here, again, we might have

to encourage by distance, increase the distance, so that we don't have things clamping,

have things a little bit more simple, you know, and then select the both, both ends,

just hit this, and control this,

I think, I think the control key here is, is not working for some reason, so I'll just have to,

so what I did is, like, you can hit control, and just click to select multiple objects,

I'll just select both ends, and hit control G, and assign them to a new group,

and then give this a cloth simulation, and scroll down to the shape pen group,

and choose a group, and then you can go back into edit mode,

mode one, and select it, hit control H, hit selected, yes,

select these two, control H, go to selected, and I can probably unhide that, and select these two,

I don't really need to copy from modifiers, I can just do this again,

and I was, I was going to hit control L, just this, and then copy, copy modifiers,

but I, I don't think, because I have multiple other stuff, so I just don't want that,

let's see, this is working, I just realized that I might need to move these, let's

pause the animation for a second, move these at the start, do this again,

and this is looking good,

again, just to confirm, awesome, just move this back, make sure that they have some

weight to them, physical properties, like maybe five kilograms, do the same here, five,

just making sure that they, like, don't

grip that much, I'll change, I'll increase the viscosity as well,

go back, I don't want them to be, like,

too bouncy, if you could say, it's 20,

maybe 15 or 13,

it's good, I don't want this self-collision happening, I don't want to turn it on,

to be honestly, to be honest, because this is going to cause a lot of issues with calculating,

I think this too is causing some issues, like them colliding with each other is,

is an issue here, so just increase that too, then go back, so,

yeah, I think this, oh, the animation stopped, we will need to animate this more than 200 frames,

oh, it's under cache, and then 500, do the same here, 500, and then just press star again,

I think because they are colliding with each other, this is happening,

so, quickly here, remove this collision, go back, just go ahead with, like,

adding the modifiers, I'll add a scan, and hit control 2, I might go into edit mode,

and then just make sure that this is being hooked properly,

and the same here, G to C, G, shift C,

now, again, auto smooth, and shade smooth, and shade this smooth,

and if it's not working, I think we can just add a smooth modifier,

right after these two, maybe,

no, I think we'll have to apply a lot of these stuff, probably both,

let's bring the cloth up there, down here, if I hit control A here, there, maybe,

yeah, I have to apply the modifiers first, I don't think I'll need to change them anyway,

but for now, I'll just leave them, and then unhide my ready, and then select these two,

and we can probably place them exactly where they were, and since these are mesh and not curve,

and these are, like, the rings are mesh and not curve, we can probably add them to this,

so I'll just select that, G on the Y,

let's not do it, I'll just shift and click, and then G on the Y, to move them both at the same

time, and then G on the Y again, placing them where they roughly were is an issue, however,

having these placed on the right spot is, you know, a bit time consuming, I'll just delete them,

like, we don't need them, or have they have, they don't, so you don't have a physics, do they?

No, they don't, okay, we can probably, like, have them have some physics, again, I'll have to

separate them, so I'll just hide them for now, we'll just move them aside, like so,

I will decide what we will do with them later on, here I can delete that old, or maybe no,

I'll just move them aside with the, like, rings as well, we can now go ahead and maybe hook these

two, like, we can parent these two, maybe these two to here, so if I control B, and object,

so now this is the parent for these two, as you can see, the hook is moving them,

so let's see how this acts, we'll probably have to go around this,

um, it's not too bad, the red one, though, has been completely destroyed,

so, no, I'll probably go back, and I'll just hit Q and clear parent,

we'll go ahead and apply the modifiers, I'll hit control S, and we'll just apply the modifiers here,

these are in the wrong spot, go up here, maybe I'll apply the skin modifier, so I'll just hit

control A, I wanted to have some geometry to interact with the collisions, so I'll do that,

maybe I'll apply the skin modifier, so I'll just hit control A, I wanted to have some

geometry to interact with the collisions, so I'll do the same here, I'll apply the skin,

so, yeah, I'll just go ahead, edit mode, this needs to be adjusted,

I should have probably adjusted that before, but that's fine, there we go,

um, this might actually affect the hook modifier, let's see, yes, it did,

I think it did, okay, I'll just go back before applying the skin modifier,

yeah, I'll just leave the skin modifier for both, uh, for now, I'll maybe add the collision,

like, completely at the end, just to make sure that I don't have anything,

uh, you know, you know, keeping the process a non-destructive process, essentially, um,

all right, we can now, since these are the hooks, let me just quickly do that, edit again,

just wanted, there we go, hit control, uh, control S, um, do I need this to be, I'm

wondering if I should, like, join these two, so, hit control J, let's see how this looks like,

uh, I'll shape this flat, uh, alt smooth, I'll turn on alt smooth, and then, uh, hit space,

a bit all over the place, actually,

so, I'll probably go back before, uh, adding these two, and just give these two a rigid

body physics, so we'll just select an active object, and then rigid body, uh, copy from active,

and then probably, um, do the same in here, I'll give these two a rigid body,

just select something, and copy from active, and hit control S, um,

I think we can simulate this alone, but I might actually end up doing this, because you can see

that there's a lot of collisions, uh, a blender might need to calculate, but it's not possible due

to these objects, uh, did I miss the order, skin subdivision hooks, same for here, I'll just select

these, um, I'll turn on the collisions, because I want to see how this interacts,

on its own, g on the y, it's being hooked to something, oh, I might have not cleared the

parents properly, um, Q, hold alt, clear parent, just as a safety measure, let's do this again,

just as control Z, I want it to move by a known amount, maybe G, Y, 10, uh, what, 30,

uh, 40, there we go, one just outside, I'll hit, um,

Q, and hit, uh, hold alt and clear parent, just to make sure that, so this has been moved by 40,

I believe, um, yeah, let's start, let's see, so, I might have edited the, like, past few minutes

out, uh, what I was struggling with is, why isn't this being hooked, and the reason is,

the skin and subdivision modifier are, uh, before the actual hook, uh, modifiers here, so I'll just

move them just before the skin and subdivision, and this should, uh, help us with the issue of

them not being able to be hooked, um, again here, I think something is wrong with the hooks,

I'll just delete them real quick, and hook things back again, so just this and this and that,

control etch selected, this and that, control etch selected, uh, and let me just move things

apart a bit, I don't want things to collide immediately,

hit control s and hit space, let's see how this works,

I think you don't have a group, oh, I moved the pen across,

go back, I mean, this should finally resolve the issue, here,

um, let's remove, or turn off, the subdivision modifier for now, see how this looks like,

I might actually turn off both of them, go back and see this one more time,

yeah, I don't need to simulate the, I don't need to have the thickness for the cable just yet,

what I need to do, let me just move these around,

what I need to do first, I need to establish a look first, then I can probably add these later

on, you see, like, if I were to add this, um, skin now, it looks way more, uh, like, you know,

uniform than adding it with, you know, or after the simulation, so just, you know, this is going

to both save me time and resources, so I'll just remove these two and interact with it as just,

you know, just as a, uh, like, edge or, you know, a wire, essentially, I'll remove that skin again,

I'll just, uh, interact with it as is, uh, and now I've figured out what's,

what was happening wrong here, I'll just, uh, move these two, do you know why,

I don't need you, essentially, um, we'll just move them into a group collection called,

um, replaced cables, hit space or enter, and then you can just, uh, completely turn off that,

and we can now move these back, so G on the Y,

this is good, I'll deselect that and move that G on the X, whoops,

G on the X, there we go,

the only issue I'll be facing here is that it doesn't have geometry to interact with,

uh, the surroundings, which is pretty fine, I'll just, uh, again, um, start the simulation,

let's see how this goes,

I want me to give these rigid bodies,

object, rigid body, copy from active,

now we can see the cables aren't being too crazy, maybe they are actually, but, you know,

again, we can control this with a better collision,

now if I pause this animation, it's quite sticking through the ground here,

I'll just move this a bit down and add another, alt D on the Z,

alt D on the Z, go back and see how this could look like,

it's still not maintaining the entire geometry, I believe it went, uh, from the,

from the top, oh, it's from the side, I'll just protect this as much as possible,

alt D on the Y, alt D on the Y, longer distance, we'll do the same here,

uh, you can do something, which is, uh, again, uh, switching, um,

the physics tab, switching the rigid body from active to, uh, sorry, from convex hull to, uh,

mesh, but this is going to be, uh, really demanding on your, uh, object,

I'll turn off dynamic for a second and see how this, how well, it's fast, um,

not too good, actually,

like, it is fast, like, to start, but it's not really,

so, this is the only one that has this issue, just go back and turn on dynamic,

now, I've maintained, I believe, everything, except that small, uh, whatever, platform may

be, flying, but, yeah, I maintain as much debris as possible inside the actual

model here, have something that, when flying, which I'm not sure what is this,

it's probably the cables, maybe,

or, oh, it's the stairs, yeah, makes sense, um, let's have things be more organized,

I'll just control click, uh, shift click, then hit control J, so, these two are one,

and, I'll probably select that and hit control J, I'm having as much, uh, as less

assimilation as possible, this is not naturally, like, the scope, maybe not, uh, maybe a little

bit further here, so, I'll just make things more simple, I should probably also, uh, add maybe some,

yeah, I forgot to add these two together,

control J, control S, then hit space, let's see this one more time,

that part, like, being intact is completely awesome,

these cables aren't assimilated yet, now, that is falling to the ground,

should probably go back and maybe do something dangerous, which is,

let's actually control J these together, having some problems here, let's see if I can do this,

together, having some parts that look more interesting and not completely destroyed all

over the place, however, I believe that we have, uh, talked a bit too much on this lesson,

so, yeah, go ahead and assimilate some cables, and, um, I'll see you guys in the next lesson.

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
