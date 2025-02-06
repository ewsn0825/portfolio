import tailwind from "@/assets/skill/tw_d.svg";

import react from "@/assets/skill/react_n.svg";

import zustand from "@/assets/skill/zustand_d.svg";
import ts from "@/assets/skill/ts_d.svg";

import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="desktop:px-8 tablet:px-5 mobile:px-3 desktop:py-24 tablet:py-16 mobile:py-9 text-white">
      <div className="desktop:max-w-[1240px] mobile:min-w-[320px] mx-auto flex flex-col ">
        <h2 className="desktop:text-5xl tablet:text-3xl mobile:text-xl font-semibold font-gm text-white mb-10">
          Skills
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-col gap-10 rounded-2xl">
            <div className="grid grid-auto-rows-[1fr] desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-5 desktop:text-lg mobile:text-base font-medium">
              <div className="flex flex-col gap-3 bg-[#000000] p-7 rounded-xl flex-grow">
                <div className="bg-[#121212] w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    className="desktop:w-9 tablet:w-9 mobile:w-9"
                    src={react}
                    alt="react 이미지"
                  />
                </div>
                <h3 className="text-2xl font-pre">React</h3>

                <div className="flex flex-col gap-2 font-light">
                  <span>컴포넌트를 분할하여 재사용성을 높힙니다.</span>
                  <span>다양한 라이브러리를 활용할 수 있습니다.</span>
                  <span>Vite를 사용하여 빌드 할 수 있습니다.</span>
                  <span>코드 스플리팅을 하여 성능최적화를 할 수 있습니다.</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-[#000000] p-7 rounded-xl flex-grow">
                <div className="bg-[#121212] w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    className="desktop:w-9 tablet:w-9 mobile:w-9"
                    src={ts}
                    alt="typeScript 이미지"
                  />
                </div>

                <h3 className="text-2xl font-pre">TypeScript / JavaScript</h3>

                <div className="flex flex-col gap-2 font-light">
                  <span>타입을 정하여 에러를 사전에 방지 할 수 있습니다.</span>
                  <span>
                    Axios를 사용하여 데이터 동기, 비동기 처리를 할 수 있습니다.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-[#000000] p-7 rounded-xl flex-grow">
                <div className="bg-[#121212] w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    className="desktop:w-9 tablet:w-9 mobile:w-9"
                    src={tailwind}
                    alt="tailwind 이미지"
                  />
                </div>

                <h3 className="text-2xl font-pre">
                  Tailwind / Styled-component
                </h3>

                <div className="flex flex-col gap-2 font-light">
                  <span>다양한 형태의 레이아웃을 구성할 수 있습니다.</span>
                  <span>동적 스타일링이 가능합니다.</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-[#000000] p-7 rounded-xl flex-grow">
                <div className="bg-[#121212] w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    className="desktop:w-9 tablet:w-9 mobile:w-9"
                    src={zustand}
                    alt="zustand 이미지"
                  />
                </div>
                <h3 className="text-2xl font-pre">Zustand</h3>

                <div className="flex flex-col gap-2 font-light">
                  <span>전역 상태에 대해 이해하고 있습니다.</span>
                  <span>
                    Persist 옵션을 사용해 Storage에서 상태 값을 다룰 수
                    있습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
