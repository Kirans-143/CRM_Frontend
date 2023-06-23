import "./App.css";
import Login from "./pages/login/Login";
import Customer from "./pages/Customer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui/dist/js/coreui.min.js";

//import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {localStorage.getItem("userTypes") === "CUSTOMER" && (
          <Route path="/customer" element={<Customer />} />
        )}
        {/* {localStorage.getItem("userTypes") === "ADMIN" && (
          <Route path="/admin" element={<Admin />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
