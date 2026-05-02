import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { BenefitsForm } from "@/components/marketing/BenefitsForm";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero — Founder Voice 우선 */}
        <section className="max-w-2xl mx-auto px-4 pt-12 pb-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-bumoro-text leading-tight mb-4">
              혼자 검색하지 마세요.
              <br />
              <span className="text-bumoro-orange">먼저 한 부모가</span> 정리해놨어요.
            </h1>
            <p className="text-base text-bumoro-text/70 leading-relaxed">
              동작구에서 첫째를 낳고 정리한 체크리스트가 시작이었어요.
              <br />
              누군가에겐 이 디테일이 한 번의 검색을 줄여줄 수 있다면, 그걸로 충분해요.
            </p>
          </div>

          {/* CTA 버튼 2개 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/letters"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-bumoro-text text-white font-medium h-12 text-sm hover:bg-bumoro-text/90 transition-colors"
            >
              📖 부모로의 편지 읽기
            </Link>
            <a
              href="#benefits"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-bumoro-orange text-white font-medium h-12 text-sm hover:bg-bumoro-orange/90 transition-colors"
            >
              🍼 우리 아이 혜택 1분 매칭
            </a>
          </div>

          {/* 최신 편지 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-bumoro-pink mb-6">
            <p className="text-xs font-medium text-bumoro-orange mb-2 uppercase tracking-wide">
              최신 편지 · Founder Voice
            </p>
            <h2 className="font-semibold text-bumoro-text mb-1">
              부모로를 시작합니다 — 첫 인사
            </h2>
            <p className="text-sm text-bumoro-text/60 mb-3 leading-relaxed">
              동작구에서 첫째를 낳고 정리한 노션 체크리스트가 부모로의 시작이에요.
              같은 길을 가시는 분들에게 조금이라도 도움이 되면 좋겠어요.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-bumoro-text/40">3분 읽기 · 방금 발행</span>
              <Link
                href="/letters"
                className="text-sm font-medium text-bumoro-orange hover:underline"
              >
                읽어보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* 정부지원금 매칭 */}
        <section id="benefits" className="max-w-2xl mx-auto px-4 pb-8">
          <BenefitsForm />
        </section>

        {/* 시그니처 기능 그리드 */}
        <section className="max-w-2xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-3 gap-3">
            {[
              { emoji: "🌙", label: "새벽 3시의\n마음카드", badge: "출시 예정" },
              { emoji: "📓", label: "우리 아이\n일기장", badge: "출시 예정" },
              { emoji: "📍", label: "우리 동네\n부모 지도", badge: "출시 예정" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 text-center border border-bumoro-pink opacity-60"
              >
                <div className="text-2xl mb-1">{item.emoji}</div>
                <p className="text-xs font-medium text-bumoro-text/70 whitespace-pre-line leading-snug">
                  {item.label}
                </p>
                <span className="inline-block mt-2 text-[10px] text-bumoro-orange/70 border border-bumoro-pink rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 신뢰 배너 */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-bumoro-pink/50 rounded-2xl p-5 text-center">
            <p className="text-xs text-bumoro-text/60 mb-3">
              📖 자료 출처: 보건복지부, 질병관리청, 각 지자체 공식 데이터 · 분기별 업데이트
            </p>
            <Link
              href="/signup"
              className="inline-block bg-bumoro-orange text-white font-medium rounded-xl px-6 py-3 text-sm hover:bg-bumoro-orange/90 transition-colors"
            >
              무료로 가입하고 부모로의 편지 받기
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-bumoro-pink py-6">
        <div className="max-w-2xl mx-auto px-4 text-center text-xs text-bumoro-text/40">
          <p>부모로 (Bumoro) · 모든 정보는 참고용이며 정확한 판단은 의료진과 상담하세요.</p>
        </div>
      </footer>
    </>
  );
}
