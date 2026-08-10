# 001 - CSPM

**Hoc phan:** 03 - Platform and Pipeline Security
**Module:** Module 11 - Cloud Security
**Nhom noi dung:** Topics
**Nguon roadmap:** Cloud Security / Topics
**Loai bai:** Cloud security
**Thu tu trong module:** 001
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **CSPM** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc CSPM bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- CSPM phat hien cloud misconfiguration nhu bucket public, SG mo rong, IAM qua quyen hoac thieu encryption.
- Ket qua CSPM can duoc triage theo exposure, data sensitivity va exploitability.
- CSPM tot nen gan voi ticket, owner, SLA va auto-remediation co kiem soat.

## 4. Vi du / Demo

```text
Finding:
resource = storage bucket
issue = public read
impact = sensitive export exposed
action = remove public policy, rotate exposed URLs, add guardrail
```

## 5. Bai tap thuc hanh

- Ve mot asset nho va cac permission/network boundary lien quan.
- Tim 3 misconfiguration pho bien cho topic nay.
- Viet remediation plan gom verify, rollback va monitoring.

## 6. Loi thuong gap

- Cap quyen qua rong hoac mo network exposure ma khong co owner.
- Khong bat logging/audit nen khong co evidence khi incident.
- Sua cau hinh truc tiep khong co review, rollback va drift detection.

## 7. Checklist hoan thanh

- Toi co the giai thich **CSPM** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Detect and reduce cloud misconfiguration, identity, encryption and logging risks.

## 9. Tong ket

**CSPM** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
