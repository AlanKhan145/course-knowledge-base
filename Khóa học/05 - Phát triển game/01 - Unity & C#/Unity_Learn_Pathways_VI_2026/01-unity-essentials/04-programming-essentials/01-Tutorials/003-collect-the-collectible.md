# Bài 03 — Collect the Collectible: Lập trình thu thập vật phẩm trong Unity

Unity Essentials · Programming Essentials · Tutorial · Unity 6.3

## 1. Tổng quan bài học

Trong nhiều trò chơi, người chơi cần tương tác với các vật phẩm xuất hiện trong môi trường như đồng xu, chìa khóa, viên năng lượng hoặc tài nguyên.

Khi nhân vật tiếp xúc với vật phẩm, trò chơi cần nhận biết sự kiện, thực hiện hành động tương ứng và cập nhật trạng thái.

Ví dụ, trong một trò chơi điều khiển robot hút bụi, robot có thể di chuyển quanh căn phòng để thu thập các mảnh rác.

[Collect the collectible - Unity Learn](https://images.openai.com/static-rsc-4/-teC5iQg1_fQYgQSppIBvsp5aEmwtuHmffgIlApH9pjvz3fHp_FC7vIDDVegsubFU1QN4EeqJS7naVj34lymo3CuDsHO6kMjKlZ1n7lkDVSPpLZl4bz0PhDo6Ji4U0acIiI7-R2IXiv-DiWMIn3ysCx8pe_MqsGeOt-LazBx-6E?purpose=inline)

[learn.unity.com](https://learn.unity.com/pathway/unity-essentials/unit/programming-essentials/tutorial/collect-the-collectible?utm_source=chatgpt.com)

Minh họa tình huống: robot di chuyển trong căn phòng và thu thập vật phẩm.

Bài học tập trung vào ba kỹ năng quan trọng:

- Prefab: Tạo mẫu vật phẩm có thể tái sử dụng.
- Trigger Detection: Phát hiện khi nhân vật đi vào vùng tương tác.
- Object Lifecycle: Tạo, quản lý và xóa đối tượng trong quá trình chạy trò chơi.

Sau khi hoàn thành, người học có thể xây dựng một hệ thống thu thập vật phẩm đơn giản bằng C# trong Unity.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

1. Giải thích vai trò của `Prefab`, `GameObject` và `Collider` trong hệ thống thu thập vật phẩm.
2. Phân biệt Collider thông thường với Collider sử dụng `Is Trigger`.
3. Cấu hình sự kiện `OnTriggerEnter()` để phát hiện tương tác.
4. Sử dụng `Destroy()` để xóa vật phẩm sau khi được thu thập.
5. Sử dụng `Instantiate()` để tạo thêm vật phẩm trong thời gian chạy.
6. Kiểm thử và khắc phục các lỗi tương tác thường gặp.

## 3. Kiến thức cốt lõi

### 3.1. GameObject, Component và Prefab

Trong Unity, các đối tượng trong trò chơi được biểu diễn bằng `GameObject`.

Một GameObject có thể được bổ sung nhiều Component để thực hiện những chức năng khác nhau.

Ví dụ, một đồng xu có thể bao gồm:

| Thành phần       | Chức năng                          |
| ---------------- | ---------------------------------- |
| `GameObject`     | Đại diện cho đồng xu               |
| `Transform`      | Xác định vị trí, góc xoay và tỷ lệ |
| `Mesh Renderer`  | Hiển thị hình ảnh 3D               |
| `Collider`       | Xác định vùng tương tác            |
| `Collectible.cs` | Xử lý hành vi thu thập             |

Khi cần tạo hàng chục đồng xu giống nhau, việc cấu hình thủ công từng đối tượng sẽ mất nhiều thời gian.

Prefab giải quyết vấn đề này bằng cách lưu một GameObject đã cấu hình thành mẫu tái sử dụng.

Collectible Prefab

Mẫu GameObject trong Project

Instance 1

Instance 2

Instance 3

Một Prefab có thể được sử dụng để tạo nhiều instance trong Scene.

Mỗi instance có thể sử dụng những thuộc tính chung của Prefab hoặc được tùy chỉnh riêng trong Inspector bằng cách ghi đè thuộc tính (Prefab Override).

### 3.2. Collider và Trigger

`Collider` xác định hình dạng vùng va chạm hoặc tương tác của một đối tượng trong hệ thống vật lý Unity.

Khi hai đối tượng có Collider tiếp xúc, Unity có thể xử lý va chạm vật lý hoặc phát ra sự kiện tương tác tùy theo cấu hình.

| Collider thông thường                   | Trigger Collider                     |
| --------------------------------------- | ------------------------------------ |
| Có thể tham gia phản ứng va chạm vật lý | Không tạo phản ứng cản vật lý        |
| Phù hợp tường, sàn, chướng ngại vật     | Phù hợp vật phẩm, vùng kích hoạt     |
| Thường xử lý bằng `OnCollisionEnter()`  | Thường xử lý bằng `OnTriggerEnter()` |
| `Is Trigger` tắt                        | `Is Trigger` bật                     |

Collider thường

Có thể ngăn nhân vật đi xuyên qua

Trigger Collider

Phát hiện nhân vật đi vào vùng

Để sự kiện Trigger 3D hoạt động, hai đối tượng cần có Collider, ít nhất một Collider có `Is Trigger` được bật và ít nhất một phía có thành phần vật lý thích hợp như `Rigidbody`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.unity3d.com\&sz=32)

docs.unity3d.com

+1



### 3.3. Sự kiện OnTriggerEnter()

Unity cung cấp phương thức:

```
private void OnTriggerEnter(Collider other)
{
    // Xử lý khi một Collider đi vào Trigger
}
```

Trong đó:

- `OnTriggerEnter()` được Unity gọi khi hệ thống vật lý phát hiện một Collider đi vào Trigger hợp lệ.
- `Collider other` tham chiếu đến Collider đã đi vào vùng Trigger.
- Bên trong phương thức, lập trình viên có thể kiểm tra đối tượng và kích hoạt hành động.

Ví dụ:

```
private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        Debug.Log("Player đã chạm vào vật phẩm!");
    }
}
```

`CompareTag("Player")` kiểm tra đối tượng có gắn Tag `Player` hay không. Điều này giúp tránh kích hoạt thu thập khi một đối tượng không liên quan đi vào vùng tương tác.

### 3.4. Instantiate và Destroy

Unity cung cấp hai phương thức quan trọng để quản lý vòng đời đối tượng.

`Instantiate()` — Tạo bản sao

```
Instantiate(prefab, position, rotation);
```

Phương thức này tạo một đối tượng mới dựa trên đối tượng mẫu.

`Destroy()` — Xóa đối tượng

```
Destroy(gameObject);
```

Phương thức yêu cầu Unity hủy GameObject hiện tại. Việc hủy thực tế được xử lý theo vòng đời cập nhật của Unity, không nhất thiết diễn ra ngay tại dòng lệnh.

| Phương thức        | Ứng dụng                                                |
| ------------------ | ------------------------------------------------------- |
| `Instantiate()`    | Sinh đồng xu, kẻ địch, hiệu ứng                         |
| `Destroy()`        | Xóa vật phẩm đã nhặt, loại bỏ đối tượng không cần thiết |
| `SetActive(false)` | Tạm thời vô hiệu hóa đối tượng mà không hủy             |

Trong những trò chơi tạo và xóa lượng lớn đối tượng liên tục, có thể cân nhắc Object Pooling nhằm tái sử dụng GameObject để giảm chi phí tạo và hủy.

## 4. Cơ chế thu thập vật phẩm

Một hệ thống thu thập cơ bản hoạt động như sau:

Sơ đồ luồng xử lý sự kiện thu thập vật phẩm

Khi nhân vật đi vào vùng Trigger, chương trình kiểm tra Collider có thuộc đối tượng được phép thu thập hay không.

Nếu điều kiện hợp lệ, chương trình cập nhật trạng thái thu thập và xóa vật phẩm khỏi Scene. Nếu không hợp lệ, vật phẩm tiếp tục tồn tại.

## 5. Thực hành: Tạo hệ thống thu thập vật phẩm

### 5.1. Chuẩn bị Scene

Tạo một Scene 3D đơn giản trong Unity 6.3.

Các đối tượng cần chuẩn bị:

| GameObject          | Component cần thiết                                           |
| ------------------- | ------------------------------------------------------------- |
| `Ground`            | Transform, Mesh Renderer, Box Collider                        |
| `Player`            | Transform, Mesh Renderer, Collider, Rigidbody                 |
| `Collectible`       | Transform, Mesh Renderer, Sphere Collider, Collectible script |
| `Spawner` (mở rộng) | Transform, SpawnOne script                                    |

Các bước thiết lập:

1. Tạo Plane và đổi tên thành `Ground`.
2. Tạo Capsule hoặc Cube làm nhân vật `Player`.
3. Thêm `Rigidbody` vào Player, bật `Is Kinematic`, tắt `Use Gravity` cho ví dụ điều khiển đơn giản.
4. Giữ Collider của Player ở trạng thái không phải Trigger.
5. Đặt nhân vật và vật phẩm nằm phía trên mặt sàn.

Nếu sử dụng một nhân vật đã có hệ thống điều khiển, có thể giữ hệ thống chuyển động hiện tại và chỉ kiểm tra cấu hình Collider/Rigidbody.

### 5.2. Tạo vật phẩm Collectible

Trong Hierarchy, tạo một GameObject:

`GameObject → 3D Object → Sphere`

Đổi tên thành `Collectible`.

Cấu hình:

| Thuộc tính      | Giá trị ví dụ     |
| --------------- | ----------------- |
| Position        | `(2, 0.5, 0)`     |
| Scale           | `(0.5, 0.5, 0.5)` |
| Sphere Collider | Enabled           |
| Is Trigger      | Bật               |

Thay đổi Material để vật phẩm dễ phân biệt với môi trường.

Sau đó kéo `Collectible` từ Hierarchy vào thư mục `Assets/Prefabs` trong Project để tạo Prefab.

Kéo Prefab trở lại Scene hai hoặc nhiều lần để tạo các instance.

Thử thay đổi `Scale` hoặc Material trên một instance, quan sát thuộc tính được ghi đè so với Prefab gốc.

### 5.3. Tạo script PlayerCollector.cs

Script này quản lý số lượng vật phẩm người chơi đã thu thập.

Tạo file `PlayerCollector.cs`:

```
using UnityEngine;

public class PlayerCollector : MonoBehaviour
{
    public int CollectedCount { get; private set; }

    public void Collect()
    {
        CollectedCount++;

        Debug.Log(
            "Collected: " + CollectedCount
        );
    }
}
```

Giải thích:

`CollectedCount` lưu tổng số vật phẩm đã thu thập. Thuộc tính có thể được đọc từ bên ngoài nhưng chỉ được thay đổi bên trong lớp.

`Collect()` là phương thức tăng số lượng vật phẩm thêm một đơn vị.

`Debug.Log()` hiển thị kết quả trong Console để thuận tiện kiểm tra.

Gắn script `PlayerCollector` vào GameObject `Player`.

### 5.4. Tạo script Collectible.cs

Script này phát hiện khi người chơi đi vào vùng Trigger.

```
using UnityEngine;

public class Collectible : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        PlayerCollector player =
            other.GetComponentInParent<PlayerCollector>();

        if (player == null)
        {
            return;
        }

        player.Collect();

        Destroy(gameObject);
    }
}
```

Giải thích từng thành phần

| Mã lệnh                                   | Chức năng                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| `OnTriggerEnter(Collider other)`          | Nhận sự kiện khi Collider đi vào Trigger                                      |
| `GetComponentInParent<PlayerCollector>()` | Tìm Component `PlayerCollector` trên đối tượng va chạm hoặc các đối tượng cha |
| `if (player == null)`                     | Kiểm tra đối tượng không có khả năng thu thập                                 |
| `player.Collect()`                        | Tăng số lượng vật phẩm                                                        |
| `Destroy(gameObject)`                     | Xóa vật phẩm đã thu thập                                                      |

Sử dụng `GetComponentInParent()` giúp ví dụ hoạt động cả khi Collider nằm trên một đối tượng con của Player, miễn là cấu trúc Rigidbody/Collider được thiết lập phù hợp.

Gắn script vào Prefab `Collectible`, sau đó áp dụng thay đổi để các instance sử dụng cùng cấu hình.

### 5.5. Chạy thử hệ thống

Nhấn Play trong Unity Editor.

Điều khiển nhân vật di chuyển vào vật phẩm bằng hệ thống di chuyển đã thiết lập hoặc tạm thời điều chỉnh vị trí Player trong Scene khi chạy.

Kết quả mong đợi:

- Player đi vào vùng Trigger của vật phẩm.
- `OnTriggerEnter()` được kích hoạt.
- Console hiển thị `Collected: 1`.
- Vật phẩm biến mất khỏi Hierarchy.
- Khi thu thập vật phẩm tiếp theo, Console hiển thị `Collected: 2`.

Lưu ý: Các thay đổi thuộc tính trực tiếp trong Play Mode thường không được giữ lại sau khi thoát Play Mode. Vì vậy, cần thực hiện cấu hình lâu dài ở Edit Mode.

## 6. Mở rộng: Sinh vật phẩm bằng Instantiate()

Bên cạnh việc đặt sẵn các instance trong Scene, có thể tạo thêm vật phẩm trong thời gian chạy.

Tạo script `SpawnOne.cs`:

```
using UnityEngine;

public class SpawnOne : MonoBehaviour
{
    [SerializeField] private GameObject prefab;

    public void Spawn()
    {
        if (prefab == null)
        {
            Debug.LogWarning("Prefab chưa được gán!");
            return;
        }

        Instantiate(
            prefab,
            transform.position + Vector3.forward * 2f,
            Quaternion.identity
        );
    }
}
```

`[SerializeField]` cho phép gán tham chiếu Prefab từ Inspector dù biến được khai báo `private`.

`Vector3.forward * 2f` tạo một độ lệch hai đơn vị theo hướng trục Z thế giới. `Quaternion.identity` biểu diễn phép xoay mặc định.

Phương thức `Spawn()` không tự thực thi. Nó cần được gọi bởi một sự kiện hoặc đoạn mã khác.

Để thử nhanh, có thể tạm thời bổ sung phương thức sau vào cùng lớp:

```
private void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        Spawn();
    }
}
```

Ví dụ phím `Space` sử dụng hệ thống nhập liệu `Input` cũ; nếu dự án chỉ bật Input System mới thì cần dùng cách nhận phím tương ứng hoặc điều chỉnh cấu hình Input Handling.

Sau khi cấu hình và nhấn Play, bấm `Space` để tạo thêm một vật phẩm.

Không nên gọi `Instantiate()` vô điều kiện trong `Update()` vì sẽ liên tục tạo đối tượng ở mỗi frame, khiến số lượng GameObject tăng nhanh và ảnh hưởng hiệu năng.

## 7. Kiểm thử và xác minh kết quả

| Tình huống                                  | Kết quả mong đợi                                     |
| ------------------------------------------- | ---------------------------------------------------- |
| Player đi vào Trigger                       | Vật phẩm được thu thập                               |
| Đối tượng không có `PlayerCollector` đi vào | Không thu thập                                       |
| Player đi qua hai vật phẩm                  | Bộ đếm tăng hai lần                                  |
| Gọi `Spawn()` khi đã gán Prefab             | Tạo một instance mới                                 |
| Gọi `Spawn()` khi chưa gán Prefab           | Hiển thị cảnh báo, không tạo vật phẩm                |
| Vật phẩm đã được thu thập                   | Không còn xuất hiện trong Hierarchy sau khi được hủy |

Mỗi lần thử nghiệm nên ghi lại kết quả theo mẫu:

| Nội dung        | Ghi chép                       |
| --------------- | ------------------------------ |
| Kết quả dự đoán | Điều gì sẽ xảy ra?             |
| Kết quả thực tế | Unity đã thực hiện gì?         |
| Bằng chứng      | Console hoặc ảnh Game view     |
| Nhận xét        | Kết quả có đúng không, vì sao? |

## 8. Lỗi thường gặp và cách khắc phục

### 8.1. Player chạm vật phẩm nhưng không thu thập được

Nguyên nhân có thể:

- Chưa bật `Is Trigger`.
- Player thiếu Collider.
- Không có Rigidbody hoặc thành phần vật lý thích hợp.
- Script `Collectible` chưa được gắn.
- GameObject hoặc Collider đang bị vô hiệu hóa.

Cách kiểm tra:

Mở Inspector và kiểm tra lần lượt các Component, sau đó thêm log để xác định sự kiện có chạy hay không.

```
private void OnTriggerEnter(Collider other)
{
    Debug.Log("Trigger: " + other.name);
}
```

Nếu không xuất hiện log, ưu tiên kiểm tra cấu hình vật lý và vị trí các Collider.

Nếu có log nhưng vật phẩm không được thu thập, kiểm tra thành phần `PlayerCollector` và điều kiện trong script.

### 8.2. Vật phẩm bị xóa nhưng bộ đếm không tăng

Có thể phương thức cập nhật trạng thái không được gọi đúng hoặc đang tham chiếu sai nhân vật.

Kiểm tra nơi gọi:

```
player.Collect();
```

Sau đó xác minh Player thực sự có Component `PlayerCollector`.

### 8.3. Không sinh được vật phẩm

Kiểm tra biến `prefab` trong Inspector.

Nếu giá trị là `None (Game Object)`, hãy kéo Prefab từ Project vào trường tương ứng.

Đồng thời bảo đảm phương thức `Spawn()` thực sự được gọi.

### 8.4. Game bị chậm khi tạo nhiều vật phẩm

Khi Instantiate được gọi liên tục, số lượng GameObject có thể tăng nhanh.

Để khắc phục, giới hạn tần suất sinh đối tượng, xóa những đối tượng không còn sử dụng hoặc áp dụng Object Pooling khi phù hợp.

## 9. Bài tập thực hành củng cố

### Bài tập 1 — Thu thập ba vật phẩm

Yêu cầu: Đặt ba Collectible trong Scene và điều khiển nhân vật thu thập tất cả.

Kết quả cần đạt: Console hiển thị tổng cộng `Collected: 3`.

### Bài tập 2 — Thay đổi vị trí sinh vật phẩm

Thay đổi khoảng cách sinh đối tượng từ hai đơn vị thành bốn đơn vị.

Dự đoán sự thay đổi vị trí trước khi chạy và giải thích vai trò của `Vector3.forward`.

### Bài tập 3 — Xây dựng hệ thống nhiều điểm

Mở rộng `Collectible` để mỗi vật phẩm có một giá trị điểm, ví dụ 5, 10 hoặc 20.

Điều chỉnh phương thức `Collect()` để nhận số điểm tương ứng và cập nhật tổng điểm của Player.

### Bài tập 4 — Giới hạn vật phẩm trong Scene

Tạo một hệ thống sinh vật phẩm sao cho chỉ có tối đa năm vật phẩm tồn tại đồng thời.

Khi một vật phẩm được thu thập, hệ thống có thể tạo thêm vật phẩm khác.

Tiêu chí hoàn thành: Không có trường hợp số lượng vật phẩm hoạt động vượt quá giới hạn đã thiết lập.

## 10. Câu hỏi ôn tập trắc nghiệm

Kiểm tra kiến thức

0/5 câu đã chọn

Câu 1. Khi Player đi vào vùng Trigger của vật phẩm, phương thức nào phù hợp để xử lý sự kiện?

A. Update()

B. Start()

C. OnTriggerEnter()

D. Awake()

Câu 2. Để sự kiện Trigger 3D hoạt động, cấu hình nào phù hợp nhất?

A. Hai Collider, một Is Trigger và ít nhất một phía có Rigidbody thích hợp

B. Chỉ cần Mesh Renderer trên cả hai GameObject

C. Chỉ cần hai Transform chồng nhau

D. Chỉ cần đặt Tag Player cho vật phẩm

Câu 3. Vì sao Prefab hữu ích khi có nhiều đồng xu giống nhau?

A. Vì Prefab tự động tạo điểm số

B. Vì Prefab thay thế hoàn toàn C#

C. Vì Prefab không thể thay đổi sau khi tạo

D. Vì có thể tái sử dụng và quản lý cấu hình chung

Câu 4. Điều gì có thể xảy ra nếu gọi Instantiate() vô điều kiện trong Update()?

A. Đối tượng chỉ được tạo một lần

B. Đối tượng mới liên tục được tạo theo frame

C. Unity tự tạm dừng Play Mode

D. Tất cả đối tượng cũ sẽ bị xóa

Câu 5. Cần làm gì khi log Trigger xuất hiện nhưng vật phẩm không được thu thập?

A. Chỉ thay đổi màu vật phẩm

B. Xóa mọi Collider trong Scene

C. Kiểm tra điều kiện nhận Player và Component PlayerCollector

D. Tăng kích thước Camera

Chấm điểmLàm lại

## 11. Checklist hoàn thành

Tiến độ thực hành

0/7

Tạo được Prefab Collectible và đặt nhiều instance trong Scene.

Cấu hình đúng Collider, Is Trigger và Rigidbody.

Viết và gắn thành công script PlayerCollector và Collectible.

Thu thập vật phẩm và theo dõi bộ đếm trong Console.

Tạo thêm vật phẩm bằng Instantiate().

Kiểm tra một lỗi thực tế và ghi lại cách khắc phục.

Hoàn thành bài tập thực hành và câu hỏi trắc nghiệm.

## 12. Tổng kết

Một hệ thống thu thập vật phẩm trong Unity kết hợp nhiều thành phần có vai trò riêng biệt:

| Thành phần         | Vai trò chính                                        |
| ------------------ | ---------------------------------------------------- |
| `Prefab`           | Tạo mẫu vật phẩm có thể tái sử dụng                  |
| `Collider`         | Xác định vùng va chạm hoặc tương tác                 |
| `Is Trigger`       | Cho phép phát hiện sự kiện khi đối tượng đi vào vùng |
| `OnTriggerEnter()` | Xử lý sự kiện thu thập                               |
| `Instantiate()`    | Tạo đối tượng mới                                    |
| `Destroy()`        | Loại bỏ đối tượng                                    |
| `PlayerCollector`  | Quản lý trạng thái thu thập                          |

Nguyên tắc quan trọng: Một vật phẩm có thể được thu thập khi hệ thống nhận diện đúng tương tác, xác thực đối tượng tham gia, cập nhật trạng thái trò chơi và xử lý vòng đời GameObject.

Kỹ năng này là nền tảng để phát triển các cơ chế như nhặt tài nguyên, tích lũy điểm, thu thập chìa khóa, mở khóa khu vực và hoàn thành nhiệm vụ trong game.

Tài liệu tham khảo

- [Unity Learn — Programming Essentials](https://learn.unity.com/pathway/unity-essentials/unit/programming-essentials?version=6.3\&utm_source=chatgpt.com)
- [Unity Scripting API — OnTriggerEnter](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/MonoBehaviour.OnTriggerEnter.html?utm_source=chatgpt.com)
- [Unity Scripting API — Instantiate](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Object.Instantiate.html?utm_source=chatgpt.com)

Bài học tiếng Việt tự biên soạn dựa trên chủ đề công khai của Unity Essentials, không phải bản dịch hoặc transcript chính thức. Các ví dụ được xây dựng để thực hành độc lập trên Unity 6.3.