# 002 - JWT Auth

**Hoc phan:** 02 - Backend and Data
**Module:** Module 08 - APIs, Auth, Cache
**Nhom noi dung:** Topics
**Nguon roadmap:** 8. APIs, Auth, Cache / Topics
**Loai bai:** Auth
**Thu tu trong module:** 002
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **JWT Auth** trong boi canh full-stack hien dai. Sau bai hoc, ban nen biet no nam o dau trong hanh trinh tu frontend den backend, database va deployment.

## 2. Muc tieu hoc tap

- Giai thich duoc JWT Auth bang ngon ngu cua ban.
- Nhan biet kien thuc nay nam o frontend, backend, database, cloud hay workflow.
- Ap dung vao mot vi du nho trong full-stack project.

## 3. Khai niem chinh

- JWT la token duoc ky gom header, payload va signature.
- Can dat expiry, refresh strategy, storage policy va logout/revocation ro rang.
- Khong dua secret hay thong tin nhay cam vao payload vi payload co the decode.

## 4. Vi du / Demo

```http
Authorization: Bearer <access_token>
Cookie: refresh_token=<token>; HttpOnly; Secure; SameSite=Lax
```

## 5. Bai tap thuc hanh

- Them mot vi du nho vao app demo.
- Kiem tra error/loading/empty state hoac validation lien quan.
- Ghi vao README cach chay va cach test phan vua lam.

## 6. Loi thuong gap

- Lam theo tutorial ma khong hieu secret, permission va boundary.
- Khong test failure case nhu token het han, service down hoac deploy loi.
- Thieu log/runbook nen khi loi khong biet bat dau debug o dau.

## 7. Checklist hoan thanh

- Toi co the giai thich **JWT Auth** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay ket noi voi phan nao cua app full-stack.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Build a usable full-stack app with API, authentication, database, and cache

## 9. Tong ket

**JWT Auth** la mot moc trong lo trinh full-stack. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
