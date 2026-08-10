# 002 - Grafana

**Hoc phan:** 03 - Production Platforms and Operations
**Module:** Module 15 - Infrastructure Monitoring
**Nhom noi dung:** Items
**Nguon roadmap:** 14. Infrastructure Monitoring / Items
**Loai bai:** Monitoring
**Thu tu trong module:** 002
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **Grafana** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh monitoring nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Grafana bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Grafana tao dashboard tu metric, log va trace data source.
- Dashboard tot tra loi cau hoi van hanh, khong chi dep mat.
- Can thiet ke panel theo symptoms, saturation, error, latency va dependency.

## 4. Vi du / Demo

```text
Panel idea:
- request rate
- error rate
- p95 latency
- saturation for CPU, memory, disk, queue
```

## 5. Bai tap thuc hanh

- Chon 3 tin hieu can theo doi khi dung Grafana.
- Thiet ke mot dashboard hoac query nho de tra loi cau hoi van hanh.
- Viet alert/runbook ngan cho mot failure mode pho bien.

## 6. Loi thuong gap

- Tao dashboard nhieu panel nhung khong tra loi cau hoi van hanh.
- Alert qua nhieu, qua it context hoac khong hanh dong duoc.
- Khong noi duoc log, metric, trace bang request id hoac labels.

## 7. Checklist hoan thanh

- Toi co the giai thich **Grafana** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Track health, resource saturation, service symptoms, and actionable alerts.

## 9. Tong ket

**Grafana** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
