import React, { useState} from 'react'
import styled from "styled-components";

const BookForm = ({addBook}) => {
    const [formData, setFormData] = useState({
        title:'',
        author:'',
        description:'',
        img_url:'',
        page_count: 0,
        description:'',
      })

      const [errors, setErrors] = useState([])
      
  return (
    <div></div>
  )
}

export default BookForm
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