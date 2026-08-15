# 177 — Breaking Texture Tiling

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Breaking Texture Tiling |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 32:24 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Breaking Texture Tiling** trong pipeline của section.
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

All right, welcome back in this lesson.

We will continue adding some more details into our texturing.

But before we do that, let's go back into our viewport shading here and select the plane

that we added texture to, and then the man as well, and isolate them both.

So I'm now looking at the texture in the plane and the man at the same time.

Now, of course, the man is here as a reference to the scale.

And already, you can tell that this is not the scale the real texture would be like in real life.

So if we are to scale this texture up a bit, you will be adding a value node.

Or you can manually change all of these parameters all at once.

I'll add this to here.

And let's scale them by two.

It's not too obvious, so maybe five.

And you can immediately see some issues here.

What is happening is that this mapping node is essentially repeating the texture on one

square by that amount.

So if we were to count, you would count five by five.

And what is happening here is that you can see the repetition, although this is a seamless texture.

So if we zoom out, we can see the pattern of each of these squares is repeating over that plane.

So we can do a few things to break that repetition.

The first thing you need to pay attention to is that in real life, the ground usually

doesn't consist of one texture.

And as we saw, some will have this clear sand and some will have this rocky sand.

The same case was with here.

So clear sand, and then I can see some gravel or rocks, small rocks on the sand in here.

So I've already went and downloaded another texture.

Now the first thing we'll learn today is how to mix two textures together.

So what we need to do is copy that.

With it selected, I'll hit Control Shift T. I'll go to desktop and locate my asset.

Again, pay attention to the textures you are dropping in.

I'll make display mode the largest thumbnails possible, just so I can see what I'm looking at here.

So again, we take in the color, displacement, AO, roughness, and normal DX.

Because by default, I cannot change any of the downloadable material, I have to download everything.

But I can still choose from what I want.

And then hit on Principle Setup.

Now I have a different texture.

To quickly preview one of the textures, I'll hit Control Shift and click.

Because this is connected, it will not show me anything.

But if I Control Shift click on this texture, however, it's going to show me that texture.

Now we can see that this is maybe a rocky sand.

Now this might be like more of a beach sand and not a rocky sand.

But this is just for the purpose of this lesson.

We'll just be looking at how we could mix two textures together.

Now back again, I'll just preview that texture.

And let's quickly see what we can do here.

So I'll move this down a bit, move this up a bit.

What we can do is that we can mix them both.

First of all, let's make sure that we have the same scale as both.

So I'll hit Control C here.

And then if I hit Control V, it's pasted over the older node.

I'll just hit G and make sure it's inside the frame. So there we go.

I'll connect this here.

Of course, you can have the same value feed both nodes.

But let's go for this for now.

And now, again, if I preview this, they both should have the same scale.

So this is also repeated five times on each edge.

Of course, this could change all according to your dimensions.

But because I have the x and y the same,

this is why I'm retaining the same information for both planes

or for both sides.

So what I'm going to do is hit Control Shift

and hold the right mouse button over that node or close to it

and then drag it to the other node I want to mix.

Now, this will not be the same case maybe for image textures

because they're not shaders.

They are images, essentially.

So the mix will be RGB and not shader.

So if you can look at here, this is the RGB.

Of course, because they both feed into different sockets,

so that fit quite into the normal.

But the one at the bottom is the same.

If I do the opposite, oh, I believe

it favors the top texture anyway.

Let's plug this back into.

Oh, yeah, we have one displacement.

So I don't need displacement for now anyway.

I'll just leave it as is.

Control Shift and holding right mouse button

and then having them both being mixed.

Again, if you cannot do any of these shortcuts,

make sure that you go to Edit Preferences, Add-ons,

and then activate the Node Wrangler Add-on.

You should have it by default in any of the Blender versions.

So what is happening now is that these two textures

are being mixed.

And by that factor, if I lower this to 0,

I'm favoring the top texture, which is the rocks, the rocky sand.

And if I pull that to 1, I'm favoring the second texture.

By default, the value is 0.5.

This isn't really helping yet.

But what we can do is that we have a mask.

What is happening now is that there is a,

I'm changing the opacity of one of the other textures,

like one or the other.

So I'm decreasing one and increasing one.

And this is essentially acting like a mask between both.

So what I want to do is that I can add in a noise texture.

And since I can have it like factor or color,

let's actually choose the color and add a ramp.

And you can change this from linear to ease.

And this will give you a little bit more contrast.

Of course, you can add a contrast yourself

so that you can have a bit more.

The darker areas are going to actually appear much more easier.

So let's actually feed the color to the factor

and preview that without a bright, the contrast node.

And what we're looking at here is our texture being broken.

Let's make this too obvious.

And pull them all together.

So what's happening is the black spots

are actually acting as a mask.

And since I have a texture at the bottom, it's showing me,

sorry, I have a texture at the top.

It's showing me that stone area.

So I can also flip that and change it to the opposite.

So I now have the sandy area being much more dominant.

Or essentially flipping this will

help make you be able to determine which spot to hide

and which spot to show up.

So you can experiment with this.

So you can experiment with this a lot.

And on top of already having a geometry that

was able to break the repetition for us,

we now have this mask.

A great way to do that, let's actually

change the scale up a bit.

And now I don't have it at a certain area.

I don't want this to be too obvious.

Of course, this is not the final outcome for us.

We will be painting where textures

are going to be exactly.

So this isn't our final outcome just yet.

This is just to show.

Let's decrease the roughness to zero.

And as you can see, this is already

like breaking the tiling up a bit.

But we can do more.

Again, so by default, having a plane,

let's actually let's copy the bottom material.

Control-C, U, Control-V, and plug that.

Control-Shift and click.

I'll delete that as well.

So from that view, when it's harder to see the tiling,

but you still could see the tiling, one great thing

to do, which also adds to the realism of your scene

is that you just break the tile.

So what I did right here is that I hit right-click, subdivide,

and I'm now clicking Shift-R to repeat the last order, which is subdivision.

And now what I can do is select random spots in my plane.

And with the proportional editing on,

I'll just hit G and the Z and decrease my radius a bit.

So I'm not doing anything realistic here.

I'm just pumping the plane up.

And as you can see, this makes the repetition pretty well.

So remember to also always add geometry

because it's going to be very hard to have a flat surface

unless it's an interior scene, or maybe things

are neat and undamaged or unabandoned,

or it's not a desert, like it's an actual floor of a building or something.

So always make sure that you add these details to your scene.

And you can do that with the landscape node,

which we'll be talking in detail about later on.

So we added details, which is a different texture, which also

adds to the realism.

It's not, of course, painted very well.

We will do that later on, but just

for the purpose of this lesson, we'll

be looking at it as is.

Again, I can be playing with this a bit more.

I here want to favor one over the other.

Maybe the scale is a bit too small,

so let's increase it to maybe 4.

You get to play with these all you want.

Actually, let's switch to 4D.

4D allows me to have a seed value here.

So I can actually change the look of the noise texture

without actually changing any of the other parameters.

So maybe 2 was a good number for me.

But what I want to do is just, while retaining

that settings, these settings, the scale, detail, roughness,

and distortion, I just want to change the seed

value of my texture and look at that.

I can pull that down a bit, and then now this

is a bit too harsh.

I believe adding some roughness.

Yeah, I believe adding some roughness.

It will help with that. Distortion.

Distortion really don't help that much.

Just now playing around with the texture.

Maybe I like this, but I don't like the seed value.

So let's change this up a bit.

Play with the scale a little. 5, maybe.

Maybe I actually want the value of the stone above the scale

to be maybe a bit more. So 8.

So now I have smaller rocks.

Let's make sure the roughness is back to 0.

I'm now playing around just to find something

that looks good.

Again, while this is connected, I can actually hit Shift-S

and look for the musgrave.

The options are pretty much there.

Again, I'll switch to 4D to have the seed information

or the seed value that I can play with.

And now let's actually feed that right into,

I hit Control-Shift-T, and feed it to the viewer node

just so I can see before doing anything.

So this is how the musgrave looks like.

I can play with the type options.

Let's see.

That looks somewhat good.

Let's feed.

Actually, let's have a mapping node.

I'll hit Alt-P to remove that node from the frame.

Then let's feed generated to the vector. Maybe objects.

It's either objects or UV. There we go.

This is a much better breaking tile.

I didn't want it to be rotating around the island that is here.

So I'll mix this with the shader.

Again, I'll feed the shader information

to the material output.

And we have something good.

This looks pretty well, actually.

I'm not sure if you'll need any much more than that.

Let's actually bump the scale down to maybe 2. I need maybe 3.

Now I can play with all these settings. So dimension.

This gives you a lot of options to play with,

which is pretty awesome.

I personally prefer the Musgrave over the noise texture.

So let's stick with that.

The more you want it to be more obvious, of course,

you pull one of these levers to the other.

You can also flip.

So if I liked it like that, but I

want the sand to be the less prominent texture from them

both, I'll just do that, and so on.

Maybe I can change ease to BSP line.

Let's see how that looks like.

This looks pretty good.

So we've broken the texture, or the repetition,

with a multitude of things.

Overall, unless you are actually going to zoom out and look

at the texture from apart, it's going to be obvious.

But other than that, from this level,

it's not that obvious.

So let's go ahead and play with that.

So what I would recommend is that playing around

with these settings.

With that said, we'll still be going through a few more

repetition breaking techniques, if you could say.

Let's organize our canvas first.

So I will select those, hit Control-G, first tab,

and click at this, hit N, and change the group name

to, from here, I will change it to Rocky.

Now, if I hit Shift-A, and then search, or maybe under group,

I can find that texture.

And I can just plug it in as such.

For the bottom one as well, I'll just select it.

Yeah, and hit Control-G as well.

First tab, and type in sand.

And now that is called sand.

So this is much better.

You can select those, hit Control-J, and name the frame

mix, maybe, yeah, shader mix, mix shader.

Oh, that's the name, mix shader. There we go.

Now, let's also add that to the frame.

Please, thank you.

I'll select all these, hit Shift-Equal to organize things

of it, and then I can move that frame freely, as well as

these two textures.

OK, so the next step is we can actually

add some variation of contrast to this texture,

to the sand texture, actually.

So let's actually preview that texture only by itself.

Yeah, I was showing displacement.

It's the BSDF now.

So I'll hide this side menu.

And now, let's look at it before actually doing anything.

We're looking at a lot of options

here, simply because one could suffice, essentially.

You don't have to be going through all of the steps

or tips we are talking about here.

So what I can do here is that I can actually maybe

repeat the same texture, so Shift-D,

and also mix it with itself.

However, I need to increase the contrast of this texture up a bit.

If we look at references here, some, if you can see,

the one surface do have some darker, some brighter values.

But yeah, there we go.

It's much more obvious here.

So you can see that this is all sand, but some of it

is in color, at least, differs from the other spots.

So this spot is darker, this spot is lighter,

and this is much, much lighter, and so on.

So even with one texture, it's not actually,

or one material, it's not actually being,

it doesn't actually have one value for the contrast.

So we have multiple values.

So what we're going to do here is

that we increase the contrast for the texture at the top.

And luckily, we have a node that is called Bright Contrast that controls both.

So I will hit Shift-A, S for search,

and then type in bright or contrast.

You can type in brightness or contrast.

So nothing would change.

Let's actually favor the shader at the top

by setting the value to 0.

And now, if I increase the contrast,

I'm starting to have this increase in contrast, essentially.

So remember not to bump it too much high.

Another thing you can do is that you

hit Shift-S, Color, RGB Curves.

This is also one way to manipulate each of the color

channels, so red only, green only, and blue only.

But again, this could help you not go overboard

with the contrast.

So you can add multiple dots here to control from.

And let's go with that.

So what is happening now is that I have two textures.

One has the color changed, and one doesn't.

So this is the default. This is our change.

What I need to do is that have another mask to essentially

mix between them both.

So just like we learned, we'll add in a noise texture,

fit into a color ramp.

Let's actually change that to a musgrave.

So I just click at it, Shift-S to choose from textures,

and go for musgrave.

And this is going to switch it.

This is much more convenient if your node is connected

or it is something.

So say this, you can switch with this image texture.

So I'll feed the height into factor,

and the color into the factor here.

And then now, just like we saw before,

and now we have the tiling broken by that white spots.

So let's flip and have the dark spots be less.

Again, I will have one of these nodes.

Of course, the shortcut for that is to just hit Control-C.

This will add a mapping node.

And with that selected, I will just hit Control-X to dissolve it. So there we go.

And now it's being controlled by generated.

Again, I believe object is our option.

And now we have that rotation or that line

around the islands is gone.

So let's see what we can do here.

So we're now changing the contrast.

Let's bump the scale down or lower the scale down by that much.

I need the black spots to be there. There we go.

And I need this to be 4D to have the seed value.

Let's not change anything before we can

see if the default is fine.

And this looks pretty fine.

So I'm now outside the group.

So I have this edited. Let's save.

Remember to save.

And now I'll connect this back.

So I have now two levels of breaking the repetition.

The first one was mixing two different shaders, which

is essentially what happens in real life.

So I have different textures.

The second thing is having one texture being

changed only by itself.

So just like we saw here, let me show that real quick.

So this is one texture.

I only duplicated the whole texture setting set up to the top.

So let's look at it.

So I duplicated that setup and then mixed it with itself

while only changing the color.

Of course, you can, I believe, you

don't have to change any of the other settings.

You will be using the displacement ones.

So you can get rid of that.

And the bump, of course, doesn't have to change.

So the only thing you're controlling or changing is the color.

Maybe you can have the scale of the other texture

change maybe less.

So oh, yeah, look at that.

So 4 makes sense.

And play up a bit with the ramp, the color ramp.

Let's change the seed value so that it's keep

on changing the seed value here.

And now I have the same texture repeated over itself.

Only one is scaled differently.

Transition is smooth.

You can't actually see it.

Of course, again, we go further apart.

You can still see that repetition.

And we'll be handling it just now.

So I'll plug in that back.

And then maybe this is something you would go for.

Like maybe you would.

Let's make this more subtle.

Let's go all the way here.

Well, actually, let's flip that.

And no, let's use linear.

So where did the rocks go? Where they are?

Yeah.

I always go for something a little bit too subtle.

Look at the reference.

Make sure that you are following along

what you should be following, which is the references.

Again, I didn't really follow the references here a bit too much. I just looked.

I'm just showcasing how you would be properly

mixing two textures.

Again, this is a process of trying a multitude of solutions.

So next, we will also be trying to break the tiling here

using some math notes.

It's going to be very, very simple.

We will first understand how the mapping works.

And then we will be looking at how to break that mapping.

So again, remember to practice these up a little.

I'll just hit the slash to go outside of the isolated view.

And look at it from this view.

Maybe I could increase the scale up a bit.

We will change everything to the final look

when we are before we paint over our texture.

So until then, make sure that you

have your own texture ready for the next lesson, which

will be handling how to break up the tiling only using

the texture itself, but not with colors, but actually with math. Yeah. See you soon.


