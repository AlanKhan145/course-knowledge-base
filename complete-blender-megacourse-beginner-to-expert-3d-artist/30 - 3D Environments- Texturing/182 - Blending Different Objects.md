# 182 — Blending Different Objects

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 30 — 3D Environments: Texturing |
| **Bài học** | Blending Different Objects |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 44:04 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Blending Different Objects** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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


All right, welcome back in this lesson.

As you can see, again, we will not be working in our scene, although we will be implementing

that technique in our scene, but I just wanted to show you what we will be doing today.

So today we will be trying to mix one material with the other in two different objects.

So let's look here at our references and see if we can see something that is similar to that.

This looks, this looks, you know, similar to what we're looking at.

So what we're looking at here at the top, it's just viewer rocky material, viewer stone,

like there isn't really anything of sand, you know, except the color, of course, of

the surrounding environment.

But the more you go down, the gradually you'll see that the sand is bleeding into the material

of that big rock.

So what we're looking to do here is to try and simulate that effect in Blender.

As always, there is a quick and dirty way to do that.

There is a more in-depth way with details.

We will see if we will be able to do them both in one lesson.

So let's get started again.

I will add in a landscape.

I'll choose dunes from the preset, from the presets.

I'll scroll down to fall off and make it as none.

I might increase this to maybe four just so that I can see what I'm doing. There we go.

I will increase the amplification by one because I'm going to increase the noise size by one, two.

That's looking good.

And now I'm going to scale the whole thing by maybe two, no, five.

That's something good.

Just for the looks, I'll hit control one to smooth.

I'll add a subdivision modifier.

As you can know, I control one, two, three, and so on.

This is going to control the amount of subdivision we're adding.

The second thing we'll be adding is two things actually.

First is a Susan or a monkey.

I'll hit, I'll go into edit mode, just hit G and the Z axis by one.

I just want again to, for the origin to be at the bottom.

It's not a necessary step, however, so you don't have to do it.

You'll be working with your assets anyway.

I'm going to scale Susan up a little bit.

And then for the purpose of the course, I'll be rotating her inside the terrain.

So this is Susan.

The other thing I'll be adding is a plane, just a plane.

So I'll add mesh, plane, and then I'll rotate it in the first, yeah, I'll rotate it in the X by 90.

Then again, I will raise it up in the Z axis by one to make sure that the origin point

is at the bottom.

I'll scale it up a bit as well as in the X. Yeah, I want Y. It's like as if I'm taking

a cross section here.

Let's look at it from this side and rotate it in the Z by 180.

Again, if you are not familiar with Y, I want the blue side to be facing the camera, which

is the one I'll be working with, with texture.

So I rotate it by 180 degrees and move it back in the Y up a bit.

I was looking for a more interesting cross section here, and you'll know why in a bit.

So I'll turn off face orientation.

Let me quickly turn on the screencasts.

So we will be mixing the materials as usual.

So I'll just add in a new, I'll be working with the monkey at first, let's have it here.

So new and with the material selected, I'll hit control shift T and then locate my material.

I will add in five textures or five maps, I should say.

I will disconnect the displacement because I don't need it.

I now have one texture.

If I were to switch to Eevee view, it should have the rocky texture I just imported.

For the plane, I will be adding a different texture.

So I'll hit control shift T and find another ground texture.

We had the sand before, there we go.

So I'll select these, these two.

I don't need the preview, of course, so I'll just add them as a texture.

And now we have two textures.

If you don't see your texture, just make sure that you may switch to object just so you can see the thing here.

Yeah, there we go.

So now, you know, the good old repetition, we should make sure that both of them have the same coordinates.

I believe for the first method, we won't have to UV unwrap the mesh, but let's see.

So usually, what you would do is that you would, if you were to mix between two textures,

you'll just maybe hit control shift right click on one texture and just mix it, you know.

But as you can see, we only have one texture on each object.

So the trick is that you select the object you want to be mixed with the ground.

And what you can do is you can make sure that you have a group of the first texture or the bottom

texture, the ground texture.

Actually, let's name it ground.

Oh, no, let's actually group it and name it ground.

So I will hit control G, and now the organic group, I'll hit tab to go outside, and then I will rename this ground.

And now, on the monkey, I'll just hit shift A and search for ground.

And this is going to bring me back my texture.

Now, if I were to hit control shift right click on this shader and mix it with the other, I'm going

to have a mix shader.

But as you can tell, this mix is being, you know, over all the, over the entirety of the object.

And here comes our trick.

We will be using a gradient texture.

We used that before, but just so we can see what it's doing, I'll just add a gradient texture and

then hit control shift click to see how it's acting.

Something is off about gradient.

It doesn't always come from a certain direction.

Like, I believe it comes from, if I were to reset that, yeah, it comes from the negative X, sometimes positive Y.

I'm not sure why exactly, but it comes from one direction or the other.

Like, it doesn't come from a certain direction as like the top or the bottom.

But that's, as you know, it's easy.

I'll just select the gradient texture and hit control T.

And with that selected, if I were to rotate one of the axis, I can tell that this is not the axis.

Oh yeah, this is the one.

So if I were to isolate my object real quick by hitting the slash button and the numpad key and switch this to 90.

No, let's actually control A and apply the rotation.

Maybe that helps. Zero, 90. No, it's zero.

You know, we're just fumbling around to see if you are rotating it around the axis should be rotated around.

I'll hit shift A and search for a color ramp.

I just want it to be precise as to where it should, where it's located.

I believe it's not yet 90, 90 on Y.

Just remember that you should have your rotation applied.

I believe I will go outside of the isolated view.

And as you might have guessed, this could act as a mask.

The only issue, however, we will be seeing now.

So if I were to connect this and make this color of the color ramp as the factor of the mixing shader,

I should now see that the shader bleeding slowly into the monkey.

Now, as you can see, it's not really blending.

Maybe in some angles, maybe if I hit control three on the monkey just to smooth it out a bit,

then I will apply that.

Let's see if we can work around this.

So, yeah, like you might have to maybe play around with the scale a bit just so that, you know,

things mix up, you know, pretty well.

There's another downside, of course.

So the first downside is that it's not really mixing well, and we will know why in a bit.

The other downside, which is obvious, is that the location of Susan or the object you're moving away

from the ground plane isn't really affecting the height of the, you know, of the texture around it.

So let me rotate this a bit.

Another downside, as you can see, is that the textures is stretched, you know.

So we can do things to go over these.

Again, this is a very quick and easy way.

As you saw from the beginning, we only mix two shaders.

So I'll hit control G to make this the rock texture, then just move it a little bit closer here,

just organizing things up a bit.

And again, move these away.

And so, yeah, this is basically the setup.

We're looking at it here.

You can go the extra mile and do the following.

So you can add in an empty or any object, essentially, to act as your driving object here.

Now, notice one thing that when I switch from generated to object, yeah, I believe the scale

of the sand texture isn't matching, but that we can solve.

We already have a mapping node.

So that isn't a big problem to be interacting with. Let's see here.

So if I were to rotate this, that's another downside, is that it's actually locked with the object.

Now, the reason I added an empty is that I wanted to select it here in the object menu here

so that it is the driver of my gradient, not the object itself.

And as you can see, it's all gone.

That's because if I were to raise the empty, boom, look at that.

Now, I can make things smoother up a bit.

And now, of course, because now that the empty is the driver of the mapping of the sand texture,

if I were to move Susan, the texture will be moving with me as well. Look at that.

Of course, this applies to the rotation as well.

So if I were to rotate Susan below a certain threshold, it's now getting all sandy.

Back to the original state, it's now getting partially sandy.

And now, I can go ahead and submerge Susan under the ground.

And now, this is the driver of my object.

Now, scaling up a bit smoothens things up.

You can also rotate it and such.

So this is a very good example as how you can, you know, work around such a thing.

Again, this is a very quick and dirty way.

I just added two things together and drive the mapping by an object, which is the empty in my case.

Now, let's again look at another downside, which might not be obvious on small objects

on bigger planes.

I will select this plane and add this material that I made.

It's called material 001.

So 001, and make sure that it's a unique material.

I will try and solve some issues here.

So I'll go into edit mode and hit U to UV unwrap my plane.

I'll then connect the UV mapping and make it the driver of my mapping node.

I'll hit Ctrl A to apply everything.

It shouldn't be...

There we go.

So it's generated. I understand.

The sand as well should be driven by the UVs, I believe.

Should be the same.

Rocks, UV, ground. Let's try.

Of course, this is going to change Susan, but that's fine.

We've already demonstrated what we want to demonstrate here.

Let's see how the sand at the ground will look like.

So UV...

Oh, I should also UV unwrap the ground here.

Yeah, so that the scale is at least a little bit matching here.

Again, we can manipulate everything altogether.

So if I were to scale things up a bit...

Now, let's Ctrl Alt X, scale things up a bit.

Then again, let's see if I were to unwrap this.

Delete this map. U, unwrap.

U, smart UV project.

Now, let's go to the previous unwrapping.

Yeah, this looks good.

Again, I can change the scaling of the objects,

of the material, sorry, by adding a value node.

Make this three.

So I've now scaled the ground texture.

Then go here, shift A, yes, value three,

and plug it into the scale.

So this applies for the ground and the rocky texture.

I haven't unwrapped Susan, I believe. Oh, no, I have.

Let's check, so UV, unwrap. I believe not.

You know, when you unwrap objects,

I believe the textures across should be matching

in terms of scale and orientation, location.

So, yeah, there we go.

Now the scale is matching between the two objects.

Again, I can just hit Susan

and make sure that I have everything unique.

I can go back just so that I can make sure that,

you know, just showcasing both methods at the same time.

Now I can select the, no, that should stay UV, sorry for that.

That's the one that should stay object.

So if I were to select the empty,

I'm not sure what's happening here.

Let's delete that random cube.

If I were to select that empty and look at Susan,

I should be able to manipulate, yeah, there we go.

So that's method number one.

Now with method number two, let's actually decrease

or make it harsher.

As you can tell, even with the object driving the,

driving my gradual, my gradient texture here,

you can still see that it's really, really steep.

Like it's not really, you know, adapting with the ground plane here.

And of course, it can be changed with the location

of the empty or the object.

But again, what if I wanted to blend between the ground

and that texture properly?

And now we're going the extra mile.

So pay attention here.

It's not really difficult if you do it multiple times,

but again, we'll be doing it just so you can see

what we're doing here.

So yeah, the first thing we need is that we need to add something,

a modifier actually called vertex weight proximity.

What this does is that with the proximity of certain vertices,

you will be weight painting your object.

How you can do that?

It's going, of course, to the shading viewport

and going into edit mode.

And by going to weight, vertex group weight,

and now it's all blue, which means like,

I believe nothing is being painted on the object.

So if you've guessed, we'll be going into the object data properties

and adding a group.

This group should consist of the entirety of the object actually.

So I will assign.

So now all the plane turns red.

If I were to go outside edit mode, that should disappear back again.

Under the modifier, I'll select the vertex group

and I'll select the target object as my plane.

So this is going to make it easier for us to copy these properties

from one object to the other.

Now, if we were to go back into edit mode,

I should switch from object to geometry and switch here from,

let's actually make this one, make this zero. Let's see.

Oh, yeah, it should be available in edit mode.

Now we're doing something.

Now, the driver of the weight painting is the object.

As you can tell, I still don't have anything here.

Make sure that the blue is at the top.

I will decrease this up a bit just so I'll just crunch.

Let's actually switch to sharp.

I don't think it's driving our, let's keep it at linear for now.

Squash things up a bit, as close as possible.

Of course, this isn't the only thing we'll be using here.

So we will be testing everything along the way.

So this is the first thing.

This is the first thing that I wanted to certainly paint my objects,

weight paint my object so that it could drive something else. So what else?

Well, we will be adding something called data transfer.

Data transfer is essentially what it means, transferring data from one object to the other.

So the source should be my landscape, of course, and the group note should be the group I created.

I left the names of the group, and I will be adding a UV map and leave it the same as well,

and you will know why in a bit.

So what we're looking at here, let's see if there's anything changed,

should be face corner data and custom normal.

And let's actually shade smooth and turn on auto smooth so that I can remove that bug.

If you're facing that issue, again, make sure that you're selecting nearest corner,

best matching face.

Many of these results are the same.

This is what goes best with me, at least.

Like, let's see topology first.

What I'm going to do is add a subdivision.

And as you can see that immediately, there has been a change.

Weight painting actually, especially when it's vertex weight paint,

well, as it says, it's vertex weight paint.

So you might need some geometry into your object just so that you can see the details.

I believe that amount of subdivision is all right.

Now, if I were to move our plane, look at that.

This is looking pretty good.

Let's again try and control our shape.

Yeah, there we go.

We just needed some geometry there.

And now what's happening is that the vertices of the plane, if you can see here,

this looks really good. That's awesome.

Of course, this applies to Y-axis.

The plane itself is the same.

Like, if we were to isolate the plane, like the plane size is the same.

It's just adapting to the ground plane at the bottom.

And this just, you know, by itself just looks really cool.

Yeah, that's pretty cool.

So I'll just go back from the isolated view.

Now, I believe this is it.

I think we don't need anything else.

Custom topology.

Yeah, topology works fine.

Yeah, so now for the third modifier.

So the third thing we'll be adding is a UV warp.

I'm not sure what this exactly does, but it acts as a driver for the, you know,

just like the empty here, it acts as a driver for the UV we're going to add here. But what UV?

Again, you might not use the default UV here.

And let's actually show you why.

So, so far, I don't have anything here added.

I don't need that mixing.

We will be switching that mixing anyway, but let's see what would happen

if we don't add that.

So I'll just delete that part.

So now I don't have any mixing.

And let's add a UV map.

And this is a new node, by the way.

So with the object selected, it's named UV map.

I'll drive the factor here by the UV map.

And I believe it should...

Yeah, it's not doing anything.

So if I were to add a color ramp, still get on the opposite direction.

Let's add a mapping node.

And rotate it on the Y by 30. Let's see, 60.

It's quite harsh.

Let's search for contrast.

Try to drive it down.

Trying here my best to...

Let's first, yeah, let's first make sure that we have the correct UV layer.

So this is the UV layer. I need two.

And of course, I'm affecting the group.

And I need two drivers here.

So let's actually take that empty.

I will duplicate it once.

Move it a little bit here.

And then duplicate it again.

And under item, I will just do plus one. Y plus one.

So if I were to select our object again, so from zero, which is the empty at the bottom,

to one, which is the empty here.

Oh, and as you can see, we have something here. Okay.

Let's remove that. That was zero.

And change things up a bit.

As you can see, the driver here isn't really working the way we want it to work.

It's sort of like doing what we want, but not the proper way.

And now, we are going to work around this.

So the solution is simple.

We will open another window here.

So I'll split vertically.

And then here, switch to UV editor.

And while this material is selected, object is selected, I'll tap into edit mode.

And as soon as I select the whole plane, I should have an image here.

It doesn't matter which one.

You can choose from all these.

But again, I'm just controlling the UV mapping here.

Under the data properties of the object, I'll add a new UV map.

Just leave it default and scroll down here and make sure that I'm manipulating that new UV grid.

Now, with everything selected, I'll switch to 2D cursor.

So I'm now operating or changing any properties according to that location.

And with everything selected again, I'll hit S to scale and then zero.

And that will squish all these points down to the bottom here.

And now, if I were to go outside of edit mode and under the modifiers, switch the UV map to the new

UV map, as well as here.

Let's manipulate things up a bit.

Make sure that... No.

Let's rotate it.

Inverted, sorry.

Now, look at that.

We have something here.

It looks amazing.

It looks really good.

And it's real time. So cool. Look at that.

Now, we're mixing between both.

As you can see, they're both looking pretty good.

I can now have them both as such.

If I were to rotate this...

It's looking pretty good.

So, as you can see, we've now mixed between them both. You know.

Hold R. Maybe in the X. That way.

I'll scale them to Z.

Now, it remains the same.

If I were to change the location, it's now adapting to the ground.

And now, if I were to add a mesh landscape, let's see what we have here.

Let's use cliff. Yeah.

Multiply this by 4. Let's see. Maybe 5. There we go.

It's now repeating.

Falloff is none by default.

Noise size, leave it the same.

It doesn't really matter.

We'll be scaling it.

Let's scale it as much.

And now, what I want to do is transfer the data or the modifiers from here to there.

Like, maybe I just spawned in another asset, which is this one.

So, what I can do is I select the first...

I first select the material.

I'll quickly join these two areas here.

So, I'll select the object I want to transfer the modifiers to,

and then shift select the object I want the modifiers from.

I'll hit control L, and then copy modifiers.

Now, again, if I were to select at this, I'll notice that I don't have the group or the UV map.

That's why you don't rename them.

Because if you were to rename your objects every time,

this is going to be a little bit more tedious to work with.

I will UV unwrap it once, and add another UV.

Now, the UV is there.

Now, nothing here comes with an error.

But we might face an issue here in a second.

So, what I will do is I will drag this and drop it on that object.

Now, let's make this unique and see if we are facing any issues.

Oops. Let's make that one unique. That is okay.

It's not so obvious here.

Still, though, I have the objects interacting accordingly with the object.

Like, I have the playing ground acting with the object.

I can still move these around just so that I can control things up a bit more.

I can scale them down and up, of course.

Just as a previous method, play around with the parameters.

Just be careful that when changing these, if they are the same as every and each object,

you will be manipulating all the other objects as well, as you can see here. So, be careful.

What if we were to scale things up a bit?

Just want to show you that.

Yeah. So, if you are facing any issues, gladly here, I'm not.

If you were to face any issues regarding the mapping of the node,

just make sure to do the last step again.

So, if you remember, I go into edit mode and then switch to UV editor.

With everything selected, I make sure that I'm UV map 001.

Select everything, and then with the 2D cursor selected, I'll scale everything to zero.

Make sure that this is the active 2D cursor.

So, I go into pivot and make sure it's the 2D cursor.

Select everything to zero.

That should fix any issues you might have.

Again, L-O-S. There we go.

Change things up a bit.

And under here, I can just smooth things out.

You know, I can also go under the vertex weight pane and change these parameters.

You know, all to my liking.

If you want to change it to a certain like number and it's flipped,

you can, of course, flip it from the color ramp.

You can, of course, flip it from the color ramp.

Just click that button here, and that should flip that weight pane.

So, essentially, it's going to make the blue at the top and then the red at the bottom.

This is what it does.

Let's decrease that number.

Increase that number.

Maybe bump things out here.

This is looking pretty good.

So, the transferring process isn't really that difficult.

As you saw, I just select the object, the new object I want to transfer the data to,

and then select the other object.

I'll hit Control L to make sure that I have it set to copy the modifiers.

Maybe the object here is shaded smooth by default.

But if I were to shade it flat, sorry.

Yeah, you might face these issues.

So, make sure that you shade it as smooth. There we go.

So, yeah, how's that for a method as a blending? Now, go ahead.

Try this method yourself.

See if it's working.

If you have any issues, we can troubleshoot them together.

So, make sure that you try it, actually.

This is, of course, a pretty, really, really quick method.

Here we added three modifiers.

I had to adjust some UVs, some, you know, we added some extra nodes here.

So, again, the usual.

So, every method you want to interact with has its own quick and dirty method.

This is much better, in my opinion.

I haven't figured out a method to properly mix, like as we used before,

with the displacement or the height map to mix between both.

After some experimenting, I found out that under the vertex weight pane,

I'm sorry, under the data transfer, if you were to use, you can see here

that you can have an error that says source destination meshes don't have

the same amount of face corners.

Topology mapping cannot be used in this case.

So, it's just mixing without actually transferring any, you know, good data.

So, this is being useless, essentially.

So, for this to be useful, you should actually switch to nearest corner

and best matching face normal.

And when doing that, you should be able to, if you shade smooth, of course,

just make sure that you are enable auto smooth.

And as you can see, it's completely different.

It could be more obvious here.

So, I will, again, go to data transfer.

You will see that error.

So, switch to nearest corner, and it already had the smoothing on.

If I were to duplicate this, push it back to maybe here a little bit,

and switch back to topology, you can see the great difference.

This is way better.

So, and I will show you why now.

So, if we were to go into shading, it's not pretty obvious here,

maybe a little bit, you can see it.

But let's actually view the normals.

What I will do is that I will click here on the shading settings

and switch to matte cap.

And when I click on this, I can choose to show normals.

So, this is the one with the normals mixed,

and this is the one with the normals not mixed.

If you can tell, these colors are matching much better than these.

So, you can see that there is this great seam across here.

But here, this modifier is trying its best to match the normals

from this position here to this position there.

This, of course, could apply to any object,

and that's why we switched here.

So, as you can see, while this shading is on,

if we were to change to topology, you can see the great difference.

So, it's not being matched by the normals here.

It's using the topology, and the topology doesn't have enough data

to be transferred.

So, this is pretty much useless.

Just make sure that you have the option mapping something

with the normals in it.

So, nearest and best matching normal, or nearest corner

and best matching face normal.

So, basically, these two options.

Again, if we were, this is before, and this is after.

Okay.

See you next time.


