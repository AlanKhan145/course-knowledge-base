# 015 — Basic Lighting Setup

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 04 — Materials, Lighting & Rendering |
| **Bài học** | Basic Lighting Setup |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 25:29 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Basic Lighting Setup** trong pipeline của section.
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

Welcome! In this lesson we're going to finish the materials of our little cabin and start to add

lights. So for our little cabin I'm going to just copy the material that we have on our lantern.

Let's see if I have the correct name. Yes, glass. So I'm going to go here and search for glass

and in this one I'm going to use the metal.

So now let's apply the material. Let's do this wood part first. So I'm going to add a new material

called wood and for this one I'm going to use the wave. So we have a wave texture here. Let's go to

factor and connect to base color. Actually let's do in this part here so you can see better.

So let's do the main cabin. So you can see here that we have these waves here and this kind of

stripes actually. So let's press ctrl 3. Oh, I forgot to activate this again.

Okay, so let's add this part texture coordinate and I'm going to rotate this 90 degrees.

Okay, so now we have waves on this cabin. I want to do kind of a siding, kind of feel like

wood panels. So to do this I can go here under wave profile and I can choose saw. So this kind

of looks that we have different borders and planks of wood top and down. Okay, so from this point I

can adjust the scale and I'm going to add a color ramp again and let's go to our inspiration board.

Maybe this brown here.

So for a darker color or lighter maybe.

Yeah, I need something more brown-ish.

This is beautiful actually.

I feel like our project is a little bit dull.

So maybe too saturated.

Okay, something like this.

Okay, so beside this I also want to add a displacement like we did before.

And I'm going to use exactly this vector.

You can see that it darkens. Let's connect this to the roughness too. Let's see if we can have some.

Okay, so now we can see a little bit better. This part is more smooth than the top part.

So this doesn't work too well. I'm going to add another wave texture.

I think this is going to work better and connect the base color. Let's connect the vector to here again.

And in this case I think I'm going to use sine.

Maybe so. And I'm going to go here under not phase offset the distortion and I can see that I have

this kind of crazy looking distortion that I'm going to fake as a wood texture. So let's see.

I think this works better on sine. I'm going to reduce the scale.

And what I'm going to do is multiply. Before this ramp I'm going to multiply these two vectors.

I gotta move me. Let's bring this mix a.

Let's connect this. Okay, so now I want to make... maybe we can use multiply or maybe add.

I think this could be too intense. I'm going to go with overlay so this way I have my zero.

It's my board and I can add just a little bit of texture here. If I go too far it can be a little

bit crazy. And I can add another noise on top of this one to create some parts where it's not

showing but I'm going to leave it this way. So maybe something like this. Pretty simple.

So you can see when I add my variation it looks pretty subtle. Even too subtle. I can adjust.

I can add even a third color here to do some highlights.

And now maybe I can use this mix part here to create the height.

Just to fake a little bit. And let's see what happens when I connect with roughness.

This wave here makes a little bit more sense to have it on roughness. You can see here.

And this one makes more sense by adding the displacement. So here you can see the difference.

This is too much.

Five and this with the roughness. Maybe it's a little bit too intense. I'm going to multiply

to a math here. If I multiply it's going to be more rough. Maybe something like this.

You have a cute shin in these textures.

I think we need to bump the saturation a little more.

So let's see what color management I have here.

So let's change this color management from ADX to Filmic. We have various here. We have standard,

Filmic log. Let's change this to Filmic and let's bump the contrast. I'm missing this.

I want to go very high. So this gives it a more stylized look. You can see the difference.

Okay. So from now, let's move on to the frame. So in the frame we can have this kind of

slabs that we have here. I think it's too much. Let's reduce this.

Maybe this overlay here. Okay. I think this is too much. So I'm going to reduce this a little bit.

Maybe this overlay here. Okay. I think this is good. So let's create another one for the frame

and the frame here on the windows and also this part here. So we need one. Let's do another wood

and let's remove the first wave here. I'm also gonna

change the rotation here maybe. Okay. It's okay. I'm going to change the scale

just to match the one on the outside because

this would be the same kind of wood. Let's rotate it 90 degrees on X.

I also think this is too... this color is a bit too much here. So let's see if I can...

Yeah. This is better. Let's do this on this one too. A little bit more subtle.

I don't think I'm going to use the displacement here because we don't need to. So I'm going to

select this. I'm going to apply on this and also on the windows and also on this part.

Ctrl L, link material. Actually this one. Ctrl L, link materials.

Let's do a slight difference in this part here. Yeah.

I'm going to just multiply a little bit more. I want this to be more rough.

Let me see the way that I have the texture here. Maybe if I change this to sine.

So it's better. But also I think I'm going to do a color ramp. A color ramp for this.

Let's see if I can control this better. So I'm going to reduce. If I go less black,

you can see that it starts to become light, which means if I connect this to my roughness again,

it's going to be more rough. So if I go here and slide down, you can see that it starts,

the shape starts to show there. So instead of multiplying, I'm going to do this

and I have a better control of my roughness. I can even go here and make this not so rough.

So I'm going to copy this and see if this looks better.

Nope. I connected the wrong alpha. Okay.

With a small difference. You can see right here on the side.

This is better.

Okay. Let's add the same wood here. I think I'm going to add, or let's test the material

that we have on the pathway. I like this. I maybe prefer this than the wood. Let's see, wood too.

Okay. So I'm going to add this.

Like this, I maybe prefer this than the wood. Let's see, wood too.

I think I prefer the pathway material.

Let's see. I'm not sure yet. Maybe this is too red.

Okay. So the last thing that I'm going to do is the roof material.

So I'm going to create a new one.

And for this, I want to do just a simple mix of colors.

So I'm going to create a new material.

And for this, I want to do just a simple mix of colors.

I like this color here of the roof.

This one.

You also select.

Okay. More or less like this. Now for the factor, if I go to zero,

I have the first color. And if I go to one, I have the second color.

So I want to multiply this with the factor that each of these types is going to receive

or the first color or the second color. So I can go here by selecting object info and going

So I can go here by selecting object info and going under random.

Now you can see that nothing happened because each of these is an instance.

So if I go here to array and disable, now I have each tile being different.

The problem is that I will need to copy this one to the other side.

So let me do that real quick.

I will need to copy this tile and the cabin curve.

Instead of mirroring it, I'm going to rotate and moving both of them together.

Okay. So now I have this nice variation here.

Okay. I kind of like this color. Let's apply this to this main roof here.

Let's see how it looks. We need to realize this system also.

Okay. So this is it for all of the materials.

Now we need to add some life to the scene. It's very dull and dark right now.

So let's start by adding a new sun. We have the world environment,

which is giving us a lot of light. So let's add a new sun.

It's giving us some scattering with the light, but it's kind of an overall light.

It's an indirect light. I need some direct light in my scene.

So let's go here under our outliner,

under collection and let's add a new collection called light.

Now I'll go to add and add the sun.

Here under light and sun. Okay. So here we go to the properties

and we have the temperature, or if you want to add a color, strength and exposure.

So the sun is a direct light, so it doesn't matter where the object is in the scene.

So right now it's pointing directly down.

It's under a cobblestone. Okay. No problem.

Okay. So the only thing that matters here is the rotation.

This is going to control the inclination and then on Z, your rotation.

Let's go back to the scene. You can see here from the shadow.

I want to add more or less a light like this, and I want it to be pretty strong.

This is too soft. So I'll go here to strength and increase three, maybe it's too much

and increase the exposure. And I also want to add a more orange tint to it, so I can lower this.

Five thousand, maybe four thousand. Yeah, this is pretty strong, but I want it to be this way.

We can adjust this later. I think this is good for now.

We have a nice orange tint on the scene, a direct light.

Now I want to add one light.

Now I want to add one light in the cabin, so it looks a little bit cozy, like there's some life inside.

So let's go to our top view and I'm going to add a point light.

So let's raise this on Z because it's right there at the oranging point.

And now we can't see anything. Let's go close, see if something happens there.

Nothing. So let's increase its power, so you can see

that it starts to light up.

OK, so I kind of want to make this point here.

I like the way it's showing here.

I like the way, OK, so let's fake this light a little bit and right here on our glass,

I needed to add this part's alpha so the light shines through better.

So let's reduce this.

Also I'm going to add a really warm temperature, yeah, 3000, I have my sun high, so.

And also add one to the top part here, and that's the center, I wanted to show that it's

right even though we have the sun, so I want to increase by a lot, let me increase this

exposure too, yeah, but the shadows here are a bit too much.

So I have the soft fallout here, so I can adjust the radius, so if I have a bigger light

radius, my shadow starts to have a gradient, more subtle gradient.

You can see the area here, so I don't want it to be too sharp.

Something like this, and I'm going to adjust one point that I see that I have cute shadows on the ground.

I think this is good.

OK, so reduce this, maybe it is too much.

OK, so now I have this light here that I'm going to also adjust the radius, and with

the light maybe, sun is a little bit too bright right now, we go to one.

OK, when I do the nighttime scene, this is going to be the main focus and everything

else in the world is going to be darker, so you have more of this moody effect.

Now for light, I want to add the lantern light, so I'm going to create new, just keeping everything organized.

I'll move to a new collection, I'm going to duplicate this light here.

Now I'm going to open a new viewport, just so I can see here from above, and also see

the result here.

I'm going to first do this one that we have on the first plane here.

So as I add, you can see that we already have a nice light there.

I'm going to make the radius a little bit small, and you can see the result from the alpha glass.

Let's render it, just so I can see how this looks.

I think this could be a little bit warmer.

I'm missing this from the sun, more intensity, and also I'm still missing some contrast.

So what I'm going to do is go here and increase the direct light intensity.

I want to, in volume we are not using it, I don't see any difference, it doesn't matter.

And the surface, here you can see how it affects this render here.

So from direct light, you can see that it's smoother than zero, if you affect indirect.

Okay, so I'm going to copy this light to the other lanterns.

Okay, now let's see the difference without light and with light.

So what I'm going to do here, I'm going to reduce the strength by a lot.

So I have this light here, I think this could be one, and I'm going to change this value here.

I need to increase this by a lot.

Yeah, use a more saturated and also while increasing this.

I don't think, this is too much.

I like the effect this gives the sun.

I'm going to increase this and also reduce this.

Yeah, I messed this up here. Okay.

So this is our render.

I can see a few things that I need to adjust here.

So let's see if I can draw.

So let's analyze what we have so far.

First we need to adjust the overall resolution.

Right now, I see that I need to adjust this terrain here, if I can make it a little bit

closer here and maybe overlap.

We have some floating geometry here.

I also need to adjust this part here that is showing the circle.

Maybe adjust a little bit more of these flowers.

Also, I want to play around with the settings of the composition to see what I can do to

improve the occlusion that we have.

I want to desaturate a little bit more the cabin and also adjust here.

You can see that we have some shadows.

It's not correct.

The shadow here is not looking good.

I also want to add some vignette maybe to give some atmospheric feel.

Yeah, so I think that's it.

In the next lesson, we are going to work with the compositioning workspace and we'll play

around with using glare and bloom and also some vignette and see what we can do to fix

these problems here.

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
