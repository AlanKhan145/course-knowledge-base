from pathlib import Path


WORKSPACE = Path(r"D:\Sao lưu\Udemy")
OUTER = WORKSPACE / "english-for-everyday-life"
COURSE = OUTER / "English-for-Everyday-Life"


modules = [
    {
        "num": 1,
        "name": "Connect",
        "vn": "Kết nối và giao tiếp xã hội",
        "description": "Học cách bắt đầu cuộc trò chuyện, thể hiện cảm xúc và xây dựng tương tác với người khác.",
        "lessons": [
            (1, "Bắt đầu một cuộc trò chuyện", "Chào hỏi, hỏi thăm và mở đầu giao tiếp."),
            (2, "Rủ ai đó cùng tham gia", "Đưa ra lời mời, nhận lời và từ chối lịch sự."),
            (3, "Chia sẻ niềm vui và lời chúc", "Chúc mừng và phản hồi những tin vui."),
            (4, "Nói về sở thích cá nhân", "Diễn đạt điều mình thích, không thích và quan tâm."),
            (5, "Đưa ra gợi ý và phương án", "Đề xuất ý tưởng và cùng người khác đưa ra quyết định."),
        ],
    },
    {
        "num": 2,
        "name": "Everyday Conversations",
        "vn": "Những cuộc hội thoại thường ngày",
        "description": "Phát triển khả năng sử dụng tiếng Anh trong những tình huống thường xuyên xuất hiện trong đời sống.",
        "lessons": [
            (6, "Tìm đường và xác định địa điểm", "Hỏi đường, chỉ đường và mô tả vị trí."),
            (7, "Giờ giấc, lịch trình và cuộc hẹn", "Hỏi giờ, sắp xếp lịch và xác nhận thời gian."),
            (8, "Trò chuyện về thời tiết", "Mô tả thời tiết và dùng thời tiết để mở đầu cuộc trò chuyện."),
            (9, "Một buổi đi xem phim", "Nói về thể loại phim, mua vé và chia sẻ cảm nhận."),
            (10, "Nhờ người khác hỗ trợ", "Yêu cầu giúp đỡ và phản hồi một cách lịch sự."),
            (11, "Đi xem biểu diễn âm nhạc", "Trao đổi về âm nhạc, nghệ sĩ và các sự kiện biểu diễn."),
            (12, "Giao tiếp trong thế giới trực tuyến", "Nói về Internet, website, email và hoạt động trực tuyến."),
        ],
    },
    {
        "num": 3,
        "name": "Travel Ready",
        "vn": "Tiếng Anh cho những chuyến đi",
        "description": "Trang bị những mẫu câu quan trọng khi sử dụng tiếng Anh trong quá trình di chuyển và du lịch.",
        "lessons": [
            (13, "Chuẩn bị lên chuyến bay", "Check-in, hành lý, boarding pass và cửa khởi hành."),
            (14, "Nhận phòng và sử dụng dịch vụ khách sạn", "Đặt phòng, check-in, yêu cầu dịch vụ và check-out."),
            (15, "Nói về sách và nội dung yêu thích", "Trao đổi về sách, báo và thói quen đọc."),
            (16, "Qua cửa khẩu và kiểm tra nhập cảnh", "Trả lời câu hỏi về hộ chiếu, chuyến đi và mục đích nhập cảnh."),
            (17, "Lên kế hoạch cho một chuyến bay", "Tìm chuyến bay, lựa chọn lịch trình và đặt vé."),
        ],
    },
    {
        "num": 4,
        "name": "Around Town",
        "vn": "Giao tiếp trong thành phố",
        "description": "Sử dụng tiếng Anh tại các địa điểm dịch vụ và không gian công cộng.",
        "lessons": [
            (18, "Làm quen và giới thiệu bản thân", "Giới thiệu tên, quê quán, nghề nghiệp và thông tin cơ bản."),
            (19, "Thể thao và hoạt động vận động", "Nói về môn thể thao, luyện tập và sở thích vận động."),
            (20, "Khám phá một điểm du lịch", "Hỏi thông tin, mua vé và tham quan."),
            (21, "Tìm và mượn tài liệu", "Giao tiếp tại thư viện."),
            (22, "Gửi thư và bưu kiện", "Sử dụng các dịch vụ tại bưu điện."),
            (23, "Dừng xe để tiếp nhiên liệu", "Giao tiếp tại trạm xăng."),
            (24, "Trao đổi với dược sĩ", "Mô tả vấn đề sức khỏe thông thường và hỏi về sản phẩm phù hợp."),
            (25, "Sử dụng dịch vụ giặt ủi", "Yêu cầu giặt, làm sạch và nhận lại đồ."),
        ],
    },
    {
        "num": 5,
        "name": "Life & Relationships",
        "vn": "Cuộc sống và các mối quan hệ",
        "description": "Học cách trao đổi về đời sống cá nhân, cảm xúc và những tình huống xã hội thường gặp.",
        "lessons": [
            (26, "Tình yêu, đám cưới và hôn nhân", "Nói về tình cảm, mối quan hệ, lễ cưới và đời sống hôn nhân."),
            (27, "Nói về những người thân", "Mô tả gia đình, họ hàng, tính cách và mối quan hệ."),
            (28, "Chọn lựa và mua sản phẩm", "Hỏi thông tin sản phẩm, so sánh lựa chọn và quyết định mua."),
            (29, "Thương lượng giá khi mua hàng", "Hỏi giá, mặc cả lịch sự và xác nhận điều kiện mua."),
            (30, "Thể hiện sự biết ơn", "Cảm ơn, đáp lại lời cảm ơn và ghi nhận sự giúp đỡ."),
            (31, "An ủi và khích lệ người khác", "Động viên, chia sẻ cảm xúc và đưa lời khuyên nhẹ nhàng."),
            (32, "Gọi món và trò chuyện khi ăn uống", "Đặt món, yêu cầu phục vụ và trò chuyện tại bàn ăn."),
            (33, "Kết thúc cuộc trò chuyện tự nhiên", "Chuyển ý, chào tạm biệt và hẹn gặp lại."),
            (34, "Nêu vấn đề và yêu cầu xử lý", "Phàn nàn lịch sự, giải thích vấn đề và đề nghị giải pháp."),
            (35, "Xin lỗi và sửa chữa sai lầm", "Nhận lỗi, xin lỗi đúng mức và đề xuất cách khắc phục."),
        ],
    },
    {
        "num": 6,
        "name": "Study & Career",
        "vn": "Học tập và công việc",
        "description": "Phát triển vốn tiếng Anh cần thiết cho môi trường học tập, nghề nghiệp và giao tiếp chuyên nghiệp cơ bản.",
        "lessons": [
            (36, "Học tập, trường lớp và bằng cấp", "Nói về quá trình học tập và môi trường giáo dục."),
            (37, "Nói về người mình ngưỡng mộ", "Mô tả một nhân vật, thành tích và lý do khiến bạn ấn tượng."),
            (38, "Kỳ nghỉ và những dịp đặc biệt", "Nói về ngày lễ, kỳ nghỉ và các hoạt động đặc biệt."),
            (39, "Quảng bá sản phẩm và tiếp cận khách hàng", "Làm quen với tiếng Anh cơ bản trong marketing và quảng cáo."),
            (40, "Chinh phục buổi phỏng vấn tuyển dụng", "Giới thiệu bản thân, trình bày kinh nghiệm, kỹ năng và trả lời câu hỏi phỏng vấn."),
        ],
    },
]


def slug(text: str) -> str:
    table = str.maketrans(
        "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ"
        "ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ",
        "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd"
        "AAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD",
    )
    clean = text.translate(table).lower()
    chars = []
    for ch in clean:
        if ch.isalnum():
            chars.append(ch)
        elif ch in " -_":
            chars.append("-")
    return "-".join(part for part in "".join(chars).split("-") if part)


def lesson_filename(num: int, title: str) -> str:
    return f"Lesson {num:02d} - {slug(title)}.md"


def module_dir(module: dict) -> Path:
    return COURSE / f"{module['num']:02d} - {module['name']}"


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.strip() + "\n", encoding="utf-8")


def lesson_template(num: int, title: str, description: str, module: dict) -> str:
    return f"""
# Lesson {num:02d} - {title}

## Real-Life Situation

**Bối cảnh:** {description}

Người học cần hiểu tình huống, xác định mục đích giao tiếp và phản hồi bằng những câu ngắn, rõ, tự nhiên.

## Learning Outcomes

Sau bài này, người học có thể:

- Nhận diện từ và cụm từ quan trọng trong tình huống.
- Đặt câu hỏi phù hợp để lấy thông tin cần thiết.
- Trả lời bằng câu ngắn nhưng đủ ý.
- Duy trì hội thoại ít nhất 6-8 lượt trao đổi.
- Tự tạo một đoạn hội thoại mới dựa trên đời sống cá nhân.

## Core Vocabulary

Điền và mở rộng trong quá trình sản xuất bài giảng:

| English | Vietnamese | Example |
| --- | --- | --- |
| keyword 1 | nghĩa tiếng Việt | Use it in a short sentence. |
| keyword 2 | nghĩa tiếng Việt | Use it in a short sentence. |
| keyword 3 | nghĩa tiếng Việt | Use it in a short sentence. |
| keyword 4 | nghĩa tiếng Việt | Use it in a short sentence. |
| keyword 5 | nghĩa tiếng Việt | Use it in a short sentence. |

## Useful Patterns

- Could you tell me ...?
- I would like to ...
- Do you have any ...?
- Let me check.
- That sounds good.
- Is it possible to ...?

## Natural Expressions

- Sure, no problem.
- Just a moment, please.
- That works for me.
- I am not sure yet.
- Thanks for letting me know.

## Real-Life Conversation

**A:** Hi, can I ask you something?  
**B:** Sure. What do you need?  
**A:** I need some help with this situation.  
**B:** No problem. Tell me what happened.  
**A:** Great, thank you.  
**B:** You're welcome.

## Speaking Challenge

1. Nói lại hội thoại mẫu nhưng thay đổi thông tin cá nhân.
2. Tạo 5 câu hỏi có thể dùng trong tình huống này.
3. Ghi âm một đoạn hội thoại 45-60 giây.
4. Nghe lại và sửa 1 lỗi phát âm, 1 lỗi từ vựng, 1 lỗi ngữ pháp.

## Common Mistakes

- Dịch từng chữ từ tiếng Việt sang tiếng Anh.
- Dùng câu quá dài khi chưa cần thiết.
- Quên dùng cách nói lịch sự như `please`, `could you`, `would you mind`.
- Trả lời quá ngắn khiến hội thoại bị dừng lại.

## Practice Mission

Trong hôm nay, hãy viết hoặc nói một đoạn hội thoại 8 lượt cho tình huống **{title}**. Dùng ít nhất 5 từ vựng mới và 3 mẫu câu trong bài.

## Instructor Notes

- Module: {module['num']:02d} - {module['name']} / {module['vn']}
- Thời lượng gợi ý: 8-12 phút video chính + 5 phút luyện nói.
- Kết thúc bài bằng một câu hỏi mở để người học trả lời trong phần Q&A hoặc worksheet.
"""


def build_readme() -> str:
    module_lines = []
    for module in modules:
        path = f"English-for-Everyday-Life/{module['num']:02d}%20-%20{module['name'].replace(' ', '%20').replace('&', '%26')}/README.md"
        module_lines.append(f"- [Module {module['num']:02d} - {module['name']}]({path}) - {len(module['lessons'])} bài")
    return f"""
# English for Everyday Life

Khóa học markdown được tạo từ đề cương **Tiếng Anh Thực Chiến Theo Tình Huống**.

## Thống kê

- Module: 6
- Bài học: 40
- Đối tượng: Người học tiếng Anh cơ bản đến trung cấp
- Trọng tâm: Vocabulary, Speaking, Listening, Conversation, Communication
- Phương pháp: Situation -> Language -> Conversation -> Practice
- Ngôn ngữ tài liệu: Tiếng Việt, kèm mẫu câu tiếng Anh

## Cách dùng

1. Mở [COURSE_INDEX.md](English-for-Everyday-Life/COURSE_INDEX.md) để xem toàn bộ khóa học.
2. Dùng [SYLLABUS.md](English-for-Everyday-Life/SYLLABUS.md) làm đề cương chính.
3. Dùng [LESSON_TEMPLATE.md](English-for-Everyday-Life/LESSON_TEMPLATE.md) để viết thêm nội dung chi tiết cho từng bài.
4. Dùng [UDEMY_LANDING_PAGE.md](English-for-Everyday-Life/UDEMY_LANDING_PAGE.md) để chuẩn bị trang bán khóa học.
5. Dùng [LEARNING_PLAN_8_WEEKS.md](English-for-Everyday-Life/LEARNING_PLAN_8_WEEKS.md) và [PRACTICE_TRACKER.md](English-for-Everyday-Life/PRACTICE_TRACKER.md) cho lịch học và theo dõi luyện tập.

## Module

{chr(10).join(module_lines)}
"""


def build_index() -> str:
    chunks = ["# Course Index\n"]
    for module in modules:
        chunks.append(f"## Module {module['num']:02d} - {module['name']}\n\n{module['vn']}\n")
        chunks.append(f"{module['description']}\n")
        for num, title, description in module["lessons"]:
            file = lesson_filename(num, title).replace(" ", "%20")
            chunks.append(f"- [Lesson {num:02d} - {title}]({module['num']:02d}%20-%20{module['name'].replace(' ', '%20').replace('&', '%26')}/{file}) - {description}")
        chunks.append("")
    return "\n".join(chunks)


def build_syllabus() -> str:
    module_sections = []
    for module in modules:
        lessons = "\n".join(
            f"- Lesson {num:02d} - {title}: {description}"
            for num, title, description in module["lessons"]
        )
        module_sections.append(
            f"## Module {module['num']:02d} - {module['name']}\n\n"
            f"**{module['vn']}**\n\n{module['description']}\n\n{lessons}"
        )
    return f"""
# Syllabus - English for Everyday Life

## Giới thiệu

**English for Everyday Life** là khóa học tiếng Anh giao tiếp thực hành xoay quanh 40 tình huống thường gặp trong cuộc sống, du lịch, học tập và công việc.

Thay vì học từ vựng riêng lẻ, người học tiếp cận tiếng Anh qua bối cảnh cụ thể: làm quen, hỏi đường, đặt vé máy bay, nhận phòng khách sạn, mua sắm, gọi món, xử lý phàn nàn và tham gia phỏng vấn tuyển dụng.

## Mục tiêu khóa học

Sau khi hoàn thành khóa học, người học có thể:

- Sử dụng từ vựng phù hợp trong các tình huống giao tiếp phổ biến.
- Chủ động bắt đầu và duy trì một cuộc trò chuyện bằng tiếng Anh.
- Đặt câu hỏi và phản hồi một cách tự nhiên.
- Xử lý các tình huống thường gặp khi đi du lịch.
- Giao tiếp tại khách sạn, sân bay, cửa hàng, nhà hàng và các địa điểm công cộng.
- Nói về gia đình, sở thích, học tập và cuộc sống cá nhân.
- Thể hiện cảm xúc như cảm ơn, xin lỗi, động viên hoặc không hài lòng.
- Sử dụng tiếng Anh cơ bản trong môi trường học tập và công việc.

## Phương pháp học

```text
Situation -> Core Vocabulary -> Useful Patterns -> Natural Expressions
          -> Real-Life Conversation -> Speaking Challenge -> Practice Mission
```

## Cấu trúc mỗi bài

1. Real-Life Situation
2. Core Vocabulary
3. Useful Patterns
4. Natural Expressions
5. Real-Life Conversation
6. Speaking Challenge
7. Common Mistakes
8. Practice Mission

## Nội dung khóa học

{chr(10).join(module_sections)}

## Kết quả đầu ra

Người học không chỉ ghi nhớ "từ này nghĩa là gì", mà hình thành phản xạ trả lời câu hỏi quan trọng hơn: "trong tình huống này, mình nên nói gì?"
"""


def build_landing_page() -> str:
    return """
# Udemy Landing Page - English for Everyday Life

## Course Title

English for Everyday Life: Tiếng Anh Thực Chiến Theo Tình Huống

## Subtitle

Luyện nói tiếng Anh qua 40 tình huống đời sống, du lịch, học tập và công việc với từ vựng, mẫu câu, hội thoại và bài tập phản xạ.

## Course Description

Bạn đã học nhiều từ vựng nhưng vẫn không biết phải nói gì khi gặp tình huống thật?

Khóa học này giúp bạn học tiếng Anh theo cách thực tế hơn: bắt đầu từ một tình huống cụ thể, học từ vựng cần thiết, dùng mẫu câu đúng ngữ cảnh, nghe hội thoại mẫu và luyện phản xạ nói.

Trong 40 bài học, bạn sẽ luyện các tình huống như bắt chuyện, hỏi đường, đặt vé máy bay, nhận phòng khách sạn, mua sắm, gọi món, cảm ơn, xin lỗi, nêu vấn đề, giao tiếp nơi công cộng và phỏng vấn tuyển dụng.

## What You Will Learn

- Bắt đầu và duy trì hội thoại tiếng Anh tự nhiên.
- Dùng từ vựng và mẫu câu phù hợp theo từng tình huống.
- Hỏi thông tin, xác nhận, nhờ giúp đỡ và phản hồi lịch sự.
- Giao tiếp khi đi du lịch, ở sân bay, khách sạn, nhà hàng, cửa hàng và địa điểm công cộng.
- Nói về bản thân, gia đình, sở thích, học tập và công việc.
- Thể hiện cảm xúc: cảm ơn, xin lỗi, chúc mừng, động viên và phàn nàn lịch sự.
- Tạo đoạn hội thoại ngắn và luyện nói theo nhiệm vụ thực hành.

## Who This Course Is For

- Người học tiếng Anh cơ bản muốn giao tiếp tự tin hơn.
- Người chuẩn bị đi du lịch, học tập hoặc làm việc trong môi trường có dùng tiếng Anh.
- Người đã học ngữ pháp nhưng phản xạ nói còn chậm.
- Người muốn học tiếng Anh theo tình huống thay vì học từ vựng rời rạc.

## Requirements

- Biết bảng chữ cái và một số câu tiếng Anh cơ bản.
- Có thể dành 15-25 phút luyện tập cho mỗi bài.
- Nên có điện thoại hoặc máy tính để ghi âm phần speaking challenge.

## Promotional Hook

Đừng chỉ học "từ này nghĩa là gì". Hãy luyện để biết "trong tình huống này, mình nên nói gì".
"""


def build_learning_plan() -> str:
    weeks = [
        ("Week 01", "Lesson 01-05", "Connect: bắt chuyện, mời, chúc mừng, sở thích, gợi ý."),
        ("Week 02", "Lesson 06-10", "Everyday Conversations phần 1: hỏi đường, lịch hẹn, thời tiết, phim, nhờ hỗ trợ."),
        ("Week 03", "Lesson 11-15", "Everyday Conversations phần 2 và Travel Ready phần 1: âm nhạc, online, sân bay, khách sạn, sách."),
        ("Week 04", "Lesson 16-20", "Travel Ready phần 2 và Around Town phần 1: nhập cảnh, đặt chuyến bay, giới thiệu, thể thao, tham quan."),
        ("Week 05", "Lesson 21-25", "Around Town phần 2: thư viện, bưu điện, trạm xăng, dược sĩ, giặt ủi."),
        ("Week 06", "Lesson 26-30", "Life & Relationships phần 1: tình yêu, gia đình, mua sắm, thương lượng, cảm ơn."),
        ("Week 07", "Lesson 31-35", "Life & Relationships phần 2: động viên, gọi món, kết thúc hội thoại, phàn nàn, xin lỗi."),
        ("Week 08", "Lesson 36-40", "Study & Career: học tập, người ngưỡng mộ, kỳ nghỉ, marketing, phỏng vấn."),
    ]
    rows = "\n".join(f"| {w} | {l} | {focus} |" for w, l, focus in weeks)
    return f"""
# Learning Plan - 8 Weeks

| Tuần | Bài học | Trọng tâm |
| --- | --- | --- |
{rows}

## Nhịp học gợi ý cho mỗi bài

- 3 phút: đọc tình huống và từ vựng.
- 5 phút: luyện mẫu câu.
- 5 phút: nghe/đọc hội thoại mẫu.
- 5 phút: tự tạo hội thoại mới.
- 2 phút: ghi lại lỗi cần sửa.

## Weekly Review

Cuối mỗi tuần, người học nên chọn 2 tình huống bất kỳ, nói lại không nhìn tài liệu và ghi âm để tự đánh giá độ trôi chảy.
"""


def build_tracker() -> str:
    rows = []
    for module in modules:
        for num, title, _ in module["lessons"]:
            rows.append(f"| Lesson {num:02d} | {title} | [ ] | [ ] | [ ] | [ ] | |")
    return f"""
# Practice Tracker

| Bài | Chủ đề | Vocabulary | Patterns | Conversation | Mission | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
{chr(10).join(rows)}
"""


def build_lesson_template() -> str:
    return """
# Lesson XX - [Tên bài học]

## Real-Life Situation

Mô tả bối cảnh giao tiếp, ai đang nói với ai, mục tiêu của người học là gì.

## Core Vocabulary

| English | Vietnamese | Example |
| --- | --- | --- |
|  |  |  |

## Useful Patterns

- 
- 
- 

## Natural Expressions

- 
- 
- 

## Real-Life Conversation

**A:**  
**B:**  
**A:**  
**B:**  

## Speaking Challenge

1. 
2. 
3. 

## Common Mistakes

- 
- 
- 

## Practice Mission

Nhiệm vụ thực hành ngoài bài học.
"""


def build_production_plan() -> str:
    return """
# Course Production Plan

## Output Package

Khóa học này đã có:

- Course overview
- Syllabus
- Course index
- Udemy landing page draft
- 8-week learning plan
- Practice tracker
- Lesson template
- 6 module README files
- 40 lesson scaffold files

## Recommended Video Format

Mỗi lesson nên có cấu trúc video 8-12 phút:

1. Hook tình huống: 30-45 giây.
2. Core vocabulary: 2 phút.
3. Useful patterns: 2-3 phút.
4. Real-life conversation: 2 phút.
5. Speaking challenge: 2 phút.
6. Practice mission: 30 giây.

## Production Workflow

1. Viết chi tiết từng lesson từ scaffold.
2. Thêm 8-12 từ vựng theo đúng tình huống.
3. Viết 5-7 mẫu câu có thể dùng trực tiếp.
4. Viết hội thoại 8-12 lượt nói.
5. Thêm lỗi thường gặp của người Việt học tiếng Anh.
6. Tạo worksheet hoặc practice prompt cho từng bài.
7. Ghi hình, biên tập, xuất video và upload theo module.

## Suggested Assets

- Slide opening cho từng module.
- Bảng từ vựng 3 cột: English, Vietnamese, Example.
- Dialogue slide với hai vai A/B.
- Speaking challenge timer.
- Practice mission cuối bài.

## Quality Checklist

- [ ] Mỗi bài có tình huống rõ.
- [ ] Từ vựng không quá nhiều, ưu tiên từ dùng ngay.
- [ ] Mẫu câu tự nhiên, không dịch máy.
- [ ] Hội thoại có nhịp đời thường.
- [ ] Bài tập speaking buộc người học tự nói.
- [ ] Có một lỗi phổ biến cần tránh.
"""


def build_module_readme(module: dict) -> str:
    lines = [
        f"# Module {module['num']:02d} - {module['name']}",
        "",
        f"## {module['vn']}",
        "",
        module["description"],
        "",
        "## Lessons",
        "",
    ]
    for num, title, description in module["lessons"]:
        file = lesson_filename(num, title).replace(" ", "%20")
        lines.append(f"- [Lesson {num:02d} - {title}]({file}) - {description}")
    lines.extend(
        [
            "",
            "## Module Outcome",
            "",
            "Sau module này, người học có thể xử lý nhóm tình huống trên bằng câu ngắn, tự nhiên và đủ lịch sự trong hội thoại đời sống.",
        ]
    )
    return "\n".join(lines)


def main() -> None:
    write(OUTER / "README.md", build_readme())
    write(COURSE / "COURSE_INDEX.md", build_index())
    write(COURSE / "SYLLABUS.md", build_syllabus())
    write(COURSE / "UDEMY_LANDING_PAGE.md", build_landing_page())
    write(COURSE / "COURSE_PRODUCTION_PLAN.md", build_production_plan())
    write(COURSE / "LEARNING_PLAN_8_WEEKS.md", build_learning_plan())
    write(COURSE / "PRACTICE_TRACKER.md", build_tracker())
    write(COURSE / "LESSON_TEMPLATE.md", build_lesson_template())

    for module in modules:
        mdir = module_dir(module)
        write(mdir / "README.md", build_module_readme(module))
        for num, title, description in module["lessons"]:
            write(mdir / lesson_filename(num, title), lesson_template(num, title, description, module))


if __name__ == "__main__":
    main()
