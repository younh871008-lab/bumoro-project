import Link from "next/link";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-bumoro-pink mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* 뉴스레터 구독 */}
        <div className="bg-bumoro-pink/40 rounded-2xl p-6 mb-8 text-center">
          <p className="text-xs font-medium text-bumoro-orange uppercase tracking-wide mb-2">
            부모로의 편지 · 주 1회
          </p>
          <h3 className="font-bold text-bumoro-text text-lg mb-1">
            새벽에도 옆에 있을게요
          </h3>
          <p className="text-sm text-bumoro-text/60 mb-4">
            먼저 한 부모가 쓰는 1인칭 육아 에세이, 매주 보내드려요.
          </p>
          <div className="max-w-sm mx-auto">
            <NewsletterForm />
          </div>
          <p className="text-xs text-bumoro-text/40 mt-2">무료 · 언제든 해지 가능</p>
        </div>

        {/* 링크 */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-bumoro-text/50 mb-6">
          <Link href="/letters" className="hover:text-bumoro-orange transition-colors">부모로의 편지</Link>
          <Link href="/benefits" className="hover:text-bumoro-orange transition-colors">정부지원금 매칭</Link>
          <Link href="/guides" className="hover:text-bumoro-orange transition-colors">월령별 가이드</Link>
          <Link href="/signup" className="hover:text-bumoro-orange transition-colors">회원가입</Link>
        </div>

        <div className="text-center text-xs text-bumoro-text/30 space-y-1">
          <p>부모로 (Bumoro) · 동작구에서 첫째를 낳은 부모가 만듭니다</p>
          <p>모든 정보는 참고용이며, 정확한 판단은 의료진과 상담하세요.</p>
          <p className="mt-3">
            <Link href="/privacy" className="hover:underline mr-3">개인정보처리방침</Link>
            <Link href="/terms" className="hover:underline">이용약관</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
