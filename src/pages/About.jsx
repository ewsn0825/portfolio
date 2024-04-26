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
      <h2 className="text-4.5xl font-semibold mt-5 mb-8">About</h2>

      <div className="flex items-center gap-24">
        <img
          src={profile}
          alt="프로필 이미지"
          className="rounded-full desktop:w-[30vh] desktop:h-[35vh]"
        />

        <div>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-3">
              <img src={user} alt="" className="w-6" />
              <span>이재호</span>
            </li>
            <li className="flex gap-3">
              <img src={birth} alt="" className="w-6" />
              <span>1999. 08. 25</span>
            </li>
            <li className="flex gap-3">
              <img src={home} alt="" className="w-6" />
              <span>경기도 수원시 권선구</span>
            </li>
            <li className="flex gap-3">
              <img src={graduation} alt="" className="w-6" />
              <span>한신대학교 컴퓨터공학부</span>
            </li>
            <li className="flex gap-3">
              <img src={mail} alt="" className="w-6" />
              <span>ewsn0825@naver.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
