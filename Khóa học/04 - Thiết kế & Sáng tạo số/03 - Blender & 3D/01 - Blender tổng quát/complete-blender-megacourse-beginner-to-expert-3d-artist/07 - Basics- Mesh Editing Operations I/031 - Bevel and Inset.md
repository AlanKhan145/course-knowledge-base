# 031 — Bevel and Inset

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Bevel and Inset |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 9:54 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Bevel and Inset** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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


So the last few things I want to cover before we wrap up this first section on

mesh editing tools is the bevel and the inset tool. So let's start with bevel.

I just have a default cube here and I'm going to tab into edit mode and I'm just

going to show you what a bevel does. So I can select an edge on this cube or any

multiple edges and hold ctrl and press B and drag out my mouse to create a bevel.

Bevel is useful for creating these interesting sort of angled cuts and you

can get some very cool you know dynamic shapes with it. You can bevel again as I

said multiple edges by just making a multi select with shift or dragging out

a box selection and ctrl B drag it out and the bevel will scale well it will

sorry it will bevel these uniformly.

So bevel is really great for rounding out corners. Like say you're working on

something that has a really cartoony style like a 3d animated film and for

this you want all the objects in your scene to be sort of soft and rounded. Now

beveling is a great way to achieve that. So if you have this something that cube

for instance you could tab into edit mode select the edges that you wish to

round out. In this case we're just going to have them all selected. Press ctrl B

and drag it out. Now it's performed this bevel operation but obviously this isn't

round like I was talking about. So just like the other operations and tools

we've been looking at bevel has this contextual bevel menu down in the bottom

left corner. Click on that and we can pull up some advanced options for bevel.

Now some of these are very advanced so we're not necessarily going to cover

every setting here. I just want to draw your attention to where it says segments

right here where it says 1. Now this is similar to the number of cuts we were

looking at with the loop cut tool. So by increasing this we are telling Blender

how many times to perform this bevel operation and you can see that

increasing it just a few steps has added a lot of detail here and rounded this

corner out. So this can give you some nice soft corners and of course we still

have flat shading enabled right here so we can in object mode right-click and

shade smooth the way we did before and that's how you get these nice rounded

soft sort of objects. Now just sort of a note about edges and corners in 3d models.

There's a little trick that you can do with beveling that will just massively

improve the look of any hard surface object that you make. So you'll notice

that when you look at just the primitive cube in Blender these corners and these

angles are very harsh and they're very exact because they're coming to like a

single point in space and it is just not very realistic. Real objects even

fresh out the factory do not have edges that are this sharp and this exact. So

it's just physically impossible and so when you look at something that does

have that it doesn't look realistic and it's just not very pleasing to the eye.

So we can aid this by using bevels. So we're going to tab into edit mode and with

everything selected just hit control B and pull this out just a little bit. Now

it's remembered from my last bevel operation that I had four segments so I

don't want four segments in this one we're just going to knock this down to

one. So when you keep a bevel small on an edge like this and no longer reads to

the eye as like a rounded surface it will appear 90 degrees from a distance.

So if we tab into object mode and we zoom out we can see that this edge is

just a lot more easy to read because there's more of an angle of a surface

for the light to bounce off of it basically. So just to compare it to a

default cube we're just looking at these edges here and you can just see

that this one is just more pleasing to the eye and it is easier for us for our

brains really to parse this information and say okay this is a cube it is just

easier with the beveled edge. So just keep in mind that's just a little trick

you can do that just is relatively small but will just massively improve

the aesthetic value of your pieces. So that is all I wanted to say for bevel.

Now the last tool we want to go over is inset and inset achieves something that

we kind of did with the extrude tool. So when we were looking at the extrude tool

and we were making that column we created an inset by pressing E and then

S scaling it in and clicking. So this is achievable with the extrude tool but

this is much quicker with the inset tool. Let's just ctrl Z to undo that and

select the space and now instead of pressing E I'm going to press I on my

keyboard and sorry my cursor was a little too close to the center so blender

just got a little bit confused. No worries if that happens just reselect

you know undo reselect it and make sure your cursor is farther out from the

selection. So now when I pull this in you'll see it creates the same kind of

inset but it just does it much quicker. So why when we can achieve this with an

extrude function why do we need the inset tool? It's a great question and the

inset tool is more valuable when you're coming in on more complex

operations than a single inset. So if I wanted to inset every face of this cube

if I were to do that with extrude I would have to select a face, extrude,

scale, click, extrude, scale, click and repeat that process all the way around

the cube. The insets as a result would probably not be very even and if I tried

to do multiple extrusions at once by selecting A everything sorry selecting

all of my faces with A pressing E and S well what's happening more clear in

wireframe is basically it's extruded every face but since all these faces are

connected practically what that means is that it's duplicated this cube and

now I'm just scaling another cube inside this cube which was not what I wanted. So

let's delete this inner cube by pressing X and deleting the vertices. So to

achieve what I wanted we're going to use the inset tool so we're going to select

all with A and press I for inset and at first you'll see that nothing happens.

Move this timeline down a little. That is because the individual faces are not

being inset because individual the individual setting on the inset tool is

currently off which you can see in the bar up here. Now to turn this on all we

have to do is press I again and now you'll notice when you inset it, it's insetting

properly on every face. Now this individual setting is also accessible

after you perform the operation in the inset faces menu that appears in the

bottom left corner of the screen. There's a couple other advanced settings here. We'll go over

boundary in a future video but you can play with these to kind of see what they do but they're more

advanced so let's just stick with individual being the only setting we're going to cover in this. So

now from here you can use things like extrude and scale to create you know different forms. So that

is all I'm going to cover for

this first mesh editing tools section of the course. We're going to be doing a larger scale demo

utilizing all these functions and layering them with the things that we have gone over in previous

videos to build out a scene. So without further ado, let's move on to the demo.


