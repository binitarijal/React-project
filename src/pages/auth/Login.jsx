import React from 'react'

const Login = () => {
  return (
    <>
    <form className="max-w-sm mx-auto p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md dark:bg-blue-900 dark:border-blue-700 mt-36">
  <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 text-center mb-4">Login</h2>
  <div className="mb-4">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">Your email</label>
    <input type="email" id="email" className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">Your password</label>
    <input type="password" id="password" className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
 
  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition-all">Submit</button>
</form>
    </>
  )
}

export default Login