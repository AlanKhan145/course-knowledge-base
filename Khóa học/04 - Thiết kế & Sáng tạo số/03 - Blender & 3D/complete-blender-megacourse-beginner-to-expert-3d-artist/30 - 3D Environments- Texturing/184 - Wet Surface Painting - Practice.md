# 184 — Wet Surface Painting

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Wet Surface Painting |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 28:40 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Wet Surface Painting** trong pipeline của section.
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

All right, welcome back, as you can see, we will not be working on our scene just yet

simply because in this lesson, we will be looking at, you know, a tip that you might

use in some of your scenes.

It doesn't necessarily have to be all of your scenes, but yeah, so what we will be going

to do basically is adding wet maps.

Now of course, like you can't add a wet surface in a desert area, but this is this, this will

not be happening in our scene.

Maybe in a future scenes, we will do that, but just so you know, it's a technique that

a lot of people use and it looks pretty cool.

So I thought I should show you that again.

I haven't found like multiple ways of doing this, like in a simple or more complicated way.

There's only one way to do that.

So we will be going to discuss only one method today.

Let me turn on the shortcut keys so that you know what I'm clicking.

With the object selected, as usual, we will be adding a new texture.

I'll switch to Eevee preview, add a new texture, control shift T, and then I'll locate my texture. Let's see.

I will increase the preview size here.

Let's actually pick the sandy area. There we go. Yeah, that one.

Okay, so what do we want to achieve essentially?

Well, what we want to achieve is that we need to add a surface and the like, whatever we

want, like we were actually going to paint it.

That is, you know, both high in contrast and high on roughness, sorry, low on roughness.

So it's more reflective.

Basically, and then a little bit more flat.

So if we were to bump the strength here up a bit with this strength, even bumped, what

we would want is the surface to be flat, and we will know each of these, you know, we will

be plugging our mask into all of these parameters, all these three.

So I don't think we will be using the height map, but let's leave it here for now.

So what do we want?

First let's add an image texture and call this, first add a new image and make sure

that it's blank, hit okay, name it maybe mask.

Okay, now if we were, I split the area here so that I can go into image editor, just want

to make sure that when I'm editing, I have things in front of me here.

So if I were to plug this, it's black, if I hit control tab and then switch to texture

paint, I should be painting in white.

So essentially this white area will represent the, you know, the high in contrast.

So whatever I paint is going to get higher in contrast.

Whatever I paint on roughness is going to be less rough.

Whatever I paint on normal is going to be, you know, has less and less height information.

So let's see what this actually, you know, what this should feed through first, you know,

in terms of node work.

So I'll plug this shader again.

So there are two ways to do this.

Like both aren't like really, you know, too hard or too simple.

So one way is to add an RGB curve, oh no, an RGB curve, there we go.

So if we were to add that, you know, to the color here, what we want to control is that

factor by the mask.

And what we want to do is that we want to increase the contrast of the beach area.

So if we add this mask to the factor, then try and play around. So there we go.

So we want to increase the contrast of a specified area based on the mask by, you know, controlling

the RGB curve here.

So this is one method.

The other method is to just mix between them both.

So we can add a mix RGB, yeah, mix RGB.

The only downside with this is that you will be, you know, in terms of color, of course,

like it's going to be simple and roughness and normal.

But let's show you here.

So what I'll do is that I'll plug this in and you'll see why I would have preferred

the RGB curve, because this is white.

What is happening is that this mask is masking the color at the bottom.

And maybe we can like pick a color from here and then, you know, have it have more saturation,

then you know, play around with the like parameters.

I just want that color to be, yeah, just like that.

I want it to be more, you know, saturated and has like less value like that.

So the only issue is like I'm eyeballing it, basically.

It's way easier to use the RGB.

And since we will be using it on all of these nodes, let's just stick to one option.

But again, let's go through the rest of the methods.

If you were to control, you know, sorry, shift D and duplicate that here, what you need to

do is, of course, you know, since this map is being represented by black and white.

So essentially roughness, as you can see here.

So what I want to do is that I want to mix it with black.

So black is less rough and, of course, mask it with that mask.

And then if I were to add this, you should see that, yeah, it now has like less roughness, as you can see.

So again, with the RGB curve, it's going to be easier.

Again, I'm manipulating that.

I'm feeding the color of the roughness map into the RGB curve.

And then I'm just controlling the curve from up here.

I don't have to add any tabbers or anything.

I'm just controlling the, you know, the original graph here.

The last thing we want to manipulate, let's first see how this works.

I believe it should be added before the normal map.

So what I want to do is plug in that normal map and make sure that this is plugged in here.

But before we do that, if we were to duplicate this away, you will see the default color

isn't really black or a darker color, you know.

What is happening is that I have a color.

If we were to switch to RGB, it has the value of 0.5, 0.5, and 1.

So there isn't, I'm not sure, of course, this is like the neutral level of the normal map.

So if you were to add this color to the full map, to the entirety of the map, you now have

a surface that is like not high, not low, it's just, it's all a plain surface.

So this is what you want to mix with, essentially.

Because if you were to mix it with a, you know, higher value or lower value, your surface

is going to pop up or below that surface, your original surface, and you just want everything

to be on the same level.

So we will hover over that color, hit Control C, I think Control V, and now everything is

back to normal, nothing is happening.

If you saw before, you know, I'm now controlling the height of that surface, and now it's back to normal.

So I just want to filter out that, yeah, I want to mask out the area of that surface.

Let's actually try and plug it after.

Let's remove the string from here, yeah, that's the one, sorry, you have to plug it

after the normal map.

And now as you can see, now it's a flat surface, completely flat.

You might want to play around with the values here so that you maybe have something that is less harsh.

You can, of course, control everything with the color ramp.

If the previous result, of course, is better for you, then, of course, go for that.

Again, I can play around with the roughness value so it's not too rough.

Maybe with the color value, and then I can now change the color of the water surface.

Actually, by the way, this gives you a little bit more options in the RGB curve itself.

But again, you can add a color node to manipulate the color of your, you know, water spill.

So maybe you can change this to red, make it a bloody color.

Maybe this is something you can do in the RGB curve, we will see now in a bit.

So hit control Z, yeah, I want to, I want my original color.

See here, we played with that value a bit.

So you can see the change here, and that looks pretty cool.

Now I'm just playing around with the values here.

I think it's only affected by the blue here, and it makes sense because it's all light shades of blue.

So yeah, you can play around with that value.

Again, add a color ramp node.

If you don't like that result, actually let's bump this back to one so that everything looks at 1.5 maybe.

I just want things to be a little bit more obvious.

Play around with the mixing options.

Let's try overlay, although that should be, that's interesting.

Maybe this is something you're looking for, and now you're manipulating the ripples inside here.

Again, if you're lost, maybe just have like a spare normal map at the side so that you

can control C, hover over it, control C, and hover over that second color, and then hit

control V, and everything is back to normal, and then you can just manipulate that color back again.

Maybe because it's overlay, it's acting different.

Linear light, I believe they might behave the same, yeah.

Let's try something like add.

Yeah, that's a little different, and then again, I can play around with the value here.

Mix is the original here.

That should flatten the surface, and then again, I can play with this value here, make,

you know, make it all different.

As you can see, this controlling the, like, how far it reaches out, so I have how far

it reaches out or in the mask, and how, you know, and how it fades if I control it top

to bottom or side to side.

Let's actually switch to value here.

So value controls the, you know, how harsh it translates, and I believe the hue, yeah,

controls the, like, the gradient you're trying to achieve here.

That looks pretty cool.

So while this map is selected, I can just paint water, and then, like, I have water.

So how cool is that?

This looks really cool.

And this is so, like, again, you can do that in many ways.

Let's actually now try the RGB method.

So I will just delete all of that.

Yeah, I don't need it now.

Let's do this, shift D, and shift D one more time.

Okay, I believe we will need a mix node for the bottom area here, but since this is plugged

in, just need the color from this to be plugged into this, and the color from the mask to

be plugged here.

RGB with the mask selected, oh, yeah, let's first control the contrast.

I'm now, like, increasing or decreasing the contrast of the map, oh, the roughness isn't plugged in.

So I like the color of the roughness, like the color of the roughness, and the mask to

the factor, connect this to the roughness.

And I am now controlling the roughness, I can just play around with that value here.

Maybe you don't need to play around with the normal map, so you can just have that result here.

Maybe you want it like that.

You know, again, you can just go further, of course, and just play with this value here.

Let's see how this looks like.

I'm sure it's not going to work as intended, but I just want to experiment here a little bit.

It should do nothing.

I will just hold shift and right click and drag, I need a reroute here from, I just don't

want to scroll all the way to the top every time I want to plug this in, so I just have

a reroute here by doing shift, holding shift and right click and drag over a noodle here, a noodle.

This is going to make it easier for me to have a reroute that I can plug from.

So if I try to manipulate that, yeah, I can't control that with the RGB curve, simply because

I believe it's like black and white, and it's not going to have, let's actually look out. No, it's not.

It's not manipulating anything.

Maybe if I do, if I manipulate the blue here, let's see how that looks like.

Still though, it's not going to be as effective as mixing it with the color here.

So as you can see, it's not doing us that good.

Maybe actually if you, oh, that's, that looks better.

But again, we had a little bit more control here.

So let's see if we can, like actually delete that tabber, no, we could actually mix it

again with like, now it's being flipped, but I can see that we are having a little

bit of, you know, control here.

Let's flip that.

So we have a little bit more control in here than with the mix node over how much I'm flattening

the surface, simply because if we were to use the mix node, let's actually not delete everything.

Let's just copy it back again and hit shift D. And instead of these, I'll just shift A

and the mix, no, mix RGB. There we go.

And I'll just keep the reroute here.

It's so convenient to have it.

So I'll just plug that in.

And with it plugged, I'll hit control shift D to maintain that connection.

Control shift D again to maintain that connection, connecting the colors, color of the roughness

and the color of the albedo or the color map, and then plug everything in.

Of course, I will not see any change because this BSDF is not plugged in.

So I'll just set up everything first and then plug it in.

Control shift and click.

And now, as you can see, let's first change the roughness here to something black.

So it's a little more rough.

Change the color here to a dark brown, you know, like a beachy, you know, a beach area.

And as you can see here, it's obvious that the wet area is higher.

It should be obvious in the gradual refraction going to the bottom here.

But this is because we don't have this adjusted yet to the intended color.

So as you can see, when it's just one, now I have, by default, it's set to 0.5 and all.

So by default, you have everything set to the values you want to play around with.

So I have a value to play with, which is so cool, and I have a saturation to play with,

which gives you like a little bit more gradual, you know, change to the water.

It should be obvious if I set the value to 1.

So this is the lowest and this is the highest saturation.

This is low saturation.

So again, you can just play around with that.

I'll just hold shift while playing with that value.

You know, I just don't want it to be sharp.

Just playing around and maybe you set up this first.

I'll hit control here to, oops, I selected the wrong map.

Again, always make sure that you have this map selected and you'll see that mess.

So I'll just hit control and while holding control, it's actually erasing or not really erasing,

but just adding the second color.

I believe if we were to hold control, yeah, it's going to paint a red and you don't want that.

Just make sure the second color is black.

Maybe if you're painting in different texture color channels,

then yeah, you'll have to set that into a different color.

But yeah, now that we have everything set up, we can just start painting.

You can fill it up.

I can have the strength value to be, you know, not too extreme,

but then make sure that I'm at the top.

Then it's not going to be like immediately as strong as this one.

Let me set it a little bit higher to 0.7 maybe.

So we have this sort of, you know, I have to be from the front view for some reason.

You can actually paint here. Let's see. Texture paint. Paint.

As you can see here, it's a little easier to do that in here

because when you are on a steep angle,

it blender just, you know, doesn't register your painting strokes.

So maybe you actually want to maintain a certain angle and just start painting here.

As you can see, that's why I have the image editor for two things,

to make sure that I'm selecting the wrong map and not the wrong,

the correct map and not the wrong map.

As you can see now, I'm on the roughness and if I were to paint,

I'll just mess up the roughness.

Then you'll have, you know, to maybe import the same image again.

And if like your file is like actually transferred from one spot to the other

and you don't have the maps with you,

you will have a lot of issues into how you would adjust that mapping again.

So yeah, I have the image editor here for two reasons.

First reason is that to make sure that I'm selecting the correct mask.

And the second reason is that if I were to paint while on a steep angle with the plane,

I can just, in the image editor here, as you can see,

I'll just select the image editor and by default it's view.

I have paint mask, I select mask and then I start painting.

And now you can see the change we're having here.

So this is close up to the camera.

The camera is here.

Yeah, there we go.

The camera is pointing at that direction here.

Now I'm just painting.

I have it set to 0.7.

I can play with that strength.

I believe by default we don't have a lot of brushes to work with except this and fill.

But yeah, like we're just playing around here.

We're not trying to, you know, be too much detail.

I'm just having this, you know, I'm just having fun painting the surface here.

So again, maybe this is something you want to play with, you know,

just making the gradual change here more gradual.

This, of course, applies to objects like it doesn't have to be a 2D plane.

The setup might be different in terms of how you map your object,

be it a plane or like a 3D object.

You might want to switch to object or generated or UV map your object

before playing around.

So, yeah, this is it for today.

Next up, we'll be trying to actually manipulate textures without masks.

We will just be adding some different node setups here, even nodes we used before.

And you'll see how we can, from one texture, bring in like six,

maybe 12 more textures to play around with.

And of course, the variables are a lot.

So you can actually bring in hundreds and hundreds of textures to your setup.

Like, for example, you know, here quickly, I'll just switch back to here.

I will select those, Shift D.

I don't need these or the mask or the reroute.

I just need a normal color here. Whoops.

Need to resize that back.

I just need the color here to be the color, roughness into roughness,

normal into normal.

Now, I'll just plug that in.

This is like the default texture we had in the beginning.

So maybe we can add a color ramp and make this constant.

And then it's black and white, essentially.

So what's happening here is that, wait, this is not the sand texture I had before.

Well, it technically is.

If we were to copy that on the side, make sure that it's a different, sorry,

a unique material.

And I'll hold Alt to remove that.

This is the original material and now it's like something else,

like maybe oil and snow, maybe, or stone and snow.

I can, of course, add in more tabbers to make them have more color like this.

Of course, because the texture doesn't really have too much color to play

around with, I'm pretty much limited here.

So if I were to add a gray color and play around, there you go.

So I have a shade of gray, a shade of black, and the white, of course.

And we will be discussing this more in the incoming lesson.

So with that said, play around with your mask.

Try this making your area a little bit wet and play around with it.

Play around, try actually doing that on an object.

I've tried it myself.

I didn't really have good results.

So I thought I should only showcase that.

But yeah, you can always do that in Blender.

Of course, everything in Blender is a little bit limitless.

It's only limited by, you know, your experimentation.

So play around and stay around for the texture manipulation.

It's going to be very cool.

I promise you that.

So with that said, keep on playing around and see you next time.

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
