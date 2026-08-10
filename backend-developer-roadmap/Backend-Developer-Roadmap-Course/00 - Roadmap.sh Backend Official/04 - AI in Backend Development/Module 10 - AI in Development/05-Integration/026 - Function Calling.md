# 026 - Function Calling

**Hoc phan:** 04 - AI in Backend Development
**Module:** Module 10 - AI in Development
**Nhom noi dung:** Building AI-powered features
**Bai cha:** Integration Patterns
**Nguon roadmap:** 10. AI in Development / Building AI-powered features / Integration Patterns
**Loai bai:** Ai
**Thu tu trong module:** 026
**Thoi luong goi y:** 16 phut

---

## 1. Tom tat

Bai nay giai thich **Function Calling** trong nhom **Integration Patterns** cua module **AI in Development**. Sau bai hoc, ban nen biet vai tro cua no va cach no xuat hien trong he thong backend.

## 2. Muc tieu hoc tap

- Giai thich duoc Function Calling bang ngon ngu cua ban.
- Nhan biet khi nao kien thuc nay xuat hien trong backend project.
- Thuc hanh mot vi du nho va ghi lai loi thuong gap.

## 3. Khai niem chinh

- Function calling cho model de xuat tool/function voi tham so co schema.
- Backend van quyet dinh co thuc thi hay khong va validate tham so.
- Can audit log tool call vi no co the tao side effect.

## 4. Vi du / Demo

```json
{
  "name": "create_ticket",
  "arguments": {
    "title": "Payment failed",
    "priority": "high"
  }
}
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho trong sandbox backend hoac ghi pseudo-code.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Tin output AI ma khong validate schema/permission.
- Khong do latency, token cost va failure rate.
- Log prompt/output co du lieu nhay cam.

## 7. Checklist hoan thanh

- Toi co the giai thich **Function Calling** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den API, database, security, deployment hoac operations nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Function Calling** la mot moc trong lo trinh backend. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
