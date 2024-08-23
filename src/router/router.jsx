import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import TravelDetails from "../pages/TravelDetails";
import TravelForm from "../pages/TravelForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "travel/details/{id}",
        element: <TravelDetails />,
      },
      {
        path: "travel/edit/{id}",
        element: <TravelForm />,
      },
      {
        path: "travel/create",
        element: <TravelForm />,
      },
    ],
  },
]);

export default router;
