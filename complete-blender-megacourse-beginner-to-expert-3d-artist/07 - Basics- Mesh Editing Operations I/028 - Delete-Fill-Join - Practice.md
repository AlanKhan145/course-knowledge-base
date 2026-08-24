# 028 — Delete/Fill/Join

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Delete/Fill/Join |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 10:20 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Delete/Fill/Join** trong pipeline của section.
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

Okay so now let's talk a little bit about deleting, filling, and joining at the edit level. So let's

add a mesh here to demonstrate on. We're just going to do a cylinder. Now we talked about how

to delete whole objects. Very simple, just select the object and press delete or press X and confirm

the delete. But we can delete things on a per face level by coming into edit mode, making a

selection, and pressing X to pull up the delete menu. This also works by hitting the delete key,

but it will still pull up a menu and you need to select what you want deleted. Now the delete

menu works regardless of what selection mode you are in. So if you wanted to delete a face but you

were in vertex mode, you do not need to come into face mode first to delete a face. All you have to

do is select all the vertices that make up that face, press X, and delete from the menu. So

obviously deleting vertices will delete all of these vertices, which will delete any faces and

edges that were dependent on those vertices. Deleting the selection by the edges will delete

only the edges and any faces that were dependent on those edges. And deleting the faces will just

delete the face. So again, I could be in face select mode, make a selection and still delete

the vertices. When you pull up, you make a selection and you press X or delete to pull up

the delete menu, you'll notice that there's some more options here. You can play with some of these

to see what they do. But I want to talk about what a dissolve is. What dissolve does is it

deletes your selection without destroying your geometry as best as it can. So if I have this

edge selected, and I delete this edge, it has destroyed the edge, but it has also destroyed

the faces that were dependent on it. However, with the same edge selected, if I press X and

say dissolve those edges, Blender will delete the edge as well as the vertices that made it up. But

instead of obliterating these faces, it has just merged them into a single face. Now dissolve does

have some limitations, it cannot read your mind, unfortunately. So for example, let's say you

selected two faces on a cube. Now we could essentially make this one non planar face by

heading x and pressing dissolve faces. And all it's done here is deleted this edge between them.

But the faces, the face remains there. However, Ctrl Z to undo, that same selection,

if we press X and try to dissolve the edges, you'll see that Blender doesn't really know how

to parse that. And indeed, if you were trying to visualize what that would look like, it's kind of

hard to even picture it. So if Blender cannot dissolve your selection, it will just default to

deleting it, you'll see that you get roughly the same result when you delete the edges as when you

dissolve them. So that's just something to bear in mind. Dissolve does have some limitations,

and it is not perfect. And just know that if it cannot dissolve your selection, it will default

to deleting it. Okay, so let's say we have made our selection and we have deleted this face. Now,

we can tell Blender to draw an edge or a face between any two or more points on a single object

with the Fill tool. So if we wanted to draw this face back in, let's say we couldn't just Ctrl Z to

undo it because we had done some other things to this mesh first. We can patch this hole by

selecting the edges around it, and just pressing F for Fill on the keyboard. Now, the Fill tool

can also connect two unconnected vertices as long as they are in the same object. So if I had two

separated pieces like this, I could connect them by making a selection, Shift clicking to make the

other selection and pressing F. And now you'll see when I have only vertices selected, it just draws

an edge. But when I have four vertices selected, I now have three of these edges selected. So now

when I press F, it will fill it with the face. The Fill tool in Blender is fairly intuitive.

We talked a little bit about edge loops in a previous video. And edge loops are pretty powerful

in Blender. So the way that we could quickly fill the cylinder so it had these faces again,

is because these vertices are aligned and they form lines of loops. And Blender is able to

recognize that even without the faces there. So what we can do is make a selection of a single

quad. So two edges, four vertices, press F to fill, and we have our single face. But the cool

thing about Fill is that if now I come in and select just one of these edges, because it has

one of these quads to establish kind of what you want from it, you can select a single edge on here

and just press F repeatedly or hold it and it will fill all the way around that circle. Now this is

dependent on this circle and this circle having the same number of vertices and them being roughly

aligned. They don't have to be exactly on top of each other. You can see that if I come in here

and undo this, even if this is twisted a little bit, it should still fill properly because they

have the same number of vertices. Now with Fill, you can also select a single vertex along the

edges of a hole in your mesh. And if you press F, it will fill it with a triangle. And if you

press F again, this triangle will be closed. Just trying to undo some of these changes just so

things don't end up extremely messy. All right. Now the last thing I want to discuss before we

move on is the Join operation. And this is a bit similar to Fill in that it will draw an edge

between two unconnected vertices, but Join will do so respecting the faces that are under it. So

what I mean by that is that if I select this vertex and I come over to an unconnected vertex,

this one. Now if I pressed Fill on this, it would draw an edge. However, this face,

I still have snapping on. I'm just going to turn that off by clicking the icon here. However,

this face is not connected or divided by this edge. When I select it, it still selects this

as one face instead of one face here and one face here. Now if we wanted to split this face,

we can do so by making our selection. And instead of using Fill, we're going to hit J to join them.

And All Joined has done is connected these vertices, but it has divided this face. So

you can see how this is really powerful for dividing up your mesh exactly the way you want

it. And of course, using some of our other tools, you can get complex shapes. Okay,

so that is going to wrap it up for the Delete, Fill, and Join operations. In the next video,

we're going to start talking a little bit more about loops and how to add edge loops

to existing geometry.

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
