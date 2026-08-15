# 176 — Adding Simple Textures

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Adding Simple Textures |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 31:25 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Adding Simple Textures** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
- environment art, asset assembly và scene organization

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

Welcome back, in this lesson we will start with texturing our ground.

We won't be adding details just yet, but we will learn a little bit about the Node Wrangler

and how to use it in Shader Editor.

At first, as you can see here, I adjusted the blocking of the scene a little bit, tried

for it to be as readable as possible, nothing crazy happened, I didn't add anything new,

just added, we just changed the rotation and scaling a little bit of different elements.

As you can see here, I settled with this ground, and this is probably the ground we will be

texturing in this lesson.

Don't worry about anything being messed up in this stage, again, it shouldn't be taking that long.

What it should be, is a guide for you to move along in your scene, so you know where things

roughly are, maybe these are the elements that you will be settling with for the final outcome.

Again, we will be creating our own assets anyway.

So for this lesson again, we are talking a little bit about the Shader Editor.

So I changed this viewport from viewport to Shader, Shader Editor, I select the ground,

move outside my camera, and then I will isolate my plane by hitting slash.

As you can see here from the bottom, I'm hitting on pad, slash, not the backslash, slash, there we go.

The reason I'm isolating my object is, it's faster, you know, from my experience, it's

faster than hiding the rest and then unhiding everything back again.

It's much more convenient, and let's say that you were essentially inside maybe your camera,

and then you isolated your object, once you hit the slash again, you get inside where

you were before.

So it's more productive, more convenient, in my opinion.

So I'll hit slash, I will add a new material by hitting view, and then I'll switch to viewport shading.

By the way, this is Eevee, so any settings you would like to change in this, you'll just

switch to the render view, switch to Eevee, and anything you change in here, and these

settings will be changed in here as well.

Back to cycles, we don't need to change anything just yet.

Quickly here, when you are interacting with the shader editor, I highly recommend you

open or have the node wrangler add-on on, simply because it gives you so much shortcuts to work with.

You can show the hotkey list here, you will not get lost.

A lot of them, doing them manually is just fine, don't get intimidated by it.

We will only talk about a bunch now.

So we isolated our plane, we added a material.

The first thing we need to talk about, we are actually organizing the scene with the

node wrangler, more than we are actually progressing our texture.

The first thing you will do typically is maybe hit control shift T, and that will give

you the chance to add in a texture.

So I'll go to our texture, assets, materials, and select all four.

It doesn't have the albedo, but for the purpose of this lesson.

Yeah, so no albedo, just for the purpose of this, I'll just add this for the base color.

I just want to see anything in here.

Not roughness, normal displacement maybe, yeah.

Just, yeah, it needs to be scaled a little bit.

So I will hit tab, I'll go into tab.

Everything is selected.

I'll hit U, smart UV project, and then scale to bounds, and then hit okay, and then we

will have the texture here.

Again, this map is incorrect.

This is like an example of a map that you shouldn't really get.

What I did, of course, is that I looked at the references, and you should do like, you

know, from now on, essentially.

When looking at references, of course, you get a hint of how the texture looks like,

what it's made of, what's the color of it, where it exists, essentially, you know, and so on.

So as you can see here, like sand there is a little bit softer than the sand at the top, and so on.

We're looking at, you know, yeah, essentially where it fits in the environment and what it's made of.

If we look here, this is a real photo, we see that, you know, sand has some debris,

maybe some rocks in it.

The same in here.

When looking at, I'll open up here, I'll open the, our websites, the websites that we looked

at before, maybe I like this texture.

So I hover over, make sure that I have all the maps, all the maps needed, and then go

ahead and download it.

If you look at this, this is more, this is a gravel, this is not, this is more in a environment

that's, you know, man-made than it is a desert.

But again, inside Blender, we get to change and manipulate a lot of, a lot of color and

shape of these things.

So you shouldn't really pay attention to color, although, you know, in real life, this isn't

how sand might look like.

So sticking to something that looks like actual sand from the start is going to be a better option.

I believe here that I downloaded a, let's see, coarse assets, materials, a dry ground.

This only has four.

So this is an example of a bad texture.

Like you shouldn't, you shouldn't be, you won't be able to work with this alone.

Even like, if one of these is missing, it's fine, but the albedo is like the most important

texture you should be looking to get first.

So ground texture, this is a better example.

I believe I got this from a PolyHaven.

So we now have the five maps, AO, color, or albedo, displacement normal, we'll be using

the normal DX, roughness.

Yeah, I believe this is from NoAmbient.

We have the preview here, ground 0.3.4, oh, this is 0.3.3, the one next to it, let's search

for it, ground 0.3.4. There it is.

It had some, you know, some little stones here and there, you know, just some discolor

to add some randomness to it.

Of course, we'll be mixing more than one texture, but just for the purpose of this lesson, we'll

be only adding one.

So let's actually delete all those.

I hit X on the keyboard.

Again, you can look here at what I'm doing, the shortcuts I'm clicking, I'll hit control

shift and click, control shift T to go into the folder.

I'll hit AO, color, displacement, normal, roughness, and then have them in.

And look at that, we have it here already.

Everything looks great.

So here's a few things to troubleshoot your plane.

First of all, you need to make sure that you have your scale applied.

Again, that's not really like something you should really do, but as you can see, like

there are some jagged edges here, this is because of course we don't have a plane that

is really smooth maybe.

Make sure that you have UV unwrapped your plane.

You can try using UV unwrapped first.

If it works, then that's cool.

If it doesn't, I recommend using the smart UV project and then select scale to bounce.

That's actually better.

Yeah, that's better.

The second thing you need to pay attention to is you should have your normals facing

outwards and not inwards.

You can do that by clicking on this, by viewing your viewport overlays and then hit on face orientation.

Again, I already had this as a favorite, so I right click it and then add to quick favorites.

To access quick favorites, just hit Q and then select face orientation.

This is looking good.

If it's looking like this, then not.

When you try to interact with an object like this, especially when scattering objects around,

it's usually going to be scattering on the blue side.

Make sure that you have your faces facing the right way.

To do that, you go inside the edit mode, you hit shift N. With the faces selected,

make sure that you are in face select mode and then shift N. That will flip the normals.

You'll have a menu at the bottom here.

Just click inside or if it already flipped to the right side, you don't have to, but

just so you know, you have to make sure that the color you're looking at is blue.

Again, I'll disable the face orientation.

In terms of scale and such, again, you don't really have to apply the scale.

Just so you know, if you're facing issues even after adjusting your UV and face orientation,

maybe consider applying the scale and location.

By default, when connecting a texture, I believe the generated is connected.

This could cause you some issues if you maybe sculpted the object or maybe scaled it a lot

and then UV unwrapped it.

Of course, if it's driven by UV, then UV should be connected.

Make sure that this is the option because most of the time I struggle doing that.

So UV and generated and normals, like essentially the first three are connected to the geometry.

However, it's not.

This means that if we go to here, changing anything with the object should make it, you know,

will change the texture with it as well, unless we have a different object to control that plane.

So if you have maybe a sphere and then move that sphere aside, it's so far away.

Let's reset the cursor origin.

I hit Shift-S. I have a pie menu.

Again, go back at how to turn on the pie menu.

Hit Shift-S to reset the location.

This one also had some location changed.

So I will apply everything and then Control-Alt-X to reset the position again.

And from here, I'll connect objects.

And as we can see, nothing really changed.

If I hit the sphere, however, now we're looking at something different.

So by scaling that sphere, we are controlling our texture.

Let's actually apply and scale it.

Oh, no, don't apply.

Yeah, I'm not sure if it's possible to drive it a little bit better.

Of course, you can adjust the scale accordingly.

Like, you can add a...

I just hit Shift-S and then Shift-A, sorry, and then S and then type value to add a value node. Plug this in.

And this could be maybe 5, 10, no, 1.

And decrease that.

Then increase that.

Maybe decrease it yet. So 0.1, maybe. There we go.

And now we have this, you know, as a good size.

Of course, it doesn't have to be a sphere.

Let's delete that and then have this disconnected.

Let's actually delete it, delete that as well. Shift-A, empty.

And this is a little bit more convenient.

So in here, I can select our empty or maybe from here, empty.

And then while the empty is selected, we can manipulate our texture.

The reason being is if you maybe, you know, you don't really want to go inside the shader editor,

keep looking at it, you can actually just get rid of this area

and just have full control of your texture from this, you know, sort of knob.

Just pay attention that if you like move your object, the texture will not move as well.

So maybe select them both, have the...

Select your object at last and then rotate them all together.

But yeah, again, this could be like one way for you to manipulate textures if you want. I'll just...

I'll use the old-fashioned way and manipulate it manually.

Go back to shader editor, select that.

Let's go back to UV and delete our empty.

So let's now talk a little bit about organizing and doing some shortcuts

and, you know, learning more about shortcuts.

I'll hit N to hide the side menu.

And then what can we do here?

Well, first of all, you can see here that we have a frame.

This frame could be created essentially by if we duplicate these.

Actually, Control X, Control V. Oh, whoops.

Control C, Control V.

Now we have them outside the frame.

To make this frame, hit Shift P.

And now you have them inside a frame.

You can hit N, I believe in node, color.

Yeah, you can change the color from this area.

Maybe this is the node responsible for the color of the ground

and the ground is, you know, is made of grass.

Then you can change it to the color.

Then from afar, you know where to look at.

The reason being we're doing this simply because...

And you'll see that the more we add in more and more textures,

the more we'll be, you know, interacting with, you know,

interacting with much more nodes

and having them organized is much better.

So this was framing your nodes.

The second thing is to maybe like you added this as a normal map

and this should be a bump or displacement.

What I'm going to do is Shift S and then find our bump map.

Let me see here.

Should be a shader, no vector, bump.

And that will maintain the connection, of course,

and we'll just change what's in between.

Normally you would do Shift A and search, then bump.

And then, you know, oops.

And then you will have to connect,

maybe actually like quickly connect it here,

but then you will have to connect it there.

As you can see, like it's much more convenient

to actually hit Shift S and then change the node in between.

We can copy the settings of a certain node.

So say that we needed to add in an image texture.

So search image texture.

Now I can see that, you know, maybe this is a box,

you know, not a flat.

So what I'm going to do is I hit this

and then select the one I want to copy from at last,

Shift C, then settings from active.

And this is going to be added to the frame

as well as have the settings of it changed.

This is really important because, again,

these are only like for your own productivity and convenience.

The more you add in, the more you'll need,

the more quicker you need to be for you,

you know, to work with nodes.

To make a reroute like this one, this is called a reroute.

And if you drag from it, you're dragging.

If you want to move it, you just hit G

and you're now moving that reroute.

To do that, you just hit backslash

from the node you want to reroute from.

So maybe I'm adding this texture to both maybe albedo

or base color and metallic or specular.

So what I will do is backslash. Oops.

Yeah, to loose outputs, to linked outputs.

And then I will have this controller

or rerouter to work with.

I can now move this and then easily connect it

to whatever I want rather than going back

simply because the more nodes you'll have,

the further back this will be.

And then you'll have this much closer to work with.

Maybe you can frame it and then name it something,

you know, give it a name and just maybe this is a texture one.

And now you are working with this texture one

rather than going back, finding it and so on.

Sometimes this will be inside a group.

Actually, most of the time this would be inside a group

and you'll have different groups.

And, you know, just need a quick output to work from

and rerouting it is a much more convenient way.

We can quickly switch connections

if two nodes are connected.

So when we try to switch this to UV,

again, this might have been automatically

connected to generated.

What you can do is Alt-S

and this will switch the connection downwards.

If you select, I should have had this selected.

Let's see if we have these connections.

Connect with generated, I'm hitting Alt-S, Alt-S.

And then if I have this one is active and hitting Alt-S,

oh, yeah, you should connect it from the ladder.

So again, you know, you can switch from these by hitting Alt-S.

This is a better example, hitting Alt-S.

Of course, if there is like only one thing connected,

maybe select these and Alt-S.

I'm now switching between the material output

and the principle BSDF.

If you want to severe a connection,

just like I did right here,

I hit Control and right-click and drag.

This will draw a knife, you know, knife cut,

and this will severe the connection between two

or cut the connection between two connections.

If you maybe want to duplicate this

and maybe add this mapping to a different setup,

maybe actually have these copied actually.

But I still want to maintain that connection.

If I hit Shift-D,

I lost that connection with that mapping node.

What I want to do is Control-Shift-D,

and that will maintain that connection as well as the frame.

And now I can have a new shader and textures

going from that setup as well

without, you know, having to map them all together.

For organizing, it's pretty straightforward.

If you want to say like not show roughness in a map,

this map is pretty rough.

Let's see if this is going to make any difference.

I'm hitting M right now.

So I muted essentially this plane.

Now it has essentially nothing in that.

Actually, muting the albedo would make much more sense.

Yeah, there we go.

So I'm only now looking at every map but the albedo.

So I'm looking at the roughness,

normal, displacement altogether.

By the way, displacement will not show up in Eevee.

It will only show up in Cycles.

Actually, let's quickly...

It doesn't really matter, but, you know, just so you know,

we don't have a light here.

Let's add a sun real quick or maybe an area light. Light, area.

I'm in the shadow.

Yeah, it should be combined.

Remember to switch.

And now we have this...

I believe it has a little bit displacement then in default.

Yeah, it's a little bit more obvious in Cycles.

Yeah, anyway, now that you've made your texture,

you know, and you're satisfied with the settings,

most of the time you will not be interacting

with what's inside here.

Like whatever is here is just there.

Maybe you'll be adding like after this.

So maybe a color ramp maybe.

So this will turn to black and white essentially.

I can change this color to back to yellow or to my liking,

you know, but again, I'm not manipulating these.

So what I can do is just select them

and hit control G to group them.

Now I'm inside the group.

So what I can do is just tab to go outside.

And then I have the colors of all the maps going outside.

What I can do again is hitting control Alt G to ungroup it.

And then everything will be back to normal again.

So control G, tabbing, pressing tab.

I'll go outside and inside the group.

And then with the group selected,

control Alt G will ungroup them and maintain the connections.

This is, of course, like this is taking much bigger space.

You will not manipulating these anyway.

So having them in a group is a much more convenient.

Hitting, so sometimes you might add these manually. So hold on.

So you might be adding these manually

and you'll have to work around with that.

You know, what you can do is hit S for scale

and then on the X to bring them all together as much as you can.

But a much quicker way to do that is just hitting shift equal.

Of course, because this is on a frame on its own,

it's not really organized.

Let's do them, let's do this with these notes instead.

So shift equal, bring these, you know, we'll pack them neatly.

Let's remove them, oh, sorry.

If you want to remove a node in the center,

what you can do is while holding Alt, drag it outside.

That will maintain the connection.

If there is a connection that could be connected

and then you can just still have this to move it around

on a, to a different texture.

Yeah, that's it for now.

Again, look at the references,

pick a texture that matches the general form

or shape of your textures.

I might be changing this texture later on,

simply because like whenever you add in a texture

and then you look at it in 3D,

it's not as, you know, as fascinating

as it is in the website.

You know, it's not 4K, it's not, maybe it's not detailed.

Like this looks much better essentially

and having this would be, you know, better.

Again, when you download, we went into the settings

on which to, what things to download and whatnot.

Remember to have all five maps.

Blender will automatically read the names of the textures.

So whatever is called a color will be in color,

AO and AO, displacement normal and roughness and et cetera.

So yeah, go ahead, add your texture.

Next up, we will be adding it to object

and see if we can like manipulate or see a little bit.

Maybe actually start with lighting and some modeling

and then going back to texture.

Yeah, we will see next.

I will just hit the slash to go outside.

I'm now inside here.

Oh, just a quick tip.

If you, if you, your scene starts to get heavy,

even Eevee, you can go back to your viewport shading

and from that menu have textures selected.

I believe this is going to show the texture

you have highlighted.

So this is roughness, this is normal, this is displacement.

Of course, Albedo is the much more convenient.

You lose a lot of details.

You don't know how rough this is or not.

But again, you save yourself a lot of time

or you can go back to Eevee and with,

rather than having the render pass to show combined,

maybe diffuse light, what's it?

Or diffuse color.

Yeah, and this is going to be much lighter on your PC.

These are a few quick tips for you.

If you're facing any issues while using,

while texturing your ground,

the scene will be, will get much heavier than that.

We are already at 2 million faces

and we are using 660 almost of memory.

It's not demanding any yet, but it will be soon.

So get yourself ready, prepare your textures

and let's keep going.


