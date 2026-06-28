# 009 - Room Database

**Hoc phan:** 03 - Architecture, State and Data
**Module:** Module 06 - Storage
**Nhom noi dung:** Room Database
**Nguon roadmap:** Storage / Room Database
**Loai bai:** storage
**Thu tu trong module:** 009
**Thoi luong goi y:** 32 phut

---

## 1. Tom tat

Bai nay giai thich **Room Database** trong boi canh Android Developer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong app Android, lien quan den UI, lifecycle, state, data, network, quality hoac release nhu the nao va co the bien thanh artifact trong portfolio.

## 2. Muc tieu hoc tap

- Giai thich duoc Room Database bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den UX, do on dinh, maintainability, performance hoac release risk nao.
- Ap dung vao mot app nho bang code, diagram, test, checklist, screenshot hoac README.

## 3. Khai niem chinh

- Room is Android's recommended persistence library on top of SQLite.
- It uses entities, DAOs and compile-time query validation to reduce database mistakes.
- Plan migrations early because local databases survive app updates.

## 4. Thuc hanh

1. Create a tiny local data model and define read/write operations.
2. Handle one migration, default value or error case.
3. Document when the UI reads from local data versus remote data.

## 5. Bai tap

Persist one setting or entity, read it back, then document migration or offline behavior.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong app Android.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve lifecycle, state, testing, debugging hoac release neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: user flow nao bi anh huong, state co bi mat khi rotate/background khong, loi network/storage duoc xu ly ra sao, test nao bao ve tinh nang nay va release checklist co can cap nhat khong.
