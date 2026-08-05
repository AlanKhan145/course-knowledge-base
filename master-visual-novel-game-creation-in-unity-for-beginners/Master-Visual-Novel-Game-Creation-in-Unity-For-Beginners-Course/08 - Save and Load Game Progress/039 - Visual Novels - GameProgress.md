# 039 - Visual Novels - GameProgress

## Module

Module 08 - Save and Load Game Progress

## Thời lượng

23 phút 49 giây

## Nội dung bài học

Tạo lớp `GameProgress` dùng toàn game để lưu cờ Boolean, biến số, tên/chuỗi, dictionary và giữ trạng thái xuyên suốt nhiều scene.

## Điểm code cần giữ chắc

```csharp
public static class GameProgress
{
    public static Dictionary<string, bool> Flags = new();
    public static Dictionary<string, int> Variables = new();
    public static Dictionary<string, string> Names = new();
}
```

## Việc cần làm

- [ ] Tạo `GameProgress`.
- [ ] Thêm dictionary flags.
- [ ] Thêm dictionary variables.
- [ ] Thêm dictionary names.
- [ ] Viết helper đọc/ghi nếu cần.
- [ ] Test dữ liệu còn sau khi đổi scene.

## Ghi chú cá nhân

-
