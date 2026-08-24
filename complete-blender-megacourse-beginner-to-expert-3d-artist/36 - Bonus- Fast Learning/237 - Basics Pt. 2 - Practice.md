# 237 — Basics Pt. 2
# 237 — Basics Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | Basics Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:19:59 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này tập trung vào sculpting, subdivision, symmetry, retopology và high-resolution sculpting. Nội dung được tổng hợp từ:

- [Section 11 — Sculpting](../11%20-%20Basics-%20Sculpting/README.md)
- [Section 12 — Methods of Subdivision for Sculpting](../12%20-%20Basics-%20Methods%20of%20Subdivision%20for%20Sculpting/README.md)
- [Section 13 — Sculpting with Symmetry](../13%20-%20Basics-%20Sculpting%20with%20Symmetry/README.md)
- [Section 14 — Retopology](../14%20-%20Basics-%20Retopology/README.md)
- [Section 15 — High-Res Sculpting](../15%20-%20Basics-%20High-Res%20Sculpting/README.md)

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Thiết lập Sculpting workspace và chọn brush theo mục đích tạo hình.
- Phân biệt khi nào nên dùng Multiresolution, Dynamic Topology hoặc remesh.
- Dùng symmetry theo các trục X, Y, Z để giữ hình organic cân đối.
- Tạo một low-poly mesh có edge flow sạch từ sculpt dày và không đều.
- Đưa mesh đã retopology trở lại Multiresolution để thêm detail và dùng alpha có kiểm soát.

## Nội dung trọng tâm

### 1. Sculpting workspace và brush

Sculpting bắt đầu từ việc chuẩn bị mesh, viewport và brush. Nhóm sculpting brushes dùng để tạo khối, kéo silhouette, làm phẳng hoặc làm mịn; nhóm non-sculpting brushes hỗ trợ mask, face set và các thao tác tổ chức vùng cần chỉnh sửa.

### 2. Hai cách tăng độ phân giải

Multiresolution chia nhỏ cùng một topology theo nhiều level, cho phép chuyển qua lại giữa mức thấp và mức cao. Dynamic Topology tạo topology mới cục bộ trong lúc sculpt nên linh hoạt cho organic form, nhưng kết quả có thể rất dày và thiếu edge loops.

### 3. Symmetry đúng trong Sculpt Mode

Mirror modifier không phải lựa chọn chính khi sculpt, đặc biệt khi kết hợp với Dynamic Topology hoặc Multiresolution. Hãy dùng các tùy chọn symmetry của Sculpt Mode; X, Y và Z có thể bật riêng hoặc kết hợp tùy hình dạng cần tạo.

### 4. Retopology và high-res detail

Retopology tạo một mesh mới có polygon count thấp hơn và edge flow rõ ràng trên sculpt gốc. Các vòng cạnh quanh mắt, miệng và vùng sẽ biến dạng cần được ưu tiên nếu asset dùng cho animation. Sau khi giữ lại bản backup của retopology, có thể áp dụng modifier cần thiết, thêm Multiresolution rồi đưa surface detail và alpha vào mesh sạch.

## Quy trình rút gọn

1. Tạo hoặc chuẩn bị base mesh, lưu một bản backup trước khi sculpt.
2. Dựng silhouette và primary forms bằng brush lớn, sau đó mới chuyển sang form nhỏ hơn.
3. Chọn Multiresolution, Dynamic Topology hoặc remesh theo mục tiêu của asset.
4. Bật symmetry trong Sculpt Mode và kiểm tra ở nhiều góc nhìn.
5. Retopology trên sculpt đã hoàn thành, ưu tiên edge flow ở vùng biến dạng.
6. Giữ bản retopology sạch, thêm Multiresolution và sculpt detail/alpha ở level phù hợp.

## Thực hành đề xuất

Sculpt một đầu nhân vật hoặc một organic rock. Tạo bản high-res bằng Dynamic Topology, sau đó dựng lại một mesh low-poly có vòng cạnh rõ quanh các vùng cần biến dạng. Thêm Multiresolution lên mesh mới, khôi phục primary forms và dùng một alpha để tạo detail nhỏ. Lưu riêng các bản base, sculpt, retopo và final.

## Checklist

- [ ] Đã thử các brush chính và hiểu mục đích của từng nhóm brush.
- [ ] Đã so sánh Multiresolution với Dynamic Topology trên cùng một asset.
- [ ] Đã dùng X symmetry và kiểm tra kết quả ở nhiều trục.
- [ ] Đã retopology một sculpt với edge flow có chủ đích.
- [ ] Đã thêm high-res detail trên mesh retopology và giữ backup.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Sections 11–15 của thư mục khóa học. Thư mục Section 36 hiện không có transcript riêng cho bài Bonus này; phần trên giữ lại các quyết định workflow quan trọng nhất.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
