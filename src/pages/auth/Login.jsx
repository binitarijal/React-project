import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
const Login = () => {  const navigate=useNavigate()
  const handleLogin=async(data)=>{
   
 try{
  const response= await axios.post(`${baseUrl/login}`,data)
  if(response.status===200){
    navigate('/login')
  }
  else{
    alert("registratin failed")
  }
 } catch(error){
   alert(error?.response?.data?.message)
  }
}

  
  return (
    <>
  <Form type="login" onSubmit={handleLogin}/>
    </>
  )

}
export default Login