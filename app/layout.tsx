import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "부모로 — 먼저 한 부모가 알려드려요",
  description:
    "임신·출산·육아의 모든 순간을 먼저 지나간 부모가 따뜻하게 안내합니다. 정부지원금 자동 매칭부터 새벽 3시 마음 한 줄까지.",
  keywords: ["육아", "출산", "임신", "정부지원금", "첫만남이용권", "부모급여"],
  openGraph: {
    title: "부모로 — 혼자 검색하지 마세요",
    description: "먼저 한 부모가 정리해놨어요.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bumoro-beige text-bumoro-text">
        {children}
      </body>
    </html>
  );
}
