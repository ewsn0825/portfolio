import github from "@/assets/icon/github.png";
import instagram from "@/assets/icon/instagram.png";
import facebook from "@/assets/icon/facebook.png"

function Contact() {
  return (
    <div className="bg-[#121212] desktop:py-20 tablet:py-16 flex flex-col items-center gap-24">
      <ul className="flex items-center justify-center gap-10">
        <li className="bg-white p-1 rounded-xl">
          <a href="https://github.com/ewsn0825">
            <img src={github} alt="깃허브 바로가기" className="w-10 h-10 hover:opacity-50"/>
          </a>
        </li>
        <li className="bg-white p-1 rounded-xl">
          <a href="https://www.instagram.com/jaeho_jms">
            <img src={instagram} alt="인스타그램 바로가기" className="w-10 h-10 hover:opacity-50" />
          </a>
        </li>
        <li className="bg-white p-1 rounded-xl">
          <a href="https://www.facebook.com/profile.php?id=100007651480099">
            <img src={facebook} alt="페이스북 바로가기" className="w-10 h-10 hover:opacity-50" />
          </a>
        </li>
      </ul>
      <span className="text-white">&copy; 2024. Lee Jae Ho. All rights reserved.</span>
    </div>
  );
}

export default Contact;
