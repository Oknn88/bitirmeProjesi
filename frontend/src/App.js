import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  const { kullanici } = useAuthContext();
  return (
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={kullanici ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!kullanici ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!kullanici ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={!kullanici ? <Login /> : <Profile />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
