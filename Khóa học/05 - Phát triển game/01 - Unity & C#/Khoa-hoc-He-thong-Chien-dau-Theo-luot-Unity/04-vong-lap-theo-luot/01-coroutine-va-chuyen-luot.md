# Bài 9. Coroutine và nhịp chuyển lượt

> **Đối chiếu video gốc:** 17:08–19:22  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Biết khi nào dùng `IEnumerator` và `StartCoroutine`.
- Tạo độ trễ thông báo mà không khóa game.
- Chuyển START → PLAYERTURN đúng thời điểm.

## 1. Vấn đề nếu gọi liên tiếp

Nếu thực thi SetupBattle, hiển thị thông báo, rồi lập tức gọi PlayerTurn trong cùng một frame, người chơi có thể **không kịp đọc** dòng “đối thủ xuất hiện!”.

## 2. Coroutine giải quyết ra sao?

Một coroutine cho phép một phương thức **tạm dừng, nhường quyền xử lý** rồi tiếp tục ở frame/thời điểm sau mà không chặn toàn bộ main thread. Nó **không phải** là thread riêng.

```csharp
private IEnumerator SetupBattle()
{
    // Spawn các Unit, cập nhật HUD, hiển thị thông báo ...
    yield return new WaitForSeconds(2f);
    state = BattleState.PLAYERTURN;
    PlayerTurn();
}
```

Kích hoạt:

```csharp
private void Start()
{
    state = BattleState.START;
    StartCoroutine(SetupBattle());
}
```

## 3. Quy tắc khi dùng Coroutine

- Hàm coroutine có kiểu trả về `IEnumerator`.
- `yield return new WaitForSeconds(2f)` chờ 2 giây tính theo **scaled time**.
- Không tự động chạy coroutine chỉ vì đã khai báo; cần `StartCoroutine(...)`.
- Đừng dùng vòng `while` chờ thời gian trực tiếp vì sẽ treo main thread.

## 4. PlayerTurn

```csharp
private void PlayerTurn()
{
    dialogueText.text = "Chọn hành động: Tấn công hoặc Hồi máu";
}
```

**Mở rộng kỹ thuật:** trò chơi có pause hoặc thay đổi `Time.timeScale` có thể dùng `WaitForSecondsRealtime` để chờ thời gian thực.

## Thực hành và tự kiểm tra
- [ ] Sau Play thấy thông báo xuất hiện, khoảng 2 giây sau mới hiện yêu cầu chọn hành động.
- [ ] Tự viết được phương thức IEnumerator đơn giản.
- [ ] Giải thích vì sao coroutine không có nghĩa là chạy trên một luồng riêng.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
