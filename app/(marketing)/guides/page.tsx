import Link from "next/link";
import type { Metadata } from "next";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";

export const metadata: Metadata = {
  title: "임신·육아 월령별 가이드 | 부모로",
  description:
    "임신 주차별, 생후 월령별 발달·육아 가이드. 정확한 정보 + 먼저 키운 부모의 솔직한 경험담.",
};

const PREGNANCY_GUIDES = [
  { week: "임신 초기", range: "4~12주", desc: "임신 확인·입덧·기형아 검사", slug: "pregnancy-early" },
  { week: "임신 중기", range: "13~27주", desc: "태동·정밀 초음파·임신성 당뇨 검사", slug: "pregnancy-mid" },
  { week: "임신 후기", range: "28~40주", desc: "출산 준비·입원가방·분만 방법", slug: "pregnancy-late" },
];

const BABY_GUIDES = [
  { age: "신생아", range: "0~1개월", desc: "수유·수면·배꼽 관리", slug: "newborn" },
  { age: "100일",  range: "2~3개월", desc: "목 가누기·옹알이·예방접종", slug: "100days" },
  { age: "4~6개월", range: "4~6개월", desc: "이유식 시작·뒤집기·낯가림", slug: "4-6months" },
  { age: "7~12개월", range: "7~12개월", desc: "기기·잡고 서기·돌잔치", slug: "7-12months" },
  { age: "돌~18개월", range: "13~18개월", desc: "걷기·언어 발달·어린이집", slug: "13-18months" },
  { age: "18~36개월", range: "19~36개월", desc: "어린이집·대소변 훈련·언어 폭발", slug: "18-36months" },
];

function GuideCard({ title, range, desc, slug, comingSoon }: {
  title: string; range: string; desc: string; slug: string; comingSoon?: boolean;
}) {
  const content = (
    <div className="bg-white rounded-2xl p-4 border border-bumoro-pink hover:border-bumoro-orange/40 hover:shadow-sm transition-all h-full">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="font-semibold text-bumoro-text text-sm">{title}</p>
          <p className="text-xs text-bumoro-orange mt-0.5">{range}</p>
        </div>
        {comingSoon && (
          <span className="text-[10px] text-bumoro-text/40 border border-bumoro-pink rounded-full px-2 py-0.5 shrink-0 ml-2">
            준비중
          </span>
        )}
      </div>
      <p className="text-xs text-bumoro-text/50 leading-relaxed">{desc}</p>
    </div>
  );

  if (comingSoon) return <div className="opacity-60">{content}</div>;
  return <Link href={`/guides/${slug}`}>{content}</Link>;
}

export default function GuidesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-bumoro-orange uppercase tracking-widest mb-2">
          임신·육아 가이드
        </p>
        <h1 className="text-2xl font-bold text-bumoro-text mb-2">
          월령별로 정리했어요
        </h1>
        <p className="text-sm text-bumoro-text/60">
          공식 정보 + 실제로 키워본 부모의 디테일.
          마지막 한 줄은 항상 따뜻하게 씁니다.
        </p>
      </div>

      {/* 임신 */}
      <section className="mb-8">
        <h2 className="font-bold text-bumoro-text mb-3 flex items-center gap-2">
          🤰 임신
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PREGNANCY_GUIDES.map((g) => (
            <GuideCard
              key={g.slug}
              title={g.week}
              range={g.range}
              desc={g.desc}
              slug={g.slug}
              comingSoon
            />
          ))}
        </div>
      </section>

      {/* 신생아·영아 */}
      <section className="mb-8">
        <h2 className="font-bold text-bumoro-text mb-3 flex items-center gap-2">
          👶 신생아·영아
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {BABY_GUIDES.map((g) => (
            <GuideCard
              key={g.slug}
              title={g.age}
              range={g.range}
              desc={g.desc}
              slug={g.slug}
              comingSoon
            />
          ))}
        </div>
      </section>

      {/* SEO 안내 */}
      <div className="bg-bumoro-pink/40 rounded-2xl p-5">
        <p className="text-sm font-semibold text-bumoro-text mb-1">
          찾는 가이드가 없나요?
        </p>
        <p className="text-xs text-bumoro-text/55 leading-relaxed mb-3">
          매주 새 가이드를 추가하고 있어요. 구독하시면 새 글이 올라올 때 알려드려요.
        </p>
        <NewsletterForm buttonText="알림 받기" />
      </div>
    </div>
  );
}
