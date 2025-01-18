import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserLogout from './pages/UserLogout'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserHome from './pages/UserHome'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        <Route path='/user-home' element={
          <UserProtectWrapper>
            <UserHome/>
          </UserProtectWrapper>
        }/>

        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        }/>

        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout/>
          </CaptainProtectWrapper>
        }/>


        <Route
          path='/user/logout'
          element={
            <UserProtectWrapper>
              <UserLogout/>
            </UserProtectWrapper>
              
          
            }
        />

      </Routes>

    </div>
  )
}

export default App