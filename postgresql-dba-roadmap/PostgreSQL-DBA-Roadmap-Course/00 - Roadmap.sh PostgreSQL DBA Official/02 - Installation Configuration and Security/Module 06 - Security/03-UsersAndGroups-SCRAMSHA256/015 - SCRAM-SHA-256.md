# 015 - SCRAM-SHA-256

**Hoc phan:** 02 - Installation Configuration and Security
**Module:** Module 06 - Security
**Nhom noi dung:** Authentication Models
**Nguon roadmap:** Security / Authentication Models
**Loai bai:** security
**Thu tu trong module:** 015
**Thoi luong goi y:** 32 phut

---

## 1. Tom tat

Bai nay giai thich **SCRAM-SHA-256** trong boi canh PostgreSQL DBA Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong van hanh PostgreSQL, lien quan den SQL, cau hinh, bao mat, backup, HA, monitoring, tuning hoac troubleshooting nhu the nao.

## 2. Muc tieu hoc tap

- Giai thich duoc SCRAM-SHA-256 bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den availability, durability, security, performance hoac recovery risk nao.
- Ap dung vao mot artifact nho: SQL, psql command, config diff, runbook, diagram, restore drill, alert rule hoac README.

## 3. Khai niem chinh

- SCRAM-SHA-256 is part of the Authentication Models topic in the PostgreSQL DBA roadmap.
- Learn it by connecting the concept to reliability, recovery, security, performance and operational risk.
- A PostgreSQL DBA should know how to inspect it, change it safely and document the result.

## 4. Thuc hanh

1. Create or inspect the role, privilege or authentication rule in a lab.
2. Test the behavior as the target user.
3. Write an audit note with allowed and denied actions.

## 5. Bai tap

Implement the access rule in a lab and verify both allowed and denied behavior.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du hoac lenh trong PostgreSQL lab.
- [ ] Co artifact nho de dua vao DBA portfolio.
- [ ] Co ghi chu ve rollback, monitoring, security, backup hoac downtime risk neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: co anh huong downtime khong, co can backup truoc khong, rollback la gi, ai nhan alert, monitoring nao xac nhan thanh cong va tai lieu/runbook nao can cap nhat.
