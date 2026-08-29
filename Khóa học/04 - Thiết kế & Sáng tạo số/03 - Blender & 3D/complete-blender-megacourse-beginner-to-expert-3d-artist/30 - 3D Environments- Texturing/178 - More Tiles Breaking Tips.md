# 178 — More Tiles Breaking Tips

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | More Tiles Breaking Tips |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 26:03 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **More Tiles Breaking Tips** trong pipeline của section.
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

Welcome back. This tutorial is going to be a bit straightforward, concise. We're not

working in our scene directly. It's just for you to take in some little oversight on Blender

and how to use it. I'll delete the default cube and I will add a plane. So as we discussed

previously, we were trying to tackle the issue of tiling. Let's quickly here look at something.

So I'll add an image texture. So we'll shift A. Let me turn on the screencast. So shift

A, S and image. Now usually you'll open an image of your choice, but what I'll do is

I will hit new. And instead of blank, I will use UV grid and okay. I will actually connect

it directly and switch to shade viewport. As you can see, I have a grid. I'll hit control

T to scale it down a bit to 0.1. No, 0.5. Okay. And I can scale it by two, maybe more. There we

go. I just want to be looking at the edges here. Another thing you can do here is that you can hit

shift S, texture, maybe brick texture. Yeah, there we go. I believe I can make it square. So

mortar size is, yeah, I want to decrease this as much as possible. Mortar size, there we go. And

I want them to be two discrete colors. So I don't want variation in color. Frequency squash. This

is white or smooth. No, bias. Yeah, bias. I'll just make this zero. No, let's make both of these

equal. I actually want to shift the, oh, the offset. There we go. I should be looking at that frequency.

Oh, it doesn't matter since we have the offset off. I'll increase the scale by 10. Now we're

looking at something that is repeating. Of course, this is not, you can't see the repetition, of

course, but let's see if we can actually control the color. What I will do is add a ramp to make

it black and white and make this constant. That doesn't fix it. No, that doesn't really fix the

issue. Again, I will increase the scale by 20 and scale this two times. I just want you to see what

I'm going to do. So what is happening now is that this mapping node is essentially repeating these

squares by said time. Of course, because I have a scale here, if I were to do 0.5 here and 20 here,

I should have the same results. Of course, they're not the same in terms of color because that's

affecting the variables here in the brick texture, but I should have the same tiling effect. So 20 by

20, I believe.10, yeah. So 20 by 20, of course, while maintaining the square ratio. So one to one.

What is happening is that this mapping node is repeating that image over and over. So it's

repeating that square over and over the whole tile. And what I would essentially be looking

at is to break this seam here. Even if we have a seamless texture, let's actually have a texture

here. So BSDF principled. Then connect that. Then hit Control Shift T. Desktop. Let's find our

material. I believe it's 34. No. Let's look at the other one since we let's actually add in the

color only. We will not need any of the other information for now. So let's put that here.

And shift A, S, value. Plug that in and give this the value of 10. And already we can see the

repetition. So what's happening again is that it's being repeated 10 by 10 times. And that's

one square. That's second square, third, and so on. So this is what the mapping node is for. If

I were to rotate it. But in the X, it's going to rotate on the, I believe, the UVX if it's the

object. So it's going to be at the center. If it's texture, I believe it should still behave the

same. In this case, I'll have to lower it by one. I'm not sure about the math behind texture being

bigger in size. I believe it follows the sizes that is the scale without it being applied.

Yeah. If I were to apply the scale, then it's going to behave normally. But again, this is not

looking for. We're looking to make this. Yeah. So it's 10 by 10. UV. There we go. But I would

like to stretch it over. So make this five, actually. Maybe one. So it's being tiled one,

one, one. If I was to make this one by one, the same, Control A, apply all. And now I think I have

it tiled in a way that is a part of the square is flipped, actually. So if I were to scale this by

two times and then apply the scale, I now see the full square and a part of it just coming right up

here. If we actually do clip, so that's one square. So that's our texture, essentially.

Let's Control Z that. And let's do UV for now. So I'll have this scale by 10. So I believe 10

on each side, S five, so that we can see what we are dealing with. So again, the tiling is happening

on each one of these. So what we want to do is that we want to add a variation to that tiling.

So essentially, location. But again, if we were to change the location of all of them all together,

like we can essentially add a value here, like we'll be changing them all together,

and we will not be able to, like, say, if we add a noise texture, and then to the factor,

let's actually make it 4D to have a seed value. And as you can see, this isn't really helping.

Let's plug in the color, actually.

Simply because it's not helping because I'm moving them all together,

you know, all of them all together. What I want to do is have some a bit of randomness to them.

So again, even with the color value, I'm only having this wobbling effect, but repetition is

still there. So one thing I could do is add in a math. Sorry. So let's go step by step.

So what I want to change here is all of the locations, but each of them separately.

So I would search for a math node.

Repeat that three times. I'll hit shift equal, select and hit shift equal to make them all,

you know, organized. I'll just select everything. And while holding alt, I'll click on multiply

to change them all together. There we go. And then I will add in a multiply node. So,

sorry, combine. Combine X, Y, Z. What that does is that it gives me the opportunity to,

if I add a this here, I can only manipulate the value of the Z axis without manipulating the

others. So let's see here. Of course, you can't see it because this is a 2D input. This would

work better with rotation. So let's do that here. And now if I'm using one input, I'm only

manipulating one of these. Again, we're looking at a one by one repeated 10 times over that

whole plane. So I'm now manipulating the way it's being repeated. If you want to change the location

it's being rotated from, it's rotating from the bottom. Let's see. So bottom left.

That's by default 0.5. Yeah. You would change to object. Let's see.

Then if we were to rotate, now it's being around the center of your plane. So again, back to UV.

It doesn't really matter. At least I'm just showcasing it and showing you how to do so.

I'm going to combine these all together. The way I could do this is that I could actually have

one of these values plugged in to the combine all together. Maybe I can have it even like

affecting the whole grid. And we will see, of course, this moves everything all together.

Even with the Z axis, but we will see how this works later on. What I'm going to do is add a

Voronoi texture. The reason I'm adding a Voronoi texture is that if I were to look at it, I do have

a randomness or Voronoi texture is originally a square grid that has been distorted by this

randomness value. So if we were to switch the feature output to distance to edge,

this is going to be much more obvious. So as you can see, this is like as close as it gets

to the original state of the texture. So it's a square texture with some gradient put at it.

If we were to look at the color, I'll switch back to F1. This is how it looks like.

So what I need to do now is that I need to position each of these squares

to replace essentially these squares and make this repetition method in my plane. So what I

want to do is to feed that color into the first value input and multiply it by 0.5

and feed that into the location, as you can see. So if I were to plug this in, what I should have

is a grid of Voronoi textures that are essentially

replace the mapping method instead of one by one square. Of course, you can still see it

because we didn't really break in anything yet. But as you can see, if we were to change these,

they are essentially breaking or replacing the method, the default method of which you could

repeat textures over a plane width. So what we can do here is that we can now

will not be interacting with these just yet. What we will be doing now is that we could add

or maybe we can, yeah. So the reason I had these two is that because if you look here,

you can see some of these

tiles or some of these grids or shapes aren't really moving as fast. And

it doesn't really matter sometimes, but maybe you might need some variation that you'll be

breaking it too much. Essentially, you don't really need it. This is good enough.

And now to the rotation, I'll also do the same. But again, as I said, if you were to rotate that

on the Y or X, you're essentially rotating it outside of the plane. If it's going to be the

object, it's going to rotate. I believe we are rotating outside on this side. So the same as

here. So this and this side. So this is the X. This is the X. And this is the Y, as is in the

original grid. And the Z, of course, is the plane, is the axis above. So what we need to do now

is that we need to rotate each of these mapping nodes separately. So what we're going to do is

that we first need to only rotate the Z axis, simply because if we were to rotate any of the

other axis, we are going to have a distorted image. And we don't want that. It's going to

be extreme. There we go. We don't really need to do that. The mapping only happens on one plane

or 2D dimension or two dimension. So I might also make use of the same node setup.

And again, I'm going to use the combine XYZ. What it does, again, is that I can limit the

change to one axis. And of course, I can still have the same. So if I were to like this end,

like this end, nothing will happen. But if I were to give this a feed,

now, if I were to rotate this, they're rotating. And now is a good time to switch to objects.

Like if you were to rotate things, OK, look at that. That already broke up things up a bit.

Of course, I see some repetition. But we can try and see if we can handle these up a bit.

A bit. We can use generate it. Let's see.

No, I believe object is the best. So it's being determined by the origin of the object.

There we go. And this already broke up the repetition slightly.

So some of them is moving and some aren't, which is quite nice. Again,

we are introduced with a seam, though, which is pretty much obvious. It's just right here.

And unless you're going to zoom in on your texture like a lot, it doesn't really matter

if you have this combined with the previous methods we discussed, which is like contrasting

your texture and add it to other textures. You are fine with just adding geometry, contrast,

a different shader, and you're good to go. This is an extra step as well as what we are going to do

next. So what we need to achieve is that essentially, we need to have a mask that

looks exactly like this. And look at that. That looks like the mask we want. The only thing,

however, since we are using color, yeah, since we are using color, this is yeah, we're looking

at color now because we're using that. So we need this in black and white,

but essentially have these edges a little bit smooth, and you'll know why in a bit. So

if you've guessed right, we need this followed by a color ramp. The only issue, however, is that

even if you give this a color ramp, you'll still have the issue of having to deal with this harsh

edge. And lucky enough, we have something under F1, if you read it, distance to edge. So what

this does, let's connect this back again. What this does is it gives us this black edge. And

black is essentially our mask in Blender. So two important notes you need to always look for

using when using Blender is the color ramp and noise textures, all of them. It doesn't have to

be a certain type of noise texture. I personally prefer the Musgrave, gives me a little bit more

options to deal with or to use. And yeah, so color ramp and all different color, you know,

manipulators like hue, saturation, bright contrast, these are your friends, always use them.

Again, I really don't need that. So I'll just hit control X to dissolve it and then feed that

distance into, oh, let's control Z. So what we are doing here is that we are trying to have a,

I'll switch back to F1, we are trying to have a mask. So I should retain that information

and just mix that with itself, you know, excluding that bit. So shift D, let's shift D,

you know, also like these, I'll hit alt B to remove them out of the frame. Maybe I can give

them a separate frame. I'll just hit control J and now they have their separate frame. I'll

connect this to see what I'm doing. And then I'll also copy that, hit shift D,

and then connect this to the base color. And now if I control shift while holding right mouse button,

I'm mixing between these two. What I need to be, the mask, however, is this node. So shift D,

I'll feed in the, oh, I first need to change to distance to edge.

And this is what we are looking at now.

Again, I'll need a color ramp to control the transition between them both.

So let's see what we are doing. The tiling is there, but we need to see how it's working actually.

So if you were to look at the tiles, like they are a bit broke,

let's actually switch back. Oh, I can see there is one seam here. Let's actually mark it. So

it's right there. So that's a seam. I'm not sure if this is obvious. This is good. This is looking

good. Again, I'll just flip. What is happening is that I'm changing the mask. Let's wait up a bit.

I'm changing the mask up a bit so that it could fit. Essentially, that seam,

that's created by the same variables as that texture node for the texture node.

So I'll plug this back in. And if I were to increase the white space,

I'm now crushing that black spot at the center. And I now have this

broken tile grid. So this is an extra step. You're going the extra mile to break the repetition.

I personally prefer stopping at where we stopped. But this is for you to test and maybe

go with just in case you like to add some variations. Again, this added with the

other methods or techniques is going to already help you

more than enough with breaking the tiling and repetition.

Even if you find some repetition after doing that, what I recommend is having

to consider that just leaving things as is and then looking to hide things with other geometry

and such, simply because our scene is not going to consist only of a plane. It's also going to

consist of other things, like other objects and assets, maybe light and shadow, fog. So whatever

that is far is going to essentially be lost in details anyway, both in terms of value and such.

Again, test this method out. It's not the best essentially, but again,

combined with other methods we talked about, it should work just fine. Later on, we should be

talking more about texture painting and how to approach it, proper ways to do that. And yeah, see you soon.


