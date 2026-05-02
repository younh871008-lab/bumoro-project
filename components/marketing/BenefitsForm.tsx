"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const REGIONS = [
  "서울특별시",
  "경기도",
  "인천광역시",
  "부산광역시",
  "대구광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

export function BenefitsForm() {
  const [dueDate, setDueDate] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-bumoro-pink">
      <p className="text-sm font-medium text-bumoro-text/60 mb-4">
        받을 수 있는 모든 혜택, 1분이면 끝나요
      </p>
      <div className="flex flex-col gap-3">
        <div>
          <label className="block text-sm font-medium text-bumoro-text mb-1">
            출산예정일
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded-lg border border-bumoro-pink px-3 py-2 text-sm bg-bumoro-beige focus:outline-none focus:ring-2 focus:ring-bumoro-orange/40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-bumoro-text mb-1">
            거주지
          </label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full rounded-lg border border-bumoro-pink px-3 py-2 text-sm bg-bumoro-beige focus:outline-none focus:ring-2 focus:ring-bumoro-orange/40"
          >
            <option value="">시/도 선택</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <Button
          className="w-full bg-bumoro-orange hover:bg-bumoro-orange/90 text-white font-medium rounded-xl h-11"
          disabled={!dueDate || !region}
        >
          혜택 조회하기
        </Button>
      </div>
      <p className="text-xs text-bumoro-text/40 mt-3 text-center">
        가입 없이도 미리보기 가능해요
      </p>
    </div>
  );
}
