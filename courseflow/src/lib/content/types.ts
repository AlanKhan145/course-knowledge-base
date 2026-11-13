// Public shapes returned by the content repository. No absolute paths leave the server.

export type CourseStatus = "ready" | "partial" | "overview-only" | "empty";
export type Level = "beginner" | "intermediate" | "advanced";

export interface DomainSummary {
  id: string;
  title: string;
  ord: number;
  courseCount: number;
  lessonCount: number;
  categories: CategorySummary[];
}

export interface CategorySummary {
  id: string;
  domainId: string;
  parentId: string | null;
  title: string;
  courseCount: number;
  level: string | null;
}

export interface MediaCounts {
  mermaid: number;
  math: number;
  images: number;
  code: number;
}

export interface CourseSummary {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  domainId: string;
  domainTitle: string;
  categoryId: string;
  categoryTitle: string;
  subcategoryId: string | null;
  subcategoryTitle: string | null;
  language: string;
  level: string | null;
  tags: string[];
  moduleCount: number;
  lessonCount: number;
  questionCount: number;
  gradableCount: number;
  estMinutes: number;
  updatedAt: number;
  status: CourseStatus;
  media: MediaCounts;
}

export interface LessonOutline {
  id: string;
  slug: string;
  title: string;
  ord: number;
  groupLabel: string | null;
  minutes: number;
  questions: number;
  gradable: number;
  kind: "lesson" | "overview" | "resource";
}

export interface ModuleOutline {
  id: string;
  ord: number;
  title: string;
  kind: string;
  lessonCount: number;
  questionCount: number;
  lessons: LessonOutline[];
}

export interface CourseDetail extends CourseSummary {
  objectives: string[];
  prerequisites: string[];
  sourceUrl: string | null;
  overviewSlug: string | null;
  modules: ModuleOutline[];
  resources: LessonOutline[];
  wordCount: number;
  resourceFileCount: number;
}

export interface LessonDetail {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  kind: "lesson" | "overview" | "resource";
  rootId: string;
  path: string;
  courseId: string;
  moduleId: string | null;
  moduleTitle: string | null;
  moduleOrd: number | null;
  groupLabel: string | null;
  ord: number;
  minutes: number;
  words: number;
  questions: number;
  tags: string[];
  lang: string;
  mtime: number;
}

export interface SearchSnippetPart {
  text: string;
  hit: boolean;
}

export interface SearchHitLesson {
  lessonId: string;
  lessonSlug: string;
  lessonTitle: string;
  kind: string;
  courseSlug: string;
  courseTitle: string;
  moduleTitle: string | null;
  domainTitle: string;
  snippet: SearchSnippetPart[] | null;
}

export interface SearchHitCourse {
  slug: string;
  title: string;
  domainTitle: string;
  categoryTitle: string;
  lessonCount: number;
  matchedIn: "title" | "module";
  moduleTitle?: string;
}

export interface SearchResult {
  query: string;
  terms: string[];
  courses: SearchHitCourse[];
  lessons: SearchHitLesson[];
  tookMs: number;
}

export interface IssueSummary {
  severity: "error" | "warning" | "info";
  code: string;
  message: string;
  lessonId: string | null;
  detail: string | null;
}
