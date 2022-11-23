import * as React from 'react';
import {createGlobalStyle} from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home.js';
import SignupForm from './components/SignupForm'
import BookCard from './components/BookCard'
import Navigation from './components/Navigation'
import BookContainter from './components/BookContainter.js';
import UserPage from './components/UserPage.js';
import Login from './components/Login.js';


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
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path='users/new'>
          <SignupForm />
        </Route>
        <Route path='/users/:id'>
        <UserPage />
      </Route>
        <Route path='/login' >
        <Login />
      </Route>
        <Route path='books/new'>
          <BookCard/>
        </Route>
        <Route exact path='/'>
          <BookContainter />
        </Route>
      <Home />
      </Switch>


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
