# 048 — Bridge Edge Loops

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 10 — Basics: Mesh Editing Operations II |
| **Bài học** | Bridge Edge Loops |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 14:30 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Bridge Edge Loops** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- modeling, mesh editing và kiểm soát hình học
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


Okay, so there are just a few more mesh editing tools that I want to cover, but these tools are

not going to be accessed from the toolbar that appears on the left-hand side of the viewport

when we are in edit mode. So let's quickly get into these. So I'm just going to add a circle

object to an empty blender scene. The default, I believe, is 32 vertices. And a circle object,

of course, is just 32 vertices with edges drawn between them and no face to fill it.

So let's duplicate this in edit mode, shift D and Z, and pull it up. And now,

say I wanted to connect these two with a ring of faces around the outer edge. Now,

we discussed how to do this with the fill operator. We can do this by selecting four

points, pressing F to create a quad. And now if we just select one edge of the quad on either

side, we can press or hold F to fill all the way around. Now, there is just a little bit quicker

way to do this. Just Ctrl Z to undo out of that. So I am going to use the bridge edge loops tool

to perform that same operation in one step, essentially. So I'm going to Alt click to

select the bottom ring, Shift Alt click to select the top. And now in edge select mode,

or by accessing the edge menu up here, I'm going to right click, and I'm going to select bridge

edge loops. So this will quickly fill the gap between those loops. Bridge edge loops works

on partial loop selections as well as full loop selections. Just make the selection of the area

you want to bridge. You can right click in edge select mode and select bridge edge loops. Now,

there are a number of advanced options which we can look at here. We do not have to draw new faces

between these. We can also use this to merge entire edge loops. So in edge select mode,

we can right click, press bridge edge loops. And now if we click the merge option, all that will

do is collapse our two edge loops down into a single edge loop, which would leave us in this

case with just one circle. There's some other options here for how to affect this. We can twist

this edge loop. We can twist this face loop by coming here and selecting twist. This will

basically shift which vertex is drawn to which point. What I mean by that is it will shift over,

so in the past without any twist on this, if it found a point here and a point directly beneath

it, it's just going to draw this line straight. But with twist enabled, it's just going to shift

that over by one, so it is now drawing it over on this point. We continue with more extreme twists

as we increase and less as we decrease. Number of cuts will add edge loops in between it.

And smoothness will adjust those edge loops. Now it's important to note that these edge loops

need to be roughly aligned and they need to have roughly the same number of vertices in order for

bridge edge loops to work. However, it does not need to be exact. So if I rotate one of these a

little bit and then select the other one, come up to edge, say bridge edge loops, you can see

that Blender was able to bridge those edge loops despite them not being perfectly aligned. Now it

will also be able to bridge the edge loops even if the number of vertices isn't exactly the same.

Now it can't be wildly different. You can't have 32 down here and like three up here. That won't

work. But let's just remove one of these points. So let's just select one point. Let's hit X and

let's dissolve the vertex. So that's maintained this edge here, but the point in between it is

just gone. So now this circle has 32 points. And this circle has 31. So now if we select both,

and bridge the edge loops, you'll see it is still able to bridge them, but it can only bridge them

with triangles because the number of vertices is not exactly the same. Now we can bridge faces as

well as edge loops. I'm just going to delete these faces to demonstrate. So if we select a face loop

up here and another face loop down here, we can right click in face select mode and come down

to bridge faces. And that will draw another loop of faces in between them. And we basically have

the same exact options here. We can merge them instead. We can twist it. We can cut it. We can

smooth it out to change the shape. All sorts of options. Okay, so that is all I wanted to talk

about for bridge edges and bridge faces, but we are not quite done with our advanced mesh tools.

So the last thing I want to look at are loop tools. And loop tools can be accessed in edit

mode by right clicking, and they should appear at the very top of the context menu. If you right

click and you are not seeing this, this is because the loop tools add-on has not been enabled for you.

So just a brief review, we enabled this add-on at the beginning of the course by coming into edit

and preferences. We came into the add-ons tab in the sidebar here, and you can find it either by

scrolling down this list and looking, or you can in the search bar up here, just search loop tools,

and it should appear right here. So just make sure that this checkbox is enabled.

You can save preferences by coming down to this menu and clicking save. And now when you right

click you should have the loop tools option here. Now loop tools is a very expansive tool. There's

all these functions, and all of these functions have multiple sub functions sort of, but we're

only going to go over a few of them. So the first one we're going to go over is bridge.

Now we just talked about bridge in the bridge faces and bridge edge loops menu, which is also

accessible in the context menu, but this is going to run sort of a different operation

if you use the bridge that is through loop tools. So let's just delete these faces really quick.

So if we select an edge loop, and we select another edge loop, and now when we right click

instead of bridge edge loops here, we're going to come into loop tools, bridge,

well you'll see it's just done exactly the same thing.

And if we do it in face mode, bridge,

it actually works a little bit less accurately than our other tools. But there's other things

that bridge can do. If you, for example, make a selection of a group of faces on a mesh,

and you right click, go into loop tools, and select bridge,

it will actually just cut a hole in that mesh for you.

Bridge will work on a partial edge loop as well as a full edge loop, just the same

as the bridge edge loop tool here.

So you can experiment with bridge and see what it does in different

selection modes with different types of selections enabled. But that is the bridge loop tool.

I'm going to control Z, actually I'm just going to delete that sphere and get a clean one.

So the next one we're going to talk about is the circle tool. And the circle tool is really

interesting because if you select a single point on your mesh, right click, and select circle,

it will transform the points around it to be in a circle around the point that you had selected,

or as close as it can get to a circle based on the resolution of your mesh.

So obviously if I had more points making up the sphere, the circle would be smoother.

The other thing that circle can do,

let's squish this in. Say we had something that was not a circle, we could select an edge loop,

right click, loop tools, and circle, and it would make that selected loop a perfect circle.

So you cannot have every point selected and run this because it gets confused by these vertical

edges. But let's say you had something like this and you wanted it to be a sphere.

Well, you could select all of the loops running this way.

So, right click, loop tools, circle, and it would make those all into a circle for you.

Now, this is still an oval because it is still being stretched on the z-axis because we didn't

select these ones. We didn't want those ones to be circles anyway. But let's say we had a circle

because it is still being stretched on the z-axis because we didn't select these ones.

We didn't want those ones to be circles anyway. But

the same principle applies. You could select all the way around on these ones.

Oh, that got kind of wild. But I believe it got confused because this comes up to a single point.

But if you were to select them sort of individually and run circle,

you could make these all circular again. Alright, so the next one we're going to cover

briefly is curve. So, for curve, let's select two points on the same edge loop,

right click, loop tools, curve. So, now what this has done is it's sort of cut in a curved shape.

It hasn't added any geometry. It has just transformed the geometry that is there to

manipulate the shape into this type of curve. And you can change the shape of this curve in

the curve menu settings. You know, you can change the interpolation from cubic

to linear and you'll get a much sharper cut here. But that is how you can do shapes such as this.

Now, the last loop tool I want to cover is flatten. And flatten is going to do exactly

what it sounds like. If we make a selection, go into loop tools by right clicking and click

flatten, it's just going to flatten that out for you. Now, it's looking at it from the Z,

now it's looking at it from the Z, so this edge is much thinner because

the angle at which it was looking down at it at made that lip much thinner. I don't know if that's

the best way to explain it, but because this is at more of a glancing angle on the sphere,

the flattened edge is thinner, whereas this is at much less of a glancing angle from the top view,

so it has a wider edge. So that is all I want to talk about for the advanced

modeling tools. And we're going to get into practical use cases for all of these in the

next video, which I think will give you a better idea of how they would be used. So

I will see you in that next video.

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
