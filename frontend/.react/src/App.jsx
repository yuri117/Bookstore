import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import BookPage from './components/BookPage'
import Checkout from './components/Checkout'
import { Route, BrowserRouter,Routes,Navigate,Outlet } from "react-router-dom";
import { AuthProvider } from './context/auth'
import Login from './components/Login/signin'
import Register from './components//Login/register'
import useAuth from './hooks/useAutentication'
import BookEdit from './components/AdminComponents/BookEdit'
import PageAdmin from './components/AdminComponents/PageAdmin'
import CartPage from './components/Carrinho/CartPage'

function App() {

  const {user} = useAuth();


  const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    if (isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };


  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route element = { <Home/> }  path="/" exact />
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
              <Route path="/checkout" element={<Checkout />} exact/>
              <Route path="/carrinho" element={<CartPage />} exact/>
            </Route>
            <Route element = { <BookPage/> }  path="/book" exact />
            <Route element = { <Login/> }  path="/login" exact />
            <Route element = { <Register/> }  path="/register" exact />
            <Route element={<ProtectedRoute isAllowed={!!user && user.role === "admin"} />}>
              <Route element = { <PageAdmin/> }  path="/admin" exact />
              <Route element = { <BookEdit/> }  path="/bookEdit" exact />
            </Route>
            <Route element = { <Login/> }  path="*" exact />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
  )
}

export default App
