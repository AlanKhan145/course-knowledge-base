from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COURSE_ROOT = (
    ROOT
    / "Khóa học"
    / "06 - Ngôn ngữ"
    / "04 - Tiếng Pháp"
    / "complete-french-course"
)


MODULES = [
    (
        "01 - Beginner Course Chapter 1",
        "Beginner Course: Chapter 1",
        [
            "Greetings",
            "Manners",
            "Numbers",
            "Colors",
            "Food",
            "The Alphabet",
            "Animals",
            "Exercise",
            "Important Verbs Pt. 1",
            "Important Verbs Pt. 2",
            "Practice and Build Part 1",
            "Practice and Build Part 2",
            "Practice and Build Part 3",
            "Practice and Build Part 4",
            "Practice and Build Part 5",
            "Practice and Build Part 6",
            "Practice and Build Part 7",
            "Dates",
            "Telling Time",
            "Être",
            "French for Beginners Quiz (Lessons 1-20 Essentials)",
            "Family",
            "Questions",
            "The Body Parts",
            "Physical Characteristics",
            "Personality",
            "Practice & Build",
            "Giving Directions",
            "The Supermarket",
            "The House",
            "The Bathroom",
            "The Kitchen",
            "Practice & Build",
            "The Direct Object Pronouns",
            "Translation Practice",
            "Clothes",
            "Weather",
            "Sports",
            "Practice & Build",
            "The Garden",
            "Put it all together",
            "French for Beginners Quiz (Lessons 21-40 Essentials)",
            "Le passé",
            "Past Tenses Verbs Pt. 1",
            "Past Tenses Verbs Pt. 2",
            "Past Tense Questions",
            "Past Tenses Verbs Pt. 3",
            "Past Tense Sentences",
            "Practice and Build",
            "Weather in the Past",
            "Shopping in the Past",
            "Sports in the Past",
            "Injuries",
            "To Meet Up With Friends",
            "Practice and Build",
            "Travels",
            "Appointments",
            "Love Pt. 1",
            "Jobs",
            "Practice and Build",
            "Translation",
            "Let’s Put it All Together!",
            "French for Beginners Quiz (Lessons 41-60 Essentials)",
            "Practicing Conversational French at a Café",
        ],
    ),
    (
        "02 - Beginner Course Chapter 2",
        "Beginner Course: Chapter 2",
        [
            "Comparative",
            "Superlative",
            "Music",
            "Cinema",
            "Holidays",
            "Special Occasions Preview",
            "Comparisons of equality",
            "Practice and Build",
            "Means of Transport",
            "School Pt. 1",
            "School Pt. 2",
            "Possessive Adjectives",
            "Practice and Build",
            "Continents and Oceans",
            "Demonstrative Pronouns",
            "Social Media",
            "Love Pt. 2",
            "Technology",
            "Practice and Build",
            "Test your Knowledge",
        ],
    ),
    (
        "03 - Beginner Course Chapter 3",
        "Beginner Course: Chapter 3",
        [
            "Review of the Past Tense Preview",
            "Free Time",
            "Movies and Books",
            "Pets",
            "The Future Pt. 1",
            "The Future Pt. 2",
            "The Future Pt. 3",
            "Practice and Build",
            "Dreams about the Future",
            "Tomorrow’s Weather",
            "To Meet Up With Friends on The Weekend",
            "Future Trips",
            "COVID-19",
            "Health",
            "Practice and Build",
            "Upper Parts of the Body Pt. 1",
            "Upper Parts of the Body Pt. 2",
            "Lower Parts of the Body",
            "Working from Home",
            "Let's Put Everything Together",
            "Cardinal Numbers",
            "TV",
            "TV Shows",
            "Adverbs of Place",
            "Drinks",
            "Accessories",
            "In a Woman's Bag",
            "Translation Practice",
            "The Present Continuous Preview",
            "The Past Continuous",
            "Kitchen Items",
            "Living Room Items",
            "Bathroom Items",
            "Bedroom Items",
            "Translation Practice",
            "Makeup",
            "Likes and Dislikes",
            "Fruits",
            "Vegetables",
            "Put it all together",
        ],
    ),
    (
        "04 - Intermediate Course Chapter 1",
        "Intermediate Course: Chapter 1",
        [
            "Partitive Articles Pt. 1",
            "Partitive Articles Pt. 2",
            "Going to the Doctor’s Office Pt. 1",
            "Going to the Doctor’s Office Pt. 2",
            "Conditional Tense Pt. 1",
            "Conditional Tense Pt. 2",
            "Connectors Pt. 1",
            "Connectors Pt. 2",
            "Learning French with French Songs",
            "Write a Text in the Future Tense",
            "Going to the Bank Pt. 1",
            "Going to the Bank Pt. 2",
            "French Idioms Pt. 1",
            "French Idioms Pt. 2",
            "Interrogative Pronouns",
            "Review the Past Tenses: Past Participle",
            "Review the Past Tenses: Imperfect Tense",
            "Review the Past Tenses: Choose the Right Tense",
            "Going to School",
            "French-Speaking Countries",
            "Adverbs",
            "Passive Voice",
            "Going Out with Friends",
            "French Literature",
            "Homophones Pt. 1",
            "Homophones Pt. 2",
            "Subjunctive Tense Pt. 1",
            "Subjunctive Tense Pt. 2",
            "Working in French Pt. 1",
            "Working in French Pt. 2",
            "The News in French",
            "Common Nouns Gender",
            "Past Participle for Pronominal Verbs",
            "Sending an Email",
            "French Cinema",
            "Pronouns EN and Y",
            "Imperative Tense",
            "Going on a Trip: Transport",
            "Gerund Tense",
            "Accents",
            "Synonyms",
            "Doubles Consonants",
            "Going on a Trip: Accommodation",
            "Debating in French",
        ],
    ),
    (
        "05 - 500 Most Useful French Words",
        "500 Most Useful French Words",
        ["Verbs", "Nouns", "Adjectives", "Adverbs"],
    ),
    (
        "06 - 500 Most Useful French Phrases",
        "500 Most Useful French Phrases",
        ["Travel", "Business", "Restaurant", "Shopping", "School"],
    ),
    (
        "07 - Bonus Learn French with Music",
        "Bonus: Learn French with Music",
        [
            "Part 1",
            "Part 2",
            "Part 3",
            "Part 4",
            "Part 5",
            "Part 6",
            "Part 7",
            "Part 8",
            "Part 9",
            "Part 10",
            "Part 11",
            "Part 12",
            "Part 13",
            "Last Words",
        ],
    ),
]


def slugify(title: str) -> str:
    value = title.lower().replace("œ", "oe").replace("’", "'")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "lesson"


def is_quiz(title: str) -> bool:
    lowered = title.lower()
    return "quiz" in lowered or "test your knowledge" in lowered


def focus_for(title: str) -> tuple[str, list[str]]:
    lowered = title.lower()

    rules: list[tuple[tuple[str, ...], str, list[str]]] = [
        (("quiz", "test your knowledge"), "Ôn tập và kiểm tra tổng hợp các kiến thức đã học trong chặng trước.", ["tự đánh giá mức độ nhớ từ vựng", "nhận diện lỗi ngữ pháp thường gặp", "vận dụng kiến thức vào câu ngắn"]),
        (("greeting",), "Lời chào, giới thiệu bản thân và lựa chọn cách nói phù hợp với hoàn cảnh.", ["chào hỏi trang trọng và thân mật", "giới thiệu tên và hỏi thăm", "kết thúc một cuộc gặp ngắn"]),
        (("manner",), "Các biểu đạt lịch sự để yêu cầu, cảm ơn, xin lỗi và thu hút sự chú ý.", ["s'il vous plaît và merci", "xin phép và xin lỗi", "yêu cầu trong dịch vụ"]),
        (("number", "dates", "time", "cardinal"), "Số đếm và cách dùng trong thời gian, ngày tháng, lịch hẹn và thông tin cá nhân.", ["đọc số rõ ràng", "hỏi và trả lời giờ", "nói ngày, tháng và số thứ tự"]),
        (("color",), "Từ vựng màu sắc, giống của tính từ và cách mô tả đồ vật.", ["màu cơ bản", "hòa hợp giống và số", "mô tả lựa chọn cá nhân"]),
        (("food", "restaurant", "drinks", "vegetable", "fruit", "kitchen", "supermarket", "shopping"), "Từ vựng ăn uống và mua sắm; thực hành gọi món, hỏi giá và mô tả nguyên liệu.", ["tên món và nguyên liệu", "số lượng và giá tiền", "gọi món và thanh toán"]),
        (("alphabet", "accent", "doubles consonant"), "Phát âm và chính tả tiếng Pháp, tập trung vào âm, dấu và các lỗi người mới thường gặp.", ["đọc mặt chữ", "phân biệt âm gần nhau", "tự kiểm tra bằng ghi âm"]),
        (("animal", "pet", "garden", "nature"), "Từ vựng về động vật và thiên nhiên kèm mẫu câu mô tả, sở thích và thói quen.", ["gọi tên và phân loại", "mô tả đặc điểm", "nói về hoạt động của con vật"]),
        (("important verb", "verbs", "être", "exercise"), "Các động từ nền tảng và cách dùng chúng để tạo câu đơn giản ở thì hiện tại.", ["nhận diện chủ ngữ", "chia động từ thường gặp", "đặt câu khẳng định và phủ định"]),
        (("family", "personality", "physical characteristic", "body", "makeup", "clothes", "accessories", "woman's bag"), "Từ vựng mô tả con người, gia đình, ngoại hình, trang phục và vật dụng cá nhân.", ["giới thiệu người thân", "mô tả ngoại hình và tính cách", "nói về đồ đang mặc hoặc mang theo"]),
        (("question", "interrogative"), "Cách đặt câu hỏi để lấy thông tin, xác nhận và duy trì hội thoại.", ["từ để hỏi", "ngữ điệu câu hỏi", "hỏi lại khi chưa hiểu"]),
        (("direction", "transport", "trip", "travel", "accommodation", "holiday"), "Giao tiếp khi di chuyển và du lịch: hỏi đường, phương tiện, đặt chỗ và xử lý tình huống.", ["hỏi và chỉ đường", "mua vé và chọn phương tiện", "đặt phòng hoặc xác nhận lịch trình"]),
        (("house", "bathroom", "living room", "bedroom", "home"), "Từ vựng nhà ở và cách mô tả không gian, đồ vật, vị trí và thói quen trong nhà.", ["gọi tên đồ vật", "mô tả vị trí", "nói về căn phòng của mình"]),
        (("weather",), "Cách mô tả thời tiết ở hiện tại và quá khứ, đồng thời đưa ra kế hoạch hoặc nhận xét.", ["từ vựng thời tiết", "nhiệt độ và điều kiện trời", "liên hệ thời tiết với kế hoạch"]),
        (("sports", "free time", "music", "cinema", "movies", "books", "tv", "social media", "technology"), "Từ vựng về giải trí, truyền thông, công nghệ và hoạt động thời gian rảnh.", ["nói về sở thích", "bày tỏ thích và không thích", "hỏi ý kiến và đề xuất hoạt động"]),
        (("past", "passé", "imperfect", "past participle", "injur"), "Các thì quá khứ và cách chọn hình thức phù hợp khi kể sự kiện, thói quen hoặc bối cảnh.", ["nhận diện mốc thời gian", "phân biệt sự kiện và bối cảnh", "kể lại một trải nghiệm ngắn"]),
        (("future", "tomorrow", "dreams"), "Cách nói về kế hoạch, dự đoán, dự định và ước mơ trong tương lai.", ["dùng cấu trúc tương lai", "nói về kế hoạch cá nhân", "hỏi và trả lời về dự định"]),
        (("comparative", "superlative", "comparison"), "So sánh người, vật và trải nghiệm bằng cấu trúc hơn, nhất và bằng nhau.", ["so sánh hai đối tượng", "nêu lựa chọn tốt nhất", "giải thích lý do"]),
        (("possessive", "demonstrative"), "Tính từ và đại từ chỉ quan hệ sở hữu, khoảng cách, giống và số.", ["nói của ai", "phân biệt đây/đó và số nhiều", "hòa hợp với danh từ"]),
        (("article",), "Mạo từ tiếng Pháp và cách lựa chọn theo giống, số, ngữ cảnh và ý nghĩa số lượng.", ["mạo từ xác định", "mạo từ không xác định", "mạo từ bộ phận và phủ định"]),
        (("pronoun", "en and y", "direct object"), "Đại từ và vị trí của đại từ trong câu nói tự nhiên.", ["nhận diện chức năng đại từ", "đặt đại từ trước động từ", "tránh lặp danh từ"]),
        (("conditional",), "Thì điều kiện để diễn đạt mong muốn, giả định, lời đề nghị lịch sự và khả năng.", ["nhận diện thân động từ", "dùng đuôi điều kiện", "tạo câu nếu và câu lịch sự"]),
        (("subjunctive",), "Thức giả định sau các cấu trúc thể hiện mong muốn, cảm xúc, nghi ngờ, cần thiết hoặc phán đoán.", ["nhận diện từ kích hoạt", "chia một số động từ bất quy tắc", "viết câu có mệnh đề phụ"]),
        (("imperative",), "Thức mệnh lệnh để hướng dẫn, yêu cầu, khuyên bảo và đưa ra chỉ dẫn.", ["chọn dạng tu/vous", "đặt đại từ đúng vị trí", "nói lời hướng dẫn lịch sự"]),
        (("gerund", "continuous"), "Cách diễn đạt hành động đang diễn ra hoặc đồng thời bằng cấu trúc phù hợp.", ["nhận diện hành động nền", "kết hợp hai hành động", "mô tả một quá trình đang diễn ra"]),
        (("connector",), "Từ nối giúp diễn đạt nguyên nhân, kết quả, đối lập, thời gian, ví dụ và kết luận.", ["nối hai ý ngắn", "sắp xếp lập luận", "nói và viết mạch lạc hơn"]),
        (("adverb",), "Trạng từ chỉ cách thức, nơi chốn, thời gian, mức độ và thái độ của người nói.", ["nhận diện vị trí trạng từ", "tạo trạng từ từ tính từ", "chọn trạng từ theo ngữ cảnh"]),
        (("passive",), "Câu bị động và cách chuyển trọng tâm từ người thực hiện sang hành động hoặc kết quả.", ["nhận diện câu bị động", "chọn trợ động từ", "viết lại câu chủ động"]),
        (("homophone",), "Từ đồng âm khác nghĩa và chiến lược dựa vào ngữ cảnh để chọn cách viết đúng.", ["nghe và nhận diện âm", "đối chiếu nghĩa", "sửa lỗi chính tả theo ngữ cảnh"]),
        (("gender",), "Giống danh từ và các dấu hiệu thường gặp để chọn mạo từ, tính từ và đại từ phù hợp.", ["học danh từ cùng mạo từ", "nhận diện hậu tố", "kiểm tra hòa hợp trong câu"]),
        (("idiom", "synonym"), "Thành ngữ, từ đồng nghĩa và sắc thái giúp lời nói tự nhiên, chính xác hơn.", ["đoán nghĩa từ ngữ cảnh", "phân biệt sắc thái", "thay thế từ trong câu"]),
        (("translation",), "Luyện chuyển ý giữa tiếng Việt và tiếng Pháp, ưu tiên nghĩa, trật tự từ và ngữ cảnh.", ["chia câu thành cụm ý", "chọn cấu trúc tự nhiên", "tự đối chiếu và sửa bản dịch"]),
        (("bank", "business", "email", "working", "job", "school"), "Tiếng Pháp thực tế cho học tập, công việc, ngân hàng, email và phỏng vấn.", ["từ vựng theo tình huống", "mẫu câu lịch sự", "đóng vai một cuộc trao đổi ngắn"]),
        (("literature", "news", "french-speaking", "french cinema", "french songs"), "Đọc và nghe tư liệu văn hóa Pháp ngắn để mở rộng vốn từ và hiểu ngữ cảnh.", ["xác định ý chính", "ghi lại từ theo chủ đề", "tóm tắt bằng câu đơn giản"]),
        (("practice", "build", "put it", "review"), "Bài luyện tích hợp giúp chuyển kiến thức thụ động thành phản xạ nói và viết.", ["ôn từ vựng cũ", "kết hợp nhiều cấu trúc", "tự sửa sau khi nói hoặc viết"]),
        (("last words",), "Tổng kết lộ trình, xác định bước học tiếp theo và duy trì thói quen sử dụng tiếng Pháp.", ["tự đánh giá tiến bộ", "chọn mục tiêu 30 ngày", "lập kế hoạch ôn tập"]),
    ]

    for keywords, focus, objectives in rules:
        if any(keyword in lowered for keyword in keywords):
            return focus, objectives

    return (
        "Từ vựng và mẫu câu theo chủ đề, kết hợp nghe, nói, đọc và viết ở mức phù hợp với lộ trình.",
        ["nhận diện từ khóa", "dùng mẫu câu trong ngữ cảnh", "tạo một đoạn hội thoại ngắn"],
    )


def lesson_markdown(module_name: str, module_number: int, lesson_number: int, title: str) -> str:
    quiz = is_quiz(title)
    kind = "Quiz / assessment" if quiz else "Lesson note"
    focus, objectives = focus_for(title)
    objective_lines = "\n".join(f"- [ ] {objective.capitalize()}." for objective in objectives)

    if quiz:
        practice = """## Bài kiểm tra gợi ý

1. Viết nghĩa tiếng Việt của 10 từ hoặc cụm từ quan trọng trong các bài trước.
2. Điền dạng đúng của động từ hoặc mạo từ vào 5 câu.
3. Dịch 5 câu ngắn theo chủ đề đã học.
4. Nói trong 60–90 giây và cố gắng dùng ít nhất 8 mục từ mục tiêu.

Sau khi làm, ghi lại lỗi theo ba nhóm: từ vựng, ngữ pháp và phát âm. Chỉ xem lại đáp án sau khi đã tự sửa lần đầu.
"""
    else:
        practice = """## Hoạt động luyện tập

1. Đọc to các từ khóa và câu mẫu hai lần: một lần chậm, một lần ở tốc độ hội thoại.
2. Viết 5 câu liên quan đến bản thân hoặc một tình huống thực tế.
3. Đóng vai hội thoại ngắn với một người học khác; đổi vai sau mỗi lượt.
4. Ghi âm 60 giây, nghe lại và đánh dấu một lỗi cần sửa trong lần nói tiếp theo.
"""

    return f"""# {lesson_number:03d} - {title}

**Mô-đun:** {module_name}
**Loại bài:** {kind}
**Mã bài:** M{module_number:02d}-L{lesson_number:03d}

---

## Mục tiêu học tập

Sau bài này, người học có thể:

{objective_lines}

## Trọng tâm bài học

{focus}

## Từ khóa cần chuẩn bị

| French | Nghĩa tiếng Việt | Ghi chú phát âm/ngữ pháp |
|---|---|---|
| `mot-clé 1` | từ khóa 1 | ghi chú của người học |
| `mot-clé 2` | từ khóa 2 | ghi chú của người học |
| `expression utile` | cụm từ hữu ích | ngữ cảnh sử dụng |
| `phrase modèle` | câu mẫu | thay thế thành phần trong ngoặc |
| `verbe cible` | động từ trọng tâm | ghi dạng nguyên mẫu và dạng đã chia |

> Hãy bổ sung danh sách từ sau khi xem/nghe nội dung bài. Mỗi từ nên được học cùng mạo từ, từ loại, phát âm và một câu ví dụ.

## Mẫu câu

- `Je voudrais ...` — Tôi muốn ...
- `Pouvez-vous répéter, s'il vous plaît ?` — Bạn có thể nhắc lại không?
- `Je ne comprends pas encore.` — Tôi vẫn chưa hiểu.
- `À mon avis, ...` — Theo ý kiến của tôi, ...

Thay phần `...` bằng từ vựng của bài và đọc thành tiếng ít nhất ba lần.

{practice}

## Tự kiểm tra

- [ ] Tôi nhận diện được từ khóa khi nghe.
- [ ] Tôi phát âm được câu mẫu mà không nhìn từng từ.
- [ ] Tôi tự tạo được ít nhất 5 câu mới.
- [ ] Tôi đã ghi lại lỗi cần sửa.

## Bài tập về nhà

Viết một đoạn 80–120 từ hoặc ghi âm 1–2 phút về chủ đề **{title}**. Cố gắng sử dụng ít nhất 5 từ khóa mới và một cấu trúc ngữ pháp đã học ở mô-đun trước.

> Đây là ghi chú học tập được biên soạn mới theo tiêu đề curriculum công khai; không phải transcript, bản dịch hay bản sao nội dung độc quyền của khóa học nguồn.
"""


def module_readme(module_number: int, folder_name: str, source_name: str, titles: list[str]) -> str:
    links = []
    for index, title in enumerate(titles, 1):
        filename = f"{index:03d} - {slugify(title)}.md"
        kind = "quiz" if is_quiz(title) else "bài học"
        links.append(f"- [{index:03d} - {title}](<{filename}>) — {kind}")
    return f"""# {folder_name}

- **Section tham chiếu:** {source_name}
- **Số file curriculum:** {len(titles)}
- **Định dạng:** một bài học hoặc bài kiểm tra tương ứng với một file Markdown

## Mục tiêu mô-đun

Hoàn thành các file theo thứ tự, đọc thành tiếng câu mẫu, tự bổ sung từ vựng và thực hiện bài tập cuối mỗi file. Các bài được viết như ghi chú học tập nguyên bản để phát triển thành video, slide, audio hoặc worksheet riêng.

## Danh sách bài

{chr(10).join(links)}

## Checklist mô-đun

- [ ] Đã học từng file theo đúng thứ tự.
- [ ] Đã ghi âm ít nhất một bài luyện nói.
- [ ] Đã hoàn thành các quiz/assessment nếu có.
- [ ] Đã ghi lại chủ đề cần ôn lại trước khi sang mô-đun tiếp theo.
"""


def course_index() -> str:
    lines = ["# Complete French Course — Course Index", "", "## Modules", ""]
    for folder_name, source_name, titles in MODULES:
        readme = f"{folder_name}/README.md"
        lines.append(f"- [{source_name}](<{readme}>) — {len(titles)} curriculum items")
        for index, title in enumerate(titles, 1):
            filename = f"{index:03d} - {slugify(title)}.md"
            lines.append(f"  - [{index:03d} - {title}](<{folder_name}/{filename}>)")
        lines.append("")
    return "\n".join(lines)


def course_readme() -> str:
    total_items = sum(len(titles) for _, _, titles in MODULES)
    module_lines = []
    for folder_name, source_name, titles in MODULES:
        module_lines.append(f"- [{source_name}](<{folder_name}/README.md>) — {len(titles)} file")

    return f"""# Complete French Course — Khóa học Markdown

Khóa học tiếng Pháp từ căn bản đến trung cấp, được tổ chức theo curriculum công khai của khóa [Complete French Course: Learn French for Beginners](https://www.udemy.com/course/complete-french-course/).

## Phạm vi

- 7 mô-đun.
- {total_items} file Markdown cho bài học, quiz và phần tổng kết.
- Tiêu đề bài được giữ bằng tiếng Anh để đối chiếu với curriculum nguồn.
- Nội dung trong các file là khung ghi chú học tập được biên soạn mới: mục tiêu, trọng tâm, mẫu câu, hoạt động và bài tập.

Trang Udemy hiện hiển thị 7 sections, 187 lectures và 85 giờ 41 phút; số lượng mục hiển thị trong curriculum có thể lệch một mục do cách Udemy đếm quiz/phần kết khóa học.

## Cách học

1. Mở [COURSE_INDEX.md](<COURSE_INDEX.md>) và học theo thứ tự.
2. Đọc to câu mẫu, tự bổ sung từ vựng và ví dụ vào từng file.
3. Ghi âm phần luyện nói rồi tự đánh dấu lỗi phát âm/ngữ pháp.
4. Sau mỗi mô-đun, làm quiz và viết một đoạn tổng hợp.

## Modules

{chr(10).join(module_lines)}

## Bản quyền và phạm vi sử dụng

Kho này chỉ dùng cấu trúc curriculum công khai và nội dung ghi chú do người học tự phát triển. Không bao gồm video, transcript, PDF, audio, hình ảnh hoặc tài liệu độc quyền của khóa học nguồn. Khi xuất bản khóa học riêng, cần tự sản xuất toàn bộ nội dung, ví dụ, bài tập và tài sản truyền thông.
"""


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    COURSE_ROOT.mkdir(parents=True, exist_ok=True)
    (COURSE_ROOT / "README.md").write_text(course_readme(), encoding="utf-8")
    (COURSE_ROOT / "COURSE_INDEX.md").write_text(course_index(), encoding="utf-8")

    for module_number, (folder_name, source_name, titles) in enumerate(MODULES, 1):
        module_dir = COURSE_ROOT / folder_name
        module_dir.mkdir(parents=True, exist_ok=True)
        (module_dir / "README.md").write_text(
            module_readme(module_number, folder_name, source_name, titles),
            encoding="utf-8",
        )
        for lesson_number, title in enumerate(titles, 1):
            filename = f"{lesson_number:03d} - {slugify(title)}.md"
            (module_dir / filename).write_text(
                lesson_markdown(source_name, module_number, lesson_number, title),
                encoding="utf-8",
            )

    print(f"Created course at: {COURSE_ROOT}")
    print(f"Modules: {len(MODULES)}")
    print(f"Curriculum item files: {sum(len(titles) for _, _, titles in MODULES)}")


if __name__ == "__main__":
    main()
