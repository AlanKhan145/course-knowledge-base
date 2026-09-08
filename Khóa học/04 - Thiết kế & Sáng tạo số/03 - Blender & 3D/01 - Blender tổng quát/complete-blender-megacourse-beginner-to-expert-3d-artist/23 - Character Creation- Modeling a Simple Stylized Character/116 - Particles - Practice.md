# 116 — Particles

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 23 — Character Creation: Modeling a Simple Stylized Character |
| **Bài học** | Particles |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 8:01 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Particles** trong pipeline của section.
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

Hello guys, before going to compositing, I figured I show you another way to make your

scene a lot more interesting. It is by adding particles to add particles, we are going to

do the same thing we did to add volume. So we go press shift a mesh and Q and then a

scale it up to the same size as our scene or actually where the camera is going to be

seen. So it's not, it's not going to be just all the scene, we just have to make sure that

it's in the camera, something like this. Something like that is enough. And then we add a material

over here. And then we remove this material, the shader, go to volume, add a volume, volume

scatter. But this one, this volume is not going to be a volume that is going to change how the

scene is going to it's not going to act as a volume. So we're going to change it to zero,

we are just going to make sure that this cube is not going to be seen in the in the scene,

it's not going to be seen in the scene. So next we go to the particle properties, click on plus,

we go to hair, what I'm going to do now, I'm in cycle. So let's change vectors, maybe I'm going

to do now it is now adding some hair particles around the cube, I'm going to tell blender that

I want the particles to be inside the cube. So if I go to view, push it wireframe is emitting from

the normals from the outside surface of the cube. Alright, then I'm going to change the image from

in the source sub panel to volume, then it's going to add one that is going to add some hair

shapes to the inside of the cube. The next thing I need to do is to add an object that I can tell

blender that I want this object to be shown inside inside this inside this cube, let's change

this cube name to particles so we don't lose it or anything. Then, as I was saying before, I want to

tell blender that I want an object to be shown in this volume, not the hair. So let's make the object

shift a mesh and let's go to icosphere. And then let's go to the zoom in and I want it in the lowest

possible subdivisions like that, because we are going to this this particle, the whole thing about

party is going to duplicate the duplicated around an object. So let's go to edit mode. And let's

actually change a little bit about the shape of this icosphere, something like this, we want to

make some particles inside the scene. So it's going to be something random like this. And then

I'm going to select my cube, my particle cube, and then go over here to render and change the render

as from path to object. And then I'm going to select my object with this eyedropper over here.

So you can just select it over here. Or if you have a lot of object, you just select

eyedropper and the selected object, which in this case, it's icosphere. So I'm going to select my

icosphere. And as you can see over here, blender is showing this icosphere inside this cube.

Alright, so if I go around here, as you can see, this cube is playing as just a placeholder for

these, these particles, the same thing we did with volume, right. So we can change the

the length and the radius of these shapes with this over here, here, or we can go over to render

and change the scale randomness to 100%. So it is making some scale randomness to

the shapes and then we can change the scale over here. Like this. Let's go to camera view with zero

and then let's go to cycles. Now let's see the shapes. As you can see, these are the shapes

around my character is going to make some changes to the lightings as well.

Especially if you add material. So if you add material to this part, you'll just select your

origin object and go to material, add the material. And then now if I change the color,

as you can see, the color of these particles will change as well. Okay. So what I want to do is

to change back to, I want to add some emission over here, but Eevee isn't good at reading this

node over here, this emission, not over here. It's not going to apply a lot of different things

over here that I can see. But if I change it to cycle, and especially in Eevee with emission,

it's going to destroy the whole shape of the object changed to cycles. Now let's set the

color of the emission. So I want to keep the base color to something low like this, maybe

something like this and then go to emission. And now I can change the color of my particles

like something brown maybe might work in this scene, something like this. So it's it emits

something brownish color over here. And then you can go here and maybe darken this color.

I don't want it to take a lot of me a lot of attentions.

Something like this, and then make it dark here as well.

Something like this, it's gonna add a lot to the scene, it's gonna make it a lot more interesting,

but we need to adjust adjust numbers. So you can adjust the numbers over here is set on 1000.

If you want it to be less, you can just set it to anything you want. I think I think now it's

I think now it's enough, but the scale needs to be a little bit more.

It needs to be a little bit more

smaller. So 008, 005.

Yeah, that was okay. So we have some, some particles floating around the area.

And now that is much more interesting, and much more appealing to die. So I'm going to render it

out. I made some more changes to the volume over here. So in cycles, it was making a lot of

it was making a lot of attention was taking a lot of attention, like making

strong effects to the whole scene. So I just decrease the density over here.

And for the for the main lines, I just made some adjustment for the power. All right.

And that's it. So yeah, I'm going to render it out. And then in the next video,

we are going to do the compositing.

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
