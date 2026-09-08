# 049 — Model an Object with These Operations Pt. 1 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 10 — Basics: Mesh Editing Operations II |
| **Bài học** | Model an Object with These Operations Pt. 1 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29:18 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Model an Object with These Operations Pt. 1 DEMO** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- modeling, mesh editing và kiểm soát hình học
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


Let's get started putting those advanced mesh editing tools into practical use.

So I'm just in a new Blender file here, I'm in the modeling workspace tab, just

to maximize the 3D viewport. Let's delete these ones, we won't need them. So I've

given a bit of thought to what we can make that would showcase these tools, and

I think we're going to do a little tombstone, but we're going to do like, you

know, a cartoony one, not a creepy one. So let's get started.

I'm just going to start with the tombstone itself. I'm not too worried about scale on this one. So

just add a loop cut,

grab these, and I'm going to start beveling some of these edges with

CTRL-B. Oops, I didn't want to actually bevel those ones, so I'm just going to undo that one, and

CTRL-drag up out of box and release to deselect the box selection.

I'm just adding a couple loop cuts down here to clean up the geometry. So right

now we have what are called n-gons, which are, you know, faces with more than four sides,

which tends to cause issues just in modeling in general. It's just better to have things

clean and quadrilateral where you can. I'm just hitting J to join these.

Okay, and now I just want to shift these over in the X a little bit

so that this edge is a little bit more straight.

Okay, that looks pretty good for the profile.

Again, all that should have been familiar, just selectively shading an area smooth,

and then applying the scale to get rid of the shading errors.

Okay, so this is a good starting point. So from here, we're going to use our knife project.

Let's come in and add a text object, rotate it up,

bring it forward a bit. Okay.

Let's tab into edit mode here and change the text.

And if we come into the object data properties for a text object, which is denoted by this lowercase

A, we can even change the font. So if you come into the object data properties here and

come to the font dropdown, it'll give you options for all of the types of font, regular, bold,

italic. And you can come into here and change it. So if you have a font loaded into Blender,

it's going to appear in this list. Right now, we just have the default font. So to add a new one,

you just want to click the open font. And it should open to the location on your machine

where fonts are installed. In Windows, it is just the C drive Windows fonts.

So these are all the fonts that I have installed

on my machine. So we can come in here and just browse for one that we like.

This one might be kind of interesting.

All right, so we have an issue with this font because it doesn't seem to recognize the period

icons. So let's pick a different one.

Let's pick this one. It's got these cool sort of drop shadow pieces that I think will look

really interesting in this mesh. Okay, so now we have our text object ready to go.

Let's click on our headstone.

And just rename it there. It's just good habits to keep. Let's tab into edit mode.

Let's get sort of a glancing angle and control and click on the text object.

And now let's press one in the orthographic view. And let's come up to mesh and click knife

project. It looks like it's been made pretty cleanly. Sometimes you can get sort of funky

cuts if the if the geometry isn't quite right. So look, this is what I mean. It's sort of cut

in at an angle here. So yes, let's use loop tools to fix that. Let's select the whole

ring around here. And we know how to make a selection of edges into a circle. We just

learned that with loop tools. So let's right click loop tools circle. And that will snap

that into a perfect circle. Same thing right here. All right, that looks a lot better.

So unfortunately, we've lost our selection that we got when we made the knife project,

but we'll just have to come in here and manually select all these faces that we're going to inset.

Don't forget these small little ones that have created sort of little slivers here.

Let's see, I missed a couple over here.

Okay, that does not need to be selected. Just checking my selection. Okay, it looks good.

Oh, we missed that one. There we go. All right. So now that we have our selection enabled again,

we're just going to extrude it in by hitting E on the keyboard. And there we go.

I'm going to enable cavity shading just so we can better view this. Okay.

It looks pretty good.

We can enhance the visibility of these by scaling them a little. Now, I'm going to change the

transform pivot to individual origins. And hopefully this will scale. Okay. It's sort of a

complex shape. And when shapes are this complex, you never really know quite how they're going to

scale. But I think that looks pretty good. The only area I'd like to change is this curve from

here to here. Control and clicking for the shortest path to about here. Actually, better just do the

whole thing. Let's click that one too. So I believe if we scale this now, yeah, we get a

little bit more visible. And let's just shift it over a little bit. Just so we have sort of an edge

going all the way around it that we can see.

And you can come in here and do this for all of the edges that you can't

really see from the front or the graphic view.

I think more like that. Okay. So you can come in and do that for all of them. I'm not going

to probably do all of them just because it's going to be very time consuming, but

that's a good start. Fix some of this shading.

I'm just shift clicking to deselect some of these after I have alt click to select the whole thing.

And probably for this, the best method is the shortest path.

Okay.

So we can just continue to add to this a little bit just to give it some more

visual interest. I'm going to bevel some of these corners and edges.

So I'm just using a combination of shift clicking and control clicking here.

I know I only repeat that a lot because I know that the keystrokes are captured here,

but the clicks are not. So I always like to try to repeat how I'm clicking.

I'm going to select everything with A. I'm going to hit, and then I'm going to press alt N and

I'm going to reset the vectors, except I first needed to shade that smooth.

So this can get kind of wacky sometimes when you're working on flat faces.

So these ones actually do not, should not be smooth. So we're going to shade them flat.

Same thing for all these ones on the inside, which we can get to if we go into

right orthographic, and we're just going to box select this very

little edge right here, which should select all of these flat faces.

Shade flat. Okay. So we fixed the problems with the edges being sort of shaded, funny, and

just to review, we did that by shading this smooth, then in edit mode, selecting everything,

hitting alt N, resetting the vectors, and then going back and manually selecting the

faces that we needed to shade flat.

So I could have used a mirror modifier for this shape, but I did not because the insets I wanted

to make obviously are not symmetrical. So if I need to adjust this at all,

I just need to remember to select both sides of it. And instead of using like a grab

tool to move this in, I would probably want to scale it.

By pressing G twice, you can access this edge slide tool, which will slide this edge along

the profile of the other one. You can also access it here in the toolbar, but

it's easier to just G and then G again.

Okay.

Just experimenting with some different methods for getting these edges to

look a little bit cleaner, but we can come back to that.

Let's continue this out with a mesh and a plane. I'm going to do like the mound of dirt right here.

So let's move this out and scale it along the Y. That's pretty good. Again, I'm not going for

realism by any stretch here. Actually, it occurs to me now, because this is not a realistic scene,

can I add just a little bit of tapering up just to make it a little bit more cartoony, I guess.

Okay. So with the plane roughly scaled in place, let's add loop cuts. Actually,

let's just subdivide this and open the subdivide menu, increase it a couple times.

You just want to increase it to an odd number here, because I want this line to be exactly

in the center aligned with this Y axis. And if it's an even number, you'll see that it's

aligned with this Y axis. And if it's an even number, you'll see that it doesn't. I mean,

you can add a loop cut here, sure, but just avoid the whole thing altogether by increasing the number

of cuts. Okay. So now that that's nicely subdivided, I'm going to grab this point

or this edge loop, I'm going to deselect this last edge here. And this last edge here,

I mean, so it's just the center one. So you could also just drag out a box selection.

And I'm going to turn on proportional editing, G and then Z, and drag this up

till it's sort of got a rise in the middle. Let's just fix the shading really quick on that.

And we can turn proportional editing off, flatten that by pressing S and then Z and then zero,

we can flatten all the edges around it. And we may, we may need a little bit more detail on this.

But we can always add it. Okay, that last one didn't take. Okay.

I'm just going to drag this down to align it back with the ground plane.

And add some more loop cuts here. Yeah, that's a little bit better. Because now these

faces are all approximately square.

Let's add a modifier to this, add a subdivision surface just to give it a little bit more

geometry to work with. And let's use the randomize tool.

So on the toolbar, click and hold on smooth, select randomize, release.

Randomize tool is very powerful. So I often find that using the manipulator is just too strong.

And it's better to come down here and just manually type in very low numbers.

Great. So that's added a little bit of like a rippling on this on the top of this.

And I think I want to add just a little bit more interest to this piece. It's just looking

a little stark. So I'm going to quickly come back into edit mode on the headstone piece.

And I want to add just to the bottom, some extrusions, scaling.

So it's about even all the way around.

Extrude down again.

Extrude down again. And then repeat it for like one more level.

E, S, shift C, S, X to bring that in.

S, Y to bring this out. And then E one more time.

Again, it doesn't have to align exactly with the ground plane, but I just want to make sure that

it is all going to clip through properly. So I can double check that by just adding a plane

and scaling it up. And then looking around to make sure that there's no like

gaps where it would be floating above the ground plane.

It doesn't look like it. So let's delete this for now.

Okay. Yeah, this already looks a lot more interesting.

Let's give these edges a little bevel.

Scale that a little bit. Okay, great. Now let's keep going.

I'm going to use the spin tool to make some flowers for this section right here.

So I'm just going to move these objects aside for a little bit. So just so I can work

cleanly in the middle without having objects in my way.

Sorry, these faces are being shaded smooth and they should be flat.

Okay. So let's start with the center part of the flower, the part that the petals emanate out from.

So, Shift A, out of sphere. And I'm in front once again, so I'm going to go ahead and

scale this down a little bit here. And I'm in front orthographic, coming in and deleting

the bottom half. Now let's scale this down a little bit and I'm going to do it in object mode

so it scales towards the pivot. And sometimes I don't necessarily model things at scale. Oftentimes

I just scale them down when I'm done. As long as the proportions are correct,

there's no problem doing that. Just remember to apply your scale after you

finish scaling it down to size. Okay. So I'm going to make a new object here and it's going to be

a plane. Planes are used most frequently for things like leaves and flower petals and things

like that. I mean, there are other uses, of course, for planes, but if you wanted to make

something like a leaf or any sort of foliage, you would most likely use a plane.

Okay. So if the center is about that large, the petal should be probably like out there.

Okay. So let's start, I mean, obviously this petal is quite flat and quite pointy. So let's

start rounding out these forms. I think I'm just going to bevel this center edge.

And then I'm going to connect these points by just shift clicking to select them and pressing

J, which will of course create the points in between them. And I'm connecting them simply

so I can bevel them. Let's add a loop here and a loop here. And it has stopped here because

this is a triangle, of course, but we can fix this by selecting both of these hypotenai,

I guess is the plural for hypotenuses, maybe. And let's just sub, oops,

that, we're just going to subdivide them, which should create points right here and right here.

And let's grab these and round this out a little bit more and scale these out.

Okay. So we rounded it out a good bit. We could continue on and get it, you know, very smooth.

We've rounded it out in this direction, but it's still quite flat, which we do not want. So let's

put a cut right in the center, turn on proportional editing, press G and Z. And then,

and then, so you'll notice here, these edges, or I'm sorry, these, this plane and this sphere

are part of the same object. So they're being, both are being affected by proportional editing,

even though they're not actually attached. So to make it so it is only the things that are

attached to your selection that are being affected, just come to the dropdown and click

connected only. So now when I use proportional editing, you'll see that the sphere over here

is not being affected. Let's pull this down a little bit. And we're going to need some more

cuts going this way. So let's just do control and R, scroll up on our mouse wheel. And I think I

did six cuts there, just until they look roughly square. They won't all be square, but that's okay.

Let's grab this, actually this point, these three. And let's press G and Z and scroll up

on our scroll wheel, or down on our scroll wheel, but increasing the size of our influence radius

to try to just give it some lift in this direction. Actually don't even need to go this far in.

But you can use proportional editing and scrolling the mouse wheel

to get sort of a nice shape that you like. This is good enough for me, I think.

So now let's duplicate these petals around in a circle to form a flower. So to do this,

you have to tab into edit mode. And we're going to use the spin tool. Now

a plane is a non manifold object, remember, so it has this open wire edge. So when we spin it,

it is not going to spin correctly, it's going to try to extrude it.

But that's okay. All we have to do is come down here to the spin menu and click use duplicates.

And we can set the number, 10, 8, maybe 8. And there we have our duplicates.

And I think I need to do a little bit more transforming of these points to get the correct

shape. And they do overlap a little bit. We'll try to fix it. If you scale in the,

I believe if you scale in this section of the petals more, it

will not have that issue. So it's just because I think

this area is too thick. So let's just grab that and scale it. And so it's much thinner.

Okay. So now at this size, we should be able to

spin our duplicates, and they should overlap a little bit less.

Do they do there's a little too much space here, maybe though. Just undo that.

So I think my falloff was maybe just a little bit too big, my influence,

or my, I just scaled it a little bit too much. So let's try something more like that.

Okay. That's pretty good. Not too much overlap that it's, it's going to look strange. And

there's not too much gap either. All right.

So I'm going to stop the recording here, take a little break. I don't want these demos to go on

too long. But when we come back, we will be finishing this little piece.

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
