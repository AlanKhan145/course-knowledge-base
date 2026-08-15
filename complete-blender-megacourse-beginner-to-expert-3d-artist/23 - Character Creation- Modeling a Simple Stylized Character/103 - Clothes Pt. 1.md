# 103 — Clothes Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Clothes Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 13:55 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Clothes Pt. 1** trong pipeline của section.
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

hello again in this video we are going to make some clothes for our character

so to recap we made the these faces the face and the features on the face then

then we made the body and the leg over here and we made a face collection a

body collection and lights and the scene all right so in this video we are going

to apply the modify the modifier we made for the body okay so I recommend to you

to make one other collection as well named backup so a new collection and

backup all right but let's duplicate this and make a new collection backup so

if everything happened everyone I want to make some big changes we would have

our base our base mesh that we made so let's disable the backup from the

view so it's still in the view right now let's disable it by clicking on this one

so it's not there yet there anymore and now let's go here and apply the

modifiers so first the mirror modifier then a skin modifier then the

substitution modifier you can go here and one by one go here and apply them

or you can press ctrl a and in these options choose visual geometry to mesh

all right so by doing that I have applied all the modifiers I had and if

I go to edit mode you can see that I have mesh over here but before that

let's go back I'm doing by ctrl Z I think our subdivision level is too high

so let's bring that down to something like 4 and then let's do that again

ctrl a visual geometry to mesh all right now we have a very nice geometry for our

character right so now we want to make some clothes how to do that all right so

first go to edit mode press 1 to go to France mode and then turn on the x-ray

all right and then box bit box selection select the whole the parts you want for

your clothes I want all the parts of my of the body of my character except the

hand so if select these ones and let's see if they're good and yeah and then

shift D to duplicate this selection all right this is a duplication of this

selection I made and then right-click to snap back to location and then press P

on your keyboard all right and then press selection to separate this

selection all right and now we have made a new object as you can see this is

a new object and the color is different as you can see so if we go here and do

press s to scale a little bit as you can see it doesn't do a good job to mmm to

cover the body but all you need to do is to add solidify modifier so if you add

solidify modifier let's let's increase this amount over here let's change the

offset to 1 and then enable this only rim option and then let's change the

thickness of our clothes so here is more obvious how much thickness we have hold

shift if you want to have more control over your changes so I think that's

enough we can always go back and change it let's actually add a little more all

right so that's the clothes of the body right now what we can do we can now let's

go for the leg but before that let's make the crotch area all right so to do

that let's go to let's go to edit mode of the body we have over here and then

press a slash on your keyboard to go to solo mode all right then one to go to

front view tab to go to edit mode and then press on x-ray to enable x-ray then

we want to make the crotch area so make a box selection or here all right so we

did a mistake here so it this loop we don't want it so let's do it again by

drawing a even box all right now we're in first selection and as you can see

we got a good selection let's press shift D and then P to separate and then

selection and then back back to object mode and let's turn off x-ray mode with

alt Z and now as you can see we have a crotch or here let's get back to other

objects we have with going out of the solo mode with pressing a slash again

and then this is the crotch area over here and we have let's scale it and see

what we get all right all right that's good so now let's add a solidify

modifier and let's change the thickness and then let's add a subdivision surface

modifier all right now we have made a crotch area over here we need to scale

it a little more thing or bring it down yeah bring it down and yeah that's good

all right that's good for now we can decrease it because it looks like it's

too much right now and scale it down maybe yeah yeah that's better

we want to make a built as well like I have a built in mind to make so we need

to make enough space over here

let's go to edit menu let's select this loop over here let's disable the solidify

for a moment select this loop over here and then press scale and then change

change the real-time viewport of the solidify again to see the changes and

now we're getting a better result for this with other part of the crotch let's

select this loop again and bring it a little bit down all right that's good

for now let's smooth this

all right I scaled it a little bit more it all depends on how you want character

to look so I'm just playing around with the values with the scaling the

thickness and all that to get better results so I'm scaling in the Z axis

right now so all right so yeah maybe the change in the direction would help us a

lot in this case then maybe going back to the edit mode and then scaling

scanning the upper parts a little more but now it's too too much let's go back

I think that's fine for now let's make the build so let's go here and let's go

to edit mode we have this loop selected so shifting to the duplicated I have a

method in mind I don't know if it works those or less let's have it here we did

the wrong selection all right let's not go to that method let's go to let's

press shift s and then cursor selected to move my move the cursor to the

selected object which is this one and then let's go shift a and make a circle

curve and then let's scale this circle curve to match area of this crotch all

right and then just look go to the properties go under the geometry as we

talked in the as we discussed in the foundation fundamentals and then add

some bubbles over here and then add some extrusions over here we want we want to

make some builds all right so let's do that and I think it's good right now so

no more I just means neither very much but a little rotation gives variation so

let's rotate it a little bit right now right here like this right it's too much

I think so let's rotate it like this all right and now let's make the build I'm

happy with that right now we can yeah we can change the bill a little bit to

have less thickness all right let's move it here to scale it a little bit and now

I think it's good all right so let's make the buckle over here so shift

right click to bring it to this side and then shift a and let's make it with

let's make it with a torus and let's change the segments to the lowest one

and let's increase it and I think it's good for our purpose all right so let's

let's rotate it first in the X degree or RX 90 degree and then in the Y degree

so our Y 45 I think yeah 45 yeah so let's scale it down like this let's see

all right so that's the buckle and let's duplicate this box with the subdivision

modifier we made in the first video and let's do this one so let's face select

adjust the shape of this box

you

all right


