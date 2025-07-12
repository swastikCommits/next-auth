"use client";

import { signIn, signOut } from "next-auth/react";


export const Appbar = () => {
    
    return <div className="grid grid-cols p-4">
        <button className="cursor-pointer" onClick={()=>{
            signIn();
        }}>Signin</button>
        <button className="cursor-pointer" onClick={()=>{
            signOut();
        }}>Logout</button>
    </div>
}