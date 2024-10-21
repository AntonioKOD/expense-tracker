import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <Link href='/auth/signupPage' className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out ">Sign Up</Link>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl ">
          Effortlesly manage your spending and achieve
          <span className="relative whitespace-nowrap text-blue-400">
            <svg aria-hidden='true' viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-400" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative">Financial Control</span>

          </span>
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          SpendWise is a modern and secure expense tracker designed to help you monitor and manage your daily finances. With a sleek interface and easy-to-use features, you can track spending, view detailed summaries, and stay on top of your financial goals.
        </p>
      </div>
      <div className="py-12 bg-blue-900 text-white sm:py-12 lg:py-16 mt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              SpendWise gives you total control over your finances with simple, powerful tools
            </h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yeallow-400 via-pink-500 to-green-600">
                </div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Seamless Sign-In
                </h3>
                <p className="mt-6 text-base text-gray-600">Quick and secure access to your personal dashboard.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yeallow-400 via-pink-500 to-green-600">
                </div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Instant Expense Tracking
                </h3>
                <p className="mt-6 text-base text-gray-600">Add expenses in seconds to tay on top of your spending</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yeallow-400 via-pink-500 to-green-600">
                </div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Real-Time Insights
                </h3>
                <p className="mt-6 text-base text-gray-600">Get live updates on your financial habits and totals</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yeallow-400 via-pink-500 to-green-600">
                </div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Smart Edits
                </h3>
                <p className="mt-6 text-base text-gray-600">Easily modify or delete transactions when things change</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yeallow-400 via-pink-500 to-green-600">
                </div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Mobile-Optimized
                </h3>
                <p className="mt-6 text-base text-gray-600">Manage your finances from anywhere, on any device</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yeallow-400 via-pink-500 to-green-600">
                </div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                All-in-One Dashboard
                </h3>
                <p className="mt-6 text-base text-gray-600">A clear overview of your expenses—everything you need, all in one place</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mt-8">
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold text-slate-900 text-center mb-4">Why SpendWise?</h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700 ml-4 mb-4">
            <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Simple, intuitive design for all users</span></li>
            <li className="flex items-start"> 
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Keep all your finances in one place</span></li>
            <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Budget smarter with instant financial insights</span></li>
          </ul>
        </div>

        <div className="px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8 dark:bg-gray-600">
          <p className="text-3xl font-extrabold leading-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            <span>Ready to try it?</span>
            <br></br>
            <span className="text-blue-600 dark:text-blue-400"> Get Started Today.</span>
          </p>
          <div className="flex justify-center gap-4 mt-8 font-medium">
    <Link href="#"
      className="px-5 py-3 text-base leading-6 text-white bg-indigo-600 dark:bg-gray-800 rounded-md hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:shadow-outline">
      Sign Up
    </Link>
    
  </div>
        </div>

        
    </>
  );
}

