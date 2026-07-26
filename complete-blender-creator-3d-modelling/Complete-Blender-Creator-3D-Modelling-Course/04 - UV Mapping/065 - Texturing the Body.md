# 065 — Texturing the Body
In this lecture, we'll be using a different unwrapping technique to texture the body of the plane.

Okay, so here's where we got up to last time.

We've unwrapped the wings, but we still need to work on the body on both sides.

So if I go back into edit mode, I've still got the underneath of the tail wing selected, so I'll press

alt a to deselect all first and then press L over my plane.

Now, occasionally, even though I've got seams selected here, it hasn't worked.

So I'm just going to press alt a and l again.

That's a slight bug.

It's just not registering.

The seams is selected, so you just deselect all and select again making sure that seams is selected

and that should work fine.

So we can see the side of my plane body there and I'm in island selection mode so I can select it all

and don't follow along with me.

But I'm just showing you what you could do.

I'll zoom in a bit, rotate 90 degrees scale in the x, so it's about the size of the plane.

I'll have to scale it in the Y as well.

So it squashes down a little bit, rotate it and try and move it into position to note that if I rotate

it slightly and then scale in the x again, it is going to distort slightly when you scale.

So it's always best to bring it back to where it was level, then scale in the X to bring it in if you

need to then do the rotation once again.

So it's not quite fitting my graphic.

Let's see what we've got on our plane.

It's not looking too bad, but we've got all this area up here that's in the sky.

As you can see there, we've got a funny image of the pilot's head there, so I would now have to go

in.

So perhaps go to vertex selection mode, select these, perhaps put proportional added on and start

moving them around.

So select a few and kind of scope them into position.

As you can see me doing here.

The problem is let's have a look at the back graphic there.

It's all distorted and stretched and it will take me a while to try and sort that out and make it level

again.

And you can see I'm finding it fairly difficult.

I just go to object mode so you can see that I'm back into edit mode.

So anywhere where there's text or a detailed graphic which you want to preserve, it's quite tough to

try and position these so it doesn't distort, as you can see, quite severely distorted there.

I could continue and try and move these into a position where there's less distortion and maybe something

like this.

If you were trying to do it nice and quick and your models were only going to be seen from a distance

from around here, then that might be acceptable.

However, there's a better way to unwrap the sides like this.

I'll go back into edit mode and just double check that.

I've just got that side selected.

So alt a and l, so I've definitely only got that side selected there.

If I go into side view now and press you to unwrap to go to my unwrap menu.

There's an option here project from view.

So when I select that you can see my UVs here and they look exactly the same as the layout in side view.

I can zoom in so you can see that a bit clearer.

Now that means that these faces at the front here.

So if I go to face mode, select those faces there and I've actually got an extra one selected, but

I'll keep that selective for now because that's helpful.

You can see the one that's on the side is nice and clear as a rectangle, but the ones that are in line,

when I go to side view, you can see they're in line.

They have been squashed flat in my UVs.

Now that's absolutely okay because we're not really going to see this front area here because it's hidden

by the propeller, but that's just worth bearing in mind.

So I press alt a and just select the side view again.

Now I can come in to my UV image editor scale this up, I'll just turn proportional edit off so it doesn't

confuse at all and scale it up.

So it's about the size of the plane.

Let's bring it down slightly.

Probably going to have to scale in the Y, attach as well, rotate it round until it's roughly matching

up with my image texture.

So let's get to object mode and see what we've got.

Now my graphics are lining up reasonably well and it's looking quite good.

So pause the video here.

Select the left hand side of the body of the plane, go to side, view you to go to the unwrap menu

and project from view.

Then move that big island that you've created over the texture of the plane.

Pause the video and have a go at that.

So there's a slight problem with the top here where we can see the sky.

So it could go in in vertex mode and perhaps select this end vertex here and g to pull that down.

If I move this one down by pressing G, you can see that it distorts my circle there.

So that's a little bit more tricky.

If I bring the one below it up, I can kind of mitigate some of that distortion, but it is still getting

slightly distorted.

So we can have a slightly squashed circle there, which isn't too bad.

Or if I undid those steps, we could show a little bit of sky on our texture, which again in this case

isn't actually too bad.

I think it's slightly better with a slightly distorted circle, but that's entirely up to you for what

you'd prefer from your texture.

There may be some other places such as the bottom here, where we're seeing a bit of grass.

So let's just have a quick look at that and that we can easily tidy up.

We can select these two here, maybe these ones as well, just so there's not too much stretch, bring

those up slightly and then these up slightly as well and these up slightly and that's looking a lot

better already.

Now our graphic is going off the side slightly.

It's quite tricky to sort that out.

I could possibly move these across, but you can see as soon as I start trying to change it, we get

a bit of wobble in our texture there and I'd have to select these ones, maybe move those across a bit

to line it up, but it starts getting quite awkward and difficult, so generally speaking it's not looking

too bad.

Let's have a look at some of the front elements and our sort of exhaust areas here are looking quite

good and that's looking quite reasonable I would say.

So the project from View Method is fairly successful.

So I want you to pause the video here and catch up with me making any minor edits you think you need

to make to your texture.

So it lines up nicely and looks good on our model.

So what about the other side?

I press alt a to deselect all and then l to select just this side come to left for you.

So control three and we've got left for you there you to unwrap and project from view now I can select

all or I can go to island mode and select all.

Now of course this is facing the wrong way, so I'm going to have to flip it so I can scale x minus

one to flip it round, and now I can scale it up and move it in to position and I'll speed this footage

up slightly.

Let's just take a quick look.

It's not looking too bad even on the top.

It's not looking awful.

It's a little bit confused up here, but from a distance I think it's looking quite nice.

We could, of course go in and try and edit some of these areas.

Maybe if I go to vertex mode, just bring this one down slightly.

So it's a little bit less obscure at the top there.

And this one down slightly as well.

Somewhere around there seems to work reasonably well.

And we successfully unwrapped our plane.

So pause the video here and catch up with me doing exactly the same on the other side and make any minor

adjustments that you think you need to to make the texture work with the model.

Okay.

Just as a quick challenge to you, I want you to see if you can add materials for the propeller and

the cockpit.

I added a new material for the middle part of the propeller and a separate material for the propeller

blades.

So pause the video and have a go at that.

Okay.

So I'll start with the propeller blades.

So like one of those new material, zoom in on my principle based F and I chose a color close to black

for those.

Of course, when I change one, they all update.

Let's select the main body now new material once again.

And I'll change this to a sort of silvery color somewhere around here, and I'll scroll down a bit with

the principal MDF and turn the metallic all the way up.

So it's this sort of metallic color and you might want a slightly lighter or slightly darker metal.

That's entirely up to you.

For the cockpit, if I select that, choose a new material.

I chose a base color, which is a very sort of light gray, maybe a little bit of blue as it's reflected

from the sky.

And I turn the roughness right down.

So it's got a sort of reflective quality like this.

Lastly, it's all very flat shaded at the moment.

So let's select everything right click and shade smooth and just so we can see the final result easier.

If I turn my gizmos off and my overlays off, we can see it without any distractions and it looks really

nice.

So hopefully you got an okay with that.

As always, make sure you've saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Texturing the Body |
| **Thời lượng** | 8:53 |
| **Chủ đề chính** | Tạo texture cho thân máy bay |

## 1. Mục tiêu bài học
- Hoàn thiện texturing cho phần thân (fuselage) máy bay, tiếp nối kỹ thuật đã dùng cho cánh.
- Xử lý các chi tiết đặc trưng của thân: số hiệu, logo, cửa sổ buồng lái, đường ghép panel.
- Biết cách dùng nhiều Material Slot hoặc một texture atlas duy nhất cho toàn bộ thân.
- Đối chiếu và đồng bộ phong cách vật liệu giữa thân và cánh để mô hình nhất quán.

## 2. Nội dung chính
Texturing phần thân máy bay áp dụng quy trình tương tự bài trước (Image Texture → Base Color, Roughness, Normal Map qua Principled BSDF), nhưng thân thường có nhiều chi tiết đồ họa cần chú ý hơn: số hiệu máy bay, logo hãng, viền cửa sổ buồng lái, đường phân chia panel kim loại.

Hai cách tổ chức texture phổ biến:
- **Một texture atlas duy nhất:** toàn bộ UV của thân (và có thể cả cánh, đuôi) được pack chung vào một ảnh texture lớn, tiện cho việc tạo một Material duy nhất áp dụng toàn mô hình, giảm số lượng Draw Call khi render.
- **Nhiều Material Slot:** gán các Material khác nhau cho từng nhóm face (ví dụ thân sơn màu chính, viền kim loại, kính buồng lái trong suốt) — thuận tiện khi cần thuộc tính vật liệu khác biệt rõ rệt (ví dụ kính cần Transmission/độ trong suốt mà sơn thân không cần).

Với chi tiết kính buồng lái, nên tạo Material riêng có Transmission cao (kính trong Principled BSDF) hoặc dùng Alpha Blend nếu chỉ cần độ trong suốt đơn giản, thay vì cố vẽ kính bằng texture phẳng.

Về mặt màu sắc và độ tương phản, nên đối chiếu trực tiếp Material của thân với Material của cánh (đã làm ở bài trước) trong cùng một khung nhìn Rendered để đảm bảo tông màu, độ bóng đồng nhất, tránh cảm giác hai bộ phận thuộc hai vật liệu hoàn toàn khác nhau.

## 3. Quy trình thực hành gợi ý
1. Tạo Material mới cho thân (hoặc dùng lại Material atlas chung nếu đã pack UV thân + cánh cùng texture).
2. Thêm Image Texture chứa texture sơn/số hiệu của thân, nối vào Base Color.
3. Với các chi tiết đặc thù (kính buồng lái), tạo Material Slot riêng với thiết lập Transmission/Alpha phù hợp.
4. Gán Material Slot cho đúng nhóm face tương ứng ở Edit Mode (chọn face → Assign trong Material Properties).
5. Thêm Roughness/Normal Map nếu có để tăng chi tiết bề mặt kim loại/sơn.
6. Chuyển sang Rendered Shading, đối chiếu màu sắc và độ bóng giữa thân và cánh, chỉnh lại nếu lệch tông.
7. Xoay mô hình toàn diện để kiểm tra không còn vùng UV bị lệch hoặc texture bị thiếu (hiển thị màu hồng/tím báo lỗi).

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+A` (Shader Editor) | Thêm node (Image Texture, Mix Shader...) |
| `Ctrl+L → Materials` | Copy Material từ object này sang object khác đang chọn |
| Material Properties → `Assign` | Gán Material Slot cho các face đã chọn ở Edit Mode |
| `Z` | Chuyển nhanh giữa các chế độ Shading để kiểm tra |

## 5. Lưu ý & lỗi thường gặp
- Không gán đúng face vào Material Slot khiến một phần thân hiển thị sai vật liệu (ví dụ kính buồng lái vẫn mang texture sơn).
- Kính buồng lái dùng texture phẳng thay vì Transmission/Alpha thật khiến thiếu chiều sâu và độ trong suốt tự nhiên khi render.
- Màu sắc/độ bóng giữa thân và cánh chênh lệch rõ do thiết lập Roughness/Metallic không đồng bộ.
- Quá nhiều Material Slot rời rạc mà không cần thiết làm tăng độ phức tạp quản lý mà không cải thiện chất lượng hình ảnh tương ứng.

## 6. Checklist thực hành
- [ ] Đã áp texture Base Color cho toàn bộ thân máy bay.
- [ ] Đã tạo Material riêng phù hợp cho kính buồng lái (Transmission/Alpha).
- [ ] Đã gán đúng Material Slot cho từng nhóm chi tiết.
- [ ] Đã đối chiếu và đồng bộ tông màu/độ bóng giữa thân và cánh.

## 7. Tóm tắt
Bài học hoàn tất phần texturing cho mô hình máy bay bằng cách xử lý thân với các chi tiết đặc thù như số hiệu, panel và kính buồng lái, đảm bảo tính nhất quán vật liệu với cánh đã texturing trước đó, khép lại giai đoạn UV/texturing để chuyển sang thiết lập animation.
