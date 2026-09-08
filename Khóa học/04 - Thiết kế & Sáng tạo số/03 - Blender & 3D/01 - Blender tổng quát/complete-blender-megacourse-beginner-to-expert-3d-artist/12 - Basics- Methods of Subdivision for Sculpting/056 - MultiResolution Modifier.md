# 056 — MultiResolution Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 12 — Basics: Methods of Subdivision for Sculpting |
| **Bài học** | MultiResolution Modifier |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 12:35 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **MultiResolution Modifier** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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

So I want to talk next about the subdivision when it comes to sculpting

So you saw in the last couple of videos?

I had started with a sphere that I had already subdivided a quite a number of times

But even with that being done, we really quickly ran into some

Problems caused by low geometry

Now we could have subdivided the sphere at it to a higher level before we began sculpting

But that is not in a very efficient use of our time because we don't always know how dense we're

going to need a mesh to be

Before we start sculpting on it. So in order to

Get this sphere ready for sculpting. It needs to be denser

So in the past we have made our meshes denser using a subdivision surface modifier

But that is not going to work for a sculpt mode and let me show you why

Let's add a subdivision surface modifier and we can even divide it a few times to get a relatively

Dense and smooth mesh now. I am in sculpt mode already

But you'll see that when I start to draw on this

Well, it's not really working and that is because

The subdivision surface modifier does not allow us to sculpt on

These higher levels of subdivision that we created

We can only sculpt on the vertices that are in the base mesh, which is not enough to get our sculpt working

So to solve this problem, we are going to use a different modifier

So the modifier we are going to use to subdivide our mesh for sculpting is called the multi-resolution modifier

let's add it now, let's come to the modifiers panel click on add modifier and

come down to generate and select

multi-resolution

Now nothing happens here at first

But you will see that here in the modifier stack we have our multi-res modifier

We have a couple of settings here such as level

This will tell us how many subdivisions we are currently viewing. So you will see that nothing has

happened here because our

Level in both viewport and sculpt mode is at zero

So you may be thinking that

Okay to increase the level of subdivisions here. All we need to do is increase here. Oh

but clicking on that does not increase these numbers and

We need to be able to do that. So in order to use these slider functionality here

We have to subdivide our mesh first so

These sliders will not be functional until we press the subdivide button down here

once we do that, we see that we have a

Level preview of one in all modes

Now these different modes here are referring to

Sculpt mode versus object mode this viewport level right here refers to object mode

So if I were to return to object mode with the level viewport set to zero

It would unsubdivide that preview. However, I can increase it by using the viewport level slider

Sculpt refers to how many levels we are viewing in sculpt mode. We have sculpt mode active

This can be zero

Tab into object mode and see it at one

And

Render refers to our final renders, which we have not covered yet in this course

So do not worry about the render levels just yet

So once we have pressed this once we can use these sliders

But as you can see we can only go up to one that is because we've only

Subdivided once in order to increase these sliders further. We would need to subdivide again

Now we have a maximum of two

That we can toggle between

Subdividing again will give us a maximum of two

So we can subdivide again

Subdividing again will give us a maximum of three and so on

So this multi-resolution modifier allows us to sculpt at any level

So for instance, we can come down here to our first subdivision in sculpt mode

And we can draw some large strokes on our form

And we can draw some large strokes on our form

The lower the resolution the larger the form that it will create when you sculpt

So we've created this form now we can

Come up to the third subdivision level at a higher resolution

Maybe reduce the size of the brush a little

And if we start sculpting now we have slightly finer detail

So this is great

But what is really cool about this is that if I decided I needed to change this larger form

But I didn't want to change these smaller ones

all I would have to do is return down to a lower level of subdivision and

Let's press G for the grab brush

Let's increase our size a little And let's just

Increase our size maybe a bit more

By pressing F and increasing the size

with the cursor, so let's just drag this in so

Let's say I didn't want that larger protrusion

So all I needed to do was come down to the sculpt level of one to remove it

And now if I return to the higher subdivision, I still have my high-res details right here

So that is a really powerful functionality that allows you to quickly switch back and forth between

large forms and smaller forms at will Now

Let's say we have made all these subdivisions, but we actually want to remove them for whatever reason

We can do this by using the delete higher

button in the multi res modifier so if we

Decided we didn't like any of these changes and we wanted to return to a lower form of the sculpt

All we would have to do is return our levels

Let's say down to one and

Now if we press delete higher You Will see that these

Sliders should return to zero and the viewport one didn't return automatically

But once I clicked on it, it snapped back that just appears to be a little graphical bug

Don't worry about that. So but now if I go to these sliders and try to increase them

I cannot because those levels of subdivision have been erased

You'll see that the changes I have made to the large

shape of the form at

Subdivision level one are still there. This is no longer a perfect sphere because it has retained those changes

But now I no longer have my little smiley face

Because I've deleted that level of subdivision and there's simply not enough information anymore to create that so

The last bit I wanted to cover about the multi-res modifier is this unsubdivide button and

you may think that it's just the opposite of subdivide that if you were at say level 3 and

You wanted to delete

Level 3 and return to level 2 you would unsubdivide. However, you're going to get this message that

says not valid subdivisions

found to rebuild a lower level and I

Seem to have lost my cube or my sphere

So what that means is that keep in mind that the multi-resolution modifier is just that a

Modifier it is not baked in or applied to this mesh in any way if we toggle the visibility

We can see we have the original sphere here with its original number of polygons

So the unsubdivide actually works

With meshes that are already at a higher resolution so

What does this mean? Let's

go quickly back into object mode and look at this mesh and Let's add a

subdivision surface, let's say we were modeling something and

We added a couple of levels of subdivision and

Then we decided that we needed actually more detail and we wanted to sculpt finer details into this

So let's apply this modifier. So currently this is the resolution of the mesh

if I were to now add a

Multi-res modifier and let's say we were in sculpt mode. I

Could hit unsubdivide and

blender would calculate a

lower resolution form

that would not change the shape of this at all, so

Let's let me quickly show you

I'm just gonna subdivide this a few times and I'm going to sculpt on it to show you how blender maintains the form

So, let's say this is your sculpt beautiful I know

And

Let's say you were happy with this. So you decided to apply your multi-res modifier

Now to do this we have to be an object mode just like we are for every other modifier

So let's tab into object mode and if your sculpt disappears check your viewport levels which are set to zero

Let's just slide that up to get our details back

So now let's apply this modifier by clicking the drop-down or pressing ctrl a

and let's say this was the

Mesh the base mesh you were starting with

Well, if you wanted if you then decided you needed to make larger scale changes to this and

therefore it needed a lower

subdivision level to sculpt on this

You could do so with the multi-res modifier

Coming in adding it to this mesh and clicking unsubdivide

May take a minute to calculate depending on the power of your PC, but you'll now see that this is a

much lower resolution

But it has maintained all of the forms that I sculpted in at a higher resolution

so this is a very powerful tool for

Keeping your polygon counts relatively low while still maintaining all the work you have done

This is useful. If you're bringing in a high poly mesh from another program or from another artist

You know, you can still reduce the geometry and work at lower levels

So that is all I wanted to discuss for the multi-resolution modifier now

there is one more method of subdivision for blender that

Uses a more dynamic system and we will be covering that one in the next video