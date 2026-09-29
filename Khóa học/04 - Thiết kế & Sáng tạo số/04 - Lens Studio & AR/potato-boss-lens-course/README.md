# Khóa học: Tạo Lens “Potato Boss Style” với Lens Studio

Khóa học này được biên soạn lại bằng tiếng Việt từ tutorial **Make your own Potato Boss style lens for Snapchat and Snap Camera** của AR Bootcamp và transcript do người học cung cấp.

> Tutorial gốc được thực hiện với **Lens Studio 3.3**. Một số tên menu hoặc workflow có thể khác ở các phiên bản Lens Studio mới hơn.

## Mục tiêu cuối khóa

Sau khi hoàn thành, bạn có thể:

- Chuẩn bị một model 3D có rig đơn giản để gắn lên đầu người dùng.
- Dùng **Head Binding** để model bám theo chuyển động đầu.
- Dùng **Face Inset** để đưa mắt và miệng thật lên model 3D.
- Hiểu và áp dụng `SmoothFollow.js` + `vec3.lerp()` để tạo chuyển động trễ/wobble.
- Tách bone cần wobble ra khỏi Head Binding để script có tác dụng.
- Thiết lập background bằng **Screen Image + Orthographic Camera + Render Target**.
- Tạo thêm chế độ **greenscreen** và chuyển đổi bằng Behavior script.

## Cấu trúc khóa học

1. `lessons/01-tong-quan-va-chuan-bi.md`
2. `lessons/02-rig-model-3d.md`
3. `lessons/03-head-binding-va-face-inset.md`
4. `lessons/04-smooth-follow-va-lerp.md`
5. `lessons/05-ap-dung-wobble-vao-rig.md`
6. `lessons/06-background-va-render-target.md`
7. `lessons/07-greenscreen-va-behavior.md`
8. `lessons/08-hoan-thien-va-kiem-tra.md`
9. `lessons/09-bai-tap-on-tap.md`

## Tài nguyên kèm theo

- `scripts/SmoothFollow.js`: script dùng trong tutorial.
- `images/`: thư mục dành cho ảnh minh họa từ trang nguồn.
- `download_images.ps1`: tải toàn bộ ảnh nguồn trên Windows PowerShell.
- `download_images.py`: bản Python tương đương.
- `sources/transcript-vi.md`: transcript gốc người dùng cung cấp.
- `sources/source-links.md`: link tutorial, video, GitHub và ảnh gốc.

## Cách tải ảnh minh họa

Trong môi trường đóng gói hiện tại, trang AR Bootcamp cho phép xem ảnh qua trình duyệt nhưng chặn việc tải binary trực tiếp vào sandbox. Vì vậy ZIP có sẵn script tải **đúng các URL ảnh gốc**.

Trên Windows, mở PowerShell tại thư mục khóa học và chạy:

```powershell
powershell -ExecutionPolicy Bypass -File .\download_images.ps1
```

Hoặc nếu có Python:

```bash
python download_images.py
```

Sau khi tải xong, các ảnh sẽ nằm trong `images/` và các đường dẫn ảnh trong bài học sẽ hoạt động offline.

## Nguồn

- AR Bootcamp: https://arbootcamp.com/snapchat-intermediate/potato-boss-style
- SmoothFollow.js: https://github.com/FrozenAtlas/OLC-Repo/blob/master/Projects%20and%20Templates/SmoothFollow/Public/SmoothFollow.js
- Video tutorial: https://www.youtube.com/watch?v=FGOfYiV3OSM
