# 070 — Coloring a Model with Materials DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 16 — Basics: Introduction to Textures and Materials |
| **Bài học** | Coloring a Model with Materials DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 32m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Coloring a Model with Materials DEMO** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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

Okay let's look at how we can use materials and material slots to add color to some simple

objects. So first thing we need to create an object to add color to. So I'm just here in a

new Blender file as per usual and I'm going to just hit A and X and delete everything. I'm going

to come over to the modeling workspace just to get rid of this animation timeline in the bottom.

Now let's add a UV sphere to our scene. So I'm going to make this into a watermelon because I

was playing around with some different objects and that one was a fun one to color. So I want

to maintain this sort of top piece and this bottom piece as the ends of the watermelon so

I'm just going to rotate this in the Y direction by 90 degrees. So here we have our our end points

at either side. Now I just need to scale this object more appropriately so it is less of a

of a perfect sphere. Let's scale this in the X direction to about there. Let's quickly fix

the shading on this by right-clicking and clicking shade smooth. And now what I want to do is extract

a slice of this basically. So luckily we have the edges and faces in here already set up really

nicely in a way that's going to allow us to do that. So basically what I want to do here,

I'm going to grab a loop, a few loops really, and I'm going to grab it perfectly in the top

just because it will make it easier to model if these things are aligned with our world axes and

we can always rotate them at the end to make them a little bit less aligned, less, you know,

static looking. So all I have done is selected these sort of vertical, or I guess in this case

they're now horizontal, edge loops by alt-clicking and then holding shift and continuing to alt-click

and then I just cleaned up my selection by coming around here and selecting the end points which

were not selected using the loop select shortcut. So I want to separate this piece

from the rest of the melon. So the way I'm going to do that is by pressing P on the keyboard which

will bring up the separate menu and we're just going to separate by selection. So it has now

split these, these two edges, it has split them into two separate edges. So now when I tab into

object mode I can come in here, I can grab just this top slice, and I can move it away.

So now we just need to fill in some of these holes. So let's start with the main piece here

and let's just grab this edge loop and just press F to fill it. Now it will be filled with this

wacky, crazy, warped face because it is trying to fill this hole with a single face and this is a

very non-planar selection so it's not going to be able to do that properly. So, but fill it anyway

and we're going to grab this end point and hold shift select this end point

and we're just going to press J to join them splitting the face.

Now typically you would want to continue this to clean up your topology

because these faces now are still what we call n-gons which are, again, faces with more than

four sides which typically will result in some shading errors and things of that nature.

So let's see what we can do about cleaning this up.

So if we start joining these you'll see that they join in sort of warped but we can double tap G

after selecting these points to move them back

without affecting the shape. You could also move them just by pressing G and X since we are

perfectly aligned to our world x-axis and that is why I choose to model things like this.

It's easier for modeling and then you can always rotate things at the end as you need to.

So press J for each of these and slide these back.

Oops, not H, I meant to double tap G.

So I'm going to start from this end because I think, yes, we'll get some major distortion here

and if we already have these edges cut in it might, we might not be able to slide these points

over so I'm going to go ahead and do that. So I'm going to start from this end and I'm going to

actually I'm going to start from this end because I think, yes, we'll get some major distortion here

and if we already have these edges cut in it might, we might not be able to slide these points

over so easily so I'm just going to start. Now that I've reached the middle on this end

I am just starting from this other end doing the exact same process, selecting my two points,

pressing J and then sliding the point back so everything is roughly aligned.

Oops, again accidentally hit H there and hid that part but just

Ctrl Z to undo it or hit Alt H to unhide everything.

All right, so now we have our our mesh cleaned up, we have all quad faces here.

Let's come in and select all of these interior faces. I'm going to do that by clicking here,

holding Ctrl to select the shortest path between the two, Shift to make a new active selection,

and then Ctrl again to click the shortest path. Now I'm just going to right click,

I am in face select mode, right click and I've shaped these flat so that this appears more

accurate. All right, so let's quickly come in. I don't want to spend too much time on

the modeling section because we have already covered modeling in detail. So let's just come

in and quickly finish out the slice. So first we're going to rotate it on the x-axis by 180 degrees

so that we are left with it with the rind sort of portion at the bottom. I'm going to tab into edit

mode. I'm going to select everything with A and I'm just going to move it up so that the pivot

point, the origin is at the bottom. And while we're at it, we can do the same thing with this

piece here just so that it sits on our ground plane. All right, so now to fill this in, it's

going to be a pretty similar process to the way we are filling these holes. Let's grab this point

and this point and let's press F to draw an edge between them. Now that we have that edge selected,

we can select the rest, we can select one side of this at a time. Now holding alt and clicking

will select the entire thing or you can hold ctrl and select the shortest path to get one side,

press F. And while we still have this selected, we can come into face, the face menu here

and come down to shade flat to get that to be a nice flat edge. Now let's do the same process on

the other side, just holding ctrl and clicking, F, come into the face menu, shade flat. Okay, so that

is pretty much all I'm going to do with regards to modeling. So now it is time to actually color

these pieces in. So to do that, we need to first be able to see our materials. So let's change our

viewport shading to material preview and we see here that we have just our blank white empty

textures or materials rather. So let's add a new material to this piece by coming into the materials

properties tab. Let's create a new material and we can name it whatever we want, just name it

color01. So this is now the material currently applied to the entirety of the mesh. So let's

make this the first sort of green color we're going to use on the outside of our watermelon.

So all we have to do is change the base color here to a green and since we are already in

material preview mode, we can see it update in real time on our mesh.

So that's great for the first color, but now we need more color variation to make this clear

what this object is. So let's come into edit mode. Actually first before we do that, let's create a

secondary material. So I've just added a new material slot by clicking the plus icon here

and I'm going to add a new one and let's just name it color02.

And now I want this also to be green, but I want it to be a darker green. So I'm going to shift

this dot over into the green section of the color wheel and now I'm going to pull this one down.

Again, we are not seeing this color reflected on our model because no faces are assigned to it yet.

So let's come into edit mode now and let's start selecting every other face loop going this way

along the mesh. So we just alt and click on every other and hold shift to click multiple.

All right, and now let's come in and finish this selection by selecting the endpoints

and making sure that we also select the endpoints on the other side.

Okay, so now we have our selection made for our secondary material. Let's just come

down and select the secondary material here in the material slot list and let's hit assign.

All right, let's tab into object mode to take a look and already this is starting to look

like a watermelon. All right, however, we have taken a slice out of this melon,

so we need to color the inside as well as the outside.

We can hide this slice for the moment. We're just working with this piece.

So let's just continue on using the exact same methods we were using.

And if you wish to change the roughness of either of these materials, you are more than

welcome to do so.0.5 is probably fine, but if you, for instance, give the darker value a

slightly higher roughness, you can, it's pretty subtle, but you can see the difference here

between the two colors here and it will just add more contrast if you wish.

That's a little bit strong, so let's go around here.

Okay, so let's add a new material to represent the interior of this melon.

Well, add a new slot, add a new material to it, rename it, and let's choose a pink color.

I think something like that.

Okay, so now we just need to assign the faces to this material.

Let's tab into edit mode and make our selection here.

And let's just hold and control and shift to get all those interior faces here.

Let's highlight the color 03 and let's click assign.

So already we can tell just with these basic colors what this object is supposed to be,

but we can continue to add more detail if we like.

Let's add a couple edge loops here to represent sort of the interior,

because right now this comes to a very sharp edge.

And although at a distance, we obviously know what this is supposed to be,

we can keep adding to it.

We can keep adding to it.

Let's make these the green color, the first green color,

by highlighting color 01 in the materials list and clicking assign.

And I'm just control zing to get my selection back.

I dropped my selection so I could see what it looked like.

But I need that selected again, because I'm going to extrude this out a little bit

and scale it in on the Y just to add some thickness,

or the illusion of some thickness anyway, to this rind.

Let's grab these edge loops by holding alt and clicking.

And we can move them down.

Actually, let's grab one at a time because I want to slide them down

so I can use the double tap G to slide an entire edge loop as well as a single point.

So with the whole edge loop selected,

let's double tap G and pull this down just so we can see it a little bit better.

Now, watermelons typically have a sort of white section of the rind before they become pink.

So let's add that by adding a new material slot, creating a new material.

And this one, let's name it color, let's name it color 04.

And we can leave it white.

You can change it to more of an off-white if you like.

Let's grab this edge loop, or face loop I should say, and assign it.

And if you wanted this to extend farther down, we could add another edge loop to each side.

Select the face loop and assign it.

We have some selection errors here, no worries.

Just come back in and select the faces here.

I even have some little bit of geometry issues.

Anyway, I'm not going to spend a ton of time on that because we already know how to model.

We just are looking at how to add color here, but you can fix that on your own time.

Let's deselect some of these faces.

And let's check the other side.

Yep, we have some faces incorrectly selected here.

Let's assign to the white.

All right, already we have a pretty good starting point.

Let's look at the slice.

Now, let's use the same method we just used for coloring the melon to color the slice of it.

So let's tab, actually before we do that, instead of creating a new material here and

trying to match this green, we can reuse this green material because we want it to have

the exact same color, the exact same roughness value.

We want it to be exactly the same.

Instead of adding a new material, all we have to do is add a new slot that is empty, and

then we can click on this dropdown here and we have all of the materials we just added

available to us.

So let's add color one and you'll see that we get the green, the light green material.

So now we can continue to add all of our materials.

So now we can continue to add all of our colors from this piece.

We can add them to this piece.

So let's add our slot, add a color two, add a slot, add color three, add a slot, and add color four.

All right, so now we just need to assign these pieces to their respective materials.

So let's grab every other piece on this mesh.

Let's assign that to color two.

Let's assign this main bit to color three.

And of course, just as we did before, we can add some edge loops.

You'll notice that for this piece, it is not allowing me to add edge loops in here

because I did not fix the issues with the geometry here.

So it's another reason why I came in and spent the time connecting these points to

get all quad faces here is that it allowed me to quickly add edge loops.

So we can do the same thing here.

Let's start in the middle and hit J.

Now, unfortunately, when I select these two and press J, it's seeing that they are connected

here and Blender just doesn't understand that I want to connect them up here as well.

So all we have to do is select this edge loop.

And let's count how many points we have along here.

We have one, two, three, four, five, six, seven, eight, nine, ten.

One, two, three, four, five, six, seven, eight, nine, ten.

Four, five, six, seven, eight, nine, ten, 11, 12, 13, 14, 15. Okay.

So we just need to subdivide this edge to have as many points as that go along here.

So let's hit the right click button and subdivide it.

Let's open the subdivide menu and click 15 in here.

So I believe, unless I miscounted, that these should line up now.

Again, just clicking and pressing J to join all of these.

Now we do have a triangle here at the very end. That's okay.

Just keep that in mind when you are creating your edge loops.

It will stop right here and you'll have to manually come in and fix any geometry issues.

Let's add in a loop here and a loop here.

And you'll see that, again, as I said, the loop stops right here because it has met a

triangular face.

So let's just grab this point and this point and join them manually using the J key. Great.

Let's assign all of these faces to our green color to give the illusion of thickness to this rind.

You can extrude this out a bit if you like.

Let's add one more edge loop.

And again, come in and just join up these points.

Oops, I just hit H there instead of J.

All right, let's select all these faces.

Again, Alt clicking and then holding Shift to finish my selection.

Let's select color 4 and hit assign.

So that looks pretty good.

The only thing that's missing is the little seeds here, which in this case, based on this

geometry, I would add in as separate objects and then merge them.

So the way I would do this would be to add a sphere.

And I'm just going to push this above so I can see what I'm doing here.

I'm going to tab into edit mode.

I'm going to scale this on the Y axis so it is thin.

I'm going to turn on proportional editing.

Again, you can also do that by hitting O on the keyboard.

And I'm just going to grab this top point and I'm going to hit 1 to come into front

orthographic, hit G and Z.

And then I'm going to scroll my mouse wheel up and down until I get roughly the shape that I want.

You can perform this operation several in several steps to refine this point here.

All right, that's a pretty good shape.

Let's fix the shading.

Just right clicking on it in object mode and hitting shade smooth.

Now, obviously, this is way too large, so we can just scale it down.

And now we need to add a new material to this piece.

So let's just come into the material properties tab, click new.

I think what were we on? Color five.

And you can name these whatever you like.

I just I don't have any particular names that I want to give them.

So all I need to do to make this black is to drag this value slider down.

Now, I wouldn't drag it all the way down to perfect black because most things in the real

world are not perfectly black and you will have issues lighting pieces if the values are too dark or too light.

And as a side note, when you add a new primitive in Blender, it comes in and you see the material

preview as white.

But this is actually not a perfect white.

And you can tell because if you come into the cube itself and add a new material, nothing

about the value of this has changed.

So if you come in and look at the actual color of it by clicking on this bar under base color,

you'll see that the value is at 0.08.

It is slightly under white.

And this is for the same reason you would not want it to be exactly black or exactly white.

They're just not realistic values and they will look strange when you try to light them.

So typically you don't have a white value over 0.8.

OK, so now we have our little seed here.

What I would do next is to come down and I would just place them on the surface.

To speed this up, we can enable surface snapping the same way we did for retopology.

I see some faceting issues here.

Let me just quickly fix that.

So let's enable surface snapping for this piece.

We're going to come in and turn on the magnet icon for snapping.

And now we need to click on the dropdown and change it from increment to face.

And let's also hit project individual elements.

So now when I move this, it should snap to the surface of this object.

So if we rotate this in the local Y direction, by hitting R and then double tapping Y, we can

move where the point of the seed is.

And now I would just come in here and start duplicating these, rotating each around at

the local Y, duplicating, rotating around the local Y, and then double tapping Y.

Maybe adding some variation in the scale so that they are not so uniform.

You'll have some are bigger, some are smaller, and all pointing in different directions.

So add as many as you like.

And now we just need to do the same to the other side.

So let's shift D, and you'll see that there's a moment where it snaps over to the

face over here.

And the same process, just shift D, move it, rotate it in its local Y by hitting R and

then pressing Y two times.

And adjust the scale so that they have some random variation.

Now the next step would be to merge all these together so that I can move this melon as one piece.

But before I do that, I actually want to use some of these seed objects over here.

So it is easier to duplicate and move them before they are merged.

So let's just shift D and move these over.

And now that I have one over here, I can box select over everything here, make my base

melon sphere object, the active selection, by holding shift and clicking on it.

And now I can join everything by pressing Control and J.

Let's rename this to melon.

So now we have a single melon object.

It has five materials on it with five different colors.

Let's just finish this out. Same process.

Let's shift D over to the other side here.

Come into right orthographic by hitting three, just to get this angle correct.

And same process here.

Just duplicating, moving, and rotating on its local Y, scaling for some variation, and

duplicating again.

Let's merge all of these objects together.

Let's box select over everything.

Let's hold shift and click on the slice to make that our active selection.

And let's join all these pieces together by hitting Control and J.

You can rename this something to slice.

And there you have it.

So that is how you can use different materials to color objects in Blender.

If you wanted, you could come in and, you know, change the roughness and metallic values

of these to see how it affects the piece.

I'm going to leave it maybe a little bit lower than 0.5.

So there you go.

And you'll notice that changing the values on any of these colors, these materials, will

change the value on both pieces at the same time because they are sharing materials. There you go.

It's a much more watermelon looking color anyway.

So that is it for using materials and material slots.

There are a lot, there is, however, a lot more to cover when it comes to materials and

textures, and we will be getting into that in the next video.

I'll see you then. Bye.

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
