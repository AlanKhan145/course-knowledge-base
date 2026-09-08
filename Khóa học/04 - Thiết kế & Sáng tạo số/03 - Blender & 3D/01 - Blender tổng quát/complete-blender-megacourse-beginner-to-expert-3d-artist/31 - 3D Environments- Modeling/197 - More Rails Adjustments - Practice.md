# 197 — More Rails Adjustments

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | More Rails Adjustments |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 20m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **More Rails Adjustments** trong pipeline của section.
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

Alright, welcome back.

So we stopped at trying to figure out how we could curve this the proper way.

And to quickly do that, I can just select that rail.

I can go, let's isolate it.

We will be working quickly here with it.

The thing is, what I want to achieve is to maintain the same rotation.

So I might actually go back into edge select and select hold alt and select that loop.

And now it's going to select it across the like the border, then hit shift D. And now

it's being separated or duplicated, and then hit B to separate the selection.

If I go outside, I can select it like that. There we go.

I can delete the array modifier and move this around because I will be interacting with it alone.

What I'm looking for is to let's see if I hit control X. Yeah, I need that edge.

I only need these edges.

So the straight edges, I don't need the curves.

So I'll hit control I and delete these vertices. Whoops.

No, delete X, delete.

Go back in these, no.

So I'll hit X and delete these edges only, only edges and faces. There we go.

I can now by hitting back to one.

So mesh cleanup, delete loose, everything is loose. That's okay.

We can just go ahead and select these, select these and delete these vertices.

I just don't need any curves in my selection. Whoops, curves. There we go.

We can select these and these three and delete vertices.

I can now, if I hit F, this is going to like connect between them as such.

If I hit G twice, however, I can just extend that, make sure I have auto merge activated

while also checking the split edges and faces.

I'll do the same here.

G twice, select these two, G twice, extend them.

Select these two, G twice, G twice, and come on, G twice. There we go.

And extend them.

I can now do this for this part.

And now at the intersection, I'll see that new vertex and I can just hit control X or

I can just delete vertices because control X isn't working.

I'll select these two, G twice, make sure that everything is straight.

I'll shift select these two and delete vertices.

G twice and hit alt to make sure I'm not clamping with my geometry.

It's not being snapped properly, so I'll hit G Y, make sure that it snaps.

It has a little shift in it.

So I'll delete the vertices.

What auto merge does is that whenever you have two vertices close together at a certain

threshold, which by default is 0.001, they're going to merge into one vertex.

And you can also check that option so that whenever you, not only when things come closer,

but when things intersect, you essentially create a new vertex.

So the reason I did this is, you might have guessed, I need to change it back into a curve.

So I'll quickly here go outside of edit mode and just make sure that things are aligned.

I want to have the same bevel as this part.

And I can do that by just moving things around, making sure that I have the right position.

So G and the Z, this is looking fine.

I can already see where things gone wrong in the previous curve and how things got flattened.

Do I need to align it with the top or bottom part?

I believe I should align it with the bottom part because I want this to align with that.

And it doesn't matter where this intersect and continues to go on.

So I'll quickly turn, oh no, let's not do that.

Let's first go back into edit mode, select everything, and we'll be doing control shift B.

I don't care about this area or this area, I care about this matching that spot.

So control shift B and I will pull this up and, oh, I'm matching this area, yeah.

So I'll just make sure that everything is properly looking good.

I believe this is fine, but let's increase, not the segments, this is looking just fine.

And now I can turn that object into a curve.

I can actually hit right click and add this to favorites so that I don't have to do this every time.

So with that selected, I'll just hit Q and curve and turn it into curve without the hassle

of going through these steps every time.

I don't remember the curve depth, so I'll just move this aside, go outside of isolated

view and select my original curve.

I believe not that one, but it was separated, that's the one.

So the large curve was control C and I can come in here and hit control V. I can shade smooth.

And yeah, everything else is just, you know, copying and pasting things together.

So I will separate these two again because I want to go into edit mode.

Let's duplicate that on the, why?

Because I'll turn it back into an object.

I forgot to do that before.

So no, let's clear the geometry first, there we go.

And turn that into an object, convert, mesh, there we go.

And now if I go into edit mode, what I want to do is that I need two rails in here.

That's a bit too much.

Okay, I'll have just one and one and maybe connect between like these two.

So I'll just hit F, select these two, hit F, and here I can add two.

So I'll hit control R twice and click, control R twice and click, select these F, select

these F. And now I can just hit these edges.

And before I do that, let me actually duplicate this one more time because I want it for the

like side rails.

I'll hit control I and hit X and delete only edges and faces.

And now I can turn that into a curve.

And let's go set up isolated view actually and select, so we know that, select all these

three so that I don't have to do this again.

I can now select all these geometries, isolate them back again.

Since I can, this is not a curve yet.

So I just hit Q to access my quick favorites, turn it into a curve, select the bars, there we go.

I'll hit control C here, control V. And now it has the same profile.

I'll be merging these together later on.

I'll select this, shift S, cursor to active and shift S selection to cursor.

And I'll be merging them just like what we did before.

And this is looking pretty good.

I don't think that the spacing is off or anything.

It might be here, but that's fine.

The last thing we want to do is to have side railing.

So I'll hit X to delete these only edges, go back into vertex select just to see what I'm doing. I need two.

So here, this is not looking aligned pretty much, but that's fine.

You can just G upwards.

It's not moving in both G and Z.

Let's move them all by themselves or actually let's not give them any movement.

Just control R because I believe the R line in some sense, but because of the array modifier

that shift is happening.

This one needs to go up a little bit.

Yeah, like maybe actually, maybe let's give them that slight move. What do we do?

So we need to, I believe the railing was that little guy, it was this one.

So it was the connection between this.

It was the connection between.

I'm looking at the one at the right.

So yeah, these two.

So if I hit F and hit control R, these are going to be spaced out a little.

Yeah, they are spaced out because they don't have the same bevel here and there.

This issue is happening.

Let's control Z here. There we go.

I can duplicate these two, but the thing is, let's delete that extra edge.

We don't need it.

Again, no, stay in edit mode and stay in X ray. There we go. Okay.

So I need for this rail to go around and rotate, maybe go around.

I'm thinking about copying this to the bottom, but I'll have to eyeball it and I think this

is the only solution.

So I will quickly here clear my geometry of any like curves maybe.

So control X in here, delete that edge and go back into vertex select and clear all these

geometry and vertices.

I don't need that curvature. So X vertices.

I'll hit control X for this one to dissolve it and now I can just, I don't want to move the origin.

So I make sure that I don't move it outside of edit mode, but inside of edit mode to maintain

the origin location.

If I do that outside and try to like eyeball it, I'll lose the privilege of being able

to align the railing with my previously made curves.

So I will just move this down, duplicate it one more time and move it down.

Select these two G twice and make sure that they go just inside my rail here, G twice,

G twice, and just inside my rail there.

Now I can go outside, hit Q curve and make sure that I select this part, control C, control

V, and now if I hit shift S to move the selection to cursor, I now have this new railing.

I can go now outside of isolated view, quickly save and I now have these three curves.

I can just select all of these, maybe select this last to hit object, convert mesh and

control J and now they're all the same object.

I can move this back in here.

This is the one that's being mirrored.

I can just go back into edit mode in here and just select these.

So I can just select that and if I hit control, if I go back to face select and hit control

control L, it should be able to, no.

So it's L. Oh, am I inside?

Go back into edit mode.

I just want to see, yeah, shift L.

So just go in here, select all these.

I can make sure that you are in X-ray mode so that you select things from behind.

I'll just deselect these and I will delete that part.

So delete vertices.

I can now hit, I click on that new railing and this old railing and hit control J. This

will join things together and I can now just adjust the new railing.

Make sure that you are in the X-ray select, don't make the same mistake I do every time

and I'll just move it so that, okay, let's do this smartly.

So I'll shift select this twice and make sure that I snap with active and if I move in the

Y, I will just snap to whatever in the center here.

I need something in the center.

Since I am in top view, things are going crazy.

Why aren't these selected?

I don't know, but let's snap again.

So change the Y and snap with this part.

Did I not delete the part in the center? That's bizarre.

Tune the Y and snap.

Some parts get deselected for some reason, but that's fine.

Okay, I will save.

I can also do the little detail I did before with like extending the bottom parts here.

Do these have faces? That's fine.

I'll just select that, select this and that, and I will just go outside and in face like,

no, this is not working.

I'll hit shift L to deselect.

That deselected everything.

Shift L. Are they all the same objects? They are.

I might have actually made a mistake here by not joining things one by one.

Is this still the case before doing this? Oh, okay.

This is actually a good error and a good time to showcase that you always turn off the auto

merge before doing anything with like your geometry or else you will be facing the issues

I just faced right now, which I'm not sure why things getting deselected, but the reason

was being just moving things ever so slightly after you turn on the auto merge, automatically

whatever intersects with the other is going to be created and of course, whatever new

geometry you make is not going to be selected.

And I wasn't sure why then, but as soon as I saw that these two became the same object,

I realized that they have intersected in some way and became the same object.

So I immediately looked at auto merge.

Remember to always turn off that option.

I'll go outside of that selection.

I'm sure that I'm still in active and let's have a vertex at the center to be active.

So G on the Y and a snap with the same center and because they have the same radius, I should

be able to merge them pretty well.

I'll go again in X-ray mode, select these vertices and now if I go outside and hit shift

L, I'll be deselecting that.

It's the opposite of L essentially.

So if I hover over an object or something and hit L, I'm just selecting the separated

object within it.

I'll hit G in the Z axis to make sure that I submerge this a little bit and I will be

having a beam here anyway.

But before we do that, play around for sure with the auto merge and like get comfortable with it.

so that you learn not to do them again and again and I should be able to finish that

flight of stairs in the next lesson.

But for now, keep on adding stairs and with that said, I will see you in the next lesson.

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
