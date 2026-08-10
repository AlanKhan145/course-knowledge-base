# 002 - CloudFormation

**Hoc phan:** 02 - Core DevOps Delivery
**Module:** Module 11 - Provisioning / Infrastructure as Code
**Nhom noi dung:** Items
**Nguon roadmap:** 10. Provisioning / Infrastructure as Code / Items
**Loai bai:** Infrastructure as Code
**Thu tu trong module:** 002
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **CloudFormation** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh infrastructure as code nho.

## 2. Muc tieu hoc tap

- Giai thich duoc CloudFormation bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- CloudFormation la IaC native cua AWS.
- Template mo ta resource va dependency, stack quan ly lifecycle.
- Can hieu change set, rollback, parameter, output va drift detection.

## 4. Vi du / Demo

```text
Plan:
1. Define desired state
2. Apply in a test environment
3. Verify health, logs, metrics and rollback path
```

## 5. Bai tap thuc hanh

- Tao mot file cau hinh hoac pseudo-plan cho CloudFormation.
- Ghi ro IAM/permission, rollback, monitoring va cleanup.
- Review plan nhu mot pull request ha tang.

## 6. Loi thuong gap

- Tao tai nguyen nhung khong co tag, owner, cost guard hoac cleanup.
- Bo qua permission, network boundary va rollback.
- Chi test happy path ma khong test failure, quota hoac timeout.

## 7. Checklist hoan thanh

- Toi co the giai thich **CloudFormation** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Describe, review, apply, and evolve infrastructure changes through code.

## 9. Tong ket

**CloudFormation** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
