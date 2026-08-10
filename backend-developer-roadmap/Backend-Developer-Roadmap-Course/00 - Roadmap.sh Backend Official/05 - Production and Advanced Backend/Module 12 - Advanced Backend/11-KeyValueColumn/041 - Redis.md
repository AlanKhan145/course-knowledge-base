# 041 - Redis

**Hoc phan:** 05 - Production and Advanced Backend
**Module:** Module 12 - Advanced Backend
**Nhom noi dung:** NoSQL Databases
**Bai cha:** Key-Value
**Nguon roadmap:** 12. Advanced Backend / NoSQL Databases / Key-Value
**Loai bai:** Database
**Thu tu trong module:** 041
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **Redis** trong nhom **Key-Value** cua module **Advanced Backend**. Sau bai hoc, ban nen biet vai tro cua no va cach no xuat hien trong he thong backend.

## 2. Muc tieu hoc tap

- Giai thich duoc Redis bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Redis la in-memory data store dung cho cache, session, queue nhe va rate limit.
- Can cau hinh TTL, eviction policy va persistence theo use case.
- Redis nhanh nhung khong thay database chinh cho moi loai data.

## 4. Vi du / Demo

```redis
SET session:123 "{userId:42}" EX 3600
GET session:123
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho trong sandbox backend hoac ghi pseudo-code.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Chon database theo xu huong thay vi access pattern.
- Bo qua index, migration va backup plan.
- Khong do query performance truoc khi toi uu.

## 7. Checklist hoan thanh

- Toi co the giai thich **Redis** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Redis** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
