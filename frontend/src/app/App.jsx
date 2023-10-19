import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import UserLayout from "./components/users/layout/user-layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
