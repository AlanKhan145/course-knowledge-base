# 076 — Texel Density

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 17 — Basics: UVs |
| **Bài học** | Texel Density |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 16m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texel Density** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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


We now know how to unwrap a UV map from our models,

but before we move on into texture painting,

I just want to briefly touch on the subject of texel density.

Now, texel density refers to the overall resolution of

the textures on your objects in pixels per unit of space.

A standard texel density for

a third-person game is approximately 512 pixels per

square meter of space in the 3D environment.

What does that mean practically?

Let's hide this for a moment and let's just add in a plane.

We're just working with a single surface here and it is

currently two meters by two meters in the x and y directions.

Now, what a texel density of 512 per square meter means,

means that for each of these one-meter segments,

we will be using 512 pixels by 512 pixels of image resolution texture.

We will be using 512 pixels of our texture by 512 pixels of our texture.

At that target resolution,

this two-meter by two-meter plane would require

a texture that has a resolution of 1024 by 1024,

or also known as a 1K texture.

A common size for building modular environments for

pieces like floors and walls is to have it be four meters by four meters.

Let's scale this up by two.

We now have a plane that is four meters by four meters.

For a piece that is this size,

we would require a texture that is 2048 by 2048 pixels

in each dimension, which brings me to talking about the resolution sizes for textures. Now, in CG art,

all textures are going to be perfectly square images,

and they're going to have a resolution in pixels that is a power of two.

What that means is,

let me pull up a calculator really quick.

So if we had two pixels by two pixels,

would be the lowest size we could possibly do with a power of two.

We're starting with a base of two.

If we up-res that by two,

we have four pixels.

If we up-res that by two,

we have eight, 16, 128.

If you're all familiar with game graphics or pixel art,

these numbers might start to look very familiar to you.

In fact, when we come into our text tools add-on,

again, under the UV editing workspace,

I've just pressed N to bring up the side panel.

I've come into the text tools tab,

and I've clicked this first drop-down here.

Our first option is the size of the texture.

So we can click this drop-down and view here all these common power of two textures,

sizes, I should say.

So the reason that we use these sizes is for performance reasons for your computer.

So it is just much easier for your computer to calculate and sample

from textures that are one of these power of two sizes.

The most common texture sizes for modern pieces are usually starting at 2048,

which we call a 2K texture,

up to 4096, which we call a 4K texture.

We can even in Blender go up to an 8K texture,

although this is less common.

The larger the size of your individual images,

the more memory they take up on your computer,

and you will see a small performance hit when working with very large textures.

So if we were to apply a checker map,

a UV grid to this plane,

and this UV grid is the same one I created for the watering can exercise,

which happened to be a 2048 by 2048 size.

So if we apply a 2048 texture to a four meter by four meter plane,

this is the resolution of texture we should be getting across the objects in our scene

if we are aiming for a final resolution of 512 per meter square.

And again, that resolution of 512 per meter square is not a hard and fast rule.

It is simply the most common resolution size used for games in the third person perspective.

Obviously, if you were making something from a first person perspective,

you would want to make the resolutions a little bit higher,

perhaps 1024 per square meter.

Because when you zoom your camera in very close to these objects,

if the size of the texture is too low, you will start to see the individual pixels.

So the texel density, as I mentioned in the UV unwrapping demonstration,

the scale of these UV islands matters because we want to have a uniform

texel density across this object, which we currently see that we have,

because the checker pattern on every piece of this mesh is approximately the same in size.

Now, let me show you some examples here

to further demonstrate what I mean.

So on an individual object, the texel density needs to be consistent in order for the textures

that you later come in and apply to this to appear correctly on your model.

This model has good texel density.

We can see that everywhere we look on the model, the checkerboard pattern looks even.

So any textures we apply to that will look even and consistent.

Any other textures we apply to that will look even and crisp.

This version of the model has bad texel density.

We can see that some portions are extremely high resolution, while others are extremely low resolution.

So when we apply textures to this version, these areas will appear crisp and sharp in the textures,

which we do not want.

In addition to having consistency across your object, you also need to have consistency

in texel density across multiple objects if you have multiple objects in your scene.

Here is an example of poor texel density in action with textures applied.

If we look at the character in this image, we'll see that all the textures on his clothing

and face and even the door behind him appear clean and crisp and sharp.

However, if we look at this area of the wall behind this character, we can see that the

texture here is blurry and pixelated.

And so when the two are standing next to each other, it just looks very off.

So this is an example of high texel density and low texel density.

But because these two objects are appearing in the same scene, we actually want them to

have consistency across the objects.

So we want to have consistency across the objects.

So if we're thinking about this being the basic resolution for every object in our scene,

we now need to know how to scale the UVs of smaller objects and larger objects appropriately

to match this resolution.

Now we could do this manually, but I'm going to show you how to do this in the next video.

To match this resolution, now we could do this manually by coming in here and scaling

the UVs down until they matched.

But that would be wasting a lot of our texture space.

We could apply a lower resolution texture to this UV map.

So let's create a new checker map.

Let's change our size to 1024.

Let's select the watering can in the 3D viewport.

And let's press checker map.

And you'll see it's created a new material here with a slightly lower resolution of UV grid image.

So now this watering can is displaying the same or a similar UV grid, except it's just

a smaller size image that it is displaying.

So you can see if we switch between 2048 would give this a much higher resolution than the

ground below it.

Switching down to 1024 gets it a little bit closer, but we may even need to scale this down farther.

Let's change this to 512 and hit checker map again.

And this is actually the closest of all the resolutions.

So for an object of this size in the scene, it would require a texture resolution of 512

by 512 to match the same texture scale here or the same texel density.

If you wanted to work with 2K textures, the other workaround for mapping smaller objects

in your scene is to have multiple objects share the same texture space, the same UV space.

So let's quickly add a cube, I guess.

It doesn't matter.

Let's scale it down a little bit.

And now I'm just going to move it up in the Z axis by one.

So I'm just going to move it by eye.

Just so it's sitting on our ground plane and we can see it a little bit better.

So the other solution for matching texel density across different objects in your scene,

as I said, you can have a larger texture.

But we can scale these islands down. Islands down.

And then we can set our material to the same material here.

Let's grab these and scale these a little bit down to about there.

So now, as long as, let's grab both of these.

We're just going to select one and shift select the other.

And then we're going to come into edit mode by pressing tab.

So now we can see both sets of UVs on the same texture here.

So as long as we lay out all these UVs in such a way that they are not overlapping each other,

we can have any number of objects share the same UV space.

And that is another way that we can save memory when texturing multiple objects in a scene.

So for objects of this particular scale, we could have quite a number of them.

As long as we can fit them all onto,

as long as we can fit them all onto this zero to one UV space,

we can have as many objects as we like share the same texture set.

One quick way to get your resolutions exact is,

again, we're going to use the text tools add on here.

So when I scaled the UVs, I'm going to use the text tools add on here.

So when I scaled the UVs of this object here, I just sort of did it by eye.

I came into the UV editor, I selected everything I wanted to scale.

I pressed S, I scaled it up and down, looking at my viewport until they roughly matched.

However, using the text tools add on, we can get this to match this resolution,

to match this resolution exactly.

So to do that, just come into the object whose UVs you would like to scale,

select the islands that you would like to scale.

In this case, it is everything.

And now under the UV layout dropdown,

we're going to come down to this second to last little box here.

And right here we have a number and it says 256 at the moment.

So this number represents the resolution per square meter for this texture.

So as I said, a couple times, this, this bottom plane is at a texture resolution

of 512 pixels per square meter of space.

So let's come in here and type 512.

So now when we have all these faces selected and we hit apply,

Blender will scale that to its proper, to the proper scale.

Now, it has done it improperly here because I have not applied the scale of this cube.

So if I come into the 3D viewport and press N on my keyboard to pull up the N panel here,

and under item and transform, we see it has a scale of 0.2.

So in order for this method to work properly, your scale needs to be applied.

Now we should already be familiar with how to apply these scales.

And the way we do that, of course, is just to select the object,

hit control and A and apply the scale.

Okay. So now we have all these values at one,

but the mesh has not changed size at all.

So now if we come into text tools, leave this at 512 and press apply.

Now this resolution matches this resolution exactly.

So that is all I wanted to discuss for tense, for text cell density.

Again, just make sure that your checkerboard patterns are even

across your whole object and that they are equal across multiple objects in your scene.

Should you have multiple objects in your scene

and try to maintain consistency throughout all your models.

So that is it for text cell density.

When we come back, we're going to begin to discuss how to hand paint textures in Blender.


