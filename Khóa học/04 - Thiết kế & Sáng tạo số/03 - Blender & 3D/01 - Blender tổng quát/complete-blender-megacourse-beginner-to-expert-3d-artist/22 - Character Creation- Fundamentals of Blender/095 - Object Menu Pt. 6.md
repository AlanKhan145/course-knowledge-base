# 095 — Object Menu Pt. 6

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 22 — Character Creation: Fundamentals of Blender |
| **Bài học** | Object Menu Pt. 6 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 6:34 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Object Menu Pt. 6** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

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

The next thing is a light probe. You may not use this if you are using cycles. But

I want to show you the basics of what are probe lights. So you know at

least what they do. So if I make a scene like this, like, let's make a scene like

this. And then make a cube. And then let's make all right, all right, we have this scene.

And let's now light this scene with sun. All right. And then let's let me just rotate this.

We have this scene in Eevee. To make the Eevee engine better, we enable ambient occlusion.

And in the light properties, we have these options, like shadow and context. So context

shadow is very important for us. So if you if you can see right here, this shadow is

not good. So if I change it to cycles, you can see that we get a very much more realistic

shadow over here. If we change it to Eevee, you'll see that this is bleeding like this

shadow right now is bleeding. But by going to the light properties and enabling this

context shadow, we instantly see that this problem is fixed. All right. But another problem

we have with Eevee is that if I make a plane, and then I rotate it like this, all right,

we get a shadow like this. Alright, but realistically, if I change it to cycles, our shadow must

be softer, right here. Okay, it shouldn't be this. This harsh, or here to fix that we

use indirect lighting for Eevee. So this whole section, this whole light probe is meant for

Eevee, which is a real time renderer, which we are right now in it. All right. So I made

I make that I go to light probe, this one radians volume, and I have this cube over

here, if I move it up like this, all right, then I scaled it the same size as my scene

is okay, then these dots shouldn't intersect with the measures I have in my scene. So I

have this right here, maybe change the scale a little bit in the z axis. And if I go to

the Eevee render right here in the properties and go down here to indirect lighting, I have

this option batch indirect lighting. So what does this option do if I click on it, it will

back the indirect lighting based on the probe I have made right here. So if I click on this,

you can see that innocently I get a better result for this shadow. So if I click, let

me undo that so you can see better. So I'm going to undo the baking. So as you can see,

this shadow is not realistic enough for me if I bake it. Yeah, I changed the location

of this probe. So if I bake it, I get a more realistic shadow over here. So if I compare

the Eevee to cycles right now, we can see that they're quite identical. Now. Right. That is the

whole thing about the light probes that you need to know right now. And the camera by clicking on

it, you can make another camera and then another camera maybe and then another camera. And you can

use multiple cameras to see your character in multiple like views. And to change the camera,

you go to here, the scene properties. And right now it's set to camera, this camera one. So I can

also choose my other cameras like camera or one and the camera that I'm I changed the name by

mistake. So if I press zero on my keyboard, I go to this main camera, if I change my camera to

camera one, I go to the other camera and the other camera. Let me delete these with X. And then the

speaker and the force fields are more for animation. So I'm not gonna talk them talk about

them. And the collection is then you can instantly like, like, make your collection appear here,

like this, the collection I had for armature, it makes another collection for you with the object

you had in your collection. Alright, so that's all the thing I wanted to show you. So this menu may

seem very, like overwhelming at first for you. So I wanted to explain the main thing. So you know,

which what each one does, and all that. In the next video, we are going to take a look at the

Edit menu. So over here, Edit menu, you're going to go to here, I'm going to explain to you all

the important option you have here. So don't get scared by these options. I'm going to explain to

you all the important things that you need to know. So you don't need to know all these things

to model the input. So until next video, goodbye, and have a great time.


