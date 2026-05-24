import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";

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
    ],
  },
]);

export default router;
