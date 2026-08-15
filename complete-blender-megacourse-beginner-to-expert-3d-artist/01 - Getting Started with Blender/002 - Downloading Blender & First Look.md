# 002 — Downloading Blender & First Look

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 01 — Getting Started with Blender |
| **Bài học** | Downloading Blender & First Look |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 6:28 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Downloading Blender & First Look** trong pipeline của section.
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

Welcome to the first lesson of Blender's beginner's course.

In this lesson, I'm going to download Blender and have a first look at the interface.

I'm going to show you how you can manage your projects and what you need to get started.

So here is Blender's website.

Blender is an open source software company, so this means that it's free to download.

So we can go here to the top bar to download and click this button right here.

Once you click download, you'll be redirected to this screen right here,

where you can contribute to Blender.

Since it is an open source company, you can donate monthly or one time if you want.

So here on the top bar, if we go to download and right here under requirements,

you can see all the settings that you need to run Blender smoothly on your computer.

If you have this computer's requirements, a keyboard with an iPad and a mouse with a mouse wheel,

you are ready to get started.

Also here under support, you can see Blender's documentations.

If you have any doubts, you can search right here.

Okay, so now my download is finished.

So to install Blender is pretty easy.

Just follow here next, choose your directory and click install.

So let's open Blender for the first time.

The first thing you'll see will be a splash screen,

where we have an art and the version that you're using.

You can create a new file or if you already work with Blender, you can open your recent files.

So you can click anywhere to close this window.

This is Blender's main interface and it is divided by three areas.

The first one is your file management.

It's this here on top.

Then you have your different workspaces, as you can see here.

And the last one is the status bar.

It's right here at the bottom and it gives you tips and shortcuts

about how you can move your scene.

So the first thing that we are going to do is give this project a name.

So you can see here right on the top bar that we have unsaved Blender 5.1.

So you can go here to file and let's go to save as.

You can choose your folder and name your project.

So Blender first project and click save.

Now you can see that your project is named right here.

So let's go to file again and see other options that we have.

So here we have link and append.

These are both ways that you can bring objects from another Blender file to a current one.

And you also have import and export.

So let's import an FBX, for example.

Here I have an asset library that I separated and I have a flower FBX.

So I can click here to open it.

You can also drag and drop files.

So let's remove this.

And I'll go here to my browser and I can drag and drop on my viewport.

And you can also import objects this way.

So let's remove the cube.

Okay, so now I have a flower in my project.

Let's go here to the shading workspace.

So you can see here that I have my model and I have some textures.

If you can see right here, if I click open image,

it directs me to the file where my texture is located.

Now let's talk a little bit about file management.

So if I save this file and don't bring my textures to another computer, for example,

and go to open my .blend file, this flower will have missing textures.

So let me show you an example.

I have all my textures right here.

So let's see if I move them, for example, in another folder.

Now I saved and I'm going to close this project.

As you can see here, the flower turned into a bright pink shader,

which is signaling that you lost your textures.

So you can go here to file, external data and find missing files.

Go to the direct folder and click.

Now everything is reassigned automatically.

So keep this in mind when you're working with textures in Blender.

Now there's one more thing that I want to show you about file management on Blender.

Let's say that I have this flower here on this .blend file

and I want to use it in another file.

Blender has a system of libraries.

So you can go here on edit and preference.

You can see right here under file paths that we have asset libraries.

So let's create a new one.

I'm going to use this one.

So here you can see that we have a library.

You have an import method.

You can pack, you can append,

which means that you can bring from another Blender file

and be able to modify this object,

or you can link where you won't be able to modify it.

Basically, that's it.

So I have an asset library.

If I go here, I can go to asset browser or click shift one.

You can see that I have nothing here.

Let's press T and go to our asset library.

We already selected.

So you can see there's nothing here.

So what we need to do is to save a .blend file on that folder.

So the first thing I need to do is go here to my outliner,

my flower, and click at mark as an asset.

And let's do the same thing for the material.

And mark as an asset.

Now I will go to file, save as,

and save my file into the asset browser.

I'm going to name it my flower.

Okay, so now I'll open a brand new file on Blender.

You can see unsaved. Perfect.

And now let's go to the asset editor.

Go to the asset browser.

You can see that I have some defaults here,

but if I go to my asset library,

you can see that I can bring my object here.

So this is one way that you can use your asset library.

So that was a quick overview of how you can manage

your projects and files inside Blender.

In the next lesson, we're going to learn a little bit more

about workspaces and how you can navigate your viewport.


