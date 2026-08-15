# 073 — Create a Tiling Texture DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 16 — Basics: Introduction to Textures and Materials |
| **Bài học** | Create a Tiling Texture DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 27m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Create a Tiling Texture DEMO** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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


We are now going to look at how to create a tileable texture such as the

one we have here using a photograph as a source. So to start out with we will need

a photograph to start from. Now there is more than one way to source these images

you can take them yourself if you have a high quality camera or you can find them

online. The source that I most frequently use is textures.com. So just

navigate to textures.com and here we will see they have a lot of 3d materials.

These are based on texture sets that they already have set up for you. They

even have some downloadable 3d objects with materials applied to them. You'll

see the object in the preview and if you hover over it you will see it without

its textures. So this is a great resource for textures as well as 3d objects. Now

you will have to create an account and there is a paid version however you get

15 credits free per month I think. So unless you are downloading a large

number of textures and materials from this site you should be able to use it

for free. However if you are interested in the premium you can check that out as

well which will basically give you a larger number of credits per month that

you can buy to in order to download these these objects. So there's all this

special content which is all these 3d objects and things that they have set up

for you already but let's come down in here to regular photos and let's come

down into nature and you'll start to see some of the other types of assets they

have for download here. Let's come into grass just to narrow this down and here

we are given all sorts of photo textures of grass. Now most of these say seamless

on here but we are not going to download a seamless texture because we are going

the entire purpose of this demonstration is to show you how to make a seamless

texture from a regular photo. So there are certain things that make a photo a

good source for a 3d texture and there are things that make it bad so let's

look at some examples of what I mean. Now a good photo source texture should have

neutral light so no harsh shadows no strong points of directional light.

Photos taken on a overcast day are a good example of this and it should also

be taken straight on. You'll see that most of these these images here are

looking straight down at the ground and they're not taken at an angle. So this is

an example of a good photo source texture. You'll see that this is not a

seamless repeating texture but it is taken straight on and there are no harsh

shadows or strong points of directional light. This is an example of a bad photo

source texture. This is taken at an angle from the ground. You can see that there

is clearly a strong directional sun coming from the back and there are harsh

shadows in the front. If we were to try to tile a texture based on this photo it

would appear just very, there would be large seams, it would look like it was

coming from an angle which would not be appropriate for the model and it just

would not tile well. So we want to find something that is closer to this. Now I

did find this from textures.com but you can download any of these which you like.

Now we just don't, we just want to make sure that we are not downloading the

seamless version of any of these textures. So when you come into here, into

this grass browser, you can click on any of these that you like and typically the

seamless ones will be in the preview but if you click on any of these they will

typically have their original photo source texture available for to you as

well. So again download any of these that you like but just make sure that

you are downloading the original image and not the seamless version. You can

download it at a small or a slightly larger size based on the number of

credits you have available to you. Again I think it's something like 15 free per

month. It might be slightly higher than that. So I have gone ahead and found this

texture again from textures.com and I have already downloaded it. So once you

have that ready to go we can move into Photoshop. Now you do need an image

editing software to do this. It does not necessarily have to be Photoshop. I know

that Photoshop is a paid service and that might not be attainable for all of

you. So there are alternatives. You can use --, the GNU image manipulation

program. It is free, open source image editor. It's a competitor to Photoshop

but you will just have to do a little bit of research on your own onto how to

use it as this is not a -- course and I am going to be using Photoshop for

this. Okay so here we are in our image editing software. So let's just open our

open the texture or sorry let's open the image we downloaded from textures.com

into our image editing software.

Pardon my messiness.

I have moved the location of it so Photoshop just couldn't find it. So let's

just locate it on our computer and open it up.

Okay so this is the image we are working with.

So the first thing we need to do is crop this down to a smaller selection of this

image. Now the way we're going to do this is with the crop tool and the area we're

going to select depends on the image you're using but you want to look for an

area of the photograph that has no large form details such as these plants here

or this sort of rocky dirt area that will be noticeable when you tile the selection

of your image many many times. So we're going to select our crop tool here and

you just want to ensure that delete crop pixels is enabled for this. The other

thing you want to do is change the selection from ratio to one by one square.

We want a square selection. So once we have our crop tool up here we can just

pull this in. I don't want any of these large form details to a selection that

has sort of a more neutral look to it. Let's select this area right here.

Yes let's select this area right here. So let's just crop our image down to here.

Pressing enter on our keyboard. So now we have just this tiny little selection from

our original photograph. The next thing we need to do is to resize this image to the

nearest power of two resolution. So a power of two resolution is probably something you

may already be familiar with whether or not you realize it. Resolutions for digital imaging

are typically given in pixels and a power of two. So things like 512 by 512,

1024 by 1024, 2048 by 2048, which we also call a 2k texture, or 4096 by 4096, which is a 4k texture.

So let's resize this image to a power of two. And the reason why we need to do this is for

performance reasons. It is much easier for image quality to improve. So let's go ahead and

resize this image. And it is much easier for your machine to compute things that are a power of two

rather than some sort of arbitrary size. So let's come into image, image size. So currently we have

212 by 212 pixels. So the nearest power of two to this is going to be 256.

So let's reset, let's resample this. And if you are enlarging it, you can choose the method.

I'm just going to click preserve detail since I'm making it slightly larger. I don't want this

to become very pixelated and blurry. And preserve details is just Photoshop's way of doing its best

to make it not blurry when we scale it up. So let's just hit OK. And that'll pop it up to 256

by 256 pixels, which is just a little bit easier for your computer to work with. So now we have

this selection and we have it in a power of two. The next thing we need to do is check how it is

currently how it will currently tile just as it is. So the way that we do that is by using the

offset filter in Photoshop. So let's come up to the filter option here. Come down to other

and click offset. Now you'll be given this dialog window right here. And all we need to do is set

the horizontal and vertical pixels value to half of the size of our selection. So we know that

our image is 256 by 256. So let's enter 128 and 128 into each of these values and then press OK.

This will shift it over exactly halfway horizontally and exactly halfway vertically.

So that we're we end up with the borders of our image in the center and we can see this seam line

here. Now we just need to fix these scenes. So let's do this. Let's unlock this if it is the

background layer, because we need to edit this layer now. So to do this, we're going to use the

clone tool, which right in Photoshop is right here. Let's resize this down. Now we're working

with a pretty small image size here. Typically, you would want your photo source textures to be

as large as possible to get the maximum resolution. But I think this will work just for the purposes

of demonstration. So to use the clone tool, we just have to select it in the toolbar.

And now we need to select an area of our image that we wish to sample. You can do that by holding

Alt and clicking on that area. So now when we come over with the clone tool,

we can just click and draw over to blend in those scenes.

Okay, so now we have blended in the seams at the borders of our image.

Now, if I want to expand this sample, I can do so by coming into image and coming into canvas size.

Again, not image size, image size, but canvas size. So I'm going to expand this image.

And coming into canvas size, again, not image size, image size will resize everything here,

I just want to make the canvas larger so I can duplicate this image around. So come into canvas

size. Let's change our units to pixels. So currently we have a canvas that is 256 by 256,

the same size as our image. Let's double that. Let's hit 512 by 512. And let's change our anchor

to the top right corner so that our canvas expands to the right and down so that our

image is going to be perfectly aligned with the top left corner of the canvas.

Press OK. So now we have doubled this image size, or the canvas size, I should say.

So let's duplicate this layer, you can either drag it, click and hold, drag it over the new

layer button to duplicate it. Or you can press copy and paste with Ctrl C and Ctrl V. So now I

have a duplicate of this layer on top of my first layer. So I have to do is take the transform tool,

hold shift to lock the transformation to a single axis and click and drag it out.

Now let's keep duplicating until we have filled out the entire canvas.

Hit Ctrl copy and then Ctrl and Shift and V will paste that copy directly in place over

the last one. If you just press Ctrl V to paste, it will paste it in the center of your canvas.

Let's line this up and let's copy this one more time. Ctrl V,

Ctrl Shift V to paste in place, hold shift and drag it to the side.

Okay, so that actually looks pretty good. But I can see that there's these forms here that I'm

already starting to notice repetition on. So let's fix that. First thing we're going to do is highlight

all the layers that we have in our layers here, we're going to right click and we're

going to merge them down to a single layer. Now we're going to grab our clone tool.

And we're going to hold alt to select an area of our image that we wish to sample.

And we can come in and just break up some of these repeating patterns

so that they are not quite so noticeable

as duplicates.

That's a little bit better. Let's check the tiling one more time. So we have all of our layers

merged. So we can just go in here, come into filter, other, and offset one more time. But now

we need to change the values here to 256 by 256. Remember, because we increased the size of this

to 512 by 512. So now entering values of 256, we'll put that seam right in the center.

And this is already looking good, we are seeing a less noticeable seam here.

Now I do think some of these forms will be noticeable when we tile them. So let's come in

with our clone brush once again. Let's grab a sort of neutral. Oops, let's make sure our layer

is selected first. Let's grab a sort of neutral area and break this up even more.

Let's repeat this process one more time. So we have a 1024 by 1024 image. So let's come into image,

let's come into image, canvas size, let's change the units to pixels.

And let's double this by typing in 1024. Oh, and I forgot to change my anchor point,

but that's all right, we can just move this up. And it should snap,

you should be able to snap it, I should say to the top left corner. All right, let's Ctrl C

and Ctrl Shift V. And then with the transform tool as our selection, hold shift, move it out.

Ctrl C, Ctrl Shift V, hold shift.

Ctrl C, Ctrl Shift V, hold shift, click and drag.

So we are seeing a little bit of a line right here. So let's one more time, merge these layers down

into a single layer so that we can come in with the clone tool. And we can start sampling larger

areas too, by increasing the size of our brush and just coming over these lines.

And we can check our tiling one more time, coming into filter, and we can repeat this offset.

Oops, let's filter other offset, 256 by 256.

Okay, so we're seeing that we have a little bit of a problem right here

where the textures aren't lined up right. So let's Ctrl Z

to undo our offset.

And actually, let's Ctrl Z until we get our layers back, because this is a product of just

the layers not being perfectly aligned here. So let's Ctrl and hit plus to zoom in a little. So

we can see that we have a little bit of an edge right here that I missed the first time. So I'm

just going to take my transform tool, I'm going to select this image, and I'm going to nudge it

down by pressing down on the keyboard. So I can just nudge it down by a single pixel.

So now when I duplicate and move,

duplicate and move just these ones, you can see I'm having the same issue here, I have not

lined it up properly, but I could just select this one, hit the right arrow key to nudge it over by

one pixel. There we go. Okay, now let's merge these down.

And again, our image, so our image size is now 1024 by 1024. So keeping that in mind,

let's do our filter, we need to select our layer, filter, other, offset, and we need to change this

to 512 and 512, so that we get that line straight in the center. Again, it looks like I'm having

some alignment issues here, but rather than Ctrl Z to undo this, we're just going to use the

clone tool to fix these lines. Pull up the clone tool, select your layer, sample the area by holding

Alt and clicking, and then we can just drag straight over the seam to fix it. To fix it.

And you can sort of blend out any large form details that you think may be noticeable when

repeated over a large surface area. So I think this looks pretty good, but let's check it in

Blender. So let's save this out. Yes. Let's call this

tiling texture. And we can save it as any file type we like.

Blender is capable of importing whole Photoshop documents, as well as JPEGs, PNGs. I typically

use Targa. It has the lowest loss of data when you compress it down. So you see I had it over

here. Let's just save over this one. Yes. And just hit OK. So let's close out Photoshop.

And now let's look at this texture in Blender. So let's come into the shading workspace.

And we can put it on this same sphere object if we like.

So to do that, let's create a new texture here.

So I've just deleted the material slot here by pressing the delete key here. So now I have

no materials on this sphere. So I'm just going to press the new button to add a slot and a new

material. And let's call this grass tile. Oops. Tile, not Tiley. OK. So now we have this material

set up and applied to our sphere. We can look at the nodes that make it up, which currently are

just our default principled BSDF node. So to get our new tiling texture into Blender, all we have

to do is navigate to its location. All right, so here is the texture we created, and we can see a

little preview of it right here. So let's just click and drag this in. And to view it on our

sphere, we can just click on color and connect it to color. So here we have our newly created

tiling grass texture. We can test this on different objects by adding a new object and then changing

the material on that object to our grass tile material. You can see it appear here on a cube

as well as a sphere. Now, if you want to check the tiling of this, let's look at it in the image

viewer here by clicking this image dropdown and selecting our tiling texture image that we just

imported. So it looks pretty good, but we can quickly check on its tilability by opening up

the side panel by pressing N while hovering over the image viewer panel and checking this box that

says repeat image. So now if I zoom out, you can start to see where it is tiling, but overall,

it is not highly noticeable where those seams are. So if you were to put this image in

and repeat it, and you zoom out and you notice that it is very obvious where the

tiling is happening, you could then come back into Photoshop and fix it manually

and update it in Blender and check it again. So I'm happy with this result over a large area plane,

it would not be, I don't think highly noticeable, especially if you were working with a ground plane.

So like, because this is a grass texture,

if we had a ground plane, it would not be perfectly flat. Anyway, you would probably

subdivide this many times. Let's subdivide it, I don't know, 30 times. It would probably be even

denser than that, depending on the size of it. We can randomize some of this to give this

some surface variation on our ground by coming into the smooth tool and edit mode, holding it

and changing this tool to randomize. Now if we pull this manipulator, it's going to be way too

intense, but we can just come into the randomize menu down here and put in a much subtler value,

put in an amount of 0.02. So if this was our ground plane,

if we added our grass tile material to it, it is not highly noticeable where it is tiling.

Okay, so that is how we would create a tiling texture using Photoshop or another image editing

software, and how we can bring that texture into Blender and apply it to our objects.

In the next video, we're going to be covering how to change the scale of this texture and

taking a closer look at what drives how these textures are being projected

onto our objects. I will see you in the next video.


