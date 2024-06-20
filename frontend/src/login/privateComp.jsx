import React from "react";
import { Navigate , Outlet } from "react-router-dom";


export default function Privateroute(){

    const auth=localStorage.getItem('user')
    return (
        <>
        
        <Outlet/>
        
        </>
    )
}
