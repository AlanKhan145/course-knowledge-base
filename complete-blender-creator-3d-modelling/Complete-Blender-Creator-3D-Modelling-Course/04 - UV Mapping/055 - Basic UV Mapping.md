# 055 — Basic UV Mapping
In this lecture, we'll be learning about the basics of UV mapping and making a really simple building.

So I'm in the general start up file, and I've got my cube in the center.

And I'm going to select that.

Now any of the basic primitives.

So if I press shift A to add and mesh each of these apart from the circle comes with a UV map.

We can find that if I come down to the bottom here under Object Data properties UV maps, you can see

that here.

So take a look at that map.

We need to go to the UV editing workspace at the top here.

And you can see that UV map just there.

A UV map is all the faces of my object put into 2D.

So I can now place a 2D image on my 3D object and blender knows how.

Then to map it out onto that 3D object.

The UV editing workspace puts our object into edit mode, and if I deselect all with alt A, my UV map

disappears and select all with A, it comes back again and I can zoom in with my wheel to see my UV

map a bit easier.

So we've got the 3D viewport over on the right hand side, and we've got the UV editor on the left.

If I just show you that up here, that's the UV editor, not the image editor.

They look very similar, but they have slight differences.

Now, in order to see the effects of this UV map, I need to put an image onto my object.

Now I can create an image within the UV editor, but it can be a little bit confusing as to what's happening

if I don't also show you the shader editor.

So I'm going to come to the top corner here, click and drag a new window out and change this to the

shader editor so you can see what's happening.

I don't need my tool options over here, so I'll press N to get rid of that panel and zoom in so you

can see it's got a principled bsdf on my default cube over here.

And I'll scroll across to the top and change it to Material Preview mode so we can see it turns white

as my material is white over here.

So I'll need to bring in an image texture node just here and plug it into my base color.

So shift a to add texture and image texture.

Bring that into the front there, but I'm not hooking it up just yet, so take a quick moment to catch

up with me.

Select your cube, go across to the UV editing workspace, open a new shader window and bring in an

image texture node.

Okay, so you'll notice within the UV editor that I've got a new option here and an open option just

as I have in the image texture node.

So if I press new in here to create a new image, we can create images within blender.

I'll call it test.

The pixel resolution is roughly 1000 pixels squared, so that's how many pixels are on the image.

And that would be classed as A1K image.

You can obviously change these, but roughly a thousand pixels is just fine for us.

I'll talk a little bit more about pixels later.

The generator type.

If I click on that, we can have a blank texture, or I can change it to something like a color grid

and press okay.

And that looks like this.

It's a grid with colors and letters to help us see where different faces are on our 2D image.

So take a quick moment to catch up with me and bring in a new texture.

Now notice it's only in my UV editor.

It's not within my shader editor, so we're not able to see it on my object.

Also, my image texture node is still the same.

I need to bring this test image into my image texture node, and then hook it up in order to see the

texture on my object, so I can click on the down arrow to find all the textures within blender at the

moment.

And we've got this one we created here.

So I'll click on test, Hook It up, and it automatically uses the UVs of the cube in order to map it

onto our cube, which we can see here.

So take a moment to catch up with me and create a new colour grid and hook the texture up to our base

colour.

I'll just move the shader editor up slightly so I can zoom in on my UVs just here, and hopefully you

can see my UVs here on top of the image.

And that corresponds to where the UVs are on my 3D object.

I'll explain a little bit further.

Currently, if I move across my panel at the top, I go to face mode.

You can see the different faces as I select them in the UV editor.

And when I select all you can hopefully just about see all the faces there.

So these are the different faces of the box.

And you can see it's being kind of flattened out like this.

I can also if I move across the top panel in the UV editor I can change from vertices.

So currently I can select vertices within here edges and faces.

So that's F4 and F5.

Let's see if we can find that on our object that's around to the side here.

So if I press G to grab now in the UV editor you can see I can now move that face and affect which numbers

on my grid are being shown.

It's also stretching the textures around as well.

So those faces that it is attached to are being stretched.

I'll right click to cancel that.

Come round to the side so you can see that more clearly.

G to grab.

And you can see those other faces being stretched as the edges joining to them are being moved.

So this top face, for example, which is just here, if I go to the edge and choose the very edge here,

press G to grab in the x axis and move that inwards.

You can see me stretching the texture.

I can make it cover more or cover less, but I'll right click to cancel that.

Incidentally, we can also scale with S and R to rotate and that changes it accordingly.

So pause the video here and just experiment with that, selecting some edges and vertices and moving

them, and see how that affects the image on your cube.

Once you've done that, make sure you undo any movement and bring it back to where I am here.

Now for this next bit, I want to show you what it looks like with an actual image on our cube, and

we're going to make a house.

That means you might want to download a texture.

The texture site I often use is textures.

Com you do need to create an account, and you get 15 free credits each day, and each texture costs

a certain amount of credits.

its grant from the future here and unfortunately textures.

Com has decided to make it a subscription based site, so you actually have to pay now.

So what we've done is to put some different textures in the resources folder that you can use.

We've also put links in there for other texture sites that you can use.

So hopefully this doesn't detract from your enjoyment of the course.

If you feel there's something that we've missed or haven't included, then please do let us know in

the forums and we'll try and fix that as soon as possible.

Thanks for your patience and enjoy the rest of the course.

It's got a really extensive library of textures.

If I go to Browse Library and we're going to choose buildings, so I'll choose on buildings and we can

see that it's got lots of folders of lots of different types of buildings.

So I'll choose old apartments, for example.

What we're looking for is something nice and flat like this.

So we can put our faces onto different areas and map out an apartment building, much like this one

here.

So I'll choose this one by left clicking on that.

Here are the download options if you want to search for this image.

It's buildings house old 0338.

But you can choose any building you find as long as it's nice and flat, like this one here.

And I would encourage you to choose your own.

I'll go for the bigger resolution with two credits as we'll get a sharper image, so I'll click on that

to download.

And now I'm back into blender.

I can go across to my shader editor and open up an image.

I have a whole folder full of textures and if I type in buildings in the search bar, we can see this

building that I downloaded here to make sure the name appears down the bottom here.

So I'll click it again.

Make sure that name appears and open image and we can see that image stretched across my object.

Now you may see the image appear in the bottom here, as this is now the main image on this object.

Sometimes you need to go into object mode and back into edit mode to see it, but that isn't working

either.

So I'm going to have to actually click on my down arrow here and choose that textures texture here.

And there's my building, so it doesn't always match up with the texture here.

If I had chosen a different object and come back to this one.

It probably would, but just be aware that you may have to find your texture in the drop down.

And this drop down gives a list of all the textures loaded into blender.

Now if I press Ctrl spacebar to make this window full screen, you can see the outline of my box once

again, and it's stretched slightly to correspond to the aspect ratio of my image.

The aspect ratio is the difference between the height and the width, and this is quite a long, thin

image and therefore my faces have been stretched in accordance to that.

So I'll press Ctrl and spacebar and go back to our object.

And you can kind of see how they've been stretched.

If I choose this face here, you can see that it's stretched across there.

It's also the wrong way round.

So I'm going to have to rotate some of my faces as well.

Now, one thing that's slightly confusing, if I select all and go to face mode and select this face

in the UV editor and press G to grab, you can see that the faces around it that are joined to it are

also being stretched once again.

G to grab you can see they're being stretched However, if I select just this face that makes only that

face visible in the UV editor and now press G to grab it separates it.

That can be a little bit confusing.

So if I select any of these individual faces, select that face, make sure you're in face mode for

that and you grab I can now move them into different positions, but do make sure you've just got that

face selected.

So I'll choose this front face here.

This can be the front of the house.

So I'll have this door here.

I'll rotate it 90 degrees and it's difficult to see, but I think it's actually -90.

And press enter and then start scaling it in the x axis.

So s then x and g to grab to move that into position.

Let's see what that's looking like.

That's kind of working as the front of our house.

Although I don't want this top window in here.

So let's scale it down just a touch more.

I'm trying to keep it fairly square S then y.

If I don't keep it square, you can see that it stretches my texture like this.

So probably somewhere around here, then G then Y to bring it down.

What is a tiny bit confusing is that this is x and Y, and I often think this is up and therefore z.

But no, it's just x and y for a flat image.

Okay, so pause the video here and catch up with me moving one of your faces to correspond with that

part of the house on the image.

Okay, so I've moved one into position.

Let's come round to the side here.

Select this one.

Select the face again R -90 and I'll move this into a different position.

Let's say over here scaling the x so it's square.

Bring it down and I'll scale it down a little bit more so the top windows aren't quite in.

Somewhere around here I can probably scale in the X.

Just a touch does stretch it a little bit, but I think we're okay so we can't see too much stretch

there for the top roof.

If I select that, we don't really want any windows on there because that doesn't make sense.

So let's scale it down and scale in the Y.

So it's square.

And then I can move it to a position where it's just plaster like this.

I'll zoom in a bit, scale it down just a touch more and somewhere around there.

Now, obviously this is covering less pixels than our side images such as this one.

Here you can see that's covering a bigger area.

So this one here, if I zoom in to this is a little bit more pixelated and blurry, whereas these ones

are a bit more sharp.

So the higher the resolution the sharper your images are going to be in here, and the smaller area

you are covering with your UVs, the more pixelated it will be because we're seeing less pixels.

So I've got two sides done and the roof done.

Your challenge then, is to catch up with me and finish off the other sides of the cube.

By placing those corresponding faces into position.

You can use any position on your image.

It doesn't even matter if you overlap another one and choose exactly the same position as you've already

used on another wall.

So pause the video and have a go at that.

So let's take this face for example.

I'll select the face in the image editor R -90 to rotate it around.

Scale it down, scaling the X to make it square.

So somewhere around here and I can just have this area around here.

So I'll scale in the X and just have that one window this time on the side there looks a little bit

strange because it's not lining up with this window.

So I could press G to grab in the Y to make them a bit more aligned, and scaling the Y as well to just

try and make them level somewhere around there.

Now notice that this is probably overlapping this image here.

As you can see, as I select both those, or I can select them both together and you can see they clearly

overlap.

And like I said earlier that's absolutely fine.

So let's come around to the last one.

Select that face are -90 G to grab.

And I'll choose this top window up here.

So I'll scale it down a bit.

Scaling the X move to that top window and try and scale it so it fits roughly in line with the other

ones.

Not the best house, but it just about works.

Okay, so hopefully you got an okay with that.

Do make sure you've saved this scene because we'll be continuing with it next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Basic UV Mapping |
| **Thời lượng** | 12:58 |
| **Chủ đề chính** | Kiến thức UV Mapping cơ bản |

## 1. Mục tiêu bài học
- Hiểu khái niệm UV mapping là gì và tại sao mọi mô hình 3D cần có UV trước khi áp texture.
- Làm quen với UV Editor và mối quan hệ giữa không gian UV (0–1) và bề mặt mesh trong 3D Viewport.
- Biết các phương pháp unwrap cơ bản: Unwrap, Smart UV Project, Cube/Cylinder/Sphere Projection.
- Biết cách dùng texture caro (checker texture) để kiểm tra chất lượng UV.

## 2. Nội dung chính
UV mapping là quá trình "trải phẳng" bề mặt 3D của một mesh ra một không gian 2D gọi là UV space (tọa độ U, V nằm trong khoảng 0 đến 1), để texture 2D có thể được ánh xạ chính xác lên bề mặt mô hình. Mỗi vertex của mesh, khi tham gia vào một mặt (face), sẽ có một tọa độ UV tương ứng lưu trong UV Map của object.

Trong Blender, UV Editor là workspace/editor chuyên dụng để xem và chỉnh sửa layout UV. Khi ở Edit Mode và bật UV Sync Selection (hoặc chọn face/vertex ở 3D Viewport), UV Editor sẽ hiển thị các UV tương ứng.

Các phương pháp tạo UV cơ bản:
- **Unwrap (phím U → Unwrap):** thuật toán "trải phẳng" mesh dựa trên seam đã đánh dấu, cho kết quả tự nhiên nhất với mesh phức tạp.
- **Smart UV Project:** tự động phân tích góc cạnh mesh và tự tạo seam + unwrap, phù hợp cho mesh hard-surface đơn giản hoặc để có kết quả nhanh.
- **Cube Projection / Cylinder Projection / Sphere Projection:** chiếu UV theo hình khối cơ bản, phù hợp với mesh có hình dạng gần giống khối lập phương, trụ, hoặc cầu.
- **Project from View:** chiếu UV theo góc nhìn hiện tại của viewport.

Để kiểm tra chất lượng UV, một texture caro (checker/UV grid) thường được gán tạm thời lên vật liệu: nếu các ô vuông trên bề mặt mô hình đều nhau, không bị kéo dãn hoặc méo, UV được coi là tốt.

## 3. Quy trình thực hành gợi ý
1. Tạo hoặc mở một mesh đơn giản (cube, cylinder) trong Edit Mode.
2. Chọn toàn bộ mesh (A), mở menu UV bằng phím U để xem các tùy chọn unwrap.
3. Thử Smart UV Project trước để có cái nhìn tổng quan về layout UV tự động.
4. Mở UV Editor (đổi một panel sang UV Editing workspace) để xem UV layout song song với 3D Viewport.
5. Tạo một Image Texture kiểu UV Grid (checker) và gán vào Material để kiểm tra độ méo của UV trên bề mặt.
6. So sánh kết quả giữa Unwrap thường (chưa có seam) và Smart UV Project để thấy sự khác biệt.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `U` | Mở menu UV Mapping (Unwrap, Smart UV Project, Cube/Cylinder/Sphere Projection...) |
| `A` | Chọn toàn bộ mesh trong Edit Mode |
| `Alt+A` | Bỏ chọn toàn bộ |
| `N` | Mở/đóng sidebar (xem thông tin UV, Item panel) |
| `Tab` | Chuyển giữa Object Mode và Edit Mode |

## 5. Lưu ý & lỗi thường gặp
- Unwrap khi chưa có seam nào sẽ cho kết quả không tối ưu vì Blender tự chọn cạnh để cắt mesh.
- Smart UV Project có thể tạo quá nhiều island nhỏ nếu Angle Limit quá thấp, gây khó khăn khi texturing thủ công.
- Quên gán checker texture để kiểm tra dễ dẫn đến việc không phát hiện UV bị kéo dãn cho tới khi bake hoặc texture thật đã áp lên.
- Không phải mesh nào cũng nên dùng Cube/Cylinder Projection — chỉ phù hợp với hình dạng gần giống hình khối tương ứng.

## 6. Checklist thực hành
- [ ] Đã mở được UV Editor và hiểu quan hệ giữa 3D Viewport và UV space.
- [ ] Đã thử Unwrap cơ bản và Smart UV Project trên cùng một mesh.
- [ ] Đã thử ít nhất một phương pháp Projection (Cube/Cylinder/Sphere).
- [ ] Đã gán checker texture để kiểm tra chất lượng UV.

## 7. Tóm tắt
Bài học cung cấp nền tảng lý thuyết và thực hành về UV mapping: khái niệm UV space, các công cụ unwrap cơ bản trong Blender, và cách dùng checker texture để đánh giá chất lượng UV trước khi đi sâu vào seam và UV islands ở bài tiếp theo.
