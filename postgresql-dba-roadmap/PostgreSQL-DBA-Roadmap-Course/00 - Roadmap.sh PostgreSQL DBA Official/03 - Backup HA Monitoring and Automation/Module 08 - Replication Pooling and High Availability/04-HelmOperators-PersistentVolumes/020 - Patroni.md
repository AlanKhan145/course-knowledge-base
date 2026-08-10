# 020 - Patroni

**Hoc phan:** 03 - Backup HA Monitoring and Automation
**Module:** Module 08 - Replication Pooling and High Availability
**Nhom noi dung:** Cluster Management
**Nguon roadmap:** Replication Pooling and High Availability / Cluster Management
**Loai bai:** project
**Thu tu trong module:** 020
**Thoi luong goi y:** 45 phut

---

## 1. Tom tat

Bai nay giai thich **Patroni** trong boi canh PostgreSQL DBA Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong van hanh PostgreSQL, lien quan den SQL, cau hinh, bao mat, backup, HA, monitoring, tuning hoac troubleshooting nhu the nao.

## 2. Muc tieu hoc tap

- Giai thich duoc Patroni bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den availability, durability, security, performance hoac recovery risk nao.
- Ap dung vao mot artifact nho: SQL, psql command, config diff, runbook, diagram, restore drill, alert rule hoac README.

## 3. Khai niem chinh

- Patroni manages PostgreSQL high availability using a distributed consensus store.
- It automates leader election and failover workflows.
- A DBA must still understand replication, fencing, backups and failure modes.

## 4. Thuc hanh

1. Create a portfolio artifact for this milestone.
2. Write goal, commands, validation, rollback and screenshots/output.
3. Link the artifact from the course progress tracker.

## 5. Bai tap

Create the portfolio deliverable and add a README section explaining how to reproduce or review it.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du hoac lenh trong PostgreSQL lab.
- [ ] Co artifact nho de dua vao DBA portfolio.
- [ ] Co ghi chu ve rollback, monitoring, security, backup hoac downtime risk neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: co anh huong downtime khong, co can backup truoc khong, rollback la gi, ai nhan alert, monitoring nao xac nhan thanh cong va tai lieu/runbook nao can cap nhat.
