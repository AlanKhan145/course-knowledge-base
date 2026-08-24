# 212 — More UV Grids

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 31 — 3D Environments: Modeling |
| **Bài học** | More UV Grids |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 9:59 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **More UV Grids** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- UV, materials, shading và texture workflow
- environment art, asset assembly và scene organization
- modeling, mesh editing và kiểm soát hình học

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




The next thing we wanted to do is that we just wanted to continue on UV unwrapping everything essentially.

I will select everything.

We don't, it doesn't have to be the same.

We have to have the UV grid added first.

So just separate this horizontally and make sure that we have a shader editor.

Then I'll hit ctrl T and I'll make sure that it shows, whoops, zoom in on that, I'll make

sure that it shows, not the image, the UV grid, no, not the UV grid as well, it should

be UV grid, there we go.

And yeah, we just do the same for, let's leave the bolts for now.

Just use a UV grid, cable box, ctrl T, and then just a UV grid that part, top, ctrl T,

and just selecting the UV grid, I believe we can still material, add material to curves.

So we'll just see if this works, and it does.

The only thing, however, is that you just can't UV unwrap it, so you will have to turn

it back into a curve.

We'll do the same.

I don't think I need to do anything with that part though.

Like it's going to be one color, the same for the bolts, the same maybe for the rails,

and these grills, that part here too.

Maybe this dish, maybe, sure, I'll hit ctrl T, and then add the UV grid, and by default

it's actually looking pretty good, I'll just have to only control the scale, this one is

just gone, it's not there.

So I'll just scale these, and maybe select the platforms first, I think it's about time

that we brighten this up a bit, just so we can see what we're doing, or maybe darken

it, actually, yeah, let's leave it darker.

So yeah, I'll just select these, go into edit mode, and then select platforms, and then

under that I can just hit U to unwrap, and you can see that we still have some issues,

so again, we can just try to smart UV project, hit okay, and this fixes it a little bit,

a little bit of the bounds, this is looking fine, so let's hide these, let's also hide

this structure, we will hide these too, let's actually bring this color back up, and let's

and then I think I'll just hide these, the bolts and the stairs can be hidden as well,

and now we're left with this bit, that cylinder, no, it's stretched from the side, again, you

saw here that you don't have to apply all the transforms every time, but it's something

that you might have to essentially scale to bounds, and this is looking fine, I should

have probably edited them both, so A, U, smart, okay, so that they both have the same scale,

I'll do the same here, hit A, U, smart UV, and then okay, I see a bit of stretching here,

I'll just try and turn on and off these, no, then I'll have to apply, and then apply all

light transforms, and then do the UV projection again, and this is a bit better, this could

be like down, this is a little better, I need it to align more than to like have that

shift, yeah, scale to bounds doesn't really help, U, Q projection, this works better,

let me just check on top, on bottom, and all sides, and then I can just hide these two,

and hide these two, I don't need to like really look into these, they can have just

one color, so the same for cables, and that part, maybe that part needs, this will too

have like its own color, this however, could have some UV projection corrected, let's unwrap

it first, and it unwraps pretty, pretty smoothly, no issues there, I'll just hide it, I'll do

the same for that one, I'll select all the parts here, that they have the same scale,

maybe the platform as well, so just select everything here, and that as well, make that

the active one, hit A, I forgot that guy, oh, it's instanced, that's fine, that's cool,

hot U, smart UV, scale to bounds, some issues, Q projection, I still have some issues, at least

the top part though, I think we'll go to outside of edit mode, apply all, so CTRL A and ALT to

apply all, some meshes are still instanced, so I'll just hit ALT, and then object data,

and then CTRL A again, and ALT to apply all, and now everything is applied, back in edit,

and then U, try unwrap, try smart UV reject, without scaling to bounds, and this is already

looking good, try however, scaling it to bounds, doesn't really help, Q projection, this is about

the best I can get there, I didn't hide these structures, everything else looks fine, I'll

just hit ALT H, and I now have my geometry, or at least like things ready to be textured,

so next step will be texturing this object, I think I might go back and copy some of like

the missing parts, I think it's that part, the thing is like it was copied without the

instance itself, and that has caused the issue of it being just an empty, or the collection that

is being instanced, it just can't really manipulate it or edit it at all, so yeah, I'll see you guys

on the next lesson, this was a short bit, go ahead and finish the UV unwrapping, again it

doesn't matter if things aren't scaled properly, because it will be scaled, I saw an issue here,

it will be scaled according to, like later on, according to how you actually scale things,

Q projection, that's better, you just have to pay attention that whatever is the same

in terms of material, just make sure they have the same scale all together,

but for now, I will see you guys on the next lesson.

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
