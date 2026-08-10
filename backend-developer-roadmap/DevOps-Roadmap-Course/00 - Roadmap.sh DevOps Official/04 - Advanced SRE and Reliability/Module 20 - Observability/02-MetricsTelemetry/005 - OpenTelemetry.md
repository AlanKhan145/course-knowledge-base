# 005 - OpenTelemetry

**Hoc phan:** 04 - Advanced SRE and Reliability
**Module:** Module 20 - Observability
**Nhom noi dung:** Items
**Nguon roadmap:** 19. Observability / Items
**Loai bai:** Observability
**Thu tu trong module:** 005
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **OpenTelemetry** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh observability nho.

## 2. Muc tieu hoc tap

- Giai thich duoc OpenTelemetry bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- OpenTelemetry chuan hoa cach tao, thu thap va xuat metric, log, trace.
- Can hieu instrumentation, collector, exporter, context propagation va sampling.
- Day la nen tang de noi app code voi observability backend.

## 4. Vi du / Demo

```text
App -> OpenTelemetry SDK -> Collector -> metrics/logs/traces backend
```

## 5. Bai tap thuc hanh

- Chon 3 tin hieu can theo doi khi dung OpenTelemetry.
- Thiet ke mot dashboard hoac query nho de tra loi cau hoi van hanh.
- Viet alert/runbook ngan cho mot failure mode pho bien.

## 6. Loi thuong gap

- Tao dashboard nhieu panel nhung khong tra loi cau hoi van hanh.
- Alert qua nhieu, qua it context hoac khong hanh dong duoc.
- Khong noi duoc log, metric, trace bang request id hoac labels.

## 7. Checklist hoan thanh

- Toi co the giai thich **OpenTelemetry** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Connect metrics, logs, traces, and telemetry so production behavior is explainable.

## 9. Tong ket

**OpenTelemetry** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
