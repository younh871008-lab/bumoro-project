import Link from "next/link";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";

const LETTERS = [
  {
    slug: "hello",
    title: "부모로를 시작합니다 — 동작구에서 첫째를 낳고",
    excerpt:
      "첫째 낳기 전 한 달, 매일 밤 검색했어요. 근데 딱 나한테 맞는 정보가 없더라고요. 그래서 직접 정리하기 시작했어요.",
    readMin: 3,
    date: "2026.05.02",
    tag: "첫 번째 편지",
  },
];

export default function LettersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-bumoro-orange uppercase tracking-widest mb-2">
          Letters from Bumoro
        </p>
        <h1 className="text-2xl font-bold text-bumoro-text mb-2">부모로의 편지</h1>
        <p className="text-sm text-bumoro-text/60 leading-relaxed">
          먼저 그 길을 지나간 부모가 씁니다. 정보가 아닌 위로.
          <br />매주 한 편, 새벽에도 읽을 수 있도록.
        </p>
      </div>

      {/* 편지 목록 */}
      <div className="flex flex-col gap-4">
        {LETTERS.map((letter) => (
          <Link key={letter.slug} href={`/letters/${letter.slug}`} className="block group">
            <article className="bg-white rounded-2xl p-5 border border-bumoro-pink hover:border-bumoro-orange/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-bumoro-orange bg-bumoro-pink/60 px-2.5 py-1 rounded-full">
                  {letter.tag}
                </span>
                <span className="text-xs text-bumoro-text/40">{letter.readMin}분 읽기</span>
                <span className="text-xs text-bumoro-text/30 ml-auto">{letter.date}</span>
              </div>
              <h2 className="font-bold text-bumoro-text leading-snug mb-2 group-hover:text-bumoro-orange transition-colors">
                {letter.title}
              </h2>
              <p className="text-sm text-bumoro-text/60 leading-relaxed line-clamp-2">
                {letter.excerpt}
              </p>
              <p className="text-xs text-bumoro-orange mt-3 font-medium">읽어보기 →</p>
            </article>
          </Link>
        ))}
      </div>

      {/* 구독 유도 */}
      <div className="mt-10 bg-bumoro-pink/40 rounded-2xl p-6 text-center">
        <p className="font-semibold text-bumoro-text mb-1">새 편지가 나오면 바로 받아보세요</p>
        <p className="text-sm text-bumoro-text/55 mb-4">무료 · 매주 1회 · 언제든 해지 가능</p>
        <div className="max-w-sm mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
