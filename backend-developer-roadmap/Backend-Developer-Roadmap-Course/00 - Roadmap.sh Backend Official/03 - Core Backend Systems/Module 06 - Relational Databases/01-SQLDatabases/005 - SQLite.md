# 005 - SQLite

**Hoc phan:** 03 - Core Backend Systems
**Module:** Module 06 - Relational Databases
**Nhom noi dung:** Database systems
**Nguon roadmap:** 6. Relational Databases / Database systems
**Loai bai:** Database
**Thu tu trong module:** 005
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **SQLite** trong boi canh backend hien dai. Sau bai hoc, ban nen nam khai niem, biet vi sao no quan trong va co mot bai tap nho de ap dung.

## 2. Muc tieu hoc tap

- Giai thich duoc SQLite bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- SQLite la embedded relational database nhe, khong can server rieng.
- Phu hop local app, prototype, test va mot so workload nho.
- Can hieu gioi han concurrency va backup khi dung production.

## 4. Vi du / Demo

```sql
CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  body TEXT NOT NULL
);
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

- Toi co the giai thich **SQLite** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**SQLite** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
