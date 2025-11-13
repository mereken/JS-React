
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        {/*  child routes */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;