# Bài 4. Viết Unit.cs: dữ liệu, sát thương và hồi máu

> **Đối chiếu video gốc:** 05:05–07:08; 21:21–22:39; 26:38–27:04  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Khai báo dữ liệu cơ bản của một chiến binh.
- Cài hàm `TakeDamage` trả về kết quả tử trận.
- Cài hàm `Heal` có giới hạn HP tối đa.

## 1. Cấu trúc dữ liệu

Tạo script `Unit.cs` và gắn vào GameObject gốc của nhân vật. Những trường trong video:

```csharp
public string unitName;
public int unitLevel;
public int damage;
public int maxHP;
public int currentHP;
```

Trong Inspector, ta sẽ cấu hình các chỉ số theo từng Prefab. `currentHP` là máu đang còn, không nhất thiết bằng `maxHP` khi trận bắt đầu.

## 2. Quy tắc nhận sát thương

Cần trả về `true` khi HP ≤ 0 để `BattleSystem` biết có nên kết thúc trận hay không. Trong bản biên soạn, HP được chặn không âm:

```csharp
public bool TakeDamage(int amount)
{
    currentHP = Mathf.Max(0, currentHP - Mathf.Max(0, amount));
    return currentHP <= 0;
}
```

**Vì sao nên return bool?** `BattleSystem` không phải trực tiếp chỉnh sửa các phép tính máu, chỉ cần biết kết quả để chuyển state.

## 3. Quy tắc hồi máu

```csharp
public void Heal(int amount)
{
    currentHP = Mathf.Min(maxHP, currentHP + Mathf.Max(0, amount));
}
```

Trong video, Heal luôn hồi **5 điểm**, việc giới hạn về `maxHP` là bắt buộc.

## 4. Kỹ thuật kiểm tra

| Trước hành động | Hành động | Kết quả |
|---:|---:|---:|
| HP 20/25 | Heal(5) | HP 25/25 |
| HP 24/25 | Heal(5) | HP 25/25 |
| HP 5/30 | TakeDamage(5) | HP 0/30, `true` |
| HP 8/30 | TakeDamage(5) | HP 3/30, `false` |

Toàn bộ script được cung cấp tại `07-phu-luc-ma-nguon/01-unit-cs.md`.

## Thực hành và tự kiểm tra
- [ ] Tạo script Unit.cs và biên dịch không lỗi.
- [ ] Thử thay currentHP trong Inspector và dự đoán kết quả Attack/Heal.
- [ ] Giải thích được sự khác nhau giữa `maxHP` và `currentHP`.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
