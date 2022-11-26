import styled from "styled-components";
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


const SignupForm = ({updateUser}) => {

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:''
})
const [errors, setErrors] = useState([])
const history = useHistory()
const {username, email, password} = formData
function onSubmit(e){
  e.preventDefault()
  const user = {
      username,
      email,
      password
  }

  fetch(`/users`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
  })
  .then(res => {
      if(res.ok){
          res.json().then(user => {
              updateUser(user)
              history.push(`/users/${user.id}`)
          })
      }else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
  })
 
}
 const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

  return (
    <div>
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>  
          <input type='text' name='username' value={username} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
       
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
        
       
        <input type='submit' value='Sign up!' />
      </Form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    </div>
  )
}

export default SignupForm;
export const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:"Splash";
font-size:30px;
input[type=submit]{
  background-color:brown;
  color: white;
  height:40px;
  font-family:Aria"Splash";
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`