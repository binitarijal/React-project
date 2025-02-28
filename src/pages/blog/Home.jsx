import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/Card'
import { baseUrl } from '../../config'

const Home = () => {

  const[blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
   
      const response=await axios.get(`${baseUrl}/blog`)
      if(response.status===200){
        console.log(response.data.data)
      setBlogs(response.data.data)
  }
  }
  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-7 mt-9 ">
        {
          blogs.length>0 && blogs.map((blog)=>{
            return(
              <Card blog={blog}/>
            )
          })
        
        }
      </div>
    </Layout>
  )
}

export default Home