# 003 - Redis

**Hoc phan:** 02 - Backend and Data
**Module:** Module 08 - APIs, Auth, Cache
**Nhom noi dung:** Topics
**Nguon roadmap:** 8. APIs, Auth, Cache / Topics
**Loai bai:** Database
**Thu tu trong module:** 003
**Thoi luong goi y:** 20 phut

---

## 1. Tom tat

Bai nay giai thich **Redis** trong boi canh full-stack hien dai. Sau bai hoc, ban nen biet no nam o dau trong hanh trinh tu frontend den backend, database va deployment.

## 2. Muc tieu hoc tap

- Giai thich duoc Redis bang ngon ngu cua ban.
- Nhan biet kien thuc nay nam o frontend, backend, database, cloud hay workflow.
- Ap dung vao mot vi du nho trong full-stack project.

## 3. Khai niem chinh

- Redis la in-memory data store dung cho cache, session, queue nhe va rate limit.
- Can dat TTL, key naming, eviction policy va cache invalidation strategy.
- Redis tang toc app nhung khong thay the database chinh cho du lieu quan trong.

## 4. Vi du / Demo

```text
cache key: user:42:profile
ttl: 300 seconds
fallback: read PostgreSQL on cache miss
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

- Toi co the giai thich **Redis** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay ket noi voi phan nao cua app full-stack.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Build a usable full-stack app with API, authentication, database, and cache

## 9. Tong ket

**Redis** la mot moc trong lo trinh full-stack. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
