import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import BookPage from './components/BookPage'
import Checkout from './components/Checkout'
import { Route, BrowserRouter,Routes } from "react-router-dom";
import { AuthProvider } from './context/auth'
import Login from './components/CheckoutComponents/Login/signin'
import Register from './components/CheckoutComponents/Login/register'
import useAuth from './hooks/useAutentication'

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route element = { <Home/> }  path="/" exact />
            <Route element = { <BookPage/> }  path="/book" exact />
            <Route element = {<Checkout/>}  path="/checkout" exact />
            <Route element = { <Login/> }  path="/login" exact />
            <Route element = { <Register/> }  path="/register" exact />
            <Route element = { <Login/> }  path="*" exact />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
