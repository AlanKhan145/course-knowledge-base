# 055 — Non-sculpting Brushes

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 11 — Basics: Sculpting |
| **Bài học** | Non-sculpting Brushes |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:03 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Non-sculpting Brushes** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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

Okay so I have just deleted the object we had in our last video and brought up

a new sphere because it was getting a little bit messy. So let's proceed with

this sort of introduction to sculpting by talking about some of the non

sculpting brushes present in Blender. So because I have deleted the object and

added a new one I am still in object mode so let's come to the top here click

on the drop down and move back into sculpt mode. Okay this brings back up our

brush and all of our brush tools on the side here. So we went over a lot of these

brushes in the last video and all the brushes I covered were sculpting brushes

which is to say that clicking on the mesh and dragging them out would affect

the geometry of this object. I'm going to just quickly subdivide this again by

adding a subdivision surface modifier and applying it with ctrl and A. Okay so

now we just have a little bit more to work with so we can see a little bit

finer detail. So let's discuss some non sculpting features of the sculpt mode.

Alright so if we come down here under our sculpting brushes we'll start to see

some other types of brushes and the first thing I want to talk about is

masking. Now masking is sort of a foundational principle in digital art

and you will see it in 2d as well as 3d you will see it in modeling you will see

in sculpting you will see it everywhere. So a mask is a feature of digital art

software that selects hides and prevents the editing of a specific area. So let's

see what this means in Blender with regards to sculpting. So to do this I

just come down here and scroll down in my tool panel and I've selected the

paint mask brush which looks like this. So with this selected let's increase our

brush size a little bit and let's just click and start drawing on our mesh. What

you'll see now is instead of moving around the vertices it has just painted

this black mark onto our mesh and this black section is the mask. So now with

that painted on what a mask can do if I come into here and pick any of my

sculpting brush any of my sculpting brushes for example let's just choose

draw. So now if I choose draw and I start to sculpt on this mesh and I

sculpt through it you'll see that Blender is sculpting under our brush

strokes everywhere except where we have this mask painted. So anything underneath

a mask will not be affected and this is extremely useful for controlling which

details and areas of your mesh you wish to sculpt. There's simply no way to be an

effective sculptor in my opinion without learning to use a mask and learning to

use it really well because you can sculpt many things without it but you

will just never be able to achieve the fine detail that you see in some of

these really amazing sculpts without it. So we can paint a mask under our brush

with the paint mask tool but we can also select larger areas to mask with the box

mask tool. So the box mask tool is a couple options down and it is right

here. So with the box mask tool selected we can click and drag and it will drag

out a box selection on top of our mesh that when we release creates a solid

mask underneath it. So when we come into our draw brush you can see that with the

box mask tool we can get much sharper edges. Now the box mask tool, important to

keep in mind, will also select through your mesh whereas the paint mask tool

will not. It's just something to keep in mind.

Alright the next tool for non sculpting functions I want to discuss is the hide

tool. So similar to hiding areas in the modeling portion we can hide portions of

our sculpt by dragging on a box on our mesh. Now this is not deleted anything it

is simply hidden all of the faces that were under this mesh. So if you have a

very complex object and you've noticed parts of it are obstructing your view

when you're trying to sculpt other parts of it you can simply drag out and

hide any portion of that mesh which you need to. To bring back the visibility of

your entire object simply press Alt and H which is the same hotkey we used for

returning hidden objects in the modeling section of the course. Now you can drag

out a box to delete portions of this mesh and we can do that with the box

trim tool which is this icon here with the scissors. Now the box trim tool if

you click and drag out a portion it may take a little while to compute it but

once it has a run you'll see we have this cut perfectly formed into our mesh

and if you press Alt H nothing happens because in fact those faces are gone

they have been deleted. Now you may be wondering why did this section turn

green when I performed a box trim operation. Now this is because it has

created what Blender calls a face set. This is also sometimes called a poly

group in other programs. So face sets are really just a way of assigning groups

of polygon faces to a selection. But what does this mean? So if I were to take a

sculpting brush and draw across the surface well it really hasn't affected

it much at all other than the fact that I have trimmed this selection so there

is not really a lot of geometry to work with. So if I were to tab into edit mode

you'll see that this is a single face which will not work for sculpting. Let's

go back into sculpt mode. So we can paint out our face sets in a more meaningful

manner using the draw face sets tool right here. So we can enable this tool

and start drawing out. The color will be totally random and the colors are just

there to differentiate the groups from each other they will have no bearing on

the final color of your model. So clicking and dragging anywhere on this

mesh with this tool active will create a new face set. If you wanted to edit this

face set by expanding it you could do so by controlling and clicking within this

face set will extend it out. Now controlling and clicking off of a face

set will delete it when you paint over it. And just like the masking options we

have a paint face set option and we also have a box face set option which allows

you just to create a new face set under a box selection. Of course this will

select through your mesh just be aware of that. So if I grab a sculpting brush

now because I have these painted over you know an area of our mesh that is

appropriately dense for sculpting let's look at what face sets do and what

they're for. So if I drag it out now it does nothing. It does not affect our

sculpting brush in any way. So in order to make these face sets meaningful we

need to go here to the very top icon where it says active tool and workspace

settings. So we haven't we covered this briefly in the interface overview

section but when we were in object mode there weren't a lot of options in this

panel just really for what kind of selection mode you want and things like

that and that option is available right here as well as right here. So however

when we go into sculpting mode now we have a lot of options here for our

individual brushes. So you'll notice that the preview and the settings change in

this panel when I click over to different brushes and this will all just

give you advanced settings for each brush. So let's come into the draw brush

and let's come down here to where it says advanced. Click the drop-down and

now we see here we have an option that says face sets. Let's enable this and see

what this does. So let's click and drag now and now you'll see that when I

sculpt over these areas these face sets are acting like a mask. So this is very

useful if you need to mask certain areas but you need to keep the selection

separate from each other because the regular mask that you can draw that

appears black on your mesh there's no way to differentiate it from the any

other area that you need to mask out. So if you had two areas that were

overlapping let's say you had an area here that you needed to mask and an area

here that you needed to mask but you didn't want to make this one shape you

needed to keep these faces separate. Well that is when you would use something

like face sets. Now there's ways to edit your face sets after you have created

them. Let's just quickly create this face set and that is with the edit face

set brush. So down here down the very bottom you'll have a brush that says

edit face sets and what this does is just allows you to manipulate this

selection to change it as you need it. You can click on the face set to grow

the selection however many times you need. You can click off of the face set

to shrink it. So that covers all of the non-sculpting options that I wanted to

cover. There are a few more you can see in the tool panel here. Go ahead and

explore those at your leisure. Just try them out on a mesh see what they do but

in the next video I want to talk more about sort of the layers of subdivision

that we have with our mesh and how we can more dynamically control that within

sculpting mode. So I will see you in the next video.