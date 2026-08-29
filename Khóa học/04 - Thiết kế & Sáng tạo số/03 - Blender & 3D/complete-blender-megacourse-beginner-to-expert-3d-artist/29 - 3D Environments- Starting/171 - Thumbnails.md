# 171 — Thumbnails

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 29 — 3D Environments: Starting |
| **Bài học** | Thumbnails |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 38:53 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Thumbnails** trong pipeline của section.
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

Welcome back. Now that we learned how to design a composition and design a scene and how to

make it properly, you know, readable. So now we'll be talking about something really, really

important. You've collected your resources and you have some references and you have

your design principles in mind and you know them very well. What you need to do now is

something called, you know, making thumbnails or thumbnailing essentially. And this is really

essential in your process simply because it gives you a heads up in case that, you know,

before going through the tedious process of making a full scene, you get to see how it's

going to look like before it's actually, you know, created. So what we're looking at today is

a small tip inside Blender. Of course, you can do this by hand. I personally prefer using pen

and paper, but for the purpose of this course, we'll be doing it inside Blender. You can also

use that with, you know, digital tablet and Photoshop, for example. But yeah, for now,

we will be using Blender. I have Blender open here. I expanded. I added in a plane and scaled

it up a bit. Under passes, you know, here, view layer properties, passes. I will search for shadow.

Now, whenever I'm lost, just a quick tip here, whenever I'm lost on finding something in here,

you know, was it in this scene? Was it in world? I'll just search for shadow.

And it viewed me, it gave me a few options here. So everything is dim except these one,

two, three icons, which is the render properties, layer properties, and object properties. So

these, it's indicating that only these three do have a setting called, and has the word shadow

in it. So under, it's going to be highlighted by the sub menu will be highlighted in blue,

and then you will have the option also highlighted. So you can also go into these

other different settings just to have everything back in normal, you'll just click that X.

But let's see that again, shadow. So three main menus and a few sub menus, all depends. And then

it was shadow. So passes light shadow. And now I found my setting. So these,

activating these passes allows you to choose from them in under the combine here. Hold on a second.

So under the render pass, you will have these passes, you know, combined is all of them,

which is the default. If you switch to shadow, you won't see anything. So let's add in a sun lamp.

Oh, rendered. Yeah, let's add in a sun lamp.

Now, we're looking at it. It's not working here. That's because we don't have the scene light on,

but it works in Eevee. It works even better in cycles. And the reason we're looking at,

at making it this way is you don't want really any much detail in inside your scene inside,

you know, thumbnail, essentially. So we don't really need to bump the strength here. The only

thing we need to make sure we have is having the contact shadow. And

let's match. Let's try and match the edge of this with the light.

Yeah. So changing the bias here.

This is one. Let's actually have this view wireframe. Again, you can search for wireframe.

It's under even if a like sub mini has a options to choose from. It's right there.

Oh, no texture wireframe. Yeah. I just need to match the edge of the cube with the shadow.

Maybe switching to cycles will help with that. And I'm sure it will.

I'm not sure what's a better way to avoid these shadows. Again, rather than combined,

combined, we'll look to add shadow. And now it's much better. I'll hit control B to limit

the boundary to the camera, then so that it could be a little bit faster. Switch to GPU.

We'll get into details with these later on. But I'm just trying to get as much speed as I can.

I don't need that much samples in the viewport. So maybe 512 is good enough.

As you can see, it doesn't really matter. I don't need to denoise either.

What I can do is move the camera to back a bit. Actually, let's find a good position

a good position for us to look at first. Let's move that up, scale it in the Z axis,

then scale the plane and have something to look at.

Let's switch to transparent. No, we can we can have

the background disappear a bit.

Oh, no, it's in here.

Let's leave it like that for now.

Under this. I don't need it to be a wireframe anymore, so I'll just remove that. What's going

to indicate the faces is how objects are shown in the sun.

In the angle, I'll make it, say, 50. Oh, this is going to make it much more softer. So

0.1, just to make it as sharp as possible. You don't see these soft shadows. Maybe you do, but

it all depends on how you're making your scene. I'll go into edit mode.

Maybe I'll select I'll hit control shift and then select this to be able to select all of these.

I will go outside and just apply all just to make sure that I don't have anything wrong with

the scale. I'll hit I twice. And then E to have that nice shadow. And now whenever I look at this,

OK, now I understand this is maybe a building or something and I can actually copy that.

Maybe scale it down. Scale it on the Y axis. Now we are creating.

Having two buildings affect each other's shadow is really awesome. Under camera properties,

you make sure that in the viewport display composition guides that you activate thirds.

This is one of the important things to to look at when when making a composition. So

quickly here, these are four main cross sections you're looking at when making composition. You're

always trying to make your object of interest around these these cross sections. Of course,

they don't have to be exactly at the intersection. They could be like around it. But just so you

know, like these are four important intersections that you don't really need to highlight anything

else than your object of interest in these in these spots. So maybe you have an object of

interest here and maybe your character here. And that's that's a good relation. You can also have

it have your object of interest at the center and maybe your object that's approaching it here. And

then that too is a good relation. Another thing, let's actually enable lock camera to view and move

with the camera with this. Another thing is you have these horizontal lines, you know, it's it's

thirds vertically and horizontally. And although not you not always, but it's preferred not to have

this horizontal line, the ground exactly at the center. This is a bit boring, like you've you've

essentially splitted the scene in half. And it's it's it's going to be quite hard to make it

interesting to look at something about the ground just just so you know. So maybe it doesn't have to

be exactly at the center, as you said. So you can move it maybe down a bit or up a bit. And

if you move it up, then you're sort of like choking and making the scene, you know, in a mood that is

a bit unease. I'll just make sure that I don't have any rotations in a Y and lock that actually

having this at 90 and then moving this up and down. Oh, let's move it like this,

moving this up and down. I'm now controlling where where things are. Let's actually bring in the

our character from desktop. It's there. Oh, that's that's actually a good thing to look at.

Let's actually turn off camera lock. This is a good thing that we added this guy in simply because

we now know that this building is of scale. So always make sure that you have something,

you know, the scale of already in Blender. Let's quickly switch to Eevee here, scale things up.

And now this this is looking like a proper building, a good large building.

Let's actually continue working in Eevee, actually. I'll switch back to Eevee here under shadows.

I will make sure that this is 4K.

And keep size 4K as well. It's not really demanding anyway.

This is a bit better. Again, I'll select the sun.

This this isn't really changing that much.

Maybe you can change the bias again.

Maybe you can change the bias again.

No, it's not. It's not the best option, but.

Yeah, I mean, it works. You're not you're not looking to make any details anyway, so

I'll select the camera. Make sure that I like to view.

Then we move that lock camera as well.

I need some more shadows here.

Again, if I'm facing any issues with objects hiding away from the camera, I just select the camera

and under under clip, I'm going to select the camera and I'm going to select the lock camera.

Start and just increase end up a bit. This does not really affect your render time.

It's just to, you know, limit the view of the camera.

Let's rotate the guy a bit so that we can see him actually.

We need something dark in the background, so let's say that maybe having these

are shapes, graphical shapes of, you know, stuff, you know, inside.

Inside Blender isn't really, you know, of that satisfaction.

Maybe you want to add something dark at the back here. Let's actually maybe have it.

Yes, and why, you know, creating contrast like just like in. Now.

We now see that guy, maybe this is a street, maybe it's going behind.

The man walking here, of course, this is not the best position of the guy, as we mentioned before.

Yeah, now and now we're starting to have something to work down with. Let's increase this again.

Just to make sure that we're not facing issues.

Shadow.

Trying to make this a shadow catcher.

I'll give it a holdout material. Let's see here.

No.

Yeah, we will leave it as that for now. So what we're trying to learn here is a few things. First,

as we said, we're looking at making how to actually have this look, the graphical look

inside Blender. A good thing about this is that you're essentially doing two things. First,

you're making thumbnails. And then as soon as you're satisfied with an outcome, just switch

back to combine. And now you have your blocked scene essentially ready for you to edit and

actually use and manipulate. That is a good thing, simply because when you're

thumbnailing inside Photoshop, you will have to, again, start from the beginning and blocking your

scene, as we will see later on. But this is actually a good example of how you should do thumbnails,

simply because in most cases, whenever you are introduced with a task of making

an environment, you don't really want to go through the hassle of making an environment

and then have the client tell you that this is not satisfying and they would need to change

the angle or something. This is a great example of this. So essentially,

they didn't actually want the character to be at the bottom. They actually wanted the character to

be maybe at the bottom, sorry, at the bottom left or bottom right. They wanted the character to be

in here. And the object of interest is like far away back in the top center. So we'll just do

that. Or maybe actually like they don't need that. What they need is like a view

of the city

from the top.

What's cool about this is that you get to manipulate things. I can now select the camera,

hit control alt zero, increase that to 200. Oops.

Let's actually, yeah, have that top control zero. And now you're looking at the city from the top,

from maybe like an aerial view. If I hit Q, by the way, if you need to

add any of the settings, which is almost like any option inside Blender, just right click it,

you'll find an option that says add to quick favorites. The lock camera to view is under

view and then view lock, then camera to view. And rather than going through that process,

I just hit Q for quick favorites and lock camera to view. And then when I move around,

I'm moving with the camera as well. Whenever I'm satisfied with the angle I have, I just hit Q

and go back to here. Just make sure that it's zero in here. So yeah, of course, when doing that,

you are introduced with a different design. So let's switch back to here. Just make sure that,

as we mentioned, that these four intersections are vacant for only your object of interests.

So maybe a character is standing up in here and maybe there's a fire going in this spot in the

city. And now maybe relieve the space around this complexity. We're essentially making

what's more important is led to by these less important buildings. And now

we have all these options. Let's scroll to the

annotation to quickly just delete those.

So yeah, as I mentioned now, what you're looking at making here is to

essentially, this is an object of interest. Maybe this is an object of interest. Your

character is standing up here. Or maybe like there is a plane going in that direction,

which is this. Maybe it's even closer and maybe pointing. Maybe it's like going that way.

It's like going that way. This is very far. And then maybe the eyes led to the scene

by having different objects. You know, X, Z, Y, Z. Just like that, maybe.

And now we're leading the eye to that. You're cheating your way into making it.

Now, you actually have your object. Let's turn that off. It's going from here, here,

there. Maybe have another thing go in that direction. Let's look away from here.

And now you have an object of interest here. Vice versa. You can actually have your object

of interest here by, as I said, adding a fire. We'll get into that. And then

your character is maybe here, moving around these, you know, so that they could reach that spot.

We can actually rotate that building a bit so that it could point more at the object of interest.

So with, you know, all these buildings here, we're looking at making it, you know, more

random, but more looking at the building, you know. Of course, this isn't blocking,

essentially. We're just looking at how we could make a thumbnail out of this. Now, the reason

being is that you're not looking into making something that will be changed later on. You're

looking at something that works well, as well as gives you the opportunity of saving time,

just in case your client or our director doesn't really like the direction you're going with.

This, you know, this angle actually is pretty cool. So let's actually add a camera.

And then hit Ctrl Alt 0. And then the camera is right there. Let's select it. G, Z twice. Oops.

Oh, I selected the wrong camera. I had the wrong camera selected. Yeah.

So, again, let's Ctrl Z a bit. Have this camera activated before you hit Ctrl Alt 0.

This is actually a very cool angle. Ctrl Alt 0.

Have this show in viewport display. Sorry, camera, viewport display, composition guides,

composition guides, and then thirds. You can also add, like, maybe a center.

Diagonal, sorry, golden A and harmony A are another way of, like, actually,

you know, having your object of interest at. So, essentially, but, of course, like,

you have to actually fit your objects of interest exactly at these spots. Let's actually

rotate these down a bit. Sorry. No. Zero here. Lock that. Down that a bit. Rotate it here.

And then our man. Shift D. And here it is. And maybe there's a, maybe there's another man

up there. And it's like there's a story between them two.

You know, this man is just for reference. And now we're having something to look at.

Maybe have this duplicated. Whoops. Scaled. We're now making.

Let's reset rotation. Scale it down first. Then rotate it to our liking.

I'll hit Z twice to rotate it on its local axis. Maybe scale it in its Z axis. Rotate it, like,

to the side. Rotate it back again on the Y. It's just a process of, you know, rotating and such.

Let's actually block the scene with that one. Bring it in closer. Scale it up. And now the

scene is blocked with this. Move this down to here. Now, um, let's have a look from the top.

Yeah. Just. So, G and D X. G and D Y. G and D X. That's, that's good enough for a block here.

And then when I go to render view. You know, some of these details are gone. That's simple.

We can just rotate the, um, the sunlight to our liking. Yeah. It's starting to get there.

Maybe it's actually coming from behind the other character.

Wow. That, this actually looks very good.

You know, it doesn't have to be only the sunlight. Like, you can add, uh, say that,

uh, you have an object here, but now it's obscured with the, um, um,

with the, uh, shadow of a larger object. So just add in a, an area light.

Uh, then move it here. Uh, let's look for the character first. Yeah, there it is. G and Z.

Um, I'm holding shift T, uh, to, and then, um, moving the mouse so that it could like point

at the character. Um, let's go back to the render view. Make sure that this light spread is zero.

Uh, let's actually bring it back behind the character.

So I'll move that up here.

Uh, I just hit control Z. Let's bring this back in.

Let's bring this back in. Let's alt R actually, and then R and X, sorry, Y, then 90. And now

it could look exactly at the character without the issue of

having to, uh, worry about. Okay. It can go lower than that.

Let's actually decrease the size.

Uh, let's bring it closer to the character.

Maybe rotate it even more in the Y and more in the Z.

Increase the size that we could see the character. I believe it's not, uh, completely.

Yeah. It's a bit obscured. It doesn't really matter, but yeah, like you understand the essence,

like, um, whatever object you're looking at, uh, you know, that we're essentially creating value

here. So something, uh, um, light over a dark value, something, um, uh, light over a dark value

again, and so on. Uh, again, you can always change the angle of the camera to your liking.

Let's actually, uh, hide that for now. Then just control the sun lamp.

And as you can see the variations in the possibilities are, are endless. Essentially,

this actually looks really good. Um, as you can see here, we can just rotate these buildings

so that they get some light. Of course they are obscured by something else. Yeah. That one,

that one, let's move this back a bit. Just want

the character at the back to have something, uh, of value behind them. So

now that it's starting to catch light, I'll just move it in the Y

and now look at that. This is actually really amazing. This, this looks really cool. Um,

we can rotate this building just to get rid of the, uh, um, let's R, C, C twice, and then 180.

I just flipped it on its own, uh, uh, C axis. And now this, this looks really amazing. Like,

you know, as soon as you add details to this, um, uh, you, you'll be greatly captured by,

by the power of, um, uh, Blender and how, and how it could achieve a lot of amazing things.

Yeah. So with that, with that said, uh, you've learned about composition. You've learned about,

um, contrasting between, uh, different, uh, things, you know, shape value and color. Um,

you'll learn how to make a composition and you learn how to actually give that view in Blender.

Uh, this, this, uh, method isn't really demanding in your PC. And that's why I went crazy with the,

uh, uh, shadow quality, um, in Evie. Uh, it doesn't really matter in cycles as well.

If you're using cycles X, it should be like really fast. Um, like I see, I see here, like

10 samples is just enough. Like yeah, three samples is even good, like good enough. And you

don't even need a denoising on, like I have it, uh, deactivated essentially. So maybe 16 samples

is just good enough, you know, and just your rendering is done. Um, you don't need anything

more than that. Explore with thumbnails. Make sure that you do have your own, uh, made out of the,

uh, um, like, you know, not really asset in mind, like say, say we have to make, um,

say we are making a scene with satellites, uh, quickly here, I'll switch back to the,

uh, viewport shading and under scene, I'll make a new scene. So I'll just here,

new scene, uh, this scene is essentially like a brand new scene. Uh, it does not preserve

any settings. It's just like a new scene, you know, a new empty scene. Um, again, I'll go into

under layers, shadow, and then maybe, so I'll just make a huge blank here. Uh, the good thing

about this is that of course you can switch between scenes, have an object copied. So control C

and then switch back here. Uh, make sure that I have the clip and a little bit further back.

Um, control V, um, the object is now even, uh, pasted, uh, at the, uh, location it was, uh, uh,

looking at. So, sorry. Yeah, there we go. Uh, so it does have the same, uh, metadata, uh, as the

original, uh, one. Um, so yeah, um, maybe have something looking like a satellite.

Um, we will do that in the next video, actually. So now you learn, um, how to make thumbnails,

try to do some with your own, uh, references and your own, uh, resources. Uh, as you can see here,

it's not that difficult. You know, the principles you have, uh, you know,

essentially cheats on, which is like the, um, uh, the guides that you can use to, uh, um, to,

to place objects and, and, uh, you know, characters in, it's not really that hard.

Uh, the only thing you need to pay attention to is that when making your composition,

you are not, uh, going over the top with it. It's, it should be simple. It should be a graphical

representative. It doesn't have to have, uh, details. Um, like this is a good example for

a thumbnail. You know, if I decreased these a bit to 16 as well and hit F12, um, in no time,

I should have, um, an asset. Of course I've hidden the area light. I didn't really, uh,

turn it off from the camera, hit render again.

And instead of combined, I'll go to shadow.

And, you know, if you're using Photoshop, uh, or drawing by hand, this will take,

you know, a lot of time. Like we've essentially finished the rendering in 11 seconds or 18

seconds, you know, uh, it will take much more time than that. Um, but this is a thumbnail that

you could essentially show to your, um, maybe art director or client and tell them this is good or

not. If it's not, of course you, you will not be presenting them with one idea. This is another

good, uh, maybe composition. I can actually change the sun location again, rotation so that

I can have some, you know, um, light here. Yeah. Maybe actually have it from behind

and have an object being, uh, behind the character casting shadow. Let's select the sun,

have this rotated from behind. So the characters itself is lit up, but it has a shadow in front of

them. So this is another, um, composition we're looking at. And, you know, the more you play with

it, the more you'll have, uh, options to look at, uh, from, of course, and, you know, of course,

present to, to your client or director essentially. So, yeah. Um, in the next lesson we'll be making,

we'll be looking at actually how to start blocking our scene and, um, actually start working inside Blender.


