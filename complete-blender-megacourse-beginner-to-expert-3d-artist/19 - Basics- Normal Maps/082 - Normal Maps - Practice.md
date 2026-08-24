# 082 — Normal Maps

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 19 — Basics: Normal Maps |
| **Bài học** | Normal Maps |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 25:02 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Normal Maps** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
- làm quen Blender, workspace và workflow cơ bản

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


So now that we understand a little bit more about materials and textures in Blender,

I want to come back and readdress something about using high-resolution sculpts. Because

you may have a nice high-res sculpt here that you want to add some color to, add some texture to.

But in order to add any sort of texture information to a piece, it needs to have UVs.

And as it stands, this high-res object is... I still have my multi-res modifier,

but if this was a totally high-res object here, it would be too dense for us to UV.

So let me just confirm I have a backup. Okay.

Okay, so this was my sculpt. This was my re-topology.

And then this is what I added the high-res sculpting to.

So let me just work on a duplicate here, because it's always good to maintain backups.

I'm going to just press shift and D to get a duplicate of this high-res sculpt.

And I'm going to move the one as it is.

Let's move it to backups.

And let's just disable the visibility of it and the selection of it for now.

Okay, so I'm going to apply this modifier here, control A.

Okay, so now if I tab into edit mode, this is the density of my mesh.

And this is just much too dense for us to come in and UV unwrap.

So we need to know how to transfer this information onto a lower poly version of this object.

Basically, we are going to use normal maps to transfer this information from our sculpt

onto a low poly version, which looks like this.

So a little bit more about normal maps, they are these 2D image textures.

They have this sort of purplish hue to them.

And what they're doing is faking the light interaction between your object and any lights

in your scene to give it the appearance of being a high resolution object.

So what we are going to do is take all this high resolution data and bake it down so that

we can apply it as a normal map onto this piece.

And thereby, we will still maintain the look of this while having the geometry of this piece.

So looking at this normal map, this is our brick texture.

Looking at this normal map, this is our brick texture normal map,

which gave us the nice bumps and divots.

The reason why it is the color it is, is because it is a channel packed map.

So every digital image has a red, a green, and a blue channel,

and sometimes a fourth channel called alpha, which controls opacity.

So basically what this texture is saying is through packing these textures together,

it is telling Blender how light should interact with any surface that has this map applied to it.

So let's look at the red channel.

The red channel is going to tell Blender this is how these bricks should look

as if the light were coming from the right side here.

You can see the highlights here and the shadows on the left.

So we know it's being lit from the right.

The green channel tells us how these bricks should look if the light is coming from the top.

And the blue channel is telling us how these bricks should look

if the light is coming straight ahead.

So if the light were here shooting into the screen from the center, how would these bricks be lit?

So when you combine all these textures together, all these black and white textures together,

you get this color image.

And Blender can sort of decode this by unpacking this and then calculating,

okay, where is the light in the scene?

And how do I interpret how to light this surface

based on these pieces of information that I have been given?

So that's kind of a lengthy explanation, I know, but it is quite interesting.

And I think if you understand how normal maps are working,

it is easier to work with normal maps.

So let's proceed back into Blender to see how this is done.

So just like with texture painting, to create a normal map

texture image, we need a texture to create it onto.

So let's open our shading editor.

I apologize.

First, let's duplicate this object.

And I've turned off selection for it.

So I'm just going to turn selection back on so I can select it.

And I'm going to duplicate it and drop it right where it was.

And I'm going to move it out of my backups folder.

So yes, we have our original sculpt.

Maybe we should rename these.

Let's say dynatype.

Yeah, whatever it's called.

This is our retopology.

That one's fine.

And then let's just, yes, Hyrosculpt is fine.

Okay, so working off all duplicates here, so we don't mess anything up.

We have our duplicate Hyrosculpt that we're going to work off of

and our duplicate retopology.

So the first thing we're going to do is apply all these modifiers to our retopologized mesh.

We can do this by right clicking, set and convert to mesh.

I'll just apply everything.

Actually, let's quickly undo that.

So luckily, Blender allows you to undo sort of this application stuff.

And I have some unused modifiers here.

Let me just disable those.

And let's check.

Yeah, so let's change the target here from the dynatype sculpt to the sculpt here.

Okay, so now we're matching the shape much better.

And we can just confirm that there are no errors or anything with the shrinkwrap modifier

by hiding our high res.

And we can come into edit mode, and we can enable cage on the shrinkwrap modifier.

And just making sure that we're not seeing any errors in our mesh.

I think it looks pretty good.

Okay, so let's tab out of that.

And then this is the mesh we want to work with.

So let's apply these modifiers.

Convert to mesh.

Okay, now we are ready to roll.

Let's just quickly smooth the shading here.

Okay, so now we have our mesh.

Okay, so we have this nice mesh here, and we can UV unwrap it, and we're going to right now. So let's add.

So I remember I started this from a sculpting template, so I'm missing some workspaces here.

But no big deal.

We can just add them.

Plus general and UV editing.

General and UV editing.

So let's add a checkerboard pattern to this so we can see how our UVs are unwrapping.

So on the UV editor, I'm just going to press N to bring up the side panel,

and I'm going to open the text tools add-on.

And let's change it to a 2K texture.

And let's hit checker map.

Obviously, this is a mess, so let's start unwrapping here.

A lot of times you want to mark a seam on the line of symmetry.

However, I don't want it to go all the way through the face,

because then the part of the model that we look at the most will have a big ugly seam through it.

So let's press C on the keyboard to bring up the paint selection.

And let's hold the middle mouse button and drag to deselect across the face.

We'll leave it right where this jawline is probably. That one.

And unwrap across the hair.

Let's mark that as a seam.

And in fact, we should probably mark a seam around the hairline.

I think that would be a good place for it.

Probably around like that.

Let's mark that there. Let's mark.

I'm just looking for the edges where they fit most tightly in the creases,

because that will make it much less noticeable.

Mark these seams.

So I want to match these as closely as possible,

so I'm actually going to come down by actually going to mark them.

I want to match these as closely as possible,

so I'm actually going to come down by a couple here and mark it,

because I think the hairline comes down like that.

Just come around like that.

Okay, so let's just fix these seams here to match a little bit better.

I think it was like that.

They don't have to be exact mirrors of each other,

because this mesh does not have exact mirrors.

It's fairly symmetrical, but it is not exact, so it's okay if your UVs don't match.

UVs don't mirror each other perfectly.

It's just kind of a neatness thing.

So I just want to connect up here through these lines up to this.

So let's CTRL-click to select the shortest path. Mark that seam.

Let's see, it came sort of up first.

Yes, it came up.

And CTRL-click and mark seam.

Okay, let's unwrap it and see how this looks.

Pretty good, actually.

Some stretching around the earlobes and things,

which you can fix, certainly, if you want to.

And then I wouldn't worry about stretching inside the eye socket,

obviously, because there will be an eye piece here

that you will not be able to see that. Okay.

Yeah, I'm just seeing a little bit of compression here.

So you may want to separate that.

You can also visualize the stretch of your UVs

by coming up to the Overlay dropdown

and enabling Display Stretch.

Now, everywhere that is blue is good.

And the more we increase to, I think it is red, eventually.

Yeah, so it'll increase to red the worse the stretching is.

So we have a little bit of stretching we can see right here

because we're starting to get into the greens.

And it doesn't look like shifting these around

makes it any better.

It causes the same amount of stretching.

So we probably need to come in here

and relax this a little bit.

Let's see if that fixes it.

So yeah, that fixed it right there.

Let's see if that fixes it.

So yeah, that fixed it right here.

So we can do it on the other side as well.

So I know that I need a seam right here

in order to relax this.

So now we just need to connect this here.

So that's reduced a lot of the stretching right here.

But otherwise, this is pretty good.

You know, you can spend some time trying to lay this out evenly.

And I know that some character artists

will tend to make the face slightly larger

and take up a little bit more resolution

than areas like the back of the neck

because you just don't need as much resolution.

Because you won't be looking at it.

So feel free to come in and arrange these

however you like.

I was able to up-res the face slightly

without having to compromise on resolution

on any of the other pieces

just by arranging them a little bit better.

Okay, so we don't need this checker anymore.

We can remove it.

But we do need a texture to bake onto.

So let's just add a new material.

And let's call this Normal Map.

Or something meaningful.

And now let's come into our Shader Editor.

And we need to add a new texture to bake onto.

So let's add a new texture here.

Let's call it Normal 1.

Let's change it to a 2K texture.

I can turn that off.

And then we can leave this as a blank.

We don't need a grid.

We're just going to replace this image anyway.

So the process of transferring

the details from a high-res object to a low-res

or to a normal map that can be applied

to a low-res object

that process is called baking.

And it is something that Blender does

I mean, it's a push-button sort of process.

It's not an artistic process at all.

But what we have to do

is on this low-res object

let's even retitle this.

We need to have the texture

that we just added here

in order for it to

basically it's going to overwrite

this blank black information

with a normal map that looks like this

but obviously with our details on it.

So let's add that texture into the material.

So just Shift-A, Texture, Image, Texture

and from the dropdown, let's pick our normal 01.

Now we're not going to connect it anywhere just yet.

If you do, you'll get a couple of errors

and that's just something that you have to be aware of with Blender.

Just don't connect it yet.

I'm going to come back into the UV editing mode

because I have this nice big image

that I can look at.

And I'm going to turn off the display stretch for the moment.

I'm seeing I actually have my UVs

clipping over a little bit.

Good thing I caught that before we bake anything.

If you bake something with an error like that

you might just have to come in

move your UVs and then

redo the baking process

which depending on the complexity of your model

and the resolution of your texture

can take a few minutes.

So what we need to do now

is come into object mode

and it's very important for this process

that the high poly object

and the low poly object

are exactly in the same spot

because Blender is going to

analyze how to calculate

this normal map based on

the location of your mesh.

So if one of these

were to be moved off to the side

it would not bake correctly.

It would come out blank essentially.

So to access

our normal map baking properties

we need to come into the

output tab on the properties editor. No, I'm sorry.

We need to come to the render properties tab.

Just one above it. And this is

all of our render properties

which we're going to get into

more in a later video

but the first thing

we need to do is change our

render engine from Eevee to Cycles.

So Blender has a couple

of engines that it can use for

rendering depending on your needs. Again

for the moment all you need to know

is to change it to Cycles.

Eevee is I think the more modern version

and you will not be using

Workbench but there are

some functionalities that are not present yet

in Eevee so we just need

to change back to Cycles.

Cycles is still supported

it's fully functional

and it still gets updates so it's

not outdated or anything. It just has

a different tool set than Eevee does. So we need to come

down to this Bake dropdown and

let's look at this setting a little bit.

So the first thing

we need to tell Blender what

we are baking. We can bake a variety of

different types of texture maps

but we're going to change this from Combined to Normal

because we only want the

height information. We don't want any of this color

information. Well not that there

is color information there. And then the

second most really important thing you need

to check this box or this bubble

here that says Selected to Active.

And then you want to

change your Max Ray Distance

probably to something like 0.1

So the Max Ray Distance, the way

this works is that

Blender will come out from

each of these faces

on the low res object

it will basically

the process is it will draw a line

a certain distance

outwards and inwards

from this face and if it

hits anything from the selected

object it's going to write

that lighting, that normal information here in

your texture. So

in order for it to hit

anything the ray needs to be above

0 so that it actually moves out

a bit and can hit the other objects.

Alright, so once you

have that set I think everything else

should just be the default

all we need to do is we need to

select first our high resolution object and then

shift and click our low

res object and it is very important

that the low poly object

is your active object

so the whole point of this selected

to active is that we're going to take

the information from our selected

object and bake it

to our active object

so once you have

that ready to go you can just hit

bake, you'll get a little

progress bar right here

just give it a minute looks like it's

going to take a little while so I'm just going

to pause the recording here

okay so it took about a minute to

render this result now if you have

the texture slot

you created open you will see it here we have some

pretty big issues with

how this is baked but

let's address that in a moment

we'll have to adjust

the settings here but

no big deal but let's look at how

we can visualize this information

now on this model

so let's come into our shader mode and

now we're going to connect this image

up with the material so let's

just shift A and add a normal map node

connect normal to normal

and color to color and you'll

see that information is present here

now we have major errors and

we need to change our bake settings to get

this to work properly

but you can see that we have this

high res skin detail here

is now visible on our low poly object so let me

try to play around with

these settings a little bit and get those working okay so

I paused the recording because

all I was doing was

basically trial and error with

these settings to get a good bake

so this one isn't

perfect there's still some errors here

but it is much better than what we had before which we

can see here in the image viewer

here this is what our normal map looks like so

if you have to rebake this

a few times it's totally normal but

if you leave this connected

you'll get an error down here that says something

about circular dependencies

blender just really doesn't like having

it appear here while it's trying to bake it so

just disconnect this image here

and that error will go away so let's

view it on our low res

object now by connecting it back up again

there we go it looks pretty good you see we have

all this fine detail that's sculpted

that is not actually present on our

model but we get

the look of it anyway

alright so that is

how you will bake a normal map for a

high poly sculpt to

a low poly model

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
