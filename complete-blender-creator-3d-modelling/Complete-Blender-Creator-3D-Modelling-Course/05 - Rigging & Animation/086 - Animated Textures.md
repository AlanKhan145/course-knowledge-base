# 086 — Animated Textures
In this lecture will be adding an animated video file to our television screen.

We'll also be texturing the rest of the TV and the character.

Okay.

So here's how we got up to last time, and I'm still in the animation workspace to add some textures.

I'll go across to the shading workspace and let's move into our character.

Now, first of all, it would be fun to animate the screen, so I'll select that and I'll create a new

material and I'll rename this screen sometimes just a good idea to change the color, to make sure it's

all working.

And that seems fine now for my texture.

I've chosen this one from Louis Quintero.

To find this I went to Pexels.com and you can see the web address up there.

Pixels has videos which are free to download and free to use, and I typed in Glitch and there's lots

of interesting videos that you could choose from.

You could type in anything.

I was going to choose an animals face, but the glitch seemed to work quite well.

This one here, and I would really recommend that you find something different and make this your own.

What I would also recommend is that it has a lot of movement in it.

Remember, we're only taking one second of this footage.

So ideally there's a good lot of movement in one second.

Pixels has videos which are free to download and free to use.

So once I've downloaded that, I can bring up that folder with that video in and click and drag to bring

that into my shader.

Editor Alternatively, you can press shift eight add texture and then image texture.

And when you open it up, it should give you the options of moving down here.

Make sure you change from image sequence to movie and let's look that up.

I'll just get rid of this other image texture there.

So pause the video here and catch up with me creating a new material for your television screen and

bringing in and hooking up your movie texture.

Now at the moment we can't see anything, so we have to check our unwrap for this object.

So I'll go to UV editing and there's our image and we can see that the unwrap is just here.

Let's select all and press you to unwrap and then unwrap.

It's one big flat surface so we don't need to mark any seams.

And the first problem we see is that we've only got half our screen.

So I'll need to apply the mirror so we can unwrap the whole of it.

So I'll go to the modifiers, the mirrors at the top here on the dropdown.

I can't choose apply because it's in edit mode, so I'll have to go back to object mode on the dropdown,

apply back into edit mode, select all and I'll have to re unwrap because they're still on top of each

other here.

So you to unwrap and then unwrap and there's my screen I'll just move this into the middle.

So select all with A and G, then x move that into the middle like this.

And let's see what that looks like by going into material preview mode.

Make sure that's working and zoom in on that.

And let's go back to the shading workspace so we can work on the texture.

So pause the video and catch up with me applying the mirror for the screen and re unwrapping it and

placing the UVs.

So they're in the middle of your video.

It would be helpful to have the timeline as well so we can scrub across it and check that it's working.

So I'll pull up a new window here and change that to the timeline.

Now I can scrub across my timeline and see how we're getting on.

Now we're not seeing any updating of the screen.

I'll just move in a little bit closer and I'll turn off the overlays so the bones don't get in the way.

I'll just move down so we can see the bottom of the image texture.

You can see that there's certain options, the start frame being one and the amount of frames being

100.

This doesn't matter too much, but if your animation is longer, you can increase the amount of frames.

But we've only got 24 frames in our actual animation, so it shouldn't make too much difference.

They're the start frame of one should be fine.

There's a button here called Auto Refresh.

If we click on that, it will actually start to refresh and we'll see the results of the video within

our viewport and it seems to be working well.

Okay, so as a challenge to you, I want you to look at your character and think of ways that you could

maybe texture it to make it look interesting.

You could texture it with image textures or just give it some plain colors.

That's entirely up to you.

Pause the video and have a go at that.

Okay.

So I'll do that myself just to show you some of the things you might come up against.

I don't need the timeline anymore, so I'll bring that back down.

Let's select on the TV.

Create a new material.

Call this TV shell and I'll give this some sort of purply color.

I think somewhere around there.

And the dials, you might want to turn your overlays back on at this point so you can see what you've

selected and give this a new material for the styles.

And this can be maybe a black material like this and I'll choose the other one shift select this one

and control l two link materials so they both look the same.

How about my character?

Let's click on my character and let's add a new material and let's give them a color, maybe blue.

And this time I'll turn the roughness up and they look quite interesting there.

I think a little less saturated.

So in from the circle and that looks nice.

What about if I want to texture some faces with different texture slots, maybe texture half my object

with a different color.

But if I go into edit mode, the first thing you'll notice to select those half faces.

I can't do that because it's got a mirror modifier and notice when I go into edit mode it goes back

to its original position.

So Edit Mode turns off the influence of the armature.

So if I want to texture the other half with a different color, I would need to apply the mirror, which

is absolutely fine.

Or you may find that you could just go in and maybe texture a few faces.

So I'll go to face mode and select these faces here.

For example, maybe give him some interesting lines around the wrist and the elbow, maybe the same

for the knee somewhere around here.

And again, give them a new slot so new material slots and assign them to that.

And you can see they've got the default white texture until I add a new one in here.

And in fact white looks quite interesting, so I'll leave it at white.

So we've got this interesting character.

Let's go back into object mode and turn the overlays off.

And I think he looks quite fun.

You could of course add a procedural texture into here.

So shift to add texture and let's go for the Musgrave and I could plug that in and then we get some

sort of procedural texture like this.

I'm not sure I like that as much, so I'll take that off and give our character some plain colors like

this.

So hopefully you got an okay with that.

Now of course, you might want to render out your project using either steel frames or the ffmpeg.

Do you remember to position your camera first and to save your work before you do that?

And also, it'd be great to see some of those animations on the community, so do share them so we can

see how you're getting on.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Animated Textures |
| **Thời lượng** | 6:13 |
| **Chủ đề chính** | Đưa video lên màn hình TV |

## 1. Mục tiêu bài học

- Hiểu cách Blender xử lý video/image sequence như một texture động (animated texture).
- Biết cách thêm Image Texture node dạng Movie/Sequence trong Shader Editor.
- Áp video texture lên mặt màn hình của TV đã dựng ở các bài trước.
- Đồng bộ thời lượng video texture với frame range của scene.

## 2. Nội dung chính

Animated Texture là kỹ thuật gán một video (hoặc chuỗi ảnh tuần tự - image sequence) làm texture cho một vật liệu, khiến bề mặt đó phát video khi animation chạy — thường dùng cho các chi tiết như màn hình TV, màn hình máy tính, biển quảng cáo động trong scene. Về bản chất, Blender coi video như một chuỗi frame ảnh và đọc đúng frame tương ứng với frame hiện tại của Timeline khi render hoặc playback trong Shader/Material preview.

Để thiết lập, trong Shader Editor của vật liệu gán cho mặt màn hình TV, thêm một node Image Texture, sau đó Open một file video (định dạng phổ biến như .mp4, hoặc chuỗi ảnh .png/.jpg đánh số thứ tự). Sau khi load, cần vào phần Image Properties (thường xuất hiện dưới node hoặc trong sidebar N của Shader Editor) để thiết lập Source là "Movie" (hoặc tự động nhận diện với video), khai báo Frame Start (frame bắt đầu phát trong Timeline), số lượng Frames (tổng số frame của video), và tùy chọn Auto Refresh để đảm bảo video cập nhật đúng khi tua qua lại Timeline.

Nối output Color của node Image Texture vào input Base Color (hoặc Emission Color nếu muốn màn hình phát sáng như TV thật) của node Principled BSDF. Dùng Emission thường cho kết quả thuyết phục hơn cho màn hình TV vì mô phỏng ánh sáng tự phát ra từ màn hình thay vì chỉ phản chiếu ánh sáng môi trường như Base Color thông thường. Cũng cần lưu ý đồng bộ độ dài video với frame range tổng thể của scene animation — nếu video ngắn hơn animation, có thể cần lặp lại (loop) bằng cách bật tùy chọn Cyclic trong Image Sequence settings.

## 3. Quy trình thực hành gợi ý

1. Chọn object màn hình TV, vào Shading workspace hoặc Shader Editor.
2. Thêm node Image Texture (Shift+A > Texture > Image Texture) vào node tree của vật liệu màn hình.
3. Open file video/image sequence, kiểm tra Source được nhận diện là Movie hoặc Image Sequence.
4. Thiết lập Frame Start và Frame Count khớp với thời lượng video thực tế.
5. Nối Color output vào Emission Color của Principled BSDF (thay vì Base Color) để màn hình phát sáng.
6. Play animation trong Viewport (chế độ Material Preview hoặc Rendered) để kiểm tra video phát đúng theo Timeline.
7. Nếu cần lặp video liên tục, bật Cyclic trong phần Image Sequence settings.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Chức năng |
|---|---|
| `Shift+A` (trong Shader Editor) | Thêm node mới, ví dụ Image Texture |
| Image Texture node > Open | Load file video hoặc chuỗi ảnh |
| Source: Movie / Sequence (Image Properties) | Xác định loại animated texture |
| Frame Start / Frames / Offset | Đồng bộ video với Timeline scene |
| Cyclic (checkbox) | Lặp video liên tục khi animation dài hơn video |
| Kết nối vào Emission Color (Principled BSDF) | Làm màn hình tự phát sáng thay vì chỉ phản chiếu |

## 5. Lưu ý & lỗi thường gặp

- Nối video texture vào Base Color thay vì Emission khiến màn hình trông tối, thiếu cảm giác "đang phát sáng" như TV thật.
- Không thiết lập đúng Frame Start khiến video không đồng bộ với Timeline (bắt đầu sai thời điểm).
- Quên bật Auto Refresh hoặc chưa Pack video vào file .blend khiến video không phát khi mở lại project trên máy khác.
- Độ phân giải video quá cao gây giật lag khi preview trong Viewport, nên cân nhắc proxy hoặc giảm preview quality khi làm việc.

## 6. Checklist thực hành

- [ ] Đã thêm node Image Texture với video/image sequence cho màn hình TV.
- [ ] Đã thiết lập Frame Start/Frame Count khớp với Timeline.
- [ ] Đã nối video vào Emission Color để màn hình phát sáng.
- [ ] Đã kiểm tra video phát đúng khi play animation trong Viewport.

## 7. Tóm tắt

Animated Texture cho phép gán video như một texture động lên vật liệu, thường dùng qua node Image Texture nối vào Emission để tạo hiệu ứng màn hình phát sáng. Đây là chi tiết hoàn thiện cuối cùng cho scene TV trong module, kết hợp cả modelling và shading động.
