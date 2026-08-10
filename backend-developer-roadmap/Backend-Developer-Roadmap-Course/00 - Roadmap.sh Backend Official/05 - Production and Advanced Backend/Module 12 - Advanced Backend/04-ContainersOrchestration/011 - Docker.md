# 011 - Docker

**Hoc phan:** 05 - Production and Advanced Backend
**Module:** Module 12 - Advanced Backend
**Nhom noi dung:** Containerization and Orchestration
**Bai cha:** Containerization
**Nguon roadmap:** 12. Advanced Backend / Containerization and Orchestration / Containerization
**Loai bai:** Ai
**Thu tu trong module:** 011
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **Docker** trong nhom **Containerization** cua module **Advanced Backend**. Sau bai hoc, ban nen biet vai tro cua no va cach no xuat hien trong he thong backend.

## 2. Muc tieu hoc tap

- Giai thich duoc Docker bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Docker la tool container pho bien.
- Backend can viet Dockerfile, build image, chay container va compose local services.
- Image production nen nho, khong chua secret va chay non-root neu co the.

## 4. Vi du / Demo

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["node", "server.js"]
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho trong sandbox backend hoac ghi pseudo-code.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Tin output AI ma khong validate schema/permission.
- Khong do latency, token cost va failure rate.
- Log prompt/output co du lieu nhay cam.

## 7. Checklist hoan thanh

- Toi co the giai thich **Docker** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Docker** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
