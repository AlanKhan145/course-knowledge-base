# 032 - Visual Novels - Scene Transitions

## Module

Module 05 - Scene Transitions

## Thời lượng

21 phút 22 giây

## Nội dung bài học

Tạo image phủ toàn màn hình, hiệu ứng fade in/out, coroutine, `SceneTransitionManager`, singleton tồn tại giữa các scene, tải scene mới sau fade out và hiện scene sau bằng fade in.

## Luồng xử lý

```text
Yêu cầu đổi scene
  -> Fade Out
  -> SceneManager.LoadScene()
  -> Scene mới được tải
  -> Fade In
```

## Việc cần làm

- [ ] Tạo fullscreen fade image.
- [ ] Tạo coroutine fade out.
- [ ] Tạo coroutine fade in.
- [ ] Tạo `SceneTransitionManager`.
- [ ] Áp dụng singleton hoặc DontDestroyOnLoad.
- [ ] Test chuyển scene.

## Ghi chú cá nhân

-
