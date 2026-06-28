# 007 - Docker

**Hoc phan:** 04 - MLOps and Deployment
**Module:** Module 08 - MLOps
**Nhom noi dung:** Docker
**Nguon roadmap:** MLOps / Docker
**Loai bai:** MLOps
**Thu tu trong module:** 007
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **Docker** trong boi canh AI & Data Scientist. Sau bai hoc, ban nen biet topic nay giup tra loi cau hoi data nao, lien quan den model/experiment/deployment nao va co the bien thanh notebook, metric, chart, API hoac portfolio artifact.

## 2. Muc tieu hoc tap

- Giai thich duoc Docker bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow AI/Data Scientist.
- Ap dung vao mot dataset, notebook, model, experiment, dashboard hoac deployment artifact nho.

## 3. Khai niem chinh

- Docker packages code, dependencies and runtime into a reproducible container.
- It helps reviewers and teammates run your model service consistently.
- Keep images small, avoid secrets and document environment variables.

## 4. Vi du / Demo

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]
```

## 5. Bai tap thuc hanh

- Dong goi model thanh API hoac batch script.
- Them README cach chay va sample request.
- Ghi lai log/monitoring nao can co neu dua vao production.

## 6. Loi thuong gap

- Chi co notebook ma khong co cach deploy/chay lai.
- Khong version model va dependencies.
- Khong theo doi drift, input distribution hoac prediction log.

## 7. Checklist hoan thanh

- Toi co the giai thich **Docker** trong 1-2 phut.
- Toi co mot notebook, query, chart, model, API hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den dataset, metric, model, experiment hoac deployment nao.
- Toi da ghi lai it nhat mot caveat, assumption hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Deploy, version, monitor and operate ML models with APIs, Docker, CI/CD and drift-aware workflows.

## 9. Project lien quan

Mini project: Deploy ML Model API with FastAPI endpoint `/predict`, Dockerfile and README.

## 10. Tong ket

**Docker** la mot moc trong lo trinh AI & Data Scientist. Hay bien no thanh mot notebook, query, chart, experiment, model, API, Docker service hoac portfolio note de kien thuc co cho bam.
