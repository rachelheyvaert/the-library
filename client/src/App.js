import * as React from 'react';
import {createGlobalStyle} from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home.js';
import SignupForm from './components/SignupForm'
import BookCard from './components/BookCard'
import Navigation from './components/Navigation'
import UserPage from './components/UserPage.js'
import Login from './components/Login.js'
import ReviewContainer from './components/ReviewContainer.js'
import BookDetail from './components/BookDetail.js'
import ReviewForm from './components/ReviewForm.js'

function App() {
const [books, setBooks] = useState([]);
const [errors, setErrors] = useState(false)
const [currentUser, setCurrentUser] = useState(false)


useEffect(() =>{
  fetchBooks()
  console.log(books)
  console.log(currentUser)
},[])

const fetchBooks = () => {
  fetch('/books')
  .then(res => {
    if(res.ok){

      res.json().then(setBooks)
      console.log(books)
    }else {
      res.json().then(data => setErrors(data.error))
    }
  })
}

const addBook = (book) => setBooks(current => [...current, book])
const updateUser = (user) => setCurrentUser(user)
const deleteBook = (id) => setBooks(current => current.filter(b => b.id !== id))
if(errors) return <h1>{errors}</h1>

  return (
    <div className="App">
      <GlobalStyle />
      <Navigation currentUser={currentUser} updateUser={updateUser} />
      <Switch>
      <Route exact path='/'>
          <Home />
        </Route>
        <Route path='users/new'>
          <SignupForm updateUser={updateUser}/>
        </Route>
        <Route path='/users/:id'>
        <UserPage />
      </Route>
        <Route path='/login' >
        <Login />
      </Route>
        <Route path='books/new'>
          <BookCard addBook={addBook}/>
        </Route>
        <Route exact path='/book/:id'>
         <BookDetail deleteBook={deleteBook}/>
      </Route>
        <Route exact path='reviews'>
          <ReviewContainer />
        </Route>
        <Route path='review/new'>
          <ReviewForm />
        </Route>
    
      </Switch>


    </div>
  );
}

export default App
const GlobalStyle = createGlobalStyle`
    body{
      background-color: papayawhip; 
      text-align: center;
      font-weight: bold;
      padding: 0.25em 1em;
      font-size: 1em;
      color: black;
    }
    `
