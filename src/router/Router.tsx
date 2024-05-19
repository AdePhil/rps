import { Home, Layout } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ element: <Home />, index: true }],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
