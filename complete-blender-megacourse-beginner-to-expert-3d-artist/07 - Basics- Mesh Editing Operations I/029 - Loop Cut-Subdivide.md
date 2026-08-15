# 029 — Loop Cut/Subdivide

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Loop Cut/Subdivide |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 10:54 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Loop Cut/Subdivide** trong pipeline của section.
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


Okay so the next topic we are going to cover is the loop cut and slide tool. Now this is one you're

going to be using a lot so make sure you're awake for this video. So we already talked about what an

edge loop is and we can use edge loops to cut across our mesh in order to add more vertices.

So if we wanted to divide this cube horizontally we can do that by adding a loop cut using the

loop cut tool. So with the cube selected let's tab into edit mode and we're going to add a loop

across here by pressing ctrl and R. Now you'll get this yellow preview cut and when you hover

over different edges on your mesh it will show you the way in which the cut is going to be made.

So if we want to divide it horizontally we can hover over this edge click to cut. Now you'll

see that when I move my cursor the new edge loop is now moving along with it. This is the loop

slide tool. It is automatically activated when you place a loop cut so you can drag to slide

this edge where you want it and click to confirm its placement. So naturally if you press ctrl R

to pull up a loop cut and double click it will just drop that loop cut right where the preview

was. Now the preview is always going to be at the halfway point of whatever edge you're hovering. So

I'm hovering this edge here and it's cutting this edge exactly in half. So we can use loop cuts to

quickly divide our geometry in half by either double clicking to place or if you let's say you

click to confirm and maybe you accidentally move your cursor a bit and you want to make sure that

this is exactly at 50% at the halfway point. Instead of left clicking to confirm we can right

click to drop it which will drop it exactly at its default halfway location between these two points.

But the seat but you'll see that the cut is still made right clicking did not cancel the operation

just as it didn't extrude it did not cancel the operation itself only the movement portion of the

operation. We can control how many cuts are made into our mesh by when we press ctrl R and we get

our preview instead of clicking if we scroll the mouse wheel up we can increase the number of loops

if we scroll it down we can decrease the preview will still show up with the correct number and of

course you can just click to place it you'll get the edge slide tool confirm the placement and now

you'll see we have three cuts just by scrolling our mouse wheel. We can also affect the number

of cuts we make by coming into the loop cut and slide panel and changing this value number of

cuts. Moving the factor slider will move it up and down and moving the smoothness will create some

bulges and indents depending on the value. Now loop cut can also be accessed here in the toolbar.

However when you use loop cut from the toolbar you'll see that you get the same preview cut but

the scroll wheel will no longer increase the number of cuts and when you click to place you

will no longer automatically have the edge slide mode activated. To use edge slide with the loop

cut from the tool panel you will have to click and hold and drag where you want it and release

to confirm before you placing a new cut and of course the only way to increase the number of

cuts using this menu icon is to do it manually through this loop cut and slide menu at the

bottom. So another reason I prefer the hotkeys is that it automatically places you into slide

mode and you can use the scroll wheel to affect the number of cuts. So if we add a loop cut to

each face of this cube we end up with 24 equal faces instead of 6. We can remove loop cuts by

holding alt clicking on the loop which will again select the entire loop pressing X to delete and

in the delete menu coming down here to where it says edge loops this will delete the loop while

preserving these faces. Now we've divided this geometry up equally and if we wanted to continue

to divide it we could continue to add loop cuts until we had our geometry subdivided to a

resolution that we want. However there is a much faster way to quickly divide your geometry and

that is with the subdivide tool. I'm just ctrl Z'ing to undo all these until I'm left with the

default cube. To subdivide this mesh more quickly all we have to do is make a selection of the faces

or edges we wish to divide. In this case if I wish to divide this mesh evenly I would just hit A to

press all. Now to subdivide it all we have to do is in edit mode right click and come up to this

menu option that says subdivide. Compress it here and you'll see now that we have the exact same

result as we did after we added all those loop cuts but with just a much faster process. Now

right clicking in edit mode brings up the contextual menu which we talked a little bit about in a

previous video. It is dependent on what selection mode you currently have active but all of the

contextual menus can be accessed in any selection mode by coming up here and either going to the

vertex menu the edge menu or the face menu. Now you'll notice when I change my selection modes

and right-click that subdivide is present in all of them and you may be thinking like why is

subdivide in the vertex mode because when you select a single vertex you cannot actually divide

it. You cannot divide a single point in space. The operation will run but nothing will happen

because there is nothing to divide. Now this is just because if you are in vertex mode and you

select multiple vertices you can subdivide those edges. So it will create a point between those

and do its best to connect them. So just bear in mind that you can subdivide although the

right-click menu is contextual to what selection mode you have active, you can always subdivide

in any of them. So we notice that when we subdivide our mesh the little menu in the bottom

pops up like it does for our other operations. Keep in mind as a review this menu is contextual

to the last operation you performed so performing any other operation or making a new selection

will get rid of that menu and the only way you can get it back is to undo your subdivision.

I'm just going to delete these edges with by holding alt clicking pressing X and hitting edge loops.

So the only way to get that menu back is by is to perform the operation again. So let's do that

really quick and take a look at some of these settings. Now the settings I want to show you

for the subdivide operation are here where it says number of cuts and smoothness. Now by increasing

the number of cuts we are essentially telling Blender how many times to perform the subdivide

operation. So you'll see that when I increase it a few steps the mesh is being continually

subdividing being continually subdivided giving us more vertices on this cube. Now smoothness will

be defaulted to zero which means that none of these vertices we've created will be transformed

in any way during the operation. But if we increase this slider you'll see that Blender

is smoothing out these vertices as best it can to give this object a more rounded shape. Until

we max this value at one and we're left with a sphere. So that is all I want to discuss for the

loop cut and slide tool. Again this is probably gonna be one of your most used tools in Blender

so we will of course show you how to use it on a practical demo. And in the next video we're

going to cover the bevel operation.


Okay so the next topic we are going to cover is the loop cut and slide tool. Now this is one you're

going to be using a lot so make sure you're awake for this video. So we already talked about what an

edge loop is and we can use edge loops to cut across our mesh in order to add more vertices.

So if we wanted to divide this cube horizontally we can do that by adding a loop cut using the

loop cut tool. So with the cube selected let's tab into edit mode and we're going to add a loop

across here by pressing ctrl and R. Now you'll get this yellow preview cut and when you hover

over different edges on your mesh it will show you the way in which the cut is going to be made.

So if we want to divide it horizontally we can hover over this edge click to cut. Now you'll

see that when I move my cursor the new edge loop is now moving along with it. This is the loop

slide tool. It is automatically activated when you place a loop cut so you can drag to slide

this edge where you want it and click to confirm its placement. So naturally if you press ctrl R

to pull up a loop cut and double click it will just drop that loop cut right where the preview

was. Now the preview is always going to be at the halfway point of whatever edge you're hovering. So

I'm hovering this edge here and it's cutting this edge exactly in half. So we can use loop cuts to

quickly divide our geometry in half by either double clicking to place or if you let's say you

click to confirm and maybe you accidentally move your cursor a bit and you want to make sure that

this is exactly at 50% at the halfway point. Instead of left clicking to confirm we can right

click to drop it which will drop it exactly at its default halfway location between these two points.

But the seat but you'll see that the cut is still made right clicking did not cancel the operation

just as it didn't extrude it did not cancel the operation itself only the movement portion of the

operation. We can control how many cuts are made into our mesh by when we press ctrl R and we get

our preview instead of clicking if we scroll the mouse wheel up we can increase the number of loops

if we scroll it down we can decrease the preview will still show up with the correct number and of

course you can just click to place it you'll get the edge slide tool confirm the placement and now

you'll see we have three cuts just by scrolling our mouse wheel. We can also affect the number

of cuts we make by coming into the loop cut and slide panel and changing this value number of

cuts. Moving the factor slider will move it up and down and moving the smoothness will create some

bulges and indents depending on the value. Now loop cut can also be accessed here in the toolbar.

However when you use loop cut from the toolbar you'll see that you get the same preview cut but

the scroll wheel will no longer increase the number of cuts and when you click to place you

will no longer automatically have the edge slide mode activated. To use edge slide with the loop

cut from the tool panel you will have to click and hold and drag where you want it and release

to confirm before you placing a new cut and of course the only way to increase the number of

cuts using this menu icon is to do it manually through this loop cut and slide menu at the

bottom. So another reason I prefer the hotkeys is that it automatically places you into slide

mode and you can use the scroll wheel to affect the number of cuts. So if we add a loop cut to

each face of this cube we end up with 24 equal faces instead of 6. We can remove loop cuts by

holding alt clicking on the loop which will again select the entire loop pressing X to delete and

in the delete menu coming down here to where it says edge loops this will delete the loop while

preserving these faces. Now we've divided this geometry up equally and if we wanted to continue

to divide it we could continue to add loop cuts until we had our geometry subdivided to a

resolution that we want. However there is a much faster way to quickly divide your geometry and

that is with the subdivide tool. I'm just ctrl Z'ing to undo all these until I'm left with the

default cube. To subdivide this mesh more quickly all we have to do is make a selection of the faces

or edges we wish to divide. In this case if I wish to divide this mesh evenly I would just hit A to

press all. Now to subdivide it all we have to do is in edit mode right click and come up to this

menu option that says subdivide. Compress it here and you'll see now that we have the exact same

result as we did after we added all those loop cuts but with just a much faster process. Now

right clicking in edit mode brings up the contextual menu which we talked a little bit about in a

previous video. It is dependent on what selection mode you currently have active but all of the

contextual menus can be accessed in any selection mode by coming up here and either going to the

vertex menu the edge menu or the face menu. Now you'll notice when I change my selection modes

and right-click that subdivide is present in all of them and you may be thinking like why is

subdivide in the vertex mode because when you select a single vertex you cannot actually divide

it. You cannot divide a single point in space. The operation will run but nothing will happen

because there is nothing to divide. Now this is just because if you are in vertex mode and you

select multiple vertices you can subdivide those edges. So it will create a point between those

and do its best to connect them. So just bear in mind that you can subdivide although the

right-click menu is contextual to what selection mode you have active, you can always subdivide

in any of them. So we notice that when we subdivide our mesh the little menu in the bottom

pops up like it does for our other operations. Keep in mind as a review this menu is contextual

to the last operation you performed so performing any other operation or making a new selection

will get rid of that menu and the only way you can get it back is to undo your subdivision.

I'm just going to delete these edges with by holding alt clicking pressing X and hitting edge loops.

So the only way to get that menu back is by is to perform the operation again. So let's do that

really quick and take a look at some of these settings. Now the settings I want to show you

for the subdivide operation are here where it says number of cuts and smoothness. Now by increasing

the number of cuts we are essentially telling Blender how many times to perform the subdivide

operation. So you'll see that when I increase it a few steps the mesh is being continually

subdividing being continually subdivided giving us more vertices on this cube. Now smoothness will

be defaulted to zero which means that none of these vertices we've created will be transformed

in any way during the operation. But if we increase this slider you'll see that Blender

is smoothing out these vertices as best it can to give this object a more rounded shape. Until

we max this value at one and we're left with a sphere. So that is all I want to discuss for the

loop cut and slide tool. Again this is probably gonna be one of your most used tools in Blender

so we will of course show you how to use it on a practical demo. And in the next video we're

going to cover the bevel operation.


