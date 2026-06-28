# 001 - SQL Injection Prevention

**Hoc phan:** 02 - Application Security and Detection
**Module:** Module 06 - Secure Coding
**Nhom noi dung:** Topics
**Nguon roadmap:** Secure Coding / Topics
**Loai bai:** Secure coding
**Thu tu trong module:** 001
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **SQL Injection Prevention** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc SQL Injection Prevention bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- SQL injection xay ra khi input nguoi dung bi chen vao query nhu code.
- Phong tranh bang parameterized query, prepared statement, ORM an toan va DB least privilege.
- Khong noi chuoi SQL truc tiep voi input, ke ca input tu admin/internal tool.

## 4. Vi du / Demo

```sql
-- Good: parameterized query shape
SELECT * FROM users WHERE email = ?;
```

## 5. Bai tap thuc hanh

- Viet mot checklist review 5 dong cho topic nay.
- Tao mot test case hoac pseudo-code cho safe pattern.
- Ghi lai pipeline gate nao co the bat loi nay som.

## 6. Loi thuong gap

- Chi sua loi sau khi scan thay vi thiet ke safe pattern tu dau.
- Khong co test case nen loi co the quay lai.
- Bo qua trade-off ve UX, reliability va kha nang van hanh.

## 7. Checklist hoan thanh

- Toi co the giai thich **SQL Injection Prevention** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Prevent common application flaws through safe query patterns, output handling and validation.

## 9. Tong ket

**SQL Injection Prevention** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
