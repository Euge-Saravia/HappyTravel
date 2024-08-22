import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import TravelDetails from "../pages/TravelDetails";
import TravelCard from "../pages/TravelCard";

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
        element: <TravelCard />,
      },
      {
        path: "travel/create",
        element: <TravelCard />,
      },
    ],
  },
]);

export default router;
