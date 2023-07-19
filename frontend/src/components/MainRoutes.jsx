import { Route, Routes } from "react-router-dom"
import { Signup } from "../pages/Signup"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { OemSpecs } from "../pages/OemSpecs"

export const MainRoutes = () => { 
    return (
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/oemspecs' element={<OemSpecs />} />
        </Routes>
    )
}