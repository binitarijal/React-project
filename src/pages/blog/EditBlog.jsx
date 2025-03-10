import React, { useState } from 'react'
import Form from './components/form/Form'
import Layout from '../../components/layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../config'
import axios from 'axios'
const EditBlog = () => {
const { id } = useParams()
  const navigate=useNavigate()
  console.log("Extracted ID from useParams:", id); // Debugging
  const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

  const handleEditBlog = async(data) => {
    if (!isValidObjectId(id)) {
      alert("Invalid blog ID!");
      return;
    }

    console.log(`Making API call to: ${baseUrl}/blog/${id}`); // Debugging
    
   try{
    const response=await axios.patch(`${baseUrl}/blog/${id}`,data,{
      headers:{
        // 'Content-Type':'multipart/form-data',
        "Authorization": localStorage.getItem('token')
      }
    })
    if(response.status===200){
      navigate('/')
    }else{
      alert('Failed to edit blog')
    }
   }
   catch(error){
alert(error?.response?.data?.message||'something went wrong')
  }
}
  return (
    <Layout>
        <Form title="Edit Blog" onSubmit={handleEditBlog}/>
    </Layout>
  )
}

export default EditBlog