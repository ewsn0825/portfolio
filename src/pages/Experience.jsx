function Experience() {
  return (
    <div className="bg-slate-500 pt-[84px] pb-[84px]">
      <div className="flex desktop:gap-14 mobile:gap-5 items-center desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto">
        <h2 className="border-t-2 border-t-black desktop:text-5xl tablet:text-3xl mobile:text-base font-semibold desktop:mb-8 desktop:pt-5 tablet:mb-9 mobile:mb-8 mobile:pt-1">
          Experience
        </h2>
        <ul>
          <li className="flex flex-col gap-2">
            <span className="desktop:text-3xl tablet:text-2xl mobile:text-xs">
              멋쟁이 사자처럼 프론트엔드 스쿨 수료
            </span>
            <span className="desktop:text-base tablet:text-sm mobile:text-xs">2023. 05 ~ 2023. 09</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
