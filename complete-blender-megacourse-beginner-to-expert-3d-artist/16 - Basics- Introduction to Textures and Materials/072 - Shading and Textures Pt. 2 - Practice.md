# 072 — Shading and Textures Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 16 — Basics: Introduction to Textures and Materials |
| **Bài học** | Shading and Textures Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 18m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Shading and Textures Pt. 2** trong pipeline của section.
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

So we have experimented with this point with single values for all of these inputs which we

have controlled here through the sliders or through these color wheels but there are these

input dots next to each of these values which means that we can add a more complex input to

this rather than a single value. So these inputs can be given in the form of textures. Textures

in 3d modeling are simply 2d images that we can project onto the surface of our model such as

this image here. So inputting textures as the input here will allow us to have multiple values

for each property of our material without using multiple material slots and we can also display

more complex color information on a per face basis. So these values of base color, metallic,

roughness can all be given image inputs to have more complex materials rendered in our screen.

So how do we get an image texture into Blender? Well we're going to import it from our file

browser which is why this is appears right here on the screen. So to import a texture you must

first have it saved to a location on your computer. For instance I just have some textures saved right

here in a file browser. So let's navigate to that location. Mine is saved on my desktop in a folder.

So I have navigated to the location on my computer where I have these files and we will see little

previews of them right here. So to import any of these into our material all we have to do is click

and drag into our material. We can also do this manually by hitting shift a in the graph, coming

to the texture option and adding an image texture. We will get a node that looks like this where we

can click open and we can navigate to the location on our desktop where the texture is saved and we

can add it that way. When we click on this node we see a preview of the image texture here in the

image viewer. Now to get this image to be displayed on this mesh all we have to do is click and drag

out from the color value into the base color. Let's turn off the metallic on this object and let's turn

up the roughness. So now we have a nice brick texture on this sphere and we are not limited by

how many faces we have and displaying each color individually in a material slot. As you'll see we

still only have one material slot on our mesh. So we can combine several different types of images

in order to get a more realistic texture. Currently we only have a base color value input for this so

we are seeing the color of these bricks but when we view this from a glancing angle they appear

quite flat on our mesh. So by adding extra input types, extra input images, we can increase the

complexity of this material. So let's add some let's add a texture map for the roughness value

of this material. So we're going to do this by adding a roughness map image which I have right

here. Let's click and drag it into our material. We can view any of the textures in our scene by

clicking the drop-down here in the image viewer window and selecting it from the list. So this is

a roughness map for the brick texture. You'll see that we can clearly see the bricks defined here

but this map is in black and white. Now roughness maps as well as a couple other of these data types

will take an input of a grayscale image. So the image must be black and white and the way

Blender reads this is that it looks at this image and it says okay everywhere that is black or darker

is going to be less rough which means it has a value closer to zero and everywhere that is white

or lighter will have a more rough value that is closer to one. So we are familiar with these values

from using the slider but let's put in a more complex input type by connecting this color to

the roughness value. The other thing we need to do when we're using non-color textures is to change

the color space from sRGB to non-color and this will give us a more accurate depiction of our

roughness map. So now if we're looking at this at a glancing angle we can see that there is more

variation in the roughness across the texture than we were getting with the single value. Let's

reconnect it and disconnect it and you will see the difference. Now the last input texture I'm

going to use for this material is called a normal map. A normal map, let me just bring it in and

show it to you, the normal map in 3d art looks something like this. You will get this sort of

blue purple map that has your texture on it and there's a lot of complexity in the algorithms

that go into how this map works which we're not going to get into but just know that a normal map

is a texture input that we use for faking the lighting to create bumps and details on our object

that are not really present in our mesh. So we could get details in this by sculpting because at

the moment these bricks appear quite flat on our texture. We have we have our color and we have our

roughness value but there is nothing to make these bricks look like they are actually coming out of

our mesh. Now this can be achieved by sculpting but that would create a very dense high polygon

object that would really eat up our processing power. So instead we're gonna fake it by using

this normal map. So to use a normal map in Blender we're going to bring in the image right here just

by clicking and dragging and we cannot actually connect the color to the normal directly. You'll

see we get a lot of errors, this is not what we wanted. So we need a way to interpret this color

information into a way that Blender can understand. So we just need to add a node right here to

convert this. So let's press shift and A to add a new node and let's look at our vector nodes and

let's pull in the one that says normal map. So all we have to do to get this working is drag the

yellow dot to the yellow dot and drag normal to normal. And now you will see we're getting a lot

more detail here using this fake lighting that makes this brick appear like it is actually brick

and it looks like it has bumps and dents that are protruding from the mesh. But if we look at a

glancing angle we see that the silhouette has not actually changed. This mesh is still flat and if

we tap into edit mode it still has the exact same number of faces. We haven't changed it in any way.

So normal maps are how we give the illusion of high poly detail onto a low poly object.

Now there are two types of textures that I want to discuss. The first is called a tiling texture

which we have a great example of right here. Let's pop into the layout mode and we are still in our

material preview so we can still see our materials applied. Now a tiling texture is a texture that is

seamlessly repeatable over a large surface area or over any object. So I have this brick texture

currently applied to my sphere but if I were to add a cube and apply the brick material to it just

by coming into the material properties, clicking the drop-down and selecting our brick material

you'll see, let's rename this really quick, you'll see that we have our bricks and they are being

tiled over this sphere and this cube in a way that still relatively works and is clear and we can see

that they are bricks. Now all textures are tiled but not all textures are tileable. So what I mean

by that, let's come back into our shading viewport and take a look at this image viewer here. So when

we look at our brick texture we're just given this square with the flat image on it. Now we'll get a

little bit more into this when we talk about UV maps in a future video but even though we are

previewing just one tile of this, Blender is looking at our image texture and it is repeating

it in all directions. So to view this in our image editor let's hover over the image editor with our

cursor and press N to bring up the sidebar. Let's come down to the view tab and let's click on this

image check. So this is how Blender is using this texture, it is tiling it infinitely in four

directions. So in this case we have to zoom very very far out before we start noticing the repeating

details, which means that we can use this texture to cover large surface areas and it will not be

noticeable to the eye that we are repeating it. Now tileability, which is also sometimes called

seamlessness, is a property of this image itself. Let's get back to our single preview. So what

makes an image tileable is the properties that make a texture tileable are first the lighting,

notice that this image is lit in a neutral way so there are not large shadow forms on one side

and light forms on another. There are no obvious breaks in this pattern so that when I turn on

repeat image we can see that this brick when it is continued over seamlessly matches with its

counterpart on the other side. You will typically see tiling textures used on things like walls,

ground, planes, and bodies of water, things that cover a large surface area, and again these tiling

textures can generally be placed on any 3d object without major errors. It's a little stretched here

but we will look at how to fix things like this in a future video. Now the second type of texture

is called a unique texture and unique textures are textures that are specific to an object based

on its shape and its UV map which as I said before we will discuss in a next video. Things like unique

props and characters will typically have unique textures. So let me show you an example of an

object with a unique texture and to do this I'm going to import an object from elsewhere on my

computer. So to import an object it depends on the file type of that object but the most standard

file type for sharing 3d models is the FBX format. So let's import in FBX now. Let's come up to delete

this and let's just move this out of the way because it's going to import our FBX at the

location of our 3d cursor I believe if it is exported correctly. So let's come up into file,

import, and select the file type we wish to import. In this case it is the FBX file format. So now we

just need to locate to the location on our computer where our FBX file is currently placed.

I'll have to pardon my messy file structure here. So here is where I have this FBX file

located. So let's click on this and hit import. Just going to delete the material on it because

it's throwing some shading errors. So this is my 3d model. I made this in Blender just in a

different file and I imported it into this file using the process I just explained. So let's look

at the textures I created for this model. Let's come into the shader preview window and let's see

what we have here. It came in with its material but the material is not set up correctly and this

is just an error from importing. I have moved the location of the texture files around after I

exported this so Blender is just having a hard time finding those textures again. But that's okay,

we can just re-import them and it should still all work. So in your file browser,

I'm just going to navigate to where I have the textures for this object saved. And the

textures are going to be saved as a separate file from the model itself. So here are the

texture files I have for this door object. Let's drag these in. Let's drag in the color one and

connect it to color. So let's preview this texture in our image previewer. So here is

the texture that I have applied to this door. And it looks all crazy here because of the UV

maps of this door, which we're going to cover in the next video. But I just wanted to demonstrate

to you that this is typically what a texture will look like for a unique object. It is based

heavily on the shape of the object itself. So if I were to come in and try to apply this door

material to this sphere, which I can do by clicking on the sphere, coming into the material properties

editor, clicking the drop down and changing the material that is in this first slot to this door

material. Well, obviously that doesn't work because this texture was built specifically for

this object that has this specific shape. So applying it to any other object will not work,

which is why we call it a unique texture. So before we move on and start talking more about

unique textures and creating UV maps, I would like to show you an exercise in creating tiling

textures. So tiling textures are always created on these sort of flat planes so that they can be

used on any object. And we're going to learn how to create a tiling texture from a photograph using

Photoshop or any other image editing software that you please. So I'm going to pause the recording

here. And when we come back, we're going to look at a practical demonstration on how to create a tiling texture.

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
