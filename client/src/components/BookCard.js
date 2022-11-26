import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const BookCard = ({book}) => {
  const {title, author, description, page_count, img_url, id} = book
  console.log(book)



    
  return (
<Card>
<div>
  <Link to={`/book/${id}`}><h3>{title}</h3></Link>
  <img src={img_url}/>
  <p>By: {author}</p>
  {/* <p>{description}</p> */}
  <p>Pages: {page_count}</p>
</div>
</Card>
  )
}

export default BookCard
const Card = styled.li`
    display:flex;
  width: flex;
   flex-direction:row;
   flex-wrap: wrap;
    justify-content:start;
    font-family: "Splash";
    margin-left:50px;
    &:hover {
      transform: scale(1.15);
      transform-origin: top left;
    }
    a{
      text-decoration:none;
      color:black;
    }
    img{
      width: 180px;
      margin-left:20%;
      mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
    }
    position:flex;
    div{
     position:absolute;
    
    }
  `
  const Descrip = styled.p`
  
  `