# 036 — Subdivision Surface Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 08 — Basics: Most Common Modifiers |
| **Bài học** | Subdivision Surface Modifier |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:23 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Subdivision Surface Modifier** trong pipeline của section.
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

We've learned a lot about how to edit meshes, but so far we have only been editing our mesh

in a destructive manner, meaning that we are making changes to the original object, and

once those changes are made, the only way to get back to the original object is to press Ctrl Z to undo.

However, in Blender, there are actually ways to edit meshes in a non-destructive manner,

meaning that we are not changing the original object, but rather we are previewing changes

we want to make.

Working non-destructively allows us to return to the original object at any time.

So the way we are going to work non-destructively in Blender is by using modifiers.

Now modifiers are automatic operations that affect an object's geometry in a non-destructive way.

With modifiers, you can perform many effects automatically that would otherwise be too

tedious to do manually and without affecting the base geometry of our object.

Now we can add multiple modifiers to any object layer to layer their effects and form what

is called the modifier stack, which will appear right here.

So let's look at what this actually looks like.

And let's actually start with a monkey primitive for this one.

So just select everything in your scene, and from a new scene, select everything, hit X and delete.

Now let's add a monkey primitive by pressing Shift A, Mesh, Monkey.

So we have seen Suzanne here before.

She's a great little model, but if we tab into edit mode, we can see that she is made

up of relatively few polygons, or faces, which gives her this jagged and faceted appearance.

So in order to make an object smoother, we need to add more levels of subdivision.

We explored how to do this manually by selecting our mesh, right-clicking, pressing subdivide,

opening the subdivide menu, and increasing the smoothness and the number of cuts.

But this is a destructive method of editing, meaning that once these changes are made to

the original, they are made to the original mesh, and suddenly this is a lot of points to work with.

And if we needed to come in here and change the shape of it, it would just, moving all

these vertices, even with the selection shortcuts and things we have learned, trying to change

the shape from this level of detail would quickly become a time-consuming nightmare.

So I'm just going to CTRL-Z to undo all that.

So in order to smooth this mesh in a way that preserves the relatively few vertices that

we have here, we're going to do this by adding a subdivision surface modifier to our mesh.

So the way to add any modifier is to come over here to the properties panel, and we're

going to select the modifier properties tab, which is this little wrench icon right here.

Now we briefly looked at this tab when we were going over the Blender interface, but

now it is time to actually use it.

So with our object selected, we're going to come to the modifier properties and click

the add modifier drop-down menu here.

From this list, you can see that there are many, many types of modifiers that Blender

is capable of doing.

We're just going to be looking at some of these generate modifiers.

So from add modifier, under the generate column, come down here and select subdivision surface.

You will see this window has popped up in our modifier stack, and you will also see

that Suzanne has been subdivided and smoothed.

However, if we tab into edit mode, you will see that Blender is remembering essentially

where all of our original vertices were, and is showing this subdivided and smoothed version

of the model as sort of a preview.

No changes have been made to this underlying object.

We can run as many subdivisions as we like by going here to where it says levels viewport

in our subdivision surface modifier and increasing the number of subdivisions.

Now be careful when increasing these levels here.

I would not increase them insanely high because Blender still has to run the calculations

of where all these vertices would be.

And so even though underneath this is still a relatively low poly object, increasing the

levels of subdivision will slow down your viewport a lot, and increasing it high enough

will probably crash Blender, if not your entire computer.

Plus there's sort of diminishing returns on subdivisions.

The first few steps will change the shape and the look of your model dramatically, but

every subsequent subdivision after that will change it a little bit less.

So really setting this level very high is just typically not worth it.

We can quickly toggle the visualization of this modifier by clicking on this icon here

that looks like a little computer monitor that says real time when you hover over it.

Disabling this icon will simply disable the preview of this modifier in the viewport.

Now these are some other settings here for additional visibility controls, such as this

icon with a highlighted vertex.

All this icon means is whether or not we want to preview the modifier in edit mode.

So currently it is on, and we can see when we tab into edit mode, although we are seeing

the original wireframe mesh of our object, we can still see that it is being smoothed and subdivided.

So if we turn the edit mode icon off, when we are in edit mode we will see our original

base mesh, and when we tab into object mode we will see the subdivided version.

For the time being, don't worry about anything that says render settings, such as this render

visibility or this render levels, as we will be covering rendering in a future video.

Now our methods of subdivision are controlled up here.

Catmull-Clark is the default method of subdividing a mesh with the subsurf modifier.

I'm sure there is a complicated algorithm running, but for practical purposes all you

need to know is that Catmull-Clark will divide and smooth this model, whereas simple will

only add the vertices without smoothing the model at all.

So, using the subsurf modifier we can divide Suzanne a few times, let's put it just up to three.

Let's fix the faceting on the model by, in object mode, right clicking and selecting shade smooth.

And now she's looking pretty good.

Now, say that we really like this, and we want to make these changes to the base mesh,

so that when we tab into edit mode we have more geometry to work with.

We can do this by applying this modifier.

To apply a modifier, all you need to do is click on the drop down arrow on the modifier

in the modifier stack, and press apply.

You can also apply a modifier by hovering your cursor over it in the modifier stack

and pressing control A. Now you'll notice that the window has disappeared from the modifier

stack because our mesh is no longer being modified, it has taken all of those vertices

we were previewing and baked them into our mesh data.

So now, when we tab into edit mode, we have all the information created by the modifier

as part of our base mesh, which we now can treat like any other vertex, edge, or face.

You can see we can select it, we can move it around, scale it, transform it however we need.

We can add loop cuts in between these, use insets, bevels, and extrusions the same way

we would with any other mesh.

Now a quick aside about applying modifiers, and that is that you can only apply a modifier

when you are in object mode.

I'm just quickly ctrl Zing to undo until we get this window back in the modifier stack,

and now I know that the modifier has been essentially unapplied.

We have our original mesh here, and we have the window in the modifier stack.

So you'll notice that if you are in edit mode, and you click on the dropdown, apply will

be grayed out, and you can not apply it when you are in edit mode.

It's just something that cannot be done in Blender in edit mode, so if you do want to

apply it and you come here and you are seeing this and you're like, why is this grayed out?

Mainly because you are in edit mode, so to fix this, just tab out of edit mode, and then

you will be able to apply your modifiers.

Now modifiers, I've called this the modifier stack, and why it is called the stack is because

we can stack modifiers on top of each other to layer their effects.

So for example, we could have a single subdivision, we could have more than one subdivision surface

modifier, and the order in which you apply these will affect the outcome of your mesh.

Now these are both subdivisions, so you won't necessarily be able to, is that a wireframe?

So this is what the wireframe modifier does.

And don't worry too much about this, we're going to go over more of these modifiers in future videos.

I just want to make the point that these modifiers stack on top of each other, and the order

in which they are placed in the stack will affect the outcome of this.

So Blender reads these modifiers from top to bottom, meaning that it will first perform

the first modifier in the stack, and then it will perform the next, and then it will

perform the next.

So if you have multiple modifiers on an object, you can see how they are affected by the order

by clicking these dots here on the very right-hand side of the modifier panel in the stack, and

you can reorder them.

Now this just shows you what it would look like if we were doing a first a wireframe,

and then a subdivision surface modifier.

So you can see that the order will dramatically affect the outcome on your object.

To delete a modifier, simply have it highlighted by left-clicking on it in the modifier stack

and pressing delete.

So that is all for the subdivision surface and intro to modifiers.

In the next couple of videos, we're going to be going over a few of these in more detail.

I will see you then.


