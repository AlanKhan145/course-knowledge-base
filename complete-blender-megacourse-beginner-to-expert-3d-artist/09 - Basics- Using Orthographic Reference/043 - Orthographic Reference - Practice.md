# 043 — Orthographic Reference

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 09 — Basics: Using Orthographic Reference |
| **Bài học** | Orthographic Reference |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 20:03 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Orthographic Reference** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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

So at this point we have started to get a good grasp on the basics of modeling. So now I want

to talk about how we can set up reference images in Blender to further aid us. Now we've already

covered how to snap between orthographic views in the 3D viewport by pressing 1, 3, and 7 on

our numpad. Now we're going to use reference images that are drawn from these orthographic

perspectives to aid in our modeling, and we're going to line them up in our viewport such that

they match these orthographic views. Now in order to use reference images, we need to know what type

of image we are looking for. In the case for translating an object from 2D to 3D, we are

looking for what is called a model sheet. This is sometimes also referred to as a turnaround. So if

you go to Google Images and just search model sheet, the image results will show you something

like this. A model sheet is a 2D drawing of an object or character that you want to model in

3D, and it is shown from the orthographic front and side views. Some model sheets will contain

additional views such as the top view or a 3 quarters perspective, but we need at least the

front and side view in order to use it as an orthographic reference. Now model sheets are not

the same as concept art. So this image here contains both a concept and a model sheet. The

concept is here on the left side, and is drawn in perspective at a three quarters angle. It is

fully colored and will often show the character in a pose that gives the viewer a sense of their

personality. Whereas the model sheet on the right side here is drawn in clean lines from orthographic

viewpoints and is designed to give the 3D artist as much information as possible so they can make

an accurate translation from drawing to 3D model. Now for this next section I will provide a model

sheet for you to follow along with, or you are welcome to use one of your own. This is the model

sheet that I will provide for the section of the course. I drew this model sheet several years ago

for a character modeling course I did, so please forgive me I am NOT a 2D artist by any means,

but this will work for our purposes. So in the bottom left here I have the original concept

sketch. Now this character doesn't have a name or anything like that, but he's supposed to be

like a janitor. The concept is a little cut off here, but he's got you know a moth and a bucket.

So we're going to be starting from this single image file. So the first thing we need to do to

get this set up correctly in Blender is to cut this image up into separate views. Now to do this

I'm going to open Photoshop. You do not need Photoshop specifically to do this. You can do

it in a free alternative such as --, and you could probably even do it in Microsoft Paint,

because all we're going to be doing with this is cutting this up into separate views. So with

Photoshop or your image editing software of choice, we're going to open the file and you can see I

have it right here in my recents. Oh, but I moved it, of course. So let's open the file. So to start

this I'm going to use the lasso select tool, and all I'm going to do is draw around this front

image with my lasso select. Doesn't have to be super exact, it just has to get all of the front

here into this. And now I'm going to copy this selection by pressing ctrl and C. I'm going to

open a new Photoshop file by going File, New. The default Photoshop size is fine. And now I'm going

to paste my selection into this new file by pressing ctrl and V. Now you can crop it in if

you need to. Okay, about there. That looks pretty good. Enter the crop tool in Photoshop if that's

what you're using, it's right here, and you can pull it in. Now we're going to save this as a new

image file. So we're going to click File, Save As. We're going to choose a location for it,

in this case, just know where it is. And we're going to name it, let's call this Front Ortho.

And we're going to save it as a PNG. Now it doesn't have to be a PNG, Blender can import most

common image file formats, such as JPEG, Targa, but PNG is pretty universal. So save that out.

And now all we have to do is repeat that process for these other views. So back in the original

model sheet, let's lasso select around the side view. Let's ctrl C to copy. Let's make a new

Photoshop document. Default is fine. Ctrl V to paste it. Crop it in if you like. File,

Save As. Choose your save location. Name it, let's call this Side Ortho. And change the file

type to PNG. You can see I've already done this here, but walking through how to do it again.

So last is this arm piece. Now I drew this arm floating away from the body, because this front

view is drawn in what is called T pose with the arm straight out, making a T of the body. So this

arm is actually being viewed from the top. So let's just do the same exact process but save

this as the top image. So just lasso select around it. Ctrl C. File, New. Default is fine. Ctrl V.

Crop it in as needed. File, Save As. Let's call it Top Ortho. And change the file type to PNG.

Okay, so once we have all of these views separated out into into different images,

we can close Photoshop. We don't need the program open anymore. If it asks you to save changes to

the Photoshop document, you can hit no. We do not need to save these original Photoshop documents.

All we need is the PNG files that we created. So now let's jump back into Blender, create a new

scene, and we're gonna press A to select everything, X, and then just confirm that delete. So now we

need to add in our images. So in the 3D viewport, press Shift and A to bring up the Add menu, but

we're not gonna add a mesh. We're gonna come down here and click Image. Now you'll see that

there are two types of images that you can add. There is reference and there is background. They

are both pretty similar, but we can quickly go over the differences. So let's add a reference

image. It will bring up your file browser in Blender. You just need to navigate to where

you saved your PNG images. Let's pull up the front. Yes. Now you'll see that when you add a

new image into Blender, it will add and it will be aligned based on your camera angle in the

viewport. So because I was in perspective mode when I added this, it's kind of come in as strange

rotation. But just to fix this, because we want this, this is an orthographic view. So to have

this in orthographic view, we can just hit Alt and R to clear the rotation. Now I'm gonna hit R,

Z, 90 to flip it that way. I'm gonna hit R, X, 90. Oops, I mean R, Y, 90 to flip it. Nope, nope,

I was right the first time. X, 90. So that when we, so R, X, and 90, so that when we hit 1 on

our numpad to go into orthographic front view, it is facing us. Okay, so let me quickly repeat

the process with a background image to show you the difference. Here, here, here, and we're gonna

pull up the same image for this. Okay, so this one on the left here is a reference image, and this

one on the right here is a background image. So the only difference between these two objects is

that a reference image will be opaque by default, and it will be visible from both sides, whereas a

background image will be transparent by default, and it is only visible from the front. And right

now it is only visible in orthographic view. If we enable perspective on this, we can see that

this reference image is visible from both sides, and the background is only visible from one.

However, we can change the properties of either of these two image types to meet our needs. So

let's get rid of one of these. Let's just stick with our reference image. Just pressing Alt and

G to clear the location back to the center. So let's look at the properties and how we can change

some of this. So to change an image's properties, all we have to do is in the properties panel

editor, come down to object data properties, which for an image will have this little image

icon. Now let's look at some of these settings. There's some settings here for the size and the

location of this, which you can also just set with your regular transform tools. So we're not

going to cover those in depth, but we are going to look at some of these. So the depth setting

is referring to how we want this rendered in relation to mesh objects in our scene. So let's

add a cube really quick to see what that does. And let's move this back so they're not intersecting

each other. So right now depth is set to default. That means that if this image plane is behind this

mesh, it will be rendered behind it. And if I press G and Y and pull it forward, and now look

at it from the front, this image is now in front of this plane, or this cube I should say. So we're

just being rendered in front. However, we can change this if we set the depth to front. Even

if our image is behind this mesh object, it will always be rendered in front of it if we have this

set to front. Likewise, if we have this set to back, it will always be rendered behind the mesh,

regardless of where it is in our viewport. So let's just set that back to default. So the next

setting I want to look at is side here. Right now it is set to both, meaning that I can view this

from the front and the back, and it will still render the image regardless of what direction I

am facing. I can set it to front to have it only be visible from the front view. I can set it to

back to have it only be visible from the back view. Let's set it back to both for right now.

Now if we change these show-in properties, we can control whether or not the image is visible in

perspective mode, orthographic mode, or both. Right now both of these bubbles next to orthographic

and perspective is checked. So that means if I am in perspective view, I can see this image in 3D

space. If I am on orthographic view, I can see it in orthographic view. So obviously turning off

perspective would make this image disappear from perspective view, but if I hit 1 on my numpad to

go into orthographic view, it is there. And obviously the same is true if we enable perspective

but disable orthographic. The image will be visible to us if we are in perspective mode,

but if I hit 1, the image is no longer visible. So let's turn this back to both. Now the last

property I want to touch on is the opacity. Now it is defaulted to 1 for a reference image because

reference images are opaque by default. So all we have to do to change that is to enable the

opacity bubble right here, which will give you access to this slider. With the opacity of 1,

something that has an opacity of 1 means it is fully opaque. And sliding this down closer to 0,

you'll see we'll give it some transparency. So you can customize your image settings in

whatever way works for you, but I'm going to set this up the way that I like to set up reference

images. So we have our first one in here already. So all we have to do is shift A, add a new image,

reference, and let's bring in our other views. So we've brought in our side view from the file

browser. We brought it in in perspective mode, so let's just hit Alt and R to clear that rotation,

and let's hit RX 90 and RZ 90. I'm going to move this back a bit. And I'm going to lower the

opacity. And last one, let's hit shift and A, image, reference. Let's bring in the top. Let's

hit Alt and R to clear that. And let's lower the opacity. And this one, we're going to have to

scale it and rotate it a little bit more just to match the relative size. So let's hide this cube

for a moment. Let's actually un-rotate this. Just so we can layer these on top of each other. So we

can try to eyeball the relative size of this arm. I'm lining it up with the front view. Sorry,

the front view arm. I'm just trying to get it approximately the same length. And we can adjust

these at any point. Okay, so let's rotate this back. Alt R. The scale is correct, so do not

clear the scale. RZ 90. And with it, we roughly lined it up with this. So all we have to do,

this one's not going to be over the center, because that is not where we're going to model

our arm. We're just going to push it. Actually, we're going to push it down to the bottom. So

some people like to have all their image planes lined up right on top of each other in the center.

Let me just show you what I mean by that. So let's duplicate these.

Okay, so some people like to line them up this way. I mean, and obviously you could,

you know, you would spend more time getting this arm aligned properly. But so that all the pieces

are right in the center, so that when you hit one and three, they're lined up. And you can kind of

almost see how the model will come together in perspective view. But I don't like to have all

my planes in the center like this. I find it very busy. And it's difficult to see the model you're

actually working on without hiding these planes. And I don't like to have to do that. So set it up

that way if it works for you. But I prefer to have my images behind where the mesh is going to be

modeled. So that is how you set up reference images in Blender. We're going to move straight

into the demonstration for this. And for this demonstration, we are going to be modeling this

character. Now, we haven't discussed sculpting or anything like that. So we won't be getting into

these finer details, like the wrinkles in the skin and the clothing. But rather, we're just

going to get the basic shape of this character. So I'm going to pause the recording here. And

when we come back, we will move forward with a demo of modeling this character.

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
