# 214 — Adding Textures

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Adding Textures |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 37:39 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Adding Textures** trong pipeline của section.
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

All right, welcome back. We stopped at this part and we were about to like just copy that

staircase after we UV unwrap it. Another thing I noticed on the reference here is that I

see like these small grills that are going across the cylinder here, which is going to

be easy to make. Let's just add the UV map to these two. I think I'll just leave them,

leave the color as is. Like they will have just one color. Just make some colors here.

I can probably go in my original scene and start coloring these objects, but let's go

ahead and just go make it cycles. Hit control B and switch to cycles. In cycles, I'll deactivate

scene world to add my own lighting. It's CPU. Let's switch to GPU to make things a lot faster.

I'll leave the noise threshold as is. Light path is to 8. And what else? I'm just looking to like

optimize my scene quickly here, but this looks fine. I guess looking at the reference here would

be a good idea. So I'll just zoom out. I think I'll just pick that red. Like this red looks good.

And for the stairs or like these vertical supports, I think having them like go all the way or go like

with black or blue is quite good as well. I see also some side, like some side supports here.

Quickly switch to Eevee maybe. I did not copy the side supports. I don't think I did. That's fine.

I'll just select these two and hit control L, link materials. Select maybe this one, this one,

control L, link materials. And these are all right. So I'm just going to, so they will like have the

same color. I can now go back in here just under here. I see that it has stairs one. Why is that?

Why do I have two stairs? Quickly here, search for, whoops, stairs. Come on. Oh, because, okay,

they can have the same stairs. Why are they just not the same? Vertical support. Vertical support.

Why do I have 001? I'm just making sure that I don't have duplicates of the same material. So

we'll just switch to that material. And now vertical support should say zero, but it's not.

Oh, now it should. Okay. Now no materials are using that vertical support, 001. I just don't

want to confuse myself while texturing all the different objects here. I can quickly here switch

that stairs to a red color. See how this looks like. I think the sides should have like a

different color. Or maybe I should like desaturate that red color a bit.

Hmm. Let's switch to maybe dark blue. This is fine. As for the body,

I will severe that connection, just delete everything.

Platform, I'll leave it for now. So the same goes for the pipes. Wireframe can be white.

And this is for both wireframe. Cables, maybe cables could be red actually.

Like this accent color would be good to have. Maybe dark red.

This is good. And these connectors or supports could be black.

And now the grills could be the same as this color. So I'll just select the rails.

Now control C and now select the grills. Control V to paste a color. Remember to save.

The dish could be white. So these could be deleted.

Control S. Of course, if I delete like the UV grid, the object still has like its own UV map.

So the mapping is just added or, you know, the mapping that I add to any object,

it's not going to disappear. It's still going to be there. So I'm not worrying about that for now.

Um. These supports could be the same blue. Control V. And

maybe that could be in red. Let's try.

I can turn off that for a second so I can see what I'm doing.

Um. Yeah, let's leave it red. At least it's visible that way. Although I prefer the blue.

And let's color this one. Did I not give it a material? No. Um.

Let's give it a material and call it vertical steps. Let's also make it that reddish color.

So control C. Control V. I don't have to worry about like exactly matching the value. Um.

Maybe you can also color like the entrance.

So I can color the entrance in. Oh, I need a new material here.

I will just make sure that it's like it's alone in its own like material. Because if I gave this

one a different material, it's going to change like everything else. Um. New. Name it entrance.

And then give it the same color. And I can now just select

the opposite entrance.

Shift select.

Then shift select again. Control L. Oops. Control L. Link materials. I could I could

have still switched from the bottom menu. I don't know why I freaked out. Um.

Now that I look at this, I think it having like a darker color is going to help with like.

Me like whoever is looking that. Yeah, this is steel, not just like the same as this part.

Bolts. Let's select any bolts here.

There. No. Bolts. I want them to be completely black. And I want to see if this is going to show.

Yes, it is. Awesome. Um. I just want to show to make sure that it's like it shows on that

part. Of course, like they can't be really black. Like you can just give them a slider.

Uh. Less intense color. Something like that. It looks just good. I control S.

Um. What else did we not color? So let's look in Eevee.

Everything in here looks fine. The bolts are fine.

These different parts are fine. I think that this is a bit too thin,

so I'll just add a solidify modifier.

Let's see that control S. Let's see that again.

That is looking fine. So what else needs materials? Yeah, the platform, the pipes and.

And. For these, like so far, we might have not needed the like UV unwrapping for any of these

parts. I believe we didn't do anyway, but for the pipes, however, I wanted to add like some material

that's going to show the unmaintained parts, and for that I went on to like, you know,

texture websites and like, as you can see here, I just brought in or look for some rusty

materials. I just typed in rust. Here in ambient CG and as one example, this is like something you

would be looking for a material in all its stages of decay rust, and it's called metal plates

substance. And this is the original material. And the bottom you can see is used by these assets

and like from completely new to like maybe completely rusty. And I open them by order

here. Of course, we won't be using that. So like this is like the like the newest or

most maintained condition. And this is like a little bit more rusty.

More rust, more rust, and completely rusty. And you can see that the plates shifted due due to like

the, you know, unprofessional maintenance or something like this is the original state,

and this is like the most rusty state. So yeah, I just went on and downloaded these.

Like I believe I downloaded only two. I downloaded these two as well. As an extra,

you can also download or, you know, look for like signs or decals that we will be using as well.

Something like this. So you can just use, you know, have a plane and then put on decals on

that plane and, you know, use that as like something extra for your like, you know,

textures. But for now, however, I just want to go back into Blender and add in these textures.

So I'll just delete that for now. Thank you for joining us. And then control T and then no,

control shift T. I want the pipe to have this material.

So this and the completely rusty maybe. Let's see. Principle setup.

Come on. This is looking, you know, not too bad. This roughness and the roughness.

Again, I might not need displacement. So I'll just control X that.

Let's view that in cycles. Just want to make sure that the roughness.

Let me rotate that.

No, 90. It's not the correct axis. You can see the seam here that we were trying to hide

on the previous like lesson. This is also not what I'm working for.

Okay. I think it's this. So 180 on both. No. I think we'll just do the blending

that we did with the planes. I believe, however, that we can do this with the planes.

So I'm going to do this. I'm going to do this. I'm going to do this.

I'm going to do this. I'm going to do this. I'm going to do this.

I think we'll just do the blending that we did with the planes.

I believe, however, that we need to scale these down a bit. So I'll just scale them maybe by five.

Let's select these. Control shift T. Maybe add the same material.

And then shift A. Let's not go ahead with value for now. I'll just maybe three.

This is looking fine.

I switched to cycles because in here they appear to be a bit too shiny. That's it.

This is a bit more easy to go with.

I think we will be blending between these like different seams.

Let me quickly here shift A S and add a noise. Whoops. A noise texture in the mapping.

No, that's not what I meant. I meant to add this into the location.

But I think it being uniform is going to be a bit better because this isn't changing.

I'm just trying to figure out a quick way to break that seam. This looks just fine.

I'm just making sure that other objects don't have it that much.

I can go ahead and maybe do the same in here. Control shift T.

This is quite close. Two and a half.

This one is not.

Let's name it mid room so that they don't have like duplicates. One. This looks good.

Let's have a quick overview in cycles.

Let's look at reference image.

We will be painting some materials over that. I just want to make sure that we

achieve the best close result in terms of where the rust is forming.

I think we could also add that material to this dish.

I control S. I don't want my file to be destroyed again.

I think the top part needs to be toned down.

I think this could have the main room scale. That's good.

If I desaturate this color, it being faint simulates the same effect as it being decaying.

I'll just make sure to desaturate this as well.

Control C. Control V.

Remember to save.

For the bottom here, we can also give that light texture to here.

I'll quickly delete those and hit control shift T to add these textures.

I can of course change the color. If I add a mix RGB here,

I can just make sure that this is white. By that, I have two different decay textures.

If this is color burned, hopefully that doesn't destroy my...

Oh, let's have some filter here. I'll just bring that into the factor. Factor.

I think if I start matching the original color, I'll just be...

There we go. Make sure to hit clamp.

This has maybe less decay.

Let's add maybe line or... This is...

No, color burn seems to be the best option here.

Like I have two different types of decays here and there.

I can enlarge the scale here a bit because this seemed too big.

That's nice. Hit control S.

Yeah, the platform. The platform, I'm going to be mixing between the

two different shaders I added in here. This and the other guy.

I need roughness, AO displacement, normal, color.

Maybe add this. Let's see how Blender is going to add it.

Four or five. I don't think it added middleness.

This is color. This is normal. Oh, this is blocked in the wrong channel.

This is normal. This is roughness and...

No, I don't need that in here.

I don't need that in here. Does this have the same mistake?

Roughness in the metallic and... No, I just need the roughness.

In the roughness. Oh, this explains it.

It was a bit too shiny. I'm not sure if it was too obvious,

but it was a bit too shiny and it didn't make any sense.

Although in cycles, it looked pretty fine.

So let's just change the scale of that texture. Maybe five.

I think it's not going the right way. Point.

No UV.

Did I not UV unwrap it? I must. I did.

Um, normal is normal. Roughness.

Don't need that map. So one, two, three.

Let me quickly do this again just without the metalness.

Ctrl Shift T. Color. Displacement. Roughness.

And normal. One, two, three.

Let's bring in the AO. So this is the five maps.

Color. Okay.

I don't need anything in the metallic. What is this?

Normal. Roughness.

Normal in the normal map. And

let's change the scale.

I have UV grid. I have a UV map.

Um, I'll quickly here add a UV map again.

Image. Texture.

Let's unplug these. I just hold Alt and like removed it.

I dragged it aside. Let's actually only separate these connections.

I'll hit Ctrl Shift T. No. Uh, Ctrl T. That's it.

This is being connected to UV point. New. UV grid. Okay.

Hmm. I have the UV grid.

UV point. Flat repeat. Flat repeat.

That doesn't matter. Let's plug that in here.

What's the color of that material? Quite confused.

Quite confused. Um, it's gold metal plates 10.

Oh, I think it's quite different because these are supposed to be like maybe the roughness

and the color itself isn't really that like dark metal, um, but we can go with it anyway.

I'll just, uh, try and import, uh, these materials like this set of materials again,

Ctrl Shift T and we'll just select everything here and add them in.

Of course, not everything will be going to be plugged in.

I'll hit Ctrl X in here, but I'll just make sure that this is normal.

Uh, I'll quickly switch to cycles.

Still not being convinced with like the color here. I'll just change scale maybe to five.

To me, like it seems stretched, but I think it's not.

Um, this metal is going through, uh, it's being fed with a normal map.

So I think I'll just switch that to, uh, like this. There we go.

Um, it still feels a bit stretched though.

Which is a bit odd, uh, but you know, not, not every time things will work your way, sadly.

Um, oh, I think because being driven by both, uh, like by both objects, this one has slightly

a different UV unwrap or a UV map grid than this. And it makes sense. It makes sense.

Uh, but I think we finished. Yeah, we took a bit of time, but we, I think we finished.

Uh, I think I'll just give like a full rust, um, uh, to this one. No, not rusty, but rust,

of course, uh, like that. Yeah. Um, it makes sense. Oh, I didn't UV unwrap these.

I'll select them both, go into edit, A and U, and then smart UV project.

Still stretched, uh, control, just make sure that they, yeah, they do have some scale and stuff.

Control A and all, um, all their multi-user, um,

control A, apply all.

Oh, there we go. And this guy, no, they're both the same object. Um, that's like that.

You smart UV scale to balance or not scale to balance. I didn't select it. Actually.

Or not scale to balance. I didn't select it. Actually. Q projection.

Does it have, no.

U unwrap.

It still has some scaling issues. Oh, it's this one. I didn't apply scale for that.

These little things, you know, like the more you do, the more you get used to, uh,

like figuring out why things are wrong, because like certain solutions make sense.

I think we'll just UV unwrap these two on their own.

And I didn't apply scale here. Awesome. It's easy to forget a lot of things.

A lot of things. Um, you UV unwrap.

I'll leave you unwrap that guy alone.

I thought I applied it.

There we go. Like I had to apply four times for just like, I don't know. Um,

can maybe have that, uh, have the same, like, um, like mapping go there again, the metal

is being fed with roughness and this is being fit with roughness. I'll just go in here and

maybe switch this to a, Oh, no, shouldn't be a, Oh, I'll just severe that connection.

Yeah. It's, it's obvious here. It's obvious here. You can see that you can see this shine

that doesn't make sense on metal. That is like, you know, especially rusty

when I see that connection like that roughness, I completely got fixed. Um,

I'll do the same here. I just don't want that shine on these like things, uh, like places

down the roughness up on this guy. And this is all like, sort of step one in the, uh,

like roughness, uh, sorry, the like, uh, destruction process. Um,

um, these two could be rusty. Uh, so just select, maybe it's like that, uh, the grills

control shifty and select all these. Um,

there's a lot of objects that use the same material. So this looks great.

Um, I don't like, I don't think we need to, uh, UV and wrap these.

They look great out of the box. Um, control S we don't want blender to crash on us again,

control shifty, and this too, uh, won't take some time. Oh, maybe not.

Um, I think we'll just stick with the color control S

you can be completely, not completely rusty, but it can have like that. Uh, first

texture, the only issue is not UV. No, it is. You're getting wrapped. Awesome.

Does this change you too? Yes, it does. Good. Um, whatever that doesn't make sense.

It's going to be fixed later on. Um, but as a head starter, Oh, I didn't change these.

Uh, let me quickly do that. Let's you, uh,

the same for you.

Awesome. Um, so yeah, uh, we will be using, uh, AO and gradient to, um,

like ambient occlusion and, uh, gradient textures to, uh, like add some like realism

to, to these objects, especially these, uh, pipes. You can see that the connection from the

like here to there, it's just, you know, immediate. And of course adding like the

gradient, uh, we added before won't really make sense because these two are like completely

different materials. It would work with sand and rock, but not in that case. So, uh, we'll

be looking into that in the next, uh, like chapter. Uh, but for now, um, let's add some

pressed in here, completely rusty. There we go. Yeah. For now, uh, just add some, like you're

just adding material. You're not doing anything crazy. We will be unwrapped and just added

materials, uh, go and find your materials and then go ahead and, you know, add them

to your object. But for now, I will see you guys in the next lesson.

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
