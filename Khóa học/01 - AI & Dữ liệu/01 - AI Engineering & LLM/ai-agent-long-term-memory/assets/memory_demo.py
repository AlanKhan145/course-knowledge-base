"""Lab minh họa: CRUD ký ức dài hạn có cấu trúc bằng thư viện chuẩn Python.

Không dùng LLM và không tự suy luận thông tin từ câu chat tự nhiên.
Chạy: python assets/memory_demo.py
"""
from __future__ import annotations

import sqlite3
import uuid
from pathlib import Path

CATEGORIES = {"like", "dislike", "allergy", "attribute"}


class MemoryRepository:
    def __init__(self, db_path=":memory:"):
        self.db = sqlite3.connect(db_path)
        self.db.row_factory = sqlite3.Row
        schema = Path(__file__).with_name("schema.sql").read_text(encoding="utf-8")
        self.db.executescript(schema)

    def create(self, user_id: str, subject: str, category: str, value: str) -> str:
        self._validate(user_id, subject, category, value)
        memory_id = uuid.uuid4().hex
        self.db.execute(
            "INSERT INTO memories(memory_id,user_id,subject,category,value) VALUES(?,?,?,?,?)",
            (memory_id, user_id, subject, category, value),
        )
        self.db.commit()
        return memory_id

    def update(self, user_id: str, memory_id: str, new_value: str) -> None:
        if not new_value.strip():
            raise ValueError("new_value không được rỗng")
        cursor = self.db.execute(
            "UPDATE memories SET value=?, updated_at=CURRENT_TIMESTAMP "
            "WHERE memory_id=? AND user_id=? AND active=1",
            (new_value.strip(), memory_id, user_id),
        )
        if cursor.rowcount != 1:
            raise LookupError("Không tìm thấy ký ức có thể cập nhật")
        self.db.commit()

    def delete(self, user_id: str, memory_id: str) -> None:
        cursor = self.db.execute(
            "UPDATE memories SET active=0, updated_at=CURRENT_TIMESTAMP "
            "WHERE memory_id=? AND user_id=? AND active=1",
            (memory_id, user_id),
        )
        if cursor.rowcount != 1:
            raise LookupError("Không tìm thấy ký ức có thể xóa")
        self.db.commit()

    def list_active(self, user_id: str, category: str | None = None) -> list[dict]:
        if category is not None and category not in CATEGORIES:
            raise ValueError("category không hợp lệ")
        sql = "SELECT memory_id, subject, category, value FROM memories WHERE user_id=? AND active=1"
        params = [user_id]
        if category is not None:
            sql += " AND category=?"
            params.append(category)
        sql += " ORDER BY category, subject, created_at"
        return [dict(row) for row in self.db.execute(sql, params).fetchall()]

    @staticmethod
    def _validate(user_id: str, subject: str, category: str, value: str) -> None:
        if not (user_id.strip() and subject.strip() and value.strip()):
            raise ValueError("user_id, subject, value phải có nội dung")
        if category not in CATEGORIES:
            raise ValueError("category không hợp lệ")

    def close(self):
        self.db.close()


def demo():
    # Dùng :memory: để mỗi lần chạy độc lập; thay bằng file .sqlite3 để lưu đa phiên.
    repository = MemoryRepository(":memory:")
    user_id = "demo_user"
    family_id = repository.create(user_id, "family", "attribute", "6 thành viên")
    repository.create(user_id, "wife", "dislike", "thịt")
    repository.create(user_id, "youngest_daughter", "allergy", "sữa")
    taco_id = repository.create(user_id, "user", "like", "taco")
    print("Sau khi tạo:")
    for record in repository.list_active(user_id):
        print(record["category"], record["subject"], record["value"])

    repository.update(user_id, family_id, "7 thành viên")
    repository.delete(user_id, taco_id)
    print("\nSau khi cập nhật gia đình và xóa sở thích taco:")
    for record in repository.list_active(user_id):
        print(record["category"], record["subject"], record["value"])
    assert len(repository.list_active(user_id)) == 3
    assert repository.list_active("other_user") == []
    repository.close()


if __name__ == "__main__":
    demo()
