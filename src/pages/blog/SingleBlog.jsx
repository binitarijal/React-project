import React from 'react'
import{Link} from 'react-router-dom'
const SingleBlog = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div className="max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
    <img 
      src="https://i.pinimg.com/originals/39/11/6c/39116c247669762f4ce72be4ce2b862e.jpg" 
      alt="Blog Cover" 
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">Exploring the Future of AI</h1>
      <h2 className="text-lg text-gray-600 mt-2">How Artificial Intelligence is Shaping Our World</h2>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Artificial Intelligence (AI) is rapidly transforming industries and everyday life. 
        From automation to advanced decision-making, AI is at the core of innovation. 
        In this blog, we explore the latest trends, breakthroughs, Artificial Intelligence (AI) is rapidly transforming industries and everyday life. 
        From automation to advanced decision-making, AI is at the core of innovation. 
        In this blog, we explore the latest trends, breakthroughs, and the and the future impact of AI on society.
      </p>
      
      <div className="flex space-x-4 mt-6">
      <Link to="/blog/edit">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Edit Blog
        </button>
        </Link>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
          Delete Blog
        </button>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SingleBlog