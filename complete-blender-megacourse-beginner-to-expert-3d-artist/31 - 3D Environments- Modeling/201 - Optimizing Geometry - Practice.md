# 201 — Optimizing Geometry

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Optimizing Geometry |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 23m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Optimizing Geometry** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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

Alright, welcome back. Today we will, we might not be doing any modeling actually. The reason

is I just noticed that we've hit the threshold of 20 million tries or 10 million faces, which

isn't really a threshold, it's just something I set for myself. This is a bit too much and

I can, like in the viewport it's fine, but I just turned on the statistics here. Let's

turn that off. I already have them at the bottom. I believe you can right click and just

check the scene statistics. You can also check the system memory and video memory.

Of course, try not to go over, I believe, 80% of your total VRAM or GPU space, so that you

might face issues while rendering. Anyway, what we will be doing today is we will actually be

trying and optimize our geometry as much as possible. Reason being, again, is that we are

seeing a lot of faces and this is not optimal. Of course, again, we will not be doing it in a way

that is game ready type of adjustments. It's something that you can do for scenes that are

far away or objects that are far away. What I will do, I believe that this is taking the most

or making the most of faces here because it has a lot of these like grills. It has a lot of bolts.

Bolts also could have a lot of detail in them. What we will do is that we will just go into

edit mode. Because this is arrayed, we will only see that we can have the ability to

select only that part. If the array modifier is applied, we'll be able to select everything.

I don't want to apply it. But yeah, whatever edit you do here is, of course, going to happen

for the rest of the arrayed objects. I'll select everything by hitting A.

I should have that turned on. I'll select everything by hitting A and I'll go into mesh

cleanup and decimate geometry. By default, you see nothing because the ratio is one.

What does this do actually is that it decimates or decreases the number of vertices you have in

your geometry. This is a 100. This is 100 of your geometry as of now. But whatever ratio you put in,

if you put 50%, this means that the geometry is now 50% less dense than it was before.

I can tell from the bottom here. The number of vertices I have selected is 38K and 680.

If I set this back to one, this was the original number. I can see it going down

from this area. What's happening is that I'm decimating the geometry. Of course,

there isn't a certain number you can go by. Of course, you can go as much as you want

just before you find the geometry look like something like this. Hold on. It's not nice.

Things are clamped. It's not looking right, essentially. Of course, I believe if we also

zoom into the bolts, I can see that the detail, their detail are pretty much gone.

Another thing you need to pay attention to is that we have these bolts as like a different

thing. If I hit L, I believe there's one hitting here. There we go.

What we can do is that we can decimate it by itself and not the entire thing. I can just

click on cleanup, decimate geometry, and just if I hit that number, it's only changing that

and the grill is being maintained. That had changed things up well.

You might not want to have the same decimation for both or same amount for different objects

in one object in edit mode. I'll just adjust this to something I feel works

without affecting the geometry. This is looking fine. Bolts are the most that are, I believe,

taking up space here. Of course, it was 79K before. Now, it's up down to 50. If you multiply

this by the number of bolts you have around your scene, it's going to increase dramatically.

You can also do something smart, which is I don't need these bolts. I can straight up

delete them. I'll X, no, X, delete vertices. Now, we should be good to go. I'm now down to 14K.

This is awesome. I will select, let's select these bolts and invert our selection by hitting,

sorry, Ctrl I. Then I'll also do the decimate. Of course, let's go set X-ray mode. I'll decimate

mesh, cleanup, decimate geometry. This ratio is too much. It defaults to the last number you've

put. I'll just play around with that number until I find something that looks both good

and saves a little bit of geometry. What was the default? It was 14. Actually, that's not bad.

So, I'll just go set of edit mode. I now need to do this to all other

steps. So, I'll just do that. It's nice to have things mirrored.

And if we were to go here, oh, actually, it's being mirrored twice. Let's apply one of the

mirrors, sorry, arrays. Let's apply only the mirror, actually. I'll leave the array

because I don't want to edit everything. I'll just L select

these, delete them, and go, I believe the ratio was 0.2. We'll see now.

So, does it appear here? X, dissolve. There is no decimate. We can, of course, go into mesh and

cleanup and right-click on decimate geometry and add it to quick favorites. But do I have

a lot of here? No, I don't, actually. By the way, the quick favorites differs from one menu

or interface to the other. So, in edit mode, you can see that I only have face orientation. But if

I go outside of edit mode, I can still get access to the rest of my quick favorites, which is pretty

nice, not to clump things with options that are not going to work in our interface. So, I'll

actually go into mesh and cleanup and right-click on decimate geometry and add it to quick favorites.

And now if I hit Q, I can just click decimate geometry. This was still 0.2.

And this is looking fine. I believe the increase of number of vertices,

no, that's 7K is fine. I'll hit control S. This is being arrayed, which is nice.

Do the same in here. So, hit L and X, delete vertices, save some space or like some memory.

You should also see that number going down, by the way, which is actually both the VRAM and the

memory going down. So, I'll hit X, no, Q to access my quick favorites, decimate, and it's defaulted

by the last number I've put, which is nice. Hit control S, it's going down even more, which is

cool. This bolt is being arrayed, which is awesome. I can just go into Q and decimate geometry,

0.2. By default, it's being arrayed. I now have everything decimated. Do I want to decimate it

even more? 0.4. You might see that, okay, well, it says 410 or whatever number,

but the reason I'm looking for actually decimating it even more is because it's being arrayed like

two times or like a multitude of times. So, 75 on both ends, that's a large number.

So, you always look forward to optimize your geometry, not in the way that in a game-ready

type of optimization, but in a way that makes your scene run a little better. And you can see now

that I believe I've already saved 500 gigs of memory there. I need to apply the mirror modifier

here. So, I'll hover over it and hit control A. And back in edit mode, I'll just delete the other

side, the side that I will not be seeing, and delete the vertices. And on this side, I'll just

hit L, L, L. And then X, my decimate geometry menu, it's now at 0.8. I believe we used to do 0.2.

That's right. And now everything is fine. Hit control S. Do we have any other bolts?

I'm sure we do. But let's first look at each of these.

Okay. I'll hit A. The reason I'm concerned is because when you select, when you have a lot

of geometry to decimate, Blender might crash or take a long time to calculate each of these.

But let's see if this is going to take the same time. Yeah, I can already see that it's

going to take some time. It shouldn't take a lot, however. But let's do this one more time.

So, Q, decimate. The smaller the geometry, the better. That's nice.

These are an instance, I believe.

Yes, they are. Awesome. So, I'll just, I can just hit A, because I will be editing all of it

with the exception of shift L, with the exception of the bolts. Again, this might be concerning.

I'll just save first and then hit Q to access my quick favorites.0.2 and then Q again.

Let's go outside of X-ray mode. Make sure that this is a little bit bigger.

Hmm, let's decimate it only once. Q, decimate, 0.2.

It won't, it shouldn't be too obvious, I believe.

But, yeah. Oh, we have rail here and we have a rail up top. So, we'll go select that,

edit mode. I will delete that side. So, it's submerged under this beam anyway. So,

we can just delete it. The reason is because it's also appearing on that side.

This might cause an issue in terms of arraying, because it's going to change the

bounding box, which controls the arraying. So, be careful not to, like, be careful while doing that.

Yeah. So, I'll just hit L on these and hit Q, decimate geometry, 0.2. I have 22 faces.

I can actually go back into edit mode and hit control I and decimate the

faces in here. I need to go to this area to see how things are going.0.8. I didn't,

I didn't decrease the count by much. Let's go back to one. Yeah, that's not really helping. So,

let's not lose geometry for just too little, too little performance. Let's actually keep

our geometry. This was both up and down. We had some bolts up there. I didn't forget you.

So, back in edit mode, select everything. Always save when doing a decimation, because again,

this might cause an issue. I believe we pushed this, since we pushed this side a little bit

further, we can actually give some space here for the person walking around. I also saw that

it's being intersecting. It's intersecting with this part. So, I'll also just have some space

on the other side. We were about to decimate that part. So, decimate, 0.2, enter, and let's

zoom in on these little guys. They're looking fine. Save again. I'll quickly here do these

two things. So, I'll go into edit mode and then x-ray mode by hitting alt Z. I will just move

that on the X until I have some room. I'll do the same on this side, back into x-ray mode,

and just give some space for whoever walking on this side. That's fine. That's good enough.

That's fine. That's good enough. Did I decimate this geometry? I believe I did not.

No, I did. I did. You can see that because the geometry now is not being so organized.

So, yeah, I decimated that part.

You can tell by going to edit mode. Look at the geometry. This is obviously decimated because

even from the outside it looks like something is a little bit off with the geometry.

This is also decimated as well as the part on top.

Do we have bolts up there? Yes, we do. So, we can go ahead and decimate those.

X, no, Q, decimate geometry by 0.2, and the memory is now going down even further.

So, I believe this is one gigabyte of memory saving, which is nice. This is being mirrored,

so you can only select four bolts. I'll hit L four times, Q, decimate geometry, 0.2,

and now I can save things up. Where else? So, I decimated these. Let's go ahead with those.

I'll just select everything. I'll hit A, and then I'll hit shift L to deselect the actual vibe,

and then hit X to, no, Q. I keep on hitting X. I'm just trying to access my quick favorites.

Decimate geometry, 0.2. Geometry is not looking too bad. That actually looks better than

this part, but that's not really, that doesn't really matter. Again, let me make sure that

we controlled all of these altogether, so it's that side only. Actually,

let's have them be repeated on the other side, so I can just select these two. If I hit Alt D,

and move it on the X, and scale it on the X, and hit minus one, it's bounding box.

Okay, let's rotate it on the Z by 180. There we go. I can now bring this back.

As a support on this side. There we go. This is looking fine.

We'll just save. These I decimated. You can see here. Let's go with these guys.

I actually forgot to add the beam here. Let's decimate first.

Just going to edit mode. Where are you here? We'll just delete the invisible

part, and decimate the visible part.

Q, decimate, 0.2, go outside, Control S. I'm now saving even more memory. Oh, the beginning,

where we all started. Let's not forget that. I'll delete that. I don't want it to be a raid.

Where is this? Yeah, it's by itself. Always go into X-ray mode, so that you select the

you make sure that you select everything. I'll just keep on decimating until

I have a mirror here. Hover over it. Just hover over it. You can also hit apply, select it,

and no, this is going to apply everything. You can hit apply, or as you can see, the shortcut

here is Control A. Hover over it. That's it. I hit Control A. It doesn't have to be the active

modifier, actually. I'll go into edit mode. This might not be obvious as well. I'll just hit L.

You don't have to be in X-ray mode for doing that. I'll hit L here as well,

and hit Q, decimate geometry, and just leave it as is.

You can see some here. I believe this is decimated, because this is one of the

instance-like objects, which is nice. I'll just hit Control S, and now I'm under one gigabyte.

I believe we started at three. I'll check that later, but it was a very large number.

It was a very large number for only one piece of prop or object in your scene.

If you were, of course, optimizing your scene from the beginning, you don't have to do that step.

For me, however, this is something I felt a little bit more essential, because we will be

duplicating that scene. Whenever the geometry is too large, you will be facing a lot of issues.

Remember to do just that. I can see some bolts here. I'll select A, Shift L to deselect everything

else. Q, decimate geometry. This might take some time again, because it's being repeated.

It's very essential to have things instance or RAID, and not to rush into applying these modifiers

or make things unique before everything is optimized. We might also play around with that part.

Let's just leave it for now. Actually, that little detail from the bottom looks cool.

Go ahead and optimize your geometry. Again, it's not the best optimization.

We have a lot of NGONs. This is not a game-ready asset, but it, of course, is going to be very

light. Essentially, you can play around with it in future scenes. We will not be adding that

scene into a game or that object into a game. Again, finish on cleaning up your geometry,

because we should be adding that stair on that side on the next lesson.

Yeah, I will catch you guys in the next lesson.

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
