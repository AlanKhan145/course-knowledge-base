# 045 — Model an Object Based on a Reference Image Pt. 2 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 09 — Basics: Using Orthographic Reference |
| **Bài học** | Model an Object Based on a Reference Image Pt. 2 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 39:33 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Model an Object Based on a Reference Image Pt. 2 DEMO** trong pipeline của section.
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

Okay, so let's continue on refining the shape to get this character. So we have

sort of the general shape. There's a couple points we just want to refine, but

I don't want to add too many loop cuts manually to smooth this out because we

already know how to smooth out a model automatically in Blender with the

subdivision surface modifier. So let's add that. So we're gonna leave

this mirror modifier where it is. I'm just gonna collapse it so that we have a

little bit more room here. Add modifier, subdivision surface. So because it

includes smoothing, it's already rounded out a lot of that blockiness for us. So

what we can do is just continue to work with our very blocky, very few, very low

poly model and it will be smoothed for us. And when we get to a point where we

decide we are done, we can just apply these modifiers and our mesh will just

be as it appears. So let's just continue on.

And I like to leave, this is another reason I like to leave my references,

even though these are orthographic views, I do like to leave them visible in

perspective mode because sometimes, especially when you get towards complex

models, there are things where you're like, well I can't really tell

what vertex I'm selecting here. So sometimes it's easier to come into

perspective mode and just be able to see that that edge you're trying to create

is still there, but it's just a little bit easier to see. So the process is

going to be pretty much the same, adding loop cuts, extruding, pushing and

pulling points around until we have the shape we want. And with the subsurf

modifier, you know, we can see how it will look even in edit mode, as long as

the edit mode preview is enabled right here.

I'm just going to do what I can to round this out even more, but we will

eventually need more points to work with.

See how it looks shaded smooth? I don't like how flat this back is, so

let's just come in and fix this. I think the head needs to be rounder in the back.

That's much better.

Okay, so I want to think about the eyes, and typically for characters, especially

if you're planning on animating them, the eyes are going to be separate pieces

just for the ease of animation. So eyes are typically spheres, not necessarily

exact spheres, but pretty close. So let's tab out into object mode and add a UV

sphere, and I'm going to position it. I like to rotate the spheres this way

because I like to think of this as where the pupil would be. You can see

with the topology, it's kind of easy to visualize it that way. So let's rotate

these, and his eyes are kind of on the side of his head, and they're angled out

like so. Again, eyes, eyeballs are much much larger than the part that you see.

There's a whole part that's inside, which you can tell by if we

scale this sphere so that it fits this curve of the outside, there's a whole

portion that goes inside. We're just going to leave it right where it is. So

now let's fix some of this geometry on the head so that the eye

appears like it's sitting in an eye socket. So we need to bring these parts

way in, and we can add a mirror modifier to this eye. It is currently being

reflected around its point of origin, so it's just appearing on top of itself, but

let's click the eyedropper in the mirror object and click our body, and it will be

mirrored perfectly across the body. It's looking pretty good.

Control-clicking to select my shortest path. I just wanted this edge loop

because it's been created all the way down the body, because we currently have all

quadrilateral faces, which is really good. It's for ease of modeling and things, but

I just want to scale this part.

Oh yeah, that looks good. So just control-click, and then I think this needs to come out a little bit more.

And then you can always turn off your preview if you can't see where your

points are because of the subdivision surface modifier. You can always turn it

off, see where the points are, how the edges are flowing, and turn it

back on to get your preview. Let's start shaping this edge loop into the mouth.

It's about where we want our mouth to be, so let's just use an edge loop we already have,

because as you'll see, this will start to get pretty dense as we keep working.

So the mouth kind of forms more of a frowny face, so let's keep manipulating these edges.

And I'm frequently switching over to solid view, looking at perspective, just so I make

sure that I'm grabbing the right vertex, because you'll see as this starts to get denser and

it can be hard to tell if you're grabbing something in the front or the back.

So currently we have this edge, so this one needs to come down more.

And actually I might even need to cut in a new edge loop here for the mouth.

I either need to cut in a new edge loop here or one down here because of the way these

these edges are flowing. I think I will need to do that, but we'll see.

So let's add some sort of retaining loops around here, just so we can preserve some

of this form that we just created. And now I think the best way to do the mouth is to

let's turn off the edit mode preview really quickly, select up to here.

This is going to be a little bit of trial and error, but that is generally our mouth.

Let's bevel this, see what happens.

And extrude it in maybe a little bit.

That's roughly what we want, but it's getting a little bit wacky over here,

so we just need to kind of pull some of these out so it's just not quite so pinched.

And we need to add some more points.

We need to pull out some more form right here to create sort of the lip.

So let's take a look at what we have going on here.

Yeah, so we need an entire edge loop right here.

So the reason this edge loop didn't get added all the way down like this is because when I

beveled this, I created a triangle, which sort of broke our edge loop continuous flow.

So you can see when I added another edge loop, it added all the way around,

but we now have this face that is no longer quadrilateral.

So we can fix this with joining. Select this, select this, join it.

Now this face has five edges still, but everything over here has been fixed.

So we just need to determine how do we want to rectify this edge with five faces.

And I always recommend that, especially if you're working in games and stuff,

you should really always try to keep your faces to three or four edges.

Triangles are perfectly okay, but anything with like five or more edges,

you're probably going to have some issues either in animation or in shading.

So this edge loop got added this way.

It stopped here when it saw a face with five sides, but we can fix that.

So now we have four, four, four, and four.

Re-enable this. Yeah, and that's starting to look a little better.

And this part is coming out, I think, a little bit too much.

We want it to come sort of in more and match our drawing, so let's grab this.

And you'll notice that with the subsurf modifier active,

you'll end up with your actual points of your underlying mesh maybe like way out here,

but the mesh itself may be way here, like in here.

It's just because of the smoothing operation.

It tends to shrink the mesh a little bit.

It's just something to be aware of.

All right.

So far, so good.

So now he has nostrils way up on sort of the top of his head.

So let's determine where, based on our topology, those should be.

So when we look at them in the front view, they should be probably around on that face.

So let's inset this face.

Just hit I on my keyboard, and we can make the inset about the shape we need,

sort of like that, and we can refine this shape as much as we need to.

It's a little high, but again, when you're translating something from a two-dimensional

drawing to a three-dimensional model, your alignments are not always going to be perfect.

And if you make them perfect, it's probably a safe bet that your model will not kind of look

the way it won't look right in 3D.

They are planar, it's just not really the rotation I want it to be at.

That's not too bad.

It's lined up based on the orthographic views.

These are lined up properly.

But again, you have to take into account, how does it actually look?

So if you think it aids the model by deviating slightly from this orthographic viewport,

then it is typically fine to do so.

Not to say that you should throw out your model sheets entirely,

otherwise, what's the point of them?

Deviation to make it look right is totally fine.

I've turned on proportional editing here, and that's just going to help with some of these angles.

Since I am modeling an organic shape, it just tends to smooth things out a little.

Okay, so now let's go in here and fix some of the blockiness in the arms and in the torso.

So I'm going to click here and then CTRL click, and you'll see that even though the subdivision surface

smoothing is causing this smoothed mesh to come in front of these vertices,

I can still select them by just hovering over where I know that the point is.

And clicking, it will still be selected.

I'm going to bring in some of these parts that are forming more square corners.

I'm just going to bring them in on the X and the Y axis to round them out a little bit.

And this is coming straight across, and I think I'd like to just swoop down and create more of a curve.

So let's start moving some of these points.

And now we want to create sort of this collar section that comes kind of more straight.

It's like a stiffer part of the fabric that he's wearing.

So we already have the edge loop for it.

Essentially, I need a little bit of adjusting.

So yeah, we're going to look at this edge loop here.

And I'm not flattening it completely.

All I have to do is hit S and Z, and it will start to flatten it in the Z direction.

But I don't want to flatten it completely.

Okay, so let's take this and bevel it.

And we scale this part in.

Now I want to start to distinguish sort of where his clothes are from where his skin starts.

So I think what I'm going to do is just fixing the parts where I see sort of funny shapes happening.

So to do that, I think what I'm going to do is...

Let's disable this so I can see what I'm doing really quick.

I think I want to just extrude this face loop out a little bit.

So now we're starting to get this collar form coming here.

And we can do some more editing to make this more defined from the skin part.

We need to bring in this center line a little bit because we're getting...

I like this sort of ridge that his face is coming to right in the center.

That's sort of how I envisioned this character.

But I don't necessarily want it down here because he's wearing sort of baggy clothing.

So let's smooth some of that out.

I'm just testing out if I place the... if I reorder my modifier stack.

If that makes the shape better or worse.

It doesn't really seem to have a strong effect.

So I'm going to leave the subdivision surface modifier under the mirror.

Because it does not help me to move it.

Okay, so I've smoothed out a lot of this sort of pinching that I was getting down the middle.

And when you get pinching like that, it's usually caused by having a lot of geometry that's very dense right here.

So you'll see that these faces are much thinner than this face.

So because it's not evenly divided, I'm getting some pinching there.

And there are other ways to fix this, you know, by dividing and smoothing it.

But I think I just want to leave this with as few vertices and faces as I possibly can.

Until I absolutely have to increase the resolution.

Because the fewer points you have to push and pull around, the easier it is to work with.

Okay, so I have sort of the beginnings of this collar here.

We can increase sort of the sharpness of this contrast by adding more loops in here.

So let's just make a small bevel.

And you can see already that it is.

If I Ctrl-Z and Ctrl-Shift-Z to redo it.

Oops, except that it won't. It's fine, we'll just re-bevel it.

You can see it's a much more sharp line right there.

Okay, so we basically want to do the same thing with the wrists and the ankles.

He's sort of wearing a coverall set.

So let's turn off the subdivision, edit mode preview so we can see all of our points.

We want this point, this edge loop I should say.

So with the whole edge loop selected, let's bevel it until it's about the thickness of the cuff.

Let's extrude, unscale it, lock the X axis by pressing Shift-X. About there.

Tab into object mode will automatically, because we have it viewport enabled,

will automatically turn the preview of the subdivision surface back on.

The arms are still quite boxy, so let's fix that.

Using the shortest path select there again.

We probably want this to be a little bit more evenly divided.

Because the subdivision surface makes its divisions based on where the divisions in your geometry already are.

So if you have an area that's really heavily subdivided,

maybe I should have done this on the corner so you could see it more.

If you have an area that's more heavily subdivided than other parts of your mesh,

you'll see that we're getting more of this pinching here,

because it is subdividing based off of the underlying geometry.

So there are more subdivisions happening here through the modifier than on the surrounding areas of the model.

So just keep that in mind if you're getting some strange pinching or stretching.

Try making the underlying model without, you know, not including the modifier.

Try to make all these faces more even, and it should help with that.

So yeah, you can see this boxiness is being formed because these are quite flat.

So we just need to take the center portions of these and round them out

by pulling them in the Z direction in this case.

And doing this with the proportional editing on will just speed that up.

And we can bring in the corners as well as bring out the centers to round the shape out.

Again, this is quite boxy, so let's get rid of that.

And we can do the same thing with the Z direction.

So we can bring in the corners as well as bring out the centers to round the shape out.

Let's just select this.

And I don't actually want the whole thing.

I just want the middle parts going around this loop on the hands.

I'm just going to scale these out a little bit.

And I might have to do this in several steps. No big deal.

So because of the shape of this, it has these sort of waving contours.

If I selected the whole thing and scaled it, parts of it were scaling out the way I wanted it,

but parts were also scaling in the way I exactly did not want it.

So just breaking that up by forming multiple selections and scaling them.

And tabbing into edit mode and object mode very frequently to get a better idea of what I'm doing.

I just like to tab out into object mode to look at it, assess what needs to be fixed.

Tab into edit mode, come in and fix it.

Tab back, see if those changes have been effective in the way that I wanted them to be.

And I think to make this thumb less boxy, we need to scale the ends of it down a little bit in the Z.

And I'm going to turn on... no, I'm not going to turn that on.

There's an option for connected only, but this is all connected, so I don't think it would actually serve any purpose.

And it seems I missed an edge here when I was beveling, so now we're getting some triangles, which

might cause problems.

So let's see if we can CTRL-Z that.

Actually, I don't want to lose what I was working on here.

So let's see how we can fix this.

Basically I want to remove this edge loop and redo it, because I missed part of my selection here.

So let's select the edge loop, hit X, and delete it.

So now we just have this piece, but all this geometry is super messed up.

I'm going to select this point, this point, and merge it at the last to snap that vertex onto it and get rid of it.

I'm going to do the same thing here.

Shift-R to repeat.

Okay, so now we have the loop is clean, it's back to where it was.

So let's retry that bevel.

So you see that when I ALT-clicked, it didn't click through here because of the way we had it extruded.

So we just need to manually make sure and be careful and look to make sure we have our selections

made before we perform these operations.

Okay, so now that bevel is performed nice and clean around the hands.

We get a nice clean separation all the way around.

Okay, let's go down, let's move on to working with the feet.

And now he's got like two big toes.

So the way I think I'm going to do that, they don't need to be completely separate from each other.

So let's just grab, let's say these edges about.

That's about where the separation between the two toes would be.

Let's just turn off proportional editing and scale it.

And we already see that we're starting to get the separation.

So now let's just keep working until we get this the way we want it.

I'm going to scale this on the X to round the shape out.

And come into vertex select.

And obviously these toes are not, this one is not, he's got like, he's got like one big one and one little one.

This drawing is probably not the most accurate.

But if you think about it, your big toe is going to be on the inside.

So even though this is like an alien type creature, we want to maintain some conventions of humanoid form.

Just for aesthetic reasons.

It's going to be more pleasing to look at if some things kind of work the way that we expect them

to, for lack of a better term.

And the reference does come way out here.

And we can make his feet wider.

But I don't necessarily want to make this one any bigger than this one.

I want the larger one to be on the inside.

So I've just widened the feet so it matches the reference more accurately.

And moved the split over to where the split is in the front.

We're going to need some more detail to get the shape right.

So add another edge loop.

And now to define this separation a little bit more.

Same way we did it with the cuffs and the collar.

I'm just going to bevel this.

But keep them fairly close together.

Actually that might even have been a little bit too wide.

So now we're starting to see some more separation.

You can just further accentuate that by pulling it back.

Remember again, all I have to do to lock the Z transformation of these is to make my selection.

Hit G, Shift Z, and now it will move on the X and Y, but not up and down on the Z.

I'm going to fix this sort of pinching in the heel.

And round out the heel a little bit more as well.

So those legs are looking a little square, just like the arms were before.

But it's not going to be any problem, we already know how to fix things like that.

Let's grab the center point and bring it forward.

Proportional editing of course to make that a smooth falloff.

Let's grab one of these back points.

And let's start mushing in some of these corner points.

G, Shift Z, and bring them in.

And this is probably the last corner we need to do that for.

G, Shift Z, push it back.

Much more rounded.

Let's make some cuffs down here for the bottom of his coverall pants.

I'm going to just add this edge loop.

And then I'm just going to grab this face loop.

And I'm going to extrude it.

Scale it, lock the Z axis.

Maybe even reduce it on the Z a little bit.

Now to make this cut kind of finer, we're just going to bevel it.

You can bevel this one as well.

Now this one I think will not select all the way around, yes it will not.

So just make sure you have the entire loop selected.

And we can bevel it.

Not that you can see that one as much, but I guess you can from the back.

And let's do the same thing with this one.

Make sure it's selected all the way around, which it did not.

Oops, wrong one. There we go. Bevel it.

Another nice thing about the mirror modifier is

while you're working with it, you can sort of preview what's happening in real time on this side

by just looking at it without having to tap in and out of object mode.

Just confirming that that's selected the way I wanted it to.

Now I can't scale this normally

because it will lose the slope, it will flatten out the line of his mouth.

And I like the curve of it, I just want to make his mouth look a little bit more closed.

So I'm just going to grab this top edge, and this is like the interior part of this extrusion.

So it's this edge here.

I'm going to turn the preview on so I can see how it looks.

But I'm looking over here to see how it's going to look

because this is kind of a mess to look at.

So grabbing it down, and then the real trick is

what I just did there is this triangle icon will allow you to see the wireframe all the way across.

But it is just a preview.

Yes, that is the correct edge.

Let's just scoot this edge up closer to this one.

You can even get really fine and scooch in the individual points.

You can see that his mouth just appears a little bit more closed.

This line is a little bit tighter.

Okay, so I'm going to wrap up this demo here.

You can spend obviously a lot more time refining this shape to get it exactly the way you want it.

But I think you get the general idea of how to model based off of a reference image.

As you can see, using the reference images, we've gotten much closer to this

than we probably would have been able to just by looking at the picture,

maybe on another screen or something, and modeling it by itself

you're able to, in orthographic view, match these curves and lines almost exactly.

Obviously you'd want to come in here and pull these out and start to refine the shape even more.

I do encourage you to do that on your own.

But this is going to conclude the demo portion for this section.

When we come back, we're going to get into some more advanced modeling techniques

that are going to speed things like this up even more.

I will see you in the next video.


