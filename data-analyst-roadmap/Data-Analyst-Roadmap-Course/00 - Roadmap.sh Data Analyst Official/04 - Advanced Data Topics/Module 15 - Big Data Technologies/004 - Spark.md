# 004 - Spark

**Hoc phan:** 04 - Advanced Data Topics
**Module:** Module 15 - Big Data Technologies
**Nhom noi dung:** Data Processing Frameworks
**Nguon roadmap:** Big Data Technologies / Data Processing Frameworks
**Loai bai:** Big data
**Thu tu trong module:** 004
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **Spark** trong boi canh Data Analyst hien dai. Sau bai hoc, ban nen biet topic nay giup tra loi cau hoi data nao, nam o dau trong workflow va co the bien thanh query, spreadsheet, notebook, chart, dashboard hoac portfolio artifact.

## 2. Muc tieu hoc tap

- Giai thich duoc Spark bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow data analyst.
- Ap dung vao mot dataset, query, spreadsheet, notebook, chart hoac dashboard nho.

## 3. Khai niem chinh

- Spark xu ly du lieu phan tan tren cluster.
- Phu hop khi data qua lon cho mot may hoac can pipeline big data.
- Can hieu partition, lazy evaluation, shuffle va data format.

## 4. Vi du / Demo

```python
df = spark.read.parquet("s3://bucket/sales/")
df.groupBy("region").sum("revenue").show()
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Ap dung topic vao mot vi du data nho.
- Ghi lai insight, caveat va mot cau hoi can phan tich tiep.

## 6. Loi thuong gap

- Dung ky thuat nang cao khi SQL/cleanup/basic analysis chua vung.
- Khong co baseline va metric ro.
- Bo qua data leakage, bias va limitation.

## 7. Checklist hoan thanh

- Toi co the giai thich **Spark** trong 1-2 phut.
- Toi co mot vi du nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den dataset, metric, chart, insight hoac business question nao.
- Toi da ghi lai it nhat mot caveat hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Recognize when datasets need big data storage, distributed processing and parallel techniques.

## 9. Tong ket

**Spark** la mot moc trong lo trinh Data Analyst. Hay bien no thanh mot bang tinh, query, notebook, chart, dashboard hoac portfolio note de kien thuc co cho bam.
