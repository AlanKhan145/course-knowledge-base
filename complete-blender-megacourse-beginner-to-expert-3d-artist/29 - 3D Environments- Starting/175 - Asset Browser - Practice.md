# 175 — Asset Browser

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 29 — 3D Environments: Starting |
| **Bài học** | Asset Browser |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 23:01 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Asset Browser** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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

Today, we will be talking about Asset Browser.

And the reason we are starting to talk about it a bit early

is for convenience, of course.

Whenever you're using the Asset Browser

or whenever you are making an asset,

you need to immediately save it so

that you could be able to use it either in the same scene

or in different scenes in the future.

I will start here by expanding this bottom area a bit up.

And then from here, I select Asset Browser

or for short, Shift-F1.

And yeah, Asset Browser.

So what I'm looking at is basically nothing here.

I don't have anything in here.

I believe that I had some assets saved before.

But let's actually keep at this for now.

So there are a few things you need

to know about making an asset.

So we will be creating an asset.

When making an asset or when manipulating any object,

you will be rotating, scaling, and changing

the location of that object.

So in most cases, I would prefer to not apply any transforms.

And by the way, if you are missing that menu,

let's actually turn on the Screencast key

so that you know what I'm doing here.

So what I did was hit Control-A. And usually, you'll

have a normal menu like that one.

If you're missing this, what you're going to do

is go to Edit, Preferences, Add-ons, search for Pi,

just like we did before.

And make sure that this Interface 3D Viewport Pi menu is active.

And then Apply Transform Pi hotkey Control-A

is also active so that when I'm hitting Control-A,

I'm introduced with a Pi menu.

So what you'll be looking to do is, at least in my preference,

I would usually preserve any data so that in case,

say I rotated an object and maybe moved it as well,

sometimes I would prefer and scale it as well.

So you have this amazing option of resetting

these to zero if they changed.

And I'm talking about the metadata of the object.

So Alt-S, Alt-A, Alt-R, and Alt-G.

So Alt-G will basically transfer the origin

to its original location.

Alt-R, reset the rotation.

Alt-S, reset the scale.

And why I'm talking about this is, you'll see in a bit,

is it really controls how you add in these objects.

So first thing is, you don't really

need to have the origin at the bottom for the asset

to spawn and snap on the face you're spawning it on.

So we'll duplicate this once.

And let's actually apply the location. So it's zero.

Let's duplicate this again and not apply the location.

Let it actually have some rotation.

I believe that the asset browser, when preserving

any assets, is not affected by the location.

It will be affected by rotation and scale only.

But we will see in a bit.

So what you will do is right click, then mark as asset.

Now, you are in the current file.

If you have a library of assets, make sure

that you switch to that again.

Let's refresh here.

No, that's in the wrong spot.

Anyway, whenever you're saving an asset,

it's saved essentially inside that file, that Blender file.

And whenever you're saving that file,

and you should, by the way.

So if you do not save the file, any objects or assets

you marked inside that object will be gone.

So here we can, let's actually preserve that as is.

So we mark this as an asset.

So if you drag over a surface, doesn't have to be a plane,

actually, you can drag it over this cube,

and it will automatically snap on it.

This means that if you also have like an icosphere maybe,

it's going to be snapping on any of these faces and so on.

Again, this cube has changed in location, but we applied it.

As you can see, the origin of it isn't really at the center.

Like if you click here, it's at the exact center of the cube.

But now, if you move it a bit, it's not.

Let's actually move the 3D cursor around.

I'm just hitting, I'm holding shift and right clicking

so that I can move the 3D cursor just

so we can see that the origin of this cube

is shifted from the center.

Now, if we mark this as an asset and then try to drag it,

it also isn't affected.

Like you're essentially grabbing in the object,

but the origin of it is here, and you're familiar with that.

So if you rotate anything, by default,

you're rotating around the medium point, which

is the origin essentially.

So you just make sure that you also reset the origin point.

I just did that by hitting Control-Alt-X,

as you see at the bottom there here,

and then origin to bottom.

And the origin is shifted to bottom.

You can do that with the polymorphs as well.

Just make sure it's activated.

Now, with an object that is rotated, is it scaled?

No, let's actually scale it as well.

With an object that is rotated and scaled,

let's mark that as an asset.

You also do not see that change.

What needs to happen is that you click at it,

Control-A, Apply All.

Maybe you reset the origin already.

And by the way, as you see, I did not mark it again

as an asset, because this is the original asset.

Manipulating that asset will automatically manipulate

all assets that you spawn later on.

So if I change that and then spawn it back again,

it actually changes.

But manipulating the asset you already have in the scene

does not change any of the older assets, as you can see.

And of course, it doesn't change the asset, the original asset.

Changing this will only make that difference.

So let's snap this to the ground just

so we can see what we're dealing with.

Another thing you might note is that the thumbnails of assets

do not show textures.

So if we actually show textures here and give this object,

say, to Textures, New.

Let's separate this and add a new area here.

Change that to Shader Editor.

And I don't need that side menu for now.

Make this material red and this one green maybe, or yellow, whatever.

And then I'll start assigning.

It's good here.

I'll make that unique.

Let's change all these back to white.

So as you can see, I believe I'm manipulating

the object that is an asset.

So nothing still changes with the assets

that I already added through the Asset Browser.

Make that one red.

As you can see, nothing here changes.

You might actually need to change the preview picture

so that it matches what you're looking for.

So you can actually let me snap the camera to the view.

Do I have it here?

Yeah, lock camera to view.

What I did here, by the way, is that I already

have locking the camera as a favorite.

And I believe you can do that in essentially

every setting in Blender.

In View, under View here from the side, I press N.

Scroll down to View or just click at it.

Camera to View is the option you're looking for here.

And that means that whenever you're moving the camera,

you move with it as well.

I now had the camera selected.

Now I press G on this. I move.

But when I'm moving now, just the default moving shortcuts,

like middle mouse scroll wheel, where

you're pivoting around the object and holding shift,

it's just the normal stuff.

They're under Engine. It's Eevee.

Let's actually control A. I don't want that.

I want that with them. Hide.

And then F12, I'll have. Oh, whoops. I did it.

Doesn't really matter.

It's for the purpose of it.

Let's actually save what we just did here.

I just pressed F12 to show, to render the camera,

and then F11 to hide and show the latest results.

Of course, you can have many slots.

We will get into detail.

We will get into that, about the details later on.

So I'll just save that photo on the desktop.

That's saving the file.

Image, Save As, Desktop 1.

Just for the purpose of this one, Save.

I now have an image that I can click in here

and then go to Desktop, double-click,

and that is my preview.

Now, of course, you can make it better,

but this is just for the sake of previewing

how you could change that.

I will now turn off the lock camera to view,

and go outside the camera, get back my view here.

And now, whenever I'm actually spawning back

this asset, it has the properties it was set to before.

So again, what you will need to do typically

is that you hit Control-S, Save, essentially,

and you save your file.

And then after saving your file, these files

are still an asset.

And you can add it to the user library

by just going to Edit, Preferences, I believe,

File Paths, and then under Asset Libraries,

you can add in multiple files.

Let's see if I have already anything in here.

Yeah, Add Asset Library. Name it Tests.

Of course, I didn't mark anything inside a folder

as an asset, so I don't see anything.

But just so you know, you can add whatever

you want inside it.

That also applies to materials.

So let's say that I made a glass material here.

I prefer the Andrew Price material, the Blender Guru guy.

You add in some light path.

Let's quickly here add some stuff.

I'm just hitting Shift-A. Transparent.

Then I have a math node with a mix shader node.

And that connects directly to that.

I have these two connected.

And then the render should be cycles, by the way.

That could show it better.

And then I have the shadow. Oops.

I think Diffuse and Gloss as the factor.

Maybe it's the shadow.

But anyway, OK, I like this material,

and I want to mark it as an asset.

What I'm going to do is here, just

go to the Materials tab, Material Properties.

And the material that I like, I'll just right-click and mark as asset.

And it's now an asset.

This means that I can also drag and drop this.

So let's do that.

Now, you can see that.

Let's go back in here.

Hopefully it shows. Yes, it does.

This now is the material.

It just applies to this, to whatever object

I drag and drop onto.

And yeah, you can now see why we are having these.

We are now talking about asset wraps

before we start into the scene.

You'll be making a lot of textures and sands.

And by default, when you have a normal,

say, principal BSDF, this is what you usually have

by default, connected to the surface.

You'll hit Control-Shift-T, look for a texture.

And that texture might have five different maps.

And you will be connecting them manually every time.

And it's a tedious process.

So it makes a lot of sense having this process.

To go through this process is much, much more convenient.

Again, because we changed the materials.

Let's refresh the preview.

Because we removed here the original material,

we actually manipulated the original asset.

Of course, you can see that the icon of an asset here.

So if you have a new material, this is not an asset.

This is an asset.

This is an asset.

This is not an asset, and so on.

So yeah, make sure that you are well aware of the rotation you apply.

Make sure that when you are changing or manipulating

the original asset, that if you use it again on the scene,

it will spawn with the new properties.

So you might be better off with duplicating the asset

and making sure that it is not an asset.

So you see these book stack.

This one does not have it.

This is not an asset. This is.

So manipulating that asset will essentially

change what you are spawning in from the default.

The same with the materials.

Yeah, you can play around.

We did not create any assets yet,

but you should make sure that you have a folder of asset.

I personally recommend that you have a good empty hard drive

you should dedicate your assets to.

And whenever you're creating an asset,

you're just done with the process

of making it over and over again,

or maybe appending it over and over again.

I believe here that when you're spawning an asset,

it's spawned as an append.

At least that used to be the case in older files.

So whenever you manipulated an object,

you manipulated all objects that you spawned as well.

I believe that they changed that default.

So now whenever you're spawning in the asset,

it's not, you're not linking it.

What used to be the case is that,

Control L, object data.

So when all assets that you added in

used to like be manipulated altogether, just like this.

You know, I'm only editing,

I'm only in the edit mode of one object, edit mode.

But as you can see, it used to be like that, you know.

But now in the newer version, at least,

you now spawn in one asset at a time.

And then these assets,

you get to manipulate them individually.

And if you want to link them,

you just select them all and select the one

that, you know, the original one

that you want to be the others manipulated as,

and then hit Control L, object data.

This also applies to materials and animations,

collections, instance collection, and so on.

So Control L, object data.

And now whenever you're manipulating an object

in edit mode, the others will be manipulated as well.

This of course does not apply outside edit mode.

So you can actually manipulate a single object

of these instance objects.

And maintain the other data as well,

as well as rotation.

If you want to like rotate them all, you'll just.

And now I'm not sure why they have two on them.

Oh, I might've duplicated them by mistake or something.

Oh, it's because I extruded them multiple times, my bad.

Yeah, I hit E and I didn't actually delete the older face.

So yeah, this is what it just did.

Anyway, you get to actually manipulate all of them at once

if you connect them.

If you do not, by default, you have different objects.

As I said again, if you have an asset

that does have a material on it,

it will not be shown here by default.

You will have to change the preview of it

just as I showed here.

And yeah, just make sure that you remember these stuff

so that when we save an asset inside our asset browser,

you do not get lost through the process

when we are making the actual scene.

Yeah, see you later.

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
