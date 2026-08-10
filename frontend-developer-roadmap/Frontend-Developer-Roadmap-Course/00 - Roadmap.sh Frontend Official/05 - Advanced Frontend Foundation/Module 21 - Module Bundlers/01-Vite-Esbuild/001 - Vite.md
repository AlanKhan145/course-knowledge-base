# 001 - Vite

**Hoc phan:** 05 - Advanced Frontend Foundation
**Module:** Module 21 - Module Bundlers
**Nguon roadmap:** 15. Module Bundlers
**Loai bai:** Lesson
**Thu tu trong module:** 001
**Thoi luong goi y:** 14 phut

---

## 1. Tom tat

Bai nay giai thich Vite trong boi canh lap trinh frontend hien dai. Sau bai hoc, ban nen hieu khai niem, biet vi sao no quan trong va co mot bai tap nho de dua vao project.

## 2. Muc tieu hoc tap

- Giai thich duoc Vite bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong mot project frontend.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Vite dung dev server ESM nhanh va build production qua bundler.
- No phu hop React, Vue, Svelte va nhieu stack frontend hien dai.
- Config can quan tam alias, env var, plugin va build output.

## 4. Vi du / Demo

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": "/src" },
  },
});
```

## 5. Bai tap thuc hanh

- Doc lai phan khai niem va viet 5 dong tom tat khong nhin tai lieu.
- Tao mot vi du nho trong project sandbox hoac ghi pseudo-code.
- Tim mot loi co the xay ra trong thuc te va viet cach debug.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Vite** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den project/frontend workflow nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Vite** la mot vien gach trong lo trinh frontend. Dung bai nay nhu mot diem neo: hieu khai niem, lam vi du nho, roi gan no vao project that de kien thuc khong bi roi rac.
