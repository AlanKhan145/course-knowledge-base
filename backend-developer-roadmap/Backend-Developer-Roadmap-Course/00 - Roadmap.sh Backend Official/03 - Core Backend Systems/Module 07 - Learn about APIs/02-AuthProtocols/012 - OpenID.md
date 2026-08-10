# 012 - OpenID

**Hoc phan:** 03 - Core Backend Systems
**Module:** Module 07 - Learn about APIs
**Nhom noi dung:** Authentication
**Nguon roadmap:** 7. Learn about APIs / Authentication
**Loai bai:** Auth
**Thu tu trong module:** 012
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **OpenID** trong boi canh backend hien dai. Sau bai hoc, ban nen nam khai niem, biet vi sao no quan trong va co mot bai tap nho de ap dung.

## 2. Muc tieu hoc tap

- Giai thich duoc OpenID bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- OpenID Connect xay tren OAuth 2.0 de xac thuc danh tinh nguoi dung.
- ID token chua thong tin identity va duoc ky boi provider.
- Can validate issuer, audience, signature va expiry.

## 4. Vi du / Demo

```http
Authorization: Bearer <access_token>
Cookie: session=<session_id>; HttpOnly; Secure; SameSite=Lax
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho trong sandbox backend hoac ghi pseudo-code.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Tu viet crypto/auth flow khi chua du kinh nghiem.
- Luu secret/token/password sai cho de debug.
- Khong test authorization edge cases.

## 7. Checklist hoan thanh

- Toi co the giai thich **OpenID** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**OpenID** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
