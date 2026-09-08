# 084 — Camera

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 20 — Basics: Rendering |
| **Bài học** | Camera |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 8:02 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Camera** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
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


All right let's talk a little bit about cameras now. Now again every default

blender scene has a camera in it but up to this point we have often been

deleting the light in the camera to get them out of our way while we are

modeling. So to add a new camera into your scene all you have to do is press

shift and A and add a camera. This will add a camera at the world origin so just

use the transform tools to pull it out. Now you can move your camera around

using the 3d viewport to try to position it but you can also just much more

easily move your your viewport to the sort of the angle that you would like to

capture with your camera and all we have to do is press ctrl alt and then 0 on

the numpad and that will snap your camera to your current view. You can also

do this by selecting the camera pressing N to bring up the sidebar coming into

view and you can enable camera to view.

So when we enable camera to view at first nothing happens. We need to first

press 0 on our numpad to enter camera view and now when we move around our

viewport our camera will be locked to wherever we move our view. Whereas if

camera to view is disabled I can be in camera view and when I navigate around

it will break that. So let's press 0 on the numpad to pop back into camera view.

So this box around our object here represents the camera's viewport so this

is what is actually going to be captured in any renders we make.

Now let's look at a couple of options for these cameras. We have again we have

our object data properties down here for the camera type objects. It will be a

little camera icon. So we have type settings here perspective would just be

like a normal camera but we can also render things in a different way. So let's

camera icon. So we have type settings here perspective would just be like a

normal camera but we can also render things in orthographic view or panoramic.

Panoramic won't be apparent at objects as close but if you're familiar at all

with panoramic you know landscape shots you know what that does. We have a

setting for focal length here it defaults to 50 millimeters. Now if you're not

super into photography or filmmaking this might all look kind of intimidating

and I am not a photography person myself but I have gleaned a couple things

namely that lower values here will give you a wider angle higher values here

will give you a tighter more zoomed in angle. And if you are ever unsure what

focal length to use I recommend just googling common focal lengths for

photography. So here I just have searched in Google common photography focal

lengths and right here first result we get a very nice range as well as a type

of lens and what is it used for which is probably the most key. So depending on

what your subject is you can find the appropriate focal length for rendering

it just by doing a simple Google search. Now standard focal lengths are different

for video than for photography so make sure you are looking up lengths that are

appropriate for what you are trying to accomplish. So these let's look at these

shift sliders here they just will shift your camera view up and down so that you

can capture what you need to capture in frame. Clip settings I would leave these

at default unless you are trying to get something very very small or very very

close like a surface texture you can adjust the clip start to be lower and

unless you're trying to get a truly massive landscape I would leave this but

if you are you can adjust this to be higher. So what this clip is doing is that

if any area of the mesh objects in your scene are closer to the camera than this

value which I believe is 0.01 by default or farther from the camera than this

value Blender will just not render them into your viewport or your scene and that

is for performance reasons. We have additional camera settings here such as

depth of field which can allow you to focus on an object in your scene.

Adjusting the depth of field as well as things like the f-stop will allow you to

like selectively blur the background and foreground which I need a couple more

objects in here to really be able to demonstrate that. So like let's say I

have this scene and I want to set up the camera for it I'm going to shift my X

and Y values right here until I have these things in frame and then I can

either set a focal distance here again in meters from the camera or I can click

this eyedropper and choose an object from my scene to automatically focus the

camera onto and by pairing this with things like the f-stop we can selectively

blur our backgrounds and foregrounds.

So all of these camera settings I've gone over are based on real world cameras

so looking up any of these terms should give you a good idea of what the setting

does. Again camera setup and lighting setup can be sort of a discipline in and

of itself so we're not going to go very much in depth with these settings but

just trying to give you the very basics of how to add and manipulate things like

cameras and lights in your scene to get a basic lighting and render setup ready.

The last thing for cameras that I want to touch on is just this safe areas

toggle. All this will do is render these sort of dotted lines around the interior

of your shot and what this is doing is basically saying that as long as your

objects in your shot are within these bounds then viewing this this image on

different devices on different screens with different resolutions like nothing

should be cut off or or distorted in any way so if you want to make sure that you

can view the image that will result of this on a variety of different like screen

types and resolutions just be sure that your objects are within these safe areas

and you can manually adjust them here in the drop down.

So now we have our light in our scene and our camera set up and our shot ready

So now we have our light in our scene and our camera set up and our shot framed.

So in the next video we're going to talk about how to actually render out still images using Blender.

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
