'use client'
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        if(response.ok){
            router.push('/')
        }else{
            const data = await response.json()
            setError(data.error || 'Signin failed')
        }
    }
    return(
        <div>
            <h1 className="text-black">Sign In</h1>
            <form className="text-black" onSubmit={handleSubmit}>
                <div>
                <label className="text-black"htmlFor="email">Email</label>
                <input className="border-4 border-blue-300 rounded-lg" type="email" placeholder="name@example.com"onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label  className="text-black"htmlFor="password">Password</label>
                    <input className="border-4 border-blue-300 rounded-lg" type="password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}