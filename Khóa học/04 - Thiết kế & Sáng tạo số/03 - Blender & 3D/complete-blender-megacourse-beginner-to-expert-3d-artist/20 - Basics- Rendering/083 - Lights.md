# 083 — Lights

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 20 — Basics: Rendering |
| **Bài học** | Lights |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 11:20 |
| **Ngôn ngữ** | English |

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Xác định vai trò của **Lights** trong pipeline của section.
- Nhận biết các thao tác, công cụ và quyết định workflow cần ghi chú khi xem bài.
- Áp dụng lại nội dung bài học vào một asset hoặc scene Blender riêng.

## Nội dung trọng tâm

- lighting, camera, rendering và compositing
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

The last subject I want to cover in this course is rendering. Now rendering in any art form is

essentially the process of creating the final look of the piece. In 3d art this entails your

mesh object with materials and textures applied plus any lighting information you have in the

scene. So rendering an object or scene in Blender is essentially the process of getting that final

image or video sequence that you need. Now rendering in Blender requires the camera and

the light objects which we typically delete at the top of every lesson but we're going to start

using them here. The camera will define the final viewpoint for the image and the light will

obviously define the lighting for the scene. To preview what your scenes and objects will look

like after they have been rendered we can change our viewport shading to rendered mode by coming

up to the top right hand corner of the screen and choosing rendered or by holding Z down on

our keyboard and choosing rendered right here. So this viewport shading mode will allow us to

preview our lighting setup in real time before we go in and take our final images. So let's talk a

little bit about lights in Blender. Now I'm not going to be diving into advanced lighting setups

as lighting is really its own discipline but we will cover the basics. However if you'd like to

know more about lighting I suggest researching lighting setups for studio photography as the

principles will be the same. So let's start with just the cube in our scene. To add a light into a

Blender scene all you have to do is come in and press shift and A to bring up the add menu, come

down to light and choose a light type. Now there are several types of light in Blender so let's

just quickly go over them. The first is the point light. This is the default light type that we have

in any new Blender scene and a point light emits light equally in all directions from a singular

point in space. Point lights are frequently used for indoor lighting setups or to replicate the

light coming from light bulbs. The next type of light is the sunlight. Let me just move this up in

the Z so we can see its icon. This is also sometimes called a directional light. A sunlight will shine

light in a single direction but it will do so uniformly across the entire surface of your scene.

Sunlights are much stronger in intensity than other lighting types. They are frequently used

for outdoor lighting setups and this is meant to obviously replicate sunlight. The next type of

light is the spotlight. Let's move this up so you can see what it's doing. The spot is a more focused

directional light. It shines light in a single direction from a single point in space and we can

control things like the radius of the area of effect and you can think of a spotlight exactly

as you would think of a real spotlight shining onto a stage.

Next up is the area light. This is another form of a directional light but instead of emitting

light from a single point in space we are emitting light from essentially a plane here.

The light intensity and distribution is controlled by the transform properties of this area plane. So

if we move it we can see the effects here. If we scale it we can diffuse the light across the surface

and so on. Now regardless of what type of light you have added to your scene we can change it to

any other type via the light object settings. So in the properties editor let's click on the

object data properties which for light objects is going to be this little light bulb icon.

So with our current light selected changing the type under this light setting here will change

the type of light that you have and it will update it here in the viewpoint

in the viewport to reflect those changes. Now however it will not update the name of your

light so even though I have changed this to a point light it is still called area in my outliner.

The color option here under the light settings will set the color of your light

using just the regular color picker we have used so far in the course. The power will change the

intensity. For most of these light types the power is in a unit of watts except for the

sunlight which has just sort of an arbitrary unit less value here to represent the strength

of the light. I can turn this down to something like 10 and you'll see we have different effects.

Now these diffuse specular and volume sliders will change how much this light is affecting

these properties on any materials we have in our scene. Now we didn't really cover specular or

volume too much so don't worry about these for now. Just know that we can slide down this diffuse

slider and we can see that our light is now affecting the diffuse color of this light.

Now I can turn this down to something like 10 and I can turn this much less.

So in addition to these settings each of these lights have some type dependent settings that

so this controls the size of the light source.

A smaller radius if we set this down will create a more intense light source with sharper shadows.

Increasing this as you can see will create a less intense light source with softer shadows.

For sun the only property we have for sun is the angle which of course is the angle at which your

sunlight is coming through. So you can use this to replicate time of day so if you had a 90 degree

angle it would be coming sort of straight down to replicate like a noon time sun and if you had

values closer to zero or 180 that would replicate either dawn or dusk. Now I have played around with

this setting a little bit and sliding up this slider will affect the angle of

your light in the viewport as you can see but it doesn't really update the icon here and it doesn't

and when you move this manipulator icon to change the angle the angle here doesn't update.

So they appear to be doing the same thing they're just not linked properly together so perhaps in a

future update there will be some fixes for that but I find it easier to just use this little

yellow manipulator all you have to do is click and drag to change the angle of your sun.

While we have our sunlight active this is also a good time to discuss

shadows. Now shadows are present in every light type but you may notice in this scene

if we toggle it nothing appears to be happening that is because this shadow property here is

controlling specifically contact shadows cast from objects.

So we have shadow enabled here and we can see that this cube is now casting a shadow onto

this plane here so if we disable that that shadow will be gone.

So that is what shadow controls there it's just these contact shadows between separate objects.

Okay let's look at the spotlight again.

I'm going to just move this around and adjust the strength a little bit so we can see a little bit

more clearly what we are doing. So we have radius here which again controls the

size of the source of the light but down here for spot we also have size and blend. Size

pushing up the slider will increase or decrease the radius of the cone that is forming this light

here and blend will change the hardness or softness of the shadows. And if you want to

visualize the cone as a 3d object you can click show cone and it will render so you can see

exactly where your light is hitting. So area lights the only settings we have here are for shape

and size. Let me scale this up so we can see it. So we have a square here by default and we can

control the size either by scaling it in the viewport or by manipulating this slider. We can

also change the shape to rectangle so that we can control x and y individually. We can change it to

a disc if we want it circular or an ellipse and then we can control the x and y properties of

the circle individually. So that is the basics of lighting and light types in Blender. In the

next video we're going to be discussing the camera and some of the camera options.