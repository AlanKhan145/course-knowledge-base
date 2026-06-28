# 010 - Data Lineage

**Hoc phan:** 05 - Serving, Security and Portfolio
**Module:** Module 12 - Security and Data Governance
**Nhom noi dung:** Data Governance
**Nguon roadmap:** Security and Data Governance / Data Governance
**Loai bai:** security
**Thu tu trong module:** 010
**Thoi luong goi y:** 30 phut

---

## 1. Tom tat

Bai nay giai thich **Data Lineage** trong boi canh Data Engineer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong pipeline, anh huong den storage/processing/serving nhu the nao va co the bien thanh artifact trong portfolio.

## 2. Muc tieu hoc tap

- Giai thich duoc Data Lineage bang ngon ngu cua ban.
- Nhan biet topic nay lien quan den do tin cay, chi phi, chat luong du lieu, bao mat hoac kha nang mo rong nao.
- Ap dung vao mot pipeline nho bang query, script, diagram, config, checklist hoac README.

## 3. Khai niem chinh

- Lineage tracks where data came from, how it changed and which assets depend on it.
- It helps impact analysis, debugging, governance and incident response.
- Lineage is most useful when tied to metadata, owners, freshness and quality signals.

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
