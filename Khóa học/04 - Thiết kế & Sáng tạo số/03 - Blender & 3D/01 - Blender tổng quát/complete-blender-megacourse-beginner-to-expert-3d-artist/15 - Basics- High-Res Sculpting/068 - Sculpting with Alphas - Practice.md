# 068 — Sculpting with Alphas

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 15 — Basics: High-Res Sculpting |
| **Bài học** | Sculpting with Alphas |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 18m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Sculpting with Alphas** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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

Okay, so now we have our sculpt all finished here, well mostly finished. We

have re-topologized this, we have brought this new re-topologized mesh back into

sculpt mode, we have added a multi-res modifier, we have subdivided it five

times, and we have added back in the details that we were missing.

So now if I wanted to proceed adding details to this, I need to get even finer

in here. So if I wanted to add very fine details to this, things like pores or if

this was maybe like a rock, things like very small cracks and a rock texture, we

can do this into the sculpt itself. However, if we were to come in and

manually sculpt all these in using just our brushes here, that would be very very

time-consuming. So we are going to use alpha textures with our brushes in order

to speed this up. Now an alpha texture is just a 2D image in black and white, can

be any image, but it is just a 2D black and white image that typically would

drive the transparency values of a 2D image, such that the areas that are

black would be fully transparent, and the areas that are white would be fully

opaque. So if I were to use this image as an alpha on a image that was, say, a flat

red color, the red would appear wherever there is this white section, and

wherever this black part was, there would just be no color at all. It would shine

through if there was anything underneath it. So we can use alphas in a similar way

in Blender. So Blender can take these black and white images and interpolate

them into sculpting strokes on our mesh, such that any area that is black on the

alpha texture will not be affected by the sculpt brush, and any area that is

white will be. So this is very similar principle to masking, but we're going to

do it with a texture that we use from an outside source. So on the Hyros

sculpting model, make sure we're in sculpt mode, and we're going to come over

here to the active tool and workspace settings. And here we will have all the

settings for whatever brush we have selected. So we're going to do this with

the draw brush active. Just select the draw brush in the tool panel up here,

and you will get a preview that looks like this with all of its settings. Now I

don't actually want to edit the draw brush itself, because I may want to come

back and use the default draw brush at a later time. So what I am going to do is

duplicate this brush and make edits to the duplicate. So to duplicate a brush,

all we have to do is come in to this brushes preview tab and click on this

icon here that says add brush. Now nothing really has changed except that

we now have a suffix of .001 after our sculpt draw brush name. Now remember

that this suffix is what Blender uses to denote duplicates. And if we click on

this preview image, we can see that we have our original sculpt draw brush and

the duplicate here next to it. Let's rename this to something more meaningful

such as alpha texture. So clicking on this now we see that we have our alpha

texture brush and our original sculpt draw brush with all of the default

settings. So select the alpha texture, make sure that is the active brush, and

we are going to look down here at these brush settings. We have all of our

typical settings, some of which are available up here. We are going to

come down to this drop-down however that says texture. So click that. We'll get

this panel here which has nothing currently in our texture slot. We need to

create a new texture slot for this brush. So let's just click new here, and that

has created a new blank texture. Now in order to tell Blender what alpha

texture we want to use, we need to bring it in to Blender. So we're going to

navigate down here to the texture properties tab in the properties editor

window, and here we have a preview of the texture that we currently have applied

to this brush which is blank. So to bring in a new texture all we have to do is

click this open button right here, and we need to navigate to the location on

our computer where we have our alpha textures. I have a folder in which I keep

all the alphas that I have saved over various projects, and you can find it

this way. So let's select this one. So now I have this alpha loaded into this

brush. So let's see what happens if we just click and sculpt on this now. You'll

see that our sculpt is being created in the shape of this alpha. Now we have a

couple of problems with this, namely that when we click and sculpt on this it is

not centered under our brush and it seems to be tiling in sort of arbitrary

manner. So let's CTRL Z to undo that, and to fix that all we have to do is come

into our active tool and workspace settings and down in the texture

drop-down we're going to look at this mapping option and where it says tiled

we're just going to change it to area plane. So now when we click our alpha is

being drawn directly under our cursor. Now single clicking anywhere on this mesh

will create a sort of stamp effect, and you'll notice that the edges are sort of

faded out. If I wanted to prevent that I would need to change the falloff of this

brush, which I can do by coming up here to the falloff drop-down and changing it

from smooth to constant, and now you'll see that the edges are no longer being

blurred. CTRL Z to undo that.

So single clicking creates a nice stamp effect, but if I click and hold and drag

you'll see that we get this awful mess, and the reason we're doing this is, or I

should say the reason this is happening is because we are spacing our samples

too close together so when we click and drag they're being placed on top of one

another. So we can fix this by coming over to our active tool settings, coming

down underneath the texture drop-down there is a drop-down that is called

stroke. Expand that. We're going to look at this spacing setting right here. Right

now it is set at 10%, which means that when the mouse moves 10% away from the

original point we clicked we're going to draw another version of our brush. So

lowering this will create very smooth strokes when you're using a default

brush with no alpha, but we want to actually space this up. Let's space this

to 100% so that means that our cursor will have to clear the area under our

brush stroke before it draws another example. So if we click and drag now and

we can turn the strength down to reduce that noisiness. So if we click and drag

now we see that we are dragging out stamps spaced 100% apart from each other

in the direction of our stroke. Now that's great for creating stamps and the

like but say you wanted to create something with more of a a uniform

texture. Well let's look at how to do that. Let's come back into our texture

tab and let's change the texture we're working with. So let's go into open,

navigate to the location on your computer where you have saved your

alphas. All of the alphas I have saved I've just found either online or created

myself in an image editing software such as Photoshop. So let's grab

something like this. Load it up, you'll see the preview in here. And now when we

click in stamp, well our spacing is all wrong and we're getting these strange

patches but we see that it is in fact creating a sort of skin like texture.

Now this alpha is called alien skin. I did not create it but you can find

alphas you can just search them in Google and you'll be able to find some

good sources. Sometimes you find packs of them that you have to pay for, most you

can find for free. Or again you can create them yourself. And at the end of

this video I will briefly show you a good resource for finding alphas for

free. So I have just loaded in this alien skin alpha and it I have given it

a spacing of 25%. So now if I click and drag with my draw brush and I just move

over this whole surface it's creating a nice skin texture without me having to

do a bunch of work drawing these things in manually. So there's one more way to

use alphas and that is by using them as stencils. So let's look at that. Let's

change our texture back to the flower texture we were using before. So to do

that instead of clicking open here I'm just going to click this image drop-down.

It seems that we have lost our link to our original image but no problem let's

just reopen it. Let's choose our flower again. This will work with any of these

but just for the purposes of this demonstration I like this flower. So now

we're gonna look at how to use this more like a stencil. So we have our

updated texture right here and to do this as a stencil instead of area plane

we're just going to come into the mapping here and change it to stencil.

Now you'll get a stencil preview in the bottom left corner of your screen and to

use this stencil all you have to do is move this image over the area that you

would like to paint or sculpt on. So to move a stencil all you have to do is a

right click on it and drag it around to move it. To rotate a stencil you have to

hold ctrl and then right click and to scale your stencil all you have to do is

hold shift and right click and drag. So now that this is here if we come in with

our draw brush and draw over it you can see it's being raised up under our brush

using this image as a stencil. So that is all I want to cover for using the alphas

and to sculpt high-res detail into your models. Let's quickly look at where we

can find some of these images so we can continue our sculpt. So there are many

places where you can find good alphas or you can create them yourself if you know

how to use programs such as Photoshop. But one resource I really like to use a

lot is Pixelogic's Resource Center. Now Pixelogic is the company that makes Zbrush

which I mentioned at the top of the section is a standalone professional

quality sculpting program which we are not going to cover obviously in this

course because this is an entirely different program from Blender. But

Pixelogic has all sorts of resources for alphas that you can use. So if you click

on the Resource Center it will bring you to this page here. You just want to come

down to the tab or sorry you want to come down to the bar here and click on

the alphas tab. Now all these ones are provided to you for free. You can look

through all of these categories and download any alphas you feel are

appropriate. So let's come down in here to skins. Let's look at some of the skins

they have here. A lot of these are animal or alien.

Let's look at this preview. This one's pretty good but it has a quite a large

wrinkle through it right here. This one's better I think for a larger scale skin

texture because it doesn't have any of those large forms. So to download this

all you have to do is click the download button. Now something I've

noticed about this website in particular is that if you are using Google Chrome

the downloads will not work. You can click download and just nothing will

happen. I don't know why it is particular to this website so just open a different

internet browser if you are a Chrome user. I'm using now Microsoft Edge here

to download this file. Okay so if you open this file it will download to

wherever your files download. You'll get a zip folder here right here and the

contents is just a Photoshop document here. So let's extract this and I'm going

to put it in with my other alphas which I have located here on my drive. So

there's the location. I'm just gonna hit extract. We can close this out. So now

let's come into the texture properties and let's open that skin texture we just

saved. All right now let's check our spacing. Everything should be set to go

from our my last example so it's set to 25%. You can set our strength however

strong we need it. But if we come in here and just start clicking and dragging

you'll see we're getting this nice subtle skin texture that we can just

quickly cover our whole mesh with. Now obviously you can come in here and get

finer details. You can examine how pores look on different areas of the face

because they will look different depending on the area of the face you're

looking at. This is looking a little bit like chicken skin but that's all right.

You know and you can experiment with using the negative version by holding

control. Again this is based off of the draw brush functionality so if we hold

control it'll just push those points in instead of pull them out. So feel free to

experiment with different alphas and create different textures but that is

how you would create fine detail surface work on your mesh. All right so that is

going to conclude our unit on sculpting in Blender and in the next unit we're

going to come in and start talking about how to create materials and textures to

alter the look of the surface of our models.

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
