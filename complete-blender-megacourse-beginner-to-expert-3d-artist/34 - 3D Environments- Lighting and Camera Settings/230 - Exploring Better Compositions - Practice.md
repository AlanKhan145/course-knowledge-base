# 230 — Exploring Better Compositions

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 34 — 3D Environments: Lighting and Camera Settings |
| **Bài học** | Exploring Better Compositions |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 37:11 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Exploring Better Compositions** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
- environment art, asset assembly và scene organization
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

All right, welcome back.

After looking at this a bit, I figure

it's not going to be possible to combine

between the rocky sculpted elements

and the satellite elements.

So I think we will end up doing two scenes,

two different scenes.

One is using these elements, the rocky sculpted elements,

and the other will be using the satellites.

But before we move on to the satellites,

now the satellites we have made as an asset,

you can see is one big part.

And I would surely prefer to be able to control

at least this dish part, the top part,

with this ridge included.

So what I figured out I can do is

I can just go back into the original file.

Not that one, but let's activate ready,

because this might be the one that we start from.

I just want to show you the difference between before

and after doing this and how I faced some issues with making assets as such.

So what I figured I could do is that I can maybe add an empty

so that I can control all these parts,

like all these top parts, including that little door

there, as well on the side, like these two.

So essentially that part, with everything else

parented to it, to an empty at the bottom

here so that whenever I rotate, I'm

only rotating around the empty.

That empty is like acting like the origin here.

So what I did is that I like, OK, I set up everything.

I applied all the modifiers and then applied all the location and such.

I made everything single user, then

joined everything to the bottom platform,

and then joined the rest to the top, just like I did in here.

So you can see that these are two different parts.

I'm not going to go through it again simply

because it's going to be just a waste of time, essentially.

So yeah, I did these two.

And then I parented the top part to the bottom part.

And then I parented this and the empty it's

controlling to the bottom part.

Let's actually look at it.

So the big parent here is this.

Like this is the big parent.

This is the one that moves everything.

And then we have an empty that only moves the top part.

And then, of course, like any child or for any part,

we can just control moving it by itself.

Of course, if I would like to maybe shift

the location of the parent, I can just select the parent.

And then under Options here, we'll just select Parent.

And then if I move that parent, it's

not going to move the children with it.

So if I would turn this off now, if I rotate this on the Y,

now I can move it.

So the second issue is, OK, it makes sense

to mark this as an asset.

But when I did, it just added an asset that is only the bottom.

And it made sense, because you surely could parent the settings.

Sorry, parent the, mark the parent, and then everything,

the rest will come with it.

But that wasn't the case.

However, I tried actually parenting the empty.

You cannot mark an empty as an asset.

I mean, you surely could.

But then again, it's a parent and not the child.

So I'm not going to do that.

It's a parent and not the child.

So I figured, OK, what would happen if I parent the child?

And at the first glance, it seemed like,

so it's P2 Satellite, which is this.

At the first glance, it seemed like, OK, this is also a failure here,

because I only see the top part in the rendering.

But as soon as I added it in, it added the entire setup,

so empty and the parent included.

So this is something you could try yourself.

It's a good trick.

And now I can just rotate this part here and be happy with it,

play around with the rotation.

I think I only need to adjust where it revolves around,

because it's quite critical sometimes to have things at the exact center.

This is looking pretty good.

I think it could revolve a little bit to the bottom of the platform.

As you can see here, however, I haven't, no, I actually did.

So I have the top part combined and the bottom part combined as well.

So this is one object, including the vertical stairs.

And I believe the platform, let's move the parent only,

just to show you, yes.

So this is like the bottom part here, and the top part is the other one.

I haven't changed anything with the model.

It's the same textures, same everything from how we did before.

Now, if I turn off the parent and try and rotate that,

let's scale this outwards so we can see it.

And now if I rotate that on the Y, I can control this.

Again, you can see here that maybe you have some issues here

with some parts appearing out.

Of course, you can play around with that, adjust this

so that it's not obvious that this is the case.

Maybe you can actually go in edit mode and delete these boxes or something.

So yeah, now we go back to the camera.

We will now again make, we're not really making a scene,

but we'll just try and adjust some of these things here.

I'll switch back again to the 3D viewport at the bottom here

and then start controlling things with the camera looking through here.

We'll just move these on the X.

And then I think I could probably move the cameras to the side.

I'll hit Shift D.

Is this visible? No.

I think I'll just copy the camera and I'll just Shift D on the X

and hit Control 0 to make sure I'm inside the camera.

And now I can just select these two, G on the X,

just so that I'm out of the vision of this little guy.

I'll here try and copy the settings of this landscape tool.

So noise, this is 10 by 10.

I need to also look at the noise size too.

I can maybe make this four and make it 15.

And then, of course, if I hit like refresh or regenerate,

I'm going to face the issue of it being quite large.

Did I apply the scale?

Oh, I have to refresh first, I believe.

So 15 by 15, this is four, maybe one.

No, it should be more.

Just for the sense of the scale, I would just prefer to have things,

you know, two, one, 0.5.

We're starting to get somewhere, 0.3.

Now it's a bit, this is a bit better maybe.

We could only figure out if we were to add,

let's first see if we are here.

I'll just try and like be as close as possible to the ground

and then go G and Z 2.2, which is like the average height maybe

of like cinematic cameras maybe.

I'll try and tone down the sand dunes here.

And, of course, like I'll have to raise that ground up.

I think it has some rotation.

It did have some rotation here on the X.

Sorry, the Y was a little bit tilted that way.

Maybe you can scale things up on the Z.

And then we'll just move this little guy there.

And it's quite gigantic already, which I believe this is what we want.

Let's see, we don't want it to be fully submerged into the ground.

So if I hit Alt D, I'm sure that this is only going to copy the parent.

So I'll just select everything.

And if I hit Alt D, this should copy everything with the parent still being.

I have to hit Y twice, of course, like rotate around the local.

But then again, like I don't have to actually rotate.

Just by rotating this on the Z, this is going to make the difference pretty obvious.

I think, however, I should push this back a little further maybe.

Yeah, there we go.

And now I can rotate it as I like.

I can probably scale this scale and everything except Z.

Maybe I'll just duplicate that.

Let's reset the rotation.

Rotate it on the X slightly.

Oops, just slightly there.

That's on the X.

Just want to fill the background here.

I could also add some of these mountains to the background.

This feels a little bit submerged, which OK, I'll leave it as is.

I'll leave that as is.

We can probably also, let's see, I think we can, let's add these first.

So I'll just hit Shift D on the X and then Alt R to reset things up.

That is quite gigantic.

Let's see, maybe rotate it like that.

Scale it on the X and the Z, G on the X.

I think a person, so a man, I mean, would be useful here.

So I'll hit Shift D and press Control here to make sure that it's on the camera.

I think I might go down a little bit.

What is the tilt here?

Let's make it only 100 maybe.

103 plus 5, make it 105.

And then G on the Z.

Let's bring that guy. Where is it?

Where did the man go?

Is that his head? It is.

OK, I'll move it on the Z and then snap him to the ground.

Rotate this a bit.

I think this is a bit extreme.

Let's go with 3.

Then maybe move the man until he is maybe here.

Of course, this is like a placeholder for our mesh here.

We can probably shrink this to 25.

This is looking a bit better.

And then we can copy maybe that one more time.

Oops, it should be moving here.

I'll copy that one more time.

So include the empty and the dish and Alt D, Shift Z.

Wow, this is looking pretty good.

Now, I think we need to move slightly.

Wait, we can maybe block this with, let's see, no.

I'll just duplicate that.

Let me first rotate it a bit.

Maybe scale it, oops, scale it down, not up.

And move it, move it up. Hello?

Oh, it's just loading.

Always be patient.

Patience is key.

And there we go.

I just don't want it to peer through the ground.

So I'll just, I think this is as much as I can pull it up

without it penetrating the ground here.

Since these two will have the same texture,

it's fine if they do intersect because, you know,

they will have the same texture.

But yeah, I think I should raise this.

Let's make this minus 180.

I just don't want things to be off in terms of rotation.

And that isn't looking good, actually.

I'll just need to pull this back in here.

So what I'm trying to achieve here

is like trying to point this object out

with the environment around it.

Just move these two.

This is looking great.

Should have probably moved this with the camera,

but that's fine.

Rotate this guy so that he's looking there.

And maybe I can tilt the camera down even more.

This is looking good.

Control-S, remember to save.

I can maybe rotate this too.

I think it has the same rotation as the main object. It does. They all do. They all do.

Because of how far they are in the perspective,

this is slightly tilted more.

So I see 126 on the Z, 113 on the Z.

They're actually all rotated.

These two are similar, actually. This one isn't. Let's see, 113. Sure.

Let's try something else.

Let's try to maybe submerge it on the ground here. See how.

Yeah, this is looking nice.

This guy could drown more.

Of course, he's not straight on the ground.

So what I'll do is just raise the camera a bit. There we go.

Until he's only on the bottom third of the canvas.

I can maybe raise this even more and try and rotate this down.

That's looking good.

He could now move slightly to the, let's see, right.

Yeah, let's move him to the right.

Then let's try something here with these satellites. So we Alt D.

So we instanced that dish.

So we can do something here.

Let's try and see if it's going to work at all.

I'll just hit Tab inside Edit Mode to go to Edit Mode for that specific object.

I'll hit outside.

And what I want to manipulate is the dish.

Now, there's a few things here.

What I want to achieve is like sort of like rip apart a few of these faces.

I think by doing a checker deselect, this is not going to happen. Let's see.

Deselect random or random.

Select random, and then you can just do the deselect.

The only issue, however, is that it's going to also select the actual,

some parts of the actual object.

So if I hit G, why are you turned on?

If I hit G and move this around, I think you'll see that it's not only changing the,

let's isolate this for a second. If I hit G.

I think it's somewhat taking some of the faces with it. But let's see.

Let's go side of Edit Mode and the Isolate View.

That's actually looking fine.

These sort of look quite different, which is nice.

If I scale this, of course, it's going to scale the others.

So if I press S on the X twice, sorry, Y twice, and then minus one,

I can flip it essentially or mirror it, quickly mirror it.

But I don't think that we need to do any more details than that.

Maybe actually we can, let's try something here.

So I'll just hit Shift D and not Alt D, and then reset the rotation.

I want it to look up.

Oh, it has a parent.

So I'll hit Control, whoops, Control A, and Apply All so that, okay,

the origin is still not the same.

It is for this guy and this guy. That's fine.

I'll just hit Control Z a few times until this has its own rotation and such.

If I hit Q to clear the parent, of course, it's going to be thrown away that far.

That's fine, however, because I want it to be looking up anyway.

I'll just hit G and Z.

See if you can like play around with this.

Let's first add something to the foreground here.

I want it to be looking straight at the camera.

That's quite large.

Maybe R on the X, R on the Z.

This is a bit big.

So let's just slightly move it upwards.

And let's rotate it on the Z again.

Here, R on the X and maybe G on the Y so that G on the Z.

Let's, okay, I mean, it could be beneficial here to see only what I can actually look at.

Let's turn on the outline here.

Whoops, the outline. There we go.

I'll just keep it turned on in here so that I could see this a bit better.

G on the Z, G on the Y.

Maybe I can scale it on the Z.

Let's reset the rotation.

Reset R on the Y.

Then G on the Y. There we go.

And now I can just move it on the X.

I can maybe scale it on the Z. G on the Z.

Let's try and push the camera a little bit outwards here.

I'll just select the camera, G, Z twice.

Then there we go.

I can probably, this man is standing on the ground.

He should be at least. Yes, he is.

Let's now maybe tilt this a little bit downwards again.

So if I do this, I think we will have to make some adjustments, however.

Then G on the Z.

Let's try and raise this little guy up and rotate it on the Z.

I'll hit Control S.

I noticed while adding this part to the foreground that we could actually do, we could actually

make use of adding something to the, that's looking perfect, I believe.

Hit Control S and then we can probably, yeah, add this like mountain to the side here.

Then just like maybe pleat side.

And we'll just leave it there.

We can actually now, let's just get rid of these to the side for now.

And we could probably, like let's hit Alt D, G, Alt S, Alt R, G on the X.

So that, you know, we are repeating the object, if you remember from before, just so that

we could show what this geometry consists, sorry, the scene consists of.

And this is looking fine, we should probably move it a little bit in.

Let's leave it like that.

Maybe let's turn on the compositions here.

I think we could make use of slightly moving that to the left.

Maybe rotate it to, let's leave it as is.

I'll turn off this again, I just want to see the composition guidelines.

I don't like this space up there, so I'll probably select the camera, add in some slight

rotation here, just like that.

Then let's copy that one more time to the other side.

So Alt D, then there maybe.

And let's rotate it on the Y, there we go.

Let's make it in the space right between these two guys, so that, you know, I get to see them both.

There we go, something like this.

I'll hit Ctrl S.

This I think we can mirror, so just Y twice, oh, it's not that rotated.

Yeah, so S onto Z twice, no, Y twice, and then minus one.

Just so that, you know, I have some different variations of how it looks from the original

shape or geometry.

And then I'll hit Ctrl S, and yeah, I believe this is good enough for a composition.

I think we will work on that, continue on working on it, and then start from the beginning

on the other scene.

Maybe sculpt one more shape or rock so that it can be added.

Should probably figure it out if we were going to or not in the sculpting chapter.

But yeah, we will see if we could, but other than that, let's see if we can actually play

something around.

I think adding some cables would be useful.

I'll just isolate this guy, I only need this guy, I'll hit Ctrl S, and hit Shift right

click here, and add a curve, a busier curve, and you've probably guessed what we are going to do.

Let's just try in here, let's give this geometry a little bit of extrusion, that way we can draw. There we go.

So now, let's make sure that under tool, we are drawing on the surface.

And now I'll just hit Z, let me see where I'm drawing though, okay, let's slightly change

this, make it bigger, and delete the entire geometry.

I think let's go outside of the isolated view, I want to see the camera, there we go.

Now we could probably draw in some cables coming out of the geometry here, let's increase

the offset a little bit, so that they are not fully submerged, let's not do it in front of the camera. There we go.

Offset is a bit too much, let's just do zero, and maybe decrease this to, is it decrease?

Yeah, I think it's the decrease, yeah, but one is too much, I just want it to be able

to detect the cable, three, four, I can maybe, five.

The default is eight, so I'm just trying to figure out an angle where, yeah, five is good.

It detects the cables, if I just slightly increase the offset, maybe increase it by

0.02, no, I should be like, if this is 0.4, or 0.4, then this should be, so if it's 0.1,

it's going to be 0.1 above the ground, if it's 0.4, that's going to be like the radius

plus 0.4, so it should be hovering over the ground.

Let's try 0.8, yeah, I think it's like twice the number for some reason, but that's fine,

I can just go with 0.4 on the offset, and then continue on drawing between these different,

we'll hit N here, we'll hit N here as well, let's just continue on drawing, see what we can do, so

I want my, like, leading lines to be going to that object,

you can probably add something going crazy, oh, that's too crazy, just, there we go,

I want it to adapt, however, with the cables,

again, I'm not using a tablet or anything, I'm just using the mouse here,

it does the job, and like, the tablet would require, you know, to be set up,

to be set up, let's do something here, a little bit more crazy, let's try and, like,

rotate around the subject, or, you know, I think these are too much, 0.3, maybe 0.25,

this is good, just G and the Z, and then slightly move the last drawn object to the ground,

and then I can probably now select the objects, so these are now a little bit,

G and Z,

G, that's fine, let's not think too much about it here, I could probably delete that last one

behind there, because it seems that, like, it's not ending, you know, somewhere, it's just there,

so just wait for the save to finish, so I think the thing we will be doing after is editing some

line, so what we can do now is that we can just adjust the composition of our geometry, so, sorry,

the composition of our scene, and then afterwards we will be working with the line, go ahead and,

like, figure out a composition of your own, again, try and make the relations between the

different objects, like maybe the main object here and the character to be a little bit stronger,

also look around for the big, medium, small ratios here, you know, of dispersing objects around,

this is going to create, like, the depth and, you know, add with the realism of your scene,

like this one could be a bit smaller, or this one could be a bit bigger, so that, you know,

you could achieve that, like, principle there, however, this has became, like, this side has

became too heavy, so I think the eye will move there right away, so maybe you can just rotate

this, or maybe further this out, so that, you know, could be better looking, and maybe we can

move this slightly to the right, so, you know, this heavy side is now balancing between the two

halves of the scene, so you can see that this is a bit too strong, because it, like, has a more,

more shape, or more percentage of the canvas, and this is a bit small, so

slightly moving it to the right should balance that, do not scale these up or down too much,

because if you remember, we did these to scale, so if you were to scale them up or down a bit too

much, this is going to cause some issues of, you know, how, you know, they really look like,

and so, yeah, I'll just hit control s here. Next, we will be adding some light and fog,

so that we can just make our scene, you know, add some depth to our scene, and we will talk a little

bit about the lighting, and then I think we'll be moving on to HDRIs, and then the rendering and

compositing, but for now, have your own composition ready, because we will be lighting it up,

so I'll see you guys on the next one.

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
