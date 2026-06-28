# 006 - Structured Output

**Hoc phan:** 02 - Model Platforms and Prompting
**Module:** Module 05 - Prompt Engineering
**Nhom noi dung:** Output Control
**Nguon roadmap:** Prompt Engineering / Output Control
**Loai bai:** Prompting
**Thu tu trong module:** 006
**Thoi luong goi y:** 22 phut

---

## 1. Tom tat

Bai nay giai thich **Structured Output** trong boi canh AI Engineer hien dai. Sau bai hoc, ban nen biet topic nay giup xay AI app nao, nam o dau trong workflow va co the bien thanh prompt, API call, RAG pipeline, agent tool, multimodal feature hoac production checklist.

## 2. Muc tieu hoc tap

- Giai thich duoc Structured Output bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow AI Engineer.
- Ap dung vao mot app, API call, prompt, RAG pipeline, agent tool hoac portfolio demo nho.

## 3. Khai niem chinh

- Structured output asks the model to return a schema such as JSON.
- It makes model responses easier to validate, store and use in app workflows.
- Always parse and validate structured output instead of trusting raw text blindly.

## 4. Vi du / Demo

```json
{
  "summary": "string",
  "risks": ["string"],
  "next_actions": ["string"]
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

- Toi co the giai thich **Structured Output** trong 1-2 phut.
- Toi co mot demo nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den model, prompt, retrieval, tool, cost, safety hoac UX nao.
- Toi da ghi lai it nhat mot limitation hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Design prompts that are clear, constrained, testable and robust across realistic inputs.

## 9. Project lien quan

Project 4: Prompt Lab with saved prompt templates, versioning and output comparison.

## 10. Tong ket

**Structured Output** la mot moc trong lo trinh AI Engineer. Hay bien no thanh mot prompt, API route, RAG workflow, agent tool, multimodal demo, dashboard hoac portfolio note de kien thuc co cho bam.
