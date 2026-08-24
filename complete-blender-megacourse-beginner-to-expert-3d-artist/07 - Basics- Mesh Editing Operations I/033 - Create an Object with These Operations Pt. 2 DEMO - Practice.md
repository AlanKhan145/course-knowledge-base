# 033 — Create an Object with These Operations Pt. 2 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Create an Object with These Operations Pt. 2 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 19:17 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Create an Object with These Operations Pt. 2 DEMO** trong pipeline của section.
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


Okay, hope y'all took a little break. Got some coffee. Let's jump back in and finish

out this little room. Now I'm going to be moving a little bit more quickly through some

of this because I don't want this down to drag on too long. And again, this is or should

be all review from our previous from our previous lecture style videos. But it's it's important

that you get the practice in order to really memorize these functions and what they do.

So I'm just going to come up here, change this back to median, because you'll see that

when I tried to rotate this by pressing RZ 90, it's rotating along the individual. That's

just because we had it set for that before. Let's just change it back to median. And just

come in here and line this up as best we can. A little bit misaligned here. So just

come in and fine tune it as much as you need. All right, now we have our doors in. Let's

do I mean, these doors are pretty simple. Obviously, you could add, you know, loop cuts

and bevels and things like that. I'd add a loop cut, I can add a bevel, Ctrl B, I can

extrude this in, you know, to give it more sort of detail. But we're just keep these

simple for now. All right. I'm going to clear the rotation on this. Just for the purposes

of modeling the window that's going to go in it, and then we're going to put it back.

Also going to clear the location. So it's just at the center of the world. So now when

we press backslash on our keyboard, it's just at the center of the world, which just makes

it a little bit easier for modeling, especially if you're new to it. And you don't have to

worry about like, okay, which way am I facing? If I want to make it wider, you know, normally

that scaling along the X, but since it's rotated, funny, you have to scale it along

a different axis. So it's just, it's just easier sometimes. All right. We're going to

do a plane for like the glass part of this. Which again, it's just going to appear solid,

but in future videos, we'll get into how to make things look a certain way on their surface.

So basically we'll get into how to make these not just flat gray anymore, but that's going

to be in a future video. For now, we're just sticking with the modeling portion.

I'm just going to set it right now. It's flush with this wall, so I'm just going to

set it in a little bit. Cool. Now let's make, uh, quickly make a frame in the same way

we made the door frame. I'm just going to add a new cube. Turn off snapping for this

because I'm not getting enough control at the moment. And again, you'll see that these

aren't perfectly aligned. You'll see that this is sort of the wall line here and the

plane that I just added is right there, but it's all kind of going to be covered up in

this scene. So I think it's going to be fine. Let's just make this top one. Oh, I see what I've

done here. Okay. No worries. I just got a little turned around there, which happens even if you've

been using Blender for some time, you can still get a little turned around when you're hitting

buttons really fast. Okay. So let's put that about halfway. Tabbing into edit mode, just grab

it, lining it up roughly with this line. Now it appears to be, actually, this is a little thick

because I remember our door frame was about 10 centimeters and this is looking more like 12,

almost 13. So again, this is not sort of the purpose of this room. The scene is not for,

you know, an architecture like visualization. So I'm not being very exact with these measurements,

but you can be as exact as you like. Extruding and just pressing E to extrude again,

X to lock the scale. Oh, and see, I've already made a mistake here. So let's quickly hide this

so you can see the mistake I made. So while I was extruding it, I didn't make my selection

properly and I ended up only extruding these edges and not this whole face, but we don't have

to undo. I mean, you can undo it and redo it, but we don't have to because we know how to fix

holes in our mesh. So I've just deleted this interior face because it's not necessary.

So I'm going to select this edge and press F, F, F, F, and just fill it just to fix that up.

All right. I believe that happened. I think I was just in edge select mode

instead of face select when I made my box selection and that's why it only extruded those

edges. Cool. So we didn't run into this issue with the door because the door didn't have a

bottom side like the way the window does, but we want to join these two together because right now

we can line them up, but they're still separate. So like when we move this around,

um, so the way that I'm going to do this is by adding a loop cut and then merging some of the

vertices. This is a good way to review our merge functions. So let's add a loop cut along this

edge, just control R and line it up. And again,

close as you can get it, but we can always fix it if it's not aligned well later.

So we also don't want these two faces cause they're going to be on the inside of the mesh

and there's just no reason for them to be there. And the more faces your mesh has,

the harder of a time your computer will have, you know, running blender with a nice frame rate and

rendering these things. So you don't really want to leave things like interior faces because

all they're doing is sucking up performance, which is generally not good. So now let's

merge some of these. Now, these are not close enough together to merge by distance unless we

mess with the merge distance slider. So I'm just going to do this by hand. I'm going to box select

M and press at center. Now, another quick trick I don't think I've discussed yet in blender is that

once you perform an operation, it is obviously saved in memory because we can press control Z

and undo it, but blender also has a repeat function. So I don't have to select press M

and then say at center again, if I have just done it and I just want to repeat it around,

all I have to do is make another selection and press shift R to repeat the selection

or the operation I should say. Okay. So now these are all joined and this is one solid object.

So H, here we go. I'm going to shift select all these objects I'm currently working on

and press backslash to move it into local view. So local view will focus your selection

on whatever is highlighted, even if that is more than one object. I think

for this, I'm going to move it into the center and then I'm just going to scale it along the Y

to make it protrude from the wall a little bit. So it's going all the way through my window,

which is probably not very realistic necessarily, but

in a lot of windows and modern places don't even have this side bit. They just have a piece at the

bottom and a piece at the top. So it's up to you how you want to design it though.

So I'm having some problems scaling this appropriately because my pivot is in the

wrong spot for it. So I'm just going to move the pivot, make a selection, shift S,

snap it, tab back into edit mode, set origin to 3D cursor.

And I'm going over these pretty fast, but again, this should all be Rubio.

Okay. So that looks a little bit cleaner now that it's going all the way through the wall.

I'm just snapping these objects around to try to line them up a little bit more accurately.

And you'll see me use a variety of techniques. Sometimes I'll scale something,

sometimes I'll tab into edit mode and grab the verts and move them.

Um, it's largely just about how you like to work, but I also just want to make sure that I'm still

showing you how you can layer all of these methods on top of each other basically to create the shape

you want. And as I've mentioned before, there is no right way to model an object. I mean,

there might be a wrong way in the sense that if you have like a lot of interior faces or geometry

that's wasting performance, you could argue that that's the wrong way to model something,

but there is no right way necessarily. Okay. It's pretty simplistic, a little cartoony even,

but that's okay. Let's make this all one object by clicking all the objects on it,

making sure that the wall piece isn't selected because I do want that separate.

You could join it if you like, but I like to keep a certain amount of things separate just for ease

of moving things around, you know, especially if you're not working with

any sort of concrete plans or reference. It just keeps things a little bit looser so that

you can move things around if you feel the need to later. Okay.

We did some stairs in the extrusion exercise, and I think I want maybe like a staircase

going up here just to give the impression that there's more to this.

I'm going to come into local view just so there's not a bunch of stuff on my screen,

making it hard to see what I'm doing.

Now, I'm going to not be probably the most exact with this because

I kind of just need to feel it out to see how it's going to work in this space.

It's probably like a step. Let's tab or slash back into not local view.

Just to get a sense for the scale.

So I have a step.

I probably want it to line up with this corner.

Realistically, if you had a staircase, it would probably be something like that.

Okay, this is 1, 2, 3, 4, 5. So it's 50 centimeters this way.

So let's extrude 1, 2, 3, 4, 5, and then it's two of these grids up. Extrude two up.

And these steps might be a little high, but again, this is just a demonstration.

You can spend however long you need to getting these to be the right

width and height and things like that.

Okay, let's see how that's looking. Yeah, this was probably would be steeper if this was like

the interior of a house. So rather than grabbing all these edges and moving them, I'm going to tab

out. I'm going to scale it along the Y just a little bit. Okay, so that has sort of messed up

how we were measuring it.1, 2, 3, and some change.

But we can get it close enough where you won't necessarily notice it.

So that was three. I'm zooming in a little bit to get the sort of...

So because this is about 1, 2, 3, and then maybe like a half-ish, I'm zooming out until these are

the smallest grid lines I can see. So that's what it's snapping to. So that when I grab it and

extrude it, it just snaps to it easily. And then I'm zooming in to get finer grid lines

and then pulling it out a bit. And again, I'm not really measuring this exactly,

I'm just eyeballing it.2, 3, zoom in a little bit, move it a little bit more.

Actually, I'm thinking about... maybe it would be cool if we pulled this out and made it a landing

and then had the stairs like switch directions up here. That might be interesting.

Let's see if we can do it. So all I've done is that last step I made, instead of

leaving it where it was and extruding from it, I just dragged it out to be wide, to be like a

landing. So now, because I'm switching directions, it's going to be like 1, 2, 3,

wide, and then we're going to zoom in and give it a little bit more.

And it looks approximately correct. So now we just need to extrude from this top one,

about 2, and continue moving up.

So

like maybe one more step to make it

um sort of exceed this ceiling line and we'll be good.

I kind of want this to line up just because of who I am as a person. I don't know.

So I'm just going to shift these stairs over a little bit because they weren't

very exact to begin with. I'm not too worried about messing it up.

Again if you were using this for like architecture planning you would want to be more exact.

That is a decent starting point for your staircase and we even have this cool little landing with it.

I'm just going to try the quick- I'm going to pause the recording really quick.

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
