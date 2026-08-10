# 005 - Cloud Specific Tools

**Hoc phan:** 03 - Production Platforms and Operations
**Module:** Module 14 - Secret Management
**Nhom noi dung:** Items
**Nguon roadmap:** 13. Secret Management / Items
**Loai bai:** Secret management
**Thu tu trong module:** 005
**Thoi luong goi y:** 20 phut

---

## 1. Tom tat

Bai nay giai thich **Cloud Specific Tools** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh secret management nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Cloud Specific Tools bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Cloud Specific Tools lien quan den cach luu, ma hoa, cap phat va xoay vong secret.
- Khong commit secret vao Git, image, log hoac artifact.
- Can audit ai doc secret, secret song bao lau va cach thu hoi khi bi lo.

## 4. Vi du / Demo

```text
Secret flow:
source of truth -> encrypted store -> runtime injection -> rotation -> audit
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho bang command, config, script, dashboard hoac runbook.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- De secret trong Git, image, log, artifact hoac screenshot.
- Khong co rotation, revocation va audit.
- Dung mot secret chung cho qua nhieu moi truong hoac team.

## 7. Checklist hoan thanh

- Toi co the giai thich **Cloud Specific Tools** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Store, rotate, inject, and audit secrets without committing sensitive values into code or images.

## 9. Tong ket

**Cloud Specific Tools** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
