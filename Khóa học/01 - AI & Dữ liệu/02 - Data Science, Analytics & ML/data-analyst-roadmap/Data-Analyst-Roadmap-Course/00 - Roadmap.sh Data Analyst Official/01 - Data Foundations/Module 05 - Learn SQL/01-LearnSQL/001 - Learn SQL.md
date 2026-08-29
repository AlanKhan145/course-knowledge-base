# 001 - Learn SQL

**Hoc phan:** 01 - Data Foundations
**Module:** Module 05 - Learn SQL
**Nhom noi dung:** Foundation
**Nguon roadmap:** Learn SQL / Foundation
**Loai bai:** SQL
**Thu tu trong module:** 001
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **Learn SQL** trong boi canh Data Analyst hien dai. Sau bai hoc, ban nen biet topic nay giup tra loi cau hoi data nao, nam o dau trong workflow va co the bien thanh query, spreadsheet, notebook, chart, dashboard hoac portfolio artifact.

## 2. Muc tieu hoc tap

- Giai thich duoc Learn SQL bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow data analyst.
- Ap dung vao mot dataset, query, spreadsheet, notebook, chart hoac dashboard nho.

## 3. Khai niem chinh

- SQL la ngon ngu chinh de truy van data tu relational database.
- Can nam SELECT, WHERE, JOIN, GROUP BY, HAVING, window function va CTE.
- Query tot phai dung logic, doc duoc va tiet kiem tai nguyen database.

## 4. Vi du / Demo

```sql
SELECT
  category,
  COUNT(*) AS orders,
  SUM(revenue) AS revenue
FROM orders
WHERE order_date >= '2026-01-01'
GROUP BY category
ORDER BY revenue DESC;
```

## 5. Bai tap thuc hanh

- Viet 3 query: filter, aggregate va join.
- Ghi lai grain cua ket qua va dieu kien WHERE.
- Kiem tra duplicate va missing value trong ket qua query.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong ap dung vao dataset.
- Khong ghi lai gia dinh va caveat.
- Tao output kho tai lap vi thao tac tay qua nhieu.

## 7. Checklist hoan thanh

- Toi co the giai thich **Learn SQL** trong 1-2 phut.
- Toi co mot vi du nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den dataset, metric, chart, insight hoac business question nao.
- Toi da ghi lai it nhat mot caveat hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Query relational data confidently with SELECT, filters, joins, aggregation and simple analytical patterns.

## 9. Tong ket

**Learn SQL** la mot moc trong lo trinh Data Analyst. Hay bien no thanh mot bang tinh, query, notebook, chart, dashboard hoac portfolio note de kien thuc co cho bam.
