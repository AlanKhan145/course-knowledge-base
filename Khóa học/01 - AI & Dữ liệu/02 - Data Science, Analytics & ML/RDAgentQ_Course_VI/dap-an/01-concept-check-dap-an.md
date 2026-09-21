# Đáp án gợi ý — Concept Check

1. Framework sinh hypothesis/task/code và xác minh bằng backtest; LLM không trực tiếp đóng vai oracle giao dịch.
2. Specification → Synthesis → Implementation → Validation → Analysis.
3. Để candidate dùng cùng luật chơi và có thể chạy/so sánh reproducibly.
4. Chọn history liên quan action/SOTA; thành công thì refine/mở rộng, thất bại thì đổi cấu trúc/hướng.
5. Factor hypothesis thường tách thành nhiều signal nhỏ có dependency; model thường là pipeline cấu trúc liền mạch hơn.
6. `(task, code, feedback)` cùng implementation trace/experience.
7. Tránh library phình bởi signal gần như trùng nhau.
8. Analysis chẩn đoán experiment hiện tại; Synthesis tổng hợp toàn lịch sử.
9. Action chỉ có factor/model, reward phụ thuộc context metric và cần cân bằng exploration/exploitation.
10. Không. Validation dùng cơ chế chương trình/backtest, giảm phụ thuộc vào phán đoán LLM ở bước có thể kiểm tra định lượng.
