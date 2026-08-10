# 005 - ggplot2

**Hoc phan:** 03 - Analysis and Visualisation
**Module:** Module 12 - Data Visualisation Tools and Libraries
**Nhom noi dung:** Libraries
**Nguon roadmap:** Data Visualisation Tools and Libraries / Libraries
**Loai bai:** Data visualisation
**Thu tu trong module:** 005
**Thoi luong goi y:** 20 phut

---

## 1. Tom tat

Bai nay giai thich **ggplot2** trong boi canh Data Analyst hien dai. Sau bai hoc, ban nen biet topic nay giup tra loi cau hoi data nao, nam o dau trong workflow va co the bien thanh query, spreadsheet, notebook, chart, dashboard hoac portfolio artifact.

## 2. Muc tieu hoc tap

- Giai thich duoc ggplot2 bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow data analyst.
- Ap dung vao mot dataset, query, spreadsheet, notebook, chart hoac dashboard nho.

## 3. Khai niem chinh

- ggplot2 dung grammar of graphics de tao chart trong R.
- Chart duoc xay tu data, aesthetic mapping, geometry va theme.
- ggplot2 manh khi can bieu do ro cau truc va tai lap.

## 4. Vi du / Demo

```r
library(ggplot2)

ggplot(sales, aes(month, revenue)) +
  geom_line() +
  labs(title = "Monthly revenue")
```

## 5. Bai tap thuc hanh

- Ve mot chart cho cung mot dataset.
- Viet title thanh mot insight thay vi ten metric chung chung.
- Ghi lai chart nay phu hop va khong phu hop cho cau hoi nao.

## 6. Loi thuong gap

- Dung chart dep nhung khong tra loi cau hoi business.
- Thieu unit, source, title hoac context.
- Dung pie/stacked chart qua nhieu category lam nguoi xem kho doc.

## 7. Checklist hoan thanh

- Toi co the giai thich **ggplot2** trong 1-2 phut.
- Toi co mot vi du nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den dataset, metric, chart, insight hoac business question nao.
- Toi da ghi lai it nhat mot caveat hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Choose practical BI tools and plotting libraries for dashboards, reports and exploratory analysis.

## 9. Tong ket

**ggplot2** la mot moc trong lo trinh Data Analyst. Hay bien no thanh mot bang tinh, query, notebook, chart, dashboard hoac portfolio note de kien thuc co cho bam.
