# Checklist thực hành theo Module

## Module 01 — Nền tảng

- [ ] Scene có lưới, sàn, chướng ngại và các Unit.
- [ ] Hiểu thế nào là tọa độ World/Cell và cách pathfinder quyết định đường đi.
- [ ] Click chuột có thể xác định ô đích.

## Module 02 — Di chuyển

- [ ] Có tập các ô đạt `moveRange` theo đường hợp lệ.
- [ ] Tilemap tô đúng các ô đó.
- [ ] Click ngoài vùng tô không tạo lệnh Move.
- [ ] Unit đang di chuyển không nhận input mới.
- [ ] Vùng/tọa độ được cập nhật sau callback.

## Module 03 — Tấn công

- [ ] Mỗi ô lưu Unit hiện tại, không còn tham chiếu cũ khi di chuyển.
- [ ] Click vào địch thì ra lệnh Attack, click đồng minh thì không.
- [ ] Đánh ngoài tầm bị từ chối.

## Module 04 — Lượt chơi

- [ ] Blue và Red luân phiên theo Unit.
- [ ] Một Unit mỗi lượt tối đa 1 Move + 1 Attack.
- [ ] Có thể đảo thứ tự Attack rồi Move.
- [ ] Space skip an toàn.
- [ ] Camera pan đúng Unit.

## Module 05 — Nghiệm thu

- [ ] Chạy toàn bộ test trong `05-kiem-thu-toi-uu-mo-rong/01-kiem-thu-end-to-end.md`.
- [ ] Ghi được 1 video demo hoàn chỉnh.
- [ ] Biết khi nào nên thay FindPath từng ô bằng BFS hoặc Dijkstra.
