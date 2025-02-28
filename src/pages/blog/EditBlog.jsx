import React from 'react'
import Form from './components/form/Form'
import Layout from '../../components/layout/Layout'
const EditBlog = () => {

  const {id}=useParams()
  const{editblog,setEditedBlog}=useState({})
  const fetchBlog=async()=>{
    const response=await axios.get(`${baseUrl}/blog/edit/${id}`)
    if(response.status===200){
      console.log(response.data)
      setEditedBlog(response.data.data)
    }
  }
  return (
    <Layout>
        <Form title="Edit Blog"/>
    </Layout>
  )
}

export default EditBlog