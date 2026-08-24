# 231 — HDRIs

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 34 — 3D Environments: Lighting and Camera Settings |
| **Bài học** | HDRIs |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 42:11 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **HDRIs** trong pipeline của section.
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


Welcome back. Today, we will be talking about HDRIs. Now, it can be plain and simple, of

course, just like with everything in Blender. It could be, you know, straightforward, you

just bring in an HDRI that you pretty much like, maybe tweak the rotation of it, and

then just place it and that's it. Of course, we'll talk, however, a bit in depth about,

you know, HDRIs. Of course, you can control HDRIs in a multitude of ways that could help

you, you know, reach a slightly better result with just one HDRI, or even use multiple HDRIs

to just have the same input. So, what I will do is that I will quickly here at the bottom,

switch this to, switch this setup to world. And this is the first time I believe we've

introduced that tab. So, shader editor, just as usual, and then world. I think it's not

going to be possible to have a preview in Eevee, so what we can do is that we can maybe

decrease this view count, maybe 64, hit control S, because we will be using the cycles engine

here to preview our world tab. Let me turn that on, just to see if it's loading or not.

This is what I want. So, what I will do, I believe I have a sun here, or maybe it's because

we should have a light that isn't turned off. There it is. Maybe one more time, one more light,

probably, somewhere. I'm just looking at the collections here to see if we have any sort of

Oh, we have it turned on in here. So, let's turn on the scene world. So, this is like the default.

If you just use nodes, just click use nodes for world, you'll be introduced with these two

outputs. So, what I'll do is that I'll select this background, like texture, and then just hit

control, I don't want a principal setup, I just hit control T to add the setup, and then you'll

get introduced that pink sort of like error texture. So, yeah, before going on into like

selecting our texture here, or sorry, HDRI, I want to tell you a few things. So, obviously,

we went to Polyhaven to download the HDRIs. So much credit and appreciation go to these guys

for providing these for free and for CC0 as well. So, what I type in is desert. And now,

there are a few things you need to look for. So, first of all, these colors of any texture bleed

into your scene. So, if you would like to like, if you would like things to be more realistic

and want to keep, you know, the, you know, colors of the HDRI into your scene,

then just pay attention to the colors of your HDRI. Here, you can see that it consists of,

you know, blue and green, essentially. And this, although this like, it does provide

harsh shadows, as you can see from the bottom here, you know, quite similar, not as harsh,

but, you know, quite similar to the desert-y type of look. It still has this like green,

you know, bleed into, it could have this green bleed into your object. So, you know, of course,

green will be reflected at the top and then blue to the bottom. And, you know, it won't be as

realistic to your object. However, what if we want to mix, like maybe have the color from this

HDRI and, you know, make the, you know, this HDRI visible. So, I can see this, but I'm getting the

colors from this and, you know, of course, essentially the color strength from this.

So, yeah, we will be doing this. And this is why I have these two already open. However,

you can also do something that is, you know, could be quite a mistake here. Let me find

something that is not as harsh here. So, I'll go back to HDRIs and quickly here, look at something

like that. So, having this view, of course, like this is the default preview for HDRI Haven, but

if you switch to here, you will be able to see how the color or the HDRI is affecting without any

other, you know, additional lighting is affecting your object and sort of the, you know, the gloss

and reflection, refractions, how is it going? So, you can see here that the shadows are very harsh,

very straightforward, you know, strict, something you would actually see in desert and it makes

sense. So, even if you would like to see the color of this on that HDRI, maybe you like the skies and

you want the skies and maintain these lights, it wouldn't really make sense, you know, because

looking around the scene, you won't be able to find a sun, you'll just see clouds everywhere.

So, just make sure that you, let me refresh that real quick. So, make sure that you have, you know,

the sun obvious in both scenes, you know, of course, if it's a sunny scene, maybe we'll be

using a cloudy sort of, you know, soft shadow HDRI for the rocky scene, but however now, we need this

deserty look for that scene for now. So, that's the first thing. So, or the second thing I should

say. So, first thing, pay attention to the colors of your scene and the sun, where it's located.

And the second thing is make sure that the shadows aren't as, you know, make sure that

the shadows are matching if you're using multiple scenes. And the third thing is I want to talk

about is make sure you download the EXR. These, as you can see, they are less compressed version

from the image. They also contain the, I believe, the lighting data. So, I believe if you use an HDRI,

I think you will not be able to bump the light strength quite as much as is going to be in the

EXR. The second thing is I mostly use the 2K HDRIs. The quality isn't obvious out there,

but when you want the scene itself to be visible inside your scene or environment,

then make sure that you bump up the quality a little bit.4K to 8K is quite enough.16K is just

too much. So, but still, of course, you can use it. I don't think it's going to be as heavy

as a texture, of course, because, you know, the texture has different maps and needs some

calculations. So, yeah, an HDRI is going to be a bit easier than, you know, a bit easier to compute

than a texture. So, I went on to the 4K. So, EXR 4K and then I downloaded this Sunflowers and then

GOE Gap or something. So, these two. And, yeah, I downloaded them already in my scene here or,

sorry, I have them in my assets. Then HDRIs. So, I just made sure that I moved my

HDRIs to the right folder. I downloaded an extra HDRI here that I might not be using. But, yeah,

you can just download as much as you want and then you can, of course, use them in any scene.

Again, much appreciation for PolyHaven for providing these, you know, for commercial use,

of course, without any commission. So, maybe let's start with this one. So, as you can see,

the result is brilliant. Maybe this is something you're satisfied with. Again, many people only use

like this. So, just bring in, this is an environment texture, by the way, and it reads

the HDRIs differently from an image texture, essentially. So, if you hit Shift A and S

and then tap in environment. So, this is quite different from an image texture,

essentially. So, this is, you know, the environment texture. Again, I'm not paying

attention for now with the, like, background mountains. I just want to make sure that I have

the, you know, the scene set up and then I can just go and detail things a bit more.

I think let's keep it like that for now. I was just wondering if we could change the setup a bit.

Okay. Let's just leave it like this for now. So, there are a few things you might have noticed. So,

of course, the sun has a certain direction. I have the sun here turned off. So, but we can see that

inside here, the shadows are being projected to a certain direction, which is like, I believe,

this direction. But what if I wanted to

rotate things up a bit? I can do this from here. I'll go back into this area,

Control B, just make sure that I'm inside the boundaries of the camera.

Just Control B again, and maybe just look at this part right there.

So, yeah, I can maybe rotate this by 30.

Let's try and speed things up a bit here. Go to line bounces and make it this eight.

I'll quickly here disable everything that isn't in my view. So, I'll just select all these,

click on H. I'll just make them, Control Z, Control Z, move these into collection sex.

Well, I'll just leave a collection six here and then press OK and just turn off the collection

six here. Now, I can go back into camera and Control S and then back to the rendered view.

And now, yeah, I adjusted the light path is here to eight. This will decrease the number of bounces

of light around. It does not make great effect on the lighting, but it's so slight,

you can't notice it if you, of course, pay attention. But if you decrease this

by a not so great amount of numbers, like from 12 to eight, maybe you wouldn't really notice

a difference here. So, yeah, like we want to interact with these lighting in a way that

we want this to we maybe want the lighting coming from the camera direction.

So, we could probably rotate this on the Z by minus 15. You know, just observe the results here.

30, no, minus 45, minus 55.

The sun is quite perpendicular to the object here, like I expect to see the sun on that

direction. Come on. So, the sun is up there. So, yeah. So, now I think it's time like we

start manipulating this in a different way. I'll reset this to zero and then I'll just

make sure that I rotate this in a more interesting way, like angle. So, I'll rotate it on the Y by

maybe minus 15. So, I just want to increase the amount of shadow I'm getting,

you know, the length of the shadow essentially. So, I'm just slightly, you know,

tilting the sun towards the horizon. I'll do this one more time, but with a bit

with a bit large number. So, this shows the dunes a little better. So, now I can probably

start rotating this and see a more significant result. Minus 20. I can now go back into the

camera here. Of course, I'm not paying attention to the edge of your eye. Of course, it's tilted,

but then again, I can just have it be looking much better. Let's go back in color management

here and just switch this to high contrast. So, just we have things look a bit better

and then what else we could do? I want these to light up. So, I'll just

let's move this back to zero and then maybe 40 or let's leave it 50. Okay. So, 75.

Maybe 90.

You see that the lighting is hitting this part the most.

Um, looks not too bad, but maybe we can have a better result.

This is looking slightly better.

Now, of course, by rotating the Z with a Y rotation applied, this might not provide you with

the like most perfect sun location. So, again, you might need to tweak the Y rotation here. So,

minus 80 maybe. Minus 10.

And we're getting somewhere we like.

It's actually, that's looking fine. Well, let's, let's make this on the negative. Then we can

probably do something here. So, no, minus 30.

And this is looking quite nice. Just want shadows to be,

maybe,

the other side.

So, let's introduce some rotation on the X here.

It's quite a bit too much.

And several, some rotation on the Z. Let's go back in here.

This is looking too much, but it's looking good though. So,

we can,

not too bad. The more you do this, the more you'll get comfortable with how you could maybe

like change or manipulate your lighting. I think,

let's reset these. Make it only be 30. Then we can decrease that.

Okay. Let's do something I just thought about. So, here, I'll just go back and

shading viewport, the, you know, the solid mode, and then go back and here on the top,

I'll just add, just move the 3D cursor to roughly the center of the,

the plane here. And hit shift A and add an empty. So, empty. Maybe I'll add a sphere actually.

And then we'll just change the radius here up a bit. And then I'll just plug this to object

and make sure that the object is the empty. Come on. I think it couldn't be, it's empty three.

There we go. Empty three. And now we'll just go back. Let's see the Eevee viewport here

and see if we can actually see the lighting or not. And the shadow as well. And only the lighting.

Quickly here, make sure that I have the,

um, my scene activated as well as the light. Just play around with the settings here and there.

So, we'll just go up there. Leave the sampling.

We'll probably leave the light paths and sampling, the volume, film.

Let's go for performance and shadow or shadows. Oh, I didn't switch. My bad. So, I'll just,

I'll just make sure that I have the shadows are a bit better.2K.

Viewport is 16.

Keep that turned off. I think something is,

um, I think something is off here. Oh. So,

it's a bit blurred. Just make sure that I have these settings changed and let's see what would

happen. Well, still. Um, I guess, oh, it's because of objects. Okay. My bad.

Just switch this back to cycles. And I think this will be the same result for

the cycles because we've plugged in the object here. Let's see.

Yeah. So,

I don't think this is affecting things at all. Just switch this back to generated.

Um, I would have liked to maybe, um, control the light with an object. I'm sure you could,

but then you'll have to play around with some settings here and there. So, let's just do it,

you know, by hand. So, again, let's go back into the camera. I'd like to point the shadows,

maybe that way. So, I'll just go out and do just that. Let's make this at the center here.

So, I'll just slowly change the rotation here to roughly that direction.

And then now I can probably increase and decrease how this shadow

is moving outwards.

If I go back in here, control B and select the entire camera setup. Now,

I can see it more properly. So, okay. Maybe, again, we adjusted the, um,

like shadows and everything. I'll probably readjust everything back again, but I just

want to show you quickly here how we are going to manipulate, uh, this, this look. So, um,

the first thing is, uh, you might have multiple backgrounds. I'm sorry, or, you know, multiple

HDR eyes. So, uh, before, uh, before actually doing this, uh, let's see what we can do with

a single texture. The main node we'll need here is a light path. So, whoops, shift A and S and

search for a light path. I'm not sure if we've used it before, but I think we might have. Um,

and this is going to act as a factor for the mix between, uh, the texture itself and, you know,

or the certain, certain, uh, certain variations, uh, of, of the, um, certain factors or attributes

of the HDRI, uh, with itself. So, uh, since it's going to be with itself, so I'll just hit

control shift D to keep the, uh, connection between this and that. I'll just hit control and shift

and right click over that and just connect it with this with a mix shader. And then I'll just bring

in this, uh, camera ray into here. Now, previously, if I hit control shift and click that to make

this the main connection, if we were to increase the strength, you'll see that the HDRI gets blown

out by that as well. But what if I would like to maintain the color, the same color, um,

while, uh, changing the, um, the brightness. So, this is the usual setup. So, this should

increase again, the strength of either of those. So, um, I'm not sure what is the exact math that's

happening, uh, with that node, but then again, you now have this value that gets to strengthen the,

um, like the background light while maintaining, uh, the look, sorry, or while, while maintaining

the light of it, uh, the bottom and the opposite with this other, uh, node here. Now, you might

have guessed that this is going to be the, the replacement or the replacer of this node. So,

again, uh, again, I'll, I'll just not make any adjustments here because the time might not allow

it, but you can see here that now I have the sun or desert-y look for the, um, uh, the, the, uh,

previous HDRI or the, uh, go, let's call it the desert, okay, the desert HDRI and the sunflowers

HDRI is the one that is visible now. And of course this, uh, could only blow out, uh, lighting

on it or the emission on it without affecting, without actually affecting the lighting at the

bottom. Uh, and then of course you can just increase, decrease the strength of the light

from the first HDRI on here. Okay. And this of course applies to multi, to a multitude of things

here. So what if it's like reflecting on like this person. So you can see this bleed of yellow

on that little guy. And I'm not sure if it's like the actual, uh, HDRI or the sand. I don't think

it's the sand at all. I think it's the, actually the, the HDRI that's doing that. So, um, what we

could do is that we can also, so we'll just make a duplicate of that mixed shader shift D

and I'll mix the output from this since like we can't control it with whatever we want,

uh, with let's, um, let's duplicate this one more time. So control shift D and this might

get confusing a bit too quick here, but that's fine. Then we'll just plug in this, plug in that

with this. And now as a factor, I can use the diffuse, I believe with that guy.

And now if we were to select that man, zoom in on him, I think, but just

there we go. It was the HDRI. Now the more I, of course it has a limit because like at a certain

point, we'll just, you're just blowing out all the colors. And I believe if we were to

like maybe control B and select a box here where we can connect this to that, uh,

this is like directly affecting, uh, the sun here. So the more we increase this,

the less and less color you are providing from that. Of course, like you don't want to dim it

out, uh, or else, you know, you'll be losing, uh, the point, you know, it's then just, you know,

at a sun or something, uh, rather than having an HDRI. Um, so yeah, I'll just plug this back in.

And now this is the controller of how much color from the HDRI you want.

Okay. Um, what else? Shadows as well. Um, shadows, however, I would like to

interact with them differently. Uh, I'll show you why now. So if I hit shift D

and connect between this and then maybe control shift in D to maintain the connection and plug

that in here. And now if we were to use, where's the man should be there. There he is. Just zoom

on him. And now if I use the shadow ray,

try and change this, like nothing would really happen here. Yeah. Like nothing is really

happening. Um, I'm not sure again, how this really works, but I've like found a way to,

can actually, so that you can actually manipulate the shadows and this will essentially, uh, you

get, of course, like use it with one texture, but let me quickly show you how it could work.

So I'll just select the setup, the default setup here. I'll hit shift shift D to duplicate around,

and I'll just, uh, plug that in this. So I'll hit control shift and click.

Uh, let's just plug it in directly. We don't need that note. I'll just hit X.

Just turn on the shortcuts. So, yeah, what do we need is a setup where I can actually

soften the shadows here. Um, however, let me just duplicate that man on the edge,

because I would like to preview the shaders as well. Uh, sorry, the HDRI. So

we're now looking at both the man and the HDRI.

Let's rotate this further back. Just want it to be too obvious.

This is good. So I see the HDRI, I see the man, and I see the shadow here.

So what we want to do is something we might've done before, which is controlling the, uh,

mapping of the texture. And maybe, maybe you'll like the lighting from a certain HDRI,

but not as much as harsh as it is. So something you could do is that you can actually,

uh, bring in your HDRI and just do this little setup. So what we will do,

so just space between the texture coordinate and the mapping, just like we did before

in the, like a texturing, uh, uh, chapter. And I'll just, uh, add in a few things.

So the first thing is RGB. Oh, shift A and S RGB, uh, mix RGB. There we go.

As soon as you see, as soon as you, uh, as you plug that in, you'll see some differences here.

I'll just switch this to, uh, add, I believe the first is add, and then like everything remains

the same. Nothing here really, of course, I'm switching between black and white. I sort of

control, uh, like the sun position here, uh, or the light position. Uh, you can use this,

of course, you know, as a, as a substitute for, uh, the, uh, you know, rotation of the sun

because you're certainly like rotating because this is like controlling the mapping and it makes

sense to have it have, uh, changes on the location of the HDRI. And then I'll just

duplicate this around and make this. So I'll just add it to the bottom here

and then I'll just switch this to subtract.

And now we haven't done anything yet. So I'm just mixing between the texture coordinates and this

subtract, um, and then we'll hit shift a noise. Let's add a must greater. Let's add, let's, yeah,

let's add noise maybe. And then I'll just plug in this factor to the color here. And as soon as I

here, and as soon as I plug it, you don't see anything. Let's just increase this back to one.

And now I'm just mixing with a white. You can just make sure that it's like white,

you know, again, the darker, the more you are controlling the output on the vector here.

Let's just play around with the scale here. So

shadows are harsh here, but if I turn this back, uh, turn this up to like maybe 50

and now you can see how this is happening. So shadows start breaking up. The reason is

the HDRI as well is being broken up and this is causing the shadows to be a little bit more

to be a little bit more distributed. Um, I haven't faced any issues with the speed of the,

uh, like file, like essentially you're not adding anything on you. So

of course, the more you add in, uh, let's increase the details here.

So the more, the higher the scale, the like more and more,

the more and more like broken up the shadow it gets. So 500.

Of course, the more you do that, the less and less light you get because you're also breaking

the entire, uh, setup here. So I'll just go back to, uh, maybe a hundred

and go back to the satellite or the camera.

I'll just look around and see how this looks like way softer.

So it's like way softer than before. Um, so maybe this is something you're looking for.

Now, again, maybe you need the actual look of the actual, uh, HDRI, uh, because like these,

uh, noisy looking HDRI isn't, uh, your intended look. So what I'll do is, uh, again, I'll just

do the same setup as before. Maybe I'll, uh, shift D that control, control T that now this

is like a different setup and I'll just mix between them both.

And I'll, uh, let's not do that. I'll just want to copy this setup where I can. Uh,

so just select these three setups, shift D

and I can just plug the color into the color, the color into the color.

And this is the one that isn't noisy. Again, you might have to match the, uh, like, uh,

rotation here and here. You might add a setup where it can like maybe separate,

uh, X, Y, and Z, and then you like add values. So let me quickly do that.

Separate X, Y, and Z. And of course this could be plugged into like, uh, uh, the,

you know, X here, X, Y, and Z. Of course you have to follow it up with a combined X, Y, and Z.

Uh, because like, you can just add these into each other and then add the value, uh, node in here.

Okay. Let me just space up between these two. Come on. Oh, my bad.

And then like, you don't have to add any value. Um, you just plug in this and, uh, we'll just

make sure that it's minus 12 so that it's looking the same and 4.6.

If I just like to send it into the rotation here and the rotation here,

you know, uh, now you're matching both, uh, HDRIs. The only thing we haven't changed,

and we should, let's delete that because we already have that. Shift A, a white path node,

and the camera could be the factor here. And I kept plugging that into the surface.

And now we should get like an intact version of our HDRI, but with the shadows, uh, broken up,

just like we did a few moments ago. Uh, let me zoom in on any, let's go into here.

Let's zoom in on any of the satellites. Now again, I can just increase the noise here or,

you know, the softness of the shadow. Uh, the more I increase this value,

uh, the scale value of this noise texture. Uh, and of course I'm maintaining the look,

you know, this unnoisy, uh, HDRI here while maintaining, of course, uh, the lighting and

the data that is, uh, of the soft shadow. So again, we now talked about how we can actually,

um, like add different, uh, HDRIs and just use the light from one and the color from the other

with a look, you know, around from the other. We also talked about how, how we can like increase

and decrease the bleed of, uh, HDRI colors into the objects in our scene. Um, we've also talked

about how we can soften down, uh, a single HDRI, you know, without any, uh, uh, extra HDRIs with

that, with this like setup of adding a noise. And then we can just, uh, add in on top of that,

uh, with the light path camera ray, um, the same HDRI, uh, without this, you know,

breaking of an image. Um, again, of course, like these are not the final, uh, final looks. Um,

I'll be working around with this and of course, I'll show you the final setup of the world

texture or the HDRI texture for now, however, go in and experiment with HDRI textures. Um, again,

there is a ton of things you can, of course, uh, use something I haven't like really, uh,

considered, uh, doing before is I believe the hue saturation, uh, is something you can

plug in, um, maybe, yeah, before the background. There we go. So, and of course, like you can

change, let's say control B, you can change a multitude of things. Like now we have, you have

like a, a lot of, uh, things to control. So if I just increase the value, this should like increase

the value you can see here in the background. Now just changes things up. And this is of course,

like this is controlling the, uh, color. You can just control, control it with a lot of things.

This is like one note of many we've spoke before that we spoke about before.

So go ahead, experiment around. Um, I'll just figure out something that looks good and I'll

show it back. And, you know, of course break it down, uh, for now, however, play around with

HDRIs because this is, uh, you know, a crucial part, a crucial part of the process of making

any scene, uh, for now, however, yeah, go ahead and I will catch you guys on the next one.

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
