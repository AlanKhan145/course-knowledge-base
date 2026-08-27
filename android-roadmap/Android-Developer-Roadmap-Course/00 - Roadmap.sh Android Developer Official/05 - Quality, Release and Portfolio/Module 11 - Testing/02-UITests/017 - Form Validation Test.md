# 017 - Form Validation Test

**Học phần:** 05 - Quality, Release and Portfolio
**Module:** Module 11 - Testing
**Nhóm nội dung:** UI Testing
**Nguồn roadmap:** Testing / UI Testing
**Loại bài:** lesson
**Thứ tự trong module:** 017
**Thời lượng gợi ý:** 30 phút

---

## 1. Tóm tắt

`Form Validation Test` là quá trình kiểm thử các quy tắc xác thực dữ liệu của biểu mẫu và cách giao diện phản hồi khi người dùng nhập dữ liệu hợp lệ hoặc không hợp lệ.

Trong ứng dụng Android, một form đăng nhập, đăng ký, thanh toán hoặc chỉnh sửa hồ sơ thường phải xử lý nhiều trạng thái:

```text
Chưa nhập dữ liệu
      ↓
Nhập dữ liệu
      ↓
Validation
      ↓
Hợp lệ? ── Không ──→ Hiển thị lỗi
   │
   Có
   ↓
Cho phép Submit
      ↓
Thực hiện hành động
```

Kiểm thử form không chỉ kiểm tra một hàm `isValid()`. Một bộ test tốt còn cần xác minh rằng lỗi được hiển thị đúng, nút gửi được bật hoặc vô hiệu hóa đúng thời điểm và hành động tiếp theo chỉ xảy ra khi dữ liệu đáp ứng các điều kiện đã định nghĩa.

---

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

* Giải thích được mục đích của `Form Validation Test`.
* Phân biệt được kiểm thử logic validation và kiểm thử hành vi UI.
* Xác định được các trường hợp cần kiểm thử cho một form Android.
* Viết được test cho dữ liệu rỗng, dữ liệu sai định dạng và dữ liệu hợp lệ.
* Kiểm tra được thông báo lỗi và trạng thái của nút `Submit`.
* Thiết kế validation sao cho dễ kiểm thử và dễ bảo trì.
* Xác định được những lỗi validation có khả năng gây ảnh hưởng trực tiếp đến UX và release quality.

---

## 3. Vì sao form validation cần được kiểm thử?

Form là một trong những điểm giao tiếp trực tiếp nhất giữa người dùng và ứng dụng.

Ví dụ, một màn hình đăng nhập có thể yêu cầu:

* Email không được để trống.
* Email phải đúng định dạng.
* Mật khẩu không được để trống.
* Mật khẩu phải đạt độ dài tối thiểu.
* Nút đăng nhập chỉ được sử dụng khi dữ liệu hợp lệ.

Nếu validation bị lỗi, nhiều tình huống có thể xuất hiện:

* Form chấp nhận email sai định dạng.
* Người dùng không biết trường nào đang sai.
* Thông báo lỗi xuất hiện quá sớm.
* Nút `Submit` vẫn hoạt động khi form chưa hợp lệ.
* Một dữ liệu hợp lệ lại bị từ chối.
* UI hiển thị lỗi nhưng vẫn gửi request lên server.
* Validation trên UI khác với validation trong business logic.

Do đó, validation cần được xem như một phần của chất lượng chức năng chứ không chỉ là chi tiết giao diện.

---

## 4. Các lớp kiểm thử trong form validation

Một form Android thường nên được kiểm thử ở hai lớp chính.

### 4.1. Kiểm thử logic validation

Đây là test cho các quy tắc thuần túy như:

```text
Email rỗng
→ Không hợp lệ

Email sai định dạng
→ Không hợp lệ

Email đúng định dạng
→ Hợp lệ
```

Loại test này thường phù hợp với unit test vì:

* chạy nhanh;
* không cần emulator;
* dễ bao phủ nhiều trường hợp biên;
* dễ xác định nguyên nhân khi test thất bại.

### 4.2. Kiểm thử hành vi UI

UI test kiểm tra những gì người dùng thực sự quan sát và tương tác.

Ví dụ:

```text
Người dùng nhập email sai
        ↓
Nhấn Submit
        ↓
Validation chạy
        ↓
UI hiển thị "Email không hợp lệ"
        ↓
Không thực hiện đăng nhập
```

UI test nên tập trung vào:

* nhập dữ liệu;
* thao tác với form;
* thông báo lỗi;
* trạng thái button;
* hành vi khi submit;
* kết quả người dùng nhìn thấy.

Không nên chuyển toàn bộ logic validation sang UI test vì UI test thường chậm và khó debug hơn unit test.

---

## 5. Thiết kế validation dễ kiểm thử

Một thiết kế khó kiểm thử thường đặt toàn bộ logic trực tiếp trong UI:

```kotlin
Button(
    onClick = {
        if (
            email.contains("@") &&
            password.length >= 8
        ) {
            login()
        }
    }
) {
    Text("Đăng nhập")
}
```

Cách này tạo ra nhiều vấn đề:

* logic nghiệp vụ nằm trong composable;
* khó kiểm thử độc lập;
* khó tái sử dụng;
* validation dễ bị lặp ở nhiều màn hình;
* thay đổi một rule có thể ảnh hưởng nhiều nơi.

Một hướng tốt hơn là tách validation thành hàm hoặc component riêng.

```kotlin
fun isEmailValid(email: String): Boolean {
    return email.isNotBlank() &&
        android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
}

fun isPasswordValid(password: String): Boolean {
    return password.length >= 8
}
```

Sau đó trạng thái form có thể được biểu diễn rõ ràng:

```kotlin
data class LoginFormState(
    val email: String = "",
    val password: String = "",
    val emailError: String? = null,
    val passwordError: String? = null
)
```

Cấu trúc này giúp tách ba trách nhiệm:

```text
UI
│
│ nhập dữ liệu / hiển thị trạng thái
↓
State holder hoặc ViewModel
│
│ điều phối validation
↓
Validation rules
```

Khi trách nhiệm được tách rõ, mỗi lớp có thể được kiểm thử bằng loại test phù hợp.

---

## 6. Xác định test case cho một form

Không nên chỉ viết một test cho trường hợp thành công.

Một bộ test validation cơ bản nên bao phủ các nhóm sau.

| Nhóm             | Ví dụ                               |
| ---------------- | ----------------------------------- |
| Empty input      | Email rỗng                          |
| Invalid format   | `abc`                               |
| Boundary         | Password 7 ký tự khi tối thiểu là 8 |
| Valid input      | Email và password hợp lệ            |
| Multiple errors  | Email và password cùng sai          |
| State transition | Sai → sửa đúng                      |
| Submit behavior  | Không submit khi dữ liệu sai        |

Một kỹ thuật hữu ích là chia giá trị thành các lớp tương đương.

Ví dụ với yêu cầu:

```text
Password phải có ít nhất 8 ký tự
```

Có thể kiểm thử:

```text
0 ký tự   → invalid
7 ký tự   → invalid
8 ký tự   → valid
9 ký tự   → valid
```

Trong đó `7` và `8` đặc biệt quan trọng vì nằm sát boundary.

---

## 7. Unit test cho validation

Giả sử ứng dụng có rule:

```kotlin
fun isPasswordValid(password: String): Boolean {
    return password.length >= 8
}
```

Có thể kiểm thử boundary bằng JUnit:

```kotlin
class PasswordValidatorTest {

    @Test
    fun passwordWithSevenCharacters_isInvalid() {
        val result = isPasswordValid("1234567")

        assertFalse(result)
    }

    @Test
    fun passwordWithEightCharacters_isValid() {
        val result = isPasswordValid("12345678")

        assertTrue(result)
    }
}
```

Hai test này kiểm tra ranh giới quan trọng nhất của rule.

Nếu developer vô tình sửa thành:

```kotlin
password.length > 8
```

test thứ hai sẽ thất bại và phát hiện regression ngay lập tức.

Điểm mạnh của unit test là có thể kiểm tra nhiều tổ hợp dữ liệu mà không cần khởi động UI.

---

## 8. UI test cho form bằng Jetpack Compose

Giả sử màn hình đăng nhập có:

* trường `Email`;
* trường `Password`;
* nút `Đăng nhập`;
* thông báo `Email không hợp lệ`.

Một UI test có thể mô phỏng hành vi của người dùng.

```kotlin
@get:Rule
val composeTestRule = createComposeRule()

@Test
fun invalidEmail_displaysErrorMessage() {
    composeTestRule.setContent {
        LoginScreen()
    }

    composeTestRule
        .onNodeWithText("Email")
        .performTextInput("invalid-email")

    composeTestRule
        .onNodeWithText("Đăng nhập")
        .performClick()

    composeTestRule
        .onNodeWithText("Email không hợp lệ")
        .assertIsDisplayed()
}
```

Test này không quan tâm hàm validation được triển khai bằng thuật toán nào.

Nó kiểm tra hành vi quan sát được:

```text
Input không hợp lệ
        ↓
Submit
        ↓
Thông báo lỗi xuất hiện
```

Đây chính là góc nhìn của UI testing.

---

## 9. Kiểm tra trạng thái của nút Submit

Một chiến lược UI phổ biến là vô hiệu hóa nút khi form chưa hợp lệ.

Ví dụ:

```kotlin
Button(
    enabled = emailValid && passwordValid,
    onClick = onLogin
) {
    Text("Đăng nhập")
}
```

Có thể kiểm tra trạng thái ban đầu:

```kotlin
@Test
fun emptyForm_loginButtonIsDisabled() {
    composeTestRule.setContent {
        LoginScreen()
    }

    composeTestRule
        .onNodeWithText("Đăng nhập")
        .assertIsNotEnabled()
}
```

Sau đó kiểm tra trạng thái khi dữ liệu hợp lệ:

```kotlin
@Test
fun validForm_loginButtonIsEnabled() {
    composeTestRule.setContent {
        LoginScreen()
    }

    composeTestRule
        .onNodeWithText("Email")
        .performTextInput("user@example.com")

    composeTestRule
        .onNodeWithText("Password")
        .performTextInput("12345678")

    composeTestRule
        .onNodeWithText("Đăng nhập")
        .assertIsEnabled()
}
```

Hai test tạo thành một cặp quan trọng:

```text
Invalid state → Button disabled
Valid state   → Button enabled
```

Chỉ kiểm tra một phía có thể bỏ sót regression ở phía còn lại.

---

## 10. Kiểm thử quá trình sửa lỗi

Form validation không kết thúc ở việc phát hiện dữ liệu sai.

Người dùng phải có khả năng sửa dữ liệu và tiếp tục thao tác bình thường.

Một flow cần kiểm thử là:

```text
Nhập dữ liệu sai
      ↓
Hiển thị error
      ↓
Người dùng sửa dữ liệu
      ↓
Validation chạy lại
      ↓
Error biến mất
      ↓
Form có thể submit
```

Đây là dạng state transition test.

Ví dụ về mặt logic:

```text
email = "abc"
emailError = "Email không hợp lệ"

       ↓ người dùng sửa

email = "user@example.com"
emailError = null
```

Nếu error vẫn tồn tại sau khi dữ liệu đã đúng, validation logic có thể chính xác nhưng UX vẫn bị lỗi.

---

## 11. Kiểm tra hành động Submit

Một lỗi nghiêm trọng là UI hiển thị validation error nhưng vẫn thực hiện hành động phía sau.

Ví dụ:

```text
Email sai
   ↓
Hiển thị lỗi
   ↓
login() vẫn chạy
```

Khi thiết kế code, callback submit có thể được truyền từ bên ngoài để dễ kiểm thử:

```kotlin
LoginScreen(
    onLogin = {
        loginCallCount++
    }
)
```

Test cần xác nhận:

```text
Invalid form
→ onLogin không được gọi

Valid form
→ onLogin được gọi
```

Đây là điểm quan trọng vì việc gửi dữ liệu invalid lên backend có thể:

* tạo request không cần thiết;
* làm tăng lỗi API;
* khiến UX khó dự đoán;
* tạo trạng thái không đồng nhất giữa client và server.

---

## 12. Validation phía client và phía server

Validation trên Android không thay thế validation trên backend.

Hai lớp có trách nhiệm khác nhau:

| Client validation             | Server validation              |
| ----------------------------- | ------------------------------ |
| Phản hồi nhanh cho người dùng | Bảo vệ dữ liệu hệ thống        |
| Giảm request sai              | Không tin tưởng client         |
| Cải thiện UX                  | Thực thi rule cuối cùng        |
| Có thể bị bypass              | Là nguồn xác nhận đáng tin cậy |

Flow thực tế có thể là:

```text
User Input
    ↓
Client Validation
    ↓
Hợp lệ?
 ┌──┴──┐
Không  Có
 ↓      ↓
Error  API Request
          ↓
    Server Validation
       ┌──┴──┐
      Sai    Đúng
       ↓      ↓
  Server    Success
   Error
```

UI cần xử lý được cả hai loại lỗi.

Ví dụ:

* `"Email không đúng định dạng"` có thể được phát hiện tại client.
* `"Email đã được sử dụng"` thường cần kết quả từ server.

Không nên viết UI test với giả định rằng client validation có thể thay thế toàn bộ validation phía backend.

---

## 13. Validation và state của Android

Form thường chứa state như:

* giá trị text field;
* error message;
* loading state;
* submit state.

Nếu state được quản lý không đúng, người dùng có thể gặp vấn đề khi:

* thiết bị rotate;
* Activity được tái tạo;
* ứng dụng chuyển background;
* màn hình được compose lại;
* request đang chạy.

Ví dụ, lỗi sau có thể xảy ra:

```text
User nhập form
      ↓
Rotate thiết bị
      ↓
Form trở về rỗng
```

Hoặc:

```text
Validation error xuất hiện
      ↓
Recomposition
      ↓
Error biến mất ngoài ý muốn
```

Validation test vì vậy nên được xem trong mối quan hệ với state management.

Những state quan trọng cần tồn tại đủ lâu nên được quản lý ở lớp phù hợp, chẳng hạn `ViewModel`, thay vì chỉ dựa vào biến cục bộ trong UI.

---

## 14. Những lỗi thường gặp

### 14.1. Chỉ kiểm thử happy path

**Hiện tượng:** Chỉ có test cho form hợp lệ.

**Nguyên nhân:** Developer tập trung vào luồng submit thành công.

**Cách xử lý:** Bổ sung invalid input, empty input, boundary và state transition.

### 14.2. Chỉ kiểm tra thông báo lỗi

**Hiện tượng:** Test xác nhận error xuất hiện nhưng không kiểm tra hành động submit.

**Nguyên nhân:** Test chỉ quan sát UI text.

**Cách xử lý:** Kiểm tra thêm rằng callback hoặc business action không chạy khi dữ liệu invalid.

### 14.3. Dùng UI test cho mọi rule

**Hiện tượng:** Hàng chục UI test chỉ khác nhau dữ liệu đầu vào.

**Nguyên nhân:** Validation logic không được tách khỏi UI.

**Cách xử lý:** Đưa rule thuần túy xuống validator hoặc ViewModel và dùng unit test cho phần lớn trường hợp.

### 14.4. Bỏ qua boundary

**Hiện tượng:** Password tối thiểu 8 ký tự nhưng chỉ kiểm tra `"abc"` và `"123456789"`.

**Nguyên nhân:** Không kiểm tra ranh giới của điều kiện.

**Cách xử lý:** Kiểm tra ít nhất giá trị ngay dưới và tại boundary.

### 14.5. Test phụ thuộc quá nhiều vào chi tiết triển khai

**Hiện tượng:** Refactor UI nhỏ làm nhiều test thất bại dù hành vi không thay đổi.

**Nguyên nhân:** Test bám chặt vào cấu trúc nội bộ thay vì hành vi người dùng.

**Cách xử lý:** Ưu tiên kiểm tra semantics, nội dung hiển thị và tương tác có ý nghĩa đối với người dùng.

---

## 15. Best practices

* Tách validation rule khỏi UI khi logic đủ quan trọng để kiểm thử độc lập.
* Dùng unit test cho nhiều tổ hợp và boundary.
* Dùng UI test cho các flow quan trọng mà người dùng thực sự trải nghiệm.
* Kiểm tra cả trạng thái invalid và valid.
* Kiểm tra quá trình chuyển từ lỗi sang hợp lệ.
* Xác minh rằng invalid form không thực hiện hành động submit.
* Viết test theo hành vi thay vì chi tiết implementation.
* Giữ thông báo lỗi rõ ràng và liên kết đúng với trường dữ liệu bị lỗi.
* Không dựa vào client validation để bảo vệ dữ liệu phía server.
* Đưa các test quan trọng vào quy trình kiểm tra lặp lại hoặc CI khi dự án có CI.

Một chiến lược test hợp lý thường có dạng:

```text
Nhiều Unit Tests
      +
Một số UI Tests quan trọng
      ↓
Feedback nhanh
      +
Bảo vệ user flow
```

---

## 16. Bài thực hành

Xây dựng hoặc sử dụng một màn hình đăng nhập gồm:

* `Email`;
* `Password`;
* nút `Đăng nhập`.

Áp dụng các rule:

* Email không được rỗng.
* Email phải đúng định dạng.
* Password phải có ít nhất 8 ký tự.
* Không được thực hiện đăng nhập khi form không hợp lệ.

Viết tối thiểu các test sau:

1. Email rỗng bị từ chối.
2. Email sai định dạng bị từ chối.
3. Password 7 ký tự bị từ chối.
4. Password 8 ký tự được chấp nhận.
5. UI hiển thị lỗi khi submit dữ liệu sai.
6. Form hợp lệ cho phép thực hiện hành động đăng nhập.

**Kết quả mong đợi:**

```text
Invalid input
→ Test xác nhận lỗi được phát hiện

Boundary
→ Test xác nhận rule chính xác

Valid input
→ Test xác nhận form có thể tiếp tục

UI flow
→ Test xác nhận người dùng nhận đúng feedback
```

**Artifact có thể lưu cho portfolio:**

* file validator;
* unit test cho validation;
* UI test cho form;
* screenshot test chạy thành công;
* README ngắn mô tả các failure case mà bộ test bảo vệ.

---

## 17. Checklist hoàn thành

* [ ] Giải thích được mục đích của `Form Validation Test`.
* [ ] Phân biệt được unit test validation và UI test.
* [ ] Xác định được empty, invalid, boundary và valid case.
* [ ] Kiểm tra được trạng thái lỗi trên UI.
* [ ] Kiểm tra được trạng thái của nút submit.
* [ ] Kiểm tra được việc sửa dữ liệu từ invalid sang valid.
* [ ] Đảm bảo invalid form không thực hiện business action.
* [ ] Có ít nhất một validation test có thể chạy lặp lại.
* [ ] Có artifact hoặc kết quả test có thể đưa vào portfolio.

---

## 18. Câu hỏi tự kiểm tra

1. Vì sao không nên kiểm thử toàn bộ validation bằng UI test?
2. Với yêu cầu password tối thiểu 8 ký tự, tại sao `7` và `8` là hai test case quan trọng?
3. Một form hiển thị đúng error nhưng vẫn gửi request lên server có được xem là hoạt động đúng không? Vì sao?
4. Client validation và server validation khác nhau về trách nhiệm như thế nào?
5. Vì sao cần kiểm tra quá trình chuyển từ trạng thái invalid sang valid?

---

## 19. Tổng kết

`Form Validation Test` bảo vệ một trong những user flow phổ biến nhất của ứng dụng Android: nhập dữ liệu và gửi biểu mẫu.

Một chiến lược kiểm thử tốt không chỉ hỏi:

> Validation function có trả về đúng `true` hoặc `false` hay không?

Mà còn kiểm tra toàn bộ hành vi quan trọng:

```text
Input
  ↓
Validation
  ↓
State
  ↓
UI Feedback
  ↓
Submit Behavior
```

Validation rule nên được kiểm thử chủ yếu bằng unit test để có feedback nhanh và bao phủ nhiều trường hợp. UI test được sử dụng để xác nhận rằng các rule đó tạo ra đúng trải nghiệm trên giao diện: lỗi xuất hiện đúng, trạng thái thay đổi đúng và hành động submit chỉ xảy ra khi form hợp lệ.

Khi các test này được duy trì như một quality check có thể chạy lặp lại, chúng giúp giảm regression, bảo vệ UX và giảm rủi ro khi release ứng dụng.
