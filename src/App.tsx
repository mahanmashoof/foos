import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";
import Password from "./components/Password";
import Rules from "./components/Rules";
import Teams from "./components/Teams";
import { ROUTES } from "./types/constant/copy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.password} element={<Password />} />
        <Route path={ROUTES.rules} element={<Rules />} />
        <Route path={process.env.REACT_APP_adminRoute} element={<Admin />} />
        <Route path={ROUTES.teams} element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
