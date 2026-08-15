# 181 — Mixing Two Textures

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Mixing Two Textures |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 28:28 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Mixing Two Textures** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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

Alright, welcome back. If you can see, this lesson will be a little bit not in our scene.

We will be using this technique, however, in our scene, but I just wanted to explain

it on a separate file. Again, I would like to point out that I'm using Blender 3.1 at

the time of recording this lesson. So, what are we going to do today? As we saw before,

there are different ways of tiling textures and breaking repetition and making shaders

inside Blender. But sometimes, as we saw before, you might need to mix between two textures

simply because, as we said, let's actually bring our reference board here. As we mentioned

before, there isn't really a single texture that could give off a natural look. And that's

why we'll be learning how to mix textures. We'll be mixing textures, in this course we'll

be mixing textures in the same plane and we'll be mixing textures on different objects. So,

say if you have a ground plane that's intersecting with an object, usually there is a gradual

fade from the bottom material to the top material, maybe the opposite. So, we'll be discussing

this. But for this lesson, we'll be learning how to mix two shaders together. So, I will

hit OS, maybe bring our screencast here so that you can see what I'm doing. I will increase

the space size and switch to Shader Editor. So, we need two materials, essentially. So,

I'll hit U, hit N to hide the side menu, and I'll hit CTRL-SHIFT-T, as we learned before,

just to add in some assets. Let's look for it. Assets, materials. So, I'll add everything,

including the color. So, principled, I have a color. Now, I'll duplicate this and hit

CTRL-SHIFT-T again and choose the other texture. Again, you can choose your own texture. It

doesn't have to be. No, I need the roughness. There we go. Do we have maps right here? I

believe we should. Come on. So, this is color, roughness, normal, and displacement. So, let's

see how this looks like. So, if we were to mix between two textures, we would do this. We'll hit

CTRL-SHIFT, right-click on one PSDF to the other to mix them both, and now that is locked in. Let's

actually ALT-drag that displacement away. We don't need it. Now, when the shaders load in,

you'll see that this factor controls between turning off the top texture, turning it off or

on, essentially. So, what you could have done usually is adding a maybe noise texture. Let's

actually add a musgrave, and then I will drag, then release. This feature is only in Blender 3.1,

so make sure to update or just hit SHIFT-A and then search for the texture. We'll be looking

for a color ramp. Now, we'll choose the factor of the color ramp to be plugged in. I'll put this

for a bit, and then we'll drag this to the color, and now this musgrave is controlling this color

ramp. We'll see here in a bit. Select them both, hit SHIFT-EQ, and maybe if I hit CTRL-SHIFT-click

on this to see how this texture is acting. So, I'll plug this back in, and now we are mixing

between them both. So, if you can see, the bottom texture is referenced with the white color here,

and the black is the top. So, as you can see, I'm mixing between them both with a musgrave texture.

I can maybe add, change the scale to something like really high, play around a bit, and I believe

15 is the maximum detail number, and I just can't keep working with this so much, but still have

this unrealistic fade from one texture to the other. Like, if you look here, there is essentially

a rock at the center here, but the sand isn't really interacting with that texture. It's just

like it's on the top, and it's just I'm fading between one texture or the other, and this isn't

really realistic. So, if you remember, we've never used the displacement maps before, and actually,

we're not using them as displacements. These textures are heights, essentially, so height

or displacement are both the same. So, whenever you are using a texture, make sure that you are,

you have the height map, because we will be using it now. So, quickly here, let's look how

I will delete this node and hit control shift click to see how the height map looks like.

This is the sand one. Let's actually look at the rocky one. Yeah, this is more obvious. So,

the white areas are the higher, and the darker areas are at the bottom. So, if you can see,

whatever this rock shape, you know, white color is representing a higher value than the other,

and the dark is like the extreme bottom of this. So, we have a value from zero to one,

which is representing the height in the 2D, in this 2D plane. So, if we were to add a color ramp,

and drag one tabber towards the other, I'm controlling what's, I'm controlling, you know,

the bottom height information of that map. So, now we're starting to guess something. So, again,

I'll just hit alt X, sorry, control X to dissolve this. I only need to view this.

What we can do is that, let's select that. I'll hit alt P to remove it from the frame,

and then move it up. I'll be mixing it with the other displacement, which I can also hit alt P

to remove it from the frame. You know, you can give them both their own frame. Let's actually

do that. I'll hit control J, shift equal, you know, I'm liking things a bit more tidy.

Actually, let's not put them in a frame just yet, because we'll be adding a little bit more

notes. So, now we're starting to guess what we're doing here. So, maybe this could act as a mask

for this mixing shader between both, or maybe the bottom one could act as a mask for the bottom

node. And now we have black and white, essentially, you know, height information that we can control

to, you know, to use as a mask for the mixing. But how would that really look like? Let's see.

So, if we were to plug in this color factor, maybe actually to a ramp first,

so a color ramp, so we can have a bit of control over it, and then to the factor.

Now, if we were to control that tabber, we're now fading the bottom texture,

which is the sand with the height. And now, this is much more realistic of a mixing,

because you're not mixing in a 2D plane, you're mixing in a 2D plane, but at the same time,

you're retaining that height information. So, the sand is mixing around these rocks. So,

as you can see, this is working quite realistic, like as we would expect it to be.

If you remember, the height here is like the highest, this was a white area. Let's see how

this looks like. So, this is a white area. So, this is like really at the top. Maybe you can

invert essentially, maybe you can invert the node setup. I'm not sure. So, you can see that the sand

is starting to fill up the top part of the height map information with the sand texture,

and growing gradually to the bottom. But this is just an invert. Maybe this works

in a different case scenario, we will see later on, on this lesson. So, as you can see,

we're starting to go somewhere here. So, this is something you could use. Let's try this with the

sand texture. I believe the top is the sand texture. So,

although this could like also prove my point in a different texture, this isn't going to be

as realistic. I'm now switching between the sand and the ground. So, I'm just favoring. So, that

this color ramp is favoring the top texture. If I'm going dark, which is, I believe, the sand. So,

I'm taking the sand texture, and the bottom is the like rocky sand texture. Again, this isn't

really selling it, maybe flipping it around. You know, you have a lot of options to work with.

But again, just make sure that... So, I'm now using the height information of the sand.

It's not really working that well, simply because it's not realistic. Of course,

the rocks are filling the height information of the sand, if we were to look at it. So,

the darker information at the bottom, the higher information, like the white parts are at the top.

But again, it's like you're mixing rocks around sand, which isn't, which, you know,

really doesn't happen in real life. So, that's why, you know, look at references and mirror

and make sure that you're mixing the good material with the other. You're using the

good height information with the other. I believe this was flipped. That's right.

So, as you can see here, we're now doing something interesting.

We can even, you know, go a little further into, like, you know, the technical part of this,

which is we will be mixing the two textures, the two height maps first before feeding them into

the factory here. So, I will just delete that and have it at the default. I will change this.

Let's actually plug this into another color ramp.

And I want to do a quick comparison here between all of these, you know, setups. So,

just so you know, just so you can see the differences between all of these, you know, methods.

Let's look at something nice. That's something good.

This is looking good. And now, what we are going to do is hit control shift, right click and drag

between these two textures, two maps. And now, I have a mix between both. Of course, I need a color

ramp. Shift A, S, ramp. And here, because this is flipped for some reason. So, I'm going to

because this is flipped for some reason. So, I'll just make sure that I have the

correct height information. I'll duplicate this again.

And make sure that this also has the correct height information.

That should be it, I believe. Now, I'm looking through this mix

factor here. And I can now plug this into the mix shader and look through that.

Now, I have more information to work with. I'm now working with the sand texture, you know.

I'm increasing and decreasing the contrast or the information I can have in my texture,

as well as controlling the stone texture or the rocky sand texture, as you can see here.

So, let's bring these two together. There we go.

I'm now somewhat having a different result than the previous result, you know. Of course,

the first method is easy. But when you need to give that, you know, sweet texture mixing,

you know, to act according with your parameters, you'll have to go the extra mile with it. So,

we're doing a little bit more work here than this one. But this is, you know,

gave you a really quick result in just plugging in the height map of one of the textures.

So, again, so what I'm controlling here is three different things. First is the sand height.

Second is the rocky sand height. And the third is the mixing factor between them both. So,

if I were to favor one texture over the other, I'm certainly getting, you know,

I'm certainly getting different results here. So, I'm now favoring the top texture,

bottom, and so on. So, you can see this is almost the same as this one. I'm not really,

I'm retaining a good bit of information here. I personally prefer this one. If you can see,

there's more contrast here. Like the mixing is much, much better, in my opinion.

Let's see what we can do here. Oh, the mixing is just make sure if you were to change one of the

parameters, and it doesn't change, simply just look at the factor between the mixing

of both. And that should fix the issue, just like what happened here. So, I just want the sand to be

as high contrast as possible. Let's try this.

You can always flip around, see if this works. Now, I have this,

I have this control essentially over these parameters.

You should be able to see that there is a difference of contrast between them both.

One is really mixing over like layers. The other one is just straight up mixing between them both.

Let's actually try and see if we can actually get the same results. Now, you're just controlling

essentially the opacity of one texture over the other. Here, you have much more parameters to

work with. Essentially, this is just, this just gives you a lot of control over the texture.

You can always change the order of the two textures. I believe you just only,

yeah, you don't have to change the mask here. Like this is essentially acting as your mask,

and this is just changing what is more dominant than the other. If the factor is changing,

just make sure that the higher map is just being favored with the color ramp than the other.

You need to make rocks appear from the sand. We're looking for something realistic. Of course,

if you have something in mind that isn't as realistic, results are all up to you to look from.

Let's try something else. I'll duplicate this again, and I'll make this unique just for the

sake of this course. I tried to replicate this one. I'll just put this at 0.5, just so we can

see the differences between each of these methods. I'll do that. Let's see. That was up here, maybe.

This is one, two. Of course, excluding the default mixing, which is like adding a

musgrave texture to feed into a color ramp, and then just randomly mix between them both.

Let's here change something else. Now that we learned that we can control these two,

maybe you can change this to something different. I'll put this at 0.5. We have overlay, maybe.

Let's see how this looks like. Immediately, you're getting different results. Let's actually

compare this to the first result, because they look quite similar. I can't really see any

differences. Just remember that we have this parameter here, only retaining the information

of one. I can definitely make this more gradual with this setup. Let's see.

Yeah, there we go. This is something way more realistic. If you can see here, let me

draw around this real quick, just so you can see what I'm looking at, essentially.

I'll leave it back. This part here, I'm retaining a lot of information in this part

over the other material. I can see the smaller rocks appearing gradually from the sand.

And this would be the case in real life. You can see the sand is higher up in certain spots,

but not the others. If we were to look here, it's like I'm controlling this binary

factor. This also comes a little bit closer. But then again, I retain a lot of these

data or properties that I get to work with. I don't have that option in just normally

plugging in that factor in there. If we try to get as close as possible to that result, let's see.

I can then change some of these parameters, and all of a sudden,

I just have different options to work with.

I can have it more contrasty.

The mixing is harsh in there, rather than having to only deal with a gradual result like this.

Again, you can go here and then add just maybe a contrast node or a gamma node. Let's see

if this is going to work. I'm now working on the first solution here.

But again, if you're going to go the extra step, I would prefer going with

mixing or trying different options with the mixings here, so that you can explore a little bit

the software here. This is one method to mix between them.

This is one method to mix between them. Another method is, let's make this unique,

is Color Burn. All these three, according to my testing, they do the same thing. So

Color Burn, Multiply, and Darken. Lighten have a bit different. We will look through all of them.

So Color Burn only, and maybe Lighten next. Let's see how this looks like.

I can also move that to here. This is just to compare.

I believe this is quite the same. A little bit more harsh, I believe.

Yeah, a little bit more harsh. Like this is a little bit strict than this one.

You know, it's subtle differences when maybe you're looking to really Zoom in, maybe on your

plane, then retaining such information would be of use. But again, like for our use case scenario,

going with the first method, which is like plugging the software in, I would prefer to

use Color Burn. But again, like for our use case scenario, going with the first method,

which is like plugging the Color Ramp of, you know, plugging the displacement of one of the textures

is going to sell it. From afar, by the way, that actually looks less harsh,

maybe because, yeah, what if we were to bump the parameters here?

Actually, having them have. So I'll do Shift D and the X and Shift R four times, and I'll make sure

that all of these are unique. Yeah. So just switching here to Mix, which is the original,

then we chose Overlay and Lighten. We didn't pick Lighten. So I believe this is Mix.

Yeah, Lighten is giving us slightly different results. It's a bit softer than these two.

Mix is just, you know, not going to do it for us. It's like you're changing,

interchanging between two different maps, which isn't really, you know, that realistic.

Let's see. So I'll move this Y just so I can see. I'll move it up in the Z axis

so that we don't have these artifacts. So, yeah, I can tell that the Overlay or Lighten,

it has this little bit softer, gradual, you know, fade if we were to make things even harsh.

Yeah. I like this one.

Lighten looks cool. And that is Overlay. Let's see if we can spot any differences.

I believe it's not really that much of a difference. So, yeah, mix between the different

textures using the height map. Displacement, you know, you could use it. There are many use

case scenarios that you can use displacement on. And they could actually be much more efficient

than modeling maybe. But, again, I don't really prefer displacement. I have a lot of issues of

crashing and such. No matter how good your PC, you'll always face some issues with displacement.

You have to adjust a lot of things and a lot of parameters. You're interacting with a lot

of geometry as well. So this isn't why we are importing displacement. We might talk about it.

We actually would talk about it while modeling our assets. We might use displacement. But, again,

using the height map or the displacement map as a mixing factor between two maps,

two textures, actually, is a much better, you know, superior, if you could say, mixing factor

simply because we can see that, you know, just normally mixing and using a third mask while

having this precious map of displacement at your disposal, you're just, you know, wasting that

really good, good mask here. So, again, use that mask. Try a little bit of different mixing here.

Again, I tried these color burn, multiply, and darken. If you have something, you know,

to share that is, like, new in terms of mixing, go ahead and do that. And, yeah,

try and make cool stuff. See you next time.


