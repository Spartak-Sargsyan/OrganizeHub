import { createBrowserRouter, Navigate } from "react-router-dom";
import ProfilePage from "../components/organizm/ProfilePage/ProfilePage";
import { AuthenticatedRoutePath } from "../constant/routes";
// import Task from "../components/template/UserTask/Task";
import TaskPage from "../components/pages/TaskPage/TaskPage";


const AuthenticatedApp = createBrowserRouter([
  {
    element: <ProfilePage />,
    path: AuthenticatedRoutePath.Profile(),
    errorElement: <div>Error happend</div>,
    loader: () => <div>Loading</div>,
  },
  {
    element: <TaskPage />,
    path: `${AuthenticatedRoutePath.Task()}/:id`,
    errorElement: <div>Error happend</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: AuthenticatedRoutePath.Navigate(),
    element: <Navigate to={AuthenticatedRoutePath.Profile()} />,
  },
]);

export { AuthenticatedApp };
