import React from 'react'

const BookContainter = () => {


  function handleCreateNewBook(){
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Monk Parakeet",
      species: "Myiopsitta monachus",
    }),
  });
}

  return (
    <div>BookContainter</div>
  )
}

export default BookContainter