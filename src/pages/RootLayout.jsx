import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default RootLayout;
