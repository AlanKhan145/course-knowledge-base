# CourseFlow — UI design template

Template for the five main screens (dashboard, lesson reader, random review, Markdown editor, mobile reader).
It is derived from the real app (read-only): `src/app/globals.css`, `src/components/SiteHeader.tsx`,
`src/features/lessons/{ReaderShell,CourseOutline,TableOfContents,LessonActions}.tsx`,
`src/features/assessment/{QuizRunner,QuestionCard}.tsx`. Where the app already has a value it is quoted exactly;
anything marked **(new)** is a proposal for screens the app does not have yet (dashboard, practice, editor).
The mockups in `design/mockups/` are explorations OF this template, not replacements for it.

Mood: calm, premium EdTech "paper and ink" — between Notion, Linear and Coursera. Not a purple-gradient SaaS dashboard.
No stock photos, no fake ratings, no fake enrollment numbers. Reading comes first, chrome stays quiet.

---

## 1. Global foundations

### 1.1 Colour roles (tokens from `globals.css`)

| Role | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | `#f6f5f1` | `#121311` | page background |
| `--bg-elevated` | `#fbfaf7` | `#171816` | inputs, quiz shell, code-pane background |
| `--surface` | `#ffffff` | `#1b1c1a` | cards, sidebars, popovers |
| `--surface-2` / `--surface-3` | `#efede6` / `#e7e4db` | `#232521` / `#2c2e29` | hover fill, neutral chips, progress track, skeleton |
| `--border` / `--border-strong` | `#e2ded3` / `#cfcabd` | `#2f312c` / `#42453e` | 1px hairlines / hover and input borders |
| `--text` / `--text-2` / `--muted` | `#1d1c19` / `#3d3b35` / `#6c685e` | `#ecebe5` / `#d2d0c8` / `#a09d93` | headings, body, secondary text |
| `--accent` / `--accent-hover` / `--accent-soft` / `--accent-ink` | `#1e6b58` / `#17584a` / `#e2efe9` / `#0f4a3d` | `#5ec2a1` / `#79d1b3` / `#1b2f28` / `#9fe0c8` | primary button, links, selected row/option, callout, active TOC |
| `--amber` / `--amber-soft` | `#c98a14` / `#fbefd5` | `#f0b74c` / `#352a14` | in-progress bars, streak flame, "unsaved", warnings, bookmark |
| `--success` / `--success-soft` | `#2d8a57` / `#e1f3e8` | `#5cc48a` / `#16301f` | completed check, correct answer |
| `--danger` / `--danger-soft` | `#b93d2b` / `#fbe6e2` | `#f08a78` / `#3a1c17` | wrong answer, "Cần sửa" |
| `--info` / `--info-soft` | `#2f62a8` / `#e5eefb` | `#87b0ec` / `#182537` | "Đã đọc qua" mark, self-grade |
| `--code-bg` | `#f3f1ea` | `#1f211d` | inline code and question code (article code blocks use Shiki, dark ink panel in mockups) |

Rules: one accent only (green-teal). Amber is reserved for progress / streak / warning. Never use violet except the
exam-mode pill. Primary button text is white in light mode and `--bg` in dark mode.

### 1.2 Typography

- UI: **Be Vietnam Pro** (`--font-sans`, features `ss01`, `cv11`). Reading body: **Literata** (`--font-serif`, optional via prefs). Code: JetBrains Mono.
- Type scale (px / line-height / weight):

| Token | Size / LH | Weight | Use |
|---|---|---|---|
| display | 36 / 1.2 | 700, tracking -0.015em | lesson title (`2.25rem` ≥ sm, `1.9rem` mobile) |
| page-title | 30 / 1.25 | 700 | dashboard / practice page title |
| h2 (article) | 1.42em of 17px ≈ 24 / 1.3 | 700 sans | article section heading |
| h3 (article) | 1.17em ≈ 20 / 1.3 | 700 sans | |
| section | 20 / 28 | 600 | section titles on dashboard |
| card-title | 16 / 24 | 600 | course title, question prompt (`1rem` medium) |
| body-ui | 14–15 / 22 | 400–500 | buttons, options (`0.95rem`), lists |
| reading | 17 / 1.78 (sans) or 1.8 (serif) | 400, colour `--text-2` | article body (`--reader-size`) |
| caption | 12 / 16 | 400–600 | meta, chips, hints |
| overline | 11 / 14 uppercase, tracking-wide | 600 | "Trong bài này", "Tài liệu khóa học" |
| tabular | any, `tabular-nums` | | percentages, counts, timers |

### 1.3 Spacing, radius, elevation

- Spacing scale (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Card padding 16 (compact) / 20–24 (comfortable). Section gap 32–48. Gap between cards 16–24.
- Radius: chips and pills = full; buttons and inputs = `rounded-xl` (12); cards = `rounded-2xl` (16); quiz shell / big containers = `rounded-3xl` (24); code and table = 12.
- Borders: always 1px `--border`; hover → `--border-strong`. Shadow only on floating things (popover, mobile TOC button, primary button `--shadow`). Cards on the page are flat.
- Max content width: dashboard/practice `max-w-7xl` (1280) with 24px gutters (16 on mobile). Reader `max-w-[100rem]` (1600). Top bar height 56 (`h-14`); reader bar 52 (`h-13`).

### 1.4 Components (shared styles)

- **Primary button**: `bg-accent text-white rounded-xl px-4 py-2.5 text-sm font-semibold`, hover `--accent-hover`, disabled 50 % opacity, optional 16px lucide icon at the left.
- **Secondary button**: `bg-surface border border-border rounded-xl px-4 py-2.5 text-sm font-semibold`, hover `bg-surface-2`.
- **Chip / pill toggle**: `rounded-full border px-3 py-1.5 text-xs font-semibold`; off = `border-border text-text-2`; on = `border-accent bg-accent-soft text-accent-ink`.
- **Card**: `bg-surface border border-border rounded-2xl`, padding 20. Selected / highlighted card = `bg-accent-soft` with `border-accent/40`.
- **Progress bar**: height 6, `rounded-full`, track `--surface-3`; in-progress fill amber, completed fill `--success`. Percent label `tabular-nums` right of the bar.
- **Status icons** (lesson rows): done = `CheckCircle2` success; in progress = `CircleDot` amber; not started = `Circle` `--border-strong`. 16px.
- **Callout**: `--accent-soft` fill, 3px accent left bar, 12px radius, lightbulb icon + bold label.
- **Option row (quiz)**: `rounded-xl border px-3 py-2.5`; letter badge 24px (circle for single, rounded-md for multiple); selected = `border-accent bg-accent-soft/70` + ring, correct = success, wrong = danger, missed = dashed success.
- **Score ring**: SVG 64px (96 on practice), stroke 6, track `--surface-3`, arc colour by score (≥80 success, ≥50 amber, else danger), big `tabular-nums` percent beside or inside.
- **Icons**: lucide, 16px in UI, 14px in chips, stroke 1.75–2.

### 1.5 States (apply to every screen)

| State | Treatment |
|---|---|
| Loading | `.skeleton` shimmer blocks (radius 8) in the exact layout of the content; no spinners |
| Empty | centred illustration (`public/illus/empty-*.webp`, max 220px) + one-line title + one-line muted hint + one primary action |
| Completed | `--success-soft` surface, success check icon, text "Bạn đã học xong bài này" |
| Error | `--danger-soft` strip with one sentence and a retry button |
| Focus | 2px accent outline, 2px offset, radius 6 |
| Dark mode | same layout, tokens swap; illustrations keep their own backgrounds (see assets) |

### 1.6 Vietnamese UI strings (short, reuse exactly)

Global: `CourseFlow` · nav `Trang chủ`, `Khám phá`, `Ôn tập`, `Biên tập`, `Cài đặt` · search `Tìm khóa học, bài học…` · hint `Ctrl K` · `Đóng`.

---

## 2. Dashboard (`/`) — desktop 1440×900 reference

**Grid**: top bar 56px (logo · nav · compact search · theme toggle · avatar). Below it one centred column `max-w-7xl`
(1280, 24px gutters), 12 columns, 24px gap. Vertical rhythm 32px between bands.

**Component order (visual hierarchy)**
1. **Search hero** (cols 1–12): no greeting headline, the search field is the hero: 56px high, `rounded-2xl`, white, border, magnifier icon, placeholder `Tìm khóa học, bài học, câu hỏi…`, `Ctrl K` hint chip at the right end.
2. **Continue + Review pair** (cols 1–8 + 9–12, equal height ~176px):
   - *Tiếp tục học* card (white): overline `Tiếp tục học`, course title `Học máy cơ bản` (card-title 18), lesson `Bài 7 · Hồi quy tuyến tính` muted, amber progress bar + `42%`, primary button `Tiếp tục`.
   - *Ôn tập hôm nay* card (`--accent-soft`): overline `Ôn tập hôm nay`, number `12` (display 40/700) + `câu cần ôn`, secondary button `Bắt đầu ôn`.
3. **Stats strip** (one row, 24px high, no card chrome or a single thin card): amber flame `Chuỗi 6 ngày`, clock `148 phút tuần này`, tiny 7-bar weekly sparkline (bars amber, today solid).
4. **Domain chips** (horizontal, wrap on narrow): `Tất cả` (on), `AI & Dữ liệu`, `Lập trình`, `Thiết kế`, `Ngôn ngữ`, `Sức khỏe`.
5. **Section title** `Khóa học của bạn` (section 20/600) with a muted link `Xem tất cả` at the right.
6. **Course grid**: 4 columns at ≥1280, 3 at ≥1024, 2 at ≥640, 1 below; 20px gap. Card = white `rounded-2xl`, 16:9 generated geometric cover on top (flat circles / arcs / stripes / grids in green, amber, cream, ink — no photos), body padding 16: title (card-title, 2 lines max), domain overline muted, amber progress bar + `%`, muted line `7/16 bài`.

**Strings**: `Tiếp tục học`, `Ôn tập hôm nay`, `câu cần ôn`, `Bắt đầu ôn`, `Tiếp tục`, `Chuỗi 6 ngày`, `148 phút tuần này`, `Khóa học của bạn`, `Xem tất cả`, sample titles `Python cho phân tích dữ liệu`, `Thiết kế giao diện`, `Tiếng Anh giao tiếp`, `Tập luyện tại nhà`.

**States**: empty → `empty-courses` illustration, `Chưa có khóa học nào`, hint `Thêm thư mục khóa học để bắt đầu`, primary `Khám phá khóa học`. Nothing due → card shows `Hôm nay không còn câu nào cần ôn` with `empty-review` thumbnail. Search no results → `empty-search`, `Không tìm thấy kết quả`. New learner → `empty-progress`, `Bạn chưa học bài nào`. Loading → skeletons for both cards and 4 cover blocks.

---

## 3. Lesson reader (`/learn/[course]/[lesson]`) — desktop 1440×900 reference

**Grid** (from `ReaderShell`): sticky top bar 52px with bottom border and a 2px accent reading-progress line at the very top.
Body = `flex max-w-[100rem]`: **left outline 320px** (sticky, right border, full height) · **centre flex-1** (padding 48px, article `max-w` 46rem = 736px; prefs 40rem / 58rem) · **right TOC 256px** (sticky, only ≥1280px).
Top bar content: panel icon (mobile) · logo mark · course title `Học máy cơ bản` · `· Bài 7/16` · right icons: search, reading prefs (Aa), focus, fullscreen, theme.

**Left outline (top to bottom)**
1. Block with border-bottom, padding 16: label `Tiến độ khóa học` + `7/16 · 44%`, 6px progress bar, search field `Tìm bài trong khóa…` (32px high, `rounded-lg`).
2. Module headers (13px/600, number prefix muted, count `3/5 bài` 11px muted, chevron). Current module expanded, children indented with a 1px left rule.
3. Lesson rows: status icon (check / dot / empty) + title 13px; current row = `--accent-soft` fill, `--accent-ink` text, 500 weight; row padding 6×8, radius 8. Editorial dot (red/green/blue, 6px) at the row end when marked.
4. Footer group `Tài liệu khóa học` (overline).

**Centre article (top to bottom)**: breadcrumb (12px muted) `AI & Dữ liệu › Học máy cơ bản › 2. Hồi quy` → eyebrow group label (accent, 14/500) → **title** (display) → description (17 muted) → meta row `~12 phút đọc · 1.840 từ · 5 câu hỏi ôn tập` with clock icon → action chips `Đánh dấu đã học`, `Lưu bài`, review-status select → article body (sans or Literata 17/1.78) with h2 `Ý tưởng chính`, callout `Ghi nhớ`, code block (ink panel, rounded 12, language tag `python`, line numbers optional), flow/mermaid diagram (rounded boxes + arrows, final box `--accent-soft`), table (rounded 12, header `--surface-2`) → **review question card** `Câu hỏi ôn tập` (QuizRunner shell: `rounded-3xl`, `--bg-elevated`, padding 24; inner QuestionCard `rounded-2xl` white: number badge, type `Một đáp án`, prompt 16/500, option rows A–D, button `Nộp bài`, counter `Đã trả lời 0/1`) → completion block (card, `Học xong bài này?` + primary `Đánh dấu đã học`) → notes (`Ghi chú cá nhân`) → prev/next cards (`Bài trước` / `Bài tiếp theo`, 2 columns, `rounded-2xl`) → shortcuts hint 11px.

**Right TOC**: overline `Trong bài này`, 1px left rule, items 13px (H3 indented 24px); active = 2px accent left border + accent text 500; then `Bài liên quan` (overline) list; link `Lên đầu bài` with arrow-up icon at the bottom.

**Strings**: `Tiến độ khóa học`, `Tìm bài trong khóa…`, `Trong bài này`, `Ý tưởng chính`, `Ví dụ bằng mã`, `Quy trình`, `Câu hỏi ôn tập`, `Ghi nhớ`, `Đánh dấu đã học`, `Đã học`, `Lưu bài`, `Nộp bài`, `Bài trước`, `Bài tiếp theo`, `Lên đầu bài`, `Dữ liệu` → `Huấn luyện` → `Mô hình` → `Dự đoán`, options `A. Một giá trị liên tục`, `B. Một nhãn phân loại`, `C. Một cụm dữ liệu`, `D. Một hình ảnh`.

**States**: current lesson done → bottom block turns success; after submit, option rows turn success/danger and a `Giải thích` block appears; focus mode hides both side columns and bar chrome; loading → skeleton title + 6 lines.

---

## 4. Random review / practice (`/practice`) **(new)** — desktop 1440×900 reference

**Grid**: top bar 56px, content `max-w-7xl`, three non-overlapping columns with 24px gap: **filters 320px** (sticky) · **question 1fr (≈ 640px max)** · **result 280px** (appears after submit; before that the column shows the session summary).

**Component order**
1. Page title `Ôn tập ngẫu nhiên` (page-title 30) + muted line `Câu hỏi lấy từ các bài bạn đã học`.
2. **Filter card** (320px, padding 20, sections separated by 20px gaps): `Nguồn câu hỏi` segmented control (`Bài đã học` selected = solid accent, `Đã đọc qua`); `Khóa học` select (default `Tất cả khóa học`, here `Học máy cơ bản`); `Số câu hỏi` range slider 5–50 with value pill `10`; switches `Xáo trộn câu hỏi` (on), `Xáo trộn đáp án` (on); full-width primary `Bắt đầu`.
3. **Question card** (QuestionCard style): header row `Câu 3/10` + thin amber progress bar + difficulty chip `Trung bình`; prompt 20/600 (`Hàm mất mát dùng để làm gì?`); options A–D; row `Mức độ chắc chắn` with 3 chips `Chắc chắn` · `Phân vân` · `Đoán` (single choice; on = accent-soft); footer: `Từ bài: Hồi quy tuyến tính · Học máy cơ bản` (muted, link) and primary `Nộp bài`.
4. **Result card** (after submit): overline `Kết quả`, **full circular score ring** 96px with `8/10` centred, caption `Điểm 80%`, line `Đúng 8/10 câu`, secondary `Làm lại 2 câu sai`, secondary `Ôn bộ mới`.

**Strings**: `Ôn tập ngẫu nhiên`, `Nguồn câu hỏi`, `Bài đã học`, `Đã đọc qua`, `Khóa học`, `Số câu hỏi`, `Xáo trộn câu hỏi`, `Xáo trộn đáp án`, `Bắt đầu`, `Câu 3/10`, `Mức độ chắc chắn`, `Chắc chắn`, `Phân vân`, `Đoán`, `Nộp bài`, `Kết quả`, `Điểm 80%`, `Làm lại 2 câu sai`.

**States**: nothing to review → `empty-review` illustration + `Hôm nay không còn câu nào cần ôn` + `Chọn khóa khác`; no questions match filters → `empty-search`; 100 % → `quiz-perfect` illustration beside the ring + `Trọn điểm`; loading → skeleton question.

---

## 5. Markdown editor (`/edit/...`) **(new)** — desktop 1440×900 reference

**Grid**: toolbar 52px (white, bottom border) then a full-height 3-area row: **source pane 40 %** · **preview pane 40 %** · **checks panel 20 % (min 280px)**; 1px dividers, no gaps between panes (panes are flush, the checks panel is a card with 16px margin).

**Toolbar (left → right)**: breadcrumb `Học máy cơ bản › Hồi quy tuyến tính.md` (muted › current) · amber dot + `Chưa lưu` · secondary `Xem thay đổi (diff)` · secondary with undo icon `Khôi phục bản trước` · primary with save icon `Lưu`.
**Source pane**: `--bg-elevated`, JetBrains Mono 13/22, gutter with line numbers (muted 55 %), light syntax tint (headings accent, frontmatter keys amber, quote muted). Starts with frontmatter:
```
---
title: Hồi quy tuyến tính
tags: [ml, hoi-quy]
duration: 12
---
# Hồi quy tuyến tính
## Ý tưởng chính
```
**Preview pane**: white surface, same typography as the reader (`prose-lesson`), small label `Xem trước` top-right, same callout / code / diagram styles.
**Checks panel** (`Kiểm tra mẫu`): count pill `3/5`, thin amber bar, list with success check for present sections (`Tiêu đề`, `Ý tưởng chính`, `Ví dụ`) and amber warning for missing ones (`Thiếu: Tóm tắt`, `Thiếu: Câu hỏi ôn tập`), outlined button `Chèn phần còn thiếu`.

**States**: clean → toolbar shows `Đã lưu` in muted text and `Lưu` disabled; diff open → right preview replaced by unified diff (added lines `--success-soft`, removed `--danger-soft`); restore → confirmation strip in `--amber-soft` `Khôi phục bản đã lưu lúc 14:32?` with `Khôi phục` / `Hủy`; all checks pass → panel header turns success `5/5 · Đúng mẫu`.

---

## 6. Mobile reader — portrait 390×844 (9:16 image)

**Grid**: single column, 16px side gutters, no sidebars. Sticky top bar 52px: back chevron, centred course name `Học máy cơ bản`, bookmark icon; 2px accent progress line under it. Content flows: chips `Bài 7` + `12 phút đọc` → title (30/1.2, serif allowed) → `Ý tưởng chính` (h2 22) with body lines → callout `Ghi nhớ` → review card `Câu hỏi ôn tập` (rounded-2xl white, prompt 16/500, three option rows min-height 48px, secondary `Kiểm tra`/`Nộp bài`). Bottom area is a fixed bar (white, top hairline, safe-area padding) with `Mục lục` pill (list icon, opens bottom sheet with `Mục lục bài`, `rounded-t-2xl`, max 75 vh) at the left and primary `Bài tiếp theo →` at the right. (The shipped app has a floating `Mục lục` pill bottom-right; the mockup explores a full-width bottom bar.)

**Strings**: `Học máy cơ bản`, `Bài 7`, `12 phút đọc`, `Hồi quy tuyến tính`, `Ý tưởng chính`, `Ghi nhớ`, `Câu hỏi ôn tập`, `Mục lục`, `Bài tiếp theo`, `Nộp bài`.

**States**: drawer open → left drawer `Bài học trong khóa` (88 vw, max 22rem); TOC sheet → `Mục lục bài`; last lesson → card `Hết khóa học` / `Về trang khóa học`; offline/loading → skeletons.

---

## 7. Illustration style (assets in `public/illus/`)

Flat gouache + thin ink outline, matte paper grain, limited palette (`--accent` green-teal, `--accent-soft` mint, `--amber`, cream, warm grey, ink outline), flat `#f6f5f1` background, subject centred with generous margin, no text, no people. Empty states are square (max 220px display), hero 16:9 sits inside the dashboard "Tiếp tục học" band or the empty dashboard.
