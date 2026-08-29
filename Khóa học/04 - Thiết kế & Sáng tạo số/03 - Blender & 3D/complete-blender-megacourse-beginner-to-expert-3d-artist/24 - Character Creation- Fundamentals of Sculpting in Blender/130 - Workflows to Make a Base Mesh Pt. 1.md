# 130 — Workflows to Make a Base Mesh Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 24 — Character Creation: Fundamentals of Sculpting in Blender |
| **Bài học** | Workflows to Make a Base Mesh Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 14m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Workflows to Make a Base Mesh Pt. 1** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
- modeling, mesh editing và kiểm soát hình học

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


welcome back guys in this video I want to show you different ways that you can

use in blender to make base meshes for your sculpt so as we speak and as we

talked in the last video we usually start with primary forms for our sculpt

and then go to secondary forms and tertiary forms so to make that primary

forms we need a base mesh so the first stage is actually to make a base mesh of

the thing that we're sculpting the character that we're sculpt it may be a

human it may be a creature it may be a four-legged creature for example it may

be anything but first you need to block out the silhouettes block out the

primary forms the main forms all right to do that there are some various

options you can use in blender so the first thing is to simply make a cube and

then we can go to edit mode and then in vertex mode merge all of them so we have

a single vertices then we can go to modifiers and add a skin modifier so

now we have this cube over here but we can go to subdivision surface and add

subdivision surface you can even increase it one more and then go back

to edit mode now we have one vertices with a skin and maybe let's try to make

a human base shape like a very rough like I would I don't want to put enough

time put a lot of time but let's see what we get with this method so let's

press E Z to extrude it upward let's press this vertices and mark it as root

then let's go up and E Z and let's do another one is that let's press alt Z to

go to X ray mode and let's maybe make a subdivision right click subdivision and

then let's enable X symmetry and press E X to extrude it along the X axis so E X

so it didn't symmetrize but that's okay if you had any problem in this area just

remember that the vertices single vertices there are some hotkeys which I

explained in the first part of the course but for vertices it's ctrl a to

scale it down or up so scale it down or up as much as you want for example like

this scale it down over here not too much then E X E X so this one is for the

elbow maybe bring it a little bit backward then this is the arm and then

we can go for the fingers or very rough so E one time over here E one time not

there right here so E E so that's three fingers four fingers and five fingers

and then select these fingers over here and there's press ctrl a to scale them

down now we can go and move it around like this it doesn't have to be perfect

remember remember that we fix these stuff in the sculpt mode we can always

go here and do something like this maybe and the geometry is not important for us

remember we are going to remesh everything we get here so it doesn't

matter how they are connected to each other like like these areas even it

doesn't matter to us because we're gonna remesh it and these problems we're gonna

are gonna fix itself to get I'm gonna fix this off then you can go to edit mode

again and then press E and we are going to make a neck so let's press ctrl a to

scale it down and then press E again Z ctrl a to scale it up like this all

right then between these two point let's make a subdivision and then let's press

ctrl a maybe in this part to make it a little bit more round like a very rough

head right so you can go here now and we can press on ctrl a maybe or actually we

want to mirror this so let's mirror it and the mirror is perfect right now as

you can see then we go to edit mode and then press E to make the legs maybe

something like this it doesn't have to be perfect maybe something like this now

it's a slender man but it depends on what you're creating we are just going

to just for demonstration just gonna do this but maybe this is some cartoonish

stuff but you need to always pay attention to proportions

all right now we get something like this okay then now that we're happy with this

when we are happy with this we can go here and press ctrl a visual geometry to

mesh now all the modifiers is applied and now we get a mesh like this but as I

said you don't care about the mesh because now we are going to sculpt one

we're going to remesh press on this eyedropper press anywhere we want and

now blender has identified the voxel size now we can press on shift R and set

the voxel size ourself and then press ctrl R to remesh now we get a base mesh

like this that we can work on because the fingers weren't very good like the

distance between them were not applied to the remesh we did we can go back and

do maybe with more resolution that is not advised though if you do more

resolution yeah you will get like these fingers as well but usually you have to

start with the lowest amount of polygons when you were at the start so I'm just

gonna not that much I'm just gonna do this that's okay for me and then go to

smooth bring down the strength and smooth it the geometry like this I can

enable symmetry as well then I can go and smooth it like this and then I can

go around press G to for grab and then play around with the geometry play

around with with anything I have to make major major manipulations like major

changes so it depends on what character you're making you can go and do anything

you want actually and that's it for this blocker so this is the face blocker the

first the very first part of your sculpting so we made this with let me

bring it down bring it over here we made this with skin modifier with a

single vertices with the skin modifier now let's go to the second method that

you can use you can always go make a cube and then go to subdivision surface

I make a subdivision surface one of the easier easiest methods for modelings and

then go select this face and press e to extrude then press e to extrude and then

make a loop over here with ctrl R and then over here press this face and then

press e X and then s to scale it down and then you know the drill like make

the arms maybe something like this if you're not happy with the scale you can

always select them or press s to scale or press alt s to scale the vertices so

alt s to press this vertices you can also like make loops over here and then bring

out the fingers I'm not gonna do that but you can always try that as well and

then we can make a loop over here and then select this face extrude it like

this let's get it down maybe

so extrude it down then make a loop cut over here I'm just trying to make a

quick human vase mesh just to show you what is the workflow maybe not the best

I'm not maybe I'm not gonna make the best base mesh but just to show you how

it's done alright and then we can add a mirror modifier to have this then we can

go and extrude over here for the head or we can just maybe just extrude the neck

right here and then a scale it down with s and then just in the edit mode while

the face are selected press shift s cursor to select it so the cursor is

here and then press shift a and make a UV sphere so you have a UV sphere here

press G Z to bring it up and yeah that's probably it you can also play around

with the proportion right now so grab an edge maybe I'll grab the whole edges

over here and bring it up maybe do whatever you want like make loop cuts in

the maybe maybe the knee area bring it forward it will make a loop cut in the

belly area bring it forward or maybe a scale it down even for women for example

or maybe scale this up and maybe select these faces and bring them forward like

this for the or chest area and all the things you can do like for example in

the back something like this and the lower back to bring it forward like this

so do some proportions and all that or you can always do that in the sculpts

menu alright that's a quick base mesh now now I can just go and press ctrl a

and then press on visual geometry to mesh now I have this mesh over here

quite a good cut a good geometry except these areas we want to merge anything so

we always use remesh so let's use remesh with this eyedropper click on here so

blender identifies the voxel size of the mesh and then let's unify the voxel size

between the whole mesh with remeshing so I'm gonna press ctrl R and now I get

this geometry now I go to smooth maybe bring up the strength and then I try to

smooth the areas like this

maybe it's not bad to press on symmetry so symmetry from plus X to minus X

position seems right so I would seem to rise base mesh and then you can start

your block your blockings and your changes from now from this stage alright

so that's another way to make base measures let me bring it over here and

this was with so this was we let's bring it here so this was with the cube subdivision


