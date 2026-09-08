# 211 — Separating Bolts and Adding UV Grid

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Separating Bolts and Adding UV Grid |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 24:42 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Separating Bolts and Adding UV Grid** trong pipeline của section.
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


Alright, welcome back. Today we will be adding a UV grid to all our objects and for that

we will have to go to switch to the shading viewport. Quickly here let's test if we have

to do that or not. I just selected one of the objects and it already has a material

added. We added that in the previous lesson. I'll just hit CTRL T to add this setup. Again,

if you don't have, if nothing happens then you probably have to activate the Node Wrangler

add-on. So make sure that it's active. Under here you can see, sorry, under here you can

see that you can click on new and instead of blank you can choose UV grid and hit OK.

Now this has a UV grid. As you can see the grid is being scaled disproportionately over

that object and it's the same case for here. I believe this is created by the shear that

is happening on the center, as you can see here. So if we were to select edges, that

shear is causing a problem. So texturing, and this is the reason I chose to have this

separated from the actual texturing chapter, is because texturing models is a little bit

more different than texturing planes essentially. As we can see here, that UV grid has been added

to the entirety of the object and since we have them instanced, it has been added to all of the

other objects as well. So what do we want to do here? I believe first we wanted to separate,

so let's actually severe that connection. I'm just holding right click and dragging over that

node. Click here, click back on this. I believe because it's here, it still won't exist. So let's just

completely delete it. I wanted to separate these bolts for them to have a different texture, but I

think they were going to have like a color and that's it. So what we can do is that I can just

hover over these bolts. Just make sure I don't have anything and just click away and hit L on all

these objects or the bolts specifically. So L and just make sure that I have everything selected.

I'll do the same with these bolts.

Then L and all these bolts. Then I can add a new texture and then I can select bolts and I make

sure that I assign them that. You can see that the bolts on all other structures has changed as well,

but because like these are only material linked and these are object linked, so we'll have to do

this separately for these structures as well. So just hit L. I'll just keep on selecting every one

of these. This is one of the benefits of having color coding before actually starting to actually

like model your, sorry, texturing your scene. Just hit L and hit L on these bolts and again I'll add

a new and then select bolts and then assign and this will change it for these as well. Do I need

to change anything else? Well, we can always select the bolts from any object and just assign them.

It's an easy matter since we just, I don't think we decimated these bolts. So let's quickly do that.

I'll just hit L. That should be it. I'll do the same on here and then do the same there. It's a

little bit scuffed, but you can always isolate your objects. So, you know, that would make it

easier to look around. I should have done that from the beginning. I will add a material, but

before going and assign it, of course, but before going outside, I'll just make sure that I decimate

these. So I'll just mesh, clean up and decimate geometry and I believe the ratio was 0.2. Yeah,

something like that. And that's looking fine. You know, we're just saving some memory up. Again,

it's still up because we have this copied on a different scene, if you remember. So just pay

attention not to freak out essentially over the amount of memory this is using. Again, it went up

extremely now when we switched from one scene to the other because the other scene loaded was around

940 megabytes and it just increased to 1.5. I'll hit Ctrl S. We have the bolts hidden here. Let's

have them unhidden. And here, since this is mirrored, this is going to be a bit easy. Bolts

and I can look at the change here when I assign. Boom. And save. Do we have bolts? We have bolts

on here. I can do L. I'm sorry. Did I not edit? Oh, that's fine. It's good to have things arrayed

and, you know, make sure that you apply or not apply the modifiers or else you'll face that issue

of having to select multiple objects altogether. But I think one way to run around that is that

if you hit L and then F3 to search for select, I think you can select something that is like similar

in terms of vertices. So select similar in face regions. No. Select similar in crease.

That too isn't working. But, you know, I think in some cases you get to select similar with my

traits. Loose geometry. I think you can select loose as well. But I can just always come back

for these and edit them later. But just, you know, just to make sure that you don't have to

figure out or guess what's happened or what's wrong. The process, if it's fine or if it has

been like cared for, this is going to make your life way easier. So just pay attention to the

process so that I don't know how I missed this, but that structure is too thin. It's the same

here. Okay. We might have to change that later on because, like, of course, we're not finished

with the details just yet. So when we get back to the details again after we model, you know,

the final touch-ups of our model, we need to extend that a little bit. I'll quickly here open

the reference board we had because it cannot be possible that this is that thin. Yeah. Like,

even the platform has almost the same thickness as the bottom part as well. Or, you know, the

straightforward part. So, yeah, we can just we can do that later on. We just need to focus here.

So what we added is a UV grid. And the reason we did that is that we wanted to, like, see how this

object, like, looks like essentially. New UV grid. Okay. I added this to bolts. I don't need that.

I need to add that to structure. Control T. Move this around. And then

entitled zero. And now I have everything that is not bolts selected or UV grid unwrapped.

So what we can do is that we can go into edit mode. And I can if I if I have everything selected

or if I like, maybe I don't want to go through the process of selecting each bolt. Again,

I can just select the material that is assigned to certain objects. And then if I select,

if I press on select, I'm going to select all the objects that has the same material.

Here, however, I want to select the actual structure. The reason is I want to UV unwrap it.

So we seem to have it. So, like, usually I would have just added a UV unwrap.

But if it doesn't work, I'll just use the smart UV project. And this seemed to still have an issue.

Okay. UV cube projection. Okay. The issue seems to be that I have to apply my transformations.

So this is the stage where things are like you have to have everything done in terms of

like modeling your especially diagonal like structures, because it's going to be a bit

tedious to look for something that is, you know, change or edit anything with your geometry. So

again, I'll hit control a apply all modifiers. Let's check here.

Control a apply all. Okay. Maybe it's time we move into a new file, because I believe the

two scenes are causing issues here. So I'll just open a new scene. You can do the same.

Let's not care for the settings just yet. I'll just select everything. Hit control C.

And it's as easy as control C and control V. So just hit control V.

And I now have everything in here. Of course, some things I think the look is a bit different,

because I need to change things up here. It was matte cap and then texture. So matte cap

texture is good. And then it can just turn on cavity. And let's make this viewport.

Do I make it lighter? Let's let's leave it as is for now. So just save that. So control S

and save it in our scene. Name it sad, sad to light UV texture. Now should be able to apply.

Oh, it's a multi user. We needed a new scene anyway, because as you can see here, it's way

less demanding on our PC. So I'll just close that and save it. And what you need to do is that you

need to make these objects unique, essentially. So go here, hit alt and click on four. And like

without that, it's only going to happen to the active object, I believe. So

if I alt and click, you know, you have to do it separately. So I'll just make sure that they're

all now unique, meaning if I go into edit mode and change any of the geometry, it's not going

to change other stuff. So I'll hit Ctrl A, apply all and then Ctrl X to make sure that the origin

is at the bottom. And then if I UV unwrap it, just the normal way, let's UV unwrap it, use it

smart UV project. I can see some issues here. That's fine, however.

UV scale to bounds. Still facing some issues. UV cube projection. Okay, Blender seems to like

force towards like the solution I was like leaving for last. So what we will do here is that we will

select edges that are going to act as our seam. So I'll just select these edges and make sure that

I because like when these are marked as seams,

they are going to essentially act like, okay, this is the boundary of the projection or the UV map.

By the way, I was hitting U to bring up this menu. So I'm also hitting U to mark selected as

seam. And if I hit L over that object and UV projected or unwrap it, still facing some issues.

Still facing some issues. So smart UV projects.

Let's try. Does it have any modifiers? It doesn't. I think some.

No, it's not that. So cube projection.

Cube projection is like it's good, but towards that grid.

Did we clear everything here?

Control A, apply all.

Control A, apply all.

Control B, apply all.

Control C, apply all.

Control D, apply all.

Control D, apply all.

Control D, apply all.

Yeah. It was the angle for some reason and it makes sense actually.

Okay. So I'm not sure what's the angle of my object here, but rotating the angle on

the scale bounce, like made things a little bit more correct.

I still have a seam here, but I think we can fix this by actually selecting that and marking

it a seam. Let's see. So U, mark seam, and then LU, sorry, LU, UV project, scale to bounce.

We can correct the island margins. What I'm trying to achieve is a result that doesn't have that seam

in the center. We can still rotate the texture so that this seam is on the back. It's pretty

obvious here as well. But yeah, essentially this is what we want to achieve.

Now you might've realized that this did not change things for other materials, although

these are material linked. And the other thing is you need to realize that you can UV unwrap

multiple objects at once. So what we need to do is that we just want to select the objects

that we want to have the same scale at least, or the look for the UV grid, and then go into

edit mode and then hit U and smart UV project, and then okay. I believe because we don't

have seams, this has created the issue of not being able to properly UV unwrap the object

here. But we can test that quickly here. We see if it's on its own. Oh no, I didn't apply. Yeah,

I didn't apply the location and scale. Let's quickly do that. Control A and then apply all.

So this should change it for all. I pressed alt just in case this won't be applied to all. And

then I'll select that again, go into edit mode. And then if I go to material and select, then

U and then scale. This is looking good. I don't think that you need to mark seams here. It's a

bit more subtle here, a bit more obvious on top, but we can always fix that later on. So yeah,

we will do the same with all other objects. I need to make sure that I have them unique. So

I think I can go into object and then relations, make single user, and then object and data. I'm

just holding alt to see. Yeah, this did what I wanted to do. I think these two should have the

same island. So I'll just select these, all the structures, like all of them, and then U2,

and then we can control A to apply. Oh, I think some aren't unique just yet. So just object relations

hold alt object data. And let's do that again. Control A. So everything is applied. And then

let me select all the structures. Oh, the collections are gone. That's fine though. Yeah,

I'll go into edit mode and then U. Let's first select the material, select U, smart UV project,

and then okay. It's going to take some time, but they should all have the same scale essentially.

So if I go outside edit mode, they all have the same scale. And this is like a step towards like

properly having or texturing your objects. So you should probably by now like understand what we are

doing here. What we are essentially doing is that we are determining how the texture would wrap

around the actual object if we were to add a texture. And let me quickly here add a bold material

and do the same here. So yeah, what we are trying to have here is like, it's a step that you like

essentially need to go through rather than like, you know, adding a texture and then figuring out,

okay, now I have a problem that I've added the same texture to multiple objects. And then like,

it looks completely different on each of these objects. So to avoid that, one thing to do is that

you can just do that step. And it's completely, completely, it's really easy. And as well as like

essential, it's like it shows you how to certainly do things the right way. For now, however, start

on you should have like your object like or your model prepared. So we will start on UV unwrapping

our objects one by one. I'll see you in the next lesson.

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
