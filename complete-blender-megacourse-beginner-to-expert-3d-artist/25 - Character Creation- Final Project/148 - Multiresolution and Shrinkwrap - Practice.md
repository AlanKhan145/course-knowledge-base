# 148 — Multiresolution and Shrinkwrap

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 25 — Character Creation: Final Project |
| **Bài học** | Multiresolution and Shrinkwrap |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 11:39 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Multiresolution and Shrinkwrap** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- retopology và tối ưu topology cho asset

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

All right. Hello guys. So now that we are finished with the topology of our character,

we can go ahead and apply these modifiers. Let's delete the subdivision modifier for

now. And then we have mirror modifier and then shrink draft modifier. All right, so

let's do that so we can move the character around. For that, let's do another recap of

what we did. We, um, with a single plane, we, and with the use of some modifiers, we

just made another mesh that looks kind of similar, like the same as the mesh we have

here, but with a very, very lower geometry right here. All right. So, uh, the other thing

that we can do that I want to show you in this video is that you can project the details

also to the metapologized mesh over here. Right? So you may have some details over here,

for example, in this area, the nose area that we made a bulge, a little bit of bulge over

here. Uh, it's not projected in the topology, right? And, uh, even in the knees area, uh,

it's not projected that these areas quite well, right? So we can do that with the help

of a shrink wrap modifier and multi-resolution modifier. But, uh, before doing those, let's

apply these modifiers. Let's press console a visual geometry to mesh, to apply all the

modifiers. All right. So let's delete this one for now. And, uh, I'm selecting the topology

mesh. Uh, I'm going to call it, uh, I'm going to change the name to retail pole, Spider-Man.

All right. And then I'm going to call the other one to Spider-Man. So the sculptor Spider-Man

and the read support sculpt, uh, in some cases. So I want to show you, I'm going to duplicate

this press G X, uh, and maybe two. So G X and two, or that's not enough G X and 10.

So G X and 10, and then I'm going to press the Spider-Man one, as you can see here, duplicated

and press G X and 10. So these two are on top of each other are not quite well though.

They're not on top of each other, not quite well. So let's just do hit on top of this one. It

doesn't matter at this point. Uh, let's duplicate this, disable the Spider-Man over here. And all

right, now we can add the multi-resolution, multi-resolution over here. So the workflow is,

uh, the thing you want to do right now in this one, you want to, uh, move the,

move the, uh, details from the sculpted mesh to the retopologize mesh. All right. You do that

by adding a multi-resolution modifier to your, uh, retopologize mesh subdivided or a bit. So

this is, uh, as we discussed, uh, in previous videos, this is quite, uh, similar with subdivision

surface. Uh, but this was made for a sculpting. So you can go to a sculpt mode and change the

level of subdivision. Let's sculpt this, uh, subdivided two times. And now if we add a

shrink track modifier and go to the same setting project negative, and now if you target it to our

Spider-Man over here, or go over here and select on this, or over here, we can go and select the

object. I'm going to go here and select the Spider-Man over here, which was, which is the

sculpted the Spider-Man with higher topology. And now, as you can see,

uh, immediately we see some changes. So the sculpted mesh, we, uh, subdivided to have some

more geometry, and then we shrink wraps that around the other, other mesh. So now if I enable

and disable it, you can see the differences. So we have some, uh, defined areas over here that we did

right here. And in the back also, as you can see, these are some defined areas

of the head and of other areas, as you can see, and even the nose area in this area.

So this is projecting that one. If I go over here and move it to here,

as you can see now, these two measures don't have any differences, but if I enable wireframe,

this one has this mesh and this one has this mesh. So we just, that we have, uh, we have,

uh, brought back all the details we have sculpted in this mesh to this mesh. And that's the beauty

of this method. That's, that's the, that's how it works, this workflow. So you, uh, do the primary

force and some of the secondary forms, sculpt them with the real machine tool or with the,

uh, with the dynamo tool, then you re-template it and make a new mesh. And then you add a

modulus modifier, add a shrink wrap, and then wrap it around your sculpted mesh. And now if you're

okay with the result, you can also, if you have some problems with the result, for example,

sometimes in the fingers and they are too close to each other and make some problems right now,

I don't see any problems. So you can go ahead and, uh, uh, apply it. But if you make some,

if there are some problems, we can change the limits over here or change the offset

or even change the snap mode. The snap mode doesn't do much though, in my experience.

So now we can apply the shrink wrap modifier and now we are ready to apply more, uh,

apply more, um, details to our mesh. So let me do another save over here. So now we have two

saves over here because we made this mesh right now and project it. And now if I go to, let's,

uh, disable these one. And now if I go to sculpt mode and, uh, disable the first set,

now we have a good mesh to work with and, uh, we can do a sculpting in this mode. But as you can

see, we have 100,000 versus the subdivided. We are 300,000. If I subdivided, we have 1 million

versus, and that's a lot of versus. So for example, if you want to make some changes over here,

you can draw easily on the surface. Right. And that is the beauty of multi-resolution and how

it worked. And because we have, uh, because we made the custom made geometry for ourselves.

All right. So this is now showing the geometry that we have in a sculpt mode. If I go to object

mode, the, uh, level zero, uh, multi-subdivision will be shown to us, but in the sculpt mode,

we are in multi-level four. All right. If I go to level three, it's going to decrease, uh,

the showing wireframe over here. Well, now that we have a multi-resolution,

we can do something like this. We can go to level four. All right. And then make changes like this

to the mesh. Right. And then go back to level one and we can see the changes right here,

like low resolution like that. And, uh, the best, the other thing that is good with multi-resolution

is that we can go and do major changes in the base sculpt mode in the level zero,

or while we are in the highest level, we can enable a sculpt base mesh. And this makes sure

that we are changing the sculpt base mesh. So if I do this thing right now, and this takes time

and do this. And now my base mesh also, if I go to level zero, my base mesh also have been changed

like that. Okay. And then I can change it back to four right now. But remember, if you don't

enable this, and if you make changes, like for example, now in level four, if you make like

something like this, if you go to zero to the base mesh, now base mesh has not been changed,

but the level, the subdivision level have been changed. And this may make some problems later

on. So be sure if you're making some, some of these major changes to the body, doing these

things like that, make sure that you're sculpting in the base mesh. So at this phase, you're only

and only going to add details. All right. So we can go ahead here, add a little bit of geometry

in this area, because we have a lot of geometry to work with. As you can see, the edges are short,

so sharp, and we can do any detail we want. As you can see, this is very good for details and

adding details and all that. Right. Let's undo that. So that's, that's all. If you have added

some major, like details in your sculpt, you can remesh, you can just add a shrinkwrap modifier,

add a multi-resolution modifier, subdivide it a couple of times, and then add a shrinkwrap

and apply it and you get your details back. Remember to not go too high, you can adjust the

level of viewport to like, we are in level two right now, you can go adjust the level or in the

viewport, you might say, I want it to be like level one. All right. And then in the viewport,

the performance is going to be much faster. And even if you go to render more, the performance

is going to be much faster for us because we are in level one subdivision. That is very good. If

you want to do animations, if you rig it, if you do anything else, we can rig it, we can animate

it in level one in level zero. And then when we render it, this is going to be rendered in level

four. And in level four, we have all these nice details that we have sculpted, for example. So

that's it about multi-resolution. And all right, until next video, goodbye.

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
