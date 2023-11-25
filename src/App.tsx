// import { ChangeEvent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/organizm/Layout/Layout";
import Login from "./components/template/Register/Login";
import Register from "./components/template/Register/Register";
import NotFoundPage from "./components/pages/ErrorPages/NotFoundPage";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";

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
const LoadingPage: React.FC = () => {
  return <h1>Hello world</h1>;
};

function App() {
  return (
    // <FileUpload />
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<LoadingPage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/privacypolicy"} element={<PrivacyPolicy />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* <NotFoundPage/> */}
    </>
  );
}

export default App;
