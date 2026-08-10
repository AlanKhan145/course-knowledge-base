# 002 - Nginx

**Hoc phan:** 02 - Core DevOps Delivery
**Module:** Module 08 - Web Server and Infrastructure Basics
**Nhom noi dung:** Web Server
**Nguon roadmap:** 7. Web Server and Infrastructure Basics / Items / Web Server
**Loai bai:** Infrastructure
**Thu tu trong module:** 002
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **Nginx** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh infrastructure nho.

## 2. Muc tieu hoc tap

- Giai thich duoc Nginx bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- Nginx pho bien cho reverse proxy, static file, TLS termination va load balancing.
- Can hieu server block, location, upstream, header forwarding va timeout.
- Cau hinh tot can log ro, reload an toan va test syntax truoc khi apply.

## 4. Vi du / Demo

```nginx
server {
  listen 80;
  location / {
    proxy_pass http://app:3000;
  }
}
```

## 5. Bai tap thuc hanh

- Ve so do traffic path co domain, proxy, load balancer, app va dependency.
- Viet checklist debug cho loi lien quan den Nginx.
- Ghi lai lenh inspect va log can xem dau tien.

## 6. Loi thuong gap

- Khong ve traffic path nen debug theo cam tinh.
- Quen timeout, DNS cache, TLS certificate hoac firewall rule.
- Thay doi cau hinh truc tiep ma khong co test va rollback.

## 7. Checklist hoan thanh

- Toi co the giai thich **Nginx** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Operate the basic traffic path from web server to cache, firewall, load balancer, and application.

## 9. Tong ket

**Nginx** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
