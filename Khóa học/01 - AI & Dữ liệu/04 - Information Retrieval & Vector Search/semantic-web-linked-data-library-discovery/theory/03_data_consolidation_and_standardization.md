# Bài 03 - Hợp nhất và chuẩn hóa metadata

## Mục tiêu

Sau bài này, bạn có thể mô tả ba nguồn dữ liệu chính của NLB, quá trình chuyển đổi của từng nguồn, và vai trò của Schema.org như một common framework.

![Pipeline chuẩn hóa dữ liệu](../assets/diagrams/diagram_01_data_pipeline.png)

## 1. Ba nguồn dữ liệu chính

LDMS hợp nhất tài nguyên vật lý và số từ nhiều hệ thống. Paper liệt kê ba nguồn chính:

### ILS - Integrated Library System

ILS chứa **MARC records** cho nội dung bibliographic. Dữ liệu này được chuyển sang BIBFRAME bằng công cụ mã nguồn mở của Library of Congress.

### CMS - Content Management System

CMS tổng hợp digital objects từ nhiều hệ thống, bao gồm tài liệu từ National Archives. Metadata có thể đi qua các chuẩn như ISAD-G và Dublin Core. Trong pipeline của paper, records được ghi nhận ở DC XML trước rồi chuyển thành **DC RDF entities**, sau đó enrich bằng Schema.org structured data.

### TTE - Taxonomy and Thesaurus Editor

TTE quản lý local authority records cho Person, Place, Organization và các entity tương tự. Dữ liệu ở dạng CSV và được map trực tiếp sang Schema.org.

## 2. Vì sao cần một common framework

Nếu mỗi nguồn giữ vocabulary riêng, graph sẽ khó trở thành một lớp chung. NLB chọn **Schema.org** để chuẩn hóa vocabularies, đồng thời giúp dữ liệu khi xuất hiện trên web có cấu trúc mà search engine có thể hiểu.

Đây là một điểm thiết kế quan trọng: chuẩn hóa không đồng nghĩa xóa mất mô hình gốc. ILS vẫn dùng BIBFRAME để giữ các khái niệm phù hợp với bibliographic data; CMS vẫn dựa trên Dublin Core; nhưng cuối cùng chúng được nối trong một semantic layer chung.

## 3. Tư duy “adapter + shared graph”

Có thể đọc kiến trúc này như ba lớp:

1. **Source adapters**: chuyển đổi dữ liệu theo đặc tính từng hệ thống nguồn.
2. **Semantic normalization**: đưa vocabularies về các khái niệm có thể tương tác.
3. **Entity-centered graph**: lưu quan hệ để API và UI sử dụng.

Paper không mô tả đây là thuật ngữ chính thức của NLB; đây là cách tổ chức lại kiến thức trong bài học để dễ học, nhưng các bước tương ứng đều xuất phát từ pipeline được mô tả trong paper.

## 4. Điểm cần kiểm tra khi thiết kế hệ thống tương tự

- Mỗi source system đang dùng schema nào?
- Có entity nào trùng nhau giữa các nguồn?
- Identifier có ổn định và có thể map không?
- Trường nào có thể chuyển thẳng, trường nào cần conversion?
- UI có cần biết source system gốc hay chỉ cần endpoint qua LDMS?

## Tóm tắt

LDMS không ép tất cả dữ liệu thành một định dạng nguyên thủy duy nhất. Nó xây một pipeline conversion/mapping để dữ liệu MARC, Dublin Core và authority CSV cùng hội tụ vào một graph dùng chung.

*Nguồn học: paper, Data Consolidation and Standardization, pp. 4-5.*
