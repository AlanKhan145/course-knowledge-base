# 065 — Retopologize Sculpt Pt.2 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 14 — Basics: Retopology |
| **Bài học** | Retopologize Sculpt Pt.2 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 45:57 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Retopologize Sculpt Pt.2 DEMO** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
- retopology và tối ưu topology cho asset
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

Okay, so let's continue on with our retopology here.

Now, if you're previewing something with the subdivision surface and you're looking around,

you may notice, you know, there's a large discrepancy here between our retopology

mesh and our original sculpt.

And you might be thinking, you know, I have snapping, I have a shrink wrap,

why is it doing this?

And this is just because of the subdivision surface preview.

It is subdividing after we perform the shrink wrap and mirror operations.

So with that causes a slight shrinkage of the mesh.

We can get rid of this if we drag the subdivision up to the top.

You'll see now we are getting a much more accurate preview.

However, it is causing some issues with the mirror modifier.

So just don't worry too much about that.

It is just a product of the subdivision surface preview.

But again, we are going to disable that while we are working.

Okay, so let's continue on with the retopology here.

Okay, so let's fill this.

And I actually think I need a edge to come in here to accentuate the form here

of like the crow's feet in the temple.

So I'm just gonna, instead of adding one of them,

I'm just gonna shift this one down ever so slightly.

And I'm just gonna extrude out this edge at first. Great.

Now from here, I can just rework these points a little bit

just by grabbing them and pressing G.

I'm going to press F here on this corner one.

Actually, no, we need this.

I think we do actually need an additional edge loop here.

I was about to pull this down, but I realized it would create a pole here,

which is not gonna work for us.

So let's merge these points here. Oops.

We're getting a strange merging error.

And I'm not sure exactly why.

It's probably to do with the shrinkwrap modifier.

So let's turn it off. Center.

And turn it back on. Okay.

So now we've gotten rid of this edge loop. Center.

And turn it back on. Okay.

So now we've gotten rid of this pole.

But we're just moving it out essentially.

So what I'm gonna do is bring these edges down and merge them.

And then I'm gonna add my cuts in this way

to avoid having this five-pointed star shape.

So let's grab this edge loop.

And let's grab this edge loop.

And let's come up to Edge and click Bridge Edge Loops.

And press Merge.

Oh, and I have an uneven number of vertices selected,

so that's not gonna work.

So we can fix this I think fairly simply.

I think if we just add a loop right here.

Let's try that again. There we go.

We just want to select Merge here in the context menu.

So that has fixed the problem of our pole,

but we now have a problem of we have extremely stretched faces here.

But it's not really an issue.

All we have to do is add some loop cuts here.

And we will eventually need to have a pole.

We just wanted to not have it right around the eyes

because it's just bad form.

I'm thinking I'm gonna move it to somewhere right in here actually.

Let's just delete one of these faces.

Yeah, let's have it somewhere over here where it won't be too bothersome.

Just trying to think of how I want to go about this.

I'm gonna use this Rip tool and actually rip this apart right here.

I'm gonna come back to Select.

And I did not mean to rip these, so I'll just merge them back together.

Let's create the pole right here.

Right in the temple.

And then we can just tweak these to even them out as needed.

We may need to redo this section

because our faces are just getting a little stretched out.

And just hitting F in those corners to create those quads.

I want this edge loop to actually come and continue down this crease right here.

So I'm just going to move things around a little bit.

And start pulling this down like that around.

I think these faces could be a little bit bigger, but that's okay.

I'm gonna grab this edge and start extruding this out.

And I don't even think we need this edge. Let's dissolve it.

So we just have this face coming straight down.

And we can fill this quad here.

And we can just even these out by moving these.

Just CTRL and right-clicking to extrude that out quickly.

I'm trying to decide if I even need this loop.

Yes, I think I do.

So we'll just have to work around it.

So the other trick for moving between areas that are higher res and lower res

is to use these diamond-shaped faces.

That allow you to come up to higher res.

And then we have too many edge loops coming down this way.

So I needed to de-res it.

This is still a quadrilateral face, but it's in this diamond-like configuration.

Which will allow us to do that.

Again, you don't want to do these anywhere where your mesh is going to deform for animation.

But that is a good way to de-res certain areas.

Let's just tweak some of these.

Press F on that corner.

And fill in this face here.

So I'm just going to extrude all of these.

And then move them into this contour line here.

We may need another loop coming in through here, but let's leave it for now.

Let's start creating some loops around the ear.

For this, I'm just going to duplicate a single vertex.

And let's start...

It doesn't totally matter where we start, because we can just continue it in either direction.

But let's start right here.

So I've just duplicated a single vertex by pressing Shift D.

And I've just moved it to the point on my mesh that I want to create a new area of retopology for.

So I'm going to create a face loop going around the ear like this.

So starting with this point, I can extrude it once to create an edge.

And then I can extrude that edge to create a face.

Now if you pull it out and you notice that it is wrong,

this is shading in this gray because we are looking at the back side of it.

So it's just flipped out in the wrong direction.

So you can either just do it in the other direction,

or if for some reason you can't move it in the other direction,

the other way to fix this would be to select this face,

press Alt and N on your keyboard, and hit Flip.

And that will flip the normals.

Rotate and then Control click to quickly extrude this out.

That was just an error with our shrink wrap modifier.

It was snapping this point into this inner part of the ear.

So I just did Control Z to undo out of that and redo it more precisely.

Again, same thing, it's just snapping the points to the back part of this mesh.

So this can happen if your edges are too long.

So you can scale them in a little before you Control and click N.

And sometimes if it's not too dramatic,

it's easier to just come in and tweak them afterwards.

We're going to have to clean up this topology a little bit anyway.

And don't forget you can scale and rotate these points.

Let's turn off the earrings so we can see what we're doing here.

You can scale and rotate these points before you continue your extrusion if you need to.

So we're seeing quite a bit of warping around this face.

It's not really matching well.

And it's just because this is too low res to match this curve appropriately.

So we just need to add an edge loop this way and it will snap and match that a little bit better.

You can turn on proportional editing to speed up this tweaking process if you like.

Just make sure you scroll your influence down appropriately.

So you're not messing up any of the nice topology you have made over here.

Let's just continue this into a complete edge loop.

And then same thing here, this needs another loop cut in here to match this curve better.

So if you see any areas like this you can just come in and add a new edge loop with CTRL R.

Generally the more curved your areas are, the more edge loops they're going to need to be able to match that curve.

I've just filled that with the normal fill operation which has not created this edge that I need here.

So just to create this edge, all I have to do is select both of these points and press J.

And you'll see it has split the face and everything is still snapping appropriately because of our

shrink wrap modifier.

Let's add another loop right here to better match this curve.

And we probably even need more res right there.

This is a pretty tight curve we're creating here.

Actually I think I just want to split this one into two which I'm going to do with a bevel.

So I'm going to hold CTRL B and now we have that.

So now I've created two edge loops where I had created three previously with the other method I was

using which I did not want.

So another trick, if I want to maintain the shape of this but I just want this edge to be slid over

this way to make these quads more even,

you can do that with the edge slide tool which you can access just by double tapping G on the keyboard.

Turn off proportional editing.

And it's shrinking in the middle here because of our snapping but typically if you do not have

snapping or shrink wrap modifier on,

it will just slide that edge perfectly along the edge there.

So let's continue.

I want to follow these curves the same way I followed this outer curve.

So I think I'm just going to grab a portion of this inner loop here because I want the curves to be the same.

Let's try extruding and scaling this in.

You might get some issues with the snapping.

We have created the extrusion.

It's just a matter of now grabbing our points and pulling them in a little bit more.

And you can do this a little bit more easily if you just grab smaller sections at a time and just

use the extrude without the scale tool.

It was really the scaling portion that was giving us errors.

So let's grab a smaller section and extrude it.

And now we can tweak these as needed.

Let's pull out this.

So it looks like we can match these right here.

And then we do need another edge loop to match this inner contour.

So let's add that.

And now let's extrude this edge up and out to try to match these as best we can.

We can use the...

My blender has frozen on me. There we go.

It's just because it's trying to get into edit mode of this object for some reason.

Okay, so the reason that just happened, this is a good thing to address, is because I was in edit

mode here and I had accidentally pressed control and clicked on this sculpt model which selected it.

And then for some reason when I hit tab it tried to go into edit mode and my whole program froze up for a moment.

So we can disable our ability to select this object in the viewport.

We can do that through the outliner here.

We should probably do this for all of these objects that are part of our original sculpt and we only

want our retopology to be selectable while we're working with it.

So to disable selection for these objects, let's come into the outliner editor window here and come

up to this filter.

And this first option here has restriction toggles.

Toggling these on will allow us to use these icons here.

So let's just click on this selectable icon right here.

And now we have it available here.

So what we can do is for these original sculpt pieces, we can disable our ability to select them temporarily.

So now when I'm in edit mode and I'm control clicking to extrude things, I'm not accidentally

selecting any of these objects.

So just a good thing to note.

And something has gone all sorts of wacky here.

Let's delete this face.

And come back in and start filling these.

Ah, this is the fill.

It's not calculating properly.

Let's just tell it what we want by selecting all the points and then pressing F to fill them.

And we've got some snapping issues here.

Let's disable proportional editing so we can move just this one out.

It just snapped to the incorrect location.

Let's press F to fill these in.

And let's fill this face in here.

And shift these around a little bit more. Okay, great.

Probably going to create another diamond right here.

So let's just do that. Pressing F.

I'm trying to reconcile the number of points I have here with the ones I have here.

I still need to keep everything into quads, which I have a problem here because I have five faces,

which obviously is not going to follow our quad geometry.

But that's okay.

I think these ones are quite large, so it won't hurt too much to put an extra edge loop here.

And now we can connect them as two quads.

And if you're getting thrown off by this mirror that's being drawn,

it's because it's being drawn the ear on the other side, but it's rendering it in front,

so we're still seeing it even though it is on the other side of our sculpt.

We can temporarily hide that just by coming into the mirror modifier and clicking the viewport display icon.

Let's tweak these a little bit so they're a little more evenly spaced.

And while I'm at it, these ones could be pulled apart quite a bit more too.

So far, so good.

I'm going to hide the earrings.

Again, we just had that snapping error.

It snapped all the way back here because of the way I was moving it, but it's no issue.

Just move it back.

A good way to check your edge flow to make sure it's creating proper edge loops

is to just hold your CTRL-R your preview over them to make sure that we have good edge flow around

the areas where you need them.

So if I were to hold this preview over this area and it did not create a full circle,

I would know that there was a problem with my edge flow right there.

1, 2, 3, 4, 5, 6, 7, 8.

Okay, so let's fill this 7.

We have 7 points in between these two, so let's add 7 cuts here.

And let's see if we can grid fill this.

I think that is a better flow slightly.

Offset of 0 is cutting this straight across, which is fine.

Actually, yeah, let's just keep this.

It looks funky, but that's just because of the snapping. We can adjust it.

So as long as we even these out.

Oh, no, we do have an error here.

Never mind, CTRL-Z to undo that.

Now let's grid fill again.

I'm just pressing spacebar, and I'm leaving my search in there as grid fill.

This is probably a little better.

So I just clicked my offset up to 1, and it has recalculated which vertices match where,

and it's giving me a slightly better flow to these edges.

Of course, we can just tweak these here. Great.

So now I believe if we extrude this one up here, too,

and then fill this last one, I believe we should be able to use the grid fill.

It's having trouble understanding that, so no problem.

We can just fill it manually with the F key,

making our selections and filling them.

So I can just select this edge and press F to fill all the way down,

because I have all those points lined up.

I think we need one more edge loop right there, just to keep these somewhat even.

I'm double-tapping G here to slide this edge.

I'm going to turn on proportional editing first.

I guess that does not affect in slide mode.

No worries, we'll just move it.

These ones are lining up really nice, so let's fill these.

We need to start to think about how we want to connect these two pieces.

I have an issue right here, but let's delete this diamond we created earlier.

I think it's okay if we just add an edge loop there.

Let's move this diamond up.

There's a couple different ways we could solve for this.

I'm just trying to think of which one is going to give us the least amount of distortion over our faces.

Let's turn off proportional editing.

Sometimes you just can't avoid triangles when redepologizing.

It depends on your mesh.

I don't think that it is worth it for me to try to avoid a triangle here and basically have to redo a lot of this.

I'm just going to merge these points together.

I'm going to have a triangle here.

That's just the way of it.

It's an alright place for a triangle if you have to have one.

It's right where this ear meets this head.

I don't think it should cause a lot of issues for us, either with animation or even with selecting edge loops.

I do not think it's going to cause major problems here.

I'm just double tapping G to slide these edges down a bit.

I want to equalize them over here.

This face to this face.

Let's double tap G to equalize that out a little bit.

This crease is really tight, so I don't want to draw a face over that.

I'm going to extend this edge loop out this way and create a face that goes like this instead.

If I had drawn this face over this area, this crease wouldn't have been as tight.

Even if we took this back into sculpt mode, which we're going to do in a future video,

we're going to take this back into sculpt and look at how to do some high res details on this now

nicely cleaned up mesh.

It would just sort of create this area that would have been drawn there, but really I want that to

be a tight crease.

Let's merge these points together using selecting, M, and at center.

We have this quad here.

I need to fill it properly.

Now we can fill this quad here.

I think that will work.

Let's grab this edge and press F a couple of times.

Actually, we need to shift some of these points over a little bit more.

Let's fill this quad.

Now I want to keep extruding this edge around.

I kind of like to do it with the fill tool as I've been doing by selecting these inner corners.

You obviously could. You could select this edge and extrude it.

You would just have to merge it with these vertices to make sure that you had a continuously closed mesh.

I just like to use the fill tool because it merges everything nicely.

Or you could obviously extrude these edges and then use the fill tool to fill it in.

However works best for you is totally fine.

You can see I'm running into some issues using the box select here because I'm starting to select things on the back.

You just have to be a little bit careful when you start doing things like that.

These faces are getting very stretched so I actually need to shift some of these over.

This might be an okay time to...

I'm going to disable this in front view because I keep selecting things on the face here that I

don't want to select.

I'm going to disable that but now I'm having a hard time seeing this.

There's a couple things you can do in order to see this a little bit better.

Let's use a displacement modifier.

Let's enable view in edit mode.

Obviously this is crazy way too strong so let's turn this down to something very low like 0.05.

Let's enable cage so that this will snap our edit mode cage onto our actual mesh so that we can continue to edit it.

We still have some areas poking through but we're not editing any of these right now so I think it's fine.

Again, this displacement is not going to reflect any changes we make in our actual mesh.

It is just a preview so that we can see what we're doing.

I've snapped some of these accidentally.

No problem. Just grab the points that are wrong and move them back.

Because we have all this snapping still enabled it should move back nicely onto your mesh without too much trouble.

There we go.

Let's fill this space and continue on.

Extrude this edge out.

And I want to line up this edge with this sort of contour in the mesh.

Let's continue this edge out following this crease in the mesh. And fill it.

I see I've selected some of my back faces again.

Just move them back.

And I think I'm going to move away from the box select because that's why I keep selecting things in the back.

I'm going to change this to tweak so that I can only select a single point really at a time.

Let me just double check that everything is looking okay.

I'm just going to hide my sculpt. And yes, okay.

It doesn't look like I have any more errors going on.

The tweak tool is also slightly faster for just moving things around.

It does make your selection speed a little bit slower in my experience.

But it's just sort of a trade-off.

So I have four points here so I can add four cuts to this.

I can also do this by subdividing and changing it up to four.

Again, it's snapping into place.

You can move them as needed.

And then I should be able to grid fill these.

Control-clicking just to select around for the shortest path.

These need to shift over a little bit more.

Otherwise I don't think it will calculate correctly.

Space, search it if it's gone.

Connecting edge loops overlap.

No problem. Let's just fill it by hand.

Let's make this into a diamond right here.

To sort of de-res down so that this quad is now lined up.

I'm just going to fill this last one, not extrude it.

I'm just going to fill these in.

Click and drag with the tweak tool to make some adjustments.

Let's grab this edge and control-click.

I'm trying to use as many methods for creating this mesh as I can.

I'm trying to sometimes use the control-click, sometimes use the E key to extrude.

Sometimes pick a corner and press F.

I'm trying to show you as many different methods as I can in practical situations.

So that you can see how you can really combine them to get the result you want.

We're getting into sort of a tricky form here.

Just press on slowly and carefully.

Hopefully it won't get too wacky.

Let's create another pole.

By making a diamond shape.

If you have to have any part of your topology be messy.

You always want to put it in a spot that the end result of this piece is not ever going to see.

Inside the ear, up right here.

Those are all good places to hide messy areas.

If you absolutely have to have them.

I'm going to put a triangle right here.

I think it's fine.

It's inside the inner ear.

You will not see it.

Actually what I'm going to do is just merge these two points.

And create this diamond here.

That is how I'm going to close off the ear right there.

Let's give this a check.

Let's turn on our subdivision surface.

Turn off our displacement.

We can even hide our sculpt.

Turn on our mirror.

That looks pretty good to me.

What do we have left here?

Let's take a look.

Let's turn our sculpt back on.

Again, you would keep the eyes separate.

We're good right here.

I don't think we need to add anything to fill in this area.

We need to come in a little bit for the lip here.

And close that off.

We obviously need to do the hair.

The hair we're going to keep a little bit more low res.

Again, if we were animating it and we knew that the hair wouldn't move.

Which most likely would be the case for a shape like this.

We can have it be a little bit lower res.

We don't have to worry too much about respecting these loops.

I'm going to pause the video right here.

When we come back we're going to finish retopologizing the back of the head and the neck area.

I will see you in the next video.