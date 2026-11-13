import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Literata } from "next/font/google";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const sans = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700"], variable: "--font-be-vietnam", display: "swap" });
const serif = Literata({ subsets: ["latin", "vietnamese"], variable: "--font-literata", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "vietnamese"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: { default: "CourseFlow — Personal Learning Hub", template: "%s · CourseFlow" },
  description: "Học theo module, đọc ghi chú khóa học, làm câu hỏi ôn tập và theo dõi tiến độ.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#121311" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-dvh antialiased">
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">
            Bỏ qua tới nội dung
          </a>
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
