# 003 - Shadow DOM

**Hoc phan:** 07 - Advanced Capstones and Platform
**Module:** Module 33 - Web Components
**Nguon roadmap:** 27. Web Components
**Loai bai:** Lesson
**Thu tu trong module:** 003
**Thoi luong goi y:** 14 phut

---

## 1. Tom tat

Bai nay giai thich Shadow DOM trong boi canh lap trinh frontend hien dai. Sau bai hoc, ban nen hieu khai niem, biet vi sao no quan trong va co mot bai tap nho de dua vao project.

## 2. Muc tieu hoc tap

- Giai thich duoc Shadow DOM bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong mot project frontend.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Shadow DOM dong goi DOM va style ben trong component.
- No giup style isolation nhung can quan tam accessibility va theming.
- slot cho phep nguoi dung component chen noi dung vao shadow tree.

## 4. Vi du / Demo

```js
const shadow = this.attachShadow({ mode: "open" });
shadow.innerHTML = `
  <style>:host { display: block; }</style>
  <slot></slot>
`;
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

- Toi co the giai thich **Shadow DOM** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den project/frontend workflow nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Shadow DOM** la mot vien gach trong lo trinh frontend. Dung bai nay nhu mot diem neo: hieu khai niem, lam vi du nho, roi gan no vao project that de kien thuc khong bi roi rac.
