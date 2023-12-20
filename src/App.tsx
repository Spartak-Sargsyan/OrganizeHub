import { RouterProvider } from "react-router-dom";
import { UnAuthenticatedApp } from "./routes/UnAuthenticatedApp";
import { useCheckUser } from "./components/organizm/loginOrganizm/ChekUser";
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

function App() {
  const { isLoggedIn } = useCheckUser();

  const isLogin = localStorage.getItem("isLoggedIn") === "true";
  console.log(isLogin);

  return (
    <>
      <RouterProvider
        router={isLoggedIn && isLogin ? AuthenticatedApp : UnAuthenticatedApp}
      />
    </>
  );
}

export default App;
