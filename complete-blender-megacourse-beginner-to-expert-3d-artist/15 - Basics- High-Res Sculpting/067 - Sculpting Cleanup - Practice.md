# 067 — Sculpting Cleanup

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 15 — Basics: High-Res Sculpting |
| **Bài học** | Sculpting Cleanup |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 22:33 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Sculpting Cleanup** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- sculpting, brushes và quy trình tạo hình organic
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


Okay, so now we have our sculpted mesh completely retopologized. And now to move forward from here,

we want to be able to use the multi resolution modifier with this. The entire purpose of

retopologizing this model was so that we could use the multi res to sculpt in some very fine

surface detail. So the first thing that we want to do here, I just have this as my retopology,

I'm going to just duplicate this. And I'm going to right click to drop it. That sort of wacky

error that you saw when I duplicated it was just because I have all these modifiers still present.

So the reason I'm duplicating this is just to save a backup copy of the retopologized mesh in case

something goes wrong at my sculpting stage. And I can quickly get back to this level of detail to

this model without having to to redo the retopology because that would be very time consuming. So I'm

just going to drop this original retopology model into our collection here. I'm just doing that so

I can get it out of the way. So I can even hide it here. And I can even disable selection so I

don't accidentally edit this in any way. So now we are left with just this with just this duplicate.

So we need to get this ready for sculpting in multi-res. So the first thing that we need to do

is apply all the modifiers that we want to use. So keeping in mind that our subdivision and our

displacement modifiers were not for the purposes of actually changing this mesh at all, that was

just a preview tool for us as we worked through retopology to better visualize what we were doing.

So let's delete the displacement and the subdivision modifiers from our modifier stack.

And now we can apply our modifiers either by applying them manually here through the through

the modifier stack or to quickly apply every modifier you have to a mesh. In object mode if

you right-click and come down here to where it says convert to, if we select mesh you'll see

that all of our windows have disappeared from our modifier stack. And now if we press tab to come

into edit mode we see that all of our changes have been applied into the base mesh. So this is now

the base mesh off of which we can work. So I'm just going to rename this something iresculpt.

And I'm maintaining my original sculpt right here as well as the retopology. And we can leave these

hidden, these are just backups in case we need to revert back to an earlier stage in this project.

But let's enable the visualization of the eyes and the earrings. And we can pull them out of

the collection here by clicking and dragging them over the scene collection. So now when we collapse

this collection it, we can still access the eyes and the earrings. And let's rename this something

like backups. And we can quickly hide everything in this collection by clicking this checkbox here.

We'll deactivate this entire collection. Okay so here we are and we are ready to go in and add our

multi-resolution modifier. So same as before. Again nothing changes right here we just need

to subdivide and start creating levels of subdivision. Now you'll notice that we have

lost some of the definition that we got with our dynamic sculpt. It's okay we're just going to have

to come in and re-emphasize those forms. But it should be very easy to do because all of our topology,

our edges, all are respecting the forms that we want. So it should be a fairly quick fix. So I've

added just two levels of subdivision to start with. Again using the multi-res modifier I can

easily work at a low level, switch up to a high level, switch back down to a low level. But we

do want to make sure that we're keeping it as low as we can for the smoothest form. So let's

move into sculpt mode on this object. I'm gonna switch to my pen here and I'm going to come in

and just start re-adding in those forms that we lost in the retopology process. And remember to

turn on X mirror for this. And I'm gonna hold ctrl and come in with my draw brush. This is still

pretty low res so we're gonna have to upscale it but no problem there. We just want to add these

forms in at the lowest subdivision level that we can. So just really gently coming in with the blob

a brush there and tracing over some of these areas where we've lost some of our definition.

Now keeping in mind that the multi-res modifier isn't actually adding any new geometry so we're

not undoing any of the work that we did in the retopology phase. We're just moving things around

so they better match what we want for our final creation here. I'm gonna grab my crease brush

and start creasing in some of these contours here where we've lost definition especially around the

nose and around the side of the ear here. I'm just gonna push these in a little bit.

Now how high res you can get the sculpt will largely depend on the power of your PC. I think

I have a GTX 1060 graphics card which is a fairly good graphics card but it is a little outdated at

the time of this recording so I will probably only be able to get something that is moderately

dense but for the purposes of this demonstration that is okay. And with regards to how do you know

what is a dense mesh versus a moderately dense mesh that is just something that comes sort of

over time. If you want to check the density of your mesh you can do so by coming up into this

overlays tab and enabling the statistics bubble that will pop up this information here. It says

that this object I believe it's everything that's in the viewport when you're in object mode so if

we just view this in isolation we can see that this object has 25,000 vertices you know 50,000

edges 25,000 faces and 50,000 triangles. Now again what how many how high you can get these numbers

will largely depend on the power of your PC. I like to get it to about I think a proximate triangle

count of about 1 million is usually a good point where it will get fine enough detail but it will

not crash my machine. So again we don't want to necessarily jump to a million polygons right off

the bat you want to build up these forms slowly. We already have a really good basis from our

previous sculpt and our redepology so we're just going to come in here at a lower subdivision

level and start to emphasize these forms but we really won't have to do all that much.

Let's start drawing in some of these large hair forms

okay and when we reach a point where we are not having enough geometry to make the shapes we want

such as in here go ahead and subdivide again.

Again we're only at 157,000 vertices which is still quite low so we have room to continue

increasing the resolution here. Add some crow's feet definition. Yeah this is looking good.

I'm going to experiment with adding some wrinkles into the cheeks here.

I'm just using the draw brush with the ctrl key held and pushing that in and smoothing it

slightly to create a sort of sunken cheek.

And again I'm just using the draw brush here.

I typically leave the faces on flat shading when I'm sculpting because it gives me a better

idea of the density of my mesh however if you find that this is distracting

you can always change your object to smooth shading just by coming into object mode

and shading it smooth. I'm going to return it to flat but that is how you would do that if

you wanted to. Use the grab brush and I think we lost a little bit of form at the very tip of the

nose here during our retopology so I'm just going to pull this out ever so slightly.

I think we lost a little definition in the chin.

Let's grab the crease brush and crease this in ever so slightly.

So at this point I'm just doing very small scale edits to the form of this

and I'm mostly just accentuating the details that were already there.

Any large scale changes to your form you typically want to do with a dynamic topology and then when

you're happy with the shape you come in you retopologize

and then you come in you clean up anything that you lost

in multi-res and then you're at ready to add even greater detail.

So I'm going to pull out some of these hair locks that we lost

again we need to subdivide one more time.

So I'm at a subdivision level of four currently which is about 400,000 faces. We still have some

room to up res which is going to get rid of this sort of jagged edges we're getting here.

Let's just undo some of that and the jaggedness in these edges are caused by me not following the

flow of the retopology so if I draw along these edges that I created there's less jaggedness but

if I draw sort of against it in a diagonal manner you can see there's just a lot of

a lot of that jaggedness. This is also called aliasing in 3d art and it has to do with

limitations of pixels and zooming in you'll get the same effect so if you had like a 2d image

and you zoomed way in on one portion you would start to see the individual pixels so it's

sort of the same principle as that.

Let's just draw back that part into the center of her hair and let's redraw the boundary of where

the hair starts to come over the head and we're doing this with the crease brush.

Okay we're at 400,000 faces here let's subdivide again.

Okay now we're at 1.6 and let's draw out a stroke now and see how we're looking.

Much cleaner again the hair is lower resolution than the rest of the face.

I did that intentionally on this model but just know that if you did need more resolution in your

hair if you wanted to go with a finer detail you would typically want the original base mesh to

be an equal density to something like the face because we can continue to subdivide here and

that will make this area a denser area but it will make the entire thing denser so now we're getting

two very fine polys in here. Remember that this is still shaded flat so it appears so smooth here

it appears so smooth here because we just have so many individual points that we're

getting a really smooth look but we are still in flat shading mode.

Coming in with my clay strips and just pulling out some more individual strands

and trying to mimic the form of our original sculpt. We have our original

sculpt back here if we ever need to reference it.

Let's have the hair join the neck like so we can smooth it out to clean it up.

So

again with this stuff I'm not drawing individual hairs by any means I'm just

pulling these strokes out in the direction of the hair to imply it

and that is generally what you want to do especially for more stylized pieces.

Having too much detail can really make it look very messy.

Let's kind of have it come up and behind the ear like this

and then we'll tuck sort of have this tucked away

tucked away and I'm affecting the ear a little bit so let's just come in with a mask

and you'll see that at these higher resolutions we can also get a much cleaner mask

and that is because the mask is drawn on a per vertex basis so the more vertices you have

in your mesh the finer the resolution of the mask will be.

I'm just going to push this in a little bit. So

lost that little curl of hair we had coming over the ear so let's just come in and add that in

again. Coming in with my mask tool and holding ctrl I'm just cleaning up this area so I can get

finer control right here and grabbing this clay strips again just having a little bit of hair come over the ear.

Okay you'll see this is process is going much more quickly than it did

when we were sculpting it the first time because those forms are

already there we just need to define them a little bit more.

Again I'm going to use symmetry for the majority of this

and then just where it meets at the very center I will turn symmetry off to get the center line.

Okay so let's turn symmetry off for this next portion and let's just come in and continue with

our hair strokes we just want to make them look like they are tucked underneath one each other

so we're just going to pull in some lines from each side and have them sort of form like a crisscross.

Okay and you can obviously spend as much time as you need getting these details just the way you

want them. I think for the purposes of this demonstration that is totally sufficient.

Maybe just come in and clean up that tool though

with the clay strips and just clean up these edges here.

So add as much or as little detail you would like at this stage but

you may be wondering how for very realistic sculpts they do things like very fine wrinkles

and skin pores or you know very subtle cracks and you know things like rocks and for that I do not

recommend you put it in at this stage because in the next video we're going to talk about how to

use alpha textures with our brushes to get fine patterns. So I will see you in the next video.

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
