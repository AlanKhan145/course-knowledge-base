# 112 — Rigging the Character with Riggify Add-on Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Rigging the Character with Riggify Add-on Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 37:34 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Rigging the Character with Riggify Add-on Pt. 1** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- rigging, posing và chuẩn bị character cho animation
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

Oh, guys, in this video, we are going to read our character. So we can post this character

and then render it. Before doing that, let's fix this problem over here. So as you can

see, we lost a shoe here. But if we zoom in, you can see that that is like two shoes over

here, right? So this is the problem you have a mirror modifier. So I guess when we join

these, the pants, it may make this problem for us. So we have to choose a mirror object

again, or here. So let's choose a mirror object, the pants for our mirror mirror object. Now

let's do the same for our shoelaces, like this. All right, now that now that it's fixed

right now, let's, let's start doing the rigging process, let's say first, and then we can

delete this cube, because we're done with modeling right now. So we can just delete

that. I want to introduce to you a new feature in a new add on. So if you go to armatures,

some basic armatures that you can use in the in the fundamental section, I showed you how to use

armatures arms to parents, your object to the arms and then use those simple rigs. But I want

to show you another way to read a character, and especially a humanoid character. Like this one,

we have a human character. So if you go to add ons, and then search for rig, there's something

over here called rigify. And you need to enable it if you let it to be disabled. If you go to

press Shift A and go to armatures, he gets just a single bone to add, which we go and enable it,

then you will have some other options over here. So if I press Shift A and go to armatures,

as you can see, we have a human metal rig animals and some basics metrics. Alright,

so what does it mean is that this rigify add on that comes with blender allows you to make

simple files riggings for humans and simple four legged creatures. And then with one click

over here, you can generate an advanced rig, which I'm going to show you how to do that.

So first of all, before doing the rigs, we need to make sure that everything in our scene is

in the same scale. So if I go here and go to view go to item, I can see that the shirt over here

doesn't have the universal scale, which is one and we discussed this in the fundamentals. So if

we go to face have one, these one shoot these, the hair also needs to be scaled to reset the scale,

the pants also. So we need to select them all with a and then we have to apply a scale for

something like the curves, we might get into some problems. But let's see. We'll see what we'll get.

And if we have some problems, we need to fix that. So let's go and press the scale. And as you can

see the shoe, the shoe got a little bit or the ground actually, I think it got a little bit

smaller. Yeah, because of the modifiers, I think, yeah, because of the modifiers,

it became a little bit smaller. So we can adjust the scale over here. Something like this.

This is the placeholder, we're not going to use this in the final render.

I think so. We're going to use a simple plane, just so you know it. So the shoes also needs to

be applied to scale Ctrl A scale, as you can see, we have no problem. And the shoe is also so

we don't have any problem. And the pants, as you can see, I think the solidify modifier

changed a little bit. So we need to increase the thickness of solidify modifier over here.

And we're good to go. And then the shirts also. So also, we need to increase the solidify modifier

for the shirt. And check if everything's all right. All right, and then the buckle.

I usually just press all Ctrl A but just so you know that there might be some problems.

Because of the solidify modifier or other modifiers, maybe you maybe you would want to do

them one by one. And then the face is. All right, let's do these shapes. Also.

So we have a problem here, I think, again, because of the solidify modifier. Maybe Yeah,

we need to need to decrease the solidify over here.

So I think that's fine. Yeah.

And then the shrink shop modifier, we need to change the offset over here.

Let's move it up and change the offset. Or it's not changing. Maybe because we need to

enable snapping to change it back to zero. All right, it's not. It's disabled. So yeah,

this, this icon over here is disabled, which means that in the viewport, I don't see it. So

let's enable it. Let's change the

the offset. But before that, let's turn snapping to off so we don't get a lot of distortions.

Let's change the offset here to zero, I think. Now let's go to edit mode. And

let's, let's edit the arbor. Something like this.

Let's see if the faces are in the right direction.

As you can see, it is so

so

it tries to attach to this surface over here, maybe by

enabling snapping tool, it will be easier. Yeah. So now it's much easier to

to adjust the shape.

Right. I think that's good enough. So the scale is one that's good. So let's apply a scale for this

one. The the hairs as well. And I think I think we're done. So to make sure let's select them all

a and Ctrl A and press on scale. Alright, so the next stage is that we should let's meet armature.

But before that, to make the armature before making our armature, you need to move, move your

character up. So let's press, press all this, I should disable the lights and disable or disable

the lights over here. First of all, and let's disable the camera as well. So we can just delete

the camera, we don't need it right now. And so that's all, don't forget to save first. So it's

all press G zed and go up. And you know what, I'm going to delete this ground over here. You don't

need it. So let's press G zed up. And then what you're going to do, what you want to do is that

you want to the character to stand in the in the zeros in the zero. So this is zero, this is one,

this is two. It should stand in the zero in this x axis. Alright, so and that is just because when

we make the armature is gonna, it's gonna be like this. So if I press Shift C to reset the

3d cursor over here, and then press Shift A and then go to armature and then go here and press

on human metric. Alright, as you can see, right now the armature we made is just sitting

on the x axis over here. So if I need to scale my armature right now, so let's press s and scale

it up, scale it up like this. So and like this. So the main idea about this armature, the main

thing you have to do, we have to put everything every army every bone we have with this armature

pre made with this premium armature inside the mesh, we have the mesh of our character,

and then we would parent it. Alright, so let's first set the scale over here. Alright.

And again, important thing is to press Ctrl A and reset this scale over here. Alright,

now, as I said, we need to, we need to adjust these bones to go inside the character. But as

you can see, if I go to edit mode, and then I want to move them, I don't see where is the position

of each each one. To see the position position of each one. Let's change the viewport display over

here. So object properties viewport display, and then change it to in front. So whenever

we can see the armature to be in front of the character or any other objects. So it's easier

now to change the location. The first thing, the first things I do when it comes to these metrics

is I go to edit mode with tab, and then I edit, I delete some certain bones, for example, this,

these ones are here. These are the nipples or the chest bones, all right, we don't need them.

Okay, so just select them and press x, and then press on deleting the bone. All right,

the other ones we don't need is the facial bones. So we don't want these bones are right here,

the facial bones, we want a simple pose, we are not doing this for animation. But maybe if you're

aiming for animation, if you want to make some expressions for the page for the face of your

character, you can do this, you can keep these, but I'm just looking for some simple posing.

So let's just select these and press x and press on deleting bones. And then the other ones are the

ear bones over here, let's select them and then delete them. And then there is a bone over here

that you can see but if we enable the x ray or here, you can see that there is a bone over here,

which is called the name isn't seen over here, the face bone, as it says here metric face.

So you need to delete this one as well. Otherwise, it will it will make problems and

you're probably not going to get a good rig. So let's just click on this one and press x

and delete these. So now I think we are ready to start our, our editing of these bones.

So let's just start with the head. So let's go to front view with numpad one,

and then go to edit mode of the metal rig. And then click this, this one over here.

And let's go to side view with tree. And then this is the spine sex, I usually use just one

bone for the whole head. So let's bring down this, this sphere over here. And

like this. Alright, so let's change it. And let's do it the proper way. So press GZ to bring it up

like this. Express. Let's select these two bones. These are the neck bones, the spine five,

and a spine four. So let's select them. And then bring bring both down like this. So I

keep the tip of the of the head bone over here. Let's just move it in the y axis.

And then let's move it into x axis to have a straight bone. Let's just move it in a very

old fashioned way, just move it around like this. And then we can have it in a in a good position.

So let's just do this and then select this sphere over here and bring it down like this.

And alright, I see the problem. So I forgot to turn off the snapping tool. So it is snapping

to the surface of my of the face. Alright, so if something doesn't work well for you to just

find problem, don't panic again. The key to 3d art and 3d anything you want to make in 3d is

to not panic. Because a lot of things might go wrong. And in a way that you don't want to,

and you might just panic and say, Alright, I give up. So keep that in mind. Let's clean these

up a little bit. So as I said, this is the bone for the head, the top bone and the other bones

are the bones for the for the neck over here. So let's scale them down. And then bring this up.

And we're good to go. I think. Yeah. So also, these spheres need to need to have some attachments

to each other. Alright, now let's enable x symmetry over here, as you see up here,

or here enable x symmetry. So we only work on one side and other side gets the other side

also moves around if you forgot to, in any case, if you forgot to enable this x symmetry,

and then you worked on these bones of one side, and then you were done with this one side and

then you rotated and saw that you don't have you have to do the other side again, too. So

there's an option in edit mode, again, for the armature as we have for any object or armature,

you have a symmetry. So if you don't symmetrize, you can symmetrize from any direction you want.

So pretty same thing with any objects in edit mode that you can symmetrize. So let's move these

bones over here. This is the one for the shoulder. All right. And then for these bones,

I forgot to enable symmetry. So let's just apply the same apply the symmetrize and then we will

symmetry. So this is the shoulder one. And let's adjust it like this, like this. And then this

is the elbow bone. So place the the important bones like the elbow bone, the hip bone, the

knee bones, these are the important bones because they are joints that are the major joints in body.

So you have to place it you need to place it a little bit back. So it does have this kind of

angle. So the shoulder bone and the elbow one, this kind of angle and then this kind of angle

for the forearm. Alright, so it doesn't need to be straight, because you need to bend it. And this

way you have better break. The same thing goes for the knee. So you have you need to have a little

bit of of angle. So let's place it over here. So this is our elbow. And let's bring up our

hand over here. Let's just adjust this. This should be around the wrist area. And let's see

off the other angles that the bone is actually inside the mesh. All right, it needs to be inside

the mesh. So go around and check that for yourself. And then we have to move these bones

around. These are maybe the hardest ones in the in the rigging in this part when we are

adjusting the bone location. So you have to go around each of these finger bones and then adjust

them accordingly to your to your finger, the finger of your character.

So let's do that. Let's select this. This is this is going to be my knuckle bone of the my

of the thumb. And this is going to be the thumb itself. And it's okay if if the sphere is going

is going to be outside of the mesh. All right. But it shouldn't be something like this. Because

then you can't move around this part of your mesh. So let's do something like this and check from

every angle that the bone is actually inside the mesh. And then let's click on this finger bone.

So I click on one bone and then press L to select all the connected bones. All right. So

let's rotate that first like this. And then this is going to be my knuckle bone.

Okay, this is going to be my knuckle, the knuckles over here, this is going to be

the joints over here. And this is going to be the joints over here. And this is going to be outside. All right.

Can do the same thing over here as well. So this is going to be the knuckle bone of the top.

And these should be just over here. These are the kind of the tendons over here.

They replicate the tendons of the hands can bring them down like this.

And now let's go for the other finger, press L, rotate it.

And then just do the same thing. So this is going to be the knuckle bone over here.

This is going to be the first joint and this is going to be the second joint.

This is going to be the last one that goes outside of the mesh. Let's bring them down like this.

And let's these let this spirit connect to each other. All right. Let's go to the

this finger over here. And let's rotate it again.

Let's rotate it like this. This is going to be the knuckle bone is going to be the first

joint and this is going to be the second joint.

All right, now let's select the last one. Let's go to front to top view. Let's rotate it.

Let's bring it over here. And

let's do the same thing. So this is going to be the knuckle bone over here.

It's going to be the first joint, the second joint, and it's going to be the third one over here.

Let's bring them down like this, then rotate, make sure that they are inside the mesh. That

is the most important thing. If even one of the bones are not inside the mesh,

you will have some problems when you're applying the, applying the, the parent thing.

All right, now that is, that is it for now. We can, let's go around now. Let's check everything.

So so they would be inside the mesh. I think that's good for now. Don't worry if you if you

like miss something like like I did over here. And even if you parented and do the rigging,

you can always go back and edit your, your rig or here and then the parents again. So

not to worry, but the key is to be patient over here to get a good rig. Let's save our work.

Then let's go to the hip area. These are the bones for the hip. So let's bring them out a little bit

like that. And the bones, the angle between the hip bone and the knee joint is something like

this. So this is the hip, this is the knee. And then this goes for the, for the leg, the,

the, the leg over here, the fibula and the tibia bones.

So this is the same as bring it backward over here.

Let's make them to attach to seem to that they are attached to each other like this.

Let's bring them out a little bit like this.

And we're good to go. I think that is good enough angle.

Now let's do, let's just do the knee, knee bone, knee joints. So let's go here.

And

select this one.

I have this angle over here that I just described to you. And now let's go to the

foot area. This is the bone for calcaneus. I believe this is the bone for the back of the foot.

So we'll leave it, leave it just over here. So this should be in the back of the foot. All right.

This is the bone for the back of the foot. And then this just goes down like this. I think it's

okay, like this. And then this is the tip of the toes or here. Then this is for the for the

last one over here.

And if your character is barefoot, so it doesn't have any,

any, any shoe, or any, any earrings or here, you can add bones. It's the same thing over here with

the hands, you can add bones. And you do that by selecting a bone and then pressing E and then you

and then pressing E and then you can extrude bones like this. Okay. So that's it. I think

we're good for now, we can start the parenting. But before doing that,

very important thing is this first, change the location of this one, I want it to be here to be

in the same location as this. If you see it in the side view, it will be like this. Let's see

the scale is right. So the scale is okay right now. So we don't have to worry about that. Let's

click on this in front and see if any bone is just outside of the mesh, we can check it like that.

I think this one is too outside. So let's do that. And yeah, I think that's okay.

And now we can, we can start the parenting process. But before that, we need to make the

generate advanced rig. All right. To generate the advanced three, you need to go to this properties

to, I'm sorry to this property over here, the object is a property of the rig. And then there's

a button over here that is called generate rig. So what's what happens when I generate the rig,

it, it actually this add on will make a rig and an advanced rig around the area of the bones

that are here, then we will parents are objects to that generated rig. And we would have we will

have a pre made a weight painted brick that is easily done. So in the past, you would just make

this bone over here just with just one bone like this. And then you would just extrude it and then

make this one over here and then you would paint paints the thing over here. So weight paints,

you will weight paint every bone to the area of the mesh and then you would get the same results

as you get with this metric with this rigify add on. Let's just click on generated rig. Again,

I can emphasize again, emphasize more that you have to check your scale to be the right amount

if it's not the right amount. If you increase it like this, if it's not the right amounts,

and you generate rig, you will have you will have problems. The same goes for your

mesh when you're going to parents them. So let's go here and generate rig.

And we have a problem over here. So if it happens, don't panic. So it says that error

over here bone number four is not attached to anything. So if you go here, go over here and

born spine four is this one. So let's bring it up a little bit. Something like this, I think it might

be it might be because it's not. Yeah, so let's go here and do something like this. All right.

All right, let's do it again. Let's see if the problem is fixed.

Bonus by number four cannot connect chain. Let's, let's go to Edmund again.

These two needs to be connected. So, so let's go here and delete this one over here. And then

let's press E to extrude. And then let's press shift press this one and then Ctrl P to to parent

these ones together. parent these ones together is Ctrl P. Now let's see if the problem is fixed.

Yeah. So as I said before, don't panic if a problem occurs. If you can't solve the problem,

just search for it on the internet or a lot of people good people who will answer your question,

we might get into some problems maybe in the neck area. I probably won't need the week in this area

or here this spine over here, I only need the this, this one, this one over here. But if we

get into a problem, don't worry, you can always when you even Jerry's route rig. So let me explain

it to you. So this rig is made for us right now. Okay. This is a pre made rig for us just ready to

use. And all that Okay, this is, this is what we have. And we can, by using this, we can just

move our character and pose our character. So as I was saying, in anywhere, anywhere in your

progress of rigging, if you get into any problem, you can just go to the main armature, which is

this one and then move things around. And then again, go to object properties of your armature

and then press on your rig. And it will make you a new rig. So this is the rig we got. And you can

see that because the bones are in the right direction, this add on can now identify that

this over here is the is a leg. And this is the femur, this is a TBM fibula, and all that. And

you can now like know that this is which one is this one. And all we have to do is to first select

our character, and then select the armature, and then press Ctrl P, and then go here. And

there is a option over here called with automatic weights. And you have to click on this one to get

the read the parenting. Correct. But before that, we may need to apply some of these,

some of these modifiers. For example, we may need to, we may need to change the curve the

curves over here to to mesh to so we don't get into any trouble later on. So let's just first

apply this mirror modifier and then apply the mirror modifier also for this one.

And then the solidify modifier. Alright, let's just go back now. Because I want to have this

file over here with all the modifiers. So if you get into any trouble later on,

you need to practice this as well. If you need more files, when you're doing something

like this, when you are applying the modifiers, you need to be aware that you won't get them back

later on. So let's just save another file with Ctrl Shift s and then go here and select plus

button. So we have a new file over here. And now every time I press Ctrl s and save, it will be

saved on the new file. And my last fall is just I have that as well. Let's just go over here and

apply the mirror modifiers of this one, apply the solidify modifier of this one. And then go here

and apply the mirror modifier for the shoelaces and then go here and apply the solidify modifier.

Let's check again, if it's okay, right now, we can, again, change the

thickness, but I think that's okay. Right now for us, we just wanted to

this area was important to us. Let's just apply the subdivision modifier,

we can keep the subdivision modifiers because

yeah, we can even decrease the subdivision level. So we have a very much more usable scene. So

our scene with a lag. So if your computer isn't good, you can always check these

level viewport and you can decrease the subdivision. As you can see, we have a

very low resolution. If I go to zero, you can see this is what we started with,

for our pants over here. So let's go just to two for the pants and for

the shirt. Let's just apply the solidify modifier and then go for

Yeah, just two walks for me here.

And for the face on the hand, in the last video, we applied the money first,

we don't need anything else. For the hair, we can just decrease it like this.

Or actually, it's actually very low geometry. So we keep it up three. And the render as well,

this is important. If we render in the viewport, we see it in the three levels. But in the render,

it says two, so it will be rendered with two levels. As you can see, we have some

jagged lines over here, and we don't want that. So let's just keep the same level of render and

viewport. For the eyes, we can just keep them here, I think, or actually supply it, we may

get into some problems in the rigging process. So we're ready. Now, we can you can also if you

want to apply the subdivisions as well, press a, and then press Ctrl A and then go to visual

geometry to mesh, it will apply all the modifiers for from each mesh you have.

All right, now we don't need this rig over here. As you can see, this is over here,

as we made our, our advanced rig that we want. So let's just go here and then hide it.

If you have any problem with this rig, you can always unhide this and then change the values,

the locations of these balls and go over here and generate another rig.

Alright, so for now, we only work with generated rig over here.


