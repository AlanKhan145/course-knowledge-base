# Project Briefs

## Project chính - Unity Visual Novel Engine

### Mục tiêu

Xây dựng một visual novel hoàn chỉnh trong Unity bằng C#, không dựa vào framework visual novel có sẵn. Project tập trung vào engine dialogue dựa trên dữ liệu, UI, lựa chọn phân nhánh, animation sprite, audio, scene transition, save/load và WebGL build.

### Kiến trúc

```text
Unity Visual Novel
|
|-- Data
|   |-- DialogueLine
|   |-- DialogueNode
|   `-- DialogueChoice
|
|-- Dialogue System
|   |-- DialogueManager
|   |-- Typewriter Coroutine
|   |-- Choice Generator
|   |-- Audio Controller
|   `-- Animation Dispatcher
|
|-- User Interface
|   |-- Dialogue Box
|   |-- Speaker Name
|   |-- Character Images
|   |-- Choice Panel
|   |-- Progress Button
|   `-- Main Menu
|
|-- Progress
|   |-- Boolean Flags
|   |-- Integer Variables
|   |-- String Values
|   `-- Current Scene
|
`-- Release
    |-- WebGL Build
    `-- itch.io Upload
```

### Luồng chạy

```text
Main Menu
  -> Start hoặc Load
  -> Tải DialogueNode
  -> Hiển thị từng DialogueLine
  -> Chạy typewriter + audio + animation
  -> Có lựa chọn?
     -> Không: dòng tiếp theo hoặc node tiếp theo
     -> Có: sinh Choice Button và chuyển node theo lựa chọn
  -> Tự động lưu
  -> Chuyển scene bằng fade
```

### Điều kiện hoàn thành

- Có main menu chạy được.
- Có dialogue system dựa trên `ScriptableObject`.
- Có ít nhất một chuỗi dialogue nhiều node.
- Có choices động và phân nhánh.
- Có typewriter effect.
- Có animation nhân vật.
- Có nhạc nền, voice clip hoặc sound effect.
- Có transition giữa scene.
- Có save/load JSON.
- Có WebGL build test được trong browser.

## Project mở rộng sau khóa học

- Affection system nhiều nhân vật.
- Backlog hội thoại.
- Auto mode và skip mode.
- Save nhiều slot kèm thumbnail.
- CG Gallery.
- Character Profile.
- Route lock và true ending.
- Import dialogue từ CSV hoặc Google Sheets.
- Localization đa ngôn ngữ.
