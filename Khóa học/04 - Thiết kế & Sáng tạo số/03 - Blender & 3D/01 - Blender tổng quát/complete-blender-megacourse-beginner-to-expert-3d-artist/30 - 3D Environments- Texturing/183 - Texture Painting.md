# 183 — Texture Painting

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Texture Painting |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 25:27 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texture Painting** trong pipeline của section.
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

Alright, welcome back. Again, in this lesson, we will not be working directly in our scene,

simply because this is a technique that you might not use in every scene. But again, I

thought I should show you that because it's really important. Our topic today is texture

painting. Now, this, to my knowledge, I don't really, I haven't really found a quick and

dirty way. So today's lesson might be a little longer. What we'll start with today is that

we will delete the default cube with the light here. We'll not be needing that. I will expand

the viewport at the bottom here and switch it to shader editor. I'll hide the side menu

and then add a plane. With it selected, I'll add a new shader. I'll switch to Eevee here

real quick. Again, let me quickly here show you the screen cast keys. With this principal

BSDF selected, again, control shift T, I will locate my texture. So there are two things you

might be mixing together. Of course, you can mix with more than two materials in Blender,

but this is going to be really out of the scope of this course. So what you can usually do is

that you might want to paint a certain texture here over that texture. And of course, what we

have done before is that we added in another texture. So I'm going to do exactly that. I'll

just end this sand texture that we have been using since the start of the course. I will move

that a little bit further and delete that displacement node. So this is the shader,

the sand shader, and this is the ground shader. Of course, for convenience, I will put the sand

shader at the top. It doesn't really matter. You can switch between them both when mixing if you

have any issues. We've also discussed before that if we were to mix between these two,

since we have the displacement information, what we could do is we can add the color from

the displacement of the rocks to the height, and we could simply add a color ramp in the center

here. We've also discussed that we could mix that color ramp. So if you can see, I'm holding

shift and right click because I want to make a reroute here. When texture painting, things could

get overwhelming. So just make sure that you organize your scene. So as you can see, now we

have this gradual sort of bleed into the texture. Now, of course, another thing we did was actually

mixing the displacement of both textures and adding the color ramp before that, and then leaving the

factor as is. Today, however, the factor is going to be a mask we certainly paint. So let's see how

this might work. So yeah, what we'll do, I'll delete that. I will leave that reroute, and then

we'll just move the sand shader a little bit down because I'm going to pull that displacement to the

top here. So this is the displacement of the rock or ground. This is the displacement of ground only,

which represents the sand. What I'm going to do is hit control shift, right click, and mix these two.

Let's bring this up a bit. And this was the mixing factor before. If you remember, I believe we chose

overlay or lighten maybe. And then with the help of a color ramp, I was able to control this, you

know, texture, the sand texture bleeding to the height by adding contrast or essentially bringing,

you know, controlling the whites and the blacks of the height map or the displacement map, which

looks like that. So by making the blacks more blacks, I'm decreasing. As we remember, the white

is at the top and the black is at the bottom. So I'm now making everything a little bit lower. Let's

see how that looks like. There we go. So now the sand is filling up the entirety of the texture,

and now it's doing the opposite. So what we are going to do today is we are going to add a map to

this factory here. Now, if we were to change here, you can see a slight change. I believe this is

going to be the best we could change here. Let's switch between these color modes here or blending

modes, I should say, and see what's the best we can use here. The default is mix. Value was good.

Value looked good. I'm looking for something that would certainly give me the opportunity to change

the, you know, as much as possible with the entire, like, texture. And you will see what I mean in a

moment. Linear light. With linear light, by the way, you might face some, yeah, contrast issues.

What is happening is that the contrast here is getting either less than zero or more than one,

and that's why you might get some higher contrast spots in your texture. You can solve that by

simply checking that clamp. If you hover over it, it says, like, it's going to clamp the result of

the node from one to zero or zero to one, I should say. So if I were to bring this up,

if I remember correctly, we didn't need to change anything with the sand texture,

the displacement of the sand texture. But let's see if we can actually do anything like that real

quick. You should know all of these setups by now, since we've already been through that.

So this is the full sand texture. Let's leave it as that. Okay. Let's actually leave everything

at the default for now. This is 0.5. It should not change that much, or maybe it would. Yeah,

let's add an image texture, because what we want to paint is, you know, we want actually,

like, a special image to paint over. Now, that can be done by simply, I will quickly switch to

image editor here. If I were to click on any of these nodes, it's going to show the image or the

node I'm previewing. So what I can do is two things. One is the bad thing, but I'm going to

show you it just so you can see what issues you might face. So I'll hit Control C and Control V,

and it's now pasted over the older one. I'll move it to the side. Now, of course,

you could have done search for an image texture. But I believe if you were to make a new one. No,

it's good. So yeah, you can actually duplicate this one and just make sure that it's generated

and not a single image. You should also make sure that it's non color or linear, all depends

on if you have an issue, if you're facing an issue with the painting or not. And I'm going

to add. No, I will not really add a color ramp here. We can do that later on. It doesn't really

matter for now. So what do we do now is I hit Control Tab, and this is going to bring me a pie

menu quickly here. If you don't find it, just make sure that under preferences, you have the

interface 3D viewport pie menus checked. So Control Tab and quickly switch to texture paint.

Now, what I'll be doing here, if it's probably visible for you, it should be, is that I'm

painting in white. And if I hold Control, I'm painting in black and certainly controlling the

zero and one factor here. Let's quickly switch back to Color Dodge or was it? Yeah. Let's see.

Let's see that first. I don't believe it's going to be the best, but let's see. So because

each of the both color ramps is the default. Now, if I were to change that a bit, I am now

controlling how that painting, you know, like by default, let's mute that really quick. But I

believe if we mute it, it's going to be zero. Now it's going to be 0.5. I want to show you the

differences here. As you can see, nothing has been so difficult for us so far. We only added

an image texture. And what we did was we certainly click new. Let's quickly do that again.

So image texture, new, left it at blank, 1K. We can increase it to 2K if you want, but that's

really unnecessary. And make sure that the color is black. So yeah, this is what we've done so far.

Yeah. So yeah, let me quickly crank these up a bit. I just want to see what I'm doing.

So this is how it looks. This is the sand texture. And this is how the

untitled, you know, if you can say, maybe you can type mask so you can know what you're

dealing with here. So this is mask. I'll connect mask to here. And now things changed up a bit.

I want to mute it real quick. Yeah, there we go. So you can see the differences between,

you know, after and before the mask. Sometimes you just, you're not satisfied with how,

you know, the sand is gradually moving through the texture here. And you just want to have your own,

you know, pattern of, you know, the sand going through your environment.

If you face this issue of like not having anything happen, this might be because

you are in a certain range. Oh, of course, I have it here. So what we will do is that,

as you can see here, if I would paint here and why it's not doing anything,

just make sure that, you know, you sort of play around with the color here. So you're necessarily,

you know, interacting with the one and zero and the range in between of these like colors.

So by default, it's white, which draws in your mask. So before, sorry. Yeah.

Before, after. Now, you know, this could be achievable by playing around a bit.

But then again, it will not be as customizable as you want it. So you're just playing around.

If you were to paint like that, let's actually increase the mask strength here. If it paints

over what you're doing, just change the mix to subtract. There we go. And that should not really

add what you've previously done, like paint over what you've previously painted. Again,

let's play around with these trackers here.

So yeah, there's always going to be some range here that you play with.

Maybe after you've added your mask, so you have the color ramp of the ground texture,

sorry, the sand texture, which is this. You have the mask for the

like sand texture. Yeah. And then the ground texture. This is the rocky texture,

rocks, ground. And this is the sand. And since I'm controlling, factoring it through

this black texture, I should probably increase this up a bit.

Just I'm holding control and just painting over that. Let me select that first.

Oh, it's subtract mix.

There we go.

Now you get to have this, you know, a little bit of playing around with the color here.

That's that seems to be, I'll just hold alt X to dissolve it. Sorry, sorry, control X.

This seems to be like controlling the gradual bleed of the sand texture into the rock texture.

This, this could stay actually.

So you can play with multiple, multiple things here. You can play with the strength. I want

this to be more obvious.

I'll increase the strength back. I

believe linear light was a better option. Let's see.

So color dodge, linear light. Yeah, this is a better option.

So again, I'm just painting around whenever I feel like the sand is just too much. I get to

play around with the, with how much it bleeds into the texture. Again, to showcase it better,

what's controlling my, me here is that again, whatever it is, why is at the top, whatever is

black is at the bottom. And again, if I were to, you know, run the viewer, run the color ramp

through the viewer, you can see that I'm exaggerating these up a little bit just so that,

you know, when bringing the sand a little higher, I'm sorry, the rocks a little higher, I get to

submerge the sand at the bottom. And this is what I essentially do. So I'm increasing the whites and

the sand gets submerged, but I'm still left with that mask, you know. Oh, make sure, always make

sure that you're painting on your texture. As you can see here, I made the great mistake of

painting over the displacement. I believe it's the rock displacement. Now quickly hit control Z,

select this again, you know, make sure that we are in mask. And that's why you have a viewer,

by the way, like, because you might make that mistake very easily. And you will, you'll be like

suffering from what is happening. And you might never know why, simply because it's, it's like,

you don't see the texture in front of you. So this is a big issue. I'm not sure if this is flipped.

I believe not. That should stay like that maybe. Just paint from the start. Again, I need, I need

it to be contrasty a little bit in, you know, like here. And then I can paint, I can paint all I want,

you know, just to make it a little bit more different than how you would have it without

the mask. Like, again, I'll show you here in a bit what I mean. So I can make it a little bit

more gradual by, you know, pulling these up a part, you know, I'm holding control to paint in

black, and then just right mouse button. So control click to black, just a click to white.

And that's essentially creating that, you know, effect of mixing between these two.

And now this is with the mask, like the custom, custom painted mask.

I'll hit M to mute this displacement to show you before and after.

Yeah. So as you can see, it's quite obvious that the change is subtle, but, you know, sometimes

you're like, maybe you're zoomed in into like something like up close, like a wall or maybe

a door or something, and that you need that extra detail that these, you know, these

and that you need that extra detail that these color ramps might not give you, you know.

So maybe it's a little bit difficult to adjust such things in like Photoshop or something.

So doing them in here would make sense. So yeah. So this is one thing, maybe after you finish,

you can add this color ramp here to control the contrast of this mess, essentially. But yeah.

So let's try that. As you can see, the change is very subtle, simply because, you know,

it's a mask. It doesn't really have any information more than what you paint here.

So this is the default of it. One spot that is obvious here. So I'm just, you know,

adjusting how this mask fades away. I'll hit control X to see without the mask.

The edge here isn't really harsh anyway. So that's something good. Like you might not need the mask.

Maybe. So, yeah, I'm essentially painting in the mask of the height of these two textures.

I believe we can discuss the normal painting. Yeah. Let's do that. I believe you have time.

So what I'll do is I'll hit control tab to go outside the object mode. I don't want to

mess anything up by mistake. I will. Let's duplicate that, actually. So shift D and I'll

put it at the side here. I'll duplicate the material or sorry, make it unique. I don't want

any of the previous settings to be changed or I should say, you know, migrate it into that

new material and now don't have a mask, just a factor that is being like, you know, connecting

between these two. Now, what could happen here is that we could actually plug these two into one

shader. That, of course, is going to be a little difficult, but it's achievable. Actually, let's do

that in the next lesson so that it's going to be like a lot of nodes. So we will have to

organize up a bit. So later we will learn how to mix between a multitude of these nodes,

but not just mixing them because we already know that, but also actually painting over

some like maybe, you know, water or texture, just so we understand that, you know, how like

painting actually works. This was just a simple example for you to understand, you know, essentially

when you're when you're painting, when you're texture painting, it's an option that what

you're painting is a mask. But of course, it can be a texture like this can be an image and you can

paint that image. But of course, it's not going to be a factor of a mix node. It's going to be

like directly into like a shader like this. So yeah. See you next time.


