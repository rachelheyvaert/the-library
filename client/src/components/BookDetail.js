import React from 'react'
import  { Link, useParams, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

const BookDetails = ({deleteBook}) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const [book, setBook] = useState({})

  const params = useParams()
  const history = useHistory()
  useEffect(()=>{
    //GET to '/book/:id'
    fetch(`/books/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setBook(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])


  function handleDelete(){
    //DELETE to `/book/${params.id}`
    fetch(`/books/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteBook(id)
        history.push('/')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>
  const {title, author, description, img_url} = book
  return (
    <CardDetail>
        <h1>{title}</h1>
          <div className='wrapper'>
            <div>
              <h3>Author:</h3>
              <p>{author}</p>
              <h3>Description:</h3>
              <p>{description}</p>
              <h2>Reviews: </h2>
              <ul>
                {/* {reviews.map(review => <li>{crew.role} : {crew.name}</li>)} */}
              </ul>
            </div>
            <img src={img_url}/>
          </div>
      <button><Link to={`/productions/${id}/edit`}>Edit Production</Link></button>
      <button onClick={handleDelete}>Delete Production</button>
      <button onClick={handleBuy} >Buy Ticket</button>
      </CardDetail>
    )
  }

export default BookDetails;
const CardDetail = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:start;
    font-family:Arial, sans-serif;
    margin:5px;
    h1{
      font-size:60px;
      border-bottom:solid;
      border-color:#42ddf5;
    }
    .wrapper{
      display:flex;
      div{
        margin:10px;
      }
    }
    img{
      width: 300px;
    }
    button{
      background-color:#42ddf5;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
    }
  `