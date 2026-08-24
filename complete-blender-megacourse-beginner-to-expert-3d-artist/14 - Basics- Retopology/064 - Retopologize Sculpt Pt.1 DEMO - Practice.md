# 064 — Retopologize Sculpt Pt.1 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 14 — Basics: Retopology |
| **Bài học** | Retopologize Sculpt Pt.1 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 39:27 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Retopologize Sculpt Pt.1 DEMO** trong pipeline của section.
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


Okay, so let's get started with actually getting in and retopologizing this mesh.

So I have all my modifiers set up, I have snapping turned on, I have my retopology mesh,

I have it colored green in the viewport so I can see it, and I have backface culling

turned on, so when I come around to the back of this, we're no longer seeing the green

solid mesh here.

So let's get started.

Now I'm going to have one of these guides up on my second monitor, just so I can maintain,

or just so I can make sure that I'm maintaining these face loops around areas like the mouth and the eyes.

Again we're not going to animate this mesh, but having good topology is a good practice anyway.

So our main tools for actually doing our retopology is largely just going to be the extrude tool

and the grab tool.

So I've already started extruding some of these faces out here, so I started with this

face and I just made sure that it was mirrored onto the other side, and that clipping was

enabled so that the center points become merged and I can't move through the mesh.

So again, my keystrokes will be captured down here, but I will also describe what I'm doing.

All we have to do is we can start in maybe edge select.

Let's come around and draw a loop around this mouth.

So I'm going to select this edge and this, I'm going to show you a quick shortcut for

extruding polygons quickly, and that is instead of pressing E and sliding it out, which will

definitely give you more control, what we can do instead is hold control when we have

an edge selected and a right mouse button to quickly pull that edge out.

Now you can either use the box select, which we have been doing up to this point, and pressing

G to tweak these points.

We can do that and we don't have to worry because of our shrink wrap and our snapping,

doing that will not move this green mesh away from our original.

Or you can come down here to where it says select box, click and hold, and if you want

to select the tweak tool, what that will allow you to do is instead of pressing G, you can

just click and drag on any of these points to refine their position.

I tend to prefer just using the G tool.

That's just what I am used to and how I learned it, but either way is totally fine.

So let's just control and right mouse button around until we get some more points here.

And then we can come in with our grab tool and just clean this up.

The key to having good topology is one, maintaining your edge loops where you need them, especially

around areas of deformation.

And again, I am not an animator, so I'm probably not doing a great job of explaining why we

need to have edge loops around our areas of deformation, such as the mouth, which needs

to open and close and the eyes, which typically need to blink.

But there are tons of resources online, you can just Google things like that will give

you a better explanation for why these loops produce good animation and good deformation.

But again, I'm not an animator, however, I am aware of good topology and good topology

is based not only on those loops, but it's also based on having quadrilateral faces,

very few poles, which are areas where maybe five edges will meet at a point.

As few of those as you can manage, and also having evenly spaced geometry.

So we would not want something like a quad of this face and then have a tight loop here.

There are reasons for adding tighter loops in certain areas, but when you're just building

your initial retopology, you want to keep everything as evenly spaced and as low resolution as you can.

So I mean, I would not come in here and start adding loops at this stage because we just

we need to get this whole thing done first before we start looking at where do we need

more resolution.

So let's just continue on using the extrude tool and pulling this out.

So I've created this loop around the mouth, and that's going to serve as the basis for

the rest of this, but I also want to keep in mind the contours of this sculpt.

So because I have a sharp line here and a larger form here, I want to maintain that

in my retopologized mesh.

So I would need probably a face loop edge to come around and down on this on this larger

form and have an edge that runs in between here to accentuate this crease.

So let's grab this one and press F again with our F2 add-on enabled, that allows us to draw

a quad instead of a triangle.

So I'm going to grab this edge and just extrude this out, and I want this edge, I want an

edge basically running along this crease, and I'm going to use this edge that I've created to do that.

So let's grab this one and press F.

And we're just extruding now along the form.

Retopology is a little bit like solving a puzzle because you need to figure out how to

best create your new faces in a way that matches this form while maintaining a low

resolution and even spacing.

So if you like puzzles, you might enjoy this, but that being said, most people I know find

retopology a bit tedious.

So I've pressed F here and it's created a new point, and now I need to merge these two

together. I'm just going to select them.

I'm going to press M and merge it center, the same way we did in our previous modeling

videos. I meant to grab that and I accidentally extruded it, so I'm just going to undo to

make sure I get rid of that duplicate.

OK, so I just grabbed that edge and hit F twice to fill that in.

Already, these faces down here are starting to get a little bit large.

So we might want to break it up a little bit.

If you're getting this sort of the mesh itself is poking through these points and faces that

are being drawn in edit mode and you can't see these points anymore, you can visualize them

again by coming to our shrink wrap modifier and making sure on cage is turned on and that

will just allow you to see all those points.

So I am just looking at this on my other screen.

I'm choosing this one because it's a bit simpler than the other example I showed.

This is like a professional animation topology setup, which we don't need for our mesh

because we don't plan on animating it.

But this one is a good guide.

It's pretty simple.

And it just allows me to see, OK, I need this mouth section to come around in rings and

then come up and I'm making edits depending on the shape.

Obviously, I'm not coming around quite as much because I have these jowls coming down,

but I still have my loop here and now I need to create a section for the nose.

So let's look at how this edge is flowing or these edges are flowing.

So we have sort of a face loop coming straight down and this actually runs all the way up

to the bridge, kind of up actually above the bridge.

The bridge is about here, kind of runs up to a forehead here.

So these areas on the mesh are called poles.

You'll notice that it just breaks up the quad geometry.

And this point has one, two, three, four, five edges coming out of it instead of the typical four.

So we want to not only reduce these where we can, we also want to make sure we're placing

them in areas that will not negatively affect our mesh should we animate it.

So you never want to have a pole down in an area that is going to be deformed by

animation. So if I had a pole in the corner here and I animated this mesh by opening and

closing the mouth to represent talking, we would get some very strange things happening

in our mesh where that pole is.

So just keep in mind that poles, you can't get away from using them entirely.

There's just no way because you need more resolution around the face than you do, say,

around the back of the head.

And just by the nature of topology and how it works, the only way to get from these larger

sections to these more dense sections is by creating poles.

So just keep that in mind that we want them to be relatively few and we want them placed

in areas that if we are animating will not negatively affect the animation.

So typical place for poles is up at the forehead, another typical place is right in like

the mid cheek area.

There's no established particular order, I think, for, you know, oh, start with the mouth

and then go to the eyes.

It's kind of up to you and your workflow and your mesh.

However, if you are concerned about maintaining good loops for animation, it does not hurt

to just make your loops first, make the loops around the mouth, make the loops around the

eyes and then worry about connecting everything.

So let's actually just grab one face here and just duplicate it.

And you can see as I move it around, it slides over the surface of this mesh because of the

modifiers and the snapping we have enabled.

So let's place this right in the corner of our eye.

And you can see that the faces here are going to be much smaller in order to capture these

details than they are, say, right here.

That's OK, let's just start extruding this out either by hitting E and extruding it or by

control and right mouse button on the point on the mesh where you wish it to be.

And I'm only adding enough points to capture the flow of this, I don't want to go overboard

with the density here at this stage.

So control and right mouse click.

And let's fill this by selecting all these points and pressing F to fill it.

Let's come in and just tweak these to make them more evenly spaced and look a little bit cleaner.

And we can pull out some of these points in the outer edge to get the shape.

So that's a good face loop for the eyes.

Now all we have to do is just continue this out, basically.

So we have a crevice here for the bags under the eyes and we want the edges to follow here.

So let's take a look at how to do that.

I'm going to grab this edge and I'm going to extrude it.

And I'm going to just adjust the shape of this as best I can so that when I pull it out, that

this edge along here continues all the way around.

It's also important that you do this stage with no subdivision surface modifiers.

I keep pressing E on these when I need to be pressing G, and that might be a good case for

using the tweak tool.

You want to make sure you're doing this without a subdivision surface modifier because it's

just going to give you sort of a false preview of your mesh.

You can add one and just use it to check to make sure that everything is coming out cleanly,

but I would not leave the viewport visibility of that on.

I would just quick check, make sure there's no problems.

OK, it looks good.

Turn it off and then continue your work.

Just control clicking here.

So I want to think about how to fill this.

So in order to keep this area clean, I need to have the same number of vertices on this

part and this part.

So I'm going to go ahead and make sure that I have the same number of vertices on this

I need to have the same number of vertices on this part and this part in order that I

can cleanly fill it with a grid.

So I think I need a couple more points along here.

So let's just fill this.

Actually, let's continue this one farther out and let's try to line these up.

So this one will match here.

This one will match here.

Let's make sure.

So we have an issue here.

We have too much geometry and we do not want to pull here because that would cause problems

if we were to make these eyes blink or even, you know, if the character were to smile and

push these bags up, having a pole here might cause some issues.

So we need some more cuts.

In here, so let's shift these over, let's add, I think we need two here, two here, here.

Let's add one here to match this one, this one will go here, this one will go here, this

one here, here, let's move this one over.

Hear, hear, let's move this one over.

This one should meet one here.

I should meet this one here.

There, and we need one more right here.

Okay, I think that should be good.

So I'm going to fill this face just using the F key.

And now I'm going to use a little trick called the grid fill.

So I'm going to select this whole edge loop just by alt and clicking on it.

I'm going to press the spacebar to pull up my search functionality

and I'm going to type in grid fill.

So you'll see we'll get this option here, grid fill.

The shortcut is control F for future reference.

Let's just click it, see what happens here.

Now it wasn't exact in my...

And that was probably an issue with my counting.

It was probably just off.

So we might need to do this section by hand, but just know for large sections,

if you create the border of it and you enable the grid fill,

it will just fill that with a grid provided that you've done it properly.

So let's see where my error was.

Actually, that was okay.

So Blender just had a hard time interpreting that.

No problem, I just did it by hand.

We'll try to use the grid fill over in this cheek section

to better illustrate how it works.

And I'm just adding an edge loop to make sure that these faces are relatively even.

So let's try to use this grid fill over here so you can see how it works.

So you have one, two, three, four.

So let's move this one, two, and maybe three.

Let's grab this one, go one, two, three, and four.

And let's fill this face right here.

And we need one loop right here.

Let's select this now, grid fill.

So all I did was press space again, and my search was still in there.

So I could just hit grid fill again, and you'll see how it fills nicely in the grid.

Your points and your faces just need to be lined up in order to do it correctly.

And if it comes in incorrectly, and you know for a fact that your points are all lined up,

sometimes it's just calculated wrong.

So you can come down here to the grid fill menu option in the bottom left corner of the screen,

and click the offset, and it will just try to recalculate based off of the offset

how you want that filled.

Pressing F to create some quads.

Let's fill in this face.

All right, so we're making pretty good progress already,

and especially with the mirror modifier.

Mirroring it over means we only have to do one half.

It's just very nice.

I'm going to add a loop right here, partially to emphasize

I'm going to add a loop right here, partially to emphasize this.

Again, I didn't look it up what this part of the face is called.

This cupid's bow is sometimes this part is called, but this part right here.

I'm going to emphasize that curve a little bit more by adding this,

and it's also going to allow me to extend these faces up to the nose.

Let's grab this one, and we can just start controlling and right clicking.

You'll notice when you control and right click, it is not respecting our clipping. No problem.

Just grab those faces and move them over, and they will clip together.

The control right click maybe is better used for areas that are not right on the line of symmetry,

because you will have to come in and manually fix those.

Now I'm just using the E key, and I'm going to click on the face.

I'm going to click on the face, and I'm going to click on the face, and I'm going to click on the face.

I'm going to click on the face, and I'm going to click on the face.

Now I'm just using the E key.

So I think I want this edge to extend all the way and follow this curve.

But actually, yeah, that's what we're going to do.

We need to create a pole somewhere up here anyway, just in order for the topology to work.

And let's just extend just this one face.

So let's control and right click to create just the edges that we need.

And now we can extrude some faces up here.

And we can make this.

So the fill key, you see, has kind of erred out,

because it wasn't sure if I wanted it on this side or this side,

based on the way it was connected.

So you might have to do some of these in a more manual fashion.

So I'm just going to fill this with a triangle, and then I'm going to subdivide it. Just this edge.

Subdivide only this edge, and that will just give you a point here,

which you can pull out, and now it's a quad.

Great.

Okay, we're going to come back and finish this in a bit.

Let's come back and connect in some more of this area, main area of the face.

So I want to follow this form around.

Just using the E key to extrude it.

I'm just going to pull out this single edge here,

and try to match these as best I can.

Oops, that has filled in the wrong direction.

I think I need another cut right here so that we can come around this nostril.

So I'm just going to CTRL R and add a cut.

Select this point and press F.

Just to pull these out.

So now if we just shift this over ever so slightly, these are lining up really nicely.

So let's connect these two areas together.

I just did a grid fill there to fill in that nostril area.

And now we need to bring this down a little bit and fill in this face.

And we'll need to tweak some of these areas.

So I'm going to need to have a pole here,

because this area has much more dense geometry than the nose,

but the nose doesn't really move very much.

Again, we're not going to animate this piece, but if we were,

we want to think about having good topology as if we were.

Yeah, so we're going to need to do a pole,

and I think the nose might be an okay place to do it,

because your nose doesn't move around very much on your face.

So, let's think about filling in this.

And these look like they're lining up nicely, so let's fill here and here to connect these,

this eye piece with this rest of this mouthpiece, which I've just connected to the nose.

I think if I connect these two,

I've created a pole right here.

We have one, two, three, four, five edges connected to this point.

So if I have a pole right here,

it should be okay.

I don't think that like blinking or anything would affect this area of the mesh.

We're probably going to add some more.

Let's add a cut right here.

And let's fill that face.

And let's add a cut right here.

And let's fill that face.

I need to dissolve this just momentarily,

because I'm having trouble seeing what I'm doing here with all those points.

Let's make these a little bit more even.

And that's another reason why you don't want to go too dense

in the beginning of your retopology phase,

because when you're connecting areas that are less dense,

you might have trouble seeing how they're supposed to connect.

But you can always add density to other points later on.

Okay, I want this like here, and here.

Great, now we have all quads.

So this area is a little bit messy.

But we can always come and clean it up later if we need to.

We have two poles,

so we're going to have to make sure that we have two poles connected to each other.

We have two poles, which is not great.

We have one right here and one right here.

And in fact, I might try to fix this right now.

Let's delete these faces and see if we can make this a little bit cleaner.

Again, it's totally okay to have poles, but you want to keep them limited.

So I think we just need another edge loop coming up here.

So let's add it.

And fill it in.

Okay, so now the only pole that I really have,

I do have this area that's three, which is,

again, it's okay for the purposes of this.

But if you're animating this, you might want to,

you might have some issues closing the eyes or, you know, moving these eyes around.

But I don't think that's going to cause any problems.

And the way you would fix something like this is basically just to

make sure that your loop around your eye covers enough area.

We're just going to leave it for now.

Okay, let's continue extruding these points out.

So we're left with a decision here.

These points are lining up really nicely.

And so are these ones.

But we need either a cut in here, or we need to get rid of this one here.

And I'm going to favor getting rid of one because I want to keep this as low as possible.

So let's delete that edge loop and fill in this face.

So you can see, let's turn on our subdivision surface

and take a look just at how this is flowing.

So we can see that even though this is very low poly compared to the sculpt we had,

we can see the lines and the forms that we had sculpted into our mesh

already starting to take shape here in this low res version.

Let's turn that back off and keep going.

Oops, little error there in parsing how to fill that.

So I just selected everything and did it manually. There we go.

We need to fill in this face and then we need an edge loop right here

to accentuate this sort of indent where the ear meets the side of the face.

I'm actually going to grab this.

So let's clean this up a little bit.

It's not very evenly spaced.

So let's fix this right now instead of having to do it down the line with more points.

You can also use proportional editing if you're tweaking stuff

and it will just enable you to move things on a larger scale without having to,

you know, move every single point because it can be quite time consuming.

Sometimes I like to move every point just because it offers you a little bit

finer control over what you're doing compared to proportional editing,

but that is totally up to you.

Let's grab this edge and just extrude the entire thing up.

And extruding whole loops is a great way to extend it and keep your geometry really clean.

Let's shift this over ever so slightly here.

So I'm trying to have these edges match these crevices in the mesh.

And it's by matching these edges to these crevices and these large faces to these sort of,

what's the word?

These sort of extruded out.

No, they're not extruded.

These peaks and these valleys,

matching the edges to them will help maintain the form in a way that you'll be able to see it

even in the low res.

1, 2, 3, 4, 5, 6, 7, 8.

So I have eight going from here to here.

1, 2, 3, 4, 5, 6, 7, 8.

I'm not lining these up very carefully.

I just want this number to be the same so that I can come in later on and match them up.

So

you'll notice I'm not really using the rotate tool a lot just because I don't really need to

with things that are snapped and shrink wrapped to your mesh.

I find that the G to grab it is plenty.

If we don't want to create a triangle here, we want this to be a quad.

So we're actually going to pull this in and add a loop right here.

And then you can see that when we fill this, it'll be a quad.

So we need another loop right here.

Let's do another grid fill.

The grid fill did not work that time and I think it's because I didn't have this face filled in.

Let's delete this edge.

And let's press F to create a quad there.

And let's create another one right here.

I think now we can use the grid fill.

Yep, that'll just fill that whole thing a little bit quicker.

Yeah, we can do the same.

Oops, wrong direction.

Sometimes it calculates.

You want to go this way, but you want to go back.

So we just have to fill in a single quad and then we'll be able to parse that.

We've created a triangle here, so let's take a look at this section.

And we just need to cut right here, I think, to fix that.

Just examining the topology here.

And again, we can quickly visualize our subdivision surface.

It's looking pretty good so far.

So let's finish it out.

But I'm actually going to stop the recording and take a little break here.

Oh, first I want to address this.

Oh, first I want to address this.

So if you're ever in object mode and you see sort of these highlight edges being drawn,

and maybe it's a little difficult to see because my model is green.

So let's quickly just change the color to something else.

So if you see these sort of cuts sort of where in your model,

that just means that some of these vertices haven't been properly merged with the clipping.

So let's come into edit mode again.

And it's this point right here.

If we move it, if we just press G and snap it,

that line is now gone because there's no longer a tiny, tiny hole in the mesh.

Okay, I'm gonna put this back on green because it's a little easier on my eyes.

Okay, so we have a really good start.

We have almost the entire face done.

So all we need to do is continue this same process out over the rest of the head.

And we will do that in the next video.

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
