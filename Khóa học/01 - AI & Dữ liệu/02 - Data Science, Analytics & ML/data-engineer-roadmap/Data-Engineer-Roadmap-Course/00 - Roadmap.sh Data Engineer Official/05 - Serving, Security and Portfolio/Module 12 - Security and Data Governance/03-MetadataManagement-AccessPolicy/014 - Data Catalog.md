# 014 - Data Catalog

**Hoc phan:** 05 - Serving, Security and Portfolio
**Module:** Module 12 - Security and Data Governance
**Nhom noi dung:** Data Governance
**Nguon roadmap:** Security and Data Governance / Data Governance
**Loai bai:** security
**Thu tu trong module:** 014
**Thoi luong goi y:** 30 phut

---

## 1. Tom tat

Bai nay giai thich **Data Catalog** trong boi canh Data Engineer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong pipeline, anh huong den storage/processing/serving nhu the nao va co the bien thanh artifact trong portfolio.

## 2. Muc tieu hoc tap

- Giai thich duoc Data Catalog bang ngon ngu cua ban.
- Nhan biet topic nay lien quan den do tin cay, chi phi, chat luong du lieu, bao mat hoac kha nang mo rong nao.
- Ap dung vao mot pipeline nho bang query, script, diagram, config, checklist hoac README.

## 3. Khai niem chinh

- Data Catalog is part of the Data Governance topic in the Data Engineer roadmap.
- Study it by connecting the definition, the production use case and the failure modes.
- A Data Engineer should be able to explain where this fits in a pipeline and how to validate it.

## 4. Thuc hanh

1. Identify the sensitive data or permission affected by this topic.
2. Define one control, one owner and one audit signal.
3. Add the control to the project security checklist.

## 5. Bai tap

Write one security control and one audit question a reviewer could use to verify it.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong pipeline Data Engineer.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve loi thuong gap, monitoring, testing hoac security neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: du lieu vao tu dau, schema co on dinh khong, pipeline co idempotent khong, khi fail thi retry/backfill ra sao, ai nhan alert va nguoi dung cuoi se bi anh huong the nao.
