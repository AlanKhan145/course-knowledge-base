# 097 — Material and Shading

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 22 — Character Creation: Fundamentals of Blender |
| **Bài học** | Material and Shading |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 29:24 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Material and Shading** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow

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

hello everyone in this video on the next two videos I'm going to show you how to

colorize your character and explain all the tools you have in Blender to colorize

your character your model and give life to your object and the character you're

creating so in Blender we have three ways to colorize your character the

first one is here material properties the second one is if you go up here and

click you see vertex paint and the third one is texture paint. Vertex paint is not

for coloring all right it is used for vertex groups and for things like

rigging particles and all that so don't get confused by the word paint it's not

for painting the object the only the only options you have in Blender to color

your character are material, vertex paint and texture paint. In this video we are going to

talk about the material. In the last videos I've showed you if you go here

and click on new. Blender will make a material for you and you can

here change the name for example test and then you get this this node here

called principal BSDF. If you click on it you see that you have other shaders as

well. The main shader just for color is diffuse BSDF so you only get color

reference and normal. You can change the color here for diffuse but as you can

see we can't see the color because we are in the shading mode if you change it

to the material preview over here you can see how everything has changed now

our cube is in red and if I change here you can see the changes all right so the

diffuse BSDF is only used for just one color and give the object one color but

the main and we have emission here all right emission gives a glow effect to

our objects but let me add a light here

all right it gives an emission to our objects but when you are in Eevee you

need to enable bloom here so by enabling bloom you can see that the object the

cube is glowing right now if I change the color you can see the difference if

I make a plane maybe you'll see the effects much better right here all right

then the other node you can use maybe use glass or glossy for transmission

and those kind of object for example if you want to make a glass or anything

that the light passes through you use this glass BSDF. Hair BSDF for hairs and

yeah all the other things a specular BSDF for metals but the main thing we

use when working with Blender and materials is principal BSDF you can do

all the things you want with this one node so for example we have emission

here right and we have roughness we have metallic specular we have all those

options in one node so if I change the color here base color I can change the

color all right and then I have subsurface we'll talk about that later

then you have metallic specular and roughness if your object is not a metal

then I recommend to not change these values over here metallic specular and

this one but if your object is metallic well you can increase the value of

metallicness of your object and if I go to 100 you can see that my cube is now a

metal looks like a metal it shines and it reflects light but if your object is

not metal just leave it at zero and then just play around with roughness so by

default roughness is 0.5 if I increase it then I get a very rough shape and if

I decrease it then I can see some reflection over here as you can see over

here then reflects right and it's not rough anymore the other options are not

important for us it is are for various specific situations when you want to

change change some aspects like anisotropic is for and useful for hairs

and all those stuff but now we're not gonna discuss it here then we have all

these we can use alpha channels normals and that's it that's it for nodes okay

then I have if you go over here to shading there is a menu here for us for

just this material so we get all these menus this is the viewport this is the

file selection and this is the I believe UV or image editor all right I

don't need image editor right now or file selection so I'm just gonna join

these areas okay and now as you can see I have my node over here and my

principal BSDF is connected to a material okay if I change the

color here I can again change any color I want so what is this material node if

I click on this the node I can use node if this box is unselected I can use not

but this box needs to be selected so I can use not then I have this one I can

select another materials as well so this is the material made if I select on

material which is another material I get this one so I change it back to test

and this is the material I have right now okay then if you shift click hold

shift a you have some options over here you have inputs for example some values

you can use for your material creation like ambient occlusion can give your

objects some ambient occlusion you may use this when we make our character then

we have vertex color in the next video you're going to use this node to see our

vertex color over here then we have some outputs over here not very useful for us

then we have some some shaders shaders are the exact same thing that we reviewed

over here which was this one so then we have textures very important I'm very

useful we are going to talk about this later after I talked about other menus

because they're kind of important and then we have color to kind of manipulate

the colors so for hue saturation we can change the color to whatever we want we

have some vectors for example bump vector displacements mapping to change

how it looks like the bump vector will allow us to make some displacement and

some bumps into the texture into the material we have here and we have some

converters these are for material creation we're not going to talk about

that and that's it all right so for example with textures if I go here I

have some text these are all some textures that we can use for example

let's use a noise texture if I put it over here and then if I I have these

option the scale detail and all that if I put the factor into base color all

right as you can see I get some shapes over here okay I have some shapes some

noises all right and now let's select color and put the color into the base

color and let's see what we get now we get some colors colorful noises over

here all right these are some noises that we have to control these no this

noise texture we need to use something called color ramp so use a color ramp I

place it over here it connects automatically all right then this color

ramp will act as a mask so if I go here and change this value as you can see

everything will be changed accordingly all right then we have some we have a

add-on in blender called no triangle if you go to edit preference I go to add-on

and search node wrangler then you have this node wrangler add-on which is off

by default you know you need to go and enable it and this add-on is very useful

gives us some very useful features for example here if I hold ctrl and shift and

click I can see the effect this this particular node is having on the whole

this particular node is having so when I clicked on this I can change the output

as well so I want the color as would and then I can see these black and white

values are how they're affecting the material so the white areas like this

area all right the what areas I can I know now that will be shown and the

black areas will be excluded all right this if I change the color here I can I

can change how it will look so that now the the blue color will be shown if I

now ctrl shift click on principal BSDF to view here to get to reset it

basically then you always said then I'll get this material or here and now

I can change the color as well here so to anything I want and this is black and

now I can change this color as well so I get a material like this which is to

notify click I can also change the scale if you want here after setting the

colors here so give some distortion some randomness to have a very much very nice

shape noise if I click on factor and do if I let's see what happens now so they

calculate it takes a little time to calculate now if you go to color round

with ctrl shift click and see what is this doing to our colors right so

nothing nothing changed dramatically all right but in some some cases we can

change these factors these nodes and get other results so another thing I want to

show you is some very basic stuff okay so I want to make another node over here

so if I make another texture here some for example born a texture and I want to

see to see how this texture is affecting so I control shift click and now I can

see how this noise is gonna affect my material so if I change the scale here I

can see these are some cells making some cells over here all right and if I

duplicate this color ramp over here and give it right here actually let's do the

test it and make another color around I want the default one and then let's

go like a distance to factor or color to factor and then let's control shift

click on color ramp and then control the amounts with these two so now we can

change how this will look if I change the color over here

something like this now I know if I if I connect this color ramp to this base

color and then reset everything with control shift click on this bridge will

be a step what my object will look like all right so if I do that color to base

color and then control shift key click then I get what I expected to combine

these two so you make these nodes and you want to combine them there's

something called mix RGB and then we can do this to color to color all right and

it and now blender is calculating to combine these two notes so you had

combined these two denotes and with this factor we can control how much or

these two will be combined so 0.5 is the default value these are to combine with

the same amount so that if I change it to zero it will only show me the color

one for a change so change it to zero it will show me only this one and if I

show if I increase it to one it will show me the second out with the color to

output so change it accordingly to whatever you want so if you want more of

the first group of nodes change it to like this if you like more of the second

group you can change it like this speaking of groups you can make many

groups as you want many nodes as you want like like this this this many nodes

as you want and then you make a box select them and then control G to make

it group so at first you don't see any changes you just see the nodes you

selected but but if you press tab then you can see the whole nodes that you

have and you only have one and node group or here and if we go here to

properties you can also change the name over here so you can change it to like

Voronoi and we change the group name we can do the same with these two tap and

we're out and we have a very much cleaner as well so we can also control G

this this one to have a I think I did group there wrong we can also group

these one as well so you know drill right now so I think that's all I wanted

to show you about shading surely there are a lot you can do for with nodes like

if you search on the internet in blender forums you can see people making a lot

of nodes for things like skin like in blender you can make a really

realistic skin with just these nodes which is pretty impressive all right

another way I want to show you to add a material to your character if you go to

websites like textures calm all right and if you go to library there are many

materials you can use to download and use in blender so for example if you go

here you have these sand cliff and if you go to PBR materials there are some

PBR materials that you can download maps so if you go to painted black wall you

have some maps over here and if you download all the maps so we have color

map roughness map normal map and binoculusion and height all right you

download it download them up and if you go here to import that map you need to

make an image texture for all the maps you have all right an image texture

coordinates and a mapping and you have to select normal vector vector to vector

and then open your texture and then color to base color for your albedo or

your base color all right now we don't have any texture so it's black and then

for roughness you do the same for normal you do the same and for ambient

occlusion for height you do the same and even for height or displacement you need

to add another thing called displacement so and then you would connect these to

displacement to or if it's too like you could the head back just bear with me

I'm going to show you a very good method so this person to dismiss but this is as

you can see very time-consuming all right if I delete this all I want to

show you a very much more faster way so I showed you the node wrangler over here

all right the node wrangler has an option over here if you click on edit

tags for auto texture detection so it auto detects your texture all right if

you have these these these names in the end of your image so in your base color

you need to have the base color base colored the diffuse for metallic you

need to have these names for roughness and all that so for example I've

downloaded these these textures as you can see at the end it has albedo for the

base color it has height for the height or displacement it has normal for the

normal map and it has roughness for the roughness so it matches the names that

node wrangler needs to auto detect your textures to auto detect the shortcut is

ctrl shift and T so if I press on so on my principle BSDF control if I hold

ctrl shift and then and then T I get this option to choose my texture so if

I choose these textures the node wrangler will automatically place these

textures in my scene except the AO so the node wrangler will not recognize AO

so you have to do that manually but I will include it but it won't be

included in these node setup so if I do that now as you can see beautiful like

it has automatically added these textures like I got the base color for

us with the sRGB it's important to use an sRGB color space for a base color

and for the gray channel maps like roughness metals and displacement you

use a non color over here and therefore map it use the normal map vector and for

displacement you use the displacement vector as I showed you so this way we

can have a nice texture like this in our scene and if I want to add ambient

occlusion all I have to do is shift D to to duplicate this texture image

texture and then an ambient occlusion is a gray channel map so I would make

it to non color and then press on press on this then open go to my texture

folder and then choose my ambient occlusion folder then I would connect

these to this as well so I can so all the all the maps are in the same

location let's change it back to non color and then to use my ambient occlusion

I need a mix RGB all right if I use a mix RGB and now select this base color

and from color to color one all right and then connect my this is ambient

occlusion motherboard it says base color but we chose our ambient occlusion over

here okay and I'll select our ambient occlusion to the color two and then

let's for for the mixing type okay let's change it to multiply so we get the

better results if I connect the color to base color now let's wait for blender to

do some calculation now as you can see I have some ambient occlusion which are

some shadows in some shadow datas in the texture itself and then I can choose how

much ambient occlusion I want so as you remember if I make it close to zero it

will be only the color one out input will affect more so as you can see I

have some shadows over here with one so very nice shadows and that way you can

adjust ambient occlusion but here as you can see I'm in Eevee and also I can

enable ambient occlusion here to get a better result in Eevee. Eevee is a real

time engine so it can't really show displacement of these textures all right

so to show these the displacements you need to switch it to cycles and now see

watch what happens when I switch it to cycles and now you can see we have some

height and displacements of these like these edges over here compared to Eevee

right here which is kind of flat all right these over here but these are

textures all right these are not geometry and it doesn't change the

geometry so if I go closer so you might seem that yeah these parts are extruded

out like this way but if I go closer if I get closer you can see that this is a

flat geometry and this is only a trick to trick to our eyes to so we could see

it like this part is extruded so I think that's all about materials here there's

one thing I wanted to show you which is this thing over here if I make a material

if we go down here we have something called volume this is mostly in the

latest chapter we will use it to add some volume to our scene so what is

volume? Volume will add something like fog and those kind of things to the scene

and makes it more makes the object in the scene to have more depth all right

so let's first make a Suzanne over here and then let's add a subdivision surface

all right and then let's make a cube and then let's add a material for our Suzanne

and give it a shader like that

random color not another random color skin color then let's change the

roughness a little bit all right now let's make a cube over here and let's

make our Suzanne in the cube if I go and make another material I want this cube

to act as a volume so I don't need this cube to have a color or all that so I

just remove this node over here and I got a blank shape then I go to volume

menu over here and then I select the volume then I'll have some shaders here

as well for volume I only use principal volume or volume scatter you can use

them both it gives a pretty same result I personally use volume scatter so if I

change if I because it's simpler if I select on volume scatter then we get

this thing over here but we don't see volume much in the viewport shading if I

change it to the rendering it is Eevee right now all right is Eevee watch what

happens it now makes some clouds some kind of fog around my Suzanne all right

and then the good thing is I can adjust these volumes if I scale it up it'll be

adjusted like this and if I go like this we get a scene something like this and

then we have something that's the density I want here over here if I

decrease it to something like this we can get much less effects over here and

you can have more depth with just this volume if I hide this volume as you can

see it's not that much interesting but with volume it gets so much more

interesting especially if you go to cycles you get the effect much more

nicely the other good thing about volume is that you can change the color as well

so if I change the color to blue you get the blue one if I change to green you

get a green one and then the other thing is that if I changed how what the

color of the of my lights I can also make changes in the volume of my scene

and how it will look all right that is that is it for materials I want to show

you just these things and in the next one I am going to we're going to take a

look at vertex 20 all right until next time goodbye