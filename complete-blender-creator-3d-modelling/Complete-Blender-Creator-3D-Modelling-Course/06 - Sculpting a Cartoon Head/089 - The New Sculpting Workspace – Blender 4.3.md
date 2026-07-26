# 089 — The New Sculpting Workspace – Blender 4.3
This is a quick video to show you the updates that have been made to blender 4.3 and onwards in the

sculpting workspace.

Make sure you refer back to this video if you're stuck about the new interface.

So I'm in blender 4.3 and if I go across to the sculpting workspace, you'll see that it looks quite

different from any previous version 4.2 and below.

And the main difference is that we've got our brushes across the bottom here instead of down the side

here.

The reason they're on the bottom is because the brushes are now assets, and this is the asset shelf

it's known as.

This is good because it means we can import brushes easily and we can create our own, which we can

easily save and reuse.

I'll show you a little what that looks like, and I'll give you a very brief introduction to sculpting

with in blender.

Don't panic if it's not making a lot of sense, as we'll go into more detail with these tools in later

lectures.

But currently I can't sculpt on my default cube because sculpting only affects the vertices.

So these points and you can see if I sculpt, I can just about move that vertex there.

What we need to do is add is add vertices to this, and we use the Remesh option for that.

Generally, if I click on the remesh, we've got voxel size, which is the size of the faces it's going

to create, and then the Remesh button at the bottom here.

Those are the two very important things.

So the voxel size is 0.1.

And if I press the Remesh button you can't see anything happen.

But if I start to draw you can see that I've actually got some vertices here to play with.

And if I go into edit mode you can see the vertices it's created.

So back to sculpt mode.

The shortcut keys are R to show the voxel size.

And I can move my mouse from side to side and maybe go to something like 0.03.

And then control R is to Remesh.

So R to set the size and control R to Remesh.

And just quickly my radius and strength are up here.

That's the F key to resize and shift f is to change the strength.

I'll right click to cancel that though.

And if I hold down shift, I can smooth out any strokes I've made.

So with the brushes down the bottom here, you can use your wheel to scroll through this menu.

And you can see I've got four rows here.

You can also change the Change the display settings with this button here, and maybe a size of 32 would

make more sense, because I can see a few more brushes and I can bring out this window slightly like

so.

If I want to see all my brushes, I think two rows is about right and I can use my wheel to get to other

brushes.

You can also display the names as well.

I've got a slightly oversized interface, so you can't read the names very easily, but you'll probably

be able to see them on your resolution.

You can actually select by groups as well, like so it's probably easier to have all on whilst you're

learning though.

Now there are a couple of new brushes, however, all the old brushes are still there that we use within

the course, so you should have no trouble continuing from this point.

I will quickly show you how you can save a brush that you've created.

Again, don't worry if what I'm going to go through is a little bit advanced.

We'll learn more about making brushes later, but you can always refer back to this lecture for how

to save them if you want to save the brushes.

So most brushes are created from the draw brush.

And that's our default brush there.

If I right click and duplicate asset Dataset.

I can now label this something like ROC two.

I've already created a previous one, so I'll save that.

And you can see there's my ROC two and there's my other ROC brush just there.

I can relabel this other ROC brush.

If I select that I can actually change the name here.

So I'll call this ROC one.

And when I hover over the brush you can see it hasn't changed.

I need to right click Save Changes to asset and you can see that it's now called ROC one.

And I'll quickly show you my ROC one brush just there.

We probably need a bit more detail on my cube.

So that's where we can go up to the remesh option and change the voxel size here.

Or I can press R on my keyboard and bring that down a bit further to something like 0.15 ish.

Somewhere around there, left click and then Ctrl R to Remesh I'll smooth this out a little bit and

then I'll use my ROC brush again.

You can see that detail coming through there.

So let's go to my ROC two brush and make those changes.

I'll go down to the texture slot here.

Create a new texture.

We can't actually change the texture in here.

We have to go to the texture properties.

And in there we open up our image and I'll go to my brushes folder and find one of my brush alphas.

So something like this.

Rock for one here, open up the image.

Go back to my active tool and workspace settings just here.

And you can see this image pop in just there.

I'll scroll down a bit further and change the stroke method to anchored.

That way I can click and drag to bring out the rock like so.

And now I've got myself a second rock brush in my asset folder, and I can create a really interesting

piece of rock just here.

The great thing about this is if I right click on this save changes to asset.

This is all now saved in my asset folder.

So if I create a new file and I'll just go straight to a sculpting workspace this time, I don't need

to save this file at all.

You'll see that my two rock brushes are there, and if I go to Rock two and click and drag, you can

see it's got that rock brush for me there.

Okay, so that's the new sculpting workspace in blender.

And you should be able to continue on comfortably from here.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Sculpting a Cartoon Head |
| **Bài học** | The New Sculpting Workspace – Blender 4.3 |
| **Thời lượng** | 4:54 |
| **Chủ đề chính** | Không gian Sculpting mới |

## 1. Mục tiêu bài học

- Làm quen với tab Sculpting trong workspace của Blender 4.3.
- Hiểu vai trò của các thành phần chính: thanh công cụ brush bên trái, panel Tool Settings, header với các tùy chọn Symmetry, Remesh, Dyntopo.
- Biết cách tùy chỉnh không gian làm việc để sculpt hiệu quả (chia viewport, bật Wireframe/Matcap...).
- Hiểu sự khác biệt giữa chế độ Sculpt Mode và Object Mode/Edit Mode.

## 2. Nội dung chính

Blender 4.3 tổ chức không gian Sculpting Workspace gồm:

- **Toolbar bên trái**: chứa các brush sculpt (Draw, Clay Strips, Crease, Grab, Smooth, Inflate, Mask...), có thể mở rộng bằng phím `T`.
- **Header trên cùng**: chọn chế độ hiển thị (Solid, Matcap, Rendered), tùy chọn Symmetry (X/Y/Z), nút bật Dyntopo, và Remesh.
- **Tool Settings (đầu viewport)**: điều chỉnh Radius, Strength, Falloff của brush đang chọn.
- **Properties Editor bên phải**: tab Modifier (Multiresolution), tab Object Data (thông tin mesh), tab Texture (dùng cho các brush có texture/alpha).
- **Panel N (Sidebar)**: có tab Tool chứa thiết lập chi tiết của brush hiện tại, và tab Item chứa transform của object.

Sculpt Mode trong Blender hoạt động trên mesh dựa trên hai cơ chế chính để tăng độ phân giải khi cần chi tiết: **Multiresolution Modifier** (tạo các cấp độ subdivision có thể chuyển đổi qua lại, phù hợp bake normal map) và **Dyntopo — Dynamic Topology** (tự động tạo lưới tam giác mới ngay dưới đầu brush khi sculpt, phù hợp cho giai đoạn phác thảo tự do không cần quan tâm topology).

## 3. Quy trình thực hành gợi ý

- Chuyển sang tab **Sculpting** trên thanh workspace phía trên cùng Blender.
- Thử bật/tắt Wireframe (`Shift+Z`) để quan sát mật độ lưới khi sculpt.
- Mở panel N (`N`) để xem tab Tool và Item.
- Thử chuyển đổi giữa các chế độ shading (Solid/Matcap) bằng phím `Z` (pie menu) để chọn kiểu hiển thị dễ quan sát khối khi sculpt.
- Kiểm tra Symmetry ở header, bật trục X để sculpt đối xứng hai bên đầu.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `T` | Ẩn/hiện Toolbar brush bên trái |
| `N` | Ẩn/hiện Sidebar (Tool/Item) |
| `Shift+Z` | Chuyển đổi Wireframe/Solid |
| `Z` | Pie menu chuyển shading (Solid, Matcap, Rendered...) |
| `X` | Bật/tắt Symmetry theo trục X |
| `F` | Thay đổi nhanh Radius của brush (kéo chuột) |
| `Shift+F` | Thay đổi nhanh Strength của brush |

## 5. Lưu ý & lỗi thường gặp

- Nhầm lẫn giữa Multiresolution và Dyntopo: hai cơ chế không dùng đồng thời tốt, nên chọn một trong hai tùy giai đoạn dự án.
- Quên bật Symmetry khiến việc sculpt khuôn mặt bị lệch hai bên.
- Không chú ý đến Matcap phù hợp khiến khó nhìn rõ khối khi sculpt (nên chọn matcap có bóng đổ rõ, ví dụ dạng đất sét/clay).

## 6. Checklist thực hành

- [ ] Đã mở được tab Sculpting và nhận diện đầy đủ các vùng giao diện.
- [ ] Đã thử chuyển đổi Solid/Matcap bằng phím Z.
- [ ] Đã bật thử Symmetry trục X.
- [ ] Đã mở panel N và xem tab Tool.

## 7. Tóm tắt

Bài học giới thiệu bố cục workspace Sculpting trong Blender 4.3, các vùng giao diện quan trọng và hai cơ chế tăng chi tiết mesh (Multiresolution, Dyntopo) sẽ được dùng xuyên suốt module.
