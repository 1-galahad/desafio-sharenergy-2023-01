import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/home/Home";
import UserCrud from "../Components/user/UserCrud";
import CatsApi from "../Components/cats/CatsApi"
import DogsApi from "../Components/dogs/DogsApi"

export default props =>(
    <Routes>
        <Route exact path="/" element ={<Home />}/>
        
        <Route path="/users"  element ={<UserCrud />}/>
        <Route path="/cats"   element ={<CatsApi btnText = "Submit Status"/>}/>
        <Route path="/dogs"   element ={<DogsApi/>}/>
        <Route path="*"       element ={<Home />} />
    </Routes>
);