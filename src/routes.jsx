import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";

import ProjectGeppetto from "@/pages/project/ProjectGeppetto.jsx";

import Portfolio from "@/pages/project/Portfolio.jsx";
import Landing from "@/pages/Landing.jsx";

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
        path: "/projectDetail/geppetto",
        element: <ProjectGeppetto />,
      },

      {
        path: "/projectDetail/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

export default router;
