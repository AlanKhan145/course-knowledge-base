# 215 — Starting with Ambient Occlusion

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Starting with Ambient Occlusion |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 17:17 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Starting with Ambient Occlusion** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
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


All right, welcome back.

I remember in the last time we were about to just add like more details, we were talking

about the connection between these two parts here.

We added some rust here and there, but I believe that this could get extra.

Of course, we are in a spectrum where things, you know, you can go like a bit more into

detail on like how you can detail your object.

But what I'm paying attention here for is that to achieve some realism and show you

guys some tips and tricks you can use to add quick details, realistic details, I should

say, to your model quickly here.

Let me just increase that thing here, G in the Z, there we go.

So, yeah, what we are talking about today is ambient occlusion.

You can see it here.

This node, you can just search, shift A, and then search, it's the first node, AO, or ambient occlusion.

And this is not like, this is separate from the actual ambient occlusion map that comes

with the texture.

It's a separate node, essentially.

And what it does, let me show you here, if I connect this to the viewer, let's not show

it on that texture.

It's, by the way, it just shows on each texture separately, so I just need something that

it's like quite big like that one. The body. Yes.

So, shift A, search, ambient occlusion.

And if I plug in the color and then add a color ramp, at first you won't see anything.

That's because we need to activate the ambient occlusion in Eevee.

We are in Eevee render view here.

So again, I'll just quickly switch from cycles to Eevee to be able to change the settings.

And let me turn on the screen space reflections and the ambient occlusion, and immediately

you can see the difference here.

So if I turn this on and off, however, the more I crank this up, the more you could see

that, you know, I get to have these sharp edges.

I tried to like separate the, like where this is coming from.

Let me quickly test that here again.

So again, it's coming from like the normal map now.

I think it's oriented by the normal map. Yes.

I can just bring this up a bit here and then separate X, Y, Z.

And I wanted to feed only into the Z of the normal and see if that works with me.

What I want to achieve is like the ability to affect only one axis.

Like I don't need that grunge all over the texture, but yeah, maybe I can feed the normal

here as if I'm subtracting the normal from the actual texture.

So I just need that look.

Yeah, I don't need all these messy parts because essentially, if you guessed, we will be using this as a mask.

And let me also give you another trick.

So I'll just plug this back in.

You can just plug the normal and you will have that clean edge selection here sort of,

or that edge mask.

So yeah, you might've guessed that this is going to be our mask.

Let me decrease the whites here.

I just wanted to like bleed a bit more into the top.

It is looking fine.

Again, I can just quickly here change the settings.

But nonetheless, this is not going to be like really affecting us here because we will be

working in cycles.

I'll just quickly switch to cycles.

This will preserve the settings for the Eevee viewport or the shading viewport.

I'll quickly here switch to cycles.

I don't think that it has like its own separate settings, but it's looking way better here,

like it's looking as much as I want it to be right off the bat.

It's only just a bit too much on that side.

So just again, pay attention not to like make things too much.

I'll just decrease the whites, increase this a bit.

And if it's like, again, you can just break that tiling by a noise texture, maybe so you

can feed that into a noise texture.

I probably should add it to the back.

I don't want the color.

I want the factor to be plugged in.

Let me decrease that a little bit.

My scene is a little bit more slower because you can see that the more we edit textures,

the more memory we're using.

Although the face count is still as like at 3 million, but it's still having it's still

like suffering from that, you know, problem of too much textures or textures with a pretty

much high resolution.

So this is not really the textures I wanted, I believe we should add it, so I'll just hold

Alt and drag it back here.

Make sure that I plug this in the viewer and then plug these two.

And let's flip that.

I quickly switch to Eevee here and see if this helps. Not really, no.

It's not giving me the look I want.

We will be rendering in cycles anyway, so.

I'll switch back to cycles and let's see.

Color into factor, is it AO?

Oh, it should be plugged directly, there we go.

What if it's the color here?

It's the same result.

And I can manipulate distance.

Something like that.

I think I should plug the noise texture into the distance here.

So I'll just reset these two and plug that color into the distance and maybe that color

into the factor.

And now, yeah, there we go.

Now I'm getting a bit more randomness.

This is the randomness I wanted to get.

I just didn't want it to be very uniform.

And if I just increase this harness, if I just make this a bit more harsh, you can see

that I'm getting that randomness, which is pretty awesome.

I can change the scale.

Let's try a musgrave texture because this might be a bit better.

And let me increase the blacks.

No, it's not doing as good.

I'll hit shift S and change this to maybe a voronoi texture.

I added a sky by accident. Voronoi.

That's a bit too harsh.

I can maybe feed that into a noise texture and I should probably add a color ramp here.

It's very easy for things to get too crazy in terms of note setups.

We've been only talking here for maybe 10 minutes and then just like you see, the note

tree is getting a bit more complicated.

But let's just keep it simple.

I'll delete these two because these two will just suffice.

So if I severe that connection, you can see that.

Let's reset the distance to one.

You can see how uniform this going up.

If I were to plug that color into the distance, I immediately get that like, you know, random

look and this is sort of something I want to achieve.

It could be more obvious as well in the bottom here.

So I want this to be a bit more horizontal.

So as you can see, like it's not uniform.

So this is before, you know, going in like a straight line and this is after.

And it can just play around with these like parameters just so that I can just be able

to increase that.

You can maybe increase the scale to one. No, make it 10.

And as you can see, you get even like more details into the actual like placement of the AO map.

This could be obvious above the cable box here or under the cable up top.

But yeah, this is what we want to achieve.

Like this is what we want to make our object look like.

I believe, you know, using that map is going to be very useful.

Like immediately as soon as we like activated the AO map and the screen space reflections

in Eevee, we immediately like had it like a completely different look, which is extremely nice.

So that immediately changed.

Like you can see that these reflections are very nice, you know, and, you know, these

would be more obvious in Eevee as well.

And if we were to add that setup, the same setup, I don't think, yeah, this is the one

affecting the actual AO.

So like this is how much it appears.

And here I'm controlling like how random it gets.

So you can see that, you know, how randomly it bleeds into the actual texture.

And then you can just have that factor of randomness, maybe some areas are just completely clean.

And as you can see here, this is achievable through the ambient occlusion.

Just like these three shift equal to make sure that I have things more organized.

And I'll hit control S. So let's revise what we want to do here.

We want to like maybe bake to the entirety of the actual object here so that we have

one texture and we don't have to go through each and every like one of these textures,

you know, so the wireframe, the top and bolts and body and cable. Yeah.

So this is one thing we need to pay attention for now.

So I don't think we have any modifiers.

Oh, we actually do have some, but that shouldn't be too much of an issue.

I think the most issue we'll be facing here.

Let me first reset that.

So we'll just connect that one. There we go.

No, actually, I want to show you something else.

So as you can see here, we selected these like creases or, you know, the crevices and

the actual body of the object.

Another thing you can do is that you can just flip that and immediately you have like

a different selection, which is like the actual object here.

And by, you know, masking the difference, you can just be selecting the actual edges

of the object here.

So instead of like selecting the objects, you will be selecting the edges.

You know, I can just play around with that to make sure that I make it a bit more extreme.

I think I can flip that too. There we go.

Oh, actually, instead of doing that, you can just flip.

I'll just control Z here multiple times.

So what I wanted to show you is that you can just flip that, invert that mask to make it,

you know, you have to make it so that you are only selecting edges and then you can

just add that edge wear to your objects.

So invert, you can just add this here.

I think you can also make the blacks more profound so that, you know, the mask is selecting

everything but like the creases.

So I just flipped the actual mask. That's it. So yeah.

And you can, again, use this as a mask and add whatever detail you want to your edges

and then exclude that from the actual object, you know, as if you were using a mask.

I'll just delete all those.

And this is now like my AO setup.

So I'll just leave it here.

It's plugged in with a normal.

Can do shift right click to add that reroute and I'll just keep it up there maybe.

Maybe I'll hit control X.

We don't need it.

I'll just leave it up top and then adjust control shift and click that to plug it in quickly here.

Just turn on the shortcuts.

Maybe you could actually like start on the next lesson.

We'll start by making two duplicates of our object here.

One will be like to destroy it and the other will be like to bake the actual map and maybe

you could actually bake and then go ahead and have like a new object or use the same

object to destroy itself.

But again, for now, you can experiment a bit with the AO map.

Make sure that you have it activated in cycles, sorry, in Eevee so that when you are whenever

you are on the like viewport, sorry, shading viewport or viewer, you can just see whatever

you're doing in the actual viewport here.

But for now, I will catch you guys on the next lesson