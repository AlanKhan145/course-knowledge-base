# 234 — Render Settings – Test Rendering

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 35 — 3D Environments: Rendering and Compositing |
| **Bài học** | Render Settings – Test Rendering |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 41:56 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Render Settings – Test Rendering** trong pipeline của section.
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

Alright, welcome back and welcome to our final chapter.

In this chapter, we will be looking into the render settings, maybe render passes, and compositing.

I'm still not sure if we will need a post production, as in like using a third party

software like Photoshop or --.

But for now, however, I believe that we are attracting in a good quality in terms of how

we could actually get very good quality without the need to go into other softwares, simply

because the compositing part, you know, does most of the work for us.

However, we need to talk about render settings first.

So as you can see here, I might have manipulated this one or two times before during the entire

course recording.

So I'll just bring in a new fresh file.

I did change the startup settings, but I didn't change anything regarding cycles.

So again, if you look at this and see that the viewport and render settings are different,

this is because you're not using the Cycles X or you're not using essentially Blender 3 and above.

Right off the bat, again, we were using cycles.

So first thing, you know, in terms of the settings, you are switching between different render engines.

Mainly, we'll be using Eevee and Cycles.

Sorry, you know, you would be using Eevee or Cycles, but we will be using Cycles only

in our course, in our rendering.

As I said, you know, some features are experimental.

So if you've downloaded an experimental version of Blender, you might see that some options,

just like we saw here, the subdivision section here is only supported.

However, experimental might cause some crashing issues until they are fully supported.

Device, you know, obviously, you're choosing whether you are going to render from CPU or

GPU, and then we come to the real deal here. So sampling.

What does this mean is that how many times do you want your render to be sampled?

So imagine this screen, you know, imagine this like viewport, you know, that is being

passed upon so that each pass, the details increases.

This is the number exactly.

So if I set this to two, then my render view, essentially, if I hit F12, I need the camera,

shift A, whatever object, let's not have an object like that.

So icosphere, maybe, then shift A and add a camera and hit control alt zero to move it here.

If I hit F12, it's going to take two passes.

So one, two, and then now it's rendered.

Of course, this is the viewport.

So if I switch this to render here, one, two, and it's done.

One, two, and it's done.

You can see from the top here, if I switch this to 1024, which is the default, you can

see that this number, the more it increases, the more, you know, the more this number increases,

the more samples and the more details I get in the viewport.

But just as you saw here that the render was done even before the samples were finished,

this is because we have something called the noise threshold, and this is why I skipped it, by the way.

The lower the value, so like, as you can see here, 0.01, the more, like, detail and less

noise you are getting.

You can see that by hovering over.

So lower values reduce noise at the cost of render time.

And that's why in the viewport, you see less samples compared to, like, four times more.

And then the same with noise, the noise threshold is a little bit higher.

You don't need that much detail in the viewport.

And as well, like, the denoise level, the denoising here is deactivated anyway.

So if it's activated, I'm sure you'll be noticing the difference here.

Let's add a point light, move it maybe here, and just give it some value.

You can see here that since the denoising is activated, I'm getting, you know, I'm starting

to get slow results here, and the performance is getting slower.

The reason is, well, two things.

First of all, my PC isn't really high end.

And the second thing is, under denoise here, you see that the start sample is one.

You probably should make this, like, halfway through so that you can just move around.

And then as soon as, like, there is that number of, you know, samples, or when the render

is done in terms of, like, how the noise threshold is matched, then the denoising applies.

And this is something you might consider during your rendering.

So in the viewport, essentially, I usually go without actually denoising anything at all.

The noise threshold does, you know, a pretty similar job.

This is, however, is necessary in the render view.

So again, I've lowered this.

You know, the more you get details and geometry into your scene, the less and less you need,

you know, your performance.

Of course, you need your performance to be much faster.

And as such, you know, this could be affected by, again, so the number of geometry is great.

And this is a very big number.

You can just lower this down to make things a little bit faster.

So as you can see, the render is done, you know, much faster.

This, of course, applies to the render viewport here.

You can, however, compared to the render samples or sampling, you see a time limit.

So what if I need a certain samples, so maybe 5,000 samples, but then I'm also restricted

by time frame, maybe a deadline, which is like it's coming up in two hours later.

Then I can just add this time limit, which is two hours.

And as such, you know, if the time limit is reached before the samples and the noise threshold,

you will be stopping the rendering.

And essentially, you will be finishing a little bit earlier than usual.

These features are not existing in previous versions.

So just pay attention to that.

I personally don't play around with the advanced tab.

Something I touched upon a lot is the bounces and light paths.

So the default is 12.

I personally set that to eight.

And then everything here is just like this.

So diffuse is four, glossy is four, transmission is 12.

And since we don't have any glass in both scenes, I believe we don't, transmission here,

you know, doesn't really affect anything.

However, we are using volumes.

So this is like, you know, maximum number of volumetric scattering events.

And I personally don't turn that on simply in, I'm not sure if this like affects the

render view or the viewport, but I personally set this to like maybe 75, maybe 50.

Of course, the more you increase this, like we don't have any of this in here.

Let's actually try that real quick.

So I'll just increase the size of this cube and let's give it a shader in the shader editor.

Let's give it a material and then give it a volume scatter just like we did before.

Now you can see that this is a bit dark and I will not change anything just yet, but this

is set to zero by default.

And you can see that some of the noise is completely gone.

If we were to increase this to maybe 30, you start to see that the volume itself is picking up some light.

Of course, the more you change this, like the higher the number is, you know, the more

and more like bounces of, you know, light is scattered around your object.

Then again, this is very demanding.

So what you could do is that you can average that number maybe to 60 or something and then

decrease the number here to something pretty low.

So let's just see how we can properly change this, maybe decrease it even more.

Just bringing the camera inside, I'll just hit control and delta to move the camera inwards.

I think this would be more obvious with like a light or something of like, let's change this to zero.

Let's also like hit control B, limit the rendering to this view here.

And let me change this to GPU again.

And I'll just change this to zero.

You'll see the difference here and there because in scenes where light is actually

inside the object, this is much more obvious.

Let's decrease that.

Let's change this to area and make this one.

And now we can just try and change this.

I think this would be obvious in the like rocky desert scene.

Like if we haven't made that yet, we will get into detail about that.

However, I personally set this to 50.

And then again, so eight, leave everything the same transmission of cap last, then maybe do that.

Setting it to eight doesn't really matter.

Clamping is something I really don't use too much.

Acoustics, I'm not sure if this is, I think this is new to 3.1, like it didn't exist before.

So this is something we also haven't touched upon during that course.

Volumes, this is quite the same as to like how this would interact in terms of like how, let's see here.

Steps indicate so how many times should the, like should the, you know, how many times

should the volume actually bounce, you know, in terms of like in terms of rendering or

maybe like lighting.

So volumes, as you can see here, we have the step render and then the viewport and then the max steps.

I personally don't change these.

You can like hover over and get to introduce yourself with that.

I think the default for this is 100, sorry, 1024, 1024, I should say.

But yeah, I don't really play around around that that much.

Here isn't something we are going to use anyway.

Then we have this option called simplify.

And this is something quite interesting to use, actually.

So we have two things here.

We have viewport and render, which is amazing.

What this what does this does is actually is essentially that, you know, it lowers the

quality of your scene.

So if you have just like we did before, like maybe the sculpting, if we have a rock or

something we sculpted that has a certain number of subdivisions, you can't limit that number

to speed up your PC.

So if you set it to one, then it's going to limit the entire scene to one subdivision max.

I don't use child particles.

Again, you can also limit the textures you're using on your object.

So if you're using a texture that is 4K, but you would like to speed up your PC, then you

can use like a 1K version or 2K version of like you're essentially downgrading it in

the viewport, but it remains the same.

If you didn't change it in the render settings here.

Film is something you may use essentially like you can't change the exposure.

I wouldn't recommend doing this, like just control your light.

And if there is anything that, you know, need changing ever so slightly, then you probably

would prefer to do that.

You should prefer, you should probably do that in the compositing tab and not in the

render settings.

I don't mess around with the like pixel filter tab.

However, sometimes I just changing that width actually helps with, actually helps with,

you know, let's see here if we can do this properly.

I'll change this point back to points.

Limit my view here. Let's see here.

So it's how this is being filtered.

So if I turn this all the way down, you can see the pixelation here starts to occur and

things are a bit jagged.

I think the default is 1.5.

And this slightly smooths things up just a little bit.

I think 1 is something I might've used before because it, you know, it doesn't really smooth things out.

It is like, it gives it that little sharpen.

Let's just give this a subdivision.

Let's see if it's going to be possible to see more obviously.

As you can see here, like this is set to 10.

So this is like too smooth essentially.

Although like this is not out of focus or anything.

It's just how Blender is smoothing things out using that, you know, filter essentially.

So 1 seems good.

Like it gives a sharp edge, which is something you might need.

So this is something you can actually use.

Another thing here, if we go out, you can see this like transparent option.

What does this does is that it makes the HDRI essentially or the world hidden so that, you

know, you will not be seeing the actual world here.

You'll only be seeing like it, you'll be getting a transparent background if you're rendering

if you're saving your file as a PNG or EXR.

This applies for glass.

So you will be rendering glass and it will reflect essentially what it's surrounding,

I believe, but it will not like see the actual HDRI, which is something you might also need.

So we don't need any of these.

Performance before used to be like adjusting your own cycle settings according to your

PC requirements.

I think there is an add-on before called performance something.

It's no longer there because in Cycles X, you're essentially using really big tiles.

As you can see here, it's like it's a 2K tile.

So if this is a 4K by 4K, you'll see like we'll have two squares essentially or two

rectangles, I believe.

So let's actually see here.

So 4K, if this is 4K, so let's 4096 divided by two, because this is the default.

If I hit F12, we'll see two squares here.

And so I have two tiles, essentially.

So each tile is the number set to here.

And of course, like if I increase or decrease the number, this is going to affect the change

or affect the tiling here.

And you might want to play around with it.

Before people used to like test, which is the tiling number that is most perfect for the scene.

But with Cycles X, however, this isn't really the case, simply because it's sort of like

defies the purpose of Cycles X.

So Cycles X sort of like, you know, want to shift towards like one sample or one tile

for the entire sample, which is keep on scanning it multiple times, and then until you reach

like a certain threshold.

One down, like one drawback from here is that we used to have like a number of sampling

where at certain spots, maybe like this area here, it could be like a one color.

So as you can see here, like I don't need to sample this 4000 times in order to get a result.

It's just a plain color.

Of course, like if you increase or decrease this, this is going to affect certain parts

of your geometry, sorry, of your rendering.

So say like this square is going to render faster than this square.

So it's 256 and the minimum is zero.

So essentially, when you go past a square that's going to be rendered or a tile is going

to be rendered that has less information than another square is going to render faster.

And this was represented by something called, if we switch to cycles, performance, adaptive

sampling this, I think it's quite represented, actually, that's my bad.

So adaptive sampling is essentially so what does this does is that you ask Blender to

do less performance or to spend less time on things that are easy to render, you know,

things like, you know, plain colors.

So this is like essentially the entire performance thing.

One thing, however, is the persistent data.

So if I activate this, we can see here that I tried to activate this before it took 40

seconds to gain the same results.

Let's actually decrease the number here of samples to something like 64 and I'll just hit F12.

So the first the first time should really take some time. It really is.

It doesn't really matter.

I haven't optimized all the settings.

So it's taking some time.

So I really don't care about that.

What I just care about, oh, I increased the resolution, which is not something I wanted.

I was wondering why it's taking up so much time, although the scene is simple.

So what persistent data does is that if you render the same view from the same camera

multiple times or, you know, just one time, then you're asking Blender to only make changes

to whatever we have changed already, meaning.

So let's say that you've changed the light maybe, but everything in its place is the same.

This means that Blender is going to render things a little bit faster because data haven't

changed that much.

Let me just decrease that quality to 1080 maybe.

That's the quality I wanted. Just hit F12.

You can see that it automatically adjusted because I decreased the frame size or the

resolution size.

Now it's the 248 is, you know, enough, quite enough for the scene here.

OK, now that the render is finished, we can see here that the time frame it took is one

minute and 19 seconds.

Let me change that slot here and hit F12.

Of course, this is like sort of, you know, a representation, like very, very quick demo

as how this could actually work.

Essentially, you know, it should take less time.

Of course, if you hover over that setting here, it's going to say that this is like

it's going to be at the cost of increased memory usage.

So we haven't used any textures.

We haven't added in geometry and we have already used 286 megabits, megabytes of RAM.

So yeah, just just pay attention to such a thing.

However, this is rendering much faster.

So we are already at 40 seconds, 40 samples.

I believe this should take a little less time to render overall.

If it doesn't, then, of course, like it's going to be more, more obvious in like, you

know, bigger scenes and that is performance.

We don't talk about bake, grease pencil, freestyle.

Color management is something I might have did change before. You can.

The only thing I change here is the look.

So I can change this to high contrast and this is like to bring the darks more dark

and the whites more white or sorry, the lights more light.

It's quite similar.

Actually, it took actually took more time the second time.

But then again, you can see that the memory here changed again.

Just make sure that you, you know, just play around with the settings.

See what's what, what, you know, better fits your PC.

And moving on to the scene settings or output properties.

So you might have seen that I've changed this like resolution here to a multitude of things.

Again, we've, we're only using our resolution so I can just change this to something like

I find suitable for my scene and so on to you also might have seen that I only limit

the rendering to the camera output or the camera view.

And I can do this with the shortcut control B for boundary and then just draw the boundary with a marquee.

So like, just, just like you saw here, and this will automatically activate render region.

There's also the option that is called, oh, of course, if you decrease and increase resolution

like percentage scale, this will like dramatically increase your render time at the cost of the

quality, of course.

So you'll only, you will only be rendering 25% of that resolution.

This is better than of course, like, like maybe divide this by two and then going to

divide this by two to have like the resolution downscaled.

And then you may forget to like multiply it by two again, and then just, you don't know the numbers.

So this is a quick way to increase and decrease the quality of, you know, how, how like the

render output is, is being, you know, rendered.

We can also control the aspect ratios on both sides, X and Y.

We talked about render region.

We also have something called crop to render region.

This is something I use a lot.

So what if I changed something?

So what if I rendered my view and maybe say that I then added something here?

What I want to render is essentially that part.

I don't want to render the entire scene again.

So what I can do is I can actually hit control B and draw a boundary inside my camera.

And now when you hit F12, you will be only rendering that part.

Now if the crop to render region is activated, it's going to crop the image you save to that part.

If it's inactivated, as you can see now, you'll see that this like transparent area around it.

This is very good to like to keep actually as an option.

By the way, you see how the 25% dramatically increased the render time here.

So if you, if you would like, and you might actually relate to that because sometimes

you just want to align the two layers on top of each other on a, like an image editing

software like -- or Photoshop.

And this is the option you need to consider to keep turned off because if you turn on

crop to region, this is going to essentially like crop the rendering to that area.

And then you'll have to manually adjust the position of that, you know, you know, spot

or area on your camera.

Of course, if you change the location of the camera, you might actually need to change.

So this is before and this is after.

So yeah, if you change the location of the camera, you might end up needing to change

the entire scene.

So you might actually need to like render the entire scene all over again.

Frame rate is like how many frames you need to use in your scene, in your scene.

Frame range is something we might've played before.

This is just to increase the frame rate if you're doing any simulation or something.

Stereoscopy is if you're using 3D, like 3D output is going to like give this red, red

and red and blue rendering output.

We're not using this in here.

However, now we come to something we actually, we would be using a lot.

If you were to render and then like, maybe I want to save any settings here.

Usually I don't change any settings here simply because if I hit, if I, after rendering hit

shift S, image, save, oh, shift, hold S, my bad.

I get introduced with the same options back again.

So let's talk about these a little bit.

So maybe you want to preserve some space or decrease the size of the output, then maybe

you could use a JPEG.

Some people do that.

You can just increase the quality and it's not, and it's like, it's rarely going to be

as large as the PNG.

Now I've tried playing around with the compression here.

The more the resolution you get, like some images could get to maybe 500 megabytes if

the resolution is really high and the data is really high.

So you can actually use, so JPEG by the way is 8 bit.

So you might need to up your game on the cost of size, you know, image size by just switching

to the PNG and the PNG is also by default 8 bit with 15% compression.

Now I've tried to compress this like to 99%.

Like the difference is there, but it's really, really slight.

Like you actually have to zoom in to see that difference.

You can always of course switch to 16 bit color depth.

And this hasn't really affected my, sometimes like it didn't really have an effect on the

size, on the image size, which is nice actually to actually have in your scene.

So we have the JPEG, which is like only 8 bit and then the PNG, which is 8 and 16.

We also have a 32 bit, which is the open EXR or the open XR.

Now by default it's 32 bits.

I don't have to change anything regarding these settings.

Some people do include the alpha and the channels.

So if like there are some transparency in your image, then maybe you could use that.

I believe by default, you don't need to do that because Blender does it by itself.

I'm not sure what that setting does.

I personally just either save as PNG with like the compression or maybe 80% with 16

color depth or open EXR.

And I really recommend actually doing the open EXR every time because it preserves even

the light data sometimes.

So this is something you need to consider every time.

Again, you don't need to change any settings here, but this is something you might consider

doing after you've like rendered your image.

So metadata is, you know, like how much data or data you need in the like in your image

that you've saved.

So the date and time and the time frame and so on.

This might be essential for like a production, a pipeline where you need like certain shots,

certain frames at certain time with certain cameras.

This might be useful for you.

I don't really play with the post processing here, this tab, but we can now move on to

the view layer properties.

The main thing we will be using here is passes.

You can see an immense amount of stuff here that, you know, you could like turn on and off.

I don't play around with like the view layer.

I do play around with data.

So sometimes I use the mist.

So whenever you're rendering now, you'll have something called the mist pass.

I think you will have to render first. No, you don't.

It's there by default.

Of course, like we'll have to change some settings here.

So I think it's under the world scene and then mist pass, and then you can just decrease

and increase that.

with that setting on like early on in like the designing process or, you know, talking

about the design principles.

So this is something you might actually need to render out because it's going to help you

with editing the image in third party software.

I don't really use any of these.

However, we can now move on to something like light.

The most here you could be using.

So this is color and this is reflection.

This is transmission. This is volume.

And we have other stuff here.

So you can render each and everything of these separately, which is nice, essentially.

So I can actually have a pass that is only shadow.

And now I can just, I believe we should or we should be able to activate the shadow.

And now we can only like render this pass or save this pass as an image and then manipulate

the shadows in certain ways.

So maybe change the color, change the contrast and so on.

This also applies for the ambient occlusion and every single thing you activate in here.

So if I open that after I have activated it, you can see that, you know, I'm getting that

ambient occlusion data from that pass.

So I think activating ambient occlusion and maybe the direct from each one of these is quite enough.

But personally, I just use ambient occlusion and data.

And now we get something called Cryptomate.

Cryptomate is like, let's give each thing a color.

So when I activate this and hit switch to Cryptomate, hopefully we have it here.

I think we'll have to render and then just separate this from there.

Yeah, let's render, Ashley.

So I'll hit F11 and then F12.

So yeah, now we have it here.

So if I switch to Cryptomate, it should render material.

Oh, they're all the same material.

I think it should render first.

This is going to be like much more obvious in the compositing.

So what does this does is like it's color coding, something we've done before.

It's color coding each and every object with like its own color.

Or you could do this by material.

Let's actually quickly here go to the compositing tab and use nodes. We have this.

So we need a viewer node.

We have the Cryptomate here.

So you can actually, no, you need this or material, actually.

And now, oh, we don't have materials.

Should this to be big?

There we go.

And now each and every object is being colored.

The plane, the first icosphere, and then the second icosphere.

I think this really doesn't matter.

I'm only changing between these different objects.

But this is object one.

I can here pick up whether it's material, but everything has its own material.

So this is icosphere one, this is icosphere, and this is cube.

And you can see that now I can just maybe mask out or in each of these colors.

However, this isn't what we should be talking about.

But yeah, this is it, essentially.

So we have a lot of things to play around with here.

Maybe I just feel obligated to talk about all of them, although we might only use

slightly less and less of these settings, not all of them.

The reason being is I might have not used every and all the settings here,

but essentially you will be in need to use all these data later on in future projects.

I personally, like whatever I talked about, I personally used and I made use of,

and then you probably should actually consider actually doing that,

playing around with the settings and such.

So I'll just close that scene.

And I might not actually talk too much throughout this process.

Let's render here.

So I'll just here adjust the settings to something I really want.

I'll lower this to 25%.

I can just go under the performance or let's search for persistent data.

So final render, persistent data.

Just don't need to look for it every time.

Under the denoise, I'll just make sure that it's open AI,

like you can have your own preference.

Just play around and see which one does a better job.

Light path is, I'll change this to 50.

And I don't think I need to change anything else.

High contrast in here.

I don't need layers right now.

I'll just do this to 25% just so that I can see what data I'm getting.

As for the passes, I need the mist and the shadow,

maybe ambient occlusion as well.

And do I do object or material?

Let's do object actually.

Hopefully this doesn't really confuse me.

I don't really think I actually need the Cryptomate.

I can always like render it later on.

I'll hit control S and let's hit F12.

And while this renders, I might actually talk through this a bit.

So I need to actually tell you a few things.

Of course, something I might have faced an issue with is –

oh, I might have done a mistake actually.

Let's actually hit control B, select this.

And let's turn off from render view anything that isn't going to be in our scene.

So U2 and – no, this is with us.

U2, that should be it.

Do we have anything else?

I hit control B to make the boundary the entire thing.

And now we should be good to go.

We are almost done here.

So this is essentially some information here.

So this is frame one.

If we were to switch this to timeline, you'll see that we are set at frame one.

So this is frame one.

Last is the time the last rendering took to finish.

Now essentially it doesn't have to be finished.

If we have canceled the rendering, this is just going to show you the time it took

from start to stop or from start to finish of the last scene.

And this is the time this specific rendering we're rendering now took.

We also have the remaining, so the estimate of how many hours, minutes,

seconds are running on the scene.

And we're finished.

I see here that the volume metrics are a bit too much.

Yeah, this is just like a demonstration for how we could render things out.

If I again make any adjustments to my scene, I will let you guys know in the next lesson.

And I will see you guys on the next one.

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
