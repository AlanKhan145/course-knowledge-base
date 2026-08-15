# 003 — Understanding Workspaces and Viewport Navigation

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 01 — Getting Started with Blender |
| **Bài học** | Understanding Workspaces and Viewport Navigation |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:22 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Understanding Workspaces and Viewport Navigation** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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


Welcome. In this lesson, we are going to learn more about Blender workspaces

and how to navigate your 3D viewport.

So before we get started, I will go to Edit and Preferences.

I want to increase the resolution scale of my screen so you can see better.

So I can go here to Resolution Scale.

And you can see that all of my text are increasing in size.

So I will leave it at 1.1.

Here you can customize a lot of properties in Blender.

Since Blender is an open source, we have a lot of add-ons.

So you can add, for example, a different format exporter.

For example, this one, glTF.

You have rigs, add-ons, UV, a lot of options.

I'm going to add the Screencast Keys.

As you can see, my mouse showed up here at the bottom left.

So everything that I click will be mirrored.

So let me activate it.

There we go.

Okay, so now let's get started looking at the different workspaces that we have on Blender.

This is the first one, Layout.

So it is composed by four different editor areas you can see here.

This is the first one, it's the 3D Viewport.

On the top right side, you can see the Outliner.

The Outliner is basically your scene collection.

So you have a list of everything that you have on your main viewport.

For example, we have a camera, we have our flower that we added last lesson,

and we have a light you can see here.

At the bottom, you have the Properties.

And I like to divide the Properties in two sets.

The first one, you have Render Settings, the Output,

some Scene Properties, and your World Properties, like the Environment.

And the second one that is not showing right now is going to be your Object Selected.

So let's go here to our flower and select and click the right left mouse.

So you can see that right before the Collection tab, all of these properties got added.

So we have our Object Properties, our Modifiers that we're going to get into the next lesson,

Particles, Physics, everything related to your selected object.

So if we go here at the camera and select, you will see that this property changed.

So keep in mind that this bottom part depends on what you have selected at the moment.

And let's go to our final editor area right here below.

So right now, I'm going to show you how you can move around these editor areas.

When you go to this line here, you see that you have an area pointing both ways.

So you just click your left mouse and you can do this for each one of them.

So let's do this with the Timeline.

So this area is the Timeline.

Right now, we're going to hide it because we're not going to use it right now.

So just for you to see, go ahead and click Spacebar.

And you can see that your Timeline starts to run, the starting frame and the end frame.

So we can use this to do animations.

Now I'll go ahead and click Shift and the left arrow to go back.

To go back and we are at number one frame.

So to close, you can personalize each and one of these workspaces.

So you can go here, right at the bottom, the top editor area,

click and hold your left mouse and drag it down.

So you can see here that it shows Join Areas.

So what this is going to do is remove our last editor area that is the Timeline right now.

So now we only have three.

So let's select our flower and let's take a look at the different workspaces that we have.

So right beside Layout, we have Modeling that you can see when I switch from one to another,

it already switched to the Edit mode.

But we are going to see how we can edit meshes in the next lesson.

So let's go to Sculpting.

You can see here all of your brushes that you have.

Then we go to UV Editing that we're going to take a look later.

But basically, you can unwrap your mesh into a flat 2D texture surface

to paint like I have it here or edit different textures.

Then we have Texture Paint.

Like I said, you can paint your texture.

You already see how this is working.

Then we have the Shading one.

This is our material shader.

And these are our textures.

Then we have the animation with the timeline that we had on Layout.

And then we got Rendering.

Here, it's not showing anything because we need to press F12.

And you can see that another window opened here.

But you can also see right here.

Let's go ahead and close.

In Composition, you can grab your rendered image

and add, for example, glare, bloom, vignette.

You can edit here.

And then we got Geometry Nodes, which is pretty exciting.

It's a node-based procedural modeling function.

And right here, this is pretty exciting.

Geometry Nodes is a procedural modeling, node-based feature. So, yeah.

And then we got even Python scripting.

So as you can see, we have some advanced workspaces

and some more simple workspaces.

But we're going to start right now with our Layout.

You can also add another workspace if you want. Let's go ahead.

So here we have our Sequencer and the Timeline.

So this is pretty exciting.

And you can create your own.

So let's go back to our Layout workspace.

So this is our 3D viewport.

On the top right corner, you can see here that we have our gizmo.

You have the X axis, the Y axis, and the Z axis.

So the X and the Y represents here your floor.

So as you can see here, we have positive X, negative, and positive Y, and negative.

And your Z is the up axis.

In Unity, for example, you will have the Z, it will be the Y, for example.

And your Y will be the down.

And your Y will be the Z.

So keep in mind that Blender is a right-handed software.

So let me do Ctrl Z, just so we don't get confused.

I'm going to go to the Selection.

Okay, so before we start moving our viewport camera around,

I wanted to show you that you can go here to Gizmo and click your desired viewport.

So here we have our front view, side view, and top view.

And this you can control also with your numpad.

So you can see here, if we press numpad 3, 1, and 7, we can alternate.

And this rotates accordingly.

And even in under view, you can see we have negative Z.

So let's go back to our numpad 3.

Now, before we learn how to orbit our view, I want to explain what is our 3D cursor.

So you can see it right here on our 0, 0, 0.

What this means? 0x, 0z, and 0y.

We have our 3D cursor here.

Let me show you.

So if you go here to Cursor, you can see that we can move it around.

If I press Shift S right now, you can see that I have the option to move this cursor to grid,

selection to add, but I will do this cursor toward origin.

And you can see that it moves exactly into the 0, 0, 0.

So this is the pivot point of our scene.

It will not always be your pivot point of your object, because if you move, let's go here,

because if you move our object here, your object origin will be different than your world origin.

So keep this in mind.

You can see here by pressing N and going into item.

You can see here that the location of our object changed.

If we go to 0, now it's exactly as the world.

But we will take a look at this next lesson.

So let's go back to orbit.

So we can orbit by pressing the middle mouse wheel and moving our mouse around.

You can see that as I did this, our viewport was changed from an orthographic to a perspective view.

So let's do this again.

This is controlled by pressing the 5 on your numpad.

So you can switch from perspective to orthographic view by pressing 5.

And if we press 1 or 3, it's automatically an orthographic view.

So you can see if I press 1 and 5, it switches from an orthographic to a perspective.

You can also control this by going on your sidebar into view.

You can control the focal length of your viewport camera.

It's different than your outliner camera right here.

It's just your viewport.

Let's switch to perspective that we can see a little bit better.

So if we orbit, we can control of focal length.

But it usually is best to leave it at 50 or 30.

Right below it, we have our clip start and clip end.

So if I increase my clip, you can see that we have a clip cutting our object.

And we also have a clip end.

If I reduce, you can see that it starts clipping from behind to the front.

So keep this in mind.

If sometimes you have an object too far away from your viewport camera, it can disappear.

So let's continue our navigation.

If you want to pan from side to side, you need to click shift and your middle mouse button.

And you can pan up and down, left to right.

So we can combine both of these.

You can orbit and you can pan.

Of course, you can also zoom.

Zoom in and zoom out with your mouse wheel.

If you get excited and just start spinning around and you get lost.

Oh my God, where is my object?

You can press home on your keyboard and it will frame all of your objects.

Or if you have an object selected, you can press comma in the numpad and it selects your object.

So for example, if I have my camera selected, we can press numpad.

And as you can see, we start to orbit around the selected object.

So let's click on the other object, numpad.

If you forgot any commands, you can also check our status bar.

You can see right here, really small, that we get some tips about how we can navigate.

So we have left mouse select, rotate view.

And you can see right here, as I'm rotating, if I press right click of my mouse,

it cancels and goes back to the way that it was before.

So we have our options here that we will take a look later in the next lesson.

But yeah, if I press shift, you can see here that it shows how I can append my view

and how I can cancel.

I can set my 3D cursor by pressing my right click.

So yeah, right now you have an overview of how you can navigate your viewport

and what are the different workspaces.

In the next lesson, let's get into our object.

And we will talk a little bit more how we can modify, transform them, scale, rotate,

and also how they interact with each other.


Completed