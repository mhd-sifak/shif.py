import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SingIn";

import Header from "./component/Header";
import Womens from "./pages/Womens";
import Electronic from "./pages/Electronic";
import Clearance from "./pages/Clearance";
import Explore from "./pages/Explore";
import Apparel from "./pages/Apparel";

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="Womens/" element={ <Womens/>}/>
    <Route path="SingIn/" element={ <SingIn/>}/>
    <Route path="SingUp/" element={ <SingUp/>}/>
    <Route path="Electronic/" element={ <Electronic/>}/>
    <Route path="Clearance/" element={ <Clearance/>}/>
    <Route path="Explore/" element={ <Explore/>}/>
    <Route path="Apparel/" element={ <Apparel/>}/>
   </Routes>
   </BrowserRouter>
  )
}
