# 070 — Rendering Animations
In this lecture, we will render out our final animation and I'll talk a bit about rendering as a video

file or rendering as still images.

So here's where I got up to last time and I'm back in the animation workspace and rendering out animations

is slightly different to still frames, so it's a good idea to do a test within EV as it will render

faster and you can see what your animation is going to look like and then perhaps set a longer render

in cycles.

If I go across to the output properties, I can change the resolution to something like 50% for the

sake of a test, so it should render nice and fast.

It's a good idea to double check your frame range just here.

My start is one and my end frame is 100.

The most important section I would say is under the output settings.

Now, currently, if I were to render my animation, that would be to go up to render and render animations.

So control f 12 is the shortcut.

It would send it to my temporary files.

So make sure you've changed where it's going.

Now I'm going to put it into a folder called Plane Animation Renders.

So a double click on that.

Make sure I'm inside that folder and press accept.

The reason I render it out to a folder is because the default for blender and the best way to render

is with still images.

So you'll end up with 100 still images.

I then bring them into an external program such as Adobe Premiere, in my case to bring them all together.

Now you can render it out as a movie file, so it's just one file.

And I would suggest that if you don't have an external program that you want to use and you just want

a video file, and it's perfectly fine to do that.

There are slight advantages to still images, but I'll talk about those in a moment.

So in order to render out as a movie file, we go to file format, I'll click on the dropdown there

and ffmpeg is going to be your best option, so I'll click on that.

And under encoding, the current container is called Matryoshka, which is very good if you get a problem

whilst rendering, but it's not recognized by all players.

So you might want to change this to something like MPEG four.

For the quality you'll probably want perceptually lossless, so you won't be able to see any loss in

quality, but the file sizes won't be quite as big as lossless and encoding.

Speed is best to turn this to slowest because it doesn't actually take very long at all.

You won't notice the difference, but you'll get the best encoding.

So that's if you're rendering out as a video file.

And now if I press control F 12, you can see it going through very quickly through my frames because

it's 50% for one and it's eve for two.

And at this point, if I want to playback my animation, I can find my file and play it, or I can come

up to the render settings and say Vue animation.

And you can see it playing there.

So I'm happy that my animation is working and I'm comfortable with that.

At this point, I would turn the resolution up to 100 and then go across the cycles and wait the 300

seconds for it to render completely.

So that's rendering out with a video format.

However, as I was saying, a preferred method for many people is to render out with still images.

Most people, if I go across the file format, will go with the default, which is a PNG sequence.

There's two advantages to this.

One, you can have an alpha channel in the background.

So if I go back to the render properties and go down to where it says film, I can actually set the

background to Transparent and you can see I've now got a transparent background so I could put it in

my own sky.

And this is very good if you want to do some special effects and put an object into some real life footage,

but I don't need to do that for the moment, so I'll unpick that and go back to my render properties.

So that's one advantage of a PNG that it has this alpha channel and you can use that alpha channel to

place in your own backgrounds.

The other advantage is that if anything goes wrong, you'll have all the frames up to the point of the

error that will be okay and then you can just restart from that point.

So with it set back to PNG, if I render now with control F 12, you can see once again it goes through

at the same pace and I'll quickly speed this up for you.

This time I have lots of single frames, as you can see here.

So there's frame one and you can see I can go through my animation frame by frame and like I was saying,

I would send these across to a program such as Adobe Premiere to put them all into sequence.

A free program such as Da Vinci, Resolve or even MovieMaker will do the same thing if you don't want

to use those programs or you don't need the functionality of having an alpha channel in your file,

then you may as well just render as a video file, as I talked about earlier with the file format ffmpeg

and make the adjustments I talked about earlier.

And to be fair, I find it very rare that I do get a crash, so you should be fine.

Just rendering out as a video file from Blender.

So pause the video here and render out your final animation.

Of course, you can choose whether to use still images and put them all together in something like Adobe

Premiere or render them out as a movie file.

Once you've done that, it would be great if you share your work with the community and take a look

at how other people have got on as well.

And of course, do remember to save your work.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Rendering Animations |
| **Thời lượng** | 4:57 |
| **Chủ đề chính** | Render hoạt ảnh |

## 1. Mục tiêu bài học
- Thiết lập Output Properties đầy đủ để render animation: độ phân giải, định dạng file, đường dẫn lưu.
- Hiểu sự khác biệt giữa render ra chuỗi ảnh (image sequence) và render trực tiếp ra video (FFmpeg).
- Chọn thông số Sample/chất lượng phù hợp giữa Eevee và Cycles để cân bằng chất lượng và thời gian render.
- Thực hiện render toàn bộ animation máy bay đã hoàn thiện.

## 2. Nội dung chính
Sau khi mô hình, texture, animation và ánh sáng HDRI đã hoàn tất, bước cuối cùng là render animation thành video. Các thiết lập quan trọng nằm trong **Output Properties**:
- **Resolution (X/Y) và Resolution %:** xác định độ phân giải khung hình cuối cùng; giảm % khi cần render thử nhanh (preview) trước khi render full chất lượng.
- **Frame Range:** đã thiết lập ở bài trước (Frame Start/End), đảm bảo khớp với đoạn animation cần xuất.
- **Output Path và File Format:** có thể chọn render ra **chuỗi ảnh** (PNG, OpenEXR...) — mỗi frame là một file riêng, an toàn hơn vì có thể render lại từng frame bị lỗi hoặc dừng giữa chừng mà không mất tiến độ; hoặc render trực tiếp ra **video** (FFmpeg Video, container MP4/MKV với codec H.264...) — tiện lợi nhưng nếu quá trình bị gián đoạn giữa chừng, thường phải render lại từ đầu.

Trong thực tế sản xuất, cách làm phổ biến là render ra chuỗi ảnh PNG trước, sau đó dùng Video Sequence Editor (VSE) của Blender hoặc phần mềm dựng phim khác để ghép chuỗi ảnh thành video hoàn chỉnh — vừa an toàn vừa linh hoạt hơn khi cần chỉnh sửa hậu kỳ.

Về chất lượng render, trong **Render Properties**:
- **Eevee:** điều chỉnh Sampling (Render Samples) và các tùy chọn Screen Space Reflections/Ambient Occlusion nếu cần chất lượng phản chiếu/bóng đổ cao hơn; render nhanh hơn đáng kể, phù hợp preview hoặc khi cần render nhiều frame animation trong thời gian ngắn.
- **Cycles:** điều chỉnh số Samples (và có thể bật Denoising) để cân bằng giữa chất lượng (giảm noise) và thời gian render; animation dài với Cycles có thể tốn thời gian đáng kể, nên cân nhắc kỹ số sample cần thiết, có thể render thử một vài frame đại diện trước khi render toàn bộ.

## 3. Quy trình thực hành gợi ý
1. Vào Output Properties, đặt Resolution (ví dụ 1920×1080), Frame Range khớp animation.
2. Chọn File Format: PNG (chuỗi ảnh, khuyến nghị an toàn) hoặc FFmpeg Video (MP4) nếu muốn xuất trực tiếp video.
3. Chỉ định Output Path — thư mục lưu kết quả render.
4. Vào Render Properties, chọn Render Engine (Eevee hoặc Cycles) và điều chỉnh Sample phù hợp.
5. Render thử một vài frame riêng lẻ (`Render → Render Image`, F12) tại các thời điểm quan trọng để kiểm tra ánh sáng, texture, chuyển động trước khi render toàn bộ.
6. Khi đã hài lòng, chạy `Render → Render Animation` (`Ctrl+F12`) để render toàn bộ đoạn animation.
7. Nếu render ra chuỗi ảnh, dùng Video Sequence Editor để ghép thành video hoàn chỉnh sau khi render xong.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `F12` | Render Image (render frame hiện tại) |
| `Ctrl+F12` | Render Animation (render toàn bộ Frame Range) |
| `Esc` | Hủy quá trình render đang chạy |
| Output Properties → File Format | Chọn định dạng ảnh/video xuất ra |
| Render Properties → Sampling | Điều chỉnh chất lượng/số sample của Eevee hoặc Cycles |

## 5. Lưu ý & lỗi thường gặp
- Render trực tiếp ra video (FFmpeg) cho animation dài mà không có bản sao lưu chuỗi ảnh — nếu máy tính gặp sự cố giữa chừng, phải render lại từ đầu.
- Không kiểm tra Frame Range trước khi Render Animation khiến render thiếu hoặc thừa đoạn không cần thiết.
- Đặt Sample quá cao ở Cycles cho animation dài khiến thời gian render kéo dài không cần thiết so với chất lượng thực tế cần có.
- Quên tắt hiển thị Reference Image hoặc object phụ trợ trong Render (đã xử lý ở bài Scene and Animation Adjustments) khiến chúng xuất hiện trong kết quả cuối.

## 6. Checklist thực hành
- [ ] Đã thiết lập Resolution, Frame Range và Output Path đầy đủ.
- [ ] Đã chọn định dạng xuất phù hợp (chuỗi ảnh hoặc video).
- [ ] Đã render thử một vài frame để kiểm tra chất lượng trước khi render toàn bộ.
- [ ] Đã render thành công toàn bộ animation máy bay.

## 7. Tóm tắt
Bài học hoàn tất dự án bằng việc thiết lập thông số Output/Render phù hợp và thực hiện render toàn bộ animation máy bay, khép lại quy trình từ UV mapping, modelling, texturing, animation cho đến sản phẩm video hoàn chỉnh của Module 04.
