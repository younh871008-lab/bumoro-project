import Link from "next/link";
import { BenefitsForm } from "@/components/marketing/BenefitsForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-4 pt-10 pb-6">
        <p className="text-xs font-semibold text-bumoro-orange uppercase tracking-widest mb-4">
          동작구에서 첫째를 낳은 부모가 만듭니다
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-bumoro-text leading-snug mb-4">
          혼자 검색하지 마세요.
          <br />
          <span className="text-bumoro-orange">먼저 한 부모가</span>
          <br />
          정리해놨어요.
        </h1>
        <p className="text-base text-bumoro-text/65 leading-relaxed mb-8">
          정부지원금 자동 매칭부터 새벽 3시 마음 한 줄까지.
          <br />
          임신·출산·육아의 모든 순간, 옆에 있을게요.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/letters"
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-bumoro-text text-white font-semibold h-13 py-3.5 text-sm hover:bg-bumoro-text/85 transition-colors"
          >
            📖 부모로의 편지 읽기
          </Link>
          <a
            href="#benefits"
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-bumoro-orange text-white font-semibold h-13 py-3.5 text-sm hover:bg-bumoro-orange/90 transition-colors"
          >
            🍼 혜택 1분 매칭
          </a>
        </div>
      </section>

      {/* 최신 편지 카드 */}
      <section className="max-w-2xl mx-auto px-4 pb-6">
        <Link href="/letters/hello" className="block group">
          <div className="bg-white rounded-2xl p-5 border border-bumoro-pink hover:border-bumoro-orange/40 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-bumoro-orange bg-bumoro-pink/60 px-2.5 py-1 rounded-full">
                부모로의 편지
              </span>
              <span className="text-xs text-bumoro-text/40">3분 읽기</span>
            </div>
            <h2 className="font-bold text-bumoro-text text-base leading-snug mb-2 group-hover:text-bumoro-orange transition-colors">
              부모로를 시작합니다 — 동작구에서 첫째를 낳고
            </h2>
            <p className="text-sm text-bumoro-text/60 leading-relaxed line-clamp-2">
              첫째 낳기 전 한 달, 매일 밤 검색했어요. 근데 딱 나한테 맞는 정보가 없더라고요.
              그래서 직접 정리하기 시작했어요.
            </p>
            <p className="text-xs text-bumoro-orange mt-3 font-medium">읽어보기 →</p>
          </div>
        </Link>
      </section>

      {/* 정부지원금 매칭 */}
      <section id="benefits" className="max-w-2xl mx-auto px-4 pb-6">
        <div className="mb-3">
          <h2 className="font-bold text-bumoro-text text-lg">받을 수 있는 혜택, 놓치지 마세요</h2>
          <p className="text-sm text-bumoro-text/55 mt-0.5">출산예정일과 거주지 입력 → 1분 자동 매칭</p>
        </div>
        <BenefitsForm />
      </section>

      {/* 시그니처 기능 */}
      <section className="max-w-2xl mx-auto px-4 pb-6">
        <h2 className="font-bold text-bumoro-text text-lg mb-3">곧 만날 수 있어요</h2>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { emoji: "🌙", title: "새벽 3시의\n마음카드", desc: "매일 한 장\n위로 카드" },
            { emoji: "📓", title: "우리 아이\n일기장",   desc: "월령별 자동\n프롬프트" },
            { emoji: "📍", title: "우리 동네\n부모 지도",desc: "검증된 소아과\n부모 후기" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-4 text-center border border-bumoro-pink/70"
            >
              <div className="text-2xl mb-2">{item.emoji}</div>
              <p className="text-xs font-semibold text-bumoro-text/80 whitespace-pre-line leading-snug mb-1.5">
                {item.title}
              </p>
              <p className="text-[11px] text-bumoro-text/40 whitespace-pre-line leading-snug">
                {item.desc}
              </p>
              <span className="inline-block mt-2 text-[10px] text-bumoro-orange border border-bumoro-pink rounded-full px-2 py-0.5">
                출시 예정
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 신뢰 */}
      <section className="max-w-2xl mx-auto px-4 pb-12">
        <div className="rounded-2xl bg-white border border-bumoro-pink p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🤍</span>
            <div>
              <p className="text-sm font-semibold text-bumoro-text mb-1">
                정확하게, 그리고 따뜻하게
              </p>
              <p className="text-xs text-bumoro-text/55 leading-relaxed">
                보건복지부·질병관리청·각 지자체 공식 데이터 기반, 분기별 직접 업데이트.
                의료 정보는 항상 "의료진 상담 권고" 톤으로만 다룹니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
