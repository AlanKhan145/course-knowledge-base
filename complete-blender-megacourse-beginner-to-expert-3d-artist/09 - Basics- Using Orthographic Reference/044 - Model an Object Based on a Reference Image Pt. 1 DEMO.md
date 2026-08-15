# 044 — Model an Object Based on a Reference Image Pt. 1 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 09 — Basics: Using Orthographic Reference |
| **Bài học** | Model an Object Based on a Reference Image Pt. 1 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 21:21 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Model an Object Based on a Reference Image Pt. 1 DEMO** trong pipeline của section.
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


Okay, so now that we have our reference images all set up and aligned with the proper viewpoints,

let's get started modeling this character. And actually, first, I'm going to just grab this so

that his feet are on the ground plane here. And I'm going to do the same thing for the side view.

Now, as far as aligning these with an axis, the front is good to go. It is set up with this blue

z-axis right down the center. The drawing itself is not perfectly symmetrical, so you'll see things

like these buttons aren't aligned. But for the general shape, you know, it's coming through the

center point on his head and coming down through the center point of his body. So let's just make

sure that we have our side view aligned the way we want it as well. And I'm actually going to

bring this forward a little bit so that this z-axis line lines up with this kind of point,

slight point that forms on his head. Okay, so the way I would proceed with a model from this point

I mean, we already have all the skills. So first, we need a primitive mesh to work off of. And you

may be thinking you want to work with a sphere based on some of these shapes. And you definitely

can do that. But for something like this, I am actually going to work starting from a cube. So

let's add a new cube in and tab into edit mode. And I'm just going to bring this up in wireframe

view so I can see the image behind it. I'm going to bring this up and I'm going to scale it. Oh,

I don't know. About there. So that the sides of this cube here are roughly aligned with the sides

of my drawing at the widest point on the torso. So this character is symmetrical, like most

characters. So let's just set up a mirror modifier right now to make this process go faster. So I

just hit Ctrl R to add a loop cut, double clicked to leave it right in the center. And now I'm going

to select the left half of the mesh, delete the vertices. And I'm going to come into the

modifiers property panel, add a modifier, add a mirror modifier. And for now, let's turn on

clipping. We'll need to disable it for the legs, but for now, let's just leave it on. So now it's

just a matter of adding more points in this and shaping it to match the contours of these lines.

So let's get started with that. So I'm just going to grab this lower point right here,

G Z, push it up. And for this, I'm going to extrude the legs out. So let's just get this

cube to match the contours of the torso first. Okay. So let's bring this point in a little bit.

And we're not getting the roundness we need here. It's just going straight. So let's add a loop cut,

grab this point. And I'm box selecting because I want this to be even. We're a little bit large

in the Y, so let's scale this down the Y. About there. Actually, we can make this even more exact

in the Y if we go into the side view. So now you'll see why these orthographic views being

lined up is really nice, because we have it, it's very flat in the front, which is not the shape of

the final character. So if we press three coming into right orthographic, now we can just line

these points up with the side views. Bring that forward. And it takes a bit of practice in order

to be able to understand what's going on with a mesh like this. You can always make these internal

lines flat if you want, if it helps. So you could select this whole loop, S, Z, and zero would make

it completely flat so that when you come into side view, it's just a little bit easier to see what

you're doing. But it depends on sort of the contours you want. So we have a very rough shape

for this piece here. Let's actually, yeah, let's bring this up and make it flat, just for ease of

visualizing what we're doing at this early stage. And we can put in our angles and things a little

bit later. So we need some more detail here. Let's add another loop, make it flat. And from here,

it's really just about adding loops, extruding parts, and then just moving the vertices around

until it's roughly the shape you want it to be. So we can come in here, bring it in. Just hitting

R to repeat the last operation I performed, which was the scale, Z, then zero. All right.

So we have clipping on, so I can pretty freely transform these and it will remain snapped to

the center. Let's extrude these faces up. And let's extrude these arms out to about the wrist,

scale it down. And then same thing, just add edge loops, scale them, move them,

rotate them as needed for your reference.

So we have our arms sort of scaled out properly here. We can check it against this piece. Now,

I said we may need to move this around a little bit, and we do. So let's just move this image.

And now we can start grabbing these pieces from the top. And all I'm doing is box selecting,

pressing G, and moving them in orthographic mode. Nothing fancy. And it's just a matter

of patience, really. Let's make these much thinner here. Okay. I actually

need, and this is why it's important to have multiple sides, because it can look really

good on one side, and then you look at it in perspective mode, and it is totally off.

So we need this face to come out to here, actually. About, thereabouts. You can probably

bring this up to be flat. And don't forget to be checking these things constantly in perspective

mode as well. It's very easy to get sort of lost with orthographic mode, and kind of lose the big

picture of the piece. But always be checking it in perspective mode. Obviously, it's quite blocky

right now, but we're going to fix that. We just want to keep the number of vertices in this as

low as we can until we have something closer to a shape that is the final shape. Because the fewer

vertices that you have to work with, generally the easier it goes. So now I want to extrude

these legs. I need to turn off clipping so that I can make this separation for the gap here. E to

extrude them. And then just grabbing the points and lining them up. I'm not being too exact on

this silhouette line, because we just don't have enough vertices at this point to make it very

exact. But we're going to keep adding to it. So we'll get there. It's best to get the rough form

in first, and then slowly add layers of detail. So now we need to extrude for the head. So let's

turn clipping back on. And let's make sure we have this face selected. Now there are some things to

note about the way that you model for characters. So this is interesting. So I have clipping on,

but you'll see that these are still creating a hole in this mesh. It's because this point was

not close enough to this point to have been merged. So we have a funny face in here. Delete

that. So all we have to do is with clipping on, select these points that have been ripped, hit G

and X and bring them in. And once they hit the point where you can no longer move them across

to this side, confirm. And then now when you hit G and X, you will not be able to pull that apart.

All right. So there are certain things to note when modeling things like characters. If you plan

to animate them in any way, the topology needs to be done in such a way that when you deform this

for animations, you will not get strange angles and artifacts. But that is probably a topic best

covered in a dedicated character course. So I am trying to keep the topology as clean as I can here,

but I am not a character modeler by trade, and I do not plan to animate this mesh. So I'm not

going to be as concerned with things like good animation topology. Okay, let's fix some of these

points. Just periodically checking it in perspective mode to make sure that I am moving things the way

I think that I am, or should be. So this point needs to come further back. I probably need to

add an edge loop right in here as well. Again, staying very blocky with these forms in these

early stages. I'm just blocking out where the arms, the legs, the head should all be,

before I concern myself too much with matching details or anything like that.

Okay, let's look at our mesh. Head is still kind of a funky shape, and it's up to you as the 3D

artist to interpret 2D in a way that makes sense in 3D. So I mean, if you match your concept exactly,

your model sheet exactly, but it does not look right, so to speak, you know, that is really up

to you to interpret those changes, the changes that need to be made in a way that is appealing

in 3D, because this is all about making things 3D. So if it's not appealing in 3D, you have a

problem. Obviously, we have to majorly fix these leg areas. Okay, let's look at this in perspective,

and just do some edits based on eyeballing it. Okay, we still need to get the hands and the feet

done before we start refining this. But it's the shape is coming together pretty quickly too.

Alright, the feet I'm going to do from the side view. Let's flatten this and scale it just so we

have a little bit cleaner lines to work with. E to extrude down to the bottom. Now I'm going to

look at this in perspective. Yeah, so I'm going to take these two faces and extrude them out for

the heel. And, you know, if you're doing a more humanoid, I mean, I guess he is humanoid in the

sense that this character has, you know, his bipedal has two arms, two legs, two eyes. But

obviously, it's not a human character. So there are some distinct differences in anatomy. But if

you're doing a human character, having some knowledge of basic anatomy, and you know, kind

of anatomy in the way that artists know anatomy, it's going to help you immensely here. I want to

make so right now his feet are kind of skewed out. So I want to make them facing directly the front

just for ease of modeling. Let's do R and Z and make it more that direction. And extrude it out.

And then shape it and loop cuts. Okay, let's look at this in perspective. That's roughly the shape

we want for our feet looks good. And now we need to do the same with the hands. I'm going to do it

in the top view because this gives us the most clear view of our hand. Let's flatten this out,

S, X and zero just to make it easier to work with. Because it is easier to box select and

align these verts when they are aligned. Okay, let's eat extrude to about here, scale it on the

y axis to make it a little bit wider. Cool. So now we need to extrude from here to this point from

here to this point from here. So we're going to need some loop cuts. Control R right between those

two. Let's select this one, E extrude out the length. And then we can just start adding loop

cuts and refining it. And there, scale this in. Same process on the other finger.

And just kind of as a general rule for modeling from reference this way, if you just want to look

at the angles of your drawing, and when you're first blocking it out, just match the most extreme

points with geometry. So what I mean by that is when you look at like this curve here, and I'm

sorry, it's getting so pixelated, because I'm very zoomed in. But you have a point here, which

represents a wide part, a point here, which represents the narrow part, and then it widens

again, and then it narrows again. So I'm just matching my points to those extremes. And then

we'll worry about smoothing out those curves later on, once we have our sort of blocky version

finished. I accidentally had a point selected over here still, so it kind of just messed up my

rotation. Let's just Ctrl Z, undo out of that, extrude from here.

Okay, we need a little bit more geometry here, obviously. Let's put one here.

Okay, so let's look at this. In local view, I just press slash on my keyboard to view just

this piece in isolation. So this is going to be the general shape of our character. A few points

that are a little wacky, but, you know, all I need is to be nudged. So it's quite blocky, quite

square at this stage still. But we're going to come in and refine it now that we have it generally

laid out. So we're gonna take a quick break. And when we come back, we're going to finish refining

the general shape of this character.