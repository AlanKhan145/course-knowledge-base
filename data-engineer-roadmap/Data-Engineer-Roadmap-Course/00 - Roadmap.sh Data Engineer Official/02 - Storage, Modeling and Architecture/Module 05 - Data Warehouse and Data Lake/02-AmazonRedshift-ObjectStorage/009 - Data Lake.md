# 009 - Data Lake

**Hoc phan:** 02 - Storage, Modeling and Architecture
**Module:** Module 05 - Data Warehouse and Data Lake
**Nhom noi dung:** Data Lake
**Nguon roadmap:** Data Warehouse and Data Lake / Data Lake
**Loai bai:** data modeling
**Thu tu trong module:** 009
**Thoi luong goi y:** 32 phut

---

## 1. Tom tat

Bai nay giai thich **Data Lake** trong boi canh Data Engineer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong pipeline, anh huong den storage/processing/serving nhu the nao va co the bien thanh artifact trong portfolio.

## 2. Muc tieu hoc tap

- Giai thich duoc Data Lake bang ngon ngu cua ban.
- Nhan biet topic nay lien quan den do tin cay, chi phi, chat luong du lieu, bao mat hoac kha nang mo rong nao.
- Ap dung vao mot pipeline nho bang query, script, diagram, config, checklist hoac README.

## 3. Khai niem chinh

- A data lake stores raw and processed files in object storage with flexible schema and low storage cost.
- Common zones include raw, clean and curated layers.
- File format, partitioning and metadata design decide whether the lake stays useful at scale.

## 4. Thuc hanh

1. Write a 5-line note explaining Data Lake.
2. Add one example from a real data pipeline.
3. Create a tiny artifact: query, diagram, script, checklist or README section.

## 5. Bai tap

Design a tiny schema or table layout and explain the grain, keys, storage choice and consumer.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong pipeline Data Engineer.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve loi thuong gap, monitoring, testing hoac security neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: du lieu vao tu dau, schema co on dinh khong, pipeline co idempotent khong, khi fail thi retry/backfill ra sao, ai nhan alert va nguoi dung cuoi se bi anh huong the nao.
