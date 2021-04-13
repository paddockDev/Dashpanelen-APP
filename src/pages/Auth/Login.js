import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../../services/auth'
import Background from './Background'
import GitHubLogin from '../../components/GitHubLogin'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault()

    const isAuth = await login(email, password)
    if (isAuth) {
      history.push('/home')
    }
  }

  return (
    <>
      <div className="w-full flex flex-row h-screen overflow-hidden">
        <Background/>
        <div
          className="w-full lg:w-1/2 bg-white text-default p-8 lg:p-24 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold font-poppins mb-4">Login to
            Dashpanelen</p>
          <form className="flex flex-col text-sm mb-4 w-full">
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Email</span>
                <input name="email" id="email" type="email"
                       className="form-input mt-1 text-xs block w-full bg-white"
                       placeholder="Enter your email"
                       onChange={(e) => setEmail(e.target.value)}/>
              </label>
            </div>
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Password</span>
                <input name="password" id="password" type="password"
                       className="form-input mt-1 text-xs block w-full bg-white"
                       placeholder="Enter your password"
                       onChange={(e) => setPassword(e.target.value)}/>
              </label>
            </div>
            <div className="w-full">
              <button onClick={handleLogin} type="submit"
                      className="px-4 py-3 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none">Login</button>
              <GitHubLogin/>
            </div>
          </form>
          <div className="w-full children-x-1">
            <span className="text-secondary">New user?</span>
            <span><a href={'/register'}>Create account here</a></span>
          </div>
          <div className="w-full">
            <span><a href={'/login'}>Forgot password?</a></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
