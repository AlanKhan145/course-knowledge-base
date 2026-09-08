# 204 — Adding Cable Details

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Adding Cable Details |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 31m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Adding Cable Details** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- environment art, asset assembly và scene organization
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


Alright, welcome back! We stopped at adding that little cable and we were

about to add like a model for like a box or something that contains or is like a

support for our second cable that goes from down there and then goes to this

area. We can quickly minimize or just adjust the screen size here to have a

puref board for our geometry. I believe it also goes down or something so we'll

just do that. I will shift a and mesh cube and I'll just tab it to edit mode

gz1 just as usual and let's see I wanted to go down maybe go around from the

bottom and then perpendicular on that little square sorry little cube and so

just scale it doesn't matter how it looks like if I like actually if I

actually like the asset I'll just keep it in. I'll just maybe move it on the Y

a little bit and make sure that it's on the edge. There we go. I'm just preparing a

platform where I can just draw a curve so curve, bezier curve, edit mode and X

delete everything. If I switch to draw you can now draw the shape of the curve

from this area. It's going all the way around and then there and if I go down

here and in the depth of the geometry there we go you just give it a good

depth. I can go back now and select some vertices that I don't want so ctrl X

this is a bit tight just G this round G actually on the Y G on the X it's a bit

large so just G snap it here G this is looking a little better I'll be moving

it anyway rotate the entire here my controller on the let's rotate it when

it's X doesn't have a local that's fine however can maybe 90 that then rotate it

on the X says a hundred and fifty doesn't really matter and go ahead and

also control X that and again G shift Z move this until I have something to work

with this is a bit too tight actually so G Z G Z and let's move the entire thing

outwards and maybe there we go this is like a curve I can work with from the bottom here

these are a little too tight it's like a 90-degree angle and just move that center

here this is going to move everything or I can just play around with these make them a bit

smoother G and shift Z no let's let's move that a little bit outwards so G and X I can also

let's okay let's snap that point here and then I can just if I fill the caps no that's not really

helping so rotate it on the Z rotate it on the X now it should be submerged I can give it a little

bit more resolution I think I should also move it a little bit upwards but it's looking fine is it

too much no let's 0.22 there we go so another thing we can do here is something we did before

is select two things or two like vertices or segments and then subdivide and then I have a

segment in between so this is going to make things a little bit easier if I move this around I still

have a curve to like turn back to so I'll move this let's go

no just so I'll just move this backwards this

so this is more like it and what else I'm thinking about a little detail actually that's similar to

this like hook so I'll just delete these extra my controllers I don't need them let's level this up

you too and let's select these two actually with that one and move them inwards move you down then

side you need to go there doesn't really matter if you can actually move that with it should have

done that this is looking cool you to go inside then let me show you something we did before but

let's first adjust everything accordingly so hit ctrl s what I will do is that we'll copy these

two curves so shift D copy them around and I now have these two curves with like depth I can set

this to zero and hit enter and because like I pressed alt let me show you that move these a

little bit outside so again without the altifies if I like set one to zero it's going to change

one of the two so I will hit alt 0 sorry 0 alt enter there we go now I have these two curves

identical to the previous curves and we need to make we need to make these little hooks we can

quickly achieve that if you want they don't actually after looking like into them or more

you don't seem like really that much of a hook they seem as connectors between two parts pretty

much like these but something you would put on a hole like when a hose or a like a cable large

very large cable so let's actually try and model that or see if we have anything we can work with

by default so I believe extra geometry let's look at the bolt factory being delivered no is it

deactivated I think I think it got deactivated oh it's no shift a mesh think it got deactivated

oh there it is my bad so I don't want a bolt I want not and I can actually play around with

how it looks even more mmm this is a shape I can work with maybe but I'm decreasing the bottom part no

what's actually not work with bolts you know after thinking about it we had to work around a lot of

geometry and this is not the ideal because we already have like 5 million triangles so let's

not do that for now like we even have to adjust things up a little bit because if we repeat that

or instance that model we will face a lot of issues with like the speed of the blender so

what I will do is I will just quickly add a okay maybe that's something we can work with actually

so something like that radius doesn't matter hmm it goes inwards that's not

let's not play make the shear zero and we don't want to crown

let's actually decrease that space decrease that to this is looking pretty good actually

you can go inside edit mode and just like how we did before I'll ctrl B that and then

alt E that inwards so I'll hit alt E and extrude faces along normals and as you can see they're

not really aligned that spot here so hit S S there we go and now everything should be

pretty much aligned I'm now going inwards and this looks pretty much like a connector and

now if you remember the curves I can just go ahead and array let's see decrease that

space a little bit there we go ctrl S remember to do that so array and curve select one curve

and realize the curve let's alt G sorry alt G and okay so let's do that on the Z something

you

so okay it might because I think this

it's not being rotated from the right direction

like X is fine but it's just not

like it's being rotated on a um

should okay s s just scaling down

wanted to like not bend actually so one

let's make sure that we are doing that

on the Z of the curve there we go so I

can now constant offset 0

I scale things on the Z I'm now like

filling the object just trees that number

so I'll just scale it on the Z and just

now it's like fitting the length of the

like shape of it can now scale it down

on the Z in edit mode just to make sure

that the ring isn't like too much I

would like to like increase the offset

between them so I don't want the cables

to be too like busy with things you know

rings right now I can now copy the

modifiers can actually shift D that

around and then just delete that these

two no actually let's keep them as is

I'll just select just change the curve

then hold G G I need that with the with

the actual rings or are they oh it's

these at the bottom and see that like G

let's select that and control a light

ball then control X portion to the

bottom then just make sure that we have

things done right no it is Z let's keep

that at one until we see something we

can work with do I have anything going

bad here should be not let's turn off

constant offset first then so it is a

little bit odd so G on the X it's as if

it has some apply all origin to center

of mass well we'll try and figure out

the reason it's not being like offset

properly I believe it's an origin thing

let's start all over so I'm just here

and if I shift s cursor to active and

shift s no control all X origin to 3d

cursor I believe I should be able to do

that better so array and curve like the

curve and make sure that I realize the

curve as well yeah this is better so Z

and let's zero that out and there we go

so one increase even more do I have how

many rings do I have one two three four

six okay this was 38 I believe whoops

38 I can increase a little bit just

until I have something that goes all the

way up I don't want things to be curved

that like harsh so something like that

works just fine and we can go ahead and

just like delete that the bottom so now

I can hit N just to see like the radius

of that object I'll just shift D it

around and delete the modifiers so it's

almost 2.9 I can actually go ahead and

just you know so I can select these with

the curves let's actually do them one by

one so just select these and these are

the first curve I believe so hit G and

snap them up top and although the ring

itself is quite bigger in terms of like

the radius it still isn't like a perfect

fit but that's fine let's first actually

edit the curve so I'll just go into edit

mode and S and shift Z a little bit so

so that you know I can see what I'm

doing here they need to move on the Y and

I'm not sure why this isn't working

G on the Y G on the X and let's rotate it

oh I should be rotating the actual

object a S shift Z again S and shift Z

again you can momentarily change that

workspace into a 3d viewport just so

that you can see what's happening from

the outside so I select that go into edit mode

hmm

do these two share the same origin wait

don't think they do oh no they do

actually they almost do okay maybe

that's the reason it worked for a second

so maybe like from afar it wasn't so

obvious so again let's just and I don't

know why it's so far out like if I

control alt X origin to center of mass

just bring this here let's go into edit

mode actually and shift S cursor to

active then shift S selection to cursor

then control X origin to bottom shift S

selection to cursor and then I can just

now change the cursor of that to sorry

the origin of that so object set origin

to 3d cursor and now they're both

sharing the same position if I turn that

on now turn that on as well way better

remember to save I'll shift S and reset

the 3d cursor to the world origin G Z to

move this around I can now edit that

live without the hassle of going all the

way out there you will turn this back

into the outliner and in here I'll go an

x-ray view make sure that it fits my

cable and I can now deselect the curve

let's no actually let's not do that just

yet want it to perfectly fit the

original curve so it's a matter of like

moving things ever so slightly until

things like fit together this will help

us with Z like alignment which is nice

I'll now deselect that go to edit mode

then S and shift Z until I get like a

satisfactory result if I G and Z that

I'm now moving along the moving all the

objects along the arraignment or the

curve which is something you should know

because you might need to use um if I go

inside edit mode and hit let's actually

adjust this few more times I should be

selecting the curve as well just like

that so G and X G and Y I believe the Z

is just fine now I can go back

deselect the curve let's look at

somewhere yeah that's that's good to

look at so I'll go inside edit mode and

then S and shift Z to scale this down

just enough and maybe you can now hit

Alt E and then extrude along normals and

this is actually changing oh yes this is

changing the origin or the bounding box

of the geometry so let's actually not do

that I'm not I'm not sure why though if

I hit Alt E then oh it's because it's

like it's going outwards like the most

bottom part well this looks just fine

like this looks perfect again I'll

quickly here select that because I

believe the Z direction isn't really

lined it's just it's clipping through the

pipe here now it's looking a little

better this is looking fine I can go

ahead maybe and while editing that I'll

just turn off that in the edit mode and

just Alt E hmm it's clipping it

outwards something else I could do is

that I can hit shift D and Alt S so I'm

scaling inwards should be no that too

isn't working I'll just duplicate it and

scale it down with all with all like

axis except the x-axis sorry the z-axis

so just same height but smaller and then

Alt E next to the normals outwards

remember to hit S. S might be the cause

of the no that too isn't really working

A maybe if three in bridge yeah this is

a little better is this working though

so what I did is just I bridged the same

looking two objects to into each other

and that seems to have worked fine in

like filling or having something to fill

the space between like the cable and the

actual wing so I'll go back into edit

mode oh sorry I'll turn on these options

so that in edit mode I can see what I'm

doing and I believe everything is

selected I'll just hit I'll just hit S

and shift Z till you see some extrusion

of that ring I just made outwards and

this looks fine I believe I don't need

that ring so in the array I'll just

change the offset just a little bit

until it's like hidden and this is

looking good I might actually use that

ring to make up for like to actually be

the actual ring for the second cable and

quickly here I'll just select these three

and make sure to move them into cables I

already have a collection for that just

organizing the scene a little bit make

sure that this is like the selected

collection with that said next up we

will be adding that little detail to

that part as well I always keep

forgetting about like bearing that and

having it look more proper properly like

bird or you know modeled so yeah I'll

maybe do that to that part as well I see

a little detail up there which like you

see some that that box is being curved

from the bottom and like maybe extended

outwards from the top we can maybe do

that in the next lesson but for now try

on adding like details to your like

cable here it seems fun I didn't do the

simulation on this tutorial however

because I found out that you will need

to play around with the geometry and

it's like you will no longer be

interacting the curve you'll be

interacting with a mesh and I just saw

thought that this like would be out of

scope in this lesson so yeah with that

said I'll see you guys in the next lesson

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
