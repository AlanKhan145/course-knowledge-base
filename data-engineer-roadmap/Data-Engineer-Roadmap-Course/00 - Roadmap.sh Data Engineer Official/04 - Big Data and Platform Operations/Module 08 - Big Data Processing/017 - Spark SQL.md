# 017 - Spark SQL

**Hoc phan:** 04 - Big Data and Platform Operations
**Module:** Module 08 - Big Data Processing
**Nhom noi dung:** Apache Spark
**Nguon roadmap:** Big Data Processing / Apache Spark
**Loai bai:** big data
**Thu tu trong module:** 017
**Thoi luong goi y:** 36 phut

---

## 1. Tom tat

Bai nay giai thich **Spark SQL** trong boi canh Data Engineer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong pipeline, anh huong den storage/processing/serving nhu the nao va co the bien thanh artifact trong portfolio.

## 2. Muc tieu hoc tap

- Giai thich duoc Spark SQL bang ngon ngu cua ban.
- Nhan biet topic nay lien quan den do tin cay, chi phi, chat luong du lieu, bao mat hoac kha nang mo rong nao.
- Ap dung vao mot pipeline nho bang query, script, diagram, config, checklist hoac README.

## 3. Khai niem chinh

- Spark SQL is part of the Apache Spark topic in the Data Engineer roadmap.
- Inspect partitions, shuffles and physical plans whenever Spark jobs are slow or expensive.
- Prefer DataFrame/Spark SQL practice with measurable input and output sizes.
- Study it by connecting the definition, the production use case and the failure modes.
- A Data Engineer should be able to explain where this fits in a pipeline and how to validate it.
- Use small experiments to see how partitions, shuffles and joins change runtime behavior.

## 4. Thuc hanh

1. Create a small table with 10-20 rows that exposes the edge case.
2. Write one query that demonstrates Spark SQL.
3. Save the query and a short explanation of the result.

## 5. Bai tap

Run or sketch a processing job, then identify where partitioning and shuffle may affect performance.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong pipeline Data Engineer.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve loi thuong gap, monitoring, testing hoac security neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: du lieu vao tu dau, schema co on dinh khong, pipeline co idempotent khong, khi fail thi retry/backfill ra sao, ai nhan alert va nguoi dung cuoi se bi anh huong the nao.
