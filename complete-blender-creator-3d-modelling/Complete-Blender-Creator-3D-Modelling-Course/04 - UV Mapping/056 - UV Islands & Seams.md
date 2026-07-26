# 056 — UV Islands & Seams
In this lecture, we'll be breaking down what our seams and what are UV islands, and we'll begin making

a wooden barrel.

First of all, let's understand what seams are.

Let's think about a T-shirt.

It starts off as one single piece of cloth, much like our 2D textures.

The shapes are then cut out and stitched together to make a 3D t shirt.

And if you look at t shirts, they have seams where they are joined together.

This is exactly the same in a 3D program.

We have to mark seams on our 3D objects in order to show Glenda how we want our 2D textures to be positioned

on those 3D objects.

So with that in mind, here's where we got up to last time, and I'm still in the movie editing workspace

and my object is still in edit mode.

So I'm going to go back to object mode with TAB.

And just to quickly show you, if I zoom in to my object slightly and press s to scale in the Z, the

textures will stretch with the objects like this.

And if I make my object much taller and go back into edit mode and choose this face here, it's exactly

the same size as it was previously and square.

So changing the scale of the object will not affect your UVs, it will just stretch them.

And that's something that's important to understand and you'll get used to as you go along.

If you want to tall a building, then you will need to come into the movie editor, select your faces

and scale Y to make them fit the new scale.

But I'll undo that.

I'll go back into object mode to its original size.

There are in fact other ways of changing the UV maps so that they match the scale.

But we'll talk more about these things later on.

So let's talk a little bit more about how we can set up UV maps for different objects.

If I add a cylinder, so shift A to add mesh and then cylinder, I'm going to come down to the dialog

box at the bottom here and change the vertex count to 16 so there's less vertices and therefore less

UVs to have to move and adjust and press enter.

And I'll minimize this dialog box and just move this off to the side so we can see it.

I'll scale it down as well.

We can have a wooden barrel next to our building.

I'll just move that into position now.

I'll just go into front view and notice that my building is in the negative way.

So I'll select all and r, z one, a t so that it's all in the positive y.

Now, when I go to front view, I can position these on the floor.

That's in case you wanted to make a little scene in here.

Okay, so back into our barrel shape here, I'll just scale shift Z.

So it's a little bit thinner, something like this.

Okay.

So take a moment to catch up with me, add in a cylinder and change the vertices to 16 and you can place

them on the grid floor if you like, next to one another.

Pause the video and have a go at that.

Okay.

So with my barrel selected, let's come across to the object data properties, look at the, um, maps

and we can see there's a U.V. map there.

So if I go into edit mode, we can see our UV map.

Currently it's against my very stretched image.

So the UV map is actually very stretched.

I'm just going to come across my top panel here.

Incidentally, I use the middle mouse button to do that and close the texture down and then zoom in

and we can see our very nice UV map of a cylinder.

I'll bring the panel back to the far left and we've got our vertices edges and faces.

Now, what I didn't mention before is that we've also got islands.

If I click that, I can click on what are known as the islands.

An island is a group of faces on your object that are joined together, but they're separate from the

other faces or the other islands, as you can see there.

So this object has three islands.

I'll undo that scaling.

Now the outside edges of the island are known as seams.

So if I had a new material for this cylinder and I'll just make my shader editor bigger so you can see

it nice and easily and zoom into my cylinder slightly now with the node wrangler installed.

Remember that's edit preferences, add ons, type in node and make sure your node wrangler is ticked.

I can click on the principal SDF and press control t to bring up these three nodes.

So that's an image texture, a mapping node and a text coordinates.

So you can see at the moment my cylinder has gone all black.

That's because we haven't got an image texture in here.

I'm going to click on the image texture and again with the node wrangler I can press shift sx to switch

this texture to a different texture.

This is the same as deleting it and then adding a new one in.

But shift sx is a little bit faster.

So I'll choose a musgrove texture because we can easily see the shapes on our object.

So currently the default is using the UV mapping method and you should be able to see the seams around

the top here.

So that's one island there.

Let's click on that and press G to grab to move it around.

Hope that's the bottom one.

I'll click the top one here.

So grab and move that around and you can clearly see those seams around the top.

So that's where the textures hit each other and make a sharp line the same if I select all the middle.

So this is the faces going all the way around the object g to grab.

And again we can see the seam at the top, but we can also hopefully you can see a seam coming down

the side here.

So if I press G to grab, you can see a sharp line where the seam joins.

So this has been unwrapped much like a label around a tin of food.

So I'll undo that movement.

So pause the video here, add in the material for your cylinder and bring in your three nodes by clicking

on the principal SDF and press control.

T Switch the image texture to a musgrove texture and just move the UV islands to see the effect that

has.

Make sure you undo any movement before you carry on though.

Pause the video and have a go at that.

Now, just to remind you that these textures here are procedural.

And when we use something like the generated texture coordinates, if I plug that in, you can see that

we can't see any seams on our objects.

So these corners here and this line down here don't seem to make any difference.

So the generator can be very useful with procedural textures so that you don't get any seams.

However, using UV texture coordinates is more common because you can transfer that between different

programs.

So go from blender to a game engines such as unity or unreal, and you can use any texture that you

find.

In our case, we're going to use some wood for our barrel now in order to see these themes.

If I zoom out just a touch, select all my UVs and come up to UV.

And if I go to the seam section and click on seams from Island, you can suddenly see these orange ready

lines going around the edges of my islands.

So we can clearly see that seam down the middle of this big island here.

And I'll just go around the object to show you that this is the only seam.

So we've got this big kind of label around the middle there and the top and bottom, and you can see

those seams marked out.

So pause the video here, select all your UVs and under the UV menu.

Use the tool seams from island to show your seams, pause the video and have a go at that.

Now what I want to show you is how you can create your own UV map and not just use the generated map

that's created here.

Because when we start creating more complex objects, we won't have a map to rely on and we'll have

to create our own.

So if I delete this map in the object data properties under the maps and use the minus button that clears

my UVs and because Blender doesn't know where to put the image, it's made it all black.

Now to create my own UVs, I can press you to unwrap and unwrap and you can see those jobs being created

there, but they look slightly different.

And we've got an error message at the bottom here, which is object has non-uniform scale.

So Blender has taken into account the scale of this object and created the UVs accordingly.

If I go back into object mode now with TAB press control A to apply the scale, then back into edit

mode with everything selected press you and unwrap.

You can see that it's come out slightly differently now.

It's still not quite the same as the UVs we had before, but that's because we had re scaled this object

with a different height to width.

So the UVs represent that correctly.

So pause the video, catch up with me and delete the UV map that's currently on the object and create

a new one.

Do you remember to apply your scale?

Pause the video and have a go at that.

Okay.

So hopefully your understanding seems a little bit more.

What I want you to do next is add the monkey object, make sure you go back into object mode for that,

then go into edit mode and have a look at the UV islands.

Then with all the you've selected, go into the menu and Mark seems from islands.

Delete the current map.

And recreate it by pressing you to unwrap and then choosing unwrap.

Pause the video and have a go with that.

Okay.

So I'll need to go into object mode.

Zoom out just a touch shift data, add mesh and then monkey.

I'll just move that across to the side slightly and I'll scale it down so we can zoom in and have it

next to our barrel just here.

I'll go into edit mode and you can see the UVs mapped out here.

So if I select all, I can come up to the UAV menu and choose scenes from islands and there you can

see those orange lines marking out the islands and you can see a rather unusual UV map of how it's split

it up and flattened it out.

I can come across to my UV map now and delete that.

Make sure all the faces are selected on my monkey.

Press you to unwrap and then unwrap and we can see a very similar unwrap here.

But interestingly, once again, it's not exactly the same as the original UV map for that monkey,

but it does have the same islands.

So with islands selected, you can see those different islands for the ears here, the eyes and the

rest of the face.

So hopefully you got an okay with that and you're beginning to understand UV mapping.

Don't panic if it's not all making sense yet.

The more we create UVs and play with the UVs, the more you'll begin to understand them.

So do make sure you've saved your work.

Ready for next time.
| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | UV Islands & Seams |
| **Thời lượng** | 10:06 |
| **Chủ đề chính** | UV Island và Seam |

## 1. Mục tiêu bài học
- Hiểu khái niệm seam và vai trò của nó trong việc "cắt" mesh trước khi unwrap.
- Hiểu khái niệm UV island — nhóm các face liền kề không bị seam chia cắt.
- Biết cách đánh dấu và xóa seam bằng Ctrl+E.
- Biết cách chọn cạnh (edge loop, edge ring) hợp lý để đặt seam sao cho UV ít méo và dễ texturing.

## 2. Nội dung chính
**Seam** là các cạnh (edge) được đánh dấu để báo cho Blender biết "hãy cắt mesh tại đây" khi thực hiện Unwrap, giống như việc cắt một hộp giấy dọc theo các cạnh để trải phẳng nó ra. Seam được đánh dấu qua menu Edge (`Ctrl+E → Mark Seam`) sau khi chọn các cạnh mong muốn ở Edit Mode, và hiển thị màu đỏ trên mesh.

**UV island** là một nhóm các face liền kề nhau, không bị ngăn cách bởi seam, được unwrap thành một mảnh liền trong UV space. Một mesh phức tạp thường được chia thành nhiều island: mỗi island cần đủ lớn để chứa chi tiết texture, nhưng cũng cần được sắp xếp (pack) gọn gàng để tận dụng không gian UV 0–1.

Nguyên tắc chọn seam:
- Đặt seam ở những vị trí ít bị nhìn thấy hoặc đường nét tự nhiên của mô hình (ví dụ theo cạnh dưới, đường viền, khe nối).
- Seam nên chia mesh thành các island có hình dạng gần phẳng để giảm méo (distortion) khi unwrap.
- Tránh tạo quá nhiều seam nhỏ lẻ — sẽ sinh ra nhiều island rời rạc, khó quản lý và dễ lộ đường nối texture.

Sau khi đánh seam, bật **Live Unwrap** (trong menu UV) giúp xem UV cập nhật theo thời gian thực khi seam hoặc mesh thay đổi, rất hữu ích khi tinh chỉnh.

## 3. Quy trình thực hành gợi ý
1. Chọn một mesh có hình dạng phức tạp hơn khối cơ bản (ví dụ mesh dạng hộp có bo góc).
2. Chuyển sang Edge Select Mode (`2`), chọn các cạnh dự định làm seam theo nguyên tắc "ít lộ, dễ trải phẳng".
3. Đánh seam bằng `Ctrl+E → Mark Seam`.
4. Chọn toàn bộ mesh (`A`), nhấn `U → Unwrap` để xem island được tạo ra.
5. Bật Live Unwrap, thử thêm/bớt seam và quan sát UV island thay đổi trực tiếp trong UV Editor.
6. Dùng checker texture để kiểm tra độ méo của từng island; điều chỉnh seam nếu island bị kéo dãn nhiều.
7. Nếu cần bỏ seam, chọn lại các cạnh đó và dùng `Ctrl+E → Clear Seam`.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+E` | Mở Edge menu (Mark Seam, Clear Seam...) |
| `2` | Chuyển sang Edge Select Mode |
| `Alt+Click` (trên cạnh) | Chọn edge loop nhanh |
| `Ctrl+Alt+Click` | Chọn edge ring |
| `U` | Mở menu Unwrap sau khi đã đánh seam |
| `A` / `Alt+A` | Chọn tất cả / bỏ chọn tất cả |

## 5. Lưu ý & lỗi thường gặp
- Quên chọn toàn bộ mesh trước khi Unwrap khiến chỉ một phần mesh được unwrap lại.
- Đặt seam giữa các mặt lớn liền mạch khiến texture bị chia cắt không cần thiết, lộ đường nối rõ ràng.
- Không kiểm tra Live Unwrap/checker texture nên không phát hiện được island bị méo cho đến khi texture thật đã áp.
- Đặt seam quá ít khiến mesh dạng cong (như hình trụ) bị kéo dãn nghiêm trọng khi trải phẳng.

## 6. Checklist thực hành
- [ ] Đã hiểu và phân biệt được khái niệm seam và UV island.
- [ ] Đã thực hành đánh dấu và xóa seam bằng Ctrl+E.
- [ ] Đã bật Live Unwrap và quan sát UV thay đổi theo seam.
- [ ] Đã kiểm tra độ méo UV bằng checker texture và điều chỉnh lại seam nếu cần.

## 7. Tóm tắt
Seam và UV island là hai khái niệm cốt lõi của UV mapping: seam xác định nơi mesh bị "cắt", còn island là kết quả của quá trình cắt đó. Đặt seam hợp lý giúp UV ít méo, dễ texturing và ẩn đường nối một cách tự nhiên — kỹ năng này sẽ được áp dụng ngay ở bài tiếp theo với mô hình thùng gỗ.
