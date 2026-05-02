import Link from "next/link";
import type { Metadata } from "next";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";

export const metadata: Metadata = {
  title: "부모로를 시작합니다 — 동작구에서 첫째를 낳고 | 부모로의 편지",
  description:
    "첫째 낳기 전 한 달, 매일 밤 검색했어요. 딱 나한테 맞는 정보가 없어서 직접 정리하기 시작했어요.",
};

export default function LetterHelloPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      {/* 뒤로가기 */}
      <Link
        href="/letters"
        className="inline-flex items-center gap-1.5 text-sm text-bumoro-text/50 hover:text-bumoro-orange transition-colors mb-8"
      >
        ← 편지 목록
      </Link>

      {/* 메타 */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-bumoro-orange bg-bumoro-pink/60 px-2.5 py-1 rounded-full">
          첫 번째 편지
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-bumoro-text leading-snug mt-4 mb-2">
          부모로를 시작합니다 —<br />동작구에서 첫째를 낳고
        </h1>
        <div className="flex items-center gap-3 text-xs text-bumoro-text/40">
          <span>2026.05.02</span>
          <span>·</span>
          <span>3분 읽기</span>
        </div>
      </div>

      {/* 본문 */}
      <article className="prose prose-sm max-w-none text-bumoro-text/80 leading-relaxed space-y-5">
        <p>
          첫째 낳기 전 한 달, 매일 밤 검색했어요.
        </p>
        <p>
          "임신 36주 준비물", "출산 가방 뭐 챙겨야 해", "조리원 들어가기 전 뭐 사야 해" —
          검색은 했는데 딱 나한테 맞는 정보가 없더라고요.
          다 비슷비슷한 리스트고, 구체적인 디테일이 없어요.
          보르르 세척을 어떻게 하는지, 분유포트는 몇 도로 맞춰야 하는지,
          동작구 출산축하금은 얼마인지.
        </p>
        <p>
          그래서 직접 정리하기 시작했어요. 노션에요. 처음엔 저 혼자 보려고.
        </p>
        <p>
          4개 카테고리, 50개가 넘는 항목을 정리하다가 문득 이런 생각이 들었어요.
          <br />
          <em>"이 디테일이 누군가의 검색 한 번을 줄여줄 수 있다면, 그걸로 충분한 거 아닐까?"</em>
        </p>
        <p>
          그게 부모로의 시작이에요.
        </p>
        <p>
          저는 개발자도 아니고, 의료 전문가도 아니에요.
          그냥 동작구에서 첫째를 낳은 부모예요.
          그래서 더 솔직하게 쓸 수 있을 것 같아요.
          "이건 샀다가 후회했어요"도, "이건 진짜 도움됐어요"도.
        </p>
        <p>
          매주 편지를 쓸게요.
          정보가 아니라 경험을. 가이드가 아니라 이야기를.
        </p>
        <p>
          새벽 3시에 아기 재우다 지쳐 폰 보시는 분이 계시다면,
          그 분한테 닿았으면 해요.
          혼자가 아니에요.
        </p>
        <p className="font-medium text-bumoro-text">
          — 부모로 드림
        </p>
      </article>

      {/* 구분선 */}
      <hr className="my-8 border-bumoro-pink" />

      {/* 구독 유도 */}
      <div className="bg-bumoro-pink/40 rounded-2xl p-5 text-center">
        <p className="font-semibold text-bumoro-text text-sm mb-1">다음 편지도 받아보세요</p>
        <p className="text-xs text-bumoro-text/50 mb-4">매주 1회, 무료</p>
        <NewsletterForm buttonText="구독" />
      </div>

      {/* 목록으로 */}
      <div className="mt-6 text-center">
        <Link href="/letters" className="text-sm text-bumoro-text/50 hover:text-bumoro-orange transition-colors">
          편지 목록 보기
        </Link>
      </div>
    </div>
  );
}
