# 075 — UV Unwrapping a Complex Object DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 17 — Basics: UVs |
| **Bài học** | UV Unwrapping a Complex Object DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 41m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **UV Unwrapping a Complex Object DEMO** trong pipeline của section.
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

Okay so here we are looking at an object we are about to UV unwrap. So I will

include this Blender file so you can follow along on this object itself or

you're welcome to use these principles to unwrap one of your own models as well.

So let's get started. Now there are a couple of general rules that we want to

follow when we think about unwrapping UVs for an object. So the first rule

that we want to follow is anywhere on our mesh that has an angle of 90 degrees

or sharper, so a right angle or sharper, we want this edge to be sharpened and we

also want to have a UV seam there. If you try to wrap a UV island around a

sharp edge like this you will just get some incorrect texture mapping results.

The second general rule of UV unwrapping is that if we need to place a

seam on something that is not a 90 degree angle, so like if I needed to

place a seam here, you know to break up this more round form, the best rule to

follow is to try to put it in a place that will not be readily visible to the

viewer. So trying to tuck things away underneath or behind things and in this

case I would probably put the seam on the inside of this handle piece because

it it will be more difficult to see the seam and the unfortunately this is just

one of the limitations to UV unwrapping is that oftentimes when you have a

texture here it will be a little bit apparent that there is a seam when the

texture is applied so you just want to do your best to hide them away. The next

rule that we're going to go over is that for hard surface objects especially we

want the seams to be as straight as possible so I will talk about it a

little bit when we get to it after we actually start marking seams on this

object but we're going to use again our text tools add-on we're going to use one

of these features called rectify to straighten our UV islands. And the last

rule for unwrapping the UVs of an object is that the UVs need to not overlap each

other and they need to be contained within 0 to 1 UV space. So what 0 to 1 UV

space refers to is just this space here as denoted by our checker grid or any

other texture you load in. So we just cannot have any UVs that are overlapping

each other or cutting out of this space because that will result in incorrect

texture mapping. So let's keep those rules in mind and let's get started

unwrapping this. So thinking about our first rule we want to look at every

angle that looks to be about 90 degrees or sharper. So looking at the bottom here

this this edge loop is definitely sharp. Let's mark it as a seam. This right here

is a 90 degree angle. Let's mark it at a seam. Same with this one, mark seam. Again

I'm just pressing alt and clicking to select the entire loop around the

entire can here.

So here's an example of an edge that is set up incorrectly because we have a 90

degree angle here but this edge is not marked as sharp so we're not, it is

trying to smooth over this part here. Now it doesn't necessarily look

incorrect but we might get some shading problems with the UVs if we leave it

like this. So to sharpen this edge, let's select the entire edge, right click, press

mark sharp. That will create this sharp edge here and it will mark it in blue

and if we need to delete our sharp edge we can right click and clear it to get

it back. But let's also keep our selection and mark this as a seam now.

Ok so that is a good start at least for this main sort of bucket portion. Let's

view the UVs for this. So to unwrap this we need to select the portion of the

mesh that we want to unwrap and then run the unwrap operation. So to select

everything that is linked to what I am currently hovering in the 3d viewport,

meaning everything that is part of this object and is connected by edges, I can

select it all by hovering it and pressing L on the keyboard. So all these

separate pieces, although they are part of the same object, they are not

connected to this main bucket cylinder, the cylindrical portion. So if I just

hover over that portion and press L, I have everything selected, everything that

is linked selected. So let's press U on our keyboard and select unwrap. So let's

also make sure we're in material preview mode because this looks alright but when

we look at it in material preview we're getting some major distortion still here

on our object. So this has to do with the fact that we have selected all of these

hard edges going up but we're not splitting this cylinder form apart in

any way. So we need to add a cut right here along this edge loop in order to

unwrap it into a flat surface. So let's right click and mark seam and now let's

select linked by pressing L on the keyboard and trying this unwrap

operation again. So now in the 3d viewport we're seeing a much nicer

representation of our checkerboard here. There are still some issues obviously

that we're seeing in the 3d viewport because I have not finished marking

seams around here and anywhere that you do not mark as a seam Blender will not

cut. So as you can imagine this interior shape all being one piece it's very hard

to flatten that out correctly. Let's mark this as a seam.

So I want to demonstrate one of the other rules now and that was about straightening

our UVs. So now that we have this seam running vertically along this piece we

can flatten these pieces out much better but as you can see they are not

actually aligned to our checkerboard grid. So the problem that can sometimes

happen with having things like this is when you are limited by the number

of pixels in your texture when edges are not aligned straight we can see this

sort of jagged these jagged diagonal edges which is called aliasing and it's

just a result of basically we're seeing the corners of pixels being drawn as a

sort of jagged diagonal line. So in order to prevent this we need to straighten our

UV islands. So let's come up here and select this icon which denotes island UV

selection mode. So now when I click on any of these it will select the entire

island. So let's just select this one which has a slight curve here at the

bottom because it is the portion that wraps around the outside of this

cylindrical object. So with the text tools add-on all we have to do to

straighten this out is to select the island and press rectify and you'll see

that now we have nice square edges which will not cause any aliasing issues on

these UV islands. So let's do these for a few more of these. We cannot use

rectify on a circular piece obviously but we can use it on pieces like this

because although this is appears circular in our UV editor it actually is

one of these edges here I believe it's this one which we know is split by this

seam here. So if we highlight this island in the UV editor and press

rectify it will straighten out that entire set of faces. So we can do it with

all of these here and I believe this is the very bottom of our can which is a

circular sort of end gone here so let's leave this one as is. So now let's think

about one of the other rules for UV editing that I mentioned which was

keeping these islands contained within the 0 to 1 space and if you're wondering

why it's called 0 to 1 space it is has to do again with Cartesian coordinates.

If you take this point here to be the center of your grid imagine there is a

number line going this way representing the x-axis and a number line going this

way representing the y. This would be in the positive the first quadrant which

denotes positive numbers for both x and y so this point here would represent 0

on the graph this point would represent 1 this point would represent 1 in the x I

should say this point would represent 1 in the y and this point would represent

1 in both so this space this square is called 0 to 1 space. Now you can

technically have UVs outside of 0 to 1 space as you see that I move this

island into negative space it is still rendering our checkerboard pattern here

but actually is rendering based on tiling this image so you'll remember in

a previous video we viewed how this is being tiled by coming into the end panel

coming into the view tab and enabling repeat image. Now it is more apparent

what is happening when you look at this with non tiling textures but just know

that this texture is being infinitely tiled in all directions so when you

place an island outside of 0 to 1 space you're actually what I'm doing by

placing it here is it's rendering this bit right here because this is the part

that would be here if this texture were repeating. I hope that makes sense I

think it will make more sense as we start talking more about unique

textures and hand-painted textures and things like that I think that will

become more apparent. So again I have this island here that is clipping down

into a negative UV space but what it is doing is repeating the texture from up

here above it but I don't want to do that necessarily because that if this

I'm going to hand paint this or make this any sort of unique texture this

will cause issues. So let's just arrange these so that they are contained within

this 0 to 1 space. Remembering that we cannot have any overlaps so having

something like this will cause incorrect mapping and shading errors as

well. We need them to be non-overlapping and preferably spaced a few pixels apart.

They don't have to be very widely spaced but having a few pixels of buffer zone

between these islands will eliminate things like bleed so if I had one color

on one section of this and another color on another section if these are packed

too closely together you know one of those colors could bleed over onto the

other and you would see it on your 3d model and it would be incorrectly mapped

and shaded. Okay so let's continue with this UV unwrap process. I come into the

handle and as we discussed before I'm going to mark it on the inside because I

don't really have a lot of hard angles here to help me select where to place

these UVs but I do want it hidden so I'm going to place it on the inside

because I think that is less visible than the outside. I'm going to right

click and press mark seam. Now we do have some sharp angles such as right here

forming the end caps so let's just make sure those are both marked sharp and

marked as seams. Okay let's look at these little bolt pieces. So we do have

interior faces here because we are looking at the inside or we can see into

the inside of this piece. So we do need these faces in the back to remain there

but let's grab these end caps. Again I'm just pressing alt and shift and then

clicking to select these edge loops. Right click, mark seam. Now we're going to

get the same issues we got with this main piece on these small bolt pieces

because these are cylinders too so if we don't mark one of these edges along here

we're going to get some they're going to end up being circular and they're not

going to be flattened all the way. So let's take these ones on the bottom here

again I'm holding alt while doing this to make sure it's selecting all the way

through. So once we have those selected mark seam and same thing up here let's

select the end caps with alt and shift and with alt and shift select these edge

loops in the bottom here. And let's right click and mark seam. Okay so now

let's look at these UVs because we haven't actually updated them at all

here. So let's hover and press L and if we hover over a new piece and press L

again it will add that linked portion to our selection. So I have just

highlighted everything that I have just added UVs to. Let's press U and hit

unwrap. Okay so ever all these checkers look nice and straight however they are

not the same size as the checkers right here and we do need them to be the same

size. I'm going to talk more in depth about this concept in a future video but

let's just come in let's select this piece in the UV image editor press text

tools and come down and run rectify and I'm just checking here that that didn't

cause too much distortion. These still look relatively straight so I'm going to

leave it but what we do need to do is we need to scale all these islands so that

they match the resolution here. So I'm going to just in the UV image editor

press S and looking at my 3d viewport but performing this operation in the 2d

viewport and press S and just scale it so that it is roughly the same. Again I'm

going to talk more in depth about why this is necessary in the next video but

now just try to match it as close as you can by eye. All right so this handle is

actually constructed more or less the same as this one here so let's just

click off of our model to drop our selection and let's come in here and

start marking the similar edges that we marked for this portion. So I just alt

click right click mark seam and then we have a beveled edge here so it is not

actually 90 degrees but I do still want a seam here because I think it will

cause less distortion if I have this seam in place. These bolts here are the

same as these ones here so let's just go in and mark the same areas.

Again we have a beveled edge here so neither this edge loop nor this edge

loop is actually 90 degrees but they are sharp edges so let's mark this piece

here and this one is a 90 degree edge on the bottom so let's definitely mark

that one. All right let's go into wireframe view so I'm trying to locate

these edges here which I have done and just alt and clicking to select those

edge loops let's mark those as seams. Now this has some sort of strange

topology going on not worried too much about that right now because we're just

focused on unwrapping this. So it did not select my edge loops all the way through

but that's no problem all I have to do is come in and shift and click to

manually select all those edges and then mark them as seams. Same thing on the

other side. Be careful not to select through the mesh you just kind of have

to be careful there's no real trick for it. Select all these edges manually just

by holding shift right click mark seam and make sure you get these corners in

here as well. Okay let's return to material preview mode to select this

piece that we just added seams to. So yes with the current UVs obviously we're

getting some really wild things going on but all I have to do is press U unwrap

there we go. Again the scale of these is off I can either select all these and

manually scale it or we can wait until we have added seams to the entire piece

and then we can run an unwrap operation on this entire thing. Either way is

totally fine and it's just a preference in workflow. So I have another cylindrical

piece here this one does not have end caps it doesn't look like although it is

slightly off. So let's just move this in so we don't see that gap. So yes this

piece does not have end caps so anything that is an open edge like this we don't

need to worry about marking it as a seam because there's nothing to cut it away

from. So open wire edges like this act as natural seams in Blender. So let's just

select this bottom edge here again I'm selecting the bottom edge because I want

to hide away the seams as much as I can especially on round more rounded smoother

forms. So let's right-click mark that as a seam. Now let's go into wireframe view

so it does not appear this this does have an end cap right here and you can

delete it if you like because it is an interior face or you can leave it and

just make sure that you mark this edge as a seam if you leave it. Typically you

don't want to have interior faces like this that you will never see because all

they will do is take up space on your your UV texture and which causes all the

other islands around it to have to be smaller which means you get less

resolution because of a face that you're never going to see. So it is best

practice to just delete these faces. Okay so I think for this cylindrical

sort of nozzle piece I'm actually going to put the seam up at the top just

because of the angle of this I think it is going to be less noticeable here than

it is here but that is totally up to you and you can I encourage you to

experiment with trying out different seams in different places as long as

you're following rules that you know you must follow such as the 90 degree rule

everything else is kind of up for experimentation. So I'm going to mark

right here is the seam right here and I actually don't want this circular part

to be cut I want to maintain this sort of set of faces here. I'm just going to

select this seam and clear it with clear seam right click but I do want a seam

going around this bit here. So I cannot use the loop select tool because of

these interior faces these are not quad faces so we cannot select it as a loop

but what we can do is ctrl and click to use the shortest path select and now we

can mark seams. So this model does have like a few topology issues that are

quite minor honestly like we have a lot of n-gons and things if you want to come

in and clean them up by joining these faces you certainly can but again this

demonstration is about the UVs not the modeling so we'll just ignore that for

now. So we have 90 degree angles around these circular edges and the interior

circular edges so we need to mark all of those as seams as well. So select all

the way around mark and I'm going to select this one down here and mark and

now we have another cylindrical form here so I do suggest adding one seam

along it so that we can better roll this out flat. And we're just going to repeat the process.

Now you'll notice that because I am so zoomed in on this mesh my camera is

actually clipping inside of it a little bit. I mean that can be useful at times

because I can get access to things in here but if you want to prevent this

from happening you can do so by in the 3d viewport press N to bring up the side

panel. Let's go into view and at this for this value where it says clip start

0.01 just slide it all the way down as far as it'll go which is 0.001

meters in this case and that will prevent your camera from clipping in at

you can zoom in farther without it clipping into the mesh I should say. Now

that may cause some issues when you're very zoomed out so if you zoom out very

far and you're noticing some like flickering and things just you can put

this back up to 0.01.

Looks like we already have a seam right here I'll just leave that.

Just holding shift and clicking there because to deselect.

Just a few more. We have sort of a incorrectly sharp marked edge here now

it's not causing any problems but just for the sake of cleanliness on this

model I'm going to clear this sharp here so we get rid of that blue marking

because it's entirely flat between these two faces it's not causing any problems

but if this were a different model it might. Oops, too much seam. Okay just a

couple more over here. Okay so I think that is everything. Let's go into

material preview mode. So as I mentioned you can either unwrap these as you go

and scale them or once you have added seams to the entire object you can just

select everything with A and unwrap using U. Failed to solve. We are missing a

seam somewhere. We're missing one right here. Looks like we just forgot to do

this other side. Let me check the seams on this one. So I used the interior edge loop

here so just for the sake of consistency I'm going to try to mark edges for edges

that are mirrored I'm going to try to mark the mirrors as seams in the same

place. So now select everything with A, U, unwrap. Okay no errors came that time and

this is our result. So again let's go into material preview and now if we take

a closer look at the 3d model everything looks nice and even we have a nice

checkerboard pattern over this entire piece. We can see our seam lines here but

there are certain things we can do within our texture to sort of mitigate

that and everything is also fairly equal in scale because we unwrapped the

entire thing at once. So if you unwrap portions of your mesh it will unwrap

them as large as it feasibly can while fitting into the 0 to 1 space. So if you

do portions at a time you may end up with pieces that are not scaled

correctly but if you do the entire thing at once it should scale as evenly as it

can. Now the only thing is to take into account with this is that every time you

run your unwrap operation on your pieces if you have straightened or rectified

any of these pieces it will erase that. So it has re-unwrapped this main portion

that goes around this piece right here and we can see that that curvature that

we had is back. So make sure that you do the rectify either at the end or if you

are running multiple unwraps that you do not select the areas that you have

already rectified. Rectify can also work on multiple islands individually so I

can multi-select here and press rectify and it will solve for all of those. I do

find that it's more accurate and it maintains more of the shape if you do it

one at a time but technically you do not have to. So let's say I have well not

let's say I do have all these pieces now but some of them have been shifted

around we now have portions that are overlapping which we know that we can't

have. We have portions going outside of the 0 to 1 space which we cannot have so

I could come in and manually move these pieces but there is a faster way to get

all of these pieces into the 0 to 1 space with no overlaps and that is by

running the pack islands operation. So let's select everything in our UV map

here come up to the UV menu and come down here and select pack islands. Now

this will scale and rotate your islands but it will not break any islands that

you have used the rectify tool on. So these islands are still straightened

but we have just packed them in 0 to 1 space with no overlaps. Now there's a

couple options for the pack islands operation. Let's open this pop-up menu

here. So this UDIM stuff is a little bit more advanced so I'm going to ignore it

for now but these two other options are worth knowing. If you have everything

rotated a certain way and you want to pack them pack your islands into you to

0 to 1 space without blender automatically trying to rotate them to

fit you can disable the rotate bubble here so now everything is packed with

your rotation that it originally had. The other setting worth noting here is the

margin and that is how much space should blender leave between islands. It

defaults to a very very low value 0.0001. I recommend upping it a little bit

just because depending on the resolution of the textures you're going to put on

this there may be some bleed over if you're working with lower resolution

textures. So let's put it up to 0.01. Now this will cause your islands to be

scaled in order to fit those things as best as blender can which is not always

accurate. You see we have a lot of wasted space up here and that's another good

thing to mention about UVs is that when you are unwrapping an object like this

something that is going to have a unique texture we want to maximize the amount

of space we're using here because essentially here we have a 2048 by 2048

texture but only the parts of it that have UV islands over it are actually

going to be used or displayed here. So really we're using a lot fewer pixels

here than we have available to us and it's just a waste of space and it's a

waste of resolution and it's a waste of computer memory. So best practices is for

any unique object you want to use at least 75% of the space available to you.

Now your ability to do that will depend somewhat on the complexity of your model

the complexity of your seams the complexity of your UV islands and the

shape of them but you generally want to have your islands as large as you

possibly can while still fitting onto this texture. So I've just changed my

pivot here we can change it to the 2d cursor which is this icon right here

looks the same as the 3d cursor but again we are in 2d space here so I've

just changed my transform pivot same way we do it here in the 3d viewport it's

just for the 2d viewport I've changed it to the 2d cursor because I want to scale

up and away from this. Let's scale this up to about here and now let's start

moving around our islands that are overlapping I'm gonna move them away

from each other looks like we have some curve on this one maybe this one didn't

get solved for in the rectify so let's just quickly rectify that one. This is

another good reason that you want to rectify or square off all of your

islands that can be is that it allows you to maximize the resolution of the

texture on your object because you can pack these islands tighter together so

that you're utilizing more of this 2d space. I'm going to change the transform pivot

back to median point going to rotate these now the rotation of your islands

should not matter too much unless you are using a texture that has

directionality to it so like for instance if we were using that brick

texture that sort of goes horizontally across I would have to lay out my UVs in

such a way that would match with that brick texture however we do not have a

texture on this object yet we are just laying out the UVs so by doing the UV

checker method we can lay out these UVs in a way that is optimizing our

resolution and then if we create the texture after that we can take we can

create a texture in such a way that it respects these rotations and it still

appears correctly on our object even if the rotations are not what you would

expect in your 2d view. Okay so let's continue here I'm just grabbing these

areas that have overlaps

and it looks like I had proportional editing turned on which in this case did

not matter because I was selecting the entire island but just know that

proportional editing works in 2d as well as 3d mode

and all I'm doing is clicking and pressing G obviously to use the grab

tool and just quickly trying to line these up in a way that they're not

overlapping with one another. So here we go we have the same exact UVs nothing

has changed about them all I've done is scaled them up and laid them out a

little bit better for this object. So now we have our UVs laid out we could

take this into a texturing program or texture it within blender to add a

texture to it to finish up the materials for this object but that is how you lay

out UVs for a hard surface object and I will see you in the next video.

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
