"""Ứng dụng Flask demo. Khởi tạo mô hình duy nhất một lần khi tiến trình bắt đầu."""
from pathlib import Path
from flask import Flask, render_template, request
from recommender import NUMERIC, load_recommender

ROOT = Path(__file__).resolve().parent
app = Flask(__name__)
recommender = load_recommender(ROOT / "data" / "recipes_demo.csv")


@app.route("/", methods=["GET", "POST"])
def home():
    results = []
    errors = []
    values = {"ingredients": "", **{k: "" for k in NUMERIC}}
    if request.method == "POST":
        values = {k: str(request.form.get(k, "")).strip() for k in values}
        targets = {}
        for name in NUMERIC:
            raw = values[name]
            if not raw:
                targets[name] = None
                continue
            try:
                num = float(raw)
                if not (0 <= num <= 100_000):
                    raise ValueError("ngoài khoảng")
                targets[name] = num
            except ValueError:
                errors.append(f"{name}: nhập số từ 0 đến 100.000 hoặc để trống.")
        if not errors and not values["ingredients"] and all(v is None for v in targets.values()):
            errors.append("Hãy nhập ít nhất một nguyên liệu hoặc một chỉ tiêu dinh dưỡng.")
        if not errors:
            results = recommender.recommend(values["ingredients"], targets)
    return render_template("index.html", results=results, errors=errors, values=values,
                           nutrition_fields=NUMERIC)


if __name__ == "__main__":
    app.run(debug=True)  # Chỉ dùng trên máy phát triển, không bật debug trong production.
