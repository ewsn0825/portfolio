import React from "react";

import profile from "@/assets/profile.jpg";
import user from "@/assets/icon/user.png";
import birth from "@/assets/icon/birthday.png";
import home from "@/assets/icon/home.png";
import graduation from "@/assets/icon/graduation.png";
import mail from "@/assets/icon/mail.png";

function About() {
  return (
    <div className="pt-[85px]">
      <div className="border-t-2 border-t-black">
        <h2 className="desktop:text-6xl tablet:text-4.5xl font-semibold desktop:my-8">
          About
        </h2>
        <div className="flex items-center gap-24">
          <img
            src={profile}
            alt="프로필 이미지"
            className="rounded-full desktop:w-[230px] desktop:block mobile:hidden"
          />
          <div>
            <ul className="flex flex-col desktop:gap-12 desktop:text-2xl">
              <li className="flex items-center desktop:gap-5">
                <img
                  src={user}
                  alt="본인"
                  className="desktop:w-9"
                />
                <span>이재호</span>
              </li>
              <li className="flex items-center desktop:gap-5">
                <img
                  src={birth}
                  alt="생일"
                  className="desktop:w-9"
                />
                <span>1999. 08. 25</span>
              </li>
              <li className="flex items-center desktop:gap-5 ">
                <img
                  src={home}
                  alt="집"
                  className="desktop:w-9"
                />
                <span>경기도 수원시 권선구</span>
              </li>
              <li className="flex items-center desktop:gap-5">
                <img
                  src={graduation}
                  alt="대학교"
                  className="desktop:w-9"
                />
                <span>한신대학교 컴퓨터공학부</span>
              </li>
              <li className="flex items-center desktop:gap-5">
                <img
                  src={mail}
                  alt="이메일"
                  className="desktop:w-9"
                />
                <span>ewsn0825@naver.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
