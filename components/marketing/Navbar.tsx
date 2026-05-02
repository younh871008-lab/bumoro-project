import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bumoro-beige/90 backdrop-blur-sm border-b border-bumoro-pink">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-bumoro-orange tracking-tight">
          부모로
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-bumoro-text/70">
          <Link href="/letters" className="hover:text-bumoro-orange transition-colors">
            편지
          </Link>
          <Link href="/benefits" className="hover:text-bumoro-orange transition-colors">
            지원금
          </Link>
          <Link href="/guides" className="hover:text-bumoro-orange transition-colors">
            가이드
          </Link>
        </nav>
        <Link
          href="/login"
          className="text-sm font-medium text-bumoro-text/70 hover:text-bumoro-orange transition-colors"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}
