# 005 - HTTP

**Hoc phan:** 01 - DevOps Foundations
**Module:** Module 06 - Proxy and Networking Fundamentals
**Nhom noi dung:** Networking Protocols
**Nguon roadmap:** 5. Proxy and Networking Fundamentals / Networking Protocols
**Loai bai:** Networking
**Thu tu trong module:** 005
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **HTTP** trong boi canh DevOps/SRE hien dai. Sau bai hoc, ban nen biet no la gi, nam o dau trong workflow van hanh va cach bien no thanh thuc hanh networking nho.

## 2. Muc tieu hoc tap

- Giai thich duoc HTTP bang ngon ngu cua ban.
- Nhan biet no xuat hien o dau trong DevOps workflow thuc te.
- Ap dung vao mot demo, command, config, pipeline hoac runbook nho.

## 3. Khai niem chinh

- HTTP la giao thuc request/response giua client, proxy, load balancer va service.
- Can hieu method, status code, header, body, cache va timeout.
- Nhieu incident web bat dau tu sai routing, header, TLS, proxy hoac timeout HTTP.

## 4. Vi du / Demo

```bash
curl -i https://example.com/health
curl -w "%{http_code} %{time_total}\n" -o /dev/null -s https://example.com
```

## 5. Bai tap thuc hanh

- Ve so do traffic path co domain, proxy, load balancer, app va dependency.
- Viet checklist debug cho loi lien quan den HTTP.
- Ghi lai lenh inspect va log can xem dau tien.

## 6. Loi thuong gap

- Khong ve traffic path nen debug theo cam tinh.
- Quen timeout, DNS cache, TLS certificate hoac firewall rule.
- Thay doi cau hinh truc tiep ma khong co test va rollback.

## 7. Checklist hoan thanh

- Toi co the giai thich **HTTP** trong 1-2 phut.
- Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
- Toi biet bai nay lien quan den delivery, operations, reliability, security hoac automation nao.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Outcome lien quan

Trace requests across DNS, TLS, proxies, protocols, firewall boundaries, and email delivery systems.

## 9. Tong ket

**HTTP** la mot moc trong lo trinh DevOps. Hay bien no thanh mot script, mot config, mot dashboard, mot pipeline, hoac mot runbook nho de kien thuc co cho bam.
