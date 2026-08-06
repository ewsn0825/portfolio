import assetDashboard from "@/assets/project/asset-dashboard.webp";
import geppetto from "@/assets/project/geppetto.webp";
import kanbanBoard from "@/assets/project/kanban-board.webp";
import portfolio from "@/assets/project/portfolio.webp";

export const PROJECTS = [
  {
    id: "taskflow",
    title: "TaskFlow",
    type: "개인 프로젝트",
    period: "2026.07 - 2026.08",
    image: kanbanBoard,
    featured: true,
    highlight: "빠른 드래그에도 마지막 이동 의도를 보존하는 칸반 보드",
    description:
      "웹과 모바일에서 동일한 흐름으로 사용할 수 있는 개인 업무 관리 칸반 보드입니다. 빠른 드래그 앤 드롭, 낙관적 업데이트, 안전한 롤백을 결합해 서버 응답을 기다리지 않는 조작 경험을 설계했습니다.",
    techStack: [
      "Expo",
      "React Native Web",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "NestJS",
      "Prisma",
      "Supabase",
    ],
    links: [
      {
        label: "서비스 보기",
        href: "https://taskflow-kanban-rouge.vercel.app/",
        variant: "primary",
      },
      {
        label: "API 문서",
        href: "https://kanban-board-app-pse5.onrender.com/api",
      },
      {
        label: "GitHub 보기",
        href: "https://github.com/ewsn0825/kanban-board-app",
      },
    ],
    features: [
      {
        title: "보드·컬럼·카드 관리",
        details: [
          "생성, 수정, 삭제와 카드 상세 정보 관리",
          "마지막으로 열었던 보드를 다음 로그인에도 복원",
        ],
      },
      {
        title: "웹·모바일 드래그 앤 드롭",
        details: [
          "컬럼 간 카드 이동과 즉각적인 UI 반영",
          "웹 드래그 미리보기는 포털로 렌더링해 레이어 충돌 해소",
        ],
      },
      {
        title: "인증과 데이터 격리",
        details: [
          "Supabase Auth와 NestJS의 ES256 JWT 검증 연동",
          "모든 보드 데이터를 사용자 소유자 기준으로 분리",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "빠른 카드 이동에서도 순서 보장",
        problem:
          "여러 카드 이동 요청이 동시에 순서를 갱신하면서 (columnId, position) 유니크 제약과 충돌해 서버 오류가 발생했습니다.",
        solution:
          "PostgreSQL advisory lock과 트랜잭션을 적용하고, 임시 위치를 거쳐 최종 순서를 재구성해 동시성 충돌을 제거했습니다.",
        learned:
          "드래그 앤 드롭은 화면의 위치 변경뿐 아니라, 경쟁 상태를 견디는 서버 측 순서 재정렬 전략까지 함께 설계해야 합니다.",
      },
      {
        title: "낙관적 이동의 최신 상태 유지",
        problem:
          "빠르게 여러 번 드래그하면 이전 요청이 나중에 도착해 사용자의 마지막 이동 결과를 덮어쓸 수 있었습니다.",
        solution:
          "카드별 대기 이동을 최신 요청으로 병합하고 API 쓰기를 순차 처리했습니다. UI는 즉시 캐시를 갱신하고, 처리 완료 후 서버 상태만 다시 동기화합니다.",
        learned:
          "낙관적 업데이트에서는 단순 롤백보다 사용자의 마지막 의도를 보존하는 요청 제어가 더 중요할 수 있습니다.",
      },
      {
        title: "보드 화면 렌더링 비용 절감",
        problem:
          "드래그 중 매 렌더마다 컬럼별 카드를 필터링·정렬하면 카드 수가 늘어날수록 화면 갱신 비용이 커졌습니다.",
        solution:
          "useMemo로 columnId별 task 맵을 만들어 재사용하고, 보드 목록과 선택한 보드의 상세 데이터를 분리해 필요한 데이터만 요청했습니다.",
        learned:
          "상호작용이 잦은 화면에서는 데이터 조회 범위와 파생 데이터 계산 위치가 체감 성능을 좌우합니다.",
      },
    ],
  },
  {
    id: "asset-dashboard",
    title: "Asset Dashboard",
    type: "개인 프로젝트",
    period: "2026.04 - 2026.05",
    image: assetDashboard,
    highlight: "실시간 금융 데이터에서 빠른 반응성과 정합성을 함께 설계",
    description:
      "실시간 자산 현황과 투자 포트폴리오를 시각화하는 대시보드입니다. 실제 주식 매수/매도 기능을 구현하며 외부 API 연동의 한계를 극복하고, 낙관적 업데이트 및 전역 상태 구조 리팩토링을 통해 대용량 데이터 환경에서의 렌더링 성능과 UX를 극대화했습니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Gemini API",
    ],
    links: [
      {
        label: "서비스 보기",
        href: "https://asset-dashboard-lovat.vercel.app",
        variant: "primary",
      },
      {
        label: "GitHub 보기",
        href: "https://github.com/ewsn0825/asset-dashboard",
      },
    ],
    features: [
      {
        title: "실시간 자산 시각화",
        details: [
          "종목별/계좌별 자산 구성비 차트 제공",
          "실시간 환율 및 시세 데이터 연동",
        ],
      },
      {
        title: "주식 매수/매도 및 신규 주문",
        details: [
          "한국투자증권 API 연동을 통한 실거래 로직 구현",
          "낙관적 업데이트(Optimistic Update)로 즉각적인 자산/예수금 반영",
        ],
      },
      {
        title: "사용자 인증/인가",
        details: [
          "Axios Interceptor를 통한 토큰 자동 갱신",
          "Redis 기반 세션 관리 최적화",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "API 호가 단위 에러 및 Rate Limit 해결",
        problem:
          "시장가 주문 시 거래소 규정에 맞지 않는 호가 단위 에러가 발생하고, 잦은 클릭 요청으로 API Rate Limit이 초과되는 문제 발생.",
        solution:
          "주문 방식을 정확한 호가 단위가 적용된 '지정가 주문'으로 전환하고, 중복 요청 방지를 위한 잠금(Lock) 장치를 도입하여 API 호출 안정성을 확보했습니다.",
        learned:
          "외부 금융 API 연동 시 거래소의 세부적인 정책을 꼼꼼히 파악해야 하며, API 호출 빈도를 제어하는 방어적 프로그래밍의 중요성을 배웠습니다.",
      },
      {
        title: "낙관적 업데이트를 통한 매수/매도 UX 개선",
        problem:
          "주문 후 서버 응답을 기다리는 동안 자산 및 예수금 변동이 즉시 UI에 반영되지 않아 답답함을 유발하고, 금액 계산 시 소수점 오차가 발생.",
        solution:
          "TanStack Query의 낙관적 업데이트(Optimistic Update)를 도입해 주문 즉시 변경된 자산을 반영하고, 금액 데이터는 소수점 버림 처리로 정합성을 맞췄습니다.",
        learned:
          "서버 통신 지연 시간을 체감하지 못하도록 UI 상태를 선제적으로 제어하는 기법과, 금융 데이터의 엄격한 수치 처리 방법을 경험했습니다.",
      },
      {
        title: "상태 관리 구조 리팩토링 및 불필요한 전역 리렌더링 방지",
        problem:
          "실시간 시세 변동 및 계좌 탭 전환 시, Zustand 전역 스토어의 무분별한 참조로 인해 연관 없는 하위 컴포넌트까지 동반 리렌더링되며 화면이 튀고 버벅이는 성능 병목 발생.",
        solution:
          "Zustand 스토어 참조 방식을 개별 셀렉터 분리 및 shallow(얕은 비교) 모듈 적용으로 전환하여 상태 변경 시 필요한 컴포넌트만 정밀 트리거되도록 개선했습니다. 대용량 복잡 필터링 로직은 useMemo로 캡슐화하고 무거운 뷰는 next/dynamic으로 지연 로딩 처리했습니다.",
        learned:
          "복잡한 실시간 금융 데이터를 다룰 때 전역 상태의 구독 범위를 세밀하게 제어하는 Selector 아키텍처와 렌더링 파이프라인 최적화의 필수성을 깊이 깨달았습니다.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Largon Portfolio",
    type: "개인 프로젝트",
    period: "2024.05 - 2024.06 · 2026.05",
    image: portfolio,
    highlight: "콘텐츠 전달력과 렌더링 성능을 함께 개선한 개인 포트폴리오",
    description:
      "저의 인적사항 및 기술 스택, 프로젝트들을 정리하기 위해 만든 반응형 포트폴리오 웹 사이트입니다. 부드러운 스크롤 인터랙션과 다크 테마 디자인을 적용했습니다.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "React Scroll"],
    links: [
      {
        label: "서비스 보기",
        href: "https://largonportfolio.vercel.app",
        variant: "primary",
      },
      {
        label: "GitHub 보기",
        href: "https://github.com/ewsn0825/portfolio",
      },
    ],
    features: [
      {
        title: "About",
        details: ["인적사항 및 핵심 가치를 담은 섹션"],
      },
      {
        title: "Experience",
        details: ["학습 및 프로젝트 타임라인 시각화"],
      },
      {
        title: "Projects",
        details: ["상세 정보와 트러블 슈팅을 담은 프로젝트 리스트"],
      },
    ],
    troubleshooting: [
      {
        title: "스크롤 내비게이션 인디케이터 최적화",
        problem:
          "클릭 시 스크롤 이동 중 거쳐가는 모든 섹션이 활성화되어 인디케이터가 의도치 않게 움직이는 현상 발생.",
        solution:
          "useRef로 클릭 이동 상태를 구분하여, 이동 중에는 불필요한 자동 업데이트(spy)를 무시하도록 로직을 분리하였습니다.",
        learned:
          "기본 라이브러리의 동작을 세밀하게 제어하여, 사용자가 느끼는 미세한 시각적 불편함까지 개선하는 UX 최적화의 중요성을 배웠습니다.",
      },
      {
        title: "섹션별 레이아웃 일관성 확보",
        problem:
          "섹션마다 컨테이너 규격이 달라 페이지 이동 시 타이틀과 로고의 정렬선이 어긋나는 시각적 불안정함 발견.",
        solution:
          "모든 섹션에 공통 1200px 그리드 레이아웃을 적용하고, NavBar와 콘텐츠의 시작점을 수직으로 일치시켜 정렬을 최적화했습니다.",
        learned:
          "사용자에게 안정감을 주는 인터페이스는 일관된 규격과 그리드 시스템에서 시작됨을 체감하였습니다.",
      },
      {
        title: "웹 자원 최적화를 통한 성능(Lighthouse) 개선 (73점 → 87점)",
        problem:
          "대용량 웹 폰트(2MB 이상)와 고화질 썸네일(PNG), 무거운 모바일 CSS 렌더링으로 인해 초기 TBT(총 차단 시간)와 LCP 지연이 발생하며 모바일 성능 점수가 73점으로 저조함.",
        solution:
          "1. React.lazy & Suspense로 컴포넌트를 스플리팅하여 초기 번들 사이즈 감소\n2. 고화질 PNG 이미지를 무손실 WebP 포맷으로 변환(70% 용량 감소) 및 loading='lazy' 적용\n3. 폰트를 woff2 다이나믹 서브셋으로 교체 및 비동기 로드\n4. 모바일 GPU 부하를 일으키는 Blur 필터를 반응형으로 숨김 처리",
        learned:
          "프론트엔드 환경에서 네트워크 리소스(폰트/이미지) 관리와 렌더링 파이프라인 제어가 실제 사용자 경험(Web Vitals) 지표에 미치는 결정적인 영향을 체감했습니다.",
      },
    ],
  },
  {
    id: "geppetto",
    title: "제페토",
    type: "멋쟁이 사자처럼 4인 프로젝트",
    period: "2023.09.02 - 2023.09.24",
    image: geppetto,
    highlight: "첫 팀 프로젝트에서 경험한 재사용 가능한 컴포넌트 설계와 협업",
    description:
      "반려동물 커뮤니티 플랫폼으로, React의 아토믹 컴포넌트 패턴을 적용해 재사용성을 높이고 Zustand로 전역 상태를 구조화하여 확장 가능한 아키텍처를 설계했습니다. 포켓베이스(Pocketbase)를 활용해 백엔드 API부터 배포까지 전 과정을 팀원들과 협업하여 완성한 첫 번째 프로젝트입니다.",
    techStack: ["React", "Zustand", "Tailwind CSS", "Pocketbase", "Netlify"],
    links: [
      {
        label: "서비스 보기",
        href: "https://geppetto88.netlify.app",
        variant: "primary",
      },
      {
        label: "GitHub 보기",
        href: "https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite",
      },
    ],
    features: [
      {
        title: "회원가입/로그인",
        details: ["유효성 검사", "Google/Kakao OAuth 2.0 구현"],
      },
      {
        title: "커뮤니티",
        details: ["최신순/인기순 게시글 정렬 및 필터링"],
      },
    ],
    troubleshooting: [
      {
        title: "무한 리렌더링 방지",
        problem:
          "입력값 변경 시마다 상태가 업데이트되어 발생하는 불필요한 리렌더링.",
        solution:
          "디바운싱(Debouncing) 적용으로 입력 완료 시점에만 상태 업데이트.",
        learned:
          "성능 최적화를 위한 이벤트 제어 기법(디바운싱 vs 쓰로틀링) 차이점 숙지.",
      },
    ],
  },
];
