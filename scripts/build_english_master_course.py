"""Build a local, source-grounded scaffold for The English Master Course.

The source exposes section and lecture titles publicly, but the /learn page is
login-gated. This script stores titles and blank note scaffolds only; it does
not copy video, transcripts, PDFs, quizzes, or paid course content.
"""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COURSE = (
    ROOT
    / "Khóa học"
    / "06 - Ngôn ngữ"
    / "01 - Tiếng Anh"
    / "the-english-master-course-english-grammar-speaking"
)


SECTIONS = [
    ("Getting Started", 7),
    ("How English Works - A Quick Review", 8),
    ("New Course Upgrade!", 1),
    ("English Grammar Section", 1),
    ("Verb Tenses", 1),
    ("Verb Conjugation (1st, 2nd. 3rd Person)", 4),
    ("Subject-Verb Agreement", 4),
    ("Simple Present Tense", 4),
    ("Simple Past Tense", 4),
    ("Simple Future Tense", 4),
    ("Present Continuous Tense", 4),
    ("Past Continuous Tense", 4),
    ("Future Continuous Tense", 4),
    ("The Present Participle -ing", 4),
    ("The Gerund -ing", 4),
    ("Past Participle - ed", 4),
    ("Present Perfect Tense", 4),
    ("Past Perfect Tense", 4),
    ("Future Perfect Tense", 4),
    ("Present Perfect Continuous Tense", 4),
    ("Past Perfect Continuous Tense", 4),
    ("Future Perfect Continuous Tense", 4),
    ("Helping (Auxiliary) and Modal Verbs", 1),
    ("Helping Verb - To Be", 4),
    ("Helping Verb - To Do, To Have", 4),
    ("Modal Verb - Can, Could", 4),
    ("Modal Verb - Will, Would", 4),
    ("Modal Verb - Shall, Should", 4),
    ("Modal Verb - Must, May, Might", 4),
    ("Phrasal Verbs", 1),
    ("Phrasal Verbs - Carry on, Put Off", 4),
    ("Phrasal Verbs - Turn Down, Break Up", 4),
    ("Phrasal Verbs - Give Up, Turn Out", 4),
    ("Nouns and Pronouns", 1),
    ("Common Nouns", 4),
    ("Proper Nouns", 4),
    ("Subject Pronouns", 4),
    ("Object Pronouns", 4),
    ("Possessive Nouns", 4),
    ("Possessive Pronouns", 4),
    ("Concrete Nouns", 4),
    ("Abstract Nouns", 4),
    ("Material and Compound Nouns", 4),
    ("Countable VS Uncountable Nouns", 4),
    ("Collective Nouns", 4),
    ("Articles and Demonstratives", 1),
    ("A, An, The", 4),
    ("This, That, These, Those", 4),
    ("Adjectives", 1),
    ("Adjectives and Adverbs - An Overview", 4),
    ("Descriptive Adjectives", 4),
    ("Proper Adjectives", 4),
    ("Possessive Adjectives", 4),
    ("Comparative Adjectives", 4),
    ("Superlative Adjectives", 4),
    ("Limiting Adjectives", 4),
    ("Pronominal Adjectives", 4),
    ("Adverbs", 1),
    ("How to Form Adverbs", 4),
    ("Adverbs of Manner", 4),
    ("Adverbs of Frequency", 4),
    ("Adverbs of Place", 4),
    ("Adverbs of Time", 4),
    ("Adverbs of Degree", 4),
    ("Comparative and Superlative Adverbs", 4),
    ("Order of Adverbs in a Sentence", 4),
    ("Distributives Quantifier and Pre-determiners", 1),
    ("All - Half", 4),
    ("Each - Every", 4),
    ("Both - Either - Neither", 4),
    ("A Few - A Little", 4),
    ("A Lot of - Most", 4),
    ("Much - Many", 4),
    ("Some - Any - Enough", 4),
    ("What - Rather - Quite", 4),
    ("Prepositions", 1),
    ("Prepositions - What Are They?", 4),
    ("Prepositions of Time", 4),
    ("Prepositions of Place", 4),
    ("Prepositions of Manner", 4),
    ("Prepositions of Direction and Motion", 4),
    ("Prepositions of Cause Purpose and Reason", 4),
    ("Prepositional Phrases", 4),
    ("Clauses", 1),
    ("Clauses - What Are They?", 4),
    ("Independent Clauses", 4),
    ("Dependent (Subordinate) Clauses", 4),
    ("Noun Clauses", 4),
    ("Adjective (Relative) Clauses", 4),
    ("Adverb Clauses", 4),
    ("Conjunctions", 1),
    ("Conjunctions - What Are They?", 4),
    ("Coordinating Conjunctions", 4),
    ("Subordinating Conjunctions", 4),
    ("Compound Conjunctions", 4),
    ("Correlative Conjunctions", 4),
    ("Pseudo Conjunctions", 4),
    ("Conditionals", 1),
    ("Conditionals - What Are They?", 4),
    ("Conditionals - Type 0", 4),
    ("Conditionals - Type 1", 4),
    ("Conditionals - Type 2", 4),
    ("Conditionals - Type 3", 4),
    ("Conditionals - Type Mixed", 4),
    ("Stand Alone Topics", 1),
    ("Passive Voice VS Active Voice", 4),
    ("Reported Speech", 4),
    ("Common Mistakes", 1),
    ("Fewer VS Less - Then VS Than", 4),
    ("There VS Their VS They're - To VS Too VS Two", 4),
    ("Your vs You're - Its vs It's", 2),
    ("English Writing Section", 1),
    ("Four Sentence Types and Structures", 2),
    ("English Punctuation Marks", 15),
    ("English Speaking Section", 1),
    ("Introductions in Informal Settings", 9),
    ("Introductions in Formal Settings", 7),
    ("Small Talk", 11),
    ("Hobbies and Interests", 11),
    ("Family", 9),
    ("Business Communication", 9),
    ("Daily Work Routine", 11),
    ("Job Hunting", 9),
    ("Unemployment", 11),
    ("Countries and Nationalities", 9),
    ("Dates", 9),
    ("Days and Months", 9),
    ("Directions", 11),
    ("Expressing Feelings", 9),
    ("Geography and Nature", 9),
    ("Holidays", 9),
    ("Spring Holidays", 9),
    ("Summer Holidays", 9),
    ("Fall Holidays", 9),
    ("Winter Holidays", 9),
    ("Money", 11),
    ("Numbers", 9),
    ("Opposites", 9),
    ("Question Words", 9),
    ("Seasons and Weather", 9),
    ("Sports", 9),
    ("Telling Time", 9),
    ("Accent Reduction Training - Perfect English Pronunciation", 5),
    ("Understand and Learn all the English Sound for a Perfect Accent", 4),
    ("American Accent (Male): Weekly English Pronunciation Practice Packs", 10),
    ("American Accent (Female): Weekly English Pronunciation Practice Packs", 10),
    ("British Accent (Male): Weekly English Pronunciation Practice Packs", 10),
    ("British Accent (Female): Weekly English Pronunciation Practice Packs", 10),
    ("Daily Life Conversation Coach", 0),
    ("Business English Coach - Master Interviews, Presentations and Negotiation", 0),
    ("English Exam Coach: TOEIC / IELTS / TOEFL", 0),
    ("IELTS Upgrade and Practice", 4),
    ("TOEIC Upgrade and Practice", 0),
    ("Interactive English Practice Exams and Quizzes", 0),
]


FIRST_LESSONS = {
    1: [
        "Welcome and Course Introduction",
        "Course Navigation and Course Outline",
        "Course Review, Course Certificate",
        "Your Own Personal English Coaches (New Feature)",
        "PDFs, Q/A, Contacting Me, Reporting Issues",
        "How to Study this Course, Study techniques, Video Play Speed",
        "Helpful Resources",
    ],
    2: [
        "Section Overview - English Language",
        "The Parts of an English Sentence - English Grammar",
        "Nouns - English Grammar",
        "Verbs - English Grammar",
        "Objects: A Closer Look - English Grammar",
        "Adjectives, Adverbs, Determiners, and More - English Grammar",
        "Prepositions - English Grammar",
        "Conjunctions - English Grammar",
    ],
    3: ["Learn About the New Course Upgrade!"],
    4: ["English Grammar Section"],
    115: ["English Speaking Section"],
}


OVERVIEW_SECTIONS = {
    5,
    23,
    30,
    34,
    46,
    49,
    58,
    67,
    76,
    84,
    91,
    98,
    105,
    108,
}


PUNCTUATION_LESSONS = [
    "Period",
    "Question Marks",
    "Exclamation Point",
    "Comma",
    "Semicolon",
    "Colon",
    "Apostrophe",
    "Quotation Marks",
    "Parentheses",
    "Braces",
    "Brackets",
    "Hyphen",
    "Dash",
    "Ellipsis",
    "How to use i.e. - e.g. - etc.",
]


ACCENT_REDUCTION_LESSONS = [
    "How to use the Accent Reduction Training - Perfect English Pronunciation section",
    "Understand Linking and Stress in the English Language",
    "How to Pronounce all the Variations of the ending -ed",
    "How to Pronounce all the Variations of the ending -ing",
    "R Sound in American and British Accent",
]


SOUND_LESSONS = [
    "Single Vowel Sounds for English Pronunciation",
    "Double Vowel Sounds for English Pronunciation",
    "Unvoiced Consonant Sounds for English Pronunciation",
    "Voiced Consonant Sounds for English Pronunciation",
]


def safe_name(value: str, limit: int = 120) -> str:
    """Make a readable Windows-safe filename while retaining the title."""

    value = re.sub(r"[<>:\"/\\|?*]", " - ", value)
    value = re.sub(r"\s+", " ", value).strip().rstrip(".")
    return value[:limit].rstrip(" .")


def speaking_lessons(section_number: int, count: int) -> list[str]:
    """Return the recurring speaking lesson pattern shown in the index."""

    first = "Build Better Sentences"
    if section_number == 135:
        first += " - English Speaking"
    if section_number == 137:
        first += " - English Speaking (Numbers)"
    if section_number == 142:
        first += " - English Language & English Speaking Skills"
    lessons = [first, "Vocabulary Upgrade - American Accent"]
    american_count = 4 if count == 11 else 3 if count == 9 else 2
    lessons.extend(
        f"Conversation Practice {number} - American Accent"
        for number in range(1, american_count + 1)
    )
    lessons.append("Vocabulary Upgrade - British Accent")
    lessons.extend(
        f"Conversation Practice {number} - British Accent"
        for number in range(1, american_count + 1)
    )
    return lessons


def lesson_titles(section_number: int, section_name: str, count: int) -> list[str]:
    if section_number in FIRST_LESSONS:
        return FIRST_LESSONS[section_number]
    if section_number in OVERVIEW_SECTIONS:
        return [f"{section_name} - Section Overview"]
    if section_number == 111:
        return [f"Learn it! - {section_name}", f"Review it! - {section_name}"]
    if section_number == 112:
        return ["Overview and PDFs"]
    if section_number == 113:
        return ["Four Sentence Types", "Four Sentence Structures"]
    if section_number == 114:
        return PUNCTUATION_LESSONS
    if 116 <= section_number <= 142:
        return speaking_lessons(section_number, count)
    if section_number == 143:
        return ACCENT_REDUCTION_LESSONS
    if section_number == 144:
        return SOUND_LESSONS
    if 145 <= section_number <= 148:
        accent = section_name.split(":", 1)[0]
        return [
            f"{accent}: Single Vowel Sounds",
            f"{accent}: Double Vowel Sounds",
            f"{accent}: Unvoiced Consonant Sounds",
            f"{accent}: Voiced Consonant Sounds",
            *(
                f"{accent}: English Pronunciation Practice Pack {number}"
                for number in range(1, 7)
            ),
        ]
    if section_number == 152:
        return [
            f"IELTS - Grammar and Sentence Structure Quick Review {number}"
            for number in range(1, 5)
        ]
    return [
        f"{prefix} - {section_name}"
        for prefix in ("Learn it!", "Review it!", "Use it!", "Practice it!")
    ][:count]


def rel_link(path: Path) -> str:
    return f"<{path.as_posix()}>"


def module_dir(number: int, name: str) -> Path:
    return COURSE / f"{number:03d} - {safe_name(name)}"


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")


def build() -> None:
    if COURSE.exists():
        raise SystemExit(
            f"Refusing to overwrite an existing course directory: {COURSE}"
        )

    records: list[dict[str, object]] = []
    for number, (name, expected_count) in enumerate(SECTIONS, start=1):
        titles = lesson_titles(number, name, expected_count)
        if len(titles) != expected_count:
            raise ValueError(
                f"Section {number} {name!r}: expected {expected_count}, got {len(titles)}"
            )
        records.append({"number": number, "name": name, "lessons": titles})

    lesson_count = sum(len(record["lessons"]) for record in records)
    if len(records) != 154 or lesson_count != 726:
        raise ValueError(
            f"Unexpected curriculum size: {len(records)} sections, {lesson_count} lessons"
        )

    course_readme = f"""# The English Master Course: English Grammar, English Speaking

Đây là bộ khung ghi chú cục bộ cho khóa học Udemy **The English Master Course: English Grammar, English Speaking**.

- **Cấu trúc:** {len(records)} module / {lesson_count} bài học được lập chỉ mục
- **Nguồn tên bài:** [trang khóa học công khai trên Udemy](https://www.udemy.com/course/learn-english-grammar-online/)
- **Bản đối chiếu curriculum chi tiết:** [studyvn.academy](https://studyvn.academy/learn-english-grammar-online/) (nguồn bên thứ ba, dùng để đọc danh sách công khai)
- **Ngày đối chiếu:** 2026-09-04
- **Tác giả trên trang nguồn:** Scott Mendoza

## Phạm vi và lưu ý bản quyền

Trang `/learn` yêu cầu đăng nhập/quyền truy cập. Kho này chỉ ghi lại tên section/bài giảng được hiển thị công khai và tạo khung ghi chú mới. Không có video, transcript, PDF, câu hỏi quiz, đáp án hay nội dung trả phí nào được sao chép.

Các module 149–151, 153–154 không có tên bài giảng riêng trong snapshot chỉ mục công khai đã đối chiếu; chúng được giữ lại với số lượng bài là 0 để bảo toàn cấu trúc 154 module / 726 bài học.

## Điều hướng

- [COURSE_INDEX.md](<./COURSE_INDEX.md>) — danh sách đầy đủ 154 module và tất cả bài học
- [LESSON_TEMPLATE.md](<./LESSON_TEMPLATE.md>) — mẫu để bổ sung ghi chú sau khi học hợp pháp

Mỗi thư mục module có README riêng; mỗi bài học có một file Markdown khung để ghi mục tiêu, quy tắc, ví dụ và bài tập tự tạo.
"""
    write_text(COURSE / "README.md", course_readme)

    template = """# Lesson title

## Mục tiêu học tập

- 

## Từ khóa / quy tắc chính

- 

## Ví dụ tự tạo

1. 

## Bài tập tự luyện

1. 

## Ghi chú sau khi học

- Trạng thái: Chưa học
- Ngày học: 
- Câu hỏi cần làm rõ: 

> Khung này do kho học tập tự tạo. Chỉ bổ sung nội dung từ tài liệu mà bạn có quyền truy cập.
"""
    write_text(COURSE / "LESSON_TEMPLATE.md", template)

    index_lines = [
        "# Course Index — The English Master Course",
        "",
        f"> Snapshot: 154 module / {lesson_count} bài học. Tên bài được đối chiếu từ curriculum công khai; nội dung bài học chưa được sao chép.",
        "",
    ]

    for record in records:
        number = int(record["number"])
        name = str(record["name"])
        titles = list(record["lessons"])
        directory = module_dir(number, name)
        directory.mkdir(parents=True, exist_ok=True)
        index_lines.append(
            f"## {number:03d}. {name} ({len(titles)} bài học)"
        )
        index_lines.append("")
        index_lines.append(
            f"Module README: {rel_link(Path(directory.name) / 'README.md')}"
        )
        module_lines = [
            f"# {number:03d}. {name}",
            "",
            f"- **Số bài:** {len(titles)}",
            "- **Nguồn:** curriculum công khai của khóa học; xem [COURSE_INDEX.md](<../COURSE_INDEX.md>)",
            "",
            "## Danh sách bài học",
            "",
        ]
        if not titles:
            module_lines.extend(
                [
                    "> Chưa có tên bài giảng riêng trong snapshot công khai; module này được giữ như một placeholder để cập nhật khi có quyền truy cập.",
                    "",
                ]
            )
            write_text(directory / "README.md", "\n".join(module_lines))
            index_lines.extend(
                [
                    "",
                    "> Chưa có tên bài giảng riêng trong snapshot công khai; module này được giữ như một placeholder để cập nhật khi có quyền truy cập.",
                    "",
                ]
            )
            continue
        for lesson_number, title in enumerate(titles, start=1):
            filename = f"{lesson_number:03d} - {safe_name(title)}.md"
            lesson_path = directory / filename
            write_text(
                lesson_path,
                f"""# {title}

- **Module:** {number:03d}. {name}
- **Bài:** {lesson_number}/{len(titles)}
- **Trạng thái:** Chưa học

## Mục tiêu học tập

- 

## Từ khóa / quy tắc chính

- 

## Ví dụ tự tạo

1. 

## Bài tập tự luyện

1. 

## Ghi chú sau khi học

- Ngày học: 
- Câu hỏi cần làm rõ: 

> Đây là khung ghi chú mới, không phải transcript hay bản sao nội dung bài giảng.
""",
            )
            relative = Path(directory.name) / filename
            module_lines.append(f"- [{lesson_number:03d}. {title}]({rel_link(Path(filename))})")
            index_lines.append(
                f"- [{lesson_number:03d}. {title}]({rel_link(relative)})"
            )
        module_lines.append("")
        write_text(directory / "README.md", "\n".join(module_lines))
        index_lines.append("")

    write_text(COURSE / "COURSE_INDEX.md", "\n".join(index_lines))
    print(f"Created {len(records)} modules and {lesson_count} lesson scaffolds")


if __name__ == "__main__":
    build()
