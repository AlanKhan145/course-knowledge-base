# 098 — Painting the Sculpt
In this lecture, we'll learn about how we can paint our scalps to add even more character and realism

to our models.

In this lecture, I'll go fairly detailed into the types of colors needed for a stylized character like

this.

Don't panic if you can't quite get there or yours doesn't look similar to mine, just try and enjoy

the process and experiment.

So here's where we got up to last time, and in order to add color to our objects, there's an option

down the bottom called paint.

Now, it's important to mention that there is another way of painting objects within Blender, and that's

called texture painting, and it even has its own workspace up here.

The reason I'm not using that and using a specific one for sculpting is that this is an extremely high

poly mesh with three quarters of a million faces.

In order to use texture painting, you need to unwrap your mesh, which we've talked about in previous

units.

But because it's so high poly, it's not advised to try that with in blender.

For most machines it will just crash if you try and unwrap a model of this size.

Also, if you use the texture painting to paint on it, even if it is unwrapped, it will lag a lot

and it won't respond well.

However, the painting within scope mode means we don't have to do any of that.

It is, of course, important to say at this point, if you wanted to use this character in a game,

then this sort of high poly count would be ill advised.

Also, because they're such high poly meshes, they take more processing power to render, they take

more memory to store and they're more awkward to rig and so on.

But the paint mode that we have available to us in sculpting is very clever.

It uses something along the lines of vertex painting, as I understand it, which gives a paint value

to each vertex on your model.

And for that reason they're able to make it run a lot smoother and faster in sculpt mode, and you can

come up with some very effective results.

So with my paint option enabled, I'll change the color, which is up the top here.

You can also change it in the sidebar over here and I'll scroll down just to touch because there's also

a color picker here and it's useful to have this open.

And I'll show you why in a moment.

First of all, let's change it up here to start with, and I'll change it to a sort of pinky red color.

And you can see it changing up here and in here as well, and I'll change it.

So it's a little bit darker.

So it's sort of quite dark, ready colored skin somewhere around here.

And let's start painting that on and you can see it paints fairly quickly.

There's no lag and it's doing a great job.

We can also turn X symmetry on, but to be aware we've changed the symmetry slightly.

So it won't always be precise, but it will speed things up a bit.

So I'll use that to paint notice though when I paint the second time, it gives a deeper read.

That's because the strength of our brush up here is only at 0.6.

You can change that in the same way as any brush.

So I can press shift f for the strength and turn it up to one and fill them in with this ready color.

Now you might be thinking that is extremely red and perhaps be thinking that I'm going for a sort of

devil character.

Well, yes, I am going for a reddish coloured character, but it's actually down to the way it's displayed

in solid mode.

If I go to material preview mode, we can't actually see anything and I'll explain why in a moment.

But I'll go back to solid mode for now, and I want you to catch it with me painting your character's

head a similar color to what I have here.

And that's not what I've got in the viewport, but in my color options down here.

Remember, you need to be in paint mode for this and you've also got your tools at the top here for

the strength and size of your brush.

Pause the video and have a go at that.

Okay.

So we'll go across to the shading workspace to explain a bit more about the color.

Let's zoom in on our character.

And because our character is upright, we might as well join these two together, bring these out and

join these two together and change this to the Shader editor.

I'll press end to get rid of that panel and I'll zoom in on our character attach.

This is a much more sensible workspace for a character that's upright like this.

I'll add a new material for the head and I'll label it head and you can see my nodes just here.

So we've got a base color and that's shown in our object.

So how do we get hold of the information that we had in the sculpting workspace?

I'll go back to shading.

Well, that's in a special location.

If I go to the object data properties here, you can see that there's a color attributes option here.

And if I click on that dropdown, we've got this new color option here.

If I were to delete that, I would delete my red that I have painted.

So as soon as you start painting, it creates one of these for you.

So we need to hook this up to the base color of our node.

For that I can press shift a to add and under input.

As you'd expect, there's a tribute just here, but we're not looking for that.

We're looking for the color attribute just here.

So I'm going to click on that, bring that to the front and hook it up, and it changes to our not so

ready color.

Now, it's important to note, if I zoom into the color attribute that there's a box down the bottom

here, and if I click on that, I can choose my color.

And that is the same.

It's assuming because there's only one color attribute on this object that we want to use that.

But it's a good idea to actually say which one you want because you could have several in here and you

can add new ones here if you wanted to paint several different styles of head.

So now we've got a color on our character.

We can go back to the sculpting workspace and jump to material preview mode, and that looks a lot more

pinky like skin.

And in fact, I might go a little bit more red across to here.

So he's a little bit more devilish and make sure he's completely covered in this.

Checking the back of the ears as well.

Make sure you get those and also down the bottom there.

So pause the video and catch it with me.

I'll go back to the shading workspace so you can see the node set up.

It's the color attribute node and remember you can search for these nodes.

If I press shift a, there's the search option there as well, but it is under input and color attribute.

I'll go back to the sculpting workspace, so pause the video and catch up with me.

Okay, so now comes the fun part.

But before you start painting, there's a really useful option down the bottom here.

It's called color palette.

I'll open that up and I'll click new.

So we created a new color palette there.

And if I press the plus sign here that stores this color we have in here, that's really useful because

I might start painting with a different color and then think, Oh, I want to use that color to go back

over the new color that I've made, and it's difficult to select that exact color.

So storing it in your color palette makes it much easier, and I can just click on it and it will pop

in here if that were a different color.

So for example, if I chose a more ready color, so cheeks are often red, the nose is often red and

the ears.

So I'll paint those in a bit red.

I've got a bit of a red color there and I'll make it a little bit darker somewhere down here and pretty

much stripped down to about five ish and just paint across the middle there.

He's got a sort of red middle bit, a bit more on the cheeks, a bit more on the nose and a little bit

more on the ears.

Just make the brush a little bit smaller so I can be a little bit more precise.

And you can see I've got some on the skull layer.

I'm not going to worry too much for the moment.

Just get those ears nice and red, the nose around the bottom here, nice and red.

So I've got a red middle and now I want to get rid of this red up here.

So first of all, I'll save that red.

So I'll press the plus sign on that and I can go back to my original color and kind of erase that by

painting over it with the original color.

That's basically how you erase colors when you're coloring in this sort of method, and already it's

looking quite interesting.

So pause the video here and catch it with me.

Creating your color palette, painting the middle section a reddish color, and perhaps a little bit

extra on the cheeks, the nose and the edge of the ears here.

Pause the video and have a go at that.

Okay.

Let's paint the lips.

So I'll go a little bit more red, slightly towards the purples this way in my color wheel and a little

bit darker somewhere around here, it's a bit of a stylized character this and let's paint that in and

see how that looks.

Not too bad.

I might have to turn symmetry off now though, because we're getting a little bit more detailed.

It's not quite precise.

So I'll come down to this side here.

Let's turn this strength up to one so that I can paint that on a little bit more clearly.

So some around here a little bit tricky.

This with the mouse, much easier with a graphics tablet.

And let's get into there and try and paint this.

I'll speed this up just a touch.

Okay.

We've got to be a bit careful because it looks a little bit like a very elaborate pantomime character.

So I'll save that color with the plus and go back to my original skin colour, bring the strength right

down, brush a bit bigger and just tone it down a bit.

In some areas, as I was saying, it kind of works like an eraser that's just about working.

I'll go back to this one strength up just a touch and refine it very slightly just in here.

And that's not looking too bad.

Bit at the top there needs removing and there's a bit of red in there as well to make it even more difficult.

But with a low strength, you can kind of blend these things together and that's not looking too bad.

There is also a smear brush here which you can use to blend things together.

And if I turn the strength down, it does a much softer job.

So if you do need to use the smear brush to kind of help you with some of these areas, blur them just

a touch, make them blend into each other, then that can be quite helpful.

I'll go back to the paint brush now, so pause the video here and catch it with me painting the lips

in a sort of purply colour.

Okay.

I'll scroll down to my palette again, and with that purple color, I'll increase the strength to about

0.6.

And this is very useful for creating bags under the eyes like this.

I'll undo that actually, because I might get away with the symmetry on this one.

Just make it a little bit faster.

So I've got sort of bags under his eyes like that, and that's working reasonably well.

I'll turn the strength down a bit further and go round a little bit further round the outside, and

I'm getting away with the symmetry there, so that's good.

We could also create a little bit of shading in the ears like this with that purple color as well,

perhaps even under the nose just there as well.

So you can paint a little bit of shadow on, although the lighting will do that and a little bit later.

So you don't have to worry too much about that.

So pause the video here and work on the eyes and shade any areas where you want a little bit more shadow.

But don't worry too much about that.

Okay.

Now, interestingly, most faces, when you're painting them, they have this red bit across the middle.

The bottom part tends to be a little bit more blue, especially for males.

So we'll go over to the blues over here.

I'm going sort of around the circle this way.

And if I hold down control and use the wheel, I can actually make this area a bit bigger.

So you can see it a little bit more clearly.

And that's holding down control and using the wheel if you need to change the size of the menus.

So from the reds here and the skin colors here, I'm going around the circle towards the blue, so I'm

keeping the same saturation level, but heading towards the blues might make it a little bit darker

as well.

Brush nice and big low strength were about 0.25 and I'll just rush in here giving some of that darkness,

that sort of blue color might go a little bit further round, possibly exaggerating a little bit here.

But remember, you can always tone this back by adding that to your color palette and then going back

to your more pinky colours and bringing those in.

It's not too bad, but I still feel it's not quite blue enough, so I'll come around a little bit further

into somewhere around here.

Might be a touch too dark as well.

That's a bit better.

That's what I'm looking for.

Sort of blue like this, not too far down the neck.

And in fact, you can use some of this red first, remember to add this colour.

So add the colour and then add a bit of this red to the chest area here.

Like so we can do the same sort of thing at the back.

And that's working relatively well.

I'm finding the skin a little bit shiny, so I'll just go across to the shading mode and bring the roughness

of my principal beiersdorf up.

And that's looking a little bit better, I think.

Let's go back to sculpting.

That's a bit more like it.

It's a bit less distracting.

So pause the video here, catch up with me and add some blue to the chin area.

Don't worry if it goes too far, you can always turn it back later.

So we have a bluey colour, which I've exaggerated a bit here, and I might turn that back in a moment.

Then a red colour in the middle and you actually go for a yellow colour at the top.

So I'll go across the yellows a little bit brighter.

In fact, I'll choose this one here first just to look at the brightness and then come across the yellows.

So I want it roughly the same brightness as the original one here.

So I've got that there again, not too high strength and just come across the top with a bit of that

yellow might be a bit too strong there.

Something like this anyway.

I still feel like my brush is a little bit strong, actually.

That's better.

Just a subtle bit of yellow.

It's not really that subtle at the moment, but we're getting there.

I can just go back to my original color.

Very low strength, so under 0.1.

And I can just add a little bit of that original color just to kind of soften this out, this effect.

And I made a classic mistake.

I didn't add that yellow to the color palette.

It's around here.

I know that much.

So I can add it in now.

And I've got my colors here.

And at any time I want to increase them, I think a bit more red around the cheeks.

Now I'll just increase the strength of touch here to 0.1 and then a little bit more strength, that

red around here and around the nose and around the ears and take out a tiny bit of this blue.

It's a little bit too much at the moment.

The mirror, as you can see, is not quite accurate here.

So it's adding more to this side than this side.

So I'll have to turn that off and just do some of this by hand.

That's absolutely fine.

And I need a little bit more on the lips.

So this sort of reddish color, again, a nice low strength.

And I'll just.

Increase.

These middle bit's a little bit more.

A little bit darker.

Right in the crevice, I think.

As I've said before, a lot of that will be picked up by the lighting as well.

But I always like to paint a little bit of extra shadow in these crevices.

You don't really have to do this.

It just adds a little bit of vibrancy to your models.

So don't worry too much if you're finding this bit a bit tricky.

One last thing.

A little bit of darkness under the nose here, adding a little bit of shadow, especially in the nostril

areas there.

I might go really dark on this.

Okay.

So hopefully you're getting okay with this.

And as usual, catch up with me.

Try your best to get relatively close to what I've got here.

And of course, don't panic if it doesn't look exactly like mine, but this is roughly what you're heading

towards.

Again, experiment a bit, try and enjoy the process and have some fun.

And of course, remember to save your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | Painting the Sculpt |
| **Thời lượng** | 14:39 |
| **Chủ đề chính** | Tô màu trực tiếp lên mô hình |

## 1. Mục tiêu bài học

- Hiểu sự khác biệt giữa Vertex Paint và Texture Paint trong Blender.
- Thiết lập một texture/image để tô màu trực tiếp lên bề mặt sculpt (Texture Paint Mode).
- Sử dụng các brush tô màu cơ bản (Draw, Soft, Blur, Smear) để tô da, sừng, mắt, môi.
- Hiểu vai trò của UV (kể cả UV đơn giản/tự động) khi texture paint.

## 2. Nội dung chính

Blender cung cấp hai cách tô màu trực tiếp lên mesh mà không cần rời sang phần mềm khác:

- **Vertex Paint**: màu được lưu trực tiếp trên từng vertex của mesh (Color Attribute). Ưu điểm là nhanh, không cần UV, phù hợp phác thảo màu sắc tổng thể hoặc mesh mật độ cao (như mesh sculpt nhiều chi tiết). Nhược điểm: độ phân giải màu phụ thuộc mật độ mesh — vùng ít vertex sẽ có màu bị nội suy mờ.
- **Texture Paint**: màu được vẽ lên một hình ảnh (Image Texture) thông qua tọa độ UV, cho độ phân giải cao và độc lập với mật độ mesh, phù hợp khi cần chi tiết màu sắc rõ nét (ví dụ vân da, chi tiết mắt). Yêu cầu mesh đã có UV Map hợp lệ — có thể dùng **Smart UV Project** hoặc UV đơn giản cho mục đích tô màu nhanh (không cần UV tối ưu như khi bake).

Quy trình Texture Paint cơ bản:

1. Chuyển mesh sang Object Mode, tạo UV (Edit Mode > `U` > Smart UV Project) nếu chưa có.
2. Vào tab **Texturing** hoặc Texture Paint Mode, tạo Image Texture mới (New Image) với kích thước phù hợp (ví dụ 2048x2048), gán vào Material.
3. Chọn brush **Draw** để tô màu nền cho từng vùng lớn: màu da, màu sừng, màu môi, màu tròng mắt.
4. Dùng brush **Soft** (falloff mềm) để chuyển màu mượt giữa các vùng.
5. Dùng brush **Blur** để làm mờ, hòa trộn ranh giới màu.
6. Dùng brush **Smear** để kéo vệt màu, tạo hiệu ứng chuyển sắc tự nhiên (ví dụ ửng hồng ở má).
7. Có thể dùng Color Picker (`X` để đổi màu Primary/Secondary hoặc `Ctrl+click` để hút màu từ canvas) để lấy mẫu màu đã vẽ.

Với Vertex Paint, quy trình tương tự nhưng thao tác trực tiếp trên Color Attribute của mesh (Object Data Properties > Color Attributes), không cần UV hay Image Texture, phù hợp để nhanh chóng phác thảo phối màu trước khi quyết định texture paint chi tiết hơn.

## 3. Quy trình thực hành gợi ý

1. Tạo UV nhanh cho mesh bằng Smart UV Project (nếu dùng Texture Paint).
2. Tạo Image Texture mới, gán Material cơ bản cho object.
3. Vào Texture Paint Mode, dùng brush Draw tô các mảng màu lớn: da, sừng, môi, mắt.
4. Dùng Soft/Blur để làm mượt chuyển tiếp giữa các mảng màu.
5. Dùng Smear để tạo các vùng ửng màu tự nhiên (má, tai).
6. Kiểm tra lại kết quả ở chế độ Material Preview/Rendered để đánh giá màu dưới ánh sáng.
7. Lưu Image Texture ra file (Image > Save As) để không mất dữ liệu tô màu.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Brush | Chức năng |
|---|---|
| Brush **Draw** | Tô màu cơ bản lên bề mặt |
| Brush **Soft** | Tô màu với falloff mềm |
| Brush **Blur** | Làm mờ, hòa trộn màu |
| Brush **Smear** | Kéo vệt màu, tạo chuyển sắc |
| `X` | Hoán đổi màu Primary/Secondary |
| `Ctrl+Click` (giữ khi tô) | Hút màu (Color Picker) từ canvas |
| `U` (Edit Mode) | Mở menu UV Mapping (Smart UV Project...) |

## 5. Lưu ý & lỗi thường gặp

- Texture Paint trên mesh chưa có UV hoặc UV lỗi khiến màu bị méo/lặp lại bất thường.
- Quên Save Image sau khi tô, dẫn đến mất toàn bộ công tô màu khi đóng file.
- Dùng Vertex Paint trên mesh mật độ thấp cho chi tiết nhỏ khiến màu bị loang/mờ không như ý.
- Tô màu quá đều, thiếu biến thiên sắc độ (variation) khiến bề mặt trông phẳng, thiếu chân thực dù là phong cách cartoon.

## 6. Checklist thực hành

- [ ] Đã tạo UV cơ bản cho mesh (nếu dùng Texture Paint).
- [ ] Đã tạo Image Texture và gán vào Material.
- [ ] Đã tô màu nền cho các vùng chính: da, sừng, môi, mắt.
- [ ] Đã dùng Soft/Blur/Smear để làm mượt chuyển tiếp màu.
- [ ] Đã lưu Image Texture ra file.

## 7. Tóm tắt

Bài học giới thiệu hai phương pháp tô màu trực tiếp lên mô hình sculpt trong Blender — Vertex Paint và Texture Paint — cùng quy trình thực hành tô màu da, sừng và các chi tiết khuôn mặt bằng các brush Draw, Soft, Blur, Smear.
