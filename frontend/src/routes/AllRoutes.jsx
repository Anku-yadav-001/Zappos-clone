import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { ReturnOptions } from "../pages/ReturnOptions";


export function AllRoutes(){

    return <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
        <Route path="/return-trans-options" element={<ReturnOptions/>}/>
    </Routes>
    </>
}
