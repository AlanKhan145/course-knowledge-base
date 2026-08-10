# 002 - Ansible

**Hoc phan:** 02 - Core DevOps Delivery
**Module:** Module 12 - Configuration Management
**Nhom noi dung:** Items
**Nguon roadmap:** 11. Configuration Management / Items
**Loai bai:** Configuration management
**Thu tu trong module:** 002
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **Ansible** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh configuration management nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Ansible bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Ansible cau hinh server bang playbook idempotent.
- Can nam inventory, module, role, variable, handler va vault.
- Dung tot cho bootstrap server, deploy package, render config va restart service.

## 4. Vi du / Demo

```yaml
- hosts: app
  tasks:
    - name: Ensure nginx is installed
      ansible.builtin.package:
name: nginx
state: present
```

## 5. Bai tap thuc hanh

- Tao mot file cau hinh hoac pseudo-plan cho Ansible.
- Ghi ro IAM/permission, rollback, monitoring va cleanup.
- Review plan nhu mot pull request ha tang.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong tao vi du.
- Bo qua edge case vi demo nho van chay.
- Khong ghi lai cau hoi con mo de quay lai sau.

## 7. Checklist hoan thanh

- Toi co the giai thich **Ansible** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Automate server state and application configuration with idempotent, reviewable playbooks.

## 9. Tong ket

**Ansible** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
