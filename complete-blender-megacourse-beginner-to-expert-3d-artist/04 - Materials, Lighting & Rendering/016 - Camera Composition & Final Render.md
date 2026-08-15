# 016 — Camera Composition & Final Render

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 04 — Materials, Lighting & Rendering |
| **Bài học** | Camera Composition & Final Render |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 14:59 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Camera Composition & Final Render** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
- lighting, camera, rendering và compositing

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

Welcome to our final lesson in the Blender's Beginner's Course.

In this lesson, we're going to go over some camera and render settings.

I'm also going to show you how we can use render passes to composite our scene

and do some post-processing.

I'm also going to be showing a different version of the scene in the nighttime.

So this is my scene.

I changed some materials and also adjust the scale of the lanterns

and move the terrain around and play around with different perspectives.

So this is what I have so far and I'm going to adjust the camera.

So I'm going to do two things.

I'm going to go to camera and if I go down here, you can see on viewport display,

we can control how much you want to see of the background.

So I'm going to close this off so I can have a better feel of my image.

And I'm also going to increase this.

Now, this is all about following your guidelines

and seeing the best compositions that you can get.

So I'm going to go into fly mode and I want to show a pathway closer like this.

You have a better look of the cobblestone.

I'm also going to go to the focal length and I want to show more on my environment.

Maybe this is too much.

So let's keep this 90 degrees and let's use the shift to control how much you want to look up.

Okay.

So I think right now I have on my first lane lantern, pathway,

and we go straight to the little house. Okay.

So let me show you what I did for this glass because I was having some problems with the Eve.

So it turns out that I forgot to increase the transmission.

So for Eve, you need to adjust this to one and it will work way better. You can see.

And you don't need to use the glass shader.

I'm not using it in here.

So let me show you the lights.

We have our lantern lights.

And our cabin.

So let's remove the sun and the lantern.

So I have two lights inside my cabin here.

Pretty high on power.

And I also added this one.

So let me delete.

So I have this roof filler.

This is not a realistic light.

I don't have anything here that would emit light, but I'm using it to fill.

That's why I'm saying a filler.

And it gives this reflection here on the roof that it was kind of dull.

It wasn't reflecting that much.

As I'm analyzing it, I see that my light is filling too much here on the rain.

So what I want to do is go here to custom distance and reduce this.

So it only grabs the roof.

So you can see that if I go all the way down, it limits.

So something like this.

So one thing that I added here is a volume.

So you can see here on the side that I have a huge cube right before the house

and going to the mountains on the back.

So this doesn't have any surface.

So it's transparent.

I'm using a shader to create a volume scatter.

So you can see the effect here.

If I disable and enable, you see kind of a fog.

And I'm going to use this more on the night scene to create like a volume scatter for the light.

But for now, I just want to differentiate my foreground to the background.

On camera, we also have the option to use depth of field.

So if I activate that field, you can see that my front light here is blurred.

So what I can do is focus on an object.

So I can focus on Fantasy Cabin.

And I can see this becomes the focus.

And if I increase this, the rest starts becoming more on focus.

You can see if I go really low.

So you can adjust this depending on what you like.

I'm going to leave this at default.

And let's go over some render settings.

So here, we are using Eevee.

So this is the setting for your viewport.

I'm using 64, seeing jittered shadows on my viewport because it's increased.

The performance, it's bad.

We're using shadows, volume shadows.

I also adjusted here the intensity of my life path, which is settings for the ray trace.

So I increased the direct light and decreased the indirect light to give a more contrast to my image.

And like I did before, I adjusted the filmic and very high contrast.

So you can change it here.

So now I want to go here to view layer.

And I wanted to show you the passes.

So here, we have the passes.

And I wanted to show you the passes.

So here under light, we have a way to add to our render in a different image, a pass of this image.

So we can do a pass on diffuse, that is your base color, your light of your diffuse or

the color, your specular, only your volume.

So let's do volume.

And I'm going to use ambient occlusion, which is not the shadow.

But it's like the depth of each object of your scene that you'll see.

So let's activate this too and render.

OK, so this is our render window.

I think I'm going to reduce a little bit the focus here.

So if you go here to the top part, you can go to view layer and you have combined.

Here, you have volume direct and ambient occlusion, which are the passes that I added

on our render settings.

So if we go to volume direct, you can see that volume that I added being represented here.

You can even see some of the light rays from the light that I have inside the cabin.

But really, really small.

And if you go to image occlusion, you can see what I meant.

It's not the direct shadows from the lights.

This is not the shadows, but it's kind of like the depth of each object that we have here.

So we can use this to composite with our final image.

OK, so let's go to the compositing tab.

Here, we have our render image in this editor area.

We have our properties and here we have our compositor.

So let's go to new and it will automatically create this setup.

So you have a render layers and the output and the viewer.

So here I have my image connected directly to the output.

And now let's see if we go volume direct and ambient occlusion, you can change that.

So let's add some post-processing.

I want to add more glare, so I can go here, drag and use fog glow.

And you can see that all of my lights, if you pay attention to your lanterns, gain more shine.

And you can also adjust the size of the shine, but you can see this, yeah, like this, quality

and even the tint.

So there's a ton of post-process that you can add from saturation.

You can even add color ramp.

For example, if I want to drag the ambient occlusion here, control the amount of ambient occlusion.

I can do that, make this darker.

You can even use this if you want to desaturate.

Let's see, filter.

You can even play with textures right here, do masks.

I mean, there's a ton of effects that you can do like this.

So have fun with this, play around, let's see what you want to do.

So I'm going to add just a glare and I'm going to add a vignette.

I'm going to do like a sharp vignette.

You can adjust the factor.

So let's add this ambient occlusion to our image, make everything a little more defined.

So we can do the same way that we do with shaders, which is mix.

And I'm going to use

and I'm going to use multiply.

You can see here that even our environment back here turns darker.

So just a little bit, it's because I have the color ramped, so if I go here.

And you can do this with everything.

If I go here, connect volume direct, I can multiply this to the volume.

So after you render, this is not like a set render, you can play around with your image

with different passes.

So I'm going to remove this, I want to use my...

Actually, I'm going to change a little bit just the position of my camera.

I'm going to just change the position because I think it's

I have a smaller margin here than here.

And we're to...

Yeah, I think this is better.

Okay, so I'm going to render again.

I'm going to adjust a little bit the color ramp.

Okay, so we're going to render again.

I'm going to adjust a little bit of the depth of field, I don't want it to be too much.

And one last thing is the output.

So here on output, you have the format.

So here is the resolution.

So here I have full HD.

I want to do like at least a quad HD.

So you can adjust the proportion also.

I want to do at least...

So you can go above and do 4K.

And you can adjust here and a path that you want to save.

Or you can just save automatically.

So here I did a new render.

This is our image.

So we can go here and save as.

I have here final renders.

And I'm going to save it fantasy cabin day.

Here you have some settings if you want to.

You have alpha, we don't need alpha.

And you can even change the color management right here.

So we can override.

Just pretty cool.

Let's follow suit.

Let's save image as.

Okay, so now I'm going to show you the other render scene that I have.

So I duplicated this project and did a new scene.

You can see that right here I use...

Let's go to the shading tab.

You can see here that I use a toned down shader for the sky.

Kind of an afternoon, night feel.

I added a few fireflies here.

Let me show you.

Using geometry nodes, which is a pretty cool feature.

Let me show you real quick.

Geometry node editor.

Something real simple.

Something like this.

You can create a curve that you have different objects instanced on this curve.

So yeah, it's pretty cool.

I also exaggerated a lot of the light and the volume shader, the volume scatter.

Just to get this effect.

So you can play around with your scene, set up different lightings, try different styles,

have fun with it.

Let me save this one too and I'll show you the final result.

Okay, so I added my final renders here in another Blender file where I have a lot of

Okay, so I added my final renders here in another Blender file where I have my inspiration.

And this is the result.

A cute fantasy cabin style.

This is really fun because as you can see, we didn't use any external texture for the sky, for the grass.

We used only built-in textures from Blender.

So if you combine everything that you learn here and then start to use another realistic

textures and play around with cycles that is even more realistic, you'll see the possibilities are endless.

So I'm pretty excited to see what you come up with and have fun.


