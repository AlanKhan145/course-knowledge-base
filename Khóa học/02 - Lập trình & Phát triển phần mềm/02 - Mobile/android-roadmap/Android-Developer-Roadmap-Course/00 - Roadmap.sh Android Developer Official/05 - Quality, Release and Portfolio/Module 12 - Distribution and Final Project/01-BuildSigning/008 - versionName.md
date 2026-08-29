# 008 - versionName

**Học phần:** 05 - Quality, Release and Portfolio  
**Module:** Module 12 - Distribution and Final Project  
**Nhóm nội dung:** Build and Signing  
**Nguồn roadmap:** Distribution and Final Project / Build and Signing  
**Loại bài:** project  
**Thứ tự trong module:** 008  
**Thời lượng gợi ý:** 45 phút

---

## 1. Bài toán

Khi một ứng dụng Android được phát hành nhiều lần, người dùng và đội phát triển cần biết chính xác họ đang sử dụng bản phát hành nào.

Một ứng dụng có thể trải qua các bản:

```text
1.0
1.1
1.2
2.0
```

hoặc chi tiết hơn:

```text
1.4.0
1.4.1
1.5.0
```

Trong Android, một trong những thuộc tính chịu trách nhiệm biểu diễn phiên bản theo cách con người có thể đọc được là `versionName`.

Ví dụ:

```text
App cài trên thiết bị
        ↓
versionName = "1.4.2"
        ↓
Màn hình About
        ↓
Version 1.4.2
```

`versionName` đặc biệt hữu ích trong:

- màn hình About;
- báo cáo lỗi;
- trao đổi với QA;
- release notes;
- phân biệt các bản build;
- hỗ trợ người dùng;
- theo dõi bản phát hành trong portfolio.

Mục tiêu của project này là xây dựng một artifact nhỏ minh họa cách quản lý, hiển thị và kiểm tra `versionName` trong một ứng dụng Android.

---

## 2. Mục tiêu sản phẩm

Sau khi hoàn thành project, ứng dụng phải có khả năng:

- cấu hình `versionName` trong Android build configuration;
- phân biệt được `versionName` và `versionCode`;
- đọc được `versionName` của ứng dụng;
- hiển thị phiên bản cho người dùng;
- xác minh phiên bản của build được tạo ra;
- mô tả được quy trình tăng phiên bản khi chuẩn bị release;
- tạo được một artifact đủ rõ ràng để đưa vào portfolio.

Artifact cuối cùng cần chứng minh rằng người học không chỉ biết khai báo một chuỗi phiên bản mà còn hiểu vai trò của nó trong quy trình build và release.

---

## 3. Yêu cầu chức năng

Ứng dụng cần có một vị trí hiển thị phiên bản, chẳng hạn:

```text
About
────────────────────

My Android App

Version 1.3.0
```

Không bắt buộc phải xây dựng một màn hình About hoàn chỉnh nếu project hiện tại chưa có.

Có thể hiển thị phiên bản trong:

- Settings;
- About;
- Help;
- Developer information;
- màn hình debug nội bộ.

Phiên bản hiển thị phải được lấy từ build configuration thay vì viết cứng trực tiếp trong UI.

Không nên làm:

```kotlin
val version = "1.3.0"
```

nếu giá trị này chỉ nhằm biểu diễn phiên bản hiện tại của ứng dụng.

Cách trên dễ dẫn đến tình trạng:

```text
build.gradle.kts
versionName = "1.4.0"

nhưng UI
Version 1.3.0
```

Khi đó cùng một ứng dụng tồn tại hai nguồn thông tin phiên bản khác nhau.

---

## 4. Yêu cầu kỹ thuật

Project phải sử dụng hai khái niệm riêng biệt:

| Thuộc tính | Vai trò |
|---|---|
| `versionCode` | Giá trị số dùng để xác định thứ tự các phiên bản ứng dụng |
| `versionName` | Chuỗi phiên bản có ý nghĩa đối với người dùng và đội phát triển |

Ví dụ:

```kotlin
android {
    defaultConfig {
        versionCode = 12
        versionName = "1.3.0"
    }
}
```

Hai giá trị không phục vụ cùng một mục đích.

Có thể hình dung:

```text
Release
   │
   ├── versionCode = 12
   │      │
   │      └── Android / hệ thống phân phối dùng để xác định phiên bản mới hơn
   │
   └── versionName = "1.3.0"
          │
          └── Con người đọc và nhận biết phiên bản
```

Khi phát hành bản cập nhật tiếp theo, có thể chuyển thành:

```kotlin
versionCode = 13
versionName = "1.3.1"
```

`versionName` không phải là giá trị dùng để quyết định một APK hoặc App Bundle mới hơn bản khác. Việc quản lý thứ tự cập nhật phải dựa vào `versionCode`.

---

## 5. Thiết kế chiến lược phiên bản

Project sử dụng quy ước phiên bản:

```text
MAJOR.MINOR.PATCH
```

Ví dụ:

```text
1.4.2
```

Trong đó:

| Thành phần | Ví dụ | Ý nghĩa gợi ý |
|---|---:|---|
| `MAJOR` | `1` | Thay đổi lớn hoặc phiên bản sản phẩm chính |
| `MINOR` | `4` | Thêm tính năng tương thích với phiên bản hiện tại |
| `PATCH` | `2` | Sửa lỗi hoặc thay đổi nhỏ |

Android không bắt buộc `versionName` phải tuân theo Semantic Versioning. Đây là quy ước được project lựa chọn để giúp quá trình release dễ quản lý.

Ví dụ chuỗi phát hành:

```text
1.0.0
  ↓
1.1.0    thêm tính năng
  ↓
1.1.1    sửa lỗi
  ↓
1.2.0    thêm tính năng
  ↓
2.0.0    thay đổi lớn
```

Một bảng quản lý release đơn giản có thể được duy trì như sau:

| Release | `versionCode` | `versionName` | Nội dung |
|---|---:|---|---|
| Release 1 | 1 | `1.0.0` | Phiên bản đầu tiên |
| Release 2 | 2 | `1.1.0` | Thêm tính năng |
| Release 3 | 3 | `1.1.1` | Sửa lỗi |
| Release 4 | 4 | `1.2.0` | Thêm tính năng |

Quy tắc quan trọng là `versionCode` phải được quản lý độc lập với cách trình bày của `versionName`.

---

## 6. Triển khai

### 6.1. Khai báo `versionName`

Mở file build của application module, thường là:

```text
app/build.gradle.kts
```

Khai báo phiên bản trong `defaultConfig`:

```kotlin
android {
    defaultConfig {
        versionCode = 1
        versionName = "1.0.0"
    }
}
```

`versionName` được Android build system đưa vào thông tin phiên bản của application package. Giá trị khai báo trong Gradle có thể ghi đè giá trị tương ứng từ manifest trong quá trình build.

Sau khi thay đổi cấu hình, chạy lại quá trình build để artifact mới nhận thông tin phiên bản mới.

### 6.2. Đọc phiên bản trong application module

Đối với application module, thông tin phiên bản có thể được sử dụng thông qua `BuildConfig`.

Ví dụ:

```kotlin
fun currentVersionName(): String {
    return BuildConfig.VERSION_NAME
}
```

Trong application module, Android Gradle Plugin vẫn cung cấp thông tin `versionName` cho `BuildConfig`; không nên giả định điều tương tự cho Android library module.

Có thể đưa logic này vào một lớp nhỏ:

```kotlin
data class AppVersionInfo(
    val versionName: String
)

fun getAppVersionInfo(): AppVersionInfo {
    return AppVersionInfo(
        versionName = BuildConfig.VERSION_NAME
    )
}
```

UI chỉ cần nhận dữ liệu:

```text
Build configuration
        ↓
BuildConfig.VERSION_NAME
        ↓
AppVersionInfo
        ↓
UI
        ↓
Version 1.0.0
```

Cách tổ chức này đặc biệt hữu ích nếu sau này cần bổ sung:

- `versionCode`;
- build type;
- Git commit;
- build date;
- environment.

---

## 7. Quản lý phiên bản theo build

Trong quá trình phát triển, đôi khi cần nhận biết rõ bản debug hoặc một product flavor.

Android build configuration hỗ trợ `versionNameSuffix`.

Ví dụ ý tưởng:

```text
Release
1.4.0

Debug
1.4.0-debug
```

Có thể cấu hình:

```kotlin
android {
    defaultConfig {
        versionCode = 14
        versionName = "1.4.0"
    }

    buildTypes {
        debug {
            versionNameSuffix = "-debug"
        }
    }
}
```

Kết quả:

```text
debug   → 1.4.0-debug
release → 1.4.0
```

Tương tự, product flavor cũng có thể bổ sung `versionNameSuffix`, giúp tạo các build có tên phiên bản khác nhau.

Ví dụ:

```text
demoDebug
1.4.0-demo-debug
```

Cơ chế này hữu ích khi QA nhận nhiều artifact và cần nhanh chóng nhận biết bản đang được kiểm thử.

Không nên tùy tiện thêm quá nhiều thông tin vào `versionName`. Phiên bản release chính thức nên ngắn gọn và nhất quán với chiến lược versioning của sản phẩm.

---

## 8. Kiểm thử và xác minh

Sau khi cấu hình phiên bản, không nên chỉ kiểm tra source code. Cần xác minh artifact thực sự chứa đúng phiên bản.

Trước tiên, build debug:

```bash
./gradlew :app:assembleDebug
```

Project phải build thành công.

Tiếp theo, chạy ứng dụng và kiểm tra vị trí hiển thị phiên bản.

Ví dụ mong đợi:

```text
Version 1.0.0-debug
```

Nếu tạo release build:

```bash
./gradlew :app:assembleRelease
```

giá trị mong đợi có thể là:

```text
Version 1.0.0
```

Có thể kiểm tra thêm bằng Android Studio hoặc công cụ phân tích APK để xác nhận metadata của artifact.

Các trường hợp cần kiểm thử:

| Trường hợp | Kết quả mong đợi |
|---|---|
| Debug build | Có phiên bản đúng với debug configuration |
| Release build | Có phiên bản release đúng |
| Thay đổi `versionName` | Build mới phản ánh giá trị mới |
| UI About | Không chứa phiên bản viết cứng cũ |
| Tăng release | `versionCode` và `versionName` được cập nhật đúng chiến lược |

Một test đơn giản cũng có thể bảo vệ giả định rằng application luôn có `versionName` hợp lệ:

```kotlin
import org.junit.Assert.assertTrue
import org.junit.Test

class VersionConfigurationTest {

    @Test
    fun versionName_isNotBlank() {
        assertTrue(BuildConfig.VERSION_NAME.isNotBlank())
    }
}
```

Test này không thay thế việc kiểm tra release artifact nhưng giúp phát hiện cấu hình bất thường trong project.

---

## 9. Các lỗi cần phòng tránh

**Hiện tượng:** Cài build mới nhưng khó xác định phiên bản.

**Nguyên nhân:** Ứng dụng không hiển thị `versionName` ở vị trí hỗ trợ người dùng hoặc QA.

**Cách xử lý:** Hiển thị phiên bản trong About, Settings hoặc màn hình thông tin ứng dụng.

---

**Hiện tượng:** UI vẫn hiển thị phiên bản cũ sau khi release.

**Nguyên nhân:** Phiên bản được viết cứng trong source hoặc resource riêng.

**Cách xử lý:** Sử dụng một nguồn phiên bản lấy từ build configuration.

---

**Hiện tượng:** Thay đổi `versionName` nhưng hệ thống phân phối không xem artifact là bản cập nhật mới.

**Nguyên nhân:** Nhầm `versionName` với `versionCode`.

**Cách xử lý:** Tăng `versionCode` cho release mới theo quy trình phân phối ứng dụng.

---

**Hiện tượng:** QA không biết một APK là debug, staging hay production.

**Nguyên nhân:** Các build có thông tin nhận diện quá giống nhau.

**Cách xử lý:** Cân nhắc `versionNameSuffix`, `applicationIdSuffix` hoặc thông tin build nội bộ phù hợp với môi trường.

---

**Hiện tượng:** Library module cố sử dụng `BuildConfig.VERSION_NAME` để xác định phiên bản cuối của ứng dụng.

**Nguyên nhân:** Library không phải thành phần sở hữu version cuối cùng của application.

**Cách xử lý:** Để application module cung cấp thông tin phiên bản cho library nếu library thực sự cần nó.

---

## 10. Deliverable

Sau project, repository cần có tối thiểu:

```text
project/
├── app/
│   └── build.gradle.kts
│
├── screenshots/
│   └── version-info.png
│
└── README.md
```

`app/build.gradle.kts` phải chứa cấu hình `versionName`.

Screenshot phải chứng minh ứng dụng hiển thị đúng phiên bản.

README cần có một phần tương tự:

```markdown
## App Version

Current release:

- versionName: 1.0.0
- versionCode: 1

The app displays its current version in the About screen.

For a new release:

1. Increase versionCode.
2. Update versionName according to the project's versioning strategy.
3. Build the release artifact.
4. Verify the version before distribution.
```

Không cần tạo một ứng dụng lớn chỉ để hoàn thành project. Trọng tâm là tạo được một quy trình versioning nhỏ nhưng đúng và có thể chứng minh bằng artifact.

---

## 11. Rubric đánh giá

| Tiêu chí | Điểm |
|---|---:|
| Khai báo đúng `versionName` | 15 |
| Phân biệt đúng `versionName` và `versionCode` | 20 |
| Không viết cứng phiên bản trong UI | 15 |
| Ứng dụng hiển thị đúng phiên bản | 15 |
| Build và xác minh artifact thành công | 15 |
| README mô tả quy trình release | 10 |
| Có screenshot hoặc bằng chứng kiểm chứng | 10 |
| **Tổng** | **100** |

Một project đạt yêu cầu cần đạt tối thiểu các tiêu chí cốt lõi về cấu hình, hiển thị và kiểm chứng phiên bản.

---

## 12. Definition of Done

- [ ] `versionName` được khai báo trong build configuration.
- [ ] `versionCode` được khai báo và được hiểu là khái niệm khác với `versionName`.
- [ ] `versionName` không bị viết cứng lặp lại trong UI.
- [ ] Ứng dụng đọc được phiên bản hiện tại.
- [ ] Người dùng hoặc QA có thể xem phiên bản trong ứng dụng.
- [ ] Debug build có thể được phân biệt với release build nếu project sử dụng suffix.
- [ ] Project build thành công.
- [ ] Phiên bản của artifact đã được kiểm tra trước khi xem project là hoàn thành.
- [ ] Có screenshot chứng minh kết quả.
- [ ] README mô tả cách kiểm tra và cập nhật phiên bản.
- [ ] Artifact có thể được liên kết từ course progress tracker hoặc portfolio.

Project hoàn thành khi `versionName` không còn chỉ là một giá trị trong `build.gradle.kts`, mà đã trở thành một phần rõ ràng của quy trình build, kiểm thử và release ứng dụng Android.