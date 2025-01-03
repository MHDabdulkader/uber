import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserLogout from './pages/UserLogout'
import UserSignUp from './pages/UserSignUp'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignUp/>}/>
      </Routes>

    </div>
  )
}

export default App