# 150 — QuadRemesher

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 25 — Character Creation: Final Project |
| **Bài học** | QuadRemesher |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 25:15 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **QuadRemesher** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
- retopology và tối ưu topology cho asset
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


Welcome back guys, so in this video I want to show you another method of

auto retopology that I use for auto retopology, auto retopologize these

accessories, well first let's retopologize this with a blender

quality flow to see the difference later on, so let's do that, set the same size

let's set it to faces and set it to 700, well actually let's set it to one

thousandth, set it to 1000 faces and now let's press on ok, let's see how it did

the remeshing, better than last time it seems at first glance but still some

cleanup to do, the lower part not very good, these edges make some

problems and this area is not very good either, alright but that's what we get

we can do it, we can auto retopologize it and do some cleanups but the other

method I wanted to show you it's a little bit different, you have to go to

you have to go to the internet and type in exercise and we have this website

over here, this company has produced some remeshing, auto remeshing tools and the

same auto remeshing tools has been used in other programs like Zbrush, alright

then you go over here to code remesher, you can go to overview and see how it

works, there are some of these comparisons over here that we can use

but just if you want to download it, go to code remesher, download and if you

type in your email you get a 30 days trial order, alright but this is a very

paid software, a paid plugin, alright and you have to consider that you have to

pay for this to have it in Blender but after downloaded it with a trial version

30 days, you can go to Blender and go to edit, preferences, add-on and click on

install and install the file that you have downloaded, alright but let's

duplicate this, first I want to change the name of this so let's change it to

jackets, alright and let's change it to jacket red and this one to shorts, alright

before it's apologizing, now let's duplicate this over here, I wanted to

apologize when you install code remesher, it goes over here, if you press N

on your keyboard, all the add-ons comes over here so we have code remesher

over here and we have some options like we have code count like we had in the

code reflow over here, we can set the count so we set the count for this one

to 1000, let's do the same thing and set it to 1000 for this jacket over here

adapt code count always turn it on, it tries to find the edges and if one edge

like for example in this area needs more more quads, it's gonna add more quads in

this area, alright then we have use vertex color, you can use vertex color to

to assign and to show this program which areas you want to be denser or which

areas you want it to be lighter or less geometry, so if you go to vertex paint

and paint this area like for only red and blue, paint this area to red, this

area is gonna be denser and if you paint this area to blue for example or this

area for example that we are not gonna see, alright this area, this is gonna be

less denser and with less geometry alright and that might help you in many

cases for example for the face you want more geometry around the mouth for

example you can do that and use this feature and then you have some other

features if you want if you want to be symmetrized always turn this on for

example body or other things that are symmetrized, turn X symmetry on, it tries

to remesh it based on the symmetry and these two are gonna be similar in

topology, alright let's now click on remesh to see what we get, again you're

gonna see over here the loading how it's gonna remesh it and it depends on the

topology and how dense our target is and one other thing is that if I click on my

jacket over here, alright this workflow with quality flow that Blender

has, it changes the geometry of the whole of the object but this

workflow over here it doesn't, it makes a new object and then retopo it and

change the name to retopo the name of the object and then you have it alright

so this object will not be deleted or something like that, let's click on

remesh to get what I mean so if I click on remesh it, it's gonna do the process

and now we have the geometry over here and as you can see the jacket over here is hidden

but we have it so it's not being deleted alright but a new object has been made

in our library called retopo jacket so it adds prefix retopo and then the

object name and as you can see the result is fantastic like we can see that

we don't even need any cleanup and the flow compared to this one is much better

and much nicer and in these areas which we have more curves it did use adaptive

size and use a little bit more quads in this area and little quads

compared to this area which are a lot bigger right so this is a very fantastic

tool to use I really recommend that you download it and test it for yourself it

has a 30 days trial so you can use it in this project if you want alright so

let's now go into our Resopology then I want to resopologize now with this tool

to make things go faster so I can I did resopologize the body over here to show

you how the resopology, how the manual resopology can be done but now for these

kind of objects over here it's not very necessary one thing to note though if I

resopologize this body over here that I have over here let's actually do that so

I'm going to resopologize it let's set it to 5,000 as it is a nice face count

for the body set the symmetry on and now let's remesh it it takes a little bit

longer for us to remesh it because it has much denser but we want to just

compare it to the resopology that we did manually alright so as you can see if you

go and hide all the other things alright as you can see it did a really

good job at defining that this area needs to be like this right very good

flow in the whole mesh the symmetry is very good even the head is very good

resopologize and we have a really good flow over here alright and the legs are

fine the knees are not a strange then ascension like we did over here we can

do that manually but the whole workflow is good but one thing and it was just

with one click but we did this like in how many hours like two three hours like

remeshing the whole body takes two three hours at least right well we did it with

one click and we got this fantastic result one other thing is that

this mesh that we have is very simple we don't have facial features but when we

do have facial features the manual resopology comes into play and is much

more nicer I also another thing is that for you being and for making seams if I

click on here as you can see the flow is not very good right so we do you want

this to be around the neck or like this right so we do want that I mean did I

make sure that we have a flow over here around the neck as you can see all right

and I can easily select it and add seam for unwrapping our body over here so

that's one thing that the quad remesher isn't really good at but you can always

go in and for example select manually the edges and go manually for UVing but

this makes the whole UVing much more easier because you know how the flow

goes and all that alright that's it I wanted to show you let's

select this one all right now let's delete this one as well and let's hide

this now we have resupply spider-man that we did manually let's do a

resupply of the other parts I wanted to start from the upper part so what I

want to do as you can see we have a solidify modifier over here what we're

doing duplicate this all right then let's change the name over here so we

know the name so I want to call it eyes white all right and then let's call this

one eyes red you can name it whatever you want I want just to quickly if I see

it over here quickly know which objects I'm on and then I'm gonna remove the

solidify modifier all right then I have this mesh that I want to resupply

then I'm gonna set a quad count so I think 100 is enough for these things and

I'm gonna turn off symmetry which is not what I need over here I'm gonna click on

remesh and remeshing is done very quickly and I get this very very good

geometry so I click on this one and then ctrl L and then copy modifiers now

the thickness has been added to my mesh over here let's turn off our frame to

see what we get over here so I think I think 100 was not enough for this mesh

it seems let's go for a little bit higher like something like yeah

something like 300 and let's select on remesh and now I think that's good

enough so let's press on ctrl L copy modifiers and now the modifiers have

been copied let's see how it looks looks okay so if we add a subdivision modifier

it is gonna be much nicer we're not gonna add it right now keep everything

low so computer doesn't cry and then we can go ahead and delete this we have a

good topology for our this object over here because we did this manually if you

remember we added something like a topology we added something like a

topology we added a plane over here and added all these modifiers all right we

have a really good geometry for this area and then we can go for this one

over here let's do this jacket again let's go for 1000 again because it was a

good count let's go for X symmetry and click on remesh it let's wait for the

remeshing and now the jacket has been remeshed let's go for this one set it to

1000 again X symmetry remesh let's see what we get it's a much denser topology

so it takes a little bit longer so yeah we get a really really good result

well this is pretty impressive yeah that's topology is amazing right now

here the flow is amazing I like it so we can go to the next object right here

we have a curve I think or no actually we masked it it seems and topology over

here is not good so let's do it again same workflow duplicate it remove the

solidify remesh it I think 200 is enough for now for this one X symmetry

can be on for this object and this remesh it let's see what we get and that

is pretty impressive that's amazing so let's copy modifiers and we get a built

over here with amazing topology all right and again if we add subdivision

surface modifier is gonna be much nicer we are using very low geometry and that

is good actually because in games if you want to make it for games that isn't

necessary so these are curves we don't need them curves are like with come with

great topology we can always decimate them to get a more better optimized

topology later on this is a cube so we don't need to retopologize it as it

supposes this one 200 seems very low so let's change it to 500 and X symmetry on

and let's retopologize it let's go around to see what we got to see if we

can get anything better I want to click on retopologize again so it's gonna

retopologize this one again all right and yeah I got a better better result by

retopologizing the retopologized mesh all right so let's to make some let's

make some comparison over here as you can see the lines are much nicer over

here it seems and we got a much lower topology actually hmm I kind of don't

like that because here we don't have we don't have the edge over here that the

first retopology did in this area so I'm gonna stick to the first retopology we

did and let's go down over here to the shoe and we have to do every part again

so let's do this one I think 100 is quite enough X symmetry is not

important here and let's remesh it and that's good enough for the shoe legs

these are curves so we don't need to retopologize let's delete the mirror

modifiers all right the mirror modifiers let's delete them I deleted some of them

before recording over here we're gonna add their mirror modifier after joining

all these options together for now let's just have one shoe it's much

better to work with now let's just apologize so same workflow duplicate

remove the solidify and remesh amazing and ctrl L copy modifiers and we get this

result we can go ahead remove this duplicate remove solidify remesh get

this result pretty good ctrl L copy modifiers remove this one all right

okay now we can go ahead and do the other parts let's go this do this one

duplicate remove solidify remesh copy modifiers

duplicate remove solidify let's increase the number of code counts and

let's remesh it duplicate remove solidify remesh and copy modifiers

as you can see you have a very good topology in this area with some clicks

this is for let's do it for this one this one doesn't have any modifiers I

change it to 500 because it's a much bigger topology and let's remesh it and see what we get

amazing results so this one now change it to 100 and remesh

all right now this one remains so let's remesh it

I have 200 seems to be low so let's go for 200 and that's good enough so let's

go around if you see an object that we didn't apologize

all right let's turn off wireframe and see the result as you can see now we

have to shade the smoothness to see better but after imagine after adding a

subdivision level how smooth these are gonna be because the topology is very

nice then I got a very good results and now if I go to wireframe again I have

all my objects in good quality so let's disable the shrink wrap for these two so

let's disable shrink wrap for these two for now okay now I have a good topology

all right I forgot about this one so let's do this one again

okay now we have all our mesh with a good topology with already optimized topology over here and all our

objects are now optimized to used in production to use in animation games

and anything you want all right we can even go lower than this if you wanted to

because these are all quads we want to go lower if you want to optimize it

optimize it better you can go to modifiers to decimate we have an option

here unsubdivide so it's gonna unsubdivide the mesh and because this is

all quads it's gonna work out pretty well so if I go twice as you can see it

did made some unsubdivision made some triangles over here as well because that

the quads were not enough so it depends on the objects but you can do unsubdivide

if you can if you want also if you added a subdivision level to another object

and the later on you likely can use this method to go back to where you didn't

have the subdivision so now we'll be what I want to do I want to I want to

and I added multi-res for the body I wanted to add multi-res for all these

objects as well so I'm gonna click on this on these objects and then I'm gonna

click on the body then click on ctrl L copy modifiers now all these objects

have a subdivision level multi-res right now this object have multi-res and the

workflow now is that we go to sculpt mode for each object with alt key we

change this the object and with multi-res we can sculpt high details on the

object while we have a very low resolution on the base mesh right so

that is really good so that's it for this video I will probably we have to

probably work more on the shoes over here we have to adjust the objects

furthermore and then join them all together and add multi-res for the whole

shoe to work on so that's it for this video and this method as you can see we

did it we re-supologize all the accessories in a short amount of time if

you wanted to do this manually you would have time you could have taken us a few

hours so that's pretty impressive and yeah that's it for this video until next video goodbye


