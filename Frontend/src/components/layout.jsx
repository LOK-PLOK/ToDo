import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
import Dashboard from "@/dasboard";
import Navbar from "@/dasboard/Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

          <Navbar></Navbar>
          <Dashboard></Dashboard>

      </ThemeProvider>
    </>
  );
}
