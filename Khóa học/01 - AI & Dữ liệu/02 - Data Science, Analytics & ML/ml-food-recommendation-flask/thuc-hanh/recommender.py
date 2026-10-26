"""Gợi ý công thức theo nguyên liệu và chỉ tiêu dinh dưỡng (dữ liệu minh họa)."""
from __future__ import annotations
import re
import unicodedata
from pathlib import Path

import numpy as np
import pandas as pd
from scipy.sparse import csr_matrix, hstack
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler

NUMERIC = ["calories", "fat_g", "carbohydrates_g", "protein_g", "cholesterol_mg", "sodium_mg", "fiber_g"]
REQUIRED = ["recipe_id", "name", "ingredients", *NUMERIC]


def normalize_ingredient(value: str) -> str:
    """Chuẩn hóa khoảng trắng/hoa-thường; không tự ý dịch nghĩa tên nguyên liệu."""
    value = unicodedata.normalize("NFKC", str(value)).casefold()
    return re.sub(r"\s+", " ", value.strip())


def ingredients_analyzer(value: str) -> list[str]:
    return list(dict.fromkeys(
        normalize_ingredient(part)
        for part in str(value).split(",")
        if normalize_ingredient(part)
    ))


class RecipeRecommender:
    def __init__(self, frame: pd.DataFrame, ingredient_weight=3.0, nutrition_weight=1.0):
        self.frame = frame.copy().reset_index(drop=True)
        missing = sorted(set(REQUIRED) - set(self.frame.columns))
        if missing:
            raise ValueError(f"Thiếu các cột bắt buộc: {', '.join(missing)}")
        if self.frame.empty:
            raise ValueError("Bảng công thức phải có ít nhất một dòng")
        self.frame["ingredients"] = self.frame["ingredients"].fillna("").astype(str)
        self.frame["name"] = self.frame["name"].fillna("").astype(str)
        self.frame[NUMERIC] = self.frame[NUMERIC].apply(pd.to_numeric, errors="coerce")
        self.medians = self.frame[NUMERIC].median().fillna(0.0)
        numeric = self.frame[NUMERIC].fillna(self.medians)
        self.scaler = StandardScaler()
        self.scaler.fit(numeric)
        self.vectorizer = TfidfVectorizer(analyzer=ingredients_analyzer, lowercase=False)
        self.ingredient_matrix = self.vectorizer.fit_transform(self.frame["ingredients"])
        self.ingredient_weight = float(ingredient_weight)
        self.nutrition_weight = float(nutrition_weight)
        self.matrix = hstack([
            self.ingredient_matrix * self.ingredient_weight,
            csr_matrix(self.scaler.transform(numeric)) * self.nutrition_weight,
        ], format="csr")
        self.model = NearestNeighbors(metric="cosine", algorithm="brute")
        self.model.fit(self.matrix)

    def recommend(self, ingredients: str, targets: dict[str, float | None] | None = None, top_k: int = 3) -> list[dict]:
        targets = targets or {}
        if not str(ingredients).strip() and all(targets.get(k) is None for k in NUMERIC):
            return []
        row = {
            field: float(targets[field]) if targets.get(field) is not None else float(self.medians[field])
            for field in NUMERIC
        }
        # Chỉ dùng transform cho truy vấn: tuyệt đối không fit lại vectorizer/scaler.
        ingredient_query = self.vectorizer.transform([ingredients or ""])
        numeric_query = self.scaler.transform(pd.DataFrame([row], columns=NUMERIC))
        query = hstack([
            ingredient_query * self.ingredient_weight,
            csr_matrix(numeric_query) * self.nutrition_weight,
        ], format="csr")
        n = min(max(int(top_k), 1), len(self.frame))
        distances, indices = self.model.kneighbors(query, n_neighbors=n)
        return [
            {**self.frame.iloc[int(i)].where(pd.notna(self.frame.iloc[int(i)]), None).to_dict(),
             "similarity": round(float(1.0 - d), 4)}
            for d, i in zip(distances[0], indices[0])
        ]


def load_recommender(csv_path: str | Path) -> RecipeRecommender:
    return RecipeRecommender(pd.read_csv(csv_path, encoding="utf-8-sig"))
