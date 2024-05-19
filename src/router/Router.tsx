import { Home, Layout } from "@/pages";
import Game from "@/pages/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Home />, index: true },
      { element: <Game />, path: "/game" },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
