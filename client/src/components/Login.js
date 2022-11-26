import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";

function Login({ updateUser}) {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        // Logs in user
        fetch(`/login`,{
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
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <> 
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='username' value={username} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
       
        <input type='submit' value='Log in!' />
      </Form>
      {errors? <div>{errors}</div>:null}
        </>
    )
}


export default Login
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