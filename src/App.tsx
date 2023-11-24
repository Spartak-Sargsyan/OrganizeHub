import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Register from "./components/template/Register/Register";
import Login from "./components/template/Register/Login";
const Header = () => (
  <>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
