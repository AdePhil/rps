import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-primary min-h-screen text-white py-10 px-3">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl text-center">Rock ˣ Paper ˣ Scissors</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
