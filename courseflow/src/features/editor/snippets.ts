// Quick-insert blocks for the editor (same syntax as templates/lesson.md).
export const SNIPPETS: { label: string; hint: string; text: string }[] = [
  {
    label: "Câu hỏi trắc nghiệm",
    hint: "### Câu N + A–D + Đáp án",
    text: "### Câu 1\n\nCâu hỏi?\n\nA. Phương án  \nB. Phương án đúng  \nC. Phương án  \nD. Phương án  \n\n**Đáp án:** B. **Giải thích:** Vì sao B đúng, vì sao các phương án khác sai.",
  },
  {
    label: "Mục Câu hỏi ôn tập",
    hint: "Khung 3 câu hỏi",
    text: "## Câu hỏi ôn tập\n\n### Câu 1\n\nCâu hỏi?\n\nA. …  \nB. …  \nC. …  \nD. …  \n\n**Đáp án:** A. **Giải thích:** …\n\n### Câu 2\n\nNhững phát biểu nào đúng?\n\nA. …  \nB. …  \nC. …  \nD. …  \n\n**Đáp án:** A, C. **Giải thích:** …\n\n### Câu 3\n\nVì sao …?\n\n**Đáp án:** Đáp án mẫu.",
  },
  {
    label: "Khối quiz nâng cao",
    hint: "Điền trống, sắp xếp, ghép cặp",
    text: '```quiz\nquestions:\n  - type: fill_blank\n    prompt: "… ___ …"\n    blanks: [["đáp án"]]\n  - type: ordering\n    prompt: "Sắp xếp theo thứ tự"\n    items: ["Bước 1", "Bước 2", "Bước 3"]\n  - type: matching\n    prompt: "Ghép cặp"\n    pairs:\n      - { left: "A", right: "1" }\n      - { left: "B", right: "2" }\n```',
  },
  { label: "Sơ đồ Mermaid", hint: "flowchart", text: "```mermaid\nflowchart LR\n    A[Bắt đầu] --> B{Điều kiện}\n    B -- có --> C[Kết quả 1]\n    B -- không --> D[Kết quả 2]\n```" },
  { label: "Ảnh", hint: "./assets/ten-anh.webp", text: '![Mô tả ảnh](./assets/ten-anh.webp "Chú thích")' },
  { label: "Bảng", hint: "3 cột", text: "| Tiêu chí | Cách A | Cách B |\n|---|---|---|\n| … | … | … |" },
  { label: "Callout Mẹo", hint: "> [!TIP]", text: "> [!TIP] Mẹo\n> Nội dung mẹo." },
  { label: "Callout Cảnh báo", hint: "> [!WARNING]", text: "> [!WARNING] Cảnh báo\n> Điều cần tránh." },
  { label: "Công thức", hint: "$$ … $$", text: "$$\n\\frac{a}{b} = c\n$$" },
  { label: "Lời giải thu gọn", hint: "<details>", text: "<details>\n<summary>Xem lời giải</summary>\n\nLời giải từng bước.\n\n</details>" },
  { label: "Code", hint: "```python", text: "```python\nprint(\"Xin chào\")\n```" },
];
