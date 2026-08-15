# 233 — Using Images as Environments

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 34 — 3D Environments: Lighting and Camera Settings |
| **Bài học** | Using Images as Environments |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 24:01 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Using Images as Environments** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
- environment art, asset assembly và scene organization
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


All right, welcome back.

This should be the last lesson in this chapter.

What we'll be doing is we will add sky.

Since we got rid of the HDRI, again, we might have been able to use it without actually

using its light essentially, because what we did before, this is the unactive, anyway

I have the use nodes turned off, so playing here wouldn't really change anything.

But then again, I could have just changed this go gap into duplicated that once.

And as we saw before, I could have just brought in the light from one HDRI and then just hidden

it by a different one.

I think I've done this below here.

So they're both the same HDRI and then we could just, we've been into that before.

So yeah, I can just show rather than this go gap, then might have like an HDRI that

has clouds in it.

But however, since we're not using this to bring in lights, what we could do, I might

have spoiled it already, is that we can bring in a plane that has the clouds in it and we

can just essentially take the clouds part and just show it inside Blender using it as just a plane.

We can see here a lot of images essentially that look quite brilliant.

So what you need to do is that we want to match the sky essentially, let's actually

control B everything and just switch to render view here.

What we want to do is that we want to match the lighting.

So essentially we need the lighting from one of both sides.

So something like this wouldn't really help.

I've actually collected some, a set of examples here.

So let me just quickly find them out.

So it's these three.

So this is one I tried to use and it just seemed a little off.

Like the angle of the camera isn't really, you know, wouldn't really match my scene here.

Again, I could just manipulate the texture of the image here, but then this isn't really

something I would want to look for.

This seemed to be the most convincing simply because it's like in a desert and there is

sort of this like bleed of red into the clouds.

It might not be obvious at the first glance, but if you were to pick up the palette, like

it's very obvious here as well that there is this tint of green sort of.

It's not that strong, but it's there.

And by differentiating between the both at the same time, you get to see that difference real time.

And if I switch to something like this, this is even like more extreme and you get to see

this like these clouds more obviously.

What I'm looking at is, again, two things.

The first thing is the sun.

Where is it pointing at or where is it coming from?

And the second thing is the shadows.

How hard are the shadows?

Like in these three examples, they're all pretty good.

They give like the soft shadows, not too harsh.

And then you can just see that the sun is probably pointing from that direction because

you see that like it's stronger here, bleeds into that face.

So like if the sun was in the back, this face would be in shadow.

So all these shadows are because of the clouds.

Here you can see that the sun is coming from the side and the shadows are hitting that side.

Again, like don't really bother from which side, if it's coming right or left.

But what you need to pay attention to is that if it's coming from the front or the back,

because this is essentially not possible to fix within Blender, but if it's coming from

one of both sides, that's easy to fix.

We will just flip the image.

Here the shadows are striking sort of there.

This is not really...

You can see the shadows here.

So the sun is pointing probably from that direction, is giving up this shadow for these rocks.

So this is something we could use.

However, I picked this one.

Again, this might be something I might have not mentioned at the start, which is references

from CC zero websites, just like Unsplash and this is called PX here.

So yeah, these are nice images, extremely beautiful.

The use of these is just unlimited.

I searched for desert cloud.

I believe I got all of them from PX here.

You can see the name of that image, landscape, sand cloud, desert dune, sand dune.

You can just search for that name on the PX here.com and you'll be able to find the image.

So what do we want to do inside Blender?

Now that we determined the look of our plane, we can just now go like just quickly switch

this to object and I'll hit file, go into assets in reference and I tried all three

of them, but this seemed to be like the best of all of them.

You can do multiple things.

Of course, you can just click here, go in and adjust some settings.

But something we will be doing anyway is that we will make it an emission shader.

So import image as plane, and then you'll see that this is being plugged in to the emission

and then from the emission to the principle.

There are a few things we need to change here.

First of all, let me just bring that in.

I think we could either hide this or we can use an emission shader.

Let's hide it for now. Probably not.

It looks a bit too ugly.

I'll just move things so that you can see what I'm doing.

So there are a few things you need to change here.

First of all, let's look at the plane.

We might need a vertical area here that shows the 3D viewport.

Where are you image? There you are.

Here I should probably turn on textures so that I can see the plane. There we go.

And now I can just scale this up. There we go.

Maybe move it to place. Scale it again. G on the X. Scale it.

We can maybe rotate it on the X.

This is quite nice.

I might need to flip because the light is coming from this side and you can see that

the clouds are brighter here.

So what I will do is that I will scale it on the X and hit minus one to flip it.

You need to pay attention to one thing here.

If I hit Q and face orientation, the face has a blue and red.

The blue should be facing the camera.

If you don't know how to activate the face orientation, just from the top here, just click in here. There we go.

This is more obvious.

Click in here and no, sorry.

Click on solid face orientation.

I think it's because it's matte cap.

It's not showing up.

Oh, it's turned off. My bad.

It's under this outline, viewport outline, face orientation, but because it's turned

off, you will not be able to see it.

Again, I have it set to a hotkey, which is Q or my quick favorites.

You can turn it off and on.

I don't think it has a shortcut. It doesn't.

You can just set it to your viewport, sorry, your quick favorites.

Now if we were to, I'll just hit control S and let me show you how it's going to look

like without, let's see how it's going to look like first.

I switched to the CPU here.

I think we don't need that anymore.

It's taking up from the CPU.

So let's just stick to that.

This is the default here.

I haven't changed any settings.

A lot is coming from the side.

I could probably scale this.

I don't really want to scale it, maybe rotate it on the Y.

I mean, I can still replace it if I would like to, but let's just talk about the settings for now.

First thing is we need to change something here, which is shadows.

You can see that a little bit of the light here is sort of striking that face from the back.

So it would make sense that it's adding some shadows that we might not need in here.

So what we can do is that I'll switch to the material properties, then scroll all the way

down, do the settings, and then under, I think it's, let's search for it.

So search for shadow.

Yeah, it's settings under viewport display.

I'll just turn shadow mode none, and I think we should switch this to opaque so that it's

not casting any shadows.

I'll search for shadow again because we might also turn it off in here.

So under the object properties, shading, not shading, visibility, and then turn off

the shadow so that we could make sure, we should make sure that it's not casting any

shadows on our scene.

So that's the first thing we should do.

Now we can have a simple setup here that will change things a bit.

You can see that this is a bit off because it doesn't have that yellow tint we would

want it to have essentially.

So what we could do is we can, let's see here.

So we have this image, okay?

First of all, I can add a bright contrast to it.

So if I set this to one, you can see that I'm changing the contrast 0.2, just want it

to be a little bit more profound, minus 0.2, 0.1.

Let's make this back to zero.

And then what we could do, what if I want to color this, like give it a certain color?

I can, of course, like, let's see, the color here, I can have like change this to a multitude of options.

I can essentially mix it with something else, which, you know, this could be like the quick and dirty way.

I can mix this with the yellowish color here and then like call it a day.

But then what if I would like to have more control over it?

So what we could do, we will be using Amex RGB, but not now.

What we can do is that we can search for an RGB node.

And now this, this is, you know, much easier to control.

And this provides essentially a hue saturation here.

So if I click on here and just pick a random value of yellow, I have like these values

that I could copy into here.

So let me just show you that.

So I have a hue of 0.1, saturation of 0.9, and then a value of 0.7, roughly speaking.

So we can just change these here.

But what if I want to like directly manipulate these colors into there?

Well, we have something that we did not use before, which is the separate hue saturation value.

By just plugging that in, I'm just feeding this into like these certain numbers I want to achieve.

And I could just plug that into hue, plug the saturation into the saturation and the

value into the value.

And all of a sudden, I just have this be plugged in.

Of course, I can just control how strong it is by bringing up and down this factor.

So I'll just make it 0.4 maybe, and then try and play around with the colors here.

Now you can see that by moving this around, of course, black wouldn't have the strongest

effect, but now it's nothing.

Now it's the color.

I'm moving along the top here.

We can probably make this 0.6, and let's turn this back to 0.

Let's just play around here, see if we could probably achieve something we like.

Let's do something here.

I'll just plug that directly in and mix between these two and make it probably overlay, so

that I would like to maintain the bright and contrast values.

So this is like 0.1, I could see the depth into this image.

If I would like to, you can just maximize that value and play around here, and you can

see that I'm changing that value there.

This is starting to look better.

Now I get this yellowish tint into my color here.

You can play around with the colors here.

This is a bit too strong.

I should probably turn that down, and as such, I can just get to introduce these different

effects into my scene, essentially.

I'll probably be more...

I might approach this a bit differently when doing the other scene with the stuff we sculpted, the rocks.

Then again, this is just controlling the value.

I think overlay is the best we could have here.

I'll make this 0.2 and brighten this up.

We have...

Let's make this overlay.

That is too dark.

Let's make this 0.3.

It still needs some adjustment, but I just wanted to show you that method for now, however.

Let's keep it like that.

Now that we've added this, we could also add something else, which is a volume, which represents

the fog, essentially.

What we could do is that we can just scale it and scale it and scale it even more.

Let's make sure that this face goes all the way there.

Then Ctrl Alt X, scale it on the X, and then scale it.

Let's give it a volume.

Is the camera inside? It should be. It's not. Okay.

Scale it with the exception of the Z.

Now it's inside.

You can see that the plane here is giving a little emission, which is, you know, if

you would like to completely absorb it again, you can just add an area light and just match

it with that light.

S on the Z, S on the X, G, X.

I just wanted to roughly just match my scene.

I don't want it to be too big.

I'll hit Ctrl A to apply everything.

I'm going to hit Ctrl Alt and X to make the origin to the bottom and then give it a new material.

I'll just hit Shift A and search for a volume scatter node.

As soon as I plug that into the volume, we will need to lower that down.

These god rays are just a beautiful addition.

And always, they are always a beautiful addition there, which is extremely nice.

You can see these touches of colors here and there.

This is just super cool.

Might want to decrease it even more.

About five.

So that we could see the sky in the background.

This is looking beautiful.

It's quite demanding on my PC, but it's absolutely worth it.

It really is worth it.

Let's increase it a bit because we might have lost some details of the god rays there.

This light isn't really inside my scene.

Let's G, Z twice and move it in and see if this is going to make anything crazy.

Let's hit Ctrl B here.

Ctrl B to just focus on the ground here.

I'll probably bring in a little bit more of the scene.

This is looking extremely cool.

I just absolutely love the god rays in there.

This was 1.0.

1.0.

I think it's what we started with.

0.09 or 0.75.

We'll just leave it like that.

I'll hit, I'll switch to solid view here.

Then let's try that in the new chapter.

I think that's a wrap.

What we've learned today is that we could actually use planes instead of HDRIs.

Nothing that they are less demanding or have a better performance.

They provide essentially much better controllability over your textures or over your scene.

Just rotate that on the X even more.

It's as if these are more and more towards the camera.

It makes more sense.

Probably move it Y twice to raise things up a notch.

Wow, this is just extremely cool.

I have all this space of clouds to play with.

I can probably stretch it on the X a little bit.

Then move it on the X to have more of that space.

Then again, this is just good enough.

I need that little part because it's interesting.

I can probably rotate it on Z. Z twice.

Z twice. X twice. Y, sorry.

This is looking pretty cool.

I have the setup.

We learned how to add planes that could act as our background essentially.

We learned how to actually control them with a better, like we have.

We could actually color that plane.

Again, this applies to everything we've done before in terms of the texturing chapter.

We also now know how to quickly add a fog here.

I don't think you should go too crazy about the settings here.

You could add some noise and then start adding some details.

If I did, I will, of course, inform you about it in the future chapters.

Now, however, what we want to learn about is how we could render our scene or render our camera

and then move into compositing.

This might be the end of the chapter.

Go ahead, play with some planes.

Find something that suits your environment or scene and play around just with the settings of it.

Make sure that it's emissive.

Again, change these settings and make sure that it doesn't cast any shadows.

Add some fog, play with the lighting, play with the fog as well.

I'll see you guys on the next one.


