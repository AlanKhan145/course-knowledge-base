# 003 - Image Scanning

**Hoc phan:** 03 - Platform and Pipeline Security
**Module:** Module 12 - Container Security
**Nhom noi dung:** Topics
**Nguon roadmap:** Container Security / Topics
**Loai bai:** Container security
**Thu tu trong module:** 003
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **Image Scanning** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc Image Scanning bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- Image scanning tim CVE trong base image va package.
- Ket qua scan can uu tien theo severity, exploitability va image co chay production hay khong.
- Scan nen nam trong CI/CD va registry policy, nhung can co exception process ro.

## 4. Vi du / Demo

```bash
trivy image example/app:1.2.3
grype example/app:1.2.3
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

- Toi co the giai thich **Image Scanning** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Secure images, Dockerfiles, Kubernetes workloads, secrets, RBAC and runtime behavior.

## 9. Tong ket

**Image Scanning** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
