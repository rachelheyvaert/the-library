import React, {useState} from 'react'
import styled from "styled-components";

const ReviewForm = ({addReview}) => {
  const [formData, setFormData] = useState({
    rating: "",
    review_body: ""
  })
  const [errors, setErrors] = useState([])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    e.preventDefault()
    
    fetch('/reviews',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then(addReview)
      } else {
        //Display errors
        res.json().then(data => {
          // debugger
          setErrors(Object.entries(data.errors))
        })
      }
    })
  }

  return (
    <div>     
       <Form onSubmit={onSubmit}>
   
    <label>Rating</label>
    <input type='number' name='budget' value={formData.rating} onChange={handleChange} />
  
    <label>Review</label>
    <textarea type='text' rows='4' cols='50' name='description' value={formData.review_body} onChange={handleChange} />
  
    <input type='submit' value='Update Production' />
  </Form>
  </div>
  )
}

export default ReviewForm;
export const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:"Georgia, serif";
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