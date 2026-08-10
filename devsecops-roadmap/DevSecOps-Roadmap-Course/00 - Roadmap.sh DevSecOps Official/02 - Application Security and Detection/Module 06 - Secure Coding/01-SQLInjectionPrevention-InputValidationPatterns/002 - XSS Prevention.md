# 002 - XSS Prevention

**Hoc phan:** 02 - Application Security and Detection
**Module:** Module 06 - Secure Coding
**Nhom noi dung:** Topics
**Nguon roadmap:** Secure Coding / Topics
**Loai bai:** Secure coding
**Thu tu trong module:** 002
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **XSS Prevention** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc XSS Prevention bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- XSS cho phep attacker chay script trong browser cua nguoi dung.
- Phong tranh bang escape output, sanitize HTML, CSP va HTTPOnly/SameSite cookie.
- Can phan biet stored XSS, reflected XSS va DOM-based XSS.

## 4. Vi du / Demo

```html
<!-- Render text as text, not trusted HTML -->
<span id="comment"></span>
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

- Toi co the giai thich **XSS Prevention** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Prevent common application flaws through safe query patterns, output handling and validation.

## 9. Tong ket

**XSS Prevention** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
