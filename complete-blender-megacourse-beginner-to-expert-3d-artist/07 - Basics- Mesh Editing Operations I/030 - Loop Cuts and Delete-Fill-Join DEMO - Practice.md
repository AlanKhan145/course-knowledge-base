# 030 — Loop Cuts and Delete/Fill/Join DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 07 — Basics: Mesh Editing Operations I |
| **Bài học** | Loop Cuts and Delete/Fill/Join DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 12:14 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Loop Cuts and Delete/Fill/Join DEMO** trong pipeline của section.
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


All right so let's just do a quick demo of using the delete, fill, join as well

as the loop cut and slide operations we just went over. So here I have the

staircase that we made for the extrusion demo and I want to use the tools we just

went over to change the look of this a little bit. So we have like our basic

steps but if you wanted this to be a floating staircase, which what I mean by

that is this sort of these open ones so they just have steps there's no risers

and you can see through them, so that is a floating staircase. So let's change our

staircase into a floating staircase using the things we just went over.

So I'm going to press 3 to go into right orthographic view. I'm going to hold Z and select wireframe

because what I want to do

essentially is keep these top steps and remove everything under them. So to do

that I'm just going to go into the right orthographic into wireframe so I can

selecting through the mesh so everything that is lined up with this view. So I'm

going to drag out a box selection in face select mode and we're just going to

start deleting some of these faces. Box select, press X, delete the faces, X, delete

faces. We're just going to do that all the way down.

Okay so that leaves me with this. Now we have some problems here in that when we

deleted those faces these now are sort of open and have holes in them so we're

going to use our fill operation to fill these holes back up. So start at either end,

doesn't matter, we're just going to start selecting some of these faces and the

nice thing about these is since they're quadrilateral and the vertices are all

lined up the fill tool should be able to detect them not quite as an edge loop

but it should be able to detect how to fill these by just selecting a single

edge and pressing F. F, F, F, all the way through to the top. So now we have all those holes

filled up but for a floating staircase these steps need to be separated from

each other. Right now they're connected so if I were to move any of these, turn

off snapping, and move any of these you can see that the problem that's going to

come with it. So we need to separate these from each other a little bit so

let's do this with loop cuts. Now keep in mind there is no one set way to build

any object in Blender so although I'm showing you how to do it this way this

by no means means that this is the only way to model a staircase. It's just kind

of about finding what tools and what workflows work for you and then using

them to your advantage. So we have five grid lines up approximately and we can

turn on snapping again to make this exact if we want to. So just making sure

that we are zoomed in far enough to see these grid lines because if we zoom out

these grid lines get cold essentially, they're not being rendered on the screen

and now when I add a loop it just won't snap properly. Plus we can't

really see where we're adding it. So we're just adding loops by pressing

CTRL and R, adding the cut across this edge and scooting it down so that just the

bottoms are going to be affected by the next operation that we do. And I'm

probably not getting the width of these exact to each other. You can spend a

little bit more time on this if you want and get them very exact but this

is just a demonstration and a pretty quick one. Just CTRL R, click, shift down

you'll see that the snapping works with extrude, it also works with loop cuts.

You'll notice that when you have snapping turned on and you go into

edge slide mode it will snap as well. So now I have this extra

information basically on all these steps. So what I'm going to do now is select

this face loop that I just created and I'm going to delete them so that there's a

little bit more space in between these guys on the vertical.

And you may be asking why did we bother to fill all these faces when I'm just

going to end up deleting them again and that was because the way that our

geometry was left after we deleted all the faces down here wouldn't make it so

I would not be able to select these loops all the way around or place these

loops very nicely. So it's a little bit of an extra step but it's usually worth

it. We're going to leave this last one. Actually no, we're not going to leave this last one. We're

going to delete that one too.

I have a reference image on another screen that I'm looking at just to make

sure I'm making these somewhat correctly. So now let's delete all the faces

pressing X, deleting the faces. We can delete these ones too. Again we just filled those in so that

we could make those loops that I just made and make the selections

properly. So you may want to adjust the spacing of some of these. I'm not going

to do that because all that is is transforming selections which we've gone

over extensively at this point. So I'm not going to do it here in the demo but

tweak the spacing and the size and the placement of these as much as you like.

We're just going to fill these faces back in.

So I'm just going to scale this along the Y just because these steps look a little wide and the

slope doesn't look quite as steep as it should be.

So you know these will give you your floating steps and of course you would

need to add the middle railing support and railings which we can do.

I'm actually going to delete what I just did because I noticed that I didn't tab

out of edit mode so when I tab out of this, this will be one object which is

fine but it's just going to change the way we are able to rotate this cube.

If I was to leave it in edit mode, because I'm going to rotate this, if I rotate this in edit mode

you'll notice that it doesn't affect the rotation of the object at all on a

global scale so I believe when I hit yes so when I hit if I want to make this

longer by scaling it along its local axis the way we've been doing that

which would be scale Y Y you'll see that it doesn't work because this scale

operation is looking at the entire objects local rotation which is not

changed because I made all these edits in edit mode. So I'm going to get rid of

this. Everything is selected on this object which we went over briefly in

another demo but to select a whole connected pieces but not the pieces that

are not connected to each other you just make a selection of either a vertex, an

edge, or a face in that mode and press L to select linked. And we're going to delete the

faces. I'm going to tab out of edit mode and I'm going to add a cube now in object mode so

now when we scale it, move it, now when we rotate it we can hit scale Y

except that it's scales easy and now we can make it elongated the way we want it to.

Still has snapping on which you don't need to leave on for this if you find that it's

hindering your ability to create this. So looking at my picture it looks like the

support beam just sort of comes to a flat angle with the ground. So I'm going to rotate it so it's

just about flush and I can hit scale Z zero to make sure it is exactly flush and now we can

scale it to fix this width issue that is created by the rotation. And again you

can spend you know a ton of time on something like this and getting it

really exact and really perfect and everything looking good but this is just

a demonstration we're going kind of quick would be something about like

that and then you would have floor connected here obviously so you wouldn't

see this overshoot. In fact you'd probably even have it come out under the

floor and not be attached but it depends on what you're doing.

That is pretty good.

Right so that concludes the quick demo on just a more practical use case for

deleting, filling, and using loop cuts in an object. So in the next video we're

going to go over a few more operations bevel and inset before we do a larger

demo with those tools and using those tools along with what we've learned so

far to create more intricate objects and scenes. But that will conclude the

demo for now and I'll see you in the next video.

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
