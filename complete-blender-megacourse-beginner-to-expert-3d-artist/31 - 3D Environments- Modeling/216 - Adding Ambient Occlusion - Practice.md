# 216 — Adding Ambient Occlusion

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | Adding Ambient Occlusion |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 37:52 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Adding Ambient Occlusion** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
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


All right, welcome back.

Now what I've done is that I copied all these previous objects into one new collection and

I named it ready.

And you will find this in an advanced lesson.

The more like you skip into lessons, you will find that I did that step.

But just because like I didn't do the ambient occlusion part, I just prefer to go back into

that scene and do it real quick.

After applying all the modifiers, I found out that the best thing to do is that let

me reset that origin first and then show the shortcuts.

So what I did is that I selected everything.

And then of course, if you have a modifier, like a mirror modifier, and then you apply

a part of that, like modifier, and some things are just mirrored around one object, and you

can find that if you apply the transformations, the origin of the object will be shifted.

And thus, the mirror modifier will also shift.

So what I prefer is that you apply the modifier first, then you apply the transforms, then

you go ahead and just if you face an issue with applying the transforms, just make sure

that you make them separate objects.

I will again do that in the destruction part video.

But I thought you should know that in this step.

And then now, like everything here is applied, curves are transformed into meshes and just

have everything in that one neat collection.

You just have to have like the modifiers applied and make sure that you have like some,

like you know, just stay below 5 million polygons or faces if you can.

Like 3.8 is quite fine.

Another issue I face is that you can see that this, like you can have this artifact of like

back face culling sort of thing.

But if you look at the options here or the settings, you don't find such an option.

Like it usually you'll be seeing that in the viewport shading in solid mode.

So if I click on here, you can see this option that says back face culling, which is on.

I don't think it will be. Yeah.

You can see from the bottom here, there is a face there.

But because we are facing the back of that face, we can now see through that face. Yeah.

From the top, it's still there.

You can see it here.

We can see through that object, but it's still there.

So what's happening here isn't really something with the face, with back face culling.

Because I applied the modifiers, something happened, which the settings of the material

actually changed.

So I'll quickly switch back to Eevee here, and we can see that we can see through the object.

What happened is if you select the object materials or material properties and scroll

down here, usually you'd find settings about the shading and the shadow of the actual object.

But you won't find it here because we are in Eevee viewport.

So I'll quickly switch the render engine to Eevee, and with the object selected, I'll

just scroll down back to material properties, and you'll find it under settings, blend mode

and shadow mode.

So I'll just switch that to opaque, and that should fix my issue here.

That was also an issue here with that part as well.

But as you can see, it now has been fixed.

I'll quickly switch back to cycles, and if you already know, then the settings remain

the same for both Eevee and cycles.

Now with the ambient occlusion, now I have two options.

Again in the next lesson, I actually combined everything here and made it one object because

there is like a quick way to destroy things.

But for here, however, even if I combine objects, I don't really think that this is like an

optimal thing to do simply because whenever you want to go back into edit mode, it's quite

difficult to be able to interact with objects.

And the second thing is what we want to do now is that we want to add the ambient occlusion.

And if we click here to look at the materials, this is an immense amount of materials to

keep track of on different objects.

So I'll just prefer to go the long path that's going to guarantee me having a good result at the end.

I don't think I started adding ambient occlusion to any of the materials here.

I'll just, if I select everything, no, I can quickly here preview only materials, not Orphan Data.

I can search for the materials here. That's fine.

I'll just try my best into finding the AO map.

The UV here has shifted a bit. That's fine.

We don't have to worry about that.

I just want to make sure that these models here or these objects are my final object

that I will be interacting with in the final simulation.

Let me desaturate that a bit because it should be rusty.

Let's leave it as is.

This looks fine.

I should also change the bottom. There we go.

This looks fine.

So yeah, on we go.

I believe we started with that part and yeah, we have the setup here.

So let me quickly show that again.

That looks fine.

I can probably change some settings here to make things look a bit better.

Viewport, make it 64.

And let's keep the Bloom off.

Shadows, make that 2K maybe.

And this looks fine.

Let's switch back to Cycles.

I'll hit Ctrl S.

Now, what we wanted to do is, you know, to specifically add rust there.

So I'll just quickly find a rusty material here or there.

That's a rust material, I believe. There we go. Yeah.

I can then maybe select all that and then Ctrl G to group them.

And then we'll go outside of that group and make sure that I name it.

Do we have displacement? Yes, we do.

We don't need that. Output.

I'll just make sure that I remove displacement.

We don't need displacement. Okay.

You can go inside here and name it rust.

And then I can go in here.

And what I want to do is that I want to mix between these two textures.

So the texture of the like that texture and the rust texture with this map as a mask.

So I'll hit Shift A and then group rust.

And I now have the group by holding Ctrl Shift and right click and drag.

I can just combine between these two.

And I now, if we remember from the texturing chapter, just by moving that factor around,

I'm just switching between the two textures.

But what I want to do is I want to limit the rust to that area.

So I'll just plug in that color into the factor.

No, into the factor, please. Thank you.

We can see here from the preview that I'm getting that mixture between the two.

I believe this is before the mixing between the like before having the mask.

This is like the gradual mixing between both.

And there we go.

Like now it's something different.

Again, I believe this controls the rust and this controls the noise maybe.

So just let's not have any of that.

We'll just make sure that we can like expand this a bit,

like drag it a bit out so that when you're dragging and holding Shift,

you have a little bit more control over that controller.

And this should also affect the other parts too, which is nice.

Of course, it doesn't make sense all the time.

But the good thing is it's interactive,

meaning that if I move an object into like somewhere else,

you can see that the ambient occlusion changes with it as well,

which is extremely nice.

I really like things that give me the option to do that.

The live changing of like a texture or a detail.

I think I'm facing an issue because of maybe this should be five

and should increase a bit.

Let me unblock them for a second.

I should probably overwhelm the texture here.

But I just want to see with and without the noise texture.

Again, if you remember, we wanted to break that boring gradual bleed

into the texture.

And this was either going to happen with like a noise texture

or we can just...

Let's actually...

I'm not able to mix here.

I can add a contrast and a bright contrast node here.

I just don't want to get too...

I just don't want things to be a bit too complicated,

if you understand what I mean.

I think I'll just plug in that.

Yeah, I want it to be a bit clean.

So just change the position for it to be as close as possible.

Of course, like I could have done this more professionally

and change the numbers here.

But this is quite fine.

The distance is something I can control.

And since I have a color ramp, I can just add that color

into the distance.

And now this is like a ramp from zero to one.

So I can just control that distance.

I think you can just multiply it with...

Yeah, actually, let's do that.

Let's not because I can increase the distance here.

I can just do something a little bit more...

Like it's an extra step, but it's definitely going

to make things look a bit better,

which is mixing between these two with a math node. So let's see.

And instead of add, it's going to be multiply maybe.

And I'll just multiply the color from the noise texture

with the color ramp.

Let's see if this works our way.

I'll leave clamp deactivated until I see how it looks like.

I probably will clamp it because I felt like the rust

is bleeding into the actual texture here.

It's not doing much.

Let's switch to subtract.

Remember to save.

Let me see if this is going to happen. Awesome.

It's amazing that throughout the course,

we've only crashed Blender twice, which is good.

Load in, please.

That's a bit too much.

Like it's all rusty now.

I think I'll just go how I did before.

I'll just down the scale of that to one

and plug in the color here and plug in the color

into the distance.

And I no longer need that math node.

I'll just let Blender load. Delete that.

Now I'm getting that gradual look.

For the texture, it should probably...

I'm just fine-tuning things so that they look...

I'm playing with the scale here.

I can see how it changes here.

Roughness may help.

And distortion, I'll probably leave it like that.

I can do something, which I can separate the textures

from both so the top has its own body texture.

And I can just control that so that it can

maybe make the bottom a bit more extreme

and change the top as well.

But I think this is fine.

Again, this is not my preview.

So just hit control B and make a boundary here

because I don't want the entire model to be rendered.

And I'll switch to cycles.

I'll hit control S and hopefully before I get to render

or just render that box, I have saved my model.

It's going to...

It's going to load a bit before we get the actual final look. I think it's...

Yeah, 64 samples.

That's not too bad, actually.

Yeah, this is way good than Eevee.

I wanted to achieve that on Eevee from afar. From afar.

Let me actually do the entire model.

I think I took a screenshot before

because I wanted to compare it from afar,

like if this actually makes any difference.

And I can immediately see the difference here.

So what I will do is I will just quickly... I'll switch...

Actually, yeah, I can copy that entire setup.

So control C and...

Did that get added here too? I think it did.

But it's a bit too much.

No, this is not a body.

This is the dish.

Yeah, I don't have it. Awesome.

I already copied my setup, so I'll just hit control V.

I think I can get rid of that.

Or maybe not.

I need this as a factor.

I mean, I can plug it, of course,

but I just don't want to keep on wasting time every time.

So I'll just hit control shift and right click

and just drag from here to here.

Yeah, that makes a different one.

This is not what I want. Control Z. I need...

I'll just hold alt and drag that away and delete it.

I'll just control shift click to drag them both.

So like this and that and hit F.

Control shift click.

And I want this color to be the mask. Let's see.

I might, since this is its own texture,

quickly switch back to Eevee here

because things are too close to the actual dish.

The wireframe at the bottom is too close to the dish.

It's getting so overwhelmed with the rust.

So like every ridge here that's going across the dish

is creating that ambient occlusion.

I'll just wait a bit until it loads.

And then, yeah, there we go.

It's a bit too much.

Thankfully though, it's like its own texture.

I can switch between the two knobs

by changing the number here.

I'll change to the black one

and then drag it to the left a bit.

And then switch the other guy

and I want it to be dragged.

It sort of makes sense.

I'll just be playing around with the settings here.

Just making sure that I can maybe come up with something.

I think I can do something here.

I can do something here.

Just making sure that I can maybe come up with something.

I think I can get rid of the noise texture here

because from afar, this won't really matter.

But even these big parts from afar

could be obvious that they are uniform around the actual.

Yeah, I don't want inside.

I want it like that.

I'll just select these two and Alt drag them away.

I'll leave them in the setup

because they would be so useful maybe on these big parts.

But for now, let's see what we can do.

Because I can increase the distance here

and that will help with figuring out

how I want the dish to look like.

I'll quickly here make a new boundary.

Maybe come up closer to the actual dish.

And then Ctrl S and quickly switch to cycles.

Again, it's a bit overwhelming. That's fine.

Just change things here.

And it's not obvious what's happening a bit.

But I think we can look at the reference here real quick.

Some are just straight up missing.

But they sort of maintain that color.

I don't think we really need it here.

I just want to see if it's possible to achieve that result

of having the ambient occlusion be as precise as possible.

I think I can increase the samples.

But I'll be just asking too much from my PC for now.

This doesn't really help.

It's as if it's adding the entire thing to the entire object.

Like you can see here, the moment I raised it up,

it got brighter, like way brighter.

Now it's a bit too dark, which makes sense.

This is the original color.

And this is it now mixed.

I can switch to Ctrl Shift Click here to see it in the preview mode.

This makes sense.

But maybe I can add a bright contrast to that color setup

and slightly increase the brightness here.

Or the contrast, sorry.

Just make this 2 maybe.

And let's see if this works.

So I'll just plug this into the factor.

Plug that into the contrast.

It's still not working as efficiently.

This is completely white.

And so should this be. 6 maybe.

I'm starting to get somewhere.

But it's a bit too extreme.

Like this is getting a little brighter over time.

I don't think that this is the result I'm looking for.

It's too rusty, which may be something you're looking for.

But what I want to achieve is that rust only around the parts

where the wireframe is maybe touching the actual dish.

But this actually is good enough.

I believe this is with and this is without.

There is this slight difference.

It makes a little sense.

That detail, a detail over a detail. This helps.

It's going to be too extreme here just to see if it's possible to make things.

Yeah, I can see it now that this is.

Yeah, this is not the wireframe, but it's like too sharp for it to be real,

which is better than nothing, I believe.

I can maybe add the noise here, noise texture,

but I'll be going too much details into a part that might be viewed from afar.

So I'll just leave it as is.

That's looking fine, I believe.

Yeah, I quickly switch to Eevee here.

Again, it's going to look a bit different than Cycles.

But again, we'll be previewing all that on maybe like a 50% resolution when we render.

So yeah, I think we've done.

Wow, that's really different.

I will just leave it as is.

I'll just control B and a small area here and switch to Cycles.

I just want to make sure that I have a good HDRI scene world.

Yeah, I'm just making sure that it's actually not that bright in Cycles.

Wow, that might hurt my eye actually.

I'll just maybe switch this back to maybe 10.

This is looking fine.

And then what else?

So the wireframes won't need that.

This part would. Main room. Where are you? There we go. Control V.

And then I have that set up.

I'll just delete that.

Or I can just go the casual way of plugging that in.

And control shift and click that to plug it to the main output.

Again, it has some settings here that might need changing.

But I believe that right of the bat, it should be fine. We'll see.

I believe I copied it after we have changed the bottom part. Is it flipped? Control B.

Switch to Cycles.

And let me turn on the world of control B. Wow.

This looks extremely cool.

It's interacting with the wireframe because it's intense here.

You can see the cable here is like as if it was collecting some water over the time.

And then you can see that it has rusted here.

I think I added a mixed shader here with color burn.

I can probably decrease the value here because I want this to be a bit darker. Whoa.

That looks cool.

I might just remove that color burn mix RGB.

But for now, this just looks cool.

Again, I'll switch back to Cycles. Sorry, Eevee. Control S.

You know, things are looking completely funny here.

They are not as they are going to be viewed in the final output.

This could do have some...

I don't think I changed anything with the shader. Plug that.

Plug that in the shader.

I don't think I changed any of the settings, which is nice.

But again, why not? Yeah, why not? Maybe...

I don't think so.

I'll just leave it as is. These... Not even four.

I would say these only two nodes completely changed my model here.

Which, you know...

You always need to be patient whenever you're modeling anything.

It's like the ABCs.

It's like the rule number one and two of, you know, modeling or learning a new thing.

I'll do the same with the pipes or the structure, I should say.

Then plug that shader, mix shader, into the surface.

And I believe this is going to add some things here at the bottom,

which is the thing we pointed out at the beginning of the ambient occlusion lesson.

I think I added this to everything here now.

This has it and this body has it. Yeah.

I'll hit control S and I'll quickly have a render here.

Maybe 512, which isn't that much.

But for the samples, I'll make it 50%.

And I'll go inside the camera.

Oh, I don't have a camera.

I'll quickly add a camera.

Render my viewport here. Control...

Alt control zero to bring in the camera here.

I can probably move around with the camera.

Let me just quickly here change into edit preferences.

Navigation, make it walk. There we go.

And then I'll hit control and ascent grave or whatever is that.

We'll just do this.

And I'll render and get back to you. I'm back.

I forgot that I didn't add lighting.

So I'll quickly just, again, make sure that I have nothing here.

Another thing I wanted to do is that I just wanted to hide my background here,

which we'll be getting into later on.

You don't need to worry about that under film. Transparent. Awesome.

Then make sure that I'm inside the camera.

Hit shift A and add a sun. And in here.

Just turn on the scene world.

And make sure that the sun has some power too, maybe. --. T.

Just quickly here change things a bit.

I will quickly here switch back to shading view.

It can be heavy or whatever.

Just don't want a PC to be rendering twice.

And then the render was quick.

So let's see if it's going to be quick again.

It was 37 seconds, which is quite nice. Let's see. Yeah.

Now we have something that is really rusty.

You can see the details here.

So, yeah, this is ambient occlusion.

I think I can tone down or maybe completely remove the color burn. Like step here.

We can pause that real quick.

And then I'll just plug in that color directly into the color base color here.

That burn is just not.

It doesn't really make sense.

So I can probably switch to another slot and hit F12 just to make a good

comparison while we see how it's being rendered.

Yeah, that's way better.

If I switch to slot one, you can see that burn of the actual image.

Just need that to be rendered.

I can probably pause the render here.

Like I don't need it to be rendering more than that. I'll hit F11.

That's the comparison now.

You can see that this makes a bit more sense.

Maybe this is something you want to achieve.

Of course, what I would recommend is that you don't mix with the complete white.

You can probably mix with like a different texture maybe.

And then add in a mask.

And boom, like you have something that looks like that.

That's completely nice.

So, yeah, I believe this is like the end of texturing our modeling.

Maybe the entire chapter.

Next, we will be performing the destruction of the actual model.

Maybe adding details.

I've missed adding the top part here.

Although it's not obvious if this part has it.

If this model has it in real life.

It seems that it doesn't.

But I think that adding it because we might actually rotate things here a bit.

Like that maybe.

You know, so having it have some details on the top would be lovely.

So, maybe just rotate things like that.

And maybe we're looking at it from that angle.

Maybe the other side.

And then if we have that sort of angle.

And this looks a bit more interesting.

I can probably make the height of that like 2 meter. Or maybe 1.8.

Then you can just rotate that on the X.

And that is like the result we, like the look on maybe real life or something.

Finally, we've ended that chapter.

This lesson came in between two lessons.

So, I apologize for the jump into details maybe between the two chapters.

We didn't really skip through anything important here.

We just applied the modifiers and that's it.

Get ready to destroy some stuff.

Because this is what we will be doing on the next chapter.

But for now, I will see you in the next chapter.

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
