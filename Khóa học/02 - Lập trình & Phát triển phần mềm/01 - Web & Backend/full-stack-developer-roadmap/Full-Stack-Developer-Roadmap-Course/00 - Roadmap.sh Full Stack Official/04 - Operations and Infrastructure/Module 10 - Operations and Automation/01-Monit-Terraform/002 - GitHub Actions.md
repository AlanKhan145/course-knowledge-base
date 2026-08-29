# 002 - GitHub Actions

**Hoc phan:** 04 - Operations and Infrastructure
**Module:** Module 10 - Operations & Automation
**Nhom noi dung:** Topics
**Nguon roadmap:** 10. Operations & Automation / Topics
**Loai bai:** Operations
**Thu tu trong module:** 002
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **GitHub Actions** trong boi canh full-stack hien dai. Sau bai hoc, ban nen biet no nam o dau trong hanh trinh tu frontend den backend, database va deployment.

## 2. Muc tieu hoc tap

- Giai thich duoc GitHub Actions bang ngon ngu cua ban.
- Nhan biet kien thuc nay nam o frontend, backend, database, cloud hay workflow.
- Ap dung vao mot vi du nho trong full-stack project.

## 3. Khai niem chinh

- GitHub Actions chay workflow CI/CD tu repository.
- Can biet trigger, job, step, runner, cache, artifact va secret.
- Pipeline tot chay lint, test, build, migration check va deploy co dieu kien.

## 4. Vi du / Demo

```yaml
name: ci
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
```

## 5. Bai tap thuc hanh

- Ve so do luong request tu domain den app va cac service lien quan.
- Tao runbook ngan: lenh kiem tra, loi thuong gap va cach rollback.
- Neu co the, thuc hanh tren sandbox cloud hoac server test.

## 6. Loi thuong gap

- Lam theo tutorial ma khong hieu secret, permission va boundary.
- Khong test failure case nhu token het han, service down hoac deploy loi.
- Thieu log/runbook nen khi loi khong biet bat dau debug o dau.

## 7. Checklist hoan thanh

- Toi co the giai thich **GitHub Actions** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay ket noi voi phan nao cua app full-stack.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Monitor, automate, and manage infrastructure/deployment workflows

## 9. Tong ket

**GitHub Actions** la mot moc trong lo trinh full-stack. Hay bien no thanh mot vi du nho, mot checklist debug, hoac mot project mini de kien thuc co cho bam.
