# 013 — Environment and Scene Structure

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 03 — Building the Fantasy Cabin |
| **Bài học** | Environment and Scene Structure |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 26:55 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Environment and Scene Structure** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- environment art, asset assembly và scene organization

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


Welcome. In this lesson, we're going to join everything that we model into a 3D scene.

We're going to start with modeling the terrain and then learning about some composition guidelines

in your camera so you can better set up your environment.

So the first thing I'm going to do is to set my camera view. So I'm going to go here to

collection. If I already have this selected, I can press 0 on my numpad to see the view

of my camera. So let's increase the size here by doing Ctrl and Spacebar.

You can do this to enter each viewport. So like this.

And now you can press Shift and double quotes, I guess.

And you can move this around, up and down, with key E, just like a game.

So I want to kind of set up the distance, the view that I want for this image.

So maybe like this, maybe this side here. And more or less the view that I want of this,

just to get an idea. So I want that my camera, if you press Ask, will count.

Oops, I pressed Cancel, so let's go back. So here I want that my little cabin to be the focal point.

But I also want to create some depth in the scene. So maybe something like this,

where I can see the path coming down this way. And then I want something on my foreground,

so I can have a better look on the lanterns that I model.

So this is more or less the view that I will have from my little cabin.

So now you can see that my camera is set lower than the zero.

And I'm going to use a sky texture here, so I need to raise this up.

So I'm going to select everything with A. Let me go back.

Actually, what I'm going to do is select everything that I have here.

Let's see, all the objects. I'll click here and select Objects.

And I'm going to add here an empty with blank axis.

So now I can go here, select Objects, and I'm going to click and drag,

pressing Shift to parent this. So now I have everything under here.

So if I select just empty and I move around, everything comes with me,

everything that I have inside the Fantasy Cabin.

So I'm going to rename this as Fantasy Cabin because I'm not going to change anything right now.

And I don't want to move this, for example, and then I get lost.

I'm going to move everything at once, so I can just select here.

I can even reduce this and just select this part here. For the lanterns, we can leave separate.

So I'm going to select this one. I'm going to select our stones and our lantern and our camera.

I'm going to move this everything up. I'm not going to be able to do this because I was in the camera view.

Okay, so we rose 15 meters. Let's delete this light here.

Okay, so now let's add our terrain. I'm going to add a plane.

Don't be afraid to add a big terrain. Now I'm going to subdivide it by a lot.

I think this is okay, and now I can use a modifier to add more details.

Now for this, I'm going to use proportional editing. I'm going to grab these two here,

and I'm going to see how much I need to drag here. I want to have this little effect of a house on a hill.

I'm going to grab these two. Let's just move. Let's see how it looks.

I'm going to use more or less, try to touch without overlapping too much.

Yeah, I think this is okay. Let's see how it looks subdivided one more time. This is better.

I'll shade flat for now just so I can have a better understanding of how my geometry,

because here I'm going to use this curve here to add my pathway.

I want my pathway to curve down like this. It feels like it's really climbing up that hill to reach this little house.

So let's do that. I'm going to duplicate because I don't want to apply.

Apply is just so I can reach this exactly at the middle. Perfect.

So now I can delete these edges, and now I have this perfect line here.

So I can go here and deselect the one that I'm going to keep. I think this is enough.

Delete the vertices. Okay. So now you know what we're going to do.

Add an array using this. Curve. So now for this one, I already have an array,

and we're going to use the curve. This curve right here. Curve pathway.

Curve pathway. Nice. So the same problem, same solution that we did before.

Let's go to item. Go to our curve and tilt it 90 degrees.

Okay. Now we can do a little offset so it doesn't fall flat on.

Actually, let's see how it looks before. My computer is kind of struggling a little bit with all of this,

so I'm going to disable my subdivision and my bevel and my displace for now.

This is perfect. Right on frame. And I don't think we will need to...

Actually, let's adjust this. Oh, I have 43. That's why maybe my computer was lagging a little bit.

I think we can do 13.14. I think 14 works well. We already have a little bit of variation.

I'm just going to go in my curve. Let me see. Yeah. This one, and I'm going to press G and G.

Oh, and I'm going to just move this. Let's see if nothing else... Let's try not to...

Move it down. Let's try not to bring this curve too much.

Let me see. Let me activate bevel, subdivision, and displace.

What we can do to not find tweaks like this, I can go here to... Let's first disable this, just subdivision.

Let me see how much I have here. Three. Let's leave it one, and then in the render, we'll still have three.

I can go here to curve pathway. Let's move this, and I can add a modifier called shrink wrap.

I will select my object. I lost everything. I'm going to go to project, on surface. Let's see.

Negative and positive. Now, I will apply. I think when I applied it, it shrunk.

Okay. Now, let's see. I'm going to add a new hill in this foreground here.

Maybe coming like this because I want to make another pathway where it comes towards my camera.

Let's save this, and let's save a backup too of this plane.

Terrain first. I don't want to lose this part here. I don't want to change it.

I'm going to duplicate. Let's move this to a new collection called terrain. I'll just backup.

I have this terrain. I don't think I created a collection for terrain.

Yeah. I'm going to add another hill. I'm going to actually copy this. Let's see.

I'm going to optimize this a little bit. I'm going to delete this thing that we won't use.

Let's see. I'm going to basically copy this, and we'll have another hill here.

I'm going to make this a little bit sharper.

This and this will move this way, but I kind of want to create.

I'm going to use these lines as my path. Let me just analyze the direction.

Maybe this from here to here.

I'm going to activate a few camera lines to help me with this.

If you go to the properties of your camera, you can go here at safe areas, center cut.

Let me see. Here is basically the margins, but you also have another.

It's not this one.

You put display composition guides here.

You have your thirds. You have center, diagonal, and triangles.

I'm going to use the center and the diagonal for now.

This will help me to composite. I want my door to be here at center.

This is kind of following this part here.

I want to create another line here.

Maybe I want this to feel that I'm a little bit lower.

Just to show that part there.

This is a little large.

I need this to be a little bit closer here.

I want my camera. Let me see.

It's lower. I want to adjust this 90.

This doesn't matter.

I can also tilt.

Instead of here under shift, I can shift up and down instead of moving my angle.

You can move your angle a little bit.

You will get some distortion, so you can do it like this.

I'm going to do this a little bit more. Like this.

I will use this line for now.

We will adjust as it goes.

One, two more.

Just in case we change.

Actually, let's just add.

I already transformed. Let's just add.

Now, we just need to adjust the tilt. Okay.

I'm going to move this a little bit.

I'm going to move this a little bit.

I'm going to move this a little bit.

Now, this terrain is a little bit sloped.

Let me think about it.

If I slope this.

I don't know if I like this.

It kind of feels like everything is tilted.

Maybe it is too much, but maybe if I can reach an 85, it will be okay.

I'm actually going to try to adjust this part of the terrain.

Just so I don't have a little bit of angle.

It's good. Not too much.

It's even kind of nice if you have some of your terrain overlapping.

Not so much, though.

Okay. Now, we have our pathway.

We are only missing the flower that we're going to add and the lantern.

Let's go to the lantern.

I kind of want to do one on one side, one on the other side, maybe.

I'm offsetting like this.

I will need to offset more, so maybe I'll have just some here. Okay.

Let me see if I can get away with doing this.

Maybe just for the first one.

Like this. Let's move this one a little bit.

Let's also bring this one a little bit closer.

Again, this is going to show just a little bit.

Now, we don't know what's happening down here.

Maybe we have a curve.

So, if you want...

So, let's go there.

If you want to come here and move this from side to side, maybe you want to connect this.

The way that we have it right now, little squares, is going to be a little hard.

It's going to look a little bit weird.

If you do really small, maybe you can get away with it.

But, yeah, if you have a curve, this inner part needs to be smaller than the outer part.

So, this is best when you're working with geometry nodes.

You can have a better control.

Or if you have a different origin object.

Let me adjust this. This is a little bit overcrowded.

Overcrowded right here.

Yeah, it's because we have a difference.

Let's see our curve.

Maybe if we have some...

Let's go by distance, yeah.

So, if we go by distance, we have exactly 1 meter.

We're not going to change this, so... 1.05

0.02, just a little bit. 0.01

Okay, this is better.

Our other lantern. Let's see. This first one.

We can play around a little bit with this height.

Okay, so I want my third one right here.

Let's select this one.

Remove the array from this one.

Because my origin point is kind of weird.

So, I can copy. I'm copying as an instance.

Maybe I have too many lanterns here.

I have this bottom one right here.

I have this one here. Let me see.

Yeah, I think this one...

I think this one is kind of in the way more than this one.

This one even makes sense.

It could be a little bit lower here so it doesn't collide.

This one is kind of getting under my skin.

Yeah, let me disable.

But I'll leave it as it is.

I'm satisfied with this for now.

So, now I'm going to add our flowers.

So, this is really simple.

I'm going to add a circle mesh right here.

And I'm going to face.

Now, we have a system that is called particles.

And if you go here under particles and add, you have a particle system.

You have an emitter that will depend on your timeline or your hair.

You can see that you have a lot of here.

So, you can go under render.

And instead of path, you choose object.

And now, you can select an object that you want to instance.

So, here we have the flowers.

So, we can go here and select this object.

Now, you can see that we have a bunch of flowers.

So, let's reduce this by a lot.

Reduce the number.

And now, we need to adjust the scale.

But first, we need our global coordinates. So, let's see.

We need to go under here and select advanced.

And now, you have the rotation control. So, let me see.

Maybe I need to do object Z or global Z.

Yeah, I think both of these are fine.

Let me just reduce the scale a little bit.

So, now, they are kind of correct.

They are still tilted.

Let me see what I can do about it.

Yeah, let's leave them tilted.

So, now, we have a face and we have randomized face.

And this is crucial for you to mimic

because we only have one flower.

So, we need to randomize them the most.

Let's reduce the amount.

We still have too much.

Just a little bit.

And with face randomized and also a rotation,

our scale, actually, our scale randomness,

you can get away with just one flower.

So, now, I want to add them on the first plane.

Let's rotate this so this can show.

And I'm going to add a depth of field.

So, this is not going to be in focus too much.

Maybe we have too much flowers.

So, I'm going to add one here.

Let's add flowers.

Yeah, let's leave it here.

I'll add first here and let's see where it looks good.

We can change this as we render too.

Another one.

Oh, actually, let's duplicate this for this one here.

And I'm going to adjust the amount.

I'm going to use the same one.

This is cute.

Let me just scale and see.

And then individual origins, rotate, looks like this.

And I will go here and add a mirror.

Oh, yeah.

So, let's adjust the origin to be closer.

Oh, and also the rotation.

Autumn Swarms, set origin to be closer. Okay, apply.

And adjust the number.

Okay.

Even though we are looking from a bottom-up perspective,

I'm going to add a few more mountains here just to compensate with the sky.

So, let me just drag here.

So, what I'm going to do right now is going to be crucial

when we start to render or see the materials.

I'm going to add another viewport here.

Just so I can have one here at my camera and the other I can move around.

So, I'm going to do this in this one.

I should have done this earlier actually.

I'm sorry about that.

So, again, I want to add not higher than my little house

because I want it to be focused,

but, you know, just a little composition here

so you can see that something is happening out here.

Oh, so this is very important.

So, your camera in the viewport has a limit,

and I think I showed you before.

So, if we go here to view, we have a thousand meters,

and you can see that it's starting to clip right here.

So, let's increase here and see what happens. Okay, nothing. Let's go here.

Nothing, because this is our camera.

This was a test.

So, we need to go here and adjust your clip start and your clip end on your camera. So, let's go. Let's go.

Well, I placed this very far away.

Oh, it's not in view.

Okay, that's it.

Okay, so you need to keep in mind that this is your viewport

and this is your camera.

So, your camera also has a limit.

If you can't see it, maybe you should adjust on both of these.

Already doing a quiz.

From the front, everything nice.

From the top, everything crazy.

But that's how it works.

So, you can see here.

Let's deactivate this.

This is looking pretty cute.

Actually, I'll name this flower instance. It's better.

And I'm going to deactivate it,

deactivate it, and I'm going to add a flower. Flowers.

I'm going to drop this here.

And now for terrain, it's already in terrain. Perfect.

Let's leave the flower instance here.

Everything organized.

Okay, so this concludes our scene composition.

So, next lesson, we'll start working on materials.

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
