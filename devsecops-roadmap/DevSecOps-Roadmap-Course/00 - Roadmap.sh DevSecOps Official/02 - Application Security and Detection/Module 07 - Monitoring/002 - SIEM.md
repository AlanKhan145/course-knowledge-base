# 002 - SIEM

**Hoc phan:** 02 - Application Security and Detection
**Module:** Module 07 - Monitoring
**Nhom noi dung:** Topics
**Nguon roadmap:** Monitoring / Topics
**Loai bai:** Monitoring
**Thu tu trong module:** 002
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **SIEM** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc SIEM bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- SIEM gom log, correlation, detection rule, alert va case management.
- Gia tri cua SIEM nam o detection logic va triage workflow, khong chi o viec gom that nhieu log.
- Alert tot can co severity, evidence, owner, next step va suppression policy.

## 4. Vi du / Demo

```text
Detection rule idea:
failed_login_count by user over 10 minutes > threshold
then enrich with source IP, geo, user role and recent privilege changes
```

## 5. Bai tap thuc hanh

- Viet mot detection idea hoac runbook ngan cho topic nay.
- Xac dinh log source, owner, severity va first response action.
- Ghi lai evidence can thu thap khi co incident.

## 6. Loi thuong gap

- Alert qua nhieu false positive nen team bo qua tin hieu that.
- Khong co runbook, owner hoac severity ro rang.
- Khong giu evidence va timeline khi xu ly incident.

## 7. Checklist hoan thanh

- Toi co the giai thich **SIEM** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Turn logs, SIEM signals and alerts into actionable detection and triage workflows.

## 9. Tong ket

**SIEM** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
