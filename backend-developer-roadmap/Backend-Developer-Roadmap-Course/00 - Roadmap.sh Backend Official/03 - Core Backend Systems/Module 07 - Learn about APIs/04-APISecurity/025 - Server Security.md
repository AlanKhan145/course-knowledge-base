# 025 - Server Security

**Hoc phan:** 03 - Core Backend Systems
**Module:** Module 07 - Learn about APIs
**Nhom noi dung:** Web Security
**Bai cha:** API Security Best Practices
**Nguon roadmap:** 7. Learn about APIs / Web Security / API Security Best Practices
**Loai bai:** Security
**Thu tu trong module:** 025
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **Server Security** trong nhom **API Security Best Practices** cua module **Learn about APIs**. Sau bai hoc, ban nen biet vai tro cua no va cach no xuat hien trong he thong backend.

## 2. Muc tieu hoc tap

- Giai thich duoc Server Security bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Server security gom patching, firewall, secret management, least privilege va logging.
- Khong de port/endpoint quan tri public neu khong can.
- Security tot la tap hop thoi quen nho trong code, infra va operation.

## 4. Vi du / Demo

```text
Threat -> Control -> Test -> Monitor
Example: password leak -> bcrypt + rate limit -> auth tests -> suspicious-login alert
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

- Toi co the giai thich **Server Security** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Server Security** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
