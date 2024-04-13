import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="mt-5">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
