import React from 'react'
import {BrowserRouter as Router, Routes , Route, BrowserRouter} from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<h1>hello i am homepage</h1>}></Route>
      <Route path='/login'element={<h1>This is login page</h1>}></Route>
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App