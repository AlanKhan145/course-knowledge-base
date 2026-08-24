# 124 — Brushes Pt. 4

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 24 — Character Creation: Fundamentals of Sculpting in Blender |
| **Bài học** | Brushes Pt. 4 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 14m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Brushes Pt. 4** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic

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


again about the facets in the last parts and these are for the masking another

thing we have is box height and pretty simple if we click and drag a box

appear this is a preview of a box for us and if you let go it's gonna make this

part of the mesh hidden but it is only hidden it is not deleted to get back our

hidden object we use alt H all right so if I now again box hide this and if I

use alt H I'm gonna unhide all the hidden parts all right let me decrease

this and actually apply this now you can't apply it in other modes other than

object mode then we have box trim and lasso trim if I use box trim it's gonna

trim the object like this all right and if I enable wireframe as you can see

this is what we get the mesh we had with flat surface if I use lasso trim it's

gonna allow me to do the same thing with the lasso selection right this is

what we have and if you use line project it's gonna make a line with a shadow so

everything that is on the shadow is gonna get removed so if I do this this

is gonna be removed if I did this this is gonna be good and now notice how much

how the geometry is much more cleaner right I don't go to the lasso trim and

box trim because unfortunately these these brushes use boolean boolean

operation all right and that is why when using lasso it actually took longer and

it is using a boolean operation to make a hole in this thing and when you go

like the geometry right now isn't that high right but it lacked right now and

imagine if you could too high like above 500,000 it's gonna lag a lot it's gonna

take a long time and maybe even blender might crash so I recommend to you that

you do not use the lasso trims for that specific reason but if your mesh is low

poly right now and you're in the first stages of your sculpting you can use

this to do some trims like that okay but the thing the the line project is the

ones I use a lot I can use it very simply and very fast it's very fast to

use like this right well another thing that is very useful is as you go to the

settings of these lasso trims we have trim mode so trim mode is set to

difference right now these are the boolean operations we set it to Union

and draw a shape over here as you can see it's gonna make a shape for us and

it's gonna actually let me make another object over here

the UV sphere it's coupled and lasso trim with Union if I draw a shape over

here it's gonna make an object and it's gonna actually join these two together

all right but what I'm interested in is this join one all right so if I do this

you can see I have another option made in the air that is pretty cool like for

example if I go here and maybe I want to make ears right enable symmetry imagine

this as the face I go here and do draw something like this all right when I

have a shape over here right there and then I can have a maybe a nose right

maybe an eye and it's very cool for this brush over here as you can see the you

right now I think in default this is off use cursor for depth I'm not sure but if

you turn it off as you can see this is too big what is too big so make sure

that this option is on use cursor for depth this blender is gonna use your red

or the radius if your brush for how much depth this one is gonna have so if I now

make one over here it's gonna have left depth left like thickness if I decrease

the brush even more it's gonna have even less than that and it depends on

the on your view as well so that in mind like this can use shape or initial to

surface or view so actually so it was set on surface so the shape was based on

the surface all right so if I change to view now it is based on the view so if I

zoom in like that if I make it I make it simple really tiny shape over here

if I zoom out I make something like this so it is based on the view all right so

that is all about these two brushes and then we can go and these are joined

together as you can see let's do with them and let's go back to our character

now we have mesh filter is very useful but for explain this let me use masking

so to enable masking use M more about that later on but if I enable a masking

and then control I to invert it then if I use mesh filter in many I can use

these I can use these filters so I have filter type over here I have a smooth

scale inflate sphere random relax and all these options so for example in some

part of my let me actually delete this mask with alt M parts of my sculpt I like

for example here maybe I want to make my knuckles so there are many ways to do

like prominent knuckles over here like using a flat brush or all that I can

also use the mesh filter so for example over here I mask these areas and I

control I to invert and then I go to mesh filter and go over here and choose

inflate and then it is you don't have to move your cursor to the area or all that

is all direction so the direction this is 0 and this is 100100% right so from

this direction to this direction so if I click and drag from left to right it's

gonna increase the strength all right as it did over here it seems

all right so if we click and drag from anywhere from left to right from anywhere

actually from left to right if I direct it's gonna inflate and inflate and

inflate more if I go back I can decrease the strength like this so with

these I can like a subtle inflation in the area I want like here right and if I

want to smooth it I go to here smooth it from left to right it's gonna smooth it

more something like this it's smoothing it as you can see if I want to scale

this area I go and scale it like this and then you know maybe I want to add

some sphere effect to this area to make it more sphere shape I use this then we

can use a random add more random effect is kind of useful when you is more

useful then you have more geometry for example when you have and you're gonna

make some the tertiary shapes of the skin I usually use this option then you

can relax the geometry with this if I enable wireframe maybe you see it can

relax the geometry like this then you can sharpen it as well okay so you can

enhance the details and all that so this is a very handy and useful option or

here you have and I use this a lot all right and also you have here a local and

this is the pivot point all right so keep that in mind the other thing we

have is cloth filter is kind of the same thing as the cloth brush but it's kind

of gives us a more uniform effect so with the cloth brush we add an effect in

the area we want right by the way the cloth filter we're gonna add it to the

whole mesh so if I go here and then again it's the same as mesh filter we

don't have to put a cursor on the object you just have to click and drag from

left to right and it's gonna have an effect like this it's gonna be subtle

right so let's change the strength and then do this as you can see still we

don't have enough geology so yeah these cloth simulations or anything that is

kind of relates to simulation it's really a lot of geometry so that's what

it does and we have some options filter type is to expand let's use inflate then

you still use pinch now this is much more interesting right this is gonna

make you very much more interesting effect to the shape like this if you

use scale not very much for this shape all right let's use gravity also if you

use gravity alright so we expand maybe we're doing too much let's change the

strength to zero or minus one yeah

geometry like it explodes I can't handle the filter it explodes all right we

probably need more geometry for this but I'm not gonna subdivide it even more

I'm afraid it's gonna make my computer very very slow so that's cause filter

for you and then we have this last options we have over here our move

rotate a scale and transform so these are the same thing as we have the

object mode over here all right but with one difference that is it's in

sculpt mode and we have to use it with some with the workflow yeah like the

workflow I have for these options is that I mask an area and use for example

move and then I go to sculpt set pivot and pivot to unmask and then it's gonna

move the pivot to the area that is unmasked and then I can use the move

brush over here to move it in the axis and that is very useful okay I can't

even use this to move it freely like this very useful in your sculpting so

there's more workflow you can use it for rotating an area and use it to scale an

area like this I can use even the transform which has all these elements

rotating moving and a scale

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
