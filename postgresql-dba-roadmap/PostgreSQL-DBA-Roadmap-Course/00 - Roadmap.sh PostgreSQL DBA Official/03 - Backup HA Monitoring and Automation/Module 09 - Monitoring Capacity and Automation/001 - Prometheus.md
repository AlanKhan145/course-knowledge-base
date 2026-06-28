# 001 - Prometheus

**Hoc phan:** 03 - Backup HA Monitoring and Automation
**Module:** Module 09 - Monitoring Capacity and Automation
**Nhom noi dung:** Monitoring Tools
**Nguon roadmap:** Monitoring Capacity and Automation / Monitoring Tools
**Loai bai:** monitoring
**Thu tu trong module:** 001
**Thoi luong goi y:** 32 phut

---

## 1. Tom tat

Bai nay giai thich **Prometheus** trong boi canh PostgreSQL DBA Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong van hanh PostgreSQL, lien quan den SQL, cau hinh, bao mat, backup, HA, monitoring, tuning hoac troubleshooting nhu the nao.

## 2. Muc tieu hoc tap

- Giai thich duoc Prometheus bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den availability, durability, security, performance hoac recovery risk nao.
- Ap dung vao mot artifact nho: SQL, psql command, config diff, runbook, diagram, restore drill, alert rule hoac README.

## 3. Khai niem chinh

- Prometheus collects time-series metrics and powers alerting through PromQL and Alertmanager.
- For PostgreSQL it is commonly paired with exporters and dashboards.
- Metrics should map to DBA questions: availability, saturation, latency, errors and recovery readiness.

## 4. Thuc hanh

1. Define the metric, query or tool output.
2. Set a warning threshold and a critical threshold.
3. Attach a first-response runbook action.

## 5. Bai tap

Define a metric, threshold, alert owner and first-response command.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du hoac lenh trong PostgreSQL lab.
- [ ] Co artifact nho de dua vao DBA portfolio.
- [ ] Co ghi chu ve rollback, monitoring, security, backup hoac downtime risk neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: co anh huong downtime khong, co can backup truoc khong, rollback la gi, ai nhan alert, monitoring nao xac nhan thanh cong va tai lieu/runbook nao can cap nhat.
