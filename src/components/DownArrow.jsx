
import arrow from "@/assets/icon/arrow.svg";

function DownArrow() {
  return (
    <div className="flex flex-col items-center">
      <div className="bounce delay-1">
        <img src={arrow} alt="아래 화살표" className="desktop:w-10 tablet:w-8 mobile:w-5" />
      </div>
      <div className="bounce delay-2">
        <img src={arrow} alt="아래 화살표" className="desktop:w-10 tablet:w-8 mobile:w-5" />
      </div>
      {/* <div className="bounce delay-3">
        <img src={arrow} alt="아래 화살표" className="w-10" />
      </div> */}
    </div>
  );
}

export default DownArrow;
