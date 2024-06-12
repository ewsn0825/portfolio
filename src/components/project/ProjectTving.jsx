import tving from "@/assets/tving.png";

function ProjectTving() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[700px] rounded-2xl shadow-2xl py-10 px-10">
      <div className="flex flex-col items-center">
        <h3 className="text-center text-4xl font-black">티빙 클론코딩</h3>
        <img src={tving} alt="티빙 이미지" className="w-[600px]" />
      </div>

      <ul className="flex flex-col items-start">
        <li>주요기능 : </li>
        <li>GitHub : </li>
        <li>URL : <a href="wwwwwwwwwwwwwww"></a></li>
        <li>FrontEnd : </li>
      </ul>
    </div>
  );
}

export default ProjectTving;
