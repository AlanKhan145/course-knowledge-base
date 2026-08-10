[![在虚幻引擎中放置Actor | 虚幻引擎 5.7 文档 | Epic Developer Community](https://tse1.mm.bing.net/th/id/OIP.6OkWEa-qYv69xGXxVBQqJQHaEi?r=0\&pid=Api)](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/placing-actors-in-unreal-engine?utm_source=chatgpt.com)

# 002 — UNREAL ENGINE

> **Module:** Module 04 — Game Engine
> **Roadmap item:** 4.2
> **Nhóm nội dung:** Game Engine
> **Thứ tự trong module:** 002
> **Thời lượng gợi ý:** 45–60 phút
> **Mục tiêu thực hành:** tạo được một prototype 3D nhỏ có nhân vật, input, collision, gameplay logic, UI và build chạy độc lập.

---

# 1. Tóm tắt

**Unreal Engine** là game engine thời gian thực của Epic Games, cung cấp gần như toàn bộ hệ thống cần thiết để phát triển game 3D: world/level, rendering, material, animation, physics, audio, input, AI, UI, networking và hệ thống đóng gói game. Tài liệu Epic hiện cung cấp riêng các phần dành cho Blueprint, C++, gameplay framework và production pipeline. ([Epic Games Developers][1])

Điểm quan trọng nhất khi mới học Unreal không phải là nhớ tất cả menu, mà là hiểu **mô hình đối tượng của engine**:

```text
Project
│
├── Level / World
│
├── Actor
│   ├── Component
│   ├── Component
│   └── Component
│
├── Pawn
│   └── Character
│
├── Blueprint
├── C++
├── Material
├── Animation
├── Physics
├── Lighting
└── Packaging
```

Trong Unreal, một object đặt hoặc spawn trong Level thường là một **Actor**. Actor có thể được ghép từ nhiều **Component**. `Pawn` là Actor có khả năng được Player hoặc AI điều khiển, còn `Character` là một dạng Pawn chuyên cho nhân vật với mesh, collision và hệ thống di chuyển tích hợp. ([Epic Games Developers][2])

---

# 2. Mục tiêu học tập

Sau bài này, anh nên có thể:

* hiểu workflow cơ bản của **Unreal Editor**;
* phân biệt `Actor`, `Pawn`, `Character` và `Component`;
* hiểu `Level` đóng vai trò gì;
* tạo gameplay bằng **Blueprint**;
* hiểu khi nào nên chuyển logic sang **C++**;
* tạo Material cơ bản;
* kết nối character animation bằng **Animation Blueprint**;
* thiết lập collision và physics;
* thiết lập ánh sáng cơ bản;
* hiểu pipeline từ asset → gameplay → test → package;
* tạo một prototype có thể đưa vào portfolio.

---

# 3. Bức tranh tổng thể về Unreal Engine

## 3.1. Workflow đơn giản

Một workflow Unreal cơ bản có thể hình dung như sau:

```text
             ASSET PIPELINE
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
     Mesh     Texture   Animation
       │         │         │
       └──────┬──┴─────────┘
              ▼
       Content Browser
              │
              ▼
           LEVEL
              │
       ┌──────┴──────┐
       ▼             ▼
     Actor        Character
       │             │
 Components      Components
       │             │
       └──────┬──────┘
              ▼
          Gameplay
        Blueprint/C++
              │
       ┌──────┼───────┐
       ▼      ▼       ▼
     Input  Physics   UI
              │
              ▼
          Play/Test
              │
              ▼
          Packaging
              │
              ▼
        Windows/Linux/
        Console/Mobile...
```

Đây chính là tư duy nên dùng khi học Unreal: **không học từng công cụ rời rạc**, mà nhìn chúng như các phần của một pipeline.

---

# 4. Unreal Editor

## 4.1. Unreal Editor là gì?

**Unreal Editor** là môi trường chính để xây dựng game. Anh dùng nó để:

* đặt object vào world;
* xây level;
* chỉnh Transform;
* quản lý asset;
* chỉnh Material;
* tạo Blueprint;
* chỉnh animation;
* đặt ánh sáng;
* cấu hình physics;
* chạy thử game;
* debug;
* package game.

Các scene mà anh xây dựng trong Unreal thường được gọi là **Levels**, và những object như mesh, light hay character được đặt trong world đều là các dạng Actor. ([Epic Games Developers][3])

### Mental model

```text
Unreal Editor
│
├── Viewport
│
├── Outliner
│
├── Details
│
├── Content Drawer
│
├── Toolbar
│
└── Specialized Editors
    ├── Blueprint Editor
    ├── Material Editor
    ├── Animation Editor
    └── Niagara Editor
```

### Các khu vực nên nhớ

| Thành phần         | Công dụng                     |
| ------------------ | ----------------------------- |
| **Viewport**       | Quan sát và chỉnh world 3D    |
| **Outliner**       | Danh sách Actor trong Level   |
| **Details**        | Thuộc tính object đang chọn   |
| **Content Drawer** | Quản lý asset                 |
| **Toolbar**        | Play, build, project commands |
| **Place Actors**   | Đưa Actor mới vào Level       |

Epic cung cấp `Place Actors` panel để tìm và kéo những object như hình học, light, Pawn, Character và volume trực tiếp vào Level.

---

# 5. Level

## 5.1. Level là gì?

Có thể xem **Level** giống một scene hoặc khu vực của game.

Ví dụ:

```text
Game
│
├── MainMenu
├── Village
├── Forest
├── Dungeon01
└── BossArena
```

Mỗi khu vực có thể chứa:

```text
Forest Level
│
├── PlayerStart
├── Trees
├── Rocks
├── Enemies
├── Lights
├── Trigger Volumes
├── Audio
└── Collectibles
```

Epic mô tả Level như môi trường 3D mà developer đặt object và geometry vào để xây dựng thế giới game. ([Epic Games Developers][3])

### Ví dụ

Trong game adventure:

```text
LV_Forest
│
├── BP_Player
├── BP_Goblin_01
├── BP_Goblin_02
├── BP_Chest
├── SM_Tree
├── SM_Rock
├── DirectionalLight
└── BP_ExitTrigger
```

---

# 6. Actor

## 6.1. Actor là gì?

`Actor` là một trong những khái niệm quan trọng nhất của Unreal.

Epic định nghĩa Actor là base class cho các object có thể **được đặt hoặc spawn trong Level**. Actor cũng có thể chứa nhiều `ActorComponent`. ([Epic Games Developers][2])

Ví dụ:

```text
Actor
├── Enemy
├── Door
├── Chest
├── Weapon
├── Light
├── Camera
└── Trigger
```

### Ví dụ một chiếc đèn

```text
BP_Lamp
│
└── Actor
    ├── StaticMeshComponent
    └── PointLightComponent
```

`BP_Lamp` là **Actor**.

Mesh và ánh sáng bên trong là **Components**.

---

# 7. Component

## 7.1. Component là gì?

Component là các module nhỏ được gắn vào Actor để cung cấp chức năng.

Epic mô tả Component như những phần cấu thành Actor; ví dụ một chiếc xe có thể có body, wheel và light dưới dạng các component của Actor đại diện cho chiếc xe. ([Epic Games Developers][4])

Ví dụ:

```text
BP_Player
│
├── CapsuleComponent
├── SkeletalMeshComponent
├── CameraComponent
├── SpringArmComponent
└── CharacterMovementComponent
```

Có thể hình dung:

```text
Actor = Lego model

Component = từng khối Lego
```

---

## 7.2. Composition

Unreal sử dụng composition rất nhiều.

Thay vì:

```text
SuperCharacter
 └── SuperFightingCharacter
      └── SuperShootingFightingCharacter
```

anh có thể thiết kế:

```text
Character
│
├── HealthComponent
├── WeaponComponent
├── InventoryComponent
└── InteractionComponent
```

Nhờ vậy một component có thể tái sử dụng:

```text
HealthComponent
├── Player
├── Enemy
├── Boss
└── DestroyableObject
```

---

# 8. Pawn

## 8.1. Pawn là gì?

`Pawn` kế thừa từ Actor và đại diện cho một entity có thể được **Player hoặc AI Controller possess**. ([Epic Games Developers][5])

```text
Actor
  │
  ▼
Pawn
```

Ví dụ Pawn:

* xe hơi;
* máy bay;
* drone;
* spaceship;
* robot;
* nhân vật đặc biệt.

### Ví dụ

```text
PlayerController
       │
    Possess
       ▼
     Pawn
       │
       ▼
Input → Movement
```

---

# 9. Character

## 9.1. Character khác Pawn như thế nào?

`Character` là lớp chuyên biệt của `Pawn`, được Unreal thiết kế cho dạng nhân vật có mesh, collision và movement logic tích hợp. ([Epic Games Developers][6])

```text
Actor
  │
  ▼
Pawn
  │
  ▼
Character
```

Một Character phổ biến:

```text
Character
│
├── Capsule
├── Skeletal Mesh
└── CharacterMovement
```

### Khi nào dùng?

| Gameplay       | Base class hợp lý |
| -------------- | ----------------- |
| Người chạy/bắn | Character         |
| NPC humanoid   | Character         |
| Monster đi bộ  | Character         |
| Drone          | Pawn              |
| Spaceship      | Pawn              |
| Chess piece    | Actor             |
| Door           | Actor             |
| Item pickup    | Actor             |

---

# 10. Gameplay Framework

Mối quan hệ quan trọng:

```text
                 GameMode
                    │
        quy định luật của game
                    │
                    ▼
Player ──────► PlayerController
                    │
                 Possess
                    │
                    ▼
                  Pawn
                    │
                    ▼
                Character
```

`Controller` chịu trách nhiệm điều khiển Pawn; Unreal có cả `PlayerController` và `AIController`. ([Epic Games Developers][7])

Ví dụ FPS:

```text
Mouse
  │
Keyboard
  │
  ▼
PlayerController
  │
  ▼
BP_FPSCharacter
  │
  ├── Movement
  ├── Camera
  ├── Weapon
  └── Health
```

---

# 11. Blueprint

## 11.1. Blueprint là gì?

Blueprint là hệ thống **visual scripting dạng node** của Unreal.

Thay vì viết:

```cpp
if (Health <= 0)
{
    Die();
}
```

anh có thể xây graph:

```text
Event TakeDamage
      │
      ▼
Health = Health - Damage
      │
      ▼
Health <= 0 ?
   │       │
  Yes      No
   │
   ▼
  Die
```

Blueprint Editor sử dụng graph, trong đó `Event Graph` là một phần trung tâm để triển khai gameplay logic. ([Epic Games Developers][8])

---

## 11.2. Ví dụ cửa tự động

```text
Player enters Trigger
          │
          ▼
 OnComponentBeginOverlap
          │
          ▼
    Is Player?
      │
      ▼
    Timeline
      │
      ▼
 SetRelativeRotation
      │
      ▼
      Door
```

Blueprint phù hợp để:

* prototype nhanh;
* gameplay scripting;
* trigger;
* interaction;
* animation logic;
* level scripting;
* UI;
* tinh chỉnh gameplay.

---

# 12. Blueprint và C++

Đây không phải hai hệ thống đối lập.

Epic hỗ trợ workflow kết hợp, trong đó C++ có thể cung cấp hệ thống hoặc class nền, còn Blueprint mở rộng và cấu hình chúng cho gameplay. ([Epic Games Developers][9])

### Kiến trúc thường gặp

```text
             C++
             │
      Core gameplay
             │
             ▼
      Base Character
             │
             ▼
         Blueprint
             │
      Designer tuning
             │
             ▼
       Final Character
```

Ví dụ:

```text
C++
AWeapon
│
├── Fire()
├── Reload()
├── Ammo
└── Damage

        ↓

Blueprint
BP_AK47
├── Damage = 35
├── Ammo = 30
├── Mesh = AK47
├── Sound = ...
└── VFX = ...
```

---

# 13. C++ trong Unreal Engine

Unreal cho phép tạo class Actor/Object mới bằng C++, đồng thời expose dữ liệu hoặc function sang Blueprint khi cần. ([Epic Games Developers][10])

## Ví dụ Actor đơn giản

```cpp
UCLASS()
class AHealthPickup : public AActor
{
    GENERATED_BODY()

public:

    AHealthPickup();

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    float HealAmount = 50.0f;

    UFUNCTION(BlueprintCallable)
    void Collect();
};
```

Blueprint sau đó có thể sử dụng:

```text
BP_HealthPickup
      │
      └── Parent: AHealthPickup
```

---

## 13.1. Khi nào nên dùng C++?

Nên cân nhắc C++ cho:

* gameplay system lớn;
* architecture nền;
* reusable framework;
* subsystem;
* logic phức tạp;
* hệ thống cần kiểm soát code tốt;
* integration engine/API;
* logic được dùng bởi nhiều Blueprint.

Blueprint vẫn rất mạnh ở lớp gameplay và iteration nhanh. Epic cũng khuyến khích cách tiếp cận kết hợp thay vì mặc định xem một hệ thống phải thay thế hoàn toàn hệ thống kia. ([Epic Games Developers][9])

---

# 14. Material

Material quyết định bề mặt được render như thế nào.

Unreal có **node-based Material Editor**, sử dụng các input vật liệu PBR như:

```text
Base Color
Metallic
Roughness
Specular
Normal
```

### Material graph đơn giản

```text
Texture
   │
   ▼
Base Color

Roughness Value
   │
   ▼
Roughness

Normal Map
   │
   ▼
Normal

        ↓

    Material
        ↓
       Mesh
```

---

## 14.1. Material Instance

Một workflow rất hữu ích:

```text
M_Master
│
├── MI_Red
├── MI_Blue
├── MI_Wet
└── MI_Damaged
```

Thay vì tạo hàng chục Material graph độc lập, anh có thể xây một Master Material rồi tạo các biến thể bằng parameter.

---

# 15. Animation Blueprint

**Animation Blueprint** điều khiển animation logic của Skeletal Mesh. Epic cung cấp AnimGraph và các workflow Animation Blueprint để xây logic animation cho character.

Một hệ thống cơ bản:

```text
Character Movement
       │
       ├── Speed
       ├── IsInAir
       └── Direction
              │
              ▼
      Animation Blueprint
              │
              ▼
         State Machine
```

---

## 15.1. State Machine

Ví dụ:

```text
             Speed > 0
      ┌────────────────────┐
      ▼                    │
    Idle ───────────────► Run
      ▲                    │
      └────────────────────┘
            Speed = 0
```

Thêm nhảy:

```text
Idle/Run
   │
   │ IsInAir
   ▼
 JumpStart
   │
   ▼
 JumpLoop
   │
   ▼
 JumpEnd
   │
   ▼
Idle/Run
```

---

## 15.2. Gameplay và animation

Nên giữ tư duy:

```text
Gameplay quyết định:
"Nhân vật đang làm gì?"

Animation quyết định:
"Hiển thị hành động đó như thế nào?"
```

Không nên để Animation Blueprint trở thành nơi chứa toàn bộ gameplay logic.

---

# 16. Physics

Physics là phần mô phỏng tương tác vật lý của world.

Ví dụ:

```text
Player
   │
   ▼
Push Box
   │
   ▼
Collision
   │
   ▼
Physics Simulation
   │
   ├── Velocity
   ├── Gravity
   ├── Mass
   └── Collision response
```

Unreal hỗ trợ hit/overlap và physics simulation trong hệ thống gameplay. Ví dụ tài liệu API của Epic phân biệt `Hit` với `Overlap` và cho biết hit có thể phát sinh từ character movement hoặc physics simulation. ([Epic Games Developers][11])

---

## 16.1. Collision

Đây là phần nên học thật kỹ.

Có hai trường hợp thường gặp:

### Blocking

```text
Player ───► Wall

        X
     BLOCKED
```

### Overlap

```text
Player ─────────► Trigger

       overlap
          │
          ▼
      Open Door
```

Ví dụ:

```text
Coin
│
└── SphereCollision
      │
      ▼
Player overlap
      │
      ▼
Score + 1
      │
      ▼
Destroy Coin
```

---

# 17. Lighting

Ánh sáng ảnh hưởng trực tiếp đến khả năng đọc scene, mood và chi phí render.

Light component của Unreal có các thuộc tính liên quan đến intensity, shadows và đóng góp vào lighting/GI. ([Epic Games Developers][12])

Một scene outdoor đơn giản có thể hình dung:

```text
Directional Light
       │
       ▼
       Sun

Sky / Atmosphere
       │
       ▼
Ambient environment

Lights
       │
       ▼
Objects
       │
       ▼
Shadow + Shading
```

---

## 17.1. Lighting và gameplay

Không nên coi lighting chỉ là "trang trí".

Ví dụ horror game:

```text
Dark corridor
     │
     ▼
Player khó quan sát
     │
     ▼
Tension tăng
```

Action game:

```text
Enemy
  │
  ▼
Strong silhouette
  │
  ▼
Player nhận diện nhanh hơn
```

---

# 18. Asset Pipeline

Một pipeline phổ biến:

```text
Blender / Maya
      │
      ├── Mesh
      ├── Skeleton
      └── Animation
      │
      ▼
       FBX
      │
      ▼
Unreal Content Browser
      │
      ├── Static Mesh
      ├── Skeletal Mesh
      ├── Skeleton
      └── Animation
      │
      ▼
Material / Physics / Blueprint
      │
      ▼
     Level
```

Static Mesh là một trong những đơn vị hình học cơ bản dùng để xây môi trường và object trong Level. ([Epic Games Developers][13])

---

# 19. Folder Structure

Không nên để tất cả asset trong một folder.

### Gợi ý

```text
Content/
│
├── Characters/
│   ├── Player/
│   └── Enemies/
│
├── Blueprints/
│   ├── Characters/
│   ├── Items/
│   └── Interactables/
│
├── Maps/
│
├── Materials/
│   ├── Master/
│   └── Instances/
│
├── Meshes/
│
├── Animations/
│
├── UI/
│
├── Audio/
│
└── VFX/
```

Với project lớn hơn:

```text
Content/
└── MyGame/
    ├── Characters/
    ├── Gameplay/
    ├── Environment/
    ├── UI/
    ├── Audio/
    └── Maps/
```

Mục tiêu là để khi project có hàng nghìn asset, anh vẫn tìm được thứ cần tìm nhanh.

---

# 20. Input → Character → Gameplay

Một trong những flow quan trọng nhất:

```text
Keyboard / Mouse
       │
       ▼
 Input System
       │
       ▼
PlayerController
       │
       ▼
   Character
       │
       ├────► Movement
       │
       ├────► Jump
       │
       └────► Attack
                     │
                     ▼
                  Weapon
                     │
                     ▼
                    Hit
                     │
                     ▼
                  Enemy
                     │
                     ▼
                   Damage
```

Nếu hiểu được luồng này, anh đã nắm khá nhiều nền tảng để làm prototype.

---

# 21. Gameplay Loop mẫu

Giả sử làm game third-person:

```text
Spawn
  │
  ▼
Explore
  │
  ▼
Find Enemy
  │
  ▼
Combat
  │
  ▼
Enemy dies
  │
  ▼
Collect Item
  │
  ▼
Reach Goal
  │
  ▼
Win
```

Gameplay loop nên được xác định **trước khi thêm quá nhiều asset đẹp**.

---

# 22. UI

Prototype tối thiểu chỉ cần:

```text
HUD
├── Health
├── Ammo
├── Score
└── Crosshair
```

Ví dụ:

```text
Enemy attacks
     │
     ▼
HealthComponent
     │
     ▼
Health = 70
     │
     ▼
HUD
     │
     ▼
███████░░░ 70%
```

UMG là hệ thống UI của Unreal và hỗ trợ cả Blueprint lẫn code cho widget logic. ([Epic Games Developers][14])

---

# 23. Packaging

Khi game chạy được trong Editor chưa có nghĩa là project đã hoàn thành.

Ta cần đưa project qua pipeline:

```text
Project
   │
   ▼
Compile
   │
   ▼
Cook Assets
   │
   ▼
Package
   │
   ▼
Executable / Platform Build
```

Packaging settings cũng ảnh hưởng đến map/content nào được đưa vào build và kích thước package. ([Epic Games Developers][15])

---

## 23.1. Debug vs Development vs Shipping

Có thể hiểu ở mức nhập môn:

```text
Development Build
      │
      ├── test
      ├── debug
      └── profiling

Shipping Build
      │
      └── build dành cho phát hành
```

Khi học Unreal, **hãy package prototype thật**, thay vì chỉ bấm Play trong Editor.

---

# 24. Workflow hoàn chỉnh

Đây là workflow anh nên thuộc sau bài học:

```text
1. Create Project
       │
       ▼
2. Organize folders
       │
       ▼
3. Create Level
       │
       ▼
4. Add Actors
       │
       ▼
5. Create Character
       │
       ▼
6. Setup Input
       │
       ▼
7. Blueprint / C++
       │
       ▼
8. Collision
       │
       ▼
9. Animation
       │
       ▼
10. Material
       │
       ▼
11. Lighting
       │
       ▼
12. UI
       │
       ▼
13. Test
       │
       ▼
14. Debug
       │
       ▼
15. Package
```

---

# 25. Blueprint hay C++?

| Tình huống            | Blueprint |  C++  |
| --------------------- | :-------: | :---: |
| Prototype             |   ⭐⭐⭐⭐⭐   |   ⭐⭐  |
| Designer chỉnh logic  |   ⭐⭐⭐⭐⭐   |   ⭐   |
| Trigger đơn giản      |   ⭐⭐⭐⭐⭐   |   ⭐⭐  |
| UI interaction        |   ⭐⭐⭐⭐⭐   |   ⭐⭐  |
| Architecture nền      |    ⭐⭐⭐    | ⭐⭐⭐⭐⭐ |
| Framework tái sử dụng |    ⭐⭐⭐    | ⭐⭐⭐⭐⭐ |
| Logic phức tạp        |    ⭐⭐⭐    | ⭐⭐⭐⭐⭐ |
| Gameplay tuning       |   ⭐⭐⭐⭐⭐   |  ⭐⭐⭐  |
| Integration engine    |     ⭐⭐    | ⭐⭐⭐⭐⭐ |

Workflow rất phổ biến:

```text
C++
│
│ Base systems
▼
Blueprint
│
│ Gameplay configuration
▼
Designer
```

Đây cũng phù hợp với cách Epic mô tả việc kết hợp Blueprint và C++ thay vì coi chúng là hai lựa chọn loại trừ nhau. ([Epic Games Developers][9])

---

# 26. Unreal Engine hay tự viết Engine?

## Unreal Engine

### Ưu điểm

```text
Idea
 │
 ▼
Gameplay
 │
 ▼
Prototype
```

Engine đã cung cấp phần lớn hệ thống nền.

Phù hợp khi mục tiêu là:

* game development;
* gameplay programming;
* 3D game;
* portfolio;
* sản xuất prototype nhanh.

---

## Tự viết Engine

Workflow dễ trở thành:

```text
Idea
 │
 ▼
Window
 │
 ▼
Renderer
 │
 ▼
Input
 │
 ▼
Asset System
 │
 ▼
Physics
 │
 ▼
Scene System
 │
 ▼
Editor?
 │
 ▼
Cuối cùng mới tới Gameplay
```

### Nhưng đổi lại học rất sâu về:

* graphics API;
* memory;
* ECS;
* rendering;
* physics;
* architecture;
* asset management.

---

## So sánh

| Tiêu chí                    |      Unreal |  Tự viết engine |
| --------------------------- | ----------: | --------------: |
| Làm game nhanh              |       ⭐⭐⭐⭐⭐ |               ⭐ |
| Học gameplay                |       ⭐⭐⭐⭐⭐ |              ⭐⭐ |
| Học graphics internals      |         ⭐⭐⭐ |           ⭐⭐⭐⭐⭐ |
| Có Editor                   |          Có |          Tự làm |
| Physics                     |          Có | Tự làm/tích hợp |
| Animation                   |          Có | Tự làm/tích hợp |
| Asset pipeline              |          Có |          Tự xây |
| Portfolio game              | Rất phù hợp |    Tùy mục tiêu |
| Portfolio engine programmer |         Tốt |         Rất tốt |

### Kết luận

Nếu mục tiêu là **Game Developer**, học Unreal trước thường giúp anh tập trung vào gameplay và production workflow.

Nếu mục tiêu chuyển sang:

> Graphics Programmer / Engine Programmer

thì việc tự viết mini engine sẽ đáng giá hơn.

---

# 27. Dự án thực hành 1 — Third-person Action Game

Đây là bài phù hợp nhất để học Unreal toàn diện.

## Gameplay

```text
Move
 ↓
Explore
 ↓
Enemy
 ↓
Attack
 ↓
Enemy HP ↓
 ↓
Enemy Dead
 ↓
Score
```

### Hệ thống cần làm

```text
BP_PlayerCharacter
│
├── Movement
├── Camera
├── Health
└── Attack
```

```text
BP_Enemy
│
├── Mesh
├── Collision
├── Health
└── Damage
```

```text
BP_Weapon
│
├── Damage
├── Collision
└── AttackEffect
```

---

# 28. Dự án thực hành 2 — FPS Prototype

## Minimum viable FPS

```text
Player
├── WASD
├── Mouse Look
├── Jump
└── Fire
```

```text
Gun
├── Ammo
├── Damage
├── Fire Rate
└── Reload
```

```text
Enemy
├── HP
└── Hit Reaction
```

HUD:

```text
┌─────────────────────────┐

           +

HP: 100                30/90

└─────────────────────────┘
```

---

# 29. Dự án thực hành 3 — 3D Adventure Level

Gameplay:

```text
Explore
   │
   ▼
Find Key
   │
   ▼
Unlock Door
   │
   ▼
Solve Puzzle
   │
   ▼
Reach Exit
```

Các Blueprint:

```text
BP_Key
BP_Door
BP_Lever
BP_PressurePlate
BP_Collectible
BP_LevelExit
```

Dự án này đặc biệt phù hợp để luyện:

* Level;
* Actor;
* Component;
* Blueprint;
* collision;
* Material;
* lighting;
* interaction.

---

# 30. Bài tập chính — Mini Unreal Prototype

## Yêu cầu

Tạo một Level có:

```text
Player
│
├── Movement
├── Camera
└── Jump

Level
│
├── Platforms
├── Walls
├── Lights
├── Pickups
└── Exit

Gameplay
│
├── Collision
├── Trigger
├── Score
└── Win condition

UI
├── Score
└── Objective
```

---

## Gameplay loop

```text
START
  │
  ▼
Move around
  │
  ▼
Collect 5 Orbs
  │
  ▼
Door Unlock
  │
  ▼
Reach Exit
  │
  ▼
YOU WIN
```

---

# 31. Checklist thực hành

### Unreal Editor

* [ ] Tạo project.
* [ ] Điều hướng Viewport được.
* [ ] Dùng Outliner.
* [ ] Dùng Details.
* [ ] Import asset.

### Gameplay Framework

* [ ] Hiểu Actor.
* [ ] Hiểu Component.
* [ ] Hiểu Pawn.
* [ ] Hiểu Character.
* [ ] Hiểu PlayerController ở mức cơ bản.

### Blueprint

* [ ] Tạo Blueprint Actor.
* [ ] Dùng Event BeginPlay.
* [ ] Dùng overlap.
* [ ] Dùng branch.
* [ ] Dùng variable.
* [ ] Dùng function.

### Gameplay

* [ ] Input.
* [ ] Movement.
* [ ] Collision.
* [ ] Pickup.
* [ ] Score.
* [ ] Win condition.

### Graphics

* [ ] Material.
* [ ] Material Instance.
* [ ] Lighting.

### Animation

* [ ] Skeletal Mesh.
* [ ] Animation Blueprint.
* [ ] Idle/Run state.

### Build

* [ ] Package game.
* [ ] Chạy build ngoài Editor.

---

# 32. Folder structure cho bài thực hành

```text
Content/
└── MiniAdventure/
    │
    ├── Blueprints/
    │   ├── Characters/
    │   ├── Interactables/
    │   └── Gameplay/
    │
    ├── Characters/
    │
    ├── Maps/
    │
    ├── Materials/
    │
    ├── Meshes/
    │
    ├── Animations/
    │
    ├── UI/
    │
    ├── Audio/
    │
    └── VFX/
```

---

# 33. README nên viết gì?

```markdown
# Unreal Mini Adventure

## Engine
Unreal Engine

## Gameplay

Collect five energy orbs and reach the exit.

## Controls

WASD — Move
Mouse — Camera
Space — Jump
E — Interact

## Features

- Third-person character
- Collision
- Pickup system
- Score
- Door interaction
- Animation Blueprint
- Basic UI
- Lighting
- Packaged build

## Technical Notes

- Gameplay implemented with Blueprint
- Actors composed from reusable Components
- Animation controlled by Animation Blueprint
- Collision uses overlap events for pickups
```

---

# 34. Artifact nên tạo

Sau bài này, portfolio nên có **ba artifact**.

## 1. Playable Prototype

```text
Build/
└── MiniAdventure.exe
```

Không chỉ video.

Nên có build chạy thật.

---

## 2. Engine Workflow Notes

```markdown
# Unreal Workflow Notes

Project
→ Asset
→ Level
→ Actor
→ Component
→ Blueprint
→ Gameplay
→ Test
→ Package
```

---

## 3. Technical README

Nên mô tả:

* gameplay loop;
* controls;
* project structure;
* Blueprint/C++ architecture;
* asset pipeline;
* collision;
* animation;
* build process;
* vấn đề gặp phải;
* cách giải quyết.

---

# 35. Portfolio screenshot nên có

Không chỉ chụp gameplay.

Nên có:

```text
1. Gameplay
2. Level Editor
3. Blueprint Graph
4. Character Components
5. Animation Blueprint
6. Material Graph
7. Folder Structure
8. Packaged Build
```

Như vậy người xem thấy được **khả năng kỹ thuật**, chứ không chỉ thấy một scene 3D.

---

# 36. Những lỗi người mới thường mắc

## Lỗi 1 — Cho mọi logic vào Level Blueprint

```text
Level Blueprint
├── Door
├── Enemy
├── Player
├── UI
├── Weapon
├── Pickup
├── Boss
└── ...
```

Khó maintain.

Tốt hơn:

```text
BP_Door
BP_Player
BP_Enemy
BP_Weapon
BP_Pickup
```

---

## Lỗi 2 — Một Blueprint khổng lồ

```text
BP_Player

500 nodes
100 variables
40 branches
```

Nên tách:

```text
Player
├── HealthComponent
├── CombatComponent
├── InventoryComponent
└── InteractionComponent
```

---

## Lỗi 3 — Tick mọi thứ

Người mới thường nghĩ:

```text
Event Tick
↓
Check everything
↓
Every frame
```

Hãy ưu tiên event khi phù hợp:

```text
Overlap
Input
Timer
Damage Event
Animation Event
```

---

## Lỗi 4 — Prototype quá đẹp trước khi gameplay chạy

Không nên:

```text
Week 1
↓
Lighting
↓
Materials
↓
Environment
↓
VFX

Week 4:
Gameplay chưa có
```

Nên:

```text
Blockout
   ↓
Gameplay
   ↓
Test
   ↓
Polish
```

---

# 37. Thứ tự học Unreal hợp lý

```text
Unreal Editor
      │
      ▼
Actor / Component
      │
      ▼
Blueprint
      │
      ▼
Pawn / Character
      │
      ▼
Input
      │
      ▼
Collision
      │
      ▼
Gameplay Framework
      │
      ▼
Material
      │
      ▼
Animation
      │
      ▼
Physics
      │
      ▼
Lighting
      │
      ▼
UI
      │
      ▼
C++
      │
      ▼
Packaging
```

Không cần học toàn bộ rendering hay C++ nâng cao trước khi làm prototype đầu tiên.

---

# 38. Mini challenge 45–60 phút

## 0–10 phút

```text
Create Third Person Project
↓
Create Level
↓
Add floor + obstacles
```

## 10–20 phút

```text
Create BP_Coin
↓
Sphere Collision
↓
Overlap
↓
Destroy Actor
```

## 20–30 phút

```text
Score variable
↓
Collect Coin
↓
Score + 1
```

## 30–40 phút

```text
Create BP_Door
↓
Score >= 5
↓
Open Door
```

## 40–50 phút

```text
Add UI
↓
Display Score
↓
Display Objective
```

## 50–60 phút

```text
Playtest
↓
Fix bugs
↓
Package
```

Kết quả:

```text
Player
   │
collect
   ▼
5 Coins
   │
   ▼
Door Opens
   │
   ▼
Exit
   │
   ▼
WIN
```

---

# 39. Câu hỏi tự kiểm tra

### Câu 1

**Actor khác Component ở điểm nào?**

> Actor là object có thể tồn tại trong Level; Component là phần chức năng được gắn vào Actor. ([Epic Games Developers][2])

---

### Câu 2

**Pawn khác Character thế nào?**

```text
Actor
  ↓
Pawn
  ↓
Character
```

Pawn có thể được Controller điều khiển; Character là Pawn chuyên biệt cho nhân vật với các hỗ trợ movement/collision/mesh có sẵn. ([Epic Games Developers][5])

---

### Câu 3

**Blueprint dùng để làm gì?**

Dùng visual scripting để tạo và điều khiển gameplay logic trong Unreal.

---

### Câu 4

**Có Blueprint rồi thì còn cần C++ không?**

Có. Với project thực tế, hai hệ thống có thể bổ trợ nhau:

```text
C++
↓
Core System
↓
Blueprint
↓
Gameplay Configuration
```

([Epic Games Developers][9])

---

### Câu 5

**Animation Blueprint có phải nơi chứa gameplay không?**

Thông thường nên coi nó chủ yếu là lớp chuyển **gameplay state → animation pose**:

```text
Character State
      ↓
Animation Blueprint
      ↓
Animation State Machine
      ↓
Final Pose
```

Epic mô tả Animation Blueprint là nơi xây animation logic qua AnimGraph và các animation workflow liên quan.

---

### Câu 6

**Package để làm gì?**

Đưa project và asset cần thiết thành build dành cho nền tảng mục tiêu thay vì chỉ chạy bên trong Unreal Editor. Các lựa chọn map/content trong Packaging cũng ảnh hưởng trực tiếp tới nội dung được đưa vào bản build. ([Epic Games Developers][15])

---

# 40. Cheat Sheet

```text
UNREAL ENGINE
│
├── Level
│     └── World / Scene
│
├── Actor
│     └── Object trong world
│
├── Component
│     └── Chức năng của Actor
│
├── Pawn
│     └── Actor có thể được Controller điều khiển
│
├── Character
│     └── Pawn dành cho nhân vật
│
├── Blueprint
│     └── Visual scripting
│
├── C++
│     └── Programming / core systems
│
├── Material
│     └── Surface appearance
│
├── Animation Blueprint
│     └── Animation logic
│
├── Physics
│     └── Collision / simulation
│
├── Lighting
│     └── Light / shadow / readability
│
└── Packaging
      └── Project → playable build
```

---

# 41. Kiến thức quan trọng nhất cần nhớ

Nếu chỉ nhớ một sơ đồ của bài này, hãy nhớ:

```text
                   PROJECT
                      │
                      ▼
                    LEVEL
                      │
                contains
                      │
                      ▼
                    ACTOR
                      │
               composed of
                      │
                      ▼
                  COMPONENT

                      +

Actor
  │
  ▼
Pawn
  │
  ▼
Character

                      +

        Gameplay Logic
        ┌────────────┐
        │            │
        ▼            ▼
    Blueprint       C++

                      +

 Mesh → Material → Rendering
 Mesh → Animation → Anim Blueprint

                      +

 Input
   ↓
Gameplay
   ↓
Physics / Collision
   ↓
UI
   ↓
Test
   ↓
Packaging
```

---

# 42. Tổng kết

**Unreal Engine không nên học bằng cách thuộc giao diện.** Mục tiêu của bài đầu tiên là hiểu được quan hệ giữa:

> **Level → Actor → Component → Pawn → Character → Blueprint/C++ → Gameplay → Build**

Actor là nền tảng của object trong world, Component cung cấp các mảnh chức năng, Pawn/Character phục vụ các entity có khả năng điều khiển, Blueprint và C++ triển khai gameplay, còn Material, Animation, Physics và Lighting tạo nên phần presentation và interaction của game. ([Epic Games Developers][2])

Bài này chỉ thực sự hoàn thành khi anh có một prototype dạng:

```text
Third-person Character
        │
        ▼
      Input
        │
        ▼
    Exploration
        │
        ▼
     Collision
        │
        ▼
     Pickups
        │
        ▼
      Score
        │
        ▼
      Door
        │
        ▼
     Win UI
        │
        ▼
 Packaged Build
```

Đó là artifact đủ nhỏ để hoàn thành nhưng cũng đủ rộng để chứng minh anh đã hiểu **workflow nền tảng của Unreal Engine**, thay vì chỉ biết thao tác Editor.

[1]: https://dev.epicgames.com/documentation/en-US/unreal-engine?utm_source=chatgpt.com "Unreal Engine 5.7 Documentation"
[2]: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/Actor?application_version=5.1&utm_source=chatgpt.com "unreal.Actor"
[3]: https://dev.epicgames.com/documentation/en-us/unreal-engine/get-started-with-ue4?application_version=4.27&utm_source=chatgpt.com "Get Started with UE4 | Unreal Engine 4.27 Documentation"
[4]: https://dev.epicgames.com/documentation/en-us/unreal-engine/components?application_version=4.27&utm_source=chatgpt.com "Components | Unreal Engine 4.27 Documentation"
[5]: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/Pawn?application_version=4.27&utm_source=chatgpt.com "unreal.Pawn — Unreal Python 4.27 (Experimental) documentation"
[6]: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/Character.html?utm_source=chatgpt.com "unreal.Character"
[7]: https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-quick-reference-in-unreal-engine?utm_source=chatgpt.com "Gameplay Framework Quick Reference in Unreal Engine"
[8]: https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprint-overview?application_version=4.27&utm_source=chatgpt.com "Blueprint Overview | Unreal Engine 4.27 Documentation"
[9]: https://dev.epicgames.com/documentation/en-us/unreal-engine/balancing-blueprint-and-cplusplus?application_version=4.27&utm_source=chatgpt.com "Balancing Blueprint and C++ | Unreal Engine 4.27 ..."
[10]: https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-basics?application_version=4.27&utm_source=chatgpt.com "Programming Basics | Unreal Engine 4.27 Documentation"
[11]: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/Light?application_version=5.2&utm_source=chatgpt.com "Unreal Python 5.2 (Experimental) documentation"
[12]: https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/LightComponentBase?application_version=5.0&utm_source=chatgpt.com "unreal.LightComponentBase"
[13]: https://dev.epicgames.com/documentation/en-us/unreal-engine/static-mesh-components?application_version=4.27&utm_source=chatgpt.com "Static Mesh Components | Unreal Engine 4.27 ..."
[14]: https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-and-scripting-with-umg-in-unreal-engine?application_version=5.2&utm_source=chatgpt.com "Programming and Scripting With UMG in Unreal Engine"
[15]: https://dev.epicgames.com/documentation/en-us/unreal-engine/reducing-packaged-game-size?application_version=4.27&utm_source=chatgpt.com "Reducing Packaged Game Size | Unreal Engine 4.27 ..."
