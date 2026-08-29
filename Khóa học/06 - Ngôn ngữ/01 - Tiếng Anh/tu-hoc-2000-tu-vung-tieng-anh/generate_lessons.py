from pathlib import Path
import re

lessons = [
    ("01", "Character"), ("02", "Words of People"), ("03", "Parts of the Body"), ("04", "Face and Hair"),
    ("05", "Appearance"), ("06", "Body Movement"), ("07", "Feelings and Emotions"), ("08", "Health and Diseases"),
    ("09", "Marriage"), ("10", "Family"), ("11", "Jobs"), ("12", "Education"),
    ("13", "Subjects and School Objects"), ("14", "Clothes"), ("15", "Office Equipment"), ("16", "Travel and Holidays"),
    ("17", "House"), ("18", "Bedroom"), ("19", "Living Room"), ("20", "Kitchen"),
    ("21", "Bathroom"), ("22", "Food"), ("23", "Vietnamese Food"), ("24", "Drinks"),
    ("25", "Vegetables"), ("26", "Fruits"), ("27", "Trees and Plants"), ("28", "Birds"),
    ("29", "Underwater Animals"), ("30", "Animals"), ("31", "Sports"), ("32", "Music"),
    ("33", "Transportation"), ("34", "Hotel and Accommodation"), ("35", "Restaurant"), ("36", "Weather"),
    ("37", "Business"), ("38", "Computer"), ("39", "The Earth"),
]
groups = [("Module 01 - People and Body", lessons[:8]), ("Module 02 - Family and Daily Life", lessons[8:16]),
          ("Module 03 - Home and Food", lessons[16:27]), ("Module 04 - Animals and Nature", lessons[27:30]),
          ("Module 05 - Hobbies and Travel", lessons[30:36]), ("Module 06 - Work and World", lessons[36:])]

def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

root = Path(__file__).parent
for module, items in groups:
    folder = root / module
    folder.mkdir(exist_ok=True)
    for no, title in items:
        path = folder / f"{no}-{slug(title)}.md"
        path.write_text(f"""# Bài {int(no)}: {title}\n\n## Mục tiêu bài học\n\n- [ ] Nhận diện và phát âm đúng từ vựng chủ đề **{title}**.\n- [ ] Ghi nhớ khoảng 50 từ/cụm từ trọng tâm.\n- [ ] Đặt câu và sử dụng từ trong tình huống thực tế.\n\n## 1. Từ vựng trọng tâm\n\n> Tự bổ sung danh sách từ vào bảng dưới đây. Mỗi bài nên có 45–55 mục từ.\n\n| # | English | Từ loại | Nghĩa tiếng Việt | Ví dụ | Đã nhớ |\n|---:|---|---|---|---|:---:|\n| 1 |  |  |  |  | ☐ |\n| 2 |  |  |  |  | ☐ |\n| 3 |  |  |  |  | ☐ |\n| 4 |  |  |  |  | ☐ |\n| 5 |  |  |  |  | ☐ |\n| … | *(tiếp tục đến 50 từ)* |  |  |  | ☐ |\n\n## 2. Cụm từ cần nhớ\n\n- **Cụm từ 1:** —\n- **Cụm từ 2:** —\n- **Cụm từ 3:** —\n- **Cụm từ 4:** —\n- **Cụm từ 5:** —\n\n## 3. Câu mẫu\n\n1. English: \n   - Tiếng Việt: \n2. English: \n   - Tiếng Việt: \n3. English: \n   - Tiếng Việt: \n\n## 4. Bài tập\n\n### A. Nối từ với nghĩa\n\n| Từ | Nghĩa | Đáp án |\n|---|---|---|\n| 1.  | a.  |  |\n| 2.  | b.  |  |\n| 3.  | c.  |  |\n\n### B. Điền từ\n\n1. ________________________________________________\n2. ________________________________________________\n3. ________________________________________________\n\n### C. Nói và viết\n\n- Nói trong 60 giây về chủ đề **{title}**, dùng ít nhất 10 từ mới.\n- Viết 5 câu, sau đó tự kiểm tra từ loại, chính tả và thì.\n\n## 5. Ôn tập\n\n- Ngày 1: học và nghe phát âm.\n- Ngày 2: kiểm tra không nhìn nghĩa.\n- Ngày 4: đặt câu mới.\n- Ngày 7: làm lại bài tập.\n- Ngày 14 và 30: ôn tổng hợp.\n\n### Ghi chú cá nhân\n\n- Từ dễ nhầm: \n- Phát âm cần luyện: \n- Câu muốn ghi nhớ: \n""", encoding="utf-8")
print(f"Created {sum(len(x[1]) for x in groups)} lesson files")
