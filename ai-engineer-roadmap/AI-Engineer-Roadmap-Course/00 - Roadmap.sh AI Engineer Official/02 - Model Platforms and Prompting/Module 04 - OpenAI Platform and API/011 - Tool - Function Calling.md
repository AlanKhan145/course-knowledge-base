# 011 - Tool / Function Calling

**Hoc phan:** 02 - Model Platforms and Prompting
**Module:** Module 04 - OpenAI Platform and API
**Nhom noi dung:** Request Design
**Nguon roadmap:** OpenAI Platform and API / Request Design
**Loai bai:** API
**Thu tu trong module:** 011
**Thoi luong goi y:** 24 phut

---

## 1. Tom tat

Bai nay giai thich **Tool / Function Calling** trong boi canh AI Engineer hien dai. Sau bai hoc, ban nen biet topic nay giup xay AI app nao, nam o dau trong workflow va co the bien thanh prompt, API call, RAG pipeline, agent tool, multimodal feature hoac production checklist.

## 2. Muc tieu hoc tap

- Giai thich duoc Tool / Function Calling bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow AI Engineer.
- Ap dung vao mot app, API call, prompt, RAG pipeline, agent tool hoac portfolio demo nho.

## 3. Khai niem chinh

- Tool calling lets the model request external functions or APIs with structured arguments.
- The application decides whether to execute the tool and how to return results.
- Tool permissions, validation and audit logs are essential in production.

## 4. Vi du / Demo

```json
{
  "tool": "search_docs",
  "arguments": {
    "query": "refund policy",
    "top_k": 5
  }
}
```

## 5. Bai tap thuc hanh

- Tao mot input mau va expected output ro rang.
- Them validation, error case va log token/cost neu co the.
- Ghi lai prompt/API parameter nao anh huong nhieu nhat den ket qua.

## 6. Loi thuong gap

- Tin rang prompt demo chay mot lan la du cho production.
- Khong validate output co cau truc.
- Khong track token, latency, retry va rate-limit errors.

## 7. Checklist hoan thanh

- Toi co the giai thich **Tool / Function Calling** trong 1-2 phut.
- Toi co mot demo nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den model, prompt, retrieval, tool, cost, safety hoac UX nao.
- Toi da ghi lai it nhat mot limitation hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Call LLM APIs from applications while managing messages, tokens, cost, latency, retries and structured outputs.

## 9. Project lien quan

Project 3: AI Writing Assistant with summarize, rewrite, translate, explain and JSON output.

## 10. Tong ket

**Tool / Function Calling** la mot moc trong lo trinh AI Engineer. Hay bien no thanh mot prompt, API route, RAG workflow, agent tool, multimodal demo, dashboard hoac portfolio note de kien thuc co cho bam.
