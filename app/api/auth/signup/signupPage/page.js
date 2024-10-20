"use client"

import {useState} from "react";
import { useRouter } from "next/navigation";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState(null);
    const router = useRouter();

    const handleSubmit = async(e)=> {
        e.preventDefault();

        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(res.ok){
            router.push("/auth/signin");
        }else{
            const {error} = await res.json();
            setError(error)
        }
    };

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required/>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}