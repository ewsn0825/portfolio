import profile from "@/assets/profile.jpg";
import user from "@/assets/icon/user.png";
import birth from "@/assets/icon/birthday.png";
import home from "@/assets/icon/home.png";
import graduation from "@/assets/icon/graduation.png";
import mail from "@/assets/icon/mail.png";

function About() {
  return (
    <div className="desktop:pt-20 mobile:pt-9">
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto border-t-2 border-t-black">
        <div className="desktop:px-8 tablet:px-5 mobile:px-3">
          <h2 className="desktop:text-5xl tablet:text-3xl mobile:text-xl font-semibold desktop:my-8 tablet:my-6 mobile:my-4">
            About
          </h2>
          <div className="flex items-center gap-24">
            <img
              src={profile}
              alt="프로필 이미지"
              className="rounded-full desktop:w-[230px] desktop:block mobile:hidden"
            />
            <div className="mobile:shadow-xl desktop:shadow-none mobile:p-4 mobile:rounded-2xl mobile:w-full">
              <ul className="flex flex-col desktop:gap-12 tablet:gap-8 mobile:gap-3 desktop:text-2xl tablet:text-xl mobile:text-sm">
                <li className="flex items-center gap-5">
                  <img
                    src={user}
                    alt="본인"
                    className="desktop:w-9 tablet:w-7 mobile:w-6"
                  />
                  <span>이재호</span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    src={birth}
                    alt="생일"
                    className="desktop:w-9 tablet:w-7 mobile:w-6"
                  />
                  <span>1999. 08. 25</span>
                </li>
                <li className="flex items-center gap-5 ">
                  <img
                    src={home}
                    alt="집"
                    className="desktop:w-9 tablet:w-7 mobile:w-6"
                  />
                  <span>경기도 수원시 권선구</span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    src={graduation}
                    alt="대학교"
                    className="desktop:w-9 tablet:w-7 mobile:w-6"
                  />
                  <span>한신대학교 컴퓨터공학부</span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    src={mail}
                    alt="이메일"
                    className="desktop:w-9 tablet:w-7 mobile:w-6"
                  />
                  <span>ewsn0825@naver.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
