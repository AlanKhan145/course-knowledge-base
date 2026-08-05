# Syllabus

## Thông tin tổng quan

| Nội dung | Thông tin |
| --- | --- |
| Tên khóa học | Master Visual Novel Game Creation in Unity: For Beginners |
| Giảng viên | Octo Man |
| Cập nhật gần nhất | Tháng 1/2025 |
| Ngôn ngữ | Tiếng Anh |
| Phụ đề | Tiếng Anh tự động |
| Cấp độ | Người mới bắt đầu |
| Số module | 9 |
| Số bài học | 46 |
| Tổng thời lượng | 9 giờ 39 phút |
| Công nghệ | Unity, C#, TextMesh Pro, ScriptableObject, JSON, WebGL |

Ghi chú: tại thời điểm nội dung được cung cấp, trang Udemy hiển thị điểm 4,2/5, 23 lượt đánh giá và 295 học viên. Các con số này có thể thay đổi theo thời gian.

## Module 01 - Introduction

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 001 | Introduction | 05:29 | Tổng quan project, dialogue, save/load, scene, animation và audio |
| 002 | Visual Novels - Conzept | 12:42 | Concept visual novel, flowchart, typewriter và ScriptableObject |
| 003 | Visual Novels - The Plot | 11:11 | Viết plot ngắn, nhân vật, lựa chọn và scene |
| 004 | Visual Novels - The Flow Chart | 09:09 | Node quyết định, điểm lưu, Boolean và dictionary |

## Module 02 - Unity Basics and Import Assets

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 005 | Visual Novels - Unity Overview | 15:08 | Unity Hub, project 2D, Project, Hierarchy, Scene, Inspector, Game View |
| 006 | Visual Novels - Importing Assets | 05:50 | Import asset, Textures, UI, backgrounds, sprites, Scripts và Prefabs |

## Module 03 - Dialogue System

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 007 | Visual Novels - Dialogue Line | 19:43 | `DialogueLine` ScriptableObject cho speaker, text, sprite, audio và animation |
| 008 | Visual Novels - Dialogue Node | 11:08 | `DialogueNode`, lines, choices, next node và next scene |
| 009 | Visual Novels - Dialogue Manager #1 | 11:54 | TextMesh Pro, speaker, dialogue, sprite positions, type speed, AudioSource |
| 010 | Visual Novels - Dialogue Manager UI #1 | 12:34 | Canvas, dialogue panel, name field và text field |
| 011 | Visual Novels - Dialogue Manager UI #2 | 13:15 | Texture UI, Sprite Editor, dialogue box, panels và name box |
| 012 | Visual Novels - Dialogue Manager UI #3 | 09:07 | Background, three character zones, Canvas order, 16:9 anchors |
| 013 | Visual Novels - Dialogue Manager UI #4 | 04:51 | Responsive dialogue panel, Canvas Scaler và choice panel |
| 014 | Visual Novels - Dialogue Manager UI #5 | 11:27 | Choice button prefab, VerticalLayoutGroup và ContentSizeFitter |
| 015 | Visual Novels - DM #2 | 07:35 | Tiếp tục logic DialogueManager |
| 016 | Visual Novels - DM #3 | 15:30 | Xử lý dòng hội thoại, hình ảnh và trạng thái |
| 017 | Visual Novels - DM #4 | 14:33 | Chuẩn bị cho typewriter |
| 018 | Visual Novels - DM #5 Type Writer | 15:44 | Coroutine typewriter và rich text |
| 019 | Visual Novels - DM #6 Testing Type Writer | 10:37 | Test coroutine, sprite target và tag màu |
| 020 | Visual Novels - DM #7 Playing Audio | 13:49 | Voice clip, sound effect và đồng bộ audio |
| 021 | Visual Novels - DM #8 Progress Button | 08:36 | Progress button, skip typewriter và chuyển line/node |
| 022 | Visual Novels - DM #9 Display Choises | 15:27 | Choice buttons, callback, next node và cleanup |
| 023 | Visual Novels - DM #10 End Dialogue | 07:26 | Clear UI, hide panel, stop audio và next scene |
| 024 | Visual Novels - DM #11 Play Animations | 08:34 | Enum animation, Animator trigger, Enter/Exit/Jump/Shake/Scale/Rotate/Float |

## Module 04 - Animations

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 025 | Image Animation - Part 1 | 13:43 | Parent object, pivot, alpha và clip chuẩn bị |
| 026 | Image Animation - Part 2 | 14:13 | Enter left/right, keyframe, position, alpha và easing |
| 027 | Image Animation - Part 3 | 14:56 | Exit animation, reverse keyframes và float |
| 028 | Image Animation - Part 4 | 10:28 | Scale, bounce, enter/exit hoàn chỉnh |
| 029 | Visual Novels - Animator Setup | 13:09 | Animator state machine, trigger và transition |
| 030 | Visual Novels - Fixing Alpha | 14:33 | Alpha 0/1 states, transition fix và chống nhấp nháy |
| 031 | Visual Novels - Floating State | 02:29 | Floating trigger trong DialogueLine và DialogueManager |

## Module 05 - Scene Transitions

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 032 | Visual Novels - Scene Transitions | 21:22 | Fullscreen overlay, fade, coroutine, singleton và LoadScene |
| 033 | Visual Novels - Using Transitions | 13:48 | Kết nối dialogue node với scene và act |

## Module 06 - Main Menu Scene

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 034 | Visual Novels - Design Main Scene | 20:07 | Main menu canvas, title, Start, Instructions, website, Quit |
| 035 | Visual Novels - Main Menu Functions | 17:29 | onClick, start game, transition, website và quit |

## Module 07 - Creating Dialogues & Tips and Fixes

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 036 | Visual Novels - Dialogues & Code Update | 23:08 | Nội dung thật, act, scene naming, node endings và code update |
| 037 | Visual Novels - Background Music & Mixer | 08:22 | AudioSource, Audio Mixer, Master Group và subgroups |
| 038 | Visual Novels - Minor Fixes | 06:41 | `isTyping`, placeholder cleanup và ổn định progress |

## Module 08 - Save and Load Game Progress

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 039 | Visual Novels - GameProgress | 23:49 | Static progress, flags, variables, names và dictionaries |
| 040 | Visual Novels - Save System | 16:40 | `SaveData`, `[Serializable]`, JSON, System.IO và save path |
| 041 | Visual Novels - Load Progress | 13:24 | File exists, read JSON, restore dictionaries |
| 042 | Visual Novels - Saving | 18:49 | Auto-save tại node, save keys và WebGL compatibility |
| 043 | Visual Novels - Loading | 07:49 | Load button, saved scene và continue |
| 044 | Visual Novels - Choises Button Bug | 03:40 | Sửa cleanup choice panel |

## Module 09 - WebGL Build & Conclusion

| Bài | Tên bài | Thời lượng | Trọng tâm |
| --- | --- | --- | --- |
| 045 | Visual Novels - WebGL Build | 20:06 | Switch platform, Player Settings, build, zip và itch.io |
| 046 | Visual Novels - Conclusion | 09:46 | Tổng kết main menu, dialogue, audio, choices, animation, save/load và WebGL |

## Phạm vi khóa học

Khóa học mạnh ở phần lập trình hệ thống visual novel trong Unity: dialogue engine bằng C#, dữ liệu bằng ScriptableObject, choices động, typewriter, audio theo dòng, animation điều khiển từ dữ liệu, scene transition, flags/variables, JSON save/load và WebGL deployment.

Các chủ đề chưa thấy thành bài riêng gồm affection system nhiều nhân vật, route lock phức tạp, bad/normal/true ending, backlog, auto/skip mode, rollback, CG gallery, music room, character profile, save nhiều slot có thumbnail, localization, nhập tên người chơi, map chọn địa điểm, inventory/quest, node editor trực quan, importer từ CSV/Google Sheets, mobile/Steam build và unit test cho dialogue system.
