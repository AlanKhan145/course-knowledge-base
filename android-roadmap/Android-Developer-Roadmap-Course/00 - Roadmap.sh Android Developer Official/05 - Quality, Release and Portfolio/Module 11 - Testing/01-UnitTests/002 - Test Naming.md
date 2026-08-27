# 002 - Test Naming

**Học phần:** 05 - Quality, Release and Portfolio
**Module:** Module 11 - Testing
**Nhóm nội dung:** Unit Testing
**Nguồn roadmap:** Testing / Unit Testing
**Loại bài:** lesson
**Thứ tự trong module:** 002
**Thời lượng gợi ý:** 30 phút

---

## 1. Tóm tắt

`Test Naming` là kỹ thuật đặt tên cho test sao cho người đọc có thể nhanh chóng nhận ra:

* hành vi nào đang được kiểm thử;
* điều kiện hoặc trạng thái nào được thiết lập;
* kết quả nào được mong đợi;
* nguyên nhân có thể xảy ra khi test thất bại.

Trong Android, unit test thường bảo vệ business rule, state transition, validation, `ViewModel`, `Repository` và các thành phần không cần khởi chạy toàn bộ ứng dụng. Vì vậy, một tên test tốt không chỉ giúp đọc code dễ hơn mà còn biến test suite thành tài liệu mô tả hành vi của hệ thống.

Ví dụ, tên:

```text
testLogin
```

gần như không cung cấp thông tin về điều đang được kiểm tra.

Ngược lại:

```text
login_withValidCredentials_returnsAuthenticatedUser
```

cho biết rõ hành động, điều kiện và kết quả mong đợi.

---

## 2. Mục tiêu học tập

Sau bài học này, người học có thể:

* Giải thích được vai trò của `Test Naming` trong unit testing.
* Phân biệt được tên test mô tả hành vi với tên test quá chung chung.
* Đặt tên test theo cấu trúc điều kiện → hành động → kết quả.
* Sử dụng tên hàm Kotlin có backtick để tạo test dễ đọc khi phù hợp.
* Đọc tên test thất bại và xác định nhanh business rule đang bị vi phạm.
* Tổ chức test suite sao cho có thể đóng vai trò như tài liệu kỹ thuật.
* Kết hợp tên test rõ ràng với fake dependency để tạo test có tính xác định và dễ bảo trì.

---

## 3. Vì sao tên test quan trọng?

Một unit test thường có ba nhiệm vụ:

```text
Thiết lập trạng thái
        ↓
Thực hiện hành động
        ↓
Xác minh kết quả
```

Tên test nên phản ánh chính luồng này.

Ví dụ, giả sử ứng dụng có quy tắc:

> Người dùng không được gửi đơn hàng khi giỏ hàng rỗng.

Một tên test như:

```text
testOrder
```

không cho biết quy tắc nào đang được bảo vệ.

Tên sau rõ ràng hơn:

```text
submitOrder_withEmptyCart_returnsError
```

Khi test thất bại trên CI, developer có thể đọc tên test và biết ngay vấn đề liên quan đến hành vi gửi đơn hàng khi giỏ hàng rỗng mà chưa cần mở toàn bộ implementation.

Tên test tốt mang lại một số lợi ích quan trọng:

* giảm thời gian đọc test;
* giúp tìm nguyên nhân khi CI thất bại;
* mô tả business rule;
* hỗ trợ refactor an toàn hơn;
* giúp reviewer hiểu mục đích của test;
* giảm khả năng tạo nhiều test trùng ý nghĩa;
* làm rõ phạm vi bảo vệ của test suite.

---

## 4. Một tên test tốt cần mô tả điều gì?

### 4.1. Hành vi hoặc đơn vị đang được kiểm thử

Tên test nên cho biết hành vi quan trọng mà hệ thống thực hiện.

Ví dụ:

```text
calculateTotal
login
loadProfile
submitOrder
refreshFeed
```

Không nhất thiết phải sử dụng chính xác tên method production. Quan trọng hơn là mô tả được hành vi mà người dùng hoặc hệ thống quan tâm.

Ví dụ:

```text
expiredSession_requiresLoginAgain
```

có thể tốt hơn:

```text
validateSession_returnsFalse
```

nếu điều cần bảo vệ thực sự là hành vi xác thực lại người dùng.

### 4.2. Điều kiện hoặc trạng thái kiểm thử

Một hành vi có thể cho kết quả khác nhau tùy trạng thái.

Ví dụ với login:

```text
login_withValidCredentials_...
login_withWrongPassword_...
login_withEmptyEmail_...
```

Phần điều kiện giúp phân biệt các test cùng kiểm tra một hành vi.

### 4.3. Kết quả mong đợi

Tên test nên kết thúc bằng kết quả có thể quan sát được.

Ví dụ:

```text
returnsAuthenticatedUser
returnsError
emitsLoadingState
storesUserLocally
doesNotCallApi
```

Cấu trúc phổ biến là:

```text
behavior_condition_expectedResult
```

Ví dụ:

```text
login_withWrongPassword_returnsAuthenticationError
```

Có thể đọc như một câu:

> Khi login với mật khẩu sai, hệ thống trả về lỗi xác thực.

---

## 5. Các phong cách đặt tên phổ biến

Không có một quy ước duy nhất bắt buộc cho mọi Android project. Điều quan trọng là cả codebase sử dụng một convention rõ ràng và nhất quán.

### 5.1. `method_condition_expectedResult`

Đây là kiểu đặt tên phù hợp với các project muốn tên method test gần với cú pháp lập trình thông thường.

```kotlin
@Test
fun login_withValidCredentials_returnsUser() {
    // ...
}

@Test
fun login_withInvalidPassword_returnsError() {
    // ...
}
```

Công thức:

```text
method_condition_expectedResult
```

Ví dụ:

```text
calculateDiscount_premiumUser_returnsTwentyPercent
loadProfile_networkUnavailable_returnsCachedProfile
submitOrder_emptyCart_returnsValidationError
```

Ưu điểm:

* dễ tìm kiếm;
* không phụ thuộc vào khoảng trắng;
* tương thích tốt với convention của Java/JVM;
* phù hợp với nhiều codebase Android.

### 5.2. Tên test dạng câu bằng Kotlin backtick

Kotlin cho phép đặt tên function bằng backtick.

```kotlin
@Test
fun `login with valid credentials returns user`() {
    // ...
}

@Test
fun `login with invalid password returns authentication error`() {
    // ...
}
```

Tên test có thể được đọc gần giống câu tự nhiên.

Kiểu này đặc biệt hữu ích khi business rule cần được thể hiện rõ:

```kotlin
@Test
fun `empty cart cannot be submitted`() {
    // ...
}

@Test
fun `premium user receives twenty percent discount`() {
    // ...
}
```

Ưu điểm:

* rất dễ đọc;
* phù hợp với test mô tả behavior;
* test report trở nên dễ hiểu.

Nhược điểm:

* không phải mọi team đều sử dụng convention này;
* tên quá dài có thể làm test report khó quét;
* cần thống nhất style trong project.

---

## 6. Given – When – Then và Test Naming

Một cách hữu ích để thiết kế test là chia thành ba phần:

```text
Given → trạng thái ban đầu
When  → hành động
Then  → kết quả mong đợi
```

Ví dụ:

```text
Given: giỏ hàng rỗng
When: người dùng submit order
Then: hệ thống trả về validation error
```

Tên test có thể được tạo trực tiếp từ cấu trúc đó:

```text
submitOrder_withEmptyCart_returnsValidationError
```

Hoặc:

```kotlin
@Test
fun `submitting an empty cart returns validation error`() {
    // ...
}
```

Tên test không bắt buộc phải chứa literal `given`, `when` và `then`. Điều quan trọng là ba thành phần logic vẫn có thể được nhận ra.

Luồng tư duy nên là:

```text
Business rule
     ↓
Given
     ↓
When
     ↓
Then
     ↓
Tên test
```

Nhờ đó, developer viết test dựa trên hành vi cần bảo vệ thay vì đặt tên sau khi đã viết implementation.

---

## 7. Ví dụ trong Android

Giả sử ứng dụng có `LoginViewModel` với quy tắc:

* khi đăng nhập bắt đầu, state chuyển sang loading;
* đăng nhập thành công trả về user;
* đăng nhập thất bại hiển thị lỗi.

Một test quá chung chung có thể là:

```kotlin
@Test
fun testLogin() {
    // ...
}
```

Tên này không thể hiện đang kiểm tra nhánh thành công hay thất bại.

Tên phù hợp hơn:

```kotlin
@Test
fun login_withValidCredentials_emitsAuthenticatedState() {
    // ...
}

@Test
fun login_withInvalidCredentials_emitsAuthenticationError() {
    // ...
}
```

Nếu dùng backtick:

```kotlin
@Test
fun `valid credentials emit authenticated state`() {
    // ...
}

@Test
fun `invalid credentials emit authentication error`() {
    // ...
}
```

Chỉ cần đọc danh sách test, developer đã có thể hình dung một phần behavior của login flow:

```text
Valid credentials
        ↓
Authenticated state

Invalid credentials
        ↓
Authentication error
```

Đây là lý do test suite có thể trở thành một dạng executable documentation: tài liệu được kiểm chứng mỗi lần test chạy.

---

## 8. Đặt tên test cho state transition

State management là một phần quan trọng trong Android, đặc biệt khi sử dụng `ViewModel`, `StateFlow` hoặc các mô hình UI state.

Giả sử có:

```kotlin
sealed interface ProfileUiState {
    data object Loading : ProfileUiState
    data class Success(val name: String) : ProfileUiState
    data class Error(val message: String) : ProfileUiState
}
```

Một số tên test có thể là:

```kotlin
@Test
fun loadProfile_success_emitsSuccessState() {
    // ...
}

@Test
fun loadProfile_repositoryFailure_emitsErrorState() {
    // ...
}
```

Tên test cho biết rõ transition:

```text
Repository success
        ↓
Success state

Repository failure
        ↓
Error state
```

Nếu sau một lần refactor `repositoryFailure` không còn phát `Error`, tên test thất bại sẽ mô tả trực tiếp contract bị phá vỡ.

---

## 9. Đặt tên theo business rule thay vì implementation detail

Tên test nên ưu tiên hành vi ổn định thay vì chi tiết implementation dễ thay đổi.

Ví dụ không lý tưởng:

```text
repository_callsRetrofitService_once
```

Tên này gắn test với việc implementation đang sử dụng Retrofit.

Nếu mục tiêu thực sự là kiểm tra dữ liệu được tải từ remote source, có thể đặt:

```text
loadUser_withoutCachedData_requestsRemoteUser
```

Điều này giúp test vẫn có ý nghĩa nếu sau này project thay Retrofit bằng một networking implementation khác.

Một nguyên tắc hữu ích là:

```text
Ưu tiên:

Business behavior
      ↓
Observable result

Hạn chế:

Implementation detail
      ↓
Internal mechanism
```

Test implementation detail chỉ nên được dùng khi chính detail đó là contract cần bảo vệ.

---

## 10. Test Naming và deterministic test

Tên test tốt không thể cứu một test không ổn định.

Unit test nên có cùng kết quả khi chạy nhiều lần với cùng input:

```text
Cùng input
    +
Cùng state
    ↓
Cùng output
```

Vì vậy, các dependency như repository, clock, dispatcher hoặc data source thường được thay bằng fake khi cần kiểm soát hành vi.

Ví dụ:

```kotlin
class FakeUserRepository(
    private val user: User?
) : UserRepository {

    override suspend fun getUser(): User? = user
}
```

Sau đó có thể viết:

```kotlin
@Test
fun loadUser_whenRepositoryHasUser_returnsUser() {
    // Arrange
    val repository = FakeUserRepository(
        user = User(id = "1", name = "An")
    )

    // Act
    val result = repository.getUser()

    // Assert
    assertNotNull(result)
}
```

Ở đây tên test và fake dependency hỗ trợ hai mục tiêu khác nhau:

* tên test mô tả behavior;
* fake giúp behavior được kiểm thử một cách xác định.

Một test có tên rất rõ nhưng phụ thuộc vào network thật vẫn có thể trở nên flaky và gây mất giá trị cho test suite.

---

## 11. Những kiểu tên test nên tránh

### 11.1. Tên quá chung

Không nên:

```text
testLogin
testUser
testRepository
testSuccess
```

Các tên này không mô tả scenario cụ thể.

Nên:

```text
login_withValidCredentials_returnsUser
loadUser_networkFailure_returnsError
```

### 11.2. Tên mô tả thao tác thay vì behavior

Không nên:

```text
callLoginMethod
clickButtonTest
runRepository
```

Nên tập trung vào kết quả:

```text
submitLogin_withEmptyPassword_showsValidationError
```

### 11.3. Tên quá dài nhưng không tăng thêm thông tin

Không nên biến toàn bộ implementation thành tên test:

```text
login_whenRepositoryCallsApiAndApiReturns200AndMapperMapsResponse_returnsUser
```

Nếu behavior cần bảo vệ chỉ là đăng nhập thành công, có thể rút gọn:

```text
login_withValidCredentials_returnsUser
```

Tên test cần đủ thông tin, không phải nhiều thông tin nhất có thể.

---

## 12. Một tên test nên dài đến đâu?

Không có giới hạn ký tự cố định phù hợp cho mọi project.

Thay vì đo độ dài, hãy kiểm tra xem tên có trả lời được ba câu hỏi hay không:

1. Hành vi nào đang được kiểm tra?
2. Scenario nào được thiết lập?
3. Kết quả mong đợi là gì?

Nếu câu trả lời đã rõ, không cần tiếp tục thêm implementation detail.

Ví dụ:

```text
refreshFeed_networkUnavailable_returnsCachedPosts
```

đã truyền tải đầy đủ:

* hành vi: `refreshFeed`;
* điều kiện: network unavailable;
* kết quả: cached posts được trả về.

---

## 13. Đặt tên cho test case đối lập

Một business rule thường cần ít nhất hai hướng kiểm thử.

Ví dụ:

```text
Valid input
Invalid input
```

Tên test nên làm nổi bật sự đối xứng này:

```kotlin
@Test
fun createAccount_withValidEmail_returnsSuccess() {
    // ...
}

@Test
fun createAccount_withInvalidEmail_returnsValidationError() {
    // ...
}
```

Hoặc:

```kotlin
@Test
fun `valid email allows account creation`() {
    // ...
}

@Test
fun `invalid email prevents account creation`() {
    // ...
}
```

Cặp test như vậy giúp developer nhanh chóng nhận ra behavior nào đã được bảo vệ và behavior nào còn thiếu.

---

## 14. Đặt tên cho edge case

Test suite không nên chỉ kiểm tra happy path.

Ví dụ với số lượng sản phẩm:

```kotlin
@Test
fun updateQuantity_withZero_removesItem() {
    // ...
}

@Test
fun updateQuantity_withNegativeValue_returnsValidationError() {
    // ...
}

@Test
fun updateQuantity_aboveMaximum_clampsToMaximum() {
    // ...
}
```

Chỉ đọc tên test đã có thể nhận ra các rule biên của feature:

```text
quantity = 0
    ↓
remove item

quantity < 0
    ↓
validation error

quantity > max
    ↓
limit to max
```

Đây là giá trị đặc biệt quan trọng của test naming khi số lượng test trong project tăng lên.

---

## 15. Tên test trong feedback loop của developer

Test naming phát huy giá trị rõ nhất khi test được chạy thường xuyên:

```text
Thay đổi code
     ↓
Chạy unit test
     ↓
Test thất bại
     ↓
Đọc tên test
     ↓
Xác định behavior bị phá vỡ
     ↓
Sửa code
     ↓
Chạy lại
```

Ví dụ CI báo:

```text
FAILED:
refreshFeed_networkUnavailable_returnsCachedPosts
```

Tên test đã cung cấp một lượng thông tin đáng kể:

* feature liên quan: refresh feed;
* điều kiện: không có mạng;
* expected behavior: trả cached posts.

So với:

```text
FAILED:
testRefresh
```

developer sẽ phải mở test để hiểu thất bại đang đại diện cho rule nào.

---

## 16. Quy trình đặt tên test

Khi tạo một test mới, có thể sử dụng quy trình sau:

1. Viết business rule bằng một câu đơn giản.
2. Xác định trạng thái hoặc input ban đầu.
3. Xác định hành động cần thực hiện.
4. Xác định output hoặc state có thể quan sát.
5. Chuyển ba phần đó thành tên test.
6. Loại bỏ implementation detail không cần thiết.
7. Đọc tên test như một câu độc lập.
8. Kiểm tra xem người khác có hiểu test mà chưa đọc body hay không.

Ví dụ:

**Business rule:**

```text
Khi không có mạng, feed sử dụng dữ liệu cache.
```

Tách thành:

```text
Hành động   → refreshFeed
Điều kiện   → networkUnavailable
Kết quả     → returnsCachedPosts
```

Tên cuối:

```text
refreshFeed_networkUnavailable_returnsCachedPosts
```

---

## 17. Best practices

* Sử dụng một convention thống nhất trong toàn project.
* Mô tả behavior thay vì chỉ lặp lại tên method.
* Thể hiện scenario quan trọng trong tên test.
* Nêu rõ expected result.
* Ưu tiên business rule ổn định hơn implementation detail.
* Giữ tên đủ chi tiết để hiểu khi test thất bại trên CI.
* Không viết tên dài chỉ để kể lại toàn bộ implementation.
* Đặt các test cùng feature theo pattern tương tự để dễ quét.
* Dùng fake hoặc dependency có thể kiểm soát khi test cần tính deterministic.
* Đọc lại danh sách tên test để kiểm tra xem chúng có mô tả được contract của feature hay không.

---

## 18. Bài thực hành

Giả sử ứng dụng Android có chức năng đăng nhập với các quy tắc:

* email và password hợp lệ → đăng nhập thành công;
* email rỗng → validation error;
* password sai → authentication error;
* repository không truy cập được → network error.

Hãy tạo tối thiểu bốn unit test với tên mô tả chính xác từng behavior.

Một bộ tên tham khảo có thể theo cấu trúc:

```text
login_withValidCredentials_returnsAuthenticatedUser
login_withEmptyEmail_returnsValidationError
login_withWrongPassword_returnsAuthenticationError
login_whenRepositoryUnavailable_returnsNetworkError
```

Sau đó chạy test bằng công cụ của project, ví dụ với Gradle:

```bash
./gradlew test
```

**Kết quả mong đợi:**

* các test có thể chạy lặp lại;
* tên từng test cho biết rõ scenario;
* khi cố tình làm một business rule thất bại, tên test trong test report giúp xác định ngay behavior bị ảnh hưởng.

**Artifact nên lưu lại:**

* file unit test;
* kết quả chạy test;
* một đoạn README ngắn giải thích convention đặt tên test;
* ví dụ một failure và cách tên test giúp xác định lỗi.

---

## 19. Checklist hoàn thành

* [ ] Giải thích được mục đích của `Test Naming`.
* [ ] Phân biệt được tên test chung chung và tên test mô tả behavior.
* [ ] Viết được tên theo cấu trúc `behavior_condition_expectedResult`.
* [ ] Biết cách sử dụng Kotlin backtick cho tên test dạng câu khi phù hợp.
* [ ] Đặt tên được cho happy path, failure path và edge case.
* [ ] Tránh đưa implementation detail không cần thiết vào tên test.
* [ ] Có ít nhất một unit test sử dụng fake dependency khi cần kiểm soát dependency.
* [ ] Chạy được unit test bằng quy trình có thể lặp lại.
* [ ] Ghi lại convention đặt tên test trong codebase hoặc README.

---

## 20. Câu hỏi tự kiểm tra

1. Vì sao `testLogin()` là một tên test yếu khi login có nhiều scenario khác nhau?
2. Ba thành phần chính của convention `behavior_condition_expectedResult` là gì?
3. Vì sao tên test nên ưu tiên business behavior hơn implementation detail?
4. Khi một test thất bại trên CI, tên test tốt giúp developer rút ngắn quá trình debug như thế nào?
5. Vì sao test naming rõ ràng vẫn cần đi cùng deterministic test?

---

## 21. Tổng kết

`Test Naming` là một phần nhỏ nhưng có ảnh hưởng lớn đến chất lượng test suite. Tên test tốt phải giúp developer hiểu được **hành vi**, **điều kiện** và **kết quả mong đợi** mà không cần đọc toàn bộ phần thân của test.

Một convention hữu ích là:

```text
behavior_condition_expectedResult
```

hoặc sử dụng Kotlin backtick để biểu diễn behavior bằng câu tự nhiên.

Khi được áp dụng nhất quán, test suite không còn chỉ là tập hợp các đoạn code kiểm tra. Nó trở thành một dạng tài liệu có thể thực thi, giúp bảo vệ business rule, hỗ trợ refactor, rút ngắn thời gian debug và tạo feedback loop đáng tin cậy trong cả quá trình phát triển lẫn CI.
