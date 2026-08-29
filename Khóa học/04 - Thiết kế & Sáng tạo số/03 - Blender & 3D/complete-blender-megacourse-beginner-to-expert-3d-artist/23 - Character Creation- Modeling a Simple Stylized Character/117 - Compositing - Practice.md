# 117 — Compositing

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Compositing |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 19:40 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Compositing** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
- modeling, mesh editing và kiểm soát hình học

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


Alright, hello, guys, let's get into the compositing was the last part of this part of the course.

And I'll see how we get. So this is the raw render right here that we got from the cycle

engine. So I rendered it in the cycles. So if we close it, and let's go for the screen.

Then there's a tab over here compositing, which gives you this thing, this nodal way,

if you don't see the nodes, go up here and enable nodes to see the nodes, and then have

the backdrop on over here on the otherwise you don't see the image in the backdrop in

the back of the of the scene of the whole compositing tab. So everything we do here,

it will be applied to the to this one. The default viewport over here, the second window

is drop sheet, let's just change it to image editor to change how to change the to change

the to see the results. So also, by browsing over here, go to view or not. Now we're just

seeing what is going to be applied to this render layers over here. So let's start by

pressing shift a now again, like shading over here, we have some nodes. So we have some

inputs like image, we have some textures, you can add some outputs. And what I'm most

interested in in this, these nodes are the color. So in the color section, we have some

color correction, color balance, convert contrast, hue, correct. And all these, this

is what I'm interested in. And the next things I'm interested in all the filters. So you

can add some blur filters, glare filters. And yeah, some D noise, some filter, the main

filter you can add for softness or sharpening. And then we have this distort option that

you can use, the main thing I'm interested in is the lens distortion. If you use other

applications like Photoshop, and you're like familiar with how to composite your picture

in there, you can do the same thing. But as this is one, of course, I figured this might

be a good idea to just composite it inside one there. And it has really good things that

I can use to composite things. Let's start with filter and add a filter over here and

then drop it between those these two things. And then the default filter is softened. You

can change it to anything you want. For example, if you change it to this one, you may get

some other result. Let's change it to this one. Or even this one. And Oh, yeah. So we

are viewing this layer right now to view this layer, just press Ctrl Shift and left

click on this to view it in this way. So now we are viewing this one as you can see now

the shadows are very, very hard. Like we have some very hard shadows right now. So then

we can change it to this one to get an effect like this, or this one, and so on. But what

I'm interested in is in this sharpen. So to sharpen the image, immediately, as you can

see, it makes it too much, you need to decrease it to fair amount, like, I think, all points

15 is a good amount. And then we can see if, if we need more or less, so this is zero.

And this is all points one. I think just all points one is enough for us. All right, the

next thing is, I'm going to show you is glare. So let's put it over here. And what does what

glare does it makes the part of the part of the image that are more reflective. So it

increases that reflection, all that. Okay. So if you change the change the fade over

here, exactly, look at the eyes over here. And if you change the threshold, maybe the

mix. It's not making a lot of things in this area. So maybe if you change the streaks to

fog glow. Or let's see without the glare. So not many changes. If we change the threshold,

maybe no, it's not making any changes. All right. But we can use it to make some more

reflective areas around the picture. The next thing is, let's use a lens distortion over

here. So if I use it over here, let's attach these ones right here, and then Ctrl Shift,

click on this one to see it in the view or not. Now, as you can see, we have some distortion.

No, actually, we don't have any distortion because it's on zero. So let's put some looks

crazy. I'm on like, let's go five, and also five for the other one. And as you can see,

image will change really so much. So this lens distortion will help us to achieve a much more

photorealistic picture. So let's put a really low amount like all points, one points one.

And now it's still too much. So let's go for all five. And all five. Too much to see. Or two.

So or two, I think or two is enough, maybe even maybe even

or one. Yeah, or two is enough, it adds some a little bit distortion to the picture. And

it makes it a lot more interesting. So if I change it back to here without the

distortion, you can see the effects right here.

I think it's still too much. So let's go for all point one.

Yeah, I think all point one is doing great right now. Okay.

And then let's see what other things we have, we can go to,

we can make some blur if you want.

But I think done with the filters. And let's go to color correction. So in the color,

we have some options to correct our colors and change our colors. So the first thing over here

is bright contrast. And with this option, you can change the whole brightness of the

picture and the whole contrast. So if I increase it like this,

as you can see, the brightness increases as well.

If it decreases, decrease it, the brightness of the whole picture will decrease. All right,

and then we have contrast to add more contrast over here. Okay. The next thing is color balance,

you can change the whole color of the picture with this color balance. The first thing over

here is for correction of the shadows. The second thing is for the midtones. And the last thing is

for the highlights. So let's go and change the shadows over here, maybe into something like

maybe we need to something cold or something warm. And we need to decide if we want something

warm. And we need to decide if we want something cold or something warm. I think this one is good

enough, like a pink one. And then we can change the midtones over here to something like

here. Very, very subtle. And

something like this. All right. And now you can see the change without the color balance by

Ctrl Shift clicking on the last one or Ctrl Shift clicking on a duplication of this one, maybe no,

actually, you have to select the node and the whole node, you have to attach the whole node, I think.

Yeah. So this is without any of these nodes. And this is with the nodes. All right. So without

with the node, Ctrl Shift clicking on this, without a node, the raw, the raw

render. All right, let's delete this, actually. And then let's go to color correction,

or actually, I'm going to talk about the color correction. And as the last one,

let's go to exposure, this is a simple one, you attach, if you attach exposure,

you can change the exposure, the same thing we did with the, with the bright contrast. So

the next one is hue correct. So you can change the whole color of the picture with this one.

Alright, so you can change these are the dots over here, you can remove them with clicking on them

and removing. And you can just change the color of the picture within the within this color. Like

this is the yellow car or here we can make it more less saturated or more saturated with going

up or down. And this is the bull color. As you can see, over here, we can make it

more saturated or less saturated like this. And these one as well.

All right. And that is that note. And we can, this note is very helpful.

As well, this is the main note that if you want to do some real quick changes to your picture,

you go to this note. So you can change the hue of the whole picture. So if we do something like

this, you can change the whole picture like this. And if I change the situation, you can change the

situation situation like this. What I'm interested in in this situation or here is if I decrease the

situation, as you can see, I now have very good control over how much saturation I want. So in the

default value is this one, I can make it like 1.5 or 1.1. And this is more saturation, I think I

need to decrease the situation a little bit. Something like this, maybe, right, or something

like 1.95 or 1.97, a little bit decreasing the saturation. And then we have value. Again,

it's like the brightness of the whole picture. Let's decrease it a little bit like this.

And that's it about hue saturation. Then we can also combine all these like we can do

another color balance or here and then

then change the colors again, something like this. But what I'm interested in is this color

correction, this node is giving you all the things you need to change the color of your picture. So

this is the master the highlight the midtone and the shadows. And these rows give you

the gain, the leaf, the gamma and the contrast. So if I want to change the midtone, that if I want

to change the contrast of the midtones of my picture, I will go here, midtones, contrast,

and then change the whole contrast of the picture. Right? If you want to change the contrast of the

highlights, I'll go here. As you can see, the highlights over here change as well.

Right? If I want to change the contrast of the whole picture, I go here.

Right. Let's change the contrast of the shadows as well. I have some contrasts.

Every one of these. Well, every one of these

values helps the picture to be more appealing. And not to

not to very cold and all that. So we can change this value as well. I'm not sure what it does,

maybe it changes a little bit of the exposure. I'm not sure.

So we can change the gain and add some more interesting effect to our scene.

So for the shadows, let's increase the gain and see what we get.

And the strange actually goes. So if we want to have some, if you want to have some really

shadows like this, you can decrease the gain of the shadows over here.

Also, if you, for example, the lights, if you do some EV rendering and the lights are

too like bleeding, the edges are not very nice and all you can come over here and change the gain.

It helps to soften the shadows.

Let's decrease a little bit of the gain of the shadows. Let's go to lift.

I don't think I need to change anything. This one may be the highlights. Maybe

I think I'm good with that. And now I think

Yeah, we made some really good changes to the whole picture if you want to see the

result over here. Let's do this. And as you can see, this is the raw render. And this is with

some few nodes, very, very few simple nodes, first sharpen the image, then add in some

lens distortion, adding a hue saturation to make some simple changes to the hue and saturation,

and add in the color correction to make some subtle changes to the colors. And with Ctrl

Shift clicking, you can see that we made this photo much more appealing to the eye not too cold,

like what we had over here. Okay, with particles, we add some more interesting shapes over here

to the scene. So it not seems so. So simple. Right. I was with a vertex painting, we added

some cool paintings or these areas like over these areas, I made some variation in the skin color,

which makes the whole thing more interesting. Okay, I rendered it with 512 samples, you can

go higher if you want a more clear picture. All right. And make sure to have the denoise on,

you could also add a denoise. The denoise node over here and add it over here and make some

changes to the to the picture. All right. I think now I'm okay with this one, you can always go back

and change the things over here, for example, maybe once more, more lights on my picture.

So this is too dark for me. So I just increase it over here and have it more dark like this.

Right. Maybe change the saturation.

I think decreasing the saturation is a good idea over here.

And yeah, that's it. I think that's it for this video on this part of the course. In the next one,

you're going to, you're going to go deep into the sculpting in Blender and making any sculpts,

making some and doing some practices in sculpting. I'm going to show you how to use all those

brushes and the sculpts menu and how to sculpt in general. So until then, I hope you enjoyed this

part of the course and I hope you made some cool characters and goodbye.

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
