# 162 — Rigging

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 25 — Character Creation: Final Project |
| **Bài học** | Rigging |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 50:07 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Rigging** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- rigging, posing và chuẩn bị character cho animation

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

Hello and welcome guys. So now let's get into the rigging of our character now that we have

a proper lighting to showcase our character we can get into posing the character but before

that let's let's add a solidify modifier for this one this is a bugging me a little bit

it's just one plane so let's add a solidify modifier and add a little bit of thickness

over here and then let's go to normals over here and turn on auto smooth because these

edges are not smooth now we have a very nice shape we can also go and let's go over here

and bevel these edges

let's turn off solidify and I'm going to click on these vertices and click on control shift

B to bevel the vertices it doesn't seem to be working in this case so let's just leave

it as that for now we're going to later fix it or make another one so now we have this

over here all right now this area is much better but still we need to make it more smooth

these areas are not what I like I need to add some more edges but not the purpose of

this video let's get into rigging our character now so now let's go to shader mode and I'm

going to hide everything else that I don't need for now so for example lights I'm gonna

hide them then I have this over here so only the ground and character so now let's go and

select the character on select the ground let's hide the ground as well let me see the

ground is in the main or here so let's change the name to round so we would select it much

easier and then hide it so now we have only the character I'm not going to explain too

much about the rigging process as I because I showed how we can rig the character with

rigify but if you don't remember we have to enable an add-on that calls with that comes

with blender and it's called rigify so enable rigify and then you have some more options

armature section like these ones so first if you remember we need to make it let's enable floor we

need to make the character over here to be above the world origin so let's make it be above for

the originality so that's good and press ctrl a scale so we don't get to any and it's problems

later on let's press shift s selection to cursor so now it's not doing as we like it to do and no

worries just let's move them a little bit like this I think that we can fix the problem though

with setting the origin to geometry so all the objects origins with will be back to no it's

not fixing the problem let's just do it manually bring it a little bit like in the middle so it

would be in the middle it's just for the armature nothing else you can set it anywhere else actually

it doesn't matter that much so now let's shift a armature and go and make a human metric all right

I'm gonna duplicate this human metric as I showed you before we can use this as a reference to how

to place our bones for example for the hands bones over here and you can you can just look at your

bone over here to see how you need to place them so now let's go to this one over here and scale

it down this armature okay and the series armature so we have two metrics let's make a new

collection and call it Rick so we can simply go here and turn them on and off I'm gonna put this

one also in the rig so I can't go and turn them on and off okay now let's select this one and

scale it down and up based on the scale of the character so that's good and then if you remember

we need to go to object properties viewport display I selected to be in front now I don't

want it to be in our way because when we look at side view we need to look at our main rig so for

now let's just move it over here so it wouldn't cause us any problems when we go to main frames

like it front view and side view okay and now let's start adjusting these over here before that

press ctrl I escape now be sure to make sure that you enable x symmetry and then this select these

bones and bring them to the location of the character so now let's bring these up a little

bit and select these all together and bring them all a little bit upside so it should be straight

okay so these lines over here these are the spine lines remember don't move them individually

always select them with each other so it should be in this order like this one over here it's

actually interacting like if you see over here there's another sphere they should be interacting

otherwise you get some errors so now let's remove the unnecessary bones like this bone

over here and then the facial bone just go to side view and delete these bones and also the

ear bones also let's press alt Z and this bone is unnecessary for us too so still it is that

won't do so those are the ones then you need to delete and now let's go to front view and

complete the main bones position I want this one to be like come from the neck so we can go ahead

if you if you have any doubts can go here and see how these bones are set together so like this

bone over here the last one should start from the above the jaw right so I see many people have some

they don't know where they should place the bones but the simplest way is just add the metal

ribbon and just see how it is placed all right so now we have our hip bone so hip one should be

around the groin area so let's place it around the groin area and now right now let's place place

this one which is the knee bone in the right location let's go to right view now and let's

select this bone which is the ankle bone and bring it back like that select the knee bone and bring

it back out a bit to select this one and bring it to the middle of the foot as I like this one and

bring it to here to the end of the foot like that and then we have this one over here which should

be behind behind the ankle like that and that's the foot so feet are quite easy to rig but the

hard part is the hand so let's go to a little bit to up higher which is to top view with seven

and now we have a let's adjust the elbow so let's go here and let's select the arm here the body and

the armature and then press shift H to hide everything else I want to just see the body

over here I want to adjust it on the body so I don't care about the clothes or anything else

just the body just to make sure that you play placing the bones in the right direction of the

body and then this is the wrist bone so now we have a job to adjust these hands hand bones these

finger bones so select each set of bones with L and just adjust them accordingly so this one

goes all the way to here this one goes to the knuckle of the thumb and this one goes to the tip

of the finger and now we have to adjust it in every view so just select each bone and adjust

it accordingly so you need to make sure that the bones are inside the mesh to make the hand area

easier I'm just going to select all of these and press shift H to hide all of the other ones

now let's just focus on the hand hands are tricky to get so let's select this one with L

and bring it over here let's rotate it and bring it over here and this one should be the knuckle area

so for the hands just go to the front view and then the side view and then adjust them

accordingly and then this one should go all the way up to here so now let's adjust this one

bring it over here rotate it a little bit bring this one to the knuckle area bring both to the

knuckle area over here let's adjust these ones as well to make things a little bit faster

this one needs to be in the middle so this is the

this is the bone that works with the IK and you can flex your hand

bring it bring the whole thing down a little bit so I think I can't do that

because I don't have all the other ones we'll fix that later let's focus on the fingers

so

now it's just about adjusting these bones in the right location it's always a bit tricky

to bring all of them into the mesh because how of how the it's so curvy in the hand

so now let's bring all of these these bones these tendons actually the bones

uh these are these represent the tendons of the fingers and then bring them up

so let's press alt edge and spring this these two these bone a little bit

towards the middle so it wouldn't be too outside because if it's too toward the outside of the

hand it might not work we need to make these a little bit

go inside too so yeah that's fine if you have any um if you have any doubts if you have placed

your bones correctly or not just check it with your bone reference

so we can do that right now let's just check it with our bone reference over here

you can just bring it in and check it like that okay each bone how they are placed

uh it doesn't yeah it looks good to me so we have placed all these accordingly so

the next thing i do i go to here and click on the info disable the in front to see if

any of these bones are sticking out like this one over here so this is a one way to see if we are

placing the bones correctly so it shouldn't be sticking out should go inside the mesh for it to work correctly

okay that's that's good enough this part this part

uh is not that sensitive i think that's okay so now we have all these

meshes let's go and again one more time shift edge these two to see

the body and yeah as you can see we have a problem here so these are two

to the back of the character

and now i think we got it so now

all the bones are inside we can't over type it push it inside to push this one inside

these two needs to incur to interact to each other so remember that

and we're done so now let's press shift edge

i'm sorry alt h to bring everything back

and now let's uh let's press on our armature over here and press

all ctrl a and scale it first and then go over here to object properties of our

armature and click on generate rig before that i want to make some changes to this

this zipper i wanna first join these together so let's join these two together so now these two

are joined and now let's join these these two are joined and now i'm gonna duplicate these two

okay press m and move the duplicate to backup so we have a separated zipper in our backup

that if if anything goes wrong we can use but right now i want to join these to the

hoodie and this is the jacket so i'm gonna click on this zipper and join it to the jacket because

i fear we might we may encounter some problems

all right now that's good

okay let's save ctrl s and let's do the same thing over here as well to the jacket ctrl j

so let's undo that let's undo this one too we forgot to apply the modifiers over here

let's undo and go back until the point that we didn't join these together so now that's fine

so now select these both together ctrl a and visual geometry to mesh

so now these cubes and these zippers should not have any

modifiers and now let's join them together again

takes a little bit time because of the modifiers it seems uh so let's go back

and let's go to edit mode stand off edge linch and

i need to add some loops over here so we don't lose the shape

and we did lose the shape with that

so

okay i'm just gonna select this one select this one press right click and subdivide the subdivided

like three times and then bring this up with double g i'm gonna with double g

i'm trying to slide this edge to the top so we have some problems over here

it sticks to this area let's see if a problem solves now after subdividing it

let's press ctrl j

and yeah we have fixed the problem over here but these areas are not looking good though

you may need to subdivide them all like one time or two times

i think one time is enough i don't want to make it too much because after joining with this one

it's going to add the multi-resolution

let's wait for blender to do its thing

and now we have a much better result so i'm going to right click and shade smooth

now we have a much better result

okay let's do the same thing for this one as well so let's go to

over here and i want to click on accept this one so let's deselect this one

but it seems i can't do that though so it's a bit tricky

let's select this one with l all these ones and press ctrl i to invert the selection there we go

now we have all the selections except for the zipper over here and then we can go and subdivide

two times now let's go out of edit mode and connect it to here i also need to move these

a little bit closer to the jacket

so

okay let's do that in a sculpt mode so

and all right now let's select this one and press on ctrl j

and now we have our jacket with the whole zipper and all now it makes it easier when we

do the rigging i want to also do the same thing for here so these are now one object

this is one object so let's select them both and let's make sure the location is

we're quite happy with the location

uh that's good for now so we can always change that later i think um when we when we join these

together they are gonna they're gonna have some face sets so we can always go and with those face

sets we can grab them and move them around to whenever wherever we want so now let's select

these one and select this

and we have assigned the material right yeah

select them all and join them with the hoodie

so i should have probably added it to the backup but these are really easy to separate if i needed

them later on so i can just go to edit mode and press l on each of one of the each of these and

press p to separate them so that's no that's not hard it's a better idea to just add them

to backup to if if anything goes wrong we would have it so i want to do the same thing for here

let's uh let's add another subdivision level for these

i think we need to bring it up

so

let's add another subdivision level here

this one doesn't work it seems

or maybe it did so let's uh duplicate this make two subdivision level probably because it's a cube

need two subdivision levels to

make these edges go away

so let's apply these ctrl a visual geometry mesh let's apply these shade the smooth i still don't

like these edges and now it's fixed okay now connect it to the uh shorts

and i was also connect these all together so they should the these parts to the bolt ctrl j so

let's go here and

uh disable simplify

i don't know why but i feel like blender is a little bit laggy more than usual

i think now it's better anyway we have all our objects in level one so we don't need to simplify

to but now select and now these are all joined together and we have also separated the shoes so

now we are ready to go to the next step make sure all of your objects on all level one subdivision

level let's go to render mode and see if we have any problems

by joining these areas

and that seems okay so now

yeah make sure the subdivision is level one and then we are good to go okay so now

let's save first don't forget

let's save first don't forget

okay it took a lot of time to save let's uh delete this one

and now let's select our armature and go here

all right sorry guys i had to stop recording for a while so select your armature and then click on

jazz rick and unfortunately we get the error over here spine number four cannot connect

uh this is one of the common errors that you get while working on these ricks so all you have to

ricks so all you have to do you have to do go to object properties so it's an in front and then we

need to fix the problem over here as you remember in the lock we just saw it said that spine number

four is not connecting so the thing is these two spines need to be aligned together all right like

okay if i undo that and make a reference for ourself like this bring it down here for you to see

okay these two bones over here are interacting to each other as you can see

all right so we need to make them to be uh to be inside each other although now the

also now that i'm watching our reference i see some problems here as well so these two

should not interact so i'm just gonna move it a little bit outside like this these two should not

be inside each other and then this one over here the hip one should be it should have an angle it

should be upward so we don't have that here so let's fix that quickly and it should be

in front like that so yeah every time you have some doubts just use references and you just

eventually it becomes much easier so now let's fix our other bones so let's bring these down

a little bit like this and then we have a problem over here as we saw we got an error we need these

two points to interact to each other so we can go and bring them approximately but the thing is these

two needs to be exactly inside like these two needs to this needs to be exactly in the middle

so that is hard for us to do the easier way is to use shift s and shift s and bring cursor to

select it so now the cursor isn't selected but actually we need to adjust this so it's not in

the wrong direction so i want it to be here based on the reference yeah it's this spine is like here

higher than the color is fine now so i think that's okay press shift s cursor to select it

and now our cursor is over here and then we can select this sphere and then shift s selection to

cursor and now if i press alt z as you can see this is exactly in the middle

so now let's hope that that fixed the problem this is one of the common problems that you may

encounter with generating the rig let's go to object properties and then press on generate rig

and see if it does fix the problem yeah fortunately it did fix the problem so yeah

let's hide that and now let's hide this one as well we don't need it let's hide it and now we

have this generic trick over here what i want to do i want to do something different than what we

did uh in the last time we did that rig uh in my experience doing the rigging of the clothes and

of the clothes and accessories uh in a different like doing it uh not in one go so we just gonna

do the body now and just uh let me just show you so uh let me just show you i i'm gonna click the

body okay i'm gonna click the body over here and then i'm gonna click on shift click on the

armature we just made the this complex rig and then i'm gonna click ctrl p and then i'm gonna

click with automatic weights so um doing these parenting takes a little bit time so i'm just

gonna uh pause the video and then resume it when the parenting is finished so remember just the

body all right we just selected the body and the rig all right and then ctrl p

and then with automatic weights so i'm just gonna do that then i'm gonna resume the video

all right it didn't take as much as i think it would it took only just uh six seven seconds

uh so now we have a rig only the body so if i go and click this rig and go to

the rigging now i should have no problem with moving the hand right so that's okay now

but i want to do the clothes now differently so let's uh select all actually let's select

the body again the armature again and let's press ctrl i to invert the selection so what i just did

i just selected anything else except the body and the armatures i won't select my clothes

and then select the body with shift as an act as the active object and then press ctrl l

all right ctrl l and then i'm gonna press on transfer

uh mesh data if i hover my mouse you can see transfer data layers weights edge shops etc

and then this one is of data i think let's press on the data transfer right there and then on data

type i want to transfer the vertex groups so let's click on that vertex groups it's going to

take a little while so let me explain to you what i just did i just um told blend i just made the

vertex group automatic vertex group with uh connecting only the body to the to the armature

a bit automatic vertex groups and then blender made some vertex groups for the body and then i

linked those vertex groups from the body to the clothes so it makes it easier for for us to rig

it and do us less weight spending there are some options over here too that we need to fix for

example here you can you can leave here uh to vertex near so that's fine for us it's gonna

get the mapping from the nearest vertex but over here source layer we're gonna select on all layers

all right it took it might take a little bit of what it's what so it's gonna uh

kind of copy and paste all these vertex groups to our clothes okay and we can change it by name

that's okay that's fine and then if we click anywhere else this uh window is gonna go away

so be careful so we're gonna click anywhere else and then i think we're good so now

we have codes as well with the vertex groups as you can see the same vertex groups as we have

for the body but there is one step left and that is let's select the body and the armature control

i to invert the selection so we have the codes again and then select

the armature and then ctrl p and then go with empty groups all right now

that connection is done so we just told blender that we don't want to add any

vertex group because we have added our own vertex group and copied it from

copied it from the body so now it's time to go to the pose mode of the armature with ctrl tab

and let's uh let's now

move the ik of the hand to see how it works

all right that's not ik

this one is the ik it's so slow right now i think it's because of the recording but yeah

okay

all right as you can see the code is also moving with

the code is also moving with our armature so our armature is now successful but we need to make

some changes uh but subliminal is so uh really laggy for me with armature right now and we can

kind of pose it in this way so let me go over here and then click right click here and video memory if

let me go over here and then click right click here and video memory if you have the same issue

you need to see how much memory blender is taking all right so it's not taking a lot of memory

our system memory that's what i want so it's taking around seven gigabytes of memory and that's

not good that's not what you want that's a lot actually so i'm gonna save this all right

and then because we're past the point of kind of sculpting and

and texturing and all that we don't need uh too much

of on this sub so i have it to 254 and it's too much to blend there is saving the history of

every action we're doing and it can't handle it so i'm going to set it turn it to like

10 all right send it to 10 and now let's close this tab by closing it it's gonna just

uh save it itself and then i'm gonna save blender and then uh close blender and open it again to

reset the undo history and let's then now let's see how much memory we're gonna have over here

so let me pause the video for now all right i just opened up blender and uh now uh when i

opened it up it was a 5.8 of memory i put my gigabytes i just went to the setting and also

enabled simplify with zero subdivision so now we don't have any subdivision subdivisions for our

quotes over here to make it to look more like the subdivision level over here we can go and

go to shape and click apply base for anything that is sticking out maybe or

not looking like what we are expecting it to look okay now let's go to over here and do the

same thing simplify and zero let's work with one for now and see if maybe the problem was with

the undoing so yeah uh let's go now and uh check the rigging so let's go to pause mode with control tab

we can work like this

uh it's too slow so maybe changing it to

this one now so

okay i think uh we may need

let's bring down this one maybe so

we can also click on this one to not see it

no it's not working properly

it's too slow it's not working probably properly so uh

uh yeah i think i may need to restart my computer and then we'll see what happens

so guys because because i'm recording and because uh uh we have a lot in our scene right now

uh it is taking a lot of ram from my system but uh yeah i did a couple of things so first we

uh reduced undo steps all right that helps and then what i did uh we can i i went to external

data and it turns off automatically pack resources and i unpacked all these so i click on unpack

to unpack all these things and it made the memory to go down and then i went over here and uh put

uh put a disabled simplify in here all right and it just went and manually

disabled multires with this click over here so i just disable it so by disabling it it makes uh

blenders to not calculate it every time when we move the armature so now we can uh if i enable

it for example as you can see it goes up and blender needs to calculate this motorist although

the level viewport is set to one set to zero but you need to calculate it so i just set it to uh

disabled it and for each one of these that had also subdivision level or multires i just disabled

the multires all right and i went and also disabled other collections so there's a

difference between hiding a layer hiding something all right and disabling so if you go over here

and click on this to have it you have this option to exclude a whole collection or an object from

showing in the viewport so blender is not going to calculate this if i click on this blender is

going to calculate if i go and enable this over here blender is not calculating it but it's not

showing it in the viewport so it's with this option over here it's just gonna hide it but

blender is going to calculate so that's one um that's a side note to know about these options

over here is that if you have like a laptop or something and maybe your system can handle it too

uh you can use this trick so i just disabled all these other layers

and now it's much faster my blender works much faster

and now let's go to pose mode and now let's see if our efforts

were good enough so let's press g and now it's better now it's better

let's see that's what i like but now it's better now we can do some poses all right

so yeah let me save it and uh yeah that's it for this video in the next one let's go and

do the pose of our character we are going i downloaded the pose like this from the internet

just searched in my moran's pose just that and i selected this one to do this pose over here

all right so until next video goodbye

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
