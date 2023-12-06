import { createBrowserRouter, Navigate } from "react-router-dom";
import { UnauthenticatedRoutePath } from "../constant/routes";
import WelcomePage from "../components/pages/Welcome/Welcome";
import Register from "../components/template/Register/Register";
import Login from "../components/template/Register/Login";
import PrivacyPolicy from "../components/pages/PrivacyPolicy/PrivacyPolicy";
import Layout from "../components/organizm/Layout/Layout";

const UnAuthenticatedApp = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <WelcomePage />,
        path: UnauthenticatedRoutePath.Home(),
        errorElement: <div>Error happend</div>,
        loader: () => <div>Loading</div>,
      },
      {
        element: <Login siteName="sdfnsdfkljdfn" />,
        path: UnauthenticatedRoutePath.Login(),
        errorElement: <div>Error happend</div>,
        loader: () => <div>Loading</div>,
      },
      {
        element: <Register />,
        path: UnauthenticatedRoutePath.Register(),
        errorElement: <div>Error happend</div>,
        loader: () => <div>Loading</div>,
      },
      {
        element: <PrivacyPolicy />,
        path: UnauthenticatedRoutePath.PP(),
        errorElement: <div>Error happend</div>,
        loader: () => <div>Loading</div>,
      },
      {
        path: UnauthenticatedRoutePath.Navigate(),
        element: <Navigate to={UnauthenticatedRoutePath.Home()} />,
        errorElement: <div>Error happened</div>,
        loader: () => <div>Loading</div>,
      },
    ],
  },
]);

export { UnAuthenticatedApp };
