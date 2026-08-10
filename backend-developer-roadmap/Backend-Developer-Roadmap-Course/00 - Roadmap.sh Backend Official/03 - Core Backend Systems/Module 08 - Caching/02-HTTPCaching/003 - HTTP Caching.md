# 003 - HTTP Caching

**Hoc phan:** 03 - Core Backend Systems
**Module:** Module 08 - Caching
**Nhom noi dung:** Lessons
**Nguon roadmap:** 8. Caching / Lessons
**Loai bai:** Lesson
**Thu tu trong module:** 003
**Thoi luong goi y:** 14 phut

---

## 1. Tom tat

Bai nay giai thich **HTTP Caching** trong boi canh backend hien dai. Sau bai hoc, ban nen nam khai niem, biet vi sao no quan trong va co mot bai tap nho de ap dung.

## 2. Muc tieu hoc tap

- Giai thich duoc HTTP Caching bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- HTTP caching dung header de browser/CDN/server cache response.
- Cache-Control, ETag va Last-Modified la cac header quan trong.
- Sai cache co the lam user thay data cu hoac lam backend qua tai.

## 4. Vi du / Demo

```http
Cache-Control: public, max-age=60, stale-while-revalidate=300
ETag: "users-v42"
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

- Toi co the giai thich **HTTP Caching** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**HTTP Caching** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
