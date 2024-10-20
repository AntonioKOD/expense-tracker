import React from 'react'
import {authenticate} from '@/app/lib/actions'

export default function LoginForm(){
    return(
        <div className='container'>
            <form action={authenticate}>

            </form>
        </div>
    )
}