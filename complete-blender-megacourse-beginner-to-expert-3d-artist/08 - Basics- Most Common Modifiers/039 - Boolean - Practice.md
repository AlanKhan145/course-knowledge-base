# 039 — Boolean

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 08 — Basics: Most Common Modifiers |
| **Bài học** | Boolean |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 10:18 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Boolean** trong pipeline của section.
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


Okay, so the next modifier we're going to cover is the Boolean modifier. And the Boolean modifier

essentially is a way that we can programmatically combine the data of two objects that would

otherwise be too complicated to do manually. So let me show you what this means. So see,

I was testing it before. So I just have a default cube here. So to use a Boolean modifier,

we need at least two objects. So let's add another object. Mesh, let's add a cone. And

I'm just going to move it sort of right here. So you can see what, what this does. So we're

going to add our Boolean modifier to the cube object. So under the Modifier Properties panel,

we're just going to click Add Modifier. And under Generate, we're going to hit Boolean.

Okay, so right now, this isn't actually doing anything. And that's because we haven't told

this Boolean modifier, what is the second object we're going to use to combine this data. So all

we have to do is fill out this object tab here, we can click on it and select from the drop down,

every other object in your scene will appear here. I only have one other object in my scene. So it's,

it just says cone. So you can either do it by dropping down or by clicking this eyedropper

icon and selecting the second object. So now this Boolean modifier is working and we can kind of

see it because we see that the outline around our cube has changed. So let's hide this cone object

by pressing H. And now we can see that the Boolean modifier has used the information of the section

of the cone that was overlapping into this cube mesh, and it has cut in. Now this is because by

default, Boolean is set to difference. And there's a couple different options here for how we want

to combine this data. So difference just means that it will look at this Boolean mesh, look at

the object you're using as the object in your Boolean modifier, and it is going to look at all

the places where they overlap and it is going to cut into your original object, your cube object,

the one that has the modifier on it is going to use this object and cut into it wherever it is

overlapping. So this will not remove the second object, you will have to hide it. And if you were

to move this object around, the Boolean would change. So now if I hide this cone, you'll see

the cut has been made there where it was overlapping. There are a couple of different Boolean

types. Difference is the default, it's the most commonly used one, at least in my case, this is

the one I use the most. We can also join these two objects together by using union. So now we see our

cone again, but this actually is not the original cone piece, our cone piece is still hidden, but

it has taken all of the parts of the cone and joined them to this cube. So now this is one

object. And if we were to apply this, the geometry would be cut as such. Let's just Ctrl Z to undo

that till we get our modifier back. So that way we know our cube underneath it, underneath these

modifiers is still the default cube. Again, if we take the cone and move it around, it will change

the Boolean and we're getting the Z fighting only because we have a cone object. But because this is

set to union, it is creating that exact geometry right underneath it, which will go away if you

just hide the cone, the separate cone object. Now there's also intersect, which let's change this

over to intersect. So now all this is done, and let's hide our cone. So this is now our cube

object. What intersect does is it looks at all the parts that were overlapping between your two

objects. And instead of cutting those away, it keeps only those parts. So can sort of think of

it as the inverse of the difference if that helps. So let's move this down so we can see it.

So when this is set to difference, if we hide this cone, it cuts away everything that is

overlapping and leaves the rest. But if we set it to intersect, it cuts away all the rest and

just leaves the part that was overlapping. Now you can, there's a couple of solver options and

algorithms that Blender uses to calculate how these cuts and joins and things are going to be

made. There's fast and there is exact. It depends sort of on your object, which one of these is

going to be more accurate. So I think it defaults to exact, but if you are trying to run a Boolean

operation and it's not cutting the way you want it, you can always try fast and sometimes that

will help it. So I use Booleans primarily for, again, I use primarily the difference operation

and I use it a lot for cutting in like doorways and windows into wall pieces, which we've shown

in demonstrations. There's a couple of ways to do it, but the way that I would actually do it,

if I were working on something is with a Boolean. So let's say that this is our wall piece. We would

just need to come into orthographic view here in object mode. Let's add a new cube and let's say

this is going to be our door. So this is obviously not to scale, but let's say that this is your wall

and this is the door you want cut through it. So we're just going to, the Y scale in this case does

not matter as much. I just need to make sure that it is protruding all the way through if I want to

make that cut all the way through the mesh. So on the wall piece, we are going to add a Boolean

operator. It's defaulted at different, so we don't need to change any of these settings. And I'm just

going to grab the eyedropper and select our door. So now when I hide this door cutter object, we now

have a doorway cut really neatly into this mesh. Now you can also use the Boolean operator to cut

indents, not just holes. All you would have to do was take your cutting object and make sure that

it is not protruding all the way through the mesh. So now I still have my Boolean operator active. So

when I hide this object, you'll see that it's cutting an indent, but not a hole. Now the Boolean

modifier isn't perfect. If you have a lot of subdivisions or kind of crazy geometry, it may not

be able to calculate the Boolean quite so cleanly. And that is when you might need to change your

solver method. But that being said, if you have really wacky edges going on here, it still might

not be able to calculate it. So the best way to avoid that, in my experience, is to just not have

any of these edges of your cutting object fall along any actual cut edges into your mesh. And

what I mean by that, now this is pretty simplistic, so it probably won't cause too many issues. But

if this was, you know, a more complicated piece, having an edge cut in your main object that kind

of falls right on one of these edges can just cause some issues with calculating the Boolean.

Again, you're not seeing it here. These pieces are too simple. But if you're modeling your own

piece, and you notice that, you know, things just aren't cutting properly, it might be worth it to

go into your main object that you want to cut into and clean up the geometry a little bit. So just

know that it's not a totally perfect system, as with most things in Blender and other 3D modeling

programs. It kind of requires a knowledge of how to make things cleanly, as well as, as well as

using the modifiers and the tools. So that is it for the Boolean operator, the Boolean modifier, I

should say. In the next video, we're going to go over one more in this sort of beginning section.

Obviously, there's a lot more modifiers, you can go over them, you can play with them on your own

time, we're going to be going over one more as sort of just these are the most important modifiers.

And in a later section of the course, we'll cover some of the more advanced ones. So that is it for

Boolean. We're going to cover array in the next video.

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
