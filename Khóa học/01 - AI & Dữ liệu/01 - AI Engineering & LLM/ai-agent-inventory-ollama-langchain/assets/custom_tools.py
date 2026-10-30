"""Tool tính giá trị tồn kho lý thuyết (không phải doanh thu thực tế)."""
from decimal import Decimal, InvalidOperation
from langchain_core.tools import tool


@tool
def calculate_max_revenue(tool_input: str) -> str:
    """Calculate potential inventory sale value from 'quantity,unit_price'.

    Input must be two nonnegative numbers separated by one comma, e.g. '475,28'.
    Value is theoretical, not realized sales revenue.
    """
    try:
        parts = tool_input.split(",")
        if len(parts) != 2:
            return "Lỗi: nhập hai số theo dạng quantity,unit_price; ví dụ 475,28."
        raw_qty, raw_price = (part.strip() for part in parts)
        quantity = int(raw_qty)
        price = Decimal(raw_price)
        if quantity < 0 or price < 0 or not price.is_finite():
            return "Lỗi: số lượng và giá phải hữu hạn, không âm."
        return f"{Decimal(quantity) * price:.2f}"
    except (ValueError, InvalidOperation):
        return "Lỗi: đầu vào không hợp lệ."
