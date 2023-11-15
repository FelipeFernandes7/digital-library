import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { useMediaQuery } from "@chakra-ui/react";

export function Layout() {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isMobile ? (
        <>
          <Outlet />
          <Header />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
}
