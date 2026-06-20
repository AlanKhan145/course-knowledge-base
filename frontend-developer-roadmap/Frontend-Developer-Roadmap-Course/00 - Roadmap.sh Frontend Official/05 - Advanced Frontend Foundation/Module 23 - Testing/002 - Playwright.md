# 002 - Playwright

**Hoc phan:** 05 - Advanced Frontend Foundation
**Module:** Module 23 - Testing
**Nguon roadmap:** 17. Testing
**Loai bai:** Lesson
**Thu tu trong module:** 002
**Thoi luong goi y:** 14 phut

---

## 1. Tom tat

Bai nay giai thich Playwright trong boi canh lap trinh frontend hien dai. Sau bai hoc, ban nen hieu khai niem, biet vi sao no quan trong va co mot bai tap nho de dua vao project.

## 2. Muc tieu hoc tap

- Giai thich duoc Playwright bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong mot project frontend.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Playwright dung de kiem thu end-to-end tren browser that.
- No co locator manh, auto-wait va trace viewer.
- E2E test nen tap trung critical path thay vi test moi chi tiet nho.

## 4. Vi du / Demo

```ts
import { test, expect } from "@playwright/test";

test("user can open the pricing page", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByRole("heading", { name: "Pricing" })).toBeVisible();
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

- Toi co the giai thich **Playwright** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den project/frontend workflow nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Playwright** la mot vien gach trong lo trinh frontend. Dung bai nay nhu mot diem neo: hieu khai niem, lam vi du nho, roi gan no vao project that de kien thuc khong bi roi rac.
