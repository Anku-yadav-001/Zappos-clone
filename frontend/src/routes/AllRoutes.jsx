import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { ReturnOptions } from "../pages/ReturnOptions";
import { GetHelp } from "../pages/GetHelp";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";


export function AllRoutes(){

    return <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
        <Route path="/return-trans-options" element={<ReturnOptions/>}/>
        <Route path="/customer-service" element={<GetHelp/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
}
