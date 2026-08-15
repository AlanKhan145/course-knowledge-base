# 209 — Starting with Texturing

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Starting with Texturing |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Starting with Texturing** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
- environment art, asset assembly và scene organization
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


All right, welcome back.

Before texturing any model,

just make sure that everything is set right.

You will be applying a lot of modifiers,

you will be applying a lot of location and such.

So just make sure that if you are going to

texture a few objects on the same model, the same,

then this will essentially be

dealed with differently than any other thing.

Since we have a few of the objects here all linked together,

this is going to help us with modeling way better.

For now, however,

I see that the number here went up again.

So I'll just look around

and see if we can optimize our geometry a little bit.

I don't think it's the,

any of those,

it may be the platforms themselves.

If you can see, I'm just quickly hiding

and un-hiding the objects here.

Just want to see how much these contribute

to the actual model. Not too much.

Well, we have a few balding guns up there.

Okay, so before we do anything crazy,

I just saved my file a few times, of course.

And since we have a few memory to go with,

we can do something that a few people actually do

and not too many people do.

So that is, we can click up here on this new scene.

And when you click, you'll just have a few options here.

So they can, you have a new scene, you can copy settings,

you can link copied, you can make full copy of the scene.

This means like, say, if I make a full copy,

then I just made a new scene.

If I go ahead and like scale everything,

like badly, I still, if I click here and go to the top,

I still have my old scene.

And to delete that scene, you can just hit that X button.

What we will do, however,

we just need a copy maybe of the settings.

So we have a fresh scene,

but if you notice, it still consumes the same memory.

So you just make sure that, you know,

you're not overdoing it with your PC, essentially.

So what I will do is that I need to optimize

the geometry a little more.

What I will do is I'll just select my model, essentially.

So I'll just Control C,

then go to the other scene and Control V,

and it's going to be pasted on the same location

as the other scene.

So if I, for example, select that,

it has some rotation, sorry, location and scaling,

but location mainly is what I'm looking for.

So if I Control C, then go here and Control V,

it's going to be pasted on the same spot,

which is a nice thing to have.

I will delete everything that's not going to contribute to my scene.

So delete, delete, delete.

Remember to hit save, delete,

and there was a little more human there, I guess.

Then delete, oops, delete.

And now I'm sitting at 5 million.

I can quickly here, of course, I'm not looking at 1.5.

Essentially, I'm essentially,

I know for a fact that the memory costs,

the memory cost of that object is around 900 megabytes.

That's because I'm now using it twice, essentially.

So I'm consuming twice as much memory,

but because I have some free,

I don't need to start a new scene

and then like play around with like geometry and such.

I'll just go ahead with the current scene I have. So let's see.

Again, if I hide this, you can see that it goes down a bit.

Let's see, if I hide that.

So the bottom part is around 2 million. So,

actually, let's start with organizing our stuff even more.

So I think we have a stairs,

oh, everything is outside the collections.

Can we copy collections? Hopefully, yes. Control C.

Let's collapse that.

No, there are no collections. Control V. No, it's not.

It's not doing that.

Well, it's fine.

Again, we can just maybe

select these things, rails,

just make a new collection called stairs.

Okay, and one thing you can do

is that you can hide that collection momentarily

so that you really,

you just know that whatever you just added is now hidden

and you don't like get confused if you did hide it or not.

Move to stairs. Move to stairs. Okay. Just do it.

It's going fine now.

I believe, let's unhide that for a minute because,

yeah, so just as I expected.

So as you can see that we instanced that collection,

but here you no longer see it.

If I quickly here switch back to our scene

and you remember that this was an instance

from the other collection, vertical stairs.

I'll just select these all. Control C.

Just want to make sure that it just applies the thing.

Gee, no, I think I didn't copy it for some reason,

but yeah, it does apply the collection instance.

So you can see that this like,

the entire thing is just one object,

vertical stairs,

it's just like one collection that is instance.

I believe, however,

if we were to change anything on the first scene,

this is going to change.

So let's quickly see that.

G on the X by 10.

No, awesome.

So G on the X minus 10.

That's, this is good to know.

So I now have like two of these.

I don't actually, but yeah,

since we just copied it,

then let's just add it to collection.

Stairs.

I'll also add that platform to stairs.

I can see that the number went down by a lot.

So I think it's the platforms that causing it,

like the grid on the platforms has a lot of geometry

and as such, this is happening.

I don't think it's going to be possible

to like optimize the geometry

without actually applying the array modifier,

but we will try that anyway. So,

just make sure that everything is done for,

a little rail here.

Awesome.

And then I have like these stairs already done.

And now I can have maybe cables.

So I'll just select these

and then these, these two.

And I think I had to copy here.

So I'll just move these to a new collection called cables

and I will also hide it and

move these two curves to cables.

Awesome.

I think it can also move these two cables.

Also move the boxes here,

like these cable boxes to cables.

And I now have like way fewer,

but it's all

like these only cost 5 million.

It's good to have that actually.

It's good to have collections that give you a chance

or like it gives you the ability to determine

which is like taking up a lot of the

memory from your model or, you know, from your PC. I should say.

I'll just quickly

add pipes, pipes collection.

Add pipes, pipes collection.

Okay.

I was worried for a second that I won't have them

in-instanced because I need that for texturing our model.

So just make sure that they are in-instanced. Okay.

I will add maybe structure.

Now I have a collection, gold structure.

This is looking good.

What was that for?

Hello? Is there like,

oh, it's just floating.

Okay, just delete that.

Another good thing you can have is that like,

maybe you just Zoom in on that part

and you want to see how they look like

from each of the scenes.

You quickly Zoom in on to the same spot,

you know, in the other scene,

which is like extremely nice.

We can select this top part, move it to dish.

And we can hide it.

And then I can have that.

Do I, I can move them both to the same collection. That's fine. So platforms,

hide. And then,

do I have a collection for bolts?

I don't think I should.

We'll just move that to platforms.

And then we have maybe, what do we call it?

Body maybe.

So just move these two,

maybe that one too,

to a new collection called body.

Then hide the collection.

This is going to body. And

do I add extras?

I don't think I need that bolt anymore. Maybe,

add these to body really quick.

We'll just move them back together if I want to.

And then I can just select that entire top part and call it top.

And I can hide it.

These two were controllers for stairs, I believe.

So we'll just make sure that.

So this one isn't really controlling anything.

Not cables structure. No. No. No.

I think you can delete that bottom.

Just move them both to stairs momentarily.

So just like I have everything organized.

So what are you? You are a cube.

Okay. What are you?

You are also a cube.

I think I deleted all the vertices inside these cubes

and just didn't have them back.

So I'll just hit alt H. Sorry. I think we can do this.

All right.

Now what we want to do is that we essentially prepare our model for like texturing. So

what I usually do is that I just straight up texture

what I want to texture.

But that's if the object is a little bit less complicated.

This is like a mess essentially.

And to work around these is going to be a bit hard

without like losing a lot of time

trying to figure out which is which.

So another quick way is that,

let's actually expand that.

We don't need the reference for now.

I'll do this horizontally

and let's welcome the shader editor back again.

A good thing is that if I add a material

to one of these instance objects

and then let me quickly here show texture

and see if this works. No. Okay.

So I just added a material to one of these supports.

And what I can do is that I can scroll down

until I see view port display.

And if I change that color,

you can see that it changes all the objects

that has the same material linked to all of them,

which is actually nice.

I think I will also try and link the material

to all other supports.

So I'll just select all the supports.

I'll just leave their data as is.

I'll only link the materials.

So I hit control L.

So we usually used to link object data.

Now, however, whoops, I needed something to link them to.

So this is the active now.

I believe the active was that which had like no material.

Yeah, again, I'll make this the active,

hit control L and link materials.

And now they will all have the same material

if we were to color one of these.

And essentially I'm just holding and dragging

to hide and unhide collections.

And you can see that this is all the structure, which is nice.

I'll just do stairs now.

Stairs, however, I think we will need,

you can all be the same color.

We can look at the reference here for a second.

Don't see stairs here.

Some are white and the rails like are,

I think a little bit darker

and some are just all the same color, which is white.

In this case, this is blue, which is extremely nice.

It adds like this,

it adds to the like colorfulness of the object.

Well, I think I will stick with red actually

because it looks a little bit more cooler,

you know, white and red.

I'm just imagining it just like a color

that is like in like early stages.

So nothing too serious just yet.

Can I give a material to that? No, I can't.

That's not cool. Okay.

Do I have to instance the object all over again? Maybe I should.

Okay, I'll just quickly here

add this little guy to a collection.

So I'll make a new collection.

That's called vertical. Then hit okay.

And then I can move vertical to stairs, inside stairs.

So you have another collection under there.

Let's see if we can shift A

and then collection instance,

then we can choose vertical.

It's called vertical and that's it.

There we go, vertical, there we go.

And if I hit G on the Y

and then S on the Y and minus one,

G on the Y again,

just need all the other collections unhidden

just to make sure that I'm doing it right. G on the Y.

No, there we go.

Need that fence.

Or rail to go all the way around. Just like that.

Maybe a little bit further from there.

Not sure why it has that part sticking out.

This is odd.

Is this even something I added?

I don't think so.

I think I just joined it by accident

and it got stretched because,

like, do I even need that?

I don't think I do.

Like, I don't have a vertical element

going at least around that spot.

So I'll just delete that.

Can quickly here check if I actually

have anything that's going.

Oh, it's that rail.

Did it just uncopy itself?

Maybe. It's okay.

I can delete it.

I can go back to scene.

Then I'll just select that part.

Hit Control C and go back in scene one

and make sure that I have vertical selected. Hit Control V.

And it should be, oh, let's move it again to vertical.

And now I can have it here and there at the same time, which is nice.

Instances are just your friend.

Always stick to instances.

Yeah, let's unhide everything again

since we have everything set.

I can have everything look red,

which could be nice.

It'll select everything.

Let's first color these.

So I don't think these will be good in red.

So these are only supports and not the actual stairs.

Having them red will be just too distracting.

So I'll just give these a new material.

I should probably name the materials.

So new, let's call it vertical support.

For vertical stairs.

And let's give them maybe green.

And this should change.

Okay, I don't think we did it all.

Let's just, green, by the way,

is just like, hit Control L, link materials. This will help.

Green won't be the actual final result, of course,

but it's just something to color key our stuff here.

Let's also unhide the structure

and name this structure

just so we know what we are dealing with.

So yeah, let's now select the platforms

and maybe we can have them black and red.

This is completely red and this is white

and this is like bluish gray maybe.

And I see some yellow here,

which also is something we can consider.

However, we can,

these are structure, no.

So do I want to give the platform a different color?

Let's not overthink it and just, you know,

give these a certain color. Oops.

So I'll just select the platforms and the steps.

So the steps and the flights,

all these will have their own color.

So I'll just, U, hit Control L, link materials,

and give these brown, a brown color.

There we go.

And let's name this,

platform, stairs platform or maybe grill platform.

Okay.

And then I can select all these

and then hit Control L.

Real quick here, just to make sure

that I don't mess anything up.

I can leave the bolts for now because it's going to

like take us time to figure out a lot of these things.

Control L once more.

And U and give this maybe black, complete black.

Did I not link things together?

Control L, link materials. There we go.

Did I miss anything?

Yeah, at the top part, just select these two.

Select anything and hit Control L to link materials.

This is looking fine.

I think the sides should also,

let's link that as well.

Control L, materials.

Since they are all linked,

I don't have to have, I don't have like to find

the one I linked everything to.

They're all linked.

So I just, I'm just linking things all together,

which is nice.

I can link everything, maybe with that rail,

maybe that rail, that rail.

You just have the freedom to do that

since everything is linked.

Let's make that active and hit link material. There we go.

The sides could also be black.

I'll select the bolts. No.

The sides, when I said black,

I mean like they could have the same material as the railing.

And it makes sense for them to do so

because as you can see, they're both the same material.

The rails and the sides of the stairs.

This is the same with like that part as well.

You can see that even the vertical stairs

all have the same color.

What could differ, however,

is like the platform or the steps.

But I believe what's going to change

is that like it's going to be a different hue

from our main object or the main color.

So I'll just quickly hit control L to link materials.

And the same for here.

Control L to link materials.

Missed a part here.

I'm intentionally leaving the bolts for now.

Just want to have a decision about these.

Quickly here, I'll just name that stairs.

So this is the material for the stairs.

And if we were to unhide the cables,

no, the structure is something with color.

We now have these both color coded.

So it's nice to do so.

And you'll know why when we start actually modeling our scene

it's going to be a lot more difficult to find objects.

You know, without linking them all together.

Also, you will need to like UV unwrap things

and we will get into that later on.

But for now, however, we've reached the limit of 30 minute

and which, you know, I'm just keeping for myself,

you know, not to make the lessons too long.

Quickly here before I end up,

you saw that when I click here on that collection,

nothing is happening.

The reason is I'm not hitting shift.

If I hit shift, I like completely hide everything else

but without hitting shift, everything is unhidden.

So the only thing that's hiding here

is the actual collection.

I'll be explaining that a little more on the future.

But for now, however, go ahead

and start color coding your objects geometry

because we need to be tethering this pretty soon.

So I'll see you guys in the next lesson.