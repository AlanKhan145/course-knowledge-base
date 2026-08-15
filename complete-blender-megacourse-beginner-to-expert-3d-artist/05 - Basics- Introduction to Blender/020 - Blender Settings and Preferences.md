# 020 — Blender Settings and Preferences

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 05 — Basics: Introduction to Blender |
| **Bài học** | Blender Settings and Preferences |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 18:54 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Blender Settings and Preferences** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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

Okay, so now that we have the program installed, we do unfortunately need to talk a little bit

about settings before we dive in. I'll try to be as quick as I can here, and hopefully this will

be the driest part of the course. So if you take a look here at my screen, you'll no doubt notice

that yours does not look exactly the same. That's okay, this is just because I had Blender installed

on this machine previously, and somewhere buried in some deep folder somewhere, it remembers my

settings. After we do this first time setup, you will get this screen every time you open Blender,

but for the first time you'll get something that looks like this. And I apologize for not having

a live version of this, but I had to install it onto another computer to get this screen to pop

up again. So we have to work with the screenshot, but it's really simple and it shouldn't be a

problem. Okay, this is the quick setup screen. Now if you had a previous version of Blender installed

onto the same machine, as of the 3.0 update you can come down here where it says load 2.93 settings

and click that, and it will load all of your preferences from the previous version, presuming

you wish to keep them the same. But for the purposes of this course, I'm assuming that this

is your first time ever downloading or using Blender, so we're just going to do the quick

setup from scratch. For language, we're going to leave it at English. For shortcuts, you want to

keep them on Blender. I know Blender has enabled support for people that are switching from another

program like Maya, so they don't have to learn new keybinds, which, believe me, can be really

difficult. I don't believe that Maya has any support for quickly enabling Blender shortcuts,

and in fact, last time I tried to manually set up Blender-style shortcuts in Maya, I was unable

to because they do not allow certain functions to be rebound to different keys in the default.

Which is another good thing about open source software like Blender, is that it tends to be a

lot more configurable than company-supported software. However, the trade-off for that is

often that open source software is slightly less user-friendly. But as I mentioned in the last

video, Blender had a major update a few years ago, and now it is much more user-friendly than it used

to be. But I digress. I am assuming that someone taking this course is not coming from another 3D

modeling program, but is doing this for the first time, so we're going to keep the default Blender

shortcuts. Next up is Select With. Now, this is referring to when you want to select something,

whether you use the left or right mouse button, which seems probably a little strange. Like,

why would you want to select with the right mouse button? But actually, it used to be the default in

Blender back in maybe the 2.4, 2.5 days. I don't really know why they went with that at the time,

and to change it, it wasn't something that popped up on nice on the opening screen like this. You

sort of had to navigate down several submenus to find it. But maybe you learned to use Blender

a long time ago, and were used to the right click select. So if that's the case, they would still

have that option here for you. But luckily, Blender now defaults to Select With the left click,

so we're just going to leave it here at left. Okay, so the next setting is what function do

we want to have bound to the spacebar on our keyboard? Now, it defaults to play, which is

geared toward an animation setup, but I actually find it more useful to bind it to search. Because

oftentimes, you'll need to use a really specific operation that Blender has, but maybe it's not

one you use over and over, so you'll forget what menu it's under. Or, and this has happened to me

quite a number of times, you'll need to use an operation and you did know where it was located,

but you updated Blender to a new version, and they moved some of the menus and things around.

In this case, it is extremely helpful to be able to just hit the spacebar and search for the

function you need. So here where it says spacebar, go ahead and make sure that you click search.

Now, this is really up to you. It's purely cosmetic. All it will do is change the color

of things like the background, the menus, and outlines. I personally use Blender Minimal Dark

because I find that I spend many hours a day staring at the screen using Blender, and I find

that the brighter themes make my eyes start to hurt more quickly. Plus, darker programs, because

they are emitting less light from your monitor, use less power, or so I've been told. So you can

play around with these, pick your theme, and don't stress too much. You can change it later if you

want. So once you have all that set up, you're going to click down here where it says save new

settings. So there's just a couple more things that we need to go over regarding settings and

preferences before we can really get started. So the first thing I want to discuss is the mouse

and keyboard setup. Now, in order to use Blender or really any other 3D software, you do need to

have a three-button mouse. And just to clarify what I mean by that, a three-button mouse is a

mouse that has the left click, the right click, and the middle mouse scroll wheel.

The middle scroll wheel is really important and navigating around in 3D space really hinges on

your ability to use this button. So if you don't have a three-button mouse, get one. They're about

$15 on Amazon. It doesn't have to be fancy, it just has to have this middle scroll wheel.

If, for whatever reason, you absolutely cannot use a three-button mouse, Blender still has your

back. If you go under edit, preferences, and into input here, there's an option that says

emulate three-button mouse. Enabling this will allow you to use the same functions that the

functions that the scroll wheel provides by holding alt and using the left mouse click.

This might be an option for you if you're using something like a trackpad.

You can still simulate that. I actually first learned Blender on a 2011 MacBook Pro

using only my trackpad because that was all I had, but I really don't recommend it because

it's just much more difficult to use with a trackpad, and laptops in general just aren't

powerful enough to run programs like this at a high level. You can get by in the beginning for

sure on a laptop, and if you are just kind of trying this out to see if you like it and all

you have is a laptop, you will be totally fine in the beginning. But there comes a point pretty

early on really where you will hit a performance wall, and you will be trying to model something

that is too complex for the machine, and you'll get frame drops and lags that really make the

program unusable. But cross that bridge if and when you come to it. So the next bit of settings

I want to discuss is the numpad, and the numpad here is pretty critical

in Blender as we're going to see more in future videos. But if your keyboard doesn't have one,

and all you have is these numbers across the top of the letters here, that's still okay.

Just make sure that in that same input preferences window you're going to want to click

emulate numpad here at the top. This will rebind all those functions that are normally on the numpad

to that top row of number keys. You'll notice that emulate numpad is already on for me because

my keyboard does not have a numpad. Any of these key binds can be changed by navigating

to the key map tab under the preferences window, selecting the category, and simply changing the

binding there. You can also search for the function by name or by the key that it is

currently bound to and change it that way. We're not going to be changing any of these,

we're just going to leave them all at the default. I just wanted to show you

where you could do that if you needed to. The last thing I wanted to discuss are add-ons.

Add-ons are essentially plugins for Blender that can extend the program's functionality.

Blender comes with a whole slew of add-ons that are installed into the program but not enabled

by default. You can find these add-ons by, from this window, opening that preferences window again

which is edit preferences and coming over here to the side and clicking add-ons.

So all of these add-ons are the ones that come with Blender. To enable any of these add-ons,

all you have to do is click the checkbark next to it and to disable, unclick, obviously.

A lot of these are enabled by default such as these import-export options. For example,

this import-export FBX format is there by default and this allows you to export your models into

this file format which is standard for sharing across other programs such as Unreal Engine,

Unity, that sort of thing. Any of these add-ons that are enabled to begin with,

I would leave on because if you disable something by default, down the line maybe

you're trying to, for example, export an FBX and the menu option just won't be there.

And when you Google it, you probably won't find very many answers because nobody has really had

this problem because it's on by default. But in addition to the ones that are on by default,

there's a few that I highly recommend you enable. The first is Mesh Loop Tools and the second,

just down below it, is Node, Node Wrangler. We're going to cover more what these do in

future videos. For now, just make sure that these checkboxes are enabled.

The last one that we're probably going to use in this course is UV Text Tools. But this one

does not come packaged with Blender. We're going to have to download it, but it's going to be

really simple. We won't be using it right away, but we will eventually and we're going to want

some more tools when we come to the texture portion of the course. And this is a good way

to demonstrate just how to add plugins that are not included with Blender. As I mentioned in the

previous video, Blender is open source, which means, among other things, that anyone is able

to write plugins for it. The code is not proprietary, so no company controls what

plugins are written for it. There are a lot of really great plugins available online that extend

Blender's functionality in some pretty substantial ways. That being said, of course, because it's

totally open, there's no real support or help desk of any kind should you have an issue with one of

these outside plugins. And as always, be careful of what you download off of the internet. Make

sure the source is legitimate, etc. So in order to get this text tools add-on, we're going to open

a browser and we're just going to google Blender text tools. Now the first thing that's going to

show up should be this GitHub page. And we're going to go in here and what GitHub is, if you've

never seen it before, is basically it's just an online location where people can upload source

code for applications and plugins such as this one. You don't need to log in or sign up or anything to

access these files, so don't worry about that. So when you click inside, you'll see this page

and you can scroll all the way down to the bottom. And there's a little readme file,

which just explains a little bit more about the functionality of text tools.

So read that if you like. But for now, let's go back up.

And we're going to go on the side here where it says releases.

Underneath that, there's a link that says text tools 1.4.4. Now, depending on when you are

watching this, this version may be different. But that's okay. Just click whatever version says

latest. So it'll bring you to this page. And this is just basically a list of everything

that's been updated since the last version of text tools. So scroll down to the bottom here

where it says assets. And we're just going to download this zip file. I'm going to second to

download. And once it's downloaded, we want to go to the file location. For me, because I'm using

Google Chrome, I can just right click and hit show in folder. You can see I've already downloaded it

before. So I was testing this out. So once you have found the file, we're actually not going to

unzip this. Now, it's up to you whether or not you want to make a designated spot to keep your

Blender plugins. You can certainly leave it in the downloads folder if you wish, because once

Blender has a copy of these files, we won't need this zip file anymore. You could delete it. And

the plugin would still work. However, if you ever need to reinstall Blender for whatever reason,

you would need to locate these original files again and redownload them if they were deleted,

which wouldn't necessarily be a problem. But there is just no guarantee that the author of the plugin

won't have taken them down, which would leave you without access to those plugins. And plus,

it's just faster if you have them already. So I believe as of Blender 3.0, you do not have to

reinstall add-ons when you update. But I could be misremembering that. Either way, I think it's just

good practice to keep this zip file somewhere where you can easily find it again should something go

wrong. So for my setup, I went into the Blender install location, which for me, let's see,

Program Files, Blender Foundation. This is where you'll have any and all versions, as well as

settings and some other supplementary files for Blender. Now I added this new folder outside of

the Blender version folder, and I called it add-ons. This is basically just a repository of

backups of all the plugins and things that I have downloaded. You can obviously put this folder

wherever you wish, just as long as you know where it is. So back in Blender, all you have to do to

get any downloaded add-on working is in the same preferences window we were just in,

go to add-ons, and up at the top, there's this install button. Click that, and it's going to

bring up this file browser. So now we just need to navigate to where that zip folder is. And

if you have it up here in your file browser still, I'll quickly navigate back to it.

You can just click on this, right-click, copy, and then in the location bar on the Blender file

on the Blender file browser, click CTRL-V, paste, hit enter, and it will bring you right there.

So now all we have to do is just select the add-on, the .zip file, and hit install. You'll

get a little message down here saying that it's been successfully installed. And now what we want

to do is just scroll and just make sure that it's enabled. Check that box if it's not already ticked.

Now like I said, we won't be using this right away, but we're going to be using it in a future

video. And I just wanted to show you how to add additional add-ons into Blender.

So now that we have the program up and running, we have all of our preferences set,

we're ready to jump in. And in the next video, we're going to be doing that.


