"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/letters", label: "편지" },
  { href: "/benefits", label: "지원금" },
  { href: "/guides", label: "가이드" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bumoro-beige/95 backdrop-blur-sm border-b border-bumoro-pink">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="font-bold text-xl text-bumoro-orange tracking-tight">
          부모로
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname.startsWith(href)
                  ? "text-bumoro-orange font-semibold"
                  : "text-bumoro-text/60 hover:text-bumoro-orange"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-medium text-bumoro-text/60 hover:text-bumoro-orange transition-colors"
          >
            로그인
          </Link>
          {/* 모바일 햄버거 */}
          <button
            className="sm:hidden p-2 -mr-2 text-bumoro-text/60"
            onClick={() => setOpen(!open)}
            aria-label="메뉴"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <div className="sm:hidden border-t border-bumoro-pink bg-bumoro-beige">
          <nav className="max-w-2xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm font-medium transition-colors ${
                  pathname.startsWith(href)
                    ? "text-bumoro-orange"
                    : "text-bumoro-text/70"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-bumoro-pink mt-1 pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-bumoro-text/60 block"
              >
                로그인
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="mt-2 w-full flex items-center justify-center bg-bumoro-orange text-white font-medium rounded-xl py-2.5 text-sm"
              >
                무료 가입하기
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
