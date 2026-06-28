# 009 - Private Key

**Hoc phan:** 02 - Cryptography Consensus and Ecosystems
**Module:** Module 05 - Cryptography for Blockchain
**Nhom noi dung:** Keys and Addresses
**Nguon roadmap:** Cryptography for Blockchain / Keys and Addresses
**Loai bai:** wallet
**Thu tu trong module:** 009
**Thoi luong goi y:** 30 phut

---

## 1. Tom tat

Bai nay giai thich **Private Key** trong boi canh Blockchain Developer Roadmap 2026. Sau bai hoc, ban nen biet topic nay nam o dau trong blockchain, smart contract, dApp, security, oracle, scaling hoac portfolio workflow.

## 2. Muc tieu hoc tap

- Giai thich duoc Private Key bang ngon ngu cua ban.
- Nhan biet topic nay anh huong den trust, security, gas cost, UX, decentralization hoac deployment risk nao.
- Ap dung vao mot artifact nho: note, diagram, Solidity code, test, deploy script, dApp UI, audit finding hoac README.

## 3. Khai niem chinh

- A private key controls the wallet and can authorize transactions.
- Whoever owns the private key effectively owns the funds and permissions associated with the address.
- Never commit keys to code, logs, screenshots or public repositories.

## 4. Thuc hanh

1. Use a test wallet only.
2. Perform one safe wallet action: sign message, switch network or send testnet transaction.
3. Document key safety and user-facing error cases.

## 5. Bai tap

Perform the action on a testnet wallet and document the safe handling rules.

## 6. Checklist hoan thanh

- [ ] Co dinh nghia ngan gon.
- [ ] Co vi du trong blockchain/smart contract/dApp.
- [ ] Co artifact nho de dua vao portfolio.
- [ ] Co ghi chu ve security, gas, testnet, wallet UX hoac deployment risk neu lien quan.

## 7. Ghi chu san xuat

Khi dua vao production, hay hoi: ai co quyen goi function, private key duoc bao ve ra sao, contract co test/fuzz/static analysis chua, UI xu ly failed transaction nhu the nao va co can audit/trust assumption note khong.
