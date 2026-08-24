# 221 — Manual Approach

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 32 — 3D Environments: Destroying and Detailing Assets |
| **Bài học** | Manual Approach |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 32:19 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Manual Approach** trong pipeline của section.
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

Now as you can see, I've hidden the, I deactivated the parts where we simulated and it just reactivated

everything back again.

We also have a version that is completely merged with each other.

I believe as well it's textured.

Let's try this real quick.

It should have like its own texture there already.

So what we wanted to do is that we wanted to manually adjust things, you know, and decay things our way.

This is a bit time consuming.

I'm like, you know, if you, if you would resort to using just ready body, rigid body simulations

and that will suffice for you, then, you know, that's, that's probably a better option.

For us, however, let's see if this one is also textured. It is. Awesome.

So let's go back to shading and hit control alt B to remove that boundary.

And I'll just remove that, sorry, hide the damaged satellite because we will be using

it into detailing our asset.

I should probably quickly here make it an asset, I control S, right click, mark as asset

and I will have to data block cubes now and asset, and I will have to go into the asset

browser and see here that now it's being called like it has the textured preview there.

We can go ahead and rename it. Sorry.

We can go ahead and rename it to satellite, rusty satellite, I should say, hit enter.

Now we have it renamed and we'll be like adjusting the file settings or sorry, the preferences

and say load files, file paths, then we have, we should probably add this file so we can

add the entire folder for now.

So add asset and name it satellite and leave it there, hit control S. I will hide this

damaged satellite once more and I don't think we need that bottom area because we will not

be simulating anything.

So what are we looking at here?

So we need to do this manually in a way that, you know, it makes sense essentially.

So a few things need to be achieved here.

First of all, we need, we applied this mirror without it being properly scaled.

We'll just S on the Y and zero, oops, not the 3d cursor, but S Y zero, there we go and

then hit M by distance, then just make things make more sense, right?

Oh, the distance is too close. My bad.

I think the default is just something like that and yeah, this is looking good.

I control S. I think we have the same issue up top here, so no, we don't, awesome.

So what do we want to do here?

So we want things to make more sense essentially.

First of all, we wanted to maybe rotate that part again, I might just combine things into

like any collection.

So one more time, I'll hit shift D on the Y and move things to the side again and move

that entire collection to manual maybe and then I'll just hide all these parts.

Now I'm left with that.

The reason I did this is because like I wanted to rotate some parameters here without facing

the issue of I have to handle everything again.

So I'll just do just like what I did with the previous part here.

It makes sense that this like has some part at the top.

I'm just hesitating about whether I should rotate it or not.

That's the idea.

So I can probably select this and switch this to active, rotate on the Y, control alt X.

Then control C, something had changed, no, control alt X.

The wireframe changed a bit, but you know, that doesn't really matter.

Rotate on the Y.

And as you can see, like have it look like that essentially from one side.

I believe we will have to rotate that, you know, these two and let's see how this looks

like G and shift and Y just doesn't look too bad, but it sort of doesn't make sense maybe.

So yeah, instead of like doing this, I'll just add a, an empty shift A and empty plane

axis G on the Y, G on the C and just start parenting.

I would like to have some hierarchy here.

So I want this to essentially move the entire top part like it to be a little bit there.

Let's move to the Y here.

I just wanted to pivot around maybe that area so that, you know, this is the pivot point

of my geometry here.

So I'll just be rotating that.

Now this will control the entire thing.

So you might've guessed that, you know, we'll be parenting all these parts together.

So these two will be, you know, control B as a parent to objects, B and control B.

Now this should probably move everything, I suppose, control B, this now should, awesome.

And then to the dish.

The reason I'm having this like immense hierarchy is because I would rather have things be,

you know, if you were to select this part, I'd rather, I'd rather like be able to control

each of these on its own.

So I can't move this or move this, like move these two should probably parent this to that.

So now I'm moving the entire part, then I just, you know, have this sort of hierarchy

that helps me with adjusting, like manually adjusting a few things on their own without

adjusting everything else.

Let's also select these, maybe the doors as well, and select this and hit control B to objects.

And we can adjust this later on, like this, this connection or this, this being parented to that part.

But again, like, again, I would rather have, let's actually do it now.

So just hit control B objects, control B objects.

And now this moves this entire part, which is nice.

And I can just now parent it with that empty.

Now if I were to rotate that on the Y, now it's rotating everything else, which is awesome.

I believe this would rotate like this, doesn't really matter.

So I now have this controller.

I might actually replace this with the damaged satellite model we just had, because, you

know, it would make sense to have these controllers in your scene that you could, you know, easily

rotate things properly in your scene, I might need to clear this movement, clear that parent,

move it in, and then have things be more properly adjusted.

And again, because like this being as a pivot point, it's, it's a bit disorienting.

So let's just try to G on the Y, like, I can't really move that at all.

Yeah, I can't move it. Nope. There we go.

I can just move it now.

So just move this to the center here, G on the Y.

Let's increase the size a bit, G on the Z, and now we can just disable that.

Now, this is properly, I can properly, like, rotate, you know, around a good pivot point.

I can probably also name it controller dish, controller, okay, and let's see, we can probably

decay a few things here and there.

So I can see that this is applied, I can go inside here and maybe hit F3 and select

random and no, not vertices, but F3 and select random again, and now I've selected random faces.

You can see if I move these aside, moving a bit together, we can do this manually. That's fine.

So what I wanted to achieve is that I can probably go into edit mode, then hit L on

one of these, and then you can just rotate things, you know, make things more messy and,

you know, less sense, of course.

So we'll just, let's first start by removing what could be removed.

So I can just remove some random bars here and there, hit L, if I can just get to touch

these and delete the faces, and now I have, like, most of these bars gone, which is what we want.

I'll do the same here, if I could just be able to, probably, there we go, move one bar,

remove the top, top, and delete faces, and now we have some of these missing, and if

I hit, I can probably select the loose parts, and then, like, each of these, like, has its

own, like, own geometry, sorry, on, it's now its own, like, thing.

This is not really a good idea, though, because I now have a lot of loose parts here.

You know, combining between them would be a little bit painful, to be honest.

And we can go about doing this, let's, okay, let's do this again, let's do this again,

and while they are selected, I'll hit F3 and randomize.

So what I want to, no, what's that, no, not here, random transform, there we go, randomize transform.

I will turn off scale, and probably location, and then give each of these, like, a rotation,

should probably control X, origin to bottom, so F3, and then, again, do this slight rotation.

You know, have things less and less organized.

Let's do this slowly, so that's looking not too bad, you can start now deleting the parts

where they, like, got out of hands, so I'll delete these objects, and the rest looks good.

So I'll just have to repeat that for the entire process here, for the entire model.

Again, go ahead in here, and this doesn't have a modifier, I believe.

Okay, I'll just go in edit mode, and hit B, buy loose parts, let's hit control S first

before we crash our Blender, because this is a lot of loose parts, I see a lot of bolts

here as well, so select, and then Y, I'll just deselect those, and X, delete faces,

and probably also select, select them again, try F3, and checker deselect, hopefully though,

Yeah, this is only affecting the faces again, so it's not really helping, so I should probably

select them again, just delete the bolts, and again, I'll hit P, and P, let's first,

I'm just thinking about, I'll just move these, let's not move anything just yet,

I'm just trying to get rid of the geometry that's going inside here, it makes sense that we would,

so hit L here, and L there to mark the location, and hit shift C, maybe alt C, there we go,

then we can see what's happening, I believe this is the platform, so just go inside a little bit,

maybe switch to vertex select, and I believe it's going there, let's make sure, yes it is,

awesome, so I'm just, I'll probably deselect these, and hit shift, and do the same for the

entire geometry until it goes back in, let's make sure that we are doing it right, so this is,

well that's the last part we should be selecting, just selecting it for reference, if I have these

selected already, I can go ahead and maybe, I can select something that is going across for some

reason, that's fine though, let's try and just go outside of the wireframe view, and hit X and vertices,

and that doesn't seem to have hurt us pretty much, we can leave that there, I'll hit control S,

now we can go back in edit mode, and then hit B, and buy loose parts, and now if I go outside of

edit mode, and hit F3, let's first hit control X, and origin to bottom, so that I can hit F3,

and randomize transform, immediately looking good, I can maybe give some rotation on the Y and X by

5 too, let's see how this looks like, that's a bit extreme, let's have it maybe 2 degrees, that's

looking good, and now I can probably see if we are able to deselect, well that's what we wanted

to achieve, let's play a bit with the ratio, no, I want you to select more, 0.6, and to deselect less,

sorry, 0.7, awesome, and I can just straight up delete these, looking awesome, there we go, we're

getting somewhere, I'll do the same in each one of these essentially, so let's try this, we have this

applied or no, we have no, yes we do, just apply the array, and the solidify, and what's this parent

for, this, I should probably apply the mirror, and then hit X, or let's try this again, oh it's

controlling the bolts, array and mirror, so now you are controlling nothing, probably, awesome, just to make

sure, yep, and delete it, hit control S, and let's manually destroy this, go inside edit mode, and I

think I will have to select the bolts again, in order to avoid that, because I would like to separate the

geometry, and to do so, this will include, if I do it by loose parts, this will include the bolts, and I don't

really think that we can do this in a proper fashion, I can always select some bolts, and add them to like

the geometry itself, but then again, like we will have a huge amount of bolts here, let me actually tell you

what I mean, so I'll set by loose parts, and if I hit switch out, each of these bolts is now like its own

object, which is like an immense amount of stuff to go around with, however, let's try something, so

manual, stair, base, stair, so now these are in a, wait, they should be, where is this, there they are, they are

being parented by something, I believe this, yes, shift G, immediate children, no, come on, there we go, and hit

control B, sorry, alt B, and hold alt and clear parent, no, I should probably apply transforms first, I'll hit

control A, apply all, and then, yeah, I'll hit alt B again, and clear parent, why do they still move away, oh,

because this has changed location, how do we go about doing this, we should probably apply the location of this

little guy as well, so I'll just hit control A, apply all, and if I select this, new collection, control A, apply

all, and alt B, clear parent, yeah, this is a smart way, so what's happening is, because the origin point of this

part, that was the parent for the actual object here, is now, I didn't apply the location, so what was happening is

these were being resetted, the origin for them, because I applied the transformation into the world origin, and

because the parent is shifted quite a bunch from the original location, or the world origin, they were being moved

back to their intended location, when the parent has been cleared, yeah, this is what we wanted to do, we wanted to

apply the transformation for the parent first, before clearing the parent, now, what we can do is that we can

deselect all of these, select it, hit control J, just do the same collection for each of these, so

I'll get back to you,

let me just finish that real quick, alright, welcome back, so now, we have everything here adjusted, I'll just shift G

one more time, and select the collection, and then hit F3, no, not select random, but randomize, transform, and we can

probably, oh, we should reset the origins, alt, control alt X, and origin to bottom, before we can

do the randomizer

here, this is looking insanely good, like, to manually adjust each one of these, you know, according

to how we just did it,

is going to essentially take an immense amount of time, so this isn't something I would recommend,

what we want to do now, is

to do the same here, and we probably don't need to do too much labor here, I can probably, oops,

probably just go into edit

mode, and I don't have the modifier applied yet, which is awesome, this will save me some time, I'll

just delete these bolts,

because they're taking up some memory, and it's there, I can probably go in here, and I can now

apply, let's first give these

bolts their texture, this will ease the selection process for the entire geometry, and just a new

material, and look for bolts, and

assign these to bolts, now, I can go ahead and apply the array, and go inside, and let's see, we can

probably do the same without

going outside of the edit mode, and what I mean is, we can actually do this randomized transform,

no, we can't do it inside edit

mode, it's fine, we can just do by loose parts, and go inside of edit mode, deselect all these,

control J, we should probably add

them to the same manual base stairs, you can see that there is a parent somewhere, it's this, oh,

okay, since I applied these, I can just

apply the, I should probably go back just before separating all these, there we go, and move them to

a new collection, lateral base,

no, just want to be able to quickly select them without the hassle of deselecting the entire

process, so yeah, I'll just deselect these, and do the

same, just like we did before, right, now, what I can do is that I can clear the parents, after I

apply all the, let's hit control A, apply all, and

then alt B, and clear parents, and now hit control alt X, so that I can reset their urgence, and

then I can now randomize transform, now these

look straight up cool, we can now like delete a few of these, completely, like they are completely

missing, which, you know, as to the realism

of our object here, only control S, what are you being the parent of again, quite, pretty much

everything, which is okay, so it's fine, I'll just try and

separate all of these, control A, apply all, alt B, clear parents, and now, just do it one by one,

until I just, control A, apply all, sum is still, control A,

U, U2, okay, that's fine, there we go, and then alt B, clear parents, and now, all of these parts

should be free now, with the exception of that empty, which I don't know what it controls, we can

just delete it, and I'll hit control S, and you can see where this is going, so yeah, we will be on

our journey here, into just, you know, transforming all of these, and turning them into a bit

unorganized look, control A, oh, it needs to be unique, so I'll just hit Q, object in data, control

A, now, inside, hit B, lose parts, move out,

move them to manual based here, or something, and hit F3, randomize, transform, and this is too much

to, no, control X, that's the reason, now, this makes sense, so I can probably hide that,

I'll hide these two for now, because I want to see what I have achieved so far, or what I have

changed, for now, however, you can go and play around with the randomizers, they are pretty awesome

tools, that, you know, exist inside Punder, you don't have to play around with, you know, you don't

have to do this work manually, rotating each of these separately would take ages,

as well as shifting things around, this would take ages, so you can go ahead, I might speed up the

process here, because, you know, to do this for the entire model would take a long time, for now,

however, you go ahead and do some fun stuff with your object.

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
