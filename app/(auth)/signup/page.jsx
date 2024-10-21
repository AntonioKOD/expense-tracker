'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    const [error, setError] = useState("")
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({name, email, password}),
        })
        if(response.ok){
            router.push('/')
        }else{
            const data = await response.json()
            setError(data.error || 'Signup failed')
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
            <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}