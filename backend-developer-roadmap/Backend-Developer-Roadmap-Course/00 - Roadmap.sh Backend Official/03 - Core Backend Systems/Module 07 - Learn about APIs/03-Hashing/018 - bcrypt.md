# 018 - bcrypt

**Hoc phan:** 03 - Core Backend Systems
**Module:** Module 07 - Learn about APIs
**Nhom noi dung:** Web Security
**Bai cha:** Hashing Algorithms
**Nguon roadmap:** 7. Learn about APIs / Web Security / Hashing Algorithms
**Loai bai:** Security
**Thu tu trong module:** 018
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **bcrypt** trong nhom **Hashing Algorithms** cua module **Learn about APIs**. Sau bai hoc, ban nen biet vai tro cua no va cach no xuat hien trong he thong backend.

## 2. Muc tieu hoc tap

- Giai thich duoc bcrypt bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- bcrypt la lua chon password hashing pho bien va da duoc kiem chung.
- Can dung salt rieng va cost factor phu hop.
- Password hash nen co chinh sach rehash khi cost tang.

## 4. Vi du / Demo

```text
Threat -> Control -> Test -> Monitor
Example: password leak -> bcrypt + rate limit -> auth tests -> suspicious-login alert
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho trong sandbox backend hoac ghi pseudo-code.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Tu viet crypto/auth flow khi chua du kinh nghiem.
- Luu secret/token/password sai cho de debug.
- Khong test authorization edge cases.

## 7. Checklist hoan thanh

- Toi co the giai thich **bcrypt** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**bcrypt** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
