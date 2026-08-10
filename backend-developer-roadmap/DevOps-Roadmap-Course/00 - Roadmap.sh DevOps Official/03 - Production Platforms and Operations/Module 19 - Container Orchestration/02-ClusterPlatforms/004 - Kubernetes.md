# 004 - Kubernetes

**Hoc phan:** 03 - Production Platforms and Operations
**Module:** Module 19 - Container Orchestration
**Nhom noi dung:** Items
**Nguon roadmap:** 18. Container Orchestration / Items
**Loai bai:** Orchestration
**Thu tu trong module:** 004
**Thoi luong goi y:** 28 phut

---

## 1. Tom tat

Bai nay giai thich **Kubernetes** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh orchestration nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Kubernetes bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Kubernetes dieu phoi container qua pod, deployment, service va ingress.
- Can hieu desired state, reconciliation, namespace, configmap, secret va rollout.
- Van hanh K8s can theo doi resource request/limit, health probe, autoscaling va RBAC.

## 4. Vi du / Demo

```bash
kubectl get pods -A
kubectl describe deployment app
kubectl rollout status deployment/app
```

## 5. Bai tap thuc hanh

- Tao mot file cau hinh hoac pseudo-plan cho Kubernetes.
- Ghi ro IAM/permission, rollback, monitoring va cleanup.
- Review plan nhu mot pull request ha tang.

## 6. Loi thuong gap

- Tao tai nguyen nhung khong co tag, owner, cost guard hoac cleanup.
- Bo qua permission, network boundary va rollback.
- Chi test happy path ma khong test failure, quota hoac timeout.

## 7. Checklist hoan thanh

- Toi co the giai thich **Kubernetes** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Run containers reliably across clusters with scheduling, scaling, discovery, and rollout controls.

## 9. Tong ket

**Kubernetes** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
