import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../ui/ErrorPage";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
