import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../config'

const SingleBlog = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState({})

  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`)
    if (response.status === 200) {
      console.log(response.data)
      setBlog(response.data.data)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div className="max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
    <img 
      src={blog?.imageUrl} 
      alt="Blog Cover" 
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">{blog?.title}</h1>
      <h2 className="text-lg text-gray-600 mt-2">{blog?.subtitle}</h2>
      <p className="text-gray-700 mt-4 leading-relaxed">
        {blog?.description}
      </p>
    
      {/* Category Section */}
      <div className="mt-4">
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
          #{blog?.category}
        </span>
      </div>

      {/* Author Section */}
      <div className="mt-2 text-gray-600 text-sm">
        <span className="font-semibold">Author: </span>
        {blog?.userId?.username}
      </div>

      <div className="flex space-x-4 mt-6">
      <Link to={`/blog/edit/${blog._id}`}>
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
