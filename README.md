# 🚀 Largon Portfolio

> **"비즈니스 가치를 코드로 번역하고, 끊김 없는 사용자 경험(UX)을 설계하는 프론트엔드 개발자 이재호(Largon)의 포트폴리오 웹사이트입니다."**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://largonportfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2.0-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)]()
[![Vite](https://img.shields.io/badge/Vite-5.2.0-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)]()

<br/>

## 🔗 Links

- **배포 주소:** [https://largonportfolio.vercel.app](https://largonportfolio.vercel.app)
- **GitHub Repository:** [https://github.com/ewsn0825/portfolio](https://github.com/ewsn0825/portfolio)

<br/>

## 🛠️ Tech Stack

| Category           | Stack                                                                                                                                                                                                                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**           | ![React](https://img.shields.io/badge/react-%2320232a.svg?flat&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?flat&logo=vite&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?flat&logo=react-router&logoColor=white) |
| **Styling**        | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?flat&logo=tailwind-css&logoColor=white)                                                                                                                                                                                   |
| **Animation & UI** | ![Framer Motion](https://img.shields.io/badge/framer--motion-0055FF?flat&logo=framer&logoColor=white) `react-scroll`, `lucide-react`                                                                                                                                                            |
| **Tooling**        | ![Rome](https://img.shields.io/badge/Rome-E11E55?flat&logo=rome&logoColor=white) `ESLint`, `vite-plugin-svgr`                                                                                                                                                                                   |

<br/>

## ✨ Key Features

단일 페이지 애플리케이션(SPA)의 장점을 살려 매끄러운 스크롤 인터랙션과 함께 아래의 핵심 섹션들을 제공합니다.

- **Hero Section:** 3D 블러 파티클과 부드러운 텍스트 애니메이션이 적용된 직관적인 첫인상
- **About:** 개발자로서의 핵심 가치관 및 인적사항
- **Experience:** 학습 및 프로젝트 타임라인 시각화
- **Skills:** `lucide-react` 아이콘과 함께 기술 스택 및 숙련도를 카테고리별로 구성
- **Projects:** 개발한 주요 프로젝트의 상세 정보, 핵심 기능, 그리고 **트러블 슈팅 경험** 기록
- **Contact:** 손쉬운 커뮤니케이션을 위한 연락처 및 소셜 링크 제공

<br/>

## 💥 Troubleshooting & Optimization

단순한 UI 구현을 넘어, **웹 렌더링 성능 최적화**와 **사용자 경험(UX) 개선**에 집중하여 Lighthouse 성능 점수를 **90점대(초록불)**로 최적화했습니다.

### 1. 웹 폰트 최적화 및 렌더링 차단 리소스(Render-blocking) 제거

- **문제:** 초기 빌드 시 대용량 한글 웹 폰트(눈누, 약 2MB 이상)로 인해 LCP(최대 콘텐츠 렌더링 시간)가 2.5초 이상 지연됨.
- **해결:** 압축률이 높은 `woff2` 포맷의 다이나믹 서브셋 가변 폰트(Pretendard)로 교체하고, 미디어 쿼리 트릭(`media="print" onload="this.media='all'"`)을 활용하여 비동기 로딩을 구현해 폰트 파싱 지연 현상을 완벽히 해결했습니다.

### 2. React.lazy & Suspense를 활용한 Code Splitting

- **문제:** 모든 섹션 컴포넌트(`About`, `Experience`, `Projects` 등)가 초기에 한 번에 로드되어 TBT(총 차단 시간)가 증가함.
- **해결:** `React.lazy`를 도입해 스크롤 하단에 위치한 하위 섹션들을 비동기적으로 스플리팅하고, `<Suspense>`를 활용해 로딩 중 레이아웃 덜컹거림(CLS)을 방지하는 Skeleton UI(Fallback)를 적용했습니다.

### 3. 모바일 환경 렌더링(GPU) 부하 최적화

- **문제:** 랜딩 페이지 배경에 적용된 `blur-[120px]` 효과가 모바일 테스트 환경에서 과도한 연산을 발생시켜 성능 저하 유발.
- **해결:** 반응형 유틸리티(`hidden md:block`)를 적용해 모바일 뷰포트에서는 무거운 이펙트를 렌더링 트리에 포함하지 않도록 최적화했습니다. 추가로, 프로젝트 썸네일에 `loading="lazy"` 및 `decoding="async"`를 부여해 이미지 디코딩 병목을 해소했습니다.

### 4. 스크롤 내비게이션 인디케이터 제어 흐름 분리

- **문제:** `react-scroll`을 이용한 NavBar 메뉴 클릭 시, 타겟 섹션으로 이동하는 동안 거쳐 가는 모든 중간 섹션들이 순차적으로 활성화(spy)되어 UI가 깜빡이는 불안정성 발생.
- **해결:** 강제 스크롤 중에는 불필요한 자동 업데이트 로직을 무시하도록 상태를 제어하여 사용자에게 안정적인 시각적 피드백을 제공했습니다.

<br/>

## 📂 Project Structure

확장성과 유지보수성을 고려하여 페이지, 컴포넌트, 전역 설정 파일을 명확히 분리하여 설계했습니다.

```text
📦 src
 ┣ 📂 assets        # 썸네일(WebP), 아이콘(SVG, vite-plugin-svgr 활용) 등 정적 리소스
 ┣ 📂 components    # 재사용 가능한 공통 UI (NavBar 등)
 ┣ 📂 pages         # 라우팅 및 스크롤 뷰 단위의 페이지 컴포넌트
 ┃ ┣ 📂 project     # 세부 프로젝트 관련 모듈
 ┃ ┣ 📜 Landing.jsx # 메인 히어로 섹션
 ┃ ┣ 📜 About.jsx, Projects.jsx, Skills.jsx ...
 ┃ ┗ 📜 RootLayout.jsx
 ┣ 📜 App.jsx       # 전역 상태 및 공통 레이아웃 래퍼
 ┣ 📜 main.jsx      # React Entry Point
 ┣ 📜 routes.jsx    # react-router-dom 라우팅 정의
 ┗ 📜 index.css     # Tailwind 지시어, 글로벌 애니메이션, 최적화된 폰트 정의
⚙️ Configurations
 ┣ 📜 tailwind.config.js # 커스텀 테마, 폰트 패밀리(Pretendard 등) 설정
 ┣ 📜 vite.config.js     # 빌드 최적화 및 플러그인 설정
 ┗ 📜 rome.json          # Rome 기반의 빠르고 일관된 린팅/포매팅 규칙
```
