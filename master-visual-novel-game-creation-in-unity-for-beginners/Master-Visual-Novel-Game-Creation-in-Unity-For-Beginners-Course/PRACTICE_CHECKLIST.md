# Practice Checklist

## Planning

- [ ] Viết plot visual novel ngắn.
- [ ] Chia plot thành act và scene.
- [ ] Vẽ flowchart có node hội thoại và node quyết định.
- [ ] Xác định điểm save và scene chuyển tiếp.

## Unity Setup

- [ ] Tạo project Unity 2D.
- [ ] Cấu hình Canvas cho tỉ lệ 16:9.
- [ ] Import background, sprite, UI texture và audio.
- [ ] Tổ chức thư mục `Scripts`, `Prefabs`, `Textures`, `Audio`, `DialogueData`.

## Dialogue Data

- [ ] Tạo `DialogueLine`.
- [ ] Tạo `DialogueNode`.
- [ ] Tạo cấu trúc choice.
- [ ] Tách dữ liệu truyện khỏi `DialogueManager`.
- [ ] Tạo vài node test có next node và choices.

## Dialogue UI

- [ ] Dialogue box.
- [ ] Speaker name box.
- [ ] Dialogue text bằng TextMesh Pro.
- [ ] Character image trái, giữa, phải.
- [ ] Choice panel.
- [ ] Choice button prefab.
- [ ] Progress button.

## Dialogue Manager

- [ ] Hiển thị line hiện tại.
- [ ] Hiển thị sprite đúng vị trí.
- [ ] Typewriter effect.
- [ ] Skip typewriter khi bấm tiếp tục.
- [ ] Phát voice clip.
- [ ] Phát sound effect.
- [ ] Sinh choice button động.
- [ ] Chuyển node sau khi chọn.
- [ ] Kết thúc dialogue đúng cách.

## Animation

- [ ] Enter.
- [ ] Exit.
- [ ] Jump.
- [ ] Shake.
- [ ] Scale.
- [ ] Rotate.
- [ ] Float.
- [ ] Alpha 0/1 states.
- [ ] Animator triggers khớp enum trong code.

## Scene and Menu

- [ ] Fade in/out transition.
- [ ] SceneTransitionManager singleton.
- [ ] Main menu scene.
- [ ] Start game.
- [ ] Load game.
- [ ] Open website.
- [ ] Quit game.

## Save and Load

- [ ] `GameProgress` giữ flags.
- [ ] `GameProgress` giữ variables.
- [ ] `GameProgress` giữ names/current scene.
- [ ] `SaveData` serializable.
- [ ] Save JSON.
- [ ] Load JSON.
- [ ] Continue từ scene đã lưu.
- [ ] Load button tắt khi chưa có save.

## Release

- [ ] Build WebGL.
- [ ] Test WebGL trong browser.
- [ ] Nén build thành ZIP.
- [ ] Chuẩn bị upload itch.io.
