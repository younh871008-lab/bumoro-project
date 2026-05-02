# 아키텍처: 부모로 (Bumoro)

## 디렉토리 구조
```
bumoro/
├── app/
│   ├── (marketing)/        # 랜딩·SEO 페이지 (공개)
│   │   ├── page.tsx        # 메인 홈
│   │   ├── letters/        # 부모로의 편지
│   │   ├── guides/         # 월령별 가이드
│   │   └── benefits/       # 정부지원금 페이지
│   ├── (auth)/             # 로그인·회원가입
│   ├── (dashboard)/        # 로그인 후 개인화 페이지
│   └── api/                # API 라우트 (모든 외부 통신)
│       ├── benefits/       # 지원금 매칭 엔진
│       ├── auth/           # 인증
│       └── newsletter/     # 뉴스레터 구독 (Resend)
├── components/
│   ├── ui/                 # shadcn/ui 기본 컴포넌트
│   ├── marketing/          # 랜딩 전용 컴포넌트
│   └── dashboard/          # 대시보드 전용 컴포넌트
├── lib/
│   ├── db/                 # Supabase 쿼리 함수
│   ├── benefits/           # 지원금 매칭 로직
│   └── utils.ts
├── types/                  # TypeScript 타입 정의
└── public/
    └── fonts/              # 프리텐다드
```

## 패턴
- Server Components 기본 (SEO, 초기 데이터 패칭)
- `'use client'`는 인터랙션 필요한 최소 단위에만
- 데이터 패칭은 서버 컴포넌트 또는 API route에서만

## 데이터 흐름
```
[사용자 입력 (출산예정일 + 거주지)]
  → Client Component (form)
  → POST /api/benefits/match
  → lib/benefits/matcher.ts (매칭 로직)
  → Supabase (benefits 테이블)
  → 결과 반환 → UI 업데이트
```

## 상태 관리
- 서버 상태: Server Components + React cache()
- 클라이언트 상태: useState / useReducer (간단)
- 전역 상태: 최소화 (필요 시 Zustand 검토)
- 인증 상태: Supabase Auth + Next.js middleware

## 환경변수 (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_KAKAO_MAP_KEY=   # Phase 2에서 추가
```
