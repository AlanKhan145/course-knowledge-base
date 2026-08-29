# 001 - JavaScript DOM/events

**Hoc phan:** 01 - Frontend Foundations and Apps
**Module:** Module 02 - Interactivity
**Nhom noi dung:** Topics
**Nguon roadmap:** 2. Interactivity / Topics
**Loai bai:** Frontend
**Thu tu trong module:** 001
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **JavaScript DOM/events** trong boi canh full-stack hien dai. Sau bai hoc, ban nen biet no nam o dau trong hanh trinh tu frontend den backend, database va deployment.

## 2. Muc tieu hoc tap

- Giai thich duoc JavaScript DOM/events bang ngon ngu cua ban.
- Nhan biet kien thuc nay nam o frontend, backend, database, cloud hay workflow.
- Ap dung vao mot vi du nho trong full-stack project.

## 3. Khai niem chinh

- DOM la mo hinh node cua trang HTML ma JavaScript co the doc va thay doi.
- Event la cach browser bao nut click, input change, submit va keyboard interaction.
- Nen hieu event listener, bubbling, preventDefault va cach cap nhat UI an toan.

## 4. Vi du / Demo

```js
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(new FormData(event.currentTarget));
});
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

- Toi co the giai thich **JavaScript DOM/events** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay ket noi voi phan nao cua app full-stack.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Add browser-side behavior and understand basic package usage

## 9. Tong ket

**JavaScript DOM/events** la mot moc trong lo trinh full-stack. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
