# 006 - Coroutine Test

**Học phần:** 05 - Quality, Release and Portfolio
**Module:** Module 11 - Testing
**Nhóm nội dung:** Unit Testing
**Nguồn roadmap:** Testing / Unit Testing
**Loại bài:** lesson
**Thứ tự trong module:** 006
**Thời lượng gợi ý:** 30 phút

---

## 1. Tóm tắt

`Coroutine Test` là kỹ thuật kiểm thử mã bất đồng bộ sử dụng Kotlin Coroutines theo cách **nhanh, xác định và có thể lặp lại**. Thay vì để test phụ thuộc vào thời gian thực, thread thực hoặc network thật, thư viện `kotlinx-coroutines-test` cung cấp môi trường kiểm thử có khả năng điều khiển coroutine và thời gian ảo.

Trong Android, kỹ thuật này đặc biệt quan trọng khi kiểm thử:

* hàm `suspend`;
* `ViewModel`;
* `Repository`;
* các luồng cập nhật state;
* logic sử dụng `Flow` hoặc `StateFlow`;
* retry, debounce và delay;
* tác vụ chạy qua `CoroutineDispatcher`.

Mục tiêu không chỉ là làm cho một test "chạy được", mà là tạo ra test có kết quả ổn định trên máy lập trình viên lẫn CI, không xuất hiện lỗi ngẫu nhiên do scheduler hoặc timing.

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

* Giải thích được vai trò của `Coroutine Test` trong unit testing Android.
* Sử dụng `runTest` để kiểm thử hàm `suspend`.
* Giải thích được vai trò của virtual time trong coroutine testing.
* Sử dụng `StandardTestDispatcher` để kiểm soát thời điểm coroutine được thực thi.
* Sử dụng `advanceUntilIdle()` để đưa các coroutine đang chờ đến trạng thái ổn định.
* Thiết kế dependency để có thể thay thế `CoroutineDispatcher` và repository bằng fake trong test.
* Kiểm thử được state transition mà không cần khởi chạy toàn bộ ứng dụng Android.
* Nhận diện các nguyên nhân khiến coroutine test trở nên chậm hoặc không ổn định.

---

## 3. Vì sao coroutine cần cách kiểm thử riêng?

Một hàm đồng bộ đơn giản có thể được kiểm thử trực tiếp:

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
```

Test của nó chỉ cần gọi hàm và kiểm tra kết quả.

Coroutine phức tạp hơn vì code có thể:

* tạm dừng bằng `suspend`;
* chuyển dispatcher;
* khởi tạo coroutine mới bằng `launch`;
* chứa `delay()`;
* cập nhật state sau một khoảng thời gian;
* phụ thuộc vào scheduler;
* chạy bất đồng bộ so với luồng test.

Ví dụ:

```kotlin
suspend fun loadProfile(): User {
    delay(2_000)
    return User("An")
}
```

Nếu unit test thực sự chờ hai giây cho mỗi lần chạy, bộ test sẽ nhanh chóng trở nên rất chậm.

Vấn đề lớn hơn là timing có thể khiến test không ổn định:

```text
Test bắt đầu
    ↓
Coroutine được launch
    ↓
Test kiểm tra state quá sớm
    ↓
Coroutine chưa hoàn thành
    ↓
Test thất bại
```

`Coroutine Test` tạo một môi trường có thể kiểm soát scheduler và thời gian:

```text
Unit Test
    ↓
TestScope
    ↓
TestCoroutineScheduler
    ↓
Coroutine được lập lịch
    ↓
Test chủ động cho coroutine chạy
    ↓
Kiểm tra kết quả
```

Nhờ đó, unit test không cần phụ thuộc vào tốc độ CPU hoặc thời gian thực của thiết bị.

---

## 4. Các thành phần quan trọng của Coroutine Test

| Thành phần                 | Vai trò                                                                |
| -------------------------- | ---------------------------------------------------------------------- |
| `runTest`                  | Tạo coroutine test scope và chạy test coroutine                        |
| `TestScope`                | Scope dành cho coroutine test                                          |
| `TestCoroutineScheduler`   | Điều khiển scheduling và virtual time                                  |
| `StandardTestDispatcher`   | Dispatcher cho phép test kiểm soát lúc coroutine được chạy             |
| `UnconfinedTestDispatcher` | Dispatcher test thực thi coroutine tích cực hơn ngay khi được schedule |
| `advanceUntilIdle()`       | Chạy các công việc đang chờ cho đến khi scheduler không còn việc       |
| `advanceTimeBy()`          | Tiến thời gian ảo theo lượng thời gian xác định                        |
| `runCurrent()`             | Chạy các task đang sẵn sàng tại thời điểm virtual hiện tại             |

Trong phần lớn unit test, `runTest` kết hợp với `StandardTestDispatcher` là lựa chọn dễ kiểm soát và dễ suy luận.

---

## 5. Kiểm thử hàm `suspend` bằng `runTest`

Giả sử ứng dụng có repository:

```kotlin
data class User(
    val id: Long,
    val name: String
)

class UserRepository {

    suspend fun getUser(): User {
        delay(1_000)

        return User(
            id = 1L,
            name = "An"
        )
    }
}
```

Hàm `getUser()` là `suspend`, vì vậy test cần chạy bên trong coroutine scope.

```kotlin
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals

class UserRepositoryTest {

    @Test
    fun getUser_returnsExpectedUser() = runTest {
        val repository = UserRepository()

        val user = repository.getUser()

        assertEquals("An", user.name)
    }
}
```

Điểm quan trọng là `delay(1_000)` không bắt buộc làm unit test chờ một giây theo thời gian thực. Môi trường test có thể xử lý delay thông qua virtual time.

Điều này đặc biệt hữu ích khi kiểm thử:

* retry;
* timeout;
* debounce;
* polling;
* animation-independent state logic;
* các thuật toán có nhiều `delay()`.

---

## 6. Virtual time và điều khiển coroutine

Một trong những khả năng quan trọng nhất của `kotlinx-coroutines-test` là **virtual time**.

Xét logic:

```kotlin
class SessionManager {

    var expired = false
        private set

    suspend fun startExpirationTimer() {
        delay(5_000)
        expired = true
    }
}
```

Ta có thể kiểm thử mà không chờ năm giây thực:

```kotlin
import kotlinx.coroutines.launch
import kotlinx.coroutines.test.advanceTimeBy
import kotlinx.coroutines.test.runCurrent
import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class SessionManagerTest {

    @Test
    fun session_expiresAfterFiveSeconds() = runTest {
        val manager = SessionManager()

        launch {
            manager.startExpirationTimer()
        }

        assertFalse(manager.expired)

        advanceTimeBy(5_000)
        runCurrent()

        assertTrue(manager.expired)
    }
}
```

Ở đây:

1. Coroutine được khởi tạo.
2. `delay(5_000)` đưa coroutine vào trạng thái chờ.
3. `advanceTimeBy(5_000)` tiến virtual clock.
4. `runCurrent()` thực thi công việc đã đến thời điểm chạy.
5. Test kiểm tra state cuối cùng.

Thời gian ảo giúp những test liên quan đến timing vẫn chạy rất nhanh.

---

## 7. `StandardTestDispatcher` và tính xác định của test

Trong production, code Android thường chạy trên các dispatcher như:

* `Dispatchers.Main`;
* `Dispatchers.IO`;
* `Dispatchers.Default`.

Nếu business logic gắn cứng trực tiếp với dispatcher thật, test sẽ khó điều khiển hơn.

Ví dụ không thuận lợi cho testing:

```kotlin
class SyncService {

    suspend fun sync() = withContext(Dispatchers.IO) {
        // Đồng bộ dữ liệu
    }
}
```

Một cách thiết kế tốt hơn là cho phép dependency injection:

```kotlin
class SyncService(
    private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO
) {

    suspend fun sync() = withContext(ioDispatcher) {
        // Đồng bộ dữ liệu
    }
}
```

Khi test, production dispatcher có thể được thay bằng `StandardTestDispatcher`.

```kotlin
@Test
fun sync_completesSuccessfully() = runTest {
    val dispatcher = StandardTestDispatcher(testScheduler)

    val service = SyncService(
        ioDispatcher = dispatcher
    )

    service.sync()
}
```

Ý tưởng thiết kế là:

```text
Production
    ↓
Dispatchers.IO
    ↓
SyncService
```

Trong test:

```text
Unit Test
    ↓
StandardTestDispatcher
    ↓
SyncService
```

Business logic không cần biết dispatcher thật hay dispatcher test đang được sử dụng.

Đây là một ví dụ điển hình của **dependency injection giúp tăng testability**.

---

## 8. Kiểm thử state transition

Một trường hợp quan trọng trong Android là kiểm tra cách state thay đổi theo tiến trình của một tác vụ bất đồng bộ.

Ví dụ một component quản lý trạng thái tải dữ liệu:

```kotlin
sealed interface UserState {

    data object Idle : UserState

    data object Loading : UserState

    data class Success(
        val user: User
    ) : UserState

    data class Error(
        val message: String
    ) : UserState
}
```

Repository được biểu diễn bằng interface:

```kotlin
interface UserRepository {
    suspend fun getUser(): User
}
```

Business logic:

```kotlin
class LoadUserUseCase(
    private val repository: UserRepository
) {

    var state: UserState = UserState.Idle
        private set

    suspend fun execute() {
        state = UserState.Loading

        state = try {
            val user = repository.getUser()
            UserState.Success(user)
        } catch (exception: Exception) {
            UserState.Error(
                message = exception.message ?: "Unknown error"
            )
        }
    }
}
```

Fake repository:

```kotlin
class FakeUserRepository(
    private val user: User
) : UserRepository {

    override suspend fun getUser(): User {
        return user
    }
}
```

Unit test:

```kotlin
@Test
fun execute_whenRepositorySucceeds_updatesStateToSuccess() = runTest {
    val repository = FakeUserRepository(
        user = User(
            id = 1L,
            name = "An"
        )
    )

    val useCase = LoadUserUseCase(repository)

    useCase.execute()

    assertEquals(
        UserState.Success(
            User(
                id = 1L,
                name = "An"
            )
        ),
        useCase.state
    )
}
```

Test này không cần:

* Activity;
* Fragment;
* Compose UI;
* emulator;
* backend thật;
* database thật.

Nó chỉ kiểm tra business rule và state transition cần bảo vệ.

Đây chính là lợi ích cốt lõi của unit testing.

---

## 9. Kiểm thử coroutine được `launch`

Một tình huống dễ gây lỗi là code khởi chạy một coroutine mới thay vì thực thi trực tiếp trong coroutine hiện tại.

Ví dụ:

```kotlin
class DataLoader(
    private val scope: CoroutineScope
) {

    var loaded = false
        private set

    fun load() {
        scope.launch {
            delay(500)
            loaded = true
        }
    }
}
```

Nếu test viết:

```kotlin
loader.load()

assertTrue(loader.loaded)
```

assertion có thể xảy ra trước khi coroutine hoàn thành.

Với test scheduler, ta có thể chủ động chờ tất cả công việc đã schedule:

```kotlin
@Test
fun load_marksDataAsLoaded() = runTest {
    val dispatcher = StandardTestDispatcher(testScheduler)
    val scope = CoroutineScope(dispatcher)

    val loader = DataLoader(scope)

    loader.load()

    assertFalse(loader.loaded)

    advanceUntilIdle()

    assertTrue(loader.loaded)
}
```

Luồng thực thi là:

```text
load()
  ↓
launch
  ↓
Coroutine được đưa vào scheduler
  ↓
loaded vẫn bằng false
  ↓
advanceUntilIdle()
  ↓
Coroutine hoàn thành
  ↓
loaded = true
```

`advanceUntilIdle()` đặc biệt hữu ích khi test chỉ quan tâm đến trạng thái cuối cùng của một chuỗi coroutine.

---

## 10. Fake tốt hơn dependency thật trong unit test

Một unit test nên kiểm tra logic của đơn vị đang test, không nên đồng thời kiểm tra network, database và backend.

Ví dụ repository production có thể gọi API:

```text
Use Case
   ↓
Repository
   ↓
Retrofit
   ↓
HTTP
   ↓
Backend
```

Nếu unit test gọi toàn bộ chuỗi này, kết quả có thể phụ thuộc vào:

* mạng;
* backend;
* token;
* dữ liệu server;
* thời gian phản hồi.

Trong unit test, có thể thay repository bằng fake:

```text
Use Case
   ↓
FakeRepository
   ↓
Dữ liệu kiểm thử xác định
```

Ví dụ fake lỗi:

```kotlin
class FailingUserRepository : UserRepository {

    override suspend fun getUser(): User {
        throw IllegalStateException("Server unavailable")
    }
}
```

Test error state:

```kotlin
@Test
fun execute_whenRepositoryFails_updatesStateToError() = runTest {
    val useCase = LoadUserUseCase(
        repository = FailingUserRepository()
    )

    useCase.execute()

    assertEquals(
        UserState.Error("Server unavailable"),
        useCase.state
    )
}
```

Một bộ test tốt nên kiểm tra cả **success path** và các failure path quan trọng.

---

## 11. Kiểm thử `Dispatchers.Main` trong Android

Một số thành phần Android sử dụng `Dispatchers.Main`, đặc biệt là logic liên quan đến `ViewModel`.

Local unit test thông thường không có Android main looper thật. Vì vậy test có thể cần thay `Dispatchers.Main` bằng test dispatcher.

Ví dụ:

```kotlin
private val testDispatcher = StandardTestDispatcher()

@Before
fun setUp() {
    Dispatchers.setMain(testDispatcher)
}

@After
fun tearDown() {
    Dispatchers.resetMain()
}
```

Nguyên tắc quan trọng:

* thay `Main` trước test;
* reset `Main` sau test;
* không để test này làm ảnh hưởng tới test khác.

Có thể đóng gói logic này thành một JUnit rule riêng khi nhiều test class đều cần cùng cấu hình.

---

## 12. Những lỗi thường gặp

**Test kiểm tra state quá sớm**

Hiện tượng:

```text
Expected: Success
Actual: Loading
```

Nguyên nhân thường là coroutine đã được schedule nhưng chưa được thực thi.

Cách xử lý:

```kotlin
advanceUntilIdle()
```

trước khi kiểm tra trạng thái cuối nếu đó là hành vi mà test cần.

---

**Sử dụng `Thread.sleep()` trong coroutine test**

Ví dụ:

```kotlin
Thread.sleep(2_000)
```

Cách này:

* làm test chậm;
* phụ thuộc thời gian thực;
* không tận dụng virtual time.

Thay vào đó, ưu tiên test scheduler khi code sử dụng coroutine delay.

---

**Dùng repository thật trong unit test**

Nếu unit test gọi network thật, test có thể thất bại chỉ vì backend hoặc Internet gặp vấn đề.

Hãy sử dụng:

* fake;
* stub;
* test implementation;

cho dependency bên ngoài phạm vi test.

---

**Hard-code dispatcher trong mọi lớp**

Ví dụ:

```kotlin
withContext(Dispatchers.IO) {
    // ...
}
```

không phải lúc nào cũng sai, nhưng nếu dispatcher là dependency quan trọng đối với hành vi cần test, việc inject nó giúp test dễ kiểm soát hơn.

---

**Trộn nhiều scheduler không cần thiết**

Nếu các test dispatcher không dùng chung scheduler, `advanceUntilIdle()` của một scheduler có thể không điều khiển công việc được lập lịch trên scheduler khác.

Khi cần phối hợp nhiều dispatcher trong cùng một test, nên để chúng sử dụng chung `TestCoroutineScheduler`.

---

## 13. Best practices

* Ưu tiên `runTest` cho coroutine unit test.
* Không dùng thời gian thực để kiểm thử logic dựa trên `delay()` khi virtual time có thể giải quyết.
* Inject dispatcher khi điều đó giúp dependency trở nên testable.
* Dùng fake cho repository và external dependency trong unit test.
* Kiểm thử **observable behavior** thay vì implementation detail không cần thiết.
* Đặt tên test thể hiện điều kiện và kết quả mong đợi.

Ví dụ:

```text
loadUser_whenRepositorySucceeds_emitsSuccess
```

hoặc:

```text
loadUser_whenRepositoryThrows_emitsError
```

* Bao phủ cả success path và các failure path quan trọng.
* Giữ unit test độc lập với network, emulator và dữ liệu production.
* Đảm bảo test chạy được lặp lại bằng cùng một command trong môi trường local và CI.

---

## 14. Bài thực hành

Xây dựng một component nhỏ có nhiệm vụ tải danh sách sản phẩm bằng coroutine.

Yêu cầu:

1. Tạo interface `ProductRepository`.
2. Tạo hàm `suspend fun getProducts()`.
3. Xây dựng state gồm tối thiểu:

   * `Idle`;
   * `Loading`;
   * `Success`;
   * `Error`.
4. Viết fake repository trả về danh sách sản phẩm.
5. Viết fake repository ném exception.
6. Viết coroutine test cho trường hợp thành công.
7. Viết coroutine test cho trường hợp lỗi.
8. Nếu implementation sử dụng `launch`, kiểm tra trạng thái cuối bằng `advanceUntilIdle()`.

**Kết quả mong đợi:**

* Test success xác nhận đúng dữ liệu được trả về.
* Test error xác nhận đúng error state.
* Test không truy cập network thật.
* Test không sử dụng `Thread.sleep()`.
* Các test chạy ổn định khi thực thi nhiều lần.

---

## 15. Artifact cho portfolio

Tạo một thư mục test nhỏ trong Android project chứa:

```text
src/
└── test/
    └── java/
        └── ...
            ├── LoadProductUseCaseTest.kt
            ├── FakeProductRepository.kt
            └── FailingProductRepository.kt
```

Trong `README`, ghi ngắn gọn:

* component nào đang được kiểm thử;
* dependency nào được thay bằng fake;
* state transition nào được bảo vệ;
* virtual time được sử dụng ở đâu;
* command dùng để chạy test;
* một ví dụ về failure mà test có thể phát hiện.

Artifact này chứng minh người học không chỉ biết API của coroutine mà còn biết thiết kế Android code có khả năng kiểm thử.

---

## 16. Checklist hoàn thành

* [ ] Giải thích được vì sao coroutine cần môi trường test có thể kiểm soát scheduler.
* [ ] Sử dụng được `runTest`.
* [ ] Giải thích được virtual time.
* [ ] Biết khi nào cần `advanceUntilIdle()`.
* [ ] Sử dụng được `StandardTestDispatcher` trong một unit test.
* [ ] Thay dependency production bằng fake trong test.
* [ ] Kiểm thử được success state.
* [ ] Kiểm thử được error state.
* [ ] Không dùng `Thread.sleep()` để chờ coroutine.
* [ ] Có ít nhất một coroutine test có thể chạy lặp lại ổn định.
* [ ] Có artifact hoặc ghi chú kỹ thuật phù hợp để đưa vào portfolio.

---

## 17. Câu hỏi tự kiểm tra

1. Vì sao một assertion có thể chạy trước coroutine được tạo bằng `launch`?
2. `runTest` khác gì so với việc dùng `runBlocking` cho coroutine test?
3. Virtual time giúp ích gì khi code chứa `delay()`?
4. Khi nào nên sử dụng `advanceUntilIdle()`?
5. Vì sao việc inject `CoroutineDispatcher` có thể cải thiện testability của Android code?

---

## 18. Tổng kết

`Coroutine Test` giúp unit test Android kiểm soát được code bất đồng bộ thay vì phụ thuộc vào timing thực tế. `runTest`, test dispatcher và virtual time tạo ra môi trường kiểm thử nhanh, xác định và dễ lặp lại.

Một coroutine test tốt không chỉ kiểm tra rằng hàm `suspend` trả về đúng kết quả. Nó còn bảo vệ các state transition quan trọng, xử lý failure path, loại bỏ dependency không ổn định bằng fake và giúp toàn bộ feedback loop có thể chạy nhất quán trên máy local cũng như CI.

Khi coroutine code được thiết kế với testability ngay từ đầu, các lỗi về state, timing và business logic có thể được phát hiện trước khi chúng ảnh hưởng tới luồng sử dụng thực tế của người dùng.
