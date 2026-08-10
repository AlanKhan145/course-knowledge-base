# 001 - Jaeger

**Hoc phan:** 04 - Advanced SRE and Reliability
**Module:** Module 20 - Observability
**Nhom noi dung:** Items
**Nguon roadmap:** 19. Observability / Items
**Loai bai:** Observability
**Thu tu trong module:** 001
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **Jaeger** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh observability nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Jaeger bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Jaeger dung cho distributed tracing.
- Trace giup thay request di qua service nao, ton bao lau va loi o dau.
- Can cau hinh sampling, propagation va tag/span co ich cho debug.

## 4. Vi du / Demo

```bash
curl -I https://example.com
ss -ltnp
journalctl --since "15 minutes ago"
```

## 5. Bai tap thuc hanh

- Chon 3 tin hieu can theo doi khi dung Jaeger.
- Thiet ke mot dashboard hoac query nho de tra loi cau hoi van hanh.
- Viet alert/runbook ngan cho mot failure mode pho bien.

## 6. Loi thuong gap

- Tao dashboard nhieu panel nhung khong tra loi cau hoi van hanh.
- Alert qua nhieu, qua it context hoac khong hanh dong duoc.
- Khong noi duoc log, metric, trace bang request id hoac labels.

## 7. Checklist hoan thanh

- Toi co the giai thich **Jaeger** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Connect metrics, logs, traces, and telemetry so production behavior is explainable.

## 9. Tong ket

**Jaeger** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
