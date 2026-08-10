# 002 - PowerShell

**Hoc phan:** 01 - DevOps Foundations
**Module:** Module 04 - Terminal Knowledge
**Nhom noi dung:** Items
**Nguon roadmap:** 3. Terminal Knowledge / Items
**Loai bai:** Terminal
**Thu tu trong module:** 002
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **PowerShell** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh terminal nho.

## 2. Muc tieu hoc tap

- Giai thich duoc PowerShell bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- PowerShell thao tac object thay vi text thuan, manh tren Windows va cross-platform automation.
- Can nam cmdlet, pipeline, module, remoting va error action.
- Phu hop quan tri Windows Server, Azure, Active Directory va script van hanh.

## 4. Vi du / Demo

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
Test-NetConnection example.com -Port 443
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho bang command, config, script, dashboard hoac runbook.
- Tim mot loi production co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **PowerShell** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Use the shell as a daily operations interface for debugging, automation, and repeatable administration.

## 9. Tong ket

**PowerShell** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
