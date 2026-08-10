# 002 - Caddy

**Hoc phan:** 03 - Core Backend Systems
**Module:** Module 09 - Learn about Web Servers
**Nhom noi dung:** Web servers
**Nguon roadmap:** 9. Learn about Web Servers / Web servers
**Loai bai:** Web Server
**Thu tu trong module:** 002
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **Caddy** trong boi canh backend hien dai. Sau bai hoc, ban nen nam khai niem, biet vi sao no quan trong va co mot bai tap nho de ap dung.

## 2. Muc tieu hoc tap

- Giai thich duoc Caddy bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Caddy la web server/reverse proxy co HTTPS tu dong rat tien.
- Config don gian, phu hop project nho va deploy nhanh.
- Can hieu reverse_proxy, TLS automation va logging.

## 4. Vi du / Demo

```caddyfile
api.example.com {
  reverse_proxy localhost:3000
}
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho trong sandbox backend hoac ghi pseudo-code.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Caddy** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Caddy** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
