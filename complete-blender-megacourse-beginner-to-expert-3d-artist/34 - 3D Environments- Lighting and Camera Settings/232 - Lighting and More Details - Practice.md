# 232 — Lighting and More Details

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 34 — 3D Environments: Lighting and Camera Settings |
| **Bài học** | Lighting and More Details |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 42:05 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Lighting and More Details** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
- environment art, asset assembly và scene organization
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


All right, welcome back. The more we do this, the more we come to an end to this course.

But yeah, I think all good things come to an end. This will probably be the end of this

chapter. We'll be talking about lighting. So let's see if this is going to be enough.

First, I'll just need to adjust this because it looks a bit annoying. I see that the like

the faces of the inside of the satellite or the dish is appearing. What I would like to

or what I would prefer to have look at me is like the back face. There we go. So it's

something that has been bothering me ever since I finished the last recording. So. Yeah,

G on the Y. Or is it? This is looking fine. So I control this. So what do we want with light?

Well, essentially, and this is why we haven't like really finished up things,

you know, in a good manner, because if we were to look here, let me switch this to CPU,

because I've been facing multiple issues here. I'll hit control S again and check that the

bounces are correct. The sampling should be 64, which is right. I don't think we need to change

any other settings. I don't think we will need this bottom bar to be a 3D viewport as well.

So I'll just in here, like control B, select the entire thing and go into render viewport,

because I believe because we were using the GPU as a device for rendering when switching from GPU

to CPU, this is going to have like slowing effect on it. So as you can see here, it's pretty simple,

like pretty straightforward. One other thing I wanted to fix about the composition is where the

lighting is. Quickly here, what would you usually like to do is that, so here's the camera.

So here's the camera. Oh, I've been not clicking the right button. So the camera is here,

the person is here, and the sun is essentially sort of like on top of the object here. So

typically when the camera is at a certain spot, which is here, you know, usually drawn maybe

like this. I'm using a mouse, so please don't judge. So the person, if the person is in here,

or you know, whatever, usually the object of interest is around the spot,

the source of the lighting should either like be pointing that way, or that way.

If the lighting is pointing that way, then the shadows are pointing that way. And you know,

and vice versa. And as such, you're creating that, you know, line that is going to pull in that

interest into, you know, towards the, the objects themselves, because if they are,

if you are pointing the light from up top, and the shadows at the bottom, then you won't really

see anything of, you know, like you will not be able to differentiate between what should be like

the focus of the scene or the canvas or not. So as such, what you could do is that, you know,

at least a cheat on this method, you know, the HDRI and, and, and, you know, just stuff scattered

around is that I think we'll leave that mountain here. Oh, something else I wanted to fix is,

let me do this real quick. I'll be on the x and move this little guy there, maybe scale it

on the z. And since they both have the same, like material, at least, I mean, they are both

instance. So they should, let me just give them a random

rocky color here. And in roughness, crease it 2.7 or something

just for, for them to be, you know, in the background.

Let's make them a bit darker. Of course, like, it doesn't make sense to have things go darker,

the more you go in depth, but they will be, you know, mystified, essentially,

and they will lose contrast. So that's fine. We'll not care about the details just now. I

just wanted to fix the composition as much as possible. And I think that you could like do,

or you should do actually, that let's move that mountain a little bit in, rotate that

by 90 minus, and then scale it on the y, scale it on the z.

Let's first fix the lighting. So I figured that 140 is how shadows could be casted

in a better way. I think 135.

This is controlling the right one, right? No, whoops, it's this one.

Let me unplug this. And I'll be only using,

so I'll just zero that out, and this will be 140.

This is sort of the lighting we're looking for, but because we added this giant mountain,

it's now casting its shadow all over the place, which is not something we want. So what we want

to achieve is at least have some shadows right in front of our character,

sorry, light right in front of our character, and add this light or this shadow, I should say,

to the back element. So if I hit Alt D and move that instance mountain on the y,

then move this all back so that I obscure the lighting from this part,

could probably raise that up, scale it on the z, so that could partially include

that part. Let me just remove that part from the camera.

And now I have a strict object of interest, which is in light,

and then I have my character, which is in shadow, but because it's

in front of some light, then I'm creating that interesting looking contrast between each of them.

However, this isn't something I would really approach. If you will move the camera around,

this is something you're looking for. Using such geometry is immense, essentially, and

it's really demanding on some PCs, and they will slow up your PC no matter how fast it is,

the more you add of them. So there is a different approach that I personally prefer as well,

which is actually doing light. So I'll select both mountains and hit X because I don't need them,

and then I'll switch to the shader here, to the world, and then disable use nodes. And now

my scene is completely dark. I'll go back into... I'll leave this shader editor,

but I will switch it to objects. And do we have multiple scenes here? We do not.

Let me quickly demonstrate something here because it might not be possible. Let me just delete that

and copy the settings as well. I should probably switch the shading to solid shading here

because it could be not cool on my PC. So I'll switch to this. I'll hit Ctrl S and click on

here and copy settings. And now I have the settings here. So I'll hit Shift A, plane,

and Ctrl Alt B to remove that, zoom in on the plane, scale it a few times.

And you don't need to do what I'm doing right now. This is just for demonstration.

I'll switch here to cycles. Let me raise that up. Maybe give this the size of 100. Let's actually

switch it to rectangle and make sure that it's 100 on both sides. Then I'll scale this

up a bunch. And let's select the area light here. So the first thing you need to understand about

lighting, again, I believe we've mentioned this before, but if you hit Shift T, you can just

control the angle of the light. And now I could increase the strength here to something crazy,

like 5,000. And then, of course, you can change the color. You can change the power number here

into a negative number, and then it's going to absorb the color you pick. So if you have a

environment that is red or yellow, and then add in this color as a yellow, then you're matching

your lighting. But if you change the power to a negative number, then you're just absorbing that

number. Another thing you need to know, this might slightly take an effect on your

scene because it's essentially how many bounces. The less the light would be bouncing around,

it could be obvious if we add in a cube. Rendered.

You get this like a little bit darker values here. Again, I've tried like changing this to multiple

numbers. I personally haven't seen any speeding performance, but the default really don't take up

so much in terms of rendering or processing. So what do we want to do here? You can see that the

light here is not so harsh. It's pretty soft. And this is controlled by the spread here. So if I

change this to 90, you can already see a difference. If I change this to 30 again,

and then maybe 20 and so on. So one is going to make the shadows as sharp as possible or the

light, I should say. But the further you pull that light up, it's not really changing that much.

It could be more obvious if this is like 90, then you start moving the light up and down.

So I'll switch this back to one because the next thing is that we can use nodes.

And let me quickly here zoom in on these. I just hit a. So the canvas was just like the nodes were

very far apart. So as soon as you use nodes and you're just zooming out without finding anything,

just hit a while your mouse is on the shading area, hit a and then press on the dot or the

period on the numpad. So that one. So as soon as you like use nodes, nothing really changes because

this is like an emission shader, which you know, essentially does the same as let me zoom out here,

just the same as, you know, changing the color, changing the power.

But of course, like this is, you know, more of a real time simulating the power here,

because it's essentially using the what. So you can, of course, like use them both,

you know, to change the power and emission. But this does the same as this and vice versa.

However, we can add things to line, you know, as soon as we use the shader,

you know, the possibilities are endless. And we've done this before.

What we can do first is that we can so we can add a noise texture here. So let's do this.

But then again, it's not so obvious. Because if you plug, if you plug that in directly in a

any shader, you know, if you're just texturing your object or something,

this will not have an effect because it's very, very light, it's not really that strong.

And then again, you might remember that we could use the color ramp. And by

grabbing these two together, my things, my strength.

Oh, the scale is very big. So 1.5. And now it's becoming more and more obvious. So

now if you switch this to 4d, we have a seed value.

And now it's like as if we are lighting our sky or lighting our space with that texture.

You can do this a bit more.

And then I can like change

the scale here back to 1.21.

So yeah, we have this simple setup. Again, you can see that the light is essentially

being emitted through this is like being affected by that noise texture. And

if we were to change that strength, we sort of have the same effect.

Let me just do this to see.

Yeah, nothing really changes there. So let's multiply that by two.

And I think I would like to grab your attention to is that, of course,

you can add like a mapping node here, then change the scale of the shadows here, or the

light dead spots where it's creating shadow. Of course, I usually start by one and then start

increasing this number because I would like to have a softer edge here.15 seems fine.

But just remember that this is going to affect like if we bump this to 90, then you lose these

dead black spots we used to have before. So just make sure that you do not bump it by a very large

number. Another thing I would like to show you is that if we were to scale the object,

you need to make sure you do two things. First of all, you saw the first thing we saw is that

the power increases. So you might want to consider to multiply this by five, maybe.

Then if you increase it now, multiply this by three, and now we get the same shadows again.

So the other thing you notice is that the texture isn't being scaled with the object.

So I think if we were to scale like this 200 or 2000, I think it doesn't. Yeah. So the only method

to go around that is that you select object, this, and then select the area light, it's area 001.

And as such, you will be scaling the noise texture with it as well. However,

you can still do the scaling from here. So there are multiple options here you could go with.

But yeah, this is like the method I would be using in lighting our scene at least. Again,

you could use your favorite method from the previous we've discussed.

HDRI method is pretty easy, gives you a light that is pretty cool.

Did I switch to cycles? So I just clicked X here on that scene. Yeah, I switched to,

it does switch to cycles automatically. So I'll just quickly here go into solid view,

go into the camera, and yeah, we switch to render view here.

Should be dark. There we go. Then if I switch this to 3D viewport, because we will not be

manipulating the light at least for the first few times, or maybe we could actually do this

and then split this one more time into a shader editor. I'll make sure that we are in CPU. There

we go. We control S and then or actually try not to save while in render viewport because this is

going to greatly affect the startup time of your scene. Essentially, if you save on EV,

it will start on EV. If you save on solid, it's going to start on solid. And if it's on rendered,

it of course is going to take a little bit of time because it's going to open the file as well

as render the view as well. So I'll hit shift and right click to reposition my 3D cursor

somewhere right there. I'll hit shift A and add a light, area light. And then

let's actually have it on top of the camera first. So G, hold control. There we go.

That light looks really cool, but sadly we have to let it go. So switch this to one

and then switch this to rectangle. Now they both have the same value and I'll just move this

upwards. Now we can just put this there, make this maybe 5,000 by 5,000.

That's really small, is it?

Oh, is it the bottom? No. I cannot see the indicator of 100. Oh, it was pretty big.

Then I'll just increase the power accordingly. So I'm looking at the light here. I'm starting

to get some light. Again, I'll just hit G and Z. It's outside of the frame. And then G and shift Z.

G and Z. Shift T so that it's pointing probably up there. And I already can see some interesting

lighting here. I'll multiply this by three, multiply by five. And now we're getting some

results. I could increase the Y by 200, 400, 300.

Okay, I'll just keep this 100 and this is 200 maybe.

And then I'll just duplicate this Alt D or uninstance it I should say and move this on the Y.

Oh, I'm now changing both. I should probably not uninstance them because I'll greatly change

the settings from them both. Multiply this by five. I'm aiming to light up this mountain at the

back. So Z twice. Let's actually only look at the bottom part here to speed up the process a bit.

So I'll multiply this by five. That's too much. Divided by two.

Divided by one and a half.

G on the Y.

Let's try and probably change, yeah, the angle of the lighting here is quite...

I'll probably switch this to maybe 30 or something to disperse its light a little bit

rather than having to change everything up. And this light we could use X 300.

But increase the power by two or something. Maybe multiply it by one and a half.

And now we're getting somewhere. Let's do 400 for both.

I want the light to hit this mountain as well. So I'll probably move or increase. Let's increase

this on the X by 1000. And decrease the spread. And increase the power by two.

So we can increase this power by two. You just match, you know, roughly the lighting from both.

I might want to decrease the roughness here to 0.5 back again because it's not,

it's like hardly picking up any light. Let's increase the height of this up a little.

And decrease the power.

Divide it by two. Increase this to 45.

So if we were to turn on and off, okay, it's not pointing right way maybe. So 10.

We're getting somewhere interesting here. But I still need to light up this, these two mountains.

Let's see. Okay, let's maybe actually go G into Z. And then shift T there.

So there I'm pointing to the light. Decrease this to maybe 700. And this to one.

Let's move this on to the back. Multiply it by five.

Multiply it by five. There we go. Now I'm getting the light I am looking for.

Maybe if I move this on the Y. Or let's actually flip that. So S on the Y minus one.

There we go. That's something. R on the Z.

I'd like for it to catch some light.

This is good. And then I'll just move it on the X slightly. Slightly.

And now I'm catching that light. It's quite sharp. However, I want it to come sort of from above.

And maybe shift T to slightly change the rotation here. And now we can start increasing the spread

45. So that I can like match them both.60. Divide this by one and a half.

Let's actually decrease the spread. And just start on dividing that two.

Divide it by 1.75.

And this is good. I'll hit Control S. And now I'll just need to change that.

I think I need to increase. I'll hit Control S.

Need to rotate that a bit. Just a bit. G on the X maybe. Not Y.

No. It needs to be on the Y. Because the light is sort of hitting the end here.

It's adding this highlight that I really don't like. Rotate it on the Z slightly.

And I think this is looking good. So I might increase the power of the big light.

Or the big light there. Or slightly increase this spread.

And let's do this. Divide it by 1.2.

Let's do this. Divide it by 1.2.

This is looking good. Hit Control S. I think this is actually good. I now

have some light there. Which is nice. Hit Control S.

Of course this could work to your own preference. Let me just quickly add a texture here as well

to the cables. I'll increase Metallic. Let's actually give them a texture from

the textures we already have. The structure one was cool.

Control B. Control B to zoom in on one of these. And I'll just separate this.

Because let me first object convert to mesh. And quickly here UV unwrap it.

U, UV unwrap. And then I'll make sure that I separate this.

And make sure that I use the UV. There we go. Is this the final result? Yes.

If I switch back to this. I'll now hit Control B.

Maybe because I'd like to focus in on an even smaller area. Oops.

Convert. I'd like the rust to be on top.

But let me decrease the AO here to see how. Oops.

Was it that?

Come on.

I think this is the best we could do.

So let's try and change.

This is good. So the rust is there but it's like not so aggressive.

And it makes sense for the rust to form on the parts.

Actually the bottom parts, you know, make sense as well because this is where the

water would be, you know, mostly collected.

But yeah, enough of this. Let's now do what we wanted to do previously.

So I have these two area lights.

Let's leave the first as is and just change the lighting here.

I'll click on Use Nodes. Again, I can just go to the bottom here and click on Use Nodes.

But I'll do it from here. Doesn't matter.

I'll hit A and then period to zoom in on the node setup.

And then I'll just hit, yeah, I'll just add the setup from before.

So the color ramp and plug in this to whatever.

And then hit Shift A and S and search for the noise.

I can use the Musgrave. I can use Voronoi actually.

So let's first try the Voronoi. Voronoi texture.

For the distance to edge, let's see if this is going to work for us.

We might need to change the power here immensely.

So we, there we go. Let's just do color ramp.

Let's go on the top view here.

Let's go on the top view here. This is going to make much more sense.

So this is the big light and this is the small light.

Multiply this by three.

Strength five. Keep it at one.

Five. Okay.

I think it's the texture. This should change dramatically

if we plug that in. There we go.

So just divide this by five. Maybe that's the number I added.

What is the spread on that? This one as well.

Yeah, I just need to decrease the scale here.

0.5.0.05.

We can just flip that so that it can have the lights be more prominent.

We'll just, let's, this is looking quite great actually.

A little bit forward here too. Like maybe just try that cable.

And let's play around with the light. Oh, that's not our light.

I'll just feed that for now and

I'll play around with the light here.

Until we get something we could work with.

I could probably add a mapping node here because this is a seed value.

So what it does is essentially it changes like the look for the entire map as you can see.

But it's better to just, you know, slightly move these left and right

rather than having to move the entire mapping setup.

So I'll just go back in here. And if I maybe like this pattern,

I can probably just move it on the Y

or on the, like any, any axis essentially without the, without losing the pattern I have here.

Trying to leave everything as is.

Maybe I can slightly change the scale.

This is something pretty cool. That's really cool actually.

I'll just slightly move the light towards the character just before.

Maybe changing that would help. Move on the X.

And I might need to slightly change this 1.5.

Divide, no. Divided by 1.5.

Increase this to 5.

This light is a little bit too harsh. So

this needs some light as well. Like this is cool, but this is too dark.

I think the light isn't even like pointed at it.

It sort of is like it is within the area light.

Like it is within the area light. So maybe.

There we go. Let's just.

I'll up the scale again to 4 maybe.

This is looking slightly better. Switch this back to 1.

Maybe moving this around. There we go.

So what I wanted to achieve is like barely have the light

around the character, but as well having it catching or, or the light in the background.

But as well having it catching or all the other objects, you know, objects of interest.

I might continue on adding some details here and there.

I really wish that I could have like achieved more during that session.

But sadly, we still have a lot to discuss.

First of all, you know, fog. Fog is something we add a lot.

And this is why I didn't add texture to the background elements.

It's only because like they will be obscured with that fog anyway.

The other thing is we want to pay attention to is that do we lose,

lose details, details here because this is the sand texture we've made a while back.

So we might need to increase the scale on these to have some like a little bit more bumpy.

For now, however, go ahead and play around with, with area lights, with nodes.

Light essentially is the thing that you wish to manipulate and play with every scene.

It's quite interesting.

Now you can get extremely good results.

If I find out that I could change anything here and do change it,

I'll let you guys know in the next one.

For now, however, play around with the light.

Next up, we should be playing around with fog and add some clouds to our scene.

For now, however, I'll see you guys on the next one.

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
