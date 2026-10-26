"""Chạy: python -m unittest discover -s tests -v (từ thư mục thuc-hanh)."""
import unittest
from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from recommender import NUMERIC, load_recommender


class RecipeRecommenderTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.model = load_recommender(Path(__file__).resolve().parents[1] / "data" / "recipes_demo.csv")

    def test_top_three(self):
        results = self.model.recommend("chicken, rice", top_k=3)
        self.assertEqual(len(results), 3)
        self.assertTrue(all("name" in row for row in results))

    def test_no_input(self):
        self.assertEqual(self.model.recommend("", {}), [])

    def test_ingredients_and_nutrition(self):
        results = self.model.recommend("tofu, broccoli", {"protein_g": 19})
        self.assertEqual(len(results), 3)
        self.assertTrue(all(0 <= row["similarity"] <= 1.00001 for row in results))

    def test_missing_values_are_optional(self):
        self.assertEqual(len(self.model.recommend("egg", {k: None for k in NUMERIC})), 3)


if __name__ == "__main__":
    unittest.main()
