# Sơ đồ kiến trúc tham khảo

> Các sơ đồ dưới đây là đề xuất của giáo trình nhằm triển khai các ý trong video. Chúng không phải sơ đồ do tác giả video cung cấp.

## 1. Luồng phát lệnh

```mermaid
flowchart LR
 A[Input chuột] --> B[Grid Picker]
 B --> C[Action Preview]
 C --> D{Hợp lệ và đủ AP?}
 D -- Không --> E[Hiện lý do từ chối]
 D -- Có --> F[Action System]
 F --> G[Turn System / AP]
 F --> H[Movement / Combat]
 H --> I[Events]
 I --> J[Enemy vision / Overwatch / UI]
```

## 2. Một vòng chơi

```mermaid
flowchart TD
 A[Start Player Turn] --> B[Khôi phục AP]
 B --> C[Chọn unit và action]
 C --> D{Đủ AP và hợp lệ?}
 D -- Không --> C
 D -- Có --> E[Thực thi và xử lý phản ứng]
 E --> F{Thắng / thua?}
 F -- Có --> G[Kết quả trận]
 F -- Chưa --> H{Kết thúc lượt?}
 H -- Không --> C
 H -- Có --> I[Enemy Turn]
 I --> J[AI chọn hành động]
 J --> E
```

## 3. Phân tầng dữ liệu

```mermaid
flowchart TB
 subgraph Authoring[Asset soạn bởi designer]
  U[UnitDefinition]
  W[WeaponDefinition]
  A[ActionDefinition]
  L[LevelDefinition]
 end
 subgraph Runtime[Trạng thái mỗi trận]
  UR[UnitRuntimeState]
  GR[GridState]
  TS[TurnState]
 end
 U --> UR
 W --> UR
 A --> UR
 L --> GR
 TS --> UR
 UR --> GR
```

## 4. Lưu ý tính đúng

- `GridState` là nguồn sự thật về đơn vị chiếm ô.
- Dữ liệu thay đổi theo từng đơn vị (HP, AP, cooldown) không nằm trong ScriptableObject dùng chung.
- Action được xác thực trước khi commit; UI preview gọi cùng nguồn tính toán với thực thi.
- Overwatch và phát hiện cần kiểm tra theo **từng bước di chuyển** nếu luật kích hoạt theo ô.
