# 179 — Blender Shader Approach Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Blender Shader Approach Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 18:30 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Blender Shader Approach Pt. 1** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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


Welcome back. Before we started, I would like to grab your attention again that at the time of

recording this course or this lesson, Blender 3.1 has been released, so I updated to that.

If there is any change that might be affecting our project, I will point it out.

As far as I know, besides the many things that have been added, this is the only thing that you

might not see in older versions, which when you pull a node from a node socket, you get this plus

icon that when releasing it, you get to search for what you can do with it.

If I click reroute, I will have a reroute that I get to position, and then it's a reroute

essentially. I can position it, pull another socket from it, and etc.

But again, if there is anything that has been changed, I will point it out in the lesson.

Let me activate the shortcut so you can see what I'm doing.

The first thing we try to do is break repetition in the shader.

We're essentially interacting with an image.

You have channels or maps that get fed into this BSDF shader that gets fed into that material output.

What we're looking into today is trying to get as close as possible to this result using shader

editor, provided textures like these textures and not actually images.

What we're going to do today, of course there are pros and cons for this.

It might be very difficult if you are not familiar with nodes. I'm not going to pretend that I am.

They work in some situations simply because you get this free resolution.

It goes up to whatever you want, and they don't take up from your memory that much.

While using image textures, as soon as you go to 4K, things start to get a bit slower.

It's not going to be possible for every situation simply because Blender itself isn't a texturing or

material painting software.

It's essentially a software that is much better in the 3D realm or spectrum.

What we're going to do now is select the man with the plane and isolate them both.

What we're going to do here is add a new material. Press new.

To make sure that this material is the one that shows on plane, I'll just remove that material by

pressing that minus button.

The material itself isn't totally removed. You can just go back and click add it.

Then it's going to come back again.

Let's have it called something here.

Of course, as you can see, this is not a final result.

If you would render this, you'll be working a lot on it on Photoshop and post-production.

This is not the texture that we'll be using in our scene.

Again, I'll just remove that and add a new one.

Actually, we already have one, which is material.

We will leave the BSDF.

What do we have here?

The options are a lot, essentially.

We looked at the brick texture.

We also have something called the checker texture that looks like that.

It's squares, essentially.

When connected to a mapping node, if it's generated, it sort of interacts with height, like certain height.

I'm not sure really how it works, but as you can see, it's like whatever that has a Z value, it's

just getting affected by that.

It's so obvious when you're scaling it up high.

Of course, if you connect it back to objects, it's going to be more uniform, but it's still affected

by the topology here.

What do we have here?

We also have gradient texture.

This also helps with mixing texture in different ways.

We'll be looking at this node when mixing objects, essentially, with textures, ground textures with objects,

because you want this gradual descent of the texture from the bottom to the top.

We'll, of course, add a noise texture so that we don't have this sharp transition.

Yeah, we'll use it.

We'll be using it in the future.

Magic texture is something we also look at.

It looks something crazy, like it looks something like that.

This is sort of a noise texture.

Personally, I prefer using that maybe with a wave texture to have some cool-looking splash of color.

It gives off that look.

It does provide that look.

Essentially, using that...

Of course, we're not using a certain...

It's not limited.

These are not limited to each other.

You can use any node with any node by mixing them, as we saw before, and as we're going to see later on.

Always feel free to explore these textures.

This is my favorite, my absolute favorite.

It gives a lot of options to work with.

If you switch to 4D, you get that seed value, as we mentioned before.

There's a lot of control over this than the normal noise texture.

The only difference between this and the noise texture is that you get a color socket,

while you only get a height socket here, and you don't get any color.

This is the noise texture, of course.

We also have Voronoi texture.

We used that before to break the repetition in our texture.

We have white texture.

You can also look at the noise texture as well. No, let's...

Let's connect this to the mapping node.

See how this looks like.

Yes, it's a bit more obvious here.

This could help with making maybe small specks of sand or something.

But it does work. It does provide some results.

Let's see if we can just generate it.

I'm sure it shows up in the recording as well.

Again, the use of these textures isn't really limited to one.

We would be mixing all of them all together.

For today, however, we'll be looking first and foremost at how we can replicate a sand dune

or how to make a sand texture with these nodes.

Again, using these nodes provides you with that infinite resolution, essentially.

Let's delete everything.

Let's leave that as well. We can bring it with a shortcut.

Let's bring in a wave texture.

Because this, by default, looks like sand dunes the most.

Again, always consider using a color ramp to control things up a bit.

If we would add this and add a new socket, bring it back, and make this color black, we're getting more waves.

I can just make the waves a bit more sharp.

Maybe I can make it sharp from one side and not the other.

You get the idea.

You can just keep on experimenting with this, make this white.

There we go. It should be something like that.

You get to gradually...

Let's make it on the other side.

Oh, we flipped it. There we go.

If we distort it up a bit, added some distortion, we can get some results here as well.

Look at that. Now, if we add this to the color...

Oh, no. We'll be adding this to something else.

Now, let's look at something called the bump node.

We'll search for bump.

This is how it looks by default.

If we would feed that color to the height, it's going to look like that.

I wouldn't really recommend looking through it, though.

You'll always have something before the bump node to look at through.

This is much more cleaner to look at.

Again, feel free to do that.

Again, what I'm doing is Ctrl-Shift and clicking on a node to preview it.

If you hit on the PSDF itself, it's going to be connected to the material output directly.

Then if I apply this to the normal... Ctrl...

If I plug this to the normal, after some loading, we get that effect. There we go.

You might have a sharp end here.

That's because you have your node set up in a way that the sand dunes aren't really taking its time to form.

This looks absolutely amazing.

Let's add a color here.

If you would add a brown color, that looks something wet.

Actually, let's bring the roughness a little bit down.

That looks like sand from maybe a wet area.

Let's decrease the saturation a bit.

Go deeper into color.

Make it a bit dark.

That looks good.

If we would change the scale to something like this, of course this feeds into the bump.

That by itself changes as well.

As you can see here, we're looking at it like that.

If we hit Ctrl-T, it's now connected to the generated.

It might also rotate around the terrain.

Connect it to object.

Unless, of course, you want it to go around your terrain.

There you have it.

If we were to lower this down, maybe rotate it on the z-axis.

Of course, if you would like to maintain...

Oh, what am I rotating?

Oh, that's the scale. My bad.

If you were to rotate this,

if you want to maintain the look of your terrain,

you don't really want to rotate it.

Maybe your composition is set at a certain angle

and you just don't want to mess with where the topology is,

of course consider rotating your texture from the mapping node.

You can rotate it up a bit.

Let's add a subdivision.

I'll hit Ctrl-1 to add a subdivision of 1.

Let's increase this to 2.

That's looking good.

This is like an option.

What if we do that and then Ctrl-Shift-Click

and then bring this to something that is more desert-like.

Let's see.

Again, you can cheer away, as we mentioned before, by making...

Let's quickly here go into an image editor.

As I told you before, this is one of the positive things of having an image editor.

If you remember, if we get to open our reference here,

this was one of the pros of using Blender,

is that by just clicking that color picker,

we can click the color we want.

Of course, this reference isn't really correct,

so I'll just plug this in to have some proper roughness.

I can maybe turn it all the way down or maybe invert it.

Let's just leave it for the moment.

This was one of the things.

In PureRef, however, it works a bit different.

I'm now holding S.

I hold S and click with the mouse button,

and then I just move my mouse

to see how the color gradually changes.

When I release, you'll see that that figure here is now highlighted in red.

I'll just hit Ctrl-C.

This is copied by default, but just in case.

Then we'll go into this color, switch to hex.

By default, it's HSV, or Hue, Saturation, and Value.

I'll switch to hex and just Ctrl-V.

You don't have to click there.

Now I have the same color as, I believe, this spot here.

This is one way to change the color.

Not to make this lesson too long, I'll break it into two lessons.

We now learned how to maybe add in that texture.

In the next lesson or the next part,

we'll just be finishing it up and make it look more proper

or more like a sand texture if we look at the men here.

This is not quite right scale.

We'll just change these into more suitable parameters

and then maybe look at the roughness as well. See you soon.


