# 003 - Loki

**Hoc phan:** 03 - Production Platforms and Operations
**Module:** Module 16 - Logs Management
**Nhom noi dung:** Items
**Nguon roadmap:** 15. Logs Management / Items
**Loai bai:** Logging
**Thu tu trong module:** 003
**Thoi luong goi y:** 20 phut

---

## 1. Tom tat

Bai nay giai thich **Loki** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh logging nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Loki bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Loki gom log theo label va query bang LogQL.
- Can can bang label de query tot nhung khong lam cardinality qua cao.
- Phu hop khi muon logging gan voi Prometheus/Grafana ecosystem.

## 4. Vi du / Demo

```logql
{app="api"} |= "error"
{namespace="prod"} | json | level="warn"
```

## 5. Bai tap thuc hanh

- Chon 3 tin hieu can theo doi khi dung Loki.
- Thiet ke mot dashboard hoac query nho de tra loi cau hoi van hanh.
- Viet alert/runbook ngan cho mot failure mode pho bien.

## 6. Loi thuong gap

- Tao dashboard nhieu panel nhung khong tra loi cau hoi van hanh.
- Alert qua nhieu, qua it context hoac khong hanh dong duoc.
- Khong noi duoc log, metric, trace bang request id hoac labels.

## 7. Checklist hoan thanh

- Toi co the giai thich **Loki** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Collect, query, retain, and use logs for debugging, incident response, and audit trails.

## 9. Tong ket

**Loki** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
