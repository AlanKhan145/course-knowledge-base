# 011 - ebpf

**Hoc phan:** 05 - Troubleshooting Optimization and Portfolio
**Module:** Module 13 - Troubleshooting Techniques
**Nhom noi dung:** Profiling Tools
**Nguon roadmap:** Troubleshooting Techniques / Profiling Tools
**Loai bai:** troubleshooting
**Thu tu trong module:** 011
**Thoi luong goi y:** 36 phut

---

## 1. Tom tat

Bai nay giai thich **ebpf** trong boi canh PostgreSQL DBA Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong van hanh PostgreSQL, lien quan den SQL, cau hinh, bao mat, backup, HA, monitoring, tuning hoac troubleshooting nhu the nao.

## 2. Muc tieu hoc tap

- Giai thich duoc ebpf bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den availability, durability, security, performance hoac recovery risk nao.
- Ap dung vao mot artifact nho: SQL, psql command, config diff, runbook, diagram, restore drill, alert rule hoac README.

## 3. Khai niem chinh

- ebpf is part of the Profiling Tools topic in the PostgreSQL DBA roadmap.
- Learn it by connecting the concept to reliability, recovery, security, performance and operational risk.
- A PostgreSQL DBA should know how to inspect it, change it safely and document the result.

## 4. Thuc hanh

1. Create a diagnostic command sequence for the symptom.
2. Record what normal and abnormal output look like.
3. Write the next decision after each observation.

## 5. Bai tap

Write a runbook section for this symptom or tool, including command, expected output and next action.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du hoac lenh trong PostgreSQL lab.
- [ ] Co artifact nho de dua vao DBA portfolio.
- [ ] Co ghi chu ve rollback, monitoring, security, backup hoac downtime risk neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: co anh huong downtime khong, co can backup truoc khong, rollback la gi, ai nhan alert, monitoring nao xac nhan thanh cong va tai lieu/runbook nao can cap nhat.
