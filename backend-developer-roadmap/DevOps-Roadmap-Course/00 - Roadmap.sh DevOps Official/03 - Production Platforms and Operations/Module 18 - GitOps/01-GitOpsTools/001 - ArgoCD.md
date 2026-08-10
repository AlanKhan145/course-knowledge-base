# 001 - ArgoCD

**Hoc phan:** 03 - Production Platforms and Operations
**Module:** Module 18 - GitOps
**Nhom noi dung:** Items
**Nguon roadmap:** 17. GitOps / Items
**Loai bai:** GitOps
**Thu tu trong module:** 001
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **ArgoCD** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh gitops nho.

## 2. Muc tieu hoc tap

- Giai thich duoc ArgoCD bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- ArgoCD dong bo Kubernetes state tu Git vao cluster.
- Can hieu Application, sync policy, health, diff va rollback.
- GitOps tot can quy trinh review manifest va alert khi drift.

## 4. Vi du / Demo

```bash
argocd app list
argocd app diff api
argocd app sync api
```

## 5. Bai tap thuc hanh

- Thiet ke pipeline tu commit den release voi cac gate toi thieu.
- Xac dinh artifact, environment va rollback point cho ArgoCD.
- Ghi lai metric nao can theo doi sau release.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **ArgoCD** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Make Git the source of truth for declarative infrastructure and deployment state.

## 9. Tong ket

**ArgoCD** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
