# 001 - Node.js

**Hoc phan:** 02 - Backend and Data
**Module:** Module 06 - Backend Start
**Nhom noi dung:** Topics
**Nguon roadmap:** 6. Backend Start / Topics
**Loai bai:** Backend
**Thu tu trong module:** 001
**Thoi luong goi y:** 20 phut

---

## 1. Tom tat

Bai nay giai thich **Node.js** trong boi canh full-stack hien dai. Sau bai hoc, ban nen biet no nam o dau trong hanh trinh tu frontend den backend, database va deployment.

## 2. Muc tieu hoc tap

- Giai thich duoc Node.js bang ngon ngu cua ban.
- Nhan biet kien thuc nay nam o frontend, backend, database, cloud hay workflow.
- Ap dung vao mot vi du nho trong full-stack project.

## 3. Khai niem chinh

- Node.js cho phep chay JavaScript tren server, phu hop API, CLI va tooling.
- Can hieu event loop, async I/O, module, environment variables va process lifecycle.
- Backend Node tot can validation, logging, error handling, tests va config ro rang.

## 4. Vi du / Demo

```js
import http from "node:http";

http.createServer((req, res) => {
  res.end(JSON.stringify({ ok: true }));
}).listen(3000);
```

## 5. Bai tap thuc hanh

- Them mot vi du nho vao app demo.
- Kiem tra error/loading/empty state hoac validation lien quan.
- Ghi vao README cach chay va cach test phan vua lam.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Node.js** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay ket noi voi phan nao cua app full-stack.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Learn backend programming basics and build command-line apps

## 9. Tong ket

**Node.js** la mot moc trong lo trinh full-stack. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
