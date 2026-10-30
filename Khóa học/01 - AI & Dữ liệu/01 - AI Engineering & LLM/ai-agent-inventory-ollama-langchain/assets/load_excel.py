"""Nạp dữ liệu demo CSV hoặc Excel vào SQLite (chạy bằng Python)."""
from contextlib import closing
from pathlib import Path
import sqlite3
import pandas as pd

ROOT = Path(__file__).resolve().parent
CSV_PATH = ROOT / "grocery_data.csv"
XLSX_PATH = ROOT / "grocery_data.xlsx"
DB_PATH = ROOT / "grocery_data.db"
FIELDS = [
    "sku", "inventory", "daily_order_quantity", "expiration_date",
    "unit_price", "reorder_point", "safety_stock"
]
INTEGER_FIELDS = ["inventory", "daily_order_quantity", "reorder_point", "safety_stock"]


def load_data():
    if XLSX_PATH.is_file():
        df = pd.read_excel(XLSX_PATH)
        source = XLSX_PATH
    elif CSV_PATH.is_file():
        df = pd.read_csv(CSV_PATH)
        source = CSV_PATH
    else:
        raise FileNotFoundError("Cần grocery_data.xlsx hoặc grocery_data.csv")

    df.columns = [str(c).strip().lower().replace(" ", "_") for c in df.columns]
    missing = set(FIELDS) - set(df.columns)
    if missing:
        raise ValueError(f"Thiếu cột: {sorted(missing)}")
    df = df[FIELDS].copy()
    df["sku"] = df["sku"].astype("string").str.strip()
    if df["sku"].isna().any() or df["sku"].eq("").any():
        raise ValueError("SKU không được để trống")
    if df["sku"].duplicated().any():
        raise ValueError("SKU bị trùng; cần xác định quy tắc gộp trước khi nạp")
    for col in INTEGER_FIELDS:
        num = pd.to_numeric(df[col], errors="raise")
        if num.isna().any() or (num < 0).any() or (num != num.astype(int)).any():
            raise ValueError(f"Cột {col} phải là số nguyên không âm")
        df[col] = num.astype("int64")
    df["unit_price"] = pd.to_numeric(df["unit_price"], errors="raise")
    if df["unit_price"].isna().any() or (~df["unit_price"].map(lambda x: float('-inf') < float(x) < float('inf'))).any() or (df["unit_price"] < 0).any():
        raise ValueError("Đơn giá phải là số hữu hạn không âm")
    # Chuyển ngày sang ISO để SQLite lưu chuỗi có thể so sánh theo thứ tự.
    df["expiration_date"] = pd.to_datetime(df["expiration_date"], errors="raise").dt.strftime("%Y-%m-%d")
    if df["expiration_date"].isna().any():
        raise ValueError("Ngày hết hạn không hợp lệ")
    with closing(sqlite3.connect(DB_PATH)) as conn:
        df.to_sql("report", conn, if_exists="replace", index=False)
        conn.commit()
    print(f"Đã nạp {len(df)} SKU từ {source.name} sang {DB_PATH.name} (bảng report)")


if __name__ == "__main__":
    load_data()
