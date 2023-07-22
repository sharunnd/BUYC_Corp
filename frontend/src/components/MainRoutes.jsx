import { Route, Routes } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { OemSpecs } from "../pages/OemSpecs";
import { BuyCar } from "../pages/BuyCar";
import { SellCar } from "../pages/SellCar";
import { Edit } from "../pages/Edit";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oemspecs" element={<OemSpecs />} />
      <Route path="/buycar" element={<BuyCar />} />
      <Route path="/sellcar" element={<SellCar />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};
