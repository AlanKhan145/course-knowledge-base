# 069 — Lighting and HDRI's
In this lecture, we'll be looking at lighting and in particular actress and how we can rotate those

to make our scenes look even better.

And I'll be talking a little bit again about Eve and Cycles.

Okay.

So here's where we got up to last time, and I've got my camera at the front of the scene there and

all my buildings curving around the corner.

I'm in the shading workspace and in order to talk about lighting, I'm going to bring across my side

windows here.

Change this one to the 3D viewport and change it to camera view.

I'll zoom in a bit and let's make sure that on rendered.

So we're seeing the final result here but I've also got my 3D viewport next to it so I can make some

decisions on lighting down at the bottom here I've got the shader editor so I can change any materials.

However, this is probably more suitable if I change it to the world tab, then I've got my HDR in the

background so I can change the strength if I need to to affect the lighting.

So pause the video here and catch up with me and set up your workspace accordingly.

Okay.

So you can probably see I'll zoom in a tiny bit more on my camera here.

And in fact, let's get rid of the overlays and the gizmos so we can see a bit more of the final result

there.

Now, you can probably see that it's a little bit flat in the sense that there's not a lot of shadows

and contrast.

And I'm in the render engine, Evy, and that's often a common problem with the shadows cast by our

tree in the background.

Now in the render properties, I can change the ambient occlusion.

Turn that up a bit to give it a little bit more contrast around places.

So a little bit more shading within the crevices.

So I've gone up to 1.4, but that does depend on how big your scene is and it gives it a bit more depth.

So that slightly helps.

We could come down to the shadows option here and turn it to high bit depth, but you don't really notice

a huge amount of difference with that.

Now what we can also do is go into our world settings here.

So I've got my dry plugged in.

And just as a quick reminder, I'll unplug that if I select on my background and press control t that's

with the node wrangler installed and I'll press g to grab to move that down.

You can see that that gives me three nodes, the environment, texture, but also a mapping node and

a texture coordinate.

So I'll just delete those ones and hook up my original once again.

And a quick reminder, the tree is downloaded from Poly Haven and it does offer light into our scene.

Now, the useful thing about the mapping node, which incidentally if I press shift eight add is under

vector and there's mapping, I can use this to rotate my dry.

So with the Z axis, so that's the one going up and down.

Of course I can rotate it around and you can see in the top viewport there my tree rotating around and

I can make the scene look a little bit more interesting.

Maybe having a bit more light in the background like this looks quite stunning.

Maybe a little bit further round away from the light.

Somewhere around there, it looks quite interesting.

So my light's coming from somewhere over here.

If you want to be able to see that, you can in your 3D viewport change to render.

And we can see where the light's coming from, which is there, and therefore giving some shadows from

the buildings on the left to the right.

So pause the video here and have a go at rotating around your dry.

Now if I change across to cycles, so in the random properties across the cycles and I'll change across

to the GPU so it's faster and turn the noise on for both the viewport and the render so it renders much

faster.

We can see that the scene looks a lot more interesting now because of that realistic lighting that cycles

is giving us.

So the sun's coming from over here.

It's bouncing off these and offering a little bit of light here.

Whereas EV, if I jump back to that, has way too much light in our scene and isn't faking it particularly

well.

So my recommendation would be to render in cycles.

However, it does depend on the speed of your machine.

You can set a time limit to each frames, render time.

And if I change this to something like 3 seconds, I can then render out.

And once it gets to 3 seconds it will pause.

Then D noise the image and it looks fairly reasonable.

But I've got a very good graphics card which renders very fast, so 3 seconds for my graphics card may

produce a lot better renders than a lower grade one.

I'll close this down and the reason I would change it to 3 seconds is because we've now got 100 of these

to render.

So it will take us 300 seconds.

So a few minutes.

That's why setting a time limit is very useful.

But for those that haven't got a powerful graphics card, you may want to change it back to EV and you

could try some modifications to increase the shadow intensity.

One example would be to add in a sunlight of our own that we can control.

So shift eight, add light and then sun.

Let's point it from the same direction the sun's coming from.

So over here.

So I'll come to top view G to grab to move it towards that sun over there and point it down towards

my scene like this.

Now under the lighting settings, I'll increase it a tiny bit to something like three.

So it's quite a powerful sun and I'll come to our background and reduce the strength of our background.

I'll just quickly check that the angles, okay.

And reduce the background to zero so I can see exactly how the sun's positioned and bring it up and

then point it down.

So we've got a bit more shadow in our scene like this somewhere around there, I think, and then bring

the background up a little bit more and we've got a bit more shadows being cast from these buildings

here.

I'll just bring the background up a touch more so about 0.3 for the background and a sun value of three

as well.

We could also give this a little bit more yellow, so it looks a little bit more like a sun somewhere

around there, I think.

And the scene's looking a little bit nicer.

It's not ideal and cycles is certainly a lot better, but it does give us that option.

So your challenge then is to set up the lighting for your scene and decide whether you want to use Eve

or cycles.

You might want to do a test in cycles to see how good the image looks with maybe a three second render.

And if that takes too long, then you'll need to set up the lighting within EV and maybe put in an extra

sun.

Once you've done that, save your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Lighting and HDRI's |
| **Thời lượng** | 6:14 |
| **Chủ đề chính** | Ánh sáng HDRI trong Eevee và Cycles |

## 1. Mục tiêu bài học
- Hiểu khái niệm HDRI (High Dynamic Range Image) và vai trò của nó trong World Lighting.
- Biết cách thiết lập Environment Texture trong World Properties bằng Shader Node.
- Nắm được sự khác biệt khi sử dụng HDRI giữa Eevee và Cycles.
- Điều chỉnh cường độ (Strength) và góc xoay (Rotation) của HDRI cho phù hợp với scene máy bay.

## 2. Nội dung chính
**HDRI** là ảnh môi trường có dải sáng động (dynamic range) rất rộng, thường chụp panorama 360° của một không gian thực (bầu trời, studio, ngoại cảnh), dùng để chiếu sáng và phản chiếu môi trường lên toàn bộ scene một cách chân thực mà không cần dựng nhiều nguồn sáng thủ công.

Trong Blender, HDRI được thiết lập ở **World Properties**, thông qua Shader Node của World: thêm node **Environment Texture**, nạp file ảnh HDRI (định dạng .hdr hoặc .exr), nối vào input Color của node **Background**, sau đó nối Background vào **World Output**. Có thể điều chỉnh:
- **Strength:** cường độ sáng tổng thể mà HDRI cung cấp cho scene.
- **Mapping + Texture Coordinate (Generated):** thêm node Mapping trước Environment Texture để xoay góc HDRI (Rotation Z), thay đổi hướng nguồn sáng chính mà không cần xoay toàn bộ scene.

Về khác biệt giữa hai render engine:
- **Eevee** (Eevee Next trong Blender 4.2+): là engine rasterization thời gian thực, HDRI ảnh hưởng ánh sáng và phản chiếu (reflection) dựa trên xấp xỉ (probe phản chiếu, Screen Space Reflections...). Cần đảm bảo **Light Probes** (Reflection Cubemap/Irradiance Volume) được đặt hợp lý nếu muốn phản chiếu HDRI chính xác trên các bề mặt bóng (kim loại thân/cánh máy bay), mặc dù với World HDRI cơ bản, ánh sáng nền và phản chiếu môi trường mặc định đã hoạt động khá tốt trực tiếp.
- **Cycles:** là engine raytracing, HDRI được lấy mẫu (sample) trực tiếp như một nguồn sáng thực sự, cho phản chiếu và ánh sáng gián tiếp (global illumination) chính xác hơn nhưng thời gian render lâu hơn, đặc biệt với hình ảnh có nhiều bề mặt phản chiếu như thân kim loại máy bay.

Với dự án máy bay, HDRI bầu trời (sky HDRI) là lựa chọn tự nhiên, vừa cung cấp ánh sáng mặt trời hợp lý, vừa tạo phản chiếu bầu trời/mây trên bề mặt kim loại/sơn bóng của máy bay.

## 3. Quy trình thực hành gợi ý
1. Chuyển sang tab Shading, chọn World (thay vì Object) ở phía trên Shader Editor.
2. Thêm node Environment Texture (`Shift+A → Texture → Environment Texture`), nạp file HDRI bầu trời.
3. Nối Environment Texture vào Background, Background vào World Output (thường đã có sẵn, chỉ cần thay Color input).
4. Thêm Texture Coordinate (Generated) + Mapping node trước Environment Texture để có thể xoay HDRI sau này.
5. Chuyển Viewport Shading sang Rendered để xem trực tiếp hiệu ứng ánh sáng HDRI trên máy bay.
6. Thử chuyển đổi giữa Eevee và Cycles trong Render Properties, quan sát khác biệt về phản chiếu và chất lượng ánh sáng.
7. Điều chỉnh Strength và Rotation Z của Mapping node để có góc chiếu sáng đẹp nhất cho máy bay.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+A` (Shader Editor, World) | Thêm node Environment Texture, Mapping... |
| `Z` | Chuyển Viewport Shading sang Rendered để xem trước HDRI |
| World Properties → Surface | Truy cập nhanh thiết lập World Shader không cần Shader Editor |
| Render Properties → Render Engine | Chuyển đổi giữa Eevee và Cycles |

## 5. Lưu ý & lỗi thường gặp
- Chọn nhầm ngữ cảnh node (đang chỉnh Object Material thay vì World) khiến không thấy Environment Texture ảnh hưởng gì tới scene.
- HDRI có Strength quá cao/quá thấp khiến scene bị cháy sáng (overexposed) hoặc quá tối.
- Không thêm Mapping node khiến không thể xoay hướng chiếu sáng của HDRI khi cần đổi góc mặt trời.
- Chỉ xem trước ở Eevee mà không kiểm tra Cycles (hoặc ngược lại) có thể dẫn đến bất ngờ về sự khác biệt phản chiếu khi render engine cuối cùng khác với lúc preview.

## 6. Checklist thực hành
- [ ] Đã thiết lập Environment Texture với ảnh HDRI trong World Shader.
- [ ] Đã thêm Mapping node để có thể xoay hướng HDRI.
- [ ] Đã so sánh kết quả ánh sáng/phản chiếu giữa Eevee và Cycles.
- [ ] Đã điều chỉnh Strength/Rotation cho ánh sáng phù hợp với scene máy bay.

## 7. Tóm tắt
Bài học giới thiệu HDRI như một phương pháp chiếu sáng môi trường nhanh và chân thực, thiết lập qua World Shader Node, đồng thời làm rõ khác biệt xử lý HDRI giữa Eevee và Cycles — chuẩn bị ánh sáng hoàn chỉnh cho bài render animation cuối cùng.
