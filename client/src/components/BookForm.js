import React, { useState} from 'react'
import styled from "styled-components";

const BookForm = ({addBook}) => {
    const [formData, setFormData] = useState({
        title:'',
        author:'',
        description:'',
        img_url:'',
        page_count: '',
      })
      const [errors, setErrors] = useState([])
  
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

      function onSubmit(e){
        e.preventDefault()
        
        fetch('/books/new',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData, ongoing:true})
        })
        .then(res => {
          if(res.ok){
            res.json().then(addBook)
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
      {/* {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null} */}
      <Form onSubmit={onSubmit}>
        <label>Title </label>
        <input type='text' name='title' value={formData.title} onChange={handleChange} />
        
        <label> Author</label>
        <input type='text' name='genre' value={formData.author} onChange={handleChange} />
      
        <label>Budget</label>
        <input type='number' name='budget' value={formData.page_count} onChange={handleChange} />
      
        <label>Image</label>
        <input type='text' name='image' value={formData.img_url} onChange={handleChange} />

        <label>Description</label>
        <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />
      
        <input type='submit' value='Update Books' />
      </Form>
    </div>
  )
}

export default BookForm;
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