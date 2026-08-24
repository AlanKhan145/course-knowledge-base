# 077 — Texture Painting: Color Maps Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 18 — Basics: 3D Texture Painting |
| **Bài học** | Texture Painting: Color Maps Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 14m |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Texture Painting: Color Maps Pt. 1** trong pipeline của section.
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

Next up we are going to jump into texture painting in Blender. Now texture

painting will allow us to paint directly onto our 3d model to create textures

within Blender. So let's take a look at this. I just have a default Blender scene

up as per usual. I'm going to delete my camera and my light just to get them out

of the way. And let's dive right in by coming over and clicking on the texture

paint workspace up at the top here. So this is the texture painting workspace

and by now it should look fairly familiar. On the right side here we have

our 3d viewport, our outliner, and our properties editor the same as we have

had with every other workspace so far. Now on the left side here this at first

glance looks very similar to the UV editor but is in fact the image editor.

So what this will allow us to do is to paint directly onto our model here and

we will be able to see the 2d image of the texture we are creating on the left

side. You can come into texture paint mode in a similar way to how we came

into object edit and sculpting modes by coming up to the top left hand corner of

your 3d viewport and selecting texture paint from the drop-down list. Now this

will give us tools that are specifically designed for optimizing our

texture painting. Now when we come into texture painting mode you'll see that

our object here is being rendered in this sort of bright fuchsia color and

this color indicates within blender that we are missing a texture file. So the

reason that this is being rendered in this fuchsia color is because we have

not added a texture to start painting on yet and in fact if we click on our

object with our brush we get this error message that says missing textures

detected and nothing happens. So in order for us to paint a texture onto this

piece we need to have a blank texture file to paint into. You can think of this

if you are familiar with image editing software as creating the new file on

which you can then draw on the canvas. Another note about texture painting is

that your object must have the UVs already unwrapped in order to display

your textures correctly. So if you have not already UV unwrapped your model do

so before you enter texture paint mode. As this is a default blender cube it

already has some default UVs assigned to it so I'm going to skip this step here.

So as I said in order for us to be able to paint on this mesh we need to add a

blank texture file to paint onto. So there are a couple of ways to do this.

Within texture paint mode we can add a new texture to paint onto by coming into

the properties editor window making sure we are in the active tool and workspace

settings tab and up here at the top we have this drop-down that says texture

slots and currently you will see that on our object we have no textures. So let's

go ahead and add a new texture by pressing the plus button here. Now if you

are in texture paint mode you will get the option of what kind of texture you

would like to add. We have base color, specular, roughness, metallic, and normal,

bump, and displacement. Now some of these should look familiar to you from our

discussion on texture maps. So let's add a new base color texture here. Now we

will get this dialog pop-up that will allow us to name our material whatever

we want. We can set our resolution here and again the resolution that you need

will depend on the size of the object and obviously a higher number for height

and width will give you an opportunity to add more detail to your textures. Now

we may not need a texture quite this large for our object depending on what

it is however I will say that I personally prefer to paint at the

highest resolution that I think I'm going to need because it is much easier

to downscale an image texture than it is to upscale. If you if you started

with a resolution of something like 512 and then realized later down in the

production pipeline that you actually needed a 2k texture for that object

well if you upscale that image texture it is going to be blurry and pixelated

whereas if you start with a larger texture and you downscale it you're not

going to have nearly as many issues. So I like to paint at a quite a high density

and then downscale it later if it is necessary. So I have renamed my texture

here. I have input my height and width for the resolution. We can change the

default color that we add to this. Right now it is just set at a 0.8 white which

is our default blender white but we can put the default color onto any color we

choose and then we want to leave the generated type at blank. So we're just

going to hit OK and you'll see it has now added that blue color that I

selected and filled our whole mesh with that color. So now if we come in with our

brush and by default we have the draw brush activated we can see the outline

of our brush under our cursor. So now if we come in and just left-click and drag

we can paint directly onto our mesh. And you'll see here in again in the active

tool and workspace settings we have a color picker here which will allow us to

pick any color that we wish. Let's pick a warm color for contrast and we can

paint in that color. You will also see these changes reflected here in the 2d

image editor. Now I do not currently have this texture visible in the editor but I

can open it simply by clicking the drop-down and selecting this base color

one texture I created and now we can see the UVs of our object. Again these

are the default UVs for a default cube in blender but if I now come in and

paint on here you can see that being updated here. Additionally we can paint

within the 2d viewport also by coming in and clicking here and just clicking and

dragging to paint. And now we see that change reflected here on this bottom

face. Now if you come into the 2d image editor and you're trying to paint and

you're noticing that nothing is happening all you have to do is come up

to the top left corner and click this drop down here where it says paint. Now if

nothing is happening for you it will probably be because it is on view mode

which just allows us to view our textures without making any edits. So

just change that drop down down to paint you will get your paint tools and

settings available here and here for you and then you will be able to click and

draw on your mesh. Now it is typically easier to paint directly onto your 3d

model as it gives you a real-time preview of what that that final result

will be. So for the most part we are going to be painting in the 3d viewport

directly onto our mesh but if you have a very complicated mesh and maybe there's

like a crevice that you can't quite navigate your camera into it is always

an option to come in and paint in that crevice in the 2d viewport. So let's take

a look at some of the tools that are available to us in the texture paint

mode. I'm just coming in with a sort of off-white sort of maybe even gray and

I'm just painting over these changes I made to give myself a blank canvas to

work with. So I have this sort of off-white cube. You'll notice here that

when you paint on the 3d mesh none of this color is bleeding over outside of

the UVs. You can paint over here in the 2d editor but because no UVs are mapped

to this area of the texture no changes will be reflected or visible on your

mesh. I could come in and you know with this bright blue paint outside the UVs

and obviously because it is outside the UVs nothing will happen to your mesh.

Painting on your mesh will always paint inside the UVs. Okay so let's take a

closer look at some of these tools here on the sidebar. Again you can toggle this

toolbar by pressing T on your keyboard. Same as for object mode, for edit mode,

and for sculpting mode. So by default we have the draw brush active and as the

name suggests this brush will allow you to just click and draw onto your mesh.

Now there is sort of a small bug that is present in Blender's texture painter

in that if you are zoomed in too far to your mesh and you click nothing will

happen. This is because the face you are painting on is being clipped outside of

the width of the viewport. So I'm zooming in here and we're not seeing the entire

face. So when I try to come in and paint nothing's happening. So in order to be

able to paint on a face the entirety of the face needs to be contained within

the 3d viewport. You just need to zoom out a little bit and then you will be

able to paint. So let's look at the draw brush a little bit closer and let's look

at some of its texture settings. I'm sorry some of its brush settings here

in the active tool panel. So the first thing we have under brush settings is

the blend mode. Now by default it is set to mix which will give you just sort of

a normal brush in that you can choose a color, paint on your mesh, choose a

different color, and if you paint over it it will just paint over it as if you were

going over it with a different coat of spray paint. But we can choose from any

number of blend modes and if you are familiar with 2d digital art some of

these will look very familiar. We can multiply our colors to choose only the

darker colors. We can choose lighten to only color over the lighter areas. So it

is only coloring over this portion because this area here in the white is

lighter than the color I have selected so it will not affect this color because

it cannot lighten it with this color. We have as well we have darken which I'm

just painting in a little black so I can show you what it does. So if I have a

darker color here it will darken the areas that are lighter than the value of

this color but it will not affect any areas that are darker. We have overlay

which will sort of make an attempt to lay these colors on top of one another.

And we have many more which I encourage you to play around with these settings

if you're not familiar with blend modes and just get a feel for what they do.

The most important ones most commonly used ones are mix which is also called

normal in some programs. Multiply, add, and overlay are the ones that I find I use

most often but feel free to take a look at all of these as you like.

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
