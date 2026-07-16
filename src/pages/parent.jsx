import { Outlet } from 'react-router-dom';
import { useEffect } from "react";

export default function Parent() {
    useEffect(() => {
      const theme = localStorage.getItem("theme");
  
      if (theme === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
    }, []);
  return (
    <>
      <Outlet />
    </>)
}