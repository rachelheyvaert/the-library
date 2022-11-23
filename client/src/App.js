import * as React from 'react';
import {createGlobalStyle} from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home.js';
import Navigation from './components/Navigation'

function App() {
const [books, setBooks] = useState([]);
const [errors, setErrors] = useState(false)

useEffect(() =>{
  fetchBooks()
  // console.log(books)
},[])

const fetchBooks = () => {
  fetch('http://localhost:3000/')
  .then(res => {
    if(res.ok){
      res.json().then(setBooks)
      console.log(books)
    }else {
      res.json().then(data => setErrors(data.error))
    }
  })
}
if(errors) return <h1>{errors}</h1>

  return (
    <div className="App">
      <Navigation />
      <Home />

    </div>
  );
}

export default App
const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `
