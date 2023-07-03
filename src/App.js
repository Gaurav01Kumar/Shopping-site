import React,{useEffect} from 'react'
import {BrowserRouter as Router, Routes , Route, BrowserRouter} from "react-router-dom"
import Home from './pages/home/Home'
import "./App.css"
import ProductDetails from './pages/ProductDetails'
import SignUp from './components/Form/Signup'
import Login from './components/Form/login'
import ProductList from './pages/ProductList/ProductList'
import Cart from './pages/Cart/Cart'
import Buynow from './pages/BuyNowPage/Buynow'
import Contact from './pages/Cart/Contact'
import { Payment } from './pages/Payment/payment'

const App = () => {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/productDetails/:productId' element={<ProductDetails/>}></Route>
      <Route path="/productlist" element={<ProductList/>} ></Route>
      <Route path="/signUp" element={<SignUp/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path='/buynow' element={<Buynow/>}></Route>
      <Route path='/product/payment' element={<Payment/>} ></Route>
      <Route path='/contactus' element={<Contact/>}></Route>

     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App