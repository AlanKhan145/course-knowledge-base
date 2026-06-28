# 001 - Bash

**Hoc phan:** 01 - Foundations and Security Basics
**Module:** Module 03 - Scripting Knowledge
**Nhom noi dung:** Topics
**Nguon roadmap:** Scripting Knowledge / Topics
**Loai bai:** Scripting
**Thu tu trong module:** 001
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **Bash** trong boi canh DevSecOps hien dai. Sau bai hoc, ban nen biet topic nay giam risk nao, nam o dau trong lifecycle va co the ap dung vao code, pipeline, cloud, runtime hay incident response.

## 2. Muc tieu hoc tap

- Giai thich duoc Bash bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong DevSecOps lifecycle.
- Tao duoc mot artifact nho: checklist, script, config, scan, detection rule hoac runbook.

## 3. Khai niem chinh

- Bash giup ket hop scanner, CLI, grep, jq, curl va pipeline step thanh automation nho.
- Can hieu pipe, redirect, quoting, exit code, variable va set -euo pipefail.
- Script security nen log ro, fail ro va khong in secret.

## 4. Vi du / Demo

```bash
set -euo pipefail
curl -fsS https://example.com/health
jq '.findings[] | select(.severity == "high")' scan.json
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc khong nhin tai lieu.
- Tao vi du nho bang command, config, script, diagram hoac checklist.
- Tim mot loi production/security co the lien quan va viet cach debug.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao artifact thuc hanh.
- Bo qua scope, permission va data nhay cam khi dung security tool.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Bash** trong 1-2 phut.
- Toi co mot artifact nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet topic nay lien quan den risk, control, evidence va owner nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Use shell scripting to automate security checks, log processing, pipeline tasks and operational validation.

## 9. Tong ket

**Bash** la mot moc trong lo trinh DevSecOps. Hay bien no thanh mot checklist, script, config, scan, detection rule, dashboard hoac runbook de kien thuc co cho bam.
