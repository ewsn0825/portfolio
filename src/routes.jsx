import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import ProjectKurlyHtml from "@/pages/project/ProjectKurlyHtml.jsx";
import ProjectKurlyJs from "@/pages/project/ProjectKurlyJs.jsx";
import ProjectGeppetto from "@/pages/project/ProjectGeppetto.jsx";
import ProjectTving from "@/pages/project/ProjectTving.jsx";
import Portfolio from "@/pages/project/Portfolio.jsx";
import Landing from "@/pages/Landing.jsx";
import DevMate from "./pages/project/DevMate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/projectDetail/projectKurlyHtml",
        element: <ProjectKurlyHtml />,
      },
      {
        path: "/projectDetail/projectKurlyJs",
        element: <ProjectKurlyJs />,
      },
      {
        path: "/projectDetail/geppetto",
        element: <ProjectGeppetto />,
      },
      {
        path: "/projectDetail/cloneTving",
        element: <ProjectTving />,
      },
      {
        path: "/projectDetail/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/projectDetail/devMate",
        element: <DevMate />,
      },
    ],
  },
]);

export default router;
