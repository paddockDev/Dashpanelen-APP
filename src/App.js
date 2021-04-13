import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { setAuthHeaders } from './services/auth'
import Landing from './pages/Landing'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import ProtectedRoute from './routes/ProtectedRoute'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Topics from './pages/Topics'
import Groups from './pages/Groups'

function App () {
  const history = useHistory()

  useEffect(() => {
    setAuthHeaders() && history.push('/home')
  }, [history])

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Landing/>
        </Route>
        <Route path={'/login'}>
          <Login/>
        </Route>
        <Route path={'/register'}>
          <Register/>
        </Route>
        <ProtectedRoute path='/home' component={Home}/>
        <ProtectedRoute path='/settings' component={Settings}/>
        <ProtectedRoute path='/topics/:slug' component={Topics}/>
        <ProtectedRoute path='/groups/learning/:slug' component={Groups}/>
        <ProtectedRoute path='/:username' component={Profile}/>
      </Switch>
    </>
  )
}

export default App
