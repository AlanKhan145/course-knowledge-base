# 058 — Sculpt an Organic Form Pt. 1 DEMO

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 12 — Basics: Methods of Subdivision for Sculpting |
| **Bài học** | Sculpt an Organic Form Pt. 1 DEMO |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 43:06 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Sculpt an Organic Form Pt. 1 DEMO** trong pipeline của section.
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


Right, so let's get started with a demo of sculpting. And I know I went over a

lot of the brushes and things very briefly in the previous videos, but that

is because sculpting is really kind of a learn-by-doing process. So hopefully

these demonstrations will give you a better idea of how to use those tools. So

sculpting I think is best used for organic forms. We're going to talk about

symmetry in the next set of videos, but for now we're going to sculpt something

that is that is organic but asymmetrical. So I think we should sculpt a tree. And

we've done a couple trees in this course, but they're a good thing to practice on

and you know they're everywhere, so you you will probably need to know at some

point how to create a tree. Especially if you want to go into environments or

backgrounds for animation or anything like that. It's not a bad skill to have.

So all I'm doing here is creating the basis for our sculpt. And I've just, I'm

in a modeling tab right now, I've just added a cylinder to our viewport and

just scaling it to create the starts of a trunk. Now it really depends if you

plan on using dynamic topology or a multi-resolution modifier how you need

to prep this sculpt. Now if we're going to use dynamic topology we don't need to

do much to this at all because all of our subdivisions will be sort of created

in real time. But that being said, the multi-resolution modifier can only work

based off of existing geometry. So if you want to use the multi-resolution

modifier, if you have a shape that is stretched like this and you subdivide it,

well it is still going to be stretched. And not to mention you'll get some other

strange errors with this because it is subdividing it as evenly as it can based

on the geometry. And since this is just a flat face, it doesn't really know what

to do with it. So to prep a model for use with the multi-resolution modifier,

we want to make sure that all of the geometry are quadrilateral faces so that they divide

evenly. And we want to make sure that all the faces are relatively the same size.

Otherwise we might end up with areas that are much denser than others which we may not

necessarily want. So the first thing I'm going to do is get rid of these n-gon caps.

And we discussed briefly what an n-gon is in the modeling section of the course.

And it's basically any face that has more than four sides. Now we do not have to do this

manually because when we add a new cylinder into our scene, if we come down here to the

add cylinder menu, we can look at cap fill type and by default it is set to n-gon.

But there are a couple other options. We can set it to nothing to leave these faces open.

Or we can set it to triangle fan, which appears in object mode as the same thing as an n-gon.

But if we tab into edit mode, let's just hide this one for a moment,

if we tab into edit mode, you'll see that all of these points around the circle here

have been drawn in to a single center point creating a triangle fan.

Now what happens if we subdivide something like this with a multi-res modifier? Well,

let's find out. Let's add a modifier of multi-res. Let's subdivide it.

Well, that's a little better, but we still are getting some strange pulling and some sharp angles

here at the top. So we need to make these faces quadrilateral. And unfortunately, the only way I

know of to do that in Blender with this type of object is manually. So we can leave the faces

where they are, but we need to start joining some of these points together to form quads here.

I'm just using the J key to join them, which splits the faces.

I'm going to join them to about up to here, because once you start

getting these faces very, very narrow, you're going to run into some subdivision

and shading issues. So we may need to connect some of those, but let's keep them

as wide as we can.

Actually, yes, let's join them because I don't think that's going to be an issue.

So now we just need to join them going vertically.

Again, just shift clicking on these points and hitting J to join.

Sorry, just trying to best think about how to subdivide this mesh so we will have the

least amount of errors.

So that's all right, but there are triangles around this edge here

that are causing some issues when we subdivide. So let's try a different tactic.

Oops, I just accidentally pressed the H key there and hit it.

Let's go into sculpting mode.

And I was not planning on covering this, but I think it actually is important. We need

to look at this remesh option. So what remesh is going to do is look at your mesh and try

to basically recreate the same shape using all clotted geometry. So I'm going to add

some edge loops here that make these faces roughly square. They do not have to be exact.

And now I'm going to come into sculpt mode. I'm going to press remesh. And here where

it says voxel size, I'm going to take this eyedropper and just click on my mesh

where I added those. So it is a voxel size of 0.1561 meters.

So let's just see what happens when we remesh this object. Okay, so it has looked at the size

of these faces that I selected with my eyedropper. And it has tried its best to maintain the shape

of the cylinder using an even subdivision of quads across this whole mesh. So it's done

a fairly good job considering we had quite a large voxel size. And for the purposes of

sculpting a tree, we do not need this to be such a perfect cylinder. So that is one method of

subdividing for multi-res modifiers. So now if I subdivide this further, you can see some of those

jagged edges even start to go away. And we could come in and sculpt on this. But

I think for the purposes of this demonstration, I'm actually going to use dynamic topology.

So you don't need to do any of that. If you want to use dynamic topology,

we can just come in here, add a cylinder. Let's get the basic shape of it.

Let's get the basic shape of it ready to go in modeling mode, because it's just a little bit

quicker than trying to make these sort of large scale primitive changes in sculpting mode. It's

just a little bit more difficult. So let's get a good base going. And I'm going to use my loop

tools to just make this a circle. All I did was select the edge loop that was not the shape I

wanted, right clicked, loop tools, and hit circle. So now we have that as a perfect circle,

which we are going to make very unperfect with our sculpting.

Okay, so with dynamic topology, all I have to do is add this primitive,

enable dynamic topology, ignore the warning.

And now I can come in here with my pen tablet and just start sculpting.

Except that I have manual detail set from the last video. So we just have to set this back

to relative because manual detail, of course, will not change the underlying topology of this.

But now you can see that I can start pulling out

different areas. And again, it will be based on my, how zoomed in I am to the

mesh because right now it is set to relative detail. Let's set it to constant.

That's better. Let's undo some of these changes. So I have it at a constant detail at a resolution

of 10. And I currently have my refine method set to subdivide collapse.

I can quickly make the entire thing the equal resolution by hitting the detail flood fill.

This will similar to the remesh, this will create even topology over your whole model,

but you will be working with triangles instead of quads, which are not easy to subdivide

with traditional methods such as the multi-res modifier.

So let's just start marking out some areas where we might want to pull out roots.

Not pulling out the roots themselves, just sort of pulling out

bits of the mesh where I think I want them to be.

Okay. So now let's start using some other tools here. Let's grab the snake hook brush.

This is great for pulling out things like branches, roots, things of that nature. And

when you have dynamic topology enabled with it, you don't get that stretching issue because

mesh and subdivisions are being added as you pull it.

Okay. So let's start refining these more. Let's grab the inflate brush,

which we can do by just pressing Alt and then holding down the Alt key.

Let's grab the brush, which we can do by just pressing I on the keyboard.

Some of these brushes have hotkeys, some of them do not. It's just kind of the way it is.

Although I will say the ones that you will probably end up using the most are the ones

with hotkeys. Let's press G on the keyboard to pull up our grab brush.

We can also just start adding some variation into this mesh up here to give it a less uniform shape.

C on the keyboard will pull up your clay brush.

I'm just holding Ctrl and drawing to use the inverse clay brush,

which was just a clay brush, but it pushes into the mesh rather than pulling it out.

I'm going to decrease this intensity by a little bit.

I'm going to just increase the width of these using the inflate brush, because sometimes you'll

notice that when you're using other brushes, they work kind of the opposite you would expect them to

when you come to thin areas like this. That is just because Blender is having a hard time

interpreting what the surface is, where it should be, and what direction it should be

pulling these vertices out into. If you're having problems where you're trying to maybe draw out on

your mesh and it's kind of clipping it in and making it smaller, just increase the radius of

that area by using the inflate brush and that should solve the problem for you.

Jumping back into my clay brush.

So you'll see that even though I'm adding up here, when I get down here it starts pushing it in

instead. That's just because this area is too thin compared to my brush size for Blender to understand

what I'm trying to do.

Just coming back in with the snake hook to

add some more detail, some branches off of the root points.

I think G for grab. And

increasing the size of this, either incrementally with the bracket keys, we'll step it up and down,

or you can just hold F and slide it if you need to make large scale brush size changes.

Holding shift to smooth some areas down.

And you have to imagine or know that this will be smaller than what I'm trying to do.

Imagine or know that this will be sunk into a ground plane. So I'm not obviously going to draw,

you know, an entire root system just enough that when it is poking above the surface

of the ground plane that it will look like roots going into the ground.

And if you're struggling to visualize that, you know, you can always jump out of sculpt mode,

add yourself a ground plane,

and visualize it that way if you need to.

So I have some areas that aren't quite going in enough.

So let's fix that. Jumping back into sculpt mode to re-enable our dynamic topology.

And with the grab brush, we can make these sort of larger shape changes.

You probably want to add some more branches off of these roots.

So

let's reduce the size of the brush a little so we can pull out slightly smaller branch points.

Now, and how detailed you want to get in this stage is totally up to you.

I don't want to spend too long getting these shapes perfect because this demonstration is

more about showing you how to use the tools and when to use the tools and why to use the tools

than it is about, you know, creating a beautiful work of art in this session.

So

this one's getting kind of funky, so let's bring the whole thing in by

zooming out so we can grab more of the mesh at once.

Okay, I apologize for that. There was a very large garbage truck outside,

so I just paused the recording. I haven't really done anything. All I've done is, you know,

continue to smooth and shape these roots, but spending more time than I'd even like to on this.

So let's come back to this because we're going to get more of the overall shape of this,

uh, you know, sort of blocked in roughly before we come back and really refine these shapes. And

I'm already spending longer on this one area than I intended to for this stage of the sculpt.

Okay, so let's continue moving up. I'm going to continue using the snake hook tool for this,

and I'm just going to kind of pull out the top a little, and it's okay if it leans, you know,

lots of trees do.

So let's continue with the snake hook tool and just keep pulling out branches,

starting with the larger ones.

All I'm doing is just grabbing different areas and pulling out branches.

Uh, keeping in mind that branches usually fork when they change direction,

uh, at least on most plants and things like that.

So I'm going to change to the inflate brush just by pressing I on the keyboard,

and I'm going to make these a little bit thicker so that we have more area,

more surface area to draw out more branches from.

So

hitting G to change to the grab tool.

You'll see that when we get to a certain size, we start to

lose geometry, and that's because we are set to subdivide collapse here.

So if we set it to subdivide, we won't lose quite as much when we pull out with the snake hook,

but just keep in mind that it is not the most efficient way.

Um, performance wise, you know, you're, you might end up with areas of your mesh that

don't really need to be that dense,

and it may make your computer perform much slower while you're doing this.

I'm going to increase my detail size

for this portion, just testing it out there, uh, because we're starting to quickly get into an area

where I am not having enough geometry to make the shapes that I want.

So let's just quickly increase the count here by quickly going over it with the inflate brush,

and we can start to pull these shapes out more.

And this is maybe a good argument for using relative detail, is that when I am zoomed in here,

I'm clearly, I need it to be at a smaller detail

than when I am pulling out large branches.

So I'm going to go ahead and do that, and then I'm going to go ahead and

increase the count here by quickly going over it with the inflate brush,

and we can start to pull these shapes out more.

And this is maybe a good argument for using relative detail, is that when I am zoomed in here,

I'm clearly, I need it to be at a smaller detail than when I am pulling out large branches.

With the, let's actually just take the grab brush and put

a little bend in this, and then we can start branching this point out.

So let's grab our snake hook again,

and let's zoom out, and just pull out another branch.

So then when I come in here, if I wanted to snake hook again,

it's going to dynamically make that size smaller, because I've zoomed in.

And again, that is because I have it set to relative detail here. So

So one thing to note is that the smooth brush will not add more divisions to your geometry

when you're in dynatypo. It will only smooth what is there. So some brushes will add detail,

others will not. The grab brush will not add a detail to your mesh if you come in here and

start moving things around, nor will the smooth brush. But every, almost every other brush will

add tessellations to your mesh. So if you just wanted to quickly divide an area to make it

denser but you didn't want to change it all that much, a good one to use is the inflate tool with

a relatively low strength. You can come in here and nothing really has changed, it appears,

but if you smooth it you can see that it is actually much denser there now. I'm going to

change back to subdivide collapse because I don't want to necessarily maintain that.

So let's just smooth it back out.

So grab our snake hook and just continue our branches. See that I was maybe too,

either I was too zoomed out or my detail level was too high.

So now when I pull this out you'll see it's a little bit better.

Let's increase the detail of this.

I have it set to collapse, it is no wonder. So that got pulled out in a strange way because

I meant to set it to subdivide to collapse and not just collapse. So let's try that again. Much better.

Okay

so I'm not going to add too many branches to this because I'm not, again, going for

realism in this case. I probably will frequently not go for realism for the purposes of

demonstration simply because realism is just much more time consuming and it would make for

a very long and probably boring demonstration. So again we're just going for a sort of cartoony

stylized tree here and depending on what we wanted for the final result,

you know, we could either continue to add branches and make it more of a gnarled withered tree or

we could stop the branches and add, you know, sort of structures for the leaves again at a

sort of stylized scale so we would just have like, you know, sort of warped spheres for leaves.

Just inflating over this to make the resolution a little bit more consistent with what is around it.

And I'm going to turn back to constant detail.

Just because sometimes I like to get a more holistic view but still like to work at a

lower detail and relative detail just doesn't allow you to do that.

Just inflating to make this thicker.

So

you'll see I get sort of this warping sometimes when I'm pulling these large forms out. That's

just because my brush size is a little bit too high so you can, and it's sort of grabbing what's

around it, you can lower the brush size or you can paint a mask onto this to avoid that. So

let's come down to the paint mask tool and let's say I wanted to pull out a new branch right here

but I didn't want to affect these ones. Let's just paint a mask on them. So now when we grab the

snake hook it's not going to, these aren't going to move at all or get distorted in any way.

You can unpaint the mask, erase it just by holding ctrl with the paint mask. If you wanted to get

rid of everything you could come into the box mask, hold ctrl and select everything to get

rid of any masks that you might have on your mesh. So this is a good example. I don't really

like the angle at which this branch has come out. It's sort of aligned with this one in a strange

way so if I wanted to move it I would need to use the grab tool but at this low brush size it's only

going to grab it this way and it's going to make it very weird. Now if I increase it a lot suddenly

it's moving everything with it which I don't want either. So let's paint a mask on the portions that

we want to leave. Or we could also align our viewport in such a way that we could drag out a

box and we can combine the box with the paint techniques

to get the mask that we need.

So that should be

sufficient. So now let's grab our grab brush by pressing g. Let's increase the size by pressing

f and sliding it up and now let's grab this branch that we wanted to move. Actually I think we need

potentially even a larger brush and now we can move this whole thing and these ones aren't being

moved with it. Of course if you have the mask drawn on anything that does need to be moved it

will cause strange sorts of stretching. So let's clear our mask by box selecting with ctrl held

down the whole thing but we can just come in here to this warped area and fix it manually with

first we need a sculpting brush enabled with smoothing and all of our other

tools that we've learned so far.

Okay so now these ones are no longer aligned in that sort of strange manner. So

you can add some more curves and bends into these by just using the grab tool.

So

so we seem to have some sort of error here. No big deal we're just going to fix it

using the collapse edges and the deflate

to get rid of that little strange portion of the mesh. So if your edges if you have collapse

and it edges enabled either through collapse or subdivide collapse you can

it will eventually get rid of pieces of mesh if you make them small enough.

So just holding shift and smoothing creates this more tapered finish to these branches.

And see we get little pinches and strange things and holes again because we have dynamic topology

enabled. This is not really an issue as long as we have subdivide collapse enabled. Yes we can

fill that in and smooth it out and it should just do that automatically by inflating and drawing over

it. You'll see I use a lot of the grab brush in this case I am using a lot of the snake hook

to pull out the branches. I also use a lot of the inflate brush

and those are my primary tools for sculpting in Blender.

I will occasionally use things like draw or clay but frequently I find that the inflate tool

the grab tool are pretty powerful even on their own.

I went a little too far because my screen was lagging

and normally the viewport performs a little bit better than this.

I think it is just having a hard time because I am recording it at the same time.

It is costing a lot more processing power for my machine.

So

just undoing it when I make a stroke that I am unhappy with.

Pulling it out and then not worrying too much about the width of these because we

can just come in with the inflate brush and increase them to be the appropriate size.

Okay I just probably need a couple more branches on this to make it look

relatively believable. Again this is not exactly a masterpiece

but it works for the purposes of a demonstration.

Again I need to move this whole branch so let's use some masking. Let's paint a mask

onto these branches around it.

Okay let's use the grab tool

and increase the size until we get it moving kind of the way we want.

Okay let's come in here and ctrl and click to unpaint that mask

and we can paint this one in and we can

and we can paint this one in and we can

grab this and give it a little bend

and yeah now we have this weird pinching again which is just

a result of moving things around while other things are masked and if you are much more

careful with your masks than I am being you can probably avoid that altogether

but I don't personally think it's really a big deal because if we come in

with our sculpting brushes we can just very easily sculpt over it to fix it.

Of course we need something like the inflate brush because you'll notice when things are very thin

in this way similar to what we were seeing with the ends of the branches

when we draw on the surface blender is picking up these back faces too and also pushing them

up which we do not want so best to just use the inflate brush and if you're finding that the

steps of zooming are too dramatic as in you're getting in really fine and you're zooming with

the scroll wheel and it increments in that way you can you can change the the way that you zoom

you can zoom in a much smoother way by holding ctrl clicking down on the scroll wheel and

dragging your mouse and that will give you a much smoother and a more control over your zoom.

Let's come in here and increase this just so it doesn't clip through

I'm using the grab brush right here to just click and nudge things around

and i for inflate to fix those sort of sharp flat edges we're getting.

So this is a decent starting point for a tree so I'm going to pause the recording right here

and we're going to come back and finish this up really quickly.