import React from 'react'
import { useState } from 'react'

const Form = ({title,onSubmit}) => {
  const[data, setData]=useState({
    title:'',
    subtitle:'',
    category:'',
    description:'',
    image:''
  })
  const handleChange=(e)=>{
    const{name,value}=e.target
    setData({
      ...data,
      [name]: name==='image'?e.target.files[0]:value
      })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit(data)
  }
  return (
   <>
   
  <form onSubmit={handleSubmit} className="max-w-screen-lg mx-auto p-8 bg-white/30 backdrop-blur-lg border border-blue-300 shadow-2xl rounded-3xl dark:bg-blue-900/50 dark:border-blue-700 mt-10 transition-all duration-500 hover:shadow-blue-300 dark:hover:shadow-blue-700">
  <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 text-center mb-8 tracking-wide animate-fade-in">
    {title}
  </h2>

  {/* Title - Full Width */}
  <div className="mb-6">
    <label htmlFor="title" className="block mb-2 text-lg font-medium text-blue-900 dark:text-blue-200">
      Title
    </label>
    <input onChange={handleChange} type="text" name='title' id="title" className="bg-blue-100/50 border border-blue-400 text-blue-900 text-lg rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-lg hover:scale-[1.02]" required />
  </div>

  {/* Subtitle & Category - Side by Side */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    {/* Subtitle */}
    <div>
      <label htmlFor="subtitle" className="block mb-2 text-lg font-medium text-blue-900 dark:text-blue-200">
        Subtitle
      </label>
      <input onChange={handleChange} type="text" id="subtitle" name='subtitle' className="bg-blue-100/50 border border-blue-400 text-blue-900 text-lg rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-lg hover:scale-[1.02]" required />
    </div>

    {/* Category */}
    <div>
      <label htmlFor="category" className="block mb-2 text-lg font-medium text-blue-900 dark:text-blue-200">
        Category
      </label>
      <input onChange={handleChange} type="text" id="category" name='category' className="bg-blue-100/50 border border-blue-400 text-blue-900 text-lg rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-lg hover:scale-[1.02]" required />
    </div>
  </div>

  {/* Description */}
  <div className="mb-6">
    <label htmlFor="description" className="block mb-2 text-lg font-medium text-blue-900 dark:text-blue-200">
      Description
    </label>
    <textarea onChange={handleChange} id="description" name='description' className="bg-blue-100/50 border border-blue-400 text-blue-900 text-lg rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 h-36 resize-none transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-lg hover:scale-[1.02]" required></textarea>
  </div>

  {/* Image */}
  <div className="mb-6">
    <label htmlFor="image" className="block mb-2 text-lg font-medium text-blue-900 dark:text-blue-200">
      Image
    </label>
    <input onChange={handleChange} name='image' type="file" id="image" className="bg-blue-100/50 border border-blue-400 text-blue-900 text-lg rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 transition-all duration-300 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:shadow-lg hover:scale-[1.02]" />
  </div>

  {/* Submit Button */}
  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-2xl text-lg px-6 py-4 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition-all transform hover:scale-105">
    Submit
  </button>
</form>

   </>
  )
}
  
export default Form