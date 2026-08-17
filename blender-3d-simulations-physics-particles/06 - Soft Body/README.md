# Module 06 — Soft Body

**7 bài • 1 giờ 16 phút**

Soft Body dùng cho object đàn hồi, nhún, nảy hoặc biến dạng dưới lực và collision.

## Mục tiêu

- Hiểu Goal, Edges, Self Collision và Solver.
- Tạo biến dạng mềm có kiểm soát bằng topology và stiffness.
- Dựng Jello và áp dụng soft body lên nhân vật hoặc đạo cụ.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | [Soft Body Object](001%20-%20Soft%20Body%20Object.md) | 5:48 | Thêm và kiểm tra soft body |
| 002 | [Soft Body Goal](002%20-%20Soft%20Body%20Goal.md) | 10:12 | Giữ object bám hình dạng ban đầu |
| 003 | [Soft Body Edges](003%20-%20Soft%20Body%20Edges.md) | 16:13 | Độ cứng và liên kết cạnh |
| 004 | [Soft Body Self Collision](004%20-%20Soft%20Body%20Self%20Collision.md) | 7:15 | Ngăn mesh tự xuyên |
| 005 | [Soft Body Solver](005%20-%20Soft%20Body%20Solver.md) | 8:20 | Quality, step và ổn định |
| 006 | [Tạo Jello bằng Soft Body](006%20-%20T%E1%BA%A1o%20Jello%20b%E1%BA%B1ng%20Soft%20Body.md) | 12:28 | Project jello hoàn chỉnh |
| 007 | [Soft Body trên nhân vật](007%20-%20Soft%20Body%20tr%C3%AAn%20nh%C3%A2n%20v%E1%BA%ADt.md) | 15:44 | Biến dạng mềm theo animation |

## Bài thực hành đề xuất

Dựng một khối jello có subdivisions đủ dày, đặt trên một mặt phẳng collision và cho nó rơi, nảy rồi ổn định. Tạo một bản thứ hai có Goal để so sánh độ biến dạng.

## Ứng dụng cho shot trứng

Soft Body phù hợp cho màng trứng, lòng trắng, nhân vật mềm hoặc một lớp gel bên trong. Không nên dùng nó cho các mảnh vỏ cứng; hãy giữ Rigid Body cho vỏ và dùng Soft Body như lớp vật liệu bổ sung.

## Checklist

- [ ] Mesh có topology phù hợp.
- [ ] Đã kiểm tra Goal và Edges riêng biệt.
- [ ] Self Collision chỉ bật khi cần thiết.
- [ ] Đã thử solver ở đoạn ngắn trước khi cache.

## Quiz Section 6 — trọng tâm ôn tập

Giải thích Goal khác Edges như thế nào; vì sao topology ảnh hưởng kết quả; và cách phân biệt lỗi solver với lỗi collision.
