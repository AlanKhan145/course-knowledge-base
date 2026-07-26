# 064 — Texturing the Wings
In this lecture, we'll be texturing the wings, moving our UVs into position over our texture.

So here's where we got up to last time.

And as I've done previously, I'm going to come up to the top corner here and bring down a new window

for the shader editor.

So across to the left hand side and change it to the shader editor, I press end to get rid of the side

panel.

And let's zoom in on our material now.

In the resources that come with the lecture, we've got a spitfire texture, so I can click and drag

that into my shader editor.

When I do that, the texture comes into our UV editor.

That's not always the case, so you may have to just select it from the dropdown menu here.

So we've got a spitfire texture and you can see that I've reversed the text on one side, hence why

if I select all my model, we've got two sides to the main body of the plane.

Just a quick note on the texture.

I've got this from Wikimedia Commons and I've adapted it from this photo here.

So a special thanks to Alan Wilson for taking a great photo and allowing people to use it.

So back into Blender, I can now hook my texture up and I'll rename the material plane and let's go

across the menu at the top and into material preview mode.

And we can see the plane texture looks almost random the way it's spread out on our object.

But notice the wings are exactly the same on both sides, the same at the back.

But they're just in the sky at the moment, as you can see there.

And that's because we unwrapped whilst our mirror modifier was on, whereas the main body, we applied

the mirror modifier and then unwrapped it.

So we have two separate UV islands for them.

So pause the video here and catch up with me bringing in your spitfire texture and hooking it up to

the principle beiersdorf and move into material preview mode so you can see that texture on your plane.

Pause the video and have a go at that.

Okay.

Let's take a closer look at the texture.

If I press control spacebar, that will go into full screen mode and zoom in a touch.

Now we can see we haven't got any wings on our texture.

Now you could find a copyright free image of a Spitfires wing and add it to this texture, maybe in

a space such as here.

But I want to show you that it's not always necessary.

It depends on the complexity of your model and how detailed you want to go.

So I press control spacebar to come out of full screen mode and we'll start with the tail wings at the

back so that it's nice and easy to view.

I'm going to press alt a to deselect all and l to select linked and remember that by seam.

So we're selecting that area there.

Do make sure that you select the other side as well.

So l on the other side we'll select that as well.

Now I've got my two islands on top of each other here.

I'll select one of those G to grab and you can see when I move that around, I can move it onto my plane

and we get the texture from the plane.

I'll do that because we want to select both of those islands at the same time and then to grab and move

it on to my plane.

Now you can see it's fairly effective choosing a random position on my plane here.

So we could try having a little bit of text in there.

For example, it's a little bit more tricky if I try and get the target in.

It sort of warps slightly, but it's possible maybe something towards the front of the plane.

We've got this sort of strange yellow line here which is coming across here.

So a position around these numbers somewhere around here, it's not great, but it works reasonably

well.

Notice how I've got part of the texture in the sky just there, and that looks to be the front just

here.

So we can see a tiny bit of sky and it's stretched a little bit there.

It's not too bad, but it's not great.

You may want to scale it down and move it into position where you've got no text and no sky.

Maybe somewhere around here and see how that looks.

It's not too bad, but my panelling, because I've rotated it, is offered a funny angle.

So maybe rotating it isn't the best idea.

Maybe going in line like this is better.

So it's working reasonably well just by placing it onto a random position like this.

Ideally you'd have a texture that has a tail wing in it and a main wing as well.

So I want you to have a go now at moving the UVs of the back tail wing.

You can rotate it and scale it, but try and find a position where the texture kind of fits.

It's probably best not to have any text on it, as that can distort slightly and it doesn't mirror very

well to the other side.

So pause the video and have a go at that.

Now it can get a bit tougher when we come to the main wing.

If I come out a bit and move across to the wing, so alt a to deselect all and then l to select the

top two here.

Let's find those.

There they are.

And like I say, this is a bit tougher for the main wings because they're much bigger.

So now when I try and scale these down and move them into position, if I scale them down very small

and move them into a position of that texture of those panels there, it's not too bad.

But we do start seeing a little bit of graininess as a texture becomes more pixelated, but I think

that's relatively nice.

Probably around here we can get away with and it looks fairly decent.

So that's that position in there.

It's a little bit distorted around the front here, which is probably this area just here.

And maybe I can come in, go across to vertex mode selection and select just that area there and move

it into a new position.

Getting a lot of stretch now, so I probably have to move these two down as well.

Remember, I can't just click once because that will move just one side.

I have to box select to move those into position.

So we're getting a bit of stretch there, which you can see a bit clearer in object mode.

Back to edit mode.

Now though, as those textures become close together, we could box, select those next to and maybe

edge slide them down to reduce that stretch these ones too.

But watch what happens to my texture and particularly this graphic here as I move that down.

That also becomes stretched as we change the size of this face here.

So a little bit of movement there.

So the edge here doesn't become too stretched.

But if I go much further, you can see that graphic being stretched there.

So probably somewhere around about here and that looks relatively good.

A little bit of a line across there of white.

But I think we're okay.

So a fairly successful position just there.

So pause video here, catch it with me and position the UVs of the top of your wings.

Okay.

So we've got the underside of the wings to do.

Now, depending on the use of this, this may not be as important as the top.

You may not see the underside of the plane as much, but we've got to try and find a position for both

of those.

So remember to deselect all and select both of those with L.

And a small challenge to you is to position the UVs of the underside of the main wings and the tail

wings.

Pause the video and have a go at that.

Okay.

So I'll zoom out to find those.

Now, hopefully you remembered you need to go back into island mode if you want to select them as one

big island.

You can do this in vertex mode and just select the whole lot.

Of course, it's just a little bit easier in island mode and we can rotate those, scale them down to

touch and try and move them into a useful position.

We can have it similar to the other one.

So somewhere around about here you can scale this as well if you want to try and make it longer and

thinner.

But of course that does stretch the textures slightly as well.

So you can see if I come over the text there, it's slightly stretched, so a bit of experimentation.

I'll scale that back in the Y there.

Somewhere around here looks quite interesting.

Let's just go into object mode and see what that looks like.

A little bit stretched, but I can go to the vertices and try and change them slightly there.

Just a touch to line that up a bit more.

And it's kind of working okay.

Of course, any text I use is going to have some mirror writing on one side, so maybe going over text

isn't the best idea.

So let's select them all again.

And go over the graphic like we did before.

Rotate that into some sort of position around here.

And that looks fairly good.

Let's zoom in a bit and again into vertex mode and let's move that down slightly.

Move this one down very slightly.

So that very end there hasn't got those distinguishing marks.

Back into object mode to see what that looks like.

That's not too bad.

Okay.

And the back into edit mode again.

These select all l on both those back faces there back to island mode and select both those g to grab.

Scale it down slightly and move it into position, perhaps somewhere around here.

Just double check that.

That's okay.

And that looks alright.

There's a little bit of writing there, but you can't really notice it.

Okay.

So hopefully got an okay with that.

In the next video, we'll be texturing the body and I'll show you some different techniques.

But of course do make sure you saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Texturing the Wings |
| **Thời lượng** | 8:43 |
| **Chủ đề chính** | Tạo texture cho cánh |

## 1. Mục tiêu bài học
- Thiết lập Material và Shader Node cơ bản cho cánh máy bay bằng Principled BSDF.
- Gán Image Texture khớp với UV đã unwrap ở bài trước.
- Hiểu vai trò của các map bổ sung: Base Color, Roughness, Normal Map (nếu có) trong việc tăng độ chi tiết bề mặt cánh.
- Kiểm tra kết quả texture trong Material Preview / Rendered Shading.

## 2. Nội dung chính
Sau khi có UV hoàn chỉnh, bước texturing bắt đầu bằng việc tạo Material mới cho cánh trong Shader Editor. Node gốc của mọi vật liệu PBR trong Blender là **Principled BSDF**, kết nối tới output **Material Output**. Để đưa hình ảnh texture lên bề mặt, cần thêm node **Image Texture**, nạp file ảnh (ví dụ texture kim loại/sơn máy bay), và nối đầu ra Color vào input Base Color của Principled BSDF.

Vì UV đã được unwrap đúng ở bài trước, Image Texture sẽ tự động ánh xạ theo UV Map mặc định của object — không cần thêm node UV Map trừ khi object có nhiều UV Map và cần chỉ định rõ map nào được dùng.

Ngoài Base Color, có thể tăng độ chân thực bằng:
- **Roughness map hoặc giá trị Roughness thủ công:** kiểm soát độ bóng/mờ của bề mặt (sơn cánh máy bay thường có độ bóng vừa phải, khác với kim loại trần).
- **Normal Map:** nếu có ảnh normal map, dùng thêm node **Normal Map** trước khi nối vào input Normal của Principled BSDF, giúp bề mặt trông có chi tiết lồi lõm (đinh tán, đường ghép panel) mà không cần thêm hình học thật.
- **Metallic:** với các chi tiết kim loại trên cánh (viền, bản lề), có thể tăng giá trị Metallic cục bộ bằng cách kết hợp mask hoặc Image Texture riêng.

Sau khi thiết lập xong, chuyển Viewport Shading sang **Material Preview** hoặc **Rendered** để xem trước kết quả gần với ảnh render thật, kiểm tra texture có bị lệch, kéo dãn hay lặp lại bất thường không.

## 3. Quy trình thực hành gợi ý
1. Chọn object cánh (hoặc phần mesh cánh nếu material áp theo Face/Material Slot), mở Shading workspace.
2. Tạo Material mới, đặt tên rõ ràng (ví dụ "Wing_Material").
3. Thêm node Image Texture, nạp ảnh texture cánh, nối Color vào Base Color của Principled BSDF.
4. Điều chỉnh Roughness (giá trị số hoặc map) cho phù hợp với chất liệu sơn/kim loại của cánh.
5. Nếu có Normal Map, thêm node Normal Map, nạp ảnh, nối vào input Normal của Principled BSDF.
6. Chuyển Viewport Shading sang Material Preview để kiểm tra kết quả trực quan trên toàn bộ cánh.
7. Quay lại UV Editor nếu phát hiện texture bị lệch, chỉnh sửa island tương ứng.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+A` (trong Shader Editor) | Thêm node mới (Image Texture, Normal Map...) |
| `Ctrl+T` (khi chọn Image Texture node) | Tự động thêm Mapping + Texture Coordinate node |
| `Z` | Pie menu chuyển Viewport Shading |
| `N` (trong UV Editor) | Mở sidebar để kiểm tra thông tin UV |

## 5. Lưu ý & lỗi thường gặp
- Quên nối node Image Texture vào đúng input (Base Color) khiến vật liệu hiển thị màu xám mặc định của Principled BSDF.
- Ảnh texture có màu bị sai không gian màu (Color Space) — Base Color nên để "Color", còn Roughness/Normal map nên đặt "Non-Color" trong Image Texture node.
- UV bị méo từ bài trước sẽ lộ rõ khi áp texture thật, đặc biệt các texture có hoa văn kẻ thẳng (đường panel, chữ số hiệu).
- Không kiểm tra ở Rendered Shading (Eevee/Cycles) mà chỉ xem Material Preview có thể bỏ sót lỗi ánh sáng/material chỉ xuất hiện khi render thật.

## 6. Checklist thực hành
- [ ] Đã tạo Material và kết nối Image Texture vào Base Color của cánh.
- [ ] Đã thiết lập Roughness phù hợp với chất liệu cánh.
- [ ] Đã thêm Normal Map (nếu có) để tăng chi tiết bề mặt.
- [ ] Đã kiểm tra kết quả bằng Material Preview/Rendered Shading, không còn lỗi UV lệch.

## 7. Tóm tắt
Bài học thiết lập vật liệu và texture cho cánh máy bay bằng Shader Editor và Principled BSDF, tận dụng trực tiếp UV layout đã chuẩn bị, tạo tiền đề cho việc texturing phần thân ở bài tiếp theo.
