# 007 - Visual Novels - Dialogue Line

## Module

Module 03 - Dialogue System

## Thời lượng

19 phút 43 giây

## Nội dung bài học

Tạo `DialogueLine` dưới dạng `ScriptableObject` để lưu một dòng hội thoại, bao gồm tên người nói, nội dung, sprite nhân vật, vị trí hiển thị, voice clip, sound effect, loại animation và image mục tiêu.

## Điểm code cần giữ chắc

```csharp
[CreateAssetMenu(menuName = "Visual Novel/Dialogue Line")]
public class DialogueLine : ScriptableObject
{
    public string speakerName;
    [TextArea] public string dialogueText;
    public Sprite characterSprite;
    public AudioClip voiceClip;
    public AudioClip soundEffect;
    public DialogueAnimationType animationType;
}
```

## Việc cần làm

- [ ] Tạo class `DialogueLine`.
- [ ] Thêm `CreateAssetMenu`.
- [ ] Thêm field text, sprite, audio và animation.
- [ ] Tạo một vài asset dialogue line để test.

## Ghi chú cá nhân

-
