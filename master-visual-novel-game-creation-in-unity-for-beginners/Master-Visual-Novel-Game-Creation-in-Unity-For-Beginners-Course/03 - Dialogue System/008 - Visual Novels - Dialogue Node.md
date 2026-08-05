# 008 - Visual Novels - Dialogue Node

## Module

Module 03 - Dialogue System

## Thời lượng

11 phút 8 giây

## Nội dung bài học

Tạo `DialogueNode` để gom nhiều `DialogueLine`, lưu danh sách lựa chọn, trỏ đến node tiếp theo hoặc scene tiếp theo. Node giúp tách dữ liệu câu chuyện khỏi `DialogueManager`.

## Cấu trúc khái quát

```text
DialogueNode
|-- DialogueLine[]
|-- Choice[]
|-- NextDialogueNode
`-- NextScene
```

## Việc cần làm

- [ ] Tạo `DialogueNode`.
- [ ] Tạo cấu trúc choice.
- [ ] Thêm danh sách dialogue lines.
- [ ] Thêm next node hoặc next scene.
- [ ] Tạo node test có ít nhất một lựa chọn.

## Ghi chú cá nhân

-
