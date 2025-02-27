import React from 'react'

const Form = ({title}) => {
  return (
   <>
   <form className="max-w-screen-lg mx-auto p-6 bg-white/20 backdrop-blur-md border border-blue-300 shadow-lg rounded-2xl dark:bg-blue-900/50 dark:border-blue-700 mt-15 transition-all duration-300">
  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 text-center mb-6">
    {title}
  </h2>
  
  <div className="mb-4">
    <label htmlFor="title" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">
      Title
    </label>
    <input type="text" id="title" className="bg-blue-100/50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-400 block w-full p-3 transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md" required />
  </div>

  <div className="mb-4">
    <label htmlFor="subtitle" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">
      Subtitle
    </label>
    <input type="text" id="subtitle" className="bg-blue-100/50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-400 block w-full p-3 transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md" required />
  </div>

  <div className="mb-4">
    <label htmlFor="description" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">
      Description
    </label>
    <textarea id="description" className="bg-blue-100/50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-400 block w-full p-3 h-32 resize-none dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md transition-all duration-300" required></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="image" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">
      Image
    </label>
    <input type="file" id="image" className="bg-blue-100/50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-4 focus:ring-blue-400 focus:border-blue-400 block w-full p-3 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-md transition-all duration-300" required />
  </div>

  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-3 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition-all transform hover:scale-105">
    Submit
  </button>
</form>
   </>
  )
}

export default Form