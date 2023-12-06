import { createBrowserRouter, Navigate } from "react-router-dom";
import ProfilePage from "../components/organizm/ProfilePage/ProfilePage";
import { AuthenticatedRoutePath } from "../constant/routes";
import Task from "../components/template/Register/UserTask/Task";
import Layout from "../components/organizm/Layout/Layout";

const AuthenticatedApp = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <ProfilePage />,
        path: AuthenticatedRoutePath.Profile(),
        errorElement: <div>Error happend</div>,
        loader: () => <div>Loading</div>,
      },
      {
        element: <Task />,
        path: AuthenticatedRoutePath.Tasks(),
        errorElement: <div>Error happend</div>,
        loader: () => <div>Loading</div>,
      },
      {
        path: AuthenticatedRoutePath.Navigate(),
        element: <Navigate to={AuthenticatedRoutePath.Profile()} />,
      },
    ],
  },
]);

export { AuthenticatedApp };
