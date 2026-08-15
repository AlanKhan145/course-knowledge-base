# 027 — Extrude DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Extrude DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 7:32 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Extrude DEMO** trong pipeline của section.
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

Okay so before we move on I just want to do a really quick demonstration of sort

of a practical use case for the extrude tool. We looked at the column in the

lecture portion but let's do something a little bit more advanced using the

extrude tool. So for this we're going to make a simple staircase. So this is just

a empty blender scene. We're going to add a cube. You can use a default cube if

you're starting from a new scene. We're going to press 3 to come into right

orthographic mode. And now remembering everything that we discussed

about moving pivot points, I want to tab into edit mode before I move this

object so that the pivot is at the bottom of the staircase. But before I do

that one more thing that's going to make this a lot easier is by enabling grid

snapping. So let's tab into edit mode and grid snapping all it does is that when

you move, rotate, or scale either the entire mesh or a portion of the mesh

it's going to snap to these grid lines so it gets really exact and this is

great for modeling like architectural type details. So to enable this all you

have to do is come up here next to our transformation orientation and our

transform pivot point. The next option over is the enable grid snap toggle. We

can also toggle this on and off by pressing shift and tab together on our

keyboard and again just to turn it off.

There's some options that come with grid snapping. We're not going to really mess

with too many of these. You can have it not affect a certain transform. By

default it only affects move so rotate and scale will still be free. We're going

to leave it at increment which basically means it's using these grid lines in the

background to snap. We're going to leave absolute grid snap off for a moment. So

we're just going to make sure that we're in edit mode we have everything selected

snapping is on and we're going to press G and Z and you can see this snaps up.

Now a quick note about this snapping is that when you are in perspective mode

you'll see that your grid lines it only has the major grid lines it does not

have the minor grid lines that divide these. So when you're in perspective mode

and you press G to grab it will only snap two major grid lines. However if you

are an orthographic view and it doesn't matter if you're in front and you're in

top you're inside as long as these minor grid lines are appearing if you're

zoomed in enough to see these grid lines snapping will work on these increments.

So you can have something at a 0.5 position between major grid lines but

you have to be an orthographic view to do it. Okay so we're in edit mode we

moved our cube up so our pivots at the bottom. So now let's start actually

forming the staircase. So I'm going to press 3 on the numpad to come into right

orthographic. I'm going to in wireframe view which again can be accessed up here

I'm just going to box select to select this top face. I'm going to press G and Z

just to bring this face down. Let's say about there. Same thing I'm going to box

select G and then Y to bring it there. So let's make each step roughly the size. So

we have our first step here the ground plane being drawn right here by the y

axis. So this step is 10 units long this way and about 3 units tall. So we're

going to use the extrude tool to create the next step. In order to do this we're

going to stay in right orthographic and if this is the front of our stairs where

it meets the ground the next step will be up here. So we're just going to do

that by selecting this face and with snapping on hitting E for extrude and

you'll see that the extrude tool works with snapping. So we're just going to

drag it out the same amount that this is. We're going to grab the top of this

face remembering that extrude has now created two faces on this side so we can

select just this half. We're going to hit E again and we're going to move it up

three because this one is three. So now we have our first two steps so we just

want to continue this for as long as we need to make our staircase. Tapping into

edit mode and now I'm going to so for the next level I'm going to grab both of

these faces and press extrude. Drag it out to the grid line, click to drop it,

grab just this top one, E to extrude, oops that was R, I meant E to extrude, click to

place, grab all three of these, E to extrude, click to place and you just have

to continue this process for as many times as you need stairs.

You'll see that I accidentally had this whole thing selected and when I hit E I

immediately knew that I had made a mistake because when I drop this you'll

see these little dots have appeared and those dots are the indicators of the

faces that are running down this side. So once I saw those dots I said oh no good

undo, re-select, extrude. So this is just going to conclude this quick little demo.

In the next video we're going to go over how to delete faces and refill them and

join together unconnected vertices.