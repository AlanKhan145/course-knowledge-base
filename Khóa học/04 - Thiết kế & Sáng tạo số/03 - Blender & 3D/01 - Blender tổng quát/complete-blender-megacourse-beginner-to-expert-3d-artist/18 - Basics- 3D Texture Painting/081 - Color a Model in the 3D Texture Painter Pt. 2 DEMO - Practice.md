# 081 — Color a Model in the 3D Texture Painter Pt. 2 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 18 — Basics: 3D Texture Painting |
| **Bài học** | Color a Model in the 3D Texture Painter Pt. 2 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 16:05 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Color a Model in the 3D Texture Painter Pt. 2 DEMO** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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


Alright, so picking up where we left off in the last demo, we have our base color map

more or less complete.

We were just coming in and finishing up some of this height information.

So let's go ahead and proceed with that.

I have the bump map that I am currently painting here on the left hand side.

So you'll see that I've only just started to add some of this bump information.

I'm going to come in again, I'm using a tablet and pen, but you feel free to use a mouse

if that is what you have.

I'm going to come in with my pen and just soften brush, I'm going to change to my draw

brush here, make sure my color is still set to black, that my strength is at about 0.15 right now.

And unfortunately, unlike for sculpting, I have to manually switch to my soften or blending brush.

Hopefully in a future update, Blender will have it so the soften brush is on shift, but

as of right now, we have to manually switch to that.

Alright, so I'm just painting in with black, and very light strokes, very light pen pressure,

just to bring this in, and then I'm coming in, switching to my soften brush, and just

softening out some of that choppiness.

And then if I wanted to get this really smooth, I could come in on the 2D side here, and fix

the blending here, it's just a little bit easier to see how evenly it is blending when

you are looking at the grayscale image, I think.

And again, I can come to my viewport shading, and change the rotation of my light until

the face that I'm currently working on is not in shadow, and I just do that by clicking

and dragging on that rotation slider.

So you'll see here that I'm getting a little bit of a seam, and it is reflected right here

in the texture as well, this is just because I'm coming around this corner, Blender is

having a little trouble determining how this should go, it's sort of just catching on the

edge a little bit, so I'm just going to come into the 2D image editor, and soften and blur

that to get rid of that seam.

Let's change the rotation of our light again, to highlight this back face, go back to our

draw brush, and just resume with the same technique.

You can obviously take as much time as you need to get these as exact and as sharp as

you like, I'm not going to spend too much more time on this, just because this is just

a demonstration, and I think you get the idea, but I do encourage you to take much more time

than I'm spending on all these demonstrations, and really working with it.

I think my brush size is a little bit too large there, so I'm just going to CTRL-Z to

undo that, and come in with a slightly smaller brush.

Brush size is something you want to think about when doing any sort of digital painting,

whether 2D or 3D, I think a common mistake a lot of people make is that they want to

get these details in, so they turn their brush size down to a very small size, and that ends

up looking a little sketchy or muddled, and just generally off, so I find that for any

form of digital painting, you generally want to have your brush size as large as you possibly

can, and that tends to make your strokes a little bit smoother, and everything just tends

to transition a little bit more nicely, so keep that in mind, you always want to be working

with probably a fairly large brush stroke when you can, you should really only be working

with a small one towards the end of whatever you're painting, for like the very finishing details.

Okay, I'm not going to bother with these two, because I think that that looks pretty good,

and I'm not changing the silhouette of this at all, you can obviously come in here and

cut these in, if you wanted the silhouette to be a non-cube, and the way that I would

do that is by probably coming in with a cylinder or something, or a sphere even, would probably

be better, and I would cut in using a boolean, oh it looks like somehow I have undone my

texture painting, well that is a bummer, let me pause the recording real quick and just

put back those points I just made.

Okay we're back, so that actually brings up a really good point for me, I had pressed

control Z to undo the addition of that cylinder in the scene, and it erased my image here,

my bump image, because I had not yet saved it, so always always always when you are done

with your work, for every slot you want to come in and save your image, again we went

over this in the last video, where we just have to save it as an external file, and once

you have saved it as an external file, you know you will be able to see these image textures

in your file browser.

So always save your work, because until you save this externally, Blender is just sort

of caching it in its short term memory, so things happen, you lose your work, it's no fun.

Okay so looking at what we have left here, this is pretty good, and for the purposes

of this demonstration, I don't want to do too much more texture painting, because it

is just a lot about taking time, and being patient, and working your values back and

forth until you have achieved what you want to.

So the last thing that I really want to do for this piece is to vary the roughness a little.

Let's try to get this camera in a position where you can see how the light is reflecting

off this, and you can see it a little bit more easily right here.

The overall roughness of this is pretty good, but in the real world, again, objects almost

never have a uniform roughness across the surface, unless you are dealing with something

like a mirror that is brand new, but even glass surfaces that are very smooth tend to

have grit and scratches that accumulate over time.

So the overall roughness, as I said, is good, but we want to vary this a little, so we're

going to use basically the same technique we used for the base color, which is where

we're going to add a texture slot, and just with a very light pen pressure, we're just

going to model the roughness a little.

So to do this, let's add a roughness texture slot up here by clicking the plus and pressing roughness.

Let's make it the same size as our bump. That is fine.

And I think our default value roughness is at 0.4 currently, so let's just make sure

that this value here is set to 0.4 to get the corresponding color and make sure that

hue and saturation have zero values, and then we can press okay.

All right, so now we have added a roughness channel, and I'm going to quickly come into

solid viewport shading just so I can see what I'm doing on this cube as I am doing it, because

I want these values to be very subtle.

So if I were to be in material preview mode while doing it, it just might be hard for

me to visualize what I'm doing.

So again, we could do this with a procedural noise texture, and the way that we would do

that is by adding it here as an input, but I'm just going to paint it because it's a

little bit quicker.

So keeping in mind that a value of zero for roughness means that it will be perfectly

smooth and shiny, and that value corresponds to a black color, and that a white color is

going to be the roughest value we can have, we're going to set this just below white because

I do want to add roughness, not shininess to this cube.

And I'm using my draw brush here with a very low brush strength and a light pen pressure,

and just as we modeled this before, it's mottled with T's not D's, mottled it, we can do so here.

And now you may be saying there's nothing happening, but in fact there is.

The difference here is just so subtle that it's hard to see in the 3D viewport, but if

you look up here in the 2D image editor, you can see the kind of detail that I'm adding.

And you may be saying, well, if I can't see it here when I'm painting it, why even paint it?

And I just have to say that trust me, these sort of fine details, you may not think that

they're noticeable, but they sort of are on a very subconscious level to the viewer.

So it is really worth adding these details, and as you get more experienced in texture

painting and CGI in general, you'll start to really pick up on those subtle differences.

Okay, let's move back into material preview and see what this has done.

Oh, but first, before we do anything else, let's save this image.

And we're just going to save it in the same location that I have saved these other two.

The name is fine and press save. There we go.

That way, even if Blender somehow loses this, we can just reload these files in as texture images.

Just making sure everything is saved here.

I'm going to overwrite this previous one.

This is a second one that I made, just going to overwrite that previous one, just so that

they're all in the same location.

And for some reason, it has changed my format to EXR, which I do not want. I wanted APNG.

So just make sure that your file format is correct for what you need, and you can save it. There we go.

Okay, so let's just take a quick look at our roughness and make sure that it is doing what

we want it to do and that it looks the way we want it to look.

So the best way to do this for roughness is to find a glancing angle of your model where

you can see the light being reflected off of it really well.

So I'm looking at this surface right here.

And if I want to check how this roughness map is affecting, I can just disconnect it

by clicking and dragging off of this node and the material editor to disable it.

And I can reconnect it to enable it.

So you can see everything is very smooth, very uniform here.

But when I add this roughness map, it just breaks it up a little bit.

So that is going to conclude the texture painting portion of this course.

Obviously, you could take this a lot further, you could, you know, model these divots.

And the only caveat to this is that this will affect your UVs.

So you will probably have to come in again with texture paint and just clean up these areas.

But should not be too much of a problem as long as your UVs do not change dramatically on your object.

You can make small adjustments. So that is it.

As I said, for texture painting, this is a great way to add hand painted textures to

any of your objects.

So we are going to move on and talk a little bit about rendering before we wrap up this

course entirely.

So I will see you then.

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
