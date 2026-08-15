# 004 — Understanding and Transforming Objects

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 01 — Getting Started with Blender |
| **Bài học** | Understanding and Transforming Objects |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 11:29 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Understanding and Transforming Objects** trong pipeline của section.
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


Welcome, in this lesson we are going to be understanding and transforming our objects.

So here we have our flower.

This flower is considered one object in Blender.

So let's select it.

If you don't have your toolbox showing here on the left side, you can press D.

And right here, the first select box, if you long press your left click, you have a few

options of how you can select your objects.

So for example, if we select lasso, we can select a lot of objects at once.

I like to use tweak because you can click anywhere on your object that it will select.

If you have circle, that won't happen.

It will only select if you pass your mouse through the origin of your object.

As we mentioned before, all objects have an orange point.

In this case, it's right here.

So what does this imply when we are transforming our objects in Blender?

Let's go here, let me choose.

This is our cursor, as we said before.

Now we have move, rotate and scale.

So let's start with move.

You can click here, or you can press G on your keyboard.

You can see that you can move your object.

Usually you don't want to move it like this, so you can go in your gizmo that it shows right here.

You can press on this little arrow, it will be locked on your axis.

But you can also just press G. And after you press G, don't press anything.

You can press Z to lock on Z, or X and Y.

This is the option that we tend to use most.

So this is how you can move your object.

So let's go to rotate.

You can press right here, or you can press R on your keyboard.

As I said, when we press R, it's freely rotated based on your viewport.

But if we do like this, we can rotate on Z, we can rotate on Y, and on X.

And as we did on move, if we press R, we can rotate it in Z, X and Y.

So, let's go to scale, and it's the same thing.

You can scale Z, X, and Y.

Okay, so let's leave it like this.

And also you have a transform where you have all of them in one, if you want, like this.

But we don't use it that much.

Okay, so now you can see that I transformed a lot this object.

Let's move it also.

You can see what you did with this object by going here on the left sidebar.

And if it's not showing, you can press N on your keyboard to open it up, or click this

little arrow here.

But it's easier to press N.

And let's go to item.

As you can see here, you will have transform, where it shows everything that we did on our object.

So you can see here that we moved three meters from our Y, we rotated 700 degrees here, and

we scaled pretty messy, right?

So you need to keep track of what you do in your object.

So if you want to go back the way that it was 1, 1, 1 scale, you just click and drag

to the bottom and press 1.

So you have 1 scale on X, Y, and Z.

You can do this for all of them.

So rotation, and everything goes back to the way that it was.

Let's say that just in case you want to scale this object on Z, and you want it to stay

like this for some reason, you can see here that our scale is 1 in X, Y, and in Z, we have 1.8.

So if you want it to keep this way, you can press Ctrl A, and here you can apply the transforms

you did in this object.

So you have here apply location, rotation, scale, or odd.

Let's go with scale.

You can see that now our value for Z is 1, and this is 1.

So this might not seem too important right now, but when you start working with modifier,

this will be crucial for you to not get any errors.

But let's go back to the way that it is.

One other thing about transforming your object is what I said about the world origin.

So here we have our world origin and our object origin here.

So you can see as we rotate, it follows this origin as we rotate Z.

If we go here to transform pivot point, you have various options of how you can transform this object.

So here we have 3D cursor.

Let's select it.

If I move, everything stays the same, but let's say we have our object right here and

I try to rotate it.

You can see that our pivot is still on our world origin.

So keep this in mind when you are rotating.

You also have individual origins.

If you're selecting more than one object, a medium point or an active element.

So let's duplicate our object.

Before we start duplicating our object, I want to show you the difference between object

and object data.

So here we have one object and right here on our properties tab, we can see this object

right here and it's named flower.

You can see here also in the outliner named the flower, but if we go down here to data,

you can see that we have another name, it's flower.002.

This is the name of your mesh data.

So you can have a lot of objects, different objects with the same mesh data, and that

is called instances.

So let's rename this by clicking and saying flower1.

This is flower1.

Let's duplicate this object.

You can click shift D. I'm going to hold middle mouse and drag it towards what axis I want to move.

This is another way that you can move, lock your object.

If I want, for example, in the X, hold a little bit your middle mouse and direct your mouse

the direction you want to go.

It's a pretty nice way to do this.

Okay, so I'm duplicating it.

You can see right here that my mesh duplicated.

We have flower1.001.

That is the way that Blender differentiates different names when you copy them.

And if I click my origin flower, you can see.

So these are two separate objects with two separate meshes.

Let's go to our outliner.

Here we have flower.

Here we have flower.001.

We will get more into this in the next lesson, but let me show you what happens if I move,

if I go to edit mode, to edit this mesh and move this, just this object is being changed.

So now let's copy this object as an instance.

Like I said, different objects, one mesh.

To do this, instead of Shift D, like this, we click Alt D. Let me move it right here.

Now you can see we have another flower, a flower.002, but we have the same mesh here.

On data, we have our same mesh.

If I want to make this mesh unique, I can go here and click to make a single user copy.

You can see that I have another one, but let's go back, Ctrl Z.

We have flower.001.

So if I go here to my origin flower and I go to edit mode and I start to move things

around, you can see that this is linked to this one.

So this is pretty useful.

It's used in all game engines.

You do this to reserve power, to increase performance.

And it's really important for you to notice that early on, not because you need to use

instances for now, but just so you can differentiate between an object and a mesh data.

Now before we get into our last lesson, there's one last thing I wanted to show you.

If we go here, right below our top bar, we have a snap that we can snap basically any

way that we want on our grid, on our vertex, on our edges, on faces, whatever you need at the moment.

But let's start in a modular grid.

If we move here at the top right corner and click right here on overlays, you can see

that we have guides, a grid, a floor, and our axis.

So if we select Z, you can see that our axis is showing Y.

You also have your floor and you also have your scale.

So if I have this snap activated, I select and I go G and move, you can see that it's

locked in this grid, one by one.

Even if I go freely, it snaps.

So let's go here and let's reduce, for example, let's use 1.5.

You can see that your grid also reduces.

Let's take a look at the different views that you can have on your viewport.

If we go on overlay to geometry, you can activate your wireframe.

I like to leave this on.

Then we have our X-ray view.

We have our wireframe, our solid that it doesn't show any material.

Then we have material preview and our render.

Next lesson, we're going to get into objects and how you can edit them.

We will see how materials work really briefly inside an object and see how we can start modeling.