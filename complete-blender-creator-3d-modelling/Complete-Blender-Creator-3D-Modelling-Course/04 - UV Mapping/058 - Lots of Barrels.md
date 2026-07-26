# 058 — Lots of Barrels
In this lecture, we'll be taking our knowledge of UVs further by creating a few barrels and adding

different material textures to each one.

So here's where we got up to last time with our barrel, and I'm still in edit mode with the barrel

selected.

I'm just going to open up my shader editor and zoom out a touch.

So we've got our four textures ready here and of course we can find and look at those textures within

here as well with the different names.

And in order to show you a few more things about U.V. unwrapping, I'm going to duplicate the barrel

three times, so I've got four different barrels to add my textures to.

So into object mode, select barrel and in fact, I'll hide the building for the moment so it's not

distracting.

Select the barrel shift D to duplicate in the x axis and I'll press shift R to repeat that action twice.

So we got four barrels ready here.

Now it is worth noting at this point that you can see the textures are all exactly the same, yet it

is very common to use one single texture for an object like this and repeat it over and over.

Some of the tricks that environmental artists use is just selecting them, rotating them around the

Z axis slightly, and suddenly it looks like a slightly different barrel.

So it's worth bearing that in mind.

Also, if I undo that, ideally with your textures, you try and keep away from distinguishing marks.

So this white line that's going around here is repeated over each barrel, and it's quite a distinguishing

mark, which makes us realize immediately that it's a repeated texture.

So that's just something to be aware of.

So just pause the video for a moment, catch it with me and duplicate your barrel so that you have one

for each texture that you've downloaded.

Pause the video and have a go at that.

Okay.

So with the second barrel selected, I'm going to link up my bottom texture and that is ending in four.

Underscore one, underscore em.

So I'll link that up to the base color.

And of course all my barrels change because they're all sharing the same texture.

So I'll undo that.

What I need to do is to create a new texture based on this one for this new barrel.

Well, hopefully you remember, that's this button up here, add new material.

But if I use this one, it creates a new texture material zero to which I'll rename barrel to.

But now when I change it to the texture shown here, it only changes that one barrel.

I'll just click on the original barrel and change the name there as well.

So Barrel one and re select barrel two with the barrel two texture.

I could of course rename my objects in the outline as well, but there's no real need for that as we

haven't got many items in our scene.

So the reason I wanted to show you this texture, which if we look down at the bottom is ending in four,

underscore one, underscore M so let's find that texture within here four underscore one, underscore

M And let's just bring that texture out so we can see it nice and easily.

Now, as I mentioned, it's darker here on the metal part than it is at the top here.

So if I zoom in with the period key and move around until I find my seam, it's very obvious where it

is.

That's because the metal gets darker here and lighter here.

So the barrel looks relatively good from somewhere like here where it's got nice dark metal brackets

there.

But as soon as I come round where the seam is, it gets very light.

It's also worth saying at this point that these seams are often unavoidable.

So what often happens is we try and hide those against a wall or foliage or something like that.

So hopefully that highlights the point about using textures that are relatively consistent.

So if I go back to my first one and choose that texture within here, so that's ending in underscore

for underscore M you can see that that's relatively consistent throughout.

And if I move around my barrel, it's actually a little bit harder to find the seam on this one, which

makes it a good texture for texturing.

Okay, so let's go to my third one and for this one you can follow along.

I make my shader editor a bit bigger, zoom out a touch and I'm going to hook the second one up, which

is underscore to underscore M I'm going to create a new material called Barrel three and I'm going to

hook up my second material ending in two, underscore M up to the base color and I'll open that texture

up in the UV editor.

So to underscore M there, and that's just the planks.

Now this is nice and consistent in color, but as a barrel it's not working particularly well.

The planks seem very wide.

If I go into edit mode and select all to look at the UVs, we can see that my big flat island here.

If I select that with all the middle faces going around, it's covering the whole texture.

We know it's the right way round because my slats are going up and down, so that's good.

But what I can do here is scale in the Y and go outside the bounds of the texture to make those slats

look a bit thinner.

And now it's ending up looking a little bit more like a barrel.

I'll zoom out a bit to show you the result of that.

So when your UVs go outside the bounds of this texture, it just repeats itself.

And that's common in most programs, including game engines.

And if I deselect all with alt a, the texture is nice and consistent in terms of the tone.

So the light bits and dark bits, so you don't really notice the repetition.

So if we come around to our seam, it's actually difficult to see that it's repeating.

You can in fact get what are called seamless textures so that when you repeat them like this, you don't

see the edge overlap.

This is close to a seamless texture.

So when we repeat it like this, we don't really see where the overlap is.

And you can see there's a tiny little notch there and it's not coming through on this side.

So we know it's not actually seamless, although it's very close to.

So somewhere along the line we should actually see that line.

But to be honest, I can't notice it.

So it's a very close to seamless texture.

Okay, so I'll just select all again, just so you can see my UVs and I want you to pause the video

here, catch up with me, create a new material for this barrel and attach that plank texture or a similar

texture and just expand those UVs in my case in the Y axis so that they repeat around your barrel,

pause the video and have a go at that.

Okay.

So if I just zoom out a bit and go back to object mode, it doesn't quite work as well as the first

one as a barrel because it hasn't got those brackets at the top and the bottom, but it does give a

reasonably convincing result.

Now for the fourth barrel, if I just zoom in on that and create a new material.

So this is barrel four and I'll zoom out.

I want you to use the texture ending in 19 underscore.

M So that's this one at the bottom here and I want you to try and texture your barrel so it looks fairly

convincing using this texture.

So you'll have to move around the UV slightly.

You may have to repeat them by scaling it in one of the two axes, depending on how you've unwrapped

it and try and come up with something that looks relatively good.

Pause the video and have a go at that.

Okay.

So hopefully you're going to go with that.

So I'll just hook up this top material and we can see that it doesn't look quite right yet.

So I'll go into edit mode, select all and have a look at the islands.

Firstly, I'll select this big island here and the slats look like they're going the right way, but

they do look a bit stretched.

So if I press se them y that makes this bigger.

The slats go round a bit further and let's have a look what that looks like.

It's looking a bit better.

Perhaps we'll try it a bit further.

So scale in the Y again.

And around there it looks fairly convincing, as if these wooden brackets are holding it together.

The top looks a little bit odd, though, so maybe we could select one of those faces.

I'll go to face mode for that.

Select the face and select it in here and just scale it in the X so it's not so stretched.

Maybe move it into a different position somewhere around here.

Scale it up a touch.

So it kind of repeats across my shape and perhaps that's working a little bit better.

It's still not as convincing as the first, but it is a little bit better than the second because it

has these wooden slats in it, in my opinion anyway.

So hopefully you've gotten okay with that task and you realized about scaling up the UVs.

If I go into edit mode again, select all the big island, the one going around the middle.

I needed to rescale so that the slats fitted the model more closely.

And if I go into object mode, this type of wooden board texture seems to just about work, has a barrel

and go some way to show that you don't have to use a specific barrel texture for a barrel, which goes

for any object.

So sometimes if you want a specific material, it's not always the case that you can find it or the

textures you find aren't quite suitable because they change in tone like we were talking about earlier

or they don't repeat very well.

So you might have to use a different type of texture for an object to get a close approximation to it

that comes with more experience, and you'll find that out in your 3D artist journey.

Now, one last thing that I do want to show you.

Let's go back to our original barrel because it's probably a little bit easier to see.

I'll zoom in on that, go to edit mode and select all and I'll just check which texture that is.

So it's underscore underscore four.

So let's find that in here and I'll just zoom in on that slightly so we can clearly see it.

Now, if I select an edge loop, so into edge mode, alt left click on an edge loop and press g to grab

and move it upwards.

You can see that it stretches my texture.

I'll undo those changes though.

However, if I press G twice or jpg, as I like to say for edge slide, you can see that I can slide

it along my edges of my shape and it actually moves the UVs as well as the edge on the object.

So the edge slide can be a very useful tool for adjusting your objects without drastically changing

the UVs.

You might want to pause the video here and just have an experiment with that.

So select an edge loop and use the edge slide command so G.G. to see how it actually moves with the

UVs as well as the shapes topology.

So lastly, if I bring back my building, which is this cube here, I'll go into object mode, zoom

out and select that building and press the period key to zoom in on that.

If I go into edit mode for this and let's say choose this edge here and press g g, I can edge slide

this edge to change the shape of my building without changing the shape of the UVs.

Now if I press C which is for clamp because currently it's clamped to the original size of the shape

and you can see those commands at the top of my window.

So there's E for even alt or C for clamp.

Now I can go upwards and use the rest of the texture and make my building taller so I can then come

to this side, press g, g and then c four clamp to turn the clamping off.

And it will use the rest of my texture up there as well.

And now I've got a taller building.

I'll just select all and go across to my building texture just there and you can see how it's stretched

those buildings and interesting faces.

This one because it's actually repeating, which I believe is this one round the back here.

And you can see how the texture is repeated starting on the bottom again and going upwards half way

into this window here.

So the edge slide tool is very useful for moving your UVs around as well as your topology or the shape

of the object.

So lastly, pause the video here and have a go at changing the shape of your building using the edge

slide command.

So choosing an edge double tapping g and remember to turn off clamp with C so it goes beyond the original

border or edges of the shape.

Once you've done that, make sure you've saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Lots of Barrels |
| **Thời lượng** | 11:15 |
| **Chủ đề chính** | Làm việc với nhiều texture thùng gỗ |

## 1. Mục tiêu bài học
- Biết cách nhân bản (duplicate) một thùng gỗ đã UV-map để tạo nhiều biến thể.
- Hiểu sự khác nhau giữa việc dùng chung một Material/UV và tạo biến thể texture riêng cho từng bản sao.
- Biết cách quản lý Material Slot và Image Texture để mỗi thùng có thể mang một texture khác nhau (gỗ cũ, gỗ mới, có nhãn, không nhãn...).
- Tổ chức scene gọn gàng bằng Collection khi số lượng object tăng lên.

## 2. Nội dung chính
Sau khi đã có một thùng gỗ với UV hoàn chỉnh, một tình huống thực tế thường gặp là cần nhiều thùng tương tự nhau nhưng có texture khác nhau đôi chút (gỗ sẫm màu hơn, có thêm nhãn dán, đai kim loại gỉ sét...) để tránh cảm giác lặp lại (tiling) rõ rệt trong scene.

Có hai cách tiếp cận chính:
- **Duplicate Object (`Shift+D`)** tạo bản sao độc lập với mesh và material riêng — cho phép chỉnh sửa UV hoặc gán texture khác mà không ảnh hưởng tới thùng gốc.
- **Duplicate Linked (`Alt+D`)** tạo bản sao dùng chung mesh data — tiết kiệm bộ nhớ nhưng mọi chỉnh sửa mesh/UV sẽ áp dụng cho tất cả bản sao liên kết, nên không phù hợp nếu muốn UV hoặc texture khác nhau.

Vì mục tiêu là có nhiều thùng với texture khác nhau, `Shift+D` (Duplicate Object) là lựa chọn phù hợp hơn cho các bản cần material riêng, trong khi những bản dùng chung texture có thể tận dụng `Alt+D` để tiết kiệm tài nguyên.

Về mặt vật liệu, mỗi thùng có thể có một Material riêng biệt (hoặc một Material dùng chung với Image Texture khác nhau qua Material Slot), miễn là UV layout đã unwrap từ bài trước đảm bảo texture khớp đúng vị trí trên mesh, bất kể ảnh texture nào được gán vào.

## 3. Quy trình thực hành gợi ý
1. Từ thùng gỗ đã hoàn chỉnh UV, nhân bản bằng `Shift+D` để tạo vài bản sao, đặt rải rác trong scene.
2. Đặt tên lại các object và Material cho rõ ràng (Barrel_01, Barrel_02...) trong Outliner.
3. Với mỗi bản sao cần texture khác, tạo hoặc gán một Material mới, thay Image Texture trong Shader Editor.
4. Kiểm tra lại UV của từng bản trong UV Editor để chắc chắn texture mới vẫn khớp đúng với layout gỗ/nắp/đai.
5. Gom các thùng vào một Collection riêng (ví dụ "Barrels") để dễ quản lý và ẩn/hiện khi cần.
6. Dùng Randomize Transform (nếu có) hoặc xoay/scale thủ công nhẹ từng thùng để tránh cảm giác các bản sao giống hệt nhau.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+D` | Duplicate Object (bản sao độc lập, mesh/material riêng) |
| `Alt+D` | Duplicate Linked (bản sao dùng chung mesh data) |
| `M` | Move to Collection |
| `G` / `R` / `S` | Di chuyển / xoay / scale object trong 3D Viewport |
| `Ctrl+C` / `Ctrl+V` | Copy/Paste một số thuộc tính (ví dụ Material) giữa các object |

## 5. Lưu ý & lỗi thường gặp
- Dùng nhầm `Alt+D` khi muốn UV/texture độc lập sẽ khiến chỉnh sửa trên một bản sao ảnh hưởng tới toàn bộ các bản liên kết.
- Không đổi tên object/material khi số lượng thùng tăng lên khiến Outliner trở nên lộn xộn, khó chỉnh sửa về sau.
- Gán nhầm Image Texture vào sai Material Slot khiến một số thùng hiển thị texture sai hoặc trống (màu hồng/tím báo lỗi thiếu texture).
- Sao chép quá nhiều bản với texture độ phân giải cao có thể ảnh hưởng hiệu năng viewport; cân nhắc dùng Instance hoặc giảm độ phân giải preview khi cần.

## 6. Checklist thực hành
- [ ] Đã nhân bản được nhiều thùng gỗ từ một thùng gốc đã UV-map.
- [ ] Đã gán texture khác nhau cho ít nhất hai bản sao.
- [ ] Đã kiểm tra UV vẫn khớp đúng sau khi đổi texture.
- [ ] Đã tổ chức các thùng vào một Collection riêng.

## 7. Tóm tắt
Bài học mở rộng từ một thùng gỗ đơn lẻ sang một nhóm nhiều thùng với texture đa dạng, thông qua kỹ thuật duplicate object và quản lý material/UV hợp lý. Đây là kỹ năng tổ chức scene quan trọng khi số lượng asset tăng lên trong các dự án thực tế.
