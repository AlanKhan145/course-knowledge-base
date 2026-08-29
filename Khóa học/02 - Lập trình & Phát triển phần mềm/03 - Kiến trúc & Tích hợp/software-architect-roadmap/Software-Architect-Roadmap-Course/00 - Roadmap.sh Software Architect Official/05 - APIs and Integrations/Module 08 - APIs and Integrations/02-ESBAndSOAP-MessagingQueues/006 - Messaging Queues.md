# 006 - Messaging Queues

**Hoc phan:** 05 - APIs and Integrations
**Module:** Module 08 - APIs and Integrations
**Nhom noi dung:** Lessons
**Nguon roadmap:** 5. 05 - APIs and Integrations / Lessons
**Loai bai:** Lesson
**Thu tu trong module:** 006
**Thoi luong goi y:** 18 phut

---

## 1. Tom tat

Bai nay giai thich **Messaging Queues** trong boi canh Software Architecture hien dai. Sau bai hoc, ban nen nam khai niem, biet vi sao no quan trong doi voi Architect va co mot bai tap nho de ap dung.

Message queue (Kafka, RabbitMQ, SQS) giam coupling giua service, ho tro async processing, buffering va fan-out.

## 2. Muc tieu hoc tap

- Giai thich duoc **Messaging Queues** bang ngon ngu cua ban trong 1-2 phut.
- Nhan biet khi nao kien thuc nay anh huong den quyet dinh kien truc.
- Thuc hanh vi du nho va ghi lai cac diem can luu y.

## 3. Khai niem chinh

- Producer gui message, Consumer xu ly, Queue lam buffer o giua
- Kafka: high-throughput, persistent, replay events
- RabbitMQ: flexible routing, AMQP protocol
- Dead Letter Queue (DLQ) xu ly message that bai

## 4. Vi du / Demo

```text
Tinh huong: Ban dang thiet ke mot he thong moi va can quyet dinh ve Messaging Queues.
Phan tich: Xac dinh trade-off, requirement, va ket qua mong muon.
Quyet dinh: Ap dung khai niem tren vao boi canh cu the.
```

## 5. Bai tap thuc hanh

- Viet 5 dong tom tat bai hoc nay khong nhin tai lieu.
- Tim mot he thong thuc te (Google, Netflix, Amazon) su dung khai niem nay va ghi lai cach ho ap dung.
- Tao vi du nho hoac ve so do mo ta khai niem.

## 6. Loi thuong gap

- Hoc thuoc dinh nghia nhung khong biet ap dung vao bai toan thuc te.
- Bo qua trade-off: moi giai phap deu co diem manh va diem yeu.
- Ap dung may moc ma khong can nhac den context cu the cua he thong.

## 7. Checklist hoan thanh

- Toi co the giai thich **Messaging Queues** trong 1-2 phut khong can nhin tai lieu.
- Toi biet it nhat mot truong hop su dung thuc te.
- Toi hieu cac trade-off chinh khi ap dung khai niem nay.
- Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

## 8. Tong ket

**Messaging Queues** la mot kiem kien thuc quan trong trong hanh trang cua Software Architect. Hay bien no thanh vi du cu the, so do hoac checklist de kien thuc co cho bam vung trong thuc te.
