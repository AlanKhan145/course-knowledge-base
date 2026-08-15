# 009 — Using Modifiers (Non-destructive Modeling)

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 02 — Your First Modeling Tools |
| **Bài học** | Using Modifiers (Non-destructive Modeling) |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29:40 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Using Modifiers (Non-destructive Modeling)** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- modeling, mesh editing và kiểm soát hình học

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


Welcome. In this lesson, we're going to start applying modifiers to our models

and learn about non-destructible modeling. So here, let's hide our lantern and move this too

and hide our grid. So let's focus on our pathway, our stones. So this is where we left off. We did

all of these subdivisions manually, but there's a way that you can do this without modifying your

origin model. So let's remove these loops by pressing X and limited dissolve. This will delete

every edge and vertex that is not necessary for the overall shape. So here we are left with just

squares. So now we can use a modifier to add those loops. So we can go here to add modifier,

you can search subdivision surface. So this type of subdivision also rounds your object,

but if you do simple and disable optimal display, you can see that the line starts to form just

like you're subdividing. And the cool thing about modifiers is that if you disable them,

or if you go to edit mode and disable this, you can see that your mesh stays the same. So this is

pretty useful when you want to use displacement to create different shapes, but without hinder

your original model. So now let's increase the amount of subdivisions. And you can see here that

we almost have the same result that we did before. What we can do this and what is fun about

subdivision is that I can enter and add a loop and this will alter the way that we subdivide. So

this will have one face and this will have two faces. So instead of having a lot of loops, I can

just add a few that are necessary and I don't need to worry about the rest. Here we can add one here,

one here. Okay, so now let's go back to this type where it creates a smooth surface.

You can see that it's kind of nice. If you are doing a stylized, you already can

use like this and use auto smooth and you already have little stones. But I want to add displacement

and also bevel. So let's learn about bevel. I'll disable subdivision and let's add the bevel.

The order of modifiers import a lot. So the first one is going to be applied first and

then the second and so forth. So we want to move bevel to the top. Okay, now you can see the amount

of bevel. We can reduce, it's a slider, you can reduce the amount that you want. Let's zero one

for example and you have one segment. So now you can see that every edge that we have are being

beveled and you can control the amount of segments here. You also have a limit. Right now I have a

limit that every angle above this will get beveled or you can limit by weight or vertex group. So you

can select a few vertex here. For example, I want just this part to have a bevel. I can assign

and use this as a limit. So here group. So only this vertex will have a limit. We will use this

on our lantern. Let's go back. Right now I want every edge to have a bevel. You can also

combine these two. For example, if I want to use this and a subdivision, you can see what changes.

So let me hide this one and apply. So what is happening here is that these two edges are

creating kind of a constraint to the subdivision. So when you apply the subdivision, it takes

these bevels in considered. So what does this mean? So let's disable this and add ourselves a

constraint. If I go here and add edge loop here and disable, you can see that this starts

to be sharp. You start to limit your subdivision.

Let me change to a medium point. So you can see how this limits your subdivision. So we're going

to use these properties more on the lantern. You can also increase the amount of subdivision.

If you go too far here, it starts getting a little bit crazy. So you can set a limit to the viewport

and increase for the render if you want. So when you render it, it will consider this amount of

segments. And you can also activate your optimal display. So you are not seeing the subdivisions,

but they are here. So I like to leave them on.

So now let's add one more modifier to this place. So this is a deform. Let's hide. You can see that

it's right below bevel and subdivision. Then we have this place. And we need a texture. So let's

add a texture. So this can be a little bit confusing, but if you go down, you can see

that we have texture properties here. And now we can see our texture on our display. So let's rename

this. I'll use noise for this. So this is kind of crazy. Don't panic. Let's go to our image and

choose distorted noise. So you can see here that we have a black and white textures, and we can

control the amount of randomness of this texture. So let's go to modifiers again. And here you can

see that we have our strength into one. This is too much. So let's reduce it to 0.1 or 0.02.

I think this is too much.0.01. So what you can see here is that our modifier is using this

texture, this black and white texture, to apply a displace in our vertex related to our direction,

that here is our normal. So we can use mid-level, but the two controls that you need to adjust is

strength. And you can go here and adjust the amount. So you can see as I'm doing this,

vertex are getting offset here. So if I go like this,

and you can also adjust the size, which is pretty cool to see.

So here you see that how you can add variations to your model without destructing it. So that is

the concept of non-destructible. If I go here and disable all of my

RBEC with your original model, it's just simple squares.

So just play around with your different textures, bevel, and subdivision. You'll see how you can

control this without modifying your object. So what I like to do is also create a backup.

Let's click Shift D and move to a new collection. I'll leave this inside cobblestone

and hide. Now let's go back to our lantern that is a little bit more complex,

and let's apply the bevel and the subdivision. So I'll hide this one.

Okay, so now you can see here what we can apply with what we learned on the other modifiers.

So let's add a bevel. Here you can see that it is applied here on all of my corners, even here

in my top part that we separated last lesson. So here I only want to apply bevel in a few places.

I could do that manually, but I want to use bevel. So let's use our limit. Here we can see that it's

limited by an angle, but if we click down, we can use weight painting or vertex group. So I'm going

to use vertex group. If you go here, down here to data mesh, you can see that we have a tab

called vertex groups. Let's add one and name it bevel. Okay, so now let's go into edit mode

and you can see here that this show up assign, remove, select and deselect, and you have your

weight. So what this means, if you click select, nothing happens because I don't have any vertex

on my group. But you can see here that everything is represented by a bevel, so this could be kind

of confusing. So let's select here. Okay, so now we can see that we don't have any bevels,

any vertex group assigned actually. Where I want to add bevel is any sharp edges that we have here

because this is not realistic. You don't see this in real objects. So let's add one here and here,

assign. Let's go back here and adjust the amount.

So now this is interesting. As you can see, let's go to vertex. This vertex and this vertex

are in the group. So my modifier is understanding that we need to do a bevel right here, but we

don't want a bevel right here. So this is one of the cases where we use an edge loop to constrain

this. And this will be useful when we use our subdivision tool. So let's go ahead and add

our subdivision tool. So let's add one here, and you can see that it automatically is

assigned to my vertex group. So you can see that now all of these are assigned to my vertex group.

So now what we can do is select all of these vertices, and let's deselect just this one.

So you can do that by pressing C, and you automatically have the circle selection.

And with your middle button scroll mouse, you can press it and deselect this one.

So now right-click to deselect, and you can go here. Let me press comma to center,

and do the same thing. See? This is one of the things that you can do to select.

Okay, now let's remove these ones from my vertex group. You can see that now the bevel is perfect.

Let's increase the amount of segments, so now we don't have a sharp edge anymore.

So let's add a few more.

You can see that here, and also on all of these edges.

Here on this, I think I'm going to delete this one,

and assign this. Now here's a tricky part. Let's add one.

Sometimes you can go here and disable, just so you can see what's happening.

Here we also need a constraint, so let's apply. And I think I'm going to apply two.

Let me just remove this one first. Let's apply, and also this. Let's apply two,

and scale it, because this is going to

constrain also the subdivision that we're going to add.

And now we need to go back here,

and do the same thing here.

So every sharp edge that you see

is a good candidate for a bevel.

Even here.

We will need another constraint here.

Let's add a bevel here, so that will give the same impression.

So let's add a bevel here, so that will give the same impression.

Another constraint here.

Let's add a bevel here, so that will give the same impression, that we have a smooth.

Let me apply Shade Smooth real quick. Shade Auto Smooth.

So you see here that we can have this nice gradient here.

It will give me the same result. It's better than just a flat.

Can you compare both sides? Just a flat cut here, and it's way easier than just go back to flat.

So let's apply a bevel to all of this.

Okay, so now let's analyze this. I'm going to remove a wireframe,

and now we have flat shading. I'm going to add an Auto Smooth,

and increase. Okay, so right now, right here on the edges, even with Auto Smooth, it's not

looking good. I think I need to add a bevel here, maybe.

So I can increase one more. Yeah, that looks better.

Now we have a smooth here, here, and all the way down.

Okay, so I don't think we need to add a subdivision.

Because with bevels, we already achieved that smooth surface.

So I think we only need to use on this top part.

So I'll need to separate this object. So I'll select, and pin.

Okay, now we have a different object. We didn't use bevel on it, but let's see if we need to.

So let's add a bevel here, and I'm going to add a bevel on this top part.

Set a subdivide surface, and you can see, let's activate wireframe.

You can also just do this, but I like to use wireframe and solid.

So now, let me shade flat, so you can see better. So now you have a smoother surface.

We can shade all smooth. But as you can see,

I lost a lot of this curve, so add another contention here.

This looks better.

Let's see what happened here. We have two separate objects for now.

We can join them, but I don't think it's necessary.

So if you see here, because this top part is covering this one.

Yeah, I don't think I'll join.

Okay, so now this is the part where I create another backup,

especially if I were to join these two objects here.

If I were to join them, I would need to apply the subdivision.

So let me show you how you apply. You click here at the bottom and apply.

So now, if you go to edit mode, you have access to all of the vertex.

So this is what I say about non-destructible.

So what I did here, I basically destruct my original geometry,

and I can't go back. I mean, I can, but it would be pretty hard.

So let's hit control Z until I have my subdivision again.

And let's create a copy of all of this.

Oh, I think I'm going to add a bevel to this too.

Maybe with the glass, we'll get a nice effect.

Pretty small bevel. Not that small.

Not that big. Not that big. Perfect.

Okay, let me see what happens.

If you select your object here, you can also press comma,

like we press comma to zoom in.

If you press comma here, it finds your object in the outliner.

So here you can see we duplicated, so this is outside its parent.

I'm going to rename this. Lantern top.

And I'm going to drag on lantern again.

I can't do that.

And I'm going to drag on top of lantern again, clicking shift to parent.

Okay, now everything is connected.

And I'm going to select all of this, duplicate, and move to my lantern backup.

I need to move this one too.

Okay.

And this one too.

Okay, now everyone is here, even our huge model that we did back there.

Let's add a subdivision surface to this part.

This looks cute too.

Now that we have our top part here, I missed some subdivision here on my lower part.

And I have my backup if something backfires.

So what we're going to do is select both of them, leave this one active, I believe.

And I'm going to select this one.

Leave this one active, I believe.

Click control L and copy modifiers, yeah.

But now this one got disabled.

It's okay, we can adjust.

Okay, so now you can see that I have my subdivision applied to this one.

And since we have our vertex, the same settings on both, I can join them again.

So selecting both of them, control G.

This looks better.

So now we don't have any bevels applied here, but we have the subdivision.

I think we need to adjust this again a little bit.

And we have our lantern and we have this nice effect here of the subdivision

that we need to add more polygons to.

So let's add two.

This is kind of cute, it wasn't in the plans, but I think this fits the style.

I can add a loop here and a loop here.

Let's see how it looks. I like this.

Yeah, one would be too...

So let's do it correctly.

So I decided I'm going to use a subdivision in my lantern.

But this is the nice thing about non-destructible.

You can create a copy, you don't need to apply what you did.

It can always go back to your original model to change anything.

So let's add some constraint loops here.

I think I'm going to use now 0.75, 0.70.

Let's see, 65. Minus 0.65.

So here we have a different factor.

So I have to eyeball it a little bit, no problem.

I think I showed you this.

You can press 1 and then Ctrl 1 to do front Y and back Y, back view.

Here we can use 0.65.

This will create extra loops here, but no problem.

Now let's try to match the other side.

I'm not gonna be too strict about this.

You can always go back and move a little bit.

With non-destructible modeling.

I'm going crazy.

Hey, now let's activate again.

I lost some of the properties, the cuteness.

I'll change it again.

I'll increase it a little bit more.

It's okay.

It's okay moving while you have some surface on, but sometimes it can get a little slow.

Okay, now this is better.

I'll use this example.

I need to use orthographic view.

But not this one, not this one, this one.

Right now is what I call here artistic view. Oh, I forgot.

So freaking cute.

Oh, I love it.

Now you can see if I disable subdivision, the lighting hits different here.

It's because I have only one bevel.

If I disable, yeah, I can just disable that right here.

So no bevels, subsurface.

Also looks cute.

You can see that now we have a more smooth.

It goes like really smooth here.

We don't have a crease.

It's just also cute.

Doesn't look bad at all.

But if you want a little bit more definition on the edges, you can use bevel.

It will serve as a constraint to the subdivision.

Okay, this is awesome.

Okay, so one more modifier before we go on to texturing.

Let's add an array.

So here you can see that it duplicates as an instance on the line.

And I can increase the amount of duplications that I can have,

even though it's only the original object.

So this is pretty useful.

And we're going to use this a bunch of times.

I'm going to move this up because this order of modifiers matter.

So let me put this above displace.

So now you can see that my displace changed.

It's considering all of my objects.

Before it was just considering this one and then duplicating.

So you can see that we have the same displace here than here.

So if I do this, you see that it changed.

So it also adds a little bit more variation to our displacement.

I'll move this up one more.

I think I'll add this to the top.

So now I'm going to disable these other ones just so because of performance issues.

Let's add five.

And I'll also randomize.

This is a cute feature that we have.

I don't know if it was implemented in 5.1. I'm not sure.

But we can offset a little bit, which is pretty cool.

You can also rotate.

For us, it's not going to serve right now.

But yeah, I'm going to randomize.

I think just on this direction, you can randomize on all exits.

Maybe a little bit here.

Okay.

This is one of the reasons that we do backups.

Because right now, if I apply array on this one, it's not going to grab my glass.

So I could apply an array to our glass.

But the only thing that I'm using here is the solidify and a bevel.

And I already have a copy of that on my lantern backup collection.

So what I'm going to do is apply and merge.

So I'm going to apply my solidify.

And then I'm going to apply bevel.

Even though I didn't want to do that.

And I'll join with my top.

First, since this is a parent, I'll need to press Alt P.

To assign a parent, you click Ctrl P.

You can see set parent too.

And to clear parent, you click Alt P.

So I'm going to clear parent and keep transformation.

And now I can go here and join.

Okay, so now we have our subdivision applied to the glass too, which is okay.

We are doing a render.

But you can see that we have a lot of vertex.

So maybe I'll leave it like this.

I think we just need one.

So render, we can use as much as we want.

But I think one, it already looks great from like here.

So you can see without bevel, with bevel, without subsurface, with subsurface.

So now we can go here and let's apply our array first or not.

Same thing, I'm going to disable this performance.

Okay, so now we have our pathway and our lantern.

So this is our models.

Next lesson, we will start adding the materials and assembling a scene.


