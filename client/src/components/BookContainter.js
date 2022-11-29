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
    font-family: "Georgia, serif";
`
const CardContainer = styled.ul`
display:flex;
spacing: 2px;
flex-direction:row;
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
`