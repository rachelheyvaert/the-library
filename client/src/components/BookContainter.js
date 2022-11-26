import React from 'react'
import styled from 'styled-components'
import BookCard from './BookCard';

const BookContainter = ({books}) => {


//   function handleCreateNewBook(){
//   fetch("http://localhost:3000/books", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Monk Parakeet",
//       species: "Myiopsitta monachus",
//     }),
//   });
// }

  return (
    <div>
      <Title>Your Collection</Title>
         <CardContainer>
             {books.map(book => <BookCard  key={book.id} book={book}  />)}
         </CardContainer>
    </div>
  )
}

export default BookContainter
const Title = styled.h1`
    font-family: "Splash";
`
const CardContainer = styled.ul`
    display:flex;
    flex-direction:column;
    margin: 20 px;
    width: 10 px
`