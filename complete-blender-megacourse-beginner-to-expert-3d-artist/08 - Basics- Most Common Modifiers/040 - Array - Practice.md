# 040 — Array

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 08 — Basics: Most Common Modifiers |
| **Bài học** | Array |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:00 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Array** trong pipeline của section.
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

So the last modifier we're going to cover in this section is the array

modifier and what this does is that it duplicates and moves your mesh a

designated number of times in a non-destructive fashion. So with a mesh

selected we're going to come over to the modifier properties panel we're going to

add a modifier and we're going to add an array modifier. So by default your array

will be added with these settings which are going to control the number of times

this object is duplicated as well as how those duplicates are going to be spaced

out from one another. So if we increase the count here you'll see this cube is

being extended farther out but if you select this object and tab into edit

mode you can see that our cubes original vertices have not been changed but we're

rendering duplicates of this cube exactly next to the original in such a

way that there is no space in between them which is making this appear as a

rectangle in object mode rather than as multiple cubes. Now this is driven by

this setting here where it says a relative offset which is enabled by

default and under here where it says factor X of one. A one in this field is

saying that every duplicate we make in this array is going to be offset by

exactly one of the original object in the positive X direction. We can see what

this means by clicking the increase arrow in the factor X field. Now this

will decrease will increase this value by 0.1 so we can see that these cubes

are now being separated by a little bit of space. So what Blender is doing with

this relative offset is looking at the length of this object along the x-axis

it is adding 0.1 or 10% of that length and then it is rendering the next

cube starting at 1.1 times the length of this object in the x-direction. Note

that by changing the length of this original object by tabbing into edit

mode pressing S and then X along the x-axis will change not only the scale of

these cubes but also the relative spacing in between them. This is because

a relative offset is a function of the length of this original object in the

x-direction. Now changing the X factor to 0 would snap all the duplicates back

onto the original because we're essentially telling this modifier to

make this many duplicates and move them this much which is to say not at all.

Moving these sliders up and down will move the duplicates along the axis

indicated. Positive numbers will move it in one direction and negative numbers

will move it in the other. We can move it along any of these axes simply by

changing the values in these axis inputs here. Positive and negative

following the Cartesian coordinate system. Adding values to multiple fields

will move each duplicate in the array in all these values before making the next

duplicate. Now we can also offset these objects using a constant value in world

units rather than the relative length of this object. To do this we first want to

disable the relative offset option by unclicking this bubble here and we want

to come down to where it says constant offset and enable this here. Let's click

this arrow to view the settings. Now you will be given the same offset sliders

but now they are going to be in world units. So with a default cube a constant

offset of 1 meter draws the next one right next to the first but you may be

like wait this cube is 2 meters long on the X what gives? Well remember that all

modifiers are driven from the point of origin of our mesh so this origin which

is exactly in the center of our cube is also exactly 1 meter from the edge of

this mesh in the positive X direction. So a constant offset is drawing the

start of this next cube exactly 1 meter away from this point which gives it a

spacing of 0. We can change the distance of any of these by pulling these sliders

out in exactly the same way we do for relative.

In addition to setting the number of duplicates manually by using the fixed

count and increasing the number if we set the fit type to fit length we can

tell Blender to make however many duplicates we need using our relative

spacing until it reaches a length in world units that we set and then we're

going to stop the array. So I needed to fill up a 10 meter space but I didn't

know exactly how many cubes I needed to do that I could use the fit length

option and Blender would calculate that for me. Now it is also possible to create

array around another object. To do this we need to disable both relative and

constant offsets. We'll get this warning message saying the offset is too small

that is because we just do not have an offset enabled right now. Let's change it

back to fixed count to disable that. So now we have three cubes being drawn

exactly on top of one another. Now we need to come down here and enable object

offset to see what this does. To use object offset we need another object in

the scene to work off of. Now we could do this with the mesh object but I actually

think that would be a little bit confusing and I've personally used the

object offset option plenty but I have never used a mesh object as the basis

for the array modifier. So instead we're going to be using what is called an

empty object. So let's just hide our cube right now. In Blender an empty object is

basically what it sounds like. It is a way to create an object in Blender that

has no mesh information so it won't show up in final renders. So we've hidden our

cube and now to add an empty object to our scene in the 3d viewport we're going

to bring up the add menu the same way we do for mesh. We're going to hit shift and

A but instead of adding a mesh we're instead going to come down here to where

it says empty and add a plane axes empty object. You'll get this object that is

just made of these three lines that are aligned to the axes of the world. Now

you'll notice that you cannot tab into edit mode for this object and that is

because this object is not made up of vertices edges and faces the way a mesh

is. This object is just a visual placeholder to save this location in a

way such that we can reference it again in the modifier. So let's show how that's

done. Let's unhide our cube by either clicking the icon or pressing Alt H to bring

everything back. So to see how this works we're going to move this

cube out a little bit. So let's grab it and move it forward a bit in the Y. Now

back in our modifiers panel we're going to make sure that object offset is

enabled and we'll see that we only have one setting here and that is for what

object do we want to control this array modifier. So we want to control it with

the empty. So we're going to put the empty in this input field either by

clicking the drop-down and selecting it from the list or by using the eyedropper

icon and selecting it from the 3d viewport. So now we are offsetting our

array by the distance between this empty, which is currently being obstructed by

this cube, and the original cube. And we can show you how this works if you grab

the empty. I'm selecting it here in the outliner because it's currently being

obstructed but I'm just going to press G to grab it. So now if I move this empty

around you will see how it affects the placement of our array of cubes. We can

use object offset with rotation to duplicate this cube around a circle. In

order for this to work however we need to move the pivot point of our original

cube object to the same pivot point as our empty. So our empty has been added at

the world origin. So all we have to do to change this pivot point is to apply the

location. So this is not something we've covered before but we have used the

apply menu before with scale. So to apply the location all that is going to do is

going to snap this origin to the world origin without affecting the placement

of the mesh in world space. So what this looks like I'm going to, with the cube

selected, press shift and A, oops sorry I mean ctrl and A, to bring up the apply

menu and instead of clicking scale the way we have done in previous videos

we're going to click location. This will snap the origin of the object into the

world origin without moving this mesh in world space. Now you will see our array

has disappeared but really all that has happened is that the distance between

this mesh and this empty is now zero because it is reading it from the point

of origin. So all of our duplicates are being stacked exactly on top of each

other which you can see if you grab the empty and just press G and move it

around a little bit you'll see that those arrays, those duplicates, are still

there. So just drop that empty back at the origin and now instead we're going

to select the empty we're going to hit R to rotate and we're going to hit Z for

the z-axis and now we're going to just rotate this around. Maybe this would be

a little more clear if we had a few more cubes. R and Z and rotate this around.

Here we go. Now you can see it has created an array in a perfect circle

around this empty object. The array modifier is extremely useful for working

with rows of identical objects as now I can tab into edit mode on this cube and

I can edit it in any way I see fit and you will see that it affects those

changes are affected throughout the entire array. So that is it for the array

modifier. Next up we're going to put all of these skills we've learned about the

simple modifiers we have gone over to the test. We're going to do a demo using

booleans, arrays, plus everything we have learned up until now and in the next

chapter we are going to cover how to import and use reference images to

create models from reference.

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
