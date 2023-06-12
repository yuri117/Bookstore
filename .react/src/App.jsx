import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import BookPage from './components/BookPage'
import Checkout from './components/Checkout'
import { Route, BrowserRouter,Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route element = { <Home/> }  path="/" exact />
          <Route element = { <BookPage/> }  path="/book" exact />
          <Route element = { <Checkout/> }  path="/checkout" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
