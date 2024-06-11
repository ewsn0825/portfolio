import geppetto from "@/assets/geppetto.png";

function ProjectGeppetto() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[700px] rounded-2xl shadow-2xl py-10 px-10 text-[#121212]">
      <div className="flex flex-col items-center">
        <h3 className="text-center text-4xl font-black">제페토</h3>
        <img src={geppetto} alt="티빙 이미지" className="w-[600px]" />

        
      </div>
      <p>
        개요
      </p>
      <ul className="flex flex-col">
          <li>주요기능 : </li>
          <li>기간 : </li>
          <li>GitHub : </li>
          <li>URL : </li>
          <li>FrontEnd : </li>
        </ul>
    </div>
  );
}

export default ProjectGeppetto;
