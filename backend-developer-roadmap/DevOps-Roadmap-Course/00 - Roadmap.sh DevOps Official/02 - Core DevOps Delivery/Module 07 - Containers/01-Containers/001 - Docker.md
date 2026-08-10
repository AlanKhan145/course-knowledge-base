# 001 - Docker

**Hoc phan:** 02 - Core DevOps Delivery
**Module:** Module 07 - Containers
**Nhom noi dung:** Items
**Nguon roadmap:** 6. Containers / Items
**Loai bai:** Container
**Thu tu trong module:** 001
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **Docker** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh container nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Docker bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Docker dong goi app cung runtime va dependency thanh image.
- Can hieu Dockerfile, layer cache, image tag, volume, network va registry.
- Image production nen nho, repeatable, khong chua secret va co health check.

## 4. Vi du / Demo

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY . .
CMD ["python", "app.py"]
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho bang command, config, script, dashboard hoac runbook.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Docker** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Package applications into reproducible runtime units and understand their limits.

## 9. Tong ket

**Docker** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
