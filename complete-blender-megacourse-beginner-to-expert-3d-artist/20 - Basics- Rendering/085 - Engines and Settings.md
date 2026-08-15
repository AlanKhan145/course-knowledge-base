# 085 — Engines and Settings

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 20 — Basics: Rendering |
| **Bài học** | Engines and Settings |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 24:38 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Engines and Settings** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
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


All right, we now have our light set up, our camera ready, and our shot framed.

And all I have done off-camera is add basic materials to give these a little bit of color,

just so it's easier to see what we're going to be talking about in the next section.

But all I've done is created a material and added a base color,

and I've changed no other settings here.

So if we are ready now to take a snapshot of this,

what we can do is hit F12 on our keyboard to bring up our render result window.

We can also achieve this by coming up to the render tab up here in the top toolbar

and choosing render image, which again has the shortcut right here, F12.

So Blender will bring up this separate 2D image editor window

with the render result as the active image.

Now, I don't know about you, but having this pop up in a completely separate window

drives me absolutely crazy.

So we can tell Blender where we want this image to show up by coming up to edit,

preferences, you just want to come into this first tab here that says interface.

And under editors, we're going to click this drop down that says temporary editors.

And when it says render in new window, we're just going to change this to image editor.

Let's just make sure that we save our preferences there.

And now when we press F12, we instead, we pull up the image editor in our Blender window,

which will show us the result right here.

So when we're discussing rendering, we first,

the first thing we need to discuss is render engines.

Now, we touched on this very, very briefly when we were talking about rendering.

We touched on this very, very briefly when we discussed how to bake normal maps,

but I just want to go into a little bit more detail here.

So what is a render engine?

Well, typically 3D software such as Blender or Maya is used for just creating the models.

And render engines are typically like completely separate programs

that are just utilizing the end result.

So some other render engines you may have heard of include Arnold, V-Ray, Corona, Cycles,

and Eevee, just to name a few.

Now, Cycles and Eevee both come built into Blender.

So let's take a look at some of the capabilities and the differences between these render engines.

So we can switch our render engine by coming up here in the properties,

in the properties editor, coming into render properties, which is just this second icon here.

We can click the dropdown and choose between Eevee and Cycles.

Now, there is a third option here called Workbench,

but all it essentially does is render things the same as our solid viewport shading.

So just ignore that one for now.

So let's look at Eevee.

Now, Eevee is the render engine that is active by default in Blender 3.0,

and it is Blender's real-time rendering engine.

Now, real-time rendering means that we are able to move around or even animate any object in our scene

and view the complete result in real-time.

Real-time rendering is what is used to create video games

and Eevee needs to respond to dynamic player input and render everything accordingly.

Now, Eevee is a very fast and lightweight rendering engine.

You can see we are in a rendered viewport mode here,

and changing our view or even changing any properties of these objects will appear instantly in the viewport.

So it's great for previewing before you are ready to get that final image,

or if you are making an asset whose target platform is a real-time engine like an asset for a video game,

Eevee will give you a better idea of what that asset will look like in-game.

Now, Eevee does tend to be slightly lower quality.

You will especially notice issues with shadows.

You can see here that the shadows here are not very accurate.

There's a gap here and there's a lot of jagged sort of edges in our shadows.

And we also have an issue with bounce lighting.

We're not getting any bounce lighting in this scene currently.

Now, there are certain options you can enable within Eevee to achieve more realistic results,

but these options will start to slow down performance.

And just know that all these options that you have to manually enable to increase the look of Eevee

renders are sort of just built into cycles.

So some of these options are things like ambient inclusion,

which will add shadows to the darkest parts of your scene where two objects meet.

We can add things like screen space reflections, which will give us that nice bounce lighting off of

this white plane image here.

We see that reflected right here.

And there's other settings such as bloom, which kind of adds sort of a glare effect to any light

points in your scene and additional options right here.

But as I said, all of these things that we have to sort of manually enable in Eevee are just sort of packed into cycles.

So let's take a look at the cycles engine.

So let's come up to render engine and switch our dropdown to cycles.

So instantly, you'll notice if you're still in the rendered viewpoint, if you're still in the

rendered viewport shading mode,

that our results start to look a little different, a little noisy.

And when we move around, we get this extremely pixelated result that when we stop moving, slowly

gets clearer and clearer.

So this is what cycles looks like in its rendering form.

Cycles is an offline rendering engine, which is also sometimes called a ray tracer.

It is basically calculating actual light bounces here and rendering the result to the screen.

With cycles, you typically get better lighting results, but they cannot be necessarily viewed in

real time the same way that Eevees can,

because you'll see when I move around here, every time I move around, or if I were to move one of these objects,

Blender has to recalculate all those light bounces, and it is a process that can take a while.

So offline renderers like cycles are typically used for animations or cinematic sequences,

things that can be recorded and then played back at their full resolution.

Now, if you have switched over to cycles, you may notice that it is rendering quite slowly.

And that is because I believe by default, cycles is using your CPU of your computer to render these images.

However, if you have any sort of halfway decent desktop, you really want to be using your GPU or

your graphics card to render these things,

because that is the entire point of having a graphics card.

So let's change our device under the cycles render engine from CPU to GPU compute.

And already you'll see this is happening. This process of rendering is happening much, much quicker.

Now, with regards to this GPU compute, there are some preferences that we can look at here by

opening the preferences window under edit preferences.

You want to go to system and your cycles render devices will be right here.

Now, if this is currently on none, you will not be able to use your GPU here because when it is set

to none, it automatically defaults to using your CPU.

Now, depending on what type of graphics card you have, we have a couple of options here for which type to use.

CUDA and OptiX are both for NVIDIA graphics cards.

CUDA is the older method for rendering.

So if you have an older NVIDIA graphics card, you may not have this option right here that says OptiX.

So you'd want to use CUDA.

However, if you do have this option here that says OptiX, this is the one you should use as it is

the newer system for rendering with NVIDIA graphics cards.

And this last one here, HIP, is if you have an AMD graphics card, you can go ahead and enable this one right here.

So let's make sure that's saved and close that out.

So that will dramatically increase the speed at which your shots can be rendered by using your GPU,

depending on the quality of your graphics card.

If you have a top-tier graphics card, which I do not, your render times can be near instant.

In contrast, depending on the complexity of your scene, renders can sometimes take hours with

low-end graphics cards.

For example, for Toy Story 1, which came out in 1995, it was one of the first computer rendered animations ever.

A single frame of that animation could take anywhere between 45 minutes to 30 hours to render,

depending on the complexity of the shot.

Now, keep in mind that animation runs at 24 frames per second.

So on average, every second of that film took over 300 hours to render.

So your hardware can dramatically affect your ability to render things well and quickly.

Now, we can also view our render results by coming over into this rendering workspace right here.

So if we click on that, what we get in our viewport here is essentially just an image editor, a 2D

image editor, with render result as the active image.

So Blender can save up to eight rendered images in its short-term memory.

So this is really helpful if you want to compare different compositions or maybe different render engines.

We can render them into up to eight different slots.

And the way we do that is by coming up to this slot 1 here drop-down in our image editor, and you

can select any slot here.

So by default, slot 1 is active, so every time I press F12 or render through the toolbar, our slot,

whichever slot we have active, will be filled.

So right now I'm using the Cycles renderer.

So you can see that it's taking up quite some time as we are still rendering here.

We have a progress bar right here, so this can take several minutes up to several hours, depending

on the quality of your hardware and the complexity of the scene.

But what we can do is once this finishes rendering, we can compare it to Eevee, and then we can

really see the differences between those two render engines.

Okay, so it took about 46 seconds total to render this image.

So now if I want to render another one, but I want to keep this image in Blender's short-term memory

so I can quickly reference it later,

all I have to do is come up here where it says slot 1 and change it to slot 2.

Now this will give you a blank image editor here, so all we have to do is press F12 one more time to

start rendering over that slot.

Now I haven't changed any settings, so I'm going to stop this render by coming down here and clicking the X button.

You can see it's cancelling, and it has cancelled that render.

So now let's change back to Eevee, and let's just hit F12 one more time in slot 2.

So Eevee's rendering is again almost instantaneous, but you'll see here if we compare slot 1 with

slot 2, we can see the dramatic quality difference.

Slot 1 is cycles, and we have a lot of nice crisp shadows, we have good bounce lighting,

and you can even see like the color from this orange cube here is bouncing nicely off of this

section of this green cube,

in addition to getting good bounce lighting off of this plane.

But when we switch to our real-time renderer, well, we're getting a little bit off of this plane,

but the quality is just not quite there.

So again, depending on what your target platform is, you may want to consider using either Eevee,

the sort of fast, lightweight, real-time alternative, or Cycles, which is the slower, but you tend

to get better results for still images anyway.

So there is one or two more things you can do to change the quality of the renders you get.

So you'll notice that when you render in Cycles, when you first press F12, you'll get this very grainy image result,

and it will slowly, as time ticks forward and as this count goes up, it will over time become smoother and smoother.

Now, rendering is complete when we reach this max sample number here.

So without getting too technical into the definition, samples in rendering refer to basically the

quality of the light bounce calculations.

So how many times are we calculating our light bounces to get this quality of image that has as

little noise in it as possible,

which is what we call that sort of graininess, we call it noise.

So the way we can control this manually using the sampling settings here in the Properties Editor.

So now if you are working with Cycles, and let's look at that one first, there is a difference

between viewport and rendered mode.

Again, because Cycles is not a real time renderer.

So when we are, for example, just using our render preview shading, we're using a max sample of 1024 in this case,

because that is what it is set to for the viewport or preview.

But when we hit F12 and pull up this image, we are using our max samples of 4096 because that is

what it is set to under the render tab.

Now we can adjust the quality and the speed of our renders by adjusting these.

So if under the render tab, let's change to slot 2, we're going to overwrite this slot by changing

to the slot and rendering again,

we'll just overwrite anything that we already have here.

So this was our Eevee render from before.

So let's say I've rendered a Cycles preview and I've rendered an Eevee preview and I think,

okay, I'm going to use Cycles, so I don't need this one anymore.

So by default, Cycles render max samples is set to 4096, which is quite high.

It's equivalent to a 4K texture.

So we can set this down slightly and we can hit F12 again.

We can wait for it to render and when it is done, we can compare the two in quality versus time.

Because when you're rendering with a ray tracer like Cycles, the key is really to find a balance

between the quality and render time.

And this will largely be dependent on the quality of your hardware.

So let's give this a moment to render and then we will compare the times.

Okay, so I just paused the recording to let that all render.

So we can see the difference in time versus quality.

I went ahead and rendered another one at 1024, which is this image.

So at a max sample of 1024, we rendered an image of this quality and it took about 35 seconds,

which we can view right here in the top left corner where it says time.

In slot two, I rendered a 2K, a 2048 samples.

It took about 40 seconds and you can see the quality here.

It's pretty comparable.

In slot one, we have our 4K render, which took about 45 seconds.

So again, this can vary wildly depending on how many objects you have in your scene.

When I was rendering out some tests to test my own hardware, I found that using a 1024 sample size

took about a minute on my setup.

2048 generally took about a minute 30 and 4096 took about two minutes and 30 seconds on average to render.

So you'll also notice that these max samples are often given in powers of two, which would be like

512, 1024, 2048, 4096.

However, they do not have to be.

This is just for performance reasons.

You know, we could give it a sample size of like 400 and hit F12 and it would still render to that sample size.

This is a new feature in Blender is this time limit feature.

So instead of setting, I want this many samples.

So basically instead of setting your target quality, you can set your target render time.

So it's just basically give me whatever you can give me in, you know, three seconds and Blender will

render that one here as well.

And lastly, if you're finding your render times just unbearably long, you can always disable this denoise bubble here.

I don't highly recommend it because it is going to cause your final images to be a lot grainier.

And generally, if you're working like if you are trying to get a shot for, say, your portfolio or something like that,

it's generally better to just wait a little bit longer and have this image denoised.

And this denoise feature is driven by an AI, which is pretty cool, but it will slow down your render times.

So samples are present in Cycles, but they are also present in Eevee.

They are just going to end up looking and working slightly differently.

So let's pull up a new slot here to render into.

Now, by default, we're at 64 samples for our render.

So if we hit F12, you can see that happened in 0.8 seconds.

This render was complete, but we do have, again, a lot of issues with sort of the noisiness of this and the shadows.

We can increase it to something like, I don't know, 512.

Let's change our slot here so we can compare them later.

Let's hit F12 on our keyboard.

Give this a moment to render.

Now, you'll notice with Eevee rendering, it doesn't come in noisy and then fade in.

It will just take a while to calculate, and then it will pop in all at once.

So we can view the difference between slot 5 and slot 6.

Again, they're pretty comparable, but you will start to see a difference in the shadows.

If we rendered at 4K...

Let's put it in slot 7.

Yeah, so it took about 5 seconds to render this whole thing, which for the real-time engine is quite slow.

But you'll start to see a lot more softening here in the shadows and things like that.

So I know I have glossed over this rendering subject at a pretty high level,

but the really important takeaways for a basics-level course is that

Eevee is going to be your real-time, very quick, very lightweight renderer.

Cycles is going to be your more powerful but slower renderer.

And the really important thing is that you increase the samples or decrease the samples, as the case may be.

Changing the samples here will affect the overall quality of your render.

And we can save any of these renders in these slots for a quick comparison, which is really helpful.

So once you have your rendered shot in one of your slots and you're happy with it,

we need to save it externally, because if we close out Blender without saving it externally,

we will lose those images, even if we save our Blender file before closing it.

So depending on your render times, you could potentially be losing hours of work.

So to save these final images, all we have to do is come on to Image, Save As,

navigate to a location on your computer where you wish to save your file.

You can name it here. You can choose the file format.

Here are all the file formats that Blender can export images to.

And any of these other advanced settings, and you can click Save to save it as your image.

So now if you navigate to that location, you can pull it up as a regular PNG file.

So very important, make sure you save your images again, because if you close out Blender,

even if we have the file saved, those renders will be gone and you will have to re-render them.

So that concludes all the topics I want to cover for the Blender basics course.

But before we go, I am going to take you through a final project,

so you can see how we string all these things together to make a complete 3D asset from start to finish.

Now, I'm going to move it very quickly through the final project,

as by this point all the concepts should be review.

So if you feel shaky on any of the topics we covered,

go back and review that material before proceeding with the final project.

So that is all for this video.

And when we come back, we are going to jump right into our final project.