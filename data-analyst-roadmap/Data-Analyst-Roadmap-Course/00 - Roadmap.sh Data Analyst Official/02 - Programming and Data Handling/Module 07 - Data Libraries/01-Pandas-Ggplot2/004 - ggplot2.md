# 004 - ggplot2

**Hoc phan:** 02 - Programming and Data Handling
**Module:** Module 07 - Data Libraries
**Nhom noi dung:** Data Visualisation Libraries
**Nguon roadmap:** Data Libraries / Data Visualisation Libraries
**Loai bai:** Data library
**Thu tu trong module:** 004
**Thoi luong goi y:** 22 phut

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

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Ap dung topic vao mot vi du data nho.
- Ghi lai insight, caveat va mot cau hoi can phan tich tiep.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong ap dung vao dataset.
- Khong ghi lai gia dinh va caveat.
- Tao output kho tai lap vi thao tac tay qua nhieu.

## 7. Checklist hoan thanh

- Toi co the giai thich **ggplot2** trong 1-2 phut.
- Toi co mot vi du nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den dataset, metric, chart, insight hoac business question nao.
- Toi da ghi lai it nhat mot caveat hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Use data manipulation and visualisation libraries to load, clean, transform and plot datasets.

## 9. Tong ket

**ggplot2** la mot moc trong lo trinh Data Analyst. Hay bien no thanh mot bang tinh, query, notebook, chart, dashboard hoac portfolio note de kien thuc co cho bam.
