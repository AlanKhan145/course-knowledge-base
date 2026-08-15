# 101 — Face Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Face Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 28:27 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Face Pt. 2** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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


so we have made the eyes, the nose, the teeth, the tongue and the ear and now

let's make the hair and the eyebrow so for the eyebrow go here and shift A and

let's make Q all right let's got it done and then let's go to tab and then

select the vertex selection over here or by pressing 1 on keyboard and then

press M to merge and then select the merging at center so now we have only

one vertices that we can use for our modeling and that is very useful so let

me show you if I go back to object mode as you can see I have one vertices over

here that I can use move around I want to make the eyebrow on top of the mesh

I have so to do that I need two steps so enable the snap tool over

here and select the face selection and then select this one option project

individual elements and enable all this this will allows this allows me to move

my objects on the surface of another object so if I move it over here it's

always moving on this surface if I rotate you can see that it is moving in

this surface so another option that will help me to always make sure that this

will this will always stay on top of my face not my face the characters face is

to add another modifier called shrinkwrap shrinkwrap yeah so the shrinkwrap

let's select this snap mode to above surface and let's now select the target

and I want the target to be this the face right and now now I'm ready to do

modeling so I go to tab and then let's extrude with e to make an edge let's

select all these two vertices with a and then let's make a make a face all right

so by extruding these edges I can make face all right and now you can see you

can't see it because it's kind of inside the mesh but we can change that with

this offset option or here so if I hold control hold shift for some

precision precision changing of this value I'm gonna hold shift and then move

my mouse over here so I can change it above my surface now let's actually go

over here up here the viewport shading because we have a lot of object right

now it's best to change it to something like random over here so change it to

random so you can see the faces the different faces so we have this nose

the eye the ears teeth and the tongue are different are in different colors

now so now we can see our eyebrow as well in a different color and we can

start modeling so let's adjust this then press e to extrude press e again to

extrude e to extrude or to rotate e to extrude and then s to scale it down

all right something like this and then we can scale this part right now then

let's make a subdivision surface subdivision surface modifier let's add

two levels and you can see how good it looks but this is only one one face in

it doesn't have any any thickness to add thickness we can use two methods I'm

going to show you the first method is go over here and go to solidify modifier

over here add solidify and then you can adjust the thickness and add thickness

to your mesh so if I increase this like this it will add thickness toward that

side and I can set the offset to 1 to add thickness to this side so I can add

thickness like this and because I want the solidify modifier to apply first and

before the subdivision modifier I'm going to move it up here because you know in

the modifiers the first modifier will be shown first we will apply first then the

second modifier then the third modifier when we are looking in the viewport

all right so but I want to solidify to make the mesh first solidified then to

subdivide the mesh so I'm gonna move it up and you see the changes over here so

let's increase the thickness also more like that all right I'm happy with that

let's shift shift it duplicated I want to show you the other method to add

thickness so if I remove this solidify from this mesh then let's go to edit

mode and let's select all the faces with a alright and then we have an option

shortcut which is alt E and if I hold alt and then E and I have these options

over here what I'm interested in is the second option the extrude faces align

normals it will add a similar thickness as you had in the solidify modifier so

if I do this you will add a thickness right like this all right now we're

having a shrink map modifier I think it's interfering with the thicknessing

but let's disable the shrink wrap maybe let's do that again now you can see that

is adding thickness to our mesh over here and we again enable the shrink wrap

with this one so like this yeah it will it will snap into the geometry so maybe

that's not what you want so but that's the other other method you can use I

wanted to show you this because this can be very helpful especially when making

clothes and in the sculpting mode I'll probably use this method to alt E to

extrude out clothes and make clothes so let's delete this one so we have the

good thing about solidify is that we can always go here and change the

thickness as much as we want and I usually select this one option as well

only ring this will ensure me that I don't I will not have double faces so so

it will give me less geometry all right so this is only these faces over here

are added all right and now if I move my eyebrows for you to see the inside this

is not added geometry all right so it will be really good for optimizing for

games and all that so I usually keep that all right so let's enable snapping

again now we can always go and change the eyebrow like this

we can use proportional editing too so let's enable proportional editing

press G and then with the mouse wheel we can we can confirm the selection then we

can move the vertices around like this

okay then again let's add a mirror modifier and let's select the object for

the face okay now let's make the hair so I have this over here is a Q as you

remember with the subdivision level modifier let's duplicate it and bring it

over here on top of the head then let's SZ to scale it down GZ to bring it

down let's go to edit mode and now let's do some adjustment to the hair all right

so I'm gonna make I'm gonna get a top like this then two side hairs like that

and one for the back so one two three four four cubes let's disable

proportional editing and also let's disable snapping here this is making some problems

now just about adjusting the vertices I'm moving them around making a block

out first don't go to adding a lot of geometry just do the block out first

this is a very important and important part the most important part let's say

just block out the location of the hair and then when you're happy you can

add loop cuts and add geometry and make some more detail here

so again I don't have any reference so I'm just playing around with the shapes

and we're around to get something that I like

all right now let's increase the subdivision and let's add a loop cut in

the middle right like this and let's add it over here then let's add another loop

cut over here all right now let's move these ones down but this one

all right something like this I want to achieve a stylized hair

let's make an inset in the top part and now making one bevel with ctrl B all

right let's move it in the y-axis it's two in front okay let's add the side hair

over here SX to scale it in the x-axis and then SZ and then R to rotate

now let's move the face around

all right let's increase the subdivision to see how smooth it is and let's add

one loop cut over here and then let's scale it down like that let's adjust the

hair in this area let's add another loop cut over here I want more control in

this area and then do something like this

playing around with the shapes seeing what results I can get with just moving

around vertices all right let's do for let's do the other side for this one

let's try and see to hide the upper part of the ear to see what result we will get

for now we got this we can always go and adjust this you may want to add an

inset over here all right and then just move it toward the outside scale it down

have a shape like this I'm switching to X-ray mode with Alt Z to see how the

meshes are overlapping each other let's bring these two faces down

let's do some more adjustment for this side of the hair

yeah so let's smooth them with right click shader smooth all right we got

something like this we can always go back and change it like just adjusted

them to see what result I can get you can do the same or you can look up on

the internet for some personalized character for some cartoon cartoonish

characters to see to see what the hair look like right let's move around see if

we can fix something or here I think the nose needs some adjustment let's move it

all right let's see if we can add some kind of a leap over here let's select

these let's extrude it along normals with Alt E and yeah we got something

like leaps around this area now let's also select if you select on this cage

button you can see the geometry so let's select these edges then I want to move

them or scale them

like this all right now let's do a better job let's go to side view with

3 and G and Y bring this edge out now we get something like this we have to

move these ones as well

all right I think that's it for this video we made the face right now out of

nothing like we just went with our creativity I recommend you to do the

same and use these techniques like the cube one or the merging of the cube like

making a cube in the vertex mode and center to have one vertices and then

extrude with E select all extrude to have face and with this one vertices you

can you can snap it very much more efficient than just like you know you

can make a plane you may ask like I can make a plane and then move it around the

face and then snap it but as you can see the snapping for the plane doesn't work

very well but when you use a vertex it works very well so let's just move these

ones as well and yeah for now this is what we get if you go to render view

all right and let's make a plane over here and then let's change the light to

Sun change the strength to something like 100 maybe or 2010 something like

this so I don't know let's add other light over here a point light and add

the radius the strength let's add another point light for clarity around

the mouse and we get this thing and when we finish the modeling when I finish

them like making the the body and all that we can go to materials and make a

material and then give color to our character like this and add some

subsurface maybe and this way the character will look much more alive than

it is right now all right so let's add a blonde hair maybe right

control materials all right I don't want to color the whole thing because I want

to make the whole body first make the whole character first and then go for

adding materials and maybe using vertex paint to paint our finished character so

that's it for this video in the next video we are going to model the body

with a new technique I want to show you so stay tuned and goodbye


