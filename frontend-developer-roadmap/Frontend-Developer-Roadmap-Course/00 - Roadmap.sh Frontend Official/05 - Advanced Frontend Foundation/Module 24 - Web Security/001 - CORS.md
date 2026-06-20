# 001 - CORS

**Hoc phan:** 05 - Advanced Frontend Foundation
**Module:** Module 24 - Web Security
**Nguon roadmap:** 18. Web Security
**Loai bai:** Lesson
**Thu tu trong module:** 001
**Thoi luong goi y:** 14 phut

---

## 1. Tom tat

Bai nay giai thich CORS trong boi canh lap trinh frontend hien dai. Sau bai hoc, ban nen hieu khai niem, biet vi sao no quan trong va co mot bai tap nho de dua vao project.

## 2. Muc tieu hoc tap

- Giai thich duoc CORS bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong mot project frontend.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- CORS la co che browser chan/cho phep request cross-origin.
- Server quyet dinh origin, method va header nao duoc phep.
- Preflight OPTIONS xay ra voi request khong don gian.

## 4. Vi du / Demo

```http
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
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

- Toi co the giai thich **CORS** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den project/frontend workflow nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**CORS** la mot vien gach trong lo trinh frontend. Dung bai nay nhu mot diem neo: hieu khai niem, lam vi du nho, roi gan no vao project that de kien thuc khong bi roi rac.
