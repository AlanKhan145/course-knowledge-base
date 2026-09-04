param(
    [Parameter(Mandatory = $true)]
    [string]$CurriculumPath,
    [Parameter(Mandatory = $true)]
    [string]$OutputPath
)

$ErrorActionPreference = 'Stop'

function ConvertTo-Slug([string]$Text) {
    $normalized = $Text.Normalize([Text.NormalizationForm]::FormD)
    $chars = New-Object System.Collections.Generic.List[char]
    foreach ($char in $normalized.ToCharArray()) {
        if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($char) -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$chars.Add($char)
        }
    }
    $slug = (-join $chars).ToLowerInvariant()
    $slug = [regex]::Replace($slug, '[^a-z0-9]+', '-')
    $slug = $slug.Trim('-')
    if ($slug.Length -gt 90) { $slug = $slug.Substring(0, 90).Trim('-') }
    return $slug
}

function Escape-Markdown([string]$Text) {
    return $Text.Replace('|', '\|')
}

function Get-LessonType([string]$Title) {
    if ($Title -match '(?i)diagnostic|quiz|assignment|mock|test') { return 'Đánh giá và kiểm tra' }
    if ($Title -match '(?i)strategy|tactic|overview|basic|information|introduction|rubric|descriptor') { return 'Kiến thức và chiến lược' }
    if ($Title -match '(?i)guided|analysis|application|example|practice|review') { return 'Luyện tập có hướng dẫn' }
    if ($Title -match '(?i)live|recording|class') { return 'Ôn tập qua lớp học trực tuyến' }
    if ($Title -match '(?i)speaking|sample|role play|response') { return 'Thực hành Speaking' }
    return 'Thực hành kỹ năng IELTS'
}

function Get-ModuleFolderName([int]$Number) {
    $names = @(
        'Tổng quan khóa học',
        'Thông tin cơ bản kỳ thi',
        'Chẩn đoán ngữ pháp và từ vựng',
        'Listening cơ bản',
        'Listening Section 1',
        'Listening Section 2',
        'Listening Section 3',
        'Listening Section 4',
        'Listening Multiple Choice',
        'Listening Fill in the Blank',
        'Listening Exit Tests',
        'Listening Exit Tests bổ sung',
        'Academic Reading cơ bản',
        'Academic Reading Scanning',
        'Academic Reading Question Strategies',
        'Academic Reading Live Classes',
        'Academic Reading Mock Tests',
        'General Reading cơ bản',
        'General Reading Scanning',
        'General Reading Question Strategies',
        'General Reading Live Classes',
        'General Reading Mock Tests',
        'Computer-based Test',
        'Academic Writing Task 1',
        'Academic Writing Live Class',
        'General Writing Task 1 Letters',
        'General Writing Live Classes',
        'Writing Task 2 Overview',
        'Writing Task 2 Process',
        'Speaking Strategy',
        'Speaking Part 1',
        'Speaking Part 2',
        'Speaking Part 3',
        'Speaking AI Roleplays',
        'Speaking Student Tests'
    )
    return ('{0:00} - {1}' -f $Number, $names[$Number - 1])
}

function Write-Utf8([string]$Path, [string]$Text) {
    $parent = Split-Path -Parent $Path
    if (-not (Test-Path -LiteralPath $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    [IO.File]::WriteAllText($Path, $Text.TrimEnd() + "`n", [Text.UTF8Encoding]::new($false))
}

if (-not (Test-Path -LiteralPath $CurriculumPath)) {
    throw "Curriculum file not found: $CurriculumPath"
}

$markdown = Get-Content -LiteralPath $CurriculumPath -Raw -Encoding UTF8
$moduleMatches = [regex]::Matches(
    $markdown,
    '(?ms)^### Module (\d+): (.+?)\r?\n\r?\n(.*?)(?=^### Module |\r?\n---\r?\n)'
)

if ($moduleMatches.Count -ne 35) {
    throw "Expected 35 modules, found $($moduleMatches.Count)"
}

$modules = @()
$globalLesson = 0
foreach ($moduleMatch in $moduleMatches) {
    $number = [int]$moduleMatch.Groups[1].Value
    $title = $moduleMatch.Groups[2].Value.Trim()
    $body = $moduleMatch.Groups[3].Value
    $lessonMatches = [regex]::Matches($body, '(?m)^(\d+)\. (.+?)\s*$')
    $lessons = @()
    foreach ($lessonMatch in $lessonMatches) {
        $globalLesson++
        $lessonTitle = $lessonMatch.Groups[2].Value.Trim()
        $lessons += [pscustomobject]@{
            Number = $globalLesson
            ModuleNumber = $number
            Title = $lessonTitle
            Type = Get-LessonType $lessonTitle
            Slug = ('{0:000}-{1}' -f $globalLesson, (ConvertTo-Slug $lessonTitle))
        }
    }
    $modules += [pscustomobject]@{
        Number = $number
        Title = $title
        Folder = Get-ModuleFolderName $number
        Lessons = $lessons
    }
}

if ($globalLesson -ne 481) {
    throw "Expected 481 lessons, found $globalLesson"
}

New-Item -ItemType Directory -Path $OutputPath -Force | Out-Null

$moduleRows = foreach ($module in $modules) {
    $safeTitle = Escape-Markdown $module.Title
    "| $($module.Number.ToString('00')) | $safeTitle | $($module.Lessons.Count) | [$($module.Folder)](<$($module.Folder)/README.md>) |"
}

$readme = @"
# IELTS Band 7+ Complete Prep Course

Bộ khung khóa học luyện thi IELTS Band 7+ được tổ chức lại từ curriculum công khai của khóa học tham chiếu trên Udemy. Nội dung trong thư mục này là đề cương và scaffold để tiếp tục biên soạn bài giảng gốc.

## Thông tin khóa học

| Thuộc tính | Chi tiết |
|---|---|
| Mục tiêu | IELTS Band 7+ |
| Phạm vi | Listening, Reading Academic/General, Writing, Speaking |
| Cấu trúc | 35 module • 481 bài học |
| Định dạng | Ghi chú Markdown, bài tập, checklist và lesson scaffold |
| Trạng thái | 🚧 Đã dựng cấu trúc; nội dung chuyên sâu cần tiếp tục biên soạn |

## Kết quả đầu ra

Sau khi hoàn thành lộ trình, người học có thể:

- hiểu cấu trúc và tiêu chí chấm điểm IELTS Academic/General;
- áp dụng chiến lược cho các dạng câu hỏi Listening và Reading;
- lập dàn ý, viết và tự kiểm tra Writing Task 1 và Task 2;
- trả lời Speaking Part 1–3 rõ ràng, mạch lạc và có phát triển ý;
- làm bài kiểm tra đầu vào, bài luyện theo dạng câu hỏi và mock test;
- theo dõi lỗi sai, quản lý thời gian và điều chỉnh chiến lược làm bài.

## Cách sử dụng khoá học

1. Mở [COURSE_INDEX.md](COURSE_INDEX.md) để đi tới từng bài học.
2. Học theo thứ tự module, nhưng có thể ưu tiên kỹ năng đang yếu.
3. Mỗi lesson scaffold cần được bổ sung ví dụ tự biên soạn, worksheet, đáp án và transcript hợp pháp nếu có.
4. Dùng [SYLLABUS.md](SYLLABUS.md) để thiết kế lịch học và [PRACTICE_PLAN.md](PRACTICE_PLAN.md) để theo dõi luyện tập.

## Danh sách module

| Module | Tên curriculum | Bài | Tài liệu |
|---:|---|---:|---|
$($moduleRows -join "`n")

## Nguyên tắc nội dung

Các file chỉ dùng tiêu đề bài học và mục tiêu biên soạn để tạo một khóa học độc lập. Không chép transcript, video, đáp án độc quyền hoặc tài liệu trả phí từ Udemy.
"@
Write-Utf8 (Join-Path $OutputPath 'README.md') $readme

$indexParts = @('# Course Index - IELTS Band 7+', '')
$indexParts += '> 35 module, 481 bài học. Các lesson hiện là scaffold biên soạn; bổ sung nội dung gốc trước khi phát hành.'
$indexParts += ''
foreach ($module in $modules) {
    $indexParts += "## Module $($module.Number.ToString('00')) - $($module.Title)"
    $indexParts += ''
    foreach ($lesson in $module.Lessons) {
        $title = Escape-Markdown $lesson.Title
        $file = "lessons/$($lesson.Slug).md"
        $indexParts += "- [$($lesson.Number.ToString('000')) - $title](<$($module.Folder)/$file>)"
    }
    $indexParts += ''
}
Write-Utf8 (Join-Path $OutputPath 'COURSE_INDEX.md') ($indexParts -join "`n")

$syllabusParts = @(
    '# Syllabus - IELTS Band 7+',
    '',
    '## Lộ trình đề xuất',
    '',
    '```text',
    'Exam foundations -> Listening -> Academic/General Reading -> Computer Test',
    '                  -> Writing Task 1/2 -> Speaking Parts 1/2/3 -> Mock Tests',
    '```',
    '',
    '## Mục tiêu theo module',
    ''
)
foreach ($module in $modules) {
    $syllabusParts += "### Module $($module.Number.ToString('00')) - $($module.Title)"
    $syllabusParts += ''
    $syllabusParts += "- Số bài: $($module.Lessons.Count)"
    $syllabusParts += '- Trọng tâm: hiểu khái niệm, quan sát ví dụ, luyện có hướng dẫn và tự kiểm tra.'
    $syllabusParts += '- Đầu ra: hoàn thành bài tập của module và ghi lại lỗi cần sửa trong error log.'
    $syllabusParts += ''
}
$syllabusParts += '## Tiêu chí hoàn thành'
$syllabusParts += ''
$syllabusParts += '- [ ] Hoàn thành bài chẩn đoán và xác định 3 điểm yếu chính.'
$syllabusParts += '- [ ] Hoàn thành toàn bộ lesson scaffold cùng worksheet/đáp án do người học hoặc giảng viên tự biên soạn.'
$syllabusParts += '- [ ] Làm mock test cho Listening, Reading, Writing và Speaking.'
$syllabusParts += '- [ ] Có error log và kế hoạch ôn lại cho từng dạng câu hỏi.'
Write-Utf8 (Join-Path $OutputPath 'SYLLABUS.md') ($syllabusParts -join "`n")

$practicePlan = @"
# Practice Plan - IELTS Band 7+

## Một chu kỳ học 90 phút

1. 10 phút: ôn lỗi cũ và từ vựng.
2. 25 phút: học chiến lược hoặc xem ví dụ.
3. 30 phút: làm bài có bấm giờ.
4. 15 phút: kiểm tra đáp án và phân loại lỗi.
5. 10 phút: ghi error log và chọn nhiệm vụ ôn lại.

## Error log tối thiểu

| Ngày | Kỹ năng | Dạng câu hỏi | Lỗi | Nguyên nhân | Cách sửa | Ngày ôn lại |
|---|---|---|---|---|---|---|
| | | | | | | |

## Chu kỳ ôn lại

Ôn sau 1 ngày, 3 ngày, 7 ngày và 14 ngày. Với Writing và Speaking, lưu cả bản trước/sau chỉnh sửa để đo tiến bộ.
"@
Write-Utf8 (Join-Path $OutputPath 'PRACTICE_PLAN.md') $practicePlan

$landingPage = @"
# Course Landing Page Draft

## Title

IELTS Band 7+ Complete Prep Course — Listening, Reading, Writing & Speaking

## Subtitle

Lộ trình luyện thi toàn diện với chiến lược theo dạng câu hỏi, bài luyện có hướng dẫn, mock tests và thực hành Speaking.

## Course Description

Khóa học giúp người học xây dựng một lộ trình có hệ thống để hướng tới Band 7+. Nội dung đi từ cấu trúc kỳ thi và chẩn đoán năng lực, qua Listening và Reading Academic/General, đến Writing Task 1/2, Speaking Part 1–3 và bài thi thử.

## What You Will Learn

- Nhận diện cấu trúc, dạng câu hỏi và tiêu chí chấm điểm IELTS.
- Áp dụng chiến lược làm bài Listening và Reading có bấm giờ.
- Viết Task 1, Task 2 theo cấu trúc rõ ràng và tự kiểm tra theo rubric.
- Phát triển câu trả lời Speaking có độ trôi chảy, từ vựng và độ chính xác tốt hơn.
- Phân tích lỗi sai qua diagnostic test, practice set và mock test.

## Requirements

- Trình độ tiếng Anh tối thiểu Intermediate.
- Có thể dành 60–90 phút mỗi ngày cho học và luyện tập.
- Có giấy, bút hoặc công cụ ghi chú để xây dựng error log.

## Important Note

Đây là bản thảo nội dung cho khóa học độc lập. Cần bổ sung video, audio, worksheet, đáp án và ví dụ do người tạo khóa học tự sản xuất hoặc có quyền sử dụng.
"@
Write-Utf8 (Join-Path $OutputPath 'UDEMY_LANDING_PAGE.md') $landingPage

$globalLessons = @()
foreach ($module in $modules) {
    $modulePath = Join-Path $OutputPath $module.Folder
    New-Item -ItemType Directory -Path (Join-Path $modulePath 'lessons') -Force | Out-Null
    $moduleLessonRows = @()
    foreach ($lesson in $module.Lessons) {
        $globalLessons += $lesson
        $lessonTitle = $lesson.Title
        $lessonType = $lesson.Type
        $moduleTitle = $module.Title
        $lessonFile = Join-Path $modulePath "lessons/$($lesson.Slug).md"
        $lessonContent = @"
# Lesson $($lesson.Number.ToString('000')) - $lessonTitle

> Module $($module.Number.ToString('00')): $moduleTitle  
> Loại bài: $lessonType  
> Trạng thái: scaffold cần biên soạn nội dung gốc

## Mục tiêu học tập

Sau bài này, người học có thể:

- giải thích mục tiêu của bài **$lessonTitle** bằng ngôn ngữ của mình;
- nhận diện từ khóa, tín hiệu hoặc cấu trúc cần chú ý trong dạng bài này;
- áp dụng một quy trình làm bài có bấm giờ;
- ghi lại lỗi sai và chọn một hành động sửa lỗi cụ thể.

## Nội dung cần biên soạn

- Bối cảnh và vai trò của bài **$lessonTitle** trong module **$moduleTitle**.
- Khái niệm, chiến lược hoặc kỹ năng cốt lõi cần trình bày.
- Ít nhất hai ví dụ tự biên soạn, tăng dần từ cơ bản đến gần định dạng thi.
- Cách kiểm tra đáp án và giải thích vì sao lựa chọn đúng/sai.

## Quy trình luyện tập đề xuất

1. Đọc mục tiêu và dự đoán loại thông tin cần tìm.
2. Làm một ví dụ không bấm giờ để hiểu quy trình.
3. Làm một set tương tự có giới hạn thời gian.
4. Phân loại lỗi: hiểu sai câu hỏi, bỏ sót từ khóa, từ vựng, ngữ pháp, phát âm hoặc quản lý thời gian.
5. Làm lại câu sai sau khi viết ra cách sửa.

## Bài tập của lesson

1. Viết tóm tắt 3–5 câu về chiến lược/kỹ năng của bài.
2. Tạo một ví dụ mới tương tự nhưng không sao chép nguồn tham khảo.
3. Ghi âm hoặc viết câu trả lời của bạn nếu bài có phần Speaking/Writing.
4. Cập nhật error log với ít nhất một lỗi và một cách sửa.

## Tự kiểm tra

- Tôi có thể trình bày lại quy trình làm bài mà không nhìn ghi chú không?
- Tôi có biết lỗi nào mình hay mắc trong dạng bài này không?
- Tôi có thể hoàn thành một bài tương tự trong thời gian mục tiêu không?

## Tài liệu cần bổ sung

- Ví dụ, audio, transcript, worksheet và đáp án do người tạo khóa học tự sản xuất hoặc có quyền sử dụng.
- Rubric/checklist phù hợp với mục tiêu của lesson.
- Ghi chú giảng viên sau khi thử nghiệm bài với người học.
"@
        Write-Utf8 $lessonFile $lessonContent
        $titleForLink = Escape-Markdown $lessonTitle
        $moduleLessonRows += "- [$($lesson.Number.ToString('000')) - $titleForLink](lessons/$($lesson.Slug).md)"
    }
    $moduleReadme = @"
# Module $($module.Number.ToString('00')) - $($module.Title)

## Thông tin module

| Mục | Chi tiết |
|---|---|
| Curriculum | $($module.Title) |
| Số bài | $($module.Lessons.Count) |
| Trọng tâm | $($module.Lessons[0].Type) và luyện tập theo dạng bài |
| Trạng thái | 🚧 Lesson scaffold |

## Kết quả đầu ra

Sau module này, người học có thể mô tả chiến lược, thực hiện bài luyện có bấm giờ, giải thích lỗi sai và xác định bước ôn tập tiếp theo.

## Danh sách bài học

$($moduleLessonRows -join "`n")
"@
    Write-Utf8 (Join-Path $modulePath 'README.md') $moduleReadme
}

Write-Host "Created $($modules.Count) modules and $($globalLessons.Count) lessons at $OutputPath"
