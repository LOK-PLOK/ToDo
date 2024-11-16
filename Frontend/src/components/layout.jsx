import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
import Cardcontainter from "@/pages/dasboard";
import Navbar from "@/pages/dasboard/Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

          <Navbar></Navbar>
          <Cardcontainter></Cardcontainter>

      </ThemeProvider>
    </>
  );
}
