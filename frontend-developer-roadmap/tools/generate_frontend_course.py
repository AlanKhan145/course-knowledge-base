from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
import re
import sys
import textwrap


BASE_DIR = Path(__file__).resolve().parents[1]
COURSE_ROOT = BASE_DIR / "Frontend-Developer-Roadmap-Course"
OFFICIAL_ROOT = COURSE_ROOT / "00 - Roadmap.sh Frontend Official"
SOURCE_FILE = Path(r"C:\Users\Khanh PC\Downloads\frontend-roadmap-scraped-2026.md")


@dataclass(frozen=True)
class Item:
    title: str
    kind: str = "lesson"
    description: str = ""
    source_section: str = ""


@dataclass(frozen=True)
class Module:
    number: int
    title: str
    source_section: str
    items: list[Item] = field(default_factory=list)


@dataclass(frozen=True)
class Phase:
    number: int
    title: str
    modules: list[Module] = field(default_factory=list)


def item(title: str, kind: str = "lesson", description: str = "", source: str = "") -> Item:
    return Item(title=title, kind=kind, description=description, source_section=source)


def items(titles: list[str], kind: str = "lesson", source: str = "") -> list[Item]:
    return [item(title, kind=kind, source=source) for title in titles]


BEGINNER_PROJECTS = [
    ("Single-Page CV", "Create a single-page HTML CV to showcase your career history."),
    ("Basic HTML Website", "Create simple HTML only website with multiple pages."),
    ("Personal Portfolio", "Convert the previous simple HTML website into a personal portfolio."),
    ("Changelog Component", "Create a changelog component for a website using HTML and CSS."),
    ("Testimonial Cards", "Create testimonial cards for a website using HTML and CSS."),
    ("Datepicker UI", "Create a simple datepicker UI using HTML and CSS."),
    ("Accessible Form UI", "Create an accessible form UI using HTML and CSS."),
    ("Image Grid Layout", "Create a grid layout of images using HTML and CSS."),
    ("Tooltip UI", "Create a tooltip for navigation items using only HTML and CSS."),
    ("Tabs", "Create a simple tabs component using HTML, CSS, and JavaScript."),
    ("Cookie Consent", "Create a simple cookie consent banner using JavaScript."),
    ("Restricted Textarea", "Create a textarea with live character count and a max character limit."),
    ("Accordion", "Create an accordion component using HTML, CSS, and JavaScript."),
    ("Age Calculator", "Create an age calculator using HTML, CSS, and JavaScript."),
    ("Flash Cards", "Create a flash card app using JavaScript frameworks."),
    ("Pricing Comparison Table", "Build a single-page pricing comparison using a real, accessible HTML table."),
    ("Blog Post Page", "Build a single semantic HTML blog post with proper text elements, links, and a figure."),
    ("Contact Form", "Build an accessible HTML contact form with real labels, grouped controls, and browser validation."),
    ("Photo Showcase", "Build an HTML photo showcase page with proper alt text, figures with captions, and an embedded video."),
    ("Pricing Cards", "Create a row of three pricing cards using HTML and CSS."),
]


INTERMEDIATE_PROJECTS = [
    ("Quiz App", "Build a browser-based quiz application to test any knowledge."),
    ("Weather Web App", "Build a weather app that fetches and displays weather for a given location."),
    ("GitHub Random Repository", "Create a GitHub random repository finder using GitHub API."),
    ("Custom Dropdown", "Create a custom dropdown using HTML, CSS, and JavaScript."),
    ("Task Tracker", "Create a task tracker with a to-do list using JavaScript."),
    ("Reddit Client", "Create a Reddit client with customizable subreddit lanes."),
    ("Temperature Converter", "Build a temperature converter that converts between different units."),
    ("Pomodoro Timer", "Create a pomodoro tracker application for productivity."),
    ("Theme Switcher with CSS Variables", "Build a theme switcher that changes a card using CSS variables."),
]


ADVANCED_PROJECTS = [
    ("24hr Story Feature", "Create a client-side Instagram stories feature clone."),
]


COURSE: list[Phase] = [
    Phase(
        1,
        "Web Foundation",
        [
            Module(
                0,
                "Front-end Roadmap Root",
                "00. Front-end Roadmap Root",
                [
                    item(
                        "Front-end Roadmap Overview",
                        "overview",
                        "Step-by-step guide to becoming a modern frontend developer in 2026.",
                        "00. Front-end Roadmap Root",
                    )
                ],
            ),
            Module(
                1,
                "Internet",
                "01. Internet",
                items(
                    [
                        "How does the internet work?",
                        "What is HTTP?",
                        "What is Domain Name?",
                        "What is hosting?",
                        "DNS and how it works?",
                        "Browsers and how they work?",
                    ],
                    source="01. Internet",
                ),
            ),
            Module(
                2,
                "HTML",
                "02. HTML",
                items(["HTML"], source="02. HTML")
                + items(["HTML Roadmap"], kind="related", source="02. HTML / Related roadmap"),
            ),
            Module(
                3,
                "CSS",
                "03. CSS",
                items(["CSS"], source="03. CSS")
                + items(["CSS Roadmap"], kind="related", source="03. CSS / Related roadmap"),
            ),
            Module(
                4,
                "JavaScript",
                "04. JavaScript",
                items(["JavaScript"], source="04. JavaScript")
                + items(["JavaScript Roadmap"], kind="related", source="04. JavaScript / Related roadmap"),
            ),
        ],
    ),
    Phase(
        2,
        "Developer Workflow",
        [
            Module(5, "Version Control", "05. Version Control", items(["Git"], source="05. Version Control")),
            Module(6, "VCS Hosting", "06. VCS Hosting", items(["GitHub", "GitLab"], source="06. VCS Hosting")),
            Module(
                7,
                "Package Managers",
                "07. Package Managers",
                items(["npm", "yarn", "pnpm", "Bun"], source="07. Package Managers"),
            ),
            Module(
                8,
                "Beginner Project Checkpoint",
                "08. Beginner Project Checkpoint",
                [item("Beginner Project Ideas", "checkpoint", source="08. Beginner Project Checkpoint")]
                + [
                    item(title, "project", description, "08. Beginner project ideas from roadmap.sh/frontend/projects")
                    for title, description in BEGINNER_PROJECTS
                ],
            ),
        ],
    ),
    Phase(
        3,
        "Frameworks and Styling",
        [
            Module(
                9,
                "Learn a Framework",
                "09. Learn a Framework",
                items(["React", "Vue.js", "Angular", "Svelte", "Solid JS"], source="09. Learn a Framework")
                + items(
                    ["React Roadmap", "Vue Roadmap", "Angular Roadmap"],
                    kind="related",
                    source="09. Learn a Framework / Related roadmaps",
                ),
            ),
            Module(10, "CSS Frameworks", "10. CSS Frameworks", items(["Tailwind"], source="10. CSS Frameworks")),
            Module(
                11,
                "Intermediate Project Checkpoint",
                "11. Intermediate Project Checkpoint",
                [item("Intermediate Project Ideas", "checkpoint", source="11. Intermediate Project Checkpoint")]
                + [
                    item(title, "project", description, "11. Intermediate project ideas from roadmap.sh/frontend/projects")
                    for title, description in INTERMEDIATE_PROJECTS
                ],
            ),
        ],
    ),
    Phase(
        4,
        "AI in Development",
        [
            Module(
                12,
                "AI Basics",
                "12.1 Learn the Basics",
                items(
                    [
                        "How LLMs work",
                        "AI vs Traditional Coding",
                        "Applications",
                        "Code Reviews",
                        "Refactoring",
                        "Docs Generation",
                    ],
                    source="12.1 Learn the Basics",
                ),
            ),
            Module(
                13,
                "AI Assisted Coding",
                "12.2 AI Assisted Coding",
                items(["Claude Code", "Cursor", "Copilot", "Antigravity"], source="12.2 AI Assisted Coding"),
            ),
            Module(14, "Prompting Techniques", "12.3 Prompting Techniques", items(["Prompt Engineering"], source="12.3 Prompting Techniques")),
            Module(15, "Agents", "12.4 Agents", items(["AI Agents Roadmap"], source="12.4 Agents")),
            Module(16, "MCP", "12.5 MCP", items(["MCP"], source="12.5 MCP")),
            Module(17, "Skills", "12.6 Skills", items(["Skills"], source="12.6 Skills")),
            Module(18, "Implementing AI", "12.7 Implementing AI", items(["Gemini", "OpenAI", "Anthropic"], source="12.7 Implementing AI")),
        ],
    ),
    Phase(
        5,
        "Advanced Frontend Foundation",
        [
            Module(
                19,
                "Advanced Frontend",
                "13. Advanced Frontend",
                [
                    item(
                        "Advanced Frontend Orientation",
                        "overview",
                        "Advanced Frontend begins after the framework, CSS framework, intermediate projects, and AI-in-development section.",
                        "13. Advanced Frontend",
                    )
                ],
            ),
            Module(20, "Auth Strategies", "14. Auth Strategies", items(["Auth Strategies"], source="14. Auth Strategies")),
            Module(
                21,
                "Module Bundlers",
                "15. Module Bundlers",
                items(["Vite", "SWC", "esbuild", "Rollup", "Rolldown", "Parcel"], source="15. Module Bundlers"),
            ),
            Module(22, "Linters and Formatters", "16. Linters & Formatters", items(["Biome", "Prettier", "ESLint"], source="16. Linters & Formatters")),
            Module(23, "Testing", "17. Testing", items(["Vitest", "Playwright", "Cypress", "Jest"], source="17. Testing")),
            Module(24, "Web Security", "18. Web Security", items(["CORS", "HTTPS", "CSP", "OWASP Risks"], source="18. Web Security")),
            Module(25, "Web APIs", "19. Web APIs", items(["Web APIs"], source="19. Web APIs")),
        ],
    ),
    Phase(
        6,
        "Type Safety Rendering Deployment",
        [
            Module(
                26,
                "Type Checkers",
                "20. Type Checkers",
                items(["TypeScript"], source="20. Type Checkers")
                + items(["TypeScript Roadmap"], kind="related", source="20. Type Checkers / Related roadmap"),
            ),
            Module(
                27,
                "SSR",
                "21. SSR",
                items(
                    [
                        "Angular",
                        "Vue.js",
                        "Nuxt.js",
                        "SvelteKit",
                        "Svelte",
                        "React",
                        "Next.js",
                        "Tanstack Start",
                        "Astro",
                        "react-router",
                    ],
                    source="21. SSR",
                ),
            ),
            Module(28, "SSG", "22. SSG", items(["Astro", "Next.js", "Vuepress", "Eleventy", "Nuxt.js"], source="22. SSG")),
            Module(29, "Deployment", "23. Deployment", items(["GitHub Pages", "Vercel", "Netlify", "Cloudflare", "Railway", "Render"], source="23. Deployment")),
            Module(
                30,
                "Design Systems",
                "24. Design Systems",
                items(["Design Systems"], source="24. Design Systems")
                + items(["Design System Roadmap"], kind="related", source="24. Design Systems / Related roadmap"),
            ),
            Module(31, "Performance", "25. Performance", items(["Lighthouse", "DevTools Usage", "Service Workers", "Cache-Control", "Streamed Responses"], source="25. Performance")),
        ],
    ),
    Phase(
        7,
        "Advanced Capstones and Platform",
        [
            Module(
                32,
                "Advanced Project Checkpoint",
                "26. Advanced Project Checkpoint",
                [item("Advanced Project Ideas", "checkpoint", source="26. Advanced Project Checkpoint")]
                + [item(title, "project", description, "26. Advanced project ideas from roadmap.sh/frontend/projects") for title, description in ADVANCED_PROJECTS],
            ),
            Module(33, "Web Components", "27. Web Components", items(["HTML Templates", "Custom Elements", "Shadow DOM"], source="27. Web Components")),
            Module(
                34,
                "GraphQL",
                "28. GraphQL",
                items(["Apollo", "Relay Modern"], source="28. GraphQL")
                + items(["GraphQL Roadmap"], kind="related", source="28. GraphQL / Related roadmap"),
            ),
            Module(35, "Accessibility", "29. Accessibility", items(["Accessibility"], source="29. Accessibility")),
            Module(36, "PWAs", "30. PWAs", items(["PWAs"], source="30. PWAs")),
            Module(
                37,
                "Mobile Apps",
                "31. Mobile Apps",
                items(["React Native", "Flutter", "Ionic"], source="31. Mobile Apps")
                + items(["React Native Roadmap", "Flutter Roadmap"], kind="related", source="31. Mobile Apps / Related roadmaps"),
            ),
            Module(38, "Desktop Apps", "32. Desktop Apps", items(["Electron", "Tauri", "Flutter"], source="32. Desktop Apps")),
        ],
    ),
    Phase(
        8,
        "Continue Learning and FAQ",
        [
            Module(
                39,
                "Continue Learning Tracks",
                "33. Continue Learning Tracks",
                items(["Node.js", "Fullstack", "Backend", "Design System"], kind="track", source="33. Continue Learning Tracks")
                + items(
                    ["Node.js Roadmap", "Full Stack Roadmap", "Backend Roadmap", "Design System Roadmap"],
                    kind="related",
                    source="33. Continue Learning Tracks / Related roadmaps",
                ),
            ),
            Module(
                40,
                "Related Roadmaps Shown on Frontend Roadmap",
                "34. Related Roadmaps Shown on Frontend Roadmap",
                items(["JavaScript Roadmap", "React Roadmap", "TypeScript Roadmap", "Node.js Roadmap"], kind="related", source="34. Related Roadmaps Shown on Frontend Roadmap"),
            ),
            Module(
                41,
                "FAQ Topics Shown on the Page",
                "35. FAQ Topics Shown on the Page",
                items(
                    [
                        "Is Frontend Development really coding?",
                        "Is Frontend Developer a good career?",
                        "How to prepare for a frontend developer interview?",
                        "How is Frontend Development different from Backend Development?",
                        "What are the job titles of a Frontend Developer?",
                        "How to become a Frontend Developer?",
                        "How long does it take to become a Frontend Developer?",
                        "What are the Frontend Developer salaries?",
                        "Should I learn everything listed on the Frontend Roadmap?",
                        "What are Frontend Frameworks?",
                    ],
                    kind="faq",
                    source="35. FAQ Topics Shown on the Page",
                ),
            ),
        ],
    ),
]


CONCEPTS: dict[str, list[str]] = {
    "How does the internet work?": [
        "Client, server, router, ISP, DNS va data center tao nen hanh trinh cua mot request.",
        "Du lieu di qua mang theo tung goi nho, moi goi co dia chi nguon va dia chi dich.",
        "TCP/IP giup thiet bi ket noi on dinh; HTTP dinh nghia cach trinh duyet va server noi chuyen.",
        "Latency, bandwidth va reliability anh huong truc tiep den trai nghiem frontend.",
    ],
    "What is HTTP?": [
        "HTTP la giao thuc request/response giua client va server.",
        "Request gom method, URL, headers va body; response gom status code, headers va body.",
        "GET, POST, PUT, PATCH va DELETE nen duoc dung dung y nghia de API de doan.",
        "Frontend can doc status code, cache header va content type de xu ly dung.",
    ],
    "What is Domain Name?": [
        "Domain name la ten de con nguoi de nho thay cho dia chi IP.",
        "Mot domain co the co subdomain, top-level domain va nhieu DNS record.",
        "Frontend can hieu domain vi cookie, CORS, SEO va deployment deu lien quan den origin.",
    ],
    "What is hosting?": [
        "Hosting la noi chua va phuc vu file ung dung web cho nguoi dung.",
        "Static hosting phuc vu HTML/CSS/JS da build; application hosting chay server runtime.",
        "CDN dua asset den gan nguoi dung hon de giam latency.",
    ],
    "DNS and how it works?": [
        "DNS bien domain thanh IP thong qua resolver, root server, TLD server va authoritative server.",
        "Record pho bien gom A, AAAA, CNAME, MX va TXT.",
        "TTL quyet dinh thoi gian cache record, anh huong toc do propagation khi deploy.",
    ],
    "Browsers and how they work?": [
        "Browser parse HTML thanh DOM, CSS thanh CSSOM, sau do ket hop thanh render tree.",
        "JavaScript co the thay doi DOM/CSSOM va gay style, layout hoac paint lai.",
        "Network, rendering, storage, security sandbox va DevTools la cac phan quan trong cua browser.",
    ],
    "HTML": [
        "HTML tao cau truc noi dung bang element, attribute va semantic tag.",
        "Semantic HTML giup SEO, accessibility va maintainability tot hon.",
        "Form, table, image, video va metadata la nen tang cho trang web dung chuan.",
    ],
    "CSS": [
        "CSS dieu khien presentation thong qua selector, cascade, specificity va inheritance.",
        "Box model, layout, typography, color va responsive design la nhom kien thuc cot loi.",
        "Modern CSS gom flexbox, grid, custom properties, container queries va media queries.",
    ],
    "JavaScript": [
        "JavaScript them behavior cho trang web thong qua DOM, event va asynchronous APIs.",
        "Scope, closure, object, prototype, module va promise la nen tang can nam chac.",
        "Frontend hien dai dung JavaScript de fetch data, quan ly state va render UI tuong tac.",
    ],
    "Git": [
        "Git luu lich su thay doi du an theo commit.",
        "Branch giup phat trien tinh nang rieng roi va merge/rebase khi can.",
        "Mot commit tot nen nho, co thong diep ro, va co the review doc lap.",
    ],
    "GitHub": [
        "GitHub la noi host repository, pull request, issue va automation.",
        "Pull request tao vong lap review, CI va thuc hanh collaboration.",
        "Branch protection va GitHub Actions giup giam loi khi release.",
    ],
    "GitLab": [
        "GitLab cung cap repository, merge request, issue va CI/CD tich hop.",
        "Pipeline trong GitLab thich hop cho workflow tu build, test den deploy.",
        "Nhom frontend can hieu permission, review rule va environment trong GitLab.",
    ],
    "npm": [
        "npm la package manager mac dinh di cung Node.js.",
        "package.json mo ta dependency, script va metadata cua du an.",
        "package-lock.json giup cai dung phien ban dependency trong moi truong khac nhau.",
    ],
    "yarn": [
        "Yarn tap trung vao cai package nhanh, on dinh va co lockfile rieng.",
        "Workspace giup quan ly monorepo co nhieu package.",
        "Can thong nhat mot package manager trong team de tranh lockfile xung dot.",
    ],
    "pnpm": [
        "pnpm dung content-addressable store de tiet kiem dung luong va cai nhanh.",
        "node_modules cua pnpm nghiem ngat hon, giup phat hien dependency khai bao thieu.",
        "Workspace cua pnpm duoc dung nhieu trong monorepo frontend.",
    ],
    "Bun": [
        "Bun ket hop runtime, package manager, bundler va test runner trong mot tool.",
        "No huu ich cho project can toc do cao, nhung can kiem tra compatibility voi ecosystem.",
        "Frontend engineer nen biet khi nao dung Bun va khi nao giu Node.js/npm on dinh hon.",
    ],
    "React": [
        "React xay UI bang component, props, state va declarative rendering.",
        "Hooks nhu useState, useEffect va useMemo giup quan ly lifecycle va state cuc bo.",
        "Data flow mot chieu giup UI de debug hon khi ung dung lon dan.",
    ],
    "Vue.js": [
        "Vue ket hop template, reactivity va component single-file de xay UI nhanh.",
        "Composition API giup tach logic va tai su dung trong component.",
        "Vue Router va Pinia la cac phan pho bien trong ung dung Vue.",
    ],
    "Angular": [
        "Angular la framework day du voi component, dependency injection, router va forms.",
        "TypeScript la ngon ngu mac dinh trong Angular.",
        "Angular phu hop ung dung enterprise can convention ro va tooling dong bo.",
    ],
    "Svelte": [
        "Svelte bien component thanh JavaScript toi uu o build time.",
        "State va reactivity trong Svelte duoc viet ngan gon hon nhieu framework khac.",
        "SvelteKit mo rong Svelte cho routing, SSR va full-stack app.",
    ],
    "Solid JS": [
        "Solid dung fine-grained reactivity de update dung phan UI thay doi.",
        "Cu phap gan React JSX nhung mental model gan signal hon virtual DOM.",
        "Solid phu hop khi can UI nhanh va state reactive ro rang.",
    ],
    "Tailwind": [
        "Tailwind la utility-first CSS framework.",
        "Class utility giup style truc tiep trong markup ma van theo design token.",
        "Config theme giup chuan hoa spacing, color, typography va breakpoint.",
    ],
    "How LLMs work": [
        "LLM du doan token tiep theo dua tren ngu canh, khong phai co y thuc hay hieu nhu con nguoi.",
        "Prompt, context window, system instruction va examples anh huong chat luong dau ra.",
        "Frontend engineer dung LLM tot hon khi biet chia task, kiem chung va doc diff.",
    ],
    "AI vs Traditional Coding": [
        "Traditional coding yeu cau dev viet tung buoc ro rang; AI assisted coding them vong lap mo ta, sinh, kiem tra.",
        "AI co the tang toc boilerplate nhung khong thay the hieu biet ve requirement va architecture.",
        "Chat luong dau ra phu thuoc vao context, rang buoc va kha nang review cua lap trinh vien.",
    ],
    "Applications": [
        "AI co the ho tro generate UI, viet test, doc code, refactor va tao tai lieu.",
        "Task tot cho AI la task co dau vao ro va tieu chi kiem tra ro.",
        "Task rui ro can review ky gom auth, security, billing va data migration.",
    ],
    "Code Reviews": [
        "AI co the phat hien bug pattern, missing edge case va test gap.",
        "Review tot can dua diff, context, acceptance criteria va yeu cau uu tien severity.",
        "Nguoi review van phai quyet dinh ve product behavior va trade-off.",
    ],
    "Refactoring": [
        "Refactor la thay doi cau truc code ma khong doi behavior ben ngoai.",
        "AI giup tach ham, dat ten, giam duplication va them test bao ve.",
        "Refactor an toan can co test hoac checklist behavior truoc/sau.",
    ],
    "Docs Generation": [
        "AI giup tao README, API docs, changelog va onboarding note tu code/context.",
        "Docs tot can noi ro doi tuong doc, muc tieu, buoc chay va loi thuong gap.",
        "Can kiem tra lenh, path, version va gia dinh trong docs sau khi sinh.",
    ],
    "Prompt Engineering": [
        "Prompt tot neu co role, goal, context, constraints, output format va acceptance criteria.",
        "Few-shot examples giup model bat dung style va cau truc mong muon.",
        "Iterative prompting tot hon mot prompt qua dai nhung khong co phan hoi.",
    ],
    "MCP": [
        "MCP la cach ket noi assistant voi tool va nguon du lieu ben ngoai thong qua giao thuc chung.",
        "Server MCP expose tool, resource va prompt cho client su dung co kiem soat.",
        "Use case frontend gom doc design system, issue tracker, repo, browser va docs noi bo.",
    ],
    "Skills": [
        "Skill la goi huong dan/asset/workflow giup assistant lam mot loai viec on dinh hon.",
        "Skill tot co trigger ro, quy trinh ngan gon va tai nguyen tham chieu dung luc.",
        "Frontend team co the tao skill cho design system, testing, release note va migration.",
    ],
    "Auth Strategies": [
        "Auth xac minh nguoi dung; authorization quyet dinh nguoi dung duoc lam gi.",
        "Cookie session, JWT, OAuth/OIDC va magic link la cac chien luoc pho bien.",
        "Frontend can xu ly token storage, refresh, redirect, CSRF/XSS va state dang nhap.",
    ],
    "Vite": [
        "Vite dung dev server ESM nhanh va build production qua bundler.",
        "No phu hop React, Vue, Svelte va nhieu stack frontend hien dai.",
        "Config can quan tam alias, env var, plugin va build output.",
    ],
    "SWC": [
        "SWC la compiler nhanh viet bang Rust, thuong dung de transpile JavaScript/TypeScript.",
        "No co the thay Babel trong mot so pipeline de tang toc build.",
        "Can kiem tra plugin/ecosystem compatibility truoc khi thay doi toolchain.",
    ],
    "esbuild": [
        "esbuild la bundler/transpiler rat nhanh, phu hop dev tooling va build don gian.",
        "No ho tro bundle, minify, transform va watch.",
        "Mot so feature plugin nang co the can Rollup/Webpack/Vite wrapper.",
    ],
    "Rollup": [
        "Rollup manh cho library bundling va tree-shaking.",
        "Output co the la ESM, CJS, UMD tuy nhu cau package.",
        "Plugin ecosystem giup xu ly TypeScript, CSS, asset va minification.",
    ],
    "Rolldown": [
        "Rolldown huong den bundling nhanh theo phong cach Rollup.",
        "Khi hoc, tap trung vao ly do toolchain moi can compatibility va performance.",
        "Dung trong course nhu mot diem nhan ve xu huong bundler hien dai.",
    ],
    "Parcel": [
        "Parcel la zero-config bundler, thich hop demo nhanh va project nho.",
        "No tu phat hien entry, transform asset va tao development server.",
        "Project lon van can hieu cache, target va plugin neu muon toi uu.",
    ],
    "Biome": [
        "Biome gom formatter va linter trong mot tool nhanh.",
        "No co the thay mot phan Prettier/ESLint tuy nhu cau rule.",
        "Team can chuan hoa config de tranh diff format khong can thiet.",
    ],
    "Prettier": [
        "Prettier la formatter opinionated giup code style dong nhat.",
        "Dung Prettier de giam tranh luan ve format trong review.",
        "Nen chay format qua editor, pre-commit hoac CI.",
    ],
    "ESLint": [
        "ESLint phat hien bug pattern va enforce convention JavaScript/TypeScript.",
        "Rule nen phuc vu maintainability, khong nen bien thanh vat can thua.",
        "Flat config la huong cau hinh hien dai trong ecosystem ESLint.",
    ],
    "Vitest": [
        "Vitest la test runner nhanh, gan voi Vite ecosystem.",
        "Phu hop unit test, component test va utility test.",
        "Can nam arrange-act-assert, mocking va coverage.",
    ],
    "Playwright": [
        "Playwright dung de kiem thu end-to-end tren browser that.",
        "No co locator manh, auto-wait va trace viewer.",
        "E2E test nen tap trung critical path thay vi test moi chi tiet nho.",
    ],
    "Cypress": [
        "Cypress giup viet integration/E2E test voi trai nghiem debug truc quan.",
        "No chay trong browser va co command queue rieng.",
        "Can hieu cach wait dung thay vi dua vao timeout tuy tien.",
    ],
    "Jest": [
        "Jest la test runner pho bien trong JavaScript ecosystem.",
        "No co assertion, mock, snapshot va coverage.",
        "Nhieu du an legacy React van dung Jest nen frontend dev can doc duoc.",
    ],
    "CORS": [
        "CORS la co che browser chan/cho phep request cross-origin.",
        "Server quyet dinh origin, method va header nao duoc phep.",
        "Preflight OPTIONS xay ra voi request khong don gian.",
    ],
    "HTTPS": [
        "HTTPS la HTTP chay tren TLS de ma hoa va xac thuc ket noi.",
        "Certificate, chain of trust va hostname verification bao ve nguoi dung.",
        "Frontend can biet mixed content, secure cookie va local dev certificate.",
    ],
    "CSP": [
        "Content Security Policy han che nguon script, style, image va connection.",
        "CSP giam tac hai XSS neu cau hinh dung.",
        "Bat dau voi report-only de do loi truoc khi enforce.",
    ],
    "OWASP Risks": [
        "OWASP tong hop cac rui ro bao mat web pho bien.",
        "Frontend lien quan nhieu den XSS, broken auth, sensitive data exposure va insecure design.",
        "Security nen duoc dua vao checklist code review va test.",
    ],
    "Web APIs": [
        "Web APIs la tap API browser cung cap cho JavaScript.",
        "Vi du gom Fetch, Storage, Clipboard, Geolocation, Notification, Canvas va Web Workers.",
        "Can kiem tra permission, browser support va progressive enhancement.",
    ],
    "TypeScript": [
        "TypeScript them static types len JavaScript.",
        "Type giup bat loi som, refactor an toan va cai thien autocomplete.",
        "Frontend can nam type inference, union, generic, narrowing va typing component props.",
    ],
    "Design Systems": [
        "Design system gom token, component, pattern, guideline va governance.",
        "No giup UI nhat quan va tang toc delivery.",
        "Frontend can chuyen token/design spec thanh component co state, variant va accessibility.",
    ],
    "Lighthouse": [
        "Lighthouse audit performance, accessibility, best practices va SEO.",
        "Diem so chi la tin hieu; can doc opportunity va trace de sua dung.",
        "Chay tren local, staging va production de so sanh.",
    ],
    "DevTools Usage": [
        "DevTools giup debug DOM, CSS, network, performance, memory va storage.",
        "Network tab cho biet waterfall, cache, status code va payload.",
        "Performance tab giup thay long task, layout shift va rendering bottleneck.",
    ],
    "Service Workers": [
        "Service worker la script chay rieng, co the intercept request va cache response.",
        "No la nen tang cho offline, background sync va push notification.",
        "Cache strategy phai ro de tranh nguoi dung bi ket o version cu.",
    ],
    "Cache-Control": [
        "Cache-Control noi browser/CDN cache response nhu the nao.",
        "Immutable hashed assets co the cache lau; HTML thuong can revalidate nhanh.",
        "Sai cache header co the lam deploy moi khong hien hoac data cu.",
    ],
    "Streamed Responses": [
        "Streaming cho phep gui tung phan response thay vi doi toan bo noi dung.",
        "SSR streaming cai thien perceived performance cho trang nang.",
        "Can xu ly loading state, error boundary va network fallback.",
    ],
    "HTML Templates": [
        "template giu markup khong render ngay cho den khi clone bang JavaScript.",
        "No huu ich khi tao Web Component hoac render UI lap lai.",
        "Template tach markup mau khoi logic tao node thu cong.",
    ],
    "Custom Elements": [
        "Custom Elements cho phep dinh nghia tag HTML rieng bang class JavaScript.",
        "Lifecycle callbacks giup xu ly khi element duoc gan/bo khoi DOM.",
        "Ten custom element can co dau gach noi, vi du user-card.",
    ],
    "Shadow DOM": [
        "Shadow DOM dong goi DOM va style ben trong component.",
        "No giup style isolation nhung can quan tam accessibility va theming.",
        "slot cho phep nguoi dung component chen noi dung vao shadow tree.",
    ],
    "Apollo": [
        "Apollo Client giup frontend query, cache va update du lieu GraphQL.",
        "Cache normalized giam request lap lai nhung can hieu key va invalidation.",
        "Hook query/mutation giup gan data GraphQL vao UI component.",
    ],
    "Relay Modern": [
        "Relay toi uu cho ung dung React lon dung GraphQL nghiem ngat.",
        "Fragment colocation giup component khai bao dung data no can.",
        "Compiler cua Relay tao artifact va bat loi schema/query som.",
    ],
    "Accessibility": [
        "Accessibility dam bao nguoi dung voi nhieu kha nang khac nhau van dung duoc san pham.",
        "Nen tang gom semantic HTML, keyboard navigation, focus, contrast va screen reader label.",
        "A11y la chat luong san pham, khong phai buoc them vao cuoi.",
    ],
    "PWAs": [
        "PWA ket hop web app voi kha nang cai dat, offline va app-like behavior.",
        "Manifest, service worker va HTTPS la thanh phan cot loi.",
        "Can dam bao fallback khi browser khong ho tro tat ca feature.",
    ],
    "React Native": [
        "React Native dung React de xay mobile app native.",
        "Component render thanh native view thay vi DOM.",
        "Can hieu navigation, platform differences, performance va native modules.",
    ],
    "Flutter": [
        "Flutter dung Dart va rendering engine rieng de xay UI cross-platform.",
        "Widget tree, state management va layout constraint la kien thuc cot loi.",
        "Frontend dev hoc Flutter de mo rong sang mobile/desktop voi mot UI toolkit rieng.",
    ],
    "Ionic": [
        "Ionic dung web technology de xay mobile app hybrid.",
        "No thuong ket hop Capacitor de truy cap native API.",
        "Phu hop team web muon dua san pham len mobile nhanh.",
    ],
    "Electron": [
        "Electron dong goi web app voi Chromium va Node.js de tao desktop app.",
        "Can tach main process va renderer process.",
        "Security quan trong vi renderer co nguy co tiep xuc noi dung web.",
    ],
    "Tauri": [
        "Tauri tao desktop app nhe hon bang webview he dieu hanh va backend Rust.",
        "No phu hop khi can binary nho va security boundary chat.",
        "Frontend van viet HTML/CSS/JS nhung bridge voi command native.",
    ],
    "Node.js": [
        "Node.js cho phep chay JavaScript tren server.",
        "Frontend dev hoc Node de viet tooling, API, SSR va full-stack feature.",
        "Can nam event loop, package ecosystem va HTTP server basics.",
    ],
    "Fullstack": [
        "Fullstack ket noi frontend, backend, database, auth va deployment.",
        "Gia tri nam o kha nang thiet ke flow end-to-end va debug qua nhieu lop.",
        "Nen hoc fullstack sau khi co nen frontend va backend communication tot.",
    ],
    "Backend": [
        "Backend xu ly business logic, database, auth, queue, cache va integration.",
        "Frontend dev biet backend se thiet ke API tot hon va debug san pham nhanh hon.",
        "Can nam HTTP, database, security, scaling va observability.",
    ],
    "Design System": [
        "Track Design System dao sau vao token, component library, documentation va governance.",
        "No phu hop frontend engineer muon lam platform/UI infrastructure.",
        "Thanh cong khi design va engineering dung chung ngon ngu va contract.",
    ],
}


SNIPPETS: dict[str, str] = {
    "What is HTTP?": """```http
GET /products?limit=10 HTTP/1.1
Host: example.com
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=60
```""",
    "HTML": """```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio</title>
  </head>
  <body>
    <header><h1>Nguyen Van A</h1></header>
    <main>
      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
      </section>
    </main>
  </body>
</html>
```""",
    "CSS": """```css
:root {
  --space-4: 1rem;
  --color-brand: #2563eb;
}

.card {
  display: grid;
  gap: var(--space-4);
  padding: var(--space-4);
  border: 1px solid #e5e7eb;
}
```""",
    "JavaScript": """```js
const response = await fetch("/api/products");

if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}

const products = await response.json();
renderProducts(products);
```""",
    "Git": """```bash
git status
git switch -c feature/profile-card
git add .
git commit -m "Build profile card"
git push -u origin feature/profile-card
```""",
    "npm": """```bash
npm init -y
npm install react react-dom
npm run dev
```""",
    "pnpm": """```bash
pnpm install
pnpm add -D vite typescript
pnpm --filter web dev
```""",
    "React": """```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```""",
    "Vue.js": """```vue
<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count++">Count: {{ count }}</button>
</template>
```""",
    "Svelte": """```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>Count: {count}</button>
```""",
    "Tailwind": """```html
<article class="rounded-lg border border-slate-200 p-4 shadow-sm">
  <h2 class="text-lg font-semibold text-slate-900">Starter Plan</h2>
  <p class="mt-2 text-sm text-slate-600">For personal projects.</p>
</article>
```""",
    "Prompt Engineering": """```text
Role: You are a senior frontend reviewer.
Context: This diff changes the checkout form.
Task: Find bugs, accessibility issues, and missing tests.
Output: List findings by severity with file references.
```""",
    "Vite": """```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": "/src" },
  },
});
```""",
    "Prettier": """```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```""",
    "ESLint": """```js
// eslint.config.js
export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
```""",
    "Vitest": """```js
import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("formats USD values", () => {
    expect(formatPrice(12)).toBe("$12.00");
  });
});
```""",
    "Playwright": """```ts
import { test, expect } from "@playwright/test";

test("user can open the pricing page", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByRole("heading", { name: "Pricing" })).toBeVisible();
});
```""",
    "CORS": """```http
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```""",
    "CSP": """```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  img-src 'self' https:;
  connect-src 'self' https://api.example.com
```""",
    "TypeScript": """```ts
type User = {
  id: string;
  name: string;
  role: "admin" | "member";
};

function canManageUsers(user: User) {
  return user.role === "admin";
}
```""",
    "Service Workers": """```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
```""",
    "HTML Templates": """```html
<template id="user-card-template">
  <article class="card">
    <h2></h2>
    <p></p>
  </article>
</template>
```""",
    "Custom Elements": """```js
class UserCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<article><h2>${this.getAttribute("name")}</h2></article>`;
  }
}

customElements.define("user-card", UserCard);
```""",
    "Shadow DOM": """```js
const shadow = this.attachShadow({ mode: "open" });
shadow.innerHTML = `
  <style>:host { display: block; }</style>
  <slot></slot>
`;
```""",
    "Apollo": """```graphql
query ProductList {
  products {
    id
    name
    price
  }
}
```""",
    "PWAs": """```json
{
  "name": "Frontend Roadmap App",
  "short_name": "Roadmap",
  "start_url": "/",
  "display": "standalone"
}
```""",
}


FAQ_ANSWERS: dict[str, str] = {
    "Is Frontend Development really coding?": "Co. Frontend development la coding that su: ban viet HTML, CSS, JavaScript/TypeScript, lam viec voi API, state, performance, accessibility, security va deployment.",
    "Is Frontend Developer a good career?": "Co the la mot huong nghe nghiep tot neu ban thich xay trai nghiem nguoi dung, lam viec gan san pham va lien tuc hoc cong nghe web moi.",
    "How to prepare for a frontend developer interview?": "Tap trung vao JavaScript, browser, HTML/CSS, accessibility, framework dang dung, testing, API, system thinking va kha nang giai thich trade-off.",
    "How is Frontend Development different from Backend Development?": "Frontend tap trung vao UI, browser va trai nghiem nguoi dung; backend tap trung vao server, database, business logic, auth va infrastructure.",
    "What are the job titles of a Frontend Developer?": "Cac title thuong gap gom Frontend Developer, Frontend Engineer, UI Engineer, Web Developer, React Developer, Angular Developer va Design Systems Engineer.",
    "How to become a Frontend Developer?": "Hoc web foundation, HTML/CSS/JavaScript, Git, mot framework, testing, deployment, accessibility va lam project co the demo duoc.",
    "How long does it take to become a Frontend Developer?": "Thoi gian phu thuoc nen tang va toc do hoc; neu hoc deu, 6-12 thang co the dat muc junior voi portfolio tot.",
    "What are the Frontend Developer salaries?": "Luong thay doi theo quoc gia, kinh nghiem, cong ty va thi truong; hay xem nguon tuyen dung dia phuong moi nhat khi ung tuyen.",
    "Should I learn everything listed on the Frontend Roadmap?": "Khong can hoc tat ca ngay tu dau. Hay hoc theo lop: nen tang, project, framework, workflow, sau do chon phan nang cao theo muc tieu.",
    "What are Frontend Frameworks?": "Frontend framework la bo cong cu va convention giup xay UI co component, state, routing, rendering va build workflow nhanh hon.",
}


def clean_filename(text: str) -> str:
    cleaned = text.strip()
    cleaned = cleaned.replace("&", "and")
    cleaned = cleaned.replace("/", "-")
    cleaned = cleaned.replace(":", "")
    cleaned = cleaned.replace("?", "")
    cleaned = cleaned.replace("*", "")
    cleaned = cleaned.replace('"', "")
    cleaned = re.sub(r"\s+", " ", cleaned)
    cleaned = re.sub(r"[<>|\\]", "-", cleaned)
    return cleaned[:130].strip(" .")


def phase_dir(phase: Phase) -> Path:
    return OFFICIAL_ROOT / f"{phase.number:02d} - {phase.title}"


def module_dir(phase: Phase, module: Module) -> Path:
    return phase_dir(phase) / f"Module {module.number:02d} - {module.title}"


def item_path(phase: Phase, module: Module, index: int, lesson: Item) -> Path:
    return module_dir(phase, module) / f"{index:03d} - {clean_filename(lesson.title)}.md"


def wrap(text: str) -> str:
    raw = textwrap.dedent(text).strip()
    lines: list[str] = []
    for line in raw.splitlines():
        if line.startswith("        "):
            line = line[8:]
        lines.append(line.rstrip())
    return "\n".join(lines).strip()


def bullet_list(values: list[str]) -> str:
    return "\n".join(f"- {value}" for value in values)


def concepts_for(lesson: Item, module: Module) -> list[str]:
    if lesson.title in CONCEPTS:
        return CONCEPTS[lesson.title]
    if lesson.title.endswith("Roadmap"):
        return [
            f"{lesson.title} la lo trinh mo rong nen hoc sau khi nam module hien tai.",
            "Khong can hoc toan bo roadmap phu ngay lap tuc; hay chon phan phuc vu project gan nhat.",
            "Moi roadmap phu nen duoc bien thanh checklist project, khong chi la danh sach doc ly thuyet.",
        ]
    if module.title == "SSR":
        return [
            f"{lesson.title} trong SSR tap trung vao render HTML tren server de cai thien first load va SEO.",
            "Can phan biet server-rendered HTML, hydration va client navigation.",
            "Du lieu, cache va error boundary la cac diem can thiet ke ky trong SSR.",
        ]
    if module.title == "SSG":
        return [
            f"{lesson.title} trong SSG tao HTML truoc luc deploy hoac build.",
            "SSG phu hop noi dung it thay doi, blog, docs, landing page va marketing site.",
            "Can co chien luoc rebuild, incremental update hoac fallback cho noi dung moi.",
        ]
    if module.title == "Deployment":
        return [
            f"{lesson.title} la mot lua chon deploy trong he sinh thai frontend.",
            "Can hieu build command, output directory, environment variables va rollback.",
            "Deployment tot gom preview URL, custom domain, HTTPS, cache va monitoring.",
        ]
    if module.title == "Mobile Apps":
        return [
            f"{lesson.title} mo rong ky nang frontend sang ung dung mobile.",
            "Can hieu navigation, platform API, state, performance va quy trinh build app.",
            "Lua chon cong nghe phu thuoc team, san pham, performance va nhu cau native.",
        ]
    if module.title == "Desktop Apps":
        return [
            f"{lesson.title} giup dua web technology len desktop.",
            "Can hieu packaging, auto update, filesystem permission va security boundary.",
            "Desktop app can trai nghiem offline, shortcut va behavior gan he dieu hanh.",
        ]
    return [
        f"{lesson.title} la mot moc kien thuc trong module {module.title}.",
        "Hoc theo ba lop: khái niem, cach dung trong project, va loi thuong gap.",
        "Ket qua tot nhat la co vi du nho chay duoc va checklist tu review lai.",
    ]


def snippet_for(lesson: Item, module: Module) -> str:
    if lesson.title in SNIPPETS:
        return SNIPPETS[lesson.title]
    if module.title == "SSR":
        return """```text
Request /products
  -> Server fetches data
  -> Server renders HTML
  -> Browser receives usable markup
  -> JavaScript hydrates interactive parts
```"""
    if module.title == "SSG":
        return """```text
Build time
  -> Read content/data
  -> Generate static HTML
  -> Deploy HTML/CSS/JS to CDN
```"""
    if module.title == "Deployment":
        return """```bash
npm run build
# upload or connect the generated output directory to the platform
```"""
    if module.title == "Performance":
        return """```text
Measure -> Find bottleneck -> Change one thing -> Measure again
```"""
    return """```text
Input: mot yeu cau hoac tinh nang nho
Process: ap dung khai niem trong bai vao vi du that
Output: ghi lai ket qua, loi gap phai va cach sua
```"""


def duration_for(kind: str) -> int:
    return {
        "overview": 8,
        "lesson": 14,
        "related": 10,
        "track": 12,
        "checkpoint": 18,
        "project": 35,
        "faq": 8,
    }.get(kind, 12)


def lesson_summary(lesson: Item, module: Module) -> str:
    if lesson.kind == "overview":
        return lesson.description or f"Bai nay mo dau module {module.title} va dat ky vong hoc tap."
    if lesson.kind == "related":
        return f"Bai nay gioi thieu {lesson.title} nhu mot lo trinh mo rong. Muc tieu la biet khi nao can di sau vao roadmap nay va cach bien no thanh ke hoach hoc co project."
    if lesson.kind == "track":
        return f"Bai nay dat {lesson.title} vao buc tranh tiep tuc hoc sau frontend. Ban se biet track nay phu hop voi muc tieu nao va nen chuan bi kien thuc gi."
    if lesson.kind == "faq":
        return FAQ_ANSWERS.get(lesson.title, f"Bai nay tra loi cau hoi thuong gap: {lesson.title}")
    if lesson.kind == "checkpoint":
        return f"Checkpoint nay giup ban chon project, tao portfolio artifact va kiem tra rang cac kien thuc trong giai doan {module.title} da duoc ap dung."
    return f"Bai nay giai thich {lesson.title} trong boi canh lap trinh frontend hien dai. Sau bai hoc, ban nen hieu khai niem, biet vi sao no quan trong va co mot bai tap nho de dua vao project."


def learning_objectives(lesson: Item, module: Module) -> list[str]:
    if lesson.kind == "project":
        return [
            "Chuyen mo ta project thanh yeu cau co the trien khai.",
            "Xay phien ban hoan chinh co the demo trong portfolio.",
            "Tu review accessibility, responsive behavior va chat luong code.",
        ]
    if lesson.kind == "checkpoint":
        return [
            "Biet chon project dung muc do kho cua giai doan hien tai.",
            "Dat tieu chi hoan thanh ro rang truoc khi code.",
            "Tong hop bai hoc thanh portfolio va ghi chu review.",
        ]
    if lesson.kind == "faq":
        return [
            "Nam cau tra loi ngan gon va thuc te.",
            "Biet ap dung cau tra loi vao ke hoach hoc va phong van.",
            "Nhan dien hieu lam pho bien lien quan den cau hoi nay.",
        ]
    return [
        f"Giai thich duoc {lesson.title} bang ngon ngu cua ban.",
        "Nhan biet khi nao kien thuc nay xuat hien trong mot project frontend.",
        "Thuc hanh mot vi du nho va ghi lai loi thuong gap.",
    ]


def practice_tasks(lesson: Item, module: Module) -> list[str]:
    if lesson.kind == "project":
        return [
            "Viet README ngan gom muc tieu, tinh nang, cach chay va anh chup man hinh.",
            "Chia project thanh checklist nho: markup, style, behavior, accessibility, responsive, polish.",
            "Deploy ban demo hoac chuan bi video/GIF ngan neu chua deploy.",
            "Viet 3-5 ghi chu ve quyet dinh ky thuat va trade-off.",
        ]
    if lesson.kind == "checkpoint":
        project_names = [i.title for i in module.items if i.kind == "project"]
        if project_names:
            return [
                f"Chon 2-3 project trong danh sach: {', '.join(project_names[:5])}{'...' if len(project_names) > 5 else ''}.",
                "Sap xep project theo do kho va ky nang can chung minh.",
                "Dat deadline nho cho tung project va tieu chi 'done' truoc khi bat dau.",
            ]
        return ["Lap checklist kien thuc can on tap truoc khi sang module tiep theo."]
    if lesson.kind == "faq":
        return [
            "Viet cau tra loi 3 cau theo giong cua ban.",
            "Lien he cau tra loi voi portfolio, CV hoac ke hoach hoc hien tai.",
            "Chuan bi mot vi du that de dung khi phong van.",
        ]
    return [
        "Doc lai phan khai niem va viet 5 dong tom tat khong nhin tai lieu.",
        "Tao mot vi du nho trong project sandbox hoac ghi pseudo-code.",
        "Tim mot loi co the xay ra trong thuc te va viet cach debug.",
    ]


def pitfalls_for(lesson: Item) -> list[str]:
    if lesson.kind == "project":
        return [
            "Bat dau code khi chua co yeu cau va tieu chi hoan thanh.",
            "Chi lam giao dien dep ma bo qua keyboard, responsive va empty/error state.",
            "Khong ghi README nen project kho review trong portfolio.",
        ]
    if lesson.kind in {"related", "track"}:
        return [
            "Mo qua nhieu roadmap phu cung luc va mat trong tam.",
            "Hoc ly thuyet qua lau ma khong gan voi project.",
            "Chay theo tool moi khi nen tang chua chac.",
        ]
    return [
        "Hoc thuoc dinh nghia nhung khong tao vi du.",
        "Bo qua edge case vi demo nho van chay.",
        "Khong ghi lai cau hoi con mo de quay lai sau.",
    ]


def project_md(phase: Phase, module: Module, lesson: Item, index: int) -> str:
    title = lesson.title
    description = lesson.description
    requirements = [
        "Giao dien phai responsive tren mobile va desktop.",
        "HTML semantic, label ro rang va thao tac duoc bang ban phim.",
        "State/interaction phai co empty, loading hoac error state neu project co JavaScript/API.",
        "Code tach file hop ly va co README mo ta cach chay.",
        "Hoan thien mot ban demo co the dua vao portfolio.",
    ]
    steps = [
        "Phac thao wireframe va luong nguoi dung.",
        "Tao cau truc HTML/route/component truoc khi polish UI.",
        "Them CSS theo design token nho: color, spacing, typography, breakpoint.",
        "Them JavaScript hoac framework logic neu project can tuong tac.",
        "Kiem tra accessibility, responsive va cac trang thai bien.",
        "Review lai code, dat ten ro hon, xoa phan thua va ghi README.",
    ]
    return wrap(
        f"""
        # {index:03d} - {title}

        **Hoc phan:** {phase.number:02d} - {phase.title}  
        **Module:** Module {module.number:02d} - {module.title}  
        **Nguon roadmap:** {lesson.source_section}  
        **Loai bai:** Project  
        **Thu tu trong module:** {index:03d}  
        **Thoi luong goi y:** {duration_for(lesson.kind)} phut

        ---

        ## 1. Tom tat

        {description}

        Day la bai project de bien kien thuc thanh san pham nho co the demo. Muc tieu khong chi la lam cho chay, ma la tao mot artifact co cau truc ro, de review va co gia tri trong portfolio.

        ## 2. Muc tieu san pham

        - Xay dung mot phien ban hoan chinh cua **{title}**.
        - Chung minh ky nang tu module **{module.title}** va cac module truoc do.
        - Tao ket qua co the chup man hinh, demo, hoac deploy.

        ## 3. Yeu cau bat buoc

        {bullet_list(requirements)}

        ## 4. Cac buoc trien khai

        {bullet_list(steps)}

        ## 5. Tieu chi hoan thanh

        - Chay duoc tu moi truong local bang mot lenh ro trong README.
        - Khong co loi console nghiem trong.
        - Dieu huong bang ban phim dung duoc voi cac control chinh.
        - Layout khong vo o man hinh nho.
        - Code du ro de ban cua tuong lai doc lai sau 1 thang van hieu.

        ## 6. Goi y mo rong

        - Them theme switcher hoac dark mode neu phu hop.
        - Them localStorage de giu state giua cac lan tai trang.
        - Them test cho logic quan trong.
        - Deploy len mot nen tang static hosting.

        ## 7. Loi thuong gap

        {bullet_list(pitfalls_for(lesson))}

        ## 8. Tong ket

        Hoan thanh project nay nghia la ban da bien mot muc trong roadmap thanh mot minh chung cu the. Hay giu project nho, dung tieu chi, va polish den muc co the dua vao portfolio.
        """
    ) + "\n"


def lesson_md(phase: Phase, module: Module, lesson: Item, index: int) -> str:
    if lesson.kind == "project":
        return project_md(phase, module, lesson, index)

    concepts = concepts_for(lesson, module)
    objectives = learning_objectives(lesson, module)
    tasks = practice_tasks(lesson, module)
    pitfalls = pitfalls_for(lesson)
    snippet = snippet_for(lesson, module)
    summary = lesson_summary(lesson, module)

    return wrap(
        f"""
        # {index:03d} - {lesson.title}

        **Hoc phan:** {phase.number:02d} - {phase.title}  
        **Module:** Module {module.number:02d} - {module.title}  
        **Nguon roadmap:** {lesson.source_section or module.source_section}  
        **Loai bai:** {lesson.kind.title()}  
        **Thu tu trong module:** {index:03d}  
        **Thoi luong goi y:** {duration_for(lesson.kind)} phut

        ---

        ## 1. Tom tat

        {summary}

        ## 2. Muc tieu hoc tap

        {bullet_list(objectives)}

        ## 3. Khai niem chinh

        {bullet_list(concepts)}

        ## 4. Vi du / Demo

        {snippet}

        ## 5. Bai tap thuc hanh

        {bullet_list(tasks)}

        ## 6. Loi thuong gap

        {bullet_list(pitfalls)}

        ## 7. Checklist hoan thanh

        - Toi co the giai thich **{lesson.title}** trong 1-2 phut.
        - Toi co mot vi du nho hoac ghi chu thuc hanh cho bai nay.
        - Toi biet bai nay lien quan den project/frontend workflow nao.
        - Toi da ghi lai it nhat mot cau hoi can tim hieu sau neu con mo ho.

        ## 8. Tong ket

        **{lesson.title}** la mot vien gach trong lo trinh frontend. Dung bai nay nhu mot diem neo: hieu khai niem, lam vi du nho, roi gan no vao project that de kien thuc khong bi roi rac.
        """
    ) + "\n"


def module_readme(phase: Phase, module: Module, paths: list[tuple[Item, Path]]) -> str:
    lessons = "\n".join(f"- [{i:03d} - {lesson.title}]({path.name})" for i, (lesson, path) in enumerate(paths, start=1))
    return wrap(
        f"""
        # Module {module.number:02d} - {module.title}

        **Hoc phan:** {phase.number:02d} - {phase.title}  
        **Nguon roadmap:** {module.source_section}

        Module nay gom {len(paths)} bai tu roadmap. Hoc theo thu tu neu ban moi bat dau; neu da co kinh nghiem, co the dung danh sach nay lam checklist on tap va bo sung project.

        ## Danh sach bai hoc

        {lessons}

        ## Cach hoc module nay

        - Doc nhanh toan bo danh sach bai de thay buc tranh chung.
        - Voi moi bai, ghi lai 3 y quan trong va 1 vi du thuc te.
        - Neu module co project, hoan thanh it nhat 1 project truoc khi sang phase tiep theo.
        """
    ) + "\n"


def course_readme(total_lessons: int, total_modules: int) -> str:
    source_note = SOURCE_FILE.read_text(encoding="utf-8").splitlines()[0] if SOURCE_FILE.exists() else "Frontend Developer Roadmap 2026"
    return wrap(
        f"""
        # Frontend Developer Roadmap Course

        Khoa hoc Markdown duoc tao tu file scrape: `{SOURCE_FILE}`.

        Nguon noi dung dau vao: **{source_note}**.

        ## Cau truc

        - Course root: `Frontend-Developer-Roadmap-Course/00 - Roadmap.sh Frontend Official`
        - Tong hoc phan: {len(COURSE)}
        - Tong module: {total_modules}
        - Tong bai `.md`: {total_lessons}
        - Moi module co `README.md`
        - `COURSE_INDEX.md` la muc luc toan khoa
        - `COVERAGE_REPORT.md` dung de doi chieu voi roadmap scrape

        ## Cach hoc

        Hoc theo thu tu phase neu ban muon di tu nen tang den nang cao. Neu da co kinh nghiem, hay dung `COURSE_INDEX.md` de tick nhung phan con thieu va uu tien cac checkpoint project.

        ## Ghi chu

        Cac roadmap lien quan nhu HTML, CSS, JavaScript, React, TypeScript, Node.js, Backend, Fullstack va Design System duoc tao thanh bai dinh huong rieng, dung theo dung scope trong file scrape: liet ke nhu continuation/related tracks, khong mo rong thanh toan bo roadmap phu.
        """
    ) + "\n"


def course_index(all_paths: list[tuple[Phase, Module, Item, Path]]) -> str:
    lines = [
        "# Course Index",
        "",
        f"Source file: `{SOURCE_FILE}`",
        "",
    ]
    current_phase: int | None = None
    current_module: int | None = None
    for phase, module, lesson, path in all_paths:
        if phase.number != current_phase:
            lines.extend(["", f"## {phase.number:02d} - {phase.title}", ""])
            current_phase = phase.number
            current_module = None
        if module.number != current_module:
            rel_module = module_dir(phase, module).relative_to(COURSE_ROOT)
            lines.extend(["", f"### Module {module.number:02d} - {module.title}", "", f"Folder: `{rel_module}`", ""])
            current_module = module.number
        rel = path.relative_to(COURSE_ROOT).as_posix()
        lines.append(f"- [{lesson.title}]({rel})")
    return "\n".join(lines).strip() + "\n"


def coverage_report(all_paths: list[tuple[Phase, Module, Item, Path]]) -> str:
    lines = [
        "# Coverage Report",
        "",
        "Bao cao nay liet ke moi muc da duoc sinh thanh file Markdown tu `frontend-roadmap-scraped-2026.md`.",
        "",
        f"- Source file exists: `{SOURCE_FILE.exists()}`",
        f"- Generated lesson files: {len(all_paths)}",
        "",
        "| Roadmap section | Type | Item | Generated file |",
        "|---|---:|---|---|",
    ]
    for phase, module, lesson, path in all_paths:
        rel = path.relative_to(COURSE_ROOT).as_posix()
        section = lesson.source_section or module.source_section
        lines.append(f"| {section} | {lesson.kind} | {lesson.title} | `{rel}` |")
    return "\n".join(lines).strip() + "\n"


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    all_paths: list[tuple[Phase, Module, Item, Path]] = []
    total_modules = sum(len(phase.modules) for phase in COURSE)

    for phase in COURSE:
        phase_dir(phase).mkdir(parents=True, exist_ok=True)
        for module in phase.modules:
            mdir = module_dir(phase, module)
            mdir.mkdir(parents=True, exist_ok=True)
            module_paths: list[tuple[Item, Path]] = []
            for index, lesson in enumerate(module.items, start=1):
                path = item_path(phase, module, index, lesson)
                write_text(path, lesson_md(phase, module, lesson, index))
                module_paths.append((lesson, path))
                all_paths.append((phase, module, lesson, path))
            write_text(mdir / "README.md", module_readme(phase, module, module_paths))

    write_text(BASE_DIR / "README.md", course_readme(len(all_paths), total_modules))
    write_text(COURSE_ROOT / "COURSE_INDEX.md", course_index(all_paths))
    write_text(COURSE_ROOT / "COVERAGE_REPORT.md", coverage_report(all_paths))

    print(f"Generated {len(all_paths)} lesson files")
    print(f"Generated {total_modules} module README files")
    print(f"Course root: {OFFICIAL_ROOT}")


if __name__ == "__main__":
    main()
