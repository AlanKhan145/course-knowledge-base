# 069 — Introduction to Materials

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 16 — Basics: Introduction to Textures and Materials |
| **Bài học** | Introduction to Materials |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 9m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Introduction to Materials** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
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

We are now very familiar with how to edit the shape of objects in Blender

using modeling, sculpting, or a combination of both. So next we need to look at how

to manipulate the appearance of the surfaces of these objects and the way

we're going to do that is through materials. Now materials are properties

of mesh objects in Blender that give them their surface appearance. As I said

materials themselves are comprised of individual properties such as color,

roughness, how metallic an object is, the opacity, and many more. We can view the

materials we currently have applied to our objects by enabling the material

preview viewport shading mode in Blender. To do this we're going to come up to the

right hand corner of the 3d viewport and we can click on the material preview

viewport shading icon right here or we can hold Z on our keyboard to pull up

the radial shading menu and select material preview. So here we will see the

materials I have applied to these cubes. You can see that through using materials

we can end up with vastly different results on the same object. So here we

have a sort of a woven fabric, we have a wood material, and we have a carved marble

material set up on these cubes. So let's take a closer look at these materials

themselves. To do this we can select any object in our scene which has a material

applied to it. We can come over to the properties editor window and we can

select material properties tab. Now this will show any materials we have applied

to our object up here as well as the individual properties of that material

in the list down below. Let's add a new cube to the scene to see how we can

start from scratch working with materials. So I've just hidden the

objects in this scene by clicking this checkbox on the collection to

which they are assigned and I'm going to add a new cube to this scene. Shift A,

mesh, and cube. When you look at the material properties tab for a new object

in blender it will not have any materials applied to it which we can see

because this window is now empty. To add a new material to any object in blender

we simply have to click this new button under the material properties editor.

This will create a new material with a default name of just material and all

default values which will give it a flat white appearance. We can rename this

material if we like by coming into this input field and typing in a new material

name. So let's look at some of the properties that make up this material.

All of these can be found under the surface drop-down in the materials tab.

Now there are a lot of options here that will control the appearance of this

material but we're only going to look at just a few of them to start out with.

Base color will, as the name implies, affect the color of this object. By

default it is set to a white value but we can change this by coming in here and

clicking on this white bar which will bring up a color wheel. We can then click

and drag this dot around to change the hue. We can change the lightness by

clicking on this dot on this black and white slider and we can change the

saturation either by pulling this dot closer into the center or by changing

the saturation slider here. These sliders will affect the color as well.

This is just a more numerical way. H stands for hue which controls what color

it is. S stands for saturation which means how vibrant the color is and V

stands for value which is the lightness or darkness of the color. A stands for

alpha which is the opacity of the color but with our current material this

slider will not have an effect so don't worry about this slider just yet.

The next property I want to look at is the metallic property. As the name implies it

controls how metal an object looks. By default this value is set to zero which

means that this object is a non-metal object. By clicking and dragging on this

slider we can increase its metallic value all the way up to a maximum value

of one which indicates a fully metallic object. The next property I want to look

at is the roughness value. Again the name is quite self-explanatory here it's just

how rough or smooth this object is going to appear. By default it is at a 0.5

value which is right in between its minimum and maximum values. If we slide

this up to 1 by clicking and dragging we will have a fully rough object and if we

slide it down to 0 we will have a fully smooth object. Any object in Blender can

have any number of materials assigned to it and the way this works is by adding

material slots. By default a new object in Blender will have no material slots

and therefore no materials will appear on it. We can add a new material slot by

coming up to this box up here and clicking this plus icon here. You'll see

now that we have a second material slot here but we don't have a material in

that slot. So we can add any material that we currently have in our scene by

clicking this drop down and selecting a material here or we can add a new one to

this slot by clicking the new button. We'll get a new material in this slot.

Let's rename it to something and you'll notice that when I start changing these

values nothing on this cube is being updated and that is because although we

have two materials on this object by default every face of this object is

displaying the first material that we have applied to it. In order to see this

new material on our object we need to manually assign which faces we want to

display this new material. So let's do that by coming into edit mode, select our

cube, press tab to come into edit mode, make a selection of any face or faces

that you wish to have the new material. Once you have these selected simply

select the new material in the material slot list and click assign. Now if we tab

back into object mode we can see that we have our new material assigned to the

faces we had selected. We can select faces based on their material simply by

selecting the material in the material slots list and pressing select. Now this

will give us a selection of every face that has that material assigned to it.

Alternatively we can also deselect based on material with the deselect button. So

assigning material slots is on a per face basis which means that I cannot

have multiple materials on a single face. Each face can only have one

material displayed on it at a time. So that is just the very basics of

materials. Now we're going to use material slots and the values we went

over to start adding color to some of our objects. So when we come back in the

next video we're going to create a simple object and we're going to color

it using materials and material slots.