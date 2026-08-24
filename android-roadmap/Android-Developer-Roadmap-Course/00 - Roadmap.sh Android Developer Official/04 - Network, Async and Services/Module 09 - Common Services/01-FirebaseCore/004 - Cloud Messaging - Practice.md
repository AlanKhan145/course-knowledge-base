# 004 — Cloud Messaging

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 09 — Common Services      |
| **Nhóm nội dung**       | Firebase                         |
| **Nguồn roadmap**       | Common Services / Firebase       |
| **Loại bài**            | Service                          |
| **Thứ tự trong module** | 004                              |
| **Thời lượng gợi ý**    | 34 phút                          |

---

## 1. Tóm tắt

**Firebase Cloud Messaging (FCM)** là dịch vụ của Firebase dùng để gửi thông báo và dữ liệu từ server đến ứng dụng Android.

FCM thường được sử dụng cho:

* Push notification.
* Thông báo có tin nhắn mới.
* Thông báo đơn hàng.
* Nhắc lịch.
* Cập nhật trạng thái dịch vụ.
* Đồng bộ một phần dữ liệu khi có sự kiện mới.
* Gửi thông tin tới một thiết bị, một nhóm thiết bị hoặc một topic.

Một flow phổ biến:

```text
Backend
   │
   │ gửi message
   ▼
Firebase Cloud Messaging
   │
   ▼
Thiết bị Android
   │
   ▼
FirebaseMessagingService
   │
   ├──► Hiển thị Notification
   │
   └──► Cập nhật dữ liệu / state
```

Trong ứng dụng production, FCM không chỉ là việc "hiện một notification". Developer còn phải quan tâm đến:

* Notification permission.
* Device token.
* Token refresh.
* App foreground/background.
* Navigation khi người dùng nhấn notification.
* Security.
* Privacy.
* Duplicate message.
* Network failure.
* Backend integration.
* Logging và debugging.

---

# 2. Mục tiêu học tập

Sau bài học, bạn có thể:

* [ ] Giải thích được Firebase Cloud Messaging bằng ngôn ngữ của mình.
* [ ] Hiểu kiến trúc cơ bản của FCM trong Android.
* [ ] Phân biệt **notification message** và **data message**.
* [ ] Hiểu vai trò của **FCM registration token**.
* [ ] Nhận message bằng `FirebaseMessagingService`.
* [ ] Tạo notification trên Android.
* [ ] Xử lý permission notification.
* [ ] Hiểu sự khác nhau khi app ở foreground và background.
* [ ] Thiết kế lớp abstraction để không phụ thuộc trực tiếp toàn bộ app vào Firebase SDK.
* [ ] Xử lý token refresh.
* [ ] Biết các rủi ro security, privacy và production khi sử dụng push notification.
* [ ] Tạo được một demo FCM có thể đưa vào portfolio.

---

# 3. Firebase Cloud Messaging là gì?

Firebase Cloud Messaging là một hệ thống messaging cho phép backend gửi message tới ứng dụng client.

Có thể hình dung FCM là cầu nối:

```text
┌─────────────┐
│   Backend   │
└──────┬──────┘
       │
       │ message
       ▼
┌────────────────────────┐
│ Firebase Cloud Messaging│
└───────────┬────────────┘
            │
            │ push
            ▼
┌────────────────────────┐
│     Android Device     │
│                        │
│ FirebaseMessagingService│
└────────────────────────┘
```

FCM chịu trách nhiệm chuyển message tới thiết bị.

Nhưng:

> **FCM không nên chứa business logic chính của ứng dụng.**

Ví dụ:

```text
SAI

FirebaseMessagingService
        │
        ├── cập nhật database
        ├── xử lý business rule
        ├── thay đổi user profile
        ├── tính toán domain
        └── navigation
```

Nên tổ chức:

```text
FirebaseMessagingService
        │
        ▼
MessagingRepository
        │
        ▼
Use Case / Domain
        │
        ▼
Database / Notification / Sync
```

---

# 4. Kiến trúc FCM cơ bản

Một hệ thống push notification thông thường có ba thành phần.

```text
┌────────────────────┐
│      Backend       │
│                    │
│ Firebase Admin SDK │
└─────────┬──────────┘
          │
          │ Send message
          ▼
┌────────────────────┐
│        FCM         │
│                    │
│ Message delivery   │
└─────────┬──────────┘
          │
          │ Push
          ▼
┌────────────────────┐
│   Android Client   │
│                    │
│ FCM SDK            │
│ Messaging Service  │
│ Notification       │
└────────────────────┘
```

Backend quyết định:

* Gửi cho ai.
* Nội dung gì.
* Khi nào gửi.
* Loại notification nào.
* Data payload nào được đính kèm.

FCM chịu trách nhiệm:

* Route message.
* Delivery.
* Device targeting.

Android app chịu trách nhiệm:

* Nhận message.
* Hiển thị notification.
* Điều hướng người dùng.
* Đồng bộ dữ liệu khi cần.

---

# 5. Registration Token

Mỗi installation của ứng dụng có thể nhận một **FCM registration token**.

Ví dụ:

```text
Device A
    ↓
FCM Token
    ↓
abc123xyz...
```

Backend có thể lưu token này để gửi notification tới thiết bị tương ứng.

Flow:

```text
App mở lần đầu
      │
      ▼
Firebase SDK
      │
      ▼
Sinh FCM Token
      │
      ▼
Android App
      │
      │ HTTPS
      ▼
Backend
      │
      ▼
Lưu token
```

Ví dụ:

```text
users
 └── user_123
      └── devices
           ├── device_A → token_A
           └── device_B → token_B
```

Một user có thể đăng nhập trên nhiều thiết bị nên không nên mặc định:

```text
1 user = 1 FCM token
```

Thực tế thường là:

```text
1 user
  │
  ├── Device A
  │      └── token_A
  │
  ├── Device B
  │      └── token_B
  │
  └── Tablet
         └── token_C
```

---

# 6. Token có thể thay đổi

FCM token không phải một giá trị cố định vĩnh viễn.

Token có thể thay đổi khi:

* App được cài lại.
* App data bị xóa.
* Firebase làm mới token.
* Device registration thay đổi.

Do đó cần xử lý:

```kotlin
class AppFirebaseMessagingService : FirebaseMessagingService() {

    override fun onNewToken(token: String) {
        super.onNewToken(token)

        // Gửi token mới lên backend.
    }
}
```

Flow:

```text
FCM token thay đổi
        │
        ▼
onNewToken()
        │
        ▼
MessagingRepository
        │
        ▼
Backend API
        │
        ▼
Update device token
```

Không nên chỉ lấy token một lần rồi giả định token đó sẽ tồn tại mãi.

---

# 7. Lấy FCM token

Ví dụ:

```kotlin
FirebaseMessaging
    .getInstance()
    .token
    .addOnCompleteListener { task ->

        if (!task.isSuccessful) {
            return@addOnCompleteListener
        }

        val token = task.result

        println("FCM Token: $token")
    }
```

Trong production, nên đưa logic này vào repository thay vì đặt trực tiếp trong Activity.

Ví dụ:

```text
Activity
   │
   ▼
ViewModel
   │
   ▼
MessagingRepository
   │
   ▼
FirebaseMessaging
```

---

# 8. Hai loại message quan trọng

FCM thường có hai kiểu message chính mà Android developer cần hiểu:

```text
FCM Message
    │
    ├── Notification Message
    │
    └── Data Message
```

---

## 8.1. Notification Message

Ví dụ payload:

```json
{
  "notification": {
    "title": "Tin nhắn mới",
    "body": "Bạn vừa nhận được một tin nhắn."
  }
}
```

Firebase/Android có thể tự hỗ trợ hiển thị notification trong một số trường hợp.

Ưu điểm:

* Dễ sử dụng.
* Phù hợp notification đơn giản.

Nhược điểm:

* Ít quyền kiểm soát hơn.
* Behavior foreground/background có thể khác nhau.

---

# 9. Data Message

Ví dụ:

```json
{
  "data": {
    "type": "new_message",
    "conversationId": "123"
  }
}
```

App có thể tự quyết định:

```text
data.type
    │
    ├── new_message
    │      └── mở conversation
    │
    ├── order_updated
    │      └── refresh order
    │
    └── promotion
           └── mở campaign
```

Data message linh hoạt hơn khi app cần custom behavior.

---

# 10. Notification + Data

Backend cũng có thể gửi cả hai:

```json
{
  "notification": {
    "title": "Đơn hàng đã cập nhật",
    "body": "Đơn hàng của bạn đang được giao."
  },
  "data": {
    "type": "order_updated",
    "orderId": "ORD-1001"
  }
}
```

Trong đó:

```text
notification
     │
     └── thông tin hiển thị

data
     │
     └── thông tin để app xử lý
```

---

# 11. FirebaseMessagingService

Để xử lý message, Android app có thể tạo service kế thừa:

```kotlin
FirebaseMessagingService
```

Ví dụ:

```kotlin
class AppFirebaseMessagingService :
    FirebaseMessagingService() {

    override fun onMessageReceived(
        message: RemoteMessage
    ) {
        super.onMessageReceived(message)

        val type = message.data["type"]

        when (type) {

            "new_message" -> {
                // Xử lý tin nhắn.
            }

            "order_updated" -> {
                // Xử lý cập nhật đơn hàng.
            }
        }
    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)

        // Đồng bộ token với backend.
    }
}
```

Khai báo service trong `AndroidManifest.xml`:

```xml
<service
    android:name=".notification.AppFirebaseMessagingService"
    android:exported="false">

    <intent-filter>
        <action
            android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>

</service>
```

---

# 12. Không đặt toàn bộ logic vào FirebaseMessagingService

Một lỗi phổ biến:

```kotlin
override fun onMessageReceived(message: RemoteMessage) {

    // Parse payload.

    // Query database.

    // Call API.

    // Update user.

    // Handle navigation.

    // Build notification.

    // Business logic.

    // Analytics.
}
```

Service lúc này trở thành một **God Object**.

Kiến trúc tốt hơn:

```text
FirebaseMessagingService
         │
         ▼
PushMessageParser
         │
         ▼
MessagingRepository
         │
         ▼
HandlePushMessageUseCase
         │
         ├── NotificationManager
         │
         ├── SyncRepository
         │
         └── Analytics
```

Ví dụ:

```kotlin
override fun onMessageReceived(
    message: RemoteMessage
) {
    val pushMessage = parser.parse(message)

    handlePushMessage(pushMessage)
}
```

---

# 13. Domain model cho push message

Không nên để `RemoteMessage` đi xuyên suốt toàn bộ application.

Có thể convert:

```kotlin
data class PushMessage(
    val type: PushType,
    val entityId: String?,
    val title: String?,
    val body: String?
)
```

Ví dụ enum:

```kotlin
enum class PushType {
    NEW_MESSAGE,
    ORDER_UPDATED,
    PROMOTION,
    UNKNOWN
}
```

Flow:

```text
RemoteMessage
      │
      ▼
PushMessageParser
      │
      ▼
PushMessage
      │
      ▼
Domain logic
```

Điều này giúp:

* Test dễ hơn.
* Giảm coupling với Firebase.
* Business logic không phụ thuộc SDK.

---

# 14. Tạo notification trên Android

App có thể tự xây dựng notification bằng:

```kotlin
NotificationCompat.Builder
```

Ví dụ:

```kotlin
val notification =
    NotificationCompat.Builder(
        context,
        CHANNEL_ID
    )
        .setSmallIcon(R.drawable.ic_notification)
        .setContentTitle("Tin nhắn mới")
        .setContentText("Bạn vừa nhận được một tin nhắn.")
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setAutoCancel(true)
        .build()
```

Sau đó:

```kotlin
NotificationManagerCompat
    .from(context)
    .notify(
        NOTIFICATION_ID,
        notification
    )
```

---

# 15. Notification Channel

Từ Android 8.0 trở lên, notification cần được tổ chức bằng **Notification Channel**.

Ví dụ:

```text
App
 │
 ├── Messages
 │
 ├── Orders
 │
 └── Promotions
```

Mỗi channel có thể có:

* Importance.
* Sound.
* Vibration.
* Description.

Ví dụ:

```kotlin
val channel = NotificationChannel(
    "messages",
    "Tin nhắn",
    NotificationManager.IMPORTANCE_HIGH
)
```

Sau đó:

```kotlin
notificationManager
    .createNotificationChannel(channel)
```

---

# 16. Thiết kế Notification Channel

Không nên tạo một channel duy nhất:

```text
default
```

cho tất cả thông báo nếu ứng dụng có nhiều loại notification.

Ví dụ tốt hơn:

```text
Notifications
      │
      ├── Messages
      │
      ├── Orders
      │
      ├── Account
      │
      └── Promotions
```

Điều này cho phép user tắt promotion nhưng vẫn nhận thông báo quan trọng.

Ví dụ:

```text
User settings

Messages       ON
Orders         ON
Account        ON
Promotions     OFF
```

Đây là một phần quan trọng của UX.

---

# 17. Notification Permission

Trên các phiên bản Android mới, ứng dụng có thể cần yêu cầu quyền:

```text
POST_NOTIFICATIONS
```

Trong manifest:

```xml
<uses-permission
    android:name="android.permission.POST_NOTIFICATIONS" />
```

Ứng dụng không nên xin permission ngay lập tức mà không có context.

UX tốt hơn:

```text
User thực hiện hành động
       │
       ▼
App giải thích lợi ích
       │
       ▼
Request notification permission
       │
       ├── Granted
       │
       └── Denied
```

Ví dụ:

```text
"Bật thông báo để nhận cập nhật khi đơn hàng
của bạn thay đổi trạng thái."
```

thường tốt hơn việc hỏi ngay khi app vừa mở.

---

# 18. Foreground và Background

Một điểm rất quan trọng của FCM là behavior có thể khác nhau tùy trạng thái ứng dụng.

```text
             FCM Message
                  │
       ┌──────────┴──────────┐
       ▼                     ▼
   Foreground            Background
       │                     │
       ▼                     ▼
App đang chạy          App không ở phía trước
```

Khi foreground:

```text
FCM
 │
 ▼
onMessageReceived()
 │
 ▼
App quyết định behavior
```

Ví dụ:

* Hiện notification.
* Hiện snackbar.
* Refresh UI.
* Không làm gì nếu user đang xem đúng màn hình.

---

# 19. UX khi app đang foreground

Giả sử user đang ở màn hình chat:

```text
Conversation A
```

và server gửi:

```text
New message
Conversation A
```

Nếu app luôn hiện system notification:

```text
Screen
   │
   ├── tin nhắn xuất hiện
   │
   └── notification cũng xuất hiện
```

UX có thể bị dư thừa.

Có thể thiết kế:

```text
Push Message
      │
      ▼
Current screen?
      │
 ┌────┴─────┐
 │          │
same chat  other
 │          │
 ▼          ▼
Update UI  Notification
```

---

# 20. Notification Click

Khi người dùng nhấn notification, ứng dụng thường cần điều hướng tới nội dung tương ứng.

Ví dụ:

```text
Notification
"Tin nhắn mới"
      │
      │ tap
      ▼
App
      │
      ▼
ConversationScreen
conversationId = 123
```

Dữ liệu cần được truyền qua:

```text
PendingIntent
```

hoặc deep link.

Ví dụ data:

```text
type = new_message
conversationId = 123
```

Điều quan trọng là phải xử lý cả trường hợp:

```text
App đang mở
App background
App bị kill
```

---

# 21. Deep Link với notification

Một kiến trúc sạch có thể biểu diễn:

```text
FCM
 │
 ▼
Notification
 │
 ▼
Deep Link
 │
 ▼
Navigation
 │
 ▼
Destination
```

Ví dụ:

```text
myapp://chat/123
```

hoặc:

```text
myapp://orders/ORD-1001
```

Điều này giảm việc nhét logic navigation trực tiếp vào Firebase service.

---

# 22. FCM không nên là nguồn dữ liệu chính

Push notification không phải lúc nào cũng được đảm bảo delivery ngay lập tức.

Do đó không nên thiết kế:

```text
Server DB
   │
   │ FCM payload chứa toàn bộ state
   ▼
Android App
   │
   ▼
Local database
```

và coi notification là nguồn dữ liệu duy nhất.

Tốt hơn:

```text
FCM
 │
 │ "Có dữ liệu mới"
 ▼
App
 │
 ▼
Repository
 │
 ▼
Backend API
 │
 ▼
Latest data
```

Tức là:

> FCM thường nên đóng vai trò **signal** rằng dữ liệu có thể đã thay đổi.

---

# 23. Push-triggered Sync

Ví dụ backend gửi:

```json
{
  "data": {
    "type": "order_updated",
    "orderId": "123"
  }
}
```

Android nhận message:

```text
FCM
 │
 ▼
order_updated
 │
 ▼
SyncOrderUseCase
 │
 ▼
OrderRepository
 │
 ▼
Backend API
 │
 ▼
Local Database
 │
 ▼
UI
```

Đây thường đáng tin cậy hơn việc xem payload notification là source of truth.

---

# 24. Kết hợp FCM với WorkManager

Một số công việc đồng bộ không nên chạy quá lâu trực tiếp bên trong service.

Có thể chuyển sang:

```text
FirebaseMessagingService
          │
          ▼
       WorkManager
          │
          ▼
        Worker
          │
          ▼
      Repository
```

Ví dụ:

```text
FCM:
"new_data_available"
          │
          ▼
Enqueue SyncWorker
          │
          ▼
Download latest data
```

WorkManager phù hợp khi công việc:

* Cần hoàn thành đáng tin cậy.
* Có network constraint.
* Có retry.
* Có thể trì hoãn một chút.

---

# 25. Topics

FCM hỗ trợ gửi message theo **topic**.

Ví dụ:

```text
Topic: football
```

Các device subscribe:

```text
Device A ─┐
Device B ─┼──► football
Device C ─┘
```

Backend chỉ cần gửi:

```text
football topic
```

FCM sẽ route tới các subscriber.

Ví dụ:

```kotlin
FirebaseMessaging
    .getInstance()
    .subscribeToTopic("android_news")
```

Topic phù hợp với:

* News category.
* Community.
* Public broadcast.
* Event update.

Không nên dùng topic để chứa thông tin riêng tư của từng user.

---

# 26. Subscribe và Unsubscribe

Ví dụ:

```kotlin
FirebaseMessaging
    .getInstance()
    .subscribeToTopic("promotions")
```

Khi user tắt:

```kotlin
FirebaseMessaging
    .getInstance()
    .unsubscribeFromTopic("promotions")
```

Có thể map:

```text
Notification Preferences
       │
       ├── Promotions ON
       │       ↓
       │ subscribe
       │
       └── Promotions OFF
               ↓
          unsubscribe
```

Tuy nhiên preference quan trọng vẫn nên được backend kiểm soát.

---

# 27. Security

FCM không nên được coi là kênh truyền dữ liệu bí mật.

Không nên gửi payload kiểu:

```json
{
  "password": "...",
  "accessToken": "...",
  "creditCard": "..."
}
```

Push payload có thể xuất hiện:

* Trong logs.
* Notification.
* Debugging tools.
* Device storage tạm thời.

Nguyên tắc:

```text
Push payload
    │
    ├── ID
    ├── event type
    └── minimal metadata
```

Sau đó:

```text
Android App
    │
    ▼
Authenticated API
    │
    ▼
Sensitive data
```

---

# 28. Không đặt server key trong Android app

Một lỗi nghiêm trọng là lưu credentials dùng để gửi FCM message trực tiếp trong APK.

Sai:

```text
Android APK
    │
    └── Firebase server credentials ❌
```

Kẻ tấn công có thể extract APK và lấy credential.

Đúng:

```text
Android App
     │
     ▼
Backend
     │
     ▼
Firebase Admin SDK
     │
     ▼
FCM
```

Client chỉ nhận message.

Backend mới có quyền gửi message.

---

# 29. Privacy

Push notification có thể hiển thị trên lock screen.

Ví dụ notification:

```text
"Bạn vừa nhận được kết quả xét nghiệm..."
```

có thể gây rò rỉ thông tin cá nhân nếu lock screen hiển thị đầy đủ.

Với dữ liệu nhạy cảm, có thể dùng nội dung chung hơn:

```text
"Bạn có một cập nhật mới."
```

Sau khi user mở app và xác thực:

```text
App
 │
 ▼
Secure API
 │
 ▼
Actual content
```

---

# 30. Notification Preference

Không phải loại notification nào cũng nên bật mặc định.

Có thể thiết kế:

```text
Notification Settings

[ON ] Tin nhắn
[ON ] Cập nhật đơn hàng
[ON ] Cảnh báo tài khoản
[OFF] Khuyến mãi
```

Backend cần tôn trọng các preference này.

Flow:

```text
User preference
      │
      ▼
Backend
      │
      ▼
Should send?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
FCM       Stop
```

---

# 31. Duplicate Message

Trong distributed systems, developer nên thiết kế để xử lý khả năng message trùng.

Ví dụ payload có:

```json
{
  "eventId": "evt_81275"
}
```

Client có thể:

```text
Receive eventId
      │
      ▼
Already handled?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
Ignore    Process
```

Đây là tư duy **idempotency**.

---

# 32. Tránh phụ thuộc FCM vào UI state

Không nên viết:

```kotlin
if (MainActivity.currentScreen == "chat") {
    ...
}
```

Service không nên phụ thuộc trực tiếp vào Activity.

Tốt hơn:

```text
MessagingService
       │
       ▼
Repository / Event layer
       │
       ▼
App State
       │
       ▼
UI
```

hoặc app chủ động query state cần thiết.

---

# 33. Lifecycle

FCM nằm ngoài lifecycle của Activity/Fragment.

Điều đó có nghĩa:

```text
Activity destroyed
       │
       │
       └── FCM vẫn có thể hoạt động
```

Vì vậy không nên:

```kotlin
FirebaseMessagingService {
    activity.updateUi()
}
```

Service không nên giữ reference tới Activity.

Thay vào đó:

```text
FCM Service
    │
    ▼
Database
    │
    ▼
Repository
    │
    ▼
Flow / StateFlow
    │
    ▼
ViewModel
    │
    ▼
Compose UI
```

---

# 34. State Flow hoàn chỉnh

Một thiết kế Android hiện đại có thể là:

```text
FCM Message
     │
     ▼
FirebaseMessagingService
     │
     ▼
Message Parser
     │
     ▼
Use Case
     │
     ▼
Repository
     │
     ▼
Room Database
     │
     ▼
Flow
     │
     ▼
ViewModel
     │
     ▼
StateFlow
     │
     ▼
Jetpack Compose
```

Ưu điểm:

* Không phụ thuộc lifecycle Activity.
* State được lưu trong data layer.
* UI tự động phản ứng với dữ liệu mới.

---

# 35. Ví dụ: ứng dụng Chat

Giả sử có ứng dụng chat.

Backend nhận message:

```text
User A
   │
   ▼
Backend
   │
   ├── Save database
   │
   └── Send FCM
             │
             ▼
          User B
```

Payload:

```json
{
  "data": {
    "type": "new_message",
    "conversationId": "c123",
    "messageId": "m987"
  }
}
```

Client:

```text
FCM
 │
 ▼
Parse message
 │
 ▼
Is conversation open?
 │
 ├── Yes
 │     └── Refresh conversation
 │
 └── No
       └── Show notification
```

---

# 36. Ví dụ: ứng dụng thương mại điện tử

Server cập nhật:

```text
Order
PROCESSING
    │
    ▼
SHIPPING
```

Backend gửi:

```json
{
  "data": {
    "type": "order_updated",
    "orderId": "ORD-123"
  }
}
```

Android:

```text
FCM
 │
 ▼
OrderUpdated
 │
 ▼
SyncOrder
 │
 ▼
Backend
 │
 ▼
Room
 │
 ▼
OrderScreen
```

Notification:

```text
Đơn hàng đang được giao

Đơn hàng ORD-123 đã được chuyển
sang đơn vị vận chuyển.
```

---

# 37. Ví dụ kiến trúc hoàn chỉnh

```text
                       CLOUD
┌─────────────────────────────────────────────┐
│                                             │
│                 Backend                     │
│                    │                        │
│                    ▼                        │
│            Firebase Admin SDK              │
│                    │                        │
│                    ▼                        │
│          Firebase Cloud Messaging          │
│                                             │
└────────────────────┬────────────────────────┘
                     │
                     │ Push
                     ▼
                  ANDROID
┌─────────────────────────────────────────────┐
│                                             │
│       FirebaseMessagingService             │
│                    │                        │
│                    ▼                        │
│            PushMessageParser               │
│                    │                        │
│                    ▼                        │
│         HandlePushMessageUseCase           │
│             │              │                │
│             ▼              ▼                │
│     Notification      Repository           │
│                          │                  │
│                          ▼                  │
│                     API / Room              │
│                          │                  │
│                          ▼                  │
│                       ViewModel             │
│                          │                  │
│                          ▼                  │
│                     Compose UI              │
│                                             │
└─────────────────────────────────────────────┘
```

---

# 38. Error Handling

Các lỗi cần nghĩ tới:

```text
Messaging Failure
      │
      ├── Token registration failed
      ├── Token expired
      ├── Backend unavailable
      ├── Invalid payload
      ├── Unknown message type
      ├── Notification denied
      └── Sync failed
```

Không nên crash app chỉ vì payload không đúng.

Ví dụ:

```kotlin
val type =
    message.data["type"]
        ?: return
```

Với unknown type:

```kotlin
when (type) {

    "new_message" -> handleMessage()

    "order_updated" -> handleOrder()

    else -> logger.log(
        "Unknown push type: $type"
    )
}
```

---

# 39. Retry

Nếu push yêu cầu đồng bộ dữ liệu:

```text
FCM
 │
 ▼
Sync
 │
 ▼
Network failed
```

có thể sử dụng:

```text
WorkManager
   +
Retry
   +
Backoff
```

Flow:

```text
FCM
 │
 ▼
SyncWorker
 │
 ▼
Network
 │
 ├── Success
 │      └── Done
 │
 └── Failed
        │
        ▼
      Retry
```

Không nên tự viết một vòng lặp retry vô hạn trong `FirebaseMessagingService`.

---

# 40. Testing

FCM integration nên có nhiều tầng test.

## Unit Test

Test parser:

```text
Payload
   │
   ▼
Parser
   │
   ▼
PushMessage
```

Ví dụ:

```kotlin
@Test
fun `parse new message notification`() {

    val data = mapOf(
        "type" to "new_message",
        "conversationId" to "123"
    )

    val result = parser.parse(data)

    assertEquals(
        PushType.NEW_MESSAGE,
        result.type
    )
}
```

---

# 41. Test Unknown Payload

Ví dụ:

```json
{
  "type": "something_new"
}
```

App không nên crash.

Expected:

```text
UNKNOWN
```

hoặc:

```text
Ignore safely
```

---

# 42. Integration Test

Có thể test flow:

```text
Fake PushMessage
       │
       ▼
HandlePushMessageUseCase
       │
       ▼
Repository
       │
       ▼
Expected result
```

Không nhất thiết mọi unit test phải gọi Firebase thật.

---

# 43. Manual Test

Checklist manual:

* [ ] App foreground.
* [ ] App background.
* [ ] App bị kill.
* [ ] Notification permission granted.
* [ ] Notification permission denied.
* [ ] Nhấn notification.
* [ ] Deep link đúng destination.
* [ ] Token refresh.
* [ ] Device mất mạng.
* [ ] Payload thiếu field.
* [ ] Unknown notification type.
* [ ] User logout.
* [ ] User login account khác.

---

# 44. Debugging

Một số thứ cần log:

```text
FCM_RECEIVED
FCM_PARSE_SUCCESS
FCM_PARSE_FAILED
NOTIFICATION_SHOWN
NOTIFICATION_OPENED
TOKEN_REFRESHED
TOKEN_REGISTERED
SYNC_STARTED
SYNC_FAILED
```

Nhưng:

> Không log token hoặc dữ liệu nhạy cảm bừa bãi trong production.

Ví dụ không tốt:

```text
User token = abcdef123...
```

---

# 45. Analytics

Có thể đo notification funnel:

```text
Notification Sent
       │
       ▼
Notification Delivered
       │
       ▼
Notification Opened
       │
       ▼
Destination Viewed
       │
       ▼
Conversion
```

Ví dụ:

```text
10,000 sent
   ↓
8,500 delivered
   ↓
2,400 opened
   ↓
500 converted
```

Nhưng tracking cần tuân thủ:

* Privacy policy.
* User consent.
* Data minimization.

---

# 46. Các anti-pattern phổ biến

## Anti-pattern 1 — Business logic trong service

```text
FirebaseMessagingService
      ↓
Everything
```

Thay bằng:

```text
Service
  ↓
Use Case
  ↓
Repository
```

---

## Anti-pattern 2 — Lưu server credential trong app

```text
APK
 ↓
Server Key ❌
```

---

## Anti-pattern 3 — Dùng push làm source of truth

```text
FCM payload
    ↓
Database
```

Nên:

```text
FCM
 ↓
Trigger Sync
 ↓
Backend
 ↓
Database
```

---

## Anti-pattern 4 — Không xử lý token refresh

```text
Install
  ↓
Save token once
  ↓
Never update
```

Có thể khiến notification dừng hoạt động.

---

## Anti-pattern 5 — Luôn hiện notification

Không kiểm tra:

```text
foreground
current screen
notification preference
```

dẫn tới UX kém.

---

## Anti-pattern 6 — Payload chứa dữ liệu nhạy cảm

Push notification không phải nơi phù hợp để truyền bí mật.

---

# 47. Thiết kế package gợi ý

```text
com.example.app
│
├── notification
│   ├── AppFirebaseMessagingService.kt
│   ├── NotificationFactory.kt
│   ├── NotificationChannelManager.kt
│   └── PushMessageParser.kt
│
├── domain
│   ├── model
│   │   └── PushMessage.kt
│   │
│   └── usecase
│       └── HandlePushMessageUseCase.kt
│
├── data
│   ├── MessagingRepository.kt
│   └── MessagingRepositoryImpl.kt
│
├── worker
│   └── SyncWorker.kt
│
└── ui
    └── ...
```

---

# 48. Thực hành

Xây dựng một demo nhỏ có flow:

```text
FCM
 │
 ▼
Android App
 │
 ▼
Notification
 │
 │ tap
 ▼
Detail Screen
```

## Bước 1 — Tạo Firebase project

Liên kết Android app với Firebase.

---

## Bước 2 — Thêm Firebase Messaging

Tích hợp Firebase Cloud Messaging SDK vào project.

---

## Bước 3 — Tạo Messaging Service

```kotlin
class AppFirebaseMessagingService :
    FirebaseMessagingService() {

    override fun onMessageReceived(
        message: RemoteMessage
    ) {
        // Parse và xử lý message.
    }

    override fun onNewToken(token: String) {
        // Đồng bộ token.
    }
}
```

---

## Bước 4 — Tạo Notification Channel

Ví dụ:

```text
messages
```

---

## Bước 5 — Xin Notification Permission

Xử lý:

```text
Granted
Denied
```

---

## Bước 6 — Gửi test notification

Test:

```text
Firebase Console
       │
       ▼
FCM
       │
       ▼
Android Device
```

---

## Bước 7 — Xử lý click

Khi user nhấn:

```text
Notification
     │
     ▼
DetailScreen
```

---

## Bước 8 — Test background

Kiểm tra:

```text
Foreground
Background
App killed
```

---

# 49. Bài tập

Thiết kế hệ thống notification cho một ứng dụng bán hàng.

Ứng dụng cần hỗ trợ ba loại:

```text
ORDER_UPDATED
PROMOTION
CHAT_MESSAGE
```

Payload ví dụ:

```json
{
  "type": "ORDER_UPDATED",
  "entityId": "ORD-1001"
}
```

Yêu cầu:

1. Định nghĩa `PushMessage`.
2. Viết `PushMessageParser`.
3. Viết `HandlePushMessageUseCase`.
4. Thiết kế Notification Channel.
5. Xử lý foreground/background.
6. Xử lý click notification.
7. Xử lý token refresh.
8. Xử lý notification permission denied.
9. Đưa logic sync sang WorkManager nếu cần.
10. Không đặt business logic trực tiếp trong Firebase SDK layer.

---

# 50. Artifact cho portfolio

Một project portfolio tốt có thể trình bày:

```text
Android FCM Demo
│
├── Firebase Cloud Messaging
├── Notification Permission
├── Notification Channels
├── Data Message
├── Deep Link
├── Token Management
├── Repository Abstraction
├── WorkManager Sync
├── Unit Tests
└── README Architecture Diagram
```

README nên có sơ đồ:

```text
Backend
   │
   ▼
Firebase Cloud Messaging
   │
   ▼
MessagingService
   │
   ▼
Use Case
   │
   ├── Notification
   │
   └── Repository
          │
          ▼
       Backend API
```

---

# 51. Checklist hoàn thành

## Kiến thức

* [ ] Giải thích được Firebase Cloud Messaging.
* [ ] Hiểu registration token.
* [ ] Hiểu token refresh.
* [ ] Phân biệt notification message và data message.
* [ ] Hiểu topic messaging.
* [ ] Hiểu foreground/background behavior.

## Android

* [ ] Tạo được `FirebaseMessagingService`.
* [ ] Tạo Notification Channel.
* [ ] Hiển thị notification.
* [ ] Xử lý notification permission.
* [ ] Xử lý click notification.
* [ ] Xử lý deep link.
* [ ] Không giữ reference tới Activity trong service.

## Architecture

* [ ] Firebase SDK được cô lập khỏi domain layer.
* [ ] Có `PushMessage` domain model.
* [ ] Có parser riêng.
* [ ] Có repository hoặc use case.
* [ ] Business logic không nằm toàn bộ trong service.
* [ ] Long-running sync dùng WorkManager nếu phù hợp.

## Security & Privacy

* [ ] Không chứa server credential trong APK.
* [ ] Không gửi dữ liệu bí mật trong push payload.
* [ ] Notification lock screen được cân nhắc.
* [ ] User preference được tôn trọng.
* [ ] Không log token hoặc dữ liệu nhạy cảm không cần thiết.

## Testing

* [ ] Test parser.
* [ ] Test unknown payload.
* [ ] Test foreground.
* [ ] Test background.
* [ ] Test app killed.
* [ ] Test permission denied.
* [ ] Test token refresh.
* [ ] Test notification click.

## Portfolio

* [ ] Có source code.
* [ ] Có architecture diagram.
* [ ] Có screenshot notification.
* [ ] Có README.
* [ ] Có test.
* [ ] Có ghi chú security/privacy.

---

# 52. Ghi chú production

Khi đưa Firebase Cloud Messaging vào production, cần nhớ:

> **Push notification là một phần của hệ thống phân tán, không chỉ là một UI component.**

Luôn đặt các câu hỏi:

```text
Message này được tạo từ đâu?

        ↓

Nếu message không tới thì sao?

        ↓

Nếu message tới hai lần thì sao?

        ↓

Nếu token đã thay đổi thì sao?

        ↓

Nếu user logout thì sao?

        ↓

Nếu app đang foreground thì sao?

        ↓

Nếu user tắt notification thì sao?

        ↓

Nếu payload bị thiếu field thì sao?

        ↓

Nếu sync thất bại thì sao?

        ↓

Có dữ liệu nhạy cảm trong notification không?
```

Một implementation FCM production-ready nên hướng tới kiến trúc:

```text
                     BACKEND
                        │
                        ▼
             Firebase Cloud Messaging
                        │
                        ▼
             FirebaseMessagingService
                        │
                        ▼
                 Message Parser
                        │
                        ▼
                    Use Case
                 ┌──────┴──────┐
                 ▼             ▼
           Notification    Repository
                               │
                         ┌─────┴─────┐
                         ▼           ▼
                       Room       Backend
                         │
                         ▼
                       Flow
                         │
                         ▼
                    ViewModel
                         │
                         ▼
                    Compose UI
```

Mục tiêu cuối cùng không phải chỉ là:

> **“Ứng dụng nhận được push notification.”**

Mà là:

> **“Ứng dụng có một hệ thống messaging ổn định, kiểm thử được, bảo mật, tôn trọng quyền riêng tư, xử lý đúng lifecycle và không làm Firebase SDK xâm nhập toàn bộ kiến trúc ứng dụng.”**

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
