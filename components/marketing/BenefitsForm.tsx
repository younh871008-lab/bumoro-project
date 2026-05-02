"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SIDO_LIST, getSigunguList } from "@/lib/regions";

export function BenefitsForm() {
  const [dueDate, setDueDate] = useState("");
  const [sido, setSido] = useState("");
  const [sigungu, setSigungu] = useState("");

  const sigunguList = getSigunguList(sido);
  const isSejong = sido === "세종특별자치시";
  const isReady = dueDate && sido && (isSejong || sigungu);

  function handleSidoChange(value: string) {
    setSido(value);
    setSigungu("");
  }

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
            거주지 (시/도)
          </label>
          <select
            value={sido}
            onChange={(e) => handleSidoChange(e.target.value)}
            className="w-full rounded-lg border border-bumoro-pink px-3 py-2 text-sm bg-bumoro-beige focus:outline-none focus:ring-2 focus:ring-bumoro-orange/40"
          >
            <option value="">시/도 선택</option>
            {SIDO_LIST.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {sido && !isSejong && (
          <div>
            <label className="block text-sm font-medium text-bumoro-text mb-1">
              거주지 (시/군/구)
            </label>
            <select
              value={sigungu}
              onChange={(e) => setSigungu(e.target.value)}
              className="w-full rounded-lg border border-bumoro-pink px-3 py-2 text-sm bg-bumoro-beige focus:outline-none focus:ring-2 focus:ring-bumoro-orange/40"
            >
              <option value="">시/군/구 선택</option>
              {sigunguList.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        )}

        <Button
          className="w-full bg-bumoro-orange hover:bg-bumoro-orange/90 text-white font-medium rounded-xl h-11"
          disabled={!isReady}
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
