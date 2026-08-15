# 185 — Manipulating a Single Texture

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Manipulating a Single Texture |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 41:34 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Manipulating a Single Texture** trong pipeline của section.
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

Alright, welcome back.

As always, this lesson isn't going to be directly towards our project but we will be using that

technique and I just wanted to show you that technique because it's really, really cool.

What we are going to do today is that we are going to manipulate textures, you know, image

textures so that maybe make them fit our scene more, like maybe you've looked into

textures and we didn't really find a texture that really suits our scene but we found something

that like, that is similar to what we want but doesn't really, isn't really in the right

value or saturation or hue or maybe the color, like the whole color is different.

So what we're going to do today is that we are going to try combining between two different

setups, so a texture, an image texture that we've used before and then one of the references

that we've been looking at and they both are different in purpose because we are going

to do that today so let's get started.

The first thing we will do, as always, is that we will be adding a plane.

That plane, we will expand the bottom part and then switch to the shader editor.

Quickly here, I will activate the shortcuts so that you can see what I'm doing.

I will hide the side menu by typing N or pressing N and then I will add a new material, a good

old control shift T and then locate our material, yeah, it has this one.

I will switch to Eevee or shade view to see my material.

Now as you can see, our scene is in the desert and these aren't really, you know, rocks you

might find in the desert, especially like you can see here that there are some tree

parts here, small branches here and there, a little leaf.

This is really like a setup where like you would say that this is a desert part.

So the first thing we will do is, first of all, let's prepare our shaders, delete.

By the way, we haven't used the AO map so far.

I haven't like really found any use of it.

What it does is that like it amplifies the shadows of your texture and essentially this

could be achieved by the normal map.

Of course, you can change that normal map into a bump map and then you can do that.

But again, like it isn't really that significant in my opinion.

So I apologize for making that mistake at the beginning of the course.

So yeah, what we are going to do is that we will look at one of these references.

So it's specifically that one because it has this different shades of brown essentially.

So we have light brown, a little bit darker spots here and like maybe yellowish parts here and so on.

These will guide us into coloring our material already.

So what we are going to do again today is we are manipulating our material.

The usual method of like pressing S and then click and hold and drag through the picture

or the reference is good but not really that good in our method today because simply we

can pick the color or we actually will be picking the color from the reference over and over.

So that would be a tedious process to go through.

So what I've already done is that I saved that image on my desktop.

So what I will do is that import and then images as planes and then locate my image

and there it is.

So I have my image here.

It has a front and back face.

So remember to rotate it, sorry, it should be 90, I'll move it back in the Y, scale it

up a bit, move it up.

Let's what I will do here real quick is that I will rotate the HDRI so that I have the

light yet coming from the front.

I just want the reference here to have as much value as it could or contrast I should

say so that when picking the color it's not affected by the dim light.

Another thing you could do before starting that process is of course you can quickly

We're not going into detail.

We are previewing this in Eevee.

So if you would like you can turn on the AO.

It's not really that much to bloom maybe SSR and then under color management we'll quickly

look through medium high contrast as the default.

This looks good.

Let's see, this looks a little bit too much but it doesn't really matter.

So yeah, you can expand this image as much as you can so that when picking the color

you get to be a little bit more precise.

Sadly with the color ramp, let's quickly look at that random subsurface.

You can hold and drag but at some point it just stops doing what it should do.

So it's like it did that for a second but then it stopped and I don't know why but if

you can see here like it was switching between the two colors but all of a sudden it's now

just not doing it anymore.

I don't know why but yeah, so doing that could help.

I personally don't really care that much.

We can keep on picking and picking colors anyway and you'll know why now.

So what I will do first thing or the first note we'll be using today is the color ramp.

We've used this before but not as something that controlled our color.

The first thing we will do here actually, because you'll see the difference like the

great difference between all of these textures.

So I will move that to the side a bit then move this one back, make it a unique texture

and then I'll hit shift S and search for ramp to add ramp.

Now what that did is that it essentially turned my albedo or color map black and white.

And so what we could do is if you remember these tabbers could change colors.

This is black, this is one representing one and zero.

So I can click on that black color and I can just pick a color.

Now of course the result isn't out there from the beginning.

So let's actually pick the darkest color here which is this dark brown.

It might not be really visible here and then I will pick a bright spot just like this one

and immediately you can see that there's a great change but it can go even further.

What I will do is that I will add another tabber here and then from the bottom here

I'll just keep on adding colors.

Let's do that again.

I had a good red variant here. That's good.

And then what I can do is that I can switch between these tabbers and maybe make the higher

spots dark and the lower spots light.

At first you're trying to match the color of this environment but then you can get sidetracked quickly.

You can have a lot of fun with this ramp.

Look at that effect as well.

There's dirt on the ground.

We haven't achieved the deserty look yet but we will be going to do that.

So I'll just look around for some interesting color here.

Of course because it's at the end of the ramp it won't have that great change unless I move it.

So look at that.

Now we're having things to work with actually.

I can change that.

The location of these tabbers can just help me a lot with determining the color and which

is of higher value, which is of lower value and so on.

Yeah, let's keep the midtone light and maybe I can add another tabber here and then I keep on picking. Let's see.

Let's pick something from the actual mountain here. Let's see. Okay.

This isn't really, yeah, this isn't really something we chose before.

As you can see from the gradient, there is a difference.

There's a difference between these colors.

It's a great difference as well.

This really helps with having some variation in the rocks.

The more you do that, the more you are matching with the environment you're trying to match.

If you look here, this looks completely like a totally different texture.

Of course you can zoom in and look at the branches and stuff like that.

From afar you don't know if this is the same texture or not simply because the colors are

trying to match up and this is only the first node we're trying here.

Like there's a lot more than that.

Let's add another color here.

I will choose that tabber.

Of course you can change it on your own.

Like you can fine tune things up on your own, but I just find it much easier to cheat your way around.

So these two are similar.

So I can just add this in here, add this in there.

If you were to scale these up, let's try and add something a little bit light as well from

this area maybe. There we go.

So you can play around with this.

I need the grounds to stay maybe brownish and for the rocks.

Yeah, this is starting to match.

I can leave that there.

So yeah, now no.

No, you're just playing around here.

You're having fun making that new texture and it doesn't really take that much time.

Like it could take you much more time looking for a texture that looks different or maybe

similar to what you're looking for.

Then if you just adjust one texture, let's bring that behind this. No.

So this could be like that.

Okay, it's too dark.

Yeah, I can do that.

Actually, let's bring up the value here of this tabber.

So it was the saturation.

Yeah, trying to bring it in as reddish as possible.

Little by little, you'll get to have this, you know, little by little.

So little by little.

So slowly you will get into finding that spot, that good spot.

But yeah, you understand the idea.

Like you get to play around with these tabbers while adding and picking the color from your reference.

Of course, you can also do the same method as before, image editor, and then open reference.

But yeah, this is the first method, essentially.

So what we will do now is that let's quickly here move that aside, duplicate that.

Here, we don't need that image anymore.

Like we can actually hide it.

But I will just leave it here for reference, you know, so that you can see like where we

started, where we are trying to get maybe something absolutely newer than both.

Okay, so the second thing we can look at is RGB curves. Let's see. What's that?

That also we have used.

So you should know what it can do by now.

So this is sort of, you know, you get to play with this.

So you have CRGB.

I'm not sure what C stands for, but we have maybe color, but we have red, green, blue

channels separately.

So if I were to bring down or up the contrast or the color of these, you know, channels,

I get to sort of manipulate, like the overall color of the texture.

Of course, it's affecting what's blue and green and red in the texture.

And like in nature, it's almost like in all things.

So if I were to dim the red, so we have green and blue, we can still like play with the overall color.

Let's try and find something natural here.

Of course, at the bottom, we can switch between factor between this and that.

And if you want to go an extra mile, you can add like a mask.

Let's actually try this displacement.

So let's add a color ramp to that displacement as well, so we can bump things up a bit.

No, it's not too obvious because there we go.

I believe it's flipped.

Let's bring things closer to each other.

You know, this looks like a little bit too magical here.

I will delete that center node.

And actually, I had an idea of actually bringing red up.

So I'm going to go ahead and do that.

I had an idea of actually bringing red up and the overall color as well.

So, you know, we're trying to catch something here.

Again, we didn't talk about actually combining all of these methods together.

So that's like a whole another variation of all of these all together.

I can bring in these together.

And they want them to be deeper into the texture.

No, not that so much.

Let's leave it where it was.

Just control the different variations to control here.

Can be absolutely light or completely dark.

There we go.

That looks something crazy.

You know, and of course, that channel is like colorful.

If you want, what we can do is I will hold shift and right click and drag so that I can

make a reroute and then duplicate this color ramp, hide it so that I can click H to collapse

then H again, just don't want it to be plugged into anything.

I will plug that into factor and color.

Actually, I will shift.

I'll shift right click here.

Maybe I can mix it control shift and hold with that.

I just want to see how it could look like here.

Let's see if it gives us any reflections.

So you understand the idea.

Like I can drive the roughness.

Yeah, do that a little bit.

Yes, I'm not sure if it's like obvious.

Let's let's drive roughness actually through that.

And let's see how this looks like.

I'll delete that mix note.

So, you know, I have one map essentially.

Yeah, there is a little bit of like reflection here.

Let's see if we can make it like extreme.

Let's add a sun or just a normal light, you know, light point.

G and the X that I will use scene lights.

I will increase the radius and make this like maybe one.

Let's delete that actually and add like maybe an area light.

Shifty, then increase the size.

Yeah, this is a little bit more obvious here.

I think it's flipped.

So let's flip it back to here.

So it should.

Oh, it's doing the whole thing.

How does this look like?

Oh, it's way dimmer.

It's way dimmer.

It's way dimmer.

This is more like it, I believe.

Yeah, let's try that.

So if I were to pull this, it's making the whole thing more reflective.

Of course, you can mask out the color here.

I'll be adding a color ramp before that and just making these black.

But yeah, you get the idea.

Like this is the second node you could use here.

Like you could use RGB curves to essentially separate.

Sorry to essentially control each of these channels using curves.

So this is method number two.

Let's delete that light.

Everything here, one unit.

I'll hold shift D and the X and bring that plane in the center.

Okay, so what else do we have here?

Yeah, I believe everything we will be using today is something we used before.

So we're using bright and contrast.

What this does is just bringing up the brightness and contrast.

What I would recommend is that you should stay between one and zero,

like in terms of difference between these two textures.

Because as soon as you go behind, above or below a one or zero difference,

things start getting a little bit difficult to deal with.

So just remember to stay in that area.

You can bring this down.

You know, having things way more different than the original texture.

Like this could be, you know, both are like from a foresty maybe area.

But you know, that difference like isn't really subtle.

Like it's a great difference, you know.

And even with controlling the gamma and the exposure here,

like you cannot really get the same results, even when changing the look of it.

Like it's going to be difficult to match these two.

Like essentially at the beginning, you can.

But the more complicated you start, you know, setting things up,

the more it like, you know, it's obvious if we bump the exposure up a bit high,

one of them, you know, looks a lot better without doing that.

And, you know, when blowing the scene up,

you'll have to come back and adjust things back again.

And as you can see, like we already have three textures

that look way different from the original one.

So again, let's leave that light and then move everything back.

Actually, it looked, yeah, it had some effect with us.

So I'll just move things up.

I'll just move things, sorry, to the right.

And then I'll hit shift D and move things back here. Yeah.

Maybe this is something we didn't use before.

And it's called the hue saturation.

I did not split the previous.

It doesn't matter which one.

So yeah, hue saturation, like from its name,

you're essentially controlling the hue and saturation of these,

you know, colors essentially.

Of course, make sure that the value is something

you want to be around.

So 4.5 is something that, you know,

like you are in the middle of the saturation.

This looks like magical or something.

We can actually, again, bring the height information

or displacement map into the factor.

Again, let's add a color ramp.

And then bump things together.

It's flipped as always.

Oh, this looks, this looks good.

Now we can play around with the value. Look at that.

I can change the color as well. Like if, yeah.

I can change like the height of that effect.

And again, looks really different from the original one.

Bump the value up.

Saturation as well.

And this should change the color to whatever you like.

Wow, this looks good.

It looks way better than this one.

You know, you have a little bit more control

over other parameters than just the color.

So that looks really, you know, amazing.

It's a good way to mix textures as well.

Sorry, like bring up new textures,

sorry, like bring up new textures.

Not like, as you can see now,

it's maybe it's like in an autumn setup

or, you know, the season is autumn.

And you have this, you know,

brownish looking environment in the forest.

And you just didn't have to bring anything new.

You already have the material.

Oh, that too looks very great.

So I can bring this down.

Of course, I can't change anything

or like see how things look like.

I can make this change a little bit more gradual.

Maybe just too harsh, you know,

like there is, you know,

something ominous happening around

or, you know, like burnt ash on the ground.

Of course, you'll have like to change

the whole texture look again.

So that might not be cool here.

Let's see if we can.

Yeah.

So it's a really fun process, you know,

like it's like you get lost into the process, of course.

This is like ash, like white ash.

Okay.

Yeah.

So this is the second thing you could do.

Again, there's one more thing.

I believe it's gamma.

And like, oops, let's separate that. Control X. There we go.

So yeah, controlling the gamma gain again

through this plane, sorry, through this node,

it's going to be much, much, you know,

healthier for your scene than adjusting it

from the render settings or maybe bumping the gamma

in like Photoshop or something.

So or post processing, of course.

So doing that is going to be like much better for you.

And the good thing about this is like

you're interacting with a texture that is like natural.

Like this is something that exists in real life.

And that's why, you know, looking at it from afar,

nothing really seems out of the normal.

Like this is something you could look at

and like not suspecting that it's like,

you know, manipulated with or anything,

because, you know, that's dirt, these rocks.

And like we can see branches. So yeah,

can bring gamma down below one.

These look very cool.

Of course, you can start in and combine

between these different, you know, maps.

So if we were to add maybe a contrast here,

bright contrast into the color factor.

Now I can maybe increase the brightness.

That should be here.

Yeah, so that I can increase the brightness.

Contrast of the, you know, rocks.

And this looks like completely like a different,

you know, different texture all of a sudden.

So, yeah, you can combine with them as well.

Let's quickly here show one last thing.

Yeah, let's look at one of the other maps.

Yeah, let's look at what we have here. No color. We use these.

Of course, you can do something like

separating the green, blue and red channels

and maybe run them as you can see here

and maybe run them through like their own masks

or like their own note setups.

Let's quickly do that.

So I don't believe we've used that note before.

Let's see what this does.

Of course, essentially, you can see as soon as we plug in the...

So we separated the red.

So we have green and blue now.

And if we were to combine the, you know, green and red

because I only have the red channel,

so it's going to be red.

Oh, it's changing that.

Let's remove that.

Move that aside. Move this here.

So, yeah, if I start and combine these notes all together,

I get to have it like normally back.

But why would I do that?

I just want to control the RGB in a better way

than actually using the RGB curves

because like it's not that...

Like you don't have the same, you know,

freedom of manipulating each of these,

all of them together with notes.

Like you're only using the note itself and nothing else.

So if I were to add maybe a hue saturation

for the blue channel,

and then it should like, of course, look normal.

And then when I change that,

I'm only changing the blue here.

And if I were to plug this again,

this placement into the factor,

so I wanted to control the factor

and I will quickly add a color ramp.

So let's see, I bring these together.

Then I bring up the value and look at that.

Let's saturate it.

I can now, of course, I can't change anything

other than the blue color.

So I can maybe increase the contrast of it

by running it through a bright contrast.

So it's something like this.

Yeah, let's see if we can run that placement through that.

Yeah, we've done that before.

Like I can bring these closer together

to change things up a bit.

Let's run this back through that.

Make sure that the difference between them both

doesn't be more than one or less than zero

and minus one and one essentially in that range.

So I believe that is flips.

No, it was okay.

So we can reset those.

Just always play around with the values and saturation. No, I'm sorry.

So you have to bring down the value in order to see.

Oh yeah, it's blue. Sorry, my bad.

So yeah, maybe run a gamma maybe.

So yeah, you can see from one texture here,

we've made six textures and the possibilities are endless.

The sky's your limit here.

So what you can do is always find a way to add maybe another

colors into the mix.

You can always add, you can run the color into an RGB curves.

Maybe play around with the blue channel

and like mask it with the displacement.

And you've already like adjusted the gamma.

So having the color ramp here would help as always

bring things up closer together. Maybe flip it. There we go.

Let's bring this up higher.

Now controlling the blue channel of this.

This looks good.

The blue channel of this, this looks cool.

And also bring the whole entirety.

Well, that looks really unique.

Like this looks something different.

And it's natural because again, it consists of things that exist in real life.

And it is like something in real life.

Like this is a spot.

If you were to go into a certain spot, you will find these rocks.

So it's something that actually existed.

It's not something like, you know, made up or artificial.

You have maybe like these snowy looking stones or maybe cover everything up.

Bring things to contrast together.

You know, this could actually be.

Yeah, you can actually run that into the emission color.

And let's see how that looks like.

No, I needed colorful.

Yeah, that's the one. Sorry.

I will delete that.

I will delete that reroute.

Now it's actually, let's turn on the bloom.

This is like, you know, a fancy like spot where maybe like, you know,

things are a little bit more magical.

You know, like I've already, like, you know, changed these before.

I believe, like, these two, I added different things.

So you can see some variations.

Like, we've already made, like, more than six variations from all this texture.

Like, if we were to look here, look at that.

It's just completely different.

They're, like, completely a different thing.

And the crazy thing is that you can't tell.

And it's all in Blender.

Like, we didn't go outside Blender.

We didn't do anything else except for the first image.

We had to have, like, some reference for it.

But then again, if you look at it, these are all, like, different textures.

So yeah, this is something, again, we might be using

in our environment.

Of course, it's not something you will be using in every environment.

But it's a little thing that helps you avoid looking for textures for too long.

If you found something that's good looking in terms of, like, how it's actually look.

Like, so from now on, you should essentially, you know, when looking at a texture,

you should essentially ignore the color of it.

Maybe what it consists of, because that makes sense.

As I mentioned before, if you zoom in, even if the texture really looks like the environment,

if you were to zoom in in your scene and then, like, finding some branches or leaves,

then this is going to be, you know, a little bit unrealistic.

Although you can ignore that part, of course.

So yeah, experiment with these methods a little bit.

Try your own variations.

I'm sure you'll come up with something, like, very cool.

I just made these, like, on the run.

I haven't really prepared for any of these.

And yeah, see you next time.


