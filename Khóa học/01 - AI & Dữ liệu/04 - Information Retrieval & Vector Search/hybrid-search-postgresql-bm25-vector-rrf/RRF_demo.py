"""Ví dụ RRF thuần Python; không dùng thư viện ngoài, không cần DB.
Chạy: python RRF_demo.py
"""
from collections import defaultdict


def reciprocal_rank_fusion(keyword_ids, semantic_ids, semantic_weight=0.5, k=60):
    """Kết hợp ID ứng viên (mỗi danh sách đã được xếp hạng tốt->kém)."""
    if not 0 <= semantic_weight <= 1:
        raise ValueError("semantic_weight phải trong đoạn [0, 1]")
    if k <= 0:
        raise ValueError("k phải dương")
    weights = (1 - semantic_weight, semantic_weight)
    scores = defaultdict(float)
    for ids, weight in zip((keyword_ids, semantic_ids), weights):
        if weight == 0:
            continue
        # Không tính một bài hai lần trong cùng danh sách.
        for rank, article_id in enumerate(dict.fromkeys(ids), start=1):
            scores[article_id] += weight / (k + rank)
    return sorted(scores.items(), key=lambda pair: (-pair[1], str(pair[0])))


if __name__ == "__main__":
    keyword = ["B", "A", "C", "E"]
    semantic = ["X", "Y", "A", "C"]
    print("Không trọng số: A=1/62+1/63=", round(1/62 + 1/63, 6))
    print("Không trọng số: B=1/61=", round(1/61, 6))
    for w in (0.0, 0.5, 0.7, 1.0):
        results = reciprocal_rank_fusion(keyword, semantic, semantic_weight=w)
        print(f"semantic_weight={w:.1f}", [(i, round(s, 6)) for i,s in results])

    assert reciprocal_rank_fusion(["B", "A"], ["X", "Y", "A"])[0][0] == "A"
    print("RRF self-test passed")
