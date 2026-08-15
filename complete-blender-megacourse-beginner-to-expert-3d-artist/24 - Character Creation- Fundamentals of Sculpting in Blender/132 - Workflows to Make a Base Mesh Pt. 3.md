# 132 — Workflows to Make a Base Mesh Pt. 3

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 24 — Character Creation: Fundamentals of Sculpting in Blender |
| **Bài học** | Workflows to Make a Base Mesh Pt. 3 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 10:09 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Workflows to Make a Base Mesh Pt. 3** trong pipeline của section.
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

then let's go to make another base mesh with another method this time I want to

make it with a curve so as you remember we can make we can use curves and

convert them to meshes so let's make a curve press R or Y to rotate it

on the Y axis or Y 90 to rotate it 90 degrees let's press 1 to go to front

view now we are in front view now let's press let's go to edit mode

we're going to R let's scale it down like this then we have these points over

here this is gonna be our body this is gonna be our arm so let's press X let's

press R X R X like this let's press e I'm sorry e X I said R X so e X extruded

in the X axis let's press e and extrude here as well let's go to side view with

tree so I'm in side view right now and as you can see these need to be or to

the front like this I'm not saying these are the this is like the best option to

make the base mesh but you need to know these maybe just to make your own stuff

then we can go and add the mirror modifier for our care but doesn't work

right now so because we are in edit mode so or not all right does that access

works so in the Z axis then let's apply this all right we need to transfer it to

care first can I transfer it to mesh press so right click convert to convert

to mesh all right now we have this over here and then let's convert it again or

actually let's convert it back to curve because I want to add some geometry if

you remember we do that by going to the object properties of the curve and then

go to geometry then go to bevel in the round option we can increase the depth

so I'm gonna hold shift to increase it more accurately so I'm gonna hold shift

and then increase it like this okay so when you're good we are happy with the

mesh we can even go and maybe extrude it like this to have more we can go take

these and move them around now we have a lot of vertices because because we

converted it from mesh to curve but you can do that you can grab the vertices

and just manipulate the mesh like that then when you are happy maybe adding

more and we were happy but just radically convert to converts mesh now

we can add the head maybe over here with a UVS here and then something like this

let's click on this and join them with ctrl J now this is one object let's go

to sculpt mode let's go to remesh you know the drill eyedropper press on the

object shift R to define the voice size click and ctrl R and this is the mesh we

get we can always go back and increase the resolution now we get these things

over here so this is one of the things that you might encounter while working

with the curves so we didn't add enough bevels like over here you don't have

enough geometry so now blender is having a hard time to

remesh this kind of very very let's say narrow very thin geometry so to fix that

maybe we can go to modifiers either solidify modifiers and add a bit of a

skin a bit of thickness and now we can go to remeshing click on this and then

click on this and then ctrl R now as you can see the problem is fixed so we can

now go to symmetry maybe symmetrize it or not maybe symmetrize this from in the

z-axis actually so let's symmetrize it like that and now we can go to the

routine of sculpting smoothing over here and then grab with G keyboard and then

maybe go to inflate to inflate like this if you want to have a bigger

geometry in these areas alright then we can we can go to clay strips maybe add

some more definition to this object like I had something and now we got this

problem if you remember in the some of the previous videos we get this because

when the when the mesh is not very too thick so to fix that we can go to brush

and then click on front face only now let's see if it's gonna fix it now you

see that it doesn't affecting this part of the mesh all right let's turn that

off and that's that for this type of for this type of method for this method of

converting curves to mesh and then using this method to make a base mesh

you can you can the beauty of the remesh is they can always add other things as

well so if I want maybe a foot over here a quick block out of the foot I can

always go here add it here and then maybe add a quick mirror modifier

person this object are at the object is not in the z-axis are so we can do this

apply the mirror modifier then join the cubes with the mesh we made and maybe go

to edit mode maybe scale them down maybe extrude them like this if they

bring them down like this a very quick like we want to make a very quick shoe

maybe and then let's click on ctrl R to remesh now this is remeshed with the

whole object now it gets we get our mesh over here because the distance

between these two objects weren't like too much a blender with that much

geometry couldn't identify like make a distance between them if you increase

the resolution it's gonna fix it as I said before you don't want to increase

the resolution in the first stages you want the lowest resolution as much as

possible now let's go and press ctrl R now you see that the problem is fixed

now if you use smooth it's something like a very strong strange if you

click on it we get a very round shape like this then we can go to inflate and

inflate this part that may be adjusted accordingly but maybe this character is

sitting on a chair like we're maybe we're blocking out a character that is

sitting on a chair and we can always go and make a quick chair like this

all right so that's that and let's bring it over here so this was made with curve curves


