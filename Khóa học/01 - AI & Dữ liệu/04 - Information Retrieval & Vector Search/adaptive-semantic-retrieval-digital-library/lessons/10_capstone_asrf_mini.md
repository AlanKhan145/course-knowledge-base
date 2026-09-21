# Bài 10 — Capstone: Xây ASRF-mini

## Mục tiêu

Xây một prototype nhỏ đủ để chứng minh luồng end-to-end thay vì cố tái tạo toàn bộ hệ thống nghiên cứu.

## Phạm vi đề xuất

- 2,000–10,000 document;
- 3 node type: Document, Author, Concept;
- 4 relation type: `writtenBy`, `hasConcept`, `cites`, `similarTo`;
- 1 ontology nhỏ 50–200 concept;
- behavior giả lập hoặc log thật đã ẩn danh;
- retrieval hai stage.

## Milestone 1 — Baseline

Tạo BM25 hoặc TF-IDF keyword search. Đo Precision@10 và latency.

## Milestone 2 — Knowledge Graph

Extract metadata, concept, citation. Tạo graph và kiểm tra entity resolution. Cho phép query expansion qua concept hierarchy.

## Milestone 3 — Graph representation

Huấn luyện R-GCN/MR-GCN cho link prediction hoặc node classification. Export document embeddings. So sánh semantic retrieval với baseline.

## Milestone 4 — Behavior augmentation

Tạo user-document interaction edges theo click/dwell/bookmark. Xây profile short-term + long-term đơn giản.

## Milestone 5 — Hybrid ranking

Implement:

$$score=\lambda_1rel+\lambda_2auth+\lambda_3nov+\lambda_4behav$$

Log component score riêng để debug.

## Milestone 6 — Evaluation

Chạy:

- baseline vs KG vs GNN vs GNN+behavior;
- ablation ontology/behavior;
- cold-start split;
- latency benchmark;
- qualitative error analysis 20 query.

## Definition of Done

Prototype hoàn thành khi có:

- reproducible data pipeline;
- graph schema documented;
- retrieval API hoặc notebook chạy end-to-end;
- bảng metric;
- ít nhất một ablation;
- 10 ví dụ query có explanation;
- README mô tả limitation và privacy assumption.
