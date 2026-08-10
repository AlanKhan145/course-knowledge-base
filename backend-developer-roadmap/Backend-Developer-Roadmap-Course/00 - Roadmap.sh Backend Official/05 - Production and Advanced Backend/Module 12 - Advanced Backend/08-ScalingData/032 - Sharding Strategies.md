# 032 - Sharding Strategies

**Hoc phan:** 05 - Production and Advanced Backend
**Module:** Module 12 - Advanced Backend
**Nhom noi dung:** Scaling Databases
**Nguon roadmap:** 12. Advanced Backend / Scaling Databases
**Loai bai:** Database
**Thu tu trong module:** 032
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **Sharding Strategies** trong boi canh backend hien dai. Sau bai hoc, ban nen nam khai niem, biet vi sao no quan trong va co mot bai tap nho de ap dung.

## 2. Muc tieu hoc tap

- Giai thich duoc Sharding Strategies bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Sharding chia data ra nhieu node theo key hoac rule.
- Giup scale write/storage nhung tang complexity query va operation.
- Can chon shard key can than de tranh hot shard.

## 4. Vi du / Demo

```sql
-- Read the query plan before optimizing
EXPLAIN ANALYZE
SELECT * FROM orders WHERE user_id = 'u_123';
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

- Toi co the giai thich **Sharding Strategies** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Sharding Strategies** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
