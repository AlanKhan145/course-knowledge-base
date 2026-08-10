# 001 - Docker

**Hoc phan:** 03 - Platform and Pipeline Security
**Module:** Module 12 - Container Security
**Nhom noi dung:** Topics
**Nguon roadmap:** Container Security / Topics
**Loai bai:** Container security
**Thu tu trong module:** 001
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **Docker** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc Docker bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- Dockerfile security gom base image tin cay, user non-root, layer gon va khong dua secret vao image.
- Image nen duoc scan, tag ro version va ky neu pipeline yeu cau.
- Runtime can limit capability, filesystem, network va resource neu co the.

## 4. Vi du / Demo

```dockerfile
FROM python:3.12-slim
RUN useradd -r appuser
USER appuser
CMD ["python", "app.py"]
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

- Toi co the giai thich **Docker** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Secure images, Dockerfiles, Kubernetes workloads, secrets, RBAC and runtime behavior.

## 9. Tong ket

**Docker** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
