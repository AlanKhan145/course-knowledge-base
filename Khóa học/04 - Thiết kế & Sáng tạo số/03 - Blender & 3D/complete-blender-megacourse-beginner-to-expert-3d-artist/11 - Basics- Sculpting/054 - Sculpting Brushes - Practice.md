# 054 — Sculpting Brushes

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 11 — Basics: Sculpting |
| **Bài học** | Sculpting Brushes |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 15:01 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Sculpting Brushes** trong pipeline của section.
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

Okay, so let's get started looking at some of these brushes in the palette on the side

here as well as what they do.

Now this tool panel on the right can be toggled on and off the same way our modeling tool

panel can and that is just by pressing T on the keyboard.

So I have switched over to my pen tablet for this and if you are using a pen tablet just

know that these icons here will affect this value next to it based on the pressure you

are using with the pen tablet.

So right now my radius is fixed so it's always going to be at 91 pixels for this brush but

the strength will vary depending on how much pressure I am putting down on my pen.

So I put on just a light pressure we just get a light bump if I put in a heavy pressure

we get a much stronger effect.

So just know that if you are using a pen tablet you can adjust the pressure settings up here.

Okay, let's smooth this out a bit.

Start with a sort of clean slate.

It's a little lumpy I just smoothed out the sphere we were using in the last video but

this will work for our purposes.

So we have already looked at what the draw brush can do.

The draw brush is this first brush in the tool panel right here and it is the one that

is active by default when you enter sculpt mode and when you click and drag or draw with

your pen you will see that draw simply pulls all the points that are under your cursor

it pulls them out away from the mesh and if you are holding control it will push them

in in the same fashion.

The next brush in the menu is the draw sharp and notice that the draw sharp is a negative

brush by default so when we click and drag into this you will see that it cuts into the

mesh in sort of a sharper fashion than you would get with the draw brush and control.

You'll see that these lines create a much crisper edge to them which will be more apparent

with a higher resolution mesh.

This sphere I created it for the purposes of demonstration only so although it is much

denser than we are used to for modeling this is actually quite low poly low resolution

when it comes to sculpting.

I'm just going to tab to get back into sculpt mode and let's continue on looking at more

of these brushes.

Next we have the clay brush now some of these are a little bit difficult to describe verbally

but I think just trying them out on your mesh will give you an idea of what they do.

So clay basically just tries to mimic the feel of adding clay or subtracting clay to a surface.

Let me turn the strength on this up a little bit so that now the way that it works with

pen tablets is if I have this strength set to 50% no matter how hard I press the strength

will always cap out at 50%.

So let's turn it to one so that maximum pressure yields maximum strength you can see a little

bit better what we're doing.

So that is the clay brush it is useful for adding pieces to the form.

Next is the clay strips brush this is similar to the clay brush except it has sort of a

square alpha which just means that when you click and drag to draw on this it'll create

sort of these sharper edges that are more square.

Next brush down is the clay thumb brush this basically just replicates pushing your thumb

into the clay at any point and sort of the peaks and the valleys you would get that way.

Might be useful for finer edits.

Let's look at the layer brush so this one gives a very strong result as you can see

similar to the clay strips but a lot smoother in the fall off and a lot stronger in its power.

The next one I want to look at is inflate this is an extremely useful brush so inflate

does exactly what it sounds like it looks at all of the points under your cursor and

pushes the mesh out in every direction.

Now this differs from the draw brush because the draw brush will only bring it forward

in one direction whereas the inflate brush will push it out to the sides as well.

Next up is the blob brush this is very similar to the inflate brush but it gives you sort

of a sharper fall off so you end up with more defined edges here along the perimeter of your stroke.

You can see that this has a much smoother fall off here going from this high point to

this low point whereas it's much sharper going from the high point here to the low point

down here which creates much more defined strokes.

Next is the crease this is another very important brush this one is another negative brush by

default and when you click and drag and create your stroke you will see that the crease brush

this nice cut into the mesh but it also pinches the edges under your stroke together to make

that cut even crisper.

This one I think is much more useful than the draw sharp which you can see will cut

into the mesh but not pinch it together.

Again there's the crease.

All right the next one down on the list is the smooth brush which we have already discussed

you can access it here in the toolbar and use it like any other brush or more easily

from any brush you have selected you can just hold shift and it will always bring up the

smooth brush for you.

Next is the flatten tool again this one is quite self-explanatory all you have to do

is click and drag to flatten any portion of your mesh.

Now I believe that the flatten tool will flatten based on the angle of your brush so you can

see that right here my brush is pretty much facing the camera angle the viewport so it

would flatten to that but if I come around this curve see how the brush becomes slightly

angled as it moves under this form so now if I click let's increase the strength here

so we can see what we're doing so now if I click it will flatten based on this angle.

Next brush is the the fill brush this is a really interesting one it is similar to

a draw brush however it will fill in the low parts of your mesh first before it begins

drawing on the high points so this is a good way to fill in holes or dents or things that

you do not want to be present in your mesh.

The scrape brush is quite similar to the flatten brush honestly I have not found a

real use case that is different for the scrape versus the flatten brush but feel free to

experiment with all of these brushes to really get a sense of what they do.

The pinch brush is another very important brush in blender let's come around somewhere

where there's more of a difference in the mesh so the pinch brush is essentially we'll

just pinch these points together which is it's all it's part of the functionality of

the crease brush but this is just the pinching no cutting into this edge and you can see

you can get some really fine clean lines using the pinch brush.

The next brush I want to cover is the grab brush again this is one of the more heavily

utilized tools along with things like inflate and draw and pinch the grab tool basically

allows you to click and drag anywhere in your mesh and pull it out and move it in

any way you move your cursor of course we can change how much of it we move out by changing

the size of our brush clicking and dragging this is good for large scale form changes

as you can see you can move this from a mesh to or from a sphere mesh I should say into

something completely different.

Next one I want to cover is the snake hook brush let's move this down a little bit the

snake hook will grab out geometry underneath your cursor in a similar fashion to the grab

a brush however the falloff it creates allows for these great you know protrusions and it's

good for you know quickly changing the form if you need to pull it out now you'll see

that as the farther I pull it out the more warped this becomes this is because we're

not actually adding any new vertices or geometry we're not making this mesh any denser than

it was when it was a sphere so pulling this out really extremely will show kind of where

the limitations of our geometry are however we're going to address this and how to work

around it in a future video.

Alright the next brush is the thumb brush again it's just sort of like creating divots

and dents into your mesh as if you were pushing your thumb into a clay surface.

Now this pose brush here this I believe is primarily used for sculpting characters blender

sort of detects where the bones should be this is not a humanoid form and has no real

definition so blender is having a hard time but you'll see I get this little preview of

what how it's going to rotate this mesh once I click and drag it it's going to rotate it

around that point so great for posing obviously and you can get some of these interesting

rotation forms in your mesh so if I had a character who was say in T-pose as we discussed

with our orthographic modeling reference video we discussed characters we discussed characters

in T-pose a little bit so let's say I had that character and it was in T-pose if I wanted

to bring the arms down I could do so by using the pose brush.

The rotate brush here it's also kind of interesting gives you sort of a trying to find an angle

which you can see what it is doing it gives you sort of a swirling effect if you grab

and sort of move your cursor clockwise you'll get this nice swirling effect and the last

sculpting brush we're going to briefly preview is the cloth brush this one is great for creating

sort of wrinkles finer wrinkles in cloth and if you click and drag it might slow your depending

on the strength of your PC this might be too much for it because it is running some

very complex calculations but if you grab and move it you see you get these nice sort

of organic looking cloth wrinkles so I've reviewed most of the brushes here in this

palette I didn't cover all of them as some of them I just don't feel are as useful as

others or I have not found a use case for them myself so any of the ones that I skipped

you are welcome to jump into blender and you know just on a relatively high poly mesh just

come in here and see what they do you'll see you'll get you can get lots of interesting

effects so that is it for the sculpting brushes now there are a quite a number of non sculpting

brushes here at the bottom and we're going to be covering what some of those do in the next video

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
