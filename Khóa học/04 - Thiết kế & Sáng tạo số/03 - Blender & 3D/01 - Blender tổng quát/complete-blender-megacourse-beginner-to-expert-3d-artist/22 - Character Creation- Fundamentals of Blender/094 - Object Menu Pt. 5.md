# 094 — Object Menu Pt. 5

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 22 — Character Creation: Fundamentals of Blender |
| **Bài học** | Object Menu Pt. 5 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 17:46 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Object Menu Pt. 5** trong pipeline của section.
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

the next thing is a lattice so what is a lattice if you make a lattice you always

get this cube all right so first of all make another mesh like a UV sphere

scale it down ctrl a scale ctrl a scale and then have your mesh inside your

lattice so this is a lattice and this is a mesh this here have your mesh inside

your lattice and then go to your mesh go to the modifiers add modifier then add a

modifier here called lattice and if your object you select your lattice over here

or with the eyedropper you select your lattice in the viewport like this so

what has happened is that if you go to edit mode of your lattice like this you

see these points over here and now if I move these points you can see that the

mesh will move as well so this is pretty useful for quickly you like do like some

rigging for like quick rigging for some simple shapes and all that like um it's

not like the armatures for characters we use armatures but for other shapes

maybe for hard surface shapes you can use the lattice to better control your

shape and make a shape like this all right the next thing is empty so the

empty option as you can see we have these options over it these will not

appear in your render so the first thing is a axis plane axis the next one

are some arrows the next one is a single arrow another one is just a circle and

we have a cube also and a sphere cone and an empty image all right so you have

these empties these are not meshes but so you may ask how can we use them so

maybe so I'm going to show you a couple of things that you can use empties for

all right so for example we have let's make a mesh here let's make a UV sphere

here all right and then we want we want to mirror this UV sphere like this and

let me move it over here I'm mirror that in the x-axis but I don't see my mesh

over here and but if I go to edit mode I can move it around like that but another

way to control the mirror of your mesh is to is to just make empty so if I go

to empty make it empty right like that and then I go to my mesh go to mirror

modifier and then down here I have a mirror object if I select my empty now

my empty acts as the axis that this mirror modifier uses to mirror this

object so the mirror modifier is using this empty as the object to mirror my

mesh for me that is pretty handy so if I move my mesh over here and then I can

adjust my mirror like this with the empty that's one use of empties but

another use is for cameras so I have a axis over here I have a camera over here

all right and you go to camera view by pressing 0 on your numpad like this okay

and as I told you in the previous videos if we go to the camera properties and go

to viewport display and go down here we have this option over here if we crank

it up like this you only see what is in the camera all right so if I make a cube

this is a cube and now I have this this empty objects all right I have this

empty object and to move the camera you can use the G for moving R for rotating

and S for scaling all right but unfortunately using the camera in

blender is quite hard like if you go to camera view and press G then you can

move it around or you can do this and then yeah that's it all right but it

gets very very hard sometimes to adjust your camera so what you can do is to

make an empty move it here like move it to the origin of your move the 3d cursor

to the origin of your camera camera and you can do that by pressing shift S and

then cursor to select it and then the cursor goes to the camera and then maybe

you can just do it like this like select your empty shift S and selection

to cursor and then right now my empty is in the origin of my camera all right so

it's like this so what I can do is select my camera select my MC and then

ctrl P and then select object so I have parented my camera and by using this

empty now if I move this empty the camera moves as well if I rotate this it

will rotate as well if I scale it it will scale as well so if I go to camera

view by zero now I have selected my empty and now I can easily adjust the

location of my camera like this this is another use of empties that you can use

that you can utilize in your modeling your modelings the next thing we have is

images so we can use the difference between these two is for example if I

press on reference and then bring up a picture like this all right I have a

picture here and this is an empty empty picture a plane that has this image that

is selected all right this is only a plane and it will show the show the

image in both sides right now if I go to background and select my image as you

can see this will only show that in front and these images have you can also

use it to scale it with s or use these these things over here to scale it down

and adjust them and you can select the center to move it around but what I

usually do when I when I drop an image into blender is to hold alt and R to

reset the rotation so alt and R is to reset rotation and alt and G to reset

location which is right now in the right location and then I can press R and then

press X to rotate it in the x-axis and then I can rotate it then I can write

the like 90 the number 90 to rotate it 90 degree so I just typed in 90 to

rotate my object with my image over here 90 degrees all right that's all

about images you can can also if you bring up your folder and then you can

drag your picture into blender and it will show here so you can also use that

method the next thing we have lights over here all right we have point light

spotlight and area light but if you choose any of these lights or

here like if I choose a point light in these options the object properties I

also have the option to change this light whenever I want so I made a point

light then like I'm thinking no I want an area light no I want the sunlight

then I can change it as well so you can just make a light and then change it to

some like that all right so we are in the shading mode player right now all

right so you don't see the how the lighting light is affecting the the

scene right now but I can I can move the light with G I can rotate it with R and

all those key shortcuts then we use for modeling as well if I go to viewport

shading and then let's go to rendering we're in Eevee we're in the rendering

scene right now and let me actually delete this light and in the rendering

scene let's make a plane now I made a plane but this plane is as you can see

we don't see it like it's black or it's not a material because I haven't set a

material into this mesh so what happens here is that our scene is not lit right

so it's dark we don't have any light so if I create a light shift a go to light

and make a point light as you can see now we have a light that is brightening

the scene I can change the color of my light or here the first option is color

you can change the color and then you change the color of my light then I can

change the power as well the default value here is 10 watts so if I change it

like this increase it it will increase the strength of my light then I can play

around with these values specular, diffuse and the volume to get another

result and the next important option for the light is the radius so if I increase

the radius the shadows of my lights will be softer so this is kind of important

when you're lighting your scene so if you get any sharp edges in your shadows

you can adjust this value over here this radius value over here to get more softer so if I

decrease this value I will get more sharper shadows like right here I don't

know if you see it in the recording but I get sharper shadows so and then in the

Sun we have all these options as well in the other type of lights with some

differences like in the Sun we have this angle you can manipulate and the

difference between Sun and all the other lights is that the location of Sun

doesn't matter like I'm moving the location here and as you can see the

location doesn't matter if I move it even over here it doesn't matter all

right because Sun when it comes to Sun light only the rotation matters so by

pressing R I can change the location and the scene will adjust accordingly so if I

decrease the strength maybe you can see it better and set it to white you can

see that the rotation is the key when it comes to Sun lights all right then we

have the spotlight so it's like yeah it's like the name says it's a spotlight

it's make it round shape you can use like for certain scenarios maybe and you

can use a scale there's a size in the blending to if you increase the blending

you get softer edges right here I rarely use this spotlight but you may find a

use for it but light I usually use is the area light like this is a very

useful light and you get this by default you get this square shape light so this

is a square shape light and if I increase it I get more strange and then

I can change the shape as well so I have a square right now I can change it to

rectangle then I can change it to and then adjust this rectangle like this or

we're going here I can adjust it as well and then I have a disc very useful one

for certain scenarios I can use this disc to get these shadows like this and

the last one is an ellipse I can adjust this ellipse like this and then move it

around to get the results I want all right I think that's all for the

lighting that I want to show you in this video in the next chapters when we

are when we are done with making our characters and we have made the

retopo texturing and we are preparing the scenes or we show you more advanced

lighting more advanced lighting techniques that you can use for example

the three-point lighting if I make a Suzanne or here all right this is Suzanne

and if I want to lit this scene I will make first an aerial light or here all

right and this is called our main light this is our main light and I adjust this

then I can duplicate it like this and then I can duplicate it I would like like

this all right this is our fill light and this is our rim light all right we

are gonna discuss this later but if I do this right now and this make another

one like this and then change the color something like this I get an interesting

lighting scene here right here so if I disable any of this light the first

light gave us this this one the second light like this the third one and the

fourth one and all these lights will help us to get a very much more

interesting scene and render of our character the other thing is that if you

choose this light and then yeah choose this light and then a shift T so by

shift T you can change where this light is pointed at so right now this line is

showing us that that this line this light is pointing toward here so if I

hold shift and T and now I can move around this line as I choose like this

one or by selecting this sphere or here as you can see the shortcut is appearing

like shift T so sphere over here does the same job as well that's all the

thing about lighting that I want to show you right now


Completed
Play
Completed
Play
Not completed
Play
Completed
Play
Completed
Play
Completed
Play
Completed
Play
Completed
Play
Not completed
Play
Not completed
Play
Not completed
Play
Not completed
Play
Not completed
Play



























Click the "Create a new note" box, the "+" button, or press "B" to make your first note.