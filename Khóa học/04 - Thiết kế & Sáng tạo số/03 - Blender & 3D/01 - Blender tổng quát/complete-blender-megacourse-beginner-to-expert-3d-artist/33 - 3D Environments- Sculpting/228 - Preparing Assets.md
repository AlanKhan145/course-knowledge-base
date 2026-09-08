# 228 — Preparing Assets

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 33 — 3D Environments: Sculpting |
| **Bài học** | Preparing Assets |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 20:47 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Preparing Assets** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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


Alright, welcome back. I have forgotten in a previous lesson to transfer these parts

to my main file. I just did so and just linked them, linked the materials to the material

I want them to have and now they have the same material. Quickly you just copy them

to the other side because these two do not, are not, you know, copied yet. Just make sure

that I select everything. I'm missing, let's alt D because we want them to be instanced

anyway. I will just copy everything again because I need a version of the satellite

where it's not like actually worn out. Quickly switch this to random to have things a little

bit more faster and then I'll hit, yeah, alt D on the Y and then scale it on the Y by

minus one to mirror it. I will make, let's not make anything active, I'll just manually

do that into this area. That stage is a bit large. I think the platform itself, yeah the

platform is mirrored but not the actual thing. Let's bring it just as close as possible then.

There we go. Just like that. Yeah, this platform is a little bit out there. I want them to be

similar. G on the Y. Yeah, just like this. Control S and do we make another scene? I don't think so.

This is not really necessary. Just collapse everything and shift D on the Y. It's quite

heavy. And I move everything to damaged satellite. Then hit okay. And I can hide these now. And you

can come back a little closer here. I don't want, I want it to like be roughly around the origin,

like the world origin. So yeah, let's start applying modifiers and let's start also,

oh I have another scene here. Oh, I have three scenes. I'll just quickly close these scenes.

Yeah, we will start applying modifiers and then like make everything single user just so that we

can have everything, you know, destroyed. So I'll just hit control A and then alt to apply all. Oh,

there is a lot of multiple users here. I'll just go to objects and then relations, make single user,

hold alt and then apply this to everything. Object and data. Everything here is in place it seems.

Control A, apply all. Now I see the shift that I was expecting, which is fine. I believe everything

has shifted towards that direction. So we can just adjust all these like modifiers. I will do

that real quick and then come back right to you.

Just a quick tip here. You had to like apply the modifiers before actually applying anything else.

So we'll just, just make sure that you apply the modifiers before doing everything or anything

actually. Yeah, so I don't see any modifiers here. I'll just hit control A and apply all again. And

this seems to be fine. So I'll just hit control alt X and make sure that the origin is at the

bottom of all these objects. And then object constraints or relations, because I want to,

I'll hold alt and then do this. And I need to make sure that I transform all these cables into,

are cables that are, I believe are necessary, maybe. Yeah, these, this is now unnecessary.

I can, of course, this, this is now being destructive because I already have like the

other, you know, the other dish that I didn't like touch at all, which is nice. So I can just

go ahead and have fun with all these curves, objects, convert, hold alt, make sure that they

are mesh. Now they are mesh as well. So everything here should be mesh with the exception of three

empties. I believe that these empties are controlling some, maybe some something here.

Maybe not. I've made everything unique or like single user. So like I cleared the parent of a

lot of things. So this should, should be fine essentially. No, not really. I'll just delete

these empties and yeah, I'll make sure that everything is single user again. I'll select

everything, object relations, make single user, no parent, clear parent. There we go. Alt to clear

parent. And hopefully that didn't cause any change in how things look like. Apparently not,

which is nice. You can now select the bottom platform or whatever you like, because I'll just,

so this is everything selected. Just making sure I just press G to move everything around and make

sure that I have everything selected. And then I'll duplicate this one more time. So, and you

will know why in a bit, I'll hit shift D on the Y. This is a bit faster, which is nice. And then

I'll move it into a new collection, like ready. And I will have this hide this collection as well.

So I have this collection. I'll select the bottom platform and then hit control J.

And you can see that we have some artifacts. I believe this is because we have auto smooth

turned off. But even if you still have these artifacts, you can go ahead and turn off shade

smooth, like make sure that it's shade flat, not smooth. This is looking good. Everything is

combined. I'll hit control S one more time and then move into the Eevee viewport. I'll just make

sure that nothing has happened with the renders. Again, remember something, all of these are just

different objects combined into one. Meaning if you go into edit mode and you want to maybe

manipulate one of these objects, you can just go into edit mode and then hit L over the object.

Then you have full control on that specific object on its own.

This seems good. Seems that I have everything ready. It could be a bit slow to go into edit mode

because you have a lot of geometry, you know, for Blender to calculate. And I believed the first

time you go into edit mode, everything is selected, which also is a bit time consuming

for any PC. Mine is a bit towards the low end, but, you know, just be patient and everything

will be fine. I believe because I'm also recording, this is taking up some space from my PC.

But this is all fine. I can maybe try and optimize some of the geometry we haven't optimized yet.

So a nice thing here is that I now have a collection of the material that includes all

the materials that I combine into each other, which is pretty nice. Meaning so if I maybe want to

decimate the grills here, I can just select one face here, maybe one edge,

and now I can select all of them and now everything is selected.

I can then go, I see that I have selected two million faces out of four million.

So I can just mesh, clean up, decimate geometry, and just like how we did with the bolts,

I think we don't have these bolts separated from the other platforms.

So I'll just quickly separate them. We should have a material for the bolts. It should be up there.

We'll see that in a bit. I just click control Z, which is like, you know, sort of a big mistake

you could do in edit mode, especially with such a large geometry size.

So I'll just select the bolts to make sure that I'm looking at the bolts right.

Okay, just making sure that I'm not missing anything other than those at the bottom,

those at the bottom, maybe here. Yeah.

I'll just select these. Of course, it would have been much better if that has happened

before applying any of the modifiers. This seems to be a bit slow. I'll just go into

a side view and hit alt Z. And then I will just shift select these.

I might select something in between. Hopefully not. Awesome. I will assign those bolts

and I'll be looking for more now.

There are bolts on this side I haven't deleted.

Which is good to know. Like, you can always have more room with more bolts deleted.

I could probably go on this side.

Maybe the Y here.

I'll just select those.

I'm just hitting shift L to make sure that I deselect whatever I

I'm just hitting shift L to make sure that I deselect whatever I

I selected by accident, you know, while selecting the bolts.

I can also do something else, which is like I can scroll up to this

grill platform and then deselect. And this should like deselect everything else. Shift L.

That deselected the bolts.

That's fine. We can just do that again. Bolts, select.

I'll just select everything here and everything here.

And I'll just shift L everything that I don't want.

Grill maybe. Do we have this one?

Oh, the grills. I'm doing the same mistake again. Never realized what happened last time.

I'll just shift L in here and shift L in there. I can go into wireframe and just deselect these

little guys.

And shift L.

All right. Welcome back. I would just quickly here selecting make sure that I select the bolts.

I can now go to bolts and assign. Just so that I can make sure that I have only bolts assigned.

The top platform here, if I select here. I'll just select that real quick.

Oh, I've selected everything. Awesome. Don't think yet up there.

I quickly go into side view and then x-ray view and then select all these bolts.

And assign them to bolts.

Again, don't do the same mistake I did. Just make sure that you properly name your bolts or

your objects or categorize them properly before actually going through this process.

Because it's a bit tedious if it's not too obvious.

I'll quickly save here and go back into edit mode just so that I can decimate.

You know, the grills, they're taking a huge amount of memory here.

As you can see from the bottom. Although that I believe that the textures are contributing to that

more than the actual geometry. But just so that we can work a little bit more fluently around

our scene here. I will decimate my objects real quick.

So, mesh, cleanup and decimate geometry.

I'll stay zoomed in so that I can see what's happening. I'll start low and then go up slowly.

Okay, it finally loaded but it seems that this is a bit too much.

I'll just increase it a little more to maybe 0.4 and let's see that again.

Alright, welcome back. I've set it to 0.6 and this seemed to be working fine.

So now we are down to 5 million edges, I believe.

So now we are down to 5 million faces.

I'll just deselect that and I'll just select

the bolts so that I get those

to selected. I'll go into X-Ray view

and I'll just select that by mistake.

I'll deselect everything and I'll go ahead and delete these side bolts.

Because they are taking up some memory and they are slowing our PC down.

I'll deselect everything and get back right to you.

Alright, welcome back. Now that we have these selected,

we need these bolts. I just want to delete the bolts at the top.

So just deselect those, the bolts at the railing.

I'll just hit X to delete these submerged bolts.

And now put down a few more faces.

I'll tap outside of the edit mode.

And yeah, this model is now ready to be destroyed.

In two ways and that's why we have another model that's called ready.

For now however, merge your object. Make sure it's one object.

And I'll see you guys in the next lesson.


