# Bài 04 — Thêm Point Light, Spot Light và ánh sáng môi trường

*Creative Core · Lighting · Unity 6.3 · Add light sources to your scene*

## 1. Tổng quan và mục tiêu

Một cảnh ngoài trời về đêm cần nhiều nguồn sáng có chức năng rõ ràng: đèn đường chiếu xuống lối đi, ánh sáng màu tạo điểm nhấn và ambient giữ lại thông tin hình khối ở vùng khuất. Bài thực hành này giúp chọn **loại Light**, cấu hình hình dạng vùng sáng, kiểm tra **color space** và điều chỉnh ambient có chủ đích.

## 2. Lựa chọn loại nguồn sáng

| Loại Light | Mô tả | Ứng dụng |
|---|---|---|
| `Directional` | Tia gần song song; không suy giảm theo khoảng cách như điểm sáng cục bộ | Mặt trời, ánh trăng quy ước |
| `Point` | Phát sáng mọi hướng từ một điểm, giới hạn phạm vi bởi `Range` | Bóng đèn, đèn lồng |
| `Spot` | Chiếu trong một hình nón, có góc mở và vùng rìa | Đèn đường, đèn sân khấu, đèn pin |
| `Area` | Phát sáng từ một diện tích (hành vi tùy pipeline) | Nguồn sáng cửa sổ, dải đèn tĩnh |

Trong workflow URP của khóa học, **Area Light thường được dùng để bake**, không xem đó là đèn Area realtime như tính năng của các pipeline khác.

## 3. Các thuộc tính của Light

`Color` quyết định sắc ánh sáng; `Intensity` quyết định độ mạnh trong mô hình Unity đang dùng; `Range` giới hạn tầm ảnh hưởng của Point/Spot; `Spot Angle` quyết định góc hình nón. Với Spot Light, thu hẹp góc sẽ tập trung vùng sáng nhưng không có nghĩa năng lượng tự động được bảo toàn theo mô hình đèn vật lý. `Mode` chọn realtime/baked/mixed; `Shadows` quyết định có tính bóng động hay không.

Đèn trắng đặt trong phòng có tường đỏ có thể tạo bounce màu đỏ khi bake GI. Tuy nhiên, **ánh sáng phát ra từ material Emission** và **ánh sáng phát ra từ Light component** là hai hệ thống khác nhau; phát sáng trên màn hình không đảm bảo tự chiếu sáng vật gần đó.

## 4. Thực hành dựng cụm đèn đường

1. Mở `TutorialScene_Lighting_Outdoor` hoặc dựng một sân với ba cột đèn.
2. Thêm một `Spot Light` tại vị trí bóng đèn. Quay trục chiếu xuống mặt sàn, bật/tắt Light component và quan sát vùng sáng biến mất/xuất hiện.
3. Đổi tạm `Type` sang Point: nhận xét ánh sáng hắt ngang vào cột đèn. Đổi lại Spot để mô phỏng đèn đường có chụp.
4. Điều chỉnh `Range`, `Spot Angle` và `Intensity` từng tham số một. Đừng chỉ tăng cường độ để bù cho vùng sáng sai hình dạng.
5. Duplicate đèn, đặt ở các vị trí khác nhau; xen kẽ tông ấm trung tính và một đèn màu tạo nhấn. Kiểm tra vùng chồng ánh sáng để tránh cháy sáng.
6. Mở `Edit > Project Settings > Player > Other Settings` và tìm `Color Space` (mục có thể khác trong Unity 6.3); với dự án PBR hiện đại, **Linear** thường là lựa chọn phù hợp, nhưng chuyển đổi giữa Gamma/Linear có thể ảnh hưởng material và hình ảnh toàn dự án.
7. Trong `Window > Rendering > Lighting`, điều chỉnh `Environment Lighting` (Skybox/Gradient/Color và intensity khi hỗ trợ), chụp ảnh trước/sau ambient.

## 5. Quan hệ giữa cường độ và khoảng cách

Với nguồn điểm lý tưởng trong không gian không hấp thụ, độ rọi suy giảm gần theo quy luật nghịch đảo bình phương khoảng cách: $E \propto 1/r^2$. Đây là trực giác vật lý, **không phải công thức để suy ra chính xác pixel trong Unity**: hình dạng nguồn sáng, vật liệu, exposure, giới hạn Range và cách pipeline áp dụng attenuation còn tác động đến kết quả.

## 6. Kiểm tra và khắc phục

Đèn không sáng có thể do Light/renderer bị tắt, `Range` quá ngắn, `Culling Mask` không phù hợp hoặc URP Asset giới hạn số Additional Lights. Nếu vật thể trông xám xỉn, hãy kiểm tra ambient và material trước khi thêm vô hạn đèn. Nếu hình ảnh đổi quá nhiều sau khi chuyển Linear, cần đánh giá lại toàn cảnh thay vì chỉnh riêng một Spot Light.

## 7. Kết quả cần đạt

Một cảnh có ánh sáng đường dẫn hướng người xem, một điểm nhấn màu khác biệt, bảng ghi thử nghiệm `Spot Angle / Range / Intensity`, và hai ảnh thể hiện sự thay đổi của ambient.


## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Đèn đường có chụp chiếu xuống mặt đường phù hợp nhất với loại nào?

A. Spot Light  
B. Directional Light  
C. Reflection Probe  
D. Skybox  

**Đáp án:** A. **Giải thích:** Spot Light phát sáng trong hình nón nên phù hợp chùm sáng định hướng.

### Câu 2

Thông số nào xác định độ mở của chùm Spot Light?

A. Range  
B. Shadow Distance  
C. Spot Angle  
D. Lightmap Size  

**Đáp án:** C. **Giải thích:** Spot Angle điều khiển góc hình nón vùng sáng.

### Câu 3

Vì sao Material có Emission không tự bảo đảm chiếu sáng vật thể khác?

A. Vì emission nhìn thấy và đóng góp GI là hai cơ chế khác nhau  
B. Vì Emission là Collider  
C. Vì Unity cấm vật phát sáng  
D. Vì mọi shader đều Unlit  

**Đáp án:** A. **Giải thích:** Muốn chiếu sáng môi trường cần cấu hình GI/bake hoặc nguồn Light thực sự.

### Câu 4

Thêm nhiều Point Light quá mức có nguy cơ gì?

A. Tự tăng độ phân giải texture  
B. Giảm chi phí GPU  
C. Tăng chi phí chiếu sáng và bóng  
D. Xóa thông tin vật liệu  

**Đáp án:** C. **Giải thích:** Mỗi nguồn bổ sung có thể tăng công việc shading và shadow rendering.

### Câu 5

Khi muốn cảnh đêm vẫn thấy rõ vùng khuất, cần thử điều chỉnh hệ thống nào?

A. Ambient / Environment Lighting  
B. RigidBody  
C. NavMesh Agent  
D. Audio Mixer  

**Đáp án:** A. **Giải thích:** Ambient giúp có ánh sáng nền khuếch tán ở khu vực không có nguồn trực tiếp.


## 9. Tài liệu tham khảo và lưu ý phiên bản

- [Unity Learn — Add light sources to your scene](https://learn.unity.com/course/creative-core-lighting/tutorial/add-light-sources-to-your-scene?version=6.3) (Unity 6.3).

**Lưu ý:** Menu và tùy chọn có thể khác theo URP Asset, Quality Level, Unity Editor và loại shader đang dùng. Nội dung là bài giảng tiếng Việt độc lập được biên soạn và bổ sung để học tập, không phải bản dịch chính thức hay lời chép toàn văn của Unity.
