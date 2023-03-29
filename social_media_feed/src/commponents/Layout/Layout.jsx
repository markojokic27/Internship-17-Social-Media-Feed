import { Outlet } from "react-router-dom";
import Header from "../Header";

import Classes from "./index.module.css";
const Layout = () => {
  return (
    <>
      <Header />
      <main className={Classes.main}>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
