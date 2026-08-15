# 227 — Texturing Rocks

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 33 — 3D Environments: Sculpting |
| **Bài học** | Texturing Rocks |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 19:41 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texturing Rocks** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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



Welcome back. Now, what we are left to do is to texture our object. So, I went on ahead

and looked for a texture that I can use in my, you know, in texturing my assets here.

This seemed to be fine but, you know, at a first glance it looks pretty good but then

when you look more into it, it's really, really not, it really needs some saturation here

like it needs the value to be increased a bit and for the saturation to be increased

a bit. You can see that this is pretty dim. So, I went on ahead and looked for some other

assets that I can not put into my rough board but to actually save and I believe I saved

this one. The reason is I would like to introduce you into a new trick. For this one, however,

since we will be texturing our object, so I think we can open a shader editor here.

There we go. I'll hit N and I think we can also have another horizontal area here and

here, however, I'm not opening the properties or the outliner. I'll be opening the image

editor. There it is. Let's increase this area. We don't need this to be increased anyway.

I'll just show this for, you know, demonstration. I don't need that image either. I'll just

open a new image. So, I'll just open and assets, reference and this. Okay. So, what

are we going to do? Well, there are two ways to do this thing. So, I'll probably just add

a random material. We still didn't UV unwrap this. We will do, however. So, I can hit shift

A and search for a color ramp. Let me quickly turn that on. So, here, with this selecting,

I can hit alt E and I should have the dropper on. I should select the color maybe. Should

it be black? Oh, I should have been hovering over this gradient and when I hit alt E,

you can just start picking random colors and look at that. We already have like a very

good view of colors or a spectrum of colors, I should say, and it can just press escape.

I'm sorry. Just select the colors. To confirm, I can hit the, as you can see here, the right

mouse button. So, I'll just click that and now I have that sort of view. Again, I might

have picked the same color multiple times, just like as you can see here. These are pretty

close to each other. These two, maybe. What if I wanted something, a method that essentially

would result in a better color picking, essentially. This is why I also need the image viewer because

I can click on image and then extract palette. What this does is that I can now switch this

to paint and from the side menu here, if you don't see it, just hit N, then it'll scroll

down until I see this word palette, this option palette. Then we'll just look for the image

name here and just pick it. Now, we have the entire color palette to our side here and

all I can do now is I can maybe shift A, S, and ramp. We need a new one and now while

hovering over that gradient, I'll hit L, E, and I'll just pick the colors I find cool,

like these. Essentially, these will act as our filter for our material. Again, I picked

up this material, rock 029. It has different stages as well. It's something we've talked

about before, like different states of decay maybe, but in this case, it's different spots.

It's like a desert here, more like a cliff on a sea or an ocean. This is a bit mossy. This is

like more like a dry area. Now, we'll just do the same as we do all the time. I'll just hit

Ctrl, Shift, and T to bring in a new material, which is rock 029. I downloaded the 2K. I'll just

pick all these and hit principled. As usual, I'll just unplug this one and delete it. I'll just make

sure that we have base color, roughness, normal, into normal, and displacement. Right. I will now

quickly switch to shading viewport. This will change my menu here. That's fine. I'll see how

this looks right off the bat. Well, I have no details at all. Let's change this to generate

it. If it doesn't work, maybe object does. It needs some rotation, I believe, on the Y by 90.

Yeah, it needs UV unwrapping for sure. This might take some time, however. Let me see if this could

be done quickly. I'll just go into edit mode and then hit A to select everything. I don't think we

need that area. Yeah, we might need that image editor, actually. We don't need the outliner,

and we might get rid of that object poverty menu. For now, however, I'll just hit U. Let me make

sure that I have all the transformations set. Location doesn't really matter. I'll just hit

Ctrl Alt X to make sure that the origin is at the bottom. Show me the origin, please. Liquid is

hidden for some reason. Let's switch back to layout. Yeah, the origin is fine. I'll switch

back to shading. I'll just go into edit mode and UV unwrap it. Let's hit Ctrl S before we destroy

our PC. From here, I can just go to here, and we have a UV map. Now, it goes out of the edit mode

and then switch this to UV. This really didn't do a good job, though. Oh, no. Zero. This is fine,

but it's a bit too stretched. Let's hit Ctrl A, apply all, and then Ctrl Alt X to make it to the

bottom again. Go into edit mode and hit U, and make it smart UV project, and hit OK. This takes

even a longer time. Makes sense. But hopefully, we won't have to play with the scale. And even if we

like only play with the scale, that isn't really much of a hassle. I should have probably switched

back to the... Oh, I finished. And this doesn't look too bad. I'll quickly here check something,

which is the face orientation. If it's blue, that's good. This means that these are facing

outwards. Do we have any... Oh, we should have cleared this, I believe. Let's see if this destroys

anything. Let's go back in here, hit Ctrl S, tab into edit mode, U, and let's try smart UV project

again. This, by the way, this sometimes has an effect on the normals of the object. And although,

yes, they might be facing outwards, they tend to sometimes have this odd artifact when you'll be

unwrapping or when texturing. And this, by the way, could also occur when you download an asset

online. Most of the time, you'll see that they already have maybe a mask or some data, skin data

from a different software or maybe Blender itself. But because of sculpting, it sometimes changes

normal settings. Okay. Let's see this one more time. I believe it didn't fix that much. But let's

try and add a value node to the scale. This two, three. Is it going well or not? I'm not sure. Yes,

I believe it is. Now, 12. This looks fine. But again, because of the colors, we usually would

have something like that. Let's turn off world opacity and see what do we want. Let's just hit

Ctrl S and switch the engine here to cycles. GPU, light paths, switch this back to eight,

this to eight, probably transmission, I think is glossy here, maybe six. And I'll hit Shift A and

add a sun lamp, light, sun, and then hit Ctrl B to have a little boundary here. I'll switch to cycles.

And now we get to look at that sun. Sorry, at the color there. Maybe change the intensity here

to maybe two. So we can find quickly or maybe change the color to something a bit warmer.

You can also change the scale to maybe 14, 16. Repetition here isn't too obvious, thankfully,

because of the, like how un-uniform the object is, how very organic it is. It's very hard to spot

the seams. Of course, like if you would like, you can add the seam breaking or tile breaking here,

but I don't think it's going to be any useful, to be honest. Here, however, we will be adding

the ramp, the color ramp we just added here. And if I were to switch, where is that picture? I

believe we still, we should have the color palette under paint. Color picker. No, image, extract

palette. Color picker. Come on, show up, please. We are selecting the paint. There it is, color

palette. And now we have the same color palette. Don't think like we actually need to look at the

actual image. We can just have this. Nope. Okay. We destroyed that. There we go. You can just bring

this in. As you can see, let's hit T. We don't need that side menu. And I can just have this

only. And now I'll just hit, let's actually, yes, let's sort them by hue. And we will pick like a

certain hue here. Like I believe this color range from here to there is just pretty awesome. So yeah,

I'll just hover over here, hit Alt E and start picking colors. As you can see this

immediately changes our texture here. And the more I add colors, the more you can see the subtle

changes. I need some bright colors here and there. I'll just hit right click and we'll just get rid

of this. Maybe change this. It's a way cool solution. And since it's pretty easy to achieve,

then why not just. So this is before, sorry, this is after, and this is before. Like this

looks completely dull and I could have spent a little more time finding like a better texture.

Let's tone down that darks here. Let's try and maybe zoom out before removing that. Again,

I could have spent more time finding a better texture. Maybe I could like the look of the actual

texture. I just don't want to get rid of, sorry, I just don't want to spend time trying to find

the actual, something that looks like way similar to something I want to achieve. So yeah, if I

switch back to Eevee, it's going to look a bit different. Yeah, like way different. I'll hit

Control S. Probably if like you maybe change these settings, like this is a little bit matching to

the actual look. Yeah, a little bit. Yeah, there's like, this is better of course. But anyhow,

we have textured our model pretty easily and this looks really cool. We can now save this,

call it maybe Rocky or Rocks. I'll just, you know, I'm sorry, drag and drop this over here.

I should probably UV unwrap it as well. Yeah. I'll hit A. This is the undecimated one, I believe.

I don't know. I'll just hit U and Smart UV Project and hit OK. Hopefully it doesn't have any

scaling only location. Awesome. And that doesn't look too bad either. I might probably like break

the like sharing of them having the same material and then like change a bit that material. But

overall, we are now ready to move into lighting settings and camera settings. For now, however,

try this awesome trick of, you know, extracting color palette from your images. Again, like you

can just switch through the image editor and then under image, just go to extract palette.

And now by default, you are set to view. If you switch to paint and then under tool,

brush settings, color palette. Yeah. Brush settings, color palette. You'll just find

the color palette there. It's good to order things by certain either values, saturation,

luminous. This will help and certainly have things in order and as such, be able to pick

from a certain hue. And then you can just bring in a color ramp, hover over the gradient here and

just hit Alt E. Make sure you're hovering here and then you'll just pick the colors.

Right click to confirm or just escape to cancel. And now you have this new material. So before.

After. Awesome. Yeah. Go ahead and practice this a little bit because we will be working

on the main scene, work on the lighting, work on the camera. I'll see you guys on the next one.