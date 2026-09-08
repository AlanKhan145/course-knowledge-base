# 115 — Lighting Techniques

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Lighting Techniques |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 52:24 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Lighting Techniques** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
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


hello guys so let's continue let's continue with lighting our scene but

before that let's let's go over here I noticed an issue over here as you can

see in the or here we have some floating geometry right here this happens when

you pose your character and some part of the weight paint is not correct so let's

go to let's go to pose mode so with ctrl tab we go to pose mode and then let's

go to item over here let's make it bigger let's go to item over here and

enable the legs control over here I think in the last video we we changed

the rotation with this one over here so let's yeah as you can see as you can see

when we bring up the foot like this the the shoelaces don't don't follow

correctly so let's just reset this one with alt R, alt R will reset the

rotation and alt G will reset the location so we just reset one right here and what

we can do we have we have some some solutions we can separate these

shoelaces as separate objects and then use that method I showed you to to

parent this with the bone itself or we can go to weight paint mode and change

the weighting of this bone over here of the of the vertex group or we can use

another bone over here I think with the IK over here we can reach the same

result so let's go back and see over here and I think if I rotate it like

this maybe and then bring it up with GZ

let's go to camera view with 0 yeah I think we can reach the same result with the IK over here

and we don't have the problem now with the shoelaces so let's make sure the

shoe is on the ground and that's alright

we can a little bit rotate this over here and I think that's better let's

move it down a little bit let's move it down until it reaches the ground and

that's alright alright I think we reach the same result without using this one

over here and the shoelaces are correct right now but if you want to let me

show you the other way so let's go to a weight paint over here control tab

weight paint let's go to vertex group and find the vertex group of this bone

over here I think it's the shin bone so let's go over here and find the shin bone

over here shin left shin right yeah so yeah as you can see with that with this

one over here the shin right these these shoelaces follow along because they're

in red alright but these shoelaces they're in blue they don't follow along

that bone so what we have to do is to just go to over here go to white and

brush and then lighten make this part red as well so these two shoelaces to be

red and that would have I think fix our problem yeah let's go to let's go back

to object mode and now we that we fix this issue a save with ctrl s and then

let's go to render and as you can see it's not very interesting right now so

what you can do with Eevee is to the the rendering the samples is not that

important it doesn't make that much of a difference but you can increase it to

32 maybe I'm gonna keep it at 16 I think that's enough but you can change it to

32 if you want other options that makes it seem much better is ambient occlusion

so make sure to turn it on and you can change the settings as well and bloom

also make a lot of difference when it comes to lighting and all that so you

can turn it on or off it depends to you I'm gonna turn I'm gonna leave it on a

space reflections it's very good when we have shiny things in the scene for

example now the eyes so I recommend that you turn it on and we can turn the

refraction on here as well I'm just gonna keep it off and then another

setting over here if you go all the way down we have color management so go here

and be sure to set it to filmic so view transform to filmic all right I believe

it's on standard I think it's an standard with default so change it to

filmic as you can see this time that is a little bit flat color all right but if

you change it to filmic with filmic and the look when the look is none it's gonna

it's not gonna look good but if you change the look to something like

medium contrast now all of a sudden the contrast is very interesting I usually

keep it at high contrast or very high contrast but you know you can always

change the contrast in the composition all right just so this look

much more lively I'm gonna keep it as high contrast the exposure you can

change the whole exposure of the scene I'm gonna leave it out as it is we can

change the exposure in the compositions which I'm gonna show you so let's set

another view transform that is very useful is false color so false color

shows the areas that are very lit and shows the areas that are not lit as much

so blue means that these areas are dark these areas are not getting enough light

and red means these areas are getting a lot of lighting all right so if I go to

my lights maybe and if I change the strength over here as you can see the

the color changes over here and shows how it is affecting the scene and with

this option you can adjust your color maybe to see which areas are getting

more I just in the light I'm sorry which areas are getting more light and which

areas are not getting lights so let's change it back to filmic and yeah so

yeah I think that's all the things in the Eevee you need to know and in

cycles make sure it is in GPU if you have a GPU and I think max samples for

viewport is 32 is enough make sure to turn on the denoise I use up I use

optics if you have an Nvidia graphic card I think it's good to use optics by

default it's on automatic and the render I use first 128 and then you can go up

to 256 and then 512 I recommend not to go up than this amount anything more

than 1000 or make rendering your scene so it takes so long to render your scene

so keep in mind another thing here is on the performance is tile size and tile

size it it improves your render time I keep it at something like 128 so you

need to search that on the internet and tested yourself like make a scene and

tested yourself and see how it will change the render time all right and we

have also color management in cycles as well if you want that's it for cycle

cycles is not very much anything you need to change or here and it usually

gives a realistic look so usually in Eevee you need to change things and yeah

so in the lightings let's go to the lighting of our scene over here all

right let me first hide this rig over here let's press H to hide it now it's

hide is hidden as we are kind of done with the posing now let's see what light

we have we have a Sun we have a area light we have a point light let's delete

these ones so I want to show you how to light your scene much more efficient so

there's a technique that everyone uses especially for characters it's very good

to showcase your work and it's called three points lighting so to do three

point lighting you need you need one key light and two is a fill light and three

is a rim light you need three lights by these names so the key light is the main

light that is gonna show the most important parts of your character of

your scene the fill light will make other parts of your scene or your

character more clear you don't want some parts to be totally black so need you

need to make some light to make the make those areas clear and clear to see and

the rim light is the light that goes to the back of the character or the back of

the scene you're showing to give some give some light to show the silhouettes

of the character so I'm going to show you how to use these lights first of all

there is an add-on in blender if you go to edit preference and search for tree

there's an add-on here tree lighting if you add it over here and if you go here

press shift a and go to light there's a three points lighting over here and if

you press on it it will automatically make a three point lighting as you can

see over here three these three lights that you can change the height change

the height change this distance and angles and all that I don't like it that

much so I usually tend to do it manually because it gives me more idea about how

my lights are working in the scene so let's keep let's actually delete this

Sun as well and if you go to shading and go to objects we have a background over

here alright we can add an HDR later on so let's do that later but for now I want

to light my scene because as you can see this is quite dark right now and the

only light you are getting is from the background so if I turn it to zero over

here everything is gonna be dark so this is the world properties and this is how

the background is lighting my scene but as you can see this lighting is very

flat and is no good to me alright so let's keep it at one just some default

value for making the character clear and then we can just disable it then

let's make our first light let's press shift a go to lights and we have all

these lights I discussed about them in the fundamentals I usually work with

area lights so let's bring up the area light and then let's go to the

top view with 7 and what you want to do with key line you want to make a 45

degree something like this and put it in this area all right it doesn't have to

be exactly in the 45 degree but you need to have it in this area not too straight

like in front of the character this is not right or in this in the side of the

character a degree like this will work the best all right so let's move move

the move the light to let's press G and what you can do with lights and I

usually do is going to object properties go to viewport display and show the name

all right and now it's area line and now let's change it to key light and now it

is our key light and I can see it over here with the name so press let's press

G Y bring it like here and let's press G X to bring it over here all right now

if you rotate as you can see the light is in the location that I like so it's

over here but it is facing the wrong direction all right so it is facing here

to the thing is area light is that you have to set the direction of the light

and you can do that with this sphere over here so if you drag it over here

and then you go you make the direction over here then the direction of the

light will be here all right the shortcut for this is shift T so the

shortcut is shift T so if I press shift T and move around my mouse as you can

see the light duration will move as well so the other thing you need to keep

in mind is that the size of this matter so if you increase the size over here so

I mean in the light properties obviously data properties of this light and then

over here I can change the shape and change the size the size matters for the

lighting and also the rotation do you matter when it comes to aerial lights

all right so let's set the light like this and then as you can see we

can see the light right now so we need to increase the power so it's increase the power

all right let's bring it a little bit closer so G Y G X and shift T and all

of a sudden we have a little bit light over here all right so let's we can

increase the lights over here the key light and because we don't have an HDRI

this light is doing a hard time to light this scene all right we need like a lot

of power over here so we need another light let's and this is our field light

so let's suppress shift D and then we have duplicated this light let's press G

X and this is going to be our field light so write field light and now we

have our field light with the field light the same with the key light we need

we need the 45 degree over here all right so something like this in this

area and then we can change the location of the light so let's press on the field

light and the shift T and then bring it over here I want to make some areas over

here to be clear all right and then the power should be less than the key light

so as you can see over here we have some shadows some nice shadows on the

other side of the character but things are clear so like that and if I what do

you usually do I set the set every each lights alone so I'm gonna hide the key

light over here and I'm gonna see how the field light is affecting the scene

like this all right then we can press shift T to duplicate this light as well

press G Y and this is gonna be our rim light shift T shift T to change the

direction of the light and let's change the name of this light to rim light

all right now we have our rim light over here and again with the rim light

we don't you shouldn't make it to the exactly to the back of the character or

exactly to the side of the character you need to have it in a degree so it is if

you should could do you like this or even like this with the rim light it's

different and it depends and usually even you make two rim lights like over

here and over here to have rim lights but what are rim lights over here so let

me show you yeah let's make it closer to the character and if I hide the fill

light as you can see now the rim light is lighting the back of the character so

without the rim lights if I turn it off we can't see the silhouette that good

all right it doesn't feel appealing to the eye but if we turn on the rim light

now all of a sudden some details are gonna be shown like some things over

here are gonna be shown it's gonna make the character more appealing but you

need to again the size of these lights matters very much with the rim

lights I tend to make it big like this and let's change it to rectangle let's

rotate it like this and I'm making a very something like this all right

shift T to the back of the head and then the rim light is gonna make your

character so interesting so the light the color of the light is very important

let's change it to red and as you can see all of a sudden this part of the

character makes become so much interesting so much more interesting if

you turn it to any other color like blue maybe you can see the difference or

yellow maybe you can see the difference and then if I turn on the other lights

fill lights and key lights you can see how these lights come together when it

comes to our scene like with just three lights we made a lot of difference for

the lighting and made it a lot more appealing and now we can go to the other

part of the lights which is the coloring the colors of the lights and I

think I'm gonna leave it a little bit yellow for this character and for the

fill light it can be a little bit blue so some warm light and some some cold

light I think it's gonna do the trick over here for an appealing look we can

make it even more saturated something like this if we go to camera view we can

see the differences over here right but now our background isn't isn't being

shown right here because we don't have enough enough light we only made some

lights for the character to be shown over here for the environment what you

can do you can just go around and make lights make a Sun or something like that

but it can easily get a lot complicated and you will have a lot of these lights

over here like look I have only three lights over here and it is already

becoming more a lot more complicated it's making my scene a lot more

complicated and what you need to know about lighting is that you need to keep

your lights as low in number as possible like if you are duplicating like your

lights like this if you're doing this this and just duplicating the light all

over your scene and like this that's where you're going the wrong direction

all right you need to keep them as low as possible when it comes to numbers and

yeah but to light the scene we use something called HDR I so if you're not

familiar with this your I share some photos that have some light data stored

in so and there are three you can search as the internet is your I haven't so

these are some is your eyes you go there and you download them in any you can

download it in any resolution you want don't go above 4k I think I don't I

don't think they might make make that much of a difference but they make your

scenes so slow so 4k is enough for us so what we can do here we go to shading

and then we go over here usually it's on object when you go over here and click

on ward and now we have our ward setting over here let's go to render setting to

see the changes and then as I told you in the fundamentals if you press ctrl T

it will make will make a texture for you with mapping and texture coordinate now

we don't have a texture and it becomes like this so to add an sgri click on

open and define your sgri file in your in your hard drive and then click on it

and so let's pick the 4k one and let's see the changes as you can see now this

is making a lot of changes to the lighting of the scene and then we can

change the strange over here and make it subtle like this all right then we can

change the location like this so with X with this location after our mapping can

change the location of the sgri like this I think I don't like this sgri

studio six I think I like this one better this is much better lighting I

think and yeah something like this works for our scene we need to know that

cycles does a lot a lot of the job when it comes to assure eyes and lighting so

yeah it makes it much more realistic

all right let's let's test out other HDR eyes or we have so I think a fireplace

maybe as you can see these are sure as makes a lot of difference to your scene

yeah I think this one works from my walk fine what I usually do I duplicate

this texture over here like a couple of times and then I select my issue I like

another sure I like it right here like maybe this one then I have some couple

of assure eyes and then I I control shift tab on these extra eyes to see how

the look will be different okay we can also duplicate these ones and use this

to change the location this is too bright but we can always change this

range with this option over here so change that strange here

yeah I think something like this works fine you need to just keep this range low

you're just gonna light our scene a little bit of lighting some realistic lighting especially

you can see how it is lighting I'm sitting in the circus now as you can see our background

is much more late so I'm fine with this let's go to our layout and let's change it back

to Eevee if you want to make the Eevee more realistic you can make a radiance volume over

here and scale is up there is this volume it is indirect lighting like this I need to

keep you careful that these dots over here to not be inside of your mesh all right so

these orange light orange dots should not be inside of your meshes and it should cover

all of your scene something like this and then we go to Eevee and then go down to indirect

lighting and bake indirect lighting and it's gonna do some calculation it's gonna do some

changes to your lighting especially when you have some complex scene we don't have a complex

scene over here we just have one character with a simple background so that's okay for now one

other thing is that if you want your background to be just pure a color but you want the lights

you can use a technique that I'm going to show you so yeah all right so if you go over here if

you go to film over here and change the transparent the background is gonna be transparent all right

did you can do that in Eevee and Cycles both so you go to film and select transparent and then

the background will be transparent but if you just imagine like our camera isn't catching the

background right now because we have a mesh over here but if you don't have a mesh over here and

then if you render the background is gonna be in the render too so you can just use transparent

here but then the background will be transparent then you have to do some composition to add the

background and all that but you can what you can do over here in the world setting of the shaders

you can make something called I think it was camera now lights yeah so you can make a light

path over here and then make another background shader over here with shift D and then mix these

shaders with shift a and session mix or ctrl shift right click drag these two to mix them

together and then these two are mixed now all right and now let's connect the camera ray to

this slot over here and now the background is the color that we choose over here so if you choose

something like green now the background is green if it's choose something like red is gonna be

red so did in this way you can set the background to background color to anything you want but as

you can see the lighting hasn't changed so if I go here and do this some all right yeah I need to

increase the strength over here maybe okay maybe we need to just detach this or here and then yeah

by detaching this factor and then we can change the lighting the location or here and then by

again attaching the camera ray over here of light path to the fact now if I see to now we can change

the light in the background light as well all right skip it at this this is fine and now let's

go to layout and now now we want to make some changes to our main lights so we have a rim light

a key light and a few light let's move them to our lights collection over here and now let's

change change some settings of these lights first of all you don't need this option that I'm going

to show you in cycles but if you want to render in Eevee you need to make sure to check this on

so there is an option in the object properties of the light called contact shadows and this will

make some shadows that are between objects a lot more realistic alright so turn them on for each

light over here and now we're good to go I think then let's go to key light and let's change let's

hide it to see how it affects the scene then let's see what's increasing the s-range and I'll

change the color I think something like something like maybe red makes more sense here that's more

pink let's increase it and let's see how it changes the scene right here then let's go to

rim lights as I said I usually use two rim lights so let's duplicate this with shift T and then

shift T to change the direction and I want to make the direction to this side over here

and now the rim lights needs to be two different colors so rim light 2 I'm gonna change it to red

and rim light 1 I'm gonna change it to blue and if we disable the other lights we should

see the effect so now we didn't see it so it seems that the power is not that much so let's

increase the power over here and maybe bring it a little bit closer to the character and now as

you can see we see some interesting lighting over here so if I move it further from the character

we can see the effect of a move it a little bit closer to the character that is some interesting

lighting coming from this side all right let's do the same thing with this one so this is a blue

lights I want some blue light for this side of the character the back side this way so let's do

that with moving it in the G Y direction G Y and let's press shift T some lights in this area maybe

and now let's increase it to 1500 maybe something like this I think it works

all right it's not making a lot of changes so we need to make some adjustments so I think

these lights also needs 2000 power maybe 250 because the size is big right now we need to

make it more closer the character is making some soft lights over here all right now I think it's

close enough and let's press shift T and let's light these areas over here just move it in the

x-axis and see the difference all right let's turn on the other rim light as you can see we

have some contrast over here some red light from the from this side and some blue light from this

side and now all of a sudden the character makes seems so much more interesting so much contrasts

and interesting lights so let's turn on the other lights the key light and the film light and now I

think the lighting of our character is kind of complete so if you go to here you can see how

much difference we made with these just cheap on lighting with two rim lights and one key light

and one fill light what other thing I do is that maybe you want maybe you want some part of a

character to be more clear and to do that you make a point light so for example I want the right shoe

to be more clear just for some compositions like you want to direct the viewer from like the shoe

then go up and all that so you need to press shift a light and the point light over here all right

and then we have a point lights over here that is lighting only shoe here but you don't need to go

like extreme because it seems fake right now we can increase the radius to make the shadows more

soft right now the shadows are always a bit sharp let's make them softer like this all right and

now let's change the color to something like maybe make some contrast I think yellow is fine

if you increase it you see the effect right here and then if we zoom out the viewer is gonna see

it's gonna see over here and then because it's more lit over here and the eye catches these

differences obviously we don't want that right in this case but we can keep it at white color

and with low power we can just move it between the shoes and this way we can add more clarity

in these areas of the of the pants some nice shadows so as you can see here you can see the

difference over here we have some bleeding some shadows are sharp if you if you turn off the

contact shadows by turning on the contact shadows the shadows between objects becomes more realistic

all right I just tested if you change the subdivision how much difference it will make

it didn't make any difference so just leave it at 2 okay I think that's it for the lighting now we

need to make some changes to the background so this background we have over here we made it we

made a simple material with 100% roughness now because it is 100% roughness it is not

making a lot of changes to the lighting of the scene but if I make it like this all right it is

making a lot of difference to our scene right now it is catching some reflection from the hdri over

here so this is some reflections from the hdri and all that is making all the difference and

if I change the color over here something like green as you can see it is is making a lot of

difference for the lighting of our character so let's change it back to black I wanted to

something like maybe dark blue so blue and dark blue and then change the roughness to something

like something like this right now what we can do what other thing we can do is that maybe maybe

we add some metallic to have some nice reflection over here all right not too much but a little bit

over here like 0.3 right here and we can use emission as well if you want to make some interesting

shapes over here maybe we use it something like this with well yellow seems to work very good

here so let's be use with yellow over here with less saturated color let's change back to cycles

to see how we see it in the cycle and as you can see we have much more nice background and scene

right over here it's much more interesting all of a sudden I see some edges over here but we

didn't see that in Eevee right so maybe hmm we need to render it to see it better so right now

now I want to show you are the trick for lighting so something that makes the scene a lot more

realistic is volume and to add volume a volume adds a lot of depth to your scene to make volume

for your scene just make a cube shift a mesh cube and then scale it up like this and now as you can

see a scale it up to make the whole to fill up the whole scene as you can see it is a cube it is a

mesh right now as he's filling the scene now we can see anything we need to add material for this

cube now so let's add a material and let's call it volume and I we don't need a shader for volume so

let's go over here and then let's go and remove this shader we need to go only to this setting

over here it is called volume and add a volume shader we have some volume shadows over here so

principal volume a volume absorption and volume is scattered so personal volume and it is a very

good shader here you have a lot of options but I usually use a simpler volume called volume scatter

and all of a sudden the scene is just so foggy all right it's because the density is not well

what we want so decrease the density to something like 0.1 and now you can see that our character

is in some kind of a very smoky area so we need to decrease it further if you want to see your

scene in the viewport in the shading viewport if I change it to the but I need to render mode as you

can see we have we can see the the scene all right all right but if you want to see a scene in the

shading you just have to go to the object properties over here and go down to viewport

display and then make the display as to something like wire all right and now your cube is just the

wire over here that is acting as a volume so if I go closer you can even change the location of

this volume something like this if you want so it is acting as a volume to add some depth to your

scene so I want to density to be even much lower so let's bring it to something like zero zero one

or zero zero nine zero zero five zero five maybe beautiful option and the good thing is that we can

change the color so if you change it to red as you can see the lighting the color of the lies the

color of the character the color of the background it's all are mixing together with the color of

the volume but it's too much we don't want that so we want something less saturated for the volume

so we can use something like maybe blue or actually orange is maybe orange is what we want over here

all right so these are our lights they have color and that's why is mixing with the color of the

volume we have over here is giving us this this whole coloring look all right and then if you go

to our scene to a render scene this is our scene right now as you can see this is much more

interesting right now we can also again bake our indirect lighting so to go to Eevee and then make

indirect lighting for Eevee and it's gonna calculate over here I'm gonna render in cycles

but I just want to show you how to reach a much more appealing picture of your character in Eevee

as well and this is real time so this is much better when it comes to real time panning around

and seeing the stuff so if I change it to cycles is gonna be slow right it is doing a lot of

calculation is gonna be so slow and we have to change the density of the of the whole thing as

well because in cycles is different so we have to change the density of our volume we're gonna do

that later on now I'm thinking if we if you're gonna add something else over here maybe well

this is very simple I works for this character but you can do always some scene like make something

that makes the scene much more interesting like place a rock maybe or you place a chair over here

maybe add a story to the background this is something simple and it works for this one I

just wanted to show you some techniques and this is the best way to do it but yeah you can do that

also so I think I have mentioned everything I wanted to mention to recap we made the three

points lighting a field light a key light is our main lights over here so this is our key light

and then we made the field light to make the other parts of the character more clear and make some

contrast between the between the shadows we can do that even further more with it in decreasing

the fill light we are making some more contrast and shadows or even increasing it will make it

more interesting like as you can see some shadows over here are spreading to the left side we have

the set and the size over here matters a lot so change it as well the shape matters as well so

use it in your own use play around with these values and see how these will change it if you

want to use Eevee for rendering always turn the contact shadow on and in the render setting

always turn ambient occlusion and bloom on a space as a screen space reflection as well okay

I think that's it for the color management to filming and high contrast or very hard contrast

as you can see this makes a lot of much more difference but we can always change the contrast

in the composition so I'm going to render this one with a cycle if I go to cycles over here

and now probably the volume is too much so I need to decrease it something lower like maybe 0.1

and yeah that makes sense 0.2 maybe and now it is a much more interesting

much more interesting look as you can see the lighting has changed too because of changing

this strange so we need to maybe change change the color as well you can always

leave it as white if you don't want to change the color of the scene too much

all right I'm gonna play around with these colors and all and then I'm gonna

render it in this in the next video we're going to the composition tab over here and then composites

our picture some simple compositions so yeah that's it for this video and goodbye

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
