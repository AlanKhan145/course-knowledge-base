"""Kiểm tra bảng SQLite sau bước ETL."""
import sqlite3
from pathlib import Path

DB = Path(__file__).resolve().parent / "grocery_data.db"
if not DB.is_file():
    raise FileNotFoundError("Chạy python load_excel.py trước")

with sqlite3.connect(DB) as conn:
    count = conn.execute("SELECT COUNT(*) FROM report").fetchone()[0]
    preview = conn.execute("SELECT sku, inventory, unit_price FROM report LIMIT 5").fetchall()
    sku = conn.execute(
        "SELECT inventory, unit_price FROM report WHERE sku = ?", ("SKU-02",)
    ).fetchone()
print(f"Số SKU: {count}")
print("Năm hàng đầu:", preview)
print("SKU-02:", sku)
assert sku is not None and sku[0] == 475 and sku[1] == 28.0
