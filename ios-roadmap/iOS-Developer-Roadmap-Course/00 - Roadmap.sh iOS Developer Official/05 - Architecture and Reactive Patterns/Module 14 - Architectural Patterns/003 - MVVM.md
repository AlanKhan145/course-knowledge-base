# 003 - MVVM

**Hoc phan:** 05 - Architecture and Reactive Patterns
**Module:** Module 14 - Architectural Patterns
**Nhom noi dung:** Architecture Choices
**Nguon roadmap:** Architectural Patterns / Architecture Choices
**Loai bai:** architecture
**Thu tu trong module:** 003
**Thoi luong goi y:** 34 phut

---

## 1. Tom tat

Bai nay giai thich **MVVM** trong boi canh iOS Developer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong app iOS, lien quan den Swift, UI, lifecycle, architecture, data, networking, testing hoac distribution nhu the nao.

## 2. Muc tieu hoc tap

- Giai thich duoc MVVM bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den UX, maintainability, performance, testability hoac release risk nao.
- Ap dung vao mot artifact nho: Swift snippet, UI screen, test, checklist, diagram, screenshot hoac README.

## 3. Khai niem chinh

- MVVM separates UI from presentation state and business interactions.
- The View renders state and sends user events; the ViewModel prepares state and coordinates services.
- This makes SwiftUI screens easier to test and refactor.

## 4. Thuc hanh

1. Draw the data or event flow for this pattern.
2. Refactor one small screen so dependencies are explicit.
3. Add a test seam such as protocol, fake service or mock repository.

## 5. Bai tap

Refactor one feature so UI, state, service and data responsibilities are clearly separated.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong app iOS.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve lifecycle, state, accessibility, testing, debugging hoac release neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: user flow nao bi anh huong, state co bi mat khi app background khong, loi network/storage duoc xu ly ra sao, test nao bao ve tinh nang nay va release checklist co can cap nhat khong.
