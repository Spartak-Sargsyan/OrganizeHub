// import { ChangeEvent, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./components/organizm/Layout/Layout";
// import Login from "./components/template/Register/Login";
// import Register from "./components/template/Register/Register";
// import NotFoundPage from "./components/pages/ErrorPages/NotFoundPage";
// import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
// import WelcomePage from "./components/pages/Welcome/Welcome";
// import Task from "./components/template/Register/UserTask/Task";

import { RouterProvider } from "react-router-dom";
// import Layout from "./components/organizm/Layout/Layout";
import { UnAuthenticatedApp } from "./routes/UnAuthenticatedApp";
import { useChekUser } from "./hooks/useChekUser";
import { AuthenticatedApp } from "./routes/AuthenticatedApp";

// const FileUpload = () => {

//   const [img, setImg] = useState<string | undefined>();

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setImg(imgURL);
//     }
//   };

//   return (
//     <>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <img src={img} alt="" />
//     </>
//   );
// };
// const LoadingPage: React.FC = () => {
//   return <h1>Hello world</h1>;
// };

function App() {
  const { isLoggedIn } = useChekUser();

  return (
    // <FileUpload />
    <>
      {/* <Routes> */}
      {/* <Route path={"/"} element={<Layout />}> */}
      <RouterProvider
        router={isLoggedIn ? AuthenticatedApp : UnAuthenticatedApp}
      />
      {/* </Route> */}
      {/* </Routes> */}
    </>
  );
  {
    /* <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<WelcomePage />} />
          <Route path={"/login"} element={<Login siteName="OrganizeHub" />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/privacypolicy"} element={<PrivacyPolicy />} />
        </Route>
        <Route path={"/taskPage"} element={<Task/>} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes> */
  }
}

export default App;
