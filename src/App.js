import React, { useContext } from 'react'
import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (

    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </div>

  )
}
