import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <nav>
        <p>Navbar</p>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
