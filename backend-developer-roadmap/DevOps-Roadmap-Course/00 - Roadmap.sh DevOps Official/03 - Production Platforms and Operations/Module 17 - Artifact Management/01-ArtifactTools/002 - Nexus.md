# 002 - Nexus

**Hoc phan:** 03 - Production Platforms and Operations
**Module:** Module 17 - Artifact Management
**Nhom noi dung:** Items
**Nguon roadmap:** 16. Artifact Management / Items
**Loai bai:** Artifact management
**Thu tu trong module:** 002
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **Nexus** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh artifact management nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Nexus bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Nexus Repository quan ly package va artifact cho nhieu ecosystem.
- Thuong dung lam proxy cache, private registry va release repository.
- Can co cleanup policy, access control va immutability cho release artifact.

## 4. Vi du / Demo

```text
Commit -> CI tests -> build artifact -> security checks -> deploy gate -> release -> monitor
```

## 5. Bai tap thuc hanh

- Thiet ke pipeline tu commit den release voi cac gate toi thieu.
- Xac dinh artifact, environment va rollback point cho Nexus.
- Ghi lai metric nao can theo doi sau release.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Nexus** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Version, store, promote, and clean up build outputs across environments.

## 9. Tong ket

**Nexus** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
