import React from "react";

import profile from "@/assets/profile.jpg";
import user from "@/assets/icon/user.png";
import birth from "@/assets/icon/birthday.png";
import home from "@/assets/icon/home.png";
import graduation from "@/assets/icon/graduation.png";
import mail from "@/assets/icon/mail.png";

function About() {
  return (
    <div className="border-t-2 border-t-black mb-40">
      <h2 className="desktop_lg:text-6xl desktop_sm:text-4.5xl font-semibold mt-5 mb-8">
        About
      </h2>

      <div className="flex items-center gap-24">
        <img
          src={profile}
          alt="프로필 이미지"
          className="rounded-full desktop_lg:w-[25vh] desktop_lg:h-[30vh] desktop_md:w-[30vh] desktop_md:h-[35vh] desktop_sm:w-[15vh] desktop_sm:h-[20vh] "
        />

        <div>
          <ul className="flex flex-col desktop_lg:gap-12  desktop_sm:gap-8">
            <li className="flex items-center desktop_lg:gap-5 desktop_sm:gap-3">
              <img
                src={user}
                alt="본인"
                className="desktop_lg:w-12 desktop_md:w-7 desktop_sm:w-9"
              />
              <span className="desktop_lg:text-2xl desktop_md:text-xl desktop_sm:text-xl">
                이재호
              </span>
            </li>
            <li className="flex items-center desktop_lg:gap-5 desktop_sm:gap-3">
              <img
                src={birth}
                alt="생일"
                className="desktop_lg:w-12  desktop_md:w-7 desktop_sm:w-9"
              />
              <span className="desktop_lg:text-2xl desktop_md:text-xl desktop_sm:text-xl">
                1999. 08. 25
              </span>
            </li>
            <li className="flex items-center desktop_lg:gap-5 desktop_sm:gap-3">
              <img
                src={home}
                alt="집"
                className="desktop_lg:w-12 desktop_md:w-7 desktop_sm:w-9"
              />
              <span className="desktop_lg:text-2xl desktop_md:text-xl desktop_sm:text-xl">
                경기도 수원시 권선구
              </span>
            </li>
            <li className="flex items-center desktop_lg:gap-5 desktop_sm:gap-3">
              <img
                src={graduation}
                alt="대학교"
                className="desktop_lg:w-12 desktop_md:w-7 desktop_sm:w-9"
              />
              <span className="desktop_lg:text-2xl desktop_md:text-xl desktop_sm:text-xl">
                한신대학교 컴퓨터공학부
              </span>
            </li>
            <li className="flex items-center desktop_lg:gap-5 desktop_sm:gap-3">
              <img
                src={mail}
                alt="이메일"
                className="desktop_lg:w-12 desktop_md:w-7 desktop_sm:w-9"
              />
              <span className="desktop_lg:text-2xl desktop_md:text-xl desktop_sm:text-xl">
                ewsn0825@naver.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
