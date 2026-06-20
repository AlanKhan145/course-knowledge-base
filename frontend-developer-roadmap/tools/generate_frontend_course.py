from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
COURSE_ROOT = ROOT / "Frontend-Developer-Roadmap-Course"


def slug_filename(index: int, title: str) -> str:
    safe = re.sub(r'[<>:"/\\|?*]', "", title).strip()
    safe = re.sub(r"\s+", " ", safe)
    return f"{index:03d} - {safe}.md"


def lesson_markdown(phase: str, module: str, number: str, title: str, learn, outcomes=None, exercises=None, notes=None) -> str:
    outcomes = outcomes or [
        f"Explain {title.lower()} in plain English.",
        "Use the concept in a small frontend project.",
        "Debug the most common beginner mistakes around this topic.",
    ]
    exercises = exercises or [
        "Create a short note file that summarizes the concept.",
        "Build a tiny demo that proves you understand the concept.",
        "Write three questions you would ask in a code review about this topic.",
    ]
    notes = notes or []
    learn_block = "\n".join(f"- {item}" for item in learn)
    outcome_block = "\n".join(f"- {item}" for item in outcomes)
    exercise_block = "\n".join(f"{i}. {item}" for i, item in enumerate(exercises, 1))
    notes_block = ""
    if notes:
        notes_block = "\n## Notes\n\n" + "\n".join(f"- {item}" for item in notes) + "\n"
    return f"""# {number} - {title}

## Section
{phase} — {module}

## Learning Goals

{learn_block}

## You Should Be Able To

{outcome_block}

## Practice

{exercise_block}
{notes_block}
## Mastery Checklist

- [ ] I can define the core terms without looking them up.
- [ ] I can build or inspect a real example.
- [ ] I can explain the trade-offs to another beginner.
- [ ] I can connect this topic to the next lesson in the roadmap.
"""


PHASES = [
    {
        "dir": "01 - Phase 1 - Web Foundation",
        "phase": "Phase 1 - Web Foundation",
        "modules": [
            {
                "dir": "Module 01 - Internet",
                "name": "Module 01: Internet",
                "lessons": [
                    ("1.1", "How Does The Internet Work", [
                        "Client and server", "Request and response", "IP address and port", "Protocol, router, ISP, packet", "Latency and bandwidth", "How a browser sends a request", "How a server returns a response",
                    ], ["Explain what happens after entering https://roadmap.sh/frontend.", "Draw the flow: Browser -> DNS -> Server -> Response -> Render."], ["Write what-happens-when-enter-url.md.", "Draw a request/response diagram."]),
                    ("1.2", "What is HTTP", [
                        "HTTP request and response", "Request line, headers, and body", "GET, POST, PUT, PATCH, DELETE, OPTIONS", "200, 201, 301, 302, 400, 401, 403, 404, 500", "HTTP vs HTTPS", "Basic cache headers", "Basic cookie headers",
                    ], None, ["Inspect requests in the DevTools Network tab.", "Call an API with fetch.", "Record method, status code, headers, and response body."]),
                    ("1.3", "What is Domain Name", [
                        "Domain, subdomain, and TLD", "URL vs URI", "Path, query string, and fragment", "Domain registrar", "Nameserver", "Analyze https://app.example.com/dashboard/users?id=10#profile",
                    ], None, ["Analyze 10 real URLs.", "Create a table with protocol, domain, path, query, and fragment."]),
                    ("1.4", "What is Hosting", [
                        "Hosting basics", "Static, dynamic, shared, VPS, cloud, serverless, CDN, and edge hosting", "Deploying a static frontend site", "Deploying an SSR app", "Build command and output directory", "Environment variables",
                    ], None, ["Deploy an HTML/CSS project to GitHub Pages.", "Deploy a React/Vite app to Vercel or Netlify."]),
                    ("1.5", "DNS and How It Works", [
                        "DNS resolver", "Root DNS", "TLD nameserver", "Authoritative nameserver", "A, AAAA, CNAME, MX, TXT, and NS records", "TTL", "DNS propagation",
                    ], None, ["Use nslookup or a web DNS checker.", "Check the A record of a domain.", "Point a custom domain to a hosting provider."]),
                    ("1.6", "Browsers and How They Work", [
                        "Browser engine and JavaScript engine", "HTML parser and CSS parser", "DOM and CSSOM", "Render tree, layout, paint, and composite", "Reflow and repaint", "Event loop, call stack, task queue, and microtask queue", "Cookie, LocalStorage, and SessionStorage",
                    ], None, ["Open DevTools Performance.", "Measure rendering on a simple page.", "Write notes about DOM, CSSOM, and the render tree."]),
                ],
            }
        ],
    },
    {
        "dir": "02 - Phase 2 - Core Web Languages",
        "phase": "Phase 2 - Core Web Languages",
        "modules": [
            {
                "dir": "Module 02 - HTML",
                "name": "Module 02: HTML",
                "lessons": [
                    ("2.1", "Learn HTML Basics", ["DOCTYPE, html, head, body", "meta, title, link, script", "h1-h6 headings", "p, span, strong, em, small, mark", "ul, ol, li", "a links: relative, absolute, anchor", "img alt width height", "table, thead, tbody, tr, th, td"], None, ["Create a CV page using only HTML.", "Create a blog article page using only HTML."]),
                    ("2.2", "Writing Semantic HTML", ["What semantic HTML means", "Why semantics matter", "header, nav, main, section, article, aside, footer", "figure, figcaption, time", "Heading hierarchy", "Landmark regions", "SEO and screen reader benefits"], None, ["Refactor a div-only page into semantic HTML.", "Check the heading outline."]),
                    ("2.3", "Forms and Validations", ["form, label, input, textarea, select, option, button", "text, email, password, number, date, checkbox, radio, file", "action, method, name, placeholder, required", "min, max, minlength, maxlength, pattern", "Native validation", "Error message UX", "Accessible forms"], None, ["Create a registration form.", "Create a login form.", "Create a contact form with validation."]),
                    ("2.4", "Accessibility in HTML", ["alt text", "Correct input labels", "aria-label and aria-labelledby", "role", "Keyboard navigation", "Focus order", "Landmarks", "Button vs link", "Accessible form errors", "Screen reader basics"], None, ["Create an accessible form UI.", "Tab through the whole page without a mouse."]),
                    ("2.5", "SEO Basics", ["Title tag", "Meta description", "Heading structure", "Canonical URL", "Open Graph", "Twitter card", "Image alt", "Semantic HTML", "Clean URL", "Sitemap", "Robots.txt basics", "Structured data basics"], None, ["Optimize SEO for a portfolio page.", "Check SEO with Lighthouse."]),
                ],
            },
            {
                "dir": "Module 03 - CSS",
                "name": "Module 03: CSS",
                "lessons": [
                    ("3.1", "Learn CSS Basics", ["What CSS is", "Inline, internal, and external CSS", "Selector, declaration, property, value", "Comments", "CSS reset", "Normalize CSS"]),
                    ("3.2", "Selectors", ["Element, class, ID, and attribute selectors", "Descendant, child, adjacent sibling, and general sibling selectors", "Grouping selectors", ":hover, :focus, :active", ":first-child, :last-child, :nth-child", "::before, ::after, ::placeholder"], None, ["Write 30 different selectors on one HTML page."]),
                    ("3.3", "Cascade Specificity and Inheritance", ["Cascade", "Specificity scoring", "Inheritance", "!important", "Source order", "Browser default styles", "Debugging overridden CSS"], None, ["Create CSS conflicts.", "Explain why rule A wins over rule B."]),
                    ("3.4", "Box Model", ["Content", "Padding", "Border", "Margin", "box-sizing", "Width and height", "Min/max width", "Overflow", "Collapsing margins"], None, ["Clone a card UI.", "Clone a pricing box."]),
                    ("3.5", "Units and Sizing", ["px, %, em, rem", "vh, vw, vmin, vmax", "ch", "clamp()", "min()", "max()"], None, ["Create responsive typography with clamp()."]),
                    ("3.6", "Typography and Colors", ["font-family, font-weight, font-size", "line-height, letter-spacing, text-align", "HEX, RGB, HSL", "CSS variables", "Color contrast"], None, ["Create simple design tokens for color, spacing, and font size."]),
                    ("3.7", "Making Layouts", ["Normal flow", "display: block, inline, inline-block, none", "position: static, relative, absolute, fixed, sticky", "z-index", "Legacy float", "Flexbox", "Grid"]),
                    ("3.8", "Flexbox", ["Flex container and item", "Main axis and cross axis", "display: flex", "flex-direction", "justify-content", "align-items", "align-content", "gap", "flex-wrap", "flex-grow, flex-shrink, flex-basis"], None, ["Build a responsive navbar.", "Build a responsive card list."]),
                    ("3.9", "CSS Grid", ["Grid container and item", "grid-template-columns", "grid-template-rows", "gap", "fr", "repeat()", "minmax()", "auto-fit and auto-fill", "Grid areas"], None, ["Build an image grid layout.", "Build a dashboard layout."]),
                    ("3.10", "Responsive Design", ["Mobile-first design", "Breakpoints", "Media queries", "Fluid layouts", "Responsive images", "Responsive typography", "Container query basics"], None, ["Build a responsive portfolio.", "Build a responsive landing page."]),
                    ("3.11", "Animations and Transitions", ["transition", "transform", "animation", "@keyframes", "Easing", "Hover animation", "Loading spinner", "Reduced motion"], None, ["Build an animated button.", "Build a loading skeleton."]),
                ],
            },
            {
                "dir": "Module 04 - JavaScript",
                "name": "Module 04: JavaScript",
                "lessons": [
                    ("4.1", "JavaScript Basics", ["var, let, const", "Primitive types", "Object type", "Operators", "Conditionals", "Loops", "Truthy and falsy values", "Type conversion", "== vs ==="], None, ["Build a calculator.", "Check odd/even and prime numbers."]),
                    ("4.2", "Functions", ["Function declaration", "Function expression", "Arrow function", "Parameters and defaults", "Return", "Callback", "Higher-order function", "Scope", "Closure"], None, ["Write formatCurrency, debounce, throttle, and capitalize."]),
                    ("4.3", "Arrays", ["push, pop, shift, unshift", "slice and splice", "map, filter, reduce", "find, some, every", "sort", "Destructuring", "Spread operator"], None, ["Build todo filtering.", "Calculate a shopping cart total."]),
                    ("4.4", "Objects", ["Object literal", "Property and method", "Dot and bracket notation", "Object destructuring", "Optional chaining", "Object.keys, values, entries", "JSON"], None, ["Manage a user list with objects and arrays."]),
                    ("4.5", "DOM", ["What the DOM is", "document", "querySelector and querySelectorAll", "getElementById", "createElement", "append and remove", "classList", "innerText, textContent, innerHTML", "dataset"], None, ["Build tabs.", "Build an accordion.", "Build a modal."]),
                    ("4.6", "Events", ["addEventListener", "Click, input, submit, and keyboard events", "Event object", "Bubbling and capturing", "Event delegation", "preventDefault", "stopPropagation"], None, ["Validate a form with JavaScript.", "Build a dropdown menu."]),
                    ("4.7", "Async JavaScript", ["Synchronous vs asynchronous", "Callback", "Promise", "then, catch, finally", "async and await", "try/catch", "Parallel requests", "Race condition basics"], None, ["Fetch a weather API.", "Fetch GitHub users."]),
                    ("4.8", "Fetch API", ["GET and POST", "Headers", "JSON body", "Loading state", "Error state", "HTTP status handling", "AbortController", "Retry basics"], None, ["Search GitHub profiles.", "Build CRUD notes with a fake API."]),
                    ("4.9", "Browser Storage", ["LocalStorage", "SessionStorage", "Cookies", "IndexedDB basics", "Choosing the right storage", "Security risks when storing tokens"], None, ["Persist todos in LocalStorage.", "Persist dark/light theme in LocalStorage."]),
                    ("4.10", "Modules", ["export", "export default", "import", "Named import", "File organization", "Barrel export", "Module scope"], None, ["Split a Todo App into multiple JavaScript files."]),
                ],
            },
        ],
    },
]


EXTRA_PHASES = [
    ("03 - Phase 3 - Developer Workflow", "Phase 3 - Developer Workflow", [
        ("Module 05 - Git", "Module 05: Version Control - Git", [
            ("5.1", "Git Basics", ["What Git is", "Repository", "Working tree", "Staging area", "Commit history", "git init, clone, status, add, commit, log"]),
            ("5.2", "Branching", ["Branch", "checkout and switch", "Merge", "Rebase basics", "Conflict", "Resolve conflicts"]),
            ("5.3", "Remote", ["origin", "git remote", "git push", "git pull", "git fetch", "Upstream branch"], None, ["Create frontend-practice repo.", "Use one branch per project.", "Merge with pull requests."]),
        ]),
        ("Module 06 - GitHub GitLab", "Module 06: VCS Hosting", [
            ("6.1", "GitHub", ["Repository", "README", "Issues", "Pull request", "Code review", "Actions basics", "GitHub Pages", "Releases", "Fork, star, watch"]),
            ("6.2", "GitLab", ["GitLab repository", "Merge request", "Issues", "CI/CD basics", "GitLab Pages overview"], None, ["Push the same project to GitHub and GitLab.", "Write a professional README."]),
        ]),
        ("Module 07 - Package Managers", "Module 07: Package Managers", [
            ("7.1", "npm", ["Node.js", "npm", "package.json", "package-lock.json", "Dependencies and devDependencies", "Scripts", "Semantic versioning", "npm registry"]),
            ("7.2", "yarn", ["What Yarn is", "yarn add", "yarn install", "Lockfile", "npm vs yarn"]),
            ("7.3", "pnpm", ["What pnpm is", "Content-addressable store", "Workspace", "Monorepo basics", "npm vs pnpm"]),
            ("7.4", "Bun", ["Bun runtime", "Bun package manager", "Bun scripts", "Bun vs Node.js basics"], None, ["Create an app with Vite.", "Install packages with npm.", "Run dev, build, and preview scripts."]),
        ]),
    ]),
    ("04 - Phase 4 - Framework", "Phase 4 - Framework", [
        ("Module 08 - React", "Module 08: Learn a Framework - React Track", [
            ("8.1", "React Basics", ["React", "Component", "JSX", "Props", "State", "Event handling", "Conditional rendering", "List rendering", "Keys", "Composition"]),
            ("8.2", "React Hooks", ["useState", "useEffect", "useRef", "useMemo", "useCallback", "Custom hook", "Hook rules"]),
            ("8.3", "Forms in React", ["Controlled input", "Uncontrolled input", "Form state", "Validation", "Error messages", "Submit handling", "React Hook Form basics"]),
            ("8.4", "Routing", ["React Router", "BrowserRouter", "Routes and Route", "Link and NavLink", "Nested routes", "Dynamic route", "Protected route"]),
            ("8.5", "Data Fetching", ["Fetch in components", "Loading, error, and empty states", "TanStack Query basics", "Cache", "Refetch", "Mutation"]),
            ("8.6", "State Management", ["Local state", "Lift state up", "Context API", "Reducer", "Zustand basics", "Redux Toolkit overview"]),
            ("8.7", "React Project Structure", ["components", "pages", "features", "hooks", "services", "utils", "types", "Barrel exports", "Feature-based structure"], None, ["Build React Todo App.", "Build Expense Tracker.", "Build Quiz App.", "Build Admin Dashboard."]),
        ]),
        ("Module 09 - Alternative Frameworks", "Module 09: Alternative Frameworks", [
            ("9.1", "Vue.js", ["Vue component", "Template syntax", "Props", "Emits", "Reactivity", "Composition API", "Vue Router", "Pinia"]),
            ("9.2", "Angular", ["Component", "Module", "Service", "Dependency injection", "Template", "Directive", "Pipe", "RxJS", "Angular Router"]),
            ("9.3", "Svelte", ["Component", "Reactive statement", "Props", "Stores", "Events", "SvelteKit overview"]),
            ("9.4", "Solid JS", ["Signals", "Fine-grained reactivity", "Components", "Effects", "Routing basics"]),
        ]),
        ("Module 10 - Tailwind CSS", "Module 10: CSS Frameworks", [
            ("10.1", "Tailwind CSS", ["Utility-first CSS", "Tailwind config", "Spacing", "Colors", "Typography", "Responsive prefixes", "Hover and focus states", "Dark mode", "Component extraction", "Tailwind with React and Next.js"], None, ["Clone a landing page.", "Clone a dashboard UI.", "Build a responsive navbar."]),
        ]),
    ]),
    ("05 - Phase 5 - AI in Development", "Phase 5 - AI in Development", [
        ("Module 11 - AI Basics", "Module 11: Learn the Basics", [
            ("11.1", "How LLMs Work", ["Token", "Context window", "Prompt", "Completion", "Embedding", "Temperature", "Hallucination", "System prompt", "Tool calling overview"]),
            ("11.2", "AI vs Traditional Coding", ["Hand-written code vs generated code", "When to use AI", "When not to use AI", "Reviewing AI output", "Security and privacy risks"]),
            ("11.3", "Applications", ["Generate component", "Generate test", "Explain code", "Refactor code", "Review bug", "Generate docs", "Generate mock data"]),
        ]),
        ("Module 12 - AI Assisted Coding", "Module 12: AI Assisted Coding", [
            ("12.1", "Claude Code", ["Repo-aware coding", "Code edits", "Refactor", "Generate tests", "Review changes"]),
            ("12.2", "Cursor", ["Chat with codebase", "Inline edit", "Composer", "Debug with AI", "Generate component"]),
            ("12.3", "Copilot", ["Autocomplete", "Copilot chat", "Test generation", "Explain code"]),
            ("12.4", "Antigravity", ["Agentic coding workflow", "Multi-file edit", "Task decomposition"]),
            ("12.5", "Gemini", ["Code explanation", "Generate UI", "Debugging", "Compare coding assistants"], None, ["Use AI to generate a component, then review and refactor it.", "Use AI to write tests for a component."]),
        ]),
        ("Module 13 - Prompting Techniques", "Module 13: Prompting Techniques", [
            ("13.1", "Prompting Techniques", ["Context-rich prompts", "Constraints", "Formatted output", "Concise reasoning", "Debug prompts", "Refactor prompts", "Test generation prompts", "README prompts", "Code review prompts", "Migration prompts"]),
        ]),
        ("Module 14 - Agents", "Module 14: Agents", [
            ("14.1", "AI Agents", ["What an AI agent is", "Agent vs chatbot", "Tool use", "Planning", "Memory", "Evaluation", "Guardrails", "Human-in-the-loop", "Frontend agent workflows"]),
        ]),
        ("Module 15 - MCP", "Module 15: MCP", [
            ("15.1", "Model Context Protocol", ["What MCP is", "MCP server", "MCP client", "Tool schema", "Resource", "Prompt", "Using MCP with code editors", "Connecting GitHub, file systems, and databases"]),
        ]),
        ("Module 16 - Skills", "Module 16: Skills", [
            ("16.1", "Skills", ["What a skill is", "When to package a workflow as a skill", "Skill input and output", "Skill instructions", "Tool selection", "Evaluation checklist"], None, ["Create a React Component Generator skill.", "Create a Frontend Bug Fixer skill."]),
        ]),
        ("Module 17 - Implementing AI", "Module 17: Implementing AI", [
            ("17.1", "OpenAI", ["API key", "Responses API concept", "Streaming", "Tool calling", "JSON output", "Error handling", "Rate limits", "Cost estimates"]),
            ("17.2", "Anthropic", ["Claude API concept", "Messages", "Streaming", "Tool use", "Prompt caching overview"]),
            ("17.3", "Docs Generation", ["Generate README", "Generate component docs", "Generate API docs", "Generate changelog", "Generate usage examples"], None, ["Build an AI chat UI with streaming.", "Build an AI docs generator for a component library."]),
        ]),
    ]),
    ("06 - Phase 6 - Build Tools", "Phase 6 - Build Tools", [
        ("Module 18 - Module Bundlers", "Module 18: Module Bundlers", [
            ("18.1", "Vite", ["Dev server", "HMR", "Build", "Preview", "Vite config", "Environment variables", "Plugin", "Path alias"]),
            ("18.2", "esbuild", ["Bundling", "Transpilation", "Minify", "Why esbuild is fast"]),
            ("18.3", "SWC", ["Transpiler", "TypeScript and JavaScript transform", "SWC vs Babel"]),
            ("18.4", "Rollup", ["Library bundling", "Tree shaking", "Input and output", "Plugins", "External dependencies"]),
            ("18.5", "Rolldown", ["Rollup-compatible bundler", "Rust-based bundling concept", "Ecosystem overview"]),
            ("18.6", "Parcel", ["Zero-config bundler", "Asset handling", "Build static app"], None, ["Build a React app with Vite.", "Build a small library with Rollup."]),
        ]),
        ("Module 19 - Linters Formatters", "Module 19: Linters & Formatters", [
            ("19.1", "Prettier", ["Format code", ".prettierrc", "Format on save", "Ignore file"]),
            ("19.2", "ESLint", ["Linting", "Rules", "Parser", "Plugin", "Extends", "ESLint with React", "ESLint with TypeScript"]),
            ("19.3", "Biome", ["Formatter", "Linter", "Biome config", "Biome vs ESLint/Prettier"], None, ["Set up lint and format for a React TypeScript project.", "Add scripts: lint, format, typecheck."]),
        ]),
    ]),
    ("07 - Phase 7 - Intermediate Frontend", "Phase 7 - Intermediate Frontend", [
        ("Module 20 - Auth Strategies", "Module 20: Auth Strategies", [
            ("20.1", "Auth Strategies", ["Authentication", "Authorization", "Session-based auth", "Cookie auth", "JWT", "Access token", "Refresh token", "OAuth 2.0", "OpenID Connect", "Login/logout flow", "Protected routes", "RBAC", "Permission-based UI", "CSRF", "XSS token risks", "Secure, HttpOnly, SameSite cookies"], None, ["Build Login/Register UI.", "Build a protected dashboard.", "Build a role-based menu."]),
        ]),
        ("Module 21 - Testing", "Module 21: Testing", [
            ("21.1", "Vitest", ["Unit test", "Test runner", "Assertion", "Mock", "Snapshot basics", "Testing utility functions", "Testing React components"]),
            ("21.2", "Jest", ["Jest basics", "Mock function", "Fake timer", "Snapshot", "Legacy ecosystem"]),
            ("21.3", "Playwright", ["E2E testing", "Browser automation", "Page object", "Locator", "Screenshot", "Trace viewer", "Test login flow"]),
            ("21.4", "Cypress", ["E2E testing", "Component testing", "Cypress commands", "Fixtures", "Intercept API"], None, ["Unit test a Todo reducer.", "Component test a Button.", "E2E test Login -> Dashboard."]),
        ]),
        ("Module 22 - Web Security", "Module 22: Web Security", [
            ("22.1", "CORS", ["Same-origin policy", "Cross-origin request", "Preflight request", "OPTIONS", "CORS headers", "Credentials", "Debug CORS errors"]),
            ("22.2", "HTTPS", ["TLS", "Certificate", "Secure connection", "Mixed content", "HTTPS in local dev", "HTTPS in production"]),
            ("22.3", "CSP", ["Content Security Policy", "script-src", "style-src", "img-src", "Nonce", "Hash", "XSS mitigation"]),
            ("22.4", "OWASP Risks", ["XSS", "CSRF", "Injection basics", "Broken access control", "Sensitive data exposure", "Security misconfiguration", "Vulnerable dependencies"], None, ["Write a frontend security checklist.", "Fix an XSS demo using escaping or sanitization."]),
        ]),
        ("Module 23 - Web APIs", "Module 23: Web APIs", [
            ("23.1", "Web APIs", ["Fetch API", "URL API", "History API", "Storage API", "Clipboard API", "File API", "Drag and Drop API", "Geolocation API", "Notification API", "Intersection Observer", "Resize Observer", "WebSocket", "Broadcast Channel", "Web Workers", "Service Workers", "Streams API"], None, ["Build infinite scroll.", "Build file uploader preview.", "Build clipboard copy button.", "Build WebSocket mini chat."]),
        ]),
    ]),
    ("08 - Phase 8 - Type Safety SSR SSG", "Phase 8 - Type Safety, SSR, SSG", [
        ("Module 24 - TypeScript", "Module 24: Type Checkers", [
            ("24.1", "TypeScript", ["What TypeScript is", "Basic types", "Type inference and annotations", "Interface and type alias", "Union and intersection", "Literal types", "Optional properties", "Generics", "Utility types", "Type narrowing and guards", "unknown vs any", "never", "tsconfig", "React props", "API responses"], None, ["Convert Todo App from JS to TS.", "Type an API response.", "Type a reusable Button component."]),
        ]),
        ("Module 25 - SSR", "Module 25: SSR", [
            ("25.1", "SSR Concept", ["Server-side rendering", "CSR vs SSR", "Hydration", "SEO", "First Contentful Paint", "Server data fetching", "Routing", "Caching", "Streaming SSR"]),
            ("25.2", "React SSR Stack", ["Next.js", "React Router SSR mode", "TanStack Start", "Astro with React islands"]),
            ("25.3", "Vue SSR Stack", ["Nuxt.js", "Server routes", "Data fetching", "Static/SSR hybrid"]),
            ("25.4", "Svelte SSR Stack", ["SvelteKit", "Load function", "Server route", "Adapter"]),
            ("25.5", "Angular SSR", ["Angular Universal concept", "Server rendering", "Hydration overview"], None, ["Build an SSR blog with Next.js.", "Build SSR product listing.", "Build an SEO page with dynamic metadata."]),
        ]),
        ("Module 26 - SSG", "Module 26: SSG", [
            ("26.1", "SSG Concept", ["Static Site Generation", "Build-time rendering", "Markdown content", "Content collection", "Static routing", "SEO", "CDN hosting"]),
            ("26.2", "Astro", ["Astro page", "Layout", "Component island", "Markdown/MDX", "Content collection"]),
            ("26.3", "Next.js SSG", ["Static route", "Dynamic static route", "Generate metadata", "Build output"]),
            ("26.4", "VuePress", ["Documentation site", "Markdown docs", "Sidebar", "Theme"]),
            ("26.5", "Eleventy", ["Static generator", "Template", "Collection", "Markdown content"]),
            ("26.6", "Nuxt.js SSG", ["Generate static", "Content module", "Hybrid rendering"], None, ["Build a documentation website.", "Build a personal blog.", "Build a course notes website."]),
        ]),
    ]),
    ("09 - Phase 9 - Deployment Production", "Phase 9 - Deployment & Production", [
        ("Module 27 - Deployment", "Module 27: Deployment", [
            ("27.1", "GitHub Pages", ["Static deploy", "Build folder", "GitHub Actions deploy", "Custom domain"]),
            ("27.2", "Vercel", ["Import GitHub repo", "Build command", "Environment variables", "Preview deployment", "Production deployment", "Next.js deployment"]),
            ("27.3", "Netlify", ["Static deploy", "Form handling", "Redirect rules", "Environment variables"]),
            ("27.4", "Cloudflare", ["Cloudflare Pages", "Edge", "DNS", "Workers overview", "Cache"]),
            ("27.5", "Railway", ["Deploy fullstack app", "Environment variables", "Logs", "Service config"]),
            ("27.6", "Render", ["Static site", "Web service", "Build/start command", "Logs"], None, ["Deploy portfolio to GitHub Pages.", "Deploy React/Vite to Netlify.", "Deploy Next.js to Vercel.", "Point a custom domain."]),
        ]),
        ("Module 28 - Performance", "Module 28: Performance", [
            ("28.1", "Lighthouse", ["Performance score", "Accessibility score", "Best practices", "SEO score", "Core Web Vitals"]),
            ("28.2", "DevTools Usage", ["Elements", "Console", "Network", "Performance", "Memory", "Application", "Lighthouse", "Coverage"]),
            ("28.3", "Service Workers", ["Register service worker", "Install", "Activate", "Fetch event", "Cache strategy", "Offline support"]),
            ("28.4", "Cache-Control", ["Browser cache", "HTTP cache", "max-age", "no-cache", "no-store", "immutable", "CDN cache"]),
            ("28.5", "Streamed Responses", ["Streaming response", "Chunked response", "Server-sent stream concept", "AI streaming UI", "Progressive rendering"], None, ["Optimize a landing page to Lighthouse 90+.", "Add lazy-loaded images.", "Add route-level code splitting.", "Build an offline page with a service worker."]),
        ]),
        ("Module 29 - Design Systems", "Module 29: Design Systems", [
            ("29.1", "Design Systems", ["Design system", "Design tokens", "Color, typography, spacing, radius, shadow tokens", "Component library", "Button, Input, Select, Checkbox, Modal, Toast, Tabs, Accordion", "Accessibility in components", "Documentation", "Storybook", "Versioning", "Component API design"], None, ["Build a mini design system with React, TypeScript, and Tailwind.", "Document it in Storybook.", "Publish an internal package."]),
        ]),
    ]),
    ("10 - Phase 10 - Advanced Frontend", "Phase 10 - Advanced Frontend", [
        ("Module 30 - Web Components", "Module 30: Web Components", [
            ("30.1", "Custom Elements", ["Define custom element", "Lifecycle callbacks", "Attributes", "Properties", "Events"]),
            ("30.2", "HTML Templates", ["template", "Clone content", "Reusable markup"]),
            ("30.3", "Shadow DOM", ["Encapsulation", "Shadow root", "Slots", "Style isolation"], None, ["Create <app-button>.", "Create <user-card>.", "Use a web component in plain HTML."]),
        ]),
        ("Module 31 - GraphQL", "Module 31: GraphQL", [
            ("31.1", "GraphQL Basics", ["What GraphQL is", "REST vs GraphQL", "Schema", "Type", "Query", "Mutation", "Subscription", "Resolver concept"]),
            ("31.2", "Apollo", ["Apollo Client", "Query hook", "Mutation hook", "Cache", "Error/loading state"]),
            ("31.3", "Relay Modern", ["Relay philosophy", "Fragment", "Colocation", "Store", "Pagination concept"], None, ["Build a React app that calls a GraphQL API.", "List, search, and filter data with Apollo Client."]),
        ]),
        ("Module 32 - Accessibility", "Module 32: Accessibility", [
            ("32.1", "Accessibility", ["WCAG basics", "Semantic HTML", "Keyboard navigation", "Focus management", "Skip link", "ARIA", "Accessible name", "Color contrast", "Reduced motion", "Screen reader testing", "Accessible modal, dropdown, form, and table"], None, ["Audit accessibility with Lighthouse.", "Fix a keyboard trap.", "Build an accessible modal."]),
        ]),
        ("Module 33 - PWAs", "Module 33: PWAs", [
            ("33.1", "Progressive Web Apps", ["What a PWA is", "Web App Manifest", "Installable app", "Service Worker", "Offline cache", "Cache strategy", "Push notification", "Background sync", "App shell", "PWA audit"], None, ["Build Offline Notes App.", "Build installable PWA Todo App."]),
        ]),
        ("Module 34 - Mobile Apps", "Module 34: Mobile Apps", [
            ("34.1", "React Native", ["React Native components", "Native mobile concept", "Navigation", "Styling", "API calls", "Build app overview"]),
            ("34.2", "Flutter", ["Widget", "Dart basics", "State", "Navigation", "Build mobile UI"]),
            ("34.3", "Ionic", ["Web-to-mobile hybrid", "Ionic components", "Capacitor", "Build Android/iOS"], None, ["Convert a Todo App to React Native or Flutter."]),
        ]),
        ("Module 35 - Desktop Apps", "Module 35: Desktop Apps", [
            ("35.1", "Electron", ["Main process", "Renderer process", "IPC", "Packaging", "Security"]),
            ("35.2", "Tauri", ["Rust backend concept", "Web frontend", "Native shell", "Small binary"]),
            ("35.3", "Flutter Desktop", ["Flutter desktop build", "Cross-platform UI", "Packaging"], None, ["Build a desktop notes app.", "Build a desktop markdown editor."]),
        ]),
    ]),
    ("11 - Phase 11 - Continue Learning Tracks", "Phase 11 - Continue Learning Tracks", [
        ("Module 36 - Node.js", "Module 36: Node.js", [
            ("36.1", "Node.js", ["Node.js runtime", "npm ecosystem", "Express/Fastify", "REST API", "Auth", "Database", "File upload", "Deployment"]),
        ]),
        ("Module 37 - Backend", "Module 37: Backend", [
            ("37.1", "Backend", ["API design", "Database", "Authentication", "Authorization", "Caching", "Queue", "Logging", "Monitoring", "Security"]),
        ]),
        ("Module 38 - Fullstack", "Module 38: Fullstack", [
            ("38.1", "Fullstack", ["Frontend + backend integration", "Monorepo", "API contract", "Auth full flow", "SSR fullstack", "Deployment fullstack", "CI/CD"]),
        ]),
        ("Module 39 - Advanced Design Systems", "Module 39: Advanced Design Systems", [
            ("39.1", "Advanced Design Systems", ["Token pipeline", "Figma tokens", "Component API", "Accessibility standard", "Documentation", "Versioning", "Contribution workflow", "Breaking changes"]),
        ]),
    ]),
]


def write_if_missing(path: Path, content: str) -> bool:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        return False
    path.write_text(content, encoding="utf-8", newline="\n")
    return True


def module_index(phase: str, module: str, lessons) -> str:
    lines = [f"# {module}", "", f"## Section", phase, "", "## Lessons", ""]
    for idx, (_, title, *_rest) in enumerate(lessons, 1):
        lines.append(f"- [{idx:03d} - {title}]({slug_filename(idx, title)})")
    lines.extend(["", "## Study Rule", "", "Do not study every alternative at once. Pick one main tool first, then compare the rest at a high level."])
    return "\n".join(lines) + "\n"


def course_readme() -> str:
    return """# Frontend Developer Roadmap Course

This course is a complete English markdown version of the Frontend Developer Roadmap. It starts with web foundations, then moves through HTML, CSS, JavaScript, Git, React, AI-assisted development, build tools, testing, security, TypeScript, SSR/SSG, deployment, performance, design systems, and advanced frontend tracks.

## Study Convention

Do not learn all alternatives at the same time. Groups such as React/Vue/Angular/Svelte/Solid, npm/yarn/pnpm/Bun, and Vite/Rollup/Parcel/esbuild/SWC are choice groups. Learn one primary option first, then understand the others by comparison.

## Recommended Primary Track

- Framework: React
- CSS framework: Tailwind CSS
- Bundler: Vite
- Type checker: TypeScript
- SSR/SSG: Next.js and Astro
- Testing: Vitest and Playwright
- Deployment: GitHub Pages, Netlify, Vercel, Cloudflare Pages

## How to Use

1. Read one lesson.
2. Complete its practice tasks.
3. Write notes in your own words.
4. Build the project for that module.
5. Only move on when you can explain the topic without reading the lesson.
"""


def main():
    created = 0
    all_phases = PHASES + [
        {"dir": d, "phase": phase, "modules": [{"dir": md, "name": mn, "lessons": lessons} for md, mn, lessons in modules]}
        for d, phase, modules in EXTRA_PHASES
    ]

    for phase in all_phases:
        for module in phase["modules"]:
            module_dir = COURSE_ROOT / phase["dir"] / module["dir"]
            if write_if_missing(module_dir / "README.md", module_index(phase["phase"], module["name"], module["lessons"])):
                created += 1
            for idx, lesson in enumerate(module["lessons"], 1):
                number, title, learn = lesson[0], lesson[1], lesson[2]
                outcomes = lesson[3] if len(lesson) > 3 else None
                exercises = lesson[4] if len(lesson) > 4 else None
                path = module_dir / slug_filename(idx, title)
                content = lesson_markdown(phase["phase"], module["name"], number, title, learn, outcomes, exercises)
                if write_if_missing(path, content):
                    created += 1

    index_path = COURSE_ROOT / "COURSE_INDEX.md"
    if write_if_missing(index_path, course_readme()):
        created += 1

    print(f"Created {created} markdown files.")


if __name__ == "__main__":
    main()
