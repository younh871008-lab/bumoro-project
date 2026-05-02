import type { Metadata } from "next";
import { BenefitsForm } from "@/components/marketing/BenefitsForm";

export const metadata: Metadata = {
  title: "정부지원금 자동 매칭 | 부모로",
  description:
    "출산예정일과 거주지를 입력하면 받을 수 있는 정부지원금을 1분 안에 자동으로 알려드려요. 첫만남이용권, 부모급여, 아동수당, 지자체 출산축하금까지.",
};

const BENEFIT_PREVIEWS = [
  { name: "첫만남이용권", amount: "200만원", desc: "출생 후 12개월 이내 신청", icon: "🎁" },
  { name: "부모급여",     amount: "월 100만원", desc: "0~11개월 자녀 보유 시", icon: "💰" },
  { name: "아동수당",     amount: "월 10만원",  desc: "0~95개월 모든 아동", icon: "👶" },
  { name: "지자체 출산축하금", amount: "지역마다 달라요", desc: "거주지 입력 후 확인", icon: "📍" },
];

export default function BenefitsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* 헤더 */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-bumoro-orange uppercase tracking-widest mb-2">
          정부지원금 자동 매칭
        </p>
        <h1 className="text-2xl font-bold text-bumoro-text mb-2">
          받을 수 있는데 모르고 못 받는 돈,<br />
          1분이면 끝나요
        </h1>
        <p className="text-sm text-bumoro-text/60 leading-relaxed">
          출생신고 갔다가 직원분이 "같이 신청하시죠?" 해서 알았어요.
          몰랐다면 또 한 번 가야 했을 거예요.
        </p>
      </div>

      {/* 미리보기 혜택 카드 */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {BENEFIT_PREVIEWS.map((b) => (
          <div key={b.name} className="bg-white rounded-2xl p-4 border border-bumoro-pink">
            <div className="text-xl mb-2">{b.icon}</div>
            <p className="text-xs text-bumoro-text/50 mb-0.5">{b.name}</p>
            <p className="font-bold text-bumoro-text text-base">{b.amount}</p>
            <p className="text-xs text-bumoro-text/40 mt-1">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* 매칭 폼 */}
      <div className="mb-4">
        <h2 className="font-bold text-bumoro-text mb-1">우리 가족 맞춤 혜택 조회</h2>
        <p className="text-xs text-bumoro-text/50">
          거주 지자체마다 추가 지원금이 달라요. 정확한 거주지를 입력해주세요.
        </p>
      </div>
      <BenefitsForm />

      {/* 출처 안내 */}
      <p className="text-xs text-bumoro-text/35 mt-4 text-center">
        보건복지부·질병관리청·각 지자체 공식 데이터 기반 · 분기별 업데이트
      </p>
    </div>
  );
}
