import Link from "next/link"
import React from "react"
export default function NavBar(){
    return(
        <nav className='bg-blue-600 p-4 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='text-white text-2xl font-bold'>
                <Link href='/'>ExpenseTracker</Link>
            </div>
            <div className='space-x-4 flex'>
                <Link href='/view-expenses'  className="text-white border-2 border-transparent hover:border-white hover:bg-blue-500 transition duration-300 rounded-lg p-2 text-lg">
                    View Expenses
                </Link>
                <Link href='/add-expense' className="text-white border-2 border-transparent hover:border-white hover:bg-blue-500 transition duration-300 rounded-lg p-2 text-lg">
                    Add Expense
                </Link>
                <Link href='/login' className="text-white border-2 border-transparent hover:border-white hover:bg-blue-500 transition duration-300 rounded-lg p-2 text-lg">
                    Log In
                </Link>
            </div>
        </div>
    </nav>
    )
}