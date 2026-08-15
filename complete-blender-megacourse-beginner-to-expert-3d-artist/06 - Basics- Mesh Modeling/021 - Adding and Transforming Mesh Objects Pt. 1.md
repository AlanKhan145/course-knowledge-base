# 021 — Adding and Transforming Mesh Objects Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 06 — Basics: Mesh Modeling |
| **Bài học** | Adding and Transforming Mesh Objects Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 20:36 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Adding and Transforming Mesh Objects Pt. 1** trong pipeline của section.
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


Okay so now that we are a little bit more familiar with the interface and

navigation we can move on to manipulating objects within the 3d viewport. In this

video we are going to start learning some of the keyboard shortcuts that we

are going to be using in Blender so I've downloaded an app that will display my

keystrokes down here in the bottom left corner. This is just to help you follow

along with a visual guide of what I'm doing because we're going to be using a

lot of keyboard shortcuts going forward. So we have our starter cube here and

this is what is known as a mesh object. A mesh object is basically any 3d object

that the computer renders using points in space called vertices to draw lines

between called edges which subsequently have faces drawn between them and are

rendered opaque. I'll talk a bit more about vertices edges and faces when we

get into mesh editing. That's a really technical definition of a mesh however

so in layman's terms a mesh is basically any solid object that compromises the

stuff in our 3d space. Everything that we model in this course is going to be a

mesh object. It's anything that isn't something like a camera or a light or a

non-solid data type. Mesh is often referred to as geometry so you may hear

me use those terms interchangeably. We're going to start by transforming the

default cube. Transforming in the world of 3d graphics is just a way of

collectively referring to the location rotation and scale of an object in 3d

space. Press N on your keyboard to bring up the sidebar. Under item, transform

you'll see that this panel contains all those pieces of information of location

rotation and scale as well as the dimensions of this object in real world

space in real world units which is driven by this scale value here. So we

want to move this mesh around in our scene. This is easy. All we have to do is

select the cube by left-clicking on it. The selection will be represented by

this green highlight around the edge here. So once it's selected press G as

in grab and now you can see that when I move my mouse around the cube moves with

it. Very cool. To drop the cube into a new location simply left-click again when

it's in the position that you want it. To drop the selection and cancel the

operation while you're moving around after pressing G right-click and it will

snap back to its original position. To rotate an object select it by left

clicking then hit R as in rotate and move the mouse to manipulate the object.

Left-click again to confirm the rotation. To scale an object select it by

left-clicking hit S as in scale and move the cursor away from the model to scale

up and move the cursor towards the object to scale down. Once again left

click to confirm the new scale. I'd just like to make a couple of quick

additional points about scale. In the world of 3d graphics the size of

something is referred to as its scale and scale works as a decimal system. When

you add a new primitive object like so it will have a scale of 1 in all

directions in X and Y and in Z. The default cube primitive is added to the

dimension with a scale of 1 but dimensions of 2 meters by 2 meters by 2

meters meaning it is 2 meters long in the X direction 2 meters long in the

Y direction and 2 meters long in the Z direction. Now this is a scale of 1 for

this object. By changing the scale to 2 in all directions we now have a cube

that is twice the size and we can see that reflected here in the dimensions

where it says 4 meter by 4 meter by 4 meter because 4 is twice of 2. Giving

this object a scale of 0.5 we'll bring it back to 2 meters by 2 meters by 2

meters and a scale of 1 because we were just at a scale of 2 and we halved it by

giving it a scale of 0.5. If we were at the default of 1 and gave this cube a

scale of 0.5 you can see it reflected here 0.5 and now this the cube is 1

meter by 1 meter by 1 meter. And as a side note I have my units for Blender

set to meters. If it's not set to meters for you don't worry at this point it

really doesn't matter what units you're using here but if you want it to be in

meters just for ease of following along you can set the world units by coming

into the properties editor on the right hand side going into scene properties

going under units and you can set it here. So just make sure that the unit

system is metric the unit scale is 1 and the length is in meters. All this

means is that now within the 3d viewport one of these grid lines is equal to 1

square meter so it's 1 meter this way and 1 meter this way. This is more

important if you're going to be exporting your models into another

program but for now just know that if you need to change the units in your

scene you can do so here. Okay so getting back to transforming objects all these

keys on their own will perform the operation in all three directions so if

you wanted to scale an object uniformly you can press X and see that it's

getting larger but it is not changing shape at all. It's still a cube because

we have scaled it uniformly in every direction but going forward we're

definitely going to need more control than that. We will often want to move

rotate or scale in only one direction at a time. We can do this by pairing the

grab move and rotate keys with either the X Y or Z key on the keyboard

depending on the axis. Remember that in Blender the X direction is for left and

right the Y is for forward and back and the Z direction is for up and down. So

for instance if I wanted to move this cube a little to the left I would select

it press G for grab and then press X on the keyboard and now you can see the

movement is locked to this left and right axis so I could move it a little

to the left. If I wanted to rotate it around a single axis I would hit R for

rotate and then Z for the Z axis and now we can see it is moving around the Z

axis which is drawn by that blue line that appears when you lock the axis. If I

wanted to make this cube into a rectangle I could scale it along a

single axis so I could select the cube by left-clicking press S for scale and Y

for the axis I'd like to scale it along and we can pull it along and elongate it

along the y-axis until it's more of a rectangle. You can also scale along two

axes at once and lock the value of the third so let's say I wanted to push this

box back into the right but I didn't want it to lift off the ground at all

the ground being these grid lines here. All I would have to do is with the box

selected press G for grab hold shift and then press Z to lock the Z axis and now

we can move this along the floor here move it back into the right and we can

see we come into a more front view that it has not moved up or down at all. So

whichever transform operation you want to use plus shift and then the axis key

will lock the values in that direction so if I wanted to make this box thinner

but not make it any shorter along the Y I would press S for scale hold shift and

then press Y to lock the Y axis and you'll see the other axes which it is

manipulating are being drawn on the screen and when I scale it in you'll see

that the box gets thinner but doesn't lose any of the length along the Y axis.

Additionally if you need to be really precise about how much you move

something like say you wanted to rotate an object exactly 45 degrees you can

change these properties manually in the sidebar here you know you could type 45

into the X and it would rotate it 45 degrees 90 rotate it 90 etc or it is much

quicker to do so with this keyboard shortcuts which we can do by pressing

first the transform key that we wish to use say R for rotate and then the axis

we wish to rotate it along Z for the Z axis and then simply before we left

clicking confirm we just want to type 45 now this will rotate it exactly 45

degrees from where it was so again that's rotate Z for 5 and you can see

that this property has been changed up here to 45 and of course for rotation you

wanted it to rotate the other way you could do so by just reversing the

direction so R for rotate Z to lock the axis and then minus 45 to rotate it the

other way if you're having some difficulty remembering trig these

numbers might be making you a bit queasy but just remember that when you're

working on a 3d grid or even a 2d grid the sign in front of the number will

inform the directionality of the mesh or the operation so for example start

with a new cube here so it's easier right now we are at a location rotation

of 0 but if we pressed G for grab we wanted to move it along the X axis we

could do so manually saying 2 and it would move it 2 units 2 meters along the

X if we wanted to move it the other way we could do the same thing G X negative

2 will move it in the negative direction remember that this point here at the

center of the world where all three axes intersect represents a location of

0 so this location as driven by this green dot which we'll talk about more in

a minute is at a location of exactly negative 2 meters from this point now

blender does have a gizmo I believe it is even on by default but if it is not

on for you all you have to do is come up here to the top right hand corner of the

screen and make sure this button that says show gizmo is on now if this is

enabled and you're still not seeing a gizmo on your object just drop down this

arrow here oops I mean this arrow here and just make sure move is on this will

make the gizmo appear on your object so a gizmo is just this little arrow

manipulator that allows you to transform an object by clicking and dragging these

arrows rather than learning the keyboard shortcuts I personally think that it is

faster to use the hotkeys but that being said the gizmo is used in a lot of other

3d applications so if you were familiar with something like unity this might be

familiar to you already and then if you enable move rotate and scale under the

viewport gizmos drop down you can do all these operations the arrows of course

being for moving the object the circles being for rotating and the squares for

scaling now you may notice that even though I have this cube rotated at an

angle relative to these axis lines the arrows on the gizmo are still matching

the direction of our world axis this is what is called global space and it

refers to the orientation of these this entire empty scene the rotation of the

scene cannot be changed because it is the basis for which we describe how

objects within it are rotated but what does that mean practically practically

if we have this cube rotated relative to our world space something like that

if our transform orientation our gizmo is in global space that means it would

perform these transform operations according to the direction of the world

so if I wanted to make this cube into a rectangle now with this rotation applied

I would hit s y the same way and oh that's not really what we wanted was it because you'll see

it scaling along this line and it just becomes really distorted now we can definitely still

make this a rectangle without changing the rotation back to match the world all we have

to do is set our transform orientation into what is called a local space local space is

basically using the rotation of the object relative to that of the world space to define

the direction of this XYZ axis so when an object is rotated like this if you go up to this top bar

up here where it says global click the drop-down you can change the transform orientations to

local space you'll now see that the gizmo arrows have snapped and according to the rotation of the

cube so now if we scale along the y-axis it's going to scale properly because it is using the

rotation of the cube and rotating it along its local y-axis however a much quicker way to switch

between local and global space on the fly without having to come up here and change it from the

menu if you want to perform any transform operation in local space all you have to do is hit the

transform hotkey for the operation you want to perform and then double press the axis button

so to scale this along the y without changing it here we would just hit s for scale y once for the

y-axis and then instead of clicking we're just going to hit y again and it's going to transform

into local space and we can scale it properly and click to confirm the shortcut works for all

transform operations including move and rotate so if I wanted to move this along its local X which

would be this direction I would hit G for grab X for the x-axis and then X again to switch it

into local space click to confirm same thing for rotation I wanted to rotate it along its local

axes I would hit R for rotate to give me the rotation tool let's say X for the x-axis globally

and then X again to change that to the local axis any of these transform operations you performed

is stored in memory and can be undone using ctrl Z I believe blender saves something around 50 steps

in memory and I believe you can configure that in the preferences as well but 50 steps is plenty

you can redo any of the undone operations by pressing ctrl and then shift and then Z and it

will redo the operation so let's say you move an object you transform it however you wish and then

you decide that you really need it to be back at the center of the world but maybe you've done some

other operations and you can't undo back through it you can quickly clear the transforms by using

the alt key combined with the transform operation key so holding alt and pressing G will clear the

location it will reset these values to 0 and snap the mesh back so its center point is at 000 on

the grid you can also do this with alt R for rotation this value has now been reset to 0 and

alt S will reset the scale so now we have returned to our default cube with no transforms applied

you could also do this manually by pulling up the sidebar here again which is accessed by pressing

on the keyboard to toggle and just manually typing in 0 for these values


