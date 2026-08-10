# 025 - Dependency Injection

**Hoc phan:** 03 - Architecture, State and Data
**Module:** Module 05 - Design and Architecture
**Nhom noi dung:** Dependency Injection
**Nguon roadmap:** Design and Architecture / Dependency Injection
**Loai bai:** architecture
**Thu tu trong module:** 025
**Thoi luong goi y:** 34 phut

---

## 1. Tom tat

Bai nay giai thich **Dependency Injection** trong boi canh Android Developer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong app Android, lien quan den UI, lifecycle, state, data, network, quality hoac release nhu the nao va co the bien thanh artifact trong portfolio.

## 2. Muc tieu hoc tap

- Giai thich duoc Dependency Injection bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den UX, do on dinh, maintainability, performance hoac release risk nao.
- Ap dung vao mot app nho bang code, diagram, test, checklist, screenshot hoac README.

## 3. Khai niem chinh

- Dependency Injection is part of the Dependency Injection topic in the Android Developer roadmap.
- Injection makes dependencies explicit and testable.
- Avoid service locators and hidden global state when a constructor parameter would be clearer.
- Learn the concept by connecting API usage, lifecycle behavior, state and user impact.
- A strong Android developer can explain where this belongs in the app and how to test it.

## 4. Thuc hanh

1. Draw the dependency direction for this concept.
2. Create a small interface/class split that keeps UI separate from data access.
3. Write one test seam: fake repository, fake API, fake DAO or fake use case.

## 5. Bai tap

Refactor one screen so UI, state/business logic and data access are clearly separated.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong app Android.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve lifecycle, state, testing, debugging hoac release neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: user flow nao bi anh huong, state co bi mat khi rotate/background khong, loi network/storage duoc xu ly ra sao, test nao bao ve tinh nang nay va release checklist co can cap nhat khong.
