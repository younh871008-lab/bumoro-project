# 프로젝트: 부모로 (Bumoro)

임신·출산·육아의 모든 순간을 "먼저 지나간 부모"가 따뜻하게 안내하는 웹 서비스.
정부지원금 자동 매칭(utility) + founder voice 콘텐츠(감성) 하이브리드 구조.

## 기술 스택
- Next.js 15 (App Router)
- TypeScript strict mode
- Tailwind CSS + shadcn/ui
- Supabase (DB + Auth + Storage)
- Resend (이메일/뉴스레터)
- Vercel (호스팅)

## 브랜드 컬러
- 메인 오렌지: #FF6B4A
- 베이지 배경: #FAF3E7
- 포근한 핑크: #FFE9E0
- 텍스트: #2A1810
- 폰트: 프리텐다드 (메인)

## 아키텍처 규칙
- CRITICAL: 모든 DB 접근 및 외부 API 호출은 app/api/ 라우트 핸들러에서만 처리
- CRITICAL: 클라이언트 컴포넌트에서 Supabase 직접 호출 금지 (서버 컴포넌트 또는 API route 경유)
- CRITICAL: 의료적 진단·치료 권고 표현 금지. 항상 "의료진 상담 권고" 톤 유지
- CRITICAL: 쿠팡 파트너스 등 제휴 링크에 반드시 수수료 고지 문구 포함
- 컴포넌트는 components/ 폴더에, 타입은 types/ 폴더에, DB 쿼리는 lib/db/ 에 분리
- Server Components 기본, 인터랙션 필요한 곳만 'use client'
- 모든 이미지는 next/image 사용

## 개발 프로세스
- CRITICAL: 새 기능 구현 시 반드시 테스트를 먼저 작성하고, 테스트가 통과하는 구현을 작성할 것 (TDD)
- 커밋 메시지는 conventional commits 형식을 따를 것 (feat:, fix:, docs:, refactor:)
- 모바일 우선 (mobile-first) 디자인. 사용자의 90%가 모바일

## Phase 개발 순서
- Phase 1 (M1~3): 정부지원금 매칭 + 회원가입 + 메인 화면 + 부모로의 편지 + 뉴스레터
- Phase 2 (M4~5): 예방접종 캘린더 + 마음카드 + 일기장 + 동네 지도(서울 시범)
- Phase 3 (M6+): 쿠팡 파트너스 + 진짜 후기 + 수익화

## 명령어
```
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint
npm run test     # 테스트 (vitest)
```

## 핵심 DB 테이블 (Supabase)
- users: id, email, region_code, created_at
- children: id, user_id, due_date, birth_date, gender
- benefits: id, region_code, eligibility_json, deadline, link, source_updated_at
- vaccinations: child_id, vaccine_code, scheduled_date, completed_date, hospital
- articles: id, slug, age_month, category, content_md, voice_type, published_at
- letters: id, slug, voice_persona, content_md, hero_image, sent_at
- night_cards: id, message, design_template_id, active_date
- journal_entries: id, child_id, prompt, content, photo_url, created_at
- places: id, kakao_place_id, category, region_code, parent_review_count, avg_rating
- place_reviews: id, place_id, user_id, content, parking, kid_friendly_score
- product_reviews: id, product_name, category, used_months, photos, regret_points, partners_link
