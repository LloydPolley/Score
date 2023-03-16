import { BrowserRouter, Routes, Route } from "react-router-dom";
import Football from "../Pages/Football";
import F1 from "../Pages/F1";

function NavRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Football />}></Route>
        <Route exact path="/f1" element={<F1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavRoutes;
