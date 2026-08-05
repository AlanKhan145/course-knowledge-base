# Course Index

## Master Visual Novel Game Creation in Unity: For Beginners

Khóa học này xây dựng một hệ thống visual novel bằng Unity và C# từ đầu. Trọng tâm là tự lập trình dialogue engine dựa trên dữ liệu, UI hội thoại, lựa chọn phân nhánh, animation nhân vật, chuyển scene, save/load JSON và build WebGL.

## Mục tiêu đầu ra

Sau khóa học, bạn nên có thể:

- Tạo project Unity 2D cho visual novel.
- Thiết kế flowchart và chia cốt truyện thành scene/node.
- Tạo `ScriptableObject` cho `DialogueLine`, `DialogueNode` và choice.
- Hiển thị tên nhân vật, lời thoại, sprite, voice và sound effect.
- Tạo typewriter effect bằng coroutine và TextMesh Pro.
- Sinh choice button động từ dữ liệu hội thoại.
- Điều khiển animation nhân vật bằng Animator trigger.
- Tạo fade transition giữa scene.
- Thiết kế main menu có Start, Load, website và Quit.
- Lưu flags, variables, names và scene hiện tại bằng JSON.
- Build WebGL và chuẩn bị upload itch.io.

## Tài liệu trong khóa

- [SYLLABUS.md](SYLLABUS.md): mục lục đầy đủ theo module và bài.
- [LEARNING_PLAN_6_WEEKS.md](LEARNING_PLAN_6_WEEKS.md): lịch học 6 tuần.
- [PROJECT_BRIEFS.md](PROJECT_BRIEFS.md): brief kiến trúc project cuối khóa.
- [PRACTICE_CHECKLIST.md](PRACTICE_CHECKLIST.md): checklist kỹ năng Unity/C#.

## Danh sách module

| Module | Nội dung | Bài học | Thời lượng | Sản phẩm |
| --- | --- | ---: | --- | --- |
| 01 - Introduction | Concept visual novel, plot và flowchart | 4 | 39 phút | Story plan và flowchart |
| 02 - Unity Basics and Import Assets | Unity Hub, project 2D, import asset | 2 | 21 phút | Unity project đã tổ chức thư mục |
| 03 - Dialogue System | Dialogue data, manager, UI, typewriter, audio, choices | 18 | 3 giờ 32 phút | Dialogue engine dựa trên node |
| 04 - Animations | Image animation, Animator state, trigger và alpha fix | 7 | 1 giờ 24 phút | Animation system cho nhân vật |
| 05 - Scene Transitions | Fade transition và scene switching | 2 | 35 phút | SceneTransitionManager |
| 06 - Main Menu Scene | UI main menu và chức năng nút | 2 | 38 phút | Main menu chạy được |
| 07 - Creating Dialogues Tips and Fixes | Nội dung thật, background music, bug fixes | 3 | 38 phút | Project ổn định hơn |
| 08 - Save and Load Game Progress | GameProgress, JSON save/load, continue | 6 | 1 giờ 24 phút | Save/load system |
| 09 - WebGL Build and Conclusion | Build WebGL, itch.io và tổng kết | 2 | 30 phút | WebGL demo |

## Đường học khuyến nghị

1. Vẽ flowchart trước khi viết code, vì dialogue engine cần dữ liệu rõ.
2. Khi học module 03, commit hoặc sao lưu sau mỗi nhóm bài UI/typewriter/audio/choices.
3. Ở module 04, giữ tên Animator trigger nhất quán với enum trong code.
4. Ở module 08, test save/load bằng nhiều điểm truyện khác nhau, không chỉ một scene.
5. Sau khi build WebGL, test trong browser vì hành vi file system khác editor.
