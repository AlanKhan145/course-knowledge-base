# 015 - Pagination

**Học phần:** 04 - Network, Async and Services
**Module:** Module 07 - Network
**Nhóm nội dung:** REST with Retrofit
**Nguồn roadmap:** Network / REST with Retrofit
**Loại bài:** Network
**Thứ tự trong module:** 015
**Thời lượng gợi ý:** 32 phút

[![Android Paging Basics | Android Developers](https://tse3.mm.bing.net/th/id/OIP.cEnfBigDrs8EA9IUYOel7gHaEK?r=0\&pid=Api)](https://developer.android.com/codelabs/android-paging-basics?utm_source=chatgpt.com)

> **Pagination** trong bài này là phân trang dữ liệu từ API/network, không phải cơ chế paging của bộ nhớ trong hệ điều hành.

---

## 1. Tóm tắt

**Pagination** là kỹ thuật chia một tập dữ liệu lớn thành nhiều phần nhỏ — thường gọi là **page** — và chỉ tải thêm dữ liệu khi ứng dụng cần.

Ví dụ API có 10.000 sản phẩm. Thay vì Android tải cả 10.000 sản phẩm ngay từ đầu:

```text
GET /products
→ 10.000 items
```

ta có thể tải:

```text
GET /products?page=1&limit=20
→ 20 items

GET /products?page=2&limit=20
→ 20 items

GET /products?page=3&limit=20
→ 20 items
```

Android Jetpack cung cấp **Paging Library** để tải và hiển thị dữ liệu lớn theo từng phần từ network hoặc local storage, đồng thời tích hợp với kiến trúc Android và Kotlin. ([Android Developers][1])

Trong một ứng dụng Android hiện đại, luồng thường là:

```text
REST API
   ↓
Retrofit
   ↓
PagingSource
   ↓
Pager
   ↓
Flow<PagingData<T>>
   ↓
ViewModel
   ↓
LazyPagingItems
   ↓
LazyColumn / LazyVerticalGrid
```

---

# 2. Mục tiêu học tập

Sau bài này, bạn nên:

* Giải thích được **Pagination là gì**.
* Phân biệt pagination thủ công và **Jetpack Paging 3**.
* Hiểu các kiểu:

  * Page-based pagination.
  * Offset-based pagination.
  * Cursor-based pagination.
* Biết Retrofit truyền `page`, `limit`, `cursor`.
* Hiểu vai trò của:

  * `PagingSource`
  * `Pager`
  * `PagingConfig`
  * `PagingData`
  * `LazyPagingItems`
  * `LoadState`
* Xử lý:

  * initial loading;
  * load more;
  * refresh;
  * error;
  * retry;
  * hết dữ liệu.
* Hiểu `RemoteMediator` ở mức cơ bản.
* Viết được một màn hình infinite scrolling bằng Retrofit + Paging 3 + Compose.
* Biết cách test pagination.

---

# 3. Pagination giải quyết vấn đề gì?

Giả sử backend có:

```text
100.000 sản phẩm
```

Nếu app request toàn bộ:

```text
Android App
    │
    │ GET /products
    ▼
Server
    │
    │ 100.000 records
    ▼
Android App
```

có thể làm tăng:

* thời gian request;
* lượng dữ liệu mạng;
* bộ nhớ cần giữ;
* thời gian parse JSON;
* thời gian render danh sách.

Paging Library được thiết kế để tải dữ liệu dần dần thay vì yêu cầu toàn bộ dataset ngay lập tức. ([Android Developers][1])

### Sau khi dùng Pagination

```text
100.000 products
       │
       ├── Page 1 → 20 items
       ├── Page 2 → 20 items
       ├── Page 3 → 20 items
       │
       └── ...
```

UI chỉ tải thêm khi người dùng tiến gần cuối danh sách.

---

# 4. Ba kiểu Pagination thường gặp

## 4.1. Page-based Pagination

API nhận số trang.

```http
GET /products?page=1&limit=20
```

Response:

```json
{
  "page": 1,
  "totalPages": 50,
  "items": [
    {
      "id": 101,
      "name": "Keyboard"
    }
  ]
}
```

Trang tiếp:

```http
GET /products?page=2&limit=20
```

### Ưu điểm

Dễ:

* hiểu;
* debug;
* implement;
* hiển thị số trang.

### Nhược điểm

Dataset thay đổi liên tục có thể làm item:

```text
bị trùng
```

hoặc:

```text
bị bỏ qua
```

giữa hai lần request.

---

## 4.2. Offset-based Pagination

Thay vì số trang, API nhận vị trí bắt đầu.

```http
GET /products?offset=0&limit=20
```

sau đó:

```http
GET /products?offset=20&limit=20
```

rồi:

```http
GET /products?offset=40&limit=20
```

Có thể hình dung:

```text
0                  20                 40
│------------------│------------------│
     Batch 1             Batch 2
```

Công thức:

```text
offset = page × pageSize
```

nếu `page` bắt đầu từ `0`.

---

# 4.3. Cursor-based Pagination

Server trả một cursor đại diện cho vị trí tiếp theo.

Request đầu:

```http
GET /feed?limit=20
```

Response:

```json
{
  "items": [...],
  "nextCursor": "eyJpZCI6MTAwMH0="
}
```

Request tiếp:

```http
GET /feed?cursor=eyJpZCI6MTAwMH0=&limit=20
```

Luồng:

```text
Request
   │
   ▼
Page A
   │
   └── nextCursor = ABC
                     │
                     ▼
                  Page B
                     │
                     └── nextCursor = XYZ
                                        │
                                        ▼
                                     Page C
```

Kiểu này đặc biệt phù hợp với dữ liệu có thể thay đổi thường xuyên như:

* social feed;
* chat;
* notification;
* activity stream.

---

# 5. Pagination với Retrofit

Giả sử backend hỗ trợ:

```http
GET /products?page=1&limit=20
```

## API response DTO

```kotlin
data class ProductPageDto(
    val page: Int,
    val totalPages: Int,
    val items: List<ProductDto>
)

data class ProductDto(
    val id: Long,
    val name: String,
    val price: Double
)
```

Retrofit interface:

```kotlin
interface ProductApi {

    @GET("products")
    suspend fun getProducts(
        @Query("page") page: Int,
        @Query("limit") limit: Int
    ): ProductPageDto
}
```

Khi gọi:

```kotlin
api.getProducts(
    page = 2,
    limit = 20
)
```

Retrofit tạo request tương đương:

```http
GET /products?page=2&limit=20
```

---

# 6. Không nên tự quản lý Pagination trong UI

Một implementation đơn giản có thể làm:

```kotlin
var page = 1

fun loadMore() {
    page++
    api.getProducts(page, 20)
}
```

rồi Activity/Composable tự kiểm tra:

```text
User scroll gần cuối?
       │
       ├─ Không → không làm gì
       │
       └─ Có
           ↓
        page++
           ↓
        API call
```

Nhưng khi ứng dụng lớn hơn, bạn phải tự xử lý:

```text
Đang request chưa?
↓
Có request trùng không?
↓
Trang hiện tại là bao nhiêu?
↓
Rotate màn hình thì sao?
↓
Retry trang nào?
↓
Refresh reset về page nào?
↓
Đã đến cuối dataset chưa?
↓
Request bị cancel thì sao?
```

Jetpack Paging giải quyết phần lớn cơ chế orchestration này. Paging 3 có hỗ trợ Kotlin Coroutines/Flow, load state, retry và refresh. ([Android Developers][2])

---

# 7. Kiến trúc Paging 3

Các thành phần cốt lõi thường là:

```text
              DATA LAYER
┌─────────────────────────────────┐
│                                 │
│ REST API                        │
│    ↓                            │
│ Retrofit                        │
│    ↓                            │
│ PagingSource<Key, Value>        │
│    ↓                            │
│ Pager                           │
│                                 │
└───────────────┬─────────────────┘
                │
                │ Flow<PagingData<T>>
                ▼

             VIEWMODEL
┌─────────────────────────────────┐
│ cachedIn(viewModelScope)        │
└───────────────┬─────────────────┘
                │
                ▼

               UI
┌─────────────────────────────────┐
│ collectAsLazyPagingItems()      │
│            ↓                    │
│ LazyColumn                      │
│            ↓                    │
│ Loading / Data / Error / Retry  │
└─────────────────────────────────┘
```

`PagingSource` xác định cách lấy từng chunk dữ liệu, còn `Pager` tạo stream `PagingData` mà UI có thể consume. ([Android Developers][3])

---

# 8. `PagingSource`

`PagingSource` nằm ở **Data Layer**.

Nhiệm vụ chính:

```text
Paging Library
      │
      │ "Tôi cần page tiếp theo"
      ▼
PagingSource
      │
      ▼
Retrofit
      │
      ▼
REST API
```

Ví dụ:

```kotlin
class ProductPagingSource(
    private val api: ProductApi
) : PagingSource<Int, ProductDto>() {

    override suspend fun load(
        params: LoadParams<Int>
    ): LoadResult<Int, ProductDto> {

        val page = params.key ?: 1

        return try {

            val response = api.getProducts(
                page = page,
                limit = PAGE_SIZE
            )

            LoadResult.Page(
                data = response.items,

                prevKey = if (page == 1) {
                    null
                } else {
                    page - 1
                },

                nextKey = if (
                    response.items.isEmpty() ||
                    page >= response.totalPages
                ) {
                    null
                } else {
                    page + 1
                }
            )

        } catch (exception: Exception) {

            LoadResult.Error(exception)
        }
    }

    override fun getRefreshKey(
        state: PagingState<Int, ProductDto>
    ): Int? {

        val anchorPosition =
            state.anchorPosition ?: return null

        val anchorPage =
            state.closestPageToPosition(anchorPosition)

        return anchorPage?.prevKey?.plus(1)
            ?: anchorPage?.nextKey?.minus(1)
    }

    companion object {
        const val PAGE_SIZE = 20
    }
}
```

Android yêu cầu implementation `PagingSource` override `load()` để xác định cách dữ liệu phân trang được lấy từ nguồn tương ứng. ([Android Developers][3])

---

# 9. Hiểu `LoadResult.Page`

Đây là phần quan trọng nhất:

```kotlin
LoadResult.Page(
    data = response.items,
    prevKey = ...,
    nextKey = ...
)
```

Có thể hình dung:

```text
            prevKey
               │
               ▼
        ┌─────────────┐
        │   Page 2    │
        │             │
        │ Item 21     │
        │ Item 22     │
        │ ...         │
        │ Item 40     │
        └─────────────┘
               │
               ▼
            nextKey
```

Ví dụ đang ở page 2:

```text
prevKey = 1
nextKey = 3
```

---

# 10. Làm sao báo "đã hết dữ liệu"?

Khi không còn trang sau:

```kotlin
nextKey = null
```

Ví dụ:

```text
Page 1
  ↓
Page 2
  ↓
Page 3
  ↓
Page 4
  ↓
Page 5
  ↓
null
```

Paging sẽ hiểu:

```text
endOfPaginationReached
```

về mặt logic và không tiếp tục append page mới từ `PagingSource`.

---

# 11. Repository

Tạo `Pager` trong Data/Repository layer:

```kotlin
class ProductRepository(
    private val api: ProductApi
) {

    fun getProducts(): Flow<PagingData<ProductDto>> {

        return Pager(
            config = PagingConfig(
                pageSize = ProductPagingSource.PAGE_SIZE,
                initialLoadSize = ProductPagingSource.PAGE_SIZE,
                prefetchDistance = 5,
                enablePlaceholders = false
            ),
            pagingSourceFactory = {
                ProductPagingSource(api)
            }
        ).flow
    }
}
```

---

# 12. `PagingConfig`

```kotlin
PagingConfig(
    pageSize = 20,
    initialLoadSize = 20,
    prefetchDistance = 5,
    enablePlaceholders = false
)
```

## `pageSize`

Kích thước mỗi page.

```text
Page size = 20
```

```text
Page 1 → 20 items
Page 2 → 20 items
Page 3 → 20 items
```

---

## `initialLoadSize`

Số lượng dự kiến cho lần load đầu.

Trong ví dụ API page-based đơn giản này ta giữ:

```kotlin
initialLoadSize = 20
```

để logic page/limit dễ theo dõi.

---

## `prefetchDistance`

Ví dụ:

```kotlin
prefetchDistance = 5
```

User đang đọc:

```text
Item 11
Item 12
Item 13
Item 14
Item 15   ← user
-------------------
Item 16
Item 17
Item 18
Item 19
Item 20
```

Khi user tiến đủ gần cuối dữ liệu hiện tại, Paging có thể bắt đầu chuẩn bị batch tiếp theo.

---

# 13. DTO không nên trở thành UI model

Không nên truyền thẳng:

```text
ProductDto
```

qua toàn bộ ứng dụng.

Nên:

```text
Network
   ↓
ProductDto
   ↓
Mapper
   ↓
Product
   ↓
ProductUiModel
   ↓
UI
```

Ví dụ:

```kotlin
data class ProductUiModel(
    val id: Long,
    val title: String,
    val priceText: String
)
```

Mapper:

```kotlin
fun ProductDto.toUiModel(): ProductUiModel {

    return ProductUiModel(
        id = id,
        title = name,
        priceText = "$${"%.2f".format(price)}"
    )
}
```

Paging hỗ trợ transform item trong `PagingData`, phù hợp cho việc chuyển model data layer thành model dành cho UI. ([Android Developers][4])

---

# 14. Mapping trong Repository

```kotlin
class ProductRepository(
    private val api: ProductApi
) {

    fun getProducts(): Flow<PagingData<ProductUiModel>> {

        return Pager(
            config = PagingConfig(
                pageSize = 20,
                initialLoadSize = 20,
                enablePlaceholders = false
            ),
            pagingSourceFactory = {
                ProductPagingSource(api)
            }
        )
            .flow
            .map { pagingData ->

                pagingData.map { dto ->
                    dto.toUiModel()
                }
            }
    }
}
```

Kiến trúc trở thành:

```text
Retrofit
   ↓
ProductPageDto
   ↓
PagingSource
   ↓
PagingData<ProductDto>
   ↓
Mapper
   ↓
PagingData<ProductUiModel>
   ↓
ViewModel
   ↓
UI
```

---

# 15. ViewModel

```kotlin
class ProductViewModel(
    repository: ProductRepository
) : ViewModel() {

    val products =
        repository
            .getProducts()
            .cachedIn(viewModelScope)
}
```

`cachedIn(viewModelScope)` thường được đặt ở cuối chuỗi xử lý `PagingData` trong ViewModel để cache dữ liệu paging trong scope đó. ([Android Developers][5])

---

# 16. Tại sao `cachedIn(viewModelScope)` quan trọng?

Nếu UI bị recreate, ví dụ:

```text
Portrait
   ↓
Rotate
   ↓
Landscape
```

ta không muốn vô tình tạo lại toàn bộ quá trình paging từ đầu nếu không cần thiết.

Luồng mong muốn:

```text
                    ┌───────────────┐
                    │   ViewModel   │
                    │               │
                    │ Paging cache  │
                    └───────┬───────┘
                            │
                ┌───────────┴────────────┐
                ▼                        ▼
          Old Compose UI           New Compose UI
                               sau configuration change
```

Việc cache `PagingData` trong `viewModelScope` là pattern được tài liệu Paging chính thức sử dụng. ([Android Developers][6])

---

# 17. Compose + `LazyPagingItems`

Trong Compose:

```kotlin
val products =
    viewModel.products.collectAsLazyPagingItems()
```

`collectAsLazyPagingItems()` chuyển stream Paging thành đối tượng mà lazy layouts như `LazyColumn` hay `LazyVerticalGrid` có thể sử dụng. ([Android Developers][7])

---

# 18. Hiển thị danh sách

```kotlin
@Composable
fun ProductScreen(
    viewModel: ProductViewModel
) {

    val products =
        viewModel.products.collectAsLazyPagingItems()

    LazyColumn {

        items(
            count = products.itemCount,
            key = { index ->
                products[index]?.id ?: index
            }
        ) { index ->

            val product = products[index]

            if (product != null) {
                ProductItem(product)
            }
        }
    }
}
```

Paging 3 có tích hợp Compose thông qua `paging-compose`, cho phép lazy layouts tải và hiển thị dataset lớn theo từng phần. ([Android Developers][8])

---

# 19. Pagination không chỉ có `Loading`

Đây là lỗi thiết kế phổ biến.

Pagination có ít nhất hai tình huống loading rất khác nhau:

```text
1. REFRESH

Màn hình chưa có data
        ↓
      Loading
        ↓
      Content
```

và:

```text
2. APPEND

Content đã tồn tại
        ↓
User scroll xuống cuối
        ↓
Loading thêm ở footer
        ↓
Content tiếp tục xuất hiện
```

Paging cung cấp `CombinedLoadStates` để UI phân biệt trạng thái load như refresh, append và prepend. ([Android Developers][9])

---

# 20. `LoadState`

Ba trạng thái cơ bản:

```text
LoadState
├── Loading
├── NotLoading
└── Error
```

Nhưng chúng xuất hiện trong từng loại operation:

```text
loadState
├── refresh
├── append
└── prepend
```

---

# 21. Initial Loading

```kotlin
when (val refreshState = products.loadState.refresh) {

    is LoadState.Loading -> {
        CircularProgressIndicator()
    }

    is LoadState.Error -> {
        ErrorContent(
            message = refreshState.error.message
                ?: "Không thể tải dữ liệu",
            onRetry = {
                products.retry()
            }
        )
    }

    else -> {
        ProductList(products)
    }
}
```

---

# 22. Append Loading

Không nên che toàn màn hình khi đang load trang tiếp theo.

UX tốt hơn:

```text
┌─────────────────────┐
│ Product 1           │
├─────────────────────┤
│ Product 2           │
├─────────────────────┤
│ Product 3           │
├─────────────────────┤
│ Product 4           │
├─────────────────────┤
│                     │
│    ⏳ Loading...    │
└─────────────────────┘
```

Code:

```kotlin
if (products.loadState.append is LoadState.Loading) {

    item {

        Box(
            modifier = Modifier.fillMaxWidth(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator()
        }
    }
}
```

---

# 23. Append Error

Giả sử:

```text
Page 1 → OK
Page 2 → OK
Page 3 → Network timeout
```

Không nên biến màn hình thành:

```text
ERROR
```

vì người dùng vẫn có dữ liệu page 1 và page 2.

UX tốt hơn:

```text
Product 1
Product 2
...
Product 40

---------------------

Không thể tải thêm.

       [Thử lại]
```

Code:

```kotlin
val appendState = products.loadState.append

if (appendState is LoadState.Error) {

    item {

        Column {

            Text(
                text = "Không thể tải thêm dữ liệu"
            )

            Button(
                onClick = {
                    products.retry()
                }
            ) {
                Text("Thử lại")
            }
        }
    }
}
```

Paging cung cấp error/load state riêng để UI có thể triển khai retry phù hợp. ([Android Developers][2])

---

# 24. `retry()` và `refresh()` không giống nhau

## Retry

```kotlin
products.retry()
```

Ý nghĩa:

```text
Page 3 failed
     ↓
retry()
     ↓
Thử lại page 3
```

---

## Refresh

```kotlin
products.refresh()
```

Ý nghĩa về mặt UX:

```text
Current paging generation
          ↓
       refresh
          ↓
Re-read dataset
```

Nên dùng trong những tình huống như:

```text
Swipe to refresh
```

hoặc:

```text
User bấm nút Refresh
```

Paging 3 hỗ trợ cả retry và refresh trong presentation layer. ([Android Developers][2])

---

# 25. UI hoàn chỉnh

Một version đơn giản:

```kotlin
@Composable
fun ProductScreen(
    viewModel: ProductViewModel
) {

    val products =
        viewModel.products.collectAsLazyPagingItems()

    when (val refresh = products.loadState.refresh) {

        is LoadState.Loading -> {

            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
        }

        is LoadState.Error -> {

            ErrorContent(
                message = refresh.error.message
                    ?: "Có lỗi xảy ra",
                onRetry = {
                    products.retry()
                }
            )
        }

        else -> {

            LazyColumn(
                modifier = Modifier.fillMaxSize()
            ) {

                items(
                    count = products.itemCount,
                    key = { index ->
                        products[index]?.id ?: index
                    }
                ) { index ->

                    products[index]?.let { product ->

                        ProductItem(
                            product = product
                        )
                    }
                }

                when (
                    val append =
                        products.loadState.append
                ) {

                    is LoadState.Loading -> {

                        item {
                            LoadingFooter()
                        }
                    }

                    is LoadState.Error -> {

                        item {

                            RetryFooter(
                                message = "Không thể tải thêm",
                                onRetry = {
                                    products.retry()
                                }
                            )
                        }
                    }

                    else -> Unit
                }
            }
        }
    }
}
```

---

# 26. Luồng hoàn chỉnh khi user scroll

```text
App mở
   │
   ▼
Pager tạo PagingSource
   │
   ▼
load(page = 1)
   │
   ▼
Retrofit
   │
   ▼
REST API
   │
   ▼
20 products
   │
   ▼
PagingData
   │
   ▼
LazyColumn
   │
   ▼
User scroll
   │
   ▼
gần cuối page
   │
   ▼
Paging cần thêm data
   │
   ▼
load(page = 2)
   │
   ▼
Retrofit
   │
   ▼
20 products
   │
   ▼
append vào list
```

Đây chính là use case mà Paging Library tự động hóa: UI đọc dữ liệu, `Pager`/`PagingSource` điều phối các lần load cần thiết. ([Android Developers][10])

---

# 27. State Machine của Pagination

Có thể mô hình hóa bằng:

```text
                    ┌─────────┐
                    │ Initial │
                    └────┬────┘
                         │
                         ▼
                    ┌─────────┐
                    │ Loading │
                    └────┬────┘
                         │
              ┌──────────┴─────────┐
              │                    │
              ▼                    ▼
         ┌─────────┐          ┌─────────┐
         │ Content │          │  Error  │
         └────┬────┘          └────┬────┘
              │                    │
          Scroll                 Retry
              │                    │
              ▼                    │
        ┌─────────────┐             │
        │ Append Load │◄────────────┘
        └──────┬──────┘
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
   New page       Append Error
       │                │
       │              Retry
       │                │
       └───────┬────────┘
               ▼
            Content
```

---

# 28. Pagination và UI State

Không nên coi pagination đơn giản như:

```kotlin
sealed interface UiState {
    data object Loading
    data class Success(...)
    data class Error(...)
}
```

vì một list paging có thể đồng thời ở trạng thái:

```text
Có content
+
đang append
```

hoặc:

```text
Có content
+
append error
```

Do đó `PagingData` thường được expose thành stream riêng thay vì nhét vào immutable UI state thông thường. Android Architecture Guide cũng lưu ý `PagingData` không nên được biểu diễn như một field của immutable UI state. ([Android Developers][11])

---

# 29. Trạng thái Empty

Một trường hợp dễ quên:

```text
API request thành công
+
0 records
```

không phải:

```text
Error
```

UI nên hiển thị:

```text
┌────────────────────────┐
│                        │
│    Không có sản phẩm   │
│                        │
└────────────────────────┘
```

Có thể kiểm tra:

```kotlin
val isEmpty =
    products.loadState.refresh is LoadState.NotLoading &&
    products.itemCount == 0
```

---

# 30. Pagination với Room

Đến đây chúng ta mới có:

```text
Network
   ↓
PagingSource
   ↓
UI
```

Production app thường có thể cần:

```text
Network
   ↓
Room
   ↓
UI
```

Architecture nâng cao:

```text
                     NETWORK
                        │
                        ▼
                  RemoteMediator
                        │
                        ▼
┌─────────────────────────────────────┐
│                ROOM                 │
│                                     │
│ API data → Database → PagingSource  │
└─────────────────┬───────────────────┘
                  │
                  ▼
                 Pager
                  │
                  ▼
              PagingData
                  │
                  ▼
                  UI
```

`RemoteMediator` được Paging Library cung cấp cho trường hợp phối hợp network với local database: khi cached data không đủ, mediator có thể tải thêm từ network rồi lưu vào database, còn UI đọc dữ liệu từ database qua `PagingSource`. ([Android Developers][10])

---

# 31. `RemoteMediator` dùng khi nào?

Ví dụ app tin tức.

User mở app khi offline:

```text
Internet ❌
```

Nhưng Room đang có:

```text
Article 1
Article 2
Article 3
...
```

UI vẫn có thể hiển thị cached data.

Khi có Internet:

```text
Network
   ↓
RemoteMediator
   ↓
Room
   ↓
PagingSource
   ↓
UI
```

Đây là pattern phù hợp với ứng dụng cần khả năng sử dụng dữ liệu cache khi mạng không ổn định. ([Android Developers][10])

---

# 32. `LoadType` với RemoteMediator

RemoteMediator nhận một trong ba kiểu:

```text
LoadType
├── REFRESH
├── APPEND
└── PREPEND
```

### REFRESH

```text
Reload dataset
```

### APPEND

```text
Tải item ở phía cuối
```

### PREPEND

```text
Tải item ở phía đầu
```

Đây là ba loại load được Android Paging sử dụng trong quá trình phối hợp dữ liệu.

---

# 33. Lifecycle và Pagination

Pagination liên quan trực tiếp tới lifecycle.

## Sai

```text
Activity
   ↓
tự giữ page = 7
   ↓
Rotate
   ↓
Activity recreate
   ↓
page = 1
```

Có thể dẫn tới:

```text
list nhảy về đầu
```

hoặc:

```text
request lại dữ liệu
```

---

## Tốt hơn

```text
UI
 ↓
ViewModel
 ↓
Flow<PagingData<T>>
 ↓
cachedIn(viewModelScope)
```

PagingData được cache trong `ViewModel` theo pattern chính thức của Paging. ([Android Developers][5])

---

# 34. Tránh giữ PagingData sai cách

Không nên:

```kotlin
var allProducts =
    mutableListOf<Product>()
```

sau đó mỗi page:

```kotlin
allProducts.addAll(newProducts)
```

và biến ViewModel thành nơi giữ một danh sách ngày càng lớn nếu mục tiêu thực sự là paging.

Paging Library đã cung cấp abstractions để load dữ liệu incrementally và quản lý paging stream. ([Android Developers][1])

---

# 35. UX tốt cho Pagination

Một màn hình pagination tốt nên phân biệt:

| Tình huống                | UI phù hợp           |
| ------------------------- | -------------------- |
| Load đầu tiên             | Full-screen loading  |
| Load đầu lỗi              | Error + Retry        |
| API trả rỗng              | Empty state          |
| Đang load thêm            | Footer loading       |
| Load thêm lỗi             | Footer error + Retry |
| Refresh                   | Refresh indicator    |
| Có data cũ nhưng mạng lỗi | Giữ content          |
| Hết dữ liệu               | Không request thêm   |

---

# 36. UX không tốt

Không nên:

```text
User scroll
    ↓
load page 5
    ↓
network error
    ↓
XÓA toàn bộ danh sách
    ↓
ERROR SCREEN
```

Tốt hơn:

```text
Page 1
Page 2
Page 3
Page 4
     ↓
Page 5 failed
     ↓
Giữ dữ liệu hiện tại

"Không thể tải thêm"
[Thử lại]
```

---

# 37. Những lỗi phổ biến

## Lỗi 1: Không dừng pagination

Sai:

```kotlin
nextKey = page + 1
```

luôn luôn.

Hậu quả:

```text
Page 98
Page 99
Page 100
Page 101
Page 102
...
```

dù server đã hết data.

---

## Đúng

```kotlin
nextKey =
    if (response.items.isEmpty()) {
        null
    } else {
        page + 1
    }
```

Hoặc nếu backend cung cấp metadata:

```kotlin
nextKey =
    if (page >= response.totalPages) {
        null
    } else {
        page + 1
    }
```

---

# 38. Lỗi 2: Page indexing

Có API bắt đầu từ:

```text
page = 0
```

nhưng app lại mặc định:

```text
page = 1
```

Kết quả:

```text
bỏ mất page đầu tiên
```

Luôn kiểm tra contract backend.

---

# 39. Lỗi 3: Load nhiều lần cùng page

Implementation thủ công dễ gặp:

```text
Scroll event
Scroll event
Scroll event
Scroll event
```

↓

```text
GET page=5
GET page=5
GET page=5
GET page=5
```

Một lợi ích của Paging Library là cung cấp cơ chế quản lý việc request các chunk dữ liệu theo nhu cầu của UI thay vì để màn hình tự quản lý scroll listener và request page. ([Android Developers][12])

---

# 40. Lỗi 4: Append loading che toàn màn hình

Sai:

```text
Page 1 + Page 2 đang hiển thị

User scroll
      ↓

████████████████
FULL SCREEN LOADING
████████████████
```

Tốt hơn:

```text
Product 30
Product 31
Product 32
Product 33

     ⏳ Loading
```

---

# 41. Lỗi 5: DTO leak vào UI

Sai:

```text
Retrofit DTO
     ↓
Repository
     ↓
ViewModel
     ↓
Composable
```

Nếu backend đổi:

```json
{
  "product_name": "Keyboard"
}
```

toàn bộ app có thể bị ảnh hưởng.

Tốt hơn:

```text
ProductDto
    ↓
Mapper
    ↓
ProductUiModel
```

Paging hỗ trợ mapping trực tiếp trên từng `PagingData`. ([Android Developers][4])

---

# 42. Lỗi 6: Không xử lý query/search

Ví dụ:

```text
Search "Android"
      ↓
Pagination Android

Search "Kotlin"
      ↓
Pagination Kotlin
```

Không được để:

```text
Android page 5
```

tiếp tục append vào:

```text
Kotlin page 1
```

Mỗi query phải đại diện cho paging stream/dataset phù hợp của chính nó.

---

# 43. Search + Pagination

Architecture:

```text
Search box
    │
    ▼
Query StateFlow
    │
    ▼
flatMapLatest
    │
    ▼
Repository.search(query)
    │
    ▼
Pager
    │
    ▼
PagingData
```

Ví dụ:

```kotlin
val products =
    query
        .debounce(300)
        .distinctUntilChanged()
        .flatMapLatest { query ->

            repository.searchProducts(query)
        }
        .cachedIn(viewModelScope)
```

Ý tưởng quan trọng:

```text
Query mới
   ↓
Paging stream cũ không còn là dataset cần hiển thị
   ↓
Tạo paging stream tương ứng query mới
```

---

# 44. Testing `PagingSource`

Pagination đặc biệt dễ gặp lỗi:

```text
prevKey
nextKey
page boundary
empty page
network error
refresh key
```

Android cung cấp hướng dẫn và thư viện `paging-testing` để test Paging implementation, bao gồm kiểm thử `Flow<PagingData<T>>`. ([Android Developers][13])

---

# 45. Unit Test cần có

Ít nhất nên test:

```text
1. First page success
2. Middle page success
3. Last page
4. Empty response
5. Network error
6. Correct prevKey
7. Correct nextKey
```

Ví dụ expectation:

```text
Given:
page = 1

API:
20 products

Expect:
prevKey = null
nextKey = 2
```

---

# 46. Test trang cuối

```text
Given:
page = 5
totalPages = 5

Expect:

nextKey = null
```

Pseudo-test:

```kotlin
assertEquals(
    null,
    result.nextKey
)
```

---

# 47. Test error

API:

```text
HTTP 500
```

hoặc:

```text
IOException
```

Expected:

```kotlin
LoadResult.Error
```

Không phải:

```text
app crash
```

---

# 48. Debug Pagination

Khi pagination lỗi, log:

```text
query
page
pageSize
itemCount
prevKey
nextKey
HTTP status
load type
```

Ví dụ:

```text
PagingSource

page      = 3
pageSize  = 20
items     = 20
prevKey   = 2
nextKey   = 4
```

---

# 49. Network Inspector

Trong Android Studio, Network Inspector có thể giúp kiểm tra chuỗi request.

Bạn muốn nhìn thấy:

```text
GET /products?page=1&limit=20
200

GET /products?page=2&limit=20
200

GET /products?page=3&limit=20
200
```

Không phải:

```text
page=2
page=2
page=2
page=2
```

---

# 50. Performance

Pagination giúp tránh việc ứng dụng cố tải toàn bộ một dataset lớn ngay lập tức. Android mô tả Paging Library là giải pháp tải và hiển thị từng phần của dataset lớn nhằm sử dụng network bandwidth và tài nguyên hệ thống hiệu quả hơn. ([Android Developers][1])

Tuy nhiên:

```text
Pagination
≠
tự động performance tốt
```

Bạn vẫn phải quan tâm đến:

```text
Image loading
Database queries
Complex Composables
JSON parsing
Page size
Prefetch distance
Caching
```

---

# 51. Chọn Page Size

Không có một con số đúng cho mọi ứng dụng.

Ví dụ:

```text
10
20
30
50
```

phụ thuộc vào:

```text
kích thước mỗi item
+
latency
+
payload JSON
+
tốc độ scroll
+
chi phí backend
+
UX
```

Ví dụ feed có ảnh lớn có thể cần chiến lược khác với list chỉ có:

```text
name + id
```

---

# 52. Pagination trong Clean Architecture

Có thể tổ chức:

```text
data/
├── remote/
│   ├── ProductApi.kt
│   ├── ProductDto.kt
│   └── ProductPagingSource.kt
│
├── mapper/
│   └── ProductMapper.kt
│
└── repository/
    └── ProductRepositoryImpl.kt

domain/
├── model/
│   └── Product.kt
│
└── repository/
    └── ProductRepository.kt

presentation/
├── ProductViewModel.kt
├── ProductScreen.kt
└── ProductItem.kt
```

Luồng:

```text
REST API
   ↓
DTO
   ↓
PagingSource
   ↓
Repository
   ↓
Domain/UI mapping
   ↓
ViewModel
   ↓
Compose
```

---

# 53. Paging và Single Source of Truth

Khi thêm Room:

```text
API
 ↓
RemoteMediator
 ↓
Room
 ↓
PagingSource
 ↓
UI
```

database có thể trở thành nguồn dữ liệu mà UI trực tiếp quan sát, trong khi network chỉ cập nhật cache. Đây là architecture mà tài liệu Paging network + database mô tả. ([Android Developers][10])

---

# 54. Pagination không chỉ dành cho RecyclerView

Với Compose, Paging có thể kết hợp với lazy foundations như:

```text
LazyColumn
LazyVerticalGrid
```

và các lazy container tương thích khác thông qua `LazyPagingItems`. ([Android Developers][7])

Ví dụ gallery:

```text
┌────────┬────────┐
│ Image  │ Image  │
├────────┼────────┤
│ Image  │ Image  │
├────────┼────────┤
│ Image  │ Image  │
└────────┴────────┘
```

---

# 55. Mini Project đề xuất

## Product Catalog Pagination

Xây app:

```text
Product Browser
```

Màn hình:

```text
┌─────────────────────────────┐
│ Search products...          │
├─────────────────────────────┤
│ Keyboard               $50 │
├─────────────────────────────┤
│ Mouse                  $20 │
├─────────────────────────────┤
│ Monitor               $200 │
├─────────────────────────────┤
│ Laptop               $1200 │
├─────────────────────────────┤
│                             │
│          Loading...         │
└─────────────────────────────┘
```

Architecture:

```text
Mock/API
   ↓
Retrofit
   ↓
ProductPagingSource
   ↓
Repository
   ↓
ProductViewModel
   ↓
PagingData<ProductUiModel>
   ↓
LazyColumn
```

---

# 56. Các trạng thái bắt buộc trong bài thực hành

Phải demo đủ:

```text
Initial Loading
      ↓
Success
      ↓
Append Loading
      ↓
Append Success
```

và:

```text
Initial Loading
      ↓
Error
      ↓
Retry
      ↓
Success
```

và:

```text
Existing Content
      ↓
Append
      ↓
Network Error
      ↓
Footer Retry
```

---

# 57. Mô phỏng Offline

Một test thủ công rất hữu ích:

```text
1. Mở app
2. Load page 1
3. Scroll xuống
4. Bật Airplane Mode
5. Để app request page tiếp theo
```

Expected:

```text
Data cũ vẫn còn

↓

Footer:

"Không thể tải thêm"

[Thử lại]
```

Sau đó:

```text
Internet ON
    ↓
Retry
    ↓
Page tiếp theo xuất hiện
```

---

# 58. Bài tập

## Bài 1 - Retrofit Pagination

Tạo endpoint:

```kotlin
@GET("products")
suspend fun getProducts(
    @Query("page") page: Int,
    @Query("limit") limit: Int
): ProductPageDto
```

---

## Bài 2 - PagingSource

Implement:

```text
ProductPagingSource
```

với:

```text
page = 1
pageSize = 20
```

---

## Bài 3 - ViewModel

Expose:

```kotlin
Flow<PagingData<ProductUiModel>>
```

và:

```kotlin
cachedIn(viewModelScope)
```

---

## Bài 4 - Compose

Hiển thị:

```text
Loading
Success
Empty
Error
Retry
Append Loading
Append Error
```

---

## Bài 5 - Error Simulation

Làm API mock cố tình lỗi:

```text
page = 3
```

Expected:

```text
Page 1 ✓
Page 2 ✓
Page 3 ✗

→ List vẫn còn
→ Retry xuất hiện
```

---

# 59. Bài nâng cao

Thêm:

```text
Room
+
RemoteMediator
```

Architecture:

```text
Retrofit
   ↓
RemoteMediator
   ↓
Room
   ↓
PagingSource
   ↓
Pager
   ↓
ViewModel
   ↓
Compose
```

Đây là bước tiếp theo phù hợp sau khi đã hiểu paging trực tiếp từ network. ([Android Developers][10])

---

# 60. Artifact cho Portfolio

Một artifact tốt có thể là:

```text
pagination-demo/
│
├── README.md
│
├── ProductApi.kt
├── ProductPagingSource.kt
├── ProductRepository.kt
├── ProductViewModel.kt
├── ProductScreen.kt
│
└── screenshots/
    ├── initial-loading.png
    ├── loaded-list.png
    ├── append-loading.png
    └── append-error-retry.png
```

README nên mô tả:

```text
Retrofit
   ↓
PagingSource
   ↓
Pager
   ↓
Flow<PagingData>
   ↓
ViewModel
   ↓
Compose
```

và kèm screenshot của:

```text
Loading
Success
Error
Retry
```

---

# 61. Câu hỏi phỏng vấn thường gặp

### Pagination là gì?

> Pagination là kỹ thuật tải dataset lớn theo từng phần thay vì tải toàn bộ dữ liệu cùng lúc.

### `PagingSource` làm gì?

> Nó định nghĩa cách Paging Library lấy từng chunk dữ liệu từ data source.

### `Pager` làm gì?

> Nó sử dụng `PagingSource` cùng `PagingConfig` để tạo stream `PagingData`. ([Android Developers][3])

### `nextKey = null` nghĩa là gì?

```text
Không còn page tiếp theo.
```

### `retry()` khác `refresh()` thế nào?

```text
retry
→ chạy lại operation bị lỗi

refresh
→ yêu cầu refresh dataset/paging generation
```

### `RemoteMediator` dùng khi nào?

> Khi cần phối hợp paginated network data với local database cache. ([Android Developers][10])

### Tại sao dùng `cachedIn(viewModelScope)`?

> Để cache PagingData stream trong scope của ViewModel. ([Android Developers][5])

---

# 62. Mental Model cần nhớ

Đừng ghi nhớ Pagination đơn giản là:

```text
page++
```

Hãy nghĩ:

```text
              PAGINATION
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    Network     State       UX
       │          │          │
       ▼          ▼          ▼
    Retrofit   Loading    Spinner
       │       Success    Content
       ▼       Error      Retry
 PagingSource  Refresh    Footer
       │       Append
       ▼
     Pager
       │
       ▼
 PagingData
       │
       ▼
   ViewModel
       │
       ▼
      UI
```

---

# 63. Checklist hoàn thành

* [ ] Giải thích được Pagination bằng ngôn ngữ của mình.
* [ ] Phân biệt page-based, offset-based và cursor-based pagination.
* [ ] Biết dùng Retrofit `@Query` cho `page` và `limit`.
* [ ] Implement được `PagingSource`.
* [ ] Hiểu `LoadResult.Page`.
* [ ] Biết vai trò `prevKey`.
* [ ] Biết vai trò `nextKey`.
* [ ] Biết dùng `Pager`.
* [ ] Biết cấu hình `PagingConfig`.
* [ ] Biết expose `Flow<PagingData<T>>`.
* [ ] Biết dùng `cachedIn(viewModelScope)`.
* [ ] Biết `collectAsLazyPagingItems()`.
* [ ] Hiển thị được initial loading.
* [ ] Hiển thị được empty state.
* [ ] Hiển thị được append loading.
* [ ] Hiển thị được initial error.
* [ ] Hiển thị được append error.
* [ ] Có nút Retry.
* [ ] Không xóa content cũ khi append thất bại.
* [ ] Dừng request khi hết dữ liệu.
* [ ] Test được first page.
* [ ] Test được last page.
* [ ] Test được network error.
* [ ] Hiểu vai trò cơ bản của `RemoteMediator`.
* [ ] Có screenshot hoặc GIF demo cho portfolio.

---

# 64. Ghi chú Production

Trước khi đưa pagination vào production, nên kiểm tra:

```text
API page bắt đầu từ 0 hay 1?
        ↓
Page size có phù hợp không?
        ↓
Backend báo hết dữ liệu bằng cách nào?
        ↓
nextKey được tính đúng chưa?
        ↓
Request có bị duplicate không?
        ↓
Search/filter có tạo dataset mới đúng không?
        ↓
Initial error và append error có UI khác nhau không?
        ↓
Rotate/recreate UI có gây load lại không cần thiết không?
        ↓
Offline UX thế nào?
        ↓
Retry hoạt động chưa?
        ↓
Empty response có bị hiểu nhầm thành Error không?
        ↓
Có test page boundary chưa?
```

Nếu ứng dụng cần khả năng **offline-first**, nên cân nhắc bước tiếp theo:

```text
Retrofit
    +
Paging 3
    +
Room
    +
RemoteMediator
```

thay vì chỉ paging trực tiếp từ network. Android cung cấp riêng kiến trúc `RemoteMediator` cho việc phối hợp network và database cache. ([Android Developers][10])

---

## 65. Tóm tắt một câu

> **Pagination trong Android là quá trình tải dataset lớn từng phần; với Retrofit + Paging 3, `PagingSource` lấy dữ liệu, `Pager` tạo `PagingData`, ViewModel giữ stream và Compose dùng `LazyPagingItems` để hiển thị loading, content, error, retry và tự động tải thêm khi cần.** ([Android Developers][1])

[1]: https://developer.android.com/topic/libraries/architecture/paging/v3-overview?utm_source=chatgpt.com "Paging library overview | App architecture"
[2]: https://developer.android.com/topic/libraries/architecture/views/paging/v3-migration-views?utm_source=chatgpt.com "Migrate to Paging 3 (Views)"
[3]: https://developer.android.com/topic/libraries/architecture/paging/v3-paged-data?utm_source=chatgpt.com "Load and display paged data | App architecture"
[4]: https://developer.android.com/topic/libraries/architecture/views/paging/v3-transform-views?utm_source=chatgpt.com "Transform data streams (Views)"
[5]: https://developer.android.com/topic/libraries/architecture/paging/v3-transform?utm_source=chatgpt.com "Transform data streams | App architecture"
[6]: https://developer.android.com/topic/libraries/architecture/paging/v3-migration?utm_source=chatgpt.com "Migrate to Paging 3 | App architecture"
[7]: https://developer.android.com/reference/kotlin/androidx/paging/compose/LazyPagingItems?utm_source=chatgpt.com "LazyPagingItems | API reference"
[8]: https://developer.android.com/develop/ui/compose/lists?utm_source=chatgpt.com "Lazy lists and lazy grids | Jetpack Compose"
[9]: https://developer.android.com/topic/libraries/architecture/paging/load-state?utm_source=chatgpt.com "Manage and present loading states | App architecture"
[10]: https://developer.android.com/topic/libraries/architecture/paging/v3-network-db?utm_source=chatgpt.com "Page from network and database | App architecture"
[11]: https://developer.android.com/topic/architecture/ui-layer?utm_source=chatgpt.com "UI layer | App architecture"
[12]: https://developer.android.com/codelabs/android-paging-basics?utm_source=chatgpt.com "(Deprecated) Android Paging Basics"
[13]: https://developer.android.com/topic/libraries/architecture/paging/test?utm_source=chatgpt.com "Test your Paging implementation | App architecture"
