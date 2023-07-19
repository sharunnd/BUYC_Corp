import { Route, Routes } from "react-router-dom"
import { Signup } from "../pages/Signup"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"

export const MainRoutes = () => { 
    return (
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}