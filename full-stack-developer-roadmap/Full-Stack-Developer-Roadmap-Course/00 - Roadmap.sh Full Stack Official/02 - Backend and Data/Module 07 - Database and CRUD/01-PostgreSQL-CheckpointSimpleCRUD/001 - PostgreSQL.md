# 001 - PostgreSQL

**Hoc phan:** 02 - Backend and Data
**Module:** Module 07 - Database & CRUD
**Nhom noi dung:** Topics
**Nguon roadmap:** 7. Database & CRUD / Topics
**Loai bai:** Database
**Thu tu trong module:** 001
**Thoi luong goi y:** 20 phut

---

## 1. Tom tat

Bai nay giai thich **PostgreSQL** trong boi canh full-stack hien dai. Sau bai hoc, ban nen biet no nam o dau trong hanh trinh tu frontend den backend, database va deployment.

## 2. Muc tieu hoc tap

- Giai thich duoc PostgreSQL bang ngon ngu cua ban.
- Nhan biet kien thuc nay nam o frontend, backend, database, cloud hay workflow.
- Ap dung vao mot vi du nho trong full-stack project.

## 3. Khai niem chinh

- PostgreSQL la relational database manh cho schema, SQL, index va transaction.
- Full-stack dev can thiet ke table, migration, query va data validation.
- Nen hoc EXPLAIN, unique constraint, foreign key va backup tu som.

## 4. Vi du / Demo

```sql
CREATE TABLE tasks (
  id uuid PRIMARY KEY,
  title text NOT NULL,
  completed boolean NOT NULL DEFAULT false
);
```

## 5. Bai tap thuc hanh

- Them mot vi du nho vao app demo.
- Kiem tra error/loading/empty state hoac validation lien quan.
- Ghi vao README cach chay va cach test phan vua lam.

## 6. Loi thuong gap

- Thiet ke schema theo UI hien tai ma khong nghi den query va constraint.
- Bo qua migration, index va backup.
- Khong do query performance truoc khi toi uu.

## 7. Checklist hoan thanh

- Toi co the giai thich **PostgreSQL** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay ket noi voi phan nao cua app full-stack.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Build database-backed CRUD applications

## 9. Tong ket

**PostgreSQL** la mot moc trong lo trinh full-stack. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
