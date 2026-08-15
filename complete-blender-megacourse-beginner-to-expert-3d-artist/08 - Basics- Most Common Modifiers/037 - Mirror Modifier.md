# 037 — Mirror Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 08 — Basics: Most Common Modifiers |
| **Bài học** | Mirror Modifier |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 12:32 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Mirror Modifier** trong pipeline của section.
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


So by this point in the course you're probably wondering a little bit about how we can make

objects symmetrical. And the way we're going to do this in Blender is by using a mirror modifier.

Now what a mirror modifier does is it looks at your entire mesh and it will duplicate and flip

the direction of all the points on your mesh across either the x, the y, or the z-axis.

So we're going to use Suzanne here again because she is a symmetrical mesh. She is

symmetrical across the x-axis. So let's come in and edit this a little bit so we can see

better what we're doing. So select Suzanne and tab into edit mode.

And now I'm just gonna make a few changes on one side of the mesh.

So let's say we want maybe the sort of area around the eyes to be more round.

And maybe make like more of an earlobe. Okay, so let's say we've made these changes

to this right side here. And we want to know how can we reflect it so that this mesh is now

symmetrical. So in order to do this, let's add a mirror modifier. Now there are,

there's sort of a older method and a newer method for using the mirror modifier. The older method

would entail a little bit of prep work up front. So what you would need to do,

because Blender is looking at every point in this mesh and is going to reflect it,

we need to delete half of it so that we don't end up with duplicate vertices. So

we could tab into edit mode, move into wireframe view, select all the vertices on

one side of the mesh, press X, and delete the vertices. We are left with this half of the mesh

that is cut perfectly in half along the line of symmetry. So now to reflect this across the X-axis

so that we have these edits made on the other side, all we need to do is come into the properties

editor panel, go down into the modifier properties tab, and click on the add modifier drop down.

Now under generate, we're going to scroll down until we see mirror, and go ahead and select that.

That will add the mirror modifier to your modifier stack, and you can see already that

this half of the mesh has been duplicated and flipped onto the other side.

Now that is the more traditional method of using a mirror modifier, but Blender has added a couple

of options in here to make it go a little bit quicker. So let's just start from a new monkey,

let's tab into edit mode, and again let's make changes to one half of the face.

It doesn't really matter what changes you make, this is just to make it different.

Just to make it different on one side so you can see what is happening.

So let's say we like these changes and we want to mirror them across the X-axis.

Now instead of coming in and manually deleting and reflecting these, Blender has added some new

features to the mirror modifier. So all you have to do is add a mirror modifier, clicking add

modifier, mirror. And now at first you will see why I deleted half of them in this, and that is

because we are getting these duplicates over on top of each other. You can see if I disable the

modifier and enable it, it's reflecting both halves on top of each other. So we're getting

this sort of strange thing happening with the mesh. So instead of deleting half first,

what we can do is use the bisect and flip options. So what bisect will do is essentially it will

perform the operation I did on this one of deleting half of it, but it will just do it

automatically based on the line of symmetry. So if I enable bisect on the X, you will see that

the sort of duplicates that were causing issues on this portion of the mesh are now gone,

and it is reflecting the side of the mesh that I had made changes on. Now I believe

by default Blender will always use the right side of the mesh as you are facing it

to reflect across to the left. However, we can flip which half of the mesh we would like to use

by coming over to the flip options and clicking X. Now this has restored our original mesh

because I did not edit this half. It is now looking at this

left half of the mesh and reflecting it onto the right side.

Now you'll notice there are axis options for each of these, and that is just a setting you can

select to tell Blender how you would like this to be reflected. So by default, we want this

reflected across the X because we added this symmetrical object and it is facing forward.

So reflecting it across the X takes this side and reflects it onto this side. Now we can reflect it

across the Y, which would reflect it this way. We can see we now have symmetry going this way.

Or we can reflect it across the Z by highlighting the Z.

You can also reflect across multiple axes at once just by enabling them here.

And delete this object. Now, one point to note about the mirror modifier is that it will always

reflect based on the location of the origin. So because our origin on this model is perfectly

aligned with this center edge that represents our line of symmetry, we can reflect it across

that center edge that represents our line of symmetry.

Our model is being mirrored properly to form one cohesive object.

What I mean by this is that if you tab into edit mode,

select this half. Now, I'm actually going to delete this half

because I personally do not tend to use this bisect feature. I prefer to have it

just based on half. Sort of an older method but that is how I learned it.

So what I mean about the origin is that if I come into edit mode and I move these faces

away from the origin, it will split the mesh because Blender is still reading this line

passing through the origin as the point to reflect from. So it is reflecting this empty space

as well as the mesh. Now, if you wanted to lock the vertices that are along the center line

together, you could do so by coming into the mirror modifier window and enabling clipping.

And you'll see that the tooltip, when you hover over it, it just says prevents vertices from

going through the mirror during transform. So let me show you what this means. So I've already

shown you that without clipping on, we can move parts of our mesh and if they move away from the

origin, it will cause a split. But if I enable clipping and I now grab it, you'll see that

those vertices that were on the center line are now locked. So that even when I move things away,

instead of moving and creating a split, it is locking this line and it's stretching our mesh

out. So obviously, if you're working on something like a character, you probably wouldn't want

a hole in the middle of your face. But let's say you're like, oh, I need this.

I want the face to be wider. So you'll notice that when you have only half of a mesh and you're

using a mirror modifier, some of your transformation tools, especially scale,

will not necessarily work the way you expect it to. So if I press S and then X to widen this,

you can see that we're having an issue with this mirror modifier sort of clipping into itself.

So if I enable it and grab instead of scale, that is how we can move the pieces of our mesh around

so that they can be a little bit wider and it will maintain this seam right here.

So the mirror modifier is one of the most commonly used modifiers in Blender because

it enables us to do the work of creating an entire model in only half the time it

would normally take because we only have to model one side. Now, if our model is something that has

sort of two way symmetry, we can even further reduce this.

Just dividing up my mesh. So if this model needs to be the same all the way around, we can

further reduce the modeling time by deleting everything except for a corner, a fourth of it,

and adding a modifier. So this modifier by default is one way across the X, but if we

added the Y to it, so now from here, if we wanted to come in and edit this and we knew that every

side had to be the same, it's just much quicker to model a quarter of a model rather than all four

sides. So that is it for now for the mirror modifier. There are, of course,

a couple of advanced settings for it, as there are with most things in Blender. For now,

do not worry about anything that I have not covered. The most important things you need

to remember about the mirror modifier is that it is a method for reflecting and duplicating

across an axis. It's most often used to create symmetrical objects like characters. You can

change the axis or axes that you wish to reflect, and you can lock them together by enabling

clipping. So we're going to do a quick demonstration on using a mirror modifier,

and in future videos we are going to cover a few more of these modifiers.


