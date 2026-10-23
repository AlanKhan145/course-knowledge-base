# Bài 04 — Lesson 2.3: Random Animal Stampede

Pathway: Junior Programmer Mission: Basic Gameplay Bài học: 04 — Random Animal Stampede Loại: Tutorial — Hướng dẫn thực hành Phiên bản: Unity 6.3 Chủ đề: Prefab, Instantiate, Random Spawn và quản lý GameObject

Tham khảo: [Unity Learn — Basic Gameplay](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay?version=6.3\&utm_source=chatgpt.com)

## 1. Tổng quan bài học

Trong quá trình phát triển trò chơi, nhiều đối tượng cần được tạo ra tự động thay vì đặt thủ công trong Scene. Ví dụ, trong một trò chơi cho động vật ăn, các con vật có thể xuất hiện liên tục ở những vị trí ngẫu nhiên và di chuyển về phía người chơi.

Nếu tất cả động vật xuất hiện tại cùng một vị trí và theo cùng một thứ tự, trò chơi sẽ trở nên dễ đoán. Để tạo sự đa dạng, Unity cung cấp những công cụ như `Prefab`, `Instantiate()` và `Random.Range()`.

Bài học Random Animal Stampede tập trung vào việc xây dựng hệ thống sinh động vật ngẫu nhiên trong thời gian chạy.

### Kết quả mong đợi

Khi hoàn thành, Scene có thể:

- Sinh ra nhiều loại động vật từ các Prefab.
- Lựa chọn ngẫu nhiên loại động vật xuất hiện.
- Thay đổi ngẫu nhiên vị trí xuất hiện.
- Tự động sinh động vật theo khoảng thời gian đã cấu hình.
- Theo dõi và kiểm tra các GameObject được tạo ra trong Play Mode.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

1. Giải thích sự khác nhau giữa Prefab và GameObject Instance.
2. Sử dụng `Instantiate()` để tạo GameObject trong thời gian chạy.
3. Áp dụng `Random.Range()` để chọn đối tượng và vị trí ngẫu nhiên.
4. Triển khai cơ chế sinh động vật định kỳ bằng `InvokeRepeating()`.
5. Kiểm tra và sửa lỗi liên quan đến tham chiếu Prefab, tọa độ sinh và số lượng GameObject.

## 3. Kiến thức nền tảng

### 3.1. Prefab là gì?

`Prefab` là một mẫu GameObject có thể tái sử dụng nhiều lần.

Một Prefab lưu cấu trúc và những thuộc tính đã cấu hình của GameObject, bao gồm Transform, Component, Collider, Renderer và các script được gắn vào nó.

Ví dụ, một `Cow` Prefab có thể chứa:

| Thành phần       | Vai trò                                      |
| ---------------- | -------------------------------------------- |
| `Transform`      | Xác định vị trí, góc xoay và kích thước      |
| `Mesh Renderer`  | Hiển thị hình ảnh 3D của động vật            |
| `Collider`       | Xác định vùng va chạm                        |
| `Rigidbody`      | Hỗ trợ mô phỏng vật lý nếu cần               |
| `AnimalMovement` | Điều khiển chuyển động nếu đã được lập trình |

Một Prefab có thể được sử dụng để tạo hàng trăm GameObject mà không cần cấu hình lại từng đối tượng.

### 3.2. Prefab và Instance

| Tiêu chí             | Prefab Asset  | Prefab Instance                 |
| -------------------- | ------------- | ------------------------------- |
| Vị trí               | Project       | Scene hoặc runtime              |
| Vai trò              | Mẫu đối tượng | Bản thể hiện của mẫu            |
| Khả năng tái sử dụng | Có            | Có thể tạo nhiều Instance       |
| Chỉnh sửa            | Thay đổi mẫu  | Có thể ghi đè một số thuộc tính |
| Tồn tại khi chạy     | Là Asset      | Có thể được sinh và hủy         |

Ví dụ, một Prefab `Cow` có thể tạo ra ba con bò tại ba vị trí khác nhau. Chúng sử dụng chung mẫu nhưng mỗi con có Transform riêng.

### 3.3. Instantiate — Tạo GameObject

Unity cung cấp phương thức `Instantiate()` để tạo bản sao của một đối tượng.

Cú pháp:

```
Instantiate(prefab, position, rotation);
```

Trong đó:

- `prefab`: Đối tượng cần tạo.
- `position`: Vị trí xuất hiện trong không gian.
- `rotation`: Góc xoay của đối tượng.

Ví dụ:

```
Instantiate(
    animalPrefab,
    new Vector3(0f, 0f, 15f),
    Quaternion.identity
);
```

Đoạn mã trên tạo một Instance của `animalPrefab` tại tọa độ `(0, 0, 15)` với góc xoay mặc định.

Nếu chỉ gọi `Instantiate()` một lần, một đối tượng mới sẽ được sinh ra. Để sinh nhiều đối tượng, cần gọi phương thức nhiều lần hoặc thiết lập một cơ chế tự động.

### 3.4. Random.Range — Sinh giá trị ngẫu nhiên

`Random.Range()` được sử dụng để lấy một giá trị ngẫu nhiên trong khoảng xác định.

Ví dụ:

```
float randomX = Random.Range(-10f, 10f);
```

Biến `randomX` nhận một giá trị ngẫu nhiên trong khoảng từ `-10` đến `10`.

Đối với số nguyên:

```
int randomIndex = Random.Range(0, 3);
```

Giá trị nhận được có thể là `0`, `1` hoặc `2`.

Điểm cần chú ý:

- Với kiểu `int`, giới hạn trên không được tính vào kết quả.
- Với kiểu `float`, giới hạn trên có thể được tính vào kết quả.

Điều này đặc biệt quan trọng khi lựa chọn phần tử trong mảng.

### 3.5. Mảng Prefab

Khi trò chơi có nhiều loại động vật, nên sử dụng mảng để quản lý các Prefab.

```
[SerializeField]
private GameObject[] animalPrefabs;
```

Ví dụ mảng chứa ba Prefab:

| Index | Prefab  |
| ----- | ------- |
| 0     | Cow     |
| 1     | Horse   |
| 2     | Chicken |

Có thể chọn ngẫu nhiên một phần tử bằng:

```
int index = Random.Range(0, animalPrefabs.Length);
GameObject selectedAnimal = animalPrefabs[index];
```

Cách viết này hoạt động với số lượng Prefab khác nhau mà không cần sửa giá trị giới hạn trên.

## 4. Cơ chế hoạt động của Random Animal Spawn

Để động vật xuất hiện ngẫu nhiên, hệ thống cần thực hiện ba công việc chính:

1. Chọn một Prefab ngẫu nhiên.
2. Xác định vị trí xuất hiện ngẫu nhiên.
3. Tạo Instance của Prefab tại vị trí đó.

\#chatgpt-mermaid-\_r_qk\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_qk\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_qk\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_qk\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_qk\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_qk\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_qk\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_qk\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_qk\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_qk\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qk\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qk\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_qk\_ p{margin:0;}#chatgpt-mermaid-\_r_qk\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_qk\_ .label text,#chatgpt-mermaid-\_r_qk\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ .node rect,#chatgpt-mermaid-\_r_qk\_ .node circle,#chatgpt-mermaid-\_r_qk\_ .node ellipse,#chatgpt-mermaid-\_r_qk\_ .node polygon,#chatgpt-mermaid-\_r_qk\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .rough-node .label text,#chatgpt-mermaid-\_r_qk\_ .node .label text,#chatgpt-mermaid-\_r_qk\_ .image-shape .label,#chatgpt-mermaid-\_r_qk\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_qk\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .rough-node .label,#chatgpt-mermaid-\_r_qk\_ .node .label,#chatgpt-mermaid-\_r_qk\_ .image-shape .label,#chatgpt-mermaid-\_r_qk\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_qk\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_qk\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qk\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qk\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_qk\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_qk\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qk\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qk\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_qk\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_qk\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_qk\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_qk\_ .icon-shape,#chatgpt-mermaid-\_r_qk\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_qk\_ .icon-shape p,#chatgpt-mermaid-\_r_qk\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_qk\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_qk\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_qk\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_qk\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_qk\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_qk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_qk\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_qk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_qk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qk\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_qk\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_qk\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_qk\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_qk\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_qk\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_qk\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .node rect,#chatgpt-mermaid-\_r_qk\_ .node circle,#chatgpt-mermaid-\_r_qk\_ .node ellipse,#chatgpt-mermaid-\_r_qk\_ .node polygon,#chatgpt-mermaid-\_r_qk\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_qk\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_qk\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_qk\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_qk\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_qk\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Bắt đầu Play ModeKhởi tạo SpawnManagerĐến thời điểm SpawnChọn Prefab ngẫu nhiênTạo tọa độ X ngẫu nhiênXác định Spawn PositionInstantiate AnimalAnimal xuất hiện trong SceneChờ lần Spawn tiếp theo

Chu trình tiếp tục được thực hiện trong khi cơ chế sinh đối tượng còn hoạt động.

Việc sinh động vật và điều khiển chuyển động là hai trách nhiệm khác nhau. `SpawnManager` tạo đối tượng; Component chuyển động trên Prefab sẽ quyết định đối tượng di chuyển như thế nào.

## 5. Thực hành: Xây dựng hệ thống sinh động vật

### 5.1. Chuẩn bị Scene

Tạo hoặc mở một Scene trong dự án Unity 3D.

Chuẩn bị ít nhất ba mẫu động vật, chẳng hạn:

- Cow
- Horse
- Chicken

Mỗi đối tượng cần được cấu hình Component phù hợp với mục đích thực hành.

Để tạo Prefab:

1. Chọn GameObject động vật trong Hierarchy.
2. Kiểm tra Transform và các Component trong Inspector.
3. Kéo GameObject từ Hierarchy vào thư mục `Assets/Prefabs` trong Project.
4. Xác nhận Unity đã tạo Prefab Asset.
5. Lặp lại thao tác với các động vật còn lại.

Có thể xóa các GameObject động vật được đặt thủ công trong Scene sau khi đã tạo Prefab, nếu không còn cần chúng.

### 5.2. Tạo SpawnManager

Trong Hierarchy:

1. Nhấp chuột phải.
2. Chọn Create Empty.
3. Đổi tên thành `SpawnManager`.
4. Tạo C# Script tên `RandomAnimalSpawner`.
5. Gắn script vào GameObject `SpawnManager`.

`SpawnManager` đóng vai trò quản lý toàn bộ quá trình tạo động vật.

### 5.3. Viết script RandomAnimalSpawner

```
using UnityEngine;

public class RandomAnimalSpawner : MonoBehaviour
{
    [Header("Animal Prefabs")]
    [SerializeField]
    private GameObject[] animalPrefabs;

    [Header("Spawn Position")]
    [SerializeField]
    private float spawnRangeX = 10f;

    [SerializeField]
    private float spawnPosY = 0f;

    [SerializeField]
    private float spawnPosZ = 20f;

    [Header("Spawn Timing")]
    [SerializeField]
    private float firstSpawnDelay = 2f;

    [SerializeField]
    private float spawnInterval = 2f;

    private void Start()
    {
        if (animalPrefabs == null || animalPrefabs.Length == 0)
        {
            Debug.LogWarning("Chưa gán Animal Prefabs.");
            return;
        }

        if (spawnInterval <= 0f)
        {
            Debug.LogWarning("Spawn Interval phải lớn hơn 0.");
            return;
        }

        InvokeRepeating(
            nameof(SpawnRandomAnimal),
            firstSpawnDelay,
            spawnInterval
        );
    }

    private void SpawnRandomAnimal()
    {
        int animalIndex = Random.Range(
            0,
            animalPrefabs.Length
        );

        GameObject selectedAnimal = animalPrefabs[animalIndex];

        if (selectedAnimal == null)
        {
            Debug.LogWarning("Một phần tử Prefab chưa được gán.");
            return;
        }

        float randomX = Random.Range(
            -spawnRangeX,
            spawnRangeX
        );

        Vector3 spawnPosition = new Vector3(
            randomX,
            spawnPosY,
            spawnPosZ
        );

        Instantiate(
            selectedAnimal,
            spawnPosition,
            selectedAnimal.transform.rotation
        );
    }
}
```

Đây là ví dụ tự biên soạn cho mục tiêu thực hành. Các giá trị tọa độ và thời gian chỉ là cấu hình mẫu, cần điều chỉnh cho phù hợp với Scene.

### 5.4. Giải thích các thành phần quan trọng

A. Lưu danh sách Prefab

```
[SerializeField]
private GameObject[] animalPrefabs;
```

`[SerializeField]` cho phép cấu hình mảng trong Inspector dù biến được khai báo `private`.

Khi chạy trò chơi, script sẽ sử dụng những Prefab đã được gán.

B. Chọn loại động vật

```
int animalIndex = Random.Range(
    0,
    animalPrefabs.Length
);
```

Giá trị được sinh sẽ nằm trong phạm vi chỉ số hợp lệ của mảng, miễn là mảng có phần tử.

Nếu mảng chứa ba Prefab, kết quả có thể là `0`, `1` hoặc `2`.

C. Xác định tọa độ ngẫu nhiên

```
float randomX = Random.Range(
    -spawnRangeX,
    spawnRangeX
);
```

Động vật có thể xuất hiện tại những vị trí khác nhau trên trục X.

Minh họa vùng sinh động vật trên trục X

Các biểu tượng chỉ minh họa các vị trí có thể sinh ra, không phải tọa độ cố định.

D. Sinh GameObject

```
Instantiate(
    selectedAnimal,
    spawnPosition,
    selectedAnimal.transform.rotation
);
```

Unity tạo một Instance mới tại vị trí đã xác định.

Ví dụ sử dụng góc xoay của Prefab. Nếu mô hình hướng sai, cần kiểm tra hướng của Prefab hoặc thiết lập góc xoay riêng.

E. Sinh định kỳ

```
InvokeRepeating(
    nameof(SpawnRandomAnimal),
    firstSpawnDelay,
    spawnInterval
);
```

`InvokeRepeating()` gọi một phương thức sau thời gian chờ ban đầu, sau đó tiếp tục gọi theo khoảng thời gian được chỉ định.

Ví dụ, với `firstSpawnDelay = 2` và `spawnInterval = 2`, các lần sinh dự kiến diễn ra tại khoảng giây thứ 2, 4, 6, 8...

Khác với việc gọi `Instantiate()` trực tiếp trong `Update()`, cách này giúp kiểm soát tần suất sinh động vật.

### 5.5. Cấu hình trong Inspector

Chọn GameObject `SpawnManager`.

Trong Component `RandomAnimalSpawner`, cấu hình:

| Thuộc tính        | Giá trị ví dụ | Ý nghĩa                              |
| ----------------- | ------------- | ------------------------------------ |
| Animal Prefabs    | 3 phần tử     | Danh sách mẫu động vật               |
| Spawn Range X     | 10            | Giới hạn tọa độ X                    |
| Spawn Pos Y       | 0             | Độ cao xuất hiện                     |
| Spawn Pos Z       | 20            | Tọa độ Z cố định                     |
| First Spawn Delay | 2             | Thời gian chờ lần đầu (giây)         |
| Spawn Interval    | 2             | Khoảng cách giữa các lần sinh (giây) |

Kéo lần lượt Prefab `Cow`, `Horse` và `Chicken` từ Project vào các phần tử của mảng.

Kiểm tra tất cả các phần tử đã được gán trước khi chuyển sang Play Mode.

## 6. Kiểm thử và quan sát kết quả

Nhấn nút Play trong Unity Editor.

Quan sát Scene view, Game view và Hierarchy.

### 6.1. Kiểm tra loại động vật

Khi trò chơi chạy, nhiều loại động vật có thể xuất hiện theo thứ tự khác nhau.

Với ba Prefab, hệ thống lựa chọn ngẫu nhiên một phần tử ở mỗi lần sinh. Không có cơ chế bảo đảm cả ba loại đều xuất hiện trong ba lần sinh liên tiếp.

### 6.2. Kiểm tra vị trí

Chọn một GameObject vừa được tạo trong Hierarchy.

Quan sát Transform trong Inspector và đối chiếu với giới hạn đã cấu hình.

Ví dụ, khi `spawnRangeX = 10`, tọa độ X của động vật phải nằm trong khoảng `-10` đến `10`.

### 6.3. Kiểm tra số lượng Instance

Quan sát Hierarchy trong lúc Play Mode.

Nếu hệ thống hoạt động và không có cơ chế xóa đối tượng, số lượng Instance sẽ tăng sau mỗi lần sinh.

Để kiểm soát tài nguyên, cần bổ sung quy tắc dọn dẹp cho những đối tượng không còn cần thiết.

### 6.4. Kiểm tra chuyển động

Nếu Prefab đã được gắn script di chuyển, động vật có thể bắt đầu chuyển động ngay sau khi được sinh ra.

Nếu Prefab chưa có hành vi di chuyển, GameObject sẽ chỉ xuất hiện tại vị trí được tạo.

Điều này không có nghĩa là `Instantiate()` bị lỗi.

## 7. Quản lý vòng đời GameObject

### 7.1. Destroy — Hủy đối tượng

Khi động vật đi ra khỏi khu vực chơi, GameObject có thể không còn cần thiết.

Unity hỗ trợ phương thức:

```
Destroy(gameObject);
```

Phương thức trên yêu cầu hủy GameObject đang chứa script.

Ví dụ, để hủy động vật khi nó đi xuống dưới một giới hạn Z:

```
using UnityEngine;

public class AnimalCleanup : MonoBehaviour
{
    [SerializeField]
    private float minZ = -10f;

    private void Update()
    {
        if (transform.position.z < minZ)
        {
            Destroy(gameObject);
        }
    }
}
```

Gắn script này vào Prefab động vật nếu trò chơi có quy tắc di chuyển phù hợp.

Giá trị `minZ` cần được điều chỉnh theo hướng di chuyển thực tế.

### 7.2. Lưu ý về hiệu năng

Việc tạo và hủy GameObject liên tục có thể gây chi phí xử lý và cấp phát bộ nhớ.

Đối với một thử nghiệm nhỏ, `Instantiate()` và `Destroy()` thường đủ để thực hành.

Với trò chơi sinh số lượng lớn đối tượng thường xuyên, có thể cân nhắc Object Pooling để tái sử dụng GameObject thay vì liên tục tạo mới.

## 8. Lỗi thường gặp và cách khắc phục

| Hiện tượng                        | Nguyên nhân có thể                        | Cách kiểm tra                                         |
| --------------------------------- | ----------------------------------------- | ----------------------------------------------------- |
| Không có động vật xuất hiện       | Chưa gán Prefab                           | Kiểm tra mảng trong Inspector                         |
| `IndexOutOfRangeException`        | Truy cập chỉ số ngoài mảng                | Kiểm tra `Random.Range()` và độ dài mảng              |
| Động vật xuất hiện ngoài màn hình | Vị trí Spawn chưa phù hợp                 | Kiểm tra Transform và Camera                          |
| Động vật hướng sai                | Rotation không phù hợp                    | Kiểm tra hướng mô hình và Prefab                      |
| Quá nhiều GameObject              | Sinh liên tục nhưng không hủy             | Kiểm tra Spawn Interval và Cleanup                    |
| Động vật không di chuyển          | Prefab chưa có hành vi di chuyển          | Kiểm tra Component và script                          |
| Không sinh theo thời gian dự kiến | Sai tham số hoặc Component bị vô hiệu hóa | Kiểm tra `InvokeRepeating()` và trạng thái GameObject |

### Quy trình Debug

\#chatgpt-mermaid-\_r_sd\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_sd\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_sd\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_sd\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_sd\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_sd\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_sd\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_sd\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_sd\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_sd\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_sd\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_sd\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_sd\_ p{margin:0;}#chatgpt-mermaid-\_r_sd\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_sd\_ .label text,#chatgpt-mermaid-\_r_sd\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ .node rect,#chatgpt-mermaid-\_r_sd\_ .node circle,#chatgpt-mermaid-\_r_sd\_ .node ellipse,#chatgpt-mermaid-\_r_sd\_ .node polygon,#chatgpt-mermaid-\_r_sd\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .rough-node .label text,#chatgpt-mermaid-\_r_sd\_ .node .label text,#chatgpt-mermaid-\_r_sd\_ .image-shape .label,#chatgpt-mermaid-\_r_sd\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_sd\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .rough-node .label,#chatgpt-mermaid-\_r_sd\_ .node .label,#chatgpt-mermaid-\_r_sd\_ .image-shape .label,#chatgpt-mermaid-\_r_sd\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_sd\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_sd\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_sd\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_sd\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_sd\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_sd\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_sd\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_sd\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_sd\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_sd\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_sd\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_sd\_ .icon-shape,#chatgpt-mermaid-\_r_sd\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_sd\_ .icon-shape p,#chatgpt-mermaid-\_r_sd\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_sd\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_sd\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_sd\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_sd\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_sd\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_sd\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_sd\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_sd\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_sd\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_sd\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_sd\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_sd\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_sd\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_sd\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_sd\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_sd\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .node rect,#chatgpt-mermaid-\_r_sd\_ .node circle,#chatgpt-mermaid-\_r_sd\_ .node ellipse,#chatgpt-mermaid-\_r_sd\_ .node polygon,#chatgpt-mermaid-\_r_sd\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_sd\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_sd\_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_sd\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_sd\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_sd\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Phát hiện lỗiTái hiện trong Play ModeKiểm tra ConsoleKiểm tra Inspector và HierarchyXác định nguyên nhân giả địnhChỉnh sửa một vấn đềChạy thử lạiĐã hoạt động đúng?Ghi nhận kết quảChưaRồi

Khi sửa lỗi, nên thay đổi từng yếu tố một để xác định chính xác nguyên nhân.

Ngoài ra, những thay đổi thực hiện trong Inspector khi đang chạy Play Mode thường không được lưu lại sau khi thoát Play Mode.

## 9. Bài tập thực hành và củng cố

### Bài tập A — Random Animal Spawner

Yêu cầu: Tạo hệ thống sinh ngẫu nhiên tối thiểu ba loại động vật.

Điều kiện hoàn thành:

- Có GameObject `SpawnManager`.
- Danh sách Prefab được gán trong Inspector.
- Loại động vật được chọn ngẫu nhiên.
- Vị trí xuất hiện thay đổi theo trục X.
- Hệ thống sinh đối tượng tự động trong Play Mode.

### Bài tập B — Điều chỉnh độ khó

Thay đổi giá trị `spawnInterval` và quan sát tần suất xuất hiện.

Thử nghiệm với các giá trị:

| Spawn Interval | Dự đoán                          |
| -------------- | -------------------------------- |
| 3 giây         | Sinh động vật thưa hơn           |
| 2 giây         | Tần suất trung bình              |
| 1 giây         | Sinh động vật thường xuyên hơn   |
| 0.5 giây       | Số lượng Instance tăng nhanh hơn |

Ghi lại kết quả và giải thích ảnh hưởng của tần suất sinh đối tượng đến trò chơi.

### Bài tập C — Mở rộng

Tạo một Scene nhỏ kết hợp hệ thống sinh động vật với cơ chế phóng thức ăn.

Mục tiêu là để người chơi có thể quan sát động vật xuất hiện và tương tác bằng những đối tượng thức ăn đã được tạo trong Scene.

Ở mức mở rộng, có thể bổ sung Collider dạng trigger để phát hiện khi thức ăn chạm động vật, sau đó cập nhật điểm hoặc xử lý đối tượng theo quy tắc trò chơi.

### Checklist hoàn thành

Tiến độ thực hành

0/7

Tạo ít nhất ba Prefab động vật.

Tạo và cấu hình SpawnManager.

Sử dụng Instantiate() để sinh GameObject.

Sử dụng Random.Range() để chọn Prefab và vị trí.

Sử dụng InvokeRepeating() để sinh đối tượng định kỳ.

Kiểm tra Instance trong Hierarchy và Transform trong Inspector.

Ghi lại kết quả thử nghiệm và một lỗi đã khắc phục.

## 10. Tổng kết kiến thức

Các thành phần quan trọng trong hệ thống Random Animal Stampede:

| Thành phần          | Chức năng                            |
| ------------------- | ------------------------------------ |
| `Prefab`            | Lưu mẫu GameObject                   |
| `GameObject[]`      | Quản lý danh sách động vật           |
| `Random.Range()`    | Sinh giá trị ngẫu nhiên              |
| `Vector3`           | Biểu diễn vị trí trong không gian 3D |
| `Instantiate()`     | Tạo Instance mới                     |
| `InvokeRepeating()` | Gọi phương thức định kỳ              |
| `Destroy()`         | Hủy GameObject khi không cần thiết   |

Nguyên lý cốt lõi: Hệ thống sinh đối tượng ngẫu nhiên kết hợp một tập hợp Prefab, thuật toán chọn ngẫu nhiên, vị trí xuất hiện và cơ chế quản lý thời gian. Việc tách quá trình Spawn khỏi hành vi di chuyển giúp cấu trúc trò chơi rõ ràng và dễ mở rộng.

## 11. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

5 câu hỏi · Chọn một đáp án đúng nhất

0/5

Câu 1. Trong một trò chơi cần tạo nhiều con vật có cùng cấu trúc Component, giải pháp nào phù hợp nhất?

A. Tạo và cấu hình từng GameObject từ đầu

B. Sử dụng Prefab rồi tạo nhiều Instance

C. Tạo nhiều Scene khác nhau

D. Gắn toàn bộ động vật vào Camera

Câu 2. Với mảng gồm 3 Prefab, đoạn mã Random.Range(0, animalPrefabs.Length) có thể tạo ra các chỉ số nào?

A. 0, 1, 2 và 3

B. Chỉ 0 và 1

C. 1, 2 và 3

D. 0, 1 và 2

Câu 3. Tại sao sử dụng InvokeRepeating() trong hệ thống sinh động vật?

A. Để gọi phương thức Spawn theo khoảng thời gian

B. Để tự động thêm Collider

C. Để tăng tốc độ Camera

D. Để chuyển Prefab thành Scene

Câu 4. Động vật xuất hiện nhưng không di chuyển. Nguyên nhân nào cần kiểm tra đầu tiên?

A. Random.Range() có trả về số âm không

B. Số lượng Scene trong dự án

C. Prefab có Component hoặc script chuyển động phù hợp không

D. Tên của GameObject SpawnManager

Câu 5. Khi số lượng động vật trong Scene tăng liên tục và không giảm, giải pháp nào phù hợp để quản lý vòng đời đối tượng?

A. Tăng Spawn Range X

B. Thêm điều kiện Destroy khi đối tượng không còn cần thiết

C. Gọi Instantiate nhiều lần hơn

D. Xóa Camera khỏi Scene

Kiểm tra đáp án

Kết quả cần đạt: Có thể tự xây dựng một hệ thống sinh động vật ngẫu nhiên, giải thích từng bước từ chọn Prefab đến tạo Instance, và xác định được nguyên nhân của những lỗi cơ bản khi chạy thử trong Unity Editor.