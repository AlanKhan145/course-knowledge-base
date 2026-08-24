# 059 — Sculpt an Organic Form Pt. 2 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 12 — Basics: Methods of Subdivision for Sculpting |
| **Bài học** | Sculpt an Organic Form Pt. 2 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 19:31 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Sculpt an Organic Form Pt. 2 DEMO** trong pipeline của section.
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


Okay, so say you were happy with this shape and off-camera I just went ahead

and tweaked this a little bit further. I didn't do anything that we didn't cover

in the recorded parts, I just continued to grab and smooth and inflate around

until I had something that looks roughly the way I want it. So to wrap up this

demo you can you can be as detailed as you like but I do want to touch on

surface texturing just because we created this model with the dynamic

topology option in Blender and that has allowed us a lot of flexibility for

creating a interesting silhouette but it actually kind of restricts our ability

to get finer details in here. You certainly can sculpt in things like bark

with dynamic topology on but I personally like to do those types of

surface textures using the multi-res modifier. So let's take a look at how we

can get this model from the dynamic topology to the multi-resolution

modifier and that way we can you know switch between both and utilize both to

our advantage. So right now this is our model I have just come out of sculpt

mode I haven't done anything to it so you'll see that as a result of the

dynamic topology we have some less dense areas here some very dense areas over

here is not really even all the way around and it is all in triangles which

this will cause an issue for our multi-res because it will not be able to

subdivide evenly. So let's come back into sculpt mode on this object really quick

and let's come out to our remesh options at the top here and let's just see what

happens when we remesh at a the default voxel size of 0.1. Okay so nothing

really appears to have changed on the screen but if we go into edit mode now

we'll see that our mesh is a much lower resolution and it has these smoothed out

largely quadrilateral faces. There are some areas where you know the smoothness

doesn't retain all the way around but it is a lot smoother than it was. So what we

can do from this point is go back into sculpt mode and let's add a multi-res

modifier. We can subdivide it maybe twice and you'll notice that these

subdivisions get longer and longer to calculate as you up-res. That is just a

performance hit that you are taking from having so many points on a single mesh.

Okay so now that we have our multi-res modifier set up we can just start

sculpting as we were before. So let's grab the clay strips brush and I'm just

going to gently brush down the side of the tree here to create a sort of bark like texture.

Okay so now we have the beginnings of a sort of a bark texture on at least this

portion of our trunk. So now because we have the multi-res modifier set up we

can come down and turn down our sculpt level preview and now if we see any

parts of the shape that are not working for us like this part right here I do

not like I need to change the shape of this. Now if I just come down to zero in

the sculpt I can come in here and make whatever edits I need to make without

worrying about negatively affecting that nice bark surface texture I just drew on.

Let me come in here and just quickly adjust this.

Okay so say that I like that a lot better. So now just to get that bark

texture back all I have to do is up res using these arrows and you'll see it's

painted perfectly over it even over the spot that I edit it.

I'm just inflating to grab out that part where the mesh got a little pinched. I can

smooth just the end to taper it. Grabbing and adjusting. So unfortunately

the remeshing process isn't a hundred percent accurate. When you get to these

smaller portions of your mesh like up here you may see that you have errors

and that is you know from the remeshing process so you just have to come in here

and smooth these out.

So I'm just going to grab my clay strips once again and with a little

light pen pressure I'm just coming in and drawing strokes along these branches

to sort of suggest the grain of the wood.

And then when you get up to really thin pieces like this you might get sort of

errors where your brush is pulling in the points from the other side so you

just need to adjust your brush size or mask that back face. So yeah it'll pull in

like this if your brush size is too large and your mesh is too thin. You can

come in and smooth it to fix it. Your smooth is basically your eraser tool for

sculpting. And then you can just redraw over it maybe inflate these so they

don't get caught on each other quite so much. And then you can continue texturing

with your clay strips.

So there again I was too zoomed out and the mesh was too thin and it just caught

some of those back faces and pulled them all the way through. It is just sort

of the nature of the program and that error is present even in other 3d

sculpting programs.

It never hurts to when you're working on these thinner sections just make sure

that every so often every few strokes or so you're checking that back face to

making to make sure it didn't get caught so you don't have to undo through a bunch of work.

Just briefly driving down to the zero subdivision level to fix

some of the shapes here.

And then coming back up to the highest subdivision level to continue the surface.

And then I can already tell that this section is going to give me some

problems because of how thin and pinched it is. I'm just going to jump straight into

the inflate tool and try to inflate and smooth it out so it is not quite so distorted.

Also notice that when I use the grab tool in the higher subdivision level

it's also just harder to grab smooth shapes. You get a lot of these sort of

bumps and that's just because the topology is so dense right there that

you're just you're not grabbing enough of it really. So larger scale changes

you always want to drop down a subdivision or two just so you can avoid

this really lumpy sort of look. I mean unless you're going for a sort of you

know old and gnarled tree and then you might want it to be lumpy.

So for this I'm actually going to grab the fill tool because it's just gotten

really extreme with these sort of peaks and valleys here and I want it to

be a little bit smoothed out and doesn't seem to be able to accomplish that with

the smooth tool I've been trying to use. So we're going to get the fill tool in

here and when you get things like this it's just sort of an artifact of hopping

between subdivision levels and making changes on especially on like smaller

portions of the mesh. So don't don't worry too much about it you can fix it

usually just by holding shift and smoothing it out.

And it may be the case that we just don't have enough geometry here to

really get this perfectly smooth and that's okay it's it's an organic form

anyway and it does not need to be smooth in this case. No one's really going to

question if you know a branch sticking out of a tree is a little gnarled and I

just don't think it is worth the resolution increase to the rest of the

mesh at this point so we can we can leave it.

Just holding ctrl and drawing with the clay strips to get an inset instead of

an out. Okay I got some artifacts right here just inflate and smooth and inflate

and smooth and alternate between those two until it is fixed. So obviously you

can continue with this surface all the way up through the branches if you like

or you know you could add sort of clusters of branches and get as detailed

as you like with this and if you want to sort of finalize all these sculptural

changes you can do so by applying the multi-res modifier if you have one

which again is applied the same way that you would apply any other modifier and

now all of these changes including the bark texture are part of the mesh. So

again you could spend a lot more time on this and make it you know exactly how

you want it but just want to take a moment to appreciate how far we have

come already and you know we started out this course by making a tree and

we've made a tree again here now and it has just come so far as far as detail

and what we are able to accomplish with it. I mean if we want to compare them we

can go to file and append and we just have to navigate if you saved that file

we just need to navigate to where it was saved and then find that .blend

file in the file browser and it should open up all these sort of file folders

that are within your .blend file. You just want to go to object and this is

another reason why you want to name things you can easily find our one of

our tree objects and append it into blender. Let's come in over here because

that was its location in the world in our first demo video where we built out

the city street. So let's just scale this up so we can they're roughly the same

size and we can compare look the difference just between a few videos we

can get from something as simplistic as this to something as complex as this so

just take a moment to appreciate that for yourself and in the next video we're

going to continue on with even more advanced sculpting and we're going to

learn how to sculpt with symmetry which will allow us to create characters faces etc.

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
