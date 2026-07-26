# 083 — IK & Parenting
In this lecture, I'll be talking through Ike or inverse kinematics, and we'll be setting that up with

our rig.

We'll also be parenting our mesh to our bones.

So here's where we got up to last time, and we could parent our mesh to our rig at this point.

Currently, our rig is only set up as FK, which is Ford kinematics, and it's really useful to have

some Ike inverse kinematics for the legs in particular.

I'll explain more about this with this example to illustrate the difference between FK Ford Kinematics

and Ike inverse kinematics.

I have two characters.

The first one you can see in front of you, and that's with Ford Kinematics.

So F K and that's how we have our armature set up at the moment.

Now, if I want to animate this, I can only move one bone, so I'll select on the armature and go to

pose mode.

That's this bone here.

So G to grab and all the other bones move with it.

So they're all parented to that bone along the chain.

So I right click to cancel that.

Every other bone needs to be rotated.

So I'll go into side view and I'll start with the arm.

So I'll press r to rotate this front arm here and the back arm there.

Let's just make sure I've got that R2 rotate that and we need them to come in actually so r y to bring

that down and our y to bring that one down as well.

Okay.

So that's simple enough for the arms.

It's back to side view and let's try and position the legs.

So R2 rotate and then I need to rotate this one and rotate this one.

So a little bit awkward.

So I need to rotate that one a bit further and actually I need to bring my character down.

So G then z bring it down slightly, R2 rotate, R2 rotate, R2 rotate.

And you can see this is a little bit awkward having to rotate the bones like this because I keep having

to go backwards and forwards between bones to try and find one that's working.

And I've just noticed that I've moved the back leg or the right foot forward and the right arm forward.

And because it's easy to change the arms, I'll select that arm and I can move that one forwards and

select the back arm there and move it backwards.

And that now makes a bit more sense.

But the legs, however, were far more difficult to position.

Let's try again with Ike.

So I'll hide the fck man.

And this is the man with Ike.

Now you can see the addition of two extra bones here, one at the front there, which is called the

pole target.

And the one at the back here, which is the controller.

And Ike is a way of rigging a character so that you can move the base bones in the chain, the chain

being the bones of the leg.

And it's generally much easier to control in certain circumstances.

So I'll select the armature and go into pose mode.

And again it looks slightly different and with the arms I've left those with FCW That's a nice, simple

way to animate the arms because we found that it was fairly straightforward before.

So I can rotate these by the Y, bring them down like this, and come to side view and rotate them as

needed into position.

More complex rigs have an option of changing between FCW and Ike because something like the Arms.

If I want my character to lean against the wall, it's very helpful to have Ike.

But the rest of the time for walk cycles and run cycles, FK is much easier to control the arms.

So how about the legs?

Well, I'll go to side view again.

I'll grab my controller and let's make sure I bring this in the right direction.

So forward.

This time I can press G to grab and move that forwards and this is much easier.

It looks a bit strange at the moment because it's trying to point the knee at the pole target.

But if I move the pole target forwards, that makes it a bit more easier to control.

So I'm just moving around my controller and it always points at this target here.

If I press G to grab that's the way the knee points, I'll bring this one forward as well.

G Then.

Y So we don't have any problems with that leg and let's go decide for you again.

Now, if I bring my character down with this base bone here, G, then Z and I can move this forward.

You can see this is a lot easier to control.

I do have to rotate this bone, but it's a lot quicker for me to move this into position for our walk

cycle using this Ike system and I can move this bone up and down so g to grab and my feet for my character

are stuck to the floor.

So that's why humanoid rigs use inverse kinematics for the legs.

So back with our scene and we want to add some ike to our legs.

So first of all, we had two extra bones on our leg, probably easiest from side view.

I'll select the ankle joint here and press E to extrude and pull it out in the y axis and I'll rename

that bone to target underscore L for left.

Of course we also need the same sticking out the front here.

So E to extrude in the y axis and I'll rename this bone pole underscore L Now you can actually set up

the IK after you've parented your character to your bones, which works just as well.

But if you set it up before like I am here, then you need to make sure that these bones, these new

bones here have the deform option turned off.

So that's under the.

Own properties, make sure that deform is unpicked for both of the new bones.

That means that the mesh won't try and stick to these bones.

That will make more sense when we parent the mesh to the rig in a moment.

I also want to, with the two bones, clear the parent because we don't want them attached to our rig.

So I press alt p and clear parent for that one and alt p and clear parent for this one.

That means I can now move them independently for the poll target.

I'm going to press G, then Y and move that fairly far out to the front somewhere around here.

That bone is where the knee will be pointing towards.

Okay, so pause the video and catch it with me creating the two new bones.

Remember to turn off the deform option and separate them from the mesh with alt p to clear parents.

Pause the video and have a go at that.

Okay.

So now we're ready to set up the IC.

To do that, we actually need to be imposed mode.

So I'll change from edit mode to post mode and I'll select the second bone in my chain.

So the chain is the leg.

So that's one and then two and this is the end bone, as it were.

We'll rotate the foot bone independently.

The foot bone is kind of independent from the IK chain.

Now to set up the IK, we come down to our bone constraints here, which is a new tab that is available

in post mode.

So I'll select that and under add bone constraints under tracking inverse kinematics and you can see

the bone changes color there and it has a new sort of dotted line going up to the object origin.

So there's a few things we need to highlight for this.

First of all, we need to tell it which armature we're using.

We've only got one armature so I can select this and choose armature.

And then it's asking what bone is our target bone or sub target as it's listed here?

So I'll click on that.

And frustratingly, it doesn't have a picker, but I can just scroll down to my target underscore l.

We do the same for the poll target so I can use a picker here and choose the correct armature, but

I can't use a picker for the bone, which is a shame.

So I'll scroll down to the bottom and there's my pole.

L Now it's all gone a bit strange.

That's because we haven't got the right chain length.

The chain length is two.

We've got one, two bones in the leg.

So I change that to two and it kind of sorts itself out, but not quite.

It's pointing the wrong way.

It's not pointing at the pole correctly.

And remember I was talking about bone roll.

Well, yours might be pointing in a slightly different direction to mine, maybe out to the side here,

or maybe even out to the front.

If you twisted your bones in a different way, it doesn't matter if you did.

It just means that when I use the pole angle to try and put it back to the front and usually it's either

90 or 180.

Yours might differ from mine though, depending on which way you rotated your bone.

Roll the number here doesn't matter.

All important is that it's pointing towards our pole bone just at the front there, and it usually is

divisible by 90 if you set up your roll, so it's fairly flat.

Okay, so pause the video here and catch up with me setting up your IC and set up the control bone or

the target bone and the pole target and adjust your pole angle so your leg is pointing forwards.

Okay.

So all we need to do now is symmetries.

This to the other side.

Now I can't select it.

And right click here to symmetries because we're in post mode.

So I need to go to edit mode.

So with tab and now I can right click and symmetries.

Let's jump to the other side.

Let's just make sure it's working so I'll jump back into pose mode.

Let's move the pole, see if that's working and move.

I'll control bone and that's working too.

It does look a bit strange how it disconnects, but that doesn't actually make any difference.

So I right click to cancel that movement and we're all set up so pause the video here and cemeteries

your bones in edit mode.

Okay.

The last thing for us to do then is to attach our character to the bones.

So I go back to object mode and I need to select my character first.

Don't worry about the head just yet.

So character first, then the bones and control p to parent and I want to use with automatic weights

like we did with the snake earlier.

So I click on that.

It's always a good idea to test these things, so I'll make sure the armature is selected, go into

Poe's mode and move it around and it seems to be working well.

But of course we haven't got the TV connected well in pose mode with the armature.

If I select this top bone here, Blender remembers this even when I go back to object mode now.

So control tab to go back to object mode, it remembers that that bone is the selected bone.

So if I go into edit mode as well, that bone is selected in edit mode and into Poe's mode.

It's selected there as well.

So in object mode that bone is kind of the active bone.

That means I can select my TV and I'll deselect the mesh of the person and make sure only the bones

are selected and active.

So my TV selected and my bones being the active object I can press control P to parent, but this time

instead of with automatic weights, I can choose that bone that I had selected.

So I choose that and let's select the armature back into post mode.

And if I rotate the head bone, the TV is moving with it.

Let's just make sure from all angles that it's all working and it's looking good.

Okay, so catch up with me and first attach your body to the bones by parenting and then the TV.

Head to the bones.

Remember to select that one individual bone before the parenting process.

Once you've done that, make sure you saved your work.

Ready for next time.



| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | IK & Parenting |
| **Thời lượng** | 10:38 |
| **Chủ đề chính** | Inverse Kinematics và Parenting |

## 1. Mục tiêu bài học

- Hiểu sự khác biệt giữa Forward Kinematics (FK) và Inverse Kinematics (IK).
- Biết cách thêm IK Constraint vào một chuỗi bone (ví dụ chân hoặc tay).
- Nắm được vai trò của Pole Target trong việc kiểm soát hướng khớp gối/khuỷu tay.
- Hiểu cách Parent mesh vào Armature bằng Automatic Weights để mesh biến dạng theo bone.

## 2. Nội dung chính

Forward Kinematics (FK) là cách animate bằng cách xoay từng bone theo thứ tự từ gốc đến ngọn (ví dụ xoay vai, rồi xoay khuỷu tay, rồi xoay cổ tay) — đã được thực hành ở bài Animating Bones. Inverse Kinematics (IK) hoạt động ngược lại: người dùng chỉ cần di chuyển một bone mục tiêu (IK Target) ở cuối chuỗi (ví dụ bàn chân hoặc bàn tay), và Blender tự động tính toán góc xoay của các bone phía trên (đùi, cẳng chân) sao cho đầu chuỗi chạm đúng vị trí target. IK đặc biệt hữu ích cho chuyển động chân khi đi bộ (bàn chân cần giữ cố định trên mặt đất) vì dễ kiểm soát hơn nhiều so với FK.

Để thiết lập IK, thêm một bone Target riêng (không thuộc chuỗi IK) đặt tại vị trí cuối chi (ví dụ tại bàn chân), sau đó chọn bone cuối cùng của chuỗi cần IK (ví dụ shin/cẳng chân) trong Pose Mode, thêm Bone Constraint loại "Inverse Kinematics" (phím tắt Shift+Ctrl+C có thể mở nhanh menu constraint phổ biến), và gán Target là bone vừa tạo. Tham số Chain Length xác định IK ảnh hưởng đến bao nhiêu bone ngược lên trên (ví dụ 2 để chỉ ảnh hưởng shin và thigh, không ảnh hưởng đến hông).

Vì bài toán IK cho một chuỗi 2 khớp thường có vô số lời giải (khớp gối có thể cong ra nhiều hướng khác nhau mà bàn chân vẫn chạm đúng vị trí), cần thêm một Pole Target — một bone hoặc empty phụ đặt phía trước hoặc phía sau đầu gối — để chỉ định rõ hướng khớp gối/khuỷu tay phải cong về phía nào, tránh hiện tượng khớp "gãy" sai hướng.

Sau khi hoàn thiện Armature, bước Parenting gắn kết mesh với bộ xương: chọn mesh trước, giữ Shift chọn Armature sau (Armature phải là active object), nhấn Ctrl+P và chọn "With Automatic Weights". Blender sẽ tự động tạo Vertex Group cho từng bone và tính toán trọng số ảnh hưởng dựa trên khoảng cách hình học — đây là bước khởi tạo nhanh, kết quả thường cần tinh chỉnh thêm ở bài Weight Painting.

## 3. Quy trình thực hành gợi ý

1. Trong Edit Mode Armature, thêm một bone Target riêng tại vị trí bàn chân (không kết nối vào chuỗi chân).
2. Chuyển sang Pose Mode, chọn bone shin (cẳng chân), vào Bone Constraint Properties, thêm constraint Inverse Kinematics.
3. Gán Target là bone Target vừa tạo, đặt Chain Length = 2 (ảnh hưởng shin và thigh).
4. Thêm một bone hoặc Empty làm Pole Target phía trước đầu gối, gán vào ô Pole Target của constraint, chỉnh Pole Angle nếu khớp gối cong sai hướng.
5. Di chuyển bone Target để kiểm tra chuỗi chân uốn cong tự nhiên theo IK.
6. Chọn mesh Blob Man, Shift chọn Armature, nhấn Ctrl+P > With Automatic Weights để Parent.
7. Vào Pose Mode, thử xoay/di chuyển vài bone để kiểm tra mesh biến dạng theo Armature.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| `Shift+Ctrl+C` | Mở menu Add Bone Constraint nhanh (bao gồm IK) |
| Bone Constraint Properties > Inverse Kinematics | Thêm IK constraint cho bone đang chọn |
| `Ctrl+P` (chọn Mesh rồi Armature) | Parent mesh vào Armature |
| "With Automatic Weights" | Tùy chọn Parent tự động tính Vertex Group theo khoảng cách |
| "With Empty Groups" | Tùy chọn Parent tạo Vertex Group rỗng để tự vẽ Weight Paint |
| `Alt+P` | Clear Parent (gỡ liên kết Parent) |

## 5. Lưu ý & lỗi thường gặp

- Không đặt Pole Target khiến khớp gối/khuỷu tay cong ngẫu nhiên hoặc lật hướng sai khi di chuyển IK Target.
- Đặt Chain Length quá lớn khiến IK ảnh hưởng ngược lên cả cột sống ngoài ý muốn.
- Parent mesh vào Armature khi mesh chưa Apply Transform (bỏ qua bài Rig Ready Meshes) gây biến dạng sai lệch.
- Dùng Automatic Weights trên mesh có hình dạng phức tạp/chồng lấn (ví dụ tay áp sát thân) dẫn đến trọng số sai, cần Weight Paint sửa lại thủ công ở bài sau.

## 6. Checklist thực hành

- [ ] Đã thêm IK constraint cho chuỗi bone chân (hoặc tay).
- [ ] Đã thiết lập Pole Target và chỉnh hướng khớp hợp lý.
- [ ] Đã Parent mesh Blob Man vào Armature bằng Automatic Weights.
- [ ] Đã thử Pose Mode để kiểm tra mesh biến dạng theo bone.

## 7. Tóm tắt

IK cho phép điều khiển chuỗi bone bằng cách di chuyển một target ở cuối chi thay vì xoay từng khớp, kết hợp với Pole Target để kiểm soát hướng cong. Parenting với Automatic Weights gắn kết mesh vào Armature, tạo nền tảng ban đầu cho Weight Painting ở bài tiếp theo.
