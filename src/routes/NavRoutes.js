import { BrowserRouter, Routes, Route } from "react-router-dom";
import FixturesPage from "../Pages/FixturesPage";
import Football from "../Pages/Football";
// import F1 from "../Pages/F1";

function NavRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Football />}></Route>
        <Route exact path="/fixtures" element={<FixturesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavRoutes;
