Đã cào dữ liệu từ roadmap.sh/game-developer và đối chiếu với file PDF bạn upload. Trang roadmap.sh ghi đây là “Roadmap to becoming a Game Developer in 2026” . File PDF trang 1 chứa toàn bộ sơ đồ chủ đề Game Developer: Game Mathematics, Physics, Engine, Programming Languages, Graphics, AI, Advanced Rendering và các roadmap liên quan như Backend/API Design .

Game Developer Roadmap — Dữ liệu khóa học
Module 1: Tổng quan Game Developer
Mục tiêu

Hiểu vai trò Game Developer, các hướng đi chính và kiến thức nền cần có.

Nội dung
Game Developer là gì?
Client-side game development
Server-side game development
Các hướng chuyên sâu:
Gameplay Programmer
Engine Programmer
Graphics Programmer
Physics Programmer
AI Programmer
Multiplayer / Backend Game Developer
Technical Artist
Roadmap liên quan
Backend
API Design
Server Side Game Developer
Roadmap.sh cũng liệt kê Game Developer trong nhóm role-based roadmaps và có roadmap Server Side Game Developer riêng .
Module 2: Game Mathematics
2.1 Linear Algebra
Chủ đề
Vector
Matrix
Linear Transformation
Cần học
Vector 2D/3D
Dot product
Cross product
Matrix transform
Coordinate space
Local space vs World space
Camera space
Ứng dụng trong game
Di chuyển nhân vật
Tính hướng nhìn
Camera follow
Raycast
Collision
Animation transform
2.2 Geometry
Chủ đề
Geometry
Affine Space
Affine Transformation
Cần học
Điểm, đường thẳng, mặt phẳng
Tam giác, đa giác
Khoảng cách giữa điểm và đường
Bounding box
Transform object trong không gian 2D/3D
2.3 Orientation
Chủ đề
Quaternion
Euler Angle
Cần học
Rotation bằng Euler
Gimbal lock
Quaternion rotation
Slerp
Object orientation
Ứng dụng
Xoay camera
Xoay nhân vật
Animation blending
Vehicle rotation
3D character controller
2.4 Projection
Chủ đề
Perspective Projection
Orthogonal Projection
Cần học
Camera projection
Field of View
Near/Far clipping plane
Orthographic camera
Perspective camera
2.5 Curve
Chủ đề
Spline
Hermite
Bezier
Catmull-Rom
Ứng dụng
Đường đi của camera
Movement path
Animation curve
Racing track
Skill trajectory
Module 3: Game Physics
3.1 Dynamics
Chủ đề
Center of Mass
Moment of Inertia
Acceleration
Force
Restitution
Friction
Buoyancy
Angular Velocity
Linear Velocity
Joints
Cần học
Newton’s Laws
Rigidbody
Force vs Impulse
Gravity
Friction
Torque
Rotation physics
Spring / joint system
Ứng dụng
Nhân vật nhảy
Vật thể rơi
Xe cộ
Đạn bay
Va chạm
Ragdoll
Platformer physics
3.2 Collision Detection
Chủ đề
Narrow Phase
Broad Phase
Convexity
Convex
Concave
Convex Hull
Convex Decomposition
Intersection
SAT
GJK
EPA
CCD
Cần học
AABB collision
OBB collision
Circle/Sphere collision
Ray collision
Continuous Collision Detection
Separating Axis Theorem
Gilbert-Johnson-Keerthi algorithm
Expanding Polytope Algorithm
3.3 Bounding Volume & Spatial Partitioning
Chủ đề
OBB
AABB
Bounding Volume
Sort & Sweep
Spatial Partitioning
DBVT
BVH
Ứng dụng
Tối ưu kiểm tra va chạm
Tối ưu raycast
Scene partition
Physics engine
Large open world
Module 4: Game Engine
Chủ đề chính
Unity 3D
Unreal Engine
Godot
Native engine
4.1 Unity
Cần học
Unity Editor
Scene
GameObject
Component
Prefab
Rigidbody
Collider
Animator
Script bằng C#
UI system
Input system
Build game
Dự án thực hành
2D Platformer
Top-down RPG
Endless Runner
Simple mobile game
4.2 Unreal Engine
Cần học
Unreal Editor
Blueprint
Actor
Pawn
Character
Component
Level
Material
Animation Blueprint
C++ trong Unreal
Physics
Lighting
Packaging
Dự án thực hành
Third-person action game
FPS prototype
3D adventure level
4.3 Godot
Cần học
Node system
Scene system
GDScript
Signals
Physics body
AnimationPlayer
TileMap
Export game
Dự án thực hành
2D puzzle game
Top-down shooter
Simple platformer
4.4 Native Engine
Cần học
C/C++
Game loop
Window management
Input handling
Renderer
Asset loading
Physics integration
Audio
ECS architecture
Dự án thực hành
Tự viết game engine 2D nhỏ
Renderer OpenGL cơ bản
Entity Component System mini
Module 5: Programming Languages
Ngôn ngữ trong roadmap
C#

Phù hợp với:

Unity
Gameplay scripting
Tooling
C/C++

Phù hợp với:

Unreal Engine
Game engine
Graphics programming
Performance-critical systems
GDScript

Phù hợp với:

Godot
2D/indie game
Rust

Phù hợp với:

Game engine experimental
Performance + memory safety
Bevy engine
Python

Phù hợp với:

Tool scripts
Automation
Procedural content
Data processing
AI prototyping
Module 6: Computer Graphics
6.1 Rendering cơ bản
Chủ đề
Rasterization
Ray Tracing
Graphics Pipeline
Sampling
Shader
Rendering Equation
Cần học
Vertex
Triangle
Mesh
Vertex Shader
Fragment Shader
Texture Mapping
Lighting model
Render target
Framebuffer
6.2 Reflection & Material
Chủ đề
Reflection
Diffuse
Specular
Texture
Bump Mapping
Parallax Mapping
Horizon Mapping
Ứng dụng
Tạo vật liệu kim loại
Tạo bề mặt đá/gỗ/vải
Fake depth bằng normal map
Tăng độ thật cho asset
6.3 Computer Animation & Color
Chủ đề
Computer Animation
Color
Visual Perception
Tone Reproduction
Cần học
Keyframe animation
Skeletal animation
Skinning
Animation blending
Color space
Gamma correction
HDR
Tone mapping
Module 7: Lighting and Shadow
7.1 Lighting
Chủ đề
Light Source
Directional Light
Point Light
Spot Light
Infinite Light
Cần học
Ambient light
Diffuse light
Specular light
Light attenuation
Physically-based lighting
7.2 Shadow
Chủ đề
Shadow Map
2D Shadow Map
Cube Shadow Map
Cascaded Shadow Map
Stencil Shadow
Cần học
Shadow mapping
Depth buffer
Shadow acne
Peter panning
Soft shadow
Cascaded shadow for large scenes
7.3 Visibility and Occlusion
Chủ đề
Occluder
Culling
Clipping
Fog
Frustum
Polygon
Polyhedron
Light
Shadow
Ứng dụng
Tối ưu render
Không render vật thể ngoài camera
Không render vật thể bị che
Tạo sương mù
Tăng FPS
Module 8: Graphics API
Chủ đề
DirectX
OpenGL
WebGL
OpenGL ES
Metal
Vulkan
HLSL
GLSL
SPIR-V
Cần học
GPU pipeline
Buffer
Shader
Texture
Render pass
Command buffer
Swapchain
Shader language
Lộ trình gợi ý
Học OpenGL hoặc WebGL để hiểu nền tảng.
Học GLSL để viết shader.
Học Vulkan hoặc DirectX nếu muốn đi sâu engine/AAA.
Học Metal nếu làm game chuyên sâu cho Apple ecosystem.
Module 9: Game AI
9.1 Decision Making
Chủ đề
Decision Tree
State Machine
Behavior Tree
Fuzzy Logic
Markov System
Goal Oriented Behavior
Ứng dụng
Enemy AI
Boss behavior
NPC behavior
Patrol system
Combat logic
Quest behavior
9.2 Movement AI
Chủ đề
Movement
Pathfinding
Steering behavior
Nên học thêm
A*
NavMesh
Obstacle avoidance
Seek / flee / arrive
Formation movement
9.3 Board Game AI
Chủ đề
Minimax
Alpha-Beta Pruning
MCTS
Ứng dụng
Cờ caro
Cờ vua mini
Card game
Turn-based strategy
Puzzle game
Module 10: Machine Learning cho Game AI
Chủ đề
Naive Bayes Classifier
Decision Tree Learning
Deep Learning
Artificial Neural Network
Reinforcement Learning
Ứng dụng
Bot học cách chơi game
AI điều chỉnh độ khó
Procedural content generation
Player behavior prediction
NPC adaptive behavior
Module 11: Advanced Rendering
11.1 Real-time Ray Tracing
Chủ đề
DirectX Ray Tracing
Vulkan Ray Tracing
OptiX
Cần học
Ray generation
Acceleration structure
BVH
Reflection ray
Shadow ray
Global illumination cơ bản
11.2 Physically-Based Rendering
Chủ đề
Physically-Based Rendering
Translucency & Transparency
Conservation of Energy
Metallicity
Microsurface Scattering
Cần học
PBR material
Albedo
Roughness
Metallic
Normal map
Ambient occlusion
BRDF
IBL
Lộ trình học 6 tháng
Tháng 1: Nền tảng lập trình + toán game
C# hoặc C++
Vector, Matrix
Transform
Quaternion
Projection
Bezier / Spline
Project

Làm game 2D di chuyển nhân vật + camera follow.

Tháng 2: Game Engine cơ bản
Unity hoặc Godot
Scene
Object
Component
Physics
Animation
UI
Input
Project

Làm 2D Platformer hoặc Top-down Shooter.

Tháng 3: Physics + Collision
Rigidbody
Force
Friction
Collision
AABB / OBB
Spatial Partitioning
Project

Làm game Angry Birds mini hoặc physics puzzle.

Tháng 4: Graphics + Shader
Rendering pipeline
Shader
Texture
Lighting
Shadow
Camera
Post-processing
Project

Tạo scene 3D có lighting, shadow, material, shader đơn giản.

Tháng 5: Game AI
State Machine
Behavior Tree
Pathfinding
Minimax
MCTS
Goal-oriented behavior
Project

Làm enemy AI có patrol, chase, attack, flee.

Tháng 6: Portfolio hoàn chỉnh
Polish game
Main menu
Save/load
Sound effect
Build release
Deploy lên itch.io / Steam demo / mobile test
Project cuối khóa

Một game hoàn chỉnh nhỏ:

2D action platformer
Top-down RPG
Puzzle game
FPS prototype
Mobile casual game
Cấu trúc dữ liệu đã cào dạng JSON rút gọn
{
  "title": "Game Developer Roadmap",
  "source": "https://roadmap.sh/game-developer",
  "year": 2026,
  "modules": [
    {
      "name": "Game Mathematics",
      "topics": [
        "Linear Algebra",
        "Vector",
        "Matrix",
        "Linear Transformation",
        "Geometry",
        "Affine Space",
        "Affine Transformation",
        "Orientation",
        "Quaternion",
        "Euler Angle",
        "Curve",
        "Spline",
        "Hermite",
        "Bezier",
        "Catmull-Rom",
        "Projection",
        "Perspective",
        "Orthogonal"
      ]
    },
    {
      "name": "Game Physics",
      "topics": [
        "Dynamics",
        "Center of Mass",
        "Moment of Inertia",
        "Acceleration",
        "Joints",
        "Restitution",
        "Force",
        "Angular Velocity",
        "Buoyancy",
        "Linear Velocity",
        "Friction",
        "Collision Detection",
        "Narrow Phase",
        "Broad Phase",
        "Convexity",
        "SAT",
        "GJK",
        "EPA",
        "OBB",
        "AABB",
        "Bounding Volume",
        "Spatial Partitioning",
        "DBVT",
        "BVH",
        "CCD"
      ]
    },
    {
      "name": "Game Engine",
      "topics": [
        "Unity 3D",
        "Unreal Engine",
        "Godot",
        "Native"
      ]
    },
    {
      "name": "Programming Languages",
      "topics": [
        "C#",
        "C/C++",
        "GDScript",
        "Rust",
        "Python"
      ]
    },
    {
      "name": "Computer Graphics",
      "topics": [
        "Ray Tracing",
        "Rasterization",
        "Graphics Pipeline",
        "Sampling",
        "Shader",
        "Rendering Equation",
        "Reflection",
        "Diffuse",
        "Specular",
        "Texture",
        "Bump",
        "Parallax",
        "Horizon",
        "Computer Animation",
        "Color",
        "Visual Perception",
        "Tone Reproduction"
      ]
    },
    {
      "name": "Lighting and Shadow",
      "topics": [
        "Shadow Map",
        "2D",
        "Cube",
        "Cascaded",
        "Light Source",
        "Directional",
        "Point",
        "Spot",
        "Infinite",
        "Visibility and Occlusion",
        "Occluder",
        "Culling",
        "Clipping",
        "Fog",
        "Frustum",
        "Polygon",
        "Polyhedron",
        "Stencil Shadow"
      ]
    },
    {
      "name": "Graphics API",
      "topics": [
        "DirectX",
        "OpenGL",
        "WebGL",
        "OpenGL ES",
        "Metal",
        "Vulkan",
        "HLSL",
        "GLSL",
        "SPIR-V"
      ]
    },
    {
      "name": "Game AI",
      "topics": [
        "Decision Tree",
        "State Machine",
        "Behavior Tree",
        "Fuzzy Logic",
        "Markov System",
        "Goal Oriented Behavior",
        "Movement",
        "Minimax",
        "AB Pruning",
        "MCTS",
        "Naive Bayes Classifier",
        "Decision Tree Learning",
        "Deep Learning",
        "Artificial Neural Network",
        "Reinforcement Learning"
      ]
    },
    {
      "name": "Advanced Rendering",
      "topics": [
        "Real-time Ray Tracing",
        "DirectX Ray Tracing",
        "Vulkan Ray Tracing",
        "OptiX",
        "Physically-Based Rendering",
        "Translucency & Transparency",
        "Conservation of Energy",
        "Metallicity",
        "Microsurface Scattering"
      ]
    }
  ]
}
Gợi ý thứ tự học nhanh

Nếu học để làm game sớm:
Unity/Godot → C#/GDScript → Game Math cơ bản → Physics → AI cơ bản → Build game.

Nếu học để làm game engine / AAA:
C++ → Linear Algebra → Computer Graphics → OpenGL/Vulkan/DirectX → Physics → Engine Architecture → Advanced Rendering.

Nếu học để làm gameplay programmer:
Unity/Unreal → C#/C++ → Game Math → Physics → AI State Machine/Behavior Tree → Portfolio game.