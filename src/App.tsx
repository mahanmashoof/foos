import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";
import Password from "./components/Password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="password" element={<Password />} />
        <Route path={process.env.REACT_APP_adminRoute} element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
