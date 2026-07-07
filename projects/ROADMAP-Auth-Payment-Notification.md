# Roadmap: Đăng Nhập · Thanh Toán · Push Notification

> Tổng hợp từ các khóa học: **iOS Roadmap**, **Flutter/Dart**, **NodeJS The Complete Guide**  
> Mục tiêu: Xây dựng 3 tính năng cốt lõi cho bất kỳ app thương mại nào

---

## Tổng quan luồng hệ thống

```
[Client: iOS / Flutter]
        │
        ▼
[Backend: Node.js REST API]
        │
        ├──► Firebase Auth / JWT Session
        ├──► Stripe Payment Gateway
        └──► FCM / APNs Push Notification
```

---

## PHẦN 1 — ĐĂNG NHẬP (Authentication)

### Giai đoạn 1.1 — Nền tảng lý thuyết

| Chủ đề | Nguồn khóa học |
|--------|---------------|
| Auth là gì, hoạt động như thế nào | NodeJS `15/002`, `15/003` |
| Session vs Token (JWT) | NodeJS `14 - Sessions & Cookies` |
| Mã hóa password (bcrypt) | NodeJS `15/006` |
| CSRF Attack & Protection | NodeJS `15/011`, `15/012`, `15/013` |

**Kiến thức cần nắm:**
- Hiểu sự khác biệt giữa **Session-based** và **JWT-based** auth
- Password không bao giờ lưu dạng plain text → luôn hash bằng `bcrypt`
- CSRF token bảo vệ form submission khỏi tấn công cross-site

---

### Giai đoạn 1.2 — Triển khai Backend (Node.js)

**Bước 1: Xây dựng luồng đăng ký / đăng nhập cơ bản**
- `NodeJS 15/005` — Implementing an Authentication Flow
- `NodeJS 15/008` — Adding the Signin Functionality
- `NodeJS 15/009` — Working on Route Protection
- `NodeJS 15/010` — Using Middleware to Protect Routes

**Bước 2: Bảo vệ routes & feedback người dùng**
- `NodeJS 15/016` — Providing User Feedback (Flash Messages)
- `NodeJS 15/018` → `15/020` — Flash Messages & Wrap Up

**Bước 3: Nâng cao — Reset Password & Authorization**
- `NodeJS 17/002` — Resetting Passwords
- `NodeJS 17/003` — Implementing the Token Logic
- `NodeJS 17/004` — Creating the Token
- `NodeJS 17/007` — Why we Need Authorization
- `NodeJS 17/008` — Adding Authorization

---

### Giai đoạn 1.3 — Triển khai Client

#### iOS (Swift/UIKit/SwiftUI)
- `iOS Module 19` — URLSession: gửi POST request đăng nhập
- `iOS Module 19/006` — POST request
- `iOS Module 19/013` — Error Handling
- `iOS Module 14` — Architectural Patterns (MVVM cho auth flow)
- `iOS Module 17` — Data Persistence: lưu token vào Keychain

#### Flutter
- `Flutter 14/003` — Adding an Authentication Screen
- `Flutter 14/004` — Adding Buttons and Modes (Login / Register)
- `Flutter 14/005` — Validating User Input
- `Flutter 14/006` → `14/008` — Firebase CLI & FlutterFire Setup
- `Flutter 14/009` — Signing Users Up
- `Flutter 14/010` — Logging Users In
- `Flutter 14/011` — Showing Different Screens Based On Auth State
- `Flutter 14/012` — Adding a Splash/Loading Screen
- `Flutter 14/013` — Adding User Logout

---

### Checklist Đăng Nhập ✅

```
[ ] Đăng ký tài khoản (email + password hash)
[ ] Đăng nhập trả về token/session
[ ] Lưu token an toàn (Keychain/SecureStorage)
[ ] Middleware bảo vệ route cần auth
[ ] Reset password qua email token
[ ] Logout xóa token/session
[ ] CSRF protection (nếu dùng web form)
[ ] Input validation (email format, password strength)
```

---

## PHẦN 2 — THANH TOÁN (Payment)

### Giai đoạn 2.1 — Hiểu luồng thanh toán

| Chủ đề | Nguồn khóa học |
|--------|---------------|
| How Payments Work (tổng quan) | NodeJS `23/002` |
| Stripe integration cơ bản | NodeJS `23/003`, `23/004` |

**Kiến thức cần nắm:**
- Client **không bao giờ** xử lý tiền trực tiếp → luôn qua server
- Luồng: Client → Server tạo PaymentIntent → Stripe → Webhook xác nhận
- PCI Compliance: card info chỉ chạm Stripe, không qua server của bạn

---

### Giai đoạn 2.2 — Triển khai Backend (Node.js + Stripe)

**Bước 1: Setup Stripe**
- `NodeJS 23/003` — Adding a Checkout Page
- `NodeJS 23/004` — Using Stripe in Your App

**Luồng thanh toán chuẩn (tự bổ sung sau khóa học):**

```
1. Client chọn sản phẩm → gọi API /create-payment-intent
2. Server gọi stripe.paymentIntents.create({ amount, currency })
3. Server trả về { clientSecret }
4. Client dùng Stripe SDK + clientSecret để hiện form thanh toán
5. Người dùng nhập card → Stripe xử lý
6. Stripe gọi Webhook về server để xác nhận đơn hàng
7. Server cập nhật DB: đơn hàng = paid
```

**Webhook (bắt buộc cho production):**
```javascript
// Verify Stripe signature để chống giả mạo
const sig = req.headers['stripe-signature'];
const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
if (event.type === 'payment_intent.succeeded') {
  // Cập nhật đơn hàng trong DB
}
```

---

### Giai đoạn 2.3 — Triển khai Client

#### iOS (StoreKit / Stripe iOS SDK)
- **StoreKit** (In-App Purchase — Apple's native):
  - `iOS Module 20` — Common Apple Frameworks (GameKit có pattern tương tự)
  - Tham khảo: StoreKit 2 API (Swift async/await)
- **Stripe iOS SDK** (thanh toán web/server):
  - Dùng URLSession từ `iOS Module 19` để gọi `/create-payment-intent`
  - Tích hợp `Stripe iOS SDK` để render `PaymentSheet`

#### Flutter
- **Stripe Flutter** (stripe_flutter package):
  - Dùng HTTP từ `Flutter 12` để gọi server
  - `Flutter 12/006` — Sending a POST Request
  - `Flutter 12/007` — Working with the Request and Waiting for the Response
  - `Flutter 12/011` — Error Response Handling

---

### Giai đoạn 2.4 — In-App Purchase (iOS StoreKit)

**Luồng riêng cho App Store:**

```
1. Tạo sản phẩm trên App Store Connect
2. App fetch product info từ App Store
3. Người dùng xác nhận mua → Apple xử lý
4. App nhận receipt → Verify với Apple server
5. Mở khóa tính năng / nội dung
```

> Khóa học iOS chưa có module riêng về StoreKit → nghiên cứu thêm:
> Apple Developer Documentation: `StoreKit` > `Product` > `purchase()`

---

### Checklist Thanh Toán ✅

```
[ ] Stripe account + API keys (test/live)
[ ] Server tạo PaymentIntent an toàn
[ ] Client dùng Stripe SDK (không tự xử lý card)
[ ] Webhook endpoint xác nhận payment thành công
[ ] Ghi log transaction vào DB
[ ] Xử lý payment thất bại / refund
[ ] Test với Stripe test cards (4242 4242 4242 4242)
[ ] Switch sang live keys trước khi release
```

---

## PHẦN 3 — PUSH NOTIFICATION

### Giai đoạn 3.1 — Hiểu kiến trúc

```
[Ứng dụng]
    │
    ▼
[FCM - Firebase Cloud Messaging]  ←──  Server gửi notification
    │
    ├──► Android (FCM direct)
    └──► iOS (FCM → APNs → Device)
```

| Chủ đề | Nguồn khóa học |
|--------|---------------|
| Push Notifications Setup | Flutter `14/029` |
| Requesting Permissions & Getting Token | Flutter `14/030` |
| Testing Push Notifications | Flutter `14/031` |
| Notification Topics | Flutter `14/032` |
| Auto send via Cloud Functions | Flutter `14/033` |

---

### Giai đoạn 3.2 — Setup Firebase Cloud Messaging

**Bước 1: Cấu hình Firebase**
- `Flutter 14/006` → `14/008` — Firebase CLI & FlutterFire Setup
- `Flutter 14/029` — Push Notifications Setup and First Steps

**Bước 2: Xin quyền & lấy Device Token**
- `Flutter 14/030` — Requesting Permissions and Getting an Address Token

```dart
// Flutter: Lấy FCM token
final token = await FirebaseMessaging.instance.getToken();
// Lưu token này lên server để gửi notification
```

**Bước 3: Topics (gửi theo nhóm)**
- `Flutter 14/032` — Working with Notification Topics

```dart
// Subscribe user vào topic
await FirebaseMessaging.instance.subscribeToTopic('promotions');
```

**Bước 4: Cloud Functions tự động gửi**
- `Flutter 14/033` — Sending Push Notifications via Cloud Functions

```javascript
// Cloud Function: gửi khi có order mới
exports.onOrderCreated = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap) => {
    await admin.messaging().send({
      token: userFcmToken,
      notification: { title: 'Đơn hàng mới!', body: 'Xem chi tiết...' }
    });
  });
```

---

### Giai đoạn 3.3 — iOS APNs Setup (bắt buộc cho iOS)

- `iOS Module 26 - App Distribution` — Signing and Capabilities
- `iOS Module 26/003` — Signing and Capabilities
  - Bật capability: **Push Notifications**
  - Bật capability: **Background Modes** → Remote notifications

**APNs Key Setup:**
1. Apple Developer Portal → Certificates → Keys → Tạo APNs key
2. Upload APNs key vào Firebase Console → Project Settings → Cloud Messaging

---

### Giai đoạn 3.4 — Các loại Notification

| Loại | Khi nào dùng | Ví dụ |
|------|-------------|-------|
| **Foreground** | App đang mở | Chat message mới |
| **Background** | App bị minimize | Cập nhật silent data |
| **Terminated** | App đã tắt | Khuyến mãi, order status |
| **Local** | Không cần server | Reminder, alarm |

---

### Checklist Push Notification ✅

```
[ ] Firebase project tạo & cấu hình
[ ] APNs key upload vào Firebase (iOS)
[ ] Push Notification capability bật trong Xcode (iOS)
[ ] Xin quyền từ người dùng trước khi subscribe
[ ] FCM token lưu lên server khi user đăng nhập
[ ] Xóa token khi user đăng xuất
[ ] Test notification trên thiết bị thật (không dùng simulator cho iOS)
[ ] Xử lý notification khi app ở 3 trạng thái (foreground/background/terminated)
[ ] Cloud Functions tự động trigger (nếu cần server-side push)
```

---

## Thứ tự học đề xuất

```
TUẦN 1-2: Authentication
  NodeJS 14 (Sessions) → NodeJS 15 (Auth) → NodeJS 17 (Advanced Auth)
  Flutter 14/001-013  hoặc  iOS Module 19 + Module 17

TUẦN 3: Payment
  NodeJS 23 (Stripe basics)
  → Đọc Stripe docs: PaymentIntent + Webhooks
  → Tích hợp Stripe SDK vào Flutter/iOS

TUẦN 4: Push Notifications
  Flutter 14/029-033
  → iOS: Bật APNs capability + upload key vào Firebase
  → Viết Cloud Function gửi notification tự động

TUẦN 5: Kết nối 3 tính năng
  → Auth xong → lưu FCM token lên server
  → Payment xong → gửi notification "Thanh toán thành công"
  → Deploy backend lên server thật (NodeJS 29 - Deploying)
```

---

## Tài nguyên bổ sung (ngoài khóa học)

| Tính năng | Link chính thức |
|-----------|----------------|
| Stripe iOS | stripe.com/docs/mobile/ios |
| Stripe Flutter | pub.dev/packages/flutter_stripe |
| Firebase Auth | firebase.google.com/docs/auth |
| FCM | firebase.google.com/docs/cloud-messaging |
| Apple APNs | developer.apple.com/documentation/usernotifications |
| StoreKit 2 | developer.apple.com/storekit |

---

*Roadmap tổng hợp từ: iOS Roadmap Course · Flutter & Dart Complete Guide · NodeJS The Complete Guide*
