# 003 — Firestore

| Thuộc tính              | Nội dung                         |
| ----------------------- | -------------------------------- |
| **Học phần**            | 04 — Network, Async and Services |
| **Module**              | Module 09 — Common Services      |
| **Nhóm nội dung**       | Firebase                         |
| **Nguồn roadmap**       | Common Services / Firebase       |
| **Loại bài**            | Release / Service                |
| **Thứ tự trong module** | 003                              |
| **Thời lượng gợi ý**    | 32 phút                          |

---

## 1. Tóm tắt

**Cloud Firestore** là cơ sở dữ liệu **NoSQL dạng document** thuộc Firebase. Thay vì lưu dữ liệu theo `table → row` như SQL, Firestore tổ chức dữ liệu theo:

```text
Collection
    └── Document
            ├── Field
            ├── Field
            └── Subcollection
```

Ví dụ:

```text
users
└── user_123
    ├── name: "An"
    ├── email: "an@example.com"
    │
    └── notes
        ├── note_001
        │   ├── title: "Learn Firestore"
        │   └── completed: false
        │
        └── note_002
```

Firestore hỗ trợ **query, realtime listener, offline cache, transactions và Security Rules**. Trên Android và Apple platforms, offline persistence hiện được bật mặc định; dữ liệu đã dùng có thể được đọc từ cache và các thay đổi local được đồng bộ lại khi thiết bị online. ([Firebase][1])

Trong một ứng dụng Android production, Firestore không nên được gọi trực tiếp từ mọi `Activity`, `Fragment` hoặc `Composable`. Nên đặt SDK phía sau **Repository/Data Source** để UI không phụ thuộc trực tiếp vào Firebase.

---

# 2. Mục tiêu học tập

Sau bài này, bạn có thể:

* Giải thích được Firestore là gì và khác SQL cơ bản ở điểm nào.
* Hiểu `Collection`, `Document`, `Field`, `Subcollection`.
* Thực hiện CRUD với Firestore trên Android.
* Nhận dữ liệu realtime.
* Hiểu offline persistence.
* Viết query và nhận biết khi cần index.
* Hiểu vai trò của **Firebase Authentication + Security Rules**.
* Biết khi nào cần transaction hoặc batch write.
* Tích hợp Firestore theo kiến trúc Repository.
* Quản lý listener theo lifecycle.
* Test Firestore bằng Firebase Emulator.
* Chuẩn bị checklist trước khi đưa Firestore lên production.

---

# 3. Firestore là gì?

Firestore là database **NoSQL, document-oriented**.

Dữ liệu được lưu thành các document chứa các cặp:

```text
field → value
```

và document được nhóm trong collection. Firestore không sử dụng bảng và hàng theo kiểu relational database. ([Firebase][1])

Ví dụ document:

```text
notes/note_123
```

```json
{
  "title": "Learn Firestore",
  "content": "Understand collections and documents",
  "completed": false,
  "ownerId": "user_123"
}
```

---

# 4. Mô hình dữ liệu Firestore

## 4.1 Collection

Collection chứa nhiều document.

```text
notes
├── note_001
├── note_002
└── note_003
```

Không thể lưu field trực tiếp trên collection.

---

## 4.2 Document

Document là đơn vị dữ liệu chính.

```text
notes/note_001
```

```text
title     = "Firestore"
completed = false
priority  = 3
```

Document có một ID duy nhất trong collection.

Có thể tự đặt ID:

```text
users/user_123
```

hoặc để Firestore tạo random ID.

---

## 4.3 Field

Document chứa các field.

Firestore hỗ trợ nhiều kiểu dữ liệu như:

```text
String
Boolean
Number
Timestamp
Array
Map
GeoPoint
DocumentReference
null
```

---

## 4.4 Subcollection

Document có thể chứa subcollection.

Ví dụ ứng dụng chat:

```text
rooms
└── room_01
    ├── name: "Android Team"
    │
    └── messages
        ├── message_001
        ├── message_002
        └── message_003
```

Một điểm dễ mắc lỗi: **xóa document cha không tự động xóa các document trong subcollection của nó**. ([Firebase][1])

---

# 5. Firestore trong kiến trúc Android

Không nên:

```text
Composable
    ↓
FirebaseFirestore
```

hoặc:

```text
Activity
    ↓
Firestore SDK
```

Cấu trúc tốt hơn:

```text
┌─────────────────────────────┐
│         Compose UI          │
└──────────────┬──────────────┘
               │ UI State
               ▼
┌─────────────────────────────┐
│          ViewModel          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          Repository         │
└──────────────┬──────────────┘
               │
        ┌──────┴───────┐
        ▼              ▼
┌──────────────┐ ┌──────────────┐
│  Firestore   │ │ Room / Cache │
│ Data Source  │ │   optional   │
└──────────────┘ └──────────────┘
```

### Lợi ích

Repository giúp:

* tách Firebase SDK khỏi UI;
* dễ mock khi test;
* dễ đổi backend;
* tập trung logic mapping;
* tập trung xử lý lỗi;
* quản lý realtime listener tốt hơn.

---

# 6. Cài Firestore vào Android

Firebase hiện khuyến nghị quản lý dependency Android thông qua **Firebase Android BoM**, sau đó khai báo `firebase-firestore` mà không gắn version riêng cho từng Firebase library. ([Firebase][2])

Ví dụ:

```kotlin
dependencies {
    implementation(
        platform("com.google.firebase:firebase-bom:<current-version>")
    )

    implementation("com.google.firebase:firebase-firestore")
}
```

Sau khi cấu hình Firebase:

```kotlin
val db = FirebaseFirestore.getInstance()
```

`db` là entry point để truy cập Firestore.

---

# 7. Tạo model

Ví dụ ứng dụng ghi chú:

```kotlin
data class Note(
    val id: String = "",
    val ownerId: String = "",
    val title: String = "",
    val content: String = "",
    val completed: Boolean = false,
    val updatedAt: Timestamp? = null
)
```

Firestore có thể ánh xạ document vào Kotlin object:

```kotlin
val note = document.toObject(Note::class.java)
```

Document ID không nhất thiết nằm trong dữ liệu nên thường cần:

```kotlin
val note = document
    .toObject(Note::class.java)
    ?.copy(id = document.id)
```

---

# 8. CREATE — thêm document

Ví dụ:

```kotlin
val note = hashMapOf(
    "title" to "Learn Firestore",
    "content" to "Study CRUD",
    "completed" to false,
    "updatedAt" to FieldValue.serverTimestamp()
)

db.collection("notes")
    .add(note)
    .addOnSuccessListener { document ->
        Log.d("Firestore", "ID = ${document.id}")
    }
    .addOnFailureListener { error ->
        Log.e("Firestore", "Create failed", error)
    }
```

Firestore tự sinh ID:

```text
notes
└── Xk20ja8M...
```

---

# 9. SET — dùng ID xác định

Ví dụ:

```kotlin
val uid = FirebaseAuth
    .getInstance()
    .currentUser
    ?.uid
    ?: return

val user = mapOf(
    "displayName" to "An",
    "updatedAt" to FieldValue.serverTimestamp()
)

db.collection("users")
    .document(uid)
    .set(user)
```

Kết quả:

```text
users
└── <Firebase UID>
    ├── displayName
    └── updatedAt
```

Đây là pattern rất phổ biến:

```text
Firebase Auth UID
        ↓
Firestore document ID
```

---

# 10. READ — đọc một document

```kotlin
db.collection("notes")
    .document(noteId)
    .get()
    .addOnSuccessListener { document ->

        if (document.exists()) {
            val note = document.toObject(Note::class.java)
        }

    }
    .addOnFailureListener { error ->

        Log.e("Firestore", "Read failed", error)

    }
```

---

# 11. READ — đọc collection

```kotlin
db.collection("notes")
    .get()
    .addOnSuccessListener { snapshot ->

        val notes = snapshot.documents.mapNotNull { doc ->

            doc.toObject(Note::class.java)
                ?.copy(id = doc.id)
        }

    }
```

Tuy nhiên:

```text
collection("notes").get()
```

không phải lúc nào cũng là lựa chọn tốt.

Nếu collection lớn, nên query:

```text
filter
+
orderBy
+
limit
+
pagination
```

---

# 12. UPDATE — cập nhật document

```kotlin
db.collection("notes")
    .document(noteId)
    .update(
        mapOf(
            "completed" to true,
            "updatedAt" to FieldValue.serverTimestamp()
        )
    )
```

Hoặc:

```kotlin
db.collection("notes")
    .document(noteId)
    .update("completed", true)
```

---

# 13. DELETE — xóa document

```kotlin
db.collection("notes")
    .document(noteId)
    .delete()
```

Nhớ rằng:

```text
delete parent document
        ≠
delete all subcollections
```

Ví dụ:

```text
rooms/room1
└── messages/message1
```

xóa:

```text
rooms/room1
```

không có nghĩa `messages/message1` tự biến mất. ([Firebase][1])

---

# 14. Realtime Listener

Một ưu điểm quan trọng của Firestore là có thể nghe thay đổi realtime.

```kotlin
val registration = db.collection("notes")
    .addSnapshotListener { snapshot, error ->

        if (error != null) {
            Log.e("Firestore", "Listen failed", error)
            return@addSnapshotListener
        }

        val notes = snapshot
            ?.documents
            ?.mapNotNull { document ->

                document
                    .toObject(Note::class.java)
                    ?.copy(id = document.id)
            }
            .orEmpty()
    }
```

Luồng:

```text
User A
  │
  │ update document
  ▼
Firestore
  │
  ├───────────────┐
  ▼               ▼
User A           User B
listener         listener
```

Realtime listeners nhận snapshot khi dữ liệu đang theo dõi thay đổi. ([Firebase][3])

---

# 15. Chuyển listener thành Kotlin Flow

Một cách phù hợp với Android hiện đại:

```text
Firestore listener
        ↓
callbackFlow
        ↓
Repository
        ↓
ViewModel
        ↓
StateFlow
        ↓
Compose
```

Ví dụ:

```kotlin
class NoteRepository(
    private val db: FirebaseFirestore =
        FirebaseFirestore.getInstance()
) {

    fun observeNotes(
        uid: String
    ): Flow<List<Note>> = callbackFlow {

        val registration = db
            .collection("users")
            .document(uid)
            .collection("notes")
            .orderBy(
                "updatedAt",
                Query.Direction.DESCENDING
            )
            .addSnapshotListener { snapshot, error ->

                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }

                val notes = snapshot
                    ?.documents
                    ?.mapNotNull { document ->

                        document
                            .toObject(Note::class.java)
                            ?.copy(id = document.id)
                    }
                    .orEmpty()

                trySend(notes)
            }

        awaitClose {
            registration.remove()
        }
    }
}
```

Điểm quan trọng:

```kotlin
awaitClose {
    registration.remove()
}
```

giúp hủy Firestore listener khi Flow không còn được collect.

---

# 16. ViewModel

```kotlin
class NotesViewModel(
    repository: NoteRepository,
    uid: String
) : ViewModel() {

    val notes = repository
        .observeNotes(uid)
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = emptyList()
        )
}
```

Compose:

```kotlin
@Composable
fun NotesScreen(
    viewModel: NotesViewModel
) {

    val notes by viewModel.notes.collectAsStateWithLifecycle()

    LazyColumn {

        items(notes) { note ->

            Text(
                text = note.title
            )
        }
    }
}
```

---

# 17. Vì sao lifecycle quan trọng?

Sai:

```text
Activity
   ↓
addSnapshotListener()
   ↓
Activity destroyed
   ↓
listener vẫn tồn tại
```

Có thể dẫn đến:

```text
duplicate listener
unnecessary reads
memory/resource leak
duplicate UI update
```

Nên để lifecycle quản lý thông qua:

```text
Repository Flow
       ↓
ViewModel
       ↓
collectAsStateWithLifecycle()
```

---

# 18. Offline Persistence

Firestore hỗ trợ offline cache.

Trên Android, offline persistence hiện được bật mặc định. Khi offline, SDK có thể đọc/query dữ liệu cache và queue một số thao tác ghi; khi network quay lại, local changes sẽ được đồng bộ với backend. Với nhiều thay đổi trên cùng document, cơ chế đồng bộ offline áp dụng **last write wins**. ([Firebase][4])

Ví dụ:

```text
09:00
User sửa note
        ↓
Internet mất
        ↓
Firestore local cache
        ↓
UI vẫn cập nhật
        ↓

09:05
Network online
        ↓
Firestore sync
        ↓
Cloud database
```

---

# 19. UX khi dùng offline

Không nên giả định:

```text
Có dữ liệu
=
dữ liệu chắc chắn vừa đến từ server
```

Snapshot có metadata để nhận biết dữ liệu đến từ cache hay server. ([Firebase][4])

UX có thể hiển thị:

```text
✓ Synced
```

hoặc:

```text
⏳ Waiting for connection
```

Ví dụ trạng thái UI:

```kotlin
sealed interface SyncState {

    data object Synced : SyncState

    data object Local : SyncState

    data class Error(
        val message: String
    ) : SyncState
}
```

---

# 20. Query

Ví dụ lấy các note chưa hoàn thành:

```kotlin
db.collection("notes")
    .whereEqualTo(
        "completed",
        false
    )
    .get()
```

---

## Query + sort

```kotlin
db.collection("notes")
    .whereEqualTo(
        "completed",
        false
    )
    .orderBy(
        "updatedAt",
        Query.Direction.DESCENDING
    )
```

---

## Limit

```kotlin
db.collection("notes")
    .orderBy(
        "updatedAt",
        Query.Direction.DESCENDING
    )
    .limit(20)
```

---

# 21. Index

Firestore sử dụng index để phục vụ query.

Các query đơn giản thường được hỗ trợ bởi automatic indexes. Những query phức tạp có thể cần **manual/composite index**; nếu thiếu, Firestore thường trả lỗi kèm đường dẫn giúp tạo index cần thiết. ([Firebase][5])

Ví dụ:

```kotlin
.whereEqualTo(
    "completed",
    false
)
.orderBy(
    "updatedAt",
    Query.Direction.DESCENDING
)
```

có thể cần index kiểu:

```text
completed ↑
updatedAt ↓
```

---

## Không nên giải quyết thiếu index bằng cách

```text
Download toàn bộ collection
        ↓
filter bằng Kotlin
        ↓
sort bằng Kotlin
```

Ví dụ xấu:

```kotlin
db.collection("notes")
    .get()
    .addOnSuccessListener {

        val result = it.documents
            .filter { doc ->
                doc.getBoolean("completed") == false
            }
    }
```

Điều này có thể:

```text
↑ network
↑ reads
↑ memory
↑ latency
↑ cost
```

---

# 22. Pagination

Không nên:

```text
load 100,000 documents
```

Nên:

```text
Page 1
20 documents
      ↓
lastDocument
      ↓
Page 2
20 documents
```

Ý tưởng:

```kotlin
query
    .limit(20)
```

sau đó:

```kotlin
query
    .startAfter(lastDocument)
    .limit(20)
```

---

# 23. Transaction

Giả sử document:

```json
{
  "likes": 15
}
```

Hai user cùng tăng:

```text
User A reads 15
User B reads 15

User A writes 16
User B writes 16
```

Kết quả sai:

```text
16
```

mong muốn:

```text
17
```

Firestore transaction phù hợp khi giá trị mới phụ thuộc vào dữ liệu hiện tại.

```kotlin
db.runTransaction { transaction ->

    val ref = db.collection("posts")
        .document(postId)

    val snapshot = transaction.get(ref)

    val likes = snapshot
        .getLong("likes")
        ?: 0

    transaction.update(
        ref,
        "likes",
        likes + 1
    )
}
```

Firestore có thể retry transaction khi document đọc trong transaction bị concurrent modification. ([Firebase][6])

---

# 24. Batched Write

Nếu không cần đọc dữ liệu trước khi ghi nhưng cần nhiều write cùng thành công hoặc cùng thất bại:

```kotlin
val batch = db.batch()

val userRef =
    db.collection("users").document(uid)

val profileRef =
    db.collection("profiles").document(uid)

batch.update(
    userRef,
    "name",
    "An"
)

batch.update(
    profileRef,
    "displayName",
    "An"
)

batch.commit()
```

Khác biệt:

| Transaction                    | Batch                         |
| ------------------------------ | ----------------------------- |
| Có thể read + write            | Chỉ nhóm write                |
| Có thể retry khi conflict      | Không dùng logic đọc-rồi-tính |
| Giá trị mới phụ thuộc state cũ | Nhiều write cần atomic        |

Firestore bảo đảm atomicity cho transaction và batched writes: toàn bộ nhóm thao tác thành công hoặc không thao tác nào được áp dụng. ([Firebase][6])

---

# 25. Firestore Security Rules

Một lỗi rất nguy hiểm:

```javascript
allow read, write: if true;
```

Điều đó tương đương:

```text
Internet
   ↓
Anyone
   ↓
Firestore
```

Firebase cảnh báo không sử dụng open rules như vậy trong production. ([Firebase][7])

---

# 26. Authentication + Rules

Architecture:

```text
          Firebase Auth
               │
               │ UID
               ▼
Android ──► Firestore Request
               │
               ▼
        Security Rules
               │
           ┌───┴───┐
           ▼       ▼
         allow    deny
```

Firebase khuyến nghị mobile/web clients bảo vệ Cloud Firestore bằng **Firebase Authentication + Firestore Security Rules**. ([Firebase][8])

---

# 27. Rule theo user

Cấu trúc:

```text
users
└── {uid}
    └── notes
        └── {noteId}
```

Rule:

```javascript
rules_version = '2';

service cloud.firestore {

  match /databases/{database}/documents {

    match /users/{uid} {

      allow read, write:
        if request.auth != null
        && request.auth.uid == uid;

      match /notes/{noteId} {

        allow read, write:
          if request.auth != null
          && request.auth.uid == uid;
      }
    }
  }
}
```

Như vậy:

```text
User A
   ↓
users/A/notes
   ✓

User A
   ↓
users/B/notes
   ✗
```

---

# 28. Security Rules không phải filter

Đây là khái niệm rất quan trọng.

Rules không hoạt động kiểu:

```text
query 100 documents
        ↓
Rules loại 80 document
        ↓
return 20
```

Firestore đánh giá liệu **query có đảm bảo chỉ trả về dữ liệu được phép hay không**; rules không phải bộ lọc hậu xử lý cho query. ([Firebase][9])

Vì vậy query phải phù hợp với mô hình security.

---

# 29. Không tin dữ liệu từ client

Không nên chỉ kiểm tra:

```kotlin
if (currentUser.uid == ownerId) {
    save()
}
```

vì client có thể bị sửa.

Security thực sự phải được enforce tại:

```text
Firestore Security Rules
```

UI/client validation chỉ giúp UX.

---

# 30. State của màn hình Firestore

Không nên dùng:

```text
List<Note>
```

làm toàn bộ UI state.

Nên phân biệt:

```kotlin
sealed interface NotesUiState {

    data object Loading : NotesUiState

    data class Success(
        val notes: List<Note>
    ) : NotesUiState

    data class Error(
        val message: String
    ) : NotesUiState
}
```

Luồng:

```text
Firestore
    │
    ├──── loading
    │
    ├──── success
    │
    └──── error
          ↓
      ViewModel
          ↓
       Compose
```

---

# 31. Các lỗi cần xử lý

Firestore có thể thất bại vì:

```text
Permission denied
Missing index
Network unavailable
Invalid query
Authentication expired
Malformed data
Document missing
Quota / billing
Timeout
```

UI không nên:

```text
catch(Exception) {
    // ignore
}
```

Nên mapping sang lỗi domain:

```text
FirebaseFirestoreException
          ↓
Repository
          ↓
DataError
          ↓
ViewModel
          ↓
UI message / retry
```

---

# 32. Chi phí và performance

Firestore nên được thiết kế theo **query thực tế của app**.

Không nên tạo cấu trúc dữ liệu trước rồi sau đó mới hỏi:

> Làm sao query?

Nên bắt đầu:

```text
Screen
   ↓
Use case
   ↓
Required query
   ↓
Firestore data model
   ↓
Indexes
   ↓
Security Rules
```

---

## Ví dụ

Màn hình cần:

> 20 bài viết mới nhất của user.

Data model có thể:

```text
posts
├── post1
│   ├── authorId
│   └── createdAt
```

Query:

```text
where authorId == uid
orderBy createdAt DESC
limit 20
```

Từ đó thiết kế index phù hợp.

---

# 33. Tránh hotspot ID

Không nên tự tạo ID tuần tự kiểu:

```text
note000001
note000002
note000003
note000004
```

Firestore khuyến nghị tránh document ID tăng tuần tự vì có thể tạo hotspot và tăng latency khi write ở quy mô lớn. ([Firebase][10])

Thường nên dùng:

```text
Firestore Auto ID
```

hoặc ID có tính phân tán phù hợp với domain.

---

# 34. Mini project thực hành

## FireNotes

Tạo ứng dụng:

> **Firebase Notes**

Chức năng:

```text
Login
  ↓
Notes Screen
  ├── Create note
  ├── Update note
  ├── Delete note
  ├── Realtime sync
  └── Offline support
```

Data:

```text
users
└── {uid}
    └── notes
        └── {noteId}
            ├── title
            ├── content
            ├── completed
            ├── createdAt
            └── updatedAt
```

---

# 35. Kiến trúc mini project

```text
┌────────────────────────────────┐
│            Compose             │
│                                │
│ LoginScreen                    │
│ NotesScreen                    │
│ NoteEditorScreen               │
└───────────────┬────────────────┘
                │
                ▼
┌────────────────────────────────┐
│            ViewModel           │
└───────────────┬────────────────┘
                │
                ▼
┌────────────────────────────────┐
│          NoteRepository        │
└───────────────┬────────────────┘
                │
                ▼
┌────────────────────────────────┐
│      Firebase Firestore        │
└────────────────────────────────┘
                │
        Security Rules
                │
                ▼
┌────────────────────────────────┐
│      Firebase Authentication   │
└────────────────────────────────┘
```

---

# 36. Test cần thực hiện

## CRUD

* [ ] Create note thành công.
* [ ] Read note thành công.
* [ ] Update note thành công.
* [ ] Delete note thành công.

## Authentication

* [ ] User chưa login không đọc được dữ liệu riêng tư.
* [ ] User A đọc được dữ liệu User A.
* [ ] User A không đọc được dữ liệu User B.

## Realtime

* [ ] Thêm document từ Firebase Console → UI cập nhật.
* [ ] Sửa document → UI cập nhật.
* [ ] Xóa document → UI cập nhật.

## Offline

* [ ] Tắt mạng.
* [ ] Mở dữ liệu đã cache.
* [ ] Thêm/sửa dữ liệu.
* [ ] Bật mạng.
* [ ] Kiểm tra đồng bộ.

## Lifecycle

* [ ] Rotate màn hình không tạo duplicate listener.
* [ ] Navigate đi và quay lại không nhân listener.
* [ ] Background/foreground không crash.

---

# 37. Firebase Emulator

Không nên test mọi thứ trực tiếp trên production database.

Nên có:

```text
Android Test
      ↓
Firebase Emulator
      ↓
Firestore
Auth
Security Rules
```

Firebase khuyến nghị dùng Firestore Emulator để thử và kiểm chứng Security Rules trước khi deploy production. ([Firebase][7])

Đặc biệt nên test:

```text
allowed request
denied request
wrong UID
missing authentication
invalid field
unexpected update
```

---

# 38. Debugging checklist

Khi Firestore không hoạt động:

```text
Firestore error
      │
      ├── PERMISSION_DENIED
      │       ↓
      │   Security Rules
      │
      ├── FAILED_PRECONDITION
      │       ↓
      │   Missing index?
      │
      ├── Empty result
      │       ↓
      │   Query / field / cache
      │
      └── Duplicate updates
              ↓
          Listener lifecycle
```

Kiểm tra lần lượt:

1. Firebase project đúng chưa?
2. `google-services.json` đúng app chưa?
3. User đã login chưa?
4. UID là gì?
5. Document path đúng chưa?
6. Security Rules cho phép không?
7. Query đúng field name không?
8. Có thiếu index không?
9. Dữ liệu đang từ cache hay server?
10. Listener có được remove đúng không?

---

# 39. Production checklist

## Configuration

* [ ] Firebase project production đã tách khỏi development nếu cần.
* [ ] `google-services.json` đúng môi trường.
* [ ] Application ID đúng.
* [ ] Firestore database region được chọn hợp lý.
* [ ] Dependency Firebase sử dụng BoM.

## Security

* [ ] Không còn `allow read, write: if true`.
* [ ] Authentication được kiểm tra.
* [ ] Ownership được kiểm tra.
* [ ] Validate dữ liệu đầu vào khi cần.
* [ ] Security Rules đã được test.
* [ ] App Check được xem xét cho production.

Firebase cũng khuyến nghị bắt đầu với rules hạn chế và coi Security Rules gần giống một phần của schema thay vì để đến cuối dự án mới viết. ([Firebase][11])

## Data

* [ ] Data model đã review.
* [ ] Không tạo document quá lớn.
* [ ] Không tải collection vô hạn.
* [ ] Pagination được dùng cho danh sách lớn.
* [ ] Subcollection deletion được xử lý.

## Query

* [ ] Query có `limit`.
* [ ] Index cần thiết đã deploy.
* [ ] Không filter/sort toàn bộ dữ liệu trên client.
* [ ] Kiểm tra read cost.

## Lifecycle

* [ ] Listener được remove đúng lúc.
* [ ] Rotate không duplicate listener.
* [ ] Background/foreground ổn định.

## Offline

* [ ] Hiểu dữ liệu có thể đến từ cache.
* [ ] Có UX cho trạng thái sync.
* [ ] Conflict behavior được chấp nhận.

## Release

* [ ] Rules production đã deploy.
* [ ] Indexes production đã deploy.
* [ ] Emulator tests pass.
* [ ] Smoke test build release.
* [ ] Kiểm tra Crashlytics/logging nếu sử dụng.
* [ ] Có phương án rollback rules/index/app version.

---

# 40. Release artifact

Một release checklist item có thể viết:

| Thuộc tính       | Nội dung                                                      |
| ---------------- | ------------------------------------------------------------- |
| **Artifact**     | `firestore.rules`, `firestore.indexes.json`, APK/AAB          |
| **Owner**        | Android / Backend-Firebase developer                          |
| **Verification** | CRUD + Auth + Rules + offline + index test                    |
| **Security**     | User chỉ truy cập dữ liệu thuộc UID của mình                  |
| **Rollback**     | Redeploy rules/index configuration trước đó hoặc rollback app |
| **Monitoring**   | Crash/error rate, denied requests, read/write volume          |

---

# 41. Artifact cho portfolio

Repository portfolio nên có:

```text
firebase-notes/
│
├── app/
│
├── data/
│   ├── model/
│   │   └── Note.kt
│   │
│   └── repository/
│       └── NoteRepository.kt
│
├── presentation/
│   ├── NotesViewModel.kt
│   └── NotesScreen.kt
│
├── firestore.rules
├── firestore.indexes.json
│
└── README.md
```

README nên giải thích:

```text
Firestore
     +
Firebase Auth
     +
Security Rules
     +
Repository
     +
Kotlin Flow
     +
Jetpack Compose
```

Có thể thêm screenshot:

```text
Online
Offline
Create note
Realtime sync
Permission denied test
Firebase Emulator test
```

---

# 42. Bài tập

## Bài 1 — CRUD

Tạo:

```text
tasks/{taskId}
```

với:

```text
title
completed
createdAt
```

Thực hiện:

```text
Create
Read
Update
Delete
```

---

## Bài 2 — User data

Chuyển thành:

```text
users/{uid}/tasks/{taskId}
```

Đảm bảo:

```text
User A → User A ✓
User A → User B ✗
```

---

## Bài 3 — Realtime

Chuyển danh sách task thành:

```text
Firestore SnapshotListener
        ↓
callbackFlow
        ↓
Repository
        ↓
StateFlow
        ↓
Compose
```

---

## Bài 4 — Query

Hiển thị:

> 20 task chưa hoàn thành mới nhất.

Thiết kế query:

```text
completed == false
        +
createdAt DESC
        +
limit 20
```

Tạo index nếu Firestore yêu cầu.

---

## Bài 5 — Offline

1. Mở app khi online.
2. Đợi dữ liệu được cache.
3. Tắt Wi-Fi.
4. Sửa task.
5. Kiểm tra UI.
6. Bật Wi-Fi.
7. Kiểm tra dữ liệu đồng bộ lên server.

---

# 43. Checklist hoàn thành bài

* [ ] Giải thích được Firestore.
* [ ] Phân biệt Collection và Document.
* [ ] Hiểu Subcollection.
* [ ] Thực hiện được CRUD.
* [ ] Viết được query.
* [ ] Hiểu Firestore index.
* [ ] Dùng được realtime listener.
* [ ] Biết chuyển listener thành Flow.
* [ ] Quản lý listener đúng lifecycle.
* [ ] Hiểu offline persistence.
* [ ] Biết transaction dùng khi nào.
* [ ] Biết batched write dùng khi nào.
* [ ] Viết Security Rules theo UID.
* [ ] Không để open rules trong production.
* [ ] Test bằng Firebase Emulator.
* [ ] Có production/release checklist.
* [ ] Có mini-project đưa vào portfolio.

---

# 44. Ghi nhớ nhanh

```text
                FIRESTORE
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Data       Realtime    Offline
        │           │           │
        ▼           ▼           ▼
 Collection      Listener      Cache
 Document           │           │
 Field              ▼           ▼
        │          Flow        Sync
        ▼
      Query
        │
        ▼
      Index
                    │
                    ▼
               Repository
                    │
                    ▼
                ViewModel
                    │
                    ▼
                 Compose

                    +

             Authentication
                    │
                    ▼
              Security Rules
                    │
                    ▼
               Production
```

## Công thức cần nhớ

```text
Firestore tốt
=
Data model theo query
+
Repository
+
Lifecycle-aware realtime
+
Pagination
+
Indexes
+
Authentication
+
Security Rules
+
Offline strategy
+
Emulator tests
```

Firestore giúp Android developer xây dựng backend rất nhanh, nhưng **Firebase SDK không thay thế cho kiến trúc, security và data modeling**. Một implementation tốt không chỉ là gọi được `.collection().get()`, mà phải kiểm soát được **ai được truy cập dữ liệu, dữ liệu được query thế nào, listener sống bao lâu, app hoạt động ra sao khi offline và hệ thống được kiểm chứng thế nào trước khi release**.

[1]: https://firebase.google.com/docs/firestore/data-model?utm_source=chatgpt.com "Cloud Firestore Data model  |  Firebase"
[2]: https://firebase.google.com/docs/firestore/quickstart?utm_source=chatgpt.com "Get started with Firestore Standard edition  |  Firebase"
[3]: https://firebase.google.com/docs/firestore?utm_source=chatgpt.com "Firestore  |  Firebase"
[4]: https://firebase.google.com/docs/firestore/manage-data/enable-offline "Access data offline  |  Firestore  |  Firebase"
[5]: https://firebase.google.com/docs/firestore/query-data/index-overview?utm_source=chatgpt.com "Index types in Cloud Firestore  |  Firebase"
[6]: https://firebase.google.com/docs/firestore/manage-data/transactions?utm_source=chatgpt.com "Transactions and batched writes  |  Firestore  |  Firebase"
[7]: https://firebase.google.com/docs/firestore/security/insecure-rules?utm_source=chatgpt.com "Fix insecure rules  |  Firestore  |  Firebase"
[8]: https://firebase.google.com/docs/firestore/security/overview?utm_source=chatgpt.com "Secure data in Cloud Firestore  |  Firebase"
[9]: https://firebase.google.com/docs/firestore/security/rules-query?utm_source=chatgpt.com "Securely query data  |  Firestore  |  Firebase"
[10]: https://firebase.google.com/docs/firestore/best-practices?authuser=19&utm_source=chatgpt.com "Best practices for Cloud Firestore  |  Firebase"
[11]: https://firebase.google.com/support/guides/security-checklist?utm_source=chatgpt.com "Firebase security checklist"

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
